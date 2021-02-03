import{_ as e}from"./index.e6874980.js";import{o as t}from"./select.9279545c.js";import{d as i}from"./table.9209d7ca.js";import{d,h as o,o as n,i as s,j as r}from"./index.bac2f241.js";import{u as a}from"./useTable.44e259de.js";import"./index.3ad862f9.js";import"./SearchOutlined.ded4f3bb.js";import"./CheckOutlined.0bdba688.js";import"./DownOutlined.0c0a9f0e.js";import"./index.b701f4ed.js";import"./index.94d2f7ae.js";import"./index.71cf2a99.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.c92756f2.js";import"./isEqual.c14375bd.js";import"./_baseProperty.74f89655.js";import"./toInteger.0f3c91b2.js";import"./index.a35c0d5c.js";import"./index.9700389e.js";import"./EyeOutlined.789f63fd.js";import"./index.e100c9aa.js";import"./colors.93013711.js";import"./index.2977c6e4.js";import"./UpOutlined.d1ad81ca.js";import"./index.9cad8016.js";import"./RightOutlined.896cb4ac.js";import"./RedoOutlined.8686756e.js";import"./index.5444241e.js";import"./EllipsisOutlined.f9dc2390.js";import"./types.27b3a0a1.js";import"./Tree.3c039eca.js";import"./util.bd3f1dd6.js";import"./useAttrs.8b6a0666.js";/* empty css              */import"./uuid.63bad443.js";import"./index.f448100f.js";import"./DeleteOutlined.22187302.js";import"./index.de086aab.js";import"./index.e2ca3e81.js";import"./useTimeout.27ed5fc7.js";import"./useWindowSizeFn.743ff762.js";import"./index.713a7871.js";import"./index.a3e72294.js";import"./domUtils.b58f3771.js";import"./_stringToArray.61160ef7.js";import"./useScrollTo.8a4c87a2.js";import"./animation.098eb75d.js";import"./FullscreenOutlined.bbb55f53.js";import"./index.57f1db92.js";import"./index.ea195e89.js";import"./index.26ded0b1.js";import"./LeftOutlined.be9496bc.js";import"./download.a8a349db.js";import"./index.f147ac29.js";import"./DoubleLeftOutlined.e5df23b0.js";import"./DoubleRightOutlined.a19cd4b1.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.7f4124c2.js";import"./CaretDownFilled.5f945c29.js";import"./clickOutside.d2eec81f.js";import"./useSortable.790be59d.js";import"./SettingOutlined.a7ee622b.js";import"./useExpose.1a9952e9.js";import"./useForm.6b179877.js";const p=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:t},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var m=d({components:{BasicTable:e},setup(){const[e]=a({title:"可编辑单元格示例",api:i,columns:p,showIndexColumn:!1,bordered:!0});return{registerTable:e,handleEditEnd:function({record:e,index:t,key:i,value:d}){},handleEditCancel:function(){}}}});const l={class:"p-4"};m.render=function(e,t,i,d,a,p){const m=o("BasicTable");return n(),s("div",l,[r(m,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])};export default m;
