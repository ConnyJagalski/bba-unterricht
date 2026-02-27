const numbers = [4,7,1,8,2,3];

let count = 0;

function bubbleSort () {
    for (i = 0; i < numbers.length; i++) {

        for (j = 0; j< numbers.length-1-i; j++) {
            count++;
            
            if (numbers[j] > numbers[j+1]) {
                temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }
}

bubbleSort();
console.log(count);