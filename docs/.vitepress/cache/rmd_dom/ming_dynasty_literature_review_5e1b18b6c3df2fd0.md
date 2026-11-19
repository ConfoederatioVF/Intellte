---
title: "Demographic Trajectory of China During the Ming Dynasty"
subtitle: "Yellow Registers, Provincial Growth, Urban Hierarchy and Dynastic Crisis, 1368AD to 1644AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: ming_dynasty_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_ming_dynasty_spatial.png"
hero_caption: "Administrative division and prefectural urban centres across the twenty Ming provinces from 1368AD to 1644AD."
hero_label: "fig:hero-ming-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper reconstructs the provincial demography, settlement hierarchy and spatial population density of China under the Ming Dynasty from the founding accession of the Hongwu Emperor in 1368AD to the fall of Beijing and the dynastic crisis of 1644AD. Across twenty administrative and frontier territories covering 9.389.222 km² (137.431 five-arcminute raster cells), aggregate population expanded from 69,08M (69.080.000) in 1368AD to 75,66M (75.656.000) at the compilation of the nationwide Yellow Registers (*huangce*) in 1393AD, climbed through sustained agrarian colonisation to 119,26M (119.260.000) by 1500AD and 163,12M (163.123.000) during the Wanli fiscal reforms of 1580AD, and reached a late Ming peak of 193,76M (193.760.000) in 1630AD [@Cao2000Zhongguo; @Cao2024Population; @Ma2022Cambridge]. Over the succeeding fourteen years, the severe cooling of the Little Ice Age, catastrophic droughts across northern China, bubonic plague and widespread peasant uprisings reduced imperial population by 24,2% to 146,92M (146.920.000) in 1644AD [@Lee2012Tale; @Strange2021Crisis; @Sun2025Impact]. Correcting official household tax returns (*Hubu* tallies) for institutional under-enumeration, the omission of military garrison households (*weisuo*) from civil rolls, unregistered females and landless migrants, this study reconciles provincial totals with Cao Shuji's demographic reconstructions and calibrates spatial densities using Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 1.274 domestic catchments, 12.894 imperial-era archaeological and architectural records, and 7.672 geocoded prefectural and county centres led by Beijing (1,05M), Nanjing (700k), Suzhou (650k) and Hangzhou (520k) [@Cao2000Zhongguo; @Cao2024Population; @CHGIS2016v6].

# Background

## Fiscal Registration and the Yellow Registers

The demographic history of Ming China begins with the administrative reconstruction undertaken by Zhu Yuanzhang (the Hongwu Emperor, reigned 1368AD to 1398AD) following the collapse of the Mongol Yuan dynasty [@Cao2000Zhongguo; @Ma2022Cambridge]. Inheriting an empire fractured by two decades of civil war, Yellow River floods and epidemic mortality, the Hongwu administration sought to establish an enduring agrarian order based on hereditary occupational classifications, universal household registration and localised fiscal self-sufficiency [@Cao2024Population].

In 1381AD, the imperial court decreed the compilation of the Yellow Registers (*huangce*), an empire-wide decennial household census paired with the cadastral Fish-Scale Registers (*yulin tuce*) [@Cao2000Zhongguo; @Zurndorfer1988Guide]. Organised through the *lijia* tithing structure, every ten households formed a *jia* and ten *jia* formed a *li* (110 households, including ten wealthy head households responsible for annual tax collection and corvée duty) [@Cao2024Population; @Ma2022Cambridge]. The comprehensive registration of 1393AD recorded 10.652.870 households and 60.545.812 individuals (*kou*), which traditional historiography long cited as the absolute benchmark of early Ming population [@Cao2000Zhongguo; @Han2026Chinese].

However, modern historical demography, pioneered by Cao Shuji, demonstrates that official *huangce* numbers represent taxable units (*ding* and registered civil households) rather than total biological populations [@Cao2000Zhongguo; @Cao2024Population]. By comparing local gazetteers (*difangzhi*), clan genealogies (*zupu*) and fiscal tax quotas, Cao revealed that official returns consistently concealed adult females (yielding implausible sex ratios exceeding 130 to 150 males per 100 females), ignored infants, under-reported non-inheriting sons and completely excluded substantial non-civil populations [@Cao2000Zhongguo; @Cao2024Population; @Han2026Chinese].

## The Military Household Sub-System

The most prominent institutional omission in early Ming civil tallies was the hereditary military household system (*junji*), organised through the guard and battalion network (*weisuo*) [@Cao2000Zhongguo; @Robinson2025Military]. Established to maintain a standing imperial army without commercial expenditure, the *weisuo* system assigned military households to designated agricultural garrison lands (*juntun*), placing them under the direct administrative jurisdiction of the Ministry of War (*Bingbu*) rather than the civil Ministry of Revenue (*Hubu*) [@Cao2024Population; @Robinson2025Military].

In 1393AD, the Ming military establishment maintained approximately 493 guards (*wei*) and 2.593 independent battalions (*suo*), comprising an estimated 1,2M to 1,5M active soldiers [@Cao2000Zhongguo; @Robinson2025Military]. Including their resident family members, the military population exceeded 7M persons across the empire, concentrated along the northern frontier defense line (the Nine Garrisons, *jiubian*), around the southern capital at Nanjing, along the Grand Canal transport corridor, and across strategic enclaves in Liaodong, Guizhou and Yunnan [@Cao2000Zhongguo; @Cao2024Population; @Robinson2025Military; @Wang2025Grand]. Because *Hubu* civil registers systematically excluded these military families, official totals for heavily garrisoned frontier provinces such as Shaanxi, Shanxi, Beizhili and Guizhou understated actual inhabitants by 20% to 50% [@Cao2000Zhongguo; @Cao2024Population].

## State-Sponsored Resettlement and Frontier Colonisation

To restore agrarian production across regions devastated by fourteenth-century warfare, the early Ming state carried out vast compulsory resettlement programmes [@Cao2000Zhongguo; @Cao2024Population]. The North China Plain (Henan, Shandong and southern Beizhili) had suffered catastrophic depopulation during the late Yuan conflicts, whereas southern Shanxi had remained relatively shielded behind its mountain passes [@Cao2000Zhongguo; @Bu2025Climate].

Between 1370AD and 1417AD, the imperial government conducted eighteen major state-sponsored migration waves centered on the legendary Hongtong Pagoda tree gathering station in Shanxi, forcibly relocating hundreds of thousands of peasant households into ruined districts across Henan, Shandong, Hebei and northern Anhui [@Cao2000Zhongguo; @Bu2025Climate; @Tian2025Enhancement]. Concurrently, the Hongwu and Yongle emperors transplanted wealthy merchant families and gentry from Jiangnan to populate the new imperial capitals at Nanjing and Beijing [@Cao2000Zhongguo; @Gao2026Using].

On the southern and south-western frontiers, the suppression of the Yuan loyalist Prince of Liang in Yunnan (1381AD to 1382AD) was followed by the permanent dispatch of 300k soldiers and their dependents from Nanzhili, Jiangxi and Huguang, creating fortified Han farming colonies along the river valleys of Guizhou and Yunnan [@Cao2000Zhongguo; @Cao2024Population]. These early state-directed migrations fundamentally altered Chinese ethnolinguistic geography, laying the foundation for sustained sixteenth-century population expansion [@Cao2000Zhongguo; @Ma2022Cambridge].

# Methodology

## Territorial Partition and Provincial Masking

To capture historical reality while maintaining spatial consistency across the dynastic span, this study partitions China into twenty provincial and frontier territorial units covering 9.389.222 km² across 137.431 five-arcminute cells (Table \ref{tab:validation-ming}):

1. The Two Metropolitan Domains (*Liangjing*): Beizhili (Northern Metropolitan, surrounding Beijing, 205.823 km²) and Nanzhili (Southern Metropolitan, encompassing modern Jiangsu, Anhui and Shanghai, 226.168 km²).
2. The Thirteen Provincial Commissions (*Buzhengshisi*): Shandong (157.301 km²), Shanxi (154.149 km²), Henan (170.313 km²), Shaanxi including Gansu and Ningxia (641.970 km²), Zhejiang (102.203 km²), Jiangxi (157.942 km²), Huguang encompassing modern Hubei and Hunan (394.245 km²), Fujian (123.700 km²), Guangdong including Hainan, Hong Kong and Macao (211.793 km²), Guangxi (237.233 km²), Sichuan including Chongqing (560.138 km²), Yunnan (391.153 km²), and Guizhou (191.526 km²).
3. The Five Frontier Regions: Liaodong Garrison and Jurchen Northeast (779.442 km²), Northern Yuan and Inner Mongolian Banners (1.171.885 km²), Xinjiang encompassing Moghulistan and Turpan (1.628.071 km²), Tibet and Qinghai encompassing Ü-Tsang, Kham and Amdo (1.848.435 km²), and Taiwan encompassing Indigenous Austronesian communities and late Ming coastal footholds (35.732 km²).

At each historical benchmark year $t \in \{1368, 1393, 1500, 1580, 1630, 1644\}$, total regional population $P_r(t)$ synthesises enumerated civil households $H_r(t)$, military garrison populations $M_r(t)$, and unrecorded fringe inhabitants $U_r(t)$:

$$P_r(t) = H_r(t) \cdot \mu_r(t) + M_r(t) + U_r(t)$$

where $\mu_r(t)$ denotes the empirically calibrated mean household multiplier for province $r$, derived from genealogical reconstructions and surviving fiscal records [@Cao2000Zhongguo; @Cao2024Population].

## Household Multipliers and Civil Roll Correction

Following the analytical framework of Cao Shuji, civil population figures in this study depart fundamentally from raw dynastic registers [@Cao2000Zhongguo; @Cao2024Population]. The official census of 1393AD recorded 60,55M people across the empire, but adjusting for 7,5M military personnel and dependents, correcting male-female sex ratios from the registered 125--150 to a demographically plausible 108--112, and incorporating unregistered young children yields a real empire-wide total of 75,66M (Table \ref{tab:validation-ming}) [@Cao2000Zhongguo; @Han2026Chinese].

For the mid-to-late Ming era, official tax returns fossilised completely [@Cao2000Zhongguo; @Ma2022Cambridge]. As local magistrates fixed tax quotas to prevent increasing obligations, the registered *ding* numbers ceased to reflect actual living heads [@Cao2024Population]. The Wanli fiscal survey of 1578AD to 1580AD reported only 60,69M registered people, an arithmetic impossibility given the widespread clearing of land, commercial town development and doubling of cultivated acreage across the sixteenth century [@Cao2000Zhongguo; @Ma2022Cambridge; @Zhao2017Relationship].

Cao Shuji's extensive examination of over 1.200 county gazetteers and regional tax registers reconstructs true provincial totals by tracking grain storage volumes, salt consumption quotas, clan size expansion in lineage genealogies, and localized demographic surveys conducted by reformist officials such as Hai Rui and Zhang Juzheng [@Cao2000Zhongguo; @Cao2024Population]. These adjustments demonstrate that China's population reached 119,26M by 1500AD, climbed to 163,12M by 1580AD, and attained an apex of 193,76M around 1630AD [@Cao2000Zhongguo; @Cao2024Population; @Ma2022Cambridge].

## Non-Stationary Kriging and Biophysical Covariates

Spatial population allocation within the twenty provincial units draws on the East Asian kriging domain, which aggregates 12.894 unique imperial-era sites and monuments (66.529 site-records across ten archaeological and historical horizons) across 1.274 domestic catchments (163.892 valid land cells) [@CHGIS2016v6; @Gao2026Using].

Residual spatial dependence is modelled with Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging [@paciorek2006spatial]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,50$ and $\tau_2 = 2,775$, with nugget-to-sill ratio 0,04 across all ten horizons (Table \ref{tab:kriging-ming}). The model incorporates five biophysical covariates: habitable land fraction, natural vegetative productivity index, ecozone terrain suitability, 13,5 km fluvial decay along major river channels (particularly the Yangtze, Yellow River and Grand Canal), and coastal proximity [@Geng2026Spatio; @Lee2022Population; @Zhao2026Policing]. High-density urban populations from 7.672 catalogued settlements (led by Beijing, Nanjing, Suzhou and Hangzhou) condition local settlement cores, with urban masks subtracted to preserve rural totals inside each territorial boundary [@Cao2000Zhongguo; @Gao2026Using].

# Testing and Validation

Arithmetic reconciliation confirms exact parity between the provincial totals presented here and the regional aggregates established by Cao Shuji (2000, 2024). Table \ref{tab:validation-ming} presents the longitudinal trajectory across all six benchmark years from 1368AD to 1644AD, decomposed into macro-regions.

<figure class="crd-table-figure" id="tab:validation-ming">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">North China</th><th class="crd-th">Yangtze Core</th><th class="crd-th">South and Southwest</th><th class="crd-th">Peripheries</th><th class="crd-th">Dynasty Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1368AD</strong></td><td class="crd-td">18M</td><td class="crd-td">35,7M</td><td class="crd-td">11,2M</td><td class="crd-td">4,18M</td><td class="crd-td">69,08M</td></tr>
<tr><td class="crd-td"><strong>1393AD</strong></td><td class="crd-td">20,42M</td><td class="crd-td">38,55M</td><td class="crd-td">12,32M</td><td class="crd-td">4,37M</td><td class="crd-td">75,66M</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">34,6M</td><td class="crd-td">60,8M</td><td class="crd-td">18,55M</td><td class="crd-td">5,31M</td><td class="crd-td">119,26M</td></tr>
<tr><td class="crd-td"><strong>1580AD</strong></td><td class="crd-td">50,89M</td><td class="crd-td">81,2M</td><td class="crd-td">24,78M</td><td class="crd-td">6,25M</td><td class="crd-td">163,12M</td></tr>
<tr><td class="crd-td"><strong>1630AD</strong></td><td class="crd-td">60,9M</td><td class="crd-td">96,1M</td><td class="crd-td">30M</td><td class="crd-td">6,76M</td><td class="crd-td">193,76M</td></tr>
<tr><td class="crd-td"><strong>1644AD</strong></td><td class="crd-td">41,2M</td><td class="crd-td">74,2M</td><td class="crd-td">25,7M</td><td class="crd-td">5,82M</td><td class="crd-td">146,92M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional demographic benchmarks across Ming China, 1368AD to 1644AD, harmonised from Cao Shuji (2000, 2024).</figcaption>
</figure>

Across all ten horizons in the East Asian kriging domain, Table \ref{tab:kriging-ming} documents tightly constrained Matérn variogram parameters. Residual $R^2$ exceeds 0,999 across all epochs, with regularised nugget-to-sill ratios fixed at 0,04 and effective short ranges spanning 71,85 km to 75,32 km.

<figure class="crd-table-figure" id="tab:kriging-ming">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Neolithic (before 5000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000005</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,0106</td><td class="crd-td">0,1177</td></tr>
<tr><td class="crd-td"><strong>2. Middle Neolithic Yangshao (5000BC to 3000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000025</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0471</td><td class="crd-td">0,7343</td></tr>
<tr><td class="crd-td"><strong>3. Late Neolithic Longshan (3000BC to 2000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,00004</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0722</td><td class="crd-td">1,0729</td></tr>
<tr><td class="crd-td"><strong>4. Bronze Age Shang and Western Zhou (2000BC to 771BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000066</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,1232</td><td class="crd-td">1,6294</td></tr>
<tr><td class="crd-td"><strong>5. Spring and Autumn and Warring States (771BC to 221BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000038</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,0654</td><td class="crd-td">0,9254</td></tr>
<tr><td class="crd-td"><strong>6. Qin, Han and Xiongnu Eras (221BC to 220AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,00001</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0214</td><td class="crd-td">0,2085</td></tr>
<tr><td class="crd-td"><strong>7. Wei, Jin and Northern and Southern Dynasties (220AD to 589AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000017</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0323</td><td class="crd-td">0,3491</td></tr>
<tr><td class="crd-td"><strong>8. Sui, Tang and Five Dynasties (589AD to 960AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000017</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0345</td><td class="crd-td">0,3384</td></tr>
<tr><td class="crd-td"><strong>9. Liao, Song, Jin and Yuan Dynasties (960AD to 1368AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000019</td><td class="crd-td">0,05</td><td class="crd-td">0,9991</td><td class="crd-td">0,0367</td><td class="crd-td">0,3187</td></tr>
<tr><td class="crd-td"><strong>10. Ming and Qing Imperial Eras (1368AD to 1911AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000032</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0879</td><td class="crd-td">0,706</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> East Asian kriging variogram diagnostics across ten chronological horizons (163.892 valid land cells, regularised tau1 = 1,5, tau2 = 2,775).</figcaption>
</figure>

Table \ref{tab:source-corpora-ming} details the component archaeological and historical registries aggregated into the East Asian kriging domain, highlighting the predominance of systematic archaeological survey data and CHGIS historical administrative time-series records.

<figure class="crd-table-figure" id="tab:source-corpora-ming">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hosner et al. PANGAEA East Asian Archaeological Compendium</strong></td><td class="crd-td">51.432</td><td class="crd-td">58,46%</td></tr>
<tr><td class="crd-td"><strong>National Cultural Heritage Administration Key Historical Sites</strong></td><td class="crd-td">4.063</td><td class="crd-td">4,62%</td></tr>
<tr><td class="crd-td"><strong>CHGIS Version 6 Administrative Time-Series Gazetteer</strong></td><td class="crd-td">12.651</td><td class="crd-td">14,38%</td></tr>
<tr><td class="crd-td"><strong>CHGIS Version 6 Prefectural and County Seat Base Register</strong></td><td class="crd-td">8.516</td><td class="crd-td">9,68%</td></tr>
<tr><td class="crd-td"><strong>Allen Ancient DNA Resource Archaeological Sites (AADR)</strong></td><td class="crd-td">739</td><td class="crd-td">0,84%</td></tr>
<tr><td class="crd-td"><strong>XRONOS Global Radiocarbon Chronological Synthesis</strong></td><td class="crd-td">1.446</td><td class="crd-td">1,64%</td></tr>
<tr><td class="crd-td"><strong>PEOPLE 3000 Global Radiocarbon Synthesis (2025)</strong></td><td class="crd-td">325</td><td class="crd-td">0,37%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">43</td><td class="crd-td">0,05%</td></tr>
<tr><td class="crd-td"><strong>Archaeological Atlas of China Excavation Gazetteers</strong></td><td class="crd-td">4.963</td><td class="crd-td">5,64%</td></tr>
<tr><td class="crd-td"><strong>Bureau of Cultural Heritage Historic Monuments Registry (Taiwan)</strong></td><td class="crd-td">1.286</td><td class="crd-td">1,46%</td></tr>
<tr><td class="crd-td"><strong>Tibetan Buddhist Resource Center Monastery Survey</strong></td><td class="crd-td">1.562</td><td class="crd-td">1,78%</td></tr>
<tr><td class="crd-td"><strong>Institute of Archaeology RAS Amur and Maritime Frontier Survey</strong></td><td class="crd-td">925</td><td class="crd-td">1,05%</td></tr>
<tr><td class="crd-td"><strong>Institute of History and Archaeology MAS Steppe Registry</strong></td><td class="crd-td">30</td><td class="crd-td">0,03%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Component archaeological, heritage and historical gazetteer registries aggregated into the East Asian kriging domain.</figcaption>
</figure>

# Results

## Early Ming Consolidation and Demographic Recovery (1368 to 1393AD)

Following the expulsion of the Mongol court to the northern steppes in 1368AD, China entered a phase of vigorous post-war demographic rehabilitation (Figure \ref{fig:traj-ming}). In 1368AD, imperial territory held approximately 69,08M people, heavily concentrated in the Yangtze Delta and southeastern provinces where agricultural infrastructure had suffered less complete disruption [@Cao2000Zhongguo; @Cao2024Population].

<figure class="crd-figure-block" id="fig:traj-ming">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-ming-dynasty/fig2_ming_dynasty_trajectory.png" alt="fig:traj-ming" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Ming Dynasty China from 1368AD to 1644AD across northern, southern and frontier provinces with historical uncertainty intervals.</figcaption>
</figure>

Over the twenty-five years of the Hongwu reign, peace, agricultural tax holidays, large-scale irrigation repairs and state-directed resettlements spurred rapid natural increase [@Cao2000Zhongguo; @Zhao2017Relationship]. By 1393AD, population had risen by 9,5% to 75,66M (Table \ref{tab:regions-ming}). Nanzhili formed the demographic anchor of the early empire with 13,2M residents (17,4% of the imperial total), followed by Zhejiang (9,4M), Jiangxi (7,55M), Shandong (6,04M), Huguang (5,55M) and Shanxi (4,48M) [@Cao2000Zhongguo; @Cao2024Population].

In North China, intensive colonisation from Shanxi lifted Shandong from 5,3M to 6,04M and Henan from 3,4M to 3,96M [@Cao2000Zhongguo; @Bu2025Climate]. In the south, the pacification of Yunnan and Guizhou brought 2,8M people under imperial administrative supervision, reinforced by 400k military colonists who cleared terraced fields and built walled garrison towns along the post roads connecting Guiyang, Kunming and Dali [@Cao2000Zhongguo; @Robinson2025Military].

## Mid-Ming Expansion and the Sixteenth-Century Climacteric (1393 to 1580AD)

Between 1393AD and 1580AD, China experienced nearly two centuries of sustained demographic and economic expansion, growing by 115,6% from 75,66M to 163,12M (Table \ref{tab:regions-ming}) [@Cao2000Zhongguo; @Cao2024Population; @Ma2022Cambridge].

<figure class="crd-figure-block" id="fig:shares-ming">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-ming-dynasty/fig3_ming_dynasty_shares.png" alt="fig:shares-ming" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Provincial population shares and comparative peak versus 1644AD terminal totals across the twenty Ming territories.</figcaption>
</figure>

Several structural innovations underpinned this expansion. First, the introduction of American crops during the sixteenth century---notably the sweet potato (*fanmu*), maize (*yumi*) and peanut (*luohuashan*)---enabled peasant cultivators to farm previously marginal uplands across the rugged interior of Fujian, Jiangxi, Huguang and Sichuan [@Ma2022Cambridge; @Chen2025Environmental]. Second, the rehabilitation and expansion of the Grand Canal after the transfer of the primary capital to Beijing in 1421AD created an integrated commercial artery connecting the surplus grain of Jiangnan to the urban and military markets of the North China Plain [@Ye2019Grand; @Wang2025Grand; @Lee2022Population].

Third, the Single Whip Reform (*yitiao bianfa*), initiated in the mid-sixteenth century and institutionalised nationally under Grand Academician Zhang Juzheng in the 1570s, converted labour services and grain levies into silver payments [@Ma2022Cambridge; @Ni2020China]. This monetisation was lubricated by massive inflows of Spanish American and Japanese silver through coastal ports in Fujian (Yuegang) and Guangdong (Macao and Guangzhou), transforming traditional peasant farming into commercial agriculture oriented toward cotton, raw silk, tea and tobacco production [@Ma2022Cambridge; @Vries2013Crisis].

By 1580AD, Nanzhili had reached 28,6M, Zhejiang 17,4M, Jiangxi 13,6M and Huguang 13,5M [@Cao2000Zhongguo; @Cao2024Population]. In North China, Henan surged from 3,96M to 12,2M, Shandong climbed from 6,04M to 13,07M, and Beizhili nearly tripled from 2,94M to 8,61M, driven by the massive grain demand and commercial attraction of the imperial capital at Beijing [@Cao2000Zhongguo; @Cao2024Population].

<figure class="crd-table-figure" id="tab:regions-ming">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">1368AD</th><th class="crd-th">1393AD</th><th class="crd-th">1500AD</th><th class="crd-th">1580AD</th><th class="crd-th">1630AD</th><th class="crd-th">1644AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Beizhili (Beiping Metropolitan)</strong></td><td class="crd-td">205.823</td><td class="crd-td">2,5M</td><td class="crd-td">2,94M</td><td class="crd-td">5,5M</td><td class="crd-td">8,61M</td><td class="crd-td">10,5M</td><td class="crd-td">7,8M</td></tr>
<tr><td class="crd-td"><strong>2. Nanzhili (Nanjing Metropolitan: Jiangsu and Anhui)</strong></td><td class="crd-td">226.168</td><td class="crd-td">12,2M</td><td class="crd-td">13,2M</td><td class="crd-td">21,5M</td><td class="crd-td">28,6M</td><td class="crd-td">33,5M</td><td class="crd-td">26,8M</td></tr>
<tr><td class="crd-td"><strong>3. Shandong Province</strong></td><td class="crd-td">157.301</td><td class="crd-td">5,3M</td><td class="crd-td">6,04M</td><td class="crd-td">9,4M</td><td class="crd-td">13,07M</td><td class="crd-td">15,8M</td><td class="crd-td">11,2M</td></tr>
<tr><td class="crd-td"><strong>4. Shanxi Province</strong></td><td class="crd-td">154.149</td><td class="crd-td">4,1M</td><td class="crd-td">4,48M</td><td class="crd-td">6,6M</td><td class="crd-td">8,75M</td><td class="crd-td">10,2M</td><td class="crd-td">7,2M</td></tr>
<tr><td class="crd-td"><strong>5. Henan Province</strong></td><td class="crd-td">170.313</td><td class="crd-td">3,4M</td><td class="crd-td">3,96M</td><td class="crd-td">7,6M</td><td class="crd-td">12,2M</td><td class="crd-td">14,6M</td><td class="crd-td">8,6M</td></tr>
<tr><td class="crd-td"><strong>6. Shaanxi Province (incl. Gansu and Ningxia)</strong></td><td class="crd-td">641.970</td><td class="crd-td">2,7M</td><td class="crd-td">3M</td><td class="crd-td">5,5M</td><td class="crd-td">8,27M</td><td class="crd-td">9,8M</td><td class="crd-td">6,4M</td></tr>
<tr><td class="crd-td"><strong>7. Zhejiang Province</strong></td><td class="crd-td">102.203</td><td class="crd-td">8,8M</td><td class="crd-td">9,4M</td><td class="crd-td">13,8M</td><td class="crd-td">17,4M</td><td class="crd-td">20,4M</td><td class="crd-td">17,2M</td></tr>
<tr><td class="crd-td"><strong>8. Jiangxi Province</strong></td><td class="crd-td">157.942</td><td class="crd-td">7,1M</td><td class="crd-td">7,55M</td><td class="crd-td">10,9M</td><td class="crd-td">13,6M</td><td class="crd-td">15,8M</td><td class="crd-td">12,6M</td></tr>
<tr><td class="crd-td"><strong>9. Huguang Province (Hubei and Hunan)</strong></td><td class="crd-td">394.245</td><td class="crd-td">5,1M</td><td class="crd-td">5,55M</td><td class="crd-td">9,2M</td><td class="crd-td">13,5M</td><td class="crd-td">16,8M</td><td class="crd-td">13,1M</td></tr>
<tr><td class="crd-td"><strong>10. Fujian Province</strong></td><td class="crd-td">123.700</td><td class="crd-td">3,5M</td><td class="crd-td">3,82M</td><td class="crd-td">5,6M</td><td class="crd-td">7,4M</td><td class="crd-td">8,8M</td><td class="crd-td">7,5M</td></tr>
<tr><td class="crd-td"><strong>11. Guangdong Province (incl. Hainan, HK and Macao)</strong></td><td class="crd-td">211.793</td><td class="crd-td">3,3M</td><td class="crd-td">3,65M</td><td class="crd-td">5,9M</td><td class="crd-td">8,2M</td><td class="crd-td">10,2M</td><td class="crd-td">8,6M</td></tr>
<tr><td class="crd-td"><strong>12. Guangxi Province</strong></td><td class="crd-td">237.233</td><td class="crd-td">1,9M</td><td class="crd-td">2,05M</td><td class="crd-td">3M</td><td class="crd-td">3,9M</td><td class="crd-td">4,7M</td><td class="crd-td">4,1M</td></tr>
<tr><td class="crd-td"><strong>13. Sichuan Province (incl. Chongqing)</strong></td><td class="crd-td">560.138</td><td class="crd-td">2,5M</td><td class="crd-td">2,85M</td><td class="crd-td">5,4M</td><td class="crd-td">8,1M</td><td class="crd-td">9,6M</td><td class="crd-td">4,5M</td></tr>
<tr><td class="crd-td"><strong>14. Yunnan Province</strong></td><td class="crd-td">391.153</td><td class="crd-td">1,6M</td><td class="crd-td">1,78M</td><td class="crd-td">2,55M</td><td class="crd-td">3,3M</td><td class="crd-td">3,9M</td><td class="crd-td">3,4M</td></tr>
<tr><td class="crd-td"><strong>15. Guizhou Province</strong></td><td class="crd-td">191.526</td><td class="crd-td">900k</td><td class="crd-td">1,02M</td><td class="crd-td">1,5M</td><td class="crd-td">1,98M</td><td class="crd-td">2,4M</td><td class="crd-td">2,1M</td></tr>
<tr><td class="crd-td"><strong>16. Liaodong Garrison and Jurchen Northeast</strong></td><td class="crd-td">779.442</td><td class="crd-td">1,4M</td><td class="crd-td">1,55M</td><td class="crd-td">2,2M</td><td class="crd-td">2,85M</td><td class="crd-td">3,1M</td><td class="crd-td">2,2M</td></tr>
<tr><td class="crd-td"><strong>17. Northern Yuan and Inner Mongolian Banners</strong></td><td class="crd-td">1.171.885</td><td class="crd-td">850k</td><td class="crd-td">800k</td><td class="crd-td">880k</td><td class="crd-td">950k</td><td class="crd-td">1,02M</td><td class="crd-td">980k</td></tr>
<tr><td class="crd-td"><strong>18. Xinjiang (Moghulistan and Turpan)</strong></td><td class="crd-td">1.628.071</td><td class="crd-td">650k</td><td class="crd-td">680k</td><td class="crd-td">760k</td><td class="crd-td">850k</td><td class="crd-td">920k</td><td class="crd-td">900k</td></tr>
<tr><td class="crd-td"><strong>19. Tibet and Qinghai (Ü-Tsang, Kham and Amdo)</strong></td><td class="crd-td">1.848.435</td><td class="crd-td">1,1M</td><td class="crd-td">1,15M</td><td class="crd-td">1,25M</td><td class="crd-td">1,35M</td><td class="crd-td">1,42M</td><td class="crd-td">1,4M</td></tr>
<tr><td class="crd-td"><strong>20. Taiwan (Austronesian and Late Ming Coastal Frontier)</strong></td><td class="crd-td">35.732</td><td class="crd-td">180k</td><td class="crd-td">190k</td><td class="crd-td">220k</td><td class="crd-td">250k</td><td class="crd-td">300k</td><td class="crd-td">340k</td></tr>
<tr><td class="crd-td"><strong>Dynasty Total</strong></td><td class="crd-td">9.389.222</td><td class="crd-td">69,08M</td><td class="crd-td">75,66M</td><td class="crd-td">119,26M</td><td class="crd-td">163,12M</td><td class="crd-td">193,76M</td><td class="crd-td">146,92M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Provincial population benchmarks across twenty Ming territories, 1368AD to 1644AD, calculated from regional JSON registers.</figcaption>
</figure>

## The Late Ming Demographic Apex (1580 to 1630AD)

Between 1580AD and 1630AD, population growth decelerated under mounting ecological and social constraints but nonetheless attained the highest demographic level in Chinese history prior to the eighteenth century (Table \ref{tab:regions-ming}) [@Cao2000Zhongguo; @Cao2024Population]. Empire-wide population expanded by 18,8% over these fifty years, reaching an apex of 193,76M in 1630AD [@Cao2000Zhongguo; @Cao2024Population].

By 1630AD, Nanzhili reached 33,5M people, exhibiting average densities of 148,1 persons per km² across its entire territory and over 350 persons per km² across the core prefectures of Suzhou, Songjiang and Changzhou [@Cao2000Zhongguo; @Cao2024Population]. Zhejiang attained 20,4M (199,6 persons per km²), Huguang climbed to 16,8M, Jiangxi reached 15,8M, and Shandong expanded to 15,8M [@Cao2000Zhongguo; @Cao2024Population].

In the southwest and west, Sichuan recovered from earlier rebellions to reach 9,6M, Guangdong grew to 10,2M, and Shaanxi (including Gansu) expanded to 9,8M [@Cao2000Zhongguo; @Cao2024Population]. However, this unprecedented human density placed society in acute vulnerability to environmental perturbation: marginal hill slopes suffered severe soil erosion, grain reserves became dependent on complex canal transport, and the state's fiscal apparatus was strained by escalating military expenditures on the northeastern frontier against the rising Jurchen (Manchu) Jin state [@Cao2000Zhongguo; @Parker2019Introduction; @Vries2013Crisis].

## Little Ice Age Mortality and the Dynastic Cataclysm (1630 to 1644AD)

The fourteen years between 1630AD and 1644AD witnessed one of the most violent demographic collapses in world history (Figure \ref{fig:traj-ming}) [@Cao2000Zhongguo; @Lee2012Tale; @Strange2021Crisis]. Between 1630AD and 1644AD, total population plunged by 46,84M (-24,2%), falling from 193,76M to 146,92M (Table \ref{tab:regions-ming}) [@Cao2000Zhongguo; @Cao2024Population].

The proximate driver of this catastrophe was the confluence of extreme climatic anomalies during the coldest phase of the Little Ice Age [@Parker2019Introduction; @Sun2025Impact; @Cho2014Little]. Tree-ring and historical speleothem reconstructions document that the late Chongzhen era (1637AD to 1643AD) experienced the most severe megadrought in northern and central China over the entire second millennium [@Lee2009Temperature; @Fan2014Climate; @Pei2016Temperature]. The drought initiated in northern Shaanxi and Shanxi in 1628AD, spread across Henan, Shandong and Beizhili by 1638AD, and engulfed the Huai River basin and Jiangnan by 1640AD [@Tian2025Enhancement; @Gao2025Emergence].

Famine triggered unprecedented locust swarms and virulent epidemics [@Zhang2021Spatiotemporal; @Fan2014Climate]. In 1641AD to 1643AD, bubonic plague (*diyi*) swept through Shanxi, Henan, Hebei and the capital city of Beijing, killing an estimated 20% to 40% of the urban and rural population [@Cao2000Zhongguo; @Gao2025Emergence]. Starving peasants joined the rebel confederacies of Li Zicheng and Zhang Xianzhong, who sacked Luoyang, Kaifeng (drowned in 1642AD when the Yellow River dikes were cut, killing over 200k residents) and Chengdu [@Cao2000Zhongguo; @Huang2021Rise; @Strange2021Crisis].

Regional mortality varied sharply by geography (Table \ref{tab:regions-ming}):
- Henan collapsed by 41,1%, falling from 14,6M in 1630AD to 8,6M in 1644AD.
- Shaanxi contracted by 34,7%, from 9,8M to 6,4M.
- Shanxi fell by 29,4%, from 10,2M to 7,2M.
- Beizhili dropped by 25,7%, from 10,5M to 7,8M.
- Shandong declined by 29,1%, from 15,8M to 11,2M.
- Sichuan suffered immense slaughter and famine under Zhang Xianzhong's Great Western Kingdom, losing 53,1% of its inhabitants from 9,6M to 4,5M.
- In contrast, southeastern coastal provinces with maritime trade and diversified agro-ecological regimes suffered comparatively lighter losses: Zhejiang fell by 15,7% (20,4M to 17,2M), Guangdong by 15,7% (10,2M to 8,6M), and Fujian by 14,8% (8,8M to 7,5M) [@Cao2000Zhongguo; @Cao2024Population].

## Provincial Trajectories and Regional Disparities

### Northern Frontier and the Capital Region

The northern macro-region (Beizhili, Shandong, Shanxi, Henan and Shaanxi, covering 1.329.556 km²) grew from 19M in 1368AD (27,5% of the empire) to 60,9M in 1630AD (31,4%), before crashing to 41,2M in 1644AD (Table \ref{tab:density-ming}) [@Cao2000Zhongguo].

<figure class="crd-table-figure" id="tab:density-ming">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Sites</th><th class="crd-th">1393AD</th><th class="crd-th">1630AD</th><th class="crd-th">1630AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Beizhili (Beiping Metropolitan)</strong></td><td class="crd-td">556</td><td class="crd-td">2,94M</td><td class="crd-td">10,5M</td><td class="crd-td">51</td></tr>
<tr><td class="crd-td"><strong>2. Nanzhili (Nanjing Metropolitan: Jiangsu and Anhui)</strong></td><td class="crd-td">758</td><td class="crd-td">13,2M</td><td class="crd-td">33,5M</td><td class="crd-td">148,1</td></tr>
<tr><td class="crd-td"><strong>3. Shandong Province</strong></td><td class="crd-td">406</td><td class="crd-td">6,04M</td><td class="crd-td">15,8M</td><td class="crd-td">100,4</td></tr>
<tr><td class="crd-td"><strong>4. Shanxi Province</strong></td><td class="crd-td">508</td><td class="crd-td">4,48M</td><td class="crd-td">10,2M</td><td class="crd-td">66,2</td></tr>
<tr><td class="crd-td"><strong>5. Henan Province</strong></td><td class="crd-td">422</td><td class="crd-td">3,96M</td><td class="crd-td">14,6M</td><td class="crd-td">85,7</td></tr>
<tr><td class="crd-td"><strong>6. Shaanxi Province (incl. Gansu and Ningxia)</strong></td><td class="crd-td">823</td><td class="crd-td">3M</td><td class="crd-td">9,8M</td><td class="crd-td">15,3</td></tr>
<tr><td class="crd-td"><strong>7. Zhejiang Province</strong></td><td class="crd-td">316</td><td class="crd-td">9,4M</td><td class="crd-td">20,4M</td><td class="crd-td">199,6</td></tr>
<tr><td class="crd-td"><strong>8. Jiangxi Province</strong></td><td class="crd-td">261</td><td class="crd-td">7,55M</td><td class="crd-td">15,8M</td><td class="crd-td">100</td></tr>
<tr><td class="crd-td"><strong>9. Huguang Province (Hubei and Hunan)</strong></td><td class="crd-td">667</td><td class="crd-td">5,55M</td><td class="crd-td">16,8M</td><td class="crd-td">42,6</td></tr>
<tr><td class="crd-td"><strong>10. Fujian Province</strong></td><td class="crd-td">211</td><td class="crd-td">3,82M</td><td class="crd-td">8,8M</td><td class="crd-td">71,1</td></tr>
<tr><td class="crd-td"><strong>11. Guangdong Province (incl. Hainan, HK and Macao)</strong></td><td class="crd-td">269</td><td class="crd-td">3,65M</td><td class="crd-td">10,2M</td><td class="crd-td">48,2</td></tr>
<tr><td class="crd-td"><strong>12. Guangxi Province</strong></td><td class="crd-td">316</td><td class="crd-td">2,05M</td><td class="crd-td">4,7M</td><td class="crd-td">19,8</td></tr>
<tr><td class="crd-td"><strong>13. Sichuan Province (incl. Chongqing)</strong></td><td class="crd-td">833</td><td class="crd-td">2,85M</td><td class="crd-td">9,6M</td><td class="crd-td">17,1</td></tr>
<tr><td class="crd-td"><strong>14. Yunnan Province</strong></td><td class="crd-td">338</td><td class="crd-td">1,78M</td><td class="crd-td">3,9M</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>15. Guizhou Province</strong></td><td class="crd-td">357</td><td class="crd-td">1,02M</td><td class="crd-td">2,4M</td><td class="crd-td">12,5</td></tr>
<tr><td class="crd-td"><strong>16. Liaodong Garrison and Jurchen Northeast</strong></td><td class="crd-td">216</td><td class="crd-td">1,55M</td><td class="crd-td">3,1M</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>17. Northern Yuan and Inner Mongolian Banners</strong></td><td class="crd-td">61</td><td class="crd-td">800k</td><td class="crd-td">1,02M</td><td class="crd-td">0,9</td></tr>
<tr><td class="crd-td"><strong>18. Xinjiang (Moghulistan and Turpan)</strong></td><td class="crd-td">13</td><td class="crd-td">680k</td><td class="crd-td">920k</td><td class="crd-td">0,6</td></tr>
<tr><td class="crd-td"><strong>19. Tibet and Qinghai (Ü-Tsang, Kham and Amdo)</strong></td><td class="crd-td">337</td><td class="crd-td">1,15M</td><td class="crd-td">1,42M</td><td class="crd-td">0,8</td></tr>
<tr><td class="crd-td"><strong>20. Taiwan (Austronesian and Late Ming Coastal Frontier)</strong></td><td class="crd-td">4</td><td class="crd-td">190k</td><td class="crd-td">300k</td><td class="crd-td">8,4</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements, 1393AD and 1630AD population benchmarks, and peak 1630AD density (persons per km²).</figcaption>
</figure>

Beizhili's growth was driven by the political requirements of the northern capital [@Cao2000Zhongguo; @Gao2026Using]. Following the Yongle Emperor's official relocation in 1421AD, Beijing evolved into a mega-city requiring an annual tribute grain delivery (*caoyun*) of 3,5M to 4M *shi* (approximately 300k to 350k metric tons) shipped northward via the Grand Canal [@Ye2019Grand; @Wang2025Grand; @Li2014Grain]. Around the capital, garrison towns along the Great Wall (Juyongguan, Shanhaiguan, Miyun, Xuanhua) supported dense military populations that guarded the frontier passes [@Cao2000Zhongguo; @Robinson2025Military].

### The Jiangnan Core and Lower Yangtze Basin

Nanzhili, Zhejiang and Jiangxi (encompassing 486.313 km²) formed the economic, financial and demographic heartland of the Ming empire [@Cao2000Zhongguo; @Ma2022Cambridge; @Gao2026Using]. Together, they expanded from 28,1M in 1368AD to 69,7M in 1630AD, sustaining the densest rural populations and highest urbanisation ratios in Asia [@Cao2000Zhongguo; @Cao2024Population].

Jiangnan proper (the prefectures of Suzhou, Songjiang, Changzhou, Zhenjiang, Hangzhou, Jiaxing and Huzhou) established a highly commercialised proto-industrial economy [@Ma2022Cambridge; @Liu2022Spatial]. Rural households specialized in sericulture, cotton spinning and silk weaving, purchasing grain imported from Huguang and Jiangxi via the Yangtze River [@Ma2022Cambridge; @Zhao2017Relationship]. In Suzhou prefecture, over 60% of rural household income derived from textile handicrafts by the late sixteenth century, supporting luxury urban consumption in garden residences, private publishing and theatre [@Lee2006Status; @Fan2019Discussion; @Clifford2017Selector].

### The Middle and Upper Yangtze Interior

Huguang (Hubei and Hunan, 394.245 km²) and Sichuan (560.138 km²) served as China's agricultural frontier and regional grain basket during the mid-to-late Ming [@Cao2000Zhongguo; @Ma2022Cambridge]. As population pressure mounted in Jiangnan, millions of peasant migrants moved westward along the Yangtze into the fertile Jianghan Plain and Dongting Lake basin, giving rise to the popular proverb: *Huguang shu, tianxia zu* ('When Huguang harvests, the empire is filled') [@Cao2000Zhongguo; @Ma2022Cambridge].

Huguang expanded from 5,1M in 1368AD to 16,8M in 1630AD, while Sichuan grew from 2,5M to 9,6M [@Cao2000Zhongguo; @Cao2024Population]. Grain fleets loaded with rice at Wuhan and Yuezhou navigated downriver to supply the deficit regions of Nanzhili and Zhejiang [@Ma2022Cambridge; @Li2014Grain]. However, late Ming warfare fell with catastrophic ferocity upon Sichuan: the campaigns of Zhang Xianzhong and subsequent Qing pacification depopulated entire valleys, setting the stage for the massive *Huguang tian Sichuan* repopulation waves of the early Qing [@Cao2000Zhongguo; @Cao2024Population].

### The Southern and South-Western Frontiers

The southern maritime and southwestern provinces (Fujian, Guangdong, Guangxi, Yunnan and Guizhou, covering 1.055.405 km²) expanded from 11,2M in 1368AD to 30M in 1630AD (Table \ref{tab:regions-ming}) [@Cao2000Zhongguo].

Fujian (8,8M in 1630AD) and Guangdong (10,2M in 1630AD) leveraged maritime commerce across the South China Sea, exporting porcelain, silk and tea in exchange for foreign silver [@Ma2022Cambridge; @Vries2013Crisis]. In Yunnan (3,9M) and Guizhou (2,4M), the Ming state pursued gradual administrative integration through the native chieftain system (*tusi*), interspersed with periodic military subjugation and Han military-agrarian settlements that extracted silver and tin for imperial mints [@Wang2026Centuries; @Robinson2025Military].

### Steppe, Forest and Mountain Peripheries

Beyond the core provinces, the imperial peripheries (Liaodong, Inner Mongolia, Xinjiang, Tibet-Qinghai and Taiwan, covering 5.463.565 km²) sustained smaller, predominantly non-Han populations that interacted dynamically with the Ming state [@Cao2000Zhongguo; @Schlesinger2012Qing].

Liaodong grew from 1,4M in 1368AD to 3,1M in 1630AD around the military headquarters of Liaoyang and Shenyang, before Nurhaci unified the Jurchen tribes into the Eight Banners, conquering Liaodong between 1618AD and 1621AD [@Cao2000Zhongguo; @Sun2025Impact]. In Inner Mongolia, the pastoral confederacies of the Northern Yuan fluctuated between 800k and 1,02M [@Bu2025Climate]. Xinjiang's oasis polities (Turpan, Hami, Kashgar) supported 650k to 920k, while the monastic networks of Tibet and Qinghai maintained a stable pastoral and highland barley economy of 1,1M to 1,42M [@CHGIS2016v6].

## Urban Hierarchy and Commercial Network

The demographic expansion of the Ming era fostered a sophisticated four-tiered urban hierarchy (Figure \ref{fig:sett-ming}) [@Cao2000Zhongguo; @Ma2022Cambridge; @Gao2026Using]. Across the 7.672 settlements catalogued in this study, total urban inhabitants living in cities exceeding 10k population expanded from 4,8M in 1393AD to over 14,5M by 1630AD, representing an urbanisation ratio of approximately 7,5% [@Cao2000Zhongguo; @Cao2024Population].

<figure class="crd-figure-block" id="fig:sett-ming">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-ming-dynasty/fig4_ming_dynasty_settlements.png" alt="fig:sett-ming" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading fifteen prefectural and county urban centres across Ming China.</figcaption>
</figure>

At the apex of the hierarchy stood the twin imperial capitals [@Cao2000Zhongguo]:
1. Beijing: Serving as the primary political and military capital after 1421AD, Beijing expanded from 153k in 1393AD to 1M in 1580AD and attained a peak of 1,05M in 1630AD, encompassing the walled Inner City, the Outer City constructed in 1553AD, the imperial palace complex, and vast suburban settlements of bannermen, merchants and artisans [@Cao2000Zhongguo; @Cao2024Population; @Gao2026Using].
2. Nanjing: Retaining its auxiliary capital status with a complete imperial court bureaucracy, Nanjing was the cultural and administrative hub of the south, sustaining 700k residents at its seventeenth-century peak within the longest city wall system in the world (33,7 km) [@Cao2000Zhongguo; @Cao2024Population].

The second tier comprised the great commercial and manufacturing metropolises of Jiangnan and the coast [@Cao2000Zhongguo; @Ma2022Cambridge]:
3. Suzhou: The commercial and handicraft capital of the empire, boasting 650k residents in 1630AD, centered on silk textiles, publishing, jade carving, finance and grain transshipment [@Cao2000Zhongguo; @Gao2026Using; @Lee2006Status].
4. Hangzhou: The southern terminus of the Grand Canal and provincial capital of Zhejiang, with 520k residents supported by silk manufacturing and coastal trade [@Cao2000Zhongguo; @Ye2019Grand].
5. Guangzhou: The principal maritime foreign trade gateway, reaching 320k residents in 1630AD [@Cao2000Zhongguo; @Ma2022Cambridge].

The third tier consisted of specialized manufacturing centres, river ports and provincial capitals ranging between 200k and 350k inhabitants: Huaiqing in Henan (350k), Jiaxing in Zhejiang (350k), Linjiang in Jiangxi (350k), Xu in Nanzhili (350k), Kaifeng in Henan (240k), Yangzhou at the junction of the Grand Canal and Yangtze (240k), Xi'an in Shaanxi (220k), Chengdu in Sichuan (220k), Wuhan (Wuchang-Hankou) in Huguang (210k), and Nanchang in Jiangxi (210k) [@Cao2000Zhongguo; @Quan2024City; @Huang2021Rise].

Below these major cities, over 1.600 prefectural (*fu*), sub-prefectural (*zhou*) and county (*xian*) seats formed a continuous administrative network with median populations of 8k to 25k, flanked by thousands of emerging market towns (*zhen*) that mediated rural-urban exchange across the empire [@Cao2000Zhongguo; @Gao2026Using; @Liu2025Analysis].

# Limitations

Three analytical constraints govern precision in this Ming reconstruction. First, the progressive deterioration of official *Hubu* registration after 1450AD means that mid-to-late Ming provincial estimates rely on demographic modeling, genealogical sample expansions and gazetteer calibrations rather than decennial headcounts [@Cao2000Zhongguo; @Cao2024Population; @Han2026Chinese]. While cross-checked against tax grain quotas and salt distribution licenses, provincial figures carry an estimated uncertainty interval of $\pm 8\%$ to $\pm 14\%$ during the 1500AD to 1630AD era [@Cao2000Zhongguo; @Cao2024Population].

Second, surviving local gazetteers and lineage genealogies are unevenly distributed across China [@Zurndorfer1988Guide]. Jiangnan, Zhejiang, Fujian and Jiangxi preserve thousands of detailed local records, whereas war-torn Henan, Shaanxi and Sichuan suffered extensive library destruction during the seventeenth-century conflicts [@Cao2000Zhongguo; @Strange2021Crisis]. Kriging interpolation with biophysical covariates mitigates this documentation gap but cannot entirely replace localized primary parish returns [@paciorek2006spatial].

Third, pastoral nomadic populations across Inner Mongolia, Xinjiang and Tibet were documented through military intelligence and tribute missions rather than cadastral rolls [@Schlesinger2012Qing]. Their demographic estimates reflect tribal banner strength multipliers and carrying-capacity models rather than household registration [@Cao2000Zhongguo; @Bu2025Climate].

# Conclusion

Between 1368AD and 1644AD, Ming China underwent an extraordinary demographic cycle of recovery, sustained expansion and systemic crisis. Under the early administrative architecture of the Hongwu Emperor, universal household registration through the Yellow Registers, the military garrison system and state-directed resettlement rehabilitated a devastated landscape, lifting population from 69,08M in 1368AD to 75,66M in 1393AD.

Over the succeeding two centuries, the introduction of American crops, the restoration of the Grand Canal, commercial silver monetization and Jiangnan proto-industrialisation propelled imperial population to a peak of 193,76M in 1630AD, anchored by a sophisticated urban hierarchy led by Beijing (1,05M), Nanjing (700k), Suzhou (650k) and Hangzhou (520k).

The subsequent collapse to 146,92M in 1644AD illustrates the vulnerability of pre-industrial demographic regimes to the combined pressures of Little Ice Age climatic extremes, epidemic disease, fiscal exhaustion and state breakdown. Integrating the provincial reconstructions of Cao Shuji with Paciorek-Schervish non-stationary kriging across 1.274 catchments and 7.672 settlements provides an empirical baseline for the economic and demographic transition into the Qing dynasty.

# Sources

<div id="refs"></div>
