function solution(s, n) {
    return s.split('').map(c => {
        if (c === ' ') {
            return ' '
        } else {
            const ascii = c.charCodeAt(0);
            const base = (ascii >= 65 && ascii <= 90) ? 65 : 97
            return String.fromCharCode(((ascii - base + n) % 26) + base)
        }
    }).join('');
}