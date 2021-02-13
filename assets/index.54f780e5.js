import{d as e,aV as o,aW as t,aG as s,aB as r,u as a,K as i,f as n,bf as l,h as d,o as c,i as m,j as p,w as u,k as f,l as j,aL as b}from"./index.b35d627b.js";import{D as g,M as x}from"./index.b30471b8.js";/* empty css              */import"./Dropdown.31b15b73.js";import{D as h}from"./siteSetting.c485f07c.js";import{d as k}from"./useHeaderSetting.8bba3648.js";import{u as _}from"./useModal.c404053c.js";import{h as D}from"./header.d801b988.js";import"./vendor.3b1829c7.js";import"./RightOutlined.8f262b29.js";import"./EllipsisOutlined.73434e58.js";import"./types.83a5535a.js";import"./isEqual.81a8f73e.js";import"./toInteger.ba85bbaa.js";import"./useTimeout.aed71b31.js";import"./useWindowSizeFn.782faf75.js";import"./ScrollContainer.992f13b6.js";import"./index.15783dfd.js";import"./domUtils.9d257af5.js";import"./_stringToArray.d2fcf67e.js";import"./useScrollTo.a712a7b3.js";import"./FullscreenOutlined.d5e2b78d.js";var C=e({name:"UserDropdown",components:{Dropdown:g,Menu:x,MenuItem:o((()=>t((()=>import("./DropMenuItem.e8938bd3.js")),["/assets/DropMenuItem.e8938bd3.js","/assets/index.f8cd4764.css","/assets/index.b35d627b.js","/assets/index.cfcd32c1.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.b30471b8.js","/assets/index.66628971.css","/assets/RightOutlined.8f262b29.js","/assets/EllipsisOutlined.73434e58.js","/assets/types.83a5535a.js","/assets/isEqual.81a8f73e.js","/assets/toInteger.ba85bbaa.js"]))),MenuDivider:x.Divider,LockAction:o((()=>t((()=>import("./LockModal.737ed328.js")),["/assets/LockModal.737ed328.js","/assets/LockModal.c2a09df5.css","/assets/index.f8cd4764.css","/assets/index.b35d627b.js","/assets/index.cfcd32c1.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/useModal.c404053c.js","/assets/useModal.b1a1b797.css","/assets/useTimeout.aed71b31.js","/assets/useWindowSizeFn.782faf75.js","/assets/ScrollContainer.992f13b6.js","/assets/ScrollContainer.74ae2ade.css","/assets/index.15783dfd.js","/assets/index.121e7eba.css","/assets/domUtils.9d257af5.js","/assets/_stringToArray.d2fcf67e.js","/assets/RightOutlined.8f262b29.js","/assets/useScrollTo.a712a7b3.js","/assets/FullscreenOutlined.d5e2b78d.js","/assets/isEqual.81a8f73e.js","/assets/BasicForm.408555fc.js","/assets/BasicForm.943a02b0.css","/assets/index.de7d5ef5.js","/assets/index.4f6b9997.css","/assets/index.b8d712d0.js","/assets/index.0edc9df2.css","/assets/responsiveObserve.c545f1cc.js","/assets/findIndex.919925d7.js","/assets/get.f7a09bef.js","/assets/_baseProperty.74f89655.js","/assets/toInteger.ba85bbaa.js","/assets/index.611e1dd6.js","/assets/index.e3f20d1f.js","/assets/index.8260b05e.css","/assets/SearchOutlined.2d9a2a5e.js","/assets/EyeOutlined.3c8e22f6.js","/assets/index.b1b871ed.js","/assets/index.af98ed23.css","/assets/CheckOutlined.1e3689b0.js","/assets/DownOutlined.9676ed0b.js","/assets/index.3d19020c.js","/assets/index.06c7b3c0.css","/assets/index.1247f73f.js","/assets/index.0b3eba88.css","/assets/UpOutlined.27cd31ae.js","/assets/index.fdaf4dfb.js","/assets/index.4a4a1593.css","/assets/RedoOutlined.875f929c.js","/assets/index.b30471b8.js","/assets/index.66628971.css","/assets/EllipsisOutlined.73434e58.js","/assets/types.83a5535a.js","/assets/Tree.7c786691.js","/assets/util.712d4622.js","/assets/uuid.9bbe5f4a.js","/assets/uuid.0e60e827.css","/assets/index.6db39300.js","/assets/index.91ad067c.css","/assets/DeleteOutlined.9c2c0df5.js","/assets/index.1532450f.js","/assets/index.f8b789db.css","/assets/index.c5a1f163.js","/assets/index.2b38113f.css","/assets/Dropdown.31b15b73.js","/assets/index.4a68e0e9.js","/assets/index.5e8b94d8.css","/assets/LeftOutlined.efceb197.js","/assets/download.68be7467.js","/assets/useForm.29669a4d.js","/assets/header.d801b988.js"])))},props:{theme:s.oneOf(["dark","light"])},setup(){const{prefixCls:e}=r("header-user-dropdown"),{t:o}=a(),{getShowDoc:t}=k(),s=i((()=>{const{realName:e="",desc:o}=n.getUserInfoState||{};return{realName:e,desc:o}})),[d,{openModal:c}]=_();return{prefixCls:e,t:o,getUserInfo:s,handleMenuClick:function(e){switch(e.key){case"loginOut":n.confirmLoginOut();break;case"doc":l(h);break;case"lock":c(!0)}},getShowDoc:t,headerImg:D,register:d}}});C.render=function(e,o,t,s,r,a){const i=d("MenuItem"),n=d("MenuDivider"),l=d("Menu"),g=d("Dropdown"),x=d("LockAction");return c(),m(b,null,[p(g,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:u((()=>[p(l,{onClick:e.handleMenuClick},{default:u((()=>[e.getShowDoc?(c(),m(i,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):f("",!0),p(n),p(i,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"]),p(i,{key:"loginOut",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:exit-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:u((()=>[p("span",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[p("img",{class:`${e.prefixCls}__header`,src:e.headerImg},null,10,["src"]),p("span",{class:`${e.prefixCls}__info`},[p("span",{class:`${e.prefixCls}__name anticon`},j(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),p(x,{onRegister:e.register},null,8,["onRegister"])],64)};export default C;