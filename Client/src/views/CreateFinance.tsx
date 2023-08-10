import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '../@/components/ui/button'

export const CreateFinance = () => {
  return (
    <div className='flex justify-center flex-col align-middle'>
      {' '}
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='email'>Name</Label>
        <Input id='name' placeholder='Name' />
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='email'>Description</Label>
        <Input id='description' placeholder='Description' />
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='email'>Total Amount</Label>
        <Input type='number' id='total-amount' placeholder='Total Amount' />
      </div>
      <div
        className='mt-2
      '>
        <Button variant='ghost'>Add Expense</Button>
      </div>
    </div>
  )
}
