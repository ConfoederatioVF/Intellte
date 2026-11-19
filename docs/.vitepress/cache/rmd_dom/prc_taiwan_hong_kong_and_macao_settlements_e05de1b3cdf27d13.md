---
title: "Settlement Gazetteer of China, Taiwan, Hong Kong and Macao (1949AD to 2026AD)"
subtitle: "JADE-IV: Coastal Megalopolises, Provincial Capitals, County Towns and Island Communes"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: prc_taiwan_hong_kong_and_macao_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_prc_taiwan_hong_kong_and_macao_spatial.png"
hero_caption: "Sub-regional administrative mask and 2.118 catalogued settlements across 34 provincial units of China, Taiwan, Hong Kong and Macao from 1949AD to 2026AD."
hero_label: "fig:hero-prc-taiwan-hong-kong-and-macao"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 2.118 urban settlements, prefectural capitals, county seats, Special Administrative Region cores and Taiwanese townships active across the People's Republic of China, Taiwan, Hong Kong and Macao between 1949AD and 2026AD (9.389.222 km²). Drawing systematically upon seven national population censuses conducted in 1953AD, 1964AD, 1982AD, 1990AD, 2000AD, 2010AD and 2020AD, supplemented by National Bureau of Statistics yearbooks, Taiwan Ministry of the Interior household registries, Hong Kong Census and Statistics Department digests and Macao Statistics and Census Service returns [@nbs1954census; @nbs1964census; @nbs1982census; @nbs1990census; @nbs2000census; @nbs2010census; @nbs2020census; @taiwan_moi2025; @hk_censtatd2025; @macao_dsec2025], the gazetteer covers all 34 provincial-level territories. Coverage ranges from dense urban networks in Sichuan (148 sites), Yunnan (127), Henan (118), Hebei (115), Hunan (100), Shandong (95), Shanxi (95), Shaanxi (86) and Guangdong (80) to compact provincial-level municipalities and island territories. At the 2020AD to 2025AD benchmarks, the urban hierarchy is led by Chongqing (23,6M in 2025AD), Shanghai (22,83M), Beijing (20,08M), Shenzhen (18,61M), Chengdu (17,48M), Guangzhou (17,06M), Tianjin (12,33M), Suzhou (11,04M), Wuhan (11,02M), Xi'an (10,87M), Hangzhou (10,54M), Zhengzhou (10,47M) and Dongguan (10,22M) [@nbs2020census; @Peng2024More]. Alongside the 2.118 included centres, the regional source ledger records 38 excluded duplicate candidates out of 2.156 total evaluated records, consolidating close-proximity satellite nodes into canonical urban entries.

# Background

Urbanisation across China over the post-1949 period represents one of the largest demographic transformations in global history [@hou2001zhongguo; @Meng2019Rural]. In 1949AD, the vast majority of the Chinese population resided in agricultural villages, with modern manufacturing concentrated in treaty ports such as Shanghai, Tianjin, Qingdao and Guangzhou, alongside Japanese-developed industrial hubs in Liaoning (Shenyang, Dalian, Anshan) [@hou2001zhongguo; @nbs1954census]. Under early socialist central planning during the First Five-Year Plan (1953AD to 1957AD), state investment expanded heavy industrial bases across the Northeast Rustbelt and Central China, drawing millions of rural labourers into municipal state-owned enterprises [@nbs1954census; @Cheng2021Great].

To control rural-urban migration and manage food rationing following the disruptions of the Great Leap Forward famine (1959AD to 1961AD), the PRC government instituted strict enforcement of the dual household registration (*hukou*) system in 1958AD, dividing citizens into agricultural and non-agricultural statuses [@Song2009Does; @Meng2010Institutional; @Zhou2025Rural]. Urban expansion was further redirected by the Third Front construction campaign during the 1960s and 1970s, which relocated industrial plants and skilled personnel inland into mountainous recesses of Sichuan, Guizhou, Yunnan and Shaanxi [@Cheng2021Great].

The advent of economic reforms after 1978AD fundamentally reshaped this geography [@Meng2019Rural]. The creation of Special Economic Zones in Guangdong (Shenzhen, Zhuhai, Shantou) and Fujian (Xiamen), followed by the opening of coastal cities in 1984AD and the development of the Shanghai Pudong New Area in 1990AD, generated unprecedented rural-to-urban labour mobility [@Chen2019Polycentricity; @Zhang2017Multiplex]. Tens of millions of rural migrant workers (*nongmingong*) moved from inland agrarian provinces (Henan, Sichuan, Anhui, Jiangxi, Hunan) into coastal industrial corridors [@Meng2019Rural; @Chen2011Rural]. Shenzhen grew from a small border market town in Bao'an County into a global manufacturing and technology metropolis of 18,61M inhabitants [@Chen2019Polycentricity; @Li2017Urban]. Concurrently, Taiwan underwent rapid industrialisation and urban concentration along its western coastal plain from Taipei and New Taipei down to Taichung and Kaohsiung [@taiwan_moi2025], while Hong Kong absorbed waves of mainland migrants to form a high-density international financial centre of 7,54M [@hk_censtatd2025; @Almond2007Long], and Macao expanded through maritime land reclamation into a global hospitality hub of 690k [@macao_dsec2025].

# Methodology

Urban population figures were assembled from official decennial tabulations of the State Statistical Bureau and National Bureau of Statistics of China for the 1953AD, 1964AD, 1982AD, 1990AD, 2000AD, 2010AD and 2020AD censuses [@nbs1954census; @nbs1964census; @nbs1982census; @nbs1990census; @nbs2000census; @nbs2010census; @nbs2020census], complemented by municipal statistical yearbooks and published 2025AD administrative counts. Taiwanese settlements draw upon Ministry of the Interior household registration statistics [@taiwan_moi2025], Hong Kong figures draw upon Census and Statistics Department reports [@hk_censtatd2025], and Macao records draw upon Direcção dos Serviços de Estatística e Censos tabulations [@macao_dsec2025].

Geographic coordinates reflect canonical WGS84 locations for prefectural administrative centres, county seats and municipal districts. Spatial snapping reconciles settlement coordinates against the 34 provincial boundary masks. In the regional source ledger, 38 candidate settlements located within 3 km of higher-ranking municipal centres were categorised as excluded duplicate aliases (for example, satellite urban county designations consolidated into Dongguan, Xiantao, Tianmen, Qianjiang, Jiyuan, Wenchang and Basuo) to maintain strict demographic consistency.

# Testing and Validation

Cross-ledger auditing verifies exact reconciliation across all 2.156 candidates: 2.118 active included settlements, 38 excluded duplicate entries and 0 unresolved records. Every catalogued settlement possesses non-zero population observations spanning the 1949AD to 2026AD temporal domain and valid WGS84 coordinates. Figure \ref{fig:sett-prc} presents the rank-size distribution and the leading fifteen settlement peaks.

<figure class="crd-figure-block" id="fig:sett-prc">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-prc-taiwan-hong-kong-and-macao-settlements/fig4_prc_taiwan_hong_kong_and_macao_settlements.png" alt="fig:sett-prc" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 2.118 catalogued centres of China, Taiwan, Hong Kong and Macao from 1949AD to 2026AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-prc} documents the 45 largest settlements in the gazetteer ranked by peak catalogued population, spanning provincial-level municipalities, coastal export hubs, provincial capitals and regional economic centres.

<figure class="crd-table-figure" id="tab:top45-prc">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Polity</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1953AD</th><th class="crd-th">1982AD</th><th class="crd-th">2000AD</th><th class="crd-th">2020AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chongqing</strong></td><td class="crd-td">China</td><td class="crd-td">29,54, 107,4</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,77M</td><td class="crd-td">6,73M</td><td class="crd-td">11,62M</td><td class="crd-td">22,26M</td><td class="crd-td">23,6M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shanghai</strong></td><td class="crd-td">China</td><td class="crd-td">31,16, 121,39</td><td class="crd-td">1953-2025AD</td><td class="crd-td">6,2M</td><td class="crd-td">9,04M</td><td class="crd-td">15,62M</td><td class="crd-td">22,21M</td><td class="crd-td">22,83M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Beijing</strong></td><td class="crd-td">China</td><td class="crd-td">39,89, 116,42</td><td class="crd-td">1953-2025AD</td><td class="crd-td">2,77M</td><td class="crd-td">7,42M</td><td class="crd-td">12,81M</td><td class="crd-td">19,17M</td><td class="crd-td">20,08M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shenzhen</strong></td><td class="crd-td">China</td><td class="crd-td">24,8, 118,44</td><td class="crd-td">1953-2025AD</td><td class="crd-td">2,5M</td><td class="crd-td">4,59M</td><td class="crd-td">7,92M</td><td class="crd-td">17,56M</td><td class="crd-td">18,61M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Chengdu</strong></td><td class="crd-td">China</td><td class="crd-td">30,76, 103,87</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,12M</td><td class="crd-td">4,23M</td><td class="crd-td">7,3M</td><td class="crd-td">16,49M</td><td class="crd-td">17,48M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Guangzhou</strong></td><td class="crd-td">China</td><td class="crd-td">23,37, 113,51</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,6M</td><td class="crd-td">4,68M</td><td class="crd-td">8,09M</td><td class="crd-td">16,1M</td><td class="crd-td">17,06M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tianjin</strong></td><td class="crd-td">China</td><td class="crd-td">39,29, 117,3</td><td class="crd-td">1953-2025AD</td><td class="crd-td">2,69M</td><td class="crd-td">4,52M</td><td class="crd-td">7,81M</td><td class="crd-td">11,74M</td><td class="crd-td">12,33M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Suzhou</strong></td><td class="crd-td">China</td><td class="crd-td">31,46, 120,89</td><td class="crd-td">1953-2025AD</td><td class="crd-td">857,4k</td><td class="crd-td">3,22M</td><td class="crd-td">5,57M</td><td class="crd-td">10,42M</td><td class="crd-td">11,04M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Wuhan</strong></td><td class="crd-td">China</td><td class="crd-td">30,73, 114,39</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,43M</td><td class="crd-td">3,32M</td><td class="crd-td">5,73M</td><td class="crd-td">10,39M</td><td class="crd-td">11,02M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Xi'an</strong></td><td class="crd-td">China</td><td class="crd-td">34,07, 108,79</td><td class="crd-td">1953-2025AD</td><td class="crd-td">787k</td><td class="crd-td">2,57M</td><td class="crd-td">4,44M</td><td class="crd-td">10,26M</td><td class="crd-td">10,87M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hangzhou</strong></td><td class="crd-td">China</td><td class="crd-td">30, 119,6</td><td class="crd-td">1953-2025AD</td><td class="crd-td">745,5k</td><td class="crd-td">2,8M</td><td class="crd-td">4,84M</td><td class="crd-td">9,94M</td><td class="crd-td">10,54M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Zhengzhou</strong></td><td class="crd-td">China</td><td class="crd-td">34,69, 113,55</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,31M</td><td class="crd-td">2,41M</td><td class="crd-td">4,16M</td><td class="crd-td">9,88M</td><td class="crd-td">10,47M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dongguan</strong></td><td class="crd-td">China</td><td class="crd-td">22,93, 113,95</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,75M</td><td class="crd-td">3,2M</td><td class="crd-td">5,53M</td><td class="crd-td">9,64M</td><td class="crd-td">10,22M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Foshan</strong></td><td class="crd-td">China</td><td class="crd-td">23,02, 112,96</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,63M</td><td class="crd-td">2,98M</td><td class="crd-td">5,15M</td><td class="crd-td">9,04M</td><td class="crd-td">9,59M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Changsha</strong></td><td class="crd-td">China</td><td class="crd-td">28,15, 113,23</td><td class="crd-td">1953-2025AD</td><td class="crd-td">651k</td><td class="crd-td">2,1M</td><td class="crd-td">3,62M</td><td class="crd-td">8,3M</td><td class="crd-td">8,8M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nanjing</strong></td><td class="crd-td">China</td><td class="crd-td">23,41, 99,78</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,09M</td><td class="crd-td">2,74M</td><td class="crd-td">4,74M</td><td class="crd-td">8,09M</td><td class="crd-td">8,57M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shijiazhuang</strong></td><td class="crd-td">China</td><td class="crd-td">38,08, 114,57</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,23M</td><td class="crd-td">2,26M</td><td class="crd-td">3,91M</td><td class="crd-td">7,88M</td><td class="crd-td">8,36M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hefei</strong></td><td class="crd-td">China</td><td class="crd-td">31,95, 117,28</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,12M</td><td class="crd-td">2,06M</td><td class="crd-td">3,56M</td><td class="crd-td">7,71M</td><td class="crd-td">8,17M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Qingdao</strong></td><td class="crd-td">China</td><td class="crd-td">36,63, 120,27</td><td class="crd-td">1953-2025AD</td><td class="crd-td">917k</td><td class="crd-td">2,52M</td><td class="crd-td">4,36M</td><td class="crd-td">7,69M</td><td class="crd-td">8,15M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shenyang</strong></td><td class="crd-td">China</td><td class="crd-td">42,18, 123,14</td><td class="crd-td">1953-2025AD</td><td class="crd-td">2,3M</td><td class="crd-td">2,75M</td><td class="crd-td">4,75M</td><td class="crd-td">7,67M</td><td class="crd-td">8,13M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ningbo</strong></td><td class="crd-td">China</td><td class="crd-td">29,8, 121,55</td><td class="crd-td">1953-2025AD</td><td class="crd-td">607,7k</td><td class="crd-td">2,29M</td><td class="crd-td">3,95M</td><td class="crd-td">7,34M</td><td class="crd-td">7,78M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hong Kong</strong></td><td class="crd-td">Hong Kong</td><td class="crd-td">22,29, 114,16</td><td class="crd-td">1953-2025AD</td><td class="crd-td">2,24M</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,53M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Harbin</strong></td><td class="crd-td">China</td><td class="crd-td">45,63, 127,97</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,16M</td><td class="crd-td">2,86M</td><td class="crd-td">4,94M</td><td class="crd-td">7,07M</td><td class="crd-td">7,28M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Wenzhou</strong></td><td class="crd-td">China</td><td class="crd-td">27,81, 120,49</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,45M</td><td class="crd-td">2,65M</td><td class="crd-td">4,58M</td><td class="crd-td">6,91M</td><td class="crd-td">7,26M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jinan</strong></td><td class="crd-td">China</td><td class="crd-td">36,65, 117,12</td><td class="crd-td">1953-2025AD</td><td class="crd-td">680k</td><td class="crd-td">2,23M</td><td class="crd-td">3,85M</td><td class="crd-td">6,76M</td><td class="crd-td">7,17M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kunming</strong></td><td class="crd-td">China</td><td class="crd-td">25,29, 102,82</td><td class="crd-td">1953-2025AD</td><td class="crd-td">699k</td><td class="crd-td">1,91M</td><td class="crd-td">3,3M</td><td class="crd-td">6,74M</td><td class="crd-td">7,14M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Wuxi</strong></td><td class="crd-td">China</td><td class="crd-td">31,45, 120,21</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,08M</td><td class="crd-td">1,97M</td><td class="crd-td">3,41M</td><td class="crd-td">6,18M</td><td class="crd-td">6,55M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dalian</strong></td><td class="crd-td">China</td><td class="crd-td">39,74, 122,26</td><td class="crd-td">1953-2025AD</td><td class="crd-td">766k</td><td class="crd-td">2,19M</td><td class="crd-td">3,78M</td><td class="crd-td">6,14M</td><td class="crd-td">6,5M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Linyi</strong></td><td class="crd-td">China</td><td class="crd-td">35,34, 118,25</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,09M</td><td class="crd-td">1,99M</td><td class="crd-td">3,44M</td><td class="crd-td">6,07M</td><td class="crd-td">6,43M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Weifang</strong></td><td class="crd-td">China</td><td class="crd-td">36,63, 119,06</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,02M</td><td class="crd-td">1,88M</td><td class="crd-td">3,24M</td><td class="crd-td">6,05M</td><td class="crd-td">6,41M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nanning</strong></td><td class="crd-td">China</td><td class="crd-td">22,82, 108,32</td><td class="crd-td">1953-2025AD</td><td class="crd-td">841,3k</td><td class="crd-td">1,54M</td><td class="crd-td">2,66M</td><td class="crd-td">6,02M</td><td class="crd-td">6,38M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Quanzhou</strong></td><td class="crd-td">China</td><td class="crd-td">25,25, 118,21</td><td class="crd-td">1953-2025AD</td><td class="crd-td">555,6k</td><td class="crd-td">2,09M</td><td class="crd-td">3,61M</td><td class="crd-td">6,01M</td><td class="crd-td">6,37M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Fuzhou</strong></td><td class="crd-td">China</td><td class="crd-td">26,08, 119,29</td><td class="crd-td">1953-2025AD</td><td class="crd-td">553k</td><td class="crd-td">1,94M</td><td class="crd-td">3,35M</td><td class="crd-td">6,01M</td><td class="crd-td">6,37M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Changchun</strong></td><td class="crd-td">China</td><td class="crd-td">44,45, 125,72</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,1M</td><td class="crd-td">2,02M</td><td class="crd-td">3,49M</td><td class="crd-td">5,98M</td><td class="crd-td">6,34M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Xuzhou</strong></td><td class="crd-td">China</td><td class="crd-td">34,2, 117,28</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,09M</td><td class="crd-td">2,01M</td><td class="crd-td">3,47M</td><td class="crd-td">5,96M</td><td class="crd-td">6,32M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Handan</strong></td><td class="crd-td">China</td><td class="crd-td">36,57, 114,55</td><td class="crd-td">1953-2025AD</td><td class="crd-td">956,6k</td><td class="crd-td">1,75M</td><td class="crd-td">3,03M</td><td class="crd-td">5,49M</td><td class="crd-td">5,81M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nantong</strong></td><td class="crd-td">China</td><td class="crd-td">32,26, 121,04</td><td class="crd-td">1953-2025AD</td><td class="crd-td">975,5k</td><td class="crd-td">1,79M</td><td class="crd-td">3,09M</td><td class="crd-td">5,44M</td><td class="crd-td">5,77M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Zhoukou</strong></td><td class="crd-td">China</td><td class="crd-td">33,69, 114,93</td><td class="crd-td">1953-2025AD</td><td class="crd-td">633k</td><td class="crd-td">1,16M</td><td class="crd-td">2M</td><td class="crd-td">5,42M</td><td class="crd-td">5,74M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Baoding</strong></td><td class="crd-td">China</td><td class="crd-td">39,02, 115,18</td><td class="crd-td">1953-2025AD</td><td class="crd-td">827,9k</td><td class="crd-td">1,52M</td><td class="crd-td">2,62M</td><td class="crd-td">5,28M</td><td class="crd-td">5,6M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jining</strong></td><td class="crd-td">China</td><td class="crd-td">35,48, 116,73</td><td class="crd-td">1953-2025AD</td><td class="crd-td">833,5k</td><td class="crd-td">1,53M</td><td class="crd-td">2,64M</td><td class="crd-td">5,02M</td><td class="crd-td">5,32M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tangshan</strong></td><td class="crd-td">China</td><td class="crd-td">39,72, 118,35</td><td class="crd-td">1953-2025AD</td><td class="crd-td">924,2k</td><td class="crd-td">1,69M</td><td class="crd-td">2,93M</td><td class="crd-td">4,96M</td><td class="crd-td">5,26M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ganzhou</strong></td><td class="crd-td">China</td><td class="crd-td">25,7, 115,35</td><td class="crd-td">1953-2025AD</td><td class="crd-td">753,7k</td><td class="crd-td">1,38M</td><td class="crd-td">2,39M</td><td class="crd-td">4,96M</td><td class="crd-td">5,26M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nanyang</strong></td><td class="crd-td">China</td><td class="crd-td">32,96, 112,41</td><td class="crd-td">1953-2025AD</td><td class="crd-td">800,1k</td><td class="crd-td">1,47M</td><td class="crd-td">2,53M</td><td class="crd-td">4,91M</td><td class="crd-td">5,21M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nanchangshi</strong></td><td class="crd-td">China</td><td class="crd-td">28,66, 115,91</td><td class="crd-td">1953-2025AD</td><td class="crd-td">795,3k</td><td class="crd-td">1,46M</td><td class="crd-td">2,52M</td><td class="crd-td">4,88M</td><td class="crd-td">5,18M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jinhua</strong></td><td class="crd-td">China</td><td class="crd-td">29,11, 120</td><td class="crd-td">1953-2025AD</td><td class="crd-td">758,8k</td><td class="crd-td">1,39M</td><td class="crd-td">2,4M</td><td class="crd-td">4,81M</td><td class="crd-td">5,1M (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements across China, Taiwan, Hong Kong and Macao ordered by peak catalogued population (n=2.118 total).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-prc} summarises settlement counts, provincial surface areas, historical population benchmarks and leading municipal centres across all 34 sub-regions. Table \ref{tab:excluded-prc} details all 38 excluded duplicate candidates recorded in the source ledger.

<figure class="crd-table-figure" id="tab:regsum-prc">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province</th><th class="crd-th">Sites</th><th class="crd-th">Area (km²)</th><th class="crd-th">1953AD</th><th class="crd-th">2020AD</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Anhui</strong></td><td class="crd-td">70</td><td class="crd-td">123.592</td><td class="crd-td">30,34M</td><td class="crd-td">61,03M</td><td class="crd-td">Hefei (8,17M)</td></tr>
<tr><td class="crd-td"><strong>Beijing</strong></td><td class="crd-td">1</td><td class="crd-td">13.203</td><td class="crd-td">4,59M</td><td class="crd-td">21,89M</td><td class="crd-td">Beijing (20,08M)</td></tr>
<tr><td class="crd-td"><strong>Chongqing</strong></td><td class="crd-td">13</td><td class="crd-td">71.721</td><td class="crd-td">17,66M</td><td class="crd-td">32,05M</td><td class="crd-td">Chongqing (23,6M)</td></tr>
<tr><td class="crd-td"><strong>Fujian</strong></td><td class="crd-td">64</td><td class="crd-td">114.689</td><td class="crd-td">13,14M</td><td class="crd-td">41,54M</td><td class="crd-td">Shenzhen (18,61M)</td></tr>
<tr><td class="crd-td"><strong>Gansu</strong></td><td class="crd-td">79</td><td class="crd-td">381.337</td><td class="crd-td">11,29M</td><td class="crd-td">25,02M</td><td class="crd-td">Lanzhou (3,84M)</td></tr>
<tr><td class="crd-td"><strong>Guangdong</strong></td><td class="crd-td">80</td><td class="crd-td">169.002</td><td class="crd-td">32,08M</td><td class="crd-td">126,01M</td><td class="crd-td">Guangzhou (17,06M)</td></tr>
<tr><td class="crd-td"><strong>Guangxi</strong></td><td class="crd-td">84</td><td class="crd-td">230.687</td><td class="crd-td">19,56M</td><td class="crd-td">50,13M</td><td class="crd-td">Nanning (6,38M)</td></tr>
<tr><td class="crd-td"><strong>Guizhou</strong></td><td class="crd-td">78</td><td class="crd-td">175.765</td><td class="crd-td">15,04M</td><td class="crd-td">38,56M</td><td class="crd-td">Guiyang (5,08M)</td></tr>
<tr><td class="crd-td"><strong>Hainan</strong></td><td class="crd-td">18</td><td class="crd-td">33.034</td><td class="crd-td">2,69M</td><td class="crd-td">10,08M</td><td class="crd-td">Haikou (2,49M)</td></tr>
<tr><td class="crd-td"><strong>Hebei</strong></td><td class="crd-td">115</td><td class="crd-td">178.954</td><td class="crd-td">33,18M</td><td class="crd-td">74,61M</td><td class="crd-td">Shijiazhuang (8,36M)</td></tr>
<tr><td class="crd-td"><strong>Heilongjiang</strong></td><td class="crd-td">78</td><td class="crd-td">441.657</td><td class="crd-td">11,9M</td><td class="crd-td">31,85M</td><td class="crd-td">Harbin (7,28M)</td></tr>
<tr><td class="crd-td"><strong>Henan</strong></td><td class="crd-td">118</td><td class="crd-td">161.809</td><td class="crd-td">44,22M</td><td class="crd-td">99,37M</td><td class="crd-td">Zhengzhou (10,47M)</td></tr>
<tr><td class="crd-td"><strong>Hubei</strong></td><td class="crd-td">74</td><td class="crd-td">182.060</td><td class="crd-td">27,79M</td><td class="crd-td">57,75M</td><td class="crd-td">Wuhan (11,02M)</td></tr>
<tr><td class="crd-td"><strong>Hunan</strong></td><td class="crd-td">100</td><td class="crd-td">220.741</td><td class="crd-td">33,23M</td><td class="crd-td">66,44M</td><td class="crd-td">Changsha (8,8M)</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia</strong></td><td class="crd-td">85</td><td class="crd-td">1.146.911</td><td class="crd-td">7,34M</td><td class="crd-td">24,05M</td><td class="crd-td">Hohhot (2,89M)</td></tr>
<tr><td class="crd-td"><strong>Jiangsu</strong></td><td class="crd-td">53</td><td class="crd-td">96.477</td><td class="crd-td">38,33M</td><td class="crd-td">84,75M</td><td class="crd-td">Suzhou (11,04M)</td></tr>
<tr><td class="crd-td"><strong>Jiangxi</strong></td><td class="crd-td">82</td><td class="crd-td">174.727</td><td class="crd-td">16,77M</td><td class="crd-td">45,19M</td><td class="crd-td">Ganzhou (5,26M)</td></tr>
<tr><td class="crd-td"><strong>Jilin</strong></td><td class="crd-td">47</td><td class="crd-td">197.071</td><td class="crd-td">11,29M</td><td class="crd-td">24,07M</td><td class="crd-td">Changchun (6,34M)</td></tr>
<tr><td class="crd-td"><strong>Liaoning</strong></td><td class="crd-td">54</td><td class="crd-td">152.351</td><td class="crd-td">20,57M</td><td class="crd-td">42,59M</td><td class="crd-td">Shenyang (8,13M)</td></tr>
<tr><td class="crd-td"><strong>Ningxia</strong></td><td class="crd-td">18</td><td class="crd-td">57.394</td><td class="crd-td">1,64M</td><td class="crd-td">7,2M</td><td class="crd-td">Yinchuan (2,43M)</td></tr>
<tr><td class="crd-td"><strong>Qinghai</strong></td><td class="crd-td">42</td><td class="crd-td">702.970</td><td class="crd-td">1,68M</td><td class="crd-td">5,92M</td><td class="crd-td">Xining (2,06M)</td></tr>
<tr><td class="crd-td"><strong>Shaanxi</strong></td><td class="crd-td">86</td><td class="crd-td">214.151</td><td class="crd-td">15,88M</td><td class="crd-td">39,53M</td><td class="crd-td">Xi'an (10,87M)</td></tr>
<tr><td class="crd-td"><strong>Shandong</strong></td><td class="crd-td">95</td><td class="crd-td">161.473</td><td class="crd-td">48,88M</td><td class="crd-td">101,53M</td><td class="crd-td">Qingdao (8,15M)</td></tr>
<tr><td class="crd-td"><strong>Shanghai</strong></td><td class="crd-td">2</td><td class="crd-td">6.099</td><td class="crd-td">8,96M</td><td class="crd-td">24,87M</td><td class="crd-td">Shanghai (22,83M)</td></tr>
<tr><td class="crd-td"><strong>Shanxi</strong></td><td class="crd-td">95</td><td class="crd-td">166.728</td><td class="crd-td">14,31M</td><td class="crd-td">34,92M</td><td class="crd-td">Taiyuanshi (5,01M)</td></tr>
<tr><td class="crd-td"><strong>Sichuan</strong></td><td class="crd-td">148</td><td class="crd-td">493.778</td><td class="crd-td">48,02M</td><td class="crd-td">83,67M</td><td class="crd-td">Chengdu (17,48M)</td></tr>
<tr><td class="crd-td"><strong>Tianjin</strong></td><td class="crd-td">1</td><td class="crd-td">13.666</td><td class="crd-td">4,62M</td><td class="crd-td">13,87M</td><td class="crd-td">Tianjin (12,33M)</td></tr>
<tr><td class="crd-td"><strong>Xinjiang</strong></td><td class="crd-td">9</td><td class="crd-td">1.634.591</td><td class="crd-td">4,87M</td><td class="crd-td">25,85M</td><td class="crd-td">Urumqi (2,87M)</td></tr>
<tr><td class="crd-td"><strong>Tibet (Xizang)</strong></td><td class="crd-td">70</td><td class="crd-td">1.127.666</td><td class="crd-td">1,27M</td><td class="crd-td">3,65M</td><td class="crd-td">Lhasa (641,8k)</td></tr>
<tr><td class="crd-td"><strong>Yunnan</strong></td><td class="crd-td">127</td><td class="crd-td">400.699</td><td class="crd-td">17,47M</td><td class="crd-td">47,21M</td><td class="crd-td">Nanjing (8,57M)</td></tr>
<tr><td class="crd-td"><strong>Zhejiang</strong></td><td class="crd-td">62</td><td class="crd-td">107.418</td><td class="crd-td">22,87M</td><td class="crd-td">64,57M</td><td class="crd-td">Hangzhou (10,54M)</td></tr>
<tr><td class="crd-td"><strong>Taiwan</strong></td><td class="crd-td">68</td><td class="crd-td">35.732</td><td class="crd-td">8,44M</td><td class="crd-td">23,56M</td><td class="crd-td">New Taipei (4,05M)</td></tr>
<tr><td class="crd-td"><strong>Hong Kong SAR</strong></td><td class="crd-td">1</td><td class="crd-td">1.029</td><td class="crd-td">2,24M</td><td class="crd-td">7,48M</td><td class="crd-td">Hong Kong (7,53M)</td></tr>
<tr><td class="crd-td"><strong>Macao SAR</strong></td><td class="crd-td">1</td><td class="crd-td">40</td><td class="crd-td">188k</td><td class="crd-td">683k</td><td class="crd-td">Macao (688k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts, provincial land areas, population benchmarks and leading centres across all 34 administrative units (2.118 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-prc">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Polity</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dongguan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Dongguan-China.</td></tr>
<tr><td class="crd-td"><strong>Xiantao</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Xiantao-China.</td></tr>
<tr><td class="crd-td"><strong>Tianmen</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Tianmen Xian-China.</td></tr>
<tr><td class="crd-td"><strong>Qianjiang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Qianjiang-China.</td></tr>
<tr><td class="crd-td"><strong>Nada</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Nada-China.</td></tr>
<tr><td class="crd-td"><strong>Jiyuan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Jiyuan-China.</td></tr>
<tr><td class="crd-td"><strong>Wenchang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Wenchang-China.</td></tr>
<tr><td class="crd-td"><strong>Suixi</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Huaibei-China.</td></tr>
<tr><td class="crd-td"><strong>Qionghai</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Qionghai County-China.</td></tr>
<tr><td class="crd-td"><strong>Basuo</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Basuo-China.</td></tr>
<tr><td class="crd-td"><strong>Wanning</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Wanning-China.</td></tr>
<tr><td class="crd-td"><strong>Changhua</strong></td><td class="crd-td">Taiwan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Chang-hua-Taiwan.</td></tr>
<tr><td class="crd-td"><strong>Jiayuguan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Jiayuguan-China.</td></tr>
<tr><td class="crd-td"><strong>Chengmai</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Chengmai Xian-China.</td></tr>
<tr><td class="crd-td"><strong>Baoyou</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Baoyou-China.</td></tr>
<tr><td class="crd-td"><strong>Lingao</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Lingao Xian-China.</td></tr>
<tr><td class="crd-td"><strong>Yelin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Yelin-China.</td></tr>
<tr><td class="crd-td"><strong>Jiangyin</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Jiangyin-China.</td></tr>
<tr><td class="crd-td"><strong>Ding'an</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Ding'an Xian-China.</td></tr>
<tr><td class="crd-td"><strong>Tunchang</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Tunchang Xian-China.</td></tr>
<tr><td class="crd-td"><strong>Shilu</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Shilu-China.</td></tr>
<tr><td class="crd-td"><strong>Magong</strong></td><td class="crd-td">Taiwan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Coordinates (23.565, 119.586) lie outside prc_taiwan_hong_kong_and_macao areal mask.</td></tr>
<tr><td class="crd-td"><strong>Longquan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Duplicate toponym within prc_shanxi already represented by Longquan-China.</td></tr>
<tr><td class="crd-td"><strong>Wuzhishan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Wuzhishan-China.</td></tr>
<tr><td class="crd-td"><strong>Yinggen</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Yinggen-China.</td></tr>
<tr><td class="crd-td"><strong>Tongren</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Ding'an Xian-China.</td></tr>
<tr><td class="crd-td"><strong>Zhangxian</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Shazhou-China.</td></tr>
<tr><td class="crd-td"><strong>Baoting Lizu Miaozu Zizhixian</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Baoting Lizu Miaozu Zizhixian-China.</td></tr>
<tr><td class="crd-td"><strong>Baisha Li Autonomous County</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Baisha Li Autonomous-China.</td></tr>
<tr><td class="crd-td"><strong>Yong'an</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Duplicate toponym within prc_shanxi already represented by Yong'an-China.</td></tr>
<tr><td class="crd-td"><strong>Longquan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Duplicate toponym within prc_shanxi already represented by Longquan-China.</td></tr>
<tr><td class="crd-td"><strong>Xincheng</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Duplicate toponym within prc_shanxi already represented by Xincheng-China.</td></tr>
<tr><td class="crd-td"><strong>Tianwei</strong></td><td class="crd-td">Taiwan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Beidou-Taiwan.</td></tr>
<tr><td class="crd-td"><strong>Zhongxing New Village</strong></td><td class="crd-td">Taiwan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Caotun-Taiwan.</td></tr>
<tr><td class="crd-td"><strong>Longquan</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Duplicate toponym within prc_shanxi already represented by Longquan-China.</td></tr>
<tr><td class="crd-td"><strong>Shengsi</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Coordinates (30.725, 122.453) lie outside prc_taiwan_hong_kong_and_macao areal mask.</td></tr>
<tr><td class="crd-td"><strong>Gar</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Within 3 km of higher-ranked settlement Gar-China.</td></tr>
<tr><td class="crd-td"><strong>Motuo</strong></td><td class="crd-td">China</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Coordinates (28.748, 94.894) lie outside prc_taiwan_hong_kong_and_macao areal mask.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> All 38 excluded duplicate candidates in the China, Taiwan, Hong Kong and Macao source ledger, consolidated into canonical parent cities.</figcaption>
</figure>

# Limitations

Two administrative and methodological factors condition urban population series in contemporary China. First, the boundary definition of Chinese cities has evolved substantially over the reform era [@Petushkova2025Urbanization; @Zhong2022Urban]. Administrative municipalities (*shi*) encompass both densely built-up urban districts (*shi-xia-qu*) and extensive surrounding rural counties and county-level cities. For megacities such as Chongqing, the total municipal population exceeds 32M across 82.400 km², whereas the built-up urban core accommodates 23,6M [@Peng2024More]. Second, official statistics distinguish between registered *hukou* inhabitants and permanent resident populations (*changzhurenkou*) living in an urban centre for six months or longer [@Meng2019Rural; @Zhou2025Rural]. Post-2000 national censuses capture permanent residents regardless of registration status, reflecting true de facto urban concentrations [@nbs2000census; @nbs2020census].

# Sources

<div id="refs"></div>
