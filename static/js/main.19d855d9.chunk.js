(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{37:function(n,e,t){"use strict";t.r(e);var i=t(0),o=t(1),r=t(16),a=t.n(r),c=t(6),s=t(24),l=t(2),d={phone:414,tab:1024},u=function(n){return function(e){return"@media (max-width: ".concat(d[n],"px) { ").concat(e," }")}},g=(document.querySelector(".dynamic-navbar"),[{label:"\xc0 propos",label_en:"About",position:1},{label:"Mes projets",label_en:"My projects",position:2},{label:"Mes formations",label_en:"Education",position:3},{label:"Mes outils",label_en:"My tools",position:4}]),p=function(n){var e=n.language,t=n.onLanguageClick,r=window.location.pathname.split("/");return r[1]="fr",r[1]="en",Object(i.jsxs)(o.Fragment,{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{onClick:t,className:"fr"===e?"activ-language":"",children:"FR"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{onClick:t,className:"en"===e?"activ-language":"",children:"EN"})})]})},b=t(3);function f(){var n=Object(l.a)(["\n    display: none;\n  "]);return f=function(){return n},n}function h(){var n=Object(l.a)(["\n  z-index: 1001;\n  background-color: #fff;\n  .show-navbar {\n    top: 0px;\n  }\n  ",";\n"]);return h=function(){return n},n}function j(){var n=Object(l.a)(["\n  position: absolute;\n  right: -6vw;\n  top: 10px;\n  .activ-language {\n    color: #6EB4D1;\n  }\n  ul {\n    margin-right: 6vw;\n    li {\n      font-size: 22px;\n      padding: 0 10px;\n      &:first-child {\n        border-right: thin solid black;\n      }\n      a {\n        cursor: pointer;\n        text-decoration: none;\n        color: #5E6472;\n        &:hover {\n          color: #6EB4D1;\n        }\n      }\n    }\n  }\n"]);return j=function(){return n},n}function m(){var n=Object(l.a)(["\n        font-size: 18px;\n      "]);return m=function(){return n},n}function x(){var n=Object(l.a)(["\n  height: 120px;\n  width: 100vw;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: -120px;\n  transition: top 0.3s;\n  transition-delay: 0.2s;\n  background-color: #fff;\n  border-bottom: thin solid #c5c2c2;\n  font-weight: 300;\n  display: flex;\n  justify-content: center;;\n  align-items: center;\n  z-index: 1001;\n  ul {\n    li {\n      font-size: 30px;\n      padding: 0 2vw;\n      font-family: 'Montserrat';\n      font-weight: 100;\n      ",";\n    }\n  }\n  img {\n    margin-left: 5vw;\n    height: 100px;\n    border: 1px solid #fff;\n    border-radius: 50%;\n  }\n  .logo-link {\n    position: absolute;\n    left: -40px;\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(l.a)(["\n  margin: 0 5px;\n  list-style: none;\n  z-index: 1000;\n  li {\n    display:inline;\n    a {\n      color: #5E6472;\n      text-decoration: none;\n      &:hover {\n        color: #6EB4D1;\n        cursor: pointer;\n      }\n    }\n  }\n"]);return v=function(){return n},n}var O=b.a.ul(v()),w=b.a.div(x(),u("tab")(m())),y=b.a.div(j()),k=b.a.div(h(),u("phone")(f())),L=function(n){var e=n.language,t=n.onLanguageClick,o=(n.fullPageScroll,n.stopFullPageListener),r=document.body.clientHeight/5,a=g.map((function(n,t){var o="fr"===e?n.label:n.label_en;return Object(i.jsx)("li",{children:Object(i.jsx)("a",{onClick:function(){return s(n.position*r)},children:o})},t)})),c=document.documentElement.scrollTop,s=function(n){o(n)};return document.addEventListener("mousemove",(function(n){var e=document.querySelector(".dynamic-navbar"),t=window.innerHeight;c>=t&&n.clientY<=150?e.classList.add("show-navbar"):e.classList.remove("show-navbar")})),document.addEventListener("scroll",(function(){var n=document.querySelector(".dynamic-navbar");document.documentElement.scrollTop<window.innerHeight&&n&&n.classList.remove("show-navbar")})),Object(i.jsx)(k,{children:Object(i.jsxs)(w,{className:"dynamic-navbar",children:[Object(i.jsx)("a",{className:"logo-link",onClick:function(){return s(0)},children:Object(i.jsx)("img",{src:"/light-logo.png",alt:"logo"})}),Object(i.jsx)(O,{children:a}),Object(i.jsx)(y,{children:Object(i.jsx)(O,{children:Object(i.jsx)(p,{language:e,onLanguageClick:t})})})]})})};function M(){var n=Object(l.a)(["\n      display: none;\n    "]);return M=function(){return n},n}function z(){var n=Object(l.a)(["\n    font-family: 'Montserrat';\n    font-size: 40px;\n    font-weight: 300;\n    color: #646a77;\n    background-color: #fff;\n    border: thin solid #c5c2c2;\n    border-right: none;\n    padding: 25px 20px 25px 10px;\n    display: flex;\n    align-items: center;\n    width: 325px;\n    align-self: flex-end;\n    position: -webkit-sticky;\n    position: fixed;\n    top: 75vh;\n    right: ",";\n    z-index: 1005;\n    outline: none;\n    img {\n      transform: scaleX(1);\n      height: 40px;\n      margin: 0px 35px 0px 20px;\n    }\n    p {\n      margin: 0;\n      font-weight: 100;\n      font-size: 30px;\n    }\n    &:hover {\n      color: #6EB4D1;\n\n    }\n    ",";\n  "]);return z=function(){return n},n}var C=b.a.button(z(),(function(n){return"-".concat(n.rightpos,"px")}),u("phone")(M())),E=function(n){var e=n.language,t=n.rightPos,o="fr"===e?"Contactez moi":"Contact me";return Object(i.jsxs)(C,{onClick:function(){return document.getElementById("contactdiv").classList.add("contact-show")},rightpos:t,children:[Object(i.jsx)("img",{src:"/arrow.png",alt:"arrow"})," ",Object(i.jsx)("p",{children:o})]})};function S(){var n=Object(l.a)(["\n    font-size: 18px;\n    justify-content: center;\n  "]);return S=function(){return n},n}function P(){var n=Object(l.a)(["\n      margin-left: 0;\n    "]);return P=function(){return n},n}function _(){var n=Object(l.a)(["\n      display: none;\n    "]);return _=function(){return n},n}function N(){var n=Object(l.a)(["\n  height: 100px;\n  width: 100vw;\n  border-top: thin solid #c5c2c2;\n  border-bottom: thin solid #c5c2c2;\n  position: relative;\n  font-size: 30px;\n  font-weight: 300;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1000;\n  ul {\n    margin-right: 6vw;\n    li {\n      padding: 0 2vw;\n      font-family: 'Montserrat';\n      font-weight: 100;\n      a {\n        color: #5E6472;\n        text-decoration: none;\n        cursor: pointer;\n        &:hover {\n          color: #6EB4D1;\n        }\n      }\n    }\n    ",";\n  }\n  img {\n    margin-left: 5vw;\n    height: 150px;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    transition: all 25s ease-out;\n    &:hover {\n      transform: rotate(3600deg);\n      transition: all 50s ease-out;\n    }\n    ",";\n  }\n\n  ",";\n"]);return N=function(){return n},n}function A(){var n=Object(l.a)(["\n  height: 50px;\n  width: 100vw;\n  background-color: #fff;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 22px;\n  font-weight: 300;\n  .activ-language {\n    color: #6EB4D1;\n  }\n  ul {\n    li {\n      padding: 0 10px;\n      font-family: 'Montserrat';\n      font-weight: 100;\n      &:first-child {\n        border-right: thin solid black;\n      }\n      a {\n        cursor: pointer;\n        text-decoration: none;\n        color: #5E6472;\n        &:hover {\n          color: #6EB4D1;\n        }\n      }\n    }\n  }\n"]);return A=function(){return n},n}function I(){var n=Object(l.a)(["\n  margin: 0 5px;\n  list-style: none;\n  z-index: 1000;\n  li {\n    display:inline;\n  }\n"]);return I=function(){return n},n}var D=b.a.ul(I()),T=b.a.div(A()),H=b.a.div(N(),u("phone")(_()),u("tab")(P()),u("tab")(S())),F=function(n){var e=n.language,t=n.onLanguageClick,o=(n.fullPageScroll,n.stopFullPageListener),r=document.body.clientHeight/5,a=g.map((function(n,t){var a="fr"===e?n.label:n.label_en;return Object(i.jsx)("li",{children:Object(i.jsx)("a",{onClick:function(){return e=n.position*r,void o(e);var e},children:a})},t)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(T,{children:Object(i.jsx)(D,{children:Object(i.jsx)(p,{language:e,onLanguageClick:t})})}),Object(i.jsxs)(H,{children:[Object(i.jsx)("img",{src:"/light-logo.png",alt:"logo"}),Object(i.jsx)(D,{children:a})]})]})},B=t(7),R=t(8),W=t(11);function q(){var n=Object(l.a)(["\n  box-shadow: 0px 0px 30px -19px rgba(0,0,0,0.75);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  position: relative;\n  position: -webkit-sticky;\n  position: fixed;\n  border: thin solid #c5c2c2;\n  background-color: #f8f8f8;\n  z-index: 1010;\n  top: 64vh;\n  right: -100%;\n  padding: 25px;\n  transition: all ease-in-out .8s;\n  .visit-card {\n    margin: 10px 0;\n    display: flex;\n    h2 {\n      font-weight: 300;\n      margin: 0;\n    }\n    img {\n      height: 64px;\n      margin-right: 10px;\n      border-radius: 3px;\n    }\n  }\n  a {\n    text-decoration: none;\n  }\n  h2 {\n    font-weight: 100;\n    display: flex;\n    align-items: center;\n    font-size: 25px;\n    margin-top: 0;\n  }\n  .icon {\n    font-size: 35px;\n    margin-right: 20px;\n  }\n  button {\n    background-color: rgba(0,0,0,0);\n    border: none;\n    height: 50px;\n    width: 80px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    cursor: pointer;\n    outline: none;\n    img {\n      height: 20px;\n      width: 40px;\n    }\n  }\n"]);return q=function(){return n},n}var J=b.a.div(q()),U=function(n){var e=n.language,t="fr"===e?"Mon profil":"My profile",o="fr"===e?"06 84 58 79 60":"+33 684 58 79 60";return Object(i.jsxs)(J,{id:"contactdiv",children:[Object(i.jsx)("button",{onClick:function(){document.getElementById("contactdiv").classList.remove("contact-show")},children:Object(i.jsx)("img",{src:"/fleche-contact.svg",alt:"arrow"})}),Object(i.jsxs)("div",{className:"visit-card",children:[Object(i.jsx)("img",{src:"/profile.jpeg",alt:"profile-pic"}),Object(i.jsx)("h2",{children:"Charles Delannoy"})]}),Object(i.jsx)("a",{href:"tel:+33684587960",children:Object(i.jsxs)("h2",{children:[Object(i.jsx)(B.a,{className:"icon",icon:R.c})," ",o]})}),Object(i.jsx)("a",{href:"mailto:charles.delannoy@hei.fr",children:Object(i.jsxs)("h2",{children:[Object(i.jsx)(B.a,{className:"icon",icon:R.a})," charles.delannoy@hei.fr"]})}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/charles-delannoy-20b16972/",target:"_blank",children:Object(i.jsxs)("h2",{children:[Object(i.jsx)(B.a,{className:"icon",icon:W.b})," ",t]})})]})};function G(){var n=Object(l.a)(["\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  img {\n    transform: rotate(-90deg);\n    width: 15px;\n    cursor: pointer;\n  }\n"]);return G=function(){return n},n}function Y(){var n=Object(l.a)(["\n    width: 100vw;\n  "]);return Y=function(){return n},n}function Q(){var n=Object(l.a)(["\n  width: 55vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  ",";\n"]);return Q=function(){return n},n}function V(){var n=Object(l.a)(["\n    width: 100vw;\n    background-position-y: 90%;\n  "]);return V=function(){return n},n}function X(){var n=Object(l.a)(["\n    background-position-x: 40%;\n  "]);return X=function(){return n},n}function K(){var n=Object(l.a)(["\n  height: calc(100vh - 150px);\n  background-image: url(","/devimg.jpg);\n  background-size: cover;\n  background-position-y: 70%;\n  width: 45vw;\n\n  ",";\n  ",";\n"]);return K=function(){return n},n}function Z(){var n=Object(l.a)(["\n    flex-direction: column;\n  "]);return Z=function(){return n},n}function $(){var n=Object(l.a)(["\n      margin-top: auto;\n      font-size: 30px;\n      line-height: 45px;\n      padding: 0;\n      margin: 10vh 0px 16vh 0px;\n    "]);return $=function(){return n},n}function nn(){var n=Object(l.a)(["\n  width: 100vw;\n  height: calc(100vh - 150px);\n  display: flex;\n  .text {\n    font-size: 40px;\n    line-height: 65px;\n    font-weight: 100;\n    padding: 0 40px;\n    font-family: 'Montserrat';\n    align-self: center;\n    text-align: center;\n    margin: 120px 30px 30px 30px;\n    color: #89c1da;\n    ",";\n    strong {\n      font-weight: 400;\n      background-image: linear-gradient(120deg,#edf2f4 0%,#edf2f4 0%);\n      background-repeat: no-repeat;\n      background-size: 100% 35%;\n      background-position-x: 100%;\n      background-position-y: 83%;\n      padding: 10px;\n      color: #5E6472;\n    }\n  }\n  ",";\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n  min-height: calc(100vh - 150px);\n  max-height: calc(100vh - 150px);\n  position: relative;\n"]);return en=function(){return n},n}var tn=b.a.div(en()),on=b.a.div(nn(),u("phone")($()),u("phone")(Z())),rn=b.a.div(K(),"",u("tab")(X()),u("phone")(V())),an=b.a.div(Q(),u("phone")(Y())),cn=b.a.div(G()),sn=function(){window.scrollTo({top:window.innerHeight+1,behavior:"smooth"})},ln=function(n){var e=n.language,t=n.onLanguageClick,r=n.fullPageScroll,a=n.stopFullPageListener,s=Object(o.useState)(1e3),l=Object(c.a)(s,2),d=(l[0],l[1]),u=Object(o.useState)(0),g=Object(c.a)(u,2),p=g[0],b=g[1];Object(o.useEffect)((function(){var n=document.body.clientHeight;d(n)}),[]),document.onscroll=function(){var n=window.scrollY+3;b(n<=270?n:270)};var f="fr"===e?"D\xe9veloppeur full-stack":"Full-stack developper";return Object(i.jsxs)(o.Fragment,{children:[Object(i.jsx)(U,{language:e}),Object(i.jsx)(E,{language:e,rightPos:p}),Object(i.jsx)(F,{language:e,onLanguageClick:t,fullPageScroll:r,stopFullPageListener:a}),Object(i.jsx)(tn,{children:Object(i.jsxs)(on,{children:[Object(i.jsx)(rn,{}),Object(i.jsxs)(an,{children:[Object(i.jsxs)("p",{className:"text",children:[Object(i.jsx)("strong",{children:"Charles DELANNOY"})," ",Object(i.jsx)("br",{}),f]}),Object(i.jsx)(cn,{children:Object(i.jsx)("img",{src:"/arrow.png",alt:"arrow",onClick:sn})})]})]})})]})};function dn(){var n=Object(l.a)(["\n    height: 100px;\n    line-height: 100px;\n    font-size: 35px;\n    background-position-x: 100%;\n    background-position-y: 63%;\n  "]);return dn=function(){return n},n}function un(){var n=Object(l.a)(["\n  padding: 0 20px;\n  text-shadow: -1px 0 #f8f8f8, 0 1px #f8f8f8, 1px 0 #f8f8f8, 0 -1px #f8f8f8;\n  height: 200px;\n  line-height: 200px;\n  margin: 0 auto;\n  font-family: 'Montserrat';\n  font-weight: 300;\n  font-size: 55px;\n  text-align: center;\n  background-image: linear-gradient(120deg,#dce4e8 0%,#dce4e8 0%);\n  background-repeat: no-repeat;\n  background-size: 90% 5px;\n  background-position-x: 100%;\n  background-position-y: 60%;\n  ",";\n"]);return un=function(){return n},n}var gn=b.a.h1(un(),u("phone")(dn()));function pn(){var n=Object(l.a)(["\n  height: calc(100vh);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]);return pn=function(){return n},n}var bn=b.a.div(pn());function fn(){var n=Object(l.a)(["\n    margin-bottom: 0;\n  "]);return fn=function(){return n},n}function hn(){var n=Object(l.a)(["\n    height: 100%;\n    border-bottom: thin solid #dce4e8;\n    border-top: thin solid #dce4e8;\n    margin: 0 7vw;\n    margin-bottom: 40px;\n  "]);return hn=function(){return n},n}function jn(){var n=Object(l.a)(["\n  display: flex;\n  ",";\n  ",";\n"]);return jn=function(){return n},n}function mn(){var n=Object(l.a)(["\n    align-self: flex-start;\n  "]);return mn=function(){return n},n}function xn(){var n=Object(l.a)(["\n  width: 45%;\n  align-self: flex-end;\n  ",";\n"]);return xn=function(){return n},n}function vn(){var n=Object(l.a)(["\n    height: calc(100vh - 100px);\n  "]);return vn=function(){return n},n}function On(){var n=Object(l.a)(["\n    flex-direction: column-reverse;\n  "]);return On=function(){return n},n}function wn(){var n=Object(l.a)(["\n      background-size: 100% 20%;\n      background-position-y: 68%;\n    "]);return wn=function(){return n},n}function yn(){var n=Object(l.a)(["\n      font-size: 4.8vw;\n      line-height: 6.7vw;\n      margin: 0;\n      color: black;\n    "]);return yn=function(){return n},n}function kn(){var n=Object(l.a)(["\n      align-self: center;\n      margin: 0 7vw;\n      padding-left: 0;\n      align-self: center;\n      border: none;\n      font-size: 3vw;\n    "]);return kn=function(){return n},n}function Ln(){var n=Object(l.a)(["\n  display: flex;\n  height: calc(100vh - 200px);\n  p {\n    align-self: center;\n    font-family: 'Montserrat';\n    font-size: 30px;\n    line-height: 45px;\n    margin-bottom: 150px;\n    margin-right: 10vw;\n    font-weight: 100;\n    border-left: thin solid #dce4e8;\n    padding-left: 30px;\n    ",";\n    ",";\n  }\n  strong {\n    font-weight: 100;\n    background-image: linear-gradient(120deg,#edf2f4 0%,#edf2f4 0%);\n    background-repeat: no-repeat;\n    background-size: 100% 35%;\n    background-position-x: 100%;\n    background-position-y: 83%;\n    padding: 10px;\n    color: #005b84;\n    ",";\n  }\n  ",";\n  ",";\n"]);return Ln=function(){return n},n}var Mn=b.a.div(Ln(),u("tab")(kn()),u("phone")(yn()),u("phone")(wn()),u("tab")(On()),u("phone")(vn())),zn=b.a.img(xn(),u("tab")(mn())),Cn=b.a.div(jn(),u("tab")(hn()),u("phone")(fn())),En=function(n){var e=n.language,t=(n.onLanguageClick,"fr"===e?"\xc0 Propos":"About"),o="fr"===e?Object(i.jsxs)("p",{children:["Issu d'une formation d'",Object(i.jsx)("strong",{children:"ing\xe9nieur g\xe9n\xe9raliste"}),", je suis devenu ",Object(i.jsx)("strong",{children:"consultant en Organisation et Management"})," en 2015. ",Object(i.jsx)("br",{}),"Tout d'abord dans le secteur de la ",Object(i.jsx)("strong",{children:"production \xe9nerg\xe9tique"})," je me suis par la suite dirig\xe9 vers ",Object(i.jsx)("strong",{children:"l'automobile"})," notamment dans le ",Object(i.jsx)("strong",{children:"Marketing Digital"}),".",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"Apr\xe8s 5 ans j'ai d\xe9cid\xe9 de revenir \xe0 mes premiers amours et de reprendre le ",Object(i.jsx)("strong",{children:"d\xe9veloppement web"})," en autodidacte et avec la formation ",Object(i.jsx)("strong",{children:"Le Wagon"}),"."]}):Object(i.jsxs)("p",{children:["Trained as a ",Object(i.jsx)("strong",{children:"general engineer"}),", I became an ",Object(i.jsx)("strong",{children:"Organization and Management consultant"})," in 2015. ",Object(i.jsx)("br",{}),"At first I worked for the ",Object(i.jsx)("strong",{children:"electricity production sector"}),", then I moved to the ",Object(i.jsx)("strong",{children:"automotive industry"})," particularly in ",Object(i.jsx)("strong",{children:"Digital Marketing"}),".",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"After 5 years I decided to return to my first love by going back to ",Object(i.jsx)("strong",{children:"web development"})," as self-taught and with the training ",Object(i.jsx)("strong",{children:"Le Wagon"}),"."]});return Object(i.jsxs)(bn,{style:{backgroundColor:"#f8f8f8"},children:[Object(i.jsx)(gn,{children:t}),Object(i.jsxs)(Mn,{children:[Object(i.jsx)(zn,{src:"/profile.png",alt:"logo"}),Object(i.jsx)(Cn,{children:o})]})]})},Sn=[{id:1,label:"Millesime Manager",link:"https://www.millesime-manager.com/",github:"https://github.com/Charles-Delannoy/Millesime-manager",description:["Projet de fin de batch pour la formation Le Wagon.","Millesime Manager est une application (PWA: Progressive Web App) de gestion de cave \xe0 vin. L'atout de cette application est l'indication de la date d'apog\xe9e permettant de boire son vin au bon moment pour en appr\xe9cier tous ses ar\xf4mes."],description_en:["End of batch project for Le Wagon training.","Millesime Manager is a Progressive Web App (PWA) for wine cellar management. This application is based on the indication of the peak date allowing you to drink your wine at the right time to appreciate all its aromas."],tools:["rails.png","JS.png","postgre.png","html.png","css.png"],back:"MM-back.png",screen:"MM-screen3.png",desktop:"MM-desktop.png"},{id:2,label:"Arma",link:"https://www.arma.legal/",github:"Private",description:["Site Web pour un cabinet d'avocat.","Le site est compos\xe9 d'une API permettant de r\xe9cup\xe9rer et de modifier les donn\xe9es du site. Une interface d'administration permet aux clients de g\xe9rer le contenu du site en toute autonomie. Le site web r\xe9cup\xe8re ces contenus pour les servir aux visiteurs."],description_en:["Website for a law firm.","The site is composed of an API allowing to retrieve and modify the data of the website. An administration interface allows customers to manage the content of the website independently. The website retrieves these contents to serve them to the visitors."],tools:["rails.png","react.png","postgre.png","html.png","css.png"],back:"Arma-back.png",screen:"arma-screen.png",desktop:"AA-Desktop.png"},{id:3,label:"Portfolio",link:"https://www.mustdev.fr/",github:"https://github.com/Charles-Delannoy/portfolio",description:["Pr\xe9sentation de mon parcours et de mes projets de developpement.","C'est le site sur lequel vous vous trouvez ! Il reprend un r\xe9sum\xe9 de mon parcours, mes principaux projets en tant que d\xe9veloppeur, mes formations et les outils que j'utilise. Bonne visite !"],description_en:["Presentation of my background and my development projects.","This is the website you are on! It summarizes my background, my main projects as a developer, my trainings and the tools I am using. Enjoy your visit!"],tools:["react.png","html.png","css.png"],back:"PF-back.png",screen:"PF-screen.png",desktop:"PF-desktop.png"}];function Pn(){var n=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 100% 100% 100%;\n    position: relative;\n    right: 100%;\n  "]);return Pn=function(){return n},n}function _n(){var n=Object(l.a)(["\n        top: 45%;\n      "]);return _n=function(){return n},n}function Nn(){var n=Object(l.a)(["\n        top: 45%;\n      "]);return Nn=function(){return n},n}function An(){var n=Object(l.a)(["\n    overflow: hidden;\n    display: flex;\n    button {\n      position: absolute;\n      outline: none;\n      z-index: 1003;\n      border: none;\n      padding: 10px;\n      background: rgba(0, 0, 0, 0);\n      img {\n        height: 60px;\n      }\n    }\n    .prev {\n      left: 2%;\n      top: 50%;\n      ",";\n    }\n    .next {\n      right: 2%;\n      top: 50%;\n      ",";\n      img {\n        transform: rotate(180deg);\n      }\n    }\n    .goback {\n      right: 0%;\n      transition: right 300ms linear;\n    }\n    .gonext {\n      right: 200%;\n      transition: right 300ms linear;\n    }\n  "]);return An=function(){return n},n}function In(){var n=Object(l.a)(["\n    width: 90%;\n    height: calc(100vh - 120px - 10%);\n    padding: 0 5%;\n  "]);return In=function(){return n},n}var Dn=b.a.div(In()),Tn=b.a.div(An(),u("tab")(Nn()),u("tab")(_n())),Hn=b.a.div(Pn()),Fn=function(n){var e=n.items,t=Object(o.useState)(0),r=Object(c.a)(t,2),a=r[0],s=r[1];return Object(i.jsxs)(Tn,{children:[Object(i.jsx)("button",{onClick:function(){var n=document.getElementById("slider");n.classList.add("goback");var t=a-1<0?e.length-1:a-1;setTimeout((function(){s(t),n.classList.remove("goback")}),400)},className:"prev",children:Object(i.jsx)("img",{src:"/arrow.png",alt:"arrow"})}),Object(i.jsx)("div",{children:Object(i.jsxs)(Hn,{id:"slider",children:[Object(i.jsx)(Dn,{children:e[a-1<0?e.length-1:a-1]}),Object(i.jsx)(Dn,{children:e[a]}),Object(i.jsx)(Dn,{children:e[a+1>e.length-1?0:a+1]})]})}),Object(i.jsx)("button",{onClick:function(){var n=document.getElementById("slider");n.classList.add("gonext");var t=a+1>e.length-1?0:a+1;setTimeout((function(){s(t),n.classList.remove("gonext")}),400)},className:"next",children:Object(i.jsx)("img",{src:"/arrow.png",alt:"arrow"})})]})};function Bn(){var n=Object(l.a)(["\nmargin-top: 25px;\n  img {\n    height: 25px;\n    padding-right: 10px;\n  }\n"]);return Bn=function(){return n},n}function Rn(){var n=Object(l.a)(["\n  width: 30%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  padding: 0 6%;\n  a, .disable-git {\n    padding: 15px;\n    font-size: 20px;\n    margin: 10px;\n    text-decoration: none;\n  }\n  .site-btn {\n    color: #646a77;\n    border: thin solid #646a77;\n    &:hover {\n      color: #adb1b9;\n      border: thin solid #adb1b9;\n    }\n  }\n  .git-btn {\n    color: #58a6ff;\n    border: thin solid #58a6ff;\n    &:hover {\n      color: #a8c3e2;\n      border: thin solid #a8c3e2;\n    }\n  }\n  .disable-git {\n    color: #adb1b9;\n    border: thin solid #adb1b9;\n  }\n"]);return Rn=function(){return n},n}function Wn(){var n=Object(l.a)(["\n  height 30%;\n  width: 100%;\n  display: flex;\n"]);return Wn=function(){return n},n}function qn(){var n=Object(l.a)(["\n  height: 100%;\n  width: 60%;\n  position: relative;\n  z-index: 1000;\n  font-family: 'Montserrat';\n  h1 {\n    color: #efefef;\n    font-size: 4.2vw;\n    line-height: 80px;\n    letter-spacing: 0.5vw;\n    position: absolute;\n    z-index: 1000;\n    top: 0;\n  }\n  .infos-description {\n    position: absolute;\n    z-index: 1001;\n    h2 {\n      padding: 10px;\n      padding-bottom: 0;\n      margin-bottom: 0;\n      line-height: 70px;\n      text-shadow: -1px 0 #f8f8f8, 0 1px #f8f8f8, 1px 0 #f8f8f8, 0 -1px #f8f8f8;\n      font-family: 'Montserrat';\n      font-weight: 400;\n    }\n  }\n"]);return qn=function(){return n},n}function Jn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 70%;\n  display: flex;\n  justify-content: center;\n  img {\n    object-fit: contain;\n  }\n  .desk-img {\n    max-width: 70%;\n    height: 100%;\n  }\n  .sm-img {\n    max-width: 30%;\n    height: 100%;\n  }\n"]);return Jn=function(){return n},n}function Un(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 0;\n"]);return Un=function(){return n},n}function Gn(){var n=Object(l.a)(["\n  width: 90%;\n  height: calc(100vh - 120px - 10%);\n  padding: 0 5%;\n"]);return Gn=function(){return n},n}b.a.div(Gn());var Yn=b.a.div(Un()),Qn=b.a.div(Jn()),Vn=b.a.div(qn()),Xn=b.a.div(Wn()),Kn=b.a.div(Rn()),Zn=b.a.div(Bn()),$n=function(n){var e=n.language,t=(n.onLanguageClick,"fr"===e?"Mes Projets":"My Projects"),o=Sn.map((function(n){var t="fr"===e?n.description:n.description_en,o="fr"===e?"Acc\xe8der au site":"Access Website",r="fr"===e?"Acc\xe8der au repo":"Access Repository",a="fr"===e?"Ce repo est priv\xe9":"This repository is private",c=t.map((function(e){return Object(i.jsx)("p",{children:e},n.id+e)})),s=n.tools.map((function(n){return Object(i.jsx)("img",{src:""+"/".concat(n),alt:n})})),l="Private"===n.github?Object(i.jsxs)("div",{className:"disable-git",children:[Object(i.jsx)(B.a,{icon:W.a})," ",a]}):Object(i.jsxs)("a",{className:"git-btn",href:n.github,target:"_blank",children:[Object(i.jsx)(B.a,{icon:W.a})," ",r]});return Object(i.jsxs)(Yn,{back:"url(".concat("","/").concat(n.back,")"),screen:"url(".concat("","/").concat(n.screen,")"),children:[Object(i.jsxs)(Qn,{children:[Object(i.jsx)("img",{className:"desk-img",src:""+"/".concat(n.desktop),alt:"desktop view"}),Object(i.jsx)("img",{className:"sm-img",src:""+"/".concat(n.screen),alt:"smartphone view"})]}),Object(i.jsxs)(Xn,{children:[Object(i.jsxs)(Vn,{children:[Object(i.jsx)("h1",{children:n.label}),Object(i.jsxs)("div",{className:"infos-description",children:[Object(i.jsx)("h2",{children:n.label}),c,Object(i.jsx)(Zn,{children:s})]})]}),Object(i.jsxs)(Kn,{children:[Object(i.jsxs)("a",{className:"site-btn",href:n.link,target:"_blank",children:[Object(i.jsx)(B.a,{icon:R.b})," ",o]}),l]})]})]},n.id)}));return Object(i.jsxs)(bn,{style:{backgroundColor:"#fff"},children:[Object(i.jsx)(gn,{children:t}),Object(i.jsx)(Fn,{items:o})]})},ne=[{id:1,label:"HEI",img:"HEI.jpg",logo:"logoHei.png",date:"2008 - 2014",date_en:"2008 - 2014",diplomes:["Dipl\xf4me d'Ing\xe9nieur G\xe9n\xe9raliste","Informatique (ITI), Organisation & Management (OME)"],diplomes_en:["Degree in General Engineering"],description:"Ecole d'ing\xe9nieur g\xe9n\xe9raliste bas\xe9e \xe0 Lille",description_en:"General engineering school based in Lille, France"},{id:2,label:"OpenClassroom",img:"open.jpg",logo:"logoOpen.png",date:"2019",date_en:"2019",diplomes:["Apprenez \xe0 cr\xe9er votre site web avec HTML5 et CSS3","Concevez votre site web avec PHP et MySQL"],diplomes_en:["Learn how to create a website with HTML5 and CSS3","Design your website with PHP and MySQL"],description:"Site web de formation en ligne qui propose \xe0 ses membres des cours certifiants",description_en:"Online training website that offers certified courses to its members"},{id:3,label:"Le Wagon",img:"wagon.jpg",logo:"logoWagon.png",date:"Avril - Juin 2020",date_en:"April - June 2020",diplomes:["Certification de concepteur - d\xe9veloppeur d'applications web"],diplomes_en:["Web Application Designer - Developer Certification"],description:"Bootcamp de d\xe9veloppement web (HTML, CSS, JS, Ruby, RoR)",description_en:"Web development bootcamp (HTML, CSS, JS, Ruby, RoR)"},{id:4,label:"Udemy",img:"udemy.png",logo:"logoUdemy.svg",date:"2020",date_en:"2020",diplomes:["Moderne React avec Redux [Mise \xe0 jour 2020]"],diplomes_en:["Modern React with Redux [2020 Update]"],description:"Site internet de formation en ligne \xe0 destination des adultes et des \xe9tudiants",description_en:"Online training website for adults and students"}];function ee(){var n=Object(l.a)(["\n  height: 100%;\n  object-fit: contain;\n"]);return ee=function(){return n},n}function te(){var n=Object(l.a)(["\n  background-color: rgba(250, 250, 250, 0.4);\n  height: 70%;\n  width: calc(96% - 8px);\n  border: 4px solid #fff;\n  margin: 0 calc(2% - 4px);\n  padding: 5px;\n  transition: margin ease-in-out .10s;\n  transition: width ease-in-out .6s;\n"]);return te=function(){return n},n}function ie(){var n=Object(l.a)(["\n          font-size: 3vw;\n          padding: 0;\n        "]);return ie=function(){return n},n}function oe(){var n=Object(l.a)(["\n        height: 60%;\n      "]);return oe=function(){return n},n}function re(){var n=Object(l.a)(["\n        display: none;\n      "]);return re=function(){return n},n}function ae(){var n=Object(l.a)(["\n        font-size: 3vw;\n        padding-top: 0;\n      "]);return ae=function(){return n},n}function ce(){var n=Object(l.a)(["\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around;\n  position: relative;\n  align-self: center;\n  opacity: 0;\n\n  height: 100%;\n  position: absolute;\n  z-index: 1001;\n  transition: all ease-in-out .6s;\n  .description {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    h2 {\n      font-size: 20px;\n      font-weight: 400;\n      margin: 0 2%;\n      border-top: 1px solid #fff;\n      line-height: 20px;\n      padding-top: 10px;\n      ",";\n    }\n    strong {\n      font-weight: 400;\n    }\n    .descr-p {\n      margin-right: 1%;\n      width: 20%;\n      min-height: 80%;\n      background-color: rgba(250, 250, 250, 0.4);\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      p {\n        font-size: 15px;\n        font-weight: 100;\n        margin: 0;\n        padding: 10px 0;\n      }\n      ",";\n    }\n    .education {\n      height: 50%;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n      margin-bottom: 5px;\n      ",";\n      p {\n        font-size: 20px;\n        padding: 0;\n        padding-bottom: 5px;\n        margin: 0;\n        ",";\n      }\n    }\n    font-family: 'Montserrat';\n    position: absolute;\n    left: 100%;\n    color: #fff;\n    transition: all ease-in-out .6s;\n    text-align: center;\n    width: 80%;\n  }\n\n"]);return ce=function(){return n},n}function se(){var n=Object(l.a)(["\n  position: relative;\n  text-align: center;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n"]);return se=function(){return n},n}function le(){var n=Object(l.a)(["\n        width: 100%;\n        margin-left: 0%;\n      "]);return le=function(){return n},n}function de(){var n=Object(l.a)(["\n  background-position-y: 20%;\n  width: 100%;\n  height: 22%;\n  background-size: cover;\n  position: relative;\n  transition: all ease-in-out .6s;\n  &:hover {\n    transform: scale(1.1);\n    transition: all ease-in-out .6s;\n    .frame {\n      margin: 0 2%;\n      width: 15%;\n      transition: all ease-in-out .6s;\n    }\n    .hover-content {\n      width: 80%;\n      margin-left: 20%;\n      background-color: rgba(0, 0, 0, 0.7);\n      opacity: 1;\n      ",";\n      transition: all ease-in-out .6s;\n      .description {\n        width: 100%;\n        left: 0%;\n        transition: all ease-in-out .6s;\n      }\n    }\n  }\n"]);return de=function(){return n},n}function ue(){var n=Object(l.a)(["\n  height: calc(100vh - 200px - 5%);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0 5%;\n"]);return ue=function(){return n},n}var ge=b.a.div(ue()),pe=b.a.div(de(),u("phone")(le())),be=b.a.div(se()),fe=b.a.div(ce(),u("phone")(ae()),u("phone")(re()),u("phone")(oe()),u("phone")(ie())),he=b.a.div(te()),je=b.a.img(ee()),me=function(n){var e=n.language,t=(n.onLanguageClick,ne.map((function(n){var t="fr"===e?n.diplomes:n.diplomes_en,o="fr"===e?n.date:n.date_en,r="fr"===e?n.description:n.description_en,a=t.map((function(e){return Object(i.jsx)("p",{children:Object(i.jsx)("strong",{children:e})},n.id+e)}));return Object(i.jsxs)(pe,{style:{backgroundImage:"url(".concat("","/").concat(n.img,")")},children:[Object(i.jsx)(fe,{className:"hover-content",children:Object(i.jsxs)("div",{className:"description",children:[Object(i.jsxs)("div",{style:{flexGrow:"1",height:"100%"},children:[Object(i.jsx)("div",{className:"education",children:a}),Object(i.jsx)("h2",{children:o})]}),Object(i.jsx)("div",{className:"descr-p",children:Object(i.jsx)("p",{children:r})})]})}),Object(i.jsx)(be,{children:Object(i.jsx)(he,{className:"frame",children:Object(i.jsx)(je,{src:""+"/".concat(n.logo),alt:n.label})})})]},n.id)}))),o="fr"===e?"Mes Formations":"Education";return Object(i.jsxs)(bn,{style:{backgroundColor:"#f8f8f8"},children:[Object(i.jsx)(gn,{children:o}),Object(i.jsx)(ge,{children:t})]})},xe={ruby:{label:"Ruby",logo:"ruby.png"},js:{label:"Javascript",logo:"JS.png"},html:{label:"HTML5",logo:"html.png"},css:{label:"CSS3",logo:"css.png"},rails:{label:"Ruby on Rails",logo:"rails.png"},react:{label:"REACT (JS)",logo:"react.png"},bootsrap:{label:"Boostrap",logo:"bootstrap.png"},semantic:{label:"Semantic UI",logo:"semantic.png"},postgre:{label:"PostgreSQL",logo:"postgre.png"},mysql:{label:"MySQL",logo:"mysql.png"},heroku:{label:"Heroku",logo:"heroku.png"},ovh:{label:"OVH",logo:"ovh.png"},namecheap:{label:"NameCheap",logo:"namecheap.png"},figma:{label:"Figma",logo:"figma.png"},fontawesome:{label:"Font Awesome",logo:"fontawesome.png"},unsplash:{label:"Unsplash",logo:"unsplash.png"},gfonts:{label:"Google Fonts",logo:"gfonts.png"}},ve=[{id:1,label:"Languages",label_en:"Languages",logos:[xe.ruby,xe.js,xe.html,xe.css]},{id:2,label:"Frameworks / Librairies front",label_en:"Frameworks / Front librairies",logos:[xe.rails,xe.react,xe.bootsrap,xe.semantic]},{id:2,label:"Bases de donn\xe9es",label_en:"Database",logos:[xe.postgre,xe.mysql]},{id:2,label:"Hebergement / Noms de domaine",label_en:"Hosting / Domain Names",logos:[xe.heroku,xe.ovh,xe.namecheap]},{id:2,label:"Divers",label_en:"Miscellaneous",logos:[xe.figma,xe.fontawesome,xe.unsplash,xe.gfonts]}];function Oe(){var n=Object(l.a)(["\n  height: 15%;\n  margin-bottom: 25px;\n  position: relative;\n  border: thin solid #dce4e8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .title {\n    position: absolute;\n    top: -20%;\n    display: inline-block;\n    h2 {\n      font-family: 'Montserrat';\n      font-size: 28px;\n      font-weight: 400;\n      background: #fff;\n      text-align: center;\n      padding: 0 20px;\n      margin: 0 auto;\n    }\n  }\n  .logos {\n    position: relative;\n    height: 50%;\n    img {\n      height: 100%;\n      padding: 0 10px\n    }\n    .logo-description {\n      display: none;\n      text-align: center;\n      color: #fff;\n      background: #000;\n      border-radius: 5px;\n      width: 150%;\n      margin: 0 quto;\n      line-height: 30px;\n      justify-content: center;\n      flex-direction: column;\n      position: absolute;\n      top:-65%;\n      left: -25%;\n      p {\n        margin: 0;\n      }\n      img {\n        height: 10px;\n        width: 20px;\n        position: absolute;\n        bottom:-8px;\n        left: calc(50% - 20px);\n      }\n    }\n    &:hover {\n      .logo-description {\n      display: flex;\n    }\n    }\n  }\n"]);return Oe=function(){return n},n}function we(){var n=Object(l.a)(["\n  height: calc(100vh - 200px);\n  padding: 0 5%;\n"]);return we=function(){return n},n}var ye=b.a.div(we()),ke=b.a.div(Oe()),Le=function(n){var e=n.language,t=(n.onLanguageClick,"fr"===e?"Mes Outils":"My Tools"),o=ve.map((function(n){var t=n.logos.map((function(n){return Object(i.jsxs)("div",{className:"logos",children:[Object(i.jsx)("img",{src:""+"/".concat(n.logo),alt:n.label}),Object(i.jsxs)("div",{className:"logo-description",children:[Object(i.jsx)("p",{children:n.label}),Object(i.jsx)("img",{src:"/bottom-arrow.png",alt:n.label})]})]})})),o="fr"===e?n.label:n.label_en;return Object(i.jsxs)(ke,{children:[Object(i.jsx)("div",{className:"title",children:Object(i.jsx)("h2",{children:o})}),t]})}));return Object(i.jsxs)(bn,{style:{backgroundColor:"#fff"},children:[Object(i.jsx)(gn,{children:t}),Object(i.jsx)(ye,{children:o})]})};function Me(){var n=Object(l.a)(["\n  -webkit-overflow-scrolling: touch;\n"]);return Me=function(){return n},n}var ze=b.a.div(Me()),Ce=function(n){var e=n.language,t=n.onLanguageClick,r=Object(o.useState)(0),a=Object(c.a)(r,2),s=a[0],l=a[1],d=Object(o.useState)(window.scrollY),u=Object(c.a)(d,2),g=(u[0],u[1],function(n){var e=document.body.clientHeight/5,t=s;window.scrollY>t?(t=s+e,document.getElementById("contactdiv").classList.remove("contact-show")):(t=s-e,document.getElementById("contactdiv").classList.remove("contact-show")),(t=t<0?0:t)>=0&&t<=document.body.clientHeight&&p(t)}),p=function(n){document.removeEventListener("scroll",g),window.scrollTo({top:n,behavior:"smooth"}),setTimeout((function(){return l(n)}),1e3)},b=function(n){document.addEventListener("scroll",g)};return Object(o.useEffect)((function(){b()}),[]),Object(o.useEffect)((function(){b()}),[s]),Object(i.jsxs)(ze,{children:[Object(i.jsx)(L,{language:e,onLanguageClick:t,fullPageScroll:b,stopFullPageListener:p}),Object(i.jsx)(ln,{language:e,onLanguageClick:t,fullPageScroll:b,stopFullPageListener:p}),Object(i.jsx)(En,{language:e,onLanguageClick:t}),Object(i.jsx)($n,{language:e}),Object(i.jsx)(me,{language:e}),Object(i.jsx)(Le,{language:e})]})},Ee=function(){var n=Object(o.useState)("fr"),e=Object(c.a)(n,2),t=e[0],r=e[1];return Object(i.jsx)(s.a,{children:Object(i.jsx)(Ce,{language:t,onLanguageClick:function(n){document.querySelector(".activ-language").classList.remove("activ-language");var e=n.target.innerText.toLowerCase();r(e),n.target.classList.add("activ-language")}})})};t(36);a.a.render(Object(i.jsx)(Ee,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.19d855d9.chunk.js.map