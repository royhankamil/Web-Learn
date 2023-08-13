
/*                   nomer 1                              */
//declare variable
const isiInputan = document.getElementById("value");
const hasilAwalKata = document.getElementById("hasil_kata");
const hasilAwalKalimat = document.getElementById("hasil_kalimat");
const hasilAwalHuruf = document.getElementById("hasil_huruf");
const kirimButton = document.getElementById("to_finish");

//function
menghitungKata = (kalimat) => {
    let kata = kalimat.split(" ");
    return kata.length;
}
menghitungJumlahChar = (kalimat) => kalimat.length;

menghitungJumlahKalimat = (kalimat) => {
    let kata = kalimat.split(".");

    return kata.length;
}

kirimButton.addEventListener("click", ()=>
{
    let hasilKata = menghitungKata(isiInputan.value);
    let hasilKalimat = menghitungJumlahKalimat(isiInputan.value);
    let akhirHuruf = menghitungJumlahChar(isiInputan.value);

    if(hasilKalimat > 1)
    akhirHuruf -= (hasilKalimat-1);
    if (hasilKata > 1)
    akhirHuruf -= (hasilKata-1);
    
    hasilAwalKata.innerHTML = "isi kata " + hasilKata;
    hasilAwalKalimat.innerHTML = "isi kalimat " + hasilKalimat;
    hasilAwalHuruf.innerHTML = "isi huruf " + akhirHuruf;
})





/*
---------------------------------------------------------
                        nomer 2
---------------------------------------------------------
*/


//declaration
const inputKata = document.getElementById("angka");
const hasilDua = document.getElementById("hasil_angka");
const ubahButton = document.querySelector(".ubah");

let angkaKata = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
let satu = "se"


//function

const satuan = angka => angkaKata[angka];

function belasan(angka)
{
    if (angka.charAt(1) == "1")
        return satu + "belas";
    
    return satuan(angka.charAt(1)) + " belas";
}

function puluhan (angka)
{
    if(angka.charAt(0) == "1" && angka.charAt(1) != "0")
        return belasan(angka);
    if (angka.charAt(0) == "1")
        return satu + "puluh";
    if (angka == "00")
        return "";

    return satuan(angka.charAt(0)) + " puluh " + satuan(angka.charAt(1));
}

function ratusan (angka)
{
    if (angka.charAt(0) == "1")
        return satu + "ratus " + puluhan(angka.substr(1,2));
    
    return `${satuan(angka.charAt(0))} ratus ${puluhan(angka.substr(1,2))}`
}


function ubahKata(angka)
{
    if(angka == "0")
        return "nol";
    if (angka.length == 2)
        return puluhan(angka);
    else if (angka.length == 3)
        return ratusan(angka);

    angka = satuan(angka);

    if (angka === undefined)
        angka = "Angka belum terdata";

    return angka;//untuk satuan
}

//event

ubahButton.addEventListener("click", ()=>
{
    let merubahKata;
    if (inputKata.value.charAt(0) == "-")
        merubahKata = "negatif " + ubahKata(inputKata.value.substring(1, inputKata.value.length));
    else
        merubahKata  = ubahKata(inputKata.value);

    alert(merubahKata);
})
