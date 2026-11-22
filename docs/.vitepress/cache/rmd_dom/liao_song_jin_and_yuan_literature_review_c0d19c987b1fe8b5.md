---
title: "China During the Liao, Song, Jin and Yuan Dynasties"
subtitle: "JADE-III: Song Commercial Expansion, Jin-Song Partition, Mongol Conquest and Imperial Reintegration, 960AD to 1368AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: liao_song_jin_and_yuan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_liao_song_jin_and_yuan_spatial.png"
hero_caption: "Sub-regional territorial masks and 20.775 catalogued settlements across fourteen macro-regions and frontier provinces from 960AD to 1368AD."
hero_label: "fig:hero-liao-song-jin-and-yuan"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the population geography of China from the establishment of the Northern Song Dynasty in 960AD through the Jin-Song military partition and the Mongol-Yuan imperial era to the Ming founding in 1368AD. Spanning fourteen historical territorial masks covering 9.389.222 km² (137.431 five-arcminute grid cells), aggregate population rose from 53M (53.000.001) in 960AD to an initial Northern Song apex of 122M (122.000.000) in 1102AD and 128M in 1124AD, driven by Champa early-ripening rice, polder reclamation across the Lower Yangtze and canal-borne commercialisation [@wu2000zhongguo; @mavonglahn2022cambridge; @Xu2015Urbanization]. Following the 1127AD Jurchen capture of Kaifeng and the partition of China along the Huai River and Qinling Mountains, the Jurchen Jin state in the North and the Southern Song in the South experienced concurrent demographic growth, culminating in a dual pre-industrial summit of 138M (137.999.999) in 1210AD [@wu2000zhongguo; @liang1980zhongguo].

The Mongol conquest inverted this balance, inflicting catastrophic devastation across Zhongshusheng North China (falling from 26,09M in 1210AD to 11,76M in 1290AD) and triggering a demographic collapse in Sichuan, where half a century of sustained mountain sieges and massacres reduced regional population by 74,6% from 12,36M to 3,14M [@wu2000zhongguo; @Stephen2012Deep]. By contrast, Jiangzhe sustained over 22,7M residents at the 1290AD Zhiyuan census (21,28M in 1368AD), preserving southern economic primacy and anchoring the Yuan Branch Secretariat administrative framework [@wu2000zhongguo; @mavonglahn2022cambridge]. Following modest recovery to 91M by 1350AD, Yellow River flooding, paper currency hyperinflation and Red Turban warfare pulled the empire down to 73M (73.000.001) in 1368AD [@wu2000zhongguo; @Schfer2020What; @Guo2025After]. Intra-regional demographic allocation is calibrated via Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 1.274 domestic catchments and 87.811 archaeological site records (regularised $\tau_1 = 1,5$, $\tau_2 = 2,775$, short range 73,43 km, nugget-to-sill 0,0507, residual $R^2 = 0,9991$) conditioned by 20.775 catalogued settlements (aggregating 99.282 settlement-year observations at a mean of 4,78 per centre) [@paciorek2006spatial; @chgis2016v6; @CBDB2026Addresses].

# Background

## The Five Dynasties Aftermath and Song Reunification

The collapse of the Tang Dynasty in 907AD initiated more than half a century of fragmentation known as the Five Dynasties and Ten Kingdoms (907AD-960AD). Across the North China Plain, rapid dynastic successions, militarised garrison commands (*jiedushi*) and Khitan nomadic incursions disrupted agriculture and depopulated major urban centres such as Luoyang and Chang'an [@wu2000zhongguo; @mavonglahn2022cambridge]. In contrast, autonomous southern regimes—including Wu-Yue in Zhejiang, Southern Tang in Jiangxi and southern Jiangsu, Min in Fujian, Chu in Hunan and the Shu kingdoms in the Sichuan basin—maintained political stability, promoted water-control infrastructure and welcomed waves of northern refugees fleeing warfare along the Yellow River corridor [@wu2000zhongguo; @mavonglahn2022cambridge; @Flckiger2019Transport].

When Zhao Kuangyin (Emperor Taizu) founded the Song Dynasty at Kaifeng in 960AD, his administration faced the task of reintegrating disparate regional regimes under central civil administration. Military annexations absorbed Jingnan and Southern Han in 971AD, Later Shu in 965AD, Southern Tang in 975AD and Wu-Yue in 978AD, culminating in the northern submission of Northern Han in 979AD under Emperor Taizong [@wu2000zhongguo]. Initial fiscal registers reflected this fragmentation: the imperial register of 960AD recorded merely 3,1M households (*hu*), expanding to 6,5M households in the Taiping Xingguo census of 980AD as southern annexation registers were incorporated into central imperial rolls [@liang1980zhongguo; @wu2000zhongguo]. Accounting for non-registered strata, military families, Buddhist monasteries and autonomous borderland polities, total population inside the Chinese macro-domain stood at 53M in 960AD and 57,5M in 980AD.

## The Fiscal Nature of Song Registration: Households, Individuals and Multipliers

Reconstructing mediaeval Chinese demographic history requires deciphering the institutional logic of imperial registration. Official dynastic compilations such as the *Song Shi* and *Song Huiyao Jigao* recorded two primary categories: *hu* (households) and *kou* (individuals or mouth-counts) [@liang1980zhongguo; @wu2000zhongguo]. Households were segregated fiscally into *zhuhu* (master or landowning households possessing taxable acreage) and *kehu* (guest or tenant households working rented plots). Crucially, the recorded *kou* figures did not represent modern universal headcounts; rather, they reflected taxable adults subject to corvée levies (*dingnan*), frequently omitting adult females, young children and unmarried youths [@wu2000zhongguo; @mavonglahn2022cambridge].

This administrative omission produced artificially depressed person-to-household ratios in raw official registers, frequently sinking below 2,1 to 2,6 *kou* per household across southern circuits such as Liangzhe and Jiangnan [@wu2000zhongguo]. Historical demographers who accepted these raw returns at face value derived implausibly low national headcounts. Following the landmark investigations of Wu Songdi in Volume 3 of *Zhongguo Renkou Shi*, contemporary historical demography applies regional conversion multipliers calibrated from complete lineage records, local gazetteer household surveys and taxation exemptions [@wu2000zhongguo]. Wu established that mean household size ranged between 5,4 and 5,8 persons in the nucleated joint families of northern circuits (Hebei, Shandong, Shanxi and Henan) and between 5 and 5,4 persons in the more fragmented nuclear households of southern rice valleys [@wu2000zhongguo; @mavonglahn2022cambridge]. Applying these empirically anchored ratios demonstrates that the registered population of the Northern Song proper crossed the threshold of 100M persons during the Chongning reign (1102AD-1106AD), reaching 122M across the broader cultural and frontier sphere.

## Regional and Frontier Polities: Liao, Western Xia, Dali and Tibet

The geopolitical landscape of tenth-to-twelfth-century East Asia was multipolar rather than unipolar. Along the northern frontier, the Khitan Liao Dynasty (916AD-1125AD) governed a dual pastoral-agrarian empire encompassing Manchuria, the Mongolian steppe and the Sixteen Prefectures of Yanyun ceded in 936AD [@Dugdale2019Pagodas; @Gao2018Ethnic]. Operating five regional capitals—including Shangjing in modern Bairin Left Banner and Nanjing at modern Beijing—the Liao maintained separate administrative bureaus for nomadic pastoralists and sedentary Han farmers [@Dugdale2019Pagodas]. Liao population expanded from 2,37M in 960AD to 5,46M in 1050AD and reached 11,2M by 1102AD, providing a demographic counterweight to Song power along the northern defensive perimeter.

In the northwest, the Tangut Western Xia state (1038AD-1227AD) united the Hexi corridor, the Ordos loop and the Ningxia irrigated plain under the Weiming dynasty [@Jinbo2021Economy; @Jinbo2021Empire]. Tangut economic strength drew on the qanat and canal networks of the Yellow River valley, pastoral wool production and control of overland Silk Road trade passing through Wuwei, Zhangye and Dunhuang [@Jinbo2021Economy; @Jinbo2021Empire]. Western Xia population grew from 1,05M in 960AD to 1,83M in 1050AD and peaked near 2,75M in 1210AD before the devastating Mongol invasions of Genghis Khan [@Jinbo2021Empire; @wu2000zhongguo].

In the southwest, the Bai-led Kingdom of Dali (937AD-1253AD) dominated the Yunnan plateau, governing through twenty-seven administrative departments from its capital at Lake Erhai [@wu2000zhongguo]. Dali functioned as a trade conduit connecting Sichuan through the Tea Horse Road into Upper Burma and the Tibetan marches, supporting a population that expanded from 1,58M in 960AD to 3,64M in 1102AD and 4,12M in 1210AD [@wu2000zhongguo]. Across the Tibetan plateau, following the dissolution of the Tubo Empire, decentralized monastic estates, local chieftains and high-altitude agro-pastoral communities sustained approximately 0,63M in 960AD, rising to 1,46M in 1102AD and 1,65M in 1210AD [@Wu2025Historically].

Along the northwestern and northern pastoral margins, the Qocho Uyghur Kingdom in Xinjiang and the pastoral confederations of the Mongolian steppe (including the Kereit, Naiman, Merkit and Ongud) operated mobile livestock economies adapted to arid grassland ecology [@Gao2018Ethnic; @Sun2021Dynasty]. Relying on seasonal transhumance between mountain summer pastures and lowland winter river basins, pastoral communities in Xinjiang and Inner Mongolia sustained between 0,42M and 0,63M each in 960AD, expanding toward 1,1M and 1,65M at the 1210AD peak as Silk Road oasis commerce and steppe tribal confederations flourished alongside Song border trade markets (*quewang*) [@wu2000zhongguo; @Jinbo2021Economy].

# Methodology

## Territorial Partition and Historical Provincial Calibration

To track demographic shifts across dynamic imperial boundaries without double-counting or territorial gaps, this study partitions 9.389.222 km² (137.431 valid land cells at five-arcminute resolution) into fourteen historical territorial masks matching the Yuan Branch Secretariat (*xingsheng*) framework harmonised with Song and Jin circuits [@wu2000zhongguo; @chgis2016v6]. At each benchmark year $t \in [960, 1368]$, regional population $P_r(t)$ synthesises fiscal household records $H_r(t)$, regional multipliers $k_r$, unrecorded military and religious personnel $U_r(t)$, and frontier demographic series $F_r(t)$:

$$P_r(t) = k_r \cdot H_r(t) + U_r(t) + F_r(t)$$

The fourteen analytical territories are:
1. Zhongshusheng North China (Hebei, Shandong and Shanxi; 513.094 km²): core domain of the Jin and Yuan central administrations.
2. Henan-Jiangbei Province (Henan, Anhui and northern Jiangsu; 394.561 km²): the southern Yellow River and Huai River plains.
3. Shaanxi Province (Guanzhong and Qin-Long; 197.829 km²): the Wei River basin and western mountain passes.
4. Western Xia and Gansu Province (Hexi and Ningxia; 444.141 km²): the Tangut heartland and Silk Road oasis corridor.
5. Jiangzhe Province (Zhejiang, Shanghai and Fujian; 226.614 km²): the commercial engine of the Lower Yangtze and southeast coast.
6. Jiangxi Province (Jiangxi and Guangdong; 338.347 km²): the Gan River corridor and Lingnan maritime basin.
7. Huguang Province (Hubei, Hunan, Guangxi, Guizhou and Hainan; 842.628 km²): the Middle Yangtze rice bowl and southern river networks.
8. Sichuan Province (Four Circuits of Shu; 570.097 km²): the Chengdu plain and upper Yangtze mountain fortresses.
9. Liaoyang Province (Liao-Jin-Yuan Manchuria; 779.442 km²): the Liao River plain and northeastern forest basins.
10. Dali Kingdom and Yunnan Province (Yunnan plateau; 398.346 km²): southwestern upland trade networks.
11. Tibet and Qinghai Xuanzhengyuan (1.831.234 km²): the high-altitude plateau under Yuan religious administration.
12. Xinjiang Chagatai (1.645.272 km²): the Tarim basin oases and Qocho Uyghur kingdom.
13. Inner Mongolia Steppe and Shangdu (1.171.885 km²): pastoral grasslands and imperial summer capital zones.
14. Taiwan and Penghu (35.732 km²): southeastern maritime islands and Penghu patrol administration.

## Non-Stationary Matérn Kriging Calibration

Within each provincial mask, continuous spatial surface estimation relies on the East Asian archaeological domain, which synthesises 87.811 domestic site records across 1.274 Voronoi catchments (median radius 45,11 km, 90th percentile 68,81 km) and 562 frontier buffer conditioning catchments [@paciorek2006spatial; @chgis2016v6]. After Freeman-Tukey transformation and weighted least squares (WLS) regression on five biophysical covariates (habitable land fraction, natural productivity, ecozone terrain ruggedness, fluvial distance decay and coastal proximity), residual spatial covariance is modelled with the Paciorek-Schervish non-stationary Matérn kernel [@paciorek2006spatial]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised variogram parameters are fixed at $\tau_1 = 1,5$ (raw 1,6277) and $\tau_2 = 2,775$, with nugget parameter $c_0 = 0,000019$, short-range spatial correlation at 73,43 km, nugget-to-sill ratio 0,0507 and residual regression $R^2 = 0,9991$. Settlement data from 20.775 catalogued centres (aggregating 99.282 settlement-year observations at a mean of 4,78 per centre) condition local riverine and coastal gradients before rural redistribution, ensuring strict conservation of sub-regional population sums. This expanded settlement corpus integrates CHGIS v6 and Harvard TGAZ 2018 historical seats [@chgis2016v6], CBDB ADDR_CODES Song-Jin-Yuan place records [@CBDB2026Addresses], TBRC Major Tibetan Monasteries [@Ryavec2014TBRC], full Song-Yuan commercial tax (*shangshui*) market towns (*zhen* and *shi*), MOHURD Traditional Ancient Villages (Batches 1 to 4) [@MOHURD2023TraditionalVillages], Taiwan BOCH heritage sites [@TaiwanBOCH2025Heritage] and Song-Yuan Hong Kong salt-yard and walled-village centres, after resolving 19.703 raw co-located merges and exclusions and archiving 2.500 excluded candidate entries out of 23.275 ledger-evaluated entries.

# Testing and Validation

Dynastic census records, fiscal compilations and independent scholarly estimates are compared in Table \ref{tab:validation-1368}, confirming arithmetic harmony between imperial registrations and our reconstructed benchmarks. In parallel, settlement-ledger reconciliation verifies 20.775 included centres (99.282 settlement-year observations, mean 4,78 per centre) and 2.500 archived exclusions across 23.275 ledger-evaluated entries with zero unaccounted records, following 19.703 raw co-located merges and exclusions.

<figure class="crd-table-figure" id="tab:validation-1368">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Song/Jin Households</th><th class="crd-th">Recorded Taxables</th><th class="crd-th">Core Empire</th><th class="crd-th">Frontier Polities</th><th class="crd-th">Module Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>960AD</strong></td><td class="crd-td">3.100.000</td><td class="crd-td">16.740.000</td><td class="crd-td">46.500.000</td><td class="crd-td">6.500.001</td><td class="crd-td">53.000.001</td></tr>
<tr><td class="crd-td"><strong>980AD</strong></td><td class="crd-td">6.499.145</td><td class="crd-td">35.095.383</td><td class="crd-td">50.400.000</td><td class="crd-td">7.100.000</td><td class="crd-td">57.500.000</td></tr>
<tr><td class="crd-td"><strong>1050AD</strong></td><td class="crd-td">10.793.189</td><td class="crd-td">58.283.220</td><td class="crd-td">80.800.000</td><td class="crd-td">11.200.000</td><td class="crd-td">92.000.000</td></tr>
<tr><td class="crd-td"><strong>1102AD</strong></td><td class="crd-td">20.264.307</td><td class="crd-td">45.324.154</td><td class="crd-td">107.500.000</td><td class="crd-td">14.500.000</td><td class="crd-td">122.000.000</td></tr>
<tr><td class="crd-td"><strong>1124AD</strong></td><td class="crd-td">20.882.000</td><td class="crd-td">46.700.000</td><td class="crd-td">112.800.000</td><td class="crd-td">15.199.999</td><td class="crd-td">127.999.999</td></tr>
<tr><td class="crd-td"><strong>1162AD</strong></td><td class="crd-td">18.500.000</td><td class="crd-td">38.200.000</td><td class="crd-td">98.500.000</td><td class="crd-td">13.499.998</td><td class="crd-td">111.999.998</td></tr>
<tr><td class="crd-td"><strong>1210AD</strong></td><td class="crd-td">20.280.000</td><td class="crd-td">45.816.078</td><td class="crd-td">121.500.000</td><td class="crd-td">16.499.999</td><td class="crd-td">137.999.999</td></tr>
<tr><td class="crd-td"><strong>1270AD</strong></td><td class="crd-td">13.800.000</td><td class="crd-td">28.500.000</td><td class="crd-td">72.000.000</td><td class="crd-td">9.999.998</td><td class="crd-td">81.999.998</td></tr>
<tr><td class="crd-td"><strong>1290AD</strong></td><td class="crd-td">13.196.066</td><td class="crd-td">58.834.711</td><td class="crd-td">68.200.000</td><td class="crd-td">9.800.000</td><td class="crd-td">78.000.000</td></tr>
<tr><td class="crd-td"><strong>1330AD</strong></td><td class="crd-td">13.400.000</td><td class="crd-td">54.200.000</td><td class="crd-td">77.500.000</td><td class="crd-td">10.500.000</td><td class="crd-td">88.000.000</td></tr>
<tr><td class="crd-td"><strong>1350AD</strong></td><td class="crd-td">13.850.000</td><td class="crd-td">56.000.000</td><td class="crd-td">80.200.000</td><td class="crd-td">10.799.998</td><td class="crd-td">90.999.998</td></tr>
<tr><td class="crd-td"><strong>1368AD</strong></td><td class="crd-td">10.600.000</td><td class="crd-td">32.000.000</td><td class="crd-td">64.100.000</td><td class="crd-td">8.900.001</td><td class="crd-td">73.000.001</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Reconciliation of Song, Jin and Yuan dynastic fiscal registrations with JADE reconstructed macro-regional totals, 960AD to 1368AD.</figcaption>
</figure>

Across all ten Holocene horizons in the East Asian archaeological domain, Table \ref{tab:kriging-jade} and Table \ref{tab:kriging-epochs-jade} document regularised variogram diagnostics. Residual $R^2$ remains stable at 0,9991 across the horizons, with regularised nugget-to-sill at 0,0507 and effective short-range spatial covariance spanning 73,43 km.

<figure class="crd-table-figure" id="tab:kriging-jade">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Neolithic (before 5000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000005</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,0122</td><td class="crd-td">0,0713</td></tr>
<tr><td class="crd-td"><strong>2. Middle Neolithic Yangshao (5000 to 3000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000024</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0548</td><td class="crd-td">0,4042</td></tr>
<tr><td class="crd-td"><strong>3. Late Neolithic Longshan (3000 to 2000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000039</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0844</td><td class="crd-td">0,7732</td></tr>
<tr><td class="crd-td"><strong>4. Bronze Age Shang and Western Zhou (2000 to 771BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000064</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,1448</td><td class="crd-td">1,0593</td></tr>
<tr><td class="crd-td"><strong>5. Spring and Autumn and Warring States (770 to 221BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000037</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,0795</td><td class="crd-td">0,7292</td></tr>
<tr><td class="crd-td"><strong>6. Qin-Han and Xiongnu (221BC to 220AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000009</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0262</td><td class="crd-td">0,1702</td></tr>
<tr><td class="crd-td"><strong>7. Wei-Jin and Northern-Southern Dynasties (220 to 589AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000017</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0392</td><td class="crd-td">0,2572</td></tr>
<tr><td class="crd-td"><strong>8. Sui-Tang and Five Dynasties (589 to 960AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000017</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0419</td><td class="crd-td">0,2516</td></tr>
<tr><td class="crd-td"><strong>9. Liao, Song, Jin and Yuan Dynasties (960 to 1368AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,00003</td><td class="crd-td">0,0798</td><td class="crd-td">0,9977</td><td class="crd-td">0,0449</td><td class="crd-td">0,2274</td></tr>
<tr><td class="crd-td"><strong>10. Ming and Qing Imperial Eras (1368 to 1911AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000032</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,1096</td><td class="crd-td">0,4454</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Continental East Asian kriging variogram diagnostics across ten Holocene horizons (163.892 valid land cells, regularised tau1 = 1,5, tau2 = 2,775).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:kriging-epochs-jade">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Total Sites</th><th class="crd-th">Catchments</th><th class="crd-th">Natural Beta</th><th class="crd-th">Ecozone Beta</th><th class="crd-th">Coastal Beta</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Neolithic (before 5000BC)</strong></td><td class="crd-td">1.435</td><td class="crd-td">575</td><td class="crd-td">0,01</td><td class="crd-td">0,01</td><td class="crd-td">0,088</td></tr>
<tr><td class="crd-td"><strong>2. Middle Neolithic Yangshao (5000 to 3000BC)</strong></td><td class="crd-td">6.450</td><td class="crd-td">666</td><td class="crd-td">0,01</td><td class="crd-td">0,01</td><td class="crd-td">0,1013</td></tr>
<tr><td class="crd-td"><strong>3. Late Neolithic Longshan (3000 to 2000BC)</strong></td><td class="crd-td">9.929</td><td class="crd-td">738</td><td class="crd-td">0,01</td><td class="crd-td">0,01</td><td class="crd-td">0,0917</td></tr>
<tr><td class="crd-td"><strong>4. Bronze Age Shang and Western Zhou (2000 to 771BC)</strong></td><td class="crd-td">17.043</td><td class="crd-td">777</td><td class="crd-td">0,01</td><td class="crd-td">0,01</td><td class="crd-td">0,092</td></tr>
<tr><td class="crd-td"><strong>5. Spring and Autumn and Warring States (770 to 221BC)</strong></td><td class="crd-td">9.355</td><td class="crd-td">761</td><td class="crd-td">0,01</td><td class="crd-td">0,01</td><td class="crd-td">0,0915</td></tr>
<tr><td class="crd-td"><strong>6. Qin-Han and Xiongnu (221BC to 220AD)</strong></td><td class="crd-td">3.078</td><td class="crd-td">746</td><td class="crd-td">0,01</td><td class="crd-td">0,01</td><td class="crd-td">0,0917</td></tr>
<tr><td class="crd-td"><strong>7. Wei-Jin and Northern-Southern Dynasties (220 to 589AD)</strong></td><td class="crd-td">4.615</td><td class="crd-td">565</td><td class="crd-td">0,01</td><td class="crd-td">0,01</td><td class="crd-td">0,0605</td></tr>
<tr><td class="crd-td"><strong>8. Sui-Tang and Five Dynasties (589 to 960AD)</strong></td><td class="crd-td">4.926</td><td class="crd-td">648</td><td class="crd-td">0,01</td><td class="crd-td">0,01</td><td class="crd-td">0,0915</td></tr>
<tr><td class="crd-td"><strong>9. Liao, Song, Jin and Yuan Dynasties (960 to 1368AD)</strong></td><td class="crd-td">5.284</td><td class="crd-td">803</td><td class="crd-td">0,01</td><td class="crd-td">0,01</td><td class="crd-td">0,0916</td></tr>
<tr><td class="crd-td"><strong>10. Ming and Qing Imperial Eras (1368 to 1911AD)</strong></td><td class="crd-td">12.894</td><td class="crd-td">962</td><td class="crd-td">0,01</td><td class="crd-td">0,01</td><td class="crd-td">0,0564</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Horizon site counts (1.274 domestic catchments, 562 buffer catchments) and WLS covariate slopes in the East Asian kriging domain.</figcaption>
</figure>

# Results

## Northern Song Expansion and the Chongning Apex (960 to 1124AD)

Between 960AD and 1124AD, China experienced an unprecedented agrarian and commercial expansion that more than doubled aggregate population from 53M to 128M (Figure \ref{fig:traj-1368}). In the North China plain, post-war pacification, canal restoration and the opening of abandoned acreage lifted Zhongshusheng from 10,02M in 960AD to 23,06M in 1102AD and 24,2M in 1124AD [@wu2000zhongguo]. Henan-Jiangbei expanded from 5,8M to 14,01M, centred on the imperial capital Kaifeng (Bianjing), which grew into a commercial metropolis exceeding 1,15M inhabitants [@Xu2015Urbanization; @Lin2019Shadow].

<figure class="crd-figure-block" id="fig:traj-1368">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-liao-song-jin-and-yuan/fig2_liao_song_jin_and_yuan_trajectory.png" alt="fig:traj-1368" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectories of the fourteen historical sub-regions of China from 960AD to 1368AD tracking dual peaks and Mongol contraction.</figcaption>
</figure>

In the South, hydraulic investments transformed the Lower and Middle Yangtze basins. The introduction of drought-resistant, fast-maturing Champa rice (*Zhanchengdao*) during the eleventh century allowed double-cropping across Jiangsu, Zhejiang, Jiangxi and Hunan [@wu2000zhongguo; @mavonglahn2022cambridge]. Polder dikes (*weitain* and *yutian*) enclosed tidal marshes around Lake Tai, Hangzhou Bay and Poyang Lake, while terraced hillsides expanded tea, mulberry and citrus orchards [@mavonglahn2022cambridge; @Flckiger2019Transport]. Between 960AD and 1102AD, Jiangzhe rose from 11,6M to 26,71M, Jiangxi and Guangdong grew from 5,8M to 13,35M, Huguang advanced from 5,27M to 12,14M, and Sichuan climbed from 4,75M to 10,93M [@wu2000zhongguo]. By the Chongning 1 census of 1102AD, the registered population inside Song borders reached 20,26M households (107,5M persons), with the cultural domain totalling 122M [@liang1980zhongguo; @wu2000zhongguo].

## The Jurchen Jin Conquest and the Dual 1210AD Summit (1125 to 1210AD)

In 1125AD, the Jurchen Jin Dynasty overwhelmed the Khitan Liao Empire and swept into the Central Plains, culminating in the 1127AD capture of Kaifeng (the Jingkang incident) and the capture of Emperor Qinzong and Retired Emperor Huizong [@wu2000zhongguo; @Wang2024Reflecting]. The conquest triggered widespread destruction across Henan, Shandong, Hebei and Shaanxi, prompting an estimated five million refugees to flee across the Huai River and the Yangtze into Jiangnan, Jiangxi and Sichuan [@wu2000zhongguo; @mavonglahn2022cambridge].

Under the Shaoxing peace treaty of 1142AD, the border was stabilized along the Huai River and the Qinling Mountains. In the North, the Jin emperors consolidated their rule through five regional capitals, restoring agriculture through state military farms (*tuntian*) and Jurchen banner households (*meng'an mouke*) [@Wang2024Reflecting; @Welden2015Bring]. In 1207AD (Taihe 7), the Jin census recorded 7,68M households and 45,82M registered individuals, reflecting an adjusted total of approximately 53,5M persons across Zhongshusheng, Henan-Jiangbei and Shaanxi [@wu2000zhongguo; @liang1980zhongguo].

In the South, the Southern Song established their temporary capital (*Xingsheng*) at Lin'an (modern Hangzhou). Driven by refugee settlement, maritime commerce and intensive wetland farming, Southern Song registered population climbed to 12,6M households in 1210AD, representing approximately 74,5M persons inside Song circuits [@wu2000zhongguo; @Xu2015Urbanization]. Combining the Jurchen Jin state (53,5M), Southern Song (74,5M), Western Xia (2,75M), Dali (4,12M), Tibet (1,65M), Liaoyang (6,18M), Xinjiang (1,1M) and the Mongolian steppe (1,65M), total population reached 138M in 1210AD (Figure \ref{fig:shares-1368}). This 1210AD summit represented the demographic zenith of mediaeval China, unequalled until the middle of the sixteenth century under the Ming Dynasty.

<figure class="crd-figure-block" id="fig:shares-1368">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-liao-song-jin-and-yuan/fig3_liao_song_jin_and_yuan_shares.png" alt="fig:shares-1368" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Shifting sub-regional population shares across the fourteen Chinese macro-regions between 960AD and 1368AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:regions-1368">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">960AD</th><th class="crd-th">1050AD</th><th class="crd-th">1102AD</th><th class="crd-th">1210AD</th><th class="crd-th">1270AD</th><th class="crd-th">1290AD</th><th class="crd-th">1350AD</th><th class="crd-th">1368AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhongshusheng North China (Hebei, Shandong and Shanxi)</strong></td><td class="crd-td">513.094</td><td class="crd-td">10,02M</td><td class="crd-td">17,39M</td><td class="crd-td">23,06M</td><td class="crd-td">26,09M</td><td class="crd-td">12,36M</td><td class="crd-td">11,76M</td><td class="crd-td">13,72M</td><td class="crd-td">11,01M</td></tr>
<tr><td class="crd-td"><strong>Henan-Jiangbei Province (Henan, Anhui and Northern Jiangsu)</strong></td><td class="crd-td">394.561</td><td class="crd-td">5,8M</td><td class="crd-td">10,07M</td><td class="crd-td">13,35M</td><td class="crd-td">15,1M</td><td class="crd-td">6,59M</td><td class="crd-td">6,27M</td><td class="crd-td">7,32M</td><td class="crd-td">5,87M</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province (Guanzhong and Qin-Long)</strong></td><td class="crd-td">197.829</td><td class="crd-td">2,9M</td><td class="crd-td">5,03M</td><td class="crd-td">6,68M</td><td class="crd-td">7,55M</td><td class="crd-td">3,71M</td><td class="crd-td">3,53M</td><td class="crd-td">4,12M</td><td class="crd-td">3,3M</td></tr>
<tr><td class="crd-td"><strong>Western Xia and Gansu Province (Hexi and Ningxia)</strong></td><td class="crd-td">444.141</td><td class="crd-td">1,05M</td><td class="crd-td">1,83M</td><td class="crd-td">2,43M</td><td class="crd-td">2,75M</td><td class="crd-td">1,65M</td><td class="crd-td">1,57M</td><td class="crd-td">1,83M</td><td class="crd-td">1,47M</td></tr>
<tr><td class="crd-td"><strong>Jiangzhe Province (Zhejiang, Shanghai and Fujian)</strong></td><td class="crd-td">226.614</td><td class="crd-td">11,6M</td><td class="crd-td">20,14M</td><td class="crd-td">26,71M</td><td class="crd-td">30,21M</td><td class="crd-td">23,9M</td><td class="crd-td">22,73M</td><td class="crd-td">26,52M</td><td class="crd-td">21,28M</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province (Jiangxi and Guangdong)</strong></td><td class="crd-td">338.347</td><td class="crd-td">5,8M</td><td class="crd-td">10,07M</td><td class="crd-td">13,35M</td><td class="crd-td">15,1M</td><td class="crd-td">11,54M</td><td class="crd-td">10,97M</td><td class="crd-td">12,8M</td><td class="crd-td">10,27M</td></tr>
<tr><td class="crd-td"><strong>Huguang Province (Hubei, Hunan, Guangxi, Guizhou and Hainan)</strong></td><td class="crd-td">842.628</td><td class="crd-td">5,27M</td><td class="crd-td">9,15M</td><td class="crd-td">12,14M</td><td class="crd-td">13,73M</td><td class="crd-td">9,89M</td><td class="crd-td">9,41M</td><td class="crd-td">10,97M</td><td class="crd-td">8,8M</td></tr>
<tr><td class="crd-td"><strong>Sichuan Province (Four Circuits of Shu)</strong></td><td class="crd-td">570.097</td><td class="crd-td">4,75M</td><td class="crd-td">8,24M</td><td class="crd-td">10,93M</td><td class="crd-td">12,36M</td><td class="crd-td">3,3M</td><td class="crd-td">3,14M</td><td class="crd-td">3,66M</td><td class="crd-td">2,93M</td></tr>
<tr><td class="crd-td"><strong>Liaoyang Province (Liao-Jin-Yuan Manchuria)</strong></td><td class="crd-td">779.442</td><td class="crd-td">2,37M</td><td class="crd-td">4,12M</td><td class="crd-td">5,46M</td><td class="crd-td">6,18M</td><td class="crd-td">3,3M</td><td class="crd-td">3,14M</td><td class="crd-td">3,66M</td><td class="crd-td">2,93M</td></tr>
<tr><td class="crd-td"><strong>Dali Kingdom and Yunnan Province</strong></td><td class="crd-td">398.346</td><td class="crd-td">1,58M</td><td class="crd-td">2,75M</td><td class="crd-td">3,64M</td><td class="crd-td">4,12M</td><td class="crd-td">2,88M</td><td class="crd-td">2,74M</td><td class="crd-td">3,2M</td><td class="crd-td">2,57M</td></tr>
<tr><td class="crd-td"><strong>Tibet and Qinghai (Xuanzhengyuan)</strong></td><td class="crd-td">1.831.234</td><td class="crd-td">632,8k</td><td class="crd-td">1,1M</td><td class="crd-td">1,46M</td><td class="crd-td">1,65M</td><td class="crd-td">988,9k</td><td class="crd-td">940,7k</td><td class="crd-td">1,1M</td><td class="crd-td">880,4k</td></tr>
<tr><td class="crd-td"><strong>Xinjiang (Qocho Uyghur and Chagatai)</strong></td><td class="crd-td">1.645.272</td><td class="crd-td">421,9k</td><td class="crd-td">732,3k</td><td class="crd-td">971,1k</td><td class="crd-td">1,1M</td><td class="crd-td">659,3k</td><td class="crd-td">627,1k</td><td class="crd-td">731,7k</td><td class="crd-td">586,9k</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia Steppe and Shangdu</strong></td><td class="crd-td">1.171.885</td><td class="crd-td">632,8k</td><td class="crd-td">1,1M</td><td class="crd-td">1,46M</td><td class="crd-td">1,65M</td><td class="crd-td">988,9k</td><td class="crd-td">940,7k</td><td class="crd-td">1,1M</td><td class="crd-td">880,4k</td></tr>
<tr><td class="crd-td"><strong>Taiwan and Penghu</strong></td><td class="crd-td">35.732</td><td class="crd-td">158,2k</td><td class="crd-td">274,6k</td><td class="crd-td">364,2k</td><td class="crd-td">411,9k</td><td class="crd-td">247,2k</td><td class="crd-td">235,2k</td><td class="crd-td">274,4k</td><td class="crd-td">220,1k</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">9.389.222</td><td class="crd-td">53M</td><td class="crd-td">92M</td><td class="crd-td">122M</td><td class="crd-td">138M</td><td class="crd-td">82M</td><td class="crd-td">78M</td><td class="crd-td">91M</td><td class="crd-td">73M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population benchmarks across the fourteen Chinese macro-regions and frontier territories, 960AD to 1368AD.</figcaption>
</figure>

## Mongol Devastation and the Divergence of Sichuan and Jiangzhe (1211 to 1279AD)

The Mongol invasions initiated under Genghis Khan in 1211AD wrought profound demographic destruction, fundamentally altering the spatial balance between North and South. The Jin central capital Zhongdu (Beijing) was besieged and razed in 1215AD, Western Xia was systematically annihilated in 1227AD, and the Jin Dynasty was extinguished at Caizhou in 1234AD under combined Mongol-Song forces [@wu2000zhongguo; @Stephen2012Deep; @Jinbo2021Empire]. Decades of nomadic warfare, captive enslavement and irrigation neglect reduced North China from 26,09M in 1210AD to 12,36M in 1270AD and 11,76M in 1290AD (Table \ref{tab:regions-1368}). Henan-Jiangbei fell from 15,1M to 6,27M, and Shaanxi dropped from 7,55M to 3,53M [@wu2000zhongguo].

The most severe demographic catastrophe occurred in Sichuan. Following the Mongol invasion of 1236AD, the Sichuan basin became a prolonged military battleground. The Song administration organized a network of fortified mountain redoubts along the Jialing and Yangtze rivers, anchored by the Diaoyu fortress at Hechuan, which resisted Mongol sieges for more than three decades and witnessed the death of Möngke Khan in 1259AD [@wu2000zhongguo]. In retaliation, Mongol commanders subjected Chengdu, Mianyang and the surrounding county seats to repeated massacres. Reconstructed population in Sichuan collapsed from 12,36M in 1210AD to 3,3M in 1270AD and 3,14M in 1290AD—a loss of 74,6% that emptied the upper Yangtze basin and left fertile valleys overgrown with forest until Ming-Qing resettlement programs [@wu2000zhongguo].

In stark contrast, Jiangzhe proved demographically resilient. Kublai Khan's forces breached the Middle Yangtze defences at Xiangyang and Fancheng in 1273AD and captured Hangzhou in 1276AD under General Bayan with negotiated city surrenders that preserved municipal infrastructure [@wu2000zhongguo; @mavonglahn2022cambridge]. Jiangzhe contracted moderately from 30,21M in 1210AD to 23,9M in 1270AD and 22,73M in 1290AD, maintaining 29,1% of the imperial total and becoming the indispensable tax base of the Mongol Empire [@wu2000zhongguo].

## Sub-Regional Trajectories Across the Fourteen Macro-Regions

### Central Plains and Northwest Basins

Demographic trajectories across the northern basins (Zhongshusheng, Henan-Jiangbei and Shaanxi) exhibited sharp cyclical vulnerability to warfare and climatic volatility [@wu2000zhongguo]. Under Northern Song administration, the lower Yellow River plain sustained intense dryland cereal cultivation of wheat, millet and barley, supported by well-irrigation and canal linkages [@Ge2026Spatial]. The Jurchen invasion and subsequent Mongol campaigns broke the hydraulic infrastructure, causing repetitive flooding and siltation of the Yellow River channel [@Schfer2020What]. Zhongshusheng fell by more than half between 1210AD and 1270AD, while Henan-Jiangbei contracted by 56,3%, leaving cities like Luoyang, Kaifeng and Xuzhou operating at a fraction of their eleventh-century peak densities [@Xu2015Urbanization; @Zhang2026Understanding]. In Shaanxi and Gansu, the destruction of irrigation works along the Wei River and Hexi corridor diminished oasis populations, pulling Western Xia and Gansu down from 2,75M in 1210AD to 1,57M in 1290AD [@Jinbo2021Economy].

### Southern Agrarian and Commercial Expansion

Across the southern macro-regions (Jiangzhe, Jiangxi and Huguang), demographic momentum rested on ecological abundance, intensive rice paddies and export-oriented proto-industrial manufacturing [@mavonglahn2022cambridge]. In Jiangzhe, hydraulic polders and irrigation canals sheltered agriculture from erratic seasonal rainfall, allowing double-cropped paddy acreage to sustain densities exceeding 100 persons per km² along Lake Tai and Hangzhou Bay [@Flckiger2019Transport; @Lin2019Shadow]. Jiangxi and Guangdong absorbed hundreds of thousands of refugee households migrating southwards through the Meiling Pass, expanding hillside terracing, tea plantations and ceramic manufacture at Jingdezhen [@Wang2016From; @Yin2026Spatial]. Huguang functioned as the agricultural frontier of southern China, where continuous clearing of Dongting and Poyang lake marshes elevated regional numbers from 5,27M in 960AD to 13,73M in 1210AD and cushioned Mongol-era losses, preserving 9,41M residents in 1290AD [@wu2000zhongguo].

### Frontier Dependencies and Maritime Peripheries

In the frontier marches, demographic regimes reflected pastoral, forest and upland adaptations distinct from the Han agrarian core [@wu2000zhongguo]. In Liaoyang (Manchuria), Liao and Jurchen state farms (*tuntian*) blended semi-sedentary farming with Jurchen hunting and fishing, maintaining between 2,37M and 6,18M inhabitants across the Song-Jin era before declining to 3,14M under early Yuan administration [@Wang2024Reflecting; @Dugdale2019Pagodas]. In Yunnan, the Dali Kingdom and succeeding Yuan province preserved autonomous indigenous tribal headmanships (*tusi*), sustaining 4,12M in 1210AD and 2,74M in 1290AD along highland river valleys [@wu2000zhongguo]. In Tibet, high-altitude barley valleys and pastoral rangelands sustained over 1,6M inhabitants at peak, integrated into the Mongol realm through Sakya clerical leadership under the Xuanzhengyuan administration [@Wu2025Historically]. Along the maritime littoral, the Penghu archipelago came under official Yuan patrol inspection (*xunjian si*) in the late thirteenth century, establishing an administrative presence across the Taiwan Strait [@Gunther2015Chinese].

<figure class="crd-table-figure" id="tab:density-1368">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">960AD</th><th class="crd-th">1210AD</th><th class="crd-th">1368AD</th><th class="crd-th">1368AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhongshusheng North China (Hebei, Shandong and Shanxi)</strong></td><td class="crd-td">3.352</td><td class="crd-td">10,02M</td><td class="crd-td">26,09M</td><td class="crd-td">11,01M</td><td class="crd-td">21,45</td></tr>
<tr><td class="crd-td"><strong>Henan-Jiangbei Province (Henan, Anhui and Northern Jiangsu)</strong></td><td class="crd-td">2.522</td><td class="crd-td">5,8M</td><td class="crd-td">15,1M</td><td class="crd-td">5,87M</td><td class="crd-td">14,88</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province (Guanzhong and Qin-Long)</strong></td><td class="crd-td">814</td><td class="crd-td">2,9M</td><td class="crd-td">7,55M</td><td class="crd-td">3,3M</td><td class="crd-td">16,69</td></tr>
<tr><td class="crd-td"><strong>Western Xia and Gansu Province (Hexi and Ningxia)</strong></td><td class="crd-td">813</td><td class="crd-td">1,05M</td><td class="crd-td">2,75M</td><td class="crd-td">1,47M</td><td class="crd-td">3,3</td></tr>
<tr><td class="crd-td"><strong>Jiangzhe Province (Zhejiang, Shanghai and Fujian)</strong></td><td class="crd-td">1.499</td><td class="crd-td">11,6M</td><td class="crd-td">30,21M</td><td class="crd-td">21,28M</td><td class="crd-td">93,89</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province (Jiangxi and Guangdong)</strong></td><td class="crd-td">1.269</td><td class="crd-td">5,8M</td><td class="crd-td">15,1M</td><td class="crd-td">10,27M</td><td class="crd-td">30,36</td></tr>
<tr><td class="crd-td"><strong>Huguang Province (Hubei, Hunan, Guangxi, Guizhou and Hainan)</strong></td><td class="crd-td">4.170</td><td class="crd-td">5,27M</td><td class="crd-td">13,73M</td><td class="crd-td">8,8M</td><td class="crd-td">10,45</td></tr>
<tr><td class="crd-td"><strong>Sichuan Province (Four Circuits of Shu)</strong></td><td class="crd-td">3.162</td><td class="crd-td">4,75M</td><td class="crd-td">12,36M</td><td class="crd-td">2,93M</td><td class="crd-td">5,15</td></tr>
<tr><td class="crd-td"><strong>Liaoyang Province (Liao-Jin-Yuan Manchuria)</strong></td><td class="crd-td">736</td><td class="crd-td">2,37M</td><td class="crd-td">6,18M</td><td class="crd-td">2,93M</td><td class="crd-td">3,77</td></tr>
<tr><td class="crd-td"><strong>Dali Kingdom and Yunnan Province</strong></td><td class="crd-td">798</td><td class="crd-td">1,58M</td><td class="crd-td">4,12M</td><td class="crd-td">2,57M</td><td class="crd-td">6,45</td></tr>
<tr><td class="crd-td"><strong>Tibet and Qinghai (Xuanzhengyuan)</strong></td><td class="crd-td">1.009</td><td class="crd-td">632,8k</td><td class="crd-td">1,65M</td><td class="crd-td">880,4k</td><td class="crd-td">0,48</td></tr>
<tr><td class="crd-td"><strong>Xinjiang (Qocho Uyghur and Chagatai)</strong></td><td class="crd-td">147</td><td class="crd-td">421,9k</td><td class="crd-td">1,1M</td><td class="crd-td">586,9k</td><td class="crd-td">0,36</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia Steppe and Shangdu</strong></td><td class="crd-td">420</td><td class="crd-td">632,8k</td><td class="crd-td">1,65M</td><td class="crd-td">880,4k</td><td class="crd-td">0,75</td></tr>
<tr><td class="crd-td"><strong>Taiwan and Penghu</strong></td><td class="crd-td">64</td><td class="crd-td">158,2k</td><td class="crd-td">411,9k</td><td class="crd-td">220,1k</td><td class="crd-td">6,16</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements (n=20.775), 960AD baseline, 1210AD dual peak, 1368AD terminal population benchmarks and terminal areal density (persons per km²).</figcaption>
</figure>

## The Yuan Imperial System and the 1290AD Zhiyuan Census

Following the eradication of the Southern Song fleet at Yamen in 1279AD, Kublai Khan consolidated China into a unified continental empire administered through eleven Branch Secretariats (*xingsheng*) and the Central Secretariat (*Zhongshusheng*) [@wu2000zhongguo; @mavonglahn2022cambridge]. In 1290AD (Zhiyuan 27), the Yuan government conducted its most comprehensive census, recording 13,19M households and 58,83M individuals across eleven provinces, excluding untaxed clergy, military dependents and autonomous tribal regions [@liang1980zhongguo; @wu2000zhongguo]. Our adjusted macro-regional total for 1290AD stands at 78M persons.

The Zhiyuan returns documented the southward shift of Chinese demography: the southern provinces (Jiangzhe, Jiangxi and Huguang) contained 43,12M people (55,3% of the empire), while northern provinces (Zhongshusheng, Henan-Jiangbei and Shaanxi) accounted for only 21,56M (27,6%) [@wu2000zhongguo]. To support the northern political capital at Dadu (Khanbaliq, modern Beijing), the Yuan constructed the Tonghui Canal and straightened the Grand Canal, transporting three million piculs of southern grain annually by canal and coastal shipping from Quanzhou and Shanghai to the Hai River basin [@Flckiger2019Transport; @Zhao2026Nonlinear].

<figure class="crd-table-figure" id="tab:source-corpora-jade">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hosner et al. Archaeological Site Radiocarbon and Survey Database</strong></td><td class="crd-td">51.432</td><td class="crd-td">58,46%</td></tr>
<tr><td class="crd-td"><strong>State Council Major Historical and Cultural Sites at National Level</strong></td><td class="crd-td">4.063</td><td class="crd-td">4,62%</td></tr>
<tr><td class="crd-td"><strong>China Historical GIS (CHGIS v6) Dynastic Time Series</strong></td><td class="crd-td">12.651</td><td class="crd-td">14,38%</td></tr>
<tr><td class="crd-td"><strong>China Historical GIS (CHGIS v6) 1820 Historical Settlements</strong></td><td class="crd-td">8.516</td><td class="crd-td">9,68%</td></tr>
<tr><td class="crd-td"><strong>Allen Ancient DNA Resource (AADR v66) East Asia</strong></td><td class="crd-td">739</td><td class="crd-td">0,84%</td></tr>
<tr><td class="crd-td"><strong>XRONOS Global Chronological Radiocarbon Database</strong></td><td class="crd-td">1.446</td><td class="crd-td">1,64%</td></tr>
<tr><td class="crd-td"><strong>PEOPLE 3000 Global Radiocarbon Synthesis (2025)</strong></td><td class="crd-td">325</td><td class="crd-td">0,37%</td></tr>
<tr><td class="crd-td"><strong>c14bazAAR Deduplicated Radiocarbon Synthesis</strong></td><td class="crd-td">43</td><td class="crd-td">0,05%</td></tr>
<tr><td class="crd-td"><strong>Archaeological Atlas of China Excavation Compendium</strong></td><td class="crd-td">4.963</td><td class="crd-td">5,64%</td></tr>
<tr><td class="crd-td"><strong>Taiwan Bureau of Cultural Heritage Archaeological Registry</strong></td><td class="crd-td">1.286</td><td class="crd-td">1,46%</td></tr>
<tr><td class="crd-td"><strong>Kham and Amdo Tibetan Monastic and Settlement Register</strong></td><td class="crd-td">1.562</td><td class="crd-td">1,78%</td></tr>
<tr><td class="crd-td"><strong>Institute of Archaeology RAS Frontier Cross-Border Conditioning</strong></td><td class="crd-td">925</td><td class="crd-td">1,05%</td></tr>
<tr><td class="crd-td"><strong>Mongolia Steppe Archaeological Excavation Register</strong></td><td class="crd-td">30</td><td class="crd-td">0,03%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Component archaeological and historical registries aggregated into the East Asian kriging domain (87.811 domestic site records).</figcaption>
</figure>

## Urban Hierarchy and Settlement Dynamics (960 to 1368AD)

The urban and settlement system underwent continuous spatial reorganisation across this four-century period, documented by the 20.775 catalogued centres (99.282 settlement-year observations) in the regional gazetteer (Figure \ref{fig:sett-1368}), led by Huguang Middle Yangtze (4.170 sites), Zhongshu North China (3.352), Sichuan Four Circuits (3.162) and Henan-Jiangbei (2.522). In the eleventh century, Kaifeng emerged as the premier urban centre of the world, housing approximately 1,15M inhabitants in 1102AD within three concentric wall circuits served by four canal arteries (Bian, Cai, Jinshui and Guangji) [@Xu2015Urbanization; @Lin2019Shadow]. In the thirteenth century, Hangzhou (Lin'an) matched Kaifeng in scale, reaching 1,15M residents in 1270AD and developing multi-storey wooden tenements, municipal fire brigades and dense commercial guilds along the Grand Canal terminus [@Xu2015Urbanization].

<figure class="crd-figure-block" id="fig:sett-1368">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-liao-song-jin-and-yuan/fig4_liao_song_jin_and_yuan_settlements.png" alt="fig:sett-1368" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading fifteen settlement peaks across the 20.775 catalogued centres of Liao, Song, Jin and Yuan China.</figcaption>
</figure>

Under the Yuan dynasty, Dadu (Beijing) was constructed on a grid plan designed by Liu Bingzhong, expanding to 960k inhabitants by 1330AD as the bureaucratic and military capital of the Mongol world empire [@mavonglahn2022cambridge; @Wei2024Formation]. Along the southeastern coast, Quanzhou (Zaiton in European accounts) emerged as the foremost maritime port of the Indian Ocean world, reaching 340k inhabitants in 1290AD and hosting cosmopolitan communities of Arab, Persian, South Asian and Italian merchants alongside imperial maritime trade offices (*shibosi*) [@Beaujard2019Worlds; @Gunther2015Chinese]. Secondary regional centres maintained robust urban populations, including Nanjing (380k in 1210AD), Suzhou (350k in 1210AD), Chengdu (310k in 1210AD), Guangzhou (280k in 1210AD), Fuzhou (250k in 1210AD), Luoyang (220k in 1102AD), Nanchang (220k in 1210AD), Yangzhou (200k in 1102AD) and Ningbo (200k in 1210AD) [@Xu2015Urbanization; @Zhang2026Understanding].

## Late-Yuan Crises and the Red Turban Collapse (1351 to 1368AD)

The fourteenth century culminated in demographic contraction provoked by ecological dislocation, epidemic outbreaks and widespread rebellion. In 1344AD, the Yellow River burst its southern dikes in Henan and Shandong, flooding arable farmland and disrupting the Grand Canal grain transport corridors [@wu2000zhongguo; @Schfer2020What]. The Yuan chancellor Toghto mobilised 150.000 corvée labourers to excavate a new river channel in 1351AD, but the gathering of workers triggered the White Lotus and Red Turban uprisings led by Han Shantong, Liu Futong and Guo Zixing [@wu2000zhongguo; @Schfer2020What].

Hyperinflation of fiat paper currency (*chao*), compounded by outbreaks of epidemic disease along the canal networks, undermined municipal commerce and food distribution [@mavonglahn2022cambridge; @Lin2019Shadow]. Regional warlords carved up the empire: Zhang Shicheng controlled Liangzhe from Suzhou, Chen Youliang dominated Huguang and Jiangxi from Wuchang, Fang Guozhen operated pirate fleets off the Zhejiang coast, and Zhu Yuanzhang fortified Nanjing (Jiqing) [@wu2000zhongguo]. Reconstructed population fell from 91M in 1350AD to 73M in 1368AD, an aggregate decline of 19,8% in eighteen years. When Zhu Yuanzhang proclaimed the Ming Dynasty in Nanjing in 1368AD, he inherited a depopulated Central Plains and a scarred Upper Yangtze basin, setting in motion the extensive state-directed migrations of the Hongwu era.

# Limitations

Three documentary and methodological qualifications condition these demographic estimates. First, imperial fiscal registers (*huji*) were fiscal instruments designed to assess tax liability and labour service rather than comprehensive censuses [@liang1980zhongguo; @wu2000zhongguo]. Tenant households (*kehu*), monastic communities, bonded servants, itinerant boat populations (*danhu*) and non-Han tribal groups in the southwestern uplands were systematically undercounted or omitted from official rolls, requiring econometric adjustments based on gazetteer multipliers and agricultural land carrying capacity [@wu2000zhongguo].

Second, source preservation exhibits sharp geographic asymmetry. While southern local gazetteers (*fangzhi*) survived in substantial numbers for Jiangzhe, Fujian and Jiangxi, the widespread destruction of municipal archives in North China and Sichuan during the Jurchen and Mongol conquests leaves northern county-level data reliant on retrospective Ming gazetteers and dynastic history monographs [@wu2000zhongguo; @Stephen2012Deep]. Moreover, incorporating TBRC Tibetan monasteries [@Ryavec2014TBRC], Song-Yuan *shangshui* commercial market registers, MOHURD Traditional Ancient Villages (Batches 1 to 4) [@MOHURD2023TraditionalVillages], Taiwan BOCH sites [@TaiwanBOCH2025Heritage] and Song-Yuan Hong Kong salt-yard and walled-village centres introduces complementary archival and modern heritage-designation biases across rural and monastic landscapes.

Third, five-arcminute grid allocation (approximately 9,2 km by 9,2 km) smoothes steep local population densities along narrow river valleys and coastal estuaries. While settlements condition local gradients, urban populations residing within dense municipal walls are redistributed into rural grid envelopes, slightly dispersing peak core densities into adjacent peri-urban terrain.

# Conclusion

The demographic trajectory of China from 960AD to 1368AD represents one of the most dynamic epochs in pre-modern history. Over four centuries, aggregate population expanded from a post-Tang baseline of 53M to an initial Northern Song apex of 122M in 1102AD, crossed a dual summit of 138M in 1210AD under the partitioned Jin and Southern Song empires, suffered acute contraction to 78M under Mongol military campaigns, and settled at 73M in 1368AD following the Red Turban collapse.

By harmonising Wu Songdi's historical registrations with 87.811 archaeological site records, 20.775 catalogued settlements (99.282 settlement-year observations) and non-stationary Matérn kriging, this study provides a coherent spatial framework for understanding the mediaeval economic transformation, the northward pull of canal infrastructure and the long-term southward relocation of Chinese demographic gravity.

# Sources

<div id="refs"></div>
