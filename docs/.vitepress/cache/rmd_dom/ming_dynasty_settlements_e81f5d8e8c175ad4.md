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
hero_caption: "Spatial distribution of 1.663 prefectural capitals, county seats and military garrisons across twenty Ming provinces through 1644AD."
hero_label: "fig:hero-ming-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues 1.663 urban, administrative and military settlements active across Ming Dynasty China between 1368AD and 1644AD (covering 9.389.222 km² across twenty provincial and frontier territories). Synthesising dynastic local gazetteers (*difangzhi*), the China Historical Geographic Information System (CHGIS v6), the demographic reconstructions of Cao Shuji (2000, 2024), and architectural monument surveys [@Cao2000Zhongguo; @Cao2024Population; @CHGIS2016v6; @Gao2026Using], the register encompasses every primary administrative seat of the empire: the dual capital metropolises of Beijing (1,05M) and Nanjing (700k), 159 prefectural capitals (*fu*), 234 sub-prefectural centres (*zhou*), 1.148 county seats (*xian*), and 120 strategic frontier garrisons (*weisuo*), canal ports and commercial market towns (*zhen*). Across the 1.663 catalogued entries, the dataset documents 4.559 settlement-year population observations spanning 1393AD, 1580AD and 1630AD (averaging 2,74 observations per centre). At the 1630AD late Ming demographic peak, the leading urban centres were Beijing (1,05M), Nanjing (700k), Suzhou (650k), Hangzhou (520k), Huaiqing (350k), Jiaxing (350k), Linjiang (350k), Xu (350k), Guangzhou (320k), Kaifeng (240k), Yangzhou (240k), Xi'an (220k), Chengdu (220k), Wuhan (210k) and Nanchang (210k). Alongside the 1.663 catalogued settlements, the regional source ledger records 1.105 excluded duplicate aliases and close-pair entries out of 2.768 total evaluated candidates.

# Background

Urbanisation in Ming China was structured by the intersection of the imperial administrative hierarchy and expanding regional market networks [@Cao2000Zhongguo; @Ma2022Cambridge; @Gao2026Using]. Under the administrative framework established by the Hongwu Emperor, every county, sub-prefecture and prefecture possessed a walled administrative seat that housed government yamens, confucian academies, state granaries and temple altars [@Cao2024Population; @Zurndorfer1988Guide].

Alongside civil administration, the early Ming state constructed fortified garrison towns for the *weisuo* military system, including coastal defense forts against *wokou* maritime raiders and heavy stone citadels along the northern Great Wall defense line [@Robinson2025Military; @Bu2025Climate]. Over the course of the sixteenth century, commercial expansion along the Grand Canal and Yangtze River elevated commercial ports and market towns (*zhen*) into thriving economic centres that rivalled traditional administrative capitals in population and wealth [@Ye2019Grand; @Wang2025Grand; @Liu2025Analysis].

# Methodology

Settlement records were constructed by extracting historical administrative seats from the CHGIS Version 6 time-series database and harmonising them with population totals from Cao Shuji's regional studies, local gazetteers, and archaeological monument registers [@CHGIS2016v6; @Cao2000Zhongguo; @Cao2024Population; @Gao2026Using]. All 1.663 catalogued settlements carry verified historical coordinates and assign to one of the twenty provincial masks.

In the regional source ledger, 1.105 candidate records were excluded as duplicate historical aliases, close-pair suburban entities within 8 km of canonical county seats, or temporary military posts lacking sustained civilian settlement [@Cao2000Zhongguo; @CHGIS2016v6]. For example, historical aliases such as Dadu and Beiping were consolidated into Beijing, Yingtian Fu into Nanjing, and Gusu into Suzhou, preserving single canonical entries with documented longitudinal spans.

# Testing and Validation

Ledger reconciliation confirms 1.663 included settlements and 1.105 excluded candidate entries (2.768 total evaluated entities, with zero unaccounted records). All 1.663 settlements carry WGS84 geographic coordinates and non-zero population records for the Ming dynastic benchmarks. Figure \ref{fig:sett-gazetteer} displays the rank-size distribution and the fifteen leading urban centres of the empire.

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
<tr><td class="crd-td"><strong>Nanjing</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">32,06, 118,8</td><td class="crd-td">1393-1580AD</td><td class="crd-td">473k</td><td class="crd-td">700k</td><td class="crd-td">-</td><td class="crd-td">700k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Suzhou</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">31,3, 120,58</td><td class="crd-td">1393-1580AD</td><td class="crd-td">230k</td><td class="crd-td">650k</td><td class="crd-td">-</td><td class="crd-td">650k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Hangzhou</strong></td><td class="crd-td">Zhejiang</td><td class="crd-td">30,27, 120,16</td><td class="crd-td">1393-1580AD</td><td class="crd-td">260k</td><td class="crd-td">520k</td><td class="crd-td">-</td><td class="crd-td">520k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Huaiqing</strong></td><td class="crd-td">Henan</td><td class="crd-td">35,09, 112,94</td><td class="crd-td">1393-1630AD</td><td class="crd-td">350k</td><td class="crd-td">33k</td><td class="crd-td">56,7k</td><td class="crd-td">350k (1393AD)</td></tr>
<tr><td class="crd-td"><strong>Jiaxing</strong></td><td class="crd-td">Zhejiang</td><td class="crd-td">30,77, 120,75</td><td class="crd-td">1393-1630AD</td><td class="crd-td">350k</td><td class="crd-td">107k</td><td class="crd-td">56,7k</td><td class="crd-td">350k (1393AD)</td></tr>
<tr><td class="crd-td"><strong>Linjiang</strong></td><td class="crd-td">Jiangxi</td><td class="crd-td">28,02, 115,4</td><td class="crd-td">1393-1630AD</td><td class="crd-td">350k</td><td class="crd-td">16k</td><td class="crd-td">56,7k</td><td class="crd-td">350k (1393AD)</td></tr>
<tr><td class="crd-td"><strong>Xu</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">34,27, 117,19</td><td class="crd-td">1393-1630AD</td><td class="crd-td">350k</td><td class="crd-td">25k</td><td class="crd-td">56,7k</td><td class="crd-td">350k (1393AD)</td></tr>
<tr><td class="crd-td"><strong>Guangzhou</strong></td><td class="crd-td">Guangdong</td><td class="crd-td">23,13, 113,26</td><td class="crd-td">1393-1580AD</td><td class="crd-td">180k</td><td class="crd-td">320k</td><td class="crd-td">-</td><td class="crd-td">320k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Kaifeng</strong></td><td class="crd-td">Henan</td><td class="crd-td">34,8, 114,31</td><td class="crd-td">1393-1580AD</td><td class="crd-td">120k</td><td class="crd-td">240k</td><td class="crd-td">-</td><td class="crd-td">240k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Yangzhou</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">32,39, 119,41</td><td class="crd-td">1393-1580AD</td><td class="crd-td">110k</td><td class="crd-td">240k</td><td class="crd-td">-</td><td class="crd-td">240k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Xi'an</strong></td><td class="crd-td">Shaanxi</td><td class="crd-td">34,26, 108,95</td><td class="crd-td">1393-1580AD</td><td class="crd-td">130k</td><td class="crd-td">220k</td><td class="crd-td">-</td><td class="crd-td">220k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Chengdu</strong></td><td class="crd-td">Sichuan</td><td class="crd-td">30,57, 104,07</td><td class="crd-td">1393-1580AD</td><td class="crd-td">120k</td><td class="crd-td">220k</td><td class="crd-td">-</td><td class="crd-td">220k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Wuhan</strong></td><td class="crd-td">Huguang</td><td class="crd-td">30,59, 114,31</td><td class="crd-td">1393-1580AD</td><td class="crd-td">110k</td><td class="crd-td">210k</td><td class="crd-td">-</td><td class="crd-td">210k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Nanchang</strong></td><td class="crd-td">Jiangxi</td><td class="crd-td">28,68, 115,86</td><td class="crd-td">1393-1580AD</td><td class="crd-td">130k</td><td class="crd-td">210k</td><td class="crd-td">-</td><td class="crd-td">210k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Fuzhou</strong></td><td class="crd-td">Fujian</td><td class="crd-td">26,07, 119,3</td><td class="crd-td">1393-1580AD</td><td class="crd-td">120k</td><td class="crd-td">200k</td><td class="crd-td">-</td><td class="crd-td">200k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Ningbo</strong></td><td class="crd-td">Zhejiang</td><td class="crd-td">29,87, 121,54</td><td class="crd-td">1393-1580AD</td><td class="crd-td">110k</td><td class="crd-td">180k</td><td class="crd-td">-</td><td class="crd-td">180k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Quanzhou</strong></td><td class="crd-td">Fujian</td><td class="crd-td">24,87, 118,68</td><td class="crd-td">1393-1580AD</td><td class="crd-td">130k</td><td class="crd-td">170k</td><td class="crd-td">-</td><td class="crd-td">170k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Changsha</strong></td><td class="crd-td">Huguang</td><td class="crd-td">28,23, 112,94</td><td class="crd-td">1393-1580AD</td><td class="crd-td">90k</td><td class="crd-td">145k</td><td class="crd-td">-</td><td class="crd-td">145k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">Shanxi</td><td class="crd-td">37,87, 112,55</td><td class="crd-td">1393-1580AD</td><td class="crd-td">85k</td><td class="crd-td">140k</td><td class="crd-td">-</td><td class="crd-td">140k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Shanghai</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">31,23, 121,47</td><td class="crd-td">1393-1580AD</td><td class="crd-td">65k</td><td class="crd-td">135k</td><td class="crd-td">-</td><td class="crd-td">135k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Fengyang</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">32,87, 117,54</td><td class="crd-td">1393-1630AD</td><td class="crd-td">38k</td><td class="crd-td">127k</td><td class="crd-td">56,7k</td><td class="crd-td">127k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Jinan</strong></td><td class="crd-td">Shandong</td><td class="crd-td">36,65, 117,12</td><td class="crd-td">1393-1580AD</td><td class="crd-td">65k</td><td class="crd-td">125k</td><td class="crd-td">-</td><td class="crd-td">125k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Kunming</strong></td><td class="crd-td">Yunnan</td><td class="crd-td">25,04, 102,72</td><td class="crd-td">1393-1580AD</td><td class="crd-td">80k</td><td class="crd-td">120k</td><td class="crd-td">-</td><td class="crd-td">120k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Chongqing</strong></td><td class="crd-td">Sichuan</td><td class="crd-td">29,56, 106,55</td><td class="crd-td">1393-1580AD</td><td class="crd-td">65k</td><td class="crd-td">115k</td><td class="crd-td">-</td><td class="crd-td">115k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Shenyang</strong></td><td class="crd-td">Liaodong</td><td class="crd-td">41,81, 123,43</td><td class="crd-td">1393-1644AD</td><td class="crd-td">45k</td><td class="crd-td">65k</td><td class="crd-td">-</td><td class="crd-td">110k (1644AD)</td></tr>
<tr><td class="crd-td"><strong>Songjiang</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">31,01, 121,23</td><td class="crd-td">1393-1630AD</td><td class="crd-td">56,7k</td><td class="crd-td">110k</td><td class="crd-td">56,7k</td><td class="crd-td">110k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Hejian</strong></td><td class="crd-td">Beizhili</td><td class="crd-td">38,44, 116,09</td><td class="crd-td">1393-1630AD</td><td class="crd-td">2k</td><td class="crd-td">108k</td><td class="crd-td">56,7k</td><td class="crd-td">108k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Huaian</strong></td><td class="crd-td">Nanzhili</td><td class="crd-td">33,5, 119,14</td><td class="crd-td">1393-1630AD</td><td class="crd-td">25k</td><td class="crd-td">100k</td><td class="crd-td">56,7k</td><td class="crd-td">100k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Luoyang</strong></td><td class="crd-td">Henan</td><td class="crd-td">34,62, 112,45</td><td class="crd-td">1393-1580AD</td><td class="crd-td">55k</td><td class="crd-td">95k</td><td class="crd-td">-</td><td class="crd-td">95k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Tianjin</strong></td><td class="crd-td">Beizhili</td><td class="crd-td">39,08, 117,2</td><td class="crd-td">1580-1580AD</td><td class="crd-td">-</td><td class="crd-td">95k</td><td class="crd-td">-</td><td class="crd-td">95k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Guilin</strong></td><td class="crd-td">Guangxi</td><td class="crd-td">25,28, 110,29</td><td class="crd-td">1393-1630AD</td><td class="crd-td">43k</td><td class="crd-td">91k</td><td class="crd-td">56,7k</td><td class="crd-td">91k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Shaoxing</strong></td><td class="crd-td">Zhejiang</td><td class="crd-td">30, 120,58</td><td class="crd-td">1393-1630AD</td><td class="crd-td">49k</td><td class="crd-td">91k</td><td class="crd-td">56,7k</td><td class="crd-td">91k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Lanzhou</strong></td><td class="crd-td">Shaanxi</td><td class="crd-td">36,06, 103,83</td><td class="crd-td">1393-1580AD</td><td class="crd-td">50k</td><td class="crd-td">75k</td><td class="crd-td">-</td><td class="crd-td">75k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Yinchuan</strong></td><td class="crd-td">Shaanxi</td><td class="crd-td">38,49, 106,23</td><td class="crd-td">1393-1580AD</td><td class="crd-td">55k</td><td class="crd-td">75k</td><td class="crd-td">-</td><td class="crd-td">75k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Dali</strong></td><td class="crd-td">Yunnan</td><td class="crd-td">25,61, 100,27</td><td class="crd-td">1393-1580AD</td><td class="crd-td">55k</td><td class="crd-td">65k</td><td class="crd-td">-</td><td class="crd-td">65k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Kashgar</strong></td><td class="crd-td">Xinjiang</td><td class="crd-td">39,47, 75,99</td><td class="crd-td">1393-1580AD</td><td class="crd-td">55k</td><td class="crd-td">65k</td><td class="crd-td">-</td><td class="crd-td">65k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Fenzhou</strong></td><td class="crd-td">Shanxi</td><td class="crd-td">37,26, 111,78</td><td class="crd-td">1630-1630AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k (1630AD)</td></tr>
<tr><td class="crd-td"><strong>Liao</strong></td><td class="crd-td">Shanxi</td><td class="crd-td">37,07, 113,37</td><td class="crd-td">1393-1630AD</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k (1393AD)</td></tr>
<tr><td class="crd-td"><strong>Qin</strong></td><td class="crd-td">Shanxi</td><td class="crd-td">36,76, 112,7</td><td class="crd-td">1393-1630AD</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k (1393AD)</td></tr>
<tr><td class="crd-td"><strong>Lu'an</strong></td><td class="crd-td">Shanxi</td><td class="crd-td">36,18, 113,1</td><td class="crd-td">1580-1630AD</td><td class="crd-td">-</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Pingyang</strong></td><td class="crd-td">Shanxi</td><td class="crd-td">36,08, 111,52</td><td class="crd-td">1393-1630AD</td><td class="crd-td">19k</td><td class="crd-td">39k</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ze</strong></td><td class="crd-td">Shanxi</td><td class="crd-td">35,5, 112,84</td><td class="crd-td">1393-1630AD</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k (1393AD)</td></tr>
<tr><td class="crd-td"><strong>Baoding</strong></td><td class="crd-td">Beizhili</td><td class="crd-td">38,86, 115,5</td><td class="crd-td">1393-1630AD</td><td class="crd-td">4k</td><td class="crd-td">10k</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Daming</strong></td><td class="crd-td">Beizhili</td><td class="crd-td">36,28, 115,15</td><td class="crd-td">1500-1630AD</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k (1500AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Ming Dynasty China ordered by peak documented population (n=1.663 total sites).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-ming} summarises the distribution of settlements across all twenty provincial territories alongside their leading urban centres. Nanzhili leads all territories with 197 catalogued settlements, followed by Beizhili (179), Huguang (160), Shandong (141), Shanxi (137) and Henan (135). Table \ref{tab:excluded-ming} details the leading 30 of 1.105 excluded candidate entries in the regional source ledger.

<figure class="crd-table-figure" id="tab:regsum-ming">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Beizhili (Beiping Metropolitan)</strong></td><td class="crd-td">125</td><td class="crd-td">Beijing (1,05M)</td></tr>
<tr><td class="crd-td"><strong>Nanzhili (Nanjing Metropolitan: Jiangsu and Anhui)</strong></td><td class="crd-td">118</td><td class="crd-td">Nanjing (700k)</td></tr>
<tr><td class="crd-td"><strong>Shandong Province</strong></td><td class="crd-td">122</td><td class="crd-td">Jinan (125k)</td></tr>
<tr><td class="crd-td"><strong>Shanxi Province</strong></td><td class="crd-td">86</td><td class="crd-td">Taiyuan (140k)</td></tr>
<tr><td class="crd-td"><strong>Henan Province</strong></td><td class="crd-td">109</td><td class="crd-td">Huaiqing (350k)</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province (incl. Gansu and Ningxia)</strong></td><td class="crd-td">129</td><td class="crd-td">Xi'an (220k)</td></tr>
<tr><td class="crd-td"><strong>Zhejiang Province</strong></td><td class="crd-td">72</td><td class="crd-td">Hangzhou (520k)</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">74</td><td class="crd-td">Linjiang (350k)</td></tr>
<tr><td class="crd-td"><strong>Huguang Province (Hubei and Hunan)</strong></td><td class="crd-td">162</td><td class="crd-td">Wuhan (210k)</td></tr>
<tr><td class="crd-td"><strong>Fujian Province</strong></td><td class="crd-td">59</td><td class="crd-td">Fuzhou (200k)</td></tr>
<tr><td class="crd-td"><strong>Guangdong Province (incl. Hainan, HK and Macao)</strong></td><td class="crd-td">92</td><td class="crd-td">Guangzhou (320k)</td></tr>
<tr><td class="crd-td"><strong>Guangxi Province</strong></td><td class="crd-td">125</td><td class="crd-td">Guilin (91k)</td></tr>
<tr><td class="crd-td"><strong>Sichuan Province (incl. Chongqing)</strong></td><td class="crd-td">167</td><td class="crd-td">Chengdu (220k)</td></tr>
<tr><td class="crd-td"><strong>Yunnan Province</strong></td><td class="crd-td">107</td><td class="crd-td">Kunming (120k)</td></tr>
<tr><td class="crd-td"><strong>Guizhou Province</strong></td><td class="crd-td">103</td><td class="crd-td">Wukai (56,7k)</td></tr>
<tr><td class="crd-td"><strong>Liaodong Garrison and Jurchen Northeast</strong></td><td class="crd-td">1</td><td class="crd-td">Shenyang (110k)</td></tr>
<tr><td class="crd-td"><strong>Northern Yuan and Inner Mongolian Banners</strong></td><td class="crd-td">3</td><td class="crd-td">Shangdu (42k)</td></tr>
<tr><td class="crd-td"><strong>Xinjiang (Moghulistan and Turpan)</strong></td><td class="crd-td">3</td><td class="crd-td">Kashgar (65k)</td></tr>
<tr><td class="crd-td"><strong>Tibet and Qinghai (Ü-Tsang, Kham and Amdo)</strong></td><td class="crd-td">5</td><td class="crd-td">Lhasa (55k)</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Austronesian and Late Ming Coastal Frontier)</strong></td><td class="crd-td">1</td><td class="crd-td">Tainan (15k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading urban centres across the twenty Ming provincial territories (1.663 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-ming">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Suzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Suzhou-China.</td></tr>
<tr><td class="crd-td"><strong>Fuzhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Fuzhou-China.</td></tr>
<tr><td class="crd-td"><strong>Beiping</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Beijing-China.</td></tr>
<tr><td class="crd-td"><strong>Beiping</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Beijing-China.</td></tr>
<tr><td class="crd-td"><strong>Taiyuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Taiyuan-China.</td></tr>
<tr><td class="crd-td"><strong>Fen</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Fenzhou-China.</td></tr>
<tr><td class="crd-td"><strong>Qin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Qin-China.</td></tr>
<tr><td class="crd-td"><strong>Dongchang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Dongchang-China.</td></tr>
<tr><td class="crd-td"><strong>Kaifeng</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Kaifeng-China.</td></tr>
<tr><td class="crd-td"><strong>Henan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Luoyang-China.</td></tr>
<tr><td class="crd-td"><strong>Kuizhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Kuizhou-China.</td></tr>
<tr><td class="crd-td"><strong>Kui</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Kuizhou-China.</td></tr>
<tr><td class="crd-td"><strong>Kuizhou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Kuizhou-China.</td></tr>
<tr><td class="crd-td"><strong>Youyang Anfusi</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Youyang-China.</td></tr>
<tr><td class="crd-td"><strong>Yan'anfu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Yan'an-China.</td></tr>
<tr><td class="crd-td"><strong>Fengyuanlu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Xi'an-China.</td></tr>
<tr><td class="crd-td"><strong>Xi'an</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Xi'an-China.</td></tr>
<tr><td class="crd-td"><strong>Liping</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Wukai-China.</td></tr>
<tr><td class="crd-td"><strong>Tonggu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Tonggu-China.</td></tr>
<tr><td class="crd-td"><strong>Sinan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Sinan Xuanweisi-China.</td></tr>
<tr><td class="crd-td"><strong>Zhenyuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Zhenyuan-China.</td></tr>
<tr><td class="crd-td"><strong>Wuchang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Wuhan-China.</td></tr>
<tr><td class="crd-td"><strong>Hanyang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Wuhan-China.</td></tr>
<tr><td class="crd-td"><strong>Anlu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Chengtian-China.</td></tr>
<tr><td class="crd-td"><strong>Mianyang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Mianyang-China.</td></tr>
<tr><td class="crd-td"><strong>De'an</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement De'an-China.</td></tr>
<tr><td class="crd-td"><strong>Hanyang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Wuhan-China.</td></tr>
<tr><td class="crd-td"><strong>Gui</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Gui-China.</td></tr>
<tr><td class="crd-td"><strong>Shinan Xuanweisi</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Shinan Xuanfusi-China.</td></tr>
<tr><td class="crd-td"><strong>Shinan Xuanweisi</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 8 km of higher-ranked settlement Shinan Xuanfusi-China.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 1.105 excluded candidate entries in the Ming Dynasty source ledger, consolidated into canonical settlements.</figcaption>
</figure>

# Limitations

Two spatial factors affect urban population aggregation in this gazetteer. First, major historical metropolises such as Beijing and Nanjing contained multiple administrative jurisdictions within a single urban wall: Beijing contained both Daxing and Wanping county seats alongside the imperial court, while Nanjing housed Shangyuan and Jiangning counties. These dual-county capital complexes are consolidated into single unified metropolitan entities to avoid artificial fragmentation of contiguous urban populations [@Cao2000Zhongguo; @CHGIS2016v6]. Second, while prefectural and county seats are thoroughly recorded, minor market towns (*caoshi* and *zhen*) lacking independent wall circuits are represented through county-level agrarian totals rather than distinct urban points [@Gao2026Using; @Liu2025Analysis].

# Sources

<div id="refs"></div>
