(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{UInZ:function(i,o,t){"use strict";t.d(o,"a",function(){return l});var n=t("mrSG"),e=t("fXoL"),c=t("fsfq"),r=t("TEn/"),s=t("tyNb"),a=t("ofXK");function b(i,o){if(1&i){const i=e.Nb();e.Mb(0,"ion-item",3),e.Ub("click",function(){e.lc(i);const t=o.$implicit;return e.Wb().perfil(t.creador.nombreusuario)}),e.Mb(1,"ion-avatar",6),e.Kb(2,"img",7),e.Lb(),e.Mb(3,"ion-label",8),e.Mb(4,"div"),e.rc(5),e.Lb(),e.Mb(6,"strong"),e.rc(7),e.Lb(),e.Lb(),e.Lb()}if(2&i){const i=o.$implicit;e.zb(2),e.fc("src","https://www.motocaliapp.com/",i.creador.imagen[0].path,"",e.mc),e.zb(3),e.sc(i.creador.nombrecompleto),e.zb(2),e.sc(i.creador.nombreusuario)}}let l=(()=>{class i{constructor(i,o,t){this.almacenamiento=i,this.modal=o,this.router=t}ngOnInit(){}ionViewWillEnter(){console.log(this.listado)}perfil(i){return Object(n.a)(this,void 0,void 0,function*(){const o=yield this.almacenamiento.obtenerToken();o&&(o.nusuario===i?(this.router.navigate(["/perfil/","s"]),this.cerrar()):(this.router.navigate(["/visita/",i,"s"]),this.cerrar()))})}cerrar(){this.modal.dismiss()}}return i.\u0275fac=function(o){return new(o||i)(e.Jb(c.a),e.Jb(r.qb),e.Jb(s.g))},i.\u0275cmp=e.Db({type:i,selectors:[["app-modal-megustas"]],inputs:{listado:"listado"},decls:10,vars:1,consts:[[1,"ion-no-border"],["color","oscuro"],["slot","end"],[3,"click"],["name","close-outline","slot","icon-only"],[3,"click",4,"ngFor","ngForOf"],["slot","start"],[3,"src"],[1,"ion-text-wrap"]],template:function(i,o){1&i&&(e.Mb(0,"ion-header",0),e.Mb(1,"ion-toolbar",1),e.Mb(2,"ion-title"),e.rc(3,"Le gusta a:"),e.Lb(),e.Mb(4,"ion-buttons",2),e.Mb(5,"ion-button",3),e.Ub("click",function(){return o.cerrar()}),e.Kb(6,"ion-icon",4),e.Lb(),e.Lb(),e.Lb(),e.Lb(),e.Mb(7,"ion-content"),e.Mb(8,"ion-list"),e.qc(9,b,8,3,"ion-item",5),e.Lb(),e.Lb()),2&i&&(e.zb(9),e.dc("ngForOf",o.listado))},directives:[r.z,r.lb,r.jb,r.k,r.j,r.A,r.t,r.L,a.i,r.F,r.f,r.K],styles:[""]}),i})()},cITA:function(i,o,t){"use strict";t.r(o),t.d(o,"IgtmpublicPageModule",function(){return Y});var n=t("ofXK"),e=t("3Pt+"),c=t("TEn/"),r=t("tyNb"),s=t("mrSG"),a=t("Jmyf"),b=t("UInZ"),l=t("fXoL"),d=t("WGaO"),u=t("fsfq"),p=t("VYYF"),m=t("fmoy"),g=t("7JkF");const f=["contenido"];function h(i,o){1&i&&(l.Mb(0,"div",8),l.Mb(1,"ion-item",9),l.Mb(2,"ion-avatar",2),l.Kb(3,"ion-skeleton-text",10),l.Lb(),l.Mb(4,"ion-label"),l.Kb(5,"ion-skeleton-text",11),l.Kb(6,"ion-skeleton-text",12),l.Lb(),l.Lb(),l.Mb(7,"div",13),l.Kb(8,"ion-skeleton-text",14),l.Lb(),l.Lb())}const v=function(){return[1,1]};function M(i,o){1&i&&(l.Mb(0,"div"),l.qc(1,h,9,0,"div",7),l.Lb()),2&i&&(l.zb(1),l.dc("ngForOf",l.gc(1,v)))}function L(i,o){1&i&&(l.Mb(0,"div",16),l.Kb(1,"img",17),l.Mb(2,"h3"),l.rc(3,"El contenido no se encuentra disponible"),l.Lb(),l.Lb())}function k(i,o){if(1&i){const i=l.Nb();l.Mb(0,"div",39),l.Ub("click",function(){l.lc(i);const o=l.Wb(2).$implicit;return l.Wb(3).etiquetas(o.etiquetas)}),l.Mb(1,"h3"),l.rc(2,"Etiquetas"),l.Lb(),l.Lb()}}function W(i,o){if(1&i){const i=l.Nb();l.Mb(0,"ion-button",24),l.Ub("click",function(){l.lc(i);const o=l.Wb(2),t=o.$implicit,n=o.index;return l.Wb(3).megusta(t,"megusta",n)}),l.Kb(1,"ion-icon",40),l.Lb()}}function z(i,o){if(1&i){const i=l.Nb();l.Mb(0,"ion-button",24),l.Ub("click",function(){l.lc(i);const o=l.Wb(2),t=o.$implicit,n=o.index;return l.Wb(3).megusta(t,"nomegusta",n)}),l.Kb(1,"ion-icon",41),l.Lb()}}function x(i,o){if(1&i){const i=l.Nb();l.Mb(0,"ion-item",42),l.Mb(1,"ion-avatar",22),l.Ub("click",function(){l.lc(i);const o=l.Wb(2).$implicit;return l.Wb(3).perfilNavegar(o.creadororiginal)}),l.Kb(2,"img",23),l.Lb(),l.Mb(3,"ion-label",24),l.Ub("click",function(){l.lc(i);const o=l.Wb(2).$implicit;return l.Wb(3).perfilNavegar(o.creadororiginal)}),l.rc(4," Publicaci\xf3n original creada por "),l.Kb(5,"br"),l.rc(6),l.Lb(),l.Lb()}if(2&i){const i=l.Wb(2).$implicit;l.zb(2),l.dc("src",i.imageori,l.mc),l.zb(4),l.tc(" @",i.creadororiginal.nombreusuario,"")}}function q(i,o){if(1&i){const i=l.Nb();l.Mb(0,"div",21),l.Mb(1,"ion-item",9),l.Mb(2,"ion-avatar",22),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).perfilNavegar(o.creador)}),l.Kb(3,"img",23),l.Lb(),l.Mb(4,"ion-label",24),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).perfilNavegar(o.creador)}),l.rc(5),l.Kb(6,"br"),l.rc(7),l.Lb(),l.Lb(),l.Mb(8,"div",25),l.rc(9),l.Lb(),l.qc(10,k,3,0,"div",26),l.Mb(11,"div",27),l.Mb(12,"ion-item",28),l.Mb(13,"ion-buttons",2),l.Mb(14,"ion-button",24),l.Ub("click",function(){l.lc(i);const o=l.Wb(),t=o.$implicit,n=o.index;return l.Wb(3).comentarios(t,n)}),l.Kb(15,"ion-icon",29),l.Lb(),l.Mb(16,"ion-button",24),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).compartir(o)}),l.Kb(17,"ion-icon",30),l.Lb(),l.Lb(),l.Mb(18,"ion-buttons",31),l.Mb(19,"ion-chip",32),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).mglista(o.mglista)}),l.rc(20),l.Lb(),l.qc(21,W,2,0,"ion-button",33),l.qc(22,z,2,0,"ion-button",33),l.Lb(),l.Lb(),l.qc(23,x,7,2,"ion-item",34),l.Lb(),l.Mb(24,"div",35),l.Mb(25,"strong",36),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).perfilNavegar(o.creador)}),l.rc(26),l.Lb(),l.Mb(27,"span"),l.rc(28),l.Lb(),l.Lb(),l.Mb(29,"div",37),l.Ub("click",function(){l.lc(i);const o=l.Wb(),t=o.$implicit,n=o.index;return l.Wb(3).comentarios(t,n)}),l.Mb(30,"span",38),l.rc(31),l.Lb(),l.Kb(32,"br"),l.rc(33," A\xf1adir Comentario "),l.Lb(),l.Lb()}if(2&i){const i=l.Wb().$implicit;l.zb(3),l.dc("src",i.image,l.mc),l.zb(2),l.tc("",i.creador.nombrecompleto," "),l.zb(2),l.tc(" ",i.creador.nombreusuario,""),l.zb(1),l.pc("background",i.dibujo.fondo)("color",i.dibujo.color),l.zb(1),l.tc(" ",i.dibujo.texto," "),l.zb(1),l.dc("ngIf",i.etiquetas.length>0),l.zb(10),l.tc(" ",i.valormg,""),l.zb(1),l.dc("ngIf",!i.megusta),l.zb(1),l.dc("ngIf",i.megusta),l.zb(1),l.dc("ngIf",i.cog),l.zb(3),l.sc(i.creador.nombreusuario),l.zb(2),l.sc(i.comentario),l.zb(3),l.sc(i.msg)}}function $(i,o){if(1&i&&l.Kb(0,"img",50),2&i){const i=l.Wb().$implicit;l.fc("src","https://motocaliapp.com/11927613401/",i.ruta,"",l.mc)}}function y(i,o){if(1&i&&l.Kb(0,"video",51),2&i){const i=l.Wb().$implicit;l.fc("src","https://motocaliapp.com/11927613401/",i.ruta,"",l.mc)}}function I(i,o){1&i&&(l.Mb(0,"ion-button",52),l.rc(1,"Abrir V\xeddeo"),l.Lb())}function O(i,o){if(1&i){const i=l.Nb();l.Mb(0,"ion-slide",46),l.Ub("click",function(){l.lc(i);const t=o.index,n=l.Wb(3).$implicit;return l.Wb(3).ver(n.archivos,t,n)}),l.qc(1,$,1,1,"img",47),l.qc(2,y,1,1,"video",48),l.qc(3,I,2,0,"ion-button",49),l.Lb()}if(2&i){const i=o.$implicit;l.zb(1),l.dc("ngIf",i.mime.includes("image")),l.zb(1),l.dc("ngIf",i.mime.includes("video")||i.mime.includes("Video")||i.mime.includes("mp4")||i.mime.includes("MP4")),l.zb(1),l.dc("ngIf",i.mime.includes("video")||i.mime.includes("Video")||i.mime.includes("mp4")||i.mime.includes("MP4"))}}function w(i,o){if(1&i&&(l.Mb(0,"ion-slides",44),l.qc(1,O,4,3,"ion-slide",45),l.Lb()),2&i){const i=l.Wb(2).$implicit;l.dc("pager",i.pager),l.zb(1),l.dc("ngForOf",i.archivos)}}function N(i,o){if(1&i){const i=l.Nb();l.Mb(0,"div",39),l.Ub("click",function(){l.lc(i);const o=l.Wb(2).$implicit;return l.Wb(3).etiquetas(o.etiquetas)}),l.Mb(1,"h3"),l.rc(2,"Etiquetas"),l.Lb(),l.Lb()}}function P(i,o){if(1&i){const i=l.Nb();l.Mb(0,"ion-button",24),l.Ub("click",function(){l.lc(i);const o=l.Wb(2),t=o.$implicit,n=o.index;return l.Wb(3).megusta(t,"megusta",n)}),l.Kb(1,"ion-icon",40),l.Lb()}}function U(i,o){if(1&i){const i=l.Nb();l.Mb(0,"ion-button",24),l.Ub("click",function(){l.lc(i);const o=l.Wb(2),t=o.$implicit,n=o.index;return l.Wb(3).megusta(t,"nomegusta",n)}),l.Kb(1,"ion-icon",41),l.Lb()}}function K(i,o){if(1&i){const i=l.Nb();l.Mb(0,"ion-item",42),l.Mb(1,"ion-avatar",22),l.Ub("click",function(){l.lc(i);const o=l.Wb(2).$implicit;return l.Wb(3).perfilNavegar(o.creadororiginal)}),l.Kb(2,"img",23),l.Lb(),l.Mb(3,"ion-label",24),l.Ub("click",function(){l.lc(i);const o=l.Wb(2).$implicit;return l.Wb(3).perfilNavegar(o.creadororiginal)}),l.rc(4),l.Kb(5,"br"),l.rc(6),l.Lb(),l.Lb()}if(2&i){const i=l.Wb(2).$implicit;l.zb(2),l.dc("src",i.imageori,l.mc),l.zb(2),l.tc("",i.creadororiginal.nombrecompleto," "),l.zb(2),l.tc(" ",i.creadororiginal.nombreusuario,"")}}function _(i,o){if(1&i){const i=l.Nb();l.Mb(0,"div",21),l.Mb(1,"ion-item",9),l.Mb(2,"ion-avatar",22),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).perfilNavegar(o.creador)}),l.Kb(3,"img",23),l.Lb(),l.Mb(4,"ion-label",24),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).perfilNavegar(o.creador)}),l.rc(5),l.Kb(6,"br"),l.rc(7),l.Lb(),l.Lb(),l.qc(8,w,2,2,"ion-slides",43),l.qc(9,N,3,0,"div",26),l.Mb(10,"div",27),l.Mb(11,"ion-item",28),l.Mb(12,"ion-buttons",2),l.Mb(13,"ion-button",24),l.Ub("click",function(){l.lc(i);const o=l.Wb(),t=o.$implicit,n=o.index;return l.Wb(3).comentarios(t,n)}),l.Kb(14,"ion-icon",29),l.Lb(),l.Mb(15,"ion-button",24),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).compartir(o)}),l.Kb(16,"ion-icon",30),l.Lb(),l.Lb(),l.Mb(17,"ion-buttons",31),l.Mb(18,"ion-chip",32),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).mglista(o.mglista)}),l.rc(19),l.Lb(),l.qc(20,P,2,0,"ion-button",33),l.qc(21,U,2,0,"ion-button",33),l.Lb(),l.Lb(),l.qc(22,K,7,3,"ion-item",34),l.Lb(),l.Mb(23,"div",35),l.Mb(24,"strong",36),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).perfilNavegar(o.creador)}),l.rc(25),l.Lb(),l.Mb(26,"span"),l.rc(27),l.Lb(),l.Lb(),l.Mb(28,"div",37),l.Ub("click",function(){l.lc(i);const o=l.Wb(),t=o.$implicit,n=o.index;return l.Wb(3).comentarios(t,n)}),l.Mb(29,"span",38),l.rc(30),l.Lb(),l.Kb(31,"br"),l.rc(32," A\xf1adir Comentario "),l.Lb(),l.Lb()}if(2&i){const i=l.Wb().$implicit,o=l.Wb(3);l.zb(3),l.dc("src",i.image,l.mc),l.zb(2),l.tc("",i.creador.nombrecompleto," "),l.zb(2),l.tc(" ",i.creador.nombreusuario,""),l.zb(1),l.dc("ngIf",o.cargadentro),l.zb(1),l.dc("ngIf",i.etiquetas.length>0),l.zb(10),l.tc(" ",i.valormg,""),l.zb(1),l.dc("ngIf",!i.megusta),l.zb(1),l.dc("ngIf",i.megusta),l.zb(1),l.dc("ngIf",i.cog),l.zb(3),l.sc(i.creador.nombreusuario),l.zb(2),l.sc(i.comentario),l.zb(3),l.sc(i.msg)}}function C(i,o){if(1&i&&(l.Mb(0,"div"),l.Kb(1,"div",19),l.qc(2,q,34,16,"div",20),l.qc(3,_,33,12,"div",20),l.Lb()),2&i){const i=o.$implicit;l.zb(2),l.dc("ngIf","dibujar"===i.tipo),l.zb(1),l.dc("ngIf","multimedia"===i.tipo)}}function j(i,o){if(1&i&&(l.Mb(0,"div"),l.qc(1,C,4,2,"div",18),l.Lb()),2&i){const i=l.Wb(2);l.zb(1),l.dc("ngForOf",i.publicaciones)}}function T(i,o){if(1&i){const i=l.Nb();l.Mb(0,"div",39),l.Ub("click",function(){l.lc(i);const o=l.Wb(2).$implicit;return l.Wb(3).etiquetas(o.etiquetas)}),l.Mb(1,"h3"),l.rc(2,"Etiquetas"),l.Lb(),l.Lb()}}function F(i,o){if(1&i){const i=l.Nb();l.Mb(0,"div",21),l.Mb(1,"ion-item",9),l.Mb(2,"ion-avatar",22),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).perfilNavegar(o.creador)}),l.Kb(3,"img",23),l.Lb(),l.Mb(4,"ion-label",24),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).perfilNavegar(o.creador)}),l.rc(5),l.Kb(6,"br"),l.rc(7),l.Lb(),l.Lb(),l.Mb(8,"div",25),l.rc(9),l.Lb(),l.qc(10,T,3,0,"div",26),l.Mb(11,"div",35),l.Mb(12,"strong",36),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).perfilNavegar(o.creador)}),l.rc(13),l.Lb(),l.Mb(14,"span"),l.rc(15),l.Lb(),l.Lb(),l.Lb()}if(2&i){const i=l.Wb().$implicit;l.zb(3),l.dc("src",i.image,l.mc),l.zb(2),l.tc("",i.creador.nombrecompleto," "),l.zb(2),l.tc(" ",i.creador.nombreusuario,""),l.zb(1),l.pc("background",i.dibujo.fondo)("color",i.dibujo.color),l.zb(1),l.tc(" ",i.dibujo.texto," "),l.zb(1),l.dc("ngIf",i.etiquetas.length>0),l.zb(3),l.sc(i.creador.nombreusuario),l.zb(2),l.sc(i.comentario)}}function G(i,o){if(1&i&&l.Kb(0,"img",50),2&i){const i=l.Wb().$implicit;l.fc("src","https://motocaliapp.com/11927613401/",i.ruta,"",l.mc)}}function A(i,o){if(1&i){const i=l.Nb();l.Mb(0,"ion-slide",46),l.Ub("click",function(){l.lc(i);const t=o.index,n=l.Wb(3).$implicit;return l.Wb(3).ver(n.archivos,t,n)}),l.qc(1,G,1,1,"img",47),l.Lb()}if(2&i){const i=o.$implicit;l.zb(1),l.dc("ngIf",i.mime.includes("image"))}}function J(i,o){if(1&i&&(l.Mb(0,"ion-slides",44),l.qc(1,A,2,1,"ion-slide",45),l.Lb()),2&i){const i=l.Wb(2).$implicit;l.dc("pager",i.pager),l.zb(1),l.dc("ngForOf",i.archivos)}}function E(i,o){if(1&i){const i=l.Nb();l.Mb(0,"div",39),l.Ub("click",function(){l.lc(i);const o=l.Wb(2).$implicit;return l.Wb(3).etiquetas(o.etiquetas)}),l.Mb(1,"h3"),l.rc(2,"Etiquetas"),l.Lb(),l.Lb()}}function D(i,o){if(1&i){const i=l.Nb();l.Mb(0,"div",21),l.Mb(1,"ion-item",9),l.Mb(2,"ion-avatar",22),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).perfilNavegar(o.creador)}),l.Kb(3,"img",23),l.Lb(),l.Mb(4,"ion-label",24),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).perfilNavegar(o.creador)}),l.rc(5),l.Kb(6,"br"),l.rc(7),l.Lb(),l.Lb(),l.qc(8,J,2,2,"ion-slides",43),l.qc(9,E,3,0,"div",26),l.Mb(10,"div",35),l.Mb(11,"strong",36),l.Ub("click",function(){l.lc(i);const o=l.Wb().$implicit;return l.Wb(3).perfilNavegar(o.creador)}),l.rc(12),l.Lb(),l.Mb(13,"span"),l.rc(14),l.Lb(),l.Lb(),l.Mb(15,"div",53),l.Mb(16,"span",38),l.rc(17),l.Lb(),l.Lb(),l.Lb()}if(2&i){const i=l.Wb().$implicit,o=l.Wb(3);l.zb(3),l.dc("src",i.image,l.mc),l.zb(2),l.tc("",i.creador.nombrecompleto," "),l.zb(2),l.tc(" ",i.creador.nombreusuario,""),l.zb(1),l.dc("ngIf",o.cargadentro),l.zb(1),l.dc("ngIf",i.etiquetas.length>0),l.zb(3),l.sc(i.creador.nombreusuario),l.zb(2),l.sc(i.comentario),l.zb(3),l.sc(i.msg)}}function V(i,o){if(1&i&&(l.Mb(0,"div"),l.Kb(1,"div",19),l.qc(2,F,16,11,"div",20),l.qc(3,D,18,8,"div",20),l.Lb()),2&i){const i=o.$implicit;l.zb(2),l.dc("ngIf","dibujar"===i.tipo),l.zb(1),l.dc("ngIf","multimedia"===i.tipo)}}function R(i,o){if(1&i&&(l.Mb(0,"div"),l.qc(1,V,4,2,"div",18),l.Lb()),2&i){const i=l.Wb(2);l.zb(1),l.dc("ngForOf",i.publicaciones)}}function X(i,o){if(1&i&&(l.Mb(0,"div"),l.qc(1,L,4,0,"div",15),l.qc(2,j,2,1,"div",6),l.qc(3,R,2,1,"div",6),l.Lb()),2&i){const i=l.Wb();l.zb(1),l.dc("ngIf",0===i.publicaciones.length),l.zb(1),l.dc("ngIf","publicacion"===i.tipo),l.zb(1),l.dc("ngIf","historia"===i.tipo)}}const H=[{path:"",component:(()=>{class i{constructor(i,o,t,n,e,c,r,s){this.IGTMApi=i,this.almacenamiento=o,this.activeRoute=t,this.modalCtrl=n,this.statusbar=e,this.toast=c,this.socket=r,this.router=s,this.publicaciones=[],this.cargadentro=!1,this.click=!1,this.cargaTodo=!1,this.tipo=""}ngOnInit(){}ionViewWillEnter(){this.tipo=this.activeRoute.snapshot.paramMap.get("tipo"),this.publicaciones=[],"historia"===this.activeRoute.snapshot.paramMap.get("tipo")?this.iniciar2():this.iniciar()}iniciar(){return Object(s.a)(this,void 0,void 0,function*(){const i=yield this.almacenamiento.obtenerToken();i&&this.IGTMApi.leerUna(i.token,{id:this.activeRoute.snapshot.paramMap.get("id")}).subscribe(o=>Object(s.a)(this,void 0,void 0,function*(){o.exe&&(o.response?(o.response.guardado=!1,o.response.image=o.response.creador.imagen.length>0?`https://motocaliapp.com/${o.response.creador.imagen[0].path}`:"/assets/notfound.png",o.response.creadororiginal?(o.response.cog=!0,o.response.imageori=o.response.creadororiginal.imagen.length>0?`https://motocaliapp.com/${o.response.creadororiginal.imagen[0].path}`:"/assets/notfound.png"):o.response.cog=!1,yield new Promise((t,n)=>{this.IGTMApi.leerFotos(i.token,{id:o.response._id}).subscribe(i=>{i.exe?(o.response.archivos=i.response,i.response.length>1?(o.response.pager=!0,t({exe:!0})):(t({exe:!1}),o.response.pager=!1)):(t({exe:!0}),o.response.archivos=[]),this.cargadentro=!0},i=>{t({exe:!1}),o.response.archivos=[]})}),yield new Promise((t,n)=>{this.IGTMApi.crearGuardado(i.token,{publicacion:o.response._id,tipo:"leer"}).subscribe(i=>{o.response.guardado=!!i.exe,t(!0)},i=>{t(!0),o.response.guardado=!1})}),yield new Promise((t,n)=>{this.IGTMApi.meGusta(i.token,{id:o.response._id,tipo:"leer"}).subscribe(n=>{o.response.megusta=!!n.response.find(o=>o.creador._id===i._id),t(!0),o.response.valormg=n.response.length,o.response.mglista=n.response},i=>{t(!0),o.response.megusta=!1,o.response.valormg=""})}),yield new Promise((t,n)=>{this.IGTMApi.crearComentario(i.token,{_id:o.response._id,tipo:"leer"}).subscribe(i=>{i.exe?(o.response.comentarios=i.response,o.response.msg=i.response.length>0?`${o.response.comentarios.length} comentarios...`:"No hay ning\xfan comentario paraesta publicaci\xf3n"):o.response.comentarios=[],t(!0),this.cargadentro=!0},i=>{t(!0),o.response.comentarios=[]})}),this.publicaciones.push(o.response)):this.publicaciones=[]),this.cargaTodo=!0}),i=>{})})}iniciar2(){return Object(s.a)(this,void 0,void 0,function*(){const i=yield this.almacenamiento.obtenerToken();i&&this.IGTMApi.leerUna2(i.token,{id:this.activeRoute.snapshot.paramMap.get("id")}).subscribe(o=>Object(s.a)(this,void 0,void 0,function*(){o.exe&&(o.response?(o.response.image=o.response.creador.imagen.length>0?`https://motocaliapp.com/${o.response.creador.imagen[0].path}`:"/assets/notfound.png",yield new Promise((t,n)=>{this.IGTMApi.leerFotos(i.token,{id:o.response._id}).subscribe(i=>{i.exe?(o.response.archivos=i.response,i.response.length>1?(o.response.pager=!0,t({exe:!0})):(t({exe:!1}),o.response.pager=!1)):(t({exe:!0}),o.response.archivos=[]),this.cargadentro=!0},i=>{t({exe:!1}),o.response.archivos=[]})}),this.publicaciones.push(o.response)):this.publicaciones=[]),this.cargaTodo=!0}),i=>{})})}compartir(i){return Object(s.a)(this,void 0,void 0,function*(){const o=yield this.modalCtrl.create({component:a.a,componentProps:{tipo:"compartir",publicacionc:i}});yield o.present();const t=yield o.onWillDismiss();t&&(this.statusbar.show(),this.click=!1,t.data&&t.data.recargo&&(yield this.contenido.scrollToTop()))})}guardado(i,o,t){return Object(s.a)(this,void 0,void 0,function*(){this.publicaciones[t].guardado="crear"===o;const n=yield this.almacenamiento.obtenerToken();n&&this.IGTMApi.crearGuardado(n.token,{tipo:o,publicacion:i._id}).subscribe(i=>{i.exe?this.toast.toastNotificacion("crear"===o?"Publicaci\xf3n guardada en colecciones":"Publicaci\xf3n eliminada de colecciones"):this.toast.toastError("No se pudo guardar, intentelo m\xe1s tarde")},i=>{this.toast.toastError("No se pudo guardar, intentelo m\xe1s tarde")})})}comentarios(i,o){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.modalCtrl.create({component:a.a,componentProps:{tipo:"comentar",publicacion:i._id,creador:i.creador,comentarios:i.comentarios}});yield t.present();const n=yield t.onWillDismiss();n&&(this.statusbar.show(),this.click=!1,n.data&&n.data.exe&&(this.publicaciones[o].comentarios=n.data.comentarios,this.publicaciones[o].msg=n.data.comentarios.length>0?`${n.data.comentarios.length} comentarios...`:"No hay ning\xfan comentario paraesta publicaci\xf3n"))})}megusta(i,o,t){return Object(s.a)(this,void 0,void 0,function*(){"megusta"===o?(this.publicaciones[t].megusta=!0,this.publicaciones[t].valormg=parseFloat(this.publicaciones[t].valormg)+1):(this.publicaciones[t].megusta=!1,this.publicaciones[t].valormg=parseFloat(this.publicaciones[t].valormg)-1);const n=yield this.almacenamiento.obtenerToken();n&&this.IGTMApi.meGusta(n.token,{tipo:o,id:i._id,creador:i.creador}).subscribe(t=>{t.exe?n._id!==i.creador._id&&"megusta"===o&&this.socket.emit("megusta",{id:i._id,mensaje:`@${n.nusuario} le gusta tu publicaci\xf3n`,creador:i.creador._id}):this.toast.toastError("No se pudo dar me gusta, intentelo m\xe1s tarde")},i=>{this.toast.toastError("No se pudo dar me gusta, intentelo m\xe1s tarde")})})}etiquetar(){return Object(s.a)(this,void 0,void 0,function*(){const i=yield this.modalCtrl.create({component:a.a,componentProps:{tipo:"etiquetar"}});yield i.present()})}etiquetas(i){return Object(s.a)(this,void 0,void 0,function*(){const o=yield this.modalCtrl.create({component:a.a,componentProps:{tipo:"etiquetados",etiquetados:i}});yield o.present(),(yield o.onWillDismiss())&&(this.statusbar.show(),this.click=!1)})}ver(i,o,t){return Object(s.a)(this,void 0,void 0,function*(){if(!this.click){this.click=!0;const n=yield this.modalCtrl.create({component:a.a,componentProps:{tipo:"visualizador",archivos:i,indice:o,info:t}});yield n.present(),(yield n.onWillDismiss())&&(this.statusbar.show(),this.click=!1)}})}perfilNavegar(i){return Object(s.a)(this,void 0,void 0,function*(){const o=yield this.almacenamiento.obtenerToken();o&&this.router.navigate(o.nusuario===i.nombreusuario?["/perfil/","s"]:["/visita/",i.nombreusuario,"s"])})}mglista(i){return Object(s.a)(this,void 0,void 0,function*(){const o=yield this.modalCtrl.create({component:b.a,componentProps:{listado:i}});yield o.present()})}}return i.\u0275fac=function(o){return new(o||i)(l.Jb(d.a),l.Jb(u.a),l.Jb(r.a),l.Jb(c.qb),l.Jb(p.a),l.Jb(m.a),l.Jb(g.a),l.Jb(r.g))},i.\u0275cmp=l.Db({type:i,selectors:[["app-igtmpublic"]],viewQuery:function(i,o){if(1&i&&l.vc(f,1),2&i){let i;l.kc(i=l.Vb())&&(o.contenido=i.first)}},decls:10,vars:3,consts:[[1,"ion-no-border"],["color","oscuro"],["slot","start"],["icon","chevron-back-outline","defaultHref","central/iniciosan"],[3,"fullscreen"],["contenido",""],[4,"ngIf"],["class","skt",4,"ngFor","ngForOf"],[1,"skt"],["lines","none",1,"sinfondo"],["animated","","width","100%","height","100%"],["animated","","width","100%","height","30px"],["animated","","width","100px","height","30px"],[2,"height","200px"],["animated","","width","100%","height","200px"],["class","center",4,"ngIf"],[1,"center"],["src","/assets/No.png","width","150px","alt",""],[4,"ngFor","ngForOf"],[1,"divider","ligth"],["class","publicacion dibujar",4,"ngIf"],[1,"publicacion","dibujar"],["slot","start",3,"click"],["width","100%","height","100%","alt","",3,"src"],[3,"click"],[1,"lienzo"],["class","etiquetas",3,"click",4,"ngIf"],[1,"opciones"],["lines","none","mode","md",1,"sinfondo"],["name","chatbubble-outline","slot","icon-only"],["name","arrow-redo-outline","slot","icon-only"],["slot","end"],["mode","ios","color","medium",3,"click"],[3,"click",4,"ngIf"],["lines","none","class","sinfondo opacity",4,"ngIf"],[1,"comentarios"],[1,"gris","espacio",3,"click"],[1,"comentar",3,"click"],[1,"opt"],[1,"etiquetas",3,"click"],["name","heart-outline","slot","icon-only"],["name","heart","color","danger","slot","icon-only"],["lines","none",1,"sinfondo","opacity"],["color","dark","mode","ios",3,"pager",4,"ngIf"],["color","dark","mode","ios",3,"pager"],["class","diapo",3,"click",4,"ngFor","ngForOf"],[1,"diapo",3,"click"],["width","100%",3,"src",4,"ngIf"],["video-load","","poster","/assets/Video.png","width","100%",3,"src",4,"ngIf"],["class","btonDiapo","fill","outline","color","blanco","mode","md","expand","block",4,"ngIf"],["width","100%",3,"src"],["video-load","","poster","/assets/Video.png","width","100%",3,"src"],["fill","outline","color","blanco","mode","md","expand","block",1,"btonDiapo"],[1,"comentar"]],template:function(i,o){1&i&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar",1),l.Mb(2,"ion-buttons",2),l.Kb(3,"ion-back-button",3),l.Lb(),l.Mb(4,"ion-title"),l.rc(5,"Contenido"),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-content",4,5),l.qc(8,M,2,2,"div",6),l.qc(9,X,4,3,"div",6),l.Lb()),2&i&&(l.zb(6),l.dc("fullscreen",!0),l.zb(2),l.dc("ngIf",!o.cargaTodo),l.zb(1),l.dc("ngIf",o.cargaTodo))},directives:[c.z,c.lb,c.k,c.g,c.h,c.jb,c.t,n.j,n.i,c.F,c.f,c.Z,c.K,c.j,c.A,c.r,c.bb,c.ab],styles:["div[_ngcontent-%COMP%]{width:100%}.publicacion[_ngcontent-%COMP%]{background:#fff}.publicacion[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:12px!important}.lienzo[_ngcontent-%COMP%]{padding:10px;display:flex;text-align:center;justify-content:center;align-items:center;white-space:pre-wrap;min-height:300px;font-size:24px;font-weight:700;line-height:1.7}.info[_ngcontent-%COMP%]{padding:15px}.opciones[_ngcontent-%COMP%]{width:100%}.comentarios[_ngcontent-%COMP%]{padding:10px 10px 10px 15px;font-weight:300;line-height:1.6;font-size:16px}.gris[_ngcontent-%COMP%]{color:#333}.espacio[_ngcontent-%COMP%]{padding-right:10px}.diapo[_ngcontent-%COMP%]{background-color:#000!important;width:100%;max-height:calc(100vh - 270px);overflow:hidden;position:relative}.diapo[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.diapo[_ngcontent-%COMP%]   .btonDiapo[_ngcontent-%COMP%]{margin:auto 5%;width:90%;position:absolute;bottom:10px;left:0;z-index:10}.etiquetas[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:100px;border-radius:3px;text-align:center;background-color:#f1f1f1;color:#333}.comentar[_ngcontent-%COMP%]{color:#777;padding:5px 15px;font-size:14px}.opt[_ngcontent-%COMP%]{opacity:.5}.center[_ngcontent-%COMP%]{width:300px;margin:100px auto;text-align:center}.center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;font-size:22px}"]}),i})()}];let Z=(()=>{class i{}return i.\u0275mod=l.Hb({type:i}),i.\u0275inj=l.Gb({factory:function(o){return new(o||i)},imports:[[r.i.forChild(H)],r.i]}),i})();var S=t("D3OO");let Y=(()=>{class i{}return i.\u0275mod=l.Hb({type:i}),i.\u0275inj=l.Gb({factory:function(o){return new(o||i)},imports:[[n.b,e.e,c.mb,Z,S.a]]}),i})()}}]);