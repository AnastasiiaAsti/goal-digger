import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'


export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    
    return (
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
                <div className="col-3">
          <p className="btn btn-lg border" onClick={() => setShowLogin(!showLogin)}>{showLogin ? ' PRESS TO SIGN UP' : 'PRESS TO LOG IN'}</p>
          </div>
          <div className='col-6'>
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
          </div>
          </div>
        </div>
    )
}