import React, { createContext, useReducer } from 'react';

const initialState = {
  test: 'a',
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'action description':
        console.log('test', state.test);
        return 'a';
      // const newState = //해당 액션이 발생하면 새로운 상태를 만들겠다.
      // return newState;

      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };

// - https://velog.io/@kimu2370/%EB%A6%AC%EB%8D%95%EC%8A%A4%EC%97%86%EC%9D%B4-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0hookscontext
