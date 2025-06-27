const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const regExDouble = /^[0-9]+(?:[,.][0-9]+)?$/;
const regExOperator = /^[+\-*/]$/;

function istZahl(eingabe) {
    if (regExDouble.test(eingabe)) {
        return true;
    } else {
        console.log("Ungültige Eingabe! Erlaubt sind ganze Zahlen, oder Kommazahlen.");
        return false;
    };
};

function istOperator(eingabe) {
    if (regExOperator.test(eingabe)) {
        return true;
    } else {
        console.log("Ungültige Eingabe! Erlaubt sind +, -, *, /");
        return false;
    };
};

function rechner() {
    rl.question("Bitte eine Zahl eingeben: ", (ersteEingabe) => {
        if (!istZahl(ersteEingabe)) {
            rechner();
        } else {
            const zahl1 = parseFloat(ersteEingabe.replace(',', '.'));

            function operator() {
                rl.question("Bitte einen Operator eingeben: ", (zweiteEingabe) => {
                    if (!istOperator(zweiteEingabe)) {
                        operator();
                    } else {
                        const operator = zweiteEingabe;

                        function zweiteZahl() {
                            rl.question("Bitte eine zweite Zahl eingeben: ", (dritteEingabe) => {
                                if (!istZahl(dritteEingabe)) {
                                    zweiteZahl();
                                } else {
                                    const zahl2 = parseFloat(dritteEingabe.replace(',', '.'));

                                    switch (operator) {
                                        case "+":
                                            console.log(`${zahl1} + ${zahl2} = ${zahl1 + zahl2}`);
                                        break;
                                        case "-":
                                            console.log(`${zahl1} - ${zahl2} = ${zahl1 - zahl2}`);
                                        break;
                                        case "*":
                                            console.log(`${zahl1} * ${zahl2} = ${zahl1 * zahl2}`);
                                        break;
                                        case "/":
                                            console.log(`${zahl1} / ${zahl2} = ${zahl1 / zahl2}`);
                                        break;
                                    }
                                    rl.close();
                                }
                            });
                        }
                        zweiteZahl();
                    }
                })
            }
            operator();
        }
    })
};

rechner();