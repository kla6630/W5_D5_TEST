function changeNavbarColor() {
  const navbar = document.querySelector(".nav");
  const headBackground = document.querySelector(".head_background");
  const navbarButton = document.querySelector("#navbar_button");

  const headBackgroundBottom = headBackground.getBoundingClientRect().bottom;

  if (headBackgroundBottom < 0) {
    navbar.style.transition = "background-color 0.5s ease-in-out";
    navbar.style.backgroundColor = "white";
    navbarButton.style.transition = "background-color 0.5s ease-in-out";
    navbarButton.style.backgroundColor = "#0f730c";
  } else {
    navbar.style.transition = "background-color 0.5s ease-in-out";
    navbar.style.backgroundColor = "#ffc017";
    navbarButton.style.transition = "background-color 0.5s ease-in-out";
    navbarButton.style.backgroundColor = "#191919";
  }
}

window.addEventListener("scroll", changeNavbarColor);
