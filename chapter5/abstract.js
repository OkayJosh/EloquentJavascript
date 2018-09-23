function greaterThan(n){
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

console.log(greaterThan(10)(11));

function noisy(f){
    return (...args)=>{
        console.log('calling with', args);
        let result = f(...args);
        console.log('calling with ', args, 'returned', result);
    }
}

noisy(Math.max)(3,4,7);