
const table = document.createElement("table");
document.body.appendChild(table);


let counter = 1;
for (let i = 0; i < 10; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 10; j++) {
    const cell = row.insertCell();
    cell.textContent = counter++;
  }
}


table.style.borderCollapse = "collapse";
table.style.width = "100%";


const cells = document.querySelectorAll("td, th");
cells.forEach((cell) => {
  cell.style.border = "1px solid black";
  cell.style.padding = "10px";
  cell.style.textAlign = "center";
});
