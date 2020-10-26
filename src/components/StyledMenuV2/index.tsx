import React from 'react';
import styles from './StyledMenu.module.scss';
import classNames from 'classnames';
import { useMapContext } from '../../MapContext';

export interface StyledMenuProps {
  showRibbon?: boolean;
}

const StyledMenuV2: React.FC<StyledMenuProps> = ({
  showRibbon = true,
  children,
}) => {
  const { mapid } = useMapContext();
  if (!children) return <span />;
  return (
    <div
      id={`StyledMenu-map-${mapid}`}
      className={classNames(
        styles.container,
        showRibbon && styles.ribbon,
        'controlMenu'
      )}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};
export default StyledMenuV2;
