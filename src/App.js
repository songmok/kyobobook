import Header from "./components/Header";
import Home from "./pages/Home";
import Novel from "./pages/Novel";
import Cook from "./pages/Cook";
import Health from "./pages/Health";
import Language from "./pages/Language";
import ComputerIT from "./pages/ComputerIT";

import instance from "./api/axios";
import requests from "./api/request";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [home, setHome] = useState([]);

  const fetchData = async () => {
    // 멤버목록 가져오기
    const params = {
      start: 1,
      count: 5,
    };
    const resultHome = await instance.get(requests.fetchHome, { params });
    setHome(resultHome.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(home[0]);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home home={home} />} />
          <Route path="/novel" element={<Novel />} />
          <Route path="/cook" element={<Cook />} />
          <Route path="/health" element={<Health />} />
          <Route path="/language" element={<Language />} />
          <Route path="/computerit" element={<ComputerIT />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
