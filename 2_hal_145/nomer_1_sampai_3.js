

//nomer 1

//declare variable
const phi = 3.14;
const input_lingkaran = document.getElementById('lingkaran');
const isi_nom1 = document.querySelector('.isi_nomer_1');
const isi_nom1_input = document.querySelector('.isi_hasil_input');

//function expression and with arrow operator
luasLingkaran = jariJari => phi*jariJari*jariJari;
input_lingkaran.addEventListener('input', ()=>
    {
        luas = luasLingkaran(input_lingkaran.value);
        let hasil_input_2 = "hasil dari input = " + luas;
        isi_nom1_input.innerHTML = hasil_input_2;
    }
    )

//show to console
let hasil_input_1 = "Hasil dari jari-jari => 2.3 = "+luasLingkaran(2.3)+"<br>";
// jari_jari = parseInt(prompt('Masukkan jari-jari: '));

isi_nom1.innerHTML = hasil_input_1 + "<span></span>";

// var test = "120";
// var test2 = "10";

// document.writeln(test + test2 + "<br>");
// document.writeln(parseInt(test)+ parseInt(test2));

//catch document of html
const isiData3 = document.querySelector('.isi_3')


//nomer 2 

//declare variable
let angkaLama = 2.13;
let min = false;
const isiNo2 = document.querySelector('.isi_nomer_2');
const inputIsiNo2 = document.querySelector('.input_isi');
const inputNo2 = document.getElementById('koma');


//function expression
minAtauPlus = ()=> {
    let jumlah =0;
    for(let i=0; i<a; i++)
        jumlah+=a;
    return jumlah;
}

ambilKoma = angka => {
    // let lihat = minAtauPlus(angka);//to check if angka is minus
    // if(angka * angka == lihat)
    //     min = false;
    // else 
    //     min = true;
    if (angka - parseInt(angka) === 0)
        return  0;
    // else if (angka * angka !== angka + angka )
    let angkaString = String(angka);
    let letakTitik = angkaString.indexOf(".");
    let hasilAngka = angkaString.replace(angkaString.substring(0,letakTitik), '0');
    let angkaBaru = parseFloat(hasilAngka);
    // if(min === true)
        return angkaBaru;
    // else
    //     return angkaBaru * -1;
    // return letakTitik;
}
//value in console
const isi_nomer_2 = "dari "+ angkaLama +" menjadi "+ambilKoma(angkaLama);
const breakLine = "<br><br><br>";


//main
isiNo2.innerHTML = isi_nomer_2;
inputNo2.addEventListener('input', ()=>
    {
        let nilaiKoma = ambilKoma(inputNo2.value);
        inputIsiNo2.innerHTML = "nilai dari " + inputNo2.value + " menjadi "+nilaiKoma;
    }
)




//nomer 3

let list = [2.3, 3.4, 4.5, 6.7, 7.8, 9.10, 10.1];

function cariRata (arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++)
    {
        total += arr[i];
    }
    hasil = total / arr.length;
    return hasil;
}

tampilData = array => {
    array.forEach(arraying => {
        isiData3.innerHTML += '['+arraying+']';
    });
}

isiData3.innerHTML += " dari ";
tampilData(list);
isiData3.innerHTML += " rata ratanya menjadi " +cariRata(list);






