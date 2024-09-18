function solution(operations) {
    let que = [];
    for(op of operations) {
        if(op.slice(0,1) === 'I') {
            que.push(parseInt(op.slice(2)));
            //console.log(que);
        } else if (op.slice(0,1) === 'D') {
            if(parseInt(op.slice(-2)) === 1) {
                que.splice(que.indexOf(findMx(que)), 1);
                //console.log(que);
            } else {
                que.splice(que.indexOf(findMn(que)), 1);
                //console.log(que);
            }
        }
    }
    
    if(!que.length) {
        return [0,0];
    } else {
        return [findMx(que), findMn(que)];    
    }
}

function findMx(q) {
    let max = q[0];
    for(let i = 0; i < q.length; i++) {
        max = parseInt(q[i]) >= max ? parseInt(q[i]) : max;
    }   
    return max;
}
function findMn(q) {
    let min = q[0]
    for(let j = 0; j < q.length; j++) {
        min = parseInt(q[j]) <= min ? parseInt(q[j]) : min;
    }
    return min;
}
