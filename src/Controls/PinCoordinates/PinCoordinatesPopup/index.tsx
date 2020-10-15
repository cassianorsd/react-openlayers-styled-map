import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Map, Overlay } from 'ol';
import { Coordinate } from 'ol/coordinate';
import {
  PopupContent,
  PopupCloser,
  PopupContainer,
  CopyButton,
} from './styles';
import { FaRegCopy, FaTimes } from 'react-icons/fa';
import { toLonLat } from 'ol/proj';
import CopyToClipboard from 'react-copy-to-clipboard';
import cogoToast from 'cogo-toast';
interface PopupProps {
  onClose: () => void;
  position: Coordinate;
}
const Popup: React.FC<PopupProps> = ({ onClose, position }) => {
  const handleCopy = useCallback((text: string) => {
    cogoToast.success(`Copied: ${text}`);
  }, []);

  return (
    <PopupContainer>
      <PopupCloser onClick={onClose}>
        <FaTimes size={16} />
      </PopupCloser>
      <PopupContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <b>Location:</b>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <div
              style={{
                flexBasis: '75%',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <span>
                <b>Lon:</b> {toLonLat(position)[0].toFixed(4)}
              </span>
              <span>
                <b>Lat:</b> {toLonLat(position)[1].toFixed(4)}
              </span>
            </div>
            <div
              style={{
                flexBasis: '25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CopyToClipboard
                text={`${toLonLat(position)[1].toFixed(5)}, ${toLonLat(
                  position
                )[0].toFixed(5)}`}
                onCopy={handleCopy}
              >
                <CopyButton>
                  <FaRegCopy size={20} />
                  <span>Copy</span>
                </CopyButton>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </PopupContent>
    </PopupContainer>
  );
};

const overlays: Overlay[] = [];

interface AddPopupOptions {
  map: Map;
  position: Coordinate;
  options?: {
    clearOthers?: boolean;
  };
}
const addPopup = ({ map, position, options }: AddPopupOptions): void => {
  const container = document.createElement('div');

  const popupOverlay = new Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
      duration: 250,
    },
  });
  if (options?.clearOthers) {
    overlays.forEach((overlay) => map.removeOverlay(overlay));
  }
  overlays.push(popupOverlay);
  map.addOverlay(popupOverlay);
  popupOverlay.setPosition(position);
  ReactDOM.render(
    React.createElement(Popup, {
      position: position,
      onClose: () => {
        popupOverlay.setPosition(undefined);
        map.removeOverlay(popupOverlay);
      },
    }),
    container
  );
};

function clearOverlays(map: Map): void {
  overlays.forEach((overlay) => map.removeOverlay(overlay));
}

const PinCoordinatesPopup = { addPopup, clearOverlays };

export default PinCoordinatesPopup;
