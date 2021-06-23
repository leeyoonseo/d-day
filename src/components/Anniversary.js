import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: blue;
`;

const Anniversary = ({ toggleOnAnni }) => {
  return (
    <Wrap>
      <button onClick={toggleOnAnni}>닫기</button>
      Anni!! 기념일 날짜 정보 모아보기
      {/* TODO:
        - 100일 단위
        - 1년 단위
        - 각자의 생일(사용자) 
       */}
      <button>
        +
        {/* TODO:
          - +를 통해서 앞으로 생길 기념일을 추가할 수 있다. 
          - +누르면 달력과 input이 뜨고 달력 클릭으로 설정하거나 
            input에 작성을 통해 정보를 입력한다
            이때 제목, 날짜, 매년 반복할 것인지에 대한 정보 입력
        */}
      </button>
    </Wrap>
  );
};

export default Anniversary;
