---
title: "Settlement Gazetteer of Pre-Qin and Early Imperial China"
subtitle: "JADE: Neolithic Enclosures, Bronze Age Capitals, Warring States Metropolises and Dynastic Commanderies, 10000BC to 589AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: pre_qin_to_northern_southern_dynasties_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_pre_qin_to_northern_southern_dynasties_spatial.png"
hero_caption: "Spatial distribution of 16.863 catalogued Neolithic, Bronze Age, Warring States and dynastic settlements across thirteen Chinese macro-basins from 10000BC to 589AD."
hero_label: "fig:hero-preqin-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents 16.863 urban, administrative, ritual and military settlement trajectories (comprising 94.042 settlement-year observations, a mean of 5,58 per centre) active across the 9.389.222 km² territory of historical China between the terminal Pleistocene foraging baseline in 10000BC and the Sui dynastic reunification in 589AD under JADE. Synthesising the Zenodo Early China Radiocarbon Databank v2023,4 (1.327 named AMS-dated settlements across 7.083 dates), refined Hosner et al. river-valley clusters (11.353 complexes), bronze inscriptions, dynastic geographical monographs (*Hanshu Dilizhi*, *Hou Hanshu*, *Jinshu* and *Weishu*), China Historical GIS administrative series, Harvard TGAZ 2018 pre-1800 places, CBDB Historical Addresses Gazetteer (ADDR\_CODES), Taiwan BOCH prehistoric archaeological sites, expanded RelicsAtlas and Wikidata entries, and demographic reconstructions from Ge Jianxiong and Ma and von Glahn [@gejianxiong2002zhongguo; @mavonglahn2022cambridge; @chgis2016v6; @Campbell2014Archaeology; @hosner2016pangaea; @EarlyChinaC14_2025; @CBDB2026Addresses; @TaiwanBOCH2025Heritage], the register encompasses all thirteen macro-basins: Guanzhong Loess Wei Basin (3.735 sites), Liaohe-Songhua Northeast (2.915), Middle Yangtze Jianghan-Dongting (1.839), North China Yellow Plain (1.781), Shandong Peninsula and Eastern Huai (1.708), Hexi and Western Oases (957), Lower Yangtze and Taihu Jiangnan (868), Lingnan and Hainan (694), Sichuan Basin (667), Tibetan Plateau (652), Southeast Coast (495), Yunnan-Guizhou (481) and Taiwan (71). Across ten millennia of settlement evolution, the largest centres in the catalogue are the Southern Dynasties metropolis Jiankang or Nanjing (550k in 500AD), the Northern Wei rebuilt capital Luoyang (520k in 500AD), Western Han Chang'an or Xi'an (360k in 2AD), the Qin imperial capital Xianyang (350k in 221BC), Northern Qi Yecheng (320k in 550AD), Northern Wei Pingcheng (260k in 480AD), Warring States Linzi (240k in 400BC), Handan (220k in 260BC), Chu Yingcheng (210k in 300BC), Chengdu (180k in 2AD), Late Shang Yinxu (135k in 1100BC) and Western Zhou Qufu (110k in 350BC) [@gejianxiong2002zhongguo; @chgis2016v6]. Alongside the 16.863 catalogued centres, the regional source ledger archives 2.500 excluded duplicate candidate entries out of 19.363 ledger-evaluated entries (0 unaccounted), reflecting 13.639 raw co-located merges and exclusions.

# Background

Settlement patterns in China from 10000BC to 589AD reflect four major urban and spatial transformations [@gejianxiong2002zhongguo; @mavonglahn2022cambridge]. In the Middle and Late Neolithic horizons (5000BC to 2000BC), permanent villages gave way to massive walled proto-urban complexes, exemplified by Taosi (22k) in Shanxi, the stone-walled citadel of Shimao (28k) in Shaanxi, and the hydraulic city of Liangzhu (34k) in the Taihu delta, supported by peripheral dams and irrigation systems [@Zhuang2021Dams; @D2026Inequality; @X2026Multiple].

In the second millennium before the common era, Bronze Age state formation established regional administrative capitals, from Erlitou (24k) and Zhengzhou Shang City (85k) to the Late Shang industrial and ritual metropolis of Yinxu (135k) in Henan and the autonomous bronze culture of Sanxingdui (42k) in Sichuan [@Campbell2014Archaeology; @J2026Social; @L2026Paternal]. During the Eastern Zhou period (770BC to 221BC), cast iron tools and state-sponsored canalisation accelerated urban concentration, creating fortified Warring States metropolises such as Linzi (240k), Handan (220k), Yingcheng (210k) and Xianyang (350k) [@gejianxiong2002zhongguo; @mavonglahn2022cambridge].

Under the Qin and Han empires (221BC to 220AD), the commandery and county network imposed a hierarchical administrative framework centred on Chang'an (360k in 2AD) and Luoyang (400k in 140AD) [@gejianxiong2002zhongguo; @chgis2016v6]. Following third-century fragmentation and the Disaster of Yongjia (311AD), the southward flight of northern refugees catalysed the urbanisation of the Lower Yangtze, transforming Jiankang (550k in 500AD) into a world metropolis, while Northern Wei Sinicisation reconstituted Luoyang (520k in 500AD) as a planned Buddhist capital [@gejianxiong2002zhongguo; @Huang2022Genomic].

# Methodology

Settlement records were harmonised from China Historical GIS (CHGIS V6) administrative layers, Harvard TGAZ 2018 pre-1800 places, the China Biographical Database Historical Addresses Gazetteer (ADDR\_CODES), the Zenodo Early China Radiocarbon Databank v2023,4 (1.327 named AMS-dated settlements across 7.083 dates), refined Hosner et al. river-valley clusters (11.353 complexes), Taiwan BOCH prehistoric archaeological sites, expanded RelicsAtlas and Wikidata heritage registries, archaeological excavation reports from the Institute of Archaeology of the Chinese Academy of Social Sciences, the National Cultural Heritage Administration Major Historical Sites register and demographic studies by Ge Jianxiong and Ma and von Glahn [@gejianxiong2002zhongguo; @mavonglahn2022cambridge; @chgis2016v6; @hosner2016pangaea; @EarlyChinaC14_2025; @CBDB2026Addresses; @TaiwanBOCH2025Heritage]. All 16.863 catalogued centres carry verified WGS84 geographic coordinates, foundation chronologies and 94.042 longitudinal settlement-year observations (a mean of 5,58 observations per centre) across prehistoric and dynastic benchmarks.

In the regional source ledger, 2.500 candidate records out of 19.363 ledger-evaluated entries were archived as excluded duplicate aliases situated within 10 km of higher-ranking canonical settlements (such as proximate variant transcriptions, archaeological site codes or subordinate county seats merged into principal prefectural seats, alongside 13.639 raw co-located merges and exclusions), ensuring zero double-counting across the spatial database.

# Testing and Validation

Ledger reconciliation confirms exactly 16.863 included settlements (94.042 settlement-year observations, mean 5,58 per centre) and 2.500 archived excluded duplicate aliases out of 19.363 ledger-evaluated entries (0 unaccounted), consolidating 13.639 raw co-located merges and exclusions. All 16.863 catalogued centres map directly onto the thirteen sub-regional territorial masks. Figure \ref{fig:sett-preqin} displays the rank-size distribution and the leading fifteen settlement population peaks.

<figure class="crd-figure-block" id="fig:sett-preqin">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-pre-qin-to-northern-southern-dynasties-settlements/fig4_pre_qin_to_northern_southern_dynasties_settlements.png" alt="fig:sett-preqin" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 16.863 catalogued centres of China from 10000BC to 589AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-preqin} reports the top 45 settlements in the gazetteer ranked by peak catalogued population, spanning Neolithic citadels, Bronze Age dynastic seats, Warring States commercial capitals and imperial commanderies.

<figure class="crd-table-figure" id="tab:top45-preqin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Basin Territory</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">221BC</th><th class="crd-th">2AD</th><th class="crd-th">500AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nanjing</strong></td><td class="crd-td">Lower Yangtze and Taihu Jiangnan Basin</td><td class="crd-td">32,06, 118,8</td><td class="crd-td">200BC-500AD</td><td class="crd-td">-</td><td class="crd-td">45k</td><td class="crd-td">550k</td><td class="crd-td">550k (500AD)</td></tr>
<tr><td class="crd-td"><strong>Luoyang</strong></td><td class="crd-td">Guanzhong, Wei-Fen Valleys and Loess Plateau</td><td class="crd-td">34,62, 112,45</td><td class="crd-td">4000BC-500AD</td><td class="crd-td">-</td><td class="crd-td">200k</td><td class="crd-td">520k</td><td class="crd-td">520k (500AD)</td></tr>
<tr><td class="crd-td"><strong>Xi'an</strong></td><td class="crd-td">Guanzhong, Wei-Fen Valleys and Loess Plateau</td><td class="crd-td">34,26, 108,95</td><td class="crd-td">200BC-464AD</td><td class="crd-td">-</td><td class="crd-td">360k</td><td class="crd-td">-</td><td class="crd-td">360k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Yecheng</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">36,26, 114,43</td><td class="crd-td">220AD-550AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">320k (550AD)</td></tr>
<tr><td class="crd-td"><strong>Linzi</strong></td><td class="crd-td">Shandong Peninsula and Eastern Huai Basin</td><td class="crd-td">36,85, 118,31</td><td class="crd-td">1000BC-2AD</td><td class="crd-td">-</td><td class="crd-td">140k</td><td class="crd-td">-</td><td class="crd-td">240k (400BC)</td></tr>
<tr><td class="crd-td"><strong>Pingcheng</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">40,09, 113,3</td><td class="crd-td">500BC-572AD</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">240k (464AD)</td></tr>
<tr><td class="crd-td"><strong>Yingcheng</strong></td><td class="crd-td">Middle Yangtze, Jianghan and Dongting Basin</td><td class="crd-td">30,43, 112,19</td><td class="crd-td">500BC-350BC</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">210k (350BC)</td></tr>
<tr><td class="crd-td"><strong>Chengdu</strong></td><td class="crd-td">Sichuan Basin and Upper Yangtze</td><td class="crd-td">30,57, 104,07</td><td class="crd-td">2AD-464AD</td><td class="crd-td">-</td><td class="crd-td">180k</td><td class="crd-td">-</td><td class="crd-td">180k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Handan</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">36,61, 114,49</td><td class="crd-td">1000BC-2AD</td><td class="crd-td">-</td><td class="crd-td">110k</td><td class="crd-td">-</td><td class="crd-td">180k (200BC)</td></tr>
<tr><td class="crd-td"><strong>Xianyang</strong></td><td class="crd-td">Guanzhong, Wei-Fen Valleys and Loess Plateau</td><td class="crd-td">34,34, 108,71</td><td class="crd-td">300BC-464AD</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">180k (200BC)</td></tr>
<tr><td class="crd-td"><strong>Xinzheng</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">34,4, 113,74</td><td class="crd-td">1500BC-280AD</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">-</td><td class="crd-td">140k (350BC)</td></tr>
<tr><td class="crd-td"><strong>Yinxu</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">36,12, 114,3</td><td class="crd-td">4000BC-500BC</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">135k (1100BC)</td></tr>
<tr><td class="crd-td"><strong>Shenguo</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">33,14, 114,59</td><td class="crd-td">1000BC-464AD</td><td class="crd-td">-</td><td class="crd-td">117k</td><td class="crd-td">-</td><td class="crd-td">117k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Runan</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">33,18, 114,53</td><td class="crd-td">75AD-280AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">116,1k (140AD)</td></tr>
<tr><td class="crd-td"><strong>Chenliu</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">34,82, 114,55</td><td class="crd-td">38BC-280AD</td><td class="crd-td">-</td><td class="crd-td">115,5k</td><td class="crd-td">-</td><td class="crd-td">115,5k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Suzhou</strong></td><td class="crd-td">Lower Yangtze and Taihu Jiangnan Basin</td><td class="crd-td">31,3, 120,58</td><td class="crd-td">4000BC-464AD</td><td class="crd-td">-</td><td class="crd-td">95k</td><td class="crd-td">-</td><td class="crd-td">115k (464AD)</td></tr>
<tr><td class="crd-td"><strong>Yingchuan</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">34,16, 113,47</td><td class="crd-td">204BC-550AD</td><td class="crd-td">-</td><td class="crd-td">114,6k</td><td class="crd-td">-</td><td class="crd-td">114,6k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Chen</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">33,75, 114,89</td><td class="crd-td">3000BC-584AD</td><td class="crd-td">-</td><td class="crd-td">77,4k</td><td class="crd-td">-</td><td class="crd-td">113k (140AD)</td></tr>
<tr><td class="crd-td"><strong>Yongchang</strong></td><td class="crd-td">Tibetan Plateau and Qinghai Highlands</td><td class="crd-td">25,15, 99,26</td><td class="crd-td">200BC-513AD</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">111,7k (140AD)</td></tr>
<tr><td class="crd-td"><strong>Qufu</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">35,59, 116,99</td><td class="crd-td">1000BC-586AD</td><td class="crd-td">-</td><td class="crd-td">85k</td><td class="crd-td">-</td><td class="crd-td">110k (350BC)</td></tr>
<tr><td class="crd-td"><strong>Henan</strong></td><td class="crd-td">Guanzhong, Wei-Fen Valleys and Loess Plateau</td><td class="crd-td">34,73, 112,59</td><td class="crd-td">200BC-550AD</td><td class="crd-td">-</td><td class="crd-td">109,8k</td><td class="crd-td">-</td><td class="crd-td">109,8k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Jiyin</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">35,09, 115,55</td><td class="crd-td">141BC-569AD</td><td class="crd-td">-</td><td class="crd-td">107,8k</td><td class="crd-td">-</td><td class="crd-td">107,8k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Linhuai</strong></td><td class="crd-td">Lower Yangtze and Taihu Jiangnan Basin</td><td class="crd-td">33,3, 118,24</td><td class="crd-td">2AD-280AD</td><td class="crd-td">-</td><td class="crd-td">103,4k</td><td class="crd-td">-</td><td class="crd-td">103,4k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Donghai</strong></td><td class="crd-td">Shandong Peninsula and Eastern Huai Basin</td><td class="crd-td">34,64, 118,3</td><td class="crd-td">200BC-280AD</td><td class="crd-td">-</td><td class="crd-td">102,5k</td><td class="crd-td">-</td><td class="crd-td">102,5k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Bohai</strong></td><td class="crd-td">Shandong Peninsula and Eastern Huai Basin</td><td class="crd-td">38,07, 116,74</td><td class="crd-td">140AD-464AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">97,4k (140AD)</td></tr>
<tr><td class="crd-td"><strong>Beijing</strong></td><td class="crd-td">Shandong Peninsula and Eastern Huai Basin</td><td class="crd-td">39,9, 116,41</td><td class="crd-td">4000BC-464AD</td><td class="crd-td">-</td><td class="crd-td">95k</td><td class="crd-td">-</td><td class="crd-td">95k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Yangzhou</strong></td><td class="crd-td">Lower Yangtze and Taihu Jiangnan Basin</td><td class="crd-td">32,39, 119,41</td><td class="crd-td">1500BC-464AD</td><td class="crd-td">-</td><td class="crd-td">75k</td><td class="crd-td">-</td><td class="crd-td">95k (464AD)</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">Guanzhong, Wei-Fen Valleys and Loess Plateau</td><td class="crd-td">37,87, 112,55</td><td class="crd-td">2AD-140AD</td><td class="crd-td">-</td><td class="crd-td">95k</td><td class="crd-td">-</td><td class="crd-td">95k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Pingyuan</strong></td><td class="crd-td">Shandong Peninsula and Eastern Huai Basin</td><td class="crd-td">37,06, 116,35</td><td class="crd-td">2AD-550AD</td><td class="crd-td">-</td><td class="crd-td">59,8k</td><td class="crd-td">-</td><td class="crd-td">90,2k (140AD)</td></tr>
<tr><td class="crd-td"><strong>Guangzhou</strong></td><td class="crd-td">Lingnan Pearl River Basin and Hainan</td><td class="crd-td">23,13, 113,26</td><td class="crd-td">500BC-464AD</td><td class="crd-td">-</td><td class="crd-td">65k</td><td class="crd-td">-</td><td class="crd-td">90k (464AD)</td></tr>
<tr><td class="crd-td"><strong>Henei</strong></td><td class="crd-td">Guanzhong, Wei-Fen Valleys and Loess Plateau</td><td class="crd-td">35,05, 113,25</td><td class="crd-td">206BC-550AD</td><td class="crd-td">-</td><td class="crd-td">89,9k</td><td class="crd-td">-</td><td class="crd-td">89,9k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Lingling</strong></td><td class="crd-td">Middle Yangtze, Jianghan and Dongting Basin</td><td class="crd-td">26,21, 111,61</td><td class="crd-td">2AD-589AD</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">-</td><td class="crd-td">86,5k (140AD)</td></tr>
<tr><td class="crd-td"><strong>Kaifeng</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">34,8, 114,31</td><td class="crd-td">2AD-280AD</td><td class="crd-td">-</td><td class="crd-td">85k</td><td class="crd-td">-</td><td class="crd-td">85k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Zhengzhou Shang City</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">34,75, 113,69</td><td class="crd-td">3000BC-1000BC</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">85k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Yuwangcheng</strong></td><td class="crd-td">Guanzhong, Wei-Fen Valleys and Loess Plateau</td><td class="crd-td">35,18, 111,17</td><td class="crd-td">1000BC-576AD</td><td class="crd-td">-</td><td class="crd-td">83,1k</td><td class="crd-td">-</td><td class="crd-td">83,1k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Beihai</strong></td><td class="crd-td">Shandong Peninsula and Eastern Huai Basin</td><td class="crd-td">36,63, 118,89</td><td class="crd-td">4000BC-586AD</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">77,4k (140AD)</td></tr>
<tr><td class="crd-td"><strong>Bohai</strong></td><td class="crd-td">Shandong Peninsula and Eastern Huai Basin</td><td class="crd-td">38,2, 117,03</td><td class="crd-td">200BC-550AD</td><td class="crd-td">-</td><td class="crd-td">74,3k</td><td class="crd-td">-</td><td class="crd-td">74,3k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Nan</strong></td><td class="crd-td">Middle Yangtze, Jianghan and Dongting Basin</td><td class="crd-td">30,35, 112,19</td><td class="crd-td">204BC-589AD</td><td class="crd-td">-</td><td class="crd-td">62,8k</td><td class="crd-td">-</td><td class="crd-td">65,3k (140AD)</td></tr>
<tr><td class="crd-td"><strong>Horinger</strong></td><td class="crd-td">Guanzhong, Wei-Fen Valleys and Loess Plateau</td><td class="crd-td">40,38, 111,82</td><td class="crd-td">176BC-526AD</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">-</td><td class="crd-td">65k (398AD)</td></tr>
<tr><td class="crd-td"><strong>Wuwei</strong></td><td class="crd-td">Hexi Corridor, Tarim and Dzungarian Oases</td><td class="crd-td">37,93, 102,64</td><td class="crd-td">2500BC-550AD</td><td class="crd-td">-</td><td class="crd-td">45k</td><td class="crd-td">-</td><td class="crd-td">65k (464AD)</td></tr>
<tr><td class="crd-td"><strong>Qinghe</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">37,06, 115,65</td><td class="crd-td">142BC-140AD</td><td class="crd-td">-</td><td class="crd-td">28,2k</td><td class="crd-td">-</td><td class="crd-td">62,7k (140AD)</td></tr>
<tr><td class="crd-td"><strong>Zho</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">39,48, 115,98</td><td class="crd-td">2AD-550AD</td><td class="crd-td">-</td><td class="crd-td">62,3k</td><td class="crd-td">-</td><td class="crd-td">62,3k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Changshan</strong></td><td class="crd-td">North China Yellow-Huai Alluvial Plain</td><td class="crd-td">37,83, 114,46</td><td class="crd-td">2AD-212AD</td><td class="crd-td">-</td><td class="crd-td">60,2k</td><td class="crd-td">-</td><td class="crd-td">60,2k (2AD)</td></tr>
<tr><td class="crd-td"><strong>Hangzhou</strong></td><td class="crd-td">Lower Yangtze and Taihu Jiangnan Basin</td><td class="crd-td">30,27, 120,16</td><td class="crd-td">2AD-464AD</td><td class="crd-td">-</td><td class="crd-td">30k</td><td class="crd-td">-</td><td class="crd-td">60k (464AD)</td></tr>
<tr><td class="crd-td"><strong>Wuhan</strong></td><td class="crd-td">Middle Yangtze, Jianghan and Dongting Basin</td><td class="crd-td">30,59, 114,31</td><td class="crd-td">280AD-464AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">60k (464AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in China from 10000BC to 589AD ordered by peak catalogued population (n=16.863 total centres).</figcaption>
</figure>

## Sub-Regional Basin Distribution and Ledger Exclusions

Table \ref{tab:regsum-preqin} summarises settlement counts and leading centres across the thirteen administrative territories. The Guanzhong Loess Wei Basin held the largest concentration of catalogued sites (3.735), followed by the Liaohe-Songhua Northeast (2.915), the Middle Yangtze Jianghan-Dongting (1.839) and the North China Yellow Plain (1.781). Table \ref{tab:excluded-preqin} documents the leading 30 of 2.500 archived excluded duplicate candidates in the regional source ledger (out of 19.363 ledger-evaluated entries, following 13.639 raw co-located merges and exclusions).

<figure class="crd-table-figure" id="tab:regsum-preqin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Basin Territory</th><th class="crd-th">Settlements</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>North China Yellow-Huai Alluvial Plain</strong></td><td class="crd-td">1781</td><td class="crd-td">Yecheng (320k)</td></tr>
<tr><td class="crd-td"><strong>Guanzhong, Wei-Fen Valleys and Loess Plateau</strong></td><td class="crd-td">3736</td><td class="crd-td">Luoyang (520k)</td></tr>
<tr><td class="crd-td"><strong>Shandong Peninsula and Eastern Huai Basin</strong></td><td class="crd-td">1708</td><td class="crd-td">Linzi (240k)</td></tr>
<tr><td class="crd-td"><strong>Lower Yangtze and Taihu Jiangnan Basin</strong></td><td class="crd-td">868</td><td class="crd-td">Nanjing (550k)</td></tr>
<tr><td class="crd-td"><strong>Middle Yangtze, Jianghan and Dongting Basin</strong></td><td class="crd-td">1839</td><td class="crd-td">Yingcheng (210k)</td></tr>
<tr><td class="crd-td"><strong>Sichuan Basin and Upper Yangtze</strong></td><td class="crd-td">667</td><td class="crd-td">Chengdu (180k)</td></tr>
<tr><td class="crd-td"><strong>Liaohe-Songhua Northeast Basin</strong></td><td class="crd-td">2914</td><td class="crd-td">Ji'an (45k)</td></tr>
<tr><td class="crd-td"><strong>Hexi Corridor, Tarim and Dzungarian Oases</strong></td><td class="crd-td">957</td><td class="crd-td">Wuwei (65k)</td></tr>
<tr><td class="crd-td"><strong>Lingnan Pearl River Basin and Hainan</strong></td><td class="crd-td">694</td><td class="crd-td">Guangzhou (90k)</td></tr>
<tr><td class="crd-td"><strong>Yunnan-Guizhou Karst Highlands</strong></td><td class="crd-td">481</td><td class="crd-td">Yuexi (53,9k)</td></tr>
<tr><td class="crd-td"><strong>Southeast Coastal Min-Yue Basins</strong></td><td class="crd-td">495</td><td class="crd-td">Dongyang (30,9k)</td></tr>
<tr><td class="crd-td"><strong>Tibetan Plateau and Qinghai Highlands</strong></td><td class="crd-td">652</td><td class="crd-td">Yongchang (111,7k)</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Formosa)</strong></td><td class="crd-td">71</td><td class="crd-td">Beinan (4,2k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban or administrative centre across thirteen macro-basins from 10000BC to 589AD (16.863 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-preqin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Country</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kucha</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Kucha within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Khotan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Khotan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Dunhuang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Dunhuang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Karasahr</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Karasahr within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Loulan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Loulan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Niya</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Niya within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Zhenghan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xinzheng within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Zhaohandan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Handan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Qufuluguo</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Qufu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Linziqiguo</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Linzi within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Runan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Shenguo within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Huaiyang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chen within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Hedong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yuwangcheng within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Nan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Nan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Donghai</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tanguo within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Donghai</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Donghai within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Wuwei</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wuwei within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Pingyuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Pingyuan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Zhongshan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zhongshan_North within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jiyin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiyin within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Zho</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zho within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Changshan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Changshan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Hedong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yuwangcheng within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Pengcheng</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Qi</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Qi within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Cangwu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Cangwu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jinan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jinan_Shandong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Bing</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Taiyuan_Guanzhong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Changle</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Anping within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Changshan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zhongshan_North within 2 km.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 2.500 archived excluded duplicate candidates in the Pre-Qin to Northern-Southern Dynasties source ledger, consolidated into canonical parent centres.</figcaption>
</figure>

# Limitations

Two specific spatial constraints affect settlement analysis across early China. First, early Bronze Age and Shang settlements exhibited royal mobility, relocating ceremonial and residential centres across multiple regional sites within a single core domain [@Campbell2014Archaeology; @gejianxiong2002zhongguo]. For instance, Shang kings relocated their royal seats repeatedly between Bo, Ao, Xiang, Xing and Yinxu, meaning dynastic coordinates reflect sequential administrative capitals rather than static urban permanency.

Second, rural agrarian hamlets and seasonal pastoral camps left minimal monumental surface remains outside earthen ditches and refuse pits [@hosner2016pangaea; @EarlyChinaC14_2025; @Jacques2026Harvesting]. As a consequence, even across 16.863 catalogued settlements (94.042 settlement-year observations), the gazetteer disproportionately captures nucleated walled cities, commandery seats, radiocarbon-dated sites, transport canal hubs and industrial craft ateliers, while dispersed agricultural populations are modelled via continuous non-stationary kriging surfaces rather than nucleated town registers [@paciorek2006spatial; @chgis2016v6].

# Conclusion

The settlement gazetteer of pre-Qin and early imperial China traces the structural evolution of East Asian urbanism from Neolithic walled enclosures to the imperial metropolises of the Han and Six Dynasties. Across 16.863 catalogued centres and 94.042 settlement-year observations (mean 5,58 per centre), urban population concentrated along major river systems (the Yellow, Wei, Huai, Yangtze and Han rivers) and strategic agricultural alluvial basins.

By the Northern and Southern Dynasties, dual metropolitan poles anchored the demographic framework: Jiankang (550k) in the Lower Yangtze as the commercial and cultural capital of the South, and Luoyang (520k) in Henan as the grand planned capital of the Northern Wei. Integrating archaeological excavation registries, radiocarbon databanks, dynastic cadastres and 16.863 catalogued settlements into the East Asian kriging domain establishes an empirical foundation for understanding three millennia of Chinese urbanisation.

# Sources

<div id="refs"></div>
