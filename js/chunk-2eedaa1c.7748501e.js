(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2eedaa1c"],{"24f2":function(e,t,r){"use strict";r("84d8")},"43a0":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"a-tweet-container"},e._l(e.likes,(function(t){return r("div",{key:t.TweetId,staticClass:"a-tweet"},[r("img",{staticClass:"avatar",attrs:{src:t.tweet.user.avatar,alt:"?"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.othersProfile(t.tweet.user.id)}}}),r("div",{staticClass:"content"},[r("div",{staticClass:"name-account"},[r("div",{staticClass:"name",on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.othersProfile(t.tweet.user.id)}}},[e._v(" "+e._s(t.tweet.user.name)+" ")]),r("div",{staticClass:"account"},[e._v(" @"+e._s(t.tweet.user.account)+"・"+e._s(e._f("fromNow")(t.createdAt))+" ")])]),r("div",{staticClass:"description"},[e._v(e._s(t.tweet.description))]),r("div",{staticClass:"replies-likes"},[r("div",{staticClass:"replies",on:{click:function(r){return e.toOneTweet(t)}}},[r("div",{staticClass:"replies-icon"},[r("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M8.77881 1.40127L6.18631 1.39502H6.18506C3.45131 1.39502 1.31006 3.53689 1.31006 6.27127C1.31006 8.83252 3.30131 10.775 5.97568 10.8775V13.27C5.97568 13.3375 6.00318 13.4488 6.05068 13.5219C6.13943 13.6625 6.29068 13.7388 6.44568 13.7388C6.53193 13.7388 6.61881 13.715 6.69693 13.665C6.86193 13.56 10.7426 11.0775 11.7519 10.2238C12.9407 9.21752 13.6519 7.74252 13.6538 6.27877V6.26814C13.6501 3.53877 11.5101 1.40127 8.77881 1.40064V1.40127ZM11.1457 9.50877C10.4369 10.1088 8.10693 11.6369 6.91318 12.4106V10.4188C6.91318 10.16 6.70381 9.95002 6.44443 9.95002H6.19693C3.90943 9.95002 2.24818 8.40252 2.24818 6.27127C2.24818 4.06252 3.97818 2.33252 6.18568 2.33252L8.77756 2.33877H8.77881C10.9863 2.33877 12.7163 4.06752 12.7176 6.27377C12.7157 7.46752 12.1288 8.67627 11.1463 9.50877H11.1457Z",fill:"#657786"}})])]),r("div",{staticClass:"replies-num"},[e._v(e._s(t.tweet.replies.length))])]),t.tweet.likes.find((function(t){return t.UserId===e.initialUser.id}))?r("div",{staticClass:"likes"},[r("div",{staticClass:"likes-icon",on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.unlike(t.TweetId)}}},[r("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M12 21.6381H11.986C9.40295 21.5901 1.94995 14.8561 1.94995 8.47812C1.94995 5.41412 4.47495 2.72412 7.35295 2.72412C9.64295 2.72412 11.183 4.30412 11.999 5.45412C12.813 4.30612 14.353 2.72412 16.644 2.72412C19.524 2.72412 22.048 5.41412 22.048 8.47912C22.048 14.8551 14.594 21.5891 12.011 21.6361H12V21.6381Z",fill:"#E0245E"}})])]),r("div",{staticClass:"likes-num"},[e._v(e._s(t.tweet.likes.length))])]):e._e()])])])})),0)},a=[],s=r("1da1"),i=(r("a9e3"),r("96cf"),r("2708")),o=r("2fa3"),c=r("6f71"),u=r("2e15"),l=function(){return localStorage.getItem("user")},f={name:"UserLikes",props:{initialUser:{type:Object,required:!0}},data:function(){return{likes:[]}},mixins:[i["b"]],methods:{unlike:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].postUnlike(e,l());case 3:if(n=r.sent,a=n.data,"OK"===n.statusText){r.next=7;break}throw new Error(a.message);case 7:t.fetchApiLikes(),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0),o["a"].fire({icon:"error",title:"無法移除最愛"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},like:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].postLike(e,l());case 3:if(n=r.sent,a=n.data,"OK"===n.statusText){r.next=7;break}throw new Error(a.message);case 7:t.fetchApiLikes(),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0),o["a"].fire({icon:"error",title:"無法加入最愛"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},fetchApiLikes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].getLikes(l());case 3:if(r=t.sent,n=r.data,"OK"===r.statusText){t.next=7;break}throw new Error(n.message);case 7:e.likes=n,t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log("error",t.t0),o["a"].fire({icon:"warning",title:"無法載入資料"});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},othersProfile:function(e){e===Number(l())?this.$router.push({name:"profile"}):this.$router.push({name:"other-profile",params:{id:e}})},toOneTweet:function(e){this.$router.push({name:"tweet",params:{id:e.TweetId}})}},created:function(){this.fetchApiLikes()}},p=f,h=(r("24f2"),r("2877")),d=Object(h["a"])(p,n,a,!1,null,"1c84345d",null);t["default"]=d.exports},"6f71":function(e,t,r){"use strict";var n=r("2fa3"),a=function(){return localStorage.getItem("token")};t["a"]={getUser:function(e){return n["b"].get("/api/users/".concat(e),{headers:{Authorization:"Bearer ".concat(a())}})},getOtherUser:function(e){return n["b"].get("/api/users/".concat(e,"/userInfo"),{headers:{Authorization:"Bearer ".concat(a())}})},getTweets:function(e){return n["b"].get("/api/users/".concat(e,"/tweets"),{headers:{Authorization:"Bearer ".concat(a())}})},getFollowings:function(e){return n["b"].get("/api/users/".concat(e,"/followings"),{headers:{Authorization:"Bearer ".concat(a())}})},getFollowers:function(e){return n["b"].get("/api/users/".concat(e,"/followers"),{headers:{Authorization:"Bearer ".concat(a())}})},getReplieds:function(e){return n["b"].get("/api/users/".concat(e,"/replied_tweets"),{headers:{Authorization:"Bearer ".concat(a())}})},getLikes:function(e){return n["b"].get("/api/users/".concat(e,"/likes"),{headers:{Authorization:"Bearer ".concat(a())}})},getProfile:function(e){return n["b"].get("/api/users/".concat(e,"/profile"),{headers:{Authorization:"Bearer ".concat(a())}})},getInfo:function(e){return n["b"].get("/api/users/".concat(e,"/userInfo"),{headers:{Authorization:"Bearer ".concat(a())}})},updateForm:function(e,t){var r=t.formData;return n["b"].put("/api/users/".concat(e," "),r,{headers:{Authorization:"Bearer ".concat(a())}})}}},"84d8":function(e,t,r){}}]);
//# sourceMappingURL=chunk-2eedaa1c.7748501e.js.map