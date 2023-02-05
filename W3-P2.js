/*Il tuo compito è creare un sito e-commerce per Smartphones. L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. Non sono richieste funzionalità di carrello/cassa.*/

/*Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML:*/

/*okES.1: Inserisci un tag h1 con il nome del tuo negozio*/

/*okES.2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio*/

/*okES.3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo*/

/*okES.4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente*/

/*okES.5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio*/

/*okES.6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire essuna "vera" funzionalità di post/salvataggio!)*/

/*Il resto delle risposte deve essere scritto in JavaScript:*/

/*ES.7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro*/

/*const titleH1 = document.getElementById("title");
title.innerText = "cicciobello";*/

const changeTitle = function (cicciobello) {
    const title = document.querySelector('h1');
    // selezionato l'elemento h1 usando il query selector che dopo assegna una costante a h1
    title.innerText = "cicciobello";
}
changeTitle('Questo è il nuovo titolo');
//chiama la funzione e passa la riga del nuovo h1

/*ES.8: Scrivi una funzione per cambiare il colore di background della pagina*/

const paintItRed = function () {
    const bgColor = document.querySelectorAll('body');
    for (let body of body) {
        body.style.backgroundColor = "red";
    }

}
paintItRed();

/*ES.9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio*/

/*ES.10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella ciclo for*/

document.body.classList.add('a');

/*ES.11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine*/

document.body.classList.remove('a');

/*ES.12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata*/
