import axios from 'axios'
import { financeType } from '../../types/financeTypes'

const API_URL = '/api/finance'

const createFinance = async (token: string, financeData: financeType) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const res = await axios.post(API_URL + '/create', financeData, config)
  return res.data
}

const getFinancialData = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const res = await axios.get(API_URL, config)
  return res.data
}

const financeService = {
  getFinancialData,
  createFinance,
}

export default financeService
