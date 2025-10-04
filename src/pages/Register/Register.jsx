import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthContext";

const Register = () => {
  const { createUser, updateUser, setUser, user } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters.");
      return;
    } else {
      setNameError("");
    }

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passRegex.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters and include a capital letter, a special character, and a number."
      );
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          Swal.fire("Success!", "Registration Successful", "success");
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="card bg-white/10 backdrop-blur-md border border-white/15 w-full max-w-md shadow-2xl py-8 px-6">
        <h2 className="font-semibold text-2xl text-center text-white mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label text-white">Name</label>
            <input name="name" type="text" className="input input-bordered w-full" placeholder="Full Name" required />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
          </div>

          <div>
            <label className="label text-white">Photo URL</label>
            <input name="photoURL" type="text" className="input input-bordered w-full" placeholder="Photo URL" required />
          </div>

          <div>
            <label className="label text-white">Email</label>
            <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
          </div>

          <div>
            <label className="label text-white">Password</label>
            <input name="password" type="password" className="input input-bordered w-full" placeholder="Password" required />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>

          <button type="submit" className="btn btn-neutral w-full mt-4">Register</button>

          <p className="text-center pt-4 text-white">
            Already have an account? <Link to="/login" className=" underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
