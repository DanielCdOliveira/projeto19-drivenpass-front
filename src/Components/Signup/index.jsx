import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";

import { AuthContext } from "../../Context/Auth";
import logo from "../../Assets/logo.png";
import { MainAuth } from "../../Utils/Style";

function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { URL } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  function newRegister(e) {
    setDisabled(true);
    e.preventDefault();
    if (data.email === "" || data.password === "") {
      alert("Please complete all fields");
      setDisabled(false);
      return;
    }
    const promise = axios.post(URL + "/signup", data);
    promise.then((e) => {
        setDisabled(false)
      navigate("/");
    });
    promise.catch((e) => {
      setDisabled(false);
      if (e.response.status === 409) {
        alert("E-mail already registered!");
      }
      if (e.response.status === 422) {
           alert("Invalid email or password");
      }
    });
  }
  function goToLogin(){
    navigate("/")
  }

  return (
    <MainAuth>
      <div className="logo"> 
        <img src={logo} alt="" />
        <h1>DrivenPass</h1>
        </div>

      <form onSubmit={newRegister}>
      <label htmlFor="email">Usuário (e-mail)</label>
        <input
          disabled={disabled}
          type="email"
          name=""
          id="email-signup"
          placeholder="e-mail"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
          <label htmlFor="password">Senha</label>
        <input
          disabled={disabled}
          type="password"
          name=""
          id="password-signup"
          placeholder="senha"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button className="check-button" disabled={disabled} type="submit">
        Criar
        </button>
        <div className="back-button" onClick={goToLogin}> Voltar </div>
      </form>
      
    </MainAuth>
  );
}

export default Register;
