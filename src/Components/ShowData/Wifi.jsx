import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { AuthContext } from "../../Context/Auth";
import { Title, HomeSection, Details } from "../../Utils/Style";

export default function Wifi() {
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
      .get(URL + `/wifi/${id}`, config)
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
      <Title>Conexões de Wi-fi</Title>
      <HomeSection>
        <Details>
          <h2>{alldata.title}</h2>
          {Object.keys(alldata).length > 0 ? (
            <>
              <li>
                <h3>Nome do Wi-fi</h3>
                <p>{alldata.wifiName}</p>
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
    </PageContainer>
  );
}
