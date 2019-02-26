// Menggunakan Switch-Case
var tanggal = 31;
var bulan = 4;
var tahun = 2024;

if (tanggal >= 1 && tanggal <= 31 && bulan >= 1 && bulan <= 12 && tahun >= 1900 && tahun <= 2200){
  switch (bulan){
    case 1: console.log(tanggal + " Januari " + tahun); break;
    case 2: if (tanggal <= 28) {
              console.log(tanggal + " Februari " + tahun);
            } else if (tanggal === 29 && tahun % 4 === 0 && tahun%100 !== 0) {
              console.log(tanggal + " Februari " + tahun)
            } else if (tanggal === 29 && tahun%4 === 0 && tahun%100 === 0 && tahun%400 === 0){
              console.log(tanggal + " Februari " + tahun)
            } else{
              console.log("Tanggal tersebut tidak ada")
            }
            break;
    case 3: console.log(tanggal + " Maret " + tahun); break;
    case 4: if (tanggal<=30){
              console.log(tanggal + " April " + tahun);
            } else{
              console.log("Tanggal tersebut tidak ada")
            } 
            break;
    case 5: console.log(tanggal + " Mei " + tahun); break;
    case 6: if (tanggal<=30){
              console.log(tanggal + " Juni " + tahun);
            } else{
              console.log("Tanggal tersebut tidak ada")
            } 
            break;
    case 7: console.log(tanggal + " Juli " + tahun); break;
    case 8: console.log(tanggal + " Agustus " + tahun); break;
    case 9: if (tanggal<=30){
              console.log(tanggal + " September " + tahun);
            } else{
              console.log("Tanggal tersebut tidak ada")
            } 
            break;
    case 10: console.log(tanggal + " Oktober " + tahun); break;
    case 11: if (tanggal<=30){
              console.log(tanggal + " November " + tahun);
            } else{
              console.log("Tanggal tersebut tidak ada")
            } 
            break;
    case 12: console.log(tanggal + " Desember " + tahun); break;
  }
} else {
  console.log("Masukkan antara 1-1-1900 Sampai 31-12-2200")
}