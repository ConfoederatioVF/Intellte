---
title: "Lower Mississippi Hydrological Unit (HU 08)"
subtitle: "CENTAUR-II: Poverty Point, Plaquemine and Late Mississippian Towns, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: lower_mississippi_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_lower_mississippi_spatial.png"
hero_caption: "Sub-regional areal masks and 67 catalogued settlements across the Lower Mississippi Hydrological Unit (249,99k km²), from the St. Francis Basin to the Mississippi Birdfoot Delta."
hero_label: "fig:hero-lower-mississippi"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the Holocene demographic trajectory of the Lower Mississippi Hydrological Unit (USGS HU 08) across 249.987 km² (3.563 five-arcminute cells) from 10000BC to 1600AD. Linking radiocarbon summed probability distributions (N = 828, median peak 1177AD) [@kelly2025] with Middle-Late Archaic earthwork surveys [@saunders1997; @gibson2000], Coles Creek, Plaquemine and Mississippian town excavations [@morse1983; @williams1983; @brain1989; @neitzel1965] and sixteenth-century Spanish expedition records [@hudson1997], HU 08 is divided into three sub-regions encompassing 67 catalogued settlements out of 68 ledger candidates.

Aggregate basin numbers climb from 1.400 (bounds 1.288-1.512) in 10000BC to 104,5k by 2000BC and 188,5k (173,4k-203,6k) at 0AD, fuelled by backswamp fishing, natural-levee gardening and monumental earthen plaza construction. Mississippian and Plaquemine intensification lifts the valley to a Holocene maximum of 326k (299,9k-352,1k; 1,3 persons/km²) in 1200AD.

Vacant Quarter contraction along the northern delta fringe lowers totals by 17,8% to 268k in 1400AD before late Mississippian and Natchez aggregation around Parkin, Bradley, Nodena, Lake George and Emerald Mound restores numbers to 276k (253,9k-298,1k) in 1500AD [@morse1983; @cobb2002]. Following Hernando de Soto's 1541-1543AD campaign and introduced Old World diseases, basin population contracts 61,6% over the sixteenth century to 180k in 1550AD and 106k (97,5k-114,5k) by 1600AD [@hudson1997; @jones2014].

# Background

The Lower Mississippi alluvial valley runs nearly a thousand kilometres south from the Ohio confluence across the St. Francis, Yazoo, Tensas-Boeuf, Ouachita and Atchafalaya floodplains to the Mississippi Birdfoot Delta. Bounded on the east by loess bluffs and on the west by Macon Ridge, Crowley's Ridge and the Ouachita terraces, this immense meander belt paired rich natural levees and oxbow lakes with the continent's densest flyway waterfowl corridors.

Unlike the broad upland Piedmont of the Southeast or the semi-arid grasslands of the Southern Plains, settlement in HU 08 clung tightly to elevated natural levees, braided-stream terraces and bluff edges above seasonal floodwaters. Those linear strips of well-drained silt loam yielded extraordinary aquatic and wild plant harvests, enabling communities along the Ouachita and Bayou Macon ridges to raise monumental earthen mound complexes at Watson Brake around 3400BC [@saunders1997] and Poverty Point around 1500BC [@gibson2000] two millennia before maize became a staple crop.

Across 828 cleaned radiocarbon dates in HU 08, Kelly et al. [@kelly2025] identify a median summed probability peak at 1177AD, matching the rise of major twelfth-century Plaquemine and Mississippian mound centres at Winterville, Lake George, Towosahgy and Lilbourn [@brain1989; @williams1983]. After 1300AD, however, regional trajectories split: northern borderlands around Cairo and the confluence margin suffered partial Vacant Quarter abandonment [@cobb2002], whereas palisaded chiefdoms in the St. Francis and Memphis corridors (Casqui at Parkin and Pacaha at Nodena and Bradley) alongside the Natchez bluffs maintained dense fortified towns into the 1540s [@morse1983; @neitzel1965; @hudson1997].

Alluvial geomorphology poses a persistent challenge across this valley. Meander migration and thick Holocene overbank siltation continually buried low-lying Early and Middle Archaic shell middens, much as tropical river alluviation conceals early Holocene riverside mounds in lowland South America [@lombardo2013early]. Separating genuine Pleistocene-Holocene population growth from geomorphic burial bias requires explicit spatial priors that balance excavated bluff-top earthworks against under-sampled backswamp basins [@saunders1997; @milner2010].

<figure class="crd-table-figure" id="tab:lm-subregion-profiles">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-region</th><th class="crd-th">Area</th><th class="crd-th">Cells</th><th class="crd-th">Sites</th><th class="crd-th">1200AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>St. Francis, Reelfoot &amp; Lower Arkansas</strong></td><td class="crd-td">110.207 km²</td><td class="crd-td">1.572</td><td class="crd-td">29</td><td class="crd-td">129k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Yazoo, Tensas-Boeuf &amp; Ouachita</strong></td><td class="crd-td">87.379 km²</td><td class="crd-td">1.208</td><td class="crd-td">29</td><td class="crd-td">118,5k</td><td class="crd-td">36k</td></tr>
<tr><td class="crd-td"><strong>Natchez Bluffs, Atchafalaya &amp; Delta</strong></td><td class="crd-td">52.401 km²</td><td class="crd-td">783</td><td class="crd-td">9</td><td class="crd-td">78,5k</td><td class="crd-td">28k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional divisions of Lower Mississippi (HU 08) showing areal coverage, five-arcminute cells, catalogued settlements and 1200AD-1600AD population benchmarks.</figcaption>
</figure>

# Methodology

## Radiocarbon Kriging and Sub-Regional Partitioning

Rural spatial suitability across HU 08 derives from the continental North American radiocarbon domain `sites_northern_america`, which combines global radiocarbon syntheses (`p3k14c` [@bird2022p3k14c] and `c14bazAAR`) with state site inventories, CRM registers and monument databases [@kelly2022; @crema2021]. Following spatial and chronological deduplication across 200-year bins, the continental domain encompasses 93.358 unique site-period observations across 4.457 domestic Voronoi catchments (2.678 active inhabited catchments, median radius 27,36 km), achieving a 14,12x density multiplier over the baseline global compilation.

Across ten Holocene horizons from 10000BC to 1600AD, 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) residual kriging links Freeman-Tukey transformed catchment counts to biophysical covariates capturing fluvial distance decay, coastal proximity and terrain slope. Along the Gulf of Mexico perimeter, 171 cross-frontier buffer catchments condition neighbouring Caribbean and northern Mexican shores so deltaic margins remain free of edge bias.

Within HU 08, 3.563 five-arcminute land cells (249.987 km²) divide into three contiguous sub-regional masks (Table \ref{tab:lm-subregion-profiles}):

1. **St. Francis Basin, Reelfoot and Lower White-Arkansas Delta** (110.207 km², 1.572 cells, 29 catalogued sites): spans the Cairo-Kentucky confluence, Reelfoot lowlands, St. Francis sunk lands, Memphis bluffs and Lower Arkansas-White alluvial plains, anchoring Sloan, Pinson Mounds, Wickliffe Mounds, Towosahgy, Lilbourn, Carson Mounds, Parkin, Bradley, Nodena and Menard-Hodges.
2. **Yazoo Basin, Tensas-Boeuf and Ouachita Ridges** (87.379 km², 1.208 cells, 29 catalogued sites): covers the Yazoo-Sunflower meander belts, Macon Ridge, Tensas-Boeuf basins, Ouachita terraces and Natchez loess bluffs, enclosing Watson Brake, Poverty Point, Jaketown, Marksville, Troyville, Greenhouse, Feltus, Winterville, Lake George, Emerald Mound and Fatherland.
3. **Natchez Bluffs Southern Margin, Atchafalaya and Birdfoot Delta** (52.401 km², 783 cells, 9 catalogued sites): takes in the Baton Rouge-Lower Mississippi deltaic plain, Atchafalaya backswamps and Bayou Teche-coastal marsh ridges, containing Avery Island, Monte Sano, LSU Campus Mounds, Tchefuncte, Morgan and Medora-Houma.

## Floodplain Calibration and Uncertainty Bounds

Benchmark trajectories at 23 intervals from 10000BC to 1600AD weight natural-levee arable capacity (3 to 5 persons/km² along prime Mississippian and Plaquemine meander ridges), Archaic earthwork labour catchments and sixteenth-century chronicler counts against extensive seasonally flooded backswamps [@milner2010; @gibson2000; @hudson1997]. Averaged over entire watershed polygons including cypress swamps and bayous, regional densities reach 1,17 to 1,5 persons/km² at the 1200AD Holocene peak.

Point populations for all 67 catalogued settlements are subtracted from their enclosing sub-regional totals prior to distributing residual rural counts across the five-arcminute kriging surface, smoothed across two 5-pixel passes. Symmetric ±8% uncertainty intervals reflect Holocene levee burial attrition, uneven mortuary and midden preservation and the steepness of post-1541AD epidemic collapse [@jones2014; @ubelaker2006].

Comparative quantitative frameworks from outside North America - addressing summed probability response to climatic variability [@capuzzo2018highly], riverine demic diffusion [@souza2020archaeological], wetland cemetery nucleation [@sereno2008lakeside], coastal-estuarine historical ecology [@fossile2023bridging; @buss2023archaeological] and terminal Pleistocene chronological baselines [@politis2016arrival] - help bound taphonomic and diffusion assumptions while preserving Lower Mississippi archaeological records.

# Testing and Validation

All spatial, variogram, gazetteer and arithmetic audits pass pre-publication bounds at GMT+0:

1. **Kriging Sharpness and Fit**: Across all ten Holocene horizons in `sites_northern_america`, non-stationary Matérn variograms record dimensionless scale $\tau_1 = 1,41$ (exact 1,4144), raw nugget 0 (exact 0), regularised nugget-to-sill ratio 0,04 and weighted least-squares residual $R^2 = 0,999$ (ranging from 0,9991 to 0,9993) (Table \ref{tab:lm-kriging-horizons}).
2. **Gazetteer Exhaustiveness**: Out of 68 candidates evaluated in the regional ledger, 67 bounded settlements enter the active point gazetteer (`29` in St. Francis-Memphis, `29` in Yazoo-Ouachita and `9` in Natchez-Atchafalaya-Delta) while `1` duplicate coordinate entry within 2 km of Emerald Mound is excluded, leaving `0` unaccounted entries.
3. **Arithmetic Consistency**: Sub-regional populations sum identically to the basin headline series across all 23 benchmark dates from 10000BC (1.400) to 1600AD (106k) in Table \ref{tab:lm-benchmarks}.

<figure class="crd-table-figure" id="tab:lm-kriging-horizons">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Tau 1</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Ratio</th><th class="crd-th">R²</th><th class="crd-th">Range (km)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian &amp; Early Archaic (13000-6000BC)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">38,7</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic (6000-3000BC)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">38,7</td></tr>
<tr><td class="crd-td"><strong>Late Archaic (3000-1000BC)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">38,7</td></tr>
<tr><td class="crd-td"><strong>Early Woodland &amp; Formative (1000-200BC)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">38,7</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland Hopewell (200BC-400AD)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">38,7</td></tr>
<tr><td class="crd-td"><strong>Late Woodland &amp; Dorset (400-800AD)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">38,7</td></tr>
<tr><td class="crd-td"><strong>Early Mississippian &amp; Pueblo II (800-1100AD)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">38,7</td></tr>
<tr><td class="crd-td"><strong>Middle Mississippian &amp; Pueblo III (1100-1300AD)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">38,7</td></tr>
<tr><td class="crd-td"><strong>Late Pre-Contact &amp; Oneota (1300-1500AD)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">38,7</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact (1500-1650AD)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">38,7</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Non-stationary Matérn variogram parameters across the ten Holocene horizons of the North American radiocarbon domain.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:lm-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Period</th><th class="crd-th">St. Francis</th><th class="crd-th">Yazoo-Ouachita</th><th class="crd-th">Delta</th><th class="crd-th">Total</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">600</td><td class="crd-td">500</td><td class="crd-td">300</td><td class="crd-td">1,4k</td><td class="crd-td">1,3k-1,5k</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">1,3k</td><td class="crd-td">1,1k</td><td class="crd-td">650</td><td class="crd-td">3k</td><td class="crd-td">2,8k-3,3k</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">2,6k</td><td class="crd-td">2,2k</td><td class="crd-td">1,3k</td><td class="crd-td">6,1k</td><td class="crd-td">5,6k-6,6k</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">4,9k</td><td class="crd-td">4,2k</td><td class="crd-td">2,5k</td><td class="crd-td">11,6k</td><td class="crd-td">10,7k-12,5k</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">8,8k</td><td class="crd-td">7,8k</td><td class="crd-td">4,6k</td><td class="crd-td">21,2k</td><td class="crd-td">19,5k-22,9k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">14,5k</td><td class="crd-td">13,5k</td><td class="crd-td">7,8k</td><td class="crd-td">35,8k</td><td class="crd-td">32,9k-38,7k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">22,5k</td><td class="crd-td">21,5k</td><td class="crd-td">12,2k</td><td class="crd-td">56,2k</td><td class="crd-td">51,7k-60,7k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">32,5k</td><td class="crd-td">29k</td><td class="crd-td">18k</td><td class="crd-td">79,5k</td><td class="crd-td">73,1k-85,9k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">45k</td><td class="crd-td">34k</td><td class="crd-td">25,5k</td><td class="crd-td">104,5k</td><td class="crd-td">96,1k-112,9k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">61k</td><td class="crd-td">48k</td><td class="crd-td">34,5k</td><td class="crd-td">143,5k</td><td class="crd-td">132k-155k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">79k</td><td class="crd-td">64k</td><td class="crd-td">45,5k</td><td class="crd-td">188,5k</td><td class="crd-td">173,4k-203,6k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">91k</td><td class="crd-td">76k</td><td class="crd-td">52,5k</td><td class="crd-td">219,5k</td><td class="crd-td">201,9k-237,1k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">102k</td><td class="crd-td">86k</td><td class="crd-td">59,5k</td><td class="crd-td">247,5k</td><td class="crd-td">227,7k-267,3k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">112k</td><td class="crd-td">97k</td><td class="crd-td">66k</td><td class="crd-td">275k</td><td class="crd-td">253k-297k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">120k</td><td class="crd-td">107k</td><td class="crd-td">71,5k</td><td class="crd-td">298,5k</td><td class="crd-td">274,6k-322,4k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">125k</td><td class="crd-td">114k</td><td class="crd-td">75,5k</td><td class="crd-td">314,5k</td><td class="crd-td">289,3k-339,7k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">128k</td><td class="crd-td">117k</td><td class="crd-td">77,5k</td><td class="crd-td">322,5k</td><td class="crd-td">296,7k-348,3k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">129k</td><td class="crd-td">118,5k</td><td class="crd-td">78,5k</td><td class="crd-td">326k</td><td class="crd-td">299,9k-352,1k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">118k</td><td class="crd-td">106k</td><td class="crd-td">72k</td><td class="crd-td">296k</td><td class="crd-td">272,3k-319,7k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">108k</td><td class="crd-td">94k</td><td class="crd-td">66k</td><td class="crd-td">268k</td><td class="crd-td">246,6k-289,4k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">112k</td><td class="crd-td">96k</td><td class="crd-td">68k</td><td class="crd-td">276k</td><td class="crd-td">253,9k-298,1k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">72k</td><td class="crd-td">62k</td><td class="crd-td">46k</td><td class="crd-td">180k</td><td class="crd-td">165,6k-194,4k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">42k</td><td class="crd-td">36k</td><td class="crd-td">28k</td><td class="crd-td">106k</td><td class="crd-td">97,5k-114,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Benchmark population estimates across all 23 horizons for Lower Mississippi (HU 08) and its three sub-regions, 10000BC to 1600AD.</figcaption>
</figure>

# Results

## Palaeoindian Terraces to Archaic Earthworks (10000BC to 1000BC)

During the terminal Pleistocene and Younger Dryas transition around 10000BC [@holliday2016blind], braided meltwater channels swept down the Lower Mississippi trough, confining human bands to elevated salt domes, Crowley's Ridge and Pleistocene terrace flanks. Basin population started near 1.400 (bounds 1.288-1.512) in 10000BC and rose steadily through 3.050 in 9000BC to 6,1k in 8000BC, represented by Early Archaic cemetery and salt-dome sites at Sloan in northeast Arkansas (40-55 at 8500-8200BC) and Avery Island on the Louisiana coastal salt ridge (35 at 8500BC).

By 6000BC, modern meandering river channels replaced braided glacial outwash across the central trough, creating productive oxbow lakes, cypress backswamps and seasonal fish traps that raised valley population to 21,2k. Growth accelerated through the Middle Archaic optimum, climbing from 35,8k in 5000BC to 56,2k in 4000BC and 79,5k in 3000BC.

Along the Ouachita, Bayou Macon and Baton Rouge bluffs, Middle Archaic hunter-fishers erected the earliest dated earthen mound complexes in North America: Watson Brake (480 at 3400BC) [@saunders1997], Frenchman's Bend (240 at 3500BC), Hedgepeth (210 at 3200BC), Monte Sano (260 at 3300BC) and LSU Campus Mounds (280 at 3200BC). Rather than representing sedentary farming towns, these oval mound-and-ridge rings functioned as seasonal aggregation monuments sustained by rich wetland and riverine harvests.

By the Late Archaic pinnacle between 2000BC and 1000BC, regional population climbed from 104,5k to 143,5k as Poverty Point (1,6k at 1500BC) on Macon Ridge drew seasonal gatherings and long-distance stone exchange across hundreds of kilometres [@gibson2000]. Across the river in the Yazoo Basin, Jaketown (520 at 1000BC) anchored a dense concentration of microlithic lapidary workshops along braided-stream levees. At 1000BC, the St. Francis-Memphis division held 61k (42,5%), Yazoo-Ouachita held 48k (33,4%) and the southern delta margin held 34,5k (24%).

## Woodland Plazas to Twelfth-Century Florescence (1000BC to 1200AD)

Across the Early and Middle Woodland transition from 1000BC to 400AD, steady adoption of native seed cultivation and burial-mound ceremonialism lifted HU 08 from 143,5k to 188,5k at 0AD and 247,5k by 400AD. Coastal marsh fishers at Tchefuncte (180 at 100BC) and early Hopewell-linked civic earthworks at Marksville (1,1k at 200AD) and Crooks (380 at 200AD) anchored the southern meanders, while Pinson Mounds (850 at 200AD) and Ingomar Mounds (390 at 350AD) led the northern interior terraces.

Late Woodland Coles Creek and Troyville communities accelerated plaza urbanisation between 400AD and 950AD, pushing basin numbers to 275k in 600AD (1,1 persons/km²) and 298,5k in 800AD. Large flat-topped mound precincts appeared at Troyville (1,2k at 650AD) on the Black-Ouachita confluence, Greenhouse (720 at 600AD) on the lower Red River, Manny (420 at 450AD) in the southern Yazoo and Feltus (720 at 950AD) along the Natchez loess bluffs, while early coastal settlements expanded along Lake Pontchartrain and the Atchafalaya ridges.

Emergent Mississippian and early Plaquemine intensification lifted totals from 314,5k in 1000AD to 322,5k in 1100AD and the Holocene peak of 326k (bounds 299,9k-352,1k) at 1200AD, matching Kelly et al. [@kelly2025] 1177AD radiocarbon summit (Figure \ref{fig:lm-trajectory}). At 1200AD, St. Francis-Memphis held 129k (39,6%; 1,17 persons/km²), Yazoo-Ouachita held 118,5k (36,3%; 1,36 persons/km²) and Natchez-Atchafalaya-Delta held 78,5k (24,1%; 1,5 persons/km²).

Winterville (2,4k at 1200AD) anchored the upper Yazoo meander belt alongside Lake George (1,45k in 1200AD) and Rolling Fork Mounds (480) [@brain1989; @williams1983], while Lilbourn (950), Wickliffe Mounds (880), Twin Mounds (620) and Obion Mounds (540) lined the northern Mississippi-Cairo gateway. Along the western margins, Hays Mound (440) and Paw-Paw Mounds (280) marked emergent Caddoan-Lower Mississippi frontier towns on the Ouachita terraces.

<figure class="crd-figure-block" id="fig:lm-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-lower-mississippi/fig2_lower_mississippi_trajectory.png" alt="fig:lm-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and sub-regional population trajectories for Lower Mississippi (HU 08) from 10000BC to 1600AD with uncertainty interval.</figcaption>
</figure>

## Vacant Quarter, Late Nucleation and Post-Soto Collapse (1200AD to 1600AD)

Between 1200AD and 1400AD, HU 08 declined 17,8% from 326k to 268k (bounds 246,6k-289,4k) as fourteenth-century cooling and riverine instability reshaped northern settlement. The northern Cairo-Kentucky-Missouri bootheel corridor experienced Vacant Quarter contraction [@cobb2002], reducing Wickliffe Mounds, Towosahgy (980 at 1300AD) and Lilbourn while Winterville faded rapidly after 1300AD [@brain1989].

Population shifted southward into larger fortified polities and bluff-top capitals. Along the Yazoo and Natchez corridors, Lake George swelled to 2,2k at 1400AD [@williams1983], Anna reached 1,25k at 1350AD and Emerald Mound rose to 2,4k at 1400AD, while Chucalissa (1,35k at 1400AD) and Carson Mounds (1,8k at 1350AD) anchored the Memphis bluffs.

During the fifteenth century, intense palisaded town aggregation restored basin population by 3% to 276k (bounds 253,9k-298,1k) in 1500AD (Figure \ref{fig:lm-shares}). Along the St. Francis and Mississippi levees, Parkin (2,8k at 1500AD), Bradley (2,2k at 1525AD), Nodena (2,2k at 1500AD), Upper Nodena (1,65k), Parchman Place (1,35k), Rose Mound (1,1k), Walls (1,1k), Barton Ranch (920) and Chickasawba (780) formed tightly spaced agricultural provinces [@morse1983]. Further south, Fatherland (Grand Village of the Natchez, 1,8k at 1500AD) superseded Emerald Mound as the principal Natchez polity alongside Mazique (760) and deltaic Medora-Houma (920) [@neitzel1965].

<figure class="crd-figure-block" id="fig:lm-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-lower-mississippi/fig3_lower_mississippi_shares.png" alt="fig:lm-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic shares across Lower Mississippi (HU 08) from 10000BC to 1600AD.</figcaption>
</figure>

Hernando de Soto's 1541-1543AD crossing of the Mississippi into the provinces of Quizquiz, Aquixo, Casqui (Parkin) and Pacaha (Nodena-Bradley), followed by Moscoso's river descent to the Gulf, initiated sharp demographic collapse [@hudson1997; @morse1983; @jones2014]. Regional totals plunged 34,8% within a single generation to 180k in 1550AD and fell 61,6% relative to 1500AD by 1600AD (106k; bounds 97,5k-114,5k), leaving the valley 67,5% below its 1200AD Holocene peak.

Both northern St. Francis-Memphis (112k down to 42k) and central Yazoo-Ouachita (96k down to 36k) lost 62,5% of their 1500AD population as nucleated St. Francis villages fractured and retreated. The southern delta corridor dipped slightly less at 58,8% (68k to 28k), leaving Menard-Hodges (1,2k at 1600AD), Keno Place (480 at 1550AD) and Fatherland (1,4k at 1600AD) as anchors for seventeenth-century Quapaw, Tunica and Natchez survivors [@milner2010; @ubelaker2006].

## Sub-Regional Balances and Leading Urban Centres

Comparing the three sub-regions reveals an enduring demographic hierarchy across eleven millennia (Table \ref{tab:lm-subregions}, Table \ref{tab:lm-subregion-densities} and Table \ref{tab:lm-leading-centres}). St. Francis-Memphis consistently held the largest aggregate population (42,9% at 10000BC, 39,6% at 1200AD, 40,6% at 1500AD and 39,6% at 1600AD) across 110.207 km², driven by late precontact palisaded town clustering in northeast Arkansas and northwest Mississippi [@morse1983].

In the north, late Mississippian towns sat within a single day's walk of each other along abandoned Mississippi meander loops and Little River levees, enabling Casqui and Pacaha chiefs to muster several thousand warriors and agricultural labourers from compact alluvial strips. Once European pathogens struck these tightly packed palisaded enclaves, crowd mortality and downstream dispersal collapsed urban centres rapidly after 1543AD, shifting surviving Quapaw villages south toward Menard-Hodges near the Arkansas mouth [@hudson1997; @morse1983].

Yazoo-Ouachita (87.379 km²) carried 35,7% to 36,3% of basin population from 10000BC to 1200AD, sustaining higher per-square-kilometre densities than St. Francis and fostering both the valley's earliest Archaic mounds (Watson Brake, Poverty Point) and the great Plaquemine centres at Winterville, Lake George and Emerald Mound. Across the Yazoo Sunflower meanders, hierarchical chiefdoms maintained ceremonial plaza networks for centuries before yielding to Natchez bluff consolidation at Fatherland [@brain1989; @williams1983; @neitzel1965].

The southern Natchez-Atchafalaya-Delta division (52.401 km²), although holding only nine catalogued settlements due to active deltaic subsidence and swamp margins, nonetheless achieved the highest overall rural-plus-urban density (1,5 persons/km² at 1200AD). Protected partially by marshland logistics and dispersed Bayou Teche and Atchafalaya ridges, it proved modestly more resilient after 1541AD, rising in relative basin share from 24,6% in 1500AD to 26,4% in 1600AD around Medora-Houma and coastal villages.

<figure class="crd-table-figure" id="tab:lm-subregion-densities">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Period</th><th class="crd-th">St. Francis</th><th class="crd-th">Yazoo-Ouachita</th><th class="crd-th">Delta</th><th class="crd-th">HU 08 Mean</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">0,01</td><td class="crd-td">0,01</td><td class="crd-td">0,01</td><td class="crd-td">0,01</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">0,13</td><td class="crd-td">0,15</td><td class="crd-td">0,15</td><td class="crd-td">0,14</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">0,41</td><td class="crd-td">0,39</td><td class="crd-td">0,49</td><td class="crd-td">0,42</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">0,72</td><td class="crd-td">0,73</td><td class="crd-td">0,87</td><td class="crd-td">0,75</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">1,02</td><td class="crd-td">1,11</td><td class="crd-td">1,26</td><td class="crd-td">1,1</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">1,17</td><td class="crd-td">1,36</td><td class="crd-td">1,5</td><td class="crd-td">1,3</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">0,98</td><td class="crd-td">1,08</td><td class="crd-td">1,26</td><td class="crd-td">1,07</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">1,02</td><td class="crd-td">1,1</td><td class="crd-td">1,3</td><td class="crd-td">1,1</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">0,38</td><td class="crd-td">0,41</td><td class="crd-td">0,53</td><td class="crd-td">0,42</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Mean population density in persons per km² across Lower Mississippi (HU 08) sub-regions from 10000BC to 1600AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:lm-leading-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Division</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Peak Year</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Parkin</strong></td><td class="crd-td">St. Francis-Memphis</td><td class="crd-td">1300AD-1550AD</td><td class="crd-td">2,8k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>Emerald Mound</strong></td><td class="crd-td">Yazoo-Ouachita</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">2,4k</td><td class="crd-td">1400AD</td></tr>
<tr><td class="crd-td"><strong>Winterville</strong></td><td class="crd-td">Yazoo-Ouachita</td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">2,4k</td><td class="crd-td">1200AD</td></tr>
<tr><td class="crd-td"><strong>Bradley</strong></td><td class="crd-td">St. Francis-Memphis</td><td class="crd-td">1400AD-1550AD</td><td class="crd-td">2,2k</td><td class="crd-td">1525AD</td></tr>
<tr><td class="crd-td"><strong>Lake George</strong></td><td class="crd-td">Yazoo-Ouachita</td><td class="crd-td">1000AD-1500AD</td><td class="crd-td">2,2k</td><td class="crd-td">1400AD</td></tr>
<tr><td class="crd-td"><strong>Nodena</strong></td><td class="crd-td">St. Francis-Memphis</td><td class="crd-td">1400AD-1550AD</td><td class="crd-td">2,2k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>Carson Mounds</strong></td><td class="crd-td">St. Francis-Memphis</td><td class="crd-td">1150AD-1500AD</td><td class="crd-td">1,8k</td><td class="crd-td">1350AD</td></tr>
<tr><td class="crd-td"><strong>Fatherland</strong></td><td class="crd-td">Yazoo-Ouachita</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1,8k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>Upper Nodena</strong></td><td class="crd-td">St. Francis-Memphis</td><td class="crd-td">1400AD-1550AD</td><td class="crd-td">1,6k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>Poverty Point</strong></td><td class="crd-td">Yazoo-Ouachita</td><td class="crd-td">2000BC-1000BC</td><td class="crd-td">1,6k</td><td class="crd-td">1500BC</td></tr>
<tr><td class="crd-td"><strong>Chucalissa</strong></td><td class="crd-td">St. Francis-Memphis</td><td class="crd-td">1100AD-1550AD</td><td class="crd-td">1,4k</td><td class="crd-td">1400AD</td></tr>
<tr><td class="crd-td"><strong>Parchman Place</strong></td><td class="crd-td">St. Francis-Memphis</td><td class="crd-td">1350AD-1550AD</td><td class="crd-td">1,4k</td><td class="crd-td">1475AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Twelve largest catalogued settlements across Lower Mississippi (HU 08) by peak population descending.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:lm-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>St. Francis-Memphis</strong></td><td class="crd-td">1200AD</td><td class="crd-td">129k</td><td class="crd-td">118,7k-139,3k</td></tr>
<tr><td class="crd-td"><strong>Yazoo-Ouachita</strong></td><td class="crd-td">1200AD</td><td class="crd-td">118,5k</td><td class="crd-td">109k-128k</td></tr>
<tr><td class="crd-td"><strong>Natchez-Delta</strong></td><td class="crd-td">1200AD</td><td class="crd-td">78,5k</td><td class="crd-td">72,2k-84,8k</td></tr>
<tr><td class="crd-td"><strong>St. Francis-Memphis</strong></td><td class="crd-td">1400AD</td><td class="crd-td">108k</td><td class="crd-td">99,4k-116,6k</td></tr>
<tr><td class="crd-td"><strong>Yazoo-Ouachita</strong></td><td class="crd-td">1400AD</td><td class="crd-td">94k</td><td class="crd-td">86,5k-101,5k</td></tr>
<tr><td class="crd-td"><strong>Natchez-Delta</strong></td><td class="crd-td">1400AD</td><td class="crd-td">66k</td><td class="crd-td">60,7k-71,3k</td></tr>
<tr><td class="crd-td"><strong>St. Francis-Memphis</strong></td><td class="crd-td">1500AD</td><td class="crd-td">112k</td><td class="crd-td">103k-121k</td></tr>
<tr><td class="crd-td"><strong>Yazoo-Ouachita</strong></td><td class="crd-td">1500AD</td><td class="crd-td">96k</td><td class="crd-td">88,3k-103,7k</td></tr>
<tr><td class="crd-td"><strong>Natchez-Delta</strong></td><td class="crd-td">1500AD</td><td class="crd-td">68k</td><td class="crd-td">62,6k-73,4k</td></tr>
<tr><td class="crd-td"><strong>St. Francis-Memphis</strong></td><td class="crd-td">1600AD</td><td class="crd-td">42k</td><td class="crd-td">38,6k-45,4k</td></tr>
<tr><td class="crd-td"><strong>Yazoo-Ouachita</strong></td><td class="crd-td">1600AD</td><td class="crd-td">36k</td><td class="crd-td">33,1k-38,9k</td></tr>
<tr><td class="crd-td"><strong>Natchez-Delta</strong></td><td class="crd-td">1600AD</td><td class="crd-td">28k</td><td class="crd-td">25,8k-30,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Sub-regional population totals and uncertainty bounds across Lower Mississippi (HU 08) at 1200AD, 1400AD, 1500AD and 1600AD.</figcaption>
</figure>

# Limitations

Four constraints shape interpretation of the Lower Mississippi demographic series. First, aggressive Holocene meandering and metres of overbank silt across the Yazoo, St. Francis and Atchafalaya floodplains deeply bury Palaeoindian and Early Archaic land surfaces, reducing radiocarbon site counts prior to 4000BC relative to upland ridges [@saunders1997; @kelly2025; @lombardo2013early]. Comparative geoarchaeological work in arid basins and palaeolakes highlights how stark the preservation contrast is between open desert terraces and deeply aggrading alluvial troughs [@crassard2013beyond; @crassard2013middle].

Second, coastal marsh subsidence and deltaic lobe switching along the Birdfoot Delta and Barataria-Terrebonne coast drown early coastal shell middens, leaving late precontact littoral fishing communities under-represented in terrestrial site registers compared with interior mound complexes [@pfeiffer2020late; @fossile2023bridging].

Third, the century and a half separating Spanish chronicles of 1541-1543AD from French explorers La Salle, Tonti and Iberville in 1682-1699AD creates a textual hiatus during the steepest demographic collapse [@hudson1997; @milner2010; @jones2014]. Values at 1550AD and 1600AD are therefore anchored by ceramic-phase contractions across St. Francis, Nodena and Plaquemine assemblages rather than contemporary parish returns.

Fourth, several major northern confluence polities straddle watershed margins shared with HU 06 (Cumberland and Tennessee) and HU 05 (Ohio River), while dispersed Plaquemine hamlets across backswamp bayous lack discrete nucleated boundaries and stay embedded in rural `sites_northern_america` density layers [@brain1989; @cobb2002].

# Conclusion

Between 10000BC and 1600AD, the Lower Mississippi Hydrological Unit expanded from 1.400 scattered post-glacial foragers to an early Archaic earthwork cradle at Watson Brake and Poverty Point, climbing onwards to a Holocene zenith of 326k inhabitants in 1200AD.

Across five millennia of mound building, the valley operated as eastern North America's central riverine corridor, linking Gulf littoral fisheries and Red-Ouachita salt and stone networks to interior Mississippian agricultural heartlands. Even when fourteenth-century Vacant Quarter contraction thinned northern towns along the Ohio-Cairo margin, Plaquemine and late Mississippian chiefdoms rebuilt dense fortified centres at Parkin, Bradley, Nodena, Lake George, Emerald Mound and Fatherland.

Sixteenth-century expeditions and imported pathogens cut basin numbers by more than three-fifths between 1500AD and 1600AD, reducing the valley to 106k inhabitants on the threshold of French colonial contact. Combining 67 catalogued monumental and town complexes with the 93.358-observation North American kriging grid preserves both concentrated levee urbanism and the wider rural floodplain base across eleven millennia.

# Sources

<div id="refs"></div>
