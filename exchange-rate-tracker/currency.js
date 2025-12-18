class Currency {
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=YOUR_API_KEY&base_currency=";
    }

    async exchange(amount, firstCurrency, secondCurrency) {

        try {
            const response = await fetch(`${this.url}${firstCurrency}`);

            if (!response.ok) {
                throw new Error("API request failed");
            }
            const result = await response.json();

            if (!result.data[secondCurrency]) {
                throw new Error("Exchange rate not found");
            }
            const exchangedResult = amount * result.data[secondCurrency];
            return exchangedResult;

        } catch (error) {
            alert("Something went wrong");
            console.error(error);
            return null;
        }
    }
}