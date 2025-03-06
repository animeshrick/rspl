((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_236",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={b8a:function b8a(){},agN:function agN(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[98],B)
B.b8a.prototype={
bpy(d){var x,w,v,u,t,s,r,q,p="BBMinQty",o=J.c(J.c(J.c(d,"ResponseData"),"data"),"availableRequestProduct"),n=A.a([],y.z),m=J.O(o)
if(m.gbg(o))for(m=m.gaH(o),x=y.s,w=y.x,v=y.d,u=y.w;m.E();){t=m.gS(m)
s=new A.b0(A.a([],x),A.a([],w),A.a([],v),A.a([],u),A.a([],u))
r=J.O(t)
s.e=new A.l().B(r.h(t,"DisplayName"))
s.a=new A.l().B(r.h(t,"ProductId"))
s.ny=new A.l().B(r.h(t,"RequestedDate"))
A.C()
s.db=C.c.ah("https://res.retailershakti.com/incom/images/product/thumb/",r.h(t,"ProductImage"))
s.r=new A.l().B(r.h(t,"MfgGroup"))
q=new A.l().B(r.h(t,"IsOutOfStock"))
s.bF=q==null?"":q
s.z=new A.l().B(r.h(t,p))
s.em=new A.l().bT(J.n(r.h(t,p)))?new A.l().B(r.h(t,p)):"0"
s.p1=new A.l().B(r.h(t,"PrescriptionOTC"))
q=new A.l().cB(r.h(t,"MRP"))
s.at=q==null?0:q
q=new A.l().cB(r.h(t,"ApplicableDisc"))
s.ay=q==null?0:q
q=new A.l().cB(r.h(t,"OfferPrice"))
s.ch=q==null?0:q
s.cx=new A.l().B(r.h(t,"ProductStatus"))
s.bJ=new A.l().B(r.h(t,"PTR"))
s.F=new A.l().B(r.h(t,"PTRDiscPercent"))
n.push(s)}return n}}
B.agN.prototype={
HC(d){return this.aEI(d)},
aEI(d){var x=0,w=A.j(y.q),v,u=2,t,s=this,r,q,p,o,n,m,l
var $async$HC=A.e(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
x=7
return A.b(new A.ba().aY("REQUEST_PRODUCT"),$async$HC)
case 7:r=f
x=8
return A.b(s.a.h1("REQUEST_PRODUCT_search",A.k(r)+d),$async$HC)
case 8:q=f
n=A.Bw(q)
v=n
x=1
break
u=2
x=6
break
case 4:u=3
l=t
p=A.J(l)
o=A.aR(l)
A.v(A.w(!0,!0))
J.n(p)
x=6
break
case 3:x=2
break
case 6:v=A.a([],y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t,w)}})
return A.i($async$HC,w)},
Qf(d){return this.aHx(d)},
aHx(d){var x=0,w=A.j(y.v),v,u=2,t,s=this,r,q,p,o,n,m
var $async$Qf=A.e(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
x=7
return A.b(s.a.aU("submitFinalProductRequest","https://nw-stg-api.retailershakti.com/index_v2/post",C.n.aa(d)),$async$Qf)
case 7:r=f
o=J.c(J.c(J.c(J.c(r,"ResponseData"),"data"),"messageArray"),"message")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t
q=A.J(m)
p=A.aR(m)
A.v(A.w(!0,!0))
J.n(q)
x=6
break
case 3:x=2
break
case 6:v=""
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t,w)}})
return A.i($async$Qf,w)},
rw(d){return this.bpw(d)},
bpw(d){var x=0,w=A.j(y.q),v,u=2,t,s=this,r,q,p,o,n,m
var $async$rw=A.e(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
x=7
return A.b(s.a.aU("get approved Product List","https://nw-stg-api.retailershakti.com/index_v2/get",C.n.aa(d)),$async$rw)
case 7:r=f
o=new B.b8a().bpy(r)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t
q=A.J(m)
p=A.aR(m)
A.v(A.w(!0,!0))
J.n(q)
x=6
break
case 3:x=2
break
case 6:v=A.a([],y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t,w)}})
return A.i($async$rw,w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.K,[B.b8a,B.agN])})()
var y={d:A.B("x<aL>"),s:A.B("x<iD>"),x:A.B("x<iX>"),w:A.B("x<i_>"),z:A.B("x<b0>"),q:A.B("I<b0>"),v:A.B("o")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_236",e:"endPart",h:b})})($__dart_deferred_initializers__,"7ktBnZVakrKXH8rladRZ53gOcZA=");