ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:31982").setExtent([66533.000514, 6991727.389231, 862116.059137, 7583453.564351]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_PR_Municipios_2020_1 = new ol.format.GeoJSON();
var features_PR_Municipios_2020_1 = format_PR_Municipios_2020_1.readFeatures(json_PR_Municipios_2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_PR_Municipios_2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PR_Municipios_2020_1.addFeatures(features_PR_Municipios_2020_1);
var lyr_PR_Municipios_2020_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PR_Municipios_2020_1, 
                style: style_PR_Municipios_2020_1,
                interactive: true,
                title: '<img src="styles/legend/PR_Municipios_2020_1.png" /> PR_Municipios_2020'
            });
var lyr_DensidadedeSinistrospor20km_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densidade de Sinistros por 20km",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DensidadedeSinistrospor20km_2.png",
    attributions: ' ',
                                projection: 'EPSG:31982',
                                alwaysInRange: true,
                                imageExtent: [120010.810441, 7059800.806137, 765310.810441, 7459800.806137]
                            })
                        });
var format_Sinistroscomciclistas_3 = new ol.format.GeoJSON();
var features_Sinistroscomciclistas_3 = format_Sinistroscomciclistas_3.readFeatures(json_Sinistroscomciclistas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Sinistroscomciclistas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sinistroscomciclistas_3.addFeatures(features_Sinistroscomciclistas_3);
var lyr_Sinistroscomciclistas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sinistroscomciclistas_3, 
                style: style_Sinistroscomciclistas_3,
                interactive: true,
                title: '<img src="styles/legend/Sinistroscomciclistas_3.png" /> Sinistros com ciclistas'
            });
var format_EstadosBrasil_4 = new ol.format.GeoJSON();
var jsonSource_EstadosBrasil_4 = new ol.source.Vector({
    attributions: ' ',
    format: format_EstadosBrasil_4
});var lyr_EstadosBrasil_4 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_EstadosBrasil_4, 
    style: style_EstadosBrasil_4,
    interactive: true,
    title: "Estados Brasil"
});

function getEstadosBrasil_4Json(geojson) {
    var features_EstadosBrasil_4 = format_EstadosBrasil_4.readFeatures(geojson);
    jsonSource_EstadosBrasil_4.addFeatures(features_EstadosBrasil_4);
}
var format_Rodovias_5 = new ol.format.GeoJSON();
var features_Rodovias_5 = format_Rodovias_5.readFeatures(json_Rodovias_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Rodovias_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rodovias_5.addFeatures(features_Rodovias_5);
var lyr_Rodovias_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rodovias_5, 
                style: style_Rodovias_5,
                interactive: true,
                title: '<img src="styles/legend/Rodovias_5.png" /> Rodovias '
            });
var format_RodoviasUrbanas_6 = new ol.format.GeoJSON();
var features_RodoviasUrbanas_6 = format_RodoviasUrbanas_6.readFeatures(json_RodoviasUrbanas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RodoviasUrbanas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasUrbanas_6.addFeatures(features_RodoviasUrbanas_6);
var lyr_RodoviasUrbanas_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RodoviasUrbanas_6, 
                style: style_RodoviasUrbanas_6,
                interactive: true,
                title: '<img src="styles/legend/RodoviasUrbanas_6.png" /> Rodovias Urbanas'
            });
var format_PrincipaisCidades_7 = new ol.format.GeoJSON();
var features_PrincipaisCidades_7 = format_PrincipaisCidades_7.readFeatures(json_PrincipaisCidades_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_PrincipaisCidades_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrincipaisCidades_7.addFeatures(features_PrincipaisCidades_7);
var lyr_PrincipaisCidades_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrincipaisCidades_7, 
                style: style_PrincipaisCidades_7,
                interactive: true,
                title: '<img src="styles/legend/PrincipaisCidades_7.png" /> Principais Cidades'
            });
var format_Sinistroscomciclistas_8 = new ol.format.GeoJSON();
var features_Sinistroscomciclistas_8 = format_Sinistroscomciclistas_8.readFeatures(json_Sinistroscomciclistas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Sinistroscomciclistas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sinistroscomciclistas_8.addFeatures(features_Sinistroscomciclistas_8);
var lyr_Sinistroscomciclistas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sinistroscomciclistas_8, 
                style: style_Sinistroscomciclistas_8,
                interactive: true,
                title: '<img src="styles/legend/Sinistroscomciclistas_8.png" /> Sinistros com ciclistas'
            });
var format_reaUrbana_9 = new ol.format.GeoJSON();
var features_reaUrbana_9 = format_reaUrbana_9.readFeatures(json_reaUrbana_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reaUrbana_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaUrbana_9.addFeatures(features_reaUrbana_9);
var lyr_reaUrbana_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaUrbana_9, 
                style: style_reaUrbana_9,
                interactive: true,
                title: '<img src="styles/legend/reaUrbana_9.png" /> Área Urbana'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_PR_Municipios_2020_1.setVisible(true);lyr_DensidadedeSinistrospor20km_2.setVisible(true);lyr_Sinistroscomciclistas_3.setVisible(true);lyr_EstadosBrasil_4.setVisible(true);lyr_Rodovias_5.setVisible(true);lyr_RodoviasUrbanas_6.setVisible(true);lyr_PrincipaisCidades_7.setVisible(true);lyr_Sinistroscomciclistas_8.setVisible(true);lyr_reaUrbana_9.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_PR_Municipios_2020_1,lyr_DensidadedeSinistrospor20km_2,lyr_Sinistroscomciclistas_3,lyr_EstadosBrasil_4,lyr_Rodovias_5,lyr_RodoviasUrbanas_6,lyr_PrincipaisCidades_7,lyr_Sinistroscomciclistas_8,lyr_reaUrbana_9];
lyr_PR_Municipios_2020_1.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Sinistroscomciclistas_3.set('fieldAliases', {'id': 'id', 'pesid': 'pesid', 'data_inver': 'data_inver', 'dia_semana': 'dia_semana', 'horario': 'horario', 'uf': 'uf', 'br': 'br', 'km': 'km', 'municipio': 'municipio', 'causa_prin': 'causa_prin', 'causa_acid': 'causa_acid', 'ordem_tipo': 'ordem_tipo', 'tipo_acide': 'tipo_acide', 'classifica': 'classifica', 'fase_dia': 'fase_dia', 'sentido_vi': 'sentido_vi', 'condicao_m': 'condicao_m', 'tipo_pista': 'tipo_pista', 'tracado_vi': 'tracado_vi', 'uso_solo': 'uso_solo', 'id_veiculo': 'id_veiculo', 'tipo_veicu': 'tipo_veicu', 'marca': 'marca', 'ano_fabric': 'ano_fabric', 'tipo_envol': 'tipo_envol', 'estado_fis': 'estado_fis', 'idade': 'idade', 'sexo': 'sexo', 'ilesos': 'ilesos', 'feridos_le': 'feridos_le', 'feridos_gr': 'feridos_gr', 'mortos': 'mortos', 'latitude': 'latitude', 'longitude': 'longitude', 'regional': 'regional', 'delegacia': 'delegacia', 'uop': 'uop', });
lyr_EstadosBrasil_4.set('fieldAliases', {'nomuf': 'nomuf', 'uf': 'uf', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Rodovias_5.set('fieldAliases', {'id_snv': 'id_snv', 'Codigo_BR': 'Codigo_BR', 'Unidade_Fe': 'Unidade_Fe', 'Sigla_Tipo': 'Sigla_Tipo', 'Nome_Tipo_': 'Nome_Tipo_', 'Codigo_SNV': 'Codigo_SNV', 'Coincidenc': 'Coincidenc', 'Local_Inic': 'Local_Inic', 'Local_Fim': 'Local_Fim', 'Quilometra': 'Quilometra', 'Quilometr0': 'Quilometr0', 'Extensao': 'Extensao', 'Superficie': 'Superficie', 'Obra': 'Obra', 'Unidade_Lo': 'Unidade_Lo', 'Administra': 'Administra', 'Ato_Legal': 'Ato_Legal', 'Estadual_C': 'Estadual_C', 'Superfici0': 'Superfici0', 'Versao_SNV': 'Versao_SNV', 'dt_ini': 'dt_ini', 'dt_fim': 'dt_fim', 'dist': 'dist', });
lyr_RodoviasUrbanas_6.set('fieldAliases', {'id_snv': 'id_snv', 'Codigo_BR': 'Codigo_BR', 'Unidade_Fe': 'Unidade_Fe', 'Sigla_Tipo': 'Sigla_Tipo', 'Nome_Tipo_': 'Nome_Tipo_', 'Codigo_SNV': 'Codigo_SNV', 'Coincidenc': 'Coincidenc', 'Local_Inic': 'Local_Inic', 'Local_Fim': 'Local_Fim', 'Quilometra': 'Quilometra', 'Quilometr0': 'Quilometr0', 'Extensao': 'Extensao', 'Superficie': 'Superficie', 'Obra': 'Obra', 'Unidade_Lo': 'Unidade_Lo', 'Administra': 'Administra', 'Ato_Legal': 'Ato_Legal', 'Estadual_C': 'Estadual_C', 'Superfici0': 'Superfici0', 'Versao_SNV': 'Versao_SNV', 'dt_ini': 'dt_ini', 'dt_fim': 'dt_fim', 'CD_SETOR': 'CD_SETOR', 'CD_SIT': 'CD_SIT', 'NM_SIT': 'NM_SIT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'dist': 'dist', });
lyr_PrincipaisCidades_7.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Sinistroscomciclistas_8.set('fieldAliases', {'id': 'id', 'pesid': 'pesid', 'data_inver': 'data_inver', 'dia_semana': 'dia_semana', 'horario': 'horario', 'uf': 'uf', 'br': 'br', 'km': 'km', 'municipio': 'municipio', 'causa_prin': 'causa_prin', 'causa_acid': 'causa_acid', 'ordem_tipo': 'ordem_tipo', 'tipo_acide': 'tipo_acide', 'classifica': 'classifica', 'fase_dia': 'fase_dia', 'sentido_vi': 'sentido_vi', 'condicao_m': 'condicao_m', 'tipo_pista': 'tipo_pista', 'tracado_vi': 'tracado_vi', 'uso_solo': 'uso_solo', 'id_veiculo': 'id_veiculo', 'tipo_veicu': 'tipo_veicu', 'marca': 'marca', 'ano_fabric': 'ano_fabric', 'tipo_envol': 'tipo_envol', 'estado_fis': 'estado_fis', 'idade': 'idade', 'sexo': 'sexo', 'ilesos': 'ilesos', 'feridos_le': 'feridos_le', 'feridos_gr': 'feridos_gr', 'mortos': 'mortos', 'latitude': 'latitude', 'longitude': 'longitude', 'regional': 'regional', 'delegacia': 'delegacia', 'uop': 'uop', });
lyr_reaUrbana_9.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'CD_SIT': 'CD_SIT', 'NM_SIT': 'NM_SIT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', });
lyr_PR_Municipios_2020_1.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Sinistroscomciclistas_3.set('fieldImages', {'id': '', 'pesid': '', 'data_inver': '', 'dia_semana': '', 'horario': '', 'uf': '', 'br': '', 'km': '', 'municipio': '', 'causa_prin': '', 'causa_acid': '', 'ordem_tipo': '', 'tipo_acide': '', 'classifica': '', 'fase_dia': '', 'sentido_vi': '', 'condicao_m': '', 'tipo_pista': '', 'tracado_vi': '', 'uso_solo': '', 'id_veiculo': '', 'tipo_veicu': '', 'marca': '', 'ano_fabric': '', 'tipo_envol': '', 'estado_fis': '', 'idade': '', 'sexo': '', 'ilesos': '', 'feridos_le': '', 'feridos_gr': '', 'mortos': '', 'latitude': '', 'longitude': '', 'regional': '', 'delegacia': '', 'uop': '', });
lyr_EstadosBrasil_4.set('fieldImages', {'nomuf': 'TextEdit', 'uf': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Rodovias_5.set('fieldImages', {'id_snv': 'Range', 'Codigo_BR': 'TextEdit', 'Unidade_Fe': 'TextEdit', 'Sigla_Tipo': 'TextEdit', 'Nome_Tipo_': 'TextEdit', 'Codigo_SNV': 'TextEdit', 'Coincidenc': 'TextEdit', 'Local_Inic': 'TextEdit', 'Local_Fim': 'TextEdit', 'Quilometra': 'TextEdit', 'Quilometr0': 'TextEdit', 'Extensao': 'TextEdit', 'Superficie': 'TextEdit', 'Obra': 'TextEdit', 'Unidade_Lo': 'TextEdit', 'Administra': 'TextEdit', 'Ato_Legal': 'TextEdit', 'Estadual_C': 'TextEdit', 'Superfici0': 'TextEdit', 'Versao_SNV': 'TextEdit', 'dt_ini': 'DateTime', 'dt_fim': 'DateTime', 'dist': 'TextEdit', });
lyr_RodoviasUrbanas_6.set('fieldImages', {'id_snv': '', 'Codigo_BR': '', 'Unidade_Fe': '', 'Sigla_Tipo': '', 'Nome_Tipo_': '', 'Codigo_SNV': '', 'Coincidenc': '', 'Local_Inic': '', 'Local_Fim': '', 'Quilometra': '', 'Quilometr0': '', 'Extensao': '', 'Superficie': '', 'Obra': '', 'Unidade_Lo': '', 'Administra': '', 'Ato_Legal': '', 'Estadual_C': '', 'Superfici0': '', 'Versao_SNV': '', 'dt_ini': '', 'dt_fim': '', 'CD_SETOR': '', 'CD_SIT': '', 'NM_SIT': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_DIST': '', 'NM_DIST': '', 'CD_SUBDIST': '', 'NM_SUBDIST': '', 'dist': '', });
lyr_PrincipaisCidades_7.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Sinistroscomciclistas_8.set('fieldImages', {'id': 'TextEdit', 'pesid': 'TextEdit', 'data_inver': 'TextEdit', 'dia_semana': 'TextEdit', 'horario': 'TextEdit', 'uf': 'TextEdit', 'br': 'TextEdit', 'km': 'TextEdit', 'municipio': 'TextEdit', 'causa_prin': 'TextEdit', 'causa_acid': 'TextEdit', 'ordem_tipo': 'TextEdit', 'tipo_acide': 'TextEdit', 'classifica': 'TextEdit', 'fase_dia': 'TextEdit', 'sentido_vi': 'TextEdit', 'condicao_m': 'TextEdit', 'tipo_pista': 'TextEdit', 'tracado_vi': 'TextEdit', 'uso_solo': 'TextEdit', 'id_veiculo': 'TextEdit', 'tipo_veicu': 'TextEdit', 'marca': 'TextEdit', 'ano_fabric': 'TextEdit', 'tipo_envol': 'TextEdit', 'estado_fis': 'TextEdit', 'idade': 'TextEdit', 'sexo': 'TextEdit', 'ilesos': 'TextEdit', 'feridos_le': 'TextEdit', 'feridos_gr': 'TextEdit', 'mortos': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'regional': 'TextEdit', 'delegacia': 'TextEdit', 'uop': 'TextEdit', });
lyr_reaUrbana_9.set('fieldImages', {'CD_SETOR': 'TextEdit', 'CD_SIT': 'TextEdit', 'NM_SIT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', });
lyr_PR_Municipios_2020_1.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_Sinistroscomciclistas_3.set('fieldLabels', {'id': 'no label', 'pesid': 'no label', 'data_inver': 'no label', 'dia_semana': 'no label', 'horario': 'no label', 'uf': 'no label', 'br': 'no label', 'km': 'no label', 'municipio': 'no label', 'causa_prin': 'no label', 'causa_acid': 'no label', 'ordem_tipo': 'no label', 'tipo_acide': 'no label', 'classifica': 'no label', 'fase_dia': 'no label', 'sentido_vi': 'no label', 'condicao_m': 'no label', 'tipo_pista': 'no label', 'tracado_vi': 'no label', 'uso_solo': 'no label', 'id_veiculo': 'no label', 'tipo_veicu': 'no label', 'marca': 'no label', 'ano_fabric': 'no label', 'tipo_envol': 'no label', 'estado_fis': 'no label', 'idade': 'no label', 'sexo': 'no label', 'ilesos': 'no label', 'feridos_le': 'no label', 'feridos_gr': 'no label', 'mortos': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'regional': 'no label', 'delegacia': 'no label', 'uop': 'no label', });
lyr_EstadosBrasil_4.set('fieldLabels', {'nomuf': 'no label', 'uf': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Rodovias_5.set('fieldLabels', {'id_snv': 'no label', 'Codigo_BR': 'no label', 'Unidade_Fe': 'no label', 'Sigla_Tipo': 'no label', 'Nome_Tipo_': 'no label', 'Codigo_SNV': 'no label', 'Coincidenc': 'no label', 'Local_Inic': 'no label', 'Local_Fim': 'no label', 'Quilometra': 'no label', 'Quilometr0': 'no label', 'Extensao': 'no label', 'Superficie': 'no label', 'Obra': 'no label', 'Unidade_Lo': 'no label', 'Administra': 'no label', 'Ato_Legal': 'no label', 'Estadual_C': 'no label', 'Superfici0': 'no label', 'Versao_SNV': 'no label', 'dt_ini': 'no label', 'dt_fim': 'no label', 'dist': 'no label', });
lyr_RodoviasUrbanas_6.set('fieldLabels', {'id_snv': 'no label', 'Codigo_BR': 'no label', 'Unidade_Fe': 'no label', 'Sigla_Tipo': 'no label', 'Nome_Tipo_': 'no label', 'Codigo_SNV': 'no label', 'Coincidenc': 'no label', 'Local_Inic': 'no label', 'Local_Fim': 'no label', 'Quilometra': 'no label', 'Quilometr0': 'no label', 'Extensao': 'no label', 'Superficie': 'no label', 'Obra': 'no label', 'Unidade_Lo': 'no label', 'Administra': 'no label', 'Ato_Legal': 'no label', 'Estadual_C': 'no label', 'Superfici0': 'no label', 'Versao_SNV': 'no label', 'dt_ini': 'no label', 'dt_fim': 'no label', 'CD_SETOR': 'no label', 'CD_SIT': 'no label', 'NM_SIT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_DIST': 'no label', 'NM_DIST': 'no label', 'CD_SUBDIST': 'no label', 'NM_SUBDIST': 'no label', 'dist': 'no label', });
lyr_PrincipaisCidades_7.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_Sinistroscomciclistas_8.set('fieldLabels', {'id': 'no label', 'pesid': 'no label', 'data_inver': 'no label', 'dia_semana': 'no label', 'horario': 'no label', 'uf': 'no label', 'br': 'no label', 'km': 'no label', 'municipio': 'no label', 'causa_prin': 'no label', 'causa_acid': 'no label', 'ordem_tipo': 'no label', 'tipo_acide': 'no label', 'classifica': 'no label', 'fase_dia': 'no label', 'sentido_vi': 'no label', 'condicao_m': 'no label', 'tipo_pista': 'no label', 'tracado_vi': 'no label', 'uso_solo': 'no label', 'id_veiculo': 'no label', 'tipo_veicu': 'no label', 'marca': 'no label', 'ano_fabric': 'no label', 'tipo_envol': 'no label', 'estado_fis': 'no label', 'idade': 'no label', 'sexo': 'no label', 'ilesos': 'no label', 'feridos_le': 'no label', 'feridos_gr': 'no label', 'mortos': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'regional': 'no label', 'delegacia': 'no label', 'uop': 'no label', });
lyr_reaUrbana_9.set('fieldLabels', {'CD_SETOR': 'no label', 'CD_SIT': 'no label', 'NM_SIT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_DIST': 'no label', 'NM_DIST': 'no label', 'CD_SUBDIST': 'no label', 'NM_SUBDIST': 'no label', });
lyr_reaUrbana_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});