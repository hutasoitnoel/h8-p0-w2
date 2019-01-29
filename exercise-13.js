// Logic Challenge - X dan O
function xo(str){
  var xCount = 0;
  var yCount = 0;

  for (i = str.length - 1; i >= 0; i--) { 
      if (str[i] === "x"){
        xCount += 1;
      } else if (str[i] === 'o'){
        yCount += 1;
      }
  }
  
  if (xCount === yCount){
    return true
  } else{
    return false
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true