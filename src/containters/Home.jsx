import React from "react";
import { Subheading } from "../components";
import images from "../constants/images";

import "./Home.css";

const Home = () => (
    <div className="app_home app_wrapper section_padding" id="home">
        <div className="app_wrapper_info">
            <Subheading title="蜕变由此发生"/>
            <h1 className="app_home-slogan">绽放她力量！</h1>
            <p className="p_noto" style={{ margin: '2rem 0' }}>无论你是初学者还是经验丰富的拳击手，我们都有适合你的课程和活动。在这里，你将结识志同道合的伙伴，共同挑战自我，开启属于你的拳击之旅。</p>
            <button type="button" className="custom_button">开始探索</button>
        </div>

        <div className="app_wrapper_img">
            <img src={images.boxer} alt="拳击手"/>
        </div>
    </div>
);

export default Home;