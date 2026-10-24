const openbtn = document.querySelector("#Ajouter");
const popup = document.querySelector("#popup");
const overlay = document.querySelector("#bgblur");
const closebtn = document.querySelector("#X");
const Annuler = document.querySelector("#Annuler");

function openpopup() {
  overlay.classList.remove("hidden");
}
function closepopup() {
  overlay.classList.add("hidden");
}
function Annulerpopup() {
  overlay.classList.add("hidden");
}

openbtn.addEventListener("click", openpopup);
closebtn.addEventListener("click", closepopup);
Annuler.addEventListener("click", Annulerpopup);

const confirm = document.querySelector("#confirm");
const nom = document.querySelector("#player");
const number = document.querySelector("#number");

function fconfirm() {
  const liste = document.querySelector("#liste");
  const inputArray = [];

  const playername = nom.value;
  const playernumber = number.value;

  const error = document.querySelector("#error");
  const errorn = document.querySelector("#errorn");
  if (playernumber == "" && playername == "") {
    error.innerText = "entre nom";
    errorn.innerText = "entre numbre";
  } else if (playername == "") {
    error.innerText = "entre nom";
    errorn.classList.add("hidden");
  } else if (playernumber == "") {
    errorn.innerText = "entre numbre";
    error.classList.add("hidden");
  } else {
    error.classList.add("hidden");
    errorn.classList.add("hidden");
    inputArray.push(playername, playernumber);
    console.log(inputArray);
    for (let i = 0; i < inputArray.length; i++) {
      const li = document.createElement("li");
      li.innerText = inputArray[i];
      liste.appendChild(li);
    }
    if (nom) {
      nom.value = "";
    } else {
      console.error("Input element not found.");
    }
    if (number) {
      number.value = "";
    } else {
      console.error("Input element not found.");
    }
    overlay.classList.add("hidden");
  }

  return;
}
confirm.addEventListener("click", fconfirm);
