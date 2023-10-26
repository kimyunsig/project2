import "./searchItem.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const SearchItem = (props) => {

    const navigate = useNavigate();
    let { id } = useParams();
    id = parseInt(id);

    const groundGo = () => {
        navigate('/ground/' + id);

    };


    return (
        <div className="searchItem">
            <img
                src={props.ground.img}
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{props.ground.title}</h1>
                <span className="siDistance">{props.ground.area}</span>
                <span className="siTaxiOp">실내 인조 잔디</span>
                <span className="siSubtitle">
                    구장크기 : 12m x 12m
                </span>
                <span className="siFeatures">
                    추천용도 : 훈련 • 개인연습
                </span>
                <span className="siCancelOp">예약 취소하기</span>
                <span className="siCancelOpSubtitle">
                    대관 5일 전까지 예약 취소 시 100% 환불 가능
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>샤워실/공대여</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">{props.ground.price}</span>
                    <span className="siTaxOp">사용기간은 종일 대여</span>
                    <button onClick={() => {
                        navigate("/ground/1");
                    }} className="siCheckButton">예약하기</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;