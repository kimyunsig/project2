const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const mysql = require('mysql2');
const path = require('path');
// Session store options
let options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'team_project'
};

let sessionStore = new MySQLStore(options);

let app = express();
let port = 3001;

// CORS 설정
let allowedOrigins = ['http://52.79.92.156:3001'];
let corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(
  session({
    secret: 'kimyunsig',
    resave: false,
    saveUninitialized: true,
	store : sessionStore, // Add this line to use mysql session store
	cookie : { maxAge : 3600000, secure : false } //배포환경에서는 secure를 true로 변경하세요.
}));

app.use(express.static(path.join(__dirname, '../build')));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'team_project',
});

app.post('/signup', (req, res) => {
  const receivedData = req.body;
  //console.log('받은 데이터:', receivedData);
  // 여기에서 데이터를 처리하고 필요한 작업을 수행
  // webpage 에서 받은 데이터 가공
  const testquery1 =  receivedData.values.user_Id;
  const queryFind = "SELECT * FROM login WHERE user_Id = ? ";
  
  connection.query(queryFind,testquery1,(error, result, fields) => {
    //if (error) {throw error};
    
    if (result.length > 0) {
        //console.log("중복있음");
        res.json({ message: '0' });
        //console.log('데이터베이스에 데이터를 삽입할 수 없습니다: ' + error);
      } 
      else {
          
          //console.log("중복없음");
          
          // 중복이 없는 경우 데이터베이스에 저장하는 로직을 이곳에 추가
          const user_Num = receivedData.values.user_Num;  
          const user_Id = receivedData.values.user_Id;
          const user_Pw = receivedData.values.user_Pw; 
          const user_Pwcheck = receivedData.values.user_Pwcheck;
          const user_Name = receivedData.values.user_Name;
          const user_Phone = receivedData.values.user_Phone;
          
          // 변수안에 데이터를 넣어주고 쿼리문 안에 넣을 데이터로 처리     
          const values = [user_Num, user_Id, user_Pw, user_Pwcheck, user_Name, user_Phone];
          
          
          // 벨류값 잘 들어갔는지 확인
          //console.log(values);
          
          // web에서 받은 데이터 database 에 넣어줄 쿼리문으로 작성
          const sql = 'INSERT INTO login (user_Num, user_Id, user_Pw, user_Pwcheck, user_Name, user_Phone) VALUES (?, ?, ?, ?, ?, ?)';
          
          // 쿼리문 제어
          connection.execute(sql, values, (err, result) => {
            if (err) {
              //console.log('데이터베이스에 데이터를 삽입할 수 없습니다: ' + err);
              
            } else {
              console.log('데이터가 성공적으로 데이터베이스에 삽입되었습니다.');
              res.json({ message: '1' });
            }
          });  
        }
       
    
  });
  
});


app.get('/logged', (req, res) => {
  if (req.session.user) {
    // 세션에 사용자 정보가 있는 경우
    const user_Id = req.session.user.user_Id;
    // 사용자 정보를 사용하여 원하는 작업을 수행할 수 있음
    res.json({ user_Id });
  } else {
    // 세션에 사용자 정보가 없는 경우
    res.json({ user_Id: null });
  }
});


connection.connect(function (err) {
  if (err) {
    console.error('연결실패 :' + err.stack);
    return;
  }
  console.log('연결완료');
});


const axios = require('axios'); // Axios 라이브러리 임포트

// 클라이언트 측 로그인 폼 및 요청
const user_Id = '사용자_아이디';
const user_Pw = '사용자_비밀번호';



app.post('/login', (req, res) => {
  const user_Id = req.body.user_Id;
  const user_Pw = req.body.user_Pw;

  const sql = 'SELECT * FROM login WHERE user_Id=? AND user_Pw=?';

  const values = [user_Id, user_Pw];

  connection.query(sql, values, function (err, result) {
    if (err) {
      console.error('데이터베이스에서 로그인 정보를 가져오는 중 오류 발생: ' + err);
      res.status(500).json({ success: false, message: '데이터베이스 오류' });
      return;
    }

    if (result.length === 0) {
      res.json({ success: false, message: '존재하지 않는 아이디이거나 비밀번호가 일치하지 않습니다.' });
    } else {
      const user_Id = result[0].user_Id;
      // 여기서 세션에 사용자 정보를 저장합니다.
      req.session.user = { user_Id, user_Pw };
      
      console.log('Session ID: ', req.sessionID); //세션 ID 출력
      res.json({ success: true, message: '로그인 되었습니다.', user_Id });
    }
  });
});


// 로그아웃 라우트
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.json({ success: false, message: '세션 삭제 오류' });
    } else {
      res.json({ success: true, message: '로그아웃 되었습니다.' });
    }
  });
});



app.listen(3001, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});
