"use strict";

let isName = false;
let valid = false;

const dropdowns = document.querySelectorAll('.globalnav__dropdown');
const nameEl = document.querySelector('.form__name-input');
const validName = document.querySelector('.form__name-valid');
const emailEl = document.querySelector('.form__email-input');
const validEmail = document.querySelector('.form__email-valid');
const confirmEmailEl = document.querySelector('.form__confirm-email-input');
const validConfirmEmail = document.querySelector('.form__confirm-email-valid');
const formEl = document.querySelector('.form');
    
(function(){
    navButtonListener();
    checkName();
    submitForm();
})();

//this function is for checking email and confirm-email when submit the form
function submitForm() {
    formEl.addEventListener('submit',(event) => {
        //show validation information about email
        const emailValue = emailEl.value;
        const lengthEmail = emailValue.length;
        validEmail.innerText = "Please input valid Email";
        if (window.innerWidth > 640) {
            if (lengthEmail >= 1 && lengthEmail <= 30){
                validEmail.style.setProperty('grid-column','span initial');
                validEmail.style.setProperty('display','None');
                valid = true;
            }else {
                validEmail.style.setProperty('display','initial');
                valid = false;
            }
        }else {
            validEmail.style.setProperty('grid-column','span 12');
            if (lengthEmail >= 1 && lengthEmail <= 30){
                validEmail.style.setProperty('display','None');
                valid = true;
            }else {
                validEmail.style.setProperty('display','initial');
                valid = false;
            }
        }
        
        //show validation information about confirm-email 
        const confirmEmailValue = confirmEmailEl.value;
        const lengthConfirm = confirmEmailValue.length;
        validConfirmEmail.innerText = "Please input the same Email";
        if (window.innerWidth > 640) {
            validConfirmEmail.style.setProperty('grid-column','span initial');
            if (lengthConfirm >= 1 && lengthConfirm <= 30){
                validConfirmEmail.style.setProperty('display','None');
                valid = true;
            } 
            if (lengthConfirm < 1 || lengthConfirm > 30 || confirmEmailEl.value !== emailEl.value){
                validConfirmEmail.style.setProperty('display','initial');
                valid = false;
            }
        }else {
            validConfirmEmail.style.setProperty('grid-column','span 12');
            if (lengthConfirm >= 1 && lengthConfirm <= 30){
                validConfirmEmail.style.setProperty('display','None');
                valid = true;
            }
            if (lengthConfirm < 1 || lengthConfirm > 30 || confirmEmailEl.value !== emailEl.value){
                validConfirmEmail.style.setProperty('display','initial');
                valid = false;
            }
        }
        
        
        if (!isName || !valid){
            event.preventDefault();
        }
    });
}

// check name input field and show validation information
function checkName() {
    nameEl.addEventListener('input',(event) => {
        const nameValue = event.target.value;
        const length = nameValue.length;
        if (window.innerWidth > 640) {
            if (length > 2 && length <= 30){
                validName.style.setProperty('display','None');
                isName = true;
            }else {
                validName.style.setProperty('display','initial');
                isName = false;
            }
        }else {
            if (length > 2 && length < 30){
                validName.style.setProperty('display','None');
                isName = true;
            }else{
                validName.style.setProperty('display','initial');
                isName = false;
            }
        }
    });
    nameEl.addEventListener('keydown',(event) => {
        if (event.key === "-"){
            event.preventDefault();
        }
    });
}

//global navigation button
function navButtonListener() {
    for (const dropdown of dropdowns){
        const button = dropdown.querySelector('.globalnav__button');
        const submenu = dropdown.querySelector('.globalnav__submenu');
        button.addEventListener('click',() =>{
            submenu.classList.toggle('globalnav__submenu-onclick');
        });
    }
}