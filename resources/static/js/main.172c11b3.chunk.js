(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),a=n(3),c=n.n(a),s=(n(9),n(4)),r=(n(10),function(){try{if(Neutralino.events={onTrayMenuItemClicked:function(e){switch(e.id){case"VERSION":Neutralino.os.showMessageBox({type:"INFO",title:"Version information",content:"Neutralinojs server: v".concat(NL_VERSION," | Neutralinojs client: v").concat(NL_CVERSION)});break;case"QUIT":Neutralino.app.exit()}}},Neutralino.init(),"window"!==NL_MODE)return void console.log("INFO: Tray menu is only available in the window mode.");Neutralino.os.setTray({icon:"/resources/icons/trayIcon.png",menuItems:[{id:"VERSION",text:"Get version"},{id:"SEP",text:"-"},{id:"QUIT",text:"Quit"}]})}catch(e){console.log(e)}}),u=n(0),l=function(){var e=i.a.useState(""),t=Object(s.a)(e,2),n=t[0],o=t[1];return i.a.useEffect((function(){r()}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("textarea",{value:n,onChange:function(e){return o(e.target.value)},rows:5,cols:100}),n]})})};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("neutralinoapp"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.172c11b3.chunk.js.map