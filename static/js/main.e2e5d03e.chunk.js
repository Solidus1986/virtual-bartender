(this["webpackJsonpchatbot-cocktail"]=this["webpackJsonpchatbot-cocktail"]||[]).push([[0],{102:function(e,t,s){},150:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(32),i=s.n(n),r=(s(102),s(31)),o=s.n(r),l=(s.p,s(43)),h=s(28),d=s(96),j=s(3),u=s(25),p="RESPONSE_USER_SUCCESS",m="RESPONSE_USER_FAIL",b="SESSION_SUCCESS",O="SESSION_FAIL",y="RESPONSE_BOT_SUCCESS",g="RESPONSE_BOT_FAIL",x="MESSAGE_SUCCESS",f="MESSAGE_FAIL",v={messagesChat:[],messages:[]},w=Object(h.combineReducers)({kwalys:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,s=t.type,c=t.payload,a=e.messagesChat,n=e.messages;switch(s){case p:return n=[].concat(Object(u.a)(n),[{selectResponse:c}]),Object(j.a)(Object(j.a)({},e),{},{messagesChat:a});case m:return Object(j.a)({},e);case b:return localStorage.setItem("session",c),Object(j.a)({},e);case O:return Object(j.a)({},e);case y:return n=[].concat(Object(u.a)(n),[{message:c,type:"bot"}]),Object(j.a)(Object(j.a)({},e),{},{messages:n});case g:return Object(j.a)({},e);case x:return n=[].concat(Object(u.a)(n),[{message:c,type:"user"}]),Object(j.a)(Object(j.a)({},e),{},{messages:n});case f:default:return Object(j.a)({},e)}}}),k=s(97),C=[d.a],S=Object(h.createStore)(w,{},Object(k.composeWithDevTools)(h.applyMiddleware.apply(void 0,C))),N=s(17),_=s(19),L=s(18),B=s.n(L),P=s(27),R=s(2);function A(e){var t=e.dataMessages,s=Object(_.useSpring)({opacity:1,from:{opacity:0},delay:250});return Object(R.jsx)("div",{className:"chat-messages",children:t.map((function(e){return Object(R.jsx)(_.animated.div,{className:"mess",type:e.type,style:s,children:"media"===e.type?Object(R.jsx)("img",{className:"media",src:e.content}):Object(R.jsx)("div",{children:e.content.replace(/<(?:.|\n)*?>/gm," ")})})}))})}var E=s(6),I=s.p+"static/media/short.9bdb22ec.svg",U=s.p+"static/media/long.473a2d63.svg",T=s.p+"static/media/acide.7f718d8c.jpg",M=s.p+"static/media/smocky.1ac48840.jpg",K=s.p+"static/media/fruity.e5f99a7d.jpg";s(149);function H(e){var t=e.dataResponses,s=e.dataHandleSubmit,c=Object(_.useSpring)({to:{transform:"translateY(10px)",opacity:1},opacity:1,from:{transform:"translateY(50px)",opacity:0},delay:500});return Object(R.jsx)("div",{className:"chat-responses",children:t.map((function(e){return Object(R.jsx)(_.animated.div,{style:c,children:function(){switch(e.content){case"Short":return Object(R.jsx)("img",{className:"glass-short",height:80,src:I,alt:e.content,onClick:s,value:e.content,name:e.tracking},e.id);case"Long":return Object(R.jsx)("img",{className:"glass-long",height:100,src:U,alt:e.content,onClick:s,value:e.content,name:e.tracking},e.id);case"Acid":return Object(R.jsxs)("div",{className:"taste",onClick:s,children:[Object(R.jsx)("img",{className:"imgResponse",height:80,src:T,alt:e.content,value:e.content,name:e.tracking},e.id),Object(R.jsx)("p",{children:e.content})]});case"Smocky":return Object(R.jsxs)("div",{className:"taste",onClick:s,children:[Object(R.jsx)("img",{className:"imgResponse",height:80,src:M,alt:e.content,value:e.content,name:e.tracking},e.id),Object(R.jsx)("p",{children:e.content})]});case"Fruity":return Object(R.jsxs)("div",{className:"taste",onClick:s,children:[Object(R.jsx)("img",{className:"imgResponse",height:80,src:K,alt:e.content,value:e.content,name:e.tracking},e.id),Object(R.jsx)("p",{children:e.content})]});case"URL_COCKTAIL:Cocktail Sidecar":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2020-04/the_hennessy_ginger_cocktail.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Cocktail Summer Delight":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2020-05/hennessy_summer_delight_cocktail.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Cocktail French 75":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2020-06/thefrench75-1440x770.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Cocktail Sangria":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-06-hennessy-sangria.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Cocktail Horse Neck":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-19-horse-neck.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Cocktail Hennessy Ginger":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2020-04/the_hennessy_ginger_cocktail.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Coktail Artist":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-05-the-artist.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Cocktail Punch Royal":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-12-punch-royal.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Cocktail Tamarindo":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2020-04/the_hennessy_tamarindo_cocktail.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Cocktail Hennessy Coqui":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2020-04/the_hennessy_coqui_cocktail.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Cocktail Mata Hari":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-20-mata-hari.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Cocktail Flor de Jamaica":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-04-flor-de-jamaica.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Cocktail North Star":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2020-04/the_hennessy_north_star_cocktail.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});case"URL_COCKTAIL:Cocktail Sazerac":return Object(R.jsxs)("div",{className:"video",children:[" ",Object(R.jsx)(E.Player,{src:"https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-24-sazerac.mp4",fluid:!1,width:320,height:190,children:Object(R.jsx)(E.BigPlayButton,{position:"center"})})]});default:return Object(R.jsx)(F,{user:e,dataHandleSubmit:s})}}()})}))})}function F(e){var t=e.user,s=e.dataHandleSubmit;return Object(R.jsx)("input",{className:"bot-responses",type:"submit",onClick:s,value:t.content,name:t.tracking},t.id)}var D=Object(l.b)((function(e){return{chat:e.kwalys.messagesChat,botMessages:e.kwalys.messages,token:localStorage.session}}),{userMessage:function(e){return function(){var t=Object(P.a)(B.a.mark((function t(s){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{s({type:p,payload:e},console.log(e,"??"))}catch(c){s({type:m})}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},botMessage:function(){return function(){var e=Object(P.a)(B.a.mark((function e(t){var s;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("http://app.ivy.kwalys.com:8080/Wideagency/bots/Demo_hennessy/api/web");case 3:s=e.sent,t({type:y,payload:s.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:g});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},sendMessage:function(e){return function(){var t=Object(P.a)(B.a.mark((function t(s){var c;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("http://app.ivy.kwalys.com:8080/Wideagency/bots/Demo_hennessy/api/web",e);case 3:c=t.sent,s({type:x,payload:c.data.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),s({type:f});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){e.chat;var t=e.botMessages,s=e.token,a=(e.userMessage,e.botMessage),n=e.sendMessage,i=Object(c.useState)(""),r=Object(N.a)(i,2),o=(r[0],r[1],Object(c.useRef)(null)),l=Object(c.useState)(!1),h=Object(N.a)(l,2),d=h[0],j=h[1],u=Object(c.useState)(!1),p=Object(N.a)(u,2),m=p[0],b=p[1],O=Object(c.useState)(!0),y=Object(N.a)(O,2),g=y[0],x=y[1],f=Object(c.useState)([]),v=Object(N.a)(f,2),w=(v[0],v[1],function(e){e.preventDefault();var t={session:s,tracking:e.target.name,text:e.target.value};n(t)});console.log(t,"le chat"),Object(c.useEffect)((function(){t&&o.current&&o.current.scrollIntoView({behavior:"smooth"})}),[t]);var k=Object(_.useSpring)({to:{transform:m?"translateY(0%)":"translateY(100%)"},delay:10}),C=Object(_.useSpring)({opacity:1,from:{opacity:0},delay:500}),S=Object(_.useSpring)({opacity:1,from:{opacity:0},delay:500}),L=Object(_.useSpring)({opacity:1,from:{opacity:0},delay:500});return Object(R.jsxs)("div",{className:"chatbot",children:[m?Object(R.jsxs)(_.animated.div,{style:k,className:"chat",children:[Object(R.jsx)("div",{className:"chat-header",children:Object(R.jsx)("div",{className:"close",onClick:function(){x(!g),b(!m),t.splice(0,t.length)},children:"\xd7"})}),Object(R.jsxs)("div",{className:"historyContainer",children:[Object(R.jsxs)("div",{className:"hello",children:[Object(R.jsx)(_.animated.p,{style:C,children:"Hello !"}),Object(R.jsx)(_.animated.p,{style:S,children:"I am Hennessy"}),Object(R.jsx)(_.animated.p,{style:L,children:"virtual bartender."})]}),Object(R.jsx)("div",{className:"chatBotUser",children:t.map((function(e){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(A,{dataMessages:e.message.messages}),Object(R.jsx)(H,{dataResponses:e.message.responses,dataHandleSubmit:w}),Object(R.jsx)("div",{className:"scrollbar",ref:o})]})}))})]})]}):"",g?Object(R.jsx)("div",{onClick:function(){j(!d)},children:Object(R.jsxs)("div",{className:"bartender",children:[Object(R.jsx)("div",{className:"logo-left"}),Object(R.jsx)("button",{className:"logo",onClick:function(){a(),x(!g),b(!m)}}),Object(R.jsx)("div",{className:"logo-left"}),Object(R.jsx)("div",{children:Object(R.jsx)("p",{className:"bartender-title",children:"VIRTUAL BARTENDER"})})]})}):""]})}));localStorage.session?(delete o.a.defaults.headers.common.session,o.a.defaults.headers.common.session=localStorage.session):delete o.a.defaults.headers.common.session;var W=function(){return Object(c.useEffect)((function(){localStorage.session||S.dispatch(function(){var e=Object(P.a)(B.a.mark((function e(t){var s;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("http://app.ivy.kwalys.com:8080/Wideagency/bots/Demo_hennessy/api/web");case 3:s=e.sent,t({type:b,payload:s.data.session},console.log(s.data.session,"num de session")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:O});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())})),Object(R.jsx)(l.a,{store:S,children:Object(R.jsx)("div",{className:"App",children:Object(R.jsx)(D,{})})})};i.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(W,{})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.e2e5d03e.chunk.js.map