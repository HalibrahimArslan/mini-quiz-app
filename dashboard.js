
  document.getElementById("name").innerHTML = localStorage.getItem("formName");
  
  document.getElementById("surname").innerHTML = localStorage.getItem("formSurname");
  
   const nav = document.querySelector('.tableQuestion')
  fetch('./question.html')
  .then(res=>res.text())
  .then(data=>{
      nav.innerHTML=data
      const parser = new DOMParser()
      const doc = parser.parseFromString(data, 'text/html')
      eval(doc.querySelector('dashboard').textContent)
  }) 
  
