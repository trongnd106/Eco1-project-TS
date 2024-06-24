import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ErrorSignUp, SignIn } from "../types/auth";
import authService from "../services/authService";
import { Link, useNavigate } from "react-router-dom";
import validate from "../utils/validation";
import { signInSchema } from "../validation/auth";
import logo from "../assets/logo.png";
import localStorageSevicer from "../services/localService";
// import localStorageSevicer from "../services/localService";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<SignIn>({
    email: "",
    password: "",
  });

  const [erorrForm, setErrorForm] = useState<ErrorSignUp>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setErrorForm({ ...erorrForm, [name]: null });
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value, errorMessage } = validate(form, signInSchema);
    if (errorMessage) {
      setErrorForm(errorMessage);
      return;
    }
    delete value.cpassword;
    authService
      .signin(value)
      .then((response) => {
        toast.success("Login successfully", {
          autoClose: false,
          hideProgressBar: false,
        });
        localStorageSevicer.set(response.data);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="flex flex-col justify-center font-[sans-serif] text-[#333] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-md p-6">
        <div className="text-center mb-12">
          <img src={logo} alt="logo" className="w-40 inline-block" />
        </div>
        <form onSubmit={onSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-sm mb-2 block">Email</label>
              <input
                name="email"
                type="text"
                onChange={handleChange}
                className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter email..."
              />
              {erorrForm?.email && (
                <span className="text-sm text-red-400">
                  * {erorrForm?.email}
                </span>
              )}
            </div>
            <div>
              <label className="text-sm mb-2 block">Password</label>
              <input
                autoComplete="on"
                name="password"
                type="password"
                onChange={handleChange}
                className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password..."
              />
              {erorrForm?.password && (
                <span className="text-sm text-red-400">
                  * {erorrForm?.password}
                </span>
              )}
            </div>
          </div>
          <div className="!mt-10">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
            >
              Create an account
            </button>
          </div>
          <p className="text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/sign-up"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
