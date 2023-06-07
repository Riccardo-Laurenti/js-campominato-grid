/* 

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.

#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!

# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Note:
- questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle ;)
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/



// Prendo elementi dal dom
const btnPlayed = document.querySelector('.play');
const difficult = document.getElementById('difficult');
const flexGrid = document.querySelector('.flex-grid');

btnPlayed.addEventListener('click', () => {
        // reset content
        flexGrid.innerHTML = '';

        
        const gridDimension = difficult.value;
        let cellsNumber;
        let cellsPerSide;

        switch (gridDimension) {
            case '1':
                cellsNumber = 100;
                cellsPerSide = 10;
                break;
            case '2':
                cellsNumber = 81;
                cellsPerSide = 9;
                break;
            case '3':
                cellsNumber = 49;
                cellsPerSide = 7;
        }

        
        const grid = document.createElement('div');
        grid.classList.add('grid');

        //  ciclo for
        for (let i = 1; i <= cellsNumber; i++) {
            
            const square = createGridSquare (i, cellsPerSide);

            square.addEventListener('click', 
                function () {
                    this.classList.add('clicked');
                }
            );
                        
            
            grid.append(square);
        }

         
         flexGrid.append(grid);
    }
);

/*
    ----- FUNZIONE --------
*/


function createGridSquare (num, cells) {
    //creo nodo square
    const node = document.createElement('div');
    node.classList.add('square');
    node.style.width = `calc(100% / ${cells})`;
    node.style.height = `calc(100% / ${cells})`;

    // Nodo span text
    const span = document.createElement('span');
    span.append(num);

    //aggiungo a square il contenuto span
    node.append(span);

    return node;
}




