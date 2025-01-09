const $body = document.querySelector("body");
const $logo = document.querySelector(".logo");
let logoCheck = false;

const darkMode = () => {
  $body.classList.toggle("dark-mode");
  if (logoCheck === false) {
    $logo.src = "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png";
    logoCheck = true;
  } else {
    $logo.src = "https://pngimg.com/d/google_PNG19644.png";
    logoCheck = false;
  }
};
