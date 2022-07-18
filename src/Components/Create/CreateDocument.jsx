import { useState } from "react";
import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { Title, HomeSection, Form } from "../../Utils/Style";
import CreateButton from "../PublicComponents/CreateButton";
import BackButton from "../PublicComponents/BackButton";

export default function CreateDocument() {
  const [data, setData] = useState({
    name:"",
    expeditionDate:"",
    expirationDate:"",
    registerNumber:"",
    expeditionAgency:"",
    documentType:""
  });

  return (
    <PageContainer>
      <Header />
      <Title>Documentos</Title>
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
            <p>Data de emissão</p>
            <input
              className="normal-input"
              type="text"
              onChange={(e) => setData({ ...data, expeditionDate: e.target.value })}
            />
          </div>
          <div>
            <p>Data de vencimento</p>
            <input
              className="normal-input"
              type="text"
              onChange={(e) => setData({ ...data, expirationDate: e.target.value })}
            />
          </div>
          <div>
            <p>Número de registro</p>
            <input
              className="normal-input"
              type="text"
              onChange={(e) => setData({ ...data, registerNumber: e.target.value })}
            />
          </div>
          <div>
            <p>Órgão emissor</p>
            <input
              className="normal-input"
              type="text"
              onChange={(e) => setData({ ...data, expeditionAgency: e.target.value })}
            />
          </div>
          <div>
            <p>Tipo de documento</p>
            <input
              className="normal-input"
              type="text"
              onChange={(e) => setData({ ...data, documentType: e.target.value })}
            />
          </div>
         
        </Form>
      </HomeSection>
      <BackButton />
      <CreateButton data={data} route={"document"} />
    </PageContainer>
  );
}
