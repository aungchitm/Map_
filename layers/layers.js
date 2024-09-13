ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11568309.970807, 151119.387618, 11572415.284215, 153861.534556]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteMap_1 = new ol.layer.Tile({
            'title': 'Google Satellite Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_MultiPatch_2 = new ol.format.GeoJSON();
var features_MultiPatch_2 = format_MultiPatch_2.readFeatures(json_MultiPatch_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MultiPatch_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MultiPatch_2.addFeatures(features_MultiPatch_2);
var lyr_MultiPatch_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MultiPatch_2, 
                style: style_MultiPatch_2,
                popuplayertitle: "MultiPatch",
                interactive: true,
                title: '<img src="styles/legend/MultiPatch_2.png" /> MultiPatch'
            });
var format_Annotation_3 = new ol.format.GeoJSON();
var features_Annotation_3 = format_Annotation_3.readFeatures(json_Annotation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Annotation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Annotation_3.addFeatures(features_Annotation_3);
var lyr_Annotation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Annotation_3, 
                style: style_Annotation_3,
                popuplayertitle: "Annotation",
                interactive: true,
                title: '<img src="styles/legend/Annotation_3.png" /> Annotation'
            });
var format_Polyline_4 = new ol.format.GeoJSON();
var features_Polyline_4 = format_Polyline_4.readFeatures(json_Polyline_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polyline_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polyline_4.addFeatures(features_Polyline_4);
var lyr_Polyline_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polyline_4, 
                style: style_Polyline_4,
                popuplayertitle: "Polyline",
                interactive: true,
                title: '<img src="styles/legend/Polyline_4.png" /> Polyline'
            });
var format_TextPoint_5 = new ol.format.GeoJSON();
var features_TextPoint_5 = format_TextPoint_5.readFeatures(json_TextPoint_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TextPoint_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TextPoint_5.addFeatures(features_TextPoint_5);
var lyr_TextPoint_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TextPoint_5, 
                style: style_TextPoint_5,
                popuplayertitle: "Text Point",
                interactive: true,
                title: '<img src="styles/legend/TextPoint_5.png" /> Text Point'
            });
var format_Point_6 = new ol.format.GeoJSON();
var features_Point_6 = format_Point_6.readFeatures(json_Point_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_6.addFeatures(features_Point_6);
var lyr_Point_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_6, 
                style: style_Point_6,
                popuplayertitle: "Point",
                interactive: true,
                title: '<img src="styles/legend/Point_6.png" /> Point'
            });
var format_Polygon_7 = new ol.format.GeoJSON();
var features_Polygon_7 = format_Polygon_7.readFeatures(json_Polygon_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polygon_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygon_7.addFeatures(features_Polygon_7);
var lyr_Polygon_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polygon_7, 
                style: style_Polygon_7,
                popuplayertitle: "Polygon",
                interactive: true,
                title: '<img src="styles/legend/Polygon_7.png" /> Polygon'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelliteMap_1.setVisible(true);lyr_MultiPatch_2.setVisible(true);lyr_Annotation_3.setVisible(true);lyr_Polyline_4.setVisible(true);lyr_TextPoint_5.setVisible(true);lyr_Point_6.setVisible(true);lyr_Polygon_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelliteMap_1,lyr_MultiPatch_2,lyr_Annotation_3,lyr_Polyline_4,lyr_TextPoint_5,lyr_Point_6,lyr_Polygon_7];
lyr_MultiPatch_2.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'LTScale': 'LTScale', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', });
lyr_Annotation_3.set('fieldAliases', {'FeatureID': 'FeatureID', 'ZOrder': 'ZOrder', 'Annotation': 'Annotation', 'SymbolID': 'SymbolID', 'Status': 'Status', 'FontName': 'FontName', 'VerticalAl': 'VerticalAl', 'Horizontal': 'Horizontal', 'Angle': 'Angle', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'LTScale': 'LTScale', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'ScaleX': 'ScaleX', 'ScaleY': 'ScaleY', 'ScaleZ': 'ScaleZ', 'Owner': 'Owner', 'Style': 'Style', 'FontID': 'FontID', 'Text': 'Text', 'Height': 'Height', 'TxtWidth': 'TxtWidth', 'TxtOblique': 'TxtOblique', 'TxtGenType': 'TxtGenType', 'TxtBoxHt': 'TxtBoxHt', 'TxtBoxWd': 'TxtBoxWd', 'TxtRefWd': 'TxtRefWd', 'TxtAttach': 'TxtAttach', 'TxtDir': 'TxtDir', 'LnSpace': 'LnSpace', 'SpaceFct': 'SpaceFct', 'TxtMemo': 'TxtMemo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Polyline_4.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'LTScale': 'LTScale', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_TextPoint_5.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'LTScale': 'LTScale', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'ScaleX': 'ScaleX', 'ScaleY': 'ScaleY', 'ScaleZ': 'ScaleZ', 'Owner': 'Owner', 'Style': 'Style', 'FontID': 'FontID', 'Text': 'Text', 'Height': 'Height', 'Angle': 'Angle', 'TxtWidth': 'TxtWidth', 'TxtOblique': 'TxtOblique', 'TxtGenType': 'TxtGenType', 'Horizontal': 'Horizontal', 'VerticalAl': 'VerticalAl', 'FontName': 'FontName', 'TxtBoxHt': 'TxtBoxHt', 'TxtBoxWd': 'TxtBoxWd', 'TxtRefWd': 'TxtRefWd', 'TxtAttach': 'TxtAttach', 'TxtDir': 'TxtDir', 'LnSpace': 'LnSpace', 'SpaceFct': 'SpaceFct', 'TxtMemo': 'TxtMemo', 'FeatureID': 'FeatureID', 'ZOrder': 'ZOrder', 'Annotation': 'Annotation', 'SymbolID': 'SymbolID', 'Status': 'Status', });
lyr_Point_6.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'LTScale': 'LTScale', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'ScaleX': 'ScaleX', 'ScaleY': 'ScaleY', 'ScaleZ': 'ScaleZ', 'Angle': 'Angle', });
lyr_Polygon_7.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'LTScale': 'LTScale', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MultiPatch_2.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'LTScale': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', });
lyr_Annotation_3.set('fieldImages', {'FeatureID': 'TextEdit', 'ZOrder': 'TextEdit', 'Annotation': 'TextEdit', 'SymbolID': 'TextEdit', 'Status': 'Range', 'FontName': 'TextEdit', 'VerticalAl': 'Range', 'Horizontal': 'Range', 'Angle': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'LTScale': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'ScaleX': 'TextEdit', 'ScaleY': 'TextEdit', 'ScaleZ': 'TextEdit', 'Owner': 'TextEdit', 'Style': 'TextEdit', 'FontID': 'TextEdit', 'Text': 'TextEdit', 'Height': 'TextEdit', 'TxtWidth': 'TextEdit', 'TxtOblique': 'TextEdit', 'TxtGenType': 'TextEdit', 'TxtBoxHt': 'TextEdit', 'TxtBoxWd': 'TextEdit', 'TxtRefWd': 'TextEdit', 'TxtAttach': 'Range', 'TxtDir': 'Range', 'LnSpace': 'Range', 'SpaceFct': 'TextEdit', 'TxtMemo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Polyline_4.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'LTScale': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_TextPoint_5.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'LTScale': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'ScaleX': 'TextEdit', 'ScaleY': 'TextEdit', 'ScaleZ': 'TextEdit', 'Owner': 'TextEdit', 'Style': 'TextEdit', 'FontID': 'TextEdit', 'Text': 'TextEdit', 'Height': 'TextEdit', 'Angle': 'TextEdit', 'TxtWidth': 'TextEdit', 'TxtOblique': 'TextEdit', 'TxtGenType': 'TextEdit', 'Horizontal': 'TextEdit', 'VerticalAl': 'TextEdit', 'FontName': 'TextEdit', 'TxtBoxHt': 'TextEdit', 'TxtBoxWd': 'TextEdit', 'TxtRefWd': 'TextEdit', 'TxtAttach': 'Range', 'TxtDir': 'Range', 'LnSpace': 'Range', 'SpaceFct': 'TextEdit', 'TxtMemo': 'TextEdit', 'FeatureID': 'TextEdit', 'ZOrder': 'TextEdit', 'Annotation': 'TextEdit', 'SymbolID': 'TextEdit', 'Status': 'Range', });
lyr_Point_6.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'LTScale': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'ScaleX': 'TextEdit', 'ScaleY': 'TextEdit', 'ScaleZ': 'TextEdit', 'Angle': 'TextEdit', });
lyr_Polygon_7.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'LTScale': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MultiPatch_2.set('fieldLabels', {'Entity': 'hidden field', 'Handle': 'hidden field', 'Layer': 'hidden field', 'LyrFrzn': 'hidden field', 'LyrLock': 'hidden field', 'LyrOn': 'hidden field', 'LyrVPFrzn': 'hidden field', 'LyrHandle': 'hidden field', 'Color': 'hidden field', 'EntColor': 'hidden field', 'LyrColor': 'hidden field', 'BlkColor': 'hidden field', 'Linetype': 'hidden field', 'EntLinetyp': 'hidden field', 'LyrLnType': 'hidden field', 'BlkLinetyp': 'hidden field', 'LTScale': 'hidden field', 'Elevation': 'hidden field', 'Thickness': 'hidden field', 'LineWt': 'hidden field', 'EntLineWt': 'hidden field', 'LyrLineWt': 'hidden field', 'BlkLineWt': 'hidden field', 'RefName': 'inline label - visible with data', 'ExtX': 'hidden field', 'ExtY': 'hidden field', 'ExtZ': 'hidden field', 'DocName': 'hidden field', 'DocPath': 'hidden field', 'DocType': 'hidden field', 'DocVer': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', });
lyr_Annotation_3.set('fieldLabels', {'FeatureID': 'hidden field', 'ZOrder': 'hidden field', 'Annotation': 'hidden field', 'SymbolID': 'hidden field', 'Status': 'hidden field', 'FontName': 'hidden field', 'VerticalAl': 'hidden field', 'Horizontal': 'hidden field', 'Angle': 'hidden field', 'Entity': 'hidden field', 'Handle': 'hidden field', 'Layer': 'hidden field', 'LyrFrzn': 'hidden field', 'LyrLock': 'hidden field', 'LyrOn': 'hidden field', 'LyrVPFrzn': 'hidden field', 'LyrHandle': 'hidden field', 'Color': 'hidden field', 'EntColor': 'hidden field', 'LyrColor': 'hidden field', 'BlkColor': 'hidden field', 'Linetype': 'hidden field', 'EntLinetyp': 'hidden field', 'LyrLnType': 'hidden field', 'BlkLinetyp': 'hidden field', 'LTScale': 'hidden field', 'Elevation': 'hidden field', 'Thickness': 'hidden field', 'LineWt': 'hidden field', 'EntLineWt': 'hidden field', 'LyrLineWt': 'hidden field', 'BlkLineWt': 'hidden field', 'RefName': 'inline label - visible with data', 'ExtX': 'hidden field', 'ExtY': 'hidden field', 'ExtZ': 'hidden field', 'DocName': 'hidden field', 'DocPath': 'hidden field', 'DocType': 'hidden field', 'DocVer': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'ScaleX': 'hidden field', 'ScaleY': 'hidden field', 'ScaleZ': 'hidden field', 'Owner': 'hidden field', 'Style': 'hidden field', 'FontID': 'hidden field', 'Text': 'hidden field', 'Height': 'hidden field', 'TxtWidth': 'hidden field', 'TxtOblique': 'hidden field', 'TxtGenType': 'hidden field', 'TxtBoxHt': 'hidden field', 'TxtBoxWd': 'hidden field', 'TxtRefWd': 'hidden field', 'TxtAttach': 'hidden field', 'TxtDir': 'hidden field', 'LnSpace': 'hidden field', 'SpaceFct': 'hidden field', 'TxtMemo': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Polyline_4.set('fieldLabels', {'Entity': 'hidden field', 'Handle': 'hidden field', 'Layer': 'hidden field', 'LyrFrzn': 'hidden field', 'LyrLock': 'hidden field', 'LyrOn': 'hidden field', 'LyrVPFrzn': 'hidden field', 'LyrHandle': 'hidden field', 'Color': 'hidden field', 'EntColor': 'hidden field', 'LyrColor': 'hidden field', 'BlkColor': 'hidden field', 'Linetype': 'hidden field', 'EntLinetyp': 'hidden field', 'LyrLnType': 'hidden field', 'BlkLinetyp': 'hidden field', 'LTScale': 'hidden field', 'Elevation': 'hidden field', 'Thickness': 'hidden field', 'LineWt': 'hidden field', 'EntLineWt': 'hidden field', 'LyrLineWt': 'hidden field', 'BlkLineWt': 'hidden field', 'RefName': 'inline label - visible with data', 'ExtX': 'hidden field', 'ExtY': 'hidden field', 'ExtZ': 'hidden field', 'DocName': 'hidden field', 'DocPath': 'hidden field', 'DocType': 'hidden field', 'DocVer': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'GlobalWidt': 'hidden field', 'Shape_Leng': 'hidden field', });
lyr_TextPoint_5.set('fieldLabels', {'Entity': 'hidden field', 'Handle': 'hidden field', 'Layer': 'hidden field', 'LyrFrzn': 'hidden field', 'LyrLock': 'hidden field', 'LyrOn': 'hidden field', 'LyrVPFrzn': 'hidden field', 'LyrHandle': 'hidden field', 'Color': 'hidden field', 'EntColor': 'hidden field', 'LyrColor': 'hidden field', 'BlkColor': 'hidden field', 'Linetype': 'hidden field', 'EntLinetyp': 'hidden field', 'LyrLnType': 'hidden field', 'BlkLinetyp': 'hidden field', 'LTScale': 'hidden field', 'Elevation': 'hidden field', 'Thickness': 'hidden field', 'LineWt': 'hidden field', 'EntLineWt': 'hidden field', 'LyrLineWt': 'hidden field', 'BlkLineWt': 'hidden field', 'RefName': 'header label - visible with data', 'ExtX': 'hidden field', 'ExtY': 'hidden field', 'ExtZ': 'hidden field', 'DocName': 'hidden field', 'DocPath': 'hidden field', 'DocType': 'hidden field', 'DocVer': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'ScaleX': 'hidden field', 'ScaleY': 'hidden field', 'ScaleZ': 'hidden field', 'Owner': 'hidden field', 'Style': 'hidden field', 'FontID': 'hidden field', 'Text': 'hidden field', 'Height': 'hidden field', 'Angle': 'hidden field', 'TxtWidth': 'hidden field', 'TxtOblique': 'hidden field', 'TxtGenType': 'hidden field', 'Horizontal': 'hidden field', 'VerticalAl': 'hidden field', 'FontName': 'hidden field', 'TxtBoxHt': 'hidden field', 'TxtBoxWd': 'hidden field', 'TxtRefWd': 'hidden field', 'TxtAttach': 'hidden field', 'TxtDir': 'hidden field', 'LnSpace': 'hidden field', 'SpaceFct': 'hidden field', 'TxtMemo': 'hidden field', 'FeatureID': 'hidden field', 'ZOrder': 'hidden field', 'Annotation': 'hidden field', 'SymbolID': 'hidden field', 'Status': 'hidden field', });
lyr_Point_6.set('fieldLabels', {'Entity': 'hidden field', 'Handle': 'hidden field', 'Layer': 'hidden field', 'LyrFrzn': 'hidden field', 'LyrLock': 'hidden field', 'LyrOn': 'hidden field', 'LyrVPFrzn': 'hidden field', 'LyrHandle': 'hidden field', 'Color': 'hidden field', 'EntColor': 'hidden field', 'LyrColor': 'hidden field', 'BlkColor': 'hidden field', 'Linetype': 'hidden field', 'EntLinetyp': 'hidden field', 'LyrLnType': 'hidden field', 'BlkLinetyp': 'hidden field', 'LTScale': 'hidden field', 'Elevation': 'hidden field', 'Thickness': 'hidden field', 'LineWt': 'hidden field', 'EntLineWt': 'hidden field', 'LyrLineWt': 'hidden field', 'BlkLineWt': 'hidden field', 'RefName': 'inline label - visible with data', 'ExtX': 'hidden field', 'ExtY': 'hidden field', 'ExtZ': 'hidden field', 'DocName': 'hidden field', 'DocPath': 'hidden field', 'DocType': 'hidden field', 'DocVer': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'ScaleX': 'hidden field', 'ScaleY': 'hidden field', 'ScaleZ': 'hidden field', 'Angle': 'hidden field', });
lyr_Polygon_7.set('fieldLabels', {'Entity': 'hidden field', 'Handle': 'hidden field', 'Layer': 'hidden field', 'LyrFrzn': 'hidden field', 'LyrLock': 'hidden field', 'LyrOn': 'hidden field', 'LyrVPFrzn': 'hidden field', 'LyrHandle': 'hidden field', 'Color': 'hidden field', 'EntColor': 'hidden field', 'LyrColor': 'hidden field', 'BlkColor': 'hidden field', 'Linetype': 'hidden field', 'EntLinetyp': 'hidden field', 'LyrLnType': 'hidden field', 'BlkLinetyp': 'hidden field', 'LTScale': 'hidden field', 'Elevation': 'hidden field', 'Thickness': 'hidden field', 'LineWt': 'hidden field', 'EntLineWt': 'hidden field', 'LyrLineWt': 'hidden field', 'BlkLineWt': 'hidden field', 'RefName': 'header label - visible with data', 'ExtX': 'hidden field', 'ExtY': 'hidden field', 'ExtZ': 'hidden field', 'DocName': 'hidden field', 'DocPath': 'hidden field', 'DocType': 'hidden field', 'DocVer': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'GlobalWidt': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Polygon_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});