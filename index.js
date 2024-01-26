let divs = []
let removeDivs = []

const container = document.querySelector('.container')

function createDivs(number = 32){
    for(let i = 0; i < number; i++){
        const div = document.createElement('div')
        div.classList.add('grid-item')
        divs.push(div)
        removeDivs.push(div)
    }
    

    divs.forEach(div => container.appendChild(div))

    

    

}

createDivs()


const button = document.querySelector('button')

let userDesire 

button.addEventListener('click', () => {
    
    divs = []
    removeDivs.forEach(div => container.removeChild(div))
    removeDivs = []
    userDesire = prompt()
    
    createDivs(userDesire)
})

