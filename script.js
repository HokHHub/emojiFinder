import { data } from './data.js';
import { dataCopy } from './dataCopy.js';

let section = document.querySelector('.emojies__grid')
let form = document.querySelector('.form')
let input = document.querySelector('#input')

let addNewCard = (data) => {
    let newCard = document.createElement('div')
    newCard.classList.add('emojies__card', 'card')
    newCard.innerHTML =
        `<p class="card__ico">${data.symbol}</p>
    <a href="#" class="card__name">${data.title}</a>
    <p class="card__description">${Array.from(new Set(data.keywords.split(' '))).join(' ')}</p>`
    section.appendChild(newCard)
}

let addNewCardInSearch = (data, index) => {
    let newCard = document.createElement('div')
    newCard.classList.add('emojies__card', 'card')
    newCard.innerHTML =
        `<p class="card__ico">${data[index].symbol}</p>
    <a href="#" class="card__name">${data[index].title}</a>
    <p class="card__description">${Array.from(new Set(data[index].keywords.split(' '))).join(' ')}</p>`
    section.appendChild(newCard)
}

if(input.value === ''){
    for (let i = 0; i < data.length; i++) {
        addNewCard(data[i])
    }
} else {
    
}

form.addEventListener('input', (event) => {
    event.preventDefault()
    console.log('запрос отправлен');
    section.innerHTML = ``
    for (let index = 0; index < data.length; index++) {
        if (data[index].title.toLowerCase().includes(input.value.toLowerCase()) || data[index].keywords.toLowerCase().includes(input.value.toLowerCase())){
            dataCopy[0] = data[index]       
            addNewCardInSearch(dataCopy, 0)
        }       
    }
})
