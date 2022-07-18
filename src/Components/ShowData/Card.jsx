import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { AuthContext } from "../../Context/Auth";
import { Title, HomeSection, Details } from "../../Utils/Style";

export default function Card() {
  const { URL } = useContext(AuthContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const [alldata, setAllData] = useState({});


  const { id } = useParams();
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(URL + `/card/${id}`, config)
      .then((response) => {
        setAllData(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);
  return (
    <PageContainer>
      <Header />
      <Title>Cartões</Title>
      <HomeSection>
        <Details>
          <h2>{alldata.title}</h2>
          {Object.keys(alldata).length > 0 ? (
            <>
              <li>
                <h3>Nome no Cartão</h3>
                <p>{alldata.cardName}</p>
              </li>
              <li>
                <h3>Número do Cartão</h3>
                <p>{alldata.cardNumber}</p>
              </li>
              <li>
                <h3>Data de vencimento</h3>
                <p>{alldata.expirationDate}</p>
              </li>
              <li>
                <h3>CVC</h3>
                <p>{alldata.cvc}</p>
              </li>
              <li>
                <h3>Senha</h3>
                <p>{alldata.password}</p>
              </li>
              <li>
              <h3>Tipo do cartão</h3>
              <p>{(alldata.cardType === "credit")?"Crédito":(alldata.cardType === "debit")?"Débito":"Débito e Crédito" }</p>
            </li>
            <li>
              <h3>Virtual</h3>
              <p>{alldata.isVirtual === true?"Sim":"Não"}</p>
            </li>
            </>
          ) : (
            <></>
          )}
        </Details>
      </HomeSection>
    </PageContainer>
  );
}


