"use strict";
function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navmenu") {
    x.className += " responsive";
  } else {
    x.className = "navmenu";
  }
}
