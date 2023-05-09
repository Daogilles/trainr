import { useState } from "react";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-1 flex-col justify-center mt-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {isLogin ? "Log in" : "Sign in"} to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {isLogin && <LoginForm />}
        {!isLogin && <SignupForm />}
        <div className="flex justify-center mt-5">
          <button
            type="button"
            className="underline text-sm flex justify-center"
            onClick={() => setIsLogin((prevState) => !prevState)}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
