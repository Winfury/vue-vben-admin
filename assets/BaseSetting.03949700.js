import{cT as e,d as t,a4 as s,aJ as a,a0 as i,g as o,cp as r,cq as d,h as n,o as m,i as p,bw as c,j as l,m as j}from"./index.bac2f241.js";import{U as u}from"./uuid.63bad443.js";import"./index.f448100f.js";/* empty css              */import"./index.71cf2a99.js";import{R as f,C as b}from"./index.a35c0d5c.js";import{_ as x}from"./index.b701f4ed.js";import{a as h}from"./index.713a7871.js";import{h as g}from"./header.d801b988.js";import{b as O}from"./data.a32591d5.js";import{u as _}from"./useForm.6b179877.js";import"./vendor.3b1829c7.js";import"./findIndex.c92756f2.js";import"./isEqual.c14375bd.js";import"./_baseProperty.74f89655.js";import"./toInteger.0f3c91b2.js";import"./util.bd3f1dd6.js";import"./DeleteOutlined.22187302.js";import"./EyeOutlined.789f63fd.js";import"./types.27b3a0a1.js";import"./CheckOutlined.0bdba688.js";import"./responsiveObserve.c545f1cc.js";import"./index.94d2f7ae.js";import"./index.9700389e.js";import"./SearchOutlined.ded4f3bb.js";import"./index.3ad862f9.js";import"./DownOutlined.0c0a9f0e.js";import"./index.e100c9aa.js";import"./colors.93013711.js";import"./index.2977c6e4.js";import"./UpOutlined.d1ad81ca.js";import"./index.9cad8016.js";import"./RightOutlined.896cb4ac.js";import"./RedoOutlined.8686756e.js";import"./index.5444241e.js";import"./EllipsisOutlined.f9dc2390.js";import"./Tree.3c039eca.js";import"./useAttrs.8b6a0666.js";import"./index.de086aab.js";import"./index.e2ca3e81.js";import"./useTimeout.27ed5fc7.js";import"./useWindowSizeFn.743ff762.js";import"./FullscreenOutlined.bbb55f53.js";import"./index.57f1db92.js";import"./index.ea195e89.js";import"./index.26ded0b1.js";import"./LeftOutlined.be9496bc.js";import"./download.a8a349db.js";import"./domUtils.b58f3771.js";import"./_stringToArray.61160ef7.js";import"./index.a3e72294.js";import"./useScrollTo.8a4c87a2.js";import"./animation.098eb75d.js";var C;(C||(C={})).ACCOUNT_INFO="/account/getAccountInfo";var v=t({components:{BasicForm:x,CollapseContainer:h,Button:s,Upload:u,Icon:a,[f.name]:f,[b.name]:b},setup(){const{createMessage:t}=o(),[s,{setFieldsValue:a}]=_({labelWidth:120,schemas:O,showActionButtonGroup:!1});return i((async()=>{const t=await e.request({url:C.ACCOUNT_INFO,method:"GET"});a(t)})),{headerImg:g,register:s,handleSubmit:()=>{t.success("更新成功！")}}}});const I=c("data-v-dad0b9f0");r("data-v-dad0b9f0");const w={class:"change-avatar"},y=l("div",{class:"mb-2"}," 头像 ",-1),F=j("更换头像 "),T=j(" 更新基本信息 ");d();const U=I(((e,t,s,a,i,o)=>{const r=n("BasicForm"),d=n("a-col"),c=n("Icon"),j=n("Button"),u=n("Upload"),f=n("a-row"),b=n("CollapseContainer");return m(),p(b,{title:"基本设置",canExpan:!1},{default:I((()=>[l(f,{gutter:24},{default:I((()=>[l(d,{span:14},{default:I((()=>[l(r,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:I((()=>[l("div",w,[y,l("img",{width:"140",src:e.headerImg},null,8,["src"]),l(u,{showUploadList:!1},{default:I((()=>[l(j,{type:"ghost",class:"ml-5"},{default:I((()=>[l(c,{icon:"feather:upload"}),F])),_:1})])),_:1})])])),_:1})])),_:1}),l(j,{type:"primary",onClick:e.handleSubmit},{default:I((()=>[T])),_:1},8,["onClick"])])),_:1})}));v.render=U,v.__scopeId="data-v-dad0b9f0";export default v;
