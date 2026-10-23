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


const confirm = document.querySelector('#confirm');
const nom = document.querySelector('#player')
const number = document.querySelector('#number')

function fconfirm() {
  const liste = document.querySelector('#liste');
   const inputArray = [];

  const playername = nom.value;
  const playernumber = number.value;

  const error = document.querySelector('#error')
  const errorn = document.querySelector('#errorn')
  if (playername == ""){
    error.innerText = "entre nom"  
  }else{
    inputArray.push(playername, playernumber,);
    console.log(inputArray);
  }
  if (playernumber == "") {
    errorn.innerText = "entre numbre"
  }else{
    inputArray.push(playername, playernumber,);
console.log(inputArray);
  }

return;
}
confirm.addEventListener('click', fconfirm);











