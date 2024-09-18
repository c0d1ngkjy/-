function solution(n, m) {
    return [gcd(n,m), lcm(n,m)];
}

function gcd(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}