const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const regExZahl = /^[0-9]$/;
const regExChar = /^[a-zA-Z]$/;

function istZahl(eingabe) {
    if (regExZahl.test(eingabe)) {
        return true;
    } else {
        return false;
    }
};

function istBuchstabe(eingabe) {
    if (regExChar.test(eingabe)) {
        return true;
    } else {
        return false;
    }
};

function testOfInput() {
    rl.question("Ihre Eingabe: ", (eingabe) => {
        if (eingabe.length > 1) {
            console.log("Eingabe darf aus maximal einem Zeichen bestehen.");
            testOfInput();
        } else {
            if (istZahl(eingabe)) {
                console.log("Zahl");
                rl.close();
            } else if (istBuchstabe(eingabe)) {
                console.log("Buchstabe");
                rl.close();
            } else {
                console.log("Zeichen");
                rl.close();
            }
        }
    });
};

testOfInput();