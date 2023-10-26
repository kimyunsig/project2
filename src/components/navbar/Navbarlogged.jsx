// Navbarlogged.jsx

import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Navbarlogged = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3001/logged', {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.user_Id) {
          setUser(response.data.user_Id);
        }
      })
      .catch((error) => {
        console.error('사용자 정보를 가져오는 중 오류 발생: ' + error);
      });
  }, []);

  const goToHome = () => {
    console.log("Logo clicked"); // 콘솔에 로그 출력
    navigate("/");
};

  const logged = () => {
    navigate('/mypage');
  };

  const logout = () => {
    axios
      .post('http://localhost:3001/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        alert('로그아웃이 완료되었습니다.');
        setUser(null);
        navigate('/');
      })
      .catch((error) => {
        console.error('로그아웃 중 오류 발생: ' + error);
      });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
      <span className="logo" onClick={goToHome}>Add in ground</span>
        <div className="navItems">
          <span className="logged" onClick={logged}>
            {user ? `[ ${user} ]님 마이페이지` : '로그인하세요'}
          </span>
          <button className="navButton" onClick={logout}>
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbarlogged;
