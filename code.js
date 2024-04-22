function fib(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    let fibArray = [0, 1];
    function helper(i) {
        if (i === n) return;
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        helper(i + 1);
    }
    helper(2);
    return fibArray;
}
