import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
	const { addTransaction } = useGlobalContext();
	const [formData, setFormData] = useState({
		text: "",
		amount: 0,
	});

	function handleSubmitForm(e) {
		e.preventDefault();
		console.log("Form", formData);
		addTransaction(formData);
		setFormData({
			text: "",
			amount: 0,
		});
	}

	return (
		<div>
			<h4 className="border-b border-gray-400 pb-2 font-semibold text-gray-700">
				Add New Transaction
			</h4>

			<form onSubmit={handleSubmitForm} className="mt-4 space-y-4">
				<div className="flex flex-col items-start space-y-1">
					<label
						className="font-semibold text-gray-800 text-sm"
						htmlFor="text"
					>
						Text
					</label>
					<input
						type="text"
						name="text"
						value={formData.text}
						onChange={(e) =>
							setFormData({ ...formData, text: e.target.value })
						}
						className="border w-full px-3 py-2.5 border-gray-400 rounded-md text-sm outline-0"
						placeholder="Enter text..."
					/>
				</div>
				<div className="flex flex-col items-start space-y-1">
					<label
						className="font-semibold text-gray-800 text-sm"
						htmlFor="text"
					>
						Amount (+Amount or -Amount)
					</label>
					<input
						type="number"
						name="amount"
						value={formData.amount}
						onChange={(e) =>
							setFormData({ ...formData, amount: e.target.value })
						}
						className="border w-full px-3 py-2.5 border-gray-400 rounded-md text-sm outline-0"
						placeholder="Enter amount..."
					/>
				</div>

				<button
					type="submit"
					className="bg-indigo-500 active:bg-indigo-600 text-white w-full p-3 text-sm rounded-md font-semibold cursor-pointer"
				>
					Add transaction
				</button>
			</form>
		</div>
	);
}
