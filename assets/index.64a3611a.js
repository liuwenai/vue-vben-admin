import{d as e,aG as s,aB as t,K as i,bQ as a,h as r,o,i as p,j as n,w as m,b0 as d,aL as l,aM as c,a7 as u,bx as f}from"./index.90c52b16.js";import{I as g}from"./index.d1fdc4b0.js";import{_ as j}from"./index.23cbed7e.js";import"./vendor.3b1829c7.js";import"./LeftOutlined.bb6dc2da.js";import"./RightOutlined.cfcf74a2.js";import"./index.93baca38.js";import"./index.03c75358.js";import"./EllipsisOutlined.e387576a.js";import"./types.d41dd5bc.js";import"./isEqual.02d41abb.js";import"./toInteger.59d50af7.js";import"./DownOutlined.7aae8e4a.js";/* empty css              */import"./index.17df0343.js";import"./usePageContext.7279648c.js";import"./transButton.4b411649.js";import"./ArrowLeftOutlined.6cc5d187.js";var b=e({name:"ImagePreview",components:{Image:g,PreviewGroup:g.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:s}=t("image-preview");return{prefixCls:s,getImageList:i((()=>{const{imageList:s}=e;return s?s.map((e=>a(e)?{src:e,placeholder:!1}:e)):[]}))}}});b.render=function(e,s,t,i,a,g){const j=r("Image"),b=r("PreviewGroup");return o(),p("div",{class:e.prefixCls},[n(b,null,{default:m((()=>[!e.imageList||e.$slots.default?d(e.$slots,"default",{key:0}):(o(!0),p(l,{key:1},c(e.getImageList,(e=>(o(),p(j,u({key:e.src},e),f({_:2},[e.placeholder?{name:"placeholder",fn:m((()=>[n(j,u(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1})],2)};const v=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var x=e({components:{PageWrapper:j,ImagePreview:b},setup:()=>({imgList:v})});x.render=function(e,s,t,i,a,d){const l=r("ImagePreview"),c=r("PageWrapper");return o(),p(c,{title:"图片预览示例"},{default:m((()=>[n(l,{imageList:e.imgList},null,8,["imageList"])])),_:1})};export default x;
