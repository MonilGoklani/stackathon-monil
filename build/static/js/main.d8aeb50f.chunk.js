(this.webpackJsonptest_monil=this.webpackJsonptest_monil||[]).push([[0],{37:function(e,t,n){},83:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(15),s=n.n(c),i=(n(83),n(27)),o=n(28),u=n(31),l=n(30),d=(n.p,n(37),n(133)),j=n(34),h=n(33),p=n(17),b=n.n(p),m=n(24),f=n(64);f.a.initializeApp({apiKey:"AIzaSyCGtYCFcCObok0vJjiuMAKN0fm4AR27Ez4",authDomain:"monil-test.firebaseapp.com",projectId:"monil-test",storageBucket:"monil-test.appspot.com",messagingSenderId:"476914631120",appId:"1:476914631120:web:cb16ed40115ae7f0a779d5",measurementId:"G-0D403LEFB0"});var v=f.a,O=n(69),x=Object(O.a)(),g=n(127),w=n(131),y=n(132),k=n(4),S=v.firestore(),N=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"20ch"}}}})),C=function(e){var t=N(),n=function(){var e=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,t.get().then((function(e){e&&e.exists&&(n=e.data())}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,r,c,s,i,o,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=document.querySelector("#gameCode").value,window.localStorage.setItem("gameCode",a.toString()),r=document.querySelector("#playerName").value,c=S.doc("/".concat(a,"/players")),e.next=7,n(c);case 7:if(s=e.sent,(i=Object.values(s)||[]).includes(r)||i.push(r),!(i.length<=4)){e.next=18;break}return o="player"+i.length.toString(),u=r,e.next=15,c.set(Object(h.a)(Object(h.a)({},s),{},Object(j.a)({},o,u)));case 15:x.push("/newgame/".concat(o)),e.next=19;break;case 18:alert("Game Full : Create New Game by entering a unique Game Code");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("img",{className:"background-image",src:"../brickwall.jpg"}),Object(k.jsxs)("div",{className:"App-header",children:[Object(k.jsx)("p",{className:"gametitle",children:"WiseCracker!"}),Object(k.jsxs)("form",{className:t.root,children:[Object(k.jsx)("p",{className:"title",children:"Name"}),Object(k.jsx)(w.a,{type:"textfield",id:"playerName",variant:"filled"}),Object(k.jsx)("p",{className:"title",children:"Game Code"}),Object(k.jsx)(w.a,{type:"textfield",id:"gameCode",variant:"filled"})]}),Object(k.jsx)(y.a,{variant:"contained",color:"secondary",component:"span",onClick:function(e){return a(e)},children:"Enter Game"})]})]})},A=n(21),I={1:"If you could replace your hands with anything, what would it be?",2:"What\u2019s something from the 2000\u2019s that desperately needs a comeback in the 2020\u2019s?",3:'If aliens came to Earth and said "Impress us", what would we show them?'},_=n(8),P=n(70),q=n.n(P),G=v.firestore(),D=1*window.localStorage.getItem("gameCode"),F=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).state={answers:{},selected:0},a.getAnswers=a.getAnswers.bind(Object(A.a)(a)),a.submitAnswer=a.submitAnswer.bind(Object(A.a)(a)),a}return Object(o.a)(n,[{key:"getAnswers",value:function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,t.onSnapshot((function(e){e&&e.exists&&(n=e.data(),a.setState({answers:n}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;[1,2,3,4,5].map((function(t){var n="q_"+t.toString()+"_answers",a=G.doc("/".concat(D,"/").concat(n));e.getAnswers(a)}))}},{key:"submitAnswer",value:function(e,t,n){e.preventDefault();var a="q_"+t.toString()+"_answers",r=G.doc("/".concat(D,"/").concat(a)),c=document.querySelector("#answer").value;r.set(Object(h.a)(Object(h.a)({},this.state.answers),{},Object(j.a)({},n,c))),this.setState({selected:!this.state.selected})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.selected,n=this.submitAnswer,a=this.props,r=a.round,c=a.player;return Object(k.jsx)("div",{children:t?Object(k.jsx)(q.a,{style:{fontSize:"6rem",color:"rgb(255, 208, 0)"}}):Object(k.jsxs)("div",{className:"answers",children:[Object(k.jsx)("form",{className:e.root,children:Object(k.jsx)(w.a,{type:"textfield",id:"answer",variant:"filled"})}),Object(k.jsx)(y.a,{variant:"contained",color:"secondary",component:"span",onClick:function(e){return n(e,r,c)},children:"Submit"})]})})}}]),n}(r.a.Component),W=Object(_.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"20ch"}}}}))(F),E=v.firestore(),M=1*window.localStorage.getItem("gameCode"),V=(E.doc("/".concat(M,"/players")),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).state={counter:30,round:1},a.startCounter=a.startCounter.bind(Object(A.a)(a)),a}return Object(o.a)(n,[{key:"startCounter",value:function(){var e=this,t=setInterval((function(){if(e.state.round>3)clearInterval(t),x.push("/vote/".concat(e.props.player));else if(e.state.counter>0){var n=e.state.counter-1;e.setState({counter:n})}else e.setState({counter:30}),e.setState({round:e.state.round+1})}),1e3)}},{key:"componentDidMount",value:function(){this.startCounter()}},{key:"render",value:function(){var e=this.state.counter,t=this.state.round,n=this.props.player,a=I[t];return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"counter",children:t<=3&&e<30?Object(k.jsx)("div",{className:"counterbox",children:Object(k.jsx)("p",{children:e})}):""}),Object(k.jsx)("div",{children:e<30?Object(k.jsxs)("div",{className:"question",children:[Object(k.jsxs)("h3",{children:["Round ",t]}),Object(k.jsx)("p",{children:a}),Object(k.jsx)(W,{player:n,round:t})]}):""})]})}}]),n}(r.a.Component)),K=v.firestore(),L=1*window.localStorage.getItem("gameCode"),z=K.doc("/".concat(L,"/players")),B=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={players:[],currentPlayer:""},e.getPlayers=e.getPlayers.bind(Object(A.a)(e)),e}return Object(o.a)(n,[{key:"getPlayers",value:function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,t.onSnapshot((function(e){if(e&&e.exists){n=e.data();var t=Object.values(n).filter((function(e){return e===n[a.props.match.params.id]}))[0];a.setState({players:Object.values(n),currentPlayer:t})}}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getPlayers(z)}},{key:"render",value:function(){var e=this.state.currentPlayer,t=this.state.players;this.enterGame;return Object(k.jsxs)("div",{id:"newgame",children:[Object(k.jsx)("img",{className:"background-image",src:"../brickwall.jpg"}),Object(k.jsx)("div",{className:"title",children:t.length<4?Object(k.jsx)("h3",{children:"...Waiting for more players"}):Object(k.jsx)("h3",{children:"IT'S ON LIKE DONKEY KONG"})}),Object(k.jsx)("div",{className:"listofplayers",children:t.map((function(t){return Object(k.jsx)("p",{className:t!==e?"currentPlayer":"otherPlayers",children:t})}))}),Object(k.jsx)("div",{className:"loadGame",children:t.length>=4?Object(k.jsx)(V,{player:this.props.match.params.id}):""})]})}}]),n}(r.a.Component),T=n(71),J=v.firestore(),Y=1*window.localStorage.getItem("gameCode"),R=(J.doc("/".concat(Y,"/players")),20),Q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).state={counter:0,round:1,answers:[],votes:{},winner:[],selectedAnswer:""},a.startCounter=a.startCounter.bind(Object(A.a)(a)),a.submitVote=a.submitVote.bind(Object(A.a)(a)),a.calculateWinner=a.calculateWinner.bind(Object(A.a)(a)),a}return Object(o.a)(n,[{key:"getVotes",value:function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,t.onSnapshot((function(e){e&&e.exists&&(n=e.data(),a.setState({votes:n}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAnswers",value:function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,t.onSnapshot((function(e){if(e&&e.exists){var t=(n=e.data())[a.props.match.params.id];a.setState({answers:[].concat(Object(T.a)(a.state.answers),[Object.values(n).filter((function(e){return e!==t}))])})}}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"startCounter",value:function(){var e=this,t=setInterval((function(){if(e.state.round>3)clearInterval(t),x.push("/gameover");else if(e.state.counter<R){var n=e.state.counter+1;e.setState({counter:n})}else e.setState({counter:0}),e.setState({round:e.state.round+1})}),1e3)}},{key:"submitVote",value:function(){var e=Object(m.a)(b.a.mark((function e(t,n,a){var r,c,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="q_"+n.toString()+"_votes",c="q_"+n.toString()+"_answers",s=J.doc("/".concat(Y,"/").concat(r)),i=J.doc("/".concat(Y,"/").concat(c)),e.next=6,s.set(Object(h.a)(Object(h.a)({},this.state.votes),{},Object(j.a)({},a,t)));case 6:return e.next=8,this.calculateWinner(s,i);case 8:this.setState({selectedAnswer:t});case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;this.startCounter(),[1,2,3,4,5].map((function(t){var n="q_"+t.toString()+"_votes",a="q_"+t.toString()+"_answers",r=J.doc("/".concat(Y,"/").concat(n)),c=J.doc("/".concat(Y,"/").concat(a));e.getAnswers(c),e.getVotes(r)}))}},{key:"calculateWinner",value:function(){var e=Object(m.a)(b.a.mark((function e(t,n){var a,r,c,s,i=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},r={},e.next=4,t.get().then((function(e){e&&e.exists&&(a=e.data())}));case 4:return e.next=6,n.get().then((function(e){e&&e.exists&&(r=e.data())}));case 6:return c=function(e,t){var n=Object.values(t).reduce((function(t,n){return Object.values(e).includes(n)&&(t[n]?t[n]+=1:t[n]=1),t}),{});return Object.keys(n).filter((function(e){return n[e]==Math.max.apply(null,Object.values(n))}))}(r,a),s=J.doc("/".concat(Y,"/winner")),e.next=11,s.set({winner:c});case 11:s.onSnapshot((function(e){if(e&&e.exists){var t=Object.values(e.data());i.setState({winner:t})}}));case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.counter,n=e.round,a=e.selectedAnswer,r=e.answers,c=e.winner,s=I[n],i=this.props.match.params.id,o=r.length?r[n-1]:[],u=this.submitVote;return Object(k.jsxs)("div",{className:"votes",children:[Object(k.jsx)("img",{className:"background-image",src:"../brickwall.jpg"}),Object(k.jsxs)("div",{className:"votecounter",children:[Object(k.jsx)("h3",{children:t<15&&n<=3?"You have ".concat(15," seconds"):""}),t<15&&n<=3?Object(k.jsx)("div",{className:"counterbox",children:Object(k.jsx)("p",{children:n<=3&&t<15?t:""})}):""]}),Object(k.jsx)("div",{className:"voteQuestion",children:t<15&&n<=3?s:""}),Object(k.jsx)("div",{className:"answerList",children:o&&t<15&&n<=3?o.map((function(e){return Object(k.jsx)(y.a,{variant:"contained",color:a===e?"default":"primary",component:"span",onClick:function(){return u(e,n,i)},children:e})})):Object(k.jsxs)("div",{className:"winningAnswer",children:[Object(k.jsx)("h2",{children:"Winning Answer:"}),Object(k.jsx)("div",{className:"winningAnswer",children:c.map((function(e){return Object(k.jsx)("h1",{children:e})}))})]})})]})}}]),n}(r.a.Component),H=(v.firestore(),function(e){return Object(k.jsxs)("div",{className:"gameover",children:[Object(k.jsx)("img",{className:"background-image",src:"../brickwall.jpg"}),Object(k.jsx)("h1",{children:"Game Over!"}),Object(k.jsx)("h2",{children:"Thanks for Playing"})]})}),U=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){this.start;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(d.b,{history:x,children:Object(k.jsxs)(d.c,{children:[Object(k.jsx)(d.a,{exact:!0,path:"/",component:C}),Object(k.jsx)(d.a,{exact:!0,path:"/newgame/:id",component:B}),Object(k.jsx)(d.a,{exact:!0,path:"/vote/:id",component:Q}),Object(k.jsx)(d.a,{exact:!0,path:"/gameover",component:H})]})})})}}]),n}(r.a.Component),X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(U,{})}),document.getElementById("root")),X()}},[[97,1,2]]]);
//# sourceMappingURL=main.d8aeb50f.chunk.js.map