import{a as m,b as bo,d as K,f as h,n as xo,c as go,e as F,i as co,g as eo,o as Z,h as mo,r as uo,k as Go}from"./light.6fe86cbc.js";import{A as po,D as Oo,y as _,x as vo,z as yo,f as Q,K as u,ad as Co,al as Lo,J as wo,r as q,I as Mo,B as jo,ab as $o,v as No,ae as Ao}from"./entry.d3d5afb2.js";import{u as Vo,a as d,c as Ko}from"./use-rtl.ec992934.js";import{i as ro}from"./baseurl.18409a28.js";import{u as Po}from"./use-style.c6bedb5c.js";import{i as Qo,f as qo}from"./use-is-mounted.c28d1ee6.js";function fo(o){return o.replace(/#|\(|\)|,|\s/g,"_")}const ho=yo("n-form-item");function Yo(o,{defaultSize:n="medium",mergedSize:i,mergedDisabled:a}={}){const t=po(ho,null);Oo(ho,null);const l=_(i?()=>i(t):()=>{const{size:c}=o;if(c)return c;if(t){const{mergedSize:W}=t;if(W.value!==void 0)return W.value}return n}),w=_(a?()=>a(t):()=>{const{disabled:c}=o;return c!==void 0?c:t?t.disabled.value:!1}),r=_(()=>{const{status:c}=o;return c||(t==null?void 0:t.mergedValidationStatus.value)});return vo(()=>{t&&t.restoreValidation()}),{mergedSizeRef:l,mergedDisabledRef:w,mergedStatusRef:r,nTriggerFormBlur(){t&&t.handleContentBlur()},nTriggerFormChange(){t&&t.handleContentChange()},nTriggerFormFocus(){t&&t.handleContentFocus()},nTriggerFormInput(){t&&t.handleContentInput()}}}const So=Q({name:"BaseIconSwitchTransition",setup(o,{slots:n}){const i=Qo();return()=>u(Co,{name:"icon-switch-transition",appear:i.value},n)}}),Xo=Q({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(o,{slots:n}){function i(r){o.width?r.style.maxWidth=`${r.offsetWidth}px`:r.style.maxHeight=`${r.offsetHeight}px`,r.offsetWidth}function a(r){o.width?r.style.maxWidth="0":r.style.maxHeight="0",r.offsetWidth;const{onLeave:c}=o;c&&c()}function t(r){o.width?r.style.maxWidth="":r.style.maxHeight="";const{onAfterLeave:c}=o;c&&c()}function l(r){if(r.style.transition="none",o.width){const c=r.offsetWidth;r.style.maxWidth="0",r.offsetWidth,r.style.transition="",r.style.maxWidth=`${c}px`}else if(o.reverse)r.style.maxHeight=`${r.offsetHeight}px`,r.offsetHeight,r.style.transition="",r.style.maxHeight="0";else{const c=r.offsetHeight;r.style.maxHeight="0",r.offsetWidth,r.style.transition="",r.style.maxHeight=`${c}px`}r.offsetWidth}function w(r){var c;o.width?r.style.maxWidth="":o.reverse||(r.style.maxHeight=""),(c=o.onAfterEnter)===null||c===void 0||c.call(o)}return()=>{const{group:r,width:c,appear:W,mode:M}=o,S=r?Lo:Co,A={name:c?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:W,onEnter:l,onAfterEnter:w,onBeforeLeave:i,onLeave:a,onAfterLeave:t};return r||(A.mode=M),u(S,A,n)}}}),{cubicBezierEaseInOut:Jo}=bo;function so({originalTransform:o="",left:n=0,top:i=0,transition:a=`all .3s ${Jo} !important`}={}){return[m("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:o+" scale(0.75)",left:n,top:i,opacity:0}),m("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${o}`,left:n,top:i,opacity:1}),m("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:n,top:i,transition:a})]}const Uo=m([m("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),m("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),m("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),m("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),K("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[h("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[so()]),h("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[h("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),h("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[h("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[h("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),h("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[h("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),h("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[h("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),h("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[so({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Zo={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},oe=Q({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Zo),setup(o){Po("-base-loading",Uo,wo(o,"clsPrefix"))},render(){const{clsPrefix:o,radius:n,strokeWidth:i,stroke:a,scale:t}=this,l=n/t;return u("div",{class:`${o}-base-loading`,role:"img","aria-label":"loading"},u(So,null,{default:()=>this.show?u("div",{key:"icon",class:`${o}-base-loading__transition-wrapper`},u("div",{class:`${o}-base-loading__container`},u("div",{class:`${o}-base-loading__container-layer`},u("div",{class:`${o}-base-loading__container-layer-left`},u("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*l} ${2*l}`,xmlns:"http://www.w3.org/2000/svg",style:{color:a}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":i,"stroke-linecap":"round",cx:l,cy:l,r:n-i/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),u("div",{class:`${o}-base-loading__container-layer-patch`},u("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*l} ${2*l}`,xmlns:"http://www.w3.org/2000/svg",style:{color:a}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":i,"stroke-linecap":"round",cx:l,cy:l,r:n-i/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),u("div",{class:`${o}-base-loading__container-layer-right`},u("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*l} ${2*l}`,xmlns:"http://www.w3.org/2000/svg",style:{color:a}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":i,"stroke-linecap":"round",cx:l,cy:l,r:n-i/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n})))))):u("div",{key:"placeholder",class:`${o}-base-loading__placeholder`},this.$slots)}))}}),ee=K("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),re=Q({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){Po("-base-wave",ee,wo(o,"clsPrefix"));const n=q(null),i=q(!1);let a=null;return vo(()=>{a!==null&&window.clearTimeout(a)}),{active:i,selfRef:n,play(){a!==null&&(window.clearTimeout(a),i.value=!1,a=null),Mo(()=>{var t;(t=n.value)===null||t===void 0||t.offsetHeight,i.value=!0,a=window.setTimeout(()=>{i.value=!1,a=null},1e3)})}}},render(){const{clsPrefix:o}=this;return u("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),{cubicBezierEaseInOut:L}=bo;function te({duration:o=".2s",delay:n=".1s"}={}){return[m("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),m("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),m("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${L},
 max-width ${o} ${L} ${n},
 margin-left ${o} ${L} ${n},
 margin-right ${o} ${L} ${n};
 `),m("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${L} ${n},
 max-width ${o} ${L},
 margin-left ${o} ${L},
 margin-right ${o} ${L};
 `)]}const ne=ro&&"chrome"in window;ro&&navigator.userAgent.includes("Firefox");const ie=ro&&navigator.userAgent.includes("Safari")&&!ne;function N(o){return xo(o,[255,255,255,.16])}function oo(o){return xo(o,[0,0,0,.12])}const se=yo("n-button-group"),ae={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},le=o=>{const{heightTiny:n,heightSmall:i,heightMedium:a,heightLarge:t,borderRadius:l,fontSizeTiny:w,fontSizeSmall:r,fontSizeMedium:c,fontSizeLarge:W,opacityDisabled:M,textColor2:S,textColor3:A,primaryColorHover:y,primaryColorPressed:k,borderColor:Y,primaryColor:D,baseColor:b,infoColor:E,infoColorHover:T,infoColorPressed:s,successColor:x,successColorHover:$,successColorPressed:e,warningColor:H,warningColorHover:z,warningColorPressed:G,errorColor:B,errorColorHover:C,errorColorPressed:O,fontWeight:R,buttonColor2:V,buttonColor2Hover:I,buttonColor2Pressed:g,fontWeightStrong:X}=o;return Object.assign(Object.assign({},ae),{heightTiny:n,heightSmall:i,heightMedium:a,heightLarge:t,borderRadiusTiny:l,borderRadiusSmall:l,borderRadiusMedium:l,borderRadiusLarge:l,fontSizeTiny:w,fontSizeSmall:r,fontSizeMedium:c,fontSizeLarge:W,opacityDisabled:M,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:V,colorSecondaryHover:I,colorSecondaryPressed:g,colorTertiary:V,colorTertiaryHover:I,colorTertiaryPressed:g,colorQuaternary:"#0000",colorQuaternaryHover:I,colorQuaternaryPressed:g,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:S,textColorTertiary:A,textColorHover:y,textColorPressed:k,textColorFocus:y,textColorDisabled:S,textColorText:S,textColorTextHover:y,textColorTextPressed:k,textColorTextFocus:y,textColorTextDisabled:S,textColorGhost:S,textColorGhostHover:y,textColorGhostPressed:k,textColorGhostFocus:y,textColorGhostDisabled:S,border:`1px solid ${Y}`,borderHover:`1px solid ${y}`,borderPressed:`1px solid ${k}`,borderFocus:`1px solid ${y}`,borderDisabled:`1px solid ${Y}`,rippleColor:D,colorPrimary:D,colorHoverPrimary:y,colorPressedPrimary:k,colorFocusPrimary:y,colorDisabledPrimary:D,textColorPrimary:b,textColorHoverPrimary:b,textColorPressedPrimary:b,textColorFocusPrimary:b,textColorDisabledPrimary:b,textColorTextPrimary:D,textColorTextHoverPrimary:y,textColorTextPressedPrimary:k,textColorTextFocusPrimary:y,textColorTextDisabledPrimary:S,textColorGhostPrimary:D,textColorGhostHoverPrimary:y,textColorGhostPressedPrimary:k,textColorGhostFocusPrimary:y,textColorGhostDisabledPrimary:D,borderPrimary:`1px solid ${D}`,borderHoverPrimary:`1px solid ${y}`,borderPressedPrimary:`1px solid ${k}`,borderFocusPrimary:`1px solid ${y}`,borderDisabledPrimary:`1px solid ${D}`,rippleColorPrimary:D,colorInfo:E,colorHoverInfo:T,colorPressedInfo:s,colorFocusInfo:T,colorDisabledInfo:E,textColorInfo:b,textColorHoverInfo:b,textColorPressedInfo:b,textColorFocusInfo:b,textColorDisabledInfo:b,textColorTextInfo:E,textColorTextHoverInfo:T,textColorTextPressedInfo:s,textColorTextFocusInfo:T,textColorTextDisabledInfo:S,textColorGhostInfo:E,textColorGhostHoverInfo:T,textColorGhostPressedInfo:s,textColorGhostFocusInfo:T,textColorGhostDisabledInfo:E,borderInfo:`1px solid ${E}`,borderHoverInfo:`1px solid ${T}`,borderPressedInfo:`1px solid ${s}`,borderFocusInfo:`1px solid ${T}`,borderDisabledInfo:`1px solid ${E}`,rippleColorInfo:E,colorSuccess:x,colorHoverSuccess:$,colorPressedSuccess:e,colorFocusSuccess:$,colorDisabledSuccess:x,textColorSuccess:b,textColorHoverSuccess:b,textColorPressedSuccess:b,textColorFocusSuccess:b,textColorDisabledSuccess:b,textColorTextSuccess:x,textColorTextHoverSuccess:$,textColorTextPressedSuccess:e,textColorTextFocusSuccess:$,textColorTextDisabledSuccess:S,textColorGhostSuccess:x,textColorGhostHoverSuccess:$,textColorGhostPressedSuccess:e,textColorGhostFocusSuccess:$,textColorGhostDisabledSuccess:x,borderSuccess:`1px solid ${x}`,borderHoverSuccess:`1px solid ${$}`,borderPressedSuccess:`1px solid ${e}`,borderFocusSuccess:`1px solid ${$}`,borderDisabledSuccess:`1px solid ${x}`,rippleColorSuccess:x,colorWarning:H,colorHoverWarning:z,colorPressedWarning:G,colorFocusWarning:z,colorDisabledWarning:H,textColorWarning:b,textColorHoverWarning:b,textColorPressedWarning:b,textColorFocusWarning:b,textColorDisabledWarning:b,textColorTextWarning:H,textColorTextHoverWarning:z,textColorTextPressedWarning:G,textColorTextFocusWarning:z,textColorTextDisabledWarning:S,textColorGhostWarning:H,textColorGhostHoverWarning:z,textColorGhostPressedWarning:G,textColorGhostFocusWarning:z,textColorGhostDisabledWarning:H,borderWarning:`1px solid ${H}`,borderHoverWarning:`1px solid ${z}`,borderPressedWarning:`1px solid ${G}`,borderFocusWarning:`1px solid ${z}`,borderDisabledWarning:`1px solid ${H}`,rippleColorWarning:H,colorError:B,colorHoverError:C,colorPressedError:O,colorFocusError:C,colorDisabledError:B,textColorError:b,textColorHoverError:b,textColorPressedError:b,textColorFocusError:b,textColorDisabledError:b,textColorTextError:B,textColorTextHoverError:C,textColorTextPressedError:O,textColorTextFocusError:C,textColorTextDisabledError:S,textColorGhostError:B,textColorGhostHoverError:C,textColorGhostPressedError:O,textColorGhostFocusError:C,textColorGhostDisabledError:B,borderError:`1px solid ${B}`,borderHoverError:`1px solid ${C}`,borderPressedError:`1px solid ${O}`,borderFocusError:`1px solid ${C}`,borderDisabledError:`1px solid ${B}`,rippleColorError:B,waveOpacity:"0.6",fontWeight:R,fontWeightStrong:X})},de={name:"Button",common:go,self:le},ce=de,ue=m([K("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[F("color",[h("border",{borderColor:"var(--n-border-color)"}),F("disabled",[h("border",{borderColor:"var(--n-border-color-disabled)"})]),co("disabled",[m("&:focus",[h("state-border",{borderColor:"var(--n-border-color-focus)"})]),m("&:hover",[h("state-border",{borderColor:"var(--n-border-color-hover)"})]),m("&:active",[h("state-border",{borderColor:"var(--n-border-color-pressed)"})]),F("pressed",[h("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),F("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[h("border",{border:"var(--n-border-disabled)"})]),co("disabled",[m("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[h("state-border",{border:"var(--n-border-focus)"})]),m("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[h("state-border",{border:"var(--n-border-hover)"})]),m("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[h("state-border",{border:"var(--n-border-pressed)"})]),F("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[h("state-border",{border:"var(--n-border-pressed)"})])]),F("loading","cursor: wait;"),K("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[F("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),ro&&"MozBoxSizing"in document.createElement("div").style?m("&::moz-focus-inner",{border:0}):null,h("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),h("border",{border:"var(--n-border)"}),h("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),h("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[K("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[so({top:"50%",originalTransform:"translateY(-50%)"})]),te()]),h("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[m("~",[h("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),F("block",`
 display: flex;
 width: 100%;
 `),F("dashed",[h("border, state-border",{borderStyle:"dashed !important"})]),F("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),m("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),m("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),fe=Object.assign(Object.assign({},eo.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!ie}}),he=Q({name:"Button",props:fe,setup(o){const n=q(null),i=q(null),a=q(!1),t=jo(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),l=po(se,{}),{mergedSizeRef:w}=Yo({},{defaultSize:"medium",mergedSize:s=>{const{size:x}=o;if(x)return x;const{size:$}=l;if($)return $;const{mergedSize:e}=s||{};return e?e.value:"medium"}}),r=_(()=>o.focusable&&!o.disabled),c=s=>{var x;r.value||s.preventDefault(),!o.nativeFocusBehavior&&(s.preventDefault(),!o.disabled&&r.value&&((x=n.value)===null||x===void 0||x.focus({preventScroll:!0})))},W=s=>{var x;if(!o.disabled&&!o.loading){const{onClick:$}=o;$&&Ko($,s),o.text||(x=i.value)===null||x===void 0||x.play()}},M=s=>{switch(s.key){case"Enter":if(!o.keyboard)return;a.value=!1}},S=s=>{switch(s.key){case"Enter":if(!o.keyboard||o.loading){s.preventDefault();return}a.value=!0}},A=()=>{a.value=!1},{inlineThemeDisabled:y,mergedClsPrefixRef:k,mergedRtlRef:Y}=$o(o),D=eo("Button","-button",ue,ce,o,k),b=Vo("Button",Y,k),E=_(()=>{const s=D.value,{common:{cubicBezierEaseInOut:x,cubicBezierEaseOut:$},self:e}=s,{rippleDuration:H,opacityDisabled:z,fontWeight:G,fontWeightStrong:B}=e,C=w.value,{dashed:O,type:R,ghost:V,text:I,color:g,round:X,circle:to,textColor:j,secondary:To,tertiary:ao,quaternary:zo,strong:ko}=o,Ho={"font-weight":ko?B:G};let p={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const J=R==="tertiary",lo=R==="default",f=J?"default":R;if(I){const v=j||g;p={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":v||e[d("textColorText",f)],"--n-text-color-hover":v?N(v):e[d("textColorTextHover",f)],"--n-text-color-pressed":v?oo(v):e[d("textColorTextPressed",f)],"--n-text-color-focus":v?N(v):e[d("textColorTextHover",f)],"--n-text-color-disabled":v||e[d("textColorTextDisabled",f)]}}else if(V||O){const v=j||g;p={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":g||e[d("rippleColor",f)],"--n-text-color":v||e[d("textColorGhost",f)],"--n-text-color-hover":v?N(v):e[d("textColorGhostHover",f)],"--n-text-color-pressed":v?oo(v):e[d("textColorGhostPressed",f)],"--n-text-color-focus":v?N(v):e[d("textColorGhostHover",f)],"--n-text-color-disabled":v||e[d("textColorGhostDisabled",f)]}}else if(To){const v=lo?e.textColor:J?e.textColorTertiary:e[d("color",f)],P=g||v,U=R!=="default"&&R!=="tertiary";p={"--n-color":U?Z(P,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":U?Z(P,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":U?Z(P,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":U?Z(P,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":P,"--n-text-color-hover":P,"--n-text-color-pressed":P,"--n-text-color-focus":P,"--n-text-color-disabled":P}}else if(ao||zo){const v=lo?e.textColor:J?e.textColorTertiary:e[d("color",f)],P=g||v;ao?(p["--n-color"]=e.colorTertiary,p["--n-color-hover"]=e.colorTertiaryHover,p["--n-color-pressed"]=e.colorTertiaryPressed,p["--n-color-focus"]=e.colorSecondaryHover,p["--n-color-disabled"]=e.colorTertiary):(p["--n-color"]=e.colorQuaternary,p["--n-color-hover"]=e.colorQuaternaryHover,p["--n-color-pressed"]=e.colorQuaternaryPressed,p["--n-color-focus"]=e.colorQuaternaryHover,p["--n-color-disabled"]=e.colorQuaternary),p["--n-ripple-color"]="#0000",p["--n-text-color"]=P,p["--n-text-color-hover"]=P,p["--n-text-color-pressed"]=P,p["--n-text-color-focus"]=P,p["--n-text-color-disabled"]=P}else p={"--n-color":g||e[d("color",f)],"--n-color-hover":g?N(g):e[d("colorHover",f)],"--n-color-pressed":g?oo(g):e[d("colorPressed",f)],"--n-color-focus":g?N(g):e[d("colorFocus",f)],"--n-color-disabled":g||e[d("colorDisabled",f)],"--n-ripple-color":g||e[d("rippleColor",f)],"--n-text-color":j||(g?e.textColorPrimary:J?e.textColorTertiary:e[d("textColor",f)]),"--n-text-color-hover":j||(g?e.textColorHoverPrimary:e[d("textColorHover",f)]),"--n-text-color-pressed":j||(g?e.textColorPressedPrimary:e[d("textColorPressed",f)]),"--n-text-color-focus":j||(g?e.textColorFocusPrimary:e[d("textColorFocus",f)]),"--n-text-color-disabled":j||(g?e.textColorDisabledPrimary:e[d("textColorDisabled",f)])};let no={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};I?no={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:no={"--n-border":e[d("border",f)],"--n-border-hover":e[d("borderHover",f)],"--n-border-pressed":e[d("borderPressed",f)],"--n-border-focus":e[d("borderFocus",f)],"--n-border-disabled":e[d("borderDisabled",f)]};const{[d("height",C)]:io,[d("fontSize",C)]:Bo,[d("padding",C)]:Io,[d("paddingRound",C)]:Fo,[d("iconSize",C)]:Do,[d("borderRadius",C)]:Eo,[d("iconMargin",C)]:Wo,waveOpacity:_o}=e,Ro={"--n-width":to&&!I?io:"initial","--n-height":I?"initial":io,"--n-font-size":Bo,"--n-padding":to||I?"initial":X?Fo:Io,"--n-icon-size":Do,"--n-icon-margin":Wo,"--n-border-radius":I?"initial":to||X?io:Eo};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":x,"--n-bezier-ease-out":$,"--n-ripple-duration":H,"--n-opacity-disabled":z,"--n-wave-opacity":_o},Ho),p),no),Ro)}),T=y?mo("button",_(()=>{let s="";const{dashed:x,type:$,ghost:e,text:H,color:z,round:G,circle:B,textColor:C,secondary:O,tertiary:R,quaternary:V,strong:I}=o;x&&(s+="a"),e&&(s+="b"),H&&(s+="c"),G&&(s+="d"),B&&(s+="e"),O&&(s+="f"),R&&(s+="g"),V&&(s+="h"),I&&(s+="i"),z&&(s+="j"+fo(z)),C&&(s+="k"+fo(C));const{value:g}=w;return s+="l"+g[0],s+="m"+$[0],s}),E,o):void 0;return{selfElRef:n,waveElRef:i,mergedClsPrefix:k,mergedFocusable:r,mergedSize:w,showBorder:t,enterPressed:a,rtlEnabled:b,handleMousedown:c,handleKeydown:S,handleBlur:A,handleKeyup:M,handleClick:W,customColorCssVars:_(()=>{const{color:s}=o;if(!s)return null;const x=N(s);return{"--n-border-color":s,"--n-border-color-hover":x,"--n-border-color-pressed":oo(s),"--n-border-color-focus":x,"--n-border-color-disabled":s}}),cssVars:y?void 0:E,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:o,tag:n,onRender:i}=this;i==null||i();const a=uo(this.$slots.default,t=>t&&u("span",{class:`${o}-button__content`},t));return u(n,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&a,u(Xo,{width:!0},{default:()=>uo(this.$slots.icon,t=>(this.loading||this.renderIcon||t)&&u("span",{class:`${o}-button__icon`,style:{margin:Go(this.$slots.default)?"0":""}},u(So,null,{default:()=>this.loading?u(oe,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):u("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():t)})))}),this.iconPlacement==="left"&&a,this.text?null:u(re,{ref:"waveElRef",clsPrefix:o}),this.showBorder?u("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?u("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}}),Se=he,be=o=>{const{textColorBase:n,opacity1:i,opacity2:a,opacity3:t,opacity4:l,opacity5:w}=o;return{color:n,opacity1Depth:i,opacity2Depth:a,opacity3Depth:t,opacity4Depth:l,opacity5Depth:w}},xe={name:"Icon",common:go,self:be},ge=xe,me=K("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[F("color-transition",{transition:"color .3s var(--n-bezier)"}),F("depth",{color:"var(--n-color)"},[m("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),m("svg",{height:"1em",width:"1em"})]),pe=Object.assign(Object.assign({},eo.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),Te=Q({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:pe,setup(o){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=$o(o),a=eo("Icon","-icon",me,ge,o,n),t=_(()=>{const{depth:w}=o,{common:{cubicBezierEaseInOut:r},self:c}=a.value;if(w!==void 0){const{color:W,[`opacity${w}Depth`]:M}=c;return{"--n-bezier":r,"--n-color":W,"--n-opacity":M}}return{"--n-bezier":r,"--n-color":"","--n-opacity":""}}),l=i?mo("icon",_(()=>`${o.depth||"d"}`),t,o):void 0;return{mergedClsPrefix:n,mergedStyle:_(()=>{const{size:w,color:r}=o;return{fontSize:qo(w),color:r}}),cssVars:i?void 0:t,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var o;const{$parent:n,depth:i,mergedClsPrefix:a,component:t,onRender:l,themeClass:w}=this;return!((o=n==null?void 0:n.$options)===null||o===void 0)&&o._n_icon__&&No("icon","don't wrap `n-icon` inside `n-icon`"),l==null||l(),u("i",Ao(this.$attrs,{role:"img",class:[`${a}-icon`,w,{[`${a}-icon--depth`]:i,[`${a}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),t?u(t):this.$slots)}});export{Te as N,Se as _};
