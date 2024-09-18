function solution(s) {
    var answer = '';
    let sa = s.split(' ');
    const max = Math.max(...sa);
    const min = Math.min(...sa);
    answer = min + ' ' + max
    return answer;
}