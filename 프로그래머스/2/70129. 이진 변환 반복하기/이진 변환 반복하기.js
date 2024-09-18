function solution(s) {
    var answer = [0,0];
    sArr = s.split('')
    while(sArr.join('') != '1') {
        let zcnt = 0
        sArr.forEach((i,idx)=> {
            if(i==0) {
                zcnt++
            }
        })
        sArr = sArr.filter((n)=>n == 1)
        console.log(sArr.length)
        answer[1]+=zcnt
        sArr = decToBin(sArr.length).split('')
        answer[0]++
    }
    return answer;
}
const decToBin = dec => dec.toString(2);
