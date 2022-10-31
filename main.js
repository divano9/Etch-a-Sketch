const container = document.querySelector(".container");
const div = document.createElement("div");
const dFrag = document.createDocumentFragment();


function createGrid (num){


    let squareSize = Math.floor(920 / num);

    
    for(let i = 0; i < num * num; i++){
        const div = document.createElement("div");
        div.classList.add("square")
        dFrag.appendChild(div)
    }

container.appendChild(dFrag);

    const squareClass = container.querySelectorAll("div");

   squareClass.forEach(square => {
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`; 
        
        square.addEventListener("mouseover", (e) => {
            console.log("hover!")
            const target = e.target;
            target.classList.add("hover");
        })
    }) 
    
    
    
}

createGrid(16);