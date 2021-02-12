import{_ as e}from"./BasicForm.a9a0f9c8.js";import{u as o}from"./useForm.f6feef28.js";import{a as t}from"./ScrollContainer.f900c39d.js";import{_ as i}from"./index.23cbed7e.js";import{d as l,h as s,o as p,i as n,w as r,j as a}from"./index.90c52b16.js";import"./index.b6db8047.js";import"./index.7f58e257.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.2a430b2f.js";import"./isEqual.02d41abb.js";import"./get.72c4d3e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.59d50af7.js";import"./index.af020849.js";import"./index.8e7f5b62.js";import"./SearchOutlined.6e891176.js";import"./EyeOutlined.0cb40ab2.js";import"./index.fa6bd12e.js";import"./CheckOutlined.939cfff4.js";import"./DownOutlined.7aae8e4a.js";import"./index.6214ff0d.js";import"./index.a9dc0f3b.js";import"./UpOutlined.3d204365.js";import"./index.ff4dbc2d.js";import"./RightOutlined.cfcf74a2.js";import"./RedoOutlined.88db38b1.js";import"./index.03c75358.js";import"./EllipsisOutlined.e387576a.js";import"./types.d41dd5bc.js";import"./Tree.adba5c4c.js";import"./util.ea336fb1.js";/* empty css              */import"./uuid.dc26ab91.js";import"./index.bcf233bf.js";import"./DeleteOutlined.38a38c87.js";import"./index.c5a57688.js";import"./useModal.b303f15a.js";import"./useTimeout.52531278.js";import"./useWindowSizeFn.a381ea71.js";import"./FullscreenOutlined.0e79ce31.js";import"./index.ed61cdf9.js";import"./Dropdown.feda9303.js";import"./index.d1fdc4b0.js";import"./LeftOutlined.bb6dc2da.js";import"./download.32c44b0c.js";import"./domUtils.c511362e.js";import"./_stringToArray.236cf9dd.js";import"./index.eeaffe79.js";import"./useScrollTo.7976edbd.js";import"./index.93baca38.js";import"./index.17df0343.js";import"./usePageContext.7279648c.js";import"./transButton.4b411649.js";import"./ArrowLeftOutlined.6cc5d187.js";var d=l({components:{BasicForm:e,CollapseContainer:t,PageWrapper:i},setup(){const[e]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[t]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:t}}});d.render=function(e,o,t,i,l,d){const c=s("BasicForm"),m=s("CollapseContainer"),f=s("PageWrapper");return p(),n(f,{title:"可折叠表单示例"},{default:r((()=>[a(m,{title:"基础收缩示例"},{default:r((()=>[a(c,{onRegister:e.register},null,8,["onRegister"])])),_:1}),a(m,{title:"超过3行自动收起",class:"mt-4"},{default:r((()=>[a(c,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default d;
