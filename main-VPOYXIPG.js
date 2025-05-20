import{$ as us,$a as wg,A as ed,Aa as _g,B as ui,Ba as ho,C as co,Ca as ld,D as Mr,Da as vg,E as td,Ea as bl,F as rg,Fa as Yn,G as sg,Ga as fs,H as nd,Ha as ps,I as og,Ia as qi,J as rn,Ja as yg,K as ag,Ka as ud,L as Wt,La as xg,M as Le,Ma as Sg,N as ce,Na as Ra,O as cs,Oa as Xt,P as cg,Pa as hd,Q as pe,Qa as dd,R as _l,Ra as fd,S as te,Sa as ne,T as H,Ta as se,U as id,Ua as Fe,V as Xi,Va as bg,W as lg,Wa as Mg,X as ls,Xa as pd,Y as jt,Ya as Ri,Z as ug,Za as Pi,_ as rd,_a as Ii,a as J,aa as wr,ab as Eg,b as At,ba as vl,bb as ze,c as gl,ca as hg,cb as Li,d as so,da as yl,db as Tg,e as Qm,ea as Ai,eb as Cg,f as eg,fa as Di,fb as Ag,g as tg,ga as sd,gb as Tr,h as Kh,ha as hs,hb as Dg,i as Jh,ia as xl,ib as Rg,j as Ci,ja as Er,jb as Cr,k as $n,ka as dg,kb as fo,l as Wi,la as od,m as vn,ma as fg,n as re,na as ds,o as Ta,oa as pg,p as as,pa as ad,q as ng,qa as mg,r as Re,ra as gg,s as Qh,sa as Aa,t as qn,ta as lo,u as Ca,ua as Ze,v as oo,va as uo,w as ig,wa as Sl,x as br,xa as Da,y as ao,ya as cd,z as ji,za as $i}from"./chunk-FECM3M5S.js";var gt=new pe("");var Lg=null;function Yi(){return Lg}function md(s){Lg??=s}var Pa=class{},gd=(()=>{class s{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:()=>H(Og),providedIn:"platform"})}return s})();var Og=(()=>{class s extends gd{_location;_history;_doc=H(gt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Yi().getBaseHref(this._doc)}onPopState(t){let n=Yi().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=Yi().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,i){this._history.pushState(t,n,i)}replaceState(t,n,i){this._history.replaceState(t,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:()=>new s,providedIn:"platform"})}return s})();function Fg(s,e){return s?e?s.endsWith("/")?e.startsWith("/")?s+e.slice(1):s+e:e.startsWith("/")?s+e:`${s}/${e}`:s:e}function Pg(s){let e=s.search(/#|\?|$/);return s[e-1]==="/"?s.slice(0,e-1)+s.slice(e):s}function Ar(s){return s&&s[0]!=="?"?`?${s}`:s}var Ml=(()=>{class s{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:()=>H(Ug),providedIn:"root"})}return s})(),Ng=new pe(""),Ug=(()=>{class s extends Ml{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??H(gt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Fg(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+Ar(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${n}${i}`:n}pushState(t,n,i,r){let o=this.prepareExternalUrl(i+Ar(r));this._platformLocation.pushState(t,n,o)}replaceState(t,n,i,r){let o=this.prepareExternalUrl(i+Ar(r));this._platformLocation.replaceState(t,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||s)(te(gd),te(Ng,8))};static \u0275prov=ce({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),po=(()=>{class s{_subject=new Ci;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=Cx(Pg(Ig(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+Ar(n))}normalize(t){return s.stripTrailingSlash(Tx(this._basePath,Ig(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",i=null){this._locationStrategy.pushState(i,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Ar(n)),i)}replaceState(t,n="",i=null){this._locationStrategy.replaceState(i,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Ar(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(i=>i(t,n))}subscribe(t,n,i){return this._subject.subscribe({next:t,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=Ar;static joinWithSlash=Fg;static stripTrailingSlash=Pg;static \u0275fac=function(n){return new(n||s)(te(Ml))};static \u0275prov=ce({token:s,factory:()=>Ex(),providedIn:"root"})}return s})();function Ex(){return new po(te(Ml))}function Tx(s,e){if(!s||!e.startsWith(s))return e;let t=e.substring(s.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function Ig(s){return s.replace(/\/index.html$/,"")}function Cx(s){if(new RegExp("^(https?:)?//").test(s)){let[,t]=s.split(/\/\/[^\/]+/);return t}return s}var _d=/\s+/,Bg=[],vd=(()=>{class s{_ngEl;_renderer;initialClasses=Bg;rawClass;stateMap=new Map;constructor(t,n){this._ngEl=t,this._renderer=n}set klass(t){this.initialClasses=t!=null?t.trim().split(_d):Bg}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(_d):t}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let n of t)this._updateState(n,!0);else if(t!=null)for(let n of Object.keys(t))this._updateState(n,!!t[n]);this._applyStateDiff()}_updateState(t,n){let i=this.stateMap.get(t);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(t,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let n=t[0],i=t[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(t,n){t=t.trim(),t.length>0&&t.split(_d).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(n){return new(n||s)($i(xl),$i(cd))};static \u0275dir=ps({type:s,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return s})();var wl=class{$implicit;ngForOf;index;count;constructor(e,t,n,i){this.$implicit=e,this.ngForOf=t,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Dr=(()=>{class s{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,n,i){this._viewContainer=t,this._template=n,this._differs=i}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let n=this._viewContainer;t.forEachOperation((i,r,o)=>{if(i.previousIndex==null)n.createEmbeddedView(this._template,new wl(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,o),kg(a,i)}});for(let i=0,r=n.length;i<r;i++){let a=n.get(i).context;a.index=i,a.count=r,a.ngForOf=this._ngForOf}t.forEachIdentityChange(i=>{let r=n.get(i.currentIndex);kg(r,i)})}static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||s)($i(ho),$i(Sl),$i(Dg))};static \u0275dir=ps({type:s,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return s})();function kg(s,e){s.context.$implicit=e.item}var yd=(()=>{class s{_viewContainer;_context=new El;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,n){this._viewContainer=t,this._thenTemplateRef=n}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){zg(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){zg(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||s)($i(ho),$i(Sl))};static \u0275dir=ps({type:s,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return s})(),El=class{$implicit=null;ngIf=null};function zg(s,e){if(s&&!s.createEmbeddedView)throw new Le(2020,!1)}var Tl=(()=>{class s{static \u0275fac=function(n){return new(n||s)};static \u0275mod=fs({type:s});static \u0275inj=cs({})}return s})();function Ia(s,e){e=encodeURIComponent(e);for(let t of s.split(";")){let n=t.indexOf("="),[i,r]=n==-1?[t,""]:[t.slice(0,n),t.slice(n+1)];if(i.trim()===e)return decodeURIComponent(r)}return null}var xd="browser",Vg="server";function Cl(s){return s===Vg}var ms=class{};var Rl=new pe(""),wd=(()=>{class s{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(i=>{i.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,i,r){return this._findPluginFor(n).addEventListener(t,n,i,r)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(r=>r.supports(t)),!n)throw new Le(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||s)(te(Rl),te(Di))};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})(),La=class{_doc;constructor(e){this._doc=e}manager},Al="ng-app-id";function Hg(s){for(let e of s)e.remove()}function Gg(s,e){let t=e.createElement("style");return t.textContent=s,t}function Px(s,e,t,n){let i=s.head?.querySelectorAll(`style[${Al}="${e}"],link[${Al}="${e}"]`);if(i)for(let r of i)r.removeAttribute(Al),r instanceof HTMLLinkElement?n.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&t.set(r.textContent,{usage:0,elements:[r]})}function bd(s,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",s),t}var Ed=(()=>{class s{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,n,i,r={}){this.doc=t,this.appId=n,this.nonce=i,this.isServer=Cl(r),Px(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let i of t)this.addUsage(i,this.inline,Gg);n?.forEach(i=>this.addUsage(i,this.external,bd))}removeStyles(t,n){for(let i of t)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,n,i){let r=n.get(t);r?r.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,i(t,this.doc)))})}removeUsage(t,n){let i=n.get(t);i&&(i.usage--,i.usage<=0&&(Hg(i.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Hg(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(t,Gg(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(t,bd(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(Al,this.appId),t.appendChild(n)}static \u0275fac=function(n){return new(n||s)(te(gt),te(od),te(ad,8),te(ds))};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})(),Sd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Td=/%COMP%/g;var jg="%COMP%",Ix=`_nghost-${jg}`,Lx=`_ngcontent-${jg}`,Ox=!0,Fx=new pe("",{providedIn:"root",factory:()=>Ox});function Nx(s){return Lx.replace(Td,s)}function Ux(s){return Ix.replace(Td,s)}function Xg(s,e){return e.map(t=>t.replace(Td,s))}var Na=(()=>{class s{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,n,i,r,o,a,c,l=null,h=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=r,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=h,this.platformIsServer=Cl(a),this.defaultRenderer=new Oa(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===Aa.ShadowDom&&(n=At(J({},n),{encapsulation:Aa.Emulated}));let i=this.getOrCreateRenderer(t,n);return i instanceof Dl?i.applyToHost(t):i instanceof Fa&&i.applyStyles(),i}getOrCreateRenderer(t,n){let i=this.rendererByCompId,r=i.get(n.id);if(!r){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(n.encapsulation){case Aa.Emulated:r=new Dl(c,l,n,this.appId,h,o,a,d,f);break;case Aa.ShadowDom:return new Md(c,l,t,n,o,a,this.nonce,d,f);default:r=new Fa(c,l,n,h,o,a,d,f);break}i.set(n.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||s)(te(wd),te(Ed),te(od),te(Fx),te(gt),te(ds),te(Di),te(ad),te(mg,8))};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})(),Oa=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,n,i,r){this.eventManager=e,this.doc=t,this.ngZone=n,this.platformIsServer=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Sd[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Wg(e)?e.content:e).appendChild(t)}insertBefore(e,t,n){e&&(Wg(e)?e.content:e).insertBefore(t,n)}removeChild(e,t){t.remove()}selectRootElement(e,t){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new Le(-5104,!1);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,i){if(i){t=i+":"+t;let r=Sd[i];r?e.setAttributeNS(r,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){let i=Sd[n];i?e.removeAttributeNS(i,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,i){i&(uo.DashCase|uo.Important)?e.style.setProperty(t,n,i&uo.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&uo.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e!=null&&(e[t]=n)}setValue(e,t){e.nodeValue=t}listen(e,t,n,i){if(typeof e=="string"&&(e=Yi().getGlobalEventTarget(this.doc,e),!e))throw new Le(5102,!1);let r=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(e,t,r)),this.eventManager.addEventListener(e,t,r,i)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Wg(s){return s.tagName==="TEMPLATE"&&s.content!==void 0}var Md=class extends Oa{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,n,i,r,o,a,c,l){super(e,r,o,c,l),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let h=i.styles;h=Xg(i.id,h);for(let f of h){let u=document.createElement("style");a&&u.setAttribute("nonce",a),u.textContent=f,this.shadowRoot.appendChild(u)}let d=i.getExternalStyles?.();if(d)for(let f of d){let u=bd(f,r);a&&u.setAttribute("nonce",a),this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Fa=class extends Oa{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,n,i,r,o,a,c,l){super(e,r,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i;let h=n.styles;this.styles=l?Xg(l,h):h,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Dl=class extends Fa{contentAttr;hostAttr;constructor(e,t,n,i,r,o,a,c,l){let h=i+"-"+n.id;super(e,t,n,r,o,a,c,l,h),this.contentAttr=Nx(h),this.hostAttr=Ux(h)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}};var Cd=class extends Pa{supportsDOMEvents=!0},Pl=class s extends Cd{static makeCurrent(){md(new s)}onAndCancel(e,t,n,i){return e.addEventListener(t,n,i),()=>{e.removeEventListener(t,n,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=Bx();return t==null?null:kx(t)}resetBaseElement(){Ua=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Ia(document.cookie,e)}},Ua=null;function Bx(){return Ua=Ua||document.querySelector("base"),Ua?Ua.getAttribute("href"):null}function kx(s){return new URL(s,document.baseURI).pathname}var zx=(()=>{class s{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})(),qg=(()=>{class s extends La{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,i,r){return t.addEventListener(n,i,r),()=>this.removeEventListener(t,n,i,r)}removeEventListener(t,n,i,r){return t.removeEventListener(n,i,r)}static \u0275fac=function(n){return new(n||s)(te(gt))};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})(),$g=["alt","control","meta","shift"],Vx={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Hx={alt:s=>s.altKey,control:s=>s.ctrlKey,meta:s=>s.metaKey,shift:s=>s.shiftKey},Yg=(()=>{class s extends La{constructor(t){super(t)}supports(t){return s.parseEventName(t)!=null}addEventListener(t,n,i,r){let o=s.parseEventName(n),a=s.eventCallback(o.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Yi().onAndCancel(t,o.domEventName,a,r))}static parseEventName(t){let n=t.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let r=s._normalizeKey(n.pop()),o="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),o="code."),$g.forEach(l=>{let h=n.indexOf(l);h>-1&&(n.splice(h,1),o+=l+".")}),o+=r,n.length!=0||r.length===0)return null;let c={};return c.domEventName=i,c.fullKey=o,c}static matchEventFullKeyCode(t,n){let i=Vx[t.key]||t.key,r="";return n.indexOf("code.")>-1&&(i=t.code,r="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),$g.forEach(o=>{if(o!==i){let a=Hx[o];a(t)&&(r+=o+".")}}),r+=i,r===n)}static eventCallback(t,n,i){return r=>{s.matchEventFullKeyCode(r,t)&&i.runGuarded(()=>n(r))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||s)(te(gt))};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})();function Ad(s,e){return Rg(J({rootComponent:s},Gx(e)))}function Gx(s){return{appProviders:[...qx,...s?.providers??[]],platformProviders:$x}}function Wx(){Pl.makeCurrent()}function jx(){return new sd}function Xx(){return dg(document),document}var $x=[{provide:ds,useValue:xd},{provide:fg,useValue:Wx,multi:!0},{provide:gt,useFactory:Xx}];var qx=[{provide:lg,useValue:"root"},{provide:sd,useFactory:jx},{provide:Rl,useClass:qg,multi:!0,deps:[gt]},{provide:Rl,useClass:Yg,multi:!0,deps:[gt]},Na,Ed,wd,{provide:Da,useExisting:Na},{provide:ms,useClass:zx},[]];var go=class{},Ba=class{},Rr=class s{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let n=t.indexOf(":");if(n>0){let i=t.slice(0,n),r=t.slice(n+1).trim();this.addHeaderEntry(i,r)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,n)=>{this.addHeaderEntry(n,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,n])=>{this.setHeaderEntries(t,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof s?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new s;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof s?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,t);let i=(e.op==="a"?this.headers.get(t):void 0)||[];i.push(...n),this.headers.set(t,i);break;case"d":let r=e.value;if(!r)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>r.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}addHeaderEntry(e,t){let n=e.toLowerCase();this.maybeSetNormalizedName(e,n),this.headers.has(n)?this.headers.get(n).push(t):this.headers.set(n,[t])}setHeaderEntries(e,t){let n=(Array.isArray(t)?t:[t]).map(r=>r.toString()),i=e.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(e,i)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var Ll=class{encodeKey(e){return Zg(e)}encodeValue(e){return Zg(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function Yx(s,e){let t=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(i=>{let r=i.indexOf("="),[o,a]=r==-1?[e.decodeKey(i),""]:[e.decodeKey(i.slice(0,r)),e.decodeValue(i.slice(r+1))],c=t.get(o)||[];c.push(a),t.set(o,c)}),t}var Zx=/%(\d[a-f0-9])/gi,Kx={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Zg(s){return encodeURIComponent(s).replace(Zx,(e,t)=>Kx[t]??e)}function Il(s){return`${s}`}var Zi=class s{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new Ll,e.fromString){if(e.fromObject)throw new Le(2805,!1);this.map=Yx(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let n=e.fromObject[t],i=Array.isArray(n)?n.map(Il):[Il(n)];this.map.set(t,i)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(n=>{let i=e[n];Array.isArray(i)?i.forEach(r=>{t.push({param:n,value:r,op:"a"})}):t.push({param:n,value:i,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(n=>t+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new s({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(Il(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],i=n.indexOf(Il(e.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Ol=class{map=new Map;set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Jx(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Kg(s){return typeof ArrayBuffer<"u"&&s instanceof ArrayBuffer}function Jg(s){return typeof Blob<"u"&&s instanceof Blob}function Qg(s){return typeof FormData<"u"&&s instanceof FormData}function Qx(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}var e0="Content-Type",t0="Accept",n0="X-Request-URL",i0="text/plain",r0="application/json",eS=`${r0}, ${i0}, */*`,mo=class s{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(e,t,n,i){this.url=t,this.method=e.toUpperCase();let r;if(Jx(this.method)||i?(this.body=n!==void 0?n:null,r=i):r=n,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),this.transferCache=r.transferCache),this.headers??=new Rr,this.context??=new Ol,!this.params)this.params=new Zi,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),c=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+c+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Kg(this.body)||Jg(this.body)||Qg(this.body)||Qx(this.body)?this.body:this.body instanceof Zi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Qg(this.body)?null:Jg(this.body)?this.body.type||null:Kg(this.body)?null:typeof this.body=="string"?i0:this.body instanceof Zi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?r0:null}clone(e={}){let t=e.method||this.method,n=e.url||this.url,i=e.responseType||this.responseType,r=e.transferCache??this.transferCache,o=e.body!==void 0?e.body:this.body,a=e.withCredentials??this.withCredentials,c=e.reportProgress??this.reportProgress,l=e.headers||this.headers,h=e.params||this.params,d=e.context??this.context;return e.setHeaders!==void 0&&(l=Object.keys(e.setHeaders).reduce((f,u)=>f.set(u,e.setHeaders[u]),l)),e.setParams&&(h=Object.keys(e.setParams).reduce((f,u)=>f.set(u,e.setParams[u]),h)),new s(t,n,o,{params:h,headers:l,context:d,reportProgress:c,responseType:i,withCredentials:a,transferCache:r})}},gs=function(s){return s[s.Sent=0]="Sent",s[s.UploadProgress=1]="UploadProgress",s[s.ResponseHeader=2]="ResponseHeader",s[s.DownloadProgress=3]="DownloadProgress",s[s.Response=4]="Response",s[s.User=5]="User",s}(gs||{}),_o=class{headers;status;statusText;url;ok;type;constructor(e,t=200,n="OK"){this.headers=e.headers||new Rr,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},Fl=class s extends _o{constructor(e={}){super(e)}type=gs.ResponseHeader;clone(e={}){return new s({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},ka=class s extends _o{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=gs.Response;clone(e={}){return new s({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},za=class extends _o{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},tS=200,nS=204;function Dd(s,e){return{body:e,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials,transferCache:s.transferCache}}var Pr=(()=>{class s{handler;constructor(t){this.handler=t}request(t,n,i={}){let r;if(t instanceof mo)r=t;else{let c;i.headers instanceof Rr?c=i.headers:c=new Rr(i.headers);let l;i.params&&(i.params instanceof Zi?l=i.params:l=new Zi({fromObject:i.params})),r=new mo(t,n,i.body!==void 0?i.body:null,{headers:c,context:i.context,params:l,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let o=re(r).pipe(ji(c=>this.handler.handle(c)));if(t instanceof mo||i.observe==="events")return o;let a=o.pipe(br(c=>c instanceof ka));switch(i.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe(Re(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Le(2806,!1);return c.body}));case"blob":return a.pipe(Re(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Le(2807,!1);return c.body}));case"text":return a.pipe(Re(c=>{if(c.body!==null&&typeof c.body!="string")throw new Le(2808,!1);return c.body}));case"json":default:return a.pipe(Re(c=>c.body))}case"response":return a;default:throw new Le(2809,!1)}}delete(t,n={}){return this.request("DELETE",t,n)}get(t,n={}){return this.request("GET",t,n)}head(t,n={}){return this.request("HEAD",t,n)}jsonp(t,n){return this.request("JSONP",t,{params:new Zi().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,n={}){return this.request("OPTIONS",t,n)}patch(t,n,i={}){return this.request("PATCH",t,Dd(i,n))}post(t,n,i={}){return this.request("POST",t,Dd(i,n))}put(t,n,i={}){return this.request("PUT",t,Dd(i,n))}static \u0275fac=function(n){return new(n||s)(te(go))};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})();var iS=new pe("");function rS(s,e){return e(s)}function sS(s,e,t){return(n,i)=>jt(t,()=>e(n,r=>s(r,i)))}var s0=new pe(""),o0=new pe(""),a0=new pe("",{providedIn:"root",factory:()=>!0});var Nl=(()=>{class s extends go{backend;injector;chain=null;pendingTasks=H(yl);contributeToStability=H(a0);constructor(t,n){super(),this.backend=t,this.injector=n}handle(t){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(s0),...this.injector.get(o0,[])]));this.chain=n.reduceRight((i,r)=>sS(i,r,this.injector),rS)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(t,i=>this.backend.handle(i)).pipe(co(()=>this.pendingTasks.remove(n)))}else return this.chain(t,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||s)(te(Ba),te(ls))};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})();var oS=/^\)\]\}',?\n/,aS=RegExp(`^${n0}:`,"m");function cS(s){return"responseURL"in s&&s.responseURL?s.responseURL:aS.test(s.getAllResponseHeaders())?s.getResponseHeader(n0):null}var Rd=(()=>{class s{xhrFactory;constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new Le(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?vn(n.\u0275loadImpl()):re(null)).pipe(rn(()=>new tg(r=>{let o=n.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((p,g)=>o.setRequestHeader(p,g.join(","))),t.headers.has(t0)||o.setRequestHeader(t0,eS),!t.headers.has(e0)){let p=t.detectContentTypeHeader();p!==null&&o.setRequestHeader(e0,p)}if(t.responseType){let p=t.responseType.toLowerCase();o.responseType=p!=="json"?p:"text"}let a=t.serializeBody(),c=null,l=()=>{if(c!==null)return c;let p=o.statusText||"OK",g=new Rr(o.getAllResponseHeaders()),_=cS(o)||t.url;return c=new Fl({headers:g,status:o.status,statusText:p,url:_}),c},h=()=>{let{headers:p,status:g,statusText:_,url:b}=l(),x=null;g!==nS&&(x=typeof o.response>"u"?o.responseText:o.response),g===0&&(g=x?tS:0);let y=g>=200&&g<300;if(t.responseType==="json"&&typeof x=="string"){let v=x;x=x.replace(oS,"");try{x=x!==""?JSON.parse(x):null}catch(C){x=v,y&&(y=!1,x={error:C,text:x})}}y?(r.next(new ka({body:x,headers:p,status:g,statusText:_,url:b||void 0})),r.complete()):r.error(new za({error:x,headers:p,status:g,statusText:_,url:b||void 0}))},d=p=>{let{url:g}=l(),_=new za({error:p,status:o.status||0,statusText:o.statusText||"Unknown Error",url:g||void 0});r.error(_)},f=!1,u=p=>{f||(r.next(l()),f=!0);let g={type:gs.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(g.total=p.total),t.responseType==="text"&&o.responseText&&(g.partialText=o.responseText),r.next(g)},m=p=>{let g={type:gs.UploadProgress,loaded:p.loaded};p.lengthComputable&&(g.total=p.total),r.next(g)};return o.addEventListener("load",h),o.addEventListener("error",d),o.addEventListener("timeout",d),o.addEventListener("abort",d),t.reportProgress&&(o.addEventListener("progress",u),a!==null&&o.upload&&o.upload.addEventListener("progress",m)),o.send(a),r.next({type:gs.Sent}),()=>{o.removeEventListener("error",d),o.removeEventListener("abort",d),o.removeEventListener("load",h),o.removeEventListener("timeout",d),t.reportProgress&&(o.removeEventListener("progress",u),a!==null&&o.upload&&o.upload.removeEventListener("progress",m)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(n){return new(n||s)(te(ms))};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})(),c0=new pe(""),lS="XSRF-TOKEN",uS=new pe("",{providedIn:"root",factory:()=>lS}),hS="X-XSRF-TOKEN",dS=new pe("",{providedIn:"root",factory:()=>hS}),Va=class{},fS=(()=>{class s{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(t,n,i){this.doc=t,this.platform=n,this.cookieName=i}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ia(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(n){return new(n||s)(te(gt),te(ds),te(uS))};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})();function pS(s,e){let t=s.url.toLowerCase();if(!H(c0)||s.method==="GET"||s.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(s);let n=H(Va).getToken(),i=H(dS);return n!=null&&!s.headers.has(i)&&(s=s.clone({headers:s.headers.set(i,n)})),e(s)}function Pd(...s){let e=[Pr,Rd,Nl,{provide:go,useExisting:Nl},{provide:Ba,useFactory:()=>H(iS,{optional:!0})??H(Rd)},{provide:s0,useValue:pS,multi:!0},{provide:c0,useValue:!0},{provide:Va,useClass:fS}];for(let t of s)e.push(...t.\u0275providers);return Xi(e)}var l0=(()=>{class s{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||s)(te(gt))};static \u0275prov=ce({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var me="primary",tc=Symbol("RouteTitle"),Nd=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ys(s){return new Nd(s)}function _0(s,e,t){let n=t.path.split("/");if(n.length>s.length||t.pathMatch==="full"&&(e.hasChildren()||n.length<s.length))return null;let i={};for(let r=0;r<n.length;r++){let o=n[r],a=s[r];if(o[0]===":")i[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:s.slice(0,n.length),posParams:i}}function vS(s,e){if(s.length!==e.length)return!1;for(let t=0;t<s.length;++t)if(!Oi(s[t],e[t]))return!1;return!0}function Oi(s,e){let t=s?Ud(s):void 0,n=e?Ud(e):void 0;if(!t||!n||t.length!=n.length)return!1;let i;for(let r=0;r<t.length;r++)if(i=t[r],!v0(s[i],e[i]))return!1;return!0}function Ud(s){return[...Object.keys(s),...Object.getOwnPropertySymbols(s)]}function v0(s,e){if(Array.isArray(s)&&Array.isArray(e)){if(s.length!==e.length)return!1;let t=[...s].sort(),n=[...e].sort();return t.every((i,r)=>n[r]===i)}else return s===e}function y0(s){return s.length>0?s[s.length-1]:null}function Or(s){return as(s)?s:ud(s)?vn(Promise.resolve(s)):re(s)}var yS={exact:S0,subset:b0},x0={exact:xS,subset:SS,ignored:()=>!0};function u0(s,e,t){return yS[t.paths](s.root,e.root,t.matrixParams)&&x0[t.queryParams](s.queryParams,e.queryParams)&&!(t.fragment==="exact"&&s.fragment!==e.fragment)}function xS(s,e){return Oi(s,e)}function S0(s,e,t){if(!_s(s.segments,e.segments)||!kl(s.segments,e.segments,t)||s.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!s.children[n]||!S0(s.children[n],e.children[n],t))return!1;return!0}function SS(s,e){return Object.keys(e).length<=Object.keys(s).length&&Object.keys(e).every(t=>v0(s[t],e[t]))}function b0(s,e,t){return M0(s,e,e.segments,t)}function M0(s,e,t,n){if(s.segments.length>t.length){let i=s.segments.slice(0,t.length);return!(!_s(i,t)||e.hasChildren()||!kl(i,t,n))}else if(s.segments.length===t.length){if(!_s(s.segments,t)||!kl(s.segments,t,n))return!1;for(let i in e.children)if(!s.children[i]||!b0(s.children[i],e.children[i],n))return!1;return!0}else{let i=t.slice(0,s.segments.length),r=t.slice(s.segments.length);return!_s(s.segments,i)||!kl(s.segments,i,n)||!s.children[me]?!1:M0(s.children[me],e,r,n)}}function kl(s,e,t){return e.every((n,i)=>x0[t](s[i].parameters,n.parameters))}var Ni=class{root;queryParams;fragment;_queryParamMap;constructor(e=new Ne([],{}),t={},n=null){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=ys(this.queryParams),this._queryParamMap}toString(){return wS.serialize(this)}},Ne=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return zl(this)}},Ir=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=ys(this.parameters),this._parameterMap}toString(){return E0(this)}};function bS(s,e){return _s(s,e)&&s.every((t,n)=>Oi(t.parameters,e[n].parameters))}function _s(s,e){return s.length!==e.length?!1:s.every((t,n)=>t.path===e[n].path)}function MS(s,e){let t=[];return Object.entries(s.children).forEach(([n,i])=>{n===me&&(t=t.concat(e(i,n)))}),Object.entries(s.children).forEach(([n,i])=>{n!==me&&(t=t.concat(e(i,n)))}),t}var nc=(()=>{class s{static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:()=>new xs,providedIn:"root"})}return s})(),xs=class{parse(e){let t=new kd(e);return new Ni(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ha(e.root,!0)}`,n=CS(e.queryParams),i=typeof e.fragment=="string"?`#${ES(e.fragment)}`:"";return`${t}${n}${i}`}},wS=new xs;function zl(s){return s.segments.map(e=>E0(e)).join("/")}function Ha(s,e){if(!s.hasChildren())return zl(s);if(e){let t=s.children[me]?Ha(s.children[me],!1):"",n=[];return Object.entries(s.children).forEach(([i,r])=>{i!==me&&n.push(`${i}:${Ha(r,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=MS(s,(n,i)=>i===me?[Ha(s.children[me],!1)]:[`${i}:${Ha(n,!1)}`]);return Object.keys(s.children).length===1&&s.children[me]!=null?`${zl(s)}/${t[0]}`:`${zl(s)}/(${t.join("//")})`}}function w0(s){return encodeURIComponent(s).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ul(s){return w0(s).replace(/%3B/gi,";")}function ES(s){return encodeURI(s)}function Bd(s){return w0(s).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Vl(s){return decodeURIComponent(s)}function h0(s){return Vl(s.replace(/\+/g,"%20"))}function E0(s){return`${Bd(s.path)}${TS(s.parameters)}`}function TS(s){return Object.entries(s).map(([e,t])=>`;${Bd(e)}=${Bd(t)}`).join("")}function CS(s){let e=Object.entries(s).map(([t,n])=>Array.isArray(n)?n.map(i=>`${Ul(t)}=${Ul(i)}`).join("&"):`${Ul(t)}=${Ul(n)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var AS=/^[^\/()?;#]+/;function Id(s){let e=s.match(AS);return e?e[0]:""}var DS=/^[^\/()?;=#]+/;function RS(s){let e=s.match(DS);return e?e[0]:""}var PS=/^[^=?&#]+/;function IS(s){let e=s.match(PS);return e?e[0]:""}var LS=/^[^&#]+/;function OS(s){let e=s.match(LS);return e?e[0]:""}var kd=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ne([],{}):new Ne([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n[me]=new Ne(e,t)),n}parseSegment(){let e=Id(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Le(4009,!1);return this.capture(e),new Ir(Vl(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=RS(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let i=Id(this.remaining);i&&(n=i,this.capture(n))}e[Vl(t)]=Vl(n)}parseQueryParam(e){let t=IS(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let o=OS(this.remaining);o&&(n=o,this.capture(n))}let i=h0(t),r=h0(n);if(e.hasOwnProperty(i)){let o=e[i];Array.isArray(o)||(o=[o],e[i]=o),o.push(r)}else e[i]=r}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Id(this.remaining),i=this.remaining[n.length];if(i!=="/"&&i!==")"&&i!==";")throw new Le(4010,!1);let r;n.indexOf(":")>-1?(r=n.slice(0,n.indexOf(":")),this.capture(r),this.capture(":")):e&&(r=me);let o=this.parseChildren();t[r]=Object.keys(o).length===1?o[me]:new Ne([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Le(4011,!1)}};function T0(s){return s.segments.length>0?new Ne([],{[me]:s}):s}function C0(s){let e={};for(let[n,i]of Object.entries(s.children)){let r=C0(i);if(n===me&&r.segments.length===0&&r.hasChildren())for(let[o,a]of Object.entries(r.children))e[o]=a;else(r.segments.length>0||r.hasChildren())&&(e[n]=r)}let t=new Ne(s.segments,e);return FS(t)}function FS(s){if(s.numberOfChildren===1&&s.children[me]){let e=s.children[me];return new Ne(s.segments.concat(e.segments),e.children)}return s}function bo(s){return s instanceof Ni}function A0(s,e,t=null,n=null){let i=D0(s);return R0(i,e,t,n)}function D0(s){let e;function t(r){let o={};for(let c of r.children){let l=t(c);o[c.outlet]=l}let a=new Ne(r.url,o);return r===s&&(e=a),a}let n=t(s.root),i=T0(n);return e??i}function R0(s,e,t,n){let i=s;for(;i.parent;)i=i.parent;if(e.length===0)return Ld(i,i,i,t,n);let r=NS(e);if(r.toRoot())return Ld(i,i,new Ne([],{}),t,n);let o=US(r,i,s),a=o.processChildren?Wa(o.segmentGroup,o.index,r.commands):I0(o.segmentGroup,o.index,r.commands);return Ld(i,o.segmentGroup,a,t,n)}function Gl(s){return typeof s=="object"&&s!=null&&!s.outlets&&!s.segmentPath}function Xa(s){return typeof s=="object"&&s!=null&&s.outlets}function Ld(s,e,t,n,i){let r={};n&&Object.entries(n).forEach(([c,l])=>{r[c]=Array.isArray(l)?l.map(h=>`${h}`):`${l}`});let o;s===e?o=t:o=P0(s,e,t);let a=T0(C0(o));return new Ni(a,r,i)}function P0(s,e,t){let n={};return Object.entries(s.children).forEach(([i,r])=>{r===e?n[i]=t:n[i]=P0(r,e,t)}),new Ne(s.segments,n)}var Wl=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&Gl(n[0]))throw new Le(4003,!1);let i=n.find(Xa);if(i&&i!==y0(n))throw new Le(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function NS(s){if(typeof s[0]=="string"&&s.length===1&&s[0]==="/")return new Wl(!0,0,s);let e=0,t=!1,n=s.reduce((i,r,o)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let a={};return Object.entries(r.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...i,{outlets:a}]}if(r.segmentPath)return[...i,r.segmentPath]}return typeof r!="string"?[...i,r]:o===0?(r.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&i.push(a))}),i):[...i,r]},[]);return new Wl(t,e,n)}var xo=class{segmentGroup;processChildren;index;constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}};function US(s,e,t){if(s.isAbsolute)return new xo(e,!0,0);if(!t)return new xo(e,!1,NaN);if(t.parent===null)return new xo(t,!0,0);let n=Gl(s.commands[0])?0:1,i=t.segments.length-1+n;return BS(t,i,s.numberOfDoubleDots)}function BS(s,e,t){let n=s,i=e,r=t;for(;r>i;){if(r-=i,n=n.parent,!n)throw new Le(4005,!1);i=n.segments.length}return new xo(n,!1,i-r)}function kS(s){return Xa(s[0])?s[0].outlets:{[me]:s}}function I0(s,e,t){if(s??=new Ne([],{}),s.segments.length===0&&s.hasChildren())return Wa(s,e,t);let n=zS(s,e,t),i=t.slice(n.commandIndex);if(n.match&&n.pathIndex<s.segments.length){let r=new Ne(s.segments.slice(0,n.pathIndex),{});return r.children[me]=new Ne(s.segments.slice(n.pathIndex),s.children),Wa(r,0,i)}else return n.match&&i.length===0?new Ne(s.segments,{}):n.match&&!s.hasChildren()?zd(s,e,t):n.match?Wa(s,0,i):zd(s,e,t)}function Wa(s,e,t){if(t.length===0)return new Ne(s.segments,{});{let n=kS(t),i={};if(Object.keys(n).some(r=>r!==me)&&s.children[me]&&s.numberOfChildren===1&&s.children[me].segments.length===0){let r=Wa(s.children[me],e,t);return new Ne(s.segments,r.children)}return Object.entries(n).forEach(([r,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(i[r]=I0(s.children[r],e,o))}),Object.entries(s.children).forEach(([r,o])=>{n[r]===void 0&&(i[r]=o)}),new Ne(s.segments,i)}}function zS(s,e,t){let n=0,i=e,r={match:!1,pathIndex:0,commandIndex:0};for(;i<s.segments.length;){if(n>=t.length)return r;let o=s.segments[i],a=t[n];if(Xa(a))break;let c=`${a}`,l=n<t.length-1?t[n+1]:null;if(i>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!f0(c,l,o))return r;n+=2}else{if(!f0(c,{},o))return r;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function zd(s,e,t){let n=s.segments.slice(0,e),i=0;for(;i<t.length;){let r=t[i];if(Xa(r)){let c=VS(r.outlets);return new Ne(n,c)}if(i===0&&Gl(t[0])){let c=s.segments[e];n.push(new Ir(c.path,d0(t[0]))),i++;continue}let o=Xa(r)?r.outlets[me]:`${r}`,a=i<t.length-1?t[i+1]:null;o&&a&&Gl(a)?(n.push(new Ir(o,d0(a))),i+=2):(n.push(new Ir(o,{})),i++)}return new Ne(n,{})}function VS(s){let e={};return Object.entries(s).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[t]=zd(new Ne([],{}),0,n))}),e}function d0(s){let e={};return Object.entries(s).forEach(([t,n])=>e[t]=`${n}`),e}function f0(s,e,t){return s==t.path&&Oi(e,t.parameters)}var Hl="imperative",Dt=function(s){return s[s.NavigationStart=0]="NavigationStart",s[s.NavigationEnd=1]="NavigationEnd",s[s.NavigationCancel=2]="NavigationCancel",s[s.NavigationError=3]="NavigationError",s[s.RoutesRecognized=4]="RoutesRecognized",s[s.ResolveStart=5]="ResolveStart",s[s.ResolveEnd=6]="ResolveEnd",s[s.GuardsCheckStart=7]="GuardsCheckStart",s[s.GuardsCheckEnd=8]="GuardsCheckEnd",s[s.RouteConfigLoadStart=9]="RouteConfigLoadStart",s[s.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",s[s.ChildActivationStart=11]="ChildActivationStart",s[s.ChildActivationEnd=12]="ChildActivationEnd",s[s.ActivationStart=13]="ActivationStart",s[s.ActivationEnd=14]="ActivationEnd",s[s.Scroll=15]="Scroll",s[s.NavigationSkipped=16]="NavigationSkipped",s}(Dt||{}),Pn=class{id;url;constructor(e,t){this.id=e,this.url=t}},Ss=class extends Pn{type=Dt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,n="imperative",i=null){super(e,t),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ki=class extends Pn{urlAfterRedirects;type=Dt.NavigationEnd;constructor(e,t,n){super(e,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},yn=function(s){return s[s.Redirect=0]="Redirect",s[s.SupersededByNewNavigation=1]="SupersededByNewNavigation",s[s.NoDataFromResolver=2]="NoDataFromResolver",s[s.GuardRejected=3]="GuardRejected",s}(yn||{}),$a=function(s){return s[s.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",s[s.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",s}($a||{}),Fi=class extends Pn{reason;code;type=Dt.NavigationCancel;constructor(e,t,n,i){super(e,t),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Ji=class extends Pn{reason;code;type=Dt.NavigationSkipped;constructor(e,t,n,i){super(e,t),this.reason=n,this.code=i}},Mo=class extends Pn{error;target;type=Dt.NavigationError;constructor(e,t,n,i){super(e,t),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},qa=class extends Pn{urlAfterRedirects;state;type=Dt.RoutesRecognized;constructor(e,t,n,i){super(e,t),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jl=class extends Pn{urlAfterRedirects;state;type=Dt.GuardsCheckStart;constructor(e,t,n,i){super(e,t),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xl=class extends Pn{urlAfterRedirects;state;shouldActivate;type=Dt.GuardsCheckEnd;constructor(e,t,n,i,r){super(e,t),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},$l=class extends Pn{urlAfterRedirects;state;type=Dt.ResolveStart;constructor(e,t,n,i){super(e,t),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ql=class extends Pn{urlAfterRedirects;state;type=Dt.ResolveEnd;constructor(e,t,n,i){super(e,t),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yl=class{route;type=Dt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Zl=class{route;type=Dt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Kl=class{snapshot;type=Dt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Jl=class{snapshot;type=Dt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ql=class{snapshot;type=Dt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},eu=class{snapshot;type=Dt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ya=class{},wo=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function HS(s,e){return s.providers&&!s._injector&&(s._injector=bl(s.providers,e,`Route: ${s.path}`)),s._injector??e}function hi(s){return s.outlet||me}function GS(s,e){let t=s.filter(n=>hi(n)===e);return t.push(...s.filter(n=>hi(n)!==e)),t}function ic(s){if(!s)return null;if(s.routeConfig?._injector)return s.routeConfig._injector;for(let e=s.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var tu=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return ic(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Co(this.rootInjector)}},Co=(()=>{class s{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,n){let i=this.getOrCreateContext(t);i.outlet=n,this.contexts.set(t,i)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new tu(this.rootInjector),this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(n){return new(n||s)(te(ls))};static \u0275prov=ce({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),nu=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Vd(e,this._root);return t?t.children.map(n=>n.value):[]}firstChild(e){let t=Vd(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Hd(e,this._root);return t.length<2?[]:t[t.length-2].children.map(i=>i.value).filter(i=>i!==e)}pathFromRoot(e){return Hd(e,this._root).map(t=>t.value)}};function Vd(s,e){if(s===e.value)return e;for(let t of e.children){let n=Vd(s,t);if(n)return n}return null}function Hd(s,e){if(s===e.value)return[e];for(let t of e.children){let n=Hd(s,t);if(n.length)return n.unshift(e),n}return[]}var Rn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function yo(s){let e={};return s&&s.children.forEach(t=>e[t.value.outlet]=t),e}var Za=class extends nu{snapshot;constructor(e,t){super(e),this.snapshot=t,Zd(this,e)}toString(){return this.snapshot.toString()}};function L0(s){let e=WS(s),t=new $n([new Ir("",{})]),n=new $n({}),i=new $n({}),r=new $n({}),o=new $n(""),a=new Lr(t,n,r,o,i,me,s,e.root);return a.snapshot=e.root,new Za(new Rn(a,[]),e)}function WS(s){let e={},t={},n={},i="",r=new vs([],e,n,i,t,me,s,null,{});return new Ka("",new Rn(r,[]))}var Lr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,n,i,r,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=r,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Re(l=>l[tc]))??re(void 0),this.url=e,this.params=t,this.queryParams=n,this.fragment=i,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Re(e=>ys(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Re(e=>ys(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function iu(s,e,t="emptyOnly"){let n,{routeConfig:i}=s;return e!==null&&(t==="always"||i?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:J(J({},e.params),s.params),data:J(J({},e.data),s.data),resolve:J(J(J(J({},s.data),e.data),i?.data),s._resolvedData)}:n={params:J({},s.params),data:J({},s.data),resolve:J(J({},s.data),s._resolvedData??{})},i&&F0(i)&&(n.resolve[tc]=i.title),n}var vs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[tc]}constructor(e,t,n,i,r,o,a,c,l){this.url=e,this.params=t,this.queryParams=n,this.fragment=i,this.data=r,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ys(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ys(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Ka=class extends nu{url;constructor(e,t){super(t),this.url=e,Zd(this,t)}toString(){return O0(this._root)}};function Zd(s,e){e.value._routerState=s,e.children.forEach(t=>Zd(s,t))}function O0(s){let e=s.children.length>0?` { ${s.children.map(O0).join(", ")} } `:"";return`${s.value}${e}`}function Od(s){if(s.snapshot){let e=s.snapshot,t=s._futureSnapshot;s.snapshot=t,Oi(e.queryParams,t.queryParams)||s.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&s.fragmentSubject.next(t.fragment),Oi(e.params,t.params)||s.paramsSubject.next(t.params),vS(e.url,t.url)||s.urlSubject.next(t.url),Oi(e.data,t.data)||s.dataSubject.next(t.data)}else s.snapshot=s._futureSnapshot,s.dataSubject.next(s._futureSnapshot.data)}function Gd(s,e){let t=Oi(s.params,e.params)&&bS(s.url,e.url),n=!s.parent!=!e.parent;return t&&!n&&(!s.parent||Gd(s.parent,e.parent))}function F0(s){return typeof s.title=="string"||s.title===null}var N0=new pe(""),rc=(()=>{class s{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=me;activateEvents=new Ai;deactivateEvents=new Ai;attachEvents=new Ai;detachEvents=new Ai;routerOutletData=hs(void 0);parentContexts=H(Co);location=H(ho);changeDetector=H(Tr);inputBinder=H(au,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:i}=t.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Le(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Le(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Le(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new Le(4013,!1);this._activatedRoute=t;let i=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Wd(t,a,i.injector,this.routerOutletData);this.activated=i.createComponent(o,{index:i.length,injector:c,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||s)};static \u0275dir=ps({type:s,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[rd]})}return s})(),Wd=class{route;childContexts;parent;outletData;constructor(e,t,n,i){this.route=e,this.childContexts=t,this.parent=n,this.outletData=i}get(e,t){return e===Lr?this.route:e===Co?this.childContexts:e===N0?this.outletData:this.parent.get(e,t)}},au=new pe("");function jS(s,e,t){let n=Ja(s,e._root,t?t._root:void 0);return new Za(n,e)}function Ja(s,e,t){if(t&&s.shouldReuseRoute(e.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=e.value;let i=XS(s,e,t);return new Rn(n,i)}else{if(s.shouldAttach(e.value)){let r=s.retrieve(e.value);if(r!==null){let o=r.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Ja(s,a)),o}}let n=$S(e.value),i=e.children.map(r=>Ja(s,r));return new Rn(n,i)}}function XS(s,e,t){return e.children.map(n=>{for(let i of t.children)if(s.shouldReuseRoute(n.value,i.value.snapshot))return Ja(s,n,i);return Ja(s,n)})}function $S(s){return new Lr(new $n(s.url),new $n(s.params),new $n(s.queryParams),new $n(s.fragment),new $n(s.data),s.outlet,s.component,s)}var Eo=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},U0="ngNavigationCancelingError";function ru(s,e){let{redirectTo:t,navigationBehaviorOptions:n}=bo(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,i=B0(!1,yn.Redirect);return i.url=t,i.navigationBehaviorOptions=n,i}function B0(s,e){let t=new Error(`NavigationCancelingError: ${s||""}`);return t[U0]=!0,t.cancellationCode=e,t}function qS(s){return k0(s)&&bo(s.url)}function k0(s){return!!s&&s[U0]}var YS=(s,e,t,n)=>Re(i=>(new jd(e,i.targetRouterState,i.currentRouterState,t,n).activate(s),i)),jd=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,n,i,r){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=r}activate(e){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),Od(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){let i=yo(t);e.children.forEach(r=>{let o=r.value.outlet;this.deactivateRoutes(r,i[o],n),delete i[o]}),Object.values(i).forEach(r=>{this.deactivateRouteAndItsChildren(r,n)})}deactivateRoutes(e,t,n){let i=e.value,r=t?t.value:null;if(i===r)if(i.component){let o=n.getContext(i.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else r&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let n=t.getContext(e.value.outlet),i=n&&e.value.component?n.children:t,r=yo(e);for(let o of Object.values(r))this.deactivateRouteAndItsChildren(o,i);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let n=t.getContext(e.value.outlet),i=n&&e.value.component?n.children:t,r=yo(e);for(let o of Object.values(r))this.deactivateRouteAndItsChildren(o,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,t,n){let i=yo(t);e.children.forEach(r=>{this.activateRoutes(r,i[r.value.outlet],n),this.forwardEvent(new eu(r.value.snapshot))}),e.children.length&&this.forwardEvent(new Jl(e.value.snapshot))}activateRoutes(e,t,n){let i=e.value,r=t?t.value:null;if(Od(i),i===r)if(i.component){let o=n.getOrCreateContext(i.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(i.component){let o=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Od(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=i,o.outlet&&o.outlet.activateWith(i,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,n)}},su=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},So=class{component;route;constructor(e,t){this.component=e,this.route=t}};function ZS(s,e,t){let n=s._root,i=e?e._root:null;return Ga(n,i,t,[n.value])}function KS(s){let e=s.routeConfig?s.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:s,guards:e}}function Ao(s,e){let t=Symbol(),n=e.get(s,t);return n===t?typeof s=="function"&&!cg(s)?s:e.get(s):n}function Ga(s,e,t,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let r=yo(e);return s.children.forEach(o=>{JS(o,r[o.value.outlet],t,n.concat([o.value]),i),delete r[o.value.outlet]}),Object.entries(r).forEach(([o,a])=>ja(a,t.getContext(o),i)),i}function JS(s,e,t,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let r=s.value,o=e?e.value:null,a=t?t.getContext(s.value.outlet):null;if(o&&r.routeConfig===o.routeConfig){let c=QS(o,r,r.routeConfig.runGuardsAndResolvers);c?i.canActivateChecks.push(new su(n)):(r.data=o.data,r._resolvedData=o._resolvedData),r.component?Ga(s,e,a?a.children:null,n,i):Ga(s,e,t,n,i),c&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new So(a.outlet.component,o))}else o&&ja(e,a,i),i.canActivateChecks.push(new su(n)),r.component?Ga(s,null,a?a.children:null,n,i):Ga(s,null,t,n,i);return i}function QS(s,e,t){if(typeof t=="function")return t(s,e);switch(t){case"pathParamsChange":return!_s(s.url,e.url);case"pathParamsOrQueryParamsChange":return!_s(s.url,e.url)||!Oi(s.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Gd(s,e)||!Oi(s.queryParams,e.queryParams);case"paramsChange":default:return!Gd(s,e)}}function ja(s,e,t){let n=yo(s),i=s.value;Object.entries(n).forEach(([r,o])=>{i.component?e?ja(o,e.children.getContext(r),t):ja(o,null,t):ja(o,e,t)}),i.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new So(e.outlet.component,i)):t.canDeactivateChecks.push(new So(null,i)):t.canDeactivateChecks.push(new So(null,i))}function sc(s){return typeof s=="function"}function eb(s){return typeof s=="boolean"}function tb(s){return s&&sc(s.canLoad)}function nb(s){return s&&sc(s.canActivate)}function ib(s){return s&&sc(s.canActivateChild)}function rb(s){return s&&sc(s.canDeactivate)}function sb(s){return s&&sc(s.canMatch)}function z0(s){return s instanceof ng||s?.name==="EmptyError"}var Bl=Symbol("INITIAL_VALUE");function To(){return rn(s=>Qh(s.map(e=>e.pipe(ui(1),og(Bl)))).pipe(Re(e=>{for(let t of e)if(t!==!0){if(t===Bl)return Bl;if(t===!1||ob(t))return t}return!0}),br(e=>e!==Bl),ui(1)))}function ob(s){return bo(s)||s instanceof Eo}function ab(s,e){return qn(t=>{let{targetSnapshot:n,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=t;return o.length===0&&r.length===0?re(At(J({},t),{guardsResult:!0})):cb(o,n,i,s).pipe(qn(a=>a&&eb(a)?lb(n,r,s,e):re(a)),Re(a=>At(J({},t),{guardsResult:a})))})}function cb(s,e,t,n){return vn(s).pipe(qn(i=>pb(i.component,i.route,t,e,n)),Mr(i=>i!==!0,!0))}function lb(s,e,t,n){return vn(e).pipe(ji(i=>Ca(hb(i.route.parent,n),ub(i.route,n),fb(s,i.path,t),db(s,i.route,t))),Mr(i=>i!==!0,!0))}function ub(s,e){return s!==null&&e&&e(new Ql(s)),re(!0)}function hb(s,e){return s!==null&&e&&e(new Kl(s)),re(!0)}function db(s,e,t){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return re(!0);let i=n.map(r=>oo(()=>{let o=ic(e)??t,a=Ao(r,o),c=nb(a)?a.canActivate(e,s):jt(o,()=>a(e,s));return Or(c).pipe(Mr())}));return re(i).pipe(To())}function fb(s,e,t){let n=e[e.length-1],r=e.slice(0,e.length-1).reverse().map(o=>KS(o)).filter(o=>o!==null).map(o=>oo(()=>{let a=o.guards.map(c=>{let l=ic(o.node)??t,h=Ao(c,l),d=ib(h)?h.canActivateChild(n,s):jt(l,()=>h(n,s));return Or(d).pipe(Mr())});return re(a).pipe(To())}));return re(r).pipe(To())}function pb(s,e,t,n,i){let r=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!r||r.length===0)return re(!0);let o=r.map(a=>{let c=ic(e)??i,l=Ao(a,c),h=rb(l)?l.canDeactivate(s,e,t,n):jt(c,()=>l(s,e,t,n));return Or(h).pipe(Mr())});return re(o).pipe(To())}function mb(s,e,t,n){let i=e.canLoad;if(i===void 0||i.length===0)return re(!0);let r=i.map(o=>{let a=Ao(o,s),c=tb(a)?a.canLoad(e,t):jt(s,()=>a(e,t));return Or(c)});return re(r).pipe(To(),V0(n))}function V0(s){return eg(Wt(e=>{if(typeof e!="boolean")throw ru(s,e)}),Re(e=>e===!0))}function gb(s,e,t,n){let i=e.canMatch;if(!i||i.length===0)return re(!0);let r=i.map(o=>{let a=Ao(o,s),c=sb(a)?a.canMatch(e,t):jt(s,()=>a(e,t));return Or(c)});return re(r).pipe(To(),V0(n))}var Qa=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},ec=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function vo(s){return Ta(new Qa(s))}function _b(s){return Ta(new Le(4e3,!1))}function vb(s){return Ta(B0(!1,yn.GuardRejected))}var Xd=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let n=[],i=t.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return re(n);if(i.numberOfChildren>1||!i.children[me])return _b(`${e.redirectTo}`);i=i.children[me]}}applyRedirectCommands(e,t,n,i,r){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:h,url:d,outlet:f,params:u,data:m,title:p}=i,g=jt(r,()=>a({params:u,data:m,queryParams:c,fragment:l,routeConfig:h,url:d,outlet:f,title:p}));if(g instanceof Ni)throw new ec(g);t=g}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,n);if(t[0]==="/")throw new ec(o);return o}applyRedirectCreateUrlTree(e,t,n,i){let r=this.createSegmentGroup(e,t.root,n,i);return new Ni(r,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let n={};return Object.entries(e).forEach(([i,r])=>{if(typeof r=="string"&&r[0]===":"){let a=r.substring(1);n[i]=t[a]}else n[i]=r}),n}createSegmentGroup(e,t,n,i){let r=this.createSegments(e,t.segments,n,i),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,n,i)}),new Ne(r,o)}createSegments(e,t,n,i){return t.map(r=>r.path[0]===":"?this.findPosParam(e,r,i):this.findOrReturn(r,n))}findPosParam(e,t,n){let i=n[t.path.substring(1)];if(!i)throw new Le(4001,!1);return i}findOrReturn(e,t){let n=0;for(let i of t){if(i.path===e.path)return t.splice(n),i;n++}return e}},$d={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function yb(s,e,t,n,i){let r=H0(s,e,t);return r.matched?(n=HS(e,n),gb(n,e,t,i).pipe(Re(o=>o===!0?r:J({},$d)))):re(r)}function H0(s,e,t){if(e.path==="**")return xb(t);if(e.path==="")return e.pathMatch==="full"&&(s.hasChildren()||t.length>0)?J({},$d):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let i=(e.matcher||_0)(t,s,e);if(!i)return J({},$d);let r={};Object.entries(i.posParams??{}).forEach(([a,c])=>{r[a]=c.path});let o=i.consumed.length>0?J(J({},r),i.consumed[i.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:i.consumed,remainingSegments:t.slice(i.consumed.length),parameters:o,positionalParamSegments:i.posParams??{}}}function xb(s){return{matched:!0,parameters:s.length>0?y0(s).parameters:{},consumedSegments:s,remainingSegments:[],positionalParamSegments:{}}}function p0(s,e,t,n){return t.length>0&&Mb(s,t,n)?{segmentGroup:new Ne(e,bb(n,new Ne(t,s.children))),slicedSegments:[]}:t.length===0&&wb(s,t,n)?{segmentGroup:new Ne(s.segments,Sb(s,t,n,s.children)),slicedSegments:t}:{segmentGroup:new Ne(s.segments,s.children),slicedSegments:t}}function Sb(s,e,t,n){let i={};for(let r of t)if(cu(s,e,r)&&!n[hi(r)]){let o=new Ne([],{});i[hi(r)]=o}return J(J({},n),i)}function bb(s,e){let t={};t[me]=e;for(let n of s)if(n.path===""&&hi(n)!==me){let i=new Ne([],{});t[hi(n)]=i}return t}function Mb(s,e,t){return t.some(n=>cu(s,e,n)&&hi(n)!==me)}function wb(s,e,t){return t.some(n=>cu(s,e,n))}function cu(s,e,t){return(s.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Eb(s,e,t){return e.length===0&&!s.children[t]}var qd=class{};function Tb(s,e,t,n,i,r,o="emptyOnly"){return new Yd(s,e,t,n,i,o,r).recognize()}var Cb=31,Yd=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,n,i,r,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=n,this.config=i,this.urlTree=r,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Xd(this.urlSerializer,this.urlTree)}noMatchError(e){return new Le(4002,`'${e.segmentGroup}'`)}recognize(){let e=p0(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Re(({children:t,rootSnapshot:n})=>{let i=new Rn(n,t),r=new Ka("",i),o=A0(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(o),{state:r,tree:o}}))}match(e){let t=new vs([],Object.freeze({}),Object.freeze(J({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),me,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,me,t).pipe(Re(n=>({children:n,rootSnapshot:t})),ao(n=>{if(n instanceof ec)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Qa?this.noMatchError(n):n}))}processSegmentGroup(e,t,n,i,r){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,t,n,r):this.processSegment(e,t,n,n.segments,i,!0,r).pipe(Re(o=>o instanceof Rn?[o]:[]))}processChildren(e,t,n,i){let r=[];for(let o of Object.keys(n.children))o==="primary"?r.unshift(o):r.push(o);return vn(r).pipe(ji(o=>{let a=n.children[o],c=GS(t,o);return this.processSegmentGroup(e,c,a,o,i)}),sg((o,a)=>(o.push(...a),o)),ed(null),rg(),qn(o=>{if(o===null)return vo(n);let a=G0(o);return Ab(a),re(a)}))}processSegment(e,t,n,i,r,o,a){return vn(t).pipe(ji(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,n,i,r,o,a).pipe(ao(l=>{if(l instanceof Qa)return re(null);throw l}))),Mr(c=>!!c),ao(c=>{if(z0(c))return Eb(n,i,r)?re(new qd):vo(n);throw c}))}processSegmentAgainstRoute(e,t,n,i,r,o,a,c){return hi(n)!==o&&(o===me||!cu(i,r,n))?vo(i):n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,i,n,r,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,i,t,n,r,o,c):vo(i)}expandSegmentAgainstRouteUsingRedirect(e,t,n,i,r,o,a){let{matched:c,parameters:l,consumedSegments:h,positionalParamSegments:d,remainingSegments:f}=H0(t,i,r);if(!c)return vo(t);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Cb&&(this.allowRedirects=!1));let u=new vs(r,l,Object.freeze(J({},this.urlTree.queryParams)),this.urlTree.fragment,m0(i),hi(i),i.component??i._loadedComponent??null,i,g0(i)),m=iu(u,a,this.paramsInheritanceStrategy);u.params=Object.freeze(m.params),u.data=Object.freeze(m.data);let p=this.applyRedirects.applyRedirectCommands(h,i.redirectTo,d,u,e);return this.applyRedirects.lineralizeSegments(i,p).pipe(qn(g=>this.processSegment(e,n,t,g.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,n,i,r,o){let a=yb(t,n,i,e,this.urlSerializer);return n.path==="**"&&(t.children={}),a.pipe(rn(c=>c.matched?(e=n._injector??e,this.getChildConfig(e,n,i).pipe(rn(({routes:l})=>{let h=n._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:u}=c,m=new vs(f,d,Object.freeze(J({},this.urlTree.queryParams)),this.urlTree.fragment,m0(n),hi(n),n.component??n._loadedComponent??null,n,g0(n)),p=iu(m,o,this.paramsInheritanceStrategy);m.params=Object.freeze(p.params),m.data=Object.freeze(p.data);let{segmentGroup:g,slicedSegments:_}=p0(t,f,u,l);if(_.length===0&&g.hasChildren())return this.processChildren(h,l,g,m).pipe(Re(x=>new Rn(m,x)));if(l.length===0&&_.length===0)return re(new Rn(m,[]));let b=hi(n)===r;return this.processSegment(h,l,g,_,b?me:r,!0,m).pipe(Re(x=>new Rn(m,x instanceof Rn?[x]:[])))}))):vo(t)))}getChildConfig(e,t,n){return t.children?re({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?re({routes:t._loadedRoutes,injector:t._loadedInjector}):mb(e,t,n,this.urlSerializer).pipe(qn(i=>i?this.configLoader.loadChildren(e,t).pipe(Wt(r=>{t._loadedRoutes=r.routes,t._loadedInjector=r.injector})):vb(t))):re({routes:[],injector:e})}};function Ab(s){s.sort((e,t)=>e.value.outlet===me?-1:t.value.outlet===me?1:e.value.outlet.localeCompare(t.value.outlet))}function Db(s){let e=s.value.routeConfig;return e&&e.path===""}function G0(s){let e=[],t=new Set;for(let n of s){if(!Db(n)){e.push(n);continue}let i=e.find(r=>n.value.routeConfig===r.value.routeConfig);i!==void 0?(i.children.push(...n.children),t.add(i)):e.push(n)}for(let n of t){let i=G0(n.children);e.push(new Rn(n.value,i))}return e.filter(n=>!t.has(n))}function m0(s){return s.data||{}}function g0(s){return s.resolve||{}}function Rb(s,e,t,n,i,r){return qn(o=>Tb(s,e,t,n,o.extractedUrl,i,r).pipe(Re(({state:a,tree:c})=>At(J({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function Pb(s,e){return qn(t=>{let{targetSnapshot:n,guards:{canActivateChecks:i}}=t;if(!i.length)return re(t);let r=new Set(i.map(c=>c.route)),o=new Set;for(let c of r)if(!o.has(c))for(let l of W0(c))o.add(l);let a=0;return vn(o).pipe(ji(c=>r.has(c)?Ib(c,n,s,e):(c.data=iu(c,c.parent,s).resolve,re(void 0))),Wt(()=>a++),td(1),qn(c=>a===o.size?re(t):Wi))})}function W0(s){let e=s.children.map(t=>W0(t)).flat();return[s,...e]}function Ib(s,e,t,n){let i=s.routeConfig,r=s._resolve;return i?.title!==void 0&&!F0(i)&&(r[tc]=i.title),Lb(r,s,e,n).pipe(Re(o=>(s._resolvedData=o,s.data=iu(s,s.parent,t).resolve,null)))}function Lb(s,e,t,n){let i=Ud(s);if(i.length===0)return re({});let r={};return vn(i).pipe(qn(o=>Ob(s[o],e,t,n).pipe(Mr(),Wt(a=>{if(a instanceof Eo)throw ru(new xs,a);r[o]=a}))),td(1),Re(()=>r),ao(o=>z0(o)?Wi:Ta(o)))}function Ob(s,e,t,n){let i=ic(e)??n,r=Ao(s,i),o=r.resolve?r.resolve(e,t):jt(i,()=>r(e,t));return Or(o)}function Fd(s){return rn(e=>{let t=s(e);return t?vn(t).pipe(Re(()=>e)):re(e)})}var Kd=(()=>{class s{buildTitle(t){let n,i=t.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(r=>r.outlet===me);return n}getResolvedTitleForRoute(t){return t.data[tc]}static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:()=>H(j0),providedIn:"root"})}return s})(),j0=(()=>{class s extends Kd{title;constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||s)(te(l0))};static \u0275prov=ce({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),oc=new pe("",{providedIn:"root",factory:()=>({})}),Jd=(()=>{class s{static \u0275fac=function(n){return new(n||s)};static \u0275cmp=Yn({type:s,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,i){n&1&&Fe(0,"router-outlet")},dependencies:[rc],encapsulation:2})}return s})();function Qd(s){let e=s.children&&s.children.map(Qd),t=e?At(J({},s),{children:e}):J({},s);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==me&&(t.component=Jd),t}var ac=new pe(""),X0=(()=>{class s{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=H(Cg);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return re(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let n=Or(t.loadComponent()).pipe(Re(q0),Wt(r=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=r}),co(()=>{this.componentLoaders.delete(t)})),i=new Jh(n,()=>new Ci).pipe(Kh());return this.componentLoaders.set(t,i),i}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return re({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=$0(n,this.compiler,t,this.onLoadEndListener).pipe(co(()=>{this.childrenLoaders.delete(n)})),o=new Jh(r,()=>new Ci).pipe(Kh());return this.childrenLoaders.set(n,o),o}static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function $0(s,e,t,n){return Or(s.loadChildren()).pipe(Re(q0),qn(i=>i instanceof vg||Array.isArray(i)?re(i):vn(e.compileModuleAsync(i))),Re(i=>{n&&n(s);let r,o,a=!1;return Array.isArray(i)?(o=i,a=!0):(r=i.create(t).injector,o=r.get(ac,[],{optional:!0,self:!0}).flat()),{routes:o.map(Qd),injector:r}}))}function Fb(s){return s&&typeof s=="object"&&"default"in s}function q0(s){return Fb(s)?s.default:s}var lu=(()=>{class s{static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:()=>H(Nb),providedIn:"root"})}return s})(),Nb=(()=>{class s{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),Y0=new pe("");var Z0=new pe(""),K0=(()=>{class s{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Ci;transitionAbortSubject=new Ci;configLoader=H(X0);environmentInjector=H(ls);destroyRef=H(vl);urlSerializer=H(nc);rootContexts=H(Co);location=H(po);inputBindingEnabled=H(au,{optional:!0})!==null;titleStrategy=H(Kd);options=H(oc,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=H(lu);createViewTransition=H(Y0,{optional:!0});navigationErrorHandler=H(Z0,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>re(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=i=>this.events.next(new Yl(i)),n=i=>this.events.next(new Zl(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;this.transitions?.next(At(J({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n}))}setupNavigations(t){return this.transitions=new $n(null),this.transitions.pipe(br(n=>n!==null),rn(n=>{let i=!1,r=!1;return re(n).pipe(rn(o=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",yn.SupersededByNewNavigation),Wi;this.currentTransition=n,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?At(J({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),c=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!a&&c!=="reload"){let l="";return this.events.next(new Ji(o.id,this.urlSerializer.serialize(o.rawUrl),l,$a.IgnoredSameUrlNavigation)),o.resolve(!1),Wi}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return re(o).pipe(rn(l=>(this.events.next(new Ss(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?Wi:Promise.resolve(l))),Rb(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Wt(l=>{n.targetSnapshot=l.targetSnapshot,n.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=At(J({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let h=new qa(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(h)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:l,extractedUrl:h,source:d,restoredState:f,extras:u}=o,m=new Ss(l,this.urlSerializer.serialize(h),d,f);this.events.next(m);let p=L0(this.rootComponentType).snapshot;return this.currentTransition=n=At(J({},o),{targetSnapshot:p,urlAfterRedirects:h,extras:At(J({},u),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=h,re(n)}else{let l="";return this.events.next(new Ji(o.id,this.urlSerializer.serialize(o.extractedUrl),l,$a.IgnoredByUrlHandlingStrategy)),o.resolve(!1),Wi}}),Wt(o=>{let a=new jl(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),Re(o=>(this.currentTransition=n=At(J({},o),{guards:ZS(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),n)),ab(this.environmentInjector,o=>this.events.next(o)),Wt(o=>{if(n.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw ru(this.urlSerializer,o.guardsResult);let a=new Xl(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(a)}),br(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",yn.GuardRejected),!1)),Fd(o=>{if(o.guards.canActivateChecks.length!==0)return re(o).pipe(Wt(a=>{let c=new $l(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),rn(a=>{let c=!1;return re(a).pipe(Pb(this.paramsInheritanceStrategy,this.environmentInjector),Wt({next:()=>c=!0,complete:()=>{c||this.cancelNavigationTransition(a,"",yn.NoDataFromResolver)}}))}),Wt(a=>{let c=new ql(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}))}),Fd(o=>{let a=c=>{let l=[];c.routeConfig?.loadComponent&&!c.routeConfig._loadedComponent&&l.push(this.configLoader.loadComponent(c.routeConfig).pipe(Wt(h=>{c.component=h}),Re(()=>{})));for(let h of c.children)l.push(...a(h));return l};return Qh(a(o.targetSnapshot.root)).pipe(ed(null),ui(1))}),Fd(()=>this.afterPreactivation()),rn(()=>{let{currentSnapshot:o,targetSnapshot:a}=n,c=this.createViewTransition?.(this.environmentInjector,o.root,a.root);return c?vn(c).pipe(Re(()=>n)):re(n)}),Re(o=>{let a=jS(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=n=At(J({},o),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,n}),Wt(()=>{this.events.next(new Ya)}),YS(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),ui(1),Wt({next:o=>{i=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ki(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{i=!0}}),ag(this.transitionAbortSubject.pipe(Wt(o=>{throw o}))),co(()=>{!i&&!r&&this.cancelNavigationTransition(n,"",yn.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation=null,this.currentTransition=null)}),ao(o=>{if(this.destroyed)return n.resolve(!1),Wi;if(r=!0,k0(o))this.events.next(new Fi(n.id,this.urlSerializer.serialize(n.extractedUrl),o.message,o.cancellationCode)),qS(o)?this.events.next(new wo(o.url,o.navigationBehaviorOptions)):n.resolve(!1);else{let a=new Mo(n.id,this.urlSerializer.serialize(n.extractedUrl),o,n.targetSnapshot??void 0);try{let c=jt(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(c instanceof Eo){let{message:l,cancellationCode:h}=ru(this.urlSerializer,c);this.events.next(new Fi(n.id,this.urlSerializer.serialize(n.extractedUrl),l,h)),this.events.next(new wo(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(a),o}catch(c){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(c)}}return Wi}))}))}cancelNavigationTransition(t,n,i){let r=new Fi(t.id,this.urlSerializer.serialize(t.extractedUrl),n,i);this.events.next(r),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function Ub(s){return s!==Hl}var J0=(()=>{class s{static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:()=>H(Bb),providedIn:"root"})}return s})(),ou=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},Bb=(()=>{class s extends ou{static \u0275fac=(()=>{let t;return function(i){return(t||(t=us(s)))(i||s)}})();static \u0275prov=ce({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),Q0=(()=>{class s{urlSerializer=H(nc);options=H(oc,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=H(po);urlHandlingStrategy=H(lu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ni;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:n,targetBrowserUrl:i}){let r=t!==void 0?this.urlHandlingStrategy.merge(t,n):n,o=i??r;return o instanceof Ni?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:n,initialUrl:i}){n&&t?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,i),this.routerState=t):this.rawUrlTree=i}routerState=L0(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:()=>H(kb),providedIn:"root"})}return s})(),kb=(()=>{class s extends Q0{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{t(n.url,n.state,"popstate")})})}handleRouterEvent(t,n){t instanceof Ss?this.updateStateMemento():t instanceof Ji?this.commitTransition(n):t instanceof qa?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof Ya?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof Fi&&(t.code===yn.GuardRejected||t.code===yn.NoDataFromResolver)?this.restoreHistory(n):t instanceof Mo?this.restoreHistory(n,!0):t instanceof Ki&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:n,id:i}){let{replaceUrl:r,state:o}=n;if(this.location.isCurrentPathEqualTo(t)||r){let a=this.browserPageId,c=J(J({},o),this.generateNgRouterState(i,a));this.location.replaceState(t,"",c)}else{let a=J(J({},o),this.generateNgRouterState(i,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,r=this.currentPageId-i;r!==0?this.location.historyGo(r):this.getCurrentUrlTree()===t.finalUrl&&r===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=us(s)))(i||s)}})();static \u0275prov=ce({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function ef(s,e){s.events.pipe(br(t=>t instanceof Ki||t instanceof Fi||t instanceof Mo||t instanceof Ji),Re(t=>t instanceof Ki||t instanceof Ji?0:(t instanceof Fi?t.code===yn.Redirect||t.code===yn.SupersededByNewNavigation:!1)?2:1),br(t=>t!==2),ui(1)).subscribe(()=>{e()})}var zb={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Vb={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},uu=(()=>{class s{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=H(yg);stateManager=H(Q0);options=H(oc,{optional:!0})||{};pendingTasks=H(yl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=H(K0);urlSerializer=H(nc);location=H(po);urlHandlingStrategy=H(lu);_events=new Ci;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=H(J0);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=H(ac,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!H(au,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Qm;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,r=this.navigationTransitions.currentNavigation;if(i!==null&&r!==null){if(this.stateManager.handleRouterEvent(n,r),n instanceof Fi&&n.code!==yn.Redirect&&n.code!==yn.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Ki)this.navigated=!0;else if(n instanceof wo){let o=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),c=J({browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Ub(i.source)},o);this.scheduleNavigation(a,Hl,null,c,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Gb(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortSubject.next(i)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Hl,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n,i)=>{this.navigateToSyncWithBrowser(t,i,n)})}navigateToSyncWithBrowser(t,n,i){let r={replaceUrl:!0},o=i?.navigationId?i:null;if(i){let c=J({},i);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(r.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,n,o,r)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Qd),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:i,queryParams:r,fragment:o,queryParamsHandling:a,preserveFragment:c}=n,l=c?this.currentUrlTree.fragment:o,h=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":h=J(J({},this.currentUrlTree.queryParams),r);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=r||null}h!==null&&(h=this.removeEmptyProps(h));let d;try{let f=i?i.snapshot:this.routerState.snapshot.root;d=D0(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return R0(d,t,h,l??null)}navigateByUrl(t,n={skipLocationChange:!1}){let i=bo(t)?t:this.parseUrl(t),r=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(r,Hl,null,n)}navigate(t,n={skipLocationChange:!1}){return Hb(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,n){let i;if(n===!0?i=J({},zb):n===!1?i=J({},Vb):i=n,bo(t))return u0(this.currentUrlTree,t,i);let r=this.parseUrl(t);return u0(this.currentUrlTree,r,i)}removeEmptyProps(t){return Object.entries(t).reduce((n,[i,r])=>(r!=null&&(n[i]=r),n),{})}scheduleNavigation(t,n,i,r,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let h=this.pendingTasks.add();return ef(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:r,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function Hb(s){for(let e=0;e<s.length;e++)if(s[e]==null)throw new Le(4008,!1)}function Gb(s){return!(s instanceof Ya)&&!(s instanceof wo)}var Xb=new pe("");function tf(s,...e){return Xi([{provide:ac,multi:!0,useValue:s},[],{provide:Lr,useFactory:$b,deps:[uu]},{provide:xg,multi:!0,useFactory:qb},e.map(t=>t.\u0275providers)])}function $b(s){return s.routerState.root}function qb(){let s=H(wr);return e=>{let t=s.get(Sg);if(e!==t.components[0])return;let n=s.get(uu),i=s.get(Yb);s.get(Zb)===1&&n.initialNavigation(),s.get(Kb,null,_l.Optional)?.setUpPreloading(),s.get(Xb,null,_l.Optional)?.init(),n.resetRootComponentType(t.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var Yb=new pe("",{factory:()=>new Ci}),Zb=new pe("",{providedIn:"root",factory:()=>1});var Kb=new pe("");var Qi=class{},nf=(()=>{class s extends Qi{getTranslation(t){return re({})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=us(s)))(i||s)}})();static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})(),Do=class{},rf=(()=>{class s{handle(t){return t.key}static \u0275fac=function(n){return new(n||s)};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})();function bs(s){return typeof s<"u"&&s!==null}function gu(s){return hu(s)&&!lf(s)&&s!==null}function hu(s){return typeof s=="object"}function lf(s){return Array.isArray(s)}function e_(s){return typeof s=="string"}function Qb(s){return typeof s=="function"}function sf(s,e){let t=Object.assign({},s);return hu(s)?(hu(s)&&hu(e)&&Object.keys(e).forEach(n=>{gu(e[n])?n in s?t[n]=sf(s[n],e[n]):Object.assign(t,{[n]:e[n]}):Object.assign(t,{[n]:e[n]})}),t):sf({},e)}function of(s,e){let t=e.split(".");e="";do e+=t.shift(),bs(s)&&bs(s[e])&&(gu(s[e])||lf(s[e])||!t.length)?(s=s[e],e=""):t.length?e+=".":s=void 0;while(t.length);return s}function eM(s,e,t){let n=e.split("."),i=s;for(let r=0;r<n.length;r++){let o=n[r];r===n.length-1?i[o]=t:((!i[o]||!gu(i[o]))&&(i[o]={}),i=i[o])}}var Ms=class{},af=(()=>{class s extends Ms{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(t,n){if(e_(t))return this.interpolateString(t,n);if(Qb(t))return this.interpolateFunction(t,n)}interpolateFunction(t,n){return t(n)}interpolateString(t,n){return n?t.replace(this.templateMatcher,(i,r)=>{let o=of(n,r);return bs(o)?o:i}):t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=us(s)))(i||s)}})();static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})(),ws=class{},cf=(()=>{class s extends ws{compile(t,n){return t}compileTranslations(t,n){return t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=us(s)))(i||s)}})();static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})(),Ro=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new Ai;onLangChange=new Ai;onDefaultLangChange=new Ai},du=new pe("ISOLATE_TRANSLATE_SERVICE"),fu=new pe("USE_DEFAULT_LANG"),pu=new pe("DEFAULT_LANGUAGE"),mu=new pe("USE_EXTEND"),cc=s=>as(s)?s:re(s),Es=(()=>{class s{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(t){this.store.defaultLang=t}get currentLang(){return this.store.currentLang}set currentLang(t){this.store.currentLang=t}get langs(){return this.store.langs}set langs(t){this.store.langs=t}get translations(){return this.store.translations}set translations(t){this.store.translations=t}constructor(t,n,i,r,o,a=!0,c=!1,l=!1,h){this.store=t,this.currentLoader=n,this.compiler=i,this.parser=r,this.missingTranslationHandler=o,this.useDefaultLang=a,this.extend=l,c&&(this.store=new Ro),h&&this.setDefaultLang(h)}setDefaultLang(t){if(t===this.defaultLang)return;let n=this.retrieveTranslations(t);typeof n<"u"?(this.defaultLang==null&&(this.defaultLang=t),n.pipe(ui(1)).subscribe(()=>{this.changeDefaultLang(t)})):this.changeDefaultLang(t)}getDefaultLang(){return this.defaultLang}use(t){if(this.lastUseLanguage=t,t===this.currentLang)return re(this.translations[t]);this.currentLang||(this.currentLang=t);let n=this.retrieveTranslations(t);return as(n)?(n.pipe(ui(1)).subscribe(()=>{this.changeLang(t)}),n):(this.changeLang(t),re(this.translations[t]))}changeLang(t){t===this.lastUseLanguage&&(this.currentLang=t,this.onLangChange.emit({lang:t,translations:this.translations[t]}),this.defaultLang==null&&this.changeDefaultLang(t))}retrieveTranslations(t){if(typeof this.translations[t]>"u"||this.extend)return this._translationRequests[t]=this._translationRequests[t]||this.loadAndCompileTranslations(t),this._translationRequests[t]}getTranslation(t){return this.loadAndCompileTranslations(t)}loadAndCompileTranslations(t){this.pending=!0;let n=this.currentLoader.getTranslation(t).pipe(nd(1),ui(1));return this.loadingTranslations=n.pipe(Re(i=>this.compiler.compileTranslations(i,t)),nd(1),ui(1)),this.loadingTranslations.subscribe({next:i=>{this.translations[t]=this.extend&&this.translations[t]?J(J({},i),this.translations[t]):i,this.updateLangs(),this.pending=!1},error:i=>{this.pending=!1}}),n}setTranslation(t,n,i=!1){let r=this.compiler.compileTranslations(n,t);(i||this.extend)&&this.translations[t]?this.translations[t]=sf(this.translations[t],r):this.translations[t]=r,this.updateLangs(),this.onTranslationChange.emit({lang:t,translations:this.translations[t]})}getLangs(){return this.langs}addLangs(t){let n=t.filter(i=>!this.langs.includes(i));n.length>0&&(this.langs=[...this.langs,...n])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(t,n,i){let r;if(t&&(r=this.runInterpolation(of(t,n),i)),r===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(r=this.runInterpolation(of(this.translations[this.defaultLang],n),i)),r===void 0){let o={key:n,translateService:this};typeof i<"u"&&(o.interpolateParams=i),r=this.missingTranslationHandler.handle(o)}return r!==void 0?r:n}runInterpolation(t,n){if(lf(t))return t.map(i=>this.runInterpolation(i,n));if(gu(t)){let i={};for(let r in t){let o=this.runInterpolation(t[r],n);o!==void 0&&(i[r]=o)}return i}else return this.parser.interpolate(t,n)}getParsedResult(t,n,i){if(n instanceof Array){let r={},o=!1;for(let c of n)r[c]=this.getParsedResultForKey(t,c,i),o=o||as(r[c]);if(!o)return r;let a=n.map(c=>cc(r[c]));return ig(a).pipe(Re(c=>{let l={};return c.forEach((h,d)=>{l[n[d]]=h}),l}))}return this.getParsedResultForKey(t,n,i)}get(t,n){if(!bs(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(ji(i=>cc(this.getParsedResult(i,t,n)))):cc(this.getParsedResult(this.translations[this.currentLang],t,n))}getStreamOnTranslationChange(t,n){if(!bs(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return Ca(oo(()=>this.get(t,n)),this.onTranslationChange.pipe(rn(i=>{let r=this.getParsedResult(i.translations,t,n);return cc(r)})))}stream(t,n){if(!bs(t)||!t.length)throw new Error('Parameter "key" required');return Ca(oo(()=>this.get(t,n)),this.onLangChange.pipe(rn(i=>{let r=this.getParsedResult(i.translations,t,n);return cc(r)})))}instant(t,n){if(!bs(t)||t.length===0)throw new Error('Parameter "key" is required and cannot be empty');let i=this.getParsedResult(this.translations[this.currentLang],t,n);return as(i)?Array.isArray(t)?t.reduce((r,o)=>(r[o]=o,r),{}):t:i}set(t,n,i=this.currentLang){eM(this.translations[i],t,e_(n)?this.compiler.compile(n,i):this.compiler.compileTranslations(n,i)),this.updateLangs(),this.onTranslationChange.emit({lang:i,translations:this.translations[i]})}changeDefaultLang(t){this.defaultLang=t,this.onDefaultLangChange.emit({lang:t,translations:this.translations[t]})}reloadLang(t){return this.resetLang(t),this.loadAndCompileTranslations(t)}resetLang(t){delete this._translationRequests[t],delete this.translations[t]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let t=this.getBrowserCultureLang();return t?t.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(n){return new(n||s)(te(Ro),te(Qi),te(ws),te(Ms),te(Do),te(fu),te(du),te(mu),te(pu))};static \u0275prov=ce({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var t_=(s={})=>Xi([s.loader||{provide:Qi,useClass:nf},s.compiler||{provide:ws,useClass:cf},s.parser||{provide:Ms,useClass:af},s.missingTranslationHandler||{provide:Do,useClass:rf},Ro,{provide:du,useValue:s.isolate},{provide:fu,useValue:s.useDefaultLang},{provide:mu,useValue:s.extend},{provide:pu,useValue:s.defaultLanguage},Es]),n_=(()=>{class s{static forRoot(t={}){return{ngModule:s,providers:[t.loader||{provide:Qi,useClass:nf},t.compiler||{provide:ws,useClass:cf},t.parser||{provide:Ms,useClass:af},t.missingTranslationHandler||{provide:Do,useClass:rf},Ro,{provide:du,useValue:t.isolate},{provide:fu,useValue:t.useDefaultLang},{provide:mu,useValue:t.extend},{provide:pu,useValue:t.defaultLanguage},Es]}}static forChild(t={}){return{ngModule:s,providers:[t.loader||{provide:Qi,useClass:nf},t.compiler||{provide:ws,useClass:cf},t.parser||{provide:Ms,useClass:af},t.missingTranslationHandler||{provide:Do,useClass:rf},{provide:du,useValue:t.isolate},{provide:fu,useValue:t.useDefaultLang},{provide:mu,useValue:t.extend},{provide:pu,useValue:t.defaultLanguage},Es]}}static \u0275fac=function(n){return new(n||s)};static \u0275mod=fs({type:s});static \u0275inj=cs({})}return s})();var i_=(()=>{class s{http;prefix;suffix;constructor(t,n="/assets/i18n/",i=".json"){this.http=t,this.prefix=n,this.suffix=i}getTranslation(t){return this.http.get(`${this.prefix}${t}${this.suffix}`)}static \u0275fac=function(n){return new(n||s)(te(Pr),te(String),te(String))};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})();function er(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function h_(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Mn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Io={duration:.5,overwrite:!1,delay:0},Af,Ut,Qe,Kn=1e8,Xe=1/Kn,_f=Math.PI*2,tM=_f/4,nM=0,d_=Math.sqrt,iM=Math.cos,rM=Math.sin,Et=function(e){return typeof e=="string"},lt=function(e){return typeof e=="function"},nr=function(e){return typeof e=="number"},Tu=function(e){return typeof e>"u"},ki=function(e){return typeof e=="object"},bn=function(e){return e!==!1},Df=function(){return typeof window<"u"},_u=function(e){return lt(e)||Et(e)},f_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$t=Array.isArray,vf=/(?:-?\.?\d|\.)+/gi,Rf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ds=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pf=/[+-]=-?[.\d]+/,p_=/[^,'"\[\]\s]+/gi,sM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,it,Ui,yf,If,Ln={},Su={},m_,g_=function(e){return(Su=Lo(e,Ln))&&qt},Cu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},pc=function(e,t){return!t&&console.warn(e)},__=function(e,t){return e&&(Ln[e]=t)&&Su&&(Su[e]=t)||Ln},mc=function(){return 0},oM={suppressEvents:!0,isStart:!0,kill:!1},vu={suppressEvents:!0,kill:!1},aM={suppressEvents:!0},Lf={},Nr=[],xf={},v_,xn={},hf={},r_=30,yu=[],Of="",Ff=function(e){var t=e[0],n,i;if(ki(t)||lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=yu.length;i--&&!yu[i].targetTest(t););n=yu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Bf(e[i],n)))||e.splice(i,1);return e},Ur=function(e){return e._gsap||Ff(Jn(e))[0]._gsap},Nf=function(e,t,n){return(n=e[t])&&lt(n)?e[t]():Tu(n)&&e.getAttribute&&e.getAttribute(t)||n},on=function(e,t){return(e=e.split(",")).forEach(t)||e},ut=function(e){return Math.round(e*1e5)/1e5||0},_t=function(e){return Math.round(e*1e7)/1e7||0},Rs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},cM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},bu=function(){var e=Nr.length,t=Nr.slice(0),n,i;for(xf={},Nr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},y_=function(e,t,n,i){Nr.length&&!Ut&&bu(),e.render(t,n,i||Ut&&t<0&&(e._initted||e._startAt)),Nr.length&&!Ut&&bu()},x_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(p_).length<2?t:Et(e)?e.trim():e},S_=function(e){return e},On=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Lo=function(e,t){for(var n in t)e[n]=t[n];return e},s_=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ki(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Mu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},hc=function(e){var t=e.parent||it,n=e.keyframes?lM($t(e.keyframes)):On;if(bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},uM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},b_=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Au=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Br=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ts=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},hM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Sf=function(e,t,n,i){return e._startAt&&(Ut?e._startAt.revert(vu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},dM=function s(e){return!e||e._ts&&s(e.parent)},o_=function(e){return e._repeat?Oo(e._tTime,e=e.duration()+e._rDelay)*e:0},Oo=function(e,t){var n=Math.floor(e=_t(e/t));return e&&n===e?n-1:n},wu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Du=function(e){return e._end=_t(e._start+(e._tDur/Math.abs(e._ts||e._rts||Xe)||0))},Ru=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Du(e),n._dirty||Ts(n,e)),e},M_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=wu(e.rawTime(),t),(!t._dur||vc(0,t.totalDuration(),n)-t._tTime>Xe)&&t.render(n,!0)),Ts(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Xe}},Bi=function(e,t,n,i){return t.parent&&Br(t),t._start=_t((nr(n)?n:n||e!==it?Zn(e,n,t):e._time)+t._delay),t._end=_t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),b_(e,t,"_first","_last",e._sort?"_start":0),bf(t)||(e._recent=t),i||M_(e,t),e._ts<0&&Ru(e,e._tTime),e},w_=function(e,t){return(Ln.ScrollTrigger||Cu("scrollTrigger",t))&&Ln.ScrollTrigger.create(t,e)},E_=function(e,t,n,i,r){if(Vf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&v_!==Sn.frame)return Nr.push(e),e._lazy=[r,i],1},fM=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},bf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},pM=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&fM(e)&&!(!e._initted&&bf(e))||(e._ts<0||e._dp._ts<0)&&!bf(e))?0:1,a=e._rDelay,c=0,l,h,d;if(a&&e._repeat&&(c=vc(0,e._tDur,t),h=Oo(c,a),e._yoyo&&h&1&&(o=1-o),h!==Oo(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Ut||i||e._zTime===Xe||!t&&e._zTime){if(!e._initted&&E_(e,t,i,n,c))return;for(d=e._zTime,e._zTime=t||(n?Xe:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Sf(e,t,n,!0),e._onUpdate&&!n&&In(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&In(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Br(e,1),!n&&!Ut&&(In(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},mM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Fo=function(e,t,n,i){var r=e._repeat,o=_t(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:_t(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Ru(e,e._tTime=e._tDur*a),e.parent&&Du(e),n||Ts(e.parent,e),e},a_=function(e){return e instanceof Nt?Ts(e):Fo(e,e._dur)},gM={_start:0,endTime:mc,totalDuration:mc},Zn=function s(e,t,n){var i=e.labels,r=e._recent||gM,o=e.duration()>=Kn?r.endTime(!1):e._dur,a,c,l;return Et(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*($t(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},dc=function(e,t,n){var i=nr(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=bn(c.vars.inherit)&&c.parent;o.immediateRender=bn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new ft(t[0],o,t[r+1])},kr=function(e,t){return e||e===0?t(e):t},vc=function(e,t,n){return n<e?e:n>t?t:n},Bt=function(e,t){return!Et(e)||!(t=sM.exec(e))?"":t[1]},_M=function(e,t,n){return kr(n,function(i){return vc(e,t,i)})},Mf=[].slice,T_=function(e,t){return e&&ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ki(e[0]))&&!e.nodeType&&e!==Ui},vM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Et(i)&&!t||T_(i,1)?(r=n).push.apply(r,Jn(i)):n.push(i)})||n},Jn=function(e,t,n){return Qe&&!t&&Qe.selector?Qe.selector(e):Et(e)&&!n&&(yf||!No())?Mf.call((t||If).querySelectorAll(e),0):$t(e)?vM(e,n):T_(e)?Mf.call(e,0):e?[e]:[]},wf=function(e){return e=Jn(e)[0]||pc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Jn(t,n.querySelectorAll?n:n===e?pc("Invalid scope")||If.createElement("div"):e)}},C_=function(e){return e.sort(function(){return .5-Math.random()})},A_=function(e){if(lt(e))return e;var t=ki(e)?e:{each:e},n=Cs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,h=i,d=i;return Et(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],d=i[1]),function(f,u,m){var p=(m||t).length,g=o[p],_,b,x,y,v,C,S,E,A;if(!g){if(A=t.grid==="auto"?0:(t.grid||[1,Kn])[1],!A){for(S=-Kn;S<(S=m[A++].getBoundingClientRect().left)&&A<p;);A<p&&A--}for(g=o[p]=[],_=c?Math.min(A,p)*h-.5:i%A,b=A===Kn?0:c?p*d/A-.5:i/A|0,S=0,E=Kn,C=0;C<p;C++)x=C%A-_,y=b-(C/A|0),g[C]=v=l?Math.abs(l==="y"?y:x):d_(x*x+y*y),v>S&&(S=v),v<E&&(E=v);i==="random"&&C_(g),g.max=S-E,g.min=E,g.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(A>p?p-1:l?l==="y"?p/A:A:Math.max(A,p/A))||0)*(i==="edges"?-1:1),g.b=p<0?r-p:r,g.u=Bt(t.amount||t.each)||0,n=n&&p<0?U_(n):n}return p=(g[f]-g.min)/g.max||0,_t(g.b+(n?n(p):p)*g.v)+g.u}},Ef=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=_t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(nr(n)?0:Bt(n))}},D_=function(e,t){var n=$t(e),i,r;return!n&&ki(e)&&(i=n=e.radius||Kn,e.values?(e=Jn(e.values),(r=!nr(e[0]))&&(i*=i)):e=Ef(e.increment)),kr(t,n?lt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=Kn,h=0,d=e.length,f,u;d--;)r?(f=e[d].x-a,u=e[d].y-c,f=f*f+u*u):f=Math.abs(e[d]-a),f<l&&(l=f,h=d);return h=!i||l<=i?e[h]:o,r||h===o||nr(o)?h:h+Bt(o)}:Ef(e))},R_=function(e,t,n,i){return kr($t(e)?!t:n===!0?!!(n=0):!i,function(){return $t(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},yM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},xM=function(e,t){return function(n){return e(parseFloat(n))+(t||Bt(n))}},SM=function(e,t,n){return I_(e,t,0,1,n)},P_=function(e,t,n){return kr(n,function(i){return e[~~t(i)]})},bM=function s(e,t,n){var i=t-e;return $t(e)?P_(e,s(0,e.length),t):kr(n,function(r){return(i+(r-e)%i)%i+e})},MM=function s(e,t,n){var i=t-e,r=i*2;return $t(e)?P_(e,s(0,e.length-1),t):kr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Uo=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?p_:vf),n+=e.substr(t,i-t)+R_(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},I_=function(e,t,n,i,r){var o=t-e,a=i-n;return kr(r,function(c){return n+((c-e)/o*a||0)})},wM=function s(e,t,n,i){var r=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!r){var o=Et(e),a={},c,l,h,d,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if($t(e)&&!$t(t)){for(h=[],d=e.length,f=d-2,l=1;l<d;l++)h.push(s(e[l-1],e[l]));d--,r=function(m){m*=d;var p=Math.min(f,~~m);return h[p](m-p)},n=t}else i||(e=Lo($t(e)?[]:{},e));if(!h){for(c in t)kf.call(a,e,c,"get",t[c]);r=function(m){return Wf(m,a)||(o?e.p:e)}}}return kr(n,r)},c_=function(e,t,n){var i=e.labels,r=Kn,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},In=function(e,t,n){var i=e.vars,r=i[t],o=Qe,a=e._ctx,c,l,h;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&Nr.length&&bu(),a&&(Qe=a),h=c?r.apply(l,c):r.call(l),Qe=o,h},lc=function(e){return Br(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&In(e,"onInterrupt"),e},Po,L_=[],O_=function(e){if(e)if(e=!e.name&&e.default||e,Df()||e.headless){var t=e.name,n=lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:mc,render:Wf,add:kf,kill:zM,modifier:kM,rawVars:0},o={targetTest:0,get:0,getSetter:Pu,aliases:{},register:0};if(No(),e!==i){if(xn[t])return;On(i,On(Mu(e,r),o)),Lo(i.prototype,Lo(r,Mu(e,o))),xn[i.prop=t]=i,e.targetTest&&(yu.push(i),Lf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}__(t,i),e.register&&e.register(qt,i,an)}else L_.push(e)},je=255,uc={aqua:[0,je,je],lime:[0,je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,je],navy:[0,0,128],white:[je,je,je],olive:[128,128,0],yellow:[je,je,0],orange:[je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[je,0,0],pink:[je,192,203],cyan:[0,je,je],transparent:[je,je,je,0]},df=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*je+.5|0},F_=function(e,t,n){var i=e?nr(e)?[e>>16,e>>8&je,e&je]:0:uc.black,r,o,a,c,l,h,d,f,u,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),uc[e])i=uc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&je,i&je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&je,e&je]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(vf),!t)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=df(c+1/3,r,o),i[1]=df(c,r,o),i[2]=df(c-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Rf),n&&i.length<4&&(i[3]=1),i}else i=e.match(vf)||uc.transparent;i=i.map(Number)}return t&&!m&&(r=i[0]/je,o=i[1]/je,a=i[2]/je,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?c=l=0:(u=d-f,l=h>.5?u/(2-d-f):u/(d+f),c=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},N_=function(e){var t=[],n=[],i=-1;return e.split(tr).forEach(function(r){var o=r.match(Ds)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},l_=function(e,t,n){var i="",r=(e+i).match(tr),o=t?"hsla(":"rgba(",a=0,c,l,h,d;if(!r)return e;if(r=r.map(function(f){return(f=F_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=N_(e),c=n.c,c.join(i)!==h.c.join(i)))for(l=e.replace(tr,"1").split(Ds),d=l.length-1;a<d;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=e.split(tr),d=l.length-1;a<d;a++)i+=l[a]+r[a];return i+l[d]},tr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in uc)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),EM=/hsl[a]?\(/,Uf=function(e){var t=e.join(" "),n;if(tr.lastIndex=0,tr.test(t))return n=EM.test(t),e[1]=l_(e[1],n),e[0]=l_(e[0],n,N_(e[1])),!0},gc,Sn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,h,d,f,u,m=function p(g){var _=s()-i,b=g===!0,x,y,v,C;if((_>e||_<0)&&(n+=_-t),i+=_,v=i-n,x=v-o,(x>0||b)&&(C=++d.frame,f=v-d.time*1e3,d.time=v=v/1e3,o+=x+(x>=r?4:r-x),y=1),b||(c=l(p)),y)for(u=0;u<a.length;u++)a[u](v,f,C,g)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){m_&&(!yf&&Df()&&(Ui=yf=window,If=Ui.document||{},Ln.gsap=qt,(Ui.gsapVersions||(Ui.gsapVersions=[])).push(qt.version),g_(Su||Ui.GreenSockGlobals||!Ui.gsap&&Ui||{}),L_.forEach(O_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),l=h||function(g){return setTimeout(g,o-d.time*1e3+1|0)},gc=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),gc=0,l=mc},lagSmoothing:function(g,_){e=g||1/0,t=Math.min(_||33,e)},fps:function(g){r=1e3/(g||240),o=d.time*1e3+r},add:function(g,_,b){var x=_?function(y,v,C,S){g(y,v,C,S),d.remove(x)}:g;return d.remove(g),a[b?"unshift":"push"](x),No(),x},remove:function(g,_){~(_=a.indexOf(g))&&a.splice(_,1)&&u>=_&&u--},_listeners:a},d}(),No=function(){return!gc&&Sn.wake()},Ce={},TM=/^[\d.\-M][\d.\-,\s]/,CM=/["']/g,AM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(CM,"").trim():+l,i=c.substr(a+1).trim();return t},DM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},RM=function(e){var t=(e+"").split("("),n=Ce[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[AM(t[1])]:DM(e).split(",").map(x_)):Ce._CE&&TM.test(e)?Ce._CE("",e):n},U_=function(e){return function(t){return 1-e(1-t)}},B_=function s(e,t){for(var n=e._first,i;n;)n instanceof Nt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Cs=function(e,t){return e&&(lt(e)?e:Ce[e]||RM(e))||t},Ps=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return on(e,function(a){Ce[a]=Ln[a]=r,Ce[o=a.toLowerCase()]=n;for(var c in r)Ce[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ce[a+"."+c]=r[c]}),r},k_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ff=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/_f*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*rM((h-o)*r)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:k_(a);return r=_f/r,c.config=function(l,h){return s(e,l,h)},c},pf=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:k_(n);return i.config=function(r){return s(e,r)},i};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ps(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;Ps("Elastic",ff("in"),ff("out"),ff());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Ps("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ps("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ps("Circ",function(s){return-(d_(1-s*s)-1)});Ps("Sine",function(s){return s===1?1:-iM(s*tM)+1});Ps("Back",pf("in"),pf("out"),pf());Ce.SteppedEase=Ce.steps=Ln.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Xe;return function(a){return((i*vc(0,o,a)|0)+r)*n}}};Io.ease=Ce["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Of+=s+","+s+"Params,"});var Bf=function(e,t){this.id=nM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Nf,this.set=t?t.getSetter:Pu},_c=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Fo(this,+t.duration,1,1),this.data=t.data,Qe&&(this._ctx=Qe,Qe.data.push(this)),gc||Sn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Fo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(No(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ru(this,n),!r._dp||r.parent||M_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Xe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),y_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+o_(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+o_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Oo(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Xe?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?wu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Xe?0:this._rts,this.totalTime(vc(-Math.abs(this._delay),this._tDur,r),i!==!1),Du(this),hM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(No(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xe&&(this._tTime-=Xe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=aM);var i=Ut;return Ut=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,a_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,a_(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Zn(this,n),bn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,bn(i)),this._dur||(this._zTime=-Xe),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Xe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Xe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Xe)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=lt(n)?n:S_,a=function(){var l=i.then;i.then=null,lt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){lc(this)},s}();On(_c.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Xe,_prom:0,_ps:!1,_rts:1});var Nt=function(s){h_(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=bn(n.sortChildren),it&&Bi(n.parent||it,er(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&w_(er(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return dc(0,arguments,this),this},t.from=function(i,r,o){return dc(1,arguments,this),this},t.fromTo=function(i,r,o,a){return dc(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,hc(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ft(i,r,Zn(this,o),1),this},t.call=function(i,r,o){return Bi(this,ft.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,c,l,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new ft(i,o,Zn(this,c)),this},t.staggerFrom=function(i,r,o,a,c,l,h){return o.runBackwards=1,hc(o).immediateRender=bn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,h)},t.staggerFromTo=function(i,r,o,a,c,l,h,d){return a.startAt=o,hc(a).immediateRender=bn(a.immediateRender),this.staggerTo(i,r,a,c,l,h,d)},t.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:_t(i),d=this._zTime<0!=i<0&&(this._initted||!l),f,u,m,p,g,_,b,x,y,v,C,S;if(this!==it&&h>c&&i>=0&&(h=c),h!==this._tTime||o||d){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,x=this._ts,_=!x,d&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,g=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,o);if(f=_t(h%g),h===c?(p=this._repeat,f=l):(v=_t(h/g),p=~~v,p&&p===v&&(f=l,p--),f>l&&(f=l)),v=Oo(this._tTime,g),!a&&this._tTime&&v!==p&&this._tTime-v*g-this._dur<=0&&(v=p),C&&p&1&&(f=l-f,S=1),p!==v&&!this._lock){var E=C&&v&1,A=E===(C&&p&1);if(p<v&&(E=!E),a=E?0:h%l?l:h,this._lock=1,this.render(a||(S?0:_t(p*g)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,A&&(this._lock=2,a=E?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;B_(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=mM(this,_t(a),_t(f)),b&&(h-=f-(f=b._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!p&&(In(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&b!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!_){b=0,m&&(h+=this._zTime=-Xe);break}}u=m}else{u=this._last;for(var I=i<0?i:f;u;){if(m=u._prev,(u._act||I<=u._end)&&u._ts&&b!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(I-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(I-u._start)*u._ts,r,o||Ut&&(u._initted||u._startAt)),f!==this._time||!this._ts&&!_){b=0,m&&(h+=this._zTime=I?-Xe:Xe);break}}u=m}}if(b&&!r&&(this.pause(),b.render(f>=a?0:-Xe)._zTime=f>=a?1:-1,this._ts))return this._start=y,Du(this),this.render(i,r,o);this._onUpdate&&!r&&In(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Br(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(In(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(nr(r)||(r=Zn(this,r,i)),!(i instanceof _c)){if($t(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Et(i))return this.addLabel(i,r);if(lt(i))i=ft.delayedCall(0,i);else return this}return this!==i?Bi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Kn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof ft?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Et(i)?this.removeLabel(i):lt(i)?this.killTweensOf(i):(i.parent===this&&Au(this,i),i===this._recent&&(this._recent=this._last),Ts(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_t(Sn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Zn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=ft.delayedCall(0,r||mc,o);return a.data="isPause",this._hasPause=1,Bi(this,a,Zn(this,i))},t.removePause=function(i){var r=this._first;for(i=Zn(this,i);r;)r._start===i&&r.data==="isPause"&&Br(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Fr!==a[c]&&a[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Jn(i),c=this._first,l=nr(r),h;c;)c instanceof ft?cM(c._targets,a)&&(l?(!Fr||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Zn(o,i),c=r,l=c.startAt,h=c.onStart,d=c.onStartParams,f=c.immediateRender,u,m=ft.to(o,On({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Xe,onStart:function(){if(o.pause(),!u){var g=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());m._dur!==g&&Fo(m,g,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,d||[])}},r));return f?m.render(0):m},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,On({startAt:{time:Zn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),c_(this,Zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),c_(this,Zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Xe)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return Ts(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ts(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,c=Kn,l,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bi(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;Fo(o,o===it&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(it._ts&&(y_(it,wu(i,it)),v_=Sn.frame),Sn.frame>=r_){r_+=Mn.autoSleep||120;var r=it._first;if((!r||!r._ts)&&Mn.autoSleep&&Sn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Sn.sleep()}}},e}(_c);On(Nt.prototype,{_lock:0,_hasPause:0,_forcing:0});var PM=function(e,t,n,i,r,o,a){var c=new an(this._pt,e,t,0,1,Gf,null,r),l=0,h=0,d,f,u,m,p,g,_,b;for(c.b=n,c.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Uo(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),f=n.match(uf)||[];d=uf.exec(i);)m=d[0],p=i.substring(l,d.index),u?u=(u+1)%5:p.substr(-5)==="rgba("&&(u=1),m!==f[h++]&&(g=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:p||h===1?p:",",s:g,c:m.charAt(1)==="="?Rs(g,m)-g:parseFloat(m)-g,m:u&&u<4?Math.round:0},l=uf.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Pf.test(i)||_)&&(c.e=0),this._pt=c,c},kf=function(e,t,n,i,r,o,a,c,l,h){lt(i)&&(i=i(r||0,e,o));var d=e[t],f=n!=="get"?n:lt(d)?l?e[t.indexOf("set")||!lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():d,u=lt(d)?l?NM:H_:Hf,m;if(Et(i)&&(~i.indexOf("random(")&&(i=Uo(i)),i.charAt(1)==="="&&(m=Rs(f,i)+(Bt(f)||0),(m||m===0)&&(i=m))),!h||f!==i||Tf)return!isNaN(f*i)&&i!==""?(m=new an(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?BM:G_,0,u),l&&(m.fp=l),a&&m.modifier(a,this,e),this._pt=m):(!d&&!(t in e)&&Cu(t,i),PM.call(this,e,t,f,i,u,c||Mn.stringFilter,l))},IM=function(e,t,n,i,r){if(lt(e)&&(e=fc(e,r,t,n,i)),!ki(e)||e.style&&e.nodeType||$t(e)||f_(e))return Et(e)?fc(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=fc(e[a],r,t,n,i);return o},zf=function(e,t,n,i,r,o){var a,c,l,h;if(xn[e]&&(a=new xn[e]).init(r,a.rawVars?t[e]:IM(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new an(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Po))for(l=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=c;return a},Fr,Tf,Vf=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,m=e._dur,p=e._startAt,g=e._targets,_=e.parent,b=_&&_.data==="nested"?_.vars.targets:g,x=e._overwrite==="auto"&&!Af,y=e.timeline,v,C,S,E,A,I,O,U,F,q,$,j,V;if(y&&(!f||!r)&&(r="none"),e._ease=Cs(r,Io.ease),e._yEase=d?U_(Cs(d===!0?r:d,Io.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(U=g[0]?Ur(g[0]).harness:0,j=U&&i[U.prop],v=Mu(i,Lf),p&&(p._zTime<0&&p.progress(1),t<0&&h&&a&&!u?p.render(-1,!0):p.revert(h&&m?vu:oM),p._lazy=0),o){if(Br(e._startAt=ft.set(g,On({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!p&&bn(c),startAt:null,delay:0,onUpdate:l&&function(){return In(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!a&&!u)&&e._startAt.revert(vu),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!p){if(t&&(a=!1),S=On({overwrite:!1,data:"isFromStart",lazy:a&&!p&&bn(c),immediateRender:a,stagger:0,parent:_},v),j&&(S[U.prop]=j),Br(e._startAt=ft.set(g,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(vu):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Xe,Xe);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&bn(c)||c&&!m,C=0;C<g.length;C++){if(A=g[C],O=A._gsap||Ff(g)[C]._gsap,e._ptLookup[C]=q={},xf[O.id]&&Nr.length&&bu(),$=b===g?C:b.indexOf(A),U&&(F=new U).init(A,j||v,e,$,b)!==!1&&(e._pt=E=new an(e._pt,A,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(Q){q[Q]=E}),F.priority&&(I=1)),!U||j)for(S in v)xn[S]&&(F=zf(S,v,e,$,A,b))?F.priority&&(I=1):q[S]=E=kf.call(e,A,S,"get",v[S],$,b,0,i.stringFilter);e._op&&e._op[C]&&e.kill(A,e._op[C]),x&&e._pt&&(Fr=e,it.killTweensOf(A,q,e.globalTime(t)),V=!e.parent,Fr=0),e._pt&&c&&(xf[O.id]=1)}I&&jf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!V,f&&t<=0&&y.render(Kn,!0,!0)},LM=function(e,t,n,i,r,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,f,u;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,u=e._targets.length;u--;){if(h=f[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Tf=1,e.vars[t]="+=0",Vf(e,a),Tf=0,c?pc(t+" not eligible for reset"):1;l.push(h)}for(u=l.length;u--;)d=l[u],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=ut(n)+Bt(d.e)),d.b&&(d.b=h.s+Bt(d.b))},OM=function(e,t){var n=e[0]?Ur(e[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return t;r=Lo({},t);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},FM=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if($t(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},fc=function(e,t,n,i,r){return lt(e)?e.call(t,n,i,r):Et(e)&&~e.indexOf("random(")?Uo(e):e},z_=Of+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",V_={};on(z_+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return V_[s]=1});var ft=function(s){h_(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:hc(i))||this;var c=a.vars,l=c.duration,h=c.delay,d=c.immediateRender,f=c.stagger,u=c.overwrite,m=c.keyframes,p=c.defaults,g=c.scrollTrigger,_=c.yoyoEase,b=i.parent||it,x=($t(n)||f_(n)?nr(n[0]):"length"in i)?[n]:Jn(n),y,v,C,S,E,A,I,O;if(a._targets=x.length?Ff(x):pc("GSAP target "+n+" not found. https://gsap.com",!Mn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,m||f||_u(l)||_u(h)){if(i=a.vars,y=a.timeline=new Nt({data:"nested",defaults:p||{},targets:b&&b.data==="nested"?b.vars.targets:x}),y.kill(),y.parent=y._dp=er(a),y._start=0,f||_u(l)||_u(h)){if(S=x.length,I=f&&A_(f),ki(f))for(E in f)~z_.indexOf(E)&&(O||(O={}),O[E]=f[E]);for(v=0;v<S;v++)C=Mu(i,V_),C.stagger=0,_&&(C.yoyoEase=_),O&&Lo(C,O),A=x[v],C.duration=+fc(l,er(a),v,A,x),C.delay=(+fc(h,er(a),v,A,x)||0)-a._delay,!f&&S===1&&C.delay&&(a._delay=h=C.delay,a._start+=h,C.delay=0),y.to(A,C,I?I(v,A,x):0),y._ease=Ce.none;y.duration()?l=h=0:a.timeline=0}else if(m){hc(On(y.vars.defaults,{ease:"none"})),y._ease=Cs(m.ease||i.ease||"none");var U=0,F,q,$;if($t(m))m.forEach(function(j){return y.to(x,j,">")}),y.duration();else{C={};for(E in m)E==="ease"||E==="easeEach"||FM(E,m[E],C,m.easeEach);for(E in C)for(F=C[E].sort(function(j,V){return j.t-V.t}),U=0,v=0;v<F.length;v++)q=F[v],$={ease:q.e,duration:(q.t-(v?F[v-1].t:0))/100*l},$[E]=q.v,y.to(x,$,U),U+=$.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||a.duration(l=y.duration())}else a.timeline=0;return u===!0&&!Af&&(Fr=er(a),it.killTweensOf(x),Fr=0),Bi(b,er(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!l&&!m&&a._start===_t(b._time)&&bn(d)&&dM(er(a))&&b.data!=="nested")&&(a._tTime=-Xe,a.render(Math.max(0,-h)||0)),g&&w_(er(a),g),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,d=i>c-Xe&&!h?c:i<Xe?0:i,f,u,m,p,g,_,b,x,y;if(!l)pM(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,x=this.timeline,this._repeat){if(p=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+i,r,o);if(f=_t(d%p),d===c?(m=this._repeat,f=l):(g=_t(d/p),m=~~g,m&&m===g?(f=l,m--):f>l&&(f=l)),_=this._yoyo&&m&1,_&&(y=this._yEase,f=l-f),g=Oo(this._tTime,p),f===a&&!o&&this._initted&&m===g)return this._tTime=d,this;m!==g&&(x&&this._yEase&&B_(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&f!==p&&this._initted&&(this._lock=o=1,this.render(_t(p*m),!0).invalidate()._lock=0))}if(!this._initted){if(E_(this,h?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(f/l),this._from&&(this.ratio=b=1-b),f&&!a&&!r&&!m&&(In(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(b,u.d),u=u._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Sf(this,i,r,o),In(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!r&&this.parent&&In(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Sf(this,i,!0,!0),(i||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Br(this,1),!r&&!(h&&!a)&&(d||a||_)&&(In(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,c){gc||Sn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Vf(this,l),h=this._ease(l/this._dur),LM(this,i,r,o,a,h,l,c)?this.resetTo(i,r,o,a,1):(Ru(this,0),this.parent||b_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?lc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Fr&&Fr.vars.overwrite!==!0)._first||lc(this),this.parent&&o!==this.timeline.totalDuration()&&Fo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Jn(i):a,l=this._ptLookup,h=this._pt,d,f,u,m,p,g,_;if((!r||r==="all")&&uM(a,c))return r==="all"&&(this._pt=0),lc(this);for(d=this._op=this._op||[],r!=="all"&&(Et(r)&&(p={},on(r,function(b){return p[b]=1}),r=p),r=OM(a,r)),_=a.length;_--;)if(~c.indexOf(a[_])){f=l[_],r==="all"?(d[_]=r,m=f,u={}):(u=d[_]=d[_]||{},m=r);for(p in m)g=f&&f[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&Au(this,g,"_pt"),delete f[p]),u!=="all"&&(u[p]=1)}return this._initted&&!this._pt&&h&&lc(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return dc(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return dc(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return it.killTweensOf(i,r,o)},e}(_c);On(ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(s){ft[s]=function(){var e=new Nt,t=Mf.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Hf=function(e,t,n){return e[t]=n},H_=function(e,t,n){return e[t](n)},NM=function(e,t,n,i){return e[t](i.fp,n)},UM=function(e,t,n){return e.setAttribute(t,n)},Pu=function(e,t){return lt(e[t])?H_:Tu(e[t])&&e.setAttribute?UM:Hf},G_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},BM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Wf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},kM=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},zM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Au(this,t,"_pt"):t.dep||(n=1),t=i;return!n},VM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},jf=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},an=function(){function s(t,n,i,r,o,a,c,l,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||G_,this.d=c||this,this.set=l||Hf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=VM,this.m=n,this.mt=r,this.tween=i},s}();on(Of+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Lf[s]=1});Ln.TweenMax=Ln.TweenLite=ft;Ln.TimelineLite=Ln.TimelineMax=Nt;it=new Nt({sortChildren:!1,defaults:Io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mn.stringFilter=Uf;var As=[],xu={},HM=[],u_=0,GM=0,mf=function(e){return(xu[e]||HM).map(function(t){return t()})},Cf=function(){var e=Date.now(),t=[];e-u_>2&&(mf("matchMediaInit"),As.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=Ui.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),mf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),u_=e,mf("matchMedia"))},W_=function(){function s(t,n){this.selector=n&&wf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=GM++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){lt(n)&&(r=i,i=n,n=lt);var o=this,a=function(){var l=Qe,h=o.selector,d;return l&&l!==o&&l.data.push(o),r&&(o.selector=wf(r)),Qe=o,d=i.apply(o,arguments),lt(d)&&o._r.push(d),Qe=l,o.selector=h,o.isReverted=!1,d};return o.last=a,n===lt?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=Qe;Qe=null,n(this),Qe=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof ft&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Nt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof ft)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=As.length;o--;)As[o].id===this.id&&As.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),WM=function(){function s(t){this.contexts=[],this.scope=t,Qe&&Qe.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ki(n)||(n={matches:n});var o=new W_(0,r||this.scope),a=o.conditions={},c,l,h;Qe&&!o.selector&&(o.selector=Qe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=Ui.matchMedia(n[l]),c&&(As.indexOf(o)<0&&As.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(Cf):c.addEventListener("change",Cf)));return h&&i(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Eu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return O_(i)})},timeline:function(e){return new Nt(e)},getTweensOf:function(e,t){return it.getTweensOf(e,t)},getProperty:function(e,t,n,i){Et(e)&&(e=Jn(e)[0]);var r=Ur(e||{}).get,o=n?S_:x_;return n==="native"&&(n=""),e&&(t?o((xn[t]&&xn[t].get||r)(e,t,n,i)):function(a,c,l){return o((xn[a]&&xn[a].get||r)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=Jn(e),e.length>1){var i=e.map(function(h){return qt.quickSetter(h,t,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}e=e[0]||{};var o=xn[t],a=Ur(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(h){var d=new o;Po._pt=0,d.init(e,n?h+n:h,Po,0,[e]),d.render(1,d),Po._pt&&Wf(1,Po)}:a.set(e,c);return o?l:function(h){return l(e,c,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=qt.to(e,On((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,h){return r.resetTo(t,c,l,h)};return o.tween=r,o},isTweening:function(e){return it.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cs(e.ease,Io.ease)),s_(Io,e||{})},config:function(e){return s_(Mn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!xn[a]&&!Ln[a]&&pc(t+" effect requires "+a+" plugin.")}),hf[t]=function(a,c,l){return n(Jn(a),On(c||{},r),l)},o&&(Nt.prototype[t]=function(a,c,l){return this.add(hf[t](a,ki(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Ce[e]=Cs(t)},parseEase:function(e,t){return arguments.length?Cs(e,t):Ce},getById:function(e){return it.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nt(e),i,r;for(n.smoothChildTiming=bn(e.smoothChildTiming),it.remove(n),n._dp=0,n._time=n._tTime=it._time,i=it._first;i;)r=i._next,(t||!(!i._dur&&i instanceof ft&&i.vars.onComplete===i._targets[0]))&&Bi(n,i,i._start-i._delay),i=r;return Bi(it,n,0),n},context:function(e,t){return e?new W_(e,t):Qe},matchMedia:function(e){return new WM(e)},matchMediaRefresh:function(){return As.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Cf()},addEventListener:function(e,t){var n=xu[e]||(xu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xu[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:bM,wrapYoyo:MM,distribute:A_,random:R_,snap:D_,normalize:SM,getUnit:Bt,clamp:_M,splitColor:F_,toArray:Jn,selector:wf,mapRange:I_,pipe:yM,unitize:xM,interpolate:wM,shuffle:C_},install:g_,effects:hf,ticker:Sn,updateRoot:Nt.updateRoot,plugins:xn,globalTimeline:it,core:{PropTween:an,globals:__,Tween:ft,Timeline:Nt,Animation:_c,getCache:Ur,_removeLinkedListItem:Au,reverting:function(){return Ut},context:function(e){return e&&Qe&&(Qe.data.push(e),e._ctx=Qe),Qe},suppressOverwrites:function(e){return Af=e}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Eu[s]=ft[s]});Sn.add(Nt.updateRoot);Po=Eu.to({},{duration:0});var jM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},XM=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=jM(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},gf=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(Et(r)&&(c={},on(r,function(h){return c[h]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}XM(a,r)}}}},qt=Eu.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},gf("roundProps",Ef),gf("modifiers"),gf("snap",D_))||Eu;ft.version=Nt.version=qt.version="3.12.7";m_=1;Df()&&No();var $M=Ce.Power0,qM=Ce.Power1,YM=Ce.Power2,ZM=Ce.Power3,KM=Ce.Power4,JM=Ce.Linear,QM=Ce.Quad,ew=Ce.Cubic,tw=Ce.Quart,nw=Ce.Quint,iw=Ce.Strong,rw=Ce.Elastic,sw=Ce.Back,ow=Ce.SteppedEase,aw=Ce.Bounce,cw=Ce.Sine,lw=Ce.Expo,uw=Ce.Circ;var j_,zr,ko,Kf,Fs,hw,X_,Jf,dw=function(){return typeof window<"u"},rr={},Os=180/Math.PI,zo=Math.PI/180,Bo=Math.atan2,$_=1e8,Qf=/([A-Z])/g,fw=/(left|right|width|margin|padding|x)/i,pw=/[\s,\(]\S/,zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$f=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_w=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},tv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},vw=function(e,t,n){return e.style[t]=n},yw=function(e,t,n){return e.style.setProperty(t,n)},xw=function(e,t,n){return e._gsap[t]=n},Sw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},bw=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Mw=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},rt="transform",wn=rt+"Origin",ww=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in rr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=zi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ir(i,a)}):this.tfm[e]=o.x?o[e]:ir(i,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return zi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(rt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=rt}(r||t)&&this.props.push(e,t,r[e])},iv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ew=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Qf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Jf(),(!r||!r.isStart)&&!n[rt]&&(iv(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},rv=function(e,t){var n={target:e,props:[],revert:Ew,save:ww};return e._gsap||qt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},sv,qf=function(e,t){var n=zr.createElementNS?zr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zr.createElement(e);return n&&n.style?n:zr.createElement(e)},Vi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Qf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Vo(t)||t,1)||""},q_="O,Moz,ms,Ms,Webkit".split(","),Vo=function(e,t,n){var i=t||Fs,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(q_[o]+e in r););return o<0?null:(o===3?"ms":o>=0?q_[o]:"")+e},Yf=function(){dw()&&window.document&&(j_=window,zr=j_.document,ko=zr.documentElement,Fs=qf("div")||{style:{}},hw=qf("div"),rt=Vo(rt),wn=rt+"Origin",Fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sv=!!Vo("perspective"),Jf=qt.core.reverting,Kf=1)},Y_=function(e){var t=e.ownerSVGElement,n=qf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ko.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ko.removeChild(n),r},Z_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ov=function(e){var t,n;try{t=e.getBBox()}catch{t=Y_(e),n=1}return t&&(t.width||t.height)||n||(t=Y_(e)),t&&!t.width&&!t.x&&!t.y?{x:+Z_(e,["x","cx","x1"])||0,y:+Z_(e,["y","cy","y1"])||0,width:0,height:0}:t},av=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ov(e))},Ns=function(e,t){if(t){var n=e.style,i;t in rr&&t!==wn&&(t=rt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Qf,"-$1").toLowerCase())):n.removeAttribute(t)}},Vr=function(e,t,n,i,r,o){var a=new an(e._pt,t,n,0,1,o?nv:tv);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},K_={deg:1,rad:1,turn:1},Tw={grid:1,flex:1},Hr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Fs.style,c=fw.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),d=100,f=i==="px",u=i==="%",m,p,g,_;if(i===o||!r||K_[i]||K_[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),_=e.getCTM&&av(e),(u||o==="%")&&(rr[t]||~t.indexOf("adius")))return m=_?e.getBBox()[c?"width":"height"]:e[h],ut(u?r/m*d:r/100*m);if(a[c?"width":"height"]=d+(f?o:i),p=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===zr||!p.appendChild)&&(p=zr.body),g=p._gsap,g&&u&&g.width&&c&&g.time===Sn.time&&!g.uncache)return ut(r/g.width*d);if(u&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+i,m=e[h],b?e.style[t]=b:Ns(e,t)}else(u||o==="%")&&!Tw[Vi(p,"display")]&&(a.position=Vi(e,"position")),p===e&&(a.position="static"),p.appendChild(Fs),m=Fs[h],p.removeChild(Fs),a.position="absolute";return c&&u&&(g=Ur(p),g.time=Sn.time,g.width=p[h]),ut(f?m*r/d:m&&r?d/m*r:0)},ir=function(e,t,n,i){var r;return Kf||Yf(),t in zi&&t!=="transform"&&(t=zi[t],~t.indexOf(",")&&(t=t.split(",")[0])),rr[t]&&t!=="transform"?(r=Sc(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Lu(Vi(e,wn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Iu[t]&&Iu[t](e,t,n)||Vi(e,t)||Nf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Hr(e,t,r,n)+n:r},Cw=function(e,t,n,i){if(!n||n==="none"){var r=Vo(t,e,1),o=r&&Vi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Vi(e,"borderTopColor"))}var a=new an(this._pt,e.style,t,0,1,Gf),c=0,l=0,h,d,f,u,m,p,g,_,b,x,y,v;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(p=e.style[t],e.style[t]=i,i=Vi(e,t)||i,p?e.style[t]=p:Ns(e,t)),h=[n,i],Uf(h),n=h[0],i=h[1],f=n.match(Ds)||[],v=i.match(Ds)||[],v.length){for(;d=Ds.exec(i);)g=d[0],b=i.substring(c,d.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),g!==(p=f[l++]||"")&&(u=parseFloat(p)||0,y=p.substr((u+"").length),g.charAt(1)==="="&&(g=Rs(u,g)+y),_=parseFloat(g),x=g.substr((_+"").length),c=Ds.lastIndex-x.length,x||(x=x||Mn.units[t]||y,c===i.length&&(i+=x,a.e+=x)),y!==x&&(u=Hr(e,t,p,x)||0),a._pt={_next:a._pt,p:b||l===1?b:",",s:u,c:_-u,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?nv:tv;return Pf.test(i)&&(a.e=0),this._pt=a,a},J_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Aw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=J_[n]||n,t[1]=J_[i]||i,t.join(" ")},Dw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],rr[a]&&(c=1,a=a==="transformOrigin"?wn:rt),Ns(n,a);c&&(Ns(n,rt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Sc(n,1),o.uncache=1,iv(i)))}},Iu={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new an(e._pt,t,n,0,0,Dw);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},xc=[1,0,0,1,0,0],cv={},lv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Q_=function(e){var t=Vi(e,rt);return lv(t)?xc:t.substr(7).match(Rf).map(ut)},ep=function(e,t){var n=e._gsap||Ur(e),i=e.style,r=Q_(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?xc:r):(r===xc&&!e.offsetParent&&e!==ko&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,a=e.nextElementSibling,ko.appendChild(e)),r=Q_(e),c?i.display=c:Ns(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):ko.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Zf=function(e,t,n,i,r,o){var a=e._gsap,c=r||ep(e,!0),l=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=c[0],m=c[1],p=c[2],g=c[3],_=c[4],b=c[5],x=t.split(" "),y=parseFloat(x[0])||0,v=parseFloat(x[1])||0,C,S,E,A;n?c!==xc&&(S=u*g-m*p)&&(E=y*(g/S)+v*(-p/S)+(p*b-g*_)/S,A=y*(-m/S)+v*(u/S)-(u*b-m*_)/S,y=E,v=A):(C=ov(e),y=C.x+(~x[0].indexOf("%")?y/100*C.width:y),v=C.y+(~(x[1]||x[0]).indexOf("%")?v/100*C.height:v)),i||i!==!1&&a.smooth?(_=y-l,b=v-h,a.xOffset=d+(_*u+b*p)-_,a.yOffset=f+(_*m+b*g)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=v,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[wn]="0px 0px",o&&(Vr(o,a,"xOrigin",l,y),Vr(o,a,"yOrigin",h,v),Vr(o,a,"xOffset",d,a.xOffset),Vr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+v)},Sc=function(e,t){var n=e._gsap||new Bf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Vi(e,wn)||"0",h,d,f,u,m,p,g,_,b,x,y,v,C,S,E,A,I,O,U,F,q,$,j,V,Q,oe,w,G,ae,le,ie,Be;return h=d=f=p=g=_=b=x=y=0,u=m=1,n.svg=!!(e.getCTM&&av(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[rt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[rt]!=="none"?c[rt]:"")),i.scale=i.rotate=i.translate="none"),S=ep(e,n.svg),n.svg&&(n.uncache?(Q=e.getBBox(),l=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Zf(e,V||l,!!V||n.originIsAbsolute,n.smooth!==!1,S)),v=n.xOrigin||0,C=n.yOrigin||0,S!==xc&&(O=S[0],U=S[1],F=S[2],q=S[3],h=$=S[4],d=j=S[5],S.length===6?(u=Math.sqrt(O*O+U*U),m=Math.sqrt(q*q+F*F),p=O||U?Bo(U,O)*Os:0,b=F||q?Bo(F,q)*Os+p:0,b&&(m*=Math.abs(Math.cos(b*zo))),n.svg&&(h-=v-(v*O+C*F),d-=C-(v*U+C*q))):(Be=S[6],le=S[7],w=S[8],G=S[9],ae=S[10],ie=S[11],h=S[12],d=S[13],f=S[14],E=Bo(Be,ae),g=E*Os,E&&(A=Math.cos(-E),I=Math.sin(-E),V=$*A+w*I,Q=j*A+G*I,oe=Be*A+ae*I,w=$*-I+w*A,G=j*-I+G*A,ae=Be*-I+ae*A,ie=le*-I+ie*A,$=V,j=Q,Be=oe),E=Bo(-F,ae),_=E*Os,E&&(A=Math.cos(-E),I=Math.sin(-E),V=O*A-w*I,Q=U*A-G*I,oe=F*A-ae*I,ie=q*I+ie*A,O=V,U=Q,F=oe),E=Bo(U,O),p=E*Os,E&&(A=Math.cos(E),I=Math.sin(E),V=O*A+U*I,Q=$*A+j*I,U=U*A-O*I,j=j*A-$*I,O=V,$=Q),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,_=180-_),u=ut(Math.sqrt(O*O+U*U+F*F)),m=ut(Math.sqrt(j*j+Be*Be)),E=Bo($,j),b=Math.abs(E)>2e-4?E*Os:0,y=ie?1/(ie<0?-ie:ie):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!lv(Vi(e,rt)),V&&e.setAttribute("transform",V))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(u*=-1,b+=p<=0?180:-180,p+=p<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ut(u),n.scaleY=ut(m),n.rotation=ut(p)+a,n.rotationX=ut(g)+a,n.rotationY=ut(_)+a,n.skewX=b+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[wn]=Lu(l)),n.xOffset=n.yOffset=0,n.force3D=Mn.force3D,n.renderTransform=n.svg?Pw:sv?uv:Rw,n.uncache=0,n},Lu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xf=function(e,t,n){var i=Bt(t);return ut(parseFloat(t)+parseFloat(Hr(e,"x",n+"px",i)))+i},Rw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,uv(e,t)},Is="0deg",yc="0px",Ls=") ",uv=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,m=n.scaleX,p=n.scaleY,g=n.transformPerspective,_=n.force3D,b=n.target,x=n.zOrigin,y="",v=_==="auto"&&e&&e!==1||_===!0;if(x&&(d!==Is||h!==Is)){var C=parseFloat(h)*zo,S=Math.sin(C),E=Math.cos(C),A;C=parseFloat(d)*zo,A=Math.cos(C),o=Xf(b,o,S*A*-x),a=Xf(b,a,-Math.sin(C)*-x),c=Xf(b,c,E*A*-x+x)}g!==yc&&(y+="perspective("+g+Ls),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(v||o!==yc||a!==yc||c!==yc)&&(y+=c!==yc||v?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Ls),l!==Is&&(y+="rotate("+l+Ls),h!==Is&&(y+="rotateY("+h+Ls),d!==Is&&(y+="rotateX("+d+Ls),(f!==Is||u!==Is)&&(y+="skew("+f+", "+u+Ls),(m!==1||p!==1)&&(y+="scale("+m+", "+p+Ls),b.style[rt]=y||"translate(0, 0)"},Pw=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,m=n.xOrigin,p=n.yOrigin,g=n.xOffset,_=n.yOffset,b=n.forceCSS,x=parseFloat(o),y=parseFloat(a),v,C,S,E,A;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=zo,l*=zo,v=Math.cos(c)*d,C=Math.sin(c)*d,S=Math.sin(c-l)*-f,E=Math.cos(c-l)*f,l&&(h*=zo,A=Math.tan(l-h),A=Math.sqrt(1+A*A),S*=A,E*=A,h&&(A=Math.tan(h),A=Math.sqrt(1+A*A),v*=A,C*=A)),v=ut(v),C=ut(C),S=ut(S),E=ut(E)):(v=d,E=f,C=S=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Hr(u,"x",o,"px"),y=Hr(u,"y",a,"px")),(m||p||g||_)&&(x=ut(x+m-(m*v+p*S)+g),y=ut(y+p-(m*C+p*E)+_)),(i||r)&&(A=u.getBBox(),x=ut(x+i/100*A.width),y=ut(y+r/100*A.height)),A="matrix("+v+","+C+","+S+","+E+","+x+","+y+")",u.setAttribute("transform",A),b&&(u.style[rt]=A)},Iw=function(e,t,n,i,r){var o=360,a=Et(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?Os:1),l=c-i,h=i+l+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),d==="cw"&&l<0?l=(l+o*$_)%o-~~(l/o)*o:d==="ccw"&&l>0&&(l=(l-o*$_)%o-~~(l/o)*o)),e._pt=f=new an(e._pt,t,n,i,l,mw),f.e=h,f.u="deg",e._props.push(n),f},ev=function(e,t){for(var n in t)e[n]=t[n];return e},Lw=function(e,t,n){var i=ev({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,d,f,u,m;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[rt]=t,a=Sc(n,1),Ns(n,rt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[rt],o[rt]=t,a=Sc(n,1),o[rt]=l);for(c in rr)l=i[c],h=a[c],l!==h&&r.indexOf(c)<0&&(u=Bt(l),m=Bt(h),d=u!==m?Hr(n,c,l,m):parseFloat(l),f=parseFloat(h),e._pt=new an(e._pt,a,c,d,f-d,$f),e._pt.u=m||0,e._props.push(c));ev(a,i)};on("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Iu[e>1?"border"+s:s]=function(a,c,l,h,d){var f,u;if(arguments.length<4)return f=o.map(function(m){return ir(a,m,l)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(m,p){return u[m]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(c,u,d)}});var tp={name:"css",register:Yf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,c=n.vars.startAt,l,h,d,f,u,m,p,g,_,b,x,y,v,C,S,E;Kf||Yf(),this.styles=this.styles||rv(e),E=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(h=t[p],!(xn[p]&&zf(p,t,n,i,e,r)))){if(u=typeof h,m=Iu[p],u==="function"&&(h=h.call(n,i,e,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Uo(h)),m)m(this,e,p,h,n)&&(S=1);else if(p.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(p)+"").trim(),h+="",tr.lastIndex=0,tr.test(l)||(g=Bt(l),_=Bt(h)),_?g!==_&&(l=Hr(e,p,l,_)+_):g&&(h+=g),this.add(a,"setProperty",l,h,i,r,0,0,p),o.push(p),E.push(p,0,a[p]);else if(u!=="undefined"){if(c&&p in c?(l=typeof c[p]=="function"?c[p].call(n,i,e,r):c[p],Et(l)&&~l.indexOf("random(")&&(l=Uo(l)),Bt(l+"")||l==="auto"||(l+=Mn.units[p]||Bt(ir(e,p))||""),(l+"").charAt(1)==="="&&(l=ir(e,p))):l=ir(e,p),f=parseFloat(l),b=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),d=parseFloat(h),p in zi&&(p==="autoAlpha"&&(f===1&&ir(e,"visibility")==="hidden"&&d&&(f=0),E.push("visibility",0,a.visibility),Vr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=zi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),x=p in rr,x){if(this.styles.save(p),y||(v=e._gsap,v.renderTransform&&!t.parseTransform||Sc(e,t.parseTransform),C=t.smoothOrigin!==!1&&v.smooth,y=this._pt=new an(this._pt,a,rt,0,1,v.renderTransform,v,0,-1),y.dep=1),p==="scale")this._pt=new an(this._pt,v,"scaleY",v.scaleY,(b?Rs(v.scaleY,b+d):d)-v.scaleY||0,$f),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){E.push(wn,0,a[wn]),h=Aw(h),v.svg?Zf(e,h,0,C,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==v.zOrigin&&Vr(this,v,"zOrigin",v.zOrigin,_),Vr(this,a,p,Lu(l),Lu(h)));continue}else if(p==="svgOrigin"){Zf(e,h,1,C,0,this);continue}else if(p in cv){Iw(this,v,p,f,b?Rs(f,b+h):h);continue}else if(p==="smoothOrigin"){Vr(this,v,"smooth",v.smooth,h);continue}else if(p==="force3D"){v[p]=h;continue}else if(p==="transform"){Lw(this,h,e);continue}}else p in a||(p=Vo(p)||p);if(x||(d||d===0)&&(f||f===0)&&!pw.test(h)&&p in a)g=(l+"").substr((f+"").length),d||(d=0),_=Bt(h)||(p in Mn.units?Mn.units[p]:g),g!==_&&(f=Hr(e,p,l,_)),this._pt=new an(this._pt,x?v:a,p,f,(b?Rs(f,b+d):d)-f,!x&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?_w:$f),this._pt.u=_||0,g!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=gw);else if(p in a)Cw.call(this,e,p,l,b?b+h:h);else if(p in e)this.add(e,p,l||e[p],b?b+h:h,i,r);else if(p!=="parseTransform"){Cu(p,h);continue}x||(p in a?E.push(p,0,a[p]):typeof e[p]=="function"?E.push(p,2,e[p]()):E.push(p,1,l||e[p])),o.push(p)}}S&&jf(this)},render:function(e,t){if(t.tween._time||!Jf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ir,aliases:zi,getSetter:function(e,t,n){var i=zi[t];return i&&i.indexOf(",")<0&&(t=i),t in rr&&t!==wn&&(e._gsap.x||ir(e,"x"))?n&&X_===n?t==="scale"?Sw:xw:(X_=n||{})&&(t==="scale"?bw:Mw):e.style&&!Tu(e.style[t])?vw:~t.indexOf("-")?yw:Pu(e,t)},core:{_removeProperty:Ns,_getMatrix:ep}};qt.utils.checkPrefix=Vo;qt.core.getStyleSaver=rv;(function(s,e,t,n){var i=on(s+","+e+","+t,function(r){rr[r]=1});on(e,function(r){Mn.units[r]="deg",cv[r]=1}),zi[i[13]]=s+","+e,on(n,function(r){var o=r.split(":");zi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Mn.units[s]="px"});qt.registerPlugin(tp);var et=qt.registerPlugin(tp)||qt,eL=et.core.Tween;function hv(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Ow(s,e,t){return e&&hv(s.prototype,e),t&&hv(s,t),s}var kt,Nu,Fw,Fn,Gr,Wr,Go,fv,Us,Mc,pv,sr,di,mv,gv=function(){return kt||typeof window<"u"&&(kt=window.gsap)&&kt.registerPlugin&&kt},_v=1,Ho=[],ye=[],fi=[],wc=Date.now,np=function(e,t){return t},Nw=function(){var e=Mc.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ye),i.push.apply(i,fi),ye=n,fi=i,np=function(o,a){return t[o](a)}},ar=function(e,t){return~fi.indexOf(e)&&fi[fi.indexOf(e)+1][t]},Ec=function(e){return!!~pv.indexOf(e)},ln=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ou="scrollLeft",Fu="scrollTop",ip=function(){return sr&&sr.isPressed||ye.cache++},Uu=function(e,t){var n=function i(r){if(r||r===0){_v&&(Fn.history.scrollRestoration="manual");var o=sr&&sr.isPressed;r=i.v=Math.round(r)||(sr&&sr.iOS?1:0),e(r),i.cacheID=ye.cache,o&&np("ss",r)}else(t||ye.cache!==i.cacheID||np("ref"))&&(i.cacheID=ye.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Yt={s:Ou,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Uu(function(s){return arguments.length?Fn.scrollTo(s,vt.sc()):Fn.pageXOffset||Gr[Ou]||Wr[Ou]||Go[Ou]||0})},vt={s:Fu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Yt,sc:Uu(function(s){return arguments.length?Fn.scrollTo(Yt.sc(),s):Fn.pageYOffset||Gr[Fu]||Wr[Fu]||Go[Fu]||0})},un=function(e,t){return(t&&t._ctx&&t._ctx.selector||kt.utils.toArray)(e)[0]||(typeof e=="string"&&kt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},or=function(e,t){var n=t.s,i=t.sc;Ec(e)&&(e=Gr.scrollingElement||Wr);var r=ye.indexOf(e),o=i===vt.sc?1:2;!~r&&(r=ye.push(e)-1),ye[r+o]||ln(e,"scroll",ip);var a=ye[r+o],c=a||(ye[r+o]=Uu(ar(e,n),!0)||(Ec(e)?i:Uu(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=kt.getProperty(e,"scrollBehavior")==="smooth"),c},Bu=function(e,t,n){var i=e,r=e,o=wc(),a=o,c=t||50,l=Math.max(500,c*3),h=function(m,p){var g=wc();p||g-o>c?(r=i,i=m,a=o,o=g):n?i+=m:i=r+(m-r)/(g-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},f=function(m){var p=a,g=r,_=wc();return(m||m===0)&&m!==i&&h(m),o===a||_-a>l?0:(i+(n?g:-g))/((n?_:o)-p)*1e3};return{update:h,reset:d,getVelocity:f}},bc=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},dv=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},vv=function(){Mc=kt.core.globals().ScrollTrigger,Mc&&Mc.core&&Nw()},yv=function(e){return kt=e||gv(),!Nu&&kt&&typeof document<"u"&&document.body&&(Fn=window,Gr=document,Wr=Gr.documentElement,Go=Gr.body,pv=[Fn,Gr,Wr,Go],Fw=kt.utils.clamp,mv=kt.core.context||function(){},Us="onpointerenter"in Go?"pointer":"mouse",fv=ht.isTouch=Fn.matchMedia&&Fn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Fn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,di=ht.eventTypes=("ontouchstart"in Wr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Wr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return _v=0},500),vv(),Nu=1),Nu};Yt.op=vt;ye.cache=0;var ht=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Nu||yv(kt)||console.warn("Please gsap.registerPlugin(Observer)"),Mc||vv();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,m=n.wheelSpeed,p=n.event,g=n.onDragStart,_=n.onDragEnd,b=n.onDrag,x=n.onPress,y=n.onRelease,v=n.onRight,C=n.onLeft,S=n.onUp,E=n.onDown,A=n.onChangeX,I=n.onChangeY,O=n.onChange,U=n.onToggleX,F=n.onToggleY,q=n.onHover,$=n.onHoverEnd,j=n.onMove,V=n.ignoreCheck,Q=n.isNormalizer,oe=n.onGestureStart,w=n.onGestureEnd,G=n.onWheel,ae=n.onEnable,le=n.onDisable,ie=n.onClick,Be=n.scrollSpeed,ke=n.capture,We=n.allowClicks,we=n.lockAxis,st=n.onLockAxis;this.target=a=un(a)||Wr,this.vars=n,u&&(u=kt.utils.toArray(u)),i=i||1e-9,r=r||0,m=m||1,Be=Be||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Fn.getComputedStyle(Go).lineHeight)||22);var Oe,Ke,ot,_e,ve,he,zt,D=this,Ye=0,Tn=0,Gn=n.passive||!h&&n.passive!==!1,Je=or(a,Yt),tt=or(a,vt),ci=Je(),Wn=tt(),dt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&di[0]==="pointerdown",Mt=Ec(a),He=a.ownerDocument||Gr,nn=[0,0,0],gn=[0,0,0],Cn=0,ss=function(){return Cn=wc()},at=function(R,B){return(D.event=R)&&u&&~u.indexOf(R.target)||B&&dt&&R.pointerType!=="touch"||V&&V(R,B)},Sr=function(){D._vx.reset(),D._vy.reset(),Ke.pause(),d&&d(D)},jn=function(){var R=D.deltaX=dv(nn),B=D.deltaY=dv(gn),P=Math.abs(R)>=i,z=Math.abs(B)>=i;O&&(P||z)&&O(D,R,B,nn,gn),P&&(v&&D.deltaX>0&&v(D),C&&D.deltaX<0&&C(D),A&&A(D),U&&D.deltaX<0!=Ye<0&&U(D),Ye=D.deltaX,nn[0]=nn[1]=nn[2]=0),z&&(E&&D.deltaY>0&&E(D),S&&D.deltaY<0&&S(D),I&&I(D),F&&D.deltaY<0!=Tn<0&&F(D),Tn=D.deltaY,gn[0]=gn[1]=gn[2]=0),(_e||ot)&&(j&&j(D),ot&&(g&&ot===1&&g(D),b&&b(D),ot=0),_e=!1),he&&!(he=!1)&&st&&st(D),ve&&(G(D),ve=!1),Oe=0},li=function(R,B,P){nn[P]+=R,gn[P]+=B,D._vx.update(R),D._vy.update(B),l?Oe||(Oe=requestAnimationFrame(jn)):jn()},Xn=function(R,B){we&&!zt&&(D.axis=zt=Math.abs(R)>Math.abs(B)?"x":"y",he=!0),zt!=="y"&&(nn[2]+=R,D._vx.update(R,!0)),zt!=="x"&&(gn[2]+=B,D._vy.update(B,!0)),l?Oe||(Oe=requestAnimationFrame(jn)):jn()},Mi=function(R){if(!at(R,1)){R=bc(R,h);var B=R.clientX,P=R.clientY,z=B-D.x,N=P-D.y,W=D.isDragging;D.x=B,D.y=P,(W||(z||N)&&(Math.abs(D.startX-B)>=r||Math.abs(D.startY-P)>=r))&&(ot=W?2:1,W||(D.isDragging=!0),Xn(z,N))}},An=D.onPress=function(T){at(T,1)||T&&T.button||(D.axis=zt=null,Ke.pause(),D.isPressed=!0,T=bc(T),Ye=Tn=0,D.startX=D.x=T.clientX,D.startY=D.y=T.clientY,D._vx.reset(),D._vy.reset(),ln(Q?a:He,di[1],Mi,Gn,!0),D.deltaX=D.deltaY=0,x&&x(D))},ue=D.onRelease=function(T){if(!at(T,1)){cn(Q?a:He,di[1],Mi,!0);var R=!isNaN(D.y-D.startY),B=D.isDragging,P=B&&(Math.abs(D.x-D.startX)>3||Math.abs(D.y-D.startY)>3),z=bc(T);!P&&R&&(D._vx.reset(),D._vy.reset(),h&&We&&kt.delayedCall(.08,function(){if(wc()-Cn>300&&!T.defaultPrevented){if(T.target.click)T.target.click();else if(He.createEvent){var N=He.createEvent("MouseEvents");N.initMouseEvent("click",!0,!0,Fn,1,z.screenX,z.screenY,z.clientX,z.clientY,!1,!1,!1,!1,0,null),T.target.dispatchEvent(N)}}})),D.isDragging=D.isGesturing=D.isPressed=!1,d&&B&&!Q&&Ke.restart(!0),ot&&jn(),_&&B&&_(D),y&&y(D,P)}},Dn=function(R){return R.touches&&R.touches.length>1&&(D.isGesturing=!0)&&oe(R,D.isDragging)},nt=function(){return(D.isGesturing=!1)||w(D)},Vt=function(R){if(!at(R)){var B=Je(),P=tt();li((B-ci)*Be,(P-Wn)*Be,1),ci=B,Wn=P,d&&Ke.restart(!0)}},_n=function(R){if(!at(R)){R=bc(R,h),G&&(ve=!0);var B=(R.deltaMode===1?c:R.deltaMode===2?Fn.innerHeight:1)*m;li(R.deltaX*B,R.deltaY*B,0),d&&!Q&&Ke.restart(!0)}},wi=function(R){if(!at(R)){var B=R.clientX,P=R.clientY,z=B-D.x,N=P-D.y;D.x=B,D.y=P,_e=!0,d&&Ke.restart(!0),(z||N)&&Xn(z,N)}},K=function(R){D.event=R,q(D)},M=function(R){D.event=R,$(D)},k=function(R){return at(R)||bc(R,h)&&ie(D)};Ke=D._dc=kt.delayedCall(f||.25,Sr).pause(),D.deltaX=D.deltaY=0,D._vx=Bu(0,50,!0),D._vy=Bu(0,50,!0),D.scrollX=Je,D.scrollY=tt,D.isDragging=D.isGesturing=D.isPressed=!1,mv(this),D.enable=function(T){return D.isEnabled||(ln(Mt?He:a,"scroll",ip),o.indexOf("scroll")>=0&&ln(Mt?He:a,"scroll",Vt,Gn,ke),o.indexOf("wheel")>=0&&ln(a,"wheel",_n,Gn,ke),(o.indexOf("touch")>=0&&fv||o.indexOf("pointer")>=0)&&(ln(a,di[0],An,Gn,ke),ln(He,di[2],ue),ln(He,di[3],ue),We&&ln(a,"click",ss,!0,!0),ie&&ln(a,"click",k),oe&&ln(He,"gesturestart",Dn),w&&ln(He,"gestureend",nt),q&&ln(a,Us+"enter",K),$&&ln(a,Us+"leave",M),j&&ln(a,Us+"move",wi)),D.isEnabled=!0,D.isDragging=D.isGesturing=D.isPressed=_e=ot=!1,D._vx.reset(),D._vy.reset(),ci=Je(),Wn=tt(),T&&T.type&&An(T),ae&&ae(D)),D},D.disable=function(){D.isEnabled&&(Ho.filter(function(T){return T!==D&&Ec(T.target)}).length||cn(Mt?He:a,"scroll",ip),D.isPressed&&(D._vx.reset(),D._vy.reset(),cn(Q?a:He,di[1],Mi,!0)),cn(Mt?He:a,"scroll",Vt,ke),cn(a,"wheel",_n,ke),cn(a,di[0],An,ke),cn(He,di[2],ue),cn(He,di[3],ue),cn(a,"click",ss,!0),cn(a,"click",k),cn(He,"gesturestart",Dn),cn(He,"gestureend",nt),cn(a,Us+"enter",K),cn(a,Us+"leave",M),cn(a,Us+"move",wi),D.isEnabled=D.isPressed=D.isDragging=!1,le&&le(D))},D.kill=D.revert=function(){D.disable();var T=Ho.indexOf(D);T>=0&&Ho.splice(T,1),sr===D&&(sr=0)},Ho.push(D),Q&&Ec(a)&&(sr=D),D.enable(p)},Ow(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();ht.version="3.12.7";ht.create=function(s){return new ht(s)};ht.register=yv;ht.getAll=function(){return Ho.slice()};ht.getById=function(s){return Ho.filter(function(e){return e.vars.id===s})[0]};gv()&&kt.registerPlugin(ht);var Y,Xo,Se,qe,Bn,Ve,vp,eh,Bc,Ic,Cc,ku,Zt,rh,hp,dn,xv,Sv,$o,Uv,rp,Bv,hn,dp,kv,zv,jr,fp,yp,qo,xp,th,pp,sp,zu=1,Kt=Date.now,op=Kt(),ti=0,Ac=0,bv=function(e,t,n){var i=Un(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Mv=function(e,t){return t&&(!Un(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Uw=function s(){return Ac&&requestAnimationFrame(s)},wv=function(){return rh=1},Ev=function(){return rh=0},Hi=function(e){return e},Dc=function(e){return Math.round(e*1e5)/1e5||0},Vv=function(){return typeof window<"u"},Hv=function(){return Y||Vv()&&(Y=window.gsap)&&Y.registerPlugin&&Y},Gs=function(e){return!!~vp.indexOf(e)},Gv=function(e){return(e==="Height"?xp:Se["inner"+e])||Bn["client"+e]||Ve["client"+e]},Wv=function(e){return ar(e,"getBoundingClientRect")||(Gs(e)?function(){return Qu.width=Se.innerWidth,Qu.height=xp,Qu}:function(){return cr(e)})},Bw=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=ar(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Gv(r):e["client"+r])||0}},kw=function(e,t){return!t||~fi.indexOf(e)?Wv(e):function(){return Qu}},Gi=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=ar(e,n))?o()-Wv(e)()[r]:Gs(e)?(Bn[n]||Ve[n])-Gv(i):e[n]-e["offset"+i])},Vu=function(e,t){for(var n=0;n<$o.length;n+=3)(!t||~t.indexOf($o[n+1]))&&e($o[n],$o[n+1],$o[n+2])},Un=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},Rc=function(e){return typeof e=="number"},Bs=function(e){return typeof e=="object"},Tc=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ap=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Wo=Math.abs,jv="left",Xv="top",Sp="right",bp="bottom",zs="width",Vs="height",Lc="Right",Oc="Left",Fc="Top",Nc="Bottom",yt="padding",Qn="margin",Zo="Width",Mp="Height",Tt="px",ei=function(e){return Se.getComputedStyle(e)},zw=function(e){var t=ei(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Tv=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cr=function(e,t){var n=t&&ei(e)[hp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Y.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},nh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},$v=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Vw=function(e){return function(t){return Y.utils.snap($v(e),t)}},wp=function(e){var t=Y.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},Hw=function(e){return function(t,n){return wp($v(e))(t,n.direction)}},Hu=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Pt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Rt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Gu=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Cv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Wu={toggleActions:"play",anticipatePin:0},ih={top:0,left:0,center:.5,bottom:1,right:1},Yu=function(e,t){if(Un(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ih?ih[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ju=function(e,t,n,i,r,o,a,c){var l=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,m=qe.createElement("div"),p=Gs(n)||ar(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,_=p?Ve:n,b=e.indexOf("start")!==-1,x=b?l:h,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||c)&&p?"fixed;":"absolute;"),(g||c||!p)&&(y+=(i===vt?Sp:bp)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=b,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(m,_.children[0]):_.appendChild(m),m._offset=m["offset"+i.op.d2],Zu(m,0,i,b),m},Zu=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Zo]=1,r["border"+a+Zo]=0,r[n.p]=t+"px",Y.set(e,r)},xe=[],mp={},kc,Av=function(){return Kt()-ti>34&&(kc||(kc=requestAnimationFrame(lr)))},jo=function(){(!hn||!hn.isPressed||hn.startX>Ve.clientWidth)&&(ye.cache++,hn?kc||(kc=requestAnimationFrame(lr)):lr(),ti||js("scrollStart"),ti=Kt())},cp=function(){zv=Se.innerWidth,kv=Se.innerHeight},Pc=function(e){ye.cache++,(e===!0||!Zt&&!Bv&&!qe.fullscreenElement&&!qe.webkitFullscreenElement&&(!dp||zv!==Se.innerWidth||Math.abs(Se.innerHeight-kv)>Se.innerHeight*.25))&&eh.restart(!0)},Ws={},Gw=[],qv=function s(){return Rt(ge,"scrollEnd",s)||ks(!0)},js=function(e){return Ws[e]&&Ws[e].map(function(t){return t()})||Gw},Nn=[],Yv=function(e){for(var t=0;t<Nn.length;t+=5)(!e||Nn[t+4]&&Nn[t+4].query===e)&&(Nn[t].style.cssText=Nn[t+1],Nn[t].getBBox&&Nn[t].setAttribute("transform",Nn[t+2]||""),Nn[t+3].uncache=1)},Ep=function(e,t){var n;for(dn=0;dn<xe.length;dn++)n=xe[dn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));th=!0,t&&Yv(t),t||js("revert")},Zv=function(e,t){ye.cache++,(t||!fn)&&ye.forEach(function(n){return Jt(n)&&n.cacheID++&&(n.rec=0)}),Un(e)&&(Se.history.scrollRestoration=yp=e)},fn,Hs=0,Dv,Ww=function(){if(Dv!==Hs){var e=Dv=Hs;requestAnimationFrame(function(){return e===Hs&&ks(!0)})}},Kv=function(){Ve.appendChild(qo),xp=!hn&&qo.offsetHeight||Se.innerHeight,Ve.removeChild(qo)},Rv=function(e){return Bc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ks=function(e,t){if(Bn=qe.documentElement,Ve=qe.body,vp=[Se,qe,Bn,Ve],ti&&!e&&!th){Pt(ge,"scrollEnd",qv);return}Kv(),fn=ge.isRefreshing=!0,ye.forEach(function(i){return Jt(i)&&++i.cacheID&&(i.rec=i())});var n=js("refreshInit");Uv&&ge.sort(),t||Ep(),ye.forEach(function(i){Jt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),xe.slice(0).forEach(function(i){return i.refresh()}),th=!1,xe.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),pp=1,Rv(!0),xe.forEach(function(i){var r=Gi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Rv(!1),pp=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ye.forEach(function(i){Jt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Zv(yp,1),eh.pause(),Hs++,fn=2,lr(2),xe.forEach(function(i){return Jt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),fn=ge.isRefreshing=!1,js("refresh")},gp=0,Ku=1,Uc,lr=function(e){if(e===2||!fn&&!th){ge.isUpdating=!0,Uc&&Uc.update(0);var t=xe.length,n=Kt(),i=n-op>=50,r=t&&xe[0].scroll();if(Ku=gp>r?-1:1,fn||(gp=r),i&&(ti&&!rh&&n-ti>200&&(ti=0,js("scrollEnd")),Cc=op,op=n),Ku<0){for(dn=t;dn-- >0;)xe[dn]&&xe[dn].update(0,i);Ku=1}else for(dn=0;dn<t;dn++)xe[dn]&&xe[dn].update(0,i);ge.isUpdating=!1}kc=0},_p=[jv,Xv,bp,Sp,Qn+Nc,Qn+Lc,Qn+Fc,Qn+Oc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ju=_p.concat([zs,Vs,"boxSizing","max"+Zo,"max"+Mp,"position",Qn,yt,yt+Fc,yt+Lc,yt+Nc,yt+Oc]),jw=function(e,t,n){Yo(n);var i=e._gsap;if(i.spacerIsNative)Yo(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},lp=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=_p.length,o=t.style,a=e.style,c;r--;)c=_p[r],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[bp]=a[Sp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[zs]=nh(e,Yt)+Tt,o[Vs]=nh(e,vt)+Tt,o[yt]=a[Qn]=a[Xv]=a[jv]="0",Yo(i),a[zs]=a["max"+Zo]=n[zs],a[Vs]=a["max"+Mp]=n[Vs],a[yt]=n[yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Xw=/([A-Z])/g,Yo=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Y.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(Xw,"-$1").toLowerCase())}},Xu=function(e){for(var t=Ju.length,n=e.style,i=[],r=0;r<t;r++)i.push(Ju[r],n[Ju[r]]);return i.t=e,i},$w=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Qu={left:0,top:0},Pv=function(e,t,n,i,r,o,a,c,l,h,d,f,u,m){Jt(e)&&(e=e(c)),Un(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Yu("0"+e.substr(3),n):0));var p=u?u.time():0,g,_,b;if(u&&u.seek(0),isNaN(e)||(e=+e),Rc(e))u&&(e=Y.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,e)),a&&Zu(a,n,i,!0);else{Jt(t)&&(t=t(c));var x=(e||"0").split(" "),y,v,C,S;b=un(t,c)||Ve,y=cr(b)||{},(!y||!y.left&&!y.top)&&ei(b).display==="none"&&(S=b.style.display,b.style.display="block",y=cr(b),S?b.style.display=S:b.style.removeProperty("display")),v=Yu(x[0],y[i.d]),C=Yu(x[1]||"0",n),e=y[i.p]-l[i.p]-h+v+r-C,a&&Zu(a,C,i,n-C<20||a._isStart&&C>20),n-=n-C}if(m&&(c[m]=e||-.001,e<0&&(e=0)),o){var E=e+n,A=o._isStart;g="scroll"+i.d2,Zu(o,E,i,A&&E>20||!A&&(d?Math.max(Ve[g],Bn[g]):o.parentNode[g])<=E+1),d&&(l=cr(a),d&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+Tt))}return u&&b&&(g=cr(b),u.seek(f),_=cr(b),u._caScrollDist=g[i.p]-_[i.p],e=e/u._caScrollDist*f),u&&u.seek(p),u?e:Math.round(e)},qw=/(webkit|moz|length|cssText|inset)/i,Iv=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===Ve){e._stOrig=r.cssText,a=ei(e);for(o in a)!+o&&!qw.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Y.core.getCache(e).uncache=1,t.appendChild(e)}},Jv=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},$u=function(e,t,n){var i={};i[t.p]="+="+n,Y.set(e,i)},Lv=function(e,t){var n=or(e,t),i="_scroll"+t.p2,r=function o(a,c,l,h,d){var f=o.tween,u=c.onComplete,m={};l=l||n();var p=Jv(n,l,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-l,f&&f.kill(),c[i]=a,c.inherit=!1,c.modifiers=m,m[i]=function(){return p(l+h*f.ratio+d*f.ratio*f.ratio)},c.onUpdate=function(){ye.cache++,o.tween&&lr()},c.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=Y.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Pt(e,"wheel",n.wheelHandler),ge.isTouch&&Pt(e,"touchmove",n.wheelHandler),r},ge=function(){function s(t,n){Xo||s.register(Y)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),fp(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ac){this.update=this.refresh=this.kill=Hi;return}n=Tv(Un(n)||Rc(n)||n.nodeType?{trigger:n}:n,Wu);var r=n,o=r.onUpdate,a=r.toggleClass,c=r.id,l=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,m=r.pinSpacing,p=r.invalidateOnRefresh,g=r.anticipatePin,_=r.onScrubComplete,b=r.onSnapComplete,x=r.once,y=r.snap,v=r.pinReparent,C=r.pinSpacer,S=r.containerAnimation,E=r.fastScrollEnd,A=r.preventOverlaps,I=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Yt:vt,O=!d&&d!==0,U=un(n.scroller||Se),F=Y.core.getCache(U),q=Gs(U),$=("pinType"in n?n.pinType:ar(U,"pinType")||q&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=O&&n.toggleActions.split(" "),Q="markers"in n?n.markers:Wu.markers,oe=q?0:parseFloat(ei(U)["border"+I.p2+Zo])||0,w=this,G=n.onRefreshInit&&function(){return n.onRefreshInit(w)},ae=Bw(U,q,I),le=kw(U,q),ie=0,Be=0,ke=0,We=or(U,I),we,st,Oe,Ke,ot,_e,ve,he,zt,D,Ye,Tn,Gn,Je,tt,ci,Wn,dt,Mt,He,nn,gn,Cn,ss,at,Sr,jn,li,Xn,Mi,An,ue,Dn,nt,Vt,_n,wi,K,M;if(w._startClamp=w._endClamp=!1,w._dir=I,g*=45,w.scroller=U,w.scroll=S?S.time.bind(S):We,Ke=We(),w.vars=n,i=i||n.animation,"refreshPriority"in n&&(Uv=1,n.refreshPriority===-9999&&(Uc=w)),F.tweenScroll=F.tweenScroll||{top:Lv(U,vt),left:Lv(U,Yt)},w.tweenTo=we=F.tweenScroll[I.p],w.scrubDuration=function(P){Dn=Rc(P)&&P,Dn?ue?ue.duration(P):ue=Y.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Dn,paused:!0,onComplete:function(){return _&&_(w)}}):(ue&&ue.progress(1).kill(),ue=0)},i&&(i.vars.lazy=!1,i._initted&&!w.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),w.animation=i.pause(),i.scrollTrigger=w,w.scrubDuration(d),Mi=0,c||(c=i.vars.id)),y&&((!Bs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Ve.style&&Y.set(q?[Ve,Bn]:U,{scrollBehavior:"auto"}),ye.forEach(function(P){return Jt(P)&&P.target===(q?qe.scrollingElement||Bn:U)&&(P.smooth=!1)}),Oe=Jt(y.snapTo)?y.snapTo:y.snapTo==="labels"?Vw(i):y.snapTo==="labelsDirectional"?Hw(i):y.directional!==!1?function(P,z){return wp(y.snapTo)(P,Kt()-Be<500?0:z.direction)}:Y.utils.snap(y.snapTo),nt=y.duration||{min:.1,max:2},nt=Bs(nt)?Ic(nt.min,nt.max):Ic(nt,nt),Vt=Y.delayedCall(y.delay||Dn/2||.1,function(){var P=We(),z=Kt()-Be<500,N=we.tween;if((z||Math.abs(w.getVelocity())<10)&&!N&&!rh&&ie!==P){var W=(P-_e)/Je,ee=i&&!O?i.totalProgress():W,Z=z?0:(ee-An)/(Kt()-Cc)*1e3||0,fe=Y.utils.clamp(-W,1-W,Wo(Z/2)*Z/.185),Pe=W+(y.inertia===!1?0:fe),Ie,Me,Ee=y,Ge=Ee.onStart,de=Ee.onInterrupt,Lt=Ee.onComplete;if(Ie=Oe(Pe,w),Rc(Ie)||(Ie=Pe),Me=Math.max(0,Math.round(_e+Ie*Je)),P<=ve&&P>=_e&&Me!==P){if(N&&!N._initted&&N.data<=Wo(Me-P))return;y.inertia===!1&&(fe=Ie-W),we(Me,{duration:nt(Wo(Math.max(Wo(Pe-ee),Wo(Ie-ee))*.185/Z/.05||0)),ease:y.ease||"power3",data:Wo(Me-P),onInterrupt:function(){return Vt.restart(!0)&&de&&de(w)},onComplete:function(){w.update(),ie=We(),i&&!O&&(ue?ue.resetTo("totalProgress",Ie,i._tTime/i._tDur):i.progress(Ie)),Mi=An=i&&!O?i.totalProgress():w.progress,b&&b(w),Lt&&Lt(w)}},P,fe*Je,Me-P-fe*Je),Ge&&Ge(w,we.tween)}}else w.isActive&&ie!==P&&Vt.restart(!0)}).pause()),c&&(mp[c]=w),f=w.trigger=un(f||u!==!0&&u),M=f&&f._gsap&&f._gsap.stRevert,M&&(M=M(w)),u=u===!0?f:un(u),Un(a)&&(a={targets:f,className:a}),u&&(m===!1||m===Qn||(m=!m&&u.parentNode&&u.parentNode.style&&ei(u.parentNode).display==="flex"?!1:yt),w.pin=u,st=Y.core.getCache(u),st.spacer?tt=st.pinState:(C&&(C=un(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),st.spacerIsNative=!!C,C&&(st.spacerState=Xu(C))),st.spacer=dt=C||qe.createElement("div"),dt.classList.add("pin-spacer"),c&&dt.classList.add("pin-spacer-"+c),st.pinState=tt=Xu(u)),n.force3D!==!1&&Y.set(u,{force3D:!0}),w.spacer=dt=st.spacer,Xn=ei(u),ss=Xn[m+I.os2],He=Y.getProperty(u),nn=Y.quickSetter(u,I.a,Tt),lp(u,dt,Xn),Wn=Xu(u)),Q){Tn=Bs(Q)?Tv(Q,Cv):Cv,D=ju("scroller-start",c,U,I,Tn,0),Ye=ju("scroller-end",c,U,I,Tn,0,D),Mt=D["offset"+I.op.d2];var k=un(ar(U,"content")||U);he=this.markerStart=ju("start",c,k,I,Tn,Mt,0,S),zt=this.markerEnd=ju("end",c,k,I,Tn,Mt,0,S),S&&(K=Y.quickSetter([he,zt],I.a,Tt)),!$&&!(fi.length&&ar(U,"fixedMarkers")===!0)&&(zw(q?Ve:U),Y.set([D,Ye],{force3D:!0}),Sr=Y.quickSetter(D,I.a,Tt),li=Y.quickSetter(Ye,I.a,Tt))}if(S){var T=S.vars.onUpdate,R=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){w.update(0,0,1),T&&T.apply(S,R||[])})}if(w.previous=function(){return xe[xe.indexOf(w)-1]},w.next=function(){return xe[xe.indexOf(w)+1]},w.revert=function(P,z){if(!z)return w.kill(!0);var N=P!==!1||!w.enabled,W=Zt;N!==w.isReverted&&(N&&(_n=Math.max(We(),w.scroll.rec||0),ke=w.progress,wi=i&&i.progress()),he&&[he,zt,D,Ye].forEach(function(ee){return ee.style.display=N?"none":"block"}),N&&(Zt=w,w.update(N)),u&&(!v||!w.isActive)&&(N?jw(u,dt,tt):lp(u,dt,ei(u),at)),N||w.update(N),Zt=W,w.isReverted=N)},w.refresh=function(P,z,N,W){if(!((Zt||!w.enabled)&&!z)){if(u&&P&&ti){Pt(s,"scrollEnd",qv);return}!fn&&G&&G(w),Zt=w,we.tween&&!N&&(we.tween.kill(),we.tween=0),ue&&ue.pause(),p&&i&&i.revert({kill:!1}).invalidate(),w.isReverted||w.revert(!0,!0),w._subPinOffset=!1;var ee=ae(),Z=le(),fe=S?S.duration():Gi(U,I),Pe=Je<=.01,Ie=0,Me=W||0,Ee=Bs(N)?N.end:n.end,Ge=n.endTrigger||f,de=Bs(N)?N.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),Lt=w.pinnedContainer=n.pinnedContainer&&un(n.pinnedContainer,w),ct=f&&Math.max(0,xe.indexOf(w))||0,Ot=ct,Ft,Ht,os,pl,Gt,wt,Ei,Zh,Jm,Ma,Ti,wa,ml;for(Q&&Bs(N)&&(wa=Y.getProperty(D,I.p),ml=Y.getProperty(Ye,I.p));Ot-- >0;)wt=xe[Ot],wt.end||wt.refresh(0,1)||(Zt=w),Ei=wt.pin,Ei&&(Ei===f||Ei===u||Ei===Lt)&&!wt.isReverted&&(Ma||(Ma=[]),Ma.unshift(wt),wt.revert(!0,!0)),wt!==xe[Ot]&&(ct--,Ot--);for(Jt(de)&&(de=de(w)),de=bv(de,"start",w),_e=Pv(de,f,ee,I,We(),he,D,w,Z,oe,$,fe,S,w._startClamp&&"_startClamp")||(u?-.001:0),Jt(Ee)&&(Ee=Ee(w)),Un(Ee)&&!Ee.indexOf("+=")&&(~Ee.indexOf(" ")?Ee=(Un(de)?de.split(" ")[0]:"")+Ee:(Ie=Yu(Ee.substr(2),ee),Ee=Un(de)?de:(S?Y.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,_e):_e)+Ie,Ge=f)),Ee=bv(Ee,"end",w),ve=Math.max(_e,Pv(Ee||(Ge?"100% 0":fe),Ge,ee,I,We()+Ie,zt,Ye,w,Z,oe,$,fe,S,w._endClamp&&"_endClamp"))||-.001,Ie=0,Ot=ct;Ot--;)wt=xe[Ot],Ei=wt.pin,Ei&&wt.start-wt._pinPush<=_e&&!S&&wt.end>0&&(Ft=wt.end-(w._startClamp?Math.max(0,wt.start):wt.start),(Ei===f&&wt.start-wt._pinPush<_e||Ei===Lt)&&isNaN(de)&&(Ie+=Ft*(1-wt.progress)),Ei===u&&(Me+=Ft));if(_e+=Ie,ve+=Ie,w._startClamp&&(w._startClamp+=Ie),w._endClamp&&!fn&&(w._endClamp=ve||-.001,ve=Math.min(ve,Gi(U,I))),Je=ve-_e||(_e-=.01)&&.001,Pe&&(ke=Y.utils.clamp(0,1,Y.utils.normalize(_e,ve,_n))),w._pinPush=Me,he&&Ie&&(Ft={},Ft[I.a]="+="+Ie,Lt&&(Ft[I.p]="-="+We()),Y.set([he,zt],Ft)),u&&!(pp&&w.end>=Gi(U,I)))Ft=ei(u),pl=I===vt,os=We(),gn=parseFloat(He(I.a))+Me,!fe&&ve>1&&(Ti=(q?qe.scrollingElement||Bn:U).style,Ti={style:Ti,value:Ti["overflow"+I.a.toUpperCase()]},q&&ei(Ve)["overflow"+I.a.toUpperCase()]!=="scroll"&&(Ti.style["overflow"+I.a.toUpperCase()]="scroll")),lp(u,dt,Ft),Wn=Xu(u),Ht=cr(u,!0),Zh=$&&or(U,pl?Yt:vt)(),m?(at=[m+I.os2,Je+Me+Tt],at.t=dt,Ot=m===yt?nh(u,I)+Je+Me:0,Ot&&(at.push(I.d,Ot+Tt),dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Ot+Tt)),Yo(at),Lt&&xe.forEach(function(Ea){Ea.pin===Lt&&Ea.vars.pinSpacing!==!1&&(Ea._subPinOffset=!0)}),$&&We(_n)):(Ot=nh(u,I),Ot&&dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Ot+Tt)),$&&(Gt={top:Ht.top+(pl?os-_e:Zh)+Tt,left:Ht.left+(pl?Zh:os-_e)+Tt,boxSizing:"border-box",position:"fixed"},Gt[zs]=Gt["max"+Zo]=Math.ceil(Ht.width)+Tt,Gt[Vs]=Gt["max"+Mp]=Math.ceil(Ht.height)+Tt,Gt[Qn]=Gt[Qn+Fc]=Gt[Qn+Lc]=Gt[Qn+Nc]=Gt[Qn+Oc]="0",Gt[yt]=Ft[yt],Gt[yt+Fc]=Ft[yt+Fc],Gt[yt+Lc]=Ft[yt+Lc],Gt[yt+Nc]=Ft[yt+Nc],Gt[yt+Oc]=Ft[yt+Oc],ci=$w(tt,Gt,v),fn&&We(0)),i?(Jm=i._initted,rp(1),i.render(i.duration(),!0,!0),Cn=He(I.a)-gn+Je+Me,jn=Math.abs(Je-Cn)>1,$&&jn&&ci.splice(ci.length-2,2),i.render(0,!0,!0),Jm||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),rp(0)):Cn=Je,Ti&&(Ti.value?Ti.style["overflow"+I.a.toUpperCase()]=Ti.value:Ti.style.removeProperty("overflow-"+I.a));else if(f&&We()&&!S)for(Ht=f.parentNode;Ht&&Ht!==Ve;)Ht._pinOffset&&(_e-=Ht._pinOffset,ve-=Ht._pinOffset),Ht=Ht.parentNode;Ma&&Ma.forEach(function(Ea){return Ea.revert(!1,!0)}),w.start=_e,w.end=ve,Ke=ot=fn?_n:We(),!S&&!fn&&(Ke<_n&&We(_n),w.scroll.rec=0),w.revert(!1,!0),Be=Kt(),Vt&&(ie=-1,Vt.restart(!0)),Zt=0,i&&O&&(i._initted||wi)&&i.progress()!==wi&&i.progress(wi||0,!0).render(i.time(),!0,!0),(Pe||ke!==w.progress||S||p||i&&!i._initted)&&(i&&!O&&i.totalProgress(S&&_e<-.001&&!ke?Y.utils.normalize(_e,ve,0):ke,!0),w.progress=Pe||(Ke-_e)/Je===ke?0:ke),u&&m&&(dt._pinOffset=Math.round(w.progress*Cn)),ue&&ue.invalidate(),isNaN(wa)||(wa-=Y.getProperty(D,I.p),ml-=Y.getProperty(Ye,I.p),$u(D,I,wa),$u(he,I,wa-(W||0)),$u(Ye,I,ml),$u(zt,I,ml-(W||0))),Pe&&!fn&&w.update(),h&&!fn&&!Gn&&(Gn=!0,h(w),Gn=!1)}},w.getVelocity=function(){return(We()-ot)/(Kt()-Cc)*1e3||0},w.endAnimation=function(){Tc(w.callbackAnimation),i&&(ue?ue.progress(1):i.paused()?O||Tc(i,w.direction<0,1):Tc(i,i.reversed()))},w.labelToScroll=function(P){return i&&i.labels&&(_e||w.refresh()||_e)+i.labels[P]/i.duration()*Je||0},w.getTrailing=function(P){var z=xe.indexOf(w),N=w.direction>0?xe.slice(0,z).reverse():xe.slice(z+1);return(Un(P)?N.filter(function(W){return W.vars.preventOverlaps===P}):N).filter(function(W){return w.direction>0?W.end<=_e:W.start>=ve})},w.update=function(P,z,N){if(!(S&&!N&&!P)){var W=fn===!0?_n:w.scroll(),ee=P?0:(W-_e)/Je,Z=ee<0?0:ee>1?1:ee||0,fe=w.progress,Pe,Ie,Me,Ee,Ge,de,Lt,ct;if(z&&(ot=Ke,Ke=S?We():W,y&&(An=Mi,Mi=i&&!O?i.totalProgress():Z)),g&&u&&!Zt&&!zu&&ti&&(!Z&&_e<W+(W-ot)/(Kt()-Cc)*g?Z=1e-4:Z===1&&ve>W+(W-ot)/(Kt()-Cc)*g&&(Z=.9999)),Z!==fe&&w.enabled){if(Pe=w.isActive=!!Z&&Z<1,Ie=!!fe&&fe<1,de=Pe!==Ie,Ge=de||!!Z!=!!fe,w.direction=Z>fe?1:-1,w.progress=Z,Ge&&!Zt&&(Me=Z&&!fe?0:Z===1?1:fe===1?2:3,O&&(Ee=!de&&V[Me+1]!=="none"&&V[Me+1]||V[Me],ct=i&&(Ee==="complete"||Ee==="reset"||Ee in i))),A&&(de||ct)&&(ct||d||!i)&&(Jt(A)?A(w):w.getTrailing(A).forEach(function(os){return os.endAnimation()})),O||(ue&&!Zt&&!zu?(ue._dp._time-ue._start!==ue._time&&ue.render(ue._dp._time-ue._start),ue.resetTo?ue.resetTo("totalProgress",Z,i._tTime/i._tDur):(ue.vars.totalProgress=Z,ue.invalidate().restart())):i&&i.totalProgress(Z,!!(Zt&&(Be||P)))),u){if(P&&m&&(dt.style[m+I.os2]=ss),!$)nn(Dc(gn+Cn*Z));else if(Ge){if(Lt=!P&&Z>fe&&ve+1>W&&W+1>=Gi(U,I),v)if(!P&&(Pe||Lt)){var Ot=cr(u,!0),Ft=W-_e;Iv(u,Ve,Ot.top+(I===vt?Ft:0)+Tt,Ot.left+(I===vt?0:Ft)+Tt)}else Iv(u,dt);Yo(Pe||Lt?ci:Wn),jn&&Z<1&&Pe||nn(gn+(Z===1&&!Lt?Cn:0))}}y&&!we.tween&&!Zt&&!zu&&Vt.restart(!0),a&&(de||x&&Z&&(Z<1||!sp))&&Bc(a.targets).forEach(function(os){return os.classList[Pe||x?"add":"remove"](a.className)}),o&&!O&&!P&&o(w),Ge&&!Zt?(O&&(ct&&(Ee==="complete"?i.pause().totalProgress(1):Ee==="reset"?i.restart(!0).pause():Ee==="restart"?i.restart(!0):i[Ee]()),o&&o(w)),(de||!sp)&&(l&&de&&ap(w,l),j[Me]&&ap(w,j[Me]),x&&(Z===1?w.kill(!1,1):j[Me]=0),de||(Me=Z===1?1:3,j[Me]&&ap(w,j[Me]))),E&&!Pe&&Math.abs(w.getVelocity())>(Rc(E)?E:2500)&&(Tc(w.callbackAnimation),ue?ue.progress(1):Tc(i,Ee==="reverse"?1:!Z,1))):O&&o&&!Zt&&o(w)}if(li){var Ht=S?W/S.duration()*(S._caScrollDist||0):W;Sr(Ht+(D._isFlipped?1:0)),li(Ht)}K&&K(-W/S.duration()*(S._caScrollDist||0))}},w.enable=function(P,z){w.enabled||(w.enabled=!0,Pt(U,"resize",Pc),q||Pt(U,"scroll",jo),G&&Pt(s,"refreshInit",G),P!==!1&&(w.progress=ke=0,Ke=ot=ie=We()),z!==!1&&w.refresh())},w.getTween=function(P){return P&&we?we.tween:ue},w.setPositions=function(P,z,N,W){if(S){var ee=S.scrollTrigger,Z=S.duration(),fe=ee.end-ee.start;P=ee.start+fe*P/Z,z=ee.start+fe*z/Z}w.refresh(!1,!1,{start:Mv(P,N&&!!w._startClamp),end:Mv(z,N&&!!w._endClamp)},W),w.update()},w.adjustPinSpacing=function(P){if(at&&P){var z=at.indexOf(I.d)+1;at[z]=parseFloat(at[z])+P+Tt,at[1]=parseFloat(at[1])+P+Tt,Yo(at)}},w.disable=function(P,z){if(w.enabled&&(P!==!1&&w.revert(!0,!0),w.enabled=w.isActive=!1,z||ue&&ue.pause(),_n=0,st&&(st.uncache=1),G&&Rt(s,"refreshInit",G),Vt&&(Vt.pause(),we.tween&&we.tween.kill()&&(we.tween=0)),!q)){for(var N=xe.length;N--;)if(xe[N].scroller===U&&xe[N]!==w)return;Rt(U,"resize",Pc),q||Rt(U,"scroll",jo)}},w.kill=function(P,z){w.disable(P,z),ue&&!z&&ue.kill(),c&&delete mp[c];var N=xe.indexOf(w);N>=0&&xe.splice(N,1),N===dn&&Ku>0&&dn--,N=0,xe.forEach(function(W){return W.scroller===w.scroller&&(N=1)}),N||fn||(w.scroll.rec=0),i&&(i.scrollTrigger=null,P&&i.revert({kill:!1}),z||i.kill()),he&&[he,zt,D,Ye].forEach(function(W){return W.parentNode&&W.parentNode.removeChild(W)}),Uc===w&&(Uc=0),u&&(st&&(st.uncache=1),N=0,xe.forEach(function(W){return W.pin===u&&N++}),N||(st.spacer=0)),n.onKill&&n.onKill(w)},xe.push(w),w.enable(!1,!1),M&&M(w),i&&i.add&&!Je){var B=w.update;w.update=function(){w.update=B,ye.cache++,_e||ve||w.refresh()},Y.delayedCall(.01,w.update),Je=.01,_e=ve=0}else w.refresh();u&&Ww()},s.register=function(n){return Xo||(Y=n||Hv(),Vv()&&window.document&&s.enable(),Xo=Ac),Xo},s.defaults=function(n){if(n)for(var i in n)Wu[i]=n[i];return Wu},s.disable=function(n,i){Ac=0,xe.forEach(function(o){return o[i?"kill":"disable"](n)}),Rt(Se,"wheel",jo),Rt(qe,"scroll",jo),clearInterval(ku),Rt(qe,"touchcancel",Hi),Rt(Ve,"touchstart",Hi),Hu(Rt,qe,"pointerdown,touchstart,mousedown",wv),Hu(Rt,qe,"pointerup,touchend,mouseup",Ev),eh.kill(),Vu(Rt);for(var r=0;r<ye.length;r+=3)Gu(Rt,ye[r],ye[r+1]),Gu(Rt,ye[r],ye[r+2])},s.enable=function(){if(Se=window,qe=document,Bn=qe.documentElement,Ve=qe.body,Y&&(Bc=Y.utils.toArray,Ic=Y.utils.clamp,fp=Y.core.context||Hi,rp=Y.core.suppressOverwrites||Hi,yp=Se.history.scrollRestoration||"auto",gp=Se.pageYOffset||0,Y.core.globals("ScrollTrigger",s),Ve)){Ac=1,qo=document.createElement("div"),qo.style.height="100vh",qo.style.position="absolute",Kv(),Uw(),ht.register(Y),s.isTouch=ht.isTouch,jr=ht.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),dp=ht.isTouch===1,Pt(Se,"wheel",jo),vp=[Se,qe,Bn,Ve],Y.matchMedia?(s.matchMedia=function(l){var h=Y.matchMedia(),d;for(d in l)h.add(d,l[d]);return h},Y.addEventListener("matchMediaInit",function(){return Ep()}),Y.addEventListener("matchMediaRevert",function(){return Yv()}),Y.addEventListener("matchMedia",function(){ks(0,1),js("matchMedia")}),Y.matchMedia().add("(orientation: portrait)",function(){return cp(),cp})):console.warn("Requires GSAP 3.11.0 or later"),cp(),Pt(qe,"scroll",jo);var n=Ve.hasAttribute("style"),i=Ve.style,r=i.borderTopStyle,o=Y.core.Animation.prototype,a,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=cr(Ve),vt.m=Math.round(a.top+vt.sc())||0,Yt.m=Math.round(a.left+Yt.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Ve.setAttribute("style",""),Ve.removeAttribute("style")),ku=setInterval(Av,250),Y.delayedCall(.5,function(){return zu=0}),Pt(qe,"touchcancel",Hi),Pt(Ve,"touchstart",Hi),Hu(Pt,qe,"pointerdown,touchstart,mousedown",wv),Hu(Pt,qe,"pointerup,touchend,mouseup",Ev),hp=Y.utils.checkPrefix("transform"),Ju.push(hp),Xo=Kt(),eh=Y.delayedCall(.2,ks).pause(),$o=[qe,"visibilitychange",function(){var l=Se.innerWidth,h=Se.innerHeight;qe.hidden?(xv=l,Sv=h):(xv!==l||Sv!==h)&&Pc()},qe,"DOMContentLoaded",ks,Se,"load",ks,Se,"resize",Pc],Vu(Pt),xe.forEach(function(l){return l.enable(0,1)}),c=0;c<ye.length;c+=3)Gu(Rt,ye[c],ye[c+1]),Gu(Rt,ye[c],ye[c+2])}},s.config=function(n){"limitCallbacks"in n&&(sp=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ku)||(ku=i)&&setInterval(Av,i),"ignoreMobileResize"in n&&(dp=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Vu(Rt)||Vu(Pt,n.autoRefreshEvents||"none"),Bv=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=un(n),o=ye.indexOf(r),a=Gs(r);~o&&ye.splice(o,a?6:2),i&&(a?fi.unshift(Se,i,Ve,i,Bn,i):fi.unshift(r,i))},s.clearMatchMedia=function(n){xe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Un(n)?un(n):n).getBoundingClientRect(),a=o[r?zs:Vs]*i||0;return r?o.right-a>0&&o.left+a<Se.innerWidth:o.bottom-a>0&&o.top+a<Se.innerHeight},s.positionInViewport=function(n,i,r){Un(n)&&(n=un(n));var o=n.getBoundingClientRect(),a=o[r?zs:Vs],c=i==null?a/2:i in ih?ih[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+c)/Se.innerWidth:(o.top+c)/Se.innerHeight},s.killAll=function(n){if(xe.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Ws.killAll||[];Ws={},i.forEach(function(r){return r()})}},s}();ge.version="3.12.7";ge.saveStyles=function(s){return s?Bc(s).forEach(function(e){if(e&&e.style){var t=Nn.indexOf(e);t>=0&&Nn.splice(t,5),Nn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Y.core.getCache(e),fp())}}):Nn};ge.revert=function(s,e){return Ep(!s,e)};ge.create=function(s,e){return new ge(s,e)};ge.refresh=function(s){return s?Pc(!0):(Xo||ge.register())&&ks(!0)};ge.update=function(s){return++ye.cache&&lr(s===!0?2:0)};ge.clearScrollMemory=Zv;ge.maxScroll=function(s,e){return Gi(s,e?Yt:vt)};ge.getScrollFunc=function(s,e){return or(un(s),e?Yt:vt)};ge.getById=function(s){return mp[s]};ge.getAll=function(){return xe.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ge.isScrolling=function(){return!!ti};ge.snapDirectional=wp;ge.addEventListener=function(s,e){var t=Ws[s]||(Ws[s]=[]);~t.indexOf(e)||t.push(e)};ge.removeEventListener=function(s,e){var t=Ws[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ge.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(l,h){var d=[],f=[],u=Y.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(m){d.length||u.restart(!0),d.push(m.trigger),f.push(m),r<=d.length&&u.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Jt(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Jt(r)&&(r=r(),Pt(ge,"refresh",function(){return r=e.batchMax()})),Bc(s).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(ge.create(l))}),t};var Ov=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},up=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(ht.isTouch?" pinch-zoom":""):"none",e===Bn&&s(Ve,t)},qu={auto:1,scroll:1},Yw=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Y.core.getCache(r),a=Kt(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Ve&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(qu[(c=ei(r)).overflowY]||qu[c.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Gs(r)&&(qu[(c=ei(r)).overflowY]||qu[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Qv=function(e,t,n,i){return ht.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Yw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Pt(qe,ht.eventTypes[0],Nv,!1,!0)},onDisable:function(){return Rt(qe,ht.eventTypes[0],Nv,!0)}})},Zw=/(input|label|select|textarea)/i,Fv,Nv=function(e){var t=Zw.test(e.target.tagName);(t||Fv)&&(e._gsapAllow=!0,Fv=t)},Kw=function(e){Bs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,c,l=un(e.target)||Bn,h=Y.core.globals().ScrollSmoother,d=h&&h.get(),f=jr&&(e.content&&un(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),u=or(l,vt),m=or(l,Yt),p=1,g=(ht.isTouch&&Se.visualViewport?Se.visualViewport.scale*Se.visualViewport.width:Se.outerWidth)/Se.innerWidth,_=0,b=Jt(i)?function(){return i(a)}:function(){return i||2.8},x,y,v=Qv(l,e.type,!0,r),C=function(){return y=!1},S=Hi,E=Hi,A=function(){c=Gi(l,vt),E=Ic(jr?1:0,c),n&&(S=Ic(0,Gi(l,Yt))),x=Hs},I=function(){f._gsap.y=Dc(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},O=function(){if(y){requestAnimationFrame(C);var Q=Dc(a.deltaY/2),oe=E(u.v-Q);if(f&&oe!==u.v+u.offset){u.offset=oe-u.v;var w=Dc((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+w+", 0, 1)",f._gsap.y=w+"px",u.cacheID=ye.cache,lr()}return!0}u.offset&&I(),y=!0},U,F,q,$,j=function(){A(),U.isActive()&&U.vars.scrollY>c&&(u()>c?U.progress(1)&&u(c):U.resetTo("scrollY",c))};return f&&Y.set(f,{y:"+=0"}),e.ignoreCheck=function(V){return jr&&V.type==="touchmove"&&O(V)||p>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){y=!1;var V=p;p=Dc((Se.visualViewport&&Se.visualViewport.scale||1)/g),U.pause(),V!==p&&up(l,p>1.01?!0:n?!1:"x"),F=m(),q=u(),A(),x=Hs},e.onRelease=e.onGestureStart=function(V,Q){if(u.offset&&I(),!Q)$.restart(!0);else{ye.cache++;var oe=b(),w,G;n&&(w=m(),G=w+oe*.05*-V.velocityX/.227,oe*=Ov(m,w,G,Gi(l,Yt)),U.vars.scrollX=S(G)),w=u(),G=w+oe*.05*-V.velocityY/.227,oe*=Ov(u,w,G,Gi(l,vt)),U.vars.scrollY=E(G),U.invalidate().duration(oe).play(.01),(jr&&U.vars.scrollY>=c||w>=c-1)&&Y.to({},{onUpdate:j,duration:oe})}o&&o(V)},e.onWheel=function(){U._ts&&U.pause(),Kt()-_>1e3&&(x=0,_=Kt())},e.onChange=function(V,Q,oe,w,G){if(Hs!==x&&A(),Q&&n&&m(S(w[2]===Q?F+(V.startX-V.x):m()+Q-w[1])),oe){u.offset&&I();var ae=G[2]===oe,le=ae?q+V.startY-V.y:u()+oe-G[1],ie=E(le);ae&&le!==ie&&(q+=ie-le),u(ie)}(oe||Q)&&lr()},e.onEnable=function(){up(l,n?!1:"x"),ge.addEventListener("refresh",j),Pt(Se,"resize",j),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),v.enable()},e.onDisable=function(){up(l,!0),Rt(Se,"resize",j),ge.removeEventListener("refresh",j),v.kill()},e.lockAxis=e.lockAxis!==!1,a=new ht(e),a.iOS=jr,jr&&!u()&&u(1),jr&&Y.ticker.add(Hi),$=a._dc,U=Y.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Jv(u,u(),function(){return U.pause()})},onUpdate:lr,onComplete:$.vars.onComplete}),a};ge.sort=function(s){if(Jt(s))return xe.sort(s);var e=Se.pageYOffset||0;return ge.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Se.innerHeight}),xe.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ge.observe=function(s){return new ht(s)};ge.normalizeScroll=function(s){if(typeof s>"u")return hn;if(s===!0&&hn)return hn.enable();if(s===!1){hn&&hn.kill(),hn=s;return}var e=s instanceof ht?s:Kw(s);return hn&&hn.target===e.target&&hn.kill(),Gs(e.target)&&(hn=e),e};ge.core={_getVelocityProp:Bu,_inputObserver:Qv,_scrollers:ye,_proxies:fi,bridge:{ss:function(){ti||js("scrollStart"),ti=Kt()},ref:function(){return Zt}}};Hv()&&Y.registerPlugin(ge);var ur,Xs,Dp,ah,zc,sh,oh,Vc,pi="transform",Ap=pi+"Origin",ey,ty=function(e){var t=e.ownerDocument||e;for(!(pi in e.style)&&("msTransform"in e.style)&&(pi="msTransform",Ap=pi+"Origin");t.parentNode&&(t=t.parentNode););if(Xs=window,oh=new Xr,t){ur=t,Dp=t.documentElement,ah=t.body,Vc=ur.createElementNS("http://www.w3.org/2000/svg","g"),Vc.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),r=t&&(t.body||t.firstElementChild);r&&r.appendChild&&(r.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),ey=i.offsetParent!==n,r.removeChild(n))}return t},Jw=function(e){for(var t,n;e&&e!==ah;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},ny=[],iy=[],Qw=function(){return Xs.pageYOffset||ur.scrollTop||Dp.scrollTop||ah.scrollTop||0},eE=function(){return Xs.pageXOffset||ur.scrollLeft||Dp.scrollLeft||ah.scrollLeft||0},Rp=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},tE=function s(e){if(Xs.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},Tp=function s(e,t){if(e.parentNode&&(ur||ty(e))){var n=Rp(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",r=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,c="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",l=ur.createElementNS?ur.createElementNS(i.replace(/^https/,"http"),r):ur.createElement(r);return t&&(n?(sh||(sh=s(e)),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+o+","+a+")"),sh.appendChild(l)):(zc||(zc=s(e),zc.style.cssText=c),l.style.cssText=c+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",zc.appendChild(l))),l}throw"Need document and parent."},nE=function(e){for(var t=new Xr,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},iE=function(e){var t=e.getCTM(),n;return t||(n=e.style[pi],e.style[pi]="none",e.appendChild(Vc),t=Vc.getCTM(),e.removeChild(Vc),n?e.style[pi]=n:e.style.removeProperty(pi.replace(/([A-Z])/g,"-$1").toLowerCase())),t||oh.clone()},rE=function(e,t){var n=Rp(e),i=e===n,r=n?ny:iy,o=e.parentNode,a,c,l,h,d,f;if(e===Xs)return e;if(r.length||r.push(Tp(e,1),Tp(e,2),Tp(e,3)),a=n?sh:zc,n)i?(l=iE(e),h=-l.e/l.a,d=-l.f/l.d,c=oh):e.getBBox?(l=e.getBBox(),c=e.transform?e.transform.baseVal:{},c=c.numberOfItems?c.numberOfItems>1?nE(c):c.getItem(0).matrix:oh,h=c.a*l.x+c.c*l.y,d=c.b*l.x+c.d*l.y):(c=new Xr,h=d=0),t&&e.tagName.toLowerCase()==="g"&&(h=d=0),(i?n:o).appendChild(a),a.setAttribute("transform","matrix("+c.a+","+c.b+","+c.c+","+c.d+","+(c.e+h)+","+(c.f+d)+")");else{if(h=d=0,ey)for(c=e.offsetParent,l=e;l&&(l=l.parentNode)&&l!==c&&l.parentNode;)(Xs.getComputedStyle(l)[pi]+"").length>4&&(h=l.offsetLeft,d=l.offsetTop,l=0);if(f=Xs.getComputedStyle(e),f.position!=="absolute"&&f.position!=="fixed")for(c=e.offsetParent;o&&o!==c;)h+=o.scrollLeft||0,d+=o.scrollTop||0,o=o.parentNode;l=a.style,l.top=e.offsetTop-d+"px",l.left=e.offsetLeft-h+"px",l[pi]=f[pi],l[Ap]=f[Ap],l.position=f.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},Cp=function(e,t,n,i,r,o,a){return e.a=t,e.b=n,e.c=i,e.d=r,e.e=o,e.f=a,e},Xr=function(){function s(t,n,i,r,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),r===void 0&&(r=1),o===void 0&&(o=0),a===void 0&&(a=0),Cp(this,t,n,i,r,o,a)}var e=s.prototype;return e.inverse=function(){var n=this.a,i=this.b,r=this.c,o=this.d,a=this.e,c=this.f,l=n*o-i*r||1e-10;return Cp(this,o/l,-i/l,-r/l,n/l,(r*c-o*a)/l,-(n*c-i*a)/l)},e.multiply=function(n){var i=this.a,r=this.b,o=this.c,a=this.d,c=this.e,l=this.f,h=n.a,d=n.c,f=n.b,u=n.d,m=n.e,p=n.f;return Cp(this,h*i+f*o,h*r+f*a,d*i+u*o,d*r+u*a,c+m*i+p*o,l+m*r+p*a)},e.clone=function(){return new s(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,r=this.b,o=this.c,a=this.d,c=this.e,l=this.f;return i===n.a&&r===n.b&&o===n.c&&a===n.d&&c===n.e&&l===n.f},e.apply=function(n,i){i===void 0&&(i={});var r=n.x,o=n.y,a=this.a,c=this.b,l=this.c,h=this.d,d=this.e,f=this.f;return i.x=r*a+o*l+d||0,i.y=r*c+o*h+f||0,i},s}();function pn(s,e,t,n){if(!s||!s.parentNode||(ur||ty(s)).documentElement===s)return new Xr;var i=Jw(s),r=Rp(s),o=r?ny:iy,a=rE(s,t),c=o[0].getBoundingClientRect(),l=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),d=a.parentNode,f=!n&&tE(s),u=new Xr((l.left-c.left)/100,(l.top-c.top)/100,(h.left-c.left)/100,(h.top-c.top)/100,c.left+(f?0:eE()),c.top+(f?0:Qw()));if(d.removeChild(a),i)for(c=i.length;c--;)l=i[c],l.scaleX=l.scaleY=0,l.renderTransform(1,l);return e?u.inverse():u}function ry(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function sE(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Ae,$e,kn,_i,fr,Pp,dr,Np,Gc,Zr,my,Up,qc,Vp,Wc,mi,jc,uh,gy,Bp,dh=0,_y=function(){return typeof window<"u"},vy=function(){return Ae||_y()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Yr=function(e){return typeof e=="function"},Xc=function(e){return typeof e=="object"},gi=function(e){return typeof e>"u"},hh=function(){return!1},$c="transform",kp="transformOrigin",$r=function(e){return Math.round(e*1e4)/1e4},Hc=Array.isArray,ch=function(e,t){var n=kn.createElementNS?kn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):kn.createElement(e);return n.style?n:kn.createElement(e)},sy=180/Math.PI,$s=1e20,oE=new Xr,qr=Date.now||function(){return new Date().getTime()},Ys=[],Qo={},aE=0,cE=/^(?:a|input|textarea|button|select)$/i,oy=0,Ko={},hr={},yy=function(e,t){var n={},i;for(i in e)n[i]=t?e[i]*t:e[i];return n},lE=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ay=function s(e,t){for(var n=e.length,i;n--;)t?e[n].style.touchAction=t:e[n].style.removeProperty("touch-action"),i=e[n].children,i&&i.length&&s(i,t)},xy=function(){return Ys.forEach(function(e){return e()})},uE=function(e){Ys.push(e),Ys.length===1&&Ae.ticker.add(xy)},cy=function(){return!Ys.length&&Ae.ticker.remove(xy)},ly=function(e){for(var t=Ys.length;t--;)Ys[t]===e&&Ys.splice(t,1);Ae.to(cy,{overwrite:!0,delay:15,duration:0,onComplete:cy,data:"_draggable"})},hE=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ct=function(e,t,n,i){if(e.addEventListener){var r=qc[t];i=i||(my?{passive:!1}:null),e.addEventListener(r||t,n,i),r&&t!==r&&e.addEventListener(t,n,i)}},xt=function(e,t,n,i){if(e.removeEventListener){var r=qc[t];e.removeEventListener(r||t,n,i),r&&t!==r&&e.removeEventListener(t,n,i)}},ni=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},dE=function(e,t){for(var n=e.length;n--;)if(e[n].identifier===t)return!0},fE=function s(e){Vp=e.touches&&dh<e.touches.length,xt(e.target,"touchend",s)},uy=function(e){Vp=e.touches&&dh<e.touches.length,Ct(e.target,"touchend",fE)},ea=function(e){return $e.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},ta=function(e){return $e.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},hy=function s(e,t){Ct(e,"scroll",t),na(e.parentNode)||s(e.parentNode,t)},dy=function s(e,t){xt(e,"scroll",t),na(e.parentNode)||s(e.parentNode,t)},na=function(e){return!e||e===_i||e.nodeType===9||e===kn.body||e===$e||!e.nodeType||!e.parentNode},fy=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,r="client"+n;return Math.max(0,na(e)?Math.max(_i[i],fr[i])-($e["inner"+n]||_i[r]||fr[r]):e[i]-e[r])},Ip=function s(e,t){var n=fy(e,"x"),i=fy(e,"y");na(e)?e=hr:s(e.parentNode,t),e._gsMaxScrollX=n,e._gsMaxScrollY=i,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},Lp=function(e,t,n){var i=e.style;i&&(gi(i[t])&&(t=Gc(t,e)||t),n==null?i.removeProperty&&i.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):i[t]=n)},Yc=function(e){return $e.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},qs={},Jo=function(e){if(e===$e)return qs.left=qs.top=0,qs.width=qs.right=_i.clientWidth||e.innerWidth||fr.clientWidth||0,qs.height=qs.bottom=(e.innerHeight||0)-20<_i.clientHeight?_i.clientHeight:e.innerHeight||fr.clientHeight||0,qs;var t=e.ownerDocument||kn,n=gi(e.pageX)?!e.nodeType&&!gi(e.left)&&!gi(e.top)?e:Zr(e)[0].getBoundingClientRect():{left:e.pageX-ta(t),top:e.pageY-ea(t),right:e.pageX-ta(t)+1,bottom:e.pageY-ea(t)+1};return gi(n.right)&&!gi(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):gi(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},pt=function(e,t,n){var i=e.vars,r=i[n],o=e._listeners[t],a;return Yr(r)&&(a=r.apply(i.callbackScope||e,i[n+"Params"]||[e.pointerEvent])),o&&e.dispatchEvent(t)===!1&&(a=!1),a},py=function(e,t){var n=Zr(e)[0],i,r,o;return!n.nodeType&&n!==$e?gi(e.left)?(r=e.min||e.minX||e.minRotation||0,i=e.min||e.minY||0,{left:r,top:i,width:(e.max||e.maxX||e.maxRotation||0)-r,height:(e.max||e.maxY||0)-i}):(o={x:0,y:0},{left:e.left-o.x,top:e.top-o.y,width:e.width,height:e.height}):pE(n,t)},ii={},pE=function(e,t){t=Zr(t)[0];var n=e.getBBox&&e.ownerSVGElement,i=e.ownerDocument||kn,r,o,a,c,l,h,d,f,u,m,p,g,_;if(e===$e)a=ea(i),r=ta(i),o=r+(i.documentElement.clientWidth||e.innerWidth||i.body.clientWidth||0),c=a+((e.innerHeight||0)-20<i.documentElement.clientHeight?i.documentElement.clientHeight:e.innerHeight||i.body.clientHeight||0);else{if(t===$e||gi(t))return e.getBoundingClientRect();r=a=0,n?(m=e.getBBox(),p=m.width,g=m.height):(e.viewBox&&(m=e.viewBox.baseVal)&&(r=m.x||0,a=m.y||0,p=m.width,g=m.height),p||(_=Yc(e),m=_.boxSizing==="border-box",p=(parseFloat(_.width)||e.clientWidth||0)+(m?0:parseFloat(_.borderLeftWidth)+parseFloat(_.borderRightWidth)),g=(parseFloat(_.height)||e.clientHeight||0)+(m?0:parseFloat(_.borderTopWidth)+parseFloat(_.borderBottomWidth)))),o=p,c=g}return e===t?{left:r,top:a,width:o-r,height:c-a}:(l=pn(t,!0).multiply(pn(e)),h=l.apply({x:r,y:a}),d=l.apply({x:o,y:a}),f=l.apply({x:o,y:c}),u=l.apply({x:r,y:c}),r=Math.min(h.x,d.x,f.x,u.x),a=Math.min(h.y,d.y,f.y,u.y),{left:r,top:a,width:Math.max(h.x,d.x,f.x,u.x)-r,height:Math.max(h.y,d.y,f.y,u.y)-a})},Op=function(e,t,n,i,r,o){var a={},c,l,h;if(t)if(r!==1&&t instanceof Array){if(a.end=c=[],h=t.length,Xc(t[0]))for(l=0;l<h;l++)c[l]=yy(t[l],r);else for(l=0;l<h;l++)c[l]=t[l]*r;n+=1.1,i-=1.1}else Yr(t)?a.end=function(d){var f=t.call(e,d),u,m;if(r!==1)if(Xc(f)){u={};for(m in f)u[m]=f[m]*r;f=u}else f*=r;return f}:a.end=t;return(n||n===0)&&(a.max=n),(i||i===0)&&(a.min=i),o&&(a.velocity=0),a},mE=function s(e){var t;return!e||!e.getAttribute||e===fr?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(cE.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:s(e.parentNode)},lh=function(e,t){for(var n=e.length,i;n--;)i=e[n],i.ondragstart=i.onselectstart=t?null:hh,Ae.set(i,{lazy:!0,userSelect:t?"text":"none"})},gE=function s(e){if(Yc(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},Sy,zp,_E=function(e,t){e=Ae.utils.toArray(e)[0],t=t||{};var n=document.createElement("div"),i=n.style,r=e.firstChild,o=0,a=0,c=e.scrollTop,l=e.scrollLeft,h=e.scrollWidth,d=e.scrollHeight,f=0,u=0,m=0,p,g,_,b,x,y;Sy&&t.force3D!==!1?(x="translate3d(",y="px,0px)"):$c&&(x="translate(",y="px)"),this.scrollTop=function(v,C){if(!arguments.length)return-this.top();this.top(-v,C)},this.scrollLeft=function(v,C){if(!arguments.length)return-this.left();this.left(-v,C)},this.left=function(v,C){if(!arguments.length)return-(e.scrollLeft+a);var S=e.scrollLeft-l,E=a;if((S>2||S<-2)&&!C){l=e.scrollLeft,Ae.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-l),t.onKill&&t.onKill();return}v=-v,v<0?(a=v-.5|0,v=0):v>u?(a=v-u|0,v=u):a=0,(a||E)&&(this._skip||(i[$c]=x+-a+"px,"+-o+y),a+f>=0&&(i.paddingRight=a+f+"px")),e.scrollLeft=v|0,l=e.scrollLeft},this.top=function(v,C){if(!arguments.length)return-(e.scrollTop+o);var S=e.scrollTop-c,E=o;if((S>2||S<-2)&&!C){c=e.scrollTop,Ae.killTweensOf(this,{top:1,scrollTop:1}),this.top(-c),t.onKill&&t.onKill();return}v=-v,v<0?(o=v-.5|0,v=0):v>m?(o=v-m|0,v=m):o=0,(o||E)&&(this._skip||(i[$c]=x+-a+"px,"+-o+y)),e.scrollTop=v|0,c=e.scrollTop},this.maxScrollTop=function(){return m},this.maxScrollLeft=function(){return u},this.disable=function(){for(r=n.firstChild;r;)b=r.nextSibling,e.appendChild(r),r=b;e===n.parentNode&&e.removeChild(n)},this.enable=function(){if(r=e.firstChild,r!==n){for(;r;)b=r.nextSibling,n.appendChild(r),r=b;e.appendChild(n),this.calibrate()}},this.calibrate=function(v){var C=e.clientWidth===p,S,E,A;c=e.scrollTop,l=e.scrollLeft,!(C&&e.clientHeight===g&&n.offsetHeight===_&&h===e.scrollWidth&&d===e.scrollHeight&&!v)&&((o||a)&&(E=this.left(),A=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),S=Yc(e),(!C||v)&&(i.display="block",i.width="auto",i.paddingRight="0px",f=Math.max(0,e.scrollWidth-e.clientWidth),f&&(f+=parseFloat(S.paddingLeft)+(zp?parseFloat(S.paddingRight):0))),i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.boxSizing="content-box",i.width="100%",i.paddingRight=f+"px",zp&&(i.paddingBottom=S.paddingBottom),p=e.clientWidth,g=e.clientHeight,h=e.scrollWidth,d=e.scrollHeight,u=e.scrollWidth-p,m=e.scrollHeight-g,_=n.offsetHeight,i.display="block",(E||A)&&(this.left(E),this.top(A)))},this.content=n,this.element=e,this._skip=!1,this.enable()},Fp=function(e){if(_y()&&document.body){var t=window&&window.navigator;$e=window,kn=document,_i=kn.documentElement,fr=kn.body,Pp=ch("div"),uh=!!window.PointerEvent,dr=ch("div"),dr.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",jc=dr.style.cursor==="grab"?"grab":"move",Wc=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,Up="ontouchstart"in _i&&"orientation"in $e||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),zp=function(){var n=ch("div"),i=ch("div"),r=i.style,o=fr,a;return r.display="inline-block",r.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(i),o.appendChild(n),a=i.offsetHeight+18>n.scrollHeight,o.removeChild(n),a}(),qc=function(n){for(var i=n.split(","),r=("onpointerdown"in Pp?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in Pp?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),o={},a=4;--a>-1;)o[i[a]]=r[a],o[r[a]]=i[a];try{_i.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){my=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),Ct(kn,"touchcancel",hh),Ct($e,"touchmove",hh),fr&&fr.addEventListener("touchstart",hh),Ct(kn,"contextmenu",function(){for(var n in Qo)Qo[n].isPressed&&Qo[n].endDrag()}),Ae=Np=vy()}Ae?(mi=Ae.plugins.inertia,gy=Ae.core.context||function(){},Gc=Ae.utils.checkPrefix,$c=Gc($c),kp=Gc(kp),Zr=Ae.utils.toArray,Bp=Ae.core.getStyleSaver,Sy=!!Gc("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},vE=function(){function s(t){this._listeners={},this.target=t||this}var e=s.prototype;return e.addEventListener=function(n,i){var r=this._listeners[n]||(this._listeners[n]=[]);~r.indexOf(i)||r.push(i)},e.removeEventListener=function(n,i){var r=this._listeners[n],o=r&&r.indexOf(i);o>=0&&r.splice(o,1)},e.dispatchEvent=function(n){var i=this,r;return(this._listeners[n]||[]).forEach(function(o){return o.call(i,{type:n,target:i.target})===!1&&(r=!1)}),r},s}(),ia=function(s){sE(e,s);function e(t,n){var i;i=s.call(this)||this,Np||Fp(1),t=Zr(t)[0],i.styles=Bp&&Bp(t,"transform,left,top"),mi||(mi=Ae.plugins.inertia),i.vars=n=yy(n||{}),i.target=t,i.x=i.y=i.rotation=0,i.dragResistance=parseFloat(n.dragResistance)||0,i.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,i.lockAxis=n.lockAxis,i.autoScroll=n.autoScroll||0,i.lockedAxis=null,i.allowEventDefault=!!n.allowEventDefault,Ae.getProperty(t,"x");var r=(n.type||"x,y").toLowerCase(),o=~r.indexOf("x")||~r.indexOf("y"),a=r.indexOf("rotation")!==-1,c=a?"rotation":o?"x":"left",l=o?"y":"top",h=!!(~r.indexOf("x")||~r.indexOf("left")||r==="scroll"),d=!!(~r.indexOf("y")||~r.indexOf("top")||r==="scroll"),f=n.minimumMovement||2,u=ry(i),m=Zr(n.trigger||n.handle||t),p={},g=0,_=!1,b=n.autoScrollMarginTop||40,x=n.autoScrollMarginRight||40,y=n.autoScrollMarginBottom||40,v=n.autoScrollMarginLeft||40,C=n.clickableTest||mE,S=0,E=t._gsap||Ae.core.getCache(t),A=gE(t),I=function(M,k){return parseFloat(E.get(t,M,k))},O=t.ownerDocument||kn,U,F,q,$,j,V,Q,oe,w,G,ae,le,ie,Be,ke,We,we,st,Oe,Ke,ot,_e,ve,he,zt,D,Ye,Tn,Gn,Je,tt,ci,Wn,dt=function(M){return ni(M),M.stopImmediatePropagation&&M.stopImmediatePropagation(),!1},Mt=function K(M){if(u.autoScroll&&u.isDragging&&(_||we)){var k=t,T=u.autoScroll*15,R,B,P,z,N,W,ee,Z;for(_=!1,hr.scrollTop=$e.pageYOffset!=null?$e.pageYOffset:O.documentElement.scrollTop!=null?O.documentElement.scrollTop:O.body.scrollTop,hr.scrollLeft=$e.pageXOffset!=null?$e.pageXOffset:O.documentElement.scrollLeft!=null?O.documentElement.scrollLeft:O.body.scrollLeft,z=u.pointerX-hr.scrollLeft,N=u.pointerY-hr.scrollTop;k&&!B;)B=na(k.parentNode),R=B?hr:k.parentNode,P=B?{bottom:Math.max(_i.clientHeight,$e.innerHeight||0),right:Math.max(_i.clientWidth,$e.innerWidth||0),left:0,top:0}:R.getBoundingClientRect(),W=ee=0,d&&(Z=R._gsMaxScrollY-R.scrollTop,Z<0?ee=Z:N>P.bottom-y&&Z?(_=!0,ee=Math.min(Z,T*(1-Math.max(0,P.bottom-N)/y)|0)):N<P.top+b&&R.scrollTop&&(_=!0,ee=-Math.min(R.scrollTop,T*(1-Math.max(0,N-P.top)/b)|0)),ee&&(R.scrollTop+=ee)),h&&(Z=R._gsMaxScrollX-R.scrollLeft,Z<0?W=Z:z>P.right-x&&Z?(_=!0,W=Math.min(Z,T*(1-Math.max(0,P.right-z)/x)|0)):z<P.left+v&&R.scrollLeft&&(_=!0,W=-Math.min(R.scrollLeft,T*(1-Math.max(0,z-P.left)/v)|0)),W&&(R.scrollLeft+=W)),B&&(W||ee)&&($e.scrollTo(R.scrollLeft,R.scrollTop),Dn(u.pointerX+W,u.pointerY+ee)),k=R}if(we){var fe=u.x,Pe=u.y;a?(u.deltaX=fe-parseFloat(E.rotation),u.rotation=fe,E.rotation=fe+"deg",E.renderTransform(1,E)):F?(d&&(u.deltaY=Pe-F.top(),F.top(Pe)),h&&(u.deltaX=fe-F.left(),F.left(fe))):o?(d&&(u.deltaY=Pe-parseFloat(E.y),E.y=Pe+"px"),h&&(u.deltaX=fe-parseFloat(E.x),E.x=fe+"px"),E.renderTransform(1,E)):(d&&(u.deltaY=Pe-parseFloat(t.style.top||0),t.style.top=Pe+"px"),h&&(u.deltaX=fe-parseFloat(t.style.left||0),t.style.left=fe+"px")),oe&&!M&&!Tn&&(Tn=!0,pt(u,"drag","onDrag")===!1&&(h&&(u.x-=u.deltaX),d&&(u.y-=u.deltaY),K(!0)),Tn=!1)}we=!1},He=function(M,k){var T=u.x,R=u.y,B,P;t._gsap||(E=Ae.core.getCache(t)),E.uncache&&Ae.getProperty(t,"x"),o?(u.x=parseFloat(E.x),u.y=parseFloat(E.y)):a?u.x=u.rotation=parseFloat(E.rotation):F?(u.y=F.top(),u.x=F.left()):(u.y=parseFloat(t.style.top||(P=Yc(t))&&P.top)||0,u.x=parseFloat(t.style.left||(P||{}).left)||0),(Oe||Ke||ot)&&!k&&(u.isDragging||u.isThrowing)&&(ot&&(Ko.x=u.x,Ko.y=u.y,B=ot(Ko),B.x!==u.x&&(u.x=B.x,we=!0),B.y!==u.y&&(u.y=B.y,we=!0)),Oe&&(B=Oe(u.x),B!==u.x&&(u.x=B,a&&(u.rotation=B),we=!0)),Ke&&(B=Ke(u.y),B!==u.y&&(u.y=B),we=!0)),we&&Mt(!0),M||(u.deltaX=u.x-T,u.deltaY=u.y-R,pt(u,"throwupdate","onThrowUpdate"))},nn=function(M,k,T,R){return k==null&&(k=-$s),T==null&&(T=$s),Yr(M)?function(B){var P=u.isPressed?1-u.edgeResistance:1;return M.call(u,(B>T?T+(B-T)*P:B<k?k+(B-k)*P:B)*R)*R}:Hc(M)?function(B){for(var P=M.length,z=0,N=$s,W,ee;--P>-1;)W=M[P],ee=W-B,ee<0&&(ee=-ee),ee<N&&W>=k&&W<=T&&(z=P,N=ee);return M[z]}:isNaN(M)?function(B){return B}:function(){return M*R}},gn=function(M,k,T,R,B,P,z){return P=P&&P<$s?P*P:$s,Yr(M)?function(N){var W=u.isPressed?1-u.edgeResistance:1,ee=N.x,Z=N.y,fe,Pe,Ie;return N.x=ee=ee>T?T+(ee-T)*W:ee<k?k+(ee-k)*W:ee,N.y=Z=Z>B?B+(Z-B)*W:Z<R?R+(Z-R)*W:Z,fe=M.call(u,N),fe!==N&&(N.x=fe.x,N.y=fe.y),z!==1&&(N.x*=z,N.y*=z),P<$s&&(Pe=N.x-ee,Ie=N.y-Z,Pe*Pe+Ie*Ie>P&&(N.x=ee,N.y=Z)),N}:Hc(M)?function(N){for(var W=M.length,ee=0,Z=$s,fe,Pe,Ie,Me;--W>-1;)Ie=M[W],fe=Ie.x-N.x,Pe=Ie.y-N.y,Me=fe*fe+Pe*Pe,Me<Z&&(ee=W,Z=Me);return Z<=P?M[ee]:N}:function(N){return N}},Cn=function(){var M,k,T,R;Q=!1,F?(F.calibrate(),u.minX=ae=-F.maxScrollLeft(),u.minY=ie=-F.maxScrollTop(),u.maxX=G=u.maxY=le=0,Q=!0):n.bounds&&(M=py(n.bounds,t.parentNode),a?(u.minX=ae=M.left,u.maxX=G=M.left+M.width,u.minY=ie=u.maxY=le=0):!gi(n.bounds.maxX)||!gi(n.bounds.maxY)?(M=n.bounds,u.minX=ae=M.minX,u.minY=ie=M.minY,u.maxX=G=M.maxX,u.maxY=le=M.maxY):(k=py(t,t.parentNode),u.minX=ae=Math.round(I(c,"px")+M.left-k.left),u.minY=ie=Math.round(I(l,"px")+M.top-k.top),u.maxX=G=Math.round(ae+(M.width-k.width)),u.maxY=le=Math.round(ie+(M.height-k.height))),ae>G&&(u.minX=G,u.maxX=G=ae,ae=u.minX),ie>le&&(u.minY=le,u.maxY=le=ie,ie=u.minY),a&&(u.minRotation=ae,u.maxRotation=G),Q=!0),n.liveSnap&&(T=n.liveSnap===!0?n.snap||{}:n.liveSnap,R=Hc(T)||Yr(T),a?(Oe=nn(R?T:T.rotation,ae,G,1),Ke=null):T.points?ot=gn(R?T:T.points,ae,G,ie,le,T.radius,F?-1:1):(h&&(Oe=nn(R?T:T.x||T.left||T.scrollLeft,ae,G,F?-1:1)),d&&(Ke=nn(R?T:T.y||T.top||T.scrollTop,ie,le,F?-1:1))))},ss=function(){u.isThrowing=!1,pt(u,"throwcomplete","onThrowComplete")},at=function(){u.isThrowing=!1},Sr=function(M,k){var T,R,B,P;M&&mi?(M===!0&&(T=n.snap||n.liveSnap||{},R=Hc(T)||Yr(T),M={resistance:(n.throwResistance||n.resistance||1e3)/(a?10:1)},a?M.rotation=Op(u,R?T:T.rotation,G,ae,1,k):(h&&(M[c]=Op(u,R?T:T.points||T.x||T.left,G,ae,F?-1:1,k||u.lockedAxis==="x")),d&&(M[l]=Op(u,R?T:T.points||T.y||T.top,le,ie,F?-1:1,k||u.lockedAxis==="y")),(T.points||Hc(T)&&Xc(T[0]))&&(M.linkedProps=c+","+l,M.radius=T.radius))),u.isThrowing=!0,P=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-u.edgeResistance+.2:n.overshootTolerance,M.duration||(M.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?P===0||Xc(M)&&M.resistance>1e3?0:.5:n.minDuration,overshoot:P}),u.tween=B=Ae.to(F||t,{inertia:M,data:"_draggable",inherit:!1,onComplete:ss,onInterrupt:at,onUpdate:n.fastMode?pt:He,onUpdateParams:n.fastMode?[u,"onthrowupdate","onThrowUpdate"]:T&&T.radius?[!1,!0]:[]}),n.fastMode||(F&&(F._skip=!0),B.render(1e9,!0,!0),He(!0,!0),u.endX=u.x,u.endY=u.y,a&&(u.endRotation=u.x),B.play(0),He(!0,!0),F&&(F._skip=!1))):Q&&u.applyBounds()},jn=function(M){var k=he,T;he=pn(t.parentNode,!0),M&&u.isPressed&&!he.equals(k||new Xr)&&(T=k.inverse().apply({x:q,y:$}),he.apply(T,T),q=T.x,$=T.y),he.equals(oE)&&(he=null)},li=function(){var M=1-u.edgeResistance,k=A?ta(O):0,T=A?ea(O):0,R,B,P;o&&(E.x=I(c,"px")+"px",E.y=I(l,"px")+"px",E.renderTransform()),jn(!1),ii.x=u.pointerX-k,ii.y=u.pointerY-T,he&&he.apply(ii,ii),q=ii.x,$=ii.y,we&&(Dn(u.pointerX,u.pointerY),Mt(!0)),ci=pn(t),F?(Cn(),V=F.top(),j=F.left()):(Xn()?(He(!0,!0),Cn()):u.applyBounds(),a?(R=t.ownerSVGElement?[E.xOrigin-t.getBBox().x,E.yOrigin-t.getBBox().y]:(Yc(t)[kp]||"0 0").split(" "),We=u.rotationOrigin=pn(t).apply({x:parseFloat(R[0])||0,y:parseFloat(R[1])||0}),He(!0,!0),B=u.pointerX-We.x-k,P=We.y-u.pointerY+T,j=u.x,V=u.y=Math.atan2(P,B)*sy):(V=I(l,"px"),j=I(c,"px"))),Q&&M&&(j>G?j=G+(j-G)/M:j<ae&&(j=ae-(ae-j)/M),a||(V>le?V=le+(V-le)/M:V<ie&&(V=ie-(ie-V)/M))),u.startX=j=$r(j),u.startY=V=$r(V)},Xn=function(){return u.tween&&u.tween.isActive()},Mi=function(){dr.parentNode&&!Xn()&&!u.isDragging&&dr.parentNode.removeChild(dr)},An=function(M,k){var T;if(!U||u.isPressed||!M||(M.type==="mousedown"||M.type==="pointerdown")&&!k&&qr()-S<30&&qc[u.pointerEvent.type]){tt&&M&&U&&ni(M);return}if(zt=Xn(),Wn=!1,u.pointerEvent=M,qc[M.type]?(ve=~M.type.indexOf("touch")?M.currentTarget||M.target:O,Ct(ve,"touchend",nt),Ct(ve,"touchmove",ue),Ct(ve,"touchcancel",nt),Ct(O,"touchstart",uy)):(ve=null,Ct(O,"mousemove",ue)),Ye=null,(!uh||!ve)&&(Ct(O,"mouseup",nt),M&&M.target&&Ct(M.target,"mouseup",nt)),_e=C.call(u,M.target)&&n.dragClickables===!1&&!k,_e){Ct(M.target,"change",nt),pt(u,"pressInit","onPressInit"),pt(u,"press","onPress"),lh(m,!0),tt=!1;return}if(D=!ve||h===d||u.vars.allowNativeTouchScrolling===!1||u.vars.allowContextMenu&&M&&(M.ctrlKey||M.which>2)?!1:h?"y":"x",tt=!D&&!u.allowEventDefault,tt&&(ni(M),Ct($e,"touchforcechange",ni)),M.changedTouches?(M=Be=M.changedTouches[0],ke=M.identifier):M.pointerId?ke=M.pointerId:Be=ke=null,dh++,uE(Mt),$=u.pointerY=M.pageY,q=u.pointerX=M.pageX,pt(u,"pressInit","onPressInit"),(D||u.autoScroll)&&Ip(t.parentNode),t.parentNode&&u.autoScroll&&!F&&!a&&t.parentNode._gsMaxScrollX&&!dr.parentNode&&!t.getBBox&&(dr.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(dr)),li(),u.tween&&u.tween.kill(),u.isThrowing=!1,Ae.killTweensOf(F||t,p,!0),F&&Ae.killTweensOf(t,{scrollTo:1},!0),u.tween=u.lockedAxis=null,(n.zIndexBoost||!a&&!F&&n.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),u.isPressed=!0,oe=!!(n.onDrag||u._listeners.drag),w=!!(n.onMove||u._listeners.move),n.cursor!==!1||n.activeCursor)for(T=m.length;--T>-1;)Ae.set(m[T],{cursor:n.activeCursor||n.cursor||(jc==="grab"?"grabbing":jc)});pt(u,"press","onPress")},ue=function(M){var k=M,T,R,B,P,z,N;if(!U||Vp||!u.isPressed||!M){tt&&M&&U&&ni(M);return}if(u.pointerEvent=M,T=M.changedTouches,T){if(M=T[0],M!==Be&&M.identifier!==ke){for(P=T.length;--P>-1&&(M=T[P]).identifier!==ke&&M.target!==t;);if(P<0)return}}else if(M.pointerId&&ke&&M.pointerId!==ke)return;if(ve&&D&&!Ye&&(ii.x=M.pageX-(A?ta(O):0),ii.y=M.pageY-(A?ea(O):0),he&&he.apply(ii,ii),R=ii.x,B=ii.y,z=Math.abs(R-q),N=Math.abs(B-$),(z!==N&&(z>f||N>f)||Wc&&D===Ye)&&(Ye=z>N&&h?"x":"y",D&&Ye!==D&&Ct($e,"touchforcechange",ni),u.vars.lockAxisOnTouchScroll!==!1&&h&&d&&(u.lockedAxis=Ye==="x"?"y":"x",Yr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,k)),Wc&&D===Ye))){nt(k);return}!u.allowEventDefault&&(!D||Ye&&D!==Ye)&&k.cancelable!==!1?(ni(k),tt=!0):tt&&(tt=!1),u.autoScroll&&(_=!0),Dn(M.pageX,M.pageY,w)},Dn=function(M,k,T){var R=1-u.dragResistance,B=1-u.edgeResistance,P=u.pointerX,z=u.pointerY,N=V,W=u.x,ee=u.y,Z=u.endX,fe=u.endY,Pe=u.endRotation,Ie=we,Me,Ee,Ge,de,Lt,ct;u.pointerX=M,u.pointerY=k,A&&(M-=ta(O),k-=ea(O)),a?(de=Math.atan2(We.y-k,M-We.x)*sy,Lt=u.y-de,Lt>180?(V-=360,u.y=de):Lt<-180&&(V+=360,u.y=de),u.x!==j||Math.max(Math.abs(q-M),Math.abs($-k))>f?(u.y=de,Ge=j+(V-de)*R):Ge=j):(he&&(ct=M*he.a+k*he.c+he.e,k=M*he.b+k*he.d+he.f,M=ct),Ee=k-$,Me=M-q,Ee<f&&Ee>-f&&(Ee=0),Me<f&&Me>-f&&(Me=0),(u.lockAxis||u.lockedAxis)&&(Me||Ee)&&(ct=u.lockedAxis,ct||(u.lockedAxis=ct=h&&Math.abs(Me)>Math.abs(Ee)?"y":d?"x":null,ct&&Yr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,u.pointerEvent)),ct==="y"?Ee=0:ct==="x"&&(Me=0)),Ge=$r(j+Me*R),de=$r(V+Ee*R)),(Oe||Ke||ot)&&(u.x!==Ge||u.y!==de&&!a)&&(ot&&(Ko.x=Ge,Ko.y=de,ct=ot(Ko),Ge=$r(ct.x),de=$r(ct.y)),Oe&&(Ge=$r(Oe(Ge))),Ke&&(de=$r(Ke(de)))),Q&&(Ge>G?Ge=G+Math.round((Ge-G)*B):Ge<ae&&(Ge=ae+Math.round((Ge-ae)*B)),a||(de>le?de=Math.round(le+(de-le)*B):de<ie&&(de=Math.round(ie+(de-ie)*B)))),(u.x!==Ge||u.y!==de&&!a)&&(a?(u.endRotation=u.x=u.endX=Ge,we=!0):(d&&(u.y=u.endY=de,we=!0),h&&(u.x=u.endX=Ge,we=!0)),!T||pt(u,"move","onMove")!==!1?!u.isDragging&&u.isPressed&&(u.isDragging=Wn=!0,pt(u,"dragstart","onDragStart")):(u.pointerX=P,u.pointerY=z,V=N,u.x=W,u.y=ee,u.endX=Z,u.endY=fe,u.endRotation=Pe,we=Ie))},nt=function K(M,k){if(!U||!u.isPressed||M&&ke!=null&&!k&&(M.pointerId&&M.pointerId!==ke&&M.target!==t||M.changedTouches&&!dE(M.changedTouches,ke))){tt&&M&&U&&ni(M);return}u.isPressed=!1;var T=M,R=u.isDragging,B=u.vars.allowContextMenu&&M&&(M.ctrlKey||M.which>2),P=Ae.delayedCall(.001,Mi),z,N,W,ee,Z;if(ve?(xt(ve,"touchend",K),xt(ve,"touchmove",ue),xt(ve,"touchcancel",K),xt(O,"touchstart",uy)):xt(O,"mousemove",ue),xt($e,"touchforcechange",ni),(!uh||!ve)&&(xt(O,"mouseup",K),M&&M.target&&xt(M.target,"mouseup",K)),we=!1,R&&(g=oy=qr(),u.isDragging=!1),ly(Mt),_e&&!B){M&&(xt(M.target,"change",K),u.pointerEvent=T),lh(m,!1),pt(u,"release","onRelease"),pt(u,"click","onClick"),_e=!1;return}for(N=m.length;--N>-1;)Lp(m[N],"cursor",n.cursor||(n.cursor!==!1?jc:null));if(dh--,M){if(z=M.changedTouches,z&&(M=z[0],M!==Be&&M.identifier!==ke)){for(N=z.length;--N>-1&&(M=z[N]).identifier!==ke&&M.target!==t;);if(N<0&&!k)return}u.pointerEvent=T,u.pointerX=M.pageX,u.pointerY=M.pageY}return B&&T?(ni(T),tt=!0,pt(u,"release","onRelease")):T&&!R?(tt=!1,zt&&(n.snap||n.bounds)&&Sr(n.inertia||n.throwProps),pt(u,"release","onRelease"),(!Wc||T.type!=="touchmove")&&T.type.indexOf("cancel")===-1&&(pt(u,"click","onClick"),qr()-S<300&&pt(u,"doubleclick","onDoubleClick"),ee=T.target||t,S=qr(),Z=function(){S!==Gn&&u.enabled()&&!u.isPressed&&!T.defaultPrevented&&(ee.click?ee.click():O.createEvent&&(W=O.createEvent("MouseEvents"),W.initMouseEvent("click",!0,!0,$e,1,u.pointerEvent.screenX,u.pointerEvent.screenY,u.pointerX,u.pointerY,!1,!1,!1,!1,0,null),ee.dispatchEvent(W)))},!Wc&&!T.defaultPrevented&&Ae.delayedCall(.05,Z))):(Sr(n.inertia||n.throwProps),!u.allowEventDefault&&T&&(n.dragClickables!==!1||!C.call(u,T.target))&&R&&(!D||Ye&&D===Ye)&&T.cancelable!==!1?(tt=!0,ni(T)):tt=!1,pt(u,"release","onRelease")),Xn()&&P.duration(u.tween.duration()),R&&pt(u,"dragend","onDragEnd"),!0},Vt=function(M){if(M&&u.isDragging&&!F){var k=M.target||t.parentNode,T=k.scrollLeft-k._gsScrollX,R=k.scrollTop-k._gsScrollY;(T||R)&&(he?(q-=T*he.a+R*he.c,$-=R*he.d+T*he.b):(q-=T,$-=R),k._gsScrollX+=T,k._gsScrollY+=R,Dn(u.pointerX,u.pointerY))}},_n=function(M){var k=qr(),T=k-S<100,R=k-g<50,B=T&&Gn===S,P=u.pointerEvent&&u.pointerEvent.defaultPrevented,z=T&&Je===S,N=M.isTrusted||M.isTrusted==null&&T&&B;if((B||R&&u.vars.suppressClickOnDrag!==!1)&&M.stopImmediatePropagation&&M.stopImmediatePropagation(),T&&!(u.pointerEvent&&u.pointerEvent.defaultPrevented)&&(!B||N&&!z)){N&&B&&(Je=S),Gn=S;return}(u.isPressed||R||T)&&(!N||!M.detail||!T||P)&&ni(M),!T&&!R&&!Wn&&(M&&M.target&&(u.pointerEvent=M),pt(u,"click","onClick"))},wi=function(M){return he?{x:M.x*he.a+M.y*he.c+he.e,y:M.x*he.b+M.y*he.d+he.f}:{x:M.x,y:M.y}};return st=e.get(t),st&&st.kill(),i.startDrag=function(K,M){var k,T,R,B;An(K||u.pointerEvent,!0),M&&!u.hitTest(K||u.pointerEvent)&&(k=Jo(K||u.pointerEvent),T=Jo(t),R=wi({x:k.left+k.width/2,y:k.top+k.height/2}),B=wi({x:T.left+T.width/2,y:T.top+T.height/2}),q-=R.x-B.x,$-=R.y-B.y),u.isDragging||(u.isDragging=Wn=!0,pt(u,"dragstart","onDragStart"))},i.drag=ue,i.endDrag=function(K){return nt(K||u.pointerEvent,!0)},i.timeSinceDrag=function(){return u.isDragging?0:(qr()-g)/1e3},i.timeSinceClick=function(){return(qr()-S)/1e3},i.hitTest=function(K,M){return e.hitTest(u.target,K,M)},i.getDirection=function(K,M){var k=K==="velocity"&&mi?K:Xc(K)&&!a?"element":"start",T,R,B,P,z,N;return k==="element"&&(z=Jo(u.target),N=Jo(K)),T=k==="start"?u.x-j:k==="velocity"?mi.getVelocity(t,c):z.left+z.width/2-(N.left+N.width/2),a?T<0?"counter-clockwise":"clockwise":(M=M||2,R=k==="start"?u.y-V:k==="velocity"?mi.getVelocity(t,l):z.top+z.height/2-(N.top+N.height/2),B=Math.abs(T/R),P=B<1/M?"":T<0?"left":"right",B<M&&(P!==""&&(P+="-"),P+=R<0?"up":"down"),P)},i.applyBounds=function(K,M){var k,T,R,B,P,z;if(K&&n.bounds!==K)return n.bounds=K,u.update(!0,M);if(He(!0),Cn(),Q&&!Xn()){if(k=u.x,T=u.y,k>G?k=G:k<ae&&(k=ae),T>le?T=le:T<ie&&(T=ie),(u.x!==k||u.y!==T)&&(R=!0,u.x=u.endX=k,a?u.endRotation=k:u.y=u.endY=T,we=!0,Mt(!0),u.autoScroll&&!u.isDragging))for(Ip(t.parentNode),B=t,hr.scrollTop=$e.pageYOffset!=null?$e.pageYOffset:O.documentElement.scrollTop!=null?O.documentElement.scrollTop:O.body.scrollTop,hr.scrollLeft=$e.pageXOffset!=null?$e.pageXOffset:O.documentElement.scrollLeft!=null?O.documentElement.scrollLeft:O.body.scrollLeft;B&&!z;)z=na(B.parentNode),P=z?hr:B.parentNode,d&&P.scrollTop>P._gsMaxScrollY&&(P.scrollTop=P._gsMaxScrollY),h&&P.scrollLeft>P._gsMaxScrollX&&(P.scrollLeft=P._gsMaxScrollX),B=P;u.isThrowing&&(R||u.endX>G||u.endX<ae||u.endY>le||u.endY<ie)&&Sr(n.inertia||n.throwProps,R)}return u},i.update=function(K,M,k){if(M&&u.isPressed){var T=pn(t),R=ci.apply({x:u.x-j,y:u.y-V}),B=pn(t.parentNode,!0);B.apply({x:T.e-R.x,y:T.f-R.y},R),u.x-=R.x-B.e,u.y-=R.y-B.f,Mt(!0),li()}var P=u.x,z=u.y;return jn(!M),K?u.applyBounds():(we&&k&&Mt(!0),He(!0)),M&&(Dn(u.pointerX,u.pointerY),we&&Mt(!0)),u.isPressed&&!M&&(h&&Math.abs(P-u.x)>.01||d&&Math.abs(z-u.y)>.01&&!a)&&li(),u.autoScroll&&(Ip(t.parentNode,u.isDragging),_=u.isDragging,Mt(!0),dy(t,Vt),hy(t,Vt)),u},i.enable=function(K){var M={lazy:!0},k,T,R;if(n.cursor!==!1&&(M.cursor=n.cursor||jc),Ae.utils.checkPrefix("touchCallout")&&(M.touchCallout="none"),K!=="soft"){for(ay(m,h===d?"none":n.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"),T=m.length;--T>-1;)R=m[T],uh||Ct(R,"mousedown",An),Ct(R,"touchstart",An),Ct(R,"click",_n,!0),Ae.set(R,M),R.getBBox&&R.ownerSVGElement&&h!==d&&Ae.set(R.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"}),n.allowContextMenu||Ct(R,"contextmenu",dt);lh(m,!1)}return hy(t,Vt),U=!0,mi&&K!=="soft"&&mi.track(F||t,o?"x,y":a?"rotation":"top,left"),t._gsDragID=k=t._gsDragID||"d"+aE++,Qo[k]=u,F&&(F.enable(),F.element._gsDragID=k),(n.bounds||a)&&li(),n.bounds&&u.applyBounds(),u},i.disable=function(K){for(var M=u.isDragging,k=m.length,T;--k>-1;)Lp(m[k],"cursor",null);if(K!=="soft"){for(ay(m,null),k=m.length;--k>-1;)T=m[k],Lp(T,"touchCallout",null),xt(T,"mousedown",An),xt(T,"touchstart",An),xt(T,"click",_n,!0),xt(T,"contextmenu",dt);lh(m,!0),ve&&(xt(ve,"touchcancel",nt),xt(ve,"touchend",nt),xt(ve,"touchmove",ue)),xt(O,"mouseup",nt),xt(O,"mousemove",ue)}return dy(t,Vt),U=!1,mi&&K!=="soft"&&(mi.untrack(F||t,o?"x,y":a?"rotation":"top,left"),u.tween&&u.tween.kill()),F&&F.disable(),ly(Mt),u.isDragging=u.isPressed=_e=!1,M&&pt(u,"dragend","onDragEnd"),u},i.enabled=function(K,M){return arguments.length?K?u.enable(M):u.disable(M):U},i.kill=function(){return u.isThrowing=!1,u.tween&&u.tween.kill(),u.disable(),Ae.set(m,{clearProps:"userSelect"}),delete Qo[t._gsDragID],u},i.revert=function(){this.kill(),this.styles&&this.styles.revert()},~r.indexOf("scroll")&&(F=i.scrollProxy=new _E(t,lE({onKill:function(){u.isPressed&&nt(null)}},n)),t.style.overflowY=d&&!Up?"auto":"hidden",t.style.overflowX=h&&!Up?"auto":"hidden",t=F.content),a?p.rotation=1:(h&&(p[c]=1),d&&(p[l]=1)),E.force3D="force3D"in n?n.force3D:!0,gy(ry(i)),i.enable(),i}return e.register=function(n){Ae=n,Fp()},e.create=function(n,i){return Np||Fp(!0),Zr(n).map(function(r){return new e(r,i)})},e.get=function(n){return Qo[(Zr(n)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(qr()-oy)/1e3},e.hitTest=function(n,i,r){if(n===i)return!1;var o=Jo(n),a=Jo(i),c=o.top,l=o.left,h=o.right,d=o.bottom,f=o.width,u=o.height,m=a.left>h||a.right<l||a.top>d||a.bottom<c,p,g,_;return m||!r?!m:(_=(r+"").indexOf("%")!==-1,r=parseFloat(r)||0,p={left:Math.max(l,a.left),top:Math.max(c,a.top)},p.width=Math.min(h,a.right)-p.left,p.height=Math.min(d,a.bottom)-p.top,p.width<0||p.height<0?!1:_?(r*=.01,g=p.width*p.height,g>=f*u*r||g>=a.width*a.height*r):p.width>r&&p.height>r)},e}(vE);hE(ia.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1});ia.zIndex=1e3;ia.version="3.12.7";vy()&&Ae.registerPlugin(ia);var yE=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,xE=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,SE=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,bE=/(^[#\.][a-z]|[a-y][a-z])/i,ME=Math.PI/180,wE=180/Math.PI,fh=Math.sin,ph=Math.cos,ri=Math.abs,pr=Math.sqrt,EE=Math.atan2,Hp=1e8,by=function(e){return typeof e=="string"},Cy=function(e){return typeof e=="number"},TE=function(e){return typeof e>"u"},CE={},AE={},mh=1e5,Ay=function(e){return Math.round((e+Hp)%1*mh)/mh||(e<0?0:1)},Ue=function(e){return Math.round(e*mh)/mh||0},My=function(e){return Math.round(e*1e10)/1e10||0},wy=function(e,t,n,i){var r=e[t],o=i===1?6:Gp(r,n,i);if((o||!i)&&o+n+2<r.length)return e.splice(t,0,r.slice(0,n+o+2)),r.splice(0,n+o),1},Dy=function(e,t,n){var i=e.length,r=~~(n*i);if(e[r]>t){for(;--r&&e[r]>t;);r<0&&(r=0)}else for(;e[++r]<t&&r<i;);return r<i?r:i-1},DE=function(e,t){var n=e.length;for(t||e.reverse();n--;)e[n].reversed||IE(e[n])},Ey=function(e,t){return t.totalLength=e.totalLength,e.samples?(t.samples=e.samples.slice(0),t.lookup=e.lookup.slice(0),t.minLength=e.minLength,t.resolution=e.resolution):e.totalPoints&&(t.totalPoints=e.totalPoints),t},RE=function(e,t){var n=e.length,i=e[n-1]||[],r=i.length;n&&t[0]===i[r-2]&&t[1]===i[r-1]&&(t=i.concat(t.slice(2)),n--),e[n]=t};function Kc(s){s=by(s)&&bE.test(s)&&document.querySelector(s)||s;var e=s.getAttribute?s:0,t;return e&&(s=s.getAttribute("d"))?(e._gsPath||(e._gsPath={}),t=e._gsPath[s],t&&!t._dirty?t:e._gsPath[s]=Zc(s)):s?by(s)?Zc(s):Cy(s[0])?[s]:s:console.warn("Expecting a <path> element or an SVG path data string")}function PE(s){for(var e=[],t=0;t<s.length;t++)e[t]=Ey(s[t],s[t].slice(0));return Ey(s,e)}function IE(s){var e=0,t;for(s.reverse();e<s.length;e+=2)t=s[e],s[e]=s[e+1],s[e+1]=t;s.reversed=!s.reversed}var LE=function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),i=[].slice.call(e.attributes),r=i.length,o;for(t=","+t+",";--r>-1;)o=i[r].nodeName.toLowerCase(),t.indexOf(","+o+",")<0&&n.setAttributeNS(null,o,i[r].nodeValue);return n},OE={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},FE=function(e,t){for(var n=t?t.split(","):[],i={},r=n.length;--r>-1;)i[n[r]]=+e.getAttribute(n[r])||0;return i};function Ry(s,e){var t=s.tagName.toLowerCase(),n=.552284749831,i,r,o,a,c,l,h,d,f,u,m,p,g,_,b,x,y,v,C,S,E,A;return t==="path"||!s.getBBox?s:(l=LE(s,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),A=FE(s,OE[t]),t==="rect"?(a=A.rx,c=A.ry||a,r=A.x,o=A.y,u=A.width-a*2,m=A.height-c*2,a||c?(p=r+a*(1-n),g=r+a,_=g+u,b=_+a*n,x=_+a,y=o+c*(1-n),v=o+c,C=v+m,S=C+c*n,E=C+c,i="M"+x+","+v+" V"+C+" C"+[x,S,b,E,_,E,_-(_-g)/3,E,g+(_-g)/3,E,g,E,p,E,r,S,r,C,r,C-(C-v)/3,r,v+(C-v)/3,r,v,r,y,p,o,g,o,g+(_-g)/3,o,_-(_-g)/3,o,_,o,b,o,x,y,x,v].join(",")+"z"):i="M"+(r+u)+","+o+" v"+m+" h"+-u+" v"+-m+" h"+u+"z"):t==="circle"||t==="ellipse"?(t==="circle"?(a=c=A.r,d=a*n):(a=A.rx,c=A.ry,d=c*n),r=A.cx,o=A.cy,h=a*n,i="M"+(r+a)+","+o+" C"+[r+a,o+d,r+h,o+c,r,o+c,r-h,o+c,r-a,o+d,r-a,o,r-a,o-d,r-h,o-c,r,o-c,r+h,o-c,r+a,o-d,r+a,o].join(",")+"z"):t==="line"?i="M"+A.x1+","+A.y1+" L"+A.x2+","+A.y2:(t==="polyline"||t==="polygon")&&(f=(s.getAttribute("points")+"").match(xE)||[],r=f.shift(),o=f.shift(),i="M"+r+","+o+" L"+f.join(","),t==="polygon"&&(i+=","+r+","+o+"z")),l.setAttribute("d",Xp(l._gsRawPath=Zc(i))),e&&s.parentNode&&(s.parentNode.insertBefore(l,s),s.parentNode.removeChild(s)),l)}function Py(s,e,t){var n=s[e],i=s[e+2],r=s[e+4],o;return n+=(i-n)*t,i+=(r-i)*t,n+=(i-n)*t,o=i+(r+(s[e+6]-r)*t-i)*t-n,n=s[e+1],i=s[e+3],r=s[e+5],n+=(i-n)*t,i+=(r-i)*t,n+=(i-n)*t,Ue(EE(i+(r+(s[e+7]-r)*t-i)*t-n,o)*wE)}function Wp(s,e,t){t=TE(t)?1:My(t)||0,e=My(e)||0;var n=Math.max(0,~~(ri(t-e)-1e-8)),i=PE(s);if(e>t&&(e=1-e,t=1-t,DE(i),i.totalLength=0),e<0||t<0){var r=Math.abs(~~Math.min(e,t))+1;e+=r,t+=r}i.totalLength||Kr(i);var o=t>1,a=Ty(i,e,CE,!0),c=Ty(i,t,AE),l=c.segment,h=a.segment,d=c.segIndex,f=a.segIndex,u=c.i,m=a.i,p=f===d,g=u===m&&p,_,b,x,y,v,C,S,E;if(o||n){for(_=d<f||p&&u<m||g&&c.t<a.t,wy(i,f,m,a.t)&&(f++,_||(d++,g?(c.t=(c.t-a.t)/(1-a.t),u=0):p&&(u-=m))),Math.abs(1-(t-e))<1e-5?d=f-1:!c.t&&d?d--:wy(i,d,u,c.t)&&_&&f++,a.t===1&&(f=(f+1)%i.length),v=[],C=i.length,S=1+C*n,E=f,S+=(C-f+d)%C,y=0;y<S;y++)RE(v,i[E++%C]);i=v}else if(x=c.t===1?6:Gp(l,u,c.t),e!==t)for(b=Gp(h,m,g?a.t/c.t:a.t),p&&(x+=b),l.splice(u+x+2),(b||m)&&h.splice(0,m+b),y=i.length;y--;)(y<f||y>d)&&i.splice(y,1);else l.angle=Py(l,u+x,0),u+=x,a=l[u],c=l[u+1],l.length=l.totalLength=0,l.totalPoints=i.totalPoints=8,l.push(a,c,a,c,a,c,a,c);return i.totalLength=0,i}function NE(s,e,t){e=e||0,s.samples||(s.samples=[],s.lookup=[]);var n=~~s.resolution||12,i=1/n,r=t?e+t*6+1:s.length,o=s[e],a=s[e+1],c=e?e/6*n:0,l=s.samples,h=s.lookup,d=(e?s.minLength:Hp)||Hp,f=l[c+t*n-1],u=e?l[c-1]:0,m,p,g,_,b,x,y,v,C,S,E,A,I,O,U,F,q;for(l.length=h.length=0,p=e+2;p<r;p+=6){if(g=s[p+4]-o,_=s[p+2]-o,b=s[p]-o,v=s[p+5]-a,C=s[p+3]-a,S=s[p+1]-a,x=y=E=A=0,ri(g)<.01&&ri(v)<.01&&ri(b)+ri(S)<.01)s.length>8&&(s.splice(p,6),p-=6,r-=6);else for(m=1;m<=n;m++)O=i*m,I=1-O,x=y-(y=(O*O*g+3*I*(O*_+I*b))*O),E=A-(A=(O*O*v+3*I*(O*C+I*S))*O),F=pr(E*E+x*x),F<d&&(d=F),u+=F,l[c++]=u;o+=g,a+=v}if(f)for(f-=u;c<l.length;c++)l[c]+=f;if(l.length&&d){if(s.totalLength=q=l[l.length-1]||0,s.minLength=d,q/d<9999)for(F=U=0,m=0;m<q;m+=d)h[F++]=l[U]<m?++U:U}else s.totalLength=l[0]=0;return e?u-l[e/2-1]:u}function Kr(s,e){var t,n,i;for(i=t=n=0;i<s.length;i++)s[i].resolution=~~e||12,n+=s[i].length,t+=NE(s[i]);return s.totalPoints=n,s.totalLength=t,s}function Gp(s,e,t){if(t<=0||t>=1)return 0;var n=s[e],i=s[e+1],r=s[e+2],o=s[e+3],a=s[e+4],c=s[e+5],l=s[e+6],h=s[e+7],d=n+(r-n)*t,f=r+(a-r)*t,u=i+(o-i)*t,m=o+(c-o)*t,p=d+(f-d)*t,g=u+(m-u)*t,_=a+(l-a)*t,b=c+(h-c)*t;return f+=(_-f)*t,m+=(b-m)*t,s.splice(e+2,4,Ue(d),Ue(u),Ue(p),Ue(g),Ue(p+(f-p)*t),Ue(g+(m-g)*t),Ue(f),Ue(m),Ue(_),Ue(b)),s.samples&&s.samples.splice(e/6*s.resolution|0,0,0,0,0,0,0,0),6}function Ty(s,e,t,n){t=t||{},s.totalLength||Kr(s),(e<0||e>1)&&(e=Ay(e));var i=0,r=s[0],o,a,c,l,h,d,f;if(!e)f=d=i=0,r=s[0];else if(e===1)f=1,i=s.length-1,r=s[i],d=r.length-8;else{if(s.length>1){for(c=s.totalLength*e,h=d=0;(h+=s[d++].totalLength)<c;)i=d;r=s[i],l=h-r.totalLength,e=(c-l)/(h-l)||0}o=r.samples,a=r.resolution,c=r.totalLength*e,d=r.lookup.length?r.lookup[~~(c/r.minLength)]||0:Dy(o,c,e),l=d?o[d-1]:0,h=o[d],h<c&&(l=h,h=o[++d]),f=1/a*((c-l)/(h-l)+d%a),d=~~(d/a)*6,n&&f===1&&(d+6<r.length?(d+=6,f=0):i+1<s.length&&(d=f=0,r=s[++i]))}return t.t=f,t.i=d,t.path=s,t.segment=r,t.segIndex=i,t}function jp(s,e,t,n){var i=s[0],r=n||{},o,a,c,l,h,d,f,u,m;if((e<0||e>1)&&(e=Ay(e)),i.lookup||Kr(s),s.length>1){for(c=s.totalLength*e,h=d=0;(h+=s[d++].totalLength)<c;)i=s[d];l=h-i.totalLength,e=(c-l)/(h-l)||0}return o=i.samples,a=i.resolution,c=i.totalLength*e,d=i.lookup.length?i.lookup[e<1?~~(c/i.minLength):i.lookup.length-1]||0:Dy(o,c,e),l=d?o[d-1]:0,h=o[d],h<c&&(l=h,h=o[++d]),f=1/a*((c-l)/(h-l)+d%a)||0,m=1-f,d=~~(d/a)*6,u=i[d],r.x=Ue((f*f*(i[d+6]-u)+3*m*(f*(i[d+4]-u)+m*(i[d+2]-u)))*f+u),r.y=Ue((f*f*(i[d+7]-(u=i[d+1]))+3*m*(f*(i[d+5]-u)+m*(i[d+3]-u)))*f+u),t&&(r.angle=i.totalLength?Py(i,d,f>=1?1-1e-9:f||1e-9):i.angle||0),r}function ra(s,e,t,n,i,r,o){for(var a=s.length,c,l,h,d,f;--a>-1;)for(c=s[a],l=c.length,h=0;h<l;h+=2)d=c[h],f=c[h+1],c[h]=d*e+f*n+r,c[h+1]=d*t+f*i+o;return s._dirty=1,s}function UE(s,e,t,n,i,r,o,a,c){if(!(s===a&&e===c)){t=ri(t),n=ri(n);var l=i%360*ME,h=ph(l),d=fh(l),f=Math.PI,u=f*2,m=(s-a)/2,p=(e-c)/2,g=h*m+d*p,_=-d*m+h*p,b=g*g,x=_*_,y=b/(t*t)+x/(n*n);y>1&&(t=pr(y)*t,n=pr(y)*n);var v=t*t,C=n*n,S=(v*C-v*x-C*b)/(v*x+C*b);S<0&&(S=0);var E=(r===o?-1:1)*pr(S),A=E*(t*_/n),I=E*-(n*g/t),O=(s+a)/2,U=(e+c)/2,F=O+(h*A-d*I),q=U+(d*A+h*I),$=(g-A)/t,j=(_-I)/n,V=(-g-A)/t,Q=(-_-I)/n,oe=$*$+j*j,w=(j<0?-1:1)*Math.acos($/pr(oe)),G=($*Q-j*V<0?-1:1)*Math.acos(($*V+j*Q)/pr(oe*(V*V+Q*Q)));isNaN(G)&&(G=f),!o&&G>0?G-=u:o&&G<0&&(G+=u),w%=u,G%=u;var ae=Math.ceil(ri(G)/(u/4)),le=[],ie=G/ae,Be=4/3*fh(ie/2)/(1+ph(ie/2)),ke=h*t,We=d*t,we=d*-n,st=h*n,Oe;for(Oe=0;Oe<ae;Oe++)i=w+Oe*ie,g=ph(i),_=fh(i),$=ph(i+=ie),j=fh(i),le.push(g-Be*_,_+Be*g,$+Be*j,j-Be*$,$,j);for(Oe=0;Oe<le.length;Oe+=2)g=le[Oe],_=le[Oe+1],le[Oe]=g*ke+_*we+F,le[Oe+1]=g*We+_*st+q;return le[Oe-2]=a,le[Oe-1]=c,le}}function Zc(s){var e=(s+"").replace(SE,function(A){var I=+A;return I<1e-4&&I>-1e-4?0:I}).match(yE)||[],t=[],n=0,i=0,r=2/3,o=e.length,a=0,c="ERROR: malformed path: "+s,l,h,d,f,u,m,p,g,_,b,x,y,v,C,S,E=function(I,O,U,F){b=(U-I)/3,x=(F-O)/3,p.push(I+b,O+x,U-b,F-x,U,F)};if(!s||!isNaN(e[0])||isNaN(e[1]))return console.log(c),t;for(l=0;l<o;l++)if(v=u,isNaN(e[l])?(u=e[l].toUpperCase(),m=u!==e[l]):l--,d=+e[l+1],f=+e[l+2],m&&(d+=n,f+=i),l||(g=d,_=f),u==="M")p&&(p.length<8?t.length-=1:a+=p.length),n=g=d,i=_=f,p=[d,f],t.push(p),l+=2,u="L";else if(u==="C")p||(p=[0,0]),m||(n=i=0),p.push(d,f,n+e[l+3]*1,i+e[l+4]*1,n+=e[l+5]*1,i+=e[l+6]*1),l+=6;else if(u==="S")b=n,x=i,(v==="C"||v==="S")&&(b+=n-p[p.length-4],x+=i-p[p.length-3]),m||(n=i=0),p.push(b,x,d,f,n+=e[l+3]*1,i+=e[l+4]*1),l+=4;else if(u==="Q")b=n+(d-n)*r,x=i+(f-i)*r,m||(n=i=0),n+=e[l+3]*1,i+=e[l+4]*1,p.push(b,x,n+(d-n)*r,i+(f-i)*r,n,i),l+=4;else if(u==="T")b=n-p[p.length-4],x=i-p[p.length-3],p.push(n+b,i+x,d+(n+b*1.5-d)*r,f+(i+x*1.5-f)*r,n=d,i=f),l+=2;else if(u==="H")E(n,i,n=d,i),l+=1;else if(u==="V")E(n,i,n,i=d+(m?i-n:0)),l+=1;else if(u==="L"||u==="Z")u==="Z"&&(d=g,f=_,p.closed=!0),(u==="L"||ri(n-d)>.5||ri(i-f)>.5)&&(E(n,i,d,f),u==="L"&&(l+=2)),n=d,i=f;else if(u==="A"){if(C=e[l+4],S=e[l+5],b=e[l+6],x=e[l+7],h=7,C.length>1&&(C.length<3?(x=b,b=S,h--):(x=S,b=C.substr(2),h-=2),S=C.charAt(1),C=C.charAt(0)),y=UE(n,i,+e[l+1],+e[l+2],+e[l+3],+C,+S,(m?n:0)+b*1,(m?i:0)+x*1),l+=h,y)for(h=0;h<y.length;h++)p.push(y[h]);n=p[p.length-2],i=p[p.length-1]}else console.log(c);return l=p.length,l<6?(t.pop(),l=0):p[0]===p[l-2]&&p[1]===p[l-1]&&(p.closed=!0),t.totalPoints=a+l,t}function Iy(s,e){e===void 0&&(e=1);for(var t=s[0],n=0,i=[t,n],r=2;r<s.length;r+=2)i.push(t,n,s[r],n=(s[r]-t)*e/2,t=s[r],-n);return i}function gh(s,e){ri(s[0]-s[2])<1e-4&&ri(s[1]-s[3])<1e-4&&(s=s.slice(2));var t=s.length-2,n=+s[0],i=+s[1],r=+s[2],o=+s[3],a=[n,i,n,i],c=r-n,l=o-i,h=Math.abs(s[t]-n)<.001&&Math.abs(s[t+1]-i)<.001,d,f,u,m,p,g,_,b,x,y,v,C,S,E,A;for(h&&(s.push(r,o),r=n,o=i,n=s[t-2],i=s[t-1],s.unshift(n,i),t+=4),e=e||e===0?+e:1,u=2;u<t;u+=2)d=n,f=i,n=r,i=o,r=+s[u+2],o=+s[u+3],!(n===r&&i===o)&&(m=c,p=l,c=r-n,l=o-i,g=pr(m*m+p*p),_=pr(c*c+l*l),b=pr(Math.pow(c/_+m/g,2)+Math.pow(l/_+p/g,2)),x=(g+_)*e*.25/b,y=n-(n-d)*(g?x/g:0),v=n+(r-n)*(_?x/_:0),C=n-(y+((v-y)*(g*3/(g+_)+.5)/4||0)),S=i-(i-f)*(g?x/g:0),E=i+(o-i)*(_?x/_:0),A=i-(S+((E-S)*(g*3/(g+_)+.5)/4||0)),(n!==d||i!==f)&&a.push(Ue(y+C),Ue(S+A),Ue(n),Ue(i),Ue(v+C),Ue(E+A)));return n!==r||i!==o||a.length<4?a.push(Ue(r),Ue(o),Ue(r),Ue(o)):a.length-=2,a.length===2?a.push(n,i,n,i,n,i):h&&(a.splice(0,6),a.length=a.length-6),a}function Xp(s){Cy(s[0])&&(s=[s]);var e="",t=s.length,n,i,r,o;for(i=0;i<t;i++){for(o=s[i],e+="M"+Ue(o[0])+","+Ue(o[1])+" C",n=o.length,r=2;r<n;r++)e+=Ue(o[r++])+","+Ue(o[r++])+" "+Ue(o[r++])+","+Ue(o[r++])+" "+Ue(o[r++])+","+Ue(o[r])+" ";o.closed&&(e+="z")}return e}var BE="x,translateX,left,marginLeft,xPercent".split(","),kE="y,translateY,top,marginTop,yPercent".split(","),zE=Math.PI/180,si,Ny,sa,qp,$p,Ly,VE=function(){return si||typeof window<"u"&&(si=window.gsap)&&si.registerPlugin&&si},Jc=function(e,t,n,i){for(var r=t.length,o=i===2?0:i,a=0,c;a<r;a++)e[o]=c=parseFloat(t[a][n]),i===2&&(e[o+1]=0),o+=2;return e},oa=function(e,t,n){return parseFloat(e._gsap.get(e,t,n||"px"))||0},Uy=function(e){var t=e[0],n=e[1],i;for(i=2;i<e.length;i+=2)t=e[i]+=t,n=e[i+1]+=n},Oy=function(e,t,n,i,r,o,a,c,l){if(a.type==="cubic")t=[t];else{a.fromCurrent!==!1&&t.unshift(oa(n,i,c),r?oa(n,r,l):0),a.relative&&Uy(t);var h=r?gh:Iy;t=[h(t,a.curviness)]}return t=o(By(t,n,a)),_h(e,n,i,t,"x",c),r&&_h(e,n,r,t,"y",l),Kr(t,a.resolution||(a.curviness===0?20:12))},HE=function(e){return e},GE=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,Fy=function(e,t,n){var i=pn(e),r=0,o=0,a;return(e.tagName+"").toLowerCase()==="svg"?(a=e.viewBox.baseVal,a.width||(a={width:+e.getAttribute("width"),height:+e.getAttribute("height")})):a=t&&e.getBBox&&e.getBBox(),t&&t!=="auto"&&(r=t.push?t[0]*(a?a.width:e.offsetWidth||0):t.x,o=t.push?t[1]*(a?a.height:e.offsetHeight||0):t.y),n.apply(r||o?i.apply({x:r,y:o}):{x:i.e,y:i.f})},Yp=function(e,t,n,i){var r=pn(e.parentNode,!0,!0),o=r.clone().multiply(pn(t)),a=Fy(e,n,r),c=Fy(t,i,r),l=c.x,h=c.y,d;return o.e=o.f=0,i==="auto"&&t.getTotalLength&&t.tagName.toLowerCase()==="path"&&(d=t.getAttribute("d").match(GE)||[],d=o.apply({x:+d[0],y:+d[1]}),l+=d.x,h+=d.y),d&&(d=o.apply(t.getBBox()),l-=d.x,h-=d.y),o.e=l-a.x,o.f=h-a.y,o},By=function(e,t,n){var i=n.align,r=n.matrix,o=n.offsetX,a=n.offsetY,c=n.alignOrigin,l=e[0][0],h=e[0][1],d=oa(t,"x"),f=oa(t,"y"),u,m,p;return!e||!e.length?Kc("M0,0L0,0"):(i&&(i==="self"||(u=qp(i)[0]||t)===t?ra(e,1,0,0,1,d-l,f-h):(c&&c[2]!==!1?si.set(t,{transformOrigin:c[0]*100+"% "+c[1]*100+"%"}):c=[oa(t,"xPercent")/-100,oa(t,"yPercent")/-100],m=Yp(t,u,c,"auto"),p=m.apply({x:l,y:h}),ra(e,m.a,m.b,m.c,m.d,d+m.e-(p.x-m.e),f+m.f-(p.y-m.f)))),r?ra(e,r.a,r.b,r.c,r.d,r.e,r.f):(o||a)&&ra(e,1,0,0,1,o||0,a||0),e)},_h=function(e,t,n,i,r,o){var a=t._gsap,c=a.harness,l=c&&c.aliases&&c.aliases[n],h=l&&l.indexOf(",")<0?l:n,d=e._pt=new Ny(e._pt,t,h,0,0,HE,0,a.set(t,h,e));d.u=sa(a.get(t,h,o))||0,d.path=i,d.pp=r,e._props.push(h)},WE=function(e,t){return function(n){return e||t!==1?Wp(n,e,t):n}},Zp={version:"3.12.7",name:"motionPath",register:function(e,t,n){si=e,sa=si.utils.getUnit,qp=si.utils.toArray,$p=si.core.getStyleSaver,Ly=si.core.reverting||function(){},Ny=n},init:function(e,t,n){if(!si)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof t=="object"&&!t.style)||!t.path)&&(t={path:t});var i=[],r=t,o=r.path,a=r.autoRotate,c=r.unitX,l=r.unitY,h=r.x,d=r.y,f=o[0],u=WE(t.start,"end"in t?t.end:1),m,p;if(this.rawPaths=i,this.target=e,this.tween=n,this.styles=$p&&$p(e,"transform"),(this.rotate=a||a===0)&&(this.rOffset=parseFloat(a)||0,this.radians=!!t.useRadians,this.rProp=t.rotation||"rotation",this.rSet=e._gsap.set(e,this.rProp,this),this.ru=sa(e._gsap.get(e,this.rProp))||0),Array.isArray(o)&&!("closed"in o)&&typeof f!="number"){for(p in f)!h&&~BE.indexOf(p)?h=p:!d&&~kE.indexOf(p)&&(d=p);h&&d?i.push(Oy(this,Jc(Jc([],o,h,0),o,d,1),e,h,d,u,t,c||sa(o[0][h]),l||sa(o[0][d]))):h=d=0;for(p in f)p!==h&&p!==d&&i.push(Oy(this,Jc([],o,p,2),e,p,0,u,t,sa(o[0][p])))}else m=u(By(Kc(t.path),e,t)),Kr(m,t.resolution),i.push(m),_h(this,e,t.x||"x",m,"x",t.unitX||"px"),_h(this,e,t.y||"y",m,"y",t.unitY||"px");n.vars.immediateRender&&this.render(n.progress(),this)},render:function(e,t){var n=t.rawPaths,i=n.length,r=t._pt;if(t.tween._time||!Ly()){for(e>1?e=1:e<0&&(e=0);i--;)jp(n[i],e,!i&&t.rotate,n[i]);for(;r;)r.set(r.t,r.p,r.path[r.pp]+r.u,r.d,e),r=r._next;t.rotate&&t.rSet(t.target,t.rProp,n[0].angle*(t.radians?zE:1)+t.rOffset+t.ru,t,e)}else t.styles.revert()},getLength:function(e){return Kr(Kc(e)).totalLength},sliceRawPath:Wp,getRawPath:Kc,pointsToSegment:gh,stringToRawPath:Zc,rawPathToString:Xp,transformRawPath:ra,getGlobalMatrix:pn,getPositionOnPath:jp,cacheRawPathMeasurements:Kr,convertToPath:function(e,t){return qp(e).map(function(n){return Ry(n,t!==!1)})},convertCoordinates:function(e,t,n){var i=pn(t,!0,!0).multiply(pn(e));return n?i.apply(n):i},getAlignMatrix:Yp,getRelativePosition:function(e,t,n,i){var r=Yp(e,t,n,i);return{x:r.e,y:r.f}},arrayToRawPath:function(e,t){t=t||{};var n=Jc(Jc([],e,t.x||"x",0),e,t.y||"y",1);return t.relative&&Uy(n),[t.type==="cubic"?n:gh(n,t.curviness)]}};VE()&&si.registerPlugin(Zp);var ky={production:!1,filesUrl:""};var vh=class s{data=Er({experiences:[],technologies:[],recommendations:[],projects:[],points:[],projectTypes:[]});http=H(Pr);jsonUrl="data/";constructor(){this.loadData()}loadData(){return so(this,null,function*(){try{let t=yield(yield fetch(ky.filesUrl+"data/data.json")).json();this.data.set(t)}catch(e){console.error("Error loading data:",e)}})}static \u0275fac=function(t){return new(t||s)};static \u0275prov=ce({token:s,factory:s.\u0275fac,providedIn:"root"})};function Qc(s,e,t){!e&&ug(s);let n=e??H(wr);return t?jt(n,t):n}function zy(s){return function(n={}){var i=n,{injector:e}=i,t=gl(i,["injector"]);return e=Qc(this,e),jt(e,()=>H(s,t))}}function Vy(s,e,t={}){let{deps:n=[],multi:i=!1,extraProviders:r=[],isFunctionValue:o=!1}=t;return(a,c=o)=>{let l;return typeof a<"u"?l={provide:s,useFactory:typeof a=="function"?c?()=>a:a:()=>a,multi:i}:l={provide:s,useFactory:e,deps:n,multi:i},[r,l]}}function Kp(s,e){let t=s.name||s.toString(),n=e??{isRoot:!0};if(n.isRoot??=!0,n.multi&&(n.isRoot=!1),n.isRoot){if(n.token)throw new Error(`createInjectionToken is creating a root InjectionToken but an external token is passed in.
`);let r=new pe(`Token for ${t}`,{factory:()=>n.deps&&Array.isArray(n.deps)?s(...n.deps.map(a=>(a=Array.isArray(a)?a.at(-1):a,H(a)))):s()}),o=zy(r);return[o,Vy(r,s,n),r,()=>({provide:id,useValue:()=>o(),multi:!0})]}let i=n.token||new pe(`Token for ${t}`);return[zy(i),Vy(i,s,n),i,()=>[]]}var Fm="171";var Uh=0,cx=1;var vm=1;var ym=100;var xm=204,Sm=205;var Nm=0,Um=1,Bm=2,ol=3,km=4,zm=5,Vm=6,Hm=7,lx=0;var ux=1015;var Bh=2300,bm=2301,Jp=2302,Hy=2400,Gy=2401,Wy=2402;var hx="",ai="srgb",Mm="srgb-linear",wm="linear",Nh="srgb";var aa=7680;var jy=519;var Xy=35044;var sl=2e3,$y=2001,eo=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var AL=Math.PI/180,jE=180/Math.PI;function Gm(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[s&255]+Qt[s>>8&255]+Qt[s>>16&255]+Qt[s>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function De(s,e,t){return Math.max(e,Math.min(t,s))}function XE(s,e){return(s%e+e)%e}function Qp(s,e,t){return(1-t)*s+t*e}function el(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var tn=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=De(this.x,e.x,t.x),this.y=De(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=De(this.x,e,t),this.y=De(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(De(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(De(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},be=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],p=i[0],g=i[3],_=i[6],b=i[1],x=i[4],y=i[7],v=i[2],C=i[5],S=i[8];return r[0]=o*p+a*b+c*v,r[3]=o*g+a*x+c*C,r[6]=o*_+a*y+c*S,r[1]=l*p+h*b+d*v,r[4]=l*g+h*x+d*C,r[7]=l*_+h*y+d*S,r[2]=f*p+u*b+m*v,r[5]=f*g+u*x+m*C,r[8]=f*_+u*y+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,f=a*c-h*r,u=l*r-o*c,m=t*d+n*f+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/m;return e[0]=d*p,e[1]=(i*l-h*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(h*t-i*c)*p,e[5]=(i*r-a*t)*p,e[6]=u*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(em.makeScale(e,t)),this}rotate(e){return this.premultiply(em.makeRotation(-e)),this}translate(e,t){return this.premultiply(em.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},em=new be;function dx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}var qy=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yy=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $E(){let s={enabled:!0,workingColorSpace:Mm,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Nh&&(i.r=_a(i.r),i.g=_a(i.g),i.b=_a(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Nh&&(i.r=va(i.r),i.g=va(i.g),i.b=va(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hx?wm:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Mm]:{primaries:e,whitePoint:n,transfer:wm,toXYZ:qy,fromXYZ:Yy,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:n,transfer:Nh,toXYZ:qy,fromXYZ:Yy,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}var Hn=$E();function _a(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function va(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var is=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],m=c[9],p=c[2],g=c[6],_=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-p)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+p)<.1&&Math.abs(m+g)<.1&&Math.abs(l+u+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,y=(u+1)/2,v=(_+1)/2,C=(h+f)/4,S=(d+p)/4,E=(m+g)/4;return x>y&&x>v?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=C/n,r=S/n):y>v?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=C/i,r=E/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=S/r,i=E/r),this.set(n,i,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(d-p)*(d-p)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(d-p)/b,this.z=(f-h)/b,this.w=Math.acos((l+u+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=De(this.x,e.x,t.x),this.y=De(this.y,e.y,t.y),this.z=De(this.z,e.z,t.z),this.w=De(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=De(this.x,e,t),this.y=De(this.y,e,t),this.z=De(this.z,e,t),this.w=De(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(De(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var rs=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],m=r[o+2],p=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=u,e[t+2]=m,e[t+3]=p;return}if(d!==p||c!==f||l!==u||h!==m){let g=1-a,_=c*f+l*u+h*m+d*p,b=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){let v=Math.sqrt(x),C=Math.atan2(v,_*b);g=Math.sin(g*C)/v,a=Math.sin(a*C)/v}let y=a*b;if(c=c*g+f*y,l=l*g+u*y,h=h*g+m*y,d=d*g+p*y,g===1-a){let v=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=v,l*=v,h*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return e[t]=a*m+h*d+c*u-l*f,e[t+1]=c*m+h*f+l*d-a*u,e[t+2]=l*m+h*u+a*f-c*d,e[t+3]=h*m-a*d-c*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),f=c(n/2),u=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d+f*u*m;break;case"YZX":this._x=f*h*d+l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d-f*u*m;break;case"XZY":this._x=f*h*d-l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d+f*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(o-i)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-c)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+l)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-l)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(De(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zy.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=De(this.x,e.x,t.x),this.y=De(this.y,e.y,t.y),this.z=De(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=De(this.x,e,t),this.y=De(this.y,e,t),this.z=De(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(De(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tm.copy(this).projectOnVector(e),this.sub(tm)}reflect(e){return this.sub(tm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(De(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tm=new L,Zy=new rs,to=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yh.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yh.copy(n.boundingBox)),yh.applyMatrix4(e.matrixWorld),this.union(yh)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tl),xh.subVectors(this.max,tl),ca.subVectors(e.a,tl),la.subVectors(e.b,tl),ua.subVectors(e.c,tl),Jr.subVectors(la,ca),Qr.subVectors(ua,la),Zs.subVectors(ca,ua);let t=[0,-Jr.z,Jr.y,0,-Qr.z,Qr.y,0,-Zs.z,Zs.y,Jr.z,0,-Jr.x,Qr.z,0,-Qr.x,Zs.z,0,-Zs.x,-Jr.y,Jr.x,0,-Qr.y,Qr.x,0,-Zs.y,Zs.x,0];return!nm(t,ca,la,ua,xh)||(t=[1,0,0,0,1,0,0,0,1],!nm(t,ca,la,ua,xh))?!1:(Sh.crossVectors(Jr,Qr),t=[Sh.x,Sh.y,Sh.z],nm(t,ca,la,ua,xh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},mr=[new L,new L,new L,new L,new L,new L,new L,new L],vi=new L,yh=new to,ca=new L,la=new L,ua=new L,Jr=new L,Qr=new L,Zs=new L,tl=new L,xh=new L,Sh=new L,Ks=new L;function nm(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ks.fromArray(s,r);let a=i.x*Math.abs(Ks.x)+i.y*Math.abs(Ks.y)+i.z*Math.abs(Ks.z),c=e.dot(Ks),l=t.dot(Ks),h=n.dot(Ks);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var qE=new to,nl=new L,im=new L,kh=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qE.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nl.subVectors(e,this.center);let t=nl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(nl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(im.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nl.copy(e.center).add(im)),this.expandByPoint(nl.copy(e.center).sub(im))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},gr=new L,rm=new L,bh=new L,es=new L,sm=new L,Mh=new L,om=new L,Em=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rm.copy(e).add(t).multiplyScalar(.5),bh.copy(t).sub(e).normalize(),es.copy(this.origin).sub(rm);let r=e.distanceTo(t)*.5,o=-this.direction.dot(bh),a=es.dot(this.direction),c=-es.dot(bh),l=es.lengthSq(),h=Math.abs(1-o*o),d,f,u,m;if(h>0)if(d=o*c-a,f=o*a-c,m=r*h,d>=0)if(f>=-m)if(f<=m){let p=1/h;d*=p,f*=p,u=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(rm).addScaledVector(bh,f),u}intersectSphere(e,t){gr.subVectors(e.center,this.origin);let n=gr.dot(this.direction),i=gr.dot(gr)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,n,i,r){sm.subVectors(t,e),Mh.subVectors(n,e),om.crossVectors(sm,Mh);let o=this.direction.dot(om),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,e);let c=a*this.direction.dot(Mh.crossVectors(es,Mh));if(c<0)return null;let l=a*this.direction.dot(sm.cross(es));if(l<0||c+l>o)return null;let h=-a*es.dot(om);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Si=class s{constructor(e,t,n,i,r,o,a,c,l,h,d,f,u,m,p,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,d,f,u,m,p,g)}set(e,t,n,i,r,o,a,c,l,h,d,f,u,m,p,g){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=h,_[10]=d,_[14]=f,_[3]=u,_[7]=m,_[11]=p,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ha.setFromMatrixColumn(e,0).length(),r=1/ha.setFromMatrixColumn(e,1).length(),o=1/ha.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,u=o*d,m=a*h,p=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+m*l,t[5]=f-p*l,t[9]=-a*c,t[2]=p-f*l,t[6]=m+u*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,u=c*d,m=l*h,p=l*d;t[0]=f+p*a,t[4]=m*a-u,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=u*a-m,t[6]=p+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,u=c*d,m=l*h,p=l*d;t[0]=f-p*a,t[4]=-o*d,t[8]=m+u*a,t[1]=u+m*a,t[5]=o*h,t[9]=p-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,u=o*d,m=a*h,p=a*d;t[0]=c*h,t[4]=m*l-u,t[8]=f*l+p,t[1]=c*d,t[5]=p*l+f,t[9]=u*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,u=o*l,m=a*c,p=a*l;t[0]=c*h,t[4]=p-f*d,t[8]=m*d+u,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=u*d+m,t[10]=f-p*d}else if(e.order==="XZY"){let f=o*c,u=o*l,m=a*c,p=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+p,t[5]=o*h,t[9]=u*d-m,t[2]=m*d-u,t[6]=a*h,t[10]=p*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YE,e,ZE)}lookAt(e,t,n){let i=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ts.crossVectors(n,zn),ts.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ts.crossVectors(n,zn)),ts.normalize(),wh.crossVectors(zn,ts),i[0]=ts.x,i[4]=wh.x,i[8]=zn.x,i[1]=ts.y,i[5]=wh.y,i[9]=zn.y,i[2]=ts.z,i[6]=wh.z,i[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],p=n[6],g=n[10],_=n[14],b=n[3],x=n[7],y=n[11],v=n[15],C=i[0],S=i[4],E=i[8],A=i[12],I=i[1],O=i[5],U=i[9],F=i[13],q=i[2],$=i[6],j=i[10],V=i[14],Q=i[3],oe=i[7],w=i[11],G=i[15];return r[0]=o*C+a*I+c*q+l*Q,r[4]=o*S+a*O+c*$+l*oe,r[8]=o*E+a*U+c*j+l*w,r[12]=o*A+a*F+c*V+l*G,r[1]=h*C+d*I+f*q+u*Q,r[5]=h*S+d*O+f*$+u*oe,r[9]=h*E+d*U+f*j+u*w,r[13]=h*A+d*F+f*V+u*G,r[2]=m*C+p*I+g*q+_*Q,r[6]=m*S+p*O+g*$+_*oe,r[10]=m*E+p*U+g*j+_*w,r[14]=m*A+p*F+g*V+_*G,r[3]=b*C+x*I+y*q+v*Q,r[7]=b*S+x*O+y*$+v*oe,r[11]=b*E+x*U+y*j+v*w,r[15]=b*A+x*F+y*V+v*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],u=e[14],m=e[3],p=e[7],g=e[11],_=e[15];return m*(+r*c*d-i*l*d-r*a*f+n*l*f+i*a*u-n*c*u)+p*(+t*c*u-t*l*f+r*o*f-i*o*u+i*l*h-r*c*h)+g*(+t*l*d-t*a*u-r*o*d+n*o*u+r*a*h-n*l*h)+_*(-i*a*h-t*c*d+t*a*f+i*o*d-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],u=e[11],m=e[12],p=e[13],g=e[14],_=e[15],b=d*g*l-p*f*l+p*c*u-a*g*u-d*c*_+a*f*_,x=m*f*l-h*g*l-m*c*u+o*g*u+h*c*_-o*f*_,y=h*p*l-m*d*l+m*a*u-o*p*u-h*a*_+o*d*_,v=m*d*c-h*p*c-m*a*f+o*p*f+h*a*g-o*d*g,C=t*b+n*x+i*y+r*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/C;return e[0]=b*S,e[1]=(p*f*r-d*g*r-p*i*u+n*g*u+d*i*_-n*f*_)*S,e[2]=(a*g*r-p*c*r+p*i*l-n*g*l-a*i*_+n*c*_)*S,e[3]=(d*c*r-a*f*r-d*i*l+n*f*l+a*i*u-n*c*u)*S,e[4]=x*S,e[5]=(h*g*r-m*f*r+m*i*u-t*g*u-h*i*_+t*f*_)*S,e[6]=(m*c*r-o*g*r-m*i*l+t*g*l+o*i*_-t*c*_)*S,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*u+t*c*u)*S,e[8]=y*S,e[9]=(m*d*r-h*p*r-m*n*u+t*p*u+h*n*_-t*d*_)*S,e[10]=(o*p*r-m*a*r+m*n*l-t*p*l-o*n*_+t*a*_)*S,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*u-t*a*u)*S,e[12]=v*S,e[13]=(h*p*i-m*d*i+m*n*f-t*p*f-h*n*g+t*d*g)*S,e[14]=(m*a*i-o*p*i-m*n*c+t*p*c+o*n*g-t*a*g)*S,e[15]=(o*d*i-h*a*i+h*n*c-t*d*c-o*n*f+t*a*f)*S,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,f=r*l,u=r*h,m=r*d,p=o*h,g=o*d,_=a*d,b=c*l,x=c*h,y=c*d,v=n.x,C=n.y,S=n.z;return i[0]=(1-(p+_))*v,i[1]=(u+y)*v,i[2]=(m-x)*v,i[3]=0,i[4]=(u-y)*C,i[5]=(1-(f+_))*C,i[6]=(g+b)*C,i[7]=0,i[8]=(m+x)*S,i[9]=(g-b)*S,i[10]=(1-(f+p))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ha.set(i[0],i[1],i[2]).length(),o=ha.set(i[4],i[5],i[6]).length(),a=ha.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],yi.copy(this);let l=1/r,h=1/o,d=1/a;return yi.elements[0]*=l,yi.elements[1]*=l,yi.elements[2]*=l,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=d,yi.elements[9]*=d,yi.elements[10]*=d,t.setFromRotationMatrix(yi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=sl){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),u,m;if(a===sl)u=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===$y)u=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=sl){let c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(o-r),f=(t+e)*l,u=(n+i)*h,m,p;if(a===sl)m=(o+r)*d,p=-2*d;else if(a===$y)m=r*d,p=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=p,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ha=new L,yi=new Si,YE=new L(0,0,0),ZE=new L(1,1,1),ts=new L,wh=new L,zn=new L,Ky=new Si,Jy=new rs,Wm=(()=>{class s{constructor(t=0,n=0,i=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let r=t.elements,o=r[0],a=r[4],c=r[8],l=r[1],h=r[5],d=r[9],f=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-De(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ky.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ky,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Jy.setFromEuler(this),this.setFromQuaternion(Jy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return s.DEFAULT_ORDER="XYZ",s})(),al=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},KE=0,Qy=new L,da=new rs,_r=new Si,Eh=new L,il=new L,JE=new L,QE=new rs,ex=new L(1,0,0),tx=new L(0,1,0),nx=new L(0,0,1),ix={type:"added"},eT={type:"removed"},fa={type:"childadded",child:null},am={type:"childremoved",child:null},fx=(()=>{class s extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Gm(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,n=new Wm,i=new rs,r=new L(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Si},normalMatrix:{value:new be}}),this.matrix=new Si,this.matrixWorld=new Si,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return da.setFromAxisAngle(t,n),this.quaternion.multiply(da),this}rotateOnWorldAxis(t,n){return da.setFromAxisAngle(t,n),this.quaternion.premultiply(da),this}rotateX(t){return this.rotateOnAxis(ex,t)}rotateY(t){return this.rotateOnAxis(tx,t)}rotateZ(t){return this.rotateOnAxis(nx,t)}translateOnAxis(t,n){return Qy.copy(t).applyQuaternion(this.quaternion),this.position.add(Qy.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ex,t)}translateY(t){return this.translateOnAxis(tx,t)}translateZ(t){return this.translateOnAxis(nx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Eh.copy(t):Eh.set(t,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(il,Eh,this.up):_r.lookAt(Eh,il,this.up),this.quaternion.setFromRotationMatrix(_r),r&&(_r.extractRotation(r.matrixWorld),da.setFromRotationMatrix(_r),this.quaternion.premultiply(da.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ix),fa.child=t,this.dispatchEvent(fa),fa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(eT),am.child=t,this.dispatchEvent(am),am.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_r.multiply(t.parent.matrixWorld)),t.applyMatrix4(_r),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ix),fa.child=t,this.dispatchEvent(fa),fa.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,t,JE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,QE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){let f=l[h];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(o(t.materials,this.material[l]));r.material=c}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];r.animations.push(o(t.animations,l))}}if(n){let c=a(t.geometries),l=a(t.materials),h=a(t.textures),d=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),p=a(t.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(c){let l=[];for(let h in c){let d=c[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}}return s.DEFAULT_UP=new L(0,1,0),s.DEFAULT_MATRIX_AUTO_UPDATE=!0,s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,s})(),xi=new L,vr=new L,cm=new L,yr=new L,pa=new L,ma=new L,rx=new L,lm=new L,um=new L,hm=new L,dm=new is,fm=new is,pm=new is,Qs=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xi.subVectors(i,t),vr.subVectors(n,t),cm.subVectors(e,t);let o=xi.dot(xi),a=xi.dot(vr),c=xi.dot(cm),l=vr.dot(vr),h=vr.dot(cm),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-u-m,m,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,yr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yr.x),c.addScaledVector(o,yr.y),c.addScaledVector(a,yr.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return dm.setScalar(0),fm.setScalar(0),pm.setScalar(0),dm.fromBufferAttribute(e,t),fm.fromBufferAttribute(e,n),pm.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(dm,r.x),o.addScaledVector(fm,r.y),o.addScaledVector(pm,r.z),o}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),vr.subVectors(e,t),xi.cross(vr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),xi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;pa.subVectors(i,n),ma.subVectors(r,n),lm.subVectors(e,n);let c=pa.dot(lm),l=ma.dot(lm);if(c<=0&&l<=0)return t.copy(n);um.subVectors(e,i);let h=pa.dot(um),d=ma.dot(um);if(h>=0&&d<=h)return t.copy(i);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(pa,o);hm.subVectors(e,r);let u=pa.dot(hm),m=ma.dot(hm);if(m>=0&&u<=m)return t.copy(r);let p=u*l-c*m;if(p<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(ma,a);let g=h*m-u*d;if(g<=0&&d-h>=0&&u-m>=0)return rx.subVectors(r,i),a=(d-h)/(d-h+(u-m)),t.copy(i).addScaledVector(rx,a);let _=1/(g+p+f);return o=p*_,a=f*_,t.copy(n).addScaledVector(pa,o).addScaledVector(ma,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Th={h:0,s:0,l:0};function mm(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var bt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Hn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Hn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Hn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Hn.workingColorSpace){if(e=XE(e,1),t=De(t,0,1),n=De(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=mm(o,r,e+1/3),this.g=mm(o,r,e),this.b=mm(o,r,e-1/3)}return Hn.toWorkingColorSpace(this,i),this}setStyle(e,t=ai){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){let n=px[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Hn.fromWorkingColorSpace(en.copy(this),e),Math.round(De(en.r*255,0,255))*65536+Math.round(De(en.g*255,0,255))*256+Math.round(De(en.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Hn.workingColorSpace){Hn.fromWorkingColorSpace(en.copy(this),t);let n=en.r,i=en.g,r=en.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Hn.workingColorSpace){return Hn.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=ai){Hn.fromWorkingColorSpace(en.copy(this),e);let t=en.r,n=en.g,i=en.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Th);let n=Qp(ns.h,Th.h,t),i=Qp(ns.s,Th.s,t),r=Qp(ns.l,Th.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new bt;bt.NAMES=px;var tT=0,Tm=class extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=Gm(),this.name="",this.type="Material",this.blending=vm,this.side=Uh,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xm,this.blendDst=Sm,this.blendEquation=ym,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vm&&(n.blending=this.blending),this.side!==Uh&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xm&&(n.blendSrc=this.blendSrc),this.blendDst!==Sm&&(n.blendDst=this.blendDst),this.blendEquation!==ym&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ol&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jy&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==aa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==aa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==aa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xa=class extends Tm{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wm,this.combine=lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new L,Ch=new tn,xr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xy,this.updateRanges=[],this.gpuType=ux,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ch.fromBufferAttribute(this,t),Ch.applyMatrix3(e),this.setXY(t,Ch.x,Ch.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=el(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=el(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=el(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=el(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=el(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xy&&(e.usage=this.usage),e}};var zh=class extends xr{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Vh=class extends xr{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ya=class extends xr{constructor(e,t,n){super(new Float32Array(e),t,n)}},nT=0,oi=new Si,gm=new fx,ga=new L,Vn=new to,rl=new to,It=new L,cl=class s extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=Gm(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dx(e)?Vh:zh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return gm.lookAt(e),gm.updateMatrix(),this.applyMatrix4(gm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ya(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kh);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];rl.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(Vn.min,rl.min),Vn.expandByPoint(It),It.addVectors(Vn.max,rl.max),Vn.expandByPoint(It)):(Vn.expandByPoint(rl.min),Vn.expandByPoint(rl.max))}Vn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)It.fromBufferAttribute(a,l),c&&(ga.fromBufferAttribute(e,l),It.add(ga)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xr(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new L,c[E]=new L;let l=new L,h=new L,d=new L,f=new tn,u=new tn,m=new tn,p=new L,g=new L;function _(E,A,I){l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,I),f.fromBufferAttribute(r,E),u.fromBufferAttribute(r,A),m.fromBufferAttribute(r,I),h.sub(l),d.sub(l),u.sub(f),m.sub(f);let O=1/(u.x*m.y-m.x*u.y);isFinite(O)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-u.y).multiplyScalar(O),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(O),a[E].add(p),a[A].add(p),a[I].add(p),c[E].add(g),c[A].add(g),c[I].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let E=0,A=b.length;E<A;++E){let I=b[E],O=I.start,U=I.count;for(let F=O,q=O+U;F<q;F+=3)_(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let x=new L,y=new L,v=new L,C=new L;function S(E){v.fromBufferAttribute(i,E),C.copy(v);let A=a[E];x.copy(A),x.sub(v.multiplyScalar(v.dot(A))).normalize(),y.crossVectors(C,A);let O=y.dot(c[E])<0?-1:1;o.setXYZW(E,x.x,x.y,x.z,O)}for(let E=0,A=b.length;E<A;++E){let I=b[E],O=I.start,U=I.count;for(let F=O,q=O+U;F<q;F+=3)S(e.getX(F+0)),S(e.getX(F+1)),S(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let f=0,u=e.count;f<u;f+=3){let m=e.getX(f+0),p=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h),u=0,m=0;for(let p=0,g=c.length;p<g;p++){a.isInterleavedBufferAttribute?u=c[p]*a.data.stride+a.offset:u=c[p]*h;for(let _=0;_<h;_++)f[m++]=l[u++]}return new xr(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let f=l[h],u=e(f,n);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sx=new Si,Js=new Em,Ah=new kh,ox=new L,Dh=new L,Rh=new L,Ph=new L,_m=new L,Ih=new L,ax=new L,Lh=new L,ll=class extends fx{constructor(e=new cl,t=new xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ih.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(_m.fromBufferAttribute(d,e),o?Ih.addScaledVector(_m,h):Ih.addScaledVector(_m.sub(t),h))}t.add(Ih)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ah.copy(n.boundingSphere),Ah.applyMatrix4(r),Js.copy(e.ray).recast(e.near),!(Ah.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Ah,ox)===null||Js.origin.distanceToSquared(ox)>(e.far-e.near)**2))&&(sx.copy(r).invert(),Js.copy(e.ray).applyMatrix4(sx),!(n.boundingBox!==null&&Js.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Js)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,p=f.length;m<p;m++){let g=f[m],_=o[g.materialIndex],b=Math.max(g.start,u.start),x=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let y=b,v=x;y<v;y+=3){let C=a.getX(y),S=a.getX(y+1),E=a.getX(y+2);i=Oh(this,_,e,n,l,h,d,C,S,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,u.start),p=Math.min(a.count,u.start+u.count);for(let g=m,_=p;g<_;g+=3){let b=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);i=Oh(this,o,e,n,l,h,d,b,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,p=f.length;m<p;m++){let g=f[m],_=o[g.materialIndex],b=Math.max(g.start,u.start),x=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let y=b,v=x;y<v;y+=3){let C=y,S=y+1,E=y+2;i=Oh(this,_,e,n,l,h,d,C,S,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,u.start),p=Math.min(c.count,u.start+u.count);for(let g=m,_=p;g<_;g+=3){let b=g,x=g+1,y=g+2;i=Oh(this,o,e,n,l,h,d,b,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function iT(s,e,t,n,i,r,o,a){let c;if(e.side===cx?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Uh,a),c===null)return null;Lh.copy(a),Lh.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Lh);return l<t.near||l>t.far?null:{distance:l,point:Lh.clone(),object:s}}function Oh(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Dh),s.getVertexPosition(c,Rh),s.getVertexPosition(l,Ph);let h=iT(s,e,t,n,Dh,Rh,Ph,ax);if(h){let d=new L;Qs.getBarycoord(ax,Dh,Rh,Ph,d),i&&(h.uv=Qs.getInterpolatedAttribute(i,a,c,l,d,new tn)),r&&(h.uv1=Qs.getInterpolatedAttribute(r,a,c,l,d,new tn)),o&&(h.normal=Qs.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};Qs.getNormal(Dh,Rh,Ph,f.normal),h.face=f,h.barycoord=d}return h}var ul=class s extends cl{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ya(l,3)),this.setAttribute("normal",new ya(h,3)),this.setAttribute("uv",new ya(d,2));function m(p,g,_,b,x,y,v,C,S,E,A){let I=y/S,O=v/E,U=y/2,F=v/2,q=C/2,$=S+1,j=E+1,V=0,Q=0,oe=new L;for(let w=0;w<j;w++){let G=w*O-F;for(let ae=0;ae<$;ae++){let le=ae*I-U;oe[p]=le*b,oe[g]=G*x,oe[_]=q,l.push(oe.x,oe.y,oe.z),oe[p]=0,oe[g]=0,oe[_]=C>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(ae/S),d.push(1-w/E),V+=1}}for(let w=0;w<E;w++)for(let G=0;G<S;G++){let ae=f+G+$*w,le=f+G+$*(w+1),ie=f+(G+1)+$*(w+1),Be=f+(G+1)+$*w;c.push(ae,le,Be),c.push(le,ie,Be),Q+=6}a.addGroup(u,Q,A),u+=Q,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mx(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(s){let e={};for(let t=0;t<s.length;t++){let n=mx(s[t]);for(let i in n)e[i]=n[i]}return e}function Fh(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function rT(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Sa=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Cm=class extends Sa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hy,endingEnd:Hy}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gy:r=e,a=2*t-n;break;case Wy:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gy:o=e,c=2*n-t;break;case Wy:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-t)/(i-t),p=m*m,g=p*m,_=-f*g+2*f*p-f*m,b=(1+f)*g+(-1.5-2*f)*p+(-.5+f)*m+1,x=(-1-u)*g+(1.5+u)*p+.5*m,y=u*g-u*p;for(let v=0;v!==a;++v)r[v]=_*o[h+v]+b*o[l+v]+x*o[c+v]+y*o[d+v];return r}},Am=class extends Sa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*h;return r}},Dm=class extends Sa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},bi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fh(t,this.TimeBufferType),this.values=Fh(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fh(e.times,Array),values:Fh(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Am(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bh:t=this.InterpolantFactoryMethodDiscrete;break;case bm:t=this.InterpolantFactoryMethodLinear;break;case Jp:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bh;case this.InterpolantFactoryMethodLinear:return bm;case this.InterpolantFactoryMethodSmooth:return Jp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&rT(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jp,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let d=a*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let p=t[d+m];if(p!==t[f+m]||p!==t[u+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=bm;var no=class extends bi{constructor(e,t,n){super(e,t,n)}};no.prototype.ValueTypeName="bool";no.prototype.ValueBufferType=Array;no.prototype.DefaultInterpolation=Bh;no.prototype.InterpolantFactoryMethodLinear=void 0;no.prototype.InterpolantFactoryMethodSmooth=void 0;var Rm=class extends bi{};Rm.prototype.ValueTypeName="color";var Pm=class extends bi{};Pm.prototype.ValueTypeName="number";var Im=class extends Sa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)rs.slerpFlat(r,0,o,l-a,o,l,c);return r}},Hh=class extends bi{InterpolantFactoryMethodLinear(e){return new Im(this.times,this.values,this.getValueSize(),e)}};Hh.prototype.ValueTypeName="quaternion";Hh.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends bi{constructor(e,t,n){super(e,t,n)}};io.prototype.ValueTypeName="string";io.prototype.ValueBufferType=Array;io.prototype.DefaultInterpolation=Bh;io.prototype.InterpolantFactoryMethodLinear=void 0;io.prototype.InterpolantFactoryMethodSmooth=void 0;var Lm=class extends bi{};Lm.prototype.ValueTypeName="vector";var jm="\\[\\]\\.:\\/",sT=new RegExp("["+jm+"]","g"),Xm="[^"+jm+"]",oT="[^"+jm.replace("\\.","")+"]",aT=/((?:WC+[\/:])*)/.source.replace("WC",Xm),cT=/(WCOD+)?/.source.replace("WCOD",oT),lT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xm),uT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xm),hT=new RegExp("^"+aT+cT+lT+uT+"$"),dT=["material","materials","bones","map"],Om=class{constructor(e,t,n){let i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=(()=>{class s{constructor(t,n,i){this.path=n,this.parsedPath=i||s.parseTrackName(n),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,n,i):new s(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sT,"")}static parseTrackName(t){let n=hT.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=i.nodeName.substring(r+1);dT.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===n||c.uuid===n)return c;let l=i(c.children);if(l)return l}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[n++]=i[r]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,o=n.propertyIndex;if(t||(t=s.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[r];if(a===void 0){let h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return s.Composite=Om,s})();mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DL=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fm);var bT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MT=`#ifdef USE_ALPHAHASH
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
#endif`,wT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ET=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AT=`#ifdef USE_AOMAP
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
#endif`,DT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RT=`#ifdef USE_BATCHING
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
#endif`,PT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FT=`#ifdef USE_IRIDESCENCE
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
#endif`,NT=`#ifdef USE_BUMPMAP
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
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jT=`#define PI 3.141592653589793
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
} // validated`,XT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$T=`vec3 transformedNormal = objectNormal;
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
#endif`,qT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JT="gl_FragColor = linearToOutputTexel( gl_FragColor );",QT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e1=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l1=`#ifdef USE_GRADIENTMAP
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
}`,u1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f1=`uniform bool receiveShadow;
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
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y1=`PhysicalMaterial material;
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
#endif`,x1=`struct PhysicalMaterial {
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
}`,S1=`
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
#endif`,b1=`#if defined( RE_IndirectDiffuse )
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
#endif`,M1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P1=`#if defined( USE_POINTS_UV )
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
#endif`,I1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`#ifdef USE_MORPHTARGETS
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
#endif`,B1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W1=`#ifdef USE_NORMALMAP
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
#endif`,j1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oC=`float getShadowMask() {
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
}`,aC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cC=`#ifdef USE_SKINNING
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
#endif`,lC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uC=`#ifdef USE_SKINNING
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
#endif`,hC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mC=`#ifdef USE_TRANSMISSION
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
#endif`,gC=`#ifdef USE_TRANSMISSION
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
#endif`,_C=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,SC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bC=`uniform sampler2D t2D;
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
}`,MC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CC=`#include <common>
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
}`,AC=`#if DEPTH_PACKING == 3200
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
}`,DC=`#define DISTANCE
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
}`,RC=`#define DISTANCE
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
}`,PC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LC=`uniform float scale;
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
}`,OC=`uniform vec3 diffuse;
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
}`,FC=`#include <common>
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
}`,NC=`uniform vec3 diffuse;
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
}`,UC=`#define LAMBERT
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
}`,BC=`#define LAMBERT
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
}`,kC=`#define MATCAP
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
}`,zC=`#define MATCAP
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
}`,VC=`#define NORMAL
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
}`,HC=`#define NORMAL
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
}`,GC=`#define PHONG
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
}`,WC=`#define PHONG
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
}`,jC=`#define STANDARD
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
}`,XC=`#define STANDARD
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
}`,$C=`#define TOON
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
}`,qC=`#define TOON
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
}`,YC=`uniform float size;
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
}`,ZC=`uniform vec3 diffuse;
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
}`,KC=`#include <common>
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
}`,JC=`uniform vec3 color;
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
}`,QC=`uniform float rotation;
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
}`,eA=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:bT,alphahash_pars_fragment:MT,alphamap_fragment:wT,alphamap_pars_fragment:ET,alphatest_fragment:TT,alphatest_pars_fragment:CT,aomap_fragment:AT,aomap_pars_fragment:DT,batching_pars_vertex:RT,batching_vertex:PT,begin_vertex:IT,beginnormal_vertex:LT,bsdfs:OT,iridescence_fragment:FT,bumpmap_pars_fragment:NT,clipping_planes_fragment:UT,clipping_planes_pars_fragment:BT,clipping_planes_pars_vertex:kT,clipping_planes_vertex:zT,color_fragment:VT,color_pars_fragment:HT,color_pars_vertex:GT,color_vertex:WT,common:jT,cube_uv_reflection_fragment:XT,defaultnormal_vertex:$T,displacementmap_pars_vertex:qT,displacementmap_vertex:YT,emissivemap_fragment:ZT,emissivemap_pars_fragment:KT,colorspace_fragment:JT,colorspace_pars_fragment:QT,envmap_fragment:e1,envmap_common_pars_fragment:t1,envmap_pars_fragment:n1,envmap_pars_vertex:i1,envmap_physical_pars_fragment:p1,envmap_vertex:r1,fog_vertex:s1,fog_pars_vertex:o1,fog_fragment:a1,fog_pars_fragment:c1,gradientmap_pars_fragment:l1,lightmap_pars_fragment:u1,lights_lambert_fragment:h1,lights_lambert_pars_fragment:d1,lights_pars_begin:f1,lights_toon_fragment:m1,lights_toon_pars_fragment:g1,lights_phong_fragment:_1,lights_phong_pars_fragment:v1,lights_physical_fragment:y1,lights_physical_pars_fragment:x1,lights_fragment_begin:S1,lights_fragment_maps:b1,lights_fragment_end:M1,logdepthbuf_fragment:w1,logdepthbuf_pars_fragment:E1,logdepthbuf_pars_vertex:T1,logdepthbuf_vertex:C1,map_fragment:A1,map_pars_fragment:D1,map_particle_fragment:R1,map_particle_pars_fragment:P1,metalnessmap_fragment:I1,metalnessmap_pars_fragment:L1,morphinstance_vertex:O1,morphcolor_vertex:F1,morphnormal_vertex:N1,morphtarget_pars_vertex:U1,morphtarget_vertex:B1,normal_fragment_begin:k1,normal_fragment_maps:z1,normal_pars_fragment:V1,normal_pars_vertex:H1,normal_vertex:G1,normalmap_pars_fragment:W1,clearcoat_normal_fragment_begin:j1,clearcoat_normal_fragment_maps:X1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:q1,opaque_fragment:Y1,packing:Z1,premultiplied_alpha_fragment:K1,project_vertex:J1,dithering_fragment:Q1,dithering_pars_fragment:eC,roughnessmap_fragment:tC,roughnessmap_pars_fragment:nC,shadowmap_pars_fragment:iC,shadowmap_pars_vertex:rC,shadowmap_vertex:sC,shadowmask_pars_fragment:oC,skinbase_vertex:aC,skinning_pars_vertex:cC,skinning_vertex:lC,skinnormal_vertex:uC,specularmap_fragment:hC,specularmap_pars_fragment:dC,tonemapping_fragment:fC,tonemapping_pars_fragment:pC,transmission_fragment:mC,transmission_pars_fragment:gC,uv_pars_fragment:_C,uv_pars_vertex:vC,uv_vertex:yC,worldpos_vertex:xC,background_vert:SC,background_frag:bC,backgroundCube_vert:MC,backgroundCube_frag:wC,cube_vert:EC,cube_frag:TC,depth_vert:CC,depth_frag:AC,distanceRGBA_vert:DC,distanceRGBA_frag:RC,equirect_vert:PC,equirect_frag:IC,linedashed_vert:LC,linedashed_frag:OC,meshbasic_vert:FC,meshbasic_frag:NC,meshlambert_vert:UC,meshlambert_frag:BC,meshmatcap_vert:kC,meshmatcap_frag:zC,meshnormal_vert:VC,meshnormal_frag:HC,meshphong_vert:GC,meshphong_frag:WC,meshphysical_vert:jC,meshphysical_frag:XC,meshtoon_vert:$C,meshtoon_frag:qC,points_vert:YC,points_frag:ZC,shadow_vert:KC,shadow_frag:JC,sprite_vert:QC,sprite_frag:eA},X={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new tn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new tn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},gx={basic:{uniforms:mn([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:mn([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new bt(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:mn([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:mn([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:mn([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new bt(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:mn([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:mn([X.points,X.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:mn([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:mn([X.common,X.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:mn([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:mn([X.sprite,X.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:mn([X.common,X.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:mn([X.lights,X.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};gx.physical={uniforms:mn([gx.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new tn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new tn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new tn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};var ro=(1+Math.sqrt(5))/2,ba=1/ro,cF=[new L(-ro,ba,0),new L(ro,ba,0),new L(-ba,0,ro),new L(ba,0,ro),new L(0,ro,-ba),new L(0,ro,ba),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];var lF=new Float32Array(16),uF=new Float32Array(9),hF=new Float32Array(4);var dF={[Nm]:Um,[Bm]:Vm,[km]:Hm,[ol]:zm,[Um]:Nm,[Vm]:Bm,[Hm]:km,[zm]:ol};function tA(s){let e={nodes:{},materials:{}};return s&&s.traverse(t=>{t.name&&(e.nodes[t.name]=t),"material"in t&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e}var nA=new Map;var iA=new Set,rA=new Set,sA=new Set;function $m(s,e){if(s.size)for(let{callback:t}of s.values())t(e)}function hl(s,e){switch(s){case"before":return $m(iA,e);case"after":return $m(rA,e);case"tail":return $m(sA,e)}}function qm(s,e,t){let n=e.snapshot,i=n.clock.getDelta();n.frameloop==="never"&&typeof s=="number"&&(i=s-n.clock.elapsedTime,n.clock.oldTime=n.clock.elapsedTime,n.clock.elapsedTime=s);let r=n.internal.subscribers;for(let o=0;o<r.length;o++){let a=r[o];a.callback(At(J({},a.store.snapshot),{delta:i,frame:t}))}return!n.internal.priority&&n.gl.render&&n.gl.render(n.scene,n.camera),n.internal.frames=Math.max(0,n.internal.frames-1),n.frameloop==="always"?1:n.internal.frames}function oA(s){let e=!1,t,n,i=!1;function r(c){n=requestAnimationFrame(r),e=!0,t=0,hl("before",c),i=!0;for(let l of s.values()){let h=l.snapshot;h.internal.active&&(h.frameloop==="always"||h.internal.frames>0)&&!h.gl.xr?.isPresenting&&(t+=qm(c,l))}if(i=!1,hl("after",c),t===0)return hl("tail",c),e=!1,cancelAnimationFrame(n)}function o(c,l=1){let h=c?.snapshot;if(!h)return s.forEach(d=>o(d,l));h.gl.xr?.isPresenting||!h.internal.active||h.frameloop==="never"||(l>1?h.internal.frames=Math.min(60,h.internal.frames+l):i?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(r)))}function a(c,l=!0,h,d){if(l&&hl("before",c),h)qm(c,h,d);else for(let f of s.values())qm(c,f);l&&hl("after",c)}return{loop:r,invalidate:o,advance:a}}var[FF]=Kp(()=>oA(nA));var aA=new pe("NgtStore Token");function cA(s){return H(aA,s)}var vx={};function yx(s){Object.assign(vx,s)}var[NF]=Kp(()=>vx);var UF=new pe("NGT_HTML_DOM_ELEMENT");var dl=new Map,_x=new WeakMap;function lA(s){let e=[];return Array.isArray(s)?e=s:typeof s=="string"?e=[s]:e=Object.values(s),e.map(t=>t.includes("undefined")||t.includes("null")||!t?"":t)}function xx(s,e,{extensions:t,onLoad:n,onProgress:i}={}){return()=>{let r=lA(e()),o=_x.get(s(r));return o||(o=new(s(r)),_x.set(s(r),o)),t&&t(o),r.map(a=>a===""?Promise.resolve(null):(dl.has(a)||dl.set(a,new Promise((c,l)=>{o.load(a,h=>{"scene"in h&&Object.assign(h,tA(h.scene)),n&&n(h),c(h)},i,h=>l(new Error(`[NGT] Could not load ${a}: ${h?.message}`)))})),dl.get(a)))}}function Gh(s,e,{extensions:t,onProgress:n,onLoad:i,injector:r}={}){return Qc(Gh,r,()=>{let o=Er(null),a=xx(s,e,{extensions:t,onProgress:n,onLoad:i});return fo(()=>{let c=e(),l=a();Promise.all(l).then(h=>{o.update(()=>{if(Array.isArray(c))return h;if(typeof c=="string")return h[0];let d=Object.keys(c);return d.reduce((f,u)=>(f[u]=h[d.indexOf(u)],f),{})})})}),o.asReadonly()})}Gh.preload=(s,e,t,n)=>{let i=xx(s,e,{extensions:t,onLoad:n})();i&&Promise.all(i)};Gh.destroy=()=>{dl.clear()};Gh.clear=s=>{(Array.isArray(s)?s:[s]).forEach(t=>{dl.delete(t)})};function Ym(s,{priority:e=0,injector:t}={}){return Qc(Ym,t,()=>{let n=cA(),i=n.get("internal").subscribe(s,e,n);return H(vl).onDestroy(()=>void i()),i})}function Zm(s){return(e,t,n)=>{if(typeof t>"u"||typeof t=="boolean"){n=!!t;let o=e;return Cr(()=>{let a=o();if(!(n&&a==null))return typeof a=="number"?new s().setScalar(a):a?new s(...a):new s},{equal:(a,c)=>!!a&&!!c&&a.equals(c)})}let i=e,r=t;return Cr(()=>{let o=i()[r];if(!(n&&o==null))return typeof o=="number"?new s().setScalar(o):o?new s(...o):new s},{equal:(o,a)=>!!o&&!!a&&o.equals(a)})}}var BF=Zm(tn),kF=Zm(L),zF=Zm(is);var uA=["mesh"];yx({Mesh:ll,BoxGeometry:ul,MeshBasicMaterial:xa});var Wh=class s{meshRef=ld.required("mesh");constructor(){Ym(({delta:e})=>{let t=this.meshRef().nativeElement;t.rotation.x+=e,t.rotation.y+=e})}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=Yn({type:s,selectors:[["ng-component"]],viewQuery:function(t,n){t&1&&wg(n.meshRef,uA,5),t&2&&Eg()},decls:4,vars:0,consts:[["mesh",""],["color","hotpink"]],template:function(t,n){t&1&&(ne(0,"ngt-mesh",null,0),Fe(2,"ngt-box-geometry")(3,"ngt-mesh-basic-material",1),se())},encapsulation:2,changeDetection:0})};var fl=window.matchMedia("(max-width: 767px)").matches;var hA=["projectDescription"],dA=["images"],fA=(s,e)=>({"col-sm-6":s,"col-sm-12":e}),Sx=(s,e)=>e.id;function pA(s,e){if(s&1&&(ne(0,"div",12)(1,"div",17)(2,"div",18)(3,"div",19)(4,"div"),Fe(5,"img",20),se()(),ne(6,"div",21)(7,"div")(8,"h3",22),ze(9),se(),ne(10,"h4",23),ze(11),se()()()()()()),s&2){let t=e.$implicit;Ra("id","screen-"+t.id),Ze(5),Xt("src","images/projectTypes/"+t.name+".svg",lo)("alt",t.name),Ze(4),Li(t.title),Ze(2),Li(t.description)}}function mA(s,e){if(s&1&&(ne(0,"div",28)(1,"a",29),ze(2,"\u05E4\u05EA\u05D7 \u05D0\u05EA\u05E8"),se(),Fe(3,"img",30,3),se()),s&2){let t=pd().$implicit;Ze(),Xt("href",t.link,lo)}}function gA(s,e){if(s&1&&(ne(0,"div",25),Fe(1,"img",26,2),qi(3,mA,5,1,"div",27),se()),s&2){let t=e.$implicit,n=pd().$implicit;Xt("ngClass",Tg(4,fA,t.size=="half",t.size=="full")),Ze(),Xt("src","images/projectTypes/"+n.name+"/"+t.id+".png",lo)("alt",n.name),Ze(2),Xt("ngIf",t.link)}}function _A(s,e){if(s&1&&(ne(0,"div",16,1)(2,"div",7),qi(3,gA,4,7,"div",24),se()()),s&2){let t=e.$implicit;Ra("id","desc-"+t.id),Ze(3),Xt("ngForOf",t.images)}}var Xh=class s{cdr=H(Tr);projectDescriptionElements;projects=hs();lastProjectId=Er(1);images;constructor(){et.registerPlugin(ge),fo(()=>{let e=this.projects();queueMicrotask(()=>{this.cdr.detectChanges(),this.projectDescriptionElements.length>0&&this.setupAnimations()})})}ngOnInit(){}setupAnimations(){this.images.forEach((e,t)=>{et.from(e.nativeElement,{scrollTrigger:{trigger:e.nativeElement,start:"center bottom",end:"center 70%",scrub:!0,toggleActions:"play none none reset"},scale:.8,rotate:5,opacity:.6,duration:1,delay:0}),fl&&et.to(e.nativeElement,{scrollTrigger:{trigger:e.nativeElement,start:"top 300px ",end:"center 300px",scrub:!0,toggleActions:"play none none reset"},opacity:0,duration:1})}),this.lastProjectId.set(1),et.set("#screen-1",{opacity:1,visibility:"visible"}),et.set("#desc-1",{opacity:1}),this.projectDescriptionElements.forEach((e,t)=>{let n=t+1;ge.create({trigger:e.nativeElement,start:"top center",end:"bottom center",onEnter:()=>this.animateProjectChange(n),onEnterBack:()=>this.animateProjectChange(n),markers:!1})})}animateProjectChange(e){console.log("projectid",e),!(e==1&&this.lastProjectId()==1)&&(this.lastProjectId.set(e),et.to(".project-screen",{opacity:0,visibility:"hidden",duration:.5}),et.to(".project-description",{opacity:.3,duration:.5}),et.to(`#screen-${e}`,{opacity:1,visibility:"visible",duration:.5}),et.to(`#desc-${e}`,{opacity:1,duration:.5}),et.fromTo(`#desc-${e}`,{x:50,opacity:0},{x:0,opacity:1,duration:.7,ease:"power2.out"}),et.fromTo(`#screen-${e}`,{scale:1.2},{scale:1,duration:.7}))}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=Yn({type:s,selectors:[["app-projects1"]],viewQuery:function(t,n){if(t&1&&(Ri(hA,5),Ri(dA,5)),t&2){let i;Pi(i=Ii())&&(n.projectDescriptionElements=i),Pi(i=Ii())&&(n.images=i)}},inputs:{projects:[1,"projects"]},decls:17,vars:0,consts:[["projectsContainer",""],["projectDescription",""],["images",""],["recommendationicon",""],[1,"project-showcase","py-5"],[1,"container"],[1,"text-center","mb-5"],[1,"row"],[1,"col-md-6","monitor-wrapper"],[1,"monitor-container"],[1,"monitor-frame"],[1,"monitor-screen"],[1,"project-screen"],[1,"monitor-stand"],[1,"monitor-base"],[1,"col-md-6"],[1,"project-description","mb-5","p-4","special-background"],[1,"project-type-description","text-center"],[1,"row","h-100"],[1,"col-4","d-flex","justify-content-center","align-items-center"],[1,"project-type-icon","img-fluid",3,"src","alt"],[1,"col-8","text-center","screen-description","d-flex","justify-content-center","align-items-center"],[1,"mt-3"],[1,"display0"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"project-type-image","img-fluid",3,"src","alt"],["class","image-link",4,"ngIf"],[1,"image-link"],["target","_blank",3,"href"],["src","icons/arrow-left.svg","width","40","aria-hidden","true"]],template:function(t,n){t&1&&(ne(0,"section",4)(1,"div",5)(2,"h2",6),ze(3,"\u05DE\u05D5\u05DE\u05D7\u05D9\u05D5\u05EA \u05D1\u05DE\u05D2\u05D5\u05D5\u05DF \u05E8\u05D7\u05D1 \u05E9\u05DC \u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8\u05D9\u05DD"),se(),ne(4,"div",7,0)(6,"div",8)(7,"div",9)(8,"div",10)(9,"div",11),dd(10,pA,12,5,"div",12,Sx),se(),Fe(12,"div",13)(13,"div",14),se()()(),ne(14,"div",15),dd(15,_A,4,2,"div",16,Sx),se()()()()),t&2&&(Ze(10),fd(n.projects()),Ze(5),fd(n.projects()))},dependencies:[Tl,vd,Dr,yd],styles:[".project-showcase[_ngcontent-%COMP%]{min-height:1500px}.monitor-wrapper[_ngcontent-%COMP%]{top:35%;position:sticky!important;height:350px}.monitor-wrapper[_ngcontent-%COMP%]   .monitor-container[_ngcontent-%COMP%]{width:100%;height:100%}.monitor-wrapper[_ngcontent-%COMP%]   .monitor-frame[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;display:flex;flex-direction:column;align-items:center}.monitor-wrapper[_ngcontent-%COMP%]   .monitor-screen[_ngcontent-%COMP%]{width:90%;aspect-ratio:2;background:#000;border-radius:8px;padding:10px;overflow:hidden;position:relative;box-shadow:0 10px 25px #0003}.monitor-wrapper[_ngcontent-%COMP%]   .project-screen[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;opacity:0;visibility:hidden;background-color:var(--color8)}.monitor-wrapper[_ngcontent-%COMP%]   .project-screen[_ngcontent-%COMP%]   .project-type-description[_ngcontent-%COMP%]{position:absolute;width:90%;height:90%;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:3px}.monitor-wrapper[_ngcontent-%COMP%]   .project-screen[_ngcontent-%COMP%]   .project-type-description[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{background:linear-gradient(53deg,#000,#141414,#242424)}.monitor-wrapper[_ngcontent-%COMP%]   .project-screen[_ngcontent-%COMP%]   .project-type-description[_ngcontent-%COMP%]   .screen-description[_ngcontent-%COMP%]{position:relative}.monitor-wrapper[_ngcontent-%COMP%]   .project-screen[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:top}.monitor-wrapper[_ngcontent-%COMP%]   .monitor-stand[_ngcontent-%COMP%]{width:20%;height:10%;background:#333;margin-top:-5px}.monitor-wrapper[_ngcontent-%COMP%]   .monitor-base[_ngcontent-%COMP%]{width:40%;height:2%;background:#222;border-radius:50% 50% 0 0;margin-top:2px}@media only screen and (max-width: 992px){.monitor-wrapper[_ngcontent-%COMP%]{top:20px;transform:translateY(0)}.screen-description[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.75rem}}.project-description[_ngcontent-%COMP%]{text-align:center;opacity:.3}.project-description[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{align-items:center}.project-description[_ngcontent-%COMP%]   .project-type-image[_ngcontent-%COMP%]{margin-bottom:2rem;border-radius:5px}.project-description[_ngcontent-%COMP%]   .image-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.project-description[_ngcontent-%COMP%]   .image-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:all .3s ease-in}.project-description[_ngcontent-%COMP%]   .image-link[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:translate(-5px)}"]})};function vA(s,e){if(s&1&&(bg(0),ne(1,"div",10)(2,"div",11)(3,"div",12)(4,"div")(5,"h5",13),ze(6),se(),ne(7,"p",14),ze(8),se()()()()(),Mg()),s&2){let t=e.$implicit,n=e.index;Ze(),hd("active",n===0),Ze(5),Li(t.name),Ze(2),Li(t.description)}}function yA(s,e){if(s&1&&Fe(0,"button",15),s&2){let t=e.index;hd("active",t===0),Ra("data-bs-slide-to",t)("aria-label","Slide "+(t+1))}}var $h=class s{recommendations=hs([]);static \u0275fac=function(t){return new(t||s)};static \u0275cmp=Yn({type:s,selectors:[["app-recommendations"]],inputs:{recommendations:[1,"recommendations"]},decls:13,vars:2,consts:[["id","recCarousel","data-bs-ride","carousel","data-bs-touch","true","data-bs-interval","8000",1,"carousel","slide"],[1,"carousel-inner"],[4,"ngFor","ngForOf"],["type","button","data-bs-target","#recCarousel","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#recCarousel","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"carousel-indicators"],["type","button","data-bs-target","#recCarousel","aria-current","i === 0 ? 'true' : undefined",3,"active",4,"ngFor","ngForOf"],[1,"carousel-item","special-background8"],[1,"card","shadow","mx-auto","rec-card"],[1,"card-body","text-center","p-4","special-background9","d-flex","justify-content-center","align-items-center"],[1,"card-title","mb-1","color1"],[1,"card-text"],["type","button","data-bs-target","#recCarousel","aria-current","i === 0 ? 'true' : undefined"]],template:function(t,n){t&1&&(ne(0,"div",0)(1,"div",1),qi(2,vA,9,4,"ng-container",2),se(),ne(3,"button",3),Fe(4,"span",4),ne(5,"span",5),ze(6,"Previous"),se()(),ne(7,"button",6),Fe(8,"span",7),ne(9,"span",5),ze(10,"Next"),se()(),ne(11,"div",8),qi(12,yA,1,4,"button",9),se()()),t&2&&(Ze(2),Xt("ngForOf",n.recommendations()),Ze(10),Xt("ngForOf",n.recommendations()))},dependencies:[Dr],styles:[".carousel-item[_ngcontent-%COMP%]{background:none}.carousel-item[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{white-space:pre-line;font-size:1.5rem}.carousel-item[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{color:var(--color1);font-size:2rem}.carousel-item[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{margin:0 auto;width:80%}#recCarousel[_ngcontent-%COMP%]{min-width:100%}.rec-card[_ngcontent-%COMP%]{border:none;border-radius:1rem;background:none;min-height:50vh}.carousel[_ngcontent-%COMP%]{border-radius:28px;overflow:hidden;border:7px solid var(--color2)}.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%]{filter:drop-shadow(0 0 2px rgba(0,0,0,.6))}.carousel-indicators[_ngcontent-%COMP%]{display:none}"]})};var xA=["coffeeText"],SA=["recommendationicon"],bA=["recommendationsElement"],MA=["box"],wA=["titles"],EA=["points"];function TA(s,e){if(s&1&&(ne(0,"div",52,4)(2,"div",53),Fe(3,"img",54),ne(4,"div",55)(5,"h5",56),ze(6),se(),ne(7,"p",57),ze(8),se()()()()),s&2){let t=e.$implicit;Ze(3),Xt("src","icons/"+t.name+".svg",lo)("alt",t.title),Ze(3),Li(t.title),Ze(2),Li(t.description)}}function CA(s,e){if(s&1&&(ne(0,"div",58,5)(2,"div"),ze(3),se()()),s&2){let t=e.$implicit;Ze(3),Li(t)}}var qh=class s{dataService=H(vh);translateService=H(Es);cdr=H(Tr);skills=Cr(()=>this.dataService.data().technologies);projectTypes=Cr(()=>this.dataService.data().projectTypes);points=Cr(()=>this.dataService.data().points);recommendations=Cr(()=>this.dataService.data().recommendations);loaded=Er(!1);boxes;coffeeText;titles;pointElements;recommendationIcon;recommendationsElement;sceneGraph=Wh;ngOnInit(){et.registerPlugin(ge,ia,Zp)}constructor(){fo(()=>{let e=this.points();queueMicrotask(()=>{this.cdr.detectChanges(),this.pointElements.length>0&&(this.loaded.set(!0),this.initGsap())})})}ngAfterViewInit(){}initGsap(){this.titles.forEach((t,n)=>{et.set(t.nativeElement,{opacity:0}),setTimeout(()=>{let i=et.timeline();i.to(t.nativeElement,{duration:1,y:30,opacity:0}),i.to(t.nativeElement,{duration:1,y:0,opacity:1})},n*200)}),this.boxes.forEach((t,n)=>{et.from(t.nativeElement,{scrollTrigger:{trigger:t.nativeElement,start:"center bottom",end:"center 70%",scrub:!0,toggleActions:"play none none reset"},scale:.8,rotate:5,opacity:.6,duration:1,delay:29})}),this.pointElements.forEach((t,n)=>{fl||et.to(t.nativeElement,{scrollTrigger:{trigger:t.nativeElement,start:"top 30%",end:"bottom top",scrub:!0,toggleActions:"play none none reset"},opacity:.5,y:-n*50-50,duration:1});let i=et.timeline({scrollTrigger:{trigger:t.nativeElement,start:"top bottom",toggleActions:"play none none none",once:!0}});i.from(t.nativeElement,{duration:1,scale:.6,opacity:0,delay:0+n*.1}),i.call(()=>{let r=t.nativeElement.querySelector(".card");r&&(console.log("shwoing border"),r.classList.add("show-border"),setTimeout(()=>{r.classList.remove("show-border")},3e3))},void 0,void 0)}),et.set(this.coffeeText.nativeElement,{x:-100}),et.timeline({scrollTrigger:{trigger:this.coffeeText.nativeElement,start:"top 100%",toggleActions:"play none none reset"}}).to(this.coffeeText.nativeElement,{delay:.5,duration:1,x:0}),fl||(et.from(this.recommendationIcon.nativeElement,{scrollTrigger:{trigger:this.recommendationIcon.nativeElement,start:"center bottom",end:"center 70%",scrub:!0,toggleActions:"play none none reset"},scale:.8,x:200,rotate:20,duration:1}),et.from(this.recommendationsElement.nativeElement,{scrollTrigger:{trigger:this.recommendationsElement.nativeElement,start:"center bottom",end:"center 70%",scrub:!0,toggleActions:"play none none reset"},scale:.8,x:-200,rotate:-20,duration:1}))}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=Yn({type:s,selectors:[["app-home"]],viewQuery:function(t,n){if(t&1&&(Ri(xA,5),Ri(SA,5),Ri(bA,5),Ri(MA,5),Ri(wA,5),Ri(EA,5)),t&2){let i;Pi(i=Ii())&&(n.coffeeText=i.first),Pi(i=Ii())&&(n.recommendationIcon=i.first),Pi(i=Ii())&&(n.recommendationsElement=i.first),Pi(i=Ii())&&(n.boxes=i),Pi(i=Ii())&&(n.titles=i),Pi(i=Ii())&&(n.pointElements=i)}},decls:78,vars:4,consts:[["titles",""],["recommendationsElement",""],["recommendationicon",""],["coffeeText",""],["points",""],["box",""],[1,"first-section","container-fluid","text-center"],[1,"container","h-100"],[1,"row","h-100"],[1,"logo","col-sm-6","d-flex","justify-content-center","align-items-center"],["src","gray1.mp4","onloadedmetadata","this.muted = true","autoplay","","muted","","loop","","playsinline","","preload","auto",1,"square-video"],[1,"col-sm-6","d-flex","justify-content-center","align-items-center","flex-column","logo-section"],[1,"logo-container"],["src","images/newlogo2 - Copy.png","width","200"],[1,"d-flex","flex-row","justify-content-center","align-items-center"],["width","30px","src","images/right.png",1,"brackets","right"],[1,"bold","name","d-inline","quicksend-font"],["src","images/left.png","width","30px",1,"brackets","left"],[1,"d-none"],["aria-hidden","true",1,"d-none"],[1,"title","mt-3","special-background"],[1,"highlights","py-5","points-section"],[1,"container"],[1,"row"],["class","col-md-4 mb-4",4,"ngFor","ngForOf"],[1,"container","d-none3"],[1,"projects-list"],[3,"projects"],[1,"container","text-center"],[1,"text-center"],["src","icons/stars.svg","width","100"],[1,"d-flex","flex-row","tools-list"],["class","box",4,"ngFor","ngForOf"],[1,"container","text-center","mt-5"],[1,"row","recommendations-row"],[1,"col-sm-8"],[3,"recommendations"],[1,"col-sm-4"],["src","icons/recommendations.svg","aria-hidden","true",1,"img","img-fluid"],[1,"contact-section","mb-3"],[1,"d-flex","flex-row","justify-content-center","align-items-center","special-background"],[1,"row","w-100","d-flex","justify-content-center","align-items-center"],[1,"contact-card","w-100"],["src","icons/coffee-mug.svg","width","100","aria-hidden","true"],[1,"coffee-text","text-center"],[1,"contact-details"],["src","icons/email.svg","width","70","aria-hidden","true"],["aria-label","\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC",1,"display-6"],["src","icons/phone.svg","width","70","aria-hidden","true"],["aria-label","\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF",1,"display-6"],[1,"text-center","special-background","container"],["_ngcontent-vgr-c14","","src","favicon.ico","alt","Rivky Rubin","width","30px"],[1,"col-md-4","mb-4"],[1,"card","shadow-sm","text-center","h-100"],[1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"box"]],template:function(t,n){t&1&&(ne(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9),Fe(4,"video",10),se(),ne(5,"div",11)(6,"div",12),Fe(7,"img",13),se(),ne(8,"div",14),Fe(9,"img",15),ne(10,"span",16),ze(11,"Rivky Rubin"),se(),Fe(12,"img",17),se(),ne(13,"h1",18),ze(14,"\u05E8\u05D1\u05E7\u05D9 \u05E8\u05D5\u05D1\u05D9\u05DF"),se(),ne(15,"h2",19),ze(16,"\u05E4\u05D9\u05EA\u05D5\u05D7 \u05EA\u05D5\u05DB\u05E0\u05D5\u05EA \u05D5\u05D0\u05EA\u05E8\u05D9\u05DD"),se(),ne(17,"div",20)(18,"span",null,0),ze(20,"\u05E4\u05D9\u05EA\u05D5\u05D7"),se(),ne(21,"span",null,0),ze(23,"\u05EA\u05D5\u05DB\u05E0\u05D5\u05EA"),se(),ne(24,"span",null,0),ze(26,"\u05D5\u05D0\u05EA\u05E8\u05D9\u05DD"),se()()()()()(),ne(27,"section",21)(28,"div",22)(29,"div",23),qi(30,TA,9,4,"div",24),se()()(),ne(31,"section")(32,"div",25)(33,"div",26),Fe(34,"app-projects1",27),se()()(),ne(35,"div",28)(36,"div",29),Fe(37,"img",30),se(),ne(38,"h3"),ze(39,"\u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D5\u05EA \u05DE\u05D5\u05D1\u05D9\u05DC\u05D5\u05EA"),se(),ne(40,"div",31),qi(41,CA,4,1,"div",32),se()(),ne(42,"section",33)(43,"h2"),ze(44,"\u05D4\u05DE\u05DC\u05E6\u05D5\u05EA"),se(),ne(45,"div",34)(46,"div",35,1),Fe(48,"app-recommendations",36),se(),ne(49,"div",37),Fe(50,"img",38,2),se()()(),ne(52,"section",39)(53,"div",22)(54,"div",40)(55,"div",41)(56,"div",35)(57,"div",42),Fe(58,"img",43),ne(59,"div",44,3),ze(61," \u05E9\u05EA\u05D5 \u05E7\u05E4\u05D4 \u05D1\u05E0\u05D7\u05EA -"),Fe(62,"br"),ze(63," \u05D5\u05D0\u05E4\u05EA\u05D7 \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E0\u05E6\u05D7\u05EA "),se(),ne(64,"div",45)(65,"div"),Fe(66,"img",46),ne(67,"span",47),ze(68," rivkyrubin2@gmail.com "),se()(),ne(69,"div"),Fe(70,"img",48),ne(71,"span",49),ze(72,"052-717-8860"),se()()()()()()()()(),ne(73,"section")(74,"div",50),ze(75," \xA9 \u05E2\u05D9\u05E6\u05D5\u05D1 \u05D5\u05E4\u05D9\u05EA\u05D5\u05D7 "),Fe(76,"img",51),ze(77," Rivky Rubin "),se()()),t&2&&(Ze(30),Xt("ngForOf",n.points()),Ze(4),Xt("projects",n.projectTypes()),Ze(7),Xt("ngForOf",n.skills()),Ze(7),Xt("recommendations",n.recommendations()))},dependencies:[Dr,n_,Xh,$h],styles:['@charset "UTF-8";.tools-list[_ngcontent-%COMP%]{color:var(--color7);gap:1rem;padding:1rem;flex-wrap:wrap;justify-content:center}.tools-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{text-align:center;width:150px;height:150px;justify-content:center;align-items:center;display:flex;border-radius:10px;background-color:var(--bg2Color);transition:all .3s ease-in}.tools-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover{background-color:var(--bg3Color)}.first-section[_ngcontent-%COMP%]{height:70vh;background-color:#161614}.first-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{padding:35px}.first-section[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:4rem;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;color:var(--color7)}.first-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:5rem;line-height:1;display:flex;text-align:center;justify-content:center;flex-direction:row;gap:1rem;margin-top:2rem}.first-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:0}.first-section[_ngcontent-%COMP%]   .title.special-backgruond[_ngcontent-%COMP%]{z-index:0}.first-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-family:TelAviv!important}.main-title[_ngcontent-%COMP%]{font-size:5rem}@media only screen and (max-width: 992px){.first-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.first-section[_ngcontent-%COMP%]{height:auto;padding:15px 0}.first-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex-direction:column;font-size:4rem;gap:0}.logo-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;margin-bottom:-45px}.logo-section[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:2rem}}.card[_ngcontent-%COMP%]{background-color:var(--gray4)!important;border:none;position:relative;margin:4px}.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{white-space:pre-line}.card[_ngcontent-%COMP%]:hover   .card-img-top[_ngcontent-%COMP%]{filter:saturate(3);transform:scale(1.1)}.card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{width:auto;height:130px;margin:1rem auto;transition:all .3s ease-in}.recommendations-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:-50px;margin-bottom:-40px}.recommendations-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:var(--gray4)}.recommendations-section[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{white-space:pre-line}@property --gradient-angle{syntax: "<angle>"; initial-value: 0deg; inherits: false;}.card[_ngcontent-%COMP%]{--clr-1: #052b2f;--clr-2: #073438;--clr-3: #0e4b50;--clr-4: #2d8f85;--clr-5: #637c54;position:relative}.card[_ngcontent-%COMP%]:hover:before, .card[_ngcontent-%COMP%]:hover:after{opacity:1}.card.show-border[_ngcontent-%COMP%]:before, .card.show-border[_ngcontent-%COMP%]:after{opacity:1}.card[_ngcontent-%COMP%]:before, .card[_ngcontent-%COMP%]:after{opacity:0;content:"";position:absolute;inset:0;z-index:-1;transition:all .5s;background:conic-gradient(from var(--gradient-angle),var(--color8),var(--color1),var(--color8),var(--color8),var(--color8));border-radius:inherit;animation:rotation 4s linear infinite}.card[_ngcontent-%COMP%]:after{filter:blur(.3rem)}.contact-section[_ngcontent-%COMP%]   .coffee-text[_ngcontent-%COMP%]{font-size:3rem}.contact-section[_ngcontent-%COMP%]   .special-background[_ngcontent-%COMP%]:before{animation-duration:100s;opacity:.01}.contact-section[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]{border-radius:28px;overflow:hidden;border:7px solid var(--color2);min-height:50vh;margin-top:5rem;display:flex;justify-content:center;align-items:center;flex-direction:column}a[_ngcontent-%COMP%]{color:var(--color7)!important}.monitor-img[_ngcontent-%COMP%]{width:100%}.monitor[_ngcontent-%COMP%]{width:100%;aspect-ratio:2;overflow-y:scroll;border:solid 1em #333;border-radius:.5em}.stand[_ngcontent-%COMP%]{padding-bottom:51px}.monitor[_ngcontent-%COMP%]::-webkit-scrollbar{width:15px}.monitor[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#666}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#888}.stand[_ngcontent-%COMP%]:before{content:"";display:block;position:relative;background:#222;width:150px;height:50px;top:382px;right:50%;transform:translate(50%)}.stand[_ngcontent-%COMP%]:after{content:"";display:block;position:relative;background:#333;border-top-left-radius:.5em;border-top-right-radius:.5em;width:300px;height:15px;top:50px;right:50%;transform:translate(50%)}.splash-screen[_ngcontent-%COMP%]{width:100vw;height:100vh;position:absolute;top:0;right:0;background-color:var(--color7)}.square-video[_ngcontent-%COMP%]{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;border-radius:50px 50px 28% 20%;opacity:.6}@media only screen and (max-width: 576px){.logo-section[_ngcontent-%COMP%]{margin-top:-50px;z-index:1}.logo-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2rem}.first-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:3rem}.contact-card[_ngcontent-%COMP%]   .coffee-text[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:1rem}.contact-card[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .display-6[_ngcontent-%COMP%]{font-size:1rem}.contact-card[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}.tools-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{width:75px;height:75px}.recommendations-row[_ngcontent-%COMP%]{flex-direction:column-reverse}}']})};var bx=[{path:"",component:qh}];var AA="@",DA=(()=>{class s{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=H(wr);loadingSchedulerFn=H(RA,{optional:!0});_engine;constructor(t,n,i,r,o){this.doc=t,this.delegate=n,this.zone=i,this.animationType=r,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-SDUP5V2Q.js").then(i=>i),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(i=>{throw new Le(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:r})=>{this._engine=i(this.animationType,this.doc);let o=new r(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(t,n){let i=this.delegate.createRenderer(t,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let r=new Km(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let a=o.createRenderer(t,n);r.use(a),this.scheduler??=this.injector.get(hg,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{r.use(i)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(n){_g()};static \u0275prov=ce({token:s,factory:s.\u0275fac})}return s})(),Km=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,i){this.delegate.insertBefore(e,t,n,i)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,i){this.delegate.setAttribute(e,t,n,i)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,i){this.delegate.setStyle(e,t,n,i)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n,i){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,n,i)),this.delegate.listen(e,t,n,i)}shouldReplay(e){return this.replay!==null&&e.startsWith(AA)}},RA=new pe("");function Mx(s="animations"){return gg("NgAsyncAnimations"),Xi([{provide:Da,useFactory:(e,t,n)=>new DA(e,t,n,s),deps:[gt,Na,Di]},{provide:pg,useValue:s==="noop"?"NoopAnimations":"BrowserAnimations"}])}function PA(s){return new i_(s,"i18n/",".json")}var wx={providers:[Ag({eventCoalescing:!0}),tf(bx),Mx(),Pd(),t_({loader:{provide:Qi,useFactory:PA,deps:[Pr]},defaultLanguage:"en"})]};var Yh=class s{title="portfolio";translate=H(Es);constructor(){this.translate.addLangs(["he","en"]),this.translate.currentLang="he",this.translate.setDefaultLang("he")}translateLanguageTo(e){this.translate.use(e)}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=Yn({type:s,selectors:[["app-root"]],decls:8,vars:0,consts:[["scrollableElement",""],[1,"d-flex","flex-column","vh-100"],[1,"flex-header","d-none"],[1,"flex-grow-1","d-flex","content-wrapper"],[1,"container-fluid","layout-container","layout-page","scroll-container","p-0"],[1,"footer"]],template:function(t,n){t&1&&(ne(0,"div",1)(1,"div",2),ze(2," app navbar "),se(),ne(3,"div",3)(4,"div",4,0),Fe(6,"router-outlet"),se()(),Fe(7,"div",5),se())},dependencies:[rc],encapsulation:2})};Ad(Yh,wx).catch(s=>console.error(s));
