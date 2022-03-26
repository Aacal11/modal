

const clicked = document.querySelector("#click")
const modals = document.querySelector(".messege")
const close = document.querySelector("#close")
// const hide = document.querySelector("#hidden")



clicked.addEventListener ('click', () => {
    modals.classList.add('active')
})


close.addEventListener('click', () => {
    modals.classList.remove('active')
    console.log("hide")
})




