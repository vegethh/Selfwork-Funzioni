function giocoDadi() {
    let numeroTiri = Number(prompt("Quanti tiri devono fare i giocatori?"));

    let punteggioGiocatore1 = 0;
    let punteggioGiocatore2 = 0;

    for (let i = 0; i < numeroTiri; i++) {
        // Tiro giocatore 1
        let tiro1 = Math.floor(Math.random() * (6 + 1 - 1) + 1);
        punteggioGiocatore1 = punteggioGiocatore1 + tiro1;

        // Tiro giocatore 2
        let tiro2 = Math.floor(Math.random() * (6 + 1 - 1) + 1);
        punteggioGiocatore2 = punteggioGiocatore2 + tiro2;
    }

    // Confronto punteggi
    if (punteggioGiocatore1 > punteggioGiocatore2) {
        console.log("Ha vinto il Giocatore 1 con " + punteggioGiocatore1 + " punti");
    } else if (punteggioGiocatore2 > punteggioGiocatore1) {
        console.log("Ha vinto il Giocatore 2 con " + punteggioGiocatore2 + " punti");
    } else {
        console.log("Pareggio! Entrambi hanno " + punteggioGiocatore1 + " punti");
    }
}

// Avvio del gioco
giocoDadi();