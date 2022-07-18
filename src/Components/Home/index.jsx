import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { Title,HomeSection,List } from "../../Utils/Style";
import { AuthContext } from "../../Context/Auth";
import{IoLogIn,IoPencil,IoCard,IoWifi} from "react-icons/io5"
import {FaIdCard} from "react-icons/fa"

export default function Home() {
  const { URL } = useContext(AuthContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const [alldata, setAllData] = useState({})

  const navigate = useNavigate()

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
            <li onClick={()=>{navigate("/credentials")}}>
              <IoLogIn/>
              <p>Credenciais</p>
              <span className="count">{alldata.credentials.length}</span>
            </li>
            <li onClick={()=>{navigate("/notes")}}>
              <IoPencil/>
              <p>Notas seguras</p>
              <span className="count">{alldata.notes.length}</span>
            </li>
            <li onClick={()=>{navigate("/cards")}}>
              <IoCard/>
              <p>Cartões</p>
              <span className="count">{alldata.cards.length}</span>
            </li>
            <li onClick={()=>{navigate("/wifi")}}>
              <IoWifi/>
              <p>Senhas de Wi-fi</p>
              <span className="count">{alldata.wifi.length}</span>
            </li>
            <li onClick={()=>{navigate("/documents")}}>
              <FaIdCard/>
              <p>Documentos</p>
              <span className="count">{alldata.documents.length}</span>
            </li>
          </List>
        ):(<></>)}
     
    </HomeSection>
    </PageContainer>
  );
}
