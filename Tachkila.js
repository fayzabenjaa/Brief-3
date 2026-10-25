const openbtn = document.querySelector("#Ajouter");
const popup = document.querySelector("#popup");
const overlay = document.querySelector("#bgblur");
const closebtn = document.querySelector("#X");
const Annuler = document.querySelector("#Annuler");

const playerCard = document.querySelector('#player-card')



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
  const poste = document.querySelector('input[name="position"]:checked')
  


  const error = document.querySelector("#error");
  const errorn = document.querySelector("#errorn");
  const errorr = document.querySelector("#error");

  if (playernumber == "" && playername == "") {
    error.innerText = "entre nom";
    errorn.innerText = "entre numbre";
  } else if (playername == "") {
    error.innerText = "entre nom";
    errorn.classList.add("hidden");
  } else if (playernumber == "") {
    errorn.innerText = "entre numbre";
    error.classList.add("hidden");
  } 
  else if (!/^[a-zA-Z]+$/.test(playername)) {
    error.innerText = "les numéros ne sont pas valides";
  }
 
   else {
    error.classList.add("hidden");
    errorn.classList.add("hidden");
    const playerRole = poste.value;
    inputArray.push(playername, playernumber, playerRole);
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
    if (poste) {
      poste.value = "";
    } else {
      console.error("Input element not found.")
    }
    overlay.classList.add("hidden");

  }

  return;
}
confirm.addEventListener("click", fconfirm);

