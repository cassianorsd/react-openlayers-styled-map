import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { FaMap, FaFile, FaBug, FaTh } from 'react-icons/fa';
import classnames from 'classnames';

interface SideDrawerProps {
  open?: boolean;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ open = false }) => {
  return (
    <div className={classnames(styles.container, open && styles.open)}>
      <div className={styles.content}>
        <span className={styles.title}>MENU</span>
        <ul>
          <li>
            <Link to='/'>
              <FaMap />
              Simple Map
            </Link>
          </li>
          <li>
            <Link to='/blank'>
              <FaFile />
              Blank Page
            </Link>
          </li>
          <li>
            <Link to='/multi'>
              <FaTh />
              Multiple Maps
            </Link>
          </li>
          <li>
            <Link to='/sandbox'>
              <FaBug />
              Debug Tileservers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
