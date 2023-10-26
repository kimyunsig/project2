import "./list.css";
import "../../components/searchItem/searchItem.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
// import SearchItem from "../../components/searchItem/SearchItem";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

import { useNavigate } from "react-router-dom";


const List = (props) => {
    let [ground2] = useState(props.ground)

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        setDestination(searchTerm);
    };

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination || "");
    const [date, setDate] = useState(location.state.date || "");
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options || "");

    const filteredGrounds = ground2.filter(a =>
        a.title.toLowerCase().includes(destination.toLowerCase()) ||
        a.area.toLowerCase().includes(destination.toLowerCase())
    );
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">검색</h1>
                        <div className="lsItem">
                            <label>경기장</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label>날짜</label>
                            <span onClick={() => setOpenDate(!openDate)}>  {`${format(date[0].startDate, "yy년MM월dd일")}~${format(
                                date[0].endDate,
                                "yy년MM월dd일"
                            )}`} </span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}

                        </div>
                        <div className="lsItem">
                            <label>선택사항</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">인원</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.people}
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleSearch}>검색</button>
                    </div>
                    <div className="listResult">
                        {/* {
                            ground2.map((a, i) => {
                                return <SearchItem ground3={a} i={i} />
                            })
                        } */}
                        {

                            filteredGrounds.length > 0
                                ? filteredGrounds.map((a, i) => {
                                    return <SearchItem ground3={a} i={i} />
                                })
                                : <p>검색 결과가 없습니다.</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


const SearchItem = (props) => {
    let [ground4] = useState(props.ground3)

    const navigate = useNavigate();
    // console.log(ground4.title)




    return (
        <div className="searchItem">
            <img
                src={ground4.img}
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{ground4.title}</h1>
                <span className="siDistance">{ground4.area}</span>
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
                    <span className="siPrice">{ground4.price}</span>
                    <span className="siTaxOp">사용기간은 종일 대여</span>
                    <button onClick={() => navigate(`/ground/${ground4.id}`)
                    } className="siCheckButton">예약하기</button>

                </div>
            </div>
        </div>
    );
};

export default List