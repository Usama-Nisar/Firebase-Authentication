import React,{useState} from 'react'
import {auth} from '../firebase'
import {useHistory} from 'react-router-dom'
export default function Login() {
   
     const [email, setEmail] = useState();
     const [password, setPassword] = useState();
     const history = useHistory()
        const submithandler = async (e) => {
            e.preventDefault();
            console.log(email, password)
            try{
                const result = await  auth.signInWithEmailAndPassword(email,password)
                window.M.toast({html: `Hello ${result.user.email}`,classes:'green'})
                history.push('/')
            }catch(err){
                window.M.toast({html: err.message ,classes:'green'})
            }
           
        }
    return (
        <div>
            <h1>Login</h1>
            <div className="container">
            <form onSubmit={ (e) => {submithandler(e)} }>
                <input type="email"
                  placeholder="Enter Email"
                  onChange={ (e) => {setEmail(e.target.value)}} />
                <input type="password"
                  placeholder="Enter Password"
                  onChange={ (e) => {setPassword(e.target.value)}} />
                  <button className="btn red" type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}
