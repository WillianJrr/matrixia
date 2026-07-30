// Fundo Matrix
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix(){
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#00ff66";
    ctx.font = fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){
        const text = letters[Math.floor(Math.random()*letters.length)];
        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
            drops[i]=0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix,33);

// Grade 5x5
const grid = document.getElementById("grid");

for(let i=0;i<25;i++){
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.innerHTML = "◆";
    grid.appendChild(cell);
}

// Botão gerar sinal (visual)
document.getElementById("generate").addEventListener("click",()=>{
    const cells = document.querySelectorAll(".cell");
    cells.forEach(c=>c.classList.remove("active"));

    const selected = [];
    while(selected.length < 3){
        const n = Math.floor(Math.random()*25);
        if(!selected.includes(n)) selected.push(n);
    }

    selected.forEach(i=>{
        cells[i].classList.add("active");
        cells[i].innerHTML = "★";
    });
});

// Cronômetro
let sec = 0;
setInterval(()=>{
    sec++;
    const m = String(Math.floor(sec/60)).padStart(2,"0");
    const s = String(sec%60).padStart(2,"0");
    document.getElementById("timer").textContent = `${m}:${s}`;
},1000);

const siteSelect = document.getElementById("siteSelect");
const siteFrame = document.getElementById("siteFrame");


siteSelect.addEventListener("change", function(){

    let url = this.value;


    if(url){

        siteFrame.src = url;

    } else {

        siteFrame.src = "";

    }

});