import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const SignUp = () => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorRepeatEmail, setErrorRepeatEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorCheckbox, setErrorCheckbox] = useState("");
  const [check, setCheck] = useState(false);
  const handleCheckbox = () => {
    if (!check) {
      setCheck(true);
      setErrorCheckbox("");
    } else {
      setCheck(false);
      setErrorCheckbox("(Esse campo é obrigatório)");
    }
  };
  const handelEmail = (event) => {
    setEmail(event.target.value);
    setErrorEmail("");
  };
  const handleRepeateEmail = (event) => {
    setRepeatEmail(event.target.value);
    setErrorRepeatEmail("");
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);

    setErrorPassword("");
  };
  const emailValidation = () => {
    if (email === "") {
      setErrorEmail("Esse campo é obrigatório");
    } else if (email !== "" && !regex.test(email)) {
      setErrorEmail("O e-mail deve ser válido");
    } else {
      setErrorEmail("");
    }
  };
  const emailRepeateValidation = () => {
    if (repeatEmail === "") {
      setErrorRepeatEmail("Esse campo é obrigatório");
    } else if (repeatEmail !== email) {
      setErrorRepeatEmail("Os dois e-mails devem ser iguais.");
    } else {
      setErrorRepeatEmail("");
    }
  };
  const passwordValidation = () => {
    if (password === "") {
      setErrorPassword("Esse campo é obrigatório");
    } else {
      setErrorPassword("");
    }
  };
  const checkboxValidation = () => {
    if (check === false) {
      setErrorCheckbox("(Esse campo é obrigatório)");
    } else {
      setErrorCheckbox("");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              src={process.env.PUBLIC_URL + "/kiwify-green-logo.2af0e50.png"}
              alt="Kiwify"
              className="mx-auto h-12 w-auto"
            />{" "}
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Criar nova conta
            </h2>{" "}
            <p className="mt-2 text-center text-base leading-5 text-gray-600">
              Ou
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                <Link to={"/login"}>entrar na sua conta existente</Link>
              </a>
            </p>
          </div>{" "}
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div>
                <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                  E-mail
                </label>{" "}
                <div>
                  {" "}
                  <input
                    type="text"
                    autoComplete="off"
                    name="null"
                    value={email}
                    className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                    onChange={handelEmail}
                    onBlur={emailValidation}
                  />
                  <div className="text-red-500 text-sm mt-1 error-className ">
                    {errorEmail}
                  </div>
                </div>{" "}
              </div>{" "}
              <div className="mt-6">
                <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                  Repetir e-mail
                </label>{" "}
                <div>
                  {" "}
                  <input
                    type="email"
                    autoComplete="off"
                    name="null"
                    value={repeatEmail}
                    className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                    onChange={handleRepeateEmail}
                    onBlur={emailRepeateValidation}
                  />
                  <div className="text-red-500 text-sm mt-1 error-className ">
                    {errorRepeatEmail}
                  </div>
                </div>{" "}
              </div>{" "}
              <div className="mt-6">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  Senha
                </label>{" "}
                <div>
                  {" "}
                  <input
                    type="password"
                    autoComplete="off"
                    name="null"
                    value={password}
                    className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                    onChange={handlePassword}
                  />
                  <div className="text-red-500 text-sm mt-1 error-className ">
                    {errorPassword}
                  </div>
                </div>
              </div>{" "}
              <div className="mt-6">
                <label className="relative flex items-start mt-2">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                      onChange={handleCheckbox}
                    />
                  </div>{" "}
                  <div className="ml-2 text-sm leading-5">
                    <span className="font-medium text-gray-700">
                      Eu li e aceito os{" "}
                      <a
                        href="https://kiwify.com.br/termos-de-uso"
                        target="_blank"
                        className="underline"
                      >
                        {" "}
                        termos de uso
                      </a>
                      ,{" "}
                      <a
                        href="https://kiwify.com.br/licenca-de-uso-software"
                        target="_blank"
                        className="underline"
                      >
                        {" "}
                        termos de licença de uso de software
                      </a>
                      ,{" "}
                      <a
                        href="https://kiwify.com.br/politica-de-conteudo"
                        target="_blank"
                        className="underline"
                      >
                        {" "}
                        política de conteúdo
                      </a>{" "}
                      da Kiwify{" "}
                    </span>
                    <div className="text-red-500 text-sm mt-1 error-className ">
                      {errorCheckbox}
                    </div>
                  </div>
                </label>
              </div>{" "}
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    onClick={() => {
                      emailValidation();
                      emailRepeateValidation();
                      passwordValidation();
                      checkboxValidation();
                    }}
                  >
                    {" "}
                    Criar conta
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
