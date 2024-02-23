import React from "react";
import images from "../constants/images";
import "./About.css";

const About = () => (
    <div className="app_about flex_center section_padding" id="about">

        <div className="app_about-content flex_center">

            <div className="app_about-content_about">
                <h1 className="h_zcool">关于我们</h1>
                <p className="p_noto">我们致力于推动女性健身运动的发展，不断创新课程内容和服务形式，为更多女性提供更优质的健身体验，成为女性健康生活的引领者和践行者。</p>
                <button type="button" className="custom_button">了解更多</button>
            </div>

            <div className="app_about-content_image flex_center">
                <img src={images.bag} alt="沙包" />
            </div>

            <div className="app_about-content_history">
                <h1 className="h_zcool">发展历程</h1>
                <p className="p_noto">2018年1月，YOLO在马丁内斯成立；2020年6月，YOLO在伊苏林迪开设首家分店，并开通全平台社交账号；2023年12月，YOLO成为全国影响力最大的女性健身品牌。</p>
                <button type="button" className="custom_button">了解更多 </button>
            </div>

        </div>
    </div>
);

export default About;