import React,{useState} from 'react'

const Register = (props) => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [name,setName]=useState('');

  return (
    <>
    <form>
      <h2> Register </h2>
      <label>Name:</label>
      <input value={name} type="name"></input><br/><br/>
      <label for ="email">Email: </label>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" ></input><br/><br/>
      <label for ="password">Password: </label>
      <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" ></input><br/><br/>
      <button type="submit">Log In</button><br/><br/>
      
      </form>
      <button onClick={()=>props.onFormSwitch('register')}>Already have an account! Login here.</button>
      </>
  )
}

export default Register
