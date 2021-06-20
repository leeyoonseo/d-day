import React from 'react';
import { StateProvider } from './store/store';

import Header from './components/Header/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <StateProvider>
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    </StateProvider>
  );
};

export default App;

// TODO:
// - loveDay https://blog.naver.com/wpfkvltm12/221559612409
