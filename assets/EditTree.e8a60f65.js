import{B as t,t as e}from"./data.084f311c.js";import{a as i}from"./index.713a7871.js";import{_ as a}from"./index.ad5aa56c.js";import{d as r,bP as s,h as o,o as n,i as l,w as m,j as p}from"./index.bac2f241.js";import{P as d}from"./PlusOutlined.763a9e29.js";import{D as c}from"./DeleteOutlined.22187302.js";import"./index.a3e72294.js";import"./domUtils.b58f3771.js";import"./_stringToArray.61160ef7.js";import"./RightOutlined.896cb4ac.js";/* empty css              */import"./useTimeout.27ed5fc7.js";import"./useScrollTo.8a4c87a2.js";import"./animation.098eb75d.js";import"./index.da461302.js";import"./index.5444241e.js";import"./EllipsisOutlined.f9dc2390.js";import"./types.27b3a0a1.js";import"./isEqual.c14375bd.js";import"./toInteger.0f3c91b2.js";import"./DownOutlined.0c0a9f0e.js";import"./index.4ceb8376.js";import"./usePageContext.41b1a31f.js";import"./transButton.7f4124c2.js";import"./ArrowLeftOutlined.5a8a1263.js";import"./vendor.3b1829c7.js";var f=r({components:{BasicTree:t,CollapseContainer:i,PageWrapper:a},setup:()=>({treeData:e,actionList:[{render:t=>s(d,{class:"ml-2",onClick:()=>{}})},{render:()=>s(c)}],getRightMenuList:function(t){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]}})});const j={class:"flex"};f.render=function(t,e,i,a,r,s){const d=o("BasicTree"),c=o("CollapseContainer"),f=o("PageWrapper");return n(),l(f,{title:"Tree函数操作示例"},{default:m((()=>[p("div",j,[p(c,{title:"右侧操作按钮",class:"mr-4",style:{width:"33%"}},{default:m((()=>[p(d,{treeData:t.treeData,actionList:t.actionList},null,8,["treeData","actionList"])])),_:1}),p(c,{title:"右键菜单",class:"mr-4",style:{width:"33%"}},{default:m((()=>[p(d,{treeData:t.treeData,beforeRightClick:t.getRightMenuList},null,8,["treeData","beforeRightClick"])])),_:1})])])),_:1})};export default f;
