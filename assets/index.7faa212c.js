import{d as e,aF as s,aK as t,$ as i,bR as r,h as a,o,i as p,j as n,w as m,b0 as d,aL as l,aM as u,T as c,bx as f}from"./index.25b7b5fc.js";import{I as g}from"./index.ec6a717d.js";import{_ as j}from"./index.751a0b92.js";import"./vendor.3b1829c7.js";import"./LeftOutlined.06ccfb10.js";import"./RightOutlined.80d69337.js";import"./index.1a47fee9.js";import"./index.10a2e5b4.js";import"./EllipsisOutlined.3ddff257.js";import"./types.75b2061b.js";import"./isEqual.ef398636.js";import"./toInteger.34e54435.js";import"./DownOutlined.8796a279.js";import"./index.95c10fda.js";import"./index.fc4261e4.js";import"./usePageContext.003372c7.js";import"./transButton.6bbddf74.js";import"./ArrowLeftOutlined.5053e10e.js";var b=e({name:"ImagePreview",components:{Image:g,PreviewGroup:g.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:s}=t("image-preview");return{prefixCls:s,getImageList:i((()=>{const{imageList:s}=e;return s?s.map((e=>r(e)?{src:e,placeholder:!1}:e)):[]}))}}});b.render=function(e,s,t,i,r,g){const j=a("Image"),b=a("PreviewGroup");return o(),p("div",{class:e.prefixCls},[n(b,null,{default:m((()=>[!e.imageList||e.$slots.default?d(e.$slots,"default",{key:0}):(o(!0),p(l,{key:1},u(e.getImageList,(e=>(o(),p(j,c({key:e.src},e),f({_:2},[e.placeholder?{name:"placeholder",fn:m((()=>[n(j,c(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1})],2)};const v=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var x=e({components:{PageWrapper:j,ImagePreview:b},setup:()=>({imgList:v})});x.render=function(e,s,t,i,r,d){const l=a("ImagePreview"),u=a("PageWrapper");return o(),p(u,{title:"图片预览示例"},{default:m((()=>[n(l,{imageList:e.imgList},null,8,["imageList"])])),_:1})};export default x;
