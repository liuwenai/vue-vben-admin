import{d as e,h as o,o as i,i as t,w as r,j as s,m as d}from"./index.90c52b16.js";import{A as a}from"./index.c5a57688.js";import{b as n}from"./useModal.b303f15a.js";import p from"./Modal1.a700534c.js";import m from"./Modal2.517e2866.js";import l from"./Modal3.d0d5984b.js";import c from"./Modal4.7c704553.js";import{_ as j}from"./index.23cbed7e.js";import"./vendor.3b1829c7.js";import"./useTimeout.52531278.js";import"./useWindowSizeFn.a381ea71.js";import"./ScrollContainer.f900c39d.js";import"./index.eeaffe79.js";import"./domUtils.c511362e.js";import"./_stringToArray.236cf9dd.js";import"./RightOutlined.cfcf74a2.js";/* empty css              */import"./useScrollTo.7976edbd.js";import"./FullscreenOutlined.0e79ce31.js";import"./isEqual.02d41abb.js";import"./BasicForm.a9a0f9c8.js";import"./index.b6db8047.js";import"./index.7f58e257.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.2a430b2f.js";import"./get.72c4d3e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.59d50af7.js";import"./index.af020849.js";import"./index.8e7f5b62.js";import"./SearchOutlined.6e891176.js";import"./EyeOutlined.0cb40ab2.js";import"./index.fa6bd12e.js";import"./CheckOutlined.939cfff4.js";import"./DownOutlined.7aae8e4a.js";import"./index.6214ff0d.js";import"./index.a9dc0f3b.js";import"./UpOutlined.3d204365.js";import"./index.ff4dbc2d.js";import"./RedoOutlined.88db38b1.js";import"./index.03c75358.js";import"./EllipsisOutlined.e387576a.js";import"./types.d41dd5bc.js";import"./Tree.adba5c4c.js";import"./util.ea336fb1.js";import"./uuid.dc26ab91.js";import"./index.bcf233bf.js";import"./DeleteOutlined.38a38c87.js";import"./index.ed61cdf9.js";import"./Dropdown.feda9303.js";import"./index.d1fdc4b0.js";import"./LeftOutlined.bb6dc2da.js";import"./download.32c44b0c.js";import"./useForm.f6feef28.js";import"./index.93baca38.js";import"./index.17df0343.js";import"./usePageContext.7279648c.js";import"./transButton.4b411649.js";import"./ArrowLeftOutlined.6cc5d187.js";var f=e({components:{Alert:a,Modal1:p,Modal2:m,Modal3:l,Modal4:c,PageWrapper:j},setup(){const[e,{openModal:o,setModalProps:i}]=n(),[t,{openModal:r}]=n(),[s,{openModal:d}]=n(),[a,{openModal:p}]=n();return{register1:e,openModal1:o,register2:t,openModal2:r,register3:s,openModal3:d,register4:a,openModal4:p,send:function(){p(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=d(" 打开弹窗 默认可以拖动/全屏 "),b=d(" 打开弹窗 "),g=d(" 打开弹窗 "),M=d(" 打开弹窗并传递数据 ");f.render=function(e,d,a,n,p,m){const l=o("Alert"),c=o("a-button"),j=o("Modal1"),f=o("Modal2"),x=o("Modal3"),y=o("Modal4"),O=o("PageWrapper");return i(),t(O,{title:"modal组件使用示例"},{default:r((()=>[s(l,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:r((()=>[u])),_:1},8,["onClick"]),s(l,{message:"内外同时同时显示隐藏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:r((()=>[b])),_:1},8,["onClick"]),s(l,{message:"自适应高度","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:r((()=>[g])),_:1},8,["onClick"]),s(l,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.send},{default:r((()=>[M])),_:1},8,["onClick"]),s(j,{onRegister:e.register1},null,8,["onRegister"]),s(f,{onRegister:e.register2},null,8,["onRegister"]),s(x,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default f;
