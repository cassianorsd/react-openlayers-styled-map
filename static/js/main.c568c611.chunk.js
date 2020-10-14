(this["webpackJsonpreact-openlayers-map-example"]=this["webpackJsonpreact-openlayers-map-example"]||[]).push([[0],{190:function(e,n,t){e.exports=t(235)},191:function(e,n,t){},235:function(e,n,t){"use strict";t.r(n);t(191);var a=t(1),o=t.n(a),r=t(41),i=t.n(r),l=t(103),c=function(e){var n=e.children;return o.a.createElement(l.a,{basename:"/react-openlayers-styled-map"},n)},s=t(32),u=t(57),d=t(22),p=t(111),f={darkBlue:"#1F3B4D"};function m(){var e=Object(u.a)(["\n  user-select:none;\n  text-decoration:none;\n  color:#000;\n  background-color: ",";\n  border-radius:5px;\n  padding: 3px 10px 3px;\n  display:flex;\n  flex-wrap:wrap;\n  justify-content:center;\n  align-items:center;\n  & + a {\n    margin-left:10px;\n  }\n  transition: background-color 300ms ease;\n  &:hover {\n    cursor:pointer;\n    background-color: ","\n  }\n\n"]);return m=function(){return e},e}function b(){var e=Object(u.a)(["\n  background-color:",";\n  height: 35px;\n  display:flex;\n  flex-wrap:wrap;\n  justify-content:flex-start;\n  align-items:center;\n  padding: 0px 10px 0px;\n"]);return b=function(){return e},e}function v(){var e=Object(u.a)(["\n  height:100vh;\n  display:flex;\n  flex-direction:column;\n  justify-content:stretch;\n  align-items:stretch;\n"]);return v=function(){return e},e}var g=d.b.div(v()),h=d.b.div(b(),f.darkBlue),y=Object(d.b)(l.b)(m(),Object(p.a)(.3,f.darkBlue),Object(p.a)(.5,f.darkBlue)),x=function(e){var n=e.children;return o.a.createElement(g,null,o.a.createElement(h,null,o.a.createElement(y,{to:"/"},"Map"),o.a.createElement(y,{to:"/blank"},"Blank Page"),o.a.createElement(y,{to:"/map-debug"},"Map Debug")),n)},E=function(){return o.a.createElement(x,null,"This is a blank page to test remount of map component")},w=t(133),O=t.n(w),j=t(255),k=t(168),C=t(253),L=(t(219),t(167)),M=t(160),S=t(161),z=t(101),A=t(5),D=t(56),N=t(116),P=t(114),B=t(90),I=t(115),T=t(76),K=t(112),R=t(118),F=t.n(R),G=t(156),V=t(134),_=t.n(V),Z=t(135),H=t(146),Y=t(254),J=t(157),q=t(67),W=t(45),U=t(73),X=t(95),Q=t(75),$=t(55),ee=t(61),ne=t(79),te=t(78),ae=t(38),oe=t(100),re=t(99),ie=t(3),le=t(165),ce=t(158),se=t.n(ce),ue=t(159);t(231);function de(){return(de=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function pe(e,n){return n||(n=e.slice(0)),e.raw=n,e}var fe={map:void 0,activeMenuControl:void 0},me={initMap:function(e,n){var t=n.id,a=n.startCoordinates,o=n.startZoom,r=n.defaultControls,i=n.defaultOSMBasemap,l=n.tileDebug;e.state.map&&e.state.map.setTarget(void 0);var c=document.getElementById(t);if(c){var s=[];(null===r||void 0===r?void 0:r.zoomButtons)&&s.push(new B.a(r.zoomButtons)),(null===r||void 0===r?void 0:r.scale)&&s.push(new P.a(r.scale)),(null===r||void 0===r?void 0:r.fullScreenMode)&&s.push(new I.a(r.fullScreenMode)),(null===r||void 0===r?void 0:r.zoomSlider)&&s.push(new N.a(r.zoomSlider));var u=document.getElementById("StyledMenu");if(u){u.id="styledMenuContainer";var d=new D.a({element:u});s.push(d)}var p=[];i&&p.push(new z.a({zIndex:1,source:new M.a})),l&&p.push(new z.a({zIndex:1e3,source:new S.a(l)}));var f=new j.a({target:c,layers:p,view:new k.a({center:Object(A.d)(a),zoom:o||10}),controls:s});e.actions.setActiveMenuControl(void 0),console.log("[MAP ENGINE] Started."),e.setState(de({},e.state,{map:f}))}},addLayer:function(e,n){var t=n.layerKey,a=n.layerObject;e.state.map&&(a.set("layerKey",t),e.actions.removeLayer({layerKey:t}),e.state.map.addLayer(a))},removeLayer:function(e,n){var t=n.layerKey,a=n.layerObject;e.state.map&&(a?e.state.map.removeLayer(a):t&&e.state.map.getLayers().getArray().filter((function(e){return e.get("layerKey")===t})).forEach((function(n){e.state.map&&e.state.map.removeLayer(n)})))},getLayer:function(e,n){if(e.state.map)return e.state.map.getLayers().getArray().find((function(e){return e.get("layerKey")===n}))||void 0},setActiveMenuControl:function(e,n){e.setState(de({},e.state,{activeMenuControl:n}))}},be=Object(L.a)(o.a,fe,me);function ve(){var e=be(),n=e[0],t=e[1];return{initMap:t.initMap,map:n.map,addLayer:t.addLayer,removeLayer:t.removeLayer,getLayer:t.getLayer,activeMenuControl:n.activeMenuControl,setActiveMenuControl:t.setActiveMenuControl}}function ge(){var e=pe(["\n  &.active {\n    background-color: #ffd700 !important;\n  }\n"]);return ge=function(){return e},e}function he(){var e=pe(["\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  position: relative;\n  left: -20px;\n  margin: 5px 0px 5px;\n  background-color: ",";\n  -webkit-transition: all 300ms ease;\n  -moz-transition: all 300ms ease;\n  -ms-transition: all 300ms ease;\n  -o-transition: all 300ms ease;\n  transition: all 300ms ease;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 5px 0px;\n  box-sizing: border-box;\n\n  .activeText {\n    font-size: 12px;\n    padding: 0px 5px 0px;\n    animation: "," 700ms;\n    line-height: 1em;\n  }\n\n  justify-content: ",";\n  width: ",";\n  left: ",";\n"]);return he=function(){return e},e}function ye(){var e=pe(["\n  from {\n    opacity:0;\n  }\n  to{\n\n    opacity:1;\n  }\n"]);return ye=function(){return e},e}function xe(){var e=pe(["\n  right: 0.5em;\n\n  svg {\n    display: block;\n    margin: auto;\n  }\n\n  /* &:not(.styled) {\n    left: -20px;\n    position: relative;\n    & + div {\n      margin: 5px 0px 0px;\n    }\n\n    svg {\n      height: 15px;\n      width: 15px;\n    }\n  } */\n"]);return xe=function(){return e},e}d.b.div(xe());var Ee=Object(d.c)(ye()),we=(d.b.div(he(),(function(e){var n=e.active,t=e.color;return n?"#FFD700":t||"grey"}),Ee,(function(e){var n=e.active,t=e.hasActiveLabel;return n&&t?"space-between":"center"}),(function(e){var n=e.active,t=e.hasActiveLabel,a=e.widthOnActive;return n&&t?(a||130)+"px":"30px"}),(function(e){var n=e.active,t=e.hasActiveLabel,a=e.widthOnActive;return n&&t?"-"+((a||130)-10)+"px":"-20px"})),d.b.button(ge()),function(e){var n=Object(A.l)(e.coordinate),t="https://www.google.com/maps?layer=c&cbll="+n[1]+","+n[0];window.open(t,"_blank")}),Oe=function(e){e.getViewport().style.cursor="crosshair",e.on("click",we)},je=function(e){e.getViewport().style.cursor="",e.un("click",we)};function ke(){var e=pe(["\n  left: -20px;\n  position: relative;\n\n  & + button {\n    margin-top: 10px;\n  }\n\n  &.styled {\n    display: inline-block;\n    min-width: 30px;\n    max-width: 30px;\n    width: max-content;\n    height: 30px;\n    border-radius: 15px;\n    transition: all 200ms ease;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    &.active {\n      background-color: #ffd700 !important;\n      overflow: visible;\n      svg {\n        color: #000 !important;\n      }\n      span.active-label {\n        max-width: 150px;\n        background-color: ",";\n        opacity: 1;\n        text-indent: 0%;\n        color: #000;\n        font-size: 12px;\n      }\n    }\n    span.active-label {\n      display: none;\n      width: max-content;\n      height: 30px;\n      max-width: 0px;\n      transition: all 200ms ease;\n      opacity: 0;\n      top: 0px;\n      position: absolute;\n      right: 35px;\n      color: transparent;\n      height: 30px;\n      overflow: hidden;\n      border-radius: 15px;\n      background-color: rgba(0, 0, 0, 0);\n      color: rgba(0, 0, 0, 0);\n      box-sizing: border-box;\n      padding: 2px 10px 2px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      line-height: 12px;\n      white-space: nowrap;\n      text-indent: 100%;\n      font-size: 0;\n      font-weight: 600;\n    }\n  }\n  ",";\n"]);return ke=function(){return e},e}var Ce=d.b.button(ke(),Object(K.b)("#ffd700",.8),(function(e){var n=e.color;return n?"background-color: "+n+"!important;":""})),Le=function(e){var n=e.children,t=e.styled,r=e.icon,i=e.color,l=e.controlKey,c=e.disable,s=e.enable,u=e.activeLabel,d=e.loading,p=Object(a.useState)(!1),f=p[0],m=p[1],b=ve(),v=b.setActiveMenuControl,g=b.activeMenuControl,h=Object(a.useCallback)((function(){v(f?void 0:l)}),[f,v,l]);return Object(a.useEffect)((function(){g!==l||f?g!==l&&f&&(m(!1),c&&c()):(m(!0),s&&s())}),[g,l,f,s,c]),o.a.createElement(Ce,{className:(t?"styled":"")+" "+(f?"active":""),color:i,onClick:h,hasActiveLabel:!!u},u&&o.a.createElement("span",{className:"active-label"},u),d&&o.a.createElement(O.a,{name:"circle",color:"#fff",fadeIn:"quarter"}),!d&&r&&r,n)},Me=function(e,n){e.once("rendercomplete",(function(){F()(e.getViewport()).then((function(e){e.toBlob((function(e){e&&(Object(G.saveAs)(e,"map.png"),n())}))}))})),e.renderSync()};function Se(){var e=pe(["\n  margin-top: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n"]);return Se=function(){return e},e}function ze(){var e=pe(["\n  padding: 5px;\n"]);return ze=function(){return e},e}function Ae(){var e=pe(["\n  text-align: center;\n  background-color: #ff073a;\n  color: #fff;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: background-color 300ms ease;\n  margin-left: auto;\n  &:hover {\n    background-color: ",";\n  }\n"]);return Ae=function(){return e},e}function De(){var e=pe(["\n  text-align: center;\n  flex-basis: 85%;\n"]);return De=function(){return e},e}function Ne(){var e=pe(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n"]);return Ne=function(){return e},e}function Pe(){var e=pe(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  min-height: 250px;\n  min-width: 250px;\n  max-width: 300px;\n"]);return Pe=function(){return e},e}var Be=d.b.div(Pe()),Ie=d.b.div(Ne()),Te=d.b.h3(De()),Ke=d.b.button(Ae(),Object(K.a)(.1,"#ff073a")),Re=d.b.form(ze()),Fe=d.b.div(Se()),Ge=function(e){var n=e.map,t=e.startCallback,a=e.endCallback,o=e.pageDimmentions,r=e.orientation,i=e.pageSize;t&&t(),n.once("rendercomplete",(function(){F()(n.getViewport()).then((function(e){var t=new J.a(r,void 0,i),l=o,c=n.getSize(),s=Math.max(c[1]/(("landscape"===r?l[1]:l[0])-20),c[0]/(("landscape"===r?l[0]:l[1])-20)),u=[c[0]/s,c[1]/s],d=[Math.abs((("landscape"===r?l[0]:l[1])-u[0])/2),Math.abs((("landscape"===r?l[1]:l[0])-u[1])/2)],p=d[0],f=d[1];t.addImage(e.toDataURL("image/jpeg"),"JPEG",p,f,u[0],u[1]),t.save("map.pdf"),a&&a()}))})),n.renderSync()},Ve={content:{padding:"5px",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"10px"}};_.a.setAppElement("#root");var _e,Ze,He,Ye,Je,qe,We,Ue,Xe,Qe,$e,en,nn,tn,an,on,rn=[{value:"A3",label:"A3"},{value:"A4",label:"A4"},{value:"A5",label:"A5"}],ln={A0:[1189,841],A1:[841,594],A2:[594,420],A3:[420,297],A4:[297,210],A5:[210,148]},cn=[{value:"landscape",label:"Paisagem"},{value:"portrait",label:"Retrato"}],sn=function(e){var n=e.isOpen,t=e.onClose,r=e.options,i=ve(),l=i.map,c=i.setActiveMenuControl,s=Object(Z.b)(),u=s.control,d=s.handleSubmit,p=Object(a.useState)(!1),f=p[0],m=p[1],b=d((function(e){var n=e.orientation,a=e.pageSize;n&&a&&l&&Ge({map:l,orientation:n.value,pageSize:a.value,pageDimmentions:(null===r||void 0===r?void 0:r.pageSizesDimmentions)?r.pageSizesDimmentions[a.value]:ln[a.value],startCallback:function(){m(!0)},endCallback:function(){c(void 0),m(!1),t()}})}));return o.a.createElement("div",null,o.a.createElement(_.a,{isOpen:n,onRequestClose:t,contentLabel:"Example Modal",style:Ve},o.a.createElement(Be,null,o.a.createElement(Ie,null,o.a.createElement(Te,null,"Export PDF"),o.a.createElement(Ke,{onClick:t},o.a.createElement(T.h,{size:20}))),o.a.createElement(Re,{onSubmit:b},o.a.createElement("span",null,"P\xe1gina:"),o.a.createElement(Z.a,{name:"pageSize",as:o.a.createElement(H.a,null),options:(null===r||void 0===r?void 0:r.pageSizes)||rn,control:u,defaultValue:{value:"A4",label:"A4"}}),o.a.createElement("span",null,"Orienta\xe7\xe3o:"),o.a.createElement(Z.a,{name:"orientation",as:o.a.createElement(H.a,null),options:(null===r||void 0===r?void 0:r.pageOrientations)||cn,control:u,defaultValue:{value:"landscape",label:"Paisagem"}})),o.a.createElement(Fe,null,o.a.createElement(Y.a,{color:"green",onClick:b},"Gerar"),o.a.createElement(Y.a,{color:"red",onClick:t},"Cancelar")))),o.a.createElement(_.a,{isOpen:f,style:Ve},o.a.createElement("div",{style:{width:"200px",height:"120px",borderRadius:"5px",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}},o.a.createElement(O.a,{name:"line-scale-pulse-out-rapid",color:"green",fadeIn:"none",style:{transform:"scale(1.5)"}}),o.a.createElement("span",null,"Gerando PDF..."))))},un=[],dn=function(e){if(!e.dragging){var n="Click to start drawing";if(_e){var t=_e.getGeometry();t instanceof W.a?n="Click to continue drawing the polygon":t instanceof q.a&&(n="Click to continue drawing the line")}Ze.innerHTML=n,He.setPosition(e.coordinate),Ze.classList.remove("hidden")}},pn=function(e){var n=e.map,t=e.source,a=e.type;function o(){Ye&&Ye.parentNode&&Ye.parentNode.removeChild(Ye),(Ye=document.createElement("div")).className="ol-tooltip ol-tooltip-measure",Je=new C.a({element:Ye,offset:[0,-15],positioning:ae.a.BOTTOM_CENTER}),un.push(Je),n.addOverlay(Je)}n.on("pointermove",dn),n.getViewport().addEventListener("mouseout",(function(){Ze.classList.add("hidden")})),function(){var e;qe=new X.a({source:t,type:a,style:new Q.c({fill:new $.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new ee.a({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new ne.a({radius:5,stroke:new ee.a({color:"rgba(0, 0, 0, 0.7)"}),fill:new $.a({color:"rgba(255, 255, 255, 0.2)"})})})}),n.addInteraction(qe),o(),Ze&&Ze.parentNode&&Ze.parentNode.removeChild(Ze),(Ze=document.createElement("div")).className="ol-tooltip hidden",He=new C.a({element:Ze,offset:[15,0],positioning:ae.a.CENTER_LEFT}),n.addOverlay(He),qe.on("drawstart",(function(n){_e=n.feature;var t=n.coordinate;e=_e.getGeometry().on("change",(function(e){var n,a=e.target;a instanceof W.a?(n=function(e){var n=Object(U.a)(e);return n>1e4?Math.round(n/1e6*100)/100+" km<sup>2</sup>":Math.round(100*n)/100+" m<sup>2</sup>"}(a),t=a.getInteriorPoint().getCoordinates()):a instanceof q.a&&(n=function(e){var n=Object(U.c)(e);return n>100?Math.round(n/1e3*100)/100+" km":Math.round(100*n)/100+" m"}(a),t=a.getLastCoordinate()),Ye&&(Ye.innerHTML=n||"",Je.setPosition(t))}))})),qe.on("drawend",(function(){Ye&&(Ye.className="ol-tooltip ol-tooltip-static",Je.setOffset([0,-7])),_e=null,Ye=null,o(),Object(te.b)(e)}))}()},fn=function(e){var n=e.map;n.removeInteraction(qe),n.removeOverlay(He)},mn=function(e){var n=e.map;un.forEach((function(e){n.removeOverlay(e)}))},bn=[],vn=function(e){if(!e.dragging){var n="Click to start drawing";if(We){var t=We.getGeometry();t instanceof W.a?n="Click to continue drawing the polygon":t instanceof q.a&&(n="Click to continue drawing the line")}Ue.innerHTML=n,Xe.setPosition(e.coordinate),Ue.classList.remove("hidden")}},gn=function(e){var n=e.map,t=e.source,a=e.type;function o(){Qe&&Qe.parentNode&&Qe.parentNode.removeChild(Qe),(Qe=document.createElement("div")).className="ol-tooltip ol-tooltip-measure",$e=new C.a({element:Qe,offset:[0,-15],positioning:ae.a.BOTTOM_CENTER}),bn.push($e),n.addOverlay($e)}n.on("pointermove",vn),n.getViewport().addEventListener("mouseout",(function(){Ue.classList.add("hidden")})),function(){var e;en=new X.a({source:t,type:a,style:new Q.c({fill:new $.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new ee.a({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new ne.a({radius:5,stroke:new ee.a({color:"rgba(0, 0, 0, 0.7)"}),fill:new $.a({color:"rgba(255, 255, 255, 0.2)"})})})}),n.addInteraction(en),o(),Ue&&Ue.parentNode&&Ue.parentNode.removeChild(Ue),(Ue=document.createElement("div")).className="ol-tooltip hidden",Xe=new C.a({element:Ue,offset:[15,0],positioning:ae.a.CENTER_LEFT}),n.addOverlay(Xe),en.on("drawstart",(function(n){We=n.feature;var t=n.coordinate;e=We.getGeometry().on("change",(function(e){var n,a=e.target;a instanceof W.a?(n=function(e){var n=Object(U.a)(e);return n>1e4?Math.round(n/1e6*100)/100+" km<sup>2</sup>":Math.round(100*n)/100+" m<sup>2</sup>"}(a),t=a.getInteriorPoint().getCoordinates()):a instanceof q.a&&(n=function(e){var n=Object(U.c)(e);return n>100?Math.round(n/1e3*100)/100+" km":Math.round(100*n)/100+" m"}(a),t=a.getLastCoordinate()),Qe&&(Qe.innerHTML=n||"",$e.setPosition(t))}))})),en.on("drawend",(function(){Qe&&(Qe.className="ol-tooltip ol-tooltip-static",$e.setOffset([0,-7])),We=null,Qe=null,o(),Object(te.b)(e)}))}()},hn=function(e){var n=e.map;n.removeInteraction(en),n.removeOverlay(Xe)},yn=function(e){var n=e.map;bn.forEach((function(e){n.removeOverlay(e)}))},xn=[],En=function(e){var n=e.map,t=e.source;nn=new X.a({source:t,type:ie.a.CIRCLE});n.addInteraction(nn),nn.on("drawstart",(function(e){var t=e.feature.getGeometry();(tn=document.createElement("div")).className="ol-tooltip",an=new C.a({element:tn,offset:[15,0],positioning:ae.a.CENTER_LEFT}),xn.push(an),n.addOverlay(an),on=n.on("pointermove",(function(e){var n=t.getCenter(),a=t.getRadius(),o=[n[0]+a,n[1]],r=Object(U.b)(Object(A.o)(n,"EPSG:3857","EPSG:4326"),Object(A.o)(o,"EPSG:3857","EPSG:4326"));tn&&(tn.innerHTML=r.toFixed(2)+"m"),an.setPosition(e.coordinate)}))})),nn.on("drawend",(function(){tn&&(tn.className="ol-tooltip ol-tooltip-static-measure-circle"),tn=null,on&&Object(te.b)(on)}))},wn=function(e){e.map.removeInteraction(nn)},On=function(e){var n=e.map;xn.forEach((function(e){n.removeOverlay(e)}))};function jn(){var e=pe(["\n  min-width: 30px;\n  height: 40px;\n  font-size: 12px;\n  border-radius: 5px;\n  border: none;\n  padding: 5px;\n  background-color: #9acd32;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  transition: background-color 300ms ease;\n  &:hover {\n    background-color: ",";\n  }\n"]);return jn=function(){return e},e}function kn(){var e=pe(["\n  position: absolute;\n  background-color: white;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  padding: 15px;\n  border-radius: 10px;\n  border: 1px solid #cccccc;\n  bottom: 12px;\n  left: -50px;\n  min-width: 180px;\n  animation: "," 300ms;\n\n  &:after,\n  &:before {\n    top: 100%;\n    border: solid transparent;\n    content: ' ';\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n  }\n\n  &:after {\n    border-top-color: white;\n    border-width: 10px;\n    left: 48px;\n    margin-left: -10px;\n  }\n\n  &:before {\n    border-top-color: #cccccc;\n    border-width: 11px;\n    left: 48px;\n    margin-left: -11px;\n  }\n"]);return kn=function(){return e},e}function Cn(){var e=pe(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 20px;\n  height: 20px;\n  background-color: #ee3e3e;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  padding: 0px;\n  margin: 0px;\n  transition: all 300ms ease;\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n  }\n  .svg {\n    display: block;\n    margin: auto;\n  }\n"]);return Cn=function(){return e},e}function Ln(){var e=pe([""]);return Ln=function(){return e},e}function Mn(){var e=pe(["\nfrom {\n  opacity:0;\n  transform: translateY(50px);\n}\nto {\n  opacity:1;\n  transform: translateY(0px);\n}\n"]);return Mn=function(){return e},e}var Sn=Object(d.c)(Mn()),zn=d.b.div(Ln()),An=d.b.span(Cn(),Object(K.a)(.1,"#ee3e3e")),Dn=d.b.div(kn(),Sn),Nn=d.b.button(jn(),Object(K.a)(.1,"#9ACD32")),Pn=function(e){var n=e.onClose,t=e.position,r=Object(a.useCallback)((function(e){ue.a.success("Copied: "+e)}),[]);return o.a.createElement(Dn,null,o.a.createElement(An,{onClick:n},o.a.createElement(T.h,{size:16})),o.a.createElement(zn,null,o.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},o.a.createElement("div",null,o.a.createElement("b",null,"Location:")),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%"}},o.a.createElement("div",{style:{flexBasis:"75%",display:"flex",flexDirection:"column",width:"100%"}},o.a.createElement("span",null,o.a.createElement("b",null,"Lon:")," ",Object(A.l)(t)[0].toFixed(4)),o.a.createElement("span",null,o.a.createElement("b",null,"Lat:")," ",Object(A.l)(t)[1].toFixed(4))),o.a.createElement("div",{style:{flexBasis:"25%",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(se.a,{text:Object(A.l)(t)[1].toFixed(5)+", "+Object(A.l)(t)[0].toFixed(5),onCopy:r},o.a.createElement(Nn,null,o.a.createElement(T.e,{size:20}),o.a.createElement("span",null,"Copy"))))))))},Bn=[];var In,Tn={addPopup:function(e){var n=e.map,t=e.position,a=e.options,r=document.createElement("div"),l=new C.a({element:r,autoPan:!0,autoPanAnimation:{duration:250}});(null===a||void 0===a?void 0:a.clearOthers)&&Bn.forEach((function(e){return n.removeOverlay(e)})),Bn.push(l),n.addOverlay(l),l.setPosition(t),i.a.render(o.a.createElement(Pn,{position:t,onClose:function(){l.setPosition(void 0),n.removeOverlay(l)}}),r)},clearOverlays:function(e){Bn.forEach((function(n){return e.removeOverlay(n)}))}},Kn=function(e){e.getViewport().style.cursor="crosshair",In=e.on("singleclick",(function(n){var t=n.coordinate;Tn.addPopup({map:e,position:t,options:{clearOthers:!0}})}))},Rn=function(e){e.getViewport().style.cursor="",Tn.clearOverlays(e),In&&Object(te.b)(In)},Fn=function(e){var n=e.styled,t=e.activeLabel,r=e.children,i=e.color,l=e.icon,c=ve().map,s=Object(a.useCallback)((function(){c&&Oe(c)}),[c]),u=Object(a.useCallback)((function(){c&&je(c)}),[c]);return o.a.createElement(Le,{styled:!!n,icon:l||o.a.createElement(T.g,{size:20,color:"#fff"}),color:i||"#FE2C54",activeLabel:t||"Google Street View",controlKey:"GoogleStreetView",enable:s,disable:u},r)},Gn=function(e){var n=e.styled,t=e.activeLabel,r=e.icon,i=e.color,l=Object(a.useState)(!1),c=l[0],s=l[1],u=ve(),d=u.map,p=u.setActiveMenuControl,f=Object(a.useCallback)((function(){d&&(s(!0),Me(d,(function(){p(void 0),s(!1)})))}),[d,p]),m=Object(a.useCallback)((function(){p(void 0),s(!1)}),[p]);return o.a.createElement(Le,{styled:n,icon:r||o.a.createElement(T.c,{size:20,color:"#fff"}),activeLabel:t||"",color:i||"#9ACD32",controlKey:"ExportMapImage",loading:c,enable:f,disable:m})},Vn=function(e){var n=e.styled,t=e.activeLabel,r=e.icon,i=e.color,l=e.options,c=Object(a.useState)(!1),s=c[0],u=c[1],d=ve().setActiveMenuControl,p=Object(a.useCallback)((function(){u(!0)}),[]),f=Object(a.useCallback)((function(){}),[]),m=Object(a.useCallback)((function(){u(!1),d(void 0)}),[d]);return o.a.createElement(Le,{styled:n,icon:r||o.a.createElement(T.b,{size:20,color:"#fff"}),activeLabel:t||"",color:i||"#9ACD32",controlKey:"ExportMapPDF",enable:p,disable:f,loading:s},o.a.createElement(sn,{isOpen:s,onClose:m,options:l}))},_n=function(e){var n=e.styled,t=e.activeLabel,r=e.icon,i=e.color,l=Object(a.useState)(new oe.a)[0],c=Object(a.useState)(new re.a({zIndex:1e3,source:l,style:new Q.c({fill:new $.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new ee.a({color:"#ffcc33",width:2}),image:new ne.a({radius:7,fill:new $.a({color:"#ffcc33"})})})}))[0],s=ve(),u=s.map,d=s.addLayer;Object(a.useEffect)((function(){u&&d({layerKey:"measureDistance",layerObject:c})}),[u,d,c]);var p=Object(a.useCallback)((function(){u&&l&&pn({map:u,source:l,type:ie.a.LINE_STRING})}),[u,l]),f=Object(a.useCallback)((function(){u&&fn({map:u})}),[u]);return o.a.createElement(Le,{styled:n,icon:r||o.a.createElement(T.f,{size:20,color:"#fff"}),activeLabel:t||"Measure Distance",color:i||"#446CD5",controlKey:"MeasureDistance",enable:p,disable:f})},Zn=function(e){var n=e.styled,t=e.activeLabel,r=e.icon,i=e.color,l=Object(a.useState)(new oe.a)[0],c=Object(a.useState)(new re.a({zIndex:1e3,source:l,style:new Q.c({fill:new $.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new ee.a({color:"#ffcc33",width:2}),image:new ne.a({radius:7,fill:new $.a({color:"#ffcc33"})})})}))[0],s=ve(),u=s.map,d=s.addLayer;Object(a.useEffect)((function(){u&&d({layerKey:"measureArea",layerObject:c})}),[u,d,c]);var p=Object(a.useCallback)((function(){u&&l&&gn({map:u,source:l,type:ie.a.POLYGON})}),[u,l]),f=Object(a.useCallback)((function(){u&&hn({map:u})}),[u]);return o.a.createElement(Le,{styled:n,icon:r||o.a.createElement(T.a,{size:20,color:"#fff"}),activeLabel:t||"Measure Area",color:i||"#446CD5",controlKey:"MeasureArea",enable:p,disable:f})},Hn=function(e){var n=e.styled,t=e.activeLabel,r=e.icon,i=e.color,l=Object(a.useState)(!1),c=l[0],s=l[1],u=ve(),d=u.setActiveMenuControl,p=u.map,f=u.getLayer,m=Object(a.useCallback)((function(){p&&(s(!0),setTimeout((function(){var e=function(e){var n=f(e);n&&n.getSource().clear()};e("measureDistance"),e("measureArea"),e("measureRadius"),yn({map:p}),mn({map:p}),On({map:p}),d(void 0)}),750))}),[d,f,p]),b=Object(a.useCallback)((function(){s(!1)}),[]);return o.a.createElement(Le,{styled:n,icon:r||o.a.createElement(T.i,{size:20,color:"#fff"}),activeLabel:t||"Limpando Medidas",color:i||"#446CD5",enable:m,disable:b,controlKey:"ClearMeasures",loading:c})},Yn=function(e){var n=e.styled,t=e.activeLabel,r=e.icon,i=e.color,l=Object(a.useState)(new oe.a)[0],c=Object(a.useState)(new re.a({zIndex:1e3,source:l,style:new Q.c({fill:new $.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new ee.a({color:"#ffcc33",width:2}),image:new ne.a({radius:7,fill:new $.a({color:"#ffcc33"})})})}))[0],s=ve(),u=s.map,d=s.addLayer;Object(a.useEffect)((function(){u&&d({layerKey:"measureRadius",layerObject:c})}),[u,d,c]);var p=Object(a.useCallback)((function(){u&&l&&En({map:u,source:l})}),[u,l]),f=Object(a.useCallback)((function(){u&&wn({map:u})}),[u]);return o.a.createElement(Le,{styled:n,icon:r||o.a.createElement(le.a,{size:20,color:"#fff"}),activeLabel:t||"Measure Radius",color:i||"#446CD5",controlKey:"MeasureRadius",enable:p,disable:f})},Jn=function(e){var n=e.styled,t=e.activeLabel,r=e.icon,i=e.color,l=ve().map,c=Object(a.useCallback)((function(){l&&Kn(l)}),[l]),s=Object(a.useCallback)((function(){l&&Rn(l)}),[l]);return o.a.createElement(Le,{styled:n,icon:r||o.a.createElement(T.d,{size:20,color:"#fff"}),activeLabel:t||"Pin Coordinates",color:i||"#FF8C00",controlKey:"PinCoordinates",enable:c,disable:s})};function qn(){var e=pe(["\n  width: ",";\n  height: ",";\n"]);return qn=function(){return e},e}var Wn=d.b.div(qn(),(function(e){return e.width}),(function(e){return e.height}));function Un(){var e=pe(['\n.ol-tooltip {\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  color: white;\n  padding: 4px 8px;\n  opacity: 0.7;\n  white-space: nowrap;\n  font-size: 12px;\n}\n.ol-tooltip-measure {\n  opacity: 1;\n  font-weight: bold;\n}\n.ol-tooltip-static {\n  background-color: #ffcc33;\n  color: black;\n  border: 1px solid white;\n}\n.ol-tooltip-measure:before,\n.ol-tooltip-static:before {\n  border-top: 6px solid rgba(0, 0, 0, 0.5);\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n  content: "";\n  position: absolute;\n  bottom: -6px;\n  margin-left: -7px;\n  left: 50%;\n}\n.ol-tooltip-static:before {\n  border-top-color: #ffcc33;\n}\n\n.ol-tooltip-static-measure-circle {\n  background-color: #ffcc33;\n  color: black;\n  border: 1px solid white;\n}\n\n.ol-tooltip-static-measure-circle:before {\n  border-top-color: #ffcc33;\n}\n\n']);return Un=function(){return e},e}var Xn=Object(d.a)(Un());function Qn(){var e=pe(["\n  top: 50px;\n  right: 0px;\n  width: 15px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 10px 0px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 0px;\n\n  background-color: rgba(0, 0, 0, 0);\n\n  &.ribbon {\n    background-color: rgba(255, 255, 255, 0.8);\n  }\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  &.ribbon:hover {\n    background-color: rgba(255, 255, 255, 0.8);\n  }\n"]);return Qn=function(){return e},e}var $n=d.b.div(Qn()),et=function(e){var n=e.showRibbon,t=void 0===n||n,a=e.children;return a?o.a.createElement($n,{id:"StyledMenu",className:"ol-control "+(t?"ribbon":"")},a):o.a.createElement("span",null)};function nt(){var e=pe(["\n  top: 50px;\n  right: 0px;\n  width: 15px;\n  height: auto;\n  max-height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 10px 0px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 0px;\n\n  background-color: rgba(0, 0, 0, 0);\n\n  &.ribbon {\n    background-color: rgba(255, 255, 255, 0.8);\n  }\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  &.ribbon:hover {\n    background-color: rgba(255, 255, 255, 0.8);\n  }\n"]);return nt=function(){return e},e}var tt=d.b.div(nt()),at=function(e){var n=e.height,t=e.width,r=e.id,i=e.osmBasemap,l=e.defaultControls,c=e.controlsMenu,s=e.startZoom,u=e.startCoordinates,d=e.tileDebug,p=e.children,f=ve().initMap;return Object(a.useEffect)((function(){f({id:r||"map",startCoordinates:u||[0,0],startZoom:s,defaultControls:l,defaultOSMBasemap:i,tileDebug:d})}),[r,i,l,f,u,s,d]),o.a.createElement(Wn,{height:n||"100%",width:t||"100%"},o.a.createElement("div",{id:r||"map",style:{width:"100%",height:"100%"}}),c&&o.a.createElement(et,Object.assign({},c)),p,o.a.createElement(Xn,null))};at.Controls=function(e){var n=e.showRibbon,t=void 0===n||n,a=e.children;return a?o.a.createElement(tt,{id:"StyledMenu",className:"ol-control "+(t?"ribbon":"")},a):o.a.createElement("span",null)};function ot(){var e=Object(u.a)(["\n\n  height:100%;\n"]);return ot=function(){return e},e}var rt=d.b.div(ot()),it=function(){return o.a.createElement(x,null,o.a.createElement(rt,null,o.a.createElement(at,{osmBasemap:!0,defaultControls:{fullScreenMode:{},scale:{bar:!0,minWidth:100},zoomButtons:{},zoomSlider:{}},startCoordinates:[-49.2,-26.5],startZoom:11},o.a.createElement(at.Controls,{showRibbon:!0},o.a.createElement(Fn,{styled:!0}),o.a.createElement(Gn,{styled:!0}),o.a.createElement(Vn,{styled:!0}),o.a.createElement(Zn,{styled:!0}),o.a.createElement(_n,{styled:!0}),o.a.createElement(Yn,{styled:!0}),o.a.createElement(Hn,{styled:!0}),o.a.createElement(Jn,{styled:!0})))))},lt=t(166);function ct(){var e=Object(u.a)(["\n  height:100%;\n  box-sizing:border-box;\n  width:300px;\n  border-left:2px solid black;\n"]);return ct=function(){return e},e}function st(){var e=Object(u.a)(["\n  height:",";\n  box-sizing:border-box;\n  margin-left:auto;\n  margin-right:auto;\n  min-width:320px;\n  flex-grow:2;\n"]);return st=function(){return e},e}function ut(){var e=Object(u.a)(["\n  height:100%;\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  flex-wrap:wrap;\n"]);return ut=function(){return e},e}var dt=d.b.div(ut()),pt=d.b.section(st(),lt.isMobile?"90%":"100%"),ft=d.b.section(ct()),mt=t(69);function bt(){var e=Object(u.a)(["\n  padding:5px;\n"]);return bt=function(){return e},e}var vt=d.b.div(bt()),gt=function(){var e=Object(a.useState)(!1),n=Object(mt.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(!1),l=Object(mt.a)(i,2),c=l[0],s=l[1],u=ve(),d=u.addLayer,p=u.removeLayer;Object(a.useEffect)((function(){r(!0),s(!0)}),[]);var f=Object(a.useCallback)((function(e){r(e.target.checked)}),[]),m=Object(a.useCallback)((function(e){s(e.target.checked)}),[]);return Object(a.useEffect)((function(){t?d({layerKey:"tileDebug",layerObject:new z.a({zIndex:1e3,source:new S.a})}):p({layerKey:"tileDebug"})}),[d,p,t]),Object(a.useEffect)((function(){c?d({layerKey:"osmBasemap",layerObject:new z.a({zIndex:1,source:new M.a})}):p({layerKey:"osmBasemap"})}),[d,p,c]),o.a.createElement(vt,null,o.a.createElement("input",{id:"tileDebug",name:"tileDebug",type:"checkbox",checked:t,onChange:f}),o.a.createElement("label",{htmlFor:"tileDebug"},"  XYZ Tile Debug"),o.a.createElement("br",null),o.a.createElement("input",{id:"osmBasemap",name:"osmBasemap",type:"checkbox",checked:c,onChange:m}),o.a.createElement("label",{htmlFor:"osmBasemap"},"OSM Basemap"),o.a.createElement("br",null))},ht=function(){return o.a.createElement(x,null,o.a.createElement(dt,null,o.a.createElement(pt,null,o.a.createElement(at,{defaultControls:{fullScreenMode:{},scale:{bar:!0,minWidth:100},zoomButtons:{},zoomSlider:{}},startCoordinates:[-49.2,-26.5],startZoom:11},o.a.createElement(at.Controls,{showRibbon:!0},o.a.createElement(Fn,{styled:!0}),o.a.createElement(Gn,{styled:!0}),o.a.createElement(Vn,{styled:!0}),o.a.createElement(Zn,{styled:!0}),o.a.createElement(_n,{styled:!0}),o.a.createElement(Yn,{styled:!0}),o.a.createElement(Hn,{styled:!0}),o.a.createElement(Jn,{styled:!0})))),o.a.createElement(ft,null,o.a.createElement(gt,null))))},yt=function(){return o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/blank",component:E}),o.a.createElement(s.a,{path:"/map-debug",component:ht}),o.a.createElement(s.a,{path:"/",component:it}))};function xt(){var e=Object(u.a)(["\n  body {\n    background-color:",";\n  }\n"]);return xt=function(){return e},e}var Et=Object(d.a)(xt(),Object(p.b)(f.darkBlue,.03));var wt=function(){return o.a.createElement(c,null,o.a.createElement(yt,null),o.a.createElement(Et,null))};i.a.render(o.a.createElement(wt,null),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.c568c611.chunk.js.map