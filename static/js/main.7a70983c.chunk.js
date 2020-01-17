(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,function(e,t,a){"use strict";a.r(t);t.default=[{index:0,name:"Keeper",intro:"A google notes inpired app to save notes with additional functionality to record time for every note",url:"https://lutif.github.io/Notes-Keeper/",tech:"React, MaterialUI, CSS",problems:" ",image:"./project-images/keeper.PNG",discription:"This app helps you note only take notes but also work as todo with recoreder app help you determine how much time it took you do certain work"},{index:1,name:"Shorty",intro:"A Url shorting website , which only only shorten your url but track it dynamicaly.",url:"https://lutif.github.io/shorty/",tech:"HTML, CSS ,JAVASCRIPT, API, AJAX",problems:" One problem arises was to make API calls to rel.ink API, first solution come to mind was to build a back end use HTTP module to make API calls, However backend couldn't modify dom so had to pass that data to front end or use some templeting engine; second though was to find a way to make API calls from front-end; there AJAX came to resue.",image:"./project-images/shorty.png",discription:"Tired of sharing long urls, here is shorty no signin required just enter the url and get your shorten url, each url get unique id so same input produces same output."},{index:2,name:"Bookmark App landing Page",intro:"Product landing webpage of imaginery bookmark app; to tell world about the App",tech:"HTML, CSS , JAVASCRIPT ",problems:" ",image:"./project-images/app-landing.png",url:"https://lutif.github.io/aap-landing-page/",discription:"This is beautiful interactive landing page of an imaginery bookmark app, website is responsive to all screen sizes ."},{index:3,name:"ChatApp",intro:"React based Chat room app where anyone can sign in with name and chat room name to chat with everyone in that room.",tech:"HTML, CSS , JAVASCRIPT,React,Nodejs,Socket.io ",problems:" ",image:"./project-images/chatapp.png",url:"https://lutif.github.io/chatApp/",discription:"This is a chat app frontend is implemented in React while backend in Nodejs ."}]},function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r}));var n=a(0),i=a.n(n);function r(e){return i.a.createElement("div",{className:"arrow "+e.direction,cursor:"pointer",onClick:e.clickFunction},e.arrow)}},function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(5),i=a(0),r=a.n(i),o=a(2),c=a(4),l=a(1);function s(e){var t=Object(i.useState)(0),a=Object(n.a)(t,2),s=a[0],u=a[1],m=Object(i.useState)(!0),p=Object(n.a)(m,2),d=p[0],f=p[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){d&&u((s+1)%l.default.length)}),4e3);return function(){return clearTimeout(e)}}),[s]),r.a.createElement("div",{className:"contianer light",id:"projects"},r.a.createElement("div",{className:"carousel"},r.a.createElement(o.default,{direction:"left",arrow:"\u25c0",clickFunction:function(){f(!1);var e=(s+3-1)%l.default.length;u(e)}}),r.a.createElement("div",{className:"projectContainer"},r.a.createElement(c.default,{content:l.default[s]})),r.a.createElement(o.default,{direction:"right",arrow:"\u25b6",clickFunction:function(){f(!1);var e=(s+1)%l.default.length;u(e)}})))}},function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r}));var n=a(0),i=a.n(n);function r(e){a(7)("".concat(e.content.image));return i.a.createElement("div",{className:"projectContainer"},i.a.createElement("div",{className:"projectImage"},i.a.createElement("img",{className:"projectImage",src:a(7)("".concat(e.content.image)),alt:""})),i.a.createElement("div",{className:"light projectDescription"},i.a.createElement("h2",null,e.content.name),i.a.createElement("p",null,e.content.intro),i.a.createElement("p",null,"Technologies: ".concat(e.content.tech)),i.a.createElement("div",{className:"projectDetails"},i.a.createElement("p",null,e.content.discription),i.a.createElement("button",null,i.a.createElement("a",{href:e.content.url}," Demo")))))}},,,function(e,t,a){var n={"./Arrow":2,"./Arrow.jsx":2,"./Project":4,"./Project.jsx":4,"./Projects":3,"./Projects.js":3,"./data":1,"./data.js":1,"./project-images/app-landing.png":26,"./project-images/chatapp.png":27,"./project-images/keeper.PNG":28,"./project-images/shorty.png":29};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=7},,function(e,t,a){e.exports=a.p+"static/media/main.61a4c685.svg"},function(e,t,a){e.exports=a.p+"static/media/html5.f0361c5e.svg"},function(e,t,a){e.exports=a.p+"static/media/css.6971ddc7.svg"},function(e,t,a){e.exports=a.p+"static/media/javascript.b84019d9.svg"},function(e,t,a){e.exports=a.p+"static/media/react.5d1a1a0f.svg"},function(e,t,a){e.exports=a.p+"static/media/mongodb.c3fedb55.svg"},function(e,t,a){e.exports=a.p+"static/media/nodejs.c309a724.svg"},function(e,t,a){e.exports=a.p+"static/media/github.0ff1a6f0.svg"},function(e,t,a){e.exports=a.p+"static/media/heroku.b38ff61a.svg"},function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/app-landing.a3cbae92.png"},function(e,t,a){e.exports=a.p+"static/media/chatapp.145cdb94.png"},function(e,t,a){e.exports=a.p+"static/media/keeper.5259205a.PNG"},function(e,t,a){e.exports=a.p+"static/media/shorty.a3c0a162.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r);a(23),a(24),a(25);function c(e){return i.a.createElement("div",{className:"navbar"},i.a.createElement("div",{className:"logo"},"Lutif Ali"),i.a.createElement("ul",{className:"nav"},[{label:"Projects",id:"projects"},{label:"Skills",id:"skills"},{label:"Contact",id:"contact"}].map((function(e){return i.a.createElement("li",{key:e.id,className:"navitem"},i.a.createElement("a",{className:"navlink",href:"#".concat(e.id)}," ",e.label))}))))}var l=a(9),s=a.n(l);function u(e){return i.a.createElement("div",{className:"dark contianer"},i.a.createElement("div",{className:"text"},i.a.createElement("h1",null,"Hi, I am ",i.a.createElement("span",null,"Lutif Ali")," "),i.a.createElement("p",null,"a WebApp developer")),i.a.createElement("img",{className:"main-image",src:s.a,alt:""}))}var m=a(3),p=a(10),d=a.n(p),f=a(11),h=a.n(f),g=a(12),E=a.n(g),b=a(13),v=a.n(b),k=a(14),j=a.n(k),w=a(15),N=a.n(w),y=a(16),A=a.n(y),x=a(17),P=a.n(x);function T(){var e=[d.a,h.a,E.a,v.a,N.a,j.a,A.a,P.a];return i.a.createElement("div",{id:"skills",className:"dark contianer skills"},i.a.createElement("h2",null,"My Toolkit"),i.a.createElement("div",{className:"skillsList"},e.map((function(e){return i.a.createElement("div",{className:"skillslogo"},i.a.createElement("img",{src:e,alt:""}))}))))}function S(){return i.a.createElement("div",{className:"contact light",id:"contact"},i.a.createElement("h1",null,"HIRE ME!"),i.a.createElement("div",{className:"social"},i.a.createElement("a",{href:"https://www.facebook.com/lutif",target:"_blank"},i.a.createElement("i",{class:"fab fa-facebook-f"})),i.a.createElement("a",{href:"https://github.com/Lutif",target:"_blank"},i.a.createElement("i",{class:"fab fa-github"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/lutifmandhro/",target:"_blank"},i.a.createElement("i",{class:"fab fa-linkedin"}))))}var C=function(){return i.a.createElement("div",null,i.a.createElement(c,null),i.a.createElement(u,null),i.a.createElement(m.default,null),i.a.createElement(T,null),i.a.createElement(S,null))};o.a.render(i.a.createElement(C,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.7a70983c.chunk.js.map