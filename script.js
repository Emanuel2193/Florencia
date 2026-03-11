let pages = document.querySelectorAll(".page")
let progress = document.querySelectorAll(".progress span")

let current = 0
let timer = null
let storyStarted = false


/* ---------- RESET ---------- */

function resetStory(){

current = 0

clearTimeout(timer)

pages.forEach(page=>{
page.classList.remove("active")
})

if(pages.length>0){
pages[0].classList.add("active")
}

progress.forEach(bar=>{
bar.classList.remove("fill")
})

}


/* ---------- ABRIR CARTA ---------- */

function openEnvelope(){

    document.querySelector(".envelope").classList.add("open")
    
    createSparkles()

document.querySelector(".envelope").classList.add("open")

let music=document.getElementById("music")

if(music){
music.currentTime=15
music.play().catch(()=>{})
}

let song=document.getElementById("songName")
if(song){
song.style.opacity="1"
}

resetStory()

if(navigator.vibrate){
navigator.vibrate(120)
}

setTimeout(()=>{

document.getElementById("envelopeContainer").style.display="none"
document.getElementById("story").style.display="block"

storyStarted=true

startProgress()

},700)

}


/* ---------- SIGUIENTE PAGINA ---------- */

function nextPage(){

if(!storyStarted) return

clearTimeout(timer)

if(current>=pages.length-1){
return
}

pages[current].classList.remove("active")
progress[current].classList.remove("fill")

current++

pages[current].classList.add("active")

if(current===pages.length-1){

let heart=document.createElement("div")
heart.className="beatHeart"
heart.innerHTML="❤️"

pages[current].appendChild(heart)

if(navigator.vibrate){
navigator.vibrate([200,100,200])
}

}

startProgress()

}


/* ---------- PAGINA ANTERIOR ---------- */

function prevPage(){

if(!storyStarted) return

clearTimeout(timer)

if(current===0) return

pages[current].classList.remove("active")
progress[current].classList.remove("fill")

current--

pages[current].classList.add("active")

startProgress()

}


/* ---------- PROGRESO ---------- */

function startProgress(){

progress[current].classList.add("fill")

timer=setTimeout(()=>{
nextPage()
},3500)

}


/* ---------- BOTON NO ---------- */

function moveButton(){

let btn=document.getElementById("noBtn")

let x=Math.random()*200-100
let y=Math.random()*150-75

btn.style.transform=`translate(${x}px,${y}px)`

}


/* ---------- BOTON SI ---------- */

function sayYes(){

if(navigator.vibrate){
navigator.vibrate([300,100,300])
}

for(let i=0;i<35;i++){

let heart=document.createElement("div")

heart.className="heart"
heart.innerHTML="❤️"

heart.style.position="fixed"
heart.style.left=Math.random()*window.innerWidth+"px"
heart.style.top=Math.random()*window.innerHeight+"px"
heart.style.fontSize="24px"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},1000)

}

setTimeout(()=>{
window.location.href="https://wa.me/543875711756?text=Hola%20acepto%20tu%20invitación%20❤️"
},900)

}


/* ---------- PETALOS ---------- */

let petals=document.querySelector(".petals")

if(petals){

for(let i=0;i<25;i++){

let petal=document.createElement("span")

petal.style.left=Math.random()*100+"vw"
petal.style.animationDuration=(6+Math.random()*5)+"s"

petals.appendChild(petal)

}

}


/* ---------- SWIPE ---------- */

let startX=0

document.addEventListener("touchstart",e=>{
startX=e.touches[0].clientX
})

document.addEventListener("touchend",e=>{

if(!storyStarted) return

let endX=e.changedTouches[0].clientX

if(startX-endX>50){
nextPage()
}

if(endX-startX>50){
prevPage()
}

})


/* ---------- CLICK IZQ / DER ---------- */

document.addEventListener("click",function(e){

if(!storyStarted) return

if(e.target.tagName==="BUTTON") return

let screenWidth=window.innerWidth
let clickX=e.clientX

if(clickX < screenWidth/2){
prevPage()
}else{
nextPage()
}

})

function createSparkles(){

    let container=document.querySelector(".sparkles")
    
    for(let i=0;i<20;i++){
    
    let sparkle=document.createElement("span")
    
    sparkle.style.left=Math.random()*window.innerWidth+"px"
    sparkle.style.top=Math.random()*window.innerHeight+"px"
    
    container.appendChild(sparkle)
    
    setTimeout(()=>{
    sparkle.remove()
    },1500)
    
    }
    
    }