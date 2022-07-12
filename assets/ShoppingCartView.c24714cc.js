import{_ as f,d as h,f as x,s as b,r as C,o,c as p,a as t,t as c,b as a,g,u as P,p as y,e as $,h as v,w as k,F as I,i as z,T as A}from"./index.f8487ba2.js";import{P as F,A as V}from"./ProductCounter.496e684d.js";const j={class:"item"},B={class:"item__data"},L={class:"item__img_wrapper"},N=["src","alt"],O={class:"item__title"},R={class:"item__price"},T=h({__name:"ShoppingCartItem",props:{item:{type:Object,required:!0}},setup(e){const s=e,i=x(),{getShortedName:n,getPriceForProducts:_}=b(i),{setAmount:d,removeFormShoppingCard:m}=i,l=C(s.item.amount);return(S,r)=>(o(),p("div",j,[t("div",B,[t("div",L,[t("img",{src:e.item.product.image,alt:e.item.product.title},null,8,N)]),t("div",O,[t("h4",null,c(a(n)(e.item.product.id)),1),t("p",null,"$ "+c(e.item.product.price),1)])]),g(F,{modelValue:l.value,"onUpdate:modelValue":[r[0]||(r[0]=u=>l.value=u),r[2]||(r[2]=u=>a(d)(e.item.product.id,l.value))],onReachZero:r[1]||(r[1]=u=>a(m)(e.item.product.id))},null,8,["modelValue"]),t("h4",R," $ "+c(a(_)(e.item.product.id).toFixed(2)),1)]))}});var D=f(T,[["__scopeId","data-v-4e108cf6"]]);const w=e=>(y("data-v-8c6131ca"),e=e(),$(),e),q={class:"aside"},E=w(()=>t("h3",{class:"aside__title"},"Order summary",-1)),G={class:"order"},U={class:"order__line"},Y=w(()=>t("p",{class:"order__text grey-text"},"Sub total",-1)),Z={class:"order__text black-text"},H={class:"order__line"},J=w(()=>t("p",{class:"order__text grey-text"},"Delivery fee",-1)),K={class:"order__text black-text"},M={class:"aside__summ"},Q=h({__name:"ShoppingCartAside",setup(e){const s=x(),i=P(),{getOrderPrice:n,delivery:_}=b(s),{resetCart:d}=s,m=()=>{i.push("/products"),d()};return(l,S)=>(o(),p("aside",q,[E,t("div",G,[t("div",U,[Y,t("p",Z,"$ "+c(a(n)),1)]),t("div",H,[J,t("p",K,"$ "+c(a(_)),1)])]),t("div",M,"$ "+c(a(n)+a(_)),1),t("button",{class:"aside__pay_btn",onClick:m}," Proceed to checkout ")]))}});var W=f(Q,[["__scopeId","data-v-8c6131ca"]]);const X=e=>(y("data-v-1dda504f"),e=e(),$(),e),tt={class:"main"},et={class:"main__wrapper"},at={class:"cart"},it=X(()=>t("h2",{class:"cart__title"},"Your shopping cart",-1)),ot={key:1,class:"empty"},st=h({__name:"ShoppingCartList",setup(e){const s=x(),{bougthProducts:i}=b(s);return(n,_)=>(o(),p("main",tt,[t("div",et,[t("section",at,[it,a(i).length>0?(o(),v(A,{key:0,tag:"div",name:"bougthProducts",class:"cart__list"},{default:k(()=>[(o(!0),p(I,null,z(a(i),d=>(o(),v(D,{item:d,key:d.id},null,8,["item"]))),128))]),_:1})):(o(),p("div",ot,"Nothing is in cart"))]),g(W)]),g(V)]))}});var dt=f(st,[["__scopeId","data-v-1dda504f"]]);const nt=h({__name:"ShoppingCartView",setup(e){return(s,i)=>(o(),v(dt))}});export{nt as default};