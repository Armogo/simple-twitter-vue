<template>
  <div class="main">
    <AdminNavbar />

    <router-view />
    <!-- AdminList.vue -->
    <!-- AdminUsers.vue -->
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
}

@media all and (max-width: 768px) {
  .main {
    display: block;
  }
}
</style>

<script>
import { keepUnauthorizedOut, roleAccessControl } from "../utils/helpers";
import AdminNavbar from "./../components/AdminNavbar.vue";

export default {
  name: "AdminMain",
  components: {
    AdminNavbar,
  },
  created() {
    keepUnauthorizedOut(this);
    roleAccessControl(this, "10550");
  },
};
</script>
