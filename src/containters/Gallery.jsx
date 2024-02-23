import React from "react";
import images from "../constants/images";
import { Subheading } from "../components";
import { FaArrowAltCircleLeft ,FaArrowAltCircleRight} from "react-icons/fa";

import "./Gallery.css";
const imagesArray = [images.p1, images.p2, images.p3, images.p4];

const Gallery = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === "left") {
            current.scrollLeft -= 450;
        } else {
            current.scrollLeft += 450;
        }
    };

    return (
        <div className="app_gallery flex_center" id="gallery">
           
            <div className="app_gallery-content">
                <Subheading title="照片墙" />
                <h1 className="h_zcool">会员风采</h1>
                <p className="p_noto" style={{ color: '#AAAAAA', marginTop: '2rem' }}>YOLO的每一位会员都是无可替代的力量，她们以坚定的信念和勇气面对挑战，勇往直前，为自己的梦想奋斗，成为自己生活的主宰。</p>
                <button type="button" className="custom_button">现在加入</button>
            </div>

            <div className="app_gallery-images">
                <div className="app_gallery-images_container" ref={scrollRef}>
                    {imagesArray.map((image) => (
                        <div className="app_gallery-images_card flex_center">
                            <img src={image} alt="gallery" />
                        </div>
                    ))}
                </div>

                <div className="app_gallery-images_arrows">
                    <FaArrowAltCircleLeft className="gallery_arrow-icon" onClick={() => scroll("left")}  />
                    <FaArrowAltCircleRight className="gallery_arrow-icon" onClick={() => scroll("right")} />
                </div>
            </div>
        </div>
    );
};

export default Gallery;