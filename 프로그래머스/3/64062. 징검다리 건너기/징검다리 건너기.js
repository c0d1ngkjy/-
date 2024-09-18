function solution(stones, k) {
    let left = 1;
    let right = 200000000;

    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        let count = 0;
        let maxCount = 0;
        
        for (let i = 0; i < stones.length; i++) {
            if (stones[i] < mid) {
                count++;
            } else {
                count = 0;
            }
            
            maxCount = Math.max(maxCount, count);
            
            if (maxCount >= k) 
                break;
        }

        if (maxCount >= k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left - 1;
}