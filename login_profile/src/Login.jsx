import React,{useState} from 'react'

const Login = (props) => {
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');

  
  return (
    <>
    <form>
      <h2> Login </h2>
      <label for ="email">Email: </label>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" ></input><br/><br/>
      <label for ="password">Password: </label>
      <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" ></input><br/><br/>
      <button type="submit">Log In</button><br/><br/>
      
      </form>
      <button onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register here.</button>
      </>
  )
}

export default Login
