(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"1T1u":function(t,o,e){"use strict";e.r(o),e.d(o,"InterfazGrupoEstadisticasPageModule",function(){return J});var n=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),a=e("tyNb"),s=e("mrSG"),c=e("R0Ic"),p=e("fXoL"),b=e("fsfq"),d=e("oQG1"),l=e("fmoy"),u=e("cb8P"),h=e("Gq8O"),g=e("vLoH");function f(t,o){if(1&t&&p.Mb(0,"img",6),2&t){const t=p.Yb();p.fc("@escalar",void 0)("src",t.foto,p.qc)}}let m=(()=>{class t{constructor(t,o,e,n,i,r,a,s){this.almacenamiento=t,this.usuaripService=o,this.toast=e,this.cargarElementos=n,this.seguimientoService=i,this.modal=r,this.router=a,this.apiGrupo=s,this.fotos=[],this.cargado=!1,this.foto=""}ngOnInit(){}ionViewWillEnter(){console.log(this.viajes),this.leer()}leer(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.apiGrupo.fotospodio(t.token,{viajes:this.viajes}).subscribe(t=>{console.log(t,"data"),t.exe?(t.response.length>0?(this.fotos=t.response,this.fotos.forEach((t,o)=>{0===o?this.foto="https://motocaliapp.com/2807/"+t.ruta:setTimeout(()=>{this.foto="",setTimeout(()=>{this.foto="https://motocaliapp.com/2807/"+t.ruta},100)},8e3)})):(this.toast.toastError("No hay fotos disponibles"),this.cerrar()),this.cargado=!0):(this.toast.toastError("No se puede acceder a las fotos, int\xe9ntelo m\xe1s tarde"),this.cerrar())},t=>{this.toast.toastError("No se puede acceder a las fotos, int\xe9ntelo m\xe1s tarde"),this.cerrar()})})}cerrar(){this.modal.dismiss()}}return t.\u0275fac=function(o){return new(o||t)(p.Lb(b.a),p.Lb(d.a),p.Lb(l.a),p.Lb(u.a),p.Lb(h.a),p.Lb(r.qb),p.Lb(a.g),p.Lb(g.a))},t.\u0275cmp=p.Fb({type:t,selectors:[["app-carrusel"]],inputs:{viajes:"viajes"},decls:7,vars:2,consts:[["color","oscuridad",3,"fullscreen"],[1,"cerrar"],[3,"click"],["name","close","slot","icon-only","color","blanco"],[1,"fotos"],["width","100%","alt","",3,"src",4,"ngIf"],["width","100%","alt","",3,"src"]],template:function(t,o){1&t&&(p.Ob(0,"ion-content",0),p.Ob(1,"div",1),p.Ob(2,"ion-buttons"),p.Ob(3,"ion-button",2),p.Wb("click",function(){return o.cerrar()}),p.Mb(4,"ion-icon",3),p.Nb(),p.Nb(),p.Nb(),p.Ob(5,"div",4),p.vc(6,f,1,2,"img",5),p.Nb(),p.Nb()),2&t&&(p.fc("fullscreen",!0),p.Ab(6),p.fc("ngIf",""!==o.foto))},directives:[r.t,r.k,r.j,r.A,n.j],styles:[".cerrar[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px;z-index:100;font-size:18px}img[_ngcontent-%COMP%]{width:100%;max-width:auto}.fotos[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;align-items:center}"],data:{animation:[Object(c.m)("escalar",[Object(c.l)(":enter",[Object(c.k)({opacity:0,transform:"scale(0)"}),Object(c.e)("500ms",Object(c.k)({opacity:1,transform:"scale(1)"}))])])]}}),t})();var v=e("IlVf");let O=(()=>{class t{transform(t,o){return t.filter(t=>t.tipo===o).length}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=p.Kb({name:"trofeo",type:t,pure:!0}),t})();const w=["inifinito"];function x(t,o){1&t&&(p.Ob(0,"div",9),p.Mb(1,"img",10),p.Ob(2,"h3"),p.wc(3,"No tiene acceso para ver esta informaci\xf3n, env\xede una invitaci\xf3n a este grupo"),p.Nb(),p.Nb())}function N(t,o){if(1&t){const t=p.Pb();p.Ob(0,"ion-segment",11),p.Wb("ionChange",function(o){return p.pc(t),p.Yb().cambio(o)}),p.Ob(1,"ion-segment-button",12),p.Ob(2,"ion-label"),p.wc(3,"Podio Semana"),p.Nb(),p.Nb(),p.Ob(4,"ion-segment-button",13),p.Ob(5,"ion-label"),p.wc(6,"Tabla de posiciones"),p.Nb(),p.Nb(),p.Nb()}}function j(t,o){if(1&t&&(p.Ob(0,"ion-avatar",28),p.Mb(1,"img",29),p.Nb()),2&t){const t=p.Yb(3);p.Ab(1),p.hc("src","https://motocaliapp.com/",t.podio.uprimero.imagen[0].path,"",p.qc)}}function M(t,o){1&t&&(p.Ob(0,"ion-avatar",28),p.Mb(1,"img",30),p.Nb())}function P(t,o){1&t&&p.Mb(0,"div",31),2&t&&p.tc("background",o.$implicit)}function k(t,o){if(1&t){const t=p.Pb();p.Ob(0,"ion-card",18),p.Wb("click",function(){p.pc(t);const o=p.Yb(2);return o.carrusel(o.podio.viajesprimero)}),p.Ob(1,"div",19),p.Ob(2,"strong"),p.wc(3,"Primer Puesto - Oro"),p.Nb(),p.Mb(4,"img",20),p.Nb(),p.Ob(5,"ion-card-title",21),p.wc(6),p.Nb(),p.Ob(7,"div",22),p.Ob(8,"div",23),p.vc(9,j,2,1,"ion-avatar",24),p.vc(10,M,2,0,"ion-avatar",24),p.Nb(),p.Ob(11,"div",25),p.Ob(12,"div",26),p.vc(13,P,1,2,"div",27),p.Nb(),p.Ob(14,"div"),p.wc(15),p.Nb(),p.Ob(16,"div"),p.wc(17),p.Zb(18,"year"),p.Nb(),p.Ob(19,"div"),p.Ob(20,"strong"),p.wc(21),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb()}if(2&t){const t=p.Yb(2);p.Ab(6),p.xc(t.podio.primero.nombre),p.Ab(3),p.fc("ngIf",t.podio.uprimero.imagen.length>0&&"notfound.png"!==t.podio.uprimero.imagen[0].path),p.Ab(1),p.fc("ngIf","notfound.png"===t.podio.uprimero.imagen[0].path),p.Ab(3),p.fc("ngForOf",t.podio.primero.bandera),p.Ab(2),p.zc("",t.podio.primero.ciudad,", ",t.podio.primero.pais,""),p.Ab(2),p.yc("Inici\xf3 en ",p.ac(18,8,t.podio.primero.fecha),""),p.Ab(4),p.yc("Grupo de ",t.podio.primero.tipo,"")}}function E(t,o){if(1&t&&(p.Ob(0,"ion-avatar",28),p.Mb(1,"img",29),p.Nb()),2&t){const t=p.Yb(3);p.Ab(1),p.hc("src","https://motocaliapp.com/",t.podio.usegundo.imagen[0].path,"",p.qc)}}function C(t,o){1&t&&(p.Ob(0,"ion-avatar",28),p.Mb(1,"img",30),p.Nb())}function y(t,o){1&t&&p.Mb(0,"div",31),2&t&&p.tc("background",o.$implicit)}function _(t,o){if(1&t){const t=p.Pb();p.Ob(0,"ion-card",18),p.Wb("click",function(){p.pc(t);const o=p.Yb(2);return o.carrusel(o.podio.viajessegundo)}),p.Ob(1,"div",32),p.Ob(2,"strong"),p.wc(3,"Segundo Puesto - Plata"),p.Nb(),p.Mb(4,"img",33),p.Nb(),p.Ob(5,"ion-card-title",21),p.wc(6),p.Nb(),p.Ob(7,"div",22),p.Ob(8,"div",23),p.vc(9,E,2,1,"ion-avatar",24),p.vc(10,C,2,0,"ion-avatar",24),p.Nb(),p.Ob(11,"div",25),p.Ob(12,"div",26),p.vc(13,y,1,2,"div",27),p.Nb(),p.Ob(14,"div"),p.wc(15),p.Nb(),p.Ob(16,"div"),p.wc(17),p.Zb(18,"year"),p.Nb(),p.Ob(19,"div"),p.Ob(20,"strong"),p.wc(21),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb()}if(2&t){const t=p.Yb(2);p.Ab(6),p.xc(t.podio.segundo.nombre),p.Ab(3),p.fc("ngIf",t.podio.usegundo.imagen.length>0&&"notfound.png"!==t.podio.usegundo.imagen[0].path),p.Ab(1),p.fc("ngIf","notfound.png"===t.podio.usegundo.imagen[0].path),p.Ab(3),p.fc("ngForOf",t.podio.segundo.bandera),p.Ab(2),p.zc("",t.podio.segundo.ciudad,", ",t.podio.segundo.pais,""),p.Ab(2),p.yc("Inici\xf3 en ",p.ac(18,8,t.podio.segundo.fecha),""),p.Ab(4),p.yc("Grupo de ",t.podio.segundo.tipo,"")}}function A(t,o){if(1&t&&(p.Ob(0,"ion-avatar",28),p.Mb(1,"img",29),p.Nb()),2&t){const t=p.Yb(3);p.Ab(1),p.hc("src","https://motocaliapp.com/",t.podio.utercero.imagen[0].path,"",p.qc)}}function I(t,o){1&t&&(p.Ob(0,"ion-avatar",28),p.Mb(1,"img",30),p.Nb())}function $(t,o){1&t&&p.Mb(0,"div",31),2&t&&p.tc("background",o.$implicit)}function z(t,o){if(1&t){const t=p.Pb();p.Ob(0,"ion-card",18),p.Wb("click",function(){p.pc(t);const o=p.Yb(2);return o.carrusel(o.podio.viajestercero)}),p.Ob(1,"div",34),p.Ob(2,"strong"),p.wc(3,"Tercer Puesto - Bronce"),p.Nb(),p.Mb(4,"img",35),p.Nb(),p.Ob(5,"ion-card-title",21),p.wc(6),p.Nb(),p.Ob(7,"div",22),p.Ob(8,"div",23),p.vc(9,A,2,1,"ion-avatar",24),p.vc(10,I,2,0,"ion-avatar",24),p.Nb(),p.Ob(11,"div",25),p.Ob(12,"div",26),p.vc(13,$,1,2,"div",27),p.Nb(),p.Ob(14,"div"),p.wc(15),p.Nb(),p.Ob(16,"div"),p.wc(17),p.Zb(18,"year"),p.Nb(),p.Ob(19,"div"),p.Ob(20,"strong"),p.wc(21),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb()}if(2&t){const t=p.Yb(2);p.Ab(6),p.xc(t.podio.tercero.nombre),p.Ab(3),p.fc("ngIf",t.podio.utercero.imagen.length>0&&"notfound.png"!==t.podio.utercero.imagen[0].path),p.Ab(1),p.fc("ngIf","notfound.png"===t.podio.utercero.imagen[0].path),p.Ab(3),p.fc("ngForOf",t.podio.tercero.bandera),p.Ab(2),p.zc("",t.podio.tercero.ciudad,", ",t.podio.tercero.pais,""),p.Ab(2),p.yc("Inici\xf3 en ",p.ac(18,8,t.podio.tercero.fecha),""),p.Ab(4),p.yc("Grupo de ",t.podio.tercero.tipo,"")}}function G(t,o){if(1&t&&(p.Ob(0,"div",14),p.Ob(1,"ion-item-divider",15),p.Ob(2,"ion-label",16),p.wc(3,"Cada semana se escoge a los 3 grupos que m\xe1s recorrido hicieron en sus viajes"),p.Nb(),p.Nb(),p.vc(4,k,22,10,"ion-card",17),p.vc(5,_,22,10,"ion-card",17),p.vc(6,z,22,10,"ion-card",17),p.Nb()),2&t){const t=p.Yb();p.Ab(4),p.fc("ngIf",t.podio.primero),p.Ab(1),p.fc("ngIf",t.podio.segundo),p.Ab(1),p.fc("ngIf",t.podio.tercero)}}function L(t,o){if(1&t&&(p.Ob(0,"ion-avatar",45),p.Mb(1,"img",29),p.Nb()),2&t){const t=p.Yb().$implicit;p.Ab(1),p.hc("src","https://motocaliapp.com/",t.usuario.imagen[0].path,"",p.qc)}}function F(t,o){1&t&&(p.Ob(0,"ion-avatar",45),p.Mb(1,"img",30),p.Nb())}function T(t,o){1&t&&p.Mb(0,"div",31),2&t&&p.tc("background",o.$implicit)}function Y(t,o){if(1&t&&(p.Ob(0,"ion-item"),p.vc(1,L,2,1,"ion-avatar",38),p.vc(2,F,2,0,"ion-avatar",38),p.Ob(3,"ion-label",16),p.Ob(4,"div",39),p.wc(5),p.Nb(),p.Ob(6,"div",40),p.Ob(7,"strong"),p.wc(8),p.Nb(),p.Ob(9,"div",41),p.wc(10),p.Nb(),p.Nb(),p.Mb(11,"br"),p.Ob(12,"div",42),p.vc(13,T,1,2,"div",27),p.Nb(),p.Ob(14,"div",43),p.Ob(15,"strong"),p.wc(16),p.Nb(),p.Nb(),p.Ob(17,"div",44),p.wc(18),p.Zb(19,"trofeo"),p.Mb(20,"img",20),p.wc(21),p.Zb(22,"trofeo"),p.Mb(23,"img",33),p.wc(24),p.Zb(25,"trofeo"),p.Mb(26,"img",35),p.Nb(),p.Nb(),p.Nb()),2&t){const t=o.$implicit,e=o.index;p.Ab(1),p.fc("ngIf",t.usuario.imagen.length>0&&"notfound.png"!==t.usuario.imagen[0].path),p.Ab(1),p.fc("ngIf","notfound.png"===t.usuario.imagen[0].path),p.Ab(3),p.xc(t.nombre),p.Ab(3),p.yc("",t.kilometros," Km"),p.Ab(2),p.yc(" ",e+1,""),p.Ab(3),p.fc("ngForOf",t.bandera),p.Ab(3),p.zc("",t.ciudad,", ",t.pais,""),p.Ab(2),p.yc(" ",p.bc(19,11,t.premios,"oro")," "),p.Ab(3),p.yc(", ",p.bc(22,14,t.premios,"plata")," "),p.Ab(3),p.yc(", ",p.bc(25,17,t.premios,"bronce")," ")}}function q(t,o){if(1&t&&(p.Ob(0,"div",36),p.Ob(1,"ion-item-divider",15),p.wc(2,"Posiciones nivel nacional"),p.Nb(),p.vc(3,Y,27,20,"ion-item",37),p.Nb()),2&t){const t=p.Yb();p.Ab(3),p.fc("ngForOf",t.grupos)}}function S(t,o){if(1&t){const t=p.Pb();p.Ob(0,"ion-infinite-scroll",46,47),p.Wb("ionInfinite",function(o){return p.pc(t),p.Yb().loadData(o)}),p.Mb(2,"ion-infinite-scroll-content",48),p.Nb()}}const W=[{path:"",component:(()=>{class t{constructor(t,o,e,n,i){this.apiGrupos=t,this.toast=o,this.almacenamiento=e,this.active=n,this.modal=i,this.vista=1,this.cargadopodio=!1,this.cargadotabla=!1,this.grupos=[],this.cargado=!1,this.patron="",this.desde=0,this.prod=!0,this.load=!1,this.mostrar=!1}ngOnInit(){}ionViewWillEnter(){this.ginfo()}refrescando(t){this.cargadopodio=!1,this.cargadotabla=!1,this.ginfo().then(()=>{t.target.complete()}).catch(()=>{t.target.complete()})}carrusel(t){return Object(s.a)(this,void 0,void 0,function*(){const o=yield this.modal.create({component:m,componentProps:{viajes:t}});yield o.present()})}ginfo(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&(this.load=!0,this.id=t._id,this.apiGrupos.integrantes(t.token,{id:this.active.snapshot.paramMap.get("grupo")}).subscribe(t=>{console.log(t),t.exe?(this.grupo=t.response[0],this.grupo.integrantes.filter(t=>t._id===this.id).length>0?(this.mostrar=!0,this.listar()):this.mostrar=!1,console.log(t)):this.toast.toastError("No se pudo consultar la informaci\xf3n, int\xe9ntelo m\xe1s tarde"),this.cargado=!0},t=>{this.toast.toastError("No se pudo consultar la informaci\xf3n, int\xe9ntelo m\xe1s tarde"),this.cargado=!0}))})}listar(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&(this.id=t._id,this.apiGrupos.podio(t.token,{tipo:this.grupo.tipo,pais:this.grupo.pais}).subscribe(t=>{console.log(t),t.exe?(this.podio=t.response,console.log(t)):this.toast.toastError("No se pudo consultar la informaci\xf3n, int\xe9ntelo m\xe1s tarde"),this.cargadopodio=!0},t=>{this.toast.toastError("No se pudo consultar la informaci\xf3n, int\xe9ntelo m\xe1s tarde"),this.cargadopodio=!0}))})}cambio(t){return Object(s.a)(this,void 0,void 0,function*(){"podio"===t.detail.value?(this.vista=1,this.cargadopodio||this.listar()):"posicion"===t.detail.value&&(this.vista=2,this.cargadotabla||this.tabla())})}tabla(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&(this.load=!0,this.apiGrupos.tabla(t.token,{desde:this.desde,tipo:this.grupo.tipo,pais:this.grupo.pais}).subscribe(t=>{console.log(t),t.exe?this.grupos=t.response:this.toast.toastError("No se pudo consultar los grupos, int\xe9ntelo m\xe1s tarde"),this.cargadotabla=!0},t=>{this.toast.toastError("No se pudo consultar los grupos, int\xe9ntelo m\xe1s tarde"),this.cargadotabla=!0}))})}loadData(t){return Object(s.a)(this,void 0,void 0,function*(){this.desde=this.desde+5;const o=yield this.almacenamiento.obtenerToken();o&&this.apiGrupos.tabla(o.token,{desde:this.desde,tipo:this.grupo.tipo,pais:this.grupo.pais}).subscribe(o=>{o.exe?o.response.length>0?(o.response.forEach(t=>{this.grupos.push(t)}),t.target.complete()):(t.target.disabled=!0,this.desde=0):this.toast.toastError("No se pudo traer los grupos, int\xe9ntelo m\xe1s tarde.")},t=>{this.toast.toastError("No se pudo traer los grupos, int\xe9ntelo m\xe1s tarde.")})})}}return t.\u0275fac=function(o){return new(o||t)(p.Lb(g.a),p.Lb(l.a),p.Lb(b.a),p.Lb(a.a),p.Lb(r.qb))},t.\u0275cmp=p.Fb({type:t,selectors:[["app-interfaz-grupo-estadisticas"]],viewQuery:function(t,o){if(1&t&&p.Ac(w,1),2&t){let t;p.oc(t=p.Xb())&&(o.infinite=t.first)}},decls:13,vars:5,consts:[["color","oscuro"],["slot","fixed","pullFactor","0.5","pullMin","50","pullMax","150",3,"ionRefresh"],["pullingIcon","arrow-dropdown","refreshingSpinner","circles"],["class","fcenter",4,"ngIf"],["value","podio","mode","ios","color","masoscuro",3,"ionChange",4,"ngIf"],[1,"divider"],["class","podio",4,"ngIf"],["class","posiciones",4,"ngIf"],["threshold","100px",3,"ionInfinite",4,"ngIf"],[1,"fcenter"],["src","/assets/No.png","width","100px","alt",""],["value","podio","mode","ios","color","masoscuro",3,"ionChange"],["value","podio"],["value","posicion"],[1,"podio"],["color","light"],[1,"ion-text-wrap"],["class","tar","mode","ios",3,"click",4,"ngIf"],["mode","ios",1,"tar",3,"click"],[1,"oro"],["src","/assets/Campeon.png","width","15px","alt",""],["mode","md"],[1,"info"],[1,"foto"],["class","avatar","slot","start",4,"ngIf"],[1,"mas"],[1,"bandera"],["class","color",3,"background",4,"ngFor","ngForOf"],["slot","start",1,"avatar"],[3,"src"],["src","/assets/Grupos.png"],[1,"color"],[1,"plata"],["src","/assets/Plata.png","width","15px","alt",""],[1,"bronce"],["src","/assets/Bronce.png","width","15px","alt",""],[1,"posiciones"],[4,"ngFor","ngForOf"],["slot","start",4,"ngIf"],[1,"nombre"],[1,"az","fl"],[1,"puesto"],[1,"bandera2"],[1,"fl"],[1,"p"],["slot","start"],["threshold","100px",3,"ionInfinite"],["inifinito",""],["loadingSpinner","bubbles","loadingText","Cargando Hojas de Vida..."]],template:function(t,o){1&t&&(p.Ob(0,"ion-header"),p.Ob(1,"ion-toolbar",0),p.Ob(2,"ion-title"),p.wc(3,"Estadisticas"),p.Nb(),p.Nb(),p.Nb(),p.Ob(4,"ion-content"),p.Ob(5,"ion-refresher",1),p.Wb("ionRefresh",function(t){return o.refrescando(t)}),p.Mb(6,"ion-refresher-content",2),p.Nb(),p.vc(7,x,4,0,"div",3),p.vc(8,N,7,0,"ion-segment",4),p.Mb(9,"div",5),p.vc(10,G,7,3,"div",6),p.vc(11,q,4,1,"div",7),p.vc(12,S,3,0,"ion-infinite-scroll",8),p.Nb()),2&t&&(p.Ab(7),p.fc("ngIf",o.cargado&&!o.mostrar),p.Ab(1),p.fc("ngIf",o.mostrar),p.Ab(2),p.fc("ngIf",o.mostrar&&1===o.vista&&o.podio),p.Ab(1),p.fc("ngIf",2===o.vista),p.Ab(1),p.fc("ngIf",o.load))},directives:[r.z,r.lb,r.jb,r.t,r.Q,r.R,n.j,r.V,r.xb,r.W,r.K,r.G,r.l,r.p,n.i,r.f,r.F,r.C,r.D],pipes:[v.a,O],styles:[".tit[_ngcontent-%COMP%]{width:100%;padding:10px;text-align:center;background:#e2f4f6}.bronce[_ngcontent-%COMP%], .oro[_ngcontent-%COMP%], .plata[_ngcontent-%COMP%]{width:100%;padding:10px 15px;display:flex;color:#333;font-size:14px;font-weight:700;text-align:left}.bronce[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .oro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .plata[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:20px}.bronce[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .oro[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .plata[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-direction:column}.or[_ngcontent-%COMP%]{color:#f7c127}.or[_ngcontent-%COMP%], .pl[_ngcontent-%COMP%]{font-size:16px;margin-bottom:5px}.pl[_ngcontent-%COMP%]{color:#babcb9}.bc[_ngcontent-%COMP%]{color:#ea9e67;font-size:16px;margin-bottom:5px}.mas[_ngcontent-%COMP%]{padding:5px 15px;text-align:right;display:flex;align-items:flex-end;flex-direction:column}.bandera[_ngcontent-%COMP%]{width:45px;height:45px}.bandera[_ngcontent-%COMP%], .bandera2[_ngcontent-%COMP%]{border-radius:100%;overflow:hidden;border:2px solid #333}.bandera2[_ngcontent-%COMP%]{width:24px;height:24px}.fl[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.puesto[_ngcontent-%COMP%]{font-size:14px;width:auto;padding:5px 8px;background-color:#006c78;color:#fff}.fcenter[_ngcontent-%COMP%]{margin:50px auto;display:flex;flex-direction:column;justify-content:center;align-items:center;width:300px;text-align:center}.color[_ngcontent-%COMP%]{height:15px;width:100%}.bandera2[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]{height:8px;width:100%}.avatar[_ngcontent-%COMP%]{margin:10px;width:100px!important;height:100px!important;z-index:11}.info[_ngcontent-%COMP%]{align-items:center;justify-content:space-between}.info[_ngcontent-%COMP%], .tar[_ngcontent-%COMP%]{display:flex}.tar[_ngcontent-%COMP%]{flex-direction:column}.oro[_ngcontent-%COMP%]{background-color:#fdf1cf;color:#f7c127}.oro[_ngcontent-%COMP%], .plata[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.plata[_ngcontent-%COMP%]{background-color:#f7f7f7;color:#9b9c9a}.bronce[_ngcontent-%COMP%]{background-color:#fae9dd;color:#ea9e67;display:flex;justify-content:space-between;align-items:center}ion-card-title[_ngcontent-%COMP%]{opacity:.5;padding:15px 20px}"]}),t})()}];let R=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=p.Jb({type:t}),t.\u0275inj=p.Ib({imports:[[a.j.forChild(W)],a.j]}),t})();var B=e("iTUp");let J=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=p.Jb({type:t}),t.\u0275inj=p.Ib({imports:[[n.b,i.e,r.mb,R,B.a]]}),t})()},vLoH:function(t,o,e){"use strict";e.d(o,"a",function(){return f});var n=e("tk/3"),i=e("PqYM"),r=e("Cfvw"),a=e("coGc"),s=e("lJxs"),c=e("IzEk"),p=e("MtjB"),b=e("JIr8"),d=e("AytR"),l=e("fXoL"),u=e("B7Rs"),h=e("fsfq"),g=e("TEn/");let f=(()=>{class t{constructor(t,o,e,n){this.http=t,this.transfer=o,this.almacenamiento=e,this.navCtrl=n}hanflerError(t){let o=0;return t.pipe(Object(a.a)(()=>Object(i.a)(5e3)),Object(s.a)(t=>{if(o++,console.log("Entramos a intentos"),t instanceof ErrorEvent){if(3===o)throw new Error("Error de Red")}else{if(!(t instanceof ProgressEvent))throw 404===t.status?new Error(" al realizar la solicictud "):401===t.status?(this.almacenamiento.terminarPartida().then(()=>{this.navCtrl.navigateRoot("/home")}),new Error("No tiene permisos para realizar la petici\xf3n ")):(console.log(t,"Error de servidor"),new Error(" No se pudo realizar la petici\xf3n, intentalo m\xe1s tarde "));if(3===o)throw new Error("Error de Red")}}),Object(c.a)(3))}crearGrupo(t,o){const e={headers:new n.c({"x-token":t})};return this.http.post(`${d.a}/grupos/crear`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}listarGrupos(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/lista`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}info(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/info`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}integrantes(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/integrantes`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}fotoPerfilUsuarioMoto(t,o,e,n){const i={fileKey:"archivo",httpMethod:"PUT",headers:{"x-token":t,"x-id":n},params:{tipo:e}},a=this.transfer.create();return Object(r.a)(a.upload(o,`${d.a}/upload/grupos`,i)).pipe(Object(b.a)(t=>{throw console.log("No se pudo subir la imagen "),new Error("No se pudo subir la imagen ")}))}subirweb(t,o,e){const i={headers:new n.c({"x-token":t,"x-id":e})};return this.http.put(`${d.a}/upload/grupos`,o,i).pipe(Object(p.a)(t=>this.hanflerError(t)))}leerProducto(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/filtrar`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}chat(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/chat`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}descarga(t,o){return this.http.get(`https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${o.coordsIniciales.lng},${o.coordsIniciales.lat};${o.coordsFinales.lng},${o.coordsFinales.lat}?geometries=geojson&steps=true&language=es&access_token=${t}`).pipe(Object(p.a)(t=>this.hanflerError(t)))}dibujar(t,o){return this.http.get(`https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${o.lng},${o.lat};${o.lngf},${o.latf}?geometries=geojson&steps=true&language=es&access_token=${t}`).pipe(Object(p.a)(t=>this.hanflerError(t)))}viaje(t,o){const e={headers:new n.c({"x-token":t})};return this.http.post(`${d.a}/grupos/viajes`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}irgrupo(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/bu`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}podio(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/podio`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}tabla(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/tabla`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}viajechao(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/viajes/eliminar`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}fotospodio(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/podio/fotos`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}viajeBuscarUno(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/buscar`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}viajeBuscar(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/viajes/filtrar`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}fotoviaje(t,o,e){const n={fileKey:"archivo",httpMethod:"PUT",headers:{"x-token":o,"x-viaje":e}},i=this.transfer.create();return Object(r.a)(i.upload(t,`${d.a}/grupos/viaje/upload`,n)).pipe(Object(b.a)(t=>{throw new Error("No se pudo subir la imagen ")}))}subirweb2(t,o,e){const i={headers:new n.c({"x-token":t,"x-viaje":e})};return this.http.put(`${d.a}/grupos/viaje/upload`,o,i).pipe(Object(p.a)(t=>this.hanflerError(t)))}fotosviaje(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/viaje/fotos`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}destino(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/viaje/destino`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}eliminarviaje(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/viaje/eliminar`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}eliminarFoto(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/viaje/eliminarfoto`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}km(t,o){const e={headers:new n.c({"x-token":t})};return this.http.put(`${d.a}/grupos/km`,o,e).pipe(Object(p.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(o){return new(o||t)(l.Sb(n.a),l.Sb(u.a),l.Sb(h.a),l.Sb(g.rb))},t.\u0275prov=l.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);