
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
    } else{
        prezzo = somma;
    }

    var prezzoFinale = prezzo.toFixed (2);
    console.log(prezzoFinale);

    document.getElementById('nomepasseggiero').innerHTML = nome;

    document.getElementById('offerta').innerHTML = 'sconto ' + eta;

    var randomCarozza = Math.floor(Math.random() * )
})