s=0;
cross=0;
document.onkeydown = function(e){
    console.log("key code", e.keyCode)
    if(e.keyCode==38){
        man=document.querySelector('.man');
        man.classList.add('animateMan');
        setTimeout( () => {
            man.classList.remove('animateMan')
            s+=1;
        },700);
    }
    else if(e.keyCode==39){
        man=document.querySelector('.man');
        manX=parseInt(window.getComputedStyle( man, null).getPropertyValue('left'));
        man.style.left=manX+30+"px";
    }
    else if(e.keyCode==37){
        man=document.querySelector('.man');
        manX=parseInt(window.getComputedStyle( man, null).getPropertyValue('left'));
        man.style.left=manX-30+"px";
    }
}    

setInterval(()=> {
    man= document.querySelector('.man');
    gameOver = document.querySelector( '.gameOver');
    obstacle = document.querySelector('.obstacle');
    mx = parseInt(window.getComputedStyle( man, null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle( man, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle( obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle( obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(mx-ox);
    offsetY= Math.abs(my-oy);
    console.log(offsetX,offsetY)
    if (offsetX <150 && offsetY < 110) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
    }
},10);
