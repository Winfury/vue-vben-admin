import{d as e,cp as t,cq as i,h as s,o,i as r,j as a,bw as n,m}from"./index.cf365317.js";import{A as d}from"./index.fbe41d70.js";import{D as p}from"./index.607b19dc.js";import{D as c}from"./index.2e694ac7.js";import{_ as j}from"./index.b75404bd.js";import{step2Schemas as f}from"./data.2505cb7f.js";import{u as l}from"./useForm.c2bcb6ec.js";import"./vendor.3b1829c7.js";import"./responsiveObserve.c545f1cc.js";import"./index.ce4dce0a.js";import"./index.a947876e.js";import"./findIndex.dfb4a59a.js";import"./isEqual.a74a7c19.js";import"./get.719a4219.js";import"./_baseProperty.74f89655.js";import"./toInteger.4b5728ae.js";import"./index.161c7f6b.js";import"./index.9e4baf11.js";import"./SearchOutlined.70021315.js";import"./EyeOutlined.37772c3d.js";import"./index.acfd6410.js";import"./CheckOutlined.e5d7bf16.js";import"./DownOutlined.a5bc93c0.js";import"./index.8749b4fc.js";import"./colors.31ba1fd6.js";import"./index.444ab33f.js";import"./UpOutlined.da4838f7.js";import"./index.fb5bb62b.js";import"./RightOutlined.dff2a05b.js";import"./RedoOutlined.f186bbf9.js";import"./index.0444d019.js";import"./EllipsisOutlined.45abe0a5.js";import"./types.d79f185c.js";import"./Tree.41dfced6.js";import"./util.2327827f.js";import"./useAttrs.ea7f6219.js";/* empty css              */import"./uuid.20e2b0e6.js";import"./index.1077fb7c.js";import"./DeleteOutlined.ce3d1c59.js";import"./index.5622acee.js";import"./useTimeout.cb6e36e1.js";import"./useWindowSizeFn.308a0bee.js";import"./index.eb3022f0.js";import"./index.0b90850f.js";import"./domUtils.fbaa4cd3.js";import"./_stringToArray.8266c95f.js";import"./useScrollTo.e29c35ef.js";import"./animation.5370f8e0.js";import"./FullscreenOutlined.d0ce88af.js";import"./index.579d8600.js";import"./index.f96d6e91.js";import"./LeftOutlined.9278b1ed.js";import"./download.c885af96.js";var u=e({components:{BasicForm:j,[d.name]:d,[p.name]:p,[c.name]:c,[c.Item.name]:c.Item},emits:["next","prev"],setup(e,{emit:t}){const[i,{validate:s,setProps:o}]=l({labelWidth:80,schemas:f,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){t("prev")},submitFunc:async function(){try{const e=await s();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),t("next",e)}),1500)}catch(e){}}});return{register:i}}});const b=n("data-v-01481d2f");t("data-v-01481d2f");const x={class:"step2"},O=m(" ant-design@alipay.com "),g=m(" test@example.com "),v=m(" Vben "),_=m(" 500元 ");i();const h=b(((e,t,i,n,m,d)=>{const p=s("a-alert"),c=s("a-descriptions-item"),j=s("a-descriptions"),f=s("a-divider"),l=s("BasicForm");return o(),r("div",x,[a(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),a(j,{column:1,class:"mt-5"},{default:b((()=>[a(c,{label:"付款账户"},{default:b((()=>[O])),_:1}),a(c,{label:"收款账户"},{default:b((()=>[g])),_:1}),a(c,{label:"收款人姓名"},{default:b((()=>[v])),_:1}),a(c,{label:"转账金额"},{default:b((()=>[_])),_:1})])),_:1}),a(f),a(l,{onRegister:e.register},null,8,["onRegister"])])}));u.render=h,u.__scopeId="data-v-01481d2f";export default u;