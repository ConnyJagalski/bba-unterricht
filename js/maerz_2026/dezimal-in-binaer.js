export function aufgabe (val) {
    let arr = [];

    if (val < 0) {
        return "Zahl ist zu klein."
    } else if(val === 0) {
        return 0;
    } else {

        let i = val;

        while (i > 0) {
            if (i % 2 === 0) {
                arr.unshift(0);
            } else {
                arr.unshift(1)
            }

            i = Math.floor(i / 2);
        }
    }

    return arr.join("");
}