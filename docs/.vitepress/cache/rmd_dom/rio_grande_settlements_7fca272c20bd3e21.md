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
hero_caption: "Spatial distribution of 261 catalogued settlements across the three areal divisions of the Rio Grande Hydrological Unit (346,71k km²) from 9800BC to 1600AD."
hero_label: "fig:hero-rio-grande-gaz"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, occupational spans and benchmark population trajectories for the Rio Grande Hydrological Unit (HU 13) from `9800BC` to `1600AD`, accompanying the regional demographic reconstruction under CENTAUR-II.
Out of `271` documented archaeological and ethnohistoric candidate sites evaluated in `rio_grande_source_ledger.json5`, `261` settlements (`250` in New Mexico and `11` in Texas) meet spatial and demographic inclusion criteria in `rio_grande_settlements.json`, while `10` entries (`Astialakwa`, `Bonnell Site`, `Montezuma Alta`, `Paa-ko`, `Pesedeuinge`, `Piedras Marcadas`, `Pueblo Largo`, `Pueblo Pardo`, `Swarts Ruin` and a duplicate alias of `Picuris Pueblo`) are excluded as consolidated duplicate-alias twins.
Catalogued sites range from early canyon rockshelters (`Bonfire Shelter` `9800BC-900AD`, `Arenosa Shelter` `8800BC-1300AD` and `Hinds Cave` `8200BC-800AD`) and Mimbres villages (`Galaz` `1,06k`, `Galaz Ruin` `850`) to late precontact and early colonial Pueblo IV-V plaza towns led by `Pecos Pueblo` (`2,2k`), `Sapawe` (`2,1k`), `Taos Pueblo` (`1,8k`), `Acoma Pueblo` (`1,65k`), `Posi-ouinge` (`1,65k`), `Picuris Pueblo` (`1,6k`), `San Marcos` (`1,55k`), `Gran Quivira` (`1,5k`), `Isleta Pueblo` (`1,45k`), `Kuaua` (`1,45k`), `San Cristobal` (`1,45k`) and `Zia Pueblo` (`1,4k`), alongside `La Junta de los Rios` (`650`) on the Rio Conchos junction.

# Background

Settlement archaeology in HU 13 reflects a prolonged transition from mobile desert foraging to large multi-plaza adobe pueblos, confirmed by Kelly et al. [@kelly2025] radiocarbon trends (`N = 2.934`, median peak `1112AD`) and Pueblo room-block excavations [@adler1996; @cordell2012].
Along the Pecos canyonlands and Tularosa-Estancia caves, deeply stratified rockshelters (`Bonfire Shelter`, `Arenosa Shelter`, `Hinds Cave`, `Bat Cave` and `Sandal Cave`) preserve Archaic bison-hunting and early maize-foraging sequences [@miller2023; @cordell2012].
Before `1200AD`, regional agricultural nucleation centred in Mimbres valley river villages (`Galaz` and `Galaz Ruin`), Jornada Mogollon hamlets and eastern Chacoan outliers (`Guadalupe`) [@lekson2006; @anyon2017; @crown1991].

Following twelfth- and thirteenth-century droughts, regional populations shifted sharply northward and aggregated into multi-storey adobe and masonry plaza towns along the Upper Rio Grande, Chama, Galisteo, Salinas and Acoma mesas, complemented by sedentary floodplain villages at the Rio Conchos confluence [@ortman2012; @kelley1986].
Many northern and middle valley pueblos survived into the mid-sixteenth century, when Coronado (`1540-1542AD`) and subsequent Spanish colonial entries encountered dense Tiwa, Tewa, Keres, Towa and Tompiro towns prior to acute epidemic contraction [@vierra1989; @liebmann2016].

# Methodology

## Inclusion Criteria and Schema Discipline

Each of the `271` candidates in `rio_grande_source_ledger.json5` was audited against four requirements: surveyed WGS84 coordinates, dated residential room-block, pit-structure or shelter deposits, spatial non-duplication after centroid reconciliation and canonical `["CENTAUR"]` attribution in `rio_grande_settlements.json`.
Where multi-registry ingestion produced matching-name or centroid twins `15,48-22,65 km` apart or within a `2 km` radius, duplicate records were consolidated in the source ledger under `duplicate_alias`, leaving `261` distinct settlements.
Detailed bibliographic provenance resides in `rio_grande_settlements.bib` and the ledger rather than raw settlement records.

## Room-Block and Chronicle Estimation

Peak populations derive from excavated or mapped ground-floor room counts multiplied by regional occupancy rates (`0,65-0,80` active rooms per phase) and `4,5` persons per household, cross-checked against early Spanish entrada counts by Coronado (`1540-1542AD`) and Oñate (`1598AD`) [@kidder1958; @hayes1981; @vierra1989; @brown1999].
For multi-component Pecos canyon shelters and Jornada pithouse clusters, headcounts reflect contemporaneous hearth-group floor areas calibrated against regional radiocarbon spans [@miller2023].

# Testing and Validation

Exhaustiveness checks between `rio_grande_settlements.json` and `rio_grande_source_ledger.json5` passed with `0` unaccounted candidates and `0` coordinate or schema errors at `GMT+0`:

1. **Included Settlements**: `261` sites (`139` in San Luis Valley and Upper Pueblos, `118` in Middle Rio Grande, Piro-Salinas and Jornada Mogollon and `4` in Pecos Valley, Big Bend and Lower Rio Grande), whose individual peak populations sum to `154,9k` (Table \ref{tab:rg-summary}).
2. **Excluded Candidates**: `10` consolidated duplicate-alias entries logged in `rio_grande_source_ledger.json5` (`271` candidates total).

<figure class="crd-table-figure" id="tab:rg-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Pueblos</strong></td><td class="crd-td">139</td><td class="crd-td">100,9k</td><td class="crd-td">Cicuye (2,2k)</td></tr>
<tr><td class="crd-td"><strong>Middle RG-Salinas</strong></td><td class="crd-td">118</td><td class="crd-td">53,2k</td><td class="crd-td">Haaku (1,6k)</td></tr>
<tr><td class="crd-td"><strong>Pecos-Lower RG</strong></td><td class="crd-td">4</td><td class="crd-td">845</td><td class="crd-td">La Junta de los Rios (650)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of the 261 catalogued settlements and peak populations in Rio Grande HU 13.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:rg-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-rio-grande-settlements/fig4_rio_grande_settlements.png" alt="fig:rg-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading peak populations across the 261 catalogued settlements of Rio Grande HU 13.</figcaption>
</figure>

# Results

## Top 45 Pueblo and Borderlands Settlements

Out of `261` catalogued settlements in `rio_grande_settlements.json`, Table \ref{tab:rg-included} presents the top `45` centres ranked by peak population descending, from `Pecos Pueblo` (`2,2k` at `1540AD`) down to `Janss` (`1,06k` at `950AD`).
Figure \ref{fig:rg-settlements} shows the full rank-size profile across all `261` settlements alongside the leading `12` sites.
Between `1300AD` and `1540AD`, Northern and Eastern Pueblo plaza towns expand rapidly: `Pecos Pueblo` (`2,2k`), `Sapawe` (`2,1k`), `Taos Pueblo` (`1,8k`), `Acoma Pueblo` (`1,65k`), `Posi-ouinge` (`1,65k`), `Picuris Pueblo` (`1,6k`), `San Marcos` (`1,55k`), `Gran Quivira` (`1,5k`), `Isleta Pueblo` (`1,45k`), `Kuaua` (`1,45k`), `San Cristobal` (`1,45k`) and `Zia Pueblo` (`1,4k`) anchor the upper and middle valley corridors [@ortman2012; @brown1999; @hayes1981; @vierra1989; @kidder1958].
Further south, `La Junta de los Rios` maintains `420-650` inhabitants across `1200AD-1600AD` through floodplain maize-squash cultivation along the Rio Grande-Conchos junction [@kelley1986], while synchronous settlement totals across the entire `261`-site corpus reach `43,09k` in `1540AD` and `43,37k` in `1600AD`.

<figure class="crd-table-figure" id="tab:rg-included">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cicuye</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,55 N, 105,69 W</td><td class="crd-td">1225AD-1600AD</td><td class="crd-td">2,2k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Sapawe</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,3 N, 106,16 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">2,1k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Tə̂otho</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,44 N, 105,55 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Haaku</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">34,9 N, 107,58 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Posi-ouinge</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,3 N, 106,06 W</td><td class="crd-td">1400AD-1480AD</td><td class="crd-td">1,6k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>P'inwelta</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,2 N, 105,71 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1,6k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>San Marcos</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,38 N, 106,13 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1,6k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Gran Quivira</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">34,26 N, 106,09 W</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,5k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Kuaua</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,33 N, 106,54 W</td><td class="crd-td">600AD-1600AD</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>San Cristobal</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,35 N, 105,84 W</td><td class="crd-td">1400AD-1540AD</td><td class="crd-td">1,4k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Shiewhibak</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">34,91 N, 106,69 W</td><td class="crd-td">1450AD-1540AD</td><td class="crd-td">1,4k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Zia Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,5 N, 106,72 W</td><td class="crd-td">1350AD-1540AD</td><td class="crd-td">1,4k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Kewa</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,51 N, 106,36 W</td><td class="crd-td">1450AD-1540AD</td><td class="crd-td">1,4k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Ohkay Owingeh</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,05 N, 106,07 W</td><td class="crd-td">1400AD-1540AD</td><td class="crd-td">1,4k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Tonque Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,38 N, 106,35 W</td><td class="crd-td">1400AD-1480AD</td><td class="crd-td">1,2k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Piedras Marcadas</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">35,06 N, 106,57 W</td><td class="crd-td">550AD-1600AD</td><td class="crd-td">1,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Pueblo Blanco</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,24 N, 105,94 W</td><td class="crd-td">1400AD-1540AD</td><td class="crd-td">1,1k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Puye Cliff Dwellings</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,98 N, 106,23 W</td><td class="crd-td">1350AD-1480AD</td><td class="crd-td">1,1k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>San Lazaro</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,37 N, 106,04 W</td><td class="crd-td">1400AD-1540AD</td><td class="crd-td">1,1k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Katishtya</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,44 N, 106,45 W</td><td class="crd-td">1450AD-1540AD</td><td class="crd-td">1,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Kha'p'o Owingeh</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,97 N, 106,09 W</td><td class="crd-td">1450AD-1540AD</td><td class="crd-td">1,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Kotyiti</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,61 N, 106,35 W</td><td class="crd-td">1350AD-1540AD</td><td class="crd-td">1,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Kwastiyukwa</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,75 N, 106,73 W</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Pueblo Galisteo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,39 N, 105,93 W</td><td class="crd-td">1400AD-1540AD</td><td class="crd-td">1,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Agua Fria School House</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,75 N, 105,98 W</td><td class="crd-td">550AD-1600AD</td><td class="crd-td">1,1k (1075AD)</td></tr>
<tr><td class="crd-td"><strong>Alfred Herrera</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,61 N, 106,32 W</td><td class="crd-td">600AD-1600AD</td><td class="crd-td">1,1k (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Arroyo del Tambre</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,65 N, 105,97 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Bonnell Site</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">33,52 N, 105,37 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Buckaroo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">33,03 N, 107,45 W</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k (900AD)</td></tr>
<tr><td class="crd-td"><strong>Burnt Mesa</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,83 N, 106,23 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Caja del Rio North</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,77 N, 106,15 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Chupaderos Mesa Village</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,96 N, 106,38 W</td><td class="crd-td">600AD-1600AD</td><td class="crd-td">1,1k (1025AD)</td></tr>
<tr><td class="crd-td"><strong>Cienega</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,2 N, 108,2 W</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k (900AD)</td></tr>
<tr><td class="crd-td"><strong>City Hall Site</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,64 N, 106,01 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Cuyamungue</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,93 N, 106,1 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Disert</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">32,79 N, 107,88 W</td><td class="crd-td">300AD-1600AD</td><td class="crd-td">1,1k (950AD)</td></tr>
<tr><td class="crd-td"><strong>Fifty Cent house</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,79 N, 106,39 W</td><td class="crd-td">550AD-1600AD</td><td class="crd-td">1,1k (1075AD)</td></tr>
<tr><td class="crd-td"><strong>Flying Fish Village</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">33,13 N, 107,47 W</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k (900AD)</td></tr>
<tr><td class="crd-td"><strong>Galaz</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">32,81 N, 107,89 W</td><td class="crd-td">300AD-1545AD</td><td class="crd-td">1,1k (922AD)</td></tr>
<tr><td class="crd-td"><strong>Guadalupe</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">35,58 N, 107,04 W</td><td class="crd-td">300AD-1600AD</td><td class="crd-td">1,1k (950AD)</td></tr>
<tr><td class="crd-td"><strong>Guaje Mesa Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,04 N, 106,37 W</td><td class="crd-td">550AD-1600AD</td><td class="crd-td">1,1k (1075AD)</td></tr>
<tr><td class="crd-td"><strong>Henderson</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">33,4 N, 104,77 W</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k (900AD)</td></tr>
<tr><td class="crd-td"><strong>Howiri</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,32 N, 106,04 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Hupobi</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Upper Pueblos</td><td class="crd-td">36,29 N, 106,04 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1,1k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Janss</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">Middle RG-Salinas</td><td class="crd-td">32,84 N, 107,89 W</td><td class="crd-td">300AD-1600AD</td><td class="crd-td">1,1k (950AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 settlements in Rio Grande HU 13 ranked by peak population descending, with coordinates, active spans and peak dates.</figcaption>
</figure>

## Excluded Ledger Candidates

Ten candidate entries in `rio_grande_source_ledger.json5` are retained in the audit trail but excluded from settlement point totals under `duplicate_alias` consolidation (Table \ref{tab:rg-excluded}).
Nine entries represent matching-name or centroid twins located `15,48-22,65 km` from canonical Pueblo or Mogollon settlements (`Astialakwa`, `Bonnell Site`, `Montezuma Alta`, `Paa-ko`, `Pesedeuinge`, `Piedras Marcadas`, `Pueblo Largo`, `Pueblo Pardo` and `Swarts Ruin`), while the tenth merges a `2 km` duplicate alias into canonical `Picuris Pueblo` [@brown1999; @adler1996].

<figure class="crd-table-figure" id="tab:rg-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Classification</th><th class="crd-th">Ledger Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Astialakwa</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 16,5 km matching-name/HYDE-centroid twin into canonical Astialakwa-New Mexico.</td></tr>
<tr><td class="crd-td"><strong>Bonnell Site</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 22,65 km matching-name/HYDE-centroid twin into canonical Bonnell Site-New Mexico.</td></tr>
<tr><td class="crd-td"><strong>Montezuma Alta</strong></td><td class="crd-td">Canada</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 0 km matching-name/HYDE-centroid twin into canonical Montezuma Alta-New Mexico.</td></tr>
<tr><td class="crd-td"><strong>Paa-ko</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 20,29 km matching-name/HYDE-centroid twin into canonical Pa'ako-New Mexico.</td></tr>
<tr><td class="crd-td"><strong>Pesedeuinge</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 17,8 km matching-name/HYDE-centroid twin into canonical Pesedeuinge-New Mexico.</td></tr>
<tr><td class="crd-td"><strong>Piedras Marcadas</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 15,48 km matching-name/HYDE-centroid twin into canonical Piedras Marcadas-New Mexico.</td></tr>
<tr><td class="crd-td"><strong>Pueblo Largo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 19,7 km matching-name/HYDE-centroid twin into canonical Pueblo Largo-New Mexico.</td></tr>
<tr><td class="crd-td"><strong>Pueblo Pardo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 16,51 km matching-name/HYDE-centroid twin into canonical Pueblo Pardo-New Mexico.</td></tr>
<tr><td class="crd-td"><strong>Swarts Ruin</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 19,77 km matching-name/HYDE-centroid twin into canonical Swarts Ruin-New Mexico.</td></tr>
<tr><td class="crd-td"><strong>Picuris Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Picuris Pueblo' (Adler &amp; Dick 1999).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded duplicate-alias candidate records documented in the Rio Grande HU 13 source ledger.</figcaption>
</figure>

# Limitations

Three limitations affect site-level resolution in HU 13.
First, numerous small Pueblo IV satellite hamlets and seasonal field houses across the Galisteo Basin, Jemez Plateau and Piro province share standardised regional phase multipliers (`1,06k` ceiling across minor multi-component complexes) and remain sensitive to contemporaneous room-occupancy ratios [@adler1996; @liebmann2016].
Second, Mexican-side archaeological records along the Rio Conchos valley remain sparser than New Mexico site registries, leaving `La Junta de los Rios` (`650`) to represent the Presidio-Ojinaga confluence centre rather than every dispersed *rancheria* downstream [@kelley1986].
Third, pre-contact mobile Athabascan and Pecos-plains hunting camps outside canyon rockshelters lack permanent masonry footprints and are captured through the sub-regional rural kriging surface rather than individual site entries.

# Sources

<div id="refs"></div>
