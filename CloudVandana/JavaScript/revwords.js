function reverse() {
    let sentence="This is a sunny day"
    let words = sentence.split(" ")
    let rev = String()
    for(let i = 0; i < words.length; i++) {
        for(let j = words[i].length - 1; j >= 0; j--) {
            rev += words[i][j]
        }
        rev += " "
    }
    console.log(rev)
}

reverse()