const sal = document.querySelector('.answer')
fetch('./answer.html')
.then(res=>res.text())
.then(data=>{
    sal.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('dashboard').textContent)
}) 
