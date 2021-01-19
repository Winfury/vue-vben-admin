import e from"./DetailModal.9e5e0922.js";import{_ as r}from"./index.4a30314c.js";import{b as i}from"./index.56b9f6b2.js";import{c1 as o,d as t,r as s,u as a,a0 as n,a7 as d,bo as l,cg as c,i as m,o as p,j as u,Q as f,S as j,ak as b,al as x,k as g,w as E,n as y,m as R}from"./index.50b828bd.js";import{getColumns as k}from"./data.dc2e88e3.js";import{f as T}from"./index.d8babbed.js";import{u as w}from"./useTable.cbfba597.js";import"./index.c351bdee.js";import"./index.c741f5a3.js";import"./index.ea618bdb.js";import"./index.3550ea99.js";import"./domUtils.4d4b190d.js";import"./RightOutlined.238a31d2.js";import"./index.8d91dadc.js";import"./useTimeout.027d8171.js";import"./useScrollTo.3be61fce.js";import"./animation.64c13706.js";import"./useDescription.206b14ce.js";import"./index.47fbc714.js";import"./index.fdcc7c21.js";import"./index.673364b0.js";import"./index.27bb0464.js";import"./clickOutside.9a58ed15.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./CheckOutlined.24d7da0d.js";import"./uuid.467c825e.js";import"./useWindowSizeFn.48b953f5.js";import"./index.a45b2b74.js";import"./useSortable.3afa6002.js";import"./SettingOutlined.0dd228fc.js";import"./useExpose.b6f197c5.js";import"./useForm.192c15e4.js";import"./useAttrs.cfd03cd2.js";import"./FullscreenOutlined.aede640d.js";import"./index.9284d4e4.js";import"./index.38c8e961.js";import"./index.f4c035d6.js";import"./index.d469528e.js";import"./index.443a48d5.js";import"./index.643da10c.js";import"./download.bf43035d.js";var h;(h||(h={})).Error="/error";var C=t({name:"ErrorHandler",components:{DetailModal:e,BasicTable:r,TableAction:T},setup(){const e=s(),r=s([]),{t:t}=a(),[m,{setTableData:p}]=w({title:t("sys.errorLog.tableTitle"),columns:k(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[u,{openModal:f}]=i();return n((()=>c.getErrorInfoState),(e=>{d((()=>{p(l(e))}))}),{immediate:!0}),{register:m,registerModal:u,handleDetail:function(r){e.value=r,f(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){r.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await o.request({url:h.Error,method:"GET"})},imgListRef:r,rowInfoRef:e,t:t}}});const D={class:"p-4"};C.render=function(e,r,i,o,t,s){const a=m("DetailModal"),n=m("a-button"),d=m("TableAction"),l=m("BasicTable");return p(),u("div",D,[(p(!0),u(f,null,j(e.imgListRef,(e=>b((p(),u("img",{key:e,src:e},null,8,["src"])),[[x,!1]]))),128)),g(a,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),g(l,{onRegister:e.register,class:"error-handle-table"},{toolbar:E((()=>[g(n,{onClick:e.fireVueError,type:"primary"},{default:E((()=>[y(R(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),g(n,{onClick:e.fireResourceError,type:"primary"},{default:E((()=>[y(R(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),g(n,{onClick:e.fireAjaxError,type:"primary"},{default:E((()=>[y(R(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:E((({record:r})=>[g(d,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default C;