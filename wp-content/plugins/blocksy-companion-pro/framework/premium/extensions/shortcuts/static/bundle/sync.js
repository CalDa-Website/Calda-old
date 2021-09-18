!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=window.blocksyCustomizerSync},function(t,e,r){"use strict";r.r(e);var o,n=function(t){if([t.top,t.right,t.bottom,t.left].reduce((function(t,e){return!!t&&!("auto"!==e&&e&&e.toString().match(/\d/g))}),!0))return"CT_CSS_SKIP_RULE";var e=["auto"!==t.top&&t.top.toString().match(/\d/g)?t.top:0,"auto"!==t.right&&t.right.toString().match(/\d/g)?t.right:0,"auto"!==t.bottom&&t.bottom.toString().match(/\d/g)?t.bottom:0,"auto"!==t.left&&t.left.toString().match(/\d/g)?t.left:0];return e[0]===e[1]&&e[0]===e[2]&&e[0]===e[3]?e[0]:e[0]===e[2]&&e[1]===e[3]?"".concat(e[0]," ").concat(e[3]):e.join(" ")},c=function(t,e){var r=e.forcedOutput,o=void 0!==r&&r;if("CT_CSS_SKIP_RULE"===t)return"CT_CSS_SKIP_RULE";if("none"===t)return"none";if(!t.enable)return o?"none":"CT_CSS_SKIP_RULE";if(0===parseFloat(t.blur)&&0===parseFloat(t.spread)&&0===parseFloat(t.v_offset)&&0===parseFloat(t.h_offset))return o?"none":"CT_CSS_SKIP_RULE";var n=[];return t.inset&&n.push("inset"),n.push("".concat(t.h_offset,"px")),n.push("".concat(t.v_offset,"px")),0!==parseFloat(t.blur)&&(n.push("".concat(t.blur,"px")),0!==parseFloat(t.spread)&&n.push("".concat(t.spread,"px"))),0===parseFloat(t.blur)&&0!==parseFloat(t.spread)&&(n.push("".concat(t.blur,"px")),n.push("".concat(t.spread,"px"))),n.push(t.color.color),n.join(" ")},i=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desktop",o={desktop:"ct-main-styles-inline-css",tablet:"ct-main-styles-tablet-inline-css",mobile:"ct-main-styles-mobile-inline-css"},n=document.querySelector("style#".concat(o[r])),c=n.innerText,i="".concat(t["".concat(r,"_selector_prefix")]?"".concat(t["".concat(r,"_selector_prefix")]," "):"").concat(t.selector||":root"),a=null,s=c.match(a);0===c.trim().indexOf(i)?(a=new RegExp("".concat(i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s?{[\\s\\S]*?}"),"gm"),s=c.match(a)):(a=new RegExp("\\}\\s*?".concat(i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s?{[\\s\\S]*?}"),"gm"),s=c.match(a)),s||(0===(c="".concat(c," ").concat(i," {   }")).trim().indexOf(i)?(a=new RegExp("".concat(i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s?{[\\s\\S]*?}"),"gm"),s=c.match(a)):(a=new RegExp("\\}\\s*?".concat(i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s?{[\\s\\S]*?}"),"gm"),s=c.match(a))),n.innerText=c.replace(a,s[0].indexOf("--".concat(t.variable,":"))>-1?s[0].replace(new RegExp("--".concat(t.variable,":[\\s\\S]*?;"),"gm"),e.indexOf("CT_CSS_SKIP_RULE")>-1||e.indexOf(t.variable)>-1?"":"--".concat(t.variable,": ").concat(e,";")):s[0].replace(new RegExp("".concat(i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s?{"),"gm"),"".concat(i," {").concat(e.indexOf("CT_CSS_SKIP_RULE")>-1||e.indexOf(t.variable)>-1?"":"--".concat(t.variable,": ").concat(e,";"))))},a=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desktop",o=(t.type||"").indexOf("color")>-1?e["color"===t.type?"default":t.type.split(":")[1]].color:e;"border"===(t.type||"")&&(o=e&&"none"!==e.style?"".concat(e.width,"px ").concat(e.style," ").concat(e.color.color):"none"),"spacing"===(t.type||"")&&(o=n(e)),"box-shadow"===(t.type||"")&&(o=c(e,t)),i(t,"".concat(o).concat(t.unit||"").concat(t.important?" !important":""),r)},s=function(t,e){var r=e;e=t.extractValue?t.extractValue(e):e,t.whenDone&&t.whenDone(e,r),e=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t&&Object.keys(t).indexOf("desktop")>-1?e?t:t.desktop:e?{desktop:t,tablet:t,mobile:t}:t}(e,!!t.responsive),t.responsive?(t.enabled&&"no"===!wp.customize(t.enabled)()&&(e.mobile="0"+(t.unit?"":"px"),e.tablet="0"+(t.unit?"":"px"),e.desktop="0"+(t.unit?"":"px")),a(t,e.desktop,"desktop"),a(t,e.tablet,"tablet"),a(t,e.mobile,"mobile")):a(t,e)},u=r(0);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}o=p(p(p({shortcuts_container_height:{selector:":root",variable:"shortcuts-container-height",responsive:!0,unit:"px"},shortcuts_container_width:{selector:":root",variable:"shortcuts-container-width",unit:""},shortcuts_icon_size:{selector:".ct-shortcuts-container",variable:"icon-size",responsive:!0,unit:"px"}},Object(u.typographyOption)({id:"shortcuts_font",selector:".ct-shortcuts-container"})),{},{shortcuts_font_color:[{selector:".ct-shortcuts-container a",variable:"linkInitialColor",type:"color:default",responsive:!0},{selector:".ct-shortcuts-container a",variable:"linkHoverColor",type:"color:hover",responsive:!0}],shortcuts_icon_color:[{selector:".ct-shortcuts-container",variable:"icon-color",type:"color:default",responsive:!0},{selector:".ct-shortcuts-container",variable:"icon-hover-color",type:"color:hover",responsive:!0}],shortcuts_divider:{selector:".ct-shortcuts-container",variable:"shortcuts-divider",type:"border"},shortcuts_divider_height:[{selector:".ct-shortcuts-container",variable:"shortcuts-divider-height",unit:"%"}]},Object(u.handleBackgroundOptionFor)({id:"shortcuts_container_background",selector:".ct-shortcuts-container",responsive:!0})),{},{shortcuts_container_shadow:{selector:".ct-shortcuts-container",type:"box-shadow",variable:"box-shadow",responsive:!0},shortcuts_container_border_radius:{selector:".ct-shortcuts-container",type:"spacing",variable:"border-radius",responsive:!0}}),wp.customize.bind("change",(function(t){return o[t.id]&&(Array.isArray(o[t.id])?o[t.id]:[o[t.id]]).map((function(e){return s(e,t())}))})),wp.customize("shortcuts_bar_visibility",(function(t){return t.bind((function(t){return Object(u.responsiveClassesFor)("shortcuts_bar_visibility",document.querySelector(".ct-shortcuts-container"))}))})),wp.customize("shortcuts_bar_type",(function(t){t.bind((function(t){var e=document.querySelector(".ct-shortcuts-container");e&&(e.dataset.type=t)}))})),wp.customize("shortcuts_label_position",(function(t){t.bind((function(t){f(document.querySelectorAll(".ct-shortcuts-container a")).map((function(e){e.dataset.label=t}))}))})),wp.customize("shortcuts_bar_items",(function(t){t.bind((function(t){var e=document.querySelector(".ct-shortcuts-container");e&&t.map((function(t){var r=e.querySelector('[data-shortcut="'.concat(t.id,'"]'));Object(u.responsiveClassesFor)(t.item_visibility||{desktop:!0,tablet:!0,mobile:!0},r);var o=r.querySelector(".ct-label");o&&(o.innerHTML=t.label)}))}))}))}]);