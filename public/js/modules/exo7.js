//LISTE
let liste

let haveClass = (element,classe) => {
    let classes = element.classList;
    for (let i = 0; i < classes.length; i++) {
        if (classes[i] == classe) {
            // si l'élément a la classe cherchée, renvoie true
            return true
        } 
    }
}

export default liste = () => {
    let input = document.getElementById('input');
    let create = document.getElementById('create');
    let rem = document.getElementById('rem');
    let listZone = document.getElementById('list');
    let allFilter = document.getElementById('all');
    let doneFilter = document.getElementById('done');
    let doingFilter = document.getElementById('doing');


    let list;

    let supprime = () => {
        let cible = document.getElementsByTagName("UL");
        cible[0].remove();
    }

    let validateLi = (e) => {
        if (e.target.checked) {
            e.target.parentElement.classList.remove('bg-info','doing');
            e.target.parentElement.classList.add('done','bg-success');
        } else {
            e.target.parentElement.classList.remove('done','bg-success');
            e.target.parentElement.classList.add('bg-info','doing');
        }
    }

    let supprimeLi = (e) => {
        e.currentTarget.parentElement.remove();
    }

    let modifLi = (e) => {
        let target = e.currentTarget.parentElement.firstElementChild;
        let backup = target.innerHTML;
        let change = document.createElement("input");
        change.classList.add("w-100");
        target.innerHTML = "";
        target.appendChild(change);
        change.focus();
        change.addEventListener('keypress', () => { 
            if (event.keyCode == 13) {
                if (event.currentTarget.value != "") {
                    target.innerHTML = change.value;
                    change.remove(); 
                } else {
                    target.innerHTML = backup;
                    change.remove(); 
                }
            }
        });
    }

    let createList = () => {    
        if (listZone.lastElementChild.tagName != "UL" && input.value != "") {
            list = document.createElement("ul");
            list.classList.add("d-flex","justify-content-center","flex-wrap")
            listZone.appendChild(list);
        }
        if (input.value != "") {
            input.style.border = ""
            let li = document.createElement("li");
            li.classList.add("w-50","d-flex","justify-content-end","bg-info","m-1","border","toDoItem","doing")
            list.appendChild(li);
            let text = document.createElement("p");
            text.classList.add("m-1","mr-auto")
            text.innerHTML = input.value;
            li.appendChild(text);
            let approve = document.createElement("input");
            approve.style.height = "32px";
            approve.style.width = "32px";
            approve.setAttribute("type","checkbox");
            li.appendChild(approve);
            approve.addEventListener('change',validateLi);
            let edit = document.createElement("button");
            edit.innerHTML = '<i class="fas fa-edit"></i>'
            li.appendChild(edit);
            edit.addEventListener('click',modifLi);
            let del = document.createElement("button");
            del.innerHTML = '<i class="fas fa-eraser"></i>'
            li.appendChild(del);
            del.addEventListener('click',supprimeLi);
            input.value = "";
        } 
        if (input.value == "") {
            input.style.border = "3px solid red";
        }
    }

    let displayAll = () => {
        for (let i = 0; i < toDoItem.length; i++) {
            toDoItem[i].classList.remove("d-none");
            if (haveClass(toDoItem[i],"d-flex") != true) {
                toDoItem[i].classList.add("d-flex");
            }
        }
    }

    let displayDone = () => {
        for (let i = 0; i < done.length; i++) {
            done[i].classList.remove("d-none");
            if (haveClass(done[i],"d-flex") != true) {
                done[i].classList.add("d-flex");
            }
        }
        for (let i = 0; i < doing.length; i++) {
            doing[i].classList.remove("d-flex");
            if (haveClass(doing[i],"d-none") != true) {
                doing[i].classList.add("d-none");
            }
        }
    }

    let displayDoing = () => {
        for (let i = 0; i < doing.length; i++) {
            doing[i].classList.remove("d-none");
            if (haveClass(doing[i],"d-flex") != true) {
                doing[i].classList.add("d-flex");
            }
        }
        for (let i = 0; i < done.length; i++) {
            done[i].classList.remove("d-flex");
            if (haveClass(done[i],"d-none") != true) {
                done[i].classList.add("d-none");
            }
        }
    }

    create.addEventListener('click', createList);
    input.addEventListener('keypress', () => { 
        if (event.keyCode == 13) {
            createList();
        }
    });
    rem.addEventListener('click',supprime);
    let done = document.getElementsByClassName('done');
    let doing = document.getElementsByClassName('doing');
    let toDoItem = document.getElementsByClassName('toDoItem');
    allFilter.addEventListener('click',displayAll);
    doneFilter.addEventListener('click',displayDone);
    doingFilter.addEventListener('click',displayDoing);
}