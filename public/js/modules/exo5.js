let images
export default images = () => {
    let supprime = (e) => {
        if (e.currentTarget.parentElement.lastChild != e.currentTarget) {
            e.currentTarget.parentElement.removeChild(e.currentTarget.parentElement.lastChild);
        }
    }
    //IMAGES MULT
    let magic = document.getElementById('magic');
    let supp = document.getElementById('clear');
    let section = document.getElementById('tab5');
    let gallery,img;

    let addImg = () => {
        if (section.lastElementChild.tagName != "DIV") {
            gallery = document.createElement("div");
            gallery.classList.add('d-flex','flex-wrap');
            gallery.style.border = "3px solid white";
            section.appendChild(gallery);
        }
        img = document.createElement("img");
        img.setAttribute("src","./Catastrophe.gif");
        img.classList.add('m-1');
        gallery.appendChild(img);
    }

    magic.addEventListener('click',addImg);
    supp.addEventListener('click',supprime);
}