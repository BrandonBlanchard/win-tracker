(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,n,e){t.exports=e(31)},17:function(t,n,e){},18:function(t,n,e){t.exports=e.p+"static/media/logo.5d5d9eef.svg"},19:function(t,n,e){},31:function(t,n,e){"use strict";e.r(n);var o=e(0),a=e.n(o),i=e(3),s=e.n(i),r=(e(17),e(5)),c=e(6),p=e(9),l=e(7),u=e(10),h=(e(18),e(19),function(t,n){for(var e=t.split("\n"),o=[],a=0;a<e.length;a++){var i=e[a].split(",");a>0&&(o.push({player:i[0],faction:i[1],caster:i[2],theme:i[3],opponent:i[4],opponentFaction:i[5],opponentTheme:i[6],opponentCaster:i[7],win:i[8]?"win":"lose",winCondition:i[9],controlPoints:i[10],opponentControlPoints:i[11]}),o.push({player:i[4],faction:i[5],caster:i[7],theme:i[6],opponent:i[0],opponentFaction:i[1],opponentTheme:i[3],opponentCaster:i[2],win:i[8]?"lose":"win",winCondition:i[9],controlPoints:i[11],opponentControlPoints:i[10]}))}n(o)}),d=e(8),f=e.n(d),m=(e(30),{INIT:0,LOADING:1,READY:2}),w=function(t){function n(t){var e;return Object(r.a)(this,n),(e=Object(p.a)(this,Object(l.a)(n).call(this,t))).state={readiness:m.INIT,data:null},e}return Object(u.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){var t,n=this;this.state.readiness===m.INIT&&(t=function(t){n.setState({readiness:m.READY,data:t})},fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6B-jLNFVOaHlagYjsClKUDGquAkZpCymnDQ60n5wOw-0pf8gRImDXKciW7FzLZbK4rZutfQjPfVSM/pub?output=csv").then(function(n){n.text().then(function(n){return h(n,t)})}).catch(function(t){return console.error("data fetch failed")}),this.setState({readiness:m.LOADING}))}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},this.state.readiness===m.READY&&a.a.createElement(f.a,Object.assign({},this.state,{onChange:function(n){return t.setState(n)}}))))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.744d9004.chunk.js.map