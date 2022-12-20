import Header from "./components/Header";
import Home from "./pages/Home";
import Novel from "./pages/Novel";
import Cook from "./pages/Cook";
import Health from "./pages/Health";
import Language from "./pages/Language";
import ComputerIT from "./pages/ComputerIT";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
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
  const [home, setHome] = useState([]);
  const [novel, setNovel] = useState([]);
  const [cook, setCook] = useState([]);
  const [health, setHealth] = useState([]);
  const [language, setLanguage] = useState([]);
  const [computerit, setComputerIt] = useState([]);
  const fetchData = async () => {
    // 멤버목록 가져오기
    const params = {
      start: 1,
      count: 5,
    };
    const resultHome = await instance.get(requests.fetchHome, { params });
    setHome(resultHome.data);
    const resultNovel = await instance.get(requests.fetchNovel);
    setNovel(resultNovel.data.data);
    const resultCook = await instance.get(requests.fetchCook, { params });
    setCook(resultCook.data);
    const resultHealth = await instance.get(requests.fetchHealth, { params });
    setHealth(resultHealth.data);
    const resultLanguage = await instance.get(requests.fetchLanguage, {
      params,
    });
    setLanguage(resultLanguage.data);
    const resultComputerit = await instance.get(requests.fetchComputerIt, {
      params,
    });
    setComputerIt(resultComputerit.data);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home home={home} />} />
          <Route path="/novel" element={<Novel novel={novel} />} />
          <Route path="/cook" element={<Cook cook={cook} />} />
          <Route path="/health" element={<Health health={health} />} />
          <Route path="/language" element={<Language language={language} />} />
          <Route
            path="/computerit"
            element={<ComputerIT computerit={computerit} />}
          />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
