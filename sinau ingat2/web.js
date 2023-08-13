let namaTes = '';
let namaItem = '';
let kelasItem = '';
let passwordItem = '';
let komentarItem = '';

function say_hello()
{
    let nama = document.getElementById("nama").value;
    if(nama == "")
    {
        alert("anda tidak memasukkan input nama ");
    }
    else {
        alert("hallo bang " + nama);
    }
}

function showData()
{
    const footer = document.getElementsByTagName('footer')[0];
    footer.style.display = "none";
    const nama = document.getElementById("nama").value;
    const kelas = document.getElementById('kelas').value;
    const password = document.getElementById('password').value;
    const komen = document.getElementById('komen').value;
    const kepulauan = document.getElementById('tinggal').value;
    let jenisKelamin;

    namaTes = nama;
    namaItem = nama;
    kelasItem = kelas;
    passwordItem = password;
    komentarItem = komen;

    if (namaItem.length > 9)
    {
        namaItem = nama.slice(0, 9) + "...";
    }

    if (kelasItem.length > 9)
    {
        kelasItem = kelas.slice(0, 9) + "...";
    }

    if (passwordItem.length > 9)
    {
        passwordItem = password.slice(0, 9) + "...";
    }

    if (komentarItem.length > 8)
    {
        komentarItem = komen.slice(0, 8) + "...";
    }

    if(document.getElementById('laki').checked == true)
    {
        jenisKelamin = "Laki-laki";
    }
    else if(document.getElementById('perempuan').checked == true)
    {
        jenisKelamin = "Laki-laki";
    }

    console.log(nama.lenght);

    const container = document.querySelector('form .container');

    container.style.width = "50%";
    container.innerHTML = '<h1><div class="title">Selamat datang '+ nama +'</div><div id="isiData"><div class = "leftSide"></div><div class="rightSide"></div></div></h1> <button class="back">Tekan Untuk Kembali</button>';
    left_conta = document.querySelector('h1 #isiData .leftSide');
    left_conta.innerHTML = '<div class="nama"></div><div class="kelas"></div><div class="password"></div><div class="komen"></div><div class="kepulauan"></div><div class="jenis_kelamin"></div>';
    nama_conta = document.querySelector('#isiData .leftSide .nama');
    nama_conta.innerHTML = "Nama";
    kelas_conta = document.querySelector('#isiData .leftSide .kelas');
    kelas_conta.innerHTML = "Kelas";
    password_conta = document.querySelector('#isiData .leftSide .password');
    password_conta.innerHTML = "Password";
    komen_conta = document.querySelector('#isiData .leftSide .komen');
    komen_conta.innerHTML = "Komentar";
    pulau_conta = document.querySelector('#isiData .leftSide .kepulauan');
    pulau_conta.innerHTML = "Kepulauan";
    jenis_conta = document.querySelector('#isiData .leftSide .jenis_kelamin');
    jenis_conta.innerHTML = "Jenis Kelamin";

    right_conta = document.querySelector('h1 #isiData .rightSide')
    right_conta.innerHTML = '<div class="isi_nama"></div><div class="isi_kelas"></div><div class="isi_password"></div><div class="isi_komen"></div><div class="isi_pulau"></div><div class="isi_jenis_kelamin"></div>';
    nama_isi = document.querySelector('#isiData .rightSide .isi_nama');
    nama_isi.innerHTML = ":  " + namaItem;
    nama_isi.setAttribute('title',nama );
    kelas_isi = document.querySelector('#isiData .rightSide .isi_kelas');
    kelas_isi.innerHTML = ":  " + kelasItem;
    kelas_isi.setAttribute('title', kelas);
    password_isi = document.querySelector('#isiData .rightSide .isi_password');
    password_isi.innerHTML = ":  " + passwordItem;
    password_isi.setAttribute('title', password);
    komen_isi = document.querySelector('#isiData .rightSide .isi_komen');
    komen_isi.innerHTML = ":  " + komentarItem;
    komen_isi.setAttribute('title', komen);
    pulau_isi = document.querySelector('#isiData .rightSide .isi_pulau');
    pulau_isi.innerHTML = ":  " + kepulauan;
    jenis_kelamin_isi = document.querySelector('#isiData .rightSide .isi_jenis_kelamin');
    jenis_kelamin_isi.innerHTML = ":  " + jenisKelamin;

    toBack = document.querySelector("button.back");
    toBack.style.margin = "0 auto";
    toBack.setAttribute("onclick", "window.history.back();")
    toBack.style.textAlign = "center";
    // aaaaaaaaaaaa
}

const container = document.querySelector("form .container");
const allInput = document.querySelectorAll('.input');
const komentar = document.querySelector("#komen");
const laki = document.querySelector(".jenis input:first-child");
const perempuan = document.querySelector(".jenis input:last-child");
allInput.forEach(function(i)
{
    if (i.value == "")
    {
        // alert("hello world");
        const warning = document.createElement("div");
        const textWarning = document.createTextNode("Inputan ini wajib diisi");
        
        warning.appendChild(textWarning);
        warning.setAttribute('id', 'warn');
        i.after(warning);
    }
}
)
const outputWarn = document.querySelectorAll('#warn');

allInput.forEach(function(i, indeks)
{
container.addEventListener
('mouseover', function(ev)
    {
        // console.log(indeks);
        if (ev.target == i)
        {
            if (i.value == "")
            {
                outputWarn[indeks].style.display = 'block';
                i.style.borderColor = "red";
            }
            else {
                outputWarn[indeks].style.display = 'none';
                i.style.borderColor = "rgb(60, 96, 117)";    
            }
        }
    }
)
}
)
    


function isAllDone()
{
    allInput.forEach(function(ind){
        // console.log(ind.value);
        if(!(ind.value == ""))
        {
            if(laki.checked == true || perempuan.checked == true)
            {
                showData();
            }
        }
    })
}