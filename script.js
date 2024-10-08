let inputEl = document.getElementById(`input-list`);
let btnEl = document.getElementById(`btn-list`);
let ulEl = document.getElementById(`ul-list`);
let clearall = document.getElementById("clearall");
let formEl=document.getElementById("form-element")

formEl.addEventListener(`submit`, function (event) {
  event.preventDefault()
  let inputValue = inputEl.value;
  if (inputValue === ``) {
    return;
  }

  let li = document.createElement(`li`);
  li.classList=`liitem`

  let btndelete = document.createElement("button");
  btndelete.innerHTML = '<i class="fas fa-trash"></i>';
  btndelete.classList="btnitem"
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
