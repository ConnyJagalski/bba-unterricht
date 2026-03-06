const arr = [8, 5, 2];

export function aufgabe(val) {
    if (val < arr.length) {
        return arr[val];
    } else {
        return "Index zu groß."
    }
}