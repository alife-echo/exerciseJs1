let replacePhrase = (phrase) => {
    let replace  = phrase.replace(/a/g,'e')
    console.log(`Frase manipulada:${replace}`)
    return replace
}

replacePhrase('Quem tem luz própria jamais ficará na escuridão.')