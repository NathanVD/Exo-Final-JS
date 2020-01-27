//CALCULETTE
let calculette
export default calculette = () => {
    //Niveau 1
    let first = document.getElementById('firstNumber');
    let second = document.getElementById('secondNumber');
    let operators = document.getElementById('ops');
    let submit = document.getElementById('submit6');
    let resultA = document.getElementById('result');

    let resultat;

    let calc = () => {
        if ((first.value == "" || isNaN(first.value)) && (second.value == "" || isNaN(second.value))) {
            first.classList.add("border-danger");
            second.classList.add("border-danger");
        } else if (first.value == "" || isNaN(first.value)) {
            first.classList.remove("border-danger");
            second.classList.remove("border-danger");
            first.classList.add("border-danger");
        } else if (second.value == "" || isNaN(second.value)) {
            first.classList.remove("border-danger");
            second.classList.remove("border-danger");
            second.classList.add("border-danger");
        } else {
            first.classList.remove("border-danger");
            second.classList.remove("border-danger");
            switch (operators.value) {
                case "+":
                    resultat = parseInt(first.value) + parseInt(second.value);
                    break;
                case "-":
                    resultat = parseInt(first.value) - parseInt(second.value);
                    break;
                case "*":
                    resultat = parseInt(first.value) * parseInt(second.value);
                    break;
                case "/":
                    resultat = parseInt(first.value) / parseInt(second.value);
                    break;
                default:
                    resultat = "erreur";
            }
            resultA.value = resultat;
        }
    }
    
    submit.addEventListener("click",calc);

    //Niveau 2
    let numbers = document.getElementsByClassName('num');
    let ops = document.getElementsByClassName('op');
    let clear = document.getElementById('clr');
    let equal = document.getElementById('equal');
    let output = document.getElementById('screen');
    let actuel = "", previous = "", op, result;
    
    let prepNum = (e) => {
        if (result) {
            output.value = "" ;
            actuel = "";
            actuel += e.currentTarget.innerHTML; 
            output.value = actuel;
            result = "";
        } else {
            actuel += e.currentTarget.innerHTML; 
            output.value = actuel ;
        }
    }
    let clr = () => {
        previous = "";
        actuel = "";
        result = "";
        output.value = actuel
    }
    let operation = (e) => {
        op = e.currentTarget.innerHTML;
        previous = actuel;
        actuel = "";
        output.value = actuel;
    }
    let calcul = () => {
        previous = parseFloat(previous);
        actuel = parseFloat(actuel);
        switch (op) {
            case "+":
                result = previous + actuel;
                output.value = result;
                break;
            case "-":
                result = previous - actuel;
                output.value = result;
                break;
            case "*":
                result = previous * actuel;
                output.value = result;
                break;
            case "/":
                result = previous / actuel;
                output.value = result;
                break;
            default:
                output.value = "error";
                break;
        }
    }
    
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click',prepNum);
    }
    for (let i = 0; i < ops.length; i++) {
        ops[i].addEventListener('click',operation);  
    }
    clear.addEventListener('click',clr);
    equal.addEventListener('click',calcul);
}