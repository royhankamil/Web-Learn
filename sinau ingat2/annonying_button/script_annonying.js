
//initialize or declare some document or else
const button = document.getElementsByTagName('button')[0];
const container = document.querySelector('main');
const rectangle1 = document.querySelector('rect');
let stageLevel = 0;

// function for begin stage
function stage1()
{
    button.addEventListener('mouseover', () => {
        let randDown = Math.floor(Math.random() * (window.innerHeight - 20));
        let randLeft =  Math.floor(Math.random() * (window.innerWidth - 80)) ;
        container.style.margin = '0px';
        button.style.bottom = (randDown - 0) + "px";
        button.style.left = randLeft + "px";
        stageLevel++;
        console.log(stageLevel);
    })
    return stageLevel;
}
//to make drag the box
function dragRect()
{
    document.addEventListener('mousemove', ev =>
    {
        //( ev is some variable of event), ev.clientX = position mouse (x)
        console.log("your coordinate-x : " + ev.clientX + ", and coordinate-y" + ev.clientY);
    })
}

//main of function
function main()
{
    // dragRect();
    stageBegin = stage1();//get return
    console.log(stageBegin);
}

main();