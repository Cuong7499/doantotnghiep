(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[19],{150:function(e,t,n){"use strict";var c=n(14),o=n.n(c),r=n(23),a=n.n(r),i=n(28),s=n(6),l=n.n(s),u=(n(182),["className","disabled","name","permalink"]);t.a=function(e){var t=e.className,n=void 0===t?"":t,c=e.disabled,r=void 0!==c&&c,s=e.name,p=e.permalink,b=void 0===p?"":p,d=a()(e,u),f=l()("wc-block-components-product-name",n);return r?React.createElement("span",o()({className:f},d,{dangerouslySetInnerHTML:{__html:Object(i.decodeEntities)(s)}})):React.createElement("a",o()({className:f,href:b},d,{dangerouslySetInnerHTML:{__html:Object(i.decodeEntities)(s)}}))}},182:function(e,t){},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=function(e,t){var n=[];return Object.keys(e).forEach((function(c){if(void 0!==t[c])switch(e[c].type){case"boolean":n[c]="false"!==t[c]&&!1!==t[c];break;case"number":n[c]=parseInt(t[c],10);break;case"array":case"object":n[c]=JSON.parse(t[c]);break;default:n[c]=t[c]}else n[c]=e[c].default})),n}},345:function(e,t,n){"use strict";var c=n(14),o=n.n(c),r=n(188);t.a=function(e){return function(t){return function(n){var c=Object(r.a)(e,n);return React.createElement(t,o()({},n,c))}}}},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n(275);var c=n(83),o=function(){return c.m>1}},359:function(e,t){},409:function(e,t,n){"use strict";n.r(t);var c=n(345),o=n(4),r=n.n(o),a=(n(10),n(6)),i=n.n(a),s=n(101),l=n(274),u=n(357),p=function(e){var t=e.color,n=e.fontSize;return Object(u.a)()?{color:t,fontSize:n}:{}},b=n(249),d=n(150),f=n(52),m=(n(359),Object(b.withProductDataContext)((function(e){var t,n,c,o=e.className,a=e.headingLevel,b=void 0===a?2:a,m=e.showProductLink,O=void 0===m||m,j=e.align,y=e.color,v=e.customColor,k=e.fontSize,w=e.customFontSize,g=Object(s.useInnerBlockLayoutContext)().parentClassName,h=Object(s.useProductDataContext)().product,S=Object(f.a)().dispatchStoreEvent,E="h".concat(b),P=Object(l.getColorClassName)("color",y),N=Object(l.getFontSizeClass)(k),z=i()((t={"has-text-color":y||v,"has-font-size":k||w},r()(t,P,P),r()(t,N,N),t));return h.id?React.createElement(E,{className:i()(o,"wc-block-components-product-title",(n={},r()(n,"".concat(g,"__product-title"),g),r()(n,"wc-block-components-product-title--align-".concat(j),j&&Object(u.a)()),n))},React.createElement(d.a,{className:i()(r()({},z,Object(u.a)())),disabled:!O,name:h.name,permalink:h.permalink,rel:O?"nofollow":null,style:p({color:v,fontSize:w}),onClick:function(){S("product-view-link",{product:h})}})):React.createElement(E,{className:i()(o,"wc-block-components-product-title",(c={},r()(c,"".concat(g,"__product-title"),g),r()(c,"wc-block-components-product-title--align-".concat(j),j&&Object(u.a)()),r()(c,z,Object(u.a)()),c)),style:p({color:v,fontSize:w})})})));function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={headingLevel:{type:"number",default:2},showProductLink:{type:"boolean",default:!0},productId:{type:"number",default:0}};Object(u.a)()&&(y=j(j({},y),{},{align:{type:"string"},color:{type:"string"},customColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"}}));var v=y;t.default=Object(c.a)(v)(m)}}]);