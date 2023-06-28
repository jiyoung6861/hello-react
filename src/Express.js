const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: '3306', // MariaDB 호스트
  user: 'hoseo', // MariaDB 사용자 이름
  password: '1234', // MariaDB 비밀번호
  database: '영양이', // 사용할 데이터베이스 이름
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MariaDB:', err);
    return;
  }
  console.log('Connected to MariaDB!');
});

// 예시 API 엔드포인트
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users';
  connection.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(result);
  });
});

// 서버 시작
const port = 3000; // 프록시에 설정한 포트와 동일한 포트로 설정합니다.
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});