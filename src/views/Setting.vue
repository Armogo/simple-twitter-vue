<template>
  <div class="home">
    <Navbar />
    <div class="setting" v-if="!isLoading">
      <header>帳戶設定</header>
      <div class="form-container">
        <form action="" id="setting-form" @submit.stop.prevent="putEditUser">
          <div class="input-wrapper">
            <span>帳號</span>
            <input
              type="text"
              name="account"
              v-model="account"
              @focus="focusInput"
            />
            <hr :class="{ 'now-focus': nowFocus === 'account' }" />
          </div>
          <div class="input-wrapper">
            <span>名稱</span>
            <input type="text" name="name" v-model="name" @focus="focusInput" />
            <hr :class="{ 'now-focus': nowFocus === 'name' }" />
          </div>
          <div class="input-wrapper">
            <span>Email</span>
            <input
              type="text"
              name="email"
              pattern="\S+"
              title="不接受空白鍵"
              v-model="email"
              @focus="focusInput"
            />
            <hr :class="{ 'now-focus': nowFocus === 'email' }" />
          </div>
          <div class="input-wrapper">
            <span>密碼</span>
            <input
              type="password"
              name="password"
              pattern="\S+"
              title="不接受空白鍵"
              v-model="password"
              @focus="focusInput"
            />
            <hr :class="{ 'now-focus': nowFocus === 'password' }" />
          </div>
          <div class="input-wrapper">
            <span>密碼確認</span>
            <input
              type="password"
              name="checkPassword"
              pattern="\S+"
              title="不接受空白鍵"
              v-model="checkPassword"
              @focus="focusInput"
            />
            <hr :class="{ 'now-focus': nowFocus === 'checkPassword' }" />
          </div>
        </form>
        <button type="submit" form="setting-form">儲存</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;

  .setting {
    border-left: 1px solid #e6ecf0;
    flex-basis: 600px;

    * {
      box-sizing: border-box;
    }

    header {
      border-bottom: 1px solid #e6ecf0;
      margin-bottom: 30px;
      padding: 13px 0px 14px 20px;
      font-family: Noto Sans TC;
      font-style: normal;
      font-weight: bold;
      font-size: 19px;
      line-height: 28px;
    }
    .form-container {
      padding: 0 16px;

      #setting-form {
        .input-wrapper {
          margin: 0% auto 30px auto;

          background: #f5f8fa;

          span {
            position: relative;
            left: 10px;
            top: 5px;
            display: block;
            font-family: Noto Sans TC;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 15px;
            color: #657786;
          }
          input {
            // 取消預設style
            all: unset;

            text-align: start;
            padding-left: 10px;
            padding-top: 10px;

            width: 100%;
            height: calc(52px - 10px);

            border-radius: 0px 0px 4px 4px;
          }
          hr {
            margin: 0%;
            height: 2px;
            background-color: #657786;
            border-right: unset;
            border-left: unset;
            border-bottom: unset;
            border-radius: 0px 0px 4px 4px;
          }
          // input focus 底下那條線的style
          .now-focus {
            background-color: #50b5ff;
          }
        }
      }
      button {
        // 取消預設style,
        all: unset;

        display: block;
        margin-bottom: 17px;
        margin-left: auto;
        padding: 10px 40px;
        background: #ff6600;
        border-radius: 50px;
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        color: #ffffff;
        line-height: 26px;
        cursor: pointer;
      }
    }
  }
}

@media all and (max-width: 768px) {
  .home {
    display: block;
  }
}
</style>

<script>
import Navbar from "./../components/Navbar";
import {
  keepUnauthorizedOut,
  roleAccessControl,
  Toast,
} from "./../utils/helpers";
import user from "./../api/user";

const getUserId = () => localStorage.getItem("user");

export default {
  name: "Setting",
  components: {
    Navbar,
  },
  data() {
    return {
      userData: {},
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
      isLoading: true,
      nowFocus: "",
    };
  },
  methods: {
    focusInput(e) {
      this.nowFocus = e.target.name;
    },
    async getEditUser() {
      try {
        const response = await user.getUserInfo(getUserId());

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        this.userData = { ...response.data };
        this.account = this.userData.account;
        this.name = this.userData.name;
        this.email = this.userData.email;
        this.isLoading = false;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "伺服器忙碌中，請重新整理頁面",
        });
        console.log("error", error.response || error);
      }
    },
    async putEditUser() {
      const data = {
        account: this.account,
        name: this.name,
        email: this.email,
      };

      // 檢查是否包含 whitespace
      if (this.password.includes(" ")) {
        return Toast.fire({
          icon: "warning",
          title: "不接受空白鍵",
        });
      }

      // 檢查兩次密碼是否相同
      if (this.password !== this.checkPassword) {
        return Toast.fire({
          icon: "warning",
          title: "密碼 與 密碼確認 請輸入相同組合",
        });
      }
      // 避免送出空的 password
      if (this.password.length !== 0 && this.checkPassword.length !== 0) {
        // 有輸入新密碼且符合標準時才在 data 裡面加入 password property
        data.password = this.password;
        data.checkPassword = this.checkPassword;
      }

      try {
        const response = await user.putEditUser(getUserId(), data);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        Toast.fire({
          icon: "success",
          title: "資料更改成功",
        });
        this.password = "";
        this.checkPassword = "";
        this.getEditUser();
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "伺服器忙碌中，請稍後再試",
        });
        console.log("error", error.response || error);
      }
    },
  },
  created() {
    keepUnauthorizedOut(this);
    roleAccessControl(this, "8347");
    this.getEditUser();
  },
};
</script>
