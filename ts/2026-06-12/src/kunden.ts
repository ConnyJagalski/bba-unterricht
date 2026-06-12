abstract class Standard {
    constructor(
        public name: string,
        public saldo: number,
    ) {};

    abstract ueberweisung(): void;

    abstract info(): string;
};

class Privat extends Standard {
    constructor(name: string, saldo: number) {
        super(name, saldo)
    };

    ueberweisung() {};
    info() {
        return this.name;
    };
};

class Geschaeft extends Standard {
    constructor(
        name: string,
        saldo: number
    ){
        super(name, saldo);
    };

    "gebuergt": boolean;

    ueberweisung(){};
    info() {
        return this.name;
    };
};

class Mitarbeiter extends Standard {
    constructor(name: string, saldo: number){
        super(name, saldo);
    };

    ueberweisung() {};
    info() {
        return this.name;
    };
};

enum Konten {
    Privat,
    Geschaeft,
    Mitarbeiter
};

class FactoryKonten {
    public static Create(type: Konten) {
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