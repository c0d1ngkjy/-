function solution(want, number, discount) {
    let answer = 0
    let parsedArr = {}
    for (let i = 0; i < want.length; i++) {
        parsedArr[want[i]] = number[i];
    }
    //console.log(target)
    for (let i = 0; i <= discount.length - 10; i++) {
        let window = {};
        for (let j = 0; j < 10; j++) {
            window[discount[i + j]] = (window[discount[i + j]] || 0) + 1
        }
        
        let matchB = true;
        for (let item of want) {
            if ((window[item] || 0) < parsedArr[item]) {
                matchB = false
                break;
            }
        }
        
        if (matchB) 
            answer++
    }
    return answer;
}