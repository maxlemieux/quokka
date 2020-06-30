(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(21),c=a.n(r),o=a(10),i=a(9),s=a.n(i),m=a(67),u=a(8),p={getPlants:()=>s.a.get("/api/plants"),getPlant:e=>s.a.get("/api/plants/".concat(e)),deletePlant:e=>s.a.delete("/api/plants/".concat(e)),savePlant:e=>s.a.post("/api/plants",e),searchPlantName:e=>s.a.get("/api/plants/species/".concat(e)),findRecent:()=>s.a.get("/api/plants/recent"),plantDetails:e=>s.a.get("/api/trefle/species/".concat(e))},d=a(111),E=a(105),g=a(106);var h=function({children:e}){return l.a.createElement("div",{style:{height:175,clear:"both",paddingTop:30,textAlign:"center",boxShadow:"0px 5px 5px 3px #F3969A",border:"3px solid #78C2AD"},className:"jumbotron"},e)};function f({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function x({fluid:e,children:t}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":"")},t)}function b({size:e,children:t}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-".concat(e)).join(" ")},t)}function v(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}a(90);function y(e){return l.a.createElement("div",null,l.a.createElement("ul",{style:{paddingInlineStart:"0px"}},e.data.map(e=>l.a.createElement("li",{className:"list-overflow-container",key:e._id},e.images[0]&&l.a.createElement("img",{width:"100%",src:e.images[0].url,alt:e.scientific_name}),e.user_name," quokked ",e.common_name?e.common_name:e.scientific_name))))}a(91),a(92);function w({children:e}){return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},e))}function N({children:e}){return l.a.createElement("li",{className:"list-group-item"},e)}a(93);function j(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"spinner d"},l.a.createElement("svg",{className:"logo",width:"42px",height:"27px",viewBox:"0 0 42 27",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},l.a.createElement("path",{d:"M27.2861584,12.161723 C21.878637,13.1079515 17.6922039,20.3685835 15.4747077,25.1841521 C13.3245071,4.20375459 42,0 42,0 C42,0 37.9221081,28.5085611 15.7102421,26.9373612 L27.2861584,12.161723 Z M9.68859135,25.3642259 L4.07597867,14.6643189 C3.16588397,18.4076368 6.95830724,23.2066496 9.14123129,25.5907604 C-4.2897248,21.7286768 1.04594976,3.21222934 1.04594976,3.21222934 C1.04594976,3.21222934 15.98106,12.9521138 9.68859135,25.3642259 Z",id:"",fill:"#00ba69"}))))}function O(e){return l.a.createElement(l.a.Fragment,null,e.showSpinner&&l.a.createElement("div",null,l.a.createElement(j,null)),e.searchResults[0]&&l.a.createElement("div",{className:"list-overflow-container",style:{paddingTop:"20px",marginTop:"30px"}},l.a.createElement("p",null,"Results for postal code ",e.userZip," (autodetected from public IP address ",e.userIp,")"),l.a.createElement("ul",{className:"list-group"},e.searchResults&&e.searchResults.map(t=>l.a.createElement(k,{userName:e.userName,userIp:e.userIp,loadActivityFeed:e.loadActivityFeed,loadFavorites:e.loadFavorites,result:t,key:t.id})))))}function k(e){const t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1];return p.getPlant(e.result.id).then(e=>{e.data.exists?c(!0):c(!1)}).catch(e=>e),l.a.createElement("li",{className:"list-group-item"},l.a.createElement(w,null,e.result.common_name&&l.a.createElement(N,null,l.a.createElement("b",null,e.result.common_name)),l.a.createElement(N,null,"Scientific Name: ",e.result.scientific_name),l.a.createElement("div",{style:{margin:"auto",paddingTop:"20px"}},!r&&l.a.createElement("button",{onClick:()=>{return t=e.result.id,void p.plantDetails(t).then(t=>{t.data.user_name=e.userName,t.data.ip=e.userIp,t.data.trefle_id=t.data.id,p.savePlant(t.data).then(()=>{e.loadFavorites(),e.loadActivityFeed()})}).catch(e=>e);var t}},l.a.createElement("i",{className:"fa fa-leaf",style:{color:"green",padding:"5px"},icon:"leaf"}," Save to Favs")),r&&l.a.createElement("strong",null,"Favorite! This plant is on your list."))))}a(94),a(95);var S=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};function C({deleteFavorite:e,favorites:t}){return t.length?l.a.createElement(w,null,t.map(t=>l.a.createElement(N,{key:t.trefle_id},l.a.createElement("p",null,l.a.createElement("strong",null,t.common_name)),l.a.createElement("p",null,t.scientific_name),l.a.createElement(S,{onClick:()=>e(t._id)}),l.a.createElement("br",null),t.images[0]&&l.a.createElement("img",{width:"300px",src:t.images[0].url,alt:t.scientific_name})))):l.a.createElement("h3",null,"No Results to Display")}var F={getPlantsByMinTemp:e=>s.a.get("/api/trefle/temperature_minimum_deg_f/".concat(e)),getPlantsByName:e=>s.a.get("/api/trefle/name/".concat(e))},B={getTemperatureByZipcode:e=>s.a.get("/api/phzmapi/".concat(e))},_={getZipCodeByIp:e=>s.a.get("/api/geoip/".concat(e))};var I=function(e){const t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)([]),s=Object(o.a)(i,2),m=s[0],u=s[1],w=Object(n.useState)([]),N=Object(o.a)(w,2),j=N[0],k=N[1],S=Object(n.useState)(!1),I=Object(o.a)(S,2),P=I[0],A=I[1];function T(){p.findRecent().then(e=>c(e.data)).catch(e=>e)}return Object(n.useEffect)(()=>{T()},[]),l.a.createElement(f,{fluid:!0},l.a.createElement(x,null,l.a.createElement(b,{size:"md-5"},l.a.createElement(h,null,l.a.createElement("h1",null,"What Should I Plant?")),l.a.createElement("div",{style:{border:"3px solid #78C2AD",borderRadius:"10px",textAlign:"center",boxShadow:"0px 5px 5px 3px #F3969A",padding:"10px 1px 15px 1px"}},l.a.createElement(d.a,{defaultActiveKey:"Get Suggestions"},l.a.createElement(E.a,{eventKey:"Get Suggestions",title:"Get Suggestions"},l.a.createElement("p",{style:{paddingTop:"10px"}},"Click the Button to Get Suggestions!"),l.a.createElement(g.a,{onClick:function(t){t.preventDefault(),A(!0),u([]),_.getZipCodeByIp(e.userIp).then(t=>{let a="97201";t.data&&(a=t.data.postal.code),B.getTemperatureByZipcode(a).then(t=>{const n=t.data.temperature_range.split(" ")[0];F.getPlantsByMinTemp(n).then(t=>{u(t.data),A(!1),e.setUserZip(a)})})})}},"Get Suggestions")),l.a.createElement(E.a,{eventKey:"Search By Name",title:"Search By Name"},l.a.createElement("p",{style:{paddingTop:"10px",color:"#5a5a5"}},"If you'd like to search for a plant by name, you can search here:"),l.a.createElement(v,{style:{maxWidth:"75%",marginLeft:"10%",border:"1px solid #78C2AD"},onChange:function(e){const t=e.target.value;k(t)},name:"searchName",placeholder:"Search by Name"}),l.a.createElement(g.a,{onClick:function(e){e.preventDefault(),A(!0),F.getPlantsByName(j).then(e=>{u(e.data),A(!1)})}},"Get Plants By Name")))),l.a.createElement("div",{style:{marginBottom:"100px"}},l.a.createElement(O,{userName:e.userName,userIp:e.userIp,userZip:e.userZip,searchResults:m,loadActivityFeed:T,loadFavorites:e.loadFavorites,setShowSpinner:A,showSpinner:P}))),l.a.createElement(b,{size:"md-4 sm-12"},l.a.createElement(h,null,l.a.createElement("h1",null,"Plants On My List")),l.a.createElement(C,{deleteFavorite:function(t){p.deletePlant(t).then(()=>e.loadFavorites()).catch(e=>e)},favorites:e.userFavorites})),l.a.createElement(b,{size:"md-3"},l.a.createElement(h,null,l.a.createElement("h1",null,"Fav Live Feed")),l.a.createElement(y,{data:r}))))};var P=function(){return l.a.createElement(f,{fluid:!0},l.a.createElement(x,null,l.a.createElement(b,{size:"md-12"},l.a.createElement(h,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var A=()=>{const e={color:"pink"},t={fontSize:"10px",margin:"0",paddingTop:"4px"};return l.a.createElement("div",{style:{zIndex:"10",position:"fixed",left:"0",bottom:"0",width:"100%",textAlign:"center",backgroundColor:"#78C2AD",color:"cornsilk",boxShadow:"0px 0px 10px 10px pink",height:"40px"}},l.a.createElement("p",{style:t},"Quokka (c) 2020 by Andy J Chen, Ian Johnson, Max Lemieux. Built with ",l.a.createElement("a",{style:e,href:"https://trefle.io"},"Trefle")," and ",l.a.createElement("a",{style:e,href:"https://github.com/waldoj/frostline"},"Frostline")),l.a.createElement("p",{style:t},"This product includes GeoLite2 data created by MaxMind, available from ",l.a.createElement("a",{style:e,href:"https://www.maxmind.com"},"https://www.maxmind.com")))},T=a(110),L=a(108),z=a(63),Z=a(109),D=a(22),G=a(23),R=a(107),U=a(61),M=a(62);function W(){const e=Object(D.a)(["\n    background: #114b74;\n    color: #fff;\n    border-radius: 5px;\n    padding: 5px 20px;\n    margin: auto;\n    -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),\n        0 11px 15px -7px rgba(0, 0, 0, 0.2);\n    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),\n        0 11px 15px -7px rgba(0, 0, 0, 0.2);\n    &:hover {\n        background: #1b791e;\n        border-color: white;\n    }\n"]);return W=function(){return e},e}function q(){const e=Object(D.a)(["\n    height: 100% !important;\n    display: flex;\n    margin-top: -15px;\n    margin-bottom: 15px;\n"]);return q=function(){return e},e}function J(){const e=Object(D.a)(["\n    font-size: 80%;\n    font-weight: 400;\n"]);return J=function(){return e},e}function K(){const e=Object(D.a)(["\n    padding: 20px 0 0 0;\n    font-weight: bolder;\n"]);return K=function(){return e},e}function H(){const e=Object(D.a)(["\n    font-size: 160%;\n"]);return H=function(){return e},e}function Q(){const e=Object(D.a)(["\n    font-size: 160%;\n"]);return Q=function(){return e},e}function X(){const e=Object(D.a)(["\n    padding: 0 25px 25px 25px;\n"]);return X=function(){return e},e}const Y=Object(G.a)(R.a)(X()),V=Object(G.a)(U.a)(Q()),$=Object(G.a)(M.a)(H()),ee=Object(G.a)("h4")(K()),te=Object(G.a)("span")(J()),ae=Object(G.a)("div")(q()),ne=Object(G.a)(g.a)(W()),le=e=>{const t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],p=m[1];return l.a.createElement(T.a,{onSubmit:t=>{t.preventDefault();const a={email:r,password:u};s.a.post("/api/auth/register_login",a).then(t=>{e.setUserName(t.data.email)}).catch(e=>e)}},l.a.createElement(T.a.Group,{controlId:"formBasicEmail"},l.a.createElement(L.a,null,l.a.createElement(T.a.Label,{column:!0,xs:"2",sm:"1"},l.a.createElement(V,null)),l.a.createElement(z.a,{xs:"10",sm:"11"},l.a.createElement(T.a.Control,{type:"email",placeholder:"Enter email",onChange:e=>{c(e.target.value)},required:!0}),l.a.createElement(T.a.Control.Feedback,null,"Looks good!"),l.a.createElement(T.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")))),l.a.createElement(T.a.Group,{controlId:"formBasicPassword"},l.a.createElement(L.a,null,l.a.createElement(T.a.Label,{column:!0,xs:"2",sm:"1"},l.a.createElement($,null)),l.a.createElement(z.a,{xs:"10",sm:"11"},l.a.createElement(T.a.Control,{type:"password",placeholder:"Password",onChange:e=>p(e.target.value)}),l.a.createElement(T.a.Control.Feedback,null,"Looks good!")))),l.a.createElement(T.a.Group,{controlId:"formBasicCheckbox"},l.a.createElement(L.a,null,l.a.createElement(z.a,{xs:"2",sm:"1"},l.a.createElement(T.a.Check,{type:"checkbox"})),l.a.createElement(z.a,{xs:"10",sm:"11"},l.a.createElement(T.a.Label,null,l.a.createElement(te,null,"Yes, please send me occasional updates about the app"))))),l.a.createElement(ae,null,l.a.createElement(ne,{onClick:()=>e.setShow(!1),type:"submit"},"Submit")))};var re=e=>l.a.createElement(Z.a,{show:e.show,onHide:()=>e.setShow(!1)},l.a.createElement(Z.a.Header,{closeButton:!0},l.a.createElement(Z.a.Title,null,"Sign up / Login")),l.a.createElement(Y,null,l.a.createElement(ee,null,"With email:"),l.a.createElement("br",null),l.a.createElement(le,{setUserName:e.setUserName,setShow:e.setShow}),l.a.createElement(L.a,{style:{borderBottom:"1px solid #dee2e6"}})));var ce=e=>{const t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary sticky-top",style:{boxShadow:"0px 5px 10px 5px pink",marginBottom:"30px"}},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{src:"../img/quokka-logo.png",alt:"logo",style:{width:"65px",height:"65px",margin:"0px 10px 25px 0px",position:"absolute"}}),l.a.createElement("p",{style:{position:"relative",padding:"12px 0px 0px 75px",color:"cornsilk",fontSize:"30px",fontFamily:"Chalkduster, fantasy"}},"quokka")),l.a.createElement("div",{style:{position:"absolute",left:"85%",textAlign:"center"}},l.a.createElement("p",null,"Welcome, ",l.a.createElement("b",null,e.userName)),l.a.createElement(re,{show:r,setShow:c,setUserName:e.setUserName}),"guest"===e.userName&&l.a.createElement("button",{onClick:()=>c(!0)},"Login"),"guest"!==e.userName&&l.a.createElement("button",{onClick:()=>s.a.get("/api/auth/logout").then(e.setUserName("guest"))},"Logout")))};var oe=function(){const e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),d=i[0],E=i[1],g=Object(n.useState)(""),h=Object(o.a)(g,2),f=h[0],x=h[1],b=Object(n.useState)([]),v=Object(o.a)(b,2),y=v[0],w=v[1];function N(){p.getPlants().then(e=>{w(e.data)}).catch(e=>e)}return Object(n.useEffect)(()=>{s.a.get("/api/auth/user_data").then(e=>{e.data.email?(r(e.data.email),E(e.data.ip)):(r("guest"),E(e.data.ip))})},[]),Object(n.useEffect)(()=>{N()},[a]),l.a.createElement(m.a,null,l.a.createElement(ce,{userName:a,setUserName:r}),l.a.createElement("div",null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/"},l.a.createElement(I,{userFavorites:y,loadFavorites:N,userName:a,userIp:d,userZip:f,setUserZip:x})),l.a.createElement(u.a,null,l.a.createElement(P,null)))),l.a.createElement(A,null))};c.a.render(l.a.createElement(oe,null),document.getElementById("root"))},69:function(e,t,a){e.exports=a(103)},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.262ca1dc.chunk.js.map