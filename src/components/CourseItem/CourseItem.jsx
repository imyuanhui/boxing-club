import './CourseItem.css'

const CourseItem = ({ title, tags, price }) => (
    <div className="app_courseitem">
    <div className="app_courseitem-head">
      <div className="app_courseitem-name">
        <p className="p_noto">{title}</p>
      </div>

      <div className="app_courseitem-dash" />

      <div className="app_courseitem-price">
        <p className="p_noto">{price}</p>
      </div>
    </div>

    <div className="app_courseitem-sub">
      <p className="p_noto" style={{ color: 'grey' }}>{tags.join(" | ")}</p>
    </div>
  </div>
);

export default CourseItem;