import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="header-bt">
        <div className="header-txt">HOME</div>
      </div>

      <div className="home-box">
        <Link className="home-link" to="/novel">
          <img src="img/novel1.jpg" alt="" className="home-img" />
          <img src="img/novel2.jpg" alt="" className="home-img" />
          <img src="img/novel3.jpg" alt="" className="home-img" />
          <div className="home-txt">소설</div>
        </Link>

        <Link className="home-link" to="/cook">
          <img src="img/cook1.jpg" alt="" className="home-img" />
          <img src="img/cook2.jpg" alt="" className="home-img" />
          <img src="img/cook3.jpg" alt="" className="home-img" />
          <div className="home-txt">요리</div>
        </Link>

        <Link className="home-link" to="/health">
          <img src="img/health1.jpg" alt="" className="home-img" />
          <img src="img/health2.jpg" alt="" className="home-img" />
          <img src="img/health3.jpg" alt="" className="home-img" />
          <div className="home-txt">건강</div>
        </Link>

        <Link className="home-link" to="/language">
          <img src="img/language1.jpg" alt="" className="home-img" />
          <img src="img/language2.jpg" alt="" className="home-img" />
          <img src="img/language3.jpg" alt="" className="home-img" />
          <div className="home-txt">외국어</div>
        </Link>

        <Link className="home-link" to="/computerit">
          <img src="img/computer1.jpg" alt="" className="home-img" />
          <img src="img/computer2.jpg" alt="" className="home-img" />
          <img src="img/computer3.jpg" alt="" className="home-img" />
          <div className="home-txt">컴퓨터/IT</div>
        </Link>
      </div>
    </div>
  );
};
export default Home;
