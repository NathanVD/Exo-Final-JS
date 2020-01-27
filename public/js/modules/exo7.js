//LISTE
let liste
export default liste = () => {
    let supprime = (e) => {
        if (e.currentTarget.parentElement.lastChild != e.currentTarget) {
            e.currentTarget.parentElement.removeChild(e.currentTarget.parentElement.lastChild);
        }
    }
    let input = document.getElementById('input');
    let create = document.getElementById('create');
    let rem = document.getElementById('rem');
    let section = document.getElementById('sec7');
    let listZone = document.getElementById('list');
    let list;

    let supprimeLi = (e) => {
        e.currentTarget.parentElement.remove()
    }

    let createList = () => {    
        if (section.lastElementChild.tagName != "UL" && input.value != "") {
            list = document.createElement("ul");
            listZone.appendChild(list);
        }
        if (input.value != "") {
            input.style.border = ""
            let test = document.createElement("li");
            test.innerHTML = input.value;
            test.classList.add("w-25","d-flex","justify-content-between","bg-info","m-1","border")
            list.appendChild(test);
            let bTest = document.createElement("button");
            bTest.innerHTML = 'x'
            test.appendChild(bTest);
            bTest.addEventListener('click',supprimeLi);
            input.value = "";
        } 
        if (input.value == "") {
            input.style.border = "3px solid red"
        }
    }

    create.addEventListener('click', createList);
    window.addEventListener('keypress', () => { 
        if (event.keyCode == 13) {
            createList();
        }
    });
    rem.addEventListener('click',supprime);
}