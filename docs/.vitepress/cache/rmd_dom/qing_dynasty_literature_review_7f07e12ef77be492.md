---
title: "China During the Qing Dynasty"
subtitle: "JADE: Imperial Expansion, Baojia Registration, Internal Migration and Crises, 1644AD to 1911AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: qing_dynasty_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_qing_dynasty_spatial.png"
hero_caption: "Sub-regional areal mask and 1.852 catalogued settlements across 25 provinces and borderlands of Qing China from 1644AD to 1911AD."
hero_label: "fig:hero-qing-dynasty"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the demographic trajectory and spatial distribution of population across China during the Qing Dynasty from the Manchu conquest in 1644AD to the abdication of the Xuanthong Emperor in 1911AD. Dividing an imperial territory of 9.389.222 km² (137.431 five-arcminute grid cells) into 25 historical provincial and frontier masks, the analysis synthesises official dynastic cadastres, the 1820AD benchmark of the China Historical Geographic Information System (CHGIS Version 6), county gazetteers, and the demographic reconstructions of Cao Shuji and Hou Yangfang [@cao2001zhongguo; @cao2024population; @chgis2016v6; @Xu2015Urbanization]. Total population recovered from seventeenth-century post-Ming warfare and the Three Feudatories conflict, rising from 146,9M in 1644AD and 151,1M in 1680AD to 297,1M in 1776AD, 387,2M in 1820AD and an imperial peak of 443,6M in 1851AD [@cao2001zhongguo; @ho1959studies; @lee1999one]. This eighteenth-century expansion was catalysed by the 1712AD Kangxi tax freeze and Yongzheng fiscal integration (tanding rudi), the nationwide baojia registration reform instituted under Qianlong from 1741AD, the widespread adoption of American food crops, and extensive internal migration, most prominently Huguang tian Sichuan [@perkins1969agricultural; @Ni2020China]. Between 1851AD and 1880AD, the Taiping Rebellion across the Lower Yangtze, the Northwestern Muslim rebellions, and the North China Dingwu Famine plunged imperial numbers to 356,9M, destroying 86,7M lives (-19,5%) before late nineteenth-century treaty-port industrialisation and northern migration lifted totals to 416,6M in 1910AD and 418,8M in 1911AD [@cao2001zhongguo; @Lee2012Tale; @mavinglahn2022cambridge]. Non-stationary Paciorek-Schervish Matérn ($\nu = 3/2$) kriging across 88.000+ site records and 1.274 catchments regularises sub-regional densities alongside 1.852 catalogued urban settlements [@paciorek2006spatial].

# Background

## Dynastic Transition, Depopulation and Early Consolidation (1644 to 1680AD)

The establishment of the Qing Dynasty occurred amid extraordinary demographic devastation. The collapse of the late Ming administration during the 1630s and 1640s was accompanied by catastrophic peasant uprisings led by Li Zicheng and Zhang Xianzhong, widespread famine, epidemics and the Manchu crossing of Shanhai Pass in 1644AD [@cao2001zhongguo; @ho1959studies; @Gao2025Emergence]. In Sichuan, Zhang Xianzhong's Great Western regime and subsequent military campaigns decimated the resident population, reducing the province from over 8M in late Ming times to an estimated 4,5M in 1644AD and a nadir of 3,2M in 1680AD [@cao2001zhongguo; @cao2024population].

Across northern China, military devastation along the Grand Canal corridor and loess plateaus depressed agricultural output, while in the south, protracted resistance by Southern Ming loyalists and the maritime regime of Zheng Chenggong (Koxinga) led to draconian coastal evacuation decrees (qianhai ling) between 1661AD and 1669AD, displacing millions of villagers in Guangdong, Fujian and Zhejiang [@cao2001zhongguo; @perkins1969agricultural]. The coastal boundary was cleared inland by thirty to fifty li, burning villages and fields to deny supplies to maritime resistance forces.

The Revolt of the Three Feudatories (1673AD to 1681AD) prolonged military conflict across Yunnan, Guizhou, Hunan, Jiangxi and Fujian before the Kangxi Emperor unified the realm. The rebel forces of Wu Sangui and his allies contested imperial control through scorched-earth warfare that devastated central and southwestern river basins. At the conclusion of this foundational period in 1680AD, imperial population stood at 151,1M, barely above the late Ming benchmark [@cao2001zhongguo; @ho1959studies].

## Kangxi Fiscal Reforms and the Qianlong Baojia Revolution

The institutional foundation of Qing demographic expansion was laid through two fiscal and administrative reforms that fundamentally altered imperial registration [@cao2001zhongguo; @ho1959studies; @Ni2020China]. Under the early Qing fiscal system inherited from the Ming Yellow Registers (huangce), local magistrates levied taxes on ding (fiscal adult males aged sixteen to sixty) rather than actual household residents (kou). Consequently, commoner lineages systematically concealed births, elderly relatives and female dependants to avoid escalating labour-service and head-tax liabilities [@ho1959studies; @Hu2020Micro; @Xue2025Crowd].

In 1712AD, the Kangxi Emperor promulgated his historic decree freezing the imperial poll tax quota (shengshi zisun yongbu jiafu, or prosperous age progeny forever free of additional tax) based on the recorded ding total of 24.621.324 in 1711AD [@ho1959studies; @cao2001zhongguo]. This monumental decree established that future population growth would bear zero additional poll tax, severing the link between population increase and fiscal extraction.

During the Yongzheng reign (1723AD to 1735AD), this reform was completed through the nationwide implementation of tanding rudi (merging the head tax into the agricultural land tax). By converting poll tax quotas into a surcharge on registered land acreage, the fiscal incentive for commoners to hide unregistered family members was removed [@ho1959studies; @Ni2020China; @Sng2013Taxation]. Landless peasants, day labourers and tenant farmers were liberated from personal direct taxation, fostering labour mobility and encouraging rural households to report actual household sizes to village elders and local yamen scribes.

Building upon this fiscal restructuring, the Qianlong Emperor in 1741AD ordered all provincial governors to transform the community mutual-responsibility system (baojia) into a universal annual population register [@cao2001zhongguo; @ho1959studies]. Under the baojia framework, ten households formed a pai, ten pai formed a jia, and ten jia constituted a bao, with local headmen tasked with updating door tablets (paimen) recording all resident individuals regardless of age or gender. The resulting annual returns (minshu) replaced the obsolete fiscal ding figures with realistic headcounts, precipitating a statistical jump that revealed an empire expanding from 143M in 1741AD to 297,1M in 1776AD and 387,2M by 1820AD [@cao2001zhongguo; @cao2024population; @Deng2003Fact].

## Agricultural Modernisation, New World Crops and Ecological Frontiers

The demographic surge of the eighteenth century was sustained by significant agricultural intensification and ecological expansion [@perkins1969agricultural; @Broadberry2026Economic; @Lee2014Climate]. Traditional Chinese lowland wet-rice cultivation reached high levels of output through labour-intensive double cropping, diligent fertilisation, improved irrigation infrastructure, and the introduction of fast-ripening Champa cultivars across the Lower and Middle Yangtze valleys [@perkins1969agricultural; @Ma2008Economic]. In the polders of the Dongting and Poyang lake basins, dike construction (weitian) converted vast wetland zones into productive paddies that earned Huguang its reputation as the granary of the empire (Huguang shu, tianxia zu, or when Huguang ripens, all under Heaven has enough).

Simultaneously, American food crops introduced via maritime trade routes in the late sixteenth century achieved widespread regional diffusion across highland ecological frontiers [@ho1959studies; @perkins1969agricultural]. Sweet potatoes (fanjiu), maize (yumi) and peanuts (luohansong) flourished on poor, sandy or steeply sloping soils unsuited to irrigated paddies. Peasant settlers cleared upland forests in the Nanling range between Jiangxi and Guangdong, the Dabie Mountains between Anhui and Hubei, and the Qinba mountain belt in southern Shaanxi, producing agricultural surpluses that supported high fertility and rising population density across previously peripheral zones [@cao2001zhongguo; @Lee2014Climate].

Commercial agriculture expanded concurrently. Specialized cash cropping occupied increasing proportions of prime land: sericulture and mulberry orchards expanded across Zhejiang and northern Guangdong; cotton cultivation spread throughout the lower Yangtze delta and northern Zhili; and tea plantations climbed the hillsides of Fujian (the Wuyi Mountains) and southern Anhui [@perkins1969agricultural; @Ma2008Economic]. The monetization of rural markets via imported New World silver facilitated specialized regional trade, allowing grain-deficit silk and cotton areas in Jiangnan to import rice from Huguang and Jiangxi.

## Historiographical Debate and the Cao Shuji Reconstruction

Historical understanding of Qing population has evolved across three major historiographical paradigms [@cao2001zhongguo; @ho1959studies; @lee1999one]. In his foundational monograph, Ho Ping-ti [1959] established that early Qing ding figures were fiscal tax-bearing units rather than biological individuals, demonstrating that the eighteenth-century population climb represented both genuine natural increase and the progressive surfacing of unrecorded residents under baojia reporting [@ho1959studies]. Perkins [1969] corroborated this trajectory by demonstrating that grain acreage and crop yields doubled between 1400AD and 1850AD, keeping pace with demographic expansion [@perkins1969agricultural].

In the 1990s and 2000s, James Lee, Wang Feng and Cameron Campbell challenged traditional Malthusian interpretations of Chinese overpopulation, demonstrating through multi-lineage micro-data that Qing households exercised deliberate fertility control via spacing, stopping, infanticide and adoption, maintaining marital fertility rates substantially below western European levels [@lee1999one; @Campbell2005Deliberate; @Wolf2007Fertility; @Hu2023Descendants]. Rather than passive victims of demographic pressure, Qing families actively managed demographic reproduction within patriarchal lineage institutions.

Most recently, Cao Shuji [2001, 2024] constructed an exhaustive county-by-county demographic history of Qing China, cross-referencing thousands of local gazetteers (fangzhi), granary records and regional tax rolls to correct for provincial reporting anomalies, providing the authoritative benchmark data adopted in this module [@cao2001zhongguo; @cao2024population]. Cao's findings resolve historical contradictions between official Board of Revenue returns and local prefectural surveys, tracking real demographic movements across the imperial administrative hierarchy.

# Methodology

## Spatial Territorial Partition and Historical Provincial Masks

The module divides an imperial territory of 9.389.222 km² (137.431 five-arcminute grid cells) into 25 historical provincial and territorial masks. These encompass the eighteen core provinces of China Proper (Zhili, Jiangsu, Anhui, Zhejiang, Jiangxi, Fujian, Hubei, Hunan, Henan, Shandong, Shanxi, Shaanxi, Gansu, Sichuan, Guangdong, Guangxi, Yunnan and Guizhou) and seven outer borderland jurisdictions (Manchuria, Inner Mongolia, Xinjiang, Qinghai, Tibet, Taiwan and Hong Kong and Macao).

For each province and territory $r \in [1, 25]$ across eight canonical benchmark steps $t \in [1644, 1680, 1776, 1820, 1851, 1880, 1910, 1911]$, regional population $P_r(t)$ adheres strictly to Cao Shuji's gazetteer-anchored provincial series [@cao2001zhongguo; @cao2024population]. Intermediate figures interpolate log-linearly between historical benchmarks, while urban centres drawn from 1.852 catalogued settlements are integrated to ensure rural-urban consistency across all sub-regional catchments.

## Non-Stationary Matérn Kriging Calibration

Spatial allocation of rural population within the 25 territorial masks is regularised using the East Asian archaeological and historical kriging domain. This domain aggregates 88.000+ archaeological excavation records, radiocarbon determinations, and historical settlement coordinates across 1.274 domestic Voronoi catchments (1.074 active catchments) spanning ten Holocene horizons from the Palaeolithic to the late Qing Dynasty [@chgis2016v6; @paciorek2006spatial].

Following Freeman-Tukey variance stabilisation, spatial autocorrelation in residual densities is modelled through Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) covariance functions [@paciorek2006spatial]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,50$ across all ten horizons, with nugget-to-sill ratios constrained to 0,04 (0,0507 in Horizon 9) and weighted least squares $R^2$ values spanning 0,9991 to 0,9996. Weighted least squares regression incorporates five biophysical covariates: habitable land fraction, natural productivity index, ecozone terrain suitability, fluvial distance decay, and smooth coastal proximity.

# Testing and Validation

Statistical and spatial audits confirm tight variogram convergence and zero-leak boundary conservation across the 25 provincial masks. Table \ref{tab:kriging-qing} details the Matérn variogram fit parameters across all ten Holocene horizons in the East Asian domain, demonstrating high residual determination ($R^2 \ge 0,9991$) and tightly regularised nugget parameters.

<figure class="crd-table-figure" id="tab:kriging-qing">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Neolithic (before 5000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000005</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,0106</td><td class="crd-td">0,1177</td></tr>
<tr><td class="crd-td"><strong>2. Middle Neolithic Yangshao (5000 to 3000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000025</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0471</td><td class="crd-td">0,7343</td></tr>
<tr><td class="crd-td"><strong>3. Late Neolithic Longshan (3000 to 2000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,00004</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0722</td><td class="crd-td">1,0729</td></tr>
<tr><td class="crd-td"><strong>4. Bronze Age Shang and Western Zhou (2000 to 771BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000066</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,1232</td><td class="crd-td">1,6294</td></tr>
<tr><td class="crd-td"><strong>5. Spring and Autumn and Warring States (770 to 221BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000038</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,0654</td><td class="crd-td">0,9254</td></tr>
<tr><td class="crd-td"><strong>6. Qin, Han and Xiongnu (221BC to 220AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,00001</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0214</td><td class="crd-td">0,2085</td></tr>
<tr><td class="crd-td"><strong>7. Wei, Jin and Northern and Southern Dynasties (220 to 589AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000017</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0323</td><td class="crd-td">0,3491</td></tr>
<tr><td class="crd-td"><strong>8. Sui, Tang and Five Dynasties (581 to 960AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000017</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0345</td><td class="crd-td">0,3384</td></tr>
<tr><td class="crd-td"><strong>9. Liao, Song, Jin and Yuan (960 to 1368AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000019</td><td class="crd-td">0,05</td><td class="crd-td">0,9991</td><td class="crd-td">0,0367</td><td class="crd-td">0,3187</td></tr>
<tr><td class="crd-td"><strong>10. Ming and Qing Imperial (1368 to 1911AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000032</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0879</td><td class="crd-td">0,706</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> East Asian kriging variogram diagnostics across ten Holocene horizons (137.431 valid land cells, regularised tau1 = 1,5).</figcaption>
</figure>

Table \ref{tab:kriging-epochs-qing} sets out documented archaeological site frequencies and active domestic catchment allocations across each horizon, together with the fitted weighted least squares covariate slopes for habitability, ecozone terrain and coastal proximity.

<figure class="crd-table-figure" id="tab:kriging-epochs-qing">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Total Sites</th><th class="crd-th">Active Catchments</th><th class="crd-th">Habitability Beta</th><th class="crd-th">Ecozone Beta</th><th class="crd-th">Coastal Beta</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Neolithic (before 5000BC)</strong></td><td class="crd-td">1.435</td><td class="crd-td">575</td><td class="crd-td">0,001</td><td class="crd-td">0,001</td><td class="crd-td">0,1209</td></tr>
<tr><td class="crd-td"><strong>2. Middle Neolithic Yangshao (5000 to 3000BC)</strong></td><td class="crd-td">6.450</td><td class="crd-td">666</td><td class="crd-td">0,0013</td><td class="crd-td">0,0185</td><td class="crd-td">0,1213</td></tr>
<tr><td class="crd-td"><strong>3. Late Neolithic Longshan (3000 to 2000BC)</strong></td><td class="crd-td">9.929</td><td class="crd-td">738</td><td class="crd-td">0,0034</td><td class="crd-td">0,0234</td><td class="crd-td">0,1223</td></tr>
<tr><td class="crd-td"><strong>4. Bronze Age Shang and Western Zhou (2000 to 771BC)</strong></td><td class="crd-td">17.043</td><td class="crd-td">777</td><td class="crd-td">0,008</td><td class="crd-td">0,035</td><td class="crd-td">0,1258</td></tr>
<tr><td class="crd-td"><strong>5. Spring and Autumn and Warring States (770 to 221BC)</strong></td><td class="crd-td">9.355</td><td class="crd-td">761</td><td class="crd-td">0,001</td><td class="crd-td">0,0315</td><td class="crd-td">0,1226</td></tr>
<tr><td class="crd-td"><strong>6. Qin, Han and Xiongnu (221BC to 220AD)</strong></td><td class="crd-td">3.078</td><td class="crd-td">746</td><td class="crd-td">0,001</td><td class="crd-td">0,0204</td><td class="crd-td">0,1214</td></tr>
<tr><td class="crd-td"><strong>7. Wei, Jin and Northern and Southern Dynasties (220 to 589AD)</strong></td><td class="crd-td">4.615</td><td class="crd-td">565</td><td class="crd-td">0,001</td><td class="crd-td">0,0256</td><td class="crd-td">0,1206</td></tr>
<tr><td class="crd-td"><strong>8. Sui, Tang and Five Dynasties (581 to 960AD)</strong></td><td class="crd-td">4.926</td><td class="crd-td">648</td><td class="crd-td">0,001</td><td class="crd-td">0,0278</td><td class="crd-td">0,1208</td></tr>
<tr><td class="crd-td"><strong>9. Liao, Song, Jin and Yuan (960 to 1368AD)</strong></td><td class="crd-td">5.284</td><td class="crd-td">803</td><td class="crd-td">0,001</td><td class="crd-td">0,0282</td><td class="crd-td">0,1211</td></tr>
<tr><td class="crd-td"><strong>10. Ming and Qing Imperial (1368 to 1911AD)</strong></td><td class="crd-td">12.894</td><td class="crd-td">962</td><td class="crd-td">0,0083</td><td class="crd-td">0,0409</td><td class="crd-td">0,1235</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catchment site counts and WLS covariate slopes in the East Asian kriging domain across ten horizons.</figcaption>
</figure>

# Results

## Eighteenth-Century Provincial Expansion and Trajectories (1644 to 1851AD)

Between 1644AD and 1851AD, the population of the Qing Empire experienced sustained growth, rising from 146,9M to an imperial peak of 443,6M (Figure \ref{fig:traj-qing}). Across the eighteen historic provinces of China Proper, expansion proceeded unevenly, reflecting divergent carrying capacities, commercial integration, and regional agricultural frontiers [@cao2001zhongguo; @perkins1969agricultural].

The Lower Yangtze macro-region (Jiangnan, comprising Jiangsu, Anhui and Zhejiang) maintained its role as the economic core of the empire. Jiangsu expanded from 16,2M in 1644AD to 29,5M in 1776AD, 37,8M in 1820AD and 44,2M in 1851AD, sustaining densities exceeding 470 persons per km² across the Yangtze delta plain [@cao2001zhongguo; @Ma2008Economic]. Anhui grew from 10,6M to 37,6M over the same period, while Zhejiang rose from 17,2M to 30,4M, anchored by the silk, cotton, tea and porcelain trades connecting interior prefectures to Hangzhou, Suzhou and Nanjing [@perkins1969agricultural; @Xu2015Urbanization].

<figure class="crd-figure-block" id="fig:traj-qing">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-qing-dynasty/fig2_qing_dynasty_trajectory.png" alt="fig:traj-qing" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory of Qing Dynasty China across 25 provinces and borderlands from 1644AD to 1911AD.</figcaption>
</figure>

In northern China, the agricultural plains of Zhili, Shandong and Henan accommodated substantial natural increase through double cropping of winter wheat and millet, supported by extensive flood-control and Grand Canal transport networks [@perkins1969agricultural; @Broadberry2026Economic]. Zhili expanded from 7,8M in 1644AD to 19,4M in 1776AD and 26,8M in 1851AD; Shandong grew from 11,2M to 33,2M; and Henan rose from 8,6M to 29,1M.

The Middle Yangtze basin (Hubei, Hunan and Jiangxi) experienced rapid agricultural expansion as reclamation of the Han River valley and the Dongting Lake polders turned the region into China's premier grain export basin [@perkins1969agricultural; @cao2001zhongguo]. Hubei surged from 7,1M in 1644AD to 16,8M in 1776AD and 28,8M in 1851AD; Hunan expanded from 6M to 21,1M; and Jiangxi rose from 12,6M to 24,6M.

In the south, Guangdong and Guangxi (Lingnan) integrated intensive maritime trade with hillside maize and sweet potato cultivation [@perkins1969agricultural; @cao2001zhongguo]. Guangdong rose from 8,55M in 1644AD to 16,2M in 1776AD and 26,4M in 1851AD, sustained by Pearl River Delta commerce through Guangzhou. Guangxi expanded from 4,1M to 9,9M over the same period. In the northwest, Shaanxi climbed from 4,4M to 13,5M, while Gansu expanded from 2M to 16,2M through intensive oasis irrigation and grain storage infrastructure along the Hexi Corridor. Table \ref{tab:regions-qing} details the full provincial breakdown across eight historical benchmarks.

<figure class="crd-table-figure" id="tab:regions-qing">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province or Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">1644AD</th><th class="crd-th">1680AD</th><th class="crd-th">1776AD</th><th class="crd-th">1820AD</th><th class="crd-th">1851AD</th><th class="crd-th">1880AD</th><th class="crd-th">1911AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhili Province</strong></td><td class="crd-td">205.823</td><td class="crd-td">7,8M</td><td class="crd-td">9,4M</td><td class="crd-td">19,4M</td><td class="crd-td">23,5M</td><td class="crd-td">26,8M</td><td class="crd-td">24,5M</td><td class="crd-td">27,5M</td></tr>
<tr><td class="crd-td"><strong>Jiangsu Province</strong></td><td class="crd-td">93.864</td><td class="crd-td">16,2M</td><td class="crd-td">17,5M</td><td class="crd-td">29,5M</td><td class="crd-td">37,8M</td><td class="crd-td">44,2M</td><td class="crd-td">26,4M</td><td class="crd-td">32,6M</td></tr>
<tr><td class="crd-td"><strong>Anhui Province</strong></td><td class="crd-td">132.304</td><td class="crd-td">10,6M</td><td class="crd-td">11,4M</td><td class="crd-td">25,6M</td><td class="crd-td">34,2M</td><td class="crd-td">37,6M</td><td class="crd-td">17,8M</td><td class="crd-td">21,9M</td></tr>
<tr><td class="crd-td"><strong>Zhejiang Province</strong></td><td class="crd-td">102.203</td><td class="crd-td">17,2M</td><td class="crd-td">14,5M</td><td class="crd-td">21,5M</td><td class="crd-td">27,5M</td><td class="crd-td">30,4M</td><td class="crd-td">15,6M</td><td class="crd-td">21,5M</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">157.942</td><td class="crd-td">12,6M</td><td class="crd-td">11,8M</td><td class="crd-td">18,8M</td><td class="crd-td">23,7M</td><td class="crd-td">24,6M</td><td class="crd-td">18,9M</td><td class="crd-td">19,3M</td></tr>
<tr><td class="crd-td"><strong>Fujian Province (excl. Taiwan)</strong></td><td class="crd-td">123.700</td><td class="crd-td">7,5M</td><td class="crd-td">6,8M</td><td class="crd-td">11,6M</td><td class="crd-td">14,6M</td><td class="crd-td">16,2M</td><td class="crd-td">13,8M</td><td class="crd-td">13,55M</td></tr>
<tr><td class="crd-td"><strong>Hubei Province</strong></td><td class="crd-td">172.922</td><td class="crd-td">7,1M</td><td class="crd-td">7,6M</td><td class="crd-td">16,8M</td><td class="crd-td">24,9M</td><td class="crd-td">28,8M</td><td class="crd-td">25,6M</td><td class="crd-td">28M</td></tr>
<tr><td class="crd-td"><strong>Hunan Province</strong></td><td class="crd-td">210.542</td><td class="crd-td">6M</td><td class="crd-td">6,4M</td><td class="crd-td">15,4M</td><td class="crd-td">19,2M</td><td class="crd-td">21,1M</td><td class="crd-td">21,8M</td><td class="crd-td">25,3M</td></tr>
<tr><td class="crd-td"><strong>Henan Province</strong></td><td class="crd-td">167.874</td><td class="crd-td">8,6M</td><td class="crd-td">9,8M</td><td class="crd-td">20,6M</td><td class="crd-td">25,3M</td><td class="crd-td">29,1M</td><td class="crd-td">23,8M</td><td class="crd-td">28,6M</td></tr>
<tr><td class="crd-td"><strong>Shandong Province</strong></td><td class="crd-td">161.473</td><td class="crd-td">11,2M</td><td class="crd-td">13,5M</td><td class="crd-td">24,2M</td><td class="crd-td">29,2M</td><td class="crd-td">33,2M</td><td class="crd-td">30,6M</td><td class="crd-td">32,6M</td></tr>
<tr><td class="crd-td"><strong>Shanxi Province</strong></td><td class="crd-td">158.481</td><td class="crd-td">7,2M</td><td class="crd-td">7,8M</td><td class="crd-td">12,7M</td><td class="crd-td">14,6M</td><td class="crd-td">15,8M</td><td class="crd-td">9,6M</td><td class="crd-td">11,25M</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province</strong></td><td class="crd-td">202.545</td><td class="crd-td">4,4M</td><td class="crd-td">4,7M</td><td class="crd-td">8,4M</td><td class="crd-td">12,1M</td><td class="crd-td">13,5M</td><td class="crd-td">8,4M</td><td class="crd-td">9,25M</td></tr>
<tr><td class="crd-td"><strong>Gansu Province (incl. Ningxia)</strong></td><td class="crd-td">444.074</td><td class="crd-td">2M</td><td class="crd-td">2,2M</td><td class="crd-td">12,2M</td><td class="crd-td">15,2M</td><td class="crd-td">16,2M</td><td class="crd-td">5,2M</td><td class="crd-td">6,15M</td></tr>
<tr><td class="crd-td"><strong>Sichuan Province (incl. Chongqing)</strong></td><td class="crd-td">560.138</td><td class="crd-td">4,5M</td><td class="crd-td">3,2M</td><td class="crd-td">16,8M</td><td class="crd-td">27,7M</td><td class="crd-td">35,6M</td><td class="crd-td">44,2M</td><td class="crd-td">51,8M</td></tr>
<tr><td class="crd-td"><strong>Guangdong Province (incl. Hainan)</strong></td><td class="crd-td">210.724</td><td class="crd-td">8,55M</td><td class="crd-td">8,9M</td><td class="crd-td">16,2M</td><td class="crd-td">21,5M</td><td class="crd-td">26,4M</td><td class="crd-td">26,8M</td><td class="crd-td">29,5M</td></tr>
<tr><td class="crd-td"><strong>Guangxi Province</strong></td><td class="crd-td">237.233</td><td class="crd-td">4,1M</td><td class="crd-td">4,3M</td><td class="crd-td">7,2M</td><td class="crd-td">8,7M</td><td class="crd-td">9,9M</td><td class="crd-td">9,6M</td><td class="crd-td">11,25M</td></tr>
<tr><td class="crd-td"><strong>Yunnan Province</strong></td><td class="crd-td">391.153</td><td class="crd-td">3,4M</td><td class="crd-td">3,6M</td><td class="crd-td">6,4M</td><td class="crd-td">8,9M</td><td class="crd-td">10,9M</td><td class="crd-td">7,8M</td><td class="crd-td">9,85M</td></tr>
<tr><td class="crd-td"><strong>Guizhou Province</strong></td><td class="crd-td">191.526</td><td class="crd-td">2,1M</td><td class="crd-td">2,3M</td><td class="crd-td">5,4M</td><td class="crd-td">6,6M</td><td class="crd-td">7,7M</td><td class="crd-td">6,9M</td><td class="crd-td">8,45M</td></tr>
<tr><td class="crd-td"><strong>Manchuria (Shengjing, Jilin and Heilongjiang)</strong></td><td class="crd-td">779.442</td><td class="crd-td">2,2M</td><td class="crd-td">1,5M</td><td class="crd-td">2,8M</td><td class="crd-td">4,5M</td><td class="crd-td">6,8M</td><td class="crd-td">10,5M</td><td class="crd-td">18,7M</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia Leagues and Banners</strong></td><td class="crd-td">1.171.885</td><td class="crd-td">980k</td><td class="crd-td">1,05M</td><td class="crd-td">1,65M</td><td class="crd-td">2,15M</td><td class="crd-td">2,6M</td><td class="crd-td">2,9M</td><td class="crd-td">3,65M</td></tr>
<tr><td class="crd-td"><strong>Xinjiang (Altishahr and Dzungaria)</strong></td><td class="crd-td">1.628.071</td><td class="crd-td">900k</td><td class="crd-td">950k</td><td class="crd-td">1,2M</td><td class="crd-td">1,55M</td><td class="crd-td">1,85M</td><td class="crd-td">1,55M</td><td class="crd-td">2,27M</td></tr>
<tr><td class="crd-td"><strong>Qinghai (Kokonor)</strong></td><td class="crd-td">718.255</td><td class="crd-td">350k</td><td class="crd-td">380k</td><td class="crd-td">520k</td><td class="crd-td">650k</td><td class="crd-td">750k</td><td class="crd-td">620k</td><td class="crd-td">830k</td></tr>
<tr><td class="crd-td"><strong>Tibet (Xizang)</strong></td><td class="crd-td">1.130.247</td><td class="crd-td">1,05M</td><td class="crd-td">1,08M</td><td class="crd-td">1,12M</td><td class="crd-td">1,15M</td><td class="crd-td">1,16M</td><td class="crd-td">1,12M</td><td class="crd-td">1,1M</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Qing Prefecture and Japanese Colonial 1895-1911)</strong></td><td class="crd-td">35.732</td><td class="crd-td">340k</td><td class="crd-td">450k</td><td class="crd-td">1,1M</td><td class="crd-td">1,9M</td><td class="crd-td">2,35M</td><td class="crd-td">2,7M</td><td class="crd-td">3,37M</td></tr>
<tr><td class="crd-td"><strong>Hong Kong and Macao</strong></td><td class="crd-td">1.069</td><td class="crd-td">25k</td><td class="crd-td">30k</td><td class="crd-td">45k</td><td class="crd-td">55k</td><td class="crd-td">95k</td><td class="crd-td">230k</td><td class="crd-td">532k</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">9.389.222</td><td class="crd-td">146,9M</td><td class="crd-td">151,14M</td><td class="crd-td">297,13M</td><td class="crd-td">387,15M</td><td class="crd-td">443,61M</td><td class="crd-td">356,92M</td><td class="crd-td">418,8M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Provincial population benchmarks across Qing Dynasty China from 1644AD to 1911AD.</figcaption>
</figure>

## Great Internal Migrations: Huguang to Sichuan and the Highlands

The most transformative demographic restructuring of the High Qing era occurred through organized internal migration from the crowded provinces of central China into the underpopulated western interior (Figure \ref{fig:shares-qing}) [@cao2001zhongguo; @perkins1969agricultural]. This movement was dominated by the state-sponsored migration known as Huguang tian Sichuan (Huguang fills Sichuan) [@cao2001zhongguo; @cao2024population].

Following seventeenth-century devastation, the fertile Sichuan basin possessed vast tracts of uncultivated land. In 1690AD, the Kangxi Emperor issued imperial edicts granting five-year tax holidays, free land allotments, and travel subsidies to migrants willing to reclaim abandoned fields [@cao2001zhongguo; @ho1959studies]. Over the subsequent century, millions of peasant families from Hubei, Hunan, Jiangxi, Guangdong and Fujian migrated up the Yangtze through the Three Gorges into Sichuan. Migrant associations constructed huiguan (provincial guildhalls) throughout Chengdu and Chongqing to facilitate kinship and regional settlement networks.

As a consequence of this prolonged influx, Sichuan's population climbed nearly elevenfold from 3,2M in 1680AD to 16,8M in 1776AD, 27,7M in 1820AD, 35,6M in 1851AD, and reached 51,8M by 1911AD, transforming the province into the most populous jurisdiction in the empire [@cao2001zhongguo; @cao2024population]. New arrivals cleared hillsides across the Red Basin, cultivating sweet potatoes and maize alongside traditional paddy rice in the Chengdu plain irrigated by the ancient Dujiangyan waterworks.

<figure class="crd-figure-block" id="fig:shares-qing">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-qing-dynasty/fig3_qing_dynasty_shares.png" alt="fig:shares-qing" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Changing provincial population shares and terminal 1911AD distributions across Qing Dynasty China.</figcaption>
</figure>

A secondary migration stream flowed southward into the southwestern highlands of Yunnan and Guizhou [@cao2001zhongguo; @perkins1969agricultural]. Under the Yongzheng administration, the policy of gaitu guiliu (replacing native hereditary tribal chieftains with appointed imperial civil bureaucrats) integrated indigenous Miao, Yi and Zhuang territories into standard imperial prefectures. Han peasant farmers, miners and merchants moved into the copper, tin and silver mining districts of northern Yunnan and western Guizhou, lifting Yunnan from 3,4M in 1644AD to 10,9M in 1851AD and Guizhou from 2,1M to 7,7M [@cao2001zhongguo; @cao2024population].

Concurrently, the Qinba mountain region in southern Shaanxi absorbed hundreds of thousands of migrant shack people (pengmin) from Hubei and Anhui who cleared timber and terraced steep slopes for maize, sweet potato and tobacco farming, significantly altering local ecology and hydrology [@cao2001zhongguo; @Lee2014Climate].

## Frontier Colonisation: Manchuria, Inner Mongolia, Taiwan, Xinjiang and Tibet

Beyond the eighteen provinces of China Proper, Qing imperial authority extended over expansive frontier territories where demographic growth was shaped by distinct institutional, colonial and ecological arrangements [@Schlesinger2012Qing; @Theaker2018Moving; @Mosca2020Imperialism].

In Manchuria (the Manchu ancestral homeland, comprising Shengjing, Jilin and Heilongjiang), early Qing rulers constructed the Willow Palisade (Liutiao Bian) and enacted strict prohibitions on Han migration to preserve the Manchu banner subsistence base [@Schlesinger2012Qing]. However, illegal seasonal migration (Chuang Guandong) by Shandong and Zhili peasants seeking fertile black-soil farmland escalated throughout the eighteenth century. Following the Opium Wars and growing Russian imperial encroachment in the Amur basin, the Qing court dismantled the palisade restrictions after 1860AD, officially opening Manchuria to unrestricted agricultural settlement. Consequently, Manchurian population surged from 1,5M in 1680AD to 2,8M in 1776AD, 6,8M in 1851AD, 10,5M in 1880AD and 18,7M by 1911AD [@Schlesinger2012Qing; @cao2001zhongguo].

In Inner Mongolia, demographic dynamics followed a similar shift from pastoral isolation to agrarian colonisation [@Schlesinger2012Qing]. Financial insolvency among Mongol banner princes led to widespread leasing of banner grasslands (mengqi kaiken) to Han tenant farmers from Shanxi and Shaanxi, who founded bustling agricultural market towns across the Tumet, Chahar and Ordos leagues. Inner Mongolian population rose from 1,05M in 1680AD to 2,6M in 1851AD and 3,65M by 1911AD [@cao2001zhongguo; @Schlesinger2012Qing].

Across the Taiwan Strait, the Qing annexation of Taiwan in 1683AD following the surrender of Zheng Keshuang established the island as a prefecture of Fujian Province [@cao2001zhongguo; @perkins1969agricultural]. Han migration from southern Fujian (Hokkien) and northeastern Guangdong (Hakka) transformed the western coastal plain into intensive rice and sugarcane fields. Despite periodic imperial crossing prohibitions, Taiwan's population grew from 450k in 1680AD to 1,1M in 1776AD, 1,9M in 1820AD and 2,35M in 1851AD. Following provincial elevation in 1887AD and Japanese colonial annexation in 1895AD, modern public health measures and infrastructure lifted Taiwan to 3,37M by 1911AD [@cao2001zhongguo; @cao2024population].

In the northwest, the Qianlong conquest of the Dzungar Khanate (1755AD to 1757AD) incorporated Altishahr and Dzungaria as Xinjiang (the New Frontier) [@Theaker2018Moving; @Mosca2020Imperialism]. The Qing state organized state military agricultural colonies (tuntian) garrisoned by Manchu, Mongol and Han banner troops alongside transported convicts and merchant migrants. Regional population climbed from 950k in 1680AD to 1,85M in 1851AD, contracted sharply to 1,55M during the Yakub Beg rebellion and Dungan uprising (1862AD to 1877AD), and recovered to 2,27M by 1911AD following Zuo Zongtang's reconquest and provincial creation in 1884AD [@Theaker2018Moving; @cao2001zhongguo].

By contrast, Tibet (Xizang) maintained demographic stability throughout the Qing period [@cao2001zhongguo; @Mosca2020Imperialism]. High-altitude pastoralism and valleys conditioned by harsh ecological limits, combined with institutionalised celibacy among a large Buddhist monastic order, held regional population within a narrow corridor between 1,05M in 1644AD and 1,1M in 1911AD [@cao2001zhongguo]. In neighbouring Qinghai (Kokonor), mixed pastoralist and agricultural populations grew modestly from 350k in 1644AD to 830k in 1911AD.

## Mid-Nineteenth-Century Catastrophes: Taiping Rebellion and the Dingwu Famine

The mid-nineteenth century brought unprecedented demographic catastrophe to Qing China [@cao2001zhongguo; @Lee2012Tale; @Zhang2016Insurgent; @Orlandi2023Structural]. Between 1851AD and 1880AD, imperial population plummeted from 443,6M to 356,9M, representing a net loss of 86,7M inhabitants (-19,5%), while excess mortality and unrecorded births attributable to war, starvation and epidemic disease exceeded 100M people [@cao2001zhongguo; @Lee2012Tale; @Joohee2019Afterlife].

The primary engine of this collapse was the Taiping Rebellion (1851AD to 1864AD), initiated by Hong Xiuquan in Guangxi and centered upon the Heavenly Capital (Tianjing) at Nanjing [@cao2001zhongguo; @Zhang2016Insurgent]. Military operations, scorched-earth tactics, siege starvation and virulent cholera epidemics concentrated in the Lower Yangtze macro-region decimated the empire's wealthiest and most literate provinces [@cao2001zhongguo; @Gao2025Emergence]. In Jiangsu, population fell from 44,2M in 1851AD to 26,4M in 1880AD, an outright loss of 17,8M (-40,3%). Anhui suffered an even more severe proportional collapse, falling from 37,6M to 17,8M (-52,7%), while Zhejiang dropped from 30,4M to 15,6M (-48,7%) [@cao2001zhongguo; @cao2024population].

<figure class="crd-table-figure" id="tab:taiping-qing">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province</th><th class="crd-th">1851AD Peak</th><th class="crd-th">1880AD Nadir</th><th class="crd-th">Absolute Change</th><th class="crd-th">Relative Loss</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jiangsu Province</strong></td><td class="crd-td">44,2M</td><td class="crd-td">26,4M</td><td class="crd-td">-17,8M</td><td class="crd-td">-40,3%</td></tr>
<tr><td class="crd-td"><strong>Anhui Province</strong></td><td class="crd-td">37,6M</td><td class="crd-td">17,8M</td><td class="crd-td">-19,8M</td><td class="crd-td">-52,7%</td></tr>
<tr><td class="crd-td"><strong>Zhejiang Province</strong></td><td class="crd-td">30,4M</td><td class="crd-td">15,6M</td><td class="crd-td">-14,8M</td><td class="crd-td">-48,7%</td></tr>
<tr><td class="crd-td"><strong>Gansu Province</strong></td><td class="crd-td">16,2M</td><td class="crd-td">5,2M</td><td class="crd-td">-11M</td><td class="crd-td">-67,9%</td></tr>
<tr><td class="crd-td"><strong>Shanxi Province</strong></td><td class="crd-td">15,8M</td><td class="crd-td">9,6M</td><td class="crd-td">-6,2M</td><td class="crd-td">-39,2%</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province</strong></td><td class="crd-td">13,5M</td><td class="crd-td">8,4M</td><td class="crd-td">-5,1M</td><td class="crd-td">-37,8%</td></tr>
<tr><td class="crd-td"><strong>Henan Province</strong></td><td class="crd-td">29,1M</td><td class="crd-td">23,8M</td><td class="crd-td">-5,3M</td><td class="crd-td">-18,2%</td></tr>
<tr><td class="crd-td"><strong>Hubei Province</strong></td><td class="crd-td">28,8M</td><td class="crd-td">25,6M</td><td class="crd-td">-3,2M</td><td class="crd-td">-11,1%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Demographic impact of the mid-nineteenth-century crises across the eight hardest-hit Qing provinces (1851AD to 1880AD).</figcaption>
</figure>

Simultaneously, the Nian Rebellion (1851AD to 1868AD) devastated the Huai River basin across Henan, Shandong and northern Anhui, while the Panthay Rebellion (1856AD to 1873AD) in Yunnan depressed provincial numbers from 10,9M to 7,8M [@cao2001zhongguo; @Theaker2018Moving]. In the northwest, the Great Northwestern Muslim Rebellion (1862AD to 1877AD) across Shaanxi and Gansu led to widespread communal violence and severe depopulation, reducing Gansu from 16,2M in 1851AD to 5,2M in 1880AD (-67,9%) [@Theaker2018Moving; @cao2001zhongguo].

This wave of warfare was compounded by the catastrophic North China Dingwu Famine (Dingwu Qihuang, 1876AD to 1879AD, peaking in 1877AD and 1878AD) [@cao2001zhongguo; @Lee2012Tale; @Gao2025Emergence]. Triggered by extreme El Nino-induced drought that desiccated the Yellow River watershed, the famine devastated Shanxi, Shaanxi, Henan, Zhili and Shandong. Shanxi's population plunged from 15,8M in 1851AD to 9,6M in 1880AD (-39,2%), while Shaanxi fell from 13,5M to 8,4M (-37,8%). Total famine-related mortality across northern China is estimated between 9,5M and 13M individuals [@cao2001zhongguo; @Lee2012Tale]. Table \ref{tab:taiping-qing} details the demographic impact across the eight hardest-hit provinces.

## Late Qing Urbanisation, Treaty Ports and the Xuanthong Census (1880 to 1911AD)

In the final three decades of imperial rule, demographic recovery intersected with modern economic transformation and state-building initiatives [@cao2001zhongguo; @mavinglahn2022cambridge; @Xu2015Urbanization]. Across the devastated Lower Yangtze countryside, vacant agricultural land stimulated secondary migration from Henan, Hubei and Jiangxi, initiating a slow demographic restoration that returned Jiangsu to 32,6M, Anhui to 21,9M and Zhejiang to 21,5M by 1911AD [@cao2001zhongguo; @Ma2008Economic].

Concurrently, the expansion of maritime and riverine treaty ports established new poles of urban growth linked to global trade networks [@Xu2015Urbanization; @mavinglahn2022cambridge]. Shanghai developed from a regional trading city into China's foremost industrial and financial metropolis, climbing from 300k in 1851AD to 520k in 1880AD and 1,29M by 1910AD. In the north, Tianjin grew to 800k as the commercial and railway terminal serving Beijing, while the central Yangtze tri-city agglomeration of Wuhan reached 850k through ironworks, modern textile mills and steam shipping [@skinner1977city; @Xu2015Urbanization]. British Hong Kong expanded from 95k in 1851AD to 445k in 1910AD, anchoring international shipping along the southern maritime rim.

Treaty ports in Fujian (Xiamen and Fuzhou), Guangdong (Shantou and Guangzhou) and Shandong (Yantai and Qingdao) generated commercial corridors that linked interior hinterlands to coastal steamship routes. Even inland river ports such as Jiujiang, Wuhu and Chongqing experienced commercial expansion as foreign concessions and steam launch navigation penetrated the upper river systems.

<figure class="crd-table-figure" id="tab:density-qing">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province or Territory</th><th class="crd-th">Sites</th><th class="crd-th">1644AD</th><th class="crd-th">1911AD</th><th class="crd-th">1911AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhili Province</strong></td><td class="crd-td">129</td><td class="crd-td">7,8M</td><td class="crd-td">27,5M</td><td class="crd-td">133,6</td></tr>
<tr><td class="crd-td"><strong>Jiangsu Province</strong></td><td class="crd-td">63</td><td class="crd-td">16,2M</td><td class="crd-td">32,6M</td><td class="crd-td">347,3</td></tr>
<tr><td class="crd-td"><strong>Anhui Province</strong></td><td class="crd-td">60</td><td class="crd-td">10,6M</td><td class="crd-td">21,9M</td><td class="crd-td">165,5</td></tr>
<tr><td class="crd-td"><strong>Zhejiang Province</strong></td><td class="crd-td">76</td><td class="crd-td">17,2M</td><td class="crd-td">21,5M</td><td class="crd-td">210,4</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">77</td><td class="crd-td">12,6M</td><td class="crd-td">19,3M</td><td class="crd-td">122,2</td></tr>
<tr><td class="crd-td"><strong>Fujian Province (excl. Taiwan)</strong></td><td class="crd-td">63</td><td class="crd-td">7,5M</td><td class="crd-td">13,55M</td><td class="crd-td">109,5</td></tr>
<tr><td class="crd-td"><strong>Hubei Province</strong></td><td class="crd-td">85</td><td class="crd-td">7,1M</td><td class="crd-td">28M</td><td class="crd-td">161,9</td></tr>
<tr><td class="crd-td"><strong>Hunan Province</strong></td><td class="crd-td">82</td><td class="crd-td">6M</td><td class="crd-td">25,3M</td><td class="crd-td">120,2</td></tr>
<tr><td class="crd-td"><strong>Henan Province</strong></td><td class="crd-td">101</td><td class="crd-td">8,6M</td><td class="crd-td">28,6M</td><td class="crd-td">170,4</td></tr>
<tr><td class="crd-td"><strong>Shandong Province</strong></td><td class="crd-td">125</td><td class="crd-td">11,2M</td><td class="crd-td">32,6M</td><td class="crd-td">201,9</td></tr>
<tr><td class="crd-td"><strong>Shanxi Province</strong></td><td class="crd-td">99</td><td class="crd-td">7,2M</td><td class="crd-td">11,25M</td><td class="crd-td">71</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province</strong></td><td class="crd-td">87</td><td class="crd-td">4,4M</td><td class="crd-td">9,25M</td><td class="crd-td">45,7</td></tr>
<tr><td class="crd-td"><strong>Gansu Province (incl. Ningxia)</strong></td><td class="crd-td">51</td><td class="crd-td">2M</td><td class="crd-td">6,15M</td><td class="crd-td">13,8</td></tr>
<tr><td class="crd-td"><strong>Sichuan Province (incl. Chongqing)</strong></td><td class="crd-td">164</td><td class="crd-td">4,5M</td><td class="crd-td">51,8M</td><td class="crd-td">92,5</td></tr>
<tr><td class="crd-td"><strong>Guangdong Province (incl. Hainan)</strong></td><td class="crd-td">91</td><td class="crd-td">8,55M</td><td class="crd-td">29,5M</td><td class="crd-td">140</td></tr>
<tr><td class="crd-td"><strong>Guangxi Province</strong></td><td class="crd-td">109</td><td class="crd-td">4,1M</td><td class="crd-td">11,25M</td><td class="crd-td">47,4</td></tr>
<tr><td class="crd-td"><strong>Yunnan Province</strong></td><td class="crd-td">93</td><td class="crd-td">3,4M</td><td class="crd-td">9,85M</td><td class="crd-td">25,2</td></tr>
<tr><td class="crd-td"><strong>Guizhou Province</strong></td><td class="crd-td">114</td><td class="crd-td">2,1M</td><td class="crd-td">8,45M</td><td class="crd-td">44,1</td></tr>
<tr><td class="crd-td"><strong>Manchuria (Shengjing, Jilin and Heilongjiang)</strong></td><td class="crd-td">118</td><td class="crd-td">2,2M</td><td class="crd-td">18,7M</td><td class="crd-td">24</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia Leagues and Banners</strong></td><td class="crd-td">20</td><td class="crd-td">980k</td><td class="crd-td">3,65M</td><td class="crd-td">3,1</td></tr>
<tr><td class="crd-td"><strong>Xinjiang (Altishahr and Dzungaria)</strong></td><td class="crd-td">3</td><td class="crd-td">900k</td><td class="crd-td">2,27M</td><td class="crd-td">1,4</td></tr>
<tr><td class="crd-td"><strong>Qinghai (Kokonor)</strong></td><td class="crd-td">7</td><td class="crd-td">350k</td><td class="crd-td">830k</td><td class="crd-td">1,2</td></tr>
<tr><td class="crd-td"><strong>Tibet (Xizang)</strong></td><td class="crd-td">10</td><td class="crd-td">1,05M</td><td class="crd-td">1,1M</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Qing Prefecture and Japanese Colonial 1895-1911)</strong></td><td class="crd-td">23</td><td class="crd-td">340k</td><td class="crd-td">3,37M</td><td class="crd-td">94,3</td></tr>
<tr><td class="crd-td"><strong>Hong Kong and Macao</strong></td><td class="crd-td">2</td><td class="crd-td">25k</td><td class="crd-td">532k</td><td class="crd-td">497,7</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements (n=1.852), 1644AD and 1911AD population benchmarks and terminal 1911AD density (persons per km²).</figcaption>
</figure>

The terminal imperial benchmark was documented by the 1910-1911AD Xuanthong census (Minzhengbu Diaozha), conducted by the newly created Ministry of Civil Affairs as part of late Qing constitutional preparations [@cao2001zhongguo; @ho1959studies; @Deng2016China]. Although executed unevenly across outlying provinces, the enumeration provided a realistic administrative baseline of 416,6M in 1910AD and 418,8M in 1911AD on the eve of the 1911 Xinhai Revolution [@cao2001zhongguo; @cao2024population]. Table \ref{tab:density-qing} summarises settlement counts, 1644AD and 1911AD populations, and terminal density across all 25 provinces.

<figure class="crd-table-figure" id="tab:source-corpora-qing">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hosner et al. China Archaeological Radiocarbon Database</strong></td><td class="crd-td">51.432</td><td class="crd-td">58,46%</td></tr>
<tr><td class="crd-td"><strong>National Cultural Heritage Administration Key Historical Sites</strong></td><td class="crd-td">4.063</td><td class="crd-td">4,62%</td></tr>
<tr><td class="crd-td"><strong>CHGIS Version 6 Dynastic County and Prefecture Time Series</strong></td><td class="crd-td">12.651</td><td class="crd-td">14,38%</td></tr>
<tr><td class="crd-td"><strong>CHGIS Version 6 1820AD Historical Town and Market Registry</strong></td><td class="crd-td">8.516</td><td class="crd-td">9,68%</td></tr>
<tr><td class="crd-td"><strong>Allen Ancient DNA Resource East Asian Genetic Corpus</strong></td><td class="crd-td">739</td><td class="crd-td">0,84%</td></tr>
<tr><td class="crd-td"><strong>XRONOS Global Archaeological Radiocarbon Database</strong></td><td class="crd-td">1.446</td><td class="crd-td">1,64%</td></tr>
<tr><td class="crd-td"><strong>PEOPLE 3000 Global Radiocarbon Synthesis (2025)</strong></td><td class="crd-td">325</td><td class="crd-td">0,37%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">43</td><td class="crd-td">0,05%</td></tr>
<tr><td class="crd-td"><strong>East Asian Archaeological Atlas Excavation Register</strong></td><td class="crd-td">4.963</td><td class="crd-td">5,64%</td></tr>
<tr><td class="crd-td"><strong>Taiwan Bureau of Cultural Heritage Historical Site Register</strong></td><td class="crd-td">1.286</td><td class="crd-td">1,46%</td></tr>
<tr><td class="crd-td"><strong>Kham and Amdo Historical Tibetan Monastic Gazetteer</strong></td><td class="crd-td">1.562</td><td class="crd-td">1,78%</td></tr>
<tr><td class="crd-td"><strong>Russian Academy of Sciences Amur and Primorye Frontier Survey</strong></td><td class="crd-td">925</td><td class="crd-td">1,05%</td></tr>
<tr><td class="crd-td"><strong>Mongolian Steppe Archaeological Survey Corpus</strong></td><td class="crd-td">30</td><td class="crd-td">0,03%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Component archaeological and historical registries aggregated into the East Asian kriging domain (88.000+ total records).</figcaption>
</figure>

Table \ref{tab:source-corpora-qing} details the component archaeological and historical registries aggregated into the East Asian kriging domain that underpins the spatial allocation in this module.

# Limitations

Three principal constraints affect demographic precision across the Qing reconstruction. First, while post-1741AD baojia reporting represented a substantial improvement over Ming ding tax rolls, local magistrates periodically submitted repeated returns (copying previous figures) or applied arbitrary percentage adjustments during periods of administrative disruption, requiring Cao Shuji's extensive gazetteer-based corrections [@cao2001zhongguo; @Deng2003Fact; @ho1959studies].

Second, micro-demographic lineage studies indicate that female infants and unmarried domestic servants were systematically under-reported in rural genealogies and household tablets due to patrilineal inheritance structures and female infanticide [@lee1999one; @Hu2020Micro; @Campbell2005Deliberate; @Hu2026Male]. Consequently, recorded gender ratios show pronounced masculine biases that require analytical regularisation.

Third, administrative documentation across frontier territories (Xinjiang, Tibet, Qinghai and Inner Mongolia) was less continuous than in China Proper, with mobile nomadic populations enumerated through banner military registers rather than universal household tablets [@Schlesinger2012Qing; @Theaker2018Moving].

# Conclusion

Between 1644AD and 1911AD, China's population nearly tripled from 146,9M to 418,8M, moving through four distinct demographic phases: post-conquest recovery (1644AD to 1680AD), high-growth eighteenth-century expansion to 443,6M (1680AD to 1851AD), catastrophic mid-nineteenth-century contraction to 356,9M during the Taiping and Dingwu crises (1851AD to 1880AD), and late imperial treaty-port recovery to 418,8M (1880AD to 1911AD).

Integrating Cao Shuji's gazetteer demography with 88.000+ archaeological and historical records, non-stationary Matérn kriging, and 1.852 catalogued urban settlements across 25 provincial masks establishes a rigorous baseline for modern Chinese demographic history.

# Sources

<div id="refs"></div>
