let arr = [];
function myFunction() {
  const expanseName = document.getElementById("name").value;
  const expanseAmount = parseInt(document.getElementById("amount").value);
  const expenseDate = document.getElementById("date").value;

  const obj = {
    expanseName: expanseName,
    expanseAmount: expanseAmount,
    expenseDate: expenseDate,
  };
  arr.push(obj);
  renderTable();
}

function deleteFunctin(i) {
  arr.splice(i, 1);
  renderTable();
}

function renderTable() {
  let totalAmount = 0;
  document.getElementById("table").innerHTML = null;

  let table = document.getElementById("table");
  const header = document.createElement("thead");
  const headerEle = document.createElement("tr");

  const expenseNameHeader = document.createElement("th");
  expenseNameHeader.textContent = "Expense Name";
  headerEle.appendChild(expenseNameHeader);

  const expenseAmountHeader = document.createElement("th");
  expenseAmountHeader.textContent = "Amount";
  headerEle.appendChild(expenseAmountHeader);

  const expenseDateHeader = document.createElement("th");
  expenseDateHeader.textContent = "Date";
  headerEle.appendChild(expenseDateHeader);

  const actionHeader = document.createElement("th");
  actionHeader.textContent = "Action";
  headerEle.appendChild(actionHeader);

  header.appendChild(headerEle);
  table.appendChild(header);

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    let tr = document.createElement("tr");
    tr.classList.add("table-data");

    let td1 = document.createElement("td");
    td1.textContent = ele.expanseName;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = ele.expanseAmount;
    tr.appendChild(td2);

    let td4 = document.createElement("td");
    td4.textContent = ele.expenseDate;
    tr.appendChild(td4);

    let td3 = document.createElement("td");
    td3.textContent = "delete";
    td3.classList.add("delete-btn");
    tr.appendChild(td3);

    td3.addEventListener("click", () => deleteFunctin(i));

    table.appendChild(tr);

    totalAmount += ele.expanseAmount;
  }

  document.getElementById("total-amount").innerHTML = totalAmount;
}
