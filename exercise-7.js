//1. Menyusun Barisan Bintang
var rows1 = 5;

while (rows1>0){
  console.log("*");
  rows1--;
}



//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5;

for (i = 1; i <= rows2; i++){
  var asterisk="";
  for (j = 1; j <=rows2; j++){
    asterisk+="*";
  }
  console.log(asterisk);
}



//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;

for (i = 1; i <= rows3; i++){
  var asterisk="";
  for (j = 1; j <= i; j++){
    asterisk+="*";
  }
  console.log(asterisk);
}