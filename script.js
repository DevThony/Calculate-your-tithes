const btnEl = document.getElementById("calculate")
const incomeInput = document.getElementById("income")
const percent = 0.1;
const totaltitheSpan = document.getElementById("total tithe")

function calculateTithe() {
    const incomeValue = incomeInput.value;
    const percentValue = percent;
    const totaltitheValue = percentValue * incomeValue;
    totaltitheSpan.innerText = totaltitheValue;
}

btnEl.addEventListener("click", calculateTithe);