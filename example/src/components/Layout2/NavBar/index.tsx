import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { FaMap, FaFile, FaBug, FaTh } from 'react-icons/fa';
import classnames from 'classnames';
import SideDrawer from '../SideDrawer';

const NavBar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    setOpenMenu((o) => !o);
  }, []);
  const ref = React.createRef<HTMLHeadElement>();
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && e.target && !ref.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    },
    [ref]
  );

  useEffect(() => {
    if (openMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenu, handleClickOutside]);

  return (
    <header className={styles.navbar} ref={ref}>
      <nav className={styles.navbarContent}>
        <div className={styles.btnContainer}>
          <button
            className={classnames(styles.menuBtn, openMenu && styles.activeBtn)}
            onClick={handleClick}
          >
            <svg
              viewBox='0 0 24 24'
              fill='currentColor'
              height='30px'
              width='30px'
            >
              <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' />
            </svg>
          </button>
        </div>
        <div className={styles.logo}>ROSM</div>
        <div className={styles.spacer} />
        <div className={styles.itensContainer}>
          <ul>
            <li>
              <Link to='/'>
                <FaMap />
                Simple Map
              </Link>
            </li>
            <li>
              <Link to='blank'>
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
      </nav>
      <SideDrawer open={openMenu} />
    </header>
  );
};

export default NavBar;
