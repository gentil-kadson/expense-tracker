import { StyleSheet, Text, View } from "react-native";
import { Expense } from "../../constants/types";
import { GlobalStyles } from "../../constants/styles";

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
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
