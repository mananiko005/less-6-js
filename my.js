let inputEl = document.getElementById(`input-list`);
let btnEl = document.getElementById(`btn-list`);
let ulEl = document.getElementById(`ul-list`);
let clearall = document.getElementById("clearall");

btnEl.addEventListener(`click`, function () {
  let inputValue = inputEl.value;
  if (inputValue === ``) {
    return;
  }

  let li = document.createElement(`li`);

  let btndelete = document.createElement("button");
  btndelete.innerHTML = '<i class="fas fa-trash"></i>';
  btndelete.addEventListener("click", function () {
    li.remove();
  });
  li.textContent = inputValue;
  li.appendChild(btndelete);
  ulEl.appendChild(li);
  inputEl.value = ``;
});

clearall.addEventListener("click", function () {
  ulEl.innerHTML = "";
});
