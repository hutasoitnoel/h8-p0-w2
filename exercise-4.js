// Menggunakan Switch-Case
var tanggal = 29;
var bulan = 2;
var tahun = 2024;

switch (bulan){
  case 1: if (1<=tanggal && tanggal<=31 && 1900<=tahun && tahun<=2200) {
            console.log(tanggal + " Januari " + tahun);
          } 
          break;
  case 2: if (1 <= tanggal && tanggal <= 28 && 1900 <= tahun && tahun <= 2200) {
            console.log(tanggal + " Februari " + tahun);
          } else if (tanggal === 29 && 1900 <= tahun && tahun<=2200 && tahun % 4 === 0 && tahun%100 !== 0) {
            console.log(tanggal + " Februari " + tahun)
          } else if (tanggal === 29 && 1900<=tahun && tahun<=2200 && tahun%4 === 0 && tahun%100 === 0 && tahun%400 === 0){
            console.log(tanggal + " Februari " + tahun)
          } 
          break;
  case 3: if (1<=tanggal && tanggal<=31 && 1900<=tahun && tahun<=2200){
            console.log(tanggal + " Maret " + tahun);
          } 
          break;
  case 4: if (1<=tanggal && tanggal<=30 && 1900<=tahun && tanggal<=2200){
            console.log(tanggal + " April " + tahun);
          } 
          break;
  case 5: if (1<=tanggal && tanggal<=31 && 1900<=tahun && tahun<=2200){
            console.log(tanggal + " Mei " + tahun);
          } 
          break;
  case 6: if (1<=tanggal && tanggal<=30 && 1900<=tahun && tanggal<=2200){
            console.log(tanggal + " Juni " + tahun);
          } 
          break;
  case 7: if (1<=tanggal && tanggal<=31 && 1900<=tahun && tahun<=2200){
            console.log(tanggal + " Juli " + tahun);
          } 
          break;
  case 8: if (1<=tanggal && tanggal<=31 && 1900<=tahun && tahun<=2200){
            console.log(tanggal + " Agustus " + tahun);
          } 
          break;
  case 9: if (1<=tanggal && tanggal<=30 && 1900<=tahun && tanggal<=2200){
            console.log(tanggal + " September " + tahun);
          } 
          break;
  case 10: if (1<=tanggal && tanggal<=31 && 1900<=tahun && tahun<=2200){
            console.log(tanggal + " Oktober " + tahun);
          } 
          break;
  case 11: if (1<=tanggal && tanggal<=30 && 1900<=tahun && tanggal<=2200){
            console.log(tanggal + " November " + tahun);
          } 
          break;
  case 12: if (1<=tanggal && tanggal<=31 && 1900<=tahun && tahun<=2200){
            console.log(tanggal + " Desember " + tahun);
          }  
          break;
}