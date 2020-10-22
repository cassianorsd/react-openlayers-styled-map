import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useMap } from 'react-openlayers-styled-map'
import TileLayer from 'ol/layer/Tile';
import TileDebug from 'ol/source/TileDebug';
import OSM from 'ol/source/OSM';
import { Content } from './styled';
import {  useForm } from 'react-hook-form';
import XYZ from 'ol/source/XYZ';
import TileWMS from 'ol/source/TileWMS';
type XYZFormData = {
  xyzSourceOptions:string;
  xyzLayerOptions:string;
  xyzKey:string;
  wmsKey:string;
  wmsSourceOptions:string;
  wmsLayerOptions:string;
}

const Sidebar:React.FC = () => {
  const [tileDebug,setTileDebug] = useState(false)
  const [osmBasemap,setOsmBasemap] = useState(false)
  const {addLayer,removeLayer} = useMap('map1')
  const { register, handleSubmit } = useForm<XYZFormData>();

  useEffect(()=>{
    setTileDebug(true)
    setOsmBasemap(true)
  },[])

  const handleTileDebug = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
    setTileDebug(e.target.checked)
  },[])
  const handleOSMBasemap = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
    setOsmBasemap(e.target.checked)
  },[])


  const onSubmitXYZ = handleSubmit(({xyzSourceOptions,xyzKey,xyzLayerOptions})=>{
    const sourceOptions = JSON.parse(xyzSourceOptions)
    const layerOptions = JSON.parse(xyzLayerOptions)
    if(sourceOptions && layerOptions && xyzKey){
      console.log(layerOptions,sourceOptions)
      addLayer({
        layerKey:xyzKey,
        layerObject: new TileLayer({
          ...layerOptions,
          source: new XYZ(sourceOptions),
        })
      })
    }
  })
  const onSubmitWMS = handleSubmit(({wmsKey,wmsSourceOptions,wmsLayerOptions})=>{
    const sourceOptions = JSON.parse(wmsSourceOptions)
    const layerOptions = JSON.parse(wmsLayerOptions)
    if(layerOptions && sourceOptions && wmsKey){
      console.log(layerOptions,sourceOptions)
      addLayer({
        layerKey:wmsKey,
        layerObject: new TileLayer({
          ...layerOptions,
          source: new TileWMS(sourceOptions)
        })
      })
    }
  })

  const onRemoveWMS = handleSubmit(({wmsKey})=>{
    if(wmsKey) removeLayer({layerKey:wmsKey})
  })
  const onRemoveXYZ = handleSubmit(({xyzKey})=>{
    if(xyzKey) removeLayer({layerKey:xyzKey})
  })

  useEffect(()=>{
    if(tileDebug){
      addLayer({
        layerKey:'tileDebug',
        layerObject: new TileLayer({
          zIndex:1000,
          source: new TileDebug()
        })
      })
    }else{
      removeLayer({layerKey:'tileDebug'})
    }
  },[addLayer,removeLayer,tileDebug])


  useEffect(()=>{
    if(osmBasemap){
      addLayer({
        layerKey:'osmBasemap',
        layerObject: new TileLayer({
          zIndex:1,
          source: new OSM()
        })
      })
    }else{
      removeLayer({layerKey:'osmBasemap'})
    }
  },[addLayer,removeLayer,osmBasemap])

  return (
    <Content>
        <input 
          id='tileDebug'
          name='tileDebug' 
          type='checkbox' 
          checked={tileDebug}
          onChange={handleTileDebug}
        />
        <label htmlFor="tileDebug">  XYZ Tile Debug</label>
        <br/>
        <input 
          id='osmBasemap'
          name='osmBasemap' 
          type='checkbox' 
          checked={osmBasemap}
          onChange={handleOSMBasemap}
        />
        <label htmlFor="osmBasemap">OSM Basemap</label>
        <div style={{
          marginTop:'10px',
          borderTop:'2px solid black',
          width:'100%',
          textAlign:'center',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
          }}>
          <span style={{fontWeight:'bold',fontSize:'18px'}}>
          XYZ Tiles
          </span>
          <label htmlFor="xyzLayerOptions">Layer Options: &nbsp;
            <a rel="noopener noreferrer" 
              target="_blank"
              href="https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html">
              Open OL Specification
            </a>
          </label>
          <textarea 
          defaultValue={JSON.stringify(
            {
              zIndex:2,
            },null,2)}
          ref={register} 
          id='xyzLayerOptions' 
          name='xyzLayerOptions' 
          style={{height:'70px',width:'100%'}}
          />
          <label htmlFor="xyzSourceOptions">XYZ Source Config: &nbsp;
          <a rel="noopener noreferrer" 
          target="_blank" 
          href="https://openlayers.org/en/latest/apidoc/module-ol_source_XYZ-XYZ.html">
            Open OL Specification
          </a>
          </label>
          <textarea 
          defaultValue={JSON.stringify(
            {
              url:'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
              maxZoom:18,
              tileSize:256,
              transition:200,
              crossOrigin:true
            },null,2)}
          ref={register} 
          id='xyzSourceOptions' 
          name='xyzSourceOptions' 
          style={{height:'120px',width:'100%'}}
          />
          <br/>
          <label htmlFor="xyzKey">Name an unique key for the layer:</label>
          <input id='xyzKey' name='xyzKey' defaultValue='xyz-layer-1' ref={register}/>
          <input type="submit" value='Add XYZ Layer' onClick={onSubmitXYZ}/>
          <input type="submit" value='Remove XYZ Layer by Key' onClick={onRemoveXYZ}/>
        </div>
        <div style={{
          marginTop:'10px',
          borderTop:'2px solid black',
          width:'100%',
          textAlign:'center',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <span style={{fontWeight:'bold',fontSize:'18px'}}>
          WMS Tiles
          </span>
          <label htmlFor="xyzLayerOptions">
            Layer Options: &nbsp;
            <a rel="noopener noreferrer" 
              target="_blank"
              href="https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html">
              Open OL Specification
            </a>         
          </label>

          <textarea 
          defaultValue={JSON.stringify(
            {
              zIndex:2,
            },null,2)}
          ref={register} 
          id='wmsLayerOptions' 
          name='wmsLayerOptions' 
          style={{height:'70px',width:'100%'}}
          />
          <label htmlFor="wmsOptions">
            TiledWMS Source Config: &nbsp;
            <a rel="noopener noreferrer" 
              target="_blank" 
              href="https://openlayers.org/en/latest/apidoc/module-ol_source_XYZ-XYZ.html">
                See OL Specification
            </a>
          </label>
          <textarea 
          defaultValue={JSON.stringify(
            {
              url: 'https://ahocevar.com/geoserver/wms',
              params: {'LAYERS': 'topp:states', 'TILED': true},
              serverType: 'geoserver',
              transition: 0,
              crossOrigin:true
            },null,2)}
          ref={register} 
          id='wmsSourceOptions' 
          name='wmsSourceOptions' 
          style={{height:'120px',width:'100%'}}
          />
          <label htmlFor="wmsKey" >Name an unique key for the layer:</label>
          <input 
            id='wmsKey' 
            name='wmsKey' 
            defaultValue='wms-layer-1' 
            ref={register}
            />
          <input type="submit" value='Add WMS Layer' onClick={onSubmitWMS}/>
          <input type="submit" value='Remove WMS Layer by Key' onClick={onRemoveWMS}/>
        </div>
    </Content>
  )
}

export default Sidebar