import React, { fragment } from 'react';
import Main from '../components/Main';
import Anniversary from '../components/Anniversary';
import UserSetting from '../components/UserSetting';

const Container = ({ isOnAnni, isOnSet, toggleOnAnni, toggleOnSet }) => {
  return (
    <section className="container">
      {(() => {
        if (isOnAnni) {
          return <Anniversary toggleOnAnni={toggleOnAnni} />;
        } else if (isOnSet) {
          return <UserSetting toggleOnSet={toggleOnSet} />;
        } else {
          return <Main />;
        }
      })()}
    </section>
  );
};

export default Container;

// TODO:
// 문구 변경 가능
