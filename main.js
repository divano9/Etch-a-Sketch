const container = document.querySelector(".container");
const div = document.createElement("div");
const dFrag = document.createDocumentFragment();
const btnS = document.querySelector("#setSize");
const btnE = document.querySelector("#erace");
let opacityCounter = 5; // a number that is added to increase opacity
let sqNum = 8; // a default number of squares per sides



function createGrid (num){

    removeAllChildNodes(container) // delete all child divs before adding the new ones

    const squareSize = Math.floor(960 / num); // calculate the square size based on their number and drawing surface (container) width
    const squareNumber = Math.pow(num,2); // add the same number of squares both horizontaly and verticaly
    

    container.style.width = squareSize * num + "px";
    
    
    for(let i = 0; i < squareNumber; i++){ // add all squares(divs) to dfrag(document fragment)
        const div = document.createElement("div");
        div.classList.add("square")
        dFrag.appendChild(div)
    }

    container.appendChild(dFrag); // add dFrag with all of the squares to the container div

    const squareClass = container.querySelectorAll(".square");
    

   squareClass.forEach(square => { // set square width and height based on the squareSize variable
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        
        square.addEventListener("mouseover", (e) => { // on mouseover add hover class, and increase opacity 
            const target = e.target;
            target.classList.add("hover");
            opacityCounter += 5;
            if(opacityCounter > 100){
                target.style.opacity = 100 + "%";
            } 
            target.style.opacity = `${opacityCounter}%`;
        })

        square.addEventListener("click", (e) => { // on click add or remove hover class
            const target = e.target;
            target.classList.toggle("hover");
        })

         
    }) 
        
}


btnS.addEventListener("click", () => { // user sets the number of squares per side
    let prom = Number(prompt("Please input a number of squares per side"));
    if(prom > 100){
      alert("max number of squares per side is 100!") // if the number is lager than 100, set it to 100
      sqNum = 100;
    } else{
        sqNum = prom;
    }
    console.log(sqNum)
    createGrid(sqNum);
})

btnE.addEventListener("click",() => { // removes the hover class from every square(div) that has it
    opacityCounter = 5;
    const divs = document.querySelectorAll(".hover");
    divs.forEach(div => {
        div.classList.remove("hover");
    })
})

function removeAllChildNodes(parent) { // function that removes all children from the parent
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

createGrid(sqNum);