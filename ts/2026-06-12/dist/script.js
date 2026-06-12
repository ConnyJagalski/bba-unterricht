"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Krankenhaus {
    "tueren";
    "fenster";
    "einsturzgefaerdet";
    "oeffentlich";
    "name";
}
;
class Kindergarten {
    "tueren";
    "fenster";
    "einsturzgefaerdet";
    "oeffentlich";
    "name";
}
;
class Schule {
    "tueren";
    "fenster";
    "einsturzgefaerdet";
    "oeffentlich";
    "name";
}
;
var GebaeudeType;
(function (GebaeudeType) {
    GebaeudeType[GebaeudeType["Krankenhaus"] = 0] = "Krankenhaus";
    GebaeudeType[GebaeudeType["Kindergarten"] = 1] = "Kindergarten";
    GebaeudeType[GebaeudeType["Schule"] = 2] = "Schule";
})(GebaeudeType || (GebaeudeType = {}));
;
class GebaeudeFactory {
    static createGebaeude(type) {
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
}
;
const krankenhaus = GebaeudeFactory.createGebaeude(GebaeudeType.Krankenhaus);
const kindergarten = GebaeudeFactory.createGebaeude(GebaeudeType.Kindergarten);
const schule = GebaeudeFactory.createGebaeude(GebaeudeType.Schule);
//# sourceMappingURL=script.js.map