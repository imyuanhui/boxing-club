import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

import images from "../constants/images";
import { Subheading } from "../components";
import "./Coach.css";

const Coach = () => (
    <div className="app_wrapper section_padding" id="coach">
      <div className="app_wrapper_img app_wrapper_img-reverse">
        <img src={images.coach} alt="教练" />
      </div>
      <div className="app_wrapper_info">
        <Subheading title="创始人的话" />
        <h1 className="h_zcool">我们始终相信</h1>
  
        <div className="app_coach-content">
          <div className="app_coach-content_quote">
            <FaQuoteLeft fontSize={45} className="app_coach-content_quoteIcon"/>
            <p className="p_noto">拳击不仅是一种运动，更是一种生活态度。</p>
          </div>
          <p className="p_noto"> 当你踏入拳击的世界，你将迎接无尽的挑战与激情。它教会你坚持不懈、勇往直前，无论是在擂台上还是生活中。
            在拳击的世界里，每个人都可以找到自己的位置。无论你是新手还是资深选手，每个人都有机会不断成长和进步。在拳击的旅程中，你会与伙伴们并肩奋斗，共享胜利和成长的喜悦。 </p>
        </div>
  
        <div className="app_coach-sign">
          <p>乐莹</p>
          <p className="p_noto">YOLO创始人 & 教练</p>
        </div>
      </div>
    </div>
  );

export default Coach;