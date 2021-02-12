import React from 'react';
import NavBar from '../components/NavBar.js'

const Map = () => {
    document.write(
    '<!DOCTYPE html>'+
    '<html>'+
    '<head>'+
    '	'+
    '	<title>Quick Start - Leaflet</title>'+
    ''+
    '	<meta charset="utf-8" />'+
    '	<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
    '	'+
    '	<link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />'+
    ''+
    '    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>'+
    '    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>'+
    '    <script src="../src/pages/Map.js"></script>'+
    ''+
    '</head>'+
    '<body>'+
    ''+
    ''+
    ''+
    '<div id="mapid" style="width: 600px; height: 400px;"></div>'+
    '<script>'+
    ''+
    '	var mymap = L.map(\'mapid\').setView([48.78, 2.39], 13);'+
    ''+
    '	L.tileLayer(\'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw\', {'+
    '		maxZoom: 18,'+
    '		attribution: \'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, \' +'+
    '			\'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>\','+
    '		id: \'mapbox/streets-v11\','+
    '		tileSize: 512,'+
    '		zoomOffset: -1'+
    '	}).addTo(mymap);'+
    '    var marker = L.marker([48.7916472 ,2.394981], {title : "TEST"}).addTo(mymap);'+
    '	marker.bindPopup("Librairie 1").openPopup();'+
    '	var marker = L.marker([48.79094449999999 ,2.3967313]).addTo(mymap);'+
    '	marker.bindPopup("Librairie 2").openPopup();'+
    '	var marker = L.marker([48.7913364 ,2.3968541]).addTo(mymap);'+
    '	marker.bindPopup("Librairie 3").openPopup();'+
    '	var marker = L.marker([48.8654833 ,2.3336222]).addTo(mymap);'+
    '	marker.bindPopup("Librairie 4").openPopup();'+
    '	var marker = L.marker([48.8654833 ,2.3336222]).addTo(mymap);'+
    '	marker.bindPopup("Librairie 5").openPopup();'+
    '	var marker = L.marker([48.7935708 ,2.4157358]).addTo(mymap);'+
    '	marker.bindPopup("Librairie 6").openPopup();'+
    '	var marker = L.marker([48.7970544 ,2.4101783]).addTo(mymap);'+
    '	marker.bindPopup("Librairie 7").openPopup();'+
    '	var marker = L.marker([48.8024372 ,2.405724]).addTo(mymap);'+
    '	marker.bindPopup("Librairie 8").openPopup();'+
    '	var marker = L.marker([48.7909282 ,2.3924357]).addTo(mymap);'+
    '	marker.bindPopup("Librairie 8").openPopup();'+
    '	var marker = L.marker([48.7934671 ,2.3957465]).addTo(mymap);'+
    '	marker.bindPopup("Librairie 9").openPopup();'+
    '	var marker = L.marker([48.785745 ,2.3997861]).addTo(mymap);'+
    '	marker.bindPopup("Librairie 10").openPopup();'+
    '	var marker = L.marker([48.7903689 ,2.3911908]).addTo(mymap);'+
    '	marker.bindPopup("Librairie 11").openPopup();'+
    '	var marker = L.marker([48.8034298 ,2.4041387]).addTo(mymap);'+
    '	marker.bindPopup("Librairie 12").openPopup();'+
    ''+
    '</script>'+
    '</body>'+
    '</html>'  
    )
    return (
        <header>
        <NavBar/>
    </header>
    );
}

export default Map