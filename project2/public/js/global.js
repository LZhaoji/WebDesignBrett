"user strick";

const menuButton = document.querySelector('.globalnav__button');
const dropdownMenu = document.querySelector('.globalnav__dropdown');

(function(){
    showDropdown();
})();

// click menu
function showDropdown(){
    
    menuButton.addEventListener('click',() =>{  
        dropdownMenu.classList.toggle('close');
    });
}