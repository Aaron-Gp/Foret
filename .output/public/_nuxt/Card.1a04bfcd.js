import{u as co,a as w,c as bo}from"./use-rtl.29a197ab.js";import{d as p,e as c,a as d,i as fo,c as uo,p as go,f as b,q as vo,s as mo,g as _,h as po,r as m}from"./light.cc99ad2b.js";import{a4 as ho,X as xo,Z as B,U as Co,h as T,A as zo,am as So,K as i,J as yo,ab as ko,y as L}from"./entry.85ee306c.js";import{u as wo}from"./use-style.167f4b2d.js";import{N as $o}from"./Icon.2dc67b7c.js";function Ro(o,n){const r=o.trim().split(/\s+/g),e={top:r[0]};switch(r.length){case 1:e.right=r[0],e.bottom=r[0],e.left=r[0];break;case 2:e.right=r[1],e.left=r[1],e.bottom=r[0];break;case 3:e.right=r[1],e.bottom=r[2],e.left=r[1];break;case 4:e.right=r[1],e.bottom=r[2],e.left=r[3];break;default:throw new Error("[seemly/getMargin]:"+o+" is not a valid value.")}return n===void 0?e:e[n]}var To="[object Symbol]";function Bo(o){return typeof o=="symbol"||ho(o)&&xo(o)==To}function Lo(o,n){for(var r=-1,e=o==null?0:o.length,t=Array(e);++r<e;)t[r]=n(o[r],r,o);return t}var Mo=1/0,M=B?B.prototype:void 0,P=M?M.toString:void 0;function j(o){if(typeof o=="string")return o;if(Co(o))return Lo(o,j)+"";if(Bo(o))return P?P.call(o):"";var n=o+"";return n=="0"&&1/o==-Mo?"-0":n}function Po(o){return o==null?"":j(o)}function _o(o,n,r){var e=-1,t=o.length;n<0&&(n=-n>t?0:t+n),r=r>t?t:r,r<0&&(r+=t),t=n>r?0:r-n>>>0,n>>>=0;for(var l=Array(t);++e<t;)l[e]=o[e+n];return l}function jo(o,n,r){var e=o.length;return r=r===void 0?e:r,!n&&r>=e?o:_o(o,n,r)}var Eo="\\ud800-\\udfff",Io="\\u0300-\\u036f",Fo="\\ufe20-\\ufe2f",Oo="\\u20d0-\\u20ff",Ao=Io+Fo+Oo,Ho="\\ufe0e\\ufe0f",No="\\u200d",Vo=RegExp("["+No+Eo+Ao+Ho+"]");function E(o){return Vo.test(o)}function Wo(o){return o.split("")}var I="\\ud800-\\udfff",Uo="\\u0300-\\u036f",Jo="\\ufe20-\\ufe2f",Zo="\\u20d0-\\u20ff",qo=Uo+Jo+Zo,Ko="\\ufe0e\\ufe0f",Do="["+I+"]",$="["+qo+"]",R="\\ud83c[\\udffb-\\udfff]",Xo="(?:"+$+"|"+R+")",F="[^"+I+"]",O="(?:\\ud83c[\\udde6-\\uddff]){2}",A="[\\ud800-\\udbff][\\udc00-\\udfff]",Yo="\\u200d",H=Xo+"?",N="["+Ko+"]?",Go="(?:"+Yo+"(?:"+[F,O,A].join("|")+")"+N+H+")*",Qo=N+H+Go,oe="(?:"+[F+$+"?",$,O,A,Do].join("|")+")",ee=RegExp(R+"(?="+R+")|"+oe+Qo,"g");function re(o){return o.match(ee)||[]}function ne(o){return E(o)?re(o):Wo(o)}function te(o){return function(n){n=Po(n);var r=E(n)?ne(n):void 0,e=r?r[0]:n.charAt(0),t=r?jo(r,1).join(""):n.slice(1);return e[o]()+t}}var ae=te("toUpperCase");const de=ae;function le(o,n){return T({name:de(o),setup(){var r;const e=(r=zo(So,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var t;const l=(t=e==null?void 0:e.value)===null||t===void 0?void 0:t[o];return l?l():n}}})}const ie=le("close",i("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},i("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},i("g",{fill:"currentColor","fill-rule":"nonzero"},i("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),se=p("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[c("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),d("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),fo("disabled",[d("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),d("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),d("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),d("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),d("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),c("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),c("round",[d("&::before",`
 border-radius: 50%;
 `)])]),ce=T({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(o){return wo("-base-close",se,yo(o,"clsPrefix")),()=>{const{clsPrefix:n,disabled:r,absolute:e,round:t,isButtonTag:l}=o;return i(l?"button":"div",{type:l?"button":void 0,tabindex:r||!o.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:l?void 0:"button",disabled:r,class:[`${n}-base-close`,e&&`${n}-base-close--absolute`,r&&`${n}-base-close--disabled`,t&&`${n}-base-close--round`],onMousedown:f=>{o.focusable||f.preventDefault()},onClick:o.onClick},i($o,{clsPrefix:n},{default:()=>i(ie,null)}))}}}),be={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},fe=o=>{const{primaryColor:n,borderRadius:r,lineHeight:e,fontSize:t,cardColor:l,textColor2:u,textColor1:f,dividerColor:s,fontWeightStrong:a,closeIconColor:g,closeIconColorHover:h,closeIconColorPressed:x,closeColorHover:C,closeColorPressed:z,modalColor:S,boxShadow1:y,popoverColor:k,actionColor:v}=o;return Object.assign(Object.assign({},be),{lineHeight:e,color:l,colorModal:S,colorPopover:k,colorTarget:n,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:u,titleTextColor:f,borderColor:s,actionColor:v,titleFontWeight:a,closeColorHover:C,closeColorPressed:z,closeBorderRadius:r,closeIconColor:g,closeIconColorHover:h,closeIconColorPressed:x,fontSizeSmall:t,fontSizeMedium:t,fontSizeLarge:t,fontSizeHuge:t,boxShadow:y,borderRadius:r})},ue={name:"Card",common:uo,self:fe},ge=ue,ve=d([p("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[go({background:"var(--n-color-modal)"}),c("hoverable",[d("&:hover","box-shadow: var(--n-box-shadow);")]),c("content-segmented",[d(">",[b("content",{paddingTop:"var(--n-padding-bottom)"})])]),c("content-soft-segmented",[d(">",[b("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),c("footer-segmented",[d(">",[b("footer",{paddingTop:"var(--n-padding-bottom)"})])]),c("footer-soft-segmented",[d(">",[b("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),d(">",[p("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[b("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),b("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),b("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),b("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),b("content","flex: 1; min-width: 0;"),b("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[d("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),b("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),p("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[d("img",`
 display: block;
 width: 100%;
 `)]),c("bordered",`
 border: 1px solid var(--n-border-color);
 `,[d("&:target","border-color: var(--n-color-target);")]),c("action-segmented",[d(">",[b("action",[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),c("content-segmented, content-soft-segmented",[d(">",[b("content",{transition:"border-color 0.3s var(--n-bezier)"},[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),c("footer-segmented, footer-soft-segmented",[d(">",[b("footer",{transition:"border-color 0.3s var(--n-bezier)"},[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),c("embedded",`
 background-color: var(--n-color-embedded);
 `)]),vo(p("card",`
 background: var(--n-color-modal);
 `,[c("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),mo(p("card",`
 background: var(--n-color-popover);
 `,[c("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),me={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},pe=Object.assign(Object.assign({},_.props),me),ye=T({name:"Card",props:pe,setup(o){const n=()=>{const{onClose:a}=o;a&&bo(a)},{inlineThemeDisabled:r,mergedClsPrefixRef:e,mergedRtlRef:t}=ko(o),l=_("Card","-card",ve,ge,o,e),u=co("Card",t,e),f=L(()=>{const{size:a}=o,{self:{color:g,colorModal:h,colorTarget:x,textColor:C,titleTextColor:z,titleFontWeight:S,borderColor:y,actionColor:k,borderRadius:v,lineHeight:V,closeIconColor:W,closeIconColorHover:U,closeIconColorPressed:J,closeColorHover:Z,closeColorPressed:q,closeBorderRadius:K,closeIconSize:D,closeSize:X,boxShadow:Y,colorPopover:G,colorEmbedded:Q,colorEmbeddedModal:oo,colorEmbeddedPopover:eo,[w("padding",a)]:ro,[w("fontSize",a)]:no,[w("titleFontSize",a)]:to},common:{cubicBezierEaseInOut:ao}}=l.value,{top:lo,left:io,bottom:so}=Ro(ro);return{"--n-bezier":ao,"--n-border-radius":v,"--n-color":g,"--n-color-modal":h,"--n-color-popover":G,"--n-color-embedded":Q,"--n-color-embedded-modal":oo,"--n-color-embedded-popover":eo,"--n-color-target":x,"--n-text-color":C,"--n-line-height":V,"--n-action-color":k,"--n-title-text-color":z,"--n-title-font-weight":S,"--n-close-icon-color":W,"--n-close-icon-color-hover":U,"--n-close-icon-color-pressed":J,"--n-close-color-hover":Z,"--n-close-color-pressed":q,"--n-border-color":y,"--n-box-shadow":Y,"--n-padding-top":lo,"--n-padding-bottom":so,"--n-padding-left":io,"--n-font-size":no,"--n-title-font-size":to,"--n-close-size":X,"--n-close-icon-size":D,"--n-close-border-radius":K}}),s=r?po("card",L(()=>o.size[0]),f,o):void 0;return{rtlEnabled:u,mergedClsPrefix:e,mergedTheme:l,handleCloseClick:n,cssVars:r?void 0:f,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){const{segmented:o,bordered:n,hoverable:r,mergedClsPrefix:e,rtlEnabled:t,onRender:l,embedded:u,tag:f,$slots:s}=this;return l==null||l(),i(f,{class:[`${e}-card`,this.themeClass,u&&`${e}-card--embedded`,{[`${e}-card--rtl`]:t,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:n,[`${e}-card--hoverable`]:r}],style:this.cssVars,role:this.role},m(s.cover,a=>a&&i("div",{class:`${e}-card-cover`,role:"none"},a)),m(s.header,a=>a||this.title||this.closable?i("div",{class:`${e}-card-header`,style:this.headerStyle},i("div",{class:`${e}-card-header__main`,role:"heading"},a||this.title),m(s["header-extra"],g=>g&&i("div",{class:`${e}-card-header__extra`,style:this.headerExtraStyle},g)),this.closable?i(ce,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),m(s.default,a=>a&&i("div",{class:`${e}-card__content`,style:this.contentStyle,role:"none"},a)),m(s.footer,a=>a&&[i("div",{class:`${e}-card__footer`,style:this.footerStyle,role:"none"},a)]),m(s.action,a=>a&&i("div",{class:`${e}-card__action`,role:"none"},a)))}});export{ye as _,Lo as a,Bo as i,Po as t,de as u};
