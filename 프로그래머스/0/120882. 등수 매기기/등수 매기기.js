function solution(score) {
    const avg = score.map(i => (i[0] + i[1]) / 2);
    return avg.map(i => [...avg].sort((a, b) => b - a).indexOf(i) + 1);
}
