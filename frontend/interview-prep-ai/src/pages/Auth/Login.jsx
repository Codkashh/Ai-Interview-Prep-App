import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/inputs/Input';

const Login = ({setCurrentPage}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //Handle Login Form Submission
  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setError("Invalid Email");
      return;
    }

    if(!password) {
      setError("Please enter the password");
    }

    setError("");

    //Login API call
    try{
    } catch (error) {
      if(error.response && error.response.date.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again");
      }
    }
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">
        Welcome Back
      </h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your details to login in
      </p>

      <form onSubmit={handleLogin}>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="Akash@example.com"
          type="text"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="password"
          placeholder="Min 8 Characters"
          type="password"
        />

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button class="w-full rounded-md bg-slate-950 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
          Block Level Button
        </button>


        <p className="text-[13px] text-slate-800 mt-3">Don't have an account?{" "}</p>
          <button 
            className="font-medium text-primary underline cursor-pointer" 
            onClick={() => {
              setCurrentPage("signup");
            }}
          >
            SignUp
          </button>
      </form>
    </div>
  )
}

export default Login;
