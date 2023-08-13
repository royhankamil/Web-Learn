

inputNama = document.getElementById("nama");
inputPass = document.getElementById("pass");
displayNama = document.querySelector(".wrong_nama");
displayPass = document.querySelector(".wrong_pass");
container = document.querySelector(".isi");
button = document.querySelector(".button");


function wrongOrTrue ()
{
    if (inputNama.value == "nama saya" && inputPass.value == "Tamvan")
    {
        container.innerHTML = "SELAMAT DATANG DI WEB KAMIIIIIIIIII";
    }
    
        else if(inputNama.value != "nama saya")
        {
            displayNama.style.display = "block";
        }
     else if(inputPass.value != "Tamvan")
        {
            displayPass.style.display = "block";
        }
    else(inputNama.value != "nama saya" && inputPass.value != "Tamvan")
    {
        container.innerHTML = "Password anda salah silakan ulangi web ini";
    }

}

button.addEventListener("click", ()=>
{
    wrongOrTrue();
})

