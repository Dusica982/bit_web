var background = document.querySelector('.background');
var marioStatic = document.querySelector('.background .mario .staticmario');
var marioDinamic = document.querySelector('.background .mario .movingmario');
var moving = 0;


function movePlayer(event) {
    if (!moving) {
        if (event.keyCode === 39) {
            marioDinamic.style.display = "block";
            marioStatic.style.display = "none";
            background.style.animation = "slide 5s infinite";
            // } else (event.keyCode === 38);
            // marioDinamic.style.display = "block";
            // marioStatic.style.display = "none";
            // background.style.animation = " 5s infinite";
        }
    }

    moving++;
}

function stopPlayer(event) {

    marioDinamic.style.display = "none";
    background.style.animation = "none";
    marioStatic.style.display = "block";
    moving = 0;
}






document.addEventListener("keydown", movePlayer);
document.addEventListener("keyup", stopPlayer);







