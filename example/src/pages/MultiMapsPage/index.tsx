import React from 'react';
import { StyledMap, Controls } from 'react-openlayers-styled-map';
import 'react-openlayers-styled-map/dist/index.css';
import Layout from '../../components/Layout2';
import { Content } from './styles';

const MultiMapsPage: React.FC = () => {
  return (
    <Layout>
      <Content>
        <div style={{ width: '500px', height: '500px' }}>
          <StyledMap
            debugOptions={{ osmBasemap: true }}
            id='map1'
            defaultControls={{
              fullScreenMode: {},
              scale: { bar: true, minWidth: 100 },
              zoomButtons: {},
              zoomSlider: {},
            }}
            startCoordinates={[-49.2, -26.5]}
            startZoom={11}
          >
            <StyledMap.Controls showRibbon>
              <Controls.GoogleStreetView />
              <Controls.ExportMapImage />
              <Controls.ExportMapPDF />
              <Controls.MeasureArea />
              <Controls.MeasureDistance />
              <Controls.MeasureRadius />
              <Controls.ClearMeasures />
              <Controls.PinCoordinates />
              <Controls.CurrentLocation />
            </StyledMap.Controls>
          </StyledMap>
        </div>
        <div style={{ width: '500px', height: '500px' }}>
          <StyledMap
            debugOptions={{ osmBasemap: true }}
            id='map2'
            defaultControls={{
              fullScreenMode: {},
              scale: { bar: true, minWidth: 100 },
              zoomButtons: {},
              zoomSlider: {},
            }}
            startCoordinates={[-49.2, -26.5]}
            startZoom={11}
          >
            <StyledMap.Controls showRibbon>
              <Controls.GoogleStreetView styled={false} />
              <Controls.ExportMapImage styled={false} />
              <Controls.ExportMapPDF styled={false} />
              <Controls.MeasureArea styled={false} />
              <Controls.MeasureDistance styled={false} />
              <Controls.MeasureRadius styled={false} />
              <Controls.ClearMeasures styled={false} />
              <Controls.PinCoordinates styled={false} />
              <Controls.CurrentLocation styled={false} />
            </StyledMap.Controls>
          </StyledMap>
        </div>
      </Content>
    </Layout>
  );
};

export default MultiMapsPage;
