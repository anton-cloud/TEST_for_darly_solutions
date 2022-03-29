(this.webpackJsonpauth=this.webpackJsonpauth||[]).push([[0],{65:function(n,e,t){},74:function(n,e,t){"use strict";t.r(e);var i=t(0),c=t.n(i),a=t(14),s=t.n(a),r=t(23),o=t(28),l=t(41),d=Object(l.b)({name:"user",initialState:{token:null,id:null,email:null},reducers:{setUser:function(n,e){var t=e.payload,i=t.token,c=t.email,a=t.id;n.token=i,n.email=c,n.id=a},removeUser:function(n){n.token=null,n.email=null,n.id=null}}}),b=d.actions,j=b.setUser,u=b.removeUser,h=d.reducer,p=Object(l.a)({reducer:{user:h}});t(65);function x(){var n=Object(o.c)((function(n){return n.user})),e=n.email;return{isAuth:!!e,email:e,token:n.token,id:n.id}}var m,f,O,g,v,k=t(26),y=t(27),N=y.a.header(m||(m=Object(k.a)(["\n  height: 60px;\n  /* background-color: lightgrey; */\n  border-bottom: 2px solid #c0c0c0;\n  box-shadow: 0px 7px 20px 0px rgba(0, 14, 24, 0.2);\n  background: #f2f8ff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 40px;\n\n  .navList {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    align-items: center;\n  }\n\n  .navLink,\n  .userText {\n    text-decoration: none;\n    font-weight: 700;\n    color: #112b6b;\n    transition: all 0.3s ease;\n  }\n\n  .navLink:hover {\n    color: #fc7f2b;\n  }\n\n  .navItem:not(:last-child) {\n    margin-right: 20px;\n  }\n\n  .navLinkActive {\n    color: #fc7f2b;\n  }\n\n  .userTextWrapper {\n    display: flex;\n    align-items: center;\n  }\n\n  .userText {\n    color: grey;\n    margin-left: 20px;\n  }\n\n  .navButton {\n    margin-left: 5px;\n    padding: 10px 20px;\n\n    background-color: #fc7f2b;\n    outline: none;\n    border: none;\n    border-radius: 20px;\n\n    color: #fff;\n    overflow: visible;\n    transition: all 0.3s ease;\n    cursor: pointer;\n\n    .navButton:hover {\n      background-color: #fc9e2b;\n      transform: scale(1.1);\n    }\n  }\n"]))),w=t(8),L=function(){var n=x(),e=n.isAuth,t=n.email,i=Object(o.b)();return Object(w.jsxs)(N,{children:[Object(w.jsx)("img",{src:"https://darly.solutions/wp-content/uploads/2019/11/logo.svg",alt:"logo"}),Object(w.jsx)("nav",{className:"nav",children:Object(w.jsxs)("ul",{className:"navList",children:[!e&&Object(w.jsx)("li",{className:"navItem",children:Object(w.jsx)(r.c,{to:"/login",className:"navLink",activeClassName:"navLinkActive",children:"Login"})}),!e&&Object(w.jsx)("li",{children:Object(w.jsx)(r.c,{to:"/register",className:"navLink",activeClassName:"navLinkActive",children:"Registration"})}),e&&Object(w.jsx)("li",{className:"navItem",children:Object(w.jsxs)("div",{className:"userTextWrapper",children:[Object(w.jsxs)("p",{className:"userText",children:["Hello, ",t," "]}),Object(w.jsx)("button",{className:"navButton",onClick:function(){return i(u())},children:"Log Out"})]})})]})})]})},S=y.a.main(f||(f=Object(k.a)(["\n  /* display: flex;\n  flex-direction: column; */\n  padding: 20px;\n"]))),A=t(13),I=y.a.div(O||(O=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .title,\n  .subTitle,\n  .description,\n  a {\n    margin: 0;\n    padding: 10px 0 0 0;\n  }\n"]))),T=function(){var n=x(),e=n.isAuth;n.email;return e?Object(w.jsxs)(I,{children:[Object(w.jsx)("h1",{className:"title",children:"Anton Sharudylo"}),Object(w.jsx)("p",{className:"description",children:"Junior Front-End developer"}),Object(w.jsx)("h2",{className:"subTitle",children:"Contacts:"}),Object(w.jsx)("p",{className:"description",children:Object(w.jsx)("a",{href:"tel:+499123456789",children:"+38-096-408-7199"})}),Object(w.jsx)("p",{className:"description",children:Object(w.jsx)("a",{href:"mailto:ask@htmlbook.ru",children:"a.sharudylo.gmail.com"})}),Object(w.jsx)("p",{className:"description",children:Object(w.jsx)("a",{href:"https://www.linkedin.com/in/anton-sharudylo-196093194/",children:"Linkedin"})}),Object(w.jsx)("p",{className:"description",children:Object(w.jsx)("a",{href:"https://github.com/anton-cloud",children:"GitHub"})}),Object(w.jsx)("p",{className:"description",children:"Telegram: anton_sh94"})]}):Object(w.jsx)(A.a,{to:"/login"})},C=t(15),R=t(102),E=y.a.form(g||(g=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin: 0 auto;\n\n  width: 30vw;\n  height: 20vh;\n\n  .button {\n    margin-top: 20px;\n\n    height: 46px;\n    padding: 0 13px 0 23px;\n    background-color: #fc7f2b;\n    outline: none;\n    border: none;\n    border-radius: 20px;\n\n    font-size: 20px;\n    color: #fff;\n    overflow: visible;\n    transition: all 0.3s ease;\n    cursor: pointer;\n  }\n\n  .button:hover {\n    background-color: #fc9e2b;\n    transform: scale(1.1);\n  }\n"]))),U=function(n){var e=n.title,t=n.handleClick,c=Object(i.useState)(""),a=Object(C.a)(c,2),s=a[0],r=a[1],o=Object(i.useState)(""),l=Object(C.a)(o,2),d=l[0],b=l[1],j=function(n){n.preventDefault(),t(s,d)};return Object(w.jsxs)(E,{onSubmit:j,autoComplete:"off",children:[Object(w.jsx)(R.a,{label:"Email",type:"email",name:"email",value:s,onChange:function(n){return r(n.target.value)}}),Object(w.jsx)(R.a,{label:"Password",type:"password",name:"password",value:d,onChange:function(n){return b(n.target.value)}}),Object(w.jsx)("button",{type:"submit",onClick:j,className:"button",children:e})]})},B=t(37),z=function(){var n=Object(o.b)(),e=Object(A.g)();return Object(w.jsx)(U,{title:"login",handleClick:function(t,i){var c=Object(B.b)();Object(B.c)(c,t,i).then((function(t){var i=t.user;console.log(i),n(j({email:i.email,id:i.uid,token:i.accessToken})),e.push("/")})).catch((function(){return alert("ERROR LOGIN!")}))}})},D=y.a.div(v||(v=Object(k.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .title {\n    font-family: "Abel", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    color: #112b6b;\n    font-size: 48px;\n    line-height: 60px;\n\n    margin: 0;\n    padding: 0;\n  }\n\n  .description {\n    font-family: "Abel", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 28px;\n    color: #7b89ad;\n  }\n']))),F=function(){return Object(w.jsxs)(D,{children:[Object(w.jsx)("h1",{className:"title",children:"Sing Up"}),Object(w.jsx)(z,{}),Object(w.jsxs)("p",{className:"description",children:["Do you want to register ? ",Object(w.jsx)(r.b,{to:"/register",children:"Sing In"})]})]})},J=function(){var n=Object(o.b)(),e=Object(A.g)().push;return Object(w.jsx)(U,{title:"registration",handleClick:function(t,i){var c=Object(B.b)();Object(B.a)(c,t,i).then((function(t){var i=t.user;console.log(i),n(j({email:i.email,id:i.uid,token:i.accessToken})),e("/")})).catch((function(){return alert("ERROR REGISTER!")}))}})},G=function(){return Object(w.jsxs)(D,{children:[Object(w.jsx)("h1",{className:"title",children:"Sing In"}),Object(w.jsx)(J,{}),Object(w.jsxs)("p",{className:"description",children:["Are you already registered? ",Object(w.jsx)(r.b,{to:"/login",children:"Sing Up"})]})]})},H=function(){return Object(w.jsx)(S,{children:Object(w.jsxs)(A.d,{children:[Object(w.jsx)(A.b,{exact:!0,path:"/",component:T}),Object(w.jsx)(A.b,{path:"/login",component:F}),Object(w.jsx)(A.b,{path:"/register",component:G})]})})},q=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(L,{}),Object(w.jsx)(H,{})]})},M=t(53);Object(M.a)({apiKey:"AIzaSyAiVgMqfb7YeL_DJgTejqFH37bFxnLU8kw",authDomain:"auth-darly-solutions.firebaseapp.com",projectId:"auth-darly-solutions",storageBucket:"auth-darly-solutions.appspot.com",messagingSenderId:"322489203208",appId:"1:322489203208:web:21fe4518206b46dc702fbd"});s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(r.a,{children:Object(w.jsx)(o.a,{store:p,children:Object(w.jsx)(q,{})})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.2af17d91.chunk.js.map