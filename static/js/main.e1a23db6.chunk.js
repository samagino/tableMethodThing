(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(10),l=n.n(u),c=(n(17),n(2)),i=n(1),o=n(4),m=n(5),s=n(7),f=n(6),p=n(3),h=n(8),v=0,d=1,y=2,g=3,b=4,E=5,w=6,x=7,C=[{name:"+",binding:{type:y,value:function(e){return e.forEach(function(e){return F(e,g)}),e.reduce(function(e,t){return{value:e.value+t.value,type:g}})}}},{name:"-",binding:{type:y,value:function(e){return e.forEach(function(e){return F(e,g)}),e.reduce(function(e,t){return{value:e.value-t.value,type:g}})}}},{name:"*",binding:{type:y,value:function(e){return e.forEach(function(e){return F(e,g)}),e.reduce(function(e,t){return{value:e.value*t.value,type:g}})}}},{name:"/",binding:{type:y,value:function(e){if(1===e.length){var t=e[0];return F(t,g),{value:1/t.value,type:g}}if(2===e.length){var n=e[0],a=e[1];return F(n,g),F(a,g),{value:n.value/a.value,type:g}}return e.forEach(function(e){return F(e,g)}),{value:!1,type:b}}}},{name:"car",binding:{type:y,value:V}},{name:"first",binding:{type:y,value:V}},{name:"cdr",binding:{type:y,value:S}},{name:"rest",binding:{type:y,value:S}},{name:"cons",binding:{type:y,value:function(e){if(2!==e.length)throw new Error("arity mismatch");var t=e[0],n=e[1];return F(n,w),{value:{a:t,d:n},type:w}}}},{name:"list",binding:{type:y,value:function(e){return e.reverse().reduce(function(e,t){return{value:{a:t,d:e},type:w}},{value:null,type:w})}}},{name:"not",binding:{type:y,value:function(e){if(1!==e.length)throw new Error("arity mismatch");return{value:!1===e[0].value,type:b}}}},{name:"and",binding:{type:y,value:function(e){return e.reduce(function(e,t){return!1!==e.value?t:{value:!1,type:b}},{value:!0,type:b})}}},{name:"or",binding:{type:y,value:function(e){return e.reduce(function(e,t){return!1!==e.value?e:t},{value:!0,type:b})}}},{name:"if",binding:{type:y,value:function(e){if(3!==e.length)throw new Error("arity mismatch");var t=e[0],n=e[1],a=e[2];return F(t,b),t.value?n:a}}},{name:"eqv?",binding:{type:y,value:function(e){if(2!==e.length)throw new Error("arity mismatch");var t=e[0],n=e[1];return{value:t.value===n.value,type:b}}}},{name:"null?",binding:{type:y,value:R}},{name:"empty?",binding:{type:y,value:R}},{name:"cons?",binding:{type:y,value:function(e){if(1!==e.length)throw new Error("arity mismatch");var t=e[0];return{value:null!==t.value&&t.type===w,type:b}}}},{name:"=",binding:{type:y,value:function(e){e.forEach(function(e){return F(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value===t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:">",binding:{type:y,value:function(e){e.forEach(function(e){return F(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value>t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:">=",binding:{type:y,value:function(e){e.forEach(function(e){return F(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value>=t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:"<",binding:{type:y,value:function(e){e.forEach(function(e){return F(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value<t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:"<=",binding:{type:y,value:function(e){e.forEach(function(e){return F(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value<=t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:"true",binding:{type:b,value:!0}},{name:"false",binding:{type:b,value:!1}},{name:"null",binding:{type:w,value:null}},{name:"empty",binding:{type:w,value:null}}];function O(e){var t=/^[^\s",'`()[\]{}|;#]+/,n=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?=$|[\s",'`()[\]{}|;#])/,a=/^#(?:[tfTF]|true|false)(?=$|[\s",'`()[\]{}|;#])/,r=/^"[^\\"]*"/;if(n.test(e)){var u=e.match(n)[0],l=e.slice(u.length).trim();return{prog:{value:+u,type:g},rest:l}}if(t.test(e)){var c=e.match(t)[0],o=e.slice(c.length).trim();return{prog:{value:c,type:v},rest:o}}if(a.test(e)){var m=e.match(a)[0],s=e.slice(m.length).trim();return{prog:{value:"t"===m[1].toLowerCase(),type:b},rest:s}}if(r.test(e)){var f=e.match(r);return{prog:{value:f[0],type:E},rest:e.slice(f[0].length).trim()}}if(/^\(/.test(e)){var p=O(e=e.slice(1).trim()),h=p.prog;e=p.rest;for(var y=[];")"!==e[0];){var C=O(e);y=[].concat(Object(i.a)(y),[C.prog]),e=C.rest}return{prog:{value:{funct:h,args:y},type:d},rest:e.slice(1).trim()}}if(/^'/.test(e))return function e(t){var n=/^[^\s",'`()[\]{}|;#]+/;var a=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?=$|[\s",'`()[\]{}|;#])/;var r=/^#(?:[tfTF]|true|false)(?=$|[\s",'`()[\]{}|;#])/;var u=/^"[^\\"]*"/;if(/^\(/.test(t)){t=t.slice(1).trim();for(var l=[];")"!==t[0];){var c=e(t);l=[c.prog].concat(Object(i.a)(l)),t=c.rest}var o=t.slice(1).trim(),m=l.reduce(function(e,t){return{value:{a:t,d:e},type:w}},{value:null,type:w});return{prog:m,rest:o}}if(a.test(t)){var s=t.match(a),f=s[0],p=t.slice(f.length).trim(),h={value:+f,type:g};return{prog:h,rest:p}}if(r.test(t)){var v=t.match(r),d=v[0],y=t.slice(d.length).trim(),C={value:"t"===d.charAt(1).toLowerCase(),type:b};return{prog:C,rest:y}}if(u.test(t)){var O=t.match(u),k={value:O[0],type:E},j=t.slice(O[0].length).trim();return{prog:k,rest:j}}if(n.test(t)){var N=t.match(n),_=N[0],F={value:"'"+_,type:x},V=t.slice(N[0].length).trim();return{prog:F,rest:V}}throw new SyntaxError('Invalid Syntax: "'+t+'"')}(e.slice(1).trim());throw new SyntaxError('Invalid Syntax: "'+e+'"')}function k(e,t){switch(e.type){case g:case b:case E:case w:case x:return e;case v:return function(e){var n=t.reduce(function(t,n){return void 0!==t?t:n.name===e?n.binding:void 0},void 0);if(void 0===n)throw new ReferenceError(e+" isn't defined");return n}(e.value);case y:return e;case d:var n=k(e.value.funct,t),a=e.value.args.map(function(e){return k(e,t)});return F(n,y),n.value(a);default:throw new TypeError("Unknown Type "+e.value)}}function j(e){switch(e.type){case g:return e.value;case b:return"#"+(e.value?"true":"false");case E:return e.value;case w:return null===e.value?"'()":"(cons ".concat(j(e.value.a)," ").concat(j(e.value.d),")");case x:case v:return e.value;case y:return"function";case d:return"(".concat(j(e.value.funct)," ").concat(e.value.args.map(j).join(" "),")");default:return"error or something"}}function N(e){switch(e.type){case g:return e.value;case b:return"#"+(e.value?"true":"false");case E:return e.value;case w:for(var t="";null!==e.value;)t+=" "+N(e.value.a),e=e.value.d;return"(list".concat(t,")");case x:case v:return e.value;case y:return"function";case d:return"(".concat(N(e.value.funct)," ").concat(e.value.args.map(N).join(" "),")");default:return"error or something"}}function _(e){var t=O(e);switch(t.rest){case"":break;default:throw new SyntaxError("Parsing Error")}return t.prog}function F(e,t){var n="";switch(t){case v:n="variable";break;case d:n="application";break;case y:n="function";break;case g:n="number";break;case b:n="boolean";break;case E:n="string";break;case w:n="list";break;case x:n="symbol";break;default:n="???"}if(e.type!==t)throw new TypeError(j(e)+" ain't a "+n)}function V(e){if(1!==e.length)throw new Error("arity mismatch");var t=e[0];return F(t,w),t.value.a}function S(e){if(1!==e.length)throw new Error("arity mismatch");var t=e[0];return F(t,w),t.value.d}function R(e){if(1!==e.length)throw new Error("arity mismatch");var t=e[0];return{value:null===t.value&&t.type===w,type:b}}var I={gray:"gray"},T={pink:"pink"},$={yellow:"yellow"};function A(e){return 0!==e.length&&e.every(function(e){return e.type===b||e===I})}function M(e){return A(e.outputs)||void 0!==e.thenChildren}var z={type:"nil"};function P(e){return""===e?z:{type:"text",text:String(e)}}var W={type:"line"};function Y(e,t){return{type:"union",left:e,right:t}}function B(e,t){switch(e.type){case"nil":return t;case"compose":return{type:"compose",left:e.left,right:B(e.right,t)};case"union":return Y(B(e.left,t),B(e.right,t));default:return{type:"compose",left:e,right:t}}}function J(e,t){switch(t.type){case"nil":return z;case"compose":return B(J(e,t.left),J(e,t.right));case"nest":return{type:"nest",indent:t.indent+e,rest:t.rest};case"text":return t;case"line":return{type:"nest",indent:e,rest:t};case"union":return Y(J(e,t.left),J(e,t.right));default:throw Error("unnexpected document type: ".concat(t.type))}}function L(e){return Y(function e(t){switch(t.type){case"nil":return z;case"compose":return B(e(t.left),e(t.right));case"nest":return e(t.rest);case"text":return P(t.text);case"line":return P(" ");case"union":return e(t.left);default:throw Error("unnexpected document type: ".concat(t.type))}}(e),e)}function Z(e,t){function n(a,r,u){switch(u.type){case"nil":return z;case"compose":switch(u.left.type){case"text":return B(u.left,n(a,r+u.left.text.length,u.right));case"line":return B(W,n(t,0,u.right));case"nest":return B(J(u.left.indent,W),n(t+u.left.indent,u.left.indent,u.right));default:throw Error("unnexpected document type: ".concat(u.left.type))}case"union":return function(t,n,a,r){return function e(t,n,a){if(t<0||n<0)return!1;switch(a.type){case"nil":return!0;case"compose":switch(a.left.type){case"text":return e(t-a.left.text.length,n-a.left.text.length,a.right);case"line":return!0;default:throw Error("unnexpected document type: ".concat(a.left.type))}default:throw Error("unnexpected document type: ".concat(a.type))}}(e-n,t-n,a)?a:r}(a,r,n(a,r,u.left),n(a,r,u.right));default:throw Error("unnexpected document type: ".concat(u.type))}}return function(e){return function e(t){switch(t.type){case"nil":return"";case"compose":return e(t.left)+e(t.right);case"nest":return e(t.rest)+" ".repeat(t.indent);case"text":return t.text;case"line":return"\n";default:throw Error("unnexpected document type: ".concat(t.type))}}(n(t,0,e))}}function q(e,t){return B(e,B(P(" "),t))}function U(e,t){return B(e,B(W,t))}function D(e,t){return 0===t.length?z:1===t.length?t[0]:e(t[0],D(e,t.splice(1)))}function G(e){return D(q,e)}function H(e){return D(U,e)}function K(e){return D(B,e)}var Q=function(e,t,n,a){return Z(n,a)(D(function(e,t){return B(e,B(W,B(W,B(W,t))))},[].concat(Object(i.a)(e.map(function(e){var t=u(e.name),n=G(e.params.map(function(e){return u(e.name)})),a=H(e.examples.map(function(e){var n=H(e.inputs.map(function(e){return u(e.prog)})),a=u(e.want);return L(J(1,H([P("(check-expect"),J(1,H([K([P("("),t]),K([n,P(")")])])),K([a,P(")")])])))})),l=H(e.formulas.map(r)),c=J(2,L(H([G([P("(define"),K([P("("),t]),K([n,P(")")])]),K([l,P(")")])])));return H([c,W,a])})),[z])));function r(e){if(M(e)){var t=G(e.thenChildren.map(r));return J(2,H([P("(cond"),J(1,H([K([P("["),u(e.prog)]),K([t,P("])")])]))]))}return u(e.prog)}function u(e){return P(e===$?"...":"string"===typeof e?e:t(e))}},X=(n(18),{yo:"don't actually change anything"}),ee="./images/",te=0;function ne(){return te++}function ae(e){return void 0===e?te:te+e}var re=j;function ue(e,t){if(e.type!==t.type)return!1;if(e.type===w)return null===e.value||null===t.value?e.value===t.value:ue(e.value.a,t.value.a)&&ue(e.value.d,t.value.d);if(e.type===d){if(e.value.args.length!==t.value.args.length)return!1;var n=ue(e.value.funct,t.value.funct),a=e.value.args.map(function(e,n){return ue(e,t.value.args[n])}).every(function(e){return e});return n&&a}return e.value===t.value}function le(e){return r.a.createElement("div",{className:"cross_button"},r.a.createElement("input",{type:"image",style:e.style,src:"./images/smallCross.png",alt:"Remove",title:e.title,onClick:e.onClick}))}var ce=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(f.a)(t).call(this,e))).state={text:""},n.textChange=n.textChange.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"textChange",value:function(e){var t=e.target.value;this.setState(function(e){return{text:t}}),this.props.isValid(t)?this.props.onValid(t):""!==t||this.props.dummy||this.props.onEmpty()}},{key:"render",value:function(){var e,t;return e=this.props.dummy&&""===this.state.text?"dummy_input":this.props.isValid(this.state.text)?"valid_input":""===this.state.text?"empty_input":"invalid_input",t=0===this.state.text.length?this.props.placeholder.length:Math.max(this.state.text.length+2,4),r.a.createElement("input",{className:e,size:t,placeholder:this.props.placeholder,type:"text",value:this.state.text,onChange:this.textChange})}}]),t}(r.a.Component);function ie(e){function t(t,n){var a;a=-1!==e.tables.indexOf(n)?e.tables.map(function(e){return e===n?t:e}):[].concat(Object(i.a)(e.tables),[t]),e.programChange(a)}function n(t,n){var a=e.tables.filter(function(e){return e!==n}).map(function(e){return{name:e.name,binding:null}}),r=n.params.map(function(e){return{name:e,binding:null}}),u=[].concat(Object(i.a)(C),Object(i.a)(a),Object(i.a)(r));return/^[a-zA-Z+\-*\/?=><]+$/.test(t)&&!function(e,t){return t.reduce(function(t,n){return!!t||n.name===e},!1)}(t,u)}var a=e.tables.map(function(a){return r.a.createElement("div",{key:a.key,className:"table_method"},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ce,{dummy:!1,placeholder:"Table Name",isValid:function(e){return n(e,a)},onValid:function(e){return t(Object(c.a)({},a,{name:e}),a)},onEmpty:function(){return t(Object(c.a)({},a,{name:$}),a)}}),r.a.createElement(le,{onClick:function(){return function(t){var n=e.tables.filter(function(e){return e!==t});e.programChange(n)}(a)},title:"Remove this table"})),r.a.createElement(oe,{table:a,tableNames:e.tables.map(function(e){return e.name}),tableChange:function(e){return t(e,a)}}))}),u=r.a.createElement("div",{key:ae(),className:"table_method"},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ce,{dummy:!0,placeholder:"Table Name",isValid:function(e){return n(e,{params:[]})},onValid:function(e){return t({name:e,examples:[],formulas:[],params:[],key:ne()},{})}})),r.a.createElement(oe,{table:{name:$,examples:[],formulas:[],params:[],key:ae()},tableNames:e.tables.map(function(e){return e.name}),tableChange:function(e){return t(e,{})}}));return r.a.createElement("div",null,[].concat(Object(i.a)(a),[u]))}function oe(e){function t(t){e.tableChange(Object(c.a)({},e.table,{formulas:t}))}return r.a.createElement("table",{className:"html_table"},r.a.createElement(me,{params:e.table.params,examples:e.table.examples,tableNames:e.tableNames,paramsExamplesChange:function(t,n){e.tableChange(Object(c.a)({},e.table,{params:t,examples:n}))},formulas:e.table.formulas,formulasChange:t}),r.a.createElement(pe,{examples:e.table.examples,formulas:e.table.formulas,paramNames:e.table.params.map(function(e){return e.name}),examplesFormulasChange:function(t,n){e.tableChange(Object(c.a)({},e.table,{examples:t,formulas:n}))},formulasChange:t}))}function me(e){function t(e){var t=!0;try{_(e)}catch(n){if(!(n instanceof SyntaxError))throw n;t=!1}return t}function n(t,n){var a;a=-1===e.formulas.indexOf(n)?[].concat(Object(i.a)(e.formulas),[t]):e.formulas.map(function(e){return e===n?t:e}),e.formulasChange(a)}function a(e){return M(e)?e.thenChildren.reduce(function(e,t){return e+a(t)},2):1}var u=e.formulas.reduce(function(e,t){return Math.max(e,function e(t,n){return M(t)?t.thenChildren.reduce(function(t,a){return Math.max(t,e(a,n+1))},n+1):n}(t,0))},0),l=e.params.length,o=e.formulas.map(function(u){return r.a.createElement("th",{key:u.key,colSpan:a(u)},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ce,{placeholder:"Formula",dummy:!1,isValid:t,onValid:function(e){return n(Object(c.a)({},u,{prog:_(e)}),u)},onEmpty:function(){return n(Object(c.a)({},u,{prog:$}),u)}}),r.a.createElement(le,{title:"Remove formula",onClick:function(){return function(t){var n=e.formulas.filter(function(e){return e!==t});e.formulasChange(n)}(u)}})))}),m=r.a.createElement("th",{key:ae(),colSpan:1},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ce,{dummy:!0,placeholder:"Formula",isValid:t,onValid:function(t){return n({prog:_(t),outputs:e.examples.map(function(e){return $}),key:ne()},{})}}))),s=function e(t){return 0===t?[]:1===t?[1]:[].concat(Object(i.a)(e(t-1)),[t])}(u).map(function(t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{colSpan:l+2}),e.formulas.map(function(a){return r.a.createElement(fe,{key:a.key,formula:a,depth:t,numExamples:e.examples.length,formulaChange:function(e){return n(e,a)}})}))});return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(se,{params:e.params,examples:e.examples,tableNames:e.tableNames,paramsExamplesChange:e.paramsExamplesChange}),[].concat(Object(i.a)(o),[m])),s)}function se(e){function t(t,n){var a=e.params.filter(function(e){return e!==n}).map(function(e){return{name:e.name,binding:null}}),r=e.tableNames.map(function(e){return{name:e,binding:null}}),u=[].concat(Object(i.a)(C),Object(i.a)(r),Object(i.a)(a));return/^[a-zA-Z+\-*\/?=><]+$/.test(t)&&!function(e,t){return t.reduce(function(t,n){return!!t||n.name===e},!1)}(t,u)}function n(t,n){var a,r;-1===e.params.indexOf(n)?(a=[].concat(Object(i.a)(e.params),[t]),r=e.examples.map(function(e){return Object(c.a)({},e,{inputs:[].concat(Object(i.a)(e.inputs),[{prog:$,key:ne()}])})})):(a=e.params.map(function(e){return e===n?t:e}),r=e.examples),e.paramsExamplesChange(a,r)}var a=e.params.map(function(a){return r.a.createElement("th",{key:a.key},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ce,{dummy:!1,placeholder:"Parameter",isValid:function(e){return t(e,a)},onValid:function(e){return n(Object(c.a)({},a,{name:e}),a)},onEmpty:function(){return n(Object(c.a)({},a,{name:$}),a)}}),r.a.createElement(le,{title:"remove this parameter",onClick:function(){return function(t){var n=e.params.indexOf(t),a=e.params.filter(function(e){return e!==t}),r=e.examples.map(function(e){return Object(c.a)({},e,{inputs:e.inputs.filter(function(e,t){return t!==n})})});e.paramsExamplesChange(a,r)}(a)}})))}),u=r.a.createElement("th",{key:ae()},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ce,{dummy:!0,placeholder:"Parameter",isValid:function(e){return t(e,{})},onValid:function(e){return n({name:e,key:ne()},{})}})));return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null),r.a.createElement(r.a.Fragment,null,[].concat(Object(i.a)(a),[u])))}function fe(e){function t(e){var t=!0;try{_(e)}catch(n){if(!(n instanceof SyntaxError))throw n;t=!1}return t}function n(t,n){var a;a=-1===e.formula.thenChildren.indexOf(n)?[].concat(Object(i.a)(e.formula.thenChildren),[t]):e.formula.thenChildren.map(function(e){return e===n?t:e}),e.formulaChange(Object(c.a)({},e.formula,{thenChildren:a}))}function a(e){return M(e)?e.thenChildren.reduce(function(e,t){return e+a(t)},2):1}if(e.depth>1)return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null),M(e.formula)?r.a.createElement(r.a.Fragment,null,e.formula.thenChildren.map(function(t){return r.a.createElement(fe,{key:t.key,formula:t,depth:e.depth-1,numExamples:e.numExamples,formulaChange:function(e){return n(e,t)}})}),r.a.createElement("th",null)):r.a.createElement("script",null));if(M(e.formula)){var u=e.formula.thenChildren.map(function(u){return r.a.createElement("th",{key:u.key,colSpan:a(u)},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ce,{dummy:!1,placeholder:"Formula",isValid:t,onValid:function(e){return n(Object(c.a)({},u,{prog:_(e)}),u)},onEmpty:function(){return n(Object(c.a)({},u,{prog:$}),u)}}),r.a.createElement(le,{title:"Remove formula",onClick:function(){return function(t){var n=e.formula.thenChildren.filter(function(e){return e!==t});e.formulaChange(Object(c.a)({},e.formula,{thenChildren:n}))}(u)}})))}),l=r.a.createElement("th",{key:ae(),colSpan:1},r.a.createElement("div",{className:"full_cell"},r.a.createElement(ce,{dummy:!0,placeholder:"Formula",isValid:t,onValid:function(t){return n({prog:_(t),outputs:Array(e.numExamples).fill($),key:ne()},{})}})));return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null),r.a.createElement(r.a.Fragment,null,[].concat(Object(i.a)(u),[l])))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null))}function pe(e){function t(t,n){var a,r,u=-1!==e.examples.indexOf(n);if(t===X)return u;return u?(a=e.examples.map(function(e){return e===n?t:e}),r=e.formulas):(a=[].concat(Object(i.a)(e.examples),[t]),r=e.formulas.map(function e(t){var n=[].concat(Object(i.a)(t.outputs),[$]);if(M(t)){var a=t.thenChildren.map(e);return Object(c.a)({},t,{outputs:n,thenChildren:a})}return Object(c.a)({},t,{outputs:n})})),e.examplesFormulasChange(a,r),!0}var n=e.examples.map(function(n,a){return r.a.createElement("tr",{key:n.key},r.a.createElement("td",null,r.a.createElement(le,{onClick:function(){return function(t){var n=e.examples.indexOf(t),a=e.examples.filter(function(e){return e!==t}),r=e.formulas.map(function e(t){var a=t.outputs.filter(function(e,t){return t!==n});if(M(t)){var r=t.thenChildren.map(e);return Object(c.a)({},t,{outputs:a,thenChildren:r})}return Object(c.a)({},t,{outputs:a})});e.examplesFormulasChange(a,r)}(n)},title:"Remove this example"})),r.a.createElement(he,{dummy:!1,inputs:n.inputs,inputsChange:function(e){return t(Object(c.a)({},n,{inputs:e}),n)}}),r.a.createElement("td",null),r.a.createElement(ve,{dummy:!1,formulas:e.formulas,want:n.want,row:a}),r.a.createElement("td",null),r.a.createElement(ye,{dummy:!1,wantChange:function(e){return t(Object(c.a)({},n,{want:e}),n)}}))}),a=r.a.createElement("tr",{key:ae(e.paramNames.length)},r.a.createElement("td",null),r.a.createElement(he,{dummy:!0,inputs:e.paramNames.map(function(e,t){return{key:ae(t)}}),inputsChange:function(e){return t({inputs:e,want:$,key:ne()},{})}}),r.a.createElement("td",null),r.a.createElement(ve,{dummy:!0,formulas:e.formulas}),r.a.createElement("td",null),r.a.createElement(ye,{dummy:!0,wantChange:function(n){return t({want:n,inputs:e.paramNames.map(function(e){return{prog:$,key:ne()}}),key:ne()},{})}}));return r.a.createElement("tbody",null,[].concat(Object(i.a)(n),[a]))}function he(e){function t(e){try{k(_(e),C)}catch(t){return!1}return!0}function n(t,n){var a;a=e.dummy?e.inputs.map(function(e){return e===n?Object(c.a)({},t,{key:ne()}):{prog:$,key:ne()}}):e.inputs.map(function(e){return e===n?t:e}),e.inputsChange(a)}return r.a.createElement(r.a.Fragment,null,e.inputs.map(function(a,u){return r.a.createElement("td",{key:a.key},r.a.createElement(ce,{dummy:e.dummy,placeholder:"Input",isValid:t,onValid:e.dummy?function(e){return n({prog:k(_(e),C)},a)}:function(e){return n(Object(c.a)({},a,{prog:k(_(e),C)}),a)},onEmpty:function(){return n(Object(c.a)({},a,{prog:$}),a)}}))}))}function ve(e){function t(e){return M(e)?e.thenChildren.reduce(function(e,n){return e+t(n)},2):1}return e.dummy?r.a.createElement(r.a.Fragment,null,e.formulas.map(function(e){return r.a.createElement("td",{key:e.key,colSpan:t(e)})})):r.a.createElement(r.a.Fragment,null,e.formulas.map(function(t){return r.a.createElement(r.a.Fragment,{key:t.key},r.a.createElement(de,{output:t.outputs[e.row],want:e.want}),M(t)?r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,{formulas:t.thenChildren,want:e.want,row:e.row}),r.a.createElement("td",null)):r.a.createElement("script",null))}))}function de(e){if(e.output===I)return r.a.createElement("td",{className:"gray"});if(e.output===T)return r.a.createElement("td",{className:"pink"});if(e.output===$)return r.a.createElement("td",{className:"yellow"});var t,n,a,u=e.output,l=$;if(e.want!==$)try{l=k(e.want,C)}catch(c){u=c}return u instanceof Error?(t=u.message,n=!0):(t=re(u),n=!1),a=n?r.a.createElement("img",{src:ee+"frowneyface.png",alt:"Error!",style:{float:"right"},title:"Oh no! You got an error!"}):l===$?"":ue(u,l)?r.a.createElement("img",{src:ee+"smileyface.png",alt:"Yay!",style:{float:"right"},title:"Yay! It's right!"}):"",r.a.createElement("td",{className:"output"},t,a)}function ye(e){return r.a.createElement("td",null,r.a.createElement(ce,{dummy:e.dummy,placeholder:"Want",isValid:function(e){try{k(_(e),C)}catch(t){return!1}return!0},onValid:function(t){return e.wantChange(k(_(t),C))},onEmpty:function(){return e.wantChange($)}}))}var ge=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(s.a)(this,Object(f.a)(t).call(this,e));var a=[{examples:[{inputs:[{prog:$,key:ne()}],want:$,key:ne()}],formulas:[{prog:$,outputs:[$],key:ne()}],params:[{name:$,key:ne()}],name:$,key:ne()}];return n.state={tables:a},n.programChange=n.programChange.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"calculate",value:function(e){function t(e){return function(t){if(t.length!==e.params.length)throw new Error("Arity Mismatch, expected "+e.params.length+" argument"+(1===e.params.length?"":"s"));var n=e.examples.reduce(function(n,a){if(void 0!==n)return n;if(a.inputs.reduce(function(e,n,a){return e&&ue(n.prog,t[a])},!0)){if(a.want===$)throw new ReferenceError("(".concat(e.name," ").concat(t.map(re).join(" "),") doesn't have a want"));return a.want}},void 0);if(void 0===n)throw new ReferenceError(t.map(re).join()+" is not an example in "+e.name);return n}}var n=e.map(function(e){return{name:e.name,binding:{value:t(e),type:y}}}),a=[].concat(Object(i.a)(C),Object(i.a)(n));return e.map(function(e){function t(n,r){var u=r.map(function(t){if(t===I)return I;if(t===T)return T;if(!t.inputs.every(function(e){return e.prog!==$})||n.prog===$)return $;var r=e.params.map(function(e,n){return{name:e.name,binding:t.inputs[n].prog}}),u=[].concat(Object(i.a)(a),Object(i.a)(r));try{var l=k(n.prog,u)}catch(c){l=c}return l});if(A(u)||void 0!==n.thenChildren&&0!==n.thenChildren.length){if(void 0===n.thenChildren)var l=[];else{var o=r.map(function(e,t){return function(e,t){return e===I||!1===t.value?I:"boolean"!==typeof t.value?T:e}(e,u[t])});l=n.thenChildren.map(function(e){return t(e,o)})}return Object(c.a)({},n,{outputs:u,thenChildren:l})}var m=Object(c.a)({},n,{outputs:u});return delete m.thenChildren,m}if(e.name!==$&&e.params.every(function(e){return e.name!==$})){var n=e.formulas.map(function(n){return t(n,e.examples)});return Object(c.a)({},e,{formulas:n})}return Object(c.a)({},e)})}},{key:"programChange",value:function(e){var t=this.calculate(e);this.setState(function(e){return{tables:t}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"unparse_mode_button",id:"cons_mode_button",onInput:function(){re=j,e.setState(function(e){return e})},defaultChecked:!0}),r.a.createElement("label",{htmlFor:"cons_mode_button"},"cons mode"),r.a.createElement("input",{type:"radio",name:"unparse_mode_button",id:"list_mode_button",onInput:function(){re=N,e.setState(function(e){return e})}}),r.a.createElement("label",{htmlFor:"list_mode_button"},"list mode"),r.a.createElement(ie,{tables:this.state.tables,programChange:this.programChange}),r.a.createElement("textarea",{rows:20,cols:100,className:"bsl_io",readOnly:!0,value:Q(this.state.tables,re,100,50)}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.e1a23db6.chunk.js.map