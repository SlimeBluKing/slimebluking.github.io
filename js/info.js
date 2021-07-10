document.addEventListener("DOMContentLoaded", () => {
  let year = (new Date()).getFullYear();
  let age = document.getElementById("age");

  if (age != undefined) {
    age.innerHTML = year - 2005;
  }
});