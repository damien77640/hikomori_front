import React from 'react';
import NavBar from '../components/NavBar.js'

const Map = () => {
    document.write("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t\r\n\t<title>Quick Start - Leaflet<\/title>\r\n\r\n\t<meta charset=\"utf-8\" \/>\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t\r\n\t<link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"docs\/images\/favicon.ico\" \/>\r\n\r\n    <link rel=\"stylesheet\" href=\"https:\/\/unpkg.com\/leaflet@1.7.1\/dist\/leaflet.css\" integrity=\"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6\/keqq\/sMZMZ19scR4PsZChSR7A==\" crossorigin=\"\"\/>\r\n    <script src=\"https:\/\/unpkg.com\/leaflet@1.7.1\/dist\/leaflet.js\" integrity=\"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==\" crossorigin=\"\"><\/script>\r\n    <script src=\"..\/src\/pages\/Map.js\"><\/script>\r\n\r\n<\/head>\r\n<body>\r\n\r\n\r\n\r\n<div id=\"mapid\" style=\"width: 340px; height: 400px;\"><\/div>\r\n<script>\r\n\r\n\tvar mymap = L.map('mapid').setView([48.78, 2.39], 13);\r\n\r\n\tL.tileLayer('https:\/\/api.mapbox.com\/styles\/v1\/{id}\/tiles\/{z}\/{x}\/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {\r\n\t\tmaxZoom: 18,\r\n\t\tattribution: 'Map data &copy; <a href=\"https:\/\/www.openstreetmap.org\/copyright\">OpenStreetMap<\/a> contributors, ' +\r\n\t\t\t'Imagery \u00a9 <a href=\"https:\/\/www.mapbox.com\/\">Mapbox<\/a>',\r\n\t\tid: 'mapbox\/streets-v11',\r\n\t\ttileSize: 512,\r\n\t\tzoomOffset: -1\r\n\t}).addTo(mymap);\r\n    var marker = L.marker([48.795334 ,2.3976822]).addTo(mymap);\r\n<\/script>\r\n<\/body>\r\n<\/html>");
    return (
        <header>
        <NavBar/>
    </header>
    );
}

export default Map