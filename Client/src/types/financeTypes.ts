export interface financeType {
  _id?: string
  title: string
  description: string
  total_amount: string
  created_by?: string
  createdAt?: string
  updatedAt?: string
  type: string
}

export interface financeTypesState {
  financeData: financeType[] | null
  expensesData: financeType[] | null
  incomesData: financeType[] | null

  error: boolean
  success: boolean
  loading: boolean
  message: string | null
}
