import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Login = () => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // var falg = flase;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loginError, setLoginErron] = useState("");
  const handleEmailValidation = () => {
    if (email === "") {
      setErrorEmail("Esse campo é obrigatório");
    } else if (email !== "" && !regex.test(email)) {
      setErrorEmail("O e-mail deve ser válido");
    } else {
      setErrorEmail("");
    }
  };
  const handlePasswordValidation = () => {
    if (password === "") {
      setErrorPassword("Esse campo é obrigatório");
    } else {
      setErrorPassword("");
    }
  };
  const handleSubmit = () => {
    handleEmailValidation();
    handlePasswordValidation();
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              src={process.env.PUBLIC_URL + "/kiwify-green-logo.2af0e50.png"}
              alt="Workflows"
              className="mx-auto h-12 w-auto"
            />{" "}
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Entrar na sua conta
            </h2>{" "}
            <p className="mt-2 text-center text-base leading-5 text-gray-600">
              Ou
              <a
                href="/signup?redirect=%2Flogin%C2%A0-"
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                <Link to={"/signup"}>fazer cadastro</Link>
              </a>
            </p>
          </div>{" "}
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <form
              className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  E-mail
                </label>{" "}
                <div>
                  {" "}
                  <input
                    type="text"
                    autoComplete="username"
                    name="email"
                    className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorEmail("");
                    }}
                    onBlur={handleEmailValidation}
                  />
                  <div className="text-red-500 text-sm mt-1 error-className ">
                    {errorEmail}
                  </div>
                </div>{" "}
              </div>{" "}
              <div className="mt-6">
                <label
                  for="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Senha
                </label>{" "}
                <div>
                  {" "}
                  <input
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrorPassword("");
                    }}
                    onBlur={handlePasswordValidation}
                  />
                </div>
              </div>
              <div className="text-red-500 text-sm mt-1 error-className ">
                {errorPassword}
              </div>
              <div className="mt-2 flex items-center justify-end">
                <div className="text-sm leading-5">
                  <a
                    href="/ResetPassword"
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              {/* <div classNameName="login-error text-red-500">{loginError}</div> */}
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    {" "}
                    Entrar
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
