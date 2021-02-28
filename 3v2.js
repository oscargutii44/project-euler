function largestPrimeFactor(number) {
    if(isPrime(number)) return number;

    let sqrt = Math.floor(Math.sqrt(number));

    if(sqrt % 2 === 0) {
        sqrt += 1;
    }

    for(let i = sqrt; i>=1; i-=2) {
        console.log(i)
        if(number % i === 0 && isPrime(i)) {
            return i;
        }
    }
}

function isPrime(number) {
    if(number % 2 === 0 && number !== 2) return false;

    for(let i = 3; i < Math.sqrt(number); i+=2) {
        if(number % i === 0) {
            return false;
        }
    }

    return false;
}

console.log(largestPrimeFactor(13195));