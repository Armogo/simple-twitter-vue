<template>
  <div class="container">
    <Navbar :initial-user="userData" />
    <!-- TODO 在線使用者名單 -->
    <aside class="user-list">
      <p class="user-list-title">上線使用者({{ attendees.length }})</p>
      <ul>
        <li v-for="(attendee, index) in attendees" :key="index">
          <img :src="attendee.avatar" alt="" />
          <span class="name">{{ attendee.name }}</span>
          <span class="account">@{{ attendee.account }}</span>
        </li>
      </ul>
    </aside>
    <!-- TODO 及時聊天視窗 -->
    <main class="room">
      <p class="room-title">公開聊天室</p>
      <div class="room-body scrollbar">
        <div v-for="(msg, index) in msgs" :key="index">
          <div :class="msg.type">
            <span>{{ msg.text }}</span>
          </div>
          <div
            :class="
              msg.type === 'connection'
                ? 'connection-time'
                : msg.type === 'msg-in'
                ? 'msg-in-time'
                : 'msg-out-time'
            "
          >
            <span>{{ msg.time }}</span>
          </div>
        </div>
      </div>
      <div class="room-footer">
        <input
          type="text"
          placeholder="輸入訊息..."
          v-model="newMsg"
          @keyup.enter="sendMessage"
        />
        <svg
          @click="sendMessage"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.13 9.35798L1.614 0.107979C1.324 -0.0440207 0.973998 0.00597923 0.740999 0.233979C0.510999 0.459979 0.447999 0.810979 0.590999 1.10198L4.953 10.022L0.590999 18.942C0.447999 19.234 0.510999 19.585 0.740999 19.81C0.885998 19.95 1.074 20.022 1.264 20.022C1.384 20.022 1.504 19.994 1.614 19.935L19.131 10.685C19.376 10.555 19.531 10.299 19.531 10.021C19.531 9.74298 19.376 9.48898 19.131 9.35898L19.13 9.35798ZM2.948 2.50998L15.752 9.27198H6.255L2.948 2.51198V2.50998ZM6.255 10.77H15.753L2.948 17.535L6.255 10.772V10.77Z"
            fill="#FF6600"
          />
        </svg>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: -10px 0 0 378px;
  display: flex;
  height: 100vh;

  .user-list {
    border: 1px solid #e6ecf0;
    width: 390px;

    .user-list-title {
      font-family: Noto Sans TC;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
      color: #1c1c1c;
      margin-left: 15px;
      margin-block: 15px 14px;
    }
    ul {
      padding-inline-start: 0px;
      margin-block: 0em;
      li {
        border: 1px solid #e6ecf0;
        list-style: none;
        display: flex;
        padding-top: 10px;
        padding-bottom: 15px;
        padding-left: 15px;
        padding-right: min(15px);

        img {
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }

        span {
          margin: auto 0%;
        }

        // common CSS for .name and .account
        .name,
        .account {
          font-family: Noto Sans TC;
          font-style: normal;
          font-size: 15px;
          line-height: 22px;
        }

        .name {
          margin-left: 10px;
          margin-right: 5px;
          font-weight: bold;
          color: #1c1c1c;
        }

        .account {
          font-weight: 500;
          color: #657786;
        }
      }
    }
    .test-btn {
      margin: auto 0 0 0;
    }
  }
  .room {
    flex: 1;
    position: relative;
    display: flex;
    flex-flow: column;

    .room-title {
      font-family: Noto Sans TC;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
      color: #1c1c1c;
      margin-left: 15px;
      margin-block: 13px 14px;
    }
    .room-body {
      flex: 1;
      overflow-y: scroll;
      margin: 0 15px;

      // common CSS for showing messages
      .connection,
      .msg-in,
      .msg-out {
        padding: 10px 15px;
        width: fit-content;
        font-family: Noto Sans TC;
        font-style: normal;
        font-size: 15px;
      }

      .connection {
        background: #e5e5e5;
        border-radius: 50px;
        margin: 0 auto;
        font-weight: 500;
        line-height: 15px;
        text-align: center;
        color: #657786;
      }

      .msg-in {
        background: #e6ecf0;
        border-radius: 25px 25px 25px 0px;
        line-height: 20px;
        color: #1c1c1c;
      }

      .msg-out {
        background: #ff6600;
        border-radius: 25px 25px 0px 25px;
        margin: 0 0 0 auto;
        line-height: 20px;
        color: #ffffff;
      }

      // common CSS for showing time
      .connection-time,
      .msg-in-time,
      .msg-out-time {
        margin-top: 2px;
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 13px;
        color: #657786;
      }

      .connection-time {
        text-align: center;
        margin-bottom: 15px;
      }

      .msg-in-time {
        margin-bottom: 35px;
      }

      .msg-out-time {
        @extend .msg-in-time;
        width: fit-content;
        margin-left: auto;
      }
    }

    .room-footer {
      display: flex;
      align-items: center;
      height: 55px;
      border: 1px solid #e6ecf0;

      input {
        height: 32px;
        flex: 1;
        margin: 12px 17px 11px 15px;
        padding: 0 0 0 15px;
        background: #e6ecf0;
        border-radius: 50px;
        border: none;
        outline: none;

        &::placeholder {
          font-family: Noto Sans TC;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 15px;
          color: rgba(0, 0, 0, 0.4);
        }
      }
      svg {
        height: 20px;
        width: 19px;
        margin-right: 17.5px;
        margin-top: 4px;
      }
    }
  }
}
// 客製scrollbar
.scrollbar {
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: none;
  }
}
</style>

<script>
import Navbar from "./../components/Navbar";
import { io } from "socket.io-client";
import { TWLocale } from "./../utils/mixins";
import user from "./../api/user";
import {
  keepUnauthorizedOut,
  roleAccessControl,
  Toast,
} from "../utils/helpers";

export default {
  name: "PublicChatRoom",
  components: {
    Navbar,
  },
  data() {
    return {
      // userId: Number(localStorage.getItem("user")),
      userId: localStorage.getItem("user"),
      userData: {},
      msgs: [],
      newMsg: "",
      attendees: [],
      // 連線至socket server
      socket: io("https://actwitter.herokuapp.com"),
    };
  },
  methods: {
    async fetchUser(id) {
      try {
        const response = await user.getUserInfo(id);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        this.userData = { ...response.data };

        // 避免重複加入相同使用者資料
        if (
          !this.attendees.some((attendee) => attendee.id === this.userData.id)
        ) {
          this.attendees.push({
            avatar: this.userData.avatar,
            name: this.userData.name,
            account: this.userData.account,
            id: this.userData.id,
          });
        }

        this.msgs.push({
          text: `${this.userData.name}加入聊天`,
          type: "connection",
          time: `${TWLocale.showTime}`,
        });
      } catch (error) {
        console.log("error", error);
      }
    },
    socketStart(userId) {
      // 連線並送出user id
      this.socket.emit("connectServer", userId);
      // 讀取通知 new
      this.socket.emit("read-notice", userId);
      // 觸發加入公開聊天室
      this.socket.emit("join-public-room", userId);
      console.log(`user ${userId} socket just started!`);
    },

    sendMessage() {
      this.msgs.push({
        text: this.newMsg,
        type: "msg-out",
        time: `${TWLocale.showTime}`,
      });
      // 向公開聊天室發送訊息
      this.socket.emit("public-msg", {
        userId: this.userId,
        message: this.newMsg,
      });
      this.newMsg = "";
    },

    listenToServer() {
      // 接收通知 new
      this.socket.on("notices", (notice) => {
        console.log("notice", notice);
      });

      this.socket.on("read-notice", (notice) => {
        console.log("read-notice", notice);
      });

      //監聽接收公開聊天室的紀錄
      this.socket.on("public-chat-record", (publicChatRecord) => {
        console.log("publicChatRecord", publicChatRecord);
      });

      // TODO 監聽接收線上使用者列表及所有使用者資料
      this.socket.on("online-list", (inRoomUsers) => {
        console.log("inRoomUsers", inRoomUsers);        
      });

      // 監聽公開聊天室公告廣播
      this.socket.on("public-online-notice", async (userId) => {
        console.log(userId, "joined room");

        // 利用 userId 取得新加入者的資料，要加入聊天室清單
        try {
          const response = await user.getUserInfo(userId);

          if (response.statusText !== "OK") {
            throw new Error(response.statusText);
          }

          const userData = { ...response.data };

          // 避免重複加入相同使用者資料
          if (!this.attendees.some((attendee) => attendee.id === userData.id)) {
            this.attendees.push({
              avatar: userData.avatar,
              name: userData.name,
              account: userData.account,
              id: userData.id,
            });
          }

          this.msgs.push({
            text: `${userData.name}加入聊天`,
            type: "connection",
            time: `${TWLocale.showTime}`,
          });
        } catch (error) {
          console.log("error", error);
        }
      });

      // 監聽公開聊天室使用者下線訊息
      this.socket.on("public-offline-notice", (userId) => {
        const userIdtoN = Number(userId);
        const leftAttendee = this.attendees.find(
          (user) => user.id === userIdtoN
        );

        this.msgs.push({
          text: `${leftAttendee.name}離開聊天室`,
          type: "connection",
          time: `${TWLocale.showTime}`,
        });

        this.attendees = this.attendees.filter((user) => user.id !== userIdtoN);
        console.log(userId, "left room");
      });

      // 監聽公開聊天室聊天訊息
      this.socket.on("public-msg", ({ userId, message }) => {
        console.log("userId: ", userId, " ,message: ", message);
        this.msgs.push({
          text: `${message}`,
          type: "msg-in",
          time: `${TWLocale.showTime}`,
        });
      });
      console.log(`socket started listening!`);
    },
    socketEnd() {
      this.socket.on("disconnect", (reason) => {
        console.log("socket has disconnected for:", reason);
      });
      this.socket.disconnect();

      Toast.fire({
        position: "top",
        title: "離開公開聊天室",
      });
    },
  },
  created() {
    keepUnauthorizedOut(this);
    roleAccessControl(this, "8347");
    this.fetchUser(this.userId);
    this.socketStart(this.userId);
    this.listenToServer();
  },
  beforeDestroy() {
    this.socketEnd(); // 離開聊天室頁面則停止嘗試 reconnect
  },
};
</script>
