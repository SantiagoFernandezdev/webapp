(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{N29P:function(t,e,o){"use strict";o.r(e),o.d(e,"InterfazgrupoViajesPageModule",function(){return $});var i=o("ofXK"),a=o("3Pt+"),r=o("TEn/"),n=o("tyNb"),s=o("mrSG"),c=o("fXoL"),l=o("fsfq"),d=o("fmoy"),u=o("Bfh1"),p=o("vLoH"),b=o("a/9d"),h=o("r3ab");const g=["fileUpload"],f=["mapa"];function m(t,e){1&t&&(c.Ob(0,"div",7),c.Mb(1,"img",8),c.Ob(2,"h3"),c.wc(3,"No tiene acceso para ver esta informaci\xf3n, env\xede una invitaci\xf3n a este grupo"),c.Nb(),c.Nb())}function v(t,e){if(1&t){const t=c.Pb();c.Ob(0,"ion-button",23),c.Wb("click",function(){return c.pc(t),c.Yb(3).capturar()}),c.Mb(1,"ion-icon",24),c.wc(2," Capturar ubicaci\xf3n inicial del viaje "),c.Nb()}}function j(t,e){1&t&&(c.Ob(0,"ion-button",25),c.Mb(1,"ion-icon",26),c.wc(2," Ubicaci\xf3n capturada "),c.Nb())}function O(t,e){1&t&&(c.Ob(0,"div",27),c.Mb(1,"ion-spinner",28),c.Ob(2,"div"),c.wc(3," Cargando ubicaci\xf3n... "),c.Mb(4,"br"),c.Nb(),c.Nb())}function k(t,e){if(1&t&&(c.Ob(0,"ion-card",29),c.Ob(1,"ion-card-title",30),c.wc(2,"Posici\xf3n"),c.Nb(),c.Mb(3,"br"),c.Ob(4,"ion-card-title",30),c.wc(5),c.Nb(),c.Ob(6,"ion-card-title",30),c.wc(7),c.Nb(),c.Nb()),2&t){const t=c.Yb(3);c.Ab(5),c.yc("Longitud: ",t.lng,""),c.Ab(2),c.yc("Latitud: ",t.lat,"")}}function y(t,e){1&t&&(c.Ob(0,"ion-item-divider",12),c.Ob(1,"ion-label",15),c.wc(2,"Selecciona el destino para mostrar una ruta para tu viaje, arrastra el amrcador azul"),c.Nb(),c.Nb())}function w(t,e){1&t&&c.Mb(0,"div",31,32)}function x(t,e){if(1&t){const t=c.Pb();c.Ob(0,"div"),c.Ob(1,"ion-item-divider",12),c.Ob(2,"ion-label"),c.wc(3,"Nombre del viaje"),c.Nb(),c.Nb(),c.Ob(4,"ion-item",13),c.Ob(5,"ion-input",14),c.Wb("ngModelChange",function(e){return c.pc(t),c.Yb(2).nombre=e}),c.Nb(),c.Nb(),c.Mb(6,"br"),c.Ob(7,"ion-item-divider",12),c.Ob(8,"ion-label",15),c.wc(9,"Capturar ubicaci\xf3n inicial, recuerde tener encendido su GPS antes de presionar el bot\xf3n"),c.Nb(),c.Nb(),c.Ob(10,"div",16),c.vc(11,v,3,0,"ion-button",17),c.vc(12,j,3,0,"ion-button",18),c.Nb(),c.vc(13,O,5,0,"div",19),c.vc(14,k,8,2,"ion-card",20),c.Mb(15,"div",11),c.vc(16,y,3,0,"ion-item-divider",21),c.vc(17,w,2,0,"div",22),c.Nb()}if(2&t){const t=c.Yb(2);c.Ab(5),c.fc("ngModel",t.nombre),c.Ab(6),c.fc("ngIf",!t.ubicacion),c.Ab(1),c.fc("ngIf",t.ubicacion),c.Ab(1),c.fc("ngIf",t.cargando),c.Ab(1),c.fc("ngIf",t.ubicacion),c.Ab(2),c.fc("ngIf",t.ubicacion),c.Ab(1),c.fc("ngIf",t.ubicacion)}}function N(t,e){1&t&&c.Mb(0,"div",31,32)}function E(t,e){if(1&t){const t=c.Pb();c.Ob(0,"div",37),c.Mb(1,"img",38),c.Ob(2,"ion-chip",39),c.Wb("click",function(){c.pc(t);const o=e.$implicit,i=e.index;return c.Yb(3).eliminarfoto(o._id,o.ruta,i)}),c.wc(3,"Eliminar"),c.Nb(),c.Nb()}if(2&t){const t=e.$implicit;c.Ab(1),c.hc("src","https://www.motocaliapp.com/2807/",t.ruta,"",c.qc)}}function M(t,e){if(1&t){const t=c.Pb();c.Ob(0,"ion-button",23),c.Wb("click",function(){return c.pc(t),c.Yb(3).capturar()}),c.Mb(1,"ion-icon",24),c.wc(2," Capturar ubicaci\xf3n final del viaje "),c.Nb()}}function S(t,e){1&t&&(c.Ob(0,"ion-button",25),c.Mb(1,"ion-icon",26),c.wc(2," Ubicaci\xf3n capturada "),c.Nb())}function I(t,e){1&t&&(c.Ob(0,"div",27),c.Mb(1,"ion-spinner",28),c.Ob(2,"div"),c.wc(3," Cargando ubicaci\xf3n... "),c.Mb(4,"br"),c.Nb(),c.Nb())}function C(t,e){if(1&t){const t=c.Pb();c.Ob(0,"ion-button",41),c.Wb("click",function(){return c.pc(t),c.Yb(4).guardar()}),c.wc(1,"Guardar viaje"),c.Nb()}}function L(t,e){if(1&t&&(c.Ob(0,"ion-card",29),c.Ob(1,"ion-card-title",30),c.wc(2,"Posici\xf3n"),c.Nb(),c.Mb(3,"br"),c.Ob(4,"ion-card-title",30),c.wc(5),c.Nb(),c.Ob(6,"ion-card-title",30),c.wc(7),c.Nb(),c.vc(8,C,2,0,"ion-button",40),c.Nb()),2&t){const t=c.Yb(3);c.Ab(5),c.yc("Longitud: ",t.lng,""),c.Ab(2),c.yc("Latitud: ",t.lat,""),c.Ab(1),c.fc("ngIf",t.ubicacion&&t.editar)}}function P(t,e){if(1&t&&(c.Ob(0,"ion-card",29),c.Ob(1,"ion-card-title",30),c.wc(2,"Posici\xf3n destino"),c.Nb(),c.Mb(3,"br"),c.Ob(4,"ion-card-title",30),c.wc(5),c.Nb(),c.Ob(6,"ion-card-title",30),c.wc(7),c.Nb(),c.Nb()),2&t){const t=c.Yb(3);c.Ab(5),c.yc("Longitud: ",t.viajedatos.coordsFinales.lng,""),c.Ab(2),c.yc("Latitud: ",t.viajedatos.coordsFinales.lat,"")}}function A(t,e){if(1&t){const t=c.Pb();c.Ob(0,"div"),c.Ob(1,"ion-item-divider",12),c.Ob(2,"ion-label",15),c.wc(3,"Ruta en el mapa"),c.Nb(),c.Nb(),c.vc(4,N,2,0,"div",22),c.Ob(5,"ion-item-divider",12),c.Ob(6,"ion-label",15),c.wc(7," Puedes subir hasta 10 fotos que destaquen los mejores momentos del viaje "),c.Nb(),c.Nb(),c.Ob(8,"div",11),c.Ob(9,"ion-button",33),c.Wb("click",function(){return c.pc(t),c.Yb(2).tomarFoto()}),c.Mb(10,"img",34),c.wc(11," Subir foto del viaje "),c.Nb(),c.Nb(),c.Ob(12,"div",35),c.vc(13,E,4,1,"div",36),c.Nb(),c.Ob(14,"ion-item-divider",12),c.Ob(15,"ion-label",15),c.wc(16," Presione el siguiente bot\xf3n cuando se encuentre al final de la ruta para asi cargar la cantidad de kilometros que recorri\xf3 desde la punto inicial. "),c.Nb(),c.Nb(),c.Ob(17,"div",16),c.vc(18,M,3,0,"ion-button",17),c.vc(19,S,3,0,"ion-button",18),c.Nb(),c.vc(20,I,5,0,"div",19),c.vc(21,L,9,3,"ion-card",20),c.vc(22,P,8,2,"ion-card",20),c.Nb()}if(2&t){const t=c.Yb(2);c.Ab(4),c.fc("ngIf",t.viaje),c.Ab(9),c.fc("ngForOf",t.fotos),c.Ab(5),c.fc("ngIf",!t.ubicacion&&t.viajedatos&&!t.viajedatos.coordsFinales),c.Ab(1),c.fc("ngIf",t.ubicacion),c.Ab(1),c.fc("ngIf",t.cargando),c.Ab(1),c.fc("ngIf",t.ubicacion&&t.viajedatos&&!t.viajedatos.coordsFinales),c.Ab(1),c.fc("ngIf",t.viajedatos&&t.viajedatos.coordsFinales)}}function T(t,e){if(1&t&&(c.Ob(0,"div"),c.Mb(1,"input",9,10),c.Mb(3,"div",11),c.vc(4,x,18,7,"div",6),c.vc(5,A,23,7,"div",6),c.Nb()),2&t){const t=c.Yb();c.Ab(4),c.fc("ngIf",!t.editar&&t.cargado&&t.mostrar),c.Ab(1),c.fc("ngIf",t.editar&&t.cargado&&t.mostrar)}}function Y(t,e){if(1&t){const t=c.Pb();c.Ob(0,"ion-footer"),c.Ob(1,"ion-toolbar",42),c.Wb("click",function(){return c.pc(t),c.Yb().crear()}),c.Ob(2,"ion-title"),c.wc(3,"Crear Viaje"),c.Nb(),c.Ob(4,"ion-buttons",2),c.Ob(5,"ion-button"),c.Mb(6,"ion-icon",43),c.Nb(),c.Nb(),c.Nb(),c.Nb()}}const J=[{path:"",component:(()=>{class t{constructor(t,e,o,i,a,r,n,s,c){this.almacenamiento=t,this.toastService=e,this.geolocation=o,this.apiGrupo=i,this.router=a,this.active=r,this.camera=n,this.loadingService=s,this.alert=c,this.nombre="",this.ubicacion=!1,this.cargando=!1,this.editar=!1,this.mostrar=!1,this.cargado=!1,this.fotos=[],this.viajeestado=!0}ngOnInit(){}ionViewWillEnter(){this.listar(),this.active.snapshot.paramMap.get("viaje")&&(this.editar=!0)}refrescando(){this.active.snapshot.paramMap.get("viaje")||(this.ubicacion=!1,this.lat=void 0,this.lng=void 0,this.latf=void 0,this.lngf=void 0),this.cargado=!1,this.listar()}listar(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&(this.id=t._id,this.apiGrupo.integrantes(t.token,{id:this.active.snapshot.paramMap.get("id")}).subscribe(t=>{console.log(t),t.exe?(this.grupo=t.response[0],this.grupo.integrantes.filter(t=>t._id===this.id).length>0?(this.mostrar=!0,this.foto(),this.viaje()):this.mostrar=!1,console.log(t)):this.toastService.toastError("No se pudo consultar la informaci\xf3n, int\xe9ntelo m\xe1s tarde"),this.cargado=!0},t=>{this.toastService.toastError("No se pudo consultar la informaci\xf3n, int\xe9ntelo m\xe1s tarde"),this.cargado=!0}))})}viaje(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&(this.id=t._id,this.apiGrupo.viajeBuscarUno(t.token,{id:this.active.snapshot.paramMap.get("viaje")}).subscribe(t=>Object(s.a)(this,void 0,void 0,function*(){if(console.log(t),t.exe){if(this.viajedatos=t.response,this.viajeestado=!0,this.active.snapshot.paramMap.get("viaje"))try{const t=yield this.geolocation.getCurrentPosition({enableHighAccuracy:!0,timeout:2e4});t?(this.lat=t.coords.latitude,this.lng=t.coords.longitude,setTimeout(()=>{this.graficar2()},1e3),this.cargando=!1):this.cargando=!1}catch(e){this.cargando=!1,this.toastService.toastError("No se pudo capturar su posici\xf3n")}}else this.toastService.toastError("No se pudo consultar la informaci\xf3n, int\xe9ntelo m\xe1s tarde")}),t=>{this.toastService.toastError("No se pudo consultar la informaci\xf3n, int\xe9ntelo m\xe1s tarde"),this.cargado=!0}))})}graficar2(){mapboxgl.accessToken="pk.eyJ1Ijoic2FudGlhZ29mZXJuYW5kZXpkZXYiLCJhIjoiY2tmYmh6cXdzMDM0bDJ2cHRucTI4cHpkaSJ9.-01EYvsLdJOU1Oy4BtwBwA";const t=new mapboxgl.Map({container:this.mapa.nativeElement,style:"mapbox://styles/mapbox/streets-v11",center:[this.lng,this.lat],zoom:7});t.addControl(new mapboxgl.NavigationControl);const e=document.createElement("div");e.className="marker",e.style.backgroundImage="url(/assets/Punto.png)",e.style.backgroundSize="100%",e.style.width="70px",e.style.height="70px",new mapboxgl.Marker({element:e,draggable:!1}).setLngLat([this.lng,this.lat]).addTo(t);const o=document.createElement("div");o.className="marker",o.style.backgroundImage="url(/assets/Marcador.png)",o.style.backgroundSize="100%",o.style.width="50px",o.style.height="70px",new mapboxgl.Marker({element:o,draggable:!1}).setLngLat([this.viajedatos.coordsIniciales.lng,this.viajedatos.coordsIniciales.lat]).addTo(t);const i=document.createElement("div");i.className="marker",i.style.backgroundImage="url(/assets/Destino.png)",i.style.backgroundSize="100%",i.style.width="50px",i.style.height="70px",new mapboxgl.Marker({element:i,draggable:!1}).setLngLat([this.viajedatos.coordsTemporal.lng,this.viajedatos.coordsTemporal.lat]).addTo(t),this.apiGrupo.dibujar("pk.eyJ1Ijoic2FudGlhZ29mZXJuYW5kZXpkZXYiLCJhIjoiY2tmYmh6cXdzMDM0bDJ2cHRucTI4cHpkaSJ9.-01EYvsLdJOU1Oy4BtwBwA",{lng:this.viajedatos.coordsIniciales.lng,lat:this.viajedatos.coordsIniciales.lat,lngf:this.viajedatos.coordsTemporal.lng,latf:this.viajedatos.coordsTemporal.lat}).subscribe(e=>{console.log(e);let o={type:"Feature",properties:{},geometry:{type:"LineString",coordinates:e.routes[0].geometry.coordinates}};t.getSource("route")?(console.log("Madrid"),t.getSource("route").setData(o)):(console.log("Tatica"),t.addLayer({id:"route",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:o}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#006C78","line-width":5,"line-opacity":.75}}),t.getSource("route").setData(o))})}foto(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.apiGrupo.fotosviaje(t.token,{id:this.active.snapshot.paramMap.get("viaje")}).subscribe(t=>{console.log(t,"viajes"),t.exe?this.fotos=t.response:this.toastService.toastError("No se pudo consultar la informaci\xf3n, int\xe9ntelo m\xe1s tarde"),this.cargado=!0},t=>{this.toastService.toastError("No se pudo consultar la informaci\xf3n, int\xe9ntelo m\xe1s tarde"),this.cargado=!0})})}capturar(){return Object(s.a)(this,void 0,void 0,function*(){this.cargando=!0;try{const t=yield this.geolocation.getCurrentPosition({enableHighAccuracy:!0,timeout:2e4});t?(this.ubicacion=!0,this.active.snapshot.paramMap.get("viaje")?(this.latd=t.coords.latitude,this.lngd=t.coords.longitude):(this.lat=t.coords.latitude,this.lng=t.coords.longitude,setTimeout(()=>{this.graficar()},1e3)),this.cargando=!1):this.cargando=!1}catch(t){this.cargando=!1,this.toastService.toastError("No se pudo capturar su posici\xf3n")}})}crear(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.apiGrupo.viaje(t.token,{coordsini:{lng:this.lng,lat:this.lat,dp:t.usuarioID},coordstmp:{lng:this.lngf,lat:this.latf},nombre:this.nombre,grupo:this.active.snapshot.paramMap.get("id")}).subscribe(t=>{t.exe?(this.toastService.toastExitoso("Viaje creado"),this.router.navigate(["/interfaz-grupo",this.active.snapshot.paramMap.get("id"),"rutas",this.active.snapshot.paramMap.get("id")])):this.toastService.toastError("No se pudo crear el viaje, int\xe9ntelo m\xe1s tarde")},t=>{this.toastService.toastError("No se pudo crear el viaje, int\xe9ntelo m\xe1s tarde")})})}tomarFoto(){10===this.fotos.length?this.toastService.toastError("Solo puede subir 10 fotos"):this.camera.getPicture({quality:100,targetWidth:900,targetHeight:600,correctOrientation:!0,destinationType:this.camera.DestinationType.FILE_URI,encodingType:0,mediaType:this.camera.MediaType.PICTURE,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY}).then(t=>Object(s.a)(this,void 0,void 0,function*(){yield this.loadingService.cargaProcesos("Subiendo Imagen, por favor espera."),this.almacenamiento.obtenerToken().then(e=>{this.apiGrupo.fotoviaje(t,e.token,this.active.snapshot.paramMap.get("viaje")).subscribe(t=>{this.fotos.push(t.response),this.toastService.toastExitoso("Foto de viaje subida"),this.loadingService.finalizarCargado()},t=>Object(s.a)(this,void 0,void 0,function*(){this.toastService.toastError("No se pudo guardar la foto"),this.loadingService.finalizarCargado()}))}).catch(()=>{this.loadingService.finalizarCargado()})}),t=>{})}pc(){return Object(s.a)(this,void 0,void 0,function*(){if(10===this.fotos.length)this.toastService.toastError("Solo puede subir 10 fotos");else{const t=yield this.almacenamiento.obtenerToken();if(t){console.log(t);const e=this.fileUpload.nativeElement;e.onchange=o=>{for(let i=0;i<e.files.length;i++){const o=e.files[i],a=new FormData;a.append("archivo",o),this.loadingService.cargaProcesos("Actualizando foto de perf\xedl..."),this.apiGrupo.subirweb2(t.token,a,this.active.snapshot.paramMap.get("viaje")).subscribe(t=>Object(s.a)(this,void 0,void 0,function*(){t.exe?(this.fotos.push(t.response),yield this.toastService.toastExitoso("Foto de viaje subida")):yield this.toastService.toastError("No se pudo guardar la foto"),this.loadingService.finalizarCargado()}),t=>Object(s.a)(this,void 0,void 0,function*(){this.loadingService.finalizarCargado(),yield this.toastService.alertApplication(t.message,!1)}))}},e.click()}}})}graficar(){mapboxgl.accessToken="pk.eyJ1Ijoic2FudGlhZ29mZXJuYW5kZXpkZXYiLCJhIjoiY2tmYmh6cXdzMDM0bDJ2cHRucTI4cHpkaSJ9.-01EYvsLdJOU1Oy4BtwBwA";const t=new mapboxgl.Map({container:this.mapa.nativeElement,style:"mapbox://styles/mapbox/streets-v11",center:[this.lng,this.lat],zoom:11});t.addControl(new mapboxgl.NavigationControl);const e=document.createElement("div");e.className="marker",e.style.backgroundImage="url(/assets/Marcador.png)",e.style.backgroundSize="100%",e.style.width="50px",e.style.height="70px",new mapboxgl.Marker({element:e,draggable:!1}).setLngLat([this.lng,this.lat]).addTo(t);const o=document.createElement("div");o.className="marker",o.style.backgroundImage="url(/assets/Destino.png)",o.style.backgroundSize="100%",o.style.width="50px",o.style.height="70px";const i=new mapboxgl.Marker({element:o,draggable:!0}).setLngLat([this.lng,this.lat]).addTo(t);i.on("dragend",()=>{const e=i.getLngLat();this.lngf=e.lng,this.latf=e.lat,this.apiGrupo.dibujar("pk.eyJ1Ijoic2FudGlhZ29mZXJuYW5kZXpkZXYiLCJhIjoiY2tmYmh6cXdzMDM0bDJ2cHRucTI4cHpkaSJ9.-01EYvsLdJOU1Oy4BtwBwA",{lng:this.lng,lat:this.lat,lngf:e.lng,latf:e.lat}).subscribe(e=>{console.log(e);let o={type:"Feature",properties:{},geometry:{type:"LineString",coordinates:e.routes[0].geometry.coordinates}};t.getSource("route")?(console.log("Madrid"),t.getSource("route").setData(o)):(console.log("Tatica"),t.addLayer({id:"route",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:o}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#006C78","line-width":5,"line-opacity":.75}}),t.getSource("route").setData(o))})})}guardar(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.alert.create({header:"Atenci\xf3n!",message:"\xbfQuieres marcar este viaje como terminado? si lo haces ya esta ubicaci\xf3n quedar\xe1 guardada como el final del recorrido y no se podr\xe1 editar de nuevo",buttons:[{text:"Cancelar",role:"cancel",cssClass:"cancelarAlerta"},{text:"Aceptar",cssClass:"botonalerta",handler:()=>Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&(this.loadingService.cargaProcesos("Cargando kolometros del recorrido..."),this.viajedatos.coordsFinales={lng:this.lngd,lat:this.latd},this.apiGrupo.descarga("pk.eyJ1Ijoic2FudGlhZ29mZXJuYW5kZXpkZXYiLCJhIjoiY2tmYmh6cXdzMDM0bDJ2cHRucTI4cHpkaSJ9.-01EYvsLdJOU1Oy4BtwBwA",this.viajedatos).subscribe(e=>{console.log(e,"DATA");let o=(e.routes[0].distance/1e3).toFixed(1);this.apiGrupo.destino(t.token,{coords:{lng:this.lngd,lat:this.latd,dp:t.usuarioID},id:this.active.snapshot.paramMap.get("viaje"),km:o,grupo:this.active.snapshot.paramMap.get("id")}).subscribe(t=>{t.exe?t.number?(this.loadingService.finalizarCargado(),this.toastService.toastExitoso("Viaje actualizado correctamente, puedes revisar el kilometraje de tu grupo")):(this.loadingService.finalizarCargado(),this.toastService.toastError("Debe marcar el destino con el mismo celular que marc\xf3 el inicio del viaje")):(this.loadingService.finalizarCargado(),this.toastService.toastError("No se pudo actualizar el viaje, int\xe9ntelo m\xe1s tarde"))},t=>{this.loadingService.finalizarCargado(),this.toastService.toastError("No se pudo actualizar el viaje, int\xe9ntelo m\xe1s tarde")})},t=>{this.toastService.toastError("No se pudo capturar los kilometros, int\xe9ntelo m\xe1s tarde")}))})}]});yield t.present()})}eliminarfoto(t,e,o){return Object(s.a)(this,void 0,void 0,function*(){const i=yield this.alert.create({header:"\xbfQuieres eliminar esta foto?",message:"Se borrar\xe1 de forma permanente",buttons:[{text:"Cancelar",role:"cancel",cssClass:"cancelarAlerta"},{text:"Si, eliminar",cssClass:"botonalerta",handler:()=>Object(s.a)(this,void 0,void 0,function*(){const i=yield this.almacenamiento.obtenerToken();i&&this.apiGrupo.eliminarFoto(i.token,{id:t,ruta:e}).subscribe(t=>{t.exe?(this.fotos.splice(o,1),this.toastService.toastExitoso("Foto eliminada")):this.toastService.toastError("No se pudo eliminar la foto, int\xe9ntelo m\xe1s tarde")},t=>{this.toastService.toastError("No se pudo eliminar la foto, int\xe9ntelo m\xe1s tarde")})})}]});yield i.present()})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(l.a),c.Lb(d.a),c.Lb(u.a),c.Lb(p.a),c.Lb(n.g),c.Lb(n.a),c.Lb(b.a),c.Lb(h.a),c.Lb(r.b))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-interfazgrupo-viajes"]],viewQuery:function(t,e){if(1&t&&(c.Ac(g,1),c.Ac(f,1)),2&t){let t;c.oc(t=c.Xb())&&(e.fileUpload=t.first),c.oc(t=c.Xb())&&(e.mapa=t.first)}},decls:12,vars:3,consts:[["color","oscuro"],["slot","start","icon","chevron-back-outline","defaultHref","/interactivo/grupos"],["slot","end"],[3,"click"],["name","reload-outline","slot","icon-only"],["class","fcenter",4,"ngIf"],[4,"ngIf"],[1,"fcenter"],["src","/assets/No.png","width","100px","alt",""],["type","file","id","fileUpload","name","archivo","accept","image/*",2,"display","none"],["fileUpload",""],[1,"divider"],["color","light"],["mode","ios",1,"sinfondo"],["type","text","placeholder","Escribir nombre",3,"ngModel","ngModelChange"],[1,"ion-text-wrap"],[1,"cen"],["class","cen","mode","ios","color","light",3,"click",4,"ngIf"],["class","cen","mode","ios","color","light",4,"ngIf"],["class","flcenter ion-padding",4,"ngIf"],["mode","ios",4,"ngIf"],["color","light",4,"ngIf"],["class","mapa",4,"ngIf"],["mode","ios","color","light",1,"cen",3,"click"],["slot","start","name","location","color","danger"],["mode","ios","color","light",1,"cen"],["slot","start","name","location","color","barra"],[1,"flcenter","ion-padding"],["name","crescent","color","oscuro"],["mode","ios"],["mode","md"],[1,"mapa"],["mapa",""],["mode","ios","color","light","expand","block",1,"bt",3,"click"],["src","/assets/Camara.png","width","40px","alt",""],[1,"fotos"],["class","if",4,"ngFor","ngForOf"],[1,"if"],["alt","",3,"src"],["color","danger","mode","ios",3,"click"],["mode","ios","color","success","expand","block",3,"click",4,"ngIf"],["mode","ios","color","success","expand","block",3,"click"],["color","oscuro",3,"click"],["name","add-outline","slot","icon-only"]],template:function(t,e){1&t&&(c.Ob(0,"ion-header"),c.Ob(1,"ion-toolbar",0),c.Mb(2,"ion-back-button",1),c.Ob(3,"ion-title"),c.wc(4,"Mi viaje"),c.Nb(),c.Ob(5,"ion-buttons",2),c.Ob(6,"ion-button",3),c.Wb("click",function(){return e.refrescando()}),c.Mb(7,"ion-icon",4),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(8,"ion-content"),c.vc(9,m,4,0,"div",5),c.vc(10,T,6,2,"div",6),c.Nb(),c.vc(11,Y,7,0,"ion-footer",6)),2&t&&(c.Ab(9),c.fc("ngIf",e.cargado&&!e.mostrar),c.Ab(1),c.fc("ngIf",e.cargado&&e.mostrar),c.Ab(1),c.fc("ngIf",e.ubicacion&&""!==e.nombre&&e.latf&&e.lngf))},directives:[r.z,r.lb,r.g,r.h,r.jb,r.k,r.j,r.A,r.t,i.j,r.G,r.K,r.F,r.E,r.yb,a.i,a.k,r.cb,r.l,r.p,i.i,r.r,r.x],styles:[".cen[_ngcontent-%COMP%]{margin:20px 0}.cen[_ngcontent-%COMP%], .flcenter[_ngcontent-%COMP%]{display:flex;justify-content:center}.flcenter[_ngcontent-%COMP%]{align-items:center;flex-direction:column}ion-card[_ngcontent-%COMP%]{padding:20px}.bt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:15px}.fotos[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.fotos[_ngcontent-%COMP%]   .if[_ngcontent-%COMP%]{width:calc(50% - 10px);margin:5px;display:flex;flex-direction:column;align-items:center}.fotos[_ngcontent-%COMP%]   .if[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.mapa[_ngcontent-%COMP%]{margin:20px auto;width:90%;max-width:600px;height:400px;background-color:#f3f3f3}"]}),t})()}];let z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({imports:[[n.j.forChild(J)],n.j]}),t})(),$=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({imports:[[i.b,a.e,r.mb,z]]}),t})()},r3ab:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var i=o("mrSG"),a=o("fXoL"),r=o("TEn/");let n=(()=>{class t{constructor(t){this.loadingCtrl=t}cargaProcesos(t){return Object(i.a)(this,void 0,void 0,function*(){return this.loading=yield this.loadingCtrl.create({message:t}),this.loading.present()})}finalizarCargado(){this.loading.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(a.Sb(r.ob))},t.\u0275prov=a.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},vLoH:function(t,e,o){"use strict";o.d(e,"a",function(){return f});var i=o("tk/3"),a=o("PqYM"),r=o("Cfvw"),n=o("coGc"),s=o("lJxs"),c=o("IzEk"),l=o("MtjB"),d=o("JIr8"),u=o("AytR"),p=o("fXoL"),b=o("B7Rs"),h=o("fsfq"),g=o("TEn/");let f=(()=>{class t{constructor(t,e,o,i){this.http=t,this.transfer=e,this.almacenamiento=o,this.navCtrl=i}hanflerError(t){let e=0;return t.pipe(Object(n.a)(()=>Object(a.a)(5e3)),Object(s.a)(t=>{if(e++,console.log("Entramos a intentos"),t instanceof ErrorEvent){if(3===e)throw new Error("Error de Red")}else{if(!(t instanceof ProgressEvent))throw 404===t.status?new Error(" al realizar la solicictud "):401===t.status?(this.almacenamiento.terminarPartida().then(()=>{this.navCtrl.navigateRoot("/home")}),new Error("No tiene permisos para realizar la petici\xf3n ")):(console.log(t,"Error de servidor"),new Error(" No se pudo realizar la petici\xf3n, intentalo m\xe1s tarde "));if(3===e)throw new Error("Error de Red")}}),Object(c.a)(3))}crearGrupo(t,e){const o={headers:new i.c({"x-token":t})};return this.http.post(`${u.a}/grupos/crear`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}listarGrupos(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/lista`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}info(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/info`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}integrantes(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/integrantes`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}fotoPerfilUsuarioMoto(t,e,o,i){const a={fileKey:"archivo",httpMethod:"PUT",headers:{"x-token":t,"x-id":i},params:{tipo:o}},n=this.transfer.create();return Object(r.a)(n.upload(e,`${u.a}/upload/grupos`,a)).pipe(Object(d.a)(t=>{throw console.log("No se pudo subir la imagen "),new Error("No se pudo subir la imagen ")}))}subirweb(t,e,o){const a={headers:new i.c({"x-token":t,"x-id":o})};return this.http.put(`${u.a}/upload/grupos`,e,a).pipe(Object(l.a)(t=>this.hanflerError(t)))}leerProducto(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/filtrar`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}chat(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/chat`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}descarga(t,e){return this.http.get(`https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${e.coordsIniciales.lng},${e.coordsIniciales.lat};${e.coordsFinales.lng},${e.coordsFinales.lat}?geometries=geojson&steps=true&language=es&access_token=${t}`).pipe(Object(l.a)(t=>this.hanflerError(t)))}dibujar(t,e){return this.http.get(`https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${e.lng},${e.lat};${e.lngf},${e.latf}?geometries=geojson&steps=true&language=es&access_token=${t}`).pipe(Object(l.a)(t=>this.hanflerError(t)))}viaje(t,e){const o={headers:new i.c({"x-token":t})};return this.http.post(`${u.a}/grupos/viajes`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}irgrupo(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/bu`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}podio(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/podio`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}tabla(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/tabla`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}viajechao(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/viajes/eliminar`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}fotospodio(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/podio/fotos`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}viajeBuscarUno(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/buscar`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}viajeBuscar(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/viajes/filtrar`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}fotoviaje(t,e,o){const i={fileKey:"archivo",httpMethod:"PUT",headers:{"x-token":e,"x-viaje":o}},a=this.transfer.create();return Object(r.a)(a.upload(t,`${u.a}/grupos/viaje/upload`,i)).pipe(Object(d.a)(t=>{throw new Error("No se pudo subir la imagen ")}))}subirweb2(t,e,o){const a={headers:new i.c({"x-token":t,"x-viaje":o})};return this.http.put(`${u.a}/grupos/viaje/upload`,e,a).pipe(Object(l.a)(t=>this.hanflerError(t)))}fotosviaje(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/viaje/fotos`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}destino(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/viaje/destino`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}eliminarviaje(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/viaje/eliminar`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}eliminarFoto(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/viaje/eliminarfoto`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}km(t,e){const o={headers:new i.c({"x-token":t})};return this.http.put(`${u.a}/grupos/km`,e,o).pipe(Object(l.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(p.Sb(i.a),p.Sb(b.a),p.Sb(h.a),p.Sb(g.rb))},t.\u0275prov=p.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);