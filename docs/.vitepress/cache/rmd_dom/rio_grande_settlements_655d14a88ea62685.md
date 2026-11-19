---
title: "Settlement Gazetteer of the Rio Grande Hydrological Unit (HU 13)"
subtitle: "CENTAUR-II: Rio Grande Pueblos, Jornada Mogollon and Conchos Borderlands, 9800BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: rio_grande_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_rio_grande_spatial.png"
hero_caption: "Spatial distribution of 258 catalogued settlements across the three areal divisions of the Rio Grande Hydrological Unit (346,71k km²) from 9800BC to 1600AD."
hero_label: "fig:hero-rio-grande-gaz"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, occupational spans and benchmark population trajectories for the Rio Grande Hydrological Unit (HU 13) from 9800BC to 1600AD, accompanying the regional demographic reconstruction under CENTAUR-II.
Out of 572 documented archaeological and ethnohistoric candidate sites evaluated in the regional source ledger, 258 settlements (248 in New Mexico and 10 in Texas) meet spatial and demographic inclusion criteria, while 314 entries are excluded: 311 consolidated duplicate-alias twins (including Pecos Pueblo merged into Cicuye, Taos Pueblo into Tə̂otho, Acoma Pueblo into Haaku and Picuris Pueblo into P'inwelta) and 3 unquantified non-habitation caves (Bat Cave, Hinds Cave and Sandal Cave).
Catalogued settlements range from early canyon shelters (Bonfire Shelter 9800BC to 900AD, Arenosa Shelter 8800BC to 1300AD and La Cueva 500BC to 1200AD) and Mimbres villages (Galaz 1,06k, Galaz Ruin 850, Swarts Ruin 1,06k) to late pre-contact and early colonial Pueblo IV-V plaza towns led by Cicuye (2,2k), Sapawe (2,1k), Tə̂otho (1,8k), Haaku (1,65k), Posi-ouinge (1,65k), P'inwelta (1,6k), San Marcos (1,55k), Gran Quivira (1,5k), Isleta Pueblo (1,45k), Kuaua (1,45k), San Cristobal (1,45k), Zia Pueblo (1,4k), Ohkay Owingeh (1,35k), Santo Domingo Pueblo (1,35k) and Tonque Pueblo (1,2k), alongside La Junta de los Rios (650) on the Rio Conchos junction.

# Background

Settlement archaeology in HU 13 reflects a prolonged transition from mobile desert foraging to large multi-plaza adobe pueblos, confirmed by Kelly et al. [@kelly2025] radiocarbon trends (N = 2.934, median peak 1112AD) and Pueblo room-block excavations [@adler1996; @cordell2012].
Along the Pecos canyonlands and southern deserts, stratified rockshelters at Bonfire Shelter, Arenosa Shelter and La Cueva preserve Archaic foraging and farming transitions inside the gazetteer, whereas unquantified cave deposits such as Bat Cave, Hinds Cave and Sandal Cave are separated in the exclusion audit [@miller2023; @cordell2012].
Before 1200AD, regional agricultural nucleation centred in Mimbres valley river villages (Galaz, Swarts Ruin and Galaz Ruin), Jornada Mogollon hamlets and eastern Chacoan outliers (Guadalupe Ruin) [@lekson2006; @anyon2017; @crown1991].

Following twelfth- and thirteenth-century droughts, regional populations shifted sharply northward and aggregated into multi-storey adobe and masonry plaza towns along the Upper Rio Grande, Chama, Galisteo, Salinas and Acoma mesas, complemented by sedentary floodplain villages at the Rio Conchos confluence [@ortman2012; @kelley1986].
Many northern and middle valley pueblos survived into the mid-sixteenth century, when Coronado (1540AD to 1542AD) and subsequent Spanish colonial entries encountered dense Tiwa, Tewa, Keres, Towa and Tompiro towns prior to acute epidemic contraction [@vierra1989; @liebmann2016].

# Methodology

## Inclusion Criteria and Schema Discipline

Each of the 572 candidates in the regional source ledger was audited against four requirements: surveyed WGS84 coordinates, dated residential room-block, pit-structure or shelter deposits, spatial non-duplication after centroid reconciliation and curated regional attribution.
Where multi-registry ingestion produced matching-name or centroid twins within a 2 km radius or across archival variants, 311 duplicate records were consolidated under alias rules alongside 3 unquantified non-habitation caves, leaving 258 distinct habitation settlements.
Detailed bibliographic provenance resides in the companion bibliography and source ledger rather than raw site coordinate tables.

## Room-Block and Chronicle Estimation

Peak populations derive from excavated or mapped ground-floor room counts multiplied by regional occupancy rates (0,65 to 0,8 active rooms per phase) and 4,5 persons per household, cross-checked against early Spanish entrada counts by Coronado (1540AD to 1542AD) and Oñate (1598AD) [@kidder1958; @hayes1981; @vierra1989; @brown1999].
For multi-component Pecos canyon shelters and Jornada pithouse clusters, headcounts reflect contemporaneous hearth-group floor areas calibrated against regional radiocarbon spans [@miller2023].

# Testing and Validation

Reconciliation checks between the settlement gazetteer and the regional source ledger pass with zero unaccounted candidates and zero coordinate or schema errors at GMT+0:

1. **Included Settlements**: 258 sites (206 in San Luis Valley and Upper Pueblos, 46 in Middle Rio Grande, Piro-Salinas and Jornada Mogollon and 6 in Pecos Valley, Big Bend and Lower Rio Grande), whose individual peak populations sum to 154,8k (Table \ref{tab:rg-summary}).
2. **Excluded Candidates**: 314 excluded entries logged in the source ledger (311 duplicate-alias consolidations and 3 unquantified non-habitation caves), accounting for all 572 evaluated candidates.

<figure class="crd-table-figure" id="tab:rg-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Pueblos</strong></td><td class="crd-td">206</td><td class="crd-td">130,8k</td><td class="crd-td">Cicuye (2,2k)</td></tr>
<tr><td class="crd-td"><strong>Middle RG-Salinas</strong></td><td class="crd-td">46</td><td class="crd-td">22,8k</td><td class="crd-td">Bonnell Site (1,1k)</td></tr>
<tr><td class="crd-td"><strong>Pecos-Lower RG</strong></td><td class="crd-td">6</td><td class="crd-td">1,2k</td><td class="crd-td">La Junta de los Rios (650)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of the 258 catalogued settlements and peak populations in Rio Grande HU 13.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:rg-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-rio-grande-settlements/fig4_rio_grande_settlements.png" alt="fig:rg-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading peak populations across the 258 catalogued settlements of Rio Grande HU 13.</figcaption>
</figure>

# Results

## Top 45 Pueblo and Borderlands Settlements

Out of 258 catalogued settlements, Table \ref{tab:rg-included} presents the top 45 centres ranked by peak population descending, from Cicuye (2,2k at 1540AD) down to Janss (1,06k at 950AD).
Figure \ref{fig:rg-settlements} shows the rank-size profile across all 258 settlements alongside the leading fifteen centres.
Between 1300AD and 1540AD, Northern and Eastern Pueblo plaza towns expand rapidly: Cicuye (2,2k), Sapawe (2,1k), Tə̂otho (1,8k), Haaku (1,65k), Posi-ouinge (1,65k), P'inwelta (1,6k), San Marcos (1,55k), Gran Quivira (1,5k), Isleta Pueblo (1,45k), Kuaua (1,45k), San Cristobal (1,45k), Zia Pueblo (1,4k), Ohkay Owingeh (1,35k), Santo Domingo Pueblo (1,35k) and Tonque Pueblo (1,2k) anchor the upper and middle valley corridors [@ortman2012; @brown1999; @hayes1981; @vierra1989; @kidder1958].
Further south, La Junta de los Rios maintains 420 to 650 inhabitants across 1200AD to 1600AD through floodplain maize-squash cultivation along the Rio Grande-Conchos junction [@kelley1986], while synchronous settlement totals across the entire 258-site corpus reach 43,09k in 1540AD and 43,37k in 1600AD.

<figure class="crd-table-figure" id="tab:rg-included">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cicuye</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,55 N, 105,69 W</td><td class="crd-td">1225AD to 1600AD</td><td class="crd-td">2,2k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Sapawe</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,3 N, 106,16 W</td><td class="crd-td">500AD to 1600AD</td><td class="crd-td">2,1k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Tə̂otho</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,44 N, 105,55 W</td><td class="crd-td">900AD to 1600AD</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Haaku</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">34,9 N, 107,58 W</td><td class="crd-td">300AD to 1600AD</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Posi-ouinge</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,3 N, 106,06 W</td><td class="crd-td">1400AD to 1480AD</td><td class="crd-td">1,6k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>P'inwelta</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,2 N, 105,71 W</td><td class="crd-td">1200AD to 1600AD</td><td class="crd-td">1,6k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>San Marcos</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,38 N, 106,13 W</td><td class="crd-td">500AD to 1600AD</td><td class="crd-td">1,6k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Gran Quivira</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">34,26 N, 106,09 W</td><td class="crd-td">200AD to 1600AD</td><td class="crd-td">1,5k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Isleta Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">34,91 N, 106,69 W</td><td class="crd-td">1450AD to 1540AD</td><td class="crd-td">1,4k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Kuaua</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,33 N, 106,54 W</td><td class="crd-td">600AD to 1600AD</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>San Cristobal</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,35 N, 105,84 W</td><td class="crd-td">1400AD to 1540AD</td><td class="crd-td">1,4k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Zia Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,5 N, 106,72 W</td><td class="crd-td">1350AD to 1540AD</td><td class="crd-td">1,4k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Ohkay Owingeh</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,05 N, 106,07 W</td><td class="crd-td">1400AD to 1540AD</td><td class="crd-td">1,4k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Santo Domingo Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,51 N, 106,36 W</td><td class="crd-td">1450AD to 1540AD</td><td class="crd-td">1,4k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Tonque Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,38 N, 106,35 W</td><td class="crd-td">1400AD to 1480AD</td><td class="crd-td">1,2k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Piedras Marcadas</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,06 N, 106,57 W</td><td class="crd-td">550AD to 1600AD</td><td class="crd-td">1,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Pueblo Blanco</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,24 N, 105,94 W</td><td class="crd-td">1400AD to 1540AD</td><td class="crd-td">1,1k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Puye Cliff Dwellings</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,98 N, 106,23 W</td><td class="crd-td">1350AD to 1480AD</td><td class="crd-td">1,1k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>San Lazaro</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,37 N, 106,04 W</td><td class="crd-td">1400AD to 1540AD</td><td class="crd-td">1,1k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Cochiti Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,61 N, 106,35 W</td><td class="crd-td">1350AD to 1540AD</td><td class="crd-td">1,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Kwastiyukwa</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,75 N, 106,73 W</td><td class="crd-td">200AD to 1600AD</td><td class="crd-td">1,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Pueblo Galisteo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,39 N, 105,93 W</td><td class="crd-td">1400AD to 1540AD</td><td class="crd-td">1,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>San Felipe Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,44 N, 106,45 W</td><td class="crd-td">1450AD to 1540AD</td><td class="crd-td">1,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Santa Clara Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,97 N, 106,09 W</td><td class="crd-td">1450AD to 1540AD</td><td class="crd-td">1,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Agua Fria School House</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,75 N, 105,98 W</td><td class="crd-td">550AD to 1600AD</td><td class="crd-td">1,1k (1075AD)</td></tr>
<tr><td class="crd-td"><strong>Alfred Herrera</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,61 N, 106,32 W</td><td class="crd-td">600AD to 1600AD</td><td class="crd-td">1,1k (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Arroyo del Tambre</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,65 N, 105,97 W</td><td class="crd-td">500AD to 1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Bonnell Site</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">33,52 N, 105,37 W</td><td class="crd-td">500AD to 1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Buckaroo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">33,03 N, 107,45 W</td><td class="crd-td">200AD to 1600AD</td><td class="crd-td">1,1k (900AD)</td></tr>
<tr><td class="crd-td"><strong>Burnt Mesa</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,83 N, 106,23 W</td><td class="crd-td">500AD to 1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Caja del Rio North</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,77 N, 106,15 W</td><td class="crd-td">500AD to 1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Chupaderos Mesa Village</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,96 N, 106,38 W</td><td class="crd-td">600AD to 1600AD</td><td class="crd-td">1,1k (1025AD)</td></tr>
<tr><td class="crd-td"><strong>Cienega</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,2 N, 108,2 W</td><td class="crd-td">200AD to 1600AD</td><td class="crd-td">1,1k (900AD)</td></tr>
<tr><td class="crd-td"><strong>City Hall Site</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,64 N, 106,01 W</td><td class="crd-td">500AD to 1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Cuyamungue</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,93 N, 106,1 W</td><td class="crd-td">500AD to 1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Disert</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">32,79 N, 107,88 W</td><td class="crd-td">300AD to 1600AD</td><td class="crd-td">1,1k (950AD)</td></tr>
<tr><td class="crd-td"><strong>Fifty Cent house</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,79 N, 106,39 W</td><td class="crd-td">550AD to 1600AD</td><td class="crd-td">1,1k (1075AD)</td></tr>
<tr><td class="crd-td"><strong>Flying Fish Village</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">33,13 N, 107,47 W</td><td class="crd-td">200AD to 1600AD</td><td class="crd-td">1,1k (900AD)</td></tr>
<tr><td class="crd-td"><strong>Galaz</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">32,81 N, 107,89 W</td><td class="crd-td">300AD to 1545AD</td><td class="crd-td">1,1k (922AD)</td></tr>
<tr><td class="crd-td"><strong>Guadalupe</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,58 N, 107,04 W</td><td class="crd-td">300AD to 1600AD</td><td class="crd-td">1,1k (950AD)</td></tr>
<tr><td class="crd-td"><strong>Guaje Mesa Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,04 N, 106,37 W</td><td class="crd-td">550AD to 1600AD</td><td class="crd-td">1,1k (1075AD)</td></tr>
<tr><td class="crd-td"><strong>Henderson</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">33,4 N, 104,77 W</td><td class="crd-td">200AD to 1600AD</td><td class="crd-td">1,1k (900AD)</td></tr>
<tr><td class="crd-td"><strong>Howiri</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,32 N, 106,04 W</td><td class="crd-td">500AD to 1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Hupobi</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,29 N, 106,04 W</td><td class="crd-td">500AD to 1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Janss</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">32,84 N, 107,89 W</td><td class="crd-td">300AD to 1600AD</td><td class="crd-td">1,1k (950AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 settlements in Rio Grande HU 13 ranked by peak population descending, with coordinates, active spans and peak dates.</figcaption>
</figure>

## Excluded Ledger Candidates

Out of 572 evaluated records in the regional source ledger, 314 candidate entries are retained in the audit trail while excluded from settlement point totals (Table \ref{tab:rg-excluded}, capped at the leading 30 rows).
Three-hundred and eleven records represent duplicate-alias consolidations within 2 km of retained settlements (such as Pecos Pueblo merged into Cicuye, Taos Pueblo into Tə̂otho, Acoma Pueblo into Haaku and Picuris Pueblo into P'inwelta), while three represent unquantified non-habitation caves (Bat Cave, Hinds Cave and Sandal Cave) [@brown1999; @adler1996].

<figure class="crd-table-figure" id="tab:rg-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Classification</th><th class="crd-th">Ledger Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Picuris Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'P'inwelta' (Adler and Dick 1999).</td></tr>
<tr><td class="crd-td"><strong>San Marcos</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'San Marcos' (Ramenofsky 2017).</td></tr>
<tr><td class="crd-td"><strong>Taos Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Tə̂otho' (Ortman 2012).</td></tr>
<tr><td class="crd-td"><strong>Gran Quivira</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Gran Quivira' (Hayes 1981).</td></tr>
<tr><td class="crd-td"><strong>Acoma Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Haaku' (Barrett 2002).</td></tr>
<tr><td class="crd-td"><strong>San Cristobal</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'San Cristobal' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Zia Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Zia Pueblo' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Kuaua</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Kuaua' (Dutton 1963).</td></tr>
<tr><td class="crd-td"><strong>Pueblo Blanco</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Pueblo Blanco' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>San Lazaro</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'San Lazaro' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Cochiti Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Cochiti Pueblo' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Abo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Abo' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Arroyo Hondo Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Arroyo Hondo Pueblo' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Quarai</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Quarai' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Paa-ko</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Pa'ako' (Lycett 2002).</td></tr>
<tr><td class="crd-td"><strong>Paa-ko</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Pa'ako' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Montezuma Alta</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Montezuma Alta' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Guadalupe Ruin</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Guadalupe Ruin' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Arenosa Shelter</strong></td><td class="crd-td">Texas</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Arenosa Shelter' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Bonfire Shelter</strong></td><td class="crd-td">Texas</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Bonfire Shelter' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Hinds Cave</strong></td><td class="crd-td">Texas</td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Excluded non-habitation archaeological feature (unquantified non-habitation feature) from permanent habitation gazetteer (Shafer and Bryant 1977; Black 2005 (41VV456)).</td></tr>
<tr><td class="crd-td"><strong>Pecos Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Cicuye' (Kessell 1979).</td></tr>
<tr><td class="crd-td"><strong>Sapawe</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Sapawe' (Ortman 2012).</td></tr>
<tr><td class="crd-td"><strong>Posi-ouinge</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Posi-ouinge' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Isleta Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Isleta Pueblo' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Ohkay Owingeh</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Ohkay Owingeh' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Santo Domingo Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Santo Domingo Pueblo' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Tonque Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Tonque Pueblo' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Piedras Marcadas</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Piedras Marcadas' (Schmader 2011).</td></tr>
<tr><td class="crd-td"><strong>Piedras Marcadas</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Piedras Marcadas' (CENTAUR Monument Inventory).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Representative 30 of 314 excluded candidate records documented in the Rio Grande HU 13 source ledger.</figcaption>
</figure>

# Limitations

Three limitations affect site-level resolution in HU 13.
First, numerous small Pueblo IV satellite hamlets and seasonal field houses across the Galisteo Basin, Jemez Plateau and Piro province share standardised regional phase multipliers (1,06k ceiling across minor multi-component complexes) and remain sensitive to contemporaneous room-occupancy ratios [@adler1996; @liebmann2016].
Second, Mexican-side archaeological records along the Rio Conchos valley remain sparser than New Mexico site registries, leaving La Junta de los Rios (650) to represent the Presidio-Ojinaga confluence centre rather than every dispersed *rancheria* downstream [@kelley1986].
Third, pre-contact mobile Athabascan and Pecos-plains hunting camps outside canyon rockshelters lack permanent masonry footprints and are captured through the sub-regional rural kriging surface rather than individual site entries.

# Sources

<div id="refs"></div>
