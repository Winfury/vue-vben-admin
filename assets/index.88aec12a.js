import{d as e,aF as s,aK as t,K as i,bR as a,h as r,o,i as p,j as n,w as m,b0 as d,aL as l,aM as c,a7 as u,bx as f}from"./index.bac2f241.js";import{I as g}from"./index.26ded0b1.js";import{_ as j}from"./index.ad5aa56c.js";import"./vendor.3b1829c7.js";import"./LeftOutlined.be9496bc.js";import"./RightOutlined.896cb4ac.js";import"./index.da461302.js";import"./index.5444241e.js";import"./EllipsisOutlined.f9dc2390.js";import"./types.27b3a0a1.js";import"./isEqual.c14375bd.js";import"./toInteger.0f3c91b2.js";import"./DownOutlined.0c0a9f0e.js";/* empty css              */import"./index.4ceb8376.js";import"./usePageContext.41b1a31f.js";import"./transButton.7f4124c2.js";import"./ArrowLeftOutlined.5a8a1263.js";var b=e({name:"ImagePreview",components:{Image:g,PreviewGroup:g.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:s}=t("image-preview");return{prefixCls:s,getImageList:i((()=>{const{imageList:s}=e;return s?s.map((e=>a(e)?{src:e,placeholder:!1}:e)):[]}))}}});b.render=function(e,s,t,i,a,g){const j=r("Image"),b=r("PreviewGroup");return o(),p("div",{class:e.prefixCls},[n(b,null,{default:m((()=>[!e.imageList||e.$slots.default?d(e.$slots,"default",{key:0}):(o(!0),p(l,{key:1},c(e.getImageList,(e=>(o(),p(j,u({key:e.src},e),f({_:2},[e.placeholder?{name:"placeholder",fn:m((()=>[n(j,u(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1})],2)};const v=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var x=e({components:{PageWrapper:j,ImagePreview:b},setup:()=>({imgList:v})});x.render=function(e,s,t,i,a,d){const l=r("ImagePreview"),c=r("PageWrapper");return o(),p(c,{title:"图片预览示例"},{default:m((()=>[n(l,{imageList:e.imgList},null,8,["imageList"])])),_:1})};export default x;
