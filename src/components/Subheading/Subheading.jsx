import { GiBoxingGloveSurprise } from "react-icons/gi";

const Subheading = (props) => {
    return(
        <div style={{ marginBottom: '1rem', display: "flex", justifyContent:"center", alignItems: "center"}}>
            <p className="p_zcool">{props.title}</p>
            <GiBoxingGloveSurprise className="subheading-icon"/>
        </div>
    )
};

export default Subheading;