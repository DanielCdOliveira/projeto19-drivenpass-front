import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import axios from "axios";

import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { AuthContext } from "../../Context/Auth";
import{IoLogIn} from "react-icons/io5"
export default function Home() {
  const { URL } = useContext(AuthContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const [alldata, setAllData] = useState({})
  useEffect(()=>{
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get(URL+"/alldata",config).then((response)=>{
      setAllData(response.data)
    }).catch((response)=>{
      console.log(response);
    })
  },[])
  return (
    <PageContainer>
      <Header/>
      <Title>Minhas senhas</Title>
    <HomeSection>
      
        {Object.keys(alldata).length > 0 ? 
          (
          <List> 
            <li>
              <IoLogIn/>
              <p>Credentials</p>
              <span className="count">{alldata.credentials.length}</span>
            </li>
            <li>
              <IoLogIn/>
              <p>Notes</p>
              <span className="count">{alldata.notes.length}</span>
            </li>
            <li>
              <IoLogIn/>
              <p>Cards</p>
              <span className="count">{alldata.cards.length}</span>
            </li>
            <li>
              <IoLogIn/>
              <p>Wifi</p>
              <span className="count">{alldata.wifi.length}</span>
            </li>
            <li>
              <IoLogIn/>
              <p>Documents</p>
              <span className="count">{alldata.documents.length}</span>
            </li>
          </List>
        ):(<></>)}
     
    </HomeSection>
    </PageContainer>
  );
}

const Title = styled.h2`
  background-color: #005985;
  width: 100%;
  height: 41px;
  font-size: 18px;
  padding-left: 16px;
  position: fixed;
  margin-top: 90px;
  line-height: 41px;
  color: #fff;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  li{
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    display:  flex;
    margin-bottom: 5px;
  }
  svg{
    margin-left: 16px;
    font-size: 45px;
    color: #005985;
  }
  p{
    margin-left: 25px;
    font-size: 18px;
  }
  span{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #005985;
    text-align: center;
    line-height: 35px;
    font-size: 18px;
    position: absolute;
    right: 16px;
    color:#fff;
  }
`

const HomeSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-top: 150px;  
`