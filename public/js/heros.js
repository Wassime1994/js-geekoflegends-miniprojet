import {
    boss,
    enigme,
    enigmeRandom
} from "./main.js";
let tab_mana = [7, 9, 11]
let point = tab_mana[Math.floor(Math.random() * 3)]
let nbr_fleche = [7, 8, 9, 10, 11]
let point_fleche = nbr_fleche[Math.floor(Math.random()*5)]
let attaque_value = 5

export class Guerrier {
    constructor(nom, pointVie, pointAttaque, pointRage, etat) {
        if (this.pointVie <= 0) {
            alert(this.nom, " est mort ! Aucun attaque ou defense possible.")
            this.etat = "mort"
        }
        this.nom = nom
        this.pointVie = pointVie
        this.pointAttaque = pointAttaque
        this.pointRage = pointRage
        this.etat = etat

        this.attaque = (a) => {
            if (this.pointVie>0) {
                // attaque_value*=1.4
                // this.pointVie *=0,75
                this.pointRage += 1
                a.pointVie -= attaque_value
                console.log(this.nom, "attaque", a.nom, "... ", a.nom, "perd 10 point de vie . Santé de ", a.nom, a.pointVie)
                console.log("Point de rage suplémentaire  :  " , this.pointRage )
                if(this.pointRage==4) {
                    console.log('4 point rage ! Augmentation de la puissance !')
                    a.pointVie-=(attaque_value*1.25)
                    this.pointRage=0
                }

             for (let index = 0; index < 1; index++) {
                
                const element = boss[index];
                    if (a.pointVie <= element.pointVie / 5) {
                        let question = prompt("Voici mon enigme jeune aventurier . Resolvez ce calcul" + enigmeRandom)

                        if (enigmeRandom == enigme[0]) {
                            if (question !== "3") {
                                alert('raté, encore 2 chances .')
                                question = prompt("Deuxième chance .. " + enigmeRandom)
                                if (question !== "3") {
                                    alert('raté, ultime chance . ')
                                }
                                question = prompt("Concentrez vous  ... " + enigmeRandom)
                                if (question !== "3") {
                                    console.error('C etait votre derniere chance , adieu . ' + this.nom + "  est mort")
                                    this.pointVie = 0
                                    return this.etat = "mort"
                                }

                            } else {
                                a.pointVie = 0
                                console.warn(a.nom, "est mort ! Bravo a ", this.nom)
                                a.etat="mort"

                            }
                        }
                        if (enigmeRandom == enigme[1]) {
                            if (question !== "75") {
                                alert("Raté, vous avez encore 2 chances ")
                                question = prompt(enigmeRandom)
                                if (question !== "3") {
                                    alert('raté,  attention encore une chance ! Concentrez vous !!  ')
                                }
                                question = prompt(enigmeRandom)
                                if (question !== "3") {

                                    console.error('C etait votre derniere chance , adieu . ' + this.nom + "  est mort")
                                    this.pointVie = 0
                                    return this.etat = "mort"

                                }

                            } else {
                                a.pointVie = 0
                                console.warn(a.nom, "est mort ! Bravo a ", this.nom)
                                a.etat = "mort"
                            }
                        }
                        if (enigmeRandom == enigme[2]) {
                            if (question !== "66") {
                                (console.log('raté, encore deux chances .'))
                                question = prompt(enigmeRandom)
                                if (question !== "3") {
                                    (console.log('raté, derniere chance !! '))
                                }
                                question = prompt(enigmeRandom)
                                if (question !== "3") {
                                    console.error('C etait votre derniere chance , adieu . ' + this.nom + "  est mort")
                                    this.pointVie = 0
                                    return this.etat = "mort"
                                }
                            } else {
                                a.pointVie = 0
                                console.warn(a.nom, "est mort ! Bravo a ", this.nom)
                                a.etat = "mort"

                            }
                        }

                    }
           
                   
                  }
            


            } 
            else if  (this.etat<=0) {
                console.warn('Impossible d attaquer , vous êtes mort ! ')
                this.etat="mort"

            }
            this.defense = (a) => {
                this.pointRage += 1
                // this.attaque*= 0.5
                // this.defense = a.defense *2.5
                this.pointVie += 5
                console.log(this.nom, "s'est protégé et a récupéré 5 point !")


            }
        }
        this.defense = () =>{
            // attaque_value*=0,5
        
            if(this.pointRage==4) {
                console.log('4 point rage ! Augmentation de la puissance !')
                // a.pointVie-=(10*1.25)
                this.pointRage=0
            }
            // this.pointVie*=2.5
            console.log(this.nom + "utilise sa defense ! Il ne perd que la moitié de ses PV"   , this.pointVie)
        
 } }
}



export class Sage {
    constructor(nom, pointVie, pointAttaque, pointMana, etat) {
        if (this.pointVie <= 0) {
            alert(this.nom, " est mort ! Aucun attaque ou defense possible.")
            this.etat = "mort"
        }
        this.nom = nom
        this.pointVie = pointVie
        this.pointAttaque = pointAttaque
        this.pointMana = point
        this.etat = etat
        this.defense = (a) => {
            this.pointVie += 5
            console.log(this.nom, "s'est protégé et a récupéré 5 point !")
            // a.attaque *= 0.5
            //  a.defense *= 2.5
        }


        this.attaque = (a) => {
            if (this.etat == "mort") {
                console.warn('vous êtes mort impossible d attaquer')
            }
             else if (this.etat == "vivant") {
                if (this.pointMana > 2) {
                    this.pointMana -= 2
                    a.pointVie -= attaque_value
                    // attaque_value*=1.4
                    // this.pointVie *=0,75
                    return console.log(this.nom, "attaque", a.nom, "... ", a.nom, "perd 10 point de vie . Santé de ", a.nom, a.pointVie, ".", this.nom, " a a present : ", this.pointMana, "point de mana")
                } else if (this.pointMana < 2) {
                    console.log(this.nom, 'na plus de point de mana il passe son tour .Aucun degats infligés à ', a.nom, "Bzzz Chargement ", this.nom, 'a a present : ', this.pointMana + 7, "point de mana")
                    this.pointMana += 7
                }

                for (let index = 0; index < 1; index++) {
                
                    const element = boss[index];
                        if (a.pointVie <= element.pointVie / 5) {
                            let question = prompt("Voici mon enigme jeune aventurier . Resolvez ce calcul" + enigmeRandom)
    
                            if (enigmeRandom == enigme[0]) {
                                if (question !== "3") {
                                    alert('raté, encore 2 chances .')
                                    question = prompt("Deuxième chance .. " + enigmeRandom)
                                    if (question !== "3") {
                                        alert('raté, ultime chance . ')
                                    }
                                    question = prompt("Concentrez vous  ... " + enigmeRandom)
                                    if (question !== "3") {
                                        console.error('C etait votre derniere chance , adieu . ' + this.nom + "  est mort")
                                        this.pointVie = 0
                                        return this.etat = "mort"
                                    }
    
                                } else {
                                    a.pointVie = 0
                                    console.warn(a.nom, "est mort ! Bravo a ", this.nom)
                                    a.etat="mort"
    
                                }
                            }
                            if (enigmeRandom == enigme[1]) {
                                if (question !== "75") {
                                    alert("Raté, vous avez encore 2 chances ")
                                    question = prompt(enigmeRandom)
                                    if (question !== "3") {
                                        alert('raté,  attention encore une chance ! Concentrez vous !!  ')
                                    }
                                    question = prompt(enigmeRandom)
                                    if (question !== "3") {
    
                                        console.error('C etait votre derniere chance , adieu . ' + this.nom + "  est mort")
                                        this.pointVie = 0
                                        return this.etat = "mort"
    
                                    }
    
                                } else {
                                    a.pointVie = 0
                                    console.warn(a.nom, "est mort ! Bravo a ", this.nom)
                                    a.etat = "mort"
                                }
                            }
                            if (enigmeRandom == enigme[2]) {
                                if (question !== "66") {
                                    (console.log('raté, encore deux chances .'))
                                    question = prompt(enigmeRandom)
                                    if (question !== "3") {
                                        (console.log('raté, derniere chance !! '))
                                    }
                                    question = prompt(enigmeRandom)
                                    if (question !== "3") {
                                        console.error('C etait votre derniere chance , adieu . ' + this.nom + "  est mort")
                                        this.pointVie = 0
                                        return this.etat = "mort"
                                    }
                                } else {
                                    a.pointVie = 0
                                    console.warn(a.nom, "est mort ! Bravo a ", this.nom)
                                    a.etat = "mort"
    
                                }
                            }
    
                        }
               
                       
                      }

                //  a.attaque *= 1.4
                //  a.pointVie -= 0.75


                this.defense = (a) => {
                    this.pointVie*=2.5
                    console.log(this.nom, "s'est protégé et a récupéré 5 point !")
                }
            }
        }
    }
}

export class Archer {
    constructor(nom, pointVie, pointAttaque, etat) {
        this.nom = nom
        this.pointVie = pointVie
        this.pointAttaque = pointAttaque
        this.etat = etat
        this.fleches = point_fleche
        this.attaque = (a) => {
           a.pointVie-=10
            if (this.pointVie <= 0 ) {
                console.warn('vous êtes mort impossible d attaquer ou se de defendre')
                this.etat ="mort"
            } 

            else if (this.pointVie > 0) {
                // attaque_value*=1.4
                // this.pointVie *=0,75
                this.fleches -= 2
                this.fleches += 1
                if(this.fleches==0){
                    console.log("Plus de fleches . " , this.nom , "passe son tour et recupère 6 fleches")
                    this.fleches+=6
                }
                console.log(this.nom, "attaque", a.nom, "... ", a.nom, "perd 10 point de vie . Santé de ", a.nom, a.pointVie)


                if (this.fleches < 2) {
                    console.log(this.nom, "n'a plus de fleches . Il passe son tour")
                    this.fleches += 6
                }
                a.pointVie -= attaque_value


                for (let index = 0; index < 1; index++) {
                
                    const element = boss[index];
                        if (a.pointVie <= element.pointVie / 5) {
                            let question = prompt("Voici mon enigme jeune aventurier . Resolvez ce calcul" + enigmeRandom)
    
                            if (enigmeRandom == enigme[0]) {
                                if (question !== "3") {
                                    alert('raté, encore 2 chances .')
                                    question = prompt("Deuxième chance .. " + enigmeRandom)
                                    if (question !== "3") {
                                        alert('raté, ultime chance . ')
                                    }
                                    question = prompt("Concentrez vous  ... " + enigmeRandom)
                                    if (question !== "3") {
                                        console.error('C etait votre derniere chance , adieu . ' + this.nom + "  est mort")
                                        this.pointVie = 0
                                        return this.etat = "mort"
                                    }
    
                                } else {
                                    // a.pointVie = 0
                                    console.warn(a.nom, "est mort ! Bravo a ", this.nom)
                                    a.etat="mort"
    
                                }
                            }
                            if (enigmeRandom == enigme[1]) {
                                if (question !== "75") {
                                    alert("Raté, vous avez encore 2 chances ")
                                    question = prompt(enigmeRandom)
                                    if (question !== "75") {
                                        alert('raté,  attention encore une chance ! Concentrez vous !!  ')
                                    }
                                    question = prompt(enigmeRandom)
                                    if (question !== "75") {
    
                                        console.error('C etait votre derniere chance , adieu . ' + this.nom + "  est mort")
                                        this.pointVie = 0
                                        return this.etat = "mort"
    
                                    }
    
                                } else {
                                    // a.pointVie = 0
                                    console.warn(a.nom, "est mort ! Bravo a ", this.nom)
                                    a.etat = "mort"
                                }
                            }
                            if (enigmeRandom == enigme[2]) {
                                if (question !== "66") {
                                    (console.log('raté, encore deux chances .'))
                                    question = prompt(enigmeRandom)
                                    if (question !== "66") {
                                        (console.log('raté, derniere chance !! '))
                                    }
                                    question = prompt(enigmeRandom)
                                    if (question !== "66") {
                                        console.error('C etait votre derniere chance , adieu . ' + this.nom + "  est mort")
                                        this.pointVie = 0
                                        return this.etat = "mort"
                                    }
                                } else {
                                    a.pointVie = 0
                                    console.warn(a.nom, "est mort ! Bravo a ", this.nom)
                                    a.etat = "mort"
    
                                }
                            }
    
                        }
               
                       
                      }







            }
        }
        this.defense = (a)=>{
            this.pointVie+=5
            console.log(this.nom , "utlise sa defense et recupère 5 point de vie !")
        }
    }
}


