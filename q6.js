let verifyWord = (word) => {
    let wordReverse = word.split('').reverse().toString()
    for(let i = 0; i<=word.split('').length;i++){
            if(word.charAt(i).toLowerCase() === wordReverse.charAt(i).toLowerCase()){
                console.log(`A palavra "${word}" é um palindromo, palavra trocada "${wordReverse.replace(/,/g,'')}"`)
                break
            }
            else{
                console.log(`A palavra "${word}" não é um palindromo, palavra trocada "${wordReverse.replace(/,/g,'')}"`)
                break
            }
    }
}

verifyWord('Ana')
verifyWord('Amor a Roma')
verifyWord('Ame o poema')

verifyWord('Computador')
verifyWord('Abacaxi')
verifyWord('Casa')