import "./featured.css";
import { useNavigate } from "react-router-dom";

const Featured = () => {
    const navigate = useNavigate();
    return (
        <div className="featured">
            <div className="featuredItem" onClick={() => {
                navigate(`/ground/0`);
            }}>
                <img
                    src="https://fastly.4sqi.net/img/general/600x600/2078212_BXawq0dKo5n6qe0UoYCRWfQDee5vcyvO0iFM72lu9ME.jpg"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>서울시 송파구</h1>
                    <h2>잠실 로꼬풋살스타디움 </h2>
                </div>
            </div>

            <div className="featuredItem" onClick={() => {
                navigate(`/ground/1`);
            }}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNjwmiyXhbEg8CwHR_4E3PtmDCUqN-_vKDSA&usqp=CAU"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>수원시 권선구</h1>
                    <h2>노총스포츠파크 풋살장</h2>
                </div>
            </div>
            <div className="featuredItem" onClick={() => {
                navigate(`/ground/2`);
            }}>
                <img
                    src="https://media.timeout.com/images/105961382/750/422/image.jpg"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>김포시 고촌읍</h1>
                    <h2>고촌 태리 실내풋살장</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;