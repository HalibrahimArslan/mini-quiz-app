function control(formId){
    console.log("Hello World")
    console.log(document.getElementById(formId).querySelectorAll(':invalid'));
}

function changeControl(){
    let name;
    const formName = document.getElementById('name');

    formName.addEventListener('change',() => {
        
    })
     


}

function submitClick(){
    let form = document.getElementById('loginForm');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        let formName = document.getElementById('name').value;
        let formSurname = document.getElementById('surname').value;

        localStorage.setItem('formName',formName);
        localStorage.setItem('formSurname',formSurname);

        console.log(formName,formSurname);
        window.location.assign("/dashboard.html")   
       
    })
}


changeControl();
submitClick();

