(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,r){},57:function(t,e,r){t.exports=r.p+"static/media/old.3258e6ca.png"},58:function(t,e,r){t.exports=r.p+"static/media/chatgpt.441f1ac2.png"},59:function(t,e,r){t.exports=r(98)},67:function(t,e,r){},86:function(t,e){},98:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(35),i=r.n(o),c=(r(67),r(5)),s=(r(13),r(101)),u=function(t){var e=t.setReport,r=Object(n.useState)([]),o=Object(c.a)(r,2),i=o[0],u=o[1],l=Object(n.useState)([]),p=Object(c.a)(l,2),h=p[0],f=p[1],m=Object(n.useState)(""),d=Object(c.a)(m,2),v=(d[0],d[1]);Object(n.useEffect)(function(){0!=i.length&&function(){for(var t=[],e=0;e<i[0].length;e++)t.push(URL.createObjectURL(i[0][e]));f(t)}()},[i]);return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("div",{className:"App-upload"},a.a.createElement("p",null,"Upload images for report generation")),a.a.createElement("div",{className:"form-group multi-preview"},(h||[]).map(function(t){return a.a.createElement("img",{src:t,alt:"..."})})),a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{type:"file",className:"form-control",onChange:function(t){u([t.target.files])},multiple:!0})),a.a.createElement("button",{type:"button",className:"btn btn-danger btn-block",onClick:function(t){t.preventDefault();var r=new FormData;r.append("file1",i[0][0],"img1.jpg"),r.append("file2",i[0][1],"img2.jpg");var n=performance.now();s.a.post("http://localhost:5000/upload",r).then(function(t,r){r=t.data,v(r),e(r);var a=performance.now();console.log("The time it took to predict the image "+(a-n)+" milliseconds.")})}},"Upload")))},l=r(17),p=r(7),h=r(39);r(99);function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(_){s=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var p={};function h(){}function m(){}function d(){}var v={};s(v,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==e&&r.call(g,o)&&(v=g);var b=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e(function(a,i){!function n(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(p).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(s.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var a=l(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:m,configurable:!0}),m.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),s(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(b),s(b,c,"Generator"),s(b,o,function(){return this}),s(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function m(t){return t.toString().padStart(2,"0")}function d(t){return[m(t.getMonth()+1),m(t.getDate())].join("/")+" "+[m(t.getHours()),m(t.getMinutes()),m(t.getSeconds())].join(":")}function v(t){return y.apply(this,arguments)}function y(){return(y=Object(p.a)(f().mark(function t(e){var r,n;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"gpt-3.5-turbo","https://api.openai.com/v1/chat/completions",t.prev=2,r={"content-type":"application/json",Authorization:"Bearer ".concat(e)},n={messages:[{role:"user",content:"Hello!"}],model:"gpt-3.5-turbo"},t.next=8,s.a.post("https://api.openai.com/v1/chat/completions",n,{headers:r});case 8:return t.sent,t.abrupt("return",!0);case 12:return t.prev=12,t.t0=t.catch(2),console.log(t.t0),t.abrupt("return",!1);case 16:case"end":return t.stop()}},t,null,[[2,12]])}))).apply(this,arguments)}function g(t){t.current.style.cursor="not-allowed",t.current.style.pointerEvents="none",t.current.style.opacity="0.6"}function b(t){t.current.style.cursor="pointer",t.current.style.pointerEvents="auto",t.current.style.opacity="1"}!function(){var t=document.createElement("a");document.body.appendChild(t),t.style="display: none"}();var w=function(){return a.a.createElement("div",{className:"spinner"},a.a.createElement("div",{className:"bounce1"}),a.a.createElement("div",{className:"bounce2"}),a.a.createElement("div",{className:"bounce3"}))},E=r(57),x=r.n(E),j=r(58),O=r.n(j),L=function(t){var e=t.audio,r=t.transcription,o=t.chat,i=Object(n.useState)(""),s=Object(c.a)(i,2),u=(s[0],s[1]),l=Object(n.useState)(""),p=Object(c.a)(l,2),h=(p[0],p[1],Object(n.useState)("")),f=Object(c.a)(h,2),m=f[0],v=f[1];return Object(n.useEffect)(function(){var t=new Date;u(d(t))},[r]),Object(n.useEffect)(function(){var t=new Date;v(d(t))},[o]),a.a.createElement("div",{style:{margin:"20px"}},a.a.createElement("div",{className:"msg-page"},a.a.createElement("div",{className:"sent-chats"},a.a.createElement("div",{className:"sent-chats-msg"},null!==e?a.a.createElement("audio",{controls:"True",src:e}):a.a.createElement(w,null),null!==r?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,r)):null!==e?a.a.createElement(w,null):a.a.createElement(a.a.Fragment,null)),a.a.createElement("div",{className:"sent-chats-img"},a.a.createElement("img",{className:"chats-img",src:x.a,alt:"old.png"}))),a.a.createElement("div",{className:"received-chats"},null!==o?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"received-chats-img"},a.a.createElement("img",{className:"chats-img",src:O.a,alt:"chatgpt.png"})),a.a.createElement("div",{className:"received-msg"},a.a.createElement("div",{className:"received-msg-inbox"},a.a.createElement("p",null,o),a.a.createElement("span",{className:"chat-time"},m)))):a.a.createElement(w,null))))},N=function(t){var e=t.clinic;return a.a.createElement("div",{style:{margin:"20px"}},a.a.createElement("div",{className:"msg-page"},a.a.createElement("div",{className:"clinic-chats"},e.length>0?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"clinic-msg"},a.a.createElement("div",{className:"received-msg-inbox"},a.a.createElement("p",null,e)))):a.a.createElement("div",{className:"center"},a.a.createElement("h2",null,"Wait for clinic scheduling"),a.a.createElement(w,null)))))},k=["Department: Department of Obstetrics and Gynecology, Specialty: General Obstetrics and Gynecology, Clinic Hours: Sunday morning, 7:30 AM - 9:00 AM, Doctor: Dr. Lin Hejian","Department: Department of Orthopedics, Specialty: General Orthopedics, Clinic Hours: Thursday morning, 5:00 AM - 7:00 AM, Doctor: Dr. Wang Zhendi","Department: Department of Internal Medicine, Specialty: Gastrointestinal Surgery, Clinic Hours: Monday afternoon, 4:00 PM - 5:00 PM, Doctor: Dr. Wu Liyang","Department: Department of Internal Medicine, Specialty: Cerebrovascular Disease, Stroke, Clinic Hours: Friday afternoon, 7:00 PM - 9:00 PM, Doctor: Dr. Wu Zihao","Department: Department of Pediatrics, Specialty: General Pediatric Diseases, Clinic Hours: Sunday morning, 6:30 AM - 8:00 AM, Doctor: Dr. Lin Xiaoming","Department: Department of Pulmonology, Clinic Hours: Sunday morning, 9:30 AM - 12:30 AM, Doctor: Dr. Lin Chung Da"];function S(){S=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(_){s=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var p={};function h(){}function f(){}function m(){}var d={};s(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==e&&r.call(y,o)&&(d=y);var g=m.prototype=h.prototype=Object.create(d);function b(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e(function(a,i){!function n(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(p).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(s.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var a=l(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=m,n(g,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:f,configurable:!0}),f.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),s(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(g),s(g,c,"Generator"),s(g,o,function(){return this}),s(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}var _=function(t){var e=t.apiKey,r=t.setApiKey,o=t.report,i=Object(n.useState)([]),u=Object(c.a)(i,2),f=u[0],m=u[1],d=Object(n.useState)([]),v=Object(c.a)(d,2),y=v[0],E=v[1],x=Object(n.useState)([]),j=Object(c.a)(x,2),O=j[0],_=j[1],D=Object(n.useState)(!1),P=Object(c.a)(D,2),G=(P[0],P[1],Object(n.useState)("")),A=Object(c.a)(G,2),C=A[0],F=A[1],T=Object(n.useState)(""),M=Object(c.a)(T,2),R=M[0],I=M[1],B=Object(n.useRef)(),z=Object(n.useRef)(),Y=Object(n.useRef)(),H=Object(n.useRef)(),K=Object(n.useRef)(),W="gpt-3.5-turbo",U="https://api.openai.com/v1/chat/completions",J=function(){var t=Object(p.a)(S().mark(function t(r){var n,a,o,i;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={"content-type":"multipart/form-data",Authorization:"Bearer ".concat(e)},(a=new FormData).append("file",r,"audio.mp3"),a.append("model","whisper-1"),t.next=7,s.a.post("https://api.openai.com/v1/audio/transcriptions",a,{headers:n});case 7:return o=t.sent,i=o.data.text,t.abrupt("return",i);case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}},t,null,[[0,12]])}));return function(e){return t.apply(this,arguments)}}();function X(t){return Z.apply(this,arguments)}function Z(){return(Z=Object(p.a)(S().mark(function t(r){var n,a,i,c,u,l;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(t.prev=0,n={"content-type":"application/json",Authorization:"Bearer ".concat(e)},a=[{role:"system",content:"You are a medical diagnosis consultant. You will be given a chest x-ray report, some medical records and health information of a patient. You are responsible to provide a more comprehensive report, and also list out the possible diseases, medical guides and suggestions for the patient. Patients without medical expertise may probably not understand difficult medical terminologies, so try to explain everything in an easy way."}],console.log(y),i=0;i<y.length;i++)a.push({role:"user",content:y[i]}),a.push({role:"assistant",content:O[i]});return a.push({role:"user",content:r}),0==y.length&&a.push({role:"assistant",content:o}),c={messages:a,model:W},t.next=10,s.a.post(U,c,{headers:n});case 10:return u=t.sent,l=u.data.choices[0].message.content,t.abrupt("return",l);case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}},t,null,[[0,15]])}))).apply(this,arguments)}function $(t,e){return q.apply(this,arguments)}function q(){return(q=Object(p.a)(S().mark(function t(e,r){var n,a;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(r);case 2:return n=t.sent,E([].concat(Object(l.a)(y),[n])),t.next=6,X(n);case 6:a=t.sent,_([].concat(Object(l.a)(O),[a]));case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}var Q=function(){var t=Object(p.a)(S().mark(function t(e){var r;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return B.current.style.display="none",g(H),g(K),r=URL.createObjectURL(e),m([].concat(Object(l.a)(f),[r])),E([].concat(Object(l.a)(y),[null])),_([].concat(Object(l.a)(O),[null])),t.next=9,$(r,e);case 9:B.current.style.display="inline",b(H),b(K);case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),V=function(){var t=Object(p.a)(S().mark(function t(e,r,n){var a,o,i,c,u,l,p,h;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(a={"content-type":"application/json",Authorization:"Bearer ".concat(n)},(o=[{role:"system",content:"You are a medical summarization system, and a patient will share his or her current physical condition with you, and you will also receive a chest xray report. Typically, it includes the following four aspects: onset time, triggering factors of symptoms, nature of symptoms, and severity. Please utilize the information provided to summarize these aspects objectively without offering any advice."}]).push({role:"user",content:"patient's chest xray report:"}),o.push({role:"user",content:r}),o.push({role:"user",content:"patient's description:"}),i=0;i<e.length;i++)o.push({role:"user",content:e[i]});return console.log(o),c={messages:o,model:W},t.prev=8,t.next=11,s.a.post(U,c,{headers:a});case 11:return u=t.sent,l=u.data.choices[0].message.content,t.abrupt("return",l);case 16:if(t.prev=16,t.t0=t.catch(8),console.log(t.t0),429!==t.t0.response.status){t.next=27;break}return t.next=22,s.a.post(U,c,{headers:a});case 22:return p=t.sent,h=p.data.choices[0].message.content,t.abrupt("return",h);case 27:return t.abrupt("return","");case 28:case"end":return t.stop()}},t,null,[[8,16]])}));return function(e,r,n){return t.apply(this,arguments)}}(),tt=function(){var t=Object(p.a)(S().mark(function t(e,r,n){var a,o,i,c,u,l,p,h,f;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(a={"content-type":"application/json",Authorization:"Bearer ".concat(n)},(o=[{role:"system",content:"Based on the patient's description and clinic schedule, identify the doctor specializing in the patient's symptoms and provide the corresponding department and clinic hours."}]).push({role:"user",content:"patient's description:"}),i=0;i<e.length;i++)o.push({role:"user",content:e[i]});for(o.push({role:"user",content:"patient's chest xray report:"}),o.push({role:"user",content:r}),o.push({role:"user",content:"Clinic schedule:"}),c=0;c<k.length;c++)o.push({role:"user",content:k[c]});return console.log(o),u={messages:o,model:W},t.prev=10,t.next=13,s.a.post(U,u,{headers:a});case 13:return l=t.sent,p=l.data.choices[0].message.content,t.abrupt("return",p);case 18:if(t.prev=18,t.t0=t.catch(10),console.log(t.t0),429!==t.t0.response.status){t.next=29;break}return t.next=24,s.a.post(U,u,{headers:a});case 24:return h=t.sent,f=h.data.choices[0].message.content,t.abrupt("return",f);case 29:return t.abrupt("return","");case 30:case"end":return t.stop()}},t,null,[[10,18]])}));return function(e,r,n){return t.apply(this,arguments)}}(),et=function(){var t=Object(p.a)(S().mark(function t(){var r,n;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Y.current.style.display="none",B.current.style.display="none",t.next=4,V(y,o,e);case 4:return r=t.sent,F(r),console.log(r),t.next=9,tt(y,o,e);case 9:n=t.sent,I(n),console.log(n);case 12:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),rt=function(){m([]),E([]),_([]),F([])};return a.a.createElement("div",{className:"App",style:{marginTop:"30px"}},0===C.length?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Online Consultation Room"),a.a.createElement("div",{className:"msg-container"},o&&a.a.createElement("p",{align:"left"},a.a.createElement("b",null,"Chest X-ray Report:"),a.a.createElement("br",null)," ",o)),a.a.createElement("div",{className:"msg-container"},f.map(function(t,e){return a.a.createElement(L,{key:e,audio:f[e],transcription:y[e],chat:O[e]})}),a.a.createElement("button",{className:"button-ellipse",ref:B,onClick:et,style:{display:"none",marginBottom:"40px",marginTop:"40px"}},"Generate report"),a.a.createElement("div",{className:"center",ref:z,style:{display:"none",paddingBottom:"60px"}},a.a.createElement("h2",null,"Waiting for report generation"),a.a.createElement(w,null))),a.a.createElement("div",{ref:Y},a.a.createElement("div",{className:"bottom-line"}),a.a.createElement("div",{className:"bottom-line-button"},a.a.createElement("div",{ref:H},a.a.createElement(h.a,{onRecordingComplete:Q})),a.a.createElement("button",{className:"circle-button",ref:K,onClick:rt},a.a.createElement("ion-icon",{name:"trash",style:{fontSize:"17px"}}))))):a.a.createElement("div",{className:"msg-page"},a.a.createElement("div",{className:"msg-container",style:{margin:"auto",height:"200px"}},a.a.createElement("h2",{align:"left"},"Consultation summary"),a.a.createElement(N,{clinic:C})),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{className:"msg-container",style:{margin:"auto",height:"200px"}},a.a.createElement("h2",{align:"left"},"Clinic scheduling"),a.a.createElement(N,{clinic:R})),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{style:{marginBottom:"60px"}},a.a.createElement("button",{className:"button-ellipse",onClick:function(){F(""),I("")}},"Continue"),a.a.createElement("button",{className:"button-ellipse margin-left",onClick:function(){rt(),r("")}},"End Consultation"))))};function D(){D=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var p={};function h(){}function f(){}function m(){}var d={};s(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==e&&r.call(y,o)&&(d=y);var g=m.prototype=h.prototype=Object.create(d);function b(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e(function(a,i){!function n(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(p).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(s.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var a=l(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=m,n(g,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:f,configurable:!0}),f.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),s(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(g),s(g,c,"Generator"),s(g,o,function(){return this}),s(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}var P=function(t){var e=t.setApiKey,r=Object(n.useRef)(),o=Object(n.useRef)(),i=function(){var t=Object(p.a)(D().mark(function t(r){var n;return D().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"!==r.key){t.next=13;break}return t.prev=1,n=r.target.value,t.next=5,v(n);case 5:1==t.sent?e(r.target.value):o.current.style.visibility="visible",t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),o.current.style.visibility="visible",console.log(t.t0);case 13:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=Object(p.a)(D().mark(function t(n){var a;return D().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=r.current.value,t.next=4,v(a);case 4:!0===t.sent?e(r.current.value):o.current.style.visibility="visible",t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),o.current.style.visibility="visible",console.log(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",{className:"App ask-key-container"},a.a.createElement("h2",null,"Medical Consultation System"),a.a.createElement("span",null,"Api Key : ",a.a.createElement("input",{type:"text",onKeyDown:i,ref:r})),a.a.createElement("button",{onClick:c},"Submit"),a.a.createElement("div",{className:"error",ref:o,style:{visibility:"hidden"}},a.a.createElement("h3",{style:{color:"red"}},"Error!"),a.a.createElement("p",{style:{color:"red"}},"Please ensure that a correct api key is provided")))},G=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"anonymous";Object(n.useEffect)(function(){var n=document.createElement("script");return n.src=t,n.async=r,e&&(n.integrity=e),n.crossOrigin=a,document.body.appendChild(n),function(){document.body.removeChild(n)}},[t,e,r,a])};var A=function(){G("https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js");var t=Object(n.useState)(""),e=Object(c.a)(t,2),r=e[0],o=e[1],i=Object(n.useState)(""),s=Object(c.a)(i,2),l=s[0],p=s[1];return a.a.createElement("div",{className:"App",style:{marginTop:"30px"}},0==r.length?a.a.createElement(P,{setApiKey:o}):0==l.length?a.a.createElement(u,{setReport:p}):a.a.createElement(_,{apiKey:r,setApiKey:o,report:l}))},C=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,102)).then(function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;r(t),n(t),a(t),o(t),i(t)})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(A,null))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}),C()}},[[59,1,2]]]);
//# sourceMappingURL=main.9395e089.chunk.js.map