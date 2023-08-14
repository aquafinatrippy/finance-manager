import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '../@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useAppDispatch } from '../hooks/useRedux'
import { useState } from 'react'
import { createFinance } from '../features/finances/financeSlice'
import { financeType } from '../types/financeTypes'
import { useNavigate } from 'react-router-dom'

export const CreateExpense = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [fieldsData, setFieldsData] = useState<financeType>({
    title: '',
    description: '',
    total_amount: '',
    type: 'expense',
  })

  const onChange = (e: any) => {
    setFieldsData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = () => {
    dispatch(createFinance(fieldsData))
    navigate('/')
  }

  return (
    <div className='flex justify-center flex-col align-middle w-1/3 mx-auto'>
      <h2 className='text-white'>Create Expense</h2>{' '}
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='email'>Title</Label>
        <Input onChange={onChange} id='title' placeholder='Title' />
      </div>
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='email'>Description</Label>
        <Textarea
          onChange={onChange}
          id='description'
          placeholder='Description'
        />
      </div>
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='amount'>Total Amount</Label>
        <Input
          onChange={onChange}
          type='number'
          id='total_amount'
          placeholder='Total Amount'
        />
      </div>
      <div
        className='mt-2
        mx-auto
      '>
        <Button onClick={() => onSubmit()} variant='outline'>
          Add Expense
        </Button>
      </div>
    </div>
  )
}
