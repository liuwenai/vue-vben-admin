let e=document.createElement("style");e.innerHTML=".thumb img[data-v-1c5b9d26]{position:static;display:block;width:104px;height:104px;-o-object-fit:cover;object-fit:cover}.file-table{width:100%;border-collapse:collapse}.file-table .center{text-align:center}.file-table .left{text-align:left}.file-table .right{text-align:right}.file-table-td,.file-table-th{padding:12px 8px}.file-table thead{background-color:#f0f2f5}.file-table table,.file-table td,.file-table th{border:1px solid #ebeef5}.upload-modal .ant-upload-list{display:none}.upload-modal .ant-table-wrapper .ant-spin-nested-loading{padding:0}.upload-modal-toolbar{display:flex;align-items:center;margin-bottom:8px}.upload-modal-toolbar__btn{margin-left:8px;text-align:right;flex:1}.upload-preview-modal .ant-upload-list{display:none}.upload-preview-modal .ant-table-wrapper .ant-spin-nested-loading{padding:0}",document.head.appendChild(e);import{u as t,I as o,f as a,a as n,H as l,d6 as i,d7 as r,o as s,j as d,m as u,bp as c,ay as p,Z as m,r as f,b as g,aH as b,h,dE as x,i as v,w,k as R,p as j,n as y,J as C,b0 as S,aM as U}from"./index.29c86768.js";import"./xlsx.a48e520c.js";import"./Trigger.6c22f7c7.js";import{o as k}from"./omit.d533ea5b.js";import"./_baseSlice.1123a25b.js";import"./CheckOutlined.f30665d7.js";import{A as P}from"./index.0954de07.js";import"./colors.673869cf.js";import"./index.28b14bf9.js";import"./RightOutlined.fb87c3f1.js";import"./index.b3243be0.js";import"./types.45bf8ecb.js";import{U as L}from"./index.034f5c80.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7c0d94fd.js";import"./_baseFor.f4e5f03f.js";import"./index.a172b251.js";import{T as I}from"./index.5c941694.js";import"./index.4db9ca1f.js";import{T as M}from"./index.8f2ab325.js";import"./index.776da8fc.js";import"./index.f54a7c5a.js";import{P as O}from"./index.7d0bb340.js";import"./FileOutlined.f88068a3.js";import"./index.d8838e74.js";import"./CloseOutlined.4823f3c8.js";import"./FullscreenOutlined.4461ae5c.js";import"./LeftOutlined.4f6a12c7.js";import"./LoadingOutlined.ec80bfa3.js";import{s as A}from"./TableAction.76add184.js";import"./RightOutlined.76f7bf3c.js";import"./useTimeout.35f8dc13.js";import"./tsxHelper.7e7d25f8.js";import"./index.52262a17.js";import"./animation.a2928106.js";import"./useScrollTo.4e4d37c3.js";import"./useAttrs.13d68406.js";import{s as N}from"./index.b453a0ba.js";import{s as T,b as F,a as _}from"./index.7aebb02d.js";import"./useWindowSizeFn.05a9f1df.js";import{b as E}from"./uuid.40269c00.js";import{a as B}from"./download.6d139d86.js";import{c as z}from"./index.66569895.js";const{t:H}=t();var D,$;($=D||(D={})).SUCCESS="success",$.ERROR="error",$.UPLOADING="uploading";const G={helpText:{type:String,default:""},maxSize:{type:Number,default:2},maxNumber:{type:Number,default:Infinity},accept:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!0},uploadParams:{type:Object,default:{}},api:{type:Function,default:null,required:!0}},W={value:{type:Array,default:()=>[]},...G,showPreviewNumber:{type:Boolean,default:!0},emptyHidePreview:{type:Boolean,default:!1}},V={value:{type:Array,default:()=>[]}},q={columns:{type:[Array],default:null},actionColumn:{type:Object,default:null},dataSource:{type:Array,default:null}};function J(e){return K(e.name)}function K(e){return/\.(jpg|jpeg|png|gif)$/i.test(e)}var Z=n({props:{fileUrl:l.string.def(""),fileName:l.string.def("")}});const Q=c("data-v-1c5b9d26");i("data-v-1c5b9d26");const X={class:"thumb"};r();const Y=Q(((e,t,o,a,n,l)=>(s(),d("span",X,[e.fileUrl?(s(),d("img",{key:0,src:e.fileUrl},null,8,["src"])):u("v-if",!0)]))));Z.render=Y,Z.__scopeId="data-v-1c5b9d26";const{t:ee}=t();function te(e,t){return{width:120,title:ee("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:o})=>{const a=[{label:ee("component.upload.del"),color:"error",onClick:e.bind(null,o)}];return J(o)&&a.unshift({label:ee("component.upload.preview"),onClick:t.bind(null,o)}),p(A,{actions:a})}}}function oe({handleRemove:e,handlePreview:t,handleDownload:o}){return{width:160,title:ee("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:a})=>{const{url:n}=a||{},l=[{label:ee("component.upload.del"),color:"error",onClick:e.bind(null,a)},{label:ee("component.upload.download"),onClick:o.bind(null,a)}];return K(n)&&l.unshift({label:ee("component.upload.preview"),onClick:t.bind(null,a)}),p(A,{actions:l})}}}var ae=n({name:"FileList",props:q,setup:e=>()=>{const{columns:t,actionColumn:o,dataSource:a}=e,n=[...t,o];return p("table",{class:"file-table"},p("colgroup",null,n.map((e=>{const{width:t=0,dataIndex:o}=e;return p("col",{style:t?{width:`${t}px`,minWidth:`${t}px`}:{},key:o})}))),p("thead",null,p("tr",{class:"file-table-tr"},n.map((e=>{const{title:t="",align:o="center",dataIndex:a}=e;return p("th",{class:["file-table-th",o],key:a},t)})))),p("tbody",null,a.map(((e={},t)=>p("tr",{class:"file-table-tr",key:`${t+e.name||""}`},n.map((t=>{const{dataIndex:o="",customRender:a,align:n="center"}=t,l=a&&m(a);return p("td",{class:["file-table-td",n],key:o},l?null==a?void 0:a({text:e[o],record:e}):e[o])})))))))}}),ne=n({components:{BasicModal:T,Upload:L,Alert:P,FileList:ae},props:G,setup(e,{emit:n}){const{t:l}=t(),i=f(!1),r=f([]),s=g({fileList:[]}),[d,{closeModal:u}]=F(),{accept:c,helpText:v,maxNumber:w,maxSize:R}=b(e),{getAccept:j,getStringAccept:y,getHelpText:C}=function({acceptRef:e,helpTextRef:t,maxNumberRef:n,maxSizeRef:l}){const i=o((()=>{const t=a(e);return t&&t.length>0?t:[]})),r=o((()=>a(i).map((e=>`.${e}`)).join(","))),s=o((()=>{const o=a(t);if(o)return o;const i=[],r=a(e);r.length>0&&i.push(H("component.upload.accept",[r.join(",")]));const s=a(l);s&&i.push(H("component.upload.maxSize",[s]));const d=a(n);return d&&Infinity!==d&&i.push(H("component.upload.maxNumber",[d])),i.join("，")}));return{getAccept:i,getStringAccept:r,getHelpText:s}}({acceptRef:c,helpTextRef:v,maxNumberRef:w,maxSizeRef:R}),{createMessage:S}=h(),U=o((()=>r.value.length>0&&!r.value.every((e=>e.status===D.SUCCESS)))),k=o((()=>{const e=r.value.some((e=>e.status===D.SUCCESS));return{disabled:i.value||0===r.value.length||!e}})),P=o((()=>{const e=r.value.some((e=>e.status===D.ERROR));return i.value?l("component.upload.uploading"):l(e?"component.upload.reUploadFailed":"component.upload.startUpload")}));return{columns:[{dataIndex:"thumbUrl",title:ee("component.upload.legend"),width:100,customRender:({record:e})=>{const{thumbUrl:t}=e||{};return t&&p(Z,{fileUrl:t})}},{dataIndex:"name",title:ee("component.upload.fileName"),align:"left",customRender:({text:e,record:t})=>{const{percent:o,status:a}=t||{};let n="normal";return a===D.ERROR?n="exception":a===D.UPLOADING?n="active":a===D.SUCCESS&&(n="success"),p("span",null,p("p",{class:"ellipsis mb-1",title:e},e),p(O,{percent:o,size:"small",status:n}))}},{dataIndex:"size",title:ee("component.upload.fileSize"),width:100,customRender:({text:e=0})=>e&&(e/1024).toFixed(2)+"KB"},{dataIndex:"status",title:ee("component.upload.fileStatue"),width:100,customRender:({text:e})=>e===D.SUCCESS?p(M,{color:"green"},(()=>ee("component.upload.uploadSuccess"))):e===D.ERROR?p(M,{color:"red"},(()=>ee("component.upload.uploadError"))):e===D.UPLOADING?p(M,{color:"blue"},(()=>ee("component.upload.uploading"))):e}],actionColumn:te((function(e){const t=r.value.findIndex((t=>t.uuid===e.uuid));-1!==t&&r.value.splice(t,1)}),(function(e){const{thumbUrl:t=""}=e;z({imageList:[t]})})),register:d,closeModal:u,getHelpText:C,getStringAccept:y,getOkButtonProps:k,beforeUpload:function(t){const{size:o,name:n}=t,{maxSize:i}=e,s=a(j);if(i&&t.size/1024/1024>=i)return S.error(l("component.upload.maxSizeMultiple",[i])),!1;if(s.length>0&&!function(e,t){const o=t.join("|");return new RegExp("\\.("+o+")$","i").test(e.name)}(t,s))return S.error(l("component.upload.acceptUpload",[s.join(",")])),!1;const d={uuid:E(),file:t,size:o,name:n,percent:0,type:n.split(".").pop()};return J(t)?function(e){return new Promise(((t,o)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=()=>t({result:a.result,file:e}),a.onerror=e=>o(e)}))}(t).then((({result:e})=>{r.value=[...a(r),{thumbUrl:e,...d}]})):r.value=[...a(r),d],!1},fileListRef:r,state:s,isUploadingRef:i,handleStartUpload:async function(){const{maxNumber:t}=e;if(r.value.length>t)return S.warning(l("component.upload.maxNumber",[t]));try{i.value=!0;const t=r.value.filter((e=>e.status!==D.SUCCESS))||[],o=await Promise.all(t.map((t=>async function(t){var o;const{api:a}=e;if(!a||!m(a))return x("upload api must exist and be a function");try{t.status=D.UPLOADING;const{data:a}=await(null==(o=e.api)?void 0:o.call(e,{...e.uploadParams||{},file:t.file},(function(e){const o=e.loaded/e.total*100|0;t.percent=o})));return t.status=D.SUCCESS,t.responseData=a,{success:!0,error:null}}catch(e){return t.status=D.ERROR,{success:!1,error:e}}}(t))));i.value=!1;const a=o.filter((e=>!e.success));if(a.length>0)throw a}catch(e){throw i.value=!1,e}},handleOk:function(){const{maxNumber:t}=e;if(r.value.length>t)return S.warning(l("component.upload.maxNumber",[t]));if(i.value)return S.warning(l("component.upload.saveWarn"));const o=[];for(const e of r.value){const{status:t,responseData:a}=e;t===D.SUCCESS&&a&&o.push(a.url)}if(o.length<=0)return S.warning(l("component.upload.saveError"));r.value=[],u(),n("change",o)},handleCloseFunc:function(){return i.value?(S.warning(l("component.upload.uploadWait")),!1):(r.value=[],!0)},getIsSelectFile:U,getUploadBtnText:P,t:l}}});const le={class:"upload-modal-toolbar"};ne.render=function(e,t,o,a,n,l){const i=v("a-button"),r=v("Alert"),u=v("Upload"),c=v("FileList"),p=v("BasicModal");return s(),d(p,C({width:"800px",title:e.t("component.upload.upload"),okText:e.t("component.upload.save")},e.$attrs,{onRegister:e.register,onOk:e.handleOk,closeFunc:e.handleCloseFunc,maskClosable:!1,keyboard:!1,wrapClassName:"upload-modal",okButtonProps:e.getOkButtonProps,cancelButtonProps:{disabled:e.isUploadingRef}}),{centerdFooter:w((()=>[R(i,{onClick:e.handleStartUpload,color:"success",disabled:!e.getIsSelectFile,loading:e.isUploadingRef},{default:w((()=>[j(y(e.getUploadBtnText),1)])),_:1},8,["onClick","disabled","loading"])])),default:w((()=>[R("div",le,[R(r,{message:e.getHelpText,type:"info",banner:"",class:"upload-modal-toolbar__text"},null,8,["message"]),R(u,{accept:e.getStringAccept,multiple:e.multiple,"before-upload":e.beforeUpload,class:"upload-modal-toolbar__btn"},{default:w((()=>[R(i,{type:"primary"},{default:w((()=>[j(y(e.t("component.upload.choose")),1)])),_:1})])),_:1},8,["accept","multiple","before-upload"])]),R(c,{dataSource:e.fileListRef,columns:e.columns,actionColumn:e.actionColumn},null,8,["dataSource","columns","actionColumn"])])),_:1},16,["title","okText","onRegister","onOk","closeFunc","okButtonProps","cancelButtonProps"])};var ie=n({components:{BasicModal:T,FileList:ae},props:V,setup(e,{emit:o}){const[n,{closeModal:l}]=F(),{t:i}=t(),r=f([]);return S((()=>e.value),(e=>{r.value=[],e.forEach((e=>{r.value=[...a(r),{url:e,type:e.split(".").pop()||"",name:e.split("/").pop()||""}]}))}),{immediate:!0}),{t:i,register:n,closeModal:l,fileListRef:r,columns:[{dataIndex:"url",title:ee("component.upload.legend"),width:100,customRender:({record:e})=>{const{url:t}=e||{};return K(t)&&p(Z,{fileUrl:t})}},{dataIndex:"name",title:ee("component.upload.fileName"),align:"left"}],actionColumn:oe({handleRemove:function(e){const t=r.value.findIndex((t=>t.url===e.url));-1!==t&&(r.value.splice(t,1),o("list-change",r.value.map((e=>e.url))))},handlePreview:function(e){const{url:t=""}=e;z({imageList:[t]})},handleDownload:function(e){const{url:t=""}=e;B({url:t})}})}}});ie.render=function(e,t,o,a,n,l){const i=v("FileList"),r=v("BasicModal");return s(),d(r,C({width:"800px",title:e.t("component.upload.preview"),wrapClassName:"upload-preview-modal"},e.$attrs,{onRegister:e.register,showOkBtn:!1}),{default:w((()=>[R(i,{dataSource:e.fileListRef,columns:e.columns,actionColumn:e.actionColumn},null,8,["dataSource","columns","actionColumn"])])),_:1},16,["title","onRegister"])};var re=n({name:"BasicUpload",components:{UploadModal:ne,UploadPreviewModal:ie,Icon:N,Tooltip:I},props:W,setup(e,{emit:n,attrs:l}){const{t:i}=t(),[r,{openModal:s}]=_(),[d,{openModal:u}]=_(),c=f([]),p=o((()=>{const{emptyHidePreview:t}=e;return!t||(!t||c.value.length>0)})),m=o((()=>{const t={...l,...e};return k(t,"onChange")}));return S((()=>e.value),((e=[])=>{c.value=e}),{immediate:!0}),{registerUploadModal:r,openUploadModal:s,handleChange:function(e){c.value=[...a(c),...e||[]],n("change",c.value)},handlePreviewChange:function(e){c.value=[...e||[]],n("change",c.value)},registerPreviewModal:d,openPreviewModal:u,fileListRef:c,showPreview:p,bindValue:m,t:i}}});re.render=function(e,t,o,a,n,l){const i=v("a-button"),r=v("Icon"),c=v("Tooltip"),p=v("a-button-group"),m=v("UploadModal"),f=v("UploadPreviewModal");return s(),d("div",null,[R(p,null,{default:w((()=>[R(i,{type:"primary",onClick:e.openUploadModal,preIcon:"carbon:cloud-upload"},{default:w((()=>[j(y(e.t("component.upload.upload")),1)])),_:1},8,["onClick"]),e.showPreview?(s(),d(c,{key:0,placement:"bottom"},{title:w((()=>[j(y(e.t("component.upload.uploaded"))+" ",1),e.fileListRef.length?(s(),d(U,{key:0},[j(y(e.fileListRef.length),1)],64)):u("v-if",!0)])),default:w((()=>[R(i,{onClick:e.openPreviewModal},{default:w((()=>[R(r,{icon:"bi:eye"}),e.fileListRef.length&&e.showPreviewNumber?(s(),d(U,{key:0},[j(y(e.fileListRef.length),1)],64)):u("v-if",!0)])),_:1},8,["onClick"])])),_:1})):u("v-if",!0)])),_:1}),R(m,C(e.bindValue,{onRegister:e.registerUploadModal,onChange:e.handleChange}),null,16,["onRegister","onChange"]),R(f,{value:e.fileListRef,onRegister:e.registerPreviewModal,onListChange:e.handlePreviewChange},null,8,["value","onRegister","onListChange"])])};export default re;