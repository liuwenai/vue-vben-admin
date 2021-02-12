import{_ as e}from"./BasicForm.a9a0f9c8.js";import{a as s}from"./ScrollContainer.f900c39d.js";import{d as o,r as t,g as i,h as l,o as a,i as r,w as n,j as p,m as d}from"./index.90c52b16.js";import{_ as c}from"./index.23cbed7e.js";import"./index.b6db8047.js";import"./index.7f58e257.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.2a430b2f.js";import"./isEqual.02d41abb.js";import"./get.72c4d3e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.59d50af7.js";import"./index.af020849.js";import"./index.8e7f5b62.js";import"./SearchOutlined.6e891176.js";import"./EyeOutlined.0cb40ab2.js";import"./index.fa6bd12e.js";import"./CheckOutlined.939cfff4.js";import"./DownOutlined.7aae8e4a.js";import"./index.6214ff0d.js";import"./index.a9dc0f3b.js";import"./UpOutlined.3d204365.js";import"./index.ff4dbc2d.js";import"./RightOutlined.cfcf74a2.js";import"./RedoOutlined.88db38b1.js";import"./index.03c75358.js";import"./EllipsisOutlined.e387576a.js";import"./types.d41dd5bc.js";import"./Tree.adba5c4c.js";import"./util.ea336fb1.js";/* empty css              */import"./uuid.dc26ab91.js";import"./index.bcf233bf.js";import"./DeleteOutlined.38a38c87.js";import"./index.c5a57688.js";import"./useModal.b303f15a.js";import"./useTimeout.52531278.js";import"./useWindowSizeFn.a381ea71.js";import"./FullscreenOutlined.0e79ce31.js";import"./index.ed61cdf9.js";import"./Dropdown.feda9303.js";import"./index.d1fdc4b0.js";import"./LeftOutlined.bb6dc2da.js";import"./download.32c44b0c.js";import"./domUtils.c511362e.js";import"./_stringToArray.236cf9dd.js";import"./index.eeaffe79.js";import"./useScrollTo.7976edbd.js";import"./index.93baca38.js";import"./index.17df0343.js";import"./usePageContext.7279648c.js";import"./transButton.4b411649.js";import"./ArrowLeftOutlined.6cc5d187.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=o({components:{BasicForm:e,CollapseContainer:s,PageWrapper:c},setup(){const e=t(null),{createMessage:s}=i();return{formElRef:e,schemas:m,handleSubmit:e=>{s.success("click search,values:"+JSON.stringify(e))},setProps(s){const o=e.value;o&&o.setProps(s)}}}});const f={class:"mb-4"},b=d(" 更改labelWidth "),j=d(" 还原labelWidth "),P=d(" 更改Size "),C=d(" 还原Size "),h=d(" 禁用表单 "),x=d(" 解除禁用 "),k=d(" 紧凑表单 "),_=d(" 还原正常间距 "),O=d(" 操作按钮位置 "),v={class:"mb-4"},S=d(" 隐藏操作按钮 "),g=d(" 显示操作按钮 "),w=d(" 隐藏重置按钮 "),B=d(" 显示重置按钮 "),R=d(" 隐藏查询按钮 "),W=d(" 显示查询按钮 "),y=d(" 修改重置按钮 "),z=d(" 修改查询按钮 ");u.render=function(e,s,o,t,i,d){const c=l("a-button"),m=l("BasicForm"),u=l("CollapseContainer"),E=l("PageWrapper");return a(),r(E,{title:"Ref操作示例"},{default:n((()=>[p("div",f,[p(c,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:n((()=>[b])),_:1}),p(c,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:n((()=>[j])),_:1}),p(c,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:n((()=>[P])),_:1}),p(c,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:n((()=>[C])),_:1}),p(c,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:n((()=>[h])),_:1}),p(c,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:n((()=>[x])),_:1}),p(c,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:n((()=>[k])),_:1}),p(c,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:n((()=>[_])),_:1}),p(c,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:n((()=>[O])),_:1})]),p("div",v,[p(c,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:n((()=>[S])),_:1}),p(c,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:n((()=>[g])),_:1}),p(c,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:n((()=>[w])),_:1}),p(c,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:n((()=>[B])),_:1}),p(c,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:n((()=>[R])),_:1}),p(c,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:n((()=>[W])),_:1}),p(c,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:n((()=>[y])),_:1}),p(c,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:n((()=>[z])),_:1})]),p(u,{title:"使用ref调用表单内部函数示例"},{default:n((()=>[p(m,{schemas:e.schemas,ref:"formElRef",labelWidth:100,onSubmit:e.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;
