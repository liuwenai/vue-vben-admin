import{I as e}from"./index.5ba0a757.js";import{_ as t}from"./index.8c9c19a9.js";import{_ as i}from"./index.23cbed7e.js";import{d as s,r as o,h as r,o as d,i as a,w as c,j as m,aL as p,aM as n,m as l}from"./index.90c52b16.js";import"./vendor.3b1829c7.js";import"./index.fa6bd12e.js";import"./SearchOutlined.6e891176.js";import"./CheckOutlined.939cfff4.js";import"./DownOutlined.7aae8e4a.js";import"./BasicForm.a9a0f9c8.js";import"./index.b6db8047.js";import"./index.7f58e257.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.2a430b2f.js";import"./isEqual.02d41abb.js";import"./get.72c4d3e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.59d50af7.js";import"./index.af020849.js";import"./index.8e7f5b62.js";import"./EyeOutlined.0cb40ab2.js";import"./index.6214ff0d.js";import"./index.a9dc0f3b.js";import"./UpOutlined.3d204365.js";import"./index.ff4dbc2d.js";import"./RightOutlined.cfcf74a2.js";import"./RedoOutlined.88db38b1.js";import"./index.03c75358.js";import"./EllipsisOutlined.e387576a.js";import"./types.d41dd5bc.js";import"./Tree.adba5c4c.js";import"./util.ea336fb1.js";/* empty css              */import"./uuid.dc26ab91.js";import"./index.bcf233bf.js";import"./DeleteOutlined.38a38c87.js";import"./index.c5a57688.js";import"./useModal.b303f15a.js";import"./useTimeout.52531278.js";import"./useWindowSizeFn.a381ea71.js";import"./ScrollContainer.f900c39d.js";import"./index.eeaffe79.js";import"./domUtils.c511362e.js";import"./_stringToArray.236cf9dd.js";import"./useScrollTo.7976edbd.js";import"./FullscreenOutlined.0e79ce31.js";import"./index.ed61cdf9.js";import"./Dropdown.feda9303.js";import"./index.d1fdc4b0.js";import"./LeftOutlined.bb6dc2da.js";import"./download.32c44b0c.js";import"./index.c6574ccf.js";import"./DoubleLeftOutlined.89f2d4ac.js";import"./DoubleRightOutlined.c61593ad.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.4b411649.js";import"./CaretDownFilled.8bf8c06d.js";import"./useForm.f6feef28.js";import"./clickOutside.6cec7876.js";import"./useSortable.9020c78e.js";import"./SettingOutlined.c865f486.js";import"./useExpose.350cca4b.js";import"./index.93baca38.js";import"./index.17df0343.js";import"./usePageContext.7279648c.js";import"./ArrowLeftOutlined.6cc5d187.js";var j=s({components:{BasicTable:t,ImpExcel:e,PageWrapper:i},setup(){const e=o([]);return{loadDataSuccess:function(t){e.value=[];for(const i of t){const{header:t,results:s,meta:{sheetName:o}}=i,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:s,columns:r})}},tableListRef:e}}});const f=l(" 导入Excel ");j.render=function(e,t,i,s,o,l){const j=r("a-button"),u=r("ImpExcel"),b=r("BasicTable"),x=r("PageWrapper");return d(),a(x,{title:"excel数据导入示例"},{default:c((()=>[m(u,{onSuccess:e.loadDataSuccess},{default:c((()=>[m(j,{class:"m-3"},{default:c((()=>[f])),_:1})])),_:1},8,["onSuccess"]),(d(!0),a(p,null,n(e.tableListRef,((e,t)=>(d(),a(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default j;
