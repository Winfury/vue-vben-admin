var o=Object.assign;import{dq as e,e as t,d as n,bt as a,r as i,a as s,aD as l,h as p,bA as r,H as d,o as m,i as u,w as c,j as g,m as f}from"./index.25b7b5fc.js";import{A as b}from"./index.617b1909.js";import{_ as j}from"./index.751a0b92.js";import"./vendor.3b1829c7.js";import"./index.1a47fee9.js";import"./index.10a2e5b4.js";import"./RightOutlined.80d69337.js";import"./EllipsisOutlined.3ddff257.js";import"./types.75b2061b.js";import"./isEqual.ef398636.js";import"./toInteger.34e54435.js";import"./DownOutlined.8796a279.js";import"./index.95c10fda.js";import"./index.fc4261e4.js";import"./usePageContext.003372c7.js";import"./transButton.6bbddf74.js";import"./ArrowLeftOutlined.5053e10e.js";function y(o){let n,a=document.body;if(Reflect.has(o,"target")||Reflect.has(o,"props")){const e=o;n=e.props||{},a=e.target||document.body}else n=o;const i=e(n);return[()=>{const o=t(a);o&&i.open(o)},()=>{i.close()}]}var L=n({components:{Loading:a,PageWrapper:j,[b.name]:b},setup(){const e=i(null),t=i(!1),n=s({absolute:!1,loading:!1,tip:"加载中..."}),[a,p]=y({tip:"加载中..."}),[r,d]=y({target:e,props:{tip:"加载中...",absolute:!0}});function m(o){n.absolute=o,n.loading=!0,setTimeout((()=>{n.loading=!1}),2e3)}return o({openCompFullLoading:function(){m(!1)},openFnFullLoading:function(){a(),setTimeout((()=>{p()}),2e3)},openFnWrapLoading:function(){r(),setTimeout((()=>{d()}),2e3)},openCompAbsolute:function(){m(!0)},wrapEl:e,loadingRef:t,openDirectiveLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1}),2e3)}},l(n))}});const C=f("全屏 Loading"),k=f("容器内 Loading"),x=f("全屏 Loading"),F=f("容器内 Loading"),v=f(" 打开指令Loading ");L.render=function(o,e,t,n,a,i){const s=p("a-alert"),l=p("a-button"),f=p("Loading"),b=p("PageWrapper"),j=r("loading");return d((m(),u(b,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:c((()=>[g(s,{message:"组件方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:o.openCompFullLoading},{default:c((()=>[C])),_:1},8,["onClick"]),g(l,{class:"my-4",type:"primary",onClick:o.openCompAbsolute},{default:c((()=>[k])),_:1},8,["onClick"]),g(f,{loading:o.loading,absolute:o.absolute,tip:o.tip},null,8,["loading","absolute","tip"]),g(s,{message:"函数方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:o.openFnFullLoading},{default:c((()=>[x])),_:1},8,["onClick"]),g(l,{class:"my-4",type:"primary",onClick:o.openFnWrapLoading},{default:c((()=>[F])),_:1},8,["onClick"]),g(s,{message:"指令方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:o.openDirectiveLoading},{default:c((()=>[v])),_:1},8,["onClick"])])),_:1},512)),[[j,o.loadingRef]])};export default L;
