(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"+WxW":function(t,e,i){"use strict";i.d(e,"a",function(){return b});var o=i("AytR"),r=i("tk/3"),a=i("coGc"),n=i("lJxs"),c=i("IzEk"),s=i("MtjB"),l=i("PqYM"),h=i("fXoL"),d=i("tyNb");let b=(()=>{class t{constructor(t,e){this.http=t,this.router=e}hanflerError(t){return t.pipe(Object(a.a)(()=>Object(l.a)(3e3)),Object(n.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada");if(401===t.status)throw new Error(" No tiene permisos ")}),Object(c.a)(3))}disponibilidad(t){const e={headers:new r.c({"x-token":t})};return this.http.get(`${o.a}/ticket/disponibilidad`,e).pipe(Object(s.a)(t=>this.hanflerError(t)))}Creardisponibilidad(t){const e={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/ticket/disponibilidad`,{},e).pipe(Object(s.a)(t=>this.hanflerError(t)))}editardisponibilidad(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/ticket/disponibilidad`,e,i).pipe(Object(s.a)(t=>this.hanflerError(t)))}crearSala(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/ticket/salas`,e,i).pipe(Object(s.a)(t=>this.hanflerError(t)))}misSalas(t){const e={headers:new r.c({"x-token":t})};return this.http.get(`${o.a}/ticket/salas`,e).pipe(Object(s.a)(t=>this.hanflerError(t)))}crearTicket(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/ticket/crear`,e,i).pipe(Object(s.a)(t=>this.hanflerError(t)))}misTickets(t){const e={headers:new r.c({"x-token":t})};return this.http.get(`${o.a}/ticket/lista`,e).pipe(Object(s.a)(t=>this.hanflerError(t)))}misTicketsLista(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/ticket/lista/negocio`,e,i).pipe(Object(s.a)(t=>this.hanflerError(t)))}salasNegocio(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/ticket/salas/usuario`,e,i).pipe(Object(s.a)(t=>this.hanflerError(t)))}disponibilidadnegocio(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/ticket/disponibilidad/negocio`,e,i).pipe(Object(s.a)(t=>this.hanflerError(t)))}ticketsolo(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/ticket/solo`,e,i).pipe(Object(s.a)(t=>this.hanflerError(t)))}ticketelimina(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/ticket/eliminar`,e,i).pipe(Object(s.a)(t=>this.hanflerError(t)))}crearHoja(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/hoja/dos`,e,i).pipe(Object(s.a)(t=>this.hanflerError(t)))}consultarSala(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/ticket/consultar/chat`,e,i).pipe(Object(s.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(h.Qb(r.a),h.Qb(d.g))},t.\u0275prov=h.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},KwZs:function(t,e,i){"use strict";i.r(e),i.d(e,"TicketsSalaPageModule",function(){return L});var o=i("ofXK"),r=i("3Pt+"),a=i("TEn/"),n=i("tyNb"),c=i("mrSG"),s=i("HDdC"),l=i("fXoL"),h=i("fmoy");let d=(()=>{class t{constructor(t,e){this.modal=t,this.toast=e,this.fecha1="",this.fecha2=""}ngOnInit(){}filtro(t,e){1===e?this.fecha1=t.detail.value:this.fecha2=t.detail.value}procesar(){""!==this.fecha1&&""!==this.fecha2?this.modal.dismiss({fecha1:this.fecha1,fecha2:this.fecha2}):this.toast.toastError("Debe de seleccionar un tiempo estimado")}cerrar(){this.modal.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(a.pb),l.Jb(h.a))},t.\u0275cmp=l.Db({type:t,selectors:[["app-fechas-modal"]],decls:23,vars:0,consts:[[1,"ion-no-border"],["color","oscuro"],["slot","end"],[3,"click"],["slot","icon-only","name","close-outline"],["fullscreen","true"],["color","light"],[1,"ion-text-wrap"],["position","floating"],["displayFormat","DD-MM-YYYY hh:mm:a","pickerFormat","DD MM YYYY, hh:mm:a","done-text","Aceptar","cancel-text","Cancelar","placeholder","Seleccione Desde",3,"ionChange"],["displayFormat","DD-MM-YYYY hh:mm:a","pickerFormat","DD MM YYYY, hh:mm:a","done-text","Aceptar","placeholder","Seleccione Hasta","cancel-text","Cancelar",3,"ionChange"],["expand","block","color","barra","mode","ios",3,"click"]],template:function(t,e){1&t&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar",1),l.Mb(2,"ion-title"),l.rc(3," Configurar ticket"),l.Lb(),l.Mb(4,"ion-buttons",2),l.Mb(5,"ion-button",3),l.Ub("click",function(){return e.cerrar()}),l.Kb(6,"ion-icon",4),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(7,"ion-content",5),l.Mb(8,"ion-list"),l.Mb(9,"ion-item-divider",6),l.Mb(10,"ion-label",7),l.rc(11,"Configure un tiempo estimado que tardar\xe1 con este ticket"),l.Lb(),l.Lb(),l.Mb(12,"ion-item"),l.Mb(13,"ion-label",8),l.rc(14,"Seleccionar desde que fecha"),l.Lb(),l.Mb(15,"ion-datetime",9),l.Ub("ionChange",function(t){return e.filtro(t,1)}),l.Lb(),l.Lb(),l.Mb(16,"ion-item"),l.Mb(17,"ion-label",8),l.rc(18,"Seleccionar hasta que fecha"),l.Lb(),l.Mb(19,"ion-datetime",10),l.Ub("ionChange",function(t){return e.filtro(t,2)}),l.Lb(),l.Lb(),l.Kb(20,"br"),l.Mb(21,"ion-button",11),l.Ub("click",function(){return e.procesar()}),l.rc(22,"Procesar Ticket"),l.Lb(),l.Lb(),l.Lb())},directives:[a.z,a.kb,a.ib,a.k,a.j,a.A,a.t,a.L,a.G,a.K,a.F,a.u,a.wb],styles:[""]}),t})();var b=i("fsfq"),u=i("+WxW"),p=i("7JkF");function f(t,e){1&t&&(l.Mb(0,"div",9),l.Mb(1,"div"),l.rc(2," La fila esta vac\xeda "),l.Kb(3,"br"),l.Lb(),l.Lb())}function m(t,e){if(1&t&&(l.Mb(0,"div"),l.Mb(1,"strong"),l.rc(2,"Correo:"),l.Lb(),l.rc(3),l.Lb()),2&t){const t=l.Wb().$implicit;l.zb(3),l.tc(" ",t.creador.correo,"")}}function k(t,e){if(1&t&&(l.Mb(0,"div"),l.Mb(1,"strong"),l.rc(2,"Descripci\xf3n: "),l.Lb(),l.Kb(3,"br"),l.rc(4),l.Lb()),2&t){const t=l.Wb().$implicit;l.zb(4),l.tc(" ",t.descripcion,"")}}function g(t,e){if(1&t){const t=l.Nb();l.Mb(0,"ion-card",10),l.Mb(1,"ion-card-title"),l.rc(2),l.Lb(),l.Mb(3,"div",11),l.Mb(4,"strong"),l.rc(5,"esperando"),l.Lb(),l.Lb(),l.Mb(6,"ion-card-content"),l.Mb(7,"div"),l.Mb(8,"strong"),l.rc(9,"Negocio:"),l.Lb(),l.rc(10),l.Lb(),l.Mb(11,"div"),l.Mb(12,"strong"),l.rc(13,"Tel\xe9fono:"),l.Lb(),l.rc(14),l.Lb(),l.Kb(15,"div",12),l.Mb(16,"div"),l.Mb(17,"strong"),l.rc(18,"Usuario:"),l.Lb(),l.rc(19),l.Lb(),l.Mb(20,"div"),l.Mb(21,"strong"),l.rc(22,"Tel\xe9fono:"),l.Lb(),l.rc(23),l.Lb(),l.qc(24,m,4,1,"div",13),l.qc(25,k,5,1,"div",13),l.Mb(26,"div",14),l.Mb(27,"ion-button",15),l.Ub("click",function(){l.lc(t);const i=e.$implicit;return l.Wb(2).navegar(i._id)}),l.rc(28,"Chat"),l.Lb(),l.Lb(),l.Mb(29,"div",14),l.Mb(30,"ion-button",16),l.Ub("click",function(){l.lc(t);const i=e.$implicit;return l.Wb(2).miModal(i)}),l.rc(31,"Procesar"),l.Lb(),l.Mb(32,"ion-button",17),l.Ub("click",function(){l.lc(t);const i=e.$implicit;return l.Wb(2).rechazar(i)}),l.rc(33,"Rechazar"),l.Lb(),l.Lb(),l.Lb(),l.Lb()}if(2&t){const t=e.$implicit,i=e.index;l.zb(2),l.tc("Ficho ",i+1," "),l.zb(8),l.tc(" ",t.negocio.nombrecompleto,""),l.zb(4),l.tc(" ",t.negocio.tel,""),l.zb(5),l.tc(" ",t.creador.nombrecompleto,""),l.zb(4),l.tc(" ",t.creador.tel,""),l.zb(1),l.dc("ngIf",""!==t.creador.correo),l.zb(1),l.dc("ngIf",""!==t.descripcion)}}function M(t,e){if(1&t&&(l.Mb(0,"div",6),l.qc(1,f,4,0,"div",7),l.qc(2,g,34,7,"ion-card",8),l.Lb()),2&t){const t=l.Wb();l.zb(1),l.dc("ngIf",0===t.tickets.length),l.zb(1),l.dc("ngForOf",t.tickets)}}const v=[{path:"",component:(()=>{class t{constructor(t,e,i,o,r,a,n,c){this.almacenamiento=t,this.toast=e,this.apiTickets=i,this.alert=o,this.router=r,this.socket=a,this.modal=n,this.active=c,this.configurando=!1,this.usuario="",this.habilitado=!1,this.cargado=!1,this.id="",this.tickets=[],this.escucharMensajes().subscribe(t=>{t.msg?(this.tickets=this.tickets.filter(e=>e._id!==t.id),this.toast.toastExitoso("Ficho rechazado")):this.toast.toastError("No se pudo rechazar el ficho, int\xe9ntelo m\xe1s tarde")}),this.escucharRechazos().subscribe(t=>{t.exe?this.tickets=this.tickets.filter(e=>e._id!==t.data._id):this.toast.toastError("No se pudo rechazar tu ficho")}),this.escucharCreados().subscribe(t=>{t.exe&&this.tickets.push(t.data)})}ngOnInit(){}ionViewWillEnter(){this.misTickets(),this.almacenamiento.insertarTicket("entrando").then(t=>{if(t)return!0})}refrescando(t){this.tickets=[],this.misTickets().then(()=>{t.detail.complete()}).catch(()=>{t.detail.complete()})}misTickets(){return Object(c.a)(this,void 0,void 0,function*(){this.configurando=!0;const t=yield this.almacenamiento.obtenerToken();t&&this.apiTickets.misTicketsLista(t.token,{id:t._id}).subscribe(t=>{t.exe?(this.tickets=t.response,this.tickets.forEach(t=>{this.socket.emit("ticket",{id:t.negocio._id})})):(this.toast.toastError("No se pudo traer los fichos, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu/"])),this.configurando=!1,this.cargado=!0},t=>{this.toast.toastError("No se pudo traer los fichos, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu/"]),this.configurando=!1,this.cargado=!0})})}rechazar(t){return Object(c.a)(this,void 0,void 0,function*(){(yield this.almacenamiento.obtenerToken())&&this.socket.emit("rechazar",{idtaller:t.negocio._id,id:t._id,idusuario:t.creador._id})})}escucharMensajes(){return new s.a(t=>{this.socket.on("mensajeTicket",e=>{t.next(e)})})}escucharCreados(){return new s.a(t=>{this.socket.on("crear",e=>{t.next(e)})})}miModal(t){return Object(c.a)(this,void 0,void 0,function*(){const e=yield this.modal.create({component:d});yield e.present();const i=yield e.onWillDismiss();i&&i.data&&(yield this.almacenamiento.obtenerToken())&&(this.socket.emit("procesar",{idtaller:t.negocio._id,id:t._id,idusuario:t.creador._id,sala:this.active.snapshot.paramMap.get("sala"),fecha1:i.data.fecha1,fecha2:i.data.fecha2}),this.alerta(t.creador))})}alerta(t){return Object(c.a)(this,void 0,void 0,function*(){const e=[];t.vehiculo.forEach((t,i)=>{e.push({type:"radio",name:"v"+i,value:t.placa,label:t.placa})}),console.log(t);const i=yield this.alert.create({header:"Crear hoja de vida para este ficho",message:"Crear la hoja de vida para registrar el trabajo realizado en este ficho, recuerda escoger un veh\xedculo",backdropDismiss:!0,inputs:e,buttons:[{text:"No quiero",cssClass:"cancelarAlerta",role:"cancel",handler:()=>{this.router.navigate(["/central/menu/tickets",this.id])}},{text:"Crear",cssClass:"botonalerta",handler:e=>{e?(this.crearhoja(t,e),this.router.navigate(["/central/menu/tickets",this.id])):this.alerta(t)}}]});yield i.present()})}crearhoja(t,e){return Object(c.a)(this,void 0,void 0,function*(){const i=yield this.almacenamiento.obtenerToken();i&&this.apiTickets.crearHoja(i.token,{idusuario:t._id,placa:e}).subscribe(t=>{t.exe?this.toast.toastExitoso("Hoja de vida creada correctamente"):(this.toast.toastError("No se pudo crear la hoja de vida, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu/"]))},t=>{this.toast.toastError("No se pudo crear la hoja de vida, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu/"])})})}escucharRechazos(){return new s.a(t=>{this.socket.on("rechazar",e=>{t.next(e)})})}navegar(t){return Object(c.a)(this,void 0,void 0,function*(){const e=yield this.almacenamiento.obtenerToken();e&&this.apiTickets.consultarSala(e.token,{ticket:t}).subscribe(t=>{t.exe&&t.response.length>0?t.response[0].accesos.length>0?this.almacenamiento.insertarChat(t.response[0]).then(()=>{this.router.navigate(["/central/menu/chats/chat"])}).catch(()=>{this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")}):this.toast.Especial("El ficho fue cancelado, ya no puede acceder al chat"):this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")})})}ionViewWillLeave(){this.almacenamiento.eleminarTicket().then(t=>{if(t)return!0})}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(b.a),l.Jb(h.a),l.Jb(u.a),l.Jb(a.b),l.Jb(n.g),l.Jb(p.a),l.Jb(a.pb),l.Jb(n.a))},t.\u0275cmp=l.Db({type:t,selectors:[["app-tickets-sala"]],decls:11,vars:1,consts:[["color","oscuro"],["slot","start","icon","chevron-back-outline","defaultHref","/central/menu"],["slot","fixed","pullFactor","0.5","pullMin","50","pullMax","150",3,"ionRefresh"],["pullingIcon","arrow-dropdown","refreshingSpinner","circles"],[1,"divider","light"],["class","salas",4,"ngIf"],[1,"salas"],["class","flcenter ion-padding",4,"ngIf"],["mode","ios",4,"ngFor","ngForOf"],[1,"flcenter","ion-padding"],["mode","ios"],[1,"msg","espera"],[1,"separador"],[4,"ngIf"],[1,"botones"],["mode","ios","color","light","expand","block",3,"click"],["mode","ios","color","barra",3,"click"],["mode","ios","color","danger",3,"click"]],template:function(t,e){1&t&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar",0),l.Kb(2,"ion-back-button",1),l.Mb(3,"ion-title"),l.rc(4,"Fila de usuarios en espera"),l.Lb(),l.Lb(),l.Lb(),l.Mb(5,"ion-content"),l.Mb(6,"ion-refresher",2),l.Ub("ionRefresh",function(t){return e.refrescando(t)}),l.Kb(7,"ion-refresher-content",3),l.Lb(),l.Kb(8,"div"),l.Kb(9,"div",4),l.qc(10,M,3,2,"div",5),l.Lb()),2&t&&(l.zb(10),l.dc("ngIf",e.cargado))},directives:[a.z,a.kb,a.g,a.h,a.ib,a.t,a.Q,a.R,o.j,o.i,a.l,a.p,a.m,a.j],styles:[".separador[_ngcontent-%COMP%]{width:100%;border-bottom:1px solid #566520;padding:5px;margin-bottom:5px}.flcenter[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:18px;text-align:center}ion-card[_ngcontent-%COMP%]{position:relative}.msg[_ngcontent-%COMP%]{position:absolute;top:0;right:0;text-align:center;padding:5px 10px;border-radius:10px}ion-card-title[_ngcontent-%COMP%]{width:100%;padding:5px 15px}.espera[_ngcontent-%COMP%]{background-color:#ffaf00;color:#fff}.botones[_ngcontent-%COMP%]{margin:10px 0;display:flex;justify-content:space-between;align-items:center}.botones[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:calc(50% - 10px);margin:5px}"]}),t})()}];let x=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[n.i.forChild(v)],n.i]}),t})(),L=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[o.b,r.e,a.lb,x]]}),t})()}}]);