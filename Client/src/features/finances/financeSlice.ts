import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import { authSliceState } from '../../types/authTypes'
import { UserType } from '../../types/userType'
import { financeTypesState, financeType } from '../../types/financeTypes'
import financeService from './financeService'

const initState: financeTypesState = {
  financeData: [] | null,
  incomesData: [] | null,
  expensesData: [] | null,
  error: false,
  success: false,
  loading: false,
  message: '',
}

export const getFinances = createAsyncThunk(
  'finance/getData',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token as string
      return await financeService.getFinancialData(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const createFinance = createAsyncThunk(
  'finance/create',
  async (finance: financeType, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token as string
      return await financeService.createFinance(token, finance)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const financeSlice = createSlice({
  name: 'finance',
  initialState: initState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.success = false
      state.error = false
      state.message = ''
    },
    getExpenses: (state) => {
      state.expensesData = state.financeData?.filter(
        (item) => item.type === 'expense'
      )
    },
    getIncomes: (state) => {
      state.incomesData = state.financeData?.filter(
        (item) => item.type === 'income'
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFinances.pending, (state) => {
        state.loading = true
      })
      .addCase(getFinances.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.financeData = action.payload
      })
  },
})

export const { reset, getExpenses, getIncomes } = financeSlice.actions
export default financeSlice.reducer
