//creating divs
let container = document.querySelector(".container");

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

//generating the number of grid based on user input
let button = document.querySelector(".userInput");
button.addEventListener("click", buttonClickAction);

function buttonClickAction() {
    container.innerHTML = "";

    let input = parseInt(prompt("Please enter the number if grids you need: "));

    for(let rowCount=0; rowCount<input; rowCount++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    
        for(let columnCount=0; columnCount<input; columnCount++){
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
}