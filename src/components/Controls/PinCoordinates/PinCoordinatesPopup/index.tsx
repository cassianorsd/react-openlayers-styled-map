import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Map, Overlay } from 'ol';
import { Coordinate } from 'ol/coordinate';
import { FaRegCopy, FaTimes } from 'react-icons/fa';
import { toLonLat } from 'ol/proj';
import CopyToClipboard from 'react-copy-to-clipboard';
import cogoToast from 'cogo-toast';
import styles from './styles.scss';

interface PopupProps {
  onClose: () => void;
  position: Coordinate;
  copyText?: string;
  copiedText?: string;
}

const Popup: React.FC<PopupProps> = ({
  onClose,
  position,
  copyText,
  copiedText
}) => {
  console.log(onClose, position);
  const handleCopy = useCallback(
    (text: string) => {
      console.log(text);
      cogoToast.success(`${copiedText || 'Copied'}: ${text}`);
    },
    [copiedText]
  );

  return (
    <div>
      <span className={styles.closer} onClick={onClose}>
        <FaTimes size={18} />
      </span>
      <div className={styles.content}>
        <div className={styles.title}>Location:</div>
        <div className={styles.panesContainer}>
          <div className={styles.leftPane}>
            <span>
              <b>Lon:</b> {toLonLat(position)[0].toFixed(4)}
            </span>
            <span>
              <b>Lat:</b> {toLonLat(position)[1].toFixed(4)}
            </span>
          </div>
          <div className={styles.rightPane}>
            <CopyToClipboard
              text={`${toLonLat(position)[1].toFixed(5)}, ${toLonLat(
                position
              )[0].toFixed(5)}`}
              onCopy={handleCopy}
            >
              <button className={styles.copyButton}>
                <FaRegCopy size={20} />
                <span>{copyText || 'Copy'}</span>
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

const overlays: Overlay[] = [];

interface AddPopupOptions {
  map: Map;
  position: Coordinate;
  options?: {
    clearOthers?: boolean;
    copyText?: string;
    copiedText?: string;
  };
}
const addPopup = ({ map, position, options }: AddPopupOptions): void => {
  const container = document.createElement('div');
  const content = document.createElement('div');
  container.appendChild(content);
  container.classList.add(styles.popup);

  if (!container) return;
  const popupOverlay = new Overlay({
    element: container,
    autoPan: true,
    autoPanMargin: 100,
    autoPanAnimation: {
      duration: 250
    }
  });
  if (options?.clearOthers) {
    overlays.forEach((overlay) => map.removeOverlay(overlay));
  }
  overlays.push(popupOverlay);
  map.addOverlay(popupOverlay);
  map.getViewport().style.cursor = 'crosshair';
  ReactDOM.render(
    React.createElement(Popup, {
      position: position,
      onClose: () => {
        popupOverlay.setPosition(undefined);
        map.removeOverlay(popupOverlay);
      },
      copyText: options?.copyText,
      copiedText: options?.copiedText
    }),
    container
  );
  popupOverlay.setPosition(position);
};

function clearOverlays(map: Map): void {
  overlays.forEach((overlay) => map.removeOverlay(overlay));
}

const PinCoordinatesPopup = { addPopup, clearOverlays };

export default PinCoordinatesPopup;
