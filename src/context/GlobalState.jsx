import { createContext, useReducer, useContext } from "react";

// Initial state
const INITIAL_STATE = {
	transactions: JSON.parse(localStorage.getItem("transactions")) || [],
	deleteTransaction: (id) => {},
	addTransaction: ({ text, amount }) => {},
	conversionRate: 84,
	updateConversionRate: (rate) => {}
};

// App Reducer
function APP_REDUCER(state, action) {
	let updatedStore;
	switch (action.type) {
		case "DELETE":
			updatedStore = JSON.stringify(
				state.transactions.filter(
					(transaction) => transaction.id != action.payload
				)
			);

			localStorage.setItem("transactions", updatedStore);

			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id != action.payload
				),
			};

		case "ADD":
			updatedStore = JSON.stringify([
				...state.transactions,
				{
					id: state.transactions.length + 1,
					text: action.payload.text,
					amount: action.payload.amount,
				},
			]);

			localStorage.setItem("transactions", updatedStore);

			return {
				...state,
				transactions: [
					...state.transactions,
					{
						id: state.transactions.length + 1,
						text: action.payload.text,
						amount: action.payload.amount,
					},
				],
			};

		case "CONVERT":
			return {
				...state,
				conversionRate: action.payload,
			};

		default:
			return state;
	}
}

const GlobalContext = createContext(INITIAL_STATE);

export default function GlobalStateProvider({ children }) {
	const [state, dispatch] = useReducer(APP_REDUCER, INITIAL_STATE);

	// Actions
	function deleteTransaction(id) {
		dispatch({
			type: "DELETE",
			payload: id,
		});
	}

	function addTransaction({ text, amount }) {
		dispatch({
			type: "ADD",
			payload: {
				text: text,
				amount: Number(amount),
			},
		});
	}

	function updateConversionRate(conversionRate) {
		dispatch({
			type: "CONVERT",
			payload: conversionRate,
		});
	}

	const values = {
		transactions: state.transactions,
		deleteTransaction,
		addTransaction,
		updateConversionRate,
		conversionRate: state.conversionRate
	};

	return (
		<GlobalContext.Provider value={values}>
			{children}
		</GlobalContext.Provider>
	);
}

export const useGlobalContext = () => useContext(GlobalContext);
