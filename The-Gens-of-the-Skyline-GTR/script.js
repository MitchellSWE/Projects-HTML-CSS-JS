const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => { //Looping through each panel so when the user clicks the image, it would open a different generation and remove the previous active class
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active') //When the user click on the image it becomes an active class
    })
})

function removeActiveClasses(){ //To remove the previous active class
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}