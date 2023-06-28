import React, { useState } from 'react';
import './member.css';

function MemberForm(props) {


  const [newEmail, setNewEmail] = useState('');
  const [newPw, setNewPw] = useState('');
  const [newName, setNewName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
    }

    const handlePwChange = (event) => {
      setNewPw(event.target.value);
      }

    const handleNameChange = (event) => {
      setNewName(event.target.value);
    }

    const handleAgeChange = (event) => {
      setAge(event.target.value);
      }

      const handleGenderChange = (event) => {
        setGender(event.target.value);
        }

        const handleSubmit = (event) => {
          event.preventDefault();
          if (newEmail && newPw && newName && age && gender) {
            alert("회원가입이 완료되었습니다.");
            // 부모 컴포넌트에서 전달받은 함수를 호출하여 상태값 전달
            props.onSignUp({
              newEmail,newPw,newName,age,gender});
              // 입력값 초기화
            setNewEmail('');
            setNewPw('');
            setNewName('');
            setAge('');
            setGender('');
            } else {
              alert("모든 항목을 입력해주세요.");
              }
              }

              return (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="new-email">본인 확인 이메일:</label>
                  <input type="email" id="new-email" name="new-email" value={newEmail} onChange={handleEmailChange} />
                  <button type="button">인증메일 전송</button>
                  <br /><br />
                  <label htmlFor="new-pw">비밀번호:</label>
                  <input type="password" id="new-pw" name="new-pw" value={newPw} onChange={handlePwChange} />
                  <br /><br />
                  <label htmlFor="new-name">이름:</label>
                  <input type="text" id="new-name" name="new-name" value={newName} onChange={handleNameChange} />
                  <br /><br />
                  <label htmlFor="age">나이:</label>
                  <input type="number" id="age" name="age" min="1" max="100" value={age} onChange={handleAgeChange} />
                  <br /><br />
                  <label htmlFor="gender">성별:</label>                                   
                  <input type="text" id="gender" name="gender" value={gender} onChange={handleGenderChange} />
                  <br /><br />
                  <button type="submit">회원가입 완료</button>
                  </form>
                  );
                  }
                  export default MemberForm;
                