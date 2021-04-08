const first_operand = parseFloat(prompt('Enter any first number: '));
const operator = prompt('Enter operator (\n +  to add,\n -  to subtract,\n *  to multiply,\n /  to divide. ): ');
const second_operand = parseFloat(prompt('Enter any second number: '));

let result;
let error_message;
if (!Number.isInteger(first_operand) && !Number.parseFloat(first_operand)) {
    error_message = 'first input must be an integer or a double value'
    console.log(error_message)
} else if (!Number.isInteger(second_operand) && !Number.parseFloat(second_operand)) {
    error_message = 'second input must be an integer or a double value'
    console.log(error_message)
} else {

    switch (operator) {
        case '+':
            result = first_operand + second_operand;
            console.log(`${first_operand} ${operator} ${second_operand} = ${result}`);
            break;
        case '-':
            result = first_operand - second_operand;
            console.log(`${first_operand} ${operator} ${second_operand} = ${result}`);
            break;
        case '*':
            result = first_operand * second_operand;
            console.log(`${first_operand} ${operator} ${second_operand} = ${result}`);
            break;
        case '/':
            result = first_operand / second_operand;
            console.log(`${first_operand} ${operator} ${second_operand} = ${result}`);
            break;
        default:
            error_message = 'enter a valid operator'
            console.log(error_message);
    }
}