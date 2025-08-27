import { Text, View } from "react-native";
import { Expense } from "../../constants/types";

interface ExpensesSummaryProps {
  expenses: Expense[];
  periodName: string;
}

function ExpensesSummary({ expenses, periodName }: ExpensesSummaryProps) {
  const expensesSum = expenses.reduce(
    (accumulator, expense) => accumulator + expense.amount,
    0
  );

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
