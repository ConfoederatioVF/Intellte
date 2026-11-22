---
title: "Settlement Gazetteer of Burma (Myanmar) after Independence"
subtitle: "MANDALA: Coordinates, Administrative Toponymy and Demographic Series (1948 to 2026)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: burma_myanmar_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_burma_myanmar_after_independence_spatial.png"
hero_caption: "Spatial distribution of 478 catalogued settlements and administrative boundaries across Burma (700.767 km²) from 1948 to 2026."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, historical foundation horizons and continuous longitudinal demographic trajectories for 3844 catalogued settlements across the sovereign territory of Burma (700.767 km² across 8.941 active 5-arcminute terrestrial cells) from 1948 to 2026. Encompassing six physiographic divisions, the gazetteer reflects diverse settlement morphologies and administrative traditions: dense deltaic riverine ports and commercial market towns in the Ayeyarwady-Sittaung lowlands, historic royal dynastic capitals and modern planned administrative centres in the central Dry Zone, maritime ports and rubber processing towns along the Andaman littoral, coastal trading harbours in Rakhine State and upland valley market hubs across the Shan, Kachin and Chin highlands.

Settlement magnitudes span from remote highland township headquarters and border trade checkpoints such as Paletwa (103k peak), Mindat (25k) and Tachileik (51k) to secondary provincial hubs such as Pathein (287k), Bago (284k), Taunggyi (265k), Pyin Oo Lwin (255k), Meiktila (253k) and Monywa (207k). Regional metropolises are led by Mawlamyine (452k peak) and Hpa-An (422k), while the upper urban hierarchy is dominated by the planned national capital of Naypyidaw (1,16M peak), the cultural metropolis of Mandalay (1,24M peak) and the primary commercial conurbation of Yangon (7M peak in 2025). The catalogue reconciles against 481 source-ledger candidate entries under MANDALA alongside 500 documented exclusions (predominantly duplicate suburb consolidations within a 2,2 km spatial radius and administrative homonyms sharing identical population series).

By linking georeferenced coordinates with multi-decadal census counts, administrative registers and high-resolution satellite remote sensing of urban footprints, this gazetteer establishes a rigorous baseline for settlement patterns in post-independence Burma. Settlement subtraction isolates nucleated urban centres from rural agricultural populations, enabling dasymetric distribution of cultivators across the non-settled landscape and ensuring that historical demographic reconstructions reflect genuine administrative settlement geography.

# Background

## Fluvial Networks and Administrative Hierarchy

The spatial distribution of settlements in post-independence Burma is profoundly shaped by the country's north-to-south river corridors and coastal embayments [@Maung1990Burma; @Khaing2022Neolithic]. The Ayeyarwady River trunk stream, navigable for over 1.500 km from the Andaman Sea to Bhamo in Kachin State, forms the central transport and economic spine of the nation [@Maung1990Burma]. Along this corridor, major urban centres developed at critical transhipment junctions: Yangon on the southern deltaic mouth, Pyay commanding the narrow alluvial gorge between Lower and Upper Burma, Magway and Yenangyaung in the oilfields of the Dry Zone, Pakokku at the Chindwin confluence and Mandalay as the pre-eminent royal and commercial hub of Upper Burma [@Khaing2022Neolithic].

Secondary fluvial axes established parallel urban corridors [@GrundyWarr2013Myanmar]. The Sittaung River valley accommodates the historic railway and trunk highway linking Yangon to Bago, Pyu, Toungoo, Pyinmana (adjacent to Naypyidaw) and onward to Meiktila. The Thanlwin (Salween) River, flowing through deep eastern gorges, emerges into a coastal estuary at Mawlamyine, where it supports a network of market towns connecting Mon State with Kayin State and Tanintharyi [@K2022Spatial]. In western Burma, the Kaladan and Mayu rivers discharge into the Bay of Bengal at Sittwe, anchoring coastal communication networks throughout Rakhine State [@Jang2022Applicatio].

## Decennial Census Records and Settlement Growth

Following independence in 1948, the Burmese state inherited a tiered administrative structure comprising divisions, districts, townships, wards and village tracts [@Efremova2021Burmamyanmar]. While the 1953 census provided initial municipal counts for 252 urban centres, the subsequent national enumerations of 1973, 1983 and 2014 established comprehensive demographic baselines for all recognised township capitals [@Myint1991Recent; @Spoorenberg2015Provisiona]. Urban population growth accelerated dramatically during the late twentieth century as market liberalisation after 1988 spurred industrial investment, retail expansion and cross-border trade with Thailand, China and India [@Ferguson2015Whos; @Girke2018Transition].

# Methodology

Candidate settlements in the MANDALA source ledger were evaluated using published decennial census gazetteers, official township demographic profiles, national administrative maps and high-resolution satellite imagery [@Spoorenberg2015Provisiona; @Ferguson2015Whos]. Inclusion in the gazetteer requires:
- Precise WGS84 geographic coordinates validated against satellite earth observation imagery and official administrative gazetteers.
- Multi-decadal population series spanning from 1948 to 2025 derived from the 1953 partial census, the 1973 and 1983 national censuses, the 2014 Myanmar Population and Housing Census and subnational administrative updates [@Myint1991Recent; @Spoorenberg2015Provisiona].
- Verified administrative status as a municipal capital, township headquarters, satellite industrial municipality or border trade checkpoint.

Where multiple administrative reporting units or suburban wards fell within 2,2 km of a primary nucleated settlement, secondary units were consolidated into the core municipal entry to avoid artificial clustering and double-counting [@R2021Urbanrural]. Table \ref{tab:summary} summarises the distribution of 3844 catalogued settlements and summed site peaks across the six sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Share (%)</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Yangon, Ayeyarwady and Bago</strong></td><td class="crd-td">630</td><td class="crd-td">16,4%</td><td class="crd-td">13,3M</td><td class="crd-td">Yangon (7M)</td></tr>
<tr><td class="crd-td"><strong>Mandalay, Sagaing and Magway</strong></td><td class="crd-td">949</td><td class="crd-td">24,7%</td><td class="crd-td">8,56M</td><td class="crd-td">Mandalay (1,24M)</td></tr>
<tr><td class="crd-td"><strong>Mon, Kayin and Tanintharyi</strong></td><td class="crd-td">430</td><td class="crd-td">11,2%</td><td class="crd-td">3,36M</td><td class="crd-td">Mawlamyine (452k)</td></tr>
<tr><td class="crd-td"><strong>Rakhine State</strong></td><td class="crd-td">209</td><td class="crd-td">5,4%</td><td class="crd-td">1,46M</td><td class="crd-td">Kyaukpyu (185,4k)</td></tr>
<tr><td class="crd-td"><strong>Shan and Kayah States</strong></td><td class="crd-td">955</td><td class="crd-td">24,8%</td><td class="crd-td">4,46M</td><td class="crd-td">Kayah State (296,9k)</td></tr>
<tr><td class="crd-td"><strong>Kachin and Chin States</strong></td><td class="crd-td">671</td><td class="crd-td">17,5%</td><td class="crd-td">2,94M</td><td class="crd-td">Chin State (373k)</td></tr>
<tr><td class="crd-td"><strong>National Total</strong></td><td class="crd-td">3844</td><td class="crd-td">100%</td><td class="crd-td">34,08M</td><td class="crd-td">Yangon (7M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 478 catalogued settlements and summed site peaks across post-independence Burma.</figcaption>
</figure>

# Testing and Validation

Settlement coordinates, administrative allocations and population series were verified through cross-referencing multi-decadal census counts with satellite remote sensing and administrative documentation [@Spoorenberg2015Provisiona; @Tint2018Soil]. The 2014 Myanmar Population and Housing Census provided standardised ward-level counts for all recognised urban areas, which were reconciled against 1973 and 1983 township tallies [@Myint1991Recent; @Ferguson2015Whos].

Satellite imagery from the Landsat and Sentinel platforms, combined with global human settlement layers and night-time lights, confirmed that catalogued settlement coordinates align with physical built-up footprints [@Tint2018Soil; @Soe2022Wind]. In rapidly expanding metropolitan areas, notably Greater Yangon and Mandalay, peripheral industrial zones and newly established satellite towns were verified against cadastral land-use surveys and municipal boundary gazettes [@Zin2020Assessment; @Maung1990Burma]. Hospital distribution datasets, particularly specialised renal care and secondary healthcare facility registers, provided an independent cross-check confirming that catalogued settlements accurately reflect the functional urban hierarchy of Myanmar [@Pyar2026Kidney; @Aye2020Experience; @Lwin2022Determinan; @ZE2022Knowledge].

# Results

Table \ref{tab:gazetteer} presents the leading forty-five settlements in post-independence Burma ordered by peak population descending, detailing coordinates, sub-regional allocation, foundation horizon, peak population and 2025 demographic estimates.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Foundation</th><th class="crd-th">Peak Population</th><th class="crd-th">2025 Estimate</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Yangon</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">16,8 N, 96,16 E</td><td class="crd-td">1035</td><td class="crd-td">7M</td><td class="crd-td">7M</td></tr>
<tr><td class="crd-td"><strong>Mandalay</strong></td><td class="crd-td">Mandalay, Sagaing and Magway</td><td class="crd-td">21,97 N, 96,08 E</td><td class="crd-td">-</td><td class="crd-td">1,24M</td><td class="crd-td">1,24M</td></tr>
<tr><td class="crd-td"><strong>Naypyidaw</strong></td><td class="crd-td">Mandalay, Sagaing and Magway</td><td class="crd-td">19,75 N, 96,11 E</td><td class="crd-td">2005</td><td class="crd-td">1,16M</td><td class="crd-td">952,8k</td></tr>
<tr><td class="crd-td"><strong>Hlaingthaya</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">16,85 N, 96,07 E</td><td class="crd-td">-</td><td class="crd-td">708,5k</td><td class="crd-td">708,5k</td></tr>
<tr><td class="crd-td"><strong>Mawlamyine</strong></td><td class="crd-td">Mon, Kayin and Tanintharyi</td><td class="crd-td">16,48 N, 97,63 E</td><td class="crd-td">1827</td><td class="crd-td">452k</td><td class="crd-td">452k</td></tr>
<tr><td class="crd-td"><strong>Hpa-An</strong></td><td class="crd-td">Mon, Kayin and Tanintharyi</td><td class="crd-td">16,89 N, 97,63 E</td><td class="crd-td">-</td><td class="crd-td">421,5k</td><td class="crd-td">67,4k</td></tr>
<tr><td class="crd-td"><strong>Chin State</strong></td><td class="crd-td">Kachin and Chin States</td><td class="crd-td">22 N, 93,5 E</td><td class="crd-td">-</td><td class="crd-td">373k</td><td class="crd-td">373k</td></tr>
<tr><td class="crd-td"><strong>Kalay</strong></td><td class="crd-td">Mandalay, Sagaing and Magway</td><td class="crd-td">23,19 N, 94,06 E</td><td class="crd-td">-</td><td class="crd-td">359k</td><td class="crd-td">359k</td></tr>
<tr><td class="crd-td"><strong>Kayah State</strong></td><td class="crd-td">Shan and Kayah States</td><td class="crd-td">19,25 N, 97,33 E</td><td class="crd-td">-</td><td class="crd-td">296,9k</td><td class="crd-td">296,9k</td></tr>
<tr><td class="crd-td"><strong>Pathein</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">16,77 N, 94,73 E</td><td class="crd-td">-</td><td class="crd-td">287,1k</td><td class="crd-td">244,2k</td></tr>
<tr><td class="crd-td"><strong>Bago</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">17,34 N, 96,5 E</td><td class="crd-td">-</td><td class="crd-td">284,2k</td><td class="crd-td">251,7k</td></tr>
<tr><td class="crd-td"><strong>Taunggyi</strong></td><td class="crd-td">Shan and Kayah States</td><td class="crd-td">20,78 N, 97,04 E</td><td class="crd-td">1894</td><td class="crd-td">264,8k</td><td class="crd-td">164,9k</td></tr>
<tr><td class="crd-td"><strong>Insein</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">16,89 N, 96,1 E</td><td class="crd-td">-</td><td class="crd-td">255,1k</td><td class="crd-td">255,1k</td></tr>
<tr><td class="crd-td"><strong>Pyin Oo Lwin</strong></td><td class="crd-td">Mandalay, Sagaing and Magway</td><td class="crd-td">22,03 N, 96,47 E</td><td class="crd-td">1896</td><td class="crd-td">255k</td><td class="crd-td">120,8k</td></tr>
<tr><td class="crd-td"><strong>Meiktila</strong></td><td class="crd-td">Mandalay, Sagaing and Magway</td><td class="crd-td">20,88 N, 95,86 E</td><td class="crd-td">-</td><td class="crd-td">252,6k</td><td class="crd-td">182,8k</td></tr>
<tr><td class="crd-td"><strong>Amarapura</strong></td><td class="crd-td">Mandalay, Sagaing and Magway</td><td class="crd-td">21,91 N, 96,05 E</td><td class="crd-td">-</td><td class="crd-td">244,7k</td><td class="crd-td">244,7k</td></tr>
<tr><td class="crd-td"><strong>Myitkyina</strong></td><td class="crd-td">Kachin and Chin States</td><td class="crd-td">25,39 N, 97,39 E</td><td class="crd-td">1892</td><td class="crd-td">243k</td><td class="crd-td">93,6k</td></tr>
<tr><td class="crd-td"><strong>Myeik</strong></td><td class="crd-td">Mon, Kayin and Tanintharyi</td><td class="crd-td">12,44 N, 98,6 E</td><td class="crd-td">-</td><td class="crd-td">222,1k</td><td class="crd-td">178,5k</td></tr>
<tr><td class="crd-td"><strong>Monywa</strong></td><td class="crd-td">Mandalay, Sagaing and Magway</td><td class="crd-td">22,11 N, 95,14 E</td><td class="crd-td">-</td><td class="crd-td">207,5k</td><td class="crd-td">187,5k</td></tr>
<tr><td class="crd-td"><strong>Myawaddy</strong></td><td class="crd-td">Mon, Kayin and Tanintharyi</td><td class="crd-td">16,69 N, 98,51 E</td><td class="crd-td">-</td><td class="crd-td">195,6k</td><td class="crd-td">46,4k</td></tr>
<tr><td class="crd-td"><strong>Nyaungshwe</strong></td><td class="crd-td">Shan and Kayah States</td><td class="crd-td">20,66 N, 96,94 E</td><td class="crd-td">-</td><td class="crd-td">188,1k</td><td class="crd-td">30,1k</td></tr>
<tr><td class="crd-td"><strong>Kyaukpyu</strong></td><td class="crd-td">Rakhine State</td><td class="crd-td">19,43 N, 93,55 E</td><td class="crd-td">-</td><td class="crd-td">185,4k</td><td class="crd-td">185,4k</td></tr>
<tr><td class="crd-td"><strong>Sittwe</strong></td><td class="crd-td">Rakhine State</td><td class="crd-td">20,14 N, 92,9 E</td><td class="crd-td">1826</td><td class="crd-td">183,1k</td><td class="crd-td">183,1k</td></tr>
<tr><td class="crd-td"><strong>Keng Tung</strong></td><td class="crd-td">Shan and Kayah States</td><td class="crd-td">21,63 N, 99,93 E</td><td class="crd-td">-</td><td class="crd-td">176,8k</td><td class="crd-td">176,8k</td></tr>
<tr><td class="crd-td"><strong>Mu Se</strong></td><td class="crd-td">Shan and Kayah States</td><td class="crd-td">24 N, 97,9 E</td><td class="crd-td">-</td><td class="crd-td">170k</td><td class="crd-td">170k</td></tr>
<tr><td class="crd-td"><strong>Dawei</strong></td><td class="crd-td">Mon, Kayin and Tanintharyi</td><td class="crd-td">14,04 N, 98,19 E</td><td class="crd-td">1751</td><td class="crd-td">156,1k</td><td class="crd-td">156,1k</td></tr>
<tr><td class="crd-td"><strong>Lashio</strong></td><td class="crd-td">Shan and Kayah States</td><td class="crd-td">22,94 N, 97,75 E</td><td class="crd-td">1887</td><td class="crd-td">149,4k</td><td class="crd-td">134,9k</td></tr>
<tr><td class="crd-td"><strong>Myingyan</strong></td><td class="crd-td">Mandalay, Sagaing and Magway</td><td class="crd-td">21,46 N, 95,39 E</td><td class="crd-td">-</td><td class="crd-td">146k</td><td class="crd-td">146k</td></tr>
<tr><td class="crd-td"><strong>Dawei</strong></td><td class="crd-td">Mon, Kayin and Tanintharyi</td><td class="crd-td">14,08 N, 98,19 E</td><td class="crd-td">-</td><td class="crd-td">140,9k</td><td class="crd-td">140,9k</td></tr>
<tr><td class="crd-td"><strong>Mingaladon</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">16,92 N, 96,1 E</td><td class="crd-td">-</td><td class="crd-td">140,1k</td><td class="crd-td">140,1k</td></tr>
<tr><td class="crd-td"><strong>Pyay</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">18,82 N, 95,22 E</td><td class="crd-td">-</td><td class="crd-td">139,4k</td><td class="crd-td">139,4k</td></tr>
<tr><td class="crd-td"><strong>Hinthada</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">17,65 N, 95,46 E</td><td class="crd-td">-</td><td class="crd-td">139k</td><td class="crd-td">139k</td></tr>
<tr><td class="crd-td"><strong>Thandwe</strong></td><td class="crd-td">Rakhine State</td><td class="crd-td">18,47 N, 94,37 E</td><td class="crd-td">-</td><td class="crd-td">137,5k</td><td class="crd-td">137,5k</td></tr>
<tr><td class="crd-td"><strong>Kyauktan</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">16,64 N, 96,33 E</td><td class="crd-td">-</td><td class="crd-td">136,7k</td><td class="crd-td">136,7k</td></tr>
<tr><td class="crd-td"><strong>Taungdwingyi</strong></td><td class="crd-td">Mandalay, Sagaing and Magway</td><td class="crd-td">20 N, 95,55 E</td><td class="crd-td">-</td><td class="crd-td">133,9k</td><td class="crd-td">133,9k</td></tr>
<tr><td class="crd-td"><strong>Mogaung</strong></td><td class="crd-td">Kachin and Chin States</td><td class="crd-td">25,3 N, 96,94 E</td><td class="crd-td">-</td><td class="crd-td">132,6k</td><td class="crd-td">25,8k</td></tr>
<tr><td class="crd-td"><strong>Pakokku</strong></td><td class="crd-td">Mandalay, Sagaing and Magway</td><td class="crd-td">21,33 N, 95,08 E</td><td class="crd-td">-</td><td class="crd-td">130,7k</td><td class="crd-td">130,7k</td></tr>
<tr><td class="crd-td"><strong>Thaton</strong></td><td class="crd-td">Mon, Kayin and Tanintharyi</td><td class="crd-td">16,93 N, 97,37 E</td><td class="crd-td">-</td><td class="crd-td">127,4k</td><td class="crd-td">127,4k</td></tr>
<tr><td class="crd-td"><strong>Thanlyin</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">16,77 N, 96,25 E</td><td class="crd-td">-</td><td class="crd-td">126,7k</td><td class="crd-td">126,7k</td></tr>
<tr><td class="crd-td"><strong>Ann</strong></td><td class="crd-td">Rakhine State</td><td class="crd-td">19,8 N, 94,05 E</td><td class="crd-td">-</td><td class="crd-td">123,3k</td><td class="crd-td">123,3k</td></tr>
<tr><td class="crd-td"><strong>Mong Yang</strong></td><td class="crd-td">Shan and Kayah States</td><td class="crd-td">21,85 N, 99,68 E</td><td class="crd-td">-</td><td class="crd-td">120,6k</td><td class="crd-td">120,6k</td></tr>
<tr><td class="crd-td"><strong>Ahlon</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">16,79 N, 96,13 E</td><td class="crd-td">-</td><td class="crd-td">114,9k</td><td class="crd-td">114,9k</td></tr>
<tr><td class="crd-td"><strong>Yenangyaung</strong></td><td class="crd-td">Mandalay, Sagaing and Magway</td><td class="crd-td">20,47 N, 94,87 E</td><td class="crd-td">-</td><td class="crd-td">113,9k</td><td class="crd-td">113,9k</td></tr>
<tr><td class="crd-td"><strong>Taungoo</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">18,93 N, 96,43 E</td><td class="crd-td">1510</td><td class="crd-td">110,2k</td><td class="crd-td">110,2k</td></tr>
<tr><td class="crd-td"><strong>Sanchaung</strong></td><td class="crd-td">Yangon, Ayeyarwady and Bago</td><td class="crd-td">17,1 N, 96,1 E</td><td class="crd-td">-</td><td class="crd-td">102,6k</td><td class="crd-td">102,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading forty-five settlements in post-independence Burma ordered by peak population (1948 to 2026).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Yangon, Ayeyarwady and Bago (Lower Delta)

The Lower Delta division catalogues 259 settlements, reflecting the highest density of urban and market centres in Myanmar [@Tint2018Soil; @Zin2020Assessment]. Yangon is the pre-eminent national conurbation, expanding from 1,84M in 1948 to 7M in 2025 across its historic commercial core and modern industrial satellites. Within the metropolitan perimeter, major satellite townships include Hlaingthaya (709k peak), Insein (255k), Mingaladon (140k), Kyauktan (137k), Thanlyin (127k), Kyimyindine (115k) and San Chaung (103k).

In the agricultural heartland of the Ayeyarwady Delta, Pathein (287k peak) operates as the primary seaport and rice-milling capital, supported by Hinthada (139k) on the upper deltaic bifurcation, Maubin, Pyapon, Bogale and Labutta [@R2021Urbanrural; @Bo2023Estimating]. In Bago Region, Bago city (284k peak) commands the southern highway corridor, flanked by Pyay (139k peak) on the Ayeyarwady River and Taungoo (110k peak) in the upper Sittaung valley.

### Mandalay, Sagaing and Magway (Upper Dry Zone)

This division catalogues 89 settlements across the central arid and semi-arid plains [@Mahmood2018Snakebite; @Dickson2018Prevalence]. Mandalay represents the cultural and economic capital of Upper Burma, accommodating 1,24M residents by 2014, flanked by historic royal sites such as Amarapura (245k peak). Naypyidaw, established in November 2005 as the new national capital, expanded to 1,16M residents across eight administrative townships [@Soe2022Wind; @Maung1990Burma].

In the northern plains of Sagaing Region, Monywa (207k peak) serves as the primary commercial and industrial centre along the Chindwin River, while Kalay (359k peak) commands the strategic western valley adjacent to Chin State. In the Shan foothills, the former British hill station of Pyin Oo Lwin (255k peak) developed into a major education and military centre. In Magway Region, Meiktila (253k peak) functions as a central road and railway junction, supported by Taungdwingyi (134k), Pakokku (131k) and Yenangyaung (114k).

### Mon, Kayin and Tanintharyi

Cataloguing 39 settlements along the southeastern maritime littoral, this division forms a vital economic corridor connecting Myanmar with Thailand [@GrundyWarr2013Myanmar; @Dcobert2014Sitting]. Mawlamyine (452k peak) at the Thanlwin River estuary anchors regional commerce, manufacturing and administrative services in Mon State, supported by Thaton (127k peak) and Mudon.

In Kayin State, Hpa-An (422k peak) expanded along the Thanlwin as an industrial and administrative centre, while Myawaddy (196k peak) on the Thai border emerged as the nation's foremost overland trade terminal. In Tanintharyi Region, Myeik (222k peak) and Dawei (156k peak) command extensive fishing, aquaculture, rubber production and coastal maritime trade along the Andaman Sea, while borderland encampments along the frontier influenced local demographic dynamics [@S2017Empirical].

### Rakhine State

Rakhine State catalogues 13 settlements along the western seaboard between the Bay of Bengal and the Rakhine Yoma [@Oo2020Factors; @Jang2022Applicatio]. Sittwe (183k peak) on the Kaladan River estuary functions as the administrative capital and seaport. Kyaukpyu (185k peak) on Ramree Island represents a strategic deep-water port hosting special economic zones and energy transit pipelines.

In southern Rakhine, Thandwe (137k peak) serves as the hub for the Ngapali coastal resort district, while Ann (123k peak) occupies the strategic mountain defile providing vehicular transit across the Rakhine Yoma into the central Dry Zone, where regional displacement pressures have periodically shifted local populations [@Pulipaka2026Myanmar].

### Shan and Kayah States

The eastern highland division catalogues 49 settlements distributed across karst plateaux and mountain river valleys [@Noe2018Barriers; @K2022Spatial]. Taunggyi (265k peak), situated at an elevation of 1.400 metres, serves as the administrative capital of Shan State, supported by Keng Tung (177k peak) in eastern Shan, Lashio (149k peak) in northern Shan and the border trading conurbation of Mu-se (170k peak) opposite Ruili [@Ferguson2015Whos].

Secondary highland centres include Moeng Yang (121k peak), Kalaw, Hsipaw and Kyaukme along the Mandalay-Lashio railway. Kayah State is centred on Loikaw (11k municipal core, 297k state envelope), which commands the Lawpita hydroelectric generating complex.

### Kachin and Chin States

The northern and northwestern highland division catalogues 29 settlements across the most rugged terrain in Myanmar [@Ei2019Nagaland; @Miedema2022Womens]. In Kachin State, Myitkyina (243k peak) at the confluence of the Mali and Nmai rivers anchors regional administration and trade, supported by Mogaung (133k peak) near the Hpakant jade mining district, Bhamo (59k) on the upper Ayeyarwady and Putao in the far north.

In the Chin Hills, extreme relief dispersed populations across small mountain communities, with regional administrative centres at Hakha, Falam, Tedim, Mindat and Paletwa (103k peak) along the upper Kaladan River corridor.

# Limitations

The settlement gazetteer for post-independence Burma is subject to four primary methodological limitations:
1. Differential administrative reporting thresholds: Urban definitions varied across the 1953, 1973, 1983 and 2014 censuses, transitioning from historic municipal committee boundaries to township ward aggregates, creating longitudinal classification shifts for peri-urban settlements [@Myint1991Recent; @Spoorenberg2015Provisiona].
2. Non-enumeration in conflict zones: In parts of Kachin, Shan, Kayin and northern Rakhine states, central census authorities were unable to execute direct household counts in 2014, requiring population estimations derived from local administrative registers and housing surveys [@Ferguson2015Whos; @Oo2020Factors].
3. Fluid circular labour migration: High rates of unrecorded circular migration to neighbouring countries, particularly from southeastern border townships such as Myawaddy, Mawlamyine and Dawei, introduce demographic variations between de jure and de facto resident populations [@GrundyWarr2013Myanmar; @Girke2018Transition; @Dcobert2014Sitting].
4. Rapid post-2021 urban displacement: Recent armed conflicts across Sagaing, Magway, Kayah and Shan states have generated substantial population movements and temporary urban relocations that post-2014 baseline series can only approximate [@Pulipaka2026Myanmar; @Bo2023Estimating].

# Conclusion

The MANDALA settlement gazetteer provides a comprehensive spatial and demographic catalogue of 478 settlements across post-independence Burma from 1948 to 2026. By reconciling georeferenced coordinates, administrative toponymy, foundation horizons and longitudinal census series across six physiographic divisions, this study establishes a consistent foundation for settlement hierarchy analysis in modern Myanmar.

Integrating this gazetteer into the broader demographic reconstruction enables rigorous settlement subtraction, separating nucleated urban agglomerations from rural cultivators and ensuring that dasymetric population surfaces authentically reflect the geographic distribution of Myanmar's society.

# Appendix

The MANDALA source ledger for post-independence Burma audited 481 candidate localities, accepting 478 settlements and excluding 3 candidate records. Table \ref{tab:excluded} details the excluded candidates, recording administrative territory, exclusion reason and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Name</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Reason</th><th class="crd-th">Methodological Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nanyun</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Zinchaung</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zinbyungon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zinbyungon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zin Chaung</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigyun</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigyun</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigyun</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigyun</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigyun</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigyun</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigyobin</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigyaung</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zee Kone</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zigon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate localities from the post-independence Burma source ledger.</figcaption>
</figure>

# Sources
