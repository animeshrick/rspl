((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_302",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
bVR(){var x=0,w=A.j(y.D),v,u
var $async$bVR=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:$.chO()
x=3
return A.b(C.apb.dD("getApplicationDocumentsDirectory",null,!1,y.w),$async$bVR)
case 3:u=e
if(u==null)throw A.p(new B.aeA("Unable to get application documents directory"))
v=A.c66(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bVR,w)},
aeA:function aeA(d){this.a=d},
b54:function b54(){},
b17:function b17(){},
ai_:function ai_(){},
boq:function boq(d,e,f){this.a=d
this.r=e
this.w=f},
cFs(){var x=new B.bV6().$0()
return x},
bV6:function bV6(){},
cHa(d,e,f){return B.cFs().btR(d,new B.boq(f,!1,!0))}},C
A=c[0]
D=c[2]
B=a.updateHolder(c[134],B)
C=c[313]
B.aeA.prototype={
j(d){return"MissingPlatformDirectoryException("+this.a+")"},
$ibO:1,
gz2(){return null}}
B.b54.prototype={}
B.b17.prototype={}
B.ai_.prototype={
gKL(d){var x=0,w=A.j(y.h),v,u=this,t,s
var $async$gKL=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:t=u.M6()
s=$
x=3
return A.b(t,$async$gKL)
case 3:s.ctM=f
v=u.gKL(0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$gKL,w)},
M6(){var x=0,w=A.j(y.b),v=this,u
var $async$M6=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:x=2
return A.b(B.bVR(),$async$M6)
case 2:u=e
x=3
return A.b(B.cHa(A.cGQ(u.ge7(u),"ReturnImage.db"),v.gb03(),1),$async$M6)
case 3:return A.h(null,w)}})
return A.i($async$M6,w)},
ym(d,e){return this.b04(d,e)},
b04(d,e){var x=0,w=A.j(y.b)
var $async$ym=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:x=2
return A.b(d.a7B("DROP TABLE IF EXISTS tblReturnProductImage"),$async$ym)
case 2:x=3
return A.b(d.a7B("DROP TABLE IF EXISTS tblReturnProductLocalImage"),$async$ym)
case 3:x=4
return A.b(d.a7B("CREATE TABLE tblReturnProductImage ([Id] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, [OrderId]  TEXT NULL, [ItemId]  TEXT  NULL, [FileName]  TEXT  NULL, [LocalFilePaths]  TEXT NOT NULL, [LastUpdated] DATETIME NOT NULL DEFAULT (datetime('now','localtime')), UNIQUE(LocalFilePaths) ON CONFLICT REPLACE);"),$async$ym)
case 4:x=5
return A.b(d.a7B("CREATE TABLE tblReturnProductLocalImage ([Id] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, [OrderId]  TEXT NULL, [ItemId]  TEXT  NULL, [FileName]  TEXT  NULL, [LocalFilePaths]  TEXT NOT NULL, [LastUpdated] DATETIME NOT NULL DEFAULT (datetime('now','localtime')), UNIQUE(LocalFilePaths) ON CONFLICT REPLACE);"),$async$ym)
case 5:return A.h(null,w)}})
return A.i($async$ym,w)},
Kd(){var x=0,w=A.j(y.v),v=1,u,t,s,r,q,p,o
var $async$Kd=A.e(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:v=3
x=6
return A.b($.a4A().gKL(0),$async$Kd)
case 6:t=e
s="DELETE FROM tblReturnProductImage;"
r="DELETE FROM tblReturnProductLocalImage;"
t.bpY(s)
t.bpY(r)
A.v(A.w(!0,!0))
v=1
x=5
break
case 3:v=2
o=u
q=A.J(o)
A.v(A.w(!0,!0))
A.k(q)
x=5
break
case 2:x=1
break
case 5:return A.h(null,w)
case 1:return A.f(u,w)}})
return A.i($async$Kd,w)}}
B.boq.prototype={
j(d){var x=A.y(y.w,y.q)
x.k(0,"version",this.a)
x.k(0,"readOnly",!1)
x.k(0,"singleInstance",!0)
return A.Tr(x)}}
var z=a.updateTypes(["a5<@>(c5X,z)"])
B.bV6.prototype={
$0(){throw A.p(A.ah("databaseFactory not initialized\ndatabaseFactory is only initialized when using sqflite. When using `sqflite_common_ffi`\nYou must call `databaseFactory = databaseFactoryFfi;` before using global openDatabase API\n"))},
$S:1078};(function installTearOffs(){var x=a._instance_2u
x(B.ai_.prototype,"gb03","ym",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.K,[B.aeA,B.ai_,B.boq])
w(B.b54,A.ago)
w(B.b17,B.b54)
w(B.bV6,A.bs)})()
A.bb(b.typeUniverse,JSON.parse('{"aeA":{"bO":[]}}'))
var y={h:A.B("c5X"),D:A.B("Iv"),w:A.B("o"),b:A.B("@"),q:A.B("K?"),v:A.B("~")};(function constants(){C.apb=new A.eL("plugins.flutter.io/path_provider",D.aL,null)})();(function staticFields(){$.ctM=null})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"cMd","chP",()=>new A.K())
w($,"cMc","chO",()=>{var v=new B.b17()
v.ne($.chP())
return v})
x($,"cMR","a4A",()=>new B.ai_())})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_302",e:"endPart",h:b})})($__dart_deferred_initializers__,"wDY2Gkr7ZOlgE52GQKfOkisIij0=");