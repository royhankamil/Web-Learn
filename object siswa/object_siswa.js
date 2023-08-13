
////object literal
// let Siswa1 = {
//     nama : "royhan",
//     jenisKelamin : "laki laki",
//     nisn : 0932032,
//     nis : 338864,
//     nilaiRapot : [85, 85, 85, 85],
//     umur : 16,

//     rataRata : function ()
//     {
//         let totalNilai = this.nilaiRapot.reduce((total, number)=>total+number)
//         return totalNilai / this.nilaiRapot.length;
//     }

// }

// let Siswa2 = {
//         nama : "Farhan",
//         jenisKelamin : "laki laki",
//         nisn : 092392,
//         nis : 3332364,
//         nilaiRapot : [87, 85, 90, 70],
//         umur : 16,
//         alamat: {
//             jalan: "soekarno hatta",
//             gang : 2,
//             no : 30
//         },
    
//         rataRata : function ()
//         {
//             let totalNilai = this.nilaiRapot.reduce((total, number)=>total+number)
//             return totalNilai / this.nilaiRapot.length;
//         }
    
//     }


////function declaration
// function Siswa(nama, jenisKelamin, nisn, nis, nilaiRaport, umur)
// {
//     let Siswa = {};
//     Siswa.nama = nama;
//     Siswa.jenisKelamin = jenisKelamin;
//     Siswa.nisn = nisn;
//     Siswa.nis = nis;
//     Siswa.nilaiRaport = nilaiRaport;
//     Siswa.umur = umur;

//     Siswa.rataRata = function ()
//     {
//         let totalNilai = this.nilaiRaport.reduce((total, number)=>total+number)
//         return totalNilai / this.nilaiRaport.length;
//     }    
//     return Siswa;
// }

const panjang = document.getElementById("panjang");
const lebar = document.getElementById("lebar");
const hitung = document.getElementsByClassName("submit")[0];
const hasil = document.getElementsByClassName("hasil")[0];

// function SegiEmpat(sisiPanjang, sisiLebar )
// {
//     let SegiEmpat= {};
//     SegiEmpat.sisiPanjang = sisiPanjang;
//     SegiEmpat.sisiLebar = sisiLebar;

//     SegiEmpat.hitungKeliling = function () 
//     {
//         return 2 * (this.sisiPanjang + this.sisiLebar);  
//     } 
//     SegiEmpat.hitungLuas = function ()
//     {
//         return this.sisiPanjang * this.sisiLebar;
//     }

//     return SegiEmpat;
// }

// hitung.addEventListener("click", ()=>
// {
//     let persegi = SegiEmpat(parseFloat(panjang.value), parseFloat(lebar.value));
//     hasil.innerHTML = "<br> luas " + persegi.hitungLuas() + " keliling " + persegi.hitungKeliling();
// })

// let kotak = SegiEmpat(20, 20);
// let royhan = Siswa("royhan kamil", "laki", 099982, 78390, [80, 80, 80, 80], 16);


////constructor
// function Siswa(nama, jenisKelamin, nisn, nis, nilaiRaport, umur)
// {
//     this.nama = nama;
//     this.jenisKelamin = jenisKelamin;
//     this.nisn = nisn;
//     this.nis = nis;
//     this.nilaiRaport = nilaiRaport;
//     this.umur = umur;

//     this.rataRata = function ()
//     {
//         let totalNilai = this.nilaiRaport.reduce((total, number)=>total+number) //tanpa this pada nilaiRaport juga bisa
//         return totalNilai / this.nilaiRaport.length; //this untuk membuatnya jauh lebih spesifik
//     }
// }
function SegiEmpat(sisiPanjang, sisiLebar )
{
    this.sisiPanjang = sisiPanjang;
    this.sisiLebar = sisiLebar;

    this.hitungKeliling = function () 
    {
        return 2 * (this.sisiPanjang + this.sisiLebar);  
    } 
    this.hitungLuas = function ()
    {
        return this.sisiPanjang * this.sisiLebar;
    }

}

hitung.addEventListener("click", ()=>
{
    let persegi = new SegiEmpat(parseFloat(panjang.value), parseFloat(lebar.value));
    hasil.innerHTML = "<br> luas " + persegi.hitungLuas() + " keliling " + persegi.hitungKeliling();
})

// let kotak = SegiEmpat(20, 20);

// let royhan = new Siswa("royhan kamil", "laki", 099982, 78390, [80, 80, 80, 80], 16);

/*
bedanya menggunakan function declaration dengan constructor
1. function declaration memerlukan pengenalan object
misal NamaObject = {} sedangkan constructor tidak
2. function declaration memerlukan return atau pengembalian 
yang mengmbalikan NamaObject misal : return NamaObject
sedangkan constructor tidak
3. penggunaan pengambilan properti atau pemanggilan dalam object properti
apabila function declaration seperti ini : NamaObject.namaVariable
sedangkan constructor ini : this.namaVariable 
4. pembuatan objectnya yang berbeda kalau constructor 
seperti ini : objectBaru = new NamaObject()
sedangkan function declaration tidak
*/


////object.create()
// const kumpulanFungsi = {
//     rataRata: function ()
//     {
//         let totalNilai = this.nilaiRaport.reduce((total, number)=>total+number)
//         return totalNilai / this.nilaiRaport.length;
//     }
// }

// function Siswa(nama, jenisKelamin, nisn, nis, nilaiRaport, umur)
// {
//     let Siswa = Object.create(kumpulanFungsi);
//     Siswa.nama = nama;
//     Siswa.jenisKelamin = jenisKelamin;
//     Siswa.nisn = nisn;
//     Siswa.nis = nis;
//     Siswa.nilaiRaport = nilaiRaport;
//     Siswa.umur = umur;
    
//     return Siswa;
// }

// let royhan = new Siswa("royhan kamil", "laki", 099982, 78390, [80, 80, 80, 80], 16);



//// with using prototype
