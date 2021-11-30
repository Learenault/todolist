let titre = document.getElementById('titre');
let submitTitre = document.getElementById('submitTitre');
let toDo = document.getElementById('toDo');

// ajout de la tache
submitTitre.addEventListener("click",() =>{
let newP = document.createElement('li');
toDo.appendChild(newP);
newP.innerHTML = titre.value;
let close = document.createElement('span');
newP.appendChild(close);
close.classList.add("close");
close.innerHTML = "<img src='close.png' alt='close'></img>";

// suppression de la tache 
close.addEventListener("click",()=>{
    toDo.removeChild(newP);
});

// Modifiction du CSS lorsqu'une tache est effectuée
newP.addEventListener("click",()=>{
    newP.classList.toggle("tacheOk")

});
});






