(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{NaAF:function(t,i,e){"use strict";e.r(i),e.d(i,"FacturaNuevaPageModule",function(){return J});var n=e("ofXK"),o=e("3Pt+"),a=e("TEn/"),s=e("tyNb"),r=e("mrSG"),c=e("fXoL"),l=e("fsfq"),d=e("fmoy"),b=e("6POk"),u=e("fqim");function h(t,i){1&t&&(c.Mb(0,"div",8),c.Kb(1,"ion-spinner",9),c.Mb(2,"strong"),c.rc(3,"Cargando la interfaz..."),c.Lb(),c.Lb())}function f(t,i){if(1&t){const t=c.Nb();c.Mb(0,"ion-item-sliding"),c.Mb(1,"ion-item"),c.Mb(2,"ion-label",26),c.Mb(3,"div"),c.rc(4),c.Lb(),c.Mb(5,"div",27),c.Mb(6,"strong"),c.rc(7,"Cantidad: "),c.Lb(),c.Mb(8,"span"),c.rc(9),c.Lb(),c.Lb(),c.Mb(10,"div",27),c.Mb(11,"strong"),c.rc(12,"Valor unitario: "),c.Lb(),c.Mb(13,"span"),c.rc(14),c.Xb(15,"decimales"),c.Lb(),c.Lb(),c.Mb(16,"div",27),c.Mb(17,"strong"),c.rc(18,"Total: "),c.Lb(),c.Mb(19,"span"),c.rc(20),c.Xb(21,"decimales"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(22,"ion-item-options",28),c.Mb(23,"ion-item-option",29),c.Ub("click",function(){c.lc(t);const e=i.index;return c.Wb(3).eliminar(e)}),c.Kb(24,"ion-icon",30),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=i.$implicit;c.zb(4),c.sc(t.item),c.zb(5),c.sc(t.cantidad),c.zb(5),c.tc("$",c.Zb(15,4,t.valoru,"es-CO"),""),c.zb(6),c.tc(" $",c.Zb(21,7,t.total,"es-CO"),"")}}function p(t,i){if(1&t&&(c.Mb(0,"div",33),c.Mb(1,"h3"),c.Mb(2,"strong",34),c.rc(3,"Subtotal: "),c.Lb(),c.Mb(4,"span"),c.rc(5),c.Xb(6,"decimales"),c.Lb(),c.Lb(),c.Lb()),2&t){const t=c.Wb().$implicit;c.zb(5),c.tc("$",c.Zb(6,1,t.subtotal,"es-CO"),"")}}function g(t,i){if(1&t&&(c.Mb(0,"div",33),c.Mb(1,"h3"),c.Mb(2,"strong",35),c.rc(3,"Iva: "),c.Lb(),c.Mb(4,"span"),c.rc(5),c.Xb(6,"decimales"),c.Lb(),c.Lb(),c.Lb()),2&t){const t=c.Wb(2).$implicit;c.zb(5),c.tc("$",c.Zb(6,1,t.iva,"es-CO"),"")}}function m(t,i){if(1&t&&(c.Mb(0,"div"),c.qc(1,g,7,4,"div",32),c.Lb()),2&t){const t=c.Wb(4);c.zb(1),c.dc("ngIf",t.items.length>0&&t.data.iva)}}function v(t,i){if(1&t&&(c.Mb(0,"div",33),c.Mb(1,"h3"),c.Mb(2,"strong",35),c.rc(3,"Iva: "),c.Lb(),c.Mb(4,"span"),c.rc(5),c.Xb(6,"decimales"),c.Lb(),c.Lb(),c.Lb()),2&t){const t=c.Wb(2).$implicit;c.zb(5),c.tc("$",c.Zb(6,1,t.iva,"es-CO"),"")}}function M(t,i){if(1&t&&(c.Mb(0,"div"),c.qc(1,v,7,4,"div",32),c.Lb()),2&t){const t=c.Wb(4);c.zb(1),c.dc("ngIf",t.items.length>0&&t.info.iva)}}function L(t,i){if(1&t&&(c.Mb(0,"div",33),c.Mb(1,"h3"),c.Mb(2,"strong"),c.rc(3,"Total: "),c.Lb(),c.Mb(4,"span"),c.rc(5),c.Xb(6,"decimales"),c.Lb(),c.Lb(),c.Lb()),2&t){const t=c.Wb().$implicit;c.zb(5),c.tc("$",c.Zb(6,1,t.total,"es-CO"),"")}}function C(t,i){if(1&t&&(c.Mb(0,"div",31),c.qc(1,p,7,4,"div",32),c.qc(2,m,2,1,"div",7),c.qc(3,M,2,1,"div",7),c.qc(4,L,7,4,"div",32),c.Lb()),2&t){const t=c.Wb(3);c.zb(1),c.dc("ngIf",t.items.length>0&&t.carga),c.zb(1),c.dc("ngIf",t.data),c.zb(1),c.dc("ngIf",t.info),c.zb(1),c.dc("ngIf",t.items.length>0&&t.carga)}}function x(t,i){if(1&t){const t=c.Nb();c.Mb(0,"ion-list"),c.Mb(1,"ion-item",11),c.Mb(2,"ion-label"),c.rc(3,"A\xf1adir un nuevo item"),c.Lb(),c.Mb(4,"ion-buttons",12),c.Mb(5,"ion-button",3),c.Ub("click",function(){return c.lc(t),c.Wb(2).crear()}),c.Kb(6,"ion-icon",13),c.Lb(),c.Lb(),c.Lb(),c.Kb(7,"div",14),c.qc(8,f,25,10,"ion-item-sliding",15),c.Kb(9,"div",14),c.qc(10,C,5,4,"div",16),c.Kb(11,"div",14),c.Mb(12,"ion-item",17),c.Kb(13,"ion-icon",18),c.Mb(14,"ion-input",19),c.Ub("ngModelChange",function(i){return c.lc(t),c.Wb(2).cliente=i}),c.Lb(),c.Lb(),c.Mb(15,"ion-item",17),c.Kb(16,"ion-icon",20),c.Mb(17,"ion-input",21),c.Ub("ngModelChange",function(i){return c.lc(t),c.Wb(2).telefono=i}),c.Lb(),c.Lb(),c.Mb(18,"ion-item",17),c.Kb(19,"ion-icon",20),c.Mb(20,"ion-input",22),c.Ub("ngModelChange",function(i){return c.lc(t),c.Wb(2).direccion=i}),c.Lb(),c.Lb(),c.Mb(21,"ion-item",17),c.Kb(22,"ion-icon",18),c.Mb(23,"ion-input",23),c.Ub("ngModelChange",function(i){return c.lc(t),c.Wb(2).cc=i}),c.Lb(),c.Lb(),c.Mb(24,"ion-item",17),c.Kb(25,"ion-icon",20),c.Mb(26,"ion-input",24),c.Ub("ngModelChange",function(i){return c.lc(t),c.Wb(2).ciudad=i}),c.Lb(),c.Lb(),c.Kb(27,"div",14),c.Mb(28,"ion-button",25),c.Ub("click",function(){return c.lc(t),c.Wb(2).guardar()}),c.rc(29,"CREAR FACTURA"),c.Lb(),c.Lb()}if(2&t){const t=c.Wb(2);c.zb(8),c.dc("ngForOf",t.items),c.zb(2),c.dc("ngForOf",t.totales),c.zb(4),c.dc("ngModel",t.cliente),c.zb(3),c.dc("ngModel",t.telefono),c.zb(3),c.dc("ngModel",t.direccion),c.zb(3),c.dc("ngModel",t.cc),c.zb(3),c.dc("ngModel",t.ciudad)}}function y(t,i){if(1&t&&(c.Mb(0,"div",10),c.qc(1,x,30,7,"ion-list",7),c.Lb()),2&t){const t=c.Wb();c.zb(1),c.dc("ngIf",t.data||t.info)}}function z(t,i){1&t&&c.Kb(0,"div")}let F=(()=>{class t{constructor(t,i,e,n,o){this.modalCtrl=t,this.almacenamiento=i,this.toast=e,this.alertCtrl=n,this.apiFactura=o,this.items=[],this.totales=[],this.subtotal=0,this.iva=0,this.total=0,this.cliente="",this.telefono="0",this.direccion="",this.cc="",this.ciudad="",this.id="",this.carga=!1,this.vista=1,this.cargador=!1}ngOnInit(){}ionViewWillEnter(){console.log(this.info),this.cargador=!0,this.info?(this.vista=1,this.items=this.info.lista,this.subtotal=this.info.subtotal,this.total=this.info.total,this.iva=this.info.ivatotal,this.ciudad=this.info.ciudad,this.telefono=this.info.tel,this.cc=this.info.nitcc,this.cliente=this.info.cliente,this.direccion=this.info.direccion,this.carga=!0,this.totales.push({total:this.total,subtotal:this.subtotal,iva:this.iva}),console.log(this.totales)):this.vista=1}cerrar(){this.modalCtrl.dismiss()}crear(){return Object(r.a)(this,void 0,void 0,function*(){const t=yield this.alertCtrl.create({header:"Crear Item",inputs:[{type:"number",name:"cantidad",placeholder:"Ingrese la cantidad"},{type:"text",name:"item",placeholder:"Descripci\xf3n"},{type:"number",name:"valoru",placeholder:"Ingrese el valor unitario"}],buttons:[{text:"Cancelar",role:"cancel"},{text:"Guardar",handler:t=>{t.total=t.cantidad*t.valoru,this.items.push(t),this.carga=!1,this.calculo()}}]});yield t.present()})}eliminar(t){this.items.splice(t,1),this.calculo()}calculo(){this.subtotal=0,this.total=0,this.iva=0;let t=0;this.totales=[],this.items.forEach(i=>{t+=parseFloat(i.total)}),this.subtotal=t,this.data?this.data.iva&&(this.iva=.19*this.subtotal):this.info.iva&&(this.iva=.19*this.subtotal),this.total=this.subtotal+this.iva,this.carga=!0,this.totales.push({total:this.total,subtotal:this.subtotal,iva:this.iva})}guardar(){return Object(r.a)(this,void 0,void 0,function*(){if(this.items.length>0&&""!==this.cliente&&""!==this.cc){const t=yield this.almacenamiento.obtenerToken();t&&(this.data?this.apiFactura.guardarConfiguracion(t.token,{cliente:this.cliente,direccion:this.direccion,telefono:this.telefono,iva:this.iva,cc:this.cc,ciudad:this.ciudad,subtotal:this.subtotal,total:this.total,lista:this.items,descuento:0,idconfig:this.data.id}).subscribe(t=>{t.exe?(this.toast.toastExitoso("Factura actualizada con \xe9xito"),this.modalCtrl.dismiss({exe:!0})):this.toast.toastError("No se pudo guardar la informaci\xf3n de la factura, intentelo mpas tarde")},t=>{this.toast.toastError("No se pudo guardar la informaci\xf3n de la factura, intentelo mpas tarde")}):this.apiFactura.editarFactura(t.token,{id:this.info._id,cliente:this.cliente,direccion:this.direccion,telefono:this.telefono,iva:this.iva,cc:this.cc,ciudad:this.ciudad,subtotal:this.subtotal,total:this.total,lista:this.items,descuento:0}).subscribe(t=>{t.exe?(this.toast.toastExitoso("Factura actualizada con \xe9xito"),this.modalCtrl.dismiss({exe:!0})):this.toast.toastError("No se pudo actualizar la informaci\xf3n de la factura, intentelo mpas tarde")},t=>{this.toast.toastError("No se pudo actualizar la informaci\xf3n de la factura, intentelo mpas tarde")}))}else this.toast.toastError("La informaci\xf3n requerida a\xfan esta icompleta, veirifca el nombre del cliente, su c\xe9dula y la descripci\xf3n de la factura")})}}return t.\u0275fac=function(i){return new(i||t)(c.Jb(a.ob),c.Jb(l.a),c.Jb(d.a),c.Jb(a.b),c.Jb(b.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-modal-factura"]],inputs:{data:"data",info:"info"},decls:11,vars:3,consts:[[1,"ion-no-border"],["color","oscuro"],["slot","start"],[3,"click"],["name","chevron-back-outline","slot","icon-only"],["class","cargador",4,"ngIf"],["class","",4,"ngIf"],[4,"ngIf"],[1,"cargador"],["name","crescent","color","barra"],[1,""],["color","light"],["slot","end"],["name","add-outline","slot","icon-only"],[1,"divider"],[4,"ngFor","ngForOf"],["class","td",4,"ngFor","ngForOf"],["mode","ios"],["slot","start","name","alert-circle-outline","color","danger"],["type","text","placeholder","Nombre del cliente",3,"ngModel","ngModelChange"],["slot","start","name","alert-circle-outline","color","blanco"],["type","text","placeholder","Tel\xe9fono del cliente",3,"ngModel","ngModelChange"],["type","text","placeholder","Direcci\xf3n del cliente",3,"ngModel","ngModelChange"],["type","text","placeholder","C\xe9dula o Nit del cliente",3,"ngModel","ngModelChange"],["type","text","placeholder","Ciudad del cliente",3,"ngModel","ngModelChange"],["mode","ios","color","barra","expand","block",3,"click"],[1,"ion-text-wrap"],[1,"fl"],["side","end"],["color","danger",3,"click"],["name","trash-outline","slot","icon-only"],[1,"td"],["class","valores",4,"ngIf"],[1,"valores"],[1,"verdei"],[1,"rojoi"]],template:function(t,i){1&t&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar",1),c.Mb(2,"ion-buttons",2),c.Mb(3,"ion-button",3),c.Ub("click",function(){return i.cerrar()}),c.Kb(4,"ion-icon",4),c.Lb(),c.Lb(),c.Mb(5,"ion-title"),c.rc(6,"Crear Factura"),c.Lb(),c.Lb(),c.Lb(),c.Mb(7,"ion-content"),c.qc(8,h,4,0,"div",5),c.qc(9,y,2,1,"div",6),c.qc(10,z,1,0,"div",7),c.Lb()),2&t&&(c.zb(8),c.dc("ngIf",!i.cargador),c.zb(1),c.dc("ngIf",1===i.vista),c.zb(1),c.dc("ngIf",2===i.vista))},directives:[a.z,a.jb,a.k,a.j,a.A,a.hb,a.t,n.j,a.bb,a.L,a.F,a.K,n.i,a.E,a.wb,o.i,o.k,a.J,a.I,a.H],pipes:[u.a],styles:[".valores[_ngcontent-%COMP%]{font-size:24px!important;margin:0!important}.valores[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.verdei[_ngcontent-%COMP%]{color:green}.rojoi[_ngcontent-%COMP%]{color:red}.cargador[_ngcontent-%COMP%]{flex-direction:column;justify-content:center}.cargador[_ngcontent-%COMP%], .fl[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.fl[_ngcontent-%COMP%]{justify-content:space-between}.td[_ngcontent-%COMP%]{padding:0 10px;background:#fcf3aa}"]}),t})();var I=e("r3ab");const k=["inifinito"];function O(t,i){1&t&&(c.Mb(0,"ion-list"),c.Mb(1,"ion-item-divider",13),c.Mb(2,"ion-label",14),c.rc(3,"La factura se estructura de acuerdo a los par\xe1metros de configuraci\xf3n establecidos"),c.Lb(),c.Lb(),c.Lb())}function j(t,i){1&t&&(c.Mb(0,"div",15),c.Kb(1,"ion-spinner",16),c.Kb(2,"br"),c.Mb(3,"h3",17),c.rc(4,"Cargando informaci\xf3n..."),c.Lb(),c.Lb())}function w(t,i){if(1&t){const t=c.Nb();c.Mb(0,"div",18),c.Kb(1,"img",19),c.Mb(2,"h3",17),c.rc(3,"No tiene facturas creadas hasta el momento"),c.Lb(),c.Mb(4,"ion-button",20),c.Ub("click",function(){return c.lc(t),c.Wb().abrir()}),c.rc(5,"Crear Factura"),c.Lb(),c.Lb()}}function E(t,i){if(1&t){const t=c.Nb();c.Mb(0,"ion-item-sliding"),c.Mb(1,"ion-item"),c.Mb(2,"ion-label",14),c.Mb(3,"div",21),c.Mb(4,"div",22),c.rc(5),c.Lb(),c.Lb(),c.Mb(6,"div",23),c.Mb(7,"strong"),c.rc(8,"Total: "),c.Lb(),c.Mb(9,"span"),c.rc(10),c.Xb(11,"decimales"),c.Lb(),c.Lb(),c.Mb(12,"div",23),c.Mb(13,"strong"),c.rc(14,"Cliente: "),c.Lb(),c.Mb(15,"span"),c.rc(16),c.Lb(),c.Lb(),c.Mb(17,"div",23),c.Mb(18,"strong"),c.rc(19,"Nit o CC: "),c.Lb(),c.Mb(20,"span"),c.rc(21),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(22,"ion-item-options",24),c.Mb(23,"ion-item-option",25),c.Ub("click",function(){c.lc(t);const e=i.$implicit;return c.Wb().alerta(e._id)}),c.Kb(24,"ion-icon",26),c.Lb(),c.Mb(25,"ion-item-option",27),c.Ub("click",function(){c.lc(t);const e=i.$implicit;return c.Wb().editar(e)}),c.Kb(26,"ion-icon",28),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=i.$implicit;c.zb(5),c.tc("FACTURA N\xdaMERO ",t.consecutivo,""),c.zb(5),c.tc("$",c.Zb(11,4,t.total,"es-CO"),""),c.zb(6),c.sc(t.cliente),c.zb(5),c.sc(t.cc)}}function N(t,i){if(1&t){const t=c.Nb();c.Mb(0,"ion-infinite-scroll",29,30),c.Ub("ionInfinite",function(i){return c.lc(t),c.Wb().loadData(i)}),c.Kb(2,"ion-infinite-scroll-content",31),c.Lb()}}function K(t,i){if(1&t){const t=c.Nb();c.Mb(0,"ion-fab",32),c.Mb(1,"ion-fab-button",33),c.Ub("click",function(){return c.lc(t),c.Wb().abrir()}),c.Kb(2,"ion-icon",34),c.Lb(),c.Lb()}}const q=[{path:"",component:(()=>{class t{constructor(t,i,e,n,o,a){this.almacenamiento=t,this.toast=i,this.apiFactura=e,this.modalCtrl=n,this.loading=o,this.alert=a,this.facturas=[],this.car=!0,this.load=!1,this.nuevo=!1,this.mostrar=!1,this.nit="",this.direccion="",this.regimen="",this.titular="",this.iva=!1,this.valorIva=0,this.id="",this.mensaje=!0,this.desde=0,this.patron=""}ngOnInit(){setTimeout(()=>{this.mensaje=!1},7e3)}ionViewWillEnter(){this.mostrar=!1,this.consultar()}refrescando(t){this.cargarFacturas().then(()=>{t.target.complete()}).catch(()=>t.target.complete())}cargarFacturas(){return Object(r.a)(this,void 0,void 0,function*(){this.desde=0,this.load&&(this.infinite.disabled=!1);const t=yield this.almacenamiento.obtenerToken();t&&this.apiFactura.consultarFacturas(t.token,{desde:this.desde}).subscribe(t=>{t.exe?this.facturas=t.response:this.toast.toastError("No se pudo cargar las facturas, intentelo m\xe1s tarde"),this.load=!0},t=>{this.toast.toastError("No se pudo cargar las facturas, intentelo m\xe1s tarde")})})}buscar(t){return Object(r.a)(this,void 0,void 0,function*(){if(""!==t.detail.value){this.desde=0,this.infinite.disabled=!1,this.patron=t.detail.value;const i=yield this.almacenamiento.obtenerToken();i&&this.apiFactura.consultarFacturas(i.token,{desde:this.desde,patron:this.patron}).subscribe(t=>{t.exe?(this.facturas=t.response,0===t.response.length&&(this.desde=0)):this.toast.toastError("No se pudo realizar la b\xfasqueda, intentelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo realizar la b\xfasqueda, intentelo m\xe1s tarde")})}else this.desde=0})}loadData(t){return Object(r.a)(this,void 0,void 0,function*(){this.desde=this.desde+15;const i=yield this.almacenamiento.obtenerToken();i&&(""===this.patron?this.apiFactura.consultarFacturas(i.token,{desde:this.desde,patron:this.patron}).subscribe(i=>{i.exe?i.response.length>0?(i.response.forEach(t=>{this.facturas.push(t)}),t.target.complete()):(t.target.disabled=!0,this.desde=0):this.toast.toastError("No se pudo traer las hojas de vida, int\xe9ntelo m\xe1s tarde.")},t=>{this.toast.toastError("No se pudo traer las hojas de vida, int\xe9ntelo m\xe1s tarde.")}):this.apiFactura.consultarFacturas(i.token,{desde:this.desde,patron:this.patron}).subscribe(i=>{i.exe?i.response.length>0?(i.response.forEach(t=>{this.facturas.push(t)}),t.target.complete()):(t.target.disabled=!0,this.desde=0):this.toast.toastError("No se pudo realizar la b\xfasqueda, intentelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo realizar la b\xfasqueda, intentelo m\xe1s tarde")}))})}consultar(){return Object(r.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.apiFactura.consultarConfiguracion(t.token).subscribe(t=>{t.exe?t.response?(this.regimen=t.response.regimen,this.direccion=t.response.direccion,this.titular=t.response.titular,this.nit=t.response.nit,this.iva=t.response.iva,this.valorIva=t.response.valorIva,this.id=t.response._id,this.mostrar=!0,this.cargarFacturas()):this.nuevo=!0:this.toast.toastError("No se pudo consultar la informaci\xf3n de la configuraci\xf3n, intentelo mpas tarde")},t=>{this.toast.toastError("No se pudo consultar la informaci\xf3n de la configuraci\xf3n, intentelo mpas tarde")})})}abrir(){return Object(r.a)(this,void 0,void 0,function*(){const t=yield this.modalCtrl.create({component:F,componentProps:{data:{iva:this.iva,regimen:this.regimen,direccion:this.direccion,nit:this.nit,valorIva:this.valorIva,id:this.id}}});yield t.present();const i=yield t.onWillDismiss();i&&i.data&&i.data.exe&&this.cargarFacturas()})}editar(t){return Object(r.a)(this,void 0,void 0,function*(){t.iva=this.iva;const i=yield this.modalCtrl.create({component:F,componentProps:{info:t}});yield i.present();const e=yield i.onWillDismiss();e&&e.data&&e.data.exe&&this.cargarFacturas()})}alerta(t){return Object(r.a)(this,void 0,void 0,function*(){const i=yield this.alert.create({header:"Correo electr\xf3nico",message:"Escriba el correo electr\xf3nico donde se enviar\xe1 el documento pdf de la factura",inputs:[{type:"text",name:"correo"}],buttons:[{text:"Cancelar",role:"cancel"},{text:"Enviar",handler:i=>{this.pdf(i.correo,t)}}]});yield i.present()})}pdf(t,i){return Object(r.a)(this,void 0,void 0,function*(){const e=yield this.almacenamiento.obtenerToken();this.loading.cargaProcesos("Creando Factura y enviandola al correo"),e&&this.apiFactura.enviarrFacturas(e.token,{id:i,correo:t}).subscribe(t=>{t.exe?this.toast.toastExitoso("Factura generada y enviada al correo electr\xf3nico del cliente"):this.toast.toastError("No se pudo enviar la factura, intentelo mpas tarde"),this.loading.finalizarCargado()},t=>{this.loading.finalizarCargado(),this.toast.toastError("No se pudo enviar la factura, intentelo mpas tarde")})})}}return t.\u0275fac=function(i){return new(i||t)(c.Jb(l.a),c.Jb(d.a),c.Jb(b.a),c.Jb(a.ob),c.Jb(I.a),c.Jb(a.b))},t.\u0275cmp=c.Db({type:t,selectors:[["app-factura-nueva"]],viewQuery:function(t,i){if(1&t&&c.vc(k,1),2&t){let t;c.kc(t=c.Vb())&&(i.infinite=t.first)}},decls:17,vars:6,consts:[[1,"ion-no-border"],["color","oscuro"],["slot","start","icon","chevron-back-outline","defaultHref","/central/menu/factura"],[4,"ngIf"],["slot","fixed","pullFactor","0.5","pullMin","50","pullMax","150",3,"ionRefresh"],["pullingIcon","arrow-dropdown","refreshingSpinner","circles"],["debounce","300","mode","ios","placeholder","Buscar Facturas",3,"ionChange"],[1,"divider"],["class","cen","style","text-align: center;",4,"ngIf"],["class","cen",4,"ngIf"],[4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed",4,"ngIf"],["color","barra"],[1,"ion-text-wrap"],[1,"cen",2,"text-align","center"],["name","crescent","color","oscuro"],[1,"tituloGrande"],[1,"cen"],["src","/assets/NuevaFactura.png","width","100px","alt",""],["mode","ios","shape","round","color","success",3,"click"],[1,"fl"],[1,"caja"],[1,"flex"],["side","end"],["color","medium",3,"click"],["name","document-text-outline","slot","icon-only"],["color","warning",3,"click"],["name","pencil-outline","slot","icon-only"],["threshold","100px",3,"ionInfinite"],["inifinito",""],["loadingSpinner","bubbles","loadingText","Cargando Facturas..."],["vertical","bottom","horizontal","end","slot","fixed"],["color","barra",3,"click"],["name","add-outline"]],template:function(t,i){1&t&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar",1),c.Kb(2,"ion-back-button",2),c.Mb(3,"ion-title"),c.rc(4,"Crear Factura"),c.Lb(),c.Lb(),c.Lb(),c.Mb(5,"ion-content"),c.qc(6,O,4,0,"ion-list",3),c.Mb(7,"ion-refresher",4),c.Ub("ionRefresh",function(t){return i.refrescando(t)}),c.Kb(8,"ion-refresher-content",5),c.Lb(),c.Mb(9,"ion-searchbar",6),c.Ub("ionChange",function(t){return i.buscar(t)}),c.Lb(),c.Kb(10,"div",7),c.qc(11,j,5,0,"div",8),c.qc(12,w,6,0,"div",9),c.Mb(13,"ion-list"),c.qc(14,E,27,7,"ion-item-sliding",10),c.Lb(),c.qc(15,N,3,0,"ion-infinite-scroll",11),c.qc(16,K,3,0,"ion-fab",12),c.Lb()),2&t&&(c.zb(6),c.dc("ngIf",i.mensaje),c.zb(5),c.dc("ngIf",!i.load),c.zb(1),c.dc("ngIf",0===i.facturas.length&&i.load),c.zb(2),c.dc("ngForOf",i.facturas),c.zb(1),c.dc("ngIf",i.load),c.zb(1),c.dc("ngIf",i.facturas.length>0))},directives:[a.z,a.jb,a.g,a.h,a.hb,a.t,n.j,a.P,a.Q,a.T,a.wb,a.L,n.i,a.G,a.K,a.bb,a.j,a.J,a.F,a.I,a.H,a.A,a.C,a.D,a.v,a.w],pipes:[u.a],styles:[".cen[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.tituloGrande[_ngcontent-%COMP%]{width:300px;text-align:center}.fl[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;font-size:18px!important;color:red;font-weight:700;border-bottom:1px solid rgba(0,0,0,.1);padding-bottom:5px}.fl[_ngcontent-%COMP%]   .caja[_ngcontent-%COMP%]{text-align:center;width:60%;max-width:80%;background-color:#fcf3aa;padding:3px}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),t})()}];let W=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(i){return new(i||t)},imports:[[s.i.forChild(q)],s.i]}),t})();const P=[{path:"",component:F}];let U=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(i){return new(i||t)},imports:[[s.i.forChild(P)],s.i]}),t})();var _=e("iTUp");let T=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(i){return new(i||t)},imports:[[n.b,o.e,a.kb,U,_.a]]}),t})(),J=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(i){return new(i||t)},imports:[[n.b,o.e,a.kb,W,T,_.a]]}),t})()},fqim:function(t,i,e){"use strict";e.d(i,"a",function(){return o});var n=e("fXoL");let o=(()=>{class t{transform(t,i){return 0===t?0:new Intl.NumberFormat(i,{minimumFractionDigits:1}).format(t)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=n.Ib({name:"decimales",type:t,pure:!0}),t})()},r3ab:function(t,i,e){"use strict";e.d(i,"a",function(){return s});var n=e("mrSG"),o=e("fXoL"),a=e("TEn/");let s=(()=>{class t{constructor(t){this.loadingCtrl=t}cargaProcesos(t){return Object(n.a)(this,void 0,void 0,function*(){return this.loading=yield this.loadingCtrl.create({message:t}),this.loading.present()})}finalizarCargado(){this.loading.dismiss()}}return t.\u0275fac=function(i){return new(i||t)(o.Qb(a.mb))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);