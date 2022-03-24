(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60f0cc43"],{"4e2c":function(t,e,s){"use strict";s("8aba")},"50fc":function(t,e,s){"use strict";var a=s("2fa3"),i=function(){return localStorage.getItem("token")};e["a"]={getAllTweets:function(){return a["b"].get("api/admin",{headers:{Authorization:"Bearer ".concat(i())}})},getAllUsers:function(){return a["b"].get("api/admin/users",{headers:{Authorization:"Bearer ".concat(i())}})},deleteTweet:function(t){return a["b"].delete("api/admin/tweets/".concat(t),{headers:{Authorization:"Bearer ".concat(i())}})}}},"8aba":function(t,e,s){},e10c:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"users-list"},[s("header",[t._v("使用者列表")]),s("div",{staticClass:"container"},t._l(t.users,(function(e){return s("div",{key:e.id,staticClass:"user-card"},[s("img",{staticClass:"cover",attrs:{src:e.cover,alt:""}}),s("div",{staticClass:"name-avatar"},[s("img",{staticClass:"avatar",attrs:{src:e.avatar}}),s("div",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"account"},[t._v("@"+t._s(e.account))])]),s("div",{staticClass:"row-action"},[s("div",{staticClass:"tweet-icon"},[s("svg",{attrs:{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M14.8461 2.24193L10.6981 2.23193H10.6961C6.32212 2.23193 2.89612 5.65893 2.89612 10.0339C2.89612 14.1319 6.08212 17.2399 10.3611 17.4039V21.2319C10.3611 21.3399 10.4051 21.5179 10.4811 21.6349C10.6231 21.8599 10.8651 21.9819 11.1131 21.9819C11.2511 21.9819 11.3901 21.9439 11.5151 21.8639C11.7791 21.6959 17.9881 17.7239 19.6031 16.3579C21.5051 14.7479 22.6431 12.3879 22.6461 10.0459V10.0289C22.6401 5.66193 19.2161 2.24193 14.8461 2.24093V2.24193ZM18.6331 15.2139C17.4991 16.1739 13.7711 18.6189 11.8611 19.8569V16.6699C11.8611 16.2559 11.5261 15.9199 11.1111 15.9199H10.7151C7.05512 15.9199 4.39712 13.4439 4.39712 10.0339C4.39712 6.49993 7.16512 3.73193 10.6971 3.73193L14.8441 3.74193H14.8461C18.3781 3.74193 21.1461 6.50793 21.1481 10.0379C21.1451 11.9479 20.2061 13.8819 18.6341 15.2139H18.6331Z",fill:"#657786"}})])]),s("div",{staticClass:"tweet-num"},[t._v(t._s(e.tweetsCount))]),s("div",{staticClass:"love-icon"},[s("svg",{attrs:{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12.8 21.6379H12.786C10.203 21.5899 2.75 14.8559 2.75 8.47788C2.75 5.41388 5.275 2.72388 8.153 2.72388C10.443 2.72388 11.983 4.30388 12.799 5.45388C13.613 4.30588 15.153 2.72388 17.444 2.72388C20.324 2.72388 22.848 5.41388 22.848 8.47888C22.848 14.8549 15.394 21.5889 12.811 21.6359H12.8V21.6379ZM8.154 4.22488C6.074 4.22488 4.251 6.21288 4.251 8.47988C4.251 14.2199 11.285 20.0759 12.801 20.1379C14.319 20.0759 21.351 14.2209 21.351 8.47988C21.351 6.21288 19.528 4.22488 17.448 4.22488C14.92 4.22488 13.508 7.16088 13.496 7.18988C13.266 7.75188 12.34 7.75188 12.109 7.18988C12.095 7.15988 10.684 4.22488 8.155 4.22488H8.154Z",fill:"#657786"}})])]),s("div",{staticClass:"love-num"},[t._v(t._s(e.likesCount))])]),s("div",{staticClass:"follow"},[s("div",{staticClass:"follow-num"},[t._v(t._s(e.followingsCount)+"個")]),s("div",{staticClass:"followings"},[t._v("跟隨中")]),s("div",{staticClass:"follow-num"},[t._v(t._s(e.followersCount)+"個")]),s("div",{staticClass:"followers"},[t._v("跟隨者")])])])})),0)])},i=[],n=s("1da1"),r=(s("96cf"),s("50fc")),c=s("2fa3"),o={name:"AdminUsers",data:function(){return{users:[]}},methods:{fetchApiData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r["a"].getAllUsers();case 3:if(s=e.sent,a=s.data,"OK"===s.statusText){e.next=7;break}throw new Error(a.message);case 7:t.users=a,e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log("error",e.t0),c["a"].fire({icon:"warning",title:"無法載入資料"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},created:function(){Object(c["c"])(this),Object(c["d"])(this,"10550"),this.fetchApiData()}},l=o,u=(s("4e2c"),s("2877")),C=Object(u["a"])(l,a,i,!1,null,"b6cfe158",null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-60f0cc43.f78bf725.js.map