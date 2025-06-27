class RabattRechner {
        berechneRabattlosenPreis() {
            return 99.99;
        }

        berechnePreisNachRabatt(preis, rabatt) {
            return preis * (1 - (rabatt / 100));
        }

        berechnePreisFuerStammkunde(preis, rabatt, stammkunde) {
            if (preis && rabatt && stammkunde) {
                return preis * (1 - (rabatt / 100) - 0.05);
            } else {
                this.berechnePreisNachRabatt(preis, rabatt);
            }
        }
}

const rabattRechner = new RabattRechner();
console.log(rabattRechner.berechneRabattlosenPreis());
console.log(rabattRechner.berechnePreisNachRabatt(150, 15));
console.log(rabattRechner.berechnePreisNachRabatt(200, 25));
console.log(rabattRechner.berechnePreisFuerStammkunde(200, 25, true));