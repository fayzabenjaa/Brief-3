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

function playercard() {
  const playerCard = document.querySelector("#player-card");
  playerCard.innerHTML = ` `;

  for (let i = 0; i < inputArray.length; i++) {
    const editbtn = document.querySelector("#edit");
    const deletebtn = document.querySelector("#delete");
    const player = inputArray[i];

    if (player.role == "Gardien") {
      playerCard.innerHTML += `
      <div class="relative w-full max-w-[350px] border-[#d4a32f] rounded-2xl border border-[#344155] bg-[#1e293b] p-4 m-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div id="plyrname" class="text-[#d4a32f]">${player.number}</div>

            <div>
              <h2 id="plyrnumber" class="text-gray-300">${player.name}</h2>
              <p class="text-sm text-[#d4a32f]">${player.role}</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <button id="edit" class="text-[#c17a62]">edit</button>
            <button id="delet" class="text-gray-500">delete</button>
          </div>
        </div>
      </div>
      <div class="relative mt-3">
          <select class="w-full rounded-lg border border-[#344155] bg-[#1e293b] px-4 py-3 pr-10 text-sm text-gray-300">
            <option>GB - Gardien</option>
          </select>
        </div>
    `;

    // //edit button
    //   const editoverlay = document.querySelector("#bgedit");
    //   const editpopup = document.querySelector("#editpopup");
    //   const editbtn = document.querySelector("#edit");
    //   function openeditpopup() {
    //     editoverlay.classList.remove("hidden");
    //   }
    //   editbtn.addEventListener("click", openeditpopup);
    //   //delet button
    //   const deletbtn = document.querySelector('#delet')
    //   function deletcard () {

    //   }

      // const plyrname = document.querySelector("#plyrname");
      // const plyrnumber = document.querySelector("#plyrnumber");
      // const newplayername = player.value;
      // const newplayernumber = number.value;
      // console.log(newplayername);
      // console.log(newplayernumber);
      // plyrname.innerHTML = newplayername;
      // plyrnumber.innerHTML = newplayernumber;
    } else if (player.role == "Défenseur") {
      playerCard.innerHTML += `
      <div class="relative w-full max-w-[350px] border-blue-500 rounded-2xl border border-[#344155] bg-[#1e293b] p-4 m-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="text-blue-500 ">${player.number}</div>

            <div>
              <h2 class="text-gray-300">${player.name}</h2>
              <p class="text-sm text-blue-500">${player.role}</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <button id="edit" class="text-[#c17a62]">edit</button>
            <button id="delet" class="text-gray-500">delete</button>
          </div>
        </div>
      </div>
      <div class="relative mt-3">
          <select class="w-full rounded-lg border border-[#344155] bg-[#1e293b] px-4 py-3 pr-10 text-sm text-gray-300">
            <option>Sur le banc</option>
            <option>DG - Défenseur gauche</option>
            <option>DC - Défenseur central 1</option>
            <option>DC - Défenseur central 2</option>
            <option>DD - Défenseur droit</option>
          </select>
        </div>
    `;
      function editcard() {
        overlay.classList.remove("hidden");
        inputArray[i].name == player.value;
        inputArray[i].number == player.value;
      }
      editbtn.addEventListener("click", editcard);
    } else if (player.role == "Milieu") {
      playerCard.innerHTML += `
      <div class="relative w-full max-w-[350px] border-green-500 rounded-2xl border border-[#344155] bg-[#1e293b] p-4 m-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="text-green-500">${player.number}</div>

            <div>
              <h2 class="text-gray-300">${player.name}</h2>
              <p class="text-sm text-green-500">${player.role}</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <button id="edit" class="text-[#c17a62]">edit</button>
            <button id="delete" class="text-gray-500">delete</button>
          </div>
        </div>
      </div>
      <div class="relative mt-3">
          <select class="w-full rounded-lg border border-[#344155] bg-[#1e293b] px-4 py-3 pr-10 text-sm text-gray-300">
            <option>Sur le banc</option>
            <option>MG - Milieu gauche</option>
            <option>MC - Milieu central 1</option>
            <option>MC - Milieu central 2</option>
            <option>MD - Milieu droit</option>
          </select>
        </div>
    `;
      function editcard() {
        overlay.classList.remove("hidden");
        inputArray[i].name == player.value;
        inputArray[i].number == player.value;
      }
      editbtn.addEventListener("click", editcard);
    } else if (player.role == "Attaquant") {
      playerCard.innerHTML += `
      <div class="relative w-full max-w-[350px] border-red-500 rounded-2xl border border-[#344155] bg-[#1e293b] p-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="text-red-500">${player.number}</div>

            <div>
              <h2 class="text-gray-300">${player.name}</h2>
              <p class="text-sm text-red-500">${player.role}</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <button id="edit" class="text-[#c17a62]">edit</button>
            <button id="delete" class="text-gray-500">delete</button>
          </div>
        </div>
      </div>
      <div class="relative mt-3">
          <select class="w-full rounded-lg border border-[#344155] bg-[#1e293b] px-4 py-3 pr-10 text-sm text-gray-300">
            <option>Sur le banc</option>
            <option>BU - Buteur 1</option>
            <option>BU - Buteur 2</option>
          </select>
        </div>
    `;
      function editcard() {
        overlay.classList.remove("hidden");
        inputArray[i].name == player.value;
        inputArray[i].number == player.value;
      }
      editbtn.addEventListener("click", editcard);
    };
    let allplayers = document.querySelector('#playersn');
    allplayers.innerText = `${i + 1} joueur(s)`;
  }
}

const confirm = document.querySelector("#confirm");
const nom = document.querySelector("#player");
const number = document.querySelector("#number");
let inputArray = [];

function fconfirm() {
  const liste = document.querySelector("#liste");

  const playername = nom.value;
  const playernumber = number.value;
  const poste = document.querySelector('input[name="position"]:checked');

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
  } else if (!/^[a-zA-Z]+$/.test(playername)) {
    error.innerText = "les numéros ne sont pas valides";
  } else {
    error.classList.add("hidden");
    errorn.classList.add("hidden");
    const playerRole = poste.value;

    inputArray.push({
      name: playername,
      number: playernumber,
      role: playerRole,
    });

    playercard();
    console.log(inputArray);
    for (let i = 0; i < inputArray.length; i++) {
      const li = document.createElement("li");
      li.innerText = inputArray[i];
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
