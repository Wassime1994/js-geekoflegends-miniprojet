import Boss from './boss.js'
import {
    Archer,
    Guerrier,
    Sage
} from './heros.js'

let sauron = new Boss('Sauron', 100, "", "vivant")
let chronos = new Boss('Chronos', 100, 0, "vivant")
let lilith = new Boss('Lilith', 100, 0, "vivant")
export let boss = [sauron, chronos, lilith]
let choixBoss = boss[Math.floor(Math.random() * 3)]

let gohan = new Guerrier('Gohan', 500, 0, 0, "vivant")
let tortue = new Sage('Tortue Genial', 500, 0, "", "vivant")
let tapion = new Archer('Tapion', 500, 0, "vivant")
let heros = [tortue, tapion, gohan]

export let enigme = ['1x3', '25X3', '2X33']
export let enigmeRandom = enigme[Math.floor(Math.random() * 3)]
let mort = []

// alert('Bienvenu sur Mortal GEEK !')
// confirm("Êtes vous pret au combat ?")
let questionBoss ; 
let question ; 
alert('Le monstre choisis est   ' + choixBoss.nom)


while(choixBoss.etat == "vivant" && heros.length > 0) {

    if (choixBoss.pointVie > 0) {
         questionBoss = prompt(choixBoss.nom + "  attaque ou se defend ?").toUpperCase()
        if (questionBoss == "ATTAQUE") {
            choixBoss.attaque(heros[Math.floor(Math.random() * 3)])
        } 
        else if (questionBoss == "DEFENSE") {
            // heros.forEach(element => {
            //     choixBoss.defense(element)
            // });
            choixBoss.defense(heros[Math.floor(Math.random() * 3)])
        }
    }


    if (heros[0].pointVie > 0) {
        question = prompt(heros[0].nom + " attaque ou se defend ?").toUpperCase()
        if (question == "ATTAQUE") {
            heros[0].attaque(choixBoss)
        } 
        else if (question == "DEFENSE") {
            heros[0].defense(choixBoss)
        }
    } 
    else if (heros[0].pointVie < 0) {
        // heros.slice(heros.indexOf(tortue), 1)
        mort.push(tortue)
        heros.shift()
    }

    if (heros[1].pointVie > 0) {
         question = prompt(heros[1].nom + " attaque ou se defend ?").toUpperCase()
        if (question == "ATTAQUE") {
            heros[1].attaque(choixBoss)
        } else if (question == "DEFENSE") {
            heros[1].defense(choixBoss)
        }
    } 
    else if (heros[1].pointVie <= 0) {
        mort.push(tapion)
        heros.slice(heros.indexOf(tapion), 1)

    }

    if (heros[2].pointVie>0) {
        question = prompt(heros[2].nom + " attaque ou se defend ?").toUpperCase()
        if (question == "ATTAQUE" && heros[2].pointVie > 0) {
            heros[2].attaque(choixBoss)
        } else if (question == "DEFENSE" && heros[2].pointVie > 0) {
            heros[2].defense(choixBoss)
        }

    } 
    else if (heros[2].pointVie <= 0) {
        mort.push(gohan)
        heros.pop()


    }
    gohan.pointRage+=1
 
}

console.log("Les morts : " , mort)
console.log("Tableau de mes heros : " , heros)
console.log(choixBoss.etat)


// A FAIRE , CHANGER ATTAQUE DE 10 POINT PAR UNE VARIABLE
// AFIN DE POUVOIR LA MODIFIER POUR L ARCHER 
// CREER UNE INTERACTION ENTRE DEFENSE ET ATTAQUE POUR CHOISIR
// CREER UN RANDOM POUR LANCER LE JEU
// CREER UN MOYEN DE RANDOM POUR QUE LE BOSS ATTAUQE HACUN
//  A SON TOUR PAR UNE BOUCLE OU AUTRE 


// 419 LIGNES DE CODE POUR AUJOURD HUI ET 8H DE CODE AUJOURD HUI