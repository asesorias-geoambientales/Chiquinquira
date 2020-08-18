var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Prediosurbanos_1 = new ol.format.GeoJSON();
var features_Prediosurbanos_1 = format_Prediosurbanos_1.readFeatures(json_Prediosurbanos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prediosurbanos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prediosurbanos_1.addFeatures(features_Prediosurbanos_1);
var lyr_Prediosurbanos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prediosurbanos_1, 
                style: style_Prediosurbanos_1,
                interactive: true,
                title: '<img src="styles/legend/Prediosurbanos_1.png" /> Predios urbanos'
            });
var format_Vasrurales_2 = new ol.format.GeoJSON();
var features_Vasrurales_2 = format_Vasrurales_2.readFeatures(json_Vasrurales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vasrurales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vasrurales_2.addFeatures(features_Vasrurales_2);
var lyr_Vasrurales_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vasrurales_2, 
                style: style_Vasrurales_2,
                interactive: true,
                title: '<img src="styles/legend/Vasrurales_2.png" /> Vías rurales'
            });
var format_Lmitemunicipal_3 = new ol.format.GeoJSON();
var features_Lmitemunicipal_3 = format_Lmitemunicipal_3.readFeatures(json_Lmitemunicipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitemunicipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitemunicipal_3.addFeatures(features_Lmitemunicipal_3);
var lyr_Lmitemunicipal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmitemunicipal_3, 
                style: style_Lmitemunicipal_3,
                interactive: true,
                title: '<img src="styles/legend/Lmitemunicipal_3.png" /> Límite municipal'
            });
var format_Orografia_4 = new ol.format.GeoJSON();
var features_Orografia_4 = format_Orografia_4.readFeatures(json_Orografia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Orografia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orografia_4.addFeatures(features_Orografia_4);
var lyr_Orografia_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Orografia_4, 
                style: style_Orografia_4,
                interactive: true,
                title: '<img src="styles/legend/Orografia_4.png" /> Orografia'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Prediosurbanos_1.setVisible(true);lyr_Vasrurales_2.setVisible(true);lyr_Lmitemunicipal_3.setVisible(true);lyr_Orografia_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Prediosurbanos_1,lyr_Vasrurales_2,lyr_Lmitemunicipal_3,lyr_Orografia_4];
lyr_Prediosurbanos_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'CODIGO_ANT': 'CODIGO_ANT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Vasrurales_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Tipo': 'Tipo', 'Estado': 'Estado', 'SHAPE_Leng': 'SHAPE_Leng', 'RULEID': 'RULEID', });
lyr_Lmitemunicipal_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Codigo_Mun': 'Codigo_Mun', 'Nombre_Mun': 'Nombre_Mun', 'Categoria': 'Categoria', 'Codigo_Dep': 'Codigo_Dep', 'Nombre_Dep': 'Nombre_Dep', 'Area_Kilom': 'Area_Kilom', 'Area_Hecta': 'Area_Hecta', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_Orografia_4.set('fieldAliases', {'NOMBRE_GEO': 'NOMBRE_GEO', });
lyr_Prediosurbanos_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'CODIGO_ANT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Vasrurales_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Tipo': 'TextEdit', 'Estado': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'RULEID': 'TextEdit', });
lyr_Lmitemunicipal_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Codigo_Mun': 'TextEdit', 'Nombre_Mun': 'TextEdit', 'Categoria': 'TextEdit', 'Codigo_Dep': 'TextEdit', 'Nombre_Dep': 'TextEdit', 'Area_Kilom': 'TextEdit', 'Area_Hecta': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Orografia_4.set('fieldImages', {'NOMBRE_GEO': 'TextEdit', });
lyr_Prediosurbanos_1.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'CODIGO_ANT': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Vasrurales_2.set('fieldLabels', {'OBJECTID': 'no label', 'Tipo': 'no label', 'Estado': 'no label', 'SHAPE_Leng': 'no label', 'RULEID': 'no label', });
lyr_Lmitemunicipal_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Codigo_Mun': 'no label', 'Nombre_Mun': 'no label', 'Categoria': 'no label', 'Codigo_Dep': 'no label', 'Nombre_Dep': 'no label', 'Area_Kilom': 'no label', 'Area_Hecta': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_Orografia_4.set('fieldLabels', {'NOMBRE_GEO': 'no label', });
lyr_Orografia_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});