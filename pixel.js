const containerTag = document.querySelector('.container')

// Added the outer pad to the DOM.
const pad = document.createElement('div')
pad.className = 'pad'
containerTag.appendChild(pad)



const getDiv = (name) => {
    let result = document.createElement('div')
    result.className = name

    return result
}

const boxSize = 20
const borderSize = 1
const colorBoxSize = 20
const colorBorderSize = 1
const rowCount = 25
const colCount = 25

pad.style.width = boxSize * colCount
pad.style.height = boxSize * rowCount

let currentColor = 'white'

for (let col=0; col<colCount; col+=1) {
    const rowDiv = getDiv('row-div')

    for(let row=0; row<rowCount; row+=1) {
        const box = document.createElement('div')
        box.className = 'box'
        box.style.width = boxSize - 2 * borderSize
        box.style.height = boxSize - 2 * borderSize

        box.addEventListener('click', (evt)=>{
            box.style.backgroundColor = currentColor
            box.style.borderColor = currentColor
        })

        rowDiv.appendChild(box)
    }
    
    // Adding row of boxes (in theory) to the pad.
    pad.appendChild(rowDiv)
}



const colors = ['red', 'orange', 'yellow', 
                'green', 'blue', 'purple', 
                'brown', 'gray', 'black', 'white']


// Surrounding each button with a div. Allows for laying out the buttons horizontally.
const colorDiv = getDiv('color-div')

// Add color buttons.
for (let col=0; col<colors.length; col+=1) {
    const box = document.createElement('div')
    box.className = 'color'
    box.id = colors[col]
    box.style.backgroundColor = colors[col]
    
    // Dynamically size the color boxes based on the defined constants.
    box.style.width = colorBoxSize - 2 * colorBorderSize
    box.style.height = colorBoxSize - 2 * colorBorderSize

    box.addEventListener('click', (evt)=>{
        // Reset the border of the previously selected color.
        previousBox = document.querySelector(`#${currentColor}`)
        previousBox.style.border = '1px solid black'

        // Embiggen the border of the newly selected color.
        currentColor = evt.srcElement.style.backgroundColor
        box.style.border = '3px solid black'
    })

    colorDiv.appendChild(box)
}

containerTag.appendChild(colorDiv)

