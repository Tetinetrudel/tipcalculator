//select all the input
const billTotal = document.querySelector(".form-amount-input")
const tipPercent = document.querySelector("#custom")
const numPerson = document.querySelector(".form-people-input")
const tipBtn = [...document.querySelectorAll(".tipBtn")]
let split 

// finding the right percent selected
tipBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        let tipIndex = index
        const percent = tipBtn[tipIndex].innerHTML.valueOf()
        split = percent.replace("%", "")
        item.classList.add("selected")
    })
})

// initial value for tip and total bill per person
var amountPerPerson = "$" + "0.00"
var totalPerPerson = "$" + "0.00"

//selection of the reset button
const resetBtn = document.querySelector(".reset")

//selection of changing div
let amountDiv = document.querySelector(".tip-amount .amount")
let totalDiv = document.querySelector(".person-amount .amount")

window.addEventListener('load', () => {
    
    amountDiv.innerHTML = amountPerPerson
    totalDiv.innerHTML = totalPerPerson
})

//claculate the event
numPerson.addEventListener('change', () => {
    bill = parseInt(billTotal.value)

    if (split) {
        tip = split
    } else {
        tip = tipPercent.value
    }
    person = numPerson.value

    let errorMsg = document.querySelector(".error-message")
    console.log(split)

    if(bill == "" || tip == "") {
        return;

    } else if (person == 0) {
        let errorMsg = document.querySelector(".error-message")
        errorMsg.innerHTML = "Can't be zero"
        numPerson.classList.add("error")

    } else {
        amountPerPerson = (bill * (tip / 100) /person)
        amountRounded = parseFloat(amountPerPerson.toFixed(2))
        amountDiv.innerHTML = "$ " + amountRounded

        totalPerPerson = ((bill/person) + amountRounded)
        totalRounded = parseFloat(totalPerPerson.toFixed(2))
        totalDiv.innerHTML = "$ " + totalRounded
        resetBtn.removeAttribute("data-type")
        
        numPerson.classList.remove("error")
        errorMsg.innerHTML = ""
        console.log(amountPerPerson + ", " + totalRounded) 
        
    }
})
resetBtn.addEventListener('click', (e) => {
    e.preventDefault()

    billTotal.value = ""
    tipPercent.value = ""
    numPerson.value = ""

    amountDiv.innerHTML = amountPerPerson
    totalDiv.innerHTML = totalPerPerson
    numPerson.classList.remove("error")
    
    window.location.reload()
    console.log("reset all the input")
})