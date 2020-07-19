const listInput = document.querySelector(".list-input");
const listButton = document.querySelector(".list-button");
const list = document.querySelector(".list");
const listNumber = document.querySelector(".list-number");
const selectType = document.querySelector(".list-product");

listButton.addEventListener("click", addProduct);
list.addEventListener("click", deleteCheck);

function addProduct(e) {
  e.preventDefault();

  const shopDiv = document.createElement("div");
  shopDiv.classList.add("todo");

  let input = document.createElement("input");
  input.value = `${listInput.value} x${listNumber.value} ${selectType.value}`;
  input.disabled = true;
  input.type = "text";
  input.classList.add("list-item");
  shopDiv.appendChild(input);

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("edit-btn");
  shopDiv.appendChild(editButton);
  editButton.addEventListener("click", edit);
  function edit() {
    input.disabled = !input.disabled;
  }

  const trashButton = document.createElement("button");
  trashButton.innerText = "Delete";
  trashButton.classList.add("delete-btn");
  shopDiv.appendChild(trashButton);

  list.appendChild(shopDiv);

  listInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "delete-btn") {
    const list = item.parentElement;
    list.remove();
  }
}
function printList() {
  var List = document.getElementById("list-conteiner").innerHTML;
  var content = window.open("", "", "height=500, width=500");
  content.document.write("<html>");
  content.document.write("<body > <h1>Div contents are <br>");
  content.document.write(List);
  content.document.write("</body></html>");
  content.document.close();
  content.print();
}
