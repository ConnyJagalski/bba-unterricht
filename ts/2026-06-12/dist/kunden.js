"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Standard {
    name;
    saldo;
    constructor(name, saldo) {
        this.name = name;
        this.saldo = saldo;
    }
    ;
}
;
class Privat extends Standard {
    constructor(name, saldo) {
        super(name, saldo);
    }
    ;
    ueberweisung() { }
    ;
    info() {
        return this.name;
    }
    ;
}
;
class Geschaeft extends Standard {
    constructor(name, saldo) {
        super(name, saldo);
    }
    ;
    "gebuergt";
    ueberweisung() { }
    ;
    info() {
        return this.name;
    }
    ;
}
;
class Mitarbeiter extends Standard {
    constructor(name, saldo) {
        super(name, saldo);
    }
    ;
    ueberweisung() { }
    ;
    info() {
        return this.name;
    }
    ;
}
;
var Konten;
(function (Konten) {
    Konten[Konten["Privat"] = 0] = "Privat";
    Konten[Konten["Geschaeft"] = 1] = "Geschaeft";
    Konten[Konten["Mitarbeiter"] = 2] = "Mitarbeiter";
})(Konten || (Konten = {}));
;
class FactoryKonten {
    static Create(type) {
        switch (type) {
            case Konten.Privat:
                return new Privat("Privat", 100);
            case Konten.Geschaeft:
                return new Geschaeft("Geschaeft", 200);
            case Konten.Mitarbeiter:
                return new Mitarbeiter("Mitarbeiter", 300);
        }
    }
}
//# sourceMappingURL=kunden.js.map