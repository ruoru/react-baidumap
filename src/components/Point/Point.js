import React, { Component } from 'react';
import './point.css';
//import { loadScript, createMap, addMapControl, setMapEvent, addMapOverlay } from '../BaiduMap';

let baiduMap;

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://api.map.baidu.com/api?v=3.0&ak=NrTYvuK4VE8l4E7e7eTEtcOe&callback=initPoint';
  document.body.appendChild(script);
}

function createMap(mapDOMId, point){
  baiduMap = new BMap.Map(mapDOMId);
	baiduMap.centerAndZoom(new BMap.Point(point.lng, point.lat), 15);
}

function addMapControl(){
  let navControl = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT});
  baiduMap.addControl(navControl);
  let scaleControl = new BMap.ScaleControl();
  baiduMap.addControl(scaleControl);
}

function setMapEvent(){
  baiduMap.enableScrollWheelZoom();
	baiduMap.enableContinuousZoom();
}

function addMapOverlay (point) {
	const marker = new BMap.Marker(new BMap.Point(point.lng, point.lat));
	baiduMap.addOverlay(marker);
}

class Point extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { mapDOMId, centerPoint } = this.props;
    function initPoint() {
      createMap(mapDOMId, centerPoint);
      setMapEvent();
      addMapControl();
      addMapOverlay(centerPoint);
    }
    window.initPoint = initPoint;
    loadScript();
  }

  render() {
    return (
      <div className="location-map" id={this.props.mapDOMId}></div>
    );
  }
}

export default Point;