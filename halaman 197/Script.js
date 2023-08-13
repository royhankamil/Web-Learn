

// declare of 
const laki = document.getElementById("laki");
const perempuan = document.getElementById("perempuan");
const isi = document.querySelector(".penyimpanan")[0];
const kirim = document.getElementById("kirim");


//event
kirim.addEventListener("click", ()=>
{
    let kelamin = "";
    
    if (laki.checked == true)
        kelamin = "laki";
    else if (perempuan.checked == true)
        kelamin = "perempuan";

    isi.innerHTML = kelamin;    
})


