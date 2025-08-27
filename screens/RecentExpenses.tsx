import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpenses() {
  return <ExpensesOutput expenses={[]} expensesPeriod="Last 7 Days" />;
}

export default RecentExpenses;
