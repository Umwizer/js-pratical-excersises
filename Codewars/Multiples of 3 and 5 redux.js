function solution(number) {
    if (number < 1) return 0; 

    function sumDivisibleBy(x) {
        let p = Math.floor((number - 1) / x);
        return x * (p * (p + 1)) / 2;
    }

    return sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15);
}
