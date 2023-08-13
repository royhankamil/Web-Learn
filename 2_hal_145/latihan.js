
/*catch the html to be object*/
const nilai = document.getElementById('nilai');
const container1 = document.querySelector('.if_statement');
const nilaiLoop = document.getElementById('loop');
const container2 = document.querySelector('.for');
let isiFor = document.querySelector('.for .isiFor');
const kumpulBtn = document.querySelector('#btn');
const container3 = document.querySelector('.switch') ;
const inputLahir = document.querySelector('.switch input');


//ambil array value
const value1 = document.getElementById('index0');
const value2 = document.getElementById('index1');
const value3 = document.getElementById('index2');
const value4 = document.getElementById('index3');
const value5 = document.getElementById('index4');
const value6 = document.getElementById('index5');
const urutBtn = document.querySelector("#urut");
const rataBtn = document.querySelector("#rata");

const urutan = document.querySelector('.tulis_urutan');
const rata = document.querySelector('.tulis_rata');


/* declare variable*/
let keterangan = document.createElement("div");
container1.appendChild(keterangan);
let isiKeterangan = document.querySelector(".if_statement div");
isiKeterangan.style.marginTop = "10px";

let lahirKet = document.createElement("div");
container3.appendChild(lahirKet);
let isilahirKet = document.querySelector(".switch div");
isilahirKet.style.marginTop = "10px";



/*function */
function ifChecked()
{
    
    if (nilai.checked === true)
    {
        isiKeterangan.innerHTML = "Anda Mencentang Inputan di Atas";
        isiKeterangan.style.color = "rgb(67, 255, 107)";
    }
    
    else {
        isiKeterangan.innerHTML = "Anda Tidak Mencentang Inputan di Atas";
        isiKeterangan.style.color = "red";
    }
}

function toLoop ()
{
    isiFor.remove();//to make reset or erase data before
    if (nilaiLoop !== "")
    {
        //declare more 
        isiFor = document.createElement("div");
        isiFor.setAttribute('class', 'isiFor');
        container2.appendChild(isiFor);
        
        for(let i = 1; i <= nilaiLoop.value; i++)
        {
            looping = document.createElement("div");
            isiDiv = document.createTextNode("ini diulang sampai " + nilaiLoop.value + " kali, pada loop " + i);
            looping.appendChild(isiDiv);
            isiFor.appendChild(looping);
        }
    }
}

function checkMonth()
{
    if (inputLahir.value !== "")
    {
        switch (inputLahir.value)
        {
            case "1":
                isilahirKet.innerHTML = "ANDA LAHIR PADA BULAN JANUARI";
                isilahirKet.style.color = "red";
                break;
                case "2":
                    isilahirKet.innerHTML = "ANDA LAHIR PADA BULAN FEBRUARI";
                    isilahirKet.style.color = "crimson";
                break;
            case "3":
                isilahirKet.innerHTML = "ANDA LAHIR PADA BULAN MARET";
                isilahirKet.style.color = "lime";
                break;
                case "4":
                    isilahirKet.innerHTML = "ANDA LAHIR PADA BULAN APRIL";
                isilahirKet.style.color = "blue";
                break;
            case "5":
                isilahirKet.innerHTML = "ANDA LAHIR PADA BULAN MEI";
                isilahirKet.style.color = "darkgray";
                break;
                case "6":
                    isilahirKet.innerHTML = "ANDA LAHIR PADA BULAN JUNI";
                isilahirKet.style.color = "aquamarine";
                break;
            case "7":
                isilahirKet.innerHTML = "ANDA LAHIR PADA BULAN JULI";
                isilahirKet.style.color = "aqua";
                break;
            case "8":
                isilahirKet.innerHTML = "ANDA LAHIR PADA BULAN AGUSTUS";
                isilahirKet.style.color = "blueviolet";
                break;
            case "9":
                isilahirKet.innerHTML = "ANDA LAHIR PADA BULAN SEPTEMBER";
                isilahirKet.style.color = "darkred";
                break;
                case "10":
                    isilahirKet.innerHTML = "ANDA LAHIR PADA BULAN OKTOBER";
                isilahirKet.style.color = "cyan";
                break;
                case "11":
                    isilahirKet.innerHTML = "ANDA LAHIR PADA BULAN NOVEMBER";
                    isilahirKet.style.color = "yellow";
                    break;
                    case "12":
                        isilahirKet.innerHTML = "ANDA LAHIR PADA BULAN DESEMBER";
                        isilahirKet.style.color = "pink";
                        break;
                        default:
                isilahirKet.innerHTML = "ANDA TIDAK MEMASUKKAN ANGKA 1-12";
                isilahirKet.style.color = "lightred";
            }
        }
}

function urutkan()
{
    const urutAngka = prompt('Apakah Anda ingin membuat urutan angka (y/t)?')
    // console.log(value1.value);
    let arrayBagus = [value1.value, value2.value, value3.value, value4.value, value5.value, value6.value];
    let arrayUrut;
    urutan.innerHTML = "Hasil dari pengurutan :";
    if (urutAngka == 'y')
        arrayUrut = arrayBagus.sort((a,b)=>a-b);
    else
        arrayUrut = arrayBagus.sort();
    arrayUrut.forEach(element => {
        if(element !== arrayBagus[arrayBagus.length - 1])
            urutan.innerHTML += element+",  " ;
        //to not any ', ' in end of array
        else
            urutan.innerHTML += element;
    });
}

function cariRata (arr) {
    let hasil;
    let total = 0;
    for(let i = 0; i < arr.length; i++)
    {
        total += arr[i];
    }
    hasil = total / arr.length;
    rata.innerHTML = "Hasil dari rata-ratanya adalah " + hasil;
}

/*main*/

//if statemen start


nilai.addEventListener('click', () =>{
        ifChecked();
    }
)
//if statemen end


//for start
kumpulBtn.addEventListener('click', () =>
{
    toLoop();
    }
    )
//for end


//switch start 
inputLahir.addEventListener('input', ()=>
    {
        checkMonth();   
    }
    )
//switch end


//array start
urutBtn.addEventListener('click', ()=>
{
    urutkan();
}
)

rataBtn.addEventListener('click', ()=>
{
    let arrayBagus = [parseFloat(value1.value), parseFloat(value2.value), parseFloat(value3.value), parseFloat(value4.value), parseFloat(value5.value), parseFloat(value6.value)];
    cariRata(arrayBagus);
})
//array end
