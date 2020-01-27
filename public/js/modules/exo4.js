//Bloc magique
let magie;
export default magie = () => {
    let bloc1 = document.getElementById("block1");
    let bloc2 = document.getElementById("block2");
    let exchange = document.getElementById("change");
    let reset = document.getElementById("reset4");
    let counter = document.getElementById("compteur4");

    let i = 0;

    let switcharoo = () => {
        if (bloc1.innerHTML != "") {
            bloc2.innerHTML = bloc1.innerHTML;
            bloc1.innerHTML = "";
        } else {
            bloc1.innerHTML = bloc2.innerHTML;
            bloc2.innerHTML = "";
        }
        counter.innerHTML = ++i;
    }

    let resetCounter = () => {
        i = 0;
        counter.innerHTML = i;
    }

    exchange.addEventListener('click',switcharoo);
    reset.addEventListener('click',resetCounter);
}