import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import BackButton from "../PublicComponents/BackButton";
import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { AuthContext } from "../../Context/Auth";
import { IoCard } from "react-icons/io5";
import { Title, HomeSection, List } from "../../Utils/Style";

export default function Cards() {
  const { URL } = useContext(AuthContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const [alldata, setAllData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(URL + "/cards", config)
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
      <Title>Cartôes</Title>
      <HomeSection>
        <List>
          {Object.keys(alldata).length > 0 ? (
            alldata.map((item) => {
              return (
                <li
                  onClick={() => {
                    navigate(`/card/${item.id}`);
                  }}
                >
                  <IoCard />
                  <p>{item.title}</p>
                </li>
              );
            })
          ) : (
            <></>
          )}
        </List>
      </HomeSection>
      <BackButton/>
    </PageContainer>
  );
}
