(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{ORVy:function(t,n,a){"use strict";a.r(n),a.d(n,"PatinadasMiasPageModule",function(){return w});var e=a("ofXK"),i=a("3Pt+"),o=a("TEn/"),r=a("tyNb"),c=a("mrSG"),s=a("fXoL"),d=a("fsfq"),l=a("fmoy"),b=a("2qE+"),p=a("7JkF"),u=a("SpuA");function h(t,n){1&t&&(s.Mb(0,"div",7),s.Kb(1,"ion-spinner",8),s.Mb(2,"div"),s.rc(3," Cargando patinadas... "),s.Kb(4,"br"),s.Kb(5,"strong"),s.Lb(),s.Lb())}function f(t,n){1&t&&(s.Mb(0,"div",7),s.Mb(1,"div",11),s.Kb(2,"img",12),s.Kb(3,"br"),s.rc(4," A\xfan no tiene patinadas para mostrar "),s.Kb(5,"br"),s.Lb(),s.Lb())}function g(t,n){if(1&t){const t=s.Nb();s.Mb(0,"ion-button",24),s.Ub("click",function(){s.lc(t);const n=s.Wb(2).$implicit;return s.Wb(3).navegar(n._id)}),s.rc(1,"CHAT"),s.Lb()}}function m(t,n){if(1&t){const t=s.Nb();s.Mb(0,"ion-item"),s.Mb(1,"ion-label",26),s.Mb(2,"div"),s.rc(3),s.Lb(),s.Mb(4,"strong"),s.rc(5),s.Lb(),s.Lb(),s.Mb(6,"ion-button",27),s.Ub("click",function(){s.lc(t);const a=n.$implicit,e=s.Wb(3).$implicit;return s.Wb(3).navegarChat(e._id,a._id)}),s.rc(7,"CHAT"),s.Lb(),s.Lb()}if(2&t){const t=n.$implicit;s.zb(3),s.sc(t.nombrecompleto),s.zb(2),s.sc(t.nombreusuario)}}function M(t,n){if(1&t&&(s.Mb(0,"ion-list"),s.Mb(1,"ion-item-divider"),s.Mb(2,"ion-label"),s.rc(3,"Usuarios que apoyan para tu patinada"),s.Lb(),s.Lb(),s.qc(4,m,8,2,"ion-item",25),s.Lb()),2&t){const t=s.Wb(2).$implicit;s.zb(4),s.dc("ngForOf",t.tomados)}}function v(t,n){if(1&t){const t=s.Nb();s.Mb(0,"ion-button",28),s.Ub("click",function(){s.lc(t);const n=s.Wb(2).$implicit;return s.Wb(3).cancelar(n)}),s.rc(1,"CANCELAR PATINADA"),s.Lb()}}function x(t,n){if(1&t&&(s.Mb(0,"div",20),s.Mb(1,"p"),s.rc(2),s.Lb(),s.Kb(3,"div",21),s.Mb(4,"div"),s.Mb(5,"strong"),s.rc(6),s.Lb(),s.Lb(),s.Mb(7,"div"),s.Mb(8,"strong"),s.rc(9,"Tel\xe9fono: "),s.Lb(),s.rc(10),s.Lb(),s.Mb(11,"div"),s.Mb(12,"strong"),s.rc(13,"Correo: "),s.Lb(),s.rc(14),s.Lb(),s.Kb(15,"br"),s.qc(16,g,2,0,"ion-button",22),s.qc(17,M,5,1,"ion-list",6),s.qc(18,v,2,0,"ion-button",23),s.Lb()),2&t){const t=s.Wb().$implicit,n=s.Wb(3);s.zb(2),s.sc(t.descripcion),s.zb(4),s.uc("Ubicado en ",t.creador.ciudad,", ",t.creador.pais,""),s.zb(4),s.tc(" ",t.creador.tel,""),s.zb(4),s.tc(" ",t.creador.correo,""),s.zb(2),s.dc("ngIf",t.creador._id!==n.id),s.zb(1),s.dc("ngIf",t.creador._id===n.id),s.zb(1),s.dc("ngIf",t.creador._id===n.id)}}function L(t,n){if(1&t){const t=s.Nb();s.Mb(0,"ion-card",16),s.Mb(1,"ion-card-header"),s.Kb(2,"img",17),s.Lb(),s.Mb(3,"strong"),s.rc(4),s.Xb(5,"cambioUTC"),s.Lb(),s.Mb(6,"ion-card-title"),s.rc(7),s.Lb(),s.Mb(8,"ion-chip",18),s.Ub("click",function(){s.lc(t);const a=n.index;return s.Wb(3).mostrar(a)}),s.rc(9,"Ver informaci\xf3n "),s.Lb(),s.Kb(10,"br"),s.qc(11,x,19,8,"div",19),s.Lb()}if(2&t){const t=n.$implicit;s.zb(4),s.sc(s.Yb(5,3,t.fecha)),s.zb(3),s.tc("",t.creador.nombrecompleto," "),s.zb(4),s.dc("ngIf",t.vs)}}function C(t,n){if(1&t&&(s.Mb(0,"div",13),s.Mb(1,"div",14),s.qc(2,L,12,5,"ion-card",15),s.Lb(),s.Lb()),2&t){const t=s.Wb(2);s.zb(2),s.dc("ngForOf",t.patinadas)}}function k(t,n){if(1&t&&(s.Mb(0,"div"),s.qc(1,f,6,0,"div",9),s.qc(2,C,3,1,"div",10),s.Lb()),2&t){const t=s.Wb();s.zb(1),s.dc("ngIf",0===t.patinadas.length),s.zb(1),s.dc("ngIf",t.patinadas.length>0)}}const P=[{path:"",component:(()=>{class t{constructor(t,n,a,e,i,o,r){this.almacenamiento=t,this.toast=n,this.router=a,this.alert=e,this.apiPatinada=i,this.modal=o,this.socket=r,this.patinadas=[],this.cargado=!1,this.id=""}ngOnInit(){}ionViewWillEnter(){this.patinadas=[],this.traer()}refrescando(t){this.traer().then(()=>{t.detail.complete()}).catch(()=>{t.detail.complete()})}traer(){return Object(c.a)(this,void 0,void 0,function*(){this.patinadas=[];const t=yield this.almacenamiento.obtenerToken();t&&(this.id=t._id,this.apiPatinada.consultarPatinadaMias(t.token).subscribe(t=>{console.log(t,"wu"),t.exe?(t.response.forEach(t=>{t.vs=!1,this.patinadas.push(t)}),this.cargado=!0):(this.toast.toastError("No se pudo consultar las patinadas, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu"]))},t=>{this.toast.toastError("No se pudo consultar las patinadas, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu"])}))})}cancelar(t){return Object(c.a)(this,void 0,void 0,function*(){const n=yield this.alert.create({header:"Atenci\xf3n!",message:"\xbfQuieres finalizar esta patinada? al aceptar ya nadie podr\xe1 ver tu solicitud en la bandeja de patinadas.",buttons:[{text:"Cancelar",cssClass:"cancelarAlerta",role:"cancel",handler:()=>{}},{text:"Finalizar",cssClass:"botonalerta",handler:()=>Object(c.a)(this,void 0,void 0,function*(){const n=yield this.almacenamiento.obtenerToken();if(n){const a=t.tomados.map(t=>{if(t._id!==this.id)return t.usuarioID});console.log(a,"dispositivos"),this.apiPatinada.patinadaEliminar(n.token,{id:t._id,accesos:t.tomados,dispositivos:a}).subscribe(t=>{console.log(t,"eliminar"),t.exe?(this.toast.Especial("Patinada finalizada"),this.traer()):(this.toast.toastError("No se pudo eliminar las patinadas, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu"]))},t=>{this.toast.toastError("No se pudo eliminar las patinadas, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu"])})}})}]});yield n.present()})}mostrar(t){this.patinadas[t].vs=!this.patinadas[t].vs}navegar(t){return Object(c.a)(this,void 0,void 0,function*(){const n=yield this.almacenamiento.obtenerToken();n&&this.apiPatinada.consultarChat(n.token,{patinada:t}).subscribe(t=>{t.exe?t.response.length>0?t.response[0].accesos.length>0?this.almacenamiento.insertarChat(t.response[0]).then(()=>{this.router.navigate(["/central/chats/chat"])}).catch(()=>{this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")}):this.toast.Especial("Este chat ya no tiene usuarios por dentro"):this.toast.toastError("No se encuentra la sala de chat, seguramente la patina ya ha sido cancelada"):this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")})})}navegarChat(t,n){return Object(c.a)(this,void 0,void 0,function*(){const a=yield this.almacenamiento.obtenerToken();a&&this.apiPatinada.consultarChat(a.token,{patinada:t,usuario:n}).subscribe(t=>{t.exe?t.response.length>0?t.response[0].accesos.length>0?this.almacenamiento.insertarChat(t.response[0]).then(()=>{this.router.navigate(["/central/chats/chat"])}).catch(()=>{this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")}):this.toast.Especial("Este chat ya no tiene usuarios por dentro"):this.toast.toastError("No se encuentra la sala de chat, seguramente la patina ya ha sido cancelada"):this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")})})}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(d.a),s.Jb(l.a),s.Jb(r.g),s.Jb(o.b),s.Jb(b.a),s.Jb(o.ob),s.Jb(p.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-patinadas-mias"]],decls:11,vars:2,consts:[["color","oscuro"],["slot","start","icon","chevron-back-outline","defaultHref","/central/menu"],["slot","fixed","pullFactor","0.5","pullMin","50","pullMax","150",3,"ionRefresh"],["pullingIcon","arrow-dropdown","refreshingSpinner","circles"],["class","flcenter ion-padding",4,"ngIf"],[1,"divider","light"],[4,"ngIf"],[1,"flcenter","ion-padding"],["name","crescent","color","oscuro"],["class","flcenter ion-padding ",4,"ngIf"],["class"," ",4,"ngIf"],[1,"ct"],["src","/assets/Estados.png","width","80px","alt",""],[1,""],[1,"opts"],["mode","ios",4,"ngFor","ngForOf"],["mode","ios"],["src","/assets/Estados.png","width","100px"],["mode","ios","color","success",3,"click"],["class","info",4,"ngIf"],[1,"info"],[1,"separador"],["mode","ios","color","light","expand","block",3,"click",4,"ngIf"],["mode","ios","color","danger","expand","block",3,"click",4,"ngIf"],["mode","ios","color","light","expand","block",3,"click"],[4,"ngFor","ngForOf"],["mode","ios",1,"ion-text-wrap"],["expand","block","color","success","slot","end",3,"click"],["mode","ios","color","danger","expand","block",3,"click"]],template:function(t,n){1&t&&(s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar",0),s.Kb(2,"ion-back-button",1),s.Mb(3,"ion-title"),s.rc(4,"Mis Patinadas"),s.Lb(),s.Lb(),s.Lb(),s.Mb(5,"ion-content"),s.Mb(6,"ion-refresher",2),s.Ub("ionRefresh",function(t){return n.refrescando(t)}),s.Kb(7,"ion-refresher-content",3),s.Lb(),s.qc(8,h,6,0,"div",4),s.Kb(9,"div",5),s.qc(10,k,3,2,"div",6),s.Lb()),2&t&&(s.zb(8),s.dc("ngIf",!n.cargado),s.zb(2),s.dc("ngIf",n.cargado))},directives:[o.z,o.jb,o.g,o.h,o.hb,o.t,o.P,o.Q,e.j,o.bb,e.i,o.l,o.n,o.p,o.r,o.j,o.L,o.G,o.K,o.F],pipes:[u.a],styles:[".flcenter[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:20px;text-align:center}.opts[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:calc(100% - 10px);margin:10px 5px;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:all .5s}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{width:100%;text-align:center;padding:5px;background-color:#d5dcba}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:22px;text-align:center;padding:10px}.info[_ngcontent-%COMP%]{padding:10px}div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px;font-size:18px;line-height:1.5}.separador[_ngcontent-%COMP%]{margin:10px;padding:1px;background-color:#333}@media screen and (min-width:600px){.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:calc(50% - 10px)}}"]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[r.i.forChild(P)],r.i]}),t})();var O=a("iTUp");let w=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[e.b,i.e,o.kb,y,O.a]]}),t})()},SpuA:function(t,n,a){"use strict";a.d(n,"a",function(){return o});var e=a("wd/R"),i=a("fXoL");let o=(()=>{class t{transform(t){console.log(t,"fechin");let n=e.utc(t).toDate();return e(n).format("dddd, DD MMMM YYYY h:mm:a")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=i.Ib({name:"cambioUTC",type:t,pure:!0}),t})()}}]);