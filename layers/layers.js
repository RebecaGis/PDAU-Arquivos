var wms_layers = [];


        var lyr_XYZLayer_0 = new ol.layer.Tile({
            'title': 'XYZ Layer',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Bairros_IJSN_VILAVELHA_2 = new ol.format.GeoJSON();
var features_Bairros_IJSN_VILAVELHA_2 = format_Bairros_IJSN_VILAVELHA_2.readFeatures(json_Bairros_IJSN_VILAVELHA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bairros_IJSN_VILAVELHA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairros_IJSN_VILAVELHA_2.addFeatures(features_Bairros_IJSN_VILAVELHA_2);
var lyr_Bairros_IJSN_VILAVELHA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairros_IJSN_VILAVELHA_2, 
                style: style_Bairros_IJSN_VILAVELHA_2,
                popuplayertitle: "Bairros_IJSN_VILA-VELHA",
                interactive: true,
                title: '<img src="styles/legend/Bairros_IJSN_VILAVELHA_2.png" /> Bairros_IJSN_VILA-VELHA'
            });
var format_Regiao_05_Grande_Jucu_3 = new ol.format.GeoJSON();
var features_Regiao_05_Grande_Jucu_3 = format_Regiao_05_Grande_Jucu_3.readFeatures(json_Regiao_05_Grande_Jucu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regiao_05_Grande_Jucu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regiao_05_Grande_Jucu_3.addFeatures(features_Regiao_05_Grande_Jucu_3);
var lyr_Regiao_05_Grande_Jucu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regiao_05_Grande_Jucu_3, 
                style: style_Regiao_05_Grande_Jucu_3,
                popuplayertitle: "Regiao_05_Grande_Jucu",
                interactive: true,
                title: '<img src="styles/legend/Regiao_05_Grande_Jucu_3.png" /> Regiao_05_Grande_Jucu'
            });
var format_Regiao_04_Grande_Cobilandia_4 = new ol.format.GeoJSON();
var features_Regiao_04_Grande_Cobilandia_4 = format_Regiao_04_Grande_Cobilandia_4.readFeatures(json_Regiao_04_Grande_Cobilandia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regiao_04_Grande_Cobilandia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regiao_04_Grande_Cobilandia_4.addFeatures(features_Regiao_04_Grande_Cobilandia_4);
var lyr_Regiao_04_Grande_Cobilandia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regiao_04_Grande_Cobilandia_4, 
                style: style_Regiao_04_Grande_Cobilandia_4,
                popuplayertitle: "Regiao_04_Grande_Cobilandia",
                interactive: true,
                title: '<img src="styles/legend/Regiao_04_Grande_Cobilandia_4.png" /> Regiao_04_Grande_Cobilandia'
            });
var format_Regiao_03_Grande_Aribiri_5 = new ol.format.GeoJSON();
var features_Regiao_03_Grande_Aribiri_5 = format_Regiao_03_Grande_Aribiri_5.readFeatures(json_Regiao_03_Grande_Aribiri_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regiao_03_Grande_Aribiri_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regiao_03_Grande_Aribiri_5.addFeatures(features_Regiao_03_Grande_Aribiri_5);
var lyr_Regiao_03_Grande_Aribiri_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regiao_03_Grande_Aribiri_5, 
                style: style_Regiao_03_Grande_Aribiri_5,
                popuplayertitle: "Regiao_03_Grande_Aribiri",
                interactive: true,
                title: '<img src="styles/legend/Regiao_03_Grande_Aribiri_5.png" /> Regiao_03_Grande_Aribiri'
            });
var format_Regiao_02_Grande_Ibes_6 = new ol.format.GeoJSON();
var features_Regiao_02_Grande_Ibes_6 = format_Regiao_02_Grande_Ibes_6.readFeatures(json_Regiao_02_Grande_Ibes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regiao_02_Grande_Ibes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regiao_02_Grande_Ibes_6.addFeatures(features_Regiao_02_Grande_Ibes_6);
var lyr_Regiao_02_Grande_Ibes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regiao_02_Grande_Ibes_6, 
                style: style_Regiao_02_Grande_Ibes_6,
                popuplayertitle: "Regiao_02_Grande_Ibes",
                interactive: true,
                title: '<img src="styles/legend/Regiao_02_Grande_Ibes_6.png" /> Regiao_02_Grande_Ibes'
            });
var format_Regiao_01_Centro_7 = new ol.format.GeoJSON();
var features_Regiao_01_Centro_7 = format_Regiao_01_Centro_7.readFeatures(json_Regiao_01_Centro_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regiao_01_Centro_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regiao_01_Centro_7.addFeatures(features_Regiao_01_Centro_7);
var lyr_Regiao_01_Centro_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regiao_01_Centro_7, 
                style: style_Regiao_01_Centro_7,
                popuplayertitle: "Regiao_01_Centro",
                interactive: true,
                title: '<img src="styles/legend/Regiao_01_Centro_7.png" /> Regiao_01_Centro'
            });
var format_REGIAO_05_dissolvido_8 = new ol.format.GeoJSON();
var features_REGIAO_05_dissolvido_8 = format_REGIAO_05_dissolvido_8.readFeatures(json_REGIAO_05_dissolvido_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGIAO_05_dissolvido_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_05_dissolvido_8.addFeatures(features_REGIAO_05_dissolvido_8);
var lyr_REGIAO_05_dissolvido_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_05_dissolvido_8, 
                style: style_REGIAO_05_dissolvido_8,
                popuplayertitle: "REGIAO_05_dissolvido",
                interactive: true,
                title: '<img src="styles/legend/REGIAO_05_dissolvido_8.png" /> REGIAO_05_dissolvido'
            });
var format_REGIAO_04_dissolvido_9 = new ol.format.GeoJSON();
var features_REGIAO_04_dissolvido_9 = format_REGIAO_04_dissolvido_9.readFeatures(json_REGIAO_04_dissolvido_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGIAO_04_dissolvido_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_04_dissolvido_9.addFeatures(features_REGIAO_04_dissolvido_9);
var lyr_REGIAO_04_dissolvido_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_04_dissolvido_9, 
                style: style_REGIAO_04_dissolvido_9,
                popuplayertitle: "REGIAO_04_dissolvido",
                interactive: true,
                title: '<img src="styles/legend/REGIAO_04_dissolvido_9.png" /> REGIAO_04_dissolvido'
            });
var format_REGIAO_03_dissolvido_10 = new ol.format.GeoJSON();
var features_REGIAO_03_dissolvido_10 = format_REGIAO_03_dissolvido_10.readFeatures(json_REGIAO_03_dissolvido_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGIAO_03_dissolvido_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_03_dissolvido_10.addFeatures(features_REGIAO_03_dissolvido_10);
var lyr_REGIAO_03_dissolvido_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_03_dissolvido_10, 
                style: style_REGIAO_03_dissolvido_10,
                popuplayertitle: "REGIAO_03_dissolvido",
                interactive: true,
                title: '<img src="styles/legend/REGIAO_03_dissolvido_10.png" /> REGIAO_03_dissolvido'
            });
var format_REGIAO_02_dissolvido_11 = new ol.format.GeoJSON();
var features_REGIAO_02_dissolvido_11 = format_REGIAO_02_dissolvido_11.readFeatures(json_REGIAO_02_dissolvido_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGIAO_02_dissolvido_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_02_dissolvido_11.addFeatures(features_REGIAO_02_dissolvido_11);
var lyr_REGIAO_02_dissolvido_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_02_dissolvido_11, 
                style: style_REGIAO_02_dissolvido_11,
                popuplayertitle: "REGIAO_02_dissolvido",
                interactive: true,
                title: '<img src="styles/legend/REGIAO_02_dissolvido_11.png" /> REGIAO_02_dissolvido'
            });
var format_REGIAO_01_dissolvido_12 = new ol.format.GeoJSON();
var features_REGIAO_01_dissolvido_12 = format_REGIAO_01_dissolvido_12.readFeatures(json_REGIAO_01_dissolvido_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGIAO_01_dissolvido_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_01_dissolvido_12.addFeatures(features_REGIAO_01_dissolvido_12);
var lyr_REGIAO_01_dissolvido_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_01_dissolvido_12, 
                style: style_REGIAO_01_dissolvido_12,
                popuplayertitle: "REGIAO_01_dissolvido",
                interactive: true,
                title: '<img src="styles/legend/REGIAO_01_dissolvido_12.png" /> REGIAO_01_dissolvido'
            });
var format_R5_grade_13 = new ol.format.GeoJSON();
var features_R5_grade_13 = format_R5_grade_13.readFeatures(json_R5_grade_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R5_grade_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R5_grade_13.addFeatures(features_R5_grade_13);
var lyr_R5_grade_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R5_grade_13, 
                style: style_R5_grade_13,
                popuplayertitle: "R5_grade",
                interactive: true,
                title: '<img src="styles/legend/R5_grade_13.png" /> R5_grade'
            });
var format_R4_grade_14 = new ol.format.GeoJSON();
var features_R4_grade_14 = format_R4_grade_14.readFeatures(json_R4_grade_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R4_grade_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R4_grade_14.addFeatures(features_R4_grade_14);
var lyr_R4_grade_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R4_grade_14, 
                style: style_R4_grade_14,
                popuplayertitle: "R4_grade",
                interactive: true,
                title: '<img src="styles/legend/R4_grade_14.png" /> R4_grade'
            });
var format_R3_grade_15 = new ol.format.GeoJSON();
var features_R3_grade_15 = format_R3_grade_15.readFeatures(json_R3_grade_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R3_grade_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R3_grade_15.addFeatures(features_R3_grade_15);
var lyr_R3_grade_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R3_grade_15, 
                style: style_R3_grade_15,
                popuplayertitle: "R3_grade",
                interactive: true,
                title: '<img src="styles/legend/R3_grade_15.png" /> R3_grade'
            });
var format_R2_grade_16 = new ol.format.GeoJSON();
var features_R2_grade_16 = format_R2_grade_16.readFeatures(json_R2_grade_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2_grade_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2_grade_16.addFeatures(features_R2_grade_16);
var lyr_R2_grade_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R2_grade_16, 
                style: style_R2_grade_16,
                popuplayertitle: "R2_grade",
                interactive: true,
                title: '<img src="styles/legend/R2_grade_16.png" /> R2_grade'
            });
var format_R1_grade_17 = new ol.format.GeoJSON();
var features_R1_grade_17 = format_R1_grade_17.readFeatures(json_R1_grade_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R1_grade_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R1_grade_17.addFeatures(features_R1_grade_17);
var lyr_R1_grade_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R1_grade_17, 
                style: style_R1_grade_17,
                popuplayertitle: "R1_grade",
                interactive: true,
                title: '<img src="styles/legend/R1_grade_17.png" /> R1_grade'
            });
var format_Grade_total_18 = new ol.format.GeoJSON();
var features_Grade_total_18 = format_Grade_total_18.readFeatures(json_Grade_total_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grade_total_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grade_total_18.addFeatures(features_Grade_total_18);
var lyr_Grade_total_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grade_total_18, 
                style: style_Grade_total_18,
                popuplayertitle: "Grade_total",
                interactive: true,
                title: '<img src="styles/legend/Grade_total_18.png" /> Grade_total'
            });
var format_VILAVELHALIMITE_19 = new ol.format.GeoJSON();
var features_VILAVELHALIMITE_19 = format_VILAVELHALIMITE_19.readFeatures(json_VILAVELHALIMITE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VILAVELHALIMITE_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VILAVELHALIMITE_19.addFeatures(features_VILAVELHALIMITE_19);
var lyr_VILAVELHALIMITE_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VILAVELHALIMITE_19, 
                style: style_VILAVELHALIMITE_19,
                popuplayertitle: "VILA VELHA LIMITE",
                interactive: true,
                title: '<img src="styles/legend/VILAVELHALIMITE_19.png" /> VILA VELHA LIMITE'
            });

lyr_XYZLayer_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Bairros_IJSN_VILAVELHA_2.setVisible(true);lyr_Regiao_05_Grande_Jucu_3.setVisible(true);lyr_Regiao_04_Grande_Cobilandia_4.setVisible(true);lyr_Regiao_03_Grande_Aribiri_5.setVisible(true);lyr_Regiao_02_Grande_Ibes_6.setVisible(true);lyr_Regiao_01_Centro_7.setVisible(true);lyr_REGIAO_05_dissolvido_8.setVisible(true);lyr_REGIAO_04_dissolvido_9.setVisible(true);lyr_REGIAO_03_dissolvido_10.setVisible(true);lyr_REGIAO_02_dissolvido_11.setVisible(true);lyr_REGIAO_01_dissolvido_12.setVisible(true);lyr_R5_grade_13.setVisible(true);lyr_R4_grade_14.setVisible(true);lyr_R3_grade_15.setVisible(true);lyr_R2_grade_16.setVisible(true);lyr_R1_grade_17.setVisible(true);lyr_Grade_total_18.setVisible(true);lyr_VILAVELHALIMITE_19.setVisible(true);
var layersList = [lyr_XYZLayer_0,lyr_GoogleSatellite_1,lyr_Bairros_IJSN_VILAVELHA_2,lyr_Regiao_05_Grande_Jucu_3,lyr_Regiao_04_Grande_Cobilandia_4,lyr_Regiao_03_Grande_Aribiri_5,lyr_Regiao_02_Grande_Ibes_6,lyr_Regiao_01_Centro_7,lyr_REGIAO_05_dissolvido_8,lyr_REGIAO_04_dissolvido_9,lyr_REGIAO_03_dissolvido_10,lyr_REGIAO_02_dissolvido_11,lyr_REGIAO_01_dissolvido_12,lyr_R5_grade_13,lyr_R4_grade_14,lyr_R3_grade_15,lyr_R2_grade_16,lyr_R1_grade_17,lyr_Grade_total_18,lyr_VILAVELHALIMITE_19];
lyr_Bairros_IJSN_VILAVELHA_2.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_Regiao_05_Grande_Jucu_3.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_Regiao_04_Grande_Cobilandia_4.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_Regiao_03_Grande_Aribiri_5.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_Regiao_02_Grande_Ibes_6.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_Regiao_01_Centro_7.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_REGIAO_05_dissolvido_8.set('fieldAliases', {'ID': 'ID', 'SubRegiao': 'SubRegiao', });
lyr_REGIAO_04_dissolvido_9.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_REGIAO_03_dissolvido_10.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_REGIAO_02_dissolvido_11.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_REGIAO_01_dissolvido_12.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_R5_grade_13.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Subgrupo': 'Subgrupo', 'Regiao': 'Regiao', });
lyr_R4_grade_14.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Regiao': 'Regiao', });
lyr_R3_grade_15.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Regiao': 'Regiao', });
lyr_R2_grade_16.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Regiao': 'Regiao', });
lyr_R1_grade_17.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Regiao': 'Regiao', });
lyr_Grade_total_18.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Regiao': 'Regiao', 'Subgrupo': 'Subgrupo', 'layer': 'layer', });
lyr_VILAVELHALIMITE_19.set('fieldAliases', {'geocodigo': 'geocodigo', 'nome': 'nome', 'microEstad': 'microEstad', 'macroEstad': 'macroEstad', 'anoReferen': 'anoReferen', 'origem': 'origem', 'areaKm2': 'areaKm2', 'perimetroK': 'perimetroK', 'fonte': 'fonte', 'área_m_2': 'área_m_2', 'área_ha': 'área_ha', '_count': '_count', '_sum': '_sum', '_mean': '_mean', });
lyr_Bairros_IJSN_VILAVELHA_2.set('fieldImages', {'nome': '', 'geocodigo': '', 'areaM2': '', 'situacao': '', 'distrito': '', 'geocDistr': '', 'municipio': '', 'geocMun': '', 'macroEstad': '', 'microEstad': '', 'escala': '', 'origem': '', 'anoReferen': '', 'fonte': '', 'area ha': '', 'ID': '', 'nota urb': '', });
lyr_Regiao_05_Grande_Jucu_3.set('fieldImages', {'nome': '', 'geocodigo': '', 'areaM2': '', 'situacao': '', 'distrito': '', 'geocDistr': '', 'municipio': '', 'geocMun': '', 'macroEstad': '', 'microEstad': '', 'escala': '', 'origem': '', 'anoReferen': '', 'fonte': '', 'area ha': '', 'ID': '', 'nota urb': '', });
lyr_Regiao_04_Grande_Cobilandia_4.set('fieldImages', {'nome': '', 'geocodigo': '', 'areaM2': '', 'situacao': '', 'distrito': '', 'geocDistr': '', 'municipio': '', 'geocMun': '', 'macroEstad': '', 'microEstad': '', 'escala': '', 'origem': '', 'anoReferen': '', 'fonte': '', 'area ha': '', 'ID': '', 'nota urb': '', });
lyr_Regiao_03_Grande_Aribiri_5.set('fieldImages', {'nome': '', 'geocodigo': '', 'areaM2': '', 'situacao': '', 'distrito': '', 'geocDistr': '', 'municipio': '', 'geocMun': '', 'macroEstad': '', 'microEstad': '', 'escala': '', 'origem': '', 'anoReferen': '', 'fonte': '', 'area ha': '', 'ID': '', 'nota urb': '', });
lyr_Regiao_02_Grande_Ibes_6.set('fieldImages', {'nome': '', 'geocodigo': '', 'areaM2': '', 'situacao': '', 'distrito': '', 'geocDistr': '', 'municipio': '', 'geocMun': '', 'macroEstad': '', 'microEstad': '', 'escala': '', 'origem': '', 'anoReferen': '', 'fonte': '', 'area ha': '', 'ID': '', 'nota urb': '', });
lyr_Regiao_01_Centro_7.set('fieldImages', {'nome': '', 'geocodigo': '', 'areaM2': '', 'situacao': '', 'distrito': '', 'geocDistr': '', 'municipio': '', 'geocMun': '', 'macroEstad': '', 'microEstad': '', 'escala': '', 'origem': '', 'anoReferen': '', 'fonte': '', 'area ha': '', 'ID': '', 'nota urb': '', });
lyr_REGIAO_05_dissolvido_8.set('fieldImages', {'ID': '', 'SubRegiao': '', });
lyr_REGIAO_04_dissolvido_9.set('fieldImages', {'nome': '', 'geocodigo': '', 'areaM2': '', 'situacao': '', 'distrito': '', 'geocDistr': '', 'municipio': '', 'geocMun': '', 'macroEstad': '', 'microEstad': '', 'escala': '', 'origem': '', 'anoReferen': '', 'fonte': '', 'area ha': '', 'ID': '', 'nota urb': '', });
lyr_REGIAO_03_dissolvido_10.set('fieldImages', {'nome': '', 'geocodigo': '', 'areaM2': '', 'situacao': '', 'distrito': '', 'geocDistr': '', 'municipio': '', 'geocMun': '', 'macroEstad': '', 'microEstad': '', 'escala': '', 'origem': '', 'anoReferen': '', 'fonte': '', 'area ha': '', 'ID': '', 'nota urb': '', });
lyr_REGIAO_02_dissolvido_11.set('fieldImages', {'nome': '', 'geocodigo': '', 'areaM2': '', 'situacao': '', 'distrito': '', 'geocDistr': '', 'municipio': '', 'geocMun': '', 'macroEstad': '', 'microEstad': '', 'escala': '', 'origem': '', 'anoReferen': '', 'fonte': '', 'area ha': '', 'ID': '', 'nota urb': '', });
lyr_REGIAO_01_dissolvido_12.set('fieldImages', {'nome': '', 'geocodigo': '', 'areaM2': '', 'situacao': '', 'distrito': '', 'geocDistr': '', 'municipio': '', 'geocMun': '', 'macroEstad': '', 'microEstad': '', 'escala': '', 'origem': '', 'anoReferen': '', 'fonte': '', 'area ha': '', 'ID': '', 'nota urb': '', });
lyr_R5_grade_13.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Subgrupo': '', 'Regiao': 'TextEdit', });
lyr_R4_grade_14.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Regiao': 'TextEdit', });
lyr_R3_grade_15.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Regiao': 'TextEdit', });
lyr_R2_grade_16.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Regiao': 'TextEdit', });
lyr_R1_grade_17.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Regiao': 'TextEdit', });
lyr_Grade_total_18.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Regiao': 'TextEdit', 'Subgrupo': 'TextEdit', 'layer': 'TextEdit', });
lyr_VILAVELHALIMITE_19.set('fieldImages', {'geocodigo': 'TextEdit', 'nome': 'TextEdit', 'microEstad': 'TextEdit', 'macroEstad': 'TextEdit', 'anoReferen': 'TextEdit', 'origem': 'TextEdit', 'areaKm2': 'TextEdit', 'perimetroK': 'TextEdit', 'fonte': 'TextEdit', 'área_m_2': 'TextEdit', 'área_ha': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', });
lyr_Bairros_IJSN_VILAVELHA_2.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_Regiao_05_Grande_Jucu_3.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_Regiao_04_Grande_Cobilandia_4.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_Regiao_03_Grande_Aribiri_5.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_Regiao_02_Grande_Ibes_6.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_Regiao_01_Centro_7.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_REGIAO_05_dissolvido_8.set('fieldLabels', {'ID': 'no label', 'SubRegiao': 'no label', });
lyr_REGIAO_04_dissolvido_9.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_REGIAO_03_dissolvido_10.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_REGIAO_02_dissolvido_11.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_REGIAO_01_dissolvido_12.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_R5_grade_13.set('fieldLabels', {'id': 'no label', 'Codigo': 'no label', 'Subgrupo': 'no label', 'Regiao': 'no label', });
lyr_R4_grade_14.set('fieldLabels', {'id': 'no label', 'Codigo': 'no label', 'Regiao': 'no label', });
lyr_R3_grade_15.set('fieldLabels', {'id': 'no label', 'Codigo': 'no label', 'Regiao': 'no label', });
lyr_R2_grade_16.set('fieldLabels', {'id': 'no label', 'Codigo': 'no label', 'Regiao': 'no label', });
lyr_R1_grade_17.set('fieldLabels', {'id': 'no label', 'Codigo': 'no label', 'Regiao': 'no label', });
lyr_Grade_total_18.set('fieldLabels', {'id': 'no label', 'Codigo': 'no label', 'Regiao': 'no label', 'Subgrupo': 'no label', 'layer': 'no label', });
lyr_VILAVELHALIMITE_19.set('fieldLabels', {'geocodigo': 'no label', 'nome': 'no label', 'microEstad': 'no label', 'macroEstad': 'no label', 'anoReferen': 'no label', 'origem': 'no label', 'areaKm2': 'no label', 'perimetroK': 'no label', 'fonte': 'no label', 'área_m_2': 'no label', 'área_ha': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', });
lyr_VILAVELHALIMITE_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});