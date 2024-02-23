import React from "react";
import { Subheading } from "../components";
import { FaWeibo } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { FaBilibili } from "react-icons/fa6";

import images from "../constants/images";
import "./Footer.css";

const Footer = () => (
    <>
        <div className="app_wrapper section_padding">
            <div className="app_wrapper_info" id="contact">
                <Subheading title="联系方式"/>
                <h1 className="h_zcool" style={{ marginBottom: '3rem' }}>找到我们</h1>
                    <div className="app_wrapper-content">
                        <p className="p_noto">瑞瓦肖共和国/加姆洛克州/马丁内斯/褴褛飞旋1F</p>
                        <p className="p_zcool" style={{ color: '#DCCA87', margin: '2rem 0' }}>营业时间</p>
                        <p className="p_noto">周二到周五：9:00-21:00</p>
                        <p className="p_noto">周六到周日：10:00-23:00</p>
                    </div>
                    <button type="button" className="custom_button" style={{ marginTop: '2rem' }}>预约参观</button>
            </div>

            <div className="app_wrapper_img">
                <img src={images.platform} alt="拳击台" />
            </div>
        </div>

        <div className="app_footer section_padding">
            <div className="app_newsletter">
                <div className="app_newsletter-heading">
                    <Subheading title="关注与订阅" />
                    <h1 className="h_zcool">订阅我们的动态</h1>
                    <p className="p_noto">不错过最新优惠，还有公开讲座等你来噢！</p>
                </div>      
                <div className="app_newsletter-input flex_center">
                    <input type="email" placeholder="请输入您的邮箱" />  
                    <button type="button" className="custom_button">立即订阅</button>
                </div>
            </div>

            <div className="app_footer-links">
                <div className="app_footer-links_contact">
                    <h1 className="app_footer-headtext">联系我们</h1>
                    <p className="p_noto">瑞瓦肖共和国/加姆洛克州/马丁内斯/褴褛飞旋1F</p>
                    <p className="p_noto">+404 1234567</p>
                    <p className="p_noto">+404 9876540</p>
                    <p className="p_noto">+404 9856666</p>
                </div>

                <div className="app_footer-links_logo">
                    <img src={images.logo} alt="footer_logo" />
                    <p className="p_noto">&quot;拳击挺有意思的，两个人打成那样，最后还能抱在一起。&quot;</p>
                    <div className="app_footer-links_icons">
                        <FaWeibo />
                        <IoLogoWechat />
                        <FaBilibili />
                    </div>
                </div>

                <div className="app_footer-links_work">
                    <h1 className="app_footer-headtext">工作时间</h1>
                    <p className="p_noto">周二到周五：</p>
                    <p className="p_noto">9:00-21:00</p>
                    <p className="p_noto">周六到周日：</p>
                    <p className="p_noto">10:00-23:00</p>
                </div>
            </div>
    </div>
    </>
);

export default Footer;