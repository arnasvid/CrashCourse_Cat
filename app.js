var pics = [
    "imgs/Cat_Interrupted.JPG",
    "imgs/Cat_Christmas.JPG",
    "imgs/Cat_Dissapointed.jpg",
    "imgs/Cat_Just.jpg",
    "imgs/Cat_Lazy.JPG",
    "imgs/Cat_Rules_The_World.JPG",
    "imgs/Cat_Scared.JPG",
    "imgs/Cat_Sit.JPG",
    "imgs/Cat_Sleep.JPG",
    "imgs/Cat_Trick.jpg",
    "imgs/Cat_Watching.jpg",
    "imgs/Cat_Young.JPG"
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var i = 1;

btn.addEventListener("click", function(){
    if(i==12){
        i=0;
    }
    img.src = pics[i];
    i++;
});






