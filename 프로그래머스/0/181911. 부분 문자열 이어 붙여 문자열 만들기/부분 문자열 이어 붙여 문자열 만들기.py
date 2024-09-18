def solution(strs, arr):
    answer = ''
    
    d = dict(zip(strs, arr))    
    for word, range in d.items():
        answer += word[range[0] : range[1]+1]
        
    return answer