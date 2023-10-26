import "./mailList.css"

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">시간과 돈을 절약하세요!</h1>
            <span className="mailDesc">가입하시면 최신 정보를 보내드리겠습니다.</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="이메일을 입력해주세요" />
                <button>구독하기</button>
            </div>
        </div>
    )
}

export default MailList