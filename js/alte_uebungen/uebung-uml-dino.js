class Ei {
    constructor(tage) {
        this.tageAlt = tage;
    }
}

class Dinosaurier {
    constructor(groesse, gewicht, farbe, geschwindigkeit) {
        this.groesse = groesse;
        this.gewicht = gewicht;
        this.farbe = farbe;
        this.geschwindigkeit = geschwindigkeit;
    }

    Fortbewegen() {

    };

    Fortpflanzen() {

    };

    Brüten() {
        return new Ei();
    };
}

class Nest {
    static erstelleDinoNest() {
        return {
            dinosaurier: new Dinosaurier(),
            ei: new Ei()
        }
    }
}

class Velociraptor extends Dinosaurier {
    constructor(klauenschaerfe) {
        this.klauenschaerfe = klauenschaerfe;
    }
}

class Compsognathus extends Dinosaurier {
    constructor(suesslevel) {
        this.suesslevel = suesslevel;
    }
}