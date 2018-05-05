
class Calculator {
    // add(x,y) {
    //     return parseInt(x) + parseInt(y);
    // }
    // subtract(x,y){
    //     return parseInt(x) - parseInt(y);
    // }
    // multiply(x,y){
    //     return parseInt(x) * parseInt(y);
    // }
    // divide(x,y){
    //     return parseInt(x) / parseInt(y);
    // }

    operation(firstNumber,secondNumber,operator){
        var expression = firstNumber + operator + secondNumber;
        console.log("expression is",expression);
        return eval(expression);
    }

}