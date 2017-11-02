(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function(e,t){"use strict";function Ht(){var e=wt.splice(0,wt.length);Et=0;while(e.length)e.shift().call(null,e.shift())}function Bt(e,t){for(var n=0,r=e.length;n<r;n++)Jt(e[n],t)}function jt(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],Pt(r,A[It(r)])}function Ft(e){return function(t){ut(t)&&(Jt(t,e),O.length&&Bt(t.querySelectorAll(O),e))}}function It(e){var t=ht.call(e,"is"),n=e.nodeName.toUpperCase(),r=_.call(L,t?N+t.toUpperCase():T+n);return t&&-1<r&&!qt(n,t)?-1:r}function qt(e,t){return-1<O.indexOf(e+'[is="'+t+'"]')}function Rt(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target,s=e[y]||2,o=e[w]||3;kt&&(!i||i===t)&&t[h]&&r!=="style"&&(e.prevValue!==e.newValue||e.newValue===""&&(n===s||n===o))&&t[h](r,n===s?null:e.prevValue,n===o?null:e.newValue)}function Ut(e){var t=Ft(e);return function(e){wt.push(t,e.target),Et&&clearTimeout(Et),Et=setTimeout(Ht,1)}}function zt(e){Ct&&(Ct=!1,e.currentTarget.removeEventListener(S,zt)),O.length&&Bt((e.target||n).querySelectorAll(O),e.detail===l?l:a),st&&Vt()}function Wt(e,t){var n=this;vt.call(n,e,t),Lt.call(n,{target:n})}function Xt(e,t){nt(e,t),Mt?Mt.observe(e,yt):(Nt&&(e.setAttribute=Wt,e[o]=Ot(e),e[u](x,Lt)),e[u](E,Rt)),e[m]&&kt&&(e.created=!0,e[m](),e.created=!1)}function Vt(){for(var e,t=0,n=at.length;t<n;t++)e=at[t],M.contains(e)||(n--,at.splice(t--,1),Jt(e,l))}function $t(e){throw new Error("A "+e+" type is already registered")}function Jt(e,t){var n,r=It(e),i;-1<r&&(Dt(e,A[r]),r=0,t===a&&!e[a]?(e[l]=!1,e[a]=!0,i="connected",r=1,st&&_.call(at,e)<0&&at.push(e)):t===l&&!e[l]&&(e[a]=!1,e[l]=!0,i="disconnected",r=1),r&&(n=e[t+f]||e[i+f])&&n.call(e))}function Kt(){}function Qt(e,t,r){var i=r&&r[c]||"",o=t.prototype,u=tt(o),a=t.observedAttributes||j,f={prototype:u};ot(u,m,{value:function(){if(Q)Q=!1;else if(!this[W]){this[W]=!0,new t(this),o[m]&&o[m].call(this);var e=G[Z.get(t)];(!V||e.create.length>1)&&Zt(this)}}}),ot(u,h,{value:function(e){-1<_.call(a,e)&&o[h].apply(this,arguments)}}),o[d]&&ot(u,p,{value:o[d]}),o[v]&&ot(u,g,{value:o[v]}),i&&(f[c]=i),e=e.toUpperCase(),G[e]={constructor:t,create:i?[i,et(e)]:[e]},Z.set(t,e),n[s](e.toLowerCase(),f),en(e),Y[e].r()}function Gt(e){var t=G[e.toUpperCase()];return t&&t.constructor}function Yt(e){return typeof e=="string"?e:e&&e.is||""}function Zt(e){var t=e[h],n=t?e.attributes:j,r=n.length,i;while(r--)i=n[r],t.call(e,i.name||i.nodeName,null,i.value||i.nodeValue)}function en(e){return e=e.toUpperCase(),e in Y||(Y[e]={},Y[e].p=new K(function(t){Y[e].r=t})),Y[e].p}function tn(){X&&delete e.customElements,B(e,"customElements",{configurable:!0,value:new Kt}),B(e,"CustomElementRegistry",{configurable:!0,value:Kt});for(var t=function(t){var r=e[t];if(r){e[t]=function(t){var i,s;return t||(t=this),t[W]||(Q=!0,i=G[Z.get(t.constructor)],s=V&&i.create.length===1,t=s?Reflect.construct(r,j,i.constructor):n.createElement.apply(n,i.create),t[W]=!0,Q=!1,s||Zt(t)),t},e[t].prototype=r.prototype;try{r.prototype.constructor=e[t]}catch(i){z=!0,B(r,W,{value:e[t]})}}},r=i.get(/^HTML[A-Z]*[a-z]/),o=r.length;o--;t(r[o]));n.createElement=function(e,t){var n=Yt(t);return n?gt.call(this,e,et(n)):gt.call(this,e)},St||(Tt=!0,n[s](""))}var n=e.document,r=e.Object,i=function(e){var t=/^[A-Z]+[a-z]/,n=function(e){var t=[],n;for(n in s)e.test(n)&&t.push(n);return t},i=function(e,t){t=t.toLowerCase(),t in s||(s[e]=(s[e]||[]).concat(t),s[t]=s[t.toUpperCase()]=e)},s=(r.create||r)(null),o={},u,a,f,l;for(a in e)for(l in e[a]){f=e[a][l],s[l]=f;for(u=0;u<f.length;u++)s[f[u].toLowerCase()]=s[f[u].toUpperCase()]=l}return o.get=function(r){return typeof r=="string"?s[r]||(t.test(r)?[]:""):n(r)},o.set=function(n,r){return t.test(n)?i(n,r):i(r,n),o},o}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});typeof t!="object"&&(t={type:t||"auto"});var s="registerElement",o="__"+s+(e.Math.random()*1e5>>0),u="addEventListener",a="attached",f="Callback",l="detached",c="extends",h="attributeChanged"+f,p=a+f,d="connected"+f,v="disconnected"+f,m="created"+f,g=l+f,y="ADDITION",b="MODIFICATION",w="REMOVAL",E="DOMAttrModified",S="DOMContentLoaded",x="DOMSubtreeModified",T="<",N="=",C=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,k=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],L=[],A=[],O="",M=n.documentElement,_=L.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},D=r.prototype,P=D.hasOwnProperty,H=D.isPrototypeOf,B=r.defineProperty,j=[],F=r.getOwnPropertyDescriptor,I=r.getOwnPropertyNames,q=r.getPrototypeOf,R=r.setPrototypeOf,U=!!r.__proto__,z=!1,W="__dreCEv1",X=e.customElements,V=!/^force/.test(t.type)&&!!(X&&X.define&&X.get&&X.whenDefined),$=r.create||r,J=e.Map||function(){var t=[],n=[],r;return{get:function(e){return n[_.call(t,e)]},set:function(e,i){r=_.call(t,e),r<0?n[t.push(e)-1]=i:n[r]=i}}},K=e.Promise||function(e){function i(e){n=!0;while(t.length)t.shift()(e)}var t=[],n=!1,r={"catch":function(){return r},then:function(e){return t.push(e),n&&setTimeout(i,1),r}};return e(i),r},Q=!1,G=$(null),Y=$(null),Z=new J,et=function(e){return e.toLowerCase()},tt=r.create||function sn(e){return e?(sn.prototype=e,new sn):this},nt=R||(U?function(e,t){return e.__proto__=t,e}:I&&F?function(){function e(e,t){for(var n,r=I(t),i=0,s=r.length;i<s;i++)n=r[i],P.call(e,n)||B(e,n,F(t,n))}return function(t,n){do e(t,n);while((n=q(n))&&!H.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),rt=e.MutationObserver||e.WebKitMutationObserver,it=(e.HTMLElement||e.Element||e.Node).prototype,st=!H.call(it,M),ot=st?function(e,t,n){return e[t]=n.value,e}:B,ut=st?function(e){return e.nodeType===1}:function(e){return H.call(it,e)},at=st&&[],ft=it.attachShadow,lt=it.cloneNode,ct=it.dispatchEvent,ht=it.getAttribute,pt=it.hasAttribute,dt=it.removeAttribute,vt=it.setAttribute,mt=n.createElement,gt=mt,yt=rt&&{attributes:!0,characterData:!0,attributeOldValue:!0},bt=rt||function(e){Nt=!1,M.removeEventListener(E,bt)},wt,Et=0,St=s in n&&!/^force-all/.test(t.type),xt=!0,Tt=!1,Nt=!0,Ct=!0,kt=!0,Lt,At,Ot,Mt,_t,Dt,Pt;St||(R||U?(Dt=function(e,t){H.call(t,e)||Xt(e,t)},Pt=Xt):(Dt=function(e,t){e[o]||(e[o]=r(!0),Xt(e,t))},Pt=Dt),st?(Nt=!1,function(){var e=F(it,u),t=e.value,n=function(e){var t=new CustomEvent(E,{bubbles:!0});t.attrName=e,t.prevValue=ht.call(this,e),t.newValue=null,t[w]=t.attrChange=2,dt.call(this,e),ct.call(this,t)},r=function(e,t){var n=pt.call(this,e),r=n&&ht.call(this,e),i=new CustomEvent(E,{bubbles:!0});vt.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[b]=i.attrChange=1:i[y]=i.attrChange=0,ct.call(this,i)},i=function(e){var t=e.currentTarget,n=t[o],r=e.propertyName,i;n.hasOwnProperty(r)&&(n=n[r],i=new CustomEvent(E,{bubbles:!0}),i.attrName=n.name,i.prevValue=n.value||null,i.newValue=n.value=t[r]||null,i.prevValue==null?i[y]=i.attrChange=0:i[b]=i.attrChange=1,ct.call(t,i))};e.value=function(e,s,u){e===E&&this[h]&&this.setAttribute!==r&&(this[o]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",i)),t.call(this,e,s,u)},B(it,u,e)}()):rt||(M[u](E,bt),M.setAttribute(o,1),M.removeAttribute(o),Nt&&(Lt=function(e){var t=this,n,r,i;if(t===e.target){n=t[o],t[o]=r=Ot(t);for(i in r){if(!(i in n))return At(0,t,i,n[i],r[i],y);if(r[i]!==n[i])return At(1,t,i,n[i],r[i],b)}for(i in n)if(!(i in r))return At(2,t,i,n[i],r[i],w)}},At=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,Rt(o)},Ot=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),n[s]=function(t,r){p=t.toUpperCase(),xt&&(xt=!1,rt?(Mt=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new rt(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,kt&&s[h]&&i.attributeName!=="style"&&(o=ht.call(s,i.attributeName),o!==i.oldValue&&s[h](i.attributeName,i.oldValue,o)))})}(Ft(a),Ft(l)),_t=function(e){return Mt.observe(e,{childList:!0,subtree:!0}),e},_t(n),ft&&(it.attachShadow=function(){return _t(ft.apply(this,arguments))})):(wt=[],n[u]("DOMNodeInserted",Ut(a)),n[u]("DOMNodeRemoved",Ut(l))),n[u](S,zt),n[u]("readystatechange",zt),it.cloneNode=function(e){var t=lt.call(this,!!e),n=It(t);return-1<n&&Pt(t,A[n]),e&&O.length&&jt(t.querySelectorAll(O)),t});if(Tt)return Tt=!1;-2<_.call(L,N+p)+_.call(L,T+p)&&$t(t);if(!C.test(p)||-1<_.call(k,p))throw new Error("The type "+t+" is invalid");var i=function(){return o?n.createElement(f,p):n.createElement(f)},s=r||D,o=P.call(s,c),f=o?r[c].toUpperCase():p,p,d;return o&&-1<_.call(L,T+f)&&$t(f),d=L.push((o?N:T)+p)-1,O=O.concat(O.length?",":"",o?f+'[is="'+t.toLowerCase()+'"]':f),i.prototype=A[d]=P.call(s,"prototype")?s.prototype:tt(it),O.length&&Bt(n.querySelectorAll(O),a),i},n.createElement=gt=function(e,t){var r=Yt(t),i=r?mt.call(n,e,et(r)):mt.call(n,e),s=""+e,o=_.call(L,(r?N:T)+(r||s).toUpperCase()),u=-1<o;return r&&(i.setAttribute("is",r=r.toLowerCase()),u&&(u=qt(s.toUpperCase(),r))),kt=!n.createElement.innerHTMLHelper,u&&Pt(i,A[o]),i}),Kt.prototype={constructor:Kt,define:V?function(e,t,n){if(n)Qt(e,t,n);else{var r=e.toUpperCase();G[r]={constructor:t,create:[r]},Z.set(t,r),X.define(e,t)}}:Qt,get:V?function(e){return X.get(e)||Gt(e)}:Gt,whenDefined:V?function(e){return K.race([X.whenDefined(e),en(e)])}:en};if(!X||/^force/.test(t.type))tn();else if(!t.noBuiltIn)try{(function(t,r,i){r[c]="a",t.prototype=tt(HTMLAnchorElement.prototype),t.prototype.constructor=t,e.customElements.define(i,t,r);if(ht.call(n.createElement("a",{is:i}),"is")!==i||V&&ht.call(new t,"is")!==i)throw r})(function on(){return Reflect.construct(HTMLAnchorElement,[],on)},{},"document-register-element-a")}catch(nn){tn()}if(!t.noBuiltIn)try{mt.call(n,"a","a")}catch(rn){et=function(e){return{is:e.toLowerCase()}}}})(window);
},{}],2:[function(require,module,exports){
assert.notEqual = notEqual
assert.notOk = notOk
assert.equal = equal
assert.ok = assert

module.exports = assert

function equal (a, b, m) {
  assert(a == b, m) // eslint-disable-line eqeqeq
}

function notEqual (a, b, m) {
  assert(a != b, m) // eslint-disable-line eqeqeq
}

function notOk (t, m) {
  assert(!t, m)
}

function assert (t, m) {
  if (!t) throw new Error(m || 'AssertionError')
}

},{}],3:[function(require,module,exports){
var assert = require('assert')
var morph = require('./lib/morph')

var TEXT_NODE = 3
// var DEBUG = false

module.exports = nanomorph

// Morph one tree into another tree
//
// no parent
//   -> same: diff and walk children
//   -> not same: replace and return
// old node doesn't exist
//   -> insert new node
// new node doesn't exist
//   -> delete old node
// nodes are not the same
//   -> diff nodes and apply patch to old node
// nodes are the same
//   -> walk all child nodes and append to old node
function nanomorph (oldTree, newTree) {
  // if (DEBUG) {
  //   console.log(
  //   'nanomorph\nold\n  %s\nnew\n  %s',
  //   oldTree && oldTree.outerHTML,
  //   newTree && newTree.outerHTML
  // )
  // }
  assert.equal(typeof oldTree, 'object', 'nanomorph: oldTree should be an object')
  assert.equal(typeof newTree, 'object', 'nanomorph: newTree should be an object')
  var tree = walk(newTree, oldTree)
  // if (DEBUG) console.log('=> morphed\n  %s', tree.outerHTML)
  return tree
}

// Walk and morph a dom tree
function walk (newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'walk\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  if (!oldNode) {
    return newNode
  } else if (!newNode) {
    return null
  } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
    return oldNode
  } else if (newNode.tagName !== oldNode.tagName) {
    return newNode
  } else {
    morph(newNode, oldNode)
    updateChildren(newNode, oldNode)
    return oldNode
  }
}

// Update the children of elements
// (obj, obj) -> null
function updateChildren (newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'updateChildren\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  var oldChild, newChild, morphed, oldMatch

  // The offset is only ever increased, and used for [i - offset] in the loop
  var offset = 0

  for (var i = 0; ; i++) {
    oldChild = oldNode.childNodes[i]
    newChild = newNode.childNodes[i - offset]
    // if (DEBUG) {
    //   console.log(
    //   '===\n- old\n  %s\n- new\n  %s',
    //   oldChild && oldChild.outerHTML,
    //   newChild && newChild.outerHTML
    // )
    // }
    // Both nodes are empty, do nothing
    if (!oldChild && !newChild) {
      break

    // There is no new child, remove old
    } else if (!newChild) {
      oldNode.removeChild(oldChild)
      i--

    // There is no old child, add new
    } else if (!oldChild) {
      oldNode.appendChild(newChild)
      offset++

    // Both nodes are the same, morph
    } else if (same(newChild, oldChild)) {
      morphed = walk(newChild, oldChild)
      if (morphed !== oldChild) {
        oldNode.replaceChild(morphed, oldChild)
        offset++
      }

    // Both nodes do not share an ID or a placeholder, try reorder
    } else {
      oldMatch = null

      // Try and find a similar node somewhere in the tree
      for (var j = i; j < oldNode.childNodes.length; j++) {
        if (same(oldNode.childNodes[j], newChild)) {
          oldMatch = oldNode.childNodes[j]
          break
        }
      }

      // If there was a node with the same ID or placeholder in the old list
      if (oldMatch) {
        morphed = walk(newChild, oldMatch)
        if (morphed !== oldMatch) offset++
        oldNode.insertBefore(morphed, oldChild)

      // It's safe to morph two nodes in-place if neither has an ID
      } else if (!newChild.id && !oldChild.id) {
        morphed = walk(newChild, oldChild)
        if (morphed !== oldChild) {
          oldNode.replaceChild(morphed, oldChild)
          offset++
        }

      // Insert the node at the index if we couldn't morph or find a matching node
      } else {
        oldNode.insertBefore(newChild, oldChild)
        offset++
      }
    }
  }
}

function same (a, b) {
  if (a.id) return a.id === b.id
  if (a.isSameNode) return a.isSameNode(b)
  if (a.tagName !== b.tagName) return false
  if (a.type === TEXT_NODE) return a.nodeValue === b.nodeValue
  return false
}

},{"./lib/morph":5,"assert":2}],4:[function(require,module,exports){
module.exports = [
  // attribute events (can be set with attributes)
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'onmouseenter',
  'onmouseleave',
  'ontouchcancel',
  'ontouchend',
  'ontouchmove',
  'ontouchstart',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  // other common events
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]

},{}],5:[function(require,module,exports){
var events = require('./events')
var eventsLength = events.length

var ELEMENT_NODE = 1
var TEXT_NODE = 3
var COMMENT_NODE = 8

module.exports = morph

// diff elements and apply the resulting patch to the old node
// (obj, obj) -> null
function morph (newNode, oldNode) {
  var nodeType = newNode.nodeType
  var nodeName = newNode.nodeName

  if (nodeType === ELEMENT_NODE) {
    copyAttrs(newNode, oldNode)
  }

  if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
    if (oldNode.nodeValue !== newNode.nodeValue) {
      oldNode.nodeValue = newNode.nodeValue
    }
  }

  // Some DOM nodes are weird
  // https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
  if (nodeName === 'INPUT') updateInput(newNode, oldNode)
  else if (nodeName === 'OPTION') updateOption(newNode, oldNode)
  else if (nodeName === 'TEXTAREA') updateTextarea(newNode, oldNode)

  copyEvents(newNode, oldNode)
}

function copyAttrs (newNode, oldNode) {
  var oldAttrs = oldNode.attributes
  var newAttrs = newNode.attributes
  var attrNamespaceURI = null
  var attrValue = null
  var fromValue = null
  var attrName = null
  var attr = null

  for (var i = newAttrs.length - 1; i >= 0; --i) {
    attr = newAttrs[i]
    attrName = attr.name
    attrNamespaceURI = attr.namespaceURI
    attrValue = attr.value
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName
      fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName)
      if (fromValue !== attrValue) {
        oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue)
      }
    } else {
      if (!oldNode.hasAttribute(attrName)) {
        oldNode.setAttribute(attrName, attrValue)
      } else {
        fromValue = oldNode.getAttribute(attrName)
        if (fromValue !== attrValue) {
          // apparently values are always cast to strings, ah well
          if (attrValue === 'null' || attrValue === 'undefined') {
            oldNode.removeAttribute(attrName)
          } else {
            oldNode.setAttribute(attrName, attrValue)
          }
        }
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  for (var j = oldAttrs.length - 1; j >= 0; --j) {
    attr = oldAttrs[j]
    if (attr.specified !== false) {
      attrName = attr.name
      attrNamespaceURI = attr.namespaceURI

      if (attrNamespaceURI) {
        attrName = attr.localName || attrName
        if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
          oldNode.removeAttributeNS(attrNamespaceURI, attrName)
        }
      } else {
        if (!newNode.hasAttributeNS(null, attrName)) {
          oldNode.removeAttribute(attrName)
        }
      }
    }
  }
}

function copyEvents (newNode, oldNode) {
  for (var i = 0; i < eventsLength; i++) {
    var ev = events[i]
    if (newNode[ev]) {           // if new element has a whitelisted attribute
      oldNode[ev] = newNode[ev]  // update existing element
    } else if (oldNode[ev]) {    // if existing element has it and new one doesnt
      oldNode[ev] = undefined    // remove it from existing element
    }
  }
}

function updateOption (newNode, oldNode) {
  updateAttribute(newNode, oldNode, 'selected')
}

// The "value" attribute is special for the <input> element since it sets the
// initial value. Changing the "value" attribute without changing the "value"
// property will have no effect since it is only used to the set the initial
// value. Similar for the "checked" attribute, and "disabled".
function updateInput (newNode, oldNode) {
  var newValue = newNode.value
  var oldValue = oldNode.value

  updateAttribute(newNode, oldNode, 'checked')
  updateAttribute(newNode, oldNode, 'disabled')

  if (newValue !== oldValue) {
    oldNode.setAttribute('value', newValue)
    oldNode.value = newValue
  }

  if (newValue === 'null') {
    oldNode.value = ''
    oldNode.removeAttribute('value')
  }

  if (!newNode.hasAttributeNS(null, 'value')) {
    oldNode.removeAttribute('value')
  } else if (oldNode.type === 'range') {
    // this is so elements like slider move their UI thingy
    oldNode.value = newValue
  }
}

function updateTextarea (newNode, oldNode) {
  var newValue = newNode.value
  if (newValue !== oldNode.value) {
    oldNode.value = newValue
  }

  if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
    // Needed for IE. Apparently IE sets the placeholder as the
    // node value and vise versa. This ignores an empty update.
    if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) {
      return
    }

    oldNode.firstChild.nodeValue = newValue
  }
}

function updateAttribute (newNode, oldNode, name) {
  if (newNode[name] !== oldNode[name]) {
    oldNode[name] = newNode[name]
    if (newNode[name]) {
      oldNode.setAttribute(name, '')
    } else {
      oldNode.removeAttribute(name)
    }
  }
}

},{"./events":4}],6:[function(require,module,exports){
var v1 = require('./v1');
var v4 = require('./v4');

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;

},{"./v1":9,"./v4":10}],7:[function(require,module,exports){
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

},{}],8:[function(require,module,exports){
(function (global){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"./lib/bytesToUuid":7,"./lib/rng":8}],10:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/bytesToUuid":7,"./lib/rng":8}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.CreateElement = CreateElement;
exports.CreateTag = CreateTag;
exports.render = render;

require('document-register-element');

var _nanomorph = require('nanomorph');

var _nanomorph2 = _interopRequireDefault(_nanomorph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TemigaError = function (_Error) {
  _inherits(TemigaError, _Error);

  function TemigaError(message, code) {
    _classCallCheck(this, TemigaError);

    var _this = _possibleConstructorReturn(this, (TemigaError.__proto__ || Object.getPrototypeOf(TemigaError)).call(this, message));

    _this.code = code;
    return _this;
  }

  return TemigaError;
}(Error);

function isRequired(message) {
  throw new TemigaError(message);
}

function throwIsMissing(val, message) {
  return !val ? isRequired(message) : val;
}

function throwIsNotTypeOf(val, option) {
  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== option.typeOf) {
    // eslint-disable-line
    throw new TemigaError(option.name + ' must be type of ' + option.typeOf);
  }
}

function validate(object) {
  var toValidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return toValidate.forEach(function (option) {
    if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
      throwIsMissing(object[option.name], option.name + ' is required');
      if (!option.typeOf) {
        throwIsNotTypeOf(object[option.name], option);
      }
    } else {
      throwIsMissing(object[option], option + ' is required');
    }
  });
}

function setEventListener(type, selector, cb) {
  document.body.addEventListener(type, function () {
    if (event.target && event.target.matches(selector)) {
      cb.apply(undefined, arguments);
    }
  });
}

function clone(obj) {
  var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var include = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  return Object.keys(obj).reduce(function (result, key) {
    if (list.includes(key) === include) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}

function update() {
  try {
    if (this.shouldUpdate) {
      var html = this.render.apply(this, arguments).trim();
      var newNode = document.createElement('div');
      newNode.innerHTML = html;
      if (!this.firstChild || this.firstChild.nodeType === 3 && this.firstChild.textContent.trim() === '') {
        this.appendChild(newNode.firstChild);
      } else {
        (0, _nanomorph2.default)(this.firstChild, newNode.firstChild);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function CreateElement() {
  var builder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : isRequired('You need to pass and object');

  validate(builder, ['name']);

  var element = CreateTag(builder);
  var eventList = Object.keys(builder.events || {});
  eventList.forEach(function (key) {
    var listeners = key.split(',');
    listeners.forEach(function (listener) {
      var _listener$split = listener.split(' '),
          _listener$split2 = _slicedToArray(_listener$split, 2),
          type = _listener$split2[0],
          selector = _listener$split2[1];

      setEventListener(type, selector, builder.events[key]);
    });
  });
  return element;
}

function CreateTag() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var logThis = function logThis(type) {
    return function () {
      if (type === 'onChange') {
        console.log(arguments);
      }
    };
  };
  var onCreated = options.onCreated || logThis('onCreated');
  var onMounted = options.onMounted || logThis('onMounted');
  var onUnmounted = options.onUnmounted || logThis('onUnmounted');
  var onChange = options.onChange || logThis('onChange');
  var shouldUpdate = options.shouldUpdate || function () {
    return true;
  };
  var newOptions = {
    createdCallback: { value: onCreated },
    attachedCallback: { value: function value() {
        this.update();
        onMounted.call(this);
      } },
    detachedCallback: { value: onUnmounted },
    attributeChangedCallback: { value: onChange }
  };
  var base = Object.create(HTMLElement.prototype, newOptions);

  var elemMethods = clone(options, ['name', 'onCreated', 'onMounted', 'onUnmounted', 'onChange', 'events'], false);

  Object.assign(base, elemMethods, { update: update, shouldUpdate: shouldUpdate });

  if (options.props) {
    newOptions.props = options.props;
  }

  return document.registerElement(options.name, {
    prototype: base
  });
}

function render(root, render) {
  if (typeof render === 'string') {
    root.innerHTML = render;
  } else {
    root.appendChild(render);
  }
}

},{"document-register-element":1,"nanomorph":3}],12:[function(require,module,exports){
'use strict';

var _index = require('../src/index');

var Temiga = _interopRequireWildcard(_index);

var _index2 = require('./store/index');

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var TodoApp = Temiga.CreateElement({
  name: 'todo-app',
  render: function render() {
    return '\n      <div>\n        <h1>Mi super dopper todo</h1>\n        <todo-form></todo-form>\n        <todo-list></todo-list>\n      </div>\n    ';
  }
});

var TodoList = Temiga.CreateElement({
  name: 'todo-list',
  onMounted: function onMounted() {
    var _this = this;

    _index3.default.subscribe(function () {
      var tareas = _index3.default.getState().todos;
      _this.update(tareas);
    });
  },
  render: function render() {
    var tareas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var notFound = '<h3>Create a new Todo</h3>';
    var tareasHTML = tareas.reduce(function (acc, tarea) {
      acc += '\n        <todo-item id="' + tarea.id + '" text="' + tarea.text + '" key="' + tarea.id + '" done="' + tarea.done + '">\n        </todo-item>\n      ';
      return acc;
    }, '').trim();
    var result = tareasHTML === '' ? notFound : tareasHTML;
    return '<div>' + result + '</div>';
  }
});

var TodoItem = Temiga.CreateElement({
  name: 'todo-item',
  render: function render() {
    return '\n      <div class="item" id="' + this.getAttribute('key') + '">\n        <input \n          type="checkbox" \n          ' + (this.getAttribute('done') === 'true' ? 'checked' : '') + ' \n          class="toggle-task"\n          name="task-' + this.getAttribute('key') + '" \n          id="task-' + this.getAttribute('key') + '">\n        <label for="task-' + this.getAttribute('key') + '">' + this.getAttribute('text') + '</label>\n        <button class="delete-task" data-id="' + this.getAttribute('key') + '">Delete</button>\n        <hr/>\n      </div>\n    ';
  },

  events: {
    'change .toggle-task': function changeToggleTask(evnt) {
      evnt.preventDefault();
      var taskId = event.target.parentElement.id;
      _index3.default.dispatch({
        type: 'TASK_TOGGLE',
        payload: taskId
      });
    },
    'click .delete-task': function clickDeleteTask(evnt) {
      evnt.preventDefault();
      var taskId = event.target.parentElement.id;
      _index3.default.dispatch({
        type: 'TASK_REMOVE',
        payload: taskId
      });
    }
  }
});

var TodoForm = Temiga.CreateElement({
  name: 'todo-form',
  render: function render() {
    return ' \n      <form id="new-todo">\n        <input name="todo" id="add-todo" placeholder="Create a new todo">\n        <button type="submit">Add new Task</button>\n      </form>\n    ';
  },

  events: {
    'submit #new-todo': function submitNewTodo(evnt) {
      evnt.preventDefault();
      var value = event.target[0].value.trim();
      if (value && value !== '') {
        _index3.default.dispatch({
          type: 'TASK_ADD',
          payload: {
            text: value,
            done: false
          }
        });
      } else {
        _index3.default.dispatch({
          type: 'INPUT_CANT_BE_EMPTY'
        });
      }
      event.target[0].value = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', function (event) {
  var app = document.getElementById('app');
  Temiga.render(app, new TodoApp());
});

},{"../src/index":11,"./store/index":13}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manager = require('./manager');

var _manager2 = _interopRequireDefault(_manager);

var _task = require('./task.reducer');

var _task2 = _interopRequireDefault(_task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var combinedReducer = _manager2.default.combineReducers({
  todos: _task2.default
});
var store = _manager2.default.storeFactory(combinedReducer);

exports.default = store;

},{"./manager":14,"./task.reducer":15}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function combineReducers(reducers) {
  return function (action, state) {
    return Object.keys(reducers).reduce(function (CombineState, key) {
      CombineState[key] = reducers[key](action, state[key]);
      return CombineState;
    }, {});
  };
}

function storeFactory(reducer) {
  var state = {};
  var listeners = [];

  function dispatch(action) {
    state = reducer(action, state);
    listeners.forEach(function (listener) {
      listener();
    });
  }

  function subscribe(callback) {
    listeners.push(callback);
    return function () {
      listeners = listeners.filter(function (listeners) {
        return listeners !== callback;
      });
    };
  }

  function getState() {
    return state;
  }

  return {
    dispatch: dispatch,
    getState: getState,
    subscribe: subscribe
  };
}

var StateManager = {
  storeFactory: storeFactory,
  combineReducers: combineReducers
};

exports.default = StateManager;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addTask(state, newTask) {
  Object.assign(newTask, {
    id: _uuid2.default.v1(),
    done: false
  });
  return [].concat(state, [newTask]);
}

function removeTask(state, id) {
  return state.filter(function (task) {
    return task.id !== id;
  });
}

function toggleTask(state, id) {
  var index = state.findIndex(function (task) {
    return task.id === id;
  });
  return [].concat(state.slice(0, index), toggleStatus(state[index]), state.slice(index + 1));
}

function toggleStatus(task) {
  return Object.assign({}, task, {
    done: !task.done
  });
}

function taskReducer(action) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  action = !action ? { type: null } : action;
  switch (action.type) {
    case 'TASK_ADD':
      return addTask(state, action.payload);
    case 'TASK_REMOVE':
      return removeTask(state, action.payload);
    case 'TASK_TOGGLE':
      return toggleTask(state, action.payload);
    default:
      return state;
  }
}

exports.default = taskReducer;

},{"uuid":6}]},{},[12]);
