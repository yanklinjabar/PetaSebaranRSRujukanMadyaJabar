var size = 0;
var placement = 'point';

var style_RSSwastaWilayahCIAYUMAJAKUNING_21 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#fafafa";
    var bufferColor = "#004cff";
    var bufferWidth = 9.000000000000002;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("RS Strata Madya") !== null) {
        labelText = String(feature.get("RS Strata Madya"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 9.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(0,76,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
