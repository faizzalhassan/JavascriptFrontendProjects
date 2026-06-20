const createbutton = document.querySelector('.create-btn');
const textField = document.getElementById('textField');
const noteslist = document.querySelector('.lower-prt');


createbutton.addEventListener('click', function () {
    let tastdesc = textField.value;

    if (tastdesc === "") return;

    const note = document.createElement('div');
    note.className = "note";
    note.textContent = tastdesc;

    const deleteIcon = document.createElement('span');
    deleteIcon.className = "material-symbols-outlined delete-icon";
    deleteIcon.textContent = "close";

    note.appendChild(deleteIcon);
    noteslist.appendChild(note);
    textField.value = "";

    deleteIcon.addEventListener('click', function () {
        noteslist.removeChild(note);
    })

})
