import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import images from "../constants/images";
import "./Navbar.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className="app_navbar">
            <div className="app_navbar-logo">
                <img src={ images.logo } alt="logo" />
            </div>
    
            <ul className="app_navbar-links">
                <li className="p_noto"><a href="#home">首页</a></li>
                <li className="p_noto"><a href="#about">关于</a></li>
                <li className="p_noto"><a href="#course">课程</a></li>
                <li className="p_noto"><a href="#coach">教练</a></li>
                <li className="p_noto"><a href="#gallery">会员</a></li>
                <li className="p_noto"><a href="#video">环境</a></li>
                <li className="p_noto"><a href="#contact">联系方式</a></li>
                <li className="p_noto"><a href="#footer">登录/注册</a></li>
            </ul>

            <div className="app_navbar-smallscreen">
                <GiHamburgerMenu fontSize={30} onClick={() => setToggleMenu(true)} className="app_navbar_smallscreen-menu" />

                {toggleMenu && (
                    <div className="app_navbar-smallscreen_overlay flex_center">
                        <IoMdClose fontSize={30} onClick={() => setToggleMenu(false)} className="app_navbar_overlay-close" />
                        <ul className="app_navbar-smallscreen_overlay-links">
                            <li className="p_noto"><a href="#home">首页</a></li>
                            <li className="p_noto"><a href="#about">关于</a></li>
                            <li className="p_noto"><a href="#course">课程</a></li>
                            <li className="p_noto"><a href="#coach">教练</a></li>
                            <li className="p_noto"><a href="#gallery">会员</a></li>
                            <li className="p_noto"><a href="#video">环境</a></li>
                            <li className="p_noto"><a href="#contact">联系方式</a></li>
                            <li className="p_noto"><a href="#footer">登录/注册</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};


export default Navbar;