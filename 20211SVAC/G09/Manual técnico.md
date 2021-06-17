# Manual técnico 
## Gramaticas
### 1) Gramatica ascendente del xml
##### En el siguiente apartado mostraremos la gramatica elaborada para el analisis del xml de manera ascendente

### lexico
##### en este espacio es donde declaramos los objetos que utilizaremos .


    %{     

        const { EtiquetaDoble } = require('../Xml/EtiquetaDoble')
        const { EtiquetaSimple } = require('../Xml/EtiquetaSimple')
        const { EtiquetaInicio } = require('../Xml/EtiquetaInicio')
        const { Atributo } = require('../Xml/Atributo')
        const { XmlResultado } = require('../Xml/XmlResultado')
            const { ControlError } = require('../Xpath/ControlError')
                    const { TipoSeleccion } = require('../Xpath/TipoSeleccion')
                    const {ReporteGramatica }= require('../Reportes/ReporteGramatica')
        let idSent = 1;
        function getId() {
                idSent += 100
                return idSent
        }
        function formatTagName(AbreTagApertura) {
                return AbreTagApertura.substring(1, AbreTagApertura.length)
        }
        
    %}
#### en este espacio declaramos los estados a utilizar 

    %lex

    %options case-insensitive
    %x Comentario
    %x TagApertura
    %x TagCierre
    %%                
#### en este espacio definimos los patrones junto con los estados

    //Comentario
    "<!--"                  {this.begin("Comentario"); }
    <Comentario>[\r\t]+     {}
    <Comentario>\n          {}
    <Comentario>"-->"       {this.popState(); }
    <Comentario>[^"-->"]+   {}

    //TagConfiguracion
    "<?xml"                                 { this.begin("TagApertura"); return 'AbreTagConf'; }
    <TagApertura>[\s\r\t\n]+                {}
    <TagApertura>[a-zA-Z_][a-zA-Z0-9_]*     { return 'NombreAtributo'; }
    <TagApertura>"="                        { return 'IgualAtributo' }
    <TagApertura>\"[^\"\n]*\"               { return 'ValorAtributo'; }
    <TagApertura>"?>"                       { this.popState(); return 'CierreTagConf'; }

    //TagApertura
    "<"[a-zA-Z_][a-zA-Z0-9_]*               { this.begin("TagApertura"); return 'AbreTagApertura'; }
    <TagApertura>[\s\r\t\n]+                {}
    <TagApertura>[a-zA-Z_][a-zA-Z0-9_]*     { return 'NombreAtributo'; }
    <TagApertura>"="                        { return 'IgualAtributo' }
    <TagApertura>\"[^\"\n]*\"               { return 'ValorAtributo'; }
    <TagApertura>">"                        { this.popState(); return 'CierreTagApertura'; }
    <TagApertura>"/>"                       { this.popState();  return 'CierreTagUnico'; }

    //TagCierre
    "</"[a-zA-Z_][a-zA-Z0-9_]*        { this.begin("TagCierre"); return 'AbreTagCierre' }
    <TagCierre>">"                    { this.popState(); return 'CierreTagCierre' }

    [\s\r\t\n]+           {}
    [^<]+                 { return 'CadenaValores'; }
    <<EOF>>               { return 'EOF'; }
    .                     { $$ = listaError.push(new ControlError(yytext, TipoSeleccion.ERROR_SINTACTICO, this._$.first_line, this._$.first_column,"XPathAscendente"))};
    /lex

### comienza la parte de la gramatica

    %start XML
    %%
    XML: 
        TAG_CONFIGURACION LISTA_ETIQUETAS EOF   { $$ = new XmlResultado($1, $2); return $$
         new ReporteGramatica("XML -> TAG_CONFIGURACION LISTA_ETIQUETAS EOF",  "XML.val = TAG_CONFIGURACION.val+LISTA_ETIQUETAS.val"      )
         }
        |LISTA_ETIQUETAS EOF                    { $$ = new XmlResultado(null, $2); return $$ 
         new ReporteGramatica("XML -> N LISTA_ETIQUETAS EOF",  "XML.val = LISTA_ETIQUETAS.val"      )
        }
    ;

    LISTA_ETIQUETAS:        
        LISTA_ETIQUETAS ETIQUETA        { $1.push($2); $$=$1;  
         new ReporteGramatica("LISTA_ETIQUETAS -> LISTA_ETIQUETAS  ETIQUETA ", " LISTA_ETIQUETAS = new Array (Etiquetas)              ----    LISTA_ETIQUETAS.push(ETIQUETA.val)"      ) }
        |ETIQUETA                       { $$ = [$1];
         new ReporteGramatica("LISTA_ETIQUETAS ->  ETIQUETA ",  "LISTA_ETIQUETAS.val =[ETIQUETA.val["      ) }
    ;

    ETIQUETA: 
        TAG_APERTURA LISTA_ETIQUETAS TAG_CIERRE 
        { $$ = new EtiquetaDoble($1.nombreTagApertura, $3, $1.listaAtributos, '', $2, @1.first_line, @1.first_column, getId()) 
           new ReporteGramatica("ETIQUETA -> TAG_APERTURA LISTA_ETIQUETAS TAG_CIERRE ",  "ETIQUETA.val = new ETITQUETA_DOBLE (TAG_APERTURA.val,LISTA_ETIQUETAS.val,TAG_CIERRE.val)"      )}
        }
        |TAG_APERTURA CadenaValores TAG_CIERRE  { $$ = new EtiquetaDoble($1.nombreTagApertura, $3, $1.listaAtributos, $2, [], @1.first_line, @1.first_column, getId()) 
                new ReporteGramatica("ETIQUETA -> TAG_APERTURA CadenaValores TAG_CIERRE ",  "ETIQUETA.val = new ETITQUETA_DOBLE (TAG_APERTURA.val,CadenaValores.lexval,TAG_CIERRE.val)"      )}
        |TAG_APERTURA TAG_CIERRE                { $$ = new EtiquetaDoble($1.nombreTagApertura, $2, $1.listaAtributos, '', [], @1.first_line, @1.first_column, getId()) 
               new ReporteGramatica("ETIQUETA -> TAG_APERTURA  TAG_CIERRE ",  "ETIQUETA.val = new ETITQUETA_DOBLE (TAG_APERTURA.val,[],TAG_CIERRE.val)"  )}
        |TAG_UNICO                              { $$ = $1   
     new ReporteGramatica("ETIQUETA -> TAG_UNICO ",  "ETIQUETA.val =TAG_UNICO.val"  )   }
        | error AbreTagApertura                  { $$ = listaError.push(new ControlError(yytext, TipoSeleccion.ERROR_SINTACTICO, this._$.first_line, this._$.first_column,"XPathAscendente"))}
    ;
    DELIMITADOR: AbreTagApertura {$$=$1;} 
        | CierreTagApertura { $$=$1} 
    ;
    TAG_APERTURA: 
        AbreTagApertura LISTA_ATRIBUTOS CierreTagApertura {
                  new ReporteGramatica("TAG_APERTURA -> AbreTagApertura LISTA_ATRIBUTOS CierreTagApertura ",  
        "TAG_APERTURA.val =AbreTagApertura.lexval + LISTA_ATRIBUTOS.val + CierreTagApertura.lexval   ")
                 $$ = {
                nombreTagApertura: formatTagName($1),
                listaAtributos: $2
        }}
        |AbreTagApertura CierreTagApertura { 
                new ReporteGramatica("TAG_APERTURA ->AbreTagApertura CierreTagApertura ",  "TAG_APERTURA.val =AbreTagApertura.lexval  + CierreTagApertura.lexval "  )
           $$ = {
                nombreTagApertura: formatTagName($1),
                listaAtributos: []
        }}
    ;

    TAG_CIERRE:
        AbreTagCierre CierreTagCierre { $$ = formatTagName(formatTagName($1))
        new ReporteGramatica("TAG_CIERRE ->AbreTagApertura CierreTagApertura ",  "TAG_CIERRE.val =AbreTagApertura.lexval  + CierreTagApertura.lexval "  )
         }
    ;

    TAG_UNICO:
        AbreTagApertura LISTA_ATRIBUTOS CierreTagUnico  { $$ = new EtiquetaSimple(formatTagName($1), $2, @1.first_line, @1.first_column, getId())
        new ReporteGramatica("TAG_UNICO -> AbreTagApertura LISTA_ATRIBUTOS CierreTagUnico ",  "TAG_UNICO.val =new EtiquetaSimple(AbreTagApertura.lexval,LISTA_ATRIBUTOS.val  , CierreTagApertura.lexval) "  )
         }
        |AbreTagApertura CierreTagUnico { $$ = new EtiquetaSimple(formatTagName($1), [], @1.first_line, @1.first_column, getId())
              new ReporteGramatica("TAG_UNICO ->AbreTagApertura CierreTagApertura ",   "TAG_UNICO.val =new EtiquetaSimple(AbreTagApertura.lexval,[ ]  , CierreTagApertura.lexval) ")
        }               
    ;

    TAG_CONFIGURACION:
        AbreTagConf LISTA_ATRIBUTOS CierreTagConf   { $$ = new EtiquetaInicio($2, @1.first_line, @1.first_column, getId()); 
              new ReporteGramatica("TAG_CONFIGURACION ->AbreTagConf LISTA_ATRIBUTOS CierreTagConf",   "TAG_CONFIGURACION.val =new EtiquetaInicio(AbreTagConf.lexval,LISTA_ATRIBUTOS.val  , CierreTagConf.lexval) "  )
        }
    ;

    LISTA_ATRIBUTOS:
        LISTA_ATRIBUTOS ATRIBUTO        { $1.push($2); $$=$1; 
         new ReporteGramatica("LISTA_ATRIBUTOS -> LISTA_ATRIBUTOS  ATRIBUTO ", " LISTA_ATRIBUTO= new Array () ----- LISTA_ATRIBUTO.push(ATRIBUTO.val)"      ) 
        }
        |ATRIBUTO                       { $$ = [$1]; new ReporteGramatica("LISTA_ATRIBUTO -> ATRIBUTO ",  "LISTA_ATRIBUTO.=[ATRIBUTO.val]"      ) }
    ;

    ATRIBUTO:
        NombreAtributo IgualAtributo ValorAtributo    {
     new ReporteGramatica("ATRIBUTO -> NombreAtributo IgualAtributo ValorAtributo  ",  "ATRIBUTO.val=new Atributo (NombreAtributo.lexval,IgualAtributo.lexval,ValorAtributo.lexval)"      ) 
                 $$ = new Atributo($1, $3, @1.first_line, @1.first_column, getId()) }
    ;

### 2) gramatica xml descendente
##### En el siguiente apartado mostraremos la gramatica elaborada para el analisis del xml de manera descendente
### lexico
##### en este espacio es donde declaramos los objetos que utilizaremos .

        %{      
                const { EtiquetaDoble } = require('../Xml/EtiquetaDoble')
                const { EtiquetaSimple } = require('../Xml/EtiquetaSimple')
                const { EtiquetaInicio } = require('../Xml/EtiquetaInicio')
                const { Atributo } = require('../Xml/Atributo')
                const { XmlResultado } = require('../Xml/XmlResultado')
                const { ControlError } = require('../Xpath/ControlError')
                const {ReporteGramatica }= require('../Reportes/ReporteGramatica')
                let idSent = 1;

                function getId() {
                        idSent += 100
                        return idSent
                }

                function formatTagName(AbreTagApertura) {
                        return AbreTagApertura.substring(1, AbreTagApertura.length)
                }
                listaError = []

        %}

##### Definimos los estados a utlizar
#
        %lex
        %options case-insensitive
        %x Comentario
        %x TagApertura
        %x TagCierre
        %%                
#### Definimos los patrones lexicamente

        //Comentario
        "<!--"                  {this.begin("Comentario"); }
        <Comentario>[\r\t]+     {}
        <Comentario>\n          {}
        <Comentario>"-->"       {this.popState(); }
        <Comentario>[^"-->"]+   {}

        //TagConfiguracion
        "<?xml"                                 { this.begin("TagApertura"); return 'AbreTagConf'; }
        <TagApertura>[\s\r\t\n]+                {}
        <TagApertura>[a-zA-Z_][a-zA-Z0-9_]*     { return 'NombreAtributo'; }
        <TagApertura>"="                        { return 'IgualAtributo' }
        <TagApertura>\"[^\"\n]*\"               { return 'ValorAtributo'; }
        <TagApertura>"?>"                       { this.popState(); return 'CierreTagConf'; }

        //TagApertura
        "<"[a-zA-Z_][a-zA-Z0-9_]*               { this.begin("TagApertura"); return 'AbreTagApertura'; }
        <TagApertura>[\s\r\t\n]+                {}
        <TagApertura>[a-zA-Z_][a-zA-Z0-9_]*     { return 'NombreAtributo'; }
        <TagApertura>"="                        { return 'IgualAtributo' }
        <TagApertura>\"[^\"\n]*\"               { return 'ValorAtributo'; }
        <TagApertura>">"                        { this.popState(); return 'CierreTagApertura'; }
        <TagApertura>"/>"                       { this.popState();  return 'CierreTagUnico'; }

        //TagCierre
        "</"[a-zA-Z_][a-zA-Z0-9_]*        { this.begin("TagCierre"); return 'AbreTagCierre' }
        <TagCierre>">"                    { this.popState(); return 'CierreTagCierre' }

        [\s\r\t\n]+           {}
        [^<]+                 { return 'CadenaValores'; }
        <<EOF>>               { return 'EOF'; }
        .                     { new ControlError(yytext, TipoSeleccion.ERROR_LEXICO, yylloc.first_line,yylloc.first_column,"XmlDescendente")};
        /lex

#### Comenzamos con la parte gramatical

        %start XML
        %%

        XML: 
                TAG_CONFIGURACION LISTA_ETIQUETAS EOF   { $$ = new XmlResultado($1, $2); return $$;
                
                new ReporteGramatica("XML -> TAG_CONFIGURACION LISTA_ETIQUETAS EOF",  "XML.val = TAG_CONFIGURACION.val+LISTA_ETIQUETAS.val"      )
                
                }
                |LISTA_ETIQUETAS EOF                    { $$ = new XmlResultado(null, $2); return $$ ;
                new ReporteGramatica("XML -> N LISTA_ETIQUETAS EOF",  "XML.val = LISTA_ETIQUETAS.val"      )

                }
        ;

        LISTA_ETIQUETAS:    ETIQUETA ListaEtiqueta {

        $2.push($1);
        $$=$2 ;

        new ReporteGramatica("LISTA_ETIQUETAS -> ETIQUETA ListaEtiqueta ",  "LISTA_ETIQUETAS.val=ListaEtiqueta.val--- ListaEtiqueta = new Array(ETIQUETA)     ////    ListaEtiqueta.push(ETIQUETA.val)"      ) 

        }
        ;

        ListaEtiqueta : ETIQUETA ListaEtiqueta  {
        
        $2.push($1);
        
        $$=$2 ;
        new ReporteGramatica("ListaEtiqueta -> ETIQUETA ListaEtiqueta ",  "    ListaEtiqueta.push(ETIQUETA.val)"      ) 
        


        
        }
        | { $$ = []; 
        new ReporteGramatica("ListaEtiqueta -> epsilon ",  "  ListaEtiqueta.val = []"      ) 
        

        }
        ;
        ETIQUETA: 
                TAG_APERTURA MenuEtiqueta { $$ = new EtiquetaDoble($1.nombreTagApertura, $2.nombreTagCierre, 
                $1.listaAtributos, $2.cadena, $2.listaEtiqueta, @1.first_line, @1.first_column, getId()) ;
                new ReporteGramatica("ETIQUETA -> TAG_APERTURA MenuEtiqueta ",
                " ETIQUTA.val= new EtiquetaDoble(TAG_APERTURA.val, MenuEtiqueta.val)"      ) ;
        
                
                }
                |TAG_UNICO                              { $$ = $1;
                
                new ReporteGramatica("ETIQUETA -> TAG_UNICO    ",
                " ETIQUTA.val= TAG_UNICO.val"      ) ;
        
                }
                
                
                | error  AbreTagApertura                     { $$ = new ControlError(yytext, TipoSeleccion.ERROR_SINTACTICO, this._$.first_line, this._$.first_column,"XmlDEscendiente")}

        ;
        DELIMITADOR: AbreTagApertura {$$=$1;} 
        | CierreTagApertura { $$=$1} 

        ; 
        MenuEtiqueta:
                LISTA_ETIQUETAS TAG_CIERRE

                { 
                        
                        
                        $$ = {
                        nombreTagCierre:$2,
                        listaEtiqueta: $1,
                        cadena:''

                };

                new ReporteGramatica("MenuEtiqueta -> LISTA_ETIQUETAS TAG_CIERRE    ",
                " MenuEtiqueta.val= LISTA_ETIQUETAS.val +TAG_CIERRE.val"      ) ;

                }
                | CadenaValores TAG_CIERRE

                {        
                        
                        $$ = {
                        nombreTagCierre: $2,
                        listaEtiqueta: [],
                        cadena:$1
                };
                
                new ReporteGramatica("MenuEtiqueta ->  CadenaValores TAG_CIERRE  ",
                " MenuEtiqueta.val= CadenaValores.lexval +TAG_CIERRE.val"      ) ;
                
                }
                | TAG_CIERRE         
                { 

                        $$ = {
                        nombreTagCierre: $1,
                        listaEtiqueta: [],
                        cadena:''
                        
                };
                
                        new ReporteGramatica("MenuEtiqueta ->   TAG_CIERRE  ",
                " MenuEtiqueta.val=TAG_CIERRE.val"      ) ;
                
                }

        ;


        TAG_APERTURA: 
                AbreTagApertura MENU_TAG_APERTURA {
                        
   
                        $$ = {
                        nombreTagApertura: formatTagName($1),
                        listaAtributos: $2.listaAtributos_
                };
                
                
                new ReporteGramatica("TAG_APERTURA ->   AbreTagApertura MENU_TAG_APERTURA ",
                " TAG_APERTURA.val=  AbreTagApertura.lexval+ MENU_TAG_APERTURA.val"      ) ;
                        
                }

        ;

        MENU_TAG_APERTURA: LISTA_ATRIBUTOS CierreTagApertura 
                {
    
                        $$ = {
                        
                        listaAtributos_: $1
                };
                        new ReporteGramatica("MENU_TAG_APERTURA: ->   LISTA_ATRIBUTOS CierreTagApertura ",
                " MENU_TAG_APERTURA.val=  LISTA_ATRIBUTOS.val+ CierreTagApertura.lexval"      ) ;

                }


                | CierreTagApertura { 
                        
     
                        $$ = {
                
                        listaAtributos_: []
                };
                
                                new ReporteGramatica("MENU_TAG_APERTURA: ->    CierreTagApertura ",
                " MENU_TAG_APERTURA.val=   CierreTagApertura.lexval"      ) ;
                
                        
                }
        ;


        TAG_CIERRE:
                AbreTagCierre CierreTagCierre { $$ = formatTagName(formatTagName($1));
                
                new ReporteGramatica("TAG_CIERRE ->AbreTagApertura CierreTagApertura ",  "TAG_CIERRE.val =AbreTagApertura.lexval  + CierreTagApertura.lexval "  );
                        
                
                }
        ;

        TAG_UNICO:
                AbreTagApertura MENU_TAG_UNICO  { 
                        
                
                        $$ = new EtiquetaSimple(formatTagName($1), $2.listaAtributos_unico, @1.first_line, @1.first_column, getId()) ;
   
                        
                                        new ReporteGramatica("TAG_UNICO: ->    AbreTagApertura MENU_TAG_UNICO",
                " TAG_UNICO.val=   AbreTagApertura.lexval+ MENU_TAG_UNICO.val"      ) ;

                        
                        }
        
        ;


        MENU_TAG_UNICO:


        LISTA_ATRIBUTOS CierreTagUnico


        {
                

                $$ = {
                        
                        listaAtributos_unico: $1
                };
                                        new ReporteGramatica("MENU_TAG_UNICO: ->    LISTA_ATRIBUTOS CierreTagUnico",
                " MENU_TAG_UNICO.val=   LISTA_ATRIBUTOS.val +CierreTagUnico.lexval"      ) ;

                }




        | CierreTagUnico
        {
                
                $$ = {
                        
                        listaAtributos_unico: []
                };
                
                                new ReporteGramatica("MENU_TAG_UNICO: ->    CierreTagUnico",
                " MENU_TAG_UNICO.val=   CierreTagUnico.lexval"      ) ;
        
                }


        ;

        TAG_CONFIGURACION:
                AbreTagConf LISTA_ATRIBUTOS CierreTagConf   { 
                        

                        $$ = new EtiquetaInicio($2, @1.first_line, @1.first_column, getId());
                        
            
                                new ReporteGramatica("TAG_CONFIGURACION: ->    AbreTagConf LISTA_ATRIBUTOS CierreTagConf ",
                " TAG_CONFIGURACION.val=     AbreTagConf.lexval LISTA_ATRIBUTOS.val CierreTagConf.lexval "      ) ;
                
                        }
        ;

        LISTA_ATRIBUTOS: ATRIBUTO ListaA  {
        
        $2.push($1);  $$=$2;
        
                new ReporteGramatica("LISTA_ATRIBUTOS -> ATRIBUTO ListaA ",  "LISTA_ATRIBUTOS.val=ListaA.val--- ListaA = new Array(ATRIBUTO)     ////    ListaA.push(ATRIBUTO.val)"      ) ;
        
        
        }

        ; 
        ListaA: ATRIBUTO ListaA {
                
 
                $2.push($1);  $$=$2;
                new ReporteGramatica("ListaA -> ATRIBUTO ListaA ",  "    ListaA.push(ATRIBUTO.val)"      ) ;
        
                
                }
        |{
                
                $$ = [ ];  

                new ReporteGramatica("ListaA -> epsilon ",  "  ListaA.val = []"      ) ;

        }
        ;


        ATRIBUTO:
                NombreAtributo IgualAtributo ValorAtributo    {
        
                        $$ = new Atributo($1, $3, @1.first_line, @1.first_column, getId()) ;
                        
                        new ReporteGramatica("ATRIBUTO -> NombreAtributo IgualAtributo ValorAtributo  ",  "ATRIBUTO.val=new Atributo (NombreAtributo.lexval,IgualAtributo.lexval,ValorAtributo.lexval)"      ) ;
                        
                }

        ;

### 3) gramatica Xpath ascendente
##### En el siguiente apartado mostraremos la gramatica elaborada para el analisis del xml de manera ascendente

### lexico
##### en este espacio es donde declaramos los objetos que utilizaremos .

    %{      
        const { TipoSeleccion } = require('../Xpath/TipoSeleccion')
        const { OpBinaria } = require('../Xpath/OpBinaria')
        const { TiposOp } = require('../Xpath/TiposOp')
        const { Primitivo } = require('../Xpath/Primitivo')
        const { TipoVal } = require('../Xpath/TipoVal')
        const { ControlError } = require('../Xpath/ControlError')
        listaError = []
    %}
#### definimos la parte lexica

    %lex
    %options case-insensitive
    %%
#### definimos los patrones, simbolos y palabras reservadas del lenguaje
    [\s]+   {}
    "<"     return 'menor'
    ">"     return 'mayor'
    "//"    return 'dobleSlash'
    "/"     return 'slash'
    "="     return 'igual'
    "|"     return 'barraVertical'
    "+"     return 'mas'
    "-"     return 'menos'
    "*"     return 'asterisco'
    "div"   return 'div'
    "!="    return 'noIgual'
    ">="    return 'mayorQue'
    "<="    return 'menorQue'
    "and"   return 'and'
    "or"    return 'or'

    "@"     return '@'
    "."     return 'punto'
    ".."    return 'dosPuntos' 
    "::"    return 'dobleDosPuntos'
    "["     return 'corecheteA'
    "]"     return 'corcheteC'
    "("     return 'parentesisA'
    ")"     return 'parentesisC'

    "ancestor"              return 'ancestor'
    "attribute"             return 'attribute'
    "child"                 return 'child'
    "descendant"            return 'descendant'
    "following"             return 'following'
    "namespace"             return "namespace"
    "parent"                return 'parent'
    "preceding"             return 'preceding'
    "self"                  return 'self'

    "node"          return 'NODO'
    "lang"          return 'LANG'   
    "position"      return 'POSICION'
    "last"          return 'ULTIMO'
    "text"          return 'TEXTO'

    \'[^\']*\'				return 'CADENA'
    [0-9]+("."[0-9]+)\b  	                return 'decimal'
    [0-9]+\b				return 'entero'
    [a-zA-Z_][a-zA-Z0-9_]*                  return 'identificador'
    <<EOF>>				        return 'EOF'

    .       {new ControlError(yytext, TipoSeleccion.ERROR_LEXICO, yylloc.first_line,yylloc.first_column,"XpathAscendente")}

    /lex
    %left 'mas' 'menos' 
    %left 'asterisco' 'slash' 
    %left 'MAYOR' 'MENOR' ' MAYORIGUAL' 'MENORIGUAL'

#### Comenzamos con la parte gramatical

    %start XPATH
    %%

    XPATH:
        CONCATENACION_SETS EOF  { return $1; }
    ;


    CONCATENACION_SETS:
        CONCATENACION_SETS barraVertical LISTA_SETS     { $1.push($3); $$=$1; }
        |LISTA_SETS                                     { $$ = [$1]; }
      
    ;
    LISTA_SETS: 
        LISTA_SETS SET  { 
                aux = $1
                while(aux.next != null) { 
                        aux = aux.next;  
                }; 
                aux.next = $2
                $$=$1; 
        }
        |SET    { $$ = $1; }
        
    ;


    SELECTOR:
        slash           { $$ = $1 }
        |dobleSlash     { $$ = $1 }
    ;

    SET:
        identificador                          { $$ = {tipo: TipoSeleccion.ACCESO_NODO_RAIZ, id: $1, next: null }; }
        |SELECTOR identificador                { $$ = {tipo: TipoSeleccion.SELECT_NODOS_FROM_NODO, selector: $1, id: $2, predicado: null, next: null }; }
        |SELECTOR identificador PREDICADO      { $$ = {tipo: TipoSeleccion.SELECT_NODOS_FROM_NODO, selector: $1, id: $2, predicado: $3, next: null }; }
        |SELECTOR arroba identificador         
        |SELECTOR dosPuntos
        |SELECTOR punto
        |SELECTOR arroba asterisco
        |SELECTOR asterisco
        | error  SELECTOR                       { $$ = new ControlError(yytext, TipoSeleccion.ERROR_SINTACTICO, this._$.first_line, this._$.first_column,"XPathAscendente")}
    ;

    PREDICADO:
        corecheteA OPERACION corcheteC  { $$ = $2; }
    ;

    OPERACION:
        OPERACION mas OPERACION         { $$ = new OpBinaria($1, $3, TiposOp.SUMA); }
        |OPERACION menos OPERACION      { $$ = new OpBinaria($1, $3, TiposOp.RESTA); }
        |OPERACION asterisco OPERACION  { $$ = new OpBinaria($1, $3, TiposOp.MULTIPLICACION); }
        |OPERACION slash OPERACION      { $$ = new OpBinaria($1, $3, TiposOp.DIVISION) }
        |entero                         { $$ = new Primitivo(parseInt($1), TipoVal.ENTERO); }
        |decimal                        { $$ = new Primitivo(parseFloat($1), TipoVal.DECIMAL); }
    ;

### 4) gramatica Xpath descendente
##### En el siguiente apartado mostraremos la gramatica elaborada para el analisis del xml de manera descendente

### lexico
##### en este espacio es donde declaramos los objetos que utilizaremos .

    %{      
        const { TipoSeleccion } = require('../Xpath/TipoSeleccion')
        const { OpBinaria } = require('../Xpath/OpBinaria')
        const { TiposOp } = require('../Xpath/TiposOp')
        const { Primitivo } = require('../Xpath/Primitivo')
        const { TipoVal } = require('../Xpath/TipoVal')
        const { ControlError } = require('../Xpath/ControlError')
        listaError = []
    %}
#### definimos la parte lexica

    %lex
    %options case-insensitive
    %%
#### definimos los patrones, simbolos y palabras reservadas del lenguaje
    [\s]+   {}
    "<"     return 'menor'
    ">"     return 'mayor'
    "//"    return 'dobleSlash'
    "/"     return 'slash'
    "="     return 'igual'
    "|"     return 'barraVertical'
    "+"     return 'mas'
    "-"     return 'menos'
    "*"     return 'asterisco'
    "div"   return 'div'
    "!="    return 'noIgual'
    ">="    return 'mayorQue'
    "<="    return 'menorQue'
    "and"   return 'and'
    "or"    return 'or'

    "@"     return '@'
    "."     return 'punto'
    ".."    return 'dosPuntos' 
    "::"    return 'dobleDosPuntos'
    "["     return 'corecheteA'
    "]"     return 'corcheteC'
    "("     return 'parentesisA'
    ")"     return 'parentesisC'

    "ancestor"              return 'ancestor'
    "attribute"             return 'attribute'
    "child"                 return 'child'
    "descendant"            return 'descendant'
    "following"             return 'following'
    "namespace"             return "namespace"
    "parent"                return 'parent'
    "preceding"             return 'preceding'
    "self"                  return 'self'

    "node"          return 'NODO'
    "lang"          return 'LANG'   
    "position"      return 'POSICION'
    "last"          return 'ULTIMO'
    "text"          return 'TEXTO'

    \'[^\']*\'				return 'CADENA'
    [0-9]+("."[0-9]+)\b  	                return 'decimal'
    [0-9]+\b				return 'entero'
    [a-zA-Z_][a-zA-Z0-9_]*                  return 'identificador'
    <<EOF>>				        return 'EOF'

    .       {new ControlError(yytext, TipoSeleccion.ERROR_LEXICO, yylloc.first_line,yylloc.first_column,"XpathAscendente")}

    /lex
    %left 'mas' 'menos' 
    %left 'asterisco' 'slash' 
    %left 'MAYOR' 'MENOR' ' MAYORIGUAL' 'MENORIGUAL'

#### Comenzamos con la parte gramatical

    %start XPATH
    %%

    XPATH:
        CONCATENACION_SETS EOF  { return $1;  }
    ;


    CONCATENACION_SETS
        :        LISTA_SETS   CONCATENACION_SETSAUX    {$2.push($1); $$=$2; }                              
    ;

    CONCATENACION_SETSAUX
        :         barraVertical LISTA_SETS CONCATENACION_SETSAUX  {$3.push($2); $$=$3; }   
        |    {$$=[];}
    ;

    LISTA_SETS: 
        SET LISTA_SETS  { 
                aux = $2
                while(aux.next != null) { 
                        aux = aux.next;  
                }; 
                aux.next = $1
                $$=$2; 
        }
        | SET  { $$=$1; }
        | error       { $$ = listaError.push(new ControlError(yytext, TipoSeleccion.ERROR_SINTACTICO, this._$.first_line, this._$.first_column,"XpathDescendente"))}
    ;
      

    SELECTOR:
        slash           { $$ = $1 }
        |dobleSlash     { $$ = $1 }
    ;

    SET:
        identificador                          { $$ = {tipo: TipoSeleccion.ACCESO_NODO_RAIZ, id: $1, next: null }; }
        |SELECTOR MENU_SELECTOR         { $$ = {tipo: TipoSeleccion.SELECT_NODOS_FROM_NODO, selector: $1, id: $2.ids, predicado: $2.predicados, next: null }; }
         

    ;


    MENU_SELECTOR: identificador MenuIdentificador
         {
          $$={
    ids:$1,
    predicados:$2
    };

        }
      
                | arroba MenuArroba
                | MENU_SET

    ;
    MENU_SET:  dosPuntos
        | punto
        |asterisco
        

    ;
    MenuIdentificador :  PREDICADO

    {
    $$=$1;

    }
    | 

    {
    $$ = null

    }
   

    ;


    MenuArroba : identificador
        | asterisco

    ;
    PREDICADO:
        corecheteA OPERACION corcheteC  { $$ = $2; }
    ;

    OPERACION:
          entero                         { $$ = new Primitivo(parseInt($1), TipoVal.ENTERO); }
         |decimal                        { $$ = new Primitivo(parseFloat($1), TipoVal.DECIMAL); }
    ;

    MENU_OPERACION :mas OPERACION  { $$=
    {
        tipo :TiposOp.SUMA,
        op:$2
    };
    }
    | menos OPERACION { $$= {
        tipo :TiposOp.RESTA,
        op:$2
     };
    }
    | asterisco OPERACION { $$= {
        tipo :TiposOp.MULTIPLICACION,
        op:$2
    };
    }
    | slash OPERACION { $$= {
        tipo :TiposOp.DIVISION,
        op:$2
    };
    }
    ;
    
## Clases utilizadas para el proyecto
### Etiqueta.ts
##### En esta clase definimos los atributos que trendra nuestro objeto que guardara el xml
    import { Tabla } from "./Tabla";

    export interface Etiqueta {
        padre: Etiqueta
        linea: number
        columna: number
        getName():string
        getAmbito():Array<string>
        getErroresSemanticos():string
        getAsTable():Tabla
        imprimir():string
        getCstDotA(idPadre:number):string
        getCstDotD(idPadre:number):string
    }
    
### EtiquetaInicio.ts
##### En esta clase definimos los atributos que llevara la etiqueta de inicio y su generacion para el cst.
    import { Graficas } from "../Graficas/Graficas";
    import { Atributo } from "./Atributo";

    export class EtiquetaInicio {
        version:string
        encoding:string
        linea: number
        columna: number
        idSent:number
        constructor(listaAtributos: Array<Atributo>, linea: number, columna: number, idSent:number) {
            this.linea = linea
            this.columna = columna
            this.idSent = idSent
            listaAtributos.forEach(atributo => {
                if (atributo.nombre == "version") {
                    this.version = atributo.valor
                } else if (atributo.nombre == "encoding") {
                    this.encoding = atributo.valor
                }
            });
        }

        getCstDotA(idPadre:number):string {
            let texto = ""
            texto += Graficas.getElement(this.idSent, "TAG_CONFIGURACION", idPadre)
            texto += Graficas.getElement(this.idSent+1, "AbreTagConf", this.idSent)
            texto += Graficas.getElement(this.idSent+2, "<?", this.idSent+1)
            texto += Graficas.getElement(this.idSent+3, "version", this.idSent)
            texto += Graficas.getElement(this.idSent+4, this.version.split("\"").join(""), this.idSent+3)
            texto += Graficas.getElement(this.idSent+5, "encoding", this.idSent)
            texto += Graficas.getElement(this.idSent+6, this.encoding.split("\"").join(""), this.idSent+5)
            texto += Graficas.getElement(this.idSent+7, "CierreTagConf", this.idSent)
            texto += Graficas.getElement(this.idSent+8, "?>", this.idSent+7)
            return texto
        }
    }

### EtiquetaDoble.ts
##### En esta clase definimos los atributos que tendra una etiqueta que tenga apertura y cierre, tambien los gets para obtener los valores que necesitemos, y los errores semanticos que podramos encontrar y su generacion par el cst.
    import { Graficas } from "../Graficas/Graficas"
    import { Atributo } from "./Atributo"
    import { Etiqueta } from "./Etiqueta"
    import { Fila } from "./Fila"
    import { Tabla } from "./Tabla"
    import { Tipos } from "./Tipos"
    import { ControlError } from "../Xpath/ControlError"
    import { NodoControlError } from "../Xpath/NodoControlError"
    import { NODATA } from "dns"

    import { TipoSeleccion } from "../Xpath/TipoSeleccion"

    export class EtiquetaDoble implements Etiqueta  {
    nombreTagAbre:string
    nombreTagCierre:string
    listaAtributos:Array<Atributo>
    cadenaValores:string
    listaHijos:Array<Etiqueta>
    linea:number
    columna:number
    idSent:number
    padre:Etiqueta= null
    tineHijos:boolean
    constructor(nombreTagAbre:string, nombreTagCierre:string, listaAtributos:Array<Atributo>, 
        cadenaValores:string, listaHijos:Array<Etiqueta>, linea:number, columna:number, idSent:number) {
        this.nombreTagAbre = nombreTagAbre
        this.nombreTagCierre = nombreTagCierre
        this.listaAtributos = listaAtributos
        this.tineHijos = listaHijos.length > 0
        this.cadenaValores = (listaHijos.length == 0)? cadenaValores : ""
        this.listaHijos = (listaHijos.length > 0)? listaHijos : []
        this.linea = linea
        this.columna = columna
        this.idSent = idSent
        this.listaAtributos.forEach(atributo => {
            atributo.etiquetaContendora = this
        })
        this.listaHijos.forEach(hijo => {
            hijo.padre = this
        });
    }

    imprimir(): string {
        let texto:string = ""
        texto += "<" + this.nombreTagAbre
        this.listaAtributos.forEach(atributo => {
            texto += " " + atributo.imprimir()
        })
        texto += ">" 
        if (this.listaHijos.length > 0) {
            texto += "\n"
        }
        texto += this.cadenaValores
        this.listaHijos.forEach(hijo => {
            texto += hijo.imprimir()
        })
        texto += "</" + this.nombreTagCierre + "> \n" 
        return texto
    }

    getName():string {
        return this.nombreTagAbre
    }

    getAmbito():Array<string> {
        let listaAmbito:Array<string> = []
        for(let etiqueta:Etiqueta = this.padre; etiqueta != null; etiqueta = etiqueta.padre) {
            listaAmbito.push(etiqueta.getName())
        }   
        listaAmbito.push("GLOBAL")
        return listaAmbito
    }

    getAsTable():Tabla {
        let tabla = new Tabla()
        tabla.addFila(new Fila (
            this.nombreTagAbre, 
            Tipos.ETIQUETA_DOBLE,
            this.getAmbito(),
            this.linea,
            this.columna,
            this.imprimir()
        ))
        this.listaAtributos.forEach(atributo => {
            tabla.addFila(atributo.getAsRowTable())
        })
        this.listaHijos.forEach(etiqueta => {
            etiqueta.getAsTable().filas.forEach(fila => {
                tabla.addFila(fila)
            })
        })
        if (!this.tineHijos) {
            if (this.cadenaValores != "") {
                tabla.addFila(new Fila (
                    "-", 
                    Tipos.VALOR,
                    [this.getName()].concat(this.getAmbito()),
                    this.linea,
                    this.columna + this.nombreTagAbre.length + 2,
                    this.cadenaValores
                ))
            }
        }
        return tabla
    }

    getErroresSemanticos():string {
        let texto = ""
        if (this.nombreTagAbre != this.nombreTagCierre) {
            console.log("error arribaa-----------")
            /*
            
            constructor(simbolo: string, tipo: TipoSeleccion, linea: any, columna: any, entorno: string) {    
            */
           texto += `Error(Linea: ${this.linea}, Columna: ${this.columna}): El nombre del tag de apertura no es igual al de cierre.\n` 
           ControlError.Agregar(
           this.nombreTagAbre,TipoSeleccion.ERROR_SEMANTICO,this.linea,this.columna,this.padre.getName());
         
           
        }
        this.listaAtributos.forEach(atributo => {
            let apariciones = 0
            for(let atr2 of this.listaAtributos) {
                if (atributo.nombre == atr2.nombre) {
                    apariciones += 1
                }
                if (apariciones > 1) {
                    console.log("error abajo")
                    texto += `Error(Linea: ${atributo.linea}, Columna: ${atributo.columna}): El atributo '${atributo.nombre}' se encuentra repetido.\n`
                    ControlError.Agregar( atributo.nombre,TipoSeleccion.ERROR_SEMANTICO,this.linea,this.columna,this.padre.getName());
                      
        
                  
                    break
                }
            }
        })
        this.listaHijos.forEach(hijo => {
            texto += hijo.getErroresSemanticos()
        })
        return texto
    }

    getCstDotA(idPadre:number):string {
        let texto = ""
        texto += Graficas.getElement(this.idSent, "ETIQUETA", idPadre)

        texto += Graficas.getElement(this.idSent+1, "TAG_APERTURA", this.idSent)
        texto += Graficas.getElement(this.idSent+2, "AbreTagApertura", this.idSent+1)
        texto += Graficas.getElement(this.idSent+3, "<" + this.nombreTagAbre, this.idSent+2)
        if (this.listaAtributos.length > 0) {
            let cont = 4
            for (let atributo of this.listaAtributos) {
                if (cont-4 != this.listaAtributos.length-1) {
                    texto += Graficas.getElement(this.idSent+cont, "LISTA_ATRIBUTOS", this.idSent+cont+1)
                    texto += atributo.getCstDotA(this.idSent+cont)
                } else {
                    texto += Graficas.getElement(this.idSent+cont, "LISTA_ATRIBUTOS", this.idSent+1)
                    texto += atributo.getCstDotA(this.idSent+cont)
                }
                cont += 1
            }
        }
        let idSent2 = this.idSent + 4 + this.listaAtributos.length
        texto += Graficas.getElement(idSent2+1, "CierreTagApertura", this.idSent+1)
        texto += Graficas.getElement(idSent2+2, ">", idSent2+1)

        if (this.listaHijos.length > 0) {
            let cont = 3
            for (let hijo of this.listaHijos) {
                if (cont-3 != this.listaHijos.length-1) {
                    texto += Graficas.getElement(idSent2+cont, "LISTA_ETIQUETAS", idSent2+cont+1)
                    texto += hijo.getCstDotA(idSent2+cont)
                } else {
                    texto += Graficas.getElement(idSent2+cont, "LISTA_ETIQUETAS", this.idSent)
                    texto += hijo.getCstDotA(idSent2+cont)
                }
                cont += 1
            }
        } else if (this.cadenaValores != "") {
            texto += Graficas.getElement(idSent2+3, "CadenaValores", this.idSent)
            texto += Graficas.getElement(idSent2+4, this.cadenaValores, idSent2+3)
        }

        let idSent3 = idSent2 + 4 + this.listaHijos.length

        texto += Graficas.getElement(idSent3+1, "TAG_CIERRE", this.idSent)
        texto += Graficas.getElement(idSent3+2, "AbreTagCierre", idSent3+1)
        texto += Graficas.getElement(idSent3+3, "</" + this.nombreTagCierre, idSent3+2)
        texto += Graficas.getElement(idSent3+4, "CierreTagCierre", idSent3+1)
        texto += Graficas.getElement(idSent3+5, ">", idSent3+4)
        
        return texto
    }

    getCstDotD(idPadre:number):string {
        let texto = ""
        texto += Graficas.getElement(this.idSent, "ETIQUETA", idPadre)

        texto += Graficas.getElement(this.idSent+1, "TAG_APERTURA", this.idSent)
        texto += Graficas.getElement(this.idSent+2, "AbreTagApertura", this.idSent+1)
        texto += Graficas.getElement(this.idSent+3, "<" + this.nombreTagAbre, this.idSent+2)
        if (this.listaAtributos.length > 0) {
            let cont = 4
            for (let atributo of this.listaAtributos) {
                if (cont === 4) {
                    texto += Graficas.getElement(this.idSent+cont, "LISTA_ATRIBUTOS", this.idSent+1)
                    texto += atributo.getCstDotA(this.idSent+cont)
                } else {
                    texto += Graficas.getElement(this.idSent+cont, "LISTA_ATRIBUTOS", this.idSent+cont-1)
                    texto += atributo.getCstDotA(this.idSent+cont)
                }
                cont += 1
            }
        }
        let idSent2 = this.idSent + 4 + this.listaAtributos.length
        texto += Graficas.getElement(idSent2+1, "CierreTagApertura", this.idSent+1)
        texto += Graficas.getElement(idSent2+2, ">", idSent2+1)

        if (this.listaHijos.length > 0) {
            let cont = 3
            for (let hijo of this.listaHijos) {
                if (cont === 3) {
                    texto += Graficas.getElement(idSent2+cont, "LISTA_ETIQUETAS", this.idSent)
                    texto += hijo.getCstDotD(idSent2+cont)
                } else {
                    texto += Graficas.getElement(idSent2+cont, "LISTA_ETIQUETAS", idSent2+cont-1)
                    texto += hijo.getCstDotD(idSent2+cont)
                }
                cont += 1
            }
        } else if (this.cadenaValores != "") {
            texto += Graficas.getElement(idSent2+3, "CadenaValores", this.idSent)
            texto += Graficas.getElement(idSent2+4, this.cadenaValores, idSent2+3)
        }

        let idSent3 = idSent2 + 4 + this.listaHijos.length

        texto += Graficas.getElement(idSent3+1, "TAG_CIERRE", this.idSent)
        texto += Graficas.getElement(idSent3+2, "AbreTagCierre", idSent3+1)
        texto += Graficas.getElement(idSent3+3, "</" + this.nombreTagCierre, idSent3+2)
        texto += Graficas.getElement(idSent3+4, "CierreTagCierre", idSent3+1)
        texto += Graficas.getElement(idSent3+5, ">", idSent3+4)
        
        return texto
    }
    
    }

### EtiquetaSimple.ts
##### En esta clase definimos los atributos que tendra objeto de una sola etiqueta, los errores, los gets y su generacion para el grafico cst.

    import { EtiquetaDoble } from './EtiquetaDoble'
    import { Atributo } from "./Atributo"
    import { Etiqueta } from "./Etiqueta"
    import { Fila } from "./Fila"
    import { Tipos } from "./Tipos"
    import { Tabla } from './Tabla'
    import { Graficas } from "../Graficas/Graficas"

    export class EtiquetaSimple implements Etiqueta  {
    nombreTag:string
    padre:EtiquetaDoble
    listaAtributos:Array<Atributo>
    linea:number
    columna:number
    idSent:number

    constructor(nombreTag:string, listaAtributos:Array<Atributo>, linea:number, columna:number, idSent:number) {
        this.nombreTag = nombreTag
        this.padre = null
        this.listaAtributos = listaAtributos
        this.linea = linea
        this.columna = columna
        this.idSent = idSent
        this.listaAtributos.forEach(atributo => {
            atributo.etiquetaContendora = this
        })
    }

    getName():string {
        return this.nombreTag
    }

    getAmbito():Array<string> {
        let listaAmbito:Array<string> = []
        for(let etiqueta:Etiqueta = this.padre; etiqueta != null; etiqueta = etiqueta.padre) {
            listaAmbito.push(etiqueta.getName())
        }   
        listaAmbito.push("GLOBAL")
        return listaAmbito
    }

    imprimir(): string {
        let texto:string = ""
        texto += "<" + this.nombreTag
        this.listaAtributos.forEach(atributo => {
            texto += " " + atributo.imprimir()
        })
        texto += "/> \n" 
        return texto
    }

    getAsTable():Tabla {
        let tabla = new Tabla()
        tabla.addFila(new Fila(
            this.getName(), 
            Tipos.ETIQUETA_SIMPLE,
            this.getAmbito(),
            this.linea,
            this.columna,
            this.imprimir()
        ))
        this.listaAtributos.forEach(atributo => {
            tabla.addFila(atributo.getAsRowTable())
        })
        return tabla
    }

    getErroresSemanticos():string {
        let texto = ""
        this.listaAtributos.forEach(atributo => {
            let apariciones = 0
            for(let atr2 of this.listaAtributos) {
                if (atributo.nombre == atr2.nombre) {
                    apariciones += 1
                }
                if (apariciones > 1) {
                    texto += `Error(Linea: ${atributo.linea}, Columna: ${atributo.columna}): El atributo '${atributo.nombre}' se encuentra repetido.\n`
                    break
                }
            }
        })
        return texto
    }

    getCstDotA(idPadre:number):string {
        let texto = ""
        texto += Graficas.getElement(this.idSent, "TAG_UNICO", idPadre)
        texto += Graficas.getElement(this.idSent+1, "AbreTagCierre", this.idSent)
        texto += Graficas.getElement(this.idSent+2, "<" + this.nombreTag, this.idSent+1)
        if (this.listaAtributos.length > 0) {
            let cont = 3
            for (let atributo of this.listaAtributos) {
                if (cont-3 != this.listaAtributos.length-1) {
                    texto += Graficas.getElement(this.idSent+cont, "LISTA_ATRIBUTOS", this.idSent+cont+1)
                    texto += atributo.getCstDotA(this.idSent+cont)
                } else {
                    texto += Graficas.getElement(this.idSent+cont, "LISTA_ATRIBUTOS", this.idSent)
                    texto += atributo.getCstDotA(this.idSent+cont)
                }
                cont += 1
            }
        }
        texto += Graficas.getElement(this.idSent+3+this.listaAtributos.length, "CierreTagCierre", this.idSent)
        texto += Graficas.getElement(this.idSent+4+this.listaAtributos.length, "\\>", this.idSent+3+this.listaAtributos.length)
        return texto
    }


    getCstDotD(idPadre:number):string {
        let texto = ""
        texto += Graficas.getElement(this.idSent, "TAG_UNICO", idPadre)
        texto += Graficas.getElement(this.idSent+1, "AbreTagCierre", this.idSent)
        texto += Graficas.getElement(this.idSent+2, "<" + this.nombreTag, this.idSent+1)
        if (this.listaAtributos.length > 0) {
            let cont = 3
            for (let atributo of this.listaAtributos) {
                let cont = 3
                for (let atributo of this.listaAtributos) {
                    if (cont === 3) {
                        texto += Graficas.getElement(this.idSent+cont, "LISTA_ATRIBUTOS", this.idSent+1)
                        texto += atributo.getCstDotA(this.idSent+cont)
                    } else {
                        texto += Graficas.getElement(this.idSent+cont, "LISTA_ATRIBUTOS", this.idSent+cont-1)
                        texto += atributo.getCstDotA(this.idSent+cont)
                    }
                    cont += 1
                }
            }
        }
        texto += Graficas.getElement(this.idSent+3+this.listaAtributos.length, "CierreTagCierre", this.idSent)
        texto += Graficas.getElement(this.idSent+4+this.listaAtributos.length, "\\>", this.idSent+3+this.listaAtributos.length)
        return texto
    }
    }
### Atrubuto.ts
##### En esta clase guardamos si las etiquetas tienen atributos dentro de ellas y tambie su generacion del cst y definimos el ambito.

    import { Graficas } from "../Graficas/Graficas"
    import { Etiqueta } from "./Etiqueta"
    import { Fila } from "./Fila"
    import { Tipos } from "./Tipos"

    export class Atributo {
    nombre:string
    valor:string
    linea:number
    columna:number
    idSent:number
    etiquetaContendora:Etiqueta = null
    constructor(nombre:string, valor:string, linea:number, columna:number, idSent:number) {
        this.nombre = nombre
        this.valor = valor
        this.linea = linea 
        this.columna = columna 
        this.idSent = idSent
    }

    getAmbito():Array<string> {
        let listaAmbito:Array<string> = []
        for(let etiqueta:Etiqueta = this.etiquetaContendora; etiqueta != null; etiqueta = etiqueta.padre) {
            listaAmbito.push(etiqueta.getName())
        }   
        listaAmbito.push("GLOBAL")
        return listaAmbito
    }

    getAsRowTable() {
        return(new Fila(
            this.nombre,
            Tipos.ATRIBUTO,
            this.getAmbito(),
            this.linea,
            this.columna,
            this.imprimir()
        ))
    }

    imprimir():string {
        let texto:string  = ""
        texto = this.nombre + "=" + this.valor
        return texto
    }

    getCstDotA(idPadre:number):string {
        let texto = ""
        texto += Graficas.getElement(this.idSent, "ATRIBUTO", idPadre)
        texto += Graficas.getElement(this.idSent+1, "NombreAtributo", this.idSent)
        texto += Graficas.getElement(this.idSent+2, this.nombre, this.idSent+1)
        texto += Graficas.getElement(this.idSent+4, "IgualAtributo", this.idSent)
        texto += Graficas.getElement(this.idSent+5, "=", this.idSent+4)
        texto += Graficas.getElement(this.idSent+6, "ValorAtributo", this.idSent)
        texto += Graficas.getElement(this.idSent+7, this.valor.split("\"").join(""), this.idSent+6)
        return texto
    }
    }

