(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,function(e,t,a){"use strict";a.r(t);t.default=[{index:5,name:"Fakebook",intro:"A MERN Social media network , with posts, likes and comments features",url:"https://fakebook00.herokuapp.com/",tech:"React,Mongo, Node, Expressjs, Axios",problems:" ",image:"./project-images/fakebook.gif",discription:"This app allow user to create Register, Signin , create profile, posts their thoughs , comment on it or like it."},{index:0,name:"Keeper",intro:"A google notes inpired app to save notes with additional functionality to record time for every note",url:"https://lutif.github.io/Notes-Keeper/",tech:"React, MaterialUI, CSS",problems:" ",image:"./project-images/keeper.PNG",discription:"This app helps you note only take notes but also work as todo with recoreder app help you determine how much time it took you do certain work"},{index:11,name:"Covid19",intro:"Corna Virus update center for Pakistan to get real time interactive upto date data about covid19",tech:"HTML, CSS , JAVASCRIPT,React,githubPages ",problems:" ",image:"./project-images/covid.PNG",url:"https://lutif.github.io/Covid19/",discription:"Corna Virus update center for Pakistan to get real time interactive upto date data about covid19"},{index:111,name:"Safe Chat",intro:"One to One Chat app in MERN Stack",tech:"HTML, CSS , JAVASCRIPT,React,Mongo, Node, Expressjs, Axios  ",problems:" ",image:"./project-images/betachat.PNG",url:"https://betatech-chat.herokuapp.com/",discription:"One to One Chat app,Chat with ease with this free and safe chat app"},{index:1,name:"Shorty",intro:"A Url shorting website , which not only shorten your url but track it dynamicaly.",url:"https://lutif.github.io/shorty/",tech:"HTML, CSS ,JAVASCRIPT, API, AJAX",problems:" One problem arises was to make API calls to rel.ink API, first solution come to mind was to build a back end use HTTP module to make API calls, However backend couldn't modify dom so had to pass that data to front end or use some templeting engine; second though was to find a way to make API calls from front-end; there AJAX came to resue.",image:"./project-images/shorty.png",discription:"Tired of sharing long urls, here is shorty no signin required just enter the url and get your shorten url, each url get unique id so same input produces same output."},{index:2,name:"Bookmark App landing Page",intro:"Product landing webpage of imaginery bookmark app; to tell world about the App",tech:"HTML, CSS , JAVASCRIPT ",problems:" ",image:"./project-images/app-landing.png",url:"https://lutif.github.io/aap-landing-page/",discription:"This is beautiful interactive landing page of an imaginery bookmark app, website is responsive to all screen sizes ."},{index:4,name:"EasyTodo",intro:"EJS templating based todo app that uses express server on backend , and monogoose database to store notes.Hosted on heroku",tech:"HTML, CSS , JavaScript,EJS,Nodejs,ExpressJS,Mongodb,heroku",problems:" ",image:"./project-images/easytodo.png",url:"https://sheltered-sea-77774.herokuapp.com/home",discription:"This is a chat app frontend is implemented in React while backend in Nodejs ."},{index:3,name:"ChatApp",intro:"React based Chat room app where anyone can sign in with name and chat room name to chat with everyone in that room.Frontend implement in Reactjs , backend in ExpressJS",tech:"HTML, CSS , JAVASCRIPT,React,Nodejs,ExpressJS,Socket.io,heroku,githubPages ",problems:" ",image:"./project-images/chatapp.png",url:"https://lutif.github.io/chatApp/",discription:"This is a chat room based chat app frontend is implemented in React while backend in Nodejs ."}]},,function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a(0),r=a.n(n);function o(e){return r.a.createElement("div",Object.assign({},e,{cursor:"pointer",onClick:e.clickFunction}),e.arrow)}},function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a(0),r=a.n(n);function o(e){return r.a.createElement("div",{className:"projectContainer text-center shadow rounded"},r.a.createElement("div",{className:"projectImage"},r.a.createElement("img",{className:"projectImage",src:a(10)("".concat(e.content.image)),alt:""})),r.a.createElement("div",{className:"light projectDescription mt-2"},r.a.createElement("a",{href:e.content.url,target:"_blank"}," ",r.a.createElement("h2",null,"  ",e.content.name)),r.a.createElement("p",null,e.content.intro),r.a.createElement("p",null,"Technologies: ".concat(e.content.tech)),r.a.createElement("div",{className:"projectDetails"},r.a.createElement("p",null,e.content.discription),r.a.createElement("button",null,r.a.createElement("a",{href:e.content.url}," Demo")))))}},function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a(0),r=a.n(n);function o(e){return r.a.createElement("div",{className:"togglerContainer"},r.a.createElement("input",{className:"toggler",type:"checkbox",onClick:e.toggle})," ")}},function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),o=a.n(r),c=a(7),i=a(8),s=a(9);t.default=function(){var e=Object(r.useState)("slides"),t=Object(n.a)(e,2),a=t[0],l=t[1];return o.a.createElement("div",{className:"p-5  light text-dark",id:"projects"},o.a.createElement("h2",{className:"text-dark text-center"}," Projects"),o.a.createElement("div",{className:"d-flex btn ml-3 text-dark btn-group col-2 py-2"},o.a.createElement("p",{onClick:function(){return l("slides")},className:" px-0 h2 fas fa-clone"}),o.a.createElement("i",{onClick:function(){return l("square")},className:" px-0 h2 mx-2 fas fa-table"}),o.a.createElement("i",{onClick:function(){return l("list")},className:" px-0  h2 fas fa-th-list"})),o.a.createElement(r.Fragment,null,"slides"===a?o.a.createElement(i.default,null):"square"===a?o.a.createElement(c.default,null):o.a.createElement(s.default,null)))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1);t.default=function(){return r.a.createElement("div",{className:"row col-10 mx-auto px-3 mt-4 "},o.default.map((function(e){return r.a.createElement("div",{className:"my-1 col-md-4"},r.a.createElement("img",{src:a(10)("".concat(e.image)),className:"col-12 img-thumbnail m-0 p-0 mx-auto"}),r.a.createElement("div",{className:"mt-auto"},r.a.createElement("div",{className:" text-center font-weight-bold"},e.name),r.a.createElement("p",null,e.discription),r.a.createElement("div",{className:"row mx-auto"},r.a.createElement("button",{className:"mr-2 btn btn-primary "},r.a.createElement("a",{href:e.url,style:{textDecoration:"none"},className:"text-white",target:"_blank"}," ","Demo"," ")," "),r.a.createElement("button",{className:" btn btn-primary"},"Github"))))})))}},function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var n=a(2),r=a(0),o=a.n(r),c=a(3),i=a(4),s=a(1);a(5);function l(e){var t=Object(r.useState)(0),a=Object(n.a)(t,2),l=a[0],m=a[1],u=Object(r.useState)(!0),d=Object(n.a)(u,2),p=d[0],f=d[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){p&&m((l+1)%s.default.length)}),5e3);return function(){return clearTimeout(e)}}),[l]),o.a.createElement(r.Fragment,null,o.a.createElement("div",{className:"carousel"},o.a.createElement(c.default,{className:"arrow left",arrow:"\u25c0",clickFunction:function(){f(!1);var e=(l+3-1)%s.default.length;m(e)}}),o.a.createElement(i.default,{content:s.default[l]}),o.a.createElement(c.default,{className:"arrow right",arrow:"\u25b6",clickFunction:function(){f(!1);var e=(l+1)%s.default.length;m(e)}})))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(3),a(4),a(1));a(5);t.default=function(){return r.a.createElement("table",{className:"table table-striped table-borderless table-hover mt-4 px-2"},o.default.map((function(e){return r.a.createElement("tr",{className:"row"},r.a.createElement("td",{className:"col-md-1"}),r.a.createElement("td",{className:"col-md-3 img"},r.a.createElement("img",{src:a(10)("".concat(e.image)),className:"col-11 round img"})),r.a.createElement("td",{className:"col-md-3 light card"},r.a.createElement("h3",{className:"text-center"},e.name),r.a.createElement("div",{className:"row m-auto mt-5"},r.a.createElement("button",{className:"mr-2 btn btn-primary "},r.a.createElement("a",{href:e.url,style:{textDecoration:"none"},className:"text-white",target:"_blank"}," ","Demo"," ")," "),r.a.createElement("button",{className:" btn btn-primary"},"Github"))),r.a.createElement("td",{className:"col-md-4 card light"},r.a.createElement("p",null,e.discription),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("span",{className:"text-primary font-weight-bold"},"stack:")," "+e.tech)),r.a.createElement("td",{className:"col-md-1"}))})))}},function(e,t,a){var n={"./Arrow":3,"./Arrow.jsx":3,"./Project":4,"./Project.jsx":4,"./ProjectSlides":8,"./ProjectSlides.js":8,"./ProjectSquare":7,"./ProjectSquare.js":7,"./ProjectTable":9,"./ProjectTable.js":9,"./Projects":6,"./Projects.js":6,"./Toggle":5,"./Toggle.js":5,"./data":1,"./data.js":1,"./project-images/app-landing.png":31,"./project-images/betachat.PNG":32,"./project-images/chatapp.png":33,"./project-images/covid.PNG":34,"./project-images/easytodo.png":35,"./project-images/fakebook.gif":36,"./project-images/keeper.PNG":37,"./project-images/shorty.png":38};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=10},,,function(e,t,a){e.exports=a.p+"static/media/main.61a4c685.svg"},function(e,t,a){e.exports=a.p+"static/media/html5.f0361c5e.svg"},function(e,t,a){e.exports=a.p+"static/media/css.6971ddc7.svg"},function(e,t,a){e.exports=a.p+"static/media/javascript.b84019d9.svg"},function(e,t,a){e.exports=a.p+"static/media/react.5d1a1a0f.svg"},function(e,t,a){e.exports=a.p+"static/media/mongodb.c3fedb55.svg"},function(e,t,a){e.exports=a.p+"static/media/nodejs.c309a724.svg"},function(e,t,a){e.exports=a.p+"static/media/github.0ff1a6f0.svg"},function(e,t,a){e.exports=a.p+"static/media/heroku.b38ff61a.svg"},function(e,t,a){e.exports=a.p+"static/media/redux.aa0a3376.svg"},function(e,t,a){e.exports=a(39)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/app-landing.a3cbae92.png"},function(e,t,a){e.exports=a.p+"static/media/betachat.76252322.PNG"},function(e,t,a){e.exports=a.p+"static/media/chatapp.145cdb94.png"},function(e,t,a){e.exports=a.p+"static/media/covid.a60095f7.PNG"},function(e,t,a){e.exports=a.p+"static/media/easytodo.1bc2c215.png"},function(e,t,a){e.exports=a.p+"static/media/fakebook.57f84d76.gif"},function(e,t,a){e.exports=a.p+"static/media/keeper.5259205a.PNG"},function(e,t,a){e.exports=a.p+"static/media/shorty.a3c0a162.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o);a(28),a(29),a(30);var i=a(13),s=a.n(i);function l(e){return r.a.createElement("div",{className:"dark contianer"},r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,"Hi, I am ",r.a.createElement("span",null,"Lutif Ali")," "),r.a.createElement("p",null,"I love creating web and mobile apps")),r.a.createElement("img",{className:"main-image",src:s.a,alt:""}))}var m=a(14),u=a.n(m),d=a(15),p=a.n(d),f=a(16),h=a.n(f),g=a(17),b=a.n(g),E=a(18),k=a.n(E),v=a(19),N=a.n(v),x=a(20),w=a.n(x),j=a(21),y=a.n(j),S=a(22),P=a.n(S);function A(){var e=[u.a,p.a,h.a,b.a,P.a,N.a,k.a,w.a,y.a];return r.a.createElement("div",{className:"mx-4 rounded"},r.a.createElement("h2",{className:"mx-auto px-auto col-md-4 display-4"},"My Toolkit"),r.a.createElement("div",{className:"row"},e.map((function(e){return r.a.createElement("div",{className:"skillslogo"},r.a.createElement("img",{src:e,alt:""}))}))))}function C(){return r.a.createElement("div",{className:"contact light",id:"contact"},r.a.createElement("h1",null,"CONTACT ME!"),r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://www.facebook.com/lutif",target:"_blank"},r.a.createElement("i",{class:"fab fa-facebook-f"})),r.a.createElement("a",{href:"https://github.com/Lutif",target:"_blank"},r.a.createElement("i",{class:"fab fa-github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/lutifmandhro/",target:"_blank"},r.a.createElement("i",{class:"fab fa-linkedin"})),r.a.createElement("a",{href:"mailto:lutif.mandhro@gmail.com"},r.a.createElement("i",{class:"fas fa-envelope-square"}))))}var T=a(2);var O=function(){var e=Object(n.useState)(!1),t=Object(T.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},className:"social-bar position-fixed h3 p-2 bg-light rounded shadow-lg z-10",style:{zIndex:3e3}},r.a.createElement("div",null,"   ",r.a.createElement("i",{class:"fas fa-user-friends"})),a?r.a.createElement("div",{className:"font"},r.a.createElement("div",{className:"btn d-block my-0 p-0"},r.a.createElement("a",{href:"https://www.facebook.com/lutif",target:"_blank",className:"h2  fab fa-facebook-square"})),r.a.createElement("div",{className:"btn d-block my-0"},r.a.createElement("a",{href:"https://www.github.com/lutif",target:"_blank",className:"h2 fab fa-github-square"})),r.a.createElement("div",{className:"btn d-block my-0"},r.a.createElement("a",{href:"https://www.linkedin.com/in/lutifmandhro/",target:"_blank",className:"h2 fab fa-linkedin"}))):null)},I=a(6);var M=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(l,null),r.a.createElement(I.default,null),r.a.createElement(A,null),r.a.createElement(C,null))};c.a.render(r.a.createElement(M,null),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.8ade6fda.chunk.js.map