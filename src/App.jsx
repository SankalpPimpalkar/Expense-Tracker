import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";

export default function App() {
	return (
		<div className="w-full min-h-dvh flex flex-col justify-center items-center">
			<div className="w-full max-w-md space-y-8">
				<Header />
				<div className="space-y-6 p-5">
					<Balance />
					<IncomeExpense />
					<TransactionHistory />
					<AddTransaction />
				</div>
			</div>
		</div>
	);
}
