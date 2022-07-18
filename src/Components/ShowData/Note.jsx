import { useEffect, useContext, useState } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";

import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { AuthContext } from "../../Context/Auth";
import { Title, HomeSection, Details } from "../../Utils/Style";
import BackButton from "../PublicComponents/BackButton";

export default function Note() {
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
      .get(URL + `/note/${id}`, config)
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
      <Title>Notas Seguras</Title>
      <HomeSection>
        <Details>
          <h2>{alldata.title}</h2>
          {Object.keys(alldata).length > 0 ? (
            <>
              <li>
                <h3>Texto</h3>
                <p>{alldata.text}</p>
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
