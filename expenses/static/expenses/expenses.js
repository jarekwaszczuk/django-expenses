!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(e){var t=document.querySelector(e),n=parseInt(t.dataset.last_aid)+1;return t.dataset.last_aid=n.toString(),n}function r(e){return e.target.closest("tr")}function l(e){return isNaN(e)?l(0):new Intl.NumberFormat(_expConfig_.currencyLocale.replace("_","-"),{style:"currency",currency:_expConfig_.currencyCode}).format(e)}function o(e,t,n,a,r,l,o){if("string"==typeof e&&(e=document.querySelector(e)),void 0===a&&(a=1),null!==e&&null!=e){var d=document.createElement("datalist");null==t&&(t=e.name);var i="acdl_"+t.replace(".","");d.id=i,e.setAttribute("list",i),e.nextSibling?e.parentElement.insertBefore(d,e.nextSibling):e.parentElement.appendChild(d),0===a&&c(),e.addEventListener("input",c)}function c(t){var i;i="string"!=typeof n?n():n,d.innerHTML="";var c=e.value;"off"!==e.dataset.autocomplete&&(c.trim().length<a||(void 0!==l&&c.startsWith(l)?o(c):(-1!==i.indexOf("?")?i+="&q="+encodeURIComponent(c):i+="?q="+encodeURIComponent(c),fetch(i).then(function(e){return e.json()}).then(function(e){1===e.length&&e[0]===c||e.forEach(function(e){var t=document.createElement("option");t.value=void 0!==r?r(e):e,d.appendChild(t)})}))))}}n.r(t);var d=["expenses-billtable-serving","expenses-billtable-count","expenses-billtable-unitprice"];function i(e){c(r(e))}function c(e){var t=e.getElementsByClassName("expenses-billtable-unitprice")[0],n=e.getElementsByClassName("expenses-billtable-count")[0],a=t.getElementsByTagName("input")[0],r=n.getElementsByTagName("input")[0],o=e.getElementsByClassName("expenses-billtable-amount")[0],d=parseFloat(a.value)*parseFloat(r.value);o.innerText=l(d),o.dataset.value=d.toString(),s()}function s(){for(var e=document.querySelectorAll("td.expenses-billtable-amount"),t=0,n=0;n<e.length;n++){var a=parseFloat(e[n].dataset.value);isNaN(a)||(t+=a)}document.querySelector(".expenses-bill-total").innerText=l(t)}function u(){document.querySelector("#expenses-billtable-savechanges").disabled=!1}function p(e){var t={edit:{classNames:"btn-info expenses-billtable-btn-edit",title:gettext("Edit"),icon:"fa-edit",callback:v},undo:{classNames:"btn-warning expenses-billtable-btn-undo",title:gettext("Undo Changes"),icon:"fa-undo",callback:x},delete:{classNames:"btn-danger expenses-billtable-btn-delete",title:gettext("Delete"),icon:"fa-trash-alt",callback:y},accept:{classNames:"btn-success expenses-billtable-btn-accept",title:gettext("Accept"),icon:"fa-check",callback:h}};return function(e){var t=document.createElement("div");return t.className="btn-group",t.setAttribute("role","group"),t.setAttribute("aria-label",gettext("Item actions")),e.forEach(function(e){var n=document.createElement("button");n.type="button",n.className="btn "+e.classNames,n.title=e.title,n.innerHTML='<i class="fa fa-fw '+e.icon+'"></i>',n.addEventListener("click",e.callback),t.appendChild(n)}),t}(e.map(function(e){return t[e]}))}function m(){document.querySelector("#expenses-billtable-addrow .expenses-billtable-product input").focus()}function b(e){var t=document.querySelector("#expenses-billtable-addrow"),n=document.createElement("tr");n.classList.add("expenses-billtable-row","table-success");var r="a"+a("#expenses-billtable-form");n.dataset.id=r,f(n,t,r,"add",["edit","delete"]),t.getElementsByClassName("expenses-billtable-amount")[0].innerText=l(0),document.querySelector("#expenses-billtable tbody").insertBefore(n,t),t.querySelectorAll("input").forEach(function(e){void 0!==e.dataset.default?e.value=e.dataset.default:e.value=""}),delete t.querySelector(".expenses-billtable-amount").dataset.value,u(),m()}function f(e,t,n,a,r){e.dataset.type=a;for(var o=t.querySelectorAll("input"),i={},c=0;c<o.length;c++){var s=o[c];if(!s.reportValidity())throw new Error("Field "+s.name+" was invalid.");var u=document.createElement("td"),m=s.parentElement;m.dataset.hasOwnProperty("orig_text")&&(u.dataset.orig_text=m.dataset.orig_text,u.dataset.orig_value=m.dataset.orig_value),u.className=s.parentElement.className;var b=document.createElement("input");b.hidden=!0,b.value=s.value;var f=s.name;-1==f.indexOf("__")?b.name=n+"__"+f:b.name=f,u.appendChild(b);var v=s.value;"expenses-billtable-unitprice"==u.className&&(v=l(parseFloat(s.value)),u.dataset.value=s.value),u.appendChild(document.createTextNode(v)),e.appendChild(u),-1!=d.indexOf(u.className)?i[s.name]=parseFloat(s.value):i[s.name]=s.value}var y=t.getElementsByClassName("expenses-billtable-amount")[0],x=document.createElement("td");x.className="expenses-billtable-amount",x.innerText=y.innerText,x.dataset.value=y.dataset.value,y.dataset.hasOwnProperty("orig_text")&&(x.dataset.orig_text=y.dataset.orig_text,x.dataset.orig_value=y.dataset.orig_value),e.appendChild(x);var h=document.createElement("td");h.className="expenses-billtable-actions",h.innerHTML="",h.appendChild(p(r)),e.appendChild(h)}function v(e){for(var t=r(e),n=document.querySelector("#expenses-billtable-addrow"),a=0;a<t.children.length;a++){var l=t.children[a];if("expenses-billtable-actions"!=l.className){var o=l.getElementsByTagName("input"),d="";d=o.length>0?o[0].value:l.dataset.value?l.dataset.value:l.innerText.trim(),l.dataset.hasOwnProperty("orig_text")||(l.dataset.orig_text=l.innerText.trim(),l.dataset.orig_value=d.trim());var c=n.querySelector("."+l.className+" input");if(null!==c){var s=c.cloneNode(),m=s.name;s.value=d,s.name=t.dataset.id+"__"+m,"count"!=m&&"unit_price"!=m||s.addEventListener("input",i),s.addEventListener("keypress",S),l.innerHTML="",l.appendChild(s)}}else l.innerHTML="",l.appendChild(p(["accept","undo"]))}u(),e.preventDefault()}function y(e){var t=r(e),n=t.dataset.id;if("add"!==t.dataset.type){var a=document.querySelector("#expenses-billtable-deletions"),l=document.createElement("input");l.hidden=!0,l.name="d__"+n,a.appendChild(l)}t.remove(),s(),u(),e.preventDefault()}function x(e){var t=r(e);t.classList.remove("table-info"),t.querySelectorAll("td").forEach(function(e){e.dataset.hasOwnProperty("orig_text")&&(e.innerText=e.dataset.orig_text,e.dataset.value=e.dataset.orig_value),"expenses-billtable-actions"==e.className&&(e.innerHTML="",e.appendChild(p(["edit","delete"])))}),s(),e.preventDefault()}function h(e){g(r(e))}function g(e){var t=e.dataset.id,n=document.createElement("tr");n.classList.add("expenses-billtable-row","table-info"),n.dataset.id=t,f(n,e,t,function(e){return"a"==e.charAt(0)}(t)?"add":"edit",["edit","undo","delete"]),e.parentElement.replaceChild(n,e)}function E(){var e=document.querySelector("#expenses-billtable-addrow").querySelectorAll("input");e.forEach(function(e){return e.disabled=!0});try{document.querySelectorAll(".expenses-billtable-btn-accept").forEach(function(e){return g(e.closest("tr"))}),document.querySelector("#expenses-billtable-form").submit()}catch(t){e.forEach(function(e){return e.disabled=!1}),event.preventDefault()}}function S(e){if(13==e.keyCode){if(e.metaKey||e.ctrlKey)E();else{var t=r(e);"expenses-billtable-addrow"===t.id?b():g(t)}return!1}}function q(e){var t=document.querySelector("#expenses-bulkcatedit-addrow"),n=document.createElement("tr");n.classList.add("table-success");for(var r="a"+a("#expenses-bulkcatedit-form"),l=t.querySelectorAll("input"),o=0;o<l.length;o++){var d=l[o];if(!d.reportValidity())throw new Error("Field "+d.name+" was invalid.");var i=document.createElement("td");i.className=d.closest("td").className;var c=d.cloneNode();c.name=c.name.replace("add_","add_"+r+"_"),c.addEventListener("keypress",w),i.appendChild(c),n.appendChild(i)}var s=document.createElement("td");s.className="expenses-bulkcatedit-actions";var u=document.createElement("btn");u.className="btn btn-danger",u.innerHTML='<i class="fa fa-fw fa-trash-alt"></i>',u.addEventListener("click",_),s.appendChild(u),n.appendChild(s),document.querySelector("#expenses-bulkcatedit-form tbody").insertBefore(n,t),l.forEach(function(e){return e.value=""})}function _(e){r(e).remove()}function k(e){document.querySelectorAll("#expenses-bulkcatedit-addrow input").forEach(function(e){return e.disabled=!0});var t=document.querySelector("#expenses-bulkcatedit-form");t.reportValidity()?t.submit():document.querySelectorAll("#expenses-bulkcatedit-addrow input").forEach(function(e){return e.disabled=!1}),null!==e&&e.preventDefault()}function w(e){if(13==e.keyCode){if("expenses-bulkcatedit-addrow"===r(e).id){var t=document.querySelector("#expenses-bulkcatedit-addrow").querySelectorAll("input");""===t[0].value&&""===t[1].value?k(null):q()}else k(null);return!1}}function L(e){var t=document.querySelector("#search-date-start"),n=document.querySelector("#search-date-end");document.querySelector("#search-date-spec-any").checked?(t.disabled=!0,n.disabled=!0):(t.disabled=!1,n.disabled=!1)}function C(e){var t=document.querySelector("#search-include-expenses"),n=document.querySelector("#search-include-bills");document.querySelector("#search-for-expenses").checked?(t.disabled=!1,n.disabled=!1):(t.disabled=!0,n.disabled=!0)}function N(e){e.amount.required="menu"!==e.type.value,e.amount.disabled="menu"===e.type.value}var T={},A=100;function O(e){var t=e.target,n=document.getElementById(t.dataset.target);n.disabled=!t.checked,t.checked&&n.focus()}document.addEventListener("DOMContentLoaded",function(){
/*!
 * Expenses Scripting Enhancements
 * Copyright © 2018-2019, Chris Warrick. All rights reserved. License: 3-clause BSD.
 */
var e,t,n;if(o(".expenses-addform-vendor","vendor",(e=_expConfig_.baseUrl)+"api/autocomplete/expense/vendor/"),o(".expenses-billaddform-vendor","vendor",e+"api/autocomplete/bill/vendor/"),o(".expenses-addform-description","description",function(){var t=document.querySelector(".expenses-addform-vendor").value.trim();return 0==t.length?e+"api/autocomplete/expense/description/":e+"api/autocomplete/expense/description/?vendor="+encodeURIComponent(t)}),null!==document.querySelector("#expenses-billtable-form")&&function(){var e=document.querySelector("#expenses-billtable-btn-add");e.type="button",e.addEventListener("click",b),document.querySelectorAll(".expenses-billtable-btn-edit").forEach(function(e){return e.addEventListener("click",v)}),document.querySelectorAll(".expenses-billtable-btn-delete").forEach(function(e){return e.addEventListener("click",y)}),document.querySelector("#expenses-billtable-addrow .expenses-billtable-unitprice input").addEventListener("input",i),document.querySelector("#expenses-billtable-addrow .expenses-billtable-count input").addEventListener("input",i),document.querySelector("#expenses-billtable-addrow .expenses-billtable-amount").innerText=l(0),document.querySelectorAll("#expenses-billtable-addrow input").forEach(function(e){return e.addEventListener("keydown",S)}),document.querySelector("#expenses-billtable-savechanges").addEventListener("click",E);var t=document.querySelector("#expenses-billtable-form");t.action="",t.dataset.last_aid="0";var n=document.querySelector("#expenses-billtable-addrow .expenses-billtable-product input");o(n,null,function(){var e=document.querySelector("#expenses-bill-meta-vendor").innerText;return _expConfig_.baseUrl+"api/autocomplete/bill/item/?vendor="+encodeURIComponent(e)},3,function(e){var t=e;return"✨ "+t.product+" ⚖️"+t.serving+" 💶"+t.unit_price},"✨",function(e){var t=document.querySelector("#expenses-billtable-addrow"),a=/✨ (.*?) ⚖️(.*?) 💶(.*)/.exec(e),r={product:a[1],serving:a[2],unitprice:a[3]};for(var l in n.dataset.autocomplete="off",r)t.querySelector(".expenses-billtable-"+l+" input").value=r[l];n.dataset.autocomplete="on",c(t)}),m()}(),null!==document.querySelector("#expenses-bulkcatedit-form")&&function(){var e=document.querySelector("#expenses-bulkcatedit-btn-add");e.type="button",e.addEventListener("click",q),document.querySelectorAll("#expenses-bulkcatedit-addrow input").forEach(function(e){e.disabled=!1,e.addEventListener("keypress",w)}),document.querySelectorAll("#expenses-bulkcatedit-addrow input").forEach(function(e){return e.addEventListener("keypress",w)});var t=document.querySelector("#expenses-bulkcatedit-btn-save");t.type="button",t.addEventListener("click",k),document.querySelector("#expenses-bulkcatedit-form").dataset.last_aid="0"}(),null!==document.querySelector("#expenses-templateedit-form")&&(t=document.querySelector("#expenses-templateedit-form"),n=function(){return N(t)},t.type.forEach(function(e){return e.addEventListener("change",n)}),N(t)),null!==document.querySelector("#expenses-search-form")&&(document.querySelector("#search-for-expenses").addEventListener("click",C),document.querySelector("#search-for-billitems").addEventListener("click",C),C(),document.querySelector("#search-date-spec-any").addEventListener("click",L),document.querySelector("#search-date-spec-between").addEventListener("click",L),L()),document.querySelectorAll(".expenses-field-enabler").forEach(function(e){e.addEventListener("click",O),document.getElementById(e.dataset.target).disabled=!e.checked}),-1!=navigator.userAgent.indexOf("ExpensesWebView")){var a=document.querySelector(".navbar-kw");a.classList.remove("static-top"),a.classList.add("fixed-top"),document.querySelector("body").style.paddingTop="50px"}document.body.addEventListener("touchstart",function(e){for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t];n.pageX<=20&&(T[n.identifier]=n.pageX)}}),document.body.addEventListener("touchmove",function(e){for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t];T.hasOwnProperty(n.identifier)&&(T[n.identifier],n.pageX-T[n.identifier]>=A&&($(".navbar-collapse").collapse("show"),window.scrollTo(0,0),delete T[n.identifier]))}}),document.body.addEventListener("touchend",function(e){for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t];T.hasOwnProperty(n.identifier)&&(T[n.identifier],n.pageX-T[n.identifier]>=A&&($(".navbar-collapse").collapse("show"),window.scrollTo(0,0)),delete T[n.identifier])}})},!1)}]);