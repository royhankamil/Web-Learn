let complete = true;
const namaDepan = document.querySelector( '.dua #nama_depan');
const namaBelakang = document.querySelector( '.dua #nama_belakang');
const namaEmail = document.getElementById('name');
const isiValue = document.querySelector('.isi_value');
const isiValue2 = document.querySelector('.isi_value_2');
const isiValue3 = document.querySelector('.isi_value_3');
const isiValue4 = document.querySelector('.ifNotWork');
const isiValue5 = document.querySelector('.benar_benar_isi');
const kataWajib = document.getElementById('wajib');
const kataSandi = document.getElementById('sandi');
const tampilSandi = document.querySelector(".tampil");
const divTanggal = document.getElementById('lahir');
// const tanggal = document.querySelector('#lahir #tanggal');
// const bulan = document.querySelector('#lahir #bulan');
// const tahun = document.querySelector('#lahir #tahun');
// const isi5 = runningInputValue(5);

// divTanggal.onmouseover(isi5);

function runningInputValue(choose)
{


    if (choose == '1' || choose == 'A'){
        namaDepan.style.border = "1px solid rgb(143, 143, 143)";
        isiValue.style.display = "none";
        // alert("hello");
        if (namaDepan.value == "")
        { 
            namaDepan.style.border = "1px solid red";
            isiValue.style.display = "block";
            complete = false;
        }
    }

    if(choose == '2' || choose == 'A')
    {
        namaBelakang.style.border = "1px solid rgb(143, 143, 143)";
        isiValue.style.display = "none";
        if (namaBelakang.value == "")
        { 
            namaBelakang.style.border = "1px solid red";
            isiValue.style.display = "block";
            complete = false;
        }
    }
        

    if(choose == '3' || choose == 'A')
    {
        namaEmail.style.border = "1px solid rgb(143, 143, 143)";
        isiValue2.style.display = "none";
        if (namaEmail.value == "")
        { 
            namaEmail.style.border = "1px solid red";
            isiValue2.style.display = "block";
            tampilSandi.style.top = "60%";
            complete = false;
        }
    }

    if(choose == '4' || choose == 'A')
    {
        kataSandi.style.border = "1px solid rgb(143, 143, 143)";
        kataSandi.style.marginTop = "23px";
        isiValue3.style.display = "none";
        if (kataSandi.value == "")
        { 
            kataSandi.style.border = "1px solid red";
            kataSandi.style.marginTop = "38px";
            isiValue3.style.display = "block";
            complete = false;
        }
    }
    
    if(choose == '5' || choose == 'A')
    {
        divTanggal.style.border = "1px solid rgb(143, 143, 143)";
        isiValue4.style.display = "none";
        if (divTanggal.tanggal.value == "" || divTanggal.bulan.value == "" || divTanggal.tahun.value == "")
        { 
            divTanggal.style.border = "1px solid red";
            isiValue4.style.display = "block";
            complete = false;
        }
    }
    
    
    if(choose == '6' || choose == 'A')
    {
        kataWajib.style.border = "1px solid rgb(143, 143, 143)";
        isiValue5.style.display = "none";
        if (kataWajib.checked == false)
        { 
            kataWajib.style.border = "1px solid red";
            isiValue5.style.display = "block";
            complete = false;
        }
    }

    return complete;
}


function passwordType()
{
    inputPass = document.querySelector('.tampil input').checked;
    password = document.getElementById("sandi");
    if (inputPass == true)
    {
        // alert("hello");
        password.setAttribute('type', 'text');
    }
    else{
        password.setAttribute('type', 'password');
    }
}

function sayHello(){
    complete = runningInputValue('A');
    const namaDepan = document.querySelector( '.dua input:first-child').value;
    container = document.getElementsByTagName('form')[0];
    if(complete == true)
    {
        container.innerHTML = "Hallo <i>" + namaDepan + "</i> terima kasih telah mendaftar";
        container.style.fontSize = "30px";
        container.style.textAlign = "center";
        container.style.wordSpacing = "5px";
        container.style.letterSpacing = "3px";
        container.style.textTransform = "uppercase";
    }
}