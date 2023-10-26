import "./featuredProperties.css";
import { useNavigate } from "react-router-dom";

const FeaturedProperties = () => {
    const navigate = useNavigate();

    return (
        <div className='fp'>
            <div className="fpItem" onClick={() => {
                // useNavigate hook을 사용하여 이동
                navigate(`/ground/0`);
            }}>
                <img
                    src="https://modo-phinf.pstatic.net/20181116_56/1542349611510RscHr_JPEG/mosa99JLjR.jpeg?type=w1100"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">노원 팀일레븐 트레이닝존</span>
                <span className="fpCity">서울시 노원구 </span>
                <span className="fpPrice">35,000원~</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>샤워실/</span>
                    <span>공대여</span>
                </div>
            </div>
            <div className="fpItem" onClick={() => {
                navigate(`/ground/1`);
            }}>
                <img
                    src="https://www.yjcmc.or.kr/images/sub/sub01/futsal_01.jpg"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">부산 기장축구센터 야외풋살장</span>
                <span className="fpCity">부산시 기장군</span>
                <span className="fpPrice">80,000원~</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>주차장/</span>
                    <span>풋살화대여</span>
                </div>
            </div>
            <div className="fpItem" onClick={() => {
                navigate(`/ground/2`);
            }}>
                <img
                    src="https://www.syu.ac.kr/sportscenter/wp-content/uploads/sites/43/2022/09/su_basketball_court-390x240.jpg"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">광명 올짐스포츠 실내 농구장</span>
                <span className="fpCity">경기도 광명시</span>
                <span className="fpPrice">70,000원~</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>냉난방/</span>
                    <span>샤워실</span>
                </div>
            </div>
            <div className="fpItem" onClick={() => {
                navigate(`/ground/3`);
            }}>
                <img
                    src="https://www.nowonsc.kr/design/homepage/nowon/img/sub/badminton_img0202.jpg"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">초안산배드민턴구장</span>
                <span className="fpCity">서울특별시 도봉구</span>
                <span className="fpPrice">70,000원~</span>
                <div className="fpRating">
                    <button>8.6</button>
                    <span>주차장/</span>
                    <span>샤워실</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties