// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the 
// following form :
//  "(p1**n1)(p2**n2)...(pk**nk)"

// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

const isPrime = (n) => {
    for(let i = 2; i < Math.sqrt(n); i++){
        if(n % i === 0) return false
    }

    return true
}

const primeFactors = (n) => {
    let str = ""
    while(n > 1){
        for(let i = 2; i <= n; i++){
            let count = 0
            if(n % i === 0 && isPrime(i)){
                while(n % i === 0 ){
                    n = n / i
                    count++
                }
                str += `${count > 1 ? `(${i}**${count})` : `(${i})`}`
            }else{
                continue
            }
        }
    }
    return str
}

primeFactors(86240)