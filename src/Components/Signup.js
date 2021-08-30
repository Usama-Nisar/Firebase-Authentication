import React,{useState} from 'react'
import {auth} from '../firebase'
import {useHistory} from 'react-router-dom'
export default function Signup() {
     
    const [email, setEmail] = useState();
     const [password, setPassword] = useState();
     const history = useHistory()

     const submithandler = async (e) => {
        e.preventDefault();
        console.log(email, password)
        try{
            const result = await  auth.createUserWithEmailAndPassword(email,password)
            window.M.toast({html: `Hello ${result.user.email}`,classes:'green'})
            history.push('/login')
        }catch(err){
            window.M.toast({html: err.message ,classes:'green'})
        }
       
    }
    return (
        <div>
            <h1>Signup</h1>
            <div className="container">
            <form onSubmit={ (e) => {submithandler(e)} }>
                <input type="text"
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
