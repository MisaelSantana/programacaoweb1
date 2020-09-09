function calcularimc (peso, altura) {
    const imc = peso / (altura * altura);
    if (imc <= 18.5) {
        return 'Você está magro';
    }
    else if (imc > 18.5 && imc <= 24.9)
    return 'Você está na taxa normal'
    
    else if (imc > 25 && imc <= 29.9)
    return 'Você está na taxa sobrepeso I'

    else if (imc > 30 && imc <= 39.9)
    return 'Você está na taxa sobrepeso II'
}

calcularimc (70, 1.90)
calcularimc (55, 1.50)
calcularimc (130, 2.10)
