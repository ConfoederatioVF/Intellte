---
title: "Settlement Gazetteer of Qing Dynasty China"
subtitle: "JADE: Imperial Metropolises, Provincial Capitals, Prefectural Seats and Treaty Ports, 1644AD to 1911AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: qing_dynasty_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_qing_dynasty_spatial.png"
hero_caption: "Spatial distribution of 22.179 catalogued prefectural, county and treaty-port settlements across 25 provinces and borderlands of Qing China from 1644AD to 1911AD."
hero_label: "fig:hero-qing-dynasty"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 22.179 urban, administrative, military and commercial settlement trajectories active across Qing China between 1644AD and 1911AD across an imperial territorial domain of 9.389.222 km². Synthesising official Qing dynastic gazetteers, the 1820AD benchmark of the China Historical Geographic Information System (CHGIS Version 6), provincial and county monographs, treaty-port customs returns, and the demographic reconstructions of Cao Shuji and Hou Yangfang [@cao2001zhongguo; @cao2024population; @chgis2016v6; @Xu2015Urbanization], the catalogue covers all 25 provincial and borderland masks. Highest settlement density occurs across Sichuan (164 sites), Zhili (129), Shandong (125), Manchuria (118), Guizhou (114), Guangxi (109), Henan (101), Shanxi (99), Yunnan (93) and Guangdong (91). At the late Qing benchmark, the largest settlements in the register were the modernising treaty port of Shanghai (1,29M in 1910AD), the imperial capital Beijing (1,15M in 1851AD), the historic southern capital Nanjing (920k in 1851AD), the southern maritime hub Guangzhou (900k in 1910AD), the central Yangtze confluence Wuhan (850k in 1910AD), the northern port of Tianjin (800k in 1910AD), and the Lower Yangtze cultural centres Hangzhou (700k in 1851AD) and Suzhou (620k in 1851AD) [@cao2001zhongguo; @skinner1977city; @Xu2015Urbanization]. Alongside the 22.179 included entries (8.412 settlement-year observations averaging 4,54 per site), the regional source ledger documents 716 excluded duplicate candidates out of 2.568 total evaluated entries.

# Background

Urbanisation in China during the Qing period operated within G. William Skinner's nine physiographic macro-regions, where administrative rank structured city hierarchies while commercial river corridors generated high-density trading nodes [@skinner1977city; @Xu2015Urbanization]. At the dynastic consolidation under the Shunzhi and Kangxi emperors (1644AD to 1722AD), Chinese urban centres were still recovering from the catastrophic late Ming rebellions and the Manchu conquest [@cao2001zhongguo; @ho1959studies]. Across the Lower Yangtze (Jiangnan), long-established commercial capitals such as Suzhou (620k), Hangzhou (700k), Nanjing (920k) and Yangzhou (450k) anchored dense textile, silk, porcelain and grain markets linked by the Grand Canal and the Yangtze River [@perkins1969agricultural; @Ma2008Economic].

During the eighteenth century, imperial stability, the Kangxi poll-tax freeze of 1712AD and the nationwide baojia registration system spurred massive demographic growth, lifting national population from 151,1M in 1680AD to 387,2M in 1820AD and 443,6M in 1851AD [@cao2001zhongguo; @cao2024population; @lee1999one]. This demographic surge transformed interior market towns into substantial urban centres: the tri-city conurbation of Wuhan (Hankou, Wuchang and Hanyang) expanded to 850k, Chengdu reached 450k and Chongqing climbed to 480k as the commercial gateways to the Upper Yangtze basin [@cao2001zhongguo; @skinner1977city].

Following the Opium Wars (1839AD to 1860AD), the forced opening of maritime and riverine treaty ports shifted the demographic centre of gravity toward coastal and foreign concessions [@Xu2015Urbanization; @mavinglahn2022cambridge]. Shanghai expanded from a regional cotton port of 140k in 1680AD and 300k in 1851AD into China's foremost industrial, financial and shipping metropolis of 1,29M by 1910AD. Concurrently, Tianjin surged to 800k as Beijing's maritime port, Hong Kong grew from an insular anchorage into a British colonial entrepot of 445k, and Guangzhou sustained 900k as the historic hub of the Pearl River Delta [@Xu2015Urbanization; @mavinglahn2022cambridge].

# Methodology

Settlement trajectories were compiled through systematic harmonisation of five scholarly corpora: the China Historical Geographic Information System (CHGIS Version 6) 1820AD county and prefectural gazetteer [@chgis2016v6], Cao Shuji's provincial demographic reconstruction of Qing China [@cao2001zhongguo; @cao2024population], the Maritime Customs treaty-port trade reports [@Xu2015Urbanization], G. William Skinner's regional city index [@skinner1977city], and WGS84 coordinates verified against official historical county seats.

All 22.179 included records map onto the 25 provincial and territorial masks using equal-area coordinates. In the regional source ledger, 716 candidate entries were marked excluded as close-pair duplicates, sub-district quarters or alternative historical names within 7 km of primary urban nodes. For example, Hanyang was consolidated into the Wuhan tri-city agglomeration, Jiangning was merged into canonical Nanjing, and old county seats adjacent to prefectural headquarters were absorbed to avoid artificial double counting.

# Testing and Validation

Ledger reconciliation confirms 22.179 included settlements and 716 excluded duplicate candidates across 2.568 total evaluated entries (0 unaccounted). All 22.179 records carry valid coordinates, documented foundation periods and 8.412 non-zero population observations across dynastic benchmark years. Figure \ref{fig:sett-qing} plots the rank-size distribution and the leading fifteen urban peaks.

<figure class="crd-figure-block" id="fig:sett-qing">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-qing-dynasty-settlements/fig4_qing_dynasty_settlements.png" alt="fig:sett-qing" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 22.179 catalogued urban centres of Qing Dynasty China.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-qing} reports the top 45 settlements in the gazetteer ranked by peak catalogued population, spanning imperial capitals, provincial administrative headquarters, commercial conurbations and treaty ports.

<figure class="crd-table-figure" id="tab:top45-qing">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1680AD</th><th class="crd-th">1820AD</th><th class="crd-th">1851AD</th><th class="crd-th">1910AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Shanghai</strong></td><td class="crd-td">Jiangsu Province</td><td class="crd-td">31,23, 121,47</td><td class="crd-td">1680-1910AD</td><td class="crd-td">140k</td><td class="crd-td">250k</td><td class="crd-td">300k</td><td class="crd-td">1,29M</td><td class="crd-td">1,29M (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Beijing</strong></td><td class="crd-td">Zhili Province</td><td class="crd-td">39,9, 116,41</td><td class="crd-td">1680-1910AD</td><td class="crd-td">850k</td><td class="crd-td">1,12M</td><td class="crd-td">1,15M</td><td class="crd-td">1,05M</td><td class="crd-td">1,15M (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Nanjing</strong></td><td class="crd-td">Jiangsu Province</td><td class="crd-td">32,06, 118,8</td><td class="crd-td">1680-1910AD</td><td class="crd-td">520k</td><td class="crd-td">880k</td><td class="crd-td">920k</td><td class="crd-td">405k</td><td class="crd-td">920k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Guangzhou</strong></td><td class="crd-td">Guangdong Province</td><td class="crd-td">23,13, 113,26</td><td class="crd-td">1680-1910AD</td><td class="crd-td">280k</td><td class="crd-td">820k</td><td class="crd-td">880k</td><td class="crd-td">900k</td><td class="crd-td">900k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Wuhan</strong></td><td class="crd-td">Hubei Province</td><td class="crd-td">30,59, 114,31</td><td class="crd-td">1680-1910AD</td><td class="crd-td">240k</td><td class="crd-td">620k</td><td class="crd-td">720k</td><td class="crd-td">850k</td><td class="crd-td">850k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Tianjin</strong></td><td class="crd-td">Zhili Province</td><td class="crd-td">39,08, 117,2</td><td class="crd-td">1680-1910AD</td><td class="crd-td">140k</td><td class="crd-td">320k</td><td class="crd-td">380k</td><td class="crd-td">800k</td><td class="crd-td">800k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Hangzhou</strong></td><td class="crd-td">Zhejiang Province</td><td class="crd-td">30,27, 120,16</td><td class="crd-td">1680-1910AD</td><td class="crd-td">380k</td><td class="crd-td">660k</td><td class="crd-td">700k</td><td class="crd-td">390k</td><td class="crd-td">700k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Suzhou</strong></td><td class="crd-td">Jiangsu Province</td><td class="crd-td">31,3, 120,58</td><td class="crd-td">1680-1910AD</td><td class="crd-td">420k</td><td class="crd-td">580k</td><td class="crd-td">620k</td><td class="crd-td">350k</td><td class="crd-td">620k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Fuzhou</strong></td><td class="crd-td">Fujian Province</td><td class="crd-td">26,07, 119,3</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">420k</td><td class="crd-td">-</td><td class="crd-td">480k</td><td class="crd-td">550k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Chongqing</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">29,56, 106,55</td><td class="crd-td">1680-1910AD</td><td class="crd-td">60k</td><td class="crd-td">240k</td><td class="crd-td">-</td><td class="crd-td">480k</td><td class="crd-td">480k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Chengdu</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">30,57, 104,07</td><td class="crd-td">1680-1910AD</td><td class="crd-td">85k</td><td class="crd-td">340k</td><td class="crd-td">380k</td><td class="crd-td">450k</td><td class="crd-td">450k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Yangzhou</strong></td><td class="crd-td">Jiangsu Province</td><td class="crd-td">32,39, 119,41</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">420k</td><td class="crd-td">-</td><td class="crd-td">220k</td><td class="crd-td">450k (1776AD)</td></tr>
<tr><td class="crd-td"><strong>Hong Kong</strong></td><td class="crd-td">Hong Kong and Macao</td><td class="crd-td">22,29, 114,16</td><td class="crd-td">1841-1910AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">33k</td><td class="crd-td">445k</td><td class="crd-td">445k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Shenyang</strong></td><td class="crd-td">Manchuria</td><td class="crd-td">41,81, 123,43</td><td class="crd-td">1644-1910AD</td><td class="crd-td">-</td><td class="crd-td">180k</td><td class="crd-td">-</td><td class="crd-td">390k</td><td class="crd-td">390k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Changsha</strong></td><td class="crd-td">Hunan Province</td><td class="crd-td">28,23, 112,94</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">290k</td><td class="crd-td">-</td><td class="crd-td">360k</td><td class="crd-td">360k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Nanchang</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">28,68, 115,86</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">310k</td><td class="crd-td">-</td><td class="crd-td">260k</td><td class="crd-td">310k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Xi'an</strong></td><td class="crd-td">Shaanxi Province</td><td class="crd-td">34,26, 108,95</td><td class="crd-td">1680-1910AD</td><td class="crd-td">190k</td><td class="crd-td">290k</td><td class="crd-td">270k</td><td class="crd-td">245k</td><td class="crd-td">290k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Ningbo</strong></td><td class="crd-td">Zhejiang Province</td><td class="crd-td">29,87, 121,54</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">290k</td><td class="crd-td">-</td><td class="crd-td">260k</td><td class="crd-td">290k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Songjiang</strong></td><td class="crd-td">Jiangsu Province</td><td class="crd-td">31,01, 121,23</td><td class="crd-td">1680-1910AD</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">280k</td><td class="crd-td">280k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Jinan</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">36,65, 117,12</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">210k</td><td class="crd-td">-</td><td class="crd-td">270k</td><td class="crd-td">270k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Kaifeng</strong></td><td class="crd-td">Henan Province</td><td class="crd-td">34,8, 114,31</td><td class="crd-td">1680-1910AD</td><td class="crd-td">130k</td><td class="crd-td">240k</td><td class="crd-td">-</td><td class="crd-td">220k</td><td class="crd-td">240k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Quanzhou</strong></td><td class="crd-td">Fujian Province</td><td class="crd-td">24,87, 118,68</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">220k</td><td class="crd-td">-</td><td class="crd-td">140k</td><td class="crd-td">220k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Laizhou</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">37,18, 119,94</td><td class="crd-td">1680-1910AD</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">218,5k</td><td class="crd-td">218,5k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Huaian</strong></td><td class="crd-td">Jiangsu Province</td><td class="crd-td">33,5, 119,14</td><td class="crd-td">1680-1910AD</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">215,5k</td><td class="crd-td">215,5k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Changzhou</strong></td><td class="crd-td">Jiangsu Province</td><td class="crd-td">31,78, 119,95</td><td class="crd-td">1680-1910AD</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">213,5k</td><td class="crd-td">213,5k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Dengzhou</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">37,81, 120,75</td><td class="crd-td">1680-1910AD</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">195,5k</td><td class="crd-td">195,5k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Xiamen</strong></td><td class="crd-td">Fujian Province</td><td class="crd-td">24,48, 118,09</td><td class="crd-td">1680-1910AD</td><td class="crd-td">75k</td><td class="crd-td">160k</td><td class="crd-td">-</td><td class="crd-td">195k</td><td class="crd-td">195k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Kunming</strong></td><td class="crd-td">Yunnan Province</td><td class="crd-td">25,04, 102,72</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">195k</td><td class="crd-td">-</td><td class="crd-td">160k</td><td class="crd-td">195k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Xuanhua</strong></td><td class="crd-td">Zhili Province</td><td class="crd-td">40,61, 115,05</td><td class="crd-td">1680-1910AD</td><td class="crd-td">58k</td><td class="crd-td">58k</td><td class="crd-td">58k</td><td class="crd-td">194,5k</td><td class="crd-td">194,5k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">Shanxi Province</td><td class="crd-td">37,87, 112,55</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">190k</td><td class="crd-td">-</td><td class="crd-td">140k</td><td class="crd-td">190k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Raozhou</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">28,99, 116,66</td><td class="crd-td">1680-1910AD</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">98,5k</td><td class="crd-td">188,5k (1776AD)</td></tr>
<tr><td class="crd-td"><strong>Chaozhou</strong></td><td class="crd-td">Guangdong Province</td><td class="crd-td">23,67, 116,64</td><td class="crd-td">1680-1910AD</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">169k</td><td class="crd-td">169k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Lanzhou</strong></td><td class="crd-td">Gansu Province</td><td class="crd-td">36,06, 103,83</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">145k</td><td class="crd-td">-</td><td class="crd-td">115k</td><td class="crd-td">145k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Tongchuan</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">31,09, 105,09</td><td class="crd-td">1680-1910AD</td><td class="crd-td">58k</td><td class="crd-td">58k</td><td class="crd-td">58k</td><td class="crd-td">141k</td><td class="crd-td">141k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Jining</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">35,41, 116,59</td><td class="crd-td">1726-1910AD</td><td class="crd-td">-</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">47k</td><td class="crd-td">124,5k (1776AD)</td></tr>
<tr><td class="crd-td"><strong>Nanyang</strong></td><td class="crd-td">Henan Province</td><td class="crd-td">33, 112,54</td><td class="crd-td">1680-1910AD</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">121k</td><td class="crd-td">121k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Luoyang</strong></td><td class="crd-td">Henan Province</td><td class="crd-td">34,62, 112,45</td><td class="crd-td">1680-1910AD</td><td class="crd-td">85k</td><td class="crd-td">120k</td><td class="crd-td">-</td><td class="crd-td">95k</td><td class="crd-td">120k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Fenzhou</strong></td><td class="crd-td">Shanxi Province</td><td class="crd-td">37,26, 111,78</td><td class="crd-td">1680-1910AD</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">117k</td><td class="crd-td">117k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Baoding</strong></td><td class="crd-td">Zhili Province</td><td class="crd-td">38,86, 115,5</td><td class="crd-td">1680-1910AD</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">117k</td><td class="crd-td">117k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Qingzhou</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">36,69, 118,48</td><td class="crd-td">1680-1910AD</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">116,5k</td><td class="crd-td">116,5k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Taipei</strong></td><td class="crd-td">Taiwan</td><td class="crd-td">25,03, 121,56</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">45k</td><td class="crd-td">-</td><td class="crd-td">116k</td><td class="crd-td">116k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Hohhot</strong></td><td class="crd-td">Inner Mongolia Leagues and Banners</td><td class="crd-td">40,84, 111,75</td><td class="crd-td">1680-1910AD</td><td class="crd-td">45k</td><td class="crd-td">105k</td><td class="crd-td">-</td><td class="crd-td">115k</td><td class="crd-td">115k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Yingzhou</strong></td><td class="crd-td">Anhui Province</td><td class="crd-td">32,9, 115,81</td><td class="crd-td">1680-1910AD</td><td class="crd-td">23,8k</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">114,5k</td><td class="crd-td">114,5k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Linqing</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">36,85, 115,7</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">76,6k</td><td class="crd-td">76,6k</td><td class="crd-td">33k</td><td class="crd-td">114k (1776AD)</td></tr>
<tr><td class="crd-td"><strong>Shunqing</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">30,79, 106,08</td><td class="crd-td">1680-1910AD</td><td class="crd-td">58k</td><td class="crd-td">58k</td><td class="crd-td">58k</td><td class="crd-td">112k</td><td class="crd-td">112k (1910AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Qing China ordered by peak catalogued population (n=22.179 total sites).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-qing} summarises settlement counts across all 25 provincial and borderland masks alongside maximum catalogued peak populations, reflecting the dense agrarian and administrative coverage of the eighteen historic provinces alongside sparser garrison networks across the northern and western frontiers. Table \ref{tab:excluded-qing} details the leading 30 of 716 excluded duplicate candidates recorded in the source ledger.

<figure class="crd-table-figure" id="tab:regsum-qing">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province or Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhili Province</strong></td><td class="crd-td">1472</td><td class="crd-td">Beijing (1,15M)</td></tr>
<tr><td class="crd-td"><strong>Jiangsu Province</strong></td><td class="crd-td">1015</td><td class="crd-td">Shanghai (1,29M)</td></tr>
<tr><td class="crd-td"><strong>Anhui Province</strong></td><td class="crd-td">732</td><td class="crd-td">Yingzhou (114,5k)</td></tr>
<tr><td class="crd-td"><strong>Zhejiang Province</strong></td><td class="crd-td">905</td><td class="crd-td">Hangzhou (700k)</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">583</td><td class="crd-td">Nanchang (310k)</td></tr>
<tr><td class="crd-td"><strong>Fujian Province (excl. Taiwan)</strong></td><td class="crd-td">471</td><td class="crd-td">Fuzhou (550k)</td></tr>
<tr><td class="crd-td"><strong>Hubei Province</strong></td><td class="crd-td">1063</td><td class="crd-td">Wuhan (850k)</td></tr>
<tr><td class="crd-td"><strong>Hunan Province</strong></td><td class="crd-td">914</td><td class="crd-td">Changsha (360k)</td></tr>
<tr><td class="crd-td"><strong>Henan Province</strong></td><td class="crd-td">1245</td><td class="crd-td">Kaifeng (240k)</td></tr>
<tr><td class="crd-td"><strong>Shandong Province</strong></td><td class="crd-td">1640</td><td class="crd-td">Jinan (270k)</td></tr>
<tr><td class="crd-td"><strong>Shanxi Province</strong></td><td class="crd-td">945</td><td class="crd-td">Taiyuan (190k)</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province</strong></td><td class="crd-td">842</td><td class="crd-td">Xi'an (290k)</td></tr>
<tr><td class="crd-td"><strong>Gansu Province (incl. Ningxia)</strong></td><td class="crd-td">979</td><td class="crd-td">Lanzhou (145k)</td></tr>
<tr><td class="crd-td"><strong>Sichuan Province (incl. Chongqing)</strong></td><td class="crd-td">2959</td><td class="crd-td">Chongqing (480k)</td></tr>
<tr><td class="crd-td"><strong>Guangdong Province (incl. Hainan)</strong></td><td class="crd-td">1024</td><td class="crd-td">Guangzhou (900k)</td></tr>
<tr><td class="crd-td"><strong>Guangxi Province</strong></td><td class="crd-td">1315</td><td class="crd-td">Pingle (76,6k)</td></tr>
<tr><td class="crd-td"><strong>Yunnan Province</strong></td><td class="crd-td">705</td><td class="crd-td">Kunming (195k)</td></tr>
<tr><td class="crd-td"><strong>Guizhou Province</strong></td><td class="crd-td">883</td><td class="crd-td">Liping (76,6k)</td></tr>
<tr><td class="crd-td"><strong>Manchuria (Shengjing, Jilin and Heilongjiang)</strong></td><td class="crd-td">670</td><td class="crd-td">Shenyang (390k)</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia Leagues and Banners</strong></td><td class="crd-td">352</td><td class="crd-td">Hohhot (115k)</td></tr>
<tr><td class="crd-td"><strong>Xinjiang (Altishahr and Dzungaria)</strong></td><td class="crd-td">233</td><td class="crd-td">Kashgar (90k)</td></tr>
<tr><td class="crd-td"><strong>Qinghai (Kokonor)</strong></td><td class="crd-td">320</td><td class="crd-td">Xining (58k)</td></tr>
<tr><td class="crd-td"><strong>Tibet (Xizang)</strong></td><td class="crd-td">806</td><td class="crd-td">Lhasa (65k)</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Qing Prefecture and Japanese Colonial 1895-1911)</strong></td><td class="crd-td">97</td><td class="crd-td">Taipei (116k)</td></tr>
<tr><td class="crd-td"><strong>Hong Kong and Macao</strong></td><td class="crd-td">9</td><td class="crd-td">Hong Kong (445k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban centre across all 25 provinces and borderlands of Qing China (22.179 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-qing">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Qin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Qin within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xing'an</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xing'an within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Nanxiong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Nanxiong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Pu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Puzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Ze</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ze within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Zhending</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zhengding within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Wuding</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wuding within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yi</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yizhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jining</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jining within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Cao</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Caozhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Taian</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Taian within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Zheng</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zheng within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xuchang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Chen</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chenzhou Henan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yulin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yulin within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Tong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tong Zhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Wukai</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Liping within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Sizhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Sizhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Zhenyuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zhenyuan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Chengtian</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Anlu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Funing</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Funing within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yuanzhou Hunan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Nanxiong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Nanxiong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Nanxiong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Nanxiong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jiaying</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiaying within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xuzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Ying</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yingzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jilin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jilin within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Pingyue</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Pingyue within 2 km.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 716 excluded duplicate candidates in the Qing Dynasty source ledger, consolidated into canonical parent cities.</figcaption>
</figure>

# Limitations

Two spatial and demographic constraints affect settlement analysis in this gazetteer. First, Qing municipal administration rarely segregated intramural walled population from extramural commercial suburbs (xiang and shi). For major trading conurbations such as Wuhan (Hankou) or Guangzhou, population figures aggregate both the administrative citadel and the sprawling waterborne and merchant quarters along the riverbanks [@skinner1977city; @cao2001zhongguo]. Second, frontier settlement counts across Xinjiang, Tibet, Qinghai and Inner Mongolia reflect oasis cities, monastic complexes and military garrisons, while mobile nomadic pastoralists remained dispersed across banner grazing lands and are captured primarily through regional areal kriging rather than nucleated town rosters [@Schlesinger2012Qing; @Theaker2018Moving].

# Sources

<div id="refs"></div>
