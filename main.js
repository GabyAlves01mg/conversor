document.getElementById('conversor-Form').addEventListener('submit', function(event){
 
    event.preventDefault();
 
    // Obtem valores de no formulário    
    const valor = parseFloat(document.getElementById('valor').value);
    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const moedaDestino = document.getElementById('moedaDestino').value;
 
//definir taxa de canbio fixa
    const exchangeRates = {
        USD: {EUR: 0.93, BRL: 5.71 },
        BRL: {EUR: 0.16, USD: 0.18 },
        EUR: {USD: 1.08, BRL: 6.16 }
    };
 
    if (moedaOrigem === moedaDestino){
        valorConvertido = valor;
    } else{
        valorConvertido = valor * exchangeRates[moedaOrigem][moedaDestino];
    }
 
    let conversao = document.getElementById('conversao');
    conversao.textContent = `resultado ${valorConvertido.toFixed(2)} ${moedaDestino}`;
   
});