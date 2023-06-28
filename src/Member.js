import React from 'react';
import './member.css';


function Member() {
  function handleSignUp() {
    const newEmail = document.getElementById("new-email").value;
    const newPw = document.getElementById("new-pw").value;
    const newName = document.getElementById("new-name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    if (newEmail && newPw && newName && age && gender) {
      alert("회원가입이 완료되었습니다.");
      // 회원가입 폼 숨김
      document.getElementById("register-form").style.display = "none";
    } else {
      alert("모든 항목을 입력해주세요.");
    }
  }
  

  return (
    <div>
      <h1>
        <u>Join</u>
      </h1>
      <MemberForm onSignUp={handleSignUp} />
    </div>
  );
}

ReactDOM.render(<Member />, document.getElementById('root'));
function handleCreateAccount() {
  const newEmail = document.getElementById("new-em").value;
  const newPw = document.getElementById("new-pw").value;
  const newName = document.getElementById("new-nm").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  
  if (newEmail && newPw && newName && age && gender) {
      if (newPw === newPw) {
          alert("회원가입이 완료되었습니다.");
          // 회원가입 폼 숨김
          document.getElementById("register-form").style.display = "none";
      } else {
          alert("비밀번호와 비밀번호 재확인 값이 일치하지 않습니다.");
      }
  } else {
      alert("모든 항목을 입력해주세요.");
  }
}