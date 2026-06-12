interface Eigenschaften {
    tueren: number;
    fenster: number;
    einsturzgefaerdet: boolean;
    oeffentlich: boolean;
    name: string;
}

class Krankenhaus implements Eigenschaften {
    "tueren": 8;
    "fenster": 35;
    "einsturzgefaerdet": false;
    "oeffentlich": true;
    "name": "Sankt Johannes"
};

class Kindergarten implements Eigenschaften {
    "tueren": 2;
    "fenster": 15;
    "einsturzgefaerdet": true;
    "oeffentlich": true;
    "name": "Sankt Thomas"
};

class Schule implements Eigenschaften {
    "tueren": 6;
    "fenster": 50;
    "einsturzgefaerdet": false;
    "oeffentlich": false;
    "name": "Sankt Nikolaus"
};

enum GebaeudeType {
    Krankenhaus,
    Kindergarten,
    Schule
};

class GebaeudeFactory {
    public static createGebaeude(type: GebaeudeType): Eigenschaften {
        switch (type) {
            case GebaeudeType.Kindergarten:
                return new Kindergarten();
            case GebaeudeType.Krankenhaus:
                return new Krankenhaus();
            case GebaeudeType.Schule:
                return new Schule();
            default:
                throw new Error("Gebäude nicht gefunden!");
        }
    }
};

const krankenhaus = GebaeudeFactory.createGebaeude(GebaeudeType.Krankenhaus);
const kindergarten = GebaeudeFactory.createGebaeude(GebaeudeType.Kindergarten);
const schule = GebaeudeFactory.createGebaeude(GebaeudeType.Schule);