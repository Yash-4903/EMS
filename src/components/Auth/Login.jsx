import React , {useState} from 'react'

const Login = ({handleLogin}) => {

  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-900">
      <div className="shadow-xl bg-violet-700 p-10 rounded-3xl border border-gray-300 w-96">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <form onSubmit={(e)=>{
            submitHandler(e)
            }} 
            className="flex flex-col space-y-4"
            >
            <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}  
            required 
            placeholder='Enter Email'
            className="border border-gray-300  rounded-lg px-4 py-2 bg-violet-600 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }} 
            required 
            className="border border-gray-300 rounded-lg px-4 py-2 bg-violet-600 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            type="Password" 
            placeholder='Enter password' />
            <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition-all duration-300">Login</button>
          </form>
      </div>
    </div>
  )
}

export default Login