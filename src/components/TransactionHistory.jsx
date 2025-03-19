import React from "react";
import { useGlobalContext } from "../context/GlobalState";

export default function TransactionHistory() {
	const { transactions, deleteTransaction } = useGlobalContext();

	return (
		<div>
			<h4 className="border-b border-gray-400 pb-2 font-semibold text-gray-700">
				History
			</h4>

			<ul
				style={{ scrollbarWidth: "thin" }}
				className="space-y-2 mt-2 overflow-y-auto h-56"
			>
				{transactions.length > 0 ? (
					transactions.map((transaction) => (
						<li
							key={transaction.id}
							className="w-full border group border-gray-300 rounded-l-md shadow"
						>
							<div
								className={`relative flex items-center justify-between bg-white p-3 border-r-5 rounded-l-md ${
									transaction.amount > 0
										? "border-green-500"
										: "border-red-500"
								}`}
							>
								<h6 className="text-gray-500 text-sm font-medium">
									{transaction.text}
								</h6>

								<div className="flex items-center gap-5">
									<p className="font-semibold text-gray-600 text-sm">
										{transaction.amount}
									</p>
									<button
										className="left-0 text-red-400 cursor-pointer hidden group-hover:block"
										onClick={() =>
											deleteTransaction(transaction.id)
										}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-trash-2"
										>
											<path d="M3 6h18" />
											<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
											<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
											<line
												x1="10"
												x2="10"
												y1="11"
												y2="17"
											/>
											<line
												x1="14"
												x2="14"
												y1="11"
												y2="17"
											/>
										</svg>
									</button>
								</div>
							</div>
						</li>
					))
				) : (
					<p className="text-sm text-gray-600">
						No transactions yet
					</p>
				)}
			</ul>
		</div>
	);
}
