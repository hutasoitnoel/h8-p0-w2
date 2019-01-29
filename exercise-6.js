//1. Melakukan Looping Menggunakan While
num = 0;
console.log("LOOPING PERTAMA");
while (num<20){
  num += 2;
  console.log(num + " - I love coding");
}

num=20;
console.log("LOOPING KEDUA");
while (num>0){
  console.log(num + " - I will become fullstack developer");
  num -= 2;
}



//2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");
for (num = 1; num <= 20; num++){
  console.log(num + " - I love coding");
}

console.log("LOOPING KEDUA");
for (num = 20; num>=1; num--){
  console.log(num + " - I will become fullstack developer");
}



//3. Angka Ganjil dan Genap
for (num = 1; num <= 100; num +=1){
  if (num%2 !== 0){
    console.log("GANJIL")
  } else{
    console.log("GENAP")
  }
}

for (num = 1; num<=100; num += 2){
  if (num%3 === 0){
    console.log(num + " KELIPATAN 3");
  }
}

for (num = 1; num<=100; num += 5){
  if (num%6 === 0){
    console.log(num + " KELIPATAN 6");
  }
}

for (num = 1; num<=100; num += 9){
  if (num%10 === 0){
    console.log(num + " KELIPATAN 10");
  }
}