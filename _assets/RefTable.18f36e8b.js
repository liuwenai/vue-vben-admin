import{a as e,r as i,h as t,f as o,i as s,o as n,j as a,k as l,w as c,p as r}from"./index.29c86768.js";import"./xlsx.a48e520c.js";import"./useSortable.29fd00a8.js";import"./index.2e2f5f7d.js";import"./Trigger.6c22f7c7.js";import"./omit.d533ea5b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b890e848.js";import"./CheckOutlined.f30665d7.js";import"./index.27831eb4.js";import"./colors.673869cf.js";import"./index.28b14bf9.js";import"./RightOutlined.fb87c3f1.js";import"./index.b3243be0.js";import"./types.45bf8ecb.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7c0d94fd.js";import"./_baseFor.f4e5f03f.js";import"./index.acb2ea2e.js";import"./index.a172b251.js";import"./index.5c941694.js";import"./index.b1950fab.js";import"./UpOutlined.b2cfd225.js";import"./LeftOutlined.551d5451.js";import"./index.4db9ca1f.js";import"./index.8f2ab325.js";import"./index.776da8fc.js";import"./index.251803e9.js";import"./index.f240ef55.js";import"./zh_CN.0242bd16.js";import"./index.f54a7c5a.js";import"./index.63b5feca.js";import"./CaretDownFilled.4203e1b4.js";import"./index.d8838e74.js";import"./CheckOutlined.7d29bae7.js";import"./CloseOutlined.4823f3c8.js";import{s as m}from"./index.92f156d8.js";import"./FullscreenOutlined.4461ae5c.js";import"./LeftOutlined.4f6a12c7.js";import"./LoadingOutlined.ec80bfa3.js";import"./TableAction.76add184.js";import"./RightOutlined.76f7bf3c.js";import"./SettingOutlined.7b0158eb.js";import"./useTimeout.35f8dc13.js";import"./tsxHelper.7e7d25f8.js";import"./index.52262a17.js";import"./animation.a2928106.js";import"./useScrollTo.4e4d37c3.js";import"./useAttrs.13d68406.js";import"./index.b453a0ba.js";import"./index.7aebb02d.js";import"./useWindowSizeFn.05a9f1df.js";import"./useForm.c1018cbc.js";import"./uuid.40269c00.js";import"./useExpose.166e0dfa.js";import{getBasicColumns as d,getBasicShortColumns as f}from"./tableData.77e01411.js";import{d as p}from"./table.226ba65a.js";var u=e({components:{BasicTable:m},setup(){const e=i(null),{createMessage:s}=t();function n(){const i=o(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:p,columns:d(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(f())},reloadTable:function(){n().setColumns(d()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=r("还原"),g=r("开启loading"),x=r("更改Columns"),k=r("获取Columns"),w=r("获取表格数据"),S=r("跳转到第2页"),R={class:"mb-4"},_=r("获取选中行"),L=r("获取选中行Key"),T=r("设置选中行"),h=r("清空选中行"),O=r("获取分页信息");u.render=function(e,i,t,o,r,m){const d=s("a-button"),f=s("BasicTable");return n(),a("div",j,[l("div",b,[l(d,{class:"mr-2",onClick:e.reloadTable},{default:c((()=>[C])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.changeLoading},{default:c((()=>[g])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.changeColumns},{default:c((()=>[x])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.getColumn},{default:c((()=>[k])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.getTableData},{default:c((()=>[w])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.setPaginationInfo},{default:c((()=>[S])),_:1},8,["onClick"])]),l("div",R,[l(d,{class:"mr-2",onClick:e.getSelectRowList},{default:c((()=>[_])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:c((()=>[L])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:c((()=>[T])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.clearSelect},{default:c((()=>[h])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.getPagination},{default:c((()=>[O])),_:1},8,["onClick"])]),l(f,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;