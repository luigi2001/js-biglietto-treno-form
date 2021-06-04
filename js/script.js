
var invia = document.getElementById('btn_invia');

var annulla = document.getElementById('btn_annulla');

invia.addEventListener('click', function() {

    document.getElementById('biglietto').className = 'show';

    /* input */

    var nome = document.getElementById('nome_cognome').value;
    console.log(nome);

    var km = document.getElementById('Km').value;
    console.log(km);

    var eta = document.getElementById('eta').value;
    console.log(eta);

    /* calcolo prezzo biglietto */

    var somma = 0.21 * km;

    var scontoMi = somma * 20 / 100;

    var scontoMa = somma * 40 / 100;

    var prezzo;

    if (eta == 'minorenne'){
        prezzo = somma - scontoMi;
    } else if (eta == 'under65'){
        prezzo = somma - scontoMa;
    } else if(eta == 'maggiorenne')  {
        prezzo = somma;
    }else{
        alert('compila il campo fascia età');
    }

    var prezzoFinale = prezzo.toFixed (2);
    console.log(prezzoFinale);

    document.getElementById('nomepasseggiero').innerHTML = nome;

    document.getElementById('offerta').innerHTML = 'sconto ' + eta;

    var randomCarozza = Math.floor(Math.random() * 8) + 1;
    console.log(randomCarozza);

    var randomCp = Math.floor(Math.random() * 10000) + 90000;
    console.log(randomCp);

    document.getElementById('carozza').innerHTML = randomCarozza;

    document.getElementById('codice').innerHTML = randomCp;

    document.getElementById('costo').innerHTML = prezzoFinale + ' Euro';

})

annulla.addEventListener('click', function(){

    document.getElementById('biglietto').className = 'hidden';

    var nome = document.getElementById('nome_cognome').value = ' ';

    var km = document.getElementById('Km').value = ' ';

    var eta = document.getElementById('eta').value = ' ';

})