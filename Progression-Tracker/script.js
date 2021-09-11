
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => { //The next button waiting for user to click it and runs a function that will increment the current active by one but not going over 4
    currentActive++

    if (currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})

prev.addEventListener('click', () => { //The prev button waiting for user to click it and runs a function that will decrement the current active till it reaches 1
    currentActive--
    if(currentActive < 1) {
        currentActive = 1
    }
    update()
}) 

function update() { //Update the progression circles depending on what active number it is at 
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

   progress.style.width = (actives.length -1) / (circles. length - 1) * 100 + '%' // progression line going to each circle till it reaches the end (4)

   if(currentActive === 1){ // determines when the next and prev button is enabled or disables depending on the current active and circle length
       prev.disabled = true
   } else if (currentActive === circles.length){
       next.disabled = true
   } else {
       prev.disabled = false
       next.disabled = false
   }
}
