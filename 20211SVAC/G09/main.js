(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+HJF":
/*!************************************************!*\
  !*** ./src/app/services/compilador.service.ts ***!
  \************************************************/
/*! exports provided: CompiladorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompiladorService", function() { return CompiladorService; });
/* harmony import */ var _Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Backend/src_backend/index */ "5Lqd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//import { Analizar_XML } from '../Backend/src_backend/index';
class CompiladorService {
    constructor(http) {
        this.http = http;
    }
    analizar(codigo, texto_xpath) {
        Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analizar_XML"])(codigo, texto_xpath);
        var alv = {
            simbolo: Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analizar_XML"])(codigo, texto_xpath).simbolo,
            cst: Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analizar_XML"])(codigo, texto_xpath).cst,
            consulta: Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analizar_XML"])(codigo, texto_xpath).consulta,
            ReporteGramatica: Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analizar_XML"])(codigo, texto_xpath).ReporteGramatica,
            Error: Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analizar_XML"])(codigo, texto_xpath).Error,
            Encoding: Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analizar_XML"])(codigo, texto_xpath).Encoding
        };
        return alv;
    }
    analizarD(codigo, texto_xpath) {
        Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analisis_D"])(codigo, texto_xpath);
        var alv = {
            simbolo: Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analisis_D"])(codigo, texto_xpath).simbolo,
            cst: Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analisis_D"])(codigo, texto_xpath).cst,
            consulta: Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analisis_D"])(codigo, texto_xpath).consulta,
            ReporteGramatica: Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analisis_D"])(codigo, texto_xpath).ReporteGramatica,
            Error: Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analisis_D"])(codigo, texto_xpath).Error,
            Encoding: Object(_Backend_src_backend_index__WEBPACK_IMPORTED_MODULE_0__["Analisis_D"])(codigo, texto_xpath).Encoding
        };
        return alv;
    }
    getAstBase64(ast) {
        const json = { ast: ast };
        return this.http.post('http://localhost:3000/getAstBase64', json);
    }
}
CompiladorService.ɵfac = function CompiladorService_Factory(t) { return new (t || CompiladorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CompiladorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompiladorService, factory: CompiladorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\juand\Desktop\compi1\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2orD":
/*!*************************************************!*\
  !*** ./src/Backend/build/Xpath/ControlError.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TipoSeleccion_1 = __webpack_require__(/*! ./TipoSeleccion */ "OjI0");
const NodoControlError_1 = __webpack_require__(/*! ./NodoControlError */ "7TGQ");
class ControlError {
    constructor(simbolo, tipo, linea, columna, entorno) {
        console.log("adentro");
        ControlError.ListaE.push(new NodoControlError_1.NodoControlError(simbolo, tipo, linea, columna, entorno));
        console.log(ControlError.ListaE);
    }
    static Agregar(simbolo, tipo, linea, columna, entorno) {
        ControlError.ListaE.push(new NodoControlError_1.NodoControlError(simbolo, tipo, linea, columna, entorno));
    }
}
exports.ControlError = ControlError;
ControlError.ListaE = [];
function graficar(errores, errorbusqueda = {
    simbolo: "",
    tipo: "",
    linea: "",
    columna: "",
}) {
    var text = "";
    for (let set of errores) {
        if (set.tipo === TipoSeleccion_1.TipoSeleccion.ERROR_LEXICO) {
            text = text + '\n' + "simbolo de error: " + set.simbolo + " tipo: error lexico" + " " + set.linea + " " + set.columna;
        }
        else if (set.tipo === TipoSeleccion_1.TipoSeleccion.ERROR_SINTACTICO) {
            text = text + '\n' + "simbolo de error: " + set.simbolo + " tipo: error sintactico" + " " + set.linea + " " + set.columna;
        }
    }
    return text;
}
exports.graficar = graficar;


/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "42/y":
/*!************************************************************!*\
  !*** ./src/Backend/build/Reportes/NodoReporteGramatica.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NodoReporteGramatica {
    constructor(produccion, regla_semantica) {
        this.produccion = produccion;
        this.regla_semantica = regla_semantica;
    }
}
exports.NodoReporteGramatica = NodoReporteGramatica;


/***/ }),

/***/ "5Lqd":
/*!******************************************!*\
  !*** ./src/Backend/src_backend/index.ts ***!
  \******************************************/
/*! exports provided: Analizar_XML, Analisis_D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analizar_XML", function() { return Analizar_XML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analisis_D", function() { return Analisis_D; });
/* harmony import */ var _build_Grammar_xmlA_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../build/Grammar/xmlA.js */ "O0zG");
/* harmony import */ var _build_Grammar_xmlA_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_build_Grammar_xmlA_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _build_Grammar_xpathA_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../build/Grammar/xpathA.js */ "R3Hx");
/* harmony import */ var _build_Grammar_xpathA_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_build_Grammar_xpathA_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _build_Grammar_xmlD_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../build/Grammar/xmlD.js */ "NQeE");
/* harmony import */ var _build_Grammar_xmlD_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_build_Grammar_xmlD_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _build_Grammar_xpathD_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../build/Grammar/xpathD.js */ "Z7y+");
/* harmony import */ var _build_Grammar_xpathD_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_build_Grammar_xpathD_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _build_Reportes_ReporteGramatica_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../build/Reportes/ReporteGramatica.js */ "lo4a");
/* harmony import */ var _build_Reportes_ReporteGramatica_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_build_Reportes_ReporteGramatica_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _build_Xpath_ControlError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../build/Xpath/ControlError.js */ "2orD");
/* harmony import */ var _build_Xpath_ControlError_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_build_Xpath_ControlError_js__WEBPACK_IMPORTED_MODULE_5__);
//import { SimbolsReport } from './Reportes/TablaSimbolos'






const port = 3000;
//const parserXpath = require('./Grammar/xpathA.js');
function Analizar_XML(entrada, texto_path) {
    // aqui voy a vaciar antes que nada los nuevos simbolos
    //imbolsReport.aux = "";
    /**
     *
     * const tree:XmlResultado = parser.parse(entrada)
    const {XmlResultado,errores} = parser.parse(entrada);
    //const {resXpath, errores} = parserXpath.parse("#//videojuego")
    const {resXpathD, erroresD}  = parserxpathD.parse("#//videojuego@")
    console.log("Respuesta xpathD:")
    console.log(JSON.stringify(resXpathD, null, 2))
    console.log("\nResultado de busqueda:")
    console.log(tree.getAsTable().buscar(resXpathD))
   // console.log(graficar(errores))
    console.log(graficar(erroresD))
     *
     *
     * */
    //console.log("suu adentro papasito")
    let Rxpath = "";
    const tree = _build_Grammar_xmlA_js__WEBPACK_IMPORTED_MODULE_0___default.a.parse(entrada);
    const resXpath = _build_Grammar_xpathA_js__WEBPACK_IMPORTED_MODULE_1___default.a.parse(texto_path);
    // Rxpath+="Respuesta xpath:"
    Rxpath += resXpath;
    //console.log("\nResultado de busqueda:")
    Rxpath += tree.getAsTable().buscar(resXpath);
    /*  aqui termina el llenado de la tabla de simbolos **/
    console.log(tree.getErroresSemanticos());
    // console.log(Xpath)
    //console.log(tree.getCstDotA());
    /// console.log(ControlError.ListaE)
    //console.log("alv"+ReporteGramatica.Lista)
    var alv = {
        ReporteGramatica: _build_Reportes_ReporteGramatica_js__WEBPACK_IMPORTED_MODULE_4__["ReporteGramatica"].Lista,
        cst: tree.getCstDotA(),
        simbolo: tree.getAsTable().filas,
        consulta: Rxpath,
        Error: _build_Xpath_ControlError_js__WEBPACK_IMPORTED_MODULE_5__["ControlError"].ListaE,
        Encoding: tree.etiquitaInicio.encoding
    };
    _build_Xpath_ControlError_js__WEBPACK_IMPORTED_MODULE_5__["ControlError"].ListaE = [];
    _build_Reportes_ReporteGramatica_js__WEBPACK_IMPORTED_MODULE_4__["ReporteGramatica"].Lista = [];
    return alv;
}
function Analisis_D(entrada, texto_path) {
    // aqui voy a vaciar antes que nada los nuevos simbolos
    //imbolsReport.aux = "";
    /**
     *
     * const tree:XmlResultado = parser.parse(entrada)
    const {XmlResultado,errores} = parser.parse(entrada);
    //const {resXpath, errores} = parserXpath.parse("#//videojuego")
    const {resXpathD, erroresD}  = parserxpathD.parse("#//videojuego@")
    console.log("Respuesta xpathD:")
    console.log(JSON.stringify(resXpathD, null, 2))
    console.log("\nResultado de busqueda:")
    console.log(tree.getAsTable().buscar(resXpathD))
   // console.log(graficar(errores))
    console.log(graficar(erroresD))
     *
     *
     * */
    //console.log("suu adentro papasito")
    let Rxpath = "";
    const tree = _build_Grammar_xmlD_js__WEBPACK_IMPORTED_MODULE_2___default.a.parse(entrada);
    const alv2 = _build_Grammar_xmlD_js__WEBPACK_IMPORTED_MODULE_2___default.a.parse(entrada);
    const resXpath = _build_Grammar_xpathD_js__WEBPACK_IMPORTED_MODULE_3___default.a.parse(texto_path);
    Rxpath += "Respuesta xpath:";
    Rxpath += resXpath;
    //console.log("\nResultado de busqueda:")
    Rxpath += tree.getAsTable().buscar(resXpath);
    /*  aqui termina el llenado de la tabla de simbolos **/
    console.log(tree.getErroresSemanticos());
    // console.log(Xpath)
    //console.log(tree.getCstDotA());
    // console.log(ControlError.ListaE)
    //console.log("alv"+ReporteGramatica.Lista)
    var alv = {
        ReporteGramatica: _build_Reportes_ReporteGramatica_js__WEBPACK_IMPORTED_MODULE_4__["ReporteGramatica"].Lista,
        cst: tree.getCstDotD(),
        simbolo: tree.getAsTable().filas,
        consulta: Rxpath,
        Error: _build_Xpath_ControlError_js__WEBPACK_IMPORTED_MODULE_5__["ControlError"].ListaE,
        Encoding: tree.etiquitaInicio.encoding
    };
    _build_Xpath_ControlError_js__WEBPACK_IMPORTED_MODULE_5__["ControlError"].ListaE = [];
    _build_Reportes_ReporteGramatica_js__WEBPACK_IMPORTED_MODULE_4__["ReporteGramatica"].Lista = [];
    return alv;
}


/***/ }),

/***/ "6FQ4":
/*!***********************************************!*\
  !*** ./src/Backend/build/Xml/XmlResultado.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Graficas_1 = __webpack_require__(/*! ../Graficas/Graficas */ "nnRf");
const Tabla_1 = __webpack_require__(/*! ./Tabla */ "Jixd");
class XmlResultado {
    constructor(etiquitaInicio, etiquetasCuerpo) {
        this.etiquitaInicio = etiquitaInicio;
        this.etiquetasCuerpo = etiquetasCuerpo;
    }
    imprimir() {
        let texto = "";
        this.etiquetasCuerpo.forEach(etiqueta => {
            texto += etiqueta.imprimir();
        });
        return texto;
    }
    getAsTable() {
        let tabla = new Tabla_1.Tabla();
        this.etiquetasCuerpo.forEach(etiqueta => {
            etiqueta.getAsTable().filas.forEach(fila => {
                tabla.addFila(fila);
            });
        });
        return tabla;
    }
    getErroresSemanticos() {
        let texto = "";
        this.etiquetasCuerpo.forEach(etiqueta => {
            texto += etiqueta.getErroresSemanticos();
        });
        return texto;
    }
    getCstDotA() {
        let texto = "";
        texto += "digraph {\n";
        texto += Graficas_1.Graficas.defNodo(0, "XML");
        texto += Graficas_1.Graficas.getElement(1, "TAG_CONFIGURACION", 0);
        texto += this.etiquitaInicio.getCstDotA(1);
        if (this.etiquetasCuerpo.length > 0) {
            let cont = 3;
            for (let etiqueta of this.etiquetasCuerpo) {
                if (cont - 3 != this.etiquetasCuerpo.length - 1) {
                    texto += Graficas_1.Graficas.getElement(cont, "LISTA_ETIQUETAS", cont + 1);
                    texto += etiqueta.getCstDotA(cont);
                }
                else {
                    texto += Graficas_1.Graficas.getElement(cont, "LISTA_ETIQUETAS", 0);
                    texto += etiqueta.getCstDotA(cont);
                }
                cont += 1;
            }
        }
        texto += "}";
        return texto;
    }
    getCstDotD() {
        let texto = "";
        texto += "digraph {\n";
        texto += Graficas_1.Graficas.defNodo(0, "XML");
        texto += Graficas_1.Graficas.getElement(1, "TAG_CONFIGURACION", 0);
        texto += this.etiquitaInicio.getCstDotA(1);
        if (this.etiquetasCuerpo.length > 0) {
            let cont = 3;
            for (let etiqueta of this.etiquetasCuerpo) {
                if (cont === 3) {
                    texto += Graficas_1.Graficas.getElement(cont, "LISTA_ETIQUETAS", 0);
                    texto += etiqueta.getCstDotD(cont);
                }
                else {
                    texto += Graficas_1.Graficas.getElement(cont, "LISTA_ETIQUETAS", cont - 1);
                    texto += etiqueta.getCstDotD(cont);
                }
                cont += 1;
            }
        }
        texto += "}";
        return texto;
    }
}
exports.XmlResultado = XmlResultado;


/***/ }),

/***/ "7TGQ":
/*!*****************************************************!*\
  !*** ./src/Backend/build/Xpath/NodoControlError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NodoControlError {
    constructor(simbolo, tipo, linea, columna, entorno) {
        this.simbolo = simbolo;
        this.tipo = tipo;
        this.linea = linea;
        this.columna = columna;
        this.entorno = entorno;
        //   this.Agregar(this.simbolo,this.tipo,this.linea,this.columna,this.entorno)
    }
}
exports.NodoControlError = NodoControlError;


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BP3C":
/*!*************************************************************!*\
  !*** ./src/app/components/arbol-ast/arbol-ast.component.ts ***!
  \*************************************************************/
/*! exports provided: ArbolAstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArbolAstComponent", function() { return ArbolAstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ArbolAstComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArbolAstComponent.ɵfac = function ArbolAstComponent_Factory(t) { return new (t || ArbolAstComponent)(); };
ArbolAstComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArbolAstComponent, selectors: [["app-arbol-ast"]], inputs: { arbolJson: "arbolJson" }, decls: 7, vars: 0, consts: [[1, "row", "justify-content-center", "tabla"], [1, "col-md-8", "tab"], [1, "nav", "nav-tabs", "justify-content-center"], [1, "nav-item", "active"], ["data-toggle", "tab", "href", "#errores", 1, "nav-link", "active"], ["src", "https://media.gettyimages.com/photos/artificial-ingelligence-cpu-empty-landscape-picture-id1132483126?s=2048x2048"]], template: function ArbolAstComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Arbol Ast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".tabla[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n}\r\n\r\nsvg.vtree[_ngcontent-%COMP%] {\r\n    background: whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyYm9sLWFzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImFyYm9sLWFzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxhIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuc3ZnLnZ0cmVlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn0gICJdfQ== */"] });


/***/ }),

/***/ "D4eS":
/*!*********************************************************************!*\
  !*** ./src/app/components/tabla-errores/tabla-errores.component.ts ***!
  \*********************************************************************/
/*! exports provided: TablaErroresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaErroresComponent", function() { return TablaErroresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TablaErroresComponent {
    constructor() { }
    ngOnInit() {
    }
}
TablaErroresComponent.ɵfac = function TablaErroresComponent_Factory(t) { return new (t || TablaErroresComponent)(); };
TablaErroresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablaErroresComponent, selectors: [["app-tabla-errores"]], decls: 32, vars: 0, consts: [[1, "row", "justify-content-center", "tabla"], [1, "col-md-8", "tab"], [1, "nav", "nav-tabs", "justify-content-center"], [1, "nav-item", "active"], ["data-toggle", "tab", "href", "#errores", 1, "nav-link", "active"], ["id", "errores", 1, "tab-pane"], [1, "col-md-12"], [2, "width", "auto", "height", "auto"], [1, "table", "table-danger", "table-hover"]], template: function TablaErroresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tabla de Errores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TIPO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ERROR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "FILA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "COLUMNA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".tabla[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxhLWVycm9yZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJ0YWJsYS1lcnJvcmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGEge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "EfQ4":
/*!************************************************!*\
  !*** ./src/Backend/build/Xml/EtiquetaDoble.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Graficas_1 = __webpack_require__(/*! ../Graficas/Graficas */ "nnRf");
const Fila_1 = __webpack_require__(/*! ./Fila */ "jn+f");
const Tabla_1 = __webpack_require__(/*! ./Tabla */ "Jixd");
const Tipos_1 = __webpack_require__(/*! ./Tipos */ "OkFX");
const ControlError_1 = __webpack_require__(/*! ../Xpath/ControlError */ "2orD");
const TipoSeleccion_1 = __webpack_require__(/*! ../Xpath/TipoSeleccion */ "OjI0");
class EtiquetaDoble {
    constructor(nombreTagAbre, nombreTagCierre, listaAtributos, cadenaValores, listaHijos, linea, columna, idSent) {
        this.padre = null;
        this.nombreTagAbre = nombreTagAbre;
        this.nombreTagCierre = nombreTagCierre;
        this.listaAtributos = listaAtributos;
        this.tineHijos = listaHijos.length > 0;
        this.cadenaValores = (listaHijos.length == 0) ? cadenaValores : "";
        this.listaHijos = (listaHijos.length > 0) ? listaHijos : [];
        this.linea = linea;
        this.columna = columna;
        this.idSent = idSent;
        this.listaAtributos.forEach(atributo => {
            atributo.etiquetaContendora = this;
        });
        this.listaHijos.forEach(hijo => {
            hijo.padre = this;
        });
    }
    imprimir() {
        let texto = "";
        texto += "<" + this.nombreTagAbre;
        this.listaAtributos.forEach(atributo => {
            texto += " " + atributo.imprimir();
        });
        texto += ">";
        if (this.listaHijos.length > 0) {
            texto += "\n";
        }
        texto += this.cadenaValores;
        this.listaHijos.forEach(hijo => {
            texto += hijo.imprimir();
        });
        texto += "</" + this.nombreTagCierre + "> \n";
        return texto;
    }
    getName() {
        return this.nombreTagAbre;
    }
    getAmbito() {
        let listaAmbito = [];
        for (let etiqueta = this.padre; etiqueta != null; etiqueta = etiqueta.padre) {
            listaAmbito.push(etiqueta.getName());
        }
        listaAmbito.push("GLOBAL");
        return listaAmbito;
    }
    getAsTable() {
        let tabla = new Tabla_1.Tabla();
        tabla.addFila(new Fila_1.Fila(this.nombreTagAbre, Tipos_1.Tipos.ETIQUETA_DOBLE, this.getAmbito(), this.linea, this.columna, this.imprimir()));
        this.listaAtributos.forEach(atributo => {
            tabla.addFila(atributo.getAsRowTable());
        });
        this.listaHijos.forEach(etiqueta => {
            etiqueta.getAsTable().filas.forEach(fila => {
                tabla.addFila(fila);
            });
        });
        if (!this.tineHijos) {
            if (this.cadenaValores != "") {
                tabla.addFila(new Fila_1.Fila("-", Tipos_1.Tipos.VALOR, [this.getName()].concat(this.getAmbito()), this.linea, this.columna + this.nombreTagAbre.length + 2, this.cadenaValores));
            }
        }
        return tabla;
    }
    getErroresSemanticos() {
        let texto = "";
        if (this.nombreTagAbre != this.nombreTagCierre) {
            console.log("error arribaa-----------");
            /*
            
            constructor(simbolo: string, tipo: TipoSeleccion, linea: any, columna: any, entorno: string) {
            */
            texto += `Error(Linea: ${this.linea}, Columna: ${this.columna}): El nombre del tag de apertura no es igual al de cierre.\n`;
            ControlError_1.ControlError.Agregar(this.nombreTagAbre, TipoSeleccion_1.TipoSeleccion.ERROR_SEMANTICO, this.linea, this.columna, this.padre.getName());
        }
        this.listaAtributos.forEach(atributo => {
            let apariciones = 0;
            for (let atr2 of this.listaAtributos) {
                if (atributo.nombre == atr2.nombre) {
                    apariciones += 1;
                }
                if (apariciones > 1) {
                    console.log("error abajo");
                    texto += `Error(Linea: ${atributo.linea}, Columna: ${atributo.columna}): El atributo '${atributo.nombre}' se encuentra repetido.\n`;
                    ControlError_1.ControlError.Agregar(atributo.nombre, TipoSeleccion_1.TipoSeleccion.ERROR_SEMANTICO, this.linea, this.columna, this.padre.getName());
                    break;
                }
            }
        });
        this.listaHijos.forEach(hijo => {
            texto += hijo.getErroresSemanticos();
        });
        return texto;
    }
    getCstDotA(idPadre) {
        let texto = "";
        texto += Graficas_1.Graficas.getElement(this.idSent, "ETIQUETA", idPadre);
        texto += Graficas_1.Graficas.getElement(this.idSent + 1, "TAG_APERTURA", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 2, "AbreTagApertura", this.idSent + 1);
        texto += Graficas_1.Graficas.getElement(this.idSent + 3, "<" + this.nombreTagAbre, this.idSent + 2);
        if (this.listaAtributos.length > 0) {
            let cont = 4;
            for (let atributo of this.listaAtributos) {
                if (cont - 4 != this.listaAtributos.length - 1) {
                    texto += Graficas_1.Graficas.getElement(this.idSent + cont, "LISTA_ATRIBUTOS", this.idSent + cont + 1);
                    texto += atributo.getCstDotA(this.idSent + cont);
                }
                else {
                    texto += Graficas_1.Graficas.getElement(this.idSent + cont, "LISTA_ATRIBUTOS", this.idSent + 1);
                    texto += atributo.getCstDotA(this.idSent + cont);
                }
                cont += 1;
            }
        }
        let idSent2 = this.idSent + 4 + this.listaAtributos.length;
        texto += Graficas_1.Graficas.getElement(idSent2 + 1, "CierreTagApertura", this.idSent + 1);
        texto += Graficas_1.Graficas.getElement(idSent2 + 2, ">", idSent2 + 1);
        if (this.listaHijos.length > 0) {
            let cont = 3;
            for (let hijo of this.listaHijos) {
                if (cont - 3 != this.listaHijos.length - 1) {
                    texto += Graficas_1.Graficas.getElement(idSent2 + cont, "LISTA_ETIQUETAS", idSent2 + cont + 1);
                    texto += hijo.getCstDotA(idSent2 + cont);
                }
                else {
                    texto += Graficas_1.Graficas.getElement(idSent2 + cont, "LISTA_ETIQUETAS", this.idSent);
                    texto += hijo.getCstDotA(idSent2 + cont);
                }
                cont += 1;
            }
        }
        else if (this.cadenaValores != "") {
            texto += Graficas_1.Graficas.getElement(idSent2 + 3, "CadenaValores", this.idSent);
            texto += Graficas_1.Graficas.getElement(idSent2 + 4, this.cadenaValores, idSent2 + 3);
        }
        let idSent3 = idSent2 + 4 + this.listaHijos.length;
        texto += Graficas_1.Graficas.getElement(idSent3 + 1, "TAG_CIERRE", this.idSent);
        texto += Graficas_1.Graficas.getElement(idSent3 + 2, "AbreTagCierre", idSent3 + 1);
        texto += Graficas_1.Graficas.getElement(idSent3 + 3, "</" + this.nombreTagCierre, idSent3 + 2);
        texto += Graficas_1.Graficas.getElement(idSent3 + 4, "CierreTagCierre", idSent3 + 1);
        texto += Graficas_1.Graficas.getElement(idSent3 + 5, ">", idSent3 + 4);
        return texto;
    }
    getCstDotD(idPadre) {
        let texto = "";
        texto += Graficas_1.Graficas.getElement(this.idSent, "ETIQUETA", idPadre);
        texto += Graficas_1.Graficas.getElement(this.idSent + 1, "TAG_APERTURA", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 2, "AbreTagApertura", this.idSent + 1);
        texto += Graficas_1.Graficas.getElement(this.idSent + 3, "<" + this.nombreTagAbre, this.idSent + 2);
        if (this.listaAtributos.length > 0) {
            let cont = 4;
            for (let atributo of this.listaAtributos) {
                if (cont === 4) {
                    texto += Graficas_1.Graficas.getElement(this.idSent + cont, "LISTA_ATRIBUTOS", this.idSent + 1);
                    texto += atributo.getCstDotA(this.idSent + cont);
                }
                else {
                    texto += Graficas_1.Graficas.getElement(this.idSent + cont, "LISTA_ATRIBUTOS", this.idSent + cont - 1);
                    texto += atributo.getCstDotA(this.idSent + cont);
                }
                cont += 1;
            }
        }
        let idSent2 = this.idSent + 4 + this.listaAtributos.length;
        texto += Graficas_1.Graficas.getElement(idSent2 + 1, "CierreTagApertura", this.idSent + 1);
        texto += Graficas_1.Graficas.getElement(idSent2 + 2, ">", idSent2 + 1);
        if (this.listaHijos.length > 0) {
            let cont = 3;
            for (let hijo of this.listaHijos) {
                if (cont === 3) {
                    texto += Graficas_1.Graficas.getElement(idSent2 + cont, "LISTA_ETIQUETAS", this.idSent);
                    texto += hijo.getCstDotD(idSent2 + cont);
                }
                else {
                    texto += Graficas_1.Graficas.getElement(idSent2 + cont, "LISTA_ETIQUETAS", idSent2 + cont - 1);
                    texto += hijo.getCstDotD(idSent2 + cont);
                }
                cont += 1;
            }
        }
        else if (this.cadenaValores != "") {
            texto += Graficas_1.Graficas.getElement(idSent2 + 3, "CadenaValores", this.idSent);
            texto += Graficas_1.Graficas.getElement(idSent2 + 4, this.cadenaValores, idSent2 + 3);
        }
        let idSent3 = idSent2 + 4 + this.listaHijos.length;
        texto += Graficas_1.Graficas.getElement(idSent3 + 1, "TAG_CIERRE", this.idSent);
        texto += Graficas_1.Graficas.getElement(idSent3 + 2, "AbreTagCierre", idSent3 + 1);
        texto += Graficas_1.Graficas.getElement(idSent3 + 3, "</" + this.nombreTagCierre, idSent3 + 2);
        texto += Graficas_1.Graficas.getElement(idSent3 + 4, "CierreTagCierre", idSent3 + 1);
        texto += Graficas_1.Graficas.getElement(idSent3 + 5, ">", idSent3 + 4);
        return texto;
    }
}
exports.EtiquetaDoble = EtiquetaDoble;


/***/ }),

/***/ "FUIu":
/*!**********************************************!*\
  !*** ./src/Backend/build/Xpath/OpBinaria.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Primitivo_1 = __webpack_require__(/*! ./Primitivo */ "NhD4");
const TiposOp_1 = __webpack_require__(/*! ./TiposOp */ "YTrP");
const TipoVal_1 = __webpack_require__(/*! ./TipoVal */ "eU3H");
class OpBinaria {
    constructor(opIzq, opDer, tipo) {
        this.opIzq = opIzq;
        this.opDer = opDer;
        this.tipo = tipo;
    }
    ejecutar() {
        let primitivoIzq = this.opIzq.ejecutar();
        let primitivoDer = this.opDer.ejecutar();
        switch (this.tipo) {
            case TiposOp_1.TiposOp.SUMA:
                if ((primitivoIzq.tipo === TipoVal_1.TipoVal.ENTERO || primitivoIzq.tipo === TipoVal_1.TipoVal.DECIMAL) &&
                    (primitivoDer.tipo === TipoVal_1.TipoVal.ENTERO || primitivoDer.tipo === TipoVal_1.TipoVal.DECIMAL)) {
                    let res = primitivoIzq.valor + primitivoDer.valor;
                    let tipo = res % 1 === 0 ? TipoVal_1.TipoVal.ENTERO : TipoVal_1.TipoVal.DECIMAL;
                    return new Primitivo_1.Primitivo(res, tipo);
                }
            case TiposOp_1.TiposOp.RESTA:
                if ((primitivoIzq.tipo === TipoVal_1.TipoVal.ENTERO || primitivoIzq.tipo === TipoVal_1.TipoVal.DECIMAL) &&
                    (primitivoDer.tipo === TipoVal_1.TipoVal.ENTERO || primitivoDer.tipo === TipoVal_1.TipoVal.DECIMAL)) {
                    let res = primitivoIzq.valor - primitivoDer.valor;
                    let tipo = res % 1 === 0 ? TipoVal_1.TipoVal.ENTERO : TipoVal_1.TipoVal.DECIMAL;
                    return new Primitivo_1.Primitivo(res, tipo);
                }
            case TiposOp_1.TiposOp.MULTIPLICACION:
                if ((primitivoIzq.tipo === TipoVal_1.TipoVal.ENTERO || primitivoIzq.tipo === TipoVal_1.TipoVal.DECIMAL) &&
                    (primitivoDer.tipo === TipoVal_1.TipoVal.ENTERO || primitivoDer.tipo === TipoVal_1.TipoVal.DECIMAL)) {
                    let res = primitivoIzq.valor * primitivoDer.valor;
                    let tipo = res % 1 === 0 ? TipoVal_1.TipoVal.ENTERO : TipoVal_1.TipoVal.DECIMAL;
                    return new Primitivo_1.Primitivo(res, tipo);
                }
            case TiposOp_1.TiposOp.DIVISION:
                if ((primitivoIzq.tipo === TipoVal_1.TipoVal.ENTERO || primitivoIzq.tipo === TipoVal_1.TipoVal.DECIMAL) &&
                    (primitivoDer.tipo === TipoVal_1.TipoVal.ENTERO || primitivoDer.tipo === TipoVal_1.TipoVal.DECIMAL)) {
                    let res = primitivoIzq.valor / primitivoDer.valor;
                    let tipo = res % 1 === 0 ? TipoVal_1.TipoVal.ENTERO : TipoVal_1.TipoVal.DECIMAL;
                    return new Primitivo_1.Primitivo(res, tipo);
                }
            case TiposOp_1.TiposOp.MODULO:
                if ((primitivoIzq.tipo === TipoVal_1.TipoVal.ENTERO || primitivoIzq.tipo === TipoVal_1.TipoVal.DECIMAL) &&
                    (primitivoDer.tipo === TipoVal_1.TipoVal.ENTERO || primitivoDer.tipo === TipoVal_1.TipoVal.DECIMAL)) {
                    let res = primitivoIzq.valor % primitivoDer.valor;
                    let tipo = res % 1 === 0 ? TipoVal_1.TipoVal.ENTERO : TipoVal_1.TipoVal.DECIMAL;
                    return new Primitivo_1.Primitivo(res, tipo);
                }
            case TiposOp_1.TiposOp.AND:
                if (primitivoIzq.tipo === TipoVal_1.TipoVal.BOLEANO && primitivoDer.tipo === TipoVal_1.TipoVal.BOLEANO) {
                    let res = primitivoIzq.valor && primitivoDer.valor;
                    let tipo = TipoVal_1.TipoVal.BOLEANO;
                    return new Primitivo_1.Primitivo(res, tipo);
                }
            case TiposOp_1.TiposOp.OR:
                if (primitivoIzq.tipo === TipoVal_1.TipoVal.BOLEANO && primitivoDer.tipo === TipoVal_1.TipoVal.BOLEANO) {
                    let res = primitivoIzq.valor || primitivoDer.valor;
                    let tipo = TipoVal_1.TipoVal.BOLEANO;
                    return new Primitivo_1.Primitivo(res, tipo);
                }
            case TiposOp_1.TiposOp.MAYOR_QUE:
                if (primitivoIzq.tipo in [TipoVal_1.TipoVal.ENTERO, TipoVal_1.TipoVal.DECIMAL, TipoVal_1.TipoVal.BOLEANO, TipoVal_1.TipoVal.CADENA] &&
                    primitivoDer.tipo in [TipoVal_1.TipoVal.ENTERO, TipoVal_1.TipoVal.DECIMAL, TipoVal_1.TipoVal.BOLEANO, TipoVal_1.TipoVal.CADENA]) {
                    let res = primitivoIzq.valor > primitivoDer.valor;
                    let tipo = TipoVal_1.TipoVal.BOLEANO;
                    return new Primitivo_1.Primitivo(res, tipo);
                }
            case TiposOp_1.TiposOp.MENOR_QUE:
                if (primitivoIzq.tipo in [TipoVal_1.TipoVal.ENTERO, TipoVal_1.TipoVal.DECIMAL, TipoVal_1.TipoVal.BOLEANO, TipoVal_1.TipoVal.CADENA] &&
                    primitivoDer.tipo in [TipoVal_1.TipoVal.ENTERO, TipoVal_1.TipoVal.DECIMAL, TipoVal_1.TipoVal.BOLEANO, TipoVal_1.TipoVal.CADENA]) {
                    let res = primitivoIzq.valor < primitivoDer.valor;
                    let tipo = TipoVal_1.TipoVal.BOLEANO;
                    return new Primitivo_1.Primitivo(res, tipo);
                }
            case TiposOp_1.TiposOp.MAYOR_IGUAL:
                if (primitivoIzq.tipo in [TipoVal_1.TipoVal.ENTERO, TipoVal_1.TipoVal.DECIMAL, TipoVal_1.TipoVal.BOLEANO, TipoVal_1.TipoVal.CADENA] &&
                    primitivoDer.tipo in [TipoVal_1.TipoVal.ENTERO, TipoVal_1.TipoVal.DECIMAL, TipoVal_1.TipoVal.BOLEANO, TipoVal_1.TipoVal.CADENA]) {
                    let res = primitivoIzq.valor >= primitivoDer.valor;
                    let tipo = TipoVal_1.TipoVal.BOLEANO;
                    return new Primitivo_1.Primitivo(res, tipo);
                }
            case TiposOp_1.TiposOp.MENOR_IGUAL:
                if (primitivoIzq.tipo in [TipoVal_1.TipoVal.ENTERO, TipoVal_1.TipoVal.DECIMAL, TipoVal_1.TipoVal.BOLEANO, TipoVal_1.TipoVal.CADENA] &&
                    primitivoDer.tipo in [TipoVal_1.TipoVal.ENTERO, TipoVal_1.TipoVal.DECIMAL, TipoVal_1.TipoVal.BOLEANO, TipoVal_1.TipoVal.CADENA]) {
                    let res = primitivoIzq.valor <= primitivoDer.valor;
                    let tipo = TipoVal_1.TipoVal.BOLEANO;
                    return new Primitivo_1.Primitivo(res, tipo);
                }
            case TiposOp_1.TiposOp.NO_IGUAL:
                if (primitivoIzq.tipo in [TipoVal_1.TipoVal.ENTERO, TipoVal_1.TipoVal.DECIMAL, TipoVal_1.TipoVal.BOLEANO, TipoVal_1.TipoVal.CADENA] &&
                    primitivoDer.tipo in [TipoVal_1.TipoVal.ENTERO, TipoVal_1.TipoVal.DECIMAL, TipoVal_1.TipoVal.BOLEANO, TipoVal_1.TipoVal.CADENA]) {
                    let res = primitivoIzq.valor != primitivoDer.valor;
                    let tipo = TipoVal_1.TipoVal.BOLEANO;
                    return new Primitivo_1.Primitivo(res, tipo);
                }
        }
    }
}
exports.OpBinaria = OpBinaria;


/***/ }),

/***/ "GvPq":
/*!*******************************************!*\
  !*** ./src/Backend/build/Xml/Atributo.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Graficas_1 = __webpack_require__(/*! ../Graficas/Graficas */ "nnRf");
const Fila_1 = __webpack_require__(/*! ./Fila */ "jn+f");
const Tipos_1 = __webpack_require__(/*! ./Tipos */ "OkFX");
class Atributo {
    constructor(nombre, valor, linea, columna, idSent) {
        this.etiquetaContendora = null;
        this.nombre = nombre;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
        this.idSent = idSent;
    }
    getAmbito() {
        let listaAmbito = [];
        for (let etiqueta = this.etiquetaContendora; etiqueta != null; etiqueta = etiqueta.padre) {
            listaAmbito.push(etiqueta.getName());
        }
        listaAmbito.push("GLOBAL");
        return listaAmbito;
    }
    getAsRowTable() {
        return (new Fila_1.Fila(this.nombre, Tipos_1.Tipos.ATRIBUTO, this.getAmbito(), this.linea, this.columna, this.imprimir()));
    }
    imprimir() {
        let texto = "";
        texto = this.nombre + "=" + this.valor;
        return texto;
    }
    getCstDotA(idPadre) {
        let texto = "";
        texto += Graficas_1.Graficas.getElement(this.idSent, "ATRIBUTO", idPadre);
        texto += Graficas_1.Graficas.getElement(this.idSent + 1, "NombreAtributo", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 2, this.nombre, this.idSent + 1);
        texto += Graficas_1.Graficas.getElement(this.idSent + 4, "IgualAtributo", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 5, "=", this.idSent + 4);
        texto += Graficas_1.Graficas.getElement(this.idSent + 6, "ValorAtributo", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 7, this.valor.split("\"").join(""), this.idSent + 6);
        return texto;
    }
}
exports.Atributo = Atributo;


/***/ }),

/***/ "Jixd":
/*!****************************************!*\
  !*** ./src/Backend/build/Xml/Tabla.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TipoSeleccion_1 = __webpack_require__(/*! ../Xpath/TipoSeleccion */ "OjI0");
const TipoVal_1 = __webpack_require__(/*! ../Xpath/TipoVal */ "eU3H");
function sonAmbitosIguales(ambito1, ambito2) {
    if (ambito1.length === ambito2.length) {
        for (let i = 0; i < ambito1.length; i++) {
            if (ambito1[i] != ambito2[i]) {
                return false;
            }
        }
    }
    else {
        return false;
    }
    return true;
}
function esSimboloIgual(elemBusqueda, fila) {
    if (elemBusqueda.nombre == fila.nombre &&
        sonAmbitosIguales(elemBusqueda.listaAmbito, fila.listaAmbito)) {
        return true;
    }
    return false;
}
class Tabla {
    constructor() {
        this.filas = [];
    }
    addFila(fila) {
        this.filas.push(fila);
    }
    buscar(resXpath, elemBusqueda = {
        nombre: "",
        tipo: "",
        listaAmbito: ['GLOBAL'],
        selector: "/",
        inidiceRestringido: false,
        indice: 0
    }) {
        let texto = "";
        for (let set of resXpath) {
            if (set.tipo === TipoSeleccion_1.TipoSeleccion.ACCESO_NODO_RAIZ && set.predicado == null) {
                for (let fila of this.filas) {
                    if (fila.nombre === set.id && fila.listaAmbito[0] === 'GLOBAL') {
                        texto += fila.valor;
                    }
                }
            }
            if (set.tipo === TipoSeleccion_1.TipoSeleccion.SELECT_NODOS_FROM_NODO) {
                elemBusqueda.nombre = set.id;
                if (set.selector === "//" && elemBusqueda.listaAmbito.length === 1 && set.next == null) {
                    elemBusqueda.selector = "//";
                }
                if (set.predicado != null) {
                    let opBinaria = set.predicado;
                    let res = opBinaria.ejecutar();
                    if (res.tipo === TipoVal_1.TipoVal.ENTERO) {
                        elemBusqueda.inidiceRestringido = true;
                        elemBusqueda.indice = res.valor - 1;
                    }
                }
                if (set.next != null) {
                    elemBusqueda.listaAmbito.unshift(set.id);
                    texto += this.buscar([set.next], elemBusqueda);
                }
                else {
                    let cont = 0;
                    for (let fila of this.filas) {
                        if (esSimboloIgual(elemBusqueda, fila) || (elemBusqueda.listaAmbito.length === 1) && elemBusqueda.nombre === fila.nombre) {
                            let condicion = elemBusqueda.inidiceRestringido ? cont === elemBusqueda.indice : true;
                            texto += fila.valor;
                            cont += 1;
                        }
                    }
                }
            }
            if (set.tipo === TipoSeleccion_1.TipoSeleccion.SELECT_NODOS_FROM_NODO) {
            }
            elemBusqueda = {
                nombre: "",
                tipo: "",
                listaAmbito: ['GLOBAL'],
                selector: "/",
                inidiceRestringido: false,
                indice: 0
            };
            texto += "\n";
        }
        return texto;
    }
}
exports.Tabla = Tabla;


/***/ }),

/***/ "NQeE":
/*!*******************************************!*\
  !*** ./src/Backend/build/Grammar/xmlD.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var xmlD = (function () {
    var o = function (k, v, o, l) { for (o = o || {}, l = k.length; l--; o[k[l]] = v)
        ; return o; }, $V0 = [1, 8], $V1 = [1, 9], $V2 = [1, 14], $V3 = [6, 19], $V4 = [2, 5], $V5 = [1, 21], $V6 = [2, 6, 12, 19], $V7 = [14, 22, 24], $V8 = [2, 24], $V9 = [2, 12, 16, 19], $Va = [2, 12];
    var parser = { trace: function trace() { },
        yy: {},
        symbols_: { "error": 2, "XML": 3, "TAG_CONFIGURACION": 4, "LISTA_ETIQUETAS": 5, "EOF": 6, "ETIQUETA": 7, "ListaEtiqueta": 8, "TAG_APERTURA": 9, "MenuEtiqueta": 10, "TAG_UNICO": 11, "AbreTagApertura": 12, "DELIMITADOR": 13, "CierreTagApertura": 14, "TAG_CIERRE": 15, "CadenaValores": 16, "MENU_TAG_APERTURA": 17, "LISTA_ATRIBUTOS": 18, "AbreTagCierre": 19, "CierreTagCierre": 20, "MENU_TAG_UNICO": 21, "CierreTagUnico": 22, "AbreTagConf": 23, "CierreTagConf": 24, "ATRIBUTO": 25, "ListaA": 26, "NombreAtributo": 27, "IgualAtributo": 28, "ValorAtributo": 29, "$accept": 0, "$end": 1 },
        terminals_: { 2: "error", 6: "EOF", 12: "AbreTagApertura", 14: "CierreTagApertura", 16: "CadenaValores", 19: "AbreTagCierre", 20: "CierreTagCierre", 22: "CierreTagUnico", 23: "AbreTagConf", 24: "CierreTagConf", 27: "NombreAtributo", 28: "IgualAtributo", 29: "ValorAtributo" },
        productions_: [0, [3, 3], [3, 2], [5, 2], [8, 2], [8, 0], [7, 2], [7, 1], [7, 2], [13, 1], [13, 1], [10, 2], [10, 2], [10, 1], [9, 2], [17, 2], [17, 1], [15, 2], [11, 2], [21, 2], [21, 1], [4, 3], [18, 2], [26, 2], [26, 0], [25, 3]],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
            /* this == yyval */
            var $0 = $$.length - 1;
            switch (yystate) {
                case 1:
                    this.$ = new XmlResultado($$[$0 - 2], $$[$0 - 1]);
                    return this.$;
                    new ReporteGramatica("XML -> TAG_CONFIGURACION LISTA_ETIQUETAS EOF", "XML.val = TAG_CONFIGURACION.val+LISTA_ETIQUETAS.val");
                    break;
                case 2:
                    this.$ = new XmlResultado(null, $$[$0]);
                    return this.$;
                    new ReporteGramatica("XML -> N LISTA_ETIQUETAS EOF", "XML.val = LISTA_ETIQUETAS.val");
                    break;
                case 3:
                    $$[$0].push($$[$0 - 1]);
                    this.$ = $$[$0];
                    new ReporteGramatica("LISTA_ETIQUETAS -> ETIQUETA ListaEtiqueta ", "LISTA_ETIQUETAS.val=ListaEtiqueta.val--- ListaEtiqueta = new Array(ETIQUETA)     ////    ListaEtiqueta.push(ETIQUETA.val)");
                    break;
                case 4:
                    $$[$0].push($$[$0 - 1]);
                    this.$ = $$[$0];
                    new ReporteGramatica("ListaEtiqueta -> ETIQUETA ListaEtiqueta ", "    ListaEtiqueta.push(ETIQUETA.val)");
                    break;
                case 5:
                    this.$ = [];
                    new ReporteGramatica("ListaEtiqueta -> epsilon ", "  ListaEtiqueta.val = []");
                    break;
                case 6:
                    this.$ = new EtiquetaDoble($$[$0 - 1].nombreTagApertura, $$[$0].nombreTagCierre, $$[$0 - 1].listaAtributos, $$[$0].cadena, $$[$0].listaEtiqueta, _$[$0 - 1].first_line, _$[$0 - 1].first_column, getId());
                    new ReporteGramatica("ETIQUETA -> TAG_APERTURA MenuEtiqueta ", " ETIQUTA.val= new EtiquetaDoble(TAG_APERTURA.val, MenuEtiqueta.val)");
                    break;
                case 7:
                    this.$ = $$[$0];
                    new ReporteGramatica("ETIQUETA -> TAG_UNICO    ", " ETIQUTA.val= TAG_UNICO.val");
                    break;
                case 8:
                    this.$ = new ControlError(yytext, TipoSeleccion.ERROR_SINTACTICO, this._$.first_line, this._$.first_column, "XmlDEscendiente");
                    break;
                case 9:
                    this.$ = $$[$0];
                    break;
                case 10:
                    this.$ = $$[$0];
                    break;
                case 11:
                    this.$ = {
                        nombreTagCierre: $$[$0],
                        listaEtiqueta: $$[$0 - 1],
                        cadena: ''
                    };
                    new ReporteGramatica("MenuEtiqueta -> LISTA_ETIQUETAS TAG_CIERRE    ", " MenuEtiqueta.val= LISTA_ETIQUETAS.val +TAG_CIERRE.val");
                    break;
                case 12:
                    this.$ = {
                        nombreTagCierre: $$[$0],
                        listaEtiqueta: [],
                        cadena: $$[$0 - 1]
                    };
                    new ReporteGramatica("MenuEtiqueta ->  CadenaValores TAG_CIERRE  ", " MenuEtiqueta.val= CadenaValores.lexval +TAG_CIERRE.val");
                    break;
                case 13:
                    this.$ = {
                        nombreTagCierre: $$[$0],
                        listaEtiqueta: [],
                        cadena: ''
                    };
                    new ReporteGramatica("MenuEtiqueta ->   TAG_CIERRE  ", " MenuEtiqueta.val=TAG_CIERRE.val");
                    break;
                case 14:
                    this.$ = {
                        nombreTagApertura: formatTagName($$[$0 - 1]),
                        listaAtributos: $$[$0].listaAtributos_
                    };
                    new ReporteGramatica("TAG_APERTURA ->   AbreTagApertura MENU_TAG_APERTURA ", " TAG_APERTURA.val=  AbreTagApertura.lexval+ MENU_TAG_APERTURA.val");
                    break;
                case 15:
                    this.$ = {
                        listaAtributos_: $$[$0 - 1]
                    };
                    new ReporteGramatica("MENU_TAG_APERTURA: ->   LISTA_ATRIBUTOS CierreTagApertura ", " MENU_TAG_APERTURA.val=  LISTA_ATRIBUTOS.val+ CierreTagApertura.lexval");
                    break;
                case 16:
                    this.$ = {
                        listaAtributos_: []
                    };
                    new ReporteGramatica("MENU_TAG_APERTURA: ->    CierreTagApertura ", " MENU_TAG_APERTURA.val=   CierreTagApertura.lexval");
                    break;
                case 17:
                    this.$ = formatTagName(formatTagName($$[$0 - 1]));
                    new ReporteGramatica("TAG_CIERRE ->AbreTagApertura CierreTagApertura ", "TAG_CIERRE.val =AbreTagApertura.lexval  + CierreTagApertura.lexval ");
                    break;
                case 18:
                    this.$ = new EtiquetaSimple(formatTagName($$[$0 - 1]), $$[$0].listaAtributos_unico, _$[$0 - 1].first_line, _$[$0 - 1].first_column, getId());
                    new ReporteGramatica("TAG_UNICO: ->    AbreTagApertura MENU_TAG_UNICO", " TAG_UNICO.val=   AbreTagApertura.lexval+ MENU_TAG_UNICO.val");
                    break;
                case 19:
                    this.$ = {
                        listaAtributos_unico: $$[$0 - 1]
                    };
                    new ReporteGramatica("MENU_TAG_UNICO: ->    LISTA_ATRIBUTOS CierreTagUnico", " MENU_TAG_UNICO.val=   LISTA_ATRIBUTOS.val +CierreTagUnico.lexval");
                    break;
                case 20:
                    this.$ = {
                        listaAtributos_unico: []
                    };
                    new ReporteGramatica("MENU_TAG_UNICO: ->    CierreTagUnico", " MENU_TAG_UNICO.val=   CierreTagUnico.lexval");
                    break;
                case 21:
                    this.$ = new EtiquetaInicio($$[$0 - 1], _$[$0 - 2].first_line, _$[$0 - 2].first_column, getId());
                    new ReporteGramatica("TAG_CONFIGURACION: ->    AbreTagConf LISTA_ATRIBUTOS CierreTagConf ", " TAG_CONFIGURACION.val=     AbreTagConf.lexval LISTA_ATRIBUTOS.val CierreTagConf.lexval ");
                    break;
                case 22:
                    $$[$0].push($$[$0 - 1]);
                    this.$ = $$[$0];
                    new ReporteGramatica("LISTA_ATRIBUTOS -> ATRIBUTO ListaA ", "LISTA_ATRIBUTOS.val=ListaA.val--- ListaA = new Array(ATRIBUTO)     ////    ListaA.push(ATRIBUTO.val)");
                    break;
                case 23:
                    $$[$0].push($$[$0 - 1]);
                    this.$ = $$[$0];
                    new ReporteGramatica("ListaA -> ATRIBUTO ListaA ", "    ListaA.push(ATRIBUTO.val)");
                    break;
                case 24:
                    this.$ = [];
                    new ReporteGramatica("ListaA -> epsilon ", "  ListaA.val = []");
                    break;
                case 25:
                    this.$ = new Atributo($$[$0 - 2], $$[$0], _$[$0 - 2].first_line, _$[$0 - 2].first_column, getId());
                    new ReporteGramatica("ATRIBUTO -> NombreAtributo IgualAtributo ValorAtributo  ", "ATRIBUTO.val=new Atributo (NombreAtributo.lexval,IgualAtributo.lexval,ValorAtributo.lexval)");
                    break;
            }
        },
        table: [{ 2: $V0, 3: 1, 4: 2, 5: 3, 7: 5, 9: 6, 11: 7, 12: $V1, 23: [1, 4] }, { 1: [3] }, { 2: $V0, 5: 10, 7: 5, 9: 6, 11: 7, 12: $V1 }, { 6: [1, 11] }, { 18: 12, 25: 13, 27: $V2 }, o($V3, $V4, { 9: 6, 11: 7, 8: 15, 7: 16, 2: $V0, 12: $V1 }), { 2: $V0, 5: 18, 7: 5, 9: 6, 10: 17, 11: 7, 12: $V1, 15: 20, 16: [1, 19], 19: $V5 }, o($V6, [2, 7]), { 12: [1, 22] }, { 14: [1, 26], 17: 23, 18: 25, 21: 24, 22: [1, 27], 25: 13, 27: $V2 }, { 6: [1, 28] }, { 1: [2, 2] }, { 24: [1, 29] }, o($V7, $V8, { 26: 30, 25: 31, 27: $V2 }), { 28: [1, 32] }, o($V3, [2, 3]), o($V3, $V4, { 9: 6, 11: 7, 7: 16, 8: 33, 2: $V0, 12: $V1 }), o($V6, [2, 6]), { 15: 34, 19: $V5 }, { 15: 35, 19: $V5 }, o($V6, [2, 13]), { 20: [1, 36] }, o($V6, [2, 8]), o($V9, [2, 14]), o($V6, [2, 18]), { 14: [1, 37], 22: [1, 38] }, o($V9, [2, 16]), o($V6, [2, 20]), { 1: [2, 1] }, o($Va, [2, 21]), o($V7, [2, 22]), o($V7, $V8, { 25: 31, 26: 39, 27: $V2 }), { 29: [1, 40] }, o($V3, [2, 4]), o($V6, [2, 11]), o($V6, $Va), o($V6, [2, 17]), o($V9, [2, 15]), o($V6, [2, 19]), o($V7, [2, 23]), o([14, 22, 24, 27], [2, 25])],
        defaultActions: { 11: [2, 2], 28: [2, 1] },
        parseError: function parseError(str, hash) {
            if (hash.recoverable) {
                this.trace(str);
            }
            else {
                var error = new Error(str);
                error.hash = hash;
                throw error;
            }
        },
        parse: function parse(input) {
            var self = this, stack = [0], tstack = [], // token stack
            vstack = [null], // semantic value stack
            lstack = [], // location stack
            table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            var args = lstack.slice.call(arguments, 1);
            //this.reductionCount = this.shiftCount = 0;
            var lexer = Object.create(this.lexer);
            var sharedState = { yy: {} };
            // copy state
            for (var k in this.yy) {
                if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
                    sharedState.yy[k] = this.yy[k];
                }
            }
            lexer.setInput(input, sharedState.yy);
            sharedState.yy.lexer = lexer;
            sharedState.yy.parser = this;
            if (typeof lexer.yylloc == 'undefined') {
                lexer.yylloc = {};
            }
            var yyloc = lexer.yylloc;
            lstack.push(yyloc);
            var ranges = lexer.options && lexer.options.ranges;
            if (typeof sharedState.yy.parseError === 'function') {
                this.parseError = sharedState.yy.parseError;
            }
            else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
            _token_stack: var lex = function () {
                var token;
                token = lexer.lex() || EOF;
                // if token isn't its numeric value, convert
                if (typeof token !== 'number') {
                    token = self.symbols_[token] || token;
                }
                return token;
            };
            var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
            while (true) {
                // retreive state number from top of stack
                state = stack[stack.length - 1];
                // use default actions if available
                if (this.defaultActions[state]) {
                    action = this.defaultActions[state];
                }
                else {
                    if (symbol === null || typeof symbol == 'undefined') {
                        symbol = lex();
                    }
                    // read action for current state and first input
                    action = table[state] && table[state][symbol];
                }
                _handle_error: 
                // handle parse error
                if (typeof action === 'undefined' || !action.length || !action[0]) {
                    var error_rule_depth;
                    var errStr = '';
                    // Return the rule stack depth where the nearest error rule can be found.
                    // Return FALSE when no error recovery rule was found.
                    function locateNearestErrorRecoveryRule(state) {
                        var stack_probe = stack.length - 1;
                        var depth = 0;
                        // try to recover from error
                        for (;;) {
                            // check for error recovery rule in this state
                            if ((TERROR.toString()) in table[state]) {
                                return depth;
                            }
                            if (state === 0 || stack_probe < 2) {
                                return false; // No suitable error recovery rule available.
                            }
                            stack_probe -= 2; // popStack(1): [symbol, action]
                            state = stack[stack_probe];
                            ++depth;
                        }
                    }
                    if (!recovering) {
                        // first see if there's any chance at hitting an error recovery rule:
                        error_rule_depth = locateNearestErrorRecoveryRule(state);
                        // Report error
                        expected = [];
                        for (p in table[state]) {
                            if (this.terminals_[p] && p > TERROR) {
                                expected.push("'" + this.terminals_[p] + "'");
                            }
                        }
                        if (lexer.showPosition) {
                            errStr = 'Parse error on line ' + (yylineno + 1) + ":\n" + lexer.showPosition() + "\nExpecting " + expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                        }
                        else {
                            errStr = 'Parse error on line ' + (yylineno + 1) + ": Unexpected " +
                                (symbol == EOF ? "end of input" :
                                    ("'" + (this.terminals_[symbol] || symbol) + "'"));
                        }
                        this.parseError(errStr, {
                            text: lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: lexer.yylineno,
                            loc: yyloc,
                            expected: expected,
                            recoverable: (error_rule_depth !== false)
                        });
                    }
                    else if (preErrorSymbol !== EOF) {
                        error_rule_depth = locateNearestErrorRecoveryRule(state);
                    }
                    // just recovered from another error
                    if (recovering == 3) {
                        if (symbol === EOF || preErrorSymbol === EOF) {
                            throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                        }
                        // discard current lookahead and grab another
                        yyleng = lexer.yyleng;
                        yytext = lexer.yytext;
                        yylineno = lexer.yylineno;
                        yyloc = lexer.yylloc;
                        symbol = lex();
                    }
                    // try to recover from error
                    if (error_rule_depth === false) {
                        throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
                    }
                    popStack(error_rule_depth);
                    preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
                    symbol = TERROR; // insert generic error symbol as new lookahead
                    state = stack[stack.length - 1];
                    action = table[state] && table[state][TERROR];
                    recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
                }
                // this shouldn't happen, unless resolve defaults are off
                if (action[0] instanceof Array && action.length > 1) {
                    throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
                }
                switch (action[0]) {
                    case 1: // shift
                        //this.shiftCount++;
                        stack.push(symbol);
                        vstack.push(lexer.yytext);
                        lstack.push(lexer.yylloc);
                        stack.push(action[1]); // push state
                        symbol = null;
                        if (!preErrorSymbol) { // normal execution/no error
                            yyleng = lexer.yyleng;
                            yytext = lexer.yytext;
                            yylineno = lexer.yylineno;
                            yyloc = lexer.yylloc;
                            if (recovering > 0) {
                                recovering--;
                            }
                        }
                        else {
                            // error just occurred, resume old lookahead f/ before error
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        // reduce
                        //this.reductionCount++;
                        len = this.productions_[action[1]][1];
                        // perform semantic action
                        yyval.$ = vstack[vstack.length - len]; // default to $$ = $1
                        // default location, uses first token for firsts, last for lasts
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) {
                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                        }
                        r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
                        if (typeof r !== 'undefined') {
                            return r;
                        }
                        // pop off stack
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]); // push nonterminal (reduce)
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        // goto new state = table[STATE][NONTERMINAL]
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        // accept
                        return true;
                }
            }
            return true;
        } };
    const { EtiquetaDoble } = __webpack_require__(/*! ../Xml/EtiquetaDoble */ "EfQ4");
    const { EtiquetaSimple } = __webpack_require__(/*! ../Xml/EtiquetaSimple */ "XPWx");
    const { EtiquetaInicio } = __webpack_require__(/*! ../Xml/EtiquetaInicio */ "oO3V");
    const { Atributo } = __webpack_require__(/*! ../Xml/Atributo */ "GvPq");
    const { XmlResultado } = __webpack_require__(/*! ../Xml/XmlResultado */ "6FQ4");
    const { ControlError } = __webpack_require__(/*! ../Xpath/ControlError */ "2orD");
    const { ReporteGramatica } = __webpack_require__(/*! ../Reportes/ReporteGramatica */ "lo4a");
    let idSent = 1;
    function getId() {
        idSent += 100;
        return idSent;
    }
    function formatTagName(AbreTagApertura) {
        return AbreTagApertura.substring(1, AbreTagApertura.length);
    }
    listaError = [];
    /* generated by jison-lex 0.3.4 */
    var lexer = (function () {
        var lexer = ({
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(str, hash);
                }
                else {
                    throw new Error(str);
                }
            },
            // resets the lexer, sets new input
            setInput: function (input, yy) {
                this.yy = yy || this.yy || {};
                this._input = input;
                this._more = this._backtrack = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = '';
                this.conditionStack = ['INITIAL'];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) {
                    this.yylloc.range = [0, 0];
                }
                this.offset = 0;
                return this;
            },
            // consumes and returns one char from the input
            input: function () {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                }
                else {
                    this.yylloc.last_column++;
                }
                if (this.options.ranges) {
                    this.yylloc.range[1]++;
                }
                this._input = this._input.slice(1);
                return ch;
            },
            // unshifts one char (or a string) into the input
            unput: function (ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) {
                    this.yylineno -= lines.length - 1;
                }
                var r = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ?
                        (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                            + oldLines[oldLines.length - lines.length].length - lines[0].length :
                        this.yylloc.first_column - len
                };
                if (this.options.ranges) {
                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                }
                this.yyleng = this.yytext.length;
                return this;
            },
            // When called from action, caches matched text and appends it on next action
            more: function () {
                this._more = true;
                return this;
            },
            // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
            reject: function () {
                if (this.options.backtrack_lexer) {
                    this._backtrack = true;
                }
                else {
                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
                return this;
            },
            // retain first n characters of the match
            less: function (n) {
                this.unput(this.match.slice(n));
            },
            // displays already matched input, i.e. for error messages
            pastInput: function () {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
            },
            // displays upcoming input, i.e. for error messages
            upcomingInput: function () {
                var next = this.match;
                if (next.length < 20) {
                    next += this._input.substr(0, 20 - next.length);
                }
                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
            },
            // displays the character position where the lexing error occurred, i.e. for error messages
            showPosition: function () {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            // test the lexed token: return FALSE when not a match, otherwise return token
            test_match: function (match, indexed_rule) {
                var token, lines, backup;
                if (this.options.backtrack_lexer) {
                    // save context
                    backup = {
                        yylineno: this.yylineno,
                        yylloc: {
                            first_line: this.yylloc.first_line,
                            last_line: this.last_line,
                            first_column: this.yylloc.first_column,
                            last_column: this.yylloc.last_column
                        },
                        yytext: this.yytext,
                        match: this.match,
                        matches: this.matches,
                        matched: this.matched,
                        yyleng: this.yyleng,
                        offset: this.offset,
                        _more: this._more,
                        _input: this._input,
                        yy: this.yy,
                        conditionStack: this.conditionStack.slice(0),
                        done: this.done
                    };
                    if (this.options.ranges) {
                        backup.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                lines = match[0].match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno += lines.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines ?
                        lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                        this.yylloc.last_column + match[0].length
                };
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [this.offset, this.offset += this.yyleng];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (token) {
                    return token;
                }
                else if (this._backtrack) {
                    // recover context
                    for (var k in backup) {
                        this[k] = backup[k];
                    }
                    return false; // rule action called reject() implying the next rule should be tested instead.
                }
                return false;
            },
            // return next match in input
            next: function () {
                if (this.done) {
                    return this.EOF;
                }
                if (!this._input) {
                    this.done = true;
                }
                var token, match, tempMatch, index;
                if (!this._more) {
                    this.yytext = '';
                    this.match = '';
                }
                var rules = this._currentRules();
                for (var i = 0; i < rules.length; i++) {
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (this.options.backtrack_lexer) {
                            token = this.test_match(tempMatch, rules[i]);
                            if (token !== false) {
                                return token;
                            }
                            else if (this._backtrack) {
                                match = false;
                                continue; // rule action called reject() implying a rule MISmatch.
                            }
                            else {
                                // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                                return false;
                            }
                        }
                        else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (match) {
                    token = this.test_match(match, rules[index]);
                    if (token !== false) {
                        return token;
                    }
                    // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                    return false;
                }
                if (this._input === "") {
                    return this.EOF;
                }
                else {
                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
            },
            // return next match that has a token
            lex: function lex() {
                var r = this.next();
                if (r) {
                    return r;
                }
                else {
                    return this.lex();
                }
            },
            // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            // pop the previously active lexer condition state off the condition stack
            popState: function popState() {
                var n = this.conditionStack.length - 1;
                if (n > 0) {
                    return this.conditionStack.pop();
                }
                else {
                    return this.conditionStack[0];
                }
            },
            // produce the lexer rule set which is active for the currently active lexer condition state
            _currentRules: function _currentRules() {
                if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                }
                else {
                    return this.conditions["INITIAL"].rules;
                }
            },
            // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
            topState: function topState(n) {
                n = this.conditionStack.length - 1 - Math.abs(n || 0);
                if (n >= 0) {
                    return this.conditionStack[n];
                }
                else {
                    return "INITIAL";
                }
            },
            // alias for begin(condition)
            pushState: function pushState(condition) {
                this.begin(condition);
            },
            // return the number of states currently on the stack
            stateStackSize: function stateStackSize() {
                return this.conditionStack.length;
            },
            options: { "case-insensitive": true },
            performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
                var YYSTATE = YY_START;
                switch ($avoiding_name_collisions) {
                    case 0:
                        this.begin("Comentario");
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        this.popState();
                        break;
                    case 4:
                        break;
                    case 5:
                        this.begin("TagApertura");
                        return 23;
                        break;
                    case 6:
                        break;
                    case 7:
                        return 27;
                        break;
                    case 8:
                        return 28;
                        break;
                    case 9:
                        return 29;
                        break;
                    case 10:
                        this.popState();
                        return 24;
                        break;
                    case 11:
                        this.begin("TagApertura");
                        return 12;
                        break;
                    case 12:
                        break;
                    case 13:
                        return 27;
                        break;
                    case 14:
                        return 28;
                        break;
                    case 15:
                        return 29;
                        break;
                    case 16:
                        this.popState();
                        return 14;
                        break;
                    case 17:
                        this.popState();
                        return 22;
                        break;
                    case 18:
                        this.begin("TagCierre");
                        return 19;
                        break;
                    case 19:
                        this.popState();
                        return 20;
                        break;
                    case 20:
                        break;
                    case 21:
                        return 16;
                        break;
                    case 22:
                        return 6;
                        break;
                    case 23:
                        new ControlError(yy_.yytext, TipoSeleccion.ERROR_LEXICO, yy_.yylloc.first_line, yy_.yylloc.first_column, "XmlDescendente");
                        break;
                }
            },
            rules: [/^(?:<!--)/i, /^(?:[\r\t]+)/i, /^(?:\n)/i, /^(?:-->)/i, /^(?:[^"-->"]+)/i, /^(?:<\?xml\b)/i, /^(?:[\s\r\t\n]+)/i, /^(?:[a-zA-Z_][a-zA-Z0-9_]*)/i, /^(?:=)/i, /^(?:"[^\"\n]*")/i, /^(?:\?>)/i, /^(?:<[a-zA-Z_][a-zA-Z0-9_]*)/i, /^(?:[\s\r\t\n]+)/i, /^(?:[a-zA-Z_][a-zA-Z0-9_]*)/i, /^(?:=)/i, /^(?:"[^\"\n]*")/i, /^(?:>)/i, /^(?:\/>)/i, /^(?:<\/[a-zA-Z_][a-zA-Z0-9_]*)/i, /^(?:>)/i, /^(?:[\s\r\t\n]+)/i, /^(?:[^<]+)/i, /^(?:$)/i, /^(?:.)/i],
            conditions: { "TagCierre": { "rules": [19], "inclusive": false }, "TagApertura": { "rules": [6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17], "inclusive": false }, "Comentario": { "rules": [1, 2, 3, 4], "inclusive": false }, "INITIAL": { "rules": [0, 5, 11, 18, 20, 21, 22, 23], "inclusive": true } }
        });
        return lexer;
    })();
    parser.lexer = lexer;
    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser;
})();
if (true) {
    exports.parser = xmlD;
    exports.Parser = xmlD.Parser;
    exports.parse = function () { return xmlD.parse.apply(xmlD, arguments); };
    exports.main = function commonjsMain(args) {
        if (!args[1]) {
            console.log('Usage: ' + args[0] + ' FILE');
            process.exit(1);
        }
        var source = __webpack_require__(/*! fs */ 1).readFileSync(__webpack_require__(/*! path */ 2).normalize(args[1]), "utf8");
        return exports.parser.parse(source);
    };
    if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
        exports.main(process.argv.slice(1));
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "YuTi")(module)))

/***/ }),

/***/ "NhD4":
/*!**********************************************!*\
  !*** ./src/Backend/build/Xpath/Primitivo.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Primitivo {
    constructor(valor, tipo) {
        this.valor = valor;
        this.tipo = tipo;
    }
    ejecutar() {
        return this;
    }
}
exports.Primitivo = Primitivo;


/***/ }),

/***/ "O0zG":
/*!*******************************************!*\
  !*** ./src/Backend/build/Grammar/xmlA.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var xmlA = (function () {
    var o = function (k, v, o, l) { for (o = o || {}, l = k.length; l--; o[k[l]] = v)
        ; return o; }, $V0 = [1, 8], $V1 = [1, 9], $V2 = [1, 15], $V3 = [2, 6, 12, 16], $V4 = [1, 19], $V5 = [14, 18, 20, 22], $V6 = [2, 10, 12, 16], $V7 = [2, 12];
    var parser = { trace: function trace() { },
        yy: {},
        symbols_: { "error": 2, "XML": 3, "TAG_CONFIGURACION": 4, "LISTA_ETIQUETAS": 5, "EOF": 6, "ETIQUETA": 7, "TAG_APERTURA": 8, "TAG_CIERRE": 9, "CadenaValores": 10, "TAG_UNICO": 11, "AbreTagApertura": 12, "DELIMITADOR": 13, "CierreTagApertura": 14, "LISTA_ATRIBUTOS": 15, "AbreTagCierre": 16, "CierreTagCierre": 17, "CierreTagUnico": 18, "AbreTagConf": 19, "CierreTagConf": 20, "ATRIBUTO": 21, "NombreAtributo": 22, "IgualAtributo": 23, "ValorAtributo": 24, "$accept": 0, "$end": 1 },
        terminals_: { 2: "error", 6: "EOF", 10: "CadenaValores", 12: "AbreTagApertura", 14: "CierreTagApertura", 16: "AbreTagCierre", 17: "CierreTagCierre", 18: "CierreTagUnico", 19: "AbreTagConf", 20: "CierreTagConf", 22: "NombreAtributo", 23: "IgualAtributo", 24: "ValorAtributo" },
        productions_: [0, [3, 3], [3, 2], [5, 2], [5, 1], [7, 3], [7, 3], [7, 2], [7, 1], [7, 2], [13, 1], [13, 1], [8, 3], [8, 2], [9, 2], [11, 3], [11, 2], [4, 3], [15, 2], [15, 1], [21, 3]],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
            /* this == yyval */
            var $0 = $$.length - 1;
            switch (yystate) {
                case 1:
                    this.$ = new XmlResultado($$[$0 - 2], $$[$0 - 1]);
                    return this.$;
                    new ReporteGramatica("XML -> TAG_CONFIGURACION LISTA_ETIQUETAS EOF", "XML.val = TAG_CONFIGURACION.val+LISTA_ETIQUETAS.val");
                    break;
                case 2:
                    this.$ = new XmlResultado(null, $$[$0]);
                    return this.$;
                    new ReporteGramatica("XML -> N LISTA_ETIQUETAS EOF", "XML.val = LISTA_ETIQUETAS.val");
                    break;
                case 3:
                    $$[$0 - 1].push($$[$0]);
                    this.$ = $$[$0 - 1];
                    new ReporteGramatica("LISTA_ETIQUETAS -> LISTA_ETIQUETAS  ETIQUETA ", " LISTA_ETIQUETAS = new Array (Etiquetas)              ----    LISTA_ETIQUETAS.push(ETIQUETA.val)");
                    break;
                case 4:
                    this.$ = [$$[$0]];
                    new ReporteGramatica("LISTA_ETIQUETAS ->  ETIQUETA ", "LISTA_ETIQUETAS.val =[ETIQUETA.val[");
                    break;
                case 5:
                    this.$ = new EtiquetaDoble($$[$0 - 2].nombreTagApertura, $$[$0], $$[$0 - 2].listaAtributos, '', $$[$0 - 1], _$[$0 - 2].first_line, _$[$0 - 2].first_column, getId());
                    new ReporteGramatica("ETIQUETA -> TAG_APERTURA LISTA_ETIQUETAS TAG_CIERRE ", "ETIQUETA.val = new ETITQUETA_DOBLE (TAG_APERTURA.val,LISTA_ETIQUETAS.val,TAG_CIERRE.val)");
                    break;
                case 6:
                    this.$ = new EtiquetaDoble($$[$0 - 2].nombreTagApertura, $$[$0], $$[$0 - 2].listaAtributos, $$[$0 - 1], [], _$[$0 - 2].first_line, _$[$0 - 2].first_column, getId());
                    new ReporteGramatica("ETIQUETA -> TAG_APERTURA CadenaValores TAG_CIERRE ", "ETIQUETA.val = new ETITQUETA_DOBLE (TAG_APERTURA.val,CadenaValores.lexval,TAG_CIERRE.val)");
                    break;
                case 7:
                    this.$ = new EtiquetaDoble($$[$0 - 1].nombreTagApertura, $$[$0], $$[$0 - 1].listaAtributos, '', [], _$[$0 - 1].first_line, _$[$0 - 1].first_column, getId());
                    new ReporteGramatica("ETIQUETA -> TAG_APERTURA  TAG_CIERRE ", "ETIQUETA.val = new ETITQUETA_DOBLE (TAG_APERTURA.val,[],TAG_CIERRE.val)");
                    break;
                case 8:
                    this.$ = $$[$0];
                    new ReporteGramatica("ETIQUETA -> TAG_UNICO ", "ETIQUETA.val =TAG_UNICO.val");
                    break;
                case 9:
                    this.$ = listaError.push(new ControlError(yytext, TipoSeleccion.ERROR_SINTACTICO, this._$.first_line, this._$.first_column, "XPathAscendente"));
                    break;
                case 10:
                    this.$ = $$[$0];
                    break;
                case 11:
                    this.$ = $$[$0];
                    break;
                case 12:
                    new ReporteGramatica("TAG_APERTURA -> AbreTagApertura LISTA_ATRIBUTOS CierreTagApertura ", "TAG_APERTURA.val =AbreTagApertura.lexval + LISTA_ATRIBUTOS.val + CierreTagApertura.lexval   ");
                    this.$ = {
                        nombreTagApertura: formatTagName($$[$0 - 2]),
                        listaAtributos: $$[$0 - 1]
                    };
                    break;
                case 13:
                    new ReporteGramatica("TAG_APERTURA ->AbreTagApertura CierreTagApertura ", "TAG_APERTURA.val =AbreTagApertura.lexval  + CierreTagApertura.lexval ");
                    this.$ = {
                        nombreTagApertura: formatTagName($$[$0 - 1]),
                        listaAtributos: []
                    };
                    break;
                case 14:
                    this.$ = formatTagName(formatTagName($$[$0 - 1]));
                    new ReporteGramatica("TAG_CIERRE ->AbreTagApertura CierreTagApertura ", "TAG_CIERRE.val =AbreTagApertura.lexval  + CierreTagApertura.lexval ");
                    break;
                case 15:
                    this.$ = new EtiquetaSimple(formatTagName($$[$0 - 2]), $$[$0 - 1], _$[$0 - 2].first_line, _$[$0 - 2].first_column, getId());
                    new ReporteGramatica("TAG_UNICO -> AbreTagApertura LISTA_ATRIBUTOS CierreTagUnico ", "TAG_UNICO.val =new EtiquetaSimple(AbreTagApertura.lexval,LISTA_ATRIBUTOS.val  , CierreTagApertura.lexval) ");
                    break;
                case 16:
                    this.$ = new EtiquetaSimple(formatTagName($$[$0 - 1]), [], _$[$0 - 1].first_line, _$[$0 - 1].first_column, getId());
                    new ReporteGramatica("TAG_UNICO ->AbreTagApertura CierreTagApertura ", "TAG_UNICO.val =new EtiquetaSimple(AbreTagApertura.lexval,[ ]  , CierreTagApertura.lexval) ");
                    break;
                case 17:
                    this.$ = new EtiquetaInicio($$[$0 - 1], _$[$0 - 2].first_line, _$[$0 - 2].first_column, getId());
                    new ReporteGramatica("TAG_CONFIGURACION ->AbreTagConf LISTA_ATRIBUTOS CierreTagConf", "TAG_CONFIGURACION.val =new EtiquetaInicio(AbreTagConf.lexval,LISTA_ATRIBUTOS.val  , CierreTagConf.lexval) ");
                    break;
                case 18:
                    $$[$0 - 1].push($$[$0]);
                    this.$ = $$[$0 - 1];
                    new ReporteGramatica("LISTA_ATRIBUTOS -> LISTA_ATRIBUTOS  ATRIBUTO ", " LISTA_ATRIBUTO= new Array () ----- LISTA_ATRIBUTO.push(ATRIBUTO.val)");
                    break;
                case 19:
                    this.$ = [$$[$0]];
                    new ReporteGramatica("LISTA_ATRIBUTO -> ATRIBUTO ", "LISTA_ATRIBUTO.=[ATRIBUTO.val]");
                    break;
                case 20:
                    new ReporteGramatica("ATRIBUTO -> NombreAtributo IgualAtributo ValorAtributo  ", "ATRIBUTO.val=new Atributo (NombreAtributo.lexval,IgualAtributo.lexval,ValorAtributo.lexval)");
                    this.$ = new Atributo($$[$0 - 2], $$[$0], _$[$0 - 2].first_line, _$[$0 - 2].first_column, getId());
                    break;
            }
        },
        table: [{ 2: $V0, 3: 1, 4: 2, 5: 3, 7: 5, 8: 6, 11: 7, 12: $V1, 19: [1, 4] }, { 1: [3] }, { 2: $V0, 5: 10, 7: 5, 8: 6, 11: 7, 12: $V1 }, { 2: $V0, 6: [1, 11], 7: 12, 8: 6, 11: 7, 12: $V1 }, { 15: 13, 21: 14, 22: $V2 }, o($V3, [2, 4]), { 2: $V0, 5: 16, 7: 5, 8: 6, 9: 18, 10: [1, 17], 11: 7, 12: $V1, 16: $V4 }, o($V3, [2, 8]), { 12: [1, 20] }, { 14: [1, 22], 15: 21, 18: [1, 23], 21: 14, 22: $V2 }, { 2: $V0, 6: [1, 24], 7: 12, 8: 6, 11: 7, 12: $V1 }, { 1: [2, 2] }, o($V3, [2, 3]), { 20: [1, 25], 21: 26, 22: $V2 }, o($V5, [2, 19]), { 23: [1, 27] }, { 2: $V0, 7: 12, 8: 6, 9: 28, 11: 7, 12: $V1, 16: $V4 }, { 9: 29, 16: $V4 }, o($V3, [2, 7]), { 17: [1, 30] }, o($V3, [2, 9]), { 14: [1, 31], 18: [1, 32], 21: 26, 22: $V2 }, o($V6, [2, 13]), o($V3, [2, 16]), { 1: [2, 1] }, o($V7, [2, 17]), o($V5, [2, 18]), { 24: [1, 33] }, o($V3, [2, 5]), o($V3, [2, 6]), o($V3, [2, 14]), o($V6, $V7), o($V3, [2, 15]), o($V5, [2, 20])],
        defaultActions: { 11: [2, 2], 24: [2, 1] },
        parseError: function parseError(str, hash) {
            if (hash.recoverable) {
                this.trace(str);
            }
            else {
                var error = new Error(str);
                error.hash = hash;
                throw error;
            }
        },
        parse: function parse(input) {
            var self = this, stack = [0], tstack = [], // token stack
            vstack = [null], // semantic value stack
            lstack = [], // location stack
            table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            var args = lstack.slice.call(arguments, 1);
            //this.reductionCount = this.shiftCount = 0;
            var lexer = Object.create(this.lexer);
            var sharedState = { yy: {} };
            // copy state
            for (var k in this.yy) {
                if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
                    sharedState.yy[k] = this.yy[k];
                }
            }
            lexer.setInput(input, sharedState.yy);
            sharedState.yy.lexer = lexer;
            sharedState.yy.parser = this;
            if (typeof lexer.yylloc == 'undefined') {
                lexer.yylloc = {};
            }
            var yyloc = lexer.yylloc;
            lstack.push(yyloc);
            var ranges = lexer.options && lexer.options.ranges;
            if (typeof sharedState.yy.parseError === 'function') {
                this.parseError = sharedState.yy.parseError;
            }
            else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
            _token_stack: var lex = function () {
                var token;
                token = lexer.lex() || EOF;
                // if token isn't its numeric value, convert
                if (typeof token !== 'number') {
                    token = self.symbols_[token] || token;
                }
                return token;
            };
            var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
            while (true) {
                // retreive state number from top of stack
                state = stack[stack.length - 1];
                // use default actions if available
                if (this.defaultActions[state]) {
                    action = this.defaultActions[state];
                }
                else {
                    if (symbol === null || typeof symbol == 'undefined') {
                        symbol = lex();
                    }
                    // read action for current state and first input
                    action = table[state] && table[state][symbol];
                }
                _handle_error: 
                // handle parse error
                if (typeof action === 'undefined' || !action.length || !action[0]) {
                    var error_rule_depth;
                    var errStr = '';
                    // Return the rule stack depth where the nearest error rule can be found.
                    // Return FALSE when no error recovery rule was found.
                    function locateNearestErrorRecoveryRule(state) {
                        var stack_probe = stack.length - 1;
                        var depth = 0;
                        // try to recover from error
                        for (;;) {
                            // check for error recovery rule in this state
                            if ((TERROR.toString()) in table[state]) {
                                return depth;
                            }
                            if (state === 0 || stack_probe < 2) {
                                return false; // No suitable error recovery rule available.
                            }
                            stack_probe -= 2; // popStack(1): [symbol, action]
                            state = stack[stack_probe];
                            ++depth;
                        }
                    }
                    if (!recovering) {
                        // first see if there's any chance at hitting an error recovery rule:
                        error_rule_depth = locateNearestErrorRecoveryRule(state);
                        // Report error
                        expected = [];
                        for (p in table[state]) {
                            if (this.terminals_[p] && p > TERROR) {
                                expected.push("'" + this.terminals_[p] + "'");
                            }
                        }
                        if (lexer.showPosition) {
                            errStr = 'Parse error on line ' + (yylineno + 1) + ":\n" + lexer.showPosition() + "\nExpecting " + expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                        }
                        else {
                            errStr = 'Parse error on line ' + (yylineno + 1) + ": Unexpected " +
                                (symbol == EOF ? "end of input" :
                                    ("'" + (this.terminals_[symbol] || symbol) + "'"));
                        }
                        this.parseError(errStr, {
                            text: lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: lexer.yylineno,
                            loc: yyloc,
                            expected: expected,
                            recoverable: (error_rule_depth !== false)
                        });
                    }
                    else if (preErrorSymbol !== EOF) {
                        error_rule_depth = locateNearestErrorRecoveryRule(state);
                    }
                    // just recovered from another error
                    if (recovering == 3) {
                        if (symbol === EOF || preErrorSymbol === EOF) {
                            throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                        }
                        // discard current lookahead and grab another
                        yyleng = lexer.yyleng;
                        yytext = lexer.yytext;
                        yylineno = lexer.yylineno;
                        yyloc = lexer.yylloc;
                        symbol = lex();
                    }
                    // try to recover from error
                    if (error_rule_depth === false) {
                        throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
                    }
                    popStack(error_rule_depth);
                    preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
                    symbol = TERROR; // insert generic error symbol as new lookahead
                    state = stack[stack.length - 1];
                    action = table[state] && table[state][TERROR];
                    recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
                }
                // this shouldn't happen, unless resolve defaults are off
                if (action[0] instanceof Array && action.length > 1) {
                    throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
                }
                switch (action[0]) {
                    case 1: // shift
                        //this.shiftCount++;
                        stack.push(symbol);
                        vstack.push(lexer.yytext);
                        lstack.push(lexer.yylloc);
                        stack.push(action[1]); // push state
                        symbol = null;
                        if (!preErrorSymbol) { // normal execution/no error
                            yyleng = lexer.yyleng;
                            yytext = lexer.yytext;
                            yylineno = lexer.yylineno;
                            yyloc = lexer.yylloc;
                            if (recovering > 0) {
                                recovering--;
                            }
                        }
                        else {
                            // error just occurred, resume old lookahead f/ before error
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        // reduce
                        //this.reductionCount++;
                        len = this.productions_[action[1]][1];
                        // perform semantic action
                        yyval.$ = vstack[vstack.length - len]; // default to $$ = $1
                        // default location, uses first token for firsts, last for lasts
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) {
                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                        }
                        r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
                        if (typeof r !== 'undefined') {
                            return r;
                        }
                        // pop off stack
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]); // push nonterminal (reduce)
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        // goto new state = table[STATE][NONTERMINAL]
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        // accept
                        return true;
                }
            }
            return true;
        } };
    const { EtiquetaDoble } = __webpack_require__(/*! ../Xml/EtiquetaDoble */ "EfQ4");
    const { EtiquetaSimple } = __webpack_require__(/*! ../Xml/EtiquetaSimple */ "XPWx");
    const { EtiquetaInicio } = __webpack_require__(/*! ../Xml/EtiquetaInicio */ "oO3V");
    const { Atributo } = __webpack_require__(/*! ../Xml/Atributo */ "GvPq");
    const { XmlResultado } = __webpack_require__(/*! ../Xml/XmlResultado */ "6FQ4");
    const { ControlError } = __webpack_require__(/*! ../Xpath/ControlError */ "2orD");
    const { TipoSeleccion } = __webpack_require__(/*! ../Xpath/TipoSeleccion */ "OjI0");
    const { ReporteGramatica } = __webpack_require__(/*! ../Reportes/ReporteGramatica */ "lo4a");
    let idSent = 1;
    function getId() {
        idSent += 100;
        return idSent;
    }
    function formatTagName(AbreTagApertura) {
        return AbreTagApertura.substring(1, AbreTagApertura.length);
    }
    /* generated by jison-lex 0.3.4 */
    var lexer = (function () {
        var lexer = ({
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(str, hash);
                }
                else {
                    throw new Error(str);
                }
            },
            // resets the lexer, sets new input
            setInput: function (input, yy) {
                this.yy = yy || this.yy || {};
                this._input = input;
                this._more = this._backtrack = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = '';
                this.conditionStack = ['INITIAL'];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) {
                    this.yylloc.range = [0, 0];
                }
                this.offset = 0;
                return this;
            },
            // consumes and returns one char from the input
            input: function () {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                }
                else {
                    this.yylloc.last_column++;
                }
                if (this.options.ranges) {
                    this.yylloc.range[1]++;
                }
                this._input = this._input.slice(1);
                return ch;
            },
            // unshifts one char (or a string) into the input
            unput: function (ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) {
                    this.yylineno -= lines.length - 1;
                }
                var r = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ?
                        (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                            + oldLines[oldLines.length - lines.length].length - lines[0].length :
                        this.yylloc.first_column - len
                };
                if (this.options.ranges) {
                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                }
                this.yyleng = this.yytext.length;
                return this;
            },
            // When called from action, caches matched text and appends it on next action
            more: function () {
                this._more = true;
                return this;
            },
            // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
            reject: function () {
                if (this.options.backtrack_lexer) {
                    this._backtrack = true;
                }
                else {
                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
                return this;
            },
            // retain first n characters of the match
            less: function (n) {
                this.unput(this.match.slice(n));
            },
            // displays already matched input, i.e. for error messages
            pastInput: function () {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
            },
            // displays upcoming input, i.e. for error messages
            upcomingInput: function () {
                var next = this.match;
                if (next.length < 20) {
                    next += this._input.substr(0, 20 - next.length);
                }
                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
            },
            // displays the character position where the lexing error occurred, i.e. for error messages
            showPosition: function () {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            // test the lexed token: return FALSE when not a match, otherwise return token
            test_match: function (match, indexed_rule) {
                var token, lines, backup;
                if (this.options.backtrack_lexer) {
                    // save context
                    backup = {
                        yylineno: this.yylineno,
                        yylloc: {
                            first_line: this.yylloc.first_line,
                            last_line: this.last_line,
                            first_column: this.yylloc.first_column,
                            last_column: this.yylloc.last_column
                        },
                        yytext: this.yytext,
                        match: this.match,
                        matches: this.matches,
                        matched: this.matched,
                        yyleng: this.yyleng,
                        offset: this.offset,
                        _more: this._more,
                        _input: this._input,
                        yy: this.yy,
                        conditionStack: this.conditionStack.slice(0),
                        done: this.done
                    };
                    if (this.options.ranges) {
                        backup.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                lines = match[0].match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno += lines.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines ?
                        lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                        this.yylloc.last_column + match[0].length
                };
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [this.offset, this.offset += this.yyleng];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (token) {
                    return token;
                }
                else if (this._backtrack) {
                    // recover context
                    for (var k in backup) {
                        this[k] = backup[k];
                    }
                    return false; // rule action called reject() implying the next rule should be tested instead.
                }
                return false;
            },
            // return next match in input
            next: function () {
                if (this.done) {
                    return this.EOF;
                }
                if (!this._input) {
                    this.done = true;
                }
                var token, match, tempMatch, index;
                if (!this._more) {
                    this.yytext = '';
                    this.match = '';
                }
                var rules = this._currentRules();
                for (var i = 0; i < rules.length; i++) {
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (this.options.backtrack_lexer) {
                            token = this.test_match(tempMatch, rules[i]);
                            if (token !== false) {
                                return token;
                            }
                            else if (this._backtrack) {
                                match = false;
                                continue; // rule action called reject() implying a rule MISmatch.
                            }
                            else {
                                // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                                return false;
                            }
                        }
                        else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (match) {
                    token = this.test_match(match, rules[index]);
                    if (token !== false) {
                        return token;
                    }
                    // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                    return false;
                }
                if (this._input === "") {
                    return this.EOF;
                }
                else {
                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
            },
            // return next match that has a token
            lex: function lex() {
                var r = this.next();
                if (r) {
                    return r;
                }
                else {
                    return this.lex();
                }
            },
            // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            // pop the previously active lexer condition state off the condition stack
            popState: function popState() {
                var n = this.conditionStack.length - 1;
                if (n > 0) {
                    return this.conditionStack.pop();
                }
                else {
                    return this.conditionStack[0];
                }
            },
            // produce the lexer rule set which is active for the currently active lexer condition state
            _currentRules: function _currentRules() {
                if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                }
                else {
                    return this.conditions["INITIAL"].rules;
                }
            },
            // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
            topState: function topState(n) {
                n = this.conditionStack.length - 1 - Math.abs(n || 0);
                if (n >= 0) {
                    return this.conditionStack[n];
                }
                else {
                    return "INITIAL";
                }
            },
            // alias for begin(condition)
            pushState: function pushState(condition) {
                this.begin(condition);
            },
            // return the number of states currently on the stack
            stateStackSize: function stateStackSize() {
                return this.conditionStack.length;
            },
            options: { "case-insensitive": true },
            performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
                var YYSTATE = YY_START;
                switch ($avoiding_name_collisions) {
                    case 0:
                        this.begin("Comentario");
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        this.popState();
                        break;
                    case 4:
                        break;
                    case 5:
                        this.begin("TagApertura");
                        return 19;
                        break;
                    case 6:
                        break;
                    case 7:
                        return 22;
                        break;
                    case 8:
                        return 23;
                        break;
                    case 9:
                        return 24;
                        break;
                    case 10:
                        this.popState();
                        return 20;
                        break;
                    case 11:
                        this.begin("TagApertura");
                        return 12;
                        break;
                    case 12:
                        break;
                    case 13:
                        return 22;
                        break;
                    case 14:
                        return 23;
                        break;
                    case 15:
                        return 24;
                        break;
                    case 16:
                        this.popState();
                        return 14;
                        break;
                    case 17:
                        this.popState();
                        return 18;
                        break;
                    case 18:
                        this.begin("TagCierre");
                        return 16;
                        break;
                    case 19:
                        this.popState();
                        return 17;
                        break;
                    case 20:
                        break;
                    case 21:
                        return 10;
                        break;
                    case 22:
                        return 6;
                        break;
                    case 23:
                        $$ = listaError.push(new ControlError(yy_.yytext, TipoSeleccion.ERROR_SINTACTICO, this._$.first_line, this._$.first_column, "XPathAscendente"));
                        break;
                }
            },
            rules: [/^(?:<!--)/i, /^(?:[\r\t]+)/i, /^(?:\n)/i, /^(?:-->)/i, /^(?:[^"-->"]+)/i, /^(?:<\?xml\b)/i, /^(?:[\s\r\t\n]+)/i, /^(?:[a-zA-Z_][a-zA-Z0-9_]*)/i, /^(?:=)/i, /^(?:"[^\"\n]*")/i, /^(?:\?>)/i, /^(?:<[a-zA-Z_][a-zA-Z0-9_]*)/i, /^(?:[\s\r\t\n]+)/i, /^(?:[a-zA-Z_][a-zA-Z0-9_]*)/i, /^(?:=)/i, /^(?:"[^\"\n]*")/i, /^(?:>)/i, /^(?:\/>)/i, /^(?:<\/[a-zA-Z_][a-zA-Z0-9_]*)/i, /^(?:>)/i, /^(?:[\s\r\t\n]+)/i, /^(?:[^<]+)/i, /^(?:$)/i, /^(?:.)/i],
            conditions: { "TagCierre": { "rules": [19], "inclusive": false }, "TagApertura": { "rules": [6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17], "inclusive": false }, "Comentario": { "rules": [1, 2, 3, 4], "inclusive": false }, "INITIAL": { "rules": [0, 5, 11, 18, 20, 21, 22, 23], "inclusive": true } }
        });
        return lexer;
    })();
    parser.lexer = lexer;
    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser;
})();
if (true) {
    exports.parser = xmlA;
    exports.Parser = xmlA.Parser;
    exports.parse = function () { return xmlA.parse.apply(xmlA, arguments); };
    exports.main = function commonjsMain(args) {
        if (!args[1]) {
            console.log('Usage: ' + args[0] + ' FILE');
            process.exit(1);
        }
        var source = __webpack_require__(/*! fs */ 1).readFileSync(__webpack_require__(/*! path */ 2).normalize(args[1]), "utf8");
        return exports.parser.parse(source);
    };
    if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
        exports.main(process.argv.slice(1));
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "YuTi")(module)))

/***/ }),

/***/ "OjI0":
/*!**************************************************!*\
  !*** ./src/Backend/build/Xpath/TipoSeleccion.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TipoSeleccion;
(function (TipoSeleccion) {
    TipoSeleccion["ACCESO_NODO_RAIZ"] = "ACCESO_NODO_RAIZ";
    TipoSeleccion["SELECT_NODOS_FROM_NODO"] = "SELECT_NODOS_FROM_NODO";
    TipoSeleccion["ERROR_SINTACTICO"] = "ERROR_SINTACTICO";
    TipoSeleccion["ERROR_LEXICO"] = "ERROR_LEXICO";
    TipoSeleccion["ERROR_SEMANTICO"] = "ERROR_SEMANTICO";
})(TipoSeleccion = exports.TipoSeleccion || (exports.TipoSeleccion = {}));


/***/ }),

/***/ "OkFX":
/*!****************************************!*\
  !*** ./src/Backend/build/Xml/Tipos.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tipos;
(function (Tipos) {
    Tipos["ETIQUETA_DOBLE"] = "ETIQUETA_DOBLE";
    Tipos["ETIQUETA_SIMPLE"] = "ETIQUETA_SIMPLE";
    Tipos["ETIQUETA_UNICA"] = "ETIQUETA_UNICA";
    Tipos["ATRIBUTO"] = "ATRIBUTO";
    Tipos["VALOR"] = "VALOR";
})(Tipos = exports.Tipos || (exports.Tipos = {}));


/***/ }),

/***/ "R3Hx":
/*!*********************************************!*\
  !*** ./src/Backend/build/Grammar/xpathA.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var xpathA = (function () {
    var o = function (k, v, o, l) { for (o = o || {}, l = k.length; l--; o[k[l]] = v)
        ; return o; }, $V0 = [1, 7], $V1 = [1, 8], $V2 = [1, 9], $V3 = [1, 5], $V4 = [5, 6], $V5 = [2, 5, 6, 10, 11, 12], $V6 = [2, 5, 6, 10, 11, 12, 14, 15, 16, 17], $V7 = [1, 25], $V8 = [1, 26], $V9 = [1, 31], $Va = [1, 30], $Vb = [10, 17, 20, 21, 22], $Vc = [20, 21, 22];
    var parser = { trace: function trace() { },
        yy: {},
        symbols_: { "error": 2, "XPATH": 3, "CONCATENACION_SETS": 4, "EOF": 5, "barraVertical": 6, "LISTA_SETS": 7, "SET": 8, "SELECTOR": 9, "slash": 10, "dobleSlash": 11, "identificador": 12, "PREDICADO": 13, "arroba": 14, "dosPuntos": 15, "punto": 16, "asterisco": 17, "corecheteA": 18, "OPERACION": 19, "corcheteC": 20, "mas": 21, "menos": 22, "entero": 23, "decimal": 24, "$accept": 0, "$end": 1 },
        terminals_: { 2: "error", 5: "EOF", 6: "barraVertical", 10: "slash", 11: "dobleSlash", 12: "identificador", 14: "arroba", 15: "dosPuntos", 16: "punto", 17: "asterisco", 18: "corecheteA", 20: "corcheteC", 21: "mas", 22: "menos", 23: "entero", 24: "decimal" },
        productions_: [0, [3, 2], [4, 3], [4, 1], [7, 2], [7, 1], [9, 1], [9, 1], [8, 1], [8, 2], [8, 3], [8, 3], [8, 2], [8, 2], [8, 3], [8, 2], [8, 2], [13, 3], [19, 3], [19, 3], [19, 3], [19, 3], [19, 1], [19, 1]],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
            /* this == yyval */
            var $0 = $$.length - 1;
            switch (yystate) {
                case 1:
                    return $$[$0 - 1];
                    break;
                case 2:
                    $$[$0 - 2].push($$[$0]);
                    this.$ = $$[$0 - 2];
                    break;
                case 3:
                    this.$ = [$$[$0]];
                    break;
                case 4:
                    aux = $$[$0 - 1];
                    while (aux.next != null) {
                        aux = aux.next;
                    }
                    ;
                    aux.next = $$[$0];
                    this.$ = $$[$0 - 1];
                    break;
                case 5:
                    this.$ = $$[$0];
                    break;
                case 6:
                case 7:
                    this.$ = $$[$0];
                    break;
                case 8:
                    this.$ = { tipo: TipoSeleccion.ACCESO_NODO_RAIZ, id: $$[$0], next: null };
                    break;
                case 9:
                    this.$ = { tipo: TipoSeleccion.SELECT_NODOS_FROM_NODO, selector: $$[$0 - 1], id: $$[$0], predicado: null, next: null };
                    break;
                case 10:
                    this.$ = { tipo: TipoSeleccion.SELECT_NODOS_FROM_NODO, selector: $$[$0 - 2], id: $$[$0 - 1], predicado: $$[$0], next: null };
                    break;
                case 16:
                    this.$ = new ControlError(yytext, TipoSeleccion.ERROR_SINTACTICO, this._$.first_line, this._$.first_column, "XPathAscendente");
                    break;
                case 17:
                    this.$ = $$[$0 - 1];
                    break;
                case 18:
                    this.$ = new OpBinaria($$[$0 - 2], $$[$0], TiposOp.SUMA);
                    break;
                case 19:
                    this.$ = new OpBinaria($$[$0 - 2], $$[$0], TiposOp.RESTA);
                    break;
                case 20:
                    this.$ = new OpBinaria($$[$0 - 2], $$[$0], TiposOp.MULTIPLICACION);
                    break;
                case 21:
                    this.$ = new OpBinaria($$[$0 - 2], $$[$0], TiposOp.DIVISION);
                    break;
                case 22:
                    this.$ = new Primitivo(parseInt($$[$0]), TipoVal.ENTERO);
                    break;
                case 23:
                    this.$ = new Primitivo(parseFloat($$[$0]), TipoVal.DECIMAL);
                    break;
            }
        },
        table: [{ 2: $V0, 3: 1, 4: 2, 7: 3, 8: 4, 9: 6, 10: $V1, 11: $V2, 12: $V3 }, { 1: [3] }, { 5: [1, 10], 6: [1, 11] }, o($V4, [2, 3], { 9: 6, 8: 12, 2: $V0, 10: $V1, 11: $V2, 12: $V3 }), o($V5, [2, 5]), o($V5, [2, 8]), { 12: [1, 13], 14: [1, 14], 15: [1, 15], 16: [1, 16], 17: [1, 17] }, { 9: 18, 10: $V1, 11: $V2 }, o($V6, [2, 6]), o($V6, [2, 7]), { 1: [2, 1] }, { 2: $V0, 7: 19, 8: 4, 9: 6, 10: $V1, 11: $V2, 12: $V3 }, o($V5, [2, 4]), o($V5, [2, 9], { 13: 20, 18: [1, 21] }), { 12: [1, 22], 17: [1, 23] }, o($V5, [2, 12]), o($V5, [2, 13]), o($V5, [2, 15]), o($V5, [2, 16]), o($V4, [2, 2], { 9: 6, 8: 12, 2: $V0, 10: $V1, 11: $V2, 12: $V3 }), o($V5, [2, 10]), { 19: 24, 23: $V7, 24: $V8 }, o($V5, [2, 11]), o($V5, [2, 14]), { 10: $V9, 17: $Va, 20: [1, 27], 21: [1, 28], 22: [1, 29] }, o($Vb, [2, 22]), o($Vb, [2, 23]), o($V5, [2, 17]), { 19: 32, 23: $V7, 24: $V8 }, { 19: 33, 23: $V7, 24: $V8 }, { 19: 34, 23: $V7, 24: $V8 }, { 19: 35, 23: $V7, 24: $V8 }, o($Vc, [2, 18], { 10: $V9, 17: $Va }), o($Vc, [2, 19], { 10: $V9, 17: $Va }), o($Vb, [2, 20]), o($Vb, [2, 21])],
        defaultActions: { 10: [2, 1] },
        parseError: function parseError(str, hash) {
            if (hash.recoverable) {
                this.trace(str);
            }
            else {
                var error = new Error(str);
                error.hash = hash;
                throw error;
            }
        },
        parse: function parse(input) {
            var self = this, stack = [0], tstack = [], // token stack
            vstack = [null], // semantic value stack
            lstack = [], // location stack
            table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            var args = lstack.slice.call(arguments, 1);
            //this.reductionCount = this.shiftCount = 0;
            var lexer = Object.create(this.lexer);
            var sharedState = { yy: {} };
            // copy state
            for (var k in this.yy) {
                if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
                    sharedState.yy[k] = this.yy[k];
                }
            }
            lexer.setInput(input, sharedState.yy);
            sharedState.yy.lexer = lexer;
            sharedState.yy.parser = this;
            if (typeof lexer.yylloc == 'undefined') {
                lexer.yylloc = {};
            }
            var yyloc = lexer.yylloc;
            lstack.push(yyloc);
            var ranges = lexer.options && lexer.options.ranges;
            if (typeof sharedState.yy.parseError === 'function') {
                this.parseError = sharedState.yy.parseError;
            }
            else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
            _token_stack: var lex = function () {
                var token;
                token = lexer.lex() || EOF;
                // if token isn't its numeric value, convert
                if (typeof token !== 'number') {
                    token = self.symbols_[token] || token;
                }
                return token;
            };
            var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
            while (true) {
                // retreive state number from top of stack
                state = stack[stack.length - 1];
                // use default actions if available
                if (this.defaultActions[state]) {
                    action = this.defaultActions[state];
                }
                else {
                    if (symbol === null || typeof symbol == 'undefined') {
                        symbol = lex();
                    }
                    // read action for current state and first input
                    action = table[state] && table[state][symbol];
                }
                _handle_error: 
                // handle parse error
                if (typeof action === 'undefined' || !action.length || !action[0]) {
                    var error_rule_depth;
                    var errStr = '';
                    // Return the rule stack depth where the nearest error rule can be found.
                    // Return FALSE when no error recovery rule was found.
                    function locateNearestErrorRecoveryRule(state) {
                        var stack_probe = stack.length - 1;
                        var depth = 0;
                        // try to recover from error
                        for (;;) {
                            // check for error recovery rule in this state
                            if ((TERROR.toString()) in table[state]) {
                                return depth;
                            }
                            if (state === 0 || stack_probe < 2) {
                                return false; // No suitable error recovery rule available.
                            }
                            stack_probe -= 2; // popStack(1): [symbol, action]
                            state = stack[stack_probe];
                            ++depth;
                        }
                    }
                    if (!recovering) {
                        // first see if there's any chance at hitting an error recovery rule:
                        error_rule_depth = locateNearestErrorRecoveryRule(state);
                        // Report error
                        expected = [];
                        for (p in table[state]) {
                            if (this.terminals_[p] && p > TERROR) {
                                expected.push("'" + this.terminals_[p] + "'");
                            }
                        }
                        if (lexer.showPosition) {
                            errStr = 'Parse error on line ' + (yylineno + 1) + ":\n" + lexer.showPosition() + "\nExpecting " + expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                        }
                        else {
                            errStr = 'Parse error on line ' + (yylineno + 1) + ": Unexpected " +
                                (symbol == EOF ? "end of input" :
                                    ("'" + (this.terminals_[symbol] || symbol) + "'"));
                        }
                        this.parseError(errStr, {
                            text: lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: lexer.yylineno,
                            loc: yyloc,
                            expected: expected,
                            recoverable: (error_rule_depth !== false)
                        });
                    }
                    else if (preErrorSymbol !== EOF) {
                        error_rule_depth = locateNearestErrorRecoveryRule(state);
                    }
                    // just recovered from another error
                    if (recovering == 3) {
                        if (symbol === EOF || preErrorSymbol === EOF) {
                            throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                        }
                        // discard current lookahead and grab another
                        yyleng = lexer.yyleng;
                        yytext = lexer.yytext;
                        yylineno = lexer.yylineno;
                        yyloc = lexer.yylloc;
                        symbol = lex();
                    }
                    // try to recover from error
                    if (error_rule_depth === false) {
                        throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
                    }
                    popStack(error_rule_depth);
                    preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
                    symbol = TERROR; // insert generic error symbol as new lookahead
                    state = stack[stack.length - 1];
                    action = table[state] && table[state][TERROR];
                    recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
                }
                // this shouldn't happen, unless resolve defaults are off
                if (action[0] instanceof Array && action.length > 1) {
                    throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
                }
                switch (action[0]) {
                    case 1: // shift
                        //this.shiftCount++;
                        stack.push(symbol);
                        vstack.push(lexer.yytext);
                        lstack.push(lexer.yylloc);
                        stack.push(action[1]); // push state
                        symbol = null;
                        if (!preErrorSymbol) { // normal execution/no error
                            yyleng = lexer.yyleng;
                            yytext = lexer.yytext;
                            yylineno = lexer.yylineno;
                            yyloc = lexer.yylloc;
                            if (recovering > 0) {
                                recovering--;
                            }
                        }
                        else {
                            // error just occurred, resume old lookahead f/ before error
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        // reduce
                        //this.reductionCount++;
                        len = this.productions_[action[1]][1];
                        // perform semantic action
                        yyval.$ = vstack[vstack.length - len]; // default to $$ = $1
                        // default location, uses first token for firsts, last for lasts
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) {
                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                        }
                        r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
                        if (typeof r !== 'undefined') {
                            return r;
                        }
                        // pop off stack
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]); // push nonterminal (reduce)
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        // goto new state = table[STATE][NONTERMINAL]
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        // accept
                        return true;
                }
            }
            return true;
        } };
    const { TipoSeleccion } = __webpack_require__(/*! ../Xpath/TipoSeleccion */ "OjI0");
    const { OpBinaria } = __webpack_require__(/*! ../Xpath/OpBinaria */ "FUIu");
    const { TiposOp } = __webpack_require__(/*! ../Xpath/TiposOp */ "YTrP");
    const { Primitivo } = __webpack_require__(/*! ../Xpath/Primitivo */ "NhD4");
    const { TipoVal } = __webpack_require__(/*! ../Xpath/TipoVal */ "eU3H");
    const { ControlError } = __webpack_require__(/*! ../Xpath/ControlError */ "2orD");
    listaError = [];
    /* generated by jison-lex 0.3.4 */
    var lexer = (function () {
        var lexer = ({
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(str, hash);
                }
                else {
                    throw new Error(str);
                }
            },
            // resets the lexer, sets new input
            setInput: function (input, yy) {
                this.yy = yy || this.yy || {};
                this._input = input;
                this._more = this._backtrack = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = '';
                this.conditionStack = ['INITIAL'];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) {
                    this.yylloc.range = [0, 0];
                }
                this.offset = 0;
                return this;
            },
            // consumes and returns one char from the input
            input: function () {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                }
                else {
                    this.yylloc.last_column++;
                }
                if (this.options.ranges) {
                    this.yylloc.range[1]++;
                }
                this._input = this._input.slice(1);
                return ch;
            },
            // unshifts one char (or a string) into the input
            unput: function (ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) {
                    this.yylineno -= lines.length - 1;
                }
                var r = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ?
                        (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                            + oldLines[oldLines.length - lines.length].length - lines[0].length :
                        this.yylloc.first_column - len
                };
                if (this.options.ranges) {
                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                }
                this.yyleng = this.yytext.length;
                return this;
            },
            // When called from action, caches matched text and appends it on next action
            more: function () {
                this._more = true;
                return this;
            },
            // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
            reject: function () {
                if (this.options.backtrack_lexer) {
                    this._backtrack = true;
                }
                else {
                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
                return this;
            },
            // retain first n characters of the match
            less: function (n) {
                this.unput(this.match.slice(n));
            },
            // displays already matched input, i.e. for error messages
            pastInput: function () {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
            },
            // displays upcoming input, i.e. for error messages
            upcomingInput: function () {
                var next = this.match;
                if (next.length < 20) {
                    next += this._input.substr(0, 20 - next.length);
                }
                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
            },
            // displays the character position where the lexing error occurred, i.e. for error messages
            showPosition: function () {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            // test the lexed token: return FALSE when not a match, otherwise return token
            test_match: function (match, indexed_rule) {
                var token, lines, backup;
                if (this.options.backtrack_lexer) {
                    // save context
                    backup = {
                        yylineno: this.yylineno,
                        yylloc: {
                            first_line: this.yylloc.first_line,
                            last_line: this.last_line,
                            first_column: this.yylloc.first_column,
                            last_column: this.yylloc.last_column
                        },
                        yytext: this.yytext,
                        match: this.match,
                        matches: this.matches,
                        matched: this.matched,
                        yyleng: this.yyleng,
                        offset: this.offset,
                        _more: this._more,
                        _input: this._input,
                        yy: this.yy,
                        conditionStack: this.conditionStack.slice(0),
                        done: this.done
                    };
                    if (this.options.ranges) {
                        backup.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                lines = match[0].match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno += lines.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines ?
                        lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                        this.yylloc.last_column + match[0].length
                };
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [this.offset, this.offset += this.yyleng];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (token) {
                    return token;
                }
                else if (this._backtrack) {
                    // recover context
                    for (var k in backup) {
                        this[k] = backup[k];
                    }
                    return false; // rule action called reject() implying the next rule should be tested instead.
                }
                return false;
            },
            // return next match in input
            next: function () {
                if (this.done) {
                    return this.EOF;
                }
                if (!this._input) {
                    this.done = true;
                }
                var token, match, tempMatch, index;
                if (!this._more) {
                    this.yytext = '';
                    this.match = '';
                }
                var rules = this._currentRules();
                for (var i = 0; i < rules.length; i++) {
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (this.options.backtrack_lexer) {
                            token = this.test_match(tempMatch, rules[i]);
                            if (token !== false) {
                                return token;
                            }
                            else if (this._backtrack) {
                                match = false;
                                continue; // rule action called reject() implying a rule MISmatch.
                            }
                            else {
                                // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                                return false;
                            }
                        }
                        else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (match) {
                    token = this.test_match(match, rules[index]);
                    if (token !== false) {
                        return token;
                    }
                    // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                    return false;
                }
                if (this._input === "") {
                    return this.EOF;
                }
                else {
                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
            },
            // return next match that has a token
            lex: function lex() {
                var r = this.next();
                if (r) {
                    return r;
                }
                else {
                    return this.lex();
                }
            },
            // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            // pop the previously active lexer condition state off the condition stack
            popState: function popState() {
                var n = this.conditionStack.length - 1;
                if (n > 0) {
                    return this.conditionStack.pop();
                }
                else {
                    return this.conditionStack[0];
                }
            },
            // produce the lexer rule set which is active for the currently active lexer condition state
            _currentRules: function _currentRules() {
                if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                }
                else {
                    return this.conditions["INITIAL"].rules;
                }
            },
            // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
            topState: function topState(n) {
                n = this.conditionStack.length - 1 - Math.abs(n || 0);
                if (n >= 0) {
                    return this.conditionStack[n];
                }
                else {
                    return "INITIAL";
                }
            },
            // alias for begin(condition)
            pushState: function pushState(condition) {
                this.begin(condition);
            },
            // return the number of states currently on the stack
            stateStackSize: function stateStackSize() {
                return this.conditionStack.length;
            },
            options: { "case-insensitive": true },
            performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
                var YYSTATE = YY_START;
                switch ($avoiding_name_collisions) {
                    case 0:
                        break;
                    case 1:
                        return 'menor';
                        break;
                    case 2:
                        return 'mayor';
                        break;
                    case 3:
                        return 11;
                        break;
                    case 4:
                        return 10;
                        break;
                    case 5:
                        return 'igual';
                        break;
                    case 6:
                        return 6;
                        break;
                    case 7:
                        return 21;
                        break;
                    case 8:
                        return 22;
                        break;
                    case 9:
                        return 17;
                        break;
                    case 10:
                        return 'div';
                        break;
                    case 11:
                        return 'noIgual';
                        break;
                    case 12:
                        return 'mayorQue';
                        break;
                    case 13:
                        return 'menorQue';
                        break;
                    case 14:
                        return 'and';
                        break;
                    case 15:
                        return 'or';
                        break;
                    case 16:
                        return '@';
                        break;
                    case 17:
                        return 16;
                        break;
                    case 18:
                        return 15;
                        break;
                    case 19:
                        return 'dobleDosPuntos';
                        break;
                    case 20:
                        return 18;
                        break;
                    case 21:
                        return 20;
                        break;
                    case 22:
                        return 'parentesisA';
                        break;
                    case 23:
                        return 'parentesisC';
                        break;
                    case 24:
                        return 'ancestor';
                        break;
                    case 25:
                        return 'ancestor-or-self';
                        break;
                    case 26:
                        return 'attribute';
                        break;
                    case 27:
                        return 'child';
                        break;
                    case 28:
                        return 'descendant';
                        break;
                    case 29:
                        return 'descendant-or-self';
                        break;
                    case 30:
                        return 'following';
                        break;
                    case 31:
                        return 'following-sibling';
                        break;
                    case 32:
                        return "namespace";
                        break;
                    case 33:
                        return 'parent';
                        break;
                    case 34:
                        return 'preceding';
                        break;
                    case 35:
                        return 'preceding-sibling';
                        break;
                    case 36:
                        return 'self';
                        break;
                    case 37:
                        return 'NODO';
                        break;
                    case 38:
                        return 'LANG';
                        break;
                    case 39:
                        return 'POSICION';
                        break;
                    case 40:
                        return 'ULTIMO';
                        break;
                    case 41:
                        return 'TEXTO';
                        break;
                    case 42:
                        return 'CADENA';
                        break;
                    case 43:
                        return 24;
                        break;
                    case 44:
                        return 23;
                        break;
                    case 45:
                        return 12;
                        break;
                    case 46:
                        return 5;
                        break;
                    case 47:
                        new ControlError(yy_.yytext, TipoSeleccion.ERROR_LEXICO, yy_.yylloc.first_line, yy_.yylloc.first_column, "XpathAscendente");
                        break;
                }
            },
            rules: [/^(?:[\s]+)/i, /^(?:<)/i, /^(?:>)/i, /^(?:\/\/)/i, /^(?:\/)/i, /^(?:=)/i, /^(?:\|)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:\*)/i, /^(?:div\b)/i, /^(?:!=)/i, /^(?:>=)/i, /^(?:<=)/i, /^(?:and\b)/i, /^(?:or\b)/i, /^(?:@)/i, /^(?:\.)/i, /^(?:\.\.)/i, /^(?:::)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:\()/i, /^(?:\))/i, /^(?:ancestor\b)/i, /^(?:ancestor-or-self\b)/i, /^(?:attribute\b)/i, /^(?:child\b)/i, /^(?:descendant\b)/i, /^(?:descendant-or-self\b)/i, /^(?:following\b)/i, /^(?:following-sibling\b)/i, /^(?:namespace\b)/i, /^(?:parent\b)/i, /^(?:preceding\b)/i, /^(?:preceding-sibling\b)/i, /^(?:self\b)/i, /^(?:node\b)/i, /^(?:lang\b)/i, /^(?:position\b)/i, /^(?:last\b)/i, /^(?:text\b)/i, /^(?:'[^\']*')/i, /^(?:[0-9]+(\.[0-9]+)\b)/i, /^(?:[0-9]+\b)/i, /^(?:[a-zA-Z_][a-zA-Z0-9_]*)/i, /^(?:$)/i, /^(?:.)/i],
            conditions: { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47], "inclusive": true } }
        });
        return lexer;
    })();
    parser.lexer = lexer;
    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser;
})();
if (true) {
    exports.parser = xpathA;
    exports.Parser = xpathA.Parser;
    exports.parse = function () { return xpathA.parse.apply(xpathA, arguments); };
    exports.main = function commonjsMain(args) {
        if (!args[1]) {
            console.log('Usage: ' + args[0] + ' FILE');
            process.exit(1);
        }
        var source = __webpack_require__(/*! fs */ 1).readFileSync(__webpack_require__(/*! path */ 2).normalize(args[1]), "utf8");
        return exports.parser.parse(source);
    };
    if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
        exports.main(process.argv.slice(1));
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "YuTi")(module)))

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "XPWx":
/*!*************************************************!*\
  !*** ./src/Backend/build/Xml/EtiquetaSimple.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Fila_1 = __webpack_require__(/*! ./Fila */ "jn+f");
const Tipos_1 = __webpack_require__(/*! ./Tipos */ "OkFX");
const Tabla_1 = __webpack_require__(/*! ./Tabla */ "Jixd");
const Graficas_1 = __webpack_require__(/*! ../Graficas/Graficas */ "nnRf");
class EtiquetaSimple {
    constructor(nombreTag, listaAtributos, linea, columna, idSent) {
        this.nombreTag = nombreTag;
        this.padre = null;
        this.listaAtributos = listaAtributos;
        this.linea = linea;
        this.columna = columna;
        this.idSent = idSent;
        this.listaAtributos.forEach(atributo => {
            atributo.etiquetaContendora = this;
        });
    }
    getName() {
        return this.nombreTag;
    }
    getAmbito() {
        let listaAmbito = [];
        for (let etiqueta = this.padre; etiqueta != null; etiqueta = etiqueta.padre) {
            listaAmbito.push(etiqueta.getName());
        }
        listaAmbito.push("GLOBAL");
        return listaAmbito;
    }
    imprimir() {
        let texto = "";
        texto += "<" + this.nombreTag;
        this.listaAtributos.forEach(atributo => {
            texto += " " + atributo.imprimir();
        });
        texto += "/> \n";
        return texto;
    }
    getAsTable() {
        let tabla = new Tabla_1.Tabla();
        tabla.addFila(new Fila_1.Fila(this.getName(), Tipos_1.Tipos.ETIQUETA_SIMPLE, this.getAmbito(), this.linea, this.columna, this.imprimir()));
        this.listaAtributos.forEach(atributo => {
            tabla.addFila(atributo.getAsRowTable());
        });
        return tabla;
    }
    getErroresSemanticos() {
        let texto = "";
        this.listaAtributos.forEach(atributo => {
            let apariciones = 0;
            for (let atr2 of this.listaAtributos) {
                if (atributo.nombre == atr2.nombre) {
                    apariciones += 1;
                }
                if (apariciones > 1) {
                    texto += `Error(Linea: ${atributo.linea}, Columna: ${atributo.columna}): El atributo '${atributo.nombre}' se encuentra repetido.\n`;
                    break;
                }
            }
        });
        return texto;
    }
    getCstDotA(idPadre) {
        let texto = "";
        texto += Graficas_1.Graficas.getElement(this.idSent, "TAG_UNICO", idPadre);
        texto += Graficas_1.Graficas.getElement(this.idSent + 1, "AbreTagCierre", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 2, "<" + this.nombreTag, this.idSent + 1);
        if (this.listaAtributos.length > 0) {
            let cont = 3;
            for (let atributo of this.listaAtributos) {
                if (cont - 3 != this.listaAtributos.length - 1) {
                    texto += Graficas_1.Graficas.getElement(this.idSent + cont, "LISTA_ATRIBUTOS", this.idSent + cont + 1);
                    texto += atributo.getCstDotA(this.idSent + cont);
                }
                else {
                    texto += Graficas_1.Graficas.getElement(this.idSent + cont, "LISTA_ATRIBUTOS", this.idSent);
                    texto += atributo.getCstDotA(this.idSent + cont);
                }
                cont += 1;
            }
        }
        texto += Graficas_1.Graficas.getElement(this.idSent + 3 + this.listaAtributos.length, "CierreTagCierre", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 4 + this.listaAtributos.length, "\\>", this.idSent + 3 + this.listaAtributos.length);
        return texto;
    }
    getCstDotD(idPadre) {
        let texto = "";
        texto += Graficas_1.Graficas.getElement(this.idSent, "TAG_UNICO", idPadre);
        texto += Graficas_1.Graficas.getElement(this.idSent + 1, "AbreTagCierre", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 2, "<" + this.nombreTag, this.idSent + 1);
        if (this.listaAtributos.length > 0) {
            let cont = 3;
            for (let atributo of this.listaAtributos) {
                let cont = 3;
                for (let atributo of this.listaAtributos) {
                    if (cont === 3) {
                        texto += Graficas_1.Graficas.getElement(this.idSent + cont, "LISTA_ATRIBUTOS", this.idSent + 1);
                        texto += atributo.getCstDotA(this.idSent + cont);
                    }
                    else {
                        texto += Graficas_1.Graficas.getElement(this.idSent + cont, "LISTA_ATRIBUTOS", this.idSent + cont - 1);
                        texto += atributo.getCstDotA(this.idSent + cont);
                    }
                    cont += 1;
                }
            }
        }
        texto += Graficas_1.Graficas.getElement(this.idSent + 3 + this.listaAtributos.length, "CierreTagCierre", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 4 + this.listaAtributos.length, "\\>", this.idSent + 3 + this.listaAtributos.length);
        return texto;
    }
}
exports.EtiquetaSimple = EtiquetaSimple;


/***/ }),

/***/ "YJIf":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vis */ "TycK");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! buffer/ */ "tjlA");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buffer___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @materia-ui/ngx-monaco-editor */ "0LvA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_compilador_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/compilador.service */ "+HJF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");



//importamos para el editor








function EditorComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditorComponent_div_29_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.indiceEditorActual = i_r4; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditorComponent_div_29_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.imprimir(); })("click", function EditorComponent_div_29_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.eliminarEditor(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("TAB_", i_r4, "");
} }
function EditorComponent_div_56_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fila_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fila_r12.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fila_r12.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("-", fila_r12.listaAmbito.join("-"), "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fila_r12.columna);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fila_r12.fila);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("--", fila_r12.valor, "--");
} }
function EditorComponent_div_56_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fila_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fila_r13.produccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fila_r13.regla_semantica);
} }
function EditorComponent_div_56_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fila_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fila_r14.simbolo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fila_r14.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fila_r14.linea);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fila_r14.columna);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fila_r14.entorno);
} }
function EditorComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Tabla de S\u00EDmbolos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "table", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "NOMBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "TIPO_SIMBOLO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "AMBITO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "COLUMNA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "FILA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "VALOR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, EditorComponent_div_56_tr_28_Template, 13, 6, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ul", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "ReporteGramaticaL");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "table", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "PRODUCCION");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "regla_semantica");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, EditorComponent_div_56_tr_42_Template, 5, 2, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ul", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "ERRORES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "table", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "SIMBOLO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "TIPO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Linea");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Columna");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Entorno");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, EditorComponent_div_56_tr_63_Template, 11, 5, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "table", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "hola");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "mundo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.tablaSimbolos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ReporteGramatica);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.Error);
} }
function EditorComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " alv ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.astBase64, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
class EditorComponent {
    constructor(sanitizer, monacoLoaderService, compiladorService) {
        this.sanitizer = sanitizer;
        this.monacoLoaderService = monacoLoaderService;
        this.compiladorService = compiladorService;
        this.nombreArchivo = "Choose file";
        this.reporteSelccionado = "";
        this.textoEditores = [""];
        this.XPATH = [""];
        this.indiceEditorActual = 0;
        this.console = "";
        this.xpath = "";
        this.monacoComponent = new _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorComponent"](this.monacoLoaderService);
        this.editorOptions = {
            theme: 'myCustomTheme',
            language: '',
            roundedSelection: true,
            autoIndent: "full"
        };
        this.consoleOptions = {
            theme: 'myCustomTheme',
            language: 'XML',
            roundedSelection: true,
            autoIndent: "full",
            readOnly: true
        };
        this.XpathOptions = {
            theme: 'myCustomTheme',
            language: '',
            roundedSelection: true,
            autoIndent: "full",
            readOnly: true
        };
        this.monacoLoaderService.isMonacoLoaded$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(isLoaded => isLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(() => {
            monaco.editor.defineTheme('myCustomTheme', {
                base: 'vs-dark',
                inherit: true,
                rules: [
                    {
                        token: 'comment',
                        foreground: 'ffa500',
                        fontStyle: 'italic underline'
                    },
                    { token: 'comment.js', foreground: '008800', fontStyle: 'bold' },
                    { token: 'comment.css', foreground: '0000ff' } // will inherit fontStyle from `comment` above
                ],
                colors: {}
            });
        });
    }
    editorInit(editor) {
        editor.setSelection({
            startLineNumber: 1,
            startColumn: 1,
            endColumn: 500,
            endLineNumber: 3
        });
    }
    ngOnInit() {
    }
    compilar() {
        this.console = "";
        console.log(this.XPATH[this.indiceEditorActual]);
        this.xpath = "";
        this.astJson = [];
        this.tablaSimbolos = this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).simbolo;
        // this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual])
        // viz("string en dot")
        // format: 'png-image-element'
        /*   this.console = res.consola
          this.astJson = res.arbol
          this.tablaSimbolos = res.tablaSimbolos
          this.astBase64 = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image;base64, ${res.astBase64}`)
        */
        this.ReporteGramatica = this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).ReporteGramatica;
        console.log("Encoding:::::::::::::::::::" + this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).Encoding);
        let ascii = "\"ASCII\"";
        if (this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).Encoding == ascii) {
            var buf = new buffer___WEBPACK_IMPORTED_MODULE_2__["Buffer"](this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).consulta);
            this.console = buf.toString("ascii");
            console.log("adentro del ascii");
        }
        else if (this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).Encoding === "ISO-8859-1") {
            var buf = new buffer___WEBPACK_IMPORTED_MODULE_2__["Buffer"](this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).consulta);
            this.console = buf.toString("utf8");
        } //
        else if (this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).Encoding === "\"UFT-8\" ") {
            var buf = new buffer___WEBPACK_IMPORTED_MODULE_2__["Buffer"](this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).consulta);
            this.console = buf.toString("utf8");
        }
        else {
            //  this.console=buf.toString("utf8")
            //console.log("adentro del utf 8") 
            //  console.log("adentro del utf 8") 
            // this.console.l
            let aux = "  <TITLE>&apos;Esto tiene que salir muy bien tambien&apos;</TITLE>";
            //  console.log("--*9-*-"+this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual],this.XPATH[this.indiceEditorActual]).consulta)
            var incov = __webpack_require__(/*! iconv-lite */ "rPnE");
            this.console = incov.decode(aux, "utf-8");
            console.log(this.console);
        }
        this.Error = (this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).Error);
        this.prueba(this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).cst);
    }
    compilarD() {
        this.console = "";
        console.log(this.XPATH[this.indiceEditorActual]);
        this.xpath = "";
        this.astJson = [];
        this.tablaSimbolos = this.compiladorService.analizarD(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).simbolo;
        // this.compiladorService.analizar(this.textoEditores[this.indiceEditorActual])
        // viz("string en dot")
        // format: 'png-image-element'
        /*   this.console = res.consola
          this.astJson = res.arbol
          this.tablaSimbolos = res.tablaSimbolos
          this.astBase64 = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image;base64, ${res.astBase64}`)
        */
        this.ReporteGramatica = this.compiladorService.analizarD(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).ReporteGramatica;
        this.console = (this.compiladorService.analizarD(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).consulta);
        this.Error = (this.compiladorService.analizarD(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).Error);
        this.prueba(this.compiladorService.analizarD(this.textoEditores[this.indiceEditorActual], this.XPATH[this.indiceEditorActual]).cst);
    }
    seleccionarArchivo(event) {
        this.nombreArchivo = event.target.files[0].name;
        this.archivo = event.target.files[0];
    }
    prueba(grafo) {
        //   console.log("grafo0000000"+grafo)
        const container = document.getElementById("app");
        // provide data in the DOT language
        var DOTstring = grafo;
        var parsedData = vis__WEBPACK_IMPORTED_MODULE_1__["network"].convertDot(DOTstring);
        var options = parsedData.options;
        options["physics"] = {
            enabled: false
        };
        options["layout"] = {
            improvedLayout: true,
            hierarchical: {
                enabled: true,
                levelSeparation: 150,
                treeSpacing: 35,
                blockShifting: true,
                edgeMinimization: true,
                parentCentralization: true,
                direction: "UD",
                sortMethod: "directed"
            },
            font: {
                size: 15,
                color: 'gray'
            },
            borderWidth: 2
        };
        var network = new vis__WEBPACK_IMPORTED_MODULE_1__["Network"](container, parsedData, options);
        network.on("stabilizationIterationsDone", function () {
            network.setOptions({ physics: false });
        });
    }
    cargarArchivo() {
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = reader.result.toString().trim();
            this.textoEditores[this.indiceEditorActual] = text;
        };
        reader.readAsText(this.archivo);
    }
    agregarTab() {
        this.textoEditores.push("");
        this.indiceEditorActual = this.textoEditores.length - 1;
    }
    eliminarEditor(i) {
        if (i != 0) {
            this.textoEditores.splice(i, 1);
            this.indiceEditorActual = 0;
        }
        else {
            this.textoEditores[0] = "";
        }
    }
    guardar() {
        var file = new File([this.textoEditores[this.indiceEditorActual]], "Codigo.ty", {
            type: "text/plain",
        });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(file);
    }
    selectReporte(opcion) {
        this.reporteSelccionado = opcion;
    }
    imprimir() {
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_compilador_service__WEBPACK_IMPORTED_MODULE_7__["CompiladorService"])); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], viewQuery: function EditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.monacoComponent = _t.first);
    } }, decls: 73, vars: 11, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarColor01", "aria-controls", "navbarColor01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarColor01", 1, "navbar"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["type", "button", 1, "btn", "btn-primary", "principal", 3, "click"], [1, "nav-item"], [1, "btn", "btn-primary", "opcion", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "opcion", 3, "click"], [1, "card-body"], [1, "monacoCointeiner", 2, "width", "850px", "height", "400px", "margin", "auto"], [1, "card", "text-white", "tarjeta"], ["aria-readonly", "true", 3, "options", "ngModel", "ngModelChange", "init"], [1, "container-fluid"], [1, "row", "justify-content-center", "contenedor"], [1, "col-md-12"], [1, "row"], [1, "col-md-6"], [1, "card-header"], [1, "lab"], ["type", "button", "class", "btn btn-primary tab verde", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "mas", "verde", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-primary", "op", "mas", "verde", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "op", "mas", "verde", 3, "click"], [1, "monacoCointeiner", 2, "width", "auto", "height", "450px"], [3, "options", "ngModel", "ngModelChange", "init"], ["type", "button", 1, "btn", "btn-primary", "mas", "op", "verde", 3, "click"], [1, "monacoCointeiner", 2, "width", "auto", "height", "458px"], ["id", "app", 2, "width", "auto", "height", "1000px"], [1, "zoom", 3, "src"], [4, "ngIf"], ["id", "app", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "input-group"], [1, "custom-file"], ["type", "file", "id", "inputGroupFile01", "aria-describedby", "inputGroupFileAddon01", 1, "custom-file-input", 3, "change"], ["for", "inputGroupFile01", "id", "choosedFile", "accept", ".xml", 1, "custom-file-label"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "tab", "verde", 3, "click"], [1, "equis"], ["type", "button", 1, "btn", "btn-primary", "equisa", "verde", 3, "click"], [1, "row", "justify-content-center", "tabla"], [1, "col-md-8", "tab"], [1, "nav", "nav-tabs", "justify-content-center"], ["data-toggle", "tab", "href", "#simbolos", 1, "nav-link", "active"], ["id", "myTabContent", 1, "tab-content"], ["id", "simbolos", 1, "tab-pane", "fade", "in", "active", "show"], [2, "width", "auto", "height", "auto"], [1, "table", "table-hover", "table-hover"], [4, "ngFor", "ngForOf"], ["id", "errores", 1, "tab-pane", "fade"], [1, "table", "table-danger", "table-hover"], ["id", "app"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_6_listener() { return ctx.selectReporte("editor"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Compilador");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_9_listener() { return ctx.selectReporte("arbolAst"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Arbol AST");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_12_listener() { return ctx.selectReporte("tablaSimbolos"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "REPORTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " XPATH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ngx-monaco-editor", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditorComponent_Template_ngx_monaco_editor_ngModelChange_18_listener($event) { return (ctx.XPATH[ctx.indiceEditorActual] = $event); })("init", function EditorComponent_Template_ngx_monaco_editor_init_18_listener($event) { return ctx.editorInit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, EditorComponent_div_29_Template, 5, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_30_listener() { return ctx.agregarTab(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_32_listener() { return ctx.imprimir(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Cargar Archivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_34_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "ngx-monaco-editor", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditorComponent_Template_ngx_monaco_editor_ngModelChange_38_listener($event) { return (ctx.textoEditores[ctx.indiceEditorActual] = $event); })("init", function EditorComponent_Template_ngx_monaco_editor_init_38_listener($event) { return ctx.editorInit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, " Consola ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_44_listener() { return ctx.compilar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Compilador Ascendente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_46_listener() { return ctx.console = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Limpiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_48_listener() { return ctx.compilarD(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Compilador Descendente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "ngx-monaco-editor", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditorComponent_Template_ngx_monaco_editor_ngModelChange_52_listener($event) { return ctx.console = $event; })("init", function EditorComponent_Template_ngx_monaco_editor_init_52_listener($event) { return ctx.editorInit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, EditorComponent_div_56_Template, 82, 3, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, EditorComponent_div_57_Template, 3, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Cargar archivo de entrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EditorComponent_Template_input_change_67_listener($event) { return ctx.seleccionarArchivo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_71_listener() { return ctx.cargarArchivo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Continuar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.editorOptions)("ngModel", ctx.XPATH[ctx.indiceEditorActual]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.textoEditores);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.editorOptions)("ngModel", ctx.textoEditores[ctx.indiceEditorActual]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.consoleOptions)("ngModel", ctx.console);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.astBase64, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reporteSelccionado === "tablaSimbolos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reporteSelccionado === "arbolAst");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.nombreArchivo);
    } }, directives: [_materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["ngx-monaco-editor[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    width: 100%;\r\n    padding: 15px;\r\n}\r\n\r\n.principal[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n}\r\n\r\n.contenedor[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.op[_ngcontent-%COMP%] {\r\n    margin-right: 2.4px;\r\n}\r\n\r\n.mas[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    margin-right: 5px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n}\r\n\r\n.equis[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n}\r\n\r\n.equisa[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-top: -6px;\r\n}\r\n\r\n.tarjeta[_ngcontent-%COMP%] {\r\n    border-radius: 10px;\r\n}\r\n\r\n.monacoCointeiner[_ngcontent-%COMP%] {\r\n    margin-top: -40px;\r\n}\r\n\r\n.opcion[_ngcontent-%COMP%] {\r\n    background-color: #1E1E1E;\r\n}\r\n\r\n.verde[_ngcontent-%COMP%] {\r\n    background-color: #5db163;\r\n    border-color: #5db163;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:focus{\r\n    text-decoration: none;\r\n    outline: none;\r\n    background: #363636;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:hover, .equisa[_ngcontent-%COMP%]:hover{\r\n    text-decoration: none;\r\n    outline: none;\r\n    background: #363636;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmd4LW1vbmFjby1lZGl0b3Ige1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnByaW5jaXBhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLm9wIHtcclxuICAgIG1hcmdpbi1yaWdodDogMi40cHg7XHJcbn1cclxuXHJcbi5tYXMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGFiIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmVxdWlzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uZXF1aXNhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbn1cclxuXHJcbi50YXJqZXRhIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5tb25hY29Db2ludGVpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG59XHJcblxyXG4ub3BjaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTFFMUU7XHJcbn1cclxuXHJcbi52ZXJkZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMTYzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWRiMTYzO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIsXHJcbmJ1dHRvbjpmb2N1c3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzYzNjM2O1xyXG59XHJcblxyXG4udGFiOmhvdmVyLFxyXG4uZXF1aXNhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICMzNjM2MzY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "YTrP":
/*!********************************************!*\
  !*** ./src/Backend/build/Xpath/TiposOp.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TiposOp;
(function (TiposOp) {
    TiposOp["SUMA"] = "SUMA";
    TiposOp["RESTA"] = "RESTA";
    TiposOp["MULTIPLICACION"] = "MULTIPLICACION";
    TiposOp["DIVISION"] = "DIVISION";
    TiposOp["MODULO"] = "MODULO";
    TiposOp["AND"] = "AND";
    TiposOp["OR"] = "OR";
    TiposOp["ASIGNACION"] = "ASIGNACION";
    TiposOp["NO_IGUAL"] = "NO_IGUAL";
    TiposOp["MAYOR_QUE"] = "MAYOR_QUE";
    TiposOp["MENOR_QUE"] = "MENOR_QUE";
    TiposOp["MAYOR_IGUAL"] = "MAYOR_IGUAL";
    TiposOp["MENOR_IGUAL"] = "MENOR_IGUAL";
})(TiposOp = exports.TiposOp || (exports.TiposOp = {}));


/***/ }),

/***/ "Z7y+":
/*!*********************************************!*\
  !*** ./src/Backend/build/Grammar/xpathD.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var xpathD = (function () {
    var o = function (k, v, o, l) { for (o = o || {}, l = k.length; l--; o[k[l]] = v)
        ; return o; }, $V0 = [1, 5], $V1 = [1, 8], $V2 = [1, 9], $V3 = [1, 6], $V4 = [2, 4], $V5 = [1, 12], $V6 = [5, 8], $V7 = [2, 5, 8, 11, 12, 13], $V8 = [13, 16, 19, 20, 21];
    var parser = { trace: function trace() { },
        yy: {},
        symbols_: { "error": 2, "XPATH": 3, "CONCATENACION_SETS": 4, "EOF": 5, "LISTA_SETS": 6, "CONCATENACION_SETSAUX": 7, "barraVertical": 8, "SET": 9, "SELECTOR": 10, "slash": 11, "dobleSlash": 12, "identificador": 13, "MENU_SELECTOR": 14, "MenuIdentificador": 15, "arroba": 16, "MenuArroba": 17, "MENU_SET": 18, "dosPuntos": 19, "punto": 20, "asterisco": 21, "PREDICADO": 22, "corecheteA": 23, "OPERACION": 24, "corcheteC": 25, "entero": 26, "decimal": 27, "MENU_OPERACION": 28, "mas": 29, "menos": 30, "$accept": 0, "$end": 1 },
        terminals_: { 2: "error", 5: "EOF", 8: "barraVertical", 11: "slash", 12: "dobleSlash", 13: "identificador", 16: "arroba", 19: "dosPuntos", 20: "punto", 21: "asterisco", 23: "corecheteA", 25: "corcheteC", 26: "entero", 27: "decimal", 29: "mas", 30: "menos" },
        productions_: [0, [3, 2], [4, 2], [7, 3], [7, 0], [6, 2], [6, 1], [6, 1], [10, 1], [10, 1], [9, 1], [9, 2], [14, 2], [14, 2], [14, 1], [18, 1], [18, 1], [18, 1], [15, 1], [15, 0], [17, 1], [17, 1], [22, 3], [24, 1], [24, 1], [28, 2], [28, 2], [28, 2], [28, 2]],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
            /* this == yyval */
            var $0 = $$.length - 1;
            switch (yystate) {
                case 1:
                    return $$[$0 - 1];
                    break;
                case 2:
                case 3:
                    $$[$0].push($$[$0 - 1]);
                    this.$ = $$[$0];
                    break;
                case 4:
                    this.$ = [];
                    break;
                case 5:
                    aux = $$[$0];
                    while (aux.next != null) {
                        aux = aux.next;
                    }
                    ;
                    aux.next = $$[$0 - 1];
                    this.$ = $$[$0];
                    break;
                case 6:
                    this.$ = $$[$0];
                    break;
                case 7:
                    this.$ = listaError.push(new ControlError(yytext, TipoSeleccion.ERROR_SINTACTICO, this._$.first_line, this._$.first_column, "XpathDescendente"));
                    break;
                case 8:
                case 9:
                    this.$ = $$[$0];
                    break;
                case 10:
                    this.$ = { tipo: TipoSeleccion.ACCESO_NODO_RAIZ, id: $$[$0], next: null };
                    break;
                case 11:
                    this.$ = { tipo: TipoSeleccion.SELECT_NODOS_FROM_NODO, selector: $$[$0 - 1], id: $$[$0].ids, predicado: $$[$0].predicados, next: null };
                    break;
                case 12:
                    this.$ = {
                        ids: $$[$0 - 1],
                        predicados: $$[$0]
                    };
                    break;
                case 18:
                    this.$ = $$[$0];
                    break;
                case 19:
                    this.$ = null;
                    break;
                case 22:
                    this.$ = $$[$0 - 1];
                    break;
                case 23:
                    this.$ = new Primitivo(parseInt($$[$0]), TipoVal.ENTERO);
                    break;
                case 24:
                    this.$ = new Primitivo(parseFloat($$[$0]), TipoVal.DECIMAL);
                    break;
                case 25:
                    this.$ =
                        {
                            tipo: TiposOp.SUMA,
                            op: $$[$0]
                        };
                    break;
                case 26:
                    this.$ =
                        {
                            tipo: TiposOp.RESTA,
                            op: $$[$0]
                        };
                    break;
                case 27:
                    this.$ =
                        {
                            tipo: TiposOp.MULTIPLICACION,
                            op: $$[$0]
                        };
                    break;
                case 28:
                    this.$ =
                        {
                            tipo: TiposOp.DIVISION,
                            op: $$[$0]
                        };
                    break;
            }
        },
        table: [{ 2: $V0, 3: 1, 4: 2, 6: 3, 9: 4, 10: 7, 11: $V1, 12: $V2, 13: $V3 }, { 1: [3] }, { 5: [1, 10] }, { 5: $V4, 7: 11, 8: $V5 }, o($V6, [2, 6], { 9: 4, 10: 7, 6: 13, 2: $V0, 11: $V1, 12: $V2, 13: $V3 }), o($V6, [2, 7]), o($V7, [2, 10]), { 13: [1, 15], 14: 14, 16: [1, 16], 18: 17, 19: [1, 18], 20: [1, 19], 21: [1, 20] }, o($V8, [2, 8]), o($V8, [2, 9]), { 1: [2, 1] }, { 5: [2, 2] }, { 2: $V0, 6: 21, 9: 4, 10: 7, 11: $V1, 12: $V2, 13: $V3 }, o($V6, [2, 5]), o($V7, [2, 11]), o($V7, [2, 19], { 15: 22, 22: 23, 23: [1, 24] }), { 13: [1, 26], 17: 25, 21: [1, 27] }, o($V7, [2, 14]), o($V7, [2, 15]), o($V7, [2, 16]), o($V7, [2, 17]), { 5: $V4, 7: 28, 8: $V5 }, o($V7, [2, 12]), o($V7, [2, 18]), { 24: 29, 26: [1, 30], 27: [1, 31] }, o($V7, [2, 13]), o($V7, [2, 20]), o($V7, [2, 21]), { 5: [2, 3] }, { 25: [1, 32] }, { 25: [2, 23] }, { 25: [2, 24] }, o($V7, [2, 22])],
        defaultActions: { 10: [2, 1], 11: [2, 2], 28: [2, 3], 30: [2, 23], 31: [2, 24] },
        parseError: function parseError(str, hash) {
            if (hash.recoverable) {
                this.trace(str);
            }
            else {
                var error = new Error(str);
                error.hash = hash;
                throw error;
            }
        },
        parse: function parse(input) {
            var self = this, stack = [0], tstack = [], // token stack
            vstack = [null], // semantic value stack
            lstack = [], // location stack
            table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            var args = lstack.slice.call(arguments, 1);
            //this.reductionCount = this.shiftCount = 0;
            var lexer = Object.create(this.lexer);
            var sharedState = { yy: {} };
            // copy state
            for (var k in this.yy) {
                if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
                    sharedState.yy[k] = this.yy[k];
                }
            }
            lexer.setInput(input, sharedState.yy);
            sharedState.yy.lexer = lexer;
            sharedState.yy.parser = this;
            if (typeof lexer.yylloc == 'undefined') {
                lexer.yylloc = {};
            }
            var yyloc = lexer.yylloc;
            lstack.push(yyloc);
            var ranges = lexer.options && lexer.options.ranges;
            if (typeof sharedState.yy.parseError === 'function') {
                this.parseError = sharedState.yy.parseError;
            }
            else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
            _token_stack: var lex = function () {
                var token;
                token = lexer.lex() || EOF;
                // if token isn't its numeric value, convert
                if (typeof token !== 'number') {
                    token = self.symbols_[token] || token;
                }
                return token;
            };
            var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
            while (true) {
                // retreive state number from top of stack
                state = stack[stack.length - 1];
                // use default actions if available
                if (this.defaultActions[state]) {
                    action = this.defaultActions[state];
                }
                else {
                    if (symbol === null || typeof symbol == 'undefined') {
                        symbol = lex();
                    }
                    // read action for current state and first input
                    action = table[state] && table[state][symbol];
                }
                _handle_error: 
                // handle parse error
                if (typeof action === 'undefined' || !action.length || !action[0]) {
                    var error_rule_depth;
                    var errStr = '';
                    // Return the rule stack depth where the nearest error rule can be found.
                    // Return FALSE when no error recovery rule was found.
                    function locateNearestErrorRecoveryRule(state) {
                        var stack_probe = stack.length - 1;
                        var depth = 0;
                        // try to recover from error
                        for (;;) {
                            // check for error recovery rule in this state
                            if ((TERROR.toString()) in table[state]) {
                                return depth;
                            }
                            if (state === 0 || stack_probe < 2) {
                                return false; // No suitable error recovery rule available.
                            }
                            stack_probe -= 2; // popStack(1): [symbol, action]
                            state = stack[stack_probe];
                            ++depth;
                        }
                    }
                    if (!recovering) {
                        // first see if there's any chance at hitting an error recovery rule:
                        error_rule_depth = locateNearestErrorRecoveryRule(state);
                        // Report error
                        expected = [];
                        for (p in table[state]) {
                            if (this.terminals_[p] && p > TERROR) {
                                expected.push("'" + this.terminals_[p] + "'");
                            }
                        }
                        if (lexer.showPosition) {
                            errStr = 'Parse error on line ' + (yylineno + 1) + ":\n" + lexer.showPosition() + "\nExpecting " + expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                        }
                        else {
                            errStr = 'Parse error on line ' + (yylineno + 1) + ": Unexpected " +
                                (symbol == EOF ? "end of input" :
                                    ("'" + (this.terminals_[symbol] || symbol) + "'"));
                        }
                        this.parseError(errStr, {
                            text: lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: lexer.yylineno,
                            loc: yyloc,
                            expected: expected,
                            recoverable: (error_rule_depth !== false)
                        });
                    }
                    else if (preErrorSymbol !== EOF) {
                        error_rule_depth = locateNearestErrorRecoveryRule(state);
                    }
                    // just recovered from another error
                    if (recovering == 3) {
                        if (symbol === EOF || preErrorSymbol === EOF) {
                            throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                        }
                        // discard current lookahead and grab another
                        yyleng = lexer.yyleng;
                        yytext = lexer.yytext;
                        yylineno = lexer.yylineno;
                        yyloc = lexer.yylloc;
                        symbol = lex();
                    }
                    // try to recover from error
                    if (error_rule_depth === false) {
                        throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
                    }
                    popStack(error_rule_depth);
                    preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
                    symbol = TERROR; // insert generic error symbol as new lookahead
                    state = stack[stack.length - 1];
                    action = table[state] && table[state][TERROR];
                    recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
                }
                // this shouldn't happen, unless resolve defaults are off
                if (action[0] instanceof Array && action.length > 1) {
                    throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
                }
                switch (action[0]) {
                    case 1: // shift
                        //this.shiftCount++;
                        stack.push(symbol);
                        vstack.push(lexer.yytext);
                        lstack.push(lexer.yylloc);
                        stack.push(action[1]); // push state
                        symbol = null;
                        if (!preErrorSymbol) { // normal execution/no error
                            yyleng = lexer.yyleng;
                            yytext = lexer.yytext;
                            yylineno = lexer.yylineno;
                            yyloc = lexer.yylloc;
                            if (recovering > 0) {
                                recovering--;
                            }
                        }
                        else {
                            // error just occurred, resume old lookahead f/ before error
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        // reduce
                        //this.reductionCount++;
                        len = this.productions_[action[1]][1];
                        // perform semantic action
                        yyval.$ = vstack[vstack.length - len]; // default to $$ = $1
                        // default location, uses first token for firsts, last for lasts
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) {
                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                        }
                        r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
                        if (typeof r !== 'undefined') {
                            return r;
                        }
                        // pop off stack
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]); // push nonterminal (reduce)
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        // goto new state = table[STATE][NONTERMINAL]
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        // accept
                        return true;
                }
            }
            return true;
        } };
    const { TipoSeleccion } = __webpack_require__(/*! ../Xpath/TipoSeleccion */ "OjI0");
    const { OpBinaria } = __webpack_require__(/*! ../Xpath/OpBinaria */ "FUIu");
    const { TiposOp } = __webpack_require__(/*! ../Xpath/TiposOp */ "YTrP");
    const { Primitivo } = __webpack_require__(/*! ../Xpath/Primitivo */ "NhD4");
    const { TipoVal } = __webpack_require__(/*! ../Xpath/TipoVal */ "eU3H");
    const { ControlError } = __webpack_require__(/*! ../Xpath/ControlError */ "2orD");
    listaError = [];
    /* generated by jison-lex 0.3.4 */
    var lexer = (function () {
        var lexer = ({
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(str, hash);
                }
                else {
                    throw new Error(str);
                }
            },
            // resets the lexer, sets new input
            setInput: function (input, yy) {
                this.yy = yy || this.yy || {};
                this._input = input;
                this._more = this._backtrack = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = '';
                this.conditionStack = ['INITIAL'];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) {
                    this.yylloc.range = [0, 0];
                }
                this.offset = 0;
                return this;
            },
            // consumes and returns one char from the input
            input: function () {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                }
                else {
                    this.yylloc.last_column++;
                }
                if (this.options.ranges) {
                    this.yylloc.range[1]++;
                }
                this._input = this._input.slice(1);
                return ch;
            },
            // unshifts one char (or a string) into the input
            unput: function (ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) {
                    this.yylineno -= lines.length - 1;
                }
                var r = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ?
                        (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                            + oldLines[oldLines.length - lines.length].length - lines[0].length :
                        this.yylloc.first_column - len
                };
                if (this.options.ranges) {
                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                }
                this.yyleng = this.yytext.length;
                return this;
            },
            // When called from action, caches matched text and appends it on next action
            more: function () {
                this._more = true;
                return this;
            },
            // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
            reject: function () {
                if (this.options.backtrack_lexer) {
                    this._backtrack = true;
                }
                else {
                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
                return this;
            },
            // retain first n characters of the match
            less: function (n) {
                this.unput(this.match.slice(n));
            },
            // displays already matched input, i.e. for error messages
            pastInput: function () {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
            },
            // displays upcoming input, i.e. for error messages
            upcomingInput: function () {
                var next = this.match;
                if (next.length < 20) {
                    next += this._input.substr(0, 20 - next.length);
                }
                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
            },
            // displays the character position where the lexing error occurred, i.e. for error messages
            showPosition: function () {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            // test the lexed token: return FALSE when not a match, otherwise return token
            test_match: function (match, indexed_rule) {
                var token, lines, backup;
                if (this.options.backtrack_lexer) {
                    // save context
                    backup = {
                        yylineno: this.yylineno,
                        yylloc: {
                            first_line: this.yylloc.first_line,
                            last_line: this.last_line,
                            first_column: this.yylloc.first_column,
                            last_column: this.yylloc.last_column
                        },
                        yytext: this.yytext,
                        match: this.match,
                        matches: this.matches,
                        matched: this.matched,
                        yyleng: this.yyleng,
                        offset: this.offset,
                        _more: this._more,
                        _input: this._input,
                        yy: this.yy,
                        conditionStack: this.conditionStack.slice(0),
                        done: this.done
                    };
                    if (this.options.ranges) {
                        backup.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                lines = match[0].match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno += lines.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines ?
                        lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                        this.yylloc.last_column + match[0].length
                };
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [this.offset, this.offset += this.yyleng];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (token) {
                    return token;
                }
                else if (this._backtrack) {
                    // recover context
                    for (var k in backup) {
                        this[k] = backup[k];
                    }
                    return false; // rule action called reject() implying the next rule should be tested instead.
                }
                return false;
            },
            // return next match in input
            next: function () {
                if (this.done) {
                    return this.EOF;
                }
                if (!this._input) {
                    this.done = true;
                }
                var token, match, tempMatch, index;
                if (!this._more) {
                    this.yytext = '';
                    this.match = '';
                }
                var rules = this._currentRules();
                for (var i = 0; i < rules.length; i++) {
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (this.options.backtrack_lexer) {
                            token = this.test_match(tempMatch, rules[i]);
                            if (token !== false) {
                                return token;
                            }
                            else if (this._backtrack) {
                                match = false;
                                continue; // rule action called reject() implying a rule MISmatch.
                            }
                            else {
                                // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                                return false;
                            }
                        }
                        else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (match) {
                    token = this.test_match(match, rules[index]);
                    if (token !== false) {
                        return token;
                    }
                    // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                    return false;
                }
                if (this._input === "") {
                    return this.EOF;
                }
                else {
                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
            },
            // return next match that has a token
            lex: function lex() {
                var r = this.next();
                if (r) {
                    return r;
                }
                else {
                    return this.lex();
                }
            },
            // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            // pop the previously active lexer condition state off the condition stack
            popState: function popState() {
                var n = this.conditionStack.length - 1;
                if (n > 0) {
                    return this.conditionStack.pop();
                }
                else {
                    return this.conditionStack[0];
                }
            },
            // produce the lexer rule set which is active for the currently active lexer condition state
            _currentRules: function _currentRules() {
                if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                }
                else {
                    return this.conditions["INITIAL"].rules;
                }
            },
            // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
            topState: function topState(n) {
                n = this.conditionStack.length - 1 - Math.abs(n || 0);
                if (n >= 0) {
                    return this.conditionStack[n];
                }
                else {
                    return "INITIAL";
                }
            },
            // alias for begin(condition)
            pushState: function pushState(condition) {
                this.begin(condition);
            },
            // return the number of states currently on the stack
            stateStackSize: function stateStackSize() {
                return this.conditionStack.length;
            },
            options: { "case-insensitive": true },
            performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
                var YYSTATE = YY_START;
                switch ($avoiding_name_collisions) {
                    case 0:
                        break;
                    case 1:
                        return 'menor';
                        break;
                    case 2:
                        return 'mayor';
                        break;
                    case 3:
                        return 12;
                        break;
                    case 4:
                        return 11;
                        break;
                    case 5:
                        return 'igual';
                        break;
                    case 6:
                        return 8;
                        break;
                    case 7:
                        return 29;
                        break;
                    case 8:
                        return 30;
                        break;
                    case 9:
                        return 21;
                        break;
                    case 10:
                        return 'div';
                        break;
                    case 11:
                        return 'noIgual';
                        break;
                    case 12:
                        return 'mayorQue';
                        break;
                    case 13:
                        return 'menorQue';
                        break;
                    case 14:
                        return 'and';
                        break;
                    case 15:
                        return 'or';
                        break;
                    case 16:
                        return '@';
                        break;
                    case 17:
                        return 20;
                        break;
                    case 18:
                        return 19;
                        break;
                    case 19:
                        return 'dobleDosPuntos';
                        break;
                    case 20:
                        return 23;
                        break;
                    case 21:
                        return 25;
                        break;
                    case 22:
                        return 'parentesisA';
                        break;
                    case 23:
                        return 'parentesisC';
                        break;
                    case 24:
                        return 'ancestor';
                        break;
                    case 25:
                        return 'ancestor-or-self';
                        break;
                    case 26:
                        return 'attribute';
                        break;
                    case 27:
                        return 'child';
                        break;
                    case 28:
                        return 'descendant';
                        break;
                    case 29:
                        return 'descendant-or-self';
                        break;
                    case 30:
                        return 'following';
                        break;
                    case 31:
                        return 'following-sibling';
                        break;
                    case 32:
                        return "namespace";
                        break;
                    case 33:
                        return 'parent';
                        break;
                    case 34:
                        return 'preceding';
                        break;
                    case 35:
                        return 'preceding-sibling';
                        break;
                    case 36:
                        return 'self';
                        break;
                    case 37:
                        return 'NODO';
                        break;
                    case 38:
                        return 'LANG';
                        break;
                    case 39:
                        return 'POSICION';
                        break;
                    case 40:
                        return 'ULTIMO';
                        break;
                    case 41:
                        return 'TEXTO';
                        break;
                    case 42:
                        return 'CADENA';
                        break;
                    case 43:
                        return 27;
                        break;
                    case 44:
                        return 26;
                        break;
                    case 45:
                        return 13;
                        break;
                    case 46:
                        return 5;
                        break;
                    case 47:
                        new ControlError(yy_.yytext, TipoSeleccion.ERROR_LEXICO, yy_.yylloc.first_line, yy_.yylloc.first_column, "XpathDescendente");
                        break;
                }
            },
            rules: [/^(?:[\s]+)/i, /^(?:<)/i, /^(?:>)/i, /^(?:\/\/)/i, /^(?:\/)/i, /^(?:=)/i, /^(?:\|)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:\*)/i, /^(?:div\b)/i, /^(?:!=)/i, /^(?:>=)/i, /^(?:<=)/i, /^(?:and\b)/i, /^(?:or\b)/i, /^(?:@)/i, /^(?:\.)/i, /^(?:\.\.)/i, /^(?:::)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:\()/i, /^(?:\))/i, /^(?:ancestor\b)/i, /^(?:ancestor-or-self\b)/i, /^(?:attribute\b)/i, /^(?:child\b)/i, /^(?:descendant\b)/i, /^(?:descendant-or-self\b)/i, /^(?:following\b)/i, /^(?:following-sibling\b)/i, /^(?:namespace\b)/i, /^(?:parent\b)/i, /^(?:preceding\b)/i, /^(?:preceding-sibling\b)/i, /^(?:self\b)/i, /^(?:node\b)/i, /^(?:lang\b)/i, /^(?:position\b)/i, /^(?:last\b)/i, /^(?:text\b)/i, /^(?:'[^\']*')/i, /^(?:[0-9]+(\.[0-9]+)\b)/i, /^(?:[0-9]+\b)/i, /^(?:[a-zA-Z_][a-zA-Z0-9_]*)/i, /^(?:$)/i, /^(?:.)/i],
            conditions: { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47], "inclusive": true } }
        });
        return lexer;
    })();
    parser.lexer = lexer;
    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser;
})();
if (true) {
    exports.parser = xpathD;
    exports.Parser = xpathD.Parser;
    exports.parse = function () { return xpathD.parse.apply(xpathD, arguments); };
    exports.main = function commonjsMain(args) {
        if (!args[1]) {
            console.log('Usage: ' + args[0] + ' FILE');
            process.exit(1);
        }
        var source = __webpack_require__(/*! fs */ 1).readFileSync(__webpack_require__(/*! path */ 2).normalize(args[1]), "utf8");
        return exports.parser.parse(source);
    };
    if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
        exports.main(process.argv.slice(1));
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "YuTi")(module)))

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/editor/editor.component */ "YJIf");
/* harmony import */ var _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @materia-ui/ngx-monaco-editor */ "0LvA");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var src_app_components_arbol_ast_arbol_ast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/arbol-ast/arbol-ast.component */ "BP3C");
/* harmony import */ var _components_tabla_simbolos_tabla_simbolos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tabla-simbolos/tabla-simbolos.component */ "f1JB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_6__["MONACO_PATH"],
            useValue: 'https://unpkg.com/monaco-editor@0.19.3/min/vs'
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_6__["MonacoEditorModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"],
        src_app_components_arbol_ast_arbol_ast_component__WEBPACK_IMPORTED_MODULE_8__["ArbolAstComponent"],
        _components_tabla_simbolos_tabla_simbolos_component__WEBPACK_IMPORTED_MODULE_9__["TablaSimbolosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_6__["MonacoEditorModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();


/***/ }),

/***/ "eU3H":
/*!********************************************!*\
  !*** ./src/Backend/build/Xpath/TipoVal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TipoVal;
(function (TipoVal) {
    TipoVal["ENTERO"] = "ENTERO";
    TipoVal["ID"] = "ID";
    TipoVal["DECIMAL"] = "DECIMAL";
    TipoVal["CADENA"] = "CADENA";
    TipoVal["ARROBA"] = "ARROBA";
    TipoVal["PUNTO"] = "PUTNO";
    TipoVal["LANG"] = "LANG";
    TipoVal["TEXTO"] = "TEXTO";
    TipoVal["POSICION"] = "POSICION";
    TipoVal["NODO"] = "NODO";
    TipoVal["BOLEANO"] = "BOLEANO";
    TipoVal["LAST"] = "LAST";
})(TipoVal = exports.TipoVal || (exports.TipoVal = {}));


/***/ }),

/***/ "f1JB":
/*!***********************************************************************!*\
  !*** ./src/app/components/tabla-simbolos/tabla-simbolos.component.ts ***!
  \***********************************************************************/
/*! exports provided: TablaSimbolosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaSimbolosComponent", function() { return TablaSimbolosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function TablaSimbolosComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fila_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fila_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fila_r2.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", fila_r2.listaAmbito.join("-"), "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fila_r2.columna);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fila_r2.fila);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("--", fila_r2.valor, "--");
} }
function TablaSimbolosComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fila_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fila_r3.produccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fila_r3.regla_semantica);
} }
class TablaSimbolosComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TablaSimbolosComponent.ɵfac = function TablaSimbolosComponent_Factory(t) { return new (t || TablaSimbolosComponent)(); };
TablaSimbolosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablaSimbolosComponent, selectors: [["app-tabla-simbolos"]], inputs: { tablaSimbolos: "tablaSimbolos" }, decls: 61, vars: 2, consts: [[1, "row", "justify-content-center", "tabla"], [1, "col-md-8", "tab"], [1, "nav", "nav-tabs", "justify-content-center"], [1, "nav-item", "active"], ["data-toggle", "tab", "href", "#simbolos", 1, "nav-link", "active"], ["id", "myTabContent", 1, "tab-content"], ["id", "simbolos", 1, "tab-pane", "fade", "in", "active", "show"], [1, "col-md-12"], [2, "width", "auto", "height", "auto"], [1, "table", "table-hover", "table-hover"], [4, "ngFor", "ngForOf"], [1, "table", "table-primary", "table-hover"], ["id", "errores", 1, "tab-pane", "fade"], [1, "table", "table-danger", "table-hover"]], template: function TablaSimbolosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tabla de S\u00EDmbolos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "NOMBRE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TIPO_SIMBOLO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "AMBITO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "COLUMNA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "FILA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "VALOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TablaSimbolosComponent_tr_27_Template, 13, 6, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Tabla de S\u00EDmbolos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "PRODUCCION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "regla_semantica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TablaSimbolosComponent_tr_41_Template, 5, 2, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "hola");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "mundo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tablaSimbolos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ReporteGramatica);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsYS1zaW1ib2xvcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "jn+f":
/*!***************************************!*\
  !*** ./src/Backend/build/Xml/Fila.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Fila {
    constructor(nombre, tipo, listaAmbito, fila, columna, valor) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.listaAmbito = listaAmbito;
        this.fila = fila;
        this.columna = columna;
        this.valor = valor;
    }
}
exports.Fila = Fila;


/***/ }),

/***/ "lo4a":
/*!********************************************************!*\
  !*** ./src/Backend/build/Reportes/ReporteGramatica.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NodoReporteGramatica_1 = __webpack_require__(/*! ./NodoReporteGramatica */ "42/y");
class ReporteGramatica {
    constructor(produccion, regla_semantica) {
        ReporteGramatica.Lista.push(new NodoReporteGramatica_1.NodoReporteGramatica(produccion, regla_semantica));
    }
}
exports.ReporteGramatica = ReporteGramatica;
ReporteGramatica.Lista = [];


/***/ }),

/***/ "nnRf":
/*!************************************************!*\
  !*** ./src/Backend/build/Graficas/Graficas.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Graficas;
(function (Graficas) {
    function formatId(numId) {
        return "nodo" + numId.toString();
    }
    function defNodo(nodoId, etiqueta) {
        return formatId(nodoId) + "[label=\"" + etiqueta + "\"] \n";
    }
    Graficas.defNodo = defNodo;
    function defEdge(id1, id2) {
        return formatId(id1) + " -> " + formatId(id2) + "\n";
    }
    Graficas.defEdge = defEdge;
    function getElement(id, etiqueta, idPadre) {
        let dotText = "";
        dotText += defNodo(id, etiqueta);
        dotText += defEdge(idPadre, id);
        return dotText;
    }
    Graficas.getElement = getElement;
})(Graficas = exports.Graficas || (exports.Graficas = {}));


/***/ }),

/***/ "oO3V":
/*!*************************************************!*\
  !*** ./src/Backend/build/Xml/EtiquetaInicio.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Graficas_1 = __webpack_require__(/*! ../Graficas/Graficas */ "nnRf");
class EtiquetaInicio {
    constructor(listaAtributos, linea, columna, idSent) {
        this.linea = linea;
        this.columna = columna;
        this.idSent = idSent;
        listaAtributos.forEach(atributo => {
            if (atributo.nombre == "version") {
                this.version = atributo.valor;
            }
            else if (atributo.nombre == "encoding") {
                this.encoding = atributo.valor;
            }
        });
    }
    getCstDotA(idPadre) {
        let texto = "";
        texto += Graficas_1.Graficas.getElement(this.idSent, "TAG_CONFIGURACION", idPadre);
        texto += Graficas_1.Graficas.getElement(this.idSent + 1, "AbreTagConf", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 2, "<?", this.idSent + 1);
        texto += Graficas_1.Graficas.getElement(this.idSent + 3, "version", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 4, this.version.split("\"").join(""), this.idSent + 3);
        texto += Graficas_1.Graficas.getElement(this.idSent + 5, "encoding", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 6, this.encoding.split("\"").join(""), this.idSent + 5);
        texto += Graficas_1.Graficas.getElement(this.idSent + 7, "CierreTagConf", this.idSent);
        texto += Graficas_1.Graficas.getElement(this.idSent + 8, "?>", this.idSent + 7);
        return texto;
    }
}
exports.EtiquetaInicio = EtiquetaInicio;


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/editor/editor.component */ "YJIf");
/* harmony import */ var src_app_components_arbol_ast_arbol_ast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/arbol-ast/arbol-ast.component */ "BP3C");
/* harmony import */ var src_app_components_tabla_simbolos_tabla_simbolos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/tabla-simbolos/tabla-simbolos.component */ "f1JB");
/* harmony import */ var src_app_components_tabla_errores_tabla_errores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/tabla-errores/tabla-errores.component */ "D4eS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"],
        children: [
            { path: 'arbolAst', component: src_app_components_arbol_ast_arbol_ast_component__WEBPACK_IMPORTED_MODULE_2__["ArbolAstComponent"] },
            { path: 'tablaDeSimbolos', component: src_app_components_tabla_simbolos_tabla_simbolos_component__WEBPACK_IMPORTED_MODULE_3__["TablaSimbolosComponent"] },
            { path: 'tablaDeErrores', component: src_app_components_tabla_errores_tabla_errores_component__WEBPACK_IMPORTED_MODULE_4__["TablaErroresComponent"] },
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map