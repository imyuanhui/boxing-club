import React from "react";
import { FaPlayCircle,FaPauseCircle } from "react-icons/fa";
import environment from "../constants/video";
import "./Video.css";

const Video = () => {
    const [play, setPlay] = React.useState(false);
    const vidRef = React.useRef();

    React.useEffect(() => {
        if (play) {
            vidRef.current.play();
        } else {
            vidRef.current.pause();
        }},
         [play]);

    return (
        <div className="app_video" id="video">
            
                <div className="app_video-overlay flex_center">
                    {play ? (<FaPauseCircle onClick={() => setPlay(false)} className="app_video-overlay_icon"/>) : (
                        <FaPlayCircle onClick={() => setPlay(true)} className="app_video-overlay_icon"/>
                    )}
                </div>
            <video 
                src={environment.video}
                type="video/mp4"
                ref={vidRef}
                loop
                controls={false}
                muted
            />
        </div>
    );
};

export default Video;