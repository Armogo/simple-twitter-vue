(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95016ffa"],{"01c6":function(t,e,a){},6454:function(t,e,a){},"6b27":function(t,e,a){},"6f1a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reply"},[a("Navbar"),a("div",{staticClass:"mid-area"},[a("OneTweet",{attrs:{"tweet-data":t.tweetData,"user-data":t.userData},on:{"close-modal":t.fetchTweet,"change-like":t.fetchTweet}}),a("ReplyList",{attrs:{"tweet-data":t.tweetData}})],1),a("Popular")],1)},r=[],n=a("5530"),i=a("1da1"),c=(a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"one-tweet-container"},[a("header",[a("svg",{attrs:{width:"17",height:"14",viewBox:"0 0 17 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.$router.back()}}},[a("path",{attrs:{d:"M15.9995 5.99988H3.4135L7.7065 1.70687C8.0965 1.31687 8.0965 0.683875 7.7065 0.292875C7.3165 -0.0981249 6.6835 -0.0971249 6.2925 0.292875L0.2925 6.29288C-0.0975 6.68288 -0.0975 7.31588 0.2925 7.70687L6.2925 13.7069C6.4875 13.9019 6.7425 13.9999 6.9995 13.9999C7.2565 13.9999 7.5115 13.9019 7.7065 13.7069C8.0965 13.3169 8.0965 12.6839 7.7065 12.2929L3.4135 7.99988H15.9995C16.5525 7.99988 16.9995 7.55288 16.9995 6.99988C16.9995 6.44688 16.5525 5.99988 15.9995 5.99988Z",fill:"black"}})]),a("div",{staticClass:"title"},[t._v("推文")])]),a("div",{staticClass:"tweet-card"},[a("div",{staticClass:"card-head"},[a("div",{staticClass:"thumbnail-container"},[a("img",{attrs:{src:t.tweetData.user.avatar,alt:""},on:{click:function(e){return t.othersProfile(t.tweetData.UserId)}}})]),a("div",[a("div",{staticClass:"name"},[t._v(t._s(t.tweetData.user.name))]),a("div",{staticClass:"account"},[t._v("@"+t._s(t.tweetData.user.account))])])]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"description"},[t._v(" "+t._s(t.tweetData.description)+" ")]),a("div",{staticClass:"time"},[t._v(t._s(t._f("detailedTime")(t.tweetData.createdAt)))])]),a("div",{staticClass:"card-footer"},[a("span",{staticClass:"reply-count"},[a("span",{staticClass:"count"},[t._v(t._s(t.tweetData.replies.length))]),t._v(" 回覆")]),a("span",{staticClass:"like-count"},[a("span",{staticClass:"count"},[t._v(t._s(t.tweetData.likes.length))]),t._v(" 喜歡次數")])]),a("div",{staticClass:"icon-wrapper"},[a("div",{staticClass:"reply-icon-wrapper",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.showModal(t.tweetData.id)}}},[a("svg",{attrs:{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M7.77881 0.40127L5.18631 0.39502H5.18506C2.45131 0.39502 0.310059 2.53689 0.310059 5.27127C0.310059 7.83252 2.30131 9.77502 4.97568 9.87752V12.27C4.97568 12.3375 5.00318 12.4488 5.05068 12.5219C5.13943 12.6625 5.29068 12.7388 5.44568 12.7388C5.53193 12.7388 5.61881 12.715 5.69693 12.665C5.86193 12.56 9.74256 10.0775 10.7519 9.22377C11.9407 8.21752 12.6519 6.74252 12.6538 5.27877V5.26814C12.6501 2.53877 10.5101 0.401269 7.77881 0.400644V0.40127ZM10.1457 8.50877C9.43693 9.10877 7.10693 10.6369 5.91318 11.4106V9.41877C5.91318 9.16002 5.70381 8.95002 5.44443 8.95002H5.19693C2.90943 8.95002 1.24818 7.40252 1.24818 5.27127C1.24818 3.06252 2.97818 1.33252 5.18568 1.33252L7.77756 1.33877H7.77881C9.98631 1.33877 11.7163 3.06752 11.7176 5.27377C11.7157 6.46752 11.1288 7.67627 10.1463 8.50877H10.1457Z",fill:"#657786"}})])]),a("div",{staticClass:"like-icon-wrapper",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.changeLike.apply(null,arguments)}}},[t.ifLiked?a("svg",{attrs:{width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M11 19.6381H10.986C8.40295 19.5901 0.949951 12.8561 0.949951 6.47812C0.949951 3.41412 3.47495 0.724121 6.35295 0.724121C8.64295 0.724121 10.183 2.30412 10.999 3.45412C11.813 2.30612 13.353 0.724121 15.644 0.724121C18.524 0.724121 21.048 3.41412 21.048 6.47912C21.048 12.8551 13.594 19.5891 11.011 19.6361H11V19.6381Z",fill:"#E0245E"}})]):a("svg",{attrs:{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M6.5 12.5239H6.49125C4.87687 12.4939 0.21875 8.28514 0.21875 4.29889C0.21875 2.38389 1.79687 0.702637 3.59562 0.702637C5.02687 0.702637 5.98937 1.69014 6.49937 2.40889C7.00812 1.69139 7.97062 0.702637 9.4025 0.702637C11.2025 0.702637 12.78 2.38389 12.78 4.29951C12.78 8.28451 8.12125 12.4933 6.50687 12.5226H6.5V12.5239ZM3.59625 1.64076C2.29625 1.64076 1.15687 2.88326 1.15687 4.30014C1.15687 7.88764 5.55312 11.5476 6.50062 11.5864C7.44937 11.5476 11.8444 7.88826 11.8444 4.30014C11.8444 2.88326 10.705 1.64076 9.405 1.64076C7.825 1.64076 6.9425 3.47576 6.935 3.49389C6.79125 3.84514 6.2125 3.84514 6.06812 3.49389C6.05937 3.47514 5.1775 1.64076 3.59687 1.64076H3.59625Z",fill:"#657786"}})])])])]),t.isModalVisible?a("ReplyModal",{attrs:{"tweet-content":t.oneTweet,"initial-user":t.userData},on:{"close-modal":t.closeModal}}):t._e()],1)}),o=[],l=(a("a9e3"),a("2797")),u=a("2708"),d=a("2e15"),p=function(){return localStorage.getItem("user")},w={components:{ReplyModal:l["a"]},mixins:[u["b"]],props:{tweetData:{type:Object,required:!0},userData:{type:Object,required:!0}},data:function(){return{isModalVisible:!1,oneTweet:{}}},methods:{showModal:function(){this.oneTweet=Object(n["a"])({},this.tweetData),this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1,this.$emit("close-modal")},othersProfile:function(t){t===Number(p())?this.$router.push({name:"profile"}):this.$router.push({name:"other-profile",params:{id:t}})},changeLike:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.tweetData.likes.some((function(e){return e.UserId===t.userData.id}))){e.next=14;break}return e.prev=1,e.next=4,d["a"].postUnlike(t.tweetData.id,t.userData.id);case 4:if(a=e.sent,"OK"===a.statusText){e.next=7;break}throw new Error(a);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log("error",e.t0.response||e.t0);case 12:e.next=25;break;case 14:return e.prev=14,e.next=17,d["a"].postLike(t.tweetData.id,t.userData.id);case 17:if(s=e.sent,"OK"===s.statusText){e.next=20;break}throw new Error(s);case 20:e.next=25;break;case 22:e.prev=22,e.t1=e["catch"](14),console.log("error",e.t1.response||e.t1);case 25:t.$emit("change-like");case 26:case"end":return e.stop()}}),e,null,[[1,9],[14,22]])})))()}},computed:{ifLiked:function(){var t=this;return this.tweetData.likes.some((function(e){return e.UserId===t.userData.id}))}}},f=w,h=(a("f81b"),a("2877")),v=Object(h["a"])(f,c,o,!1,null,"bd92d966",null),C=v.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},t._l(t.tweetData.replies,(function(e){return a("div",{key:e.id,staticClass:"tweet-card"},[a("div",{staticClass:"thumbnail-container"},[a("img",{attrs:{src:e.user.avatar,alt:""},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.othersProfile(e.UserId)}}})]),a("div",{staticClass:"right-content"},[a("div",{staticClass:"title-wrapper"},[a("div",{staticClass:"name",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.othersProfile(e.UserId)}}},[t._v(" "+t._s(e.user.name)+" ")]),a("div",{staticClass:"account"},[t._v(t._s(e.user.account))]),a("div",{staticClass:"dot"}),a("div",{staticClass:"createdAt"},[t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),a("div",{staticClass:"reply-container"},[a("span",[t._v("回覆")]),a("span",{staticClass:"reply-target"},[t._v("@"+t._s(t.tweetData.user.account))])]),a("p",{staticClass:"description"},[t._v(" "+t._s(e.comment)+" ")])])])})),0)},b=[],g={mixins:[u["b"]],props:{tweetData:{type:Object,required:!0}},methods:{othersProfile:function(t){var e=function(){return localStorage.getItem("user")};t===Number(e())?this.$router.push({name:"profile"}):this.$router.push({name:"other-profile",params:{id:t}})}}},k=g,_=(a("88fb"),Object(h["a"])(k,m,b,!1,null,"479acea6",null)),D=_.exports,x=a("d178"),O=a("3b8f"),M=a("3fae"),y=a("2fa3"),T={components:{OneTweet:C,ReplyList:D,Navbar:x["a"],Popular:O["a"]},data:function(){return{userData:{},tweetData:{}}},methods:{fetchTweet:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$route.params.id,e.prev=1,e.next=4,M["a"].getTweet(a);case 4:if(s=e.sent,"OK"===s.statusText){e.next=7;break}throw new Error(s.data.message);case 7:t.tweetData=Object(n["a"])({},s.data),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},fetchCurrentUser:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M["a"].getCurrentUser();case 3:if(a=e.sent,"OK"===a.statusText){e.next=6;break}throw new Error(a.data.message);case 6:t.userData=Object(n["a"])({},a.data),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},created:function(){Object(y["c"])(this),Object(y["d"])(this,"8347"),this.fetchTweet(),this.fetchCurrentUser()}},j=T,L=(a("7341"),Object(h["a"])(j,s,r,!1,null,"e62175ea",null));e["default"]=L.exports},7341:function(t,e,a){"use strict";a("6b27")},"88fb":function(t,e,a){"use strict";a("01c6")},f81b:function(t,e,a){"use strict";a("6454")}}]);
//# sourceMappingURL=chunk-95016ffa.55b3d422.js.map