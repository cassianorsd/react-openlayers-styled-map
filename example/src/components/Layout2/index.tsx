import React from 'react';
import NavBar from './NavBar';
import styles from './styles.module.scss';

const Layout2: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout2;
