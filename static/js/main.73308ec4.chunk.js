(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),s=(t(38),t(24)),o=t(25),i=t(30),m=t(26),u=t(31),p=t(12),d=(t(45),function(e,a){var t=e.split("\n"),n=t.shift().split(",");a(t.map(function(e){return e.split(",").reduce(function(e,a,t){return e[n[t].toLowerCase()]=a,e},{})}))}),f=(t(46),t(47),function(){return r.a.createElement("div",{className:"welcome-mat"},r.a.createElement("h1",{className:"welcome-mat__header-1"},"Turn  ",r.a.createElement("br",null)," Two "),r.a.createElement("h1",{className:"welcome-mat__header-2"},"Smoke ",r.a.createElement("br",null)," Break"))}),_=Object.freeze({DATA_LOAD:"DATA_LOAD"}),y=t(2),b=(t(48),function(e){return r.a.createElement("div",{className:"chart-card"},r.a.createElement("div",{className:"chart-card__content"},r.a.createElement("h3",{className:"chart-card__name"},e.chartName),e.children))}),E=t(32),h=t(29),g=t.n(h),v=(t(52),function(e){return r.a.createElement("div",{className:"pie-chart",style:{width:e.width,height:e.height}},r.a.createElement(g.a,Object.assign({},e,{configuration:{displayModBar:!1},layout:Object(E.a)({},e.layout,{paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"rgba(0,0,0,0)",width:e.width,height:e.height,grid:{rows:0,columns:0},showlegend:!1})})))}),N=(t(53),function(e,a){var t=e.wins,n=a.wins;return t>n?-1:t<n?1:0}),w=function(e){return e.wins>2&&"Some rando"!==e.player&&"opponent"!==e.player},O={2:"2nd",3:"3rd",4:"4th",5:"5th",6:"6th"},j=function(e){var a=function(e){var a=e.filter(w).sort(N);return{leader:a[0],rabble:a.slice(1,a.length)}}(e.players),t=a.leader,n=a.rabble,l=[{label:"Wins",stat:t.wins},{label:"W/L Ratio",stat:(t.wins/t.games).toFixed(2)},{label:"Games",stat:t.games}];return r.a.createElement("ul",{className:"mini-leaderboard"},r.a.createElement("li",{className:"mini-leaderboard__leader"},r.a.createElement("i",{className:"fa fa-crown mini-leaderboard__leader-crown"}),r.a.createElement("p",{className:"mini-leaderboard__leader-name"},t.player),r.a.createElement("p",{className:"mini-leaderboard__leader-faction"},t.faction),r.a.createElement("div",{className:"mini-leaderboard__leader-stats"},l.map(function(e,a){return r.a.createElement("div",{className:"mini-leaderboard__leader-stat",key:"stats-".concat(a)},r.a.createElement("p",{className:"leader-stat__label"},e.label),r.a.createElement("p",{className:"leader-stat__value"},e.stat))}))),n.map(function(e,a){var t=e.player,n=e.faction;e.wins,e.games;return r.a.createElement("li",{className:"mini-leaderboard__player",key:"player-".concat(a)},r.a.createElement("div",{className:"mini-leaderboard__player-dot"}," ",t," "),r.a.createElement("div",{className:"mini-leaderboard__player-faction"},n),r.a.createElement("div",{className:"mini-leaderboard__player-wins"},O[a+2]))}))},k=(t(54),{font:{color:"#728041",family:"sans serif"}}),A=function(e){var a=e.data,t=a.factions,l=a.players,c=Object(n.useState)([]),s=Object(y.a)(c,2),o=s[0],i=s[1],m=Object(n.useState)([]),u=Object(y.a)(m,2),p=u[0],d=u[1];return Object(n.useEffect)(function(){return function(e,a){var t=e.filter(function(e){return e.wins>2});a([{type:"pie",labels:t.map(function(e){return e.faction}),values:t.map(function(e){return e.games}),domain:{column:0},hole:.96,textinfo:"label+value"}])}(t,i)},[t]),Object(n.useEffect)(function(){return function(e,a){var t=e.filter(function(e){return e.games>2&&"Some rando"!==e.player});a([{type:"pie",labels:t.map(function(e){return e.player}),values:t.map(function(e){return e.wins}),domain:{column:1},hole:.96,textinfo:"label+value"}])}(l,d)},[l]),r.a.createElement("div",{className:"meta-stats"},r.a.createElement(b,{chartName:"Faction Games"},r.a.createElement(v,{data:o,layout:k,width:330,height:330})),r.a.createElement(j,{players:l}),r.a.createElement(b,{chartName:"Player Wins"},r.a.createElement(v,{data:p,layout:k,width:330,height:330})))},D=(t(55),function(e){var a=Object(n.useState)(0),t=Object(y.a)(a,2),l=t[0],c=t[1],s=e.children,o=e.tabNames;return r.a.createElement("div",{className:"tab-container"},r.a.createElement("div",{className:"tab-container__tab-bar"},o.map(function(e,a){return function(e,a,t,n){return r.a.createElement("div",{className:a===t?"tab-container__tab--active":"tab-container__tab",onClick:function(){return n(a)},key:a},e)}(e,a,l,c)})),r.a.createElement("div",{className:"tab-container__tab-content"},function(e,a){return a[e]}(l,s)))}),P=(t(56),function(e,a){var t=e.caster,n=e.controlPoints,l=e.faction,c=e.name,s=e.theme,o=e.win;return r.a.createElement("tr",{className:"games-list__player",key:"".concat(c,"-").concat(c,"-").concat(a,"-player")},r.a.createElement("td",{className:"games-list__stat games-list__player-name",key:0},r.a.createElement("div",{className:"games-list__win-loss"},r.a.createElement("i",{className:o?"fa fa-trophy":"fa fa-skull-crossbones"})),c),r.a.createElement("td",{className:"games-list__stat",key:1}," ",l," "),r.a.createElement("td",{className:"games-list__stat",key:2}," ",t," "),r.a.createElement("td",{className:"games-list__stat",key:3}," ",s," "),r.a.createElement("td",{className:"games-list__stat--orange games-list__control-points",key:4}," ",n||0," "))}),I=function(e,a){return r.a.createElement("div",{className:"games-list__game",key:"".concat(e.player1.player,"-").concat(e.player2.player,"-").concat(a)},r.a.createElement("table",{className:"games-list__game-data"},r.a.createElement("tbody",null,P(e.player1,a),r.a.createElement("tr",{key:"".concat(e.player1.player,"-").concat(e.player2.player,"-").concat(a,"-condition")},r.a.createElement("td",{className:"games-list__win-condition"},e.winCondition," ")),P(e.player2,a))))},L=function(e){var a=e.games;return r.a.createElement("div",{className:"games-list"},r.a.createElement("h2",{className:"games-list__header"}," Games "),r.a.createElement("div",{className:"games-list__games-list"},a.map(I)))};L.defaultProps={games:[]};t(57),t(58);var T=function(e){var a=e.player,t=a.player,n=a.faction,l=a.games,c=a.wins,s=a.controlPoints;return r.a.createElement("div",{className:"player-thumb"},r.a.createElement("div",{className:"player-thumb__content"},r.a.createElement("div",{className:"player-thumb__name"},t),r.a.createElement("div",{className:"player-thumb__faction"},n),r.a.createElement("hr",null),r.a.createElement("ul",{className:"player-thumb__stats"},r.a.createElement("li",null,r.a.createElement("span",{className:"player-thumb__label"},"Wins"),r.a.createElement("span",{className:"player-thumb__value"},c)),r.a.createElement("li",null,r.a.createElement("span",{className:"player-thumb__label"},"W/L Ratio"),r.a.createElement("span",{className:"player-thumb__value"},(c/l).toFixed(2))),r.a.createElement("li",null,r.a.createElement("span",{className:"player-thumb__label"},"Games"),r.a.createElement("span",{className:"player-thumb__value"},l)),r.a.createElement("li",null,r.a.createElement("span",{className:"player-thumb__label"}," lifetime control"),r.a.createElement("span",{className:"player-thumb__value"},s)),r.a.createElement("li",null,r.a.createElement("span",{className:"player-thumb__label"}," control per game"),r.a.createElement("span",{className:"player-thumb__value"},(s/l).toFixed(2))))))},S=function(e){var a=e.players;return r.a.createElement("div",{className:"players-list"},r.a.createElement("h2",{className:"players-list__header"},"Players"),r.a.createElement("div",{className:"players-list__players"},a.map(function(e){return r.a.createElement(T,{key:"".concat(e.player,"-").concat(e.faction,"-").concat(e.wins),player:e})})))},C=(t(59),function(e){var a=Object(n.useState)(!1),t=Object(y.a)(a,2),l=t[0],c=t[1];return r.a.createElement("div",{className:l?"enter-game enter-game--form":"enter-game enter-game--button"},r.a.createElement("div",{className:"enter-game__open",onClick:function(){c(!0)}},r.a.createElement("i",{className:"fa fa-plus"})),r.a.createElement("div",{className:"enter-game__game-entry-content"},l&&r.a.createElement("style",null,"body {\n                        overflow: hidden;\n                    }"),r.a.createElement("iframe",{className:"enter-game__game-entry",src:"https://docs.google.com/forms/d/e/1FAIpQLSfv828TjuT2R2IdxJxNCCPrqcMqVgJvJZXS9PBbDQO2KU1sXg/viewform?embedded=true"}," Loading... "),r.a.createElement("button",{className:"enter-game__close",onClick:function(){c(!1)}}," close ")))}),R={INIT:0,LOADING:1,READY:2},x=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={readiness:R.INIT},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e,a,t=this;this.state.readiness===R.INIT&&((e="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6B-jLNFVOaHlagYjsClKUDGquAkZpCymnDQ60n5wOw-0pf8gRImDXKciW7FzLZbK4rZutfQjPfVSM/pub?output=csv",a=function(e){t.props.dispatch(function(e){return{type:_.DATA_LOAD,payload:e}}(e))},fetch(e).then(function(e){e.text().then(function(e){return d(e,a)})}).catch(function(e){return console.error("data fetch failed")})).then(function(){t.setState({readiness:R.READY})}),this.setState({readiness:R.LOADING}))}},{key:"renderOnReady",value:function(){var e=this.props.data,a=e.games,t=e.players;return r.a.createElement("div",{className:"charts-container"},r.a.createElement(A,this.props),r.a.createElement(D,{tabNames:["Games","Players"]},r.a.createElement(L,{games:a}),r.a.createElement(S,{players:t})))}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"app"},r.a.createElement(C,null),r.a.createElement(f,null),this.props.data.players.length>0&&this.renderOnReady())}}]),a}(n.Component);x.defaultProps={data:{players:[]}};var F=Object(p.b)(function(e){return e})(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=t(11),W=t(13),B=t(4),J=t.n(B),Q=function(e,a){var t="TRUE"===a.win;return J()(e,a.player)?(e[a.player].games+=1,e[a.player].wins+=t?1:0,e[a.player].controlPoints+=parseInt(a["my control points"])||0):e[a.player]={games:1,wins:t?1:0,player:a.player,faction:a.faction,controlPoints:parseInt(a["my control points"])||0},J()(e,a.opponent)?(e[a.opponent].games+=1,e[a.opponent].wins+=t?0:1,e[a.opponent].controlPoints+=parseInt(a["opponent control points"])||0):e[a.opponent]={games:1,wins:t?0:1,player:a.opponent,faction:a["opponent faction"],controlPoints:parseInt(a["opponent control points"])||0},e},U=function(e){return"opponent"!==e.player},K=function(e,a){return e.games>a.games?-1:e.games<a.games?1:0},M=function(e,a){var t="TRUE"===a.win;return J()(e,a.faction)?(e[a.faction].wins+=t?1:0,e[a.faction].games+=1):e[a.faction]={faction:a.faction,wins:t?1:0,games:1},J()(e,a["opponent faction"])?(e[a["opponent faction"]].wins+=t?0:1,e[a["opponent faction"]].games+=1):e[a["opponent faction"]]={faction:a["opponent faction"],wins:t?0:1,games:1},e},X=function(e){var a={name:e.player,caster:e.caster,faction:e.faction,theme:e.theme,controlPoints:e["my control points"],win:"TRUE"===e.win},t={name:e.opponent,caster:e["opponent caster"],faction:e["opponent faction"],theme:e["opponent theme"],controlPoints:e["opponent control points"],win:"FALSE"===e.win};return{winCondition:e["win condition"],player1:a,player2:t}},Z=function(e,a){console.log("data load reducer",e,a);var t=a.payload.reverse();return{players:Object(W.a)(Object.values(t.reduce(Q,{})).filter(U).sort(K)),factions:Object(W.a)(Object.values(t.reduce(M,{}))),games:Object(W.a)(Object.values(t.map(X)))}},q={data:{players:[],factions:[]}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,a=arguments.length>1?arguments[1]:void 0;return console.log(a,_.DATA_LOAD),{data:a.type===_.DATA_LOAD?Object.assign({},e.data,Z(e,a)):Object.assign({},e.data)}},Y=Object(G.b)(V);c.a.render(r.a.createElement(p.a,{store:Y},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,a,t){e.exports=t(105)},38:function(e,a,t){},45:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){}},[[33,1,2]]]);
//# sourceMappingURL=main.73308ec4.chunk.js.map