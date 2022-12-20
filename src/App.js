import Header from "./components/Header";
import Home from "./pages/Home";
import Novel from "./pages/Novel";
import Cook from "./pages/Cook";
import Health from "./pages/Health";
import Language from "./pages/Language";
import ComputerIT from "./pages/ComputerIT";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
