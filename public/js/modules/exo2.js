//TABS
let onglets;
export default onglets = () => {
    let i=0;
    let haveClass = (element,classe) => {
        let classes = element.classList;
        for (let i = 0; i < classes.length; i++) {
            if (classes[i] == classe) {
                // si l'élément a la classe cherchée, renvoie true
                return true
            } 
        }
    }
    //Onglets
    let navtabs = document.getElementsByClassName('navtab');
    //Pages
    let active = document.getElementsByClassName('active');
    let newTab;

    let getTabNumber = (element) => {
        if (haveClass(element,"navtab")) {
            // si l'élément a une classe navtab, renvoie la classe suivante (tab$ -> numéro d'onglet)            
            return element.classList[i+1]
        }
    }

    let switchTab = (e) => {
        newTab = document.getElementById(getTabNumber(e.currentTarget));
        for (let i = 0; i < navtabs.length; i++) {
            if(haveClass(navtabs[i],'selected')){            
                navtabs[i].classList.remove('selected')
            }
        }
        e.currentTarget.classList.add('selected');
        active[0].classList.add('d-none');
        active[0].classList.remove('active');
        newTab.classList.remove('d-none');
        newTab.classList.add('active');
    }

    for (let i = 0; i < navtabs.length; i++) {
        navtabs[i].addEventListener('click',switchTab, false);
    }
}