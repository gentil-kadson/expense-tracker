import { createContext, ReactNode, useReducer } from "react";
import { Expense } from "../constants/types";

interface ExpenseInput {
  description: string;
  amount: number;
  date: Date;
}

interface ExpensesContextData {
  expenses: Expense[];
  addExpense: (inputObj: ExpenseInput) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, inputObj: ExpenseInput) => void;
}

interface ExpensesContextProviderProps {
  children: ReactNode;
}

export const ExpensesContext = createContext<ExpensesContextData>({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(
  state: Expense[],
  action: {
    type: "ADD" | "UPDATE" | "DELETE" | undefined;
    payload: any;
  }
) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();

      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

const DUMMY_EXPENSES: Expense[] = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-09-17"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2025-09-12"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2025-09-11"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2025-08-06"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2025-08-27"),
  },
  {
    id: "e6",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2025-07-31"),
  },
  {
    id: "e7",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2025-05-10"),
  },
  {
    id: "e8",
    description: "A book",
    amount: 14.99,
    date: new Date("2025-03-17"),
  },
  {
    id: "e9",
    description: "Another book",
    amount: 18.59,
    date: new Date("2025-06-20"),
  },
];

function ExpensesContextProvider({ children }: ExpensesContextProviderProps) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData: ExpenseInput) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id: string) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id: string, expenseData: ExpenseInput) {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  }

  const value: ExpensesContextData = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
