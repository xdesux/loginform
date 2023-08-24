import React, { useState } from 'react'

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    email.preventDefault();
    console.log(email);
  }
  return (
    <div className="flex flex-col pt-1 min-w-[300px] min-h-[390px] border-2 rounded-lg" ><br/>
      <h1 className="font-sans text-2xl font-bold center pb-4">Welcome Back</h1>
      <form className='login-form flex flex-col mx-2' onSubmit={handleSubmit}>
        <label className='text-left pt-1' htmlFor="">Email:</label>
        <input className='mt-2 pt-4 border-2 rounded-lg text-black  border-black' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='  desu@email.com' required />
        <label className='text-left pt-1' htmlFor="">Password: </label>
        <input className='mt-2 pt-4 border-2 rounded-lg text-black  border-black' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='  ******' required/>
        <br/>
        <button 
        className='rounded-2xl bg-white hover:bg-green-600 py-2 w-25'
        type='submit'>Login</button><br/><br/>
      </form>
      <p>Don't have an account? <button onClick={() => props.onFormSwitch('Register')} className=" link-btn bg-transpernt text-black text-underline hover:text-green-600 underline">Register here</button> </p>

    </div>
  )
}
