//værdier der bliver brugt//
let point;
let liv;

//function der laver random tal//
function lavEtRandomTal(maxTal) {
  return Math.floor(Math.random() * maxTal) + 1;
}

//siden bliver loadet//
window.addEventListener("load", sidenvises);

//forkortelser for document.querySelector//
const abe_con1 = document.querySelector("#abe_container");
const abe_spr1 = document.querySelector("#abe_sprite");
const abe_con2 = document.querySelector("#abe_container2");
const abe_spr2 = document.querySelector("#abe_sprite2");
const abe_con3 = document.querySelector("#abe_container3");
const abe_spr3 = document.querySelector("#abe_sprite3");

const noed_con1 = document.querySelector("#noed_container");
const noed_spr1 = document.querySelector("#noed_sprite");
const noed_con2 = document.querySelector("#noed_container2");
const noed_spr2 = document.querySelector("#noed_sprite2");
const noed_con3 = document.querySelector("#noed_container3");
const noed_spr3 = document.querySelector("#noed_sprite3");

const startScreen = document.querySelector("#start");
const gameOverScreen = document.querySelector("#game_over");
const levelCompleteScreen = document.querySelector("#level_complete");
const infoScreen2 = document.querySelector("#info_screen");

function sidenvises() {
  console.log("sidenvises");
  //skjul andre skærme//
  gameOverScreen.classList.add("hide");
  levelCompleteScreen.classList.add("hide");

  //vis start skærm//
  startScreen.classList.remove("hide");

  //klik på start knap og info knap
  document.querySelector("#start_knap").addEventListener("click", startSpillet);
  document.querySelector("#info_knap").addEventListener("click", infoScreen);
}
function startSpillet() {
  //start baggrundsmusik
  document.querySelector("#vandmusik").volume = 0.2;
  document.querySelector("#vandmusik").play();

  //skjul andre skærme
  startScreen.classList.add("hide");
  gameOverScreen.classList.add("hide");
  levelCompleteScreen.classList.add("hide");

  infoScreen2.classList.add("hide");

  // vis spil side
  document.querySelector("#game").classList.remove("hide");

  //Nulstil point og udskriv og reset liv til 3
  console.log("startSpillet");
  point = 0;
  score_board.firstElementChild.textContent = point;
  liv = 3;
  life_board.firstElementChild.textContent = liv;

  //indsæt elementer
  abe_con1.classList.add("pos" + lavEtRandomTal(4));
  abe_con2.classList.add("pos" + lavEtRandomTal(4));
  abe_con3.classList.add("pos" + lavEtRandomTal(4));

  abe_con1.classList.add("delay" + lavEtRandomTal(3));
  abe_con2.classList.add("delay" + lavEtRandomTal(3));
  abe_con3.classList.add("delay" + lavEtRandomTal(3));

  noed_con1.classList.add("pos" + lavEtRandomTal(4));
  noed_con2.classList.add("pos" + lavEtRandomTal(4));
  noed_con3.classList.add("pos" + lavEtRandomTal(4));

  noed_con1.classList.add("delay" + lavEtRandomTal(3));
  noed_con2.classList.add("delay" + lavEtRandomTal(3));
  noed_con3.classList.add("delay" + lavEtRandomTal(3));

  abe_con1.classList.add("fald");
  abe_con2.classList.add("fald");
  abe_con3.classList.add("fald");

  abe_con1.addEventListener("click", clickAbe);
  abe_con2.addEventListener("click", clickAbe);
  abe_con3.addEventListener("click", clickAbe);

  noed_con1.classList.add("fald");
  noed_con2.classList.add("fald");
  noed_con3.classList.add("fald");

  noed_con1.addEventListener("click", clickNoed);
  noed_con2.addEventListener("click", clickNoed);
  noed_con3.addEventListener("click", clickNoed);

  //animationiteration = den har kørt en runde, og går derefter videre til "genstartnoedudenklik"//
  noed_con1.addEventListener("animationiteration", genstartNoedUdenKlik);
  noed_con2.addEventListener("animationiteration", genstartNoedUdenKlik);
  noed_con3.addEventListener("animationiteration", genstartNoedUdenKlik);

  abe_con1.addEventListener("animationiteration", genstartAbeUdenKlik);
  abe_con2.addEventListener("animationiteration", genstartAbeUdenKlik);
  abe_con3.addEventListener("animationiteration", genstartAbeUdenKlik);

  //start timer
  document.querySelector("#fyld").classList.add("timer");
  document
    .querySelector("#time_board")
    .addEventListener("animationend", stopSpillet);
}

function clickAbe() {
  console.log("clickAbe");
  //fjern at man kan trykke flere gange på aben
  this.removeEventListener("click", clickAbe);

  //man mister point
  point--;
  document.querySelector("h4").textContent = point;

  //afspil abelyd
  document.querySelector("#abelyd").volume = 0.7;
  document.querySelector("#abelyd").currentTime = 0;
  document.querySelector("#abelyd").play();

  //start frys-drej-forsvind-animation
  this.classList.add("frys");
  this.firstElementChild.classList.add("drej");
  this.addEventListener("animationend", genstartAbe);
}
function genstartAbe() {
  console.log("genstartabe");
  //nulstil elementet
  this.classList = "";
  this.firstElementChild.classList = "";
  this.classList = "";

  //genstart animationer
  this.classList.add("pos" + lavEtRandomTal(4));
  this.classList.add("delay" + lavEtRandomTal(3));
  this.classList.add("fald");
  this.addEventListener("click", clickAbe);
}

function genstartAbeUdenKlik() {
  console.log("genstartAbeUdenKlik");
  //nulstil elementet
  this.classList = "";
  this.firstElementChild.classList = "";
  this.offsetLeft;

  //genstart animationer
  this.classList.add("pos" + lavEtRandomTal(4));
  this.classList.add("delay" + lavEtRandomTal(3));
  this.classList.add("fald");
  this.addEventListener("click", clickAbe);
}

function clickNoed() {
  console.log("clickNoed");
  //fjern at man kan trykke flere gange på aben
  this.removeEventListener("click", clickNoed);

  //få point
  point++;
  document.querySelector("h4").textContent = point;

  //afspil nødlyd
  document.querySelector("#kokoslyd").volume = 0.7;
  document.querySelector("#kokoslyd").currentTime = 0;
  document.querySelector("#kokoslyd").play();

  //start frys-zoom-forsvind animatio
  this.classList.add("frys");
  this.firstElementChild.classList.add("zoom");
  this.addEventListener("animationend", genstartNoed);
}

function genstartNoed() {
  console.log("genstartnoed");
  //nulstil elementet
  this.classList = "";
  this.firstElementChild.classList = "";
  this.offsetLeft;

  //genstart animationer
  this.classList.add("pos" + lavEtRandomTal(4));
  this.classList.add("delay" + lavEtRandomTal(3));
  this.classList.add("fald");
  this.addEventListener("click", clickNoed);
}

function genstartNoedUdenKlik() {
  console.log("genstartNoedUdenKlik");
  //nulstil elementet
  this.classList = "";
  this.firstElementChild.classList = "";
  this.offsetLeft;

  //genstart animationer
  this.classList.add("pos" + lavEtRandomTal(4));
  this.classList.add("delay" + lavEtRandomTal(3));
  this.classList.add("fald");
  this.addEventListener("click", clickNoed);

  //mist et liv
  liv--;
  console.log("mine liv er " + liv);
  document.querySelector("#liv").textContent = liv;

  //hvis liv er 0, taber man
  if (liv <= 0) {
    stopSpillet();
  }
}

function stopSpillet() {
  console.log("stopSpillet");
  //fjern alle animationer
  noed_con1.classList = "";
  noed_con1.firstElementChild.classList = "";

  abe_con1.classList = "";
  abe_con1.firstElementChild.classList = "";

  //stop timer
  document.querySelector("#fyld").classList.remove("timer");
  document
    .querySelector("#time_board")
    .removeEventListener("animationend", startSpillet);

  //fjern alle eventlistnere
  noed_con1.removeEventListener("mousedown", clickNoed);
  abe_con1.removeEventListener("mousedown", clickAbe);
  noed_con1.removeEventListener("animationend", genstartNoed);
  abe_con1.removeEventListener("animationend", genstartAbe);
  noed_con1.removeEventListener("animationiteration", genstartNoed);
  abe_con1.removeEventListener("animationiteration", genstartAbe);

  //definer liv og point
  if (liv <= 0) {
    gameover();
  } else if (point >= 10) {
    levelComplete();
  } else {
    gameover();
  }
}

function gameover() {
  console.log("you lose");
  //Vis gameover skærm
  document.querySelector("#game").classList.add("hide");
  gameOverScreen.classList.remove("hide");
  document.querySelector("#game_over_points").textContent =
    "Du fik desværre kun " +
    point +
    " øl, og dermed ikke nok til at komme ind på Egmont";

  //Klik på start_igen1
  console.log("start_igen1");
  document
    .querySelector("#start_igen1")
    .addEventListener("click", startSpillet);
  document
    .querySelector("#startside_knap1")
    .addEventListener("click", sidenvises);
}
function levelComplete() {
  console.log("you win");
  //vis level complete skærm
  document.querySelector("#game").classList.add("hide");
  levelCompleteScreen.classList.remove("hide");
  document.querySelector("#level_complete_points").textContent =
    "Du fik " + point + " øl, og dermed nok til at komme ind på Egmont!";

  //Klik på start_igen2
  console.log("start_igen2");
  document
    .querySelector("#start_igen2")
    .addEventListener("click", startSpillet);
  document
    .querySelector("#startside_knap2")
    .addEventListener("click", sidenvises);
}

function infoScreen() {
  console.log("info");

  //skjul andre skærme
  startScreen.classList.add("hide");
  gameOverScreen.classList.add("hide");
  levelCompleteScreen.classList.add("hide");
  document.querySelector("#game").classList.add("hide");

  //vis introduktion
  document.querySelector("#info_screen").classList.remove("hide");

  document
    .querySelector("#start_knap2")
    .addEventListener("click", startSpillet);
}
