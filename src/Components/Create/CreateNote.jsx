import { useState } from "react";
import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { Title, HomeSection, Form} from "../../Utils/Style";
import CreateButton from "../PublicComponents/CreateButton";
import BackButton from "../PublicComponents/BackButton";

export default function CreateNote() {
  const [data, setData] = useState({
    title: "",
    text: "",
  });

  return (
    <PageContainer>
      <Header />
      <Title>Notas Seguras</Title>
      <HomeSection>
        <Form>
            <h2>Cadastro</h2>
          <div>
            <p>Título</p>
          <input
            type="text"
            className="normal-input"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          </div>
          <div>
            <p>Texto</p>
            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setData({ ...data, text: e.target.value })}></textarea>
          </div>
        </Form>
      </HomeSection>
      <BackButton/>
      <CreateButton data={data} route={"note"} />
    </PageContainer>
  );
}

