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

function updateplayernumber () {
    console.log(document.querySelectorAll(".positionSelect").length);
    let allplayers = document.querySelector("#playersn");
    allplayers.innerText = `${inputArray.length} joueur(s)`; 
    } 

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
            <div class="text-[#d4a32f]">${player.number}</div>

            <div>
              <h2 class="text-gray-300">${player.name}</h2>
              <p class="text-sm text-[#d4a32f]">${player.role}</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <button id="editbtn" class="text-[#c17a62]">edit</button>
            <button data-index="${i}" class="delete-btn text-gray-500">delete</button>
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

          const playerIndex = Number (positionSelect.dataset.playerIndex);
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
      document.querySelectorAll('.delete-btn').forEach((btn)=> {
      btn.addEventListener('click',function () {
        const index = Number(this.dataset.index);
        inputArray.splice(index, 1)
        updateplayernumber();
        playercard();

        if (player.position && player.position !== "banc") {
          const oldPosition = document.querySelector(`#${player.position}`)
          if (oldPosition) {
            oldPosition.innerHTML = `
            <div id="GB"
                        class="col-start-1 col-span-2 row-start-4 row-span-3 h-full bg-[#111827] border-2 border-dashed border-yellow-500 rounded-2xl">
                        <div class="flex items-center justify-center h-full gap-2">
                            <div>
                                <p id="gb" class="text-yellow-500  font-bold">GB</p>
                                <p id="nliber" class="text-gray-400 text-xs">libre</p>
                            </div>
                        </div>
                    </div>
            `;
            
          }
        }
      })
    })
  

      //edit button
      const editoverlay = document.querySelector("#bgedit");
      // const editpopup = document.querySelector("#editpopup");
      // editpopup.innerHTML = `
      // <div id="bgedit"
      //   class="flex justify-center w-full h-full bg-[rgba(0,0,0,0.5)] fixed inset-0 overflow-y-auto overflow-x-hidden fixed z-500 p-2 hidden">
      //   <div id="editpopup" class="bg-[#1E293B] rounded-2xl relative w-100 h-150 flex-row text-start ">
      //       <div class="flex justify-between">
      //           <p class="text-white font-bold m-5 ">Modifier le joueur</p>
      //           <button class="text-gray-400  m-5" id="X">X</button>
      //       </div>
      //       <div class="flex flex-col">
      //           <label for="player" class="text-gray-400 m-3">nom complet</label>
      //           <input id="editplayer" name="player" type="text" placeholder="nom du joueur"
      //               class="bg-[#0F172A] rounded-2xl p-4 ml-3 text-white m-3">
      //           <p id="error" class="text-red-400 text-1xl m-1"></p>
      //       </div>
      //       <p class="text-gray-400 m-3">poste</p>

      //       <div id="editposte" class="grid grid-cols-2 gap-5 m-5">

      //           <label id="Gardien"
      //               class="bg-[#0F172A] rounded-2xl text-white flex justify-center p-4 gap-2 items-center cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-yellow-500">
      //               <input type="radio" name="position" value="Gardien" class="appearance-none">
      //               <div class="w-2 h-2 bg-yellow-300 rounded-full"></div>
      //               Gardien
      //           </label>

      //           <label id="Défenseur"
      //               class="bg-[#0F172A] rounded-2xl text-white flex justify-center p-4 gap-2 items-center cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-blue-500">
      //               <input type="radio" name="position" value="Défenseur" class=" appearance-none">
      //               <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
      //               Défenseur
      //           </label>

      //           <label
      //               class="bg-[#0F172A] rounded-2xl text-white flex justify-center p-4 gap-2 items-center cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-green-500">
      //               <input type="radio" name="position" value="Milieu" class="appearance-none">
      //               <div class="w-2 h-2 bg-green-600 rounded-full"></div>
      //               Milieu
      //           </label>

      //           <label
      //               class="bg-[#0F172A] rounded-2xl text-white flex justify-center p-4 gap-2 items-center cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-red-500">
      //               <input type="radio" name="position" value="Attaquant" class="appearance-none">
      //               <div class="w-2 h-2 bg-red-600 rounded-full"></div>
      //               Attaquant
      //           </label>

      //       </div>
      //       <p id="errorr" class="text-red-400 text-1xl m-1"></p>

      //       <div class="flex flex-col">
      //           <label for="number" class="text-gray-400 m-2">numéro(1 à 99)</label>
      //           <input type="number" min="1" max="99" id="editnumber" name="number" placeholder="numero"
      //               class="bg-[#0F172A] rounded-2xl p-4 ml-3 text-white m-3">
      //           <p id="errorn" class="text-red-400 text-1xl m-1 "></p>
      //       </div>
      //       <div class="flex justify-end">
      //           <button id="Annuler" class="text-white bg-gray-500 rounded-2xl p-2 m-3">Annuler</button>
      //           <button type="submit" id="confirm" class="bg-green-600 rounded-2xl p-2 m-3 text-white">Enregistrer</button>
      //       </div>
      //   </div>
      //    </div>
      // `;

      // const editbtn = document.querySelector("#editbtn");
      // function openeditpopup() {
      //   editoverlay.classList.remove("hidden");
      // }
      // editbtn.addEventListener("click", openeditpopup());

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
            <button data-index="${i}" class="delete-btn text-gray-500">delete</button>
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

          const playerIndex = Number (positionSelect.dataset.playerIndex);
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
      document.querySelectorAll('.delete-btn').forEach((btn)=> {
      btn.addEventListener('click',function () {
        const index = Number(this.dataset.index);
        inputArray.splice(index, 1)
        updateplayernumber();
        playercard();

        if (player.position && player.position !== "banc") {
          const oldPosition = document.querySelector(`#${player.position}`)
          if (oldPosition) {
            oldPosition.innerHTML ="libre"
            oldPosition.classList.add('border-dashed')
          }
        }
      })
    })


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
            <button data-index="${i}" class="delete-btn text-gray-500">delete</button>
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

          const playerIndex = Number (positionSelect.dataset.playerIndex);
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

      document.querySelectorAll('.delete-btn').forEach((btn)=> {
      btn.addEventListener('click',function () {
        const index = Number(this.dataset.index);
        inputArray.splice(index, 1)
        updateplayernumber();
        playercard();

        if (player.position && player.position !== "banc") {
          const oldPosition = document.querySelector(`#${player.position}`)
          if (oldPosition) {
            oldPosition.innerHTML ="libre"
            oldPosition.classList.add('border-dashed')
          }
        }
      })
    })


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
            <button data-index="${i}" class="delete-btn text-gray-500">delete</button>
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
          const player = inputArray[playerIndex]

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

     document.querySelectorAll('.delete-btn').forEach((btn)=> {
      btn.addEventListener('click',function () {
        const index = Number(this.dataset.index);
        inputArray.splice(index, 1)
        updateplayernumber();
        playercard();

        if (player.position && player.position !== "banc") {
          const oldPosition = document.querySelector(`#${player.position}`)
          if (oldPosition) {
            oldPosition.innerHTML ="libre"
            oldPosition.classList.add('border-dashed')
          }
        }
      })
    })
    } 
    updateplayernumber(); 
  }

//deletbtn
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
      position: "banc",
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
