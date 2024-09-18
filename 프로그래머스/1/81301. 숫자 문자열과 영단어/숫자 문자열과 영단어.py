def solution(s):
    dict = {0:'zero', 1:'one', 2:'two',3:'three',4:'four',5:'five',6:'six',
           7:'seven',8:'eight',9:'nine'}
    
    for num , alpha in dict.items():
        if s.find(alpha) != -1:
            s = s.replace(alpha, str(num))
            
    return int(s)
        
    