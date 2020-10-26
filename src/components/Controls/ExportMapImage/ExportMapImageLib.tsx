import { Map } from 'ol';
import html2canvas from 'html2canvas';
import fs from 'file-saver';

const exportPNG = (map: Map, callback: () => void): void => {
  map.once('rendercomplete', function () {
    html2canvas(map.getViewport(), {
      allowTaint: true,
      useCORS: true,
      ignoreElements: (el: HTMLElement): boolean => {
        return (
          el.classList.contains('ol-control') ||
          el.classList.contains('controlMenu')
        );
      },
    }).then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob) {
          fs.saveAs(blob, 'map.png');
          callback();
        }
      });
    });
  });
  map.renderSync();
};

const ExportMapImageLib = { exportPNG };
export default ExportMapImageLib;
