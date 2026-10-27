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

function updateplayernumber() {
  console.log(document.querySelectorAll(".positionSelect").length);
  let allplayers = document.querySelector("#playersn");
  allplayers.innerText = `${inputArray.length} joueur(s)`;
}

function playercard() {
  const playerCard = document.querySelector("#player-card");
  playerCard.innerHTML = ` `;

  for (let i = 0; i < inputArray.length; i++) {
    const player = inputArray[i];

    if (player.role == "Gardien") {
      playerCard.innerHTML += `
      <div class="relative w-full max-w-[350px] border-[#d4a32f] rounded-2xl border border-[#344155] bg-[#1e293b] p-4 m-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="text-[#d4a32f]">${player.number}</div>

            <div>
              <h2 class="text-gray-300">${player.name}</h2>
              <p class="text-sm text-[#d4a32f]">${player.role}</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <button data-id="${player.id}" id="editbtn" class="edit-btn text-[#c17a62]">edit</button>
            <button data-id="${player.id}" class="delete-btn text-gray-500">delete</button>
          </div>
        </div>
      </div>
      <div id="Dpositions" class="relative mt-3">
          <select data-player-index="${i}" class="positionSelect w-full rounded-lg border border-[#344155] bg-[#1e293b] px-4 py-3 pr-10 text-sm text-gray-300">
            <option value="banc">Sur le banc</option>
            <option value="GB">GB - Gardien</option>
          </select>
        </div>
    `;
      //show

      function GardienTrn() {
        const GB = document.querySelector("#GB");
        GB.classList.remove("border-dashed");
        GB.innerHTML = `
        <div class="col-start-1 col-span-2 row-start-4 row-span-3 h-full bg-[#111827] border-2 border-yellow-500 rounded-2xl">
                        <div class="flex items-center justify-center h-full gap-2">
                            <span
                                class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-yellow-500 text-yellow-500 font-bold">${player.number}</span>
                            <div>
                                <p class="text-yellow-500 text-xs font-bold">GB</p>
                                <p class="text-white font-bold text-sm">${player.name}</p>
                            </div>
                        </div>
                    </div>`;
      }
      // GardienTrn();

      function gb(player, position) {
        const target = document.querySelector(`#${position}`);

        if (!target) return;

        GardienTrn();
      }
      const positionSelects = document.querySelectorAll(".positionSelect");

      positionSelects.forEach((positionSelect, index) => {
        positionSelect.addEventListener("change", function () {
          const gardien = inputArray.filter(
            (player) => player.role === "Gardien",
          );

          const playerIndex = Number(positionSelect.dataset.playerIndex);
          const player = inputArray[playerIndex];

          if (!player) return;
          if (player.position !== "banc") {
            const oldPosition = document.querySelector(`#${player.position}`);

            if (oldPosition) {
              oldPosition.innerHTML = `
          <p class="text-yellow-400 font-bold">${player.position}</p>
          <p class="text-gray-400 text-xs">Libre</p>
        `;
              oldPosition.classList.add("border-dashed");
            }
          }
          player.position = positionSelect.value;

          if (player.position !== "banc") {
            gb(player, player.position);
          }
        });
      });
      //DELET

      //edit button
      
      
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
            <button data-id="${player.id}" class="edit-btn text-[#c17a62]">edit</button>
            <button data-id="${player.id}" class="delete-btn text-gray-500">delete</button>
          </div>
        </div>
      </div>
      <div id="Dpositions" class="relative mt-3">
          <select data-player-index="${i}" class="positionSelect w-full rounded-lg border border-[#344155] bg-[#1e293b] px-4 py-3 pr-10 text-sm text-gray-300">
            <option value="banc">Sur le banc</option>
            <option value="DG">DG - Défenseur gauche</option>
            <option value="DC1">DC - Défenseur central 1</option>
            <option value="DC2">DC - Défenseur central 2</option>
            <option value="DD">DD - Défenseur droit</option>
          </select>
        </div>
    `;
      //SECOND WAY

      function dg(player, position) {
        const target = document.querySelector(`#${position}`);

        if (!target) return;

        target.innerHTML = `

  <p class="text-blue-400 font-bold">${player.number}</p>
  <p class="text-gray-400 text-xs">${player.name}</p>
`;

        target.classList.remove("border-dashed");
      }

      const positionSelects = document.querySelectorAll(".positionSelect");

      positionSelects.forEach((positionSelect, index) => {
        positionSelect.addEventListener("change", function () {
          const defenders = inputArray.filter(
            (player) => player.role === "Défenseur",
          );

          const playerIndex = Number(positionSelect.dataset.playerIndex);
          const player = inputArray[playerIndex];

          if (!player) return;
          if (player.position !== "banc") {
            const oldPosition = document.querySelector(`#${player.position}`);

            if (oldPosition) {
              oldPosition.innerHTML = `
          <p class="text-blue-400 font-bold">${player.position}</p>
          <p class="text-gray-400 text-xs">Libre</p>
        `;
              oldPosition.classList.add("border-dashed");
            }
          }

          player.position = positionSelect.value;

          if (player.position !== "banc") {
            dg(player, player.position);
          }
        });
      });
      //deletbtn
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
            <button data-id="${player.id}" class="edit-btn text-[#c17a62]">edit</button>
            <button data-id="${player.id}" class="delete-btn text-gray-500">delete</button>
          </div>
        </div>
      </div>
      <div id="Mpositions" class="relative mt-3">
          <select data-player-index="${i}" class="positionSelect w-full rounded-lg border border-[#344155] bg-[#1e293b] px-4 py-3 pr-10 text-sm text-gray-300">
            <option value="banc">Sur le banc</option>
            <option value="MG">MG - Milieu gauche</option>
            <option value="MC1">MC - Milieu central 1</option>
            <option value="MC2">MC - Milieu central 2</option>
            <option value="MD">MD - Milieu droit</option>
          </select>
        </div>
    `;
      function mg(player, position) {
        const target = document.querySelector(`#${position}`);

        if (!target) return;

        target.innerHTML = `

  <p class="text-green-400 font-bold">${player.number}</p>
  <p class="text-gray-400 text-xs">${player.name}</p>
`;

        target.classList.remove("border-dashed");
      }

      const positionSelects = document.querySelectorAll(".positionSelect");

      positionSelects.forEach((positionSelect, index) => {
        positionSelect.addEventListener("change", function () {
          const Milieu = inputArray.filter(
            (player) => player.role === "Milieu",
          );

          const playerIndex = Number(positionSelect.dataset.playerIndex);
          const player = inputArray[playerIndex];

          if (!player) return;
          if (player.position !== "banc") {
            const oldPosition = document.querySelector(`#${player.position}`);

            if (oldPosition) {
              oldPosition.innerHTML = `
          <p class="text-green-400 font-bold">${player.position}</p>
          <p class="text-gray-400 text-xs">Libre</p>
        `;
              oldPosition.classList.add("border-dashed");
            }
          }

          player.position = positionSelect.value;

          if (player.position !== "banc") {
            mg(player, player.position);
          }
        });
      });
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
            <button data-id="${player.id}" class="edit-btn text-[#c17a62]">edit</button>
            <button data-id="${player.id}" class="delete-btn text-gray-500">delete</button>
          </div>
        </div>
      </div>
      <div id="Apositions" class="relative mt-3">
          <select data-player-index="${i}" class="positionSelect w-full rounded-lg border border-[#344155] bg-[#1e293b] px-4 py-3 pr-10 text-sm text-gray-300">
            <option value="banc">Sur le banc</option>
            <option value="BU1">BU1 - Buteur 1</option>
            <option value="BU2">BU2 - Buteur 2</option>
          </select>
        </div>
    `;
      function du(player, position) {
        const target = document.querySelector(`#${position}`);

        if (!target) return;

        target.innerHTML = `

  <p class="text-red-400 font-bold">${player.number}</p>
  <p class="text-gray-400 text-xs">${player.name}</p>
`;

        target.classList.remove("border-dashed");
      }

      const positionSelects = document.querySelectorAll(".positionSelect");

      positionSelects.forEach((positionSelect, index) => {
        positionSelect.addEventListener("change", function () {
          const attaquant = inputArray.filter(
            (player) => player.role === "Attaquant",
          );

          const playerIndex = Number(positionSelect.dataset.playerIndex);
          const player = inputArray[playerIndex];

          if (!player) return;
          if (player.position !== "banc") {
            const oldPosition = document.querySelector(`#${player.position}`);

            if (oldPosition) {
              oldPosition.innerHTML = `
          <p class="text-red-400 font-bold">${player.position}</p>
          <p class="text-gray-400 text-xs">Libre</p>
        `;
              oldPosition.classList.add("border-dashed");
            }
          }

          player.position = positionSelect.value;

          if (player.position !== "banc") {
            du(player, player.position);
          }
        });
      });
    }
  }

  //deletbtn
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const playerID = Number(this.dataset.id);

      inputArray = inputArray.filter((player) => player.id !== playerID);

      savePlayer();
      playercard();
    });
  });
  updateplayernumber();
}

const confirm = document.querySelector("#confirm");
const nom = document.querySelector("#player");
const number = document.querySelector("#number");
let inputArray = JSON.parse(localStorage.getItem("players")) || [];

function savePlayer() {
  localStorage.setItem("players", JSON.stringify(inputArray));
}

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

    const limits = {
      Gardien:1,
      Défenseur:4,
      Milieu:4,
      Attaquant:2
    }

    const roleCounter = inputArray.filter(player => player.role === playerRole).length;

    if (roleCounter >= limits[playerRole]){
      alert("you cant add more")
      return;
    }

    inputArray.push({
      id: Date.now(),
      name: playername,
      number: playernumber,
      role: playerRole,
      position: "banc",
    });
    savePlayer();
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
playercard();


const editOverlay = document.querySelector("#bgedit");
const editName = document.querySelector("#editplayer");
const editNumber = document.querySelector("#editnumber");
const editSave = document.querySelector("#editSave");

let editingPlayerId = null;

function editPlayer(playerId){
  const player = inputArray.find(
    p=>p.id === Number(playerId)
  )

  editingPlayerId = Number(playerId);

  editName.value = player.name;
  editNumber.value = player.number;

  document.querySelectorAll('#editposte input[name="editpostee"]').forEach(radio => {radio.checked = radio.value === player.role});
  editOverlay.classList.remove("hidden");

}

document.querySelector("#player-card").addEventListener("click" , e=> {
  const button = e.target.closest(".edit-btn");
  if(button){
    editPlayer(button.dataset.id)
  }
});

document.querySelector("#editX").addEventListener("click", ()=> {
  editOverlay.classList.add("hidden")
});
document.querySelector("#editAnnuler").addEventListener("click", ()=> {
  editOverlay.classList.add("hidden")
});

editSave.addEventListener("click", ()=>{
   const player = inputArray.find(
    p=>p.id === editingPlayerId
  );

  const newName = editName.value;
  const newNumber = Number(editNumber.value);
  const selectedRole = document.querySelector('#editposte input[name="editpostee"]:checked')

  const erroredit = document.querySelector('#erroredit')
  const errornedit = document.querySelector('#errornedit')

  erroredit.innerHTML = "";
  errornedit.innerHTML = "";
  erroredit.classList.remove('hidden');
  errornedit.classList.remove('hidden');

  if (newName == ""){
    erroredit.innerText = "entre nom";
    return;
  }
  if(!/^[a-zA-Z]+$/.test(newName)) {
    erroredit.innerText = "les numéros ne sont pas valides";
    return;
  }
  if (newNumber == ""){
    errornedit.innerText = "entre numbre";
    return;
  }

  player.name = newName;
  player.number = newNumber;
  if(player.role !== selectedRole.value){
    player.role = selectedRole.value;
    player.position = "banc";
  }

  savePlayer();
  playercard();

  editOverlay.classList.add("hidden");

})