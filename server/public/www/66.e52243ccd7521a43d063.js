(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{Cw8s:function(i,t,n){"use strict";n.r(t),n.d(t,"PatinadasInicioPageModule",function(){return L});var e=n("ofXK"),a=n("3Pt+"),o=n("TEn/"),s=n("tyNb"),c=n("mrSG"),r=n("fXoL"),d=n("oQG1"),b=n("fmoy"),l=n("fsfq"),u=n("2qE+"),p=n("7JkF"),h=n("CDls");function f(i,t){1&i&&(r.Ob(0,"ion-item-divider",6),r.Ob(1,"ion-label"),r.wc(2,"Escoja un pa\xeds"),r.Nb(),r.Nb())}function m(i,t){if(1&i&&(r.Ob(0,"ion-select-option",19),r.wc(1),r.Nb()),2&i){const i=t.$implicit;r.gc("value",i.nombre),r.Ab(1),r.xc(i.nombre)}}function g(i,t){if(1&i){const i=r.Pb();r.Ob(0,"ion-item",15),r.Ob(1,"ion-label",16),r.wc(2,"Selecciona el Pa\xeds"),r.Nb(),r.Ob(3,"ion-select",17),r.Wb("ionChange",function(t){return r.pc(i),r.Yb().paissel(t)}),r.vc(4,m,2,2,"ion-select-option",18),r.Nb(),r.Nb()}if(2&i){const i=r.Yb();r.Ab(3),r.fc("value",i.pais),r.Ab(1),r.fc("ngForOf",i.paises)}}function v(i,t){1&i&&(r.Ob(0,"ion-item-divider",6),r.Ob(1,"ion-label"),r.wc(2,"Escoja un pa\xeds y luego las ciudades"),r.Nb(),r.Nb())}function O(i,t){if(1&i&&(r.Ob(0,"ion-select-option",19),r.wc(1),r.Nb()),2&i){const i=t.$implicit;r.gc("value",i.nombre),r.Ab(1),r.xc(i.nombre)}}function N(i,t){if(1&i){const i=r.Pb();r.Ob(0,"ion-item",15),r.Ob(1,"ion-label",16),r.wc(2,"Selecciona el Pa\xeds"),r.Nb(),r.Ob(3,"ion-select",17),r.Wb("ionChange",function(t){return r.pc(i),r.Yb().listarCiudades(t)}),r.vc(4,O,2,2,"ion-select-option",18),r.Nb(),r.Nb()}if(2&i){const i=r.Yb();r.Ab(3),r.fc("value",i.pais),r.Ab(1),r.fc("ngForOf",i.paises)}}function w(i,t){if(1&i){const i=r.Pb();r.Ob(0,"ion-item"),r.Ob(1,"ion-label"),r.wc(2),r.Nb(),r.Ob(3,"ion-checkbox",22),r.Wb("ionChange",function(n){r.pc(i);const e=t.index;return r.Yb(2).seleccionarCiudad(n,e)}),r.Nb(),r.Nb()}if(2&i){const i=t.$implicit;r.Ab(2),r.xc(i.nombre),r.Ab(1),r.gc("value",i.nombre),r.fc("checked",i.check)}}function x(i,t){if(1&i){const i=r.Pb();r.Ob(0,"ion-list"),r.Ob(1,"ion-searchbar",20),r.Wb("ionChange",function(t){return r.pc(i),r.Yb().buscar(t)}),r.Nb(),r.vc(2,w,4,3,"ion-item",21),r.Zb(3,"filtrociudad"),r.Nb()}if(2&i){const i=r.Yb();r.Ab(2),r.fc("ngForOf",r.bc(3,1,i.ciudades,i.texto))}}let C=(()=>{class i{constructor(i,t,n,e,a,o){this.modal=i,this.apiUsuario=t,this.toast=n,this.almacenamiento=e,this.apiPatinada=a,this.socket=o,this.descripcion="",this.paises=[],this.ciudades=[],this.ciudad=!1,this.load=!1,this.pais="",this.miciudad="",this.vista=0,this.selecionadas=[],this.texto=""}ngOnInit(){}ionViewWillEnter(){this.listarPaises()}cerrar(){this.modal.dismiss()}listarPaises(){return Object(c.a)(this,void 0,void 0,function*(){(yield this.almacenamiento.obtenerToken())&&this.apiUsuario.listarPaises().subscribe(i=>{i.exe?(this.paises=i.response,console.log(this.paises,this.pais)):this.paises.push("Colombia")},i=>{this.paises.push("Colombia")})})}listarCiudades(i){this.miciudad=""!==this.miciudad?this.miciudad:"";const t=this.paises.filter(t=>t.nombre===i.detail.value)[0]._id;this.apiUsuario.listarCiudades(t).subscribe(i=>{i.exe?(i.response.forEach(i=>{i.check=!1,this.ciudades.push(i)}),console.log(this.ciudades),this.ciudad=!0):this.toast.toastError("No se pudo traer las ciudades, intente registrarse m\xe1s tarde")},i=>{this.toast.toastError("No se pudo traer las ciudades, intente registrarse m\xe1s tarde")})}seleccionarCiudad(i,t){this.ciudades[t].check=i.detail.checked,i.detail.checked?this.selecionadas.find(t=>t===i.detail.value)||this.selecionadas.push(i.detail.value):this.selecionadas=this.selecionadas.filter(t=>t!==i.detail.value),console.log(this.selecionadas)}cambiar(i){this.pais="",this.selecionadas=[],this.vista="pais"===i.detail.value?1:"ciudad"===i.detail.value?2:0}paissel(i){this.pais=i.detail.value}buscar(i){this.texto=i.detail.value}escribir(i){this.descripcion=i.detail.value}guardar(){return Object(c.a)(this,void 0,void 0,function*(){if(""!==this.descripcion&&(""!==this.pais||this.selecionadas.length>0)){const i=yield this.almacenamiento.obtenerToken();i&&this.apiPatinada.crearPatinada(i.token,{pais:this.pais,ciudad:this.selecionadas,descripcion:this.descripcion}).subscribe(t=>{t.exe?(this.toast.Especial("Patinada creada correctamente"),console.log(t,"midata"),this.socket.emit("patinada",{dispositivos:t.response,usuarios:t.response2,nombre:i.nombre,_id:i._id}),this.modal.dismiss({exe:!0})):(this.toast.toastError("No se pudo crer la patinada, int\xe9ntelo m\xe1s tarde"),this.modal.dismiss())},i=>{this.toast.toastError("No se pudo crer la patinada, int\xe9ntelo m\xe1s tarde"),this.modal.dismiss()})}else this.toast.toastError("Verifique que tenga la descripci\xf3n de la patinada, el pa\xeds o ciudad de notificaci\xf3n")})}}return i.\u0275fac=function(t){return new(t||i)(r.Lb(o.qb),r.Lb(d.a),r.Lb(b.a),r.Lb(l.a),r.Lb(u.a),r.Lb(p.a))},i.\u0275cmp=r.Fb({type:i,selectors:[["app-modal-patinada"]],decls:34,vars:5,consts:[[1,"ion-no-border"],["color","oscuro"],["slot","end"],[3,"click"],["name","checkmark-outline","slot","icon-only"],["name","close-outline","slot","icon-only"],["color","light"],["mode","ios",1,"sinfondo"],["rows","5","placeholder","Escriba la descripci\xf3n de la patinada",3,"ionChange"],[3,"ionChange"],["slot","start","value","pais"],["slot","start","value","ciudad"],["color","light",4,"ngIf"],["lines","none","class","noborder","mode","md",4,"ngIf"],[4,"ngIf"],["lines","none","mode","md",1,"noborder"],[1,"ion-text-wrap"],["okText","Aceptar","cancelText","Cancelar",3,"value","ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["mode","ios","placeholder","Buscar Ciudad",3,"ionChange"],[4,"ngFor","ngForOf"],["mode","ios","slot","end","color","success",3,"checked","value","ionChange"]],template:function(i,t){1&i&&(r.Ob(0,"ion-header",0),r.Ob(1,"ion-toolbar",1),r.Ob(2,"ion-title"),r.wc(3,"Configurar patinada"),r.Nb(),r.Ob(4,"ion-buttons",2),r.Ob(5,"ion-button",3),r.Wb("click",function(){return t.guardar()}),r.Mb(6,"ion-icon",4),r.Nb(),r.Ob(7,"ion-button",3),r.Wb("click",function(){return t.cerrar()}),r.Mb(8,"ion-icon",5),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(9,"ion-content"),r.Ob(10,"ion-list"),r.Ob(11,"ion-item-divider",6),r.Ob(12,"ion-label"),r.wc(13,"Descripci\xf3n"),r.Nb(),r.Nb(),r.Ob(14,"ion-item",7),r.Ob(15,"ion-textarea",8),r.Wb("ionChange",function(i){return t.escribir(i)}),r.Nb(),r.Nb(),r.Mb(16,"br"),r.Ob(17,"ion-item-divider",6),r.Ob(18,"ion-label"),r.wc(19,"Enviar notificaci\xf3n a:"),r.Nb(),r.Nb(),r.Ob(20,"ion-radio-group",9),r.Wb("ionChange",function(i){return t.cambiar(i)}),r.Ob(21,"ion-item"),r.Ob(22,"ion-label"),r.wc(23,"Pa\xeds"),r.Nb(),r.Mb(24,"ion-radio",10),r.Nb(),r.Ob(25,"ion-item"),r.Ob(26,"ion-label"),r.wc(27,"Ciudades"),r.Nb(),r.Mb(28,"ion-radio",11),r.Nb(),r.Nb(),r.vc(29,f,3,0,"ion-item-divider",12),r.vc(30,g,5,2,"ion-item",13),r.vc(31,v,3,0,"ion-item-divider",12),r.vc(32,N,5,2,"ion-item",13),r.Nb(),r.vc(33,x,4,4,"ion-list",14),r.Nb()),2&i&&(r.Ab(29),r.fc("ngIf",1===t.vista),r.Ab(1),r.fc("ngIf",1===t.vista),r.Ab(1),r.fc("ngIf",2===t.vista),r.Ab(1),r.fc("ngIf",2===t.vista),r.Ab(1),r.fc("ngIf",t.ciudad&&2===t.vista))},directives:[o.z,o.lb,o.jb,o.k,o.j,o.A,o.t,o.L,o.G,o.K,o.F,o.hb,o.yb,o.O,o.xb,o.N,o.vb,e.j,o.X,e.i,o.Y,o.U,o.q,o.d],pipes:[h.a],styles:[""]}),i})();var M=n("SpuA");function P(i,t){1&i&&(r.Ob(0,"div",10),r.Mb(1,"ion-spinner",11),r.Ob(2,"div"),r.wc(3," Cargando patinadas... "),r.Mb(4,"br"),r.Mb(5,"strong"),r.Nb(),r.Nb())}function k(i,t){1&i&&(r.Ob(0,"div",10),r.Ob(1,"div",14),r.Mb(2,"img",15),r.Mb(3,"br"),r.wc(4," No hay patinas solicitadas por los usuarios hasta el momento "),r.Mb(5,"br"),r.Nb(),r.Nb())}function A(i,t){if(1&i){const i=r.Pb();r.Ob(0,"div",23),r.Ob(1,"p"),r.wc(2),r.Nb(),r.Mb(3,"div",24),r.Ob(4,"div"),r.Ob(5,"strong"),r.wc(6),r.Nb(),r.Nb(),r.Ob(7,"div"),r.Ob(8,"strong"),r.wc(9,"Tel\xe9fono: "),r.Nb(),r.wc(10),r.Nb(),r.Ob(11,"div"),r.Ob(12,"strong"),r.wc(13,"Correo: "),r.Nb(),r.wc(14),r.Nb(),r.Mb(15,"br"),r.Ob(16,"ion-button",25),r.Wb("click",function(){r.pc(i);const t=r.Yb().$implicit;return r.Yb(3).ayudar(t)}),r.wc(17,"ACEPTAR PATINADA"),r.Nb(),r.Nb()}if(2&i){const i=r.Yb().$implicit;r.Ab(2),r.xc(i.descripcion),r.Ab(4),r.zc("Ubicado en ",i.creador.ciudad,", ",i.creador.pais,""),r.Ab(4),r.yc(" ",i.creador.tel,""),r.Ab(4),r.yc(" ",i.creador.correo,"")}}function y(i,t){if(1&i){const i=r.Pb();r.Ob(0,"ion-card",19),r.Ob(1,"ion-card-header"),r.Mb(2,"img",20),r.Nb(),r.Ob(3,"strong"),r.wc(4),r.Zb(5,"cambioUTC"),r.Nb(),r.Ob(6,"ion-card-title"),r.wc(7),r.Nb(),r.Ob(8,"ion-chip",21),r.Wb("click",function(){r.pc(i);const n=t.index;return r.Yb(3).mostrar(n)}),r.wc(9,"Ver informaci\xf3n "),r.Nb(),r.Mb(10,"br"),r.vc(11,A,18,5,"div",22),r.Nb()}if(2&i){const i=t.$implicit;r.Ab(4),r.xc(r.ac(5,3,i.fecha)),r.Ab(3),r.yc("",i.creador.nombrecompleto," "),r.Ab(4),r.fc("ngIf",i.vs)}}function I(i,t){if(1&i&&(r.Ob(0,"div",16),r.Ob(1,"div",17),r.vc(2,y,12,5,"ion-card",18),r.Nb(),r.Nb()),2&i){const i=r.Yb(2);r.Ab(2),r.fc("ngForOf",i.patinadas)}}function E(i,t){if(1&i&&(r.Ob(0,"div"),r.vc(1,k,6,0,"div",12),r.vc(2,I,3,1,"div",13),r.Nb()),2&i){const i=r.Yb();r.Ab(1),r.fc("ngIf",0===i.patinadas.length),r.Ab(1),r.fc("ngIf",i.patinadas.length>0)}}const j=[{path:"",component:(()=>{class i{constructor(i,t,n,e,a,o,s){this.almacenamiento=i,this.toast=t,this.router=n,this.alert=e,this.apiPatinada=a,this.modal=o,this.socket=s,this.patinadas=[],this.cargado=!1}ngOnInit(){}ionViewWillEnter(){this.traer()}refrescando(i){this.traer().then(()=>{i.detail.complete()}).catch(()=>{i.detail.complete()})}traer(){return Object(c.a)(this,void 0,void 0,function*(){this.patinadas=[];const i=yield this.almacenamiento.obtenerToken();i&&this.apiPatinada.consultarPatinada(i.token).subscribe(i=>{console.log(i,"wu"),i.exe?(i.response.forEach(i=>{i.vs=!1,this.patinadas.push(i)}),this.cargado=!0):(this.toast.toastError("No se pudo consultar las patinadas, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu"]))},i=>{this.toast.toastError("No se pudo consultar las patinadas, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu"])})})}crear(){return Object(c.a)(this,void 0,void 0,function*(){const i=yield this.modal.create({component:C});yield i.present();const t=yield i.onWillDismiss();t&&t.data&&this.router.navigate(["/central/menu/patinadas/lista"])})}ayudar(i){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.alert.create({header:"Atenci\xf3n!",message:"\xbfQuieres colaborarle a "+i.creador.nombrecompleto+" en su patinada? al aceptar se crear\xe1 una sala de chat para que puedan hablar del asunto.",buttons:[{text:"No Acepto",cssClass:"cancelarAlerta",role:"cancel",handler:()=>{}},{text:"Acepto",cssClass:"botonalerta",handler:()=>Object(c.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.apiPatinada.patinadaEditar(t.token,{id:i._id}).subscribe(i=>{console.log(i,"wu"),i.exe?(this.socket.emit("patinadasayuda",{nombre:t.nombre,usuario:i.response.creador._id}),this.router.navigate(["/central/menu/patinadas/lista"])):(this.toast.toastError("No se pudo consultar las patinadas, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu"]))},i=>{this.toast.toastError("No se pudo consultar las patinadas, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu"])})})}]});yield t.present()})}mostrar(i){this.patinadas[i].vs=!this.patinadas[i].vs}}return i.\u0275fac=function(t){return new(t||i)(r.Lb(l.a),r.Lb(b.a),r.Lb(s.g),r.Lb(o.b),r.Lb(u.a),r.Lb(o.qb),r.Lb(p.a))},i.\u0275cmp=r.Fb({type:i,selectors:[["app-patinadas-inicio"]],decls:14,vars:2,consts:[["color","oscuro"],["slot","start","icon","chevron-back-outline","defaultHref","/central/menu/patinadas"],["slot","fixed","pullFactor","0.5","pullMin","50","pullMax","150",3,"ionRefresh"],["pullingIcon","arrow-dropdown","refreshingSpinner","circles"],["class","flcenter ion-padding",4,"ngIf"],[1,"divider","light"],[4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","oscuro",3,"click"],["name","add"],[1,"flcenter","ion-padding"],["name","crescent","color","oscuro"],["class","flcenter ion-padding ",4,"ngIf"],["class"," ",4,"ngIf"],[1,"ct"],["src","/assets/Estados.png","width","80px","alt",""],[1,""],[1,"opts"],["mode","ios",4,"ngFor","ngForOf"],["mode","ios"],["src","/assets/Estados.png","width","100px"],["mode","ios","color","success",3,"click"],["class","info",4,"ngIf"],[1,"info"],[1,"separador"],["mode","ios","color","barra","expand","block",3,"click"]],template:function(i,t){1&i&&(r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar",0),r.Mb(2,"ion-back-button",1),r.Ob(3,"ion-title"),r.wc(4,"Bandeja Patinadas"),r.Nb(),r.Nb(),r.Nb(),r.Ob(5,"ion-content"),r.Ob(6,"ion-refresher",2),r.Wb("ionRefresh",function(i){return t.refrescando(i)}),r.Mb(7,"ion-refresher-content",3),r.Nb(),r.vc(8,P,6,0,"div",4),r.Mb(9,"div",5),r.vc(10,E,3,2,"div",6),r.Ob(11,"ion-fab",7),r.Ob(12,"ion-fab-button",8),r.Wb("click",function(){return t.crear()}),r.Mb(13,"ion-icon",9),r.Nb(),r.Nb(),r.Nb()),2&i&&(r.Ab(8),r.fc("ngIf",!t.cargado),r.Ab(2),r.fc("ngIf",t.cargado))},directives:[o.z,o.lb,o.g,o.h,o.jb,o.t,o.Q,o.R,e.j,o.v,o.w,o.A,o.cb,e.i,o.l,o.n,o.p,o.r,o.j],pipes:[M.a],styles:[".flcenter[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:20px;text-align:center}.opts[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:calc(100% - 10px);margin:10px 5px;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:all .5s}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{width:100%;text-align:center;padding:5px;background-color:#f1f1ff}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:22px;text-align:center;padding:10px}.info[_ngcontent-%COMP%]{padding:10px}div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px;font-size:18px;line-height:1.5}.separador[_ngcontent-%COMP%]{margin:10px;padding:1px;background-color:#333}@media screen and (min-width:600px){.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:calc(50% - 10px)}}"]}),i})()}];let _=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=r.Jb({type:i}),i.\u0275inj=r.Ib({imports:[[s.j.forChild(j)],s.j]}),i})();var Y=n("iTUp");let L=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=r.Jb({type:i}),i.\u0275inj=r.Ib({imports:[[e.b,a.e,o.mb,_,Y.a]]}),i})()},SpuA:function(i,t,n){"use strict";n.d(t,"a",function(){return o});var e=n("wd/R"),a=n("fXoL");let o=(()=>{class i{transform(i){console.log(i,"fechin");let t=e.utc(i).toDate();return e(t).format("dddd, DD MMMM YYYY h:mm:a")}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=a.Kb({name:"cambioUTC",type:i,pure:!0}),i})()}}]);