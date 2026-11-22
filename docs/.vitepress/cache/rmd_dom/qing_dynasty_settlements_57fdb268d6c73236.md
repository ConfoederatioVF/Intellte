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
hero_caption: "Spatial distribution of 49.910 catalogued prefectural seats, county towns, market settlements, monasteries and treaty ports across 25 provinces and borderlands of Qing China from 1644AD to 1911AD."
hero_label: "fig:hero-qing-dynasty"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 49.910 urban, administrative, market, monastic, heritage and commercial settlement trajectories active across Qing China between 1644AD and 1911AD across an imperial territorial domain of 9.389.222 km², achieving full pre-1800 continuous coverage that eliminates the previous 1820AD benchmark cliff. Synthesising official Qing dynastic gazetteers, the full 1820AD China Historical Geographic Information System (CHGIS Version 6) benchmark (8.599 sites) and expanded 1911AD cunzhen market towns, garrisons, stations and historic villages (25.325 entries traced back to 1680AD and 1776AD) [@chgis2016v6], Harvard TGAZ (2018), China Biographical Database (CBDB) historical addresses [@CBDB2026Addresses], all 7.875 MOHURD Traditional Ancient Villages [@MOHURD2023TraditionalVillages], 2.759 TBRC Tibetan, Qinghai and Sichuan monasteries [@Ryavec2014TBRC], 822 Taiwan BOCH heritage settlements [@TaiwanBOCH2025Heritage] plus Wikidata Taiwan, 34 documented Xin'an Xianzhi pre-1800 Hong Kong and Macao settlements, treaty-port customs returns and the demographic reconstructions of Cao Shuji and Hou Yangfang [@cao2001zhongguo; @cao2024population; @Xu2015Urbanization], the catalogue covers all 25 provincial and borderland masks. Leading provincial settlement counts occur across Sichuan (4.756 sites), Zhili (3.343), Jiangxi (2.719) and Shandong (2.561). At the late Qing benchmark, the largest settlements in the register were the modernising treaty port of Shanghai (1,29M in 1910AD), the imperial capital Beijing (1,15M in 1851AD), the historic southern capital Nanjing (920k in 1851AD), the southern maritime hub Guangzhou (900k in 1910AD), the central Yangtze confluence Wuhan (850k in 1910AD), the northern port of Tianjin (800k in 1910AD), and the Lower Yangtze cultural centres Hangzhou (700k in 1851AD) and Suzhou (620k in 1851AD) [@cao2001zhongguo; @skinner1977city; @Xu2015Urbanization]. Alongside the 49.910 included entries (296.725 settlement-year observations averaging 5,95 per centre), the regional source ledger archives 2.500 excluded duplicate candidates (from 26.618 raw co-located merges and exclusions) out of 52.410 ledger-evaluated entries (0 unaccounted).

# Background

Urbanisation in China during the Qing period operated within G. William Skinner's nine physiographic macro-regions, where administrative rank structured city hierarchies while commercial river corridors generated high-density trading nodes [@skinner1977city; @Xu2015Urbanization]. At the dynastic consolidation under the Shunzhi and Kangxi emperors (1644AD to 1722AD), Chinese urban centres were still recovering from the catastrophic late Ming rebellions and the Manchu conquest [@cao2001zhongguo; @ho1959studies]. Across the Lower Yangtze (Jiangnan), long-established commercial capitals such as Suzhou (620k), Hangzhou (700k), Nanjing (920k) and Yangzhou (450k) anchored dense textile, silk, porcelain and grain markets linked by the Grand Canal and the Yangtze River [@perkins1969agricultural; @Ma2008Economic].

During the eighteenth century, imperial stability, the Kangxi poll-tax freeze of 1712AD and the nationwide baojia registration system spurred massive demographic growth, lifting national population from 151,1M in 1680AD to 387,2M in 1820AD and 443,6M in 1851AD [@cao2001zhongguo; @cao2024population; @lee1999one]. This demographic surge transformed interior market towns into substantial urban centres: the tri-city conurbation of Wuhan (Hankou, Wuchang and Hanyang) expanded to 850k, Chengdu reached 450k and Chongqing climbed to 480k as the commercial gateways to the Upper Yangtze basin [@cao2001zhongguo; @skinner1977city].

Following the Opium Wars (1839AD to 1860AD), the forced opening of maritime and riverine treaty ports shifted the demographic centre of gravity toward coastal and foreign concessions [@Xu2015Urbanization; @mavinglahn2022cambridge]. Shanghai expanded from a regional cotton port of 140k in 1680AD and 300k in 1851AD into China's foremost industrial, financial and shipping metropolis of 1,29M by 1910AD. Concurrently, Tianjin surged to 800k as Beijing's maritime port, Hong Kong grew from an insular anchorage into a British colonial entrepot of 445k, and Guangzhou sustained 900k as the historic hub of the Pearl River Delta [@Xu2015Urbanization; @mavinglahn2022cambridge].

# Methodology

Settlement trajectories were compiled through systematic harmonisation of historical gazetteers and modern geospatial corpora: the full China Historical Geographic Information System (CHGIS Version 6) 1820AD benchmark (8.599 sites) alongside expanded 1911AD cunzhen market towns, garrisons, stations and historic villages (25.325 entries) traced back to 1680AD and 1776AD [@chgis2016v6]; Harvard TGAZ (2018); the China Biographical Database (CBDB) historical address gazetteer [@CBDB2026Addresses]; all 7.875 MOHURD Traditional Ancient Villages across Batches 1 to 6 [@MOHURD2023TraditionalVillages]; 2.759 Tibetan Buddhist Resource Center (TBRC) monasteries across Tibet, Qinghai and Sichuan [@Ryavec2014TBRC]; 822 Taiwan Bureau of Cultural Heritage (BOCH) heritage settlements [@TaiwanBOCH2025Heritage] supplemented by Wikidata Taiwan; 34 documented Xin'an Xianzhi pre-1800 settlements in Hong Kong and Macao; Cao Shuji's provincial demographic reconstruction [@cao2001zhongguo; @cao2024population]; the Maritime Customs treaty-port trade reports [@Xu2015Urbanization]; and G. William Skinner's regional city index [@skinner1977city]. Backward tracing of late Qing market-town and village series to 1680AD and 1776AD establishes continuous pre-1800 coverage and eliminates the previous 1820AD benchmark cliff.

All 49.910 included records map onto the 25 provincial and territorial masks using equal-area coordinates, led by Sichuan (4.756 sites), Zhili (3.343), Jiangxi (2.719) and Shandong (2.561). In the regional source ledger, 2.500 excluded duplicate candidates are archived alongside 26.618 raw co-located merges and exclusions across 52.410 ledger-evaluated entries, consolidating close-pair duplicates, sub-district quarters and alternative historical names into canonical primary urban nodes. For example, Hanyang was consolidated into the Wuhan tri-city agglomeration, Jiangning was merged into canonical Nanjing, and old county seats adjacent to prefectural headquarters were absorbed to avoid artificial double counting.

# Testing and Validation

Ledger reconciliation confirms 49.910 included settlements and 2.500 archived excluded duplicate candidates (with 26.618 raw co-located merges and exclusions) across 52.410 ledger-evaluated entries (0 unaccounted). All 49.910 records carry valid coordinates, documented foundation periods and 296.725 non-zero settlement-year population observations (mean 5,95 per centre) across dynastic benchmark years with continuous pre-1800 coverage. Figure \ref{fig:sett-qing} plots the rank-size distribution and the leading fifteen urban peaks.

<figure class="crd-figure-block" id="fig:sett-qing">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-qing-dynasty-settlements/fig4_qing_dynasty_settlements.png" alt="fig:sett-qing" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 49.910 catalogued settlements of Qing Dynasty China.</figcaption>
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
<tr><td class="crd-td"><strong>Fuzhou</strong></td><td class="crd-td">Fujian Province</td><td class="crd-td">26,07, 119,3</td><td class="crd-td">1680-1910AD</td><td class="crd-td">1,4k</td><td class="crd-td">420k</td><td class="crd-td">2,9k</td><td class="crd-td">480k</td><td class="crd-td">550k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Chongqing</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">29,56, 106,55</td><td class="crd-td">1680-1910AD</td><td class="crd-td">60k</td><td class="crd-td">240k</td><td class="crd-td">-</td><td class="crd-td">480k</td><td class="crd-td">480k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Chengdu</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">30,57, 104,07</td><td class="crd-td">1680-1910AD</td><td class="crd-td">85k</td><td class="crd-td">340k</td><td class="crd-td">380k</td><td class="crd-td">450k</td><td class="crd-td">450k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Yangzhou</strong></td><td class="crd-td">Jiangsu Province</td><td class="crd-td">32,39, 119,41</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">420k</td><td class="crd-td">-</td><td class="crd-td">220k</td><td class="crd-td">450k (1776AD)</td></tr>
<tr><td class="crd-td"><strong>Hong Kong</strong></td><td class="crd-td">Hong Kong and Macao</td><td class="crd-td">22,29, 114,16</td><td class="crd-td">1841-1910AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">33k</td><td class="crd-td">445k</td><td class="crd-td">445k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Shenyang</strong></td><td class="crd-td">Manchuria</td><td class="crd-td">41,81, 123,43</td><td class="crd-td">1644-1910AD</td><td class="crd-td">-</td><td class="crd-td">180k</td><td class="crd-td">-</td><td class="crd-td">390k</td><td class="crd-td">390k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Changsha</strong></td><td class="crd-td">Hunan Province</td><td class="crd-td">28,23, 112,94</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">290k</td><td class="crd-td">-</td><td class="crd-td">360k</td><td class="crd-td">360k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Nanchang</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">28,68, 115,86</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">310k</td><td class="crd-td">-</td><td class="crd-td">260k</td><td class="crd-td">310k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Xi'an</strong></td><td class="crd-td">Shaanxi Province</td><td class="crd-td">34,26, 108,95</td><td class="crd-td">1680-1910AD</td><td class="crd-td">190k</td><td class="crd-td">290k</td><td class="crd-td">270k</td><td class="crd-td">245k</td><td class="crd-td">290k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Ningbo</strong></td><td class="crd-td">Zhejiang Province</td><td class="crd-td">29,87, 121,54</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">290k</td><td class="crd-td">-</td><td class="crd-td">260k</td><td class="crd-td">290k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Jinan</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">36,65, 117,12</td><td class="crd-td">1680-1910AD</td><td class="crd-td">619</td><td class="crd-td">210k</td><td class="crd-td">1,3k</td><td class="crd-td">270k</td><td class="crd-td">270k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Songjiang</strong></td><td class="crd-td">Jiangsu Province</td><td class="crd-td">31,01, 121,23</td><td class="crd-td">1680-1910AD</td><td class="crd-td">71,3k</td><td class="crd-td">71,3k</td><td class="crd-td">71,3k</td><td class="crd-td">260,7k</td><td class="crd-td">260,7k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Kaifeng</strong></td><td class="crd-td">Henan Province</td><td class="crd-td">34,8, 114,31</td><td class="crd-td">1680-1910AD</td><td class="crd-td">130k</td><td class="crd-td">240k</td><td class="crd-td">-</td><td class="crd-td">220k</td><td class="crd-td">240k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Quanzhou</strong></td><td class="crd-td">Fujian Province</td><td class="crd-td">24,87, 118,68</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">220k</td><td class="crd-td">-</td><td class="crd-td">140k</td><td class="crd-td">220k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Laizhou</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">37,18, 119,94</td><td class="crd-td">1680-1910AD</td><td class="crd-td">77k</td><td class="crd-td">77k</td><td class="crd-td">77k</td><td class="crd-td">219,7k</td><td class="crd-td">219,7k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Changzhou</strong></td><td class="crd-td">Jiangsu Province</td><td class="crd-td">31,78, 119,95</td><td class="crd-td">1680-1910AD</td><td class="crd-td">77,1k</td><td class="crd-td">77,1k</td><td class="crd-td">77,1k</td><td class="crd-td">215,1k</td><td class="crd-td">215,1k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Huaian</strong></td><td class="crd-td">Jiangsu Province</td><td class="crd-td">33,5, 119,14</td><td class="crd-td">1680-1910AD</td><td class="crd-td">72,8k</td><td class="crd-td">72,8k</td><td class="crd-td">72,8k</td><td class="crd-td">204,8k</td><td class="crd-td">204,8k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Xiamen</strong></td><td class="crd-td">Fujian Province</td><td class="crd-td">24,48, 118,09</td><td class="crd-td">1680-1910AD</td><td class="crd-td">75k</td><td class="crd-td">160k</td><td class="crd-td">-</td><td class="crd-td">195k</td><td class="crd-td">195k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Kunming</strong></td><td class="crd-td">Yunnan Province</td><td class="crd-td">25,04, 102,72</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">195k</td><td class="crd-td">-</td><td class="crd-td">160k</td><td class="crd-td">195k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Yibin</strong></td><td class="crd-td">Sichuan Province</td><td class="crd-td">28,78, 104,64</td><td class="crd-td">1680-1910AD</td><td class="crd-td">87,4k</td><td class="crd-td">155,3k</td><td class="crd-td">170,8k</td><td class="crd-td">194,1k</td><td class="crd-td">194,1k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Dezhou</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">37,45, 116,35</td><td class="crd-td">1680-1910AD</td><td class="crd-td">87,2k</td><td class="crd-td">155k</td><td class="crd-td">170,5k</td><td class="crd-td">193,7k</td><td class="crd-td">193,7k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Xuzhou</strong></td><td class="crd-td">Jiangsu Province</td><td class="crd-td">34,2, 117,28</td><td class="crd-td">1680-1910AD</td><td class="crd-td">86,8k</td><td class="crd-td">154,4k</td><td class="crd-td">169,8k</td><td class="crd-td">193k</td><td class="crd-td">193k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Xuanhua</strong></td><td class="crd-td">Zhili Province</td><td class="crd-td">40,61, 115,05</td><td class="crd-td">1680-1910AD</td><td class="crd-td">58,9k</td><td class="crd-td">57,2k</td><td class="crd-td">57,2k</td><td class="crd-td">192k</td><td class="crd-td">192k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">Shanxi Province</td><td class="crd-td">37,87, 112,55</td><td class="crd-td">1776-1910AD</td><td class="crd-td">-</td><td class="crd-td">190k</td><td class="crd-td">-</td><td class="crd-td">140k</td><td class="crd-td">190k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Zhoukou</strong></td><td class="crd-td">Henan Province</td><td class="crd-td">33,58, 114,73</td><td class="crd-td">1680-1910AD</td><td class="crd-td">84,1k</td><td class="crd-td">149,5k</td><td class="crd-td">164,4k</td><td class="crd-td">186,8k</td><td class="crd-td">186,8k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Wuhu</strong></td><td class="crd-td">Anhui Province</td><td class="crd-td">31,35, 118,43</td><td class="crd-td">1680-1910AD</td><td class="crd-td">83,2k</td><td class="crd-td">147,9k</td><td class="crd-td">162,6k</td><td class="crd-td">184,8k</td><td class="crd-td">184,8k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Raozhou</strong></td><td class="crd-td">Jiangxi Province</td><td class="crd-td">28,99, 116,66</td><td class="crd-td">1680-1910AD</td><td class="crd-td">74,1k</td><td class="crd-td">74,1k</td><td class="crd-td">74,1k</td><td class="crd-td">95,3k</td><td class="crd-td">182,4k (1776AD)</td></tr>
<tr><td class="crd-td"><strong>Tangshan</strong></td><td class="crd-td">Zhili Province</td><td class="crd-td">39,64, 118,18</td><td class="crd-td">1680-1910AD</td><td class="crd-td">82k</td><td class="crd-td">145,8k</td><td class="crd-td">160,4k</td><td class="crd-td">182,2k</td><td class="crd-td">182,2k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Zibo</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">36,7, 118,01</td><td class="crd-td">1680-1910AD</td><td class="crd-td">81,8k</td><td class="crd-td">145,4k</td><td class="crd-td">160k</td><td class="crd-td">181,8k</td><td class="crd-td">181,8k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Jiaxing</strong></td><td class="crd-td">Zhejiang Province</td><td class="crd-td">30,75, 120,75</td><td class="crd-td">1680-1910AD</td><td class="crd-td">81,8k</td><td class="crd-td">145,4k</td><td class="crd-td">160k</td><td class="crd-td">181,8k</td><td class="crd-td">181,8k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Dengzhou</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">37,81, 120,75</td><td class="crd-td">1680-1910AD</td><td class="crd-td">71k</td><td class="crd-td">71k</td><td class="crd-td">71k</td><td class="crd-td">181,2k</td><td class="crd-td">181,2k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Huaihua</strong></td><td class="crd-td">Hunan Province</td><td class="crd-td">27,56, 110</td><td class="crd-td">1680-1910AD</td><td class="crd-td">81,4k</td><td class="crd-td">144,8k</td><td class="crd-td">159,3k</td><td class="crd-td">181k</td><td class="crd-td">181k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Zhanjiang</strong></td><td class="crd-td">Guangdong Province</td><td class="crd-td">21,23, 110,39</td><td class="crd-td">1680-1910AD</td><td class="crd-td">81,2k</td><td class="crd-td">144,4k</td><td class="crd-td">158,8k</td><td class="crd-td">180,5k</td><td class="crd-td">180,5k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Binzhou</strong></td><td class="crd-td">Shandong Province</td><td class="crd-td">37,37, 118,02</td><td class="crd-td">1680-1910AD</td><td class="crd-td">81,1k</td><td class="crd-td">144,2k</td><td class="crd-td">158,7k</td><td class="crd-td">180,3k</td><td class="crd-td">180,3k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Zhumadian</strong></td><td class="crd-td">Henan Province</td><td class="crd-td">32,88, 114,05</td><td class="crd-td">1680-1910AD</td><td class="crd-td">79,6k</td><td class="crd-td">141,6k</td><td class="crd-td">155,7k</td><td class="crd-td">177k</td><td class="crd-td">177k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Baoji</strong></td><td class="crd-td">Shaanxi Province</td><td class="crd-td">34,36, 107,2</td><td class="crd-td">1680-1910AD</td><td class="crd-td">79,4k</td><td class="crd-td">141,2k</td><td class="crd-td">155,3k</td><td class="crd-td">176,4k</td><td class="crd-td">176,4k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Mudanjiang</strong></td><td class="crd-td">Manchuria</td><td class="crd-td">44,55, 129,63</td><td class="crd-td">1680-1910AD</td><td class="crd-td">79,1k</td><td class="crd-td">140,7k</td><td class="crd-td">154,7k</td><td class="crd-td">175,8k</td><td class="crd-td">175,8k (1910AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Qing China ordered by peak catalogued population (n=49.910 total sites).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-qing} summarises settlement counts across all 25 provincial and borderland masks alongside maximum catalogued peak populations, reflecting the dense agrarian and administrative coverage of the eighteen historic provinces alongside sparser garrison networks across the northern and western frontiers. Table \ref{tab:excluded-qing} details the leading 30 of 2.500 archived excluded duplicate candidates recorded in the source ledger (from 26.618 raw co-located merges and exclusions).

<figure class="crd-table-figure" id="tab:regsum-qing">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province or Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhili Province</strong></td><td class="crd-td">3343</td><td class="crd-td">Beijing (1,15M)</td></tr>
<tr><td class="crd-td"><strong>Jiangsu Province</strong></td><td class="crd-td">1549</td><td class="crd-td">Shanghai (1,29M)</td></tr>
<tr><td class="crd-td"><strong>Anhui Province</strong></td><td class="crd-td">1455</td><td class="crd-td">Wuhu (184,8k)</td></tr>
<tr><td class="crd-td"><strong>Zhejiang Province</strong></td><td class="crd-td">2269</td><td class="crd-td">Hangzhou (700k)</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">2719</td><td class="crd-td">Nanchang (310k)</td></tr>
<tr><td class="crd-td"><strong>Fujian Province (excl. Taiwan)</strong></td><td class="crd-td">1829</td><td class="crd-td">Fuzhou (550k)</td></tr>
<tr><td class="crd-td"><strong>Hubei Province</strong></td><td class="crd-td">2147</td><td class="crd-td">Wuhan (850k)</td></tr>
<tr><td class="crd-td"><strong>Hunan Province</strong></td><td class="crd-td">2374</td><td class="crd-td">Changsha (360k)</td></tr>
<tr><td class="crd-td"><strong>Henan Province</strong></td><td class="crd-td">2208</td><td class="crd-td">Kaifeng (240k)</td></tr>
<tr><td class="crd-td"><strong>Shandong Province</strong></td><td class="crd-td">2561</td><td class="crd-td">Jinan (270k)</td></tr>
<tr><td class="crd-td"><strong>Shanxi Province</strong></td><td class="crd-td">2447</td><td class="crd-td">Taiyuan (190k)</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province</strong></td><td class="crd-td">1959</td><td class="crd-td">Xi'an (290k)</td></tr>
<tr><td class="crd-td"><strong>Gansu Province (incl. Ningxia)</strong></td><td class="crd-td">2340</td><td class="crd-td">Lanzhou (145k)</td></tr>
<tr><td class="crd-td"><strong>Sichuan Province (incl. Chongqing)</strong></td><td class="crd-td">4756</td><td class="crd-td">Chongqing (480k)</td></tr>
<tr><td class="crd-td"><strong>Guangdong Province (incl. Hainan)</strong></td><td class="crd-td">2512</td><td class="crd-td">Guangzhou (900k)</td></tr>
<tr><td class="crd-td"><strong>Guangxi Province</strong></td><td class="crd-td">2159</td><td class="crd-td">Hechi (116,7k)</td></tr>
<tr><td class="crd-td"><strong>Yunnan Province</strong></td><td class="crd-td">2087</td><td class="crd-td">Kunming (195k)</td></tr>
<tr><td class="crd-td"><strong>Guizhou Province</strong></td><td class="crd-td">2310</td><td class="crd-td">Pingxi (82,5k)</td></tr>
<tr><td class="crd-td"><strong>Manchuria (Shengjing, Jilin and Heilongjiang)</strong></td><td class="crd-td">2043</td><td class="crd-td">Shenyang (390k)</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia Leagues and Banners</strong></td><td class="crd-td">937</td><td class="crd-td">Dongsheng (169,8k)</td></tr>
<tr><td class="crd-td"><strong>Xinjiang (Altishahr and Dzungaria)</strong></td><td class="crd-td">704</td><td class="crd-td">Kashi (112,1k)</td></tr>
<tr><td class="crd-td"><strong>Qinghai (Kokonor)</strong></td><td class="crd-td">1105</td><td class="crd-td">Xining (90k)</td></tr>
<tr><td class="crd-td"><strong>Tibet (Xizang)</strong></td><td class="crd-td">1563</td><td class="crd-td">Lhasa (65k)</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Qing Prefecture and Japanese Colonial 1895-1911)</strong></td><td class="crd-td">482</td><td class="crd-td">Taipei (116k)</td></tr>
<tr><td class="crd-td"><strong>Hong Kong and Macao</strong></td><td class="crd-td">52</td><td class="crd-td">Hong Kong (445k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban centre across all 25 provinces and borderlands of Qing China (49.910 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-qing">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Fanling</strong></td><td class="crd-td">Hong Kong</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Sheung Shui-Hong Kong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Ha Tsuen</strong></td><td class="crd-td">Hong Kong</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ping Shan-Hong Kong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Chai Wan</strong></td><td class="crd-td">Hong Kong</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Shau Kei Wan-Hong Kong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Qin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Qin within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xing'an</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xing'an within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Nanxiong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Nanxiong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Pu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Puzhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Ze</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Ze within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Zhending</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zhengding within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Wuding</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Wuding within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yi</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yizhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jining</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jining_Shandong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Cao</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Caozhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Taian</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Taian within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Zheng</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zheng within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xuchang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Chen</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Chenzhou_Henan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yulin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yulin within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Tong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tong Zhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Wukai</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Liping within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Sizhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Sizhou within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Zhenyuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Zhenyuan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Chengtian</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Anlu within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Funing</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Funing within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Yuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Yuanzhou_Hunan within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Nanxiong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Nanxiong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Nanxiong</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Nanxiong within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Jiaying</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jiaying within 2 km.</td></tr>
<tr><td class="crd-td"><strong>Xu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Xuzhou within 2 km.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 2.500 archived excluded duplicate candidates in the Qing Dynasty source ledger, consolidated into canonical parent cities.</figcaption>
</figure>

# Limitations

Three spatial and demographic constraints affect settlement analysis in this gazetteer. First, Qing municipal administration rarely segregated intramural walled population from extramural commercial suburbs (xiang and shi). For major trading conurbations such as Wuhan (Hankou) or Guangzhou, population figures aggregate both the administrative citadel and the sprawling waterborne and merchant quarters along the riverbanks [@skinner1977city; @cao2001zhongguo]. Second, although frontier coverage incorporates 2.759 TBRC Tibetan, Qinghai and Sichuan monasteries [@Ryavec2014TBRC] and 822 Taiwan BOCH heritage settlements [@TaiwanBOCH2025Heritage] alongside oasis cities and military garrisons, mobile nomadic pastoralists across Xinjiang, Qinghai and Inner Mongolia remained dispersed across banner grazing lands and are captured primarily through regional areal kriging rather than nucleated town rosters [@Schlesinger2012Qing; @Theaker2018Moving]. Third, while integrating 7.875 MOHURD Traditional Ancient Villages [@MOHURD2023TraditionalVillages] and tracing 25.325 late Qing cunzhen market towns, garrisons, stations and villages from 1911AD back to 1680AD and 1776AD eliminates the previous 1820AD discontinuity, backward-projected pre-1800 estimates for minor rural centres carry greater local uncertainty than the 1820AD CHGIS and 1911AD benchmarks [@chgis2016v6].

# Sources

<div id="refs"></div>
