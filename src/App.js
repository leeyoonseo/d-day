import React, { useEffect, useCallback, useState } from 'react';
import { StateProvider } from './store/store';
import styled, { createGlobalStyle } from 'styled-components';
import useToggle from './hooks/useToggle';
import Header from './layout/Header';
import Container from './layout/Container';
import Footer from './layout/Footer';

const GlobalStyle = createGlobalStyle`
`;

const Wrap = styled.div`
  height: 100vh;
  background-color: pink;
`;

const App = () => {
  const [isOnAnni, toggleOnAnni] = useToggle();
  const [isOnSet, toggleOnSet] = useToggle();

  return (
    <StateProvider>
      <GlobalStyle />
      <Wrap className="app">
        <Header toggleOnAnni={toggleOnAnni} toggleOnSet={toggleOnSet} />
        <Container
          isOnAnni={isOnAnni}
          isOnSet={isOnSet}
          toggleOnAnni={toggleOnAnni}
          toggleOnSet={toggleOnSet}
        />
        <Footer />
      </Wrap>
    </StateProvider>
  );
};

export default App;

// TODO:
// - loveDay https://blog.naver.com/wpfkvltm12/221559612409
