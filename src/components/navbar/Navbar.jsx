import './navbar.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    // 로고 클릭시 홈으로 이동하는 함수 추가
    const goToHome = () => {
        console.log("Logo clicked"); // 콘솔에 로그 출력
        navigate("/");
    };


    const signUpGo = () => {
        navigate("/signup");
    };

    const logIn = () => {
        navigate("/login");
    };
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo" onClick={goToHome}>Add in ground</span>
                <div className="navItems">
                    <button className="navButton" onClick={signUpGo}>회원가입</button>
                    <button className="navButton" onClick={logIn}>로그인</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar