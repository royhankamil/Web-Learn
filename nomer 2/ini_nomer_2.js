
password = document.getElementById("pass");
display = document.querySelector(".tampilkan");
button = document.querySelector("button");


display.style.margin = "20px 150px";

function inputPassword()
{
    if (password.value == "A1B2C3")
    {
        display.innerHTML = "Selamat Datang Di web Kami  yang indah ini ";
        display.style.color = "green";
    }

    else{
        display.innerHTML = "Password salah ulangi !";
        display.style.color = "red";
    }

}


button.addEventListener("click", ()=>
{
    inputPassword();
})

