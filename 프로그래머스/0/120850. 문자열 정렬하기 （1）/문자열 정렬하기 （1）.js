function solution(my_string) {
    let arr = my_string.match(/\d/g);
    return arr.sort((a,b)=>a-b).map((n)=>parseInt(n))
}