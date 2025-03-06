((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_315",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={aEt:function aEt(d){this.a=d},
ctH(){return new B.A9(null)},
A9:function A9(d){this.a=d},
awS:function awS(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
bOl:function bOl(){},
bOk:function bOk(d){this.a=d},
bOi:function bOi(){},
bOj:function bOj(d,e){this.a=d
this.b=e},
ctI(){var x=$.aw()
x=new B.wr(new A.bl(C.F,x),new B.aEt(new A.bA(new A.by(A.v(A.w(!0,!0))))),new A.r(C.a2,null,null,y.t),x)
x.aO0()
return x},
wr:function wr(d,e,f,g){var _=this
_.a=!1
_.b=d
_.c=""
_.d=e
_.e=f
_.P$=0
_.M$=g
_.a4$=_.X$=0
_.a5$=!1},
beu:function beu(){},
bev:function bev(d){this.a=d},
bew:function bew(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[58],B)
D=c[260]
B.aEt.prototype={
Gv(d){return this.aBw(d)},
aBw(d){var x=0,w=A.j(y.y),v,u=2,t,s=this,r,q,p,o,n,m,l
var $async$Gv=A.e(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
x=7
return A.b(A.b7("bulkbuyer_front",d,"downloadByDocket","salesreturnreport"),$async$Gv)
case 7:r=f
x=8
return A.b(s.a.aU("getApprovalSheet","https://nw-stg-api.retailershakti.com/index_v2/get",C.n.aa(r)),$async$Gv)
case 8:q=f
if(new A.bo().bI(q)==="2000"){n=J.c(q,"ResponseData")
n=J.aS(J.c(n==null?A.y(y.N,y.z):n,"data"))
p=n
v=p
x=1
break}else{v=!1
x=1
break}u=2
x=6
break
case 4:u=3
l=t
o=A.J(l)
A.v(A.w(!0,!0))
J.n(o)
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t,w)}})
return A.i($async$Gv,w)}}
B.A9.prototype={
Y(){return new B.awS(new A.aX(null,y.w),C.p)}}
B.awS.prototype={
A(d){var x,w=null
A.C()
x=y.e
return A.bM(A.dv(w,!0,w,w,w,w,w,w,w,A.H("Return Approval Sheet",C.j,18,w,w,!1,w,w,w)),w,A.cb(A.bC(new B.bOk(this),x),new B.bOl(),x),w,w,w,w,w,w)}}
B.wr.prototype={
aO0(){var x="Return Approval"
new A.cM().es(x)
new A.dJ().ef(x,x)
$.G.R8$.push(new B.beu())},
Gl(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$Gl=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:x=2
return A.b(new A.S().aC(),$async$Gl)
case 2:u=e
x=3
return A.b(new A.ba().aY("ReversePickUPDownloadApi"),$async$Gl)
case 3:t=e
x=4
return A.b(new A.ba().aY("ReversePickUPDownloadApiFileName"),$async$Gl)
case 4:s=e
r=v.b
q=C.c.bX(r.a.a)
v.c=t+"?filename="+A.bf(s,"#DOCKET#",q)+"&DocketNo="+C.c.bX(r.a.a)+"&UserId="+new A.l().fJ(u)
A.v(A.w(!0,!0))
if(new A.l().q(v.c)){r=v.c
new A.l().z5("csv","rs_return_approval"+1000*Date.now(),r)}v.m()
return A.h(null,w)}})
return A.i($async$Gl,w)},
Lj(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$Lj=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:v.e=new A.r(C.l,null,null,y.t)
v.m()
v.a=!0
v.m()
u=y.N
t=y.P
s=A
r=v.d
q=A
x=3
return A.b(new A.S().aC(),$async$Lj)
case 3:x=2
return A.b(s.aJ(r.Gv(q.D(["CustUserId",e,"DocketNo",C.c.bX(v.b.a.a)],u,u)).O(new B.bev(v),t),new B.bew(v),t,y.K),$async$Lj)
case 2:return A.h(null,w)}})
return A.i($async$Lj,w)}}
var z=a.updateTypes(["wr(u)","pZ(u,wr,m?)"])
B.bOl.prototype={
$1(d){return B.ctI()},
$S:z+0}
B.bOk.prototype={
$3(d,e,f){var x,w,v,u=null,t=this.a
A.C()
x=A.dg(u,u,e.b,u,u,!1,!1,!1,u,!0,u,!1,u,C.dY,"Enter Tracking Number",u,u,u,u,u,new B.bOi())
w=e.a
v=A.as(d,u,y.l).w
A.C()
return A.eA(u,new A.a4(D.xH,A.U(A.a([x,new A.t(u,20,u,u),A.fZ(C.bt,"Download",16,u,w,new B.bOj(t,e),30,u,v.a.a)],y.p),C.f,u,C.h,C.d,u),u),t.d)},
$C:"$3",
$R:3,
$S:z+1}
B.bOi.prototype={
$1(d){return new A.cH().YT("Please enter correct format",d)},
$S:9}
B.bOj.prototype={
$0(){if(this.a.d.ga7().jH())this.b.Lj()},
$S:4}
B.beu.prototype={
$1(d){return this.ayv(d)},
ayv(d){var x=0,w=A.j(y.H),v,u
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:u=J
x=2
return A.b(new A.bU().jA(),$async$$1)
case 2:if(u.q(f,!1)){v=$.af().a.c
v===$&&A.d()
v=$.G.F$.z.h(0,v.c.b)
if(v.e!=null)A.bZ(v,"/login",null,C.L,C.V)}return A.h(null,w)}})
return A.i($async$$1,w)},
$S:8}
B.bev.prototype={
$1(d){return this.ayw(d)},
ayw(d){var x=0,w=A.j(y.P),v=this,u
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:u=v.a
u.e=new A.r(C.q,d,null,y.t)
u.m()
x=d?2:4
break
case 2:x=5
return A.b(u.Gl(),$async$$1)
case 5:x=3
break
case 4:A.C()
new A.at().aA("No Data Found",C.D)
case 3:u.a=!1
u.m()
return A.h(null,w)}})
return A.i($async$$1,w)},
$S:1125}
B.bew.prototype={
$2(d,e){var x=this.a,w=J.aK(d)
x.e=new A.r(C.r,null,w.j(d),y.t)
x.m()
x.a=!0
x.m()
A.v(A.w(!0,!0))
w.j(d)},
$S:1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aEt,A.K)
x(B.A9,A.V)
x(B.awS,A.Y)
w(A.bm,[B.bOl,B.bOk,B.bOi,B.beu,B.bev])
x(B.bOj,A.bs)
x(B.wr,A.ak)
x(B.bew,A.c4)})()
A.bb(b.typeUniverse,JSON.parse('{"A9":{"V":[],"m":[]},"awS":{"Y":["A9"]},"wr":{"ak":[],"ac":[]}}'))
var y=(function rtii(){var x=A.B
return{t:x("r<Q>"),p:x("x<m>"),w:x("aX<ia>"),l:x("d3"),P:x("a1"),K:x("K"),e:x("wr"),N:x("o"),y:x("Q"),z:x("@"),H:x("~")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_315",e:"endPart",h:b})})($__dart_deferred_initializers__,"82ZfxzpFBz38Oejxq4lL0ImMzBY=");