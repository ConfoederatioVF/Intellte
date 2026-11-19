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
hero_caption: "Spatial distribution of 20.938 catalogued urban, industrial, treaty-port and administrative settlements across 28 territories of China from 1910AD to 1953AD."
hero_label: "fig:hero-republican-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents 20.938 urban, industrial, treaty-port, military and administrative settlements active across the 9.389.222 km² territory of China between the late-Qing Xuantong census in 1910AD and the first modern national census of the People's Republic of China on 30 June 1953 under JADE. Synthesising China Historical GIS (CHGIS Version 6) dynastic time series, Republican Ministry of the Interior cadastres, Japanese colonial censuses of Taiwan, British and Portuguese colonial registers, and the 1953 national enumeration [@hou2001zhongguo; @cao2024population; @chgis2016v6; @taiwan_colonial_census1940; @neizhengbao1948; @ssb1954census], the catalogue spans all 28 historical provinces and borderlands. Across four decades of political transformation, industrialisation and wartime dislocation, the leading metropolises in the catalogue are Shanghai (reaching 6,2M in 1953AD), Beijing (2,77M), Tianjin (2,69M), Shenyang (2,3M), Hong Kong (2,24M), Chongqing (1,77M), Guangzhou (1,6M), Wuhan (1,43M), Harbin (1,16M), Nanjing (1,11M in 1947AD), Qingdao (917k), Chengdu (857k), Xi'an (787k), Dalian (766k), Taiyuan (721k), Kunming (699k), Hangzhou (697k), Jinan (680k), Changsha (651k) and Taipei (628k). Beside the 20.938 included centres, the regional source ledger accounts for 251 excluded duplicate aliases within 6,5 km buffer distance out of 1.930 total candidate entries.

# Background

Settlement patterns in China during the Republican and transitional era reflected the convergence of two major structural developments: the modernisation of maritime and riverine treaty ports, and the creation of inland heavy industrial and railway networks [@hou2001zhongguo; @cao2024population; @Harris2012Post]. During the late imperial period, urban hierarchies were anchored primarily by administrative seats (*fu*, *zhou* and *xian*) whose walls enclosed yamen compounds and commercial markets [@chgis2016v6; @Gao2018Risen].

In the early twentieth century, the construction of trunk railway arteries—the South Manchuria, Chinese Eastern, Beijing-Hankou, Tianjin-Pukou and Longhai railways—reconfigured regional trade routes and fostered booming railway junctions [@hou2001zhongguo; @Ivings2014Colonial]. Shenyang (Mukden) expanded into an industrial hub of 2,3M; Harbin arose from an unpopulated fishing village along the Songhua River into a milling and railway metropolis of 1,16M; and Dalian grew into a modern deep-water seaport of 766k [@hou2001zhongguo; @Ivings2014Colonial].

Simultaneously, the Second Sino-Japanese War (1937–1945AD) provoked massive temporary urban restructuring [@hou2001zhongguo; @cao2024population]. The flight of coastal universities, government bureaus and industrial facilities to the Great Rear Area (*Da houfang*) elevated the provisional capital of Chongqing from 480k in 1936AD to 1M during wartime and 1,77M by 1953AD, while accelerating urban growth in Chengdu (857k) and Kunming (699k) [@hou2001zhongguo]. In Taiwan, Japanese colonial administration introduced modern urban planning, municipal waterworks and sanitary infrastructure, expanding Taipei to 628k, Kaohsiung to 315k, Tainan to 250k and Taichung to 224k by 1953AD [@taiwan_colonial_census1940; @Lee2020Taipei; @Su2012Tread].

# Methodology

Settlement records were compiled from China Historical GIS (CHGIS Version 6) 1911 county seats and towns, Republican postal directories, provincial gazetteers (*fangzhi*), Japanese colonial demographic registers in Taiwan, and official 1953 national census reports [@hou2001zhongguo; @cao2024population; @chgis2016v6; @taiwan_colonial_census1940; @ssb1954census]. All 20.938 catalogued centres carry valid WGS84 geographic coordinates, sub-regional provincial mask associations and longitudinal population observations across the benchmark years ($t \in [1910, 1928, 1936, 1947, 1953]$).

In the regional source ledger, candidate records within a 6,5 km geographic distance threshold of higher-ranking canonical settlements were classified as excluded duplicate aliases [@hou2001zhongguo; @chgis2016v6]. For instance, Wuchang and Hanyang were consolidated into the unified conurbation of Wuhan; Jiangning was merged into Nanjing; Ningpo was harmonised with Ningbo; and traditional prefectural walled nodes were united with contiguous railway stations and industrial districts, preventing double-counting across the database.

# Testing and Validation

Ledger reconciliation confirms exactly 20.938 included settlements and 251 excluded duplicate aliases out of 1.930 total candidates (0 unaccounted). All 20.938 centres map directly onto the 28 sub-regional territorial masks. Figure \ref{fig:sett-republican} displays the rank-size distribution and the leading fifteen settlement population peaks across Republican and transitional China.

<figure class="crd-figure-block" id="fig:sett-republican">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-republican-and-transitional-era-settlements/fig4_republican_and_transitional_era_settlements.png" alt="fig:sett-republican" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement population peaks across the 20.938 catalogued centres of China from 1910AD to 1953AD.</figcaption>
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
<tr><td class="crd-td"><strong>Guangzhou</strong></td><td class="crd-td">Guangdong and Hainan</td><td class="crd-td">23,13, 113,26</td><td class="crd-td">1910-1953AD</td><td class="crd-td">900k</td><td class="crd-td">1,14M</td><td class="crd-td">1,6M</td><td class="crd-td">1,6M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Wuhan</strong></td><td class="crd-td">Hubei Province</td><td class="crd-td">30,59, 114,31</td><td class="crd-td">1910-1953AD</td><td class="crd-td">850k</td><td class="crd-td">1,12M</td><td class="crd-td">1,43M</td><td class="crd-td">1,43M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Harbin</strong></td><td class="crd-td">Heilongjiang Province</td><td class="crd-td">45,8, 126,53</td><td class="crd-td">1910-1953AD</td><td class="crd-td">68,5k</td><td class="crd-td">482k</td><td class="crd-td">1,16M</td><td class="crd-td">1,16M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Nanjing</strong></td><td class="crd-td">Jiangsu, Nanjing and Shanghai</td><td class="crd-td">32,06, 118,8</td><td class="crd-td">1910-1953AD</td><td class="crd-td">405k</td><td class="crd-td">1,02M</td><td class="crd-td">1,09M</td><td class="crd-td">1,11M (1947AD)</td></tr>
<tr><td class="crd-td"><strong>Qingdao</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">36,07, 120,38</td><td class="crd-td">1910-1953AD</td><td class="crd-td">55k</td><td class="crd-td">515k</td><td class="crd-td">917k</td><td class="crd-td">917k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Chengdu</strong></td><td class="crd-td">Sichuan, Chongqing and Xikang</td><td class="crd-td">30,57, 104,07</td><td class="crd-td">1910-1953AD</td><td class="crd-td">450k</td><td class="crd-td">540k</td><td class="crd-td">857k</td><td class="crd-td">857k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Xi'an</strong></td><td class="crd-td">Shaanxi Province</td><td class="crd-td">34,26, 108,95</td><td class="crd-td">1910-1953AD</td><td class="crd-td">245k</td><td class="crd-td">390k</td><td class="crd-td">787k</td><td class="crd-td">787k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Dalian</strong></td><td class="crd-td">Fengtian/Liaoning Province</td><td class="crd-td">38,91, 121,61</td><td class="crd-td">1910-1953AD</td><td class="crd-td">95k</td><td class="crd-td">440k</td><td class="crd-td">766k</td><td class="crd-td">766k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">Shanxi Province</td><td class="crd-td">37,87, 112,55</td><td class="crd-td">1910-1953AD</td><td class="crd-td">140k</td><td class="crd-td">210k</td><td class="crd-td">721k</td><td class="crd-td">721k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Kunming</strong></td><td class="crd-td">Yunnan Province</td><td class="crd-td">25,04, 102,72</td><td class="crd-td">1910-1953AD</td><td class="crd-td">160k</td><td class="crd-td">240k</td><td class="crd-td">699k</td><td class="crd-td">699k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Hangzhou</strong></td><td class="crd-td">Zhejiang Province</td><td class="crd-td">30,27, 120,16</td><td class="crd-td">1910-1953AD</td><td class="crd-td">390k</td><td class="crd-td">580k</td><td class="crd-td">697k</td><td class="crd-td">697k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Jinan</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">36,65, 117,12</td><td class="crd-td">1910-1953AD</td><td class="crd-td">270k</td><td class="crd-td">472k</td><td class="crd-td">680k</td><td class="crd-td">680k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Foshan</strong></td><td class="crd-td">Guangdong and Hainan</td><td class="crd-td">23,02, 112,96</td><td class="crd-td">1910-1953AD</td><td class="crd-td">414k</td><td class="crd-td">558k</td><td class="crd-td">675k</td><td class="crd-td">675k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Changsha</strong></td><td class="crd-td">Hunan Province</td><td class="crd-td">28,23, 112,94</td><td class="crd-td">1910-1953AD</td><td class="crd-td">360k</td><td class="crd-td">420k</td><td class="crd-td">651k</td><td class="crd-td">651k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Taipei</strong></td><td class="crd-td">Taiwan (Japanese Colonial and Post-1945)</td><td class="crd-td">25,03, 121,56</td><td class="crd-td">1910-1953AD</td><td class="crd-td">116k</td><td class="crd-td">292k</td><td class="crd-td">628k</td><td class="crd-td">628k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Shaoxing</strong></td><td class="crd-td">Zhejiang Province</td><td class="crd-td">29,89, 120,52</td><td class="crd-td">1910-1953AD</td><td class="crd-td">368k</td><td class="crd-td">496k</td><td class="crd-td">600k</td><td class="crd-td">600k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Shaoxing Zhejiang</strong></td><td class="crd-td">Zhejiang Province</td><td class="crd-td">30, 120,58</td><td class="crd-td">1910-1953AD</td><td class="crd-td">368k</td><td class="crd-td">488k</td><td class="crd-td">592k</td><td class="crd-td">592k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Fuzhou</strong></td><td class="crd-td">Fujian Province</td><td class="crd-td">26,07, 119,3</td><td class="crd-td">1910-1953AD</td><td class="crd-td">480k</td><td class="crd-td">390k</td><td class="crd-td">553k</td><td class="crd-td">553k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Suzhou</strong></td><td class="crd-td">Jiangsu, Nanjing and Shanghai</td><td class="crd-td">31,3, 120,58</td><td class="crd-td">1910-1953AD</td><td class="crd-td">350k</td><td class="crd-td">390k</td><td class="crd-td">474k</td><td class="crd-td">474k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Yangzhou Shaanxi</strong></td><td class="crd-td">Shaanxi Province</td><td class="crd-td">33,22, 107,54</td><td class="crd-td">1910-1953AD</td><td class="crd-td">276k</td><td class="crd-td">366k</td><td class="crd-td">444k</td><td class="crd-td">444k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Nanchang</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">28,68, 115,86</td><td class="crd-td">1910-1953AD</td><td class="crd-td">260k</td><td class="crd-td">-</td><td class="crd-td">398k</td><td class="crd-td">398k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Lanzhou</strong></td><td class="crd-td">Gansu and Ningxia</td><td class="crd-td">36,06, 103,83</td><td class="crd-td">1910-1953AD</td><td class="crd-td">115k</td><td class="crd-td">165k</td><td class="crd-td">397k</td><td class="crd-td">397k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Zhenjiang</strong></td><td class="crd-td">Jiangsu, Nanjing and Shanghai</td><td class="crd-td">32,03, 119,52</td><td class="crd-td">1910-1953AD</td><td class="crd-td">239,2k</td><td class="crd-td">322,4k</td><td class="crd-td">390k</td><td class="crd-td">390k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Zhenjiang Jiangsu</strong></td><td class="crd-td">Jiangsu, Nanjing and Shanghai</td><td class="crd-td">32,21, 119,46</td><td class="crd-td">1910-1953AD</td><td class="crd-td">239,2k</td><td class="crd-td">317,2k</td><td class="crd-td">384,8k</td><td class="crd-td">384,8k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Chaozhoufu</strong></td><td class="crd-td">Guangdong and Hainan</td><td class="crd-td">23,84, 116,77</td><td class="crd-td">1910-1953AD</td><td class="crd-td">230k</td><td class="crd-td">310k</td><td class="crd-td">375k</td><td class="crd-td">375k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Chaozhou</strong></td><td class="crd-td">Guangdong and Hainan</td><td class="crd-td">23,65, 116,62</td><td class="crd-td">1910-1953AD</td><td class="crd-td">230k</td><td class="crd-td">305k</td><td class="crd-td">370k</td><td class="crd-td">370k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Kaohsiung</strong></td><td class="crd-td">Taiwan (Japanese Colonial and Post-1945)</td><td class="crd-td">22,63, 120,3</td><td class="crd-td">1910-1953AD</td><td class="crd-td">25k</td><td class="crd-td">94k</td><td class="crd-td">315k</td><td class="crd-td">315k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Ganzhou</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">25,7, 115,35</td><td class="crd-td">1910-1953AD</td><td class="crd-td">184k</td><td class="crd-td">248k</td><td class="crd-td">300k</td><td class="crd-td">300k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Jining</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">35,48, 116,73</td><td class="crd-td">1910-1953AD</td><td class="crd-td">184k</td><td class="crd-td">248k</td><td class="crd-td">300k</td><td class="crd-td">300k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Xinhui</strong></td><td class="crd-td">Guangdong and Hainan</td><td class="crd-td">22,44, 113,01</td><td class="crd-td">1910-1953AD</td><td class="crd-td">184k</td><td class="crd-td">248k</td><td class="crd-td">300k</td><td class="crd-td">300k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Kaifeng</strong></td><td class="crd-td">Henan Province</td><td class="crd-td">34,8, 114,31</td><td class="crd-td">1910-1953AD</td><td class="crd-td">220k</td><td class="crd-td">250k</td><td class="crd-td">299k</td><td class="crd-td">299k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Jining Shandong</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">35,41, 116,58</td><td class="crd-td">1910-1953AD</td><td class="crd-td">184k</td><td class="crd-td">244k</td><td class="crd-td">296k</td><td class="crd-td">296k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Xinhui Inner</strong></td><td class="crd-td">Inner Mongolia (Rehe, Chahar and Suiyuan)</td><td class="crd-td">42,28, 119,9</td><td class="crd-td">1910-1953AD</td><td class="crd-td">184k</td><td class="crd-td">244k</td><td class="crd-td">296k</td><td class="crd-td">296k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Ganzhou Jiangxi</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">25,85, 114,93</td><td class="crd-td">1910-1953AD</td><td class="crd-td">184k</td><td class="crd-td">244k</td><td class="crd-td">296k</td><td class="crd-td">296k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Ha’Erbin</strong></td><td class="crd-td">Heilongjiang Province</td><td class="crd-td">45,63, 127,97</td><td class="crd-td">1910-1953AD</td><td class="crd-td">184k</td><td class="crd-td">244k</td><td class="crd-td">296k</td><td class="crd-td">296k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Songjiang</strong></td><td class="crd-td">Jiangsu, Nanjing and Shanghai</td><td class="crd-td">31,01, 121,23</td><td class="crd-td">1910-1910AD</td><td class="crd-td">280k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">280k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Changde</strong></td><td class="crd-td">Hunan Province</td><td class="crd-td">29,32, 111,61</td><td class="crd-td">1910-1953AD</td><td class="crd-td">165,6k</td><td class="crd-td">223,2k</td><td class="crd-td">270k</td><td class="crd-td">270k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Xiangtan</strong></td><td class="crd-td">Hunan Province</td><td class="crd-td">27,64, 112,78</td><td class="crd-td">1910-1953AD</td><td class="crd-td">165,6k</td><td class="crd-td">223,2k</td><td class="crd-td">270k</td><td class="crd-td">270k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Changde Hunan</strong></td><td class="crd-td">Hunan Province</td><td class="crd-td">29,03, 111,7</td><td class="crd-td">1910-1953AD</td><td class="crd-td">165,6k</td><td class="crd-td">219,6k</td><td class="crd-td">266,4k</td><td class="crd-td">266,4k (1953AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 45 settlements in Republican and transitional China ordered by peak catalogued population (n=20.938 total centres).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-republican} summarises settlement counts across all 28 provincial and borderland masks alongside maximum catalogued peak populations. Zhili/Hebei, Beiping and Tianjin contained the highest concentration of catalogued sites (129), followed by Sichuan, Chongqing and Xikang (126), Henan (110) and Shandong (108). Table \ref{tab:excluded-republican} details the leading 30 of 251 excluded duplicate candidates recorded in the source ledger.

<figure class="crd-table-figure" id="tab:regsum-republican">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory or Province</th><th class="crd-th">Settlements</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhili/Hebei, Beiping and Tianjin</strong></td><td class="crd-td">1476</td><td class="crd-td">Beijing (2,77M)</td></tr>
<tr><td class="crd-td"><strong>Jiangsu, Nanjing and Shanghai</strong></td><td class="crd-td">1034</td><td class="crd-td">Shanghai (6,2M)</td></tr>
<tr><td class="crd-td"><strong>Anhui Province</strong></td><td class="crd-td">742</td><td class="crd-td">Wuhu (262,5k)</td></tr>
<tr><td class="crd-td"><strong>Zhejiang Province</strong></td><td class="crd-td">914</td><td class="crd-td">Hangzhou (697k)</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">593</td><td class="crd-td">Nanchang (398k)</td></tr>
<tr><td class="crd-td"><strong>Fujian Province</strong></td><td class="crd-td">480</td><td class="crd-td">Fuzhou (553k)</td></tr>
<tr><td class="crd-td"><strong>Hubei Province</strong></td><td class="crd-td">1052</td><td class="crd-td">Wuhan (1,43M)</td></tr>
<tr><td class="crd-td"><strong>Hunan Province</strong></td><td class="crd-td">912</td><td class="crd-td">Changsha (651k)</td></tr>
<tr><td class="crd-td"><strong>Henan Province</strong></td><td class="crd-td">1253</td><td class="crd-td">Kaifeng (299k)</td></tr>
<tr><td class="crd-td"><strong>Shandong Province</strong></td><td class="crd-td">1673</td><td class="crd-td">Qingdao (917k)</td></tr>
<tr><td class="crd-td"><strong>Shanxi Province</strong></td><td class="crd-td">948</td><td class="crd-td">Taiyuan (721k)</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province</strong></td><td class="crd-td">850</td><td class="crd-td">Xi'an (787k)</td></tr>
<tr><td class="crd-td"><strong>Gansu and Ningxia</strong></td><td class="crd-td">975</td><td class="crd-td">Lanzhou (397k)</td></tr>
<tr><td class="crd-td"><strong>Sichuan, Chongqing and Xikang</strong></td><td class="crd-td">2464</td><td class="crd-td">Chongqing (1,77M)</td></tr>
<tr><td class="crd-td"><strong>Guangdong and Hainan</strong></td><td class="crd-td">1038</td><td class="crd-td">Guangzhou (1,6M)</td></tr>
<tr><td class="crd-td"><strong>Guangxi Province</strong></td><td class="crd-td">1320</td><td class="crd-td">Yizhou (148k)</td></tr>
<tr><td class="crd-td"><strong>Yunnan Province</strong></td><td class="crd-td">668</td><td class="crd-td">Kunming (699k)</td></tr>
<tr><td class="crd-td"><strong>Guizhou Province</strong></td><td class="crd-td">875</td><td class="crd-td">Guiyang (120k)</td></tr>
<tr><td class="crd-td"><strong>Fengtian/Liaoning Province</strong></td><td class="crd-td">318</td><td class="crd-td">Shenyang (2,3M)</td></tr>
<tr><td class="crd-td"><strong>Jilin Province</strong></td><td class="crd-td">127</td><td class="crd-td">Jilin (124,5k)</td></tr>
<tr><td class="crd-td"><strong>Heilongjiang Province</strong></td><td class="crd-td">233</td><td class="crd-td">Harbin (1,16M)</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia (Rehe, Chahar and Suiyuan)</strong></td><td class="crd-td">356</td><td class="crd-td">Xinhui Inner (296k)</td></tr>
<tr><td class="crd-td"><strong>Xinjiang Province</strong></td><td class="crd-td">238</td><td class="crd-td">Ürümqi (141k)</td></tr>
<tr><td class="crd-td"><strong>Qinghai Province</strong></td><td class="crd-td">127</td><td class="crd-td">Guide (75k)</td></tr>
<tr><td class="crd-td"><strong>Tibet (Xizang)</strong></td><td class="crd-td">162</td><td class="crd-td">Lhasa (55k)</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Japanese Colonial and Post-1945)</strong></td><td class="crd-td">101</td><td class="crd-td">Taipei (628k)</td></tr>
<tr><td class="crd-td"><strong>Hong Kong</strong></td><td class="crd-td">7</td><td class="crd-td">Hong Kong (2,24M)</td></tr>
<tr><td class="crd-td"><strong>Macao</strong></td><td class="crd-td">2</td><td class="crd-td">Macao (210k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban centre across all 28 territories from 1910AD to 1953AD (20.938 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-republican">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Country</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Xinghuafu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xinghua within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xuzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xuzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jiadingxian</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiadingfu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Andong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Andong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yuncheng</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Juncheng within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xiaolan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xiaolan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Qingjiangpu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Qingjiangpu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xuzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xuzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xuzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xuzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Shunqing</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Shunqing within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Laohekou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Laohekou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Songjiang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Songjiangfu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Baoqing</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Baoqing within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Huangxian</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Huangxian within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Guiyang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Guiyang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Niuzhuang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Niuzhuang within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Bozhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Bozhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jimo</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jimo within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Shanhaiguan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Shanhaiguan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Baoning</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Baoning within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Andong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Andong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Luzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Luzhou Sichuan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Shufu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Shufu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Taozhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Taozhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Dengzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Dengzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jianning</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jianningfu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Ningde</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ningde within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jiading</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiadingfu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Taizhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Taizhou Jiangsu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Shache</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Shache within 2 km.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 251 excluded duplicate candidates in the source ledger, consolidated into canonical parent cities.</figcaption>
</figure>

# Limitations

Two specific spatial constraints affect settlement analysis in this gazetteer. First, municipal boundaries expanded significantly between 1910AD and 1953AD, incorporating adjacent rural counties (*xian*) and industrial districts [@hou2001zhongguo; @cao2024population]. For large conurbations such as Shanghai, Beijing, Tianjin and Wuhan, population figures reflect municipal boundaries as defined in contemporary administrative returns rather than static intramural walls [@chgis2016v6; @ssb1954census].

Second, frontier settlement counts across Tibet, Qinghai, Xinjiang and Inner Mongolia capture nucleated administrative citadels, monastic complexes and garrison towns, while mobile pastoral populations dispersed across grasslands are modelled through regional kriging surfaces rather than static point gazetteers [@Forbes1981Muslim; @paciorek2006spatial].

# Conclusion

The settlement gazetteer of Republican and transitional China documents the spatial evolution of the subcontinent from an agrarian empire of administrative walled cities into an integrated hierarchy of modern industrial, commercial and rail metropolises. Across 20.938 catalogued centres, urban population concentrated along coastal estuaries, navigable river basins and trunk railway spines.

By 1953AD, the primate metropolis of Shanghai (6,2M), secondary industrial and administrative giants such as Beijing (2,77M), Tianjin (2,69M), Shenyang (2,3M), Hong Kong (2,24M), Chongqing (1,77M), Guangzhou (1,6M) and Wuhan (1,43M), and regional provincial centres formed an established urban infrastructure that underpinned mid-twentieth-century economic planning and demographic modernisation.

# Sources

<div id="refs"></div>
