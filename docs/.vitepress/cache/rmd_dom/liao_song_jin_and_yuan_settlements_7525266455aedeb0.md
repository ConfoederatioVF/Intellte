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
hero_caption: "Spatial distribution of 1.951 catalogued dynastic capitals, riverine ports and county seats across fourteen historical macro-regions through 1368AD."
hero_label: "fig:hero-liao-song-jin-and-yuan-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 1.951 urban, administrative, riverine and maritime settlement trajectories active across China between 960AD and 1368AD (9.389.222 km²). Synthesising dynastic administrative monographs from the official dynastic histories, prefectural local gazetteers, the China Historical Geographic Information System time series, archaeological city excavations and demographic reconstructions from Wu Songdi [@wu2000zhongguo; @mavonglahn2022cambridge; @chgis2016v6; @Xu2015Urbanization], the catalogue encompasses all fourteen historical macro-regions. Coverage is densest in Huguang (488 sites), Zhongshusheng North China (372), Henan-Jiangbei (273), Sichuan (255), Jiangxi and Guangdong (152), Jiangzhe (126), Dali and Yunnan (109) and Shaanxi Guanzhong (103). At the demographic summits of the twelfth and thirteenth centuries, the largest centres in the gazetteer were the Northern Song imperial capital Kaifeng (1,15M in 1102AD), Southern Song Lin'an or Hangzhou (1,15M in 1270AD), the Yuan imperial capital Dadu or Beijing (960k in 1330AD), Nanjing (380k in 1210AD), Suzhou (350k in 1210AD), the global maritime emporium of Quanzhou (340k in 1290AD), Chengdu (310k in 1210AD) and Guangzhou (280k in 1210AD) [@wu2000zhongguo; @Xu2015Urbanization; @Lin2019Shadow]. Alongside the 1.951 catalogued settlements (which aggregate 7.420 settlement-year observations averaging 3,8 per site), the regional source ledger documents 2.429 excluded candidate entries out of 4.380 total candidates.

# Background

Urbanisation in China underwent structural transformation between the Song founding in 960AD and the Ming transition in 1368AD [@mavonglahn2022cambridge; @Xu2015Urbanization]. Under the Tang dynasty, cities had operated under strict imperial curfew within enclosed rectangular wards, with commercial activity legally restricted to designated official markets [@mavonglahn2022cambridge]. During the Northern Song commercial revolution, this rigid grid disintegrated, replaced by continuous open street markets, nighttime commercial districts and extensive suburbs expanding outside municipal city walls along canal junctions [@Lin2019Shadow; @Flckiger2019Transport]. The Grand Canal and the Huai-Yangtze waterways channelled millions of bushels of tribute grain and commercial goods, turning Bianjing or Kaifeng into a metropolis of more than one million residents [@Flckiger2019Transport; @Shi2024Analysis; @Zhao2026Nonlinear].

Following the 1127AD Jurchen conquest of the North, the urban gravity of China shifted decisively to the Lower Yangtze delta and the southeastern coast [@wu2000zhongguo; @Xu2015Urbanization]. Hangzhou grew into a global consumer metropolis described by mediaeval travellers, while maritime ports such as Quanzhou, Guangzhou, Mingzhou (Ningbo) and Fuzhou connected Chinese porcelain, silk and metal wares to Indian Ocean trading spheres [@Beaujard2019Worlds; @Wang2016From; @Schfer2020Seri]. Under the Mongol Yuan dynasty, the creation of the grand capital Dadu (modern Beijing) reoriented canal infrastructure northward through the renewed Jing-Hang Grand Canal, linking northern political dominance to southern grain basins [@mavonglahn2022cambridge; @Wei2024Formation].

# Methodology

Settlement trajectories were compiled through cross-matching CHGIS v6 dynastic administrative seats, Wu Songdi's gazetteer tables, modern geographical coordinates and archaeological city survey compendia [@chgis2016v6; @wu2000zhongguo; @Xu2015Urbanization]. Each settlement was assigned WGS84 coordinates and mapped into the fourteen historical macro-regions using the five-arcminute territorial masks. In the regional source ledger, 2.429 candidate entries were marked excluded as duplicate aliases, sub-county market duplicates within a 9 km proximity threshold, or variant administrative spellings (such as Jinle merged into Guan, duplicate Pingding records consolidated, Bing merged into Taiyuan, and multiple county seats consolidated into canonical prefectural centroids).

# Testing and Validation

Ledger reconciliation confirms 1.951 catalogued settlements and 2.429 excluded candidate records, accounting for all 4.380 candidate entries with zero unaccounted records. All 1.951 records carry valid WGS84 coordinates and positive integer population observations within the 960AD to 1368AD domain. Figure \ref{fig:sett-1368} displays the rank-size curve across the 1.951 urban seats alongside the top fifteen settlement peaks.

<figure class="crd-figure-block" id="fig:sett-1368">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-liao-song-jin-and-yuan-settlements/fig4_liao_song_jin_and_yuan_settlements.png" alt="fig:sett-1368" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 1.951 catalogued centres of Liao, Song, Jin and Yuan China.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-1368} reports the top 45 settlements ranked by peak observed population, documenting administrative rank, provincial territory, geographic coordinates, temporal span, benchmark counts at 1102AD, 1210AD and 1290AD, and peak population with year.

<figure class="crd-table-figure" id="tab:top45-1368">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1102AD</th><th class="crd-th">1210AD</th><th class="crd-th">1290AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kaifeng</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">34,8, 114,31</td><td class="crd-td">960-1290AD</td><td class="crd-td">1,15M</td><td class="crd-td">420k</td><td class="crd-td">160k</td><td class="crd-td">1,15M (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Hangzhou</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">30,27, 120,16</td><td class="crd-td">960-1290AD</td><td class="crd-td">320k</td><td class="crd-td">1,08M</td><td class="crd-td">850k</td><td class="crd-td">1,15M (1270AD)</td></tr>
<tr><td class="crd-td"><strong>Beijing</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">39,9, 116,41</td><td class="crd-td">960-1330AD</td><td class="crd-td">240k</td><td class="crd-td">420k</td><td class="crd-td">850k</td><td class="crd-td">960k (1330AD)</td></tr>
<tr><td class="crd-td"><strong>Nanjing</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">32,06, 118,8</td><td class="crd-td">960-1290AD</td><td class="crd-td">240k</td><td class="crd-td">380k</td><td class="crd-td">340k</td><td class="crd-td">380k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Suzhou</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">31,3, 120,58</td><td class="crd-td">960-1290AD</td><td class="crd-td">290k</td><td class="crd-td">350k</td><td class="crd-td">320k</td><td class="crd-td">350k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Quanzhou</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">24,87, 118,68</td><td class="crd-td">1102-1290AD</td><td class="crd-td">220k</td><td class="crd-td">320k</td><td class="crd-td">340k</td><td class="crd-td">340k (1290AD)</td></tr>
<tr><td class="crd-td"><strong>Chengdu</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">30,57, 104,07</td><td class="crd-td">960-1290AD</td><td class="crd-td">280k</td><td class="crd-td">310k</td><td class="crd-td">95k</td><td class="crd-td">310k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Guangzhou</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">23,13, 113,26</td><td class="crd-td">960-1290AD</td><td class="crd-td">260k</td><td class="crd-td">280k</td><td class="crd-td">240k</td><td class="crd-td">280k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Fuzhou</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">26,07, 119,3</td><td class="crd-td">1102-1210AD</td><td class="crd-td">210k</td><td class="crd-td">250k</td><td class="crd-td">-</td><td class="crd-td">250k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Luoyang</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">34,62, 112,45</td><td class="crd-td">960-1290AD</td><td class="crd-td">220k</td><td class="crd-td">-</td><td class="crd-td">85k</td><td class="crd-td">220k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Nanchang</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">28,68, 115,86</td><td class="crd-td">1102-1210AD</td><td class="crd-td">190k</td><td class="crd-td">220k</td><td class="crd-td">-</td><td class="crd-td">220k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Yangzhou</strong></td><td class="crd-td">Henan-Jiangbei Province</td><td class="crd-td">32,39, 119,41</td><td class="crd-td">1102-1290AD</td><td class="crd-td">200k</td><td class="crd-td">-</td><td class="crd-td">170k</td><td class="crd-td">200k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Ningbo</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">29,87, 121,54</td><td class="crd-td">1102-1210AD</td><td class="crd-td">150k</td><td class="crd-td">200k</td><td class="crd-td">-</td><td class="crd-td">200k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Wuhan</strong></td><td class="crd-td">Huguang Province</td><td class="crd-td">30,59, 114,31</td><td class="crd-td">1102-1210AD</td><td class="crd-td">160k</td><td class="crd-td">190k</td><td class="crd-td">-</td><td class="crd-td">190k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Xi'an</strong></td><td class="crd-td">Shaanxi Province</td><td class="crd-td">34,26, 108,95</td><td class="crd-td">960-1290AD</td><td class="crd-td">180k</td><td class="crd-td">-</td><td class="crd-td">140k</td><td class="crd-td">180k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Changsha</strong></td><td class="crd-td">Huguang Province</td><td class="crd-td">28,23, 112,94</td><td class="crd-td">1102-1210AD</td><td class="crd-td">140k</td><td class="crd-td">180k</td><td class="crd-td">-</td><td class="crd-td">180k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">37,87, 112,55</td><td class="crd-td">1102-1290AD</td><td class="crd-td">160k</td><td class="crd-td">-</td><td class="crd-td">110k</td><td class="crd-td">160k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Yinchuan</strong></td><td class="crd-td">Western Xia and Gansu Province</td><td class="crd-td">38,49, 106,23</td><td class="crd-td">1102-1290AD</td><td class="crd-td">150k</td><td class="crd-td">160k</td><td class="crd-td">65k</td><td class="crd-td">160k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Shangdu</strong></td><td class="crd-td">Inner Mongolia Steppe and Shangdu</td><td class="crd-td">42,36, 116,18</td><td class="crd-td">1270-1330AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">145k</td><td class="crd-td">155k (1330AD)</td></tr>
<tr><td class="crd-td"><strong>Shangjing Linhuangfu</strong></td><td class="crd-td">Inner Mongolia Steppe and Shangdu</td><td class="crd-td">43,96, 119,38</td><td class="crd-td">980-1102AD</td><td class="crd-td">120k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">120k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Dali</strong></td><td class="crd-td">Dali Kingdom and Yunnan Province</td><td class="crd-td">25,61, 100,27</td><td class="crd-td">1102-1290AD</td><td class="crd-td">110k</td><td class="crd-td">115k</td><td class="crd-td">75k</td><td class="crd-td">115k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Jinan</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">36,65, 117,12</td><td class="crd-td">1102-1290AD</td><td class="crd-td">110k</td><td class="crd-td">-</td><td class="crd-td">90k</td><td class="crd-td">110k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Huiningfu</strong></td><td class="crd-td">Liaoyang Province</td><td class="crd-td">45,52, 126,97</td><td class="crd-td">1135-1210AD</td><td class="crd-td">-</td><td class="crd-td">85k</td><td class="crd-td">-</td><td class="crd-td">110k (1135AD)</td></tr>
<tr><td class="crd-td"><strong>Chongqing</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">29,56, 106,55</td><td class="crd-td">1102-1210AD</td><td class="crd-td">80k</td><td class="crd-td">105k</td><td class="crd-td">-</td><td class="crd-td">105k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Kunming</strong></td><td class="crd-td">Dali Kingdom and Yunnan Province</td><td class="crd-td">25,04, 102,72</td><td class="crd-td">1102-1290AD</td><td class="crd-td">65k</td><td class="crd-td">-</td><td class="crd-td">95k</td><td class="crd-td">95k (1290AD)</td></tr>
<tr><td class="crd-td"><strong>Kashgar</strong></td><td class="crd-td">Xinjiang</td><td class="crd-td">39,47, 75,99</td><td class="crd-td">1102-1290AD</td><td class="crd-td">65k</td><td class="crd-td">-</td><td class="crd-td">60k</td><td class="crd-td">65k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Shanghai</strong></td><td class="crd-td">Jiangzhe Province</td><td class="crd-td">31,23, 121,47</td><td class="crd-td">1102-1290AD</td><td class="crd-td">25k</td><td class="crd-td">-</td><td class="crd-td">55k</td><td class="crd-td">55k (1290AD)</td></tr>
<tr><td class="crd-td"><strong>Shenyang</strong></td><td class="crd-td">Liaoyang Province</td><td class="crd-td">41,81, 123,43</td><td class="crd-td">1102-1290AD</td><td class="crd-td">45k</td><td class="crd-td">-</td><td class="crd-td">55k</td><td class="crd-td">55k (1290AD)</td></tr>
<tr><td class="crd-td"><strong>Lanzhou</strong></td><td class="crd-td">Western Xia and Gansu Province</td><td class="crd-td">36,06, 103,83</td><td class="crd-td">1102-1102AD</td><td class="crd-td">55k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">55k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Turpan</strong></td><td class="crd-td">Xinjiang</td><td class="crd-td">42,95, 89,19</td><td class="crd-td">1102-1290AD</td><td class="crd-td">52k</td><td class="crd-td">-</td><td class="crd-td">45k</td><td class="crd-td">52k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Lhasa</strong></td><td class="crd-td">Tibet and Qinghai</td><td class="crd-td">29,65, 91,17</td><td class="crd-td">1102-1290AD</td><td class="crd-td">45k</td><td class="crd-td">-</td><td class="crd-td">50k</td><td class="crd-td">50k (1290AD)</td></tr>
<tr><td class="crd-td"><strong>Guan</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">38,36, 111,94</td><td class="crd-td">1210-1210AD</td><td class="crd-td">-</td><td class="crd-td">43,2k</td><td class="crd-td">-</td><td class="crd-td">43,2k (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Xin</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">38,4, 112,73</td><td class="crd-td">980-1210AD</td><td class="crd-td">43,2k</td><td class="crd-td">43,2k</td><td class="crd-td">-</td><td class="crd-td">43,2k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Pingding</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">37,72, 113,63</td><td class="crd-td">978-978AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43,2k (978AD)</td></tr>
<tr><td class="crd-td"><strong>Pingjin</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">37,61, 113,7</td><td class="crd-td">970-970AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43,2k (970AD)</td></tr>
<tr><td class="crd-td"><strong>Bing</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">37,68, 112,74</td><td class="crd-td">980-980AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43,2k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Kelan</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">38,7, 111,57</td><td class="crd-td">980-1102AD</td><td class="crd-td">43,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43,2k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Lan</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">38,39, 111,69</td><td class="crd-td">980-1210AD</td><td class="crd-td">43,2k</td><td class="crd-td">43,2k</td><td class="crd-td">-</td><td class="crd-td">43,2k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Ze</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">37,34, 112,45</td><td class="crd-td">1224-1224AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43,2k (1224AD)</td></tr>
<tr><td class="crd-td"><strong>Ninghua</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">38,64, 112,1</td><td class="crd-td">980-1102AD</td><td class="crd-td">43,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43,2k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Fen</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">37,26, 111,78</td><td class="crd-td">980-1210AD</td><td class="crd-td">43,2k</td><td class="crd-td">43,2k</td><td class="crd-td">-</td><td class="crd-td">43,2k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Liao</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">37,07, 113,37</td><td class="crd-td">980-980AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43,2k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Qin</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">36,5, 112,33</td><td class="crd-td">980-980AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43,2k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Weisheng</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">36,76, 112,7</td><td class="crd-td">980-1102AD</td><td class="crd-td">43,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43,2k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Huo</strong></td><td class="crd-td">Zhongshusheng North China</td><td class="crd-td">36,56, 111,73</td><td class="crd-td">1237-1237AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43,2k (1237AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Liao, Song, Jin and Yuan China ordered by peak catalogued population (n=1.951 total).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-1368} summarises settlement counts across all fourteen historical sub-regions alongside the leading urban centre in each region. Table \ref{tab:excluded-1368} details the leading 30 of 2.429 excluded candidate entries recorded in the source ledger.

<figure class="crd-table-figure" id="tab:regsum-1368">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhongshusheng North China</strong></td><td class="crd-td">372</td><td class="crd-td">Beijing (960k)</td></tr>
<tr><td class="crd-td"><strong>Henan-Jiangbei Province</strong></td><td class="crd-td">273</td><td class="crd-td">Kaifeng (1,15M)</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province</strong></td><td class="crd-td">103</td><td class="crd-td">Xi'an (180k)</td></tr>
<tr><td class="crd-td"><strong>Western Xia and Gansu Province</strong></td><td class="crd-td">58</td><td class="crd-td">Yinchuan (160k)</td></tr>
<tr><td class="crd-td"><strong>Jiangzhe Province</strong></td><td class="crd-td">126</td><td class="crd-td">Hangzhou (1,15M)</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">152</td><td class="crd-td">Guangzhou (280k)</td></tr>
<tr><td class="crd-td"><strong>Huguang Province</strong></td><td class="crd-td">488</td><td class="crd-td">Wuhan (190k)</td></tr>
<tr><td class="crd-td"><strong>Sichuan Province</strong></td><td class="crd-td">255</td><td class="crd-td">Chengdu (310k)</td></tr>
<tr><td class="crd-td"><strong>Liaoyang Province</strong></td><td class="crd-td">2</td><td class="crd-td">Huiningfu (110k)</td></tr>
<tr><td class="crd-td"><strong>Dali Kingdom and Yunnan Province</strong></td><td class="crd-td">109</td><td class="crd-td">Dali (115k)</td></tr>
<tr><td class="crd-td"><strong>Tibet and Qinghai</strong></td><td class="crd-td">5</td><td class="crd-td">Lhasa (50k)</td></tr>
<tr><td class="crd-td"><strong>Xinjiang</strong></td><td class="crd-td">2</td><td class="crd-td">Kashgar (65k)</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia Steppe and Shangdu</strong></td><td class="crd-td">5</td><td class="crd-td">Shangdu (155k)</td></tr>
<tr><td class="crd-td"><strong>Taiwan and Penghu</strong></td><td class="crd-td">1</td><td class="crd-td">Shisanhang (7k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban or administrative centre across all fourteen historical sub-regions to 1368AD (1.951 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-1368">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jinle</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Guan.</td></tr>
<tr><td class="crd-td"><strong>Pingding</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Pingding.</td></tr>
<tr><td class="crd-td"><strong>Pingding</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Pingding.</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Taiyuan.</td></tr>
<tr><td class="crd-td"><strong>Bing</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Taiyuan.</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Taiyuan.</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Taiyuan.</td></tr>
<tr><td class="crd-td"><strong>Jining</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Taiyuan.</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Taiyuan.</td></tr>
<tr><td class="crd-td"><strong>Kelan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Kelan.</td></tr>
<tr><td class="crd-td"><strong>Ninghua</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Ninghua.</td></tr>
<tr><td class="crd-td"><strong>Liao</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Liao.</td></tr>
<tr><td class="crd-td"><strong>Nanliao</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Liao.</td></tr>
<tr><td class="crd-td"><strong>Liao</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Liao.</td></tr>
<tr><td class="crd-td"><strong>Liao</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Liao.</td></tr>
<tr><td class="crd-td"><strong>Qin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Weisheng.</td></tr>
<tr><td class="crd-td"><strong>Qin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Weisheng.</td></tr>
<tr><td class="crd-td"><strong>Jin'an</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Jiang.</td></tr>
<tr><td class="crd-td"><strong>Longde</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Lu.</td></tr>
<tr><td class="crd-td"><strong>Longde</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Lu.</td></tr>
<tr><td class="crd-td"><strong>Lu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Lu.</td></tr>
<tr><td class="crd-td"><strong>Longde</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Lu.</td></tr>
<tr><td class="crd-td"><strong>Ci</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Ci.</td></tr>
<tr><td class="crd-td"><strong>Geng</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Ci.</td></tr>
<tr><td class="crd-td"><strong>Ji</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Ci.</td></tr>
<tr><td class="crd-td"><strong>Pingyang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Pingyang.</td></tr>
<tr><td class="crd-td"><strong>Jinning</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Pingyang.</td></tr>
<tr><td class="crd-td"><strong>Pingyang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Pingyang.</td></tr>
<tr><td class="crd-td"><strong>Pu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Hezhong.</td></tr>
<tr><td class="crd-td"><strong>Hezhong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 9 km of higher-ranked settlement Hezhong.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 2.429 excluded candidate settlements in the Liao, Song, Jin and Yuan source ledger, consolidated into canonical parent seats.</figcaption>
</figure>

# Limitations

Two spatial and documentary constraints affect the gazetteer. First, historical document preservation varies markedly between northern and southern circuits; Jurchen and Mongol military destruction in Henan, Hebei and Sichuan destroyed municipal tax rolls that survived far more intact in Jiangzhe and Jiangxi [@wu2000zhongguo; @Stephen2012Deep]. Second, in sparse pastoral and mountainous zones such as the Inner Mongolia steppe, the Tibetan plateau and Xinjiang, settlement records reflect fortified administrative garrisons and monastic loci rather than nucleated agrarian market towns [@Wu2025Historically; @Dugdale2019Pagodas].

# Sources

<div id="refs"></div>
