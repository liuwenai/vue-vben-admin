import{d as e,aV as o,aW as a,aG as s,aB as r,u as t,K as n,f as i,bf as d,h as l,o as p,i as c,w as m,j as f,k as u,l as g}from"./index.90c52b16.js";import{D as h,M as b}from"./index.03c75358.js";/* empty css              */import"./Dropdown.feda9303.js";import{D as x}from"./siteSetting.c485f07c.js";import{d as j}from"./useHeaderSetting.dff194ab.js";import{h as D}from"./header.d801b988.js";import"./vendor.3b1829c7.js";import"./RightOutlined.cfcf74a2.js";import"./EllipsisOutlined.e387576a.js";import"./types.d41dd5bc.js";import"./isEqual.02d41abb.js";import"./toInteger.59d50af7.js";var w=e({name:"UserDropdown",components:{Dropdown:h,Menu:b,MenuItem:o((()=>a((()=>import("./DropMenuItem.b57b3b8e.js")),["/assets/DropMenuItem.b57b3b8e.js","/assets/index.f8cd4764.css","/assets/index.90c52b16.js","/assets/index.cfcd32c1.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.03c75358.js","/assets/index.66628971.css","/assets/RightOutlined.cfcf74a2.js","/assets/EllipsisOutlined.e387576a.js","/assets/types.d41dd5bc.js","/assets/isEqual.02d41abb.js","/assets/toInteger.59d50af7.js"]))),MenuDivider:b.Divider},props:{theme:s.oneOf(["dark","light"])},setup(){const{prefixCls:e}=r("header-user-dropdown"),{t:o}=t(),{getShowDoc:a}=j();return{prefixCls:e,t:o,getUserInfo:n((()=>{const{realName:e="",desc:o}=i.getUserInfoState||{};return{realName:e,desc:o}})),handleMenuClick:function(e){switch(e.key){case"loginOut":i.confirmLoginOut();break;case"doc":d(x)}},getShowDoc:a,headerImg:D}}});w.render=function(e,o,a,s,r,t){const n=l("MenuItem"),i=l("MenuDivider"),d=l("Menu"),h=l("Dropdown");return p(),c(h,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m((()=>[f(d,{onClick:e.handleMenuClick},{default:m((()=>[e.getShowDoc?(p(),c(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"gg:loadbar-doc"},null,8,["text"])):u("",!0),f(i),f(n,{key:"loginOut",text:e.t("layout.header.dropdownItemLoginOut"),icon:"carbon:power"},null,8,["text"])])),_:1},8,["onClick"])])),default:m((()=>[f("span",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[f("img",{class:`${e.prefixCls}__header`,src:e.headerImg},null,10,["src"]),f("span",{class:`${e.prefixCls}__info`},[f("span",{class:`${e.prefixCls}__name anticon`},g(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"])};export default w;
