import{d as e,aV as l,aW as t,aK as s,$ as a,h as r,o as n,i,w as c,l as o,k as p,aL as u,m as d}from"./index.25b7b5fc.js";import"./vendor.3b1829c7.js";var m=e({name:"TableHeaderCell",components:{EditTableHeaderCell:l((()=>t((()=>import("./index.486c49cc.js").then((function(e){return e.E}))),["/assets/index.486c49cc.js","/assets/index.9209d209.css","/assets/index.25b7b5fc.js","/assets/index.802536df.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.290ee578.js","/assets/index.b7c86965.css","/assets/SearchOutlined.b66fbfbe.js","/assets/CheckOutlined.858b435e.js","/assets/DownOutlined.8796a279.js","/assets/index.60b3070f.js","/assets/index.44e94589.css","/assets/index.3e59d4ea.js","/assets/index.0edc9df2.css","/assets/responsiveObserve.c545f1cc.js","/assets/index.7d0dbe6d.js","/assets/index.1398ca0b.css","/assets/findIndex.159bea82.js","/assets/isEqual.ef398636.js","/assets/_baseProperty.74f89655.js","/assets/toInteger.34e54435.js","/assets/index.e5942447.js","/assets/index.6346a568.js","/assets/index.ade313ee.css","/assets/index.f418f493.js","/assets/index.d51c3be5.css","/assets/UpOutlined.2e609594.js","/assets/index.013441f2.js","/assets/index.7539d1cb.css","/assets/EyeOutlined.bbf9afc6.js","/assets/index.eefcbda4.js","/assets/index.5beb69af.css","/assets/colors.e7a38d90.js","/assets/RightOutlined.80d69337.js","/assets/RedoOutlined.e878d1f7.js","/assets/index.10a2e5b4.js","/assets/index.07a41ec6.css","/assets/EllipsisOutlined.3ddff257.js","/assets/types.75b2061b.js","/assets/Tree.4dd17072.js","/assets/util.e01c1bab.js","/assets/useAttrs.cecee0af.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/index.617b1909.js","/assets/index.7b8671b1.css","/assets/uuid.07519bd8.js","/assets/uuid.7f4ed3d7.css","/assets/index.3186655d.js","/assets/index.372f1347.css","/assets/DeleteOutlined.04eb5723.js","/assets/index.341c3125.js","/assets/index.4d45b084.css","/assets/useTimeout.4101b58e.js","/assets/useWindowSizeFn.b36958a0.js","/assets/index.6c4bbdf5.js","/assets/index.14d351de.css","/assets/index.d317f8e9.js","/assets/index.121e7eba.css","/assets/domUtils.7252317e.js","/assets/_stringToArray.fd7cea8c.js","/assets/useScrollTo.3e27ea8f.js","/assets/animation.5c6ea99a.js","/assets/FullscreenOutlined.b884f50f.js","/assets/index.071f175b.js","/assets/index.2b38113f.css","/assets/index.463e2338.js","/assets/index.ec6a717d.js","/assets/index.5e8b94d8.css","/assets/LeftOutlined.06ccfb10.js","/assets/download.6995c76c.js","/assets/index.2ed87d0a.js","/assets/index.1fd40226.css","/assets/DoubleLeftOutlined.fe18de41.js","/assets/DoubleRightOutlined.ee82da45.js","/assets/zh_CN.8094f4d6.js","/assets/scrollTo.c1e0f75f.js","/assets/transButton.6bbddf74.js","/assets/CaretDownFilled.c59e8ff5.js","/assets/clickOutside.516198a9.js","/assets/useSortable.9390d1f5.js","/assets/SettingOutlined.e89633d9.js","/assets/useExpose.fcd4b669.js","/assets/useForm.78d22a3e.js"]))),BasicHelp:l((()=>t((()=>import("./BasicHelp.ce416f21.js")),["/assets/BasicHelp.ce416f21.js","/assets/index.6c4bbdf5.js","/assets/index.14d351de.css","/assets/index.25b7b5fc.js","/assets/index.802536df.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.d317f8e9.js","/assets/index.121e7eba.css","/assets/domUtils.7252317e.js","/assets/_stringToArray.fd7cea8c.js","/assets/RightOutlined.80d69337.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/useTimeout.4101b58e.js","/assets/useScrollTo.3e27ea8f.js","/assets/animation.5c6ea99a.js"])))},props:{column:{type:Object,default:{}}},setup(e){const{prefixCls:l}=s("basic-table-header-cell");return{prefixCls:l,getIsEdit:a((()=>{var l;return!!(null==(l=e.column)?void 0:l.edit)})),getTitle:a((()=>{var l;return null==(l=e.column)?void 0:l.customTitle})),getHelpMessage:a((()=>{var l;return null==(l=e.column)?void 0:l.helpMessage}))}}});const _={key:1};m.render=function(e,l,t,s,a,m){const g=r("EditTableHeaderCell"),f=r("BasicHelp");return n(),i(u,null,[e.getIsEdit?(n(),i(g,{key:0},{default:c((()=>[d(o(e.getTitle),1)])),_:1})):(n(),i("span",_,o(e.getTitle),1)),e.getHelpMessage?(n(),i(f,{key:2,text:e.getHelpMessage,class:`${e.prefixCls}__help`},null,8,["text","class"])):p("",!0)],64)};export default m;
