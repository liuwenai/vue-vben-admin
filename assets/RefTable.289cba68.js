import{_ as e}from"./index.8c9c19a9.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.252346e9.js";import{d as o,r as s,g as n,e as c,h as a,o as l,i as r,j as d,w as m,m as f}from"./index.90c52b16.js";import{d as p}from"./table.cb979386.js";import"./index.fa6bd12e.js";import"./SearchOutlined.6e891176.js";import"./CheckOutlined.939cfff4.js";import"./DownOutlined.7aae8e4a.js";import"./BasicForm.a9a0f9c8.js";import"./index.b6db8047.js";import"./index.7f58e257.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.2a430b2f.js";import"./isEqual.02d41abb.js";import"./get.72c4d3e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.59d50af7.js";import"./index.af020849.js";import"./index.8e7f5b62.js";import"./EyeOutlined.0cb40ab2.js";import"./index.6214ff0d.js";import"./index.a9dc0f3b.js";import"./UpOutlined.3d204365.js";import"./index.ff4dbc2d.js";import"./RightOutlined.cfcf74a2.js";import"./RedoOutlined.88db38b1.js";import"./index.03c75358.js";import"./EllipsisOutlined.e387576a.js";import"./types.d41dd5bc.js";import"./Tree.adba5c4c.js";import"./util.ea336fb1.js";/* empty css              */import"./uuid.dc26ab91.js";import"./index.bcf233bf.js";import"./DeleteOutlined.38a38c87.js";import"./index.c5a57688.js";import"./useModal.b303f15a.js";import"./useTimeout.52531278.js";import"./useWindowSizeFn.a381ea71.js";import"./ScrollContainer.f900c39d.js";import"./index.eeaffe79.js";import"./domUtils.c511362e.js";import"./_stringToArray.236cf9dd.js";import"./useScrollTo.7976edbd.js";import"./FullscreenOutlined.0e79ce31.js";import"./index.ed61cdf9.js";import"./Dropdown.feda9303.js";import"./index.d1fdc4b0.js";import"./LeftOutlined.bb6dc2da.js";import"./download.32c44b0c.js";import"./index.c6574ccf.js";import"./DoubleLeftOutlined.89f2d4ac.js";import"./DoubleRightOutlined.c61593ad.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.4b411649.js";import"./CaretDownFilled.8bf8c06d.js";import"./useForm.f6feef28.js";import"./clickOutside.6cec7876.js";import"./useSortable.9020c78e.js";import"./SettingOutlined.c865f486.js";import"./useExpose.350cca4b.js";var u=o({components:{BasicTable:e},setup(){const e=s(null),{createMessage:o}=n();function a(){const t=c(e);if(!t)throw new Error("tableAction is null");return t}return{tableRef:e,api:p,columns:t(),changeLoading:function(){a().setLoading(!0),setTimeout((()=>{a().setLoading(!1)}),1e3)},changeColumns:function(){a().setColumns(i())},reloadTable:function(){a().setColumns(t()),a().reload({page:1})},getColumn:function(){o.info("请在控制台查看！")},getTableData:function(){o.info("请在控制台查看！")},getPagination:function(){o.info("请在控制台查看！")},setPaginationInfo:function(){a().setPagination({current:2}),a().reload()},getSelectRowList:function(){o.info("请在控制台查看！")},getSelectRowKeyList:function(){o.info("请在控制台查看！")},setSelectedRowKeyList:function(){a().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){a().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},g=f(" 还原 "),C=f(" 开启loading "),k=f(" 更改Columns "),x=f(" 获取Columns "),w=f(" 获取表格数据 "),S=f(" 跳转到第2页 "),O={class:"mb-4"},R=f(" 获取选中行 "),_=f(" 获取选中行Key "),y=f(" 设置选中行 "),T=f(" 清空选中行 "),h=f(" 获取分页信息 ");u.render=function(e,t,i,o,s,n){const c=a("a-button"),f=a("BasicTable");return l(),r("div",j,[d("div",b,[d(c,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[g])),_:1},8,["onClick"]),d(c,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(c,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[k])),_:1},8,["onClick"]),d(c,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[x])),_:1},8,["onClick"]),d(c,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),d(c,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[S])),_:1},8,["onClick"])]),d("div",O,[d(c,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[R])),_:1},8,["onClick"]),d(c,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(c,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[y])),_:1},8,["onClick"]),d(c,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[T])),_:1},8,["onClick"]),d(c,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[h])),_:1},8,["onClick"])]),d(f,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;
