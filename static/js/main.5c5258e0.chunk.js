(this["webpackJsonptypo3buch.helmich.me"]=this["webpackJsonptypo3buch.helmich.me"]||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/edition9.88663400.jpg"},18:function(e,t,a){e.exports=a(33)},23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),c=a.n(i),l=(a(23),a(24),a(13)),o=a(14),s=function(){function e(t,a,n,r){var i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];Object(l.a)(this,e),this.edition=t,this.version=a,this.vendorID=n,this.image=r,this.available=i}return Object(o.a)(e,[{key:"branch",get:function(){var e=("00"+this.edition).slice(-2);return"edition-".concat(e)}},{key:"githubURL",get:function(){return"https://github.com/martin-helmich/praxiswissen-typo3/tree/".concat(this.branch)}},{key:"vendorURL",get:function(){return"https://www.oreilly.de/buecher/".concat(this.vendorID,".html")}}]),e}(),m=a(8),u=a.n(m),d=a(15),h=a.n(d),b=a(4),f=a(6),v=a(9),E=a.n(v),p=a(16),g=a(2),w=a(3);var N=function(e){var t=e.edition,a=Object(n.useState)(),i=Object(b.a)(a,2),c=i[0],l=i[1],o=Object(n.useState)(),s=Object(b.a)(o,2),m=s[0],u=s[1];if(!c)return fetch("https://api.github.com/repos/martin-helmich/praxiswissen-typo3/releases").then(function(){var e=Object(p.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,t.json();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){u(e)})),r.a.createElement("button",{disabled:!0,className:"btn btn-block btn-primary"},r.a.createElement(g.a,{icon:w.d}),"Dateien herunterladen");if(m)return r.a.createElement("button",{disabled:!0,className:"btn btn-block btn-danger"},r.a.createElement(g.a,{icon:w.b}),"Download nicht verf\xfcgbar");var d=c.filter((function(e){return e.name.startsWith(t.branch)})).sort((function(e,t){return e.name<t.name?1:-1}));if(0===d.length)throw new Error("no release available");return r.a.createElement("a",{href:d[0].assets[0].browser_download_url,rel:"noopener noreferrer",target:"_blank",className:"btn btn-block btn-primary"},r.a.createElement(g.a,{icon:w.a}),"Dateien herunterladen")},y=a(17);var k=function(e){var t=e.edition;return r.a.createElement("a",{href:t.githubURL,target:"_blank",className:"btn btn-block btn-light"},r.a.createElement(g.a,{icon:y.a}),"GitHub")};var O=function(e){var t=e.edition;return r.a.createElement("a",{href:t.vendorURL,target:"_blank",rel:"noopener noreferrer",className:"btn btn-block btn-light"},r.a.createElement(g.a,{icon:w.c}),"Kaufen")};a(31);var j=function(e){var t=e.edition,a="Praxiswissen TYPO3 ".concat(t.version,", ").concat(t.edition,". Auflage");return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:t.image,alt:a,title:a}),r.a.createElement("div",{className:"card-body"},r.a.createElement(N,{edition:t}),r.a.createElement(k,{edition:t}),r.a.createElement(O,{edition:t})))};a(32);var x=function(e){var t=e.edition,a=e.selected,n=e.onClick,i=["btn","btn-light","btn-block"];return t.available?(t===a&&i.push("active"),r.a.createElement("button",{className:i.join(" "),onClick:n},t.edition,". Auflage, f\xfcr TYPO3 ",t.version)):r.a.createElement("button",{className:i.join(" "),disabled:!0},t.edition,". Auflage, f\xfcr TYPO3 ",t.version,"\xa0",r.a.createElement("span",{className:"badge badge-success"},"COMING SOON"))};var S=function(e){var t,a=e.editions,i=e.children,c=Object(n.useState)(function(e){var t,a=document.location.hash.replace(/^#/,""),n=Object(f.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.available){if(""===a)return r;if(r.version.startsWith(a))return r}}}catch(o){n.e(o)}finally{n.f()}if(""!==a){console.error("no matching release for ".concat(a," could be found; defaulting to latest available release"));var i,c=Object(f.a)(e);try{for(c.s();!(i=c.n()).done;){var l=i.value;if(l.available)return l}}catch(o){c.e(o)}finally{c.f()}}throw new Error("no editions given")}(a)),l=Object(b.a)(c,2),o=l[0],s=l[1],m=[],u=Object(f.a)(a);try{var d=function(){var e=t.value,a=r.a.createElement(x,{key:e.edition,edition:e,selected:o,onClick:function(){s(e),document.location.hash=e.version}});m.push(a)};for(u.s();!(t=u.n()).done;)d()}catch(h){u.e(h)}finally{u.f()}return r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-lg-7 col-md-6 col-sm-4 mt-md-3 mb-5 left"},i,r.a.createElement("h3",null,"Mit welcher Auflage arbeiten Sie?"),m),r.a.createElement("div",{className:"col-lg-5 col-md-6 col-sm-8 right"},r.a.createElement(j,{edition:o})))};var P=function(){return r.a.createElement("footer",{className:"pt-4 my-4 my-md-5 pt-md-5 border-top"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 col-md"},"\xa9 Martin Helmich 2020"),r.a.createElement("div",{className:"col-6 col-md text-right"},r.a.createElement("h5",null,"Weiteres"),r.a.createElement("ul",{className:"list-unstyled text-small"},r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:"https://www.martin-helmich.de/de/ueber-mich.html"},"\xdcber mich")),r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:"https://www.martin-helmich.de/de/impressum.html"},"Impressum"))))))},A=[new s(11,"10.4","",u.a,!1),new s(10,"9.5","13303",u.a),new s(9,"8.7","13123",h.a)];var D=function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Praxiswissen TYPO3"),r.a.createElement("div",{className:"mb-5"},"Auf dieser Seite finden Sie die Beispieldateien, Vorlagen & Skripte zum Buch ",r.a.createElement("em",null,"Praxiswissen TYPO3"),", erschienen im O'Reilly-Verlag."));return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container-lg"},r.a.createElement("div",{className:"d-md-none mt-5"},e),r.a.createElement("div",{className:"my-md-4"},r.a.createElement(S,{editions:A},r.a.createElement("div",{className:"d-none d-md-block"},e))),r.a.createElement(P,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a.p+"static/media/edition10.9ab84d10.jpg"}},[[18,1,2]]]);
//# sourceMappingURL=main.5c5258e0.chunk.js.map