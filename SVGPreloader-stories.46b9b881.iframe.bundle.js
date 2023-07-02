/*! For license information please see SVGPreloader-stories.46b9b881.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_component_library=self.webpackChunkreact_component_library||[]).push([[250],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/components/SVGPreloader.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return SVGPreloader_stories}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),SVGPreloader=function SVGPreloader(_ref){var _ref$indeterminate=_ref.indeterminate,indeterminate=void 0===_ref$indeterminate||_ref$indeterminate,_ref$indeterminateAni=_ref.indeterminateAnimationDuration,indeterminateAnimationDuration=void 0===_ref$indeterminateAni?"1s":_ref$indeterminateAni,_ref$circleColor=_ref.circleColor,circleColor=void 0===_ref$circleColor?"#ccc":_ref$circleColor,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=void 0===_ref$strokeWidth?10:_ref$strokeWidth,_ref$containerBackgro=_ref.containerBackgroundCSS,containerBackgroundCSS=void 0===_ref$containerBackgro?"transparent":_ref$containerBackgro,_ref$containerClassNa=_ref.containerClassName,containerClassName=void 0===_ref$containerClassNa?"":_ref$containerClassNa,_ref$wrapperClassName=_ref.wrapperClassName,wrapperClassName=void 0===_ref$wrapperClassName?"":_ref$wrapperClassName,containerStyles={position:"fixed",background:containerBackgroundCSS,top:"0",left:"0",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"};return(0,jsx_runtime.jsx)("div",{className:containerClassName,style:containerStyles,children:(0,jsx_runtime.jsx)("div",{className:wrapperClassName,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:indeterminate?(0,jsx_runtime.jsx)("div",{className:"indeterminate-loader",style:{display:"flex",justifyContent:"center"},children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{overflow:"visible"},children:(0,jsx_runtime.jsxs)("circle",{cx:"50%",cy:"50%",r:"30",stroke:circleColor,fill:"none",strokeWidth:strokeWidth,children:[(0,jsx_runtime.jsx)("animate",{attributeName:"r",repeatCount:"indefinite",dur:indeterminateAnimationDuration,values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"0s"}),(0,jsx_runtime.jsx)("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:indeterminateAnimationDuration,values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"0s"})]})})}):(0,jsx_runtime.jsx)("div",{className:"determinate-loader"})})})},components_SVGPreloader=SVGPreloader;try{SVGPreloader.displayName="SVGPreloader",SVGPreloader.__docgenInfo={description:"",displayName:"SVGPreloader",props:{indeterminate:{defaultValue:{value:"true"},description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},indeterminateAnimationDuration:{defaultValue:{value:"1s"},description:"",name:"indeterminateAnimationDuration",required:!1,type:{name:"string"}},circleColor:{defaultValue:{value:"#ccc"},description:"",name:"circleColor",required:!1,type:{name:"string"}},strokeWidth:{defaultValue:{value:"10"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},containerBackgroundCSS:{defaultValue:{value:"transparent"},description:"",name:"containerBackgroundCSS",required:!1,type:{name:"string"}},containerClassName:{defaultValue:{value:""},description:"",name:"containerClassName",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:{value:""},description:"",name:"wrapperClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SVGPreloader.tsx#SVGPreloader"]={docgenInfo:SVGPreloader.__docgenInfo,name:"SVGPreloader",path:"src/components/SVGPreloader.tsx#SVGPreloader"})}catch(__react_docgen_typescript_loader_error){}var SVGPreloader_stories={title:"Components/SVGPreloader",component:components_SVGPreloader,argTypes:{indeterminate:{control:"boolean"},indeterminateAnimationDuration:{control:"text"},circleColor:{control:"color"},strokeWidth:{control:"number"},containerClassName:{control:"text"},wrapperClassName:{control:"text"}}},Template=function Template(args){return(0,jsx_runtime.jsx)(components_SVGPreloader,(0,objectSpread2.Z)({},args))},Default=Template.bind({});Template.bind({}).args={containerBackgroundCSS:"#000",indeterminateAnimationDuration:"1s",strokeWidth:400},Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <SVGPreloader {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);