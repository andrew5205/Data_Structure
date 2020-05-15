function fib(n) {
    if ( n < 2) return n;
    return fib(n-2) + fib(n-1);
}

console.log(fib(6));


// function fib(n) {
//     if ( n<2) {
//         return n;
//     } else {
//         return fib(n-2) + fib(n-1);
//     }
// }


// 0, 1, 1, 2, 3, 5, 8, 13 