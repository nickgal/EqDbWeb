import{_ as x}from"./nuxt-link.4d0f9d90.js";import{u as w,s as N}from"./slugify.86050e8a.js";import{f as d,h as L,j as r,o,c as s,b as h,w as C,d as S,t as m,k as _,F as g,r as z,g as V,i as B,a as f}from"./entry.1f0b23c3.js";import{u as F}from"./index.61624455.js";const R={key:0},j=d({__name:"NpcLookupLink",props:{npcId:{}},async setup(i){let e,u;const a=i,{data:n}=([e,u]=L(()=>w(`/api/npcs/${a.npcId}`,"$Yq1POr4Mdt")),e=await e,u(),e);return(c,t)=>{var p;const l=x;return(p=r(n))!=null&&p.npc?(o(),s("div",R,[h(l,{to:`/npcs/${r(n).npc.id}-${("slugify"in c?c.slugify:r(N))(r(n).npc.name)}`},{default:C(()=>[S(m(r(n).npc.name),1)]),_:1},8,["to"])])):_("",!0)}}}),A={key:0},D={key:0},E={key:0},M=d({__name:"Spawns",props:{zone:{}},setup(i){return(e,u)=>{var n;const a=j;return(n=e.zone)!=null&&n.spawns?(o(),s("div",A,[e.zone.spawns?(o(),s("ul",D,[(o(!0),s(g,null,z(e.zone.spawns,c=>(o(),s("li",null,[c?(o(),s("ul",E,[(o(!0),s(g,null,z(c.spawnEntries,t=>(o(),s("li",null,[h(a,{npcId:t.npcId},null,8,["npcId"])]))),256))])):_("",!0)]))),256))])):_("",!0)])):_("",!0)}}}),O={key:0},P=f("hr",null,null,-1),Z=f("hr",null,null,-1),Y=d({__name:"[id]",async setup(i){var k,y;let e,u;const a=V(),[n,...c]=a.params.id.toString().split(/-(.*)/s),{data:t}=([e,u]=L(()=>w(`/api/zones/${n}`,"$4m80ARDHOU")),e=await e,u(),e),l=c.join(""),p=(y=(k=t==null?void 0:t.value)==null?void 0:k.zone)==null?void 0:y.longName,$=N(p);return p&&l!=$&&B().replace(a.path.replace(a.params.id.toString(),`${n}-${$}`)),F({title:()=>`${p} - Zones`}),(I,b)=>{const v=M;return r(t)?(o(),s("div",O,[S(m(r(p))+" ",1),P,h(v,{zone:r(t).zone},null,8,["zone"]),Z,f("code",null,m(r(t).zone),1)])):_("",!0)}}});export{Y as default};