import{_ as e,a as i}from"./index.e2ca3e81.js";import{_ as o}from"./index.b701f4ed.js";import{d as t,r as s,h as r,o as d,i as a,w as n,j as m,a7 as p}from"./index.bac2f241.js";import{u as l}from"./useForm.6b179877.js";import"./useTimeout.27ed5fc7.js";import"./useAttrs.8b6a0666.js";import"./useWindowSizeFn.743ff762.js";import"./index.713a7871.js";import"./index.a3e72294.js";import"./domUtils.b58f3771.js";import"./_stringToArray.61160ef7.js";import"./RightOutlined.896cb4ac.js";/* empty css              */import"./useScrollTo.8a4c87a2.js";import"./animation.098eb75d.js";import"./FullscreenOutlined.bbb55f53.js";import"./isEqual.c14375bd.js";import"./index.94d2f7ae.js";import"./index.71cf2a99.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.c92756f2.js";import"./_baseProperty.74f89655.js";import"./toInteger.0f3c91b2.js";import"./index.a35c0d5c.js";import"./index.9700389e.js";import"./SearchOutlined.ded4f3bb.js";import"./EyeOutlined.789f63fd.js";import"./index.3ad862f9.js";import"./CheckOutlined.0bdba688.js";import"./DownOutlined.0c0a9f0e.js";import"./index.e100c9aa.js";import"./colors.93013711.js";import"./index.2977c6e4.js";import"./UpOutlined.d1ad81ca.js";import"./index.9cad8016.js";import"./RedoOutlined.8686756e.js";import"./index.5444241e.js";import"./EllipsisOutlined.f9dc2390.js";import"./types.27b3a0a1.js";import"./Tree.3c039eca.js";import"./util.bd3f1dd6.js";import"./uuid.63bad443.js";import"./index.f448100f.js";import"./DeleteOutlined.22187302.js";import"./index.de086aab.js";import"./index.57f1db92.js";import"./index.ea195e89.js";import"./index.26ded0b1.js";import"./LeftOutlined.be9496bc.js";import"./download.a8a349db.js";const j=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=t({components:{BasicModal:e,BasicForm:o},setup(){const e=s({}),[o,{}]=l({labelWidth:120,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=i((i=>{e.value={field2:i.data,field1:i.info}}));return{register:t,schemas:j,registerForm:o,model:e}}});c.render=function(e,i,o,t,s,l){const j=r("BasicForm"),c=r("BasicModal");return d(),a(c,p(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:n((()=>[m(j,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default c;
