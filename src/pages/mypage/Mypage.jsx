import { useLocation } from "react-router-dom";
import Navbarlogged from "../../components/navbar/Navbarlogged";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
// import Footer from "../../components/footer/Footer";
// import MailList from "../../components/mailList/MailList";

const Mypage = (props) => {
    let [ground2] = useState(props.ground)
    const location = useLocation();
    const [date, setDate] = useState(location.state?.date || [
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openDate, setOpenDate] = useState(false);
    // const { title, area, img } = location.state;
    const { title, area, img } = location.state || {};

    return (
        <>  <Navbarlogged />
            <div>
                <h1>예약 정보 확인</h1>
                <p>제목: {title}</p>
                <p>지역: {area}</p>
                <img src={img} alt="ground" width="30%" />
            </div>
            <div className="lsItem">
                <label>예약 날짜 </label>
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
            {/* <MailList />
            <Footer /> */}

        </>
    );
};

export default Mypage



// const Mypage = () => {
//     let [myinfo] = useState(mydata)
//     let [myres] = useState(myre)
//     return (
//         <>
//             <Navbarlogged />
//             <div>
//                 {myinfo.map((a, i) => {
//                     return (
//                         <My myinfo={myinfo[i]} i={i} />
//                     )
//                 })
//                 }
//             </div>
//             <div>
//                 {myres.map((a, i) => {
//                     return (
//                         <Myres myres={myres[i]} i={i} />
//                     )
//                 })
//                 }
//             </div>

//         </>
//     )
// }