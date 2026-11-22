---
title: "Studies on Population across China, Mongolia, Taiwan, Hong Kong and Macao (Project JADE)"
subtitle: "Holocene Radiocarbon Substrata, Non-Stationary Matérn Kriging, Dynastic Cadastres and Modern Statistical Censuses"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: studies_on_population.bib
csl: _shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_jade_macro_zones.png"
hero_caption: "Four-panel Albers Equal-Area domain mosaic displaying Pre-Qin cultural basins, Song-Yuan administrative provinces, Qing-era 25 territorial units and contemporary 34 PRC provinces alongside 22 Mongolian aimags at 5-arcminute resolution."
hero_label: "fig:hero-jade"

output:
  pdf_document:
    template: _shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Operation Viscount Project JADE reconstructs the long-run demographic, settlement and urban history of continental East Asia from 10000BC to 2026AD across ten integrated regional modules and four major chronological sections. Enclosing the contiguous territory of modern China (including Tibet, Xinjiang, Manchuria and Inner Mongolia), Mongolia, Taiwan, Hong Kong and Macao across 10,95M km², JADE establishes a unified non-stationary Matérn ($\nu = 3/2$) geostatistical architecture. This substratum anchors 87.981 composite archaeological site-epoch observations across ten Holocene horizons onto 1.274 domestic and 562 cross-frontier HydroBASINS Level 6 hydrological catchments. Across 163.892 valid terrestrial grid cells on the global 5-arcminute grid, the model attains an effective site density 82,84x above legacy archaeological compilations, suppresses uninhabitable sand seas and high-altitude gravel deserts with a zero wasteland leakage ratio, and achieves a high correlation with macro land-use series ($\log r = 0,8108$) alongside regularised variogram parameters of $\tau_1 = 1,5$ and residual $R^2 = 0,9995$ to 0,9998.

Section 1 traces prehistoric and imperial nomadic adaptations across the Mongolian steppe, where hunter-forager bands of 15k in 10000BC expand through Bronze Age mobile pastoralism to the Xiongnu Empire (350k at 200BC), Rouran, Göktürk and Uyghur Khaganates (550k at 750AD), and Genghisid unification (700k in 1206AD, peaking at 780k in 1290AD during the Yuan Dynasty). Section 2 synthesises the agrarian demographic history of China by following the foundational six-volume *Zhongguo Renkou Shi* research itinerary. This path advances from the Pre-Qin Yellow River Loess cradle (peaking at 63M in 2AD under the Western Han census) through Three Kingdoms fragmentation and Northern-Southern Dynasties southward clearance (48M at 589AD); Sui-Tang administrative consolidation and canal integration (reaching 74M at the 755AD Tianbao peak); the Northern Song and Southern Song agricultural revolution, which definitively shifted demographic weight to Jiangnan and the Yangtze basin (peaking at 138M in 1210AD alongside the Jurchen Jin Empire); the Ming commercial and agrarian recovery (expanding from 69,08M in 1368AD to 193,76M in 1630AD before Little Ice Age crises); to the Qing Dynasty expansion across inland frontiers, which carried population from 146,9M in 1644AD to 443,61M in 1851AD before Taiping rebellion mortality reduced totals to 377M in 1880AD and 418,8M in 1911AD.

Sections 3 and 4 connect these dynastic foundations with modern twentieth-century statistical systems. In Mongolia after 1912AD, pastoral modern national statistics registered by the National Statistics Office of Mongolia trace growth from 596,3k in 1912AD to 3,62M in 2026AD across 22 aimags. Across China, Taiwan, Hong Kong and Macao, late Qing enumerations, Republican provincial surveys and Japanese colonial returns in Taiwan lead into modern decennial enumerations from the National Bureau of Statistics of China (1953 to 2020), the Ministry of the Interior in Taipei, the Census and Statistics Department of Hong Kong and the Statistics and Census Service of Macao. Combined population across the JADE domain expands from 416,59M in 1910AD to 601,2M in 1953AD, passes 1,032B in 1982AD and 1,473B in 2020AD, before stabilising near 1,467B in 2026AD. All ten constituent chapters dynamically contribute their 179 sub-regional masks and 228.809 catalogued settlement-chapter records without boundary tears, artificial 1820 or 1953 urban step discontinuities, or unharmonised toponymic duplications.

# Background

Historical demographic reconstructions for East Asia confront three fundamental structural challenges: the persistent environmental bifurcation between arid pastoralist steppes and intensively cultivated alluvial floodplains, the massive long-term geographical realignment of demographic weight from northern loess terraces to southern river basins, and the profound fragmentation of empirical documentation across prehistoric archaeology, imperial dynastic household registers and contemporary municipal censuses.

Over past decades, global historical demographic syntheses have depended heavily on the broad regional tabulations compiled by Colin McEvedy and Richard Jones [@McEvedyJones1978], Angus Maddison [@Maddison2001], and Massimo Livi-Bacci. These classic compendia assigned uniform growth rates to modern nation-state borders or sub-continental polygons. In the History Database of the Global Environment (HYDE 3.1 and HYDE 3.2), Kees Klein Goldewijk and colleagues made pioneering progress by downscaling national historical totals to a five-arcminute grid from 10000BC to the present [@KleinGoldewijk2010; @KleinGoldewijk2011; @KleinGoldewijk2017]. HYDE combined urban point allocations with rural suitability weighting derived from coastlines, river networks, soil capability, terrain slope and climate envelopes.

Yet across the East Asian landmass, human settlement followed geographical and historical dynamics that top-down global downscaling cannot resolve from modern political entities alone:

First, agrarian and pastoral cores operated under sharply distinct ecological regimes. Across the Orkhon-Selenge basin, the Khangai highlands, the Kherlen steppe and the Gobi margins, mobile pastoralism sustained sparse populations whose territorial organisation depended on seasonal pasture rotations, clan encampments (*aals*) and mobile tent monasteries rather than permanent masonry cities [@honeychurch2014inner; @Bemmann2020Karakorum]. In contrast, the sedentary agricultural basins of the Yellow, Huai, Yangtze and Pearl rivers supported intensive wetland rice and dryland millet-wheat farming that generated dense networks of walled administrative seats (*xian*), market towns (*zhen*) and rural villages [@skinner1977city; @perkins1969agricultural]. Top-down models that apply uniform spatial allocation parameters across both zones misallocate pastoral populations or distort steppe densities.

Second, the demographic centre of gravity within China shifted dramatically over the two millennia between the Han and Ming dynasties [@mavonglahn2022cambridge; @ho1959studies]. Under the Western Han dynasty in 2AD, more than seventy-five per cent of registered inhabitants resided north of the Qinling Mountains and Huai River, clustered tightly across the loess plains of Henan, Shandong, Hebei and the Wei River valley around Chang'an [@gejianxiong2002zhongguo]. Following the fall of the Han and Western Jin dynasties, successive waves of northern refugees migrated southward into the Middle and Lower Yangtze basins, the Poyang and Dongting lake shores, the Sichuan Basin and coastal Fujian and Guangdong [@dong2002zhongguo; @wusongdi2000zhongguo]. By the Southern Song peak in 1210AD and the Ming Dynasty in 1393AD, this geographical relationship had reversed: over sixty per cent of total population lived south of the Yangtze River divide [@cao2000zhongguo; @cao2024population]. Projecting modern provincial shares or modern urban corridors backward in time inevitably misplaces millions of Han-era people into southern river deltas that were malaria-prone wetlands or forested hills before mediaeval agrarian clearance.

Third, the historical evidentiary record is divided among distinct scholarly and institutional traditions. Prehistoric settlement patterns must be recovered through archaeological site registries, radiocarbon dating databases and monument files [@hosner2016pangaea; @chgis2016v6; @Campbell2014Archaeology; @Chen2026Broad]. Dynastic imperial counts were recorded in official dynastic histories (*zhengshi*), imperial compendia (*tongzhi*), local gazetteers (*fangzhi*) and fiscal registers, where counts of fiscal adult males (*ding*) or registered households (*hu*) fluctuated wildly according to tax policies, exemptions and administrative disruptions [@gejianxiong2002zhongguo; @caoshuji2001zhongguo; @lee1999one]. In modern times, statistical series require reconciling late Qing surveys, Republican Ministry of the Interior publications, Japanese colonial enumerations in Taiwan, and modern national censuses from the People's Republic of China, Taiwan, Hong Kong and Macao [@hou2001zhongguo; @nbs1954census; @nbs2020census; @taiwan_moi2025; @hk_censtatd2025; @macao_dsec2025; @NSOMongolia2025PxWeb].

Project JADE resolves these structural obstacles through bottom-up catchment-level geostatistical modelling and exhaustive settlement gazetteers across all ten constituent modules, creating a continuous historical population record from 10000BC to 2026AD.

# Methodology

## Regional Partitioning and Chronological Architecture

Project JADE establishes a hierarchical spatial and chronological partition designed to preserve sub-regional accounting integrity across shifting dynastic boundaries and administrative reorganisations. The spatial domain encompasses 10,95M km² of terrestrial East Asia, divided into four chronological sections and ten modular chapters:

1. **Section 1: Pre-1912 Mongolia (2 modules, 10000BC to 1912AD)**: Module 1 covers Steppe Prehistory and Nomadic Empires from 10000BC to 1206AD across six ecological zones (Orkhon-Selenge, Khangai, Kherlen-Onon, Altai, Gobi and Eastern Steppe), documenting hunter-forager complexes, Slab Burial monuments, and nomadic empires from the Xiongnu to the Uyghur Khaganate. Module 2 tracks the Mongol Empire and Qing Mongolia from Genghis Khan's 1206AD unification to the 1912AD declaration of independence, partitioning the territory across the four Khalkha aimags (Tusheet Khan, Setsen Khan, Sain Noyon Khan and Zasagt Khan) alongside Hovd and Uliastai military frontier regions.
2. **Section 2: China along the Zhongguo Renkou Shi Itinerary (6 modules, 10000BC to 1953AD)**: Faithfully following the monumental six-volume Fudan University demographic itinerary and Cao Shuji's 2024 Brill synthesis [@gejianxiong2002zhongguo; @dong2002zhongguo; @wusongdi2000zhongguo; @cao2000zhongguo; @caoshuji2001zhongguo; @hou2001zhongguo; @cao2024population], this section traces dynastic agricultural China across six sequential eras:
   - *Pre-Qin to Northern and Southern Dynasties (10000BC to 589AD, 13 sub-regions)*: Following Ge Jianxiong (Vol. 1), tracing Neolithic cultures through the Western Han peak at 2AD, Three Kingdoms devastation, and Six Dynasties southern clearance.
   - *Sui, Tang and Five Dynasties (589 to 960AD, 13 sub-regions)*: Following Dong Guodong (Vol. 2), tracing Sui canal integration, the 755AD Tianbao zenith, the An Lushan disruption, and Five Dynasties regional fragmentation.
   - *Liao, Song, Jin and Yuan Dynasties (960 to 1368AD, 14 sub-regions)*: Following Wu Songdi (Vol. 3), covering Northern Song agrarian expansion, the Jin-Southern Song dual core peaking in 1210AD, the Mongol conquest shock, and Yuan reunification.
   - *Ming Dynasty (1368 to 1644AD, 20 sub-regions)*: Following Cao Shuji (Vol. 4), detailing Hongwu registration, sixteenth-century commercialisation, the 1630AD peak, and Little Ice Age collapse.
   - *Qing Dynasty (1644 to 1911AD, 25 sub-regions)*: Following Cao Shuji (Vol. 5), tracking the eighteenth-century population surge, frontier migration into Manchuria and Taiwan, the 1851AD pre-Taiping peak, and late Qing recovery to 1911AD.
   - *Republican and Transitional Era (1910 to 1953AD, 28 sub-regions)*: Following Hou Yangfang (Vol. 6) and Cao Shuji (2024), uniting 1912-1947 provincial surveys, Manchurian railway industrialisation, wartime devastation, and Japanese colonial censuses of Taiwan into the first modern 1953 national census baseline.
3. **Section 3: Mongolia After 1912 (1 module, 1912 to 2026AD)**: Reconstructs modern Mongolia across 22 aimags and Ulaanbaatar municipality, drawing directly on the 1212.mn statistical service of the National Statistics Office of Mongolia [@NSOMongolia2025PxWeb; @NSOMongoliaHistoricalCensuses].
4. **Section 4: China, Taiwan, Hong Kong and Macao Since 1949 (1 module, 1949 to 2026AD)**: Unites contemporary statistical reporting across the 31 mainland provincial-level divisions of the PRC [@nbs1954census; @nbs1982census; @nbs2000census; @nbs2020census], Taiwan under the Ministry of the Interior [@taiwan_moi2025], Hong Kong under the Census and Statistics Department [@hk_censtatd2025], and Macao under the Statistics and Census Service [@macao_dsec2025].

Together, the ten modules incorporate 179 sub-regional areal masks (or 181 operational analytical masks across the ten modules) that cover every square kilometre of the domain without jurisdictional gaps or overlaps.

## East Asia Archaeological Substrata and Non-Stationary Matérn Kriging

Prehistoric and early historical rural settlement potential across the 163.892 valid terrestrial 5-arcminute cells (10,95M km²) of Project JADE is derived from a massive composite of archaeological and historical site registers. The database consolidates 87.981 composite site-epoch records across ten chronological horizons, incorporating:
- Hosner et al. (2016) PANGAEA compilation of Neolithic and Bronze Age archaeological sites in China (51.432 site records) [@hosner2016pangaea];
- Harvard CHGIS Version 6 time-series gazetteer and 1820 town database (21.167 administrative and settlement loci) [@chgis2016v6];
- National Key Cultural Relics Protection Units (4.063 monument and excavation complexes);
- Archaeological Atlas DVN/7MYVV7 excavation dataset (4.963 geo-referenced sites);
- Allen Ancient DNA Resource (AADR v66) archaeological human remains loci (739 records);
- Global radiocarbon databases, including XRONOS (1.446 dates), p3k14c (325 dates) and c14bazAAR;
- Taiwan Bureau of Cultural Heritage heritage register (1.286 site loci);
- Kham Tibetan Buddhist Monasteries database (1.562 georeferenced coordinates);
- POLARIS trans-frontier Siberian buffer registries (925 loci along the Amur, Baikal and Altai margins);
- Mongolian steppe archaeological complexes (Deer Stone-Khirigsuur, Slab Burial and Xiongnu mortuary sites).

<figure class="crd-figure-block" id="fig:kriging-diagnostics">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0/fig3_jade_kriging_diagnostics.png" alt="fig:kriging-diagnostics" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> East Asia non-stationary Matérn (nu = 3/2) kriging diagnostics: 1.274 domestic and 562 frontier catchments, Qin-Han Horizon 6 intensity, 1820AD density and 10-horizon semivariogram fits.</figcaption>
</figure>

The ten chronological horizons span the full developmental sequence of human settlement in East Asia:
- Horizon 1 (Late Palaeolithic and Early Neolithic, c. 13000BC to 5000BC): Nanzhuangtou, Pengtoushan, Peiligang, Cishan, Xinglongwa and early steppe forager sites (1.435 sites across 575 active domestic catchments);
- Horizon 2 (Middle Neolithic Yangshao and Hemudu, c. 5000BC to 3000BC): Yangshao, Hemudu, Dawenkou, Hongshan, Daxi, Dabenkeng and Tamsagbulag (6.450 sites across 666 active catchments);
- Horizon 3 (Late Neolithic Longshan and Liangzhu, c. 3000BC to 2000BC): Longshan walled sites, Liangzhu hydraulic networks, Shijiahe, Majiayao, Qijia, Karuo and Chemurchek (9.929 sites across 738 active catchments);
- Horizon 4 (Bronze Age Shang and Zhou, c. 2000BC to 770BC): Erlitou, Erligang, Anyang Yinxu, Sanxingdui, Western Zhou, Lower Xiajiadian and Deer Stone complexes (17.043 sites across 777 active catchments);
- Horizon 5 (Spring and Autumn to Warring States, c. 770BC to 221BC): Eastern Zhou walled urban sites, iron-agricultural settlements, Slab Burial and Pazyryk complexes (9.355 sites across 761 active catchments);
- Horizon 6 (Qin, Han and Xiongnu Horizon, 221BC to 220AD): Qin-Han commandery and county centres, Great Wall garrison networks, Xiongnu royal kurgans and Tarim Basin oasis cities (3.078 sites across 746 active catchments);
- Horizon 7 (Wei, Jin and Northern-Southern Dynasties, 220 to 589AD): Three Kingdoms fortified settlements, Sixteen Kingdoms northern loci, Rouran steppe complexes and early Jiangnan canal towns (4.615 sites across 565 active catchments);
- Horizon 8 (Sui, Tang and Five Dynasties, 589 to 960AD): Grand Canal hubs, Tang ten-circuit prefectures, Göktürk and Uyghur urban settlements, Nanzhao and Tibetan forts (4.926 sites across 648 active catchments);
- Horizon 9 (Liao, Song, Jin and Yuan, 960 to 1368AD): Northern and Southern Song market towns, Liao and Jin northern garrisons, Dali towns and Mongol-Yuan postal relay stations (5.284 sites across 803 active catchments);
- Horizon 10 (Ming and Qing Imperial Era, 1368 to 1911AD): Comprehensive prefectural and county seats, garrisons, Khalkha banner monasteries, Taiwan coastal plains and Manchurian settlements (12.894 sites across 962 active catchments).

<figure class="crd-table-figure" id="tab:kriging-horizons">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Temporal Bounds</th><th class="crd-th">Site Records</th><th class="crd-th">Catchments</th><th class="crd-th">Mean Value</th><th class="crd-th">Archaeological Complexes</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>H1: Late Palaeolithic and Early Neolithic</strong></td><td class="crd-td">13000BC-5000BC</td><td class="crd-td">1.435</td><td class="crd-td">575</td><td class="crd-td">0,011/cell</td><td class="crd-td">Nanzhuangtou, Pengtoushan, Peiligang, Cishan, Xinglongwa</td></tr>
<tr><td class="crd-td"><strong>H2: Middle Neolithic (Yangshao and Hemudu)</strong></td><td class="crd-td">5000BC-3000BC</td><td class="crd-td">6.450</td><td class="crd-td">666</td><td class="crd-td">0,047/cell</td><td class="crd-td">Yangshao, Hemudu, Dawenkou, Hongshan, Daxi, Dabenkeng</td></tr>
<tr><td class="crd-td"><strong>H3: Late Neolithic (Longshan and Liangzhu)</strong></td><td class="crd-td">3000BC-2000BC</td><td class="crd-td">9.929</td><td class="crd-td">738</td><td class="crd-td">0,072/cell</td><td class="crd-td">Longshan, Liangzhu, Shijiahe, Majiayao, Qijia, Chemurchek</td></tr>
<tr><td class="crd-td"><strong>H4: Bronze Age (Shang, Zhou and Erlitou)</strong></td><td class="crd-td">2000BC-770BC</td><td class="crd-td">17.043</td><td class="crd-td">777</td><td class="crd-td">0,123/cell</td><td class="crd-td">Erlitou, Shang, Western Zhou, Sanxingdui, Deer Stone</td></tr>
<tr><td class="crd-td"><strong>H5: Spring and Autumn to Warring States</strong></td><td class="crd-td">770BC-221BC</td><td class="crd-td">9.355</td><td class="crd-td">761</td><td class="crd-td">0,065/cell</td><td class="crd-td">Eastern Zhou walled states, iron agriculture, Slab Burial</td></tr>
<tr><td class="crd-td"><strong>H6: Qin, Han and Xiongnu Horizon</strong></td><td class="crd-td">221BC-220AD</td><td class="crd-td">3.078</td><td class="crd-td">746</td><td class="crd-td">0,021/cell</td><td class="crd-td">Qin-Han commanderies, counties, Great Wall, Xiongnu</td></tr>
<tr><td class="crd-td"><strong>H7: Wei, Jin and Northern-Southern Dynasties</strong></td><td class="crd-td">220AD-589AD</td><td class="crd-td">4.615</td><td class="crd-td">565</td><td class="crd-td">0,032/cell</td><td class="crd-td">Three Kingdoms garrisons, Sixteen Kingdoms, Rouran</td></tr>
<tr><td class="crd-td"><strong>H8: Sui, Tang and Five Dynasties</strong></td><td class="crd-td">589AD-960AD</td><td class="crd-td">4.926</td><td class="crd-td">648</td><td class="crd-td">0,034/cell</td><td class="crd-td">Grand Canal network, Tang ten circuits, Uyghur forts</td></tr>
<tr><td class="crd-td"><strong>H9: Liao, Song, Jin and Yuan Dynasties</strong></td><td class="crd-td">960AD-1368AD</td><td class="crd-td">5.284</td><td class="crd-td">803</td><td class="crd-td">0,037/cell</td><td class="crd-td">Song commercial market towns, Liao, Jin, Dali, Yuan relays</td></tr>
<tr><td class="crd-td"><strong>H10: Ming and Qing Imperial Era</strong></td><td class="crd-td">1368AD-1911AD</td><td class="crd-td">12.894</td><td class="crd-td">962</td><td class="crd-td">0,088/cell</td><td class="crd-td">Ming-Qing prefectural network, Khalkha banners, Taiwan</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Ten chronological kriging horizons across East Asia documenting site counts, active hydrological catchments, mean density and representative archaeological complexes.</figcaption>
</figure>

To eliminate arbitrary modern political boundary effects, the spatial domain is partitioned using HydroBASINS Level 6 watershed units, comprising 1.274 domestic catchments and 562 cross-frontier buffer catchments in northern Vietnam, Laos, Myanmar, India, Bhutan, Nepal, Central Asia, Russia and Korea. Median Voronoi catchment radius is 45,11 km, with a 90th percentile of 68,81 km.

Geostatistical interpolation relies on a two-dimensional Paciorek and Schervish non-stationary Matérn covariance kernel with fixed smoothness $\nu = 3/2$ [@paciorek2006spatial]. The spatial covariance between two locations $s_i$ and $s_j$ is given by:
$$C(s_i, s_j) = \sigma^2 |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \left(1 + \frac{\sqrt{3} Q_{ij}}{\tau}\right) \exp\left(-\frac{\sqrt{3} Q_{ij}}{\tau}\right)$$
where $Q_{ij} = \sqrt{(s_i - s_j)^T \left(\frac{\Sigma_i + \Sigma_j}{2}\right)^{-1} (s_i - s_j)}$, and $\Sigma_i$ represents the locally adaptive spatial metric tensor aligned to river valley orientation, coastline proximity and terrain slope.

Residual kriging operates on top of five weighted least squares (WLS) biophysical covariates: baseline habitation suitability ($\beta_0$), natural land cover suitability ($\beta_1$), ecozone agricultural productivity ($\beta_2$), distance decay from primary river channels ($\beta_3$, 12,5 km characteristic decay scale), and distance decay from marine coastlines ($\beta_4$, 25 km decay scale). Weighted least squares fitting across all ten horizons yields variogram parameters with a raw dimensionless range $\tau_1 = 1,6277$, regularised $\tau_1 = 1,5$, macro scale range $\tau_2 = 2,775$, and effective short-scale range of 73,43 km. The regularised nugget-to-sill ratio is 0,04 ($\eta = 0,0417$), with empirical variogram fits achieving $R^2 = 0,9995$ to 0,9998 across active cells.

Gatekeeper metrics confirm the performance of the kriging architecture:
- Site density amplification reaches 82,84x over legacy single-compilation baselines;
- The uninhabitable leakage ratio is zero, ensuring complete demographic suppression across the hyper-arid Taklamakan, Badain Jaran, Tengger and Gobi sand seas and glaciated Tibetan peaks;
- The logarithmic correlation with HYDE historical land-use patterns of 0,8108 demonstrates strong macro-scale spatial coherence with independent environmental reconstructions while capturing sharp local riverine and deltaic settlement concentrations.

## Cadastral Enumeration, Dynastic Itinerary and Census Continuity

For historical periods from the Qin unification in 221BC through the late Qing Dynasty in 1911AD, JADE synthesises empirical household and taxable returns by following the demographic historical standards developed by Ge Jianxiong, Dong Guodong, Wu Songdi, Cao Shuji and Hou Yangfang [@gejianxiong2002zhongguo; @dong2002zhongguo; @wusongdi2000zhongguo; @cao2000zhongguo; @caoshuji2001zhongguo; @hou2001zhongguo].

Imperial Chinese censuses were fiscal registration systems designed to assess taxation, corvée labour obligation and military levy rather than demographic headcounts [@ho1959studies; @lee1999one]. In dynastic records, the primary enumerated units were registered households (*hu*) and adult male fiscal taxable shares (*ding* or *kou*). Directly reading registered *ding* as total population produces massive undercounts, particularly during periods of fiscal avoidance, bureaucratic decay or tax reforms that decoupled headcount registration from land taxes, such as the 1712AD Kangxi freeze on taxable shares (*sheng'sheng bujiafu*) and the subsequent *tandiding* reforms under the Yongzheng reign [@caoshuji2001zhongguo; @cao2024population].

The Fudan school itinerary resolves these documentary distortions through systematic four-step adjustment:
1. Reconciling registered households (*hu*) with average household size multipliers derived from contemporaneous lineage genealogies, clan records and local gazetteers, typically ranging between 5,2 and 5,8 persons per household in northern dry-farming zones and 4,8 to 5,4 in southern rice-farming basins;
2. Correcting for systemic omission of women, infants, non-taxable dependents, unfree tenants, Buddhist and Daoist monastic communities, and non-Han frontier populations;
3. Adjusting for territorial boundary shifts between historical administrative units (prefectures, commanderies, circuits and provinces) and modern GIS boundaries through Harvard CHGIS Version 6 vector polygons;
4. Establishing continuous dynastic benchmark series that bridge dynastic transitions without artificial discontinuities, ensuring that wartime mortality drops during the Three Kingdoms, the An Lushan rebellion, the Mongol conquest of Jin and Song, the Ming-Qing transition, and the Taiping Rebellion reflect historical evidence rather than documentary omissions.

From 1910AD onward, JADE links these imperial baselines to modern statistical censuses. The late Qing Xuanthong census of 1910-1911AD (418,8M across the Qing realm) connects with Republican provincial surveys conducted between 1912 and 1947AD, detailed Japanese colonial quinquennial censuses in Taiwan from 1905 to 1940AD [@taiwan_colonial_census1940], and the landmark 30 June 1953 first modern national census of the People's Republic of China (590,33M across all 28 contemporary administrative divisions) [@nbs1954census]. In modern Mongolia, the 1918 census conducted by the Ministry of Finance and subsequent national enumerations from 1935 to 2020AD provide an unbroken statistical backbone [@NSOMongoliaHistoricalCensuses].

## Urban Agglomeration, Disaggregation and Livemap Integration

Urban settlements across Project JADE are catalogued in discrete gazetteer archives encompassing 228.809 settlement-chapter records across the ten modules. Beyond Harvard CHGIS Version 6 administrative time-series and 1911 *cunzhen* town networks [@chgis2016v6], the enriched pre-1800 settlement backbone synthesises the Temporal Gazetteer (TGAZ) historical place register, the China Biographical Database (CBDB) historical address directory [@CBDB2026Addresses], the Harvard Ming *Weisuo* military garrison catalogue [@CHGIS2008MingGarrisons], the Tibetan Buddhist Resource Center (TBRC) monastery register [@Ryavec2014TBRC], the Early China Radiocarbon Databank v2023,4 [@EarlyChinaC14_2025], the Arts Council of Mongolia Documentation of Mongolian Monasteries archive [@DOMM2024Monasteries], the Ministry of Housing and Urban-Rural Development (MOHURD) National Traditional Ancient Villages register (Batches 1 to 6) [@MOHURD2023TraditionalVillages], the Taiwan Bureau of Cultural Heritage pre-modern heritage directory [@TaiwanBOCH2025Heritage], and the Modern China Geospatial Database (MCGD) [@Henriot2026MCGD], alongside documented Ming-Qing *Xin'an Xianzhi* settlements for Hong Kong and Macao. Each settlement carries permanent composite identifiers, province-disambiguated WGS84 geographic coordinates snapped to historical administrative seats where applicable, native script toponyms (simplified and traditional Chinese characters, Mongolian Cyrillic and traditional Bichig script, Tibetan script and Uyghur-Arabic script), foundation dates, administrative ranks and continuous historical population trajectories bridging pre-1800, Republican and contemporary enumerations.

To prevent urban populations from being double-counted within rural agricultural pixels, JADE implements an urban disaggregation algorithm:
1. Urban settlement points are buffered according to their historical rank and physical extent (3 km to 15 km buffer radius) and projected onto the 5-arcminute raster grid;
2. Settlement populations at each benchmark year are assigned directly to the corresponding urban grid cells;
3. Urban pixel totals are subtracted from their respective sub-regional population targets, yielding residual rural population totals;
4. Residual rural populations are disaggregated across non-urban pixels using the normalised non-stationary Matérn kriging suitability weights;
5. A two-pass separable Gaussian filter smoothing kernel eliminates seam discontinuities across administrative borders while strictly preserving sub-regional totals.

Annual live continuity from 1953 to 2025AD is enforced through constrained monotonic cubic Hermite splines outside verified border splice years (1912, 1945, 1949, 1953, 1964 and 1982AD). Year-on-year aggregate turnover remains below 1,5%, preventing artificial statistical jumps during intercensal intervals.

# Testing and Validation

Project JADE enforces five orthogonal validation checks across all ten constituent chapters:

1. **Areal Mask Integrity**: All ten modular masks contain zero empty sub-regions, zero synthetic bounding-box cuts, and complete territorial containment across 179 sub-regions. Explicit polygon boundaries enclose coastal islands including Taiwan, Penghu, Hainan, Chongming, the Zhoushan Archipelago, Hong Kong Island, Kowloon, the New Territories, and Macao without raster clipping errors.
2. **Kriging Sharpness and Continuity**: Across all ten Holocene horizons, variograms achieve regularised $\tau_1 = 1,5$ (raw 1,6277), effective short range 73,43 km, and weighted least squares residual $R^2 = 0,9995$ to 0,9998. Visual inspection confirms sharp fluvial alignment along the Yellow, Wei, Fen, Huai, Yangtze, Pearl, Liaohe and Orkhon-Selenge river systems, with zero isotropic Voronoi artefacts and complete desert suppression.
3. **Gazetteer Deduplication and Coverage**: All 228.809 catalogued settlement-chapter records pass coordinate bounds checks, parent sub-region containment, province-aware geocoding disambiguation, and pairwise proximity audits (zero same-jurisdiction active settlement pairs within 1,5 km after 1850AD).
4. **Toponymic Disambiguation and Anti-Collision Protection**: Historical toponymic shifts are systematically resolved. The model distinguishes historical capitals from modern administrative cities, isolating ancient Chang'an from Ming-Qing and modern Xi'an, separating Luoyang, Kaifeng, Nanjing and Beijing/Beiping across successive dynastic epochs, and isolating pre-modern Karakorum (*Kharkhorin*) from modern Ulaanbaatar (*Urga*).
5. **Continuity and Visual Inspection**: Annual live continuity checks from 1953 to 2025AD confirm that year-on-year population changes remain within demographic viability bounds. All four project-level diagnostic figures pass optical inspection for zero label occlusion, proper aspect ratio and publication-grade cartographic clarity.

<figure class="crd-table-figure" id="tab:all-10-modules">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Module</th><th class="crd-th">Span</th><th class="crd-th">Sub-regions</th><th class="crd-th">Settlements</th><th class="crd-th">Start Pop.</th><th class="crd-th">End Pop.</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Steppe Prehistory and Nomadic Empires</strong></td><td class="crd-td">10000BC-1206AD</td><td class="crd-td">6</td><td class="crd-td">437</td><td class="crd-td">15k</td><td class="crd-td">700k</td><td class="crd-td">700k (1206AD)</td></tr>
<tr><td class="crd-td"><strong>Mongol Empire and Qing Mongolia</strong></td><td class="crd-td">1206AD-1912AD</td><td class="crd-td">6</td><td class="crd-td">1.220</td><td class="crd-td">700k</td><td class="crd-td">644k</td><td class="crd-td">780k (1290AD)</td></tr>
<tr><td class="crd-td"><strong>Pre-Qin to Northern and Southern Dynasties</strong></td><td class="crd-td">10000BC-589AD</td><td class="crd-td">13</td><td class="crd-td">16.863</td><td class="crd-td">180k</td><td class="crd-td">48M</td><td class="crd-td">63M (2AD)</td></tr>
<tr><td class="crd-td"><strong>Sui, Tang and Five Dynasties</strong></td><td class="crd-td">589AD-960AD</td><td class="crd-td">13</td><td class="crd-td">9.885</td><td class="crd-td">48M</td><td class="crd-td">53M</td><td class="crd-td">74M (755AD)</td></tr>
<tr><td class="crd-td"><strong>Liao, Song, Jin and Yuan</strong></td><td class="crd-td">960AD-1368AD</td><td class="crd-td">14</td><td class="crd-td">20.775</td><td class="crd-td">53M</td><td class="crd-td">73M</td><td class="crd-td">138M (1210AD)</td></tr>
<tr><td class="crd-td"><strong>Ming Dynasty</strong></td><td class="crd-td">1368AD-1644AD</td><td class="crd-td">20</td><td class="crd-td">36.464</td><td class="crd-td">69,08M</td><td class="crd-td">146,92M</td><td class="crd-td">193,76M (1630AD)</td></tr>
<tr><td class="crd-td"><strong>Qing Dynasty</strong></td><td class="crd-td">1644AD-1911AD</td><td class="crd-td">25</td><td class="crd-td">49.910</td><td class="crd-td">146,9M</td><td class="crd-td">418,8M</td><td class="crd-td">443,61M (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Republican and Transitional Era</strong></td><td class="crd-td">1910AD-1953AD</td><td class="crd-td">28</td><td class="crd-td">48.776</td><td class="crd-td">416,59M</td><td class="crd-td">590,33M</td><td class="crd-td">590,33M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Mongolia Modern Era</strong></td><td class="crd-td">1912AD-2026AD</td><td class="crd-td">22</td><td class="crd-td">256</td><td class="crd-td">596,3k</td><td class="crd-td">3,62M</td><td class="crd-td">3,62M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>Contemporary China, Taiwan, HK and Macao</strong></td><td class="crd-td">1949AD-2026AD</td><td class="crd-td">34</td><td class="crd-td">44.223</td><td class="crd-td">535,04M</td><td class="crd-td">1,44B</td><td class="crd-td">1,44B (2020AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> All ten Project JADE regional modules showing chronological bounds, sub-region counts, settlement counts, start and end populations, and peak populations.</figcaption>
</figure>

# Results

## Prehistoric Steppe Dynamics and Nomadic Empires

The demographic history of Mongolia across 10000BC to 1912AD demonstrates how pastoral adaptations and nomadic political structures operated within strict ecological carrying-capacity boundaries (Figure \ref{fig:trajectory}). During the Epipalaeolithic and Early Neolithic (10000BC to 4000BC), small mobile bands of big-game hunters and broad-spectrum foragers occupied the forest-steppe margins of the Orkhon, Selenge and Kherlen valleys, supporting an aggregate domain population that grew slowly from 15k to 50k inhabitants [@honeychurch2014inner].

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0/fig2_jade_long_run_trajectory.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Long-run population trajectories of China (2000BC to 2026AD) and Mongolia (10000BC to 2026AD) on logarithmic scales, illustrating dynastic cycles and modern demographic transitions.</figcaption>
</figure>

The introduction of sheep, goat, cattle and horse pastoralism during the Middle and Late Bronze Age (2000BC to 1000BC)—associated with the Afanasievo, Chemurchek and Deer Stone-Khirigsuur archaeological complexes—transformed steppe carrying capacity, elevating numbers to 110k around 2000BC and 175k by 1000BC. Pastoral transhumance allowed communities to exploit seasonal upland pastures in the Khangai and Altai mountains during summer while sheltering in protected river valleys during harsh winter blizzards (*dzud*).

With the transition to mounted equestrian pastoralism and iron metallurgy during the first millennium BC, nomadic polities developed unprecedented military mobility and macro-regional confederacies. The Xiongnu Empire (c. 209BC to 150AD), centred along the Orkhon and Tamir valleys, mobilised extensive tribal federations and tributary extraction from the Han Empire, supporting a peak population of 350k around 200BC across the Mongolian steppe domain [@honeychurch2014inner]. Following Xiongnu fragmentation, successive nomadic khaganates—the Xianbei, Rouran, Göktürk (552 to 744AD) and Uyghur (744 to 840AD)—maintained aggregate steppe populations between 400k and 550k inhabitants, with urban and artisanal enclaves emerging at imperial administrative centres such as Ordu-Baliq.

Genghis Khan's political unification of the nomadic tribes in 1206AD lifted steppe numbers to 700k, reaching an imperial zenith of 780k around 1290AD under the Yuan Dynasty [@Bemmann2020Karakorum]. Following the retreat of the Northern Yuan to the steppe after 1368AD, protracted conflict with the Ming Empire and internal fragmentation between Western (Oirat) and Eastern (Khalkha) Mongols depressed population to 580k around 1644AD. Under Qing suzerainty (1691 to 1911AD), the formalisation of banner boundaries, the suppression of inter-tribal warfare, and the rapid expansion of Tibetan Buddhist monasticism—which withdrew up to forty per cent of adult males into non-reproductive celibate monastic life—stabilised population between 560k and 644k inhabitants right up to the 1911-1912AD independence revolution.

## Dynastic Demographic Cycles from Pre-Qin to Late Imperial China

Across agrarian China, the six dynastic modules synthesised from the *Zhongguo Renkou Shi* itinerary reveal five distinct demographic mega-cycles punctuated by catastrophic transition crises:

1. **The Classical Yellow River Cycle (Pre-Qin to Han, 10000BC to 220AD)**: From early Neolithic beginnings along the Yellow River loess terraces (Peiligang, Cishan, Yangshao and Longshan, supporting 180k in 10000BC to 4,8M in 3000BC), agricultural intensification and iron technology propelled Eastern Zhou populations to 31M by 300BC. Under the unified Western Han Empire, internal peace, hydraulic engineering along the Yellow and Wei rivers, and imperial expansion lifted population to 63M in 2AD [@gejianxiong2002zhongguo]. Over three-quarters of this total resided in the northern dry-farming plains. Civil war during the Wang Mang interregnum, followed by epidemic outbreaks and the catastrophic collapse of the Han administrative order during the Three Kingdoms era, reduced the domain headcount to 24,5M in 220AD.
2. **The Sui-Tang Reconstruction and Mediaeval Transition (220 to 960AD)**: Slow recovery under the Western Jin (36,5M in 280AD) was interrupted by northern pastoralist invasions and the Six Dynasties division, which nevertheless fostered initial agrarian clearance in Jiangnan, lifting domain numbers to 48M by Sui reunification in 589AD [@dong2002zhongguo]. Sui canal construction linked southern rice production with northern political capitals, enabling the early Tang Empire to reach 54,5M in 609AD and a peak of 74M at the 755AD Tianbao census on the eve of the An Lushan rebellion [@twitchett1979cambridge]. Devastation during the rebellion caused severe northern depopulation, accelerating the permanent migration of families southward into the Huai, Yangtze, Gan and Xiang river basins. By the fall of the Tang in 907AD and the Five Dynasties era (960AD), population stood at 53M, but the geographical balance had shifted decisively towards the south.
3. **The Song Agrarian Revolution and the Mongol Crisis (960 to 1368AD)**: The Northern Song period witnessed the introduction of early-ripening Champa rice, double-cropping, extensive polder embankment (*polder-lands*), and advanced water-management networks across Lake Tai and the Lower Yangtze [@wusongdi2000zhongguo]. Total population passed 92M in 1050AD and crested at 128M in 1124AD. Following the Jurchen capture of Kaifeng in 1127AD, the Southern Song and Jin empires coexisted as dual economic engines, lifting combined domain population to a mediaeval peak of 138M in 1210AD (Southern Song 80M, Jin 53M, Dali Kingdom 3M, Western Xia 2M). This flourishing economy was violently disrupted by the Mongol invasions (1211 to 1279AD). Widespread slaughter, siege warfare, famine and the collapse of Yellow River flood defences decimated the northern plains, reducing total domain population by over forty-three per cent to 78M in 1290AD [@wusongdi2000zhongguo]. Modest recovery under the Pax Mongolica carried numbers back to 91M in 1350AD before Red Turban rebellions and epidemics reduced totals to 73M at the fall of the Yuan Dynasty in 1368AD.
4. **The Ming Commercial Expansion and Crisis (1368 to 1644AD)**: The founding Ming emperor Hongwu instituted comprehensive household registers (*Yellow Registers*) and land surveys (*Fish-scale Registers*), documenting 69,08M inhabitants in 1368AD and 75M in 1393AD [@cao2000zhongguo; @cao2024population]. Sixteenth-century commercialisation, domestic market integration, silver inflows from the Manila galleon trade, and the diffusion of American crops (sweet potato, maize, peanut) supported substantial growth, reaching 115M in 1500AD, 162M in 1580AD, and a late Ming peak of 193,76M in 1630AD. Between 1630 and 1644AD, converging catastrophes associated with the Late Antique and seventeenth-century Little Ice Age—severe droughts, locust plagues, virulent epidemics, Li Zicheng's peasant uprisings, and the Manchu conquest—shattered the empire, reducing population to 146,9M in 1644AD [@Bntgenchem2016; @ho1959studies].
5. **The Qing Population Surge and the Taiping Cataclysm (1644 to 1911AD)**: Following consolidation under the early Qing emperors, population grew at unprecedented speed [@caoshuji2001zhongguo; @lee1999one; @perkins1969agricultural]. The 1712AD permanent freeze on head-tax quotas removed the primary disincentive to register births, while the expansion of maize and sweet potatoes into hilly uplands enabled the colonisation of peripheral frontiers in Sichuan, Guizhou, Yunnan, Hunan, Jiangxi and Taiwan. Population rose from 160M in 1680AD to 311M in 1776AD, 383M in 1820AD, and a historic zenith of 443,61M in 1851AD [@caoshuji2001zhongguo; @Broadberry2026Economic]. The Taiping Rebellion (1851 to 1864AD), fought across the richest provinces of the Lower and Middle Yangtze (Jiangsu, Zhejiang, Anhui, Jiangxi and Hubei), alongside the contemporary Nian and Panthay-Dungan Muslim rebellions, caused massive mortality from warfare, famine and cholera. Total domain population fell to 377M in 1880AD, an excess mortality exceeding sixty million persons, before agricultural recovery, Manchurian railway opening (*Chuang Guandong*), and treaty-port industrialisation restored numbers to 418,8M by 1911AD.

<figure class="crd-table-figure" id="tab:dynastic-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Dynastic Epoch</th><th class="crd-th">Year</th><th class="crd-th">China Pop.</th><th class="crd-th">Mongolia Pop.</th><th class="crd-th">Demographic Gravity Core</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Western Han Dynasty Zenith</strong></td><td class="crd-td">2AD</td><td class="crd-td">63M</td><td class="crd-td">350k</td><td class="crd-td">North China Plain (Henan and Shandong)</td></tr>
<tr><td class="crd-td"><strong>Three Kingdoms Fragmentation</strong></td><td class="crd-td">220AD</td><td class="crd-td">24,5M</td><td class="crd-td">280k</td><td class="crd-td">Guanzhong and Wei River Valley</td></tr>
<tr><td class="crd-td"><strong>Sui Dynasty Administrative Peak</strong></td><td class="crd-td">609AD</td><td class="crd-td">54,5M</td><td class="crd-td">460k</td><td class="crd-td">Central Plains and Grand Canal</td></tr>
<tr><td class="crd-td"><strong>Tang Dynasty Tianbao Zenith</strong></td><td class="crd-td">755AD</td><td class="crd-td">74M</td><td class="crd-td">550k</td><td class="crd-td">Guannei and Henan Circuits</td></tr>
<tr><td class="crd-td"><strong>Northern Song Agrarian Peak</strong></td><td class="crd-td">1124AD</td><td class="crd-td">128M</td><td class="crd-td">620k</td><td class="crd-td">Lower Yangtze and Huai Basins</td></tr>
<tr><td class="crd-td"><strong>Southern Song and Jin Coexistence</strong></td><td class="crd-td">1210AD</td><td class="crd-td">138M</td><td class="crd-td">700k</td><td class="crd-td">Jiangnan, Taihu and Sichuan</td></tr>
<tr><td class="crd-td"><strong>Yuan Dynasty Early Imperial Census</strong></td><td class="crd-td">1290AD</td><td class="crd-td">78M</td><td class="crd-td">780k</td><td class="crd-td">North China and Jiangnan</td></tr>
<tr><td class="crd-td"><strong>Early Ming Hongwu Census</strong></td><td class="crd-td">1393AD</td><td class="crd-td">75M</td><td class="crd-td">660k</td><td class="crd-td">Lower Yangtze Delta (Nanzhili)</td></tr>
<tr><td class="crd-td"><strong>Late Ming Commercial Zenith</strong></td><td class="crd-td">1630AD</td><td class="crd-td">193,8M</td><td class="crd-td">590k</td><td class="crd-td">Jiangnan, Huguang and Jiangxi</td></tr>
<tr><td class="crd-td"><strong>Ming-Qing Transition Crisis</strong></td><td class="crd-td">1644AD</td><td class="crd-td">146,9M</td><td class="crd-td">580k</td><td class="crd-td">Southwest and Lingnan Refuges</td></tr>
<tr><td class="crd-td"><strong>Mid-Qing High Imperial Zenith</strong></td><td class="crd-td">1776AD</td><td class="crd-td">311,3M</td><td class="crd-td">610k</td><td class="crd-td">Jiangnan, Sichuan and North China</td></tr>
<tr><td class="crd-td"><strong>Late Qing Eve of Taiping Rebellion</strong></td><td class="crd-td">1851AD</td><td class="crd-td">443,6M</td><td class="crd-td">635k</td><td class="crd-td">Yangtze Basin and Inland Core</td></tr>
<tr><td class="crd-td"><strong>Late Qing Post-Taiping Trough</strong></td><td class="crd-td">1880AD</td><td class="crd-td">377,2M</td><td class="crd-td">630k</td><td class="crd-td">North China and Coastal Treaties</td></tr>
<tr><td class="crd-td"><strong>Late Qing Xuanthong Census Baseline</strong></td><td class="crd-td">1911AD</td><td class="crd-td">418,8M</td><td class="crd-td">643k</td><td class="crd-td">Manchuria, Yangtze and Coastal Ports</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Long-run Chinese and Mongolian population benchmarks across major imperial dynastic peaks and transition crises from 2AD to 1911AD.</figcaption>
</figure>

## Twentieth-Century Transition, Warfare and Modern Industrialisation

Between the collapse of the Qing Empire in 1911-1912AD and the mid-twentieth century, East Asia endured profound political, social and military upheavals [@hou2001zhongguo; @cao2024population]. In China, early Republican Ministry of the Interior surveys in 1912, 1928 and 1936 documented steady expansion from 416,59M in 1910AD to 474M in 1928AD and 515M on the eve of the Second Sino-Japanese War in 1936AD.

Wartime mortality between 1937 and 1945AD was severe, marked by mass internal displacement into western Sichuan, Yunnan and Guizhou, heavy casualties in Japanese bombing campaigns and military battles, and the catastrophic 1938 Yellow River dyke breach and 1942-1943 Henan famine. Following the conclusion of the Chinese Civil War (1945 to 1949AD), political consolidation under the People's Republic of China paved the way for the first comprehensive, scientifically conducted census of 30 June 1953, which recorded 590,33M persons across the mainland [@nbs1954census].

Concurrently, Taiwan experienced rapid modernisation under Japanese colonial rule (1895 to 1945AD). Detailed quinquennial census enumerations documented population expanding from 3,04M in 1905AD to 5,87M in 1940AD, driven by public health infrastructure, malaria control, and expanding irrigation networks [@taiwan_colonial_census1940]. Post-1945 retrocession and the 1949 Nationalist refugee influx lifted Taiwan's population to 7,4M in 1949AD and 8,44M by 1953AD [@taiwan_moi2025].

In Mongolia, the revolutionary transformation from the theocratic Bogd Khanate (596,3k in 1912AD) to the socialist Mongolian People's Republic (1924AD) fundamentally reshaped public health. The introduction of modern medical facilities, the systematic eradication of endemic syphilis and tuberculosis, and state pronatalist family allowances triggered a rapid demographic transition, carrying population from 647,5k in the 1918 census to 845,5k in 1956AD, 1,19M in 1969AD, and 2,04M by 1989AD [@NSOMongoliaHistoricalCensuses; @NSOMongolia2025PxWeb].

## Contemporary Demographic Realignment across Greater China and Mongolia

Over the seven decades since the 1953 census, the contemporary module (Section 4) charts rapid expansion followed by unprecedented demographic ageing and urban concentration (Figure \ref{fig:urban-hierarchy}).

<figure class="crd-figure-block" id="fig:urban-hierarchy">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0/fig4_jade_urban_hierarchy.png" alt="fig:urban-hierarchy" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Urban settlement hierarchies across historical dynasties and contemporary East Asia: five-regime rank-size distributions and top urban agglomerations led by Chongqing and Shanghai.</figcaption>
</figure>

In the People's Republic of China, seven national decennial censuses trace the modern demographic trajectory:
- 1953 Census: 590,33M across all 28 contemporary administrative divisions;
- 1964 Census: 694,58M, reflecting rapid post-famine recovery;
- 1982 Census: 1.008,18M, the first computerised modern census documenting the billion-person milestone;
- 1990 Census: 1.133,68M, amidst the rollout of family planning restrictions;
- 2000 Census: 1.265,83M, capturing accelerated rural-to-urban labour migration;
- 2010 Census: 1.339,72M, recording deep metropolitan expansion along the eastern seaboard;
- 2020 Census: 1.441,5M, marking the historic peak of mainland Chinese population before fertility transitions brought numbers to 1.435,09M in 2026AD.

Parallel census data from Taiwan, Hong Kong and Macao document dense maritime urbanisation. Taiwan grew from 8,44M in 1953AD to 18,46M in 1982AD and 23,56M in 2020AD (stabilising at 23,38M in 2026AD) [@taiwan_moi2025]. Hong Kong expanded from 2,24M in 1953AD to 5,26M in 1982AD and 7,54M in 2026AD [@hk_censtatd2025], while Macao grew from 188k in 1953AD to 690k in 2026AD [@macao_dsec2025].

Urban agglomeration hierarchies illustrated in Figure \ref{fig:urban-hierarchy} demonstrate the emergence of massive polycentric megalopolitan clusters: the Yangtze River Delta (anchored by Shanghai at 22,83M, Suzhou, Hangzhou and Nanjing), the Guangdong-Hong Kong-Macao Greater Bay Area (Guangzhou at 14,88M, Shenzhen at 13,85M, Hong Kong, Dongguan and Foshan), the Jing-Jin-Ji region (Beijing at 19,16M and Tianjin at 11,55M), and the upper Yangtze basin (Chongqing municipality at 23,6M and Chengdu at 14,1M). In Mongolia, rapid post-socialist migration concentrated 1,65M people—over forty-five per cent of the national total of 3,62M—into the capital Ulaanbaatar by 2026AD.

<figure class="crd-table-figure" id="tab:urban-hierarchy">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Agglomeration</th><th class="crd-th">Administrative Region</th><th class="crd-th">2020 Pop.</th><th class="crd-th">2026 Pop.</th><th class="crd-th">Historical Heritage and Function</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Chongqing</td><td class="crd-td">Chongqing Municipality</td><td class="crd-td">23,6M</td><td class="crd-td">23,52M</td><td class="crd-td">Wartime Republican capital (1937-1945); Upper Yangtze river hub</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Shanghai</td><td class="crd-td">Shanghai Municipality</td><td class="crd-td">22,83M</td><td class="crd-td">22,78M</td><td class="crd-td">Modern treaty port and financial core; Yangtze River Delta anchor</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Beijing</td><td class="crd-td">Beijing Municipality</td><td class="crd-td">19,16M</td><td class="crd-td">19,1M</td><td class="crd-td">Imperial capital of Yuan, Ming, Qing; political centre of PRC</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Guangzhou</td><td class="crd-td">Guangdong Province</td><td class="crd-td">14,88M</td><td class="crd-td">14,92M</td><td class="crd-td">Ancient maritime silk road port; Lingnan administrative capital</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Chengdu</td><td class="crd-td">Sichuan Province</td><td class="crd-td">14,1M</td><td class="crd-td">14,15M</td><td class="crd-td">Shu-Han capital; Tianfu agrarian core of Sichuan Basin</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Shenzhen</td><td class="crd-td">Guangdong Province</td><td class="crd-td">13,85M</td><td class="crd-td">13,9M</td><td class="crd-td">Special Economic Zone pioneer; Pearl River Delta technology centre</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Tianjin</td><td class="crd-td">Tianjin Municipality</td><td class="crd-td">11,55M</td><td class="crd-td">11,5M</td><td class="crd-td">Northern port gateway to Beijing; Hai River transport hub</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Wuhan</td><td class="crd-td">Hubei Province</td><td class="crd-td">10,39M</td><td class="crd-td">10,42M</td><td class="crd-td">Three-town industrial core; Middle Yangtze railway crossing</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Dongguan</td><td class="crd-td">Guangdong Province</td><td class="crd-td">8,35M</td><td class="crd-td">8,38M</td><td class="crd-td">Manufacturing heartland of the Pearl River Delta corridor</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Hong Kong</td><td class="crd-td">Hong Kong SAR</td><td class="crd-td">7,48M</td><td class="crd-td">7,54M</td><td class="crd-td">Global financial treaty port and Victoria Harbour maritime hub</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Foshan</td><td class="crd-td">Guangdong Province</td><td class="crd-td">7,42M</td><td class="crd-td">7,45M</td><td class="crd-td">Lingnan artisanal ceramic and iron casting commercial centre</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Nanjing</td><td class="crd-td">Jiangsu Province</td><td class="crd-td">7,35M</td><td class="crd-td">7,4M</td><td class="crd-td">Capital of Six Dynasties, Early Ming and the Republic of China</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Hangzhou</td><td class="crd-td">Zhejiang Province</td><td class="crd-td">7,23M</td><td class="crd-td">7,3M</td><td class="crd-td">Southern Song imperial capital (Lin'an); West Lake urban centre</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Xi'an</td><td class="crd-td">Shaanxi Province</td><td class="crd-td">6,85M</td><td class="crd-td">6,9M</td><td class="crd-td">Ancient Chang'an; capital of Western Han, Sui and Tang empires</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Ulaanbaatar</td><td class="crd-td">Mongolia Capital</td><td class="crd-td">1,55M</td><td class="crd-td">1,65M</td><td class="crd-td">Capital of the Bogd Khanate and modern Mongolia; Tuul River core</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Top fifteen urban agglomerations in Project JADE detailing administrative jurisdiction, 2020 and 2026 populations, and historical significance.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:macro-continuity">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Project Section</th><th class="crd-th">Temporal Span</th><th class="crd-th">Areal Divisions</th><th class="crd-th">Settlements</th><th class="crd-th">Start Pop.</th><th class="crd-th">Peak Pop.</th><th class="crd-th">End Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Section 1: Pre-1912 Mongolia (2 modules)</strong></td><td class="crd-td">10000BC-1912AD</td><td class="crd-td">6 zones / 6 aimags</td><td class="crd-td">1.657 settlements</td><td class="crd-td">15k (10000BC)</td><td class="crd-td">780k (1290AD)</td><td class="crd-td">644k (1912AD)</td></tr>
<tr><td class="crd-td"><strong>Section 2: Dynastic China (6 modules)</strong></td><td class="crd-td">10000BC-1953AD</td><td class="crd-td">13-28 historical provinces</td><td class="crd-td">182.673 settlements</td><td class="crd-td">180k (10000BC)</td><td class="crd-td">590,3M (1953AD)</td><td class="crd-td">590,3M (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Section 3: Modern Mongolia (1 module)</strong></td><td class="crd-td">1912AD-2026AD</td><td class="crd-td">22 aimags and Ulaanbaatar</td><td class="crd-td">256 settlements</td><td class="crd-td">596,3k (1912AD)</td><td class="crd-td">3,62M (2026AD)</td><td class="crd-td">3,62M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>Section 4: Modern China, Taiwan, HK, Macao (1 module)</strong></td><td class="crd-td">1949AD-2026AD</td><td class="crd-td">34 provincial units</td><td class="crd-td">44.223 settlements</td><td class="crd-td">544,5M (1949AD)</td><td class="crd-td">1,473B (2020AD)</td><td class="crd-td">1,467B (2026AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Structural synthesis of Project JADE across all four chronological sections, documenting spatial units, gazetteer coverage, and demographic bounds.</figcaption>
</figure>

# Comparison with Global Baselines

Contrasting Project JADE against earlier global reconstructions—notably the History Database of the Global Environment (HYDE 3.1 and HYDE 3.2) [@KleinGoldewijk2010; @KleinGoldewijk2017], Angus Maddison's historical accounts [@Maddison2001], and Colin McEvedy and Richard Jones's atlas [@McEvedyJones1978]—reveals major methodological and empirical divergences.

Table \ref{tab:global-comparison} contrasts Project JADE macro totals against these three global compilations across key historical benchmarks from 1000BC to 1950AD.

<figure class="crd-table-figure" id="tab:global-comparison">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark Horizon</th><th class="crd-th">JADE Total</th><th class="crd-th">HYDE 3.2</th><th class="crd-th">Maddison (2001)</th><th class="crd-th">McEvedy and Jones (1978)</th><th class="crd-th">Methodological Distinction</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1000BC (Late Shang and Early Western Zhou)</strong></td><td class="crd-td">13,7M</td><td class="crd-td">13,5M</td><td class="crd-td">-</td><td class="crd-td">13M</td><td class="crd-td">JADE integrates Erlitou, Shang and Zhou sites with HydroBASINS catchments.</td></tr>
<tr><td class="crd-td"><strong>2AD (Western Han Census Peak)</strong></td><td class="crd-td">63,4M</td><td class="crd-td">55,2M</td><td class="crd-td">59,6M</td><td class="crd-td">50M</td><td class="crd-td">JADE adopts Ge Jianxiong 2AD census correction for uncounted borderlands.</td></tr>
<tr><td class="crd-td"><strong>750AD (Tang Dynasty Tianbao Zenith)</strong></td><td class="crd-td">74,6M</td><td class="crd-td">50,1M</td><td class="crd-td">56M</td><td class="crd-td">50M</td><td class="crd-td">JADE incorporates Dong Guodong Tianbao 14 registration and household scale.</td></tr>
<tr><td class="crd-td"><strong>1200AD (Southern Song and Jin Coexistence)</strong></td><td class="crd-td">138,7M</td><td class="crd-td">115M</td><td class="crd-td">110M</td><td class="crd-td">115M</td><td class="crd-td">JADE captures Wu Songdi Southern Song and Jin dual-core agrarian peak (138M).</td></tr>
<tr><td class="crd-td"><strong>1600AD (Late Ming Commercial Expansion)</strong></td><td class="crd-td">185,6M</td><td class="crd-td">148M</td><td class="crd-td">160M</td><td class="crd-td">150M</td><td class="crd-td">JADE reflects Cao Shuji Late Ming New World crop and commercial surge.</td></tr>
<tr><td class="crd-td"><strong>1850AD (Late Qing Eve of Taiping Rebellion)</strong></td><td class="crd-td">444,2M</td><td class="crd-td">412M</td><td class="crd-td">412M</td><td class="crd-td">430M</td><td class="crd-td">JADE captures Cao Shuji 1851AD pre-Taiping peak (443,6M) before war collapse.</td></tr>
<tr><td class="crd-td"><strong>1950AD (Post-War National Census Transition)</strong></td><td class="crd-td">554,8M</td><td class="crd-td">552M</td><td class="crd-td">546,8M</td><td class="crd-td">560M</td><td class="crd-td">JADE aligns with PRC 1953, Taiwan 1953 and NSO Mongolia censuses.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Comparison of Project JADE East Asian macro population totals against global historical baselines (HYDE 3.2, Maddison, and McEvedy and Jones) from 1000BC to 1950AD.</figcaption>
</figure>

Three structural differences distinguish JADE from earlier global syntheses:

First, **amplitude of dynastic cycles**: Global compilations such as HYDE and Maddison apply monotonic or smoothed demographic curves between widely separated benchmark years, severely dampening the real amplitude of dynastic expansions and catastrophic transition collapses. In 2AD, HYDE 3.2 estimates China's population at 55,2M, and McEvedy and Jones propose 50M; JADE demonstrates a Han peak of 63,4M (including 350k on the steppe) based on Ge Jianxiong's rigorous accounting of under-registered commanderies and non-taxable households [@gejianxiong2002zhongguo]. In 750-755AD, HYDE and McEvedy assume approximately 50M, whereas Dong Guodong's analysis of the Tianbao census establishes 74M [@dong2002zhongguo]. The divergence is most striking around 1200-1210AD, where global baselines estimate 110M to 115M, while Wu Songdi's reconstruction of the Southern Song and Jurchen Jin dual core documents 138M [@wusongdi2000zhongguo]. Global models subsequently miss the depth of the thirteenth-century Mongol conquest shock, which reduced northern and southern populations to 78M by 1290AD—a contraction of over forty-three per cent documented in local gazetteers and cadastres. Similarly, in 1850-1851AD, JADE establishes 443,6M on the eve of the Taiping Rebellion, capturing the subsequent sixty-million excess mortality drop that smoothed global models flatten.

Second, **spatial distribution and frontier timing**: Top-down downscaling models rely on modern land-cover, road network and city distributions to disaggregate historical population, creating pervasive backward-projection bias. In HYDE 3.2, substantial populations appear in the Lower Yangtze delta, coastal Guangdong and Manchuria during the Han and Tang dynasties. JADE's non-stationary Matérn kriging substrata anchor population to verified archaeological and epigraphic find-spots, keeping Han population firmly clustered along the Yellow River and Guanzhong loess soils, and documenting the southward migration into the rice paddies of Jiangnan, Lake Tai and the Gan River only as it historically occurred during the Tang-Song transition.

Third, **settlement granularity and urban continuity**: Global urban databases (such as Chandler 1987 and Modelski 2003) adopted arbitrary city thresholds (such as 20k or 40k inhabitants), omitting the tens of thousands of walled county seats (*xian*), garrison towns (*wei-suo*), monastic centres (*gonpa* and *khiid*), ancient villages and commercial market towns (*zhen*) that formed the real backbone of East Asian settlement hierarchies. By compiling 228.809 settlement-chapter records with continuous trajectories from each chapter's gazetteer archive, JADE eliminates the artificial 1820 and twentieth-century urban step discontinuities that occur when pre-existing towns enter tabular compilations for the first time.

# Limitations

Four primary methodological limitations should be considered when utilising Project JADE outputs:

First, archaeological sampling intensity varies across ecological and economic zones. In eastern agricultural China, intensive capital construction and highway projects have yielded tens of thousands of salvage excavations (reflected in the 51.432 sites compiled by Hosner et al. 2016), whereas survey density is substantially sparser across the high-altitude Tibetan Plateau, the Tarim Basin desert rims and the northern Mongolian taiga. While the use of HydroBASINS Level 6 catchments, biophysical covariates and Poisson-Gamma shrinkage damps these survey gradients, residual coverage disparities remain.

Second, imperial household registers vary in recording criteria across dynastic regimes. The conversion of registered *ding* or fiscal taxable shares into total de facto population requires estimating household dependency ratios and female under-registration rates. Although JADE follows the standard methodologies established by the Fudan University demographic history group, confidence intervals widen for chaotic transition intervals such as the Sixteen Kingdoms (fourth century AD) and the Five Dynasties (tenth century AD).

Third, pastoral nomadic demography on the steppe operates under distinct seasonal mobility patterns. Nomadic encampments (*aals*) and mobile monasteries leave fewer permanent archaeological remains than masonry agricultural cities. Consequently, steppe population estimates before modern censuses rely on carrying-capacity envelopes calibrated by livestock ratios and mortuary monument distributions rather than permanent residential foundations.

Fourth, modern administrative boundary changes require careful georeferencing. In China, the separation of Hainan from Guangdong in 1988AD, the creation of Chongqing municipality from Sichuan in 1997AD, and ongoing county-to-district conversions (*chexian shequ*) complicate longitudinal parish-level comparisons. JADE resolves this through stable raster cell allocation on the 5-arcminute grid, but fine-scale historical county boundaries must be interpreted within their contemporary provincial definitions.

# Conclusion

Project JADE establishes an empirical, spatially continuous demographic reconstruction of continental East Asia from 10000BC to 2026AD. By synthesising 87.981 composite archaeological site observations, ten non-stationary Matérn kriging horizons, the authoritative six-volume *Zhongguo Renkou Shi* dynastic itinerary, and modern statistical enumerations across 179 sub-regions and 228.809 catalogued settlement-chapter records, JADE overcomes the distortions of earlier top-down continental models.

The resulting dataset provides an open, geostatistically documented baseline for comparative long-run studies of human adaptation, environmental transformation, urbanisation and demographic cycles across China, Mongolia, Taiwan, Hong Kong and Macao.

# Sources

<div id="refs"></div>
