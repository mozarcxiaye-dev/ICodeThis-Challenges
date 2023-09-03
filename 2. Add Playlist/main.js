// Add JavaScript code here
const listToggler = document.querySelector(".toggler");
const videoLists = document.querySelector(".vid-lists");

listToggler.addEventListener('click', () => {
    listToggler.classList.toggle("rotateToggler");
    videoLists.classList.toggle("noDisplay");

})