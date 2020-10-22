import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { useMap } from '../../../../Hooks';
import ExportMapPDFLib, {
  PageDimmentions,
  PageOrientation
} from '../ExportMapPDFLib';
import Spinner from 'react-spinkit';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { useMapContext } from '../../../../MapContext';

const customStyles: ReactModal.Styles = {
  content: {
    padding: '5px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    overflow: 'visible',
    fontSize: '12px'
  }
};
ReactModal.setAppElement('#root');

const defaultPageSizes: { value: string; label: string }[] = [
  { value: 'A3', label: 'A3' },
  { value: 'A4', label: 'A4' },
  { value: 'A5', label: 'A5' }
];

const defaultPageSizesDimmentions: { [key: string]: [number, number] } = {
  A0: [1189, 841],
  A1: [841, 594],
  A2: [594, 420],
  A3: [420, 297],
  A4: [297, 210],
  A5: [210, 148]
};

const defaultPageOrientations: { value: string; label: string }[] = [
  { value: 'landscape', label: 'Paisagem' },
  { value: 'portrait', label: 'Retrato' }
];
type FormData = {
  pageSize: { value: string; label: string };
  orientation: { value: 'landscape' | 'portrait'; label: string };
};

export interface ExportPDFModalOptions {
  pageOrientations?: { value: PageOrientation; label: string }[];
  pageSizesDimmentions?: { [key: string]: PageDimmentions };
  pageSizes?: { value: string; label: string }[];
}

export interface ExportPDFModalProps extends ReactModal.Props {
  options?: ExportPDFModalOptions;
  onClose: () => void;
  isOpen: boolean;
}

const ExportPDFModal: React.FC<ExportPDFModalProps> = ({
  isOpen,
  onClose,
  options
}) => {
  const { mapid } = useMapContext();
  const { map, setActiveMenuControl } = useMap(mapid);
  const { control, handleSubmit } = useForm<FormData>();
  const [isRendering, setIsRendering] = useState(false);

  const onSubmit = handleSubmit(({ orientation, pageSize }) => {
    if (orientation && pageSize && map) {
      ExportMapPDFLib.exportPDF({
        map,
        orientation: orientation.value,
        pageSize: pageSize.value,
        pageDimmentions: options?.pageSizesDimmentions
          ? options.pageSizesDimmentions[pageSize.value]
          : defaultPageSizesDimmentions[pageSize.value],
        startCallback: () => {
          setIsRendering(true);
        },
        endCallback: () => {
          setActiveMenuControl(undefined);
          setIsRendering(false);
          onClose();
        }
      });
    }
  });

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel='Example Modal'
        style={customStyles}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <span className={styles.modalTitle}>Export PDF</span>
            <button className={styles.modalCloseButton} onClick={onClose}>
              <FaTimes size={16} />
            </button>
          </div>
          <form onSubmit={onSubmit}>
            <span>Página:</span>
            <Controller
              name='pageSize'
              as={<Select />}
              options={options?.pageSizes || defaultPageSizes}
              control={control}
              defaultValue={{ value: 'A4', label: 'A4' }}
            />
            <span>Orientação:</span>
            <Controller
              name='orientation'
              as={<Select />}
              options={options?.pageOrientations || defaultPageOrientations}
              control={control}
              defaultValue={{ value: 'landscape', label: 'Paisagem' }}
            />
          </form>
          <div className={styles.modalActionDiv}>
            <button
              className={classnames(styles.button, styles.positive)}
              onClick={onSubmit}
            >
              Gerar PDF
            </button>

            <button
              className={classnames(styles.button, styles.negative)}
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </div>
      </ReactModal>
      <ReactModal isOpen={isRendering} style={customStyles}>
        <div
          style={{
            width: '200px',
            height: '120px',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Spinner
            name='line-scale-pulse-out-rapid'
            color='green'
            fadeIn='none'
            style={{ transform: 'scale(1.5)' }}
          />
          <span>Gerando PDF...</span>
        </div>
      </ReactModal>
    </div>
  );
};

export default ExportPDFModal;
