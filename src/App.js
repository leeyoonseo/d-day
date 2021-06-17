import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Container from './components/Container';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default App;

// TODO
// 1. 오늘 날짜가 default로 지정되어있다.
// -- 달력 (양/음력)
// 2. 날짜 계산기
// -- 기준일(input), 몇일째 되는날, - 몇일째 전날, 또 다른 기준일까지 몇일 남았는지, 몇일 지났는지
// 3. 전역일 계산기
// -- 입대날짜, 복무형태, 계산, 병무청 바로가기
// 4. 만 나이계산
// 5. 상대와 태어난 일수 계산 or 나이차이계산
