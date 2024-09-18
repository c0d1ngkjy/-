function solution(s){
    const arr = s.split('')
    
    if(arr[0] === ')') {
        return false;
    } 
    else {
        let count = 0;
        
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === ')' && count === 0) {
                return false;
            } 
            else {
                if(arr[i] === '(') {
                    count++;        
                } 
                else {
                    count--;
                }    
            }
        }
        if(count === 0)  {
            return true
        } 
        else {
            return false
        }         
    }    
}
