import React, { useState } from 'react'

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        email.preventDefault();
        
        if(newPassword !== confirmPassword){
            setErrorMessage("The Password doenst match");
            return;
        }
        setErrorMessage("");
        console.log(email);
    }
  return (
    <div className="flex flex-col pt-1 min-w-[300px] min-h-[550px] border-2 rounded-lg" ><br/>
      <h1 className="font-sans text-2xl font-bold center pb-4">Register Here</h1>
      <form className='login-form flex flex-col mx-2' onSubmit={handleSubmit}>
        <label className='text-left pt-1' htmlFor="">Full Name:</label>
        <input className='mt-2 py-2 border-2 rounded-lg text-black  border-black' value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" name="fullName" id="fullName" placeholder='  desu' required />
        <label className='text-left pt-1' htmlFor="">Email:</label>
        <input className='mt-2 py-2 border-2 rounded-lg text-black  border-black' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='  desu@email.com' required />
        <label className='text-left pt-1' htmlFor="">New Password: </label>
        <input className='mt-2 py-2 border-2 rounded-lg text-black  border-black' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="password" name="newPassword" id="newPassword" placeholder='  ******' required/>
        <label className='text-left pt-1' htmlFor="">Confirm Password: </label>
        <input className='mt-2 py-2 border-2 rounded-lg text-black  border-black' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirmPassword" id="confirmPassword" placeholder='  ******' required/>
        {errorMessage && <p className='error-message text-black'>{errorMessage}</p>}
        <br/>
        <button 
        className='rounded-2xl bg-white hover:bg-green-600 py-2 w-25'
        type='submit'>Register</button><br/><br/>
      </form>
      <p>Already have an account? <button onClick={() => props.onFormSwitch('login')} className=" bg-transpernt text-black text-underline hover:text-green-600 underline">Login here</button> </p>

    </div>
  )
}
