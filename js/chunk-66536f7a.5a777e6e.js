(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66536f7a"],{"2c50":function(e,t,r){},"6f71":function(e,t,r){"use strict";var a=r("2fa3"),n=function(){return localStorage.getItem("token")};t["a"]={getUser:function(e){return a["b"].get("/api/users/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},getOtherUser:function(e){return a["b"].get("/api/users/".concat(e,"/userInfo"),{headers:{Authorization:"Bearer ".concat(n())}})},getTweets:function(e){return a["b"].get("/api/users/".concat(e,"/tweets"),{headers:{Authorization:"Bearer ".concat(n())}})},getFollowings:function(e){return a["b"].get("/api/users/".concat(e,"/followings"),{headers:{Authorization:"Bearer ".concat(n())}})},getFollowers:function(e){return a["b"].get("/api/users/".concat(e,"/followers"),{headers:{Authorization:"Bearer ".concat(n())}})},getReplieds:function(e){return a["b"].get("/api/users/".concat(e,"/replied_tweets"),{headers:{Authorization:"Bearer ".concat(n())}})},getLikes:function(e){return a["b"].get("/api/users/".concat(e,"/likes"),{headers:{Authorization:"Bearer ".concat(n())}})},getProfile:function(e){return a["b"].get("/api/users/".concat(e,"/profile"),{headers:{Authorization:"Bearer ".concat(n())}})},getInfo:function(e){return a["b"].get("/api/users/".concat(e,"/userInfo"),{headers:{Authorization:"Bearer ".concat(n())}})},updateForm:function(e,t){var r=t.formData;return a["b"].put("/api/users/".concat(e," "),r,{headers:{Authorization:"Bearer ".concat(n())}})}}},c0df:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"a-tweet-container"},e._l(e.replieds,(function(t){return r("div",{key:t.TweetId,staticClass:"a-tweet"},[r("img",{staticClass:"avatar",attrs:{src:e.initialUser.avatar},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.othersProfile(t.tweet.user.id)}}}),r("div",{staticClass:"content"},[r("div",{staticClass:"name-account"},[r("div",{staticClass:"name"},[e._v(e._s(e.initialUser.name))]),r("div",{staticClass:"account"},[e._v(" @"+e._s(e.initialUser.account)+"・"+e._s(e._f("fromNow")(t.createdAt))+" ")])]),r("div",{staticClass:"replied-account"},[e._v(" 回覆 "),r("div",{staticClass:"at-account"},[e._v("@"+e._s(t.tweet.user.account))])]),r("div",{staticClass:"description",on:{click:function(r){return e.toOneTweet(t)}}},[e._v(" "+e._s(t.comment)+" ")])])])})),0)},n=[],i=r("1da1"),s=(r("96cf"),r("a9e3"),r("2708")),o=r("2fa3"),c=r("6f71"),u={name:"OtherUserReplied",props:{initialUser:{type:Object,required:!0}},data:function(){return{replieds:[]}},mixins:[s["b"]],methods:{fetchApiReplieds:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=Number(e.$route.params.id),t.next=4,c["a"].getReplieds(r);case 4:if(a=t.sent,n=a.data,"OK"===a.statusText){t.next=8;break}throw new Error(n.message);case 8:e.replieds=n,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log("error",t.t0),o["a"].fire({icon:"warning",title:"無法載入資料"});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},othersProfile:function(e){var t=function(){return localStorage.getItem("user")};e===Number(t())?this.$router.push({name:"profile"}):this.$router.push({name:"other-profile",params:{id:e}})},toOneTweet:function(e){this.$router.push({name:"tweet",params:{id:e.TweetId}})}},created:function(){this.fetchApiReplieds()}},l=u,f=(r("dbb1"),r("2877")),d=Object(f["a"])(l,a,n,!1,null,"25004ed1",null);t["default"]=d.exports},dbb1:function(e,t,r){"use strict";r("2c50")}}]);
//# sourceMappingURL=chunk-66536f7a.5a777e6e.js.map