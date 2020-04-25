//projects data array that contain data to be rendered on project component

let Data = [
  {
    index: 5,
    name: "Fakebook",
    intro:
      "A MERN Social media network , with posts, likes and comments features",
    url: "https://fakebook00.herokuapp.com/",
    tech: "React,Mongo, Node, Expressjs, Axios",
    problems: " ",
    image: "./project-images/fakebook.gif",
    discription:
      "This app allow user to create Register, Signin , create profile, posts their thoughs , comment on it or like it."
  }

  ,{
    index: 0,
    name: "Keeper",
    intro:
      "A google notes inpired app to save notes with additional functionality to record time for every note",
    url: "https://lutif.github.io/Notes-Keeper/",
    tech: "React, MaterialUI, CSS",
    problems: " ",
    image: "./project-images/keeper.PNG",
    discription:
      "This app helps you note only take notes but also work as todo with recoreder app help you determine how much time it took you do certain work"
  },
  {
    index: 11,
    name: "Covid19",
    intro:
      "Corna Virus update center for Pakistan to get real time interactive upto date data about covid19",
    tech:
      "HTML, CSS , JAVASCRIPT,React,githubPages ",
    problems: " ",
    image: "./project-images/covid.PNG",
    url: "https://lutif.github.io/Covid19/",
    discription:
      "Corna Virus update center for Pakistan to get real time interactive upto date data about covid19"
  },
  {
    index: 111,
    name: "Safe Chat",
    intro:
      "One to One Chat app in MERN Stack",
    tech:
      "HTML, CSS , JAVASCRIPT,React,Mongo, Node, Expressjs, Axios  ",
    problems: " ",
    image: "./project-images/betachat.PNG",
    url: "https://betatech-chat.herokuapp.com/",
    discription:
      "One to One Chat app,Chat with ease with this free and safe chat app"
  },
  
  {
    index: 1,
    name: "Shorty",
    intro:
      "A Url shorting website , which not only shorten your url but track it dynamicaly.",
    url: "https://lutif.github.io/shorty/",
    tech: "HTML, CSS ,JAVASCRIPT, API, AJAX",
    problems:
      " One problem arises was to make API calls to rel.ink API, first solution come to mind was to build a back end use HTTP module to make API calls, However backend couldn't modify dom so had to pass that data to front end or use some templeting engine; second though was to find a way to make API calls from front-end; there AJAX came to resue.",
    image: "./project-images/shorty.png",
    discription:
      "Tired of sharing long urls, here is shorty no signin required just enter the url and get your shorten url, each url get unique id so same input produces same output."
  },
  {
    index: 2,
    name: "Bookmark App landing Page",
    intro:
      "Product landing webpage of imaginery bookmark app; to tell world about the App",
    tech: "HTML, CSS , JAVASCRIPT ",
    problems: " ",
    image: "./project-images/app-landing.png",
    url: "https://lutif.github.io/aap-landing-page/",
    discription:
      "This is beautiful interactive landing page of an imaginery bookmark app, website is responsive to all screen sizes ."
  },
  {
    index: 4,
    name: "EasyTodo",
    intro:
      "EJS templating based todo app that uses express server on backend , and monogoose database to store notes.Hosted on heroku",
    tech: "HTML, CSS , JavaScript,EJS,Nodejs,ExpressJS,Mongodb,heroku",
    problems: " ",
    image: "./project-images/easytodo.png",
    url: "https://sheltered-sea-77774.herokuapp.com/home",
    discription:
      "This is a chat app frontend is implemented in React while backend in Nodejs ."
  },{
    index: 3,
    name: "ChatApp",
    intro:
      "React based Chat room app where anyone can sign in with name and chat room name to chat with everyone in that room.Frontend implement in Reactjs , backend in ExpressJS",
    tech:
      "HTML, CSS , JAVASCRIPT,React,Nodejs,ExpressJS,Socket.io,heroku,githubPages ",
    problems: " ",
    image: "./project-images/chatapp.png",
    url: "https://lutif.github.io/chatApp/",
    discription:
      "This is a chat room based chat app frontend is implemented in React while backend in Nodejs ."
  },

];
export default Data;
