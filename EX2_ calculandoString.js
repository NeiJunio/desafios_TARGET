function contarLetraA(texto) {
    
    const textoLower = texto.toLowerCase(); // Converte o texto para minúsculas para contar 'a' e 'A' juntos
    
    let quantidade = 0;
    for (let i = 0; i < textoLower.length; i++) {
        if (textoLower[i] === 'a') {
            quantidade++;
        }
    }
    
    if (quantidade > 0) {
        console.log(`A letra 'a' (maiúscula ou minúscula) foi encontrada ${quantidade} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}


const textoUsuario = 'testando a contagem dA letra a';
contarLetraA(textoUsuario);


//RETORNO NO CONSOLE: A letra 'a' (maiúscula ou minúscula) foi encontrada 6 vez(es) na string.
