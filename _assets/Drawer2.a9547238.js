import{a as r,i as e,o as s,j as t,w as i,k as o,J as a,p as n}from"./index.29c86768.js";import"./xlsx.a48e520c.js";import"./Trigger.6c22f7c7.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7c0d94fd.js";import"./index.5c941694.js";import"./index.7829636a.js";import"./index.d8838e74.js";import{s as c,a as m}from"./index.c521e578.js";import"./RightOutlined.76f7bf3c.js";import"./useTimeout.35f8dc13.js";import"./tsxHelper.7e7d25f8.js";import"./index.52262a17.js";import"./animation.a2928106.js";import"./useScrollTo.4e4d37c3.js";import"./useAttrs.13d68406.js";var p=r({components:{BasicDrawer:c},setup(){const[r,{closeDrawer:e}]=m();return{register:r,closeDrawer:e}}});const d=n(" Drawer Info. "),j=n("内部关闭drawer");p.render=function(r,n,c,m,p,l){const f=e("a-button"),u=e("BasicDrawer");return s(),t(u,a(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:i((()=>[d,o(f,{type:"primary",onClick:r.closeDrawer},{default:i((()=>[j])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;