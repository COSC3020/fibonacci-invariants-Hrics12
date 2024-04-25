function fib(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    let fibArray = [0, 1];
    addFibNumbers(2);
    function addFibNumbers(i) {
        if (i > n) return;
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        addFibNumbers(i + 1);
    }
    return fibArray[fibArray.length -1];
}
