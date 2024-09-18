function solution(n, k, enemy) {
    let heap = [];

    if (k >= enemy.length) 
        return enemy.length;

    for (let i = 0; i < enemy.length; i++) {
        insert(heap, enemy[i]);
        if (heap.length > k) {
            let min = extractMin(heap);
            if (min > n) 
                return i;
            n -= min;
        }
    }
    return enemy.length;
}

function insert(heap, value) {
    heap.push(value);
    bubbleUp(heap);
}
function bubbleUp(heap) {
    let index = heap.length - 1;
    while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2)
        if (heap[parentIndex] > heap[index]) {
            [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
            index = parentIndex;
        } else {
            break;
        }
    }
}
function extractMin(heap) {
    const min = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
        heap[0] = last;
        sinkDown(heap, 0);
    }
    return min;
}
function sinkDown(heap, index) {
    let smallest = index;
    const left = 2 * index + 1
    const right = 2 * index + 2

    if (left < heap.length && heap[left] < heap[smallest]) {
        smallest = left;
    }
    if (right < heap.length && heap[right] < heap[smallest]) {
        smallest = right
    }
    if (smallest !== index) {
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        sinkDown(heap, smallest);
    }
}
