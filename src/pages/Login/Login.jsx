<<<<<<< HEAD
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthContext";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        Swal.fire("Welcome!", "Login Successful", "success");
        navigate("/");
      })
      .catch((error) => {
        setErrorMsg("Invalid email or password.",error);
        
      });
  };

  const handleProviderLogin = (providerFn) => {
    providerFn()
      .then(() => {
        Swal.fire("Success!", "Logged in successfully", "success");
        navigate("/");
      })
      .catch(() => {
        Swal.fire("Error", "Third-party login failed", "error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="card bg-white/10 backdrop-blur-md border border-white/15 w-full max-w-md shadow-2xl py-8 px-6">
        <h2 className="font-semibold text-2xl text-center text-white mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
          <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />
          {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

          <button type="submit" className="btn btn-neutral w-full mt-2">Login</button>
        </form>

        <div className="mt-4 flex flex-col gap-2">
          <button onClick={() => handleProviderLogin(signInWithGoogle)} className="btn btn-outline w-full">Login with Google</button>
          <button onClick={() => handleProviderLogin(signInWithGithub)} className="btn btn-outline w-full">Login with GitHub</button>
        </div>

        <p className="text-center pt-4 text-white">
          Don’t have an account? <Link to="/register" className="underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
=======
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthContext";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        Swal.fire("Welcome!", "Login Successful", "success");
        navigate("/");
      })
      .catch((error) => {
        setErrorMsg("Invalid email or password.",error);
        
      });
  };

  const handleProviderLogin = (providerFn) => {
    providerFn()
      .then(() => {
        Swal.fire("Success!", "Logged in successfully", "success");
        navigate("/");
      })
      .catch(() => {
        Swal.fire("Error", "Third-party login failed", "error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="card bg-white/10 backdrop-blur-md border border-white/15 w-full max-w-md shadow-2xl py-8 px-6">
        <h2 className="font-semibold text-2xl text-center text-white mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
          <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />
          {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

          <button type="submit" className="btn btn-neutral w-full mt-2">Login</button>
        </form>

        <div className="mt-4 flex flex-col gap-2">
          <button onClick={() => handleProviderLogin(signInWithGoogle)} className="btn btn-outline w-full">Login with Google</button>
          <button onClick={() => handleProviderLogin(signInWithGithub)} className="btn btn-outline w-full">Login with GitHub</button>
        </div>

        <p className="text-center pt-4 text-white">
          Don’t have an account? <Link to="/register" className="underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
>>>>>>> 9971610 (set the all api)
