const amountInput = document.querySelector("#amount"),
    firstOption = document.querySelector("#firstCurrencyOption"),
    secondOption = document.querySelector("#secondCurrencyOption"),
    resultInput = document.querySelector("#result");

const currency = new Currency();

runEventListeners();

function runEventListeners() {
    amountInput.addEventListener("input", exchange);
    firstOption.addEventListener("input", exchange);
    secondOption.addEventListener("input", exchange);
}

function exchange() {
    const amount = Number(amountInput.value.trim());
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;


    currency.exchange(amount, firstOptionValue, secondOptionValue)
        .then((result) => {
            resultInput.value = result.toFixed(2)
        })
}