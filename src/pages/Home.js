import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="header-bt">
        <div className="header-txt">HOME</div>
      </div>
      <div
        class="btn-group-vertical"
        role="group"
        aria-label="Vertical button group"
      >
        <Link className="btn btn-outline-primary btn-lg mt-5" to="/novel">
          소설
        </Link>
        <Link className="btn btn-outline-primary btn-lg" to="/cook">
          요리
        </Link>
        <Link className="btn btn-outline-primary btn-lg" to="/health">
          건강
        </Link>
        <Link className="btn btn-outline-primary btn-lg" to="/language">
          외국어
        </Link>
        <Link className="btn btn-outline-primary btn-lg" to="/computerit">
          컴퓨터/IT
        </Link>
      </div>
    </div>
  );
};
export default Home;
