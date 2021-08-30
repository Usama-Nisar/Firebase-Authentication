import React,{useState,useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Todo from './Components/Todo';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Navbar from './Components/Navbar';
import {auth} from './firebase'
function App() {

     const [user, setUser] = useState(null)
     
     useEffect(() => {
     auth.onAuthStateChanged(user => {
       if (user) setUser(user)
       else setUser(null)
     })

  },[])

  return (
    <div className="App">
       <Router>
         <Navbar user={user}/>
                <Switch>
                    <Route path="/" exact>
                        <Todo user={user}/>
                    </Route>
                    <Route path="/login">
                       <Login />
                    </Route>
                    <Route path="/signup">
                       <Signup />
                    </Route>
                </Switch>
            </Router>
    </div>
  );
}

export default App;
