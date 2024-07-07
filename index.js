var audio1=new Audio("./sounds/crash.mp3")
var audio2=new Audio("./sounds/kick-bass.mp3")
var audio3=new Audio("./sounds/snare.mp3")
var audio4=new Audio("./sounds/tom-1.mp3")
var audio5=new Audio("./sounds/tom-2.mp3")
var audio6=new Audio("./sounds/tom-3.mp3")
var audio7=new Audio("./sounds/tom-4.mp3")

function sound(key){
    switch(key)
    {
        case "w":
            audio1.play()
            break
        case "a":
            audio2.play()
            break
        case "s":
            audio3.play()
            break
        case "d":
            audio4.play()
            break
        case "j":
            audio5.play()
            break
        case "k":
            audio6.play()
            break
        case "l":
            audio7.play()
            break
    }
}


for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
    sound(this.innerHTML)
    animate(this.innerHTML)
})
}
document.addEventListener("keydown",function (event){
    sound(event.key)
    animate(event.key)
})

function animate(key){
    var bu=document.querySelector("."+key)
    bu.classList.add("pressed")
    setTimeout(function(){bu.classList.remove("pressed")},100)
}