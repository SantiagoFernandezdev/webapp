(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{UInZ:function(i,o,t){"use strict";t.d(o,"a",function(){return l});var n=t("mrSG"),e=t("fXoL"),c=t("fsfq"),r=t("TEn/"),s=t("tyNb"),a=t("ofXK");function b(i,o){if(1&i){const i=e.Pb();e.Ob(0,"ion-item",3),e.Wb("click",function(){e.pc(i);const t=o.$implicit;return e.Yb().perfil(t.creador.nombreusuario)}),e.Ob(1,"ion-avatar",6),e.Mb(2,"img",7),e.Nb(),e.Ob(3,"ion-label",8),e.Ob(4,"div"),e.wc(5),e.Nb(),e.Ob(6,"strong"),e.wc(7),e.Nb(),e.Nb(),e.Nb()}if(2&i){const i=o.$implicit;e.Ab(2),e.hc("src","https://www.motocaliapp.com/",i.creador.imagen[0].path,"",e.qc),e.Ab(3),e.xc(i.creador.nombrecompleto),e.Ab(2),e.xc(i.creador.nombreusuario)}}let l=(()=>{class i{constructor(i,o,t){this.almacenamiento=i,this.modal=o,this.router=t}ngOnInit(){}ionViewWillEnter(){console.log(this.listado)}perfil(i){return Object(n.a)(this,void 0,void 0,function*(){const o=yield this.almacenamiento.obtenerToken();o&&(o.nusuario===i?(this.router.navigate(["/perfil/","s"]),this.cerrar()):(this.router.navigate(["/visita/",i,"s"]),this.cerrar()))})}cerrar(){this.modal.dismiss()}}return i.\u0275fac=function(o){return new(o||i)(e.Lb(c.a),e.Lb(r.qb),e.Lb(s.g))},i.\u0275cmp=e.Fb({type:i,selectors:[["app-modal-megustas"]],inputs:{listado:"listado"},decls:10,vars:1,consts:[[1,"ion-no-border"],["color","oscuro"],["slot","end"],[3,"click"],["name","close-outline","slot","icon-only"],[3,"click",4,"ngFor","ngForOf"],["slot","start"],[3,"src"],[1,"ion-text-wrap"]],template:function(i,o){1&i&&(e.Ob(0,"ion-header",0),e.Ob(1,"ion-toolbar",1),e.Ob(2,"ion-title"),e.wc(3,"Le gusta a:"),e.Nb(),e.Ob(4,"ion-buttons",2),e.Ob(5,"ion-button",3),e.Wb("click",function(){return o.cerrar()}),e.Mb(6,"ion-icon",4),e.Nb(),e.Nb(),e.Nb(),e.Nb(),e.Ob(7,"ion-content"),e.Ob(8,"ion-list"),e.vc(9,b,8,3,"ion-item",5),e.Nb(),e.Nb()),2&i&&(e.Ab(9),e.fc("ngForOf",o.listado))},directives:[r.z,r.lb,r.jb,r.k,r.j,r.A,r.t,r.L,a.i,r.F,r.f,r.K],styles:[""]}),i})()},cITA:function(i,o,t){"use strict";t.r(o),t.d(o,"IgtmpublicPageModule",function(){return H});var n=t("ofXK"),e=t("3Pt+"),c=t("TEn/"),r=t("tyNb"),s=t("mrSG"),a=t("Jmyf"),b=t("UInZ"),l=t("fXoL"),p=t("WGaO"),d=t("fsfq"),u=t("VYYF"),m=t("fmoy"),f=t("7JkF");const g=["contenido"];function h(i,o){1&i&&(l.Ob(0,"div",8),l.Ob(1,"ion-item",9),l.Ob(2,"ion-avatar",2),l.Mb(3,"ion-skeleton-text",10),l.Nb(),l.Ob(4,"ion-label"),l.Mb(5,"ion-skeleton-text",11),l.Mb(6,"ion-skeleton-text",12),l.Nb(),l.Nb(),l.Ob(7,"div",13),l.Mb(8,"ion-skeleton-text",14),l.Nb(),l.Nb())}const v=function(){return[1,1]};function O(i,o){1&i&&(l.Ob(0,"div"),l.vc(1,h,9,0,"div",7),l.Nb()),2&i&&(l.Ab(1),l.fc("ngForOf",l.kc(1,v)))}function N(i,o){1&i&&(l.Ob(0,"div",16),l.Mb(1,"img",17),l.Ob(2,"h3"),l.wc(3,"El contenido no se encuentra disponible"),l.Nb(),l.Nb())}function k(i,o){if(1&i){const i=l.Pb();l.Ob(0,"div",39),l.Wb("click",function(){l.pc(i);const o=l.Yb(2).$implicit;return l.Yb(3).etiquetas(o.etiquetas)}),l.Ob(1,"h3"),l.wc(2,"Etiquetas"),l.Nb(),l.Nb()}}function w(i,o){if(1&i){const i=l.Pb();l.Ob(0,"ion-button",24),l.Wb("click",function(){l.pc(i);const o=l.Yb(2),t=o.$implicit,n=o.index;return l.Yb(3).megusta(t,"megusta",n)}),l.Mb(1,"ion-icon",40),l.Nb()}}function Y(i,o){if(1&i){const i=l.Pb();l.Ob(0,"ion-button",24),l.Wb("click",function(){l.pc(i);const o=l.Yb(2),t=o.$implicit,n=o.index;return l.Yb(3).megusta(t,"nomegusta",n)}),l.Mb(1,"ion-icon",41),l.Nb()}}function A(i,o){if(1&i){const i=l.Pb();l.Ob(0,"ion-item",42),l.Ob(1,"ion-avatar",22),l.Wb("click",function(){l.pc(i);const o=l.Yb(2).$implicit;return l.Yb(3).perfilNavegar(o.creadororiginal)}),l.Mb(2,"img",23),l.Nb(),l.Ob(3,"ion-label",24),l.Wb("click",function(){l.pc(i);const o=l.Yb(2).$implicit;return l.Yb(3).perfilNavegar(o.creadororiginal)}),l.wc(4," Publicaci\xf3n original creada por "),l.Mb(5,"br"),l.wc(6),l.Nb(),l.Nb()}if(2&i){const i=l.Yb(2).$implicit;l.Ab(2),l.fc("src",i.imageori,l.qc),l.Ab(4),l.yc(" @",i.creadororiginal.nombreusuario,"")}}function x(i,o){if(1&i){const i=l.Pb();l.Ob(0,"div",21),l.Ob(1,"ion-item",9),l.Ob(2,"ion-avatar",22),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).perfilNavegar(o.creador)}),l.Mb(3,"img",23),l.Nb(),l.Ob(4,"ion-label",24),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).perfilNavegar(o.creador)}),l.wc(5),l.Mb(6,"br"),l.wc(7),l.Nb(),l.Nb(),l.Ob(8,"div",25),l.wc(9),l.Nb(),l.vc(10,k,3,0,"div",26),l.Ob(11,"div",27),l.Ob(12,"ion-item",28),l.Ob(13,"ion-buttons",2),l.Ob(14,"ion-button",24),l.Wb("click",function(){l.pc(i);const o=l.Yb(),t=o.$implicit,n=o.index;return l.Yb(3).comentarios(t,n)}),l.Mb(15,"ion-icon",29),l.Nb(),l.Ob(16,"ion-button",24),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).compartir(o)}),l.Mb(17,"ion-icon",30),l.Nb(),l.Nb(),l.Ob(18,"ion-buttons",31),l.Ob(19,"ion-chip",32),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).mglista(o.mglista)}),l.wc(20),l.Nb(),l.vc(21,w,2,0,"ion-button",33),l.vc(22,Y,2,0,"ion-button",33),l.Nb(),l.Nb(),l.vc(23,A,7,2,"ion-item",34),l.Nb(),l.Ob(24,"div",35),l.Ob(25,"strong",36),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).perfilNavegar(o.creador)}),l.wc(26),l.Nb(),l.Ob(27,"span"),l.wc(28),l.Nb(),l.Nb(),l.Ob(29,"div",37),l.Wb("click",function(){l.pc(i);const o=l.Yb(),t=o.$implicit,n=o.index;return l.Yb(3).comentarios(t,n)}),l.Ob(30,"span",38),l.wc(31),l.Nb(),l.Mb(32,"br"),l.wc(33," A\xf1adir Comentario "),l.Nb(),l.Nb()}if(2&i){const i=l.Yb().$implicit;l.Ab(3),l.fc("src",i.image,l.qc),l.Ab(2),l.yc("",i.creador.nombrecompleto," "),l.Ab(2),l.yc(" ",i.creador.nombreusuario,""),l.Ab(1),l.tc("background",i.dibujo.fondo)("color",i.dibujo.color),l.Ab(1),l.yc(" ",i.dibujo.texto," "),l.Ab(1),l.fc("ngIf",i.etiquetas.length>0),l.Ab(10),l.yc(" ",i.valormg,""),l.Ab(1),l.fc("ngIf",!i.megusta),l.Ab(1),l.fc("ngIf",i.megusta),l.Ab(1),l.fc("ngIf",i.cog),l.Ab(3),l.xc(i.creador.nombreusuario),l.Ab(2),l.xc(i.comentario),l.Ab(3),l.xc(i.msg)}}function M(i,o){if(1&i&&l.Mb(0,"img",50),2&i){const i=l.Yb().$implicit;l.hc("src","https://motocaliapp.com/11927613401/",i.ruta,"",l.qc)}}function y(i,o){if(1&i&&l.Mb(0,"video",51),2&i){const i=l.Yb().$implicit;l.hc("src","https://motocaliapp.com/11927613401/",i.ruta,"",l.qc)}}function P(i,o){1&i&&(l.Ob(0,"ion-button",52),l.wc(1,"Abrir V\xeddeo"),l.Nb())}function $(i,o){if(1&i){const i=l.Pb();l.Ob(0,"ion-slide",46),l.Wb("click",function(){l.pc(i);const t=o.index,n=l.Yb(3).$implicit;return l.Yb(3).ver(n.archivos,t,n)}),l.vc(1,M,1,1,"img",47),l.vc(2,y,1,1,"video",48),l.vc(3,P,2,0,"ion-button",49),l.Nb()}if(2&i){const i=o.$implicit;l.Ab(1),l.fc("ngIf",i.mime.includes("image")),l.Ab(1),l.fc("ngIf",i.mime.includes("video")||i.mime.includes("Video")||i.mime.includes("mp4")||i.mime.includes("MP4")),l.Ab(1),l.fc("ngIf",i.mime.includes("video")||i.mime.includes("Video")||i.mime.includes("mp4")||i.mime.includes("MP4"))}}function I(i,o){if(1&i&&(l.Ob(0,"ion-slides",44),l.vc(1,$,4,3,"ion-slide",45),l.Nb()),2&i){const i=l.Yb(2).$implicit;l.fc("pager",i.pager),l.Ab(1),l.fc("ngForOf",i.archivos)}}function W(i,o){if(1&i){const i=l.Pb();l.Ob(0,"div",39),l.Wb("click",function(){l.pc(i);const o=l.Yb(2).$implicit;return l.Yb(3).etiquetas(o.etiquetas)}),l.Ob(1,"h3"),l.wc(2,"Etiquetas"),l.Nb(),l.Nb()}}function q(i,o){if(1&i){const i=l.Pb();l.Ob(0,"ion-button",24),l.Wb("click",function(){l.pc(i);const o=l.Yb(2),t=o.$implicit,n=o.index;return l.Yb(3).megusta(t,"megusta",n)}),l.Mb(1,"ion-icon",40),l.Nb()}}function _(i,o){if(1&i){const i=l.Pb();l.Ob(0,"ion-button",24),l.Wb("click",function(){l.pc(i);const o=l.Yb(2),t=o.$implicit,n=o.index;return l.Yb(3).megusta(t,"nomegusta",n)}),l.Mb(1,"ion-icon",41),l.Nb()}}function j(i,o){if(1&i){const i=l.Pb();l.Ob(0,"ion-item",42),l.Ob(1,"ion-avatar",22),l.Wb("click",function(){l.pc(i);const o=l.Yb(2).$implicit;return l.Yb(3).perfilNavegar(o.creadororiginal)}),l.Mb(2,"img",23),l.Nb(),l.Ob(3,"ion-label",24),l.Wb("click",function(){l.pc(i);const o=l.Yb(2).$implicit;return l.Yb(3).perfilNavegar(o.creadororiginal)}),l.wc(4),l.Mb(5,"br"),l.wc(6),l.Nb(),l.Nb()}if(2&i){const i=l.Yb(2).$implicit;l.Ab(2),l.fc("src",i.imageori,l.qc),l.Ab(2),l.yc("",i.creadororiginal.nombrecompleto," "),l.Ab(2),l.yc(" ",i.creadororiginal.nombreusuario,"")}}function C(i,o){if(1&i){const i=l.Pb();l.Ob(0,"div",21),l.Ob(1,"ion-item",9),l.Ob(2,"ion-avatar",22),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).perfilNavegar(o.creador)}),l.Mb(3,"img",23),l.Nb(),l.Ob(4,"ion-label",24),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).perfilNavegar(o.creador)}),l.wc(5),l.Mb(6,"br"),l.wc(7),l.Nb(),l.Nb(),l.vc(8,I,2,2,"ion-slides",43),l.vc(9,W,3,0,"div",26),l.Ob(10,"div",27),l.Ob(11,"ion-item",28),l.Ob(12,"ion-buttons",2),l.Ob(13,"ion-button",24),l.Wb("click",function(){l.pc(i);const o=l.Yb(),t=o.$implicit,n=o.index;return l.Yb(3).comentarios(t,n)}),l.Mb(14,"ion-icon",29),l.Nb(),l.Ob(15,"ion-button",24),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).compartir(o)}),l.Mb(16,"ion-icon",30),l.Nb(),l.Nb(),l.Ob(17,"ion-buttons",31),l.Ob(18,"ion-chip",32),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).mglista(o.mglista)}),l.wc(19),l.Nb(),l.vc(20,q,2,0,"ion-button",33),l.vc(21,_,2,0,"ion-button",33),l.Nb(),l.Nb(),l.vc(22,j,7,3,"ion-item",34),l.Nb(),l.Ob(23,"div",35),l.Ob(24,"strong",36),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).perfilNavegar(o.creador)}),l.wc(25),l.Nb(),l.Ob(26,"span"),l.wc(27),l.Nb(),l.Nb(),l.Ob(28,"div",37),l.Wb("click",function(){l.pc(i);const o=l.Yb(),t=o.$implicit,n=o.index;return l.Yb(3).comentarios(t,n)}),l.Ob(29,"span",38),l.wc(30),l.Nb(),l.Mb(31,"br"),l.wc(32," A\xf1adir Comentario "),l.Nb(),l.Nb()}if(2&i){const i=l.Yb().$implicit,o=l.Yb(3);l.Ab(3),l.fc("src",i.image,l.qc),l.Ab(2),l.yc("",i.creador.nombrecompleto," "),l.Ab(2),l.yc(" ",i.creador.nombreusuario,""),l.Ab(1),l.fc("ngIf",o.cargadentro),l.Ab(1),l.fc("ngIf",i.etiquetas.length>0),l.Ab(10),l.yc(" ",i.valormg,""),l.Ab(1),l.fc("ngIf",!i.megusta),l.Ab(1),l.fc("ngIf",i.megusta),l.Ab(1),l.fc("ngIf",i.cog),l.Ab(3),l.xc(i.creador.nombreusuario),l.Ab(2),l.xc(i.comentario),l.Ab(3),l.xc(i.msg)}}function T(i,o){if(1&i&&(l.Ob(0,"div"),l.Mb(1,"div",19),l.vc(2,x,34,16,"div",20),l.vc(3,C,33,12,"div",20),l.Nb()),2&i){const i=o.$implicit;l.Ab(2),l.fc("ngIf","dibujar"===i.tipo),l.Ab(1),l.fc("ngIf","multimedia"===i.tipo)}}function F(i,o){if(1&i&&(l.Ob(0,"div"),l.vc(1,T,4,2,"div",18),l.Nb()),2&i){const i=l.Yb(2);l.Ab(1),l.fc("ngForOf",i.publicaciones)}}function G(i,o){if(1&i){const i=l.Pb();l.Ob(0,"div",39),l.Wb("click",function(){l.pc(i);const o=l.Yb(2).$implicit;return l.Yb(3).etiquetas(o.etiquetas)}),l.Ob(1,"h3"),l.wc(2,"Etiquetas"),l.Nb(),l.Nb()}}function L(i,o){if(1&i){const i=l.Pb();l.Ob(0,"div",21),l.Ob(1,"ion-item",9),l.Ob(2,"ion-avatar",22),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).perfilNavegar(o.creador)}),l.Mb(3,"img",23),l.Nb(),l.Ob(4,"ion-label",24),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).perfilNavegar(o.creador)}),l.wc(5),l.Mb(6,"br"),l.wc(7),l.Nb(),l.Nb(),l.Ob(8,"div",25),l.wc(9),l.Nb(),l.vc(10,G,3,0,"div",26),l.Ob(11,"div",35),l.Ob(12,"strong",36),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).perfilNavegar(o.creador)}),l.wc(13),l.Nb(),l.Ob(14,"span"),l.wc(15),l.Nb(),l.Nb(),l.Nb()}if(2&i){const i=l.Yb().$implicit;l.Ab(3),l.fc("src",i.image,l.qc),l.Ab(2),l.yc("",i.creador.nombrecompleto," "),l.Ab(2),l.yc(" ",i.creador.nombreusuario,""),l.Ab(1),l.tc("background",i.dibujo.fondo)("color",i.dibujo.color),l.Ab(1),l.yc(" ",i.dibujo.texto," "),l.Ab(1),l.fc("ngIf",i.etiquetas.length>0),l.Ab(3),l.xc(i.creador.nombreusuario),l.Ab(2),l.xc(i.comentario)}}function E(i,o){if(1&i&&l.Mb(0,"img",50),2&i){const i=l.Yb().$implicit;l.hc("src","https://motocaliapp.com/11927613401/",i.ruta,"",l.qc)}}function z(i,o){if(1&i){const i=l.Pb();l.Ob(0,"ion-slide",46),l.Wb("click",function(){l.pc(i);const t=o.index,n=l.Yb(3).$implicit;return l.Yb(3).ver(n.archivos,t,n)}),l.vc(1,E,1,1,"img",47),l.Nb()}if(2&i){const i=o.$implicit;l.Ab(1),l.fc("ngIf",i.mime.includes("image"))}}function D(i,o){if(1&i&&(l.Ob(0,"ion-slides",44),l.vc(1,z,2,1,"ion-slide",45),l.Nb()),2&i){const i=l.Yb(2).$implicit;l.fc("pager",i.pager),l.Ab(1),l.fc("ngForOf",i.archivos)}}function V(i,o){if(1&i){const i=l.Pb();l.Ob(0,"div",39),l.Wb("click",function(){l.pc(i);const o=l.Yb(2).$implicit;return l.Yb(3).etiquetas(o.etiquetas)}),l.Ob(1,"h3"),l.wc(2,"Etiquetas"),l.Nb(),l.Nb()}}function J(i,o){if(1&i){const i=l.Pb();l.Ob(0,"div",21),l.Ob(1,"ion-item",9),l.Ob(2,"ion-avatar",22),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).perfilNavegar(o.creador)}),l.Mb(3,"img",23),l.Nb(),l.Ob(4,"ion-label",24),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).perfilNavegar(o.creador)}),l.wc(5),l.Mb(6,"br"),l.wc(7),l.Nb(),l.Nb(),l.vc(8,D,2,2,"ion-slides",43),l.vc(9,V,3,0,"div",26),l.Ob(10,"div",35),l.Ob(11,"strong",36),l.Wb("click",function(){l.pc(i);const o=l.Yb().$implicit;return l.Yb(3).perfilNavegar(o.creador)}),l.wc(12),l.Nb(),l.Ob(13,"span"),l.wc(14),l.Nb(),l.Nb(),l.Ob(15,"div",53),l.Ob(16,"span",38),l.wc(17),l.Nb(),l.Nb(),l.Nb()}if(2&i){const i=l.Yb().$implicit,o=l.Yb(3);l.Ab(3),l.fc("src",i.image,l.qc),l.Ab(2),l.yc("",i.creador.nombrecompleto," "),l.Ab(2),l.yc(" ",i.creador.nombreusuario,""),l.Ab(1),l.fc("ngIf",o.cargadentro),l.Ab(1),l.fc("ngIf",i.etiquetas.length>0),l.Ab(3),l.xc(i.creador.nombreusuario),l.Ab(2),l.xc(i.comentario),l.Ab(3),l.xc(i.msg)}}function R(i,o){if(1&i&&(l.Ob(0,"div"),l.Mb(1,"div",19),l.vc(2,L,16,11,"div",20),l.vc(3,J,18,8,"div",20),l.Nb()),2&i){const i=o.$implicit;l.Ab(2),l.fc("ngIf","dibujar"===i.tipo),l.Ab(1),l.fc("ngIf","multimedia"===i.tipo)}}function X(i,o){if(1&i&&(l.Ob(0,"div"),l.vc(1,R,4,2,"div",18),l.Nb()),2&i){const i=l.Yb(2);l.Ab(1),l.fc("ngForOf",i.publicaciones)}}function K(i,o){if(1&i&&(l.Ob(0,"div"),l.vc(1,N,4,0,"div",15),l.vc(2,F,2,1,"div",6),l.vc(3,X,2,1,"div",6),l.Nb()),2&i){const i=l.Yb();l.Ab(1),l.fc("ngIf",0===i.publicaciones.length),l.Ab(1),l.fc("ngIf","publicacion"===i.tipo),l.Ab(1),l.fc("ngIf","historia"===i.tipo)}}const U=[{path:"",component:(()=>{class i{constructor(i,o,t,n,e,c,r,s){this.IGTMApi=i,this.almacenamiento=o,this.activeRoute=t,this.modalCtrl=n,this.statusbar=e,this.toast=c,this.socket=r,this.router=s,this.publicaciones=[],this.cargadentro=!1,this.click=!1,this.cargaTodo=!1,this.tipo=""}ngOnInit(){}ionViewWillEnter(){this.tipo=this.activeRoute.snapshot.paramMap.get("tipo"),this.publicaciones=[],"historia"===this.activeRoute.snapshot.paramMap.get("tipo")?this.iniciar2():this.iniciar()}iniciar(){return Object(s.a)(this,void 0,void 0,function*(){const i=yield this.almacenamiento.obtenerToken();i&&this.IGTMApi.leerUna(i.token,{id:this.activeRoute.snapshot.paramMap.get("id")}).subscribe(o=>Object(s.a)(this,void 0,void 0,function*(){o.exe&&(o.response?(o.response.guardado=!1,o.response.image=o.response.creador.imagen.length>0?`https://motocaliapp.com/${o.response.creador.imagen[0].path}`:"/assets/notfound.png",o.response.creadororiginal?(o.response.cog=!0,o.response.imageori=o.response.creadororiginal.imagen.length>0?`https://motocaliapp.com/${o.response.creadororiginal.imagen[0].path}`:"/assets/notfound.png"):o.response.cog=!1,yield new Promise((t,n)=>{this.IGTMApi.leerFotos(i.token,{id:o.response._id}).subscribe(i=>{i.exe?(o.response.archivos=i.response,i.response.length>1?(o.response.pager=!0,t({exe:!0})):(t({exe:!1}),o.response.pager=!1)):(t({exe:!0}),o.response.archivos=[]),this.cargadentro=!0},i=>{t({exe:!1}),o.response.archivos=[]})}),yield new Promise((t,n)=>{this.IGTMApi.crearGuardado(i.token,{publicacion:o.response._id,tipo:"leer"}).subscribe(i=>{o.response.guardado=!!i.exe,t(!0)},i=>{t(!0),o.response.guardado=!1})}),yield new Promise((t,n)=>{this.IGTMApi.meGusta(i.token,{id:o.response._id,tipo:"leer"}).subscribe(n=>{o.response.megusta=!!n.response.find(o=>o.creador._id===i._id),t(!0),o.response.valormg=n.response.length,o.response.mglista=n.response},i=>{t(!0),o.response.megusta=!1,o.response.valormg=""})}),yield new Promise((t,n)=>{this.IGTMApi.crearComentario(i.token,{_id:o.response._id,tipo:"leer"}).subscribe(i=>{i.exe?(o.response.comentarios=i.response,o.response.msg=i.response.length>0?`${o.response.comentarios.length} comentarios...`:"No hay ning\xfan comentario paraesta publicaci\xf3n"):o.response.comentarios=[],t(!0),this.cargadentro=!0},i=>{t(!0),o.response.comentarios=[]})}),this.publicaciones.push(o.response)):this.publicaciones=[]),this.cargaTodo=!0}),i=>{})})}iniciar2(){return Object(s.a)(this,void 0,void 0,function*(){const i=yield this.almacenamiento.obtenerToken();i&&this.IGTMApi.leerUna2(i.token,{id:this.activeRoute.snapshot.paramMap.get("id")}).subscribe(o=>Object(s.a)(this,void 0,void 0,function*(){o.exe&&(o.response?(o.response.image=o.response.creador.imagen.length>0?`https://motocaliapp.com/${o.response.creador.imagen[0].path}`:"/assets/notfound.png",yield new Promise((t,n)=>{this.IGTMApi.leerFotos(i.token,{id:o.response._id}).subscribe(i=>{i.exe?(o.response.archivos=i.response,i.response.length>1?(o.response.pager=!0,t({exe:!0})):(t({exe:!1}),o.response.pager=!1)):(t({exe:!0}),o.response.archivos=[]),this.cargadentro=!0},i=>{t({exe:!1}),o.response.archivos=[]})}),this.publicaciones.push(o.response)):this.publicaciones=[]),this.cargaTodo=!0}),i=>{})})}compartir(i){return Object(s.a)(this,void 0,void 0,function*(){const o=yield this.modalCtrl.create({component:a.a,componentProps:{tipo:"compartir",publicacionc:i}});yield o.present();const t=yield o.onWillDismiss();t&&(this.statusbar.show(),this.click=!1,t.data&&t.data.recargo&&(yield this.contenido.scrollToTop()))})}guardado(i,o,t){return Object(s.a)(this,void 0,void 0,function*(){this.publicaciones[t].guardado="crear"===o;const n=yield this.almacenamiento.obtenerToken();n&&this.IGTMApi.crearGuardado(n.token,{tipo:o,publicacion:i._id}).subscribe(i=>{i.exe?this.toast.toastNotificacion("crear"===o?"Publicaci\xf3n guardada en colecciones":"Publicaci\xf3n eliminada de colecciones"):this.toast.toastError("No se pudo guardar, intentelo m\xe1s tarde")},i=>{this.toast.toastError("No se pudo guardar, intentelo m\xe1s tarde")})})}comentarios(i,o){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.modalCtrl.create({component:a.a,componentProps:{tipo:"comentar",publicacion:i._id,creador:i.creador,comentarios:i.comentarios}});yield t.present();const n=yield t.onWillDismiss();n&&(this.statusbar.show(),this.click=!1,n.data&&n.data.exe&&(this.publicaciones[o].comentarios=n.data.comentarios,this.publicaciones[o].msg=n.data.comentarios.length>0?`${n.data.comentarios.length} comentarios...`:"No hay ning\xfan comentario paraesta publicaci\xf3n"))})}megusta(i,o,t){return Object(s.a)(this,void 0,void 0,function*(){"megusta"===o?(this.publicaciones[t].megusta=!0,this.publicaciones[t].valormg=parseFloat(this.publicaciones[t].valormg)+1):(this.publicaciones[t].megusta=!1,this.publicaciones[t].valormg=parseFloat(this.publicaciones[t].valormg)-1);const n=yield this.almacenamiento.obtenerToken();n&&this.IGTMApi.meGusta(n.token,{tipo:o,id:i._id,creador:i.creador}).subscribe(t=>{t.exe?n._id!==i.creador._id&&"megusta"===o&&this.socket.emit("megusta",{id:i._id,mensaje:`@${n.nusuario} le gusta tu publicaci\xf3n`,creador:i.creador._id}):this.toast.toastError("No se pudo dar me gusta, intentelo m\xe1s tarde")},i=>{this.toast.toastError("No se pudo dar me gusta, intentelo m\xe1s tarde")})})}etiquetar(){return Object(s.a)(this,void 0,void 0,function*(){const i=yield this.modalCtrl.create({component:a.a,componentProps:{tipo:"etiquetar"}});yield i.present()})}etiquetas(i){return Object(s.a)(this,void 0,void 0,function*(){const o=yield this.modalCtrl.create({component:a.a,componentProps:{tipo:"etiquetados",etiquetados:i}});yield o.present(),(yield o.onWillDismiss())&&(this.statusbar.show(),this.click=!1)})}ver(i,o,t){return Object(s.a)(this,void 0,void 0,function*(){if(!this.click){this.click=!0;const n=yield this.modalCtrl.create({component:a.a,componentProps:{tipo:"visualizador",archivos:i,indice:o,info:t}});yield n.present(),(yield n.onWillDismiss())&&(this.statusbar.show(),this.click=!1)}})}perfilNavegar(i){return Object(s.a)(this,void 0,void 0,function*(){const o=yield this.almacenamiento.obtenerToken();o&&this.router.navigate(o.nusuario===i.nombreusuario?["/perfil/","s"]:["/visita/",i.nombreusuario,"s"])})}mglista(i){return Object(s.a)(this,void 0,void 0,function*(){const o=yield this.modalCtrl.create({component:b.a,componentProps:{listado:i}});yield o.present()})}}return i.\u0275fac=function(o){return new(o||i)(l.Lb(p.a),l.Lb(d.a),l.Lb(r.a),l.Lb(c.qb),l.Lb(u.a),l.Lb(m.a),l.Lb(f.a),l.Lb(r.g))},i.\u0275cmp=l.Fb({type:i,selectors:[["app-igtmpublic"]],viewQuery:function(i,o){if(1&i&&l.Ac(g,1),2&i){let i;l.oc(i=l.Xb())&&(o.contenido=i.first)}},decls:10,vars:3,consts:[[1,"ion-no-border"],["color","oscuro"],["slot","start"],["icon","chevron-back-outline","defaultHref","central/iniciosan"],[3,"fullscreen"],["contenido",""],[4,"ngIf"],["class","skt",4,"ngFor","ngForOf"],[1,"skt"],["lines","none",1,"sinfondo"],["animated","","width","100%","height","100%"],["animated","","width","100%","height","30px"],["animated","","width","100px","height","30px"],[2,"height","200px"],["animated","","width","100%","height","200px"],["class","center",4,"ngIf"],[1,"center"],["src","/assets/No.png","width","150px","alt",""],[4,"ngFor","ngForOf"],[1,"divider","ligth"],["class","publicacion dibujar",4,"ngIf"],[1,"publicacion","dibujar"],["slot","start",3,"click"],["width","100%","height","100%","alt","",3,"src"],[3,"click"],[1,"lienzo"],["class","etiquetas",3,"click",4,"ngIf"],[1,"opciones"],["lines","none","mode","md",1,"sinfondo"],["name","chatbubble-outline","slot","icon-only"],["name","arrow-redo-outline","slot","icon-only"],["slot","end"],["mode","ios","color","medium",3,"click"],[3,"click",4,"ngIf"],["lines","none","class","sinfondo opacity",4,"ngIf"],[1,"comentarios"],[1,"gris","espacio",3,"click"],[1,"comentar",3,"click"],[1,"opt"],[1,"etiquetas",3,"click"],["name","heart-outline","slot","icon-only"],["name","heart","color","danger","slot","icon-only"],["lines","none",1,"sinfondo","opacity"],["color","dark","mode","ios",3,"pager",4,"ngIf"],["color","dark","mode","ios",3,"pager"],["class","diapo",3,"click",4,"ngFor","ngForOf"],[1,"diapo",3,"click"],["width","100%",3,"src",4,"ngIf"],["video-load","","poster","/assets/Video.png","width","100%",3,"src",4,"ngIf"],["class","btonDiapo","fill","outline","color","blanco","mode","md","expand","block",4,"ngIf"],["width","100%",3,"src"],["video-load","","poster","/assets/Video.png","width","100%",3,"src"],["fill","outline","color","blanco","mode","md","expand","block",1,"btonDiapo"],[1,"comentar"]],template:function(i,o){1&i&&(l.Ob(0,"ion-header",0),l.Ob(1,"ion-toolbar",1),l.Ob(2,"ion-buttons",2),l.Mb(3,"ion-back-button",3),l.Nb(),l.Ob(4,"ion-title"),l.wc(5,"Contenido"),l.Nb(),l.Nb(),l.Nb(),l.Ob(6,"ion-content",4,5),l.vc(8,O,2,2,"div",6),l.vc(9,K,4,3,"div",6),l.Nb()),2&i&&(l.Ab(6),l.fc("fullscreen",!0),l.Ab(2),l.fc("ngIf",!o.cargaTodo),l.Ab(1),l.fc("ngIf",o.cargaTodo))},directives:[c.z,c.lb,c.k,c.g,c.h,c.jb,c.t,n.j,n.i,c.F,c.f,c.Z,c.K,c.j,c.A,c.r,c.bb,c.ab],styles:["div[_ngcontent-%COMP%]{width:100%}.publicacion[_ngcontent-%COMP%]{background:#fff}.publicacion[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:12px!important}.lienzo[_ngcontent-%COMP%]{padding:10px;display:flex;text-align:center;justify-content:center;align-items:center;white-space:pre-wrap;min-height:300px;font-size:24px;font-weight:700;line-height:1.7}.info[_ngcontent-%COMP%]{padding:15px}.opciones[_ngcontent-%COMP%]{width:100%}.comentarios[_ngcontent-%COMP%]{padding:10px 10px 10px 15px;font-weight:300;line-height:1.6;font-size:16px}.gris[_ngcontent-%COMP%]{color:#333}.espacio[_ngcontent-%COMP%]{padding-right:10px}.diapo[_ngcontent-%COMP%]{background-color:#000!important;width:100%;max-height:calc(100vh - 270px);overflow:hidden;position:relative}.diapo[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.diapo[_ngcontent-%COMP%]   .btonDiapo[_ngcontent-%COMP%]{margin:auto 5%;width:90%;position:absolute;bottom:10px;left:0;z-index:10}.etiquetas[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:100px;border-radius:3px;text-align:center;background-color:#f1f1f1;color:#333}.comentar[_ngcontent-%COMP%]{color:#777;padding:5px 15px;font-size:14px}.opt[_ngcontent-%COMP%]{opacity:.5}.center[_ngcontent-%COMP%]{width:300px;margin:100px auto;text-align:center}.center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;font-size:22px}"]}),i})()}];let Z=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({imports:[[r.j.forChild(U)],r.j]}),i})();var S=t("D3OO");let H=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({imports:[[n.b,e.e,c.mb,Z,S.a]]}),i})()}}]);