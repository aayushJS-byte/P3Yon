
let typer = new Audio('type.mp3')
function scrolltowlec() {

  var elmnt = document.getElementById("welcome");
elmnt.scrollIntoView();

}
function scrtonxt() {
  var elmnt = document.getElementById("cnt");
elmnt.scrollIntoView();
;

}


function typesound(){
typer.play()
};


function menu() {
  window.location.href = "/travel-guide"

}

// DELHI MUMBAI MUNNAR JIMCORBET BANGLORE
function totopscroll() {
  window.scrollTo(0, 0);
}
