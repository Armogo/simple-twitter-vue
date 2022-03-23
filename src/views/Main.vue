<template>
  <div class="container">
    <div class="main">
      <!-- Navbar.vue -->
      <Navbar @new-post="getTweets" />
      <div class="mid-area">
        <!-- CreatePosts.vue -->
        <CreatePosts :initial-user="userData" @new-post="getTweets" />
        <!-- NewestPosts.vue -->
        <NewestPosts
          :initial-tweets="tweets"
          :initial-tweets-reply="tweetsReply"
          :initial-user="userData"
          @change-like="getTweets"
          @new-reply="getTweets"
        />
      </div>
      <!-- Popular.vue -->
      <Popular />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  * {
    box-sizing: border-box;
  }

  .main {
    display: flex;

    .mid-area {
      flex-basis: 600px;
    }
  }
}

// narrow screen layout
@media all and (max-width: 768px) {
  .container {
    .main {
      display: block;
      width: 100vw;

      .mid-area {
        height: calc(100vh - 28px);
      }
    }
  }
}
</style>

<script>
import Popular from "./../components/Popular";
import Navbar from "./../components/Navbar";
import CreatePosts from "./../components/CreatePosts";
import NewestPosts from "./../components/NewestPosts";
import { keepUnauthorizedOut, roleAccessControl } from "./../utils/helpers";
import { tweets } from "./../api/tweets";
import user from "./../api/user";

const getUserId = () => localStorage.getItem("user");

export default {
  name: "Main",
  components: {
    Popular,
    Navbar,
    CreatePosts,
    NewestPosts,
  },
  data() {
    return {
      tweets: [],
      tweetsReply: [],
      popular: [],
      userData: {},
      tweetsReplies: [],
    };
  },
  methods: {
    async getTweets() {
      try {
        const response = await tweets.getTweets();

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        this.tweets = [...response.data];
      } catch (error) {
        console.log("error", error);
      }
    },
    async fetchUser() {
      try {
        const response = await user.getUserInfo(getUserId());

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        this.userData = { ...response.data };
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  created() {
    keepUnauthorizedOut(this);
    roleAccessControl(this, "8347");
    this.getTweets();
    this.fetchUser();
  },
};
</script>
