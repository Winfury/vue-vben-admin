import{d as t,aK as e,K as i,o as s,i as o,l as r,k as n}from"./index.bac2f241.js";import{c as a}from"./index.680717da.js";import"./vendor.3b1829c7.js";import"./isNumeric.2bec345d.js";import"./RightOutlined.896cb4ac.js";import"./LeftOutlined.be9496bc.js";import"./index.5444241e.js";import"./EllipsisOutlined.f9dc2390.js";import"./types.27b3a0a1.js";import"./isEqual.c14375bd.js";import"./toInteger.0f3c91b2.js";/* empty css              */import"./useTimeout.27ed5fc7.js";import"./useHeaderSetting.2bcbda37.js";import"./domUtils.b58f3771.js";import"./_stringToArray.61160ef7.js";import"./useSortable.790be59d.js";import"./index.713a7871.js";import"./index.a3e72294.js";import"./useScrollTo.8a4c87a2.js";import"./animation.098eb75d.js";import"./index.7b4881ae.js";import"./useWindowSizeFn.743ff762.js";import"./usePageContext.41b1a31f.js";import"./index.e5ab29fc.js";import"./clickOutside.d2eec81f.js";import"./index.dd4c9f12.js";import"./UpOutlined.d1ad81ca.js";import"./DownOutlined.0c0a9f0e.js";import"./PlusOutlined.763a9e29.js";import"./index.ea195e89.js";var m=t({name:"MenuItemTag",props:a,setup(t){const{prefixCls:s}=e("basic-menu-item-tag"),o=i((()=>{const{item:e,showTitle:i,isHorizontal:s}=t;if(!e||i||s)return!1;const{tag:o}=e;if(!o)return!1;const{dot:r,content:n}=o;return!(!r&&!n)})),r=i((()=>{if(!o.value)return"";const{item:e}=t,{tag:i}=e,{dot:s,content:r}=i;return s?"":r})),n=i((()=>{const{item:e}=t,{tag:i={}}=e||{},{dot:o,type:r="error"}=i;return[s,[`${s}--${r}`],{[`${s}--dot`]:o}]}));return{prefixCls:s,getTagClass:n,getShowTag:o,getContent:r}}});m.render=function(t,e,i,a,m,d){return t.getShowTag?(s(),o("span",{key:0,class:t.getTagClass},r(t.getContent),3)):n("",!0)};export default m;
