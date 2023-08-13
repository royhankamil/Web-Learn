let nama = prompt("halo siapa nama anda : ");
let container = document.getElementsByClassName('content')[0];


if (nama !== null || "")
{
    let span = document.getElementById('name');
    span.innerHTML = "haloo "+ nama;
    span.style.marginLeft = '40%';
    
}



