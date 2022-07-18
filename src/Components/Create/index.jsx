import { useNavigate } from "react-router-dom";

import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { Title, HomeSection, List } from "../../Utils/Style";
import { IoLogIn, IoPencil, IoCard, IoWifi } from "react-icons/io5";
import { FaIdCard } from "react-icons/fa";
import CreateButton from "../PublicComponents/CreateButton";
import BackButton from "../PublicComponents/BackButton";

export default function CreateHome() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Header />
      <Title>Categoria</Title>
      <HomeSection>
        <List>
          <li
            onClick={() => {
              navigate("/create/credential");
            }}
          >
            <IoLogIn />
            <p>Credenciais</p>
          </li>
          <li
            onClick={() => {
                navigate("/create/note");
            }}
          >
            <IoPencil />
            <p>Notas seguras</p>
          </li>
          <li
            onClick={() => {
                navigate("/create/card");
            }}
          >
            <IoCard />
            <p>Cartões</p>
          </li>
          <li
            onClick={() => {
                navigate("/create/wifi");
            }}
          >
            <IoWifi />
            <p>Senhas de Wi-fi</p>
          </li>
          <li
            onClick={() => {
                navigate("/create/document");
            }}
          >
            <FaIdCard />
            <p>Documentos</p>
          </li>
        </List>
      </HomeSection>
      <BackButton/>
    </PageContainer>
  );
}
