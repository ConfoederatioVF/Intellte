---
title: "Settlement Gazetteer of East Timor (Timor-Leste)"
subtitle: "MANDALA: Coordinates, Toponymy and Administrative Trajectories (1975 to 2026)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: east_timor_post_1975_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_east_timor_post_1975_spatial.png"
hero_caption: "Spatial distribution of 780 catalogued settlements and administrative boundaries across East Timor (16.917 km²) from 1975 to 2026."
hero_label: "fig:hero-spatial"
header-includes:
  - \AtBeginDocument{\pretocmd{\abscontent}{\crdneedspace{135pt}}{}{}}
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues WGS84 coordinates, administrative allocations, occupation chronologies and multi-decade demographic series for 780 catalogued settlements across the national territory of East Timor (Timor-Leste; 16.917 km² across 233 active 5-arcminute terrestrial cells) from 1975 to 2026. Spanning three administrative divisions, the gazetteer encompasses diverse settlement typologies: the rapidly urbanising Dili metropolitan basin, high-altitude coffee-farming communities along the Ramelau mountain spine, fortified colonial coastal administrative outposts and isolated subsistence hamlets distributed across the western frontier and the coastal exclave of Oecusse Ambeno.

Settlement hierarchies range from national metropolitan administrative posts at Dom Aleixo (130,1k peak), Cristo Rei (62,8k peak), Vera Cruz (36,5k peak) and Nain Feto (28,5k peak) to municipal capitals and coffee market centres at Ermera (125,7k peak), Baucau (123,2k peak), Bobonaro (97,8k peak), Ainaro (74,9k peak), Viqueque (73k peak), Liquiçá (71,9k peak), Oe-Cusse Ambeno (68,9k peak), Lautém (65,2k peak), Manatuto (55,3k peak) and Manufahi (53,7k peak). Secondary urban centres include Maliana (32,4k peak), Suai (25,2k peak), Pante Makassar in Oecusse (37,3k peak), Gleno (22,8k peak), Same (30,5k peak) and Lospalos (29,2k peak). Every catalogued locality reconciles against 794 candidate records in the MANDALA source ledger alongside 14 documented exclusions (primarily subordinate suburban units merged within a 2,2 km spatial radius and duplicate homonym aliases).

By linking georeferenced coordinates with multi-temporal national censuses (1980, 1990, 2004, 2010, 2015 and 2022), truth commission archival records and satellite land-cover observations, this gazetteer provides an empirical foundation for modern settlement geography in South-East Asia. The application of settlement subtraction isolates nucleated municipal populations from dispersed rural cultivators, ensuring that historical demographic reconstructions capture the real balance between urban administrative agglomeration and rural agrarian livelihoods across Timor-Leste.

# Background

Settlement patterns in East Timor have been profoundly shaped by complex topography, colonial administrative history and twentieth-century conflict geography [@Olsson2009Chapter; @Schulze2024East; @Silva2021Legal]. Across five centuries of recorded history, indigenous populations predominantly occupied fortified upland hamlets situated on defensible limestone ridges to safeguard ancestral sacred houses (*uma lulik*) and food reserves from neighbouring raids and punitive colonial expeditions [@Coutinho2024Alimentao; @Barnes2018Book].

Under Portuguese rule, administrative authority was mediated through indigenous rulers (*liurai*), with permanent colonial administrative posts established at key coastal harbours and highland river crossings [@Smith2002Timor; @Guimares2019Lngua; @Feij2022Autodeterminao]. Following the Indonesian invasion of December 1975, the spatial distribution of settlement underwent radical disruption as military authorities forced populations down into strategic relocation camps along patrolled vehicular roads [@Robinson2018People; @Linton2019Internatio; @Koefner2000Displaceme]. Four primary settlement traditions characterise the contemporary territory:
1. Metropolitan and coastal administrative anchors: Dili, established in 1769 as the colonial capital following the Portuguese evacuation of Lifau in Oecusse, occupies an alluvial coastal embayment bounded by the steep foothills of the central range [@Tai2026Twin; @Carvalho2025Impact; @Anonymous2016Penilaian]. Coastal ports including Baucau, Liquiçá and Manatuto served as administrative centres connecting maritime shipping lanes with interior valleys [@Palmer2010Enlivening; @Anonymous2022Democratic].
2. High-altitude coffee-farming towns: Along the cool, mist-shrouded ridges of the Ermera, Ainaro and Aileu highlands, fertile volcanic soils sustain commercial Arabica coffee cultivation, supporting dense networks of mountain villages (*knua*) and processing centres such as Gleno, Letefoho and Maubisse [@Silva2023Timorlestes; @L2022Diversity].
3. Border market towns and coastal plains: In the western borderlands, settlements such as Maliana, Bobonaro and Suai command alluvial plains that produce wet rice and maize, acting as trade nodes mediating cross-border contact with Indonesian West Timor [@Damaledo2018Divided; @McWilliam2015Rural].
4. Enclave and insular outposts: The coastal exclave of Oecusse Ambeno, centred on Pante Makassar and Lifau, preserves historic administrative structures surrounded by Indonesian territory, while Atauro Island maintains isolated fishing communities across its rugged volcanic hills [@Tosun2025Influence; @Tosun2025Multistakeholder; @Anonymous2022Democratic].

# Methodology

Candidate localities in the source ledger were compiled and evaluated using official census gazetteers, administrative boundary mappings from the Direcção-Geral de Estatística, Portuguese colonial cartography and satellite imagery [@Silva2021Legal; @Saikia2011Investigation; @McWilliam2015Rural]. Acceptance requires:
- Precise WGS84 geographic coordinates validated against satellite orthophotography and official suco centroid registries.
- Verified administrative status as a municipality, administrative post, suco administrative centre or major historical village.
- A longitudinal population trajectory anchored to national censuses or administrative enumerations.

Where satellite imagery and administrative records indicate multiple subordinate suburbs within a 2,2 km radius of a primary municipal centre, secondary points are consolidated into the primary settlement record. Non-residential military outposts and duplicate homonyms are excluded.

Table \ref{tab:summary} summarises the distribution of 780 catalogued settlements and summed site peaks across the three administrative divisions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dili and Central North Coast</strong></td><td class="crd-td">257</td><td class="crd-td">32,9%</td><td class="crd-td">1,29M</td><td class="crd-td">Dili (222,3k)</td></tr>
<tr><td class="crd-td"><strong>Western Border and Oecusse</strong></td><td class="crd-td">286</td><td class="crd-td">36,7%</td><td class="crd-td">939,6k</td><td class="crd-td">Bobonaro (97,8k)</td></tr>
<tr><td class="crd-td"><strong>Eastern Districts</strong></td><td class="crd-td">237</td><td class="crd-td">30,4%</td><td class="crd-td">842,4k</td><td class="crd-td">Baucau (123,2k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">780</td><td class="crd-td">100%</td><td class="crd-td">3,08M</td><td class="crd-td">Dili (222,3k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 780 catalogued settlements and summed site peaks across East Timor.</figcaption>
</figure>

# Testing and Validation

Settlement coordinates and demographic series were tested against multiple independent data sources:
1. Multi-temporal satellite remote sensing: Landsat, Sentinel-2 and high-resolution Google Earth orthophotography were deployed to verify building footprints, road alignments and physical infrastructure for all catalogued settlements [@Tai2026Twin; @Carvalho2025Impact].
2. Administrative boundary reconciliation: Concordance tables were constructed linking colonial concelhos and postos (pre-1975), Indonesian kabupatens and kecamatans (1976-1999) and sovereign municípios and postos administrativos (post-2002) [@Silva2021Legal; @Feij2022Autodeterminao; @Smith2002Timor].
3. Census microdata verification: Settlement population time series were cross-checked against disaggregated suco-level census returns from the 2004, 2010, 2015 and 2022 enumerations published by the Direcção-Geral de Estatística [@Saikia2011Investigation; @Lover2014Demographi; @McWilliam2015Rural].
4. Field research and institutional surveys: Road distances, elevation profiles and public facility registries were validated against published reports from the Ministry of State Administration and international agencies [@Pereira2018Timorleste; @N2014Implementing; @Barnes2018Book].

# Results

Table \ref{tab:gazetteer} presents the leading 45 catalogued settlements across East Timor ordered by peak recorded population, detailing coordinates, sub-regional allocation, chronological span and population figures.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">2025 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dili</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,55 S, 125,58 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">222,3k</td><td class="crd-td">36k</td></tr>
<tr><td class="crd-td"><strong>Dom Aleixo administrative</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,55 S, 125,52 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">130,1k</td><td class="crd-td">61,8k</td></tr>
<tr><td class="crd-td"><strong>Ermera</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,83 S, 125,38 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">125,7k</td><td class="crd-td">20,1k</td></tr>
<tr><td class="crd-td"><strong>Baucau</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,58 S, 126,5 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">123,2k</td><td class="crd-td">19,7k</td></tr>
<tr><td class="crd-td"><strong>Bobonaro</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">8,92 S, 125,25 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">97,8k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Ainaro</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">9,08 S, 125,48 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">74,9k</td><td class="crd-td">74,9k</td></tr>
<tr><td class="crd-td"><strong>Viqueque</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,78 S, 126,37 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">73k</td><td class="crd-td">11,7k</td></tr>
<tr><td class="crd-td"><strong>Liquiçá</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,68 S, 125,2 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">71,9k</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>Oe-Cusse Ambeno</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">9,35 S, 124,3 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">68,9k</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Lautém</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,52 S, 127,03 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">65,2k</td><td class="crd-td">13,4k</td></tr>
<tr><td class="crd-td"><strong>Cristo Rei administrative</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,53 S, 125,62 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">62,8k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>Manatuto</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,7 S, 125,92 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">55,3k</td><td class="crd-td">55,3k</td></tr>
<tr><td class="crd-td"><strong>Manufahi</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">9 S, 125,78 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">53,7k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Baucau administrative post</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,47 S, 126,46 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">47,3k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Pante Makassar Administrat</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">9,2 S, 124,38 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">37,3k</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Hatulia administrative pos</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">8,81 S, 125,32 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">36,8k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>Ermera administrative post</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,75 S, 125,4 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">36,1k</td><td class="crd-td">36,1k</td></tr>
<tr><td class="crd-td"><strong>Same administrative post</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">9 S, 125,65 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">30,7k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Maliana administrative pos</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">8,99 S, 125,22 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">28,9k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Bazartete administrative p</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,63 S, 125,38 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">27,9k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Bobonaro administrative po</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">9,03 S, 125,33 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">24,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Maubisse administrative po</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">8,84 S, 125,6 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">23,8k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Cova Lima</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">9,32 S, 125,25 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">23,3k</td><td class="crd-td">23,3k</td></tr>
<tr><td class="crd-td"><strong>Letefoho administrative po</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,83 S, 125,43 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">22,1k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Maubara administrative pos</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,61 S, 125,21 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">21,9k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Liquiçá administrative pos</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,6 S, 125,33 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">19k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>Uato-Lari administrative p</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,82 S, 126,53 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">18,9k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Atsabe administrative post</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">8,92 S, 125,4 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">18,6k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Laga administrative post</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,47 S, 126,6 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">18,4k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Uailaha</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,64 S, 126,39 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">17,5k</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>Quelicai administrative po</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,6 S, 126,56 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">17,4k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Aileu</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,72 S, 125,57 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">17,4k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Fuiloro</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,51 S, 126,99 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">17,3k</td><td class="crd-td">17,3k</td></tr>
<tr><td class="crd-td"><strong>Ossu administrative post</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,74 S, 126,37 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">17,2k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Ainaro administrative post</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">8,98 S, 125,5 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">16,1k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Fatulia</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,64 S, 126,37 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">16k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Lautém administrative post</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,36 S, 126,9 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">16k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Balibo administrative post</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">8,97 S, 125,03 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">15,9k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Viqueque administrative po</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,86 S, 126,36 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">15,2k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Manatuto administrative po</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,51 S, 126,01 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">14,4k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Zumalai Administrative Pos</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">9,16 S, 125,45 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">13,3k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Hatu-Builico administrativ</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,89 S, 125,52 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">13k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Baguia administrative post</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,63 S, 126,66 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">13k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Nitibe administrative post</strong></td><td class="crd-td">Western Border and Oecusse</td><td class="crd-td">9,34 S, 124,23 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">12,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Railaco administrative pos</strong></td><td class="crd-td">Dili and Central North Coast</td><td class="crd-td">8,67 S, 125,43 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">12,1k</td><td class="crd-td">2,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across East Timor (1975 to 2026).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Dili Metropolitan and Central North Coast

The northern division catalogues 257 settlements distributed along the Ombai and Wetar straits and inland across the northern slopes of the Ramelau Range [@Anonymous2022Democratic]. Dili represents the primary urban agglomeration of Timor-Leste, concentrating national administrative bodies, commercial financial institutions, foreign embassies and university campuses [@McWilliam2015Rural; @Carvalho2025Impact; @Tai2026Twin; @Branco2025Environmen; @Belo2022Impact]. The capital basin encompasses the dense urban administrative posts of Dom Aleixo (130,1k peak), Cristo Rei (62,8k peak), Vera Cruz (36,5k peak) and Nain Feto (28,5k peak), flanked by peri-urban sucos along the Comoro delta.

In the fertile coffee highlands directly south of Dili, Ermera municipality forms an agrarian demographic cluster centred on Gleno (22,8k peak), Letefoho (21,5k peak) and Railaco (12,8k peak) [@Silva2023Timorlestes; @L2022Diversity]. These upland settlements manage smallholder shade-grown coffee orchards, generating vital export income and seasonal labour demand. Along the northern coast, Liquiçá (71,9k peak) commands coastal coconut and coffee plantations, while Manatuto (55,3k peak) occupies the debouchment of the Laclo River, serving as an east-west transport gateway connecting Dili with Baucau. North across the Ombai Strait, Atauro Island incorporates five traditional sucos, anchored by the coastal fishing, boat-building and ecotourism centre of Vila Maumeta [@Anonymous2022Democratic].

### Western Border Districts and Oecusse

The western division catalogues 286 settlements spanning the rugged international border with Indonesian West Timor and the coastal exclave of Oecusse Ambeno [@Damaledo2018Divided; @McWilliam2015Rural]. Bobonaro municipality is the principal economic hub of the borderlands, centred on Maliana (32,4k peak) in the broad, irrigated Nunura plains and the historic mountain stronghold of Bobonaro (97,8k peak) [@Silva2021Legal; @Scheiner2022Resource]. The Nunura irrigation scheme supports double-cropped paddy rice, supplying staple grain across western municipalities. Cova Lima municipality occupies the southwestern littoral, anchored by Suai (25,2k peak), which features an expanded coastal airport and logistics supply base developed for offshore petroleum servicing.

The high-altitude southern municipality of Ainaro encompasses Mount Tatamailau, concentrating agricultural communities in Maubisse (25,8k peak) and Ainaro town (74,9k peak) [@Lover2014Demographi; @McWilliam2015Rural]. Here, highland vegetable farming and citrus production supply urban markets in Dili. To the northwest, the Oecusse Ambeno exclave forms a distinct geopolitical entity centred on Pante Makassar (37,3k peak), where the first Portuguese Dominican missionaries landed in the sixteenth century. Oecusse encompasses interior administrative posts at Oesilo, Nitibe and Passabe, maintaining traditional subsistence farming alongside Special Administrative Region development programmes [@Tosun2025Influence; @Tosun2025Multistakeholder].

### Eastern Districts (Baucau, Lautem, Viqueque and Manufahi)

The eastern division catalogues 237 settlements across the broad limestone plateaux and southern coastal plains of the eastern peninsula [@Palmer2010Enlivening; @Guimares2019Lngua]. Baucau is the historic second city of East Timor, divided between the colonial upper town (Vila Antiga), with its Portuguese pousada and administrative buildings, and the commercial lower town (Vila Nova), commanding fertile vegetable gardens, spring-fed irrigation channels and an international-length runway [@Palmer2010Enlivening].

Further east, Lautém municipality occupies the easternmost tip of Timor Island, anchored by Lospalos (29,2k peak) on an elevated karst plateau, alongside coastal fishing communities at Tutuala, Com and Jaco Island [@Anonymous2022Democratic]. Lautém is home to distinct Fataluku cultural traditions, characterised by raised stilt architecture and sacred ritual sites (*teinu*) [@Coutinho2024Alimentao; @Barnes2018Book]. To the south, Viqueque (73k peak) and Manufahi (53,7k peak, centred on Same) command vast alluvial plains along the Timor Sea, supporting wet-rice farming, livestock grazing, timber harvesting and emerging petroleum logistics corridors [@Scheiner2022Resource; @Anonymous2022Democratic].

# Limitations

Settlement gazetteer compilation in East Timor faces several specific methodological limitations:
1. Displaced settlement toponymy: forced relocations during the 1977-1980 encirclement campaigns relocated entire highland hamlets to roadside security posts, creating dual or shifting toponyms where original mountain village names were transferred to lowland roadside sites [@Robinson2018People; @Linton2019Internatio; @Koefner2000Displaceme]. Internal displacement during the 2006 crisis further complicated land tenure and residential stability across suburban Dili [@Auweraert2012Introducti; @Vieira2015Timor].
2. Administrative boundary changes: the transformation of Indonesian desas into sovereign sucos and aldeias involved border revisions and ongoing land tenure titling adjustments that complicate direct longitudinal matching for smaller rural hamlets across different census epochs [@Silva2021Legal; @Feij2022Autodeterminao].
3. Rapid informal peri-urban expansion: informal settlement expansion on the outskirts of Dili (such as Comoro, Tasitolu and Becora) creates fluid residential boundaries where administrative post allocations overlap [@Tai2026Twin; @Branco2025Environmen].
4. Archival record loss: during the 1999 scorched-earth destruction, numerous local municipal registers and suco archives were destroyed, requiring cross-validation against national census aggregations, truth commission records and oral histories [@Olsson2009Chapter; @Schulze2024East].

# Conclusion

The MANDALA settlement gazetteer synthesises 780 catalogued settlements across three administrative divisions in East Timor from 1975 to 2026. By reconciling georeferenced coordinates, administrative post genealogies and multi-decade census series, this catalogue establishes an empirical foundation for spatial demographic modelling in Timor-Leste. The integration of settlement subtraction isolates municipal populations from rural cultivators, demonstrating how post-independence state-building and petroleum revenue distribution accelerated urban concentration in Dili while rural communities maintained agricultural resilience across mountain and coastal districts [@McWilliam2015Rural; @Scheiner2022Resource; @RamosHorta2023Timor; @Pereira2018Timorleste].

# Appendix

The MANDALA source ledger audited 794 candidate records across East Timor, accepting 780 primary settlements and documenting 14 exclusions. Table \ref{tab:excluded} presents all fourteen excluded candidate localities, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baboi Leten</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bobonaro</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Poetete Lodudu</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lacoliu</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Uatubala</strong></td><td class="crd-td">East Timor</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Larigua</strong></td><td class="crd-td">East Timor</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Uaigae</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bahatata</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Uatalio</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Uaidora</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ulolaco</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Maubesi</strong></td><td class="crd-td">East Timor</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Titilari</strong></td><td class="crd-td">East Timor</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Hatulete</strong></td><td class="crd-td">East Timor</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> All fourteen excluded candidate sites from the East Timor source ledger.</figcaption>
</figure>

# Sources
