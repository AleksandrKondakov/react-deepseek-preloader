import React from 'react';
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Прелоадер в стиле DeepSeek</h1>
            <div className={styles.preloader}></div>
        </div>
    );
};

export default App;

// запуск: 
// 1. npm install
// 2. yarn start