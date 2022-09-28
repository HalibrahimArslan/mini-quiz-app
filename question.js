let sorular = [
    {
        "id": 1,
        "Soru": "Türkiyeninininini başkenti neresidir ?"
    },
    {
        "id": 2,
        "Soru": "Türkiyenin en kuzeyi neresidir ?"
    },
    {
        "id": 3,
        "Soru": "Türkiyenin en güneyi neresidir ?"
    }
];



function generateHtml(index) {
    let data = sorular.filter(x => x.id === index);
    console.log(data);
    let html = '<div id="question"><div class="questionOrder">' + data[0].id + '/' + sorular.length + '</div>' + '<div class="firstQuestion">' + data[0].Soru + '</div>' + '</div>';
    return html;
}


function nextClick() {
    let form = document.getElementById('next');
    form.addEventListener('click', function (event) {
        event.preventDefault();
        let instantData = localStorage.getItem("number");
        console.log(instantData);
        let nextCount = parseInt(instantData) + 1;
        if (nextCount <= sorular.length) {
            localStorage.setItem('number', nextCount);
            generateQuestionPage();

        }

    })
}


function prevClick() {
    let form = document.getElementById('back');
    form.addEventListener('click', function (event) {
        event.preventDefault();

        let instantData = localStorage.getItem("number");
        console.log(instantData);
        let nextCount = parseInt(instantData) - 1;
        if (nextCount >= 1) {
            localStorage.setItem('number', nextCount);
            generateQuestionPage();

        }

    })
}


function generateQuestionPage() {
    const sal = document.querySelector('.tableQuestion')
    fetch('./question.html')
        .then(res => res.text())
        .then(data => {
            let counter = localStorage.getItem("number");
            sal.innerHTML = generateHtml(parseInt(counter))
            const parser = new DOMParser()
            const doc = parser.parseFromString(data, 'text/html')
            eval(doc.querySelector('question').textContent)
        })


}


nextClick();
prevClick();
generateQuestionPage();







