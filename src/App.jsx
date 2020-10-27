import React from 'react';
import styles from './App.modules.scss';
import cn from 'classnames';
import './index.css';

const App = () => {
  return <div className={cn(styles.title)}>This is App Component</div>;
};

export default App;