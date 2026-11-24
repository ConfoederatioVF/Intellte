---
title: "Ancient and Mediaeval Sudan and Nubia"
subtitle: "Kush, Meroe, Christian Nubia and Islamisation to 1821"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: ancient_mediaeval_nubia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Eight ecological and political sub-regions and 132 individually assessed settlements across Sudan, South Sudan and adjacent Eritrean and Ethiopian borderlands from 2500BC to 1821AD."
hero_label: "fig:hero-ancient-mediaeval-nubia"

header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{10pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{10pt plus 2pt minus 2pt}
  - \raggedbottom

output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between the emergence of the Kerma polity around 2500BC and the Turco-Egyptian invasion of Sennar in 1821AD, the Middle Nile Valley and its savanna and desert hinterlands sustained a shifting constellation of riverine kingdoms, Red Sea trading ports and Sahelian sultanates. Across a study domain of 2.421.123 km² spanning modern Sudan, South Sudan and adjoining Eritrean and Ethiopian margins, NICETHI reconstructs a regional population rising from 328,6k inhabitants in 2000BC to 3,24M at the Meroitic peak around year 0, moderating to 2,38M in 800AD during the Christian Nubian era and expanding across the savanna belt to 3,89M in 1500AD, 4,8M in 1700AD and 3,83M in 1820AD. Demographic gravity moved steadily southward over four millennia. Early urban concentrations clustered along the Dongola Reach and Lower Nubian cataracts at Kerma, Napata and Old Dongola, shifted onto the Island of Meroe and the Blue Nile confluence at Meroe and Soba during Kushite and Alodian rule, and ultimately settled in the rain-fed Gezira, Darfur, Kordofan and Upper Nile plains under the Funj, Keira and Shilluk states as northern cataract reaches desiccated. These trajectories integrate 132 individually assessed settlements (364 dated observations), non-stationary Matérn kriging across 6.431 continental Voronoi catchments, cross-frontier harmonisation along the Sahara-Sahel margin and strictly mass-conserving pycnophylactic disaggregation into colonial and post-independence census polygons.



# Background

## Ecological Corridors from the Cataracts to the Sudd

The historical demography of ancient and mediaeval Sudan was shaped by a sharp meridional gradient in rainfall, river morphology and pastoral mobility [@Adams1977Nubia; @Edwards2004NubianPast; @Guilbault2026EmbodimentAnd]. North of the confluence of the White and Blue Niles near modern Khartoum, annual precipitation drops below 150 mm, confining permanent agrarian settlement to narrow alluvial pockets along the Main Nile between the Sixth and First Cataracts. Through the Batn el-Hajar and Lower Nubia, rocky granite ridges pinch the floodplain into discontinuous silt terraces where cultivation depended historically on seasonal basin recession and later on animal-driven waterwheels [@Adams1977Nubia; @Budka2023DayThe]. Only in the wider Dongola Reach and Letti Basin between the Third and Fourth Cataracts, and again upstream across the Shendi Reach and Atbara-Butana steppe, did broad alluvial islands and seasonal *wadis* support substantial urban capitals such as Kerma, Napata, Old Dongola and Meroe [@Osypinski2023NewAdvances; @Bobrowski2023Ltd1Kerma].

South of the confluence, the ecological geometry widens markedly. Across the Gezira clay plain between the Blue and White Niles, annual rainfall of 300 to 600 mm supports rain-fed sorghum alongside riverine recessional plots, creating the productive core that later sustained Alodia and the Funj Sultanate [@Spaulding1985HeroicAge; @Gregory2025CapturingEmpire]. Westward, the semi-arid Kordofan plateau and the volcanic massif of Jebel Marra in Darfur trap orographic moisture that sustained terraced upland farming and caravan crossroads linking the Nile to Lake Chad [@Arkell1937FasherDarfur]. Eastward, the Red Sea Hills and Gash inland delta supported mobile Beja pastoralists and maritime entrepôts at Aidhab, Badi and Suakin [@Costanzo2021CreatingThe; @GonzalezRuibal2017SudansEastern]. Southward beyond the tenth parallel, the vast Sudd wetlands and Sobat-Pibor floodplains gave rise to specialised Nilotic agro-pastoral and riverine polities led by the Shilluk rethdom [@Dercole2021SeventyYears; @Runfola2020GeoBoundaries].

## Historiography of Nubian and Sudanese Historical Demography

For much of the twentieth century, quantitative estimates of Sudan's pre-colonial population rested on scattered classical notices by Herodotus, Strabo and Pliny, mediaeval Arabic geographies by Ibn Selim al-Aswani and al-Maqrizi, and nineteenth-century European travel accounts by Burckhardt, Browne, Krump, Bruce and Cailliaud [@Adams1977Nubia; @Spaulding1985HeroicAge]. The Aswan High Dam salvage campaigns of the 1960s, followed by decades of Sudanese-international excavations at Kerma, Sai Island, Amara West, Jebel Barkal, Meroe, Soba, Old Dongola, Banganarti and Jebel Moya, transformed that textual picture into concrete spatial archaeology [@Naser2019DialoguesThe; @Bashir2026ArchaeologyAnd; @Dercole2021SeventyYears]. Surface transects and stratigraphic soundings established city footprints, cemetery horizons and shifts in settlement spacing across four millennia [@Edwards2004NubianPast; @Bobrowski2023Ltd1Kerma; @Budka2023DayThe].

Yet archaeological fieldwork has remained heavily concentrated along the northern cataracts, leaving Darfur, Kordofan, the southern Gezira and the Upper Nile comparatively under-excavated [@Naser2019DialoguesThe; @Costanzo2021CreatingThe]. Bioarchaeological, archaeobotanical and experimental archaeometallurgical studies over the past decade have begun to close this evidentiary divide, documenting dietary resilience during Holocene aridification, iron-smelting fuel demands at Meroe and agricultural continuity across the Christian-Islamic transition at Old Dongola [@Moyne2023EcologicalFlexibility; @Humphris2018IronSmelting; @Nasreldein2026ContinuityChange; @Guilbault2026EmbodimentAnd]. NICETHI synthesises these uneven regional records into a unified sub-regional demographic series from 2500BC to 1821AD, pairing site-level archaeological reconstructions with continuous spatial kriging and backward-linked administrative census polygons.

# Methodology

## Territorial Partition and Sub-Regional Accounting

The study domain covers 2.421.123 km² across 29.061 five-arcminute cells (100% bounded within Sub-Saharan Africa's Nile-Sudanic macro-corridor). Within NICETHI, this chapter belongs to Regime 2 (dynastic and imperial antiquity through early modern pre-colonial states, 2500BC to 1821AD), succeeding the prehistoric Sub-Saharan synthesis at 2500BC and handing off directly at the 1821AD Turco-Egyptian conquest to the early modern Sahel-Sudan and colonial Horn-Sudan chapters. To respect physical hydrography and historical polities rather than anachronistic colonial borders, the domain is partitioned into eight contiguous sub-regions summarised in Table \ref{tab:subregions}: Lower Nubia and Nobatia, Makuria with Napata and the Dongola Reach, the Island of Meroe with Alodia and Atbara-Butana, the Beja Highlands and Suakin Littoral, the Funj Sultanate of Sennar and Blue Nile Gezira, the Daju-Tunjur-Keira Sultanate of Darfur, Kordofan Savanna and the Nuba Mountains, and the Shilluk Kingdom with the Sudd and Southern Nilotes.

Fourteen benchmark years structure the demographic series: 2000BC, year 0, 300AD, 500AD, 800AD, 1000AD, 1200AD, 1500AD, 1700AD, 1720AD, 1750AD, 1770AD, 1800AD and 1820AD. Sub-regional headcounts represent full resident populations, combining urban capitals, fortified river towns, agricultural villages, oasis camps and transhumant pastoral groups anchored to regional grazing circuits [@Moyne2023EcologicalFlexibility; @Costanzo2021CreatingThe].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Era</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Area Share (%)</th><th class="crd-th">Assessed Sites</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Nubia and Nobatia</strong></td><td class="crd-td">-2500-1500</td><td class="crd-td">139.635</td><td class="crd-td">1.741</td><td class="crd-td">5,8</td><td class="crd-td">17</td></tr>
<tr><td class="crd-td"><strong>Makuria, Napata and Dongola Reach</strong></td><td class="crd-td">-2500-1500</td><td class="crd-td">284.363</td><td class="crd-td">3.477</td><td class="crd-td">11,7</td><td class="crd-td">24</td></tr>
<tr><td class="crd-td"><strong>Island of Meroe, Alodia and Atbara-Butana</strong></td><td class="crd-td">-1000-1504</td><td class="crd-td">188.975</td><td class="crd-td">2.289</td><td class="crd-td">7,8</td><td class="crd-td">26</td></tr>
<tr><td class="crd-td"><strong>Beja Highlands, Blemmyes and Suakin Littoral</strong></td><td class="crd-td">-2500-1821</td><td class="crd-td">253.909</td><td class="crd-td">3.126</td><td class="crd-td">10,5</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Funj Sultanate of Sennar and Blue Nile Gezira</strong></td><td class="crd-td">1504-1821</td><td class="crd-td">226.416</td><td class="crd-td">2.700</td><td class="crd-td">9,4</td><td class="crd-td">14</td></tr>
<tr><td class="crd-td"><strong>Daju, Tunjur and Keira Sultanate of Darfur</strong></td><td class="crd-td">1200-1821</td><td class="crd-td">418.119</td><td class="crd-td">4.999</td><td class="crd-td">17,3</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Kordofan Savanna and Nuba Mountains</strong></td><td class="crd-td">-1000-1821</td><td class="crd-td">315.997</td><td class="crd-td">3.768</td><td class="crd-td">13,1</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Shilluk Kingdom, Sudd and Southern Nilotes</strong></td><td class="crd-td">1490-1821</td><td class="crd-td">593.709</td><td class="crd-td">6.961</td><td class="crd-td">24,5</td><td class="crd-td">13</td></tr>
<tr><td class="crd-td"><strong>Total Sudan and Nubia</strong></td><td class="crd-td">2500BC-1821AD</td><td class="crd-td">2.421.123</td><td class="crd-td">29.061</td><td class="crd-td">100</td><td class="crd-td">128</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Eight Sudanese and Nubian ecological and political sub-regions showing equal-area surface, five-arcminute pixel count, territorial share and mask-interior settlement counts (128 mask-interior plus four borderland sites equal 132).</figcaption>
</figure>

## Settlement Gazetteer Screening and Site-Level Reconstruction

To anchor urban scaling and spatial covariance, 140 candidate towns, tells, fortresses and archaeological habitation sites were screened from excavation monographs, survey catalogues, historical itineraries, Pleiades coordinates and regional registers [@Pleiades2024Africa; @Dercole2021SeventyYears; @Osypinski2023NewAdvances]. Eight duplicate spelling aliases (including redundant entries for El Fasher, El Obeid, Sennar, Shendi, Suakin, Fashoda and Kutum) were merged into canonical entries, leaving 132 individually assessed settlements across 364 dated observations: 115 in modern Sudan, 13 in South Sudan, 2 on the upper Sobat-Kaffa borderland in Ethiopia and 2 in adjacent Eritrean highlands. All 132 entries record core city-proper populations rather than broad metropolitan agglomerations, preventing inflated modern catchment boundaries from distorting pre-industrial urban ranks.

Recorded active centres expand across the period in step with both urban growth and surviving documentary richness. Eleven settlements hold attested population estimates at 2000BC, rising to 24 at year 0, 21 at 300AD and 500AD, 21 at 1200AD, 21 at 1500AD and 29 at 1700AD before settling around 42 in 1800AD and 32 in 1820AD. Individual site peaks derive from excavated walled footprints and residential density transects (typically 60 to 150 inhabitants per hectare depending on compound spacing) calibrated against pre-colonial African urban density benchmarks [@Budka2023DayThe; @Spaulding1985HeroicAge].

## Non-Stationary Matérn Kriging and Continental Harmonisation

Point settlement ledgers inevitably undercount dispersed agro-pastoral villages in regions lacking systematic surface survey [@Costanzo2021CreatingThe; @Naser2019DialoguesThe]. NICETHI therefore distributes sub-regional population totals across five-arcminute cells using non-stationary Paciorek-Schervish Matérn ($\nu = 3/2$) residual kriging calibrated across 24.537 domestic archaeological sites and 6.431 metric-isotropic Voronoi catchments (1.731 active catchments over 290.451 valid land cells). Median Voronoi catchment radius across the continental mosaic stands at 31,72 km (90th percentile 49,29 km). Across the eight archaeological horizons spanning 2500BC to 1821AD - from the Kerma and Late Neolithic horizon through the Kushite Early Iron Age, Classical Meroitic, Late Antique Christian Nubian, Mediaeval and Early Modern horizons - weighted least-squares variogram fitting converges at dimensionless short-range correlation $\tau_1 = 1,35$ (raw $\tau_1$ between 1,38 and 1,42), secondary scale $\tau_2 = 2,9$, nugget-to-sill ratio 0,04 and effective short-range spatial correlation between 43,63 km and 45,16 km ($R^2 = 0,9991$ to $0,9992$).

Five biophysical covariates drive the deterministic trend before residual kriging: baseline habitability ($\beta_0$ shifting from 0,1497 in the Kerma horizon to 0,01 in mediaeval and early modern horizons), natural biome productivity ($\beta_1 = 0,01$), ecological suitability ($\beta_2$ from 0,0597 to 0,01), fluvial proximity ($\beta_3$ from 0,1099 to 0,0595) and coastal access ($\beta_4$ from 0,1012 to 0,0717). Purely biophysical agro-ecological smoothing gates perennial Nile corridors while pruning hyper-arid Saharan numerical scatter beyond oasis and wadi habitats, and a 2-pixel urban buffer excludes modern Khartoum sprawl from prehistoric and mediaeval layers. Along the northern and western margins linking Sudan, Chad, Niger, Mali and Mauritania, an 18-pixel cross-frontier ribbon harmonises NICETHI with HANDBOOK across 77 rasters, cutting median cross-border logarithmic density discontinuities from 0,6 dex down to 0 dex across 39 boundary pairs. Downward linkage to geoBoundaries modern administrative units [@Runfola2020GeoBoundaries] and Anglo-Egyptian Sudan colonial provinces (Nubian Nile, Darfur, Kordofan, Atbara-Gezira, Red Sea Hills and Sobat-Upper Nile) uses strictly mass-conserving pycnophylactic areal scaling across 30.911 unit-year checks (100% pass rate within 0,01%, maximum unit relative error 5,6e-8).

# Testing and Validation

## Variogram Diagnostics and Rank-Size Scaling

Across all horizons relevant to Sudan and Nubia, fluvial proximity ($\beta_3 = 0,06$ to $0,11$) and coastal access ($\beta_4 = 0,07$ to $0,10$) remain five to ten times stronger than background biome productivity once iron-age and mediaeval urbanisation matures, cleanly isolating the Main, Blue and White Nile ribbons, the Gash delta and the Red Sea anchorages from intervening hyper-arid desert. At the settlement scale, rank-size regression on peak populations across the 131 spatially deduplicated centres (merging overlapping Wad Medani coordinates) yields an ordinary least-squares Pareto slope of $q = 0,74$ ($R^2 = 0,98$) over the upper 66 centres and a full-sample slope of $q = 1,03$ ($R^2 = 0,79$), as plotted in Figure \ref{fig:ranksize}. That sub-unitary upper-tail slope ($q < 1$) matches a polycentric urban network in which regional capitals across sequential dynasties - Soba (32,4k), Meroe (29,4k), Sennar (28,6k), Old Dongola (23,8k), Napata (16,4k) and Kerma (14,7k) - never concentrated population into a single primate metropolis on the scale of Lower Egypt or Mesopotamia [@Adams1977Nubia; @Edwards2004NubianPast].

<figure class="crd-table-figure" id="tab:top-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Lat</th><th class="crd-th">Lon</th><th class="crd-th">Peak</th><th class="crd-th">Peak Year</th><th class="crd-th">Span</th><th class="crd-th">Primary Basis</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Soba</strong></td><td class="crd-td">Sudan</td><td class="crd-td">15,53</td><td class="crd-td">32,68</td><td class="crd-td">32,4k</td><td class="crd-td">1000AD</td><td class="crd-td">550AD-1500AD</td><td class="crd-td">Welsby, D. A. &amp; Daniels, C. M. (1991) Soba: A...</td></tr>
<tr><td class="crd-td"><strong>Meroe</strong></td><td class="crd-td">Sudan</td><td class="crd-td">16,94</td><td class="crd-td">33,71</td><td class="crd-td">29,4k</td><td class="crd-td">100AD</td><td class="crd-td">700BC-350AD</td><td class="crd-td">Shinnie, P. L. &amp; Anderson, J. R. (2004) The C...</td></tr>
<tr><td class="crd-td"><strong>Sannār</strong></td><td class="crd-td">Sudan</td><td class="crd-td">13,55</td><td class="crd-td">33,6</td><td class="crd-td">28,6k</td><td class="crd-td">1701AD</td><td class="crd-td">1550AD-1821AD</td><td class="crd-td">CBS Sudan (1973-2008)</td></tr>
<tr><td class="crd-td"><strong>Old Dongola</strong></td><td class="crd-td">Sudan</td><td class="crd-td">18,22</td><td class="crd-td">30,74</td><td class="crd-td">23,8k</td><td class="crd-td">1000AD</td><td class="crd-td">550AD-1814AD</td><td class="crd-td">Godlewski, W. (2013) Dongola - Ancient Tungul...</td></tr>
<tr><td class="crd-td"><strong>Napata</strong></td><td class="crd-td">Sudan</td><td class="crd-td">18,54</td><td class="crd-td">31,83</td><td class="crd-td">16,4k</td><td class="crd-td">680BC</td><td class="crd-td">1400BC-600AD</td><td class="crd-td">Kendall, T. (1999) The Origin of the Napatan ...</td></tr>
<tr><td class="crd-td"><strong>Kerma</strong></td><td class="crd-td">Sudan</td><td class="crd-td">19,63</td><td class="crd-td">30,41</td><td class="crd-td">14,7k</td><td class="crd-td">1650BC</td><td class="crd-td">2500BC-100AD</td><td class="crd-td">OECD/SWAC Africapolis 2024 Update (1950-2025)</td></tr>
<tr><td class="crd-td"><strong>Arbaji</strong></td><td class="crd-td">Sudan</td><td class="crd-td">14,7</td><td class="crd-td">33,37</td><td class="crd-td">11,2k</td><td class="crd-td">1700AD</td><td class="crd-td">1520AD-1772AD</td><td class="crd-td">Poncet, C. J. (1709) A Voyage to Aethiopia, M...</td></tr>
<tr><td class="crd-td"><strong>Kawa</strong></td><td class="crd-td">Sudan</td><td class="crd-td">19,12</td><td class="crd-td">30,5</td><td class="crd-td">8,9k</td><td class="crd-td">680BC</td><td class="crd-td">1300BC-400AD</td><td class="crd-td">Macadam, M. F. L. (1955) The Temples of Kawa ...</td></tr>
<tr><td class="crd-td"><strong>Uri Settlement</strong></td><td class="crd-td">Sudan</td><td class="crd-td">14,23</td><td class="crd-td">24,48</td><td class="crd-td">8,6k</td><td class="crd-td">1480AD</td><td class="crd-td">1350AD-1600AD</td><td class="crd-td">Arkell, A. J. (1946) Darfur Antiquities III: ...</td></tr>
<tr><td class="crd-td"><strong>Al-Fāshir</strong></td><td class="crd-td">Sudan</td><td class="crd-td">13,63</td><td class="crd-td">25,37</td><td class="crd-td">8,6k</td><td class="crd-td">1810AD</td><td class="crd-td">1795AD-1810AD</td><td class="crd-td">CBS Sudan (1973-2008)</td></tr>
<tr><td class="crd-td"><strong>Al-Ubayyiḍ</strong></td><td class="crd-td">Sudan</td><td class="crd-td">13,18</td><td class="crd-td">30,22</td><td class="crd-td">8,5k</td><td class="crd-td">1821AD</td><td class="crd-td">1790AD-1821AD</td><td class="crd-td">CBS Sudan (1973-2008)</td></tr>
<tr><td class="crd-td"><strong>Kobbei</strong></td><td class="crd-td">Sudan</td><td class="crd-td">13,92</td><td class="crd-td">25,07</td><td class="crd-td">8,4k</td><td class="crd-td">1803AD</td><td class="crd-td">1750AD-1803AD</td><td class="crd-td">Browne, W. G. (1799) Travels in Africa, Egypt...</td></tr>
<tr><td class="crd-td"><strong>Sanam</strong></td><td class="crd-td">Sudan</td><td class="crd-td">18,49</td><td class="crd-td">31,83</td><td class="crd-td">8,2k</td><td class="crd-td">650BC</td><td class="crd-td">750BC-100BC</td><td class="crd-td">Griffith, F. L. (1922) Oxford Excavations in ...</td></tr>
<tr><td class="crd-td"><strong>Sawākin</strong></td><td class="crd-td">Sudan</td><td class="crd-td">19,09</td><td class="crd-td">37,33</td><td class="crd-td">8,2k</td><td class="crd-td">1814AD</td><td class="crd-td">1000AD-1814AD</td><td class="crd-td">CBS Sudan (1973-2008)</td></tr>
<tr><td class="crd-td"><strong>Faras</strong></td><td class="crd-td">Sudan</td><td class="crd-td">22,18</td><td class="crd-td">31,48</td><td class="crd-td">7,4k</td><td class="crd-td">800AD</td><td class="crd-td">1400BC-1350AD</td><td class="crd-td">Michalowski, K. (1967) Faras: Die Kathedrale ...</td></tr>
<tr><td class="crd-td"><strong>Wad Medani</strong></td><td class="crd-td">Sudan</td><td class="crd-td">14,39</td><td class="crd-td">33,52</td><td class="crd-td">6,4k</td><td class="crd-td">1821AD</td><td class="crd-td">1800AD-1821AD</td><td class="crd-td">Cailliaud, F. (1826) Voyage a Meroe</td></tr>
<tr><td class="crd-td"><strong>Bonga</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">7,28</td><td class="crd-td">36,23</td><td class="crd-td">6,3k</td><td class="crd-td">1700AD</td><td class="crd-td">1500AD-1700AD</td><td class="crd-td">CSA / ESS Ethiopia (1984-2022)</td></tr>
<tr><td class="crd-td"><strong>Shandī</strong></td><td class="crd-td">Sudan</td><td class="crd-td">16,69</td><td class="crd-td">33,44</td><td class="crd-td">5,4k</td><td class="crd-td">1814AD</td><td class="crd-td">1650AD-1814AD</td><td class="crd-td">CBS Sudan (1973-2008)</td></tr>
<tr><td class="crd-td"><strong>Shoba</strong></td><td class="crd-td">Sudan</td><td class="crd-td">13,85</td><td class="crd-td">24,85</td><td class="crd-td">5,3k</td><td class="crd-td">1780AD</td><td class="crd-td">1750AD-1800AD</td><td class="crd-td">Browne, W. G. (1799) Travels in Africa, Egypt...</td></tr>
<tr><td class="crd-td"><strong>Naqa</strong></td><td class="crd-td">Sudan</td><td class="crd-td">16,27</td><td class="crd-td">33,27</td><td class="crd-td">5,2k</td><td class="crd-td">50AD</td><td class="crd-td">150BC-250AD</td><td class="crd-td">Wildung, D. &amp; Kroeper, K. (2006) Naga: Royal ...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sixteen largest individually assessed settlements in Sudan, Nubia and adjacent borderlands with coordinates, peak populations and documented chronological spans.</figcaption>
</figure>

## Calibration Against Historical Enumerations and Regional Benchmarks

To anchor pre-industrial urban densities and late pre-colonial totals against external historical demography, Table \ref{tab:hist-benchmarks} compiles documentary urban observations and continental demographic benchmarks from the chapter's archival synthesis. Eyewitness estimates for Sennar in 1821AD (13,5k), Old Dongola in 1814AD (6k) and Suakin in 1814AD (5k to 8,2k), together with nineteenth-century Darfur and Kordofan caravan-town counts at Kobbei (6k in 1793-1796), El Fasher (8,6k in 1810) and El Obeid (8,5k in 1821), align closely with excavated urban areas converted via pre-colonial African density transects (median 10k persons/km², or 60 to 88 persons per hectare). At the macro-regional scale, NICETHI's 1820AD Sudan-Nubia total of 3,83M sits coherently below Patrick Manning's 1850AD Eastern Sudan estimate of 6,56M (which covers a broader Nile-Chad-Ethiopian borderlands aggregate) and within Northeast Africa's 19M to 22M regional envelope across 1700AD to 1790AD.

<figure class="crd-table-figure" id="tab:hist-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark / Place</th><th class="crd-th">Period</th><th class="crd-th">Recorded Value</th><th class="crd-th">Archival Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aksum (Ethiopia (Aksum))</strong></td><td class="crd-td">19th c.</td><td class="crd-td">5 ha</td><td class="crd-td">Foundations of an African Civilisation, Aks...</td></tr>
<tr><td class="crd-td"><strong>Aksum (Ethiopia (Aksum))</strong></td><td class="crd-td">19th c.</td><td class="crd-td">10 ha</td><td class="crd-td">Foundations of an African Civilisation, Aks...</td></tr>
<tr><td class="crd-td"><strong>Matara (Eritrea (Aksumite))</strong></td><td class="crd-td">19th c.</td><td class="crd-td">Compound count</td><td class="crd-td">Foundations of an African Civilisation, Aks...</td></tr>
<tr><td class="crd-td"><strong>Matara (Eritrea (Aksumite))</strong></td><td class="crd-td">19th c.</td><td class="crd-td">5 ha</td><td class="crd-td">Foundations of an African Civilisation, Aks...</td></tr>
<tr><td class="crd-td"><strong>Khartoum (Sudan)</strong></td><td class="crd-td">1837AD</td><td class="crd-td">15k inh.</td><td class="crd-td">A History of the Arabs in the Sudan and Som...</td></tr>
<tr><td class="crd-td"><strong>Khartoum (Sudan)</strong></td><td class="crd-td">1847AD</td><td class="crd-td">60k inh.</td><td class="crd-td">A History of the Arabs in the Sudan and Som...</td></tr>
<tr><td class="crd-td"><strong>Old Dongola (Sudan (Makuria))</strong></td><td class="crd-td">19th c.</td><td class="crd-td">6k inh.</td><td class="crd-td">Caravan Trade and Routes in the Northern Su...</td></tr>
<tr><td class="crd-td"><strong>Sennar (Sudan (Funj))</strong></td><td class="crd-td">1821AD</td><td class="crd-td">13,5k inh.</td><td class="crd-td">Spatio-Temporal Boundaries of African Civil...</td></tr>
<tr><td class="crd-td"><strong>Suakin (Sudan (Red Sea))</strong></td><td class="crd-td">19th c.</td><td class="crd-td">5k inh.</td><td class="crd-td">Caravan Trade and Routes in the Northern Su...</td></tr>
<tr><td class="crd-td"><strong>Preindustrial African Cities (59-city sample)</strong></td><td class="crd-td">Pre-1850</td><td class="crd-td">Mean 12,7k / km² (median 10k)</td><td class="crd-td">Storey (1992) Precolonial African Cities</td></tr>
<tr><td class="crd-td"><strong>Igboho Ethnographic Transect (69,5 ha, 324 houses)</strong></td><td class="crd-td">Ethnographic</td><td class="crd-td">60-88 persons/ha (114-167 m²/pers.)</td><td class="crd-td">Agbaje-Williams (1980) Calibration</td></tr>
<tr><td class="crd-td"><strong>Eastern Sudan Slave-Trade Region (Manning Table 10,8)</strong></td><td class="crd-td">1850AD</td><td class="crd-td">6,56M (9,19M in 1950)</td><td class="crd-td">Manning African Population Tables</td></tr>
<tr><td class="crd-td"><strong>Northeast Africa Regional Total (Manning Table 4,1)</strong></td><td class="crd-td">1700-1790AD</td><td class="crd-td">19M-22M</td><td class="crd-td">Manning Table 4,1 Regional Series</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Archival settlement observations, pre-industrial urban density calibrations and macro-regional demographic benchmarks used for validation.</figcaption>
</figure>

# Results

## Kerma, Pre-Kerma and Lower Nubia (2500BC to 1500BC)

At 2000BC, the combined population of Sudan and Nubia stood at approximately 328,6k (Table \ref{tab:trajectory} and Figure \ref{fig:trends}). Most inhabitants lived in rain-fed and pastoral savanna zones south of the Sahara's southern edge - 67,1k in Kordofan and the Nuba Hills, 66,5k in the Gezira, 64k across the Sudd and Upper Nile, 50,1k in Butana and 48k in Darfur - while the hyper-arid northern river reaches held smaller, tightly nucleated pockets: 9,4k in the Dongola Reach, 21k in the Eastern Desert and 2,5k in Lower Nubia.

Yet it was along the Third Cataract and the Letti-Dongola basin that Sub-Saharan Africa's earliest monumental urban state emerged. Growing out of Pre-Kerma agro-pastoral communities around 2500BC, the Kingdom of Kerma expanded into a fortified riverine capital with mudbrick *deffufa* temples, craft quarters and vast royal tumulus cemeteries [@Dercole2021SeventyYears; @Osypinski2023NewAdvances; @Bobrowski2023Ltd1Kerma]. Kerma's city-proper population rose from 1,29k around 2500BC to 6,89k in 2000BC and peaked at 14,68k around 1650BC, supported by satellite agricultural villages across the Letti Basin and cattle-herding complexes documented isotopically at Kadruka [@Bobrowski2023Ltd1Kerma; @Moyne2023EcologicalFlexibility]. Further north between the First and Second Cataracts, Middle Kingdom Egyptian fortresses such as Buhen (2,64k at 1900BC), Mirgissa, Semna, Askut and Uronarti guarded river traffic against Kerma while C-Group farming villages farmed narrow alluvial banks [@Adams1977Nubia; @Budka2023DayThe].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-ancient-mediaeval-nubia/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and attested urban population trajectories (Panel A), recorded settlement counts (Panel B) and leading city trajectories (Panel C) across Sudan and Nubia from 2000BC to 1820AD.</figcaption>
</figure>

## New Kingdom Colonisation, Napata and the Kingdom of Kush (1500BC to 300BC)

Following Thutmose I and Thutmose III's conquest of Kerma around 1500BC, Egyptian New Kingdom administration established temple-towns at Sai Island (3,47k at 1400BC), Soleb, Sesebi, Amara West and Kawa, while shifting southern administrative focus upstream to Napata near Jebel Barkal [@Budka2023DayThe; @Adams1977Nubia]. Kerma itself contracted to 11,24k in 1500BC and 4,87k by 1200BC, though recent residential archaeology at Amara West and Sai shows enduring Nubian domestic architecture and mixed subsistence alongside Egyptian temple estates [@Budka2023DayThe; @Guilbault2026EmbodimentAnd].

After Egyptian withdrawal around 1070BC, indigenous Kushite rulers buried at El-Kurru and Nuri forged the Napatan Empire, conquering Egypt as the Twenty-Fifth Dynasty under Piye and Taharqa [@Edwards2004NubianPast]. Napata surged from 2,85k at 1400BC to 7,45k at 800BC and peaked at 16,4k around 680BC, flanked across the river by Sanam (8,17k at 650BC) and downstream by Kawa (8,95k at 680BC). Iron-age demographic expansion simultaneously transformed the Butana plains and savanna corridor between the Atbara and Blue Nile, lifting regional population across Sudan and Nubia nearly tenfold between 2000BC and the turn of the Common Era.

## The Meroitic Empire and Post-Meroitic Transition (300BC to 550AD)

From the fourth century BC onward, royal burials and political gravity moved upstream past the Fifth Cataract to the Island of Meroe, where seasonal *hafirs* (excavated water reservoirs) and reliable summer rains sustained sorghum, millet and livestock away from the Nile channel [@Edwards2004NubianPast; @Yvanez2018ClothingThe]. At year 0, regional population reached an ancient maximum of 3,24M (Table \ref{tab:trajectory}), led by Meroe-Alodia-Butana at 544,2k (2,88 persons/km²), the Gezira at 647,3k and Kordofan at 666,4k. Meroe itself grew from 4,8k in 700BC to 24,8k in 100BC and peaked at 29,4k in 100AD, supported by large-scale iron-smelting workshops whose slag mounds and experimental furnace reconstructions attest to sustained industrial fuelwood harvesting [@Humphris2018IronSmelting; @Humphris1945TheAncient], alongside cotton textile production at secondary towns such as Naqa (5,24k), Musawwarat es-Sufra, Wad ban Naqa and Dangeil [@Yvanez2018ClothingThe].

Late antique climate cooling, Nile flood instability, Aksumite raids from the Ethiopian plateau and the southward contraction of Roman Red Sea trade depressed Meroitic urban life after 250AD [@Humphris1945TheAncient; @Guilbault2026EmbodimentAnd]. Meroe fell from 21,5k in 250AD to 8,4k by 350AD, and aggregate regional population eased from 3,24M at year 0 to 2,4M in 300AD before stabilising at 2,64M in 500AD. Post-Meroitic elite tumulus centres emerged at El-Hobagi, Tanqasi and Ballana-Qustul, where Early Makurian burials preserved glass beads, Mediterranean silver and Nubian textiles bridging Kushite and Christian material traditions [@ThenObuska2018EarlyMakuria; @ThenObuska2018EarlyMakuria_2; @Yvanez2018ClothingThe].

## Christian Nubia: Nobatia, Makuria and Alodia (550AD to 1504AD)

Christianisation in the mid-sixth century consolidated Nubia into three kingdoms: Nobatia between the First and Third Cataracts (centred on Faras, Qasr Ibrim and Meinarti), Makuria across the Dongola Reach (centred on Old Dongola), and Alodia extending from the Fifth Cataract across the Butana and northern Gezira (centred on Soba) [@Adams1977Nubia; @ThenObuska2018EarlyMakuria]. After Nobatia merged into Makuria around the seventh century, the unified northern crown repelled early Arab expeditions in 642AD and 652AD under the *baqt* treaty, inaugurating five centuries of urban stability powered by *saqia* waterwheel irrigation along the Dongola Reach [@Adams1977Nubia; @Guilbault2026EmbodimentAnd].

Old Dongola rose from 6,4k in 550AD to 14,2k in 750AD and peaked at 23,8k around 1000AD, while Faras reached 7,42k around 800AD and pilgrimage monasteries flourished at Banganarti and Ghazali. Farther south, Alodia's capital at Soba grew from 8,4k in 550AD to 21,5k in 800AD and achieved a regional ancient-mediaeval urban peak of 32,4k around 1000AD, matching Ibn Selim al-Aswani's tenth-century description of wide avenues, churches and lush gardens along the Blue Nile [@Edwards2004NubianPast; @Nasreldein2026ContinuityChange]. Aggregate regional population stood at 2,38M in 800AD and rose to 2,68M in 1000AD and 3M in 1200AD. Late mediaeval Mamluk interventions, Bedouin Arab pastoral migrations and the breakup of Makuria into petty river principalities such as Dotawo reduced Old Dongola to 11,6k by 1450AD and Soba to 4,8k by 1500AD, though archaeobotanical assemblages at Old Dongola demonstrate substantial continuity in sorghum, barley and date cultivation across the transition to Islam [@Nasreldein2026ContinuityChange].

<figure class="crd-figure-block" id="fig:ranksize">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-ancient-mediaeval-nubia/fig_03_rank_size.png" alt="fig:ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Peak population rank-size distribution across 131 deduplicated Sudanese and Nubian settlements (Panel A) and 1820AD sub-regional population densities (Panel B).</figcaption>
</figure>

## Beja Highlands, Red Sea Ports and Eastern Borderlands

Between the Nile and the Red Sea, Beja pastoral confederations - known to Graeco-Roman authors as Blemmyes - occupied the Red Sea Hills and eastern *wadi* basins, sustaining 154,9k inhabitants in 500AD and 149,9k in 1000AD [@Costanzo2021CreatingThe]. Funerary monuments clustered near seasonal water sources and Gash delta pastures reflect durable nomadic territorial organisation rather than sedentary nucleated towns [@Costanzo2021CreatingThe]. Along the coast, maritime hubs at Badi, Aidhab and later Suakin linked Upper Egyptian and Sudanese caravan routes with Hijaz pilgrimage shipping and Indian Ocean merchants. Following the Mamluk destruction of Aidhab in 1426AD and the Ottoman occupation of Suakin in 1517-1555AD, Suakin grew from 2,45k in 1000AD and 4,28k in 1200AD to 6,84k in 1517AD, 7,4k in 1541AD and 8,15k when Burckhardt visited in 1814AD. Along the southeastern frontier bordering the Ethiopian highlands, Qwara and Atbara-Setit borderland societies maintained mixed agropastoral hamlets between 600AD and 1850AD [@GonzalezRuibal2017SudansEastern].

## Islamisation and the Funj Sultanate of Sennar (1504AD to 1821AD)

Following the 1504AD alliance of Amara Dunqas and Abdallah Jamma that overthrew Soba, the Funj Sultanate of Sennar shifted Sudan's political and demographic core into the rain-fed Gezira and Blue Nile valley [@Spaulding1985HeroicAge]. Total population across the chapter domain rose from 3,89M in 1500AD to 4,8M in 1700AD, with the Funj Sennar-Gezira heartland surging from 759,4k to 938k (4,14 persons/km²). Sennar expanded from 9,8k in 1550AD to 28,6k around 1701AD when visited by Theodor Krump, flanked by commercial river towns at Arbaji (11,2k in 1700AD), Qarri (4,82k), Shandi (5,45k in 1814AD), Barbar (5,18k) and the rising Gezira depot of Wad Medani (6,4k in 1821AD) [@Spaulding1985HeroicAge; @AbuManga2017OldFulani].

Over the eighteenth century, internal Hamaj regency wars, Red Sea caravan disruption and the 1780s-1790s Sahelian-Sudanic droughts reduced aggregate population from 4,8M in 1700AD to 3,88M in 1770AD and 3,83M in 1820AD on the eve of Ismail Pasha's Turco-Egyptian campaign. Northern Nubia suffered sharpest contraction: Lower Nubia and Nobatia fell from 31,9k in 1700AD to 10,1k in 1820AD (0,07 persons/km²), and the Dongola Reach eased from 124k to 43,1k (0,15 persons/km²) as Shayqiya raids and Egyptian Mamluk exiles disrupted *saqia* estates. By 1820AD, the Funj Gezira retained the highest regional density at 3,42 persons/km², followed by Atbara-Butana (2,4 persons/km²) and Kordofan (2,33 persons/km²).

## Darfur, Kordofan and the Shilluk-Upper Nile Heartland to 1821AD

West of the White Nile, three vast interior sub-regions carried more than three-fifths of the domain's population throughout the early modern era. In Darfur, stone palace compounds at Uri (8,64k around 1480AD) and Ain Farah (4,15k in 1520AD) marked the Daju-to-Tunjur transition before the Keira dynasty consolidated around Jebel Marra, Shoba (5,28k in 1780AD), the caravan hub of Kobbei (8,42k in 1803AD) and the permanent capital of El Fasher (8,6k in 1810AD) [@Arkell1937FasherDarfur; @Runfola2020GeoBoundaries]. Darfur's population grew from 426,7k in 1200AD to 687,5k in 1700AD and stood at 566,3k in 1820AD. Between Darfur and Sennar, Kordofan's gum-arabic savanna and the Nuba hill refugia held 737,3k in 1820AD, centred on the Musabba'at and Keira garrison-market of El Obeid (8,5k in 1821AD) and Bara [@Spaulding1985HeroicAge; @AbuManga2017OldFulani]. Farther south along the White Nile and Sobat marshes, the Shilluk Kingdom centred on Kodok (5,16k in 1820AD), Tonga and Panyikang anchored the Nilotic Sudd, holding 898k in 1500AD and 1,04M in 1820AD (27,2% of the entire Sudan-Nubia total) [@GonzalezRuibal2017SudansEastern; @Gregory2025CapturingEmpire].

<figure class="crd-table-figure" id="tab:trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">2000BC</th><th class="crd-th">0</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1820AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Nubia and Nobatia</strong></td><td class="crd-td">2,5k</td><td class="crd-td">27,1k</td><td class="crd-td">21,7k</td><td class="crd-td">21,9k</td><td class="crd-td">29,4k</td><td class="crd-td">31,9k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>Makuria, Napata and Dongola Reach</strong></td><td class="crd-td">9,4k</td><td class="crd-td">96,9k</td><td class="crd-td">78,5k</td><td class="crd-td">77,5k</td><td class="crd-td">108k</td><td class="crd-td">124k</td><td class="crd-td">43,1k</td></tr>
<tr><td class="crd-td"><strong>Island of Meroe, Alodia and Atbara-Butana</strong></td><td class="crd-td">50,1k</td><td class="crd-td">544,2k</td><td class="crd-td">417,8k</td><td class="crd-td">414k</td><td class="crd-td">587,9k</td><td class="crd-td">671,4k</td><td class="crd-td">453,8k</td></tr>
<tr><td class="crd-td"><strong>Beja Highlands, Blemmyes and Suakin Littoral</strong></td><td class="crd-td">21k</td><td class="crd-td">184,5k</td><td class="crd-td">154,9k</td><td class="crd-td">149,9k</td><td class="crd-td">213,5k</td><td class="crd-td">281,5k</td><td class="crd-td">203,6k</td></tr>
<tr><td class="crd-td"><strong>Funj Sultanate of Sennar and Blue Nile Gezira</strong></td><td class="crd-td">66,5k</td><td class="crd-td">647,3k</td><td class="crd-td">530,6k</td><td class="crd-td">520k</td><td class="crd-td">759,4k</td><td class="crd-td">938k</td><td class="crd-td">775,3k</td></tr>
<tr><td class="crd-td"><strong>Daju, Tunjur and Keira Sultanate of Darfur</strong></td><td class="crd-td">48k</td><td class="crd-td">442,6k</td><td class="crd-td">374,7k</td><td class="crd-td">384,1k</td><td class="crd-td">547,7k</td><td class="crd-td">687,5k</td><td class="crd-td">566,3k</td></tr>
<tr><td class="crd-td"><strong>Kordofan Savanna and Nuba Mountains</strong></td><td class="crd-td">67,1k</td><td class="crd-td">666,4k</td><td class="crd-td">527,2k</td><td class="crd-td">528,7k</td><td class="crd-td">745k</td><td class="crd-td">890,2k</td><td class="crd-td">737,3k</td></tr>
<tr><td class="crd-td"><strong>Shilluk Kingdom, Sudd and Southern Nilotes</strong></td><td class="crd-td">64k</td><td class="crd-td">631,7k</td><td class="crd-td">539,5k</td><td class="crd-td">586,8k</td><td class="crd-td">898k</td><td class="crd-td">1,18M</td><td class="crd-td">1,04M</td></tr>
<tr><td class="crd-td"><strong>Total Sudan and Nubia</strong></td><td class="crd-td">328,6k</td><td class="crd-td">3,24M</td><td class="crd-td">2,64M</td><td class="crd-td">2,68M</td><td class="crd-td">3,89M</td><td class="crd-td">4,8M</td><td class="crd-td">3,83M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional and aggregate population trajectory across Sudan and Nubia at seven primary benchmarks from 2000BC to 1820AD.</figcaption>
</figure>

# Limitations

Three structural uncertainties bound historical population reconstruction for ancient and mediaeval Sudan and Nubia. First, archaeological survey density is strongly skewed toward the Main Nile cataracts slated for reservoir inundation and Polish-Sudanese concessions at Old Dongola and Kerma [@Naser2019DialoguesThe; @Bashir2026ArchaeologyAnd; @Osypinski2023NewAdvances], whereas vast areas of Kordofan, the Nuba Mountains, Darfur and the Sudd marshes hold sparse radiocarbon dates and few excavated habitation mounds [@Costanzo2021CreatingThe; @Edwards2004NubianPast]. NICETHI mitigates that survey imbalance through metric-isotropic Voronoi catchment scaling and biophysical fluvial-biome covariates rather than relying on raw site counts alone.

Second, pre-colonial urban populations converted from mounded area, cemetery demographics and traveller house counts remain sensitive to intra-mural open compound space, seasonal caravan influx and post-depositional mudbrick erosion [@Budka2023DayThe; @Humphris2018IronSmelting]. Individual urban figures carry roughly 15% to 25% uncertainty, and the 132 assessed centres represent the nucleated town and ceremonial tier rather than ephemeral pastoral camps [@Moyne2023EcologicalFlexibility]. Third, pre-1800 rural trajectories in southern and western Sudan necessarily bridge sparse archaeological horizons with backward demographic projection from colonial and post-independence census distributions; future excavations in Darfur, Kordofan and the White Nile will refine these early modern rural baselines [@Bashir2026ArchaeologyAnd; @Gregory2025CapturingEmpire].

# Conclusion

Across more than four millennia from the rise of Kerma around 2500BC to the fall of Sennar in 1821AD, the population of Sudan and Nubia expanded nearly twelvefold from 328,6k in 2000BC to 3,24M at the Meroitic peak, navigated a long late antique and mediaeval plateau between 2,4M and 3M, and climbed across the savanna sultanates to 4,8M in 1700AD and 3,83M in 1820AD. Throughout that span, political power and demographic weight migrated progressively southward - from the Third Cataract and Dongola Reach under Kerma, Napata and Makuria, onto the Butana plains under Meroe and Alodia, and finally into the Gezira, Darfur, Kordofan and Upper Nile corridors. By uniting 132 individually assessed centres, non-stationary Matérn kriging across 6.431 continental catchments and strictly mass-conserving pycnophylactic administrative reconciliation, this chapter delivers a continuous baseline carrying directly into nineteenth-century Turco-Egyptian, Mahdist and Anglo-Egyptian Sudan.

# Appendix

## Intermediate Benchmark Series, Population Densities and Territorial Shares

Table \ref{tab:trajectory-inter} records the seven intermediate benchmark years omitted from Table \ref{tab:trajectory} for page-width legibility, completing the 14-benchmark series across 300AD, 800AD, 1200AD, 1720AD, 1750AD, 1770AD and 1800AD. Tables \ref{tab:density-appendix} and \ref{tab:shares-appendix} report sub-regional population densities (persons per km²) and percentage shares of the regional total, highlighting the steady shift in demographic weight from northern Nubia and Atbara-Butana toward the Gezira, Kordofan and Upper Nile.

<figure class="crd-table-figure" id="tab:trajectory-inter">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">300AD</th><th class="crd-th">800AD</th><th class="crd-th">1200AD</th><th class="crd-th">1720AD</th><th class="crd-th">1750AD</th><th class="crd-th">1770AD</th><th class="crd-th">1800AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Nubia and Nobatia</strong></td><td class="crd-td">20k</td><td class="crd-td">19,4k</td><td class="crd-td">23,9k</td><td class="crd-td">24,3k</td><td class="crd-td">21,8k</td><td class="crd-td">19k</td><td class="crd-td">12,1k</td></tr>
<tr><td class="crd-td"><strong>Makuria, Napata and Dongola Reach</strong></td><td class="crd-td">71,5k</td><td class="crd-td">69,5k</td><td class="crd-td">85,7k</td><td class="crd-td">94k</td><td class="crd-td">83,3k</td><td class="crd-td">70,9k</td><td class="crd-td">51,6k</td></tr>
<tr><td class="crd-td"><strong>Island of Meroe, Alodia and Atbara-Butana</strong></td><td class="crd-td">385,5k</td><td class="crd-td">366,9k</td><td class="crd-td">459,1k</td><td class="crd-td">558,8k</td><td class="crd-td">566,2k</td><td class="crd-td">520,5k</td><td class="crd-td">481,6k</td></tr>
<tr><td class="crd-td"><strong>Beja Highlands, Blemmyes and Suakin Littoral</strong></td><td class="crd-td">139k</td><td class="crd-td">136,1k</td><td class="crd-td">164,9k</td><td class="crd-td">231,7k</td><td class="crd-td">231,6k</td><td class="crd-td">213k</td><td class="crd-td">211,5k</td></tr>
<tr><td class="crd-td"><strong>Funj Sultanate of Sennar and Blue Nile Gezira</strong></td><td class="crd-td">478,1k</td><td class="crd-td">468,6k</td><td class="crd-td">578,6k</td><td class="crd-td">796,2k</td><td class="crd-td">821,4k</td><td class="crd-td">763,2k</td><td class="crd-td">797,5k</td></tr>
<tr><td class="crd-td"><strong>Daju, Tunjur and Keira Sultanate of Darfur</strong></td><td class="crd-td">335,4k</td><td class="crd-td">341,3k</td><td class="crd-td">426,7k</td><td class="crd-td">579,5k</td><td class="crd-td">597,5k</td><td class="crd-td">558,4k</td><td class="crd-td">573,5k</td></tr>
<tr><td class="crd-td"><strong>Kordofan Savanna and Nuba Mountains</strong></td><td class="crd-td">480,8k</td><td class="crd-td">465k</td><td class="crd-td">585,3k</td><td class="crd-td">748,5k</td><td class="crd-td">777,5k</td><td class="crd-td">726,7k</td><td class="crd-td">747,3k</td></tr>
<tr><td class="crd-td"><strong>Shilluk Kingdom, Sudd and Southern Nilotes</strong></td><td class="crd-td">488,8k</td><td class="crd-td">514,8k</td><td class="crd-td">674,7k</td><td class="crd-td">1,01M</td><td class="crd-td">1,06M</td><td class="crd-td">1M</td><td class="crd-td">1,06M</td></tr>
<tr><td class="crd-td"><strong>Total Sudan and Nubia</strong></td><td class="crd-td">2,4M</td><td class="crd-td">2,38M</td><td class="crd-td">3M</td><td class="crd-td">4,04M</td><td class="crd-td">4,16M</td><td class="crd-td">3,88M</td><td class="crd-td">3,94M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Sub-regional and aggregate population at seven intermediate late antique, mediaeval and eighteenth-century benchmarks (300AD to 1800AD).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">2000BC</th><th class="crd-th">0</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1820AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Nubia and Nobatia</strong></td><td class="crd-td">0,02</td><td class="crd-td">0,19</td><td class="crd-td">0,16</td><td class="crd-td">0,16</td><td class="crd-td">0,21</td><td class="crd-td">0,23</td><td class="crd-td">0,07</td></tr>
<tr><td class="crd-td"><strong>Makuria, Napata and Dongola Reach</strong></td><td class="crd-td">0,03</td><td class="crd-td">0,34</td><td class="crd-td">0,28</td><td class="crd-td">0,27</td><td class="crd-td">0,38</td><td class="crd-td">0,44</td><td class="crd-td">0,15</td></tr>
<tr><td class="crd-td"><strong>Island of Meroe, Alodia and Atbara-Butana</strong></td><td class="crd-td">0,27</td><td class="crd-td">2,88</td><td class="crd-td">2,21</td><td class="crd-td">2,19</td><td class="crd-td">3,11</td><td class="crd-td">3,55</td><td class="crd-td">2,4</td></tr>
<tr><td class="crd-td"><strong>Beja Highlands, Blemmyes and Suakin Littoral</strong></td><td class="crd-td">0,08</td><td class="crd-td">0,73</td><td class="crd-td">0,61</td><td class="crd-td">0,59</td><td class="crd-td">0,84</td><td class="crd-td">1,11</td><td class="crd-td">0,8</td></tr>
<tr><td class="crd-td"><strong>Funj Sultanate of Sennar and Blue Nile Gezira</strong></td><td class="crd-td">0,29</td><td class="crd-td">2,86</td><td class="crd-td">2,34</td><td class="crd-td">2,3</td><td class="crd-td">3,35</td><td class="crd-td">4,14</td><td class="crd-td">3,42</td></tr>
<tr><td class="crd-td"><strong>Daju, Tunjur and Keira Sultanate of Darfur</strong></td><td class="crd-td">0,11</td><td class="crd-td">1,06</td><td class="crd-td">0,9</td><td class="crd-td">0,92</td><td class="crd-td">1,31</td><td class="crd-td">1,64</td><td class="crd-td">1,35</td></tr>
<tr><td class="crd-td"><strong>Kordofan Savanna and Nuba Mountains</strong></td><td class="crd-td">0,21</td><td class="crd-td">2,11</td><td class="crd-td">1,67</td><td class="crd-td">1,67</td><td class="crd-td">2,36</td><td class="crd-td">2,82</td><td class="crd-td">2,33</td></tr>
<tr><td class="crd-td"><strong>Shilluk Kingdom, Sudd and Southern Nilotes</strong></td><td class="crd-td">0,11</td><td class="crd-td">1,06</td><td class="crd-td">0,91</td><td class="crd-td">0,99</td><td class="crd-td">1,51</td><td class="crd-td">1,98</td><td class="crd-td">1,76</td></tr>
<tr><td class="crd-td"><strong>Mean Sudan and Nubia</strong></td><td class="crd-td">0,14</td><td class="crd-td">1,34</td><td class="crd-td">1,09</td><td class="crd-td">1,11</td><td class="crd-td">1,61</td><td class="crd-td">1,98</td><td class="crd-td">1,58</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Mean population density (persons per km²) across the eight Sudanese and Nubian sub-regions from 2000BC to 1820AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:shares-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">2000BC (%)</th><th class="crd-th">0 (%)</th><th class="crd-th">500AD (%)</th><th class="crd-th">1000AD (%)</th><th class="crd-th">1500AD (%)</th><th class="crd-th">1700AD (%)</th><th class="crd-th">1820AD (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Nubia and Nobatia</strong></td><td class="crd-td">0,8</td><td class="crd-td">0,8</td><td class="crd-td">0,8</td><td class="crd-td">0,8</td><td class="crd-td">0,8</td><td class="crd-td">0,7</td><td class="crd-td">0,3</td></tr>
<tr><td class="crd-td"><strong>Makuria, Napata and Dongola Reach</strong></td><td class="crd-td">2,9</td><td class="crd-td">3</td><td class="crd-td">3</td><td class="crd-td">2,9</td><td class="crd-td">2,8</td><td class="crd-td">2,6</td><td class="crd-td">1,1</td></tr>
<tr><td class="crd-td"><strong>Island of Meroe, Alodia and Atbara-Butana</strong></td><td class="crd-td">15,2</td><td class="crd-td">16,8</td><td class="crd-td">15,8</td><td class="crd-td">15,4</td><td class="crd-td">15,1</td><td class="crd-td">14</td><td class="crd-td">11,8</td></tr>
<tr><td class="crd-td"><strong>Beja Highlands, Blemmyes and Suakin Littoral</strong></td><td class="crd-td">6,4</td><td class="crd-td">5,7</td><td class="crd-td">5,9</td><td class="crd-td">5,6</td><td class="crd-td">5,5</td><td class="crd-td">5,9</td><td class="crd-td">5,3</td></tr>
<tr><td class="crd-td"><strong>Funj Sultanate of Sennar and Blue Nile Gezira</strong></td><td class="crd-td">20,2</td><td class="crd-td">20</td><td class="crd-td">20,1</td><td class="crd-td">19,4</td><td class="crd-td">19,5</td><td class="crd-td">19,5</td><td class="crd-td">20,2</td></tr>
<tr><td class="crd-td"><strong>Daju, Tunjur and Keira Sultanate of Darfur</strong></td><td class="crd-td">14,6</td><td class="crd-td">13,7</td><td class="crd-td">14,2</td><td class="crd-td">14,3</td><td class="crd-td">14,1</td><td class="crd-td">14,3</td><td class="crd-td">14,8</td></tr>
<tr><td class="crd-td"><strong>Kordofan Savanna and Nuba Mountains</strong></td><td class="crd-td">20,4</td><td class="crd-td">20,6</td><td class="crd-td">19,9</td><td class="crd-td">19,7</td><td class="crd-td">19,2</td><td class="crd-td">18,5</td><td class="crd-td">19,2</td></tr>
<tr><td class="crd-td"><strong>Shilluk Kingdom, Sudd and Southern Nilotes</strong></td><td class="crd-td">19,5</td><td class="crd-td">19,5</td><td class="crd-td">20,4</td><td class="crd-td">21,9</td><td class="crd-td">23,1</td><td class="crd-td">24,5</td><td class="crd-td">27,2</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Sub-regional percentage shares of total Sudanese and Nubian population across primary benchmarks from 2000BC to 1820AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

All pre-1821 calendar dates follow astronomical era notation without period separators (2500BC, 0, 1820AD). Sub-regional settlement counts in Table \ref{tab:subregions} reflect the 128 settlements located inside the eight five-arcminute sub-regional mask polygons, while the companion gazetteer assigns the remaining four immediate borderland sites (Bonga, Debarwa, Sembel Ona and Djabarona) to their adjoining hydrological corridors so all 132 settlements appear in regional tables.
