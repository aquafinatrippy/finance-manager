import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomeView } from './views/HomeView'
import { Header } from './components/Header'
import { LoginView } from './views/LoginView'
import { PrivateRoute } from './components/PrivateRoute'
import { Toaster } from '@/components/ui/toaster'
import { RegisterView } from './views/RegisterView'
import { CreateFinance } from './views/CreateFinance'

function App() {
  return (
    <Router>
      <div className='bg-gray-900 min-h-screen'>
        <Header />
        <div className='flex justify-center items-center h-full'>
          <div className='container mx-auto px-4 py-8 '>
            <Routes>
              <Route path='/' element={<PrivateRoute />}>
                <Route path='/' element={<HomeView />} />
              </Route>
              <Route path='/login' element={<LoginView />} />
              <Route path='/register' element={<RegisterView />} />
              <Route path='/create-finance' element={<PrivateRoute />}>
                <Route path='/create-finance' element={<CreateFinance />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
      <Toaster />
    </Router>
  )
}

export default App
