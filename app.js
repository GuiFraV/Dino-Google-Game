var character = document.getElementById('character');
var block = document.getElementById('bloc');

function jump(){
    if(character.classList != "animate"){
        character.classList.add('animate');
    }
    setTimeout(() => {
        character.classList.remove('animate');
    },500);
}

var checkDead = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    console.log(blockLeft);

    if(blockLeft<20 && blockLeft>0 && characterTop>=130 ){
        alert("u lose");
        block.style.animation = "none";
        block.style.display = "none";
    }




},10);


document.addEventListener('keydown', (event)=>{

    let up = event.key;

    if(up == 'ArrowUp'){

        jump();

        console.log(checkDead);

    }
})
