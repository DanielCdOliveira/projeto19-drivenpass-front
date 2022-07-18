import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { AuthContext } from "../../Context/Auth";
import { Title, HomeSection, Details } from "../../Utils/Style";

export default function Document() {
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
      .get(URL + `/document/${id}`, config)
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
      <Title>Documentos</Title>
      <HomeSection>
        <Details>
          <h2>{alldata.documentType}</h2>
          {Object.keys(alldata).length > 0 ? (
            <>
              <li>
                <h3>Nome</h3>
                <p>{alldata.name}</p>
              </li>
              <li>
                <h3>Data de emissão</h3>
                <p>{alldata.expeditionDate}</p>
              </li>
              <li>
                <h3>Data de vencimento</h3>
                <p>{alldata.expirationDate}</p>
              </li>
              <li>
                <h3>Número de registro</h3>
                <p>{alldata.registerNumber}</p>
              </li>
              <li>
                <h3>Órgão emissor</h3>
                <p>{alldata.expeditionAgency}</p>
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
