((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_258",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B,C={b8m:function b8m(){},ah0:function ah0(d){this.a=d}}
J=c[1]
A=c[0]
D=c[2]
B=c[163]
C=a.updateHolder(c[99],C)
C.b8m.prototype={
bpR(d){var x,w,v,u,t,s,r,q,p="BBMinQty",o=J.c(J.c(J.c(d,"ResponseData"),"data"),"availableRequestProduct"),n=A.a([],y.z),m=J.P(o)
if(m.gbf(o))for(m=m.gaG(o),x=y.s,w=y.x,v=y.d,u=y.w;m.E();){t=m.gS(m)
s=new B.ay(A.a([],x),A.a([],w),A.a([],v),A.a([],u),A.a([],u))
r=J.P(t)
s.e=new B.l().B(r.h(t,"DisplayName"))
s.a=new B.l().B(r.h(t,"ProductId"))
s.nz=new B.l().B(r.h(t,"RequestedDate"))
B.C()
s.db=D.c.ah("https://res.retailershakti.com/incom/images/product/thumb/",r.h(t,"ProductImage"))
s.r=new B.l().B(r.h(t,"MfgGroup"))
q=new B.l().B(r.h(t,"IsOutOfStock"))
s.bF=q==null?"":q
s.z=new B.l().B(r.h(t,p))
s.em=new B.l().bX(J.n(r.h(t,p)))?new B.l().B(r.h(t,p)):"0"
s.p1=new B.l().B(r.h(t,"PrescriptionOTC"))
q=new B.l().cB(r.h(t,"MRP"))
s.at=q==null?0:q
q=new B.l().cB(r.h(t,"ApplicableDisc"))
s.ay=q==null?0:q
q=new B.l().cB(r.h(t,"OfferPrice"))
s.ch=q==null?0:q
s.cx=new B.l().B(r.h(t,"ProductStatus"))
s.bJ=new B.l().B(r.h(t,"PTR"))
s.F=new B.l().B(r.h(t,"PTRDiscPercent"))
n.push(s)}return n}}
C.ah0.prototype={
HK(d){return this.aEZ(d)},
aEZ(d){var x=0,w=A.i(y.q),v,u=2,t,s=this,r,q,p,o,n,m,l
var $async$HK=A.d(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
x=7
return A.b(new B.bc().aY("REQUEST_PRODUCT"),$async$HK)
case 7:r=f
x=8
return A.b(s.a.h1("REQUEST_PRODUCT_search",A.k(r)+d),$async$HK)
case 8:q=f
n=B.BM(q)
v=n
x=1
break
u=2
x=6
break
case 4:u=3
l=t
p=A.K(l)
o=A.aS(l)
B.v(B.w(!0,!0))
J.n(p)
x=6
break
case 3:x=2
break
case 6:v=A.a([],y.z)
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$HK,w)},
Qj(d){return this.aHP(d)},
aHP(d){var x=0,w=A.i(y.v),v,u=2,t,s=this,r,q,p,o,n,m
var $async$Qj=A.d(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
x=7
return A.b(s.a.aU("submitFinalProductRequest","https://nw-stg-api.retailershakti.com/index_v2/post",D.n.ac(d)),$async$Qj)
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
q=A.K(m)
p=A.aS(m)
B.v(B.w(!0,!0))
J.n(q)
x=6
break
case 3:x=2
break
case 6:v=""
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$Qj,w)},
rC(d){return this.bpP(d)},
bpP(d){var x=0,w=A.i(y.q),v,u=2,t,s=this,r,q,p,o,n,m
var $async$rC=A.d(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
x=7
return A.b(s.a.aU("get approved Product List","https://nw-stg-api.retailershakti.com/index_v2/get",D.n.ac(d)),$async$rC)
case 7:r=f
o=new C.b8m().bpR(r)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t
q=A.K(m)
p=A.aS(m)
B.v(B.w(!0,!0))
J.n(q)
x=6
break
case 3:x=2
break
case 6:v=A.a([],y.z)
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$rC,w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.G,[C.b8m,C.ah0])})()
var y={d:A.A("x<av>"),s:A.A("x<io>"),x:A.A("x<iO>"),w:A.A("x<hU>"),z:A.A("x<ay>"),q:A.A("D<ay>"),v:A.A("p")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_258",e:"endPart",h:b})})($__dart_deferred_initializers__,"GUAtVuKowzxSSx6w4IHX9wGsnYs=");