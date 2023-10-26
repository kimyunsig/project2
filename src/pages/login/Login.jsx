// login.jsx

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './login.css';

const Login = () => {
  const [user_Id, setUser_Id] = useState('');
  const [user_Pw, setUser_Pw] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios
      .post('http://localhost:3001/login', { user_Id, user_Pw }, { withCredentials: true }) // withCredentials 추가
      .then((response) => {
        if (response.data.success) {
          alert('로그인 성공');
          setUser_Id(response.data.user_Id);
          // 로그인 성공 시 세션 쿠키가 저장되어 있으므로 프로필 페이지로 이동 가능
          navigate('/logged');
        } else {
          alert('로그인 실패: ' + response.data.message);
        }
      })
      .catch((error) => {
        console.error('로그인 요청 중 오류 발생: ' + error);
      });
  };

  const handleLogout = () => {
    axios
      .post('http://localhost:3001/logout', null, { withCredentials: true }) // withCredentials 추가
      .then(() => {
        setUser_Id('');
        window.open('http://localhost:3000', '_self');
      })
      .catch((error) => {
        console.error('로그아웃 요청 중 오류 발생: ' + error);
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/logged', {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('프로필 정보를 불러오는 중 오류 발생: ' + error);
      });
  }, []);

  return (
    <div className="login">
      <form className="lContainer" onSubmit={handleSubmit}>
        <h1 className="signUpH1">로그인</h1>
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          value={user_Id}
          onChange={(e) => setUser_Id(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={user_Pw}
          onChange={(e) => setUser_Pw(e.target.value)}
        />
        <button className="lButton" type="submit">
          로그인
        </button>
      </form>
      {user_Id && (
        <div>
          <p>로그인한 사용자: {user_Id}</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      )}
    </div>
  );
};

export default Login;
