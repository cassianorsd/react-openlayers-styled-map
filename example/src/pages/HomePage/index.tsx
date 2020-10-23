import React from 'react';
import { StyledMap, Controls } from 'react-openlayers-styled-map';
import Layout from '../../components/Layout2';
import { Content } from './styles';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Content>
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
      </Content>
    </Layout>
  );
};

export default HomePage;
