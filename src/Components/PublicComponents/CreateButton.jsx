import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useContext } from "react";
import axios from "axios";

import { AuthContext } from "../../Context/Auth";

export default function CreateButton({ type, data, route }) {
  const navigate = useNavigate();
  const { URL } = useContext(AuthContext);
  const token = JSON.parse(localStorage.getItem("token"));

  function Create() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.post(URL + `/${route}/create`, data, config);
    promise.then((response) => {
      navigate("/home");
    });
    promise.catch((e) => {
      console.log(e);
      alert("Forneça os dados corretamente");
    });
  }

  if (data) {
    return (
      <Button
        onClick={() => {
          Create(data);
        }}
      >
        <BsFillCheckCircleFill className="check" />
      </Button>
    );
  } else {
    return (
      <Button
        onClick={() => {
          navigate(type);
        }}
      >
        <IoMdAddCircle />
      </Button>
    );
  }
}

const Button = styled.div`
  position: fixed;
  right: 10px;
  bottom: 18px;
  text-decoration: underline;
  font-size: 60px;
  color: #005985;
  .check {
    color: #0bd436ba;
  }
`;
