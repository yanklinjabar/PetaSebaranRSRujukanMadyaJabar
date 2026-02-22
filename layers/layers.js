var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PRIANGANTIMUR_1 = new ol.format.GeoJSON();
var features_PRIANGANTIMUR_1 = format_PRIANGANTIMUR_1.readFeatures(json_PRIANGANTIMUR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRIANGANTIMUR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRIANGANTIMUR_1.addFeatures(features_PRIANGANTIMUR_1);
var lyr_PRIANGANTIMUR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRIANGANTIMUR_1, 
                style: style_PRIANGANTIMUR_1,
                popuplayertitle: 'PRIANGAN TIMUR',
                interactive: true,
                title: '<img src="styles/legend/PRIANGANTIMUR_1.png" /> PRIANGAN TIMUR'
            });
var format_SUKAJUR_2 = new ol.format.GeoJSON();
var features_SUKAJUR_2 = format_SUKAJUR_2.readFeatures(json_SUKAJUR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUKAJUR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUKAJUR_2.addFeatures(features_SUKAJUR_2);
var lyr_SUKAJUR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUKAJUR_2, 
                style: style_SUKAJUR_2,
                popuplayertitle: 'SUKAJUR',
                interactive: true,
                title: '<img src="styles/legend/SUKAJUR_2.png" /> SUKAJUR'
            });
var format_CIAYUMAJAKUNING_3 = new ol.format.GeoJSON();
var features_CIAYUMAJAKUNING_3 = format_CIAYUMAJAKUNING_3.readFeatures(json_CIAYUMAJAKUNING_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIAYUMAJAKUNING_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIAYUMAJAKUNING_3.addFeatures(features_CIAYUMAJAKUNING_3);
var lyr_CIAYUMAJAKUNING_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CIAYUMAJAKUNING_3, 
                style: style_CIAYUMAJAKUNING_3,
                popuplayertitle: 'CIAYUMAJAKUNING',
                interactive: true,
                title: '<img src="styles/legend/CIAYUMAJAKUNING_3.png" /> CIAYUMAJAKUNING'
            });
var format_CEKBAN_4 = new ol.format.GeoJSON();
var features_CEKBAN_4 = format_CEKBAN_4.readFeatures(json_CEKBAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CEKBAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CEKBAN_4.addFeatures(features_CEKBAN_4);
var lyr_CEKBAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CEKBAN_4, 
                style: style_CEKBAN_4,
                popuplayertitle: 'CEKBAN',
                interactive: true,
                title: '<img src="styles/legend/CEKBAN_4.png" /> CEKBAN'
            });
var format_BODEBEK_5 = new ol.format.GeoJSON();
var features_BODEBEK_5 = format_BODEBEK_5.readFeatures(json_BODEBEK_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BODEBEK_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BODEBEK_5.addFeatures(features_BODEBEK_5);
var lyr_BODEBEK_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BODEBEK_5, 
                style: style_BODEBEK_5,
                popuplayertitle: 'BODEBEK',
                interactive: true,
                title: '<img src="styles/legend/BODEBEK_5.png" /> BODEBEK'
            });
var format_PURWASUKA_6 = new ol.format.GeoJSON();
var features_PURWASUKA_6 = format_PURWASUKA_6.readFeatures(json_PURWASUKA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PURWASUKA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PURWASUKA_6.addFeatures(features_PURWASUKA_6);
var lyr_PURWASUKA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PURWASUKA_6, 
                style: style_PURWASUKA_6,
                popuplayertitle: 'PURWASUKA',
                interactive: true,
                title: '<img src="styles/legend/PURWASUKA_6.png" /> PURWASUKA'
            });
var format_BATASKABKOTA_7 = new ol.format.GeoJSON();
var features_BATASKABKOTA_7 = format_BATASKABKOTA_7.readFeatures(json_BATASKABKOTA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKABKOTA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASKABKOTA_7.addFeatures(features_BATASKABKOTA_7);
var lyr_BATASKABKOTA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASKABKOTA_7, 
                style: style_BATASKABKOTA_7,
                popuplayertitle: 'BATAS KAB KOTA',
                interactive: true,
                title: '<img src="styles/legend/BATASKABKOTA_7.png" /> BATAS KAB KOTA'
            });
var format_RSSwastaWilayahPRIANGANTIMUR_8 = new ol.format.GeoJSON();
var features_RSSwastaWilayahPRIANGANTIMUR_8 = format_RSSwastaWilayahPRIANGANTIMUR_8.readFeatures(json_RSSwastaWilayahPRIANGANTIMUR_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahPRIANGANTIMUR_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahPRIANGANTIMUR_8.addFeatures(features_RSSwastaWilayahPRIANGANTIMUR_8);
var lyr_RSSwastaWilayahPRIANGANTIMUR_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahPRIANGANTIMUR_8, 
                style: style_RSSwastaWilayahPRIANGANTIMUR_8,
                popuplayertitle: 'RS Swasta Wilayah PRIANGAN TIMUR',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahPRIANGANTIMUR_8.png" /> RS Swasta Wilayah PRIANGAN TIMUR'
            });
var format_RSPemerintahWilayahPrianganTimur_9 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahPrianganTimur_9 = format_RSPemerintahWilayahPrianganTimur_9.readFeatures(json_RSPemerintahWilayahPrianganTimur_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahPrianganTimur_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahPrianganTimur_9.addFeatures(features_RSPemerintahWilayahPrianganTimur_9);
var lyr_RSPemerintahWilayahPrianganTimur_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahPrianganTimur_9, 
                style: style_RSPemerintahWilayahPrianganTimur_9,
                popuplayertitle: 'RS Pemerintah Wilayah Priangan Timur',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahPrianganTimur_9.png" /> RS Pemerintah Wilayah Priangan Timur'
            });
var format_RSSwastaWilayahPURWASUKA_10 = new ol.format.GeoJSON();
var features_RSSwastaWilayahPURWASUKA_10 = format_RSSwastaWilayahPURWASUKA_10.readFeatures(json_RSSwastaWilayahPURWASUKA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahPURWASUKA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahPURWASUKA_10.addFeatures(features_RSSwastaWilayahPURWASUKA_10);
var lyr_RSSwastaWilayahPURWASUKA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahPURWASUKA_10, 
                style: style_RSSwastaWilayahPURWASUKA_10,
                popuplayertitle: 'RS Swasta Wilayah PURWASUKA',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahPURWASUKA_10.png" /> RS Swasta Wilayah PURWASUKA'
            });
var format_RSPemerintahWilayahPURWASUKA_11 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahPURWASUKA_11 = format_RSPemerintahWilayahPURWASUKA_11.readFeatures(json_RSPemerintahWilayahPURWASUKA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahPURWASUKA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahPURWASUKA_11.addFeatures(features_RSPemerintahWilayahPURWASUKA_11);
var lyr_RSPemerintahWilayahPURWASUKA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahPURWASUKA_11, 
                style: style_RSPemerintahWilayahPURWASUKA_11,
                popuplayertitle: 'RS Pemerintah Wilayah PURWASUKA',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahPURWASUKA_11.png" /> RS Pemerintah Wilayah PURWASUKA'
            });
var format_RSSwastaWilayahBODEBEK_12 = new ol.format.GeoJSON();
var features_RSSwastaWilayahBODEBEK_12 = format_RSSwastaWilayahBODEBEK_12.readFeatures(json_RSSwastaWilayahBODEBEK_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahBODEBEK_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahBODEBEK_12.addFeatures(features_RSSwastaWilayahBODEBEK_12);
var lyr_RSSwastaWilayahBODEBEK_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahBODEBEK_12, 
                style: style_RSSwastaWilayahBODEBEK_12,
                popuplayertitle: 'RS Swasta Wilayah BODEBEK',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahBODEBEK_12.png" /> RS Swasta Wilayah BODEBEK'
            });
var format_RSSwastaWilayahBODEBEK_13 = new ol.format.GeoJSON();
var features_RSSwastaWilayahBODEBEK_13 = format_RSSwastaWilayahBODEBEK_13.readFeatures(json_RSSwastaWilayahBODEBEK_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahBODEBEK_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahBODEBEK_13.addFeatures(features_RSSwastaWilayahBODEBEK_13);
var lyr_RSSwastaWilayahBODEBEK_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahBODEBEK_13, 
                style: style_RSSwastaWilayahBODEBEK_13,
                popuplayertitle: 'RS Swasta Wilayah BODEBEK.',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahBODEBEK_13.png" /> RS Swasta Wilayah BODEBEK.'
            });
var format_RSPemerintahWilayahBODEBEK_14 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahBODEBEK_14 = format_RSPemerintahWilayahBODEBEK_14.readFeatures(json_RSPemerintahWilayahBODEBEK_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahBODEBEK_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahBODEBEK_14.addFeatures(features_RSPemerintahWilayahBODEBEK_14);
var lyr_RSPemerintahWilayahBODEBEK_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahBODEBEK_14, 
                style: style_RSPemerintahWilayahBODEBEK_14,
                popuplayertitle: 'RS Pemerintah Wilayah BODEBEK.',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahBODEBEK_14.png" /> RS Pemerintah Wilayah BODEBEK.'
            });
var format_RSPemerintahWilayahBODEBEK_15 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahBODEBEK_15 = format_RSPemerintahWilayahBODEBEK_15.readFeatures(json_RSPemerintahWilayahBODEBEK_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahBODEBEK_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahBODEBEK_15.addFeatures(features_RSPemerintahWilayahBODEBEK_15);
var lyr_RSPemerintahWilayahBODEBEK_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahBODEBEK_15, 
                style: style_RSPemerintahWilayahBODEBEK_15,
                popuplayertitle: 'RS Pemerintah Wilayah BODEBEK',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahBODEBEK_15.png" /> RS Pemerintah Wilayah BODEBEK'
            });
var format_RSSwastaWilayahCEKUNGANBANDUNG_16 = new ol.format.GeoJSON();
var features_RSSwastaWilayahCEKUNGANBANDUNG_16 = format_RSSwastaWilayahCEKUNGANBANDUNG_16.readFeatures(json_RSSwastaWilayahCEKUNGANBANDUNG_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahCEKUNGANBANDUNG_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahCEKUNGANBANDUNG_16.addFeatures(features_RSSwastaWilayahCEKUNGANBANDUNG_16);
var lyr_RSSwastaWilayahCEKUNGANBANDUNG_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahCEKUNGANBANDUNG_16, 
                style: style_RSSwastaWilayahCEKUNGANBANDUNG_16,
                popuplayertitle: 'RS Swasta Wilayah CEKUNGAN BANDUNG.',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahCEKUNGANBANDUNG_16.png" /> RS Swasta Wilayah CEKUNGAN BANDUNG.'
            });
var format_RSPemerintahWilayahCEKUNGANBANdung_17 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahCEKUNGANBANdung_17 = format_RSPemerintahWilayahCEKUNGANBANdung_17.readFeatures(json_RSPemerintahWilayahCEKUNGANBANdung_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahCEKUNGANBANdung_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahCEKUNGANBANdung_17.addFeatures(features_RSPemerintahWilayahCEKUNGANBANdung_17);
var lyr_RSPemerintahWilayahCEKUNGANBANdung_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahCEKUNGANBANdung_17, 
                style: style_RSPemerintahWilayahCEKUNGANBANdung_17,
                popuplayertitle: 'RS Pemerintah Wilayah CEKUNGAN BANdung.',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahCEKUNGANBANdung_17.png" /> RS Pemerintah Wilayah CEKUNGAN BANdung.'
            });
var format_RSSwastaWilayahCEKUNGANBANDUNG_18 = new ol.format.GeoJSON();
var features_RSSwastaWilayahCEKUNGANBANDUNG_18 = format_RSSwastaWilayahCEKUNGANBANDUNG_18.readFeatures(json_RSSwastaWilayahCEKUNGANBANDUNG_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahCEKUNGANBANDUNG_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahCEKUNGANBANDUNG_18.addFeatures(features_RSSwastaWilayahCEKUNGANBANDUNG_18);
var lyr_RSSwastaWilayahCEKUNGANBANDUNG_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahCEKUNGANBANDUNG_18, 
                style: style_RSSwastaWilayahCEKUNGANBANDUNG_18,
                popuplayertitle: 'RS Swasta Wilayah CEKUNGAN BANDUNG',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahCEKUNGANBANDUNG_18.png" /> RS Swasta Wilayah CEKUNGAN BANDUNG'
            });
var format_RSPemerintahWilayahCEKUNGANBANDUNG_19 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahCEKUNGANBANDUNG_19 = format_RSPemerintahWilayahCEKUNGANBANDUNG_19.readFeatures(json_RSPemerintahWilayahCEKUNGANBANDUNG_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahCEKUNGANBANDUNG_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahCEKUNGANBANDUNG_19.addFeatures(features_RSPemerintahWilayahCEKUNGANBANDUNG_19);
var lyr_RSPemerintahWilayahCEKUNGANBANDUNG_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahCEKUNGANBANDUNG_19, 
                style: style_RSPemerintahWilayahCEKUNGANBANDUNG_19,
                popuplayertitle: 'RS Pemerintah Wilayah CEKUNGAN BANDUNG',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahCEKUNGANBANDUNG_19.png" /> RS Pemerintah Wilayah CEKUNGAN BANDUNG'
            });
var format_RSPemerintahWilayahCIAYUMAJAKUNING_20 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahCIAYUMAJAKUNING_20 = format_RSPemerintahWilayahCIAYUMAJAKUNING_20.readFeatures(json_RSPemerintahWilayahCIAYUMAJAKUNING_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahCIAYUMAJAKUNING_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahCIAYUMAJAKUNING_20.addFeatures(features_RSPemerintahWilayahCIAYUMAJAKUNING_20);
var lyr_RSPemerintahWilayahCIAYUMAJAKUNING_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahCIAYUMAJAKUNING_20, 
                style: style_RSPemerintahWilayahCIAYUMAJAKUNING_20,
                popuplayertitle: 'RS Pemerintah Wilayah CIAYUMAJAKUNING.',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahCIAYUMAJAKUNING_20.png" /> RS Pemerintah Wilayah CIAYUMAJAKUNING.'
            });
var format_RSSwastaWilayahCIAYUMAJAKUNING_21 = new ol.format.GeoJSON();
var features_RSSwastaWilayahCIAYUMAJAKUNING_21 = format_RSSwastaWilayahCIAYUMAJAKUNING_21.readFeatures(json_RSSwastaWilayahCIAYUMAJAKUNING_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahCIAYUMAJAKUNING_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahCIAYUMAJAKUNING_21.addFeatures(features_RSSwastaWilayahCIAYUMAJAKUNING_21);
var lyr_RSSwastaWilayahCIAYUMAJAKUNING_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahCIAYUMAJAKUNING_21, 
                style: style_RSSwastaWilayahCIAYUMAJAKUNING_21,
                popuplayertitle: 'RS Swasta Wilayah CIAYUMAJAKUNING.',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahCIAYUMAJAKUNING_21.png" /> RS Swasta Wilayah CIAYUMAJAKUNING.'
            });
var format_RSSwastaWilayahSUKAJUR_22 = new ol.format.GeoJSON();
var features_RSSwastaWilayahSUKAJUR_22 = format_RSSwastaWilayahSUKAJUR_22.readFeatures(json_RSSwastaWilayahSUKAJUR_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSwastaWilayahSUKAJUR_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSwastaWilayahSUKAJUR_22.addFeatures(features_RSSwastaWilayahSUKAJUR_22);
var lyr_RSSwastaWilayahSUKAJUR_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSwastaWilayahSUKAJUR_22, 
                style: style_RSSwastaWilayahSUKAJUR_22,
                popuplayertitle: 'RS Swasta Wilayah SUKAJUR',
                interactive: true,
                title: '<img src="styles/legend/RSSwastaWilayahSUKAJUR_22.png" /> RS Swasta Wilayah SUKAJUR'
            });
var format_RSPemerintahWilayahSUKAJUR_23 = new ol.format.GeoJSON();
var features_RSPemerintahWilayahSUKAJUR_23 = format_RSPemerintahWilayahSUKAJUR_23.readFeatures(json_RSPemerintahWilayahSUKAJUR_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPemerintahWilayahSUKAJUR_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPemerintahWilayahSUKAJUR_23.addFeatures(features_RSPemerintahWilayahSUKAJUR_23);
var lyr_RSPemerintahWilayahSUKAJUR_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPemerintahWilayahSUKAJUR_23, 
                style: style_RSPemerintahWilayahSUKAJUR_23,
                popuplayertitle: 'RS Pemerintah Wilayah SUKAJUR',
                interactive: true,
                title: '<img src="styles/legend/RSPemerintahWilayahSUKAJUR_23.png" /> RS Pemerintah Wilayah SUKAJUR'
            });
var group_WILAYAHSUKAJUR = new ol.layer.Group({
                                layers: [lyr_RSSwastaWilayahSUKAJUR_22,lyr_RSPemerintahWilayahSUKAJUR_23,],
                                fold: 'close',
                                title: 'WILAYAH SUKAJUR'});
var group_WILAYAHCIAYUMAJAKUNING = new ol.layer.Group({
                                layers: [lyr_RSPemerintahWilayahCIAYUMAJAKUNING_20,lyr_RSSwastaWilayahCIAYUMAJAKUNING_21,],
                                fold: 'close',
                                title: 'WILAYAH CIAYUMAJAKUNING'});
var group_WILAYAHCEKUNGANBANDUNG = new ol.layer.Group({
                                layers: [lyr_RSSwastaWilayahCEKUNGANBANDUNG_16,lyr_RSPemerintahWilayahCEKUNGANBANdung_17,lyr_RSSwastaWilayahCEKUNGANBANDUNG_18,lyr_RSPemerintahWilayahCEKUNGANBANDUNG_19,],
                                fold: 'close',
                                title: 'WILAYAH CEKUNGAN BANDUNG'});
var group_WILAYAHBODEBEK = new ol.layer.Group({
                                layers: [lyr_RSSwastaWilayahBODEBEK_12,lyr_RSSwastaWilayahBODEBEK_13,lyr_RSPemerintahWilayahBODEBEK_14,lyr_RSPemerintahWilayahBODEBEK_15,],
                                fold: 'close',
                                title: 'WILAYAH BODEBEK'});
var group_WILAYAHPURWASUKA = new ol.layer.Group({
                                layers: [lyr_RSSwastaWilayahPURWASUKA_10,lyr_RSPemerintahWilayahPURWASUKA_11,],
                                fold: 'close',
                                title: 'WILAYAH PURWASUKA'});
var group_WILAYAHPRIANGANTIMUR = new ol.layer.Group({
                                layers: [lyr_RSSwastaWilayahPRIANGANTIMUR_8,lyr_RSPemerintahWilayahPrianganTimur_9,],
                                fold: 'close',
                                title: 'WILAYAH PRIANGAN TIMUR'});
var group_PERBATASANWILAYAH = new ol.layer.Group({
                                layers: [lyr_PRIANGANTIMUR_1,lyr_SUKAJUR_2,lyr_CIAYUMAJAKUNING_3,lyr_CEKBAN_4,lyr_BODEBEK_5,lyr_PURWASUKA_6,lyr_BATASKABKOTA_7,],
                                fold: 'close',
                                title: 'PERBATASAN WILAYAH'});

lyr_OpenStreetMap_0.setVisible(true);lyr_PRIANGANTIMUR_1.setVisible(true);lyr_SUKAJUR_2.setVisible(true);lyr_CIAYUMAJAKUNING_3.setVisible(true);lyr_CEKBAN_4.setVisible(true);lyr_BODEBEK_5.setVisible(true);lyr_PURWASUKA_6.setVisible(true);lyr_BATASKABKOTA_7.setVisible(true);lyr_RSSwastaWilayahPRIANGANTIMUR_8.setVisible(true);lyr_RSPemerintahWilayahPrianganTimur_9.setVisible(true);lyr_RSSwastaWilayahPURWASUKA_10.setVisible(true);lyr_RSPemerintahWilayahPURWASUKA_11.setVisible(true);lyr_RSSwastaWilayahBODEBEK_12.setVisible(true);lyr_RSSwastaWilayahBODEBEK_13.setVisible(true);lyr_RSPemerintahWilayahBODEBEK_14.setVisible(true);lyr_RSPemerintahWilayahBODEBEK_15.setVisible(true);lyr_RSSwastaWilayahCEKUNGANBANDUNG_16.setVisible(true);lyr_RSPemerintahWilayahCEKUNGANBANdung_17.setVisible(true);lyr_RSSwastaWilayahCEKUNGANBANDUNG_18.setVisible(true);lyr_RSPemerintahWilayahCEKUNGANBANDUNG_19.setVisible(true);lyr_RSPemerintahWilayahCIAYUMAJAKUNING_20.setVisible(true);lyr_RSSwastaWilayahCIAYUMAJAKUNING_21.setVisible(true);lyr_RSSwastaWilayahSUKAJUR_22.setVisible(true);lyr_RSPemerintahWilayahSUKAJUR_23.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_PERBATASANWILAYAH,group_WILAYAHPRIANGANTIMUR,group_WILAYAHPURWASUKA,group_WILAYAHBODEBEK,group_WILAYAHCEKUNGANBANDUNG,group_WILAYAHCIAYUMAJAKUNING,group_WILAYAHSUKAJUR];
lyr_PRIANGANTIMUR_1.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_SUKAJUR_2.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_CIAYUMAJAKUNING_3.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_CEKBAN_4.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_BODEBEK_5.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_PURWASUKA_6.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_BATASKABKOTA_7.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_RSSwastaWilayahPRIANGANTIMUR_8.set('fieldAliases', {'fid': 'fid', 'RS Kemampuan Madya': 'RS Kemampuan Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahPrianganTimur_9.set('fieldAliases', {'fid': 'fid', 'RS Kemampuan Madya': 'RS Kemampuan Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahPURWASUKA_10.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahPURWASUKA_11.set('fieldAliases', {'fid': 'fid', 'RSUD Strata Madya': 'RSUD Strata Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahBODEBEK_12.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahBODEBEK_13.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahBODEBEK_14.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahBODEBEK_15.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahCEKUNGANBANDUNG_16.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahCEKUNGANBANdung_17.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahCEKUNGANBANDUNG_18.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahCEKUNGANBANDUNG_19.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahCIAYUMAJAKUNING_20.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahCIAYUMAJAKUNING_21.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSSwastaWilayahSUKAJUR_22.set('fieldAliases', {'fid': 'fid', 'RS Strata Madya': 'RS Strata Madya', 'Layanan': 'Layanan', });
lyr_RSPemerintahWilayahSUKAJUR_23.set('fieldAliases', {'fid': 'fid', 'Nama RS': 'Nama RS', 'Layanan': 'Layanan', });
lyr_PRIANGANTIMUR_1.set('fieldImages', {'KAB_KOTA': '', });
lyr_SUKAJUR_2.set('fieldImages', {'KAB_KOTA': '', });
lyr_CIAYUMAJAKUNING_3.set('fieldImages', {'KAB_KOTA': '', });
lyr_CEKBAN_4.set('fieldImages', {'KAB_KOTA': '', });
lyr_BODEBEK_5.set('fieldImages', {'KAB_KOTA': '', });
lyr_PURWASUKA_6.set('fieldImages', {'KAB_KOTA': '', });
lyr_BATASKABKOTA_7.set('fieldImages', {'KAB_KOTA': '', });
lyr_RSSwastaWilayahPRIANGANTIMUR_8.set('fieldImages', {'fid': '', 'RS Kemampuan Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahPrianganTimur_9.set('fieldImages', {'fid': '', 'RS Kemampuan Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahPURWASUKA_10.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahPURWASUKA_11.set('fieldImages', {'fid': '', 'RSUD Strata Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahBODEBEK_12.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahBODEBEK_13.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahBODEBEK_14.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahBODEBEK_15.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahCEKUNGANBANDUNG_16.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahCEKUNGANBANdung_17.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahCEKUNGANBANDUNG_18.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahCEKUNGANBANDUNG_19.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahCIAYUMAJAKUNING_20.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahCIAYUMAJAKUNING_21.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSSwastaWilayahSUKAJUR_22.set('fieldImages', {'fid': '', 'RS Strata Madya': '', 'Layanan': '', });
lyr_RSPemerintahWilayahSUKAJUR_23.set('fieldImages', {'fid': '', 'Nama RS': '', 'Layanan': '', });
lyr_PRIANGANTIMUR_1.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_SUKAJUR_2.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_CIAYUMAJAKUNING_3.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_CEKBAN_4.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_BODEBEK_5.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_PURWASUKA_6.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_BATASKABKOTA_7.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_RSSwastaWilayahPRIANGANTIMUR_8.set('fieldLabels', {'fid': 'hidden field', 'RS Kemampuan Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahPrianganTimur_9.set('fieldLabels', {'fid': 'hidden field', 'RS Kemampuan Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahPURWASUKA_10.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahPURWASUKA_11.set('fieldLabels', {'fid': 'hidden field', 'RSUD Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahBODEBEK_12.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahBODEBEK_13.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahBODEBEK_14.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahBODEBEK_15.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahCEKUNGANBANDUNG_16.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahCEKUNGANBANdung_17.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahCEKUNGANBANDUNG_18.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahCEKUNGANBANDUNG_19.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahCIAYUMAJAKUNING_20.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahCIAYUMAJAKUNING_21.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSSwastaWilayahSUKAJUR_22.set('fieldLabels', {'fid': 'hidden field', 'RS Strata Madya': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahSUKAJUR_23.set('fieldLabels', {'fid': 'hidden field', 'Nama RS': 'header label - visible with data', 'Layanan': 'header label - visible with data', });
lyr_RSPemerintahWilayahSUKAJUR_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});