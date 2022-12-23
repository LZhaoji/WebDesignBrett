"user strict";

const registerButtons = document.querySelectorAll('.card__cta');
const closeButton = document.querySelector('.form__button-cancel');
const dialogEl = document.querySelector('.register__form');

let isName = false;
let valid = false;

const nameEl = document.querySelector('.form__name-input');
const validName = document.querySelector('.form__name-valid');
const emailEl = document.querySelector('.form__email-input');
const validEmail = document.querySelector('.form__email-valid');
const confirmEmailEl = document.querySelector('.form__confirm-email-input');
const validConfirmEmail = document.querySelector('.form__confirm-email-valid');
const formEl = document.querySelector('.form');


(function(){
    showDialog();
    closeDialog();
    checkName();
    submitForm();
})();



// open and close dialog
function showDialog(){
    for (const registerButton of registerButtons){
        registerButton.addEventListener('click', () => {
            dialogEl.showModal();
        });
    }
}

function closeDialog(params) {
    closeButton.addEventListener('click', () => {
        dialogEl.close();
    });
}

//this function is for checking email and confirm-email when submit the form
function submitForm() {
    formEl.addEventListener('submit',(event) => {
        //show validation information about email
        const emailValue = emailEl.value;
        const lengthEmail = emailValue.length;
        validEmail.innerText = "Please input valid Email";
        //如果email没输入，就显示提示信息，标识位为false
        if (lengthEmail < 1){
            validEmail.style.setProperty('display','initial');
            valid = false;
        }else {
            validEmail.style.setProperty('display','None');
        }
        //正则表达式检查填入的邮箱号是否包含@ 符号，如果不满足，显示提示信息，标识位为false      
        var pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        var check = pattern.test(emailValue);
        if (check){
            valid = true;
            validEmail.style.setProperty('display','None');
        }else {
            validEmail.style.setProperty('display','initial');
            valid = false;
        }
        
        //show validation information about confirm-email 
        const confirmEmailValue = confirmEmailEl.value;
        validConfirmEmail.innerText = "Please input the same Email";
        //如果两个value不相等，就显示提示信息，标识位false
        if (confirmEmailValue.length < 1 || confirmEmailValue !== emailValue){
            valid = false;
            validConfirmEmail.style.setProperty('display','initial');
        }else {
            valid = true;
            validConfirmEmail.style.setProperty('display','None');
        }
        
        //只要有一个标识位为false，就不让提交表单
        if (!isName || !valid){
            event.preventDefault();
        }
    });
}

// check name input field and show validation information
function checkName() {
    nameEl.addEventListener('input',(event) => {
        const length = event.target.value.length;
        //如果不满足长度条件，显示提示信息，标识位为false
        if (length > 2 && length <= 30){
            validName.style.setProperty('display','None');
            isName = true;
        }else {
            validName.style.setProperty('display','initial');
            isName = false;
        }
    });
    nameEl.addEventListener('keydown',(event) => {
        if (event.key === "-"){
            event.preventDefault();
        }
    });
}

