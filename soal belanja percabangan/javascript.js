

let diskon = 0;
let besarDiskon = 0;
let jumlahPembayaran= 0;

function periksaDiskon(jumBeli)
{
    if (jumBeli >= 300000 )
    {
        diskon = 10;
        jumlahPembayaran = jumBeli - (diskon * 0.01) * jumBeli;
    }
    else {
        diskon = 0
        jumlahPembayaran = jumBeli;
    }
    document.write("diskon " + diskon + "%");
    return jumlahPembayaran;
}

harga = prompt("masukkan ");

document.write(" pembayaran anda " + periksaDiskon(harga));
