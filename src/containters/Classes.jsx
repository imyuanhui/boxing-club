import { Subheading, CourseItem } from "../components";
import data from "../constants/data";
import images from "../constants/images";

import "./Classes.css";


const Classes = () => (
    <div className="app_course flex_center section_padding" id="course">
        <div className="app_course-title">
            <Subheading title="最适合您的训练计划" />
            <h1 className="h_zcool">特色课程</h1>
        </div>
        
        <div className="app_course-main">
            <div className="app_course-main_container flex_center">
                <p className="app_course-main_heading">团体课程</p>
                <div className="app_course-main_items">
                   {data.publicCourse.map((course, index) => (
                    <CourseItem key={course.title + index} title={course.title} price={course.price} tags={course.tags} />
                    ))} 
                </div>
            </div>

            <div className="app_course-main_img">
                <img src={images.glove} alt="拳击手套" />
            </div>

            <div className="app_course-main_container flex_center">
                <p className="app_course-main_heading">一对一课程</p>
                <div className="app_course-main_items">
                   {data.privateCourse.map((course, index) => (
                    <CourseItem key={course.title + index} title={course.title} price={course.price} tags={course.tags} />
                    ))} 
                </div>
            </div>
        </div>

        <div style={{ marginTop: 15 }}>
            <button type="button" className="custom_button">定制课程</button>
        </div>
    </div>
);

export default Classes;