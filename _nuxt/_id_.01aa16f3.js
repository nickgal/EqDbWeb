import{_ as h}from"./DetailsWindow.fed2aa88.js";import{u as g}from"./index.b5b7c69a.js";import{f as w,g as x,h as p,j as n,o as y,c as N,b as C,w as S,d as $,t as m,a as u,k,y as V}from"./entry.613514cf.js";import{s as v,u as B}from"./slugify.030a6aa6.js";const j={key:0},D=u("hr",null,null,-1),M=w({__name:"[id]",async setup(T){var c,i;let e,s;const a=x(),[l,..._]=a.params.id.toString().split(/-(.*)/s),{data:t}=([e,s]=p(()=>B(`/api/spells/${l}`,"$0n5NmH6CZJ")),e=await e,s(),e),d=_.join(""),o=(i=(c=t==null?void 0:t.value)==null?void 0:c.spell)==null?void 0:i.name,r=v(o);return o&&d!=r&&([e,s]=p(()=>V({path:a.path.replace(a.params.id.toString(),`${l}-${r}`),replace:!0})),await e,s()),g({title:()=>`${o} - Spells`}),(b,A)=>{const f=h;return n(t)?(y(),N("div",j,[C(f,null,{default:S(()=>[$(m(n(t).spell.name),1)]),_:1}),D,u("code",null,m(n(t).spell),1)])):k("",!0)}}});export{M as default};
