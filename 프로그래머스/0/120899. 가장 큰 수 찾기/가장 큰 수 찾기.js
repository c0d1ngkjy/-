function solution(arr) {
    const maxN = Math.max(...arr)
    return [maxN, arr.indexOf(maxN)]
}