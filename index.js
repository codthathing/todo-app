let toItem = document.getElementById("todo-item");
let subBtn = document.getElementById("sub-btn");
let oList = document.getElementById("ol-list");
let cleBtn = document.getElementById("clear-btn");
let listDiv = document.getElementById("list-div");

let savedNotes = JSON.parse(localStorage.getItem("list"));

if (savedNotes === null) {
  localStorage.setItem("list", JSON.stringify([]));
};

subBtn.addEventListener("click", () => {
  if (toItem.value) {
    savedNotes = [...savedNotes, { id: Date.now(), text: toItem.value }];
    localStorage.setItem("list", JSON.stringify(savedNotes));
    toItem.value = "";
    renderTask();
  };
});

function deleteTask(id) {
  savedNotes = savedNotes.filter((text) => text.id !== id);
  localStorage.setItem("list", JSON.stringify(savedNotes));
  renderTask();
};

function completeTask(id) {
  deleteTask(id);
  document.querySelector("#pop-up").classList.add("open-pop");
};

function renderTask() {
  oList.innerHTML = savedNotes.map(({ id, text }) => {
    return `
      <li>
        <div id="li-text">${text}</div>
        <button style="margin-right: 1rem;" class="del-btn button" onclick="deleteTask(${id})">Delete</button>
        <button class="don-btn button" onclick="completeTask(${id})">Done</button>
      </li>`;
  }).join("");
};

cleBtn.addEventListener("click", () => {
  savedNotes = [];
  localStorage.setItem("list", JSON.stringify([]));
  renderTask();
});

renderTask();