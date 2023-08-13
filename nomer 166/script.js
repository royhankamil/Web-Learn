/*
    this program is to make know averange, most higt, 
    most low. 
 */

// declaration variable

    //dom variable (selection)
    manyInput = document.getElementById("beberapa_number");
    labelInput = document.querySelector("lebel_input");
    mainInput = document.querySelector("main_input");
    button = document.getElementsByTagName("button")[0];

// function

    ///fungsi untuk mengeluarkan input data dari inputan berapa data
function loopingInputan()
{
    for (let i = 0; i < manyInput.value; i++)
    {
        let inputan = "<input type='number' id='input"+i+"'> <br>";
        labelInput.innerHTML += inputan;
        // mainInput.appendChild(inputan);
    }
}

    // main
function main()
{
    button.addEventListener("click", ()=>
    {
        loopingInputan();
    })

    return 0;  // to know if nothing to return
}



// call function main
main();
