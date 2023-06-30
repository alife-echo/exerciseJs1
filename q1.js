let calculateImc = (peso,altura) =>{
    let imc = peso / Math.pow(altura,2)
    console.log(`Para o peso ${peso}kg e Altura ${altura.toFixed(2)}m, o imc é:${imc.toFixed(2)}Kg/m2`)
    return imc
} 
calculateImc(59.5,1.80)