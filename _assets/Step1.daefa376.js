let t=document.createElement("style");t.innerHTML=".step1-form[data-v-686dc77c]{width:450px;margin:0 auto}.step1 h3[data-v-686dc77c]{margin:0 0 12px;font-size:16px;line-height:32px;color:rgba(0,0,0,.45)}.step1 h4[data-v-686dc77c]{margin:0 0 4px;font-size:14px;line-height:22px;color:rgba(0,0,0,.45)}.step1 p[data-v-686dc77c]{color:rgba(0,0,0,.45)}.pay-select[data-v-686dc77c]{width:20%}.pay-input[data-v-686dc77c]{width:70%}",document.head.appendChild(t);import{a as e,d6 as i,d7 as a,i as s,o,j as d,k as r,bp as n,p}from"./index.29c86768.js";import"./xlsx.a48e520c.js";import"./index.2e2f5f7d.js";import"./Trigger.6c22f7c7.js";import"./omit.d533ea5b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b890e848.js";import"./CheckOutlined.f30665d7.js";import{s as c}from"./index.27831eb4.js";import"./colors.673869cf.js";import"./RightOutlined.fb87c3f1.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7c0d94fd.js";import"./index.acb2ea2e.js";import"./index.a172b251.js";import"./index.5c941694.js";import"./index.b1950fab.js";import"./UpOutlined.b2cfd225.js";import"./index.4db9ca1f.js";import"./index.8f2ab325.js";import"./index.251803e9.js";import"./index.f54a7c5a.js";import"./index.63b5feca.js";import"./index.d8838e74.js";import"./CloseOutlined.4823f3c8.js";import"./FullscreenOutlined.4461ae5c.js";import"./LoadingOutlined.ec80bfa3.js";import"./RightOutlined.76f7bf3c.js";import"./useTimeout.35f8dc13.js";import"./tsxHelper.7e7d25f8.js";import"./index.52262a17.js";import"./animation.a2928106.js";import"./useScrollTo.4e4d37c3.js";import"./useAttrs.13d68406.js";import"./index.b453a0ba.js";import"./index.7aebb02d.js";import"./useWindowSizeFn.05a9f1df.js";import{u as l}from"./useForm.c1018cbc.js";import{step1Schemas as m}from"./data.db0e0c8e.js";var u=e({components:{BasicForm:c},emits:["next"],setup(t,{emit:e}){const[i,{validate:a}]=l({labelWidth:100,schemas:m,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const t=await a();e("next",t)}catch(t){}}});return{register:i}}});const f=n("data-v-686dc77c");i("data-v-686dc77c");const j={class:"step1"},b={class:"step1-form"},x=p(" 支付宝 "),v=p(" 银联 "),h=r("h3",null,"说明",-1),g=r("h4",null,"转账到支付宝账户",-1),y=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),O=r("h4",null,"转账到银行卡",-1),_=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);a();const w=f(((t,e,i,a,n,p)=>{const c=s("a-select-option"),l=s("a-select"),m=s("a-input"),u=s("a-input-group"),w=s("BasicForm"),F=s("a-divider");return o(),d("div",j,[r("div",b,[r(w,{onRegister:t.register},{fac:f((({model:t,field:e})=>[r(u,{compact:""},{default:f((()=>[r(l,{value:t.pay,"onUpdate:value":e=>t.pay=e,class:"pay-select"},{default:f((()=>[r(c,{value:"zfb"},{default:f((()=>[x])),_:1}),r(c,{value:"yl"},{default:f((()=>[v])),_:1})])),_:2},1032,["value","onUpdate:value"]),r(m,{class:"pay-input",value:t[e],"onUpdate:value":i=>t[e]=i},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),r(F),h,g,y,O,_])}));u.render=w,u.__scopeId="data-v-686dc77c";export default u;