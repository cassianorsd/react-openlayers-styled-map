import { Map } from 'ol';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const exportPNG = (map: Map, callback: () => any): void => {
  map.once('rendercomplete', function () {
    html2canvas(map.getViewport()).then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, 'map.png');
          callback();
        }
      });
    });
  });
  map.renderSync();
};

const ExportMapImageLib = { exportPNG };
export default ExportMapImageLib;