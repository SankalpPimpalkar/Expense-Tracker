import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalState";
import fetchCurrencies from "../api/fetchCurrencies";

export default function Balance() {
	const { transactions, updateConversionRate } = useGlobalContext();
	const [currencyData, setCurrencyData] = useState([]);
	const [selectedCurrency, setSelectedCurrency] = useState({ code: "INR", value: 1 });

	const total = transactions.reduce((prev, curr) => prev + curr.amount, 0) || 0;

	function handleCurrencyExchange(event) {
		const newCurrency = currencyData.find((currency) => currency.code === event.target.value);
		if (newCurrency) {
			setSelectedCurrency(newCurrency);
			updateConversionRate(newCurrency.value);
		}
	}

	useEffect(() => {
		async function handleFetchCurrency() {
			const currencies = await fetchCurrencies();
			const currencyArray = Object.values(currencies?.data || {});
			setCurrencyData(currencyArray);

			const inrCurrency = currencyArray.find((currency) => currency.code === "INR") || currencyArray[0];
			setSelectedCurrency(inrCurrency);
		}

		handleFetchCurrency();
	}, []);

	return (
		<div className="flex items-center justify-between">
			<div>
				<h2 className="font-semibold text-sm text-gray-600">YOUR BALANCE</h2>
				<h1 className="font-bold text-4xl text-gray-700">
					${Number(total.toFixed(2)).toLocaleString("en-IN")}
				</h1>
				<p className="font-medium text-xs text-gray-500">
					{selectedCurrency?.code}{" "}
					{Number((selectedCurrency?.value * total).toFixed(2)).toLocaleString("en-IN")}
				</p>
			</div>

			{/* Currency Selector */}
			<div className="relative w-full max-w-[12rem]">
				<select
					className="appearance-none w-full border px-3 py-2.5 rounded-md border-gray-300 outline-none bg-white pr-8 text-sm text-gray-500"
					value={selectedCurrency?.code}
					onChange={handleCurrencyExchange}
				>
					{currencyData.map((currency) => (
						<option key={currency.code} value={currency.code}>
							{currency.code}
						</option>
					))}
				</select>

				{/* Up & Down Arrows */}
				<div className="absolute inset-y-0 right-2 flex flex-col justify-center items-center pointer-events-none space-y-0.5">
					<svg className="w-3 h-3 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M5.293 12.707a1 1 0 011.414 0L10 9.414l3.293 3.293a1 1 0 101.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z" clipRule="evenodd" />
					</svg>
					<svg className="w-3 h-3 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
					</svg>
				</div>
			</div>
		</div>
	);
}
