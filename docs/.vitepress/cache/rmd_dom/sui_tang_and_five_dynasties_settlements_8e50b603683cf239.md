---
title: "Settlement Gazetteer of the Sui, Tang and Five Dynasties"
subtitle: "JADE: Imperial Capitals, Canal Ports, Frontier Garrisons and Prefectural Seats, 589AD to 960AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: sui_tang_and_five_dynasties_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_sui_tang_and_five_dynasties_spatial.png"
hero_caption: "Spatial distribution of 9.885 catalogued imperial, commercial, prefectural, market and monastic settlements across thirteen historical circuits and borderlands of China from 589AD to 960AD."
hero_label: "fig:hero-sui-tang-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents 9.885 urban, commercial, military, monastic and market settlement trajectories—comprising 46.237 settlement-year observations at a mean of 4,68 per centre—active across the 9.389.222 km² territory of historical China between the Sui reunification in 589AD and the accession of the Song dynasty in 960AD under JADE. Synthesising dynastic geography monographs (*Suishu Dilizhi*, *Jiu Tangshu Dilizhi*, *Yuanhe Junxian Tuzhi*), modern historical demographic reconstructions by Dong Guodong, China Historical GIS (CHGIS V6) administrative layers, Harvard TGAZ 2018 Sui-Tang seats, TBRC early Tibetan monasteries, China Biographical Database historical address records (ADDR\_CODES), a deterministic Tang *caoshi* and *zhen* market town network along the Grand Canal and core circuits, early-batch MOHURD Traditional Ancient Villages, Taiwan BOCH heritage sites, and Tang Hong Kong coastal hubs such as Tuen Mun [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge; @chgis_v6_2016; @xiong2000sui; @CBDB2026Addresses; @MOHURD2023TraditionalVillages; @TaiwanBOCH2025Heritage], the catalogue spans all thirteen historical circuits and borderlands, led by Jiangnan Dao (1.395 sites), Tubo and Nanzhao (1.118), Jiannan Dao (1.032) and Henan Dao (992). Across four centuries of demographic transition, the largest urban centres in the gazetteer are the primary western capital Chang'an (Xi'an, reaching 950k in 742AD), the eastern capital Luoyang (550k in 742AD), the canal grain transshipment metropolis Bianzhou (Kaifeng, 480k in 960AD), the southern commercial entrepot Yangzhou (320k in 742AD), Chengdu (280k in 742AD), Hangzhou (260k in 960AD), Suzhou (240k in 742AD), Taiyuan (220k in 742AD), Jinling (Nanjing, 210k in 960AD) and Guangzhou (200k in 742AD) [@xiong2000sui; @Huang2021Rise; @Zhang2021Research; @Chen2021Discussion]. Beside the 9.885 included centres, the regional source ledger archives 2.500 excluded duplicate candidates (representing 16.232 raw co-located merges and exclusions) across 12.385 ledger-evaluated entries, leaving 0 unaccounted.

# Background

Settlement patterns in China between 589AD and 960AD reflect two structural transformations in urban geography: the planned construction of colossal walled administrative capitals in the northern river basins and the commercial explosion of market towns along the Grand Canal and southern waterways [@xiong2000sui; @Flckiger2019Transport; @Yin2021Comparative]. During the Sui and early Tang eras, urban design adhered to classical canonical principles codified in the *Kaogongji*, exemplifying symmetrical orthogonal street grids, strictly partitioned residential wards (*fang*) bounded by perimeter walls, and segregated government-supervised markets (*shi*) subject to evening curfews [@xiong2000sui; @Chen2021Discussion]. Daxing/Chang'an (84 km²) and Luoyang (47 km²) embodied this administrative monumentality on a scale unprecedented in pre-industrial world history [@xiong2000sui; @Yin2021Comparative].

Following the excavation of the Grand Canal (605AD to 610AD) and the acceleration of southern land reclamation, commercial vitality outgrew classical administrative enclosures [@Huang2021Rise; @Flckiger2019Transport]. Along the lower Yangtze and the canal corridors, cities such as Yangzhou, Suzhou, Hangzhou and Kaifeng developed thriving extramural suburbs (*xiang* and *shi*), night markets (*yeshi*), and riverfront merchant wharves that transcended ward wall restrictions [@WANG2025Influence; @Zhang2021Research; @Huang2023Spatio]. In the wake of the An Lushan Rebellion (755AD to 763AD), as northern plain cities suffered devastation and military fragmentation, southern urban networks expanded rapidly, establishing the commercial foundations for the mediaeval urban revolution of the Song dynasty [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Song2017State].

# Methodology

Settlement records were systematically harmonised from China Historical GIS (CHGIS V6) administrative time series, Harvard TGAZ 2018 Sui-Tang seats, TBRC early Tibetan monasteries, CBDB historical address records (ADDR\_CODES), the historical atlas of Tan Qixiang, Dong Guodong's demographic survey of Sui and Tang prefectures, a deterministic Tang *caoshi* and *zhen* market town network along the Grand Canal and core circuits, early-batch MOHURD Traditional Ancient Villages, Taiwan BOCH sites, Tang Hong Kong coastal hubs such as Tuen Mun, and archaeological registers of dynastic walled sites [@chgis_v6_2016; @dong_guodong_2002_zhongguo_renkou_shi_vol2; @hosner_2016_pangaea; @xiong2000sui; @CBDB2026Addresses; @MOHURD2023TraditionalVillages; @TaiwanBOCH2025Heritage]. All 9.885 catalogued centres carry verified WGS84 geographic coordinates, administrative hierarchy classifications (capital, superior prefecture, standard prefecture, county seat, market town, monastery, garrison) and 46.237 longitudinal settlement-year observations across historical benchmark years (mean 4,68 per centre).

In the regional source ledger, 2.500 candidate records are archived as excluded duplicate aliases out of 12.385 ledger-evaluated entries, following 16.232 raw co-located merges and exclusions situated within 10 km to 12 km of higher-ranking canonical settlements (for instance, secondary county wards, temporary military cantonments and duplicate phonetic transliterations consolidated into parent prefectural seats), ensuring zero double-counting across the spatial database.

# Testing and Validation

Ledger reconciliation confirms 9.885 included settlements (46.237 settlement-year observations, mean 4,68 per centre) and 2.500 archived excluded duplicate aliases across 12.385 ledger-evaluated entries, alongside 16.232 raw co-located merges and exclusions (0 unaccounted). All 9.885 catalogued centres map directly onto the thirteen sub-regional territorial masks. Figure \ref{fig:sett-sui-tang} displays the rank-size distribution and the leading fifteen settlement population peaks across the database.

<figure class="crd-figure-block" id="fig:sett-sui-tang">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-sui-tang-and-five-dynasties-settlements/fig4_sui_tang_and_five_dynasties_settlements.png" alt="fig:sett-sui-tang" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 9.885 catalogued centres of China from 589AD to 960AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-sui-tang} reports the top 45 settlements in the gazetteer ranked by peak catalogued population, spanning imperial capitals, Grand Canal commercial marts, southern maritime ports and frontier regional capitals.

<figure class="crd-table-figure" id="tab:top45-sui-tang">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Circuit</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">609AD</th><th class="crd-th">742AD</th><th class="crd-th">960AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Xi'an</strong></td><td class="crd-td">Guannei Circuit</td><td class="crd-td">34,26, 108,95</td><td class="crd-td">609-820AD</td><td class="crd-td">450k</td><td class="crd-td">950k</td><td class="crd-td">-</td><td class="crd-td">980k (752AD)</td></tr>
<tr><td class="crd-td"><strong>Luoyang</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">34,62, 112,45</td><td class="crd-td">609-820AD</td><td class="crd-td">420k</td><td class="crd-td">550k</td><td class="crd-td">-</td><td class="crd-td">550k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Yangzhou</strong></td><td class="crd-td">Huainan Circuit</td><td class="crd-td">32,39, 119,41</td><td class="crd-td">609-820AD</td><td class="crd-td">160k</td><td class="crd-td">320k</td><td class="crd-td">-</td><td class="crd-td">340k (752AD)</td></tr>
<tr><td class="crd-td"><strong>Kaifeng</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">34,8, 114,31</td><td class="crd-td">609-820AD</td><td class="crd-td">110k</td><td class="crd-td">240k</td><td class="crd-td">-</td><td class="crd-td">280k (820AD)</td></tr>
<tr><td class="crd-td"><strong>Chengdu</strong></td><td class="crd-td">Jiannan Circuit</td><td class="crd-td">30,57, 104,07</td><td class="crd-td">609-820AD</td><td class="crd-td">170k</td><td class="crd-td">280k</td><td class="crd-td">-</td><td class="crd-td">280k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Suzhou</strong></td><td class="crd-td">Huainan Circuit</td><td class="crd-td">31,3, 120,58</td><td class="crd-td">609-820AD</td><td class="crd-td">140k</td><td class="crd-td">240k</td><td class="crd-td">-</td><td class="crd-td">250k (752AD)</td></tr>
<tr><td class="crd-td"><strong>Hangzhou</strong></td><td class="crd-td">Jiangnan Circuit</td><td class="crd-td">30,27, 120,16</td><td class="crd-td">609-820AD</td><td class="crd-td">95k</td><td class="crd-td">210k</td><td class="crd-td">-</td><td class="crd-td">240k (820AD)</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">Hedong Circuit</td><td class="crd-td">37,87, 112,55</td><td class="crd-td">609-820AD</td><td class="crd-td">150k</td><td class="crd-td">220k</td><td class="crd-td">-</td><td class="crd-td">220k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Guangzhou</strong></td><td class="crd-td">Lingnan Circuit</td><td class="crd-td">23,13, 113,26</td><td class="crd-td">609-820AD</td><td class="crd-td">110k</td><td class="crd-td">200k</td><td class="crd-td">-</td><td class="crd-td">200k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Nanchang</strong></td><td class="crd-td">Jiangnan Circuit</td><td class="crd-td">28,68, 115,86</td><td class="crd-td">742-742AD</td><td class="crd-td">-</td><td class="crd-td">150k</td><td class="crd-td">-</td><td class="crd-td">150k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Beijing</strong></td><td class="crd-td">Hebei Circuit</td><td class="crd-td">39,9, 116,41</td><td class="crd-td">609-820AD</td><td class="crd-td">110k</td><td class="crd-td">140k</td><td class="crd-td">-</td><td class="crd-td">145k (752AD)</td></tr>
<tr><td class="crd-td"><strong>Nanjing</strong></td><td class="crd-td">Huainan Circuit</td><td class="crd-td">32,06, 118,8</td><td class="crd-td">609-820AD</td><td class="crd-td">140k</td><td class="crd-td">110k</td><td class="crd-td">-</td><td class="crd-td">140k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Qinghe</strong></td><td class="crd-td">Hebei Circuit</td><td class="crd-td">37,09, 115,62</td><td class="crd-td">598-960AD</td><td class="crd-td">130,6k</td><td class="crd-td">33,7k</td><td class="crd-td">1,2k</td><td class="crd-td">130,6k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Wuhan</strong></td><td class="crd-td">Shannan Circuit</td><td class="crd-td">30,59, 114,31</td><td class="crd-td">609-820AD</td><td class="crd-td">75k</td><td class="crd-td">120k</td><td class="crd-td">-</td><td class="crd-td">120k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Wuyang</strong></td><td class="crd-td">Hebei Circuit</td><td class="crd-td">36,3, 115,21</td><td class="crd-td">598-960AD</td><td class="crd-td">95,2k</td><td class="crd-td">34,2k</td><td class="crd-td">14k</td><td class="crd-td">95,2k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Dali</strong></td><td class="crd-td">Tubo Tibetan Empire and Nanzhao</td><td class="crd-td">25,61, 100,27</td><td class="crd-td">752-820AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">95k (820AD)</td></tr>
<tr><td class="crd-td"><strong>Fuzhou</strong></td><td class="crd-td">Jiangnan Circuit</td><td class="crd-td">26,07, 119,3</td><td class="crd-td">742-742AD</td><td class="crd-td">-</td><td class="crd-td">85k</td><td class="crd-td">-</td><td class="crd-td">85k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Changsha</strong></td><td class="crd-td">Jiangnan Circuit</td><td class="crd-td">28,23, 112,94</td><td class="crd-td">742-742AD</td><td class="crd-td">-</td><td class="crd-td">85k</td><td class="crd-td">-</td><td class="crd-td">85k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Yingchuan</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">34,03, 113,81</td><td class="crd-td">598-960AD</td><td class="crd-td">84,2k</td><td class="crd-td">34,1k</td><td class="crd-td">2,4k</td><td class="crd-td">84,2k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Hengshan</strong></td><td class="crd-td">Jiangnan Circuit</td><td class="crd-td">26,9, 112,6</td><td class="crd-td">598-960AD</td><td class="crd-td">79,5k</td><td class="crd-td">35,2k</td><td class="crd-td">1,4k</td><td class="crd-td">79,5k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Xindu</strong></td><td class="crd-td">Hebei Circuit</td><td class="crd-td">37,57, 115,56</td><td class="crd-td">593-960AD</td><td class="crd-td">77,6k</td><td class="crd-td">36,4k</td><td class="crd-td">2,4k</td><td class="crd-td">77,6k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Jinan</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">36,65, 117,12</td><td class="crd-td">609-742AD</td><td class="crd-td">55k</td><td class="crd-td">75k</td><td class="crd-td">-</td><td class="crd-td">75k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Shangjing</strong></td><td class="crd-td">Liaodong and Bohai Northeast</td><td class="crd-td">44,11, 129,14</td><td class="crd-td">609-900AD</td><td class="crd-td">2,1k</td><td class="crd-td">21,6k</td><td class="crd-td">-</td><td class="crd-td">75k (820AD)</td></tr>
<tr><td class="crd-td"><strong>Sufu</strong></td><td class="crd-td">Tubo Tibetan Empire and Nanzhao</td><td class="crd-td">25,24, 101,15</td><td class="crd-td">742-900AD</td><td class="crd-td">-</td><td class="crd-td">74,6k</td><td class="crd-td">-</td><td class="crd-td">74,6k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">Hedong Circuit</td><td class="crd-td">37,74, 112,49</td><td class="crd-td">598-639AD</td><td class="crd-td">74,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">74,3k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Hejian</strong></td><td class="crd-td">Hebei Circuit</td><td class="crd-td">38,44, 116,09</td><td class="crd-td">597-960AD</td><td class="crd-td">73,7k</td><td class="crd-td">33,6k</td><td class="crd-td">2,4k</td><td class="crd-td">73,7k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Wuwei</strong></td><td class="crd-td">Longyou Circuit and Western Regions</td><td class="crd-td">37,93, 102,64</td><td class="crd-td">598-960AD</td><td class="crd-td">55k</td><td class="crd-td">68k</td><td class="crd-td">24,8k</td><td class="crd-td">73,3k (752AD)</td></tr>
<tr><td class="crd-td"><strong>Hengshan</strong></td><td class="crd-td">Hebei Circuit</td><td class="crd-td">38,15, 114,59</td><td class="crd-td">598-609AD</td><td class="crd-td">72,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">72,3k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Runan</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">33, 114,36</td><td class="crd-td">596-960AD</td><td class="crd-td">68,5k</td><td class="crd-td">35,5k</td><td class="crd-td">2,9k</td><td class="crd-td">68,5k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Hedong</strong></td><td class="crd-td">Hedong Circuit</td><td class="crd-td">34,84, 110,33</td><td class="crd-td">592-960AD</td><td class="crd-td">67k</td><td class="crd-td">33,8k</td><td class="crd-td">2,2k</td><td class="crd-td">67k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Zhao</strong></td><td class="crd-td">Hebei Circuit</td><td class="crd-td">37,75, 114,77</td><td class="crd-td">600-960AD</td><td class="crd-td">65,3k</td><td class="crd-td">31,8k</td><td class="crd-td">1,3k</td><td class="crd-td">65,3k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Liang</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">34,37, 115,6</td><td class="crd-td">598-900AD</td><td class="crd-td">64,3k</td><td class="crd-td">36,2k</td><td class="crd-td">-</td><td class="crd-td">64,3k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Jiyin</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">35,04, 115,43</td><td class="crd-td">598-900AD</td><td class="crd-td">64,2k</td><td class="crd-td">36,1k</td><td class="crd-td">-</td><td class="crd-td">64,2k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Pingyuan</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">37,34, 116,57</td><td class="crd-td">598-960AD</td><td class="crd-td">61,2k</td><td class="crd-td">35,7k</td><td class="crd-td">1,6k</td><td class="crd-td">61,2k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Beihai</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">36,69, 118,48</td><td class="crd-td">598-960AD</td><td class="crd-td">61,2k</td><td class="crd-td">32,8k</td><td class="crd-td">1,7k</td><td class="crd-td">61,2k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Qi</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">36,67, 116,98</td><td class="crd-td">598-960AD</td><td class="crd-td">61k</td><td class="crd-td">32,4k</td><td class="crd-td">3k</td><td class="crd-td">61k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Ji</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">35,42, 114,07</td><td class="crd-td">609-960AD</td><td class="crd-td">10,1k</td><td class="crd-td">59,4k</td><td class="crd-td">3,3k</td><td class="crd-td">59,4k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Henei</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">35,09, 112,94</td><td class="crd-td">592-960AD</td><td class="crd-td">58,7k</td><td class="crd-td">34,8k</td><td class="crd-td">1,5k</td><td class="crd-td">58,7k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Lhasa</strong></td><td class="crd-td">Tubo Tibetan Empire and Nanzhao</td><td class="crd-td">29,65, 91,17</td><td class="crd-td">639-820AD</td><td class="crd-td">-</td><td class="crd-td">55k</td><td class="crd-td">-</td><td class="crd-td">55k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Chongqing</strong></td><td class="crd-td">Jiannan Circuit</td><td class="crd-td">29,56, 106,55</td><td class="crd-td">742-742AD</td><td class="crd-td">-</td><td class="crd-td">55k</td><td class="crd-td">-</td><td class="crd-td">55k (742AD)</td></tr>
<tr><td class="crd-td"><strong>Liaoyang</strong></td><td class="crd-td">Liaodong and Bohai Northeast</td><td class="crd-td">41,27, 123,17</td><td class="crd-td">609-934AD</td><td class="crd-td">32k</td><td class="crd-td">45k</td><td class="crd-td">-</td><td class="crd-td">55k (900AD)</td></tr>
<tr><td class="crd-td"><strong>Pengcheng</strong></td><td class="crd-td">Huainan Circuit</td><td class="crd-td">34,27, 117,19</td><td class="crd-td">598-960AD</td><td class="crd-td">54k</td><td class="crd-td">32,8k</td><td class="crd-td">1,2k</td><td class="crd-td">54k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Bohai</strong></td><td class="crd-td">Henan Circuit</td><td class="crd-td">37,62, 117,57</td><td class="crd-td">597-960AD</td><td class="crd-td">53,8k</td><td class="crd-td">11,7k</td><td class="crd-td">2,1k</td><td class="crd-td">53,8k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Shangdang</strong></td><td class="crd-td">Hedong Circuit</td><td class="crd-td">36,18, 113,1</td><td class="crd-td">598-960AD</td><td class="crd-td">52,8k</td><td class="crd-td">33,4k</td><td class="crd-td">1,5k</td><td class="crd-td">52,8k (609AD)</td></tr>
<tr><td class="crd-td"><strong>Wu'an</strong></td><td class="crd-td">Hebei Circuit</td><td class="crd-td">36,7, 114,72</td><td class="crd-td">592-960AD</td><td class="crd-td">52,2k</td><td class="crd-td">34,6k</td><td class="crd-td">1,7k</td><td class="crd-td">52,2k (609AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in China from 589AD to 960AD ordered by peak catalogued population (n=9.885 total centres).</figcaption>
</figure>

## Circuit Distribution and Ledger Exclusions

Table \ref{tab:regsum-sui-tang} summarises settlement counts and leading centres across the thirteen administrative and frontier territories. Jiangnan Dao contained the highest concentration of catalogued sites (1.395), followed by Tubo and Nanzhao (1.118), Jiannan Dao (1.032) and Henan Dao (992). Table \ref{tab:excluded-sui-tang} documents the leading 30 of 2.500 archived excluded duplicate candidates (within 16.232 raw co-located merges and exclusions) from the regional source ledger.

<figure class="crd-table-figure" id="tab:regsum-sui-tang">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Circuit or Frontier</th><th class="crd-th">Settlements</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Guannei Circuit</strong></td><td class="crd-td">616</td><td class="crd-td">Xi'an (980k)</td></tr>
<tr><td class="crd-td"><strong>Henan Circuit</strong></td><td class="crd-td">992</td><td class="crd-td">Luoyang (550k)</td></tr>
<tr><td class="crd-td"><strong>Hebei Circuit</strong></td><td class="crd-td">719</td><td class="crd-td">Beijing (145k)</td></tr>
<tr><td class="crd-td"><strong>Hedong Circuit</strong></td><td class="crd-td">988</td><td class="crd-td">Taiyuan (220k)</td></tr>
<tr><td class="crd-td"><strong>Longyou Circuit and Western Regions</strong></td><td class="crd-td">584</td><td class="crd-td">Wuwei (73,3k)</td></tr>
<tr><td class="crd-td"><strong>Shannan Circuit</strong></td><td class="crd-td">402</td><td class="crd-td">Wuhan (120k)</td></tr>
<tr><td class="crd-td"><strong>Huainan Circuit</strong></td><td class="crd-td">710</td><td class="crd-td">Yangzhou (340k)</td></tr>
<tr><td class="crd-td"><strong>Jiangnan Circuit</strong></td><td class="crd-td">1395</td><td class="crd-td">Hangzhou (240k)</td></tr>
<tr><td class="crd-td"><strong>Jiannan Circuit</strong></td><td class="crd-td">1032</td><td class="crd-td">Chengdu (280k)</td></tr>
<tr><td class="crd-td"><strong>Lingnan Circuit</strong></td><td class="crd-td">847</td><td class="crd-td">Guangzhou (200k)</td></tr>
<tr><td class="crd-td"><strong>Liaodong and Bohai Northeast</strong></td><td class="crd-td">417</td><td class="crd-td">Shangjing (75k)</td></tr>
<tr><td class="crd-td"><strong>Tubo Tibetan Empire and Nanzhao</strong></td><td class="crd-td">1118</td><td class="crd-td">Dali (95k)</td></tr>
<tr><td class="crd-td"><strong>Taiwan</strong></td><td class="crd-td">65</td><td class="crd-td">Liuqiu (11,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban centre across all thirteen circuits and borderlands from 589AD to 960AD (9.885 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-sui-tang">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kucha</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Kucha within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Khotan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Khotan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Dunhuang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Dunhuang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Beiting</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Beshbalik within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Wuwei</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wuwei within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xiangyang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xiang_Shannan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Dingxiang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Lan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Loufan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Fen</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xihe within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Qin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yangcheng within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jiang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiang_Hedong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Shangdang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Shangdang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Lu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Shangdang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Ci</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wencheng within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Pingyang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Hedong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Hedong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Hezhong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Hedong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xi</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Daning within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Ze</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Gaoping within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Wei</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wuyang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Wei</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wuyang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Boling</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Boling within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Ding</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Boling within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Guangping</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wu'an within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Min</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wu'an within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Qinghe</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Qinghe within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Hejian</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Hejian within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Hejian within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Mo</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wen'an within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xindu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xindu within 2 km.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 2.500 archived excluded duplicate candidates (within 16.232 raw co-located merges and exclusions) in the Sui, Tang and Five Dynasties source ledger, consolidated into canonical parent cities.</figcaption>
</figure>

# Limitations

Two spatial and methodological constraints govern settlement analysis across the Sui, Tang and Five Dynasties period. First, official cadastral returns rarely differentiated between intramural walled populations and extramural commercial suburbs [@xiong2000sui; @WANG2025Influence]. For major trading hubs such as Yangzhou, Kaifeng, Chengdu and Guangzhou, population figures aggregate both the administrative citadel and the sprawling waterborne merchant quarters along the canal banks and riverfronts [@Huang2021Rise; @Chen2023Boat]. Similarly, while the deterministic Tang *caoshi* and *zhen* market town network, CBDB historical address records [@CBDB2026Addresses], early-batch MOHURD Traditional Ancient Villages [@MOHURD2023TraditionalVillages] and Tang Hong Kong coastal hubs such as Tuen Mun greatly expand rural and coastal coverage, disaggregated populations for minor market nodes remain dependent on hierarchical scaling.

Second, frontier settlement records across Tibet, Xinjiang, Yunnan, Taiwan and Manchuria reflect fortified administrative seats, oasis towns, early Tibetan monastic centres (from TBRC and Harvard TGAZ 2018), Taiwan BOCH heritage sites [@TaiwanBOCH2025Heritage] and royal capitals (such as Shangjing Longquanfu and Dali), while pastoral nomadic and mountain populations remained mobile [@hansen2012silk; @Beaujard2019Worlds]. Consequently, mobile populations are captured primarily through continuous kriging surfaces rather than nucleated town rosters [@paciorek2006spatial; @hosner_2016_pangaea].

# Conclusion

The settlement gazetteer of the Sui, Tang and Five Dynasties illustrates the profound restructuring of Chinese urbanism across four centuries. From the planned imperial capitals of Chang'an (950k) and Luoyang (550k) to the canal commercial emporia of Kaifeng (480k) and Yangzhou (320k), urban population mirrored the broader demographic gravity shift from the northern plains to the southern river basins.

Across 9.885 catalogued settlements and 46.237 settlement-year observations, the gazetteer captures the network of administrative, monastic and market nodes that sustained imperial governance and trade. By the accession of the Song dynasty in 960AD, southern regional metropolises had established a mature commercial hierarchy that positioned China for the unprecedented economic expansion of the eleventh century.

# Sources

<div id="refs"></div>
