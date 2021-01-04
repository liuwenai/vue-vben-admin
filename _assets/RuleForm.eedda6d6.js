import{a as e,h as s,i,o,j as t,k as l,w as a,p as r}from"./index.29c86768.js";import"./xlsx.a48e520c.js";import"./index.2e2f5f7d.js";import"./Trigger.6c22f7c7.js";import"./omit.d533ea5b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b890e848.js";import"./CheckOutlined.f30665d7.js";import{s as n}from"./index.27831eb4.js";import"./colors.673869cf.js";import"./RightOutlined.fb87c3f1.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7c0d94fd.js";import"./index.acb2ea2e.js";import"./index.a172b251.js";import"./index.5c941694.js";import"./index.b1950fab.js";import"./UpOutlined.b2cfd225.js";import"./index.4db9ca1f.js";import"./index.8f2ab325.js";import"./index.251803e9.js";import"./index.f54a7c5a.js";import"./index.63b5feca.js";import{a as c}from"./index.d8838e74.js";import"./CloseOutlined.4823f3c8.js";import"./FullscreenOutlined.4461ae5c.js";import"./LoadingOutlined.ec80bfa3.js";import"./RightOutlined.76f7bf3c.js";import"./useTimeout.35f8dc13.js";import"./tsxHelper.7e7d25f8.js";import"./index.52262a17.js";import"./animation.a2928106.js";import"./useScrollTo.4e4d37c3.js";import"./useAttrs.13d68406.js";import"./index.b453a0ba.js";import"./index.7aebb02d.js";import"./useWindowSizeFn.05a9f1df.js";import{u as d}from"./useForm.c1018cbc.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,s)=>s?"1"===s?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var p=e({components:{BasicForm:n,CollapseContainer:c},setup(){const{createMessage:e}=s(),[i,{validateFields:o,clearValidate:t,getFieldsValue:l,setFieldsValue:a}]=d({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:i,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},getFormValues:function(){const s=l();e.success("values:"+JSON.stringify(s))},setFormValues:function(){a({field1:1111,field5:["1"],field7:"1"})},validateForm:async function(){try{await o()}catch(e){}},resetValidate:async function(){t()}}}});const u={class:"m-4"},f={class:"mb-4"},b=r("手动校验表单"),j=r("清空校验信息"),g=r("获取表单值"),x=r("设置表单值");p.render=function(e,s,r,n,c,d){const m=i("a-button"),p=i("BasicForm"),v=i("CollapseContainer");return o(),t("div",u,[l("div",f,[l(m,{onClick:e.validateForm,class:"mr-2"},{default:a((()=>[b])),_:1},8,["onClick"]),l(m,{onClick:e.resetValidate,class:"mr-2"},{default:a((()=>[j])),_:1},8,["onClick"]),l(m,{onClick:e.getFormValues,class:"mr-2"},{default:a((()=>[g])),_:1},8,["onClick"]),l(m,{onClick:e.setFormValues,class:"mr-2"},{default:a((()=>[x])),_:1},8,["onClick"])]),l(v,{title:"表单校验"},{default:a((()=>[l(p,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default p;