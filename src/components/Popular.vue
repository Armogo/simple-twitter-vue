<template>
  <div class="container">
    <h1>Popular</h1>
    <div v-for="user in users" :key="user.followingId" class="popular-users">
      <img
        :src="user.following.avatar"
        @click.stop.prevent="othersProfile(user.followingId)"
        alt=""
      />
      <div class="name-account">
        <div class="name" @click.stop.prevent="othersProfile(user.followingId)">
          {{ user.following.name }}
        </div>
        <div class="account">@ {{ user.following.account }}</div>
      </div>
      <div
        v-if="userFollowings.includes(user.followingId)"
        @click.stop.prevent="unfollowing(user.followingId)"
        class="following-btn"
      >
        正在跟隨
      </div>
      <div
        v-else
        @click.stop.prevent="following(user.followingId)"
        class="unfollowing-btn"
      >
        跟隨
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: fit-content;
  flex-basis: 378px;
  margin: 15px min(18px, 5%);
  background: #f5f8fa;
  border-radius: 14px;
  font-family: "Noto Sans TC", sans-serif;

  h1 {
    font-size: 18px;
    padding-left: 15px;
  }

  .popular-users {
    display: flex;

    font-size: 15px;
    font-weight: 700;
    align-items: center;    
    padding: 10px;
    border-top: 2px solid #e6ecf0;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 10px;
    }

    .name-account {
      min-width: 3.5em;
      margin-right: auto;

      .name {
        white-space: nowrap;
        overflow-x: hidden;
        cursor: pointer;
      }

      .account {
        white-space: nowrap;
        overflow-x: hidden;
        color: #657786;
      }
    }

    .following-btn,
    .unfollowing-btn {
      cursor: pointer;
      min-width: fit-content;
    }

    .following-btn {
      flex-basis: 90px;
      height: 35px;
      background: #ff6600;
      border: 1px solid #ff6600;
      box-sizing: border-box;
      border-radius: 100px;
      font-family: Noto Sans TC;
      font-size: 15px;
      color: #ffffff;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .unfollowing-btn {
      flex-basis: 60px;
      height: 35px;
      padding: 0 5px;
      border: 1px solid #ff6600;
      box-sizing: border-box;
      border-radius: 100px;
      font-family: Noto Sans TC;
      font-size: 15px;
      color: #ff6600;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}

@media all and (max-width: 768px) {
  .container {
    display: none;
    width: 100vw;
    height: calc(100vh - 28px);
    overflow-y: scroll;
    position: absolute;
    top: 28px;
    margin: 0;

    > h1 {
      text-align: center;
      margin: 0;
      line-height: 2em;
    }

    .popular-users {
      width: initial;
    }
  }
}
</style>

<script>
import userAPI from "./../api/user";
import followerships from "./../api/followerships";
import { Toast } from "./../utils/helpers";

const getUserId = () => localStorage.getItem("user");

export default {
  data() {
    return {
      userDataId: "",
      users: [],
      userFollowings: [],
    };
  },
  methods: {
    // 取使用者資料，用來比對
    async fetchUserData() {
      try {
        const response = await userAPI.getUserInfo(getUserId());
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.userDataId = data.id;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入使用者資料",
        });
      }
    },
    async fetchPopular() {
      try {
        const response = await userAPI.getPopular(getUserId());
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.users = data.topTwitters;

        // user 不會在 popular list 看見自己的帳號
        // 只留追蹤數排名前 10 的帳號
        this.users = this.users
          .filter((user) => user.followingId !== Number(getUserId()))
          .splice(0, 10);

        this.userFollowings = data.userFollowingList;
        this.userFollowings = this.userFollowings.map((following) => {
          return following.followingId;
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    async following(followerId) {
      try {
        const response = await followerships.following(followerId);
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.$bus.$emit("change-following-state"); // event bus
        this.fetchPopular();
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法追隨",
        });
      }
    },
    async unfollowing(followerId) {
      try {
        const response = await followerships.unfollowing(followerId);
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        this.$bus.$emit("change-following-state"); // event bus
        this.fetchPopular();
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法取消追隨",
        });
      }
    },
    othersProfile(id) {
      if (id === Number(getUserId())) {
        this.$router.push({ name: "profile" });
      } else {
        this.$router.push({ name: "other-profile", params: { id } });
      }
    },
    // control the visibility on narrow screen device
    showPopular(visible) {
      if (visible) {
        this.$el.style.display = "block";
      } else {
        this.$el.removeAttribute("style");
      }
    },
  },
  created() {
    this.fetchUserData();
    this.fetchPopular();
  },
  mounted() {
    this.$bus.$on("follow", () => this.fetchPopular());
    this.$bus.$on("unfollow", () => this.fetchPopular());
    this.$bus.$on("show-popular", (visible) => this.showPopular(visible));
  },
  beforeDestroy() {
    this.$bus.$off("follow");
    this.$bus.$off("unfollow");
    this.$bus.$off("show-popular");
  },
};
</script>
