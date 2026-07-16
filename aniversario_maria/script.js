const text =
"Carregando todos os motivos pelos quais eu amo você... ❤️";

let i = 0;

const typing = document.getElementById("typing");

function write(){

if(i < text.length){

typing.innerHTML += text.charAt(i);

i++;

setTimeout(write,60);

}else{

document.getElementById("enterBtn").style.display="block";

}

}

write();

document
.getElementById("enterBtn")
.addEventListener("click",()=>{

document.getElementById("loading").style.display="none";

document.getElementById("site").style.display="block";

});

function playMusic(){

document
.getElementById("music")
.play();

}

function secret(el,msg){

alert(msg);

el.style.opacity=".4";

}

document
.getElementById("secretButton")
.addEventListener("click",()=>{

document.getElementById("secretModal").style.display="flex";

});

function closeSecret(){

document.getElementById("secretModal").style.display="none";

}

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=(Math.random()*20+10)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

document.body.appendChild(heart);

let pos=0;

const fall=setInterval(()=>{

pos+=2;

heart.style.top=pos+"px";

if(pos>window.innerHeight){

heart.remove();

clearInterval(fall);

}

},20);

}

setInterval(createHeart,600);