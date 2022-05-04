let colContainer = document.querySelector('.container')

const addDiv = document.createElement('div')


function addDivs() {
    const addDiv = document.createElement('div')
    addDiv.classList.add('grid')
    colContainer.append(addDiv)
}    





const btn = document.querySelector('.new')


btn.addEventListener('click', function() {
    let styleBox = document.querySelector('.container')
    styleBox.replaceChildren()
    let gridSize;

    gridSize = +prompt('How big of a grid do you want. max 100')
    // let setSize = 'repeat(gridSize, 20px)'
    styleBox.style.gridTemplateColumns = 'repeat(16, 20px)';

    let squareSize = gridSize * gridSize

    for (let i = 0; i < squareSize; i++) {

        addDivs()
    }

    const addHover = document.querySelectorAll('.container > div')

    for (let i = 0; i < addHover.length; i++){
        addHover[i].addEventListener("mouseenter", function(event) {
            event.target.style.backgroundColor = "black";
        })
    }
})