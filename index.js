const container = document.querySelector(".container");
const button = document.querySelector("button");

function getRandomColor(){
    const r=Math.random() * 256;
    const g=Math.random() * 256;
    const b=Math.random() * 256;

    return `rgb(${r},${g},${b})`;
}

function create_square(size){
    const square = document.createElement("div");
    square.classList.add("grid_square");
    square.style.width=`${size}px`;
    square.style.height=`${size}px`;

    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor=getRandomColor();

    })

    return square;
}

function create_row(n,size){
    const row = document.createElement("div");
    row.classList.add("grid_row");
    for(let i=0;i<n;i++){
        row.appendChild(create_square(size));
    }
    return row;
}

function create_grid(n){
    let squareSize=800/n;
    for(let i=0;i<n;i++){
        container.appendChild(create_row(n,squareSize));
    }
}

function deleteGrid(){
    container.innerHTML="";
}

function changeGrid(){
    n=prompt("Enter new value of n");
    deleteGrid();
    create_grid(n);
}

let n=16;
button.addEventListener("click",()=>{
    changeGrid();
})
create_grid(n);