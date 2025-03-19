import React from "react";
import { useGlobalContext } from "../context/GlobalState";

export default function Balance() {
	const { transactions } = useGlobalContext();
	console.log("transaction", transactions)
	const amounts = transactions.map((transaction) => transaction.amount);
	const total = amounts
		.reduce((prevAmount, currentAmount) => prevAmount + currentAmount,0) || 0

	return (
		<div>
			<h2 className="font-semibold text-sm text-gray-600">
				YOUR BALANCE
			</h2>
			<h1 className="font-bold text-4xl text-gray-700">${total.toFixed(0)}</h1>
		</div>
	);
}
