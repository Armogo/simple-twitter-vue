(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34809a95"],{"0cb2":function(e,t,a){var n=a("7b0b"),r=Math.floor,s="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,a,i,u,l){var p=a+e.length,d=i.length,f=c;return void 0!==u&&(u=n(u),f=o),s.call(l,f,(function(n,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(p);case"<":o=u[s.slice(1,-1)];break;default:var c=+s;if(0===c)return n;if(c>d){var l=r(c/10);return 0===l?n:l<=d?void 0===i[l-1]?s.charAt(1):i[l-1]+s.charAt(1):n}o=i[c-1]}return void 0===o?"":o}))}},2532:function(e,t,a){"use strict";var n=a("23e7"),r=a("5a34"),s=a("1d80"),o=a("577e"),c=a("ab13");n({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~o(s(this)).indexOf(o(r(e)),arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,a){"use strict";var n=a("d784"),r=a("d039"),s=a("825a"),o=a("a691"),c=a("50c4"),i=a("577e"),u=a("1d80"),l=a("8aa5"),p=a("0cb2"),d=a("14c3"),f=a("b622"),v=f("replace"),m=Math.max,w=Math.min,h=function(e){return void 0===e?e:String(e)},g=function(){return"$0"==="a".replace(/./,"$0")}(),b=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),C=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));n("replace",(function(e,t,a){var n=b?"$":"$0";return[function(e,a){var n=u(this),r=void 0==e?void 0:e[v];return void 0!==r?r.call(e,n,a):t.call(i(n),e,a)},function(e,r){var u=s(this),f=i(e);if("string"===typeof r&&-1===r.indexOf(n)&&-1===r.indexOf("$<")){var v=a(t,u,f,r);if(v.done)return v.value}var g="function"===typeof r;g||(r=i(r));var b=u.global;if(b){var C=u.unicode;u.lastIndex=0}var x=[];while(1){var k=d(u,f);if(null===k)break;if(x.push(k),!b)break;var P=i(k[0]);""===P&&(u.lastIndex=l(f,c(u.lastIndex),C))}for(var y="",F=0,$=0;$<x.length;$++){k=x[$];for(var _=i(k[0]),I=m(w(o(k.index),f.length),0),M=[],A=1;A<k.length;A++)M.push(h(k[A]));var N=k.groups;if(g){var O=[_].concat(M,I,f);void 0!==N&&O.push(N);var q=i(r.apply(void 0,O))}else q=p(_,f,I,M,N,r);I>=F&&(y+=f.slice(F,I)+q,F=I+_.length)}return y+f.slice(F)}]}),!C||!g||b)},"5a34":function(e,t,a){var n=a("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5c9c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("div",{staticClass:"svg-container"},[a("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30.6996 23.4709C30.6996 23.4709 23.2328 35.5781 17.1109 35.5781C6.40314 35.5781 16.3821 12.5132 24.1916 12.5132C29.641 12.5132 30.6996 23.4709 30.6996 23.4709Z",fill:"#FF6600"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M39.5723 38.6972C37.4451 40.9607 34.8198 42.6976 31.9044 43.7701C28.989 44.8426 25.8639 45.2213 22.7767 44.8761C19.6895 44.5309 16.7252 43.4713 14.1188 41.7813C11.5125 40.0914 9.33573 37.8175 7.76123 35.1401C9.5314 37.5477 12.5338 39.1527 16.803 39.1527C27.3199 39.1527 33.2899 30.98 33.2899 30.98C33.2899 30.98 33.8062 37.4392 39.5593 38.6972H39.5723Z",fill:"#FF6600"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M42.7223 15.7451C44.2963 18.7527 45.0781 22.1116 44.9939 25.505C44.9096 28.8984 43.9621 32.2144 42.2407 35.1401C40.8792 34.3764 39.8725 33.1082 39.4379 31.609L37.1558 24.7724L42.7223 15.7451Z",fill:"#FF6600"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M25.0031 5.01737C30.0185 5.01403 34.8513 6.89881 38.5398 10.2967L34.7521 16.4088C33.3811 12.843 30.5957 9.2729 25.1767 9.2729C14.0784 9.2729 5.85231 21.3888 5.85231 28.9846C5.84986 29.9669 5.97528 30.9454 6.22543 31.8953C5.11558 28.8725 4.75205 25.6265 5.16572 22.4331C5.57938 19.2398 6.75802 16.1934 8.60147 13.5531C10.4449 10.9127 12.8987 8.75634 15.7542 7.26726C18.6097 5.77818 21.7826 5.00039 25.0031 5V5.01737Z",fill:"#FF6600"}})])]),a("span",[e._v("建立你的帳號")])]),a("div",{staticClass:"form-container"},[a("form",{attrs:{action:"",id:"sign-up-form"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.signUp.apply(null,arguments)}}},[a("div",{staticClass:"input-wrapper"},[a("span",[e._v("帳號")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{type:"text",name:"account",autofocus:"",required:""},domProps:{value:e.account},on:{focus:e.focusInput,input:function(t){t.target.composing||(e.account=t.target.value)}}}),a("hr",{class:{"now-focus":"account"===e.nowFocus}})]),a("div",{staticClass:"input-wrapper"},[a("span",[e._v("名稱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name"},domProps:{value:e.name},on:{focus:e.focusInput,input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("hr",{class:{"now-focus":"name"===e.nowFocus}})]),a("div",{staticClass:"input-wrapper"},[a("span",[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",required:""},domProps:{value:e.email},on:{focus:e.focusInput,input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("hr",{class:{"now-focus":"email"===e.nowFocus}})]),a("div",{staticClass:"input-wrapper"},[a("span",[e._v("密碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",required:""},domProps:{value:e.password},on:{focus:e.focusInput,input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("hr",{class:{"now-focus":"password"===e.nowFocus}})]),a("div",{staticClass:"input-wrapper"},[a("span",[e._v("密碼確認")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkPassword,expression:"checkPassword"}],attrs:{type:"password",name:"checkPassword",required:""},domProps:{value:e.checkPassword},on:{focus:e.focusInput,input:function(t){t.target.composing||(e.checkPassword=t.target.value)}}}),a("hr",{class:{"now-focus":"checkPassword"===e.nowFocus}})])]),a("button",{attrs:{type:"submit",form:"sign-up-form",disabled:e.isProcessing}},[e._v(" 註冊 ")])]),a("div",{staticClass:"footer"},[a("router-link",{staticClass:"cancel-sign-up",attrs:{to:"/signin"}},[e._v("取消")])],1)])},r=[],s=a("1da1"),o=(a("96cf"),a("b0c0"),a("caad"),a("2532"),a("ac1f"),a("5319"),a("2fa3")),c=a("28e8"),i={data:function(){return{account:"",name:"",email:"",password:"",checkPassword:"",isProcessing:!1,nowFocus:""}},methods:{focusInput:function(e){this.nowFocus=e.target.name},signUp:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,a={account:e.account,name:e.name,email:e.email,password:e.password,checkPassword:e.checkPassword,avatar:"https://cdn-icons-png.flaticon.com/512/5066/5066665.png",cover:"https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-coconut-palm-tree-around-white-cloud-blue-sky-vacation-travel-background_74190-14753.jpg",introduction:""},e.account&&e.password&&e.name&&e.email&&e.checkPassword){t.next=5;break}return o["a"].fire({icon:"warning",title:"請填寫完整資料"}),t.abrupt("return");case 5:if(e.password===e.checkPassword){t.next=8;break}return o["a"].fire({icon:"warning",title:"密碼與密碼確認欄位的資料不一致，請確認!"}),t.abrupt("return");case 8:return e.isProcessing=!0,t.next=11,c["a"].signUp(a);case 11:if(n=t.sent,r=n.data,"Accept"===r){t.next=15;break}throw new Error(r.message);case 15:e.isProcessing=!1,o["a"].fire({icon:"success",title:"註冊成功!"}),e.$router.push("/"),t.next=26;break;case 20:t.prev=20,t.t0=t["catch"](0),e.checkPassword="",e.isProcessing=!1,t.t0.response.data.includes("account")?o["a"].fire({icon:"warning",title:"".concat(t.t0.response.data.replace("account","帳號"))}):o["a"].fire({icon:"warning",title:"".concat(t.t0.response.data)}),console.log("error",t.t0.response||t.t0);case 26:case"end":return t.stop()}}),t,null,[[0,20]])})))()}}},u=i,l=(a("ebbf"),a("2877")),p=Object(l["a"])(u,n,r,!1,null,"57d75ac7",null);t["default"]=p.exports},"6ef4":function(e,t,a){},ab13:function(e,t,a){var n=a("b622"),r=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[r]=!1,"/./"[e](t)}catch(n){}}return!1}},caad:function(e,t,a){"use strict";var n=a("23e7"),r=a("4d64").includes,s=a("44d2");n({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")},ebbf:function(e,t,a){"use strict";a("6ef4")}}]);
//# sourceMappingURL=chunk-34809a95.e23e9b20.js.map