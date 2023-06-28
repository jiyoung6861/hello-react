import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function CalorieCalculator() {
  const [height, setHeight] = useState('');
  const [physicalLevel, setPhysicalLevel] = useState('2');
  const [rdi, setRDI] = useState('');

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handlePhysicalLevelChange = (event) => {
    setPhysicalLevel(event.target.value);
  };

  const calculateRDI = () => {
    const parsedHeight = parseFloat(height);

    if (isNaN(parsedHeight)) {
      alert('키를 올바르게 입력해주세요.');
      return;
    }

    const weight = (parsedHeight - 100) * 0.9;

    let activityIndex = 0;
    if (physicalLevel === '1') {
      activityIndex = 40;
    } else if (physicalLevel === '2') {
      activityIndex = 35;
    } else if (physicalLevel === '3') {
      activityIndex = 30;
    } else if (physicalLevel === '4') {
      activityIndex = 25;
    }

    const calculatedRDI = weight * activityIndex;
    setRDI(calculatedRDI.toFixed(2));
  };

  return (
    <div className="homeRegister">
      <h1>성인 하루 권장 칼로리 계산하기</h1>
      <table className="generic registerTable" cellpadding="0" cellspacing="0">
        <tr>
          <td className="bottomBorder">키를 입력해주세요</td>
          <td className="bottomBorder">
            <input
              name="Height"
              type="text"
              value={height}
              onChange={handleHeightChange}
              style={{ width: '50px' }}
            />
            cm
          </td>
        </tr>
        <tr>
          <td className="bottomBorder" valign="top" style={{ lineHeight: '27px' }}>
            활동지수를 선택해주세요
          </td>
          <td className="bottomBorder">
            <table id="PhysicalLevel">
              <tr>
                <td>
                  <input
                    id="PhysicalLevel_0"
                    type="radio"
                    name="PhysicalLevel"
                    value="1"
                    checked={physicalLevel === '1'}
                    onChange={handlePhysicalLevelChange}
                  />
                  <label htmlFor="PhysicalLevel_0">매우 적음</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    id="PhysicalLevel_1"
                    type="radio"
                    name="PhysicalLevel"
                    value="2"
                    checked={physicalLevel === '2'}
                    onChange={handlePhysicalLevelChange}
                  />
                  <label htmlFor="PhysicalLevel_1">적음</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    id="PhysicalLevel_2"
                    type="radio"
                    name="PhysicalLevel"
                    value="3"
                    checked={physicalLevel === '3'}
                    onChange={handlePhysicalLevelChange}
                  />
                  <label htmlFor="PhysicalLevel_2">보통</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    id="PhysicalLevel_3"
                    type="radio"
                    name="PhysicalLevel"
                    value="4"
                    checked={physicalLevel === '4'}
                    onChange={handlePhysicalLevelChange}
                  />
                  <label htmlFor="PhysicalLevel_3">매우 활동적</label>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td colSpan="2" align="center" style={{ padding: '10px 0px' }}>
            <table cellpadding="0" cellspacing="0" style={{ padding: '5px 0px' }}>
              <tr>
                <td align="center">
                  <button className="button green thin" onClick={calculateRDI}>
                    권장 칼로리 계산하기
                  </button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <br />
      <br />
      <div>
        <b>활동지수 선택</b>
        <br />
        <br />
        <b>매우 적음</b> – 앉아서 주로 생활하거나 매일 가벼운 움직임만 하며 활동량이 적은 경우
        <br />
        <br />
        <b>적음</b> – 규칙적인 생활로 보통의 활동량을 가진 경우
        <br />
        <br />
        <b>보통</b> – 정기적으로 적절한 운동을 하거나 움직임이 많은 경우
        <br />
        <br />
        <b>매우 활동적</b> – 육체노동 등 평소 신체 활동량이 많은 경우
      </div>
      {rdi && <div>하루 권장 칼로리: {rdi} kcal</div>}
    </div>
  );
}

ReactDOM.render(<CalorieCalculator />, document.getElementById('root'));