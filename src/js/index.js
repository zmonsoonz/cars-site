
let mainscreen = document.querySelector(".main-screen");
let i = 0;
var bgs = ["url(mainbg.jpg)", "url(bg2.jpg)", "url(bg3.jpg)", "url(bg4.jpg)"]
let line = document.querySelectorAll(".line");
function Slider() {
    if (i == 3){
        line[i].classList.remove("active");
        i = 0;
        line[i].classList.add("active");
        mainscreen.style.backgroundImage = bgs[i];
    }
    else {
        mainscreen.style.backgroundImage = bgs[i+1];
        line[i+1].classList.add("active");
        line[i].classList.remove("active");
        i++;
    }
  }
  
setInterval(Slider, 5000);
