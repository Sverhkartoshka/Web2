function movement(e)
{

    var ship = document.getElementById("ship");
    var cs = window.getComputedStyle(ship);

    var left = parseInt(cs.left);
    //var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.top);
    //var top = parseInt(cs.marginTop);
    console.log("top_ ", top); 

    switch(e.key){
        case "ArrowLeft":  // если нажата клавиша влево
            if(left>0)
                ship.style.left = left - 10 + "px";
            break;
        case "ArrowUp":   // если нажата клавиша вверх
        console.log("top_"); 
        if(top>0)
            {
                console.log("top", top - 10);
                ship.style.top = top - 10 + "px";
                console.log("mtop", ship.style.top);
            }
            break;
        case "ArrowRight":   // если нажата клавиша вправо
            if(left < 895)
                ship.style.left = left + 10 + "px";
            break;
        case "ArrowDown":   // если нажата клавиша вниз
            if(top < 450)
                ship.style.top = top + 10 + "px";
            break;
    }
}
 
window.addEventListener("keydown", movement);