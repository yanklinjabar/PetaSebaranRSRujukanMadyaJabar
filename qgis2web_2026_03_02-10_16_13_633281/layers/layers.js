var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BATASKABKOTA_1 = new ol.format.GeoJSON();
var features_BATASKABKOTA_1 = format_BATASKABKOTA_1.readFeatures(json_BATASKABKOTA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKABKOTA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASKABKOTA_1.addFeatures(features_BATASKABKOTA_1);
var lyr_BATASKABKOTA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASKABKOTA_1, 
                style: style_BATASKABKOTA_1,
                popuplayertitle: 'BATAS KAB KOTA',
                interactive: true,
                title: '<img src="styles/legend/BATASKABKOTA_1.png" /> BATAS KAB KOTA'
            });
var format_RSSwastaWilayahPRIANGANTIMUR_2 = new ol.format.GeoJSON();
var features_RSSwastaWilayahPRIANGANTIMUR_2 = format_RSSwastaWilayahPRIANGANTIMUR_2.readFeatures(json_RSSwastaWilayahPRIANGANTIMUR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahPRIANGANTIMUR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahPRIANGANTIMUR_2.addFeatures(features_RSSwastaWilayahPRIANGANTIMUR_2);
var lyr_RSSwastaWilayahPRIANGANTIMUR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahPRIANGANTIMUR_2, 
                style: style_RSSwastaWilayahPRIANGANTIMUR_2,
                popuplayertitle: 'RS Swasta Wilayah PRIANGAN TIMUR',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahPRIANGANTIMUR_2.png" /> RS Swasta Wilayah PRIANGAN TIMUR'
            });
var format_RSPemerintahWilayahPrianganTimur_3 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahPrianganTimur_3 = format_RSPemerintahWilayahPrianganTimur_3.readFeatures(json_RSPemerintahWilayahPrianganTimur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahPrianganTimur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahPrianganTimur_3.addFeatures(features_RSPemerintahWilayahPrianganTimur_3);
var lyr_RSPemerintahWilayahPrianganTimur_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahPrianganTimur_3, 
                style: style_RSPemerintahWilayahPrianganTimur_3,
                popuplayertitle: 'RS Pemerintah Wilayah Priangan Timur',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahPrianganTimur_3.png" /> RS Pemerintah Wilayah Priangan Timur'
            });
var format_RSSwastaWilayahPURWASUKA_4 = new ol.format.GeoJSON();
var features_RSSwastaWilayahPURWASUKA_4 = format_RSSwastaWilayahPURWASUKA_4.readFeatures(json_RSSwastaWilayahPURWASUKA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahPURWASUKA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahPURWASUKA_4.addFeatures(features_RSSwastaWilayahPURWASUKA_4);
var lyr_RSSwastaWilayahPURWASUKA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahPURWASUKA_4, 
                style: style_RSSwastaWilayahPURWASUKA_4,
                popuplayertitle: 'RS Swasta Wilayah PURWASUKA',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahPURWASUKA_4.png" /> RS Swasta Wilayah PURWASUKA'
            });
var format_RSPemerintahWilayahPURWASUKA_5 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahPURWASUKA_5 = format_RSPemerintahWilayahPURWASUKA_5.readFeatures(json_RSPemerintahWilayahPURWASUKA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahPURWASUKA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahPURWASUKA_5.addFeatures(features_RSPemerintahWilayahPURWASUKA_5);
var lyr_RSPemerintahWilayahPURWASUKA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahPURWASUKA_5, 
                style: style_RSPemerintahWilayahPURWASUKA_5,
                popuplayertitle: 'RS Pemerintah Wilayah PURWASUKA',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahPURWASUKA_5.png" /> RS Pemerintah Wilayah PURWASUKA'
            });
var format_RSSwastaWilayahBODEBEK_6 = new ol.format.GeoJSON();
var features_RSSwastaWilayahBODEBEK_6 = format_RSSwastaWilayahBODEBEK_6.readFeatures(json_RSSwastaWilayahBODEBEK_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahBODEBEK_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahBODEBEK_6.addFeatures(features_RSSwastaWilayahBODEBEK_6);
var lyr_RSSwastaWilayahBODEBEK_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahBODEBEK_6, 
                style: style_RSSwastaWilayahBODEBEK_6,
                popuplayertitle: 'RS Swasta Wilayah BODEBEK',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahBODEBEK_6.png" /> RS Swasta Wilayah BODEBEK'
            });
var format_RSSwastaWilayahBODEBEK_7 = new ol.format.GeoJSON();
var features_RSSwastaWilayahBODEBEK_7 = format_RSSwastaWilayahBODEBEK_7.readFeatures(json_RSSwastaWilayahBODEBEK_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahBODEBEK_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahBODEBEK_7.addFeatures(features_RSSwastaWilayahBODEBEK_7);
var lyr_RSSwastaWilayahBODEBEK_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahBODEBEK_7, 
                style: style_RSSwastaWilayahBODEBEK_7,
                popuplayertitle: 'RS Swasta Wilayah BODEBEK.',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahBODEBEK_7.png" /> RS Swasta Wilayah BODEBEK.'
            });
var format_RSPemerintahWilayahBODEBEK_8 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahBODEBEK_8 = format_RSPemerintahWilayahBODEBEK_8.readFeatures(json_RSPemerintahWilayahBODEBEK_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahBODEBEK_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahBODEBEK_8.addFeatures(features_RSPemerintahWilayahBODEBEK_8);
var lyr_RSPemerintahWilayahBODEBEK_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahBODEBEK_8, 
                style: style_RSPemerintahWilayahBODEBEK_8,
                popuplayertitle: 'RS Pemerintah Wilayah BODEBEK.',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahBODEBEK_8.png" /> RS Pemerintah Wilayah BODEBEK.'
            });
var format_RSPemerintahWilayahBODEBEK_9 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahBODEBEK_9 = format_RSPemerintahWilayahBODEBEK_9.readFeatures(json_RSPemerintahWilayahBODEBEK_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahBODEBEK_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahBODEBEK_9.addFeatures(features_RSPemerintahWilayahBODEBEK_9);
var lyr_RSPemerintahWilayahBODEBEK_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahBODEBEK_9, 
                style: style_RSPemerintahWilayahBODEBEK_9,
                popuplayertitle: 'RS Pemerintah Wilayah BODEBEK',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahBODEBEK_9.png" /> RS Pemerintah Wilayah BODEBEK'
            });
var format_RSSwastaWilayahCEKUNGANBANDUNG_10 = new ol.format.GeoJSON();
var features_RSSwastaWilayahCEKUNGANBANDUNG_10 = format_RSSwastaWilayahCEKUNGANBANDUNG_10.readFeatures(json_RSSwastaWilayahCEKUNGANBANDUNG_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahCEKUNGANBANDUNG_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahCEKUNGANBANDUNG_10.addFeatures(features_RSSwastaWilayahCEKUNGANBANDUNG_10);
var lyr_RSSwastaWilayahCEKUNGANBANDUNG_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahCEKUNGANBANDUNG_10, 
                style: style_RSSwastaWilayahCEKUNGANBANDUNG_10,
                popuplayertitle: 'RS Swasta Wilayah CEKUNGAN BANDUNG.',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahCEKUNGANBANDUNG_10.png" /> RS Swasta Wilayah CEKUNGAN BANDUNG.'
            });
var format_RSPemerintahWilayahCEKUNGANBANdung_11 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahCEKUNGANBANdung_11 = format_RSPemerintahWilayahCEKUNGANBANdung_11.readFeatures(json_RSPemerintahWilayahCEKUNGANBANdung_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahCEKUNGANBANdung_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahCEKUNGANBANdung_11.addFeatures(features_RSPemerintahWilayahCEKUNGANBANdung_11);
var lyr_RSPemerintahWilayahCEKUNGANBANdung_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahCEKUNGANBANdung_11, 
                style: style_RSPemerintahWilayahCEKUNGANBANdung_11,
                popuplayertitle: 'RS Pemerintah Wilayah CEKUNGAN BANdung.',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahCEKUNGANBANdung_11.png" /> RS Pemerintah Wilayah CEKUNGAN BANdung.'
            });
var format_RSSwastaWilayahCEKUNGANBANDUNG_12 = new ol.format.GeoJSON();
var features_RSSwastaWilayahCEKUNGANBANDUNG_12 = format_RSSwastaWilayahCEKUNGANBANDUNG_12.readFeatures(json_RSSwastaWilayahCEKUNGANBANDUNG_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahCEKUNGANBANDUNG_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahCEKUNGANBANDUNG_12.addFeatures(features_RSSwastaWilayahCEKUNGANBANDUNG_12);
var lyr_RSSwastaWilayahCEKUNGANBANDUNG_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahCEKUNGANBANDUNG_12, 
                style: style_RSSwastaWilayahCEKUNGANBANDUNG_12,
                popuplayertitle: 'RS Swasta Wilayah CEKUNGAN BANDUNG',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahCEKUNGANBANDUNG_12.png" /> RS Swasta Wilayah CEKUNGAN BANDUNG'
            });
var format_RSPemerintahWilayahCEKUNGANBANDUNG_13 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahCEKUNGANBANDUNG_13 = format_RSPemerintahWilayahCEKUNGANBANDUNG_13.readFeatures(json_RSPemerintahWilayahCEKUNGANBANDUNG_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahCEKUNGANBANDUNG_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahCEKUNGANBANDUNG_13.addFeatures(features_RSPemerintahWilayahCEKUNGANBANDUNG_13);
var lyr_RSPemerintahWilayahCEKUNGANBANDUNG_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahCEKUNGANBANDUNG_13, 
                style: style_RSPemerintahWilayahCEKUNGANBANDUNG_13,
                popuplayertitle: 'RS Pemerintah Wilayah CEKUNGAN BANDUNG',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahCEKUNGANBANDUNG_13.png" /> RS Pemerintah Wilayah CEKUNGAN BANDUNG'
            });
var format_RSPemerintahWilayahCIAYUMAJAKUNING_14 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahCIAYUMAJAKUNING_14 = format_RSPemerintahWilayahCIAYUMAJAKUNING_14.readFeatures(json_RSPemerintahWilayahCIAYUMAJAKUNING_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahCIAYUMAJAKUNING_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahCIAYUMAJAKUNING_14.addFeatures(features_RSPemerintahWilayahCIAYUMAJAKUNING_14);
var lyr_RSPemerintahWilayahCIAYUMAJAKUNING_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahCIAYUMAJAKUNING_14, 
                style: style_RSPemerintahWilayahCIAYUMAJAKUNING_14,
                popuplayertitle: 'RS Pemerintah Wilayah CIAYUMAJAKUNING.',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahCIAYUMAJAKUNING_14.png" /> RS Pemerintah Wilayah CIAYUMAJAKUNING.'
            });
var format_RSSwastaWilayahCIAYUMAJAKUNING_15 = new ol.format.GeoJSON();
var features_RSSwastaWilayahCIAYUMAJAKUNING_15 = format_RSSwastaWilayahCIAYUMAJAKUNING_15.readFeatures(json_RSSwastaWilayahCIAYUMAJAKUNING_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahCIAYUMAJAKUNING_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahCIAYUMAJAKUNING_15.addFeatures(features_RSSwastaWilayahCIAYUMAJAKUNING_15);
var lyr_RSSwastaWilayahCIAYUMAJAKUNING_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahCIAYUMAJAKUNING_15, 
                style: style_RSSwastaWilayahCIAYUMAJAKUNING_15,
                popuplayertitle: 'RS Swasta Wilayah CIAYUMAJAKUNING.',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahCIAYUMAJAKUNING_15.png" /> RS Swasta Wilayah CIAYUMAJAKUNING.'
            });
var format_RSSwastaWilayahSUKAJUR_16 = new ol.format.GeoJSON();
var features_RSSwastaWilayahSUKAJUR_16 = format_RSSwastaWilayahSUKAJUR_16.readFeatures(json_RSSwastaWilayahSUKAJUR_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahSUKAJUR_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahSUKAJUR_16.addFeatures(features_RSSwastaWilayahSUKAJUR_16);
var lyr_RSSwastaWilayahSUKAJUR_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahSUKAJUR_16, 
                style: style_RSSwastaWilayahSUKAJUR_16,
                popuplayertitle: 'RS Swasta Wilayah SUKAJUR',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahSUKAJUR_16.png" /> RS Swasta Wilayah SUKAJUR'
            });
var format_RSPemerintahWilayahSUKAJUR_17 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahSUKAJUR_17 = format_RSPemerintahWilayahSUKAJUR_17.readFeatures(json_RSPemerintahWilayahSUKAJUR_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahSUKAJUR_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahSUKAJUR_17.addFeatures(features_RSPemerintahWilayahSUKAJUR_17);
var lyr_RSPemerintahWilayahSUKAJUR_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahSUKAJUR_17, 
                style: style_RSPemerintahWilayahSUKAJUR_17,
                popuplayertitle: 'RS Pemerintah Wilayah SUKAJUR',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahSUKAJUR_17.png" /> RS Pemerintah Wilayah SUKAJUR'
            });
var group_WILAYAHSUKAJUR = new ol.layer.Group({
                                layers: [lyr_RSSwastaWilayahSUKAJUR_16,lyr_RSPemerintahWilayahSUKAJUR_17,],
                                fold: 'close',
                                title: 'WILAYAH SUKAJUR'});
var group_WILAYAHCIAYUMAJAKUNING = new ol.layer.Group({
                                layers: [lyr_RSPemerintahWilayahCIAYUMAJAKUNING_14,lyr_RSSwastaWilayahCIAYUMAJAKUNING_15,],
                                fold: 'close',
                                title: 'WILAYAH CIAYUMAJAKUNING'});
var group_WILAYAHCEKUNGANBANDUNG = new ol.layer.Group({
                                layers: [lyr_RSSwastaWilayahCEKUNGANBANDUNG_10,lyr_RSPemerintahWilayahCEKUNGANBANdung_11,lyr_RSSwastaWilayahCEKUNGANBANDUNG_12,lyr_RSPemerintahWilayahCEKUNGANBANDUNG_13,],
                                fold: 'close',
                                title: 'WILAYAH CEKUNGAN BANDUNG'});
var group_WILAYAHBODEBEK = new ol.layer.Group({
                                layers: [lyr_RSSwastaWilayahBODEBEK_6,lyr_RSSwastaWilayahBODEBEK_7,lyr_RSPemerintahWilayahBODEBEK_8,lyr_RSPemerintahWilayahBODEBEK_9,],
                                fold: 'close',
                                title: 'WILAYAH BODEBEK'});
var group_WILAYAHPURWASUKA = new ol.layer.Group({
                                layers: [lyr_RSSwastaWilayahPURWASUKA_4,lyr_RSPemerintahWilayahPURWASUKA_5,],
                                fold: 'close',
                                title: 'WILAYAH PURWASUKA'});
var group_WILAYAHPRIANGANTIMUR = new ol.layer.Group({
                                layers: [lyr_RSSwastaWilayahPRIANGANTIMUR_2,lyr_RSPemerintahWilayahPrianganTimur_3,],
                                fold: 'close',
                                title: 'WILAYAH PRIANGAN TIMUR'});
var group_PERBATASANWILAYAH = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PERBATASAN WILAYAH'});

lyr_OpenStreetMap_0.setVisible(true);lyr_BATASKABKOTA_1.setVisible(true);lyr_RSSwastaWilayahPRIANGANTIMUR_2.setVisible(true);lyr_RSPemerintahWilayahPrianganTimur_3.setVisible(true);lyr_RSSwastaWilayahPURWASUKA_4.setVisible(true);lyr_RSPemerintahWilayahPURWASUKA_5.setVisible(true);lyr_RSSwastaWilayahBODEBEK_6.setVisible(true);lyr_RSSwastaWilayahBODEBEK_7.setVisible(true);lyr_RSPemerintahWilayahBODEBEK_8.setVisible(true);lyr_RSPemerintahWilayahBODEBEK_9.setVisible(true);lyr_RSSwastaWilayahCEKUNGANBANDUNG_10.setVisible(true);lyr_RSPemerintahWilayahCEKUNGANBANdung_11.setVisible(true);lyr_RSSwastaWilayahCEKUNGANBANDUNG_12.setVisible(true);lyr_RSPemerintahWilayahCEKUNGANBANDUNG_13.setVisible(true);lyr_RSPemerintahWilayahCIAYUMAJAKUNING_14.setVisible(true);lyr_RSSwastaWilayahCIAYUMAJAKUNING_15.setVisible(true);lyr_RSSwastaWilayahSUKAJUR_16.setVisible(true);lyr_RSPemerintahWilayahSUKAJUR_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BATASKABKOTA_1,group_WILAYAHPRIANGANTIMUR,group_WILAYAHPURWASUKA,group_WILAYAHBODEBEK,group_WILAYAHCEKUNGANBANDUNG,group_WILAYAHCIAYUMAJAKUNING,group_WILAYAHSUKAJUR];
lyr_BATASKABKOTA_1.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_RSSwastaWilayahPRIANGANTIMUR_2.set('fieldAliases', {'fid': 'fid', 'RS Kemampuan Madya': 'RS Kemampuan Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahPrianganTimur_3.set('fieldAliases', {'fid': 'fid', 'RS Kemampuan Madya': 'RS Kemampuan Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahPURWASUKA_4.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahPURWASUKA_5.set('fieldAliases', {'fid': 'fid', 'RSUD Strata Madya': 'RSUD Strata Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahBODEBEK_6.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahBODEBEK_7.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahBODEBEK_8.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahBODEBEK_9.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahCEKUNGANBANDUNG_10.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahCEKUNGANBANdung_11.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahCEKUNGANBANDUNG_12.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahCEKUNGANBANDUNG_13.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahCIAYUMAJAKUNING_14.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahCIAYUMAJAKUNING_15.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahSUKAJUR_16.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahSUKAJUR_17.set('fieldAliases', {'fid': 'fid', 'Nama RS': 'Nama RS', 'Layanan': 'Layanan', });
lyr_BATASKABKOTA_1.set('fieldImages', {'KAB_KOTA': '', });
lyr_RSSwastaWilayahPRIANGANTIMUR_2.set('fieldImages', {'fid': '', 'RS Kemampuan Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahPrianganTimur_3.set('fieldImages', {'fid': '', 'RS Kemampuan Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahPURWASUKA_4.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahPURWASUKA_5.set('fieldImages', {'fid': '', 'RSUD Strata Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahBODEBEK_6.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahBODEBEK_7.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahBODEBEK_8.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahBODEBEK_9.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahCEKUNGANBANDUNG_10.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahCEKUNGANBANdung_11.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahCEKUNGANBANDUNG_12.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahCEKUNGANBANDUNG_13.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahCIAYUMAJAKUNING_14.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahCIAYUMAJAKUNING_15.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahSUKAJUR_16.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahSUKAJUR_17.set('fieldImages', {'fid': '', 'Nama RS': '', 'Layanan': '', });
lyr_BATASKABKOTA_1.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_RSSwastaWilayahPRIANGANTIMUR_2.set('fieldLabels', {'fid': 'hidden field', 'RS Kemampuan Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahPrianganTimur_3.set('fieldLabels', {'fid': 'hidden field', 'RS Kemampuan Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahPURWASUKA_4.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahPURWASUKA_5.set('fieldLabels', {'fid': 'hidden field', 'RSUD Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahBODEBEK_6.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahBODEBEK_7.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahBODEBEK_8.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahBODEBEK_9.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahCEKUNGANBANDUNG_10.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahCEKUNGANBANdung_11.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahCEKUNGANBANDUNG_12.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahCEKUNGANBANDUNG_13.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahCIAYUMAJAKUNING_14.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahCIAYUMAJAKUNING_15.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahSUKAJUR_16.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahSUKAJUR_17.set('fieldLabels', {'fid': 'hidden field', 'Nama RS': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahSUKAJUR_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});