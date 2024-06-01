
import { useSelector } from 'react-redux'
import './App.css'
import Counter from './Components/Counter'
import Login from "./Components/Login"
import Dashboard from './Components/Dashboard'


function App() {
  const login = useSelector((state)=> state.auth.isLoggedIn)
  return (


    <>
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
    <div  className="max-w-7xl w-full">
    
    {login ? <Dashboard/> : <Login/>} 
    
    </div>
    </main>
    
    </>
  )
}

export default App
