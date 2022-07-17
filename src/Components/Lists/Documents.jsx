import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { AuthContext } from "../../Context/Auth";
import{IoLogIn,IoPencil,IoCard,IoWifi} from "react-icons/io5"
import {FaIdCard} from "react-icons/fa"
import { Title,HomeSection,List } from "../../Utils/Style";

export default function Document(){
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
      axios.get(URL+"/documents",config).then((response)=>{
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
      <List> 

          {Object.keys(alldata).length > 0 ? 
            (alldata.map((item)=>{
                return(  <li onClick={()=>{navigate(`/document/${item.id}`)}}>
                <FaIdCard/>
                <p>{item.title}</p>
              </li>)
            })
          ):(<></>)}
       </List>
      </HomeSection>
      </PageContainer>
    );
}