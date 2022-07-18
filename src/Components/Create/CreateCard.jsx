import { useState } from "react";
import { PageContainer } from "../../Utils/Style";
import Header from "../PublicComponents/Header";
import { Title, HomeSection, Form } from "../../Utils/Style";
import CreateButton from "../PublicComponents/CreateButton";
import BackButton from "../PublicComponents/BackButton";

export default function CreateCard() {
  const [data, setData] = useState({
    title: "",
    cardNumber: "",
    cardName: "",
    cvc: "",
    password: "",
    expirationDate: "",
    isVirtual: false,
    cardType: "",
  });

  return (
    <PageContainer>
      <Header />
      <Title>Cartões</Title>
      <HomeSection>
        <Form>
          <h2>Cadastro</h2>
          <div>
            <p>Título</p> 
             <input className="normal-input"
            type="text"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          </div>
          <div>
            <p>Número do cartão</p> 
             <input className="normal-input"
            type="text"
            onChange={(e) => setData({ ...data, cardNumber: e.target.value })}
          />
          </div>
          <div>
            <p>Nome no cartão</p> 
             <input className="normal-input"
            type="text"
            onChange={(e) => setData({ ...data, cardName: e.target.value })}
          />
          </div>
          <div>
            <p>CVC</p> 
             <input className="normal-input"
            type="text"
            onChange={(e) => setData({ ...data, cvc: e.target.value })}
          />
          </div>
          <div>
            <p>Senha</p> 
             <input className="normal-input"
            type="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          </div>
          <div>
            <p>Data de vencimento</p> 
             <input className="normal-input"
            type="text"
            onChange={(e) => setData({ ...data, expirationDate: e.target.value })}
          />
          </div>
          <div className="virtual">
            <p>Virtual</p> 
            <input
            type="checkbox"
            onChange={() => setData({ ...data, isVirtual: !data.isVirtual})}
          />
          </div>
          <div>
            <p>Tipo de Cartão</p> 
            <input className="normal-input"
            type="text"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          </div>
        </Form>
      </HomeSection>
      <BackButton />
      <CreateButton data={data} route={"card"} />
    </PageContainer>
  );
}
