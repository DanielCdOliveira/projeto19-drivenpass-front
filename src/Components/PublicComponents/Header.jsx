import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import logo from "../../Assets/logo.png";
export default function Header() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <MainHeader>
      <img src={logo} alt="" />
      <h1>DrivenPass</h1>
      <IoLogOut onClick={logout} />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  background-color: #151515;
  width: 100vw;
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px 0 28px;
  box-sizing: border-box;
  img {
    width: 45px;
  }
  h1 {
    font-family: "Righteous", cursive;
    font-size: 36px;
    line-height: 45px;
    color: #005985;
  }
  svg {
    font-size: 45px;
    color: #005985;
  }
`;
