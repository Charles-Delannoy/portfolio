(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{34:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t(1),a=t(13),o=t.n(a),c=t(8),l=t(14),s=t(4),d=[{label:"\xc0 propos",label_en:"About"},{label:"Mes projets",label_en:"My projects"},{label:"Mes formations",label_en:"Education"},{label:"Mes outils",label_en:"My tools"}],u=function(n){var e=n.language,t=n.onLanguageClick,a=window.location.pathname.split("/");a[1]="fr";a.join("/");a[1]="en";a.join("/");return Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{onClick:t,className:"fr"===e?"activ-language":"",children:"FR"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{onClick:t,className:"en"===e?"activ-language":"",children:"EN"})})]})},g=t(3);function j(){var n=Object(s.a)(["\n  .show-navbar {\n    top: 0px;\n  }\n"]);return j=function(){return n},n}function b(){var n=Object(s.a)(["\n  position: absolute;\n  right: -6vw;\n  top: 10px;\n  .activ-language {\n    color: #6EB4D1;\n  }\n  ul {\n    li {\n      padding: 0 10px;\n      &:first-child {\n        border-right: thin solid black;\n      }\n      a {\n        cursor: pointer;\n        text-decoration: none;\n        color: #5E6472;\n        &:hover {\n          color: #6EB4D1;\n        }\n      }\n    }\n  }\n"]);return b=function(){return n},n}function x(){var n=Object(s.a)(["\n  height: 120px;\n  width: 100vw;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: -120px;\n  transition: top 0.3s;\n  transition-delay: 0.2s;\n  background-color: #ebdfd9;\n\n  font-size: 30px;\n  font-weight: 300;\n  display: flex;\n  justify-content: center;;\n  align-items: center;\n  z-index: 1000;\n  ul {\n    margin-right: 6vw;\n    li {\n      padding: 0 2vw;\n    }\n  }\n  img {\n    margin-left: 5vw;\n    height: 100px;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    position: absolute;\n    left: -40px;\n  }\n"]);return x=function(){return n},n}function p(){var n=Object(s.a)(["\n  margin: 0 5px;\n  list-style: none;\n  z-index: 1000;\n  li {\n    display:inline;\n    color: #5E6472;\n  }\n"]);return p=function(){return n},n}var h=g.a.ul(p()),f=g.a.div(x()),v=g.a.div(b()),O=g.a.div(j()),m=function(n){var e=n.language,t=n.onLanguageClick,r=d.map((function(n,t){var r="fr"===e?n.label:n.label_en;return Object(i.jsx)("li",{children:r},t)})),a=document.querySelector(".dynamic-navbar"),o=document.documentElement.scrollTop;return console.log(a),document.addEventListener("scroll",(function(){var n=document.querySelector(".dynamic-navbar"),e=document.documentElement.scrollTop;o<e&&n||e<window.innerHeight&&n?n.classList.remove("show-navbar"):n&&n.classList.add("show-navbar"),o=e})),Object(i.jsx)(O,{children:Object(i.jsxs)(f,{className:"dynamic-navbar",children:[Object(i.jsx)("img",{src:"/plain-logo.png",alt:"logo"}),Object(i.jsx)(h,{children:r}),Object(i.jsx)(v,{children:Object(i.jsx)(h,{children:Object(i.jsx)(u,{language:e,onLanguageClick:t})})})]})})};function w(){var n=Object(s.a)(["\n  font-family: 'Montserrat';\n  font-size: 40px;\n  font-weight: 300;\n  color: #5E6472;\n  background-color: #fff;\n  border: thin solid #5E6472;\n  border-right: none;\n  padding: 25px 20px 25px 10px;\n  display: flex;\n  align-items: center;\n  width: 325px;\n  align-self: flex-end;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 75vh;\n  left: 100vw;\n  z-index: 1001;\n  img {\n    transform: scaleX(1);\n    height: 40px;\n    margin: 0px 35px 0px 20px;\n  }\n  p {\n    margin: 0;\n    font-weight: 100;\n    font-size: 30px;\n  }\n"]);return w=function(){return n},n}var y=g.a.button(w()),k=function(n){var e="fr"===n.language?"Contactez moi":"Contact me";return Object(i.jsxs)(y,{children:[Object(i.jsx)("img",{src:"/arrow.png",alt:"arrow"})," ",Object(i.jsx)("p",{children:e})]})};function L(){var n=Object(s.a)(["\n  height: 100px;\n  width: 100vw;\n  border-top: thin solid #c5c2c2;\n  border-bottom: thin solid #c5c2c2;\n  position: relative;\n  font-size: 30px;\n  font-weight: 300;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1000;\n  ul {\n    margin-right: 6vw;\n    li {\n      padding: 0 2vw;\n    }\n  }\n  img {\n    margin-left: 5vw;\n    height: 150px;\n    border: 1px solid #fff;\n    border-radius: 50%;\n  }\n"]);return L=function(){return n},n}function C(){var n=Object(s.a)(["\n  height: 50px;\n  width: 100vw;\n  background-color: #fff;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 300;\n  .activ-language {\n    color: #6EB4D1;\n  }\n  ul {\n    li {\n      padding: 0 10px;\n      &:first-child {\n        border-right: thin solid black;\n      }\n      a {\n        cursor: pointer;\n        text-decoration: none;\n        color: #5E6472;\n        &:hover {\n          color: #6EB4D1;\n        }\n      }\n    }\n  }\n"]);return C=function(){return n},n}function E(){var n=Object(s.a)(["\n  margin: 0 5px;\n  list-style: none;\n  z-index: 1000;\n  li {\n    display:inline;\n    color: #5E6472;\n  }\n"]);return E=function(){return n},n}var z=g.a.ul(E()),M=g.a.div(C()),D=g.a.div(L()),I=function(n){var e=n.language,t=n.onLanguageClick,r=d.map((function(n,t){var r="fr"===e?n.label:n.label_en;return Object(i.jsx)("li",{children:r},t)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(M,{children:Object(i.jsx)(z,{children:Object(i.jsx)(u,{language:e,onLanguageClick:t})})}),Object(i.jsxs)(D,{children:[Object(i.jsx)("img",{src:"/light-logo.png",alt:"logo"}),Object(i.jsx)(z,{children:r})]})]})};t(28);function N(){var n=Object(s.a)(["\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  img {\n    transform: rotate(-90deg);\n    width: 15px;\n    cursor: pointer;\n  }\n"]);return N=function(){return n},n}function A(){var n=Object(s.a)(["\n  width: 55vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n"]);return A=function(){return n},n}function B(){var n=Object(s.a)(["\n  height: calc(100vh - 150px);\n  background-image: url(","/devimg.jpg);\n  background-size: cover;\n  background-position-y: 70%;\n  width: 45vw;\n"]);return B=function(){return n},n}function S(){var n=Object(s.a)(["\n  width: 100vw;\n  height: calc(100vh - 150px);\n  display: flex;\n  .text {\n    color: #5E6472;\n    font-size: 40px;\n    line-height: 65px;\n    font-weight: 100;\n    padding: 0 40px;\n    font-family: 'Montserrat';\n    align-self: center;\n    text-align: center;\n    margin: 120px 30px 30px 30px;\n    strong {\n      font-weight: 400;\n    }\n  }\n"]);return S=function(){return n},n}function T(){var n=Object(s.a)(["\n  min-height: calc(100vh - 150px);\n  max-height: calc(100vh - 150px);\n  position: relative;\n"]);return T=function(){return n},n}var _=g.a.div(T()),q=g.a.div(S()),F=g.a.div(B(),""),H=g.a.div(A()),J=g.a.div(N()),W=function(){window.scrollTo({top:window.innerHeight,behavior:"smooth"})},Y=function(n){var e=n.language,t=n.onLanguageClick,a=Object(r.useState)(1e3),o=Object(c.a)(a,2),l=o[0],s=o[1],d=Object(r.useState)(0),u=Object(c.a)(d,2),g=u[0],j=u[1];Object(r.useEffect)((function(){var n=document.getElementById("global-div").clientHeight;s(n)}),[]),document.onscroll=function(){var n=window.scrollY+3;j(n<=270?n:270)};var b="fr"===e?"D\xe9veloppeur full-stack":"Full-stack developper";return Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("div",{style:{position:"absolute",height:l,width:"100%",left:"".concat(g,"px")},children:Object(i.jsx)(k,{language:e})}),Object(i.jsx)(I,{language:e,onLanguageClick:t}),Object(i.jsx)(_,{children:Object(i.jsxs)(q,{children:[Object(i.jsx)(F,{}),Object(i.jsxs)(H,{children:[Object(i.jsxs)("p",{className:"text",children:[Object(i.jsx)("strong",{children:"Charles DELANNOY"})," ",Object(i.jsx)("br",{}),b]}),Object(i.jsx)(J,{children:Object(i.jsx)("img",{src:"/arrow.png",alt:"arrow",onClick:W})})]})]})})]})};function P(){var n=Object(s.a)(["\n  height: calc(80vh - 170px);\n  border-top: 50px solid #ebdfd9;\n  width: 77vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  p {\n    margin-left: 280px;\n    padding-top: 50px;\n    font-size: 30px;\n    font-family: 'Montserrat';\n    font-weight: 300;\n    line-height: 45px;\n  }\n  strong {\n    font-weight: 600;\n  }\n"]);return P=function(){return n},n}function R(){var n=Object(s.a)(["\n  height: calc(80vh - 170px);\n  border-bottom: 50px solid #ebdfd9;\n  width: 18vw;\n"]);return R=function(){return n},n}function X(){var n=Object(s.a)(["\n  height: calc(80vh - 120px);\n  width: 400px;\n  border-radius: 150px;\n  position: absolute;\n  left: 5vw;\n  background-color: rgba(205, 173, 161, 0.4);\n  z-index: 999;\n"]);return X=function(){return n},n}function G(){var n=Object(s.a)(["\n  height: calc(80vh - 120px);\n  width: 400px;\n  object-fit: cover;\n  border-radius: 150px;\n  position: absolute;\n  left: 5vw;\n"]);return G=function(){return n},n}function K(){var n=Object(s.a)(["\n  padding-top: 50px;\n  height: calc(100vh - 200px);\n  position: relative;\n  display: flex;\n"]);return K=function(){return n},n}function Q(){var n=Object(s.a)(["\n  padding-top: 50px;\n  width: 300px;\n  height: 150px;\n  line-height: 150px;\n  margin: 0 auto;\n  font-family: 'Montserrat';\n  font-weight: 400;\n  font-size: 55px;\n  text-align: center;\n  background-image: linear-gradient(120deg,#ebdfd9 0%,#ebdfd9 0%);\n  background-repeat: no-repeat;\n  background-size: 250px 20px;\n  background-position-x: 100%;\n  background-position-y: 72%;\n"]);return Q=function(){return n},n}var U=g.a.h1(Q()),V=g.a.div(K()),Z=g.a.img(G()),$=g.a.div(X()),nn=g.a.div(R()),en=g.a.div(P()),tn=function(n){var e=n.language,t=(n.onLanguageClick,"fr"===e?Object(i.jsxs)("p",{children:["Issus d'une formation d'",Object(i.jsx)("strong",{children:"ing\xe9nieur g\xe9n\xe9raliste"}),", je suis devenu ",Object(i.jsx)("strong",{children:"consultant en Organisation et Management"})," en 2015. ",Object(i.jsx)("br",{}),"Tout d'abord dans le secteur de la ",Object(i.jsx)("strong",{children:"production \xe9nerg\xe9tique"})," je me suis par la suite dirig\xe9 vers ",Object(i.jsx)("strong",{children:"l'automobile"})," notamment dans le ",Object(i.jsx)("strong",{children:"Marketing Digital"}),".",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"Apr\xe8s 5 ans j'ai d\xe9cid\xe9 de revenir \xe0 mes premiers amours et de reprendre le ",Object(i.jsx)("strong",{children:"d\xe9veloppement web"})," en autodidacte et avec la formation ",Object(i.jsx)("strong",{children:"Le Wagon"}),"."]}):Object(i.jsxs)("p",{children:["Trained as a ",Object(i.jsx)("strong",{children:"general engineer"}),", I became an ",Object(i.jsx)("strong",{children:"Organization and Management consultant"})," in 2015. ",Object(i.jsx)("br",{}),"At first I worked for the ",Object(i.jsx)("strong",{children:"electricity production sector"}),", then I moved to the ",Object(i.jsx)("strong",{children:"automotive industry"})," particularly in ",Object(i.jsx)("strong",{children:"Digital Marketing"}),".",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"After 5 years I decided to return to my first love by going back to ",Object(i.jsx)("strong",{children:"web development"})," as self-taught and with the training ",Object(i.jsx)("strong",{children:"Le Wagon"}),"."]}));return Object(i.jsxs)("div",{style:{textAlign:"center"},children:[Object(i.jsx)(U,{children:"\xc0 Propos"}),Object(i.jsxs)(V,{children:[Object(i.jsx)(nn,{}),Object(i.jsx)($,{}),Object(i.jsx)(Z,{src:"/profile.jpeg",alt:"profile"}),Object(i.jsx)(en,{children:t})]})]})};function rn(){var n=Object(s.a)(["\n  padding-top: 200px;\n  height: calc(100vh - 200px);\n  width: 100%;\n  position: relative;\n"]);return rn=function(){return n},n}var an=g.a.div(rn()),on=function(n){n.language,n.onLanguageClick;return Object(i.jsx)(an,{})},cn=function(n){var e=n.language,t=n.onLanguageClick;return Object(i.jsxs)("div",{id:"global-div",children:[Object(i.jsx)(m,{language:e,onLanguageClick:t}),Object(i.jsx)(Y,{language:e,onLanguageClick:t}),Object(i.jsx)(tn,{language:e,onLanguageClick:t}),Object(i.jsx)(on,{})]})},ln=function(){var n=Object(r.useState)("fr"),e=Object(c.a)(n,2),t=e[0],a=e[1];return Object(i.jsx)(l.a,{children:Object(i.jsx)(cn,{language:t,onLanguageClick:function(n){document.querySelector(".activ-language").classList.remove("activ-language");var e=n.target.innerText.toLowerCase();a(e),n.target.classList.add("activ-language")}})})};o.a.render(Object(i.jsx)(ln,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1d4c8f08.chunk.js.map