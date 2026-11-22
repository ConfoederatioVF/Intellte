---
title: "Settlement Gazetteer of Republican and Transitional China"
subtitle: "JADE: Treaty Ports, Provincial Capitals, Industrial Hubs and Frontier Marts, 1910AD to 1953AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: republican_and_transitional_era_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_republican_and_transitional_era_spatial.png"
hero_caption: "Spatial distribution of 48.776 catalogued urban, industrial, treaty-port, township and monastic settlements across 28 territories of China from 1910AD to 1953AD."
hero_label: "fig:hero-republican-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents 48.776 urban, industrial, treaty-port, military, township and monastic settlements active across the 9.389.222 km² territory of China between the late-Qing Xuantong census in 1910AD and the first modern national census of the People's Republic of China on 30 June 1953 under JADE, comprising 277.687 settlement-year observations at a mean of 5,69 observations per centre. Synthesising China Historical GIS (CHGIS Version 6) dynastic time series, the Modern China Geospatial Database, the Ministry of Housing and Urban-Rural Development (MOHURD) Traditional Ancient Villages directory, the Tibetan Buddhist Resource Center (TBRC) monastic dataset, Republican Ministry of the Interior cadastres, Japanese colonial censuses of Taiwan, British and Portuguese colonial registers, and the 1953 national enumeration [@hou2001zhongguo; @cao2024population; @chgis2016v6; @Henriot2026MCGD; @MOHURD2023TraditionalVillages; @Ryavec2014TBRC; @taiwan_colonial_census1940; @neizhengbao1948; @ssb1954census], the catalogue bridges late Qing *cunzhen* and townships into modern PRC administrative enumeration via province-disambiguated prefecture, county and township continuity links without a 1953 cliff across all 28 historical provinces and borderlands. Across four decades of political transformation, industrialisation and wartime dislocation, the leading metropolises in the catalogue are Shanghai (reaching 6,2M in 1953AD), Beijing (2,77M), Tianjin (2,69M), Shenyang (2,3M), Hong Kong (2,24M), Chongqing (1,77M), Guangzhou (1,6M), Wuhan (1,43M), Harbin (1,16M), Nanjing (1,11M in 1947AD), Qingdao (917k), Chengdu (857k), Xi'an (787k), Dalian (766k), Taiyuan (721k), Kunming (699k), Hangzhou (697k), Jinan (680k), Changsha (651k) and Taipei (628k). Beside the 48.776 included centres, the regional source ledger evaluates 51.276 candidate entries in total, archiving 2.500 excluded candidates after 24.890 raw co-located merges and exclusions within the geographic deduplication threshold, with 0 unaccounted.

# Background

Settlement patterns in China during the Republican and transitional era reflected the convergence of two major structural developments: the modernisation of maritime and riverine treaty ports, and the creation of inland heavy industrial and railway networks [@hou2001zhongguo; @cao2024population; @Harris2012Post]. During the late imperial period, urban hierarchies were anchored primarily by administrative seats (*fu*, *zhou* and *xian*) whose walls enclosed yamen compounds and commercial markets [@chgis2016v6; @Gao2018Risen].

In the early twentieth century, the construction of trunk railway arteries—the South Manchuria, Chinese Eastern, Beijing-Hankou, Tianjin-Pukou and Longhai railways—reconfigured regional trade routes and fostered booming railway junctions [@hou2001zhongguo; @Ivings2014Colonial]. Shenyang (Mukden) expanded into an industrial hub of 2,3M; Harbin arose from an unpopulated fishing village along the Songhua River into a milling and railway metropolis of 1,16M; and Dalian grew into a modern deep-water seaport of 766k [@hou2001zhongguo; @Ivings2014Colonial].

Simultaneously, the Second Sino-Japanese War (1937–1945AD) provoked massive temporary urban restructuring [@hou2001zhongguo; @cao2024population]. The flight of coastal universities, government bureaus and industrial facilities to the Great Rear Area (*Da houfang*) elevated the provisional capital of Chongqing from 480k in 1936AD to 1M during wartime and 1,77M by 1953AD, while accelerating urban growth in Chengdu (857k) and Kunming (699k) [@hou2001zhongguo]. In Taiwan, Japanese colonial administration introduced modern urban planning, municipal waterworks and sanitary infrastructure, expanding Taipei to 628k, Kaohsiung to 315k, Tainan to 250k and Taichung to 224k by 1953AD [@taiwan_colonial_census1940; @Lee2020Taipei; @Su2012Tread].

# Methodology

Settlement records were compiled from China Historical GIS (CHGIS Version 6) 1911 county seats and towns, the Modern China Geospatial Database, the MOHURD National Directory of Chinese Traditional Villages, the TBRC Tibetan Monasteries Geospatial Dataset, Republican postal directories, provincial gazetteers (*fangzhi*), Japanese colonial demographic registers in Taiwan, and official 1953 national census reports [@hou2001zhongguo; @cao2024population; @chgis2016v6; @Henriot2026MCGD; @MOHURD2023TraditionalVillages; @Ryavec2014TBRC; @taiwan_colonial_census1940; @ssb1954census]. Province-disambiguated prefecture, county and township continuity bridges connect late Qing *cunzhen* and market townships directly to modern PRC administrative units, ensuring continuous 1910–1953 tracking without an artificial 1953 enumeration cliff. All 48.776 catalogued centres carry valid WGS84 geographic coordinates, sub-regional provincial mask associations and longitudinal population observations across the benchmark years ($t \in [1910, 1928, 1936, 1947, 1953]$), totalling 277.687 settlement-year observations at a mean of 5,69 per centre.

In the regional source ledger, candidate records within a 6,5 km geographic distance threshold of higher-ranking canonical settlements were consolidated or classified as excluded duplicate aliases [@hou2001zhongguo; @chgis2016v6; @Henriot2026MCGD]. Across 51.276 ledger-evaluated entries, 24.890 raw co-located merges and exclusions were resolved into canonical seats and 2.500 excluded candidates were archived in the ledger alongside the 48.776 included settlements, leaving 0 unaccounted. For instance, Wuchang and Hanyang were consolidated into the unified conurbation of Wuhan; Jiangning was merged into Nanjing; Ningpo was harmonised with Ningbo; and traditional prefectural walled nodes were united with contiguous railway stations, townships and industrial districts, preventing double-counting across the database.

# Testing and Validation

Ledger reconciliation confirms exactly 48.776 included settlements (277.687 settlement-year observations, mean 5,69 per centre) and 2.500 archived excluded candidates out of 51.276 ledger-evaluated entries following 24.890 raw co-located merges and exclusions (0 unaccounted). All 48.776 centres map directly onto the 28 sub-regional territorial masks. Figure \ref{fig:sett-republican} displays the rank-size distribution and the leading fifteen settlement population peaks across Republican and transitional China.

<figure class="crd-figure-block" id="fig:sett-republican">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-republican-and-transitional-era-settlements/fig4_republican_and_transitional_era_settlements.png" alt="fig:sett-republican" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement population peaks across the 48.776 catalogued centres of China from 1910AD to 1953AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-republican} reports the top 45 settlements in the gazetteer ranked by peak catalogued population, spanning coastal treaty ports, inland provincial capitals, railway industrial hubs and colonial commercial centres.

<figure class="crd-table-figure" id="tab:top45-republican">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1910AD</th><th class="crd-th">1936AD</th><th class="crd-th">1953AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Shanghai</strong></td><td class="crd-td">Jiangsu, Nanjing and Shanghai</td><td class="crd-td">31,23, 121,47</td><td class="crd-td">1910-1953AD</td><td class="crd-td">1,29M</td><td class="crd-td">3,73M</td><td class="crd-td">6,2M</td><td class="crd-td">6,2M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Beijing</strong></td><td class="crd-td">Zhili/Hebei, Beiping and Tianjin</td><td class="crd-td">39,9, 116,41</td><td class="crd-td">1910-1953AD</td><td class="crd-td">1,05M</td><td class="crd-td">1,56M</td><td class="crd-td">2,77M</td><td class="crd-td">2,77M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Tianjin</strong></td><td class="crd-td">Zhili/Hebei, Beiping and Tianjin</td><td class="crd-td">39,08, 117,2</td><td class="crd-td">1910-1953AD</td><td class="crd-td">800k</td><td class="crd-td">1,39M</td><td class="crd-td">2,69M</td><td class="crd-td">2,69M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Shenyang</strong></td><td class="crd-td">Fengtian/Liaoning Province</td><td class="crd-td">41,81, 123,43</td><td class="crd-td">1910-1953AD</td><td class="crd-td">390k</td><td class="crd-td">860k</td><td class="crd-td">2,3M</td><td class="crd-td">2,3M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Hong Kong</strong></td><td class="crd-td">Hong Kong</td><td class="crd-td">22,29, 114,16</td><td class="crd-td">1910-1953AD</td><td class="crd-td">445k</td><td class="crd-td">988k</td><td class="crd-td">2,24M</td><td class="crd-td">2,24M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Chongqing</strong></td><td class="crd-td">Sichuan, Chongqing and Xikang</td><td class="crd-td">29,56, 106,55</td><td class="crd-td">1910-1953AD</td><td class="crd-td">480k</td><td class="crd-td">650k</td><td class="crd-td">1,77M</td><td class="crd-td">1,77M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Dongguan</strong></td><td class="crd-td">Guangdong and Hainan</td><td class="crd-td">23,05, 113,75</td><td class="crd-td">1910-1953AD</td><td class="crd-td">182,6k</td><td class="crd-td">1,14M</td><td class="crd-td">1,77M</td><td class="crd-td">1,77M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Guangzhou</strong></td><td class="crd-td">Guangdong and Hainan</td><td class="crd-td">23,13, 113,26</td><td class="crd-td">1910-1953AD</td><td class="crd-td">900k</td><td class="crd-td">1,14M</td><td class="crd-td">1,6M</td><td class="crd-td">1,6M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Foshan</strong></td><td class="crd-td">Guangdong and Hainan</td><td class="crd-td">23,03, 113,13</td><td class="crd-td">1910-1953AD</td><td class="crd-td">169,8k</td><td class="crd-td">994,2k</td><td class="crd-td">1,53M</td><td class="crd-td">1,53M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Wuhan</strong></td><td class="crd-td">Hubei Province</td><td class="crd-td">30,59, 114,31</td><td class="crd-td">1910-1953AD</td><td class="crd-td">850k</td><td class="crd-td">1,12M</td><td class="crd-td">1,43M</td><td class="crd-td">1,43M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Wenzhou</strong></td><td class="crd-td">Zhejiang Province</td><td class="crd-td">28,02, 120,65</td><td class="crd-td">1910-1953AD</td><td class="crd-td">169,1k</td><td class="crd-td">887,9k</td><td class="crd-td">1,36M</td><td class="crd-td">1,36M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Shijiazhuang</strong></td><td class="crd-td">Zhili/Hebei, Beiping and Tianjin</td><td class="crd-td">38,02, 114,44</td><td class="crd-td">1910-1953AD</td><td class="crd-td">189,1k</td><td class="crd-td">859,3k</td><td class="crd-td">1,3M</td><td class="crd-td">1,3M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Harbin</strong></td><td class="crd-td">Heilongjiang Province</td><td class="crd-td">45,8, 126,53</td><td class="crd-td">1910-1953AD</td><td class="crd-td">68,5k</td><td class="crd-td">482k</td><td class="crd-td">1,16M</td><td class="crd-td">1,16M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Nanjing</strong></td><td class="crd-td">Jiangsu, Nanjing and Shanghai</td><td class="crd-td">32,06, 118,8</td><td class="crd-td">1910-1953AD</td><td class="crd-td">405k</td><td class="crd-td">1,02M</td><td class="crd-td">1,09M</td><td class="crd-td">1,11M (1947AD)</td></tr>
<tr><td class="crd-td"><strong>Hefei</strong></td><td class="crd-td">Anhui Province</td><td class="crd-td">31,86, 117,28</td><td class="crd-td">1910-1953AD</td><td class="crd-td">172,3k</td><td class="crd-td">718,4k</td><td class="crd-td">1,08M</td><td class="crd-td">1,08M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Nantong</strong></td><td class="crd-td">Jiangsu, Nanjing and Shanghai</td><td class="crd-td">32,01, 120,85</td><td class="crd-td">1910-1953AD</td><td class="crd-td">183,6k</td><td class="crd-td">674,2k</td><td class="crd-td">995k</td><td class="crd-td">995k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Weifang</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">36,7, 119,11</td><td class="crd-td">1910-1953AD</td><td class="crd-td">174,2k</td><td class="crd-td">668,1k</td><td class="crd-td">991k</td><td class="crd-td">991k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Yantai</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">37,52, 121,37</td><td class="crd-td">1910-1953AD</td><td class="crd-td">187,9k</td><td class="crd-td">657,7k</td><td class="crd-td">964,9k</td><td class="crd-td">964,9k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Handan</strong></td><td class="crd-td">Zhili/Hebei, Beiping and Tianjin</td><td class="crd-td">36,59, 114,47</td><td class="crd-td">1910-1953AD</td><td class="crd-td">177k</td><td class="crd-td">638,8k</td><td class="crd-td">940,8k</td><td class="crd-td">940,8k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Qingdao</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">36,07, 120,38</td><td class="crd-td">1910-1953AD</td><td class="crd-td">55k</td><td class="crd-td">515k</td><td class="crd-td">917k</td><td class="crd-td">917k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Yancheng</strong></td><td class="crd-td">Jiangsu, Nanjing and Shanghai</td><td class="crd-td">33,39, 120,13</td><td class="crd-td">1910-1953AD</td><td class="crd-td">181,8k</td><td class="crd-td">625k</td><td class="crd-td">914,8k</td><td class="crd-td">914,8k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Baoding</strong></td><td class="crd-td">Zhili/Hebei, Beiping and Tianjin</td><td class="crd-td">38,86, 115,5</td><td class="crd-td">1910-1953AD</td><td class="crd-td">189,2k</td><td class="crd-td">601k</td><td class="crd-td">870,3k</td><td class="crd-td">870,3k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Chengdu</strong></td><td class="crd-td">Sichuan, Chongqing and Xikang</td><td class="crd-td">30,57, 104,07</td><td class="crd-td">1910-1953AD</td><td class="crd-td">450k</td><td class="crd-td">540k</td><td class="crd-td">857k</td><td class="crd-td">857k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Changchun</strong></td><td class="crd-td">Jilin Province</td><td class="crd-td">43,82, 125,32</td><td class="crd-td">1910-1953AD</td><td class="crd-td">135k</td><td class="crd-td">360k</td><td class="crd-td">855k</td><td class="crd-td">855k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Xi'an</strong></td><td class="crd-td">Shaanxi Province</td><td class="crd-td">34,26, 108,95</td><td class="crd-td">1910-1953AD</td><td class="crd-td">245k</td><td class="crd-td">390k</td><td class="crd-td">787k</td><td class="crd-td">787k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Hengyang</strong></td><td class="crd-td">Hunan Province</td><td class="crd-td">26,9, 112,6</td><td class="crd-td">1910-1953AD</td><td class="crd-td">184,9k</td><td class="crd-td">547,2k</td><td class="crd-td">784,1k</td><td class="crd-td">784,1k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Taizhou</strong></td><td class="crd-td">Zhejiang Province</td><td class="crd-td">28,71, 121,42</td><td class="crd-td">1910-1953AD</td><td class="crd-td">175,6k</td><td class="crd-td">538,7k</td><td class="crd-td">776,2k</td><td class="crd-td">776,2k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Dalian</strong></td><td class="crd-td">Fengtian/Liaoning Province</td><td class="crd-td">38,91, 121,61</td><td class="crd-td">1910-1953AD</td><td class="crd-td">95k</td><td class="crd-td">440k</td><td class="crd-td">766k</td><td class="crd-td">766k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Heze</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">35,25, 115,45</td><td class="crd-td">1910-1953AD</td><td class="crd-td">188,5k</td><td class="crd-td">515,4k</td><td class="crd-td">729,2k</td><td class="crd-td">729,2k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">Shanxi Province</td><td class="crd-td">37,87, 112,55</td><td class="crd-td">1910-1953AD</td><td class="crd-td">140k</td><td class="crd-td">210k</td><td class="crd-td">721k</td><td class="crd-td">721k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Shangrao</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">28,45, 117,96</td><td class="crd-td">1910-1953AD</td><td class="crd-td">192,8k</td><td class="crd-td">504,8k</td><td class="crd-td">708,7k</td><td class="crd-td">708,7k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Xingtai</strong></td><td class="crd-td">Zhili/Hebei, Beiping and Tianjin</td><td class="crd-td">37,07, 114,49</td><td class="crd-td">1910-1953AD</td><td class="crd-td">186,5k</td><td class="crd-td">501,1k</td><td class="crd-td">706,9k</td><td class="crd-td">706,9k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Kunming</strong></td><td class="crd-td">Yunnan Province</td><td class="crd-td">25,04, 102,72</td><td class="crd-td">1910-1953AD</td><td class="crd-td">160k</td><td class="crd-td">240k</td><td class="crd-td">699k</td><td class="crd-td">699k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Hangzhou</strong></td><td class="crd-td">Zhejiang Province</td><td class="crd-td">30,27, 120,16</td><td class="crd-td">1910-1953AD</td><td class="crd-td">390k</td><td class="crd-td">580k</td><td class="crd-td">697k</td><td class="crd-td">697k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Zibo</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">36,7, 118,01</td><td class="crd-td">1910-1953AD</td><td class="crd-td">181,8k</td><td class="crd-td">491k</td><td class="crd-td">693,1k</td><td class="crd-td">693,1k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Jinan</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">36,65, 117,12</td><td class="crd-td">1910-1953AD</td><td class="crd-td">270k</td><td class="crd-td">472k</td><td class="crd-td">680k</td><td class="crd-td">680k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Huizhou</strong></td><td class="crd-td">Guangdong and Hainan</td><td class="crd-td">23,09, 114,41</td><td class="crd-td">1910-1953AD</td><td class="crd-td">178,7k</td><td class="crd-td">480,3k</td><td class="crd-td">677,5k</td><td class="crd-td">677,5k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Zhongshan</strong></td><td class="crd-td">Guangdong and Hainan</td><td class="crd-td">22,53, 113,37</td><td class="crd-td">1910-1953AD</td><td class="crd-td">185,1k</td><td class="crd-td">482,3k</td><td class="crd-td">676,7k</td><td class="crd-td">676,7k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Zhoukou</strong></td><td class="crd-td">Henan Province</td><td class="crd-td">33,58, 114,73</td><td class="crd-td">1910-1953AD</td><td class="crd-td">186,8k</td><td class="crd-td">471,2k</td><td class="crd-td">657,1k</td><td class="crd-td">657,1k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Changsha</strong></td><td class="crd-td">Hunan Province</td><td class="crd-td">28,23, 112,94</td><td class="crd-td">1910-1953AD</td><td class="crd-td">360k</td><td class="crd-td">420k</td><td class="crd-td">651k</td><td class="crd-td">651k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Anshan</strong></td><td class="crd-td">Fengtian/Liaoning Province</td><td class="crd-td">41,12, 122,99</td><td class="crd-td">1910-1953AD</td><td class="crd-td">107,7k</td><td class="crd-td">458k</td><td class="crd-td">631,1k</td><td class="crd-td">631,1k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Taipei</strong></td><td class="crd-td">Taiwan (Japanese Colonial and Post-1945)</td><td class="crd-td">25,03, 121,56</td><td class="crd-td">1910-1953AD</td><td class="crd-td">116k</td><td class="crd-td">292k</td><td class="crd-td">628k</td><td class="crd-td">628k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Zhanjiang</strong></td><td class="crd-td">Guangdong and Hainan</td><td class="crd-td">21,23, 110,39</td><td class="crd-td">1910-1953AD</td><td class="crd-td">180,5k</td><td class="crd-td">444,7k</td><td class="crd-td">617,5k</td><td class="crd-td">617,5k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Yueyang</strong></td><td class="crd-td">Hunan Province</td><td class="crd-td">29,37, 113,1</td><td class="crd-td">1910-1953AD</td><td class="crd-td">182,3k</td><td class="crd-td">442,3k</td><td class="crd-td">612,4k</td><td class="crd-td">612,4k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Xinxiang</strong></td><td class="crd-td">Henan Province</td><td class="crd-td">35,19, 113,78</td><td class="crd-td">1910-1953AD</td><td class="crd-td">193,3k</td><td class="crd-td">439,4k</td><td class="crd-td">600,3k</td><td class="crd-td">600,3k (1953AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 45 settlements in Republican and transitional China ordered by peak catalogued population (n=48.776 total centres).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-republican} summarises settlement counts across all 28 provincial and borderland masks alongside maximum catalogued peak populations. Sichuan, Chongqing and Xikang contained the highest concentration of catalogued sites (4.350), followed by Zhili/Hebei, Beiping and Tianjin (3.333), Jiangxi (2.725) and Shandong (2.581). Table \ref{tab:excluded-republican} details the leading 30 of 2.500 archived excluded candidates recorded in the source ledger (alongside 24.890 raw co-located merges and exclusions).

<figure class="crd-table-figure" id="tab:regsum-republican">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory or Province</th><th class="crd-th">Settlements</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhili/Hebei, Beiping and Tianjin</strong></td><td class="crd-td">3333</td><td class="crd-td">Beijing (2,77M)</td></tr>
<tr><td class="crd-td"><strong>Jiangsu, Nanjing and Shanghai</strong></td><td class="crd-td">1542</td><td class="crd-td">Shanghai (6,2M)</td></tr>
<tr><td class="crd-td"><strong>Anhui Province</strong></td><td class="crd-td">1464</td><td class="crd-td">Hefei (1,08M)</td></tr>
<tr><td class="crd-td"><strong>Zhejiang Province</strong></td><td class="crd-td">2278</td><td class="crd-td">Wenzhou (1,36M)</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">2725</td><td class="crd-td">Shangrao (708,7k)</td></tr>
<tr><td class="crd-td"><strong>Fujian Province</strong></td><td class="crd-td">1821</td><td class="crd-td">Fuzhou (553k)</td></tr>
<tr><td class="crd-td"><strong>Hubei Province</strong></td><td class="crd-td">2135</td><td class="crd-td">Wuhan (1,43M)</td></tr>
<tr><td class="crd-td"><strong>Hunan Province</strong></td><td class="crd-td">2369</td><td class="crd-td">Hengyang (784,1k)</td></tr>
<tr><td class="crd-td"><strong>Henan Province</strong></td><td class="crd-td">2209</td><td class="crd-td">Zhoukou (657,1k)</td></tr>
<tr><td class="crd-td"><strong>Shandong Province</strong></td><td class="crd-td">2581</td><td class="crd-td">Weifang (991k)</td></tr>
<tr><td class="crd-td"><strong>Shanxi Province</strong></td><td class="crd-td">2451</td><td class="crd-td">Taiyuan (721k)</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province</strong></td><td class="crd-td">1955</td><td class="crd-td">Xi'an (787k)</td></tr>
<tr><td class="crd-td"><strong>Gansu and Ningxia</strong></td><td class="crd-td">2337</td><td class="crd-td">Lanzhou (397k)</td></tr>
<tr><td class="crd-td"><strong>Sichuan, Chongqing and Xikang</strong></td><td class="crd-td">4350</td><td class="crd-td">Chongqing (1,77M)</td></tr>
<tr><td class="crd-td"><strong>Guangdong and Hainan</strong></td><td class="crd-td">2502</td><td class="crd-td">Dongguan (1,77M)</td></tr>
<tr><td class="crd-td"><strong>Guangxi Province</strong></td><td class="crd-td">2162</td><td class="crd-td">Yulin (522,8k)</td></tr>
<tr><td class="crd-td"><strong>Yunnan Province</strong></td><td class="crd-td">2058</td><td class="crd-td">Kunming (699k)</td></tr>
<tr><td class="crd-td"><strong>Guizhou Province</strong></td><td class="crd-td">2305</td><td class="crd-td">Zunyi (537,4k)</td></tr>
<tr><td class="crd-td"><strong>Fengtian/Liaoning Province</strong></td><td class="crd-td">701</td><td class="crd-td">Shenyang (2,3M)</td></tr>
<tr><td class="crd-td"><strong>Jilin Province</strong></td><td class="crd-td">420</td><td class="crd-td">Changchun (855k)</td></tr>
<tr><td class="crd-td"><strong>Heilongjiang Province</strong></td><td class="crd-td">934</td><td class="crd-td">Harbin (1,16M)</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia (Rehe, Chahar and Suiyuan)</strong></td><td class="crd-td">939</td><td class="crd-td">Baotou (461,9k)</td></tr>
<tr><td class="crd-td"><strong>Xinjiang Province</strong></td><td class="crd-td">706</td><td class="crd-td">Kashi (203,8k)</td></tr>
<tr><td class="crd-td"><strong>Qinghai Province</strong></td><td class="crd-td">1027</td><td class="crd-td">Xining (324,5k)</td></tr>
<tr><td class="crd-td"><strong>Tibet (Xizang)</strong></td><td class="crd-td">1098</td><td class="crd-td">Lhasa (55k)</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Japanese Colonial and Post-1945)</strong></td><td class="crd-td">322</td><td class="crd-td">Taipei (628k)</td></tr>
<tr><td class="crd-td"><strong>Hong Kong</strong></td><td class="crd-td">48</td><td class="crd-td">Hong Kong (2,24M)</td></tr>
<tr><td class="crd-td"><strong>Macao</strong></td><td class="crd-td">4</td><td class="crd-td">Macao (210k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban centre across all 28 territories from 1910AD to 1953AD (48.776 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-republican">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Country</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jilin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jilin within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Luzhoufu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Luzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jinzhoufu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jinzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Taizhoufu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Taizhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Guide</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Guide within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xinghuafu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xinghua within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xuzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xuzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jiadingxian</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiadingfu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Liangzhoufu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wuwei within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Andong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Andong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Hetianzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Khotan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Chenzhoufu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chenzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yuncheng</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Juncheng within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Shaoxing</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Shaoxing within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yangzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yangxian within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Zhenjiang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zhenjiang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jining</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jining_Shandong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Ganzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ganzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Changde</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Changde within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xiangtan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xiangtan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Wuhu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wuhu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jiangmen</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiangmen within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Wuxi</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wuxi within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xiaolan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xiaolan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Wenzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wenzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Qingjiangpu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Qingjiangpu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xuzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xuzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Changzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Changzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xuzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xuzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Shunqing</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Shunqing within 2 km.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 2.500 archived excluded candidates in the source ledger, consolidated into canonical parent cities.</figcaption>
</figure>

# Limitations

Two specific spatial constraints affect settlement analysis in this gazetteer. First, municipal boundaries expanded significantly between 1910AD and 1953AD, incorporating adjacent rural counties (*xian*) and industrial districts [@hou2001zhongguo; @cao2024population]. Although province-disambiguated prefecture, county and township continuity bridges eliminate any artificial 1953 enumeration cliff across late Qing *cunzhen* and modern PRC jurisdictions [@Henriot2026MCGD; @MOHURD2023TraditionalVillages], population figures for large conurbations such as Shanghai, Beijing, Tianjin and Wuhan reflect municipal boundaries as defined in contemporary administrative returns rather than static intramural walls [@chgis2016v6; @ssb1954census].

Second, even with the integration of the Tibetan Buddhist Resource Center monastic dataset alongside traditional village registers across the western highlands [@Ryavec2014TBRC; @MOHURD2023TraditionalVillages], frontier settlement counts across Tibet, Qinghai, Xinjiang and Inner Mongolia primarily capture nucleated administrative citadels, monastic complexes and garrison towns, while mobile pastoral populations dispersed across grasslands remain modelled through regional kriging surfaces rather than static point gazetteers [@Forbes1981Muslim; @paciorek2006spatial].

# Conclusion

The settlement gazetteer of Republican and transitional China documents the spatial evolution of the subcontinent from an agrarian empire of administrative walled cities and rural townships into an integrated hierarchy of modern industrial, commercial and rail metropolises. Across 48.776 catalogued centres and 277.687 settlement-year observations (mean 5,69 per centre), urban population concentrated along coastal estuaries, navigable river basins and trunk railway spines while preserving continuous 1910–1953 township coverage into the 1953 national enumeration.

By 1953AD, the primate metropolis of Shanghai (6,2M), secondary industrial and administrative giants such as Beijing (2,77M), Tianjin (2,69M), Shenyang (2,3M), Hong Kong (2,24M), Chongqing (1,77M), Guangzhou (1,6M) and Wuhan (1,43M), and regional provincial centres formed an established urban infrastructure that underpinned mid-twentieth-century economic planning and demographic modernisation.

# Sources

<div id="refs"></div>
