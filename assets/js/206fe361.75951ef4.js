"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[209],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||c;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5237:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const c={},a="\u6982\u5ff5",i={unversionedId:"concept_zh",id:"concept_zh",title:"\u6982\u5ff5",description:"StorageProvider CRD",source:"@site/docs/concept_zh.md",sourceDirName:".",slug:"/concept_zh",permalink:"/docs/concept_zh",draft:!1,editUrl:"https://github.com/pelicon/pelicon/docs/concept_zh.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Concept",permalink:"/docs/concept"},next:{title:"\u8f6f\u4ef6\u67b6\u6784",permalink:"/docs/design/arch"}},p={},l=[{value:"StorageProvider CRD",id:"storageprovider-crd",level:2}],u={toc:l};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,o.kt)("h2",{id:"storageprovider-crd"},"StorageProvider CRD"),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7StorageProvider\u8fd9\u4e2aCRD,\u544a\u8bc9Pelicon\u5e0c\u671b\u63a5\u5165\u7684\u5b58\u50a8\u7cfb\u7edf. Pelicon\u7684StorageProvider Controller\u7c7b\u4f3cOperator,\u5b83\u4f1aWatch StorageProvider CR,\u53d1\u73b0\u7528\u6237\u521b\u5efa\u7684StorageProvider\u540e\u4f1a\u8c03\u7528\u76f8\u5e94\u7684Plugin,\u5b89\u88c5\u5b58\u50a8\u7684CSI\u9a71\u52a8.\u7136\u540e\u6301\u7eed\u76d1\u63a7CSI\u9a71\u52a8\u7684\u8fd0\u884c\u72b6\u6001."))}s.isMDXComponent=!0}}]);