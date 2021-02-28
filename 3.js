function isPrime(n) {
    let flag = true;

    for (let i = 2; i <= n-1; i++) {
        if (n%i === 0) {           
            flag = false;           
            break;
        }
    }

    if (flag === true) return true;
    return false;
}

function largestPrimeFactor(number) {
    let arr = [];
    
    for (let i = 2; i <= number; i++) {
        if (isPrime(i) === true) {
            if (number % i === 0) {
                arr.push(i);
            }        
        }
    }
    return Math.max.apply(null,arr)   
}

console.log(largestPrimeFactor(13195));

//con input muy grande es incorrecta