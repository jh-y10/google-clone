const $body = document.querySelector("body");
const $logo = document.querySelector(".logo");
const $darkIcon = document.querySelector(".dark-icon");
let logoCheck = false;

const darkMode = () => {
  $body.classList.toggle("dark-mode");
  if (logoCheck === false) {
    $darkIcon.classList.replace("fa-moon", "fa-sun");
    $logo.src = "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png";
    logoCheck = true;
  } else {
    $darkIcon.classList.replace("fa-sun", "fa-moon");
    $logo.src = "https://pngimg.com/d/google_PNG19644.png";
    logoCheck = false;
  }
};
