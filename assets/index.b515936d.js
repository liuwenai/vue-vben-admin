import{d as e,r as a,co as s,cp as t,h as i,o,i as r,j as n,bs as l,a3 as d,b8 as c,bw as p,m}from"./index.90c52b16.js";import{a as u}from"./index.fa6bd12e.js";import{_ as f}from"./index.23cbed7e.js";import{F as v,S as j,a as S,b,c as x,d as T,e as R,f as X,g as h,h as Y,i as g,E,j as _}from"./index.eeaffe79.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.6e891176.js";import"./CheckOutlined.939cfff4.js";import"./DownOutlined.7aae8e4a.js";import"./index.93baca38.js";import"./index.03c75358.js";import"./RightOutlined.cfcf74a2.js";import"./EllipsisOutlined.e387576a.js";import"./types.d41dd5bc.js";import"./isEqual.02d41abb.js";import"./toInteger.59d50af7.js";/* empty css              */import"./index.17df0343.js";import"./usePageContext.7279648c.js";import"./transButton.4b411649.js";import"./ArrowLeftOutlined.6cc5d187.js";import"./domUtils.c511362e.js";import"./_stringToArray.236cf9dd.js";const w=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((e=>({label:e,value:e,key:e})));var y=e({components:{Select:u,PageWrapper:f,FadeTransition:v,ScaleTransition:j,SlideYTransition:S,ScrollYTransition:b,SlideYReverseTransition:x,ScrollYReverseTransition:T,SlideXTransition:R,ScrollXTransition:X,SlideXReverseTransition:h,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:E,ExpandTransition:_},setup(){const e=a("Fade"),s=a(!0);return{options:w,value:e,start:function(){s.value=!1,setTimeout((()=>{s.value=!0}),300)},show:s}}});const O=p("data-v-51fb1392");s("data-v-51fb1392");const k={class:"flex"},C=m(" start "),F={class:"box"};t();const P=O(((e,a,s,t,p,m)=>{const u=i("Select"),f=i("a-button"),v=i("PageWrapper");return o(),r(v,{title:"动画组件示例"},{default:O((()=>[n("div",k,[n(u,{options:e.options,value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),n(f,{type:"primary",class:"ml-4",onClick:e.start},{default:O((()=>[C])),_:1},8,["onClick"])]),(o(),r(l(`${e.value}Transition`),null,{default:O((()=>[d(n("div",F,null,512),[[c,e.show]])])),_:1}))])),_:1})}));y.render=P,y.__scopeId="data-v-51fb1392";export default y;
