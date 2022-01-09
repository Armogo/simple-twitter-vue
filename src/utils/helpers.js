import axios from "axios";
import Swal from "sweetalert2";

//ruby route
const baseURL = "https://ac-tweeeeter.herokuapp.com/";

//rex route
// const baseURL = "https://actwitter.herokuapp.com";

export const apiHelper = axios.create({
  baseURL,
});

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

// 阻擋未登入的使用者透過修改網址進入特定頁面
export function keepUnauthorizedOut(VueComponent) {
  if (!localStorage.getItem("token")) {
    Toast.fire({
      icon: "warning",
      position: "top",
      title: "請先登入",
    });
    VueComponent.$router.push("/");
    throw new Error("Please sign in first");
  }
}

export function roleAccessControl(VueComponent, role) {
  const getRole = localStorage.getItem("role");

  if (!getRole) {
    VueComponent.$router.push("/");
    throw new Error("Please sign in first");
  }

  if (getRole !== role) {
    // "10550" stands for admin, "8347" stands for user
    VueComponent.$router.back();
    throw new Error("No access");
  }
}
