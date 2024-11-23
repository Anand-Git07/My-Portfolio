var links = document.getElementsByClassName("link");
var tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (let link of links) {
    link.classList.remove("aa-skill");
  }

  for (let content of tabcontent) {
    content.classList.remove("first");
  }
event.currentTarget.classList.add("aa-skill");
document.getElementById(tabname).classList.add("first");
}