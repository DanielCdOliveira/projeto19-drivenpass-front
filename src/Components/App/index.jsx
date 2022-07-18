import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../../Utils/GlobalStyle.jsx"
import AuthProvider from "../../Context/Auth.jsx";
import Login from "../Login/index.jsx";
import Signup from "../Signup/index.jsx";
import Home from "../Home/index.jsx";
import Credentials from "../Lists/Credentials.jsx";
import Cards from "../Lists/Cards.jsx";
import Documents from "../Lists/Documents.jsx";
import Notes from "../Lists/Notes.jsx";
import Wifis from "../Lists/Wifi.jsx";
import Wifi from "../ShowData/Wifi.jsx";
import Document from "../ShowData/Document.jsx";
import Card from "../ShowData/Card.jsx";
import Note from "../ShowData/Note.jsx";
import Credential from "../ShowData/Credential.jsx";
import CreateHome from "../Create/index.jsx";
import CreateNote from "../Create/CreateNote.jsx";
import CreateCredential from "../Create/CreateCredential.jsx";
import CreateDocument from "../Create/CreateDocument.jsx";
import CreateWifi from "../Create/CreateWifi.jsx";
import CreateCard from "../Create/CreateCard.jsx";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/credentials" element={<Credentials />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/documents" element={<Documents />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/wifi" element={<Wifis />}></Route>
        <Route path="/credential/:id" element={<Credential />}></Route>
        <Route path="/card/:id" element={<Card />}></Route>
        <Route path="/document/:id" element={<Document />}></Route>
        <Route path="/note/:id" element={<Note/>}></Route>
        <Route path="/wifi/:id" element={<Wifi />}></Route>
        <Route path="/create" element={<CreateHome />}></Route>
        <Route path="/create/note" element={<CreateNote />}></Route>
        <Route path="/create/credential" element={<CreateCredential />}></Route>
        <Route path="/create/document" element={<CreateDocument />}></Route>
        <Route path="/create/wifi" element={<CreateWifi />}></Route>
        <Route path="/create/card" element={<CreateCard />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;