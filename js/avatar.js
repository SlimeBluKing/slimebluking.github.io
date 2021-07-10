var avatar = null;
var clicked = false;

var img = new Image();
img.src = "img/avatar/clicked.gif";

function click() {
  if (clicked) {
    return;
  }
  clicked = true;

  if (avatar.classList.contains("wiggle")) {
    avatar.classList.remove("wiggle");
  }

  avatar.src = "img/avatar/clicked.gif"
  avatar.classList.add("clicked");
}

document.addEventListener("DOMContentLoaded", () => {
  avatar = document.getElementById("avatar");
  if (avatar == undefined) {
    return;
  }

  if (!avatar.classList.contains("wiggle")) {
    avatar.classList.add("wiggle");
  }
  
  avatar.addEventListener("click", click);
});