def solution(s):
    s = list(s)
    flag = 0
    for idx, c in enumerate(s):
        if c == ' ':
            flag = 0
        elif flag % 2 == 0:
            s[idx] = c.upper()
            flag+=1
        else:
            s[idx] = c.lower()
            flag+=1
    return ''.join(s)
    