import React from 'react';
import { StyledMap, Controls } from 'react-openlayers-styled-map';
import 'react-openlayers-styled-map/dist/index.css';
import Layout from '../../components/Layout';
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
              <Controls.GoogleStreetView styled='ol' />
              <Controls.ExportMapImage styled='ol' />
              <Controls.ExportMapPDF styled='ol' />
              <Controls.MeasureArea styled='ol' />
              <Controls.MeasureDistance styled='ol' />
              <Controls.MeasureRadius styled='ol' />
              <Controls.ClearMeasures styled='ol' />
              <Controls.PinCoordinates styled='ol' />
              <Controls.CurrentLocation styled='ol' />
            </StyledMap.Controls>
          </StyledMap>
        </div>
        <div style={{ width: '500px', height: '500px' }}>
          <StyledMap
            debugOptions={{ osmBasemap: true }}
            id='map3'
            defaultControls={{
              fullScreenMode: {},
              scale: { bar: true, minWidth: 100 },
              zoomButtons: {},
              zoomSlider: {},
            }}
            startCoordinates={[-49.2, -26.5]}
            startZoom={11}
          >
            <StyledMap.Controls showRibbon={false}>
              <Controls.GoogleStreetView styled='ol' />
              <Controls.ExportMapImage styled='ol' />
              <Controls.ExportMapPDF styled='ol' />
              <Controls.MeasureArea styled='ol' />
              <Controls.MeasureDistance styled='ol' />
              <Controls.MeasureRadius styled='ol' />
              <Controls.ClearMeasures styled='ol' />
              <Controls.PinCoordinates styled='ol' />
              <Controls.CurrentLocation styled='ol' />
            </StyledMap.Controls>
          </StyledMap>
        </div>
        <div style={{ width: '500px', height: '500px' }}>
          <StyledMap
            debugOptions={{ osmBasemap: true }}
            id='map4'
            defaultControls={{
              fullScreenMode: {},
              scale: {},
              zoomButtons: {},
              zoomSlider: {},
            }}
            startCoordinates={[-49.2, -26.5]}
            startZoom={11}
          >
            <StyledMap.Controls showRibbon={false}>
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
      </Content>
    </Layout>
  );
};

export default MultiMapsPage;
