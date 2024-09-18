def solution(arr, k):
    ans = []
    
    for n in arr:
        if n in ans:
            continue
        else:
            ans.append(n)
    if(len(ans) < k) :
        for i in range(k-len(ans)):
            ans.append(-1)
    return ans[:k]
    