const textArea = document.getElementById('textField'),
    showCount = document.querySelector('.showCount');

textArea.oninput = () => {
    let count = textArea.value.length;

    showCount.textContent = count;
}