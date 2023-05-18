function toggleMenu() {
  document.getElementById("NavOne").classList.toggle("open");
  document.getElementById("hambutton").classList.toggle("open");
}

const x = document.getElementById("hambutton");
x.onclick = toggleMenu;
