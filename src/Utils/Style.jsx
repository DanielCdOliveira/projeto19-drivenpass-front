import styled from "styled-components";
const PageContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  height: fit-content;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;
const MainAuth = styled.section`
  display: flex;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .logo {
    margin-top: 15px;
    margin-bottom: 45px;
    img {
      width: 113px;
    }
    h1 {
      font-family: "Righteous", cursive;
      font-size: 36px;
      line-height: 45px;
      color: #005985;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    label {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 10px;
    }
    input {
      width: 67%;
      max-width: 450px;
      height: 40px;
      margin-bottom: 16px;
      border: 3px solid #005985;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 12px 17px;
      outline: none;
      font-size: 18px;
    }
    .check-button {
      width: 67%;
      max-width: 450px;
      height: 40px;
      background-color: #9bfbb0;
      border-radius: 6px;
      border: none;
      outline-style: none;
      font-size: 18px;
      line-height: 22px;
      margin-top: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    p {
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      font-size: 18px;
      line-height: 22px;
      color: #000;
      text-decoration: underline;
      cursor: pointer;
      margin-top: 86px;
    }
  }
  .back-button {  
      width: 67%;
      max-width: 450px;
      height: 40px;
      background-color: #fb9b9b;
      border-radius: 6px;
      border: none;
      outline-style: none;
      font-size: 18px;
      line-height: 22px;
      margin-top: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
`;

export { PageContainer, MainAuth };
