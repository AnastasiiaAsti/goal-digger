import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-12 m-5">
          <p
            className="btn btn-lg border-dark p-4"
            onClick={() => setShowLogin(!showLogin)}
          >
            {showLogin ? " PRESS TO SIGN UP" : "PRESS TO LOG IN"}
          </p>
        </div>
        <div className="col-12">
          {showLogin ? (
            <LoginForm setUser={setUser} />
          ) : (
            <SignUpForm setUser={setUser} />
          )}
        </div>
      </div>
    </div>
  );
}
