const grade = document.getElementById("wish");
const ap1 = document.getElementById("ap1");
const ap2_1 = document.getElementById("ap2_1");
const ap2_2 = document.getElementById("ap2_2");
const wiso = document.getElementById("wiso");
const button = document.getElementById("submit");
const form = document.getElementById("form");

const resGesamt = document.getElementById("res-gesamt");
const resBestehen = document.getElementById("res-bestehen");
const resWunsch = document.getElementById("res-wunsch");

button.addEventListener("click", (event) => {
    event.preventDefault();

    function aktuelleGesamtpunktzahl() {
        let sum = 0;
        const v1 = Number(ap1.value) * 0.2;
        const v2_1 = Number(ap2_1.value) * 0.1;
        const v2_2 = Number(ap2_2.value) * 0.1;
        const v_wiso = Number(wiso.value) * 0.1;

        if (!isNaN(v1)) sum += v1;
        if (!isNaN(v2_1)) sum += v2_1;
        if (!isNaN(v2_2)) sum += v2_2;
        if (!isNaN(v_wiso)) sum += v_wiso;

        return sum;
    }

    const gesamt = aktuelleGesamtpunktzahl();

    function berechneFehlend(zielPunktzahl) {
        const differenz = zielPunktzahl - gesamt;
        return differenz > 0 ? differenz.toFixed(0) : "Erreicht";
    }

    function getWunschPunkte() {
        const wunsch = parseFloat(grade.value);
        if (isNaN(wunsch)) return "Keine Angabe";
        if (wunsch <= 1.5) return berechneFehlend(92);
        if (wunsch <= 2.5) return berechneFehlend(81);
        if (wunsch <= 3.5) return berechneFehlend(67);
        if (wunsch <= 4.5) return berechneFehlend(50);
        return "Ungültig";
    }

    // Tabelle befüllen
    resGesamt.textContent = gesamt.toFixed(0);
    resBestehen.textContent = berechneFehlend(50);
    resWunsch.textContent = getWunschPunkte();
});