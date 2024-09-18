def solution(t, p):
    ssl = []
    arr = []
    for i in range(len(t)):
        part = t[i:i+len(p)]
        if len(part) < len(p):
            continue
        else:
            ssl.append(t[i:i+len(p)])
            
    for e in ssl:
        if int(e) <= int(p):
            arr.append(e)
            
    return len(arr)