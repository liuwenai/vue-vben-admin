import{dk as e,c as s,a as i,h as o,i as r,o as t,j as a,k as n}from"./index.29c86768.js";import"./xlsx.a48e520c.js";import"./index.2e2f5f7d.js";import"./Trigger.6c22f7c7.js";import"./omit.d533ea5b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b890e848.js";import"./CheckOutlined.f30665d7.js";import{B as p,s as m}from"./index.27831eb4.js";import"./colors.673869cf.js";import"./RightOutlined.fb87c3f1.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7c0d94fd.js";import"./index.acb2ea2e.js";import"./index.a172b251.js";import"./index.5c941694.js";import"./index.b1950fab.js";import"./UpOutlined.b2cfd225.js";import"./index.4db9ca1f.js";import"./index.8f2ab325.js";import"./index.251803e9.js";import"./index.f54a7c5a.js";import"./index.63b5feca.js";import"./index.d8838e74.js";import"./CloseOutlined.4823f3c8.js";import"./FullscreenOutlined.4461ae5c.js";import"./LoadingOutlined.ec80bfa3.js";import"./RightOutlined.76f7bf3c.js";import"./useTimeout.35f8dc13.js";import"./tsxHelper.7e7d25f8.js";import"./index.52262a17.js";import"./animation.a2928106.js";import"./useScrollTo.4e4d37c3.js";import"./useAttrs.13d68406.js";import"./index.b453a0ba.js";import"./index.7aebb02d.js";import"./useWindowSizeFn.05a9f1df.js";import{u as d}from"./useForm.c1018cbc.js";const{uploadUrl:c=""}=s();function l(s,i){return e.uploadFile({url:c,onUploadProgress:i},s)}const j=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:l}}];var f=i({components:{BasicUpload:p,BasicForm:m},setup(){const{createMessage:e}=o(),[s]=d({labelWidth:120,schemas:j,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:l,register:s}}});const u={class:"p-4"};f.render=function(e,s,i,o,p,m){const d=r("a-alert"),c=r("BasicUpload"),l=r("BasicForm");return t(),a("div",u,[n(d,{message:"基础示例",class:"my-5"}),n(c,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi},null,8,["onChange","api"]),n(d,{message:"嵌入表单,加入表单校验",class:"my-5"}),n(l,{onRegister:e.register},null,8,["onRegister"])])};export default f;