//LISTE
let liste
export default liste = () => {
    let input = document.getElementById('input');
    let create = document.getElementById('create');
    let rem = document.getElementById('rem');
    let listZone = document.getElementById('list');
    let list;

    let supprime = () => {
        let cible = document.getElementsByTagName("UL");
        cible[0].remove();
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
            li.classList.add("w-50","d-flex","justify-content-end","bg-info","m-1","border")
            list.appendChild(li);
            let text = document.createElement("p");
            text.classList.add("m-1","mr-auto")
            text.innerHTML = input.value;
            li.appendChild(text);
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

    create.addEventListener('click', createList);
    input.addEventListener('keypress', () => { 
        if (event.keyCode == 13) {
            createList();
        }
    });
    rem.addEventListener('click',supprime);
}