let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}",document.head.appendChild(e);import{a as t,i,o,j as s,k as n,w as a}from"./index.29c86768.js";import"./xlsx.a48e520c.js";import"./Trigger.6c22f7c7.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b890e848.js";import{A as r}from"./index.0954de07.js";import"./RightOutlined.fb87c3f1.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7c0d94fd.js";import"./index.5c941694.js";import"./index.6ae042a1.js";import"./UpOutlined.b2cfd225.js";import"./LeftOutlined.551d5451.js";import"./index.feca0758.js";import{d,S as m}from"./index.d8838e74.js";import"./RightOutlined.76f7bf3c.js";import"./useTimeout.35f8dc13.js";import"./tsxHelper.7e7d25f8.js";import"./index.52262a17.js";import"./animation.a2928106.js";import"./useScrollTo.4e4d37c3.js";import l from"./TargetContent.2c9c56d2.js";var p=t({components:{LazyContainer:d,TargetContent:l,Skeleton:m,Alert:r},setup:()=>({})});const c={class:"p-4 lazy-base-demo"},f={class:"lazy-base-demo-wrap"},j=n("h1",null,"向下滚动",-1),x={class:"lazy-base-demo-box"};p.render=function(e,t,r,d,m,l){const p=i("Alert"),u=i("TargetContent"),g=i("Skeleton"),b=i("LazyContainer");return o(),s("div",c,[n(p,{message:"基础示例",description:"向下滚动到可见区域才会加载组件",type:"info","show-icon":""}),n("div",f,[j,n("div",x,[n(b,null,{skeleton:a((()=>[n(g,{rows:10})])),default:a((()=>[n(u)])),_:1})])])])};export default p;