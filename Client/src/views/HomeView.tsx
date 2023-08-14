import { useNavigate } from 'react-router-dom'
import { Button } from '../@/components/ui/button'
import { FinanceCard } from '../components/FinanceCard'
import { FinancialCard } from '../components/FinancialCard'
import { DataChart } from '../components/DataChart'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { useEffect } from 'react'
import { getExpenses, getFinances } from '../features/finances/financeSlice'

export const HomeView = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { expensesData } = useAppSelector((state) => state.finances)
  console.log(expensesData)

  useEffect(() => {
    const getData = async () => {
      try {
        await dispatch(getFinances())
        dispatch(getExpenses())
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const dummyData = [
    { sum: 400, title: 'Total Earning' },
    { sum: 400, title: 'Total Spending' },
    { sum: 400, title: 'Free money' },
  ]

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {dummyData.map(({ sum, title }, index) => (
          <FinanceCard sum={sum} title={title} key={index} />
        ))}
      </div>
      <div className='h-80'>
        <DataChart />
      </div>
      <div className='mt-4'>
        <Button onClick={() => navigate('/create-income')} variant='ghost'>
          Add income
        </Button>
        <FinancialCard
          title='title'
          totalAmount='100'
          description='test'
          type='income'
        />
      </div>
      <div className='mt-4'>
        <Button onClick={() => navigate('/create-expense')} variant='ghost'>
          Add expense
        </Button>
        {expensesData?.map(({ title, total_amount, description }) => (
          <FinancialCard
            title={title}
            totalAmount={total_amount}
            description={description}
            type='expense'
          />
        ))}
      </div>
    </div>
  )
}
