

function Limas (tinggi, panjang, lebar)
{
    this.tinggi = tinggi;
    this.panjangAlas = panjang;
    this.lebarAlas = lebar;

    this.luasAlas = function()
    {
        let luas = this.panjangAlas * this.lebarAlas;
        return luas;
    }

    this.volume = function()
    {
       let volume = 1/3 * this.luasAlas() * this.tinggi
        return volume;
    }

}


function Bola (jari_jari)
{
    this.jariJari = jari_jari;

    this.luas = function ()
    {
        let luas = Math.PI * this.jariJari * this.jariJari;
        return luas;
    }

    this.volume = function ()
    {
        let volume = (4/3) * Math.PI * this.jariJari * this.jariJari * this.jariJari;
        return volume;
    }

    this.volumeTotalHonai = function ()
    {
        let volume = this.volume() / 2;
        return volume;
    }

}

const panjang = parseFloat(document.getElementById("panjang").value);
const lebar = parseFloat(document.getElementById("lebar").value);
const tinggi = parseFloat(document.getElementById("tinggi").value);
const buttonKirim1 = document.getElementsByClassName("hitung")[0];

let piramid = new Limas(panjang, lebar, tinggi);

alert(piramid.volume());

const jari_jari = parseFloat(document.getElementById("panjang"));
const buttonKirim2 = document.getElementsByClassName("hitung")[1];

let honai = new Bola(jari_jari);

alert(`volume bola = ${honai.volume()}, sedangkan volume honai = ${honai.volumeTotalHonai()}`);
