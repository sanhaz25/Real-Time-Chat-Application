import{$ as u,H as p,Q as i,X as m,Y as a,Z as s,_ as c,ca as f,i as r,k as n}from"./chunk-2WQWG4QU.js";import"./chunk-JENGY3ED.js";import"./chunk-PYQTE2ZK.js";var l=(t,o)=>r(f).isLoggedIn===!1?(r(c).navigate(["/login"]),!1):!0;var d=[{path:"chat",canActivate:[l],loadComponent:()=>import("./chunk-H2IA27FA.js").then(t=>t.ChatComponent)},{path:"login",loadComponent:()=>import("./chunk-WRWJ7O4Q.js").then(t=>t.LoginComponent)},{path:"",loadComponent:()=>import("./chunk-WRWJ7O4Q.js").then(t=>t.LoginComponent)}];var h={providers:[u(d)]};var C=(()=>{let o=class o{constructor(){this.title="ng-chat"}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n({type:o,selectors:[["app-root"]],standalone:!0,features:[i],decls:1,vars:0,template:function(e,v){e&1&&p(0,"router-outlet")},dependencies:[m,s]});let t=o;return t})();a(C,h).catch(t=>console.error(t));