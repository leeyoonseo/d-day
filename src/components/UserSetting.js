import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: yellow;
`;

const UserSetting = ({ toggleOnSet }) => {
  return (
    <Wrap>
      <button onClick={toggleOnSet}>닫기</button>
      Setting!! 유저 정보 입력
      {/* TODO: 
        - 앱 테마 색상
        - 기념일 날짜 등록 (나중에 여러개 관리 할 수 있도록?)
        - 사용자1,2 정보 (사진, 이름, 생일(월/일))
        - 하트 아이콘
        - 우리벌써 ~~일째 사랑중의 멘트변경
       */}
    </Wrap>
  );
};

export default UserSetting;
