function solution(lottos, win_nums) {
    const rankArr = [6, 6, 5, 4, 3, 2, 1]

    let zeroC = lottos.filter(num => num === 0).length
    let matchC = lottos.filter(num => win_nums.includes(num)).length;
    
    let maxRank = rankArr[matchC + zeroC];
    let minRank = rankArr[matchC];

    return [maxRank, minRank];
}