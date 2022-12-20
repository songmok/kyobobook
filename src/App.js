import Header from "./components/Header";
import Home from "./pages/Home";
import Novel from "./pages/Novel";
import Cook from "./pages/Cook";
import Health from "./pages/Health";
import Language from "./pages/Language";
import ComputerIT from "./pages/ComputerIT";
import Detail from "./components/Detail";

import instance from "./api/axios";
import requests from "./api/request";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  // 멤버목록 데이터
  // useState 는 state 가 변경되면 실행되는 Hook 이다.
  // useState() 를 실행하면 [] 리턴이 된다.
  // 배열은 [state, state 업데이트 함수] 돌려받는다.
  // 배열은 [getter, setter] 돌려받는다.
  // useState(초기값) : 초기값이리 함은 state 의 초기값
  const [detail, setDetail] = useState([]);

  const fetchData = async () => {
    const params = {
      start: 1,
      count: 5,
    };
    const resultDetail = await instance.get(requests.fetchDetail, { params });
    setDetail(resultDetail.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="container">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novel" element={<Novel />} />
          <Route path="/cook" element={<Cook />} />
          <Route path="/health" element={<Health />} />
          <Route path="/language" element={<Language />} />
          <Route path="/computerit" element={<ComputerIT />} />
          <Route path="/detail" element={<Detail detail={detail} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
