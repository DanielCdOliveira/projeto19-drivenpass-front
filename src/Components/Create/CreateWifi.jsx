import { useState } from "react";
import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { Title, HomeSection, Form } from "../../Utils/Style";
import CreateButton from "../PublicComponents/CreateButton";
import BackButton from "../PublicComponents/BackButton";

export default function CreateWifi() {
  const [data, setData] = useState({
    title:"",
    wifiName:"",
    password:""
  });

  return (
    <PageContainer>
      <Header />
      <Title>Conexões de Wi-fi</Title>
      <HomeSection>
        <Form>
          <h2>Cadastro</h2>
          <div>
            <p>Título</p>
            <input
              className="normal-input"
              type="text"
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <div>
            <p>Nome do Wi-fi</p>
            <input
              className="normal-input"
              type="text"
              onChange={(e) => setData({ ...data, wifiName: e.target.value })}
            />
          </div>
          <div>
            <p>Senha</p>
            <input
              className="normal-input"
              type="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
        </Form>
      </HomeSection>
      <BackButton />
      <CreateButton data={data} route={"wifi"} />
    </PageContainer>
  );
}
