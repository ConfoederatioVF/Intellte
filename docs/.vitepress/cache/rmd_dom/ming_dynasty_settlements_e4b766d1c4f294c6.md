---
title: "Settlement Gazetteer of Ming Dynasty China"
subtitle: "Prefectural Capitals, County Seats, Military Garrisons and Canal Ports, 1368AD to 1644AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: ming_dynasty_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_ming_dynasty_spatial.png"
hero_caption: "Spatial distribution of 36.464 prefectural capitals, county seats, military garrisons, courier stations, market towns and traditional villages across twenty Ming provinces through 1644AD."
hero_label: "fig:hero-ming-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues 36.464 urban, administrative, military, monastic and rural settlements active across Ming Dynasty China between 1368AD and 1644AD (covering 9.389.222 km² across twenty provincial and frontier territories). Synthesising dynastic local gazetteers (*difangzhi*), the China Historical Geographic Information System (CHGIS v6) full administrative, market town (*shizhen*), garrison and station layers, Harvard TGAZ 2018 historical seats, the Harvard CHGIS Ming Dynasty Garrisons dataset (375 *weisuo*), 1.000 Ming imperial courier stations, the China Biographical Database (CBDB) historical addresses gazetteer, all 7.875 entries of the MOHURD National Directory of Chinese Traditional Ancient Villages, the Tibetan Buddhist Resource Center (TBRC) monastery survey, Taiwan Bureau of Cultural Heritage (BOCH) pre-1644 sites, Ming Hong Kong and Macao coastal settlements, and the demographic reconstructions of Cao Shuji (2000, 2024) [@Cao2000Zhongguo; @Cao2024Population; @CHGIS2016v6; @CHGIS2008MingGarrisons; @CBDB2026Addresses; @MOHURD2023TraditionalVillages; @Ryavec2014TBRC; @TaiwanBOCH2025Heritage; @Gao2026Using], the register encompasses every primary administrative seat from the dual capital metropolises of Beijing (1,05M) and Nanjing (700k) down through prefectural capitals (*fu*), sub-prefectural centres (*zhou*), county seats (*xian*), frontier garrisons, post roads, commercial market towns and historic villages. Across the 36.464 catalogued entries, the dataset documents 140.629 settlement-year population observations spanning 1393AD, 1580AD and 1630AD (averaging 3,86 observations per centre). At the 1630AD late Ming demographic peak, the leading urban centres were Beijing (1,05M), Nanjing (700k), Suzhou (650k), Hangzhou (520k), Huaiqing (350k), Jiaxing (350k), Linjiang (350k), Xu (350k), Guangzhou (320k), Kaifeng (240k), Yangzhou (240k), Xi'an (220k), Chengdu (220k), Wuhan (210k) and Nanchang (210k). Alongside the 36.464 catalogued settlements, the regional source ledger records 2.500 archived excluded candidate entries out of 38.964 ledger-evaluated records (with 0 unaccounted), following 20.968 raw co-located merges and exclusions during spatial deduplication.

# Background

Urbanisation in Ming China was structured by the intersection of the imperial administrative hierarchy and expanding regional market networks [@Cao2000Zhongguo; @Ma2022Cambridge; @Gao2026Using]. Under the administrative framework established by the Hongwu Emperor, every county, sub-prefecture and prefecture possessed a walled administrative seat that housed government yamens, confucian academies, state granaries and temple altars [@Cao2024Population; @Zurndorfer1988Guide].

Alongside civil administration, the early Ming state constructed fortified garrison towns for the *weisuo* military system, including coastal defence forts against *wokou* maritime raiders and heavy stone citadels along the northern Great Wall defence line, linked by an empire-wide network of 1.000 imperial courier stations (*yi* and *pu*) [@CHGIS2008MingGarrisons; @Robinson2025Military; @Bu2025Climate]. Over the course of the sixteenth century, commercial expansion along the Grand Canal and Yangtze River elevated commercial ports and market towns (*shizhen*) into thriving economic centres that rivalled traditional administrative capitals in population and wealth, supported by dense hinterlands of lineage villages, frontier monasteries and coastal trading outposts [@MOHURD2023TraditionalVillages; @Ryavec2014TBRC; @TaiwanBOCH2025Heritage; @Ye2019Grand; @Wang2025Grand; @Liu2025Analysis].

# Methodology

Settlement records were constructed by extracting historical administrative seats, market towns (*shizhen*), garrisons and post stations from the CHGIS Version 6 time-series database and Harvard TGAZ 2018 historical seats, and enriching them with the Harvard CHGIS Ming Dynasty Garrisons dataset (375 *weisuo* forts), 1.000 Ming imperial courier stations, historical place-name coordinates from the CBDB historical addresses gazetteer, all 7.875 MOHURD Traditional Ancient Villages, TBRC Tibetan Buddhist monasteries, Taiwan BOCH pre-1644 archaeological and heritage sites, and Ming coastal settlements in Hong Kong and Macao [@CHGIS2016v6; @CHGIS2008MingGarrisons; @CBDB2026Addresses; @MOHURD2023TraditionalVillages; @Ryavec2014TBRC; @TaiwanBOCH2025Heritage]. These point records were harmonised with population totals from Cao Shuji's regional studies, local gazetteers and monument surveys [@Cao2000Zhongguo; @Cao2024Population; @Gao2026Using]. All 36.464 catalogued settlements carry verified historical coordinates, map cleanly to one of the twenty provincial masks, and jointly anchor 140.629 settlement-year population observations (mean 3,86 per centre).

During spatial harmonisation, 20.968 raw co-located merges and exclusions resolved overlapping coordinates across source registries, while the regional source ledger formally archives 2.500 excluded candidate records out of 38.964 ledger-evaluated entries (leaving 0 unaccounted records). Excluded entries represent duplicate historical aliases, close-pair suburban entities around canonical county seats, or temporary military posts lacking sustained civilian settlement [@Cao2000Zhongguo; @CHGIS2016v6]. For example, historical aliases such as Dadu and Beiping were consolidated into Beijing, Yingtian Fu into Nanjing, and Gusu into Suzhou, preserving single canonical entries with documented longitudinal spans.

# Testing and Validation

Ledger reconciliation confirms 36.464 included settlements and 2.500 archived excluded candidate entries across 38.964 ledger-evaluated entries (alongside 20.968 raw co-located merges and exclusions, with 0 unaccounted records). All 36.464 settlements carry WGS84 geographic coordinates and non-zero population records across 140.629 settlement-year observations (mean 3,86 per centre) for the Ming dynastic benchmarks. Figure \ref{fig:sett-gazetteer} displays the rank-size distribution and the fifteen leading urban centres of the empire.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-ming-dynasty-settlements/fig4_ming_dynasty_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen prefectural and county urban centres across Ming China.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-ming} presents the top 45 settlements in the gazetteer ordered by peak documented population, illustrating the dominance of the capital cities, the Jiangnan textile centres, and key hubs along the Grand Canal and Yangtze waterways.

<figure class="crd-table-figure" id="tab:top45-ming">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1393AD</th><th class="crd-th">1580AD</th><th class="crd-th">1630AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Beijing</strong></td><td class="crd-td">Beizhili</td><td class="crd-td">39,9, 116,41</td><td class="crd-td">1393-1630AD</td><td class="crd-td">153k</td><td class="crd-td">1M</td><td class="crd-td">1,05M</td><td class="crd-td">1,05M (1630AD)</td></tr>
<tr><td class="crd-td"><strong>Nanjing</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">32,06, 118,8</td><td class="crd-td">1393-1630AD</td><td class="crd-td">473k</td><td class="crd-td">700k</td><td class="crd-td">720k</td><td class="crd-td">720k (1630AD)</td></tr>
<tr><td class="crd-td"><strong>Suzhou</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">31,3, 120,58</td><td class="crd-td">1393-1630AD</td><td class="crd-td">230k</td><td class="crd-td">650k</td><td class="crd-td">680k</td><td class="crd-td">680k (1630AD)</td></tr>
<tr><td class="crd-td"><strong>Hangzhou</strong></td><td class="crd-td">Zhejiang</td><td class="crd-td">30,27, 120,16</td><td class="crd-td">1393-1630AD</td><td class="crd-td">260k</td><td class="crd-td">520k</td><td class="crd-td">560k</td><td class="crd-td">560k (1630AD)</td></tr>
<tr><td class="crd-td"><strong>Guangzhou</strong></td><td class="crd-td">Guangdong</td><td class="crd-td">23,13, 113,26</td><td class="crd-td">1393-1630AD</td><td class="crd-td">180k</td><td class="crd-td">320k</td><td class="crd-td">12,8k</td><td class="crd-td">320k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Kaifeng</strong></td><td class="crd-td">Henan</td><td class="crd-td">34,8, 114,31</td><td class="crd-td">1393-1580AD</td><td class="crd-td">120k</td><td class="crd-td">240k</td><td class="crd-td">-</td><td class="crd-td">240k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Yangzhou</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">32,39, 119,41</td><td class="crd-td">1393-1580AD</td><td class="crd-td">110k</td><td class="crd-td">240k</td><td class="crd-td">-</td><td class="crd-td">240k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Xi'an</strong></td><td class="crd-td">Shaanxi</td><td class="crd-td">34,26, 108,95</td><td class="crd-td">1393-1630AD</td><td class="crd-td">130k</td><td class="crd-td">220k</td><td class="crd-td">210k</td><td class="crd-td">220k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Chengdu</strong></td><td class="crd-td">Sichuan</td><td class="crd-td">30,57, 104,07</td><td class="crd-td">1393-1580AD</td><td class="crd-td">120k</td><td class="crd-td">220k</td><td class="crd-td">-</td><td class="crd-td">220k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Wuhan</strong></td><td class="crd-td">Huguang</td><td class="crd-td">30,59, 114,31</td><td class="crd-td">1393-1580AD</td><td class="crd-td">110k</td><td class="crd-td">210k</td><td class="crd-td">-</td><td class="crd-td">210k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Nanchang</strong></td><td class="crd-td">Jiangxi</td><td class="crd-td">28,68, 115,86</td><td class="crd-td">1393-1580AD</td><td class="crd-td">130k</td><td class="crd-td">210k</td><td class="crd-td">-</td><td class="crd-td">210k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Fuzhou</strong></td><td class="crd-td">Fujian</td><td class="crd-td">26,07, 119,3</td><td class="crd-td">1393-1580AD</td><td class="crd-td">120k</td><td class="crd-td">200k</td><td class="crd-td">-</td><td class="crd-td">200k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Ningbo</strong></td><td class="crd-td">Zhejiang</td><td class="crd-td">29,87, 121,54</td><td class="crd-td">1393-1630AD</td><td class="crd-td">110k</td><td class="crd-td">180k</td><td class="crd-td">4k</td><td class="crd-td">180k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Quanzhou</strong></td><td class="crd-td">Fujian</td><td class="crd-td">24,87, 118,68</td><td class="crd-td">1393-1580AD</td><td class="crd-td">130k</td><td class="crd-td">170k</td><td class="crd-td">-</td><td class="crd-td">170k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Changsha</strong></td><td class="crd-td">Huguang</td><td class="crd-td">28,23, 112,94</td><td class="crd-td">1393-1580AD</td><td class="crd-td">90k</td><td class="crd-td">145k</td><td class="crd-td">-</td><td class="crd-td">145k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">Shanxi</td><td class="crd-td">37,87, 112,55</td><td class="crd-td">1393-1630AD</td><td class="crd-td">85k</td><td class="crd-td">140k</td><td class="crd-td">3,8k</td><td class="crd-td">140k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Shanghai</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">31,23, 121,47</td><td class="crd-td">1393-1580AD</td><td class="crd-td">65k</td><td class="crd-td">135k</td><td class="crd-td">-</td><td class="crd-td">135k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Jinan</strong></td><td class="crd-td">Shandong</td><td class="crd-td">36,65, 117,12</td><td class="crd-td">1393-1580AD</td><td class="crd-td">65k</td><td class="crd-td">125k</td><td class="crd-td">-</td><td class="crd-td">125k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Kunming</strong></td><td class="crd-td">Yunnan</td><td class="crd-td">25,04, 102,72</td><td class="crd-td">1393-1630AD</td><td class="crd-td">80k</td><td class="crd-td">120k</td><td class="crd-td">11,3k</td><td class="crd-td">120k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Fengyang</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">32,87, 117,54</td><td class="crd-td">1393-1644AD</td><td class="crd-td">35,1k</td><td class="crd-td">117,2k</td><td class="crd-td">46,3k</td><td class="crd-td">117,2k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Chongqing</strong></td><td class="crd-td">Sichuan</td><td class="crd-td">29,56, 106,55</td><td class="crd-td">1393-1630AD</td><td class="crd-td">65k</td><td class="crd-td">115k</td><td class="crd-td">8,6k</td><td class="crd-td">115k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Shenyang</strong></td><td class="crd-td">Liaodong</td><td class="crd-td">41,81, 123,43</td><td class="crd-td">1393-1644AD</td><td class="crd-td">45k</td><td class="crd-td">65k</td><td class="crd-td">-</td><td class="crd-td">110k (1644AD)</td></tr>
<tr><td class="crd-td"><strong>Hejian</strong></td><td class="crd-td">Beizhili</td><td class="crd-td">38,44, 116,09</td><td class="crd-td">1371-1644AD</td><td class="crd-td">2k</td><td class="crd-td">105,6k</td><td class="crd-td">49k</td><td class="crd-td">105,6k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Jiaxing</strong></td><td class="crd-td">Zhejiang</td><td class="crd-td">30,77, 120,75</td><td class="crd-td">1393-1644AD</td><td class="crd-td">25,9k</td><td class="crd-td">102,8k</td><td class="crd-td">48,2k</td><td class="crd-td">102,8k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Songjiang</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">31,01, 121,23</td><td class="crd-td">1393-1644AD</td><td class="crd-td">16,8k</td><td class="crd-td">102,4k</td><td class="crd-td">46,7k</td><td class="crd-td">102,4k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Guilin</strong></td><td class="crd-td">Guangxi</td><td class="crd-td">25,28, 110,29</td><td class="crd-td">1370-1644AD</td><td class="crd-td">45,6k</td><td class="crd-td">96,5k</td><td class="crd-td">53,2k</td><td class="crd-td">96,5k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Huaian</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">33,5, 119,14</td><td class="crd-td">1393-1644AD</td><td class="crd-td">23,8k</td><td class="crd-td">95k</td><td class="crd-td">47,7k</td><td class="crd-td">95k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Luoyang</strong></td><td class="crd-td">Henan</td><td class="crd-td">34,62, 112,45</td><td class="crd-td">1393-1630AD</td><td class="crd-td">55k</td><td class="crd-td">95k</td><td class="crd-td">991</td><td class="crd-td">95k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Tianjin</strong></td><td class="crd-td">Beizhili</td><td class="crd-td">39,08, 117,2</td><td class="crd-td">1500-1580AD</td><td class="crd-td">-</td><td class="crd-td">95k</td><td class="crd-td">-</td><td class="crd-td">95k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Shaoxing</strong></td><td class="crd-td">Zhejiang</td><td class="crd-td">30, 120,58</td><td class="crd-td">1393-1644AD</td><td class="crd-td">46,4k</td><td class="crd-td">86,2k</td><td class="crd-td">47,5k</td><td class="crd-td">86,2k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Jingzhou</strong></td><td class="crd-td">Huguang</td><td class="crd-td">30,35, 112,19</td><td class="crd-td">1372-1644AD</td><td class="crd-td">23,2k</td><td class="crd-td">78,4k</td><td class="crd-td">48,6k</td><td class="crd-td">78,4k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Chaozhou</strong></td><td class="crd-td">Guangdong</td><td class="crd-td">23,67, 116,64</td><td class="crd-td">1368-1644AD</td><td class="crd-td">33,3k</td><td class="crd-td">76k</td><td class="crd-td">47,7k</td><td class="crd-td">76k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Lanzhou</strong></td><td class="crd-td">Shaanxi</td><td class="crd-td">36,06, 103,83</td><td class="crd-td">1393-1630AD</td><td class="crd-td">50k</td><td class="crd-td">75k</td><td class="crd-td">7k</td><td class="crd-td">75k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Yinchuan</strong></td><td class="crd-td">Shaanxi</td><td class="crd-td">38,49, 106,23</td><td class="crd-td">1393-1580AD</td><td class="crd-td">55k</td><td class="crd-td">75k</td><td class="crd-td">-</td><td class="crd-td">75k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Ji’an</strong></td><td class="crd-td">Jiangxi</td><td class="crd-td">27,1, 114,97</td><td class="crd-td">1380-1644AD</td><td class="crd-td">36,3k</td><td class="crd-td">68,3k</td><td class="crd-td">53,6k</td><td class="crd-td">68,3k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Wuwei</strong></td><td class="crd-td">Shaanxi</td><td class="crd-td">37,93, 102,64</td><td class="crd-td">1393-1644AD</td><td class="crd-td">52k</td><td class="crd-td">68k</td><td class="crd-td">38,2k</td><td class="crd-td">68k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Huangzhou</strong></td><td class="crd-td">Huguang</td><td class="crd-td">30,45, 114,87</td><td class="crd-td">1372-1644AD</td><td class="crd-td">20,2k</td><td class="crd-td">66,3k</td><td class="crd-td">48,2k</td><td class="crd-td">66,3k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Dali</strong></td><td class="crd-td">Yunnan</td><td class="crd-td">25,61, 100,27</td><td class="crd-td">1393-1580AD</td><td class="crd-td">55k</td><td class="crd-td">65k</td><td class="crd-td">-</td><td class="crd-td">65k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Kashgar</strong></td><td class="crd-td">Xinjiang</td><td class="crd-td">39,47, 75,99</td><td class="crd-td">1393-1580AD</td><td class="crd-td">55k</td><td class="crd-td">65k</td><td class="crd-td">-</td><td class="crd-td">65k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Yarkand</strong></td><td class="crd-td">Xinjiang</td><td class="crd-td">38,41, 77,25</td><td class="crd-td">1393-1644AD</td><td class="crd-td">45k</td><td class="crd-td">62k</td><td class="crd-td">949</td><td class="crd-td">62k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Qingzhou</strong></td><td class="crd-td">Shandong</td><td class="crd-td">36,69, 118,48</td><td class="crd-td">1372-1644AD</td><td class="crd-td">34,1k</td><td class="crd-td">59,2k</td><td class="crd-td">50,3k</td><td class="crd-td">59,2k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Xining</strong></td><td class="crd-td">Tibet-Qinghai</td><td class="crd-td">36,62, 101,78</td><td class="crd-td">1393-1644AD</td><td class="crd-td">45k</td><td class="crd-td">58k</td><td class="crd-td">39,4k</td><td class="crd-td">58k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Lhasa</strong></td><td class="crd-td">Tibet-Qinghai</td><td class="crd-td">29,65, 91,17</td><td class="crd-td">1393-1580AD</td><td class="crd-td">45k</td><td class="crd-td">55k</td><td class="crd-td">-</td><td class="crd-td">55k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Zhangye</strong></td><td class="crd-td">Shaanxi</td><td class="crd-td">38,93, 100,45</td><td class="crd-td">1368-1644AD</td><td class="crd-td">45k</td><td class="crd-td">55k</td><td class="crd-td">5,6k</td><td class="crd-td">55k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Ganzhou</strong></td><td class="crd-td">Shaanxi</td><td class="crd-td">39,13, 100,21</td><td class="crd-td">1370-1630AD</td><td class="crd-td">25,2k</td><td class="crd-td">54,7k</td><td class="crd-td">40k</td><td class="crd-td">54,7k (1580AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Ming Dynasty China ordered by peak documented population (n=36.464 total sites).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-ming} summarises the distribution of settlements across all twenty provincial territories alongside their leading urban centres. Sichuan leads all territories with 3.903 catalogued settlements, followed by Huguang (3.534), Shaanxi (2.766) and Nanzhili (2.364). Table \ref{tab:excluded-ming} details the leading 30 of 2.500 archived excluded candidate entries in the regional source ledger.

<figure class="crd-table-figure" id="tab:regsum-ming">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Beizhili (Beiping Metropolitan)</strong></td><td class="crd-td">2175</td><td class="crd-td">Beijing (1,05M)</td></tr>
<tr><td class="crd-td"><strong>Nanzhili (Nanjing Metropolitan: Jiangsu and Anhui)</strong></td><td class="crd-td">2364</td><td class="crd-td">Nanjing (720k)</td></tr>
<tr><td class="crd-td"><strong>Shandong Province</strong></td><td class="crd-td">2023</td><td class="crd-td">Jinan (125k)</td></tr>
<tr><td class="crd-td"><strong>Shanxi Province</strong></td><td class="crd-td">1679</td><td class="crd-td">Taiyuan (140k)</td></tr>
<tr><td class="crd-td"><strong>Henan Province</strong></td><td class="crd-td">1909</td><td class="crd-td">Kaifeng (240k)</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province (incl. Gansu and Ningxia)</strong></td><td class="crd-td">2766</td><td class="crd-td">Xi'an (220k)</td></tr>
<tr><td class="crd-td"><strong>Zhejiang Province</strong></td><td class="crd-td">1533</td><td class="crd-td">Hangzhou (560k)</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">1859</td><td class="crd-td">Nanchang (210k)</td></tr>
<tr><td class="crd-td"><strong>Huguang Province (Hubei and Hunan)</strong></td><td class="crd-td">3534</td><td class="crd-td">Wuhan (210k)</td></tr>
<tr><td class="crd-td"><strong>Fujian Province</strong></td><td class="crd-td">1279</td><td class="crd-td">Fuzhou (200k)</td></tr>
<tr><td class="crd-td"><strong>Guangdong Province (incl. Hainan, HK and Macao)</strong></td><td class="crd-td">1648</td><td class="crd-td">Guangzhou (320k)</td></tr>
<tr><td class="crd-td"><strong>Guangxi Province</strong></td><td class="crd-td">1990</td><td class="crd-td">Guilin (96,5k)</td></tr>
<tr><td class="crd-td"><strong>Sichuan Province (incl. Chongqing)</strong></td><td class="crd-td">3903</td><td class="crd-td">Chengdu (220k)</td></tr>
<tr><td class="crd-td"><strong>Yunnan Province</strong></td><td class="crd-td">1611</td><td class="crd-td">Kunming (120k)</td></tr>
<tr><td class="crd-td"><strong>Guizhou Province</strong></td><td class="crd-td">2134</td><td class="crd-td">Pingxi (54k)</td></tr>
<tr><td class="crd-td"><strong>Liaodong Garrison and Jurchen Northeast</strong></td><td class="crd-td">1101</td><td class="crd-td">Shenyang (110k)</td></tr>
<tr><td class="crd-td"><strong>Northern Yuan and Inner Mongolian Banners</strong></td><td class="crd-td">567</td><td class="crd-td">Ningcheng (48k)</td></tr>
<tr><td class="crd-td"><strong>Xinjiang (Moghulistan and Turpan)</strong></td><td class="crd-td">384</td><td class="crd-td">Kashgar (65k)</td></tr>
<tr><td class="crd-td"><strong>Tibet and Qinghai (Ü-Tsang, Kham and Amdo)</strong></td><td class="crd-td">1894</td><td class="crd-td">Xining (58k)</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Austronesian and Late Ming Coastal Frontier)</strong></td><td class="crd-td">111</td><td class="crd-td">Tainan (15k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading urban centres across the twenty Ming provincial territories (36.464 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-ming">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Fanling</strong></td><td class="crd-td">Hong Kong</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Lung Yeuk Tau-Hong Kong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Ha Tsuen</strong></td><td class="crd-td">Hong Kong</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ping Shan-Hong Kong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Liping</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wukai-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Zhenyuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zhenyuan-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Lu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Lu'an-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Fenzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Fen-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Qin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Qin-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Dongchang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Dongchang-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Kuizhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Kuizhou-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Kuizhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Kuizhou-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Kui</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Kuizhou-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Youyang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Youyang-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yan'an</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yan'anfu-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Tonggu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tonggu-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Sinan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Sinan-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Anlu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chengtian-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Mianyang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Mianyang-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>De'an</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement De'an-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Gui</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Gui-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Shinan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Shinan-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Shinan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Shinan-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Deng</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Dengzhou-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Lai</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Laizhou-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Sinan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zhenyuan-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jingjiang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Guilin-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Qingyuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Qingyuan-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Qingyuannandan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Qingyuan-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Guangxing</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Guangde-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Ruizhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ruizhou-China within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yuezhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yuezhou-China within 2 km.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 2.500 archived excluded candidate entries in the Ming Dynasty source ledger, consolidated into canonical settlements.</figcaption>
</figure>

# Limitations

Two spatial factors affect settlement population aggregation in this gazetteer. First, major historical metropolises such as Beijing and Nanjing contained multiple administrative jurisdictions within a single urban wall: Beijing contained both Daxing and Wanping county seats alongside the imperial court, while Nanjing housed Shangyuan and Jiangning counties. These dual-county capital complexes are consolidated into single unified metropolitan entities to avoid artificial fragmentation of contiguous urban populations [@Cao2000Zhongguo; @CHGIS2016v6]. Second, while minor market towns (*shizhen* and *caoshi*) and rural hamlets are now explicitly represented as distinct geocoded points through the full CHGIS market town layer, the CBDB historical addresses gazetteer and all 7.875 MOHURD Traditional Ancient Villages [@CHGIS2016v6; @CBDB2026Addresses; @MOHURD2023TraditionalVillages], population series for unfortified market towns, courier posts and historic villages still rely on county-level demographic disaggregation and architectural survival rates rather than direct village-level Ming household rolls [@Cao2000Zhongguo; @Gao2026Using; @Liu2025Analysis].

# Sources

<div id="refs"></div>
