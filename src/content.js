const addToContent = () => {
    const myContentButton = document.querySelector('#content--icons--add');
    const contentModal = document.querySelector('.modal--wrapper')
    const contentSpan = document.querySelector('#mySpan');
    const myContentSubmit = document.getElementById('modal--submit--button')

    myContentButton.onclick = function () {
        // alert("Still working?")
        contentModal.style.display = 'block';
    };

    contentSpan.onclick = () => contentModal.style.display = 'none';

    myContentSubmit.onclick = () => alert('hello?')

}

export default addToContent