let i=document.createElement("style");i.innerHTML=".list-search__header-form[data-v-f71ac9a6]{margin-bottom:-16px}.list-search__container[data-v-f71ac9a6]{padding:12px;margin:24px;background:#fff}.list-search__title[data-v-f71ac9a6]{margin-bottom:12px;font-size:18px}.list-search__content[data-v-f71ac9a6]{color:rgba(0,0,0,.65)}.list-search__action[data-v-f71ac9a6]{margin-top:10px}.list-search__action-item[data-v-f71ac9a6]{display:inline-block;padding:0 16px;color:rgba(0,0,0,.45)}.list-search__action-item[data-v-f71ac9a6]:nth-child(1){padding-left:0}.list-search__action-item[data-v-f71ac9a6]:nth-child(1),.list-search__action-item[data-v-f71ac9a6]:nth-child(2){border-right:1px solid rgba(206,206,206,.4)}.list-search__action-icon[data-v-f71ac9a6]{margin-right:3px}.list-search__time[data-v-f71ac9a6]{position:absolute;right:20px;color:rgba(0,0,0,.45)}",document.head.appendChild(i);import{a as t,i as a,o as s,j as e,k as o,Y as r,aH as c,X as n,m as l,l as d,n as p}from"./index.29609d4f.js";import"./xlsx.a48e520c.js";import"./index.82fc86f3.js";import"./Trigger.37c59d90.js";import"./omit.2ffcf325.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.17ee02bd.js";import"./CheckOutlined.1a4e9b39.js";import{s as m}from"./index.2de68cf3.js";import"./index.c737d9ca.js";import"./colors.71b925e9.js";import"./index.b4f57292.js";import"./RightOutlined.f0cf9056.js";import"./index.69ce03f6.js";import"./types.18a8271d.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.b8f23ccf.js";import"./index.1cc941bc.js";import"./index.7e984e4b.js";import"./UpOutlined.edb786d7.js";import"./DownOutlined.cb72a579.js";import{T as f}from"./index.b09bf7d1.js";import"./index.1a84a7b6.js";import"./index.4fff7c35.js";import"./CloseOutlined.96b80b97.js";import"./index.b2fafe90.js";import"./LeftOutlined.995dd1b7.js";import"./functional.d7bff21c.js";import"./RightOutlined.f1b92bb1.js";import"./useContext.104c8f73.js";import"./useTimeout.972bc5d4.js";import"./useDebounce.58e00ed6.js";import"./useEventListener.baa06eae.js";import"./useBreakpoint.a60d1be1.js";import"./resizeEvent.f7059d8c.js";import"./tsxHelper.9170d194.js";import"./index.9d72a4f6.js";import"./propTypes.8c664f5d.js";import{I as _}from"./index.c2092c4e.js";import"./index.875b9907.js";import"./useWindowSizeFn.9e056069.js";import"./uuid.40269c00.js";import"./download.0813916e.js";import{searchList as j,actions as x,schemas as u}from"./data.d641f7b5.js";var b=t({components:{Icon:_,Tag:f,BasicForm:m},setup:()=>({prefixCls:"list-search",list:j,actions:x,schemas:u})});const h=n("data-v-f71ac9a6"),g=h(((i,t,n,m,f,_)=>{const j=a("BasicForm"),x=a("a-page-header"),u=a("Icon"),b=a("Tag"),g=a("a-list-item-meta"),v=a("a-list-item"),C=a("a-list");return s(),e("div",{class:i.prefixCls},[o(x,{title:"搜索列表",ghost:!1,class:`${i.prefixCls}__header`},{default:h((()=>[o(j,{class:`${i.prefixCls}__header-form`,labelWidth:100,schemas:i.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])])),_:1},8,["class"]),o("div",{class:`${i.prefixCls}__container`},[o(C,null,{default:h((()=>[(s(!0),e(r,null,c(i.list,(t=>(s(),e(v,{key:t.id},{default:h((()=>[o(g,null,{description:h((()=>[o("div",{class:`${i.prefixCls}__content`},l(t.content),3),o("div",{class:`${i.prefixCls}__action`},[(s(!0),e(r,null,c(i.actions,((t,a)=>(s(),e("div",{key:a,class:`${i.prefixCls}__action-item`},[t.icon?(s(),e(u,{key:0,class:`${i.prefixCls}__action-icon`,icon:t.icon,color:t.color},null,8,["class","icon","color"])):d("",!0),p(" "+l(t.text),1)],2)))),128)),o("span",{class:`${i.prefixCls}__time`},l(t.time),3)],2)])),title:h((()=>[o("p",{class:`${i.prefixCls}__title`},l(t.title),3),o("div",null,[(s(!0),e(r,null,c(t.description,((i,t)=>(s(),e(b,{key:t,class:"mb-2"},{default:h((()=>[p(l(i),1)])),_:2},1024)))),128))])])),_:2},1024)])),_:2},1024)))),128))])),_:1})],2)],2)}));b.render=g,b.__scopeId="data-v-f71ac9a6";export default b;