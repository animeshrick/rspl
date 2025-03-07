((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_333",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B,D,C={aEK:function aEK(d){this.a=d},
ctM(){return new C.As(null)},
As:function As(d){this.a=d},
ax5:function ax5(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
bOB:function bOB(){},
bOA:function bOA(d){this.a=d},
bOy:function bOy(){},
bOz:function bOz(d,e){this.a=d
this.b=e},
ctN(){var x=$.ax()
x=new C.wO(new B.bn(D.F,x),new C.aEK(new B.bB(new B.bz(B.v(B.w(!0,!0))))),new B.t(D.a2,null,null,y.t),x)
x.aOi()
return x},
wO:function wO(d,e,f,g){var _=this
_.a=!1
_.b=d
_.c=""
_.d=e
_.e=f
_.P$=0
_.M$=g
_.a4$=_.X$=0
_.a5$=!1},
beI:function beI(){},
beJ:function beJ(d){this.a=d},
beK:function beK(d){this.a=d}},F
J=c[1]
A=c[0]
E=c[2]
B=c[163]
D=c[164]
C=a.updateHolder(c[55],C)
F=c[268]
C.aEK.prototype={
GB(d){return this.aBL(d)},
aBL(d){var x=0,w=A.i(y.y),v,u=2,t,s=this,r,q,p,o,n,m,l
var $async$GB=A.d(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
x=7
return A.b(B.b7("bulkbuyer_front",d,"downloadByDocket","salesreturnreport"),$async$GB)
case 7:r=f
x=8
return A.b(s.a.aU("getApprovalSheet","https://nw-stg-api.retailershakti.com/index_v2/get",E.n.ac(r)),$async$GB)
case 8:q=f
if(new B.bp().bI(q)==="2000"){n=J.c(q,"ResponseData")
n=J.aT(J.c(n==null?A.z(y.N,y.z):n,"data"))
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
o=A.K(l)
B.v(B.w(!0,!0))
J.n(o)
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$GB,w)}}
C.As.prototype={
Y(){return new C.ax5(new B.aX(null,y.w),E.p)}}
C.ax5.prototype={
A(d){var x,w=null
B.C()
x=y.e
return B.bO(B.dC(w,!0,w,w,w,w,w,w,w,B.J("Return Approval Sheet",D.j,18,w,w,!1,w,w,w)),w,B.ce(B.bC(new C.bOA(this),x),new C.bOB(),x),w,w,w,w,w,w)}}
C.wO.prototype={
aOi(){var x="Return Approval"
new B.cV().ex(x)
new B.dM().ef(x,x)
$.I.R8$.push(new C.beI())},
Gr(){var x=0,w=A.i(y.H),v=this,u,t,s,r,q
var $async$Gr=A.d(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:x=2
return A.b(new B.T().aC(),$async$Gr)
case 2:u=e
x=3
return A.b(new B.bc().aY("ReversePickUPDownloadApi"),$async$Gr)
case 3:t=e
x=4
return A.b(new B.bc().aY("ReversePickUPDownloadApiFileName"),$async$Gr)
case 4:s=e
r=v.b
q=E.c.bS(r.a.a)
v.c=t+"?filename="+A.bf(s,"#DOCKET#",q)+"&DocketNo="+E.c.bS(r.a.a)+"&UserId="+new B.l().fJ(u)
B.v(B.w(!0,!0))
if(new B.l().q(v.c)){r=v.c
new B.l().z7("csv","rs_return_approval"+1000*Date.now(),r)}v.m()
return A.f(null,w)}})
return A.h($async$Gr,w)},
Lp(){var x=0,w=A.i(y.H),v=this,u,t,s,r,q
var $async$Lp=A.d(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:v.e=new B.t(D.l,null,null,y.t)
v.m()
v.a=!0
v.m()
u=y.N
t=y.P
s=B
r=v.d
q=A
x=3
return A.b(new B.T().aC(),$async$Lp)
case 3:x=2
return A.b(s.aM(r.GB(q.E(["CustUserId",e,"DocketNo",E.c.bS(v.b.a.a)],u,u)).O(new C.beJ(v),t),new C.beK(v),t,y.K),$async$Lp)
case 2:return A.f(null,w)}})
return A.h($async$Lp,w)}}
var z=a.updateTypes(["wO(o)","qg(o,wO,m?)"])
C.bOB.prototype={
$1(d){return C.ctN()},
$S:z+0}
C.bOA.prototype={
$3(d,e,f){var x,w,v,u=null,t=this.a
B.C()
x=B.dj(u,u,e.b,u,u,!1,!1,!1,u,!0,u,!1,u,D.dX,"Enter Tracking Number",u,u,u,u,u,new C.bOy())
w=e.a
v=B.at(d,u,y.l).w
B.C()
return B.eF(u,new B.a1(F.xJ,B.X(A.a([x,new A.u(u,20,u,u),B.h5(D.bt,"Download",16,u,w,new C.bOz(t,e),30,u,v.a.a)],y.p),E.f,u,E.h,D.d,u),u),t.d)},
$C:"$3",
$R:3,
$S:z+1}
C.bOy.prototype={
$1(d){return new B.cP().Z1("Please enter correct format",d)},
$S:7}
C.bOz.prototype={
$0(){if(this.a.d.ga7().jJ())this.b.Lp()},
$S:3}
C.beI.prototype={
$1(d){return this.ayK(d)},
ayK(d){var x=0,w=A.i(y.H),v,u
var $async$$1=A.d(function(e,f){if(e===1)return A.e(f,w)
while(true)switch(x){case 0:u=J
x=2
return A.b(new B.c_().jD(),$async$$1)
case 2:if(u.r(f,!1)){v=$.ag().a.c
v===$&&A.j()
v=$.I.F$.z.h(0,v.c.b)
if(v.e!=null)B.c0(v,"/login",null,E.L,E.P)}return A.f(null,w)}})
return A.h($async$$1,w)},
$S:5}
C.beJ.prototype={
$1(d){return this.ayL(d)},
ayL(d){var x=0,w=A.i(y.P),v=this,u
var $async$$1=A.d(function(e,f){if(e===1)return A.e(f,w)
while(true)switch(x){case 0:u=v.a
u.e=new B.t(D.q,d,null,y.t)
u.m()
x=d?2:4
break
case 2:x=5
return A.b(u.Gr(),$async$$1)
case 5:x=3
break
case 4:B.C()
new B.au().aA("No Data Found",D.D)
case 3:u.a=!1
u.m()
return A.f(null,w)}})
return A.h($async$$1,w)},
$S:478}
C.beK.prototype={
$2(d,e){var x=this.a,w=J.aJ(d)
x.e=new B.t(D.r,null,w.j(d),y.t)
x.m()
x.a=!0
x.m()
B.v(B.w(!0,!0))
w.j(d)},
$S:1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.aEK,A.G)
x(C.As,A.V)
x(C.ax5,A.Z)
w(A.bi,[C.bOB,C.bOA,C.bOy,C.beI,C.beJ])
x(C.bOz,A.br)
x(C.wO,A.aj)
x(C.beK,A.c5)})()
A.b9(b.typeUniverse,JSON.parse('{"As":{"V":[],"m":[]},"ax5":{"Z":["As"]},"wO":{"aj":[],"ab":[]}}'))
var y=(function rtii(){var x=A.A
return{t:x("t<L>"),p:x("x<m>"),w:x("aX<ih>"),l:x("d7"),P:x("R"),K:x("G"),e:x("wO"),N:x("p"),y:x("L"),z:x("@"),H:x("~")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_333",e:"endPart",h:b})})($__dart_deferred_initializers__,"bqCXyPBEtCTRPGhE3GnPiAuhdUg=");