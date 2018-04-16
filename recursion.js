// function multiplesOf3(n) {

//     if (n <= 0) { return 0 }
//     if (n % 3 !== 0) {
//         n = n - (n % 3)
//     }

//     return n + multiplesOf3(n - 3)

// }

// console.log(multiplesOf3(10))

function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }

  console.log(fibonacci(10))