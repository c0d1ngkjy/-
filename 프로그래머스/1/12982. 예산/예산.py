def solution(d, budget):
    answer = 0
    d.sort()
    print(d)
    for n in d:
        if(budget >= n):
            answer += 1
            budget -= n
        else:
            break
    return answer
