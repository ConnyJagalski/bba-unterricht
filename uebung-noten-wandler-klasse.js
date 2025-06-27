class NotenWandler {
    istBestanden(punkte) {
        if (punkte >= 50) {
            return "Bestanden";
        } else {
            return "Nicht Bestanden";
        }
    }

    gibNotenBezeichnung(punktzahl) {
        if (punktzahl >= 80) {
            return "Sehr gut";
        } else if (punktzahl >= 65) {
            return "Gut";
        } else if (punktzahl >= 50) {
            return "Befriedigend";
        } else {
            return "Nicht bestanden"
        }
    }
}

const notenWandler = new NotenWandler();
console.log(notenWandler.istBestanden(51));
console.log(notenWandler.gibNotenBezeichnung(90));
console.log(notenWandler.gibNotenBezeichnung(80));
console.log(notenWandler.gibNotenBezeichnung(70));
console.log(notenWandler.gibNotenBezeichnung(65));
console.log(notenWandler.gibNotenBezeichnung(60));
console.log(notenWandler.gibNotenBezeichnung(50));
console.log(notenWandler.gibNotenBezeichnung(40));