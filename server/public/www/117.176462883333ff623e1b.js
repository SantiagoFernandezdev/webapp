(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{mh8C:function(e,n,l){"use strict";l.r(n),l.d(n,"CentralPageModule",function(){return p});var a=l("ofXK"),i=l("3Pt+"),t=l("tyNb"),d=l("TEn/"),h=l("mrSG"),o=l("fXoL"),r=l("3qam"),u=l("fsfq"),s=l("FlrC");const c=[{path:"",component:(()=>{class e{constructor(e,n,l,a){this.registroService=e,this.almacenamiento=n,this.menuCtrl=l,this.entrada=a}ngOnInit(){}ionViewDidEnter(){this.menuCtrl.enable(!0,"perfil").then(()=>Object(h.a)(this,void 0,void 0,function*(){const e=yield this.almacenamiento.obtenerToken();e&&this.entrada.sacarInfo({imagen:e.imagen,nombre:e.nombre})}))}suscribe(){this.entrada.alerta("click"),this.entrada.opciones(!0)}abrirMenu(){this.menuCtrl.toggle("perfilMenu").then(e=>{}).catch(e=>{})}}return e.\u0275fac=function(n){return new(n||e)(o.Jb(r.a),o.Jb(u.a),o.Jb(d.pb),o.Jb(s.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-central"]],decls:8,vars:0,consts:[["slot","bottom","color","muro"],["tab","buscar"],["name","search"],["seleted","","tab","perfil"],["name","person"],["tab","menu"],["name","menu"]],template:function(e,n){1&e&&(o.Mb(0,"ion-tabs"),o.Mb(1,"ion-tab-bar",0),o.Mb(2,"ion-tab-button",1),o.Kb(3,"ion-icon",2),o.Lb(),o.Mb(4,"ion-tab-button",3),o.Kb(5,"ion-icon",4),o.Lb(),o.Mb(6,"ion-tab-button",5),o.Kb(7,"ion-icon",6),o.Lb(),o.Lb(),o.Lb())},directives:[d.gb,d.eb,d.fb,d.A],styles:[""]}),e})(),children:[{path:"perfil",children:[{path:"",loadChildren:()=>Promise.all([l.e(2),l.e(7),l.e(0),l.e(119)]).then(l.bind(null,"wZq1")).then(e=>e.PerfilPageModule)},{path:"solicitudes",children:[{path:"",loadChildren:()=>l.e(16).then(l.bind(null,"erKi")).then(e=>e.SolicitudesPageModule),data:{animation:"SolicitudUsuario"}}]}]},{path:"buscar",children:[{path:"",loadChildren:()=>l.e(51).then(l.bind(null,"1+1D")).then(e=>e.BuscarPageModule),data:{animation:"BuscarUsuario"}},{path:"perfil-visita/:usuario",children:[{path:"",loadChildren:()=>Promise.all([l.e(2),l.e(7),l.e(118)]).then(l.bind(null,"O/O5")).then(e=>e.PerfilVisitaPageModule)}]}]},{path:"menu",children:[{path:"",loadChildren:()=>l.e(24).then(l.bind(null,"+eMj")).then(e=>e.MenuPageModule)},{path:"solicitudes",loadChildren:()=>l.e(16).then(l.bind(null,"erKi")).then(e=>e.SolicitudesPageModule)},{path:"miscitas",children:[{path:"",loadChildren:()=>Promise.all([l.e(0),l.e(9)]).then(l.bind(null,"5EfH")).then(e=>e.CitasPageModule)},{path:"hoja/:id",loadChildren:()=>Promise.all([l.e(0),l.e(12)]).then(l.bind(null,"7cAv")).then(e=>e.HojaPageModule)}]},{path:"hoja",children:[{path:"",loadChildren:()=>Promise.all([l.e(0),l.e(36)]).then(l.bind(null,"Fe5k")).then(e=>e.HojaPageModule)},{path:"mihoja/:id/:tipo",loadChildren:()=>Promise.all([l.e(0),l.e(12)]).then(l.bind(null,"7cAv")).then(e=>e.HojaPageModule)}]},{path:"factura",children:[{path:"",loadChildren:()=>l.e(109).then(l.bind(null,"ZDfU")).then(e=>e.FacturaInicioPageModule)},{path:"factura-configuracion",loadChildren:()=>Promise.all([l.e(0),l.e(108)]).then(l.bind(null,"B9W8")).then(e=>e.FacturaConfiguracionPageModule)},{path:"factura-nueva",loadChildren:()=>Promise.all([l.e(0),l.e(26)]).then(l.bind(null,"NaAF")).then(e=>e.FacturaNuevaPageModule)}]},{path:"recordatorios",children:[{path:"",loadChildren:()=>l.e(115).then(l.bind(null,"ytyx")).then(e=>e.RecordatorioPageModule)}]},{path:"notificaciones",children:[{path:"",loadChildren:()=>l.e(32).then(l.bind(null,"E7SW")).then(e=>e.NotificacionesPageModule)}]},{path:"empleados",children:[{path:"",loadChildren:()=>l.e(52).then(l.bind(null,"sTCq")).then(e=>e.EmpleadosPageModule)}]},{path:"ivt-inicio",children:[{path:"",loadChildren:()=>Promise.all([l.e(1),l.e(0),l.e(38)]).then(l.bind(null,"LXKQ")).then(e=>e.IvtInicioPageModule)}]},{path:"ivt-miinventario/:id",children:[{path:"",loadChildren:()=>l.e(39).then(l.bind(null,"V+2o")).then(e=>e.IvtMiinventarioPageModule)},{path:"empleados/:id",children:[{path:"",loadChildren:()=>l.e(40).then(l.bind(null,"PKKH")).then(e=>e.IVTempleadosPageModule)}]},{path:"proveedores/:id",children:[{path:"",loadChildren:()=>Promise.all([l.e(1),l.e(0),l.e(111)]).then(l.bind(null,"PlGv")).then(e=>e.IVTProveedoresPageModule)}]},{path:"categorias/:id",children:[{path:"",loadChildren:()=>Promise.all([l.e(1),l.e(110)]).then(l.bind(null,"oaNa")).then(e=>e.IVTcategoriasPageModule)}]},{path:"productos/:id",children:[{path:"",loadChildren:()=>Promise.all([l.e(1),l.e(5)]).then(l.bind(null,"t8Hx")).then(e=>e.IVTproductosPageModule)}]},{path:"productos/:id/:modal",children:[{path:"",loadChildren:()=>Promise.all([l.e(1),l.e(5)]).then(l.bind(null,"t8Hx")).then(e=>e.IVTproductosPageModule)}]},{path:"productos",children:[{path:"",loadChildren:()=>Promise.all([l.e(1),l.e(5)]).then(l.bind(null,"t8Hx")).then(e=>e.IVTproductosPageModule)}]},{path:"entradas/:id",children:[{path:"",loadChildren:()=>Promise.all([l.e(1),l.e(41)]).then(l.bind(null,"LwKO")).then(e=>e.IVTentradasPageModule)}]},{path:"salidas/:id/:creador",children:[{path:"",loadChildren:()=>Promise.all([l.e(1),l.e(0),l.e(42)]).then(l.bind(null,"sUzL")).then(e=>e.IVTsalidasPageModule)}]},{path:"ivt-configuracion/:id",children:[{path:"",loadChildren:()=>l.e(37).then(l.bind(null,"u6L1")).then(e=>e.IvtConfiguracionPageModule)}]},{path:"ivt-movimientos/:id",children:[{path:"",loadChildren:()=>l.e(27).then(l.bind(null,"4YEd")).then(e=>e.IvtMovimientosPageModule)}]},{path:"ivt-estadisticas/:id",children:[{path:"",loadChildren:()=>l.e(23).then(l.bind(null,"/kkW")).then(e=>e.IvtEstadisticasPageModule)}]}]},{path:"grua",children:[{path:"",loadChildren:()=>Promise.all([l.e(8),l.e(43)]).then(l.bind(null,"flfU")).then(e=>e.GruaPageModule)}]},{path:"inicioMapa",children:[{path:"",loadChildren:()=>l.e(113).then(l.bind(null,"eXPJ")).then(e=>e.InicioPageModule)}]},{path:"sedeMapa",children:[{path:"",loadChildren:()=>Promise.all([l.e(0),l.e(44)]).then(l.bind(null,"qfE0")).then(e=>e.SedesMapaPageModule)}]},{path:"control-mapas",children:[{path:"",loadChildren:()=>Promise.all([l.e(8),l.e(0),l.e(112)]).then(l.bind(null,"alRM")).then(e=>e.ControlMapasPageModule)}]}]},{path:"iniciosan",children:[{path:"",loadChildren:()=>Promise.all([l.e(2),l.e(0),l.e(25)]).then(l.bind(null,"gytv")).then(e=>e.SANinicioPageModule)}]},{path:"creador",children:[{path:"",loadChildren:()=>Promise.all([l.e(2),l.e(0),l.e(14)]).then(l.bind(null,"AqZ+")).then(e=>e.SANcreadorPageModule)}]},{path:"creador/:tipo",children:[{path:"",loadChildren:()=>Promise.all([l.e(2),l.e(0),l.e(14)]).then(l.bind(null,"AqZ+")).then(e=>e.SANcreadorPageModule)}]},{path:"seguridad",children:[{path:"",loadChildren:()=>l.e(47).then(l.bind(null,"lBrD")).then(e=>e.ClavePageModule)}]},{path:"tickets/:id",children:[{path:"",loadChildren:()=>Promise.all([l.e(0),l.e(48)]).then(l.bind(null,"+Hj7")).then(e=>e.InicioTicketsPageModule)},{path:"ticketsala/:sala",loadChildren:()=>l.e(50).then(l.bind(null,"KwZs")).then(e=>e.TicketsSalaPageModule)}]},{path:"tickets",children:[{path:"",loadChildren:()=>l.e(31).then(l.bind(null,"+Aiu")).then(e=>e.InicioTicketsPersonasPageModule)},{path:"tallerticket/:id",loadChildren:()=>Promise.all([l.e(0),l.e(49)]).then(l.bind(null,"NlP8")).then(e=>e.TallerTicketPageModule)}]},{path:"pedidos",children:[{path:"",loadChildren:()=>Promise.all([l.e(10),l.e(114)]).then(l.bind(null,"1XrT")).then(e=>e.PedidosInicioPageModule)},{path:"info/:id",loadChildren:()=>l.e(29).then(l.bind(null,"6V7b")).then(e=>e.PedidoInfoPageModule)},{path:"mapa/:tipo/:id",loadChildren:()=>l.e(46).then(l.bind(null,"uIXr")).then(e=>e.PedidosMapaPageModule)}]},{path:"citas/:id",children:[{path:"",loadChildren:()=>Promise.all([l.e(0),l.e(9)]).then(l.bind(null,"5EfH")).then(e=>e.CitasPageModule)}]},{path:"chats",children:[{path:"",loadChildren:()=>Promise.all([l.e(10),l.e(116)]).then(l.bind(null,"pICn")).then(e=>e.SalasInicioPageModule)},{path:"chat",loadChildren:()=>l.e(30).then(l.bind(null,"wYDu")).then(e=>e.SalasChatPageModule)},{path:"modal-chat/:id",loadChildren:()=>l.e(13).then(l.bind(null,"mpxO")).then(e=>e.SalaModalChatPageModule)},{path:"modal-chat/:id/:tipo",loadChildren:()=>l.e(13).then(l.bind(null,"mpxO")).then(e=>e.SalaModalChatPageModule)}]},{path:"patinadas",children:[{path:"",loadChildren:()=>Promise.all([l.e(0),l.e(28)]).then(l.bind(null,"Cw8s")).then(e=>e.PatinadasInicioPageModule)}]},{path:"mispatinadas",children:[{path:"",loadChildren:()=>Promise.all([l.e(0),l.e(45)]).then(l.bind(null,"ORVy")).then(e=>e.PatinadasMiasPageModule)}]},{path:"**",redirectTo:"/central/menu"}]}];let p=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(n){return new(n||e)},imports:[[a.b,i.e,d.mb,t.i.forChild(c)]]}),e})()}}]);