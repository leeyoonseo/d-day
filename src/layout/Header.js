import React, { useCallback, useContext, useEffect } from 'react';
import { store } from '../store/store';

const Header = ({ toggleOnAnni, toggleOnSet }) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  useEffect(() => {
    dispatch({ type: 'action description' });
  }, []);

  return (
    <header className="header">
      <button onClick={toggleOnAnni}>날짜보기</button>
      <button onClick={toggleOnSet}>셋팅</button>
    </header>
  );
};

export default Header;
