import{_ as i,F as e}from"./index.4a30314c.js";import{getCustomHeaderColumns as s}from"./tableData.7aa0192c.js";import{d as t}from"./table.f3ec8794.js";import{B as o}from"./index.ea618bdb.js";import{d as r,i as d,o as m,j as a,k as n,w as p,n as c}from"./index.50b828bd.js";import{u as j}from"./useTable.cbfba597.js";import"./index.47fbc714.js";import"./index.d8babbed.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.cfd03cd2.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.56b9f6b2.js";import"./useTimeout.027d8171.js";import"./useWindowSizeFn.48b953f5.js";import"./FullscreenOutlined.aede640d.js";import"./index.a45b2b74.js";import"./index.443a48d5.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.bf43035d.js";import"./domUtils.4d4b190d.js";import"./index.27bb0464.js";import"./RightOutlined.238a31d2.js";import"./clickOutside.9a58ed15.js";import"./CheckOutlined.24d7da0d.js";import"./useSortable.3afa6002.js";import"./SettingOutlined.0dd228fc.js";import"./useExpose.b6f197c5.js";import"./useForm.192c15e4.js";import"./index.3550ea99.js";import"./useScrollTo.3be61fce.js";import"./animation.64c13706.js";var l=r({components:{BasicTable:i,FormOutlined:e,BasicHelp:o},setup(){const[i]=j({title:"定高/头部自定义",api:t,columns:s(),canResize:!1,scroll:{y:100}});return{registerTable:i}}});const b={class:"p-4"},u=c(" 姓名 "),x=c(" 地址 ");l.render=function(i,e,s,t,o,r){const c=d("BasicHelp"),j=d("FormOutlined"),l=d("BasicTable");return m(),a("div",b,[n(l,{onRegister:i.registerTable},{customTitle:p((()=>[n("span",null,[u,n(c,{class:"ml-2",text:"姓名"})])])),customAddress:p((()=>[x,n(j,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default l;