const textA1 = document.getElementById("textarea")
const totalC1 = document.getElementById("total-counter")
const remainingC1 = document.getElementById("remaining-counter")

textA1.addEventListener("keyup", () => {
    updateCounter()
})

updateCounter()

function updateCounter() {
    totalC1.innerText = textA1.value.length

    remainingC1.innerText = textA1.getAttribute("maxLength") - textA1.value.length
}