// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (Number.isInteger(i/3) || Number.isInteger(i/5)) {
          sum += i
      }
    }
   return sum
  }
  
  console.log(multiplesOf3and5(1000));