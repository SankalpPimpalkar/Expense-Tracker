import axios from "axios";

export default async function fetchCurrencies() {
	const response = await axios.get(import.meta.env.VITE_CURRENCY_API);
	return response.data;
}
