"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},l="\u63a5\u5165\u672a\u77e5\u5b58\u50a8",i={unversionedId:"unknown_storage_zh",id:"unknown_storage_zh",title:"\u63a5\u5165\u672a\u77e5\u5b58\u50a8",description:"\u7b80\u4ecb",source:"@site/docs/unknown_storage_zh.md",sourceDirName:".",slug:"/unknown_storage_zh",permalink:"/docs/unknown_storage_zh",draft:!1,editUrl:"https://github.com/pelicon/pelicon/docs/unknown_storage_zh.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Access unknown storage",permalink:"/docs/unknown_storage"}},c={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"StorageProvider Capabilities annotation \u8bf4\u660e",id:"storageprovider-capabilities-annotation-\u8bf4\u660e",level:2}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u63a5\u5165\u672a\u77e5\u5b58\u50a8"},"\u63a5\u5165\u672a\u77e5\u5b58\u50a8"),(0,o.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"Pelicon \u53ef\u4ee5\u5229\u7528 StorageProvider CRD \u63a5\u5165\u6682\u65f6\u672a\u53d7\u652f\u6301\u7684\u5b58\u50a8\u8bbe\u5907,\u4e0d\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u63a5\u5165\u7684\u5b58\u50a8\u53ea\u80fd\u5177\u5907\u4e00\u4e9b\u57fa\u7840\u7684\u80fd\u529b\u3002"),(0,o.kt)("p",null,"\u63a5\u5165\u7684\u524d\u63d0\u6761\u4ef6:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u76ee\u6807\u5b58\u50a8\u7b26\u5408CSI\u89c4\u8303"),(0,o.kt)("li",{parentName:"ol"},"\u76ee\u6807\u5b58\u50a8\u8fd0\u884c\u6b63\u5e38")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6309\u9700\u4fee\u6539\u4ee5\u4e0byaml,\u5e76apply")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: uds.dce.daocloud.io/v1\nkind: StorageProvider\nmetadata:\n  annotations:\n    uds.dce.daocloud.io/capabilities: \'{"snapshot":true,"clone":true,"expansion":true,"protocol":"block"}\'     # Storage capabilities\n  name: ceph-rbd-1.0.0\nspec:\n  driver: rbd.csi.ceph.com    # Provision name\n  vendor: ceph                # Storage vendor name\n  product: rbd                # Storage product\n  protocol: block             # Storage protocal(block/file/local)\n  version: 1.0.0              # Version\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get sp\nNAME                   VENDOR     PRODUCT    PROTOCOL   VERSION   DRIVERNAME                  CSIDRIVER      CSICONTROLLER   STORAGEDRIVER   AGE\nceph                   ceph       rbd        block      1.0.0     rbd.csi.ceph.com            NotInstalled   NotInstalled    NotInstalled    162d\ndaocloud-local-1.0.0   daocloud   DLocal     local      1.0.0     local.storage.daocloud.io   Ready          Ready           NotInstalled    332d\nlonghorn               longhorn   longhorn   block      1.0.0     driver.longhorn.io          NotInstalled   NotInstalled    NotInstalled    168d\nxsky-block-4.1.x       xsky       SDS        block      4.1.x     iscsi.csi.xsky.com          Ready          Ready           Ready           312d\nxsky-file-4.1.x        xsky       SDS        file       4.1.x     nfs.csi.xsky.com            Ready          Ready           NotInstalled    244d\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"(\u53ef\u9009) \u7ba1\u7406CSI\u7ec4\u4ef6")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8ba9Pelicon\u8bc6\u522b\u5b58\u50a8\u7cfb\u7edf\u7684CSI\u7ec4\u4ef6,\u4ee5\u6b64\u76d1\u63a7CSI\u7684\u8fd0\u884c\u72b6\u6001,\u5e76\u5c55\u793a\u5728StorageProvider CR\u7684Status\u4e2d,\u9700\u8981\u4e3aCSI Controller\u548cCSI Driver\u6253\u6807\u7b7e(\u5047\u8bbeCSI\u7ec4\u4ef6\u5168\u90e8\u662fdeployment)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label deployment <your-csi-controller> driver=<you provisioner name> role=csi-controller\nkubectl label deployment <your-csi-driver> driver=<you provisioner name> role=csi-driver\n")),(0,o.kt)("h2",{id:"storageprovider-capabilities-annotation-\u8bf4\u660e"},"StorageProvider Capabilities annotation \u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"snapshot"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"clone"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expansion"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"protocol"),(0,o.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);