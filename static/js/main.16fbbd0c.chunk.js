(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(10),l=n.n(u),c=(n(17),n(2)),i=n(1),o=n(4),m=n(5),s=n(7),f=n(6),p=n(3),h=n(8),v=0,d=1,y=2,g=3,b=4,E=5,w=6,x=7,C=/^[^\s",'`()[\]{}|;#]+/,O=/^\(/,k=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?=$|[\s",'`()[\]{}|;#])/,j=/^#(?:[tfTF]|true|false)(?=$|[\s",'`()[\]{}|;#])/,N=/^"[^\\"]*"/,_=/^'/,V=/^[^\s",'`()[\]{}|;#]+/,F=/^\(/,S=[{name:"+",binding:{type:y,value:function(e){return e.forEach(function(e){return P(e,g)}),e.reduce(function(e,t){return{value:e.value+t.value,type:g}})}}},{name:"-",binding:{type:y,value:function(e){return e.forEach(function(e){return P(e,g)}),e.reduce(function(e,t){return{value:e.value-t.value,type:g}})}}},{name:"*",binding:{type:y,value:function(e){return e.forEach(function(e){return P(e,g)}),e.reduce(function(e,t){return{value:e.value*t.value,type:g}})}}},{name:"/",binding:{type:y,value:function(e){if(1===e.length){var t=e[0];return P(t,g),{value:1/t.value,type:g}}if(2===e.length){var n=e[0],a=e[1];return P(n,g),P(a,g),{value:n.value/a.value,type:g}}return e.forEach(function(e){return P(e,g)}),{value:!1,type:b}}}},{name:"car",binding:{type:y,value:W}},{name:"first",binding:{type:y,value:W}},{name:"cdr",binding:{type:y,value:Y}},{name:"rest",binding:{type:y,value:Y}},{name:"cons",binding:{type:y,value:function(e){if(2!==e.length)throw new Error("arity mismatch");var t=e[0],n=e[1];return P(n,w),{value:{a:t,d:n},type:w}}}},{name:"list",binding:{type:y,value:function(e){return e.reverse().reduce(function(e,t){return{value:{a:t,d:e},type:w}},{value:null,type:w})}}},{name:"not",binding:{type:y,value:function(e){if(1!==e.length)throw new Error("arity mismatch");return{value:!1===e[0].value,type:b}}}},{name:"and",binding:{type:y,value:function(e){return e.reduce(function(e,t){return!1!==e.value?t:{value:!1,type:b}},{value:!0,type:b})}}},{name:"or",binding:{type:y,value:function(e){return e.reduce(function(e,t){return!1!==e.value?e:t},{value:!0,type:b})}}},{name:"if",binding:{type:y,value:function(e){if(3!==e.length)throw new Error("arity mismatch");var t=e[0],n=e[1],a=e[2];return P(t,b),t.value?n:a}}},{name:"eqv?",binding:{type:y,value:function(e){if(2!==e.length)throw new Error("arity mismatch");var t=e[0],n=e[1];return{value:t.value===n.value,type:b}}}},{name:"null?",binding:{type:y,value:$}},{name:"empty?",binding:{type:y,value:$}},{name:"cons?",binding:{type:y,value:function(e){if(1!==e.length)throw new Error("arity mismatch");var t=e[0];return{value:null!==t.value&&t.type===w,type:b}}}},{name:"=",binding:{type:y,value:function(e){e.forEach(function(e){return P(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value===t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:">",binding:{type:y,value:function(e){e.forEach(function(e){return P(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value>t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:">=",binding:{type:y,value:function(e){e.forEach(function(e){return P(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value>=t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:"<",binding:{type:y,value:function(e){e.forEach(function(e){return P(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value<t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:"<=",binding:{type:y,value:function(e){e.forEach(function(e){return P(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value<=t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:"true",binding:{type:b,value:!0}},{name:"false",binding:{type:b,value:!1}},{name:"null",binding:{type:w,value:null}},{name:"empty",binding:{type:w,value:null}}];function R(e){if(k.test(e)){var t=e.match(k)[0],n=e.slice(t.length).trim();return{prog:{value:+t,type:g},rest:n}}if(C.test(e)){var a=e.match(C)[0],r=e.slice(a.length).trim();return{prog:{value:a,type:v},rest:r}}if(j.test(e)){var u=e.match(j)[0],l=e.slice(u.length).trim();return{prog:{value:"t"===u[1].toLowerCase(),type:b},rest:l}}if(N.test(e)){var c=e.match(N);return{prog:{value:c[0],type:E},rest:e.slice(c[0].length).trim()}}if(O.test(e)){var o=R(e=e.slice(1).trim()),m=o.prog;e=o.rest;for(var s=[];")"!==e[0];){var f=R(e);s=[].concat(Object(i.a)(s),[f.prog]),e=f.rest}return{prog:{value:{funct:m,args:s},type:d},rest:e.slice(1).trim()}}if(_.test(e))return function e(t){if(F.test(t)){t=t.slice(1).trim();for(var n=[];")"!==t[0];){var a=e(t);n=[a.prog].concat(Object(i.a)(n)),t=a.rest}var r=t.slice(1).trim(),u=n.reduce(function(e,t){return{value:{a:t,d:e},type:w}},{value:null,type:w});return{prog:u,rest:r}}if(k.test(t)){var l=t.match(k),c=l[0],o=t.slice(c.length).trim(),m={value:+c,type:g};return{prog:m,rest:o}}if(j.test(t)){var s=t.match(j),f=s[0],p=t.slice(f.length).trim(),h={value:"t"===f.charAt(1).toLowerCase(),type:b};return{prog:h,rest:p}}if(N.test(t)){var v=t.match(N),d={value:v[0],type:E},y=t.slice(v[0].length).trim();return{prog:d,rest:y}}if(V.test(t)){var C=t.match(V),O=C[0],_={value:"'"+O,type:x},S=t.slice(C[0].length).trim();return{prog:_,rest:S}}throw new SyntaxError('Invalid Syntax: "'+t+'"')}(e.slice(1).trim());throw new SyntaxError('Invalid Syntax: "'+e+'"')}function I(e,t){switch(e.type){case g:case b:case E:case w:case x:return e;case v:return function(e){var n=t.reduce(function(t,n){return void 0!==t?t:n.name===e?n.binding:void 0},void 0);if(void 0===n)throw new ReferenceError(e+" isn't defined");return n}(e.value);case y:return e;case d:var n=I(e.value.funct,t),a=e.value.args.map(function(e){return I(e,t)});return P(n,y),n.value(a);default:throw new TypeError("Unknown Type "+e.value)}}function T(e){switch(e.type){case g:return e.value;case b:return"#"+(e.value?"true":"false");case E:return e.value;case w:return null===e.value?"'()":"(cons ".concat(T(e.value.a)," ").concat(T(e.value.d),")");case x:case v:return e.value;case y:return"function";case d:return"(".concat(T(e.value.funct)," ").concat(e.value.args.map(T).join(" "),")");default:return"error or something"}}function M(e){switch(e.type){case g:return e.value;case b:return"#"+(e.value?"true":"false");case E:return e.value;case w:for(var t="";null!==e.value;)t+=" "+M(e.value.a),e=e.value.d;return"(list".concat(t,")");case x:case v:return e.value;case y:return"function";case d:return"(".concat(M(e.value.funct)," ").concat(e.value.args.map(M).join(" "),")");default:return"error or something"}}function A(e){var t=R(e);switch(t.rest){case"":break;default:throw new SyntaxError("Parsing Error")}return t.prog}function P(e,t){var n="";switch(t){case v:n="variable";break;case d:n="application";break;case y:n="function";break;case g:n="number";break;case b:n="boolean";break;case E:n="string";break;case w:n="list";break;case x:n="symbol";break;default:n="???"}if(e.type!==t)throw new TypeError(T(e)+" ain't a "+n)}function W(e){if(1!==e.length)throw new Error("arity mismatch");var t=e[0];return P(t,w),t.value.a}function Y(e){if(1!==e.length)throw new Error("arity mismatch");var t=e[0];return P(t,w),t.value.d}function $(e){if(1!==e.length)throw new Error("arity mismatch");var t=e[0];return{value:null===t.value&&t.type===w,type:b}}var B={gray:"gray"},J={pink:"pink"},L={yellow:"yellow"};function q(e){return 0!==e.length&&e.every(function(e){return e.type===b||e===B})}function z(e){return q(e.outputs)||void 0!==e.thenChildren}var U={type:"nil"};function D(e){return""===e?U:{type:"text",text:String(e)}}var G={type:"line"};function H(e,t){return{type:"union",left:e,right:t}}function K(e,t){switch(e.type){case"nil":return t;case"compose":return{type:"compose",left:e.left,right:K(e.right,t)};case"union":return H(K(e.left,t),K(e.right,t));default:return{type:"compose",left:e,right:t}}}function Q(e,t){switch(t.type){case"nil":return U;case"compose":return K(Q(e,t.left),Q(e,t.right));case"nest":return{type:"nest",indent:t.indent+e,rest:t.rest};case"text":return t;case"line":return{type:"nest",indent:e,rest:t};case"union":return H(Q(e,t.left),Q(e,t.right));default:throw Error("unnexpected document type: ".concat(t.type))}}function X(e){return H(function e(t){switch(t.type){case"nil":return U;case"compose":return K(e(t.left),e(t.right));case"nest":return e(t.rest);case"text":return D(t.text);case"line":return D(" ");case"union":return e(t.left);default:throw Error("unnexpected document type: ".concat(t.type))}}(e),e)}function Z(e,t){function n(a,r,u){switch(u.type){case"nil":return U;case"compose":switch(u.left.type){case"text":return K(u.left,n(a,r+u.left.text.length,u.right));case"line":return K(G,n(t,0,u.right));case"nest":return K(Q(u.left.indent,G),n(t+u.left.indent,u.left.indent,u.right));default:throw Error("unnexpected document type: ".concat(u.left.type))}case"union":return function(t,n,a,r){return function e(t,n,a){if(t<0||n<0)return!1;switch(a.type){case"nil":return!0;case"compose":switch(a.left.type){case"text":return e(t-a.left.text.length,n-a.left.text.length,a.right);case"line":return!0;default:throw Error("unnexpected document type: ".concat(a.left.type))}default:throw Error("unnexpected document type: ".concat(a.type))}}(e-n,t-n,a)?a:r}(a,r,n(a,r,u.left),n(a,r,u.right));default:throw Error("unnexpected document type: ".concat(u.type))}}return function(e){return function e(t){switch(t.type){case"nil":return"";case"compose":return e(t.left)+e(t.right);case"nest":return e(t.rest)+" ".repeat(t.indent);case"text":return t.text;case"line":return"\n";default:throw Error("unnexpected document type: ".concat(t.type))}}(n(t,0,e))}}function ee(e,t){return K(e,K(D(" "),t))}function te(e,t){return K(e,K(G,t))}function ne(e,t){return 0===t.length?U:1===t.length?t[0]:e(t[0],ne(e,t.splice(1)))}function ae(e){return ne(ee,e)}function re(e){return ne(te,e)}function ue(e){return ne(K,e)}var le=function(e,t,n,a){return Z(n,a)(ne(function(e,t){return K(e,K(G,K(G,K(G,t))))},[].concat(Object(i.a)(e.map(function(e){var t=u(e.name),n=ae(e.params.map(function(e){return u(e.name)})),a=re(e.examples.map(function(e){var n=re(e.inputs.map(function(e){return u(e.prog)})),a=u(e.want);return X(Q(1,re([D("(check-expect"),Q(1,re([ue([D("("),t]),ue([n,D(")")])])),ue([a,D(")")])])))})),l=re(e.formulas.map(r)),c=Q(2,X(re([ae([D("(define"),ue([D("("),t]),ue([n,D(")")])]),ue([l,D(")")])])));return re([c,G,a])})),[U])));function r(e){if(z(e)){var t=ae(e.thenChildren.map(r));return Q(2,re([D("(cond"),Q(1,re([ue([D("["),u(e.prog)]),ue([t,D("])")])]))]))}return u(e.prog)}function u(e){return D(e===L?"...":"string"===typeof e?e:t(e))}},ce=(n(18),{yo:"don't actually change anything"}),ie="./images/",oe=0;function me(){return oe++}function se(e){return void 0===e?oe:oe+e}var fe=T;function pe(e,t){if(e.type!==t.type)return!1;if(e.type===w)return null===e.value||null===t.value?e.value===t.value:pe(e.value.a,t.value.a)&&pe(e.value.d,t.value.d);if(e.type===d){if(e.value.args.length!==t.value.args.length)return!1;var n=pe(e.value.funct,t.value.funct),a=e.value.args.map(function(e,n){return pe(e,t.value.args[n])}).every(function(e){return e});return n&&a}return e.value===t.value}function he(e){return r.a.createElement("div",{className:"cross_button"},r.a.createElement("input",{type:"image",style:e.style,src:"./images/smallCross.png",alt:"Remove",title:e.title,onClick:e.onClick}))}var ve=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(f.a)(t).call(this,e))).state={text:""},n.textChange=n.textChange.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"textChange",value:function(e){var t=e.target.value;this.setState(function(e){return{text:t}}),this.props.isValid(t)?this.props.onValid(t):""!==t||this.props.dummy||this.props.onEmpty()}},{key:"render",value:function(){var e,t;return e=this.props.dummy&&""===this.state.text?"dummy_input":this.props.isValid(this.state.text)?"valid_input":""===this.state.text?"empty_input":"invalid_input",t=0===this.state.text.length?this.props.placeholder.length:Math.max(this.state.text.length+2,4),r.a.createElement("input",{className:e,size:t,placeholder:this.props.placeholder,type:"text",value:this.state.text,onChange:this.textChange})}}]),t}(r.a.Component);function de(e){function t(t,n){var a;a=-1!==e.tables.indexOf(n)?e.tables.map(function(e){return e===n?t:e}):[].concat(Object(i.a)(e.tables),[t]),e.programChange(a)}function n(t,n){var a=e.tables.filter(function(e){return e!==n}).map(function(e){return{name:e.name,binding:null}}),r=n.params.map(function(e){return{name:e,binding:null}}),u=[].concat(Object(i.a)(S),Object(i.a)(a),Object(i.a)(r));return C.test(t)&&!function(e,t){return t.reduce(function(t,n){return!!t||n.name===e},!1)}(t,u)}var a=e.tables.map(function(a){return r.a.createElement("div",{key:a.key,className:"table_method"},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ve,{dummy:!1,placeholder:"Table Name",isValid:function(e){return n(e,a)},onValid:function(e){return t(Object(c.a)({},a,{name:e}),a)},onEmpty:function(){return t(Object(c.a)({},a,{name:L}),a)}}),r.a.createElement(he,{onClick:function(){return function(t){var n=e.tables.filter(function(e){return e!==t});e.programChange(n)}(a)},title:"Remove this table"})),r.a.createElement(ye,{table:a,tableNames:e.tables.map(function(e){return e.name}),tableChange:function(e){return t(e,a)}}))}),u=r.a.createElement("div",{key:se(),className:"table_method"},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ve,{dummy:!0,placeholder:"Table Name",isValid:function(e){return n(e,{params:[]})},onValid:function(e){return t({name:e,examples:[],formulas:[],params:[],key:me()},{})}})),r.a.createElement(ye,{table:{name:L,examples:[],formulas:[],params:[],key:se()},tableNames:e.tables.map(function(e){return e.name}),tableChange:function(e){return t(e,{})}}));return r.a.createElement("div",null,[].concat(Object(i.a)(a),[u]))}function ye(e){function t(t){e.tableChange(Object(c.a)({},e.table,{formulas:t}))}return r.a.createElement("table",{className:"html_table"},r.a.createElement(ge,{params:e.table.params,examples:e.table.examples,tableNames:e.tableNames,paramsExamplesChange:function(t,n){e.tableChange(Object(c.a)({},e.table,{params:t,examples:n}))},formulas:e.table.formulas,formulasChange:t}),r.a.createElement(we,{examples:e.table.examples,formulas:e.table.formulas,paramNames:e.table.params.map(function(e){return e.name}),examplesFormulasChange:function(t,n){e.tableChange(Object(c.a)({},e.table,{examples:t,formulas:n}))},formulasChange:t}))}function ge(e){function t(e){var t=!0;try{A(e)}catch(n){if(!(n instanceof SyntaxError))throw n;t=!1}return t}function n(t,n){var a;a=-1===e.formulas.indexOf(n)?[].concat(Object(i.a)(e.formulas),[t]):e.formulas.map(function(e){return e===n?t:e}),e.formulasChange(a)}function a(e){return z(e)?e.thenChildren.reduce(function(e,t){return e+a(t)},2):1}var u=e.formulas.reduce(function(e,t){return Math.max(e,function e(t,n){return z(t)?t.thenChildren.reduce(function(t,a){return Math.max(t,e(a,n+1))},n+1):n}(t,0))},0),l=e.params.length,o=e.formulas.map(function(u){return r.a.createElement("th",{key:u.key,colSpan:a(u)},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ve,{placeholder:"Formula",dummy:!1,isValid:t,onValid:function(e){return n(Object(c.a)({},u,{prog:A(e)}),u)},onEmpty:function(){return n(Object(c.a)({},u,{prog:L}),u)}}),r.a.createElement(he,{title:"Remove formula",onClick:function(){return function(t){var n=e.formulas.filter(function(e){return e!==t});e.formulasChange(n)}(u)}})))}),m=r.a.createElement("th",{key:se(),colSpan:1},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ve,{dummy:!0,placeholder:"Formula",isValid:t,onValid:function(t){return n({prog:A(t),outputs:e.examples.map(function(e){return L}),key:me()},{})}}))),s=function e(t){return 0===t?[]:1===t?[1]:[].concat(Object(i.a)(e(t-1)),[t])}(u).map(function(t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{colSpan:l+2}),e.formulas.map(function(a){return r.a.createElement(Ee,{key:a.key,formula:a,depth:t,numExamples:e.examples.length,formulaChange:function(e){return n(e,a)}})}))});return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(be,{params:e.params,examples:e.examples,tableNames:e.tableNames,paramsExamplesChange:e.paramsExamplesChange}),[].concat(Object(i.a)(o),[m])),s)}function be(e){function t(t,n){var a=e.params.filter(function(e){return e!==n}).map(function(e){return{name:e.name,binding:null}}),r=e.tableNames.map(function(e){return{name:e,binding:null}}),u=[].concat(Object(i.a)(S),Object(i.a)(r),Object(i.a)(a));return C.test(t)&&!function(e,t){return t.reduce(function(t,n){return!!t||n.name===e},!1)}(t,u)}function n(t,n){var a,r;-1===e.params.indexOf(n)?(a=[].concat(Object(i.a)(e.params),[t]),r=e.examples.map(function(e){return Object(c.a)({},e,{inputs:[].concat(Object(i.a)(e.inputs),[{prog:L,key:me()}])})})):(a=e.params.map(function(e){return e===n?t:e}),r=e.examples),e.paramsExamplesChange(a,r)}var a=e.params.map(function(a){return r.a.createElement("th",{key:a.key},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ve,{dummy:!1,placeholder:"Parameter",isValid:function(e){return t(e,a)},onValid:function(e){return n(Object(c.a)({},a,{name:e}),a)},onEmpty:function(){return n(Object(c.a)({},a,{name:L}),a)}}),r.a.createElement(he,{title:"remove this parameter",onClick:function(){return function(t){var n=e.params.indexOf(t),a=e.params.filter(function(e){return e!==t}),r=e.examples.map(function(e){return Object(c.a)({},e,{inputs:e.inputs.filter(function(e,t){return t!==n})})});e.paramsExamplesChange(a,r)}(a)}})))}),u=r.a.createElement("th",{key:se()},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ve,{dummy:!0,placeholder:"Parameter",isValid:function(e){return t(e,{})},onValid:function(e){return n({name:e,key:me()},{})}})));return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null),r.a.createElement(r.a.Fragment,null,[].concat(Object(i.a)(a),[u])))}function Ee(e){function t(e){var t=!0;try{A(e)}catch(n){if(!(n instanceof SyntaxError))throw n;t=!1}return t}function n(t,n){var a;a=-1===e.formula.thenChildren.indexOf(n)?[].concat(Object(i.a)(e.formula.thenChildren),[t]):e.formula.thenChildren.map(function(e){return e===n?t:e}),e.formulaChange(Object(c.a)({},e.formula,{thenChildren:a}))}function a(e){return z(e)?e.thenChildren.reduce(function(e,t){return e+a(t)},2):1}if(e.depth>1)return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null),z(e.formula)?r.a.createElement(r.a.Fragment,null,e.formula.thenChildren.map(function(t){return r.a.createElement(Ee,{key:t.key,formula:t,depth:e.depth-1,numExamples:e.numExamples,formulaChange:function(e){return n(e,t)}})}),r.a.createElement("th",null)):r.a.createElement("script",null));if(z(e.formula)){var u=e.formula.thenChildren.map(function(u){return r.a.createElement("th",{key:u.key,colSpan:a(u)},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ve,{dummy:!1,placeholder:"Formula",isValid:t,onValid:function(e){return n(Object(c.a)({},u,{prog:A(e)}),u)},onEmpty:function(){return n(Object(c.a)({},u,{prog:L}),u)}}),r.a.createElement(he,{title:"Remove formula",onClick:function(){return function(t){var n=e.formula.thenChildren.filter(function(e){return e!==t});e.formulaChange(Object(c.a)({},e.formula,{thenChildren:n}))}(u)}})))}),l=r.a.createElement("th",{key:se(),colSpan:1},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ve,{dummy:!0,placeholder:"Formula",isValid:t,onValid:function(t){return n({prog:A(t),outputs:Array(e.numExamples).fill(L),key:me()},{})}})));return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null),r.a.createElement(r.a.Fragment,null,[].concat(Object(i.a)(u),[l])))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null))}function we(e){function t(t,n){var a,r,u=-1!==e.examples.indexOf(n);if(t===ce)return u;return u?(a=e.examples.map(function(e){return e===n?t:e}),r=e.formulas):(a=[].concat(Object(i.a)(e.examples),[t]),r=e.formulas.map(function e(t){var n=[].concat(Object(i.a)(t.outputs),[L]);if(z(t)){var a=t.thenChildren.map(e);return Object(c.a)({},t,{outputs:n,thenChildren:a})}return Object(c.a)({},t,{outputs:n})})),e.examplesFormulasChange(a,r),!0}var n=e.examples.map(function(n,a){return r.a.createElement("tr",{key:n.key},r.a.createElement("td",null,r.a.createElement(he,{onClick:function(){return function(t){var n=e.examples.indexOf(t),a=e.examples.filter(function(e){return e!==t}),r=e.formulas.map(function e(t){var a=t.outputs.filter(function(e,t){return t!==n});if(z(t)){var r=t.thenChildren.map(e);return Object(c.a)({},t,{outputs:a,thenChildren:r})}return Object(c.a)({},t,{outputs:a})});e.examplesFormulasChange(a,r)}(n)},title:"Remove this example"})),r.a.createElement(xe,{dummy:!1,inputs:n.inputs,inputsChange:function(e){return t(Object(c.a)({},n,{inputs:e}),n)}}),r.a.createElement("td",null),r.a.createElement(Ce,{dummy:!1,formulas:e.formulas,want:n.want,row:a}),r.a.createElement("td",null),r.a.createElement(ke,{dummy:!1,wantChange:function(e){return t(Object(c.a)({},n,{want:e}),n)}}))}),a=r.a.createElement("tr",{key:se(e.paramNames.length)},r.a.createElement("td",null),r.a.createElement(xe,{dummy:!0,inputs:e.paramNames.map(function(e,t){return{key:se(t)}}),inputsChange:function(e){return t({inputs:e,want:L,key:me()},{})}}),r.a.createElement("td",null),r.a.createElement(Ce,{dummy:!0,formulas:e.formulas}),r.a.createElement("td",null),r.a.createElement(ke,{dummy:!0,wantChange:function(n){return t({want:n,inputs:e.paramNames.map(function(e){return{prog:L,key:me()}}),key:me()},{})}}));return r.a.createElement("tbody",null,[].concat(Object(i.a)(n),[a]))}function xe(e){function t(e){try{I(A(e),S)}catch(t){return!1}return!0}function n(t,n){var a;a=e.dummy?e.inputs.map(function(e){return e===n?Object(c.a)({},t,{key:me()}):{prog:L,key:me()}}):e.inputs.map(function(e){return e===n?t:e}),e.inputsChange(a)}return r.a.createElement(r.a.Fragment,null,e.inputs.map(function(a,u){return r.a.createElement("td",{key:a.key},r.a.createElement(ve,{dummy:e.dummy,placeholder:"Input",isValid:t,onValid:e.dummy?function(e){return n({prog:I(A(e),S)},a)}:function(e){return n(Object(c.a)({},a,{prog:I(A(e),S)}),a)},onEmpty:function(){return n(Object(c.a)({},a,{prog:L}),a)}}))}))}function Ce(e){function t(e){return z(e)?e.thenChildren.reduce(function(e,n){return e+t(n)},2):1}return e.dummy?r.a.createElement(r.a.Fragment,null,e.formulas.map(function(e){return r.a.createElement("td",{key:e.key,colSpan:t(e)})})):r.a.createElement(r.a.Fragment,null,e.formulas.map(function(t){return r.a.createElement(r.a.Fragment,{key:t.key},r.a.createElement(Oe,{output:t.outputs[e.row],want:e.want}),z(t)?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{formulas:t.thenChildren,want:e.want,row:e.row}),r.a.createElement("td",null)):r.a.createElement("script",null))}))}function Oe(e){if(e.output===B)return r.a.createElement("td",{className:"gray"});if(e.output===J)return r.a.createElement("td",{className:"pink"});if(e.output===L)return r.a.createElement("td",{className:"yellow"});var t,n,a,u=e.output,l=L;if(e.want!==L)try{l=I(e.want,S)}catch(c){u=c}return u instanceof Error?(t=u.message,n=!0):(t=fe(u),n=!1),a=n?r.a.createElement("img",{src:ie+"frowneyface.png",alt:"Error!",style:{float:"right"},title:"Oh no! You got an error!"}):l===L?"":pe(u,l)?r.a.createElement("img",{src:ie+"smileyface.png",alt:"Yay!",style:{float:"right"},title:"Yay! It's right!"}):"",r.a.createElement("td",{className:"output"},t,a)}function ke(e){return r.a.createElement("td",null,r.a.createElement(ve,{dummy:e.dummy,placeholder:"Want",isValid:function(e){try{I(A(e),S)}catch(t){return!1}return!0},onValid:function(t){return e.wantChange(I(A(t),S))},onEmpty:function(){return e.wantChange(L)}}))}var je=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(s.a)(this,Object(f.a)(t).call(this,e));var a=[{examples:[{inputs:[{prog:L,key:me()}],want:L,key:me()}],formulas:[{prog:L,outputs:[L],key:me()}],params:[{name:L,key:me()}],name:L,key:me()}];return n.state={tables:a},n.programChange=n.programChange.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"calculate",value:function(e){function t(e){return function(t){if(t.length!==e.params.length)throw new Error("Arity Mismatch, expected "+e.params.length+" argument"+(1===e.params.length?"":"s"));var n=e.examples.reduce(function(n,a){if(void 0!==n)return n;if(a.inputs.reduce(function(e,n,a){return e&&pe(n.prog,t[a])},!0)){if(a.want===L)throw new ReferenceError("(".concat(e.name," ").concat(t.map(fe).join(" "),") doesn't have a want"));return a.want}},void 0);if(void 0===n)throw new ReferenceError(t.map(fe).join()+" is not an example in "+e.name);return n}}var n=e.map(function(e){return{name:e.name,binding:{value:t(e),type:y}}}),a=[].concat(Object(i.a)(S),Object(i.a)(n));return e.map(function(e){function t(n,r){var u=r.map(function(t){if(t===B)return B;if(t===J)return J;if(!t.inputs.every(function(e){return e.prog!==L})||n.prog===L)return L;var r=e.params.map(function(e,n){return{name:e.name,binding:t.inputs[n].prog}}),u=[].concat(Object(i.a)(a),Object(i.a)(r));try{var l=I(n.prog,u)}catch(c){l=c}return l});if(q(u)||void 0!==n.thenChildren&&0!==n.thenChildren.length){if(void 0===n.thenChildren)var l=[];else{var o=r.map(function(e,t){return function(e,t){return e===B||!1===t.value?B:"boolean"!==typeof t.value?J:e}(e,u[t])});l=n.thenChildren.map(function(e){return t(e,o)})}return Object(c.a)({},n,{outputs:u,thenChildren:l})}var m=Object(c.a)({},n,{outputs:u});return delete m.thenChildren,m}if(e.name!==L&&e.params.every(function(e){return e.name!==L})){var n=e.formulas.map(function(n){return t(n,e.examples)});return Object(c.a)({},e,{formulas:n})}return Object(c.a)({},e)})}},{key:"programChange",value:function(e){var t=this.calculate(e);this.setState(function(e){return{tables:t}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"unparse_mode_button",id:"cons_mode_button",onInput:function(){fe=T,e.setState(function(e){return e})},defaultChecked:!0}),r.a.createElement("label",{htmlFor:"cons_mode_button"},"cons mode"),r.a.createElement("input",{type:"radio",name:"unparse_mode_button",id:"list_mode_button",onInput:function(){fe=M,e.setState(function(e){return e})}}),r.a.createElement("label",{htmlFor:"list_mode_button"},"list mode"),r.a.createElement(de,{tables:this.state.tables,programChange:this.programChange}),r.a.createElement("textarea",{rows:20,cols:100,className:"bsl_io",readOnly:!0,value:le(this.state.tables,fe,100,50)}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.16fbbd0c.chunk.js.map