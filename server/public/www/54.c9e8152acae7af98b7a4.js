(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"8+ML":function(e,i,t){"use strict";t.r(i),t.d(i,"RegistroPageModule",function(){return k});var o=t("ofXK"),r=t("3Pt+"),n=t("tyNb"),a=t("TEn/"),s=t("mrSG"),c=t("h7Pn"),l=t("fXoL"),b=t("oQG1"),u=t("fmoy"),h=t("3qam"),d=t("fsfq");let p=(()=>{class e{constructor(e){this.alertCtrl=e}alertBasicApplication(e,i,t){return Object(s.a)(this,void 0,void 0,function*(){const o=yield this.alertCtrl.create({header:e,message:i,buttons:[{role:"cancel",text:"Cancelar"},{text:"Confirmar",handler:()=>{t()}}]});return yield o.present()})}}return e.\u0275fac=function(i){return new(i||e)(l.Qb(a.b))},e.\u0275prov=l.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=t("CkIw");const f=["slide"],g=["content"];function v(e,i){1&e&&(l.Mb(0,"div",45),l.Mb(1,"div",46),l.Kb(2,"ion-spinner",47),l.Mb(3,"p"),l.rc(4,"Validando Usuario..."),l.Lb(),l.Lb(),l.Lb())}function M(e,i){if(1&e&&(l.Mb(0,"ion-select-option",48),l.rc(1),l.Lb()),2&e){const e=i.$implicit;l.dc("value",e),l.zb(1),l.sc(e.nombre)}}function L(e,i){1&e&&(l.Mb(0,"ion-item",27),l.Mb(1,"ion-chip",28),l.rc(2,"Requerido"),l.Lb(),l.Lb())}function C(e,i){if(1&e&&(l.Mb(0,"ion-select-option",48),l.rc(1),l.Lb()),2&e){const e=i.$implicit;l.ec("value",e.nombre),l.zb(1),l.sc(e.nombre)}}function w(e,i){if(1&e){const e=l.Nb();l.Mb(0,"ion-item",32),l.Mb(1,"ion-label",22),l.rc(2,"Selecciona la ciudad"),l.Lb(),l.Mb(3,"ion-select",33),l.Ub("ionChange",function(i){return l.lc(e),l.Wb(2).seleccionarCiudad(i)}),l.qc(4,C,2,2,"ion-select-option",34),l.Lb(),l.Lb()}if(2&e){const e=l.Wb(2);l.zb(4),l.dc("ngForOf",e.ciudades)}}function O(e,i){1&e&&(l.Mb(0,"div",45),l.Mb(1,"ion-spinner",47),l.rc(2," Guardando informaci\xf3n"),l.Lb(),l.Lb())}function x(e,i){if(1&e){const e=l.Nb();l.Mb(0,"ion-slides",15,16),l.Mb(2,"ion-slide",17),l.Mb(3,"div",18),l.Mb(4,"ion-grid"),l.Mb(5,"ion-row"),l.Mb(6,"ion-col",19),l.Kb(7,"p",20),l.Mb(8,"ion-item",21),l.Mb(9,"ion-label",22),l.rc(10,"Escriba su nombre completo de Persona o negocio correspondiente"),l.Lb(),l.Lb(),l.Mb(11,"ion-item",23),l.Mb(12,"ion-input",24),l.Ub("ionChange",function(){l.lc(e);const i=l.Wb();return i.changeOne([i.forma.controls.nombreCompleto.errors])}),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(13,"ion-slide",17),l.Mb(14,"div",18),l.Mb(15,"ion-grid"),l.Mb(16,"ion-row"),l.Mb(17,"ion-col",19),l.Mb(18,"ion-item",21),l.Mb(19,"ion-label",22),l.rc(20,"Escriba un nombre de usuario para la aplicaci\xf3n"),l.Lb(),l.Lb(),l.Mb(21,"ion-item",23),l.Mb(22,"ion-input",25),l.Ub("ionChange",function(i){return l.lc(e),l.Wb().comprobarUsuario(i)}),l.Lb(),l.Lb(),l.Lb(),l.Mb(23,"ion-col",19),l.Kb(24,"br"),l.Lb(),l.Mb(25,"ion-col",19),l.Kb(26,"br"),l.qc(27,v,5,0,"div",26),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(28,"ion-slide",17),l.Mb(29,"div",18),l.Mb(30,"ion-grid"),l.Mb(31,"ion-row"),l.Mb(32,"ion-col",19),l.Mb(33,"ion-item",27),l.Mb(34,"ion-chip",28),l.rc(35,"Requerido"),l.Lb(),l.Lb(),l.Mb(36,"ion-item",21),l.Mb(37,"ion-label",22),l.rc(38,"Placa del veh\xedculo"),l.Lb(),l.Lb(),l.Mb(39,"ion-item",23),l.Mb(40,"ion-input",29),l.Ub("ionChange",function(i){return l.lc(e),l.Wb().placam(i)}),l.Lb(),l.Lb(),l.Mb(41,"ion-item",27),l.Mb(42,"ion-chip",28),l.rc(43,"Requerido"),l.Lb(),l.Lb(),l.Mb(44,"ion-item",21),l.Mb(45,"ion-label",22),l.rc(46,"Escriba su correo electr\xf3nico (obligatorio)"),l.Lb(),l.Lb(),l.Mb(47,"ion-item",23),l.Mb(48,"ion-input",30),l.Ub("ionChange",function(i){return l.lc(e),l.Wb().correom(i)}),l.Lb(),l.Lb(),l.Mb(49,"ion-item",21),l.Mb(50,"ion-label",22),l.rc(51,"Escriba su tel\xe9fono celular (opcional)"),l.Lb(),l.Lb(),l.Mb(52,"ion-item",23),l.Mb(53,"ion-input",31),l.Ub("ionChange",function(){l.lc(e);const i=l.Wb();return i.changeOne([i.forma.controls.correo.errors,i.forma.controls.tel.errors])}),l.Lb(),l.Lb(),l.Mb(54,"ion-item",27),l.Mb(55,"ion-chip",28),l.rc(56,"Requerido"),l.Lb(),l.Lb(),l.Mb(57,"ion-item",32),l.Mb(58,"ion-label",22),l.rc(59,"Selecciona el Pa\xeds"),l.Lb(),l.Mb(60,"ion-select",33),l.Ub("ionChange",function(i){return l.lc(e),l.Wb().listarCiudades(i)}),l.qc(61,M,2,2,"ion-select-option",34),l.Lb(),l.Lb(),l.rc(62,"\xb4 "),l.qc(63,L,3,0,"ion-item",35),l.qc(64,w,5,1,"ion-item",36),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(65,"ion-slide",17),l.Mb(66,"div",18),l.Mb(67,"ion-grid"),l.Mb(68,"ion-row"),l.Mb(69,"ion-col",19),l.Mb(70,"ion-item",37),l.Mb(71,"ion-label",22),l.rc(72,"Contrase\xf1a de m\xednimo 8 caracteres"),l.Lb(),l.Lb(),l.Mb(73,"ion-item",21),l.Mb(74,"ion-label",22),l.rc(75,"Escriba su contrase\xf1a"),l.Lb(),l.Lb(),l.Mb(76,"ion-item",23),l.Mb(77,"ion-input",38),l.Ub("ionChange",function(){l.lc(e);const i=l.Wb();return i.changeOne([i.forma.controls.clave.errors,i.forma.controls.confirmarClave.errors])}),l.Lb(),l.Lb(),l.Lb(),l.Mb(78,"ion-col",19),l.Mb(79,"ion-item",21),l.Mb(80,"ion-label",22),l.rc(81,"Confirmar la contrase\xf1a"),l.Lb(),l.Lb(),l.Mb(82,"ion-item",23),l.Mb(83,"ion-input",39),l.Ub("ionChange",function(){l.lc(e);const i=l.Wb();return i.changeOne([i.forma.controls.clave.errors,i.forma.controls.confirmarClave.errors])}),l.Lb(),l.Lb(),l.Mb(84,"h4",40),l.rc(85,"Clave Privada"),l.Lb(),l.Kb(86,"br"),l.Kb(87,"br"),l.Lb(),l.Mb(88,"ion-col",19),l.Mb(89,"ion-item",41),l.Ub("click",function(){return l.lc(e),l.Wb().politicas()}),l.Mb(90,"ion-label",42),l.rc(91,"Leer pol\xedticas de datos"),l.Lb(),l.Lb(),l.Mb(92,"ion-item",43),l.Mb(93,"ion-checkbox",44),l.Ub("ionChange",function(i){return l.lc(e),l.Wb().aceptar(i)}),l.Lb(),l.Mb(94,"ion-label",22),l.rc(95,"Acepto pol\xedticas de datos"),l.Lb(),l.Lb(),l.Kb(96,"br"),l.Kb(97,"br"),l.Lb(),l.Mb(98,"ion-col",19),l.Kb(99,"br"),l.qc(100,O,3,0,"div",26),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()}if(2&e){const e=l.Wb();l.zb(27),l.dc("ngIf",!e.usuarioValido),l.zb(34),l.dc("ngForOf",e.paises),l.zb(2),l.dc("ngIf",e.ciudad),l.zb(1),l.dc("ngIf",e.ciudad),l.zb(36),l.dc("ngIf",!e.usuarioValido)}}let E=(()=>{class e{constructor(e,i,t,o,n,a,s,c,l,b){this.usuarioService=e,this.toastService=i,this.router=t,this.navCtrl=o,this.registroService=n,this.almacenamiento=a,this.platform=s,this.alertService=c,this.OSSignal=l,this.modal=b,this.usuarioValido=!0,this.colorStatus="blanco",this.mensaje="Ingresa su nombre completo",this.usuarioID="",this.paises=[],this.ciudades=[],this.ciudad=!1,this.load=!1,this.correo="",this.pais="",this.miciudad="",this.placa="",this.index=0,this.acepto=!1,this.forma=new r.c({nombreCompleto:new r.a("",[r.m.required,r.m.minLength(10)]),nombreUsuario:new r.a("",[r.m.required,r.m.minLength(5)]),clave:new r.a("",[r.m.required,r.m.minLength(8)]),confirmarClave:new r.a,tel:new r.a("",[r.m.required])}),this.forma.controls.confirmarClave.setValidators([r.m.required,r.m.minLength(8),this.compareClaves.bind(this.forma)]),this.OSSignal.$usuarioID.subscribe(e=>{this.usuarioID=e})}ngOnInit(){}ionViewWillEnter(){this.colorStatus="blanco",this.mensaje="Ingresa su nombre completo",this.paises=[],this.ciudades=[],this.ciudad=!1,this.load=!1,this.correo="",this.pais="",this.miciudad="",this.placa="",this.index=0,this.probar(),this.listarPaises()}listarPaises(){this.usuarioService.listarPaises().subscribe(e=>{e.exe?this.paises=e.response:this.paises.push("Colombia")},e=>{this.paises.push("Colombia")})}correom(e){this.correo=e.detail.value}placam(e){this.placa=e.detail.value}listarCiudades(e){this.ciudad=!0,this.pais=e.detail.value.nombre,this.miciudad="",this.usuarioService.listarCiudades(e.detail.value._id).subscribe(e=>{e.exe?(this.ciudades=e.response,this.changeOne2()):this.toastService.toastError("No se pudo traer las ciudades, intente registrarse m\xe1s tarde")},e=>{this.toastService.toastError("No se pudo traer las ciudades, intente registrarse m\xe1s tarde")})}seleccionarCiudad(e){this.miciudad=e.detail.value,this.changeOne2()}probar(){return Object(s.a)(this,void 0,void 0,function*(){this.load=!0,(yield this.almacenamiento.obtenerToken())&&this.Slide.lockSwipes(!0).then(()=>{})})}changeOne2(){return Object(s.a)(this,void 0,void 0,function*(){this.colorStatus=1===this.index&&""!==this.pais&&""!==this.miciudad&&""!==this.placa&&""!==this.correo||1!==this.index?"success":"blanco"})}changeOne(e){return Object(s.a)(this,void 0,void 0,function*(){e.filter(e=>null===e).length===e.length?1===this.index&&""!==this.pais&&""!==this.miciudad||(this.colorStatus=1!==this.index?"success":"blanco"):this.colorStatus="blanco"})}retroceso(){this.alertService.alertBasicApplication("Mensaje","\xbfEstas seguro de que deseas cancelar el registro?",()=>{this.registroService.cambioEstado(!0),this.navCtrl.navigateBack("/home")})}compareClaves(e){return e.value!==this.controls.clave.value?{compare:!0}:null}guardarCambios(){const e=this.forma.value;e.usuarioID=""===this.usuarioID?"hola":this.usuarioID,e.pais=this.pais,e.ciudad=this.miciudad,e.placa=this.placa,e.correo=this.correo,e.acepto=this.acepto,this.acepto?(this.usuarioValido=!1,this.usuarioService.registrar(e).subscribe(e=>{this.usuarioValido=!0,delete e.clave,e.clave=this.forma.controls.clave.value,e.usuarioID="hola",this.almacenamiento.guardarUsuario(e).then(()=>{this.toastService.alertApplication("Usuario registrado corectamente",!0),this.registroService.cambioEstado(!0),this.almacenamiento.cambiarEstado(!1),this.navCtrl.navigateForward(["/central"])},e=>{this.usuarioValido=!0,this.toastService.alertApplication(e,!1)})},e=>{this.toastService.alertApplication(e,!1),this.usuarioValido=!0},()=>{})):this.toastService.toastError("Debe aceptar las pol\xedticas de la aplicaci\xf3n")}comprobarUsuario(e){this.forma.controls.nombreUsuario.errors?this.colorStatus="blanco":(this.usuarioValido=!1,this.usuarioService.usuario(e.detail.value).subscribe(e=>Object(s.a)(this,void 0,void 0,function*(){e.exe?(this.usuarioValido=!0,this.colorStatus="blanco",this.mensaje="El usuario ya existe, por favor escoge otro nombre"):(this.colorStatus="success",this.usuarioValido=!0,this.mensaje="El nombre de usuario esta disponible")}),e=>Object(s.a)(this,void 0,void 0,function*(){yield this.toastService.alertApplication(e,!1),this.usuarioValido=!0}),()=>{}))}next(){return Object(s.a)(this,void 0,void 0,function*(){"success"===this.colorStatus&&(yield this.Content.scrollToTop(100),this.Slide.getActiveIndex().then(e=>{this.index=e,3!==e?(0===e?this.mensaje="Escge un nombre de usuario personalizado":1===e?this.mensaje="Ingresa un correo y n\xfamero celular v\xe1lido al cual se contacten contigo":2===e&&(this.mensaje="T\xfa contrase\xf1a debe tener almenos 8 caracteres"),this.avanzar()):this.guardarCambios()}))})}avanzar(){return Object(s.a)(this,void 0,void 0,function*(){this.colorStatus="blanco",this.registroService.cambioEstado(!1),yield this.Slide.lockSwipes(!1),yield this.Slide.lockSwipeToPrev(!0),yield this.Slide.slideNext(300),yield this.Slide.lockSwipeToNext(!0)})}politicas(){return Object(s.a)(this,void 0,void 0,function*(){const e=yield this.modal.create({component:c.a});yield e.present()})}aceptar(e){this.acepto=e.detail.checked}ioniewDidLeave(){this.Slide.lockSwipes(!0).then(()=>{})}}return e.\u0275fac=function(i){return new(i||e)(l.Jb(b.a),l.Jb(u.a),l.Jb(n.g),l.Jb(a.rb),l.Jb(h.a),l.Jb(d.a),l.Jb(a.tb),l.Jb(p),l.Jb(m.a),l.Jb(a.qb))},e.\u0275cmp=l.Db({type:e,selectors:[["app-registro"]],viewQuery:function(e,i){if(1&e&&(l.vc(f,1),l.vc(g,1)),2&e){let e;l.kc(e=l.Vb())&&(i.Slide=e.first),l.kc(e=l.Vb())&&(i.Content=e.first)}},decls:19,vars:3,consts:[["color","",1,"ion-no-border"],["color","success"],["slot","start"],["fill","clear",1,"cancelar",3,"click"],["name","arrow-back-outline","slot","icon-only"],["color","blanco"],["content",""],[1,"contenedor"],[3,"formGroup","ngSubmit"],["class","slide-full",4,"ngIf"],["mode","md"],[3,"color","click"],["slot","end"],["fill","clear"],["name","arrow-round-forward","slot","icon-only"],[1,"slide-full"],["slide",""],[1,"slide"],[1,"content",2,"width","100%"],["size","12"],[1,"ion-margin-top"],["lines","none","mode","md",1,"ion-margin-top"],[1,"ion-text-wrap"],["lines","none","mode","ios",1,"campo","ion-margin-top"],["placeholder","Nombre Completo","type","text","formControlName","nombreCompleto",3,"ionChange"],["placeholder","Moto_28","type","text","formControlName","nombreUsuario",3,"ionChange"],["class","contenido",4,"ngIf"],["lines","none","mode","md",1,"ion-margin-top","sinfondo"],["color","danger"],["placeholder","N\xfamero de Placa","type","text",3,"ionChange"],["placeholder","Correo Electr\xf3nico","type","email",3,"ionChange"],["placeholder","N\xfamero de Celular","type","tel","formControlName","tel",3,"ionChange"],["lines","none","mode","md",1,""],["okText","Aceptar","cancelText","Cancelar",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],["lines","none","class"," ion-margin-top sinfondo","mode","md",4,"ngIf"],["lines","none","class"," ","mode","md",4,"ngIf"],["lines","none","mode","md","color","light",1,"ion-margin-top"],["type","password","formControlName","clave",3,"ionChange"],["type","password","formControlName","confirmarClave",3,"ionChange"],[1,"ion-text-center","ion-margin-top","opacity"],["color","light","lines","none","mode","md",1,"noborder","ion-margin-top",3,"click"],[1,"ion-text-wrap","azul"],["lines","none","color","light","mode","md",1,"noborder","ion-margin-top"],["color","barra","slot","start",3,"ionChange"],[1,"contenido"],[1,"load"],["color","primary","name","crescent"],[3,"value"]],template:function(e,i){1&e&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar",1),l.Mb(2,"ion-buttons",2),l.Mb(3,"ion-button",3),l.Ub("click",function(){return i.retroceso()}),l.Kb(4,"ion-icon",4),l.Lb(),l.Lb(),l.Mb(5,"ion-title"),l.rc(6,"Crear cuenta"),l.Lb(),l.Lb(),l.Lb(),l.Mb(7,"ion-content",5,6),l.Mb(9,"div",7),l.Mb(10,"form",8),l.Ub("ngSubmit",function(){return i.guardarCambios()}),l.qc(11,x,101,5,"ion-slides",9),l.Lb(),l.Lb(),l.Lb(),l.Mb(12,"ion-footer",10),l.Mb(13,"ion-toolbar",11),l.Ub("click",function(){return i.next()}),l.Mb(14,"ion-title",2),l.rc(15,"Continuar"),l.Lb(),l.Mb(16,"ion-buttons",12),l.Mb(17,"ion-button",13),l.Kb(18,"ion-icon",14),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.zb(10),l.dc("formGroup",i.forma),l.zb(1),l.dc("ngIf",i.load),l.zb(2),l.dc("color",i.colorStatus))},directives:[a.z,a.lb,a.k,a.j,a.A,a.jb,a.t,r.n,r.j,r.d,o.j,a.x,a.bb,a.ab,a.y,a.T,a.s,a.F,a.K,a.E,a.yb,r.i,r.b,a.r,a.X,a.xb,o.i,a.q,a.d,a.cb,a.Y],styles:[".contenedor[_ngcontent-%COMP%]{width:auto;max-width:600px;margin:auto}.cancelar[_ngcontent-%COMP%]{display:flex;align-items:center}ion-item[_ngcontent-%COMP%]{width:100%!important}.campo[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.3)}.contenido[_ngcontent-%COMP%]   .load[_ngcontent-%COMP%]{width:100%;justify-content:center}.contenido[_ngcontent-%COMP%], .contenido[_ngcontent-%COMP%]   .load[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.contenido[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;width:80%;opacity:.7}.message[_ngcontent-%COMP%]{background:#ffeec0}.sizeM[_ngcontent-%COMP%]{font-size:14px}"]}),e})();var j=t("zon2");const S=[{path:"",component:E}];let k=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(i){return new(i||e)},imports:[[o.b,r.e,r.l,a.mb,n.i.forChild(S),j.a]]}),e})()},oQG1:function(e,i,t){"use strict";t.d(i,"a",function(){return f});var o=t("tk/3"),r=t("PqYM"),n=t("Cfvw"),a=t("coGc"),s=t("lJxs"),c=t("IzEk"),l=t("MtjB"),b=t("JIr8"),u=t("AytR"),h=t("fXoL"),d=t("B7Rs"),p=t("fsfq"),m=t("TEn/");let f=(()=>{class e{constructor(e,i,t,o){this.http=e,this.transfer=i,this.almacenamiento=t,this.navCtrl=o}hanflerError(e){let i=0;return e.pipe(Object(a.a)(()=>Object(r.a)(5e3)),Object(s.a)(e=>{if(i++,console.log("Entramos a intentos"),e instanceof ErrorEvent){if(3===i)throw new Error("Error de Red")}else{if(!(e instanceof ProgressEvent))throw 404===e.status?new Error(" al realizar la solicictud "):401===e.status?(this.almacenamiento.terminarPartida().then(()=>{this.navCtrl.navigateRoot("/home")}),new Error("No tiene permisos para realizar la petici\xf3n ")):(console.log(e,"Error de servidor"),new Error(" No se pudo realizar la petici\xf3n, intentalo m\xe1s tarde "));if(3===i)throw new Error("Error de Red")}}),Object(c.a)(3))}registrar(e){return this.http.post(`${u.a}/usuarios`,e).pipe(Object(s.a)(e=>e.exe?(e.response.exe=e.exe,e.response.token=e.token,e.response):e),Object(l.a)(e=>this.hanflerError(e)))}usuario(e){return this.http.post(`${u.a}/usuarios/unico`,{buscar:e}).pipe(Object(l.a)(e=>this.hanflerError(e)))}iniciarPartida(e,i){const t={headers:new o.c({"x-dispositivoID":i})};return this.http.post(`${u.a}/login`,e,t).pipe(Object(s.a)(e=>(console.log(e),e.exe?(e.response.exe=e.exe,e.response.token=e.token,e.response):e.exe)),Object(l.a)(e=>this.hanflerError(e)))}fotoPerfilUsuarioMoto(e,i,t){const o={fileKey:"archivo",httpMethod:"PUT",headers:{"x-token":i},params:{tipo:t}},r=this.transfer.create();return Object(n.a)(r.upload(e,`${u.a}/upload`,o)).pipe(Object(b.a)(e=>{throw console.log("No se pudo subir la imagen "),new Error("No se pudo subir la imagen ")}))}subirweb(e,i){const t={headers:new o.c({"x-token":e})};return this.http.put(`${u.a}/upload`,i,t).pipe(Object(l.a)(e=>this.hanflerError(e)))}subirweb2(e,i,t){const r={headers:new o.c({"x-token":e,"x-old":t})};return this.http.put(`${u.a}/upload/portada/`,i,r).pipe(Object(l.a)(e=>this.hanflerError(e)))}viewImagen(e){const i={headers:new o.c({"x-token":e})};return this.http.get(`${u.a}/ver`,i).pipe(Object(l.a)(e=>this.hanflerError(e)))}buscarUsuario(e,i){const t={headers:new o.c({"x-token":i})};return this.http.get(`${u.a}/usuarios/${e}`,t).pipe(Object(l.a)(e=>this.hanflerError(e)))}cerrar(e){const i={headers:new o.c({"x-token":e})};return this.http.put(`${u.a}/usuarios/cerrar/`,{},i).pipe(Object(l.a)(e=>this.hanflerError(e)))}usuarioDatos(e){const i={headers:new o.c({"x-token":e})};return this.http.put(`${u.a}/usuarios/uno/`,{},i).pipe(Object(l.a)(e=>this.hanflerError(e)))}editarUusuario(e,i){const t={headers:new o.c({"x-token":e})};return this.http.put(`${u.a}/usuarios/editar/uno/`,i,t).pipe(Object(l.a)(e=>this.hanflerError(e)))}buscarPerfilUsuario(e,i){const t={headers:new o.c({"x-token":i})};return this.http.get(`${u.a}/usuarios/perfil/${e}`,t).pipe(Object(l.a)(e=>this.hanflerError(e)))}traerMisNotificaciones(e,i){const t={headers:new o.c({"x-token":e,"x-desde":i.toString()})};return this.http.get(`${u.a}/notificaciones/misnotificaciones/`,t).pipe(Object(l.a)(e=>this.hanflerError(e)))}notiCantidad(e){const i={headers:new o.c({"x-token":e})};return this.http.get(`${u.a}/notificaciones/numero/`,i).pipe(Object(l.a)(e=>this.hanflerError(e)))}ActualizarNotificaciones(e,i){const t={headers:new o.c({"x-token":e})};return this.http.put(`${u.a}/notificaciones/misnotificaciones/cambiarestado/`,{id:i},t).pipe(Object(l.a)(e=>this.hanflerError(e)))}validarClave(e,i){const t={headers:new o.c({"x-token":e})};return this.http.put(`${u.a}/usuarios/claves/`,i,t).pipe(Object(l.a)(e=>this.hanflerError(e)))}editarClaves(e,i){const t={headers:new o.c({"x-token":e})};return this.http.put(`${u.a}/usuarios/claves/editar`,i,t).pipe(Object(l.a)(e=>this.hanflerError(e)))}editarClaves2(e){return this.http.put(`${u.a}/usuarios/claves/editar/dos`,e).pipe(Object(l.a)(e=>this.hanflerError(e)))}listarPaises(){return this.http.get(`${u.a}/paises`).pipe(Object(l.a)(e=>this.hanflerError(e)))}listarCiudades(e){const i={headers:new o.c({"x-pais":e})};return this.http.get(`${u.a}/ciudad`,i).pipe(Object(l.a)(e=>this.hanflerError(e)))}CodigoComprobar(e){return this.http.put(`${u.a}/codigos`,e).pipe(Object(l.a)(e=>this.hanflerError(e)))}EditarCodigo(e){return this.http.put(`${u.a}/codigos/cambiar`,e).pipe(Object(l.a)(e=>this.hanflerError(e)))}negocios(){return this.http.get(`${u.a}/tiponegocio`).pipe(Object(l.a)(e=>this.hanflerError(e)))}modulos(e){const i={headers:new o.c({"x-token":e})};return this.http.get(`${u.a}/modulos`,i).pipe(Object(l.a)(e=>this.hanflerError(e)))}modulosTALLER(e,i){const t={headers:new o.c({"x-token":e})};return this.http.post(`${u.a}/modulos`,i,t).pipe(Object(l.a)(e=>this.hanflerError(e)))}Cambio(e){return this.http.post(`${u.a}/cambio`,e).pipe(Object(l.a)(e=>this.hanflerError(e)))}Validar(e){return this.http.put(`${u.a}/cambio`,e).pipe(Object(l.a)(e=>this.hanflerError(e)))}}return e.\u0275fac=function(i){return new(i||e)(h.Qb(o.a),h.Qb(d.a),h.Qb(p.a),h.Qb(m.rb))},e.\u0275prov=h.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);