import{d as e,h as t,o as i,i as o,j as s,w as d,m as r,l as a}from"./index.b35d627b.js";import{T as m}from"./index.3d19020c.js";import{_ as n,T as p}from"./index.65e86e12.js";import{d as l}from"./table.b866a54a.js";import{u as j}from"./useTable.d97d23c5.js";import"./vendor.3b1829c7.js";import"./index.b1b871ed.js";import"./SearchOutlined.2d9a2a5e.js";import"./CheckOutlined.1e3689b0.js";import"./DownOutlined.9676ed0b.js";import"./BasicForm.408555fc.js";import"./index.de7d5ef5.js";import"./index.b8d712d0.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.919925d7.js";import"./isEqual.81a8f73e.js";import"./get.f7a09bef.js";import"./_baseProperty.74f89655.js";import"./toInteger.ba85bbaa.js";import"./index.611e1dd6.js";import"./index.e3f20d1f.js";import"./EyeOutlined.3c8e22f6.js";import"./index.1247f73f.js";import"./UpOutlined.27cd31ae.js";import"./index.fdaf4dfb.js";import"./RightOutlined.8f262b29.js";import"./RedoOutlined.875f929c.js";import"./index.b30471b8.js";import"./EllipsisOutlined.73434e58.js";import"./types.83a5535a.js";import"./Tree.7c786691.js";import"./util.712d4622.js";/* empty css              */import"./uuid.9bbe5f4a.js";import"./index.6db39300.js";import"./DeleteOutlined.9c2c0df5.js";import"./index.1532450f.js";import"./useModal.c404053c.js";import"./useTimeout.aed71b31.js";import"./useWindowSizeFn.782faf75.js";import"./ScrollContainer.992f13b6.js";import"./index.15783dfd.js";import"./domUtils.9d257af5.js";import"./_stringToArray.d2fcf67e.js";import"./useScrollTo.a712a7b3.js";import"./FullscreenOutlined.d5e2b78d.js";import"./index.c5a1f163.js";import"./Dropdown.31b15b73.js";import"./index.4a68e0e9.js";import"./LeftOutlined.efceb197.js";import"./download.68be7467.js";import"./index.12125303.js";import"./DoubleLeftOutlined.68ba66ac.js";import"./DoubleRightOutlined.84839c9c.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.f2853e28.js";import"./CaretDownFilled.d942ecdd.js";import"./useForm.29669a4d.js";import"./clickOutside.69c0d795.js";import"./useSortable.1ecd4d79.js";import"./useExpose.ef2e2945.js";const c=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var f=e({components:{BasicTable:n,TableImg:p,Tag:m},setup(){const[e]=j({title:"自定义列内容",api:l,columns:c,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const u={class:"p-4"};f.render=function(e,m,n,p,l,j){const c=t("Tag"),f=t("TableImg"),b=t("BasicTable");return i(),o("div",u,[s(b,{onRegister:e.registerTable},{id:d((({record:e})=>[r(" ID: "+a(e.id),1)])),no:d((({record:e})=>[s(c,{color:"green"},{default:d((()=>[r(a(e.no),1)])),_:2},1024)])),img:d((()=>[s(f,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:d((({record:e})=>[s(c,{color:"green"},{default:d((()=>[r(a(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default f;