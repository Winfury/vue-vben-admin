import{d as t,b2 as o,c_ as e,u as r,ag as n,q as a,P as s,cX as u,h as i,o as l,i as c,w as d,j as f}from"./index.21e8ff59.js";import{B as m}from"./BugOutlined.73b8fc18.js";var g=t({name:"ErrorAction",components:{BugOutlined:m,Tooltip:o,Badge:e},setup(){const{t:t}=r(),{push:o}=n();return{t:t,getCount:a((()=>u.getErrorListCountState)),handleToErrorList:function(){o(s.ERROR_LOG_PAGE).then((()=>{u.commitErrorListCountState(0)}))}}}});g.render=function(t,o,e,r,n,a){const s=i("BugOutlined"),u=i("Badge"),m=i("Tooltip");return l(),c(m,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:d((()=>[f(u,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:d((()=>[f(s)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default g;