let titre
export default titre = () => {
    let title = document.getElementById("titre");
    title.innerHTML = "Mon titre modifié";
    title.style.color = "yellow";
    title.classList.add("bg-success");
}