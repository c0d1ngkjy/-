function solution(a, b, n) {
    let ans = 0;
    while(n >= a) {
        ans += parseInt(n / a) * b;
        n = parseInt(n / a) * b + n % a;
    }
 
    return ans;
}