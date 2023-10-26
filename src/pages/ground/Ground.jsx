import { useParams, useNavigate } from "react-router-dom";
import "./ground.css";
import Navbarlogged from "../../components/navbar/Navbarlogged";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Ground = (props) => {

    let { id } = useParams();
    id = parseInt(id);

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://modo-phinf.pstatic.net/20181116_70/1542349046213rWK8l_JPEG/mosacSPA7N.jpeg?type=w1100",
        },
        {
            src: "https://mblogthumb-phinf.pstatic.net/MjAxNzEyMThfMjk2/MDAxNTEzNTgwNjM0Mzc3.mceNpYWyDkAtlVrA-KjAYCpcGbDd9MoEvrw6L8txdWsg.OuU5g2WxS2qJVhDRb6Qgdm6wZRVKy6VlHS57uvaK6uAg.JPEG.asdj45/%EC%9D%BC%EC%82%B0_%EC%8B%A4%EB%82%B4%EC%B6%95%EA%B5%AC%EC%9E%A5_%EB%8C%80%EC%97%AC_%EB%8C%80%EA%B4%802.jpg?type=w800",
        },
        {
            src: "https://mblogthumb-phinf.pstatic.net/MjAxNzEyMThfMjky/MDAxNTEzNTgwNjM0Mzcz.9JjLo0fJVCJvFaASiFO3-widr9VtuGMMoUBIjw2RZJog._rQs-RKYSO1l-54UPo_wHQW9PZ9yyZ-U07xaJCfNlz0g.JPEG.asdj45/%EC%9D%BC%EC%82%B0_%EC%8B%A4%EB%82%B4%EC%B6%95%EA%B5%AC%EC%9E%A5_%EB%8C%80%EC%97%AC_%EB%8C%80%EA%B4%808.jpg?type=w800",
        },
        {
            src: "https://modo-phinf.pstatic.net/20181116_70/1542349046213rWK8l_JPEG/mosacSPA7N.jpeg?type=w1100",
        },
        {
            src: "https://post-phinf.pstatic.net/MjAyMjEyMDlfNjIg/MDAxNjcwNTU5NjczNTM2.Oig_MfpPH2o8XEuAjH79DhUSbK-rbDvCgOROEmiZqokg.aoUQ4GlxXvI1P5_CcimkEVABldt1erJY0UOWWpBSsCsg.JPEG/3.jpg?type=w800_q75",
        },
        {
            src: "https://www.ncuc.or.kr/File/Download/d8cc515744bac087ef857fcb31bf2d77",
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };


    const navigate = useNavigate();

    const handleReservation = () => {
        const confirmed = window.confirm('예약신청이 완료되었습니다.');
        if (confirmed) {
            navigate("/mypage", {
                state: {
                    title: props.ground[id].title,
                    area: props.ground[id].area,
                    img: props.ground[id].img,
                    date: date,
                    // or the actual area from your data
                }
            });
        }
    };

    return (
        <div>
            <Navbarlogged />
            <Header type="list" />
            <div className="groundContainer">
                {open && (
                    <div className="slider">
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="close"
                            onClick={() => setOpen(false)}
                        />
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className="arrow"
                            onClick={() => handleMove("l")}
                        />
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="arrow"
                            onClick={() => handleMove("r")}
                        />
                    </div>
                )}

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

                <div className="groundWrapper">
                    <button onClick={handleReservation} className="bookNow" >예약신청</button>
                    <h1 className="groundTitle">{props.ground[id].title}</h1>
                    <div className="groundAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>서울시 송파구 잠실동 40-1 R층 </span>
                    </div>
                    <span className="groundDistance">
                        구장안내
                    </span>
                    <span className="groundInfo">
                        구장크기 : 38m x 18m / 추천인원 : 6vs6 이상 / 구장정보 : 야외 인조잔디
                    </span>
                    <div className="groundImages">
                        {photos.map((photo, i) => (
                            <div className="groundImgWrapper" key={i}>
                                <img
                                    onClick={() => handleOpen(i)}
                                    src={photo.src}
                                    alt=""
                                    className="groundImg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="groundDetails">
                        <div className="groundDetailsTexts">
                            <h1 className="groundTitle">이용안내</h1>
                            <p className="groundDesc">

                                ✅ 이용규칙<br />
                                ■ 풋살장 예약시간 준수

                                ■ 풋살장 내 취사, 흡연 및 음주행위, 지나친 소음행위 금지(적발 시 이용불가)

                                ■ 시설 사용 후 정리정돈 ( 쓰레기 반드시 처리 )

                                ■ 고의 및 과실로 인한 시설물 훼손 및 파손시 사용자가 배상하며 경기중 부상은 본인이 책임집니다.

                                ■ 잔디보호와 부상방지를 위하여 스터드가 있는 축구화(SG, FG, HG, AG)는 착용이 금지되며 풋살화(TF)만 착용 가능 합니다.

                                ■ 위 내용이 지켜지지 않을 경우 무환불 퇴장조치 될 수 있으니 예약시 꼭 참고부탁드립니다.

                                ■ 위 내용을 지키지 않아 발생하는 문제는 예약자 본인에게 있습니다.
                                <br /><br />
                                ✅ 주차 상세<br />
                                ⇀ 롯데마트/롯데월드/롯데백화점 주차만 지원 가능.
                                ⇀ 평일 06시 ~ 16시 구장 이용시에는 주차 페이백 불가능. ( 공휴일 예약자 제외 )
                                ⇀ 사무실에서 차량 번호,계좌 정보를 작성해야 1~2주 내 페이백
                                ⇀ 1타임 대관 2대 + 각 2시간 지원 ( 1대 최대 10,000원 까지 환급)
                                ⇀ 06시, 22시 대관팀은 4,000원 환급<br />
                                <br /><br />
                                ✅ 구장 규정<br />
                                ⇀ 모든 이용 팀은 이용 시간에 맞춰 구장 출입 가능
                                ⇀ 흡연 부스 외 공간에서 흡연 금지 ( 적발 시 환불 없이 전체 퇴장 )
                                ⇀ 화장실 외 노상 방뇨 등 금지 ( 적발 시 환불 없이 전체 퇴장 )
                                ⇀ 화장실 외 탈의 금지. ( 1회 경고 후 당사자 즉각 퇴장 )
                                ⇀ 22시 이후 지나친 소음 주의 ( 1회 경고 후 환불 없이 퇴장)<br />
                            </p>
                        </div>
                        <div className="groundDetailsPrice">
                            <h1>예약비용</h1>
                            <span>
                                ✅평일 대관 50% 이벤트<br />
                                ◾ 평일 06~16시까지 이용팀은 정상가의 50% 이벤트
                                ◾ 50% 이용팀의 경우 주차 페이백x
                                ◾ 풋살화, 풋살공, 식음료 구매 및 대여x
                                ◾ 광고 촬영 / 행사 목적으로 대관하는 경우 이벤트 x
                                ⇀ 반드시 관리자에게 문의 주세요.
                            </span>
                            <h2>
                                <b>55,000원</b> (2 시간당 )
                            </h2>
                            <button onClick={handleReservation}>예약신청</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Ground;