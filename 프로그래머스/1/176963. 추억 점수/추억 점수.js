function solution(name, yearning, photo) {
    var answer = [];
    const photos = photo
    for(const photo of photos) {
        let total = 0;
        for(const person of photo) {
            console.log(person)
            console.log(name.indexOf(person))
            if(name.indexOf(person) != -1) {
                total += yearning[name.indexOf(person)]
            }
        }
        console.log("-----")
        answer.push(total)
    }
    return answer;
}