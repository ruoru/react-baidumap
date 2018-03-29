let baiduMap;

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://api.map.baidu.com/api?v=3.0&ak=NrTYvuK4VE8l4E7e7eTEtcOe&callback=initLocationMap';
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

const BaiduMap = {
  loadScript,
  createMap,
  addMapControl,
  setMapEvent,
  addOverlay,
}

export default BaiduMap;