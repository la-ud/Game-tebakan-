alert ("Game Tebak Angka \nPilih Angka 1 - 10 \nKamu Punya 3 Kesempatan");

const angkaBenar = Math.floor (Math.random( ) * 10 ) + 1;

for (let nyawa = 3; nyawa >= 1; nyawa--) {
const tebakanUser = prompt("Masukan Tebakan Angka");

if (tebakanUser == angkaBenar) { 
    //Validasi Check input benar

     alert (`Tebakan Anda Benar! \n Angka yang benar adalah ${angkaBenar}`);
    break;
} else if (tebakanUser > angkaBenar) {
     //validasi chack input lebih besar
    alert (`Angka yang kamu masukan lebih besar dari angka yang benar \n Anda masih punya ${nyawa-1} kesempatan lagi`);
} else if (tebakanUser < angkaBenar) {
    //validasi chack input lebih besar
     alert (`Angka yang kamu masukan lebih kecil dari angka yang benar \n Anda masih punya ${nyawa-1} kesempatan lagi`);
}

if (nyawa == 1) {
    alert (`Game Over! \n Angka yang benar adalah ${angkaBenar}`);
}
}