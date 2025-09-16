export interface Expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

export type RootStackParamList = {
  ExpensesOverview: undefined;
  ManageExpense: { expenseId: string } | undefined;
};

export type BottomTabsParamList = {
  RecentExpenses: undefined;
  AllExpenses: undefined;
  ManageExpense: { expenseId: string } | undefined;
};
