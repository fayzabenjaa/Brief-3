const openbtn = document.querySelector("#Ajouter");
const popup = document.querySelector("#popup");
const overlay = document.querySelector("#bgblur");
const closebtn = document.querySelector("#X");

function openpopup() {  
    popup.style.display = 'block'
    overlay.style.display = 'block'
};
function closepopup() {
    popup.style.display = 'none'
    overlay.style.display = 'none'
};

openbtn.addEventListener('click', openpopup)
closebtn.addEventListener('click', closepopup)



// const player = document.querySelector("#player")
// function valideplayer() {
//     const input = document.querySelector('#player')
//     const error = document.querySelector('#name-error')
//     const pname = input.value.trim();
//     if ( pname === "") {
//         error.innerText = "entrer le nom du joueur"
//     } else if {

//     }  
    
// }
// const number = document.querySelector("#number")
// function validenumber () {
//     const input = document.querySelector('#number')
//     const error = document.querySelector('#number-error')
//     const pnumbre = input.value.trim();
//     if(pnumber === "") {
//         error.innerText = "entrer le nombre"
//     } else if (!/^$) {

//     }
// }





