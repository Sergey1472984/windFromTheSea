const dataTypes = [
    true,
    's',
    0,
    null,
    undefined,
    {},
    [],
    0n,
    Symbol(),
    () => {},
]
   
function ElemInfo(elem){
    this.value = elem
    this.type = typeof elem
    this.number = this.type === 'symbol' ? '--' : Number(elem)
    this.string = String(elem)
    this.boolean = Boolean(elem)
}

const dataTypesMap = new Map()

dataTypesMap.forEach((val, key) => console.log(key, ":", val) )

///////////////////////////////////////////////////////////////////////////////////////////////////

function getWordsFromStr(str){
    str = str.toLowerCase()
    str = str.replaceAll('`', '').replaceAll(',', '').replaceAll('\n', '')
    while(str.includes('  ')){
        str = str.replaceAll('  ', ' ')
    }
    return str.trim().split(' ')
}

function countWords(str, getWordsFromStr){
    const strArr = getWordsFromStr(str)
    const strSet = new Set(strArr)
    const countedWords = {}
    for (word of strArr) word in countedWords ? countedWords[word]++ : countedWords[word] = 1
    return countedWords
}


document.getElementById('count').addEventListener('click', () => {
    let text = document.querySelector('textarea').value
    const countedWords = countWords(text, getWordsFromStr)
    for (word in countedWords){
        document.querySelector('table').innerHTML += `<tr><td>${word}</td><td>${countedWords[word]}</td></tr>`
    }
})

