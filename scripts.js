//creating divs
let container = document.querySelector(".container");

/*let row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);

let column = document.createElement("div");
column.classList.add("column");
row.appendChild(column);

let column2 = document.createElement("div");
column2.classList.add("column");
row.appendChild(column2);

let column3 = document.createElement("div");
column3.classList.add("column");
row.appendChild(column3); */

for(let rowCount=0; rowCount<16; rowCount++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for(let columnCount=0; columnCount<16; columnCount++){
        let column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    }
}