import React from 'react';
import styles from './StyledMenu.module.scss';
import classNames from 'classnames';
import { useMapContext } from '../../MapContext';

export interface StyledMenuProps {
  showRibbon?: boolean;
}

const StyledMenu: React.FC<StyledMenuProps> = ({
  showRibbon = true,
  children,
}) => {
  const { mapid } = useMapContext();
  if (!children) return <span />;
  return (
    <div
      id={`StyledMenu-map-${mapid}`}
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
