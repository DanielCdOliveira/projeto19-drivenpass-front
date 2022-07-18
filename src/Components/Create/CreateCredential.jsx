import { useState } from "react";
import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { Title, HomeSection, Form } from "../../Utils/Style";
import CreateButton from "../PublicComponents/CreateButton";
import BackButton from "../PublicComponents/BackButton";

export default function CreateCredential() {
  const [data, setData] = useState({
    title: "",
    url: "",
    userName: "",
    password: "",
  });

  return (
    <PageContainer>
      <Header />
      <Title>Credenciais</Title>
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
            <p>URL</p>
            <input
              className="normal-input"
              type="text"
              onChange={(e) => setData({ ...data, url: e.target.value })}
            />
          </div>
          <div>
            <p>Nome de usuário</p>
            <input
              className="normal-input"
              type="text"
              onChange={(e) => setData({ ...data, userName: e.target.value })}
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
      <CreateButton data={data} route={"credential"} />
    </PageContainer>
  );
}
