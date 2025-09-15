import { FlatList, ListRenderItemInfo, Text } from "react-native";
import { Expense } from "../../constants/types";
import ExpenseItem from "./ExpenseItem";

interface ExpensesListProps {
  expenses: Expense[];
}

function renderExpenseItem(itemData: ListRenderItemInfo<Expense>) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
