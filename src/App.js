import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Ground from "./pages/ground/Ground";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
// import Signtest from "./pages/signup/Signtest";
import Logged from "./pages/home/Logged";
import Mypage from "./pages/mypage/Mypage";
import grounddata from './pages/list/grounddata.js'
import pldata from './components/propertyList/pldata.js'


function App() {
  let [ground] = useState(grounddata)
  let [pldata2] = useState(pldata)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home pldata2={pldata2} />} />
        <Route path="/ground" element={<List ground={ground} />} />
        <Route path="/ground/:id" element={<Ground ground={ground} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signtest" element={<Signtest />} /> */}
        <Route path="/logged" element={<Logged />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="*" element={<div>404페이지입니다</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;