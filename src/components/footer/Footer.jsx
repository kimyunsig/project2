import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">홈</li>
                    <li className="fListItem">지역</li>
                    <li className="fListItem">교통편</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">풋살장 </li>
                    <li className="fListItem">농구장 </li>
                    <li className="fListItem">배드민턴장</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">리뷰</li>
                    <li className="fListItem">커뮤니티 </li>
                    <li className="fListItem">운영시간 </li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">예약 정보 </li>
                    <li className="fListItem">예약 특가 </li>
                    <li className="fListItem">이용 안내 </li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">문의처</li>
                    <li className="fListItem">이용 약관</li>
                    <li className="fListItem">FAQ</li>
                </ul>
            </div>
            <div className="fText">Copyright © 2023 Addinground.</div>
        </div>
    );
};

export default Footer;
