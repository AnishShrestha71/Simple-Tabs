function tabs(e) {
  var id = e.target.id;
  var content = document.querySelectorAll(".tab-content");
  var menu = document.querySelectorAll(".tab-header");
  var countContent = content[0].childElementCount;
  for (let i = 0; i < countContent; i++) {
    content[0].children[i].classList.remove("active-content");
    menu[0].children[i].classList.remove("active");
  }
  document.getElementById(id + "-content").classList.add("active-content");
  document.getElementById(id).classList.add("active");
}
