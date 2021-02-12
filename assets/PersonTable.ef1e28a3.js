import{_ as e}from"./index.8c9c19a9.js";import{d as t,h as i,o,i as n,j as r,w as s,m as d}from"./index.90c52b16.js";import{g as a}from"./BasicForm.a9a0f9c8.js";import{u as c}from"./useTable.1c5ea79a.js";import"./index.fa6bd12e.js";import"./SearchOutlined.6e891176.js";import"./CheckOutlined.939cfff4.js";import"./DownOutlined.7aae8e4a.js";import"./index.b6db8047.js";import"./index.7f58e257.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.2a430b2f.js";import"./isEqual.02d41abb.js";import"./get.72c4d3e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.59d50af7.js";import"./index.03c75358.js";import"./RightOutlined.cfcf74a2.js";import"./EllipsisOutlined.e387576a.js";import"./types.d41dd5bc.js";import"./index.c6574ccf.js";import"./LeftOutlined.bb6dc2da.js";import"./DoubleLeftOutlined.89f2d4ac.js";import"./DoubleRightOutlined.c61593ad.js";import"./zh_CN.8094f4d6.js";import"./uuid.dc26ab91.js";import"./index.bcf233bf.js";import"./util.ea336fb1.js";import"./DeleteOutlined.38a38c87.js";import"./EyeOutlined.0cb40ab2.js";import"./Dropdown.feda9303.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.4b411649.js";import"./CaretDownFilled.8bf8c06d.js";import"./useForm.f6feef28.js";import"./clickOutside.6cec7876.js";import"./domUtils.c511362e.js";import"./_stringToArray.236cf9dd.js";import"./index.8e7f5b62.js";import"./index.a9dc0f3b.js";import"./UpOutlined.3d204365.js";import"./index.ff4dbc2d.js";import"./useSortable.9020c78e.js";import"./useTimeout.52531278.js";import"./useWindowSizeFn.a381ea71.js";import"./useModal.b303f15a.js";import"./ScrollContainer.f900c39d.js";import"./index.eeaffe79.js";import"./useScrollTo.7976edbd.js";import"./FullscreenOutlined.0e79ce31.js";import"./index.ed61cdf9.js";import"./SettingOutlined.c865f486.js";import"./useExpose.350cca4b.js";import"./index.af020849.js";import"./index.6214ff0d.js";import"./RedoOutlined.88db38b1.js";import"./Tree.adba5c4c.js";import"./index.c5a57688.js";import"./index.d1fdc4b0.js";import"./download.32c44b0c.js";const l=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],m=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var p=t({components:{BasicTable:e,TableAction:a},setup(){const[e,{getDataSource:t}]=c({columns:l,showIndexColumn:!1,dataSource:m,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function o(e){var i;if(null==(i=e.onEdit)||i.call(e,!1),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){const e=t(),i={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};e.push(i)},getDataSource:t}}});const j=d(" 新增成员 ");p.render=function(e,t,d,a,c,l){const m=i("TableAction"),p=i("BasicTable"),u=i("a-button");return o(),n("div",null,[r(p,{onRegister:e.registerTable},{action:s((({record:t,column:i})=>[r(m,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),r(u,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:s((()=>[j])),_:1},8,["onClick"])])};export default p;
