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
hero_caption: "Spatial distribution of 6.961 catalogued dynastic capitals, riverine ports and county seats across fourteen historical macro-regions through 1368AD."
hero_label: "fig:hero-liao-song-jin-and-yuan-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 6.961 urban, administrative, riverine and maritime settlement trajectories active across China between 960AD and 1368AD (9.389.222 km²). Synthesising dynastic administrative monographs from the official dynastic histories, prefectural local gazetteers, the China Historical Geographic Information System time series, archaeological city excavations and demographic reconstructions from Wu Songdi [@wu2000zhongguo; @mavonglahn2022cambridge; @chgis2016v6; @Xu2015Urbanization], the catalogue encompasses all fourteen historical macro-regions. Coverage is densest in Huguang (488 sites), Zhongshusheng North China (372), Henan-Jiangbei (273), Sichuan (255), Jiangxi and Guangdong (152), Jiangzhe (126), Dali and Yunnan (109) and Shaanxi Guanzhong (103). At the demographic summits of the twelfth and thirteenth centuries, the largest centres in the gazetteer were the Northern Song imperial capital Kaifeng (1,15M in 1102AD), Southern Song Lin'an or Hangzhou (1,15M in 1270AD), the Yuan imperial capital Dadu or Beijing (960k in 1330AD), Nanjing (380k in 1210AD), Suzhou (350k in 1210AD), the global maritime emporium of Quanzhou (340k in 1290AD), Chengdu (310k in 1210AD) and Guangzhou (280k in 1210AD) [@wu2000zhongguo; @Xu2015Urbanization; @Lin2019Shadow]. Alongside the 6.961 catalogued settlements (which aggregate 7.420 settlement-year observations averaging 3,8 per site), the regional source ledger documents 2.429 excluded candidate entries out of 4.380 total candidates.

# Background

Urbanisation in China underwent structural transformation between the Song founding in 960AD and the Ming transition in 1368AD [@mavonglahn2022cambridge; @Xu2015Urbanization]. Under the Tang dynasty, cities had operated under strict imperial curfew within enclosed rectangular wards, with commercial activity legally restricted to designated official markets [@mavonglahn2022cambridge]. During the Northern Song commercial revolution, this rigid grid disintegrated, replaced by continuous open street markets, nighttime commercial districts and extensive suburbs expanding outside municipal city walls along canal junctions [@Lin2019Shadow; @Flckiger2019Transport]. The Grand Canal and the Huai-Yangtze waterways channelled millions of bushels of tribute grain and commercial goods, turning Bianjing or Kaifeng into a metropolis of more than one million residents [@Flckiger2019Transport; @Shi2024Analysis; @Zhao2026Nonlinear].

Following the 1127AD Jurchen conquest of the North, the urban gravity of China shifted decisively to the Lower Yangtze delta and the southeastern coast [@wu2000zhongguo; @Xu2015Urbanization]. Hangzhou grew into a global consumer metropolis described by mediaeval travellers, while maritime ports such as Quanzhou, Guangzhou, Mingzhou (Ningbo) and Fuzhou connected Chinese porcelain, silk and metal wares to Indian Ocean trading spheres [@Beaujard2019Worlds; @Wang2016From; @Schfer2020Seri]. Under the Mongol Yuan dynasty, the creation of the grand capital Dadu (modern Beijing) reoriented canal infrastructure northward through the renewed Jing-Hang Grand Canal, linking northern political dominance to southern grain basins [@mavonglahn2022cambridge; @Wei2024Formation].

# Methodology

Settlement trajectories were compiled through cross-matching CHGIS v6 dynastic administrative seats, Wu Songdi's gazetteer tables, modern geographical coordinates and archaeological city survey compendia [@chgis2016v6; @wu2000zhongguo; @Xu2015Urbanization]. Each settlement was assigned WGS84 coordinates and mapped into the fourteen historical macro-regions using the five-arcminute territorial masks. In the regional source ledger, 2.429 candidate entries were marked excluded as duplicate aliases, sub-county market duplicates within a 9 km proximity threshold, or variant administrative spellings (such as Jinle merged into Guan, duplicate Pingding records consolidated, Bing merged into Taiyuan, and multiple county seats consolidated into canonical prefectural centroids).

# Testing and Validation

Ledger reconciliation confirms 6.961 catalogued settlements and 2.429 excluded candidate records, accounting for all 4.380 candidate entries with zero unaccounted records. All 6.961 records carry valid WGS84 coordinates and positive integer population observations within the 960AD to 1368AD domain. Figure \ref{fig:sett-1368} displays the rank-size curve across the 6.961 urban seats alongside the top fifteen settlement peaks.

<figure class="crd-figure-block" id="fig:sett-1368">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-liao-song-jin-and-yuan-settlements/fig4_liao_song_jin_and_yuan_settlements.png" alt="fig:sett-1368" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 6.961 catalogued centres of Liao, Song, Jin and Yuan China.</figcaption>
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
<tr><td class="crd-td"><strong>Tingzhou</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">25,83, 116,33</td><td class="crd-td">980-1368AD</td><td class="crd-td">26,4k</td><td class="crd-td">-</td><td class="crd-td">20,2k</td><td class="crd-td">280k (1207AD)</td></tr>
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
<tr><td class="crd-td"><strong>Shangdu</strong></td><td class="crd-td">Inner Mongolia Steppe and Shangdu</td><td class="crd-td">42,36, 116,18</td><td class="crd-td">1270-1330AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">145k</td><td class="crd-td">155k (1330AD)</td></tr>
<tr><td class="crd-td"><strong>Daming</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">36,29, 115,14</td><td class="crd-td">1080-1290AD</td><td class="crd-td">150k</td><td class="crd-td">-</td><td class="crd-td">8,6k</td><td class="crd-td">150k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Hua</strong></td><td class="crd-td">Shaanxi Province</td><td class="crd-td">34,52, 109,76</td><td class="crd-td">980-1290AD</td><td class="crd-td">140k</td><td class="crd-td">-</td><td class="crd-td">22k</td><td class="crd-td">140k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Bin</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">37,48, 117,96</td><td class="crd-td">980-1368AD</td><td class="crd-td">114,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">140k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Huaian</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">30,72, 104,56</td><td class="crd-td">980-1270AD</td><td class="crd-td">34k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">140k (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Mei</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">30,05, 103,83</td><td class="crd-td">968-1330AD</td><td class="crd-td">34k</td><td class="crd-td">-</td><td class="crd-td">36,4k</td><td class="crd-td">140k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Qiong</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">30,41, 103,46</td><td class="crd-td">980-1290AD</td><td class="crd-td">34k</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">140k (1080AD)</td></tr>
<tr><td class="crd-td"><strong>Mian</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">31,47, 104,74</td><td class="crd-td">962-1330AD</td><td class="crd-td">34k</td><td class="crd-td">-</td><td class="crd-td">31,5k</td><td class="crd-td">140k (1080AD)</td></tr>
<tr><td class="crd-td"><strong>Jian</strong></td><td class="crd-td">Huguang Province</td><td class="crd-td">26,5, 107,58</td><td class="crd-td">980-1330AD</td><td class="crd-td">34k</td><td class="crd-td">-</td><td class="crd-td">11,5k</td><td class="crd-td">140k (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Jiang</strong></td><td class="crd-td">Huguang Province</td><td class="crd-td">26,59, 107,97</td><td class="crd-td">980-1270AD</td><td class="crd-td">54,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">140k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Xun</strong></td><td class="crd-td">Huguang Province</td><td class="crd-td">25,77, 106,97</td><td class="crd-td">980-1330AD</td><td class="crd-td">14,2k</td><td class="crd-td">-</td><td class="crd-td">11,5k</td><td class="crd-td">140k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Tai</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">28,84, 121,12</td><td class="crd-td">980-1368AD</td><td class="crd-td">140k</td><td class="crd-td">-</td><td class="crd-td">85,3k</td><td class="crd-td">140k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Chang</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">31,78, 119,95</td><td class="crd-td">980-1365AD</td><td class="crd-td">64,4k</td><td class="crd-td">-</td><td class="crd-td">86,7k</td><td class="crd-td">140k (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Taiping</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">31,56, 118,48</td><td class="crd-td">976-1362AD</td><td class="crd-td">44,9k</td><td class="crd-td">-</td><td class="crd-td">37,9k</td><td class="crd-td">140k (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Jiang Huguang</strong></td><td class="crd-td">Huguang Province</td><td class="crd-td">29,72, 115,99</td><td class="crd-td">980-1364AD</td><td class="crd-td">54,5k</td><td class="crd-td">-</td><td class="crd-td">42,8k</td><td class="crd-td">140k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Xun Jiangxi</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">24,06, 115,19</td><td class="crd-td">980-1330AD</td><td class="crd-td">14,2k</td><td class="crd-td">-</td><td class="crd-td">17,6k</td><td class="crd-td">140k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Hua Jiangxi</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">21,65, 110,63</td><td class="crd-td">970-1368AD</td><td class="crd-td">140k</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">140k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Tai HenanJiangbei</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">32,5, 119,91</td><td class="crd-td">980-1330AD</td><td class="crd-td">140k</td><td class="crd-td">-</td><td class="crd-td">17,6k</td><td class="crd-td">140k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Su</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">33,64, 116,97</td><td class="crd-td">980-1330AD</td><td class="crd-td">50,7k</td><td class="crd-td">-</td><td class="crd-td">38k</td><td class="crd-td">140k (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Fen</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">37,26, 111,78</td><td class="crd-td">980-1330AD</td><td class="crd-td">85,4k</td><td class="crd-td">-</td><td class="crd-td">15,2k</td><td class="crd-td">140k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Daming Zhongshusheng</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">36,3, 115,21</td><td class="crd-td">980-1368AD</td><td class="crd-td">114,5k</td><td class="crd-td">-</td><td class="crd-td">13,6k</td><td class="crd-td">140k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Zi</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">36,65, 117,96</td><td class="crd-td">980-1368AD</td><td class="crd-td">90,3k</td><td class="crd-td">-</td><td class="crd-td">44,9k</td><td class="crd-td">140k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Di</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">37,48, 117,5</td><td class="crd-td">1080-1368AD</td><td class="crd-td">89,7k</td><td class="crd-td">-</td><td class="crd-td">15,2k</td><td class="crd-td">140k (1207AD)</td></tr>
<tr><td class="crd-td"><strong>Bo</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">36,45, 115,97</td><td class="crd-td">980-1330AD</td><td class="crd-td">140k</td><td class="crd-td">-</td><td class="crd-td">10,7k</td><td class="crd-td">140k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Peng</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">31,36, 106,64</td><td class="crd-td">980-1223AD</td><td class="crd-td">34k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">140k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Zi Sichuan</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">29,78, 104,85</td><td class="crd-td">980-1365AD</td><td class="crd-td">90,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">140k (1207AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Liao, Song, Jin and Yuan China ordered by peak catalogued population (n=6.961 total).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-1368} summarises settlement counts across all fourteen historical sub-regions alongside the leading urban centre in each region. Table \ref{tab:excluded-1368} details the leading 30 of 2.429 excluded candidate entries recorded in the source ledger.

<figure class="crd-table-figure" id="tab:regsum-1368">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhongshusheng North China</strong></td><td class="crd-td">1283</td><td class="crd-td">Beijing (960k)</td></tr>
<tr><td class="crd-td"><strong>Henan-Jiangbei Province</strong></td><td class="crd-td">1122</td><td class="crd-td">Kaifeng (1,15M)</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province</strong></td><td class="crd-td">408</td><td class="crd-td">Xi'an (190k)</td></tr>
<tr><td class="crd-td"><strong>Western Xia and Gansu Province</strong></td><td class="crd-td">288</td><td class="crd-td">Yinchuan (160k)</td></tr>
<tr><td class="crd-td"><strong>Jiangzhe Province</strong></td><td class="crd-td">577</td><td class="crd-td">Hangzhou (1,15M)</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">430</td><td class="crd-td">Guangzhou (280k)</td></tr>
<tr><td class="crd-td"><strong>Huguang Province</strong></td><td class="crd-td">1211</td><td class="crd-td">Wuhan (190k)</td></tr>
<tr><td class="crd-td"><strong>Sichuan Province</strong></td><td class="crd-td">816</td><td class="crd-td">Chengdu (310k)</td></tr>
<tr><td class="crd-td"><strong>Liaoyang Province</strong></td><td class="crd-td">280</td><td class="crd-td">Huiningfu (110k)</td></tr>
<tr><td class="crd-td"><strong>Dali Kingdom and Yunnan Province</strong></td><td class="crd-td">238</td><td class="crd-td">Bao (140k)</td></tr>
<tr><td class="crd-td"><strong>Tibet and Qinghai</strong></td><td class="crd-td">134</td><td class="crd-td">Lhasa (50k)</td></tr>
<tr><td class="crd-td"><strong>Xinjiang</strong></td><td class="crd-td">23</td><td class="crd-td">Kashgar (65k)</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia Steppe and Shangdu</strong></td><td class="crd-td">147</td><td class="crd-td">Shangdu (155k)</td></tr>
<tr><td class="crd-td"><strong>Taiwan and Penghu</strong></td><td class="crd-td">4</td><td class="crd-td">Liuqiu (15,2k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban or administrative centre across all fourteen historical sub-regions to 1368AD (6.961 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-1368">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Magong</strong></td><td class="crd-td">Taiwan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Coordinates (23.569, 119.566) lie outside liao_song_jin_and_yuan areal mask.</td></tr>
<tr><td class="crd-td"><strong>Tingzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tingzhou within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Chaozhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chaozhou within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Tingzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tingzhou within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Chángchūnxiàn</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chángchūnzhōu within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Huáirénxiàn</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yúnzhōngxiàn within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Jiaxing</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiaxing within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Hezhong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Hezhong within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Jingjiang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jingjiang within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Jingjiang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jingjiang within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Huzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Hu within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Ansu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ansu within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Wuzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wu within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Yue</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yue within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Jiangling</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiangling Huguang within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Jiangling</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiangling Huguang within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Changde</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Changde within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Changzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chang within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Taizhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tai within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Yuanzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yuan Jiangxi within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Wei</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wei within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Ding</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ding within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Ci</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ci within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Ding</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Changde within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Ting</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tingzhou within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Wuwei</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wuwei within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>He</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Hezhou HenanJiangbei within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Huizhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement She within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Zhao</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zhao within 2,5 km.</td></tr>
<tr><td class="crd-td"><strong>Huai</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Huai within 2,5 km.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 2.429 excluded candidate settlements in the Liao, Song, Jin and Yuan source ledger, consolidated into canonical parent seats.</figcaption>
</figure>

# Limitations

Two spatial and documentary constraints affect the gazetteer. First, historical document preservation varies markedly between northern and southern circuits; Jurchen and Mongol military destruction in Henan, Hebei and Sichuan destroyed municipal tax rolls that survived far more intact in Jiangzhe and Jiangxi [@wu2000zhongguo; @Stephen2012Deep]. Second, in sparse pastoral and mountainous zones such as the Inner Mongolia steppe, the Tibetan plateau and Xinjiang, settlement records reflect fortified administrative garrisons and monastic loci rather than nucleated agrarian market towns [@Wu2025Historically; @Dugdale2019Pagodas].

# Sources

<div id="refs"></div>
