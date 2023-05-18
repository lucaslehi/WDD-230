let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("ul");

button.addEventListener("click", () => {
  if (input.value != "") {
    let chapter = input.value;
    input.value = "";

    let listChapters = document.createElement("li");
    let chapterText = document.createElement("span");
    let deleteBtn = document.createElement("button");

    listChapters.appendChild(chapterText);
    chapterText.textContent = chapter;
    listChapters.appendChild(deleteBtn);
    deleteBtn.textContent = "❌";
    list.appendChild(listChapters);

    deleteBtn.addEventListener("click", () => {
      list.removeChild(listChapters);
    });

    input.focus();
  }
});
