import "./propertyList.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertyList = (props) => {
    const [pldata4] = useState(props.pldata3 || []);
    const navigate = useNavigate();

    return (
        <div className="pList">
            {pldata4.map((a, i) => (
                <div
                    className="pListItem"
                    key={i}
                    onClick={() => {
                        // useNavigate hook을 사용하여 이동
                        navigate(`/ground/${a.id}`);
                    }}
                >
                    <img src={a.img} alt="" className="pListImg" />
                    <div className="pListTitles">
                        <h1>{a.area}</h1>
                        <h2>{a.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PropertyList;