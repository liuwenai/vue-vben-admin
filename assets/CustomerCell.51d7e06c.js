import{d as e,h as t,o as i,i as o,j as s,w as d,m as r,l as a}from"./index.90c52b16.js";import{T as m}from"./index.6214ff0d.js";import{_ as n,T as c}from"./index.8c9c19a9.js";import{d as p}from"./table.cb979386.js";import{u as l}from"./useTable.1c5ea79a.js";import"./vendor.3b1829c7.js";import"./index.fa6bd12e.js";import"./SearchOutlined.6e891176.js";import"./CheckOutlined.939cfff4.js";import"./DownOutlined.7aae8e4a.js";import"./BasicForm.a9a0f9c8.js";import"./index.b6db8047.js";import"./index.7f58e257.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.2a430b2f.js";import"./isEqual.02d41abb.js";import"./get.72c4d3e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.59d50af7.js";import"./index.af020849.js";import"./index.8e7f5b62.js";import"./EyeOutlined.0cb40ab2.js";import"./index.a9dc0f3b.js";import"./UpOutlined.3d204365.js";import"./index.ff4dbc2d.js";import"./RightOutlined.cfcf74a2.js";import"./RedoOutlined.88db38b1.js";import"./index.03c75358.js";import"./EllipsisOutlined.e387576a.js";import"./types.d41dd5bc.js";import"./Tree.adba5c4c.js";import"./util.ea336fb1.js";/* empty css              */import"./uuid.dc26ab91.js";import"./index.bcf233bf.js";import"./DeleteOutlined.38a38c87.js";import"./index.c5a57688.js";import"./useModal.b303f15a.js";import"./useTimeout.52531278.js";import"./useWindowSizeFn.a381ea71.js";import"./ScrollContainer.f900c39d.js";import"./index.eeaffe79.js";import"./domUtils.c511362e.js";import"./_stringToArray.236cf9dd.js";import"./useScrollTo.7976edbd.js";import"./FullscreenOutlined.0e79ce31.js";import"./index.ed61cdf9.js";import"./Dropdown.feda9303.js";import"./index.d1fdc4b0.js";import"./LeftOutlined.bb6dc2da.js";import"./download.32c44b0c.js";import"./index.c6574ccf.js";import"./DoubleLeftOutlined.89f2d4ac.js";import"./DoubleRightOutlined.c61593ad.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.4b411649.js";import"./CaretDownFilled.8bf8c06d.js";import"./useForm.f6feef28.js";import"./clickOutside.6cec7876.js";import"./useSortable.9020c78e.js";import"./SettingOutlined.c865f486.js";import"./useExpose.350cca4b.js";const j=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var f=e({components:{BasicTable:n,TableImg:c,Tag:m},setup(){const[e]=l({title:"自定义列内容",api:p,columns:j,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const u={class:"p-4"};f.render=function(e,m,n,c,p,l){const j=t("Tag"),f=t("TableImg"),b=t("BasicTable");return i(),o("div",u,[s(b,{onRegister:e.registerTable},{id:d((({record:e})=>[r(" ID: "+a(e.id),1)])),no:d((({record:e})=>[s(j,{color:"green"},{default:d((()=>[r(a(e.no),1)])),_:2},1024)])),img:d((()=>[s(f,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:d((({record:e})=>[s(j,{color:"green"},{default:d((()=>[r(a(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default f;
