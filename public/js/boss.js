let attaque_value = 10
export default class Boss {
    constructor(nom, pointVie, pointAttaque, etat) {
        if (this.pointVie == 0) {
            alert(this.nom, " est mort ! Aucun attaque ou defense possible.")
        }
        this.nom = nom
        this.pointVie = pointVie
        this.pointAttaque = pointAttaque
        this.etat = etat
        this.attaque = (a) => {
            if (a.pointVie <= 0) {
                console.warn(a.nom, "est mort !!! ")
                a.pointVie = 0
            }
            else if (a.pointVie>0) { 
                a.pointVie -= attaque_value
                console.log(this.nom, "attaque", a.nom, "... ", a.nom, "perd 10 point de vie . Santé de ", a.nom, a.pointVie)
            }
        }
        this.defense = (a) => {
            if(a.pointVie>0){ 
            this.pointVie += (attaque_value*3)
            return console.log(this.nom, "s'est protégé  3 fois et a récupéré 15 point !")
        }
    }
    }
}