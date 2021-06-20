import React, { useContext, useEffect } from 'react';
import { store } from '../../store/store';
import './Header.scss';

const Header = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  useEffect(() => {
    dispatch({ type: 'action description' });
  }, []);

  return (
    <header className="header">
      <button>날짜보기</button>
      <button>셋팅</button>
    </header>
  );
};

export default Header;
