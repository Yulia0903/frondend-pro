const table = document.createElement("table");
document.body.appendChild(table);

const rows = 10;
const cols = 10;

let counter = 1;
for (let i = 0; i < rows; i++) {
  const row = table.insertRow();
  for (let j = 0; j < cols; j++) {
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
