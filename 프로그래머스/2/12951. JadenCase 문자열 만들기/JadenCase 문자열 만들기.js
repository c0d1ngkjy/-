function solution(s) {
    const splitS = s.split(' ');
    let newArr = [];
    for(let i = 0; i < splitS.length; i++) {
        newArr[i] = splitS[i].toLowerCase();
        newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
    }
    
    return newArr.join(' ');
}