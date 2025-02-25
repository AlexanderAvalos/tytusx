/* parser generated by jison 0.4.18 */
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
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,8],$V1=[1,10],$V2=[1,14],$V3=[6,7,36],$V4=[14,21],$V5=[1,22],$V6=[1,28],$V7=[1,27],$V8=[1,26],$V9=[1,31],$Va=[1,30],$Vb=[1,29],$Vc=[9,14,21],$Vd=[1,41],$Ve=[1,38],$Vf=[1,39],$Vg=[1,40],$Vh=[1,42],$Vi=[21,39,42,43,44,45],$Vj=[1,50],$Vk=[1,52],$Vl=[1,53],$Vm=[1,54],$Vn=[1,55],$Vo=[1,56],$Vp=[1,57],$Vq=[1,58],$Vr=[7,9,29,30,31,32,33,34,35],$Vs=[39,42,43];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"INICIO":4,"RAICES":5,"EOF":6,"lt":7,"interrogacion":8,"identifier":9,"rversion":10,"asig":11,"StringLiteral":12,"rencoding":13,"gt":14,"RAIZ":15,"PRINT":16,"semicolon":17,"OBJETO":18,"LATRIBUTOS":19,"OBJETOS":20,"div":21,"LISTA_ID_OBJETO":22,"ATRIBUTOS":23,"ATRIBUTO":24,"STR_CHR":25,"charLiteralMulti":26,"ID":27,"RESERVED_WORD":28,"DoubleLiteral":29,"IntegerLiteral":30,"amp":31,"rlt":32,"rgt":33,"apos":34,"quot":35,"print":36,"lparen":37,"EXPR":38,"rparen":39,"PRIMITIVA":40,"OP_ARITMETICAS":41,"plus":42,"minus":43,"times":44,"mod":45,"charliteral":46,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",7:"lt",8:"interrogacion",9:"identifier",10:"rversion",11:"asig",12:"StringLiteral",13:"rencoding",14:"gt",17:"semicolon",21:"div",26:"charLiteralMulti",29:"DoubleLiteral",30:"IntegerLiteral",31:"amp",32:"rlt",33:"rgt",34:"apos",35:"quot",36:"print",37:"lparen",39:"rparen",42:"plus",43:"minus",44:"times",45:"mod",46:"charliteral"},
productions_: [0,[3,3],[3,2],[4,11],[5,2],[5,1],[15,2],[15,1],[18,9],[18,9],[18,5],[19,1],[19,0],[23,2],[23,1],[24,3],[25,1],[25,1],[22,2],[22,1],[27,1],[27,1],[27,1],[27,1],[28,2],[28,2],[28,2],[28,2],[28,2],[20,2],[20,1],[16,4],[38,1],[38,1],[41,3],[41,3],[41,3],[41,3],[41,3],[41,2],[41,3],[40,1],[40,1],[40,1],[40,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 $$[$0-2].listaObjetos = $$[$0-1]; this.$ = $$[$0-2]; return this.$; 
break;
case 2:
 this.$ = $$[$0-1]; return this.$; 
break;
case 3:
   var atr = [];
    atr.push(new Atributo('encoding', $$[$0-2], _$[$0-2].first_line, _$[$0-2].first_column));
    this.$ = new Objeto('Encabezado','',_$[$0-10].first_line, _$[$0-10].first_column,atr,[],0,null);

break;
case 4: case 13: case 29:
 $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
break;
case 5: case 14: case 30:
 this.$ = [$$[$0]]; 
break;
case 6: case 40:
 this.$ = $$[$0-1] 
break;
case 7: case 16: case 17: case 19: case 20: case 21: case 22: case 23: case 32: case 33:
 this.$ = $$[$0] 
break;
case 8:
 this.$ = new Objeto($$[$0-7],'',_$[$0-8].first_line, _$[$0-8].first_column,$$[$0-6],$$[$0-4],0,null); $$[$0-4].forEach(element => {element.padre = this.$;}); 
break;
case 9:
 this.$ = new Objeto($$[$0-7],$$[$0-4],_$[$0-8].first_line, _$[$0-8].first_column,$$[$0-6],[],0,null); 
break;
case 10:
 this.$ = new Objeto($$[$0-3],'',_$[$0-4].first_line, _$[$0-4].first_column,$$[$0-2],[],1,null); 
break;
case 11:
 this.$ = $$[$0]; 
break;
case 12:
 this.$ = []; 
break;
case 15:
 this.$ = new Atributo($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 18:
 $$[$0-1]=$$[$0-1] + ' ' +$$[$0] ; this.$ = $$[$0-1];
break;
case 24:
 this.$ = '&' 
break;
case 25:
 this.$ = '<' 
break;
case 26:
 this.$ = '>' 
break;
case 27:
 this.$ = '\'' 
break;
case 28:
 this.$ = '"' 
break;
case 31:
 this.$ = new Print($$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 34:
 this.$ = new Operacion($$[$0-2],$$[$0],Operador.SUMA, _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 35:
 this.$ = new Operacion($$[$0-2],$$[$0],Operador.RESTA, _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 36:
 this.$ = new Operacion($$[$0-2],$$[$0],Operador.MULTIPLICACION, _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 37:
 this.$ = new Operacion($$[$0-2],$$[$0],Operador.DIVISION, _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 38:
 this.$ = new Operacion($$[$0-2],$$[$0],Operador.MODULO, _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 39:
 this.$ = new Operacion($$[$0],$$[$0],Operador.MENOS_UNARIO, _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 41: case 42:
 this.$ = new Primitivo(Number($$[$0]), _$[$0].first_line, _$[$0].first_column); 
break;
case 43: case 44:
 this.$ = new Primitivo($$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
}
},
table: [{3:1,4:2,5:3,7:[1,4],15:5,16:6,18:7,36:$V0},{1:[3]},{5:9,7:$V1,15:5,16:6,18:7,36:$V0},{6:[1,11],7:$V1,15:12,16:6,18:7,36:$V0},{8:[1,13],9:$V2},o($V3,[2,5]),{17:[1,15]},o($V3,[2,7]),{37:[1,16]},{6:[1,17],7:$V1,15:12,16:6,18:7,36:$V0},{9:$V2},{1:[2,2]},o($V3,[2,4]),{9:[1,18]},o($V4,[2,12],{19:19,23:20,24:21,9:$V5}),o($V3,[2,6]),{12:$V6,29:$V7,30:$V8,37:$V9,38:23,40:24,41:25,43:$Va,46:$Vb},{1:[2,1]},{10:[1,32]},{14:[1,33],21:[1,34]},o($V4,[2,11],{24:35,9:$V5}),o($Vc,[2,14]),{11:[1,36]},{21:$Vd,39:[1,37],42:$Ve,43:$Vf,44:$Vg,45:$Vh},o($Vi,[2,32]),o($Vi,[2,33]),o($Vi,[2,41]),o($Vi,[2,42]),o($Vi,[2,43]),o($Vi,[2,44]),{12:$V6,29:$V7,30:$V8,37:$V9,38:43,40:24,41:25,43:$Va,46:$Vb},{12:$V6,29:$V7,30:$V8,37:$V9,38:44,40:24,41:25,43:$Va,46:$Vb},{11:[1,45]},{7:$V1,9:$Vj,18:48,20:46,22:47,27:49,28:51,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq},{14:[1,59]},o($Vc,[2,13]),{12:[1,61],25:60,26:[1,62]},{17:[2,31]},{12:$V6,29:$V7,30:$V8,37:$V9,38:63,40:24,41:25,43:$Va,46:$Vb},{12:$V6,29:$V7,30:$V8,37:$V9,38:64,40:24,41:25,43:$Va,46:$Vb},{12:$V6,29:$V7,30:$V8,37:$V9,38:65,40:24,41:25,43:$Va,46:$Vb},{12:$V6,29:$V7,30:$V8,37:$V9,38:66,40:24,41:25,43:$Va,46:$Vb},{12:$V6,29:$V7,30:$V8,37:$V9,38:67,40:24,41:25,43:$Va,46:$Vb},o($Vi,[2,39]),{21:$Vd,39:[1,68],42:$Ve,43:$Vf,44:$Vg,45:$Vh},{12:[1,69]},{7:[1,70],18:71},{7:[1,72],9:$Vj,27:73,28:51,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq},{7:[2,30]},o($Vr,[2,19]),o($Vr,[2,20]),o($Vr,[2,21]),o($Vr,[2,22]),o($Vr,[2,23]),{17:[1,74]},{17:[1,75]},{17:[1,76]},{17:[1,77]},{17:[1,78]},o($V3,[2,10]),o($Vc,[2,15]),o($Vc,[2,16]),o($Vc,[2,17]),o($Vs,[2,34],{21:$Vd,44:$Vg,45:$Vh}),o($Vs,[2,35],{21:$Vd,44:$Vg,45:$Vh}),o($Vi,[2,36]),o($Vi,[2,37]),o($Vi,[2,38]),o($Vi,[2,40]),{13:[1,79]},{9:$V2,21:[1,80]},{7:[2,29]},{21:[1,81]},o($Vr,[2,18]),o($Vr,[2,24]),o($Vr,[2,25]),o($Vr,[2,26]),o($Vr,[2,27]),o($Vr,[2,28]),{11:[1,82]},{9:[1,83]},{9:[1,84]},{12:[1,85]},{14:[1,86]},{14:[1,87]},{8:[1,88]},o($V3,[2,8]),o($V3,[2,9]),{14:[1,89]},o([7,36],[2,3])],
defaultActions: {11:[2,2],17:[2,1],37:[2,31],48:[2,30],71:[2,29]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
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
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    const {Print} = require("../Instrucciones/Primitivas/Print");
    const {Primitivo} = require("../Expresiones/Primitivo");
    const {Operacion, Operador} = require("../Expresiones/Operacion");
    const {Objeto} = require("../Expresiones/Objeto");
    const {Atributo} = require("../Expresiones/Atributo");
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
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
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
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
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
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
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

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
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
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
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
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
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip comments */
break;
case 1:this.begin('comment');
break;
case 2:this.popState();
break;
case 3:/* skip comment content*/
break;
case 4:/* skip whitespace */
break;
case 5:return 42;
break;
case 6:return 44;
break;
case 7:return 21;
break;
case 8:return 45;
break;
case 9:return 'lte';
break;
case 10:return 'gte';
break;
case 11:return 7;
break;
case 12:return 14;
break;
case 13:return 11;
break;
case 14:return 'equal';
break;
case 15:return 'nequal';
break;
case 16:return 'and';
break;
case 17:return 'or';
break;
case 18:return 'not';
break;
case 19:return 17;
break;
case 20:return 37;
break;
case 21:return 39;
break;
case 22:return 'and';
break;
case 23:return 'or';
break;
case 24:return 'not';
break;
case 25:return 10;
break;
case 26:return 13;
break;
case 27:return 31
break;
case 28:return  'rlt'
break;
case 29:return  'rgt'
break;
case 30:return 34
break;
case 31:return 35
break;
case 32:return 8;
break;
case 33:return 29;
break;
case 34:return 30;
break;
case 35:return 12;
break;
case 36:return 9;
break;
case 37:return 'CharLiteral';
break;
case 38:return 26;
break;
case 39:return 43;
break;
case 40:
                                        console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
                                    
break;
case 41:return 6
break;
}
},
rules: [/^(?:\/\/.*)/i,/^(?:<!--)/i,/^(?:-->)/i,/^(?:.)/i,/^(?:\s+)/i,/^(?:\+)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:=)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:!)/i,/^(?:;)/i,/^(?:\()/i,/^(?:\))/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:!)/i,/^(?:version\b)/i,/^(?:encoding\b)/i,/^(?:&amp\b)/i,/^(?:&lt\b)/i,/^(?:&gt\b)/i,/^(?:&apos\b)/i,/^(?:&quot\b)/i,/^(?:\?)/i,/^(?:(([0-9]+\.[0-9]*)|(\.[0-9]+)))/i,/^(?:[0-9]+)/i,/^(?:("((\\([\'\"\\bfnrtv]))|([^\"\\]+))*"))/i,/^(?:[a-zA-Z0-9áéíúóàèìòÁÉÍÓÚÀÈÌÒÙñÑ_!@#$%+^'`"*()/¡:;.,~-¤Ã-]+)/i,/^(?:('((\\([\'\"\\bfnrtv]))|([^\'\\]))'))/i,/^(?:('((\\([\'\"\\bfnrtv]))|([^\'\\]))*'))/i,/^(?:-)/i,/^(?:.)/i,/^(?:$)/i],
conditions: {"comment":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41],"inclusive":true},"INITIAL":{"rules":[0,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}