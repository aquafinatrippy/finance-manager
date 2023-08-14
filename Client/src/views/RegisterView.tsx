import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { login, signUp } from '../features/auth/authSlice'
import { useToast } from '@/components/ui/use-toast'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(4).max(20),
  name: z.string().min(3).max(50),
})

export const RegisterView = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { user, error, message, success } = useAppSelector(
    (state) => state.auth
  )
  const { toast } = useToast()

  useEffect(() => {
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error with registering the user',
        description: message,
      })
    }
    if (success || user) {
      toast({
        title: 'Register successfull',
        description: `Welcome aboard ${user?.name}`,
      })
      localStorage.setItem('token', user?.token)
      navigate('/')
    }
  }, [user, message, error])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    dispatch(signUp(values))
  }

  return (
    <div className='bg-gray-800 mx-auto text-white rounded-lg shadow-md p-6 w-80'>
      <h2 className='text-xl font-semibold mb-4'>Register</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='User Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='User Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='User Password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex justify-center'>
            <Button type='submit'>Register</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
