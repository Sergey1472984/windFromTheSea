const windFromTheSea =
    `Ветер с моря дул, ветер с моря дул
    Нагонял беду, нагонял беду
    И сказал ты мне, и сказал ты мне
    Больше не приду, больше не приду

    Видно не судьба, видно не судьба
    Видно нет любви, видно нет любви
    Видно надо мной, видно надо мной
    Посмеялся ты, посмеялся ты

    Я тебя люблю, я тебя люблю
    Честно говорю, честно говорю
    Ведь ты знаешь сам, ведь ты знаешь сам
    Как тебя я жду, как тебя я жду

    Видно не судьба, видно не судьба
    Видно нет любви, видно нет любви
    Видно надо мной, видно надо мной
    Посмеялся ты, посмеялся ты`

function getWordsFromStr(str){
    str = str.toLowerCase()
    str = str.replace(/,/g , "")
    str = str.replace(/\n/g, "")
    str = str.replace(/  /g , " ")
    str = str.replace(/  /g , " ")
    str = str.split(" ")
    return str
}
function countWords(str, getWordsFromStr){
    const windFromTheSeaArr = getWordsFromStr(windFromTheSea)
    const windFromTheSeaSet = new Set(windFromTheSeaArr)
    const countedWords = {}
    for (word of windFromTheSeaArr){
        if (word in countedWords){
            countedWords[word] +=1
        }else{
            countedWords[word] = 1
        }
    }
    return countedWords
}
function getInfo(getWordsFromStr){
    let persons = []
    let i = 0
    let sumAge = 0
    let jumps = 0
    while (true){
        str = prompt('Петр, 50, Витебск, 24')
        if (str === null) break
        str = getWordsFromStr(str)
        sumAge += +str[1]
        jumps += +str[3]
        persons.push([Symbol(str[0]),{name : str[0],age : str[1],city : str[2],jumps : str[3]}])
        i++
    }
    console.log(`Средний возраст: ${sumAge/i}\nКоличество прыжков: ${jumps}`)
    return new Map(persons)
}
console.log(getInfo(getWordsFromStr))


