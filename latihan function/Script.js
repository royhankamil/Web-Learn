
//declare some variable
container = document.querySelector(".color");
randomButton = document.getElementById("random");




//function 
GetRandomColor = () => Math.floor(255 * Math.random());


//events
randomButton.addEventListener("click", ()=>
{
    //make them random
    red = GetRandomColor();
    green = GetRandomColor();
    blue = GetRandomColor();
    // console.log(red);

    container.style.backgroundColor ="rgb("+red +", "+green+","+blue+") ";
})




