function solution(str, a, b) {
    str = str.split('')
    const tmp = str[a]
    str[a] = str[b]
    str[b] = tmp

    return str.join('')
}