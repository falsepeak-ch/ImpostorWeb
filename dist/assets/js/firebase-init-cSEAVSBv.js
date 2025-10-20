!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var e={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const t=e[a],i=a+1<e.length,s=i?e[a+1]:0,o=a+2<e.length,c=o?e[a+2]:0,l=t>>2,d=(3&t)<<4|s>>4;let u=(15&s)<<2|c>>6,h=63&c;o||(h=64,i||(u=64)),r.push(n[l],n[d],n[u],n[h])}return r.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const c=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==o||null==c)throw new r;const l=t<<2|s>>4;if(a.push(l),64!==o){const e=s<<4&240|o>>2;if(a.push(e),64!==c){const e=o<<6&192|c;a.push(e)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class r extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){return function(e){const r=t(e);return n.encodeByteArray(r,!0)}(e).replace(/\./g,"")};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,s=()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(r){return}const t=e&&function(e){try{return n.decodeString(e,!0)}catch(r){console.error("base64Decode failed: ",r)}return null}(e[1]);return t&&JSON.parse(t)},o=()=>{try{return i()||(()=>{if("undefined"==typeof process)return;const t=e.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||s()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},c=()=>{var e;return null==(e=o())?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function d(){try{return"object"==typeof indexedDB}catch(e){return!1}}function u(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null==(e=a.error)?void 0:e.message)||"")}}catch(n){t(n)}})}class h extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,h.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f.prototype.create)}}class f{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?function(e,t){return e.replace(p,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(a,n):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new h(r,s,n)}}const p=/\{\$([^}]+)}/g;function g(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const n=e[a],i=t[a];if(m(n)&&m(i)){if(!g(n,i))return!1}else if(n!==i)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function m(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t=1e3,n=2){const r=t*Math.pow(n,e),a=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+a)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){return e&&e._delegate?e._delegate:e}class y{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new l;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=(null==e?void 0:e.optional)??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:v})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=v){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=v){return this.instances.has(e)}getOptions(e=v){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[a,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(a)&&i.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const a=this.instances.get(n);return a&&e(a,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===v?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e=v){return this.component?this.component.multipleInstances?e:v:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new I(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S,_;(_=S||(S={}))[_.DEBUG=0]="DEBUG",_[_.VERBOSE=1]="VERBOSE",_[_.INFO=2]="INFO",_[_.WARN=3]="WARN",_[_.ERROR=4]="ERROR",_[_.SILENT=5]="SILENT";const C={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},D=S.INFO,A={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},T=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),a=A[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${r}]  ${e.name}:`,...n)};class k{constructor(e){this.name=e,this._logLevel=D,this._logHandler=T,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?C[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}let B,M;const O=new WeakMap,L=new WeakMap,$=new WeakMap,P=new WeakMap,N=new WeakMap;let F={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return L.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return x(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function j(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(M||(M=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(H(this),t),x(O.get(this))}:function(...t){return x(e.apply(H(this),t))}:function(t,...n){const r=e.call(H(this),t,...n);return $.set(r,t.sort?t.sort():[t]),x(r)}}function R(e){return"function"==typeof e?j(e):(e instanceof IDBTransaction&&function(e){if(L.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});L.set(e,t)}(e),t=e,(B||(B=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,F):e);var t}function x(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(x(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&O.set(t,e)}).catch(()=>{}),N.set(t,e),t}(e);if(P.has(e))return P.get(e);const t=R(e);return t!==e&&(P.set(e,t),N.set(t,e)),t}const H=e=>N.get(e);function z(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const s=indexedDB.open(e,t),o=x(s);return r&&s.addEventListener("upgradeneeded",e=>{r(x(s.result),e.oldVersion,e.newVersion,x(s.transaction),e)}),n&&s.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}const V=["get","getKey","getAll","getAllKeys","count"],U=["put","add","delete","clear"],W=new Map;function q(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(W.get(t))return W.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=U.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!V.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),a&&i.done]))[0]};return W.set(t,i),i}F=(e=>({...e,get:(t,n,r)=>q(t,n)||e.get(t,n,r),has:(t,n)=>!!q(t,n)||e.has(t,n)}))(F);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const G="@firebase/app",J="0.14.4",Q=new k("@firebase/app"),X="@firebase/app-compat",Y="@firebase/analytics-compat",Z="@firebase/analytics",ee="@firebase/app-check-compat",te="@firebase/app-check",ne="@firebase/auth",re="@firebase/auth-compat",ae="@firebase/database",ie="@firebase/data-connect",se="@firebase/database-compat",oe="@firebase/functions",ce="@firebase/functions-compat",le="@firebase/installations",de="@firebase/installations-compat",ue="@firebase/messaging",he="@firebase/messaging-compat",fe="@firebase/performance",pe="@firebase/performance-compat",ge="@firebase/remote-config",me="@firebase/remote-config-compat",be="@firebase/storage",we="@firebase/storage-compat",ye="@firebase/firestore",ve="@firebase/ai",Ie="@firebase/firestore-compat",Ee="firebase",Se="[DEFAULT]",_e={[G]:"fire-core",[X]:"fire-core-compat",[Z]:"fire-analytics",[Y]:"fire-analytics-compat",[te]:"fire-app-check",[ee]:"fire-app-check-compat",[ne]:"fire-auth",[re]:"fire-auth-compat",[ae]:"fire-rtdb",[ie]:"fire-data-connect",[se]:"fire-rtdb-compat",[oe]:"fire-fn",[ce]:"fire-fn-compat",[le]:"fire-iid",[de]:"fire-iid-compat",[ue]:"fire-fcm",[he]:"fire-fcm-compat",[fe]:"fire-perf",[pe]:"fire-perf-compat",[ge]:"fire-rc",[me]:"fire-rc-compat",[be]:"fire-gcs",[we]:"fire-gcs-compat",[ye]:"fire-fst",[Ie]:"fire-fst-compat",[ve]:"fire-vertex","fire-js":"fire-js",[Ee]:"fire-js-all"},Ce=new Map,De=new Map,Ae=new Map;function Te(e,t){try{e.container.addComponent(t)}catch(n){Q.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ke(e){const t=e.name;if(Ae.has(t))return Q.debug(`There were multiple attempts to register component ${t}.`),!1;Ae.set(t,e);for(const n of Ce.values())Te(n,e);for(const n of De.values())Te(n,e);return!0}function Be(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new f("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new y("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Me.create("app-deleted",{appName:this._name})}}function Le(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r={name:Se,automaticDataCollectionEnabled:!0,...t},a=r.name;if("string"!=typeof a||!a)throw Me.create("bad-app-name",{appName:String(a)});if(n||(n=c()),!n)throw Me.create("no-options");const i=Ce.get(a);if(i){if(g(n,i.options)&&g(r,i.config))return i;throw Me.create("duplicate-app",{appName:a})}const s=new E(a);for(const c of Ae.values())s.addComponent(c);const o=new Oe(n,r,s);return Ce.set(a,o),o}function $e(e,t,n){let r=_e[e]??e;n&&(r+=`-${n}`);const a=r.match(/\s|\//),i=t.match(/\s|\//);if(a||i){const e=[`Unable to register library "${r}" with version "${t}":`];return a&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Q.warn(e.join(" "))}ke(new y(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="firebase-heartbeat-store";let Ne=null;function Fe(){return Ne||(Ne=z("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Pe)}catch(n){console.warn(n)}}}).catch(e=>{throw Me.create("idb-open",{originalErrorMessage:e.message})})),Ne}async function je(e,t){try{const n=(await Fe()).transaction(Pe,"readwrite"),r=n.objectStore(Pe);await r.put(t,Re(e)),await n.done}catch(n){if(n instanceof h)Q.warn(n.message);else{const e=Me.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});Q.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ze(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=He();if(null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null==(t=this._heartbeatsCache)?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Q.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=He(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const a of e){const e=n.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),Ve(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Ve(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=a(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Q.warn(t),""}}}function He(){return(new Date).toISOString().substring(0,10)}class ze{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!d()&&u().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Fe()).transaction(Pe),n=await t.objectStore(Pe).get(Re(e));return await t.done,n}catch(t){if(t instanceof h)Q.warn(t.message);else{const e=Me.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Q.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return je(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return je(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Ve(e){return a(JSON.stringify({version:2,heartbeats:e})).length}var Ue;Ue="",ke(new y("platform-logger",e=>new K(e),"PRIVATE")),ke(new y("heartbeat",e=>new xe(e),"PRIVATE")),$e(G,J,Ue),$e(G,J,"esm2020"),$e("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$e("firebase","12.4.0","app");const We="@firebase/installations",qe="0.6.19",Ke=1e4,Ge=`w:${qe}`,Je="FIS_v2",Qe=36e5,Xe=new f("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Ye(e){return e instanceof h&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function et(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function tt(e,t){const n=(await t.json()).error;return Xe.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function nt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function rt(e,{refreshToken:t}){const n=nt(e);return n.append("Authorization",function(e){return`${Je} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function at(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function it(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const st=/^[cdef][\w-]{21}$/;function ot(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return st.test(t)?t:""}catch{return""}}function ct(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Map;function dt(e,t){const n=ct(e);ut(n,t),function(e,t){const n=function(){!ht&&"BroadcastChannel"in self&&(ht=new BroadcastChannel("[Firebase] FID Change"),ht.onmessage=e=>{ut(e.data.key,e.data.fid)});return ht}();n&&n.postMessage({key:e,fid:t});0===lt.size&&ht&&(ht.close(),ht=null)}(n,t)}function ut(e,t){const n=lt.get(e);if(n)for(const r of n)r(t)}let ht=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft="firebase-installations-store";let pt=null;function gt(){return pt||(pt=z("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(ft)}})),pt}async function mt(e,t){const n=ct(e),r=(await gt()).transaction(ft,"readwrite"),a=r.objectStore(ft),i=await a.get(n);return await a.put(t,n),await r.done,i&&i.fid===t.fid||dt(e,t.fid),t}async function bt(e){const t=ct(e),n=(await gt()).transaction(ft,"readwrite");await n.objectStore(ft).delete(t),await n.done}async function wt(e,t){const n=ct(e),r=(await gt()).transaction(ft,"readwrite"),a=r.objectStore(ft),i=await a.get(n),s=t(i);return void 0===s?await a.delete(n):await a.put(s,n),await r.done,!s||i&&i.fid===s.fid||dt(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(e){let t;const n=await wt(e.appConfig,n=>{const r=function(e){const t=e||{fid:ot(),registrationStatus:0};return Et(t)}(n),a=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Xe.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ze(e),a=nt(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const s={fid:n,authVersion:Je,appId:e.appId,sdkVersion:Ge},o={method:"POST",headers:a,body:JSON.stringify(s)},c=await at(()=>fetch(r,o));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:et(e.authToken)}}throw await tt("Create Installation",c)}(e,t);return mt(e.appConfig,n)}catch(n){throw Ye(n)&&409===n.customData.serverCode?await bt(e.appConfig):await mt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:vt(e)}:{installationEntry:t}}(e,r);return t=a.registrationPromise,a.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function vt(e){let t=await It(e.appConfig);for(;1===t.registrationStatus;)await it(100),t=await It(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await yt(e);return n||t}return t}function It(e){return wt(e,e=>{if(!e)throw Xe.create("installation-not-found");return Et(e)})}function Et(e){return 1===(t=e).registrationStatus&&t.registrationTime+Ke<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function St({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${Ze(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),a=rt(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const s={installation:{sdkVersion:Ge,appId:e.appId}},o={method:"POST",headers:a,body:JSON.stringify(s)},c=await at(()=>fetch(r,o));if(c.ok){return et(await c.json())}throw await tt("Generate Auth Token",c)}async function _t(e,t=!1){let n;const r=await wt(e.appConfig,r=>{if(!Dt(r))throw Xe.create("not-registered");const a=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Qe}(e)}(a))return r;if(1===a.requestStatus)return n=async function(e,t){let n=await Ct(e.appConfig);for(;1===n.authToken.requestStatus;)await it(100),n=await Ct(e.appConfig);const r=n.authToken;return 0===r.requestStatus?_t(e,t):r}(e,t),r;{if(!navigator.onLine)throw Xe.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}(r);return n=async function(e,t){try{const n=await St(e,t),r={...t,authToken:n};return await mt(e.appConfig,r),n}catch(n){if(!Ye(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n={...t,authToken:{requestStatus:0}};await mt(e.appConfig,n)}else await bt(e.appConfig);throw n}}(e,t),t}});return n?await n:r.authToken}function Ct(e){return wt(e,e=>{if(!Dt(e))throw Xe.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Ke<Date.now()?{...e,authToken:{requestStatus:0}}:e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */})}function Dt(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function At(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await yt(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await _t(n,t)).token}function Tt(e){return Xe.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="installations",Bt=e=>{const t=Be(e.getProvider("app").getImmediate(),kt).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await yt(t);return r?r.catch(console.error):_t(t).catch(console.error),n.fid}(t),getToken:e=>At(t,e)}};ke(new y(kt,e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Tt("App Configuration");if(!e.name)throw Tt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Tt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Be(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),ke(new y("installations-internal",Bt,"PRIVATE")),$e(We,qe),$e(We,qe,"esm2020");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mt="analytics",Ot="https://www.googletagmanager.com/gtag/js",Lt=new k("@firebase/analytics"),$t=new f("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pt(e){if(!e.startsWith(Ot)){const t=$t.create("invalid-gtag-resource",{gtagURL:e});return Lt.warn(t.message),""}return e}function Nt(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function Ft(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:Pt}),r=document.createElement("script"),a=`${Ot}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(a):a,r.async=!0,document.head.appendChild(r)}function jt(e,t,n,r){return async function(a,...i){try{if("event"===a){const[r,a]=i;await async function(e,t,n,r,a){try{let i=[];if(a&&a.send_to){let e=a.send_to;Array.isArray(e)||(e=[e]);const r=await Nt(n);for(const n of e){const e=r.find(e=>e.measurementId===n),a=e&&t[e.appId];if(!a){i=[];break}i.push(a)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,a||{})}catch(i){Lt.error(i)}}(e,t,n,r,a)}else if("config"===a){const[a,s]=i;await async function(e,t,n,r,a,i){const s=r[a];try{if(s)await t[s];else{const e=(await Nt(n)).find(e=>e.measurementId===a);e&&await t[e.appId]}}catch(o){Lt.error(o)}e("config",a,i)}(e,t,n,r,a,s)}else if("consent"===a){const[t,n]=i;e("consent",t,n)}else if("get"===a){const[t,n,r]=i;e("get",t,n,r)}else if("set"===a){const[t]=i;e("set",t)}else e(a,...i)}catch(s){Lt.error(s)}}}const Rt=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function xt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ht(e,t=Rt,n){const{appId:r,apiKey:a,measurementId:i}=e.options;if(!r)throw $t.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:r};throw $t.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Vt;return setTimeout(async()=>{o.abort()},6e4),zt({appId:r,apiKey:a,measurementId:i},s,o,t)}async function zt(e,{throttleEndTimeMillis:t,backoffCount:n},r,a=Rt){var i;const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise((n,r)=>{const a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener(()=>{clearTimeout(i),r($t.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(r,t)}catch(c){if(o)return Lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:s,measurementId:o};throw c}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,a={method:"GET",headers:xt(r)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(i,a);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null==(t=n.error)?void 0:t.message)&&(e=n.error.message)}catch(o){}throw $t.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return a.deleteThrottleMetadata(s),t}catch(c){const t=c;if(!function(e){if(!(e instanceof h&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(a.deleteThrottleMetadata(s),o)return Lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:s,measurementId:o};throw c}const l=503===Number(null==(i=null==t?void 0:t.customData)?void 0:i.httpStatus)?b(n,a.intervalMillis,30):b(n,a.intervalMillis),d={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return a.setThrottleMetadata(s,d),Lt.debug(`Calling attemptFetch again in ${l} millis`),zt(e,d,r,a)}}class Vt{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ut(e,t,n,r,a,i,s){const o=Ht(e);o.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Lt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>Lt.error(e)),t.push(o);const c=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(){if(!d())return Lt.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await u()}catch(e){return Lt.warn($t.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then(e=>e?r.getId():void 0),[l,h]=await Promise.all([o,c]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ot)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(i)||Ft(i,l.measurementId),a("js",new Date);const f=(null==s?void 0:s.config)??{};return f.origin="firebase",f.update=!0,null!=h&&(f.firebase_id=h),a("config",l.measurementId,f),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.app=e}_delete(){return delete qt[this.app.options.appId],Promise.resolve()}}let qt={},Kt=[];const Gt={};let Jt,Qt,Xt="dataLayer",Yt=!1;function Zt(){const e=[];if(function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:t});Lt.warn(n.message)}}function en(e,t,n){Zt();const r=e.options.appId;if(!r)throw $t.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw $t.create("no-api-key");Lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=qt[r])throw $t.create("already-exists",{id:r});if(!Yt){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Xt);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,a){let i=function(...e){window[r].push(arguments)};return window[a]&&"function"==typeof window[a]&&(i=window[a]),window[a]=jt(i,e,t,n),{gtagCore:i,wrappedGtag:window[a]}}(qt,Kt,Gt,Xt,"gtag");Qt=e,Jt=t,Yt=!0}qt[r]=Ut(e,Kt,Gt,t,Jt,Xt,n);return new Wt(e)}function tn(e,t,n){e=w(e),async function(e,t,n,r){if(r&&r.global){const t={};for(const e of Object.keys(n))t[`user_properties.${e}`]=n[e];return e("set",t),Promise.resolve()}e("config",await t,{update:!0,user_properties:n})}(Qt,qt[e.app.options.appId],t,n).catch(e=>Lt.error(e))}const nn="@firebase/analytics",rn="0.10.19";ke(new y(Mt,(e,{options:t})=>en(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),ke(new y("analytics-internal",function(e){try{const t=e.getProvider(Mt).getImmediate();return{logEvent:(e,n,r)=>function(e,t,n,r){e=w(e),async function(e,t,n,r,a){if(a&&a.global)e("event",n,r);else{const a=await t;e("event",n,{...r,send_to:a})}}(Qt,qt[e.app.options.appId],t,n,r).catch(e=>Lt.error(e))}(t,e,n,r),setUserProperties:(e,n)=>tn(t,e,n)}}catch(t){throw $t.create("interop-component-reg-failed",{reason:t})}},"PRIVATE")),$e(nn,rn),$e(nn,rn,"esm2020");const an=Le({apiKey:"AIzaSyARvhcoOdvquDDGHIBQgzK6j6i6JDMG_Bw",authDomain:"impostor-ffbfc.firebaseapp.com",projectId:"impostor-ffbfc",storageBucket:"impostor-ffbfc.firebasestorage.app",messagingSenderId:"958806903632",appId:"1:958806903632:web:6d1dd418e206cb14d47a55",measurementId:"G-S5NQC84X77"});if("undefined"!=typeof window)try{(function(e=function(e=Se){const t=Ce.get(e);if(!t&&e===Se&&c())return Le();if(!t)throw Me.create("no-app",{appName:e});return t}()){const t=Be(e=w(e),Mt);t.isInitialized()?t.getImmediate():function(e,t={}){const n=Be(e,Mt);if(n.isInitialized()){const e=n.getImmediate();if(g(t,n.getOptions()))return e;throw $t.create("already-initialized")}n.initialize({options:t})}(e)})(an);console.log("Firebase Analytics initialized")}catch(sn){console.warn("Analytics not available:",sn)}
