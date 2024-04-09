function fib(n) {
    const array = []
    let Num1 = 1
    let Num2 = -1

    let ans;
    for (i = 0; i <= n; i++) {
        ans = Num2 + Num1;
        Num2 = Num1;
        Num1 = ans;
        array.push(Num1)
    }
    array.shift()
    return array;
}

console.log(fib(7))
