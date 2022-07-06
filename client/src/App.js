import "./App.css";
import Home from "./component/Home";
import { TopBar } from "./component/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./component/Register";
import { EditInfo } from "./component/EditInfo";
import { PersonalDetail } from "./component/PersonalDetail";

function App() {
  return (
    <div>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:id" element={<EditInfo />} />
          <Route path="/view/:id" element={<PersonalDetail />} />

          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
