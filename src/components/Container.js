import React from 'react';
import Calendar from './Calendar/Calendar';

const Container = () => {
  return (
    <div>
      {/* <Calendar /> */}
      <div>
        <span>우리 벌써</span>
        <span>578</span>
        <span>일째 사랑중</span>
      </div>

      <div>
        <span>사진1</span>
        <span>♥ {/* TODO: 아이콘 */}</span>
        <span>사진2</span>
      </div>
    </div>
  );
};

export default Container;

// TODO:
// 문구 변경 가능
