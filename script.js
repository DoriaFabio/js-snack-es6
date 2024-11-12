"use strict";
console.clear();
// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    {
        nome: "Graziella",
        peso: 19
    },
    {
        nome: "Focus",
        peso: 20
    },
    {
        nome: "Pinarello",
        peso: 17
    },
    {
        nome: "BMC",
        peso: 22
    }
];
let biciLeggera = bici[0];
for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}
console.log(biciLeggera);

// Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeam = [
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < footballTeam.length; i++) {
    footballTeam[i].puntiFatti = random(1, 100);
    footballTeam[i].falliSubiti = random(1, 50);
}
console.log(footballTeam);

const newArray = footballTeam.map(Team => ({
    nome: Team.nome,
    falliSubiti: Team.falliSubiti
  }));
  
  console.log(newArray);
// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.