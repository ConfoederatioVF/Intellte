---
title: "Early West Africa and the Sahel States"
subtitle: "Iron Age Polities, Ghana, Mali, Songhai, Kanem-Bornu and Forest Kingdoms"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_west_africa_sahel_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Eleven sub-regions and 3.261 individually assessed settlements across West Africa and the Sahel from 1000BC to 1500AD."
hero_label: "fig:hero-early-west-africa-sahel"

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

Between the spread of early iron metallurgy across the Jos Plateau and Sahara margin around 1000BC and the Atlantic threshold of 1500AD, West Africa and the Chad basin underwent a decisive transformation from dispersed Stone-to-Iron Age hamlets into walled city-states, trans-Saharan trading empires and dense forest kingdoms. Across a territorial domain of 7.910.617 km² spanning 19 modern states from Mauritania and Senegambia to Lake Chad and Cameroon, NICETHI reconstructs an aggregate regional population that rose from 912,6k inhabitants in 1000BC to 3,99M at 1AD, dipped during Sahelian desiccation to 3,38M in 100AD, recovered to 5,98M in 500AD and expanded across the mediaeval commercial boom to 9,97M in 1000AD, 14,09M in 1300AD and 17,42M in 1500AD (mean density 2,2 persons/km²). Although trans-Saharan chroniclers concentrated on the Sahelian trading cities of Koumbi Saleh, Awdaghost, Djenné, Timbuktu, Gao and Njimi, the centre of demographic gravity shifted steadily southward into the savanna and forest belt: by 1500AD, the Lower Niger corridor of Ile-Ife, Benin and Igbo-Ukwu alone held 4,86M people (12,02 persons/km²), ahead of the Nok-Benue middle belt (2,15M), the walled Hausa Bakwai (2,13M), Kanem-Bornu (2,27M), the Akan-Guinea forest (1,81M) and the Voltaic Mossi kingdoms (1,79M). These trajectories combine 3.261 individually assessed settlements (9.179 dated observations), non-stationary Matérn kriging across 6.431 continental Voronoi catchments and mass-conserving pycnophylactic scaling tied to colonial and national census divisions.



# Background

## Latitudinal Ecology from the Sahara Margin to the Guinea Rain Forest

West Africa's historical demography was governed by sharp latitudinal rainfall bands running almost parallel to the equator [@Dueppen2016TheArchaeology; @Connah2001AfricanCivilizations]. Along the northern edge between 16° and 20° N lay the Sahel and southern Sahara, receiving below 250 mm of annual rain in uncertain summer monsoons. Here settlement clung to seasonal wadis, fossil lake depressions such as the Dhar Tichitt escarpment, salt pans at Bilma and Taoudenni, and caravan termini where pastoral Sanhaja and Tuareg nomads met sedentary Soninke and Songhai farmers [@Mcdougall1985TheView; @Mcintosh1984TheEarly].

Immediately south lay the Sudanic savanna (250 to 900 mm rainfall), threaded by two immense internal river systems: the Niger Bend and Inland Niger Delta on the west, and the Lake Chad mega-basin on the east [@Mcintosh1981TheInland; @Connah2001AfricanCivilizations]. Annual Niger floodwaters inundated over 30.000 km² of alluvial floodplain between Segou and Timbuktu, sustaining floating *Oryza glaberrima* rice, sorghum and dry-season cattle grazing without artificial canal dams [@Mcintosh1981TheInland; @Diblasi1981ExcavationsJenne]. Around Lake Chad, retreating Holocene shorelines exposed fertile black firki clay plains where sorghum agriculture and walled mound towns flourished beside Chad fisheries [@Connah2001AfricanCivilizations].

Further south, the Guinea savanna woodland (900 to 1.500 mm) and tropical rain forest (above 1.500 mm) supported root-crop and tree-crop complexes built on yams, oil palm (*Elaeis guineensis*), plantain and kola [@Connah2001AfricanCivilizations; @Dueppen2016TheArchaeology]. Though forest soils were vulnerable to leaching and livestock faced tsetse-borne trypanosomiasis, cleared forest corridors in Yorubaland, Edo, Igboland and Akan supported far denser rural populations per square kilometre than the Sahelian steppes [@Adekola2009EarlyUrban; @Connah1967NewLight]. Iron smelting, firmly established in the middle Niger, Jos Plateau and Nsukka-Benue belts by the early first millennium BC, supplied heavy iron hoes and axes that accelerated woodland clearance across every zone [@Dueppen2016TheArchaeology; @Agai2014ArchaeologicalSearch].

## Historiography of West African and Sahelian Urbanism

For nearly a century, historical writing on early West African towns relied heavily on external Arabic geographical treatises by al-Bakri (1068AD), al-Idrisi (1154AD), al-Umari (1345AD) and Ibn Battuta (1352AD), paired with seventeenth-century Timbuktu chronicles such as the *Tarikh al-Sudan* [@Davis2000LeadershipStrategies; @Austen1996HistoryOral]. Because Arabic writers focused on royal courts, Islamic mosques and trans-Saharan gold and salt caravans, older scholarship frequently assumed that urbanism in West Africa arrived only after eighth-century Islamic trade crossed the Sahara [@Mcintosh1984TheEarly; @Mcdougall1985TheView].

Systematic stratigraphic excavation after 1970 overturned that assumption. At Jenne-Jeno in Mali, Roderick and Susan Keech McIntosh established that nucleated mound urbanism began by 250BC and reached 33 ha before Arab merchants entered the western Sudan, growing as a clustered heterarchical network of specialist craft and subsistence mounds rather than a single palace citadel [@Mcintosh1981TheInland; @McIntosh1995JenneJeno; @Waals1989HetArcheologisch]. Subsequent excavations at Dia, Gao Saney, Koumbi Saleh, Bono Manso, Begho, Old Oyo, Ile-Ife and Benin City confirmed that urban growth across West Africa drew equally on internal riverine exchange, craft specialisation and forest-savanna complementarity [@Cisse2010GaoSaney; @Posnansky2015BeghoLife; @Connah1967NewLight; @Adekola2009EarlyUrban]. Meanwhile, open radiocarbon syntheses such as OSAAR and XRONOS and regional Pleistocene-Holocene paleoenvironmental projects have anchored iron-age and pastoral chronologies across previously poorly dated corridors in Senegal, Mauritania and Nigeria [@Besse2020OSAAR; @Hinz2023XRONOS; @Chevrier2020NewData].

NICETHI synthesises these archaeological registers, excavated walled-area surveys and historical urban corpora into a unified regional demographic series from 1000BC to 1500AD, connecting deep precolonial ecology directly to modern subadministrative census geography [@Runfola2020GeoBoundaries].

# Methodology

## Sub-Regional Territorial Partition and Accounting Domain

The study area spans 7.910.617,3 km² (95.400 five-arcminute pixels) across 19 contemporary West and Central African jurisdictions. Within NICETHI, Chapter 4 sits in Regime 2 (dynastic and early state antiquity, 1000BC to 1500AD), bridging the prehistoric Holocene dispersal of Chapter 1 with the early modern Atlantic and Sahelian syntheses of Chapters 6 and 7. Following political geography, river basins and linguistic-economic zones, the region is partitioned into 11 contiguous equal-area sub-regions (Table \ref{tab:subregions}): Kanem-Bornu and Lake Chad (2.047.157 km²), Wagadou-Ghana (1.285.644 km²), Songhai Gao-Timbuktu (894.220 km²), Tuareg Air and Saharan caravan corridors (631.819 km²), the Proto-Akan and Guinea Forest (548.430 km²), the Voltaic Mossi kingdoms (464.592 km²), the Hausa Bakwai city-states (462.246 km²), the Nok-Jos Plateau and Benue corridor (447.146 km²), Ile-Ife, Benin and the Lower Niger (404.098 km²), the Mali imperial core and Inland Niger Delta (388.827 km²) and Jolof-Takrur Senegambia (336.438 km²).

Population totals are evaluated at 14 benchmark years across the 2.500-year span (1000BC, 1AD, 100AD, 300AD, 400AD, 500AD, 600AD, 800AD, 900AD, 1000AD, 1100AD, 1300AD, 1400AD and 1500AD). Totals represent full resident populations combining walled urban towns, satellite mound clusters, agricultural villages and seasonal pastoral camps anchored to Sahelian pastures [@Mcintosh1984TheEarly; @Dueppen2016TheArchaeology].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Sites</th><th class="crd-th">Area Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kanem-Bornu Empire and Lake Chad Basin</strong></td><td class="crd-td">2.047.157</td><td class="crd-td">24.577</td><td class="crd-td">392</td><td class="crd-td">25,9</td></tr>
<tr><td class="crd-td"><strong>Wagadou (Ghana) and Western Sahel</strong></td><td class="crd-td">1.285.644</td><td class="crd-td">15.882</td><td class="crd-td">353</td><td class="crd-td">16,3</td></tr>
<tr><td class="crd-td"><strong>Songhai Gao, Timbuktu and Niger Bend</strong></td><td class="crd-td">894.220</td><td class="crd-td">11.005</td><td class="crd-td">152</td><td class="crd-td">11,3</td></tr>
<tr><td class="crd-td"><strong>Tuareg Air, Adrar des Ifoghas and Sahara</strong></td><td class="crd-td">631.819</td><td class="crd-td">7.799</td><td class="crd-td">80</td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>Proto-Akan, Bono Manso and Guinea Forest</strong></td><td class="crd-td">548.430</td><td class="crd-td">6.440</td><td class="crd-td">395</td><td class="crd-td">6,9</td></tr>
<tr><td class="crd-td"><strong>Mossi Kingdoms and Voltaic Gur States</strong></td><td class="crd-td">464.592</td><td class="crd-td">5.521</td><td class="crd-td">299</td><td class="crd-td">5,9</td></tr>
<tr><td class="crd-td"><strong>Hausa Bakwai City-States (Kano, Katsina, Gobir)</strong></td><td class="crd-td">462.246</td><td class="crd-td">5.531</td><td class="crd-td">302</td><td class="crd-td">5,8</td></tr>
<tr><td class="crd-td"><strong>Nok-Jos Plateau, Nupe and Benue Corridor</strong></td><td class="crd-td">447.146</td><td class="crd-td">5.250</td><td class="crd-td">290</td><td class="crd-td">5,7</td></tr>
<tr><td class="crd-td"><strong>Ile-Ife, Benin, Igbo-Ukwu and Lower Niger</strong></td><td class="crd-td">404.098</td><td class="crd-td">4.750</td><td class="crd-td">535</td><td class="crd-td">5,1</td></tr>
<tr><td class="crd-td"><strong>Mali Imperial Core and Inland Niger Delta</strong></td><td class="crd-td">388.827</td><td class="crd-td">4.611</td><td class="crd-td">160</td><td class="crd-td">4,9</td></tr>
<tr><td class="crd-td"><strong>Jolof Empire, Takrur and Senegambia</strong></td><td class="crd-td">336.438</td><td class="crd-td">4.034</td><td class="crd-td">277</td><td class="crd-td">4,3</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Eleven West African and Sahelian sub-regions showing equal-area surface, 5-arcminute pixel counts, mask-assigned settlements and territorial shares.</figcaption>
</figure>

## Gazetteer Compilation, Walled-Area Surveys and Site Screening

To anchor urban concentration and spatial interpolation, 3.998 candidate towns, tell complexes, walled capitals and rock shelters were screened across four saturation waves from excavated urban monographs, regional surveys and chronometric databases [@Besse2020OSAAR; @Hinz2023XRONOS; @Dueppen2016TheArchaeology]. Wave 1 assembled 143 baseline historical towns; subsequent waves deduplicated overlapping synonyms, purged 737 non-settlement fragments or out-of-epoch loci and added four gap-sweep centres in Wave 4 (marginal gain 1,75%), yielding 3.261 individually assessed settlements and 9.179 dated city-proper population observations across 19 modern countries.

Where excavated town walls or surface sherd scatters exist, NICETHI calibrates resident populations against documented preindustrial African urban density benchmarks rather than uniform flat caps. Storey's 59-city African sample yields a mean density of 12.724 persons/km² (median 10.000, range 1.250 to 57.735 persons/km²), while Agbaje-Williams's ethnographic transect of Igboho in Yorubaland (five zones totalling 69,5 ha, 324 houses, 2.470 rooms and 4.153 residents) provides explicit spatial calibrations of 114 to 167 m² per person, equivalent to 60 to 88 persons per built-up hectare [@Adekola2009EarlyUrban; @Connah2001AfricanCivilizations]. Table \ref{tab:walled-surveys} compiles the principal walled-area and transect measurements extracted from the chapter monograph corpus, spanning Dia's 13 ha core within its wider 6.400 ha deltaic catchment [@McIntosh1995JenneJeno; @Diblasi1981ExcavationsJenne], Jenne-Jeno's 12 ha Phase III peak and Djenné's 33 to 52 ha walled mound [@Mcintosh1981TheInland; @Waals1989HetArcheologisch], Gao's 24 to 35 ha riverine core and Gao Saney's 32 ha craft tell [@Cisse2010GaoSaney], and the monumental earthworks of Benin City and Yorubaland [@Connah1967NewLight; @Adekola2009EarlyUrban].

<figure class="crd-table-figure" id="tab:walled-surveys">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Site</th><th class="crd-th">Region</th><th class="crd-th">Measured Extent</th><th class="crd-th">Implied Population</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dia (core / catchment)</strong></td><td class="crd-td">Inland Niger Delta</td><td class="crd-td">13 ha core / 6.400 ha basin</td><td class="crd-td">8,1k to 9k</td></tr>
<tr><td class="crd-td"><strong>Jenne-Jeno (Phase III)</strong></td><td class="crd-td">Inland Niger Delta</td><td class="crd-td">12 ha (33 ha mound cluster)</td><td class="crd-td">18k to 20k (cluster)</td></tr>
<tr><td class="crd-td"><strong>Djenné (mound / walled)</strong></td><td class="crd-td">Inland Niger Delta</td><td class="crd-td">33 to 52 ha</td><td class="crd-td">9k to 40k (late peak)</td></tr>
<tr><td class="crd-td"><strong>Gao (riverine core)</strong></td><td class="crd-td">Niger Bend</td><td class="crd-td">24 to 35 ha</td><td class="crd-td">29,4k to 54,6k</td></tr>
<tr><td class="crd-td"><strong>Gao Saney</strong></td><td class="crd-td">Niger Bend</td><td class="crd-td">32 ha</td><td class="crd-td">craft tell (700-1100AD)</td></tr>
<tr><td class="crd-td"><strong>Begho (Brong quarters)</strong></td><td class="crd-td">Brong-Ahafo Forest Edge</td><td class="crd-td">multi-quarter dispersed</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>Benin City (inner wall)</strong></td><td class="crd-td">Lower Niger Rain Forest</td><td class="crd-td">11,6 km inner rampart</td><td class="crd-td">47,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Igboho (transect survey)</strong></td><td class="crd-td">Northern Yorubaland</td><td class="crd-td">69,5 ha (324 houses)</td><td class="crd-td">4,2k (60 to 88 /ha)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Measured archaeological areas, earthwork surveys and ethnographic transect densities calibrating urban headcounts across West Africa.</figcaption>
</figure>

## Metric-Isotropic Radial Kriging Over Archaeological Substrata

Excavated towns alone cannot capture continuous rural settlement across forests, floodplains and savanna pastures. NICETHI therefore generates continuous spatial intensity surfaces using non-stationary Paciorek-Schervish Matérn ($\nu = 3/2$) residual kriging across the Sub-Saharan mosaic (24.537 weighted domestic sites across 6.431 Voronoi catchments, 1.731 active domestic catchments and 290.451 valid land cells). West Africa contributes 2.591 site records across 1.528 unique-coordinate locations, of which 75,7% derive from regional archaeological registers and excavation monographs [@Besse2020OSAAR; @Hinz2023XRONOS; @Dueppen2016TheArchaeology].

Spatial correlation is evaluated along metric-isotropic radial distance fields scaled by local Voronoi catchment radii (continental median 31,72 km, 90th percentile 49,29 km). Five chronological kriging horizons govern the 1000BC to 1500AD span: Early Iron Age (04), Classical (05), Late Antique (06), Early Mediaeval (07) and High Mediaeval (08). Weighted least-squares variogram calibration converges cleanly at dimensionless correlation scale $\tau_1 = 1,35$ (raw $\tau_1 = 1,38$ to $1,42$), secondary long-range scale $\tau_2 = 2,90$ and nugget-to-sill ratio 0,04, yielding effective short-range spatial correlations between 43,83 km and 45,16 km ($R^2 = 0,9992$ across all five horizons). In the deterministic trend surface, fluvial proximity ($\beta_3 = 0,1062$ in the Early Iron Age easing to $0,0757$ in the High Mediaeval horizon) and coastal access ($\beta_4 = 0,0993$ to $0,0816$) outweigh baseline ecological suitability ($\beta_2 = 0,0572$ to $0,01$), accurately concentrating early density along the Niger, Senegal, Volta, Benue and Lake Chad water corridors while a two-pixel urban buffer prevents modern metropolitan sprawl from distorting preindustrial distributions.

## Subadministrative GIS Framework and Pycnophylactic Scaling

Long-run population reconstruction must connect precolonial spatial distributions smoothly to historical and modern census geometry without artificial boundary cliffs. NICETHI anchors its downward spatial framework to geoBoundaries national and subnational polygons [@Runfola2020GeoBoundaries] bridged backward through colonial and post-independence West African enumerations: Senegal's Quatre Communes (1876 to 1904), Gold Coast Blue Books and censuses (1891 to 1948), Nigerian Protectorate and Federal enumerations (1911 to 1991), French West Africa (AOF) territorial counts (1931 to 1951), French Cameroun censuses (1946 to 2005) and post-colonial ADM1 counts in Mali (1976 to 2023), Niger (1960 to 2012), Mauritania (1976 to 2023) and Chad (1961 to 2019). Across 81 disaggregated benchmark years and up to 607 administrative units per year (30.911 unit-year checks across the NICETHI domain), 100% of disaggregated cells satisfy strictly mass-conserving pycnophylactic scaling within 0,01%, with a global maximum unit relative error of 5,6e-08.

# Testing and Validation

## Rank-Size Calibration and Urban Scaling

Because West African urban centres arose across multiple independent riverine and forest networks rather than under a single continental capital, their rank-size profile provides a sensitive test of ledger consistency. Across the upper half of the 228-settlement ledger ($n = 114$), log-log rank-size regression produces a Zipf exponent of $\alpha = 0,87$ ($R^2 = 0,99$, intercept $5,21$; Figure \ref{fig:rank-size}), whereas the full-ledger regression including small prehistoric and iron-age rock shelters yields $\alpha = 1,14$ ($R^2 = 0,79$). That sub-unitary upper-tail slope ($\alpha < 1$) matches historical polycentricity: instead of one dominant primate metropolis dwarfing all rivals, early West Africa sustained peer-tier capitals across distinct ecological zones, led by Ile-Ife (88,6k in 1350AD), Nembe (87,5k in 1000AD), Gao (54,6k in 1500AD), Benin City (47,5k in 1500AD), Djenné (40k in 1450AD), Niani (38,6k in 1350AD), Kano (38,4k in 1480AD), Birnin Gazargamu (34,2k in 1500AD) and Tombouctou (32,8k in 1450AD) [@Davis2000LeadershipStrategies; @Cisse2010GaoSaney; @Connah1967NewLight].

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-west-africa-sahel/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size scaling across 3.261 West African settlements (upper-half Zipf q = 0,87, R² = 0,99) and sub-regional population densities in 1500AD.</figcaption>
</figure>

At the lower tail, the steep drop visible beyond rank 150 in Figure \ref{fig:rank-size} reflects the deliberate inclusion of dated prehistoric and Early Iron Age rock shelters alongside full cities: Dutsen Kongba Shelter (61 inhabitants), Kourounkorokale Shelter (49), Kamabai Rock Shelter (45), Rop Rock Shelter (42) and Yagala Rock Shelter (36) anchor the 1000BC baseline without distorting upper-tier urban scaling [@Chevrier2020NewData; @Agai2014ArchaeologicalSearch]. An urban uniqueness ratio of 0,7895 (180 distinct peak values across 3.261 settlements) and a log-interquartile range of 0,515 confirm that individual sites retain distinct archaeological trajectories rather than repeated nominal placeholders.

## Saturation Diagnostics and Regional Anchor Cross-Checks

Four-wave saturation checks confirm balanced spatial coverage across all 11 sub-regions (11/11 covered, zero empty inhabited sub-regions). Jurisdictional counts follow historical population weight and excavation intensity: Nigeria accounts for 59 assessed settlements (91 observations), Mali 36 (76 observations), Niger 22 (30 observations), Ghana 18 (28 observations), Mauritania 17 (40 observations), Burkina Faso 14 (18 observations), Senegal 14 (22 observations) and Cameroon 14 (38 observations), with the remaining 34 sites distributed across Guinea (7), Ivory Coast (5), Sierra Leone (5), Chad (4), Togo (3), Central African Republic (3), Gambia (2), Guinea-Bissau (2), Benin (1), Equatorial Guinea (1) and Liberia (1). Cross-checks against colonial and early post-colonial demographic ratios confirm that the relative density gradient — highest in the Lower Niger forest and middle-belt yam zones, intermediate in Hausaland and the Mossi plateau, and sparse in the Sahara margin — holds coherently from 1000AD through the twentieth century.

# Results

Over the 2.500 years from 1000BC to 1500AD, the population of West Africa and the Sahel grew roughly nineteen-fold from 912,6k to 17,42M (Figure \ref{fig:trends} and Table \ref{tab:trajectory}). Expansion proceeded in three broad phases: an Iron Age surge across the first millennium BC lifting population fourfold to 3,99M at 1AD, a sharp Sahelian-driven contraction to 3,38M in 100AD followed by steady agricultural recovery to 5,98M in 500AD and 9,97M in 1000AD, and a late mediaeval urbanisation wave raising regional numbers by 74,7% between 1000AD and 1500AD.

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-west-africa-sahel/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional and attested urban population trajectories (1000BC to 1500AD), active settlement counts and growth of five leading cities.</figcaption>
</figure>

## Nok, the Jos Plateau and Iron Age Beginnings (1000BC to 300AD)

At 1000BC, West Africa held just 912,6k inhabitants across nearly eight million square kilometres (0,12 persons/km²). Settlement clustered lightly in the Chad basin (167,1k), the Lower Niger forests (158,7k), the Guinea forest margin (123,5k) and the Volta basin (116,5k), while early agro-pastoral stone-walled villages along the Dhar Tichitt and Tagant escarpments of Mauritania — represented by Dakhlet el Atrous (9,1k peak at 700BC) and Akreijit — sustained dense stone-compound clusters before Saharan aridity deepened [@Mcdougall1985TheView; @Dueppen2016TheArchaeology].

Between 800BC and 1AD, iron smelting transformed West African demography [@Dueppen2016TheArchaeology; @Agai2014ArchaeologicalSearch]. In the Nok-Jos Plateau, Nupe and Benue Corridor sub-region, Nok culture iron-working sites around Taruga, Samun Dukiya and Nok (4,6k) anchored a nearly fivefold expansion from 75,9k in 1000BC to 354k at 1AD. Across the region as a whole, iron hoes and expanding pearl-millet, sorghum and yam cultivation lifted total population to 3,99M by 1AD, before a sharp climatic oscillation around 100AD trimmed the regional total to 3,38M, hitting the arid Mauritanian and Niger Bend margins hardest [@Chevrier2020NewData; @Besse2020OSAAR]. By 300AD, recovery was complete across every zone (4,21M total), inaugurating the classical Sahelian and forest urban take-off.

## Inland Niger Delta and Jenne-Jeno (250BC to 1100AD)

In the Inland Niger Delta, falling Saharan rainfall pushed agro-pastoralists down into the seasonal Bani-Niger floodplains where annual inundation guaranteed reliable rice and millet harvests [@Mcintosh1981TheInland; @Waals1989HetArcheologisch]. Excavations at Jenne-Jeno (Djenné in the modern gazetteer) and Dia demonstrate a distinctive non-hierarchical urban model [@Mcintosh1984TheEarly; @McIntosh1995JenneJeno]. Settled around 250BC (1,8k at 200BC), Jenne-Jeno expanded to 5,5k by 400AD and 18k across its clustered mound complex by 500AD to 800AD, surrounded within a four-kilometre radius by more than 40 satellite tells such as Hambarketolo and Kaniana occupied by specialist ironworkers, potters, fishers and Bozo boatmen [@Diblasi1981ExcavationsJenne; @McIntosh1995JenneJeno]. Neither massive citadel palaces nor royal tombs dominated the early delta; instead, corporate occupational guilds maintained spatial order across a 3,4-kilometre-circumference town wall built late in the first millennium AD [@Mcintosh1984TheEarly; @Davis2000LeadershipStrategies]. Downstream at Dia, occupation reached back to 600BC across a 13 ha core and wider 6.400 ha floodplain cluster supporting up to 8,1k to 9k people [@Mcintosh1981TheInland; @Dueppen2016TheArchaeology].

## Wagadou (Ghana), Awdaghost and the Western Sahel (300AD to 1240AD)

North and west of the Inland Niger Delta, control of the goldfields of Bambuk and Bure and the salt mines of Taghaza and Idjil gave rise to Wagadou (Ghana), the earliest documented trans-Saharan empire [@Mcdougall1985TheView; @Davis2000LeadershipStrategies]. Within the Wagadou (Ghana) and Western Sahel sub-region, population grew from 262,6k in 300AD to 346,6k in 500AD and 433,5k by 1000AD. At Koumbi Saleh in southern Mauritania, excavations revealed a dual urban layout matching al-Bakri's 1068AD description: a stone-built Muslim commercial town housing merchants and mosques alongside the Soninke royal capital of el-Ghaba six miles away, climbing from 4,4k in 600AD to 15,5k in 1050AD and 18,2k in 1150AD before declining to 9,2k in 1300AD as caravan routes shifted eastward [@Davis2000LeadershipStrategies; @Connah2001AfricanCivilizations].

On the western desert edge, Awdaghost (Tegdaoust) linked Wagadou to Sijilmasa across the Mauritanian Adrar, peaking at 6,2k around 950AD before Sanhaja Almoravid warfare and desert shift curtailed its prosperity after the eleventh century [@Mcdougall1985TheView]. Secondary Soninke and Mande hubs at Kolima (8,7k in 1050AD) and later Oualata (7,9k in 1352AD) preserved western Sahelian trade even after Wagadou's hegemony dissolved in the early thirteenth century [@Mcdougall1985TheView; @Adekola2009EarlyUrban].

## Empire of Mali: Niani, Djenne and Timbuktu (1230AD to 1500AD)

Following Sundiata Keita's victory over Sosso around 1235AD, imperial gravity moved southward into the upper Niger gold-producing savanna of Manden [@Austen1996HistoryOral; @Jansen1996TheRepresentation]. In Mali Imperial Core and Inland Niger Delta, population climbed from 419,8k in 1000AD to 589,6k in 1300AD and 725,9k by 1500AD. On the Sankarani river in Guinea, the royal capital of Niani grew from 4,6k in 900AD to 24,8k in 1250AD and 38,6k at 1350AD under Mansa Musa and Mansa Sulayman, flanked by older Mande chiefly centres at Dakajalan (8,6k) and Kangaba (6,2k) [@Jansen1996TheRepresentation; @Austen1996HistoryOral].

Simultaneously, the transfer of Jenne-Jeno's population onto the modern walled mound of Djenné after 1150AD created a 44,8 to 52 ha commercial metropolis reaching 40k inhabitants by 1450AD, acting as the riverine hinge exchanging forest gold and kola from the Akan south for Saharan salt and textiles from Timbuktu [@Mcintosh1981TheInland; @Diblasi1981ExcavationsJenne]. At the northern apex of the Niger Bend, Tombouctou expanded from a seasonal Tuareg camp of 4,3k in 1200AD to 16,4k in 1325AD and 32,8k in 1450AD as Sankore mosque scholarship and caravan commerce peaked [@Davis2000LeadershipStrategies; @Dueppen2016TheArchaeology].

## Early Songhai and the Middle Niger Trade Arc (800AD to 1500AD)

East of Timbuktu along the great bend of the Niger, the Songhai state consolidated first around Kukiya (Bentia) in the seventh century (4,7k in 700AD to 11,7k in 1250AD) before making Gao (Kawkaw) its commercial and imperial capital [@Cisse2010GaoSaney; @Davis2000LeadershipStrategies]. Recent excavations by Mamadou Cisse at Gao Saney — a 32 ha tell four kilometres east of Old Gao — uncovered six metres of stratified deposits with secondary glass and copper processing dated to 700AD to 1100AD, pushing intensive Saharan-Sudanic craft and trade links two centuries earlier than Arabic texts suggested [@Cisse2010GaoSaney]. Gao itself rose steadily from 6,2k in 750AD to 12,5k in 1000AD, 18,6k in 1250AD, 29,4k in 1400AD and 54,6k by 1500AD under Sunni Ali Ber and Askia Muhammad Toure [@Cisse2010GaoSaney; @Davis2000LeadershipStrategies].

Across the Songhai Gao, Timbuktu and Niger Bend sub-region, total numbers reached 366,1k in 1500AD (0,41 persons/km²). Further north into the Adrar des Ifoghas and Air Massif (Tuareg Air, Adrar des Ifoghas and Sahara, 51k in 1500AD at 0,08 persons/km²), caravan entrepots at Essouk-Tadmekka (7k in 1050AD), Agadez (6,8k in 1450AD), Azelik-Takedda (5,5k) and the Bilma salt oasis (3,2k) linked Songhai and Hausaland across the central Sahara to Fezzan and Tripoli [@Mcdougall1985TheView; @Dueppen2016TheArchaeology].

## Kanem-Bornu and the Lake Chad Basin (700AD to 1500AD)

In the eastern Sahel, Kanem-Bornu Empire and Lake Chad Basin formed the largest single territorial block of the study (2.047.157 km²), expanding from 698k at 1AD to 1,4M in 1000AD, 1,89M in 1300AD and 2,27M in 1500AD (1,11 persons/km²). Under the Sayfawa dynasty, Kanem controlled the central Saharan Fezzan-Kawar caravan route from its capital at Njimi east of Lake Chad, which grew from 6,8k in 900AD to 21,4k in 1300AD [@Connah2001AfricanCivilizations; @Dueppen2016TheArchaeology].

Bulala pressure and pasture exhaustion in Kanem forced the Sayfawa court to relocate west of Lake Chad into Bornu around 1380AD, culminating in Mai Ali Gaji's foundation of the brick-walled capital of Birnin Gazargamu around 1470AD [@Connah2001AfricanCivilizations]. By 1500AD, Birnin Gazargamu held 34,2k inhabitants inside its circular earthen rampart, surrounded by densely settled Kotoko and Sao walled towns along the Chari-Logone delta such as Logone-Birni (4,9k) and Goulfeil (4,3k) [@Connah2001AfricanCivilizations; @Adekola2009EarlyUrban].

## Hausa Bakwai, Senegambia and the Voltaic Polities (800AD to 1500AD)

Between Songhai and Bornu lay one of the most remarkable urban surges of mediaeval Africa: the Hausa Bakwai City-States (Kano, Katsina, Gobir) sub-region (462.246 km²), whose population multiplied sixfold from 349,4k at 1AD to 1,33M in 1000AD and 2,13M in 1500AD (4,61 persons/km²). As J. E. G. Sutton and Anthony Kirk-Greene showed, the *birni* (walled city) model of Hausaland emerged internally between the eleventh and fifteenth centuries around fertile iron-working inselbergs and cotton-indigo plains rather than from sudden external conquest [@Sutton1979TowardsLess; @Kirkgreene1804ComparativeStudy]. Kano expanded from 8,4k in 900AD to 18,6k in 1150AD and 38,4k by 1480AD under Muhammad Rumfa, followed by Katsina (16,4k), Zaria (14,8k), Birnin Zamfara (12,8k), Turunku (8,9k), Daura (8,4k) and Rano (7,2k) [@Sutton1979TowardsLess; @Kirkgreene1804ComparativeStudy; @Umar2026CodeMixing].

On the far Atlantic margin, Jolof Empire, Takrur and Senegambia doubled from 290,8k in 1000AD to 653,6k in 1500AD (1,94 persons/km²). Early riverine iron-smelting and trading chiefdoms along the Middle Senegal Valley — Takrur, Matam (8,7k in 950AD) and Podor (7,8k in 1050AD) — fed into the fourteenth-century Jolof confederation centred at Linguère (5,1k), Diakhao (3,4k) and Lambaye (2,9k) [@Chevrier2020NewData; @Mcdougall1985TheView]. South of the Niger Bend, Mossi Kingdoms and Voltaic Gur States grew from 934,2k in 1000AD to 1,79M in 1500AD (3,86 persons/km²), anchored by Bouna (10k), Ouagadougou (7,8k), Yendi Dabari (5,1k) and Tenkodogo (4,9k), whose cavalry kingdoms checked Songhai expansion southward into the Volta basin [@Dueppen2016TheArchaeology; @Adekola2009EarlyUrban].

## Akan Goldfields and the Lower Niger Forest Kingdoms (500AD to 1500AD)

South of the Voltaic savanna, forest goldfields and Atlantic-edge trade nourished the Proto-Akan, Bono Manso and Guinea Forest sub-region, which more than doubled from 877,3k in 1000AD to 1,81M in 1500AD (3,3 persons/km²). At the northern forest-savanna transition, Merrick Posnansky's excavations at Begho (9,7k by 1500AD) documented specialised Brong, Mande (*Kramo*) and artisan quarters smelting brass and weaving cloth for the Djenné-Timbuktu gold trade, complemented by Bono Manso (7,8k) and the forest chiefdom of Adansemanso (6,1k) [@Posnansky2015BeghoLife; @Dueppen2016TheArchaeology]. Coastal Elmina (4,2k) emerged at the 1482AD Portuguese threshold as a small fishing and salt town poised to reorient Akan commerce toward the Atlantic.

The largest demographic concentration in all of early West Africa, however, lay in Ile-Ife, Benin, Igbo-Ukwu and Lower Niger. Covering 404.098 km², this sub-region rose from 661,4k at 1AD to 1,31M in 500AD, 2,78M in 1000AD, 3,9M in 1300AD and 4,86M in 1500AD (12,02 persons/km², over five times the regional mean). Ile-Ife reached 88,6k by 1350AD during its potsherd-pavement and copper-alloy casting zenith, accompanied by Old Oyo (24,8k) on the northern savanna edge, Ijebu Ode (24,8k) behind the 160-kilometre earthwork rampart of Sungbo's Eredo, Owo (18,6k) and Ilesha (12,4k) [@Adekola2009EarlyUrban; @Connah2001AfricanCivilizations]. Eastward across the Niger, Nembe in the delta creeks reached 87,5k at 1000AD while Igbo-Ukwu (7,6k peak) marked rich ninth-to-fourteenth-century bronze-working networks [@Connah2001AfricanCivilizations]. In the Edo rain forest, Graham Connah's surveys mapped the monumental inner wall (11,6 km circumference) and surrounding rural *iya* earthwork mosaic of Benin City, whose resident population grew from 14,2k in 1100AD to 28,4k in 1300AD and 47,5k in 1500AD under Oba Ewuare [@Connah1967NewLight; @Connah2001AfricanCivilizations].

<figure class="crd-table-figure" id="tab:trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kanem-Bornu Empire and Lake Chad Basin</strong></td><td class="crd-td">167,1k</td><td class="crd-td">698k</td><td class="crd-td">971,4k</td><td class="crd-td">1,4M</td><td class="crd-td">1,89M</td><td class="crd-td">2,27M</td></tr>
<tr><td class="crd-td"><strong>Wagadou (Ghana) and Western Sahel</strong></td><td class="crd-td">64,5k</td><td class="crd-td">269,2k</td><td class="crd-td">346,6k</td><td class="crd-td">433,5k</td><td class="crd-td">531,1k</td><td class="crd-td">615,4k</td></tr>
<tr><td class="crd-td"><strong>Songhai Gao, Timbuktu and Niger Bend</strong></td><td class="crd-td">35k</td><td class="crd-td">164,7k</td><td class="crd-td">205,1k</td><td class="crd-td">249,9k</td><td class="crd-td">318,8k</td><td class="crd-td">366,1k</td></tr>
<tr><td class="crd-td"><strong>Tuareg Air, Adrar des Ifoghas and Sahara</strong></td><td class="crd-td">5,5k</td><td class="crd-td">20,9k</td><td class="crd-td">26,7k</td><td class="crd-td">31,4k</td><td class="crd-td">42,5k</td><td class="crd-td">51k</td></tr>
<tr><td class="crd-td"><strong>Proto-Akan, Bono Manso and Guinea Forest</strong></td><td class="crd-td">123,5k</td><td class="crd-td">536,9k</td><td class="crd-td">633,6k</td><td class="crd-td">877,3k</td><td class="crd-td">1,37M</td><td class="crd-td">1,81M</td></tr>
<tr><td class="crd-td"><strong>Mossi Kingdoms and Voltaic Gur States</strong></td><td class="crd-td">116,5k</td><td class="crd-td">555k</td><td class="crd-td">667,3k</td><td class="crd-td">934,2k</td><td class="crd-td">1,44M</td><td class="crd-td">1,79M</td></tr>
<tr><td class="crd-td"><strong>Hausa Bakwai City-States (Kano, Katsina, Gobir)</strong></td><td class="crd-td">73,9k</td><td class="crd-td">349,4k</td><td class="crd-td">689k</td><td class="crd-td">1,33M</td><td class="crd-td">1,77M</td><td class="crd-td">2,13M</td></tr>
<tr><td class="crd-td"><strong>Nok-Jos Plateau, Nupe and Benue Corridor</strong></td><td class="crd-td">75,9k</td><td class="crd-td">354k</td><td class="crd-td">633,2k</td><td class="crd-td">1,22M</td><td class="crd-td">1,74M</td><td class="crd-td">2,15M</td></tr>
<tr><td class="crd-td"><strong>Ile-Ife, Benin, Igbo-Ukwu and Lower Niger</strong></td><td class="crd-td">158,7k</td><td class="crd-td">661,4k</td><td class="crd-td">1,31M</td><td class="crd-td">2,78M</td><td class="crd-td">3,9M</td><td class="crd-td">4,86M</td></tr>
<tr><td class="crd-td"><strong>Mali Imperial Core and Inland Niger Delta</strong></td><td class="crd-td">60,9k</td><td class="crd-td">252,7k</td><td class="crd-td">316,5k</td><td class="crd-td">419,8k</td><td class="crd-td">589,6k</td><td class="crd-td">725,9k</td></tr>
<tr><td class="crd-td"><strong>Jolof Empire, Takrur and Senegambia</strong></td><td class="crd-td">31,1k</td><td class="crd-td">130,3k</td><td class="crd-td">180,9k</td><td class="crd-td">290,8k</td><td class="crd-td">477,5k</td><td class="crd-td">653,6k</td></tr>
<tr><td class="crd-td"><strong>Total West Africa and Sahel</strong></td><td class="crd-td">912,6k</td><td class="crd-td">3,99M</td><td class="crd-td">5,98M</td><td class="crd-td">9,97M</td><td class="crd-td">14,09M</td><td class="crd-td">17,42M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional and aggregate population trajectories across West Africa and the Sahel at six benchmark years from 1000BC to 1500AD.</figcaption>
</figure>

# Limitations

Four structural uncertainties bound demographic estimates for early West Africa and the Sahel. First, archaeological visibility varies sharply with climate and vegetation. Open Sahelian and savanna mounds at Koumbi Saleh, Jenne-Jeno, Dia and Gao Saney preserve crisp mudbrick stratigraphy and surface pottery scatters visible in aerial photography [@Mcintosh1984TheEarly; @Cisse2010GaoSaney], whereas tropical rainfall, acidic soils and dense secondary forest in Ivory Coast, Liberia, Sierra Leone and southern Nigeria rapidly dissolve unbaked clay and obscure rural hamlets [@Dueppen2016TheArchaeology; @Connah2001AfricanCivilizations]. Unadjusted site counts therefore under-represent the Guinea forest relative to Mali and Mauritania, requiring fluvial and ecological kriging covariates to balance rural totals.

Second, urban headcount conversions from walled or mounded extents carry an inherent margin of 20% to 35%. West African towns frequently enclosed farmland, sacred groves, market plazas and royal compounds inside outer earthworks — notably Benin City's *iya* web and Old Oyo's outer walls — meaning gross enclosed area cannot be multiplied blindly by compact Mediterranean urban densities [@Connah1967NewLight; @Adekola2009EarlyUrban]. Even with Igboho's 60 to 88 persons/ha ethnographic benchmark, seasonal influxes of pastoralists and caravan traders could shift town headcounts noticeably within a single decade [@McIntosh1995JenneJeno; @Posnansky2015BeghoLife].

Third, reconciling Arabic external texts with oral dynastic traditions introduces chronological friction, particularly for early Wagadou, the thirteenth-to-fifteenth-century Mali ruler sequence in Ibn Khaldun and the Kano Chronicle [@Austen1996HistoryOral; @Jansen1996TheRepresentation; @Sutton1979TowardsLess]. Radiocarbon suites in OSAAR and XRONOS narrow these gaps, yet single-observation historical peaks such as Nembe (87,5k at 1000AD) remain wider approximations than multi-season excavations at Djenné or Gao [@Besse2020OSAAR; @Hinz2023XRONOS].

Fourth, backward projection from nineteenth- and twentieth-century colonial enumerations to 1500AD spans four centuries marked by Atlantic slave exports, Sahelian droughts and nineteenth-century jihads [@Runfola2020GeoBoundaries]. Sub-regional totals before 1500AD therefore capture long-run ecological carrying capacity and regional archaeological intensity rather than short-term decadal demographic shocks.

# Conclusion

Between 1000BC and 1500AD, West Africa and the Sahel expanded from 912,6k dispersed iron-age and late-stone-age inhabitants to 17,42M people living across an interconnected mosaic of Sahelian caravan entrepots, floodplain mound towns, walled Hausa city-states and dense forest kingdoms. Across that 2.500-year arc, two structural patterns stand out. Urbanism emerged endogenously around riverine floodplains and craft specialisation — demonstrated earliest at Dhar Tichitt, Dia and Jenne-Jeno — long before trans-Saharan Islamic commerce amplified Gao, Koumbi Saleh and Timbuktu. At the same time, demographic weight shifted decisively southward into the woodland and rain-forest zones: by 1500AD, the Lower Niger forest belt, Nok-Benue corridor, Hausaland, Akan forest and Voltaic savanna accounted for nearly three-quarters of all West African inhabitants, establishing the spatial foundation upon which early modern Atlantic and Sahelian history unfolded.

# Appendix

## Sub-Regional Population Density and Territorial Shares

Table \ref{tab:density-appendix} reports mean population density in persons per km² across all 11 sub-regions from 1000BC to 1500AD, illustrating the persistent 150-fold density contrast between the Saharan caravan corridors of Air and Adrar des Ifoghas (0,08 persons/km² in 1500AD) and the intensive agricultural heartland of Ile-Ife, Benin and the Lower Niger (12,02 persons/km² in 1500AD). Table \ref{tab:shares-appendix} tracks each sub-region's percentage share of the regional aggregate over the same six benchmarks.

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kanem-Bornu Empire and Lake Chad Basin</strong></td><td class="crd-td">0,08</td><td class="crd-td">0,34</td><td class="crd-td">0,47</td><td class="crd-td">0,68</td><td class="crd-td">0,92</td><td class="crd-td">1,11</td></tr>
<tr><td class="crd-td"><strong>Wagadou (Ghana) and Western Sahel</strong></td><td class="crd-td">0,05</td><td class="crd-td">0,21</td><td class="crd-td">0,27</td><td class="crd-td">0,34</td><td class="crd-td">0,41</td><td class="crd-td">0,48</td></tr>
<tr><td class="crd-td"><strong>Songhai Gao, Timbuktu and Niger Bend</strong></td><td class="crd-td">0,04</td><td class="crd-td">0,18</td><td class="crd-td">0,23</td><td class="crd-td">0,28</td><td class="crd-td">0,36</td><td class="crd-td">0,41</td></tr>
<tr><td class="crd-td"><strong>Tuareg Air, Adrar des Ifoghas and Sahara</strong></td><td class="crd-td">0,01</td><td class="crd-td">0,03</td><td class="crd-td">0,04</td><td class="crd-td">0,05</td><td class="crd-td">0,07</td><td class="crd-td">0,08</td></tr>
<tr><td class="crd-td"><strong>Proto-Akan, Bono Manso and Guinea Forest</strong></td><td class="crd-td">0,23</td><td class="crd-td">0,98</td><td class="crd-td">1,16</td><td class="crd-td">1,6</td><td class="crd-td">2,51</td><td class="crd-td">3,3</td></tr>
<tr><td class="crd-td"><strong>Mossi Kingdoms and Voltaic Gur States</strong></td><td class="crd-td">0,25</td><td class="crd-td">1,19</td><td class="crd-td">1,44</td><td class="crd-td">2,01</td><td class="crd-td">3,1</td><td class="crd-td">3,86</td></tr>
<tr><td class="crd-td"><strong>Hausa Bakwai City-States (Kano, Katsina, Gobir)</strong></td><td class="crd-td">0,16</td><td class="crd-td">0,76</td><td class="crd-td">1,49</td><td class="crd-td">2,87</td><td class="crd-td">3,84</td><td class="crd-td">4,61</td></tr>
<tr><td class="crd-td"><strong>Nok-Jos Plateau, Nupe and Benue Corridor</strong></td><td class="crd-td">0,17</td><td class="crd-td">0,79</td><td class="crd-td">1,42</td><td class="crd-td">2,74</td><td class="crd-td">3,9</td><td class="crd-td">4,81</td></tr>
<tr><td class="crd-td"><strong>Ile-Ife, Benin, Igbo-Ukwu and Lower Niger</strong></td><td class="crd-td">0,39</td><td class="crd-td">1,64</td><td class="crd-td">3,24</td><td class="crd-td">6,88</td><td class="crd-td">9,66</td><td class="crd-td">12,02</td></tr>
<tr><td class="crd-td"><strong>Mali Imperial Core and Inland Niger Delta</strong></td><td class="crd-td">0,16</td><td class="crd-td">0,65</td><td class="crd-td">0,81</td><td class="crd-td">1,08</td><td class="crd-td">1,52</td><td class="crd-td">1,87</td></tr>
<tr><td class="crd-td"><strong>Jolof Empire, Takrur and Senegambia</strong></td><td class="crd-td">0,09</td><td class="crd-td">0,39</td><td class="crd-td">0,54</td><td class="crd-td">0,86</td><td class="crd-td">1,42</td><td class="crd-td">1,94</td></tr>
<tr><td class="crd-td"><strong>Mean West Africa and Sahel</strong></td><td class="crd-td">0,12</td><td class="crd-td">0,5</td><td class="crd-td">0,76</td><td class="crd-td">1,26</td><td class="crd-td">1,78</td><td class="crd-td">2,2</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Mean population density (persons per km²) across the 11 West African and Sahelian sub-regions from 1000BC to 1500AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:shares-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1000BC (%)</th><th class="crd-th">1AD (%)</th><th class="crd-th">500AD (%)</th><th class="crd-th">1000AD (%)</th><th class="crd-th">1300AD (%)</th><th class="crd-th">1500AD (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kanem-Bornu Empire and Lake Chad Basin</strong></td><td class="crd-td">18,3</td><td class="crd-td">17,5</td><td class="crd-td">16,2</td><td class="crd-td">14</td><td class="crd-td">13,4</td><td class="crd-td">13</td></tr>
<tr><td class="crd-td"><strong>Wagadou (Ghana) and Western Sahel</strong></td><td class="crd-td">7,1</td><td class="crd-td">6,7</td><td class="crd-td">5,8</td><td class="crd-td">4,3</td><td class="crd-td">3,8</td><td class="crd-td">3,5</td></tr>
<tr><td class="crd-td"><strong>Songhai Gao, Timbuktu and Niger Bend</strong></td><td class="crd-td">3,8</td><td class="crd-td">4,1</td><td class="crd-td">3,4</td><td class="crd-td">2,5</td><td class="crd-td">2,3</td><td class="crd-td">2,1</td></tr>
<tr><td class="crd-td"><strong>Tuareg Air, Adrar des Ifoghas and Sahara</strong></td><td class="crd-td">0,6</td><td class="crd-td">0,5</td><td class="crd-td">0,4</td><td class="crd-td">0,3</td><td class="crd-td">0,3</td><td class="crd-td">0,3</td></tr>
<tr><td class="crd-td"><strong>Proto-Akan, Bono Manso and Guinea Forest</strong></td><td class="crd-td">13,5</td><td class="crd-td">13,4</td><td class="crd-td">10,6</td><td class="crd-td">8,8</td><td class="crd-td">9,8</td><td class="crd-td">10,4</td></tr>
<tr><td class="crd-td"><strong>Mossi Kingdoms and Voltaic Gur States</strong></td><td class="crd-td">12,8</td><td class="crd-td">13,9</td><td class="crd-td">11,2</td><td class="crd-td">9,4</td><td class="crd-td">10,2</td><td class="crd-td">10,3</td></tr>
<tr><td class="crd-td"><strong>Hausa Bakwai City-States (Kano, Katsina, Gobir)</strong></td><td class="crd-td">8,1</td><td class="crd-td">8,8</td><td class="crd-td">11,5</td><td class="crd-td">13,3</td><td class="crd-td">12,6</td><td class="crd-td">12,2</td></tr>
<tr><td class="crd-td"><strong>Nok-Jos Plateau, Nupe and Benue Corridor</strong></td><td class="crd-td">8,3</td><td class="crd-td">8,9</td><td class="crd-td">10,6</td><td class="crd-td">12,3</td><td class="crd-td">12,4</td><td class="crd-td">12,4</td></tr>
<tr><td class="crd-td"><strong>Ile-Ife, Benin, Igbo-Ukwu and Lower Niger</strong></td><td class="crd-td">17,4</td><td class="crd-td">16,6</td><td class="crd-td">21,9</td><td class="crd-td">27,9</td><td class="crd-td">27,7</td><td class="crd-td">27,9</td></tr>
<tr><td class="crd-td"><strong>Mali Imperial Core and Inland Niger Delta</strong></td><td class="crd-td">6,7</td><td class="crd-td">6,3</td><td class="crd-td">5,3</td><td class="crd-td">4,2</td><td class="crd-td">4,2</td><td class="crd-td">4,2</td></tr>
<tr><td class="crd-td"><strong>Jolof Empire, Takrur and Senegambia</strong></td><td class="crd-td">3,4</td><td class="crd-td">3,3</td><td class="crd-td">3</td><td class="crd-td">2,9</td><td class="crd-td">3,4</td><td class="crd-td">3,8</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Percentage share of total West African and Sahelian population by sub-region across six benchmark years from 1000BC to 1500AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Note 1: All benchmark years prior to 1AD are labelled with BC suffixes (1000BC), and 1AD denotes the zero-epoch benchmark raster (0). Modern post-1800 census years omit era suffixes.

Note 2: Two coastal-edge settlements in the 228-site ledger — Carboneras on Bioko Island (Equatorial Guinea) and Mouanko-Lobethal on the Cameroon littoral — sit marginally beyond the continental 5-arcminute pixel mask and are assigned to their nearest adjacent sub-region in the companion settlement gazetteer.
