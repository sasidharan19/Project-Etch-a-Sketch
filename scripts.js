//creating divs
let container = document.querySelector(".container");

for(let rowCount=0; rowCount<16; rowCount++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for(let columnCount=0; columnCount<16; columnCount++){
        let column = document.createElement("div");
        column.classList.add("column");

        function random_rgba() {
            var o = Math.round, r = Math.random, s = 255;
            return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
        }
        let color = random_rgba();
        
        column.addEventListener("mouseover", () => {
            column.style.backgroundColor = color;
            column.style.opacity = "5";
        });
        
        column.addEventListener("mouseout", () => {
            column.style.backgroundColor = "darkgrey";
        });

        column.addEventListener("click", () => {
            column.style.backgroundColor = "black";
        })
        
        row.appendChild(column);
    }
}

//generating the number of grid based on user input
let button = document.querySelector(".userInput");
button.addEventListener("click", buttonClickAction);

function buttonClickAction() {
    container.innerHTML = "";

    let input = parseInt(prompt("Please enter the number if grids you need: "));

    if (input > 100) {
        alert("Please enter the value less than 100");
    } else {
        for(let rowCount=0; rowCount<input; rowCount++) {
            let row = document.createElement("div");
            row.classList.add("row");
            container.appendChild(row);
        
            for(let columnCount=0; columnCount<input; columnCount++){
                let column = document.createElement("div");
                column.classList.add("column");
                function random_rgba() {
                    var o = Math.round, r = Math.random, s = 255;
                    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
                }
                let color = random_rgba();
                
                column.addEventListener("mouseover", () => {
                    column.style.backgroundColor = color;
                    column.style.opacity = "5";
                });
                
                column.addEventListener("mouseout", () => {
                    column.style.backgroundColor = "darkgrey";
                });
        
                column.addEventListener("click", () => {
                    column.style.backgroundColor = "black";
                })
                
                row.appendChild(column);
            }
        }
    }
}
