import{_ as m}from"./nuxt-link.f1906708.js";import{u as d,s as p}from"./slugify.9b42d33e.js";import{f,h as N,o as a,c as s,d as c,j as n,a as o,F as g,r as y,k as h,t as r,b as x,w as k}from"./entry.55b50338.js";const w={key:0},$=f({__name:"index",async setup(B){let e,l;const{data:i}=([e,l]=N(()=>d("/api/zones","$jwBsOgNlr5")),e=await e,l(),e);return(u,C)=>{const _=m;return a(),s("div",null,[c(" Factions "),n(i)?(a(),s("table",w,[o("tbody",null,[(a(!0),s(g,null,y(n(i).zones,t=>(a(),s("tr",null,[o("td",null,r(t.id),1),o("td",null,[x(_,{to:`/zones/${t.id}-${("slugify"in u?u.slugify:n(p))(t.longName)}`},{default:k(()=>[c(r(t.longName)+" ("+r(t.shortName)+") ",1)]),_:2},1032,["to"])])]))),256))])])):h("",!0)])}}});export{$ as default};
