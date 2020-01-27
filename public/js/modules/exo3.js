//Welcome x
let welcome
export default welcome = () => {
    let input = document.getElementById('input3');
    let output = document.getElementById('output3')
    let go = document.getElementById('go');

    let sayWelcome = () => {
        console.log(input.value);
        
        if (input.value != "") {
            output.innerHTML = input.value;
            input.value = "";
        }
    }

    go.addEventListener('click',sayWelcome);
}