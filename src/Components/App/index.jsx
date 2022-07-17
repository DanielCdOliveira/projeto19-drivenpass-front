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
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;