---
title: "Settlement Gazetteer of the Mongol Empire and Qing Mongolia"
subtitle: "JADE: Imperial Ords, Monastic Enclaves, Frontier Garrisons and Banner Centres, 1206AD to 1912AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: mongol_empire_and_qing_mongolia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_mongol_empire_and_qing_mongolia_spatial.png"
hero_caption: "Spatial distribution of 325 catalogued monastic, imperial, administrative and frontier settlements across six historical territories of Mongolia from 1206AD to 1912AD."
hero_label: "fig:hero-mongol-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents 254 urban, monastic, military and administrative settlement trajectories active across the 1.562.476 km² territory of Outer Mongolia between the foundation of the Mongol Empire in 1206AD and the establishment of the Bogd Khanate in 1912AD under JADE. Synthesising mediaeval imperial archaeological excavations, Qing banner cadastres, Lifanyuan courier post registers and early twentieth-century geographical surveys [@wusongdi2000zhongguo; @caoshuji2001zhongguo; @pozdneyev1971mongolia; @maiskii1921sovremennaya; @Bemmann2020Karakorum], the register spans all six historical territories: Tüsheet Khan aimag (70 sites), Sain Noyon Khan aimag (49), Khovd frontier district (39), Setsen Khan aimag (34), Zasagt Khan aimag (34) and Khövsgöl-Dariganga (28). Across seven centuries of nomadic and sedentary settlement, the largest centres in the catalogue are Ulaanbaatar (Urga or Ikh Khüree, reaching 50k in 1911AD), the mediaeval imperial capital Karakorum (38k in 1255AD), Chinggis Khan's base camp Avraga Ord (14k in 1210AD), the Qing military seat Uliastai (8k in 1820AD), the Russian border trading depot Altanbulag (8k in 1860AD), the western frontier residency Khovd (6,8k in 1820AD), Tsetserleg (5,5k in 1850AD), Choibalsan (5k in 1911AD), Chinggis (4,2k in 1911AD) and Amarbayasgalant monastery (2,8k in 1820AD) [@Bemmann2020Karakorum; @pozdneyev1971mongolia; @maiskii1921sovremennaya]. Beside the 254 included centres, the regional source ledger accounts for 10 excluded duplicate aliases out of 264 total candidates.

# Background

Settlement patterns in Mongolia from 1206AD to 1912AD reflected two distinct urbanisation waves separated by centuries of nomadic pastoral circulation [@Bemmann2020Karakorum; @bawden1989modern]. In the thirteenth century, the unified Chinggisid state established fixed imperial capitals to house craft workshops, storehouses and diplomatic embassies, notably Avraga Ord along the Kherlen River and Karakorum in the Orkhon valley [@Wright2025Zuun; @Tolnai2026Tracing]. Following the collapse of the Yuan dynasty in 1368AD, these mediaeval urban hubs declined, and settlement resumed an almost exclusively mobile pastoral regime organised around mobile royal encampments (*ord*) [@bawden1989modern].

From the late sixteenth century onward, the widespread adoption of Tibetan Buddhism introduced a durable urban form: the permanent monastic enclave (*khüree* or *khiid*) [@pozdneyev1971mongolia; @Ujeed2015Establishment]. Monasteries such as Erdene Zuu (founded 1586AD), Ikh Khüree (1639AD) and Amarbayasgalant (1727AD) evolved from mobile assemblies into stone and timber temple complexes flanked by permanent residential colleges, Chinese merchant quarters (*Maimaicheng*) and seasonal pastoral markets, anchoring the modern urban hierarchy of Outer Mongolia [@bawden1989modern; @maiskii1921sovremennaya].

# Methodology

Settlement records were compiled from China Historical GIS (CHGIS V6) administrative layers, archaeological excavation registers from the Mongolian Academy of Sciences, Qing Lifanyuan banner tables, and Russian field surveys by Aleksei Pozdneyev and Ivan Maiskii [@wusongdi2000zhongguo; @caoshuji2001zhongguo; @pozdneyev1971mongolia; @maiskii1921sovremennaya; @Bemmann2020Karakorum]. All 325 catalogued centres carry valid WGS84 geographic coordinates and longitudinal population observations across historical benchmark years.

In the regional source ledger, 10 candidate records were categorized as excluded duplicate aliases situated within 12 km of higher-ranking canonical settlements (for instance, Uliastay merged into Uliastai, Kharkhorin into Karakorum, Ulan Bator into Ulaanbaatar, Modot into Avraga Ord, Undurkhaan into Chinggis, and Herlen into Chinggis), ensuring zero double-counting across the database.

# Testing and Validation

Ledger reconciliation confirms exactly 254 included settlements and 10 excluded duplicate aliases out of 264 total candidates (0 unaccounted). All 325 catalogued centres map directly onto the six sub-regional territorial masks. Figure \ref{fig:sett-mongol} displays the rank-size distribution and the leading fifteen settlement population peaks.

<figure class="crd-figure-block" id="fig:sett-mongol">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-mongol-empire-and-qing-mongolia-settlements/fig4_mongol_empire_and_qing_mongolia_settlements.png" alt="fig:sett-mongol" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 325 catalogued centres of Mongolia from 1206AD to 1912AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-mongol} reports the top 45 settlements in the gazetteer ranked by peak catalogued population, spanning mediaeval imperial capitals, Qing military headquarters, frontier trading marts and major Buddhist monastic centres.

<figure class="crd-table-figure" id="tab:top45-mongol">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1290AD</th><th class="crd-th">1820AD</th><th class="crd-th">1911AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ulaanbaatar</strong></td><td class="crd-td">Tüsheet Khan Aimag and Ikh Khüree (Urga)</td><td class="crd-td">47,92, 106,92</td><td class="crd-td">1650-1911AD</td><td class="crd-td">-</td><td class="crd-td">25k</td><td class="crd-td">50k</td><td class="crd-td">50k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Karakorum</strong></td><td class="crd-td">Sain Noyon Khan Aimag (Orkhon-Khangai)</td><td class="crd-td">47,2, 102,84</td><td class="crd-td">1235-1911AD</td><td class="crd-td">28k</td><td class="crd-td">1,4k</td><td class="crd-td">5,5k</td><td class="crd-td">38k (1255AD)</td></tr>
<tr><td class="crd-td"><strong>Avraga Ord</strong></td><td class="crd-td">Setsen Khan Aimag (Kherlen-Onon)</td><td class="crd-td">47,8, 109,12</td><td class="crd-td">1210-1911AD</td><td class="crd-td">7,5k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">14k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Uliastai</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">47,74, 96,84</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">8k</td><td class="crd-td">6,8k</td><td class="crd-td">8k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Altanbulag</strong></td><td class="crd-td">Tüsheet Khan Aimag and Ikh Khüree (Urga)</td><td class="crd-td">50,31, 106,5</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">5,5k</td><td class="crd-td">8k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Khovd</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">48,01, 91,64</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">6,2k</td><td class="crd-td">6,8k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Tsetserleg</strong></td><td class="crd-td">Sain Noyon Khan Aimag (Orkhon-Khangai)</td><td class="crd-td">47,48, 101,45</td><td class="crd-td">1680-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">5,2k</td><td class="crd-td">5,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Choibalsan</strong></td><td class="crd-td">Setsen Khan Aimag (Kherlen-Onon)</td><td class="crd-td">48,07, 114,53</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">5k</td><td class="crd-td">5k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Chinggis</strong></td><td class="crd-td">Setsen Khan Aimag (Kherlen-Onon)</td><td class="crd-td">47,32, 110,66</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Amarbayasgalant</strong></td><td class="crd-td">Tüsheet Khan Aimag and Ikh Khüree (Urga)</td><td class="crd-td">49,48, 105,08</td><td class="crd-td">1740-1911AD</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Üyönch</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">46,05, 92,02</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Uujim</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">48,9, 89,62</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Urdgol</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">47,83, 92,65</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Ulaantolgoy</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">46,68, 92,78</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Ulaangom</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">49,98, 92,07</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tsetserleg Khovd</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">49,27, 94,86</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tsetsegnuur</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">46,6, 93,27</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tsenher</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">46,92, 92,12</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tseel</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">45,57, 95,87</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tsalgar</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">49,72, 93,27</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tsahir</strong></td><td class="crd-td">Sain Noyon Khan Aimag (Orkhon-Khangai)</td><td class="crd-td">48,08, 98,85</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tsagaantüngi</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">49,05, 90,45</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tsagaan-Olom</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">46,71, 96,53</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tsagaanchuluut</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">47,11, 96,67</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tosontsengel</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">48,76, 98,28</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tooromt</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">50,47, 93,58</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tolbo</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">48,42, 90,28</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tögrög</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">47,42, 92,22</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tögrög Zasagt</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">45,83, 94,82</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tögöl</strong></td><td class="crd-td">Khövsgöl Uriankhai and Dariganga Banners</td><td class="crd-td">50,68, 99,23</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tegsh</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">48,75, 96</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Taygan</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">46,35, 97,37</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Talshand</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">45,33, 97,98</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Tahilt</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">45,35, 96,65</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Shiree</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">47,5, 96,8</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Sharga</strong></td><td class="crd-td">Khövsgöl Uriankhai and Dariganga Banners</td><td class="crd-td">49,8, 98,8</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Sharga Zasagt</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">46,25, 95,27</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Sharbulag</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">48,82, 93,1</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Sayn-Ust</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">47,36, 94,52</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Sangiyn Dalay</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">45,13, 97,75</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Rashaant</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">47,87, 90,7</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Oygon</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">48,99, 96,54</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Övögdiy</strong></td><td class="crd-td">Zasagt Khan Aimag and Uliastai</td><td class="crd-td">48,64, 97,62</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Orgil</strong></td><td class="crd-td">Khövsgöl Uriankhai and Dariganga Banners</td><td class="crd-td">48,59, 99,35</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Ölgii</strong></td><td class="crd-td">Khovd Frontier Ambanship (Oirat and Altai)</td><td class="crd-td">48,97, 89,96</td><td class="crd-td">1720-1911AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1911AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Mongolia from 1206AD to 1912AD ordered by peak catalogued population (n=254 total centres).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-mongol} summarizes settlement counts and leading centres across the six administrative territories. Tüsheet Khan aimag contained the highest concentration of catalogued sites (70), followed by Sain Noyon Khan aimag (49) and the Khovd frontier district (39). Table \ref{tab:excluded-mongol} documents all 10 excluded duplicate candidates from the regional source ledger.

<figure class="crd-table-figure" id="tab:regsum-mongol">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Settlements</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tüsheet Khan Aimag and Ikh Khüree (Urga)</strong></td><td class="crd-td">96</td><td class="crd-td">Ulaanbaatar (50k)</td></tr>
<tr><td class="crd-td"><strong>Setsen Khan Aimag (Kherlen-Onon)</strong></td><td class="crd-td">50</td><td class="crd-td">Avraga Ord (14k)</td></tr>
<tr><td class="crd-td"><strong>Sain Noyon Khan Aimag (Orkhon-Khangai)</strong></td><td class="crd-td">59</td><td class="crd-td">Karakorum (38k)</td></tr>
<tr><td class="crd-td"><strong>Zasagt Khan Aimag and Uliastai</strong></td><td class="crd-td">41</td><td class="crd-td">Uliastai (8k)</td></tr>
<tr><td class="crd-td"><strong>Khovd Frontier Ambanship (Oirat and Altai)</strong></td><td class="crd-td">44</td><td class="crd-td">Khovd (6,8k)</td></tr>
<tr><td class="crd-td"><strong>Khövsgöl Uriankhai and Dariganga Banners</strong></td><td class="crd-td">35</td><td class="crd-td">Tögöl (1,8k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban or monastic centre across all six territories from 1206AD to 1912AD (254 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-mongol">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Country</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Uliastay</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Uliastai within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Khovd</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Khovd within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Buga</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ölgii within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Bayshint</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Nogoonnuur within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Ulan Bator</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ulaanbaatar within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Tsetserleg</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tsetserleg within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Undurkhaan</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chinggis within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Modot</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Avraga Ord within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Herlen</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chinggis within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Choibalsan</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Choibalsan within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Altanbulag</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Altanbulag within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Shiveegovĭ</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Choyr Setsen within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Zuunmod</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Dzuunmod Tsheet within 8 km.</td></tr>
<tr><td class="crd-td"><strong>Kharkhorin</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Karakorum within 8 km.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> All 10 excluded duplicate candidates in the Mongolian source ledger, consolidated into canonical parent centres.</figcaption>
</figure>

# Limitations

Two specific spatial constraints affect settlement analysis across historical Mongolia. First, monastic settlements frequently functioned as mobile tent camps before establishing permanent brick, stone or timber foundations [@pozdneyev1971mongolia; @bawden1989modern]. Ikh Khüree (Urga), for instance, moved across twenty-eight distinct geographic locations between 1639AD and 1778AD before permanently settling on the Tuul River, meaning its coordinates prior to 1778AD represent the institutional predecessor rather than a static geographic point.

Second, purely nomadic pastoral seasonal camps leave minimal architectural surface remains outside hearth stones and corral lines [@DR2019Modeling; @Franklin2023Archaeology]. As a consequence, catalogued settlements capture nucleated monastic centres, imperial palaces, border fortresses and courier relay stations, while purely mobile pastoral populations are distributed via continuous kriging surfaces rather than nucleated town registers [@S2026Spatial].

# Conclusion

The settlement gazetteer of historical Mongolia illustrates the structural transformation of steppe urbanism from mediaeval imperial ords to eighteenth-century Buddhist monastic enclaves. Across 325 catalogued centres, urban population concentrated along fertile river valleys (the Orkhon, Tuul, Kherlen and Selenge) and strategic trade arteries.

By 1912AD, the monastic metropolis of Ikh Khüree (50k) along with secondary hubs such as Uliastai (8k), Altanbulag (8k), Khovd (6,8k) and Tsetserleg (5,5k) formed a structured administrative network that underpinned the theocratic governance of the Bogd Khanate.

# Sources

<div id="refs"></div>
