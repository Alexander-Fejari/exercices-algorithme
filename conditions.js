//Exercices 1
// Cinema tarifs
function cinema(a) {
    if (a > 18) {
        return 'vous êtes adultes, le prix est de 10€'
    } else {
        return 'vous êtes pas majeure, le prix est réduit à 8€'
    }

}

console.log('Cinema tarif: ' + cinema(10))

//Exercices 2
// find maximum
function findMaximum(a, b, c) {
    return Math.max(a, b, c);
}

console.log('find max: ' + findMaximum(18, 23, 69));

//Exercices 3
// identicalDice
function identicalDice() {
    //génération des 3 dés et nombre random
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice3 = Math.floor(Math.random() * 6) + 1;

    // stockages des valeurs des 3 dès
    let dicesValues = [dice1, dice2, dice3];
    console.log('résultat des dès: ' + dice1 + ' : ' + dice2 + ' : ' + dice3)


    // Comptage du nombre de dés ayant des valeurs identiques
    const countMap = new Map();

    for (const value of dicesValues) {
        if (countMap.has(value)) {
            countMap.set(value, countMap.get(value) + 1);
        } else {
            countMap.set(value, 1);
        }
    }

    const identicalCounts = Array.from(countMap.values());

    // Détermination du résultat
    if (identicalCounts.includes(3)) {
        return "Trois dés ont des valeurs identiques!";
    } else if (identicalCounts.includes(2)) {
        return "Deux dés ont des valeurs identiques.";
    } else {
        return "Aucun dé n'a de valeur identique.";
    }
}

console.log(identicalDice());

//Exercices 4
// day's number
function getDays(d) {
    const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    if (d >= 1 && d <= 7) {
        return `Le jour correspondant au numéro ${d} est ${days[d - 1]}`;
    } else {
        return "Numéro de jour non valide";
    }
}

console.log(getDays(3));

//Exercices 5
// print shop
function calcPriceCopy(c) {
    if (c >= 10 && c <= 29) {
        return c * 0.11
    } else if (c >= 30) {
        return c * 0.10
    } else {
        return c * 0.12
    }
}

console.log('le prix des copies est de: ' + calcPriceCopy(30) + '€')