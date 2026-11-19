---
title: "Southern Plains Hydrological Unit (HU 12)"
subtitle: "CENTAUR-II: Texas-Gulf Caddoan Chiefdoms, Central Prairies and Coastal Foragers, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: southern_plains_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_southern_plains_spatial.png"
hero_caption: "Sub-regional areal masks and 102 catalogued settlements across the Southern Plains Hydrological Unit (462,01k km²), from Caddoan East Texas to the Karankawa coast."
hero_label: "fig:hero-southern-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the pre-Columbian and early contact population of the Texas-Gulf Southern Plains Hydrological Unit (USGS HU 12, bordering adjacent Red River HU 11 drainages) across 462.013 km² (6.364 five-arcminute cells) from 10000BC to 1600AD. Linking radiocarbon summed probability distributions (N = 2.347, median peak 1287AD) [@kelly2025] with East Texas Caddoan mound surveys [@perttula2012], Central Texas spring and burnt-rock-midden syntheses [@perttula2004; @waters2011] and coastal Karankawa settlement records [@ricklis1996], HU 12 is partitioned into three sub-regions encompassing 102 catalogued habitation settlements (337 observations) out of 205 ledger candidates.

Total basin population climbs from 850 (782 to 918) in 10000BC to 48,5k in 2000BC and 82,3k (75,7k to 88,9k) at 0AD, rising to a Holocene maximum of 160k (147,2k to 172,8k; 0,35 persons per km²) in 1300AD. Unlike the Southeast and Lower Mississippi, which peaked around 1200AD, Southern Plains totals continued expanding through the thirteenth century behind Neches-Sabine-Trinity Caddoan farming chiefdoms (77k at 1300AD).

Fourteenth-century Southern Plains droughts, bison-hunter mobility across the prairies and East Texas chiefdom dispersal lower totals by 11,8% to 141,2k in 1400AD and 131k (120,5k to 141,5k) in 1500AD [@vehik2002; @doering2020]. Following Cabeza de Vaca's 1528AD Gulf Coast landing and Moscoso's 1542AD overland passage into East Texas, introduced epidemics reduce basin population by 27,5% over the sixteenth century to 112k in 1550AD and 95k (87,4k to 102,6k) by 1600AD [@ewers1973; @jones2014].

# Background

USGS HU 12 spans a pronounced ecological gradient from humid pineywoods in the Sabine, Neches and Upper Trinity valleys west across the Blackland Prairie, Brazos and Colorado bottomlands, the karst springs of the Balcones Escarpment and Edwards Plateau, and up onto the semi-arid Southern High Plains before descending south to the Nueces brush country and Galveston-Matagorda coastal barrier bays. That West-to-East precipitation gradient dictated pre-contact human geography: annual rainfall exceeds 1.200 mm in the pineywoods of East Texas, drops below 750 mm along the Balcones springs, and falls under 450 mm on the Llano Estacado margin.

Because rainfall and arable soil varied so sharply across this transect, HU 12 never formed a uniform demographic belt [@perttula2004]. Sedentary Caddoan maize-beans-squash communities occupied the sandy terraces and alluvial bottoms of East Texas [@perttula2012], semi-sedentary bison and geophyte bands moved between reliable Balcones karst springs across central Texas, and seasonal estuarine fishers harvested oyster reefs and lagoon fish along the coastal bend from Galveston to Corpus Christi [@ricklis1996].

Across 2.347 cleaned radiocarbon dates in HU 12, Kelly et al. [@kelly2025] identify a median summed probability peak at 1287AD, roughly two centuries later than the Rio Grande (1112AD) and more than a century after both the Southeast (1169AD) and Lower Mississippi (1177AD). That late thirteenth-century apex corresponds to the flourishing of Early and Middle Caddoan civic-ceremonial towns led by George C. Davis and Washington Square Mound alongside dense Edwards Plateau earth-oven cooking camps and Galveston-Corpus Christi littoral middens [@perttula2012; @ricklis1996].

Palaeoindian stratigraphy across central and western Texas also anchors some of the oldest documented archaeological horizons in North America. Excavations at Gault and the neighbouring Buttermilk Creek complex on the Balcones margin [@waters2011], together with High Plains hunting camps at Blackwater Draw Locality 1, Lubbock Lake, Aubrey and Plainview, provide deep terminal Pleistocene baselines whose lithic hafting and morphometric traditions have been compared across the continent [@buchanan2012assessment; @buchanan2012morphometric].

<figure class="crd-table-figure" id="tab:sp-subregion-profiles">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-region</th><th class="crd-th">Area</th><th class="crd-th">Cells</th><th class="crd-th">Sites</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sabine, Neches and Upper Trinity Caddo</strong></td><td class="crd-td">102.333 km²</td><td class="crd-td">1.433</td><td class="crd-td">24</td><td class="crd-td">77k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Brazos, Colorado and Edwards Plateau</strong></td><td class="crd-td">164.281 km²</td><td class="crd-td">2.262</td><td class="crd-td">32</td><td class="crd-td">58,5k</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>Texas Gulf Coast and Nueces Bays</strong></td><td class="crd-td">195.399 km²</td><td class="crd-td">2.669</td><td class="crd-td">46</td><td class="crd-td">24,5k</td><td class="crd-td">15k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional divisions of Southern Plains (HU 12) showing areal coverage, five-arcminute cells, catalogued settlements and 1300AD-1600AD population benchmarks.</figcaption>
</figure>

# Methodology

## Radiocarbon Kriging and Sub-Regional Partitioning

Rural spatial priors at five-arcminute resolution derive from the continental North American radiocarbon domain covering 493.687 valid terrestrial cells (18.561.382 km²), merging global syntheses (p3k14c [@bird2022p3k14c] and c14bazAAR) with Texas, Louisiana and New Mexico archaeological site files [@kelly2022; @crema2021]. After spatial and chronological deduplication across 200-year bins, the domain encompasses 93.129 unique site-period observations across 3.833 domestic Voronoi catchments (15.517.268 km²; 2.570 active inhabited catchments, 67,05%; equivalent circular radius median 29,48 km, 90th percentile 40,95 km, or 29,3 km and 39,85 km across active catchments), yielding a 14,24x site-density increase over the 6.539-entry legacy baseline.

Across ten Holocene horizons from 13000BC to 1650AD, 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) residual kriging links Freeman-Tukey transformed catchment counts to biophysical covariates capturing fluvial proximity, coastal access and slope. Along the southern Rio Grande and Gulf margins, 251 cross-frontier buffer catchments condition adjacent borderlands and neighbouring basins up to 300 km beyond the CENTAUR boundary so southern prairie gradients remain smooth.

Within HU 12, 6.364 five-arcminute land cells (462.013 km²) partition into three sub-regional masks (Table \ref{tab:sp-subregion-profiles}):

1. **Sabine, Neches and Upper Trinity Basins** (102.333 km², 1.433 cells, 24 catalogued sites): spans the East Texas pineywoods, Neches-Angelina terraces, Sabine crossings and Upper Trinity agricultural belt, anchoring George C. Davis, Washington Square Mound, Pine Tree Mound, Deshazo Caddo Village, Hudnall-Pirtle, Oak Hill Village, Deshazo, Whitesboro Red River Village and Gilbert.
2. **Brazos, Colorado and Edwards Plateau Balcones Escarpment** (164.281 km², 2.262 cells, 32 catalogued sites): encompasses the Blackland Prairie, middle Brazos-Colorado river valleys, eastern Edwards Plateau karst and Llano Estacado margins, containing Gault, Lubbock Lake, Blackwater Draw Locality 1, Horn Shelter No. 2, Ernest Witte, Waco-Wichita Village, Harrell Henrietta Town and San Gabriel River Village.
3. **Texas Gulf Barrier Coast, Galveston-Matagorda and Nueces** (195.399 km², 2.669 cells, 46 catalogued sites): spans the coastal bend from Matagorda Bay and the Guadalupe-San Antonio delta across the Balcones margin and Nueces brush country to Corpus Christi lagoons, centred on Oso Dune Karankawa Village, Barton Springs Village, Nueces Bay Town, Guadalupe River Mouth Village, Copano Bay Village, Oso Creek-Corpus Christi, Mitchell Ridge, Cayo del Oso, Spring Lake San Marcos, Morhiss, Buckeye Knoll and Floyd Morris.

## Subsistence Calibration, Chronology and Uncertainty Bounds

Benchmark trajectories across 23 intervals from 10000BC to 1600AD separate Caddoan floodplain horticulture (0,75 persons per km² sub-regional mean at 1300AD) from wider central Texas and Llano Estacado foraging grasslands (0,36 persons per km²) and the Gulf-Nueces estuarine and brushland plains (0,13 persons per km²) [@perttula2012; @ricklis1996; @milner2010]. Point estimates for all 102 catalogued sites are subtracted from sub-regional targets before distributing rural populations across the kriged grid and smoothing across two 5-pixel passes.

Symmetric $\pm 8\%$ uncertainty intervals account for uneven highway and reservoir survey density between East Texas river basins and remote West Texas ranches, marine reservoir exclusion along Gulf shell middens, and sixteenth-century epidemiological interpolation [@jones2014; @ubelaker2006; @ewers1973]. Quantitative cultural-transmission models for Great Plains projectile styles [@lycett2014dynamics], historical-ecological shifting baselines along the Gulf of Mexico [@pluckhahn2024historical], experimental faunal craft studies [@gillreathbrown2018experimental] and continental stratigraphic preservation, Pleistocene-Holocene transition and Lower-48 radiocarbon syntheses [@surovell2022late; @holliday2016a; @kelly2022] inform how we interpret foraging mobility and surface preservation without modifying local Texas-Gulf carrying capacities.

# Testing and Validation

All spatial, variogram, gazetteer and arithmetic audits clear pre-publication thresholds at GMT+0:

1. **Kriging Sharpness and Fit**: Across all ten Holocene horizons in the North American surface (78.938 to 149.138 active inhabited non-wasteland cells), the non-stationary Matérn variograms maintain regularised dimensionless short range $\tau_1 = 1,35$ across all ten horizons (raw 1,519 to 1,6098, mean 1,5782; $\tau_2 = 2,9$ at 2,9025; effective short range 45,23 km to 47,94 km, mean 47 km), raw nugget-to-sill ratio 0 across all ten horizons (regularised 0,04) and weighted least-squares residual $R^2$ from 0,999 to 0,9992 (Table \ref{tab:sp-kriging-horizons}).
2. **Gazetteer Reconciliation**: Out of 205 ledger candidates evaluated, 102 bounded habitation sites (337 observations) enter the active point gazetteer (24 in Sabine-Neches Caddo, 32 in Brazos-Colorado-Edwards and 46 in Gulf Coast-Nueces) while 103 entries are excluded (102 duplicate-alias consolidations within 2 km and 1 unquantified non-habitation feature exclusion), leaving 0 unaccounted records.
3. **Arithmetic Integrity**: Sub-regional totals sum identically to the basin headline series across all 23 benchmark horizons from 10000BC (850) to 1600AD (95k) in Table \ref{tab:sp-benchmarks}.

<figure class="crd-table-figure" id="tab:sp-kriging-horizons">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Tau 1</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Ratio</th><th class="crd-th">R²</th><th class="crd-th">Range (km)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic (13000-6000BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td><td class="crd-td">45,23</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic (6000-3000BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">47,94</td></tr>
<tr><td class="crd-td"><strong>Late Archaic (3000-1000BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">47,14</td></tr>
<tr><td class="crd-td"><strong>Early Woodland and Formative (1000-200BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">46,83</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland Hopewell (200BC-400AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">47,46</td></tr>
<tr><td class="crd-td"><strong>Late Woodland and Dorset (400-800AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">47,27</td></tr>
<tr><td class="crd-td"><strong>Early Mississippian and Pueblo II (800-1100AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">46,59</td></tr>
<tr><td class="crd-td"><strong>Middle Mississippian and Pueblo III (1100-1300AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">47,2</td></tr>
<tr><td class="crd-td"><strong>Late Pre-Contact and Oneota (1300-1500AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">47,12</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact (1500-1650AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">47,2</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Non-stationary Matérn variogram parameters across the ten Holocene horizons of the North American radiocarbon domain.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:sp-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Period</th><th class="crd-th">Sabine-Neches</th><th class="crd-th">Brazos-Edwards</th><th class="crd-th">Gulf Coast</th><th class="crd-th">Total</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">300</td><td class="crd-td">400</td><td class="crd-td">150</td><td class="crd-td">850</td><td class="crd-td">782-918</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">650</td><td class="crd-td">850</td><td class="crd-td">350</td><td class="crd-td">1,8k</td><td class="crd-td">1,7k-2k</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">700</td><td class="crd-td">3,6k</td><td class="crd-td">3,3k-3,9k</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">1,2k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k-7k</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">4,2k</td><td class="crd-td">4,6k</td><td class="crd-td">2,1k</td><td class="crd-td">10,9k</td><td class="crd-td">10k-11,8k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">6,8k</td><td class="crd-td">7k</td><td class="crd-td">3,3k</td><td class="crd-td">17,1k</td><td class="crd-td">15,7k-18,5k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">10,2k</td><td class="crd-td">10,2k</td><td class="crd-td">4,8k</td><td class="crd-td">25,2k</td><td class="crd-td">23,2k-27,2k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">14,8k</td><td class="crd-td">14,2k</td><td class="crd-td">6,7k</td><td class="crd-td">35,7k</td><td class="crd-td">32,8k-38,6k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">20,5k</td><td class="crd-td">19k</td><td class="crd-td">9k</td><td class="crd-td">48,5k</td><td class="crd-td">44,6k-52,4k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">27,5k</td><td class="crd-td">24,8k</td><td class="crd-td">11,8k</td><td class="crd-td">64,1k</td><td class="crd-td">59k-69,2k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">36k</td><td class="crd-td">31,5k</td><td class="crd-td">14,8k</td><td class="crd-td">82,3k</td><td class="crd-td">75,7k-88,9k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">42k</td><td class="crd-td">36k</td><td class="crd-td">16,8k</td><td class="crd-td">94,8k</td><td class="crd-td">87,2k-102,4k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">48,5k</td><td class="crd-td">40,5k</td><td class="crd-td">18,8k</td><td class="crd-td">107,8k</td><td class="crd-td">99,2k-116,4k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">55k</td><td class="crd-td">45k</td><td class="crd-td">20,6k</td><td class="crd-td">120,6k</td><td class="crd-td">111k-130,2k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">62k</td><td class="crd-td">49,5k</td><td class="crd-td">22,2k</td><td class="crd-td">133,7k</td><td class="crd-td">123k-144,4k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">68,5k</td><td class="crd-td">53k</td><td class="crd-td">23,2k</td><td class="crd-td">144,7k</td><td class="crd-td">133,1k-156,3k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">72,5k</td><td class="crd-td">55,5k</td><td class="crd-td">23,8k</td><td class="crd-td">151,8k</td><td class="crd-td">139,7k-163,9k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">75,5k</td><td class="crd-td">57,5k</td><td class="crd-td">24,2k</td><td class="crd-td">157,2k</td><td class="crd-td">144,6k-169,8k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">77k</td><td class="crd-td">58,5k</td><td class="crd-td">24,5k</td><td class="crd-td">160k</td><td class="crd-td">147,2k-172,8k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">67k</td><td class="crd-td">52k</td><td class="crd-td">22,2k</td><td class="crd-td">141,2k</td><td class="crd-td">129,9k-152,5k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">62k</td><td class="crd-td">48k</td><td class="crd-td">21k</td><td class="crd-td">131k</td><td class="crd-td">120,5k-141,5k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">51k</td><td class="crd-td">43k</td><td class="crd-td">18k</td><td class="crd-td">112k</td><td class="crd-td">103k-121k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">42k</td><td class="crd-td">38k</td><td class="crd-td">15k</td><td class="crd-td">95k</td><td class="crd-td">87,4k-102,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Benchmark population estimates across all 23 horizons for Southern Plains (HU 12) and its three sub-regions, 10000BC to 1600AD.</figcaption>
</figure>

# Results

## Palaeoindian Springs and Archaic Bison-Geophyte Campgrounds (10000BC to 0AD)

At 10000BC, sparse mobile bands clustered around perennial limestone springs, flint quarries and High Plains playa basins, giving HU 12 an initial population near 850 (782 to 918). Early settlements appear along the Balcones Escarpment at Gault (65 in 10000BC; rising to 90 by 8000BC) [@waters2011], Horn Shelter No. 2 (35 at 9000BC), Kincaid Shelter (40 at 8600BC) and Spring Lake San Marcos, alongside High Plains Clovis, Folsom and Plano hunting loci at Lubbock Lake (30 at 9800BC), Blackwater Draw Locality 1 (55 at 9500BC), Aubrey (35 at 9500BC), Siren (25 at 9500BC) and Plainview (35 to 45 around 8000BC).

Comparative Palaeoindian research across North America highlights how stone tool caching, hafting design and late Pleistocene megafaunal ecology shaped early foraging ranges [@buchanan2012assessment; @buchanan2012morphometric; @hannold2026diets], while global comparisons with independent Old World fluting traditions demonstrate the specialised technical character of North American Clovis assemblages [@crassard2020fluted].

By 5000BC, Middle Archaic climate warming shifted bison herds northward and focused central Texas bands onto sotol and camas earth-oven baking at burnt-rock middens across the Edwards Plateau [@perttula2004]. Basin numbers rose nearly fivefold from 3,6k in 8000BC to 17,1k in 5000BC, reaching 48,5k at 2000BC and 64,1k at 1000BC as Early and Middle Holocene land use stabilised across inland prairies and coastal estuaries [@perttula2004; @ricklis1996; @kelly2022].

Along the coastal prairie and lower river terraces, multi-component cemeteries and shell middens such as Buckeye Knoll (65 at 5600BC; 165 at 1000BC), Morhiss (65 at 4300BC; 215 at 200AD), Cayo del Oso (65 at 3800BC) and Ernest Witte (70 at 3300BC) document growing territorial continuity. By 0AD, total population reached 82,3k (75,7k to 88,9k), with East Texas woodland terraces overtaking the western prairies in aggregate weight (36k vs 31,5k).

## Caddoan Maize Florescence and Prairie Intensification (0AD to 1300AD)

Between 0AD and 1000AD, Woodland pottery adoption, bow-and-arrow hunting and early maize cultivation in the Neches, Angelina and Sabine valleys widened the gap between East Texas and the central grasslands (Figure \ref{fig:sp-trajectory}). Total population rose from 82,3k at 0AD to 120,6k in 600AD and 144,7k in 1000AD, as Sabine-Neches-Trinity Caddo share climbed from 43,7% to 47,3%.

Between 800AD and 1300AD, Early and Middle Caddoan civic centres with earthen platform mounds and circular timber temples transformed East Texas into the demographic core of HU 12 [@perttula2012]. George C. Davis (Caddo Mounds) on the Neches expanded from 450 in 800AD to 1,45k in 1100AD and a peak of 1,65k at 1200AD before easing to 1,2k in 1300AD, complemented by Hudnall-Pirtle (480 at 1100AD), Burr's Ferry Earthworks (280 at 1200AD), Murvaul Creek (245 at 1200AD) and Washington Square Mound (520 in 1200AD; rising to 950 at 1300AD).

Simultaneously, farming hamlets and seasonal valley settlements expanded along the Brazos, Colorado and Pecos frontiers (including Loeve-Fox at 210 in 1100AD, Sam Wahl at 180 in 1250AD, San Gabriel River Village at 350 in 1200AD and Ochoa-phase Merchant in eastern New Mexico at 265 in 1350AD), lifting HU 12 to its Holocene maximum of 160k (147,2k to 172,8k) in 1300AD. That peak sits right alongside Kelly et al. [@kelly2025] 1287AD radiocarbon summed probability maximum (N = 2.347). At 1300AD, Sabine-Neches-Trinity held 77k (48,1%; 0,75 persons per km²), Brazos-Colorado-Edwards held 58,5k (36,6%; 0,36 persons per km²) and Gulf Coast-Nueces held 24,5k (15,3%; 0,13 persons per km²).

<figure class="crd-figure-block" id="fig:sp-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-southern-plains/fig2_southern_plains_trajectory.png" alt="fig:sp-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and sub-regional population trajectories for Southern Plains (HU 12) from 10000BC to 1600AD with uncertainty interval.</figcaption>
</figure>

## Drought Realignment, Plains Trade and Contact Losses (1300AD to 1600AD)

Between 1300AD and 1500AD, Southern Plains demography underwent a dual realignment (Figure \ref{fig:sp-shares}). Persistent fourteenth-century droughts and shifting exchange routes fragmented older mound precincts in East Texas, dropping Sabine-Neches-Trinity by 19,5% from 77k in 1300AD to 67k in 1400AD and 62k in 1500AD even as dispersed Late Caddo towns such as Deshazo Caddo Village (600 at 1600AD), Pine Tree Mound (640 at 1450AD), Oak Hill Village (460 at 1350AD) and Deshazo (340 at 1450AD) succeeded George C. Davis [@perttula2012].

Across the central prairies and Edwards Plateau, Brazos-Colorado-Edwards eased 17,9% from 58,5k in 1300AD to 48k in 1500AD as Toyah-horizon bison hunters expanded and Plains Village groups settled along the middle Brazos and Red-Trinity margins (Waco-Wichita Village at 580 in 1500AD, Harrell Henrietta Town at 550 in 1450AD, San Gabriel River Village at 550 in 1400AD) [@vehik2002; @perttula2004]. Over the same centuries, southern Athabascan migrations reached the western High Plains borderlands [@doering2020], while Karankawa and inland-coastal communities maintained dense centres at Oso Dune Karankawa Village (750 at 1500AD), Barton Springs Village (700 at 1400AD), Nueces Bay Town (700 at 1500AD), Guadalupe River Mouth Village (650 at 1500AD), Copano Bay Village (600 at 1500AD), Oso Creek-Corpus Christi (460 at 1500AD), Cayo del Oso (340 at 1450AD) and Mitchell Ridge on Galveston Island (440 at 1500AD) [@ricklis1996]. Basin population stood at 131k (120,5k to 141,5k) at 1500AD.

<figure class="crd-figure-block" id="fig:sp-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-southern-plains/fig3_southern_plains_shares.png" alt="fig:sp-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic shares across Southern Plains (HU 12) from 10000BC to 1600AD.</figcaption>
</figure>

Sixteenth-century European landings and interior contacts began earlier on the Texas coast than in most interior North American basins. Álvar Núñez Cabeza de Vaca and survivors of the Narváez expedition washed ashore near Galveston Island (Mitchell Ridge) in 1528AD and lived for years among coastal Karankawa and inland Coahuiltecan bands, followed in 1542AD by Luis de Moscoso's overland march across Hasinai Caddoan villages in East Texas [@ewers1973; @perttula2012; @ricklis1996].

Introduced respiratory and eruptive diseases spread rapidly along Plains-Caddo trade trails [@ewers1973; @jones2014]. Regional numbers fell 14,5% between 1500AD and 1550AD (to 112k) and reached 95k (87,4k to 102,6k) by 1600AD, representing a 27,5% drop from 1500AD and 40,6% below the 1300AD apex (Table \ref{tab:sp-subregions}). Caddoan East Texas experienced the steepest loss (-32,3%, from 62k to 42k) as riverine farmsteads thinned around Deshazo Caddo Village (600), Deshazo (380) and Gilbert (320), Gulf Coast-Nueces fell 28,6% (21k to 15k), and mobile Brazos-Edwards bands declined more gently by 20,8% (48k to 38k), anchored by Wichita villages near Waco (780 at 1600AD) [@ubelaker2006; @milner2010].

## Sub-Regional Balances and Settlement Hierarchy

Across eleven millennia, the balance between East Texas pineywoods, the Brazos-Colorado grasslands and the Gulf Coast-Nueces zone shifted sharply (Table \ref{tab:sp-subregions}, Table \ref{tab:sp-subregion-densities} and Table \ref{tab:sp-leading-centres}). At 10000BC, the 164.281 km² Brazos-Colorado-Edwards division held 47,1% of basin population thanks to abundant Balcones springs and High Plains hunting corridors, compared with 35,3% in Sabine-Neches-Trinity (102.333 km²) and 17,6% across Gulf Coast-Nueces (195.399 km²).

Agricultural intensification lifted Sabine-Neches-Trinity (22,1% of total land area) to 48,1% of total HU 12 population by 1300AD, supporting more than double the density of Brazos-Colorado-Edwards (0,75 vs 0,36 persons per km²) and nearly six times that of Gulf Coast-Nueces (0,13 persons per km²). Within the East Texas core, multi-mound capitals such as George C. Davis (1,65k) and Washington Square Mound (950) stood atop dense hierarchies of secondary village centres including Pine Tree Mound (640), Deshazo Caddo Village (600), Hudnall-Pirtle (480), Oak Hill Village (460), Lang Pasture (310), Tyson (270), Musgano (260), Broadway (245) and Murvaul Creek (245) [@perttula2012].

Across the central prairies and Edwards Plateau, settlement stayed tethered to permanent limestone springs, river terraces and bison-migration corridors. Major Archaic and Late Prehistoric loci such as Ernest Witte (240), Morgan Chapel (240), Belton (220), Loeve-Fox (210), San Gabriel River Village (550 at 1400AD), Harrell Henrietta Town (550 at 1450AD) and Harrell (295 at 1400AD) anchored seasonal aggregation cycles before protohistoric Wichita villages coalesced near Waco (780 at 1600AD) [@perttula2004; @vehik2002]. Along the western Pecos-Llano border, Ochoa-phase farming outposts such as Merchant (265 at 1350AD) connected Plains bison traders with Puebloan exchange networks further west.

On the Gulf barrier littoral and Nueces lowlands, the Texas Gulf Coast and Nueces division (195.399 km², 42,3% of HU 12 land area) held 15,3% to 19,4% of basin population across prehistory (0,13 persons per km² at 1300AD), pairing broad semi-arid South Texas brushland plains with productive Galveston, Matagorda and Corpus Christi estuarine fisheries where Oso Dune Karankawa Village (750), Barton Springs Village (700), Nueces Bay Town (700), Guadalupe River Mouth Village (650), Copano Bay Village (600), Oso Creek-Corpus Christi (460), Mitchell Ridge (440), Cayo del Oso (340), Spring Lake San Marcos (230), Morhiss (215), Floyd Morris (210) and Buckeye Knoll (175) sustained local demographic clusters [@ricklis1996]. Once sixteenth-century epidemics reached both navigable East Texas streams and Galveston-Corpus Christi bay shores, Caddo numbers dropped 32,3% and coastal numbers fell 28,6%, narrowing the gap by 1600AD when East Texas held 44,2% (42k) and Brazos-Colorado-Edwards held 40% (38k).

<figure class="crd-table-figure" id="tab:sp-subregion-densities">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Period</th><th class="crd-th">Sabine-Neches</th><th class="crd-th">Brazos-Edwards</th><th class="crd-th">Gulf Coast</th><th class="crd-th">HU 12 Mean</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">0,07</td><td class="crd-td">0,04</td><td class="crd-td">0,02</td><td class="crd-td">0,04</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">0,2</td><td class="crd-td">0,12</td><td class="crd-td">0,05</td><td class="crd-td">0,1</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">0,35</td><td class="crd-td">0,19</td><td class="crd-td">0,08</td><td class="crd-td">0,18</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">0,54</td><td class="crd-td">0,27</td><td class="crd-td">0,11</td><td class="crd-td">0,26</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">0,67</td><td class="crd-td">0,32</td><td class="crd-td">0,12</td><td class="crd-td">0,31</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">0,75</td><td class="crd-td">0,36</td><td class="crd-td">0,13</td><td class="crd-td">0,35</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">0,61</td><td class="crd-td">0,29</td><td class="crd-td">0,11</td><td class="crd-td">0,28</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">0,41</td><td class="crd-td">0,23</td><td class="crd-td">0,08</td><td class="crd-td">0,21</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Mean population density in persons per km² across Southern Plains (HU 12) sub-regions from 10000BC to 1600AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:sp-leading-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Division</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Peak Year</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>George C. Davis</strong></td><td class="crd-td">Sabine-Neches Caddo</td><td class="crd-td">800AD-1300AD</td><td class="crd-td">1,6k</td><td class="crd-td">1200AD</td></tr>
<tr><td class="crd-td"><strong>Washington Square Mound</strong></td><td class="crd-td">Sabine-Neches Caddo</td><td class="crd-td">1200AD-1400AD</td><td class="crd-td">950</td><td class="crd-td">1300AD</td></tr>
<tr><td class="crd-td"><strong>Waco-Wichita Village</strong></td><td class="crd-td">Brazos-Edwards</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">780</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>Oso Dune Karankawa Village</strong></td><td class="crd-td">Gulf Coast-Nueces</td><td class="crd-td">1350AD-1500AD</td><td class="crd-td">750</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>Barton Springs Village</strong></td><td class="crd-td">Gulf Coast-Nueces</td><td class="crd-td">1200AD-1400AD</td><td class="crd-td">700</td><td class="crd-td">1400AD</td></tr>
<tr><td class="crd-td"><strong>Nueces Bay Town</strong></td><td class="crd-td">Gulf Coast-Nueces</td><td class="crd-td">1300AD-1500AD</td><td class="crd-td">700</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>Guadalupe River Mouth Village</strong></td><td class="crd-td">Gulf Coast-Nueces</td><td class="crd-td">1300AD-1500AD</td><td class="crd-td">650</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>Pine Tree Mound</strong></td><td class="crd-td">Sabine-Neches Caddo</td><td class="crd-td">1200AD-1580AD</td><td class="crd-td">640</td><td class="crd-td">1450AD</td></tr>
<tr><td class="crd-td"><strong>Copano Bay Village</strong></td><td class="crd-td">Gulf Coast-Nueces</td><td class="crd-td">1300AD-1500AD</td><td class="crd-td">600</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>Deshazo Caddo Village</strong></td><td class="crd-td">Sabine-Neches Caddo</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">600</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>Harrell Henrietta Town</strong></td><td class="crd-td">Brazos-Edwards</td><td class="crd-td">1300AD-1450AD</td><td class="crd-td">550</td><td class="crd-td">1450AD</td></tr>
<tr><td class="crd-td"><strong>San Gabriel River Village</strong></td><td class="crd-td">Brazos-Edwards</td><td class="crd-td">1200AD-1400AD</td><td class="crd-td">550</td><td class="crd-td">1400AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Twelve largest catalogued settlements across Southern Plains (HU 12) by peak population descending.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:sp-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sabine-Neches-Trinity Caddo</strong></td><td class="crd-td">1300AD</td><td class="crd-td">77k</td><td class="crd-td">70,8k-83,2k</td></tr>
<tr><td class="crd-td"><strong>Brazos-Colorado-Edwards</strong></td><td class="crd-td">1300AD</td><td class="crd-td">58,5k</td><td class="crd-td">53,8k-63,2k</td></tr>
<tr><td class="crd-td"><strong>Gulf Coast-Nueces</strong></td><td class="crd-td">1300AD</td><td class="crd-td">24,5k</td><td class="crd-td">22,5k-26,5k</td></tr>
<tr><td class="crd-td"><strong>Sabine-Neches-Trinity Caddo</strong></td><td class="crd-td">1400AD</td><td class="crd-td">67k</td><td class="crd-td">61,6k-72,4k</td></tr>
<tr><td class="crd-td"><strong>Brazos-Colorado-Edwards</strong></td><td class="crd-td">1400AD</td><td class="crd-td">52k</td><td class="crd-td">47,8k-56,2k</td></tr>
<tr><td class="crd-td"><strong>Gulf Coast-Nueces</strong></td><td class="crd-td">1400AD</td><td class="crd-td">22,2k</td><td class="crd-td">20,4k-24k</td></tr>
<tr><td class="crd-td"><strong>Sabine-Neches-Trinity Caddo</strong></td><td class="crd-td">1500AD</td><td class="crd-td">62k</td><td class="crd-td">57k-67k</td></tr>
<tr><td class="crd-td"><strong>Brazos-Colorado-Edwards</strong></td><td class="crd-td">1500AD</td><td class="crd-td">48k</td><td class="crd-td">44,2k-51,8k</td></tr>
<tr><td class="crd-td"><strong>Gulf Coast-Nueces</strong></td><td class="crd-td">1500AD</td><td class="crd-td">21k</td><td class="crd-td">19,3k-22,7k</td></tr>
<tr><td class="crd-td"><strong>Sabine-Neches-Trinity Caddo</strong></td><td class="crd-td">1600AD</td><td class="crd-td">42k</td><td class="crd-td">38,6k-45,4k</td></tr>
<tr><td class="crd-td"><strong>Brazos-Colorado-Edwards</strong></td><td class="crd-td">1600AD</td><td class="crd-td">38k</td><td class="crd-td">35k-41k</td></tr>
<tr><td class="crd-td"><strong>Gulf Coast-Nueces</strong></td><td class="crd-td">1600AD</td><td class="crd-td">15k</td><td class="crd-td">13,8k-16,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Sub-regional population totals and uncertainty bounds across Southern Plains (HU 12) at 1300AD, 1400AD, 1500AD and 1600AD.</figcaption>
</figure>

# Limitations

Four limitations affect the Southern Plains demographic reconstruction. First, estuarine shell-midden radiocarbon dates along Galveston, Matagorda and Corpus Christi bays are filtered out of Kelly et al. [@kelly2025] due to variable marine reservoir offsets, which can attenuate late Holocene coastal amplitude relative to inland valleys [@ricklis1996].

Second, seasonal residential mobility among Edwards Plateau Toyah bands and South Texas Coahuiltecan groups resists discrete town-point enumeration. Many of the 32 catalogued sites in Brazos-Colorado-Edwards, alongside inland camps among the 46 Gulf Coast-Nueces entries, represent persistent spring camps, bluff camps and burnt-rock midden terraces rather than permanent towns, leaving broad prairie stretches represented primarily through continental North American catchment interpolation [@perttula2004].

Third, dispersed Caddoan farmstead hamlets across the Upper Neches, Angelina and Sulphur tributaries outnumbered major platform-mound precincts in total rural population yet leave fainter architectural footprints outside reservoir-salvage corridors [@perttula2012].

Fourth, wind deflation, playa silting and coastal barrier-island migration erode surface hearths across the western Llano Estacado and Laguna Madre shoreline, while early sixteenth-century Spanish contact records between 1528AD and 1600AD are episodic outside the Galveston-Hasinai corridor [@ewers1973; @jones2014].

# Conclusion

From 10000BC to 1600AD, the Southern Plains Hydrological Unit traced a distinctive demographic arc anchored by early Balcones and High Plains spring-camp occupation (850 inhabitants at 10000BC), long Archaic stability across central Texas burnt-rock middens and Gulf shell bays, and a late thirteenth-century peak of 160k residents in 1300AD led by Caddoan agricultural communities in East Texas.

Unlike eastern Mississippian valleys that peaked near 1200AD, HU 12 continued growing through 1300AD before fourteenth-century droughts, Plains bison-hunter expansion and sixteenth-century European-introduced diseases lowered basin totals by 40,6% to 95k in 1600AD. Even after rapid coastal and Caddoan losses during the 1500s, East Texas Hasinai towns, Wichita villages along the Brazos and Karankawa estuarine bands maintained distinct regional nuclei into the Spanish and French colonial era.

Integrating 102 catalogued settlements (337 observations) with the 93.129-observation North American kriging domain captures both the dense agricultural towns of the Neches-Sabine pineywoods and the sparser mobile corridors of the central prairies and Gulf-Nueces zone across eleven millennia.

# Sources

<div id="refs"></div>
