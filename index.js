function control(formId){
    console.log("Hello World")
    console.log(document.getElementById(formId).querySelectorAll(':invalid'));
}

function clearLocalStorage(){
    localStorage.clear();
}

function submitClick(){
    let form = document.getElementById('loginForm');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        let formName = document.getElementById('name').value;
        let formSurname = document.getElementById('surname').value;

        localStorage.setItem('formName',formName);
        localStorage.setItem('formSurname',formSurname);
        localStorage.setItem('number',1);

        window.location.assign("/dashboard.html")   
       
    })
}

submitClick();
clearLocalStorage();

