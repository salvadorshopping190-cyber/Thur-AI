/* ============================
   THUR AI
   SCRIPT.JS
============================ */

const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

function resize(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

/* ============================
      ESTRELAS
============================ */

const stars=[];

for(let i=0;i<700;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*2+0.3,

speed:Math.random()*1.4+0.2,

alpha:Math.random()

});

}

/* ============================
      PARTÍCULAS
============================ */

const particles=[];

for(let i=0;i<180;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*3,

speed:Math.random()*0.6+0.1,

});

}

/* ============================
      METEOROS
============================ */

const meteors=[];

function createMeteor(){

meteors.push({

x:-300,

y:Math.random()*canvas.height*0.7,

speed:18+Math.random()*8,

length:180+Math.random()*120

});

}

setInterval(()=>{

if(meteors.length < 10){

createMeteor();

}

},2500);

/* ============================
      ANIMAÇÃO
============================ */

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

/* estrelas */

for(let s of stars){

ctx.beginPath();

ctx.arc(s.x,s.y,s.size,0,Math.PI*2);

ctx.fillStyle="rgba(255,255,255,"+s.alpha+")";

ctx.fill();

s.y+=s.speed;

if(s.y>canvas.height){

s.y=0;

s.x=Math.random()*canvas.width;

}

}

/* partículas */

for(let p of particles){

ctx.beginPath();

ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

ctx.fillStyle="rgba(160,120,255,.45)";

ctx.fill();

p.y+=p.speed;

if(p.y>canvas.height){

p.y=0;

p.x=Math.random()*canvas.width;

}

}

/* meteoros */

for(let i=meteors.length-1;i>=0;i--){

let m=meteors[i];

ctx.beginPath();

ctx.strokeStyle="white";

ctx.lineWidth=2;

ctx.shadowBlur=25;

ctx.shadowColor="#7f8fff";

ctx.moveTo(m.x,m.y);

ctx.lineTo(m.x-m.length,m.y-m.length/2);

ctx.stroke();

ctx.shadowBlur=0;

m.x+=m.speed;

m.y+=m.speed*0.5;

if(m.x>canvas.width+400){

meteors.splice(i,1);

}

}

requestAnimationFrame(animate);

}

animate();

/* ============================
   CARREGAMENTO
============================ */

const fill=document.getElementById("fill");
const percent=document.getElementById("percent");

let progress=0;

const timer=setInterval(()=>{

progress++;

fill.style.width=progress+"%";

percent.innerHTML=progress+"%";

if(progress>=100){

clearInterval(timer);

document.querySelector(".status").innerHTML="SISTEMA PRONTO";

}

},55);

/* ============================
   BRILHO DO LOGO
============================ */

const logo=document.querySelector(".logo");

setInterval(()=>{

logo.style.filter="brightness("+(1+Math.random()*0.5)+")";

},250);
/*====================================
      PARTE 5
====================================*/

// Poeira espacial

const dustContainer=document.getElementById("particles");

for(let i=0;i<250;i++){

const d=document.createElement("div");

d.className="spaceDust";

d.style.left=Math.random()*100+"vw";

d.style.top=Math.random()*100+"vh";

d.style.animationDuration=(5+Math.random()*10)+"s";

d.style.animationDelay=Math.random()*5+"s";

dustContainer.appendChild(d);

}

// Piscar estrelas

setInterval(()=>{

stars.forEach(star=>{

star.alpha=Math.random();

});

},300);

// Pulso da estrela central

const core=document.querySelector(".core-light");

setInterval(()=>{

core.style.boxShadow=`

0 0 ${40+Math.random()*30}px white,

0 0 ${90+Math.random()*80}px #6f7dff,

0 0 ${180+Math.random()*100}px #8b3fff

`;

},250);

// Tremor suave da câmera

let angle=0;

setInterval(()=>{

angle+=0.02;

document.querySelector(".container").style.transform=

`translate(-50%,-50%) translate(${Math.sin(angle)*2}px,${Math.cos(angle)*2}px)`;

},16);
