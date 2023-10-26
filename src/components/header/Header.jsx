import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faBasketball, faRocket, faTicket, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import "./header.css"
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        people: 1,

    });

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate("/ground", { state: { destination, date, options } });
    };

    return (
        <div className="header">
            <div className={
                type === "list" ? "headerContainer listMode" : "headerContainer"
            }>
                <div className="headerList">
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faFutbol} />
                        <span>풋살장</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBasketball} />
                        <span>농구장</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faRocket} />
                        <span>배드민턴장</span>

                    </div>
                </div>
                {type !== "list" && (
                    <>
                        <h1 className="headerTitle">
                            바로 지금 그라운드로 나가라, 애드인그라운드
                        </h1>
                        <p className="headerDesc">
                            축구, 풋살, 농구 중 종목을 선택하고 구장을 예약하세요. 수많은 구장이 기다리고 있습니다.
                        </p>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faTicket} className="headerIcon" />
                                <input
                                    type="text"
                                    placeholder="경기장을 선택해주세요?"
                                    className="headerSearchInput"
                                    onChange={(e) => setDestination(e.target.value)} />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="headerSearchText"> {`${format(date[0].startDate, "yy년MM월dd일")}~${format(
                                        date[0].endDate,
                                        "yy년MM월dd일"
                                    )}`} </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}

                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText"> {`인원 ${options.people} 명`}</span>
                                {openOptions && (
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">people</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.people <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("people", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.people}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("people", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>검색</button>
                            </div>
                        </div></>)}

            </div>
        </div>
    );

}

export default Header