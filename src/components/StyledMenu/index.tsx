import React from 'react';
import styles from './StyledMenu.module.scss';
import classNames from 'classnames';

export interface StyledMenuProps {
  showRibbon?: boolean;
}

const StyledMenu: React.FC<StyledMenuProps> = ({
  showRibbon = true,
  children,
}) => {
  if (!children) return <span />;
  return (
    <div
      id='StyledMenu'
      className={classNames(
        'ol-control',
        styles.container,
        showRibbon && styles.ribbon
      )}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};
export default StyledMenu;
