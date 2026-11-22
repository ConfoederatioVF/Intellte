---
title: "Settlement Gazetteer of Liao, Song, Jin and Yuan China"
subtitle: "JADE-III: Dynastic Capitals, Canal Ports, Frontier Prefectures and Maritime Emporia, 960AD to 1368AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: liao_song_jin_and_yuan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_liao_song_jin_and_yuan_spatial.png"
hero_caption: "Spatial distribution of 20.775 catalogued dynastic capitals, riverine ports, market towns and county seats across fourteen historical macro-regions through 1368AD."
hero_label: "fig:hero-liao-song-jin-and-yuan-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 20.775 urban, administrative, riverine, commercial and rural settlement trajectories active across China between 960AD and 1368AD (9.389.222 km²). Synthesising dynastic administrative monographs from the official dynastic histories, prefectural local gazetteers, China Historical GIS (CHGIS v6) and Harvard TGAZ 2018 historical seats, China Biographical Database (CBDB) ADDR_CODES Song-Jin-Yuan place records, Tibetan Buddhist Resource Center (TBRC) Major Tibetan Monasteries, full Song-Yuan commercial tax (*shangshui*) market towns (*zhen* and *shi*), Ministry of Housing and Urban-Rural Development (MOHURD) Traditional Ancient Villages (Batches 1 to 4), Taiwan Bureau of Cultural Heritage (BOCH) sites, Song-Yuan Hong Kong salt-yard and walled-village centres, archaeological city excavations and demographic reconstructions from Wu Songdi [@wu2000zhongguo; @mavonglahn2022cambridge; @chgis2016v6; @Xu2015Urbanization; @CBDB2026Addresses; @Ryavec2014TBRC; @MOHURD2023TraditionalVillages; @TaiwanBOCH2025Heritage], the catalogue encompasses all fourteen historical macro-regions. Coverage is densest in Huguang Middle Yangtze (4.170 sites), Zhongshu North China (3.352), Sichuan Four Circuits (3.162), Henan-Jiangbei (2.522), Jiangzhe Lower Yangtze (1.498), Jiangxi and Guangdong (1.271), Tibet Xuanzhengyuan (1.009) and Shaanxi Guanzhong (814). At the demographic summits of the twelfth and thirteenth centuries, the largest centres in the gazetteer were the Northern Song imperial capital Kaifeng (1,15M in 1102AD), Southern Song Lin'an or Hangzhou (1,15M in 1270AD), the Yuan imperial capital Dadu or Beijing (960k in 1330AD), Nanjing (380k in 1210AD), Suzhou (350k in 1210AD), the global maritime emporium of Quanzhou (340k in 1290AD), Chengdu (310k in 1210AD) and Guangzhou (280k in 1210AD) [@wu2000zhongguo; @Xu2015Urbanization; @Lin2019Shadow]. Alongside the 20.775 catalogued settlements (which aggregate 99.282 settlement-year observations averaging 4,78 per centre), the regional source ledger archives 2.500 excluded candidate entries out of 23.275 ledger-evaluated records, following 19.703 raw co-located merges and exclusions.

# Background

Urbanisation in China underwent structural transformation between the Song founding in 960AD and the Ming transition in 1368AD [@mavonglahn2022cambridge; @Xu2015Urbanization]. Under the Tang dynasty, cities had operated under strict imperial curfew within enclosed rectangular wards, with commercial activity legally restricted to designated official markets [@mavonglahn2022cambridge]. During the Northern Song commercial revolution, this rigid grid disintegrated, replaced by continuous open street markets, nighttime commercial districts and extensive suburbs expanding outside municipal city walls along canal junctions [@Lin2019Shadow; @Flckiger2019Transport]. The Grand Canal and the Huai-Yangtze waterways channelled millions of bushels of tribute grain and commercial goods, turning Bianjing or Kaifeng into a metropolis of more than one million residents [@Flckiger2019Transport; @Shi2024Analysis; @Zhao2026Nonlinear].

Following the 1127AD Jurchen conquest of the North, the urban gravity of China shifted decisively to the Lower Yangtze delta and the southeastern coast [@wu2000zhongguo; @Xu2015Urbanization]. Hangzhou grew into a global consumer metropolis described by mediaeval travellers, while maritime ports such as Quanzhou, Guangzhou, Mingzhou (Ningbo) and Fuzhou connected Chinese porcelain, silk and metal wares to Indian Ocean trading spheres [@Beaujard2019Worlds; @Wang2016From; @Schfer2020Seri]. Under the Mongol Yuan dynasty, the creation of the grand capital Dadu (modern Beijing) reoriented canal infrastructure northward through the renewed Jing-Hang Grand Canal, linking northern political dominance to southern grain basins [@mavonglahn2022cambridge; @Wei2024Formation].

# Methodology

Settlement trajectories were compiled through cross-matching CHGIS v6 and Harvard TGAZ 2018 historical seats [@chgis2016v6], CBDB ADDR_CODES Song-Jin-Yuan place records [@CBDB2026Addresses], TBRC Major Tibetan Monasteries [@Ryavec2014TBRC], full Song-Yuan commercial tax (*shangshui*) market towns (*zhen* and *shi*), MOHURD Traditional Ancient Villages (Batches 1 to 4) [@MOHURD2023TraditionalVillages], Taiwan BOCH heritage sites [@TaiwanBOCH2025Heritage], Song-Yuan Hong Kong salt-yard and walled-village centres, Wu Songdi's gazetteer tables [@wu2000zhongguo] and archaeological city survey compendia [@Xu2015Urbanization]. Each settlement was assigned WGS84 coordinates and mapped into the fourteen historical macro-regions using the five-arcminute territorial masks. Across deduplication and ledger reconciliation, 19.703 raw co-located merges and exclusions were resolved, and 2.500 excluded candidate entries were archived in the regional source ledger out of 23.275 ledger-evaluated entries as duplicate aliases, sub-county market duplicates within a 9 km proximity threshold or variant administrative spellings (consolidating variant dynastic spellings, duplicate market registries and sub-county seats into canonical prefectural or county centroids).

# Testing and Validation

Ledger reconciliation confirms 20.775 catalogued settlements (aggregating 99.282 settlement-year observations at a mean of 4,78 per centre) and 2.500 excluded candidate records archived in the ledger, accounting for all 23.275 ledger-evaluated entries with zero unaccounted records alongside 19.703 raw co-located merges and exclusions. All 20.775 records carry valid WGS84 coordinates and positive integer population observations within the 960AD to 1368AD domain. Figure \ref{fig:sett-1368} displays the rank-size curve across the 20.775 catalogued centres alongside the top fifteen settlement peaks.

<figure class="crd-figure-block" id="fig:sett-1368">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-liao-song-jin-and-yuan-settlements/fig4_liao_song_jin_and_yuan_settlements.png" alt="fig:sett-1368" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 20.775 catalogued centres of Liao, Song, Jin and Yuan China.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-1368} reports the top 45 settlements ranked by peak observed population, documenting administrative rank, provincial territory, geographic coordinates, temporal span, benchmark counts at 1102AD, 1210AD and 1290AD, and peak population with year.

<figure class="crd-table-figure" id="tab:top45-1368">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1102AD</th><th class="crd-th">1210AD</th><th class="crd-th">1290AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kaifeng</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">34,8, 114,31</td><td class="crd-td">980-1290AD</td><td class="crd-td">1,15M</td><td class="crd-td">-</td><td class="crd-td">160k</td><td class="crd-td">1,15M (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Hangzhou</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">30,27, 120,16</td><td class="crd-td">980-1290AD</td><td class="crd-td">320k</td><td class="crd-td">-</td><td class="crd-td">850k</td><td class="crd-td">1,15M (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Beijing</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">39,9, 116,41</td><td class="crd-td">980-1330AD</td><td class="crd-td">240k</td><td class="crd-td">-</td><td class="crd-td">850k</td><td class="crd-td">960k (1330AD)</td></tr>
<tr><td class="crd-td"><strong>Nanjing</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">32,06, 118,8</td><td class="crd-td">980-1290AD</td><td class="crd-td">240k</td><td class="crd-td">-</td><td class="crd-td">340k</td><td class="crd-td">380k (1223AD)</td></tr>
<tr><td class="crd-td"><strong>Suzhou</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">31,3, 120,58</td><td class="crd-td">980-1290AD</td><td class="crd-td">290k</td><td class="crd-td">-</td><td class="crd-td">320k</td><td class="crd-td">360k (1223AD)</td></tr>
<tr><td class="crd-td"><strong>Quanzhou</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">24,87, 118,68</td><td class="crd-td">1080-1290AD</td><td class="crd-td">220k</td><td class="crd-td">-</td><td class="crd-td">340k</td><td class="crd-td">340k (1290AD)</td></tr>
<tr><td class="crd-td"><strong>Chengdu</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">30,57, 104,07</td><td class="crd-td">980-1290AD</td><td class="crd-td">280k</td><td class="crd-td">-</td><td class="crd-td">95k</td><td class="crd-td">310k (1223AD)</td></tr>
<tr><td class="crd-td"><strong>Guangzhou</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">23,13, 113,26</td><td class="crd-td">980-1290AD</td><td class="crd-td">260k</td><td class="crd-td">-</td><td class="crd-td">240k</td><td class="crd-td">280k (1223AD)</td></tr>
<tr><td class="crd-td"><strong>Tingzhou</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">25,83, 116,33</td><td class="crd-td">1102-1207AD</td><td class="crd-td">26,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">280k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Fuzhou</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">26,07, 119,3</td><td class="crd-td">1080-1223AD</td><td class="crd-td">210k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">250k (1223AD)</td></tr>
<tr><td class="crd-td"><strong>Luoyang</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">34,62, 112,45</td><td class="crd-td">980-1290AD</td><td class="crd-td">230k</td><td class="crd-td">-</td><td class="crd-td">85k</td><td class="crd-td">230k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Nanchang</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">28,68, 115,86</td><td class="crd-td">1080-1223AD</td><td class="crd-td">190k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">220k (1223AD)</td></tr>
<tr><td class="crd-td"><strong>Yangzhou</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">32,39, 119,41</td><td class="crd-td">1080-1290AD</td><td class="crd-td">200k</td><td class="crd-td">-</td><td class="crd-td">170k</td><td class="crd-td">200k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Ningbo</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">29,87, 121,54</td><td class="crd-td">1080-1290AD</td><td class="crd-td">150k</td><td class="crd-td">-</td><td class="crd-td">185k</td><td class="crd-td">200k (1223AD)</td></tr>
<tr><td class="crd-td"><strong>Xi'an</strong></td><td class="crd-td">Shaanxi Province</td><td class="crd-td">34,26, 108,95</td><td class="crd-td">980-1290AD</td><td class="crd-td">190k</td><td class="crd-td">-</td><td class="crd-td">140k</td><td class="crd-td">190k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Wuhan</strong></td><td class="crd-td">Huguang Province</td><td class="crd-td">30,59, 114,31</td><td class="crd-td">1080-1290AD</td><td class="crd-td">165k</td><td class="crd-td">-</td><td class="crd-td">150k</td><td class="crd-td">190k (1223AD)</td></tr>
<tr><td class="crd-td"><strong>Changsha</strong></td><td class="crd-td">Huguang Province</td><td class="crd-td">28,23, 112,94</td><td class="crd-td">1080-1223AD</td><td class="crd-td">140k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">180k (1223AD)</td></tr>
<tr><td class="crd-td"><strong>Yinchuan</strong></td><td class="crd-td">Western Xia and Gansu Province</td><td class="crd-td">38,49, 106,23</td><td class="crd-td">1080-1290AD</td><td class="crd-td">150k</td><td class="crd-td">-</td><td class="crd-td">65k</td><td class="crd-td">160k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">37,87, 112,55</td><td class="crd-td">1080-1290AD</td><td class="crd-td">160k</td><td class="crd-td">-</td><td class="crd-td">110k</td><td class="crd-td">160k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Shangdu</strong></td><td class="crd-td">Inner Mongolia Steppe and Shangdu</td><td class="crd-td">42,36, 116,18</td><td class="crd-td">980-1330AD</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">145k</td><td class="crd-td">155k (1330AD)</td></tr>
<tr><td class="crd-td"><strong>Jiang</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">35,61, 111,22</td><td class="crd-td">980-1368AD</td><td class="crd-td">58,7k</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">151k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Yuan</strong></td><td class="crd-td">Western Xia and Gansu Province</td><td class="crd-td">36,01, 106,28</td><td class="crd-td">980-1290AD</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">150,7k (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Bao</strong></td><td class="crd-td">Dali Kingdom and Yunnan Province</td><td class="crd-td">25,66, 101,56</td><td class="crd-td">980-1223AD</td><td class="crd-td">150k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">150k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Shu</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">30,63, 103,67</td><td class="crd-td">980-1368AD</td><td class="crd-td">36,4k</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">150k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Daming</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">36,29, 115,14</td><td class="crd-td">968-1368AD</td><td class="crd-td">150k</td><td class="crd-td">-</td><td class="crd-td">8,6k</td><td class="crd-td">150k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Qiongzhou</strong></td><td class="crd-td">Huguang Province</td><td class="crd-td">20,01, 110,36</td><td class="crd-td">980-1368AD</td><td class="crd-td">36,3k</td><td class="crd-td">-</td><td class="crd-td">150k</td><td class="crd-td">150k (1290AD)</td></tr>
<tr><td class="crd-td"><strong>Linjiang</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">28,02, 115,4</td><td class="crd-td">980-1368AD</td><td class="crd-td">136,6k</td><td class="crd-td">-</td><td class="crd-td">71,4k</td><td class="crd-td">148,5k (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Hu</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">30,86, 120,1</td><td class="crd-td">968-1368AD</td><td class="crd-td">148,4k</td><td class="crd-td">-</td><td class="crd-td">112k</td><td class="crd-td">148,4k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Jun</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">35,68, 114,6</td><td class="crd-td">1005-1207AD</td><td class="crd-td">44,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">148,4k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Shu</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">30,63, 116,57</td><td class="crd-td">980-1368AD</td><td class="crd-td">47,4k</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">148k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Bin</strong></td><td class="crd-td">Huguang Province</td><td class="crd-td">23,24, 108,83</td><td class="crd-td">966-1368AD</td><td class="crd-td">121k</td><td class="crd-td">-</td><td class="crd-td">16,8k</td><td class="crd-td">147,9k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Mei</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">30,05, 103,83</td><td class="crd-td">962-1368AD</td><td class="crd-td">35,9k</td><td class="crd-td">-</td><td class="crd-td">35,6k</td><td class="crd-td">147,8k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Mo</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">38,69, 116,1</td><td class="crd-td">980-1223AD</td><td class="crd-td">99k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">147,4k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Yuan</strong></td><td class="crd-td">Huguang Province</td><td class="crd-td">27,45, 109,68</td><td class="crd-td">962-1368AD</td><td class="crd-td">42,3k</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">147,3k (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Yongning</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">38,46, 115,46</td><td class="crd-td">980-1368AD</td><td class="crd-td">147,2k</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">147,2k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Wu</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">39,03, 111,79</td><td class="crd-td">980-1270AD</td><td class="crd-td">63,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">146,9k (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Xinghua</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">25,43, 119,01</td><td class="crd-td">980-1368AD</td><td class="crd-td">146,8k</td><td class="crd-td">-</td><td class="crd-td">31,4k</td><td class="crd-td">146,8k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Wu</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">29,1, 119,65</td><td class="crd-td">968-1368AD</td><td class="crd-td">63,1k</td><td class="crd-td">-</td><td class="crd-td">84,5k</td><td class="crd-td">146,7k (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Ansu</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">39,02, 115,65</td><td class="crd-td">980-1368AD</td><td class="crd-td">97k</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">146,3k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Jiang</strong></td><td class="crd-td">Huguang Province</td><td class="crd-td">29,72, 115,99</td><td class="crd-td">967-1368AD</td><td class="crd-td">56,9k</td><td class="crd-td">-</td><td class="crd-td">42,1k</td><td class="crd-td">146,2k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Daming</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">36,3, 115,21</td><td class="crd-td">980-1368AD</td><td class="crd-td">119,3k</td><td class="crd-td">-</td><td class="crd-td">14,2k</td><td class="crd-td">145,9k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>En</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">37,07, 115,62</td><td class="crd-td">980-1368AD</td><td class="crd-td">145,8k</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">145,8k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Peng</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">31,02, 106,48</td><td class="crd-td">1270-1270AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">145,3k (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Peng</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">31, 103,92</td><td class="crd-td">980-1223AD</td><td class="crd-td">35,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">144,5k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Fengxiang</strong></td><td class="crd-td">Shaanxi Province</td><td class="crd-td">34,29, 107,84</td><td class="crd-td">980-1330AD</td><td class="crd-td">143,3k</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">143,3k (1102AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Liao, Song, Jin and Yuan China ordered by peak catalogued population (n=20.775 total).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-1368} summarises settlement counts across all fourteen historical sub-regions alongside the leading urban centre in each region. Table \ref{tab:excluded-1368} details the leading 30 of 2.500 excluded candidate entries archived in the source ledger (from 23.275 ledger-evaluated entries and 19.703 raw co-located merges and exclusions).

<figure class="crd-table-figure" id="tab:regsum-1368">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhongshusheng North China</strong></td><td class="crd-td">3352</td><td class="crd-td">Beijing (960k)</td></tr>
<tr><td class="crd-td"><strong>Henan-Jiangbei Province</strong></td><td class="crd-td">2522</td><td class="crd-td">Kaifeng (1,15M)</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province</strong></td><td class="crd-td">814</td><td class="crd-td">Xi'an (190k)</td></tr>
<tr><td class="crd-td"><strong>Western Xia and Gansu Province</strong></td><td class="crd-td">813</td><td class="crd-td">Yinchuan (160k)</td></tr>
<tr><td class="crd-td"><strong>Jiangzhe Province</strong></td><td class="crd-td">1499</td><td class="crd-td">Hangzhou (1,15M)</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">1269</td><td class="crd-td">Guangzhou (280k)</td></tr>
<tr><td class="crd-td"><strong>Huguang Province</strong></td><td class="crd-td">4170</td><td class="crd-td">Wuhan (190k)</td></tr>
<tr><td class="crd-td"><strong>Sichuan Province</strong></td><td class="crd-td">3162</td><td class="crd-td">Chengdu (310k)</td></tr>
<tr><td class="crd-td"><strong>Liaoyang Province</strong></td><td class="crd-td">736</td><td class="crd-td">Huining (110k)</td></tr>
<tr><td class="crd-td"><strong>Dali Kingdom and Yunnan Province</strong></td><td class="crd-td">798</td><td class="crd-td">Bao (150k)</td></tr>
<tr><td class="crd-td"><strong>Tibet and Qinghai</strong></td><td class="crd-td">1009</td><td class="crd-td">Xining (65k)</td></tr>
<tr><td class="crd-td"><strong>Xinjiang</strong></td><td class="crd-td">147</td><td class="crd-td">Kashgar (65k)</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia Steppe and Shangdu</strong></td><td class="crd-td">420</td><td class="crd-td">Shangdu (155k)</td></tr>
<tr><td class="crd-td"><strong>Taiwan and Penghu</strong></td><td class="crd-td">64</td><td class="crd-td">Liuqiu (15,6k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban or administrative centre across all fourteen historical sub-regions to 1368AD (20.775 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-1368">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Linhuang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Bairin Left within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Dading</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ningcheng within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Magong</strong></td><td class="crd-td">Taiwan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Coordinates (23.569, 119.566) lie outside liao_song_jin_and_yuan areal mask.</td></tr>
<tr><td class="crd-td"><strong>Tingzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tingzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Chaozhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chaozhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Tingzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tingzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Níngjiāngzhōu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Fuyu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jǐnzhōu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jinzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yíngzhōu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yǐngzhōu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yīngzhōu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yǐngzhōu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Dōngshèngzhōu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Dongsheng within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Chángchūnxiàn</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chángchūnzhōu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Lónghuàxiàn</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Lónghuàzhōu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Pínzhōu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Bīnzhōu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Huáirénxiàn</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yúnzhōngxiàn within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jīnchéngxiàn</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yǐngzhōu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Run</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zhenjiang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jiaxing</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiaxing within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Hezhong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Hezhong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jingjiang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jingjiang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jingjiang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jingjiang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Huzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Hu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Ansu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ansu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Wuzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yue</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yue within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jiangling</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiangling_Huguang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jiangling</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiangling_Huguang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Changde</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Changde within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Changzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Taizhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tai within 2 km.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 2.500 excluded candidate settlements in the Liao, Song, Jin and Yuan source ledger, consolidated into canonical parent seats.</figcaption>
</figure>

# Limitations

Two spatial and documentary constraints affect the gazetteer. First, historical document preservation and modern heritage registration vary markedly across circuits; Jurchen and Mongol military destruction in Henan, Hebei and Sichuan destroyed municipal tax rolls that survived far more intact in Jiangzhe and Jiangxi [@wu2000zhongguo; @Stephen2012Deep], while the integration of Song-Yuan commercial tax (*shangshui*) market lists, MOHURD Traditional Ancient Villages (Batches 1 to 4) [@MOHURD2023TraditionalVillages] and Taiwan BOCH sites [@TaiwanBOCH2025Heritage] concentrates rural and market coverage in regions with dense surviving architectural and fiscal records. Second, in sparse pastoral and mountainous zones such as the Inner Mongolia steppe, the Tibetan plateau and Xinjiang, settlement records reflect fortified administrative garrisons and monastic loci—including TBRC Tibetan monasteries [@Ryavec2014TBRC]—rather than nucleated agrarian market towns [@Wu2025Historically; @Dugdale2019Pagodas].

# Sources

<div id="refs"></div>
