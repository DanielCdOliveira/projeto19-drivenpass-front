import { useEffect, useContext, useState } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";

import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { AuthContext } from "../../Context/Auth";
import { Title, HomeSection, Details } from "../../Utils/Style";
import BackButton from "../PublicComponents/BackButton";

export default function Credential() {
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
      .get(URL + `/credential/${id}`, config)
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
      <Title>Credenciais</Title>
      <HomeSection>
        <Details>
          <h2>{alldata.title}</h2>
          {Object.keys(alldata).length > 0 ? (
            <>
              <li>
                <h3>URL</h3>
                <p>{alldata.url}</p>
              </li>
              <li>
                <h3>Usuário</h3>
                <p>{alldata.userName}</p>
              </li>
              <li>
                <h3>Senha</h3>
                <p>{alldata.password}</p>
              </li>
            </>
          ) : (
            <></>
          )}
        </Details>
      </HomeSection>
      <BackButton/>
    </PageContainer>
  );
}
