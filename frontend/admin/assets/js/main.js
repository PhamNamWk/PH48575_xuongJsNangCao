let user = localStorage.getItem("user");
const body = document.querySelector("body");
//chuyển user từ string sang json

if (user) {
  user = JSON.parse(user);
  console.log(user.user);
  if (user.user.role !== "admin") {
    body.innerHTML = "Bạn không có quyền truy cập";
  }
} else {
  body.innerHTML = "Bạn không có quyền truy cập";
}
