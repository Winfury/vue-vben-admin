import{_ as e}from"./index.486c49cc.js";import{getBasicColumns as i,getBasicShortColumns as t}from"./tableData.252346e9.js";import{d as o,r as s,g as n,e as l,h as r,o as a,i as c,j as d,w as m,m as p}from"./index.25b7b5fc.js";import{d as f}from"./table.2ca02097.js";import"./index.290ee578.js";import"./SearchOutlined.b66fbfbe.js";import"./CheckOutlined.858b435e.js";import"./DownOutlined.8796a279.js";import"./index.60b3070f.js";import"./index.3e59d4ea.js";import"./responsiveObserve.c545f1cc.js";import"./index.7d0dbe6d.js";import"./vendor.3b1829c7.js";import"./findIndex.159bea82.js";import"./isEqual.ef398636.js";import"./_baseProperty.74f89655.js";import"./toInteger.34e54435.js";import"./index.e5942447.js";import"./index.6346a568.js";import"./index.f418f493.js";import"./UpOutlined.2e609594.js";import"./index.013441f2.js";import"./EyeOutlined.bbf9afc6.js";import"./index.eefcbda4.js";import"./colors.e7a38d90.js";import"./RightOutlined.80d69337.js";import"./RedoOutlined.e878d1f7.js";import"./index.10a2e5b4.js";import"./EllipsisOutlined.3ddff257.js";import"./types.75b2061b.js";import"./Tree.4dd17072.js";import"./util.e01c1bab.js";import"./useAttrs.cecee0af.js";import"./index.95c10fda.js";import"./index.617b1909.js";import"./uuid.07519bd8.js";import"./index.3186655d.js";import"./DeleteOutlined.04eb5723.js";import"./index.341c3125.js";import"./useTimeout.4101b58e.js";import"./useWindowSizeFn.b36958a0.js";import"./index.6c4bbdf5.js";import"./index.d317f8e9.js";import"./domUtils.7252317e.js";import"./_stringToArray.fd7cea8c.js";import"./useScrollTo.3e27ea8f.js";import"./animation.5c6ea99a.js";import"./FullscreenOutlined.b884f50f.js";import"./index.071f175b.js";import"./index.463e2338.js";import"./index.ec6a717d.js";import"./LeftOutlined.06ccfb10.js";import"./download.6995c76c.js";import"./index.2ed87d0a.js";import"./DoubleLeftOutlined.fe18de41.js";import"./DoubleRightOutlined.ee82da45.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.6bbddf74.js";import"./CaretDownFilled.c59e8ff5.js";import"./clickOutside.516198a9.js";import"./useSortable.9390d1f5.js";import"./SettingOutlined.e89633d9.js";import"./useExpose.fcd4b669.js";import"./useForm.78d22a3e.js";var u=o({components:{BasicTable:e},setup(){const e=s(null),{createMessage:o}=n();function r(){const i=l(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:f,columns:i(),changeLoading:function(){r().setLoading(!0),setTimeout((()=>{r().setLoading(!1)}),1e3)},changeColumns:function(){r().setColumns(t())},reloadTable:function(){r().setColumns(i()),r().reload({page:1})},getColumn:function(){o.info("请在控制台查看！")},getTableData:function(){o.info("请在控制台查看！")},getPagination:function(){o.info("请在控制台查看！")},setPaginationInfo:function(){r().setPagination({current:2}),r().reload()},getSelectRowList:function(){o.info("请在控制台查看！")},getSelectRowKeyList:function(){o.info("请在控制台查看！")},setSelectedRowKeyList:function(){r().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){r().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},g=p("还原"),C=p("开启loading"),x=p("更改Columns"),k=p("获取Columns"),w=p("获取表格数据"),O=p("跳转到第2页"),R={class:"mb-4"},S=p("获取选中行"),_=p("获取选中行Key"),y=p("设置选中行"),T=p("清空选中行"),h=p("获取分页信息");u.render=function(e,i,t,o,s,n){const l=r("a-button"),p=r("BasicTable");return a(),c("div",j,[d("div",b,[d(l,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[g])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[x])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[k])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[O])),_:1},8,["onClick"])]),d("div",R,[d(l,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[S])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[y])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[T])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[h])),_:1},8,["onClick"])]),d(p,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;
