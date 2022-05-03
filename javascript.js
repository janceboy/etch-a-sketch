let colContainer = document.querySelector('.container')

const addDiv = document.createElement('div')


function addDivs() {
    const addDiv = document.createElement('div')
    addDiv.classList.add('grid')
    colContainer.append(addDiv)
}    


for (let i = 0; i < 256; i++) {
        addDivs()
    }

const addHover = document.querySelectorAll('.container > div')

for (let i = 0; i < addHover.length; i++){
    addHover[i].addEventListener("mouseenter", function() {
        event.target.style.backgroundColor = "black";
    })
}