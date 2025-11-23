import{$ as go,$a as p0,A as Nd,Aa as Xc,B as Si,Ba as ja,C as mo,Ca as yo,D as Fr,Da as qe,E as Ud,Ea as l0,F as Yg,Fa as xo,G as Zg,Ga as jd,H as Bd,Ha as c0,I as Kg,Ia as $c,J as cn,Ja as Mn,K as Jg,Ka as Vi,L as Yt,La as Kt,M as Re,Ma as xs,N as zc,Na as Pt,O as oe,Oa as u0,P as Bi,Pa as Xa,Q as Qg,Qa as h0,R as ce,Ra as d0,S as Hc,Sa as So,T as ie,Ta as Ue,U as W,Ua as bo,V as kd,Va as Xd,W as er,Wa as $d,X as e0,Xa as G,Y as gs,Ya as H,Z as Zt,Za as Se,_ as t0,_a as f0,a as $,aa as Vd,ab as qd,b as Xe,ba as zd,bb as Mo,c as kc,ca as tr,cb as Lr,d as ho,da as nr,db as Un,e as jg,ea as Gc,eb as Bn,f as Xg,fa as n0,fb as kn,g as $g,ga as Wc,gb as m0,h as Fd,ha as un,hb as g0,i as Ld,ia as ki,ib as ue,j as ii,ja as Hd,jb as ir,k as ri,ka as _s,kb as _0,l as Ji,la as vs,lb as qc,m as qt,ma as Nn,mb as v0,n as se,na as i0,nb as y0,o as Ha,oa as Gd,ob as x0,p as ms,pa as r0,pb as rr,q as qg,qa as ys,qb as S0,r as De,ra as s0,rb as b0,s as Od,sa as Wd,sb as zi,t as si,ta as o0,tb as En,u as Ga,ua as a0,ub as Eo,v as fo,va as Wa,w as Vc,wa as jc,x as Ir,xa as _o,y as po,ya as ve,z as Qi,za as vo}from"./chunk-ZHI76W3A.js";var yt=new ce("");var w0=null;function oi(){return w0}function Yd(r){w0??=r}var $a=class{},Zd=(()=>{class r{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:()=>W(C0),providedIn:"platform"})}return r})();var C0=(()=>{class r extends Zd{_location;_history;_doc=W(yt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return oi().getBaseHref(this._doc)}onPopState(t){let n=oi().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=oi().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,i){this._history.pushState(t,n,i)}replaceState(t,n,i){this._history.replaceState(t,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:()=>new r,providedIn:"platform"})}return r})();function T0(r,e){return r?e?r.endsWith("/")?e.startsWith("/")?r+e.slice(1):r+e:e.startsWith("/")?r+e:`${r}/${e}`:r:e}function M0(r){let e=r.search(/#|\?|$/);return r[e-1]==="/"?r.slice(0,e-1)+r.slice(e):r}function Or(r){return r&&r[0]!=="?"?`?${r}`:r}var Yc=(()=>{class r{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:()=>W(D0),providedIn:"root"})}return r})(),A0=new ce(""),D0=(()=>{class r extends Yc{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??W(yt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return T0(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+Or(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${n}${i}`:n}pushState(t,n,i,s){let o=this.prepareExternalUrl(i+Or(s));this._platformLocation.pushState(t,n,o)}replaceState(t,n,i,s){let o=this.prepareExternalUrl(i+Or(s));this._platformLocation.replaceState(t,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||r)(ie(Zd),ie(A0,8))};static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),wo=(()=>{class r{_subject=new ii;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=eb(M0(E0(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+Or(n))}normalize(t){return r.stripTrailingSlash(QS(this._basePath,E0(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",i=null){this._locationStrategy.pushState(i,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Or(n)),i)}replaceState(t,n="",i=null){this._locationStrategy.replaceState(i,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Or(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(i=>i(t,n))}subscribe(t,n,i){return this._subject.subscribe({next:t,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=Or;static joinWithSlash=T0;static stripTrailingSlash=M0;static \u0275fac=function(n){return new(n||r)(ie(Yc))};static \u0275prov=oe({token:r,factory:()=>JS(),providedIn:"root"})}return r})();function JS(){return new wo(ie(Yc))}function QS(r,e){if(!r||!e.startsWith(r))return e;let t=e.substring(r.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function E0(r){return r.replace(/\/index.html$/,"")}function eb(r){if(new RegExp("^(https?:)?//").test(r)){let[,t]=r.split(/\/\/[^\/]+/);return t}return r}var Kd=/\s+/,R0=[],Jd=(()=>{class r{_ngEl;_renderer;initialClasses=R0;rawClass;stateMap=new Map;constructor(t,n){this._ngEl=t,this._renderer=n}set klass(t){this.initialClasses=t!=null?t.trim().split(Kd):R0}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(Kd):t}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let n of t)this._updateState(n,!0);else if(t!=null)for(let n of Object.keys(t))this._updateState(n,!!t[n]);this._applyStateDiff()}_updateState(t,n){let i=this.stateMap.get(t);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(t,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let n=t[0],i=t[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(t,n){t=t.trim(),t.length>0&&t.split(Kd).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(n){return new(n||r)(qe(vs),qe(yo))};static \u0275dir=Kt({type:r,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return r})();var Zc=class{$implicit;ngForOf;index;count;constructor(e,t,n,i){this.$implicit=e,this.ngForOf=t,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Nr=(()=>{class r{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,n,i){this._viewContainer=t,this._template=n,this._differs=i}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let n=this._viewContainer;t.forEachOperation((i,s,o)=>{if(i.previousIndex==null)n.createEmbeddedView(this._template,new Zc(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)n.remove(s===null?void 0:s);else if(s!==null){let a=n.get(s);n.move(a,o),P0(a,i)}});for(let i=0,s=n.length;i<s;i++){let a=n.get(i).context;a.index=i,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(i=>{let s=n.get(i.currentIndex);P0(s,i)})}static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||r)(qe(xo),qe(Xc),qe(S0))};static \u0275dir=Kt({type:r,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return r})();function P0(r,e){r.context.$implicit=e.item}var qa=(()=>{class r{_viewContainer;_context=new Kc;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,n){this._viewContainer=t,this._thenTemplateRef=n}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){I0(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){I0(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||r)(qe(xo),qe(Xc))};static \u0275dir=Kt({type:r,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return r})(),Kc=class{$implicit=null;ngIf=null};function I0(r,e){if(r&&!r.createEmbeddedView)throw new Re(2020,!1)}var Co=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Vi({type:r});static \u0275inj=Bi({})}return r})();function Ya(r,e){e=encodeURIComponent(e);for(let t of r.split(";")){let n=t.indexOf("="),[i,s]=n==-1?[t,""]:[t.slice(0,n),t.slice(n+1)];if(i.trim()===e)return decodeURIComponent(s)}return null}var Qd="browser",F0="server";function Jc(r){return r===F0}var Ss=class{};var tu=new ce(""),rf=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(i=>{i.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,i,s){return this._findPluginFor(n).addEventListener(t,n,i,s)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(s=>s.supports(t)),!n)throw new Re(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||r)(ie(tu),ie(ki))};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})(),Za=class{_doc;constructor(e){this._doc=e}manager},Qc="ng-app-id";function L0(r){for(let e of r)e.remove()}function O0(r,e){let t=e.createElement("style");return t.textContent=r,t}function ib(r,e,t,n){let i=r.head?.querySelectorAll(`style[${Qc}="${e}"],link[${Qc}="${e}"]`);if(i)for(let s of i)s.removeAttribute(Qc),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function tf(r,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",r),t}var sf=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,n,i,s={}){this.doc=t,this.appId=n,this.nonce=i,this.isServer=Jc(s),ib(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let i of t)this.addUsage(i,this.inline,O0);n?.forEach(i=>this.addUsage(i,this.external,tf))}removeStyles(t,n){for(let i of t)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,n,i){let s=n.get(t);s?s.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,i(t,this.doc)))})}removeUsage(t,n){let i=n.get(t);i&&(i.usage--,i.usage<=0&&(L0(i.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])L0(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(t,O0(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(t,tf(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(Qc,this.appId),t.appendChild(n)}static \u0275fac=function(n){return new(n||r)(ie(yt),ie(Gd),ie(Wd,8),ie(ys))};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})(),ef={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},of=/%COMP%/g;var U0="%COMP%",rb=`_nghost-${U0}`,sb=`_ngcontent-${U0}`,ob=!0,ab=new ce("",{providedIn:"root",factory:()=>ob});function lb(r){return sb.replace(of,r)}function cb(r){return rb.replace(of,r)}function B0(r,e){return e.map(t=>t.replace(of,r))}var Qa=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,n,i,s,o,a,l,c=null,h=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=l,this.nonce=c,this.tracingService=h,this.platformIsServer=Jc(a),this.defaultRenderer=new Ka(t,o,l,this.platformIsServer,this.tracingService)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===Wa.ShadowDom&&(n=Xe($({},n),{encapsulation:Wa.Emulated}));let i=this.getOrCreateRenderer(t,n);return i instanceof eu?i.applyToHost(t):i instanceof Ja&&i.applyStyles(),i}getOrCreateRenderer(t,n){let i=this.rendererByCompId,s=i.get(n.id);if(!s){let o=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(n.encapsulation){case Wa.Emulated:s=new eu(l,c,n,this.appId,h,o,a,d,f);break;case Wa.ShadowDom:return new nf(l,c,t,n,o,a,this.nonce,d,f);default:s=new Ja(l,c,n,h,o,a,d,f);break}i.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||r)(ie(rf),ie(sf),ie(Gd),ie(ab),ie(yt),ie(ys),ie(ki),ie(Wd),ie(o0,8))};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})(),Ka=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,n,i,s){this.eventManager=e,this.doc=t,this.ngZone=n,this.platformIsServer=i,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(ef[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(N0(e)?e.content:e).appendChild(t)}insertBefore(e,t,n){e&&(N0(e)?e.content:e).insertBefore(t,n)}removeChild(e,t){t.remove()}selectRootElement(e,t){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new Re(-5104,!1);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,i){if(i){t=i+":"+t;let s=ef[i];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){let i=ef[n];i?e.removeAttributeNS(i,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,i){i&(vo.DashCase|vo.Important)?e.style.setProperty(t,n,i&vo.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&vo.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e!=null&&(e[t]=n)}setValue(e,t){e.nodeValue=t}listen(e,t,n,i){if(typeof e=="string"&&(e=oi().getGlobalEventTarget(this.doc,e),!e))throw new Re(5102,!1);let s=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,i)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function N0(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var nf=class extends Ka{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,n,i,s,o,a,l,c){super(e,s,o,l,c),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let h=i.styles;h=B0(i.id,h);for(let f of h){let u=document.createElement("style");a&&u.setAttribute("nonce",a),u.textContent=f,this.shadowRoot.appendChild(u)}let d=i.getExternalStyles?.();if(d)for(let f of d){let u=tf(f,s);a&&u.setAttribute("nonce",a),this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Ja=class extends Ka{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,n,i,s,o,a,l,c){super(e,s,o,a,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i;let h=n.styles;this.styles=c?B0(c,h):h,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},eu=class extends Ja{contentAttr;hostAttr;constructor(e,t,n,i,s,o,a,l,c){let h=i+"-"+n.id;super(e,t,n,s,o,a,l,c,h),this.contentAttr=lb(h),this.hostAttr=cb(h)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}};var af=class extends $a{supportsDOMEvents=!0},nu=class r extends af{static makeCurrent(){Yd(new r)}onAndCancel(e,t,n,i){return e.addEventListener(t,n,i),()=>{e.removeEventListener(t,n,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=ub();return t==null?null:hb(t)}resetBaseElement(){el=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Ya(document.cookie,e)}},el=null;function ub(){return el=el||document.querySelector("base"),el?el.getAttribute("href"):null}function hb(r){return new URL(r,document.baseURI).pathname}var db=(()=>{class r{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})(),V0=(()=>{class r extends Za{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,i,s){return t.addEventListener(n,i,s),()=>this.removeEventListener(t,n,i,s)}removeEventListener(t,n,i,s){return t.removeEventListener(n,i,s)}static \u0275fac=function(n){return new(n||r)(ie(yt))};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})(),k0=["alt","control","meta","shift"],fb={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},pb={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},z0=(()=>{class r extends Za{constructor(t){super(t)}supports(t){return r.parseEventName(t)!=null}addEventListener(t,n,i,s){let o=r.parseEventName(n),a=r.eventCallback(o.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>oi().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let n=t.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let s=r._normalizeKey(n.pop()),o="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),o="code."),k0.forEach(c=>{let h=n.indexOf(c);h>-1&&(n.splice(h,1),o+=c+".")}),o+=s,n.length!=0||s.length===0)return null;let l={};return l.domEventName=i,l.fullKey=o,l}static matchEventFullKeyCode(t,n){let i=fb[t.key]||t.key,s="";return n.indexOf("code.")>-1&&(i=t.code,s="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),k0.forEach(o=>{if(o!==i){let a=pb[o];a(t)&&(s+=o+".")}}),s+=i,s===n)}static eventCallback(t,n,i){return s=>{r.matchEventFullKeyCode(s,t)&&i.runGuarded(()=>n(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||r)(ie(yt))};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})();function lf(r,e){return b0($({rootComponent:r},mb(e)))}function mb(r){return{appProviders:[...xb,...r?.providers??[]],platformProviders:yb}}function gb(){nu.makeCurrent()}function _b(){return new Hd}function vb(){return i0(document),document}var yb=[{provide:ys,useValue:Qd},{provide:r0,useValue:gb,multi:!0},{provide:yt,useFactory:vb}];var xb=[{provide:e0,useValue:"root"},{provide:Hd,useFactory:_b},{provide:tu,useClass:V0,multi:!0,deps:[yt]},{provide:tu,useClass:z0,multi:!0,deps:[yt]},Qa,sf,rf,{provide:ja,useExisting:Qa},{provide:Ss,useClass:db},[]];var Ao=class{},tl=class{},Ur=class r{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let n=t.indexOf(":");if(n>0){let i=t.slice(0,n),s=t.slice(n+1).trim();this.addHeaderEntry(i,s)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,n)=>{this.addHeaderEntry(n,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,n])=>{this.setHeaderEntries(t,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new r;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,t);let i=(e.op==="a"?this.headers.get(t):void 0)||[];i.push(...n),this.headers.set(t,i);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}addHeaderEntry(e,t){let n=e.toLowerCase();this.maybeSetNormalizedName(e,n),this.headers.has(n)?this.headers.get(n).push(t):this.headers.set(n,[t])}setHeaderEntries(e,t){let n=(Array.isArray(t)?t:[t]).map(s=>s.toString()),i=e.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(e,i)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var ru=class{encodeKey(e){return H0(e)}encodeValue(e){return H0(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function Sb(r,e){let t=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(i=>{let s=i.indexOf("="),[o,a]=s==-1?[e.decodeKey(i),""]:[e.decodeKey(i.slice(0,s)),e.decodeValue(i.slice(s+1))],l=t.get(o)||[];l.push(a),t.set(o,l)}),t}var bb=/%(\d[a-f0-9])/gi,Mb={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function H0(r){return encodeURIComponent(r).replace(bb,(e,t)=>Mb[t]??e)}function iu(r){return`${r}`}var sr=class r{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new ru,e.fromString){if(e.fromObject)throw new Re(2805,!1);this.map=Sb(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let n=e.fromObject[t],i=Array.isArray(n)?n.map(iu):[iu(n)];this.map.set(t,i)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(n=>{let i=e[n];Array.isArray(i)?i.forEach(s=>{t.push({param:n,value:s,op:"a"})}):t.push({param:n,value:i,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(n=>t+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new r({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(iu(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],i=n.indexOf(iu(e.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var su=class{map=new Map;set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Eb(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function G0(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function W0(r){return typeof Blob<"u"&&r instanceof Blob}function j0(r){return typeof FormData<"u"&&r instanceof FormData}function wb(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var X0="Content-Type",$0="Accept",q0="X-Request-URL",Y0="text/plain",Z0="application/json",Cb=`${Z0}, ${Y0}, */*`,To=class r{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(e,t,n,i){this.url=t,this.method=e.toUpperCase();let s;if(Eb(this.method)||i?(this.body=n!==void 0?n:null,s=i):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new Ur,this.context??=new su,!this.params)this.params=new sr,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),l=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+l+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||G0(this.body)||W0(this.body)||j0(this.body)||wb(this.body)?this.body:this.body instanceof sr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||j0(this.body)?null:W0(this.body)?this.body.type||null:G0(this.body)?null:typeof this.body=="string"?Y0:this.body instanceof sr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Z0:null}clone(e={}){let t=e.method||this.method,n=e.url||this.url,i=e.responseType||this.responseType,s=e.transferCache??this.transferCache,o=e.body!==void 0?e.body:this.body,a=e.withCredentials??this.withCredentials,l=e.reportProgress??this.reportProgress,c=e.headers||this.headers,h=e.params||this.params,d=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((f,u)=>f.set(u,e.setHeaders[u]),c)),e.setParams&&(h=Object.keys(e.setParams).reduce((f,u)=>f.set(u,e.setParams[u]),h)),new r(t,n,o,{params:h,headers:c,context:d,reportProgress:l,responseType:i,withCredentials:a,transferCache:s})}},bs=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(bs||{}),Do=class{headers;status;statusText;url;ok;type;constructor(e,t=200,n="OK"){this.headers=e.headers||new Ur,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},ou=class r extends Do{constructor(e={}){super(e)}type=bs.ResponseHeader;clone(e={}){return new r({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},nl=class r extends Do{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=bs.Response;clone(e={}){return new r({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},il=class extends Do{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},Tb=200,Ab=204;function cf(r,e){return{body:e,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var Br=(()=>{class r{handler;constructor(t){this.handler=t}request(t,n,i={}){let s;if(t instanceof To)s=t;else{let l;i.headers instanceof Ur?l=i.headers:l=new Ur(i.headers);let c;i.params&&(i.params instanceof sr?c=i.params:c=new sr({fromObject:i.params})),s=new To(t,n,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let o=se(s).pipe(Qi(l=>this.handler.handle(l)));if(t instanceof To||i.observe==="events")return o;let a=o.pipe(Ir(l=>l instanceof nl));switch(i.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe(De(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Re(2806,!1);return l.body}));case"blob":return a.pipe(De(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Re(2807,!1);return l.body}));case"text":return a.pipe(De(l=>{if(l.body!==null&&typeof l.body!="string")throw new Re(2808,!1);return l.body}));case"json":default:return a.pipe(De(l=>l.body))}case"response":return a;default:throw new Re(2809,!1)}}delete(t,n={}){return this.request("DELETE",t,n)}get(t,n={}){return this.request("GET",t,n)}head(t,n={}){return this.request("HEAD",t,n)}jsonp(t,n){return this.request("JSONP",t,{params:new sr().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,n={}){return this.request("OPTIONS",t,n)}patch(t,n,i={}){return this.request("PATCH",t,cf(i,n))}post(t,n,i={}){return this.request("POST",t,cf(i,n))}put(t,n,i={}){return this.request("PUT",t,cf(i,n))}static \u0275fac=function(n){return new(n||r)(ie(Ao))};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})();var Db=new ce("");function Rb(r,e){return e(r)}function Pb(r,e,t){return(n,i)=>Zt(t,()=>e(n,s=>r(s,i)))}var K0=new ce(""),J0=new ce(""),Q0=new ce("",{providedIn:"root",factory:()=>!0});var au=(()=>{class r extends Ao{backend;injector;chain=null;pendingTasks=W(Wc);contributeToStability=W(Q0);constructor(t,n){super(),this.backend=t,this.injector=n}handle(t){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(K0),...this.injector.get(J0,[])]));this.chain=n.reduceRight((i,s)=>Pb(i,s,this.injector),Rb)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(t,i=>this.backend.handle(i)).pipe(mo(()=>this.pendingTasks.remove(n)))}else return this.chain(t,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||r)(ie(tl),ie(gs))};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})();var Ib=/^\)\]\}',?\n/,Fb=RegExp(`^${q0}:`,"m");function Lb(r){return"responseURL"in r&&r.responseURL?r.responseURL:Fb.test(r.getAllResponseHeaders())?r.getResponseHeader(q0):null}var uf=(()=>{class r{xhrFactory;constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new Re(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?qt(n.\u0275loadImpl()):se(null)).pipe(cn(()=>new $g(s=>{let o=n.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((p,g)=>o.setRequestHeader(p,g.join(","))),t.headers.has($0)||o.setRequestHeader($0,Cb),!t.headers.has(X0)){let p=t.detectContentTypeHeader();p!==null&&o.setRequestHeader(X0,p)}if(t.responseType){let p=t.responseType.toLowerCase();o.responseType=p!=="json"?p:"text"}let a=t.serializeBody(),l=null,c=()=>{if(l!==null)return l;let p=o.statusText||"OK",g=new Ur(o.getAllResponseHeaders()),_=Lb(o)||t.url;return l=new ou({headers:g,status:o.status,statusText:p,url:_}),l},h=()=>{let{headers:p,status:g,statusText:_,url:b}=c(),x=null;g!==Ab&&(x=typeof o.response>"u"?o.responseText:o.response),g===0&&(g=x?Tb:0);let y=g>=200&&g<300;if(t.responseType==="json"&&typeof x=="string"){let v=x;x=x.replace(Ib,"");try{x=x!==""?JSON.parse(x):null}catch(T){x=v,y&&(y=!1,x={error:T,text:x})}}y?(s.next(new nl({body:x,headers:p,status:g,statusText:_,url:b||void 0})),s.complete()):s.error(new il({error:x,headers:p,status:g,statusText:_,url:b||void 0}))},d=p=>{let{url:g}=c(),_=new il({error:p,status:o.status||0,statusText:o.statusText||"Unknown Error",url:g||void 0});s.error(_)},f=!1,u=p=>{f||(s.next(c()),f=!0);let g={type:bs.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(g.total=p.total),t.responseType==="text"&&o.responseText&&(g.partialText=o.responseText),s.next(g)},m=p=>{let g={type:bs.UploadProgress,loaded:p.loaded};p.lengthComputable&&(g.total=p.total),s.next(g)};return o.addEventListener("load",h),o.addEventListener("error",d),o.addEventListener("timeout",d),o.addEventListener("abort",d),t.reportProgress&&(o.addEventListener("progress",u),a!==null&&o.upload&&o.upload.addEventListener("progress",m)),o.send(a),s.next({type:bs.Sent}),()=>{o.removeEventListener("error",d),o.removeEventListener("abort",d),o.removeEventListener("load",h),o.removeEventListener("timeout",d),t.reportProgress&&(o.removeEventListener("progress",u),a!==null&&o.upload&&o.upload.removeEventListener("progress",m)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(n){return new(n||r)(ie(Ss))};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})(),e_=new ce(""),Ob="XSRF-TOKEN",Nb=new ce("",{providedIn:"root",factory:()=>Ob}),Ub="X-XSRF-TOKEN",Bb=new ce("",{providedIn:"root",factory:()=>Ub}),rl=class{},kb=(()=>{class r{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(t,n,i){this.doc=t,this.platform=n,this.cookieName=i}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ya(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(n){return new(n||r)(ie(yt),ie(ys),ie(Nb))};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})();function Vb(r,e){let t=r.url.toLowerCase();if(!W(e_)||r.method==="GET"||r.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(r);let n=W(rl).getToken(),i=W(Bb);return n!=null&&!r.headers.has(i)&&(r=r.clone({headers:r.headers.set(i,n)})),e(r)}function hf(...r){let e=[Br,uf,au,{provide:Ao,useExisting:au},{provide:tl,useFactory:()=>W(Db,{optional:!0})??W(uf)},{provide:K0,useValue:Vb,multi:!0},{provide:e_,useValue:!0},{provide:rl,useClass:kb}];for(let t of r)e.push(...t.\u0275providers);return er(e)}var t_=(()=>{class r{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||r)(ie(yt))};static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var ge="primary",vl=Symbol("RouteTitle"),gf=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ws(r){return new gf(r)}function c_(r,e,t){let n=t.path.split("/");if(n.length>r.length||t.pathMatch==="full"&&(e.hasChildren()||n.length<r.length))return null;let i={};for(let s=0;s<n.length;s++){let o=n[s],a=r[s];if(o[0]===":")i[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:r.slice(0,n.length),posParams:i}}function Wb(r,e){if(r.length!==e.length)return!1;for(let t=0;t<r.length;++t)if(!Hi(r[t],e[t]))return!1;return!0}function Hi(r,e){let t=r?_f(r):void 0,n=e?_f(e):void 0;if(!t||!n||t.length!=n.length)return!1;let i;for(let s=0;s<t.length;s++)if(i=t[s],!u_(r[i],e[i]))return!1;return!0}function _f(r){return[...Object.keys(r),...Object.getOwnPropertySymbols(r)]}function u_(r,e){if(Array.isArray(r)&&Array.isArray(e)){if(r.length!==e.length)return!1;let t=[...r].sort(),n=[...e].sort();return t.every((i,s)=>n[s]===i)}else return r===e}function h_(r){return r.length>0?r[r.length-1]:null}function zr(r){return ms(r)?r:Xa(r)?qt(Promise.resolve(r)):se(r)}var jb={exact:f_,subset:p_},d_={exact:Xb,subset:$b,ignored:()=>!0};function n_(r,e,t){return jb[t.paths](r.root,e.root,t.matrixParams)&&d_[t.queryParams](r.queryParams,e.queryParams)&&!(t.fragment==="exact"&&r.fragment!==e.fragment)}function Xb(r,e){return Hi(r,e)}function f_(r,e,t){if(!Ms(r.segments,e.segments)||!uu(r.segments,e.segments,t)||r.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!r.children[n]||!f_(r.children[n],e.children[n],t))return!1;return!0}function $b(r,e){return Object.keys(e).length<=Object.keys(r).length&&Object.keys(e).every(t=>u_(r[t],e[t]))}function p_(r,e,t){return m_(r,e,e.segments,t)}function m_(r,e,t,n){if(r.segments.length>t.length){let i=r.segments.slice(0,t.length);return!(!Ms(i,t)||e.hasChildren()||!uu(i,t,n))}else if(r.segments.length===t.length){if(!Ms(r.segments,t)||!uu(r.segments,t,n))return!1;for(let i in e.children)if(!r.children[i]||!p_(r.children[i],e.children[i],n))return!1;return!0}else{let i=t.slice(0,r.segments.length),s=t.slice(r.segments.length);return!Ms(r.segments,i)||!uu(r.segments,i,n)||!r.children[ge]?!1:m_(r.children[ge],e,s,n)}}function uu(r,e,t){return e.every((n,i)=>d_[t](r[i].parameters,n.parameters))}var Wi=class{root;queryParams;fragment;_queryParamMap;constructor(e=new ke([],{}),t={},n=null){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=ws(this.queryParams),this._queryParamMap}toString(){return Zb.serialize(this)}},ke=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return hu(this)}},kr=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=ws(this.parameters),this._parameterMap}toString(){return __(this)}};function qb(r,e){return Ms(r,e)&&r.every((t,n)=>Hi(t.parameters,e[n].parameters))}function Ms(r,e){return r.length!==e.length?!1:r.every((t,n)=>t.path===e[n].path)}function Yb(r,e){let t=[];return Object.entries(r.children).forEach(([n,i])=>{n===ge&&(t=t.concat(e(i,n)))}),Object.entries(r.children).forEach(([n,i])=>{n!==ge&&(t=t.concat(e(i,n)))}),t}var yl=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:()=>new Cs,providedIn:"root"})}return r})(),Cs=class{parse(e){let t=new yf(e);return new Wi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${sl(e.root,!0)}`,n=Qb(e.queryParams),i=typeof e.fragment=="string"?`#${Kb(e.fragment)}`:"";return`${t}${n}${i}`}},Zb=new Cs;function hu(r){return r.segments.map(e=>__(e)).join("/")}function sl(r,e){if(!r.hasChildren())return hu(r);if(e){let t=r.children[ge]?sl(r.children[ge],!1):"",n=[];return Object.entries(r.children).forEach(([i,s])=>{i!==ge&&n.push(`${i}:${sl(s,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=Yb(r,(n,i)=>i===ge?[sl(r.children[ge],!1)]:[`${i}:${sl(n,!1)}`]);return Object.keys(r.children).length===1&&r.children[ge]!=null?`${hu(r)}/${t[0]}`:`${hu(r)}/(${t.join("//")})`}}function g_(r){return encodeURIComponent(r).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function lu(r){return g_(r).replace(/%3B/gi,";")}function Kb(r){return encodeURI(r)}function vf(r){return g_(r).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function du(r){return decodeURIComponent(r)}function i_(r){return du(r.replace(/\+/g,"%20"))}function __(r){return`${vf(r.path)}${Jb(r.parameters)}`}function Jb(r){return Object.entries(r).map(([e,t])=>`;${vf(e)}=${vf(t)}`).join("")}function Qb(r){let e=Object.entries(r).map(([t,n])=>Array.isArray(n)?n.map(i=>`${lu(t)}=${lu(i)}`).join("&"):`${lu(t)}=${lu(n)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var eM=/^[^\/()?;#]+/;function df(r){let e=r.match(eM);return e?e[0]:""}var tM=/^[^\/()?;=#]+/;function nM(r){let e=r.match(tM);return e?e[0]:""}var iM=/^[^=?&#]+/;function rM(r){let e=r.match(iM);return e?e[0]:""}var sM=/^[^&#]+/;function oM(r){let e=r.match(sM);return e?e[0]:""}var yf=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ke([],{}):new ke([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n[ge]=new ke(e,t)),n}parseSegment(){let e=df(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Re(4009,!1);return this.capture(e),new kr(du(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=nM(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let i=df(this.remaining);i&&(n=i,this.capture(n))}e[du(t)]=du(n)}parseQueryParam(e){let t=rM(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let o=oM(this.remaining);o&&(n=o,this.capture(n))}let i=i_(t),s=i_(n);if(e.hasOwnProperty(i)){let o=e[i];Array.isArray(o)||(o=[o],e[i]=o),o.push(s)}else e[i]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=df(this.remaining),i=this.remaining[n.length];if(i!=="/"&&i!==")"&&i!==";")throw new Re(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=ge);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[ge]:new ke([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Re(4011,!1)}};function v_(r){return r.segments.length>0?new ke([],{[ge]:r}):r}function y_(r){let e={};for(let[n,i]of Object.entries(r.children)){let s=y_(i);if(n===ge&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[n]=s)}let t=new ke(r.segments,e);return aM(t)}function aM(r){if(r.numberOfChildren===1&&r.children[ge]){let e=r.children[ge];return new ke(r.segments.concat(e.segments),e.children)}return r}function Lo(r){return r instanceof Wi}function x_(r,e,t=null,n=null){let i=S_(r);return b_(i,e,t,n)}function S_(r){let e;function t(s){let o={};for(let l of s.children){let c=t(l);o[l.outlet]=c}let a=new ke(s.url,o);return s===r&&(e=a),a}let n=t(r.root),i=v_(n);return e??i}function b_(r,e,t,n){let i=r;for(;i.parent;)i=i.parent;if(e.length===0)return ff(i,i,i,t,n);let s=lM(e);if(s.toRoot())return ff(i,i,new ke([],{}),t,n);let o=cM(s,i,r),a=o.processChildren?al(o.segmentGroup,o.index,s.commands):E_(o.segmentGroup,o.index,s.commands);return ff(i,o.segmentGroup,a,t,n)}function pu(r){return typeof r=="object"&&r!=null&&!r.outlets&&!r.segmentPath}function cl(r){return typeof r=="object"&&r!=null&&r.outlets}function ff(r,e,t,n,i){let s={};n&&Object.entries(n).forEach(([l,c])=>{s[l]=Array.isArray(c)?c.map(h=>`${h}`):`${c}`});let o;r===e?o=t:o=M_(r,e,t);let a=v_(y_(o));return new Wi(a,s,i)}function M_(r,e,t){let n={};return Object.entries(r.children).forEach(([i,s])=>{s===e?n[i]=t:n[i]=M_(s,e,t)}),new ke(r.segments,n)}var mu=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&pu(n[0]))throw new Re(4003,!1);let i=n.find(cl);if(i&&i!==h_(n))throw new Re(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function lM(r){if(typeof r[0]=="string"&&r.length===1&&r[0]==="/")return new mu(!0,0,r);let e=0,t=!1,n=r.reduce((i,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...i,{outlets:a}]}if(s.segmentPath)return[...i,s.segmentPath]}return typeof s!="string"?[...i,s]:o===0?(s.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?e++:a!=""&&i.push(a))}),i):[...i,s]},[]);return new mu(t,e,n)}var Io=class{segmentGroup;processChildren;index;constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}};function cM(r,e,t){if(r.isAbsolute)return new Io(e,!0,0);if(!t)return new Io(e,!1,NaN);if(t.parent===null)return new Io(t,!0,0);let n=pu(r.commands[0])?0:1,i=t.segments.length-1+n;return uM(t,i,r.numberOfDoubleDots)}function uM(r,e,t){let n=r,i=e,s=t;for(;s>i;){if(s-=i,n=n.parent,!n)throw new Re(4005,!1);i=n.segments.length}return new Io(n,!1,i-s)}function hM(r){return cl(r[0])?r[0].outlets:{[ge]:r}}function E_(r,e,t){if(r??=new ke([],{}),r.segments.length===0&&r.hasChildren())return al(r,e,t);let n=dM(r,e,t),i=t.slice(n.commandIndex);if(n.match&&n.pathIndex<r.segments.length){let s=new ke(r.segments.slice(0,n.pathIndex),{});return s.children[ge]=new ke(r.segments.slice(n.pathIndex),r.children),al(s,0,i)}else return n.match&&i.length===0?new ke(r.segments,{}):n.match&&!r.hasChildren()?xf(r,e,t):n.match?al(r,0,i):xf(r,e,t)}function al(r,e,t){if(t.length===0)return new ke(r.segments,{});{let n=hM(t),i={};if(Object.keys(n).some(s=>s!==ge)&&r.children[ge]&&r.numberOfChildren===1&&r.children[ge].segments.length===0){let s=al(r.children[ge],e,t);return new ke(r.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(i[s]=E_(r.children[s],e,o))}),Object.entries(r.children).forEach(([s,o])=>{n[s]===void 0&&(i[s]=o)}),new ke(r.segments,i)}}function dM(r,e,t){let n=0,i=e,s={match:!1,pathIndex:0,commandIndex:0};for(;i<r.segments.length;){if(n>=t.length)return s;let o=r.segments[i],a=t[n];if(cl(a))break;let l=`${a}`,c=n<t.length-1?t[n+1]:null;if(i>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!s_(l,c,o))return s;n+=2}else{if(!s_(l,{},o))return s;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function xf(r,e,t){let n=r.segments.slice(0,e),i=0;for(;i<t.length;){let s=t[i];if(cl(s)){let l=fM(s.outlets);return new ke(n,l)}if(i===0&&pu(t[0])){let l=r.segments[e];n.push(new kr(l.path,r_(t[0]))),i++;continue}let o=cl(s)?s.outlets[ge]:`${s}`,a=i<t.length-1?t[i+1]:null;o&&a&&pu(a)?(n.push(new kr(o,r_(a))),i+=2):(n.push(new kr(o,{})),i++)}return new ke(n,{})}function fM(r){let e={};return Object.entries(r).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[t]=xf(new ke([],{}),0,n))}),e}function r_(r){let e={};return Object.entries(r).forEach(([t,n])=>e[t]=`${n}`),e}function s_(r,e,t){return r==t.path&&Hi(e,t.parameters)}var fu="imperative",It=function(r){return r[r.NavigationStart=0]="NavigationStart",r[r.NavigationEnd=1]="NavigationEnd",r[r.NavigationCancel=2]="NavigationCancel",r[r.NavigationError=3]="NavigationError",r[r.RoutesRecognized=4]="RoutesRecognized",r[r.ResolveStart=5]="ResolveStart",r[r.ResolveEnd=6]="ResolveEnd",r[r.GuardsCheckStart=7]="GuardsCheckStart",r[r.GuardsCheckEnd=8]="GuardsCheckEnd",r[r.RouteConfigLoadStart=9]="RouteConfigLoadStart",r[r.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",r[r.ChildActivationStart=11]="ChildActivationStart",r[r.ChildActivationEnd=12]="ChildActivationEnd",r[r.ActivationStart=13]="ActivationStart",r[r.ActivationEnd=14]="ActivationEnd",r[r.Scroll=15]="Scroll",r[r.NavigationSkipped=16]="NavigationSkipped",r}(It||{}),zn=class{id;url;constructor(e,t){this.id=e,this.url=t}},Ts=class extends zn{type=It.NavigationStart;navigationTrigger;restoredState;constructor(e,t,n="imperative",i=null){super(e,t),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},or=class extends zn{urlAfterRedirects;type=It.NavigationEnd;constructor(e,t,n){super(e,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},wn=function(r){return r[r.Redirect=0]="Redirect",r[r.SupersededByNewNavigation=1]="SupersededByNewNavigation",r[r.NoDataFromResolver=2]="NoDataFromResolver",r[r.GuardRejected=3]="GuardRejected",r}(wn||{}),ul=function(r){return r[r.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",r[r.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",r}(ul||{}),Gi=class extends zn{reason;code;type=It.NavigationCancel;constructor(e,t,n,i){super(e,t),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},ar=class extends zn{reason;code;type=It.NavigationSkipped;constructor(e,t,n,i){super(e,t),this.reason=n,this.code=i}},Oo=class extends zn{error;target;type=It.NavigationError;constructor(e,t,n,i){super(e,t),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},hl=class extends zn{urlAfterRedirects;state;type=It.RoutesRecognized;constructor(e,t,n,i){super(e,t),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gu=class extends zn{urlAfterRedirects;state;type=It.GuardsCheckStart;constructor(e,t,n,i){super(e,t),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},_u=class extends zn{urlAfterRedirects;state;shouldActivate;type=It.GuardsCheckEnd;constructor(e,t,n,i,s){super(e,t),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},vu=class extends zn{urlAfterRedirects;state;type=It.ResolveStart;constructor(e,t,n,i){super(e,t),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},yu=class extends zn{urlAfterRedirects;state;type=It.ResolveEnd;constructor(e,t,n,i){super(e,t),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xu=class{route;type=It.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Su=class{route;type=It.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},bu=class{snapshot;type=It.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Mu=class{snapshot;type=It.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Eu=class{snapshot;type=It.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},wu=class{snapshot;type=It.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var dl=class{},No=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function pM(r,e){return r.providers&&!r._injector&&(r._injector=$c(r.providers,e,`Route: ${r.path}`)),r._injector??e}function bi(r){return r.outlet||ge}function mM(r,e){let t=r.filter(n=>bi(n)===e);return t.push(...r.filter(n=>bi(n)!==e)),t}function xl(r){if(!r)return null;if(r.routeConfig?._injector)return r.routeConfig._injector;for(let e=r.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Cu=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return xl(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new ko(this.rootInjector)}},ko=(()=>{class r{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,n){let i=this.getOrCreateContext(t);i.outlet=n,this.contexts.set(t,i)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new Cu(this.rootInjector),this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(n){return new(n||r)(ie(gs))};static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Tu=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Sf(e,this._root);return t?t.children.map(n=>n.value):[]}firstChild(e){let t=Sf(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=bf(e,this._root);return t.length<2?[]:t[t.length-2].children.map(i=>i.value).filter(i=>i!==e)}pathFromRoot(e){return bf(e,this._root).map(t=>t.value)}};function Sf(r,e){if(r===e.value)return e;for(let t of e.children){let n=Sf(r,t);if(n)return n}return null}function bf(r,e){if(r===e.value)return[e];for(let t of e.children){let n=bf(r,t);if(n.length)return n.unshift(e),n}return[]}var Vn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Po(r){let e={};return r&&r.children.forEach(t=>e[t.value.outlet]=t),e}var fl=class extends Tu{snapshot;constructor(e,t){super(e),this.snapshot=t,Rf(this,e)}toString(){return this.snapshot.toString()}};function w_(r){let e=gM(r),t=new ri([new kr("",{})]),n=new ri({}),i=new ri({}),s=new ri({}),o=new ri(""),a=new Vr(t,n,s,o,i,ge,r,e.root);return a.snapshot=e.root,new fl(new Vn(a,[]),e)}function gM(r){let e={},t={},n={},i="",s=new Es([],e,n,i,t,ge,r,null,{});return new pl("",new Vn(s,[]))}var Vr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,n,i,s,o,a,l){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(De(c=>c[vl]))??se(void 0),this.url=e,this.params=t,this.queryParams=n,this.fragment=i,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(De(e=>ws(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(De(e=>ws(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Au(r,e,t="emptyOnly"){let n,{routeConfig:i}=r;return e!==null&&(t==="always"||i?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:$($({},e.params),r.params),data:$($({},e.data),r.data),resolve:$($($($({},r.data),e.data),i?.data),r._resolvedData)}:n={params:$({},r.params),data:$({},r.data),resolve:$($({},r.data),r._resolvedData??{})},i&&T_(i)&&(n.resolve[vl]=i.title),n}var Es=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[vl]}constructor(e,t,n,i,s,o,a,l,c){this.url=e,this.params=t,this.queryParams=n,this.fragment=i,this.data=s,this.outlet=o,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ws(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ws(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},pl=class extends Tu{url;constructor(e,t){super(t),this.url=e,Rf(this,t)}toString(){return C_(this._root)}};function Rf(r,e){e.value._routerState=r,e.children.forEach(t=>Rf(r,t))}function C_(r){let e=r.children.length>0?` { ${r.children.map(C_).join(", ")} } `:"";return`${r.value}${e}`}function pf(r){if(r.snapshot){let e=r.snapshot,t=r._futureSnapshot;r.snapshot=t,Hi(e.queryParams,t.queryParams)||r.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&r.fragmentSubject.next(t.fragment),Hi(e.params,t.params)||r.paramsSubject.next(t.params),Wb(e.url,t.url)||r.urlSubject.next(t.url),Hi(e.data,t.data)||r.dataSubject.next(t.data)}else r.snapshot=r._futureSnapshot,r.dataSubject.next(r._futureSnapshot.data)}function Mf(r,e){let t=Hi(r.params,e.params)&&qb(r.url,e.url),n=!r.parent!=!e.parent;return t&&!n&&(!r.parent||Mf(r.parent,e.parent))}function T_(r){return typeof r.title=="string"||r.title===null}var A_=new ce(""),Sl=(()=>{class r{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ge;activateEvents=new un;deactivateEvents=new un;attachEvents=new un;detachEvents=new un;routerOutletData=_s(void 0);parentContexts=W(ko);location=W(xo);changeDetector=W(rr);inputBinder=W(Iu,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:i}=t.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Re(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Re(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Re(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new Re(4013,!1);this._activatedRoute=t;let i=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Ef(t,a,i.injector,this.routerOutletData);this.activated=i.createComponent(o,{index:i.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||r)};static \u0275dir=Kt({type:r,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[go]})}return r})(),Ef=class{route;childContexts;parent;outletData;constructor(e,t,n,i){this.route=e,this.childContexts=t,this.parent=n,this.outletData=i}get(e,t){return e===Vr?this.route:e===ko?this.childContexts:e===A_?this.outletData:this.parent.get(e,t)}},Iu=new ce("");function _M(r,e,t){let n=ml(r,e._root,t?t._root:void 0);return new fl(n,e)}function ml(r,e,t){if(t&&r.shouldReuseRoute(e.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=e.value;let i=vM(r,e,t);return new Vn(n,i)}else{if(r.shouldAttach(e.value)){let s=r.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>ml(r,a)),o}}let n=yM(e.value),i=e.children.map(s=>ml(r,s));return new Vn(n,i)}}function vM(r,e,t){return e.children.map(n=>{for(let i of t.children)if(r.shouldReuseRoute(n.value,i.value.snapshot))return ml(r,n,i);return ml(r,n)})}function yM(r){return new Vr(new ri(r.url),new ri(r.params),new ri(r.queryParams),new ri(r.fragment),new ri(r.data),r.outlet,r.component,r)}var Uo=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},D_="ngNavigationCancelingError";function Du(r,e){let{redirectTo:t,navigationBehaviorOptions:n}=Lo(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,i=R_(!1,wn.Redirect);return i.url=t,i.navigationBehaviorOptions=n,i}function R_(r,e){let t=new Error(`NavigationCancelingError: ${r||""}`);return t[D_]=!0,t.cancellationCode=e,t}function xM(r){return P_(r)&&Lo(r.url)}function P_(r){return!!r&&r[D_]}var SM=(r,e,t,n)=>De(i=>(new wf(e,i.targetRouterState,i.currentRouterState,t,n).activate(r),i)),wf=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,n,i,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),pf(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){let i=Po(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,i[o],n),delete i[o]}),Object.values(i).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(e,t,n){let i=e.value,s=t?t.value:null;if(i===s)if(i.component){let o=n.getContext(i.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else s&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let n=t.getContext(e.value.outlet),i=n&&e.value.component?n.children:t,s=Po(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,i);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let n=t.getContext(e.value.outlet),i=n&&e.value.component?n.children:t,s=Po(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,t,n){let i=Po(t);e.children.forEach(s=>{this.activateRoutes(s,i[s.value.outlet],n),this.forwardEvent(new wu(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Mu(e.value.snapshot))}activateRoutes(e,t,n){let i=e.value,s=t?t.value:null;if(pf(i),i===s)if(i.component){let o=n.getOrCreateContext(i.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(i.component){let o=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),pf(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=i,o.outlet&&o.outlet.activateWith(i,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,n)}},Ru=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Fo=class{component;route;constructor(e,t){this.component=e,this.route=t}};function bM(r,e,t){let n=r._root,i=e?e._root:null;return ol(n,i,t,[n.value])}function MM(r){let e=r.routeConfig?r.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:r,guards:e}}function Vo(r,e){let t=Symbol(),n=e.get(r,t);return n===t?typeof r=="function"&&!Qg(r)?r:e.get(r):n}function ol(r,e,t,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let s=Po(e);return r.children.forEach(o=>{EM(o,s[o.value.outlet],t,n.concat([o.value]),i),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>ll(a,t.getContext(o),i)),i}function EM(r,e,t,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let s=r.value,o=e?e.value:null,a=t?t.getContext(r.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let l=wM(o,s,s.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new Ru(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?ol(r,e,a?a.children:null,n,i):ol(r,e,t,n,i),l&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new Fo(a.outlet.component,o))}else o&&ll(e,a,i),i.canActivateChecks.push(new Ru(n)),s.component?ol(r,null,a?a.children:null,n,i):ol(r,null,t,n,i);return i}function wM(r,e,t){if(typeof t=="function")return t(r,e);switch(t){case"pathParamsChange":return!Ms(r.url,e.url);case"pathParamsOrQueryParamsChange":return!Ms(r.url,e.url)||!Hi(r.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Mf(r,e)||!Hi(r.queryParams,e.queryParams);case"paramsChange":default:return!Mf(r,e)}}function ll(r,e,t){let n=Po(r),i=r.value;Object.entries(n).forEach(([s,o])=>{i.component?e?ll(o,e.children.getContext(s),t):ll(o,null,t):ll(o,e,t)}),i.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Fo(e.outlet.component,i)):t.canDeactivateChecks.push(new Fo(null,i)):t.canDeactivateChecks.push(new Fo(null,i))}function bl(r){return typeof r=="function"}function CM(r){return typeof r=="boolean"}function TM(r){return r&&bl(r.canLoad)}function AM(r){return r&&bl(r.canActivate)}function DM(r){return r&&bl(r.canActivateChild)}function RM(r){return r&&bl(r.canDeactivate)}function PM(r){return r&&bl(r.canMatch)}function I_(r){return r instanceof qg||r?.name==="EmptyError"}var cu=Symbol("INITIAL_VALUE");function Bo(){return cn(r=>Od(r.map(e=>e.pipe(Si(1),Kg(cu)))).pipe(De(e=>{for(let t of e)if(t!==!0){if(t===cu)return cu;if(t===!1||IM(t))return t}return!0}),Ir(e=>e!==cu),Si(1)))}function IM(r){return Lo(r)||r instanceof Uo}function FM(r,e){return si(t=>{let{targetSnapshot:n,currentSnapshot:i,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?se(Xe($({},t),{guardsResult:!0})):LM(o,n,i,r).pipe(si(a=>a&&CM(a)?OM(n,s,r,e):se(a)),De(a=>Xe($({},t),{guardsResult:a})))})}function LM(r,e,t,n){return qt(r).pipe(si(i=>VM(i.component,i.route,t,e,n)),Fr(i=>i!==!0,!0))}function OM(r,e,t,n){return qt(e).pipe(Qi(i=>Ga(UM(i.route.parent,n),NM(i.route,n),kM(r,i.path,t),BM(r,i.route,t))),Fr(i=>i!==!0,!0))}function NM(r,e){return r!==null&&e&&e(new Eu(r)),se(!0)}function UM(r,e){return r!==null&&e&&e(new bu(r)),se(!0)}function BM(r,e,t){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return se(!0);let i=n.map(s=>fo(()=>{let o=xl(e)??t,a=Vo(s,o),l=AM(a)?a.canActivate(e,r):Zt(o,()=>a(e,r));return zr(l).pipe(Fr())}));return se(i).pipe(Bo())}function kM(r,e,t){let n=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>MM(o)).filter(o=>o!==null).map(o=>fo(()=>{let a=o.guards.map(l=>{let c=xl(o.node)??t,h=Vo(l,c),d=DM(h)?h.canActivateChild(n,r):Zt(c,()=>h(n,r));return zr(d).pipe(Fr())});return se(a).pipe(Bo())}));return se(s).pipe(Bo())}function VM(r,e,t,n,i){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return se(!0);let o=s.map(a=>{let l=xl(e)??i,c=Vo(a,l),h=RM(c)?c.canDeactivate(r,e,t,n):Zt(l,()=>c(r,e,t,n));return zr(h).pipe(Fr())});return se(o).pipe(Bo())}function zM(r,e,t,n){let i=e.canLoad;if(i===void 0||i.length===0)return se(!0);let s=i.map(o=>{let a=Vo(o,r),l=TM(a)?a.canLoad(e,t):Zt(r,()=>a(e,t));return zr(l)});return se(s).pipe(Bo(),F_(n))}function F_(r){return Xg(Yt(e=>{if(typeof e!="boolean")throw Du(r,e)}),De(e=>e===!0))}function HM(r,e,t,n){let i=e.canMatch;if(!i||i.length===0)return se(!0);let s=i.map(o=>{let a=Vo(o,r),l=PM(a)?a.canMatch(e,t):Zt(r,()=>a(e,t));return zr(l)});return se(s).pipe(Bo(),F_(n))}var gl=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},_l=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Ro(r){return Ha(new gl(r))}function GM(r){return Ha(new Re(4e3,!1))}function WM(r){return Ha(R_(!1,wn.GuardRejected))}var Cf=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let n=[],i=t.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return se(n);if(i.numberOfChildren>1||!i.children[ge])return GM(`${e.redirectTo}`);i=i.children[ge]}}applyRedirectCommands(e,t,n,i,s){if(typeof t!="string"){let a=t,{queryParams:l,fragment:c,routeConfig:h,url:d,outlet:f,params:u,data:m,title:p}=i,g=Zt(s,()=>a({params:u,data:m,queryParams:l,fragment:c,routeConfig:h,url:d,outlet:f,title:p}));if(g instanceof Wi)throw new _l(g);t=g}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,n);if(t[0]==="/")throw new _l(o);return o}applyRedirectCreateUrlTree(e,t,n,i){let s=this.createSegmentGroup(e,t.root,n,i);return new Wi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let n={};return Object.entries(e).forEach(([i,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);n[i]=t[a]}else n[i]=s}),n}createSegmentGroup(e,t,n,i){let s=this.createSegments(e,t.segments,n,i),o={};return Object.entries(t.children).forEach(([a,l])=>{o[a]=this.createSegmentGroup(e,l,n,i)}),new ke(s,o)}createSegments(e,t,n,i){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,i):this.findOrReturn(s,n))}findPosParam(e,t,n){let i=n[t.path.substring(1)];if(!i)throw new Re(4001,!1);return i}findOrReturn(e,t){let n=0;for(let i of t){if(i.path===e.path)return t.splice(n),i;n++}return e}},Tf={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function jM(r,e,t,n,i){let s=L_(r,e,t);return s.matched?(n=pM(e,n),HM(n,e,t,i).pipe(De(o=>o===!0?s:$({},Tf)))):se(s)}function L_(r,e,t){if(e.path==="**")return XM(t);if(e.path==="")return e.pathMatch==="full"&&(r.hasChildren()||t.length>0)?$({},Tf):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let i=(e.matcher||c_)(t,r,e);if(!i)return $({},Tf);let s={};Object.entries(i.posParams??{}).forEach(([a,l])=>{s[a]=l.path});let o=i.consumed.length>0?$($({},s),i.consumed[i.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:i.consumed,remainingSegments:t.slice(i.consumed.length),parameters:o,positionalParamSegments:i.posParams??{}}}function XM(r){return{matched:!0,parameters:r.length>0?h_(r).parameters:{},consumedSegments:r,remainingSegments:[],positionalParamSegments:{}}}function o_(r,e,t,n){return t.length>0&&YM(r,t,n)?{segmentGroup:new ke(e,qM(n,new ke(t,r.children))),slicedSegments:[]}:t.length===0&&ZM(r,t,n)?{segmentGroup:new ke(r.segments,$M(r,t,n,r.children)),slicedSegments:t}:{segmentGroup:new ke(r.segments,r.children),slicedSegments:t}}function $M(r,e,t,n){let i={};for(let s of t)if(Fu(r,e,s)&&!n[bi(s)]){let o=new ke([],{});i[bi(s)]=o}return $($({},n),i)}function qM(r,e){let t={};t[ge]=e;for(let n of r)if(n.path===""&&bi(n)!==ge){let i=new ke([],{});t[bi(n)]=i}return t}function YM(r,e,t){return t.some(n=>Fu(r,e,n)&&bi(n)!==ge)}function ZM(r,e,t){return t.some(n=>Fu(r,e,n))}function Fu(r,e,t){return(r.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function KM(r,e,t){return e.length===0&&!r.children[t]}var Af=class{};function JM(r,e,t,n,i,s,o="emptyOnly"){return new Df(r,e,t,n,i,o,s).recognize()}var QM=31,Df=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,n,i,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=n,this.config=i,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Cf(this.urlSerializer,this.urlTree)}noMatchError(e){return new Re(4002,`'${e.segmentGroup}'`)}recognize(){let e=o_(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(De(({children:t,rootSnapshot:n})=>{let i=new Vn(n,t),s=new pl("",i),o=x_(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Es([],Object.freeze({}),Object.freeze($({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ge,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,ge,t).pipe(De(n=>({children:n,rootSnapshot:t})),po(n=>{if(n instanceof _l)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof gl?this.noMatchError(n):n}))}processSegmentGroup(e,t,n,i,s){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,t,n,s):this.processSegment(e,t,n,n.segments,i,!0,s).pipe(De(o=>o instanceof Vn?[o]:[]))}processChildren(e,t,n,i){let s=[];for(let o of Object.keys(n.children))o==="primary"?s.unshift(o):s.push(o);return qt(s).pipe(Qi(o=>{let a=n.children[o],l=mM(t,o);return this.processSegmentGroup(e,l,a,o,i)}),Zg((o,a)=>(o.push(...a),o)),Nd(null),Yg(),si(o=>{if(o===null)return Ro(n);let a=O_(o);return eE(a),se(a)}))}processSegment(e,t,n,i,s,o,a){return qt(t).pipe(Qi(l=>this.processSegmentAgainstRoute(l._injector??e,t,l,n,i,s,o,a).pipe(po(c=>{if(c instanceof gl)return se(null);throw c}))),Fr(l=>!!l),po(l=>{if(I_(l))return KM(n,i,s)?se(new Af):Ro(n);throw l}))}processSegmentAgainstRoute(e,t,n,i,s,o,a,l){return bi(n)!==o&&(o===ge||!Fu(i,s,n))?Ro(i):n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,i,n,s,o,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,i,t,n,s,o,l):Ro(i)}expandSegmentAgainstRouteUsingRedirect(e,t,n,i,s,o,a){let{matched:l,parameters:c,consumedSegments:h,positionalParamSegments:d,remainingSegments:f}=L_(t,i,s);if(!l)return Ro(t);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>QM&&(this.allowRedirects=!1));let u=new Es(s,c,Object.freeze($({},this.urlTree.queryParams)),this.urlTree.fragment,a_(i),bi(i),i.component??i._loadedComponent??null,i,l_(i)),m=Au(u,a,this.paramsInheritanceStrategy);u.params=Object.freeze(m.params),u.data=Object.freeze(m.data);let p=this.applyRedirects.applyRedirectCommands(h,i.redirectTo,d,u,e);return this.applyRedirects.lineralizeSegments(i,p).pipe(si(g=>this.processSegment(e,n,t,g.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,n,i,s,o){let a=jM(t,n,i,e,this.urlSerializer);return n.path==="**"&&(t.children={}),a.pipe(cn(l=>l.matched?(e=n._injector??e,this.getChildConfig(e,n,i).pipe(cn(({routes:c})=>{let h=n._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:u}=l,m=new Es(f,d,Object.freeze($({},this.urlTree.queryParams)),this.urlTree.fragment,a_(n),bi(n),n.component??n._loadedComponent??null,n,l_(n)),p=Au(m,o,this.paramsInheritanceStrategy);m.params=Object.freeze(p.params),m.data=Object.freeze(p.data);let{segmentGroup:g,slicedSegments:_}=o_(t,f,u,c);if(_.length===0&&g.hasChildren())return this.processChildren(h,c,g,m).pipe(De(x=>new Vn(m,x)));if(c.length===0&&_.length===0)return se(new Vn(m,[]));let b=bi(n)===s;return this.processSegment(h,c,g,_,b?ge:s,!0,m).pipe(De(x=>new Vn(m,x instanceof Vn?[x]:[])))}))):Ro(t)))}getChildConfig(e,t,n){return t.children?se({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?se({routes:t._loadedRoutes,injector:t._loadedInjector}):zM(e,t,n,this.urlSerializer).pipe(si(i=>i?this.configLoader.loadChildren(e,t).pipe(Yt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):WM(t))):se({routes:[],injector:e})}};function eE(r){r.sort((e,t)=>e.value.outlet===ge?-1:t.value.outlet===ge?1:e.value.outlet.localeCompare(t.value.outlet))}function tE(r){let e=r.value.routeConfig;return e&&e.path===""}function O_(r){let e=[],t=new Set;for(let n of r){if(!tE(n)){e.push(n);continue}let i=e.find(s=>n.value.routeConfig===s.value.routeConfig);i!==void 0?(i.children.push(...n.children),t.add(i)):e.push(n)}for(let n of t){let i=O_(n.children);e.push(new Vn(n.value,i))}return e.filter(n=>!t.has(n))}function a_(r){return r.data||{}}function l_(r){return r.resolve||{}}function nE(r,e,t,n,i,s){return si(o=>JM(r,e,t,n,o.extractedUrl,i,s).pipe(De(({state:a,tree:l})=>Xe($({},o),{targetSnapshot:a,urlAfterRedirects:l}))))}function iE(r,e){return si(t=>{let{targetSnapshot:n,guards:{canActivateChecks:i}}=t;if(!i.length)return se(t);let s=new Set(i.map(l=>l.route)),o=new Set;for(let l of s)if(!o.has(l))for(let c of N_(l))o.add(c);let a=0;return qt(o).pipe(Qi(l=>s.has(l)?rE(l,n,r,e):(l.data=Au(l,l.parent,r).resolve,se(void 0))),Yt(()=>a++),Ud(1),si(l=>a===o.size?se(t):Ji))})}function N_(r){let e=r.children.map(t=>N_(t)).flat();return[r,...e]}function rE(r,e,t,n){let i=r.routeConfig,s=r._resolve;return i?.title!==void 0&&!T_(i)&&(s[vl]=i.title),sE(s,r,e,n).pipe(De(o=>(r._resolvedData=o,r.data=Au(r,r.parent,t).resolve,null)))}function sE(r,e,t,n){let i=_f(r);if(i.length===0)return se({});let s={};return qt(i).pipe(si(o=>oE(r[o],e,t,n).pipe(Fr(),Yt(a=>{if(a instanceof Uo)throw Du(new Cs,a);s[o]=a}))),Ud(1),De(()=>s),po(o=>I_(o)?Ji:Ha(o)))}function oE(r,e,t,n){let i=xl(e)??n,s=Vo(r,i),o=s.resolve?s.resolve(e,t):Zt(i,()=>s(e,t));return zr(o)}function mf(r){return cn(e=>{let t=r(e);return t?qt(t).pipe(De(()=>e)):se(e)})}var Pf=(()=>{class r{buildTitle(t){let n,i=t.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(s=>s.outlet===ge);return n}getResolvedTitleForRoute(t){return t.data[vl]}static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:()=>W(U_),providedIn:"root"})}return r})(),U_=(()=>{class r extends Pf{title;constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||r)(ie(t_))};static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Ml=new ce("",{providedIn:"root",factory:()=>({})}),If=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Mn({type:r,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,i){n&1&&Se(0,"router-outlet")},dependencies:[Sl],encapsulation:2})}return r})();function Ff(r){let e=r.children&&r.children.map(Ff),t=e?Xe($({},r),{children:e}):$({},r);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==ge&&(t.component=If),t}var El=new ce(""),B_=(()=>{class r{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=W(y0);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return se(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let n=zr(t.loadComponent()).pipe(De(V_),Yt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),mo(()=>{this.componentLoaders.delete(t)})),i=new Ld(n,()=>new ii).pipe(Fd());return this.componentLoaders.set(t,i),i}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return se({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let s=k_(n,this.compiler,t,this.onLoadEndListener).pipe(mo(()=>{this.childrenLoaders.delete(n)})),o=new Ld(s,()=>new ii).pipe(Fd());return this.childrenLoaders.set(n,o),o}static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function k_(r,e,t,n){return zr(r.loadChildren()).pipe(De(V_),si(i=>i instanceof c0||Array.isArray(i)?se(i):qt(e.compileModuleAsync(i))),De(i=>{n&&n(r);let s,o,a=!1;return Array.isArray(i)?(o=i,a=!0):(s=i.create(t).injector,o=s.get(El,[],{optional:!0,self:!0}).flat()),{routes:o.map(Ff),injector:s}}))}function aE(r){return r&&typeof r=="object"&&"default"in r}function V_(r){return aE(r)?r.default:r}var Lu=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:()=>W(lE),providedIn:"root"})}return r})(),lE=(()=>{class r{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),z_=new ce("");var H_=new ce(""),G_=(()=>{class r{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new ii;transitionAbortSubject=new ii;configLoader=W(B_);environmentInjector=W(gs);destroyRef=W(Gc);urlSerializer=W(yl);rootContexts=W(ko);location=W(wo);inputBindingEnabled=W(Iu,{optional:!0})!==null;titleStrategy=W(Pf);options=W(Ml,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=W(Lu);createViewTransition=W(z_,{optional:!0});navigationErrorHandler=W(H_,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>se(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=i=>this.events.next(new xu(i)),n=i=>this.events.next(new Su(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;this.transitions?.next(Xe($({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n}))}setupNavigations(t){return this.transitions=new ri(null),this.transitions.pipe(Ir(n=>n!==null),cn(n=>{let i=!1,s=!1;return se(n).pipe(cn(o=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",wn.SupersededByNewNavigation),Ji;this.currentTransition=n,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?Xe($({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),l=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!a&&l!=="reload"){let c="";return this.events.next(new ar(o.id,this.urlSerializer.serialize(o.rawUrl),c,ul.IgnoredSameUrlNavigation)),o.resolve(!1),Ji}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return se(o).pipe(cn(c=>(this.events.next(new Ts(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),c.id!==this.navigationId?Ji:Promise.resolve(c))),nE(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Yt(c=>{n.targetSnapshot=c.targetSnapshot,n.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation=Xe($({},this.currentNavigation),{finalUrl:c.urlAfterRedirects});let h=new hl(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(h)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:c,extractedUrl:h,source:d,restoredState:f,extras:u}=o,m=new Ts(c,this.urlSerializer.serialize(h),d,f);this.events.next(m);let p=w_(this.rootComponentType).snapshot;return this.currentTransition=n=Xe($({},o),{targetSnapshot:p,urlAfterRedirects:h,extras:Xe($({},u),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=h,se(n)}else{let c="";return this.events.next(new ar(o.id,this.urlSerializer.serialize(o.extractedUrl),c,ul.IgnoredByUrlHandlingStrategy)),o.resolve(!1),Ji}}),Yt(o=>{let a=new gu(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),De(o=>(this.currentTransition=n=Xe($({},o),{guards:bM(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),n)),FM(this.environmentInjector,o=>this.events.next(o)),Yt(o=>{if(n.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw Du(this.urlSerializer,o.guardsResult);let a=new _u(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(a)}),Ir(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",wn.GuardRejected),!1)),mf(o=>{if(o.guards.canActivateChecks.length!==0)return se(o).pipe(Yt(a=>{let l=new vu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(l)}),cn(a=>{let l=!1;return se(a).pipe(iE(this.paramsInheritanceStrategy,this.environmentInjector),Yt({next:()=>l=!0,complete:()=>{l||this.cancelNavigationTransition(a,"",wn.NoDataFromResolver)}}))}),Yt(a=>{let l=new yu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(l)}))}),mf(o=>{let a=l=>{let c=[];l.routeConfig?.loadComponent&&!l.routeConfig._loadedComponent&&c.push(this.configLoader.loadComponent(l.routeConfig).pipe(Yt(h=>{l.component=h}),De(()=>{})));for(let h of l.children)c.push(...a(h));return c};return Od(a(o.targetSnapshot.root)).pipe(Nd(null),Si(1))}),mf(()=>this.afterPreactivation()),cn(()=>{let{currentSnapshot:o,targetSnapshot:a}=n,l=this.createViewTransition?.(this.environmentInjector,o.root,a.root);return l?qt(l).pipe(De(()=>n)):se(n)}),De(o=>{let a=_M(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=n=Xe($({},o),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,n}),Yt(()=>{this.events.next(new dl)}),SM(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),Si(1),Yt({next:o=>{i=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new or(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{i=!0}}),Jg(this.transitionAbortSubject.pipe(Yt(o=>{throw o}))),mo(()=>{!i&&!s&&this.cancelNavigationTransition(n,"",wn.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation=null,this.currentTransition=null)}),po(o=>{if(this.destroyed)return n.resolve(!1),Ji;if(s=!0,P_(o))this.events.next(new Gi(n.id,this.urlSerializer.serialize(n.extractedUrl),o.message,o.cancellationCode)),xM(o)?this.events.next(new No(o.url,o.navigationBehaviorOptions)):n.resolve(!1);else{let a=new Oo(n.id,this.urlSerializer.serialize(n.extractedUrl),o,n.targetSnapshot??void 0);try{let l=Zt(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(l instanceof Uo){let{message:c,cancellationCode:h}=Du(this.urlSerializer,l);this.events.next(new Gi(n.id,this.urlSerializer.serialize(n.extractedUrl),c,h)),this.events.next(new No(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(a),o}catch(l){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(l)}}return Ji}))}))}cancelNavigationTransition(t,n,i){let s=new Gi(t.id,this.urlSerializer.serialize(t.extractedUrl),n,i);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function cE(r){return r!==fu}var W_=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:()=>W(uE),providedIn:"root"})}return r})(),Pu=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},uE=(()=>{class r extends Pu{static \u0275fac=(()=>{let t;return function(i){return(t||(t=tr(r)))(i||r)}})();static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),j_=(()=>{class r{urlSerializer=W(yl);options=W(Ml,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=W(wo);urlHandlingStrategy=W(Lu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Wi;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:n,targetBrowserUrl:i}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,n):n,o=i??s;return o instanceof Wi?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:n,initialUrl:i}){n&&t?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,i),this.routerState=t):this.rawUrlTree=i}routerState=w_(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:()=>W(hE),providedIn:"root"})}return r})(),hE=(()=>{class r extends j_{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{t(n.url,n.state,"popstate")})})}handleRouterEvent(t,n){t instanceof Ts?this.updateStateMemento():t instanceof ar?this.commitTransition(n):t instanceof hl?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof dl?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof Gi&&(t.code===wn.GuardRejected||t.code===wn.NoDataFromResolver)?this.restoreHistory(n):t instanceof Oo?this.restoreHistory(n,!0):t instanceof or&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:n,id:i}){let{replaceUrl:s,state:o}=n;if(this.location.isCurrentPathEqualTo(t)||s){let a=this.browserPageId,l=$($({},o),this.generateNgRouterState(i,a));this.location.replaceState(t,"",l)}else{let a=$($({},o),this.generateNgRouterState(i,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,s=this.currentPageId-i;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=tr(r)))(i||r)}})();static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Lf(r,e){r.events.pipe(Ir(t=>t instanceof or||t instanceof Gi||t instanceof Oo||t instanceof ar),De(t=>t instanceof or||t instanceof ar?0:(t instanceof Gi?t.code===wn.Redirect||t.code===wn.SupersededByNewNavigation:!1)?2:1),Ir(t=>t!==2),Si(1)).subscribe(()=>{e()})}var dE={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},fE={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ou=(()=>{class r{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=W(u0);stateManager=W(j_);options=W(Ml,{optional:!0})||{};pendingTasks=W(Wc);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=W(G_);urlSerializer=W(yl);location=W(wo);urlHandlingStrategy=W(Lu);_events=new ii;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=W(W_);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=W(El,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!W(Iu,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new jg;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(i!==null&&s!==null){if(this.stateManager.handleRouterEvent(n,s),n instanceof Gi&&n.code!==wn.Redirect&&n.code!==wn.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof or)this.navigated=!0;else if(n instanceof No){let o=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),l=$({browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||cE(i.source)},o);this.scheduleNavigation(a,fu,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}mE(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortSubject.next(i)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),fu,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n,i)=>{this.navigateToSyncWithBrowser(t,i,n)})}navigateToSyncWithBrowser(t,n,i){let s={replaceUrl:!0},o=i?.navigationId?i:null;if(i){let l=$({},i);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(s.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,n,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Ff),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:i,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:o,h=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":h=$($({},this.currentUrlTree.queryParams),s);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=s||null}h!==null&&(h=this.removeEmptyProps(h));let d;try{let f=i?i.snapshot:this.routerState.snapshot.root;d=S_(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return b_(d,t,h,c??null)}navigateByUrl(t,n={skipLocationChange:!1}){let i=Lo(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(s,fu,null,n)}navigate(t,n={skipLocationChange:!1}){return pE(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,n){let i;if(n===!0?i=$({},dE):n===!1?i=$({},fE):i=n,Lo(t))return n_(this.currentUrlTree,t,i);let s=this.parseUrl(t);return n_(this.currentUrlTree,s,i)}removeEmptyProps(t){return Object.entries(t).reduce((n,[i,s])=>(s!=null&&(n[i]=s),n),{})}scheduleNavigation(t,n,i,s,o){if(this.disposed)return Promise.resolve(!1);let a,l,c;o?(a=o.resolve,l=o.reject,c=o.promise):c=new Promise((d,f)=>{a=d,l=f});let h=this.pendingTasks.add();return Lf(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(d=>Promise.reject(d))}static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function pE(r){for(let e=0;e<r.length;e++)if(r[e]==null)throw new Re(4008,!1)}function mE(r){return!(r instanceof dl)&&!(r instanceof No)}var _E=new ce("");function Of(r,...e){return er([{provide:El,multi:!0,useValue:r},[],{provide:Vr,useFactory:vE,deps:[Ou]},{provide:h0,multi:!0,useFactory:yE},e.map(t=>t.\u0275providers)])}function vE(r){return r.routerState.root}function yE(){let r=W(nr);return e=>{let t=r.get(d0);if(e!==t.components[0])return;let n=r.get(Ou),i=r.get(xE);r.get(SE)===1&&n.initialNavigation(),r.get(bE,null,Hc.Optional)?.setUpPreloading(),r.get(_E,null,Hc.Optional)?.init(),n.resetRootComponentType(t.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var xE=new ce("",{factory:()=>new ii}),SE=new ce("",{providedIn:"root",factory:()=>1});var bE=new ce("");var lr=class{},Nf=(()=>{class r extends lr{getTranslation(t){return se({})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=tr(r)))(i||r)}})();static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})(),zo=class{},Uf=(()=>{class r{handle(t){return t.key}static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})();function As(r){return typeof r<"u"&&r!==null}function zu(r){return Nu(r)&&!Hf(r)&&r!==null}function Nu(r){return typeof r=="object"}function Hf(r){return Array.isArray(r)}function $_(r){return typeof r=="string"}function EE(r){return typeof r=="function"}function Bf(r,e){let t=Object.assign({},r);return Nu(r)?(Nu(r)&&Nu(e)&&Object.keys(e).forEach(n=>{zu(e[n])?n in r?t[n]=Bf(r[n],e[n]):Object.assign(t,{[n]:e[n]}):Object.assign(t,{[n]:e[n]})}),t):Bf({},e)}function kf(r,e){let t=e.split(".");e="";do e+=t.shift(),As(r)&&As(r[e])&&(zu(r[e])||Hf(r[e])||!t.length)?(r=r[e],e=""):t.length?e+=".":r=void 0;while(t.length);return r}function wE(r,e,t){let n=e.split("."),i=r;for(let s=0;s<n.length;s++){let o=n[s];s===n.length-1?i[o]=t:((!i[o]||!zu(i[o]))&&(i[o]={}),i=i[o])}}var Ds=class{},Vf=(()=>{class r extends Ds{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(t,n){if($_(t))return this.interpolateString(t,n);if(EE(t))return this.interpolateFunction(t,n)}interpolateFunction(t,n){return t(n)}interpolateString(t,n){return n?t.replace(this.templateMatcher,(i,s)=>{let o=kf(n,s);return As(o)?o:i}):t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=tr(r)))(i||r)}})();static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})(),Rs=class{},zf=(()=>{class r extends Rs{compile(t,n){return t}compileTranslations(t,n){return t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=tr(r)))(i||r)}})();static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})(),Ho=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new un;onLangChange=new un;onDefaultLangChange=new un},Uu=new ce("ISOLATE_TRANSLATE_SERVICE"),Bu=new ce("USE_DEFAULT_LANG"),ku=new ce("DEFAULT_LANGUAGE"),Vu=new ce("USE_EXTEND"),wl=r=>ms(r)?r:se(r),Ps=(()=>{class r{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(t){this.store.defaultLang=t}get currentLang(){return this.store.currentLang}set currentLang(t){this.store.currentLang=t}get langs(){return this.store.langs}set langs(t){this.store.langs=t}get translations(){return this.store.translations}set translations(t){this.store.translations=t}constructor(t,n,i,s,o,a=!0,l=!1,c=!1,h){this.store=t,this.currentLoader=n,this.compiler=i,this.parser=s,this.missingTranslationHandler=o,this.useDefaultLang=a,this.extend=c,l&&(this.store=new Ho),h&&this.setDefaultLang(h)}setDefaultLang(t){if(t===this.defaultLang)return;let n=this.retrieveTranslations(t);typeof n<"u"?(this.defaultLang==null&&(this.defaultLang=t),n.pipe(Si(1)).subscribe(()=>{this.changeDefaultLang(t)})):this.changeDefaultLang(t)}getDefaultLang(){return this.defaultLang}use(t){if(this.lastUseLanguage=t,t===this.currentLang)return se(this.translations[t]);this.currentLang||(this.currentLang=t);let n=this.retrieveTranslations(t);return ms(n)?(n.pipe(Si(1)).subscribe(()=>{this.changeLang(t)}),n):(this.changeLang(t),se(this.translations[t]))}changeLang(t){t===this.lastUseLanguage&&(this.currentLang=t,this.onLangChange.emit({lang:t,translations:this.translations[t]}),this.defaultLang==null&&this.changeDefaultLang(t))}retrieveTranslations(t){if(typeof this.translations[t]>"u"||this.extend)return this._translationRequests[t]=this._translationRequests[t]||this.loadAndCompileTranslations(t),this._translationRequests[t]}getTranslation(t){return this.loadAndCompileTranslations(t)}loadAndCompileTranslations(t){this.pending=!0;let n=this.currentLoader.getTranslation(t).pipe(Bd(1),Si(1));return this.loadingTranslations=n.pipe(De(i=>this.compiler.compileTranslations(i,t)),Bd(1),Si(1)),this.loadingTranslations.subscribe({next:i=>{this.translations[t]=this.extend&&this.translations[t]?$($({},i),this.translations[t]):i,this.updateLangs(),this.pending=!1},error:i=>{this.pending=!1}}),n}setTranslation(t,n,i=!1){let s=this.compiler.compileTranslations(n,t);(i||this.extend)&&this.translations[t]?this.translations[t]=Bf(this.translations[t],s):this.translations[t]=s,this.updateLangs(),this.onTranslationChange.emit({lang:t,translations:this.translations[t]})}getLangs(){return this.langs}addLangs(t){let n=t.filter(i=>!this.langs.includes(i));n.length>0&&(this.langs=[...this.langs,...n])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(t,n,i){let s;if(t&&(s=this.runInterpolation(kf(t,n),i)),s===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(s=this.runInterpolation(kf(this.translations[this.defaultLang],n),i)),s===void 0){let o={key:n,translateService:this};typeof i<"u"&&(o.interpolateParams=i),s=this.missingTranslationHandler.handle(o)}return s!==void 0?s:n}runInterpolation(t,n){if(Hf(t))return t.map(i=>this.runInterpolation(i,n));if(zu(t)){let i={};for(let s in t){let o=this.runInterpolation(t[s],n);o!==void 0&&(i[s]=o)}return i}else return this.parser.interpolate(t,n)}getParsedResult(t,n,i){if(n instanceof Array){let s={},o=!1;for(let l of n)s[l]=this.getParsedResultForKey(t,l,i),o=o||ms(s[l]);if(!o)return s;let a=n.map(l=>wl(s[l]));return Vc(a).pipe(De(l=>{let c={};return l.forEach((h,d)=>{c[n[d]]=h}),c}))}return this.getParsedResultForKey(t,n,i)}get(t,n){if(!As(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(Qi(i=>wl(this.getParsedResult(i,t,n)))):wl(this.getParsedResult(this.translations[this.currentLang],t,n))}getStreamOnTranslationChange(t,n){if(!As(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return Ga(fo(()=>this.get(t,n)),this.onTranslationChange.pipe(cn(i=>{let s=this.getParsedResult(i.translations,t,n);return wl(s)})))}stream(t,n){if(!As(t)||!t.length)throw new Error('Parameter "key" required');return Ga(fo(()=>this.get(t,n)),this.onLangChange.pipe(cn(i=>{let s=this.getParsedResult(i.translations,t,n);return wl(s)})))}instant(t,n){if(!As(t)||t.length===0)throw new Error('Parameter "key" is required and cannot be empty');let i=this.getParsedResult(this.translations[this.currentLang],t,n);return ms(i)?Array.isArray(t)?t.reduce((s,o)=>(s[o]=o,s),{}):t:i}set(t,n,i=this.currentLang){wE(this.translations[i],t,$_(n)?this.compiler.compile(n,i):this.compiler.compileTranslations(n,i)),this.updateLangs(),this.onTranslationChange.emit({lang:i,translations:this.translations[i]})}changeDefaultLang(t){this.defaultLang=t,this.onDefaultLangChange.emit({lang:t,translations:this.translations[t]})}reloadLang(t){return this.resetLang(t),this.loadAndCompileTranslations(t)}resetLang(t){delete this._translationRequests[t],delete this.translations[t]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let t=this.getBrowserCultureLang();return t?t.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(n){return new(n||r)(ie(Ho),ie(lr),ie(Rs),ie(Ds),ie(zo),ie(Bu),ie(Uu),ie(Vu),ie(ku))};static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var q_=(r={})=>er([r.loader||{provide:lr,useClass:Nf},r.compiler||{provide:Rs,useClass:zf},r.parser||{provide:Ds,useClass:Vf},r.missingTranslationHandler||{provide:zo,useClass:Uf},Ho,{provide:Uu,useValue:r.isolate},{provide:Bu,useValue:r.useDefaultLang},{provide:Vu,useValue:r.extend},{provide:ku,useValue:r.defaultLanguage},Ps]),Y_=(()=>{class r{static forRoot(t={}){return{ngModule:r,providers:[t.loader||{provide:lr,useClass:Nf},t.compiler||{provide:Rs,useClass:zf},t.parser||{provide:Ds,useClass:Vf},t.missingTranslationHandler||{provide:zo,useClass:Uf},Ho,{provide:Uu,useValue:t.isolate},{provide:Bu,useValue:t.useDefaultLang},{provide:Vu,useValue:t.extend},{provide:ku,useValue:t.defaultLanguage},Ps]}}static forChild(t={}){return{ngModule:r,providers:[t.loader||{provide:lr,useClass:Nf},t.compiler||{provide:Rs,useClass:zf},t.parser||{provide:Ds,useClass:Vf},t.missingTranslationHandler||{provide:zo,useClass:Uf},{provide:Uu,useValue:t.isolate},{provide:Bu,useValue:t.useDefaultLang},{provide:Vu,useValue:t.extend},{provide:ku,useValue:t.defaultLanguage},Ps]}}static \u0275fac=function(n){return new(n||r)};static \u0275mod=Vi({type:r});static \u0275inj=Bi({})}return r})();var Z_=(()=>{class r{http;prefix;suffix;constructor(t,n="/assets/i18n/",i=".json"){this.http=t,this.prefix=n,this.suffix=i}getTranslation(t){return this.http.get(`${this.prefix}${t}${this.suffix}`)}static \u0275fac=function(n){return new(n||r)(ie(Br),ie(String),ie(String))};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})();function cr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function rv(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},ap,zt,it,li=1e8,Ze=1/li,Zf=Math.PI*2,CE=Zf/4,TE=0,sv=Math.sqrt,AE=Math.cos,DE=Math.sin,At=function(e){return typeof e=="string"},dt=function(e){return typeof e=="function"},hr=function(e){return typeof e=="number"},Ku=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},An=function(e){return e!==!1},lp=function(){return typeof window<"u"},Hu=function(e){return dt(e)||At(e)},ov=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,Kf=/(?:-?\.?\d|\.)+/gi,cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,up=/[+-]=-?[.\d]+/,av=/[^,'"\[\]\s]+/gi,RE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot,ji,Jf,hp,Gn={},Xu={},lv,cv=function(e){return(Xu=jo(e,Gn))&&Qt},Ju=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pl=function(e,t){return!t&&console.warn(e)},uv=function(e,t){return e&&(Gn[e]=t)&&Xu&&(Xu[e]=t)||Gn},Il=function(){return 0},PE={suppressEvents:!0,isStart:!0,kill:!1},Gu={suppressEvents:!0,kill:!1},IE={suppressEvents:!0},dp={},Gr=[],Qf={},hv,Cn={},Wf={},K_=30,Wu=[],fp="",pp=function(e){var t=e[0],n,i;if($i(t)||dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Wu.length;i--&&!Wu[i].targetTest(t););n=Wu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new _p(e[i],n)))||e.splice(i,1);return e},Wr=function(e){return e._gsap||pp(ci(e))[0]._gsap},mp=function(e,t,n){return(n=e[t])&&dt(n)?e[t]():Ku(n)&&e.getAttribute&&e.getAttribute(t)||n},hn=function(e,t){return(e=e.split(",")).forEach(t)||e},ft=function(e){return Math.round(e*1e5)/1e5||0},xt=function(e){return Math.round(e*1e7)/1e7||0},Ns=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},FE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},$u=function(){var e=Gr.length,t=Gr.slice(0),n,i;for(Qf={},Gr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},dv=function(e,t,n,i){Gr.length&&!zt&&$u(),e.render(t,n,i||zt&&t<0&&(e._initted||e._startAt)),Gr.length&&!zt&&$u()},fv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(av).length<2?t:At(e)?e.trim():e},pv=function(e){return e},Wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},LE=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},jo=function(e,t){for(var n in t)e[n]=t[n];return e},J_=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$i(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},qu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Al=function(e){var t=e.parent||ot,n=e.keyframes?LE(Jt(e.keyframes)):Wn;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},OE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},mv=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Qu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},jr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Is=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},NE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ep=function(e,t,n,i){return e._startAt&&(zt?e._startAt.revert(Gu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},UE=function r(e){return!e||e._ts&&r(e.parent)},Q_=function(e){return e._repeat?Xo(e._tTime,e=e.duration()+e._rDelay)*e:0},Xo=function(e,t){var n=Math.floor(e=xt(e/t));return e&&n===e?n-1:n},Yu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},eh=function(e){return e._end=xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ze)||0))},th=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),eh(e),n._dirty||Is(n,e)),e},gv=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Yu(e.rawTime(),t),(!t._dur||Ol(0,t.totalDuration(),n)-t._tTime>Ze)&&t.render(n,!0)),Is(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ze}},Xi=function(e,t,n,i){return t.parent&&jr(t),t._start=xt((hr(n)?n:n||e!==ot?ai(e,n,t):e._time)+t._delay),t._end=xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mv(e,t,"_first","_last",e._sort?"_start":0),tp(t)||(e._recent=t),i||gv(e,t),e._ts<0&&th(e,e._tTime),e},_v=function(e,t){return(Gn.ScrollTrigger||Ju("scrollTrigger",t))&&Gn.ScrollTrigger.create(t,e)},vv=function(e,t,n,i,s){if(xp(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hv!==Tn.frame)return Gr.push(e),e._lazy=[s,i],1},BE=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},tp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},kE=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&BE(e)&&!(!e._initted&&tp(e))||(e._ts<0||e._dp._ts<0)&&!tp(e))?0:1,a=e._rDelay,l=0,c,h,d;if(a&&e._repeat&&(l=Ol(0,e._tDur,t),h=Xo(l,a),e._yoyo&&h&1&&(o=1-o),h!==Xo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||zt||i||e._zTime===Ze||!t&&e._zTime){if(!e._initted&&vv(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Ze:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ep(e,t,n,!0),e._onUpdate&&!n&&Hn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&jr(e,1),!n&&!zt&&(Hn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},VE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},$o=function(e,t,n,i){var s=e._repeat,o=xt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:xt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&th(e,e._tTime=e._tDur*a),e.parent&&eh(e),n||Is(e.parent,e),e},ev=function(e){return e instanceof Vt?Is(e):$o(e,e._dur)},zE={_start:0,endTime:Il,totalDuration:Il},ai=function r(e,t,n){var i=e.labels,s=e._recent||zE,o=e.duration()>=li?s.endTime(!1):e._dur,a,l,c;return At(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Jt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Dl=function(e,t,n){var i=hr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;o.immediateRender=An(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new gt(t[0],o,t[s+1])},Xr=function(e,t){return e||e===0?t(e):t},Ol=function(e,t,n){return n<e?e:n>t?t:n},Ht=function(e,t){return!At(e)||!(t=RE.exec(e))?"":t[1]},HE=function(e,t,n){return Xr(n,function(i){return Ol(e,t,i)})},np=[].slice,yv=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==ji},GE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return At(i)&&!t||yv(i,1)?(s=n).push.apply(s,ci(i)):n.push(i)})||n},ci=function(e,t,n){return it&&!t&&it.selector?it.selector(e):At(e)&&!n&&(Jf||!qo())?np.call((t||hp).querySelectorAll(e),0):Jt(e)?GE(e,n):yv(e)?np.call(e,0):e?[e]:[]},ip=function(e){return e=ci(e)[0]||Pl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ci(t,n.querySelectorAll?n:n===e?Pl("Invalid scope")||hp.createElement("div"):e)}},xv=function(e){return e.sort(function(){return .5-Math.random()})},Sv=function(e){if(dt(e))return e;var t=$i(e)?e:{each:e},n=Fs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,d=i;return At(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(f,u,m){var p=(m||t).length,g=o[p],_,b,x,y,v,T,S,w,A;if(!g){if(A=t.grid==="auto"?0:(t.grid||[1,li])[1],!A){for(S=-li;S<(S=m[A++].getBoundingClientRect().left)&&A<p;);A<p&&A--}for(g=o[p]=[],_=l?Math.min(A,p)*h-.5:i%A,b=A===li?0:l?p*d/A-.5:i/A|0,S=0,w=li,T=0;T<p;T++)x=T%A-_,y=b-(T/A|0),g[T]=v=c?Math.abs(c==="y"?y:x):sv(x*x+y*y),v>S&&(S=v),v<w&&(w=v);i==="random"&&xv(g),g.max=S-w,g.min=w,g.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(A>p?p-1:c?c==="y"?p/A:A:Math.max(A,p/A))||0)*(i==="edges"?-1:1),g.b=p<0?s-p:s,g.u=Ht(t.amount||t.each)||0,n=n&&p<0?Rv(n):n}return p=(g[f]-g.min)/g.max||0,xt(g.b+(n?n(p):p)*g.v)+g.u}},rp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(hr(n)?0:Ht(n))}},bv=function(e,t){var n=Jt(e),i,s;return!n&&$i(e)&&(i=n=e.radius||li,e.values?(e=ci(e.values),(s=!hr(e[0]))&&(i*=i)):e=rp(e.increment)),Xr(t,n?dt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=li,h=0,d=e.length,f,u;d--;)s?(f=e[d].x-a,u=e[d].y-l,f=f*f+u*u):f=Math.abs(e[d]-a),f<c&&(c=f,h=d);return h=!i||c<=i?e[h]:o,s||h===o||hr(o)?h:h+Ht(o)}:rp(e))},Mv=function(e,t,n,i){return Xr(Jt(e)?!t:n===!0?!!(n=0):!i,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},WE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},jE=function(e,t){return function(n){return e(parseFloat(n))+(t||Ht(n))}},XE=function(e,t,n){return wv(e,t,0,1,n)},Ev=function(e,t,n){return Xr(n,function(i){return e[~~t(i)]})},$E=function r(e,t,n){var i=t-e;return Jt(e)?Ev(e,r(0,e.length),t):Xr(n,function(s){return(i+(s-e)%i)%i+e})},qE=function r(e,t,n){var i=t-e,s=i*2;return Jt(e)?Ev(e,r(0,e.length-1),t):Xr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Yo=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?av:Kf),n+=e.substr(t,i-t)+Mv(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},wv=function(e,t,n,i,s){var o=t-e,a=i-n;return Xr(s,function(l){return n+((l-e)/o*a||0)})},YE=function r(e,t,n,i){var s=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!s){var o=At(e),a={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(h=[],d=e.length,f=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(m){m*=d;var p=Math.min(f,~~m);return h[p](m-p)},n=t}else i||(e=jo(Jt(e)?[]:{},e));if(!h){for(l in t)vp.call(a,e,l,"get",t[l]);s=function(m){return Mp(m,a)||(o?e.p:e)}}}return Xr(n,s)},tv=function(e,t,n){var i=e.labels,s=li,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Hn=function(e,t,n){var i=e.vars,s=i[t],o=it,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Gr.length&&$u(),a&&(it=a),h=l?s.apply(c,l):s.call(c),it=o,h},Cl=function(e){return jr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zt),e.progress()<1&&Hn(e,"onInterrupt"),e},Go,Cv=[],Tv=function(e){if(e)if(e=!e.name&&e.default||e,lp()||e.headless){var t=e.name,n=dt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Il,render:Mp,add:vp,kill:hw,modifier:uw,rawVars:0},o={targetTest:0,get:0,getSetter:nh,aliases:{},register:0};if(qo(),e!==i){if(Cn[t])return;Wn(i,Wn(qu(e,s),o)),jo(i.prototype,jo(s,qu(e,o))),Cn[i.prop=t]=i,e.targetTest&&(Wu.push(i),dp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}uv(t,i),e.register&&e.register(Qt,i,dn)}else Cv.push(e)},Ye=255,Tl={aqua:[0,Ye,Ye],lime:[0,Ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ye],navy:[0,0,128],white:[Ye,Ye,Ye],olive:[128,128,0],yellow:[Ye,Ye,0],orange:[Ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ye,0,0],pink:[Ye,192,203],cyan:[0,Ye,Ye],transparent:[Ye,Ye,Ye,0]},jf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ye+.5|0},Av=function(e,t,n){var i=e?hr(e)?[e>>16,e>>8&Ye,e&Ye]:0:Tl.black,s,o,a,l,c,h,d,f,u,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Tl[e])i=Tl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ye,i&Ye,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ye,e&Ye]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Kf),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=jf(l+1/3,s,o),i[1]=jf(l,s,o),i[2]=jf(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(cp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Kf)||Tl.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/Ye,o=i[1]/Ye,a=i[2]/Ye,d=Math.max(s,o,a),f=Math.min(s,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===s?(o-a)/u+(o<a?6:0):d===o?(a-s)/u+2:(s-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Dv=function(e){var t=[],n=[],i=-1;return e.split(ur).forEach(function(s){var o=s.match(Os)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},nv=function(e,t,n){var i="",s=(e+i).match(ur),o=t?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return e;if(s=s.map(function(f){return(f=Av(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Dv(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(ur,"1").split(Os),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(ur),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},ur=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Tl)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),ZE=/hsl[a]?\(/,gp=function(e){var t=e.join(" "),n;if(ur.lastIndex=0,ur.test(t))return n=ZE.test(t),e[1]=nv(e[1],n),e[0]=nv(e[0],n,Dv(e[1])),!0},Fl,Tn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,f,u,m=function p(g){var _=r()-i,b=g===!0,x,y,v,T;if((_>e||_<0)&&(n+=_-t),i+=_,v=i-n,x=v-o,(x>0||b)&&(T=++d.frame,f=v-d.time*1e3,d.time=v=v/1e3,o+=x+(x>=s?4:s-x),y=1),b||(l=c(p)),y)for(u=0;u<a.length;u++)a[u](v,f,T,g)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){lv&&(!Jf&&lp()&&(ji=Jf=window,hp=ji.document||{},Gn.gsap=Qt,(ji.gsapVersions||(ji.gsapVersions=[])).push(Qt.version),cv(Xu||ji.GreenSockGlobals||!ji.gsap&&ji||{}),Cv.forEach(Tv)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(g){return setTimeout(g,o-d.time*1e3+1|0)},Fl=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Fl=0,c=Il},lagSmoothing:function(g,_){e=g||1/0,t=Math.min(_||33,e)},fps:function(g){s=1e3/(g||240),o=d.time*1e3+s},add:function(g,_,b){var x=_?function(y,v,T,S){g(y,v,T,S),d.remove(x)}:g;return d.remove(g),a[b?"unshift":"push"](x),qo(),x},remove:function(g,_){~(_=a.indexOf(g))&&a.splice(_,1)&&u>=_&&u--},_listeners:a},d}(),qo=function(){return!Fl&&Tn.wake()},Ie={},KE=/^[\d.\-M][\d.\-,\s]/,JE=/["']/g,QE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(JE,"").trim():+c,i=l.substr(a+1).trim();return t},ew=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},tw=function(e){var t=(e+"").split("("),n=Ie[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[QE(t[1])]:ew(e).split(",").map(fv)):Ie._CE&&KE.test(e)?Ie._CE("",e):n},Rv=function(e){return function(t){return 1-e(1-t)}},Pv=function r(e,t){for(var n=e._first,i;n;)n instanceof Vt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Fs=function(e,t){return e&&(dt(e)?e:Ie[e]||tw(e))||t},Us=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return hn(e,function(a){Ie[a]=Gn[a]=s,Ie[o=a.toLowerCase()]=n;for(var l in s)Ie[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ie[a+"."+l]=s[l]}),s},Iv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Zf*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*DE((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Iv(a);return s=Zf/s,l.config=function(c,h){return r(e,c,h)},l},$f=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Iv(n);return i.config=function(s){return r(e,s)},i};hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Us(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ie.Linear.easeNone=Ie.none=Ie.Linear.easeIn;Us("Elastic",Xf("in"),Xf("out"),Xf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Us("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Us("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Us("Circ",function(r){return-(sv(1-r*r)-1)});Us("Sine",function(r){return r===1?1:-AE(r*CE)+1});Us("Back",$f("in"),$f("out"),$f());Ie.SteppedEase=Ie.steps=Gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Ze;return function(a){return((i*Ol(0,o,a)|0)+s)*n}}};Wo.ease=Ie["quad.out"];hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return fp+=r+","+r+"Params,"});var _p=function(e,t){this.id=TE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:mp,this.set=t?t.getSetter:nh},Ll=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$o(this,+t.duration,1,1),this.data=t.data,it&&(this._ctx=it,it.data.push(this)),Fl||Tn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$o(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(qo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(th(this,n),!s._dp||s.parent||gv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ze||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),dv(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Q_(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Q_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Xo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ze?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Yu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ze?0:this._rts,this.totalTime(Ol(-Math.abs(this._delay),this._tDur,s),i!==!1),eh(this),NE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ze&&(this._tTime-=Ze)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Xi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=IE);var i=zt;return zt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),zt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ev(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ev(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ai(this,n),An(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i)),this._dur||(this._zTime=-Ze),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ze:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ze,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ze)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=dt(n)?n:pv,a=function(){var c=i.then;i.then=null,dt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Cl(this)},r}();Wn(Ll.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ze,_prom:0,_ps:!1,_rts:1});var Vt=function(r){rv(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),ot&&Xi(n.parent||ot,cr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_v(cr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Dl(0,arguments,this),this},t.from=function(i,s,o){return Dl(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Dl(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Al(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new gt(i,s,ai(this,o),1),this},t.call=function(i,s,o){return Xi(this,gt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new gt(i,o,ai(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Al(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,Al(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:xt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,m,p,g,_,b,x,y,v,T,S;if(this!==ot&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,x=this._ts,_=!x,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(f=xt(h%g),h===l?(p=this._repeat,f=c):(v=xt(h/g),p=~~v,p&&p===v&&(f=c,p--),f>c&&(f=c)),v=Xo(this._tTime,g),!a&&this._tTime&&v!==p&&this._tTime-v*g-this._dur<=0&&(v=p),T&&p&1&&(f=c-f,S=1),p!==v&&!this._lock){var w=T&&v&1,A=w===(T&&p&1);if(p<v&&(w=!w),a=w?0:h%c?c:h,this._lock=1,this.render(a||(S?0:xt(p*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,A&&(this._lock=2,a=w?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Pv(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=VE(this,xt(a),xt(f)),b&&(h-=f-(f=b._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!p&&(Hn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&b!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,s,o),f!==this._time||!this._ts&&!_){b=0,m&&(h+=this._zTime=-Ze);break}}u=m}else{u=this._last;for(var I=i<0?i:f;u;){if(m=u._prev,(u._act||I<=u._end)&&u._ts&&b!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(I-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(I-u._start)*u._ts,s,o||zt&&(u._initted||u._startAt)),f!==this._time||!this._ts&&!_){b=0,m&&(h+=this._zTime=I?-Ze:Ze);break}}u=m}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-Ze)._zTime=f>=a?1:-1,this._ts))return this._start=y,eh(this),this.render(i,s,o);this._onUpdate&&!s&&Hn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&jr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Hn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(hr(s)||(s=ai(this,s,i)),!(i instanceof Ll)){if(Jt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(At(i))return this.addLabel(i,s);if(dt(i))i=gt.delayedCall(0,i);else return this}return this!==i?Xi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-li);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof gt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return At(i)?this.removeLabel(i):dt(i)?this.killTweensOf(i):(i.parent===this&&Qu(this,i),i===this._recent&&(this._recent=this._last),Is(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xt(Tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ai(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=gt.delayedCall(0,s||Il,o);return a.data="isPause",this._hasPause=1,Xi(this,a,ai(this,i))},t.removePause=function(i){var s=this._first;for(i=ai(this,i);s;)s._start===i&&s.data==="isPause"&&jr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Hr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ci(i),l=this._first,c=hr(s),h;l;)l instanceof gt?FE(l._targets,a)&&(c?(!Hr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ai(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,m=gt.to(o,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ze,onStart:function(){if(o.pause(),!u){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&$o(m,g,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Wn({startAt:{time:ai(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),tv(this,ai(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),tv(this,ai(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ze)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Is(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Is(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=li,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Xi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;$o(o,o===ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(ot._ts&&(dv(ot,Yu(i,ot)),hv=Tn.frame),Tn.frame>=K_){K_+=Dn.autoSleep||120;var s=ot._first;if((!s||!s._ts)&&Dn.autoSleep&&Tn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Tn.sleep()}}},e}(Ll);Wn(Vt.prototype,{_lock:0,_hasPause:0,_forcing:0});var nw=function(e,t,n,i,s,o,a){var l=new dn(this._pt,e,t,0,1,bp,null,s),c=0,h=0,d,f,u,m,p,g,_,b;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Yo(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),f=n.match(Gf)||[];d=Gf.exec(i);)m=d[0],p=i.substring(c,d.index),u?u=(u+1)%5:p.substr(-5)==="rgba("&&(u=1),m!==f[h++]&&(g=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:g,c:m.charAt(1)==="="?Ns(g,m)-g:parseFloat(m)-g,m:u&&u<4?Math.round:0},c=Gf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(up.test(i)||_)&&(l.e=0),this._pt=l,l},vp=function(e,t,n,i,s,o,a,l,c,h){dt(i)&&(i=i(s||0,e,o));var d=e[t],f=n!=="get"?n:dt(d)?c?e[t.indexOf("set")||!dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,u=dt(d)?c?aw:Ov:Sp,m;if(At(i)&&(~i.indexOf("random(")&&(i=Yo(i)),i.charAt(1)==="="&&(m=Ns(f,i)+(Ht(f)||0),(m||m===0)&&(i=m))),!h||f!==i||sp)return!isNaN(f*i)&&i!==""?(m=new dn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?cw:Nv,0,u),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!d&&!(t in e)&&Ju(t,i),nw.call(this,e,t,f,i,u,l||Dn.stringFilter,c))},iw=function(e,t,n,i,s){if(dt(e)&&(e=Rl(e,s,t,n,i)),!$i(e)||e.style&&e.nodeType||Jt(e)||ov(e))return At(e)?Rl(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Rl(e[a],s,t,n,i);return o},yp=function(e,t,n,i,s,o){var a,l,c,h;if(Cn[e]&&(a=new Cn[e]).init(s,a.rawVars?t[e]:iw(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new dn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Go))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Hr,sp,xp=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,m=e._dur,p=e._startAt,g=e._targets,_=e.parent,b=_&&_.data==="nested"?_.vars.targets:g,x=e._overwrite==="auto"&&!ap,y=e.timeline,v,T,S,w,A,I,L,U,O,K,Z,q,z;if(y&&(!f||!s)&&(s="none"),e._ease=Fs(s,Wo.ease),e._yEase=d?Rv(Fs(d===!0?s:d,Wo.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(U=g[0]?Wr(g[0]).harness:0,q=U&&i[U.prop],v=qu(i,dp),p&&(p._zTime<0&&p.progress(1),t<0&&h&&a&&!u?p.render(-1,!0):p.revert(h&&m?Gu:PE),p._lazy=0),o){if(jr(e._startAt=gt.set(g,Wn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!p&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Hn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt||!a&&!u)&&e._startAt.revert(Gu),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!p){if(t&&(a=!1),S=Wn({overwrite:!1,data:"isFromStart",lazy:a&&!p&&An(l),immediateRender:a,stagger:0,parent:_},v),q&&(S[U.prop]=q),jr(e._startAt=gt.set(g,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt?e._startAt.revert(Gu):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Ze,Ze);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&An(l)||l&&!m,T=0;T<g.length;T++){if(A=g[T],L=A._gsap||pp(g)[T]._gsap,e._ptLookup[T]=K={},Qf[L.id]&&Gr.length&&$u(),Z=b===g?T:b.indexOf(A),U&&(O=new U).init(A,q||v,e,Z,b)!==!1&&(e._pt=w=new dn(e._pt,A,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(te){K[te]=w}),O.priority&&(I=1)),!U||q)for(S in v)Cn[S]&&(O=yp(S,v,e,Z,A,b))?O.priority&&(I=1):K[S]=w=vp.call(e,A,S,"get",v[S],Z,b,0,i.stringFilter);e._op&&e._op[T]&&e.kill(A,e._op[T]),x&&e._pt&&(Hr=e,ot.killTweensOf(A,K,e.globalTime(t)),z=!e.parent,Hr=0),e._pt&&l&&(Qf[L.id]=1)}I&&Ep(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,f&&t<=0&&y.render(li,!0,!0)},rw=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,f,u;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,u=e._targets.length;u--;){if(h=f[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return sp=1,e.vars[t]="+=0",xp(e,a),sp=0,l?Pl(t+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=ft(n)+Ht(d.e)),d.b&&(d.b=h.s+Ht(d.b))},sw=function(e,t){var n=e[0]?Wr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=jo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},ow=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Jt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Rl=function(e,t,n,i,s){return dt(e)?e.call(t,n,i,s):At(e)&&~e.indexOf("random(")?Yo(e):e},Fv=fp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Lv={};hn(Fv+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Lv[r]=1});var gt=function(r){rv(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Al(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,m=l.keyframes,p=l.defaults,g=l.scrollTrigger,_=l.yoyoEase,b=i.parent||ot,x=(Jt(n)||ov(n)?hr(n[0]):"length"in i)?[n]:ci(n),y,v,T,S,w,A,I,L;if(a._targets=x.length?pp(x):Pl("GSAP target "+n+" not found. https://gsap.com",!Dn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,m||f||Hu(c)||Hu(h)){if(i=a.vars,y=a.timeline=new Vt({data:"nested",defaults:p||{},targets:b&&b.data==="nested"?b.vars.targets:x}),y.kill(),y.parent=y._dp=cr(a),y._start=0,f||Hu(c)||Hu(h)){if(S=x.length,I=f&&Sv(f),$i(f))for(w in f)~Fv.indexOf(w)&&(L||(L={}),L[w]=f[w]);for(v=0;v<S;v++)T=qu(i,Lv),T.stagger=0,_&&(T.yoyoEase=_),L&&jo(T,L),A=x[v],T.duration=+Rl(c,cr(a),v,A,x),T.delay=(+Rl(h,cr(a),v,A,x)||0)-a._delay,!f&&S===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),y.to(A,T,I?I(v,A,x):0),y._ease=Ie.none;y.duration()?c=h=0:a.timeline=0}else if(m){Al(Wn(y.vars.defaults,{ease:"none"})),y._ease=Fs(m.ease||i.ease||"none");var U=0,O,K,Z;if(Jt(m))m.forEach(function(q){return y.to(x,q,">")}),y.duration();else{T={};for(w in m)w==="ease"||w==="easeEach"||ow(w,m[w],T,m.easeEach);for(w in T)for(O=T[w].sort(function(q,z){return q.t-z.t}),U=0,v=0;v<O.length;v++)K=O[v],Z={ease:K.e,duration:(K.t-(v?O[v-1].t:0))/100*c},Z[w]=K.v,y.to(x,Z,U),U+=Z.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return u===!0&&!ap&&(Hr=cr(a),ot.killTweensOf(x),Hr=0),Xi(b,cr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===xt(b._time)&&An(d)&&UE(cr(a))&&b.data!=="nested")&&(a._tTime=-Ze,a.render(Math.max(0,-h)||0)),g&&_v(cr(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Ze&&!h?l:i<Ze?0:i,f,u,m,p,g,_,b,x,y;if(!c)kE(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,x=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+i,s,o);if(f=xt(d%p),d===l?(m=this._repeat,f=c):(g=xt(d/p),m=~~g,m&&m===g?(f=c,m--):f>c&&(f=c)),_=this._yoyo&&m&1,_&&(y=this._yEase,f=c-f),g=Xo(this._tTime,p),f===a&&!o&&this._initted&&m===g)return this._tTime=d,this;m!==g&&(x&&this._yEase&&Pv(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&f!==p&&this._initted&&(this._lock=o=1,this.render(xt(p*m),!0).invalidate()._lock=0))}if(!this._initted){if(vv(this,h?i:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!a&&!s&&!m&&(Hn(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(b,u.d),u=u._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&ep(this,i,s,o),Hn(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&Hn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&ep(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&jr(this,1),!s&&!(h&&!a)&&(d||a||_)&&(Hn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Fl||Tn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||xp(this,c),h=this._ease(c/this._dur),rw(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(th(this,0),this.parent||mv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Cl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Hr&&Hr.vars.overwrite!==!0)._first||Cl(this),this.parent&&o!==this.timeline.totalDuration()&&$o(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ci(i):a,c=this._ptLookup,h=this._pt,d,f,u,m,p,g,_;if((!s||s==="all")&&OE(a,l))return s==="all"&&(this._pt=0),Cl(this);for(d=this._op=this._op||[],s!=="all"&&(At(s)&&(p={},hn(s,function(b){return p[b]=1}),s=p),s=sw(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],s==="all"?(d[_]=s,m=f,u={}):(u=d[_]=d[_]||{},m=s);for(p in m)g=f&&f[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&Qu(this,g,"_pt"),delete f[p]),u!=="all"&&(u[p]=1)}return this._initted&&!this._pt&&h&&Cl(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Dl(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Dl(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return ot.killTweensOf(i,s,o)},e}(Ll);Wn(gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hn("staggerTo,staggerFrom,staggerFromTo",function(r){gt[r]=function(){var e=new Vt,t=np.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Sp=function(e,t,n){return e[t]=n},Ov=function(e,t,n){return e[t](n)},aw=function(e,t,n,i){return e[t](i.fp,n)},lw=function(e,t,n){return e.setAttribute(t,n)},nh=function(e,t){return dt(e[t])?Ov:Ku(e[t])&&e.setAttribute?lw:Sp},Nv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},bp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Mp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},uw=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},hw=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Qu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},dw=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ep=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},dn=function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Nv,this.d=l||this,this.set=c||Sp,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=dw,this.m=n,this.mt=s,this.tween=i},r}();hn(fp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return dp[r]=1});Gn.TweenMax=Gn.TweenLite=gt;Gn.TimelineLite=Gn.TimelineMax=Vt;ot=new Vt({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Dn.stringFilter=gp;var Ls=[],ju={},fw=[],iv=0,pw=0,qf=function(e){return(ju[e]||fw).map(function(t){return t()})},op=function(){var e=Date.now(),t=[];e-iv>2&&(qf("matchMediaInit"),Ls.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ji.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),qf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),iv=e,qf("matchMedia"))},Uv=function(){function r(t,n){this.selector=n&&ip(n),this.data=[],this._r=[],this.isReverted=!1,this.id=pw++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){dt(n)&&(s=i,i=n,n=dt);var o=this,a=function(){var c=it,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=ip(s)),it=o,d=i.apply(o,arguments),dt(d)&&o._r.push(d),it=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===dt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=it;it=null,n(this),it=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof gt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Vt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof gt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ls.length;o--;)Ls[o].id===this.id&&Ls.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),mw=function(){function r(t){this.contexts=[],this.scope=t,it&&it.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){$i(n)||(n={matches:n});var o=new Uv(0,s||this.scope),a=o.conditions={},l,c,h;it&&!o.selector&&(o.selector=it.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=ji.matchMedia(n[c]),l&&(Ls.indexOf(o)<0&&Ls.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(op):l.addEventListener("change",op)));return h&&i(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Zu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Tv(i)})},timeline:function(e){return new Vt(e)},getTweensOf:function(e,t){return ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){At(e)&&(e=ci(e)[0]);var s=Wr(e||{}).get,o=n?pv:fv;return n==="native"&&(n=""),e&&(t?o((Cn[t]&&Cn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Cn[a]&&Cn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ci(e),e.length>1){var i=e.map(function(h){return Qt.quickSetter(h,t,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}e=e[0]||{};var o=Cn[t],a=Wr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var d=new o;Go._pt=0,d.init(e,n?h+n:h,Go,0,[e]),d.render(1,d),Go._pt&&Mp(1,Go)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=Qt.to(e,Wn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Fs(e.ease,Wo.ease)),J_(Wo,e||{})},config:function(e){return J_(Dn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Cn[a]&&!Gn[a]&&Pl(t+" effect requires "+a+" plugin.")}),Wf[t]=function(a,l,c){return n(ci(a),Wn(l||{},s),c)},o&&(Vt.prototype[t]=function(a,l,c){return this.add(Wf[t](a,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ie[e]=Fs(t)},parseEase:function(e,t){return arguments.length?Fs(e,t):Ie},getById:function(e){return ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vt(e),i,s;for(n.smoothChildTiming=An(e.smoothChildTiming),ot.remove(n),n._dp=0,n._time=n._tTime=ot._time,i=ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof gt&&i.vars.onComplete===i._targets[0]))&&Xi(n,i,i._start-i._delay),i=s;return Xi(ot,n,0),n},context:function(e,t){return e?new Uv(e,t):it},matchMedia:function(e){return new mw(e)},matchMediaRefresh:function(){return Ls.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||op()},addEventListener:function(e,t){var n=ju[e]||(ju[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ju[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:$E,wrapYoyo:qE,distribute:Sv,random:Mv,snap:bv,normalize:XE,getUnit:Ht,clamp:HE,splitColor:Av,toArray:ci,selector:ip,mapRange:wv,pipe:WE,unitize:jE,interpolate:YE,shuffle:xv},install:cv,effects:Wf,ticker:Tn,updateRoot:Vt.updateRoot,plugins:Cn,globalTimeline:ot,core:{PropTween:dn,globals:uv,Tween:gt,Timeline:Vt,Animation:Ll,getCache:Wr,_removeLinkedListItem:Qu,reverting:function(){return zt},context:function(e){return e&&it&&(it.data.push(e),e._ctx=it),it},suppressOverwrites:function(e){return ap=e}}};hn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Zu[r]=gt[r]});Tn.add(Vt.updateRoot);Go=Zu.to({},{duration:0});var gw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},_w=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=gw(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Yf=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(At(s)&&(l={},hn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}_w(a,s)}}}},Qt=Zu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Yf("roundProps",rp),Yf("modifiers"),Yf("snap",bv))||Zu;gt.version=Vt.version=Qt.version="3.12.7";lv=1;lp()&&qo();var vw=Ie.Power0,yw=Ie.Power1,xw=Ie.Power2,Sw=Ie.Power3,bw=Ie.Power4,Mw=Ie.Linear,Ew=Ie.Quad,ww=Ie.Cubic,Cw=Ie.Quart,Tw=Ie.Quint,Aw=Ie.Strong,Dw=Ie.Elastic,Rw=Ie.Back,Pw=Ie.SteppedEase,Iw=Ie.Bounce,Fw=Ie.Sine,Lw=Ie.Expo,Ow=Ie.Circ;var Bv,$r,Ko,Rp,zs,Nw,kv,Pp,Uw=function(){return typeof window<"u"},fr={},Vs=180/Math.PI,Jo=Math.PI/180,Zo=Math.atan2,Vv=1e8,Ip=/([A-Z])/g,Bw=/(left|right|width|margin|padding|x)/i,kw=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Cp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Vw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Hw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},qv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Yv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Gw=function(e,t,n){return e.style[t]=n},Ww=function(e,t,n){return e.style.setProperty(t,n)},jw=function(e,t,n){return e._gsap[t]=n},Xw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$w=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},qw=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},at="transform",Rn=at+"Origin",Yw=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in fr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=dr(i,a)}):this.tfm[e]=o.x?o[e]:dr(i,e),e===Rn&&(this.tfm.zOrigin=o.zOrigin);else return qi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(at)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rn,t,"")),e=at}(s||t)&&this.props.push(e,t,s[e])},Zv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Zw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ip,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Pp(),(!s||!s.isStart)&&!n[at]&&(Zv(n),i.zOrigin&&n[Rn]&&(n[Rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Kv=function(e,t){var n={target:e,props:[],revert:Zw,save:Yw};return e._gsap||Qt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Jv,Tp=function(e,t){var n=$r.createElementNS?$r.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$r.createElement(e);return n&&n.style?n:$r.createElement(e)},Yi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ip,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Qo(t)||t,1)||""},zv="O,Moz,ms,Ms,Webkit".split(","),Qo=function(e,t,n){var i=t||zs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(zv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?zv[o]:"")+e},Ap=function(){Uw()&&window.document&&(Bv=window,$r=Bv.document,Ko=$r.documentElement,zs=Tp("div")||{style:{}},Nw=Tp("div"),at=Qo(at),Rn=at+"Origin",zs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Jv=!!Qo("perspective"),Pp=Qt.core.reverting,Rp=1)},Hv=function(e){var t=e.ownerSVGElement,n=Tp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ko.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ko.removeChild(n),s},Gv=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Qv=function(e){var t,n;try{t=e.getBBox()}catch{t=Hv(e),n=1}return t&&(t.width||t.height)||n||(t=Hv(e)),t&&!t.width&&!t.x&&!t.y?{x:+Gv(e,["x","cx","x1"])||0,y:+Gv(e,["y","cy","y1"])||0,width:0,height:0}:t},ey=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Qv(e))},Hs=function(e,t){if(t){var n=e.style,i;t in fr&&t!==Rn&&(t=at),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ip,"-$1").toLowerCase())):n.removeAttribute(t)}},qr=function(e,t,n,i,s,o){var a=new dn(e._pt,t,n,0,1,o?Yv:qv);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Wv={deg:1,rad:1,turn:1},Kw={grid:1,flex:1},Yr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=zs.style,l=Bw.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",m,p,g,_;if(i===o||!s||Wv[i]||Wv[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),_=e.getCTM&&ey(e),(u||o==="%")&&(fr[t]||~t.indexOf("adius")))return m=_?e.getBBox()[l?"width":"height"]:e[h],ft(u?s/m*d:s/100*m);if(a[l?"width":"height"]=d+(f?o:i),p=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===$r||!p.appendChild)&&(p=$r.body),g=p._gsap,g&&u&&g.width&&l&&g.time===Tn.time&&!g.uncache)return ft(s/g.width*d);if(u&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+i,m=e[h],b?e.style[t]=b:Hs(e,t)}else(u||o==="%")&&!Kw[Yi(p,"display")]&&(a.position=Yi(e,"position")),p===e&&(a.position="static"),p.appendChild(zs),m=zs[h],p.removeChild(zs),a.position="absolute";return l&&u&&(g=Wr(p),g.time=Tn.time,g.width=p[h]),ft(f?m*s/d:m&&s?d/m*s:0)},dr=function(e,t,n,i){var s;return Rp||Ap(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),fr[t]&&t!=="transform"?(s=Bl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rh(Yi(e,Rn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ih[t]&&ih[t](e,t,n)||Yi(e,t)||mp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Yr(e,t,s,n)+n:s},Jw=function(e,t,n,i){if(!n||n==="none"){var s=Qo(t,e,1),o=s&&Yi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Yi(e,"borderTopColor"))}var a=new dn(this._pt,e.style,t,0,1,bp),l=0,c=0,h,d,f,u,m,p,g,_,b,x,y,v;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(p=e.style[t],e.style[t]=i,i=Yi(e,t)||i,p?e.style[t]=p:Hs(e,t)),h=[n,i],gp(h),n=h[0],i=h[1],f=n.match(Os)||[],v=i.match(Os)||[],v.length){for(;d=Os.exec(i);)g=d[0],b=i.substring(l,d.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),g!==(p=f[c++]||"")&&(u=parseFloat(p)||0,y=p.substr((u+"").length),g.charAt(1)==="="&&(g=Ns(u,g)+y),_=parseFloat(g),x=g.substr((_+"").length),l=Os.lastIndex-x.length,x||(x=x||Dn.units[t]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(u=Yr(e,t,p,x)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:u,c:_-u,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Yv:qv;return up.test(i)&&(a.e=0),this._pt=a,a},jv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=jv[n]||n,t[1]=jv[i]||i,t.join(" ")},eC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],fr[a]&&(l=1,a=a==="transformOrigin"?Rn:at),Hs(n,a);l&&(Hs(n,at),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Bl(n,1),o.uncache=1,Zv(i)))}},ih={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new dn(e._pt,t,n,0,0,eC);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ul=[1,0,0,1,0,0],ty={},ny=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xv=function(e){var t=Yi(e,at);return ny(t)?Ul:t.substr(7).match(cp).map(ft)},Fp=function(e,t){var n=e._gsap||Wr(e),i=e.style,s=Xv(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ul:s):(s===Ul&&!e.offsetParent&&e!==Ko&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ko.appendChild(e)),s=Xv(e),l?i.display=l:Hs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ko.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Dp=function(e,t,n,i,s,o){var a=e._gsap,l=s||Fp(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],m=l[1],p=l[2],g=l[3],_=l[4],b=l[5],x=t.split(" "),y=parseFloat(x[0])||0,v=parseFloat(x[1])||0,T,S,w,A;n?l!==Ul&&(S=u*g-m*p)&&(w=y*(g/S)+v*(-p/S)+(p*b-g*_)/S,A=y*(-m/S)+v*(u/S)-(u*b-m*_)/S,y=w,v=A):(T=Qv(e),y=T.x+(~x[0].indexOf("%")?y/100*T.width:y),v=T.y+(~(x[1]||x[0]).indexOf("%")?v/100*T.height:v)),i||i!==!1&&a.smooth?(_=y-c,b=v-h,a.xOffset=d+(_*u+b*p)-_,a.yOffset=f+(_*m+b*g)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=v,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Rn]="0px 0px",o&&(qr(o,a,"xOrigin",c,y),qr(o,a,"yOrigin",h,v),qr(o,a,"xOffset",d,a.xOffset),qr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+v)},Bl=function(e,t){var n=e._gsap||new _p(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Yi(e,Rn)||"0",h,d,f,u,m,p,g,_,b,x,y,v,T,S,w,A,I,L,U,O,K,Z,q,z,te,ae,E,j,le,he,re,ze;return h=d=f=p=g=_=b=x=y=0,u=m=1,n.svg=!!(e.getCTM&&ey(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[at]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[at]!=="none"?l[at]:"")),i.scale=i.rotate=i.translate="none"),S=Fp(e,n.svg),n.svg&&(n.uncache?(te=e.getBBox(),c=n.xOrigin-te.x+"px "+(n.yOrigin-te.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),Dp(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,S)),v=n.xOrigin||0,T=n.yOrigin||0,S!==Ul&&(L=S[0],U=S[1],O=S[2],K=S[3],h=Z=S[4],d=q=S[5],S.length===6?(u=Math.sqrt(L*L+U*U),m=Math.sqrt(K*K+O*O),p=L||U?Zo(U,L)*Vs:0,b=O||K?Zo(O,K)*Vs+p:0,b&&(m*=Math.abs(Math.cos(b*Jo))),n.svg&&(h-=v-(v*L+T*O),d-=T-(v*U+T*K))):(ze=S[6],he=S[7],E=S[8],j=S[9],le=S[10],re=S[11],h=S[12],d=S[13],f=S[14],w=Zo(ze,le),g=w*Vs,w&&(A=Math.cos(-w),I=Math.sin(-w),z=Z*A+E*I,te=q*A+j*I,ae=ze*A+le*I,E=Z*-I+E*A,j=q*-I+j*A,le=ze*-I+le*A,re=he*-I+re*A,Z=z,q=te,ze=ae),w=Zo(-O,le),_=w*Vs,w&&(A=Math.cos(-w),I=Math.sin(-w),z=L*A-E*I,te=U*A-j*I,ae=O*A-le*I,re=K*I+re*A,L=z,U=te,O=ae),w=Zo(U,L),p=w*Vs,w&&(A=Math.cos(w),I=Math.sin(w),z=L*A+U*I,te=Z*A+q*I,U=U*A-L*I,q=q*A-Z*I,L=z,Z=te),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,_=180-_),u=ft(Math.sqrt(L*L+U*U+O*O)),m=ft(Math.sqrt(q*q+ze*ze)),w=Zo(Z,q),b=Math.abs(w)>2e-4?w*Vs:0,y=re?1/(re<0?-re:re):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ny(Yi(e,at)),z&&e.setAttribute("transform",z))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(u*=-1,b+=p<=0?180:-180,p+=p<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ft(u),n.scaleY=ft(m),n.rotation=ft(p)+a,n.rotationX=ft(g)+a,n.rotationY=ft(_)+a,n.skewX=b+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Rn]=rh(c)),n.xOffset=n.yOffset=0,n.force3D=Dn.force3D,n.renderTransform=n.svg?nC:Jv?iy:tC,n.uncache=0,n},rh=function(e){return(e=e.split(" "))[0]+" "+e[1]},wp=function(e,t,n){var i=Ht(t);return ft(parseFloat(t)+parseFloat(Yr(e,"x",n+"px",i)))+i},tC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,iy(e,t)},Bs="0deg",Nl="0px",ks=") ",iy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,m=n.scaleX,p=n.scaleY,g=n.transformPerspective,_=n.force3D,b=n.target,x=n.zOrigin,y="",v=_==="auto"&&e&&e!==1||_===!0;if(x&&(d!==Bs||h!==Bs)){var T=parseFloat(h)*Jo,S=Math.sin(T),w=Math.cos(T),A;T=parseFloat(d)*Jo,A=Math.cos(T),o=wp(b,o,S*A*-x),a=wp(b,a,-Math.sin(T)*-x),l=wp(b,l,w*A*-x+x)}g!==Nl&&(y+="perspective("+g+ks),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(v||o!==Nl||a!==Nl||l!==Nl)&&(y+=l!==Nl||v?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ks),c!==Bs&&(y+="rotate("+c+ks),h!==Bs&&(y+="rotateY("+h+ks),d!==Bs&&(y+="rotateX("+d+ks),(f!==Bs||u!==Bs)&&(y+="skew("+f+", "+u+ks),(m!==1||p!==1)&&(y+="scale("+m+", "+p+ks),b.style[at]=y||"translate(0, 0)"},nC=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,m=n.xOrigin,p=n.yOrigin,g=n.xOffset,_=n.yOffset,b=n.forceCSS,x=parseFloat(o),y=parseFloat(a),v,T,S,w,A;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Jo,c*=Jo,v=Math.cos(l)*d,T=Math.sin(l)*d,S=Math.sin(l-c)*-f,w=Math.cos(l-c)*f,c&&(h*=Jo,A=Math.tan(c-h),A=Math.sqrt(1+A*A),S*=A,w*=A,h&&(A=Math.tan(h),A=Math.sqrt(1+A*A),v*=A,T*=A)),v=ft(v),T=ft(T),S=ft(S),w=ft(w)):(v=d,w=f,T=S=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Yr(u,"x",o,"px"),y=Yr(u,"y",a,"px")),(m||p||g||_)&&(x=ft(x+m-(m*v+p*S)+g),y=ft(y+p-(m*T+p*w)+_)),(i||s)&&(A=u.getBBox(),x=ft(x+i/100*A.width),y=ft(y+s/100*A.height)),A="matrix("+v+","+T+","+S+","+w+","+x+","+y+")",u.setAttribute("transform",A),b&&(u.style[at]=A)},iC=function(e,t,n,i,s){var o=360,a=At(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Vs:1),c=l-i,h=i+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Vv)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Vv)%o-~~(c/o)*o)),e._pt=f=new dn(e._pt,t,n,i,c,Vw),f.e=h,f.u="deg",e._props.push(n),f},$v=function(e,t){for(var n in t)e[n]=t[n];return e},rC=function(e,t,n){var i=$v({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,u,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[at]=t,a=Bl(n,1),Hs(n,at),n.setAttribute("transform",c)):(c=getComputedStyle(n)[at],o[at]=t,a=Bl(n,1),o[at]=c);for(l in fr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(u=Ht(c),m=Ht(h),d=u!==m?Yr(n,l,c,m):parseFloat(c),f=parseFloat(h),e._pt=new dn(e._pt,a,l,d,f-d,Cp),e._pt.u=m||0,e._props.push(l));$v(a,i)};hn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});ih[e>1?"border"+r:r]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(m){return dr(a,m,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(m,p){return u[m]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,u,d)}});var Lp={name:"css",register:Ap,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,d,f,u,m,p,g,_,b,x,y,v,T,S,w;Rp||Ap(),this.styles=this.styles||Kv(e),w=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(h=t[p],!(Cn[p]&&yp(p,t,n,i,e,s)))){if(u=typeof h,m=ih[p],u==="function"&&(h=h.call(n,i,e,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Yo(h)),m)m(this,e,p,h,n)&&(S=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),h+="",ur.lastIndex=0,ur.test(c)||(g=Ht(c),_=Ht(h)),_?g!==_&&(c=Yr(e,p,c,_)+_):g&&(h+=g),this.add(a,"setProperty",c,h,i,s,0,0,p),o.push(p),w.push(p,0,a[p]);else if(u!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],At(c)&&~c.indexOf("random(")&&(c=Yo(c)),Ht(c+"")||c==="auto"||(c+=Dn.units[p]||Ht(dr(e,p))||""),(c+"").charAt(1)==="="&&(c=dr(e,p))):c=dr(e,p),f=parseFloat(c),b=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),d=parseFloat(h),p in qi&&(p==="autoAlpha"&&(f===1&&dr(e,"visibility")==="hidden"&&d&&(f=0),w.push("visibility",0,a.visibility),qr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=qi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),x=p in fr,x){if(this.styles.save(p),y||(v=e._gsap,v.renderTransform&&!t.parseTransform||Bl(e,t.parseTransform),T=t.smoothOrigin!==!1&&v.smooth,y=this._pt=new dn(this._pt,a,at,0,1,v.renderTransform,v,0,-1),y.dep=1),p==="scale")this._pt=new dn(this._pt,v,"scaleY",v.scaleY,(b?Ns(v.scaleY,b+d):d)-v.scaleY||0,Cp),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){w.push(Rn,0,a[Rn]),h=Qw(h),v.svg?Dp(e,h,0,T,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==v.zOrigin&&qr(this,v,"zOrigin",v.zOrigin,_),qr(this,a,p,rh(c),rh(h)));continue}else if(p==="svgOrigin"){Dp(e,h,1,T,0,this);continue}else if(p in ty){iC(this,v,p,f,b?Ns(f,b+h):h);continue}else if(p==="smoothOrigin"){qr(this,v,"smooth",v.smooth,h);continue}else if(p==="force3D"){v[p]=h;continue}else if(p==="transform"){rC(this,h,e);continue}}else p in a||(p=Qo(p)||p);if(x||(d||d===0)&&(f||f===0)&&!kw.test(h)&&p in a)g=(c+"").substr((f+"").length),d||(d=0),_=Ht(h)||(p in Dn.units?Dn.units[p]:g),g!==_&&(f=Yr(e,p,c,_)),this._pt=new dn(this._pt,x?v:a,p,f,(b?Ns(f,b+d):d)-f,!x&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?Hw:Cp),this._pt.u=_||0,g!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=zw);else if(p in a)Jw.call(this,e,p,c,b?b+h:h);else if(p in e)this.add(e,p,c||e[p],b?b+h:h,i,s);else if(p!=="parseTransform"){Ju(p,h);continue}x||(p in a?w.push(p,0,a[p]):typeof e[p]=="function"?w.push(p,2,e[p]()):w.push(p,1,c||e[p])),o.push(p)}}S&&Ep(this)},render:function(e,t){if(t.tween._time||!Pp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:dr,aliases:qi,getSetter:function(e,t,n){var i=qi[t];return i&&i.indexOf(",")<0&&(t=i),t in fr&&t!==Rn&&(e._gsap.x||dr(e,"x"))?n&&kv===n?t==="scale"?Xw:jw:(kv=n||{})&&(t==="scale"?$w:qw):e.style&&!Ku(e.style[t])?Gw:~t.indexOf("-")?Ww:nh(e,t)},core:{_removeProperty:Hs,_getMatrix:Fp}};Qt.utils.checkPrefix=Qo;Qt.core.getStyleSaver=Kv;(function(r,e,t,n){var i=hn(r+","+e+","+t,function(s){fr[s]=1});hn(e,function(s){Dn.units[s]="deg",ty[s]=1}),qi[i[13]]=r+","+e,hn(n,function(s){var o=s.split(":");qi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Dn.units[r]="px"});Qt.registerPlugin(Lp);var Ke=Qt.registerPlugin(Lp)||Qt,yO=Ke.core.Tween;function ry(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function sC(r,e,t){return e&&ry(r.prototype,e),t&&ry(r,t),r}var Gt,ah,oC,jn,Zr,Kr,ta,oy,Gs,Vl,ay,pr,Mi,ly,cy=function(){return Gt||typeof window<"u"&&(Gt=window.gsap)&&Gt.registerPlugin&&Gt},uy=1,ea=[],be=[],Ei=[],zl=Date.now,Op=function(e,t){return t},aC=function(){var e=Vl.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,be),i.push.apply(i,Ei),be=n,Ei=i,Op=function(o,a){return t[o](a)}},gr=function(e,t){return~Ei.indexOf(e)&&Ei[Ei.indexOf(e)+1][t]},Hl=function(e){return!!~ay.indexOf(e)},pn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},fn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},sh="scrollLeft",oh="scrollTop",Np=function(){return pr&&pr.isPressed||be.cache++},lh=function(e,t){var n=function i(s){if(s||s===0){uy&&(jn.history.scrollRestoration="manual");var o=pr&&pr.isPressed;s=i.v=Math.round(s)||(pr&&pr.iOS?1:0),e(s),i.cacheID=be.cache,o&&Op("ss",s)}else(t||be.cache!==i.cacheID||Op("ref"))&&(i.cacheID=be.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},en={s:sh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:lh(function(r){return arguments.length?jn.scrollTo(r,St.sc()):jn.pageXOffset||Zr[sh]||Kr[sh]||ta[sh]||0})},St={s:oh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:en,sc:lh(function(r){return arguments.length?jn.scrollTo(en.sc(),r):jn.pageYOffset||Zr[oh]||Kr[oh]||ta[oh]||0})},mn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Gt.utils.toArray)(e)[0]||(typeof e=="string"&&Gt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mr=function(e,t){var n=t.s,i=t.sc;Hl(e)&&(e=Zr.scrollingElement||Kr);var s=be.indexOf(e),o=i===St.sc?1:2;!~s&&(s=be.push(e)-1),be[s+o]||pn(e,"scroll",Np);var a=be[s+o],l=a||(be[s+o]=lh(gr(e,n),!0)||(Hl(e)?i:lh(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Gt.getProperty(e,"scrollBehavior")==="smooth"),l},ch=function(e,t,n){var i=e,s=e,o=zl(),a=o,l=t||50,c=Math.max(500,l*3),h=function(m,p){var g=zl();p||g-o>l?(s=i,i=m,a=o,o=g):n?i+=m:i=s+(m-s)/(g-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},f=function(m){var p=a,g=s,_=zl();return(m||m===0)&&m!==i&&h(m),o===a||_-a>c?0:(i+(n?g:-g))/((n?_:o)-p)*1e3};return{update:h,reset:d,getVelocity:f}},kl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},sy=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},hy=function(){Vl=Gt.core.globals().ScrollTrigger,Vl&&Vl.core&&aC()},dy=function(e){return Gt=e||cy(),!ah&&Gt&&typeof document<"u"&&document.body&&(jn=window,Zr=document,Kr=Zr.documentElement,ta=Zr.body,ay=[jn,Zr,Kr,ta],oC=Gt.utils.clamp,ly=Gt.core.context||function(){},Gs="onpointerenter"in ta?"pointer":"mouse",oy=pt.isTouch=jn.matchMedia&&jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=pt.eventTypes=("ontouchstart"in Kr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Kr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return uy=0},500),hy(),ah=1),ah};en.op=St;be.cache=0;var pt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){ah||dy(Gt)||console.warn("Please gsap.registerPlugin(Observer)"),Vl||hy();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,m=n.wheelSpeed,p=n.event,g=n.onDragStart,_=n.onDragEnd,b=n.onDrag,x=n.onPress,y=n.onRelease,v=n.onRight,T=n.onLeft,S=n.onUp,w=n.onDown,A=n.onChangeX,I=n.onChangeY,L=n.onChange,U=n.onToggleX,O=n.onToggleY,K=n.onHover,Z=n.onHoverEnd,q=n.onMove,z=n.ignoreCheck,te=n.isNormalizer,ae=n.onGestureStart,E=n.onGestureEnd,j=n.onWheel,le=n.onEnable,he=n.onDisable,re=n.onClick,ze=n.scrollSpeed,He=n.capture,$e=n.allowClicks,Te=n.lockAxis,lt=n.onLockAxis;this.target=a=mn(a)||Kr,this.vars=n,u&&(u=Gt.utils.toArray(u)),i=i||1e-9,s=s||0,m=m||1,ze=ze||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(jn.getComputedStyle(ta).lineHeight)||22);var Be,tt,ct,ye,xe,fe,Wt,D=this,et=0,In=0,Qn=n.passive||!h&&n.passive!==!1,nt=mr(a,en),rt=mr(a,St),yi=nt(),ei=rt(),mt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Mi[0]==="pointerdown",Ct=Hl(a),We=a.ownerDocument||Zr,ln=[0,0,0],Sn=[0,0,0],Fn=0,fs=function(){return Fn=zl()},ut=function(R,B){return(D.event=R)&&u&&~u.indexOf(R.target)||B&&mt&&R.pointerType!=="touch"||z&&z(R,B)},Pr=function(){D._vx.reset(),D._vy.reset(),tt.pause(),d&&d(D)},ti=function(){var R=D.deltaX=sy(ln),B=D.deltaY=sy(Sn),P=Math.abs(R)>=i,V=Math.abs(B)>=i;L&&(P||V)&&L(D,R,B,ln,Sn),P&&(v&&D.deltaX>0&&v(D),T&&D.deltaX<0&&T(D),A&&A(D),U&&D.deltaX<0!=et<0&&U(D),et=D.deltaX,ln[0]=ln[1]=ln[2]=0),V&&(w&&D.deltaY>0&&w(D),S&&D.deltaY<0&&S(D),I&&I(D),O&&D.deltaY<0!=In<0&&O(D),In=D.deltaY,Sn[0]=Sn[1]=Sn[2]=0),(ye||ct)&&(q&&q(D),ct&&(g&&ct===1&&g(D),b&&b(D),ct=0),ye=!1),fe&&!(fe=!1)&&lt&&lt(D),xe&&(j(D),xe=!1),Be=0},xi=function(R,B,P){ln[P]+=R,Sn[P]+=B,D._vx.update(R),D._vy.update(B),c?Be||(Be=requestAnimationFrame(ti)):ti()},ni=function(R,B){Te&&!Wt&&(D.axis=Wt=Math.abs(R)>Math.abs(B)?"x":"y",fe=!0),Wt!=="y"&&(ln[2]+=R,D._vx.update(R,!0)),Wt!=="x"&&(Sn[2]+=B,D._vy.update(B,!0)),c?Be||(Be=requestAnimationFrame(ti)):ti()},Li=function(R){if(!ut(R,1)){R=kl(R,h);var B=R.clientX,P=R.clientY,V=B-D.x,N=P-D.y,X=D.isDragging;D.x=B,D.y=P,(X||(V||N)&&(Math.abs(D.startX-B)>=s||Math.abs(D.startY-P)>=s))&&(ct=X?2:1,X||(D.isDragging=!0),ni(V,N))}},Ln=D.onPress=function(C){ut(C,1)||C&&C.button||(D.axis=Wt=null,tt.pause(),D.isPressed=!0,C=kl(C),et=In=0,D.startX=D.x=C.clientX,D.startY=D.y=C.clientY,D._vx.reset(),D._vy.reset(),pn(te?a:We,Mi[1],Li,Qn,!0),D.deltaX=D.deltaY=0,x&&x(D))},de=D.onRelease=function(C){if(!ut(C,1)){fn(te?a:We,Mi[1],Li,!0);var R=!isNaN(D.y-D.startY),B=D.isDragging,P=B&&(Math.abs(D.x-D.startX)>3||Math.abs(D.y-D.startY)>3),V=kl(C);!P&&R&&(D._vx.reset(),D._vy.reset(),h&&$e&&Gt.delayedCall(.08,function(){if(zl()-Fn>300&&!C.defaultPrevented){if(C.target.click)C.target.click();else if(We.createEvent){var N=We.createEvent("MouseEvents");N.initMouseEvent("click",!0,!0,jn,1,V.screenX,V.screenY,V.clientX,V.clientY,!1,!1,!1,!1,0,null),C.target.dispatchEvent(N)}}})),D.isDragging=D.isGesturing=D.isPressed=!1,d&&B&&!te&&tt.restart(!0),ct&&ti(),_&&B&&_(D),y&&y(D,P)}},On=function(R){return R.touches&&R.touches.length>1&&(D.isGesturing=!0)&&ae(R,D.isDragging)},st=function(){return(D.isGesturing=!1)||E(D)},jt=function(R){if(!ut(R)){var B=nt(),P=rt();xi((B-yi)*ze,(P-ei)*ze,1),yi=B,ei=P,d&&tt.restart(!0)}},bn=function(R){if(!ut(R)){R=kl(R,h),j&&(xe=!0);var B=(R.deltaMode===1?l:R.deltaMode===2?jn.innerHeight:1)*m;xi(R.deltaX*B,R.deltaY*B,0),d&&!te&&tt.restart(!0)}},Oi=function(R){if(!ut(R)){var B=R.clientX,P=R.clientY,V=B-D.x,N=P-D.y;D.x=B,D.y=P,ye=!0,d&&tt.restart(!0),(V||N)&&ni(V,N)}},ee=function(R){D.event=R,K(D)},M=function(R){D.event=R,Z(D)},k=function(R){return ut(R)||kl(R,h)&&re(D)};tt=D._dc=Gt.delayedCall(f||.25,Pr).pause(),D.deltaX=D.deltaY=0,D._vx=ch(0,50,!0),D._vy=ch(0,50,!0),D.scrollX=nt,D.scrollY=rt,D.isDragging=D.isGesturing=D.isPressed=!1,ly(this),D.enable=function(C){return D.isEnabled||(pn(Ct?We:a,"scroll",Np),o.indexOf("scroll")>=0&&pn(Ct?We:a,"scroll",jt,Qn,He),o.indexOf("wheel")>=0&&pn(a,"wheel",bn,Qn,He),(o.indexOf("touch")>=0&&oy||o.indexOf("pointer")>=0)&&(pn(a,Mi[0],Ln,Qn,He),pn(We,Mi[2],de),pn(We,Mi[3],de),$e&&pn(a,"click",fs,!0,!0),re&&pn(a,"click",k),ae&&pn(We,"gesturestart",On),E&&pn(We,"gestureend",st),K&&pn(a,Gs+"enter",ee),Z&&pn(a,Gs+"leave",M),q&&pn(a,Gs+"move",Oi)),D.isEnabled=!0,D.isDragging=D.isGesturing=D.isPressed=ye=ct=!1,D._vx.reset(),D._vy.reset(),yi=nt(),ei=rt(),C&&C.type&&Ln(C),le&&le(D)),D},D.disable=function(){D.isEnabled&&(ea.filter(function(C){return C!==D&&Hl(C.target)}).length||fn(Ct?We:a,"scroll",Np),D.isPressed&&(D._vx.reset(),D._vy.reset(),fn(te?a:We,Mi[1],Li,!0)),fn(Ct?We:a,"scroll",jt,He),fn(a,"wheel",bn,He),fn(a,Mi[0],Ln,He),fn(We,Mi[2],de),fn(We,Mi[3],de),fn(a,"click",fs,!0),fn(a,"click",k),fn(We,"gesturestart",On),fn(We,"gestureend",st),fn(a,Gs+"enter",ee),fn(a,Gs+"leave",M),fn(a,Gs+"move",Oi),D.isEnabled=D.isPressed=D.isDragging=!1,he&&he(D))},D.kill=D.revert=function(){D.disable();var C=ea.indexOf(D);C>=0&&ea.splice(C,1),pr===D&&(pr=0)},ea.push(D),te&&Hl(a)&&(pr=D),D.enable(p)},sC(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();pt.version="3.12.7";pt.create=function(r){return new pt(r)};pt.register=dy;pt.getAll=function(){return ea.slice()};pt.getById=function(r){return ea.filter(function(e){return e.vars.id===r})[0]};cy()&&Gt.registerPlugin(pt);var J,ra,Ee,Qe,qn,Ge,Kp,wh,tc,Yl,Wl,uh,tn,Dh,Wp,_n,fy,py,sa,Ry,Up,Py,gn,jp,Iy,Fy,Jr,Xp,Jp,oa,Qp,Ch,$p,Bp,hh=1,nn=Date.now,kp=nn(),di=0,jl=0,my=function(e,t,n){var i=$n(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},gy=function(e,t){return t&&(!$n(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},lC=function r(){return jl&&requestAnimationFrame(r)},_y=function(){return Dh=1},vy=function(){return Dh=0},Zi=function(e){return e},Xl=function(e){return Math.round(e*1e5)/1e5||0},Ly=function(){return typeof window<"u"},Oy=function(){return J||Ly()&&(J=window.gsap)&&J.registerPlugin&&J},Ys=function(e){return!!~Kp.indexOf(e)},Ny=function(e){return(e==="Height"?Qp:Ee["inner"+e])||qn["client"+e]||Ge["client"+e]},Uy=function(e){return gr(e,"getBoundingClientRect")||(Ys(e)?function(){return Eh.width=Ee.innerWidth,Eh.height=Qp,Eh}:function(){return _r(e)})},cC=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=gr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Ny(s):e["client"+s])||0}},uC=function(e,t){return!t||~Ei.indexOf(e)?Uy(e):function(){return Eh}},Ki=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=gr(e,n))?o()-Uy(e)()[s]:Ys(e)?(qn[n]||Ge[n])-Ny(i):e[n]-e["offset"+i])},dh=function(e,t){for(var n=0;n<sa.length;n+=3)(!t||~t.indexOf(sa[n+1]))&&e(sa[n],sa[n+1],sa[n+2])},$n=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},$l=function(e){return typeof e=="number"},Ws=function(e){return typeof e=="object"},Gl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Vp=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},na=Math.abs,By="left",ky="top",em="right",tm="bottom",Xs="width",$s="height",Zl="Right",Kl="Left",Jl="Top",Ql="Bottom",bt="padding",ui="margin",la="Width",nm="Height",Dt="px",hi=function(e){return Ee.getComputedStyle(e)},hC=function(e){var t=hi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},yy=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_r=function(e,t){var n=t&&hi(e)[Wp]!=="matrix(1, 0, 0, 1, 0, 0)"&&J.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Th=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Vy=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},dC=function(e){return function(t){return J.utils.snap(Vy(e),t)}},im=function(e){var t=J.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},fC=function(e){return function(t,n){return im(Vy(e))(t,n.direction)}},fh=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Lt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Ft=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ph=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},xy={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},mh={toggleActions:"play",anticipatePin:0},Ah={top:0,left:0,center:.5,bottom:1,right:1},xh=function(e,t){if($n(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ah?Ah[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},gh=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,f=s.indent,u=s.fontWeight,m=Qe.createElement("div"),p=Ys(n)||gr(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,_=p?Ge:n,b=e.indexOf("start")!==-1,x=b?c:h,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&p?"fixed;":"absolute;"),(g||l||!p)&&(y+=(i===St?em:tm)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=b,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(m,_.children[0]):_.appendChild(m),m._offset=m["offset"+i.op.d2],Sh(m,0,i,b),m},Sh=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+la]=1,s["border"+a+la]=0,s[n.p]=t+"px",J.set(e,s)},Me=[],qp={},nc,Sy=function(){return nn()-di>34&&(nc||(nc=requestAnimationFrame(vr)))},ia=function(){(!gn||!gn.isPressed||gn.startX>Ge.clientWidth)&&(be.cache++,gn?nc||(nc=requestAnimationFrame(vr)):vr(),di||Ks("scrollStart"),di=nn())},zp=function(){Fy=Ee.innerWidth,Iy=Ee.innerHeight},ql=function(e){be.cache++,(e===!0||!tn&&!Py&&!Qe.fullscreenElement&&!Qe.webkitFullscreenElement&&(!jp||Fy!==Ee.innerWidth||Math.abs(Ee.innerHeight-Iy)>Ee.innerHeight*.25))&&wh.restart(!0)},Zs={},pC=[],zy=function r(){return Ft(_e,"scrollEnd",r)||js(!0)},Ks=function(e){return Zs[e]&&Zs[e].map(function(t){return t()})||pC},Xn=[],Hy=function(e){for(var t=0;t<Xn.length;t+=5)(!e||Xn[t+4]&&Xn[t+4].query===e)&&(Xn[t].style.cssText=Xn[t+1],Xn[t].getBBox&&Xn[t].setAttribute("transform",Xn[t+2]||""),Xn[t+3].uncache=1)},rm=function(e,t){var n;for(_n=0;_n<Me.length;_n++)n=Me[_n],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ch=!0,t&&Hy(t),t||Ks("revert")},Gy=function(e,t){be.cache++,(t||!vn)&&be.forEach(function(n){return rn(n)&&n.cacheID++&&(n.rec=0)}),$n(e)&&(Ee.history.scrollRestoration=Jp=e)},vn,qs=0,by,mC=function(){if(by!==qs){var e=by=qs;requestAnimationFrame(function(){return e===qs&&js(!0)})}},Wy=function(){Ge.appendChild(oa),Qp=!gn&&oa.offsetHeight||Ee.innerHeight,Ge.removeChild(oa)},My=function(e){return tc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},js=function(e,t){if(qn=Qe.documentElement,Ge=Qe.body,Kp=[Ee,Qe,qn,Ge],di&&!e&&!Ch){Lt(_e,"scrollEnd",zy);return}Wy(),vn=_e.isRefreshing=!0,be.forEach(function(i){return rn(i)&&++i.cacheID&&(i.rec=i())});var n=Ks("refreshInit");Ry&&_e.sort(),t||rm(),be.forEach(function(i){rn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Me.slice(0).forEach(function(i){return i.refresh()}),Ch=!1,Me.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),$p=1,My(!0),Me.forEach(function(i){var s=Ki(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),My(!1),$p=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),be.forEach(function(i){rn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Gy(Jp,1),wh.pause(),qs++,vn=2,vr(2),Me.forEach(function(i){return rn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),vn=_e.isRefreshing=!1,Ks("refresh")},Yp=0,bh=1,ec,vr=function(e){if(e===2||!vn&&!Ch){_e.isUpdating=!0,ec&&ec.update(0);var t=Me.length,n=nn(),i=n-kp>=50,s=t&&Me[0].scroll();if(bh=Yp>s?-1:1,vn||(Yp=s),i&&(di&&!Dh&&n-di>200&&(di=0,Ks("scrollEnd")),Wl=kp,kp=n),bh<0){for(_n=t;_n-- >0;)Me[_n]&&Me[_n].update(0,i);bh=1}else for(_n=0;_n<t;_n++)Me[_n]&&Me[_n].update(0,i);_e.isUpdating=!1}nc=0},Zp=[By,ky,tm,em,ui+Ql,ui+Zl,ui+Jl,ui+Kl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Mh=Zp.concat([Xs,$s,"boxSizing","max"+la,"max"+nm,"position",ui,bt,bt+Jl,bt+Zl,bt+Ql,bt+Kl]),gC=function(e,t,n){aa(n);var i=e._gsap;if(i.spacerIsNative)aa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Hp=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Zp.length,o=t.style,a=e.style,l;s--;)l=Zp[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[tm]=a[em]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Xs]=Th(e,en)+Dt,o[$s]=Th(e,St)+Dt,o[bt]=a[ui]=a[ky]=a[By]="0",aa(i),a[Xs]=a["max"+la]=n[Xs],a[$s]=a["max"+nm]=n[$s],a[bt]=n[bt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},_C=/([A-Z])/g,aa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||J.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(_C,"-$1").toLowerCase())}},_h=function(e){for(var t=Mh.length,n=e.style,i=[],s=0;s<t;s++)i.push(Mh[s],n[Mh[s]]);return i.t=e,i},vC=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Eh={left:0,top:0},Ey=function(e,t,n,i,s,o,a,l,c,h,d,f,u,m){rn(e)&&(e=e(l)),$n(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?xh("0"+e.substr(3),n):0));var p=u?u.time():0,g,_,b;if(u&&u.seek(0),isNaN(e)||(e=+e),$l(e))u&&(e=J.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,e)),a&&Sh(a,n,i,!0);else{rn(t)&&(t=t(l));var x=(e||"0").split(" "),y,v,T,S;b=mn(t,l)||Ge,y=_r(b)||{},(!y||!y.left&&!y.top)&&hi(b).display==="none"&&(S=b.style.display,b.style.display="block",y=_r(b),S?b.style.display=S:b.style.removeProperty("display")),v=xh(x[0],y[i.d]),T=xh(x[1]||"0",n),e=y[i.p]-c[i.p]-h+v+s-T,a&&Sh(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var w=e+n,A=o._isStart;g="scroll"+i.d2,Sh(o,w,i,A&&w>20||!A&&(d?Math.max(Ge[g],qn[g]):o.parentNode[g])<=w+1),d&&(c=_r(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Dt))}return u&&b&&(g=_r(b),u.seek(f),_=_r(b),u._caScrollDist=g[i.p]-_[i.p],e=e/u._caScrollDist*f),u&&u.seek(p),u?e:Math.round(e)},yC=/(webkit|moz|length|cssText|inset)/i,wy=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Ge){e._stOrig=s.cssText,a=hi(e);for(o in a)!+o&&!yC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;J.core.getCache(e).uncache=1,t.appendChild(e)}},jy=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},vh=function(e,t,n){var i={};i[t.p]="+="+n,J.set(e,i)},Cy=function(e,t){var n=mr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,m={};c=c||n();var p=jy(n,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return p(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){be.cache++,o.tween&&vr()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=J.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Lt(e,"wheel",n.wheelHandler),_e.isTouch&&Lt(e,"touchmove",n.wheelHandler),s},_e=function(){function r(t,n){ra||r.register(J)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Xp(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!jl){this.update=this.refresh=this.kill=Zi;return}n=yy($n(n)||$l(n)||n.nodeType?{trigger:n}:n,mh);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,f=s.trigger,u=s.pin,m=s.pinSpacing,p=s.invalidateOnRefresh,g=s.anticipatePin,_=s.onScrubComplete,b=s.onSnapComplete,x=s.once,y=s.snap,v=s.pinReparent,T=s.pinSpacer,S=s.containerAnimation,w=s.fastScrollEnd,A=s.preventOverlaps,I=n.horizontal||n.containerAnimation&&n.horizontal!==!1?en:St,L=!d&&d!==0,U=mn(n.scroller||Ee),O=J.core.getCache(U),K=Ys(U),Z=("pinType"in n?n.pinType:gr(U,"pinType")||K&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=L&&n.toggleActions.split(" "),te="markers"in n?n.markers:mh.markers,ae=K?0:parseFloat(hi(U)["border"+I.p2+la])||0,E=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(E)},le=cC(U,K,I),he=uC(U,K),re=0,ze=0,He=0,$e=mr(U,I),Te,lt,Be,tt,ct,ye,xe,fe,Wt,D,et,In,Qn,nt,rt,yi,ei,mt,Ct,We,ln,Sn,Fn,fs,ut,Pr,ti,xi,ni,Li,Ln,de,On,st,jt,bn,Oi,ee,M;if(E._startClamp=E._endClamp=!1,E._dir=I,g*=45,E.scroller=U,E.scroll=S?S.time.bind(S):$e,tt=$e(),E.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ry=1,n.refreshPriority===-9999&&(ec=E)),O.tweenScroll=O.tweenScroll||{top:Cy(U,St),left:Cy(U,en)},E.tweenTo=Te=O.tweenScroll[I.p],E.scrubDuration=function(P){On=$l(P)&&P,On?de?de.duration(P):de=J.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:On,paused:!0,onComplete:function(){return _&&_(E)}}):(de&&de.progress(1).kill(),de=0)},i&&(i.vars.lazy=!1,i._initted&&!E.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),E.animation=i.pause(),i.scrollTrigger=E,E.scrubDuration(d),Li=0,l||(l=i.vars.id)),y&&((!Ws(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Ge.style&&J.set(K?[Ge,qn]:U,{scrollBehavior:"auto"}),be.forEach(function(P){return rn(P)&&P.target===(K?Qe.scrollingElement||qn:U)&&(P.smooth=!1)}),Be=rn(y.snapTo)?y.snapTo:y.snapTo==="labels"?dC(i):y.snapTo==="labelsDirectional"?fC(i):y.directional!==!1?function(P,V){return im(y.snapTo)(P,nn()-ze<500?0:V.direction)}:J.utils.snap(y.snapTo),st=y.duration||{min:.1,max:2},st=Ws(st)?Yl(st.min,st.max):Yl(st,st),jt=J.delayedCall(y.delay||On/2||.1,function(){var P=$e(),V=nn()-ze<500,N=Te.tween;if((V||Math.abs(E.getVelocity())<10)&&!N&&!Dh&&re!==P){var X=(P-ye)/nt,ne=i&&!L?i.totalProgress():X,Q=V?0:(ne-Ln)/(nn()-Wl)*1e3||0,me=J.utils.clamp(-X,1-X,na(Q/2)*Q/.185),Oe=X+(y.inertia===!1?0:me),Ne,Ce,Ae=y,je=Ae.onStart,pe=Ae.onInterrupt,Nt=Ae.onComplete;if(Ne=Be(Oe,E),$l(Ne)||(Ne=Oe),Ce=Math.max(0,Math.round(ye+Ne*nt)),P<=xe&&P>=ye&&Ce!==P){if(N&&!N._initted&&N.data<=na(Ce-P))return;y.inertia===!1&&(me=Ne-X),Te(Ce,{duration:st(na(Math.max(na(Oe-ne),na(Ne-ne))*.185/Q/.05||0)),ease:y.ease||"power3",data:na(Ce-P),onInterrupt:function(){return jt.restart(!0)&&pe&&pe(E)},onComplete:function(){E.update(),re=$e(),i&&!L&&(de?de.resetTo("totalProgress",Ne,i._tTime/i._tDur):i.progress(Ne)),Li=Ln=i&&!L?i.totalProgress():E.progress,b&&b(E),Nt&&Nt(E)}},P,me*nt,Ce-P-me*nt),je&&je(E,Te.tween)}}else E.isActive&&re!==P&&jt.restart(!0)}).pause()),l&&(qp[l]=E),f=E.trigger=mn(f||u!==!0&&u),M=f&&f._gsap&&f._gsap.stRevert,M&&(M=M(E)),u=u===!0?f:mn(u),$n(a)&&(a={targets:f,className:a}),u&&(m===!1||m===ui||(m=!m&&u.parentNode&&u.parentNode.style&&hi(u.parentNode).display==="flex"?!1:bt),E.pin=u,lt=J.core.getCache(u),lt.spacer?rt=lt.pinState:(T&&(T=mn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),lt.spacerIsNative=!!T,T&&(lt.spacerState=_h(T))),lt.spacer=mt=T||Qe.createElement("div"),mt.classList.add("pin-spacer"),l&&mt.classList.add("pin-spacer-"+l),lt.pinState=rt=_h(u)),n.force3D!==!1&&J.set(u,{force3D:!0}),E.spacer=mt=lt.spacer,ni=hi(u),fs=ni[m+I.os2],We=J.getProperty(u),ln=J.quickSetter(u,I.a,Dt),Hp(u,mt,ni),ei=_h(u)),te){In=Ws(te)?yy(te,xy):xy,D=gh("scroller-start",l,U,I,In,0),et=gh("scroller-end",l,U,I,In,0,D),Ct=D["offset"+I.op.d2];var k=mn(gr(U,"content")||U);fe=this.markerStart=gh("start",l,k,I,In,Ct,0,S),Wt=this.markerEnd=gh("end",l,k,I,In,Ct,0,S),S&&(ee=J.quickSetter([fe,Wt],I.a,Dt)),!Z&&!(Ei.length&&gr(U,"fixedMarkers")===!0)&&(hC(K?Ge:U),J.set([D,et],{force3D:!0}),Pr=J.quickSetter(D,I.a,Dt),xi=J.quickSetter(et,I.a,Dt))}if(S){var C=S.vars.onUpdate,R=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){E.update(0,0,1),C&&C.apply(S,R||[])})}if(E.previous=function(){return Me[Me.indexOf(E)-1]},E.next=function(){return Me[Me.indexOf(E)+1]},E.revert=function(P,V){if(!V)return E.kill(!0);var N=P!==!1||!E.enabled,X=tn;N!==E.isReverted&&(N&&(bn=Math.max($e(),E.scroll.rec||0),He=E.progress,Oi=i&&i.progress()),fe&&[fe,Wt,D,et].forEach(function(ne){return ne.style.display=N?"none":"block"}),N&&(tn=E,E.update(N)),u&&(!v||!E.isActive)&&(N?gC(u,mt,rt):Hp(u,mt,hi(u),ut)),N||E.update(N),tn=X,E.isReverted=N)},E.refresh=function(P,V,N,X){if(!((tn||!E.enabled)&&!V)){if(u&&P&&di){Lt(r,"scrollEnd",zy);return}!vn&&j&&j(E),tn=E,Te.tween&&!N&&(Te.tween.kill(),Te.tween=0),de&&de.pause(),p&&i&&i.revert({kill:!1}).invalidate(),E.isReverted||E.revert(!0,!0),E._subPinOffset=!1;var ne=le(),Q=he(),me=S?S.duration():Ki(U,I),Oe=nt<=.01,Ne=0,Ce=X||0,Ae=Ws(N)?N.end:n.end,je=n.endTrigger||f,pe=Ws(N)?N.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),Nt=E.pinnedContainer=n.pinnedContainer&&mn(n.pinnedContainer,E),ht=f&&Math.max(0,Me.indexOf(E))||0,Ut=ht,Bt,Xt,ps,Uc,$t,Tt,Ni,Id,Wg,ka,Ui,Va,Bc;for(te&&Ws(N)&&(Va=J.getProperty(D,I.p),Bc=J.getProperty(et,I.p));Ut-- >0;)Tt=Me[Ut],Tt.end||Tt.refresh(0,1)||(tn=E),Ni=Tt.pin,Ni&&(Ni===f||Ni===u||Ni===Nt)&&!Tt.isReverted&&(ka||(ka=[]),ka.unshift(Tt),Tt.revert(!0,!0)),Tt!==Me[Ut]&&(ht--,Ut--);for(rn(pe)&&(pe=pe(E)),pe=my(pe,"start",E),ye=Ey(pe,f,ne,I,$e(),fe,D,E,Q,ae,Z,me,S,E._startClamp&&"_startClamp")||(u?-.001:0),rn(Ae)&&(Ae=Ae(E)),$n(Ae)&&!Ae.indexOf("+=")&&(~Ae.indexOf(" ")?Ae=($n(pe)?pe.split(" ")[0]:"")+Ae:(Ne=xh(Ae.substr(2),ne),Ae=$n(pe)?pe:(S?J.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,ye):ye)+Ne,je=f)),Ae=my(Ae,"end",E),xe=Math.max(ye,Ey(Ae||(je?"100% 0":me),je,ne,I,$e()+Ne,Wt,et,E,Q,ae,Z,me,S,E._endClamp&&"_endClamp"))||-.001,Ne=0,Ut=ht;Ut--;)Tt=Me[Ut],Ni=Tt.pin,Ni&&Tt.start-Tt._pinPush<=ye&&!S&&Tt.end>0&&(Bt=Tt.end-(E._startClamp?Math.max(0,Tt.start):Tt.start),(Ni===f&&Tt.start-Tt._pinPush<ye||Ni===Nt)&&isNaN(pe)&&(Ne+=Bt*(1-Tt.progress)),Ni===u&&(Ce+=Bt));if(ye+=Ne,xe+=Ne,E._startClamp&&(E._startClamp+=Ne),E._endClamp&&!vn&&(E._endClamp=xe||-.001,xe=Math.min(xe,Ki(U,I))),nt=xe-ye||(ye-=.01)&&.001,Oe&&(He=J.utils.clamp(0,1,J.utils.normalize(ye,xe,bn))),E._pinPush=Ce,fe&&Ne&&(Bt={},Bt[I.a]="+="+Ne,Nt&&(Bt[I.p]="-="+$e()),J.set([fe,Wt],Bt)),u&&!($p&&E.end>=Ki(U,I)))Bt=hi(u),Uc=I===St,ps=$e(),Sn=parseFloat(We(I.a))+Ce,!me&&xe>1&&(Ui=(K?Qe.scrollingElement||qn:U).style,Ui={style:Ui,value:Ui["overflow"+I.a.toUpperCase()]},K&&hi(Ge)["overflow"+I.a.toUpperCase()]!=="scroll"&&(Ui.style["overflow"+I.a.toUpperCase()]="scroll")),Hp(u,mt,Bt),ei=_h(u),Xt=_r(u,!0),Id=Z&&mr(U,Uc?en:St)(),m?(ut=[m+I.os2,nt+Ce+Dt],ut.t=mt,Ut=m===bt?Th(u,I)+nt+Ce:0,Ut&&(ut.push(I.d,Ut+Dt),mt.style.flexBasis!=="auto"&&(mt.style.flexBasis=Ut+Dt)),aa(ut),Nt&&Me.forEach(function(za){za.pin===Nt&&za.vars.pinSpacing!==!1&&(za._subPinOffset=!0)}),Z&&$e(bn)):(Ut=Th(u,I),Ut&&mt.style.flexBasis!=="auto"&&(mt.style.flexBasis=Ut+Dt)),Z&&($t={top:Xt.top+(Uc?ps-ye:Id)+Dt,left:Xt.left+(Uc?Id:ps-ye)+Dt,boxSizing:"border-box",position:"fixed"},$t[Xs]=$t["max"+la]=Math.ceil(Xt.width)+Dt,$t[$s]=$t["max"+nm]=Math.ceil(Xt.height)+Dt,$t[ui]=$t[ui+Jl]=$t[ui+Zl]=$t[ui+Ql]=$t[ui+Kl]="0",$t[bt]=Bt[bt],$t[bt+Jl]=Bt[bt+Jl],$t[bt+Zl]=Bt[bt+Zl],$t[bt+Ql]=Bt[bt+Ql],$t[bt+Kl]=Bt[bt+Kl],yi=vC(rt,$t,v),vn&&$e(0)),i?(Wg=i._initted,Up(1),i.render(i.duration(),!0,!0),Fn=We(I.a)-Sn+nt+Ce,ti=Math.abs(nt-Fn)>1,Z&&ti&&yi.splice(yi.length-2,2),i.render(0,!0,!0),Wg||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Up(0)):Fn=nt,Ui&&(Ui.value?Ui.style["overflow"+I.a.toUpperCase()]=Ui.value:Ui.style.removeProperty("overflow-"+I.a));else if(f&&$e()&&!S)for(Xt=f.parentNode;Xt&&Xt!==Ge;)Xt._pinOffset&&(ye-=Xt._pinOffset,xe-=Xt._pinOffset),Xt=Xt.parentNode;ka&&ka.forEach(function(za){return za.revert(!1,!0)}),E.start=ye,E.end=xe,tt=ct=vn?bn:$e(),!S&&!vn&&(tt<bn&&$e(bn),E.scroll.rec=0),E.revert(!1,!0),ze=nn(),jt&&(re=-1,jt.restart(!0)),tn=0,i&&L&&(i._initted||Oi)&&i.progress()!==Oi&&i.progress(Oi||0,!0).render(i.time(),!0,!0),(Oe||He!==E.progress||S||p||i&&!i._initted)&&(i&&!L&&i.totalProgress(S&&ye<-.001&&!He?J.utils.normalize(ye,xe,0):He,!0),E.progress=Oe||(tt-ye)/nt===He?0:He),u&&m&&(mt._pinOffset=Math.round(E.progress*Fn)),de&&de.invalidate(),isNaN(Va)||(Va-=J.getProperty(D,I.p),Bc-=J.getProperty(et,I.p),vh(D,I,Va),vh(fe,I,Va-(X||0)),vh(et,I,Bc),vh(Wt,I,Bc-(X||0))),Oe&&!vn&&E.update(),h&&!vn&&!Qn&&(Qn=!0,h(E),Qn=!1)}},E.getVelocity=function(){return($e()-ct)/(nn()-Wl)*1e3||0},E.endAnimation=function(){Gl(E.callbackAnimation),i&&(de?de.progress(1):i.paused()?L||Gl(i,E.direction<0,1):Gl(i,i.reversed()))},E.labelToScroll=function(P){return i&&i.labels&&(ye||E.refresh()||ye)+i.labels[P]/i.duration()*nt||0},E.getTrailing=function(P){var V=Me.indexOf(E),N=E.direction>0?Me.slice(0,V).reverse():Me.slice(V+1);return($n(P)?N.filter(function(X){return X.vars.preventOverlaps===P}):N).filter(function(X){return E.direction>0?X.end<=ye:X.start>=xe})},E.update=function(P,V,N){if(!(S&&!N&&!P)){var X=vn===!0?bn:E.scroll(),ne=P?0:(X-ye)/nt,Q=ne<0?0:ne>1?1:ne||0,me=E.progress,Oe,Ne,Ce,Ae,je,pe,Nt,ht;if(V&&(ct=tt,tt=S?$e():X,y&&(Ln=Li,Li=i&&!L?i.totalProgress():Q)),g&&u&&!tn&&!hh&&di&&(!Q&&ye<X+(X-ct)/(nn()-Wl)*g?Q=1e-4:Q===1&&xe>X+(X-ct)/(nn()-Wl)*g&&(Q=.9999)),Q!==me&&E.enabled){if(Oe=E.isActive=!!Q&&Q<1,Ne=!!me&&me<1,pe=Oe!==Ne,je=pe||!!Q!=!!me,E.direction=Q>me?1:-1,E.progress=Q,je&&!tn&&(Ce=Q&&!me?0:Q===1?1:me===1?2:3,L&&(Ae=!pe&&z[Ce+1]!=="none"&&z[Ce+1]||z[Ce],ht=i&&(Ae==="complete"||Ae==="reset"||Ae in i))),A&&(pe||ht)&&(ht||d||!i)&&(rn(A)?A(E):E.getTrailing(A).forEach(function(ps){return ps.endAnimation()})),L||(de&&!tn&&!hh?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",Q,i._tTime/i._tDur):(de.vars.totalProgress=Q,de.invalidate().restart())):i&&i.totalProgress(Q,!!(tn&&(ze||P)))),u){if(P&&m&&(mt.style[m+I.os2]=fs),!Z)ln(Xl(Sn+Fn*Q));else if(je){if(Nt=!P&&Q>me&&xe+1>X&&X+1>=Ki(U,I),v)if(!P&&(Oe||Nt)){var Ut=_r(u,!0),Bt=X-ye;wy(u,Ge,Ut.top+(I===St?Bt:0)+Dt,Ut.left+(I===St?0:Bt)+Dt)}else wy(u,mt);aa(Oe||Nt?yi:ei),ti&&Q<1&&Oe||ln(Sn+(Q===1&&!Nt?Fn:0))}}y&&!Te.tween&&!tn&&!hh&&jt.restart(!0),a&&(pe||x&&Q&&(Q<1||!Bp))&&tc(a.targets).forEach(function(ps){return ps.classList[Oe||x?"add":"remove"](a.className)}),o&&!L&&!P&&o(E),je&&!tn?(L&&(ht&&(Ae==="complete"?i.pause().totalProgress(1):Ae==="reset"?i.restart(!0).pause():Ae==="restart"?i.restart(!0):i[Ae]()),o&&o(E)),(pe||!Bp)&&(c&&pe&&Vp(E,c),q[Ce]&&Vp(E,q[Ce]),x&&(Q===1?E.kill(!1,1):q[Ce]=0),pe||(Ce=Q===1?1:3,q[Ce]&&Vp(E,q[Ce]))),w&&!Oe&&Math.abs(E.getVelocity())>($l(w)?w:2500)&&(Gl(E.callbackAnimation),de?de.progress(1):Gl(i,Ae==="reverse"?1:!Q,1))):L&&o&&!tn&&o(E)}if(xi){var Xt=S?X/S.duration()*(S._caScrollDist||0):X;Pr(Xt+(D._isFlipped?1:0)),xi(Xt)}ee&&ee(-X/S.duration()*(S._caScrollDist||0))}},E.enable=function(P,V){E.enabled||(E.enabled=!0,Lt(U,"resize",ql),K||Lt(U,"scroll",ia),j&&Lt(r,"refreshInit",j),P!==!1&&(E.progress=He=0,tt=ct=re=$e()),V!==!1&&E.refresh())},E.getTween=function(P){return P&&Te?Te.tween:de},E.setPositions=function(P,V,N,X){if(S){var ne=S.scrollTrigger,Q=S.duration(),me=ne.end-ne.start;P=ne.start+me*P/Q,V=ne.start+me*V/Q}E.refresh(!1,!1,{start:gy(P,N&&!!E._startClamp),end:gy(V,N&&!!E._endClamp)},X),E.update()},E.adjustPinSpacing=function(P){if(ut&&P){var V=ut.indexOf(I.d)+1;ut[V]=parseFloat(ut[V])+P+Dt,ut[1]=parseFloat(ut[1])+P+Dt,aa(ut)}},E.disable=function(P,V){if(E.enabled&&(P!==!1&&E.revert(!0,!0),E.enabled=E.isActive=!1,V||de&&de.pause(),bn=0,lt&&(lt.uncache=1),j&&Ft(r,"refreshInit",j),jt&&(jt.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!K)){for(var N=Me.length;N--;)if(Me[N].scroller===U&&Me[N]!==E)return;Ft(U,"resize",ql),K||Ft(U,"scroll",ia)}},E.kill=function(P,V){E.disable(P,V),de&&!V&&de.kill(),l&&delete qp[l];var N=Me.indexOf(E);N>=0&&Me.splice(N,1),N===_n&&bh>0&&_n--,N=0,Me.forEach(function(X){return X.scroller===E.scroller&&(N=1)}),N||vn||(E.scroll.rec=0),i&&(i.scrollTrigger=null,P&&i.revert({kill:!1}),V||i.kill()),fe&&[fe,Wt,D,et].forEach(function(X){return X.parentNode&&X.parentNode.removeChild(X)}),ec===E&&(ec=0),u&&(lt&&(lt.uncache=1),N=0,Me.forEach(function(X){return X.pin===u&&N++}),N||(lt.spacer=0)),n.onKill&&n.onKill(E)},Me.push(E),E.enable(!1,!1),M&&M(E),i&&i.add&&!nt){var B=E.update;E.update=function(){E.update=B,be.cache++,ye||xe||E.refresh()},J.delayedCall(.01,E.update),nt=.01,ye=xe=0}else E.refresh();u&&mC()},r.register=function(n){return ra||(J=n||Oy(),Ly()&&window.document&&r.enable(),ra=jl),ra},r.defaults=function(n){if(n)for(var i in n)mh[i]=n[i];return mh},r.disable=function(n,i){jl=0,Me.forEach(function(o){return o[i?"kill":"disable"](n)}),Ft(Ee,"wheel",ia),Ft(Qe,"scroll",ia),clearInterval(uh),Ft(Qe,"touchcancel",Zi),Ft(Ge,"touchstart",Zi),fh(Ft,Qe,"pointerdown,touchstart,mousedown",_y),fh(Ft,Qe,"pointerup,touchend,mouseup",vy),wh.kill(),dh(Ft);for(var s=0;s<be.length;s+=3)ph(Ft,be[s],be[s+1]),ph(Ft,be[s],be[s+2])},r.enable=function(){if(Ee=window,Qe=document,qn=Qe.documentElement,Ge=Qe.body,J&&(tc=J.utils.toArray,Yl=J.utils.clamp,Xp=J.core.context||Zi,Up=J.core.suppressOverwrites||Zi,Jp=Ee.history.scrollRestoration||"auto",Yp=Ee.pageYOffset||0,J.core.globals("ScrollTrigger",r),Ge)){jl=1,oa=document.createElement("div"),oa.style.height="100vh",oa.style.position="absolute",Wy(),lC(),pt.register(J),r.isTouch=pt.isTouch,Jr=pt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),jp=pt.isTouch===1,Lt(Ee,"wheel",ia),Kp=[Ee,Qe,qn,Ge],J.matchMedia?(r.matchMedia=function(c){var h=J.matchMedia(),d;for(d in c)h.add(d,c[d]);return h},J.addEventListener("matchMediaInit",function(){return rm()}),J.addEventListener("matchMediaRevert",function(){return Hy()}),J.addEventListener("matchMedia",function(){js(0,1),Ks("matchMedia")}),J.matchMedia().add("(orientation: portrait)",function(){return zp(),zp})):console.warn("Requires GSAP 3.11.0 or later"),zp(),Lt(Qe,"scroll",ia);var n=Ge.hasAttribute("style"),i=Ge.style,s=i.borderTopStyle,o=J.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=_r(Ge),St.m=Math.round(a.top+St.sc())||0,en.m=Math.round(a.left+en.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Ge.setAttribute("style",""),Ge.removeAttribute("style")),uh=setInterval(Sy,250),J.delayedCall(.5,function(){return hh=0}),Lt(Qe,"touchcancel",Zi),Lt(Ge,"touchstart",Zi),fh(Lt,Qe,"pointerdown,touchstart,mousedown",_y),fh(Lt,Qe,"pointerup,touchend,mouseup",vy),Wp=J.utils.checkPrefix("transform"),Mh.push(Wp),ra=nn(),wh=J.delayedCall(.2,js).pause(),sa=[Qe,"visibilitychange",function(){var c=Ee.innerWidth,h=Ee.innerHeight;Qe.hidden?(fy=c,py=h):(fy!==c||py!==h)&&ql()},Qe,"DOMContentLoaded",js,Ee,"load",js,Ee,"resize",ql],dh(Lt),Me.forEach(function(c){return c.enable(0,1)}),l=0;l<be.length;l+=3)ph(Ft,be[l],be[l+1]),ph(Ft,be[l],be[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Bp=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(uh)||(uh=i)&&setInterval(Sy,i),"ignoreMobileResize"in n&&(jp=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(dh(Ft)||dh(Lt,n.autoRefreshEvents||"none"),Py=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=mn(n),o=be.indexOf(s),a=Ys(s);~o&&be.splice(o,a?6:2),i&&(a?Ei.unshift(Ee,i,Ge,i,qn,i):Ei.unshift(s,i))},r.clearMatchMedia=function(n){Me.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=($n(n)?mn(n):n).getBoundingClientRect(),a=o[s?Xs:$s]*i||0;return s?o.right-a>0&&o.left+a<Ee.innerWidth:o.bottom-a>0&&o.top+a<Ee.innerHeight},r.positionInViewport=function(n,i,s){$n(n)&&(n=mn(n));var o=n.getBoundingClientRect(),a=o[s?Xs:$s],l=i==null?a/2:i in Ah?Ah[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Ee.innerWidth:(o.top+l)/Ee.innerHeight},r.killAll=function(n){if(Me.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Zs.killAll||[];Zs={},i.forEach(function(s){return s()})}},r}();_e.version="3.12.7";_e.saveStyles=function(r){return r?tc(r).forEach(function(e){if(e&&e.style){var t=Xn.indexOf(e);t>=0&&Xn.splice(t,5),Xn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),J.core.getCache(e),Xp())}}):Xn};_e.revert=function(r,e){return rm(!r,e)};_e.create=function(r,e){return new _e(r,e)};_e.refresh=function(r){return r?ql(!0):(ra||_e.register())&&js(!0)};_e.update=function(r){return++be.cache&&vr(r===!0?2:0)};_e.clearScrollMemory=Gy;_e.maxScroll=function(r,e){return Ki(r,e?en:St)};_e.getScrollFunc=function(r,e){return mr(mn(r),e?en:St)};_e.getById=function(r){return qp[r]};_e.getAll=function(){return Me.filter(function(r){return r.vars.id!=="ScrollSmoother"})};_e.isScrolling=function(){return!!di};_e.snapDirectional=im;_e.addEventListener=function(r,e){var t=Zs[r]||(Zs[r]=[]);~t.indexOf(e)||t.push(e)};_e.removeEventListener=function(r,e){var t=Zs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};_e.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var d=[],f=[],u=J.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(m){d.length||u.restart(!0),d.push(m.trigger),f.push(m),s<=d.length&&u.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&rn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return rn(s)&&(s=s(),Lt(_e,"refresh",function(){return s=e.batchMax()})),tc(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(_e.create(c))}),t};var Ty=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Gp=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(pt.isTouch?" pinch-zoom":""):"none",e===qn&&r(Ge,t)},yh={auto:1,scroll:1},xC=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||J.core.getCache(s),a=nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ge&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(yh[(l=hi(s)).overflowY]||yh[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ys(s)&&(yh[(l=hi(s)).overflowY]||yh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Xy=function(e,t,n,i){return pt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&xC,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Lt(Qe,pt.eventTypes[0],Dy,!1,!0)},onDisable:function(){return Ft(Qe,pt.eventTypes[0],Dy,!0)}})},SC=/(input|label|select|textarea)/i,Ay,Dy=function(e){var t=SC.test(e.target.tagName);(t||Ay)&&(e._gsapAllow=!0,Ay=t)},bC=function(e){Ws(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=mn(e.target)||qn,h=J.core.globals().ScrollSmoother,d=h&&h.get(),f=Jr&&(e.content&&mn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),u=mr(c,St),m=mr(c,en),p=1,g=(pt.isTouch&&Ee.visualViewport?Ee.visualViewport.scale*Ee.visualViewport.width:Ee.outerWidth)/Ee.innerWidth,_=0,b=rn(i)?function(){return i(a)}:function(){return i||2.8},x,y,v=Xy(c,e.type,!0,s),T=function(){return y=!1},S=Zi,w=Zi,A=function(){l=Ki(c,St),w=Yl(Jr?1:0,l),n&&(S=Yl(0,Ki(c,en))),x=qs},I=function(){f._gsap.y=Xl(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},L=function(){if(y){requestAnimationFrame(T);var te=Xl(a.deltaY/2),ae=w(u.v-te);if(f&&ae!==u.v+u.offset){u.offset=ae-u.v;var E=Xl((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+E+", 0, 1)",f._gsap.y=E+"px",u.cacheID=be.cache,vr()}return!0}u.offset&&I(),y=!0},U,O,K,Z,q=function(){A(),U.isActive()&&U.vars.scrollY>l&&(u()>l?U.progress(1)&&u(l):U.resetTo("scrollY",l))};return f&&J.set(f,{y:"+=0"}),e.ignoreCheck=function(z){return Jr&&z.type==="touchmove"&&L(z)||p>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){y=!1;var z=p;p=Xl((Ee.visualViewport&&Ee.visualViewport.scale||1)/g),U.pause(),z!==p&&Gp(c,p>1.01?!0:n?!1:"x"),O=m(),K=u(),A(),x=qs},e.onRelease=e.onGestureStart=function(z,te){if(u.offset&&I(),!te)Z.restart(!0);else{be.cache++;var ae=b(),E,j;n&&(E=m(),j=E+ae*.05*-z.velocityX/.227,ae*=Ty(m,E,j,Ki(c,en)),U.vars.scrollX=S(j)),E=u(),j=E+ae*.05*-z.velocityY/.227,ae*=Ty(u,E,j,Ki(c,St)),U.vars.scrollY=w(j),U.invalidate().duration(ae).play(.01),(Jr&&U.vars.scrollY>=l||E>=l-1)&&J.to({},{onUpdate:q,duration:ae})}o&&o(z)},e.onWheel=function(){U._ts&&U.pause(),nn()-_>1e3&&(x=0,_=nn())},e.onChange=function(z,te,ae,E,j){if(qs!==x&&A(),te&&n&&m(S(E[2]===te?O+(z.startX-z.x):m()+te-E[1])),ae){u.offset&&I();var le=j[2]===ae,he=le?K+z.startY-z.y:u()+ae-j[1],re=w(he);le&&he!==re&&(K+=re-he),u(re)}(ae||te)&&vr()},e.onEnable=function(){Gp(c,n?!1:"x"),_e.addEventListener("refresh",q),Lt(Ee,"resize",q),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),v.enable()},e.onDisable=function(){Gp(c,!0),Ft(Ee,"resize",q),_e.removeEventListener("refresh",q),v.kill()},e.lockAxis=e.lockAxis!==!1,a=new pt(e),a.iOS=Jr,Jr&&!u()&&u(1),Jr&&J.ticker.add(Zi),Z=a._dc,U=J.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:jy(u,u(),function(){return U.pause()})},onUpdate:vr,onComplete:Z.vars.onComplete}),a};_e.sort=function(r){if(rn(r))return Me.sort(r);var e=Ee.pageYOffset||0;return _e.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Ee.innerHeight}),Me.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};_e.observe=function(r){return new pt(r)};_e.normalizeScroll=function(r){if(typeof r>"u")return gn;if(r===!0&&gn)return gn.enable();if(r===!1){gn&&gn.kill(),gn=r;return}var e=r instanceof pt?r:bC(r);return gn&&gn.target===e.target&&gn.kill(),Ys(e.target)&&(gn=e),e};_e.core={_getVelocityProp:ch,_inputObserver:Xy,_scrollers:be,_proxies:Ei,bridge:{ss:function(){di||Ks("scrollStart"),di=nn()},ref:function(){return tn}}};Oy()&&J.registerPlugin(_e);var yr,Js,lm,Ih,ic,Rh,Ph,rc,wi="transform",am=wi+"Origin",$y,qy=function(e){var t=e.ownerDocument||e;for(!(wi in e.style)&&("msTransform"in e.style)&&(wi="msTransform",am=wi+"Origin");t.parentNode&&(t=t.parentNode););if(Js=window,Ph=new Qr,t){yr=t,lm=t.documentElement,Ih=t.body,rc=yr.createElementNS("http://www.w3.org/2000/svg","g"),rc.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),$y=i.offsetParent!==n,s.removeChild(n))}return t},MC=function(e){for(var t,n;e&&e!==Ih;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},Yy=[],Zy=[],EC=function(){return Js.pageYOffset||yr.scrollTop||lm.scrollTop||Ih.scrollTop||0},wC=function(){return Js.pageXOffset||yr.scrollLeft||lm.scrollLeft||Ih.scrollLeft||0},cm=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},CC=function r(e){if(Js.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},sm=function r(e,t){if(e.parentNode&&(yr||qy(e))){var n=cm(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=yr.createElementNS?yr.createElementNS(i.replace(/^https/,"http"),s):yr.createElement(s);return t&&(n?(Rh||(Rh=r(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),Rh.appendChild(c)):(ic||(ic=r(e),ic.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",ic.appendChild(c))),c}throw"Need document and parent."},TC=function(e){for(var t=new Qr,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},AC=function(e){var t=e.getCTM(),n;return t||(n=e.style[wi],e.style[wi]="none",e.appendChild(rc),t=rc.getCTM(),e.removeChild(rc),n?e.style[wi]=n:e.style.removeProperty(wi.replace(/([A-Z])/g,"-$1").toLowerCase())),t||Ph.clone()},DC=function(e,t){var n=cm(e),i=e===n,s=n?Yy:Zy,o=e.parentNode,a,l,c,h,d,f;if(e===Js)return e;if(s.length||s.push(sm(e,1),sm(e,2),sm(e,3)),a=n?Rh:ic,n)i?(c=AC(e),h=-c.e/c.a,d=-c.f/c.d,l=Ph):e.getBBox?(c=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?TC(l):l.getItem(0).matrix:Ph,h=l.a*c.x+l.c*c.y,d=l.b*c.x+l.d*c.y):(l=new Qr,h=d=0),t&&e.tagName.toLowerCase()==="g"&&(h=d=0),(i?n:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+h)+","+(l.f+d)+")");else{if(h=d=0,$y)for(l=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(Js.getComputedStyle(c)[wi]+"").length>4&&(h=c.offsetLeft,d=c.offsetTop,c=0);if(f=Js.getComputedStyle(e),f.position!=="absolute"&&f.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)h+=o.scrollLeft||0,d+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=e.offsetTop-d+"px",c.left=e.offsetLeft-h+"px",c[wi]=f[wi],c[am]=f[am],c.position=f.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},om=function(e,t,n,i,s,o,a){return e.a=t,e.b=n,e.c=i,e.d=s,e.e=o,e.f=a,e},Qr=function(){function r(t,n,i,s,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),om(this,t,n,i,s,o,a)}var e=r.prototype;return e.inverse=function(){var n=this.a,i=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*s||1e-10;return om(this,o/c,-i/c,-s/c,n/c,(s*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,h=n.a,d=n.c,f=n.b,u=n.d,m=n.e,p=n.f;return om(this,h*i+f*o,h*s+f*a,d*i+u*o,d*s+u*a,l+m*i+p*o,c+m*s+p*a)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var s=n.x,o=n.y,a=this.a,l=this.b,c=this.c,h=this.d,d=this.e,f=this.f;return i.x=s*a+o*c+d||0,i.y=s*l+o*h+f||0,i},r}();function yn(r,e,t,n){if(!r||!r.parentNode||(yr||qy(r)).documentElement===r)return new Qr;var i=MC(r),s=cm(r),o=s?Yy:Zy,a=DC(r,t),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),d=a.parentNode,f=!n&&CC(r),u=new Qr((c.left-l.left)/100,(c.top-l.top)/100,(h.left-l.left)/100,(h.top-l.top)/100,l.left+(f?0:wC()),l.top+(f?0:EC()));if(d.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?u.inverse():u}function Ky(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function RC(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Fe,Je,Yn,Ai,br,um,Sr,mm,oc,is,lx,gm,hc,xm,ac,Ci,lc,Oh,cx,_m,Uh=0,ux=function(){return typeof window<"u"},hx=function(){return Fe||ux()&&(Fe=window.gsap)&&Fe.registerPlugin&&Fe},ns=function(e){return typeof e=="function"},cc=function(e){return typeof e=="object"},Ti=function(e){return typeof e>"u"},Nh=function(){return!1},uc="transform",vm="transformOrigin",es=function(e){return Math.round(e*1e4)/1e4},sc=Array.isArray,Fh=function(e,t){var n=Yn.createElementNS?Yn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Yn.createElement(e);return n.style?n:Yn.createElement(e)},Jy=180/Math.PI,Qs=1e20,PC=new Qr,ts=Date.now||function(){return new Date().getTime()},to=[],ha={},IC=0,FC=/^(?:a|input|textarea|button|select)$/i,Qy=0,ca={},xr={},dx=function(e,t){var n={},i;for(i in e)n[i]=t?e[i]*t:e[i];return n},LC=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ex=function r(e,t){for(var n=e.length,i;n--;)t?e[n].style.touchAction=t:e[n].style.removeProperty("touch-action"),i=e[n].children,i&&i.length&&r(i,t)},fx=function(){return to.forEach(function(e){return e()})},OC=function(e){to.push(e),to.length===1&&Fe.ticker.add(fx)},tx=function(){return!to.length&&Fe.ticker.remove(fx)},nx=function(e){for(var t=to.length;t--;)to[t]===e&&to.splice(t,1);Fe.to(tx,{overwrite:!0,delay:15,duration:0,onComplete:tx,data:"_draggable"})},NC=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Rt=function(e,t,n,i){if(e.addEventListener){var s=hc[t];i=i||(lx?{passive:!1}:null),e.addEventListener(s||t,n,i),s&&t!==s&&e.addEventListener(t,n,i)}},Mt=function(e,t,n,i){if(e.removeEventListener){var s=hc[t];e.removeEventListener(s||t,n,i),s&&t!==s&&e.removeEventListener(t,n,i)}},fi=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},UC=function(e,t){for(var n=e.length;n--;)if(e[n].identifier===t)return!0},BC=function r(e){xm=e.touches&&Uh<e.touches.length,Mt(e.target,"touchend",r)},ix=function(e){xm=e.touches&&Uh<e.touches.length,Rt(e.target,"touchend",BC)},da=function(e){return Je.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},fa=function(e){return Je.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},rx=function r(e,t){Rt(e,"scroll",t),pa(e.parentNode)||r(e.parentNode,t)},sx=function r(e,t){Mt(e,"scroll",t),pa(e.parentNode)||r(e.parentNode,t)},pa=function(e){return!e||e===Ai||e.nodeType===9||e===Yn.body||e===Je||!e.nodeType||!e.parentNode},ox=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return Math.max(0,pa(e)?Math.max(Ai[i],br[i])-(Je["inner"+n]||Ai[s]||br[s]):e[i]-e[s])},hm=function r(e,t){var n=ox(e,"x"),i=ox(e,"y");pa(e)?e=xr:r(e.parentNode,t),e._gsMaxScrollX=n,e._gsMaxScrollY=i,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},dm=function(e,t,n){var i=e.style;i&&(Ti(i[t])&&(t=oc(t,e)||t),n==null?i.removeProperty&&i.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):i[t]=n)},dc=function(e){return Je.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},eo={},ua=function(e){if(e===Je)return eo.left=eo.top=0,eo.width=eo.right=Ai.clientWidth||e.innerWidth||br.clientWidth||0,eo.height=eo.bottom=(e.innerHeight||0)-20<Ai.clientHeight?Ai.clientHeight:e.innerHeight||br.clientHeight||0,eo;var t=e.ownerDocument||Yn,n=Ti(e.pageX)?!e.nodeType&&!Ti(e.left)&&!Ti(e.top)?e:is(e)[0].getBoundingClientRect():{left:e.pageX-fa(t),top:e.pageY-da(t),right:e.pageX-fa(t)+1,bottom:e.pageY-da(t)+1};return Ti(n.right)&&!Ti(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):Ti(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},_t=function(e,t,n){var i=e.vars,s=i[n],o=e._listeners[t],a;return ns(s)&&(a=s.apply(i.callbackScope||e,i[n+"Params"]||[e.pointerEvent])),o&&e.dispatchEvent(t)===!1&&(a=!1),a},ax=function(e,t){var n=is(e)[0],i,s,o;return!n.nodeType&&n!==Je?Ti(e.left)?(s=e.min||e.minX||e.minRotation||0,i=e.min||e.minY||0,{left:s,top:i,width:(e.max||e.maxX||e.maxRotation||0)-s,height:(e.max||e.maxY||0)-i}):(o={x:0,y:0},{left:e.left-o.x,top:e.top-o.y,width:e.width,height:e.height}):kC(n,t)},pi={},kC=function(e,t){t=is(t)[0];var n=e.getBBox&&e.ownerSVGElement,i=e.ownerDocument||Yn,s,o,a,l,c,h,d,f,u,m,p,g,_;if(e===Je)a=da(i),s=fa(i),o=s+(i.documentElement.clientWidth||e.innerWidth||i.body.clientWidth||0),l=a+((e.innerHeight||0)-20<i.documentElement.clientHeight?i.documentElement.clientHeight:e.innerHeight||i.body.clientHeight||0);else{if(t===Je||Ti(t))return e.getBoundingClientRect();s=a=0,n?(m=e.getBBox(),p=m.width,g=m.height):(e.viewBox&&(m=e.viewBox.baseVal)&&(s=m.x||0,a=m.y||0,p=m.width,g=m.height),p||(_=dc(e),m=_.boxSizing==="border-box",p=(parseFloat(_.width)||e.clientWidth||0)+(m?0:parseFloat(_.borderLeftWidth)+parseFloat(_.borderRightWidth)),g=(parseFloat(_.height)||e.clientHeight||0)+(m?0:parseFloat(_.borderTopWidth)+parseFloat(_.borderBottomWidth)))),o=p,l=g}return e===t?{left:s,top:a,width:o-s,height:l-a}:(c=yn(t,!0).multiply(yn(e)),h=c.apply({x:s,y:a}),d=c.apply({x:o,y:a}),f=c.apply({x:o,y:l}),u=c.apply({x:s,y:l}),s=Math.min(h.x,d.x,f.x,u.x),a=Math.min(h.y,d.y,f.y,u.y),{left:s,top:a,width:Math.max(h.x,d.x,f.x,u.x)-s,height:Math.max(h.y,d.y,f.y,u.y)-a})},fm=function(e,t,n,i,s,o){var a={},l,c,h;if(t)if(s!==1&&t instanceof Array){if(a.end=l=[],h=t.length,cc(t[0]))for(c=0;c<h;c++)l[c]=dx(t[c],s);else for(c=0;c<h;c++)l[c]=t[c]*s;n+=1.1,i-=1.1}else ns(t)?a.end=function(d){var f=t.call(e,d),u,m;if(s!==1)if(cc(f)){u={};for(m in f)u[m]=f[m]*s;f=u}else f*=s;return f}:a.end=t;return(n||n===0)&&(a.max=n),(i||i===0)&&(a.min=i),o&&(a.velocity=0),a},VC=function r(e){var t;return!e||!e.getAttribute||e===br?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(FC.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:r(e.parentNode)},Lh=function(e,t){for(var n=e.length,i;n--;)i=e[n],i.ondragstart=i.onselectstart=t?null:Nh,Fe.set(i,{lazy:!0,userSelect:t?"text":"none"})},zC=function r(e){if(dc(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},px,ym,HC=function(e,t){e=Fe.utils.toArray(e)[0],t=t||{};var n=document.createElement("div"),i=n.style,s=e.firstChild,o=0,a=0,l=e.scrollTop,c=e.scrollLeft,h=e.scrollWidth,d=e.scrollHeight,f=0,u=0,m=0,p,g,_,b,x,y;px&&t.force3D!==!1?(x="translate3d(",y="px,0px)"):uc&&(x="translate(",y="px)"),this.scrollTop=function(v,T){if(!arguments.length)return-this.top();this.top(-v,T)},this.scrollLeft=function(v,T){if(!arguments.length)return-this.left();this.left(-v,T)},this.left=function(v,T){if(!arguments.length)return-(e.scrollLeft+a);var S=e.scrollLeft-c,w=a;if((S>2||S<-2)&&!T){c=e.scrollLeft,Fe.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-c),t.onKill&&t.onKill();return}v=-v,v<0?(a=v-.5|0,v=0):v>u?(a=v-u|0,v=u):a=0,(a||w)&&(this._skip||(i[uc]=x+-a+"px,"+-o+y),a+f>=0&&(i.paddingRight=a+f+"px")),e.scrollLeft=v|0,c=e.scrollLeft},this.top=function(v,T){if(!arguments.length)return-(e.scrollTop+o);var S=e.scrollTop-l,w=o;if((S>2||S<-2)&&!T){l=e.scrollTop,Fe.killTweensOf(this,{top:1,scrollTop:1}),this.top(-l),t.onKill&&t.onKill();return}v=-v,v<0?(o=v-.5|0,v=0):v>m?(o=v-m|0,v=m):o=0,(o||w)&&(this._skip||(i[uc]=x+-a+"px,"+-o+y)),e.scrollTop=v|0,l=e.scrollTop},this.maxScrollTop=function(){return m},this.maxScrollLeft=function(){return u},this.disable=function(){for(s=n.firstChild;s;)b=s.nextSibling,e.appendChild(s),s=b;e===n.parentNode&&e.removeChild(n)},this.enable=function(){if(s=e.firstChild,s!==n){for(;s;)b=s.nextSibling,n.appendChild(s),s=b;e.appendChild(n),this.calibrate()}},this.calibrate=function(v){var T=e.clientWidth===p,S,w,A;l=e.scrollTop,c=e.scrollLeft,!(T&&e.clientHeight===g&&n.offsetHeight===_&&h===e.scrollWidth&&d===e.scrollHeight&&!v)&&((o||a)&&(w=this.left(),A=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),S=dc(e),(!T||v)&&(i.display="block",i.width="auto",i.paddingRight="0px",f=Math.max(0,e.scrollWidth-e.clientWidth),f&&(f+=parseFloat(S.paddingLeft)+(ym?parseFloat(S.paddingRight):0))),i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.boxSizing="content-box",i.width="100%",i.paddingRight=f+"px",ym&&(i.paddingBottom=S.paddingBottom),p=e.clientWidth,g=e.clientHeight,h=e.scrollWidth,d=e.scrollHeight,u=e.scrollWidth-p,m=e.scrollHeight-g,_=n.offsetHeight,i.display="block",(w||A)&&(this.left(w),this.top(A)))},this.content=n,this.element=e,this._skip=!1,this.enable()},pm=function(e){if(ux()&&document.body){var t=window&&window.navigator;Je=window,Yn=document,Ai=Yn.documentElement,br=Yn.body,um=Fh("div"),Oh=!!window.PointerEvent,Sr=Fh("div"),Sr.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",lc=Sr.style.cursor==="grab"?"grab":"move",ac=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,gm="ontouchstart"in Ai&&"orientation"in Je||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),ym=function(){var n=Fh("div"),i=Fh("div"),s=i.style,o=br,a;return s.display="inline-block",s.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(i),o.appendChild(n),a=i.offsetHeight+18>n.scrollHeight,o.removeChild(n),a}(),hc=function(n){for(var i=n.split(","),s=("onpointerdown"in um?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in um?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),o={},a=4;--a>-1;)o[i[a]]=s[a],o[s[a]]=i[a];try{Ai.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){lx=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),Rt(Yn,"touchcancel",Nh),Rt(Je,"touchmove",Nh),br&&br.addEventListener("touchstart",Nh),Rt(Yn,"contextmenu",function(){for(var n in ha)ha[n].isPressed&&ha[n].endDrag()}),Fe=mm=hx()}Fe?(Ci=Fe.plugins.inertia,cx=Fe.core.context||function(){},oc=Fe.utils.checkPrefix,uc=oc(uc),vm=oc(vm),is=Fe.utils.toArray,_m=Fe.core.getStyleSaver,px=!!oc("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},GC=function(){function r(t){this._listeners={},this.target=t||this}var e=r.prototype;return e.addEventListener=function(n,i){var s=this._listeners[n]||(this._listeners[n]=[]);~s.indexOf(i)||s.push(i)},e.removeEventListener=function(n,i){var s=this._listeners[n],o=s&&s.indexOf(i);o>=0&&s.splice(o,1)},e.dispatchEvent=function(n){var i=this,s;return(this._listeners[n]||[]).forEach(function(o){return o.call(i,{type:n,target:i.target})===!1&&(s=!1)}),s},r}(),ma=function(r){RC(e,r);function e(t,n){var i;i=r.call(this)||this,mm||pm(1),t=is(t)[0],i.styles=_m&&_m(t,"transform,left,top"),Ci||(Ci=Fe.plugins.inertia),i.vars=n=dx(n||{}),i.target=t,i.x=i.y=i.rotation=0,i.dragResistance=parseFloat(n.dragResistance)||0,i.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,i.lockAxis=n.lockAxis,i.autoScroll=n.autoScroll||0,i.lockedAxis=null,i.allowEventDefault=!!n.allowEventDefault,Fe.getProperty(t,"x");var s=(n.type||"x,y").toLowerCase(),o=~s.indexOf("x")||~s.indexOf("y"),a=s.indexOf("rotation")!==-1,l=a?"rotation":o?"x":"left",c=o?"y":"top",h=!!(~s.indexOf("x")||~s.indexOf("left")||s==="scroll"),d=!!(~s.indexOf("y")||~s.indexOf("top")||s==="scroll"),f=n.minimumMovement||2,u=Ky(i),m=is(n.trigger||n.handle||t),p={},g=0,_=!1,b=n.autoScrollMarginTop||40,x=n.autoScrollMarginRight||40,y=n.autoScrollMarginBottom||40,v=n.autoScrollMarginLeft||40,T=n.clickableTest||VC,S=0,w=t._gsap||Fe.core.getCache(t),A=zC(t),I=function(M,k){return parseFloat(w.get(t,M,k))},L=t.ownerDocument||Yn,U,O,K,Z,q,z,te,ae,E,j,le,he,re,ze,He,$e,Te,lt,Be,tt,ct,ye,xe,fe,Wt,D,et,In,Qn,nt,rt,yi,ei,mt=function(M){return fi(M),M.stopImmediatePropagation&&M.stopImmediatePropagation(),!1},Ct=function ee(M){if(u.autoScroll&&u.isDragging&&(_||Te)){var k=t,C=u.autoScroll*15,R,B,P,V,N,X,ne,Q;for(_=!1,xr.scrollTop=Je.pageYOffset!=null?Je.pageYOffset:L.documentElement.scrollTop!=null?L.documentElement.scrollTop:L.body.scrollTop,xr.scrollLeft=Je.pageXOffset!=null?Je.pageXOffset:L.documentElement.scrollLeft!=null?L.documentElement.scrollLeft:L.body.scrollLeft,V=u.pointerX-xr.scrollLeft,N=u.pointerY-xr.scrollTop;k&&!B;)B=pa(k.parentNode),R=B?xr:k.parentNode,P=B?{bottom:Math.max(Ai.clientHeight,Je.innerHeight||0),right:Math.max(Ai.clientWidth,Je.innerWidth||0),left:0,top:0}:R.getBoundingClientRect(),X=ne=0,d&&(Q=R._gsMaxScrollY-R.scrollTop,Q<0?ne=Q:N>P.bottom-y&&Q?(_=!0,ne=Math.min(Q,C*(1-Math.max(0,P.bottom-N)/y)|0)):N<P.top+b&&R.scrollTop&&(_=!0,ne=-Math.min(R.scrollTop,C*(1-Math.max(0,N-P.top)/b)|0)),ne&&(R.scrollTop+=ne)),h&&(Q=R._gsMaxScrollX-R.scrollLeft,Q<0?X=Q:V>P.right-x&&Q?(_=!0,X=Math.min(Q,C*(1-Math.max(0,P.right-V)/x)|0)):V<P.left+v&&R.scrollLeft&&(_=!0,X=-Math.min(R.scrollLeft,C*(1-Math.max(0,V-P.left)/v)|0)),X&&(R.scrollLeft+=X)),B&&(X||ne)&&(Je.scrollTo(R.scrollLeft,R.scrollTop),On(u.pointerX+X,u.pointerY+ne)),k=R}if(Te){var me=u.x,Oe=u.y;a?(u.deltaX=me-parseFloat(w.rotation),u.rotation=me,w.rotation=me+"deg",w.renderTransform(1,w)):O?(d&&(u.deltaY=Oe-O.top(),O.top(Oe)),h&&(u.deltaX=me-O.left(),O.left(me))):o?(d&&(u.deltaY=Oe-parseFloat(w.y),w.y=Oe+"px"),h&&(u.deltaX=me-parseFloat(w.x),w.x=me+"px"),w.renderTransform(1,w)):(d&&(u.deltaY=Oe-parseFloat(t.style.top||0),t.style.top=Oe+"px"),h&&(u.deltaX=me-parseFloat(t.style.left||0),t.style.left=me+"px")),ae&&!M&&!In&&(In=!0,_t(u,"drag","onDrag")===!1&&(h&&(u.x-=u.deltaX),d&&(u.y-=u.deltaY),ee(!0)),In=!1)}Te=!1},We=function(M,k){var C=u.x,R=u.y,B,P;t._gsap||(w=Fe.core.getCache(t)),w.uncache&&Fe.getProperty(t,"x"),o?(u.x=parseFloat(w.x),u.y=parseFloat(w.y)):a?u.x=u.rotation=parseFloat(w.rotation):O?(u.y=O.top(),u.x=O.left()):(u.y=parseFloat(t.style.top||(P=dc(t))&&P.top)||0,u.x=parseFloat(t.style.left||(P||{}).left)||0),(Be||tt||ct)&&!k&&(u.isDragging||u.isThrowing)&&(ct&&(ca.x=u.x,ca.y=u.y,B=ct(ca),B.x!==u.x&&(u.x=B.x,Te=!0),B.y!==u.y&&(u.y=B.y,Te=!0)),Be&&(B=Be(u.x),B!==u.x&&(u.x=B,a&&(u.rotation=B),Te=!0)),tt&&(B=tt(u.y),B!==u.y&&(u.y=B),Te=!0)),Te&&Ct(!0),M||(u.deltaX=u.x-C,u.deltaY=u.y-R,_t(u,"throwupdate","onThrowUpdate"))},ln=function(M,k,C,R){return k==null&&(k=-Qs),C==null&&(C=Qs),ns(M)?function(B){var P=u.isPressed?1-u.edgeResistance:1;return M.call(u,(B>C?C+(B-C)*P:B<k?k+(B-k)*P:B)*R)*R}:sc(M)?function(B){for(var P=M.length,V=0,N=Qs,X,ne;--P>-1;)X=M[P],ne=X-B,ne<0&&(ne=-ne),ne<N&&X>=k&&X<=C&&(V=P,N=ne);return M[V]}:isNaN(M)?function(B){return B}:function(){return M*R}},Sn=function(M,k,C,R,B,P,V){return P=P&&P<Qs?P*P:Qs,ns(M)?function(N){var X=u.isPressed?1-u.edgeResistance:1,ne=N.x,Q=N.y,me,Oe,Ne;return N.x=ne=ne>C?C+(ne-C)*X:ne<k?k+(ne-k)*X:ne,N.y=Q=Q>B?B+(Q-B)*X:Q<R?R+(Q-R)*X:Q,me=M.call(u,N),me!==N&&(N.x=me.x,N.y=me.y),V!==1&&(N.x*=V,N.y*=V),P<Qs&&(Oe=N.x-ne,Ne=N.y-Q,Oe*Oe+Ne*Ne>P&&(N.x=ne,N.y=Q)),N}:sc(M)?function(N){for(var X=M.length,ne=0,Q=Qs,me,Oe,Ne,Ce;--X>-1;)Ne=M[X],me=Ne.x-N.x,Oe=Ne.y-N.y,Ce=me*me+Oe*Oe,Ce<Q&&(ne=X,Q=Ce);return Q<=P?M[ne]:N}:function(N){return N}},Fn=function(){var M,k,C,R;te=!1,O?(O.calibrate(),u.minX=le=-O.maxScrollLeft(),u.minY=re=-O.maxScrollTop(),u.maxX=j=u.maxY=he=0,te=!0):n.bounds&&(M=ax(n.bounds,t.parentNode),a?(u.minX=le=M.left,u.maxX=j=M.left+M.width,u.minY=re=u.maxY=he=0):!Ti(n.bounds.maxX)||!Ti(n.bounds.maxY)?(M=n.bounds,u.minX=le=M.minX,u.minY=re=M.minY,u.maxX=j=M.maxX,u.maxY=he=M.maxY):(k=ax(t,t.parentNode),u.minX=le=Math.round(I(l,"px")+M.left-k.left),u.minY=re=Math.round(I(c,"px")+M.top-k.top),u.maxX=j=Math.round(le+(M.width-k.width)),u.maxY=he=Math.round(re+(M.height-k.height))),le>j&&(u.minX=j,u.maxX=j=le,le=u.minX),re>he&&(u.minY=he,u.maxY=he=re,re=u.minY),a&&(u.minRotation=le,u.maxRotation=j),te=!0),n.liveSnap&&(C=n.liveSnap===!0?n.snap||{}:n.liveSnap,R=sc(C)||ns(C),a?(Be=ln(R?C:C.rotation,le,j,1),tt=null):C.points?ct=Sn(R?C:C.points,le,j,re,he,C.radius,O?-1:1):(h&&(Be=ln(R?C:C.x||C.left||C.scrollLeft,le,j,O?-1:1)),d&&(tt=ln(R?C:C.y||C.top||C.scrollTop,re,he,O?-1:1))))},fs=function(){u.isThrowing=!1,_t(u,"throwcomplete","onThrowComplete")},ut=function(){u.isThrowing=!1},Pr=function(M,k){var C,R,B,P;M&&Ci?(M===!0&&(C=n.snap||n.liveSnap||{},R=sc(C)||ns(C),M={resistance:(n.throwResistance||n.resistance||1e3)/(a?10:1)},a?M.rotation=fm(u,R?C:C.rotation,j,le,1,k):(h&&(M[l]=fm(u,R?C:C.points||C.x||C.left,j,le,O?-1:1,k||u.lockedAxis==="x")),d&&(M[c]=fm(u,R?C:C.points||C.y||C.top,he,re,O?-1:1,k||u.lockedAxis==="y")),(C.points||sc(C)&&cc(C[0]))&&(M.linkedProps=l+","+c,M.radius=C.radius))),u.isThrowing=!0,P=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-u.edgeResistance+.2:n.overshootTolerance,M.duration||(M.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?P===0||cc(M)&&M.resistance>1e3?0:.5:n.minDuration,overshoot:P}),u.tween=B=Fe.to(O||t,{inertia:M,data:"_draggable",inherit:!1,onComplete:fs,onInterrupt:ut,onUpdate:n.fastMode?_t:We,onUpdateParams:n.fastMode?[u,"onthrowupdate","onThrowUpdate"]:C&&C.radius?[!1,!0]:[]}),n.fastMode||(O&&(O._skip=!0),B.render(1e9,!0,!0),We(!0,!0),u.endX=u.x,u.endY=u.y,a&&(u.endRotation=u.x),B.play(0),We(!0,!0),O&&(O._skip=!1))):te&&u.applyBounds()},ti=function(M){var k=fe,C;fe=yn(t.parentNode,!0),M&&u.isPressed&&!fe.equals(k||new Qr)&&(C=k.inverse().apply({x:K,y:Z}),fe.apply(C,C),K=C.x,Z=C.y),fe.equals(PC)&&(fe=null)},xi=function(){var M=1-u.edgeResistance,k=A?fa(L):0,C=A?da(L):0,R,B,P;o&&(w.x=I(l,"px")+"px",w.y=I(c,"px")+"px",w.renderTransform()),ti(!1),pi.x=u.pointerX-k,pi.y=u.pointerY-C,fe&&fe.apply(pi,pi),K=pi.x,Z=pi.y,Te&&(On(u.pointerX,u.pointerY),Ct(!0)),yi=yn(t),O?(Fn(),z=O.top(),q=O.left()):(ni()?(We(!0,!0),Fn()):u.applyBounds(),a?(R=t.ownerSVGElement?[w.xOrigin-t.getBBox().x,w.yOrigin-t.getBBox().y]:(dc(t)[vm]||"0 0").split(" "),$e=u.rotationOrigin=yn(t).apply({x:parseFloat(R[0])||0,y:parseFloat(R[1])||0}),We(!0,!0),B=u.pointerX-$e.x-k,P=$e.y-u.pointerY+C,q=u.x,z=u.y=Math.atan2(P,B)*Jy):(z=I(c,"px"),q=I(l,"px"))),te&&M&&(q>j?q=j+(q-j)/M:q<le&&(q=le-(le-q)/M),a||(z>he?z=he+(z-he)/M:z<re&&(z=re-(re-z)/M))),u.startX=q=es(q),u.startY=z=es(z)},ni=function(){return u.tween&&u.tween.isActive()},Li=function(){Sr.parentNode&&!ni()&&!u.isDragging&&Sr.parentNode.removeChild(Sr)},Ln=function(M,k){var C;if(!U||u.isPressed||!M||(M.type==="mousedown"||M.type==="pointerdown")&&!k&&ts()-S<30&&hc[u.pointerEvent.type]){rt&&M&&U&&fi(M);return}if(Wt=ni(),ei=!1,u.pointerEvent=M,hc[M.type]?(xe=~M.type.indexOf("touch")?M.currentTarget||M.target:L,Rt(xe,"touchend",st),Rt(xe,"touchmove",de),Rt(xe,"touchcancel",st),Rt(L,"touchstart",ix)):(xe=null,Rt(L,"mousemove",de)),et=null,(!Oh||!xe)&&(Rt(L,"mouseup",st),M&&M.target&&Rt(M.target,"mouseup",st)),ye=T.call(u,M.target)&&n.dragClickables===!1&&!k,ye){Rt(M.target,"change",st),_t(u,"pressInit","onPressInit"),_t(u,"press","onPress"),Lh(m,!0),rt=!1;return}if(D=!xe||h===d||u.vars.allowNativeTouchScrolling===!1||u.vars.allowContextMenu&&M&&(M.ctrlKey||M.which>2)?!1:h?"y":"x",rt=!D&&!u.allowEventDefault,rt&&(fi(M),Rt(Je,"touchforcechange",fi)),M.changedTouches?(M=ze=M.changedTouches[0],He=M.identifier):M.pointerId?He=M.pointerId:ze=He=null,Uh++,OC(Ct),Z=u.pointerY=M.pageY,K=u.pointerX=M.pageX,_t(u,"pressInit","onPressInit"),(D||u.autoScroll)&&hm(t.parentNode),t.parentNode&&u.autoScroll&&!O&&!a&&t.parentNode._gsMaxScrollX&&!Sr.parentNode&&!t.getBBox&&(Sr.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(Sr)),xi(),u.tween&&u.tween.kill(),u.isThrowing=!1,Fe.killTweensOf(O||t,p,!0),O&&Fe.killTweensOf(t,{scrollTo:1},!0),u.tween=u.lockedAxis=null,(n.zIndexBoost||!a&&!O&&n.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),u.isPressed=!0,ae=!!(n.onDrag||u._listeners.drag),E=!!(n.onMove||u._listeners.move),n.cursor!==!1||n.activeCursor)for(C=m.length;--C>-1;)Fe.set(m[C],{cursor:n.activeCursor||n.cursor||(lc==="grab"?"grabbing":lc)});_t(u,"press","onPress")},de=function(M){var k=M,C,R,B,P,V,N;if(!U||xm||!u.isPressed||!M){rt&&M&&U&&fi(M);return}if(u.pointerEvent=M,C=M.changedTouches,C){if(M=C[0],M!==ze&&M.identifier!==He){for(P=C.length;--P>-1&&(M=C[P]).identifier!==He&&M.target!==t;);if(P<0)return}}else if(M.pointerId&&He&&M.pointerId!==He)return;if(xe&&D&&!et&&(pi.x=M.pageX-(A?fa(L):0),pi.y=M.pageY-(A?da(L):0),fe&&fe.apply(pi,pi),R=pi.x,B=pi.y,V=Math.abs(R-K),N=Math.abs(B-Z),(V!==N&&(V>f||N>f)||ac&&D===et)&&(et=V>N&&h?"x":"y",D&&et!==D&&Rt(Je,"touchforcechange",fi),u.vars.lockAxisOnTouchScroll!==!1&&h&&d&&(u.lockedAxis=et==="x"?"y":"x",ns(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,k)),ac&&D===et))){st(k);return}!u.allowEventDefault&&(!D||et&&D!==et)&&k.cancelable!==!1?(fi(k),rt=!0):rt&&(rt=!1),u.autoScroll&&(_=!0),On(M.pageX,M.pageY,E)},On=function(M,k,C){var R=1-u.dragResistance,B=1-u.edgeResistance,P=u.pointerX,V=u.pointerY,N=z,X=u.x,ne=u.y,Q=u.endX,me=u.endY,Oe=u.endRotation,Ne=Te,Ce,Ae,je,pe,Nt,ht;u.pointerX=M,u.pointerY=k,A&&(M-=fa(L),k-=da(L)),a?(pe=Math.atan2($e.y-k,M-$e.x)*Jy,Nt=u.y-pe,Nt>180?(z-=360,u.y=pe):Nt<-180&&(z+=360,u.y=pe),u.x!==q||Math.max(Math.abs(K-M),Math.abs(Z-k))>f?(u.y=pe,je=q+(z-pe)*R):je=q):(fe&&(ht=M*fe.a+k*fe.c+fe.e,k=M*fe.b+k*fe.d+fe.f,M=ht),Ae=k-Z,Ce=M-K,Ae<f&&Ae>-f&&(Ae=0),Ce<f&&Ce>-f&&(Ce=0),(u.lockAxis||u.lockedAxis)&&(Ce||Ae)&&(ht=u.lockedAxis,ht||(u.lockedAxis=ht=h&&Math.abs(Ce)>Math.abs(Ae)?"y":d?"x":null,ht&&ns(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,u.pointerEvent)),ht==="y"?Ae=0:ht==="x"&&(Ce=0)),je=es(q+Ce*R),pe=es(z+Ae*R)),(Be||tt||ct)&&(u.x!==je||u.y!==pe&&!a)&&(ct&&(ca.x=je,ca.y=pe,ht=ct(ca),je=es(ht.x),pe=es(ht.y)),Be&&(je=es(Be(je))),tt&&(pe=es(tt(pe)))),te&&(je>j?je=j+Math.round((je-j)*B):je<le&&(je=le+Math.round((je-le)*B)),a||(pe>he?pe=Math.round(he+(pe-he)*B):pe<re&&(pe=Math.round(re+(pe-re)*B)))),(u.x!==je||u.y!==pe&&!a)&&(a?(u.endRotation=u.x=u.endX=je,Te=!0):(d&&(u.y=u.endY=pe,Te=!0),h&&(u.x=u.endX=je,Te=!0)),!C||_t(u,"move","onMove")!==!1?!u.isDragging&&u.isPressed&&(u.isDragging=ei=!0,_t(u,"dragstart","onDragStart")):(u.pointerX=P,u.pointerY=V,z=N,u.x=X,u.y=ne,u.endX=Q,u.endY=me,u.endRotation=Oe,Te=Ne))},st=function ee(M,k){if(!U||!u.isPressed||M&&He!=null&&!k&&(M.pointerId&&M.pointerId!==He&&M.target!==t||M.changedTouches&&!UC(M.changedTouches,He))){rt&&M&&U&&fi(M);return}u.isPressed=!1;var C=M,R=u.isDragging,B=u.vars.allowContextMenu&&M&&(M.ctrlKey||M.which>2),P=Fe.delayedCall(.001,Li),V,N,X,ne,Q;if(xe?(Mt(xe,"touchend",ee),Mt(xe,"touchmove",de),Mt(xe,"touchcancel",ee),Mt(L,"touchstart",ix)):Mt(L,"mousemove",de),Mt(Je,"touchforcechange",fi),(!Oh||!xe)&&(Mt(L,"mouseup",ee),M&&M.target&&Mt(M.target,"mouseup",ee)),Te=!1,R&&(g=Qy=ts(),u.isDragging=!1),nx(Ct),ye&&!B){M&&(Mt(M.target,"change",ee),u.pointerEvent=C),Lh(m,!1),_t(u,"release","onRelease"),_t(u,"click","onClick"),ye=!1;return}for(N=m.length;--N>-1;)dm(m[N],"cursor",n.cursor||(n.cursor!==!1?lc:null));if(Uh--,M){if(V=M.changedTouches,V&&(M=V[0],M!==ze&&M.identifier!==He)){for(N=V.length;--N>-1&&(M=V[N]).identifier!==He&&M.target!==t;);if(N<0&&!k)return}u.pointerEvent=C,u.pointerX=M.pageX,u.pointerY=M.pageY}return B&&C?(fi(C),rt=!0,_t(u,"release","onRelease")):C&&!R?(rt=!1,Wt&&(n.snap||n.bounds)&&Pr(n.inertia||n.throwProps),_t(u,"release","onRelease"),(!ac||C.type!=="touchmove")&&C.type.indexOf("cancel")===-1&&(_t(u,"click","onClick"),ts()-S<300&&_t(u,"doubleclick","onDoubleClick"),ne=C.target||t,S=ts(),Q=function(){S!==Qn&&u.enabled()&&!u.isPressed&&!C.defaultPrevented&&(ne.click?ne.click():L.createEvent&&(X=L.createEvent("MouseEvents"),X.initMouseEvent("click",!0,!0,Je,1,u.pointerEvent.screenX,u.pointerEvent.screenY,u.pointerX,u.pointerY,!1,!1,!1,!1,0,null),ne.dispatchEvent(X)))},!ac&&!C.defaultPrevented&&Fe.delayedCall(.05,Q))):(Pr(n.inertia||n.throwProps),!u.allowEventDefault&&C&&(n.dragClickables!==!1||!T.call(u,C.target))&&R&&(!D||et&&D===et)&&C.cancelable!==!1?(rt=!0,fi(C)):rt=!1,_t(u,"release","onRelease")),ni()&&P.duration(u.tween.duration()),R&&_t(u,"dragend","onDragEnd"),!0},jt=function(M){if(M&&u.isDragging&&!O){var k=M.target||t.parentNode,C=k.scrollLeft-k._gsScrollX,R=k.scrollTop-k._gsScrollY;(C||R)&&(fe?(K-=C*fe.a+R*fe.c,Z-=R*fe.d+C*fe.b):(K-=C,Z-=R),k._gsScrollX+=C,k._gsScrollY+=R,On(u.pointerX,u.pointerY))}},bn=function(M){var k=ts(),C=k-S<100,R=k-g<50,B=C&&Qn===S,P=u.pointerEvent&&u.pointerEvent.defaultPrevented,V=C&&nt===S,N=M.isTrusted||M.isTrusted==null&&C&&B;if((B||R&&u.vars.suppressClickOnDrag!==!1)&&M.stopImmediatePropagation&&M.stopImmediatePropagation(),C&&!(u.pointerEvent&&u.pointerEvent.defaultPrevented)&&(!B||N&&!V)){N&&B&&(nt=S),Qn=S;return}(u.isPressed||R||C)&&(!N||!M.detail||!C||P)&&fi(M),!C&&!R&&!ei&&(M&&M.target&&(u.pointerEvent=M),_t(u,"click","onClick"))},Oi=function(M){return fe?{x:M.x*fe.a+M.y*fe.c+fe.e,y:M.x*fe.b+M.y*fe.d+fe.f}:{x:M.x,y:M.y}};return lt=e.get(t),lt&&lt.kill(),i.startDrag=function(ee,M){var k,C,R,B;Ln(ee||u.pointerEvent,!0),M&&!u.hitTest(ee||u.pointerEvent)&&(k=ua(ee||u.pointerEvent),C=ua(t),R=Oi({x:k.left+k.width/2,y:k.top+k.height/2}),B=Oi({x:C.left+C.width/2,y:C.top+C.height/2}),K-=R.x-B.x,Z-=R.y-B.y),u.isDragging||(u.isDragging=ei=!0,_t(u,"dragstart","onDragStart"))},i.drag=de,i.endDrag=function(ee){return st(ee||u.pointerEvent,!0)},i.timeSinceDrag=function(){return u.isDragging?0:(ts()-g)/1e3},i.timeSinceClick=function(){return(ts()-S)/1e3},i.hitTest=function(ee,M){return e.hitTest(u.target,ee,M)},i.getDirection=function(ee,M){var k=ee==="velocity"&&Ci?ee:cc(ee)&&!a?"element":"start",C,R,B,P,V,N;return k==="element"&&(V=ua(u.target),N=ua(ee)),C=k==="start"?u.x-q:k==="velocity"?Ci.getVelocity(t,l):V.left+V.width/2-(N.left+N.width/2),a?C<0?"counter-clockwise":"clockwise":(M=M||2,R=k==="start"?u.y-z:k==="velocity"?Ci.getVelocity(t,c):V.top+V.height/2-(N.top+N.height/2),B=Math.abs(C/R),P=B<1/M?"":C<0?"left":"right",B<M&&(P!==""&&(P+="-"),P+=R<0?"up":"down"),P)},i.applyBounds=function(ee,M){var k,C,R,B,P,V;if(ee&&n.bounds!==ee)return n.bounds=ee,u.update(!0,M);if(We(!0),Fn(),te&&!ni()){if(k=u.x,C=u.y,k>j?k=j:k<le&&(k=le),C>he?C=he:C<re&&(C=re),(u.x!==k||u.y!==C)&&(R=!0,u.x=u.endX=k,a?u.endRotation=k:u.y=u.endY=C,Te=!0,Ct(!0),u.autoScroll&&!u.isDragging))for(hm(t.parentNode),B=t,xr.scrollTop=Je.pageYOffset!=null?Je.pageYOffset:L.documentElement.scrollTop!=null?L.documentElement.scrollTop:L.body.scrollTop,xr.scrollLeft=Je.pageXOffset!=null?Je.pageXOffset:L.documentElement.scrollLeft!=null?L.documentElement.scrollLeft:L.body.scrollLeft;B&&!V;)V=pa(B.parentNode),P=V?xr:B.parentNode,d&&P.scrollTop>P._gsMaxScrollY&&(P.scrollTop=P._gsMaxScrollY),h&&P.scrollLeft>P._gsMaxScrollX&&(P.scrollLeft=P._gsMaxScrollX),B=P;u.isThrowing&&(R||u.endX>j||u.endX<le||u.endY>he||u.endY<re)&&Pr(n.inertia||n.throwProps,R)}return u},i.update=function(ee,M,k){if(M&&u.isPressed){var C=yn(t),R=yi.apply({x:u.x-q,y:u.y-z}),B=yn(t.parentNode,!0);B.apply({x:C.e-R.x,y:C.f-R.y},R),u.x-=R.x-B.e,u.y-=R.y-B.f,Ct(!0),xi()}var P=u.x,V=u.y;return ti(!M),ee?u.applyBounds():(Te&&k&&Ct(!0),We(!0)),M&&(On(u.pointerX,u.pointerY),Te&&Ct(!0)),u.isPressed&&!M&&(h&&Math.abs(P-u.x)>.01||d&&Math.abs(V-u.y)>.01&&!a)&&xi(),u.autoScroll&&(hm(t.parentNode,u.isDragging),_=u.isDragging,Ct(!0),sx(t,jt),rx(t,jt)),u},i.enable=function(ee){var M={lazy:!0},k,C,R;if(n.cursor!==!1&&(M.cursor=n.cursor||lc),Fe.utils.checkPrefix("touchCallout")&&(M.touchCallout="none"),ee!=="soft"){for(ex(m,h===d?"none":n.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"),C=m.length;--C>-1;)R=m[C],Oh||Rt(R,"mousedown",Ln),Rt(R,"touchstart",Ln),Rt(R,"click",bn,!0),Fe.set(R,M),R.getBBox&&R.ownerSVGElement&&h!==d&&Fe.set(R.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"}),n.allowContextMenu||Rt(R,"contextmenu",mt);Lh(m,!1)}return rx(t,jt),U=!0,Ci&&ee!=="soft"&&Ci.track(O||t,o?"x,y":a?"rotation":"top,left"),t._gsDragID=k=t._gsDragID||"d"+IC++,ha[k]=u,O&&(O.enable(),O.element._gsDragID=k),(n.bounds||a)&&xi(),n.bounds&&u.applyBounds(),u},i.disable=function(ee){for(var M=u.isDragging,k=m.length,C;--k>-1;)dm(m[k],"cursor",null);if(ee!=="soft"){for(ex(m,null),k=m.length;--k>-1;)C=m[k],dm(C,"touchCallout",null),Mt(C,"mousedown",Ln),Mt(C,"touchstart",Ln),Mt(C,"click",bn,!0),Mt(C,"contextmenu",mt);Lh(m,!0),xe&&(Mt(xe,"touchcancel",st),Mt(xe,"touchend",st),Mt(xe,"touchmove",de)),Mt(L,"mouseup",st),Mt(L,"mousemove",de)}return sx(t,jt),U=!1,Ci&&ee!=="soft"&&(Ci.untrack(O||t,o?"x,y":a?"rotation":"top,left"),u.tween&&u.tween.kill()),O&&O.disable(),nx(Ct),u.isDragging=u.isPressed=ye=!1,M&&_t(u,"dragend","onDragEnd"),u},i.enabled=function(ee,M){return arguments.length?ee?u.enable(M):u.disable(M):U},i.kill=function(){return u.isThrowing=!1,u.tween&&u.tween.kill(),u.disable(),Fe.set(m,{clearProps:"userSelect"}),delete ha[t._gsDragID],u},i.revert=function(){this.kill(),this.styles&&this.styles.revert()},~s.indexOf("scroll")&&(O=i.scrollProxy=new HC(t,LC({onKill:function(){u.isPressed&&st(null)}},n)),t.style.overflowY=d&&!gm?"auto":"hidden",t.style.overflowX=h&&!gm?"auto":"hidden",t=O.content),a?p.rotation=1:(h&&(p[l]=1),d&&(p[c]=1)),w.force3D="force3D"in n?n.force3D:!0,cx(Ky(i)),i.enable(),i}return e.register=function(n){Fe=n,pm()},e.create=function(n,i){return mm||pm(!0),is(n).map(function(s){return new e(s,i)})},e.get=function(n){return ha[(is(n)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(ts()-Qy)/1e3},e.hitTest=function(n,i,s){if(n===i)return!1;var o=ua(n),a=ua(i),l=o.top,c=o.left,h=o.right,d=o.bottom,f=o.width,u=o.height,m=a.left>h||a.right<c||a.top>d||a.bottom<l,p,g,_;return m||!s?!m:(_=(s+"").indexOf("%")!==-1,s=parseFloat(s)||0,p={left:Math.max(c,a.left),top:Math.max(l,a.top)},p.width=Math.min(h,a.right)-p.left,p.height=Math.min(d,a.bottom)-p.top,p.width<0||p.height<0?!1:_?(s*=.01,g=p.width*p.height,g>=f*u*s||g>=a.width*a.height*s):p.width>s&&p.height>s)},e}(GC);NC(ma.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1});ma.zIndex=1e3;ma.version="3.12.7";hx()&&Fe.registerPlugin(ma);var WC=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,jC=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,XC=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,$C=/(^[#\.][a-z]|[a-y][a-z])/i,qC=Math.PI/180,YC=180/Math.PI,Bh=Math.sin,kh=Math.cos,mi=Math.abs,Mr=Math.sqrt,ZC=Math.atan2,Sm=1e8,mx=function(e){return typeof e=="string"},xx=function(e){return typeof e=="number"},KC=function(e){return typeof e>"u"},JC={},QC={},Vh=1e5,Sx=function(e){return Math.round((e+Sm)%1*Vh)/Vh||(e<0?0:1)},Ve=function(e){return Math.round(e*Vh)/Vh||0},gx=function(e){return Math.round(e*1e10)/1e10||0},_x=function(e,t,n,i){var s=e[t],o=i===1?6:bm(s,n,i);if((o||!i)&&o+n+2<s.length)return e.splice(t,0,s.slice(0,n+o+2)),s.splice(0,n+o),1},bx=function(e,t,n){var i=e.length,s=~~(n*i);if(e[s]>t){for(;--s&&e[s]>t;);s<0&&(s=0)}else for(;e[++s]<t&&s<i;);return s<i?s:i-1},eT=function(e,t){var n=e.length;for(t||e.reverse();n--;)e[n].reversed||iT(e[n])},vx=function(e,t){return t.totalLength=e.totalLength,e.samples?(t.samples=e.samples.slice(0),t.lookup=e.lookup.slice(0),t.minLength=e.minLength,t.resolution=e.resolution):e.totalPoints&&(t.totalPoints=e.totalPoints),t},tT=function(e,t){var n=e.length,i=e[n-1]||[],s=i.length;n&&t[0]===i[s-2]&&t[1]===i[s-1]&&(t=i.concat(t.slice(2)),n--),e[n]=t};function pc(r){r=mx(r)&&$C.test(r)&&document.querySelector(r)||r;var e=r.getAttribute?r:0,t;return e&&(r=r.getAttribute("d"))?(e._gsPath||(e._gsPath={}),t=e._gsPath[r],t&&!t._dirty?t:e._gsPath[r]=fc(r)):r?mx(r)?fc(r):xx(r[0])?[r]:r:console.warn("Expecting a <path> element or an SVG path data string")}function nT(r){for(var e=[],t=0;t<r.length;t++)e[t]=vx(r[t],r[t].slice(0));return vx(r,e)}function iT(r){var e=0,t;for(r.reverse();e<r.length;e+=2)t=r[e],r[e]=r[e+1],r[e+1]=t;r.reversed=!r.reversed}var rT=function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),i=[].slice.call(e.attributes),s=i.length,o;for(t=","+t+",";--s>-1;)o=i[s].nodeName.toLowerCase(),t.indexOf(","+o+",")<0&&n.setAttributeNS(null,o,i[s].nodeValue);return n},sT={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},oT=function(e,t){for(var n=t?t.split(","):[],i={},s=n.length;--s>-1;)i[n[s]]=+e.getAttribute(n[s])||0;return i};function Mx(r,e){var t=r.tagName.toLowerCase(),n=.552284749831,i,s,o,a,l,c,h,d,f,u,m,p,g,_,b,x,y,v,T,S,w,A;return t==="path"||!r.getBBox?r:(c=rT(r,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),A=oT(r,sT[t]),t==="rect"?(a=A.rx,l=A.ry||a,s=A.x,o=A.y,u=A.width-a*2,m=A.height-l*2,a||l?(p=s+a*(1-n),g=s+a,_=g+u,b=_+a*n,x=_+a,y=o+l*(1-n),v=o+l,T=v+m,S=T+l*n,w=T+l,i="M"+x+","+v+" V"+T+" C"+[x,S,b,w,_,w,_-(_-g)/3,w,g+(_-g)/3,w,g,w,p,w,s,S,s,T,s,T-(T-v)/3,s,v+(T-v)/3,s,v,s,y,p,o,g,o,g+(_-g)/3,o,_-(_-g)/3,o,_,o,b,o,x,y,x,v].join(",")+"z"):i="M"+(s+u)+","+o+" v"+m+" h"+-u+" v"+-m+" h"+u+"z"):t==="circle"||t==="ellipse"?(t==="circle"?(a=l=A.r,d=a*n):(a=A.rx,l=A.ry,d=l*n),s=A.cx,o=A.cy,h=a*n,i="M"+(s+a)+","+o+" C"+[s+a,o+d,s+h,o+l,s,o+l,s-h,o+l,s-a,o+d,s-a,o,s-a,o-d,s-h,o-l,s,o-l,s+h,o-l,s+a,o-d,s+a,o].join(",")+"z"):t==="line"?i="M"+A.x1+","+A.y1+" L"+A.x2+","+A.y2:(t==="polyline"||t==="polygon")&&(f=(r.getAttribute("points")+"").match(jC)||[],s=f.shift(),o=f.shift(),i="M"+s+","+o+" L"+f.join(","),t==="polygon"&&(i+=","+s+","+o+"z")),c.setAttribute("d",wm(c._gsRawPath=fc(i))),e&&r.parentNode&&(r.parentNode.insertBefore(c,r),r.parentNode.removeChild(r)),c)}function Ex(r,e,t){var n=r[e],i=r[e+2],s=r[e+4],o;return n+=(i-n)*t,i+=(s-i)*t,n+=(i-n)*t,o=i+(s+(r[e+6]-s)*t-i)*t-n,n=r[e+1],i=r[e+3],s=r[e+5],n+=(i-n)*t,i+=(s-i)*t,n+=(i-n)*t,Ve(ZC(i+(s+(r[e+7]-s)*t-i)*t-n,o)*YC)}function Mm(r,e,t){t=KC(t)?1:gx(t)||0,e=gx(e)||0;var n=Math.max(0,~~(mi(t-e)-1e-8)),i=nT(r);if(e>t&&(e=1-e,t=1-t,eT(i),i.totalLength=0),e<0||t<0){var s=Math.abs(~~Math.min(e,t))+1;e+=s,t+=s}i.totalLength||rs(i);var o=t>1,a=yx(i,e,JC,!0),l=yx(i,t,QC),c=l.segment,h=a.segment,d=l.segIndex,f=a.segIndex,u=l.i,m=a.i,p=f===d,g=u===m&&p,_,b,x,y,v,T,S,w;if(o||n){for(_=d<f||p&&u<m||g&&l.t<a.t,_x(i,f,m,a.t)&&(f++,_||(d++,g?(l.t=(l.t-a.t)/(1-a.t),u=0):p&&(u-=m))),Math.abs(1-(t-e))<1e-5?d=f-1:!l.t&&d?d--:_x(i,d,u,l.t)&&_&&f++,a.t===1&&(f=(f+1)%i.length),v=[],T=i.length,S=1+T*n,w=f,S+=(T-f+d)%T,y=0;y<S;y++)tT(v,i[w++%T]);i=v}else if(x=l.t===1?6:bm(c,u,l.t),e!==t)for(b=bm(h,m,g?a.t/l.t:a.t),p&&(x+=b),c.splice(u+x+2),(b||m)&&h.splice(0,m+b),y=i.length;y--;)(y<f||y>d)&&i.splice(y,1);else c.angle=Ex(c,u+x,0),u+=x,a=c[u],l=c[u+1],c.length=c.totalLength=0,c.totalPoints=i.totalPoints=8,c.push(a,l,a,l,a,l,a,l);return i.totalLength=0,i}function aT(r,e,t){e=e||0,r.samples||(r.samples=[],r.lookup=[]);var n=~~r.resolution||12,i=1/n,s=t?e+t*6+1:r.length,o=r[e],a=r[e+1],l=e?e/6*n:0,c=r.samples,h=r.lookup,d=(e?r.minLength:Sm)||Sm,f=c[l+t*n-1],u=e?c[l-1]:0,m,p,g,_,b,x,y,v,T,S,w,A,I,L,U,O,K;for(c.length=h.length=0,p=e+2;p<s;p+=6){if(g=r[p+4]-o,_=r[p+2]-o,b=r[p]-o,v=r[p+5]-a,T=r[p+3]-a,S=r[p+1]-a,x=y=w=A=0,mi(g)<.01&&mi(v)<.01&&mi(b)+mi(S)<.01)r.length>8&&(r.splice(p,6),p-=6,s-=6);else for(m=1;m<=n;m++)L=i*m,I=1-L,x=y-(y=(L*L*g+3*I*(L*_+I*b))*L),w=A-(A=(L*L*v+3*I*(L*T+I*S))*L),O=Mr(w*w+x*x),O<d&&(d=O),u+=O,c[l++]=u;o+=g,a+=v}if(f)for(f-=u;l<c.length;l++)c[l]+=f;if(c.length&&d){if(r.totalLength=K=c[c.length-1]||0,r.minLength=d,K/d<9999)for(O=U=0,m=0;m<K;m+=d)h[O++]=c[U]<m?++U:U}else r.totalLength=c[0]=0;return e?u-c[e/2-1]:u}function rs(r,e){var t,n,i;for(i=t=n=0;i<r.length;i++)r[i].resolution=~~e||12,n+=r[i].length,t+=aT(r[i]);return r.totalPoints=n,r.totalLength=t,r}function bm(r,e,t){if(t<=0||t>=1)return 0;var n=r[e],i=r[e+1],s=r[e+2],o=r[e+3],a=r[e+4],l=r[e+5],c=r[e+6],h=r[e+7],d=n+(s-n)*t,f=s+(a-s)*t,u=i+(o-i)*t,m=o+(l-o)*t,p=d+(f-d)*t,g=u+(m-u)*t,_=a+(c-a)*t,b=l+(h-l)*t;return f+=(_-f)*t,m+=(b-m)*t,r.splice(e+2,4,Ve(d),Ve(u),Ve(p),Ve(g),Ve(p+(f-p)*t),Ve(g+(m-g)*t),Ve(f),Ve(m),Ve(_),Ve(b)),r.samples&&r.samples.splice(e/6*r.resolution|0,0,0,0,0,0,0,0),6}function yx(r,e,t,n){t=t||{},r.totalLength||rs(r),(e<0||e>1)&&(e=Sx(e));var i=0,s=r[0],o,a,l,c,h,d,f;if(!e)f=d=i=0,s=r[0];else if(e===1)f=1,i=r.length-1,s=r[i],d=s.length-8;else{if(r.length>1){for(l=r.totalLength*e,h=d=0;(h+=r[d++].totalLength)<l;)i=d;s=r[i],c=h-s.totalLength,e=(l-c)/(h-c)||0}o=s.samples,a=s.resolution,l=s.totalLength*e,d=s.lookup.length?s.lookup[~~(l/s.minLength)]||0:bx(o,l,e),c=d?o[d-1]:0,h=o[d],h<l&&(c=h,h=o[++d]),f=1/a*((l-c)/(h-c)+d%a),d=~~(d/a)*6,n&&f===1&&(d+6<s.length?(d+=6,f=0):i+1<r.length&&(d=f=0,s=r[++i]))}return t.t=f,t.i=d,t.path=r,t.segment=s,t.segIndex=i,t}function Em(r,e,t,n){var i=r[0],s=n||{},o,a,l,c,h,d,f,u,m;if((e<0||e>1)&&(e=Sx(e)),i.lookup||rs(r),r.length>1){for(l=r.totalLength*e,h=d=0;(h+=r[d++].totalLength)<l;)i=r[d];c=h-i.totalLength,e=(l-c)/(h-c)||0}return o=i.samples,a=i.resolution,l=i.totalLength*e,d=i.lookup.length?i.lookup[e<1?~~(l/i.minLength):i.lookup.length-1]||0:bx(o,l,e),c=d?o[d-1]:0,h=o[d],h<l&&(c=h,h=o[++d]),f=1/a*((l-c)/(h-c)+d%a)||0,m=1-f,d=~~(d/a)*6,u=i[d],s.x=Ve((f*f*(i[d+6]-u)+3*m*(f*(i[d+4]-u)+m*(i[d+2]-u)))*f+u),s.y=Ve((f*f*(i[d+7]-(u=i[d+1]))+3*m*(f*(i[d+5]-u)+m*(i[d+3]-u)))*f+u),t&&(s.angle=i.totalLength?Ex(i,d,f>=1?1-1e-9:f||1e-9):i.angle||0),s}function ga(r,e,t,n,i,s,o){for(var a=r.length,l,c,h,d,f;--a>-1;)for(l=r[a],c=l.length,h=0;h<c;h+=2)d=l[h],f=l[h+1],l[h]=d*e+f*n+s,l[h+1]=d*t+f*i+o;return r._dirty=1,r}function lT(r,e,t,n,i,s,o,a,l){if(!(r===a&&e===l)){t=mi(t),n=mi(n);var c=i%360*qC,h=kh(c),d=Bh(c),f=Math.PI,u=f*2,m=(r-a)/2,p=(e-l)/2,g=h*m+d*p,_=-d*m+h*p,b=g*g,x=_*_,y=b/(t*t)+x/(n*n);y>1&&(t=Mr(y)*t,n=Mr(y)*n);var v=t*t,T=n*n,S=(v*T-v*x-T*b)/(v*x+T*b);S<0&&(S=0);var w=(s===o?-1:1)*Mr(S),A=w*(t*_/n),I=w*-(n*g/t),L=(r+a)/2,U=(e+l)/2,O=L+(h*A-d*I),K=U+(d*A+h*I),Z=(g-A)/t,q=(_-I)/n,z=(-g-A)/t,te=(-_-I)/n,ae=Z*Z+q*q,E=(q<0?-1:1)*Math.acos(Z/Mr(ae)),j=(Z*te-q*z<0?-1:1)*Math.acos((Z*z+q*te)/Mr(ae*(z*z+te*te)));isNaN(j)&&(j=f),!o&&j>0?j-=u:o&&j<0&&(j+=u),E%=u,j%=u;var le=Math.ceil(mi(j)/(u/4)),he=[],re=j/le,ze=4/3*Bh(re/2)/(1+kh(re/2)),He=h*t,$e=d*t,Te=d*-n,lt=h*n,Be;for(Be=0;Be<le;Be++)i=E+Be*re,g=kh(i),_=Bh(i),Z=kh(i+=re),q=Bh(i),he.push(g-ze*_,_+ze*g,Z+ze*q,q-ze*Z,Z,q);for(Be=0;Be<he.length;Be+=2)g=he[Be],_=he[Be+1],he[Be]=g*He+_*Te+O,he[Be+1]=g*$e+_*lt+K;return he[Be-2]=a,he[Be-1]=l,he}}function fc(r){var e=(r+"").replace(XC,function(A){var I=+A;return I<1e-4&&I>-1e-4?0:I}).match(WC)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+r,c,h,d,f,u,m,p,g,_,b,x,y,v,T,S,w=function(I,L,U,O){b=(U-I)/3,x=(O-L)/3,p.push(I+b,L+x,U-b,O-x,U,O)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(v=u,isNaN(e[c])?(u=e[c].toUpperCase(),m=u!==e[c]):c--,d=+e[c+1],f=+e[c+2],m&&(d+=n,f+=i),c||(g=d,_=f),u==="M")p&&(p.length<8?t.length-=1:a+=p.length),n=g=d,i=_=f,p=[d,f],t.push(p),c+=2,u="L";else if(u==="C")p||(p=[0,0]),m||(n=i=0),p.push(d,f,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(u==="S")b=n,x=i,(v==="C"||v==="S")&&(b+=n-p[p.length-4],x+=i-p[p.length-3]),m||(n=i=0),p.push(b,x,d,f,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(u==="Q")b=n+(d-n)*s,x=i+(f-i)*s,m||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,p.push(b,x,n+(d-n)*s,i+(f-i)*s,n,i),c+=4;else if(u==="T")b=n-p[p.length-4],x=i-p[p.length-3],p.push(n+b,i+x,d+(n+b*1.5-d)*s,f+(i+x*1.5-f)*s,n=d,i=f),c+=2;else if(u==="H")w(n,i,n=d,i),c+=1;else if(u==="V")w(n,i,n,i=d+(m?i-n:0)),c+=1;else if(u==="L"||u==="Z")u==="Z"&&(d=g,f=_,p.closed=!0),(u==="L"||mi(n-d)>.5||mi(i-f)>.5)&&(w(n,i,d,f),u==="L"&&(c+=2)),n=d,i=f;else if(u==="A"){if(T=e[c+4],S=e[c+5],b=e[c+6],x=e[c+7],h=7,T.length>1&&(T.length<3?(x=b,b=S,h--):(x=S,b=T.substr(2),h-=2),S=T.charAt(1),T=T.charAt(0)),y=lT(n,i,+e[c+1],+e[c+2],+e[c+3],+T,+S,(m?n:0)+b*1,(m?i:0)+x*1),c+=h,y)for(h=0;h<y.length;h++)p.push(y[h]);n=p[p.length-2],i=p[p.length-1]}else console.log(l);return c=p.length,c<6?(t.pop(),c=0):p[0]===p[c-2]&&p[1]===p[c-1]&&(p.closed=!0),t.totalPoints=a+c,t}function wx(r,e){e===void 0&&(e=1);for(var t=r[0],n=0,i=[t,n],s=2;s<r.length;s+=2)i.push(t,n,r[s],n=(r[s]-t)*e/2,t=r[s],-n);return i}function zh(r,e){mi(r[0]-r[2])<1e-4&&mi(r[1]-r[3])<1e-4&&(r=r.slice(2));var t=r.length-2,n=+r[0],i=+r[1],s=+r[2],o=+r[3],a=[n,i,n,i],l=s-n,c=o-i,h=Math.abs(r[t]-n)<.001&&Math.abs(r[t+1]-i)<.001,d,f,u,m,p,g,_,b,x,y,v,T,S,w,A;for(h&&(r.push(s,o),s=n,o=i,n=r[t-2],i=r[t-1],r.unshift(n,i),t+=4),e=e||e===0?+e:1,u=2;u<t;u+=2)d=n,f=i,n=s,i=o,s=+r[u+2],o=+r[u+3],!(n===s&&i===o)&&(m=l,p=c,l=s-n,c=o-i,g=Mr(m*m+p*p),_=Mr(l*l+c*c),b=Mr(Math.pow(l/_+m/g,2)+Math.pow(c/_+p/g,2)),x=(g+_)*e*.25/b,y=n-(n-d)*(g?x/g:0),v=n+(s-n)*(_?x/_:0),T=n-(y+((v-y)*(g*3/(g+_)+.5)/4||0)),S=i-(i-f)*(g?x/g:0),w=i+(o-i)*(_?x/_:0),A=i-(S+((w-S)*(g*3/(g+_)+.5)/4||0)),(n!==d||i!==f)&&a.push(Ve(y+T),Ve(S+A),Ve(n),Ve(i),Ve(v+T),Ve(w+A)));return n!==s||i!==o||a.length<4?a.push(Ve(s),Ve(o),Ve(s),Ve(o)):a.length-=2,a.length===2?a.push(n,i,n,i,n,i):h&&(a.splice(0,6),a.length=a.length-6),a}function wm(r){xx(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+Ve(o[0])+","+Ve(o[1])+" C",n=o.length,s=2;s<n;s++)e+=Ve(o[s++])+","+Ve(o[s++])+" "+Ve(o[s++])+","+Ve(o[s++])+" "+Ve(o[s++])+","+Ve(o[s])+" ";o.closed&&(e+="z")}return e}var cT="x,translateX,left,marginLeft,xPercent".split(","),uT="y,translateY,top,marginTop,yPercent".split(","),hT=Math.PI/180,gi,Dx,_a,Tm,Cm,Cx,dT=function(){return gi||typeof window<"u"&&(gi=window.gsap)&&gi.registerPlugin&&gi},mc=function(e,t,n,i){for(var s=t.length,o=i===2?0:i,a=0,l;a<s;a++)e[o]=l=parseFloat(t[a][n]),i===2&&(e[o+1]=0),o+=2;return e},va=function(e,t,n){return parseFloat(e._gsap.get(e,t,n||"px"))||0},Rx=function(e){var t=e[0],n=e[1],i;for(i=2;i<e.length;i+=2)t=e[i]+=t,n=e[i+1]+=n},Tx=function(e,t,n,i,s,o,a,l,c){if(a.type==="cubic")t=[t];else{a.fromCurrent!==!1&&t.unshift(va(n,i,l),s?va(n,s,c):0),a.relative&&Rx(t);var h=s?zh:wx;t=[h(t,a.curviness)]}return t=o(Px(t,n,a)),Hh(e,n,i,t,"x",l),s&&Hh(e,n,s,t,"y",c),rs(t,a.resolution||(a.curviness===0?20:12))},fT=function(e){return e},pT=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,Ax=function(e,t,n){var i=yn(e),s=0,o=0,a;return(e.tagName+"").toLowerCase()==="svg"?(a=e.viewBox.baseVal,a.width||(a={width:+e.getAttribute("width"),height:+e.getAttribute("height")})):a=t&&e.getBBox&&e.getBBox(),t&&t!=="auto"&&(s=t.push?t[0]*(a?a.width:e.offsetWidth||0):t.x,o=t.push?t[1]*(a?a.height:e.offsetHeight||0):t.y),n.apply(s||o?i.apply({x:s,y:o}):{x:i.e,y:i.f})},Am=function(e,t,n,i){var s=yn(e.parentNode,!0,!0),o=s.clone().multiply(yn(t)),a=Ax(e,n,s),l=Ax(t,i,s),c=l.x,h=l.y,d;return o.e=o.f=0,i==="auto"&&t.getTotalLength&&t.tagName.toLowerCase()==="path"&&(d=t.getAttribute("d").match(pT)||[],d=o.apply({x:+d[0],y:+d[1]}),c+=d.x,h+=d.y),d&&(d=o.apply(t.getBBox()),c-=d.x,h-=d.y),o.e=c-a.x,o.f=h-a.y,o},Px=function(e,t,n){var i=n.align,s=n.matrix,o=n.offsetX,a=n.offsetY,l=n.alignOrigin,c=e[0][0],h=e[0][1],d=va(t,"x"),f=va(t,"y"),u,m,p;return!e||!e.length?pc("M0,0L0,0"):(i&&(i==="self"||(u=Tm(i)[0]||t)===t?ga(e,1,0,0,1,d-c,f-h):(l&&l[2]!==!1?gi.set(t,{transformOrigin:l[0]*100+"% "+l[1]*100+"%"}):l=[va(t,"xPercent")/-100,va(t,"yPercent")/-100],m=Am(t,u,l,"auto"),p=m.apply({x:c,y:h}),ga(e,m.a,m.b,m.c,m.d,d+m.e-(p.x-m.e),f+m.f-(p.y-m.f)))),s?ga(e,s.a,s.b,s.c,s.d,s.e,s.f):(o||a)&&ga(e,1,0,0,1,o||0,a||0),e)},Hh=function(e,t,n,i,s,o){var a=t._gsap,l=a.harness,c=l&&l.aliases&&l.aliases[n],h=c&&c.indexOf(",")<0?c:n,d=e._pt=new Dx(e._pt,t,h,0,0,fT,0,a.set(t,h,e));d.u=_a(a.get(t,h,o))||0,d.path=i,d.pp=s,e._props.push(h)},mT=function(e,t){return function(n){return e||t!==1?Mm(n,e,t):n}},Dm={version:"3.12.7",name:"motionPath",register:function(e,t,n){gi=e,_a=gi.utils.getUnit,Tm=gi.utils.toArray,Cm=gi.core.getStyleSaver,Cx=gi.core.reverting||function(){},Dx=n},init:function(e,t,n){if(!gi)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof t=="object"&&!t.style)||!t.path)&&(t={path:t});var i=[],s=t,o=s.path,a=s.autoRotate,l=s.unitX,c=s.unitY,h=s.x,d=s.y,f=o[0],u=mT(t.start,"end"in t?t.end:1),m,p;if(this.rawPaths=i,this.target=e,this.tween=n,this.styles=Cm&&Cm(e,"transform"),(this.rotate=a||a===0)&&(this.rOffset=parseFloat(a)||0,this.radians=!!t.useRadians,this.rProp=t.rotation||"rotation",this.rSet=e._gsap.set(e,this.rProp,this),this.ru=_a(e._gsap.get(e,this.rProp))||0),Array.isArray(o)&&!("closed"in o)&&typeof f!="number"){for(p in f)!h&&~cT.indexOf(p)?h=p:!d&&~uT.indexOf(p)&&(d=p);h&&d?i.push(Tx(this,mc(mc([],o,h,0),o,d,1),e,h,d,u,t,l||_a(o[0][h]),c||_a(o[0][d]))):h=d=0;for(p in f)p!==h&&p!==d&&i.push(Tx(this,mc([],o,p,2),e,p,0,u,t,_a(o[0][p])))}else m=u(Px(pc(t.path),e,t)),rs(m,t.resolution),i.push(m),Hh(this,e,t.x||"x",m,"x",t.unitX||"px"),Hh(this,e,t.y||"y",m,"y",t.unitY||"px");n.vars.immediateRender&&this.render(n.progress(),this)},render:function(e,t){var n=t.rawPaths,i=n.length,s=t._pt;if(t.tween._time||!Cx()){for(e>1?e=1:e<0&&(e=0);i--;)Em(n[i],e,!i&&t.rotate,n[i]);for(;s;)s.set(s.t,s.p,s.path[s.pp]+s.u,s.d,e),s=s._next;t.rotate&&t.rSet(t.target,t.rProp,n[0].angle*(t.radians?hT:1)+t.rOffset+t.ru,t,e)}else t.styles.revert()},getLength:function(e){return rs(pc(e)).totalLength},sliceRawPath:Mm,getRawPath:pc,pointsToSegment:zh,stringToRawPath:fc,rawPathToString:wm,transformRawPath:ga,getGlobalMatrix:yn,getPositionOnPath:Em,cacheRawPathMeasurements:rs,convertToPath:function(e,t){return Tm(e).map(function(n){return Mx(n,t!==!1)})},convertCoordinates:function(e,t,n){var i=yn(t,!0,!0).multiply(yn(e));return n?i.apply(n):i},getAlignMatrix:Am,getRelativePosition:function(e,t,n,i){var s=Am(e,t,n,i);return{x:s.e,y:s.f}},arrayToRawPath:function(e,t){t=t||{};var n=mc(mc([],e,t.x||"x",0),e,t.y||"y",1);return t.relative&&Rx(n),[t.type==="cubic"?n:zh(n,t.curviness)]}};dT()&&gi.registerPlugin(Dm);var Ix={production:!1,filesUrl:""};var Gh=class r{data=Nn({experiences:[],technologies:[],recommendations:[],projects:[],points:[],projectTypes:[],team:[]});http=W(Br);jsonUrl="data/";constructor(){this.loadData()}loadData(){return ho(this,null,function*(){try{let t=yield(yield fetch(Ix.filesUrl+"data/data.json")).json();this.data.set(t)}catch(e){console.error("Error loading data:",e)}})}static \u0275fac=function(t){return new(t||r)};static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})};function gc(r,e,t){!e&&t0(r);let n=e??W(nr);return t?Zt(n,t):n}function Fx(r){return function(n={}){var i=n,{injector:e}=i,t=kc(i,["injector"]);return e=gc(this,e),Zt(e,()=>W(r,t))}}function Lx(r,e,t={}){let{deps:n=[],multi:i=!1,extraProviders:s=[],isFunctionValue:o=!1}=t;return(a,l=o)=>{let c;return typeof a<"u"?c={provide:r,useFactory:typeof a=="function"?l?()=>a:a:()=>a,multi:i}:c={provide:r,useFactory:e,deps:n,multi:i},[s,c]}}function Rm(r,e){let t=r.name||r.toString(),n=e??{isRoot:!0};if(n.isRoot??=!0,n.multi&&(n.isRoot=!1),n.isRoot){if(n.token)throw new Error(`createInjectionToken is creating a root InjectionToken but an external token is passed in.
`);let s=new ce(`Token for ${t}`,{factory:()=>n.deps&&Array.isArray(n.deps)?r(...n.deps.map(a=>(a=Array.isArray(a)?a.at(-1):a,W(a)))):r()}),o=Fx(s);return[o,Lx(s,r,n),s,()=>({provide:kd,useValue:()=>o(),multi:!0})]}let i=n.token||new ce(`Token for ${t}`);return[Fx(i),Lx(i,r,n),i,()=>[]]}var pg="171";var ld=0,tS=1;var Km=1;var Jm=100;var Qm=204,eg=205;var mg=0,gg=1,_g=2,Mc=3,vg=4,yg=5,xg=6,Sg=7,nS=0;var iS=1015;var cd=2300,tg=2301,Pm=2302,Ox=2400,Nx=2401,Ux=2402;var rS="",vi="srgb",ng="srgb-linear",ig="linear",ad="srgb";var ya=7680;var Bx=519;var kx=35044;var bc=2e3,Vx=2001,oo=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $O=Math.PI/180,gT=180/Math.PI;function bg(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Le(r,e,t){return Math.max(e,Math.min(t,r))}function _T(r,e){return(r%e+e)%e}function Im(r,e,t){return(1-t)*r+t*e}function _c(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var an=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Le(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},we=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],p=i[0],g=i[3],_=i[6],b=i[1],x=i[4],y=i[7],v=i[2],T=i[5],S=i[8];return s[0]=o*p+a*b+l*v,s[3]=o*g+a*x+l*T,s[6]=o*_+a*y+l*S,s[1]=c*p+h*b+d*v,s[4]=c*g+h*x+d*T,s[7]=c*_+h*y+d*S,s[2]=f*p+u*b+m*v,s[5]=f*g+u*x+m*T,s[8]=f*_+u*y+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,u=c*s-o*l,m=t*d+n*f+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/m;return e[0]=d*p,e[1]=(i*c-h*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=u*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fm.makeScale(e,t)),this}rotate(e){return this.premultiply(Fm.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fm=new we;function sS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}var zx=new we().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hx=new we().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vT(){let r={enabled:!0,workingColorSpace:ng,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ad&&(i.r=Da(i.r),i.g=Da(i.g),i.b=Da(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ad&&(i.r=Ra(i.r),i.g=Ra(i.g),i.b=Ra(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===rS?ig:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ng]:{primaries:e,whitePoint:n,transfer:ig,toXYZ:zx,fromXYZ:Hx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:e,whitePoint:n,transfer:ad,toXYZ:zx,fromXYZ:Hx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),r}var Jn=vT();function Da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ra(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var us=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],p=l[2],g=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-p)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+p)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(u+1)/2,v=(_+1)/2,T=(h+f)/4,S=(d+p)/4,w=(m+g)/4;return x>y&&x>v?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=S/n):y>v?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=w/i):v<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(v),n=S/s,i=w/s),this.set(n,i,s,t),this}let b=Math.sqrt((g-m)*(g-m)+(d-p)*(d-p)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(d-p)/b,this.z=(f-h)/b,this.w=Math.acos((c+u+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this.z=Le(this.z,e.z,t.z),this.w=Le(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this.z=Le(this.z,e,t),this.w=Le(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var hs=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=s[o+0],u=s[o+1],m=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=u,e[t+2]=m,e[t+3]=p;return}if(d!==p||l!==f||c!==u||h!==m){let g=1-a,_=l*f+c*u+h*m+d*p,b=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){let v=Math.sqrt(x),T=Math.atan2(v,_*b);g=Math.sin(g*T)/v,a=Math.sin(a*T)/v}let y=a*b;if(l=l*g+f*y,c=c*g+u*y,h=h*g+m*y,d=d*g+p*y,g===1-a){let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],f=s[o+1],u=s[o+2],m=s[o+3];return e[t]=a*m+h*d+l*u-c*f,e[t+1]=l*m+h*f+c*d-a*u,e[t+2]=c*m+h*u+a*f-l*d,e[t+3]=h*m-a*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),f=l(n/2),u=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(s+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(s-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Le(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this.z=Le(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this.z=Le(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lm.copy(this).projectOnVector(e),this.sub(Lm)}reflect(e){return this.sub(Lm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Le(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lm=new F,Gx=new hs,ao=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Di):Di.fromBufferAttribute(s,o),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wh.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wh.copy(n.boundingBox)),Wh.applyMatrix4(e.matrixWorld),this.union(Wh)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vc),jh.subVectors(this.max,vc),xa.subVectors(e.a,vc),Sa.subVectors(e.b,vc),ba.subVectors(e.c,vc),ss.subVectors(Sa,xa),os.subVectors(ba,Sa),no.subVectors(xa,ba);let t=[0,-ss.z,ss.y,0,-os.z,os.y,0,-no.z,no.y,ss.z,0,-ss.x,os.z,0,-os.x,no.z,0,-no.x,-ss.y,ss.x,0,-os.y,os.x,0,-no.y,no.x,0];return!Om(t,xa,Sa,ba,jh)||(t=[1,0,0,0,1,0,0,0,1],!Om(t,xa,Sa,ba,jh))?!1:(Xh.crossVectors(ss,os),t=[Xh.x,Xh.y,Xh.z],Om(t,xa,Sa,ba,jh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Er=[new F,new F,new F,new F,new F,new F,new F,new F],Di=new F,Wh=new ao,xa=new F,Sa=new F,ba=new F,ss=new F,os=new F,no=new F,vc=new F,jh=new F,Xh=new F,io=new F;function Om(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){io.fromArray(r,s);let a=i.x*Math.abs(io.x)+i.y*Math.abs(io.y)+i.z*Math.abs(io.z),l=e.dot(io),c=t.dot(io),h=n.dot(io);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var yT=new ao,yc=new F,Nm=new F,ud=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yT.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yc.subVectors(e,this.center);let t=yc.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(yc,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yc.copy(e.center).add(Nm)),this.expandByPoint(yc.copy(e.center).sub(Nm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},wr=new F,Um=new F,$h=new F,as=new F,Bm=new F,qh=new F,km=new F,rg=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Um.copy(e).add(t).multiplyScalar(.5),$h.copy(t).sub(e).normalize(),as.copy(this.origin).sub(Um);let s=e.distanceTo(t)*.5,o=-this.direction.dot($h),a=as.dot(this.direction),l=-as.dot($h),c=as.lengthSq(),h=Math.abs(1-o*o),d,f,u,m;if(h>0)if(d=o*l-a,f=o*a-l,m=s*h,d>=0)if(f>=-m)if(f<=m){let p=1/h;d*=p,f*=p,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),u=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Um).addScaledVector($h,f),u}intersectSphere(e,t){wr.subVectors(e.center,this.origin);let n=wr.dot(this.direction),i=wr.dot(wr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,n,i,s){Bm.subVectors(t,e),qh.subVectors(n,e),km.crossVectors(Bm,qh);let o=this.direction.dot(km),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;as.subVectors(this.origin,e);let l=a*this.direction.dot(qh.crossVectors(as,qh));if(l<0)return null;let c=a*this.direction.dot(Bm.cross(as));if(c<0||l+c>o)return null;let h=-a*as.dot(km);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ii=class r{constructor(e,t,n,i,s,o,a,l,c,h,d,f,u,m,p,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,d,f,u,m,p,g)}set(e,t,n,i,s,o,a,l,c,h,d,f,u,m,p,g){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=f,_[3]=u,_[7]=m,_[11]=p,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ma.setFromMatrixColumn(e,0).length(),s=1/Ma.setFromMatrixColumn(e,1).length(),o=1/Ma.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*h,u=o*d,m=a*h,p=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+m*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=m+u*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,u=l*d,m=c*h,p=c*d;t[0]=f+p*a,t[4]=m*a-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=u*a-m,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,u=l*d,m=c*h,p=c*d;t[0]=f-p*a,t[4]=-o*d,t[8]=m+u*a,t[1]=u+m*a,t[5]=o*h,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,u=o*d,m=a*h,p=a*d;t[0]=l*h,t[4]=m*c-u,t[8]=f*c+p,t[1]=l*d,t[5]=p*c+f,t[9]=u*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,u=o*c,m=a*l,p=a*c;t[0]=l*h,t[4]=p-f*d,t[8]=m*d+u,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*d+m,t[10]=f-p*d}else if(e.order==="XZY"){let f=o*l,u=o*c,m=a*l,p=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+p,t[5]=o*h,t[9]=u*d-m,t[2]=m*d-u,t[6]=a*h,t[10]=p*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xT,e,ST)}lookAt(e,t,n){let i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),ls.crossVectors(n,Zn),ls.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),ls.crossVectors(n,Zn)),ls.normalize(),Yh.crossVectors(Zn,ls),i[0]=ls.x,i[4]=Yh.x,i[8]=Zn.x,i[1]=ls.y,i[5]=Yh.y,i[9]=Zn.y,i[2]=ls.z,i[6]=Yh.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],p=n[6],g=n[10],_=n[14],b=n[3],x=n[7],y=n[11],v=n[15],T=i[0],S=i[4],w=i[8],A=i[12],I=i[1],L=i[5],U=i[9],O=i[13],K=i[2],Z=i[6],q=i[10],z=i[14],te=i[3],ae=i[7],E=i[11],j=i[15];return s[0]=o*T+a*I+l*K+c*te,s[4]=o*S+a*L+l*Z+c*ae,s[8]=o*w+a*U+l*q+c*E,s[12]=o*A+a*O+l*z+c*j,s[1]=h*T+d*I+f*K+u*te,s[5]=h*S+d*L+f*Z+u*ae,s[9]=h*w+d*U+f*q+u*E,s[13]=h*A+d*O+f*z+u*j,s[2]=m*T+p*I+g*K+_*te,s[6]=m*S+p*L+g*Z+_*ae,s[10]=m*w+p*U+g*q+_*E,s[14]=m*A+p*O+g*z+_*j,s[3]=b*T+x*I+y*K+v*te,s[7]=b*S+x*L+y*Z+v*ae,s[11]=b*w+x*U+y*q+v*E,s[15]=b*A+x*O+y*z+v*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],m=e[3],p=e[7],g=e[11],_=e[15];return m*(+s*l*d-i*c*d-s*a*f+n*c*f+i*a*u-n*l*u)+p*(+t*l*u-t*c*f+s*o*f-i*o*u+i*c*h-s*l*h)+g*(+t*c*d-t*a*u-s*o*d+n*o*u+s*a*h-n*c*h)+_*(-i*a*h-t*l*d+t*a*f+i*o*d-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],m=e[12],p=e[13],g=e[14],_=e[15],b=d*g*c-p*f*c+p*l*u-a*g*u-d*l*_+a*f*_,x=m*f*c-h*g*c-m*l*u+o*g*u+h*l*_-o*f*_,y=h*p*c-m*d*c+m*a*u-o*p*u-h*a*_+o*d*_,v=m*d*l-h*p*l-m*a*f+o*p*f+h*a*g-o*d*g,T=t*b+n*x+i*y+s*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/T;return e[0]=b*S,e[1]=(p*f*s-d*g*s-p*i*u+n*g*u+d*i*_-n*f*_)*S,e[2]=(a*g*s-p*l*s+p*i*c-n*g*c-a*i*_+n*l*_)*S,e[3]=(d*l*s-a*f*s-d*i*c+n*f*c+a*i*u-n*l*u)*S,e[4]=x*S,e[5]=(h*g*s-m*f*s+m*i*u-t*g*u-h*i*_+t*f*_)*S,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*_-t*l*_)*S,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*u+t*l*u)*S,e[8]=y*S,e[9]=(m*d*s-h*p*s-m*n*u+t*p*u+h*n*_-t*d*_)*S,e[10]=(o*p*s-m*a*s+m*n*c-t*p*c-o*n*_+t*a*_)*S,e[11]=(h*a*s-o*d*s-h*n*c+t*d*c+o*n*u-t*a*u)*S,e[12]=v*S,e[13]=(h*p*i-m*d*i+m*n*f-t*p*f-h*n*g+t*d*g)*S,e[14]=(m*a*i-o*p*i-m*n*l+t*p*l+o*n*g-t*a*g)*S,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*f+t*a*f)*S,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,u=s*h,m=s*d,p=o*h,g=o*d,_=a*d,b=l*c,x=l*h,y=l*d,v=n.x,T=n.y,S=n.z;return i[0]=(1-(p+_))*v,i[1]=(u+y)*v,i[2]=(m-x)*v,i[3]=0,i[4]=(u-y)*T,i[5]=(1-(f+_))*T,i[6]=(g+b)*T,i[7]=0,i[8]=(m+x)*S,i[9]=(g-b)*S,i[10]=(1-(f+p))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Ma.set(i[0],i[1],i[2]).length(),o=Ma.set(i[4],i[5],i[6]).length(),a=Ma.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ri.copy(this);let c=1/s,h=1/o,d=1/a;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=d,Ri.elements[9]*=d,Ri.elements[10]*=d,t.setFromRotationMatrix(Ri),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=bc){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),u,m;if(a===bc)u=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Vx)u=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=bc){let l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(o-s),f=(t+e)*c,u=(n+i)*h,m,p;if(a===bc)m=(o+s)*d,p=-2*d;else if(a===Vx)m=s*d,p=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=p,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ma=new F,Ri=new Ii,xT=new F(0,0,0),ST=new F(1,1,1),ls=new F,Yh=new F,Zn=new F,Wx=new Ii,jx=new hs,Mg=(()=>{class r{constructor(t=0,n=0,i=0,s=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],h=s[5],d=s[9],f=s[2],u=s[6],m=s[10];switch(n){case"XYZ":this._y=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Wx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wx,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return jx.setFromEuler(this),this.setFromQuaternion(jx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return r.DEFAULT_ORDER="XYZ",r})(),Ec=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bT=0,Xx=new F,Ea=new hs,Cr=new Ii,Zh=new F,xc=new F,MT=new F,ET=new hs,$x=new F(1,0,0),qx=new F(0,1,0),Yx=new F(0,0,1),Zx={type:"added"},wT={type:"removed"},wa={type:"childadded",child:null},Vm={type:"childremoved",child:null},oS=(()=>{class r extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=bg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new F,n=new Mg,i=new hs,s=new F(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ii},normalMatrix:{value:new we}}),this.matrix=new Ii,this.matrixWorld=new Ii,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ea.setFromAxisAngle(t,n),this.quaternion.multiply(Ea),this}rotateOnWorldAxis(t,n){return Ea.setFromAxisAngle(t,n),this.quaternion.premultiply(Ea),this}rotateX(t){return this.rotateOnAxis($x,t)}rotateY(t){return this.rotateOnAxis(qx,t)}rotateZ(t){return this.rotateOnAxis(Yx,t)}translateOnAxis(t,n){return Xx.copy(t).applyQuaternion(this.quaternion),this.position.add(Xx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis($x,t)}translateY(t){return this.translateOnAxis(qx,t)}translateZ(t){return this.translateOnAxis(Yx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Zh.copy(t):Zh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),xc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(xc,Zh,this.up):Cr.lookAt(Zh,xc,this.up),this.quaternion.setFromRotationMatrix(Cr),s&&(Cr.extractRotation(s.matrixWorld),Ea.setFromRotationMatrix(Cr),this.quaternion.premultiply(Ea.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zx),wa.child=t,this.dispatchEvent(wa),wa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(wT),Vm.child=t,this.dispatchEvent(Vm),Vm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zx),wa.child=t,this.dispatchEvent(wa),wa.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xc,t,MT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xc,ET,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){let f=c[h];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),p=a(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(l){let c=[];for(let h in l){let d=l[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}}return r.DEFAULT_UP=new F(0,1,0),r.DEFAULT_MATRIX_AUTO_UPDATE=!0,r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,r})(),Pi=new F,Tr=new F,zm=new F,Ar=new F,Ca=new F,Ta=new F,Kx=new F,Hm=new F,Gm=new F,Wm=new F,jm=new us,Xm=new us,$m=new us,so=class r{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pi.subVectors(e,t),i.cross(Pi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Pi.subVectors(i,t),Tr.subVectors(n,t),zm.subVectors(e,t);let o=Pi.dot(Pi),a=Pi.dot(Tr),l=Pi.dot(zm),c=Tr.dot(Tr),h=Tr.dot(zm),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,m=(o*h-a*l)*f;return s.set(1-u-m,m,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ar.x),l.addScaledVector(o,Ar.y),l.addScaledVector(a,Ar.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return jm.setScalar(0),Xm.setScalar(0),$m.setScalar(0),jm.fromBufferAttribute(e,t),Xm.fromBufferAttribute(e,n),$m.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(jm,s.x),o.addScaledVector(Xm,s.y),o.addScaledVector($m,s.z),o}static isFrontFacing(e,t,n,i){return Pi.subVectors(n,t),Tr.subVectors(e,t),Pi.cross(Tr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),Pi.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Ca.subVectors(i,n),Ta.subVectors(s,n),Hm.subVectors(e,n);let l=Ca.dot(Hm),c=Ta.dot(Hm);if(l<=0&&c<=0)return t.copy(n);Gm.subVectors(e,i);let h=Ca.dot(Gm),d=Ta.dot(Gm);if(h>=0&&d<=h)return t.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ca,o);Wm.subVectors(e,s);let u=Ca.dot(Wm),m=Ta.dot(Wm);if(m>=0&&u<=m)return t.copy(s);let p=u*c-l*m;if(p<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ta,a);let g=h*m-u*d;if(g<=0&&d-h>=0&&u-m>=0)return Kx.subVectors(s,i),a=(d-h)/(d-h+(u-m)),t.copy(i).addScaledVector(Kx,a);let _=1/(g+p+f);return o=p*_,a=f*_,t.copy(n).addScaledVector(Ca,o).addScaledVector(Ta,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},aS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Kh={h:0,s:0,l:0};function qm(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var wt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Jn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Jn.workingColorSpace){if(e=_T(e,1),t=Le(t,0,1),n=Le(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=qm(o,s,e+1/3),this.g=qm(o,s,e),this.b=qm(o,s,e-1/3)}return Jn.toWorkingColorSpace(this,i),this}setStyle(e,t=vi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vi){let n=aS[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return Jn.fromWorkingColorSpace(on.copy(this),e),Math.round(Le(on.r*255,0,255))*65536+Math.round(Le(on.g*255,0,255))*256+Math.round(Le(on.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jn.workingColorSpace){Jn.fromWorkingColorSpace(on.copy(this),t);let n=on.r,i=on.g,s=on.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Jn.workingColorSpace){return Jn.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=vi){Jn.fromWorkingColorSpace(on.copy(this),e);let t=on.r,n=on.g,i=on.b;return e!==vi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(Kh);let n=Im(cs.h,Kh.h,t),i=Im(cs.s,Kh.s,t),s=Im(cs.l,Kh.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new wt;wt.NAMES=aS;var CT=0,sg=class extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=bg(),this.name="",this.type="Material",this.blending=Km,this.side=ld,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qm,this.blendDst=eg,this.blendEquation=Jm,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Km&&(n.blending=this.blending),this.side!==ld&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qm&&(n.blendSrc=this.blendSrc),this.blendDst!==eg&&(n.blendDst=this.blendDst),this.blendEquation!==Jm&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bx&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ya&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ya&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ya&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ia=class extends sg{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mg,this.combine=nS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Et=new F,Jh=new an,Dr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kx,this.updateRanges=[],this.gpuType=iS,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jh.fromBufferAttribute(this,t),Jh.applyMatrix3(e),this.setXY(t,Jh.x,Jh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_c(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_c(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_c(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_c(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_c(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),i=Pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kx&&(e.usage=this.usage),e}};var hd=class extends Dr{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var dd=class extends Dr{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Pa=class extends Dr{constructor(e,t,n){super(new Float32Array(e),t,n)}},TT=0,_i=new Ii,Ym=new oS,Aa=new F,Kn=new ao,Sc=new ao,Ot=new F,wc=class r extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=bg(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sS(e)?dd:hd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new we().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return Ym.lookAt(e),Ym.updateMatrix(),this.applyMatrix4(Ym.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Aa).negate(),this.translate(Aa.x,Aa.y,Aa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pa(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ud);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Sc.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Kn.min,Sc.min),Kn.expandByPoint(Ot),Ot.addVectors(Kn.max,Sc.max),Kn.expandByPoint(Ot)):(Kn.expandByPoint(Sc.min),Kn.expandByPoint(Sc.max))}Kn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(Aa.fromBufferAttribute(e,c),Ot.add(Aa)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dr(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new F,l[w]=new F;let c=new F,h=new F,d=new F,f=new an,u=new an,m=new an,p=new F,g=new F;function _(w,A,I){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,I),f.fromBufferAttribute(s,w),u.fromBufferAttribute(s,A),m.fromBufferAttribute(s,I),h.sub(c),d.sub(c),u.sub(f),m.sub(f);let L=1/(u.x*m.y-m.x*u.y);isFinite(L)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-u.y).multiplyScalar(L),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(L),a[w].add(p),a[A].add(p),a[I].add(p),l[w].add(g),l[A].add(g),l[I].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,A=b.length;w<A;++w){let I=b[w],L=I.start,U=I.count;for(let O=L,K=L+U;O<K;O+=3)_(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let x=new F,y=new F,v=new F,T=new F;function S(w){v.fromBufferAttribute(i,w),T.copy(v);let A=a[w];x.copy(A),x.sub(v.multiplyScalar(v.dot(A))).normalize(),y.crossVectors(T,A);let L=y.dot(l[w])<0?-1:1;o.setXYZW(w,x.x,x.y,x.z,L)}for(let w=0,A=b.length;w<A;++w){let I=b[w],L=I.start,U=I.count;for(let O=L,K=L+U;O<K;O+=3)S(e.getX(O+0)),S(e.getX(O+1)),S(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let f=0,u=e.count;f<u;f+=3){let m=e.getX(f+0),p=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,g),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let p=0,g=l.length;p<g;p++){a.isInterleavedBufferAttribute?u=l[p]*a.data.stride+a.offset:u=l[p]*h;for(let _=0;_<h;_++)f[m++]=c[u++]}return new Dr(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jx=new Ii,ro=new rg,Qh=new ud,Qx=new F,ed=new F,td=new F,nd=new F,Zm=new F,id=new F,eS=new F,rd=new F,Cc=class extends oS{constructor(e=new wc,t=new Ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){id.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(Zm.fromBufferAttribute(d,e),o?id.addScaledVector(Zm,h):id.addScaledVector(Zm.sub(t),h))}t.add(id)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qh.copy(n.boundingSphere),Qh.applyMatrix4(s),ro.copy(e.ray).recast(e.near),!(Qh.containsPoint(ro.origin)===!1&&(ro.intersectSphere(Qh,Qx)===null||ro.origin.distanceToSquared(Qx)>(e.far-e.near)**2))&&(Jx.copy(s).invert(),ro.copy(e.ray).applyMatrix4(Jx),!(n.boundingBox!==null&&ro.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ro)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,p=f.length;m<p;m++){let g=f[m],_=o[g.materialIndex],b=Math.max(g.start,u.start),x=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let y=b,v=x;y<v;y+=3){let T=a.getX(y),S=a.getX(y+1),w=a.getX(y+2);i=sd(this,_,e,n,c,h,d,T,S,w),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,u.start),p=Math.min(a.count,u.start+u.count);for(let g=m,_=p;g<_;g+=3){let b=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);i=sd(this,o,e,n,c,h,d,b,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,p=f.length;m<p;m++){let g=f[m],_=o[g.materialIndex],b=Math.max(g.start,u.start),x=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let y=b,v=x;y<v;y+=3){let T=y,S=y+1,w=y+2;i=sd(this,_,e,n,c,h,d,T,S,w),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,u.start),p=Math.min(l.count,u.start+u.count);for(let g=m,_=p;g<_;g+=3){let b=g,x=g+1,y=g+2;i=sd(this,o,e,n,c,h,d,b,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function AT(r,e,t,n,i,s,o,a){let l;if(e.side===tS?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ld,a),l===null)return null;rd.copy(a),rd.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(rd);return c<t.near||c>t.far?null:{distance:c,point:rd.clone(),object:r}}function sd(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ed),r.getVertexPosition(l,td),r.getVertexPosition(c,nd);let h=AT(r,e,t,n,ed,td,nd,eS);if(h){let d=new F;so.getBarycoord(eS,ed,td,nd,d),i&&(h.uv=so.getInterpolatedAttribute(i,a,l,c,d,new an)),s&&(h.uv1=so.getInterpolatedAttribute(s,a,l,c,d,new an)),o&&(h.normal=so.getInterpolatedAttribute(o,a,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new F,materialIndex:0};so.getNormal(ed,td,nd,f.normal),h.face=f,h.barycoord=d}return h}var Tc=class r extends wc{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Pa(c,3)),this.setAttribute("normal",new Pa(h,3)),this.setAttribute("uv",new Pa(d,2));function m(p,g,_,b,x,y,v,T,S,w,A){let I=y/S,L=v/w,U=y/2,O=v/2,K=T/2,Z=S+1,q=w+1,z=0,te=0,ae=new F;for(let E=0;E<q;E++){let j=E*L-O;for(let le=0;le<Z;le++){let he=le*I-U;ae[p]=he*b,ae[g]=j*x,ae[_]=K,c.push(ae.x,ae.y,ae.z),ae[p]=0,ae[g]=0,ae[_]=T>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(le/S),d.push(1-E/w),z+=1}}for(let E=0;E<w;E++)for(let j=0;j<S;j++){let le=f+j+Z*E,he=f+j+Z*(E+1),re=f+(j+1)+Z*(E+1),ze=f+(j+1)+Z*E;l.push(le,he,ze),l.push(he,re,ze),te+=6}a.addGroup(u,te,A),u+=te,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function lS(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xn(r){let e={};for(let t=0;t<r.length;t++){let n=lS(r[t]);for(let i in n)e[i]=n[i]}return e}function od(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function DT(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Fa=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},og=class extends Fa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ox,endingEnd:Ox}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nx:s=e,a=2*t-n;break;case Ux:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nx:o=e,l=2*n-t;break;case Ux:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-t)/(i-t),p=m*m,g=p*m,_=-f*g+2*f*p-f*m,b=(1+f)*g+(-1.5-2*f)*p+(-.5+f)*m+1,x=(-1-u)*g+(1.5+u)*p+.5*m,y=u*g-u*p;for(let v=0;v!==a;++v)s[v]=_*o[h+v]+b*o[c+v]+x*o[l+v]+y*o[d+v];return s}},ag=class extends Fa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*h;return s}},lg=class extends Fa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Fi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=od(t,this.TimeBufferType),this.values=od(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:od(e.times,Array),values:od(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ag(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new og(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cd:t=this.InterpolantFactoryMethodDiscrete;break;case tg:t=this.InterpolantFactoryMethodLinear;break;case Pm:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cd;case this.InterpolantFactoryMethodLinear:return tg;case this.InterpolantFactoryMethodSmooth:return Pm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&DT(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pm,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let p=t[d+m];if(p!==t[f+m]||p!==t[u+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=tg;var lo=class extends Fi{constructor(e,t,n){super(e,t,n)}};lo.prototype.ValueTypeName="bool";lo.prototype.ValueBufferType=Array;lo.prototype.DefaultInterpolation=cd;lo.prototype.InterpolantFactoryMethodLinear=void 0;lo.prototype.InterpolantFactoryMethodSmooth=void 0;var cg=class extends Fi{};cg.prototype.ValueTypeName="color";var ug=class extends Fi{};ug.prototype.ValueTypeName="number";var hg=class extends Fa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)hs.slerpFlat(s,0,o,c-a,o,c,l);return s}},fd=class extends Fi{InterpolantFactoryMethodLinear(e){return new hg(this.times,this.values,this.getValueSize(),e)}};fd.prototype.ValueTypeName="quaternion";fd.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends Fi{constructor(e,t,n){super(e,t,n)}};co.prototype.ValueTypeName="string";co.prototype.ValueBufferType=Array;co.prototype.DefaultInterpolation=cd;co.prototype.InterpolantFactoryMethodLinear=void 0;co.prototype.InterpolantFactoryMethodSmooth=void 0;var dg=class extends Fi{};dg.prototype.ValueTypeName="vector";var Eg="\\[\\]\\.:\\/",RT=new RegExp("["+Eg+"]","g"),wg="[^"+Eg+"]",PT="[^"+Eg.replace("\\.","")+"]",IT=/((?:WC+[\/:])*)/.source.replace("WC",wg),FT=/(WCOD+)?/.source.replace("WCOD",PT),LT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wg),OT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wg),NT=new RegExp("^"+IT+FT+LT+OT+"$"),UT=["material","materials","bones","map"],fg=class{constructor(e,t,n){let i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=(()=>{class r{constructor(t,n,i){this.path=n,this.parsedPath=i||r.parseTrackName(n),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,n,i):new r(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(RT,"")}static parseTrackName(t){let n=NT.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);UT.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=r.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return r.Composite=fg,r})();vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qO=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pg);var $T=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,e1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,n1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,a1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,g1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,v1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M1="gl_FragColor = linearToOutputTexel( gl_FragColor );",E1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,R1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,k1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,j1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_A=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,DA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,XA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$A=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_D=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ED=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:$T,alphahash_pars_fragment:qT,alphamap_fragment:YT,alphamap_pars_fragment:ZT,alphatest_fragment:KT,alphatest_pars_fragment:JT,aomap_fragment:QT,aomap_pars_fragment:e1,batching_pars_vertex:t1,batching_vertex:n1,begin_vertex:i1,beginnormal_vertex:r1,bsdfs:s1,iridescence_fragment:o1,bumpmap_pars_fragment:a1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:h1,color_fragment:d1,color_pars_fragment:f1,color_pars_vertex:p1,color_vertex:m1,common:g1,cube_uv_reflection_fragment:_1,defaultnormal_vertex:v1,displacementmap_pars_vertex:y1,displacementmap_vertex:x1,emissivemap_fragment:S1,emissivemap_pars_fragment:b1,colorspace_fragment:M1,colorspace_pars_fragment:E1,envmap_fragment:w1,envmap_common_pars_fragment:C1,envmap_pars_fragment:T1,envmap_pars_vertex:A1,envmap_physical_pars_fragment:k1,envmap_vertex:D1,fog_vertex:R1,fog_pars_vertex:P1,fog_fragment:I1,fog_pars_fragment:F1,gradientmap_pars_fragment:L1,lightmap_pars_fragment:O1,lights_lambert_fragment:N1,lights_lambert_pars_fragment:U1,lights_pars_begin:B1,lights_toon_fragment:V1,lights_toon_pars_fragment:z1,lights_phong_fragment:H1,lights_phong_pars_fragment:G1,lights_physical_fragment:W1,lights_physical_pars_fragment:j1,lights_fragment_begin:X1,lights_fragment_maps:$1,lights_fragment_end:q1,logdepthbuf_fragment:Y1,logdepthbuf_pars_fragment:Z1,logdepthbuf_pars_vertex:K1,logdepthbuf_vertex:J1,map_fragment:Q1,map_pars_fragment:eA,map_particle_fragment:tA,map_particle_pars_fragment:nA,metalnessmap_fragment:iA,metalnessmap_pars_fragment:rA,morphinstance_vertex:sA,morphcolor_vertex:oA,morphnormal_vertex:aA,morphtarget_pars_vertex:lA,morphtarget_vertex:cA,normal_fragment_begin:uA,normal_fragment_maps:hA,normal_pars_fragment:dA,normal_pars_vertex:fA,normal_vertex:pA,normalmap_pars_fragment:mA,clearcoat_normal_fragment_begin:gA,clearcoat_normal_fragment_maps:_A,clearcoat_pars_fragment:vA,iridescence_pars_fragment:yA,opaque_fragment:xA,packing:SA,premultiplied_alpha_fragment:bA,project_vertex:MA,dithering_fragment:EA,dithering_pars_fragment:wA,roughnessmap_fragment:CA,roughnessmap_pars_fragment:TA,shadowmap_pars_fragment:AA,shadowmap_pars_vertex:DA,shadowmap_vertex:RA,shadowmask_pars_fragment:PA,skinbase_vertex:IA,skinning_pars_vertex:FA,skinning_vertex:LA,skinnormal_vertex:OA,specularmap_fragment:NA,specularmap_pars_fragment:UA,tonemapping_fragment:BA,tonemapping_pars_fragment:kA,transmission_fragment:VA,transmission_pars_fragment:zA,uv_pars_fragment:HA,uv_pars_vertex:GA,uv_vertex:WA,worldpos_vertex:jA,background_vert:XA,background_frag:$A,backgroundCube_vert:qA,backgroundCube_frag:YA,cube_vert:ZA,cube_frag:KA,depth_vert:JA,depth_frag:QA,distanceRGBA_vert:eD,distanceRGBA_frag:tD,equirect_vert:nD,equirect_frag:iD,linedashed_vert:rD,linedashed_frag:sD,meshbasic_vert:oD,meshbasic_frag:aD,meshlambert_vert:lD,meshlambert_frag:cD,meshmatcap_vert:uD,meshmatcap_frag:hD,meshnormal_vert:dD,meshnormal_frag:fD,meshphong_vert:pD,meshphong_frag:mD,meshphysical_vert:gD,meshphysical_frag:_D,meshtoon_vert:vD,meshtoon_frag:yD,points_vert:xD,points_frag:SD,shadow_vert:bD,shadow_frag:MD,sprite_vert:ED,sprite_frag:wD},Y={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},envMapRotation:{value:new we},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new an(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new an(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}},cS={basic:{uniforms:xn([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:xn([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new wt(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:xn([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:xn([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:xn([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new wt(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:xn([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:xn([Y.points,Y.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:xn([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:xn([Y.common,Y.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:xn([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:xn([Y.sprite,Y.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new we}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:xn([Y.common,Y.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:xn([Y.lights,Y.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};cS.physical={uniforms:xn([cS.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new an(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new an},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new an},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};var uo=(1+Math.sqrt(5))/2,La=1/uo,TU=[new F(-uo,La,0),new F(uo,La,0),new F(-La,0,uo),new F(La,0,uo),new F(0,uo,-La),new F(0,uo,La),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];var AU=new Float32Array(16),DU=new Float32Array(9),RU=new Float32Array(4);var PU={[mg]:gg,[_g]:xg,[vg]:Sg,[Mc]:yg,[gg]:mg,[xg]:_g,[Sg]:vg,[yg]:Mc};function CD(r){let e={nodes:{},materials:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),"material"in t&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e}var TD=new Map;var AD=new Set,DD=new Set,RD=new Set;function Cg(r,e){if(r.size)for(let{callback:t}of r.values())t(e)}function Ac(r,e){switch(r){case"before":return Cg(AD,e);case"after":return Cg(DD,e);case"tail":return Cg(RD,e)}}function Tg(r,e,t){let n=e.snapshot,i=n.clock.getDelta();n.frameloop==="never"&&typeof r=="number"&&(i=r-n.clock.elapsedTime,n.clock.oldTime=n.clock.elapsedTime,n.clock.elapsedTime=r);let s=n.internal.subscribers;for(let o=0;o<s.length;o++){let a=s[o];a.callback(Xe($({},a.store.snapshot),{delta:i,frame:t}))}return!n.internal.priority&&n.gl.render&&n.gl.render(n.scene,n.camera),n.internal.frames=Math.max(0,n.internal.frames-1),n.frameloop==="always"?1:n.internal.frames}function PD(r){let e=!1,t,n,i=!1;function s(l){n=requestAnimationFrame(s),e=!0,t=0,Ac("before",l),i=!0;for(let c of r.values()){let h=c.snapshot;h.internal.active&&(h.frameloop==="always"||h.internal.frames>0)&&!h.gl.xr?.isPresenting&&(t+=Tg(l,c))}if(i=!1,Ac("after",l),t===0)return Ac("tail",l),e=!1,cancelAnimationFrame(n)}function o(l,c=1){let h=l?.snapshot;if(!h)return r.forEach(d=>o(d,c));h.gl.xr?.isPresenting||!h.internal.active||h.frameloop==="never"||(c>1?h.internal.frames=Math.min(60,h.internal.frames+c):i?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(s)))}function a(l,c=!0,h,d){if(c&&Ac("before",l),h)Tg(l,h,d);else for(let f of r.values())Tg(l,f);c&&Ac("after",l)}return{loop:s,invalidate:o,advance:a}}var[e3]=Rm(()=>PD(TD));var ID=new ce("NgtStore Token");function FD(r){return W(ID,r)}var hS={};function dS(r){Object.assign(hS,r)}var[t3]=Rm(()=>hS);var n3=new ce("NGT_HTML_DOM_ELEMENT");var Dc=new Map,uS=new WeakMap;function LD(r){let e=[];return Array.isArray(r)?e=r:typeof r=="string"?e=[r]:e=Object.values(r),e.map(t=>t.includes("undefined")||t.includes("null")||!t?"":t)}function fS(r,e,{extensions:t,onLoad:n,onProgress:i}={}){return()=>{let s=LD(e()),o=uS.get(r(s));return o||(o=new(r(s)),uS.set(r(s),o)),t&&t(o),s.map(a=>a===""?Promise.resolve(null):(Dc.has(a)||Dc.set(a,new Promise((l,c)=>{o.load(a,h=>{"scene"in h&&Object.assign(h,CD(h.scene)),n&&n(h),l(h)},i,h=>c(new Error(`[NGT] Could not load ${a}: ${h?.message}`)))})),Dc.get(a)))}}function pd(r,e,{extensions:t,onProgress:n,onLoad:i,injector:s}={}){return gc(pd,s,()=>{let o=Nn(null),a=fS(r,e,{extensions:t,onProgress:n,onLoad:i});return Eo(()=>{let l=e(),c=a();Promise.all(c).then(h=>{o.update(()=>{if(Array.isArray(l))return h;if(typeof l=="string")return h[0];let d=Object.keys(l);return d.reduce((f,u)=>(f[u]=h[d.indexOf(u)],f),{})})})}),o.asReadonly()})}pd.preload=(r,e,t,n)=>{let i=fS(r,e,{extensions:t,onLoad:n})();i&&Promise.all(i)};pd.destroy=()=>{Dc.clear()};pd.clear=r=>{(Array.isArray(r)?r:[r]).forEach(t=>{Dc.delete(t)})};function Ag(r,{priority:e=0,injector:t}={}){return gc(Ag,t,()=>{let n=FD(),i=n.get("internal").subscribe(r,e,n);return W(Gc).onDestroy(()=>void i()),i})}function Dg(r){return(e,t,n)=>{if(typeof t>"u"||typeof t=="boolean"){n=!!t;let o=e;return En(()=>{let a=o();if(!(n&&a==null))return typeof a=="number"?new r().setScalar(a):a?new r(...a):new r},{equal:(a,l)=>!!a&&!!l&&a.equals(l)})}let i=e,s=t;return En(()=>{let o=i()[s];if(!(n&&o==null))return typeof o=="number"?new r().setScalar(o):o?new r(...o):new r},{equal:(o,a)=>!!o&&!!a&&o.equals(a)})}}var i3=Dg(an),r3=Dg(F),s3=Dg(us);var OD=["mesh"];dS({Mesh:Cc,BoxGeometry:Tc,MeshBasicMaterial:Ia});var md=class r{meshRef=jd.required("mesh");constructor(){Ag(({delta:e})=>{let t=this.meshRef().nativeElement;t.rotation.x+=e,t.rotation.y+=e})}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=Mn({type:r,selectors:[["ng-component"]],viewQuery:function(t,n){t&1&&m0(n.meshRef,OD,5),t&2&&g0()},decls:4,vars:0,consts:[["mesh",""],["color","hotpink"]],template:function(t,n){t&1&&(G(0,"ngt-mesh",null,0),Se(2,"ngt-box-geometry")(3,"ngt-mesh-basic-material",1),H())},encapsulation:2,changeDetection:0})};var Pc=window.matchMedia("(max-width: 767px)").matches;var ND=["projectDescription"],UD=["images"],BD=(r,e)=>({"col-sm-6":r,"col-sm-12":e}),pS=(r,e)=>e.id;function kD(r,e){if(r&1&&(G(0,"div",12)(1,"div",17)(2,"div",18)(3,"div",19)(4,"div"),Se(5,"img",20),H()(),G(6,"div",21)(7,"div")(8,"h3",22),ue(9),H(),G(10,"h4",23),ue(11),H()()()()()()),r&2){let t=e.$implicit;So("id","screen-"+t.id),ve(5),Ue("src","images/projectTypes/"+t.name+".svg",_o)("alt",t.name),ve(4),ir(t.title),ve(2),ir(t.description)}}function VD(r,e){if(r&1&&(G(0,"div",28)(1,"a",29),ue(2,"\u05E4\u05EA\u05D7 \u05D0\u05EA\u05E8"),H(),Se(3,"img",30,3),H()),r&2){let t=Lr().$implicit;ve(),Ue("href",t.link,_o)}}function zD(r,e){if(r&1&&(G(0,"div",25),Se(1,"img",26,2),Pt(3,VD,5,1,"div",27),H()),r&2){let t=e.$implicit,n=Lr().$implicit;Ue("ngClass",v0(4,BD,t.size=="half",t.size=="full")),ve(),Ue("src","images/projectTypes/"+n.name+"/"+t.id+".png",_o)("alt",n.name),ve(2),Ue("ngIf",t.link)}}function HD(r,e){if(r&1&&(G(0,"div",16,1)(2,"div",7),Pt(3,zD,4,7,"div",24),H()()),r&2){let t=e.$implicit;So("id","desc-"+t.id),ve(3),Ue("ngForOf",t.images)}}var gd=class r{cdr=W(rr);projectDescriptionElements;projects=_s();lastProjectId=Nn(1);images;constructor(){Ke.registerPlugin(_e),Eo(()=>{let e=this.projects();queueMicrotask(()=>{this.cdr.detectChanges(),this.projectDescriptionElements.length>0&&this.setupAnimations()})})}ngOnInit(){}setupAnimations(){this.images.forEach((e,t)=>{Ke.from(e.nativeElement,{scrollTrigger:{trigger:e.nativeElement,start:"center bottom",end:"center 70%",scrub:!0,toggleActions:"play none none reset"},scale:.8,rotate:5,opacity:.6,duration:1,delay:0}),Pc&&Ke.to(e.nativeElement,{scrollTrigger:{trigger:e.nativeElement,start:"top 300px ",end:"center 300px",scrub:!0,toggleActions:"play none none reset"},opacity:0,duration:1})}),this.lastProjectId.set(1),Ke.set("#screen-1",{opacity:1,visibility:"visible"}),Ke.set("#desc-1",{opacity:1}),this.projectDescriptionElements.forEach((e,t)=>{let n=t+1;_e.create({trigger:e.nativeElement,start:"top center",end:"bottom center",onEnter:()=>this.animateProjectChange(n),onEnterBack:()=>this.animateProjectChange(n),markers:!1})})}animateProjectChange(e){console.log("projectid",e),!(e==1&&this.lastProjectId()==1)&&(this.lastProjectId.set(e),Ke.to(".project-screen",{opacity:0,visibility:"hidden",duration:.5}),Ke.to(".project-description",{opacity:.3,duration:.5}),Ke.to(`#screen-${e}`,{opacity:1,visibility:"visible",duration:.5}),Ke.to(`#desc-${e}`,{opacity:1,duration:.5}),Ke.fromTo(`#desc-${e}`,{x:50,opacity:0},{x:0,opacity:1,duration:.7,ease:"power2.out"}),Ke.fromTo(`#screen-${e}`,{scale:1.2},{scale:1,duration:.7}))}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=Mn({type:r,selectors:[["app-projects1"]],viewQuery:function(t,n){if(t&1&&(Un(ND,5),Un(UD,5)),t&2){let i;Bn(i=kn())&&(n.projectDescriptionElements=i),Bn(i=kn())&&(n.images=i)}},inputs:{projects:[1,"projects"]},decls:17,vars:0,consts:[["projectsContainer",""],["projectDescription",""],["images",""],["recommendationicon",""],[1,"project-showcase","py-5"],[1,"container"],[1,"text-center","mb-5"],[1,"row"],[1,"col-md-6","monitor-wrapper"],[1,"monitor-container"],[1,"monitor-frame"],[1,"monitor-screen"],[1,"project-screen"],[1,"monitor-stand"],[1,"monitor-base"],[1,"col-md-6"],[1,"project-description","mb-5","p-4","special-background"],[1,"project-type-description","text-center"],[1,"row","h-100"],[1,"col-4","d-flex","justify-content-center","align-items-center"],[1,"project-type-icon","img-fluid",3,"src","alt"],[1,"col-8","text-center","screen-description","d-flex","justify-content-center","align-items-center"],[1,"mt-3"],[1,"display0"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"project-type-image","img-fluid",3,"src","alt"],["class","image-link",4,"ngIf"],[1,"image-link"],["target","_blank",3,"href"],["src","icons/arrow-left.svg","width","40","aria-hidden","true"]],template:function(t,n){t&1&&(G(0,"section",4)(1,"div",5)(2,"h2",6),ue(3,"\u05DE\u05D5\u05DE\u05D7\u05D9\u05D5\u05EA \u05D1\u05DE\u05D2\u05D5\u05D5\u05DF \u05E8\u05D7\u05D1 \u05E9\u05DC \u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8\u05D9\u05DD"),H(),G(4,"div",7,0)(6,"div",8)(7,"div",9)(8,"div",10)(9,"div",11),Xd(10,kD,12,5,"div",12,pS),H(),Se(12,"div",13)(13,"div",14),H()()(),G(14,"div",15),Xd(15,HD,4,2,"div",16,pS),H()()()()),t&2&&(ve(10),$d(n.projects()),ve(5),$d(n.projects()))},dependencies:[Co,Jd,Nr,qa],styles:[".project-showcase[_ngcontent-%COMP%]{min-height:1500px}.monitor-wrapper[_ngcontent-%COMP%]{top:35%;position:sticky!important;height:350px}.monitor-wrapper[_ngcontent-%COMP%]   .monitor-container[_ngcontent-%COMP%]{width:100%;height:100%}.monitor-wrapper[_ngcontent-%COMP%]   .monitor-frame[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;display:flex;flex-direction:column;align-items:center}.monitor-wrapper[_ngcontent-%COMP%]   .monitor-screen[_ngcontent-%COMP%]{width:90%;aspect-ratio:2;background:#000;border-radius:8px;padding:10px;overflow:hidden;position:relative;box-shadow:0 10px 25px #0003}.monitor-wrapper[_ngcontent-%COMP%]   .project-screen[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;opacity:0;visibility:hidden;background-color:var(--color8)}.monitor-wrapper[_ngcontent-%COMP%]   .project-screen[_ngcontent-%COMP%]   .project-type-description[_ngcontent-%COMP%]{position:absolute;width:90%;height:90%;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:3px}.monitor-wrapper[_ngcontent-%COMP%]   .project-screen[_ngcontent-%COMP%]   .project-type-description[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{background:linear-gradient(53deg,#000,#141414,#242424)}.monitor-wrapper[_ngcontent-%COMP%]   .project-screen[_ngcontent-%COMP%]   .project-type-description[_ngcontent-%COMP%]   .screen-description[_ngcontent-%COMP%]{position:relative}.monitor-wrapper[_ngcontent-%COMP%]   .project-screen[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:top}.monitor-wrapper[_ngcontent-%COMP%]   .monitor-stand[_ngcontent-%COMP%]{width:20%;height:10%;background:#333;margin-top:-5px}.monitor-wrapper[_ngcontent-%COMP%]   .monitor-base[_ngcontent-%COMP%]{width:40%;height:2%;background:#222;border-radius:50% 50% 0 0;margin-top:2px}@media only screen and (max-width: 992px){.monitor-wrapper[_ngcontent-%COMP%]{top:20px;transform:translateY(0)}.screen-description[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.75rem}}.project-description[_ngcontent-%COMP%]{text-align:center;opacity:.3}.project-description[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{align-items:center}.project-description[_ngcontent-%COMP%]   .project-type-image[_ngcontent-%COMP%]{margin-bottom:2rem;border-radius:5px}.project-description[_ngcontent-%COMP%]   .image-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.project-description[_ngcontent-%COMP%]   .image-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:all .3s ease-in}.project-description[_ngcontent-%COMP%]   .image-link[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:translate(-5px)}"]})};function GD(r,e){if(r&1&&(f0(0),G(1,"div",10)(2,"div",11)(3,"div",12)(4,"div")(5,"h5",13),ue(6),H(),Se(7,"p",14),H()()()(),p0()),r&2){let t=e.$implicit,n=e.index;ve(),bo("active",n===0),ve(5),ir(t.name),ve(),Ue("innerHTML",t.description,jc)}}function WD(r,e){if(r&1&&Se(0,"button",15),r&2){let t=e.index;bo("active",t===0),So("data-bs-slide-to",t)("aria-label","Slide "+(t+1))}}var _d=class r{recommendations=_s([]);static \u0275fac=function(t){return new(t||r)};static \u0275cmp=Mn({type:r,selectors:[["app-recommendations"]],inputs:{recommendations:[1,"recommendations"]},decls:13,vars:2,consts:[["id","recCarousel","data-bs-ride","carousel","data-bs-touch","true","data-bs-interval","8000",1,"carousel","slide"],[1,"carousel-inner"],[4,"ngFor","ngForOf"],["type","button","data-bs-target","#recCarousel","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#recCarousel","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"carousel-indicators"],["type","button","data-bs-target","#recCarousel","aria-current","i === 0 ? 'true' : undefined",3,"active",4,"ngFor","ngForOf"],[1,"carousel-item","special-background8"],[1,"card","shadow","mx-auto","rec-card"],[1,"card-body","text-center","p-4","special-background9","d-flex","justify-content-center","align-items-center"],[1,"card-title","mb-1","color1"],[1,"card-text",3,"innerHTML"],["type","button","data-bs-target","#recCarousel","aria-current","i === 0 ? 'true' : undefined"]],template:function(t,n){t&1&&(G(0,"div",0)(1,"div",1),Pt(2,GD,8,4,"ng-container",2),H(),G(3,"button",3),Se(4,"span",4),G(5,"span",5),ue(6,"Previous"),H()(),G(7,"button",6),Se(8,"span",7),G(9,"span",5),ue(10,"Next"),H()(),G(11,"div",8),Pt(12,WD,1,4,"button",9),H()()),t&2&&(ve(2),Ue("ngForOf",n.recommendations()),ve(10),Ue("ngForOf",n.recommendations()))},dependencies:[Nr],styles:[".carousel-item[_ngcontent-%COMP%]{background:none}.carousel-item[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{white-space:pre-line;font-size:1.5rem}.carousel-item[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{color:var(--color1);font-size:2rem}.carousel-item[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{margin:0 auto;width:80%}#recCarousel[_ngcontent-%COMP%]{min-width:100%}.rec-card[_ngcontent-%COMP%]{border:none;border-radius:1rem;background:none;min-height:50vh}.carousel[_ngcontent-%COMP%]{border-radius:28px;overflow:hidden;border:7px solid var(--color2)}.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%]{filter:drop-shadow(0 0 2px rgba(0,0,0,.6))}.carousel-indicators[_ngcontent-%COMP%]{display:none}"]})};var MS=(()=>{class r{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||r)(qe(yo),qe(vs))};static \u0275dir=Kt({type:r})}return r})(),jD=(()=>{class r extends MS{static \u0275fac=(()=>{let t;return function(i){return(t||(t=tr(r)))(i||r)}})();static \u0275dir=Kt({type:r,features:[xs]})}return r})(),ES=new ce("");var XD={provide:ES,useExisting:zc(()=>Td),multi:!0};function $D(){let r=oi()?oi().getUserAgent():"";return/android (\d+)/.test(r.toLowerCase())}var qD=new ce(""),Td=(()=>{class r extends MS{_compositionMode;_composing=!1;constructor(t,n,i){super(t,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!$D())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||r)(qe(yo),qe(vs),qe(qD,8))};static \u0275dir=Kt({type:r,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&Mo("input",function(o){return i._handleInput(o.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(o){return i._compositionEnd(o.target.value)})},standalone:!1,features:[qc([XD]),xs]})}return r})();function Og(r){return r==null||Ng(r)===0}function Ng(r){return r==null?null:Array.isArray(r)||typeof r=="string"?r.length:r instanceof Set?r.size:null}var wS=new ce(""),CS=new ce(""),YD=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Rr=class{static min(e){return ZD(e)}static max(e){return KD(e)}static required(e){return JD(e)}static requiredTrue(e){return QD(e)}static email(e){return eR(e)}static minLength(e){return tR(e)}static maxLength(e){return nR(e)}static pattern(e){return iR(e)}static nullValidator(e){return TS()}static compose(e){return FS(e)}static composeAsync(e){return OS(e)}};function ZD(r){return e=>{if(e.value==null||r==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<r?{min:{min:r,actual:e.value}}:null}}function KD(r){return e=>{if(e.value==null||r==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>r?{max:{max:r,actual:e.value}}:null}}function JD(r){return Og(r.value)?{required:!0}:null}function QD(r){return r.value===!0?null:{required:!0}}function eR(r){return Og(r.value)||YD.test(r.value)?null:{email:!0}}function tR(r){return e=>{let t=e.value?.length??Ng(e.value);return t===null||t===0?null:t<r?{minlength:{requiredLength:r,actualLength:t}}:null}}function nR(r){return e=>{let t=e.value?.length??Ng(e.value);return t!==null&&t>r?{maxlength:{requiredLength:r,actualLength:t}}:null}}function iR(r){if(!r)return TS;let e,t;return typeof r=="string"?(t="",r.charAt(0)!=="^"&&(t+="^"),t+=r,r.charAt(r.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=r.toString(),e=r),n=>{if(Og(n.value))return null;let i=n.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function TS(r){return null}function AS(r){return r!=null}function DS(r){return Xa(r)?qt(r):r}function RS(r){let e={};return r.forEach(t=>{e=t!=null?$($({},e),t):e}),Object.keys(e).length===0?null:e}function PS(r,e){return e.map(t=>t(r))}function rR(r){return!r.validate}function IS(r){return r.map(e=>rR(e)?e:t=>e.validate(t))}function FS(r){if(!r)return null;let e=r.filter(AS);return e.length==0?null:function(t){return RS(PS(t,e))}}function LS(r){return r!=null?FS(IS(r)):null}function OS(r){if(!r)return null;let e=r.filter(AS);return e.length==0?null:function(t){let n=PS(t,e).map(DS);return Vc(n).pipe(De(RS))}}function NS(r){return r!=null?OS(IS(r)):null}function mS(r,e){return r===null?[e]:Array.isArray(r)?[...r,e]:[r,e]}function US(r){return r._rawValidators}function BS(r){return r._rawAsyncValidators}function Rg(r){return r?Array.isArray(r)?r:[r]:[]}function xd(r,e){return Array.isArray(r)?r.includes(e):r===e}function gS(r,e){let t=Rg(e);return Rg(r).forEach(i=>{xd(t,i)||t.push(i)}),t}function _S(r,e){return Rg(e).filter(t=>!xd(r,t))}var Sd=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=LS(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=NS(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Ua=class extends Sd{name;get formDirective(){return null}get path(){return null}},Nc=class extends Sd{_parent=null;name=null;valueAccessor=null},bd=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},sR={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Z3=Xe($({},sR),{"[class.ng-submitted]":"isSubmitted"}),kS=(()=>{class r extends bd{constructor(t){super(t)}static \u0275fac=function(n){return new(n||r)(qe(Nc,2))};static \u0275dir=Kt({type:r,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&bo("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[xs]})}return r})(),VS=(()=>{class r extends bd{constructor(t){super(t)}static \u0275fac=function(n){return new(n||r)(qe(Ua,10))};static \u0275dir=Kt({type:r,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,i){n&2&&bo("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[xs]})}return r})();var Ic="VALID",vd="INVALID",Oa="PENDING",Fc="DISABLED",ds=class{},Md=class extends ds{value;source;constructor(e,t){super(),this.value=e,this.source=t}},Lc=class extends ds{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},Oc=class extends ds{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},Na=class extends ds{status;source;constructor(e,t){super(),this.status=e,this.source=t}},Pg=class extends ds{source;constructor(e){super(),this.source=e}},Ig=class extends ds{source;constructor(e){super(),this.source=e}};function Ug(r){return(Ad(r)?r.validators:r)||null}function oR(r){return Array.isArray(r)?LS(r):r||null}function Bg(r,e){return(Ad(e)?e.asyncValidators:r)||null}function aR(r){return Array.isArray(r)?NS(r):r||null}function Ad(r){return r!=null&&!Array.isArray(r)&&typeof r=="object"}function zS(r,e,t){let n=r.controls;if(!(e?Object.keys(n):n).length)throw new Re(1e3,"");if(!n[t])throw new Re(1001,"")}function HS(r,e,t){r._forEachChild((n,i)=>{if(t[i]===void 0)throw new Re(1002,"")})}var Ba=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return zi(this.statusReactive)}set status(e){zi(()=>this.statusReactive.set(e))}_status=En(()=>this.statusReactive());statusReactive=Nn(void 0);get valid(){return this.status===Ic}get invalid(){return this.status===vd}get pending(){return this.status==Oa}get disabled(){return this.status===Fc}get enabled(){return this.status!==Fc}errors;get pristine(){return zi(this.pristineReactive)}set pristine(e){zi(()=>this.pristineReactive.set(e))}_pristine=En(()=>this.pristineReactive());pristineReactive=Nn(!0);get dirty(){return!this.pristine}get touched(){return zi(this.touchedReactive)}set touched(e){zi(()=>this.touchedReactive.set(e))}_touched=En(()=>this.touchedReactive());touchedReactive=Nn(!1);get untouched(){return!this.touched}_events=new ii;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(gS(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(gS(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(_S(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(_S(e,this._rawAsyncValidators))}hasValidator(e){return xd(this._rawValidators,e)}hasAsyncValidator(e){return xd(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(Xe($({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new Oc(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new Oc(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(Xe($({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new Lc(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new Lc(!0,n))}markAsPending(e={}){this.status=Oa;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Na(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(Xe($({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Fc,this.errors=null,this._forEachChild(i=>{i.disable(Xe($({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Md(this.value,n)),this._events.next(new Na(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Xe($({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Ic,this._forEachChild(n=>{n.enable(Xe($({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(Xe($({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ic||this.status===Oa)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Md(this.value,t)),this._events.next(new Na(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(Xe($({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Fc:Ic}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=Oa,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=DS(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,i)=>n&&n._find(i),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new Na(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new un,this.statusChanges=new un}_calculateStatus(){return this._allControlsDisabled()?Fc:this.errors?vd:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Oa)?Oa:this._anyControlsHaveStatus(vd)?vd:Ic}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),i&&this._events.next(new Lc(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new Oc(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Ad(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=oR(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=aR(this._rawAsyncValidators)}},Ed=class extends Ba{constructor(e,t,n){super(Ug(t),Bg(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){HS(this,!0,e),Object.keys(e).forEach(n=>{zS(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let i=this.controls[n];i&&i.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,i)=>{n.reset(e?e[i]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,i)=>((n.enabled||this.disabled)&&(t[i]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((i,s)=>{n=t(n,i,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Fg=class extends Ed{};var GS=new ce("",{providedIn:"root",factory:()=>kg}),kg="always";function lR(r,e){return[...e.path,r]}function vS(r,e,t=kg){Vg(r,e),e.valueAccessor.writeValue(r.value),(r.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(r.disabled),uR(r,e),dR(r,e),hR(r,e),cR(r,e)}function yS(r,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),Cd(r,e),r&&(e._invokeOnDestroyCallbacks(),r._registerOnCollectionChange(()=>{}))}function wd(r,e){r.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function cR(r,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};r.registerOnDisabledChange(t),e._registerOnDestroy(()=>{r._unregisterOnDisabledChange(t)})}}function Vg(r,e){let t=US(r);e.validator!==null?r.setValidators(mS(t,e.validator)):typeof t=="function"&&r.setValidators([t]);let n=BS(r);e.asyncValidator!==null?r.setAsyncValidators(mS(n,e.asyncValidator)):typeof n=="function"&&r.setAsyncValidators([n]);let i=()=>r.updateValueAndValidity();wd(e._rawValidators,i),wd(e._rawAsyncValidators,i)}function Cd(r,e){let t=!1;if(r!==null){if(e.validator!==null){let i=US(r);if(Array.isArray(i)&&i.length>0){let s=i.filter(o=>o!==e.validator);s.length!==i.length&&(t=!0,r.setValidators(s))}}if(e.asyncValidator!==null){let i=BS(r);if(Array.isArray(i)&&i.length>0){let s=i.filter(o=>o!==e.asyncValidator);s.length!==i.length&&(t=!0,r.setAsyncValidators(s))}}}let n=()=>{};return wd(e._rawValidators,n),wd(e._rawAsyncValidators,n),t}function uR(r,e){e.valueAccessor.registerOnChange(t=>{r._pendingValue=t,r._pendingChange=!0,r._pendingDirty=!0,r.updateOn==="change"&&WS(r,e)})}function hR(r,e){e.valueAccessor.registerOnTouched(()=>{r._pendingTouched=!0,r.updateOn==="blur"&&r._pendingChange&&WS(r,e),r.updateOn!=="submit"&&r.markAsTouched()})}function WS(r,e){r._pendingDirty&&r.markAsDirty(),r.setValue(r._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1}function dR(r,e){let t=(n,i)=>{e.valueAccessor.writeValue(n),i&&e.viewToModelUpdate(n)};r.registerOnChange(t),e._registerOnDestroy(()=>{r._unregisterOnChange(t)})}function fR(r,e){r==null,Vg(r,e)}function pR(r,e){return Cd(r,e)}function mR(r,e){if(!r.hasOwnProperty("model"))return!1;let t=r.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function gR(r){return Object.getPrototypeOf(r.constructor)===jD}function _R(r,e){r._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function vR(r,e){if(!e)return null;Array.isArray(e);let t,n,i;return e.forEach(s=>{s.constructor===Td?t=s:gR(s)?n=s:i=s}),i||n||t||null}function yR(r,e){let t=r.indexOf(e);t>-1&&r.splice(t,1)}function xS(r,e){let t=r.indexOf(e);t>-1&&r.splice(t,1)}function SS(r){return typeof r=="object"&&r!==null&&Object.keys(r).length===2&&"value"in r&&"disabled"in r}var yd=class extends Ba{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,n){super(Ug(t),Bg(n,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ad(t)&&(t.nonNullable||t.initialValueIsDefault)&&(SS(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){xS(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){xS(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){SS(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var xR=r=>r instanceof yd;var jS=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275dir=Kt({type:r,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return r})();var XS=new ce("");var SR={provide:Ua,useExisting:zc(()=>zg)},zg=(()=>{class r extends Ua{callSetDisabledState;get submitted(){return zi(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=En(()=>this._submittedReactive());_submittedReactive=Nn(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new un;constructor(t,n,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Cd(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return vS(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){yS(t.control||null,t,!1),yR(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),_R(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Pg(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new Ig(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,i=this.form.get(t.path);n!==i&&(yS(n||null,t),xR(i)&&(vS(i,t,this.callSetDisabledState),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);fR(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&pR(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Vg(this.form,this),this._oldForm&&Cd(this._oldForm,this)}static \u0275fac=function(n){return new(n||r)(qe(wS,10),qe(CS,10),qe(GS,8))};static \u0275dir=Kt({type:r,selectors:[["","formGroup",""]],hostBindings:function(n,i){n&1&&Mo("submit",function(o){return i.onSubmit(o)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[qc([SR]),xs,go]})}return r})();var bR={provide:Nc,useExisting:zc(()=>Hg)},Hg=(()=>{class r extends Nc{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new un;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,n,i,s,o){super(),this._ngModelWarningConfig=o,this._parent=t,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=vR(this,s)}ngOnChanges(t){this._added||this._setUpControl(),mR(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return lR(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||r)(qe(Ua,13),qe(wS,10),qe(CS,10),qe(ES,10),qe(XS,8))};static \u0275dir=Kt({type:r,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[qc([bR]),xs,go]})}return r})();var MR=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Vi({type:r});static \u0275inj=Bi({})}return r})(),Lg=class extends Ba{constructor(e,t,n){super(Ug(t),Bg(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){HS(this,!1,e),e.forEach((n,i)=>{zS(this,!1,i),this.at(i).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,i)=>{this.at(i)&&this.at(i).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,i)=>{n.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function bS(r){return!!r&&(r.asyncValidators!==void 0||r.validators!==void 0||r.updateOn!==void 0)}var $S=(()=>{class r{useNonNullable=!1;get nonNullable(){let t=new r;return t.useNonNullable=!0,t}group(t,n=null){let i=this._reduceControls(t),s={};return bS(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new Ed(i,s)}record(t,n=null){let i=this._reduceControls(t);return new Fg(i,n)}control(t,n,i){let s={};return this.useNonNullable?(bS(n)?s=n:(s.validators=n,s.asyncValidators=i),new yd(t,Xe($({},s),{nonNullable:!0}))):new yd(t,n,i)}array(t,n,i){let s=t.map(o=>this._createControl(o));return new Lg(s,n,i)}_reduceControls(t){let n={};return Object.keys(t).forEach(i=>{n[i]=this._createControl(t[i])}),n}_createControl(t){if(t instanceof yd)return t;if(t instanceof Ba)return t;if(Array.isArray(t)){let n=t[0],i=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(n,i,s)}else return this.control(t)}static \u0275fac=function(n){return new(n||r)};static \u0275prov=oe({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var qS=(()=>{class r{static withConfig(t){return{ngModule:r,providers:[{provide:XS,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:GS,useValue:t.callSetDisabledState??kg}]}}static \u0275fac=function(n){return new(n||r)};static \u0275mod=Vi({type:r});static \u0275inj=Bi({imports:[MR]})}return r})();function wR(r,e){if(r&1){let t=qd();G(0,"div",3)(1,"p"),ue(2,"\u05D4\u05D4\u05D5\u05D3\u05E2\u05D4 \u05E0\u05E9\u05DC\u05D7\u05D4 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"),H(),G(3,"button",4),Mo("click",function(){Vd(t);let i=Lr();return zd(i.resetForm())}),ue(4,"\u05E9\u05DC\u05D7 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05E0\u05D5\u05E1\u05E4\u05EA"),H()()}}function CR(r,e){r&1&&(G(0,"div",18),ue(1," \u05E9\u05DD \u05D7\u05D5\u05D1\u05D4 "),H())}function TR(r,e){r&1&&(G(0,"span"),ue(1,"\u05DE\u05D9\u05D9\u05DC \u05D7\u05D5\u05D1\u05D4"),H())}function AR(r,e){r&1&&(G(0,"span"),ue(1,"\u05D1\u05D1\u05E7\u05E9\u05D4 \u05D4\u05DB\u05E0\u05E1 \u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC \u05EA\u05E7\u05D9\u05E0\u05D4"),H())}function DR(r,e){if(r&1&&(G(0,"div",18),Pt(1,TR,2,0,"span",17)(2,AR,2,0,"span",17),H()),r&2){let t,n,i=Lr(2);ve(),Ue("ngIf",(t=i.contactForm.get("email"))==null||t.errors==null?null:t.errors.required),ve(),Ue("ngIf",(n=i.contactForm.get("email"))==null||n.errors==null?null:n.errors.email)}}function RR(r,e){r&1&&(G(0,"div",18),ue(1," \u05D1\u05D1\u05E7\u05E9\u05D4 \u05D4\u05DB\u05E0\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF \u05EA\u05E7\u05D9\u05DF "),H())}function PR(r,e){r&1&&(G(0,"div",18),ue(1," \u05D4\u05D5\u05D3\u05E2\u05D4 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 "),H())}function IR(r,e){r&1&&(G(0,"span"),ue(1,"\u05E9\u05DC\u05D9\u05D7\u05EA \u05D4\u05D5\u05D3\u05E2\u05D4"),H())}function FR(r,e){r&1&&(G(0,"span"),ue(1,"\u05E9\u05D5\u05DC\u05D7..."),H())}function LR(r,e){if(r&1){let t=qd();G(0,"form",5),Mo("ngSubmit",function(){Vd(t);let i=Lr();return zd(i.onSubmit())}),G(1,"div",6)(2,"label",7),ue(3,"\u05E9\u05DD"),H(),Se(4,"input",8),Pt(5,CR,2,0,"div",9),H(),G(6,"div",6)(7,"label",10),ue(8,"\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC"),H(),Se(9,"input",11),Pt(10,DR,3,2,"div",9),H(),G(11,"div",6)(12,"label",12),ue(13,"\u05D8\u05DC\u05E4\u05D5\u05DF"),H(),Se(14,"input",13),Pt(15,RR,2,0,"div",9),H(),G(16,"div",6)(17,"label",14),ue(18,"\u05D4\u05D5\u05D3\u05E2\u05D4"),H(),Se(19,"textarea",15),Pt(20,PR,2,0,"div",9),H(),G(21,"div",6)(22,"button",16),Pt(23,IR,2,0,"span",17)(24,FR,2,0,"span",17),H()()()}if(r&2){let t,n,i,s,o=Lr();Ue("formGroup",o.contactForm),ve(5),Ue("ngIf",((t=o.contactForm.get("name"))==null?null:t.invalid)&&((t=o.contactForm.get("name"))==null?null:t.touched)),ve(5),Ue("ngIf",((n=o.contactForm.get("email"))==null?null:n.invalid)&&((n=o.contactForm.get("email"))==null?null:n.touched)),ve(5),Ue("ngIf",((i=o.contactForm.get("phone"))==null?null:i.invalid)&&((i=o.contactForm.get("phone"))==null?null:i.touched)),ve(5),Ue("ngIf",((s=o.contactForm.get("message"))==null?null:s.invalid)&&((s=o.contactForm.get("message"))==null?null:s.touched)),ve(2),Ue("disabled",o.contactForm.invalid||o.isSubmitting),ve(),Ue("ngIf",!o.isSubmitting),ve(),Ue("ngIf",o.isSubmitting)}}var Dd=class r{constructor(e){this.fb=e;this.contactForm=this.fb.group({name:["",Rr.required],email:["",[Rr.required,Rr.email]],phone:["",[Rr.required,Rr.pattern("^[0-9]{9,15}$")]],message:["",Rr.required]})}contactForm;isSubmitting=!1;isSubmitted=!1;googleFormsUrl="https://docs.google.com/forms/d/e/1FAIpQLScgZYbud3Gexrc-HLAEIZW1yZIRwyhJJyqpcZxsWGg9YIRu8A/formResponse";formFieldMapping={name:"entry.1720828902",email:"entry.1527535177",phone:"entry.1882868741",message:"entry.1506877068"};onSubmit(){if(this.contactForm.valid){this.isSubmitting=!0;let e=document.createElement("iframe");e.name="hidden_iframe",e.id="hidden_iframe",e.style.display="none",document.body.appendChild(e);let t=document.createElement("form");t.action=this.googleFormsUrl,t.method="POST",t.target="hidden_iframe",Object.keys(this.formFieldMapping).forEach(n=>{let i=document.createElement("input");i.type="text",i.name=this.formFieldMapping[n],i.value=this.contactForm.get(n)?.value,t.appendChild(i)}),document.body.appendChild(t),e.addEventListener("load",()=>{setTimeout(()=>{this.isSubmitting=!1,this.isSubmitted=!0,document.body.removeChild(t),document.body.removeChild(e)},500)}),t.submit()}else Object.keys(this.contactForm.controls).forEach(e=>{this.contactForm.get(e)?.markAsTouched()})}resetForm(){this.contactForm.reset(),this.isSubmitted=!1}static \u0275fac=function(t){return new(t||r)(qe($S))};static \u0275cmp=Mn({type:r,selectors:[["app-contact-form"]],decls:5,vars:2,consts:[[1,"contact-container"],["class","success-message",4,"ngIf"],["class","contact-form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"success-message"],[1,"reset-btn",3,"click"],[1,"contact-form",3,"ngSubmit","formGroup"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name","placeholder","\u05D4\u05E9\u05DD \u05E9\u05DC\u05DA"],["class","error-message",4,"ngIf"],["for","email"],["type","email","id","email","formControlName","email","placeholder","\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC"],["for","phone"],["type","tel","id","phone","formControlName","phone","placeholder","\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"],["for","message"],["id","message","formControlName","message","rows","5","placeholder","\u05D4\u05D4\u05D5\u05D3\u05E2\u05D4 \u05E9\u05DC\u05DA"],["type","submit",1,"submit-btn",3,"disabled"],[4,"ngIf"],[1,"error-message"]],template:function(t,n){t&1&&(G(0,"div",0)(1,"h2"),ue(2,"\u05E6\u05E8\u05D5 \u05D0\u05D9\u05EA\u05D9 \u05E7\u05E9\u05E8"),H(),Pt(3,wR,5,0,"div",1)(4,LR,25,8,"form",2),H()),t&2&&(ve(3),Ue("ngIf",n.isSubmitted),ve(),Ue("ngIf",!n.isSubmitted))},dependencies:[qa,qS,jS,Td,kS,VS,zg,Hg,Co],styles:[".contact-container[_ngcontent-%COMP%]{max-width:600px;margin:0 auto;padding:20px;font-family:Arial,sans-serif}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;color:var(--color1)}.contact-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{padding:10px;border:1px solid #ccc;border-radius:4px;font-size:16px}.error-message[_ngcontent-%COMP%]{color:#d9534f;font-size:14px;margin-top:5px}.submit-btn[_ngcontent-%COMP%]{background-color:var(--color1);color:#fff;border:none;padding:12px;font-size:16px;border-radius:4px;cursor:pointer;margin-top:10px}.submit-btn[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}.success-message[_ngcontent-%COMP%]{text-align:center;padding:20px;background-color:var(--color2);border-radius:4px}.reset-btn[_ngcontent-%COMP%]{background-color:var(--color1);color:#fff;border:none;padding:10px 15px;font-size:16px;border-radius:4px;cursor:pointer;margin-top:10px}.reset-btn[_ngcontent-%COMP%], .submit-btn[_ngcontent-%COMP%]{transition:all .3s ease-in}.reset-btn[_ngcontent-%COMP%]:hover, .submit-btn[_ngcontent-%COMP%]:hover{transform:translateY(-3px)}"]})};var OR=["coffeeText"],NR=["left"],UR=["right"],BR=["mainTitle"],kR=["recommendationicon"],VR=["recommendationsElement"],zR=["box"],HR=["titles"],GR=["points"];function WR(r,e){if(r&1&&(G(0,"div",60,7)(2,"div",61),Se(3,"img",62),G(4,"div",63)(5,"h5",64),ue(6),H(),G(7,"p",65),ue(8),H()()()()),r&2){let t=e.$implicit;ve(3),Ue("src","icons/"+t.name+".svg",_o)("alt",t.title),ve(3),ir(t.title),ve(2),ir(t.description)}}function jR(r,e){if(r&1&&(G(0,"div",66,8)(2,"div"),ue(3),H()()),r&2){let t=e.$implicit;ve(3),ir(t)}}function XR(r,e){if(r&1&&(G(0,"div",67)(1,"div",68)(2,"div",69),ue(3),H(),Se(4,"div",70),H()()),r&2){let t=e.$implicit;ve(3),_0(" ",t.name,", ",t.title," "),ve(),Ue("innerHTML",t.description,jc)}}var Rd=class r{dataService=W(Gh);translateService=W(Ps);cdr=W(rr);skills=En(()=>this.dataService.data().technologies);team=En(()=>this.dataService.data().team);projectTypes=En(()=>this.dataService.data().projectTypes);points=En(()=>this.dataService.data().points);recommendations=En(()=>this.dataService.data().recommendations);loaded=Nn(!1);boxes;coffeeText;left;right;mainTitle;titles;pointElements;recommendationIcon;recommendationsElement;sceneGraph=md;ngOnInit(){Ke.registerPlugin(_e,ma,Dm)}constructor(){Eo(()=>{let e=this.points();queueMicrotask(()=>{this.cdr.detectChanges(),this.pointElements.length>0&&(this.loaded.set(!0),this.initGsap())})})}ngAfterViewInit(){}initGsap(){Ke.timeline().from(this.right.nativeElement,{duration:2,x:30,opacity:0}),Ke.timeline().from(this.left.nativeElement,{duration:2,x:-30,opacity:0});let n=Ke.timeline();n.set(this.mainTitle.nativeElement,{y:-10}),n.to(this.mainTitle.nativeElement,{duration:1,y:0,opacity:1}),this.titles.forEach((s,o)=>{Ke.set(s.nativeElement,{opacity:0}),setTimeout(()=>{let a=Ke.timeline();a.to(s.nativeElement,{duration:1,y:30,opacity:0}),a.to(s.nativeElement,{duration:1,y:0,opacity:1})},o*200)}),this.boxes.forEach((s,o)=>{Ke.from(s.nativeElement,{scrollTrigger:{trigger:s.nativeElement,start:"center bottom",end:"center 70%",scrub:!0,toggleActions:"play none none reset"},scale:.8,rotate:5,opacity:.6,duration:1,delay:29})}),this.pointElements.forEach((s,o)=>{Pc||Ke.to(s.nativeElement,{scrollTrigger:{trigger:s.nativeElement,start:"top 30%",end:"bottom top",scrub:!0,toggleActions:"play none none reset"},opacity:.5,y:-o*50-50,duration:1});let a=Ke.timeline({scrollTrigger:{trigger:s.nativeElement,start:"top bottom",toggleActions:"play none none none",once:!0}});a.from(s.nativeElement,{duration:1,scale:.6,opacity:0,delay:0+o*.1}),a.call(()=>{let l=s.nativeElement.querySelector(".card");l&&(console.log("shwoing border"),l.classList.add("show-border"),setTimeout(()=>{l.classList.remove("show-border")},3e3))},void 0,void 0)}),Ke.set(this.coffeeText.nativeElement,{x:-100}),Ke.timeline({scrollTrigger:{trigger:this.coffeeText.nativeElement,start:"top 100%",toggleActions:"play none none reset"}}).to(this.coffeeText.nativeElement,{delay:.5,duration:1,x:0}),Pc||(Ke.from(this.recommendationIcon.nativeElement,{scrollTrigger:{trigger:this.recommendationIcon.nativeElement,start:"center bottom",end:"center 70%",scrub:!0,toggleActions:"play none none reset"},scale:.8,x:200,rotate:20,duration:1}),Ke.from(this.recommendationsElement.nativeElement,{scrollTrigger:{trigger:this.recommendationsElement.nativeElement,start:"center bottom",end:"center 70%",scrub:!0,toggleActions:"play none none reset"},scale:.8,x:-200,rotate:-20,duration:1}))}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=Mn({type:r,selectors:[["app-home"]],viewQuery:function(t,n){if(t&1&&(Un(OR,5),Un(NR,5),Un(UR,5),Un(BR,5),Un(kR,5),Un(VR,5),Un(zR,5),Un(HR,5),Un(GR,5)),t&2){let i;Bn(i=kn())&&(n.coffeeText=i.first),Bn(i=kn())&&(n.left=i.first),Bn(i=kn())&&(n.right=i.first),Bn(i=kn())&&(n.mainTitle=i.first),Bn(i=kn())&&(n.recommendationIcon=i.first),Bn(i=kn())&&(n.recommendationsElement=i.first),Bn(i=kn())&&(n.boxes=i),Bn(i=kn())&&(n.titles=i),Bn(i=kn())&&(n.pointElements=i)}},decls:93,vars:5,consts:[["right",""],["mainTitle",""],["left",""],["titles",""],["recommendationsElement",""],["recommendationicon",""],["coffeeText",""],["points",""],["box",""],[1,"first-section","container-fluid","text-center"],[1,"container","h-100"],[1,"row","h-100"],[1,"logo","col-sm-6","d-flex","justify-content-center","align-items-center"],["src","gray1.mp4","onloadedmetadata","this.muted = true","autoplay","","muted","","loop","","playsinline","","preload","auto",1,"square-video"],[1,"col-sm-6","d-flex","justify-content-center","align-items-center","flex-column","logo-section"],[1,"logo-container"],["src","images/newlogo2 - Copy.png","width","200"],[1,"d-flex","flex-row","justify-content-center","align-items-center"],["width","30px","src","images/right.png",1,"brackets","right"],[1,"bold","name","d-inline","quicksend-font"],["src","images/left.png","width","30px",1,"brackets","left"],[1,"d-none"],["aria-hidden","true",1,"d-none"],[1,"title","mt-3","special-background"],[1,"highlights","py-5","points-section"],[1,"container"],[1,"row"],["class","col-md-4 mb-4",4,"ngFor","ngForOf"],[1,"container","d-none3"],[1,"projects-list"],[3,"projects"],[1,"container","text-center"],[1,"text-center"],["src","icons/stars.svg","width","100"],[1,"d-flex","flex-row","tools-list"],["class","box",4,"ngFor","ngForOf"],[1,"container","text-center","mt-5"],[1,"row","recommendations-row"],[1,"col-sm-8"],[3,"recommendations"],[1,"col-sm-4"],["src","icons/recommendations.svg","aria-hidden","true",1,"img","img-fluid"],[1,"container","teams","text-center"],[1,"style3","fw-bold0","mt-3"],[1,"row","d-flex","flex-wrap","mb-5"],["class","special-background team-rec col-lg-3 col-sm-6 d-flex",4,"ngFor","ngForOf"],[1,"contact-section","mb-3"],[1,"special-background"],[1,"row","contact-card"],[1,"col-sm-6"],[1,"text-center","pt-3"],["src","icons/coffee-mug.svg","width","100","aria-hidden","true"],[1,"coffee-text","text-center","mb-3"],[1,"contact-details"],["src","icons/email.svg","width","70","aria-hidden","true"],["aria-label","\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC",1,"display-6"],["src","icons/phone.svg","width","70","aria-hidden","true"],["aria-label","\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF",1,"display-6"],[1,"text-center","special-background","container"],["_ngcontent-vgr-c14","","src","favicon.ico","alt","Rivky Rubin","width","30px"],[1,"col-md-4","mb-4"],[1,"card","shadow-sm","text-center","h-100"],[1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"box"],[1,"special-background","team-rec","col-lg-3","col-sm-6","d-flex"],[1,"w-100","h-100"],[1,"fw-bold","mb-2"],[3,"innerHTML"]],template:function(t,n){t&1&&(G(0,"div",9)(1,"div",10)(2,"div",11)(3,"div",12),Se(4,"video",13),H(),G(5,"div",14)(6,"div",15),Se(7,"img",16),H(),G(8,"div",17),Se(9,"img",18,0),G(11,"span",19,1),ue(13,"Rivky Rubin"),H(),Se(14,"img",20,2),H(),G(16,"h1",21),ue(17,"\u05E8\u05D1\u05E7\u05D9 \u05E8\u05D5\u05D1\u05D9\u05DF"),H(),G(18,"h2",22),ue(19,"\u05E4\u05D9\u05EA\u05D5\u05D7 \u05EA\u05D5\u05DB\u05E0\u05D5\u05EA \u05D5\u05D0\u05EA\u05E8\u05D9\u05DD"),H(),G(20,"div",23)(21,"span",null,3),ue(23,"\u05E4\u05D9\u05EA\u05D5\u05D7"),H(),G(24,"span",null,3),ue(26,"\u05EA\u05D5\u05DB\u05E0\u05D5\u05EA"),H(),G(27,"span",null,3),ue(29,"\u05D5\u05D0\u05EA\u05E8\u05D9\u05DD"),H()()()()()(),G(30,"section",24)(31,"div",25)(32,"div",26),Pt(33,WR,9,4,"div",27),H()()(),G(34,"section")(35,"div",28)(36,"div",29),Se(37,"app-projects1",30),H()()(),G(38,"div",31)(39,"div",32),Se(40,"img",33),H(),G(41,"h3"),ue(42,"\u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D5\u05EA \u05DE\u05D5\u05D1\u05D9\u05DC\u05D5\u05EA"),H(),G(43,"div",34),Pt(44,jR,4,1,"div",35),H()(),G(45,"section",36)(46,"h2"),ue(47,"\u05D4\u05DE\u05DC\u05E6\u05D5\u05EA"),H(),G(48,"div",37)(49,"div",38,4),Se(51,"app-recommendations",39),H(),G(52,"div",40),Se(53,"img",41,5),H()()(),G(55,"section")(56,"div",42)(57,"h3"),ue(58,"\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DB\u05E9\u05DB\u05D9\u05E8\u05D4"),H(),G(59,"div"),ue(60,"\u05E2\u05D1\u05D3\u05EA\u05D9 \u05DB\u05DE\u05E4\u05EA\u05D7\u05EA \u05EA\u05D5\u05DB\u05E0\u05D4 \u05D1\u05D7\u05D1\u05E8\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D5\u05EA \u05DB\u05DE\u05D5 \u05D5\u05E8\u05D9\u05E4\u05D5\u05DF. \u05D1\u05DE\u05E1\u05D2\u05E8\u05EA \u05EA\u05E4\u05E7\u05D9\u05D3\u05D9 \u05E4\u05D9\u05EA\u05D7\u05EA\u05D9 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D5\u05E8\u05DB\u05D1\u05D5\u05EA \u05DE\u05D1\u05D5\u05E1\u05E1\u05D5\u05EA .NET Core, C#, Entity Framework, Angular \u05D5\u05E2\u05D5\u05D3. \u05D4\u05D9\u05D9\u05EA\u05D9 \u05D0\u05D7\u05E8\u05D0\u05D9\u05EA \u05E2\u05DC \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05E2\u05EA\u05D9\u05E8\u05D5\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8 \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD, \u05E9\u05DB\u05DC\u05DC\u05D5 \u05D1\u05D9\u05DF \u05D4\u05D9\u05EA\u05E8 \u05D2\u05E8\u05E4\u05D9\u05DD \u05D5\u05D3\u05D5\u05D7\u05D5\u05EA, \u05E0\u05D9\u05D4\u05D5\u05DC \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05D5\u05EA, \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D5\u05EA \u05D1\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA (RabbitMQ \u05D5\u05BEHTTPS), \u05D5\u05E4\u05D9\u05EA\u05D5\u05D7 \u05E6\u05D3 \u05DC\u05E7\u05D5\u05D7 \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05E9\u05D5\u05E4\u05E8\u05E1\u05DC NOW."),H(),G(61,"div",43),ue(62,"\u05D7\u05DC\u05E7 \u05DE\u05DE\u05D4 \u05E9\u05DB\u05EA\u05D1\u05D5 \u05E2\u05DC\u05D9 \u05DB\u05E9\u05DB\u05D9\u05E8\u05D4: "),H(),G(63,"div",44),Pt(64,XR,5,3,"div",45),H()()(),G(65,"section",46)(66,"div",25)(67,"div",47)(68,"div",48)(69,"div",49),Se(70,"app-contact-form"),H(),G(71,"div",49)(72,"div",50),Se(73,"img",51),H(),G(74,"div",52,6),ue(76," \u05E9\u05EA\u05D5 \u05E7\u05E4\u05D4 \u05D1\u05E0\u05D7\u05EA -"),Se(77,"br"),ue(78," \u05D5\u05D0\u05E4\u05EA\u05D7 \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E0\u05E6\u05D7\u05EA "),H(),G(79,"div",53)(80,"div"),Se(81,"img",54),G(82,"span",55),ue(83," rivkyrubin2@gmail.com "),H()(),G(84,"div"),Se(85,"img",56),G(86,"span",57),ue(87,"052-717-8860"),H()()()()()()()(),G(88,"section")(89,"div",58),ue(90," \xA9 \u05E2\u05D9\u05E6\u05D5\u05D1 \u05D5\u05E4\u05D9\u05EA\u05D5\u05D7 "),Se(91,"img",59),ue(92," Rivky Rubin "),H()()),t&2&&(ve(33),Ue("ngForOf",n.points()),ve(4),Ue("projects",n.projectTypes()),ve(7),Ue("ngForOf",n.skills()),ve(7),Ue("recommendations",n.recommendations()),ve(13),Ue("ngForOf",n.team()))},dependencies:[Nr,Y_,gd,_d,Dd],styles:['@charset "UTF-8";.tools-list[_ngcontent-%COMP%]{color:var(--color7);gap:1rem;padding:1rem;flex-wrap:wrap;justify-content:center}.tools-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{text-align:center;width:150px;height:150px;justify-content:center;align-items:center;display:flex;border-radius:10px;background-color:var(--bg2Color);transition:all .3s ease-in}.tools-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover{background-color:var(--bg3Color)}.teams[_ngcontent-%COMP%]{margin-top:3rem}.teams[_ngcontent-%COMP%]   .team-rec[_ngcontent-%COMP%]{padding:1rem;display:flex}.teams[_ngcontent-%COMP%]   .team-rec[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;border-radius:28px;overflow:hidden;padding:1rem}.first-section[_ngcontent-%COMP%]{height:70vh;background-color:#161614}.first-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{padding:35px}.first-section[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{opacity:0;font-size:4rem;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;color:var(--color7)}.first-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:5rem;line-height:1;display:flex;text-align:center;justify-content:center;flex-direction:row;gap:1rem;margin-top:2rem}.first-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:0}.first-section[_ngcontent-%COMP%]   .title.special-backgruond[_ngcontent-%COMP%]{z-index:0}.first-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-family:TelAviv!important}.main-title[_ngcontent-%COMP%]{font-size:5rem}@media only screen and (max-width: 992px){.first-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.first-section[_ngcontent-%COMP%]{height:auto;padding:15px 0}.first-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex-direction:column;font-size:4rem;gap:0}.logo-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;margin-bottom:-45px}.logo-section[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:2rem}}.card[_ngcontent-%COMP%]{background-color:var(--gray4)!important;border:none;position:relative;margin:4px}.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{white-space:pre-line}.card[_ngcontent-%COMP%]:hover   .card-img-top[_ngcontent-%COMP%]{filter:saturate(3);transform:scale(1.1)}.card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{width:auto;height:130px;margin:1rem auto;transition:all .3s ease-in}.recommendations-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:-50px;margin-bottom:-40px}.recommendations-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:var(--gray4)}.recommendations-section[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{white-space:pre-line}@property --gradient-angle{syntax: "<angle>"; initial-value: 0deg; inherits: false;}.card[_ngcontent-%COMP%]{--clr-1: #052b2f;--clr-2: #073438;--clr-3: #0e4b50;--clr-4: #2d8f85;--clr-5: #637c54;position:relative}.card[_ngcontent-%COMP%]:hover:before, .card[_ngcontent-%COMP%]:hover:after{opacity:1}.card.show-border[_ngcontent-%COMP%]:before, .card.show-border[_ngcontent-%COMP%]:after{opacity:1}.card[_ngcontent-%COMP%]:before, .card[_ngcontent-%COMP%]:after{opacity:0;content:"";position:absolute;inset:0;z-index:-1;transition:all .5s;background:conic-gradient(from var(--gradient-angle),var(--color8),var(--color1),var(--color8),var(--color8),var(--color8));border-radius:inherit;animation:rotation 4s linear infinite}.card[_ngcontent-%COMP%]:after{filter:blur(.3rem)}.contact-section[_ngcontent-%COMP%]   .coffee-text[_ngcontent-%COMP%]{font-size:3rem}.contact-section[_ngcontent-%COMP%]   .special-background[_ngcontent-%COMP%]:before{animation-duration:100s;opacity:.01}.contact-section[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]{border-radius:28px;overflow:hidden;border:7px solid var(--color2);min-height:50vh;margin-top:5rem}a[_ngcontent-%COMP%]{color:var(--color7)!important}.monitor-img[_ngcontent-%COMP%]{width:100%}.monitor[_ngcontent-%COMP%]{width:100%;aspect-ratio:2;overflow-y:scroll;border:solid 1em #333;border-radius:.5em}.stand[_ngcontent-%COMP%]{padding-bottom:51px}.monitor[_ngcontent-%COMP%]::-webkit-scrollbar{width:15px}.monitor[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#666}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#888}.stand[_ngcontent-%COMP%]:before{content:"";display:block;position:relative;background:#222;width:150px;height:50px;top:382px;right:50%;transform:translate(50%)}.stand[_ngcontent-%COMP%]:after{content:"";display:block;position:relative;background:#333;border-top-left-radius:.5em;border-top-right-radius:.5em;width:300px;height:15px;top:50px;right:50%;transform:translate(50%)}.splash-screen[_ngcontent-%COMP%]{width:100vw;height:100vh;position:absolute;top:0;right:0;background-color:var(--color7)}.square-video[_ngcontent-%COMP%]{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;border-radius:50px 50px 28% 20%;opacity:.6}@media only screen and (max-width: 576px){.logo-section[_ngcontent-%COMP%]{margin-top:-50px;z-index:1}.logo-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2rem}.first-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:3rem}.contact-card[_ngcontent-%COMP%]   .coffee-text[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:1rem}.contact-card[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .display-6[_ngcontent-%COMP%]{font-size:1rem}.contact-card[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}.tools-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{width:75px;height:75px}.recommendations-row[_ngcontent-%COMP%]{flex-direction:column-reverse}}']})};var YS=[{path:"",component:Rd}];var $R="@",qR=(()=>{class r{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=W(nr);loadingSchedulerFn=W(YR,{optional:!0});_engine;constructor(t,n,i,s,o){this.doc=t,this.delegate=n,this.zone=i,this.animationType=s,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-RSYTDW3I.js").then(i=>i),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(i=>{throw new Re(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let o=new s(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(t,n){let i=this.delegate.createRenderer(t,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new Gg(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let a=o.createRenderer(t,n);s.use(a),this.scheduler??=this.injector.get(n0,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(n){l0()};static \u0275prov=oe({token:r,factory:r.\u0275fac})}return r})(),Gg=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,i){this.delegate.insertBefore(e,t,n,i)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,i){this.delegate.setAttribute(e,t,n,i)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,i){this.delegate.setStyle(e,t,n,i)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n,i){return this.shouldReplay(t)&&this.replay.push(s=>s.listen(e,t,n,i)),this.delegate.listen(e,t,n,i)}shouldReplay(e){return this.replay!==null&&e.startsWith($R)}},YR=new ce("");function ZS(r="animations"){return a0("NgAsyncAnimations"),er([{provide:ja,useFactory:(e,t,n)=>new qR(e,t,n,r),deps:[yt,Qa,ki]},{provide:s0,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}function ZR(r){return new Z_(r,"i18n/",".json")}var KS={providers:[x0({eventCoalescing:!0}),Of(YS),ZS(),hf(),q_({loader:{provide:lr,useFactory:ZR,deps:[Br]},defaultLanguage:"en"})]};var Pd=class r{title="portfolio";translate=W(Ps);constructor(){this.translate.addLangs(["he","en"]),this.translate.currentLang="he",this.translate.setDefaultLang("he")}translateLanguageTo(e){this.translate.use(e)}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=Mn({type:r,selectors:[["app-root"]],decls:8,vars:0,consts:[["scrollableElement",""],[1,"d-flex","flex-column","vh-100"],[1,"flex-header","d-none"],[1,"flex-grow-1","d-flex","content-wrapper"],[1,"container-fluid","layout-container","layout-page","scroll-container","p-0"],[1,"footer"]],template:function(t,n){t&1&&(G(0,"div",1)(1,"div",2),ue(2," app navbar "),H(),G(3,"div",3)(4,"div",4,0),Se(6,"router-outlet"),H()(),Se(7,"div",5),H())},dependencies:[Sl],encapsulation:2})};lf(Pd,KS).catch(r=>console.error(r));
