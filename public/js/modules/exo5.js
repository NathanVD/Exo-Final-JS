let images
export default images = () => {
    //IMAGES MULT
    let magic = document.getElementById('magic');
    let supp = document.getElementById('clear');
    let supLast = document.getElementById('supLast');
    let section = document.getElementById('tab5');
    let counter = document.getElementById('compteur5');
    let gallery,img;
    let i = 0;

    let addImg = () => {
        if (section.lastElementChild.tagName != "DIV") {
            gallery = document.createElement("div");
            gallery.classList.add('d-flex','flex-wrap');
            gallery.style.border = "3px solid white";
            section.appendChild(gallery);
        }
        img = document.createElement("img");
        img.setAttribute("src","./public/img/Catastrophe.gif");
        img.classList.add('m-1');
        gallery.appendChild(img);
        counter.innerHTML = ++i;
        console.log(i);
    }

    let removeLastImage = () => {
        gallery.lastChild.remove();
        counter.innerHTML = --i;
        console.log(i);
    }

    let supprime = (e) => {
        if (e.currentTarget.parentElement.lastChild != e.currentTarget) {
            e.currentTarget.parentElement.removeChild(e.currentTarget.parentElement.lastChild);
        }
        i = 0;
        counter.innerHTML = i;
    }

    magic.addEventListener('click',addImg);
    supLast.addEventListener('click',removeLastImage);
    supp.addEventListener('click',supprime);
}