import{f as e}from"./BasicForm.408555fc.js";import{d as s}from"./ScrollContainer.992f13b6.js";import{d as o,r as t,g as i,h as l,o as r,i as a,w as n,j as p,m as d}from"./index.b35d627b.js";import{_ as c}from"./index.b87f3b54.js";import"./index.de7d5ef5.js";import"./index.b8d712d0.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.919925d7.js";import"./isEqual.81a8f73e.js";import"./get.f7a09bef.js";import"./_baseProperty.74f89655.js";import"./toInteger.ba85bbaa.js";import"./index.611e1dd6.js";import"./index.e3f20d1f.js";import"./SearchOutlined.2d9a2a5e.js";import"./EyeOutlined.3c8e22f6.js";import"./index.b1b871ed.js";import"./CheckOutlined.1e3689b0.js";import"./DownOutlined.9676ed0b.js";import"./index.3d19020c.js";import"./index.1247f73f.js";import"./UpOutlined.27cd31ae.js";import"./index.fdaf4dfb.js";import"./RightOutlined.8f262b29.js";import"./RedoOutlined.875f929c.js";import"./index.b30471b8.js";import"./EllipsisOutlined.73434e58.js";import"./types.83a5535a.js";import"./Tree.7c786691.js";import"./util.712d4622.js";/* empty css              */import"./uuid.9bbe5f4a.js";import"./index.6db39300.js";import"./DeleteOutlined.9c2c0df5.js";import"./index.1532450f.js";import"./useModal.c404053c.js";import"./useTimeout.aed71b31.js";import"./useWindowSizeFn.782faf75.js";import"./FullscreenOutlined.d5e2b78d.js";import"./index.c5a1f163.js";import"./Dropdown.31b15b73.js";import"./index.4a68e0e9.js";import"./LeftOutlined.efceb197.js";import"./download.68be7467.js";import"./domUtils.9d257af5.js";import"./_stringToArray.d2fcf67e.js";import"./index.15783dfd.js";import"./useScrollTo.a712a7b3.js";import"./index.14695b3f.js";import"./index.df0929cf.js";import"./usePageContext.ceff001a.js";import"./transButton.f2853e28.js";import"./ArrowLeftOutlined.a6b6ea94.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var f=o({components:{BasicForm:e,CollapseContainer:s,PageWrapper:c},setup(){const e=t(null),{createMessage:s}=i();return{formElRef:e,schemas:m,handleSubmit:e=>{s.success("click search,values:"+JSON.stringify(e))},setProps(s){const o=e.value;o&&o.setProps(s)}}}});const u={class:"mb-4"},b=d(" 更改labelWidth "),j=d(" 还原labelWidth "),P=d(" 更改Size "),C=d(" 还原Size "),h=d(" 禁用表单 "),x=d(" 解除禁用 "),k=d(" 紧凑表单 "),_=d(" 还原正常间距 "),O=d(" 操作按钮位置 "),v={class:"mb-4"},S=d(" 隐藏操作按钮 "),g=d(" 显示操作按钮 "),w=d(" 隐藏重置按钮 "),B=d(" 显示重置按钮 "),R=d(" 隐藏查询按钮 "),W=d(" 显示查询按钮 "),y=d(" 修改重置按钮 "),z=d(" 修改查询按钮 ");f.render=function(e,s,o,t,i,d){const c=l("a-button"),m=l("BasicForm"),f=l("CollapseContainer"),E=l("PageWrapper");return r(),a(E,{title:"Ref操作示例"},{default:n((()=>[p("div",u,[p(c,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:n((()=>[b])),_:1}),p(c,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:n((()=>[j])),_:1}),p(c,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:n((()=>[P])),_:1}),p(c,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:n((()=>[C])),_:1}),p(c,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:n((()=>[h])),_:1}),p(c,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:n((()=>[x])),_:1}),p(c,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:n((()=>[k])),_:1}),p(c,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:n((()=>[_])),_:1}),p(c,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:n((()=>[O])),_:1})]),p("div",v,[p(c,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:n((()=>[S])),_:1}),p(c,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:n((()=>[g])),_:1}),p(c,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:n((()=>[w])),_:1}),p(c,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:n((()=>[B])),_:1}),p(c,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:n((()=>[R])),_:1}),p(c,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:n((()=>[W])),_:1}),p(c,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:n((()=>[y])),_:1}),p(c,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:n((()=>[z])),_:1})]),p(f,{title:"使用ref调用表单内部函数示例"},{default:n((()=>[p(m,{schemas:e.schemas,ref:"formElRef",labelWidth:100,onSubmit:e.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;