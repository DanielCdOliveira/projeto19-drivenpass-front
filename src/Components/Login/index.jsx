import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/Auth";

import logo from "../../Assets/logo.png";
import { MainAuth, PageContainer } from "../../Utils/Style";

export default function Login() {
  const { logIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) navigate("/home");
  }, []);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function login(e) {
    e.preventDefault();
    logIn(data, setDisabled);
  }
  return (
    <PageContainer>
      <MainAuth>
        <div className="logo"> 
        <img src={logo} alt="" />
        <h1>DrivenPass</h1>
        </div>
        <form onSubmit={login}>
          <label htmlFor="email">Usuário (e-mail)</label>
          <input
            type="email"
            name="email"
            id="email  "
            placeholder="e-mail"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="senha"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button className="check-button" disabled={disabled} type="submit">
          Acessar
          </button>
          <Link to={"/signup"}>
            <p>Primeiro acesso? Crie sua conta!</p>
          </Link>
        </form>
      </MainAuth>
    </PageContainer>
  );
}
