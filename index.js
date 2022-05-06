// Display
const display = document.getElementById("mainOutput");

// Number key loop start
let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
const numberButtons = document.getElementsByClassName("numbers");

let numberOne = "";
let numberTwo = "";
let currentOperator = "";
// let operator = ""

for (let i = 0; i < numbersArr.length; i++) {
    numberButtons[i].addEventListener("click", (e) => {
        console.log(e.target.innerText);
        numberOne += numbersArr[i];
        document.getElementById("mainOutput").innerText = numberOne;
    });
}
// Number key loop end

// Operators loop start
let operArr = ["%", "/", "*", "-", "+"];
const operButtons = document.getElementsByClassName("signs");

for (let i = 0; i < operArr.length; i++) {
    operButtons[i].addEventListener("click", (q) => {
        console.log(q.target.innerText);
        currentOperator = operArr[i]
        numberTwo = numberOne;
        numberOne = "";
        document.getElementById("mainOutput").innerText = currentOperator;
        return currentOperator;
    });
}
// Operators loop end

const plusMinus = document.getElementById("buttonNeg")

buttonNeg.addEventListener("click", () => {
    numberOne = numberOne * -1
    document.getElementById("mainOutput").innerText = numberOne;
})

// Equals start

const equalButton = document.getElementById("buttonEquals");

equalButton.addEventListener("click", () => {

    const stringNumberOne = parseFloat(numberOne)
    const stringNumberTwo = parseFloat(numberTwo)

    if (currentOperator === "+") {
        let plus = Number(stringNumberTwo) + Number(stringNumberOne);
        document.getElementById("mainOutput").innerText = plus;
        // numberTwo = "";
        numberOne = plus;
        // console.log(plus)

    }
    if (currentOperator === "-") {
        let minus = Number(stringNumberTwo) - Number(stringNumberOne);
        document.getElementById("mainOutput").innerText = minus;
        numberOne = minus;

    }
    if (currentOperator === "/") {
        let divide = Number(stringNumberTwo) / Number(stringNumberOne);
        document.getElementById("mainOutput").innerText = divide;
        numberOne = divide;

    }
    if (currentOperator === "*") {
        let multiply = Number(stringNumberTwo) * Number(stringNumberOne);
        document.getElementById("mainOutput").innerText = multiply;
        numberOne = multiply;


    }

    console.log(mainOutput.innerText)
    return mainOutput.innerText
});

const clearingButtons = Array.from(
    document.getElementsByClassName("action")
);

clearingButtons.map((special) => {
    special.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            // Clear
            case "C":
                display.innerText = "";
                numberOne = "";
                numberTwo = "";
                break;
            // Backspace
            case "Del":
                display.innerText = numberOne.slice(0, -1);
                numberOne = numberOne.slice(0, -1);
                break;
        }
    });
});
