---
title: "Early Modern Sahel and Sudan (1500-1898)"
subtitle: "Successor Polities, Sokoto, Egyptian Sudan and the Mahdist State"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_modern_sahel_sudan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Ten historical sub-regions and 398 individually assessed settlements across the Sahel and Sudan between 1500AD and 1898AD."
hero_label: "fig:hero-sahel-sudan"

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

Between the rise of the Songhai and Funj sultanates around 1500AD and the Anglo-Egyptian and French conquests of 1898AD, the Sahel and Sudanic savanna belt underwent sweeping political realignment and uneven demographic change. Across 9.350.985 km² spanning 21 modern jurisdictions from the Atlantic Sahara and Senegambia to the Red Sea littoral and Ethiopian highlands, NICETHI reconstructs a total population rising from 13,24M inhabitants in 1500AD to 23,69M in 1700AD, before declining across the eighteenth-century Sahelian droughts and slave-raiding wars to 18,15M in 1780AD. Nineteenth-century Islamic reform states and caravan polities stabilised total numbers at 19,07M in 1810AD and 19,68M in 1840AD, followed by a sharp dip to 17,96M during the wars of Umar Tal, Wadai and Turco-Egyptian Equatoria, and recovery to 19,69M by 1890AD (2,11 persons/km²). Regional trajectories diverged sharply across ecological zones: while the Sokoto Caliphate, Hausaland and the Mossi-Kong savannas sustained end-epoch densities approaching 5 persons/km², the Pashalik of Timbuktu, Darfur and Wadai absorbed sustained urban and rural contraction. These figures integrate 398 individually assessed settlements across 1.093 chronological observations, non-stationary Matérn residual kriging over regional archaeological registers and mass-conserving pycnophylactic disaggregation across administrative boundaries.



# Background

## Ecological Corridors, Drought Cycles and Agrarian Foundations

Stretching 5.500 km from the Atlantic coast of Mauritania and Senegal to the Eritrean Red Sea and Ethiopian escarpment, the Sahel and Sudanic belt forms an east-west gradient between Saharan oasis commerce and humid West-Central African woodlands [@Caillie1830TravelsThrough; @Dijk2000DroughtAnd]. North of the 250 mm isohyet, pastoral Moorish, Tuareg, Tubu and Kababish confederations combined camel and cattle transhumance with oasis date cultivation and gum-arabic collection across Tichitt, Chinguetti, Agadez and Tibesti [@Chastanet1992SurvivalStrategies; @Lyon1821NarrativeTravels]. Southward across the 400 to 900 mm Sudanic savanna, pearl millet, sorghum, flood-recession rice in the Inland Niger Delta and Lake Chad basin, cotton textiles and dry-season irrigation anchored densely settled farming plains from Futa Toro and Segou through Hausaland and Bornu to Sennar [@MacDonald2012WalledSegou; @Hamza2004DorayiKano; @Crawford1951FungSennar].

Unlike the equatorial rainforest belt to the south, open savanna terrain favoured cavalry warfare, walled urban agglomerations and long-distance caravan traffic, yet exposed cultivators to recurrent multi-decadal aridity [@Dijk2000DroughtAnd; @Chastanet1992SurvivalStrategies]. Chronicle records from Timbuktu, Bornu, Kano and the upper Senegal valley document severe mid-seventeenth-century and mid-eighteenth-century famines, most notably the Great Drought of the 1730s to 1750s, that triggered pastoral southward migration, grain price spikes and urban depopulation [@Aouatef2026PoliticalStructures; @Chastanet1992SurvivalStrategies; @Dijk2000DroughtAnd]. At the same time, nineteenth-century agrarian estates (*rimaybe* and *gandaye* plantations) around Kano, Zaria, Hamdallahi and Segou intensified cotton, indigo and grain output to feed growing garrison and scholarly capitals [@Hamza2004DorayiKano; @Azarya1980TradersAnd; @Lovejoy2012Transformations].

## Historiography from Songhai Collapse to the Mahdist State

Quantitative demographic historiography of the early modern Sahel and Sudan rests on four uneven evidentiary pillars: Arabic *tarikh* chronicles and royal *mahram* charters from Timbuktu, Bornu and Sennar [@Crawford1951FungSennar; @Spaulding1985HeroicAge; @Aouatef2026PoliticalStructures]; nineteenth-century European and Ottoman traveller surveys across Murzuk, Bornu, Hausaland, Timbuktu and the Nile [@Lyon1821NarrativeTravels; @Caillie1830TravelsThrough; @Baikie1862NotesJourney]; regional archaeological surveys of walled settlements and fired-brick elite capitals in Segou, Kanem and Hausaland [@MacDonald2012WalledSegou; @Magnavita2025NewLuminescence; @Suleiman2007BirninZaria]; and late nineteenth-century colonial military and administrative censuses [@Houdoy1881SoudanFrancais; @Bellagamba2004EntrustmentAnd].

Across the western and central Sudan, scholars have long debated how political upheaval reshaped settlement geography after the Moroccan Saadian expedition shattered imperial Songhai at Tondibi in 1591AD [@Caillie1830TravelsThrough; @Azarya1980TradersAnd]. While Timbuktu and Gao lost imperial tributary revenues under the Arma *pashalik*, Bamana military kingdoms at Segou and Kaarta constructed fortified *tata* earth-walled networks across the middle Niger [@MacDonald2012WalledSegou], while Mossi, Kong and later Wassoulou integrated savanna cavalry states with southern kola and gold routes [@Azarya1980TradersAnd; @Ill1999MandeAnd]. Farther east, the nineteenth-century jihad movements led by Usman dan Fodio in Hausaland (1804AD), Seku Amadu in Massina (1818AD) and Umar Tal across Futa Toro, Kaarta and Segou (1852AD to 1864AD) consolidated large Islamic federations that simultaneously displaced rural frontier populations and enlarged administrative capitals such as Sokoto, Kano, Zaria, Hamdallahi and Nioro du Sahel [@Last1967SokotoCaliphate; @Smaldone1962WarfareThe; @Azarya1980TradersAnd; @Houdoy1881SoudanFrancais].

In the Lake Chad and eastern Sudanic corridor, Kanem-Bornu shifted its political centre from Ngazargamu after Fulbe attacks in 1808AD to Kukawa under Muhammad al-Kanemi, while Wadai, Bagirmi and the Keira Sultanate of Darfur competed over trans-Saharan caravan routes to Tripoli and Asyut [@Lyon1821NarrativeTravels; @Ofahey1980StateDarFur; @Aouatef2026PoliticalStructures; @Magnavita2025NewLuminescence]. Along the Nile, the Funj Sultanate of Sennar gave way in 1821AD to Turco-Egyptian administration centred on Khartoum, whose expansion of river-steamer commerce and ivory-and-slave stations deep into Kordofan, Darfur and Bahr el Ghazal preceded the Mahdist revolution of 1881AD to 1898AD and the explosive growth of Omdurman [@Crawford1951FungSennar; @Spaulding1985HeroicAge; @Lovejoy2012Transformations; @Totten2006GenocideDarfur]. NICETHI brings these western, central and Nile-Sudanic literatures into one common spatial and demographic accounting frame from 1500AD to 1898AD.

# Methodology

## Sub-Regional Territorial Partition and Accounting Domain

The chapter encompasses 9.350.985 km² across 113.159 five-arcminute cells spanning 21 modern countries from Mauritania, Senegal and Sierra Leone in the west to Sudan, Eritrea and Ethiopia in the east. Within NICETHI, the chapter sits in Regime 2 (1500AD to 1898AD), linking pre-1500AD West African, Nubian and Horn foundations with twentieth-century colonial enumerations. Ten contiguous political-ecological sub-regions partition the territory using OpenHistoricalMap state boundaries, period-specific historical GIS layers and HydroBASINS Level-6 watershed outlines clipped to geoBoundaries coastlines [@Runfola2020GeoBoundaries] (Table \ref{tab:subregions}).

Regional totals are tracked across 14 benchmark years in the underlying rasters (1500AD, 1700AD, 1710AD, 1730AD, 1740AD, 1760AD, 1780AD, 1790AD, 1810AD, 1830AD, 1840AD, 1860AD, 1870AD and 1890AD). Analytical tables report six core chronological anchors spanning major geopolitical inflection points: 1500AD (Songhai and early Funj baseline), 1700AD (pre-drought early modern peak), 1780AD (eighteenth-century arid contraction and Mossi-Hausa consolidation), 1810AD (Sokoto jihad and Bornu reorganisation), 1860AD (Umar Tal campaigns, Turco-Egyptian Nile expansion and Wadai-Darfur rivalry) and 1890AD (Mahdist Omdurman zenith and eve of colonial partition). All sub-regional totals measure full resident populations across walled cities, oasis towns, river ports, farming villages and nomadic pastoral bands [@Last1967SokotoCaliphate; @Ofahey1980StateDarFur].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Era</th><th class="crd-th">Interior Sites</th><th class="crd-th">Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Trarza, Brakna and Adrar Emirates</strong></td><td class="crd-td">936.424</td><td class="crd-td">11.628</td><td class="crd-td">1600AD-1898AD</td><td class="crd-td">39</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Futa Toro, Segou Bamana and Toucouleur</strong></td><td class="crd-td">776.687</td><td class="crd-td">9.287</td><td class="crd-td">1650AD-1893AD</td><td class="crd-td">63</td><td class="crd-td">8,3</td></tr>
<tr><td class="crd-td"><strong>Pashalik of Timbuktu, Massina and Niger Bend</strong></td><td class="crd-td">1.000.298</td><td class="crd-td">12.339</td><td class="crd-td">1500AD-1898AD</td><td class="crd-td">20</td><td class="crd-td">10,7</td></tr>
<tr><td class="crd-td"><strong>Mossi Kingdoms, Kong and Wassoulou</strong></td><td class="crd-td">418.083</td><td class="crd-td">4.986</td><td class="crd-td">1500AD-1898AD</td><td class="crd-td">36</td><td class="crd-td">4,5</td></tr>
<tr><td class="crd-td"><strong>Sokoto Caliphate and Adamawa Emirates</strong></td><td class="crd-td">1.010.947</td><td class="crd-td">12.159</td><td class="crd-td">1500AD-1898AD</td><td class="crd-td">54</td><td class="crd-td">10,8</td></tr>
<tr><td class="crd-td"><strong>Kanem-Bornu Empire and Bagirmi Sultanate</strong></td><td class="crd-td">1.199.798</td><td class="crd-td">14.555</td><td class="crd-td">1500AD-1898AD</td><td class="crd-td">33</td><td class="crd-td">12,8</td></tr>
<tr><td class="crd-td"><strong>Sultanate of Wadai, Tibesti and Dar al-Kuti</strong></td><td class="crd-td">937.592</td><td class="crd-td">11.343</td><td class="crd-td">1635AD-1898AD</td><td class="crd-td">14</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Darfur Sultanate and Kordofan</strong></td><td class="crd-td">794.197</td><td class="crd-td">9.583</td><td class="crd-td">1600AD-1898AD</td><td class="crd-td">15</td><td class="crd-td">8,5</td></tr>
<tr><td class="crd-td"><strong>Funj, Turco-Egyptian and Mahdist Nile</strong></td><td class="crd-td">1.319.228</td><td class="crd-td">16.027</td><td class="crd-td">1504AD-1898AD</td><td class="crd-td">84</td><td class="crd-td">14,1</td></tr>
<tr><td class="crd-td"><strong>Bahr el Ghazal, Azande and Equatoria</strong></td><td class="crd-td">957.733</td><td class="crd-td">11.252</td><td class="crd-td">1500AD-1898AD</td><td class="crd-td">26</td><td class="crd-td">10,2</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Ten historical sub-regions of Early Modern Sahel and Sudan (1500AD-1898AD), showing polygon area, 5-arcminute pixel count, regional span, interior sites and territorial share.</figcaption>
</figure>

## Settlement Screening and Evidence-Based Population Reconstruction

To reconstruct urban hierarchies across the Sahel and Sudan, 448 candidate walled capitals, caravan entrepôts, Nile ports and oasis towns were screened from colonial censuses, Arabic chronicles, European expedition reports and archaeological wall surveys [@Baikie1862NotesJourney; @Caillie1830TravelsThrough; @MacDonald2012WalledSegou; @Suleiman2007BirninZaria]. After merging and excluding 50 duplicate orthographies and historical aliases (for instance linking alternative spellings of Tichitt, Oualata, Daboya, Bilma and El Fasher into canonical entries), 398 individually assessed settlements containing 1.093 dated observations were retained across all 10 sub-regions (Figure \ref{fig:hero-sahel-sudan}), achieving a Wave-4 gap-sweep marginal gain of 1,26% and zero empty inhabited sub-regions.

All 398 settlements hold city-proper spatial scopes (398 city-proper, 0 metro), avoiding double counting between walled urban cores and surrounding plantation hamlets. National coverage spans all 21 constituent countries, led by Sudan (78 sites), Nigeria (44), Mali (44), Ethiopia (35), Niger (29), Senegal (26), Mauritania (18), Chad (17), Guinea (17), Burkina Faso (16) and South Sudan (16). Where direct nineteenth-century counts were absent for earlier centuries, population benchmarks draw on surveyed enclosure perimeters, compound counts and ethnographic household ratios (such as Storey's 59-city African urban density sample with mean 12.724 persons/km² and median 10.000, and Agbaje-Williams's Igboho transect calibration of 60 to 88 persons/ha across 69,5 ha and 324 houses) alongside excavated fired-brick complexes in Kanem and *tata* wall circuits around Segou [@Magnavita2025NewLuminescence; @MacDonald2012WalledSegou; @Meek1934BlackByzantium].

## Non-Stationary Matérn Kriging and Pycnophylactic Disaggregation

Because urban gazetteers capture nucleated towns while omitting dispersed agro-pastoral villages across 9,35M km², rural population surfaces are interpolated via non-stationary Matérn ($\nu = 3/2$) residual kriging trained on 11.199 domestic archaeological site records (6.970 unique-coordinate loci) and 2.732 cross-frontier buffer records across 6.431 domestic Voronoi catchments (median radius 31,72 km, 90th percentile 49,29 km, strictly capped below 25.000 km² with an observed maximum of 23.489 km²) and 383 frontier buffer catchments. Across the underlying archaeological mosaic, 82,94% of records derive from regional heritage registers and academic monographs (75,69% across West Africa's 2.591 records and 93,91% across East and Horn Africa's 2.708 records), with zero crowd-sourced entries.

Two kriging horizons span this chapter: Horizon 9 (Early Modern Atlantic and Sahel, 1500AD to 1750AD; 2.096 active domain sites across 1.034 catchments) and Horizon 10 (Late Precolonial Nineteenth Century, 1750AD to 1900AD; 1.130 active sites across 547 catchments), joined smoothly from Horizon 8 (High Mediaeval, ending 1500AD). Weighted least-squares variogram fitting fixes dimensionless short-range correlation at $\tau_1 = 1,35$ (raw 1,4046 in Horizon 9 and 1,3757 in Horizon 10), secondary range $\tau_2 = 2,9025$ and nugget-to-sill ratio 0,04, yielding effective short-range correlation distances of 44,55 km and 43,63 km ($R^2 = 0,9992$ in both horizons). Deterministic trend weights reflect river-corridor and coastal concentration along the Senegal, Niger, Benue, Logone-Chari and Nile basins ($\beta_3 = 0,0595$ in Horizon 9 and 0,0342 in Horizon 10; $\beta_4 = 0,0717$ and 0,0475), guarded by a 2-pixel modern urban buffer mask. Downstream pycnophylactic disaggregation into colonial and modern geoBoundaries administrative units [@Runfola2020GeoBoundaries] preserves mass within 0,01% across 30.911 unit-year checks over 81 disaggregated years (worst relative error $5,603 \times 10^{-8}$).

# Testing and Validation

## Kriging Horizon Stability and Urban Rank-Size Calibration

Variogram diagnostics across Horizons 8 to 10 confirm smooth structural continuity across the 1500AD to 1898AD transition without artificial cliff artefacts along the Saharan-Sahelian frontier (Table \ref{tab:kriging-horizons}). Fluvial proximity ($\beta_3$) and coastal access ($\beta_4$) decline gently from High Mediaeval and Early Modern horizons into the nineteenth century as overland caravan states, Kano-Zaria plantation belts and Mahdist administrative capitals expanded inland away from Atlantic and Mediterranean termini [@Hamza2004DorayiKano; @Last1967SokotoCaliphate].

<figure class="crd-table-figure" id="tab:kriging-horizons">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Sites</th><th class="crd-th">Catchments</th><th class="crd-th">Range (km)</th><th class="crd-th">Fluvial Beta</th><th class="crd-th">Coastal Beta</th><th class="crd-th">R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>High Mediaeval (Mali, Zimbabwe, Solomonic)</strong></td><td class="crd-td">2.344</td><td class="crd-td">1.200</td><td class="crd-td">45,12</td><td class="crd-td">0,0757</td><td class="crd-td">0,0816</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Early Modern Atlantic and Sahel (1500AD-1750AD)</strong></td><td class="crd-td">2.096</td><td class="crd-td">1.034</td><td class="crd-td">44,55</td><td class="crd-td">0,0595</td><td class="crd-td">0,0717</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Late Precolonial Nineteenth Century (1750AD-1900AD)</strong></td><td class="crd-td">1.130</td><td class="crd-td">547</td><td class="crd-td">43,63</td><td class="crd-td">0,0342</td><td class="crd-td">0,0475</td><td class="crd-td">0,9992</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Matérn kriging variogram parameters and trend covariates across High Mediaeval, Early Modern and Late Precolonial horizons.</figcaption>
</figure>

Across the 398 individually assessed settlements (yielding 397 spatially deduplicated city peaks after merging two co-located Freetown entries), ordinary least-squares rank-size regression across the upper 180 settlements gives a sub-unitary Pareto exponent of $q = 0,77$ ($R^2 = 0,98$; full-sample $q = 0,98$, $R^2 = 0,90$; Figure \ref{fig:rank-size}). That flat upper-tail slope ($q < 1$) reflects a multi-polar belt of independent regional capitals rather than one dominant continental metropolis: Omdurman (148k in 1895AD), Nioro du Sahel (95k wartime congregation in 1892AD), Gao (68,6k in 1585AD), Birnin Gazargamu (62,4k in 1700AD), Gonder (62k in 1700AD), Khartoum (60k in 1847AD), Kukawa (60k in 1870AD), Niani (60k in 1550AD), Kano (58,4k in 1885AD) and Timbuktu (58,4k in 1550AD) anchored distinct east-west trade and political orbits [@Caillie1830TravelsThrough; @Baikie1862NotesJourney; @Aouatef2026PoliticalStructures]. Below this 40k to 148k apex, regional emirate capitals, river ports and caravan oases, including Sokoto (34,2k), Djenné (32,4k), Freetown (30k), Bauchi (30k), Sennar (28,6k), El Obeid (28,5k), Abéché (28k), Alkalawa (24,8k), Massenya (24,6k) and Wara (22,4k), form a dense middle tier before smaller garrison towns and Saharan oases taper toward 500 to 2k inhabitants beyond rank 200 [@Smaldone1962WarfareThe; @Ofahey1980StateDarFur; @Crawford1951FungSennar].

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-modern-sahel-sudan/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size scaling across 397 spatially deduplicated settlements (top-180 OLS slope q = 0,77, R² = 0,98) and mean sub-regional density in 1890AD.</figcaption>
</figure>

## Early Colonial Communal Censuses and Continental Benchmarks

Early municipal and colonial administrative rolls along the Atlantic littoral provide direct external calibration at the close of the chapter (Table \ref{tab:subadmin-censuses}). In French Senegal, municipal enumerations of the *Quatre Communes* record Saint-Louis at 15.980 inhabitants in 1876 (compared with 14.920 in 1855 and 20.173 in 1891), Dakar at 8.737 in 1891 and Gorée at 2.100 in 1891 [@Houdoy1881SoudanFrancais; @Chastanet1992SurvivalStrategies]. Along the Sierra Leone estuary, decennial British colony censuses document Freetown growing from 1.190 in 1792 and 5.643 in 1822 to 18.035 in 1860, 21.931 in 1881 and 30.033 in 1891, while Banjul (Bathurst) rose from 1.867 in 1826 to 6.239 in 1891 [@Ill1999MandeAnd; @Bellagamba2004EntrustmentAnd].

<figure class="crd-table-figure" id="tab:subadmin-censuses">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality or Port</th><th class="crd-th">Administration</th><th class="crd-th">1850-1860</th><th class="crd-th">1876-1881</th><th class="crd-th">1891</th><th class="crd-th">Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Saint-Louis (Commune)</strong></td><td class="crd-td">French Senegal</td><td class="crd-td">14.920 (1855)</td><td class="crd-td">15.980 (1876)</td><td class="crd-td">20.173</td><td class="crd-td">AOF Quatre Communes Roll</td></tr>
<tr><td class="crd-td"><strong>Dakar (Commune)</strong></td><td class="crd-td">French Senegal</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8.737</td><td class="crd-td">AOF Quatre Communes Roll</td></tr>
<tr><td class="crd-td"><strong>Gorée (Commune)</strong></td><td class="crd-td">French Senegal</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2.100</td><td class="crd-td">AOF Quatre Communes Roll</td></tr>
<tr><td class="crd-td"><strong>Freetown (Colony)</strong></td><td class="crd-td">British Sierra Leone</td><td class="crd-td">18.035 (1860)</td><td class="crd-td">21.931 (1881)</td><td class="crd-td">30.033</td><td class="crd-td">Sierra Leone Decennial Census</td></tr>
<tr><td class="crd-td"><strong>Banjul (Settlement)</strong></td><td class="crd-td">British Gambia</td><td class="crd-td">4.262 (1851)</td><td class="crd-td">6.138 (1881)</td><td class="crd-td">6.239</td><td class="crd-td">Gambia Colonial Return</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Late nineteenth-century municipal and colonial enumerations along the western Sahelian littoral used to anchor pre-partition urban series.</figcaption>
</figure>

At the macro-regional scale, Table \ref{tab:macro-benchmarks} compares NICETHI's Sahel and Sudanic aggregate (17,96M in 1860AD and 19,69M in 1890AD) against Patrick Manning's 1850AD slave-trade region series and Frankema and Jerven's continental Africa benchmarks [@Lovejoy2012Transformations]. Manning's Table 10,8 places 30,76M inhabitants across Western Sudan (5,82M), Central Sudan (15,94M), Chad (2,44M) and Eastern Sudan (6,56M) in 1850AD, a figure roughly 60% higher than NICETHI's 19,2M mid-century average across the Sahel-Sudan chapter because Manning's back-projection extends deeper southward into Yoruba, Nupe, Igbo and Ethiopian-highland zones and applies higher pre-abolition carrying capacities. In Table 4,1, Manning reports West Africa declining from 50M in 1700AD to 46M in 1790AD and 41M in 1890AD while Northeast Africa stands at 19M, 22M and 20M across the same dates; NICETHI reproduces a comparable eighteenth-century Sahelian pause (from 23,69M in 1700AD to 18,15M in 1780AD) while constraining nineteenth-century densities tightly to post-1950AD census polygons.

<figure class="crd-table-figure" id="tab:macro-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Manning Region</th><th class="crd-th">1850 Pop.</th><th class="crd-th">1850 Share (%)</th><th class="crd-th">1950 Pop.</th><th class="crd-th">1950 Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Eastern Sudan</strong></td><td class="crd-td">6,56M</td><td class="crd-td">6,1</td><td class="crd-td">9,19M</td><td class="crd-td">5,6</td></tr>
<tr><td class="crd-td"><strong>Chad</strong></td><td class="crd-td">2,44M</td><td class="crd-td">2,3</td><td class="crd-td">3,09M</td><td class="crd-td">1,9</td></tr>
<tr><td class="crd-td"><strong>Central Sudan</strong></td><td class="crd-td">15,94M</td><td class="crd-td">14,8</td><td class="crd-td">24,56M</td><td class="crd-td">15,1</td></tr>
<tr><td class="crd-td"><strong>Western Sudan</strong></td><td class="crd-td">5,82M</td><td class="crd-td">5,4</td><td class="crd-td">8,5M</td><td class="crd-td">5,2</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Manning Table 10,8 mid-level regional population benchmarks (1850AD and 1950) across the four Sudanic zones compared with NICETHI sub-regional polygons.</figcaption>
</figure>

# Results

## Aggregate Trajectory Across Four Centuries (1500AD to 1898AD)

Total population across the ten Sahelian and Sudanic sub-regions expanded by 78,9% over the sixteenth and seventeenth centuries, rising from 13,24M inhabitants in 1500AD to an early modern peak of 23,69M in 1700AD (Table \ref{tab:trajectory} and Figure \ref{fig:trends}). During those two centuries, Songhai's trans-Saharan golden age, the consolidation of Sayfawa Bornu, Hausa city-states and the Funj Sultanate of Sennar sustained expanding millet, sorghum and irrigated Nile grain production, while attested urban centres tripled from 64 settlements (300,9k residents) in 1500AD to 180 settlements (972,4k residents) by 1700AD [@Crawford1951FungSennar; @Aouatef2026PoliticalStructures].

Over the eighteenth century, severe Sahelian droughts, Atlantic and Saharan captive raiding and succession wars reversed that expansion: regional numbers fell to 20,1M by 1710AD, drifted down across the mid-century famines to 19,44M in 1760AD and reached an eighteenth-century trough of 18,15M in 1780AD [@Dijk2000DroughtAnd; @Chastanet1992SurvivalStrategies; @Lovejoy2012Transformations]. From 1790AD (18,38M) through 1840AD (19,68M), demographic recovery across Futa Toro, Segou, Bornu, Wadai and Turco-Egyptian Sudan offset prolonged warfare in Hausaland and Darfur. A second sharp contraction struck around 1860AD (17,96M) amid Umar Tal's Toucouleur conquests, Wadai-Bornu border wars and slave-raiding disruption in Bahr el Ghazal and Darfur, before late nineteenth-century stabilisation carried the belt back to 19,69M by 1890AD (2,11 persons/km²). Meanwhile, attested urban populations continued rising from 1,23M across 261 settlements in 1780AD to 1,87M across 319 active towns in 1870AD, dipping to 1,49M across 231 active settlements in 1890AD as warfare depopulated older centres such as Khartoum, Kukawa and Ségou even as Omdurman and Nioro du Sahel swelled [@Smaldone1962WarfareThe; @Houdoy1881SoudanFrancais].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-modern-sahel-sudan/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional total and attested urban population (Panel A), active settlement counts (Panel B) and leading urban trajectories (Panel C) from 1500AD to 1890AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1810AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Trarza, Brakna and Adrar Emirates</strong></td><td class="crd-td">408,7k</td><td class="crd-td">744,3k</td><td class="crd-td">604,7k</td><td class="crd-td">639,1k</td><td class="crd-td">693,9k</td><td class="crd-td">864,5k</td></tr>
<tr><td class="crd-td"><strong>Futa Toro, Segou Bamana and Toucouleur</strong></td><td class="crd-td">1,29M</td><td class="crd-td">2,39M</td><td class="crd-td">2M</td><td class="crd-td">2,14M</td><td class="crd-td">1,87M</td><td class="crd-td">2,15M</td></tr>
<tr><td class="crd-td"><strong>Pashalik of Timbuktu, Massina and Niger Bend</strong></td><td class="crd-td">294,7k</td><td class="crd-td">504,3k</td><td class="crd-td">436k</td><td class="crd-td">463,4k</td><td class="crd-td">435,3k</td><td class="crd-td">484k</td></tr>
<tr><td class="crd-td"><strong>Mossi Kingdoms, Kong and Wassoulou</strong></td><td class="crd-td">1,61M</td><td class="crd-td">2,86M</td><td class="crd-td">2,01M</td><td class="crd-td">2,06M</td><td class="crd-td">1,85M</td><td class="crd-td">2,06M</td></tr>
<tr><td class="crd-td"><strong>Sokoto Caliphate and Adamawa Emirates</strong></td><td class="crd-td">3,39M</td><td class="crd-td">7,93M</td><td class="crd-td">4,75M</td><td class="crd-td">4,63M</td><td class="crd-td">4,14M</td><td class="crd-td">4,76M</td></tr>
<tr><td class="crd-td"><strong>Kanem-Bornu Empire and Bagirmi Sultanate</strong></td><td class="crd-td">1,37M</td><td class="crd-td">2,78M</td><td class="crd-td">2,15M</td><td class="crd-td">2,28M</td><td class="crd-td">2,26M</td><td class="crd-td">2,49M</td></tr>
<tr><td class="crd-td"><strong>Sultanate of Wadai, Tibesti and Dar al-Kuti</strong></td><td class="crd-td">388,1k</td><td class="crd-td">670,9k</td><td class="crd-td">634,5k</td><td class="crd-td">695,3k</td><td class="crd-td">667,7k</td><td class="crd-td">683,1k</td></tr>
<tr><td class="crd-td"><strong>Darfur Sultanate and Kordofan</strong></td><td class="crd-td">877,6k</td><td class="crd-td">1,05M</td><td class="crd-td">768,2k</td><td class="crd-td">797,8k</td><td class="crd-td">706,6k</td><td class="crd-td">731,9k</td></tr>
<tr><td class="crd-td"><strong>Funj, Turco-Egyptian and Mahdist Nile</strong></td><td class="crd-td">2,23M</td><td class="crd-td">2,96M</td><td class="crd-td">3,03M</td><td class="crd-td">3,41M</td><td class="crd-td">3,44M</td><td class="crd-td">3,51M</td></tr>
<tr><td class="crd-td"><strong>Bahr el Ghazal, Azande and Equatoria</strong></td><td class="crd-td">1,37M</td><td class="crd-td">1,79M</td><td class="crd-td">1,76M</td><td class="crd-td">1,96M</td><td class="crd-td">1,9M</td><td class="crd-td">1,96M</td></tr>
<tr><td class="crd-td"><strong>Total Study Area</strong></td><td class="crd-td">13,24M</td><td class="crd-td">23,69M</td><td class="crd-td">18,15M</td><td class="crd-td">19,07M</td><td class="crd-td">17,96M</td><td class="crd-td">19,69M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Sub-regional and aggregate population trajectories across six benchmark years from 1500AD to 1890AD.</figcaption>
</figure>

## Mauritania, Futa Toro, Segou and the Songhai Successors

Across the western Sahel and Senegal-Niger basins, three contrasting sub-regions illustrate the shift from trans-Saharan gold towns to Islamic and Bamana agrarian states. In the Hassaniya Moorish emirates of Trarza, Brakna, Tagant and Adrar together with the lower Senegal valley (936.424 km², 39 interior sites), population expanded from 408,7k in 1500AD to 744,3k in 1700AD, eased to 604,7k during late eighteenth-century droughts and French-Moorish gum wars, and climbed to 864,5k by 1890AD (0,92 persons/km²). Saharan caravan nodes such as Chinguetti (6,85k in 1650AD), Ouadane (5,34k in 1506AD) and Tichitt (8,35k in 1750AD) contracted gradually as Atlantic gum and groundnut ports, led by Saint-Louis (20,2k in 1891), Dakar (8,74k in 1891), Rufisque (8,09k) and Banjul (6,24k), captured coastal trade [@Chastanet1992SurvivalStrategies; @Houdoy1881SoudanFrancais].

Directly south along the upper Senegal, upper Niger and Inland Niger Delta, Futa Toro, the Bamana Kingdom of Segou and the Toucouleur empire (776.687 km², 63 interior sites) rose from 1,29M in 1500AD to 2,39M in 1700AD, dipped to 2M in 1780AD and recovered to 2,25M in 1840AD before Umar Tal's wars cut numbers to 1,87M in 1860AD, rebounding to 2,15M in 1890AD (2,76 persons/km²). After the decline of old Mali's capital Niani (60k in 1550AD down to 3,84k in 1650AD), urban gravity shifted first to Bamana Ségou (40k in 1858AD), Sansanding (18,4k in 1865AD) and Seku Amadu's planned Massina capital Hamdallahi (42,6k in 1855AD before its 1862AD destruction), and later to Toucouleur stronghold Nioro du Sahel, which briefly swelled to 95k refugees and garrison families in 1892AD following French advances [@MacDonald2012WalledSegou; @Azarya1980TradersAnd; @Houdoy1881SoudanFrancais; @Bellagamba2004EntrustmentAnd]. Across Futa Jallon and north-western Sierra Leone, Mande *dyula* and Fulbe hubs at Kankan (10,4k) and Kansala (13,65k) linked inland cattle and gold networks to Freetown [@Ill1999MandeAnd].

Further north along the Niger Bend, the Pashalik of Timbuktu, northern Massina and the Tuareg Kel Adagh (1.000.298 km², 20 interior sites) formed the sparsest sub-region in the chapter, moving from 294,7k in 1500AD to 504,3k in 1700AD and 484k in 1890AD (0,48 persons/km²). Following the 1591AD Moroccan invasion, imperial Songhai's capital Gao declined steeply from 68,6k in 1585AD to 18,4k in 1660AD, 8,24k in 1800AD and 4,68k in 1898AD; Timbuktu similarly contracted from 58,4k in 1550AD and 46,2k in 1591AD to 11,4k when René Caillié visited in 1828AD and 8,64k by 1894AD, while Djenné fell from 32,4k in 1550AD to 8,14k in 1893AD [@Caillie1830TravelsThrough; @Dijk2000DroughtAnd].

## Mossi Kingdoms, Kong, Wassoulou and the Sokoto Caliphate

South of the Niger Bend across Burkina Faso, northern Ghana, northern Ivory Coast and western Niger, the Mossi kingdoms, Kong and Samori Ture's Wassoulou (418.083 km², 36 interior sites) sustained the highest end-epoch density in the entire study area at 4,92 persons/km² in 1890AD. Total population rose from 1,61M in 1500AD to 2,86M in 1700AD, eased during eighteenth-century droughts and Ashanti-Dagomba frontier conflicts to 2,01M in 1780AD, held steady around 2,06M in 1810AD and 1,85M in 1860AD, and closed at 2,06M in 1890AD. Compact agrarian capitals - Ouagadougou (14,8k in 1888AD), Bobo-Dioulasso (8,42k), Ouahigouya (8,24k), Yendi (8,42k), Tenkodogo (6,12k) and fortified Sikasso (16,8k in 1898AD) - mediated trade between savanna millet farmers and southern forest kola producers [@Azarya1980TradersAnd].

East of the Niger River, the Hausa states and the Sokoto Caliphate (1.010.947 km², 54 interior sites) contained the largest single share of Sahelian population throughout the four-century span. Numbers climbed from 3,39M in 1500AD to 7,93M in 1700AD, before intense eighteenth-century Kebbi-Zamfara-Gobir wars, Saharan droughts and heavy captive exports through Nupe and Oyo toward the Atlantic reduced regional totals to 4,75M in 1780AD and 4,63M in 1810AD [@Last1967SokotoCaliphate; @Lovejoy2012Transformations]. Following Usman dan Fodio's 1804AD-1808AD jihad and the destruction of Gobir's capital Alkalawa (24,8k in 1795AD), the Caliphate reorganised northern Nigeria around new ribat fortresses and plantation zones, lifting population from an 1860AD dip of 4,14M to 4,76M in 1890AD (4,71 persons/km²). Kano expanded from 30k in 1851AD to 58,4k in 1885AD as the Caliphate's premier textile and leather workshop, supported by slave-worked rural estates such as Dorayi [@Hamza2004DorayiKano; @Baikie1862NotesJourney], alongside Katsina (46,2k in 1780AD, recovering from 7,5k in 1851AD to 12,8k in 1890AD), Zaria (42k in 1826AD), Sokoto (34,2k in 1824AD), Bauchi (30k in 1866AD), Yola (20k in 1879AD) and Zinder (18,4k in 1892AD) [@Suleiman2007BirninZaria; @Smaldone1962WarfareThe; @Meek1934BlackByzantium].

## Kanem-Bornu, Wadai, Darfur and the Nilotic Sudan

Across the Lake Chad basin, Kanem-Bornu and Bagirmi (1.199.798 km², 33 interior sites) doubled from 1,37M in 1500AD to 2,78M in 1700AD under Sayfawa rule, eased to 2,15M in 1780AD and recovered steadily to 2,49M in 1890AD (2,08 persons/km²) [@Aouatef2026PoliticalStructures; @Magnavita2025NewLuminescence]. After Fulbe insurgents sacked Birnin Gazargamu (62,4k in 1700AD) in 1808AD, Muhammad al-Kanemi established Kukawa near Lake Chad, which grew from 24,8k in 1823AD to 60k in 1870AD before Rabih az-Zubayr's 1893AD invasion shifted Bornu's seat to Dikwa (34,2k in 1894AD), flanked by Bagirmi's Massenya (24,6k in 1852AD) and Logone-Birni (15k) [@Lyon1821NarrativeTravels; @Aouatef2026PoliticalStructures].

East of Lake Chad, Wadai, Tibesti and Dar al-Kuti (937.592 km², 14 interior sites) expanded from 388,1k in 1500AD to 670,9k in 1700AD and 737,9k in 1840AD before succession wars and Sanusi caravan shifts brought totals to 683,1k in 1890AD (0,73 persons/km²), as Wadai's capital moved from Wara (22,4k in 1840AD) to Abéché (28k in 1873AD) and Muhammad al-Sanusi built Ndélé (16,8k in 1898AD). Neighbouring Darfur and Kordofan (794.197 km², 15 interior sites) peaked earlier at 1,05M in 1700AD, then contracted across Turco-Egyptian annexations, Zubeir Pasha's 1874AD conquest and Mahdist military mobilisation to 706,6k in 1860AD and 731,9k in 1890AD (0,92 persons/km²), anchored by Al-Fāshir (14,8k in 1874AD) and caravan depot Kobbei (8,42k in 1803AD) [@Ofahey1980StateDarFur; @Totten2006GenocideDarfur].

Along the Nile valley and Ethiopian-Eritrean highlands, the Funj, Turco-Egyptian and Mahdist Nile sub-region (1.319.228 km², 84 interior sites) grew continuously from 2,23M in 1500AD to 2,96M in 1700AD and 3,74M in 1840AD, before Mahdist famine and border warfare trimmed 1890AD numbers to 3,51M (2,66 persons/km²) [@Crawford1951FungSennar; @Spaulding1985HeroicAge]. Urban hegemony shifted twice: Funj Sennar (28,6k in 1701AD) and Gondar (62k in 1700AD) yielded after 1821AD to Turco-Egyptian Khartoum (60k in 1847AD, 54,2k in 1884AD), El Obeid (28,5k in 1882AD), Kassala (15,2k) and Red Sea port Suakin (11,4k), before the Mahdist capture of Khartoum in 1885AD emptied the former capital (4,62k in 1898AD) and concentrated 148k residents across the river at Omdurman by 1895AD [@Crawford1951FungSennar; @Spaulding1985HeroicAge]. Southward across Bahr el Ghazal, the Azande kingdoms and Equatoria (957.733 km², 26 interior sites), population expanded from 1,37M in 1500AD to 2,13M in 1840AD before ivory-and-slave *zariba* raiding cut totals to 1,9M in 1860AD and 1,96M in 1890AD (2,04 persons/km²), centred on Jima (12,4k), Deim Zubeir (12,2k), Yambio (8,42k) and Kodok (5,42k) [@Lovejoy2012Transformations].

## Leading Urban Centres and Regional Hierarchy

Table \ref{tab:top-centres} lists the twelve largest individually assessed settlements in the Sahel and Sudan ledger. Nine reached their early modern peak in the nineteenth century - led by Omdurman (148k in 1895AD), Nioro du Sahel (95k in 1892AD), Khartoum (60k in 1847AD), Kukawa (60k in 1870AD), Kano (58,4k in 1885AD), Hamdallahi (42,6k in 1855AD) and Zaria (42k in 1826AD) - while Gao (68,6k in 1585AD), Birnin Gazargamu (62,4k in 1700AD), Gonder (62k in 1700AD), Niani (60k in 1550AD) and Timbuktu (58,4k in 1550AD) document the sixteenth- and seventeenth-century imperial urban order [@Caillie1830TravelsThrough; @Last1967SokotoCaliphate; @Baikie1862NotesJourney].

<figure class="crd-table-figure" id="tab:top-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Date</th><th class="crd-th">Obs</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Umm Durmān</strong></td><td class="crd-td">Sudan</td><td class="crd-td">1885AD-1898AD</td><td class="crd-td">148k</td><td class="crd-td">1895AD</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Nioro du Sahel</strong></td><td class="crd-td">Mali</td><td class="crd-td">1650AD-1898AD</td><td class="crd-td">95k</td><td class="crd-td">1892AD</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Gao</strong></td><td class="crd-td">Mali</td><td class="crd-td">1500AD-1898AD</td><td class="crd-td">68,6k</td><td class="crd-td">1585AD</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Birnin Gazargamu</strong></td><td class="crd-td">Nigeria</td><td class="crd-td">1500AD-1808AD</td><td class="crd-td">62,4k</td><td class="crd-td">1700AD</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Gonder</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">1650AD-1890AD</td><td class="crd-td">62k</td><td class="crd-td">1700AD</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm</strong></td><td class="crd-td">Sudan</td><td class="crd-td">1830AD-1898AD</td><td class="crd-td">60k</td><td class="crd-td">1847AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Kukawa</strong></td><td class="crd-td">Nigeria</td><td class="crd-td">1823AD-1892AD</td><td class="crd-td">60k</td><td class="crd-td">1870AD</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Niani</strong></td><td class="crd-td">Guinea</td><td class="crd-td">1520AD-1650AD</td><td class="crd-td">60k</td><td class="crd-td">1550AD</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Kano</strong></td><td class="crd-td">Nigeria</td><td class="crd-td">1600AD-1885AD</td><td class="crd-td">58,4k</td><td class="crd-td">1885AD</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Tombouctou</strong></td><td class="crd-td">Mali</td><td class="crd-td">1550AD-1894AD</td><td class="crd-td">58,4k</td><td class="crd-td">1550AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Katsina</strong></td><td class="crd-td">Nigeria</td><td class="crd-td">1650AD-1890AD</td><td class="crd-td">46,2k</td><td class="crd-td">1780AD</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Hamdallahi</strong></td><td class="crd-td">Mali</td><td class="crd-td">1825AD-1862AD</td><td class="crd-td">42,6k</td><td class="crd-td">1855AD</td><td class="crd-td">4</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Twelve largest individually assessed settlements in Early Modern Sahel and Sudan (1500AD to 1898AD).</figcaption>
</figure>

# Limitations

Three structural constraints bound these reconstructions. First, documentary density tilts sharply toward literate Islamic capitals, nineteenth-century European travel corridors and late coastal enclaves. Whereas Senegambia, Sokoto Hausaland and the Turco-Egyptian Nile yield dense multi-date series across 54 to 84 interior sites per sub-region, Darfur-Kordofan (15 sites), Wadai-Dar al-Kuti (14 sites) and the Niger Bend outside Gao and Timbuktu (20 sites) possess far sparser continuous town counts [@Ofahey1980StateDarFur; @Dijk2000DroughtAnd]. Single-date records represent 65 of the 398 settlements (16,3%), limiting precision between decennial raster checkpoints outside major capitals.

Second, nineteenth-century wartime capitals and refugee congregations create volatile urban spikes that require separation from steady-state populations. Omdurman's 148k figure in 1895AD reflects Mahdist state centralisation of provincial troops and tribes from across Sudan, just as Nioro du Sahel's 95k peak in 1892AD captures temporary congregation following French conquest of Ségou before returning to 7.479 by 1898AD [@Houdoy1881SoudanFrancais; @Smaldone1962WarfareThe]. Conversely, eyewitness counts at Timbuktu (11,4k to 13,2k) or Kano (30k to 58,4k) exclude extensive extramural farming suburbs and *gandaye* slave villages [@Hamza2004DorayiKano; @Caillie1830TravelsThrough].

Third, sub-Saharan demographic swings during the eighteenth-century Sahelian droughts and nineteenth-century slave-raiding wars across Darfur, Wadai and Bahr el Ghazal carry estimated margins of roughly 15% to 25% around 1700AD and 1780AD benchmarks where pre-colonial fiscal censuses do not survive [@Chastanet1992SurvivalStrategies; @Lovejoy2012Transformations; @Totten2006GenocideDarfur]. Mass-conserving disaggregation guarantees consistency with twentieth-century administrative polygons but cannot recover unrecorded short-term mortality spikes between decennial slices.

# Conclusion

Between 1500AD and 1898AD, the Sahel and Sudanic belt moved from sixteenth-century Songhai, Sayfawa Bornu and Funj Sennar expansion to an early modern peak of 23,69M inhabitants in 1700AD, suffered an eighteenth-century contraction to 18,15M amid severe droughts and warfare, and stabilised around 19,69M by 1890AD under Sokoto, Bornu, Wadai, Mossi, Toucouleur and Mahdist state systems. Across 9.350.985 km², urban gravity shifted decisively away from declining Niger Bend caravan ports such as Gao and Timbuktu toward Hausa walled manufacturing cities, nineteenth-century Islamic capitals at Sokoto, Hamdallahi, Kukawa and Abéché, and the Nile metropolises of Khartoum and Omdurman. Grounded in 398 individually assessed settlements, Matérn kriging across regional archaeological registers and mass-conserving spatial polygons, NICETHI supplies a continuous quantitative foundation for twentieth-century colonial and post-colonial Sahelian demography.

# Appendix

## Sub-Regional Population Density and Territorial Shares

Table \ref{tab:density-appendix} reports mean population density in persons per km² across all ten sub-regions at the six benchmark years from 1500AD to 1890AD, documenting the tenfold contrast between the Mossi-Kong and Sokoto agricultural belts (4,71 to 4,92 persons/km² in 1890AD) and the Saharan-Sahelian margin of Timbuktu, Wadai, Mauritania and Darfur (0,48 to 0,92 persons/km²). Table \ref{tab:shares-appendix} tracks each sub-region's share of total population across the same benchmarks.

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1810AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Trarza, Brakna and Adrar Emirates</strong></td><td class="crd-td">0,44</td><td class="crd-td">0,79</td><td class="crd-td">0,65</td><td class="crd-td">0,68</td><td class="crd-td">0,74</td><td class="crd-td">0,92</td></tr>
<tr><td class="crd-td"><strong>Futa Toro, Segou Bamana and Toucouleur</strong></td><td class="crd-td">1,67</td><td class="crd-td">3,08</td><td class="crd-td">2,58</td><td class="crd-td">2,75</td><td class="crd-td">2,4</td><td class="crd-td">2,76</td></tr>
<tr><td class="crd-td"><strong>Pashalik of Timbuktu, Massina and Niger Bend</strong></td><td class="crd-td">0,29</td><td class="crd-td">0,5</td><td class="crd-td">0,44</td><td class="crd-td">0,46</td><td class="crd-td">0,44</td><td class="crd-td">0,48</td></tr>
<tr><td class="crd-td"><strong>Mossi Kingdoms, Kong and Wassoulou</strong></td><td class="crd-td">3,84</td><td class="crd-td">6,84</td><td class="crd-td">4,8</td><td class="crd-td">4,93</td><td class="crd-td">4,41</td><td class="crd-td">4,92</td></tr>
<tr><td class="crd-td"><strong>Sokoto Caliphate and Adamawa Emirates</strong></td><td class="crd-td">3,36</td><td class="crd-td">7,84</td><td class="crd-td">4,7</td><td class="crd-td">4,58</td><td class="crd-td">4,1</td><td class="crd-td">4,71</td></tr>
<tr><td class="crd-td"><strong>Kanem-Bornu Empire and Bagirmi Sultanate</strong></td><td class="crd-td">1,14</td><td class="crd-td">2,32</td><td class="crd-td">1,79</td><td class="crd-td">1,9</td><td class="crd-td">1,88</td><td class="crd-td">2,08</td></tr>
<tr><td class="crd-td"><strong>Sultanate of Wadai, Tibesti and Dar al-Kuti</strong></td><td class="crd-td">0,41</td><td class="crd-td">0,72</td><td class="crd-td">0,68</td><td class="crd-td">0,74</td><td class="crd-td">0,71</td><td class="crd-td">0,73</td></tr>
<tr><td class="crd-td"><strong>Darfur Sultanate and Kordofan</strong></td><td class="crd-td">1,11</td><td class="crd-td">1,33</td><td class="crd-td">0,97</td><td class="crd-td">1</td><td class="crd-td">0,89</td><td class="crd-td">0,92</td></tr>
<tr><td class="crd-td"><strong>Funj, Turco-Egyptian and Mahdist Nile</strong></td><td class="crd-td">1,69</td><td class="crd-td">2,24</td><td class="crd-td">2,3</td><td class="crd-td">2,58</td><td class="crd-td">2,61</td><td class="crd-td">2,66</td></tr>
<tr><td class="crd-td"><strong>Bahr el Ghazal, Azande and Equatoria</strong></td><td class="crd-td">1,43</td><td class="crd-td">1,87</td><td class="crd-td">1,84</td><td class="crd-td">2,05</td><td class="crd-td">1,99</td><td class="crd-td">2,04</td></tr>
<tr><td class="crd-td"><strong>Mean Study Area</strong></td><td class="crd-td">1,42</td><td class="crd-td">2,53</td><td class="crd-td">1,94</td><td class="crd-td">2,04</td><td class="crd-td">1,92</td><td class="crd-td">2,11</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Mean population density (persons per km²) across the ten sub-regions from 1500AD to 1890AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:shares-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1500AD (%)</th><th class="crd-th">1700AD (%)</th><th class="crd-th">1780AD (%)</th><th class="crd-th">1810AD (%)</th><th class="crd-th">1860AD (%)</th><th class="crd-th">1890AD (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Trarza, Brakna and Adrar Emirates</strong></td><td class="crd-td">3,1</td><td class="crd-td">3,1</td><td class="crd-td">3,3</td><td class="crd-td">3,4</td><td class="crd-td">3,9</td><td class="crd-td">4,4</td></tr>
<tr><td class="crd-td"><strong>Futa Toro, Segou Bamana and Toucouleur</strong></td><td class="crd-td">9,8</td><td class="crd-td">10,1</td><td class="crd-td">11</td><td class="crd-td">11,2</td><td class="crd-td">10,4</td><td class="crd-td">10,9</td></tr>
<tr><td class="crd-td"><strong>Pashalik of Timbuktu, Massina and Niger Bend</strong></td><td class="crd-td">2,2</td><td class="crd-td">2,1</td><td class="crd-td">2,4</td><td class="crd-td">2,4</td><td class="crd-td">2,4</td><td class="crd-td">2,5</td></tr>
<tr><td class="crd-td"><strong>Mossi Kingdoms, Kong and Wassoulou</strong></td><td class="crd-td">12,1</td><td class="crd-td">12,1</td><td class="crd-td">11,1</td><td class="crd-td">10,8</td><td class="crd-td">10,3</td><td class="crd-td">10,5</td></tr>
<tr><td class="crd-td"><strong>Sokoto Caliphate and Adamawa Emirates</strong></td><td class="crd-td">25,6</td><td class="crd-td">33,5</td><td class="crd-td">26,2</td><td class="crd-td">24,3</td><td class="crd-td">23,1</td><td class="crd-td">24,2</td></tr>
<tr><td class="crd-td"><strong>Kanem-Bornu Empire and Bagirmi Sultanate</strong></td><td class="crd-td">10,3</td><td class="crd-td">11,8</td><td class="crd-td">11,8</td><td class="crd-td">12</td><td class="crd-td">12,6</td><td class="crd-td">12,7</td></tr>
<tr><td class="crd-td"><strong>Sultanate of Wadai, Tibesti and Dar al-Kuti</strong></td><td class="crd-td">2,9</td><td class="crd-td">2,8</td><td class="crd-td">3,5</td><td class="crd-td">3,6</td><td class="crd-td">3,7</td><td class="crd-td">3,5</td></tr>
<tr><td class="crd-td"><strong>Darfur Sultanate and Kordofan</strong></td><td class="crd-td">6,6</td><td class="crd-td">4,5</td><td class="crd-td">4,2</td><td class="crd-td">4,2</td><td class="crd-td">3,9</td><td class="crd-td">3,7</td></tr>
<tr><td class="crd-td"><strong>Funj, Turco-Egyptian and Mahdist Nile</strong></td><td class="crd-td">16,9</td><td class="crd-td">12,5</td><td class="crd-td">16,7</td><td class="crd-td">17,9</td><td class="crd-td">19,2</td><td class="crd-td">17,8</td></tr>
<tr><td class="crd-td"><strong>Bahr el Ghazal, Azande and Equatoria</strong></td><td class="crd-td">10,4</td><td class="crd-td">7,5</td><td class="crd-td">9,7</td><td class="crd-td">10,3</td><td class="crd-td">10,6</td><td class="crd-td">9,9</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Percentage share of total regional population across the ten sub-regions from 1500AD to 1890AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Toponyms follow standard scholarly Romanisation across Arabic, Fulfulde, Hausa, Mande and Amharic orthographies (such as Umm Durmān, Al-Kharṭūm, Al-Fāshir, Sannār and Ségou), while preserving French colonial spellings for the *Quatre Communes*. Of the 398 individually assessed settlements in the companion gazetteer, 384 lie within two 5-arcminute pixels of the interior sub-regional mask (Table \ref{tab:subregions}) and 14 southern-frontier sites (Adis Abeba, Anderacha, Awasa, Banyo, Beyla, Bonga, Dalbo, Dodola, Freetown, Freetown (2), Macenta, Magdala, Pankshin and Yendi) lie 3 to 5 pixels along the southern Ethiopian, Guinean, Sierra Leonean, Nigerian, Ghanaian and Cameroonian border and are assigned to their adjacent sub-regions in the gazetteer.
