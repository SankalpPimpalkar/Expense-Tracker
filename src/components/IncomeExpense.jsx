import React from "react";
import { useGlobalContext } from "../context/GlobalState";

export default function IncomeExpense() {
	const { transactions } = useGlobalContext();
	const amounts = transactions.map((transaction) => transaction.amount);
	const incomeAmount =
		amounts
			.filter((amount) => amount > 0)
			.reduce((prev, curr) => prev + curr, 0) || 0;
	const expenseAmount =
		amounts
			.filter((amount) => amount < 0)
			.reduce((prev, curr) => prev + curr, 0) || 0;

	return (
		<div className="text-gray-700">
			<div className="border border-gray-300 rounded-md flex divide-x divide-gray-300 p-4 shadow">
				<div className="w-full p-1 text-center">
					<h5 className="font-semibold text-lg">Income</h5>
					<p className="text-xl font-semibold text-green-500">
						{Math.abs(incomeAmount).toFixed(2)}
					</p>
				</div>
				<div className="w-full p-1 text-center">
					<h5 className="font-semibold text-lg">Expense</h5>
					<p className="text-xl font-semibold text-red-500">
						{Math.abs(expenseAmount).toFixed(2)}
					</p>
				</div>
			</div>
		</div>
	);
}
