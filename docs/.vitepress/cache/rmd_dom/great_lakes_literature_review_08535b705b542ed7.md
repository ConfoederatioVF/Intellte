---
title: "Great Lakes Hydrological Unit (HU 04): Lake Superior Wild Rice, Lake Michigan Ridged-Fields and Iroquois-Erie Borderlands"
subtitle: "CENTAUR-II: Contiguous Great Lakes Drainage Basin, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: great_lakes_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_great_lakes_spatial.png"
hero_caption: "Areal mask and 105 settlements across USGS Hydrological Unit 04 (319,68k km²) from 10000BC to 1600AD. Three watershed divisions span Superior-Upper Peninsula-Winnebago, eastern Lake Michigan and Huron-Erie-Finger Lakes."
hero_label: "fig:hero-great-lakes"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the Holocene population of the contiguous Great Lakes basin (USGS Hydrological Unit 04, 319.677 km² across 5.605 five-arcminute cells) from 10000BC to 1600AD. Anchored to the terrestrial radiocarbon summed probability distribution of Kelly et al. [@kelly2025] (HU 04 median peak at 1500AD, N = 871, 450 cal BP) and non-stationary Matérn ($\nu = 3/2$) kriging over the North American archaeological surface (93.129 unique site-periods across 3.833 domestic catchments and 493.687 active cells, 14,24x the 6.539-site global radiocarbon baseline), total population grows from 250 inhabitants in 10000BC to 82,4k at 0AD and peaks at 164k in 1500AD (0,51 inhabitants per km²). Settlement concentrates in the southern agricultural and lacustrine zones of Saginaw-Huron, Maumee-Erie and the Western New York Finger Lakes (88k in 1500AD, 53,66% of the basin total) and the Lake Michigan littoral (54k, 32,93%), compared with 22k (13,41%) across Lake Superior, the Upper Peninsula and the Fox-Winnebago lowlands. Across 214 ledger candidates (108 duplicate-coordinate aliases and 1 unquantified cemetery excluded), 105 documented archaeological settlements are separated cleanly from the rural substratum prior to spatial scaling, with explicit 1500AD entries accounting for 22.410 inhabitants (13,66% of total) and 1600AD entries for 28.125 (18,32%). Because European penetration into the upper lakes lagged behind Atlantic coastal landings, aggregate basin numbers decline by only 6,4% between 1500AD and 1600AD, standing at 153,5k (0,48 inhabitants per km²) on the eve of seventeenth-century French missionary journeys [@trigger1976huron; @mason1981greatlakes; @jones2014].

# Background

## Hydrological Setting and Ecological Carrying Capacity

Earlier continental population allocations treated the Great Lakes basin as a uniform northern fur-trade periphery, flattening the ecological gradient between boreal Algonquian hunter-fisher-gatherers along the Canadian Shield margin and dense Oneota and Northern Iroquoian maize farmers in the southern lowlands [@fitting1970michigan; @mason1981greatlakes]. Spanning 319,68k km² across Michigan, Wisconsin, Indiana, Ohio, northern Pennsylvania, western New York and western Vermont (Lake Champlain outlet), USGS Hydrological Unit 04 straddles one of the sharpest climatic and pedological boundaries in eastern North America.

South of the 44th parallel, grey-brown luvisols, well-drained glacial moraines and lake-moderated frost-free seasons exceeding 140 days sustained Three Sisters horticulture (maize, beans and squash), ridged wetland fields and palisaded towns housing 800 to 2.600 residents [@overstreet1997oneota; @hart2020using]. Across the Saginaw Bay, Erie plain and western New York uplands, fertile glacial till permitted continuous agricultural intensification from the late eleventh century onward.

North of this tension zone across northern Lower Michigan, the Upper Peninsula and the Lake Superior rim, thin acidic podzols and shorter growing seasons restricted reliable maize harvests. Primary demographic support shifted to predictable autumn and spring spawning runs of lake whitefish (*Coregonus clupeaformis*), lake trout and lake sturgeon alongside wetland wild-rice (*Zizania palustris*) stands along sheltered bays and river mouths [@cleland1982fishery; @martin1999copper].

## Historiography and Radiocarbon Chronology

Recent archaeological syntheses have overturned older assumptions of sparse pre-contact occupation and static late prehistoric village numbers. Kelly et al. [@kelly2025] compiled 871 terrestrial radiocarbon dates within HU 04, identifying a regional summed probability peak at 450 cal BP (1500AD, interquartile range 403 to 497 cal BP). Unlike Middle Mississippian polities in the American Bottom and lower Ohio valley that contracted between 1200AD and 1400AD, Great Lakes farming populations continued to expand through the fifteenth century [@milner2010; @hart2016nation].

High-precision Bayesian radiocarbon chronologies across Northern Iroquoia show rapid village coalescence and relocation sequences from 1450AD through the early seventeenth century [@hart2019analysis; @manning2021resolving]. Nitrogen isotope assays from New York Iroquoian maize indicate sustained soil fertility across multi-decade swidden cycles [@hart2020using], explaining how palisaded towns maintained large regional populations without permanent field exhaustion.

Submerged early Holocene research adds further depth to this demographic record. Remote-sensing surveys along the Alpena-Amberley Ridge beneath modern Lake Huron have documented stone caribou-hunting drive lanes and obsidian tools imported from central Oregon during the Lake Stanley low-water stand around 7000BC [@oshea2021central]. Such finds demonstrate that early post-glacial bands exploited now-flooded lacustrine shelves long before Nipissing high-water stages reached modern shoreline elevations around 3000BC [@mason1981greatlakes; @fitting1970michigan].

European contact also reached HU 04 later and more unevenly than the Atlantic coast or the lower St. Lawrence valley. Whereas St. Lawrence Iroquoian villages disappeared before 1580AD and coastal New England suffered severe epidemics by 1616AD, direct French exploration of Georgian Bay, Lake Michigan and the Finger Lakes began only after 1608AD to 1615AD [@trigger1976huron; @jones2014]. Sixteenth-century population decline inside HU 04 remained modest, driven largely by indirect trade-corridor pathogens and inter-confederacy borderland warfare prior to the seventeenth-century Beaver Wars [@ubelaker2006; @milner2010].

# Methodology

## Sub-Regional Partition and Areal Masks

This analysis partitions the 5.605 active five-arcminute cells of HU 04 (319.677 km²) into three watershed-aligned sub-regions. Each sub-region corresponds to a distinct subsistence base and archaeological tradition without artificial state-border cuts:

1. **Lake Superior, Upper Peninsula and Fox-Winnebago (93.687 km², 1.770 pixels, 29,31% of area; 21 catalogued sites)**: Encompasses the U.S. Lake Superior watershed, Keweenaw Peninsula, Isle Royale, the Upper Peninsula, Green Bay and the Fox-Winnebago drainage (43,38 N to 48,12 N, 84,12 W to 93,12 W). Boreal Shield terrain, copper-bearing basalts and shore fisheries supported mobile Algonquian bands, Old Copper extraction camps (Isle Royale-Minong, Copper Harbor) and Oneota wild-rice settlements around Lake Winnebago (Lake Winnebago, Bell Site) [@martin1999copper; @cleland1982fishery; @overstreet1997oneota].
2. **Lake Michigan East and Lower Michigan West (64.104 km², 1.094 pixels, 20,05% of area; 13 catalogued sites)**: Spans the eastern, southern and northwestern Lower Michigan littoral of Lake Michigan, including the Grand, Kalamazoo, Muskegon, Manistee and St. Joseph river valleys (41,38 N to 45,79 N, 83,96 W to 88,38 W), anchoring Middle Woodland mounds (Norton Mounds, Converse) and late prehistoric towns (Moccasin Bluff, Kalamazoo River Potawatomi Town) [@fitting1970michigan].
3. **Saginaw-Huron, Maumee-Erie and Western New York Finger Lakes (161.886 km², 2.741 pixels, 50,64% of area; 71 catalogued sites)**: Covers eastern and northern Lower Michigan from Saginaw Bay to Bois Blanc Island (Juntunen), northern Indiana (Kramer Enclosure), the Maumee and Cuyahoga watersheds of northern Ohio, the Niagara Frontier, the Genesee and Finger Lakes uplands of New York and the Lake Champlain drainage of Vermont (40,46 N to 46,29 N, 70,21 W to 85,21 W). This eastern tier supported dense Western Basin, Whittlesey, Erie, Seneca, Cayuga, Onondaga and Oneida horticultural towns [@trigger1976huron; @hart2016nation; @hart2019analysis].

Across all three partitions, areal masks exclude open pelagic Great Lakes water surfaces so rural inhabitants are allocated strictly onto terrestrial five-arcminute cells along habitable shorelines, river valleys and upland moraines.

## Radiocarbon Kriging and Benchmark Calibration

Rural spatial weights derive from the continental North American radiocarbon compilation, which replaces earlier sparse single-database runs across all 18 contiguous U.S. hydrological units. By compositing global radiocarbon tables [@bird2022p3k14c] with the Canadian Archaeological Radiocarbon Database, U.S. state heritage inventories, CRM excavation files and Arctic monument registers, the compilation brings together 93.129 unique site-period observations (286.193 horizon site records) across 493.687 valid continental land cells (18,56M km²) and 3.833 domestic Voronoi catchments (15,52M km²), of which 2.570 active inhabited catchments cover 67,05% of the catchment mosaic (circular equivalent radius median 29,48 km and 90th percentile 40,95 km across all catchments; 29,3 km median and 39,85 km 90th percentile across active catchments). This composite density stands at 14,24x the 6.539-site global radiocarbon baseline inside the continental perimeter, resolving northern Michigan, Wisconsin and Lake Champlain valleys that previously suffered sparse sampling.

## Spatial Covariates and Cross-Frontier Conditioning

To prevent artificial border cliffs where HU 04 meets Ontario along the Detroit, Niagara and St. Lawrence rivers, 251 continental cross-frontier buffer catchments condition neighbouring territories beyond the domestic perimeter, ensuring continuous demographic gradients across Lakes Huron, Erie and Ontario into the St. Lawrence Lowlands. Within each of ten Holocene horizons spanning 13000BC to 1650AD (78.938 to 149.138 active inhabited continental cells), site counts undergo Freeman-Tukey variance stabilisation, 1-ring Poisson-Gamma credibility smoothing and weighted least-squares (WLS) regression against smooth biophysical covariates (coastal proximity, fluvial distance decay and terrain slope).

Spatial residuals are interpolated by 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging [@paciorek2006matern]. Across all ten horizons, the calibrated variogram models achieve regularised short-range parameter $\tau_1 = 1,35$ (raw $\tau_1$ ranging 1,519 to 1,6098, mean 1,5782; $\tau_2 = 2,9025$, effective short range 45,23 km to 47,94 km, mean 47 km), raw nugget-to-sill ratio 0, regularised nugget-to-sill ratio 0,04 and WLS residual fit $R^2$ spanning 0,999 to 0,9992.

Chronological trajectories for each sub-region track 23 benchmarks from 10000BC to 1600AD (1000-year steps to 0AD, 200-year steps to 1000AD, 100-year steps to 1500AD, plus 1550AD and 1600AD). Sub-regional benchmark sums follow Kelly et al. [@kelly2025] HU 04 radiocarbon intensity curves scaled to regional carrying-capacity anchors [@milner2010; @ubelaker2006], carrying symmetric plus or minus 8 per cent uncertainty intervals across every horizon.

## Settlement Inventory and Rural Subtraction

To prevent nucleated longhouse villages and ridged-field towns from being smeared across surrounding boreal or upland forest cells, 105 documented settlements are subtracted from sub-regional benchmark totals before rural kriging weights scale the remaining population. Each settlement trajectory is built from excavated longhouse counts, palisaded village hectares, midden volumes or regional ceramic phase seriation rather than modern municipal centroids [@trigger1976huron; @overstreet1997oneota; @manning2021resolving].

Where a site falls within 2 km of a duplicate heritage entry, the regional source ledger consolidates the coordinates under a single canonical key so no settlement is counted twice, while filtering out unquantified non-habitation features. In HU 04, 108 duplicate coordinate aliases and 1 non-habitation burial cemetery (Riverside Cemetery) are excluded from 214 ledger candidates, leaving 105 distinct settlements distributed across New York (34), Michigan (34), Wisconsin (15), Ohio (13), Vermont (6), Ontario borderlands (2) and northern Indiana (1).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Lake Superior, U.P. and Winnebago</strong></td><td class="crd-td">93.687</td><td class="crd-td">13,4k</td><td class="crd-td">20,2k</td><td class="crd-td">21,8k</td><td class="crd-td">22k</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>2. Lake Michigan East and West</strong></td><td class="crd-td">64.104</td><td class="crd-td">27,5k</td><td class="crd-td">47k</td><td class="crd-td">53,3k</td><td class="crd-td">54k</td><td class="crd-td">51k</td></tr>
<tr><td class="crd-td"><strong>3. Huron, Erie and Finger Lakes</strong></td><td class="crd-td">161.886</td><td class="crd-td">41,5k</td><td class="crd-td">75k</td><td class="crd-td">86,8k</td><td class="crd-td">88k</td><td class="crd-td">82k</td></tr>
<tr><td class="crd-td"><strong>HU 04 Total</strong></td><td class="crd-td">319.677</td><td class="crd-td">82,4k</td><td class="crd-td">142,2k</td><td class="crd-td">161,9k</td><td class="crd-td">164k</td><td class="crd-td">153,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional area and benchmark population estimates across the Great Lakes (HU 04) from 0AD to 1600AD.</figcaption>
</figure>

# Testing and Validation

Four regional diagnostic checks ran at GMT+0, yielding zero discrepancies:

1. **Radiocarbon Sample Threshold**: HU 04 incorporates N = 871 terrestrial radiocarbon dates in the regional curve [@kelly2025], exceeding the 400-date reliability threshold established for summed probability demography by more than twofold [@crema2021rcarbon].
2. **Kriging Sharpness and Fit**: Across all ten Holocene horizons (13000BC to 1650AD) and 78.938 to 149.138 active inhabited continental cells, the regularised dimensionless range parameter holds constant at $\tau_1 = 1,35$ (<= 1,8), raw nugget-to-sill ratio equals 0, regularised nugget-to-sill ratio holds at 0,04 (< 0,45), effective short range spans 45,23 km to 47,94 km (mean 47 km) and WLS residual fit spans $R^2 = 0,9990$ to 0,9992.
3. **Gazetteer and Ledger Reconciliation**: Cross-checking the settlement gazetteer against the regional source ledger yields 0 missing keys, 0 invalid coordinates (41,09 N to 48,08 N, 73,01 W to 89,11 W) and exact parity across 214 ledger candidates (105 included settlements and 109 excluded records comprising 108 duplicate-coordinate aliases within 2 km and 1 unquantified non-habitation cemetery at Riverside Cemetery).
4. **Mass Conservation**: Explicit 1500AD settlement entries account for 22.410 inhabitants (13,66% of 164k) and explicit 1600AD entries account for 28.125 (18,32% of 153,5k), leaving strictly positive rural residuals across every sub-region (21 sites in Superior-Upper Peninsula-Winnebago, 13 in Lake Michigan East and West and 71 in Huron-Erie-Finger Lakes).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Holocene Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">Range (km)</th><th class="crd-th">WLS R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeoindian and Early Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">45,23</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>2. Middle Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">47,94</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>3. Late Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">47,14</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>4. Early Woodland</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">46,83</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>5. Middle Woodland Hopewell</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">47,46</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>6. Late Woodland</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">47,27</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>7. Emergent Late Prehistoric</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">46,59</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>8. Middle Prehistoric</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">47,2</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>9. Oneota and Late Pre-Contact</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">47,12</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>10. Protohistoric Horizon</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">47,2</td><td class="crd-td">0,9992</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Matérn variogram parameters across the ten Holocene horizons in the Northern America kriging surface.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Site (Peak)</th><th class="crd-th">1500AD Dens.</th><th class="crd-th">1600AD Dens.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Lake Superior, U.P. and Winnebago</strong></td><td class="crd-td">21</td><td class="crd-td">12.325</td><td class="crd-td">Lake Winnebago (1.450)</td><td class="crd-td">0,23</td><td class="crd-td">0,22</td></tr>
<tr><td class="crd-td"><strong>2. Lake Michigan East and West</strong></td><td class="crd-td">13</td><td class="crd-td">5.515</td><td class="crd-td">Moccasin Bluff (950)</td><td class="crd-td">0,84</td><td class="crd-td">0,8</td></tr>
<tr><td class="crd-td"><strong>3. Huron, Erie and Finger Lakes</strong></td><td class="crd-td">71</td><td class="crd-td">43.565</td><td class="crd-td">Ganondagan (2.600)</td><td class="crd-td">0,54</td><td class="crd-td">0,51</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlement counts, leading centres and overall population density per km² across Great Lakes (HU 04) sub-regions.</figcaption>
</figure>

# Results

## Post-Glacial Colonisation and Archaic Copper-Fishery Economy

As the Laurentide ice sheet retreated northward after 11000BC and proglacial lakes drained through changing St. Lawrence and Ottawa River outlets, mobile Palaeoindian caribou hunters colonised southern Ontario, Michigan, Ohio and western New York along glacial beach ridges [@mason1981greatlakes; @fitting1970michigan]. Early fluted-point and Gainey-phase occupations are anchored at Hiscock (43 N, 78,19 W, occupied from 9500BC at 25 inhabitants), Gainey in Genesee County (9000BC, 65), Holcombe (9000BC, 60), Leavitt (9000BC, 55), Petersen on the western Lake Erie shore (9000BC, 45) and Reagen in the Champlain Valley (8000BC, 50). Regional population across HU 04 rises steadily from 250 inhabitants at 10000BC (100 in Lake Michigan, 150 in Huron-Erie-New York and 0 in ice-covered Superior) to 950 in 9000BC, 2,6k in 8000BC and 10,2k by 6000BC. Across the Lake Stanley low-water stage in Lake Huron around 7000BC, submerged hunting corridors carried obsidian sourced all the way from central Oregon [@oshea2021central], demonstrating continent-wide exchange networks even when total basin population stood near 5,6k.

Warming Middle Holocene climates and Nipissing lake-level stabilisation between 5000BC and 2000BC fostered intensive regional foraging and early seasonal sedentism, lifting HU 04 population from 16,6k in 5000BC to 35,8k in 3000BC and 48,6k in 2000BC (0,15 inhabitants per km²). In the Lake Superior sub-region, Late Archaic Old Copper extraction flourished at Isle Royale-Minong (140 in 3000BC, peaking at 180 in 2000BC), Isle Royale Minong Mines (145 in 2000BC) and Copper Harbor (75 in 3000BC), feeding hammered native copper tools into continental exchange circuits [@martin1999copper]. Simultaneously, stratified Archaic shell and fishing camps emerged across the eastern lakes at Frontenac Island (240 in 2000BC) and Lamoka Lake (220 in 2000BC) in New York, Basin Harbor in Vermont (65 in 3000BC) and Gordon Island in the Thousand Islands (80 in 3000BC) [@mason1981greatlakes].

<figure class="crd-figure-block" id="fig:traj-great-lakes">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-lakes/fig2_great_lakes_trajectory.png" alt="fig:traj-great-lakes" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in the Great Lakes (HU 04) with uncertainty bounds, 10000BC to 1600AD.</figcaption>
</figure>

## Woodland Fisheries, Mound Centres and Maize Adoption

Between 1000BC and 1000AD, Early, Middle and Late Woodland innovations doubled basin numbers from 64,1k in 1000BC to 82,4k at 0AD, 119,5k in 600AD and 142,2k in 1000AD (0,44 inhabitants per km²) (Table 1 and Figure 2). Around Lake Superior and the Straits of Mackinac, the shift from generalised Archaic foraging to autumn gill-netting of lake whitefish and lake trout supported denser multi-family shore aggregations at Naomikong Point (160 in 200AD to 240 in 500AD) and at Juntunen (180 in 800AD, rising to 450 at 1200AD; adjacent Juntunen Late Woodland Town reaching 900 in 1350AD) on Bois Blanc Island in northwestern Lake Huron [@cleland1982fishery].

In the Lake Michigan watershed, Hopewellian mound ceremonialism and riverine horticulture anchored Norton Mounds along the Grand River (260 at 0AD, peaking at 540 in 200AD), while northern Green Bay fishery continuity persisted at Rock Island II in Door County (500BC to 1600AD, reaching 480 at contact) [@fitting1970michigan]. Further southeast across the Maumee watershed in northeastern Indiana, early stockaded enclosures such as Kramer Enclosure (220 in 1100AD to 340 in 1400AD) mark the transition between dispersed Woodland hamlets and fortified village clusters.

Across the eastern sub-region, Hopewellian and Point Peninsula riverine centres grew at Schultz in the Saginaw Valley (180 in 500BC, 420 in 200AD), Kipp Island in central New York (280 in 300AD to 410 in 600AD), Winooski in Vermont (160 at 0AD to 310 in 800AD) and Libben near western Lake Erie (260 in 400AD to 620 in 1100AD). As tropical maize spread northward across the lower Great Lakes after 600AD to 900AD and intensified after 1000AD [@hart2020using], settlement stability increased markedly, shifting demographic weight gradually toward the southern fertile moraines and lake plains.

By 1000AD, regional population density reached 0,44 inhabitants per km² across the basin as a whole, with Huron-Erie-Finger Lakes already carrying 0,46 inhabitants per km² (75k), Lake Michigan East and West carrying 0,73 inhabitants per km² (47k) and Lake Superior, Upper Peninsula and Fox-Winnebago carrying 0,22 inhabitants per km² (20,2k). This balance laid the foundation for the Late Prehistoric expansion into palisaded towns.

## Oneota and Northern Iroquoian Expansion (1000AD to 1500AD)

During the Mediaeval Warm Period and early Little Ice Age (1000AD to 1500AD), dual agricultural cores pushed HU 04 population from 142,2k in 1000AD to 154,4k in 1200AD, 161,9k in 1400AD and the Holocene peak of 164k in 1500AD (0,51 inhabitants per km², plus or minus 8 per cent bounds 150,9k to 177,1k) (Table 3). In the western basin, Oneota agriculturalists built extensive raised wetland ridged-fields and lake-shore towns around Lake Winnebago and the Fox River corridor within the Superior-Upper Peninsula-Winnebago division [@overstreet1997oneota], as Lake Winnebago rose from 580 in 1100AD to 1.050 in 1300AD and 1.450 in 1500AD, neighbouring Doty Island grew from 380 in 1200AD to 680 in 1500AD, Lasley's Point reached 720 in 1500AD and Grand River peaked at 620 in 1300AD. Together, this northern and Fox-Winnebago division rose from 20,2k in 1000AD (14,21% share) to 22k in 1500AD (13,41% share, 0,23 inhabitants per km²). Meanwhile, along the eastern Lake Michigan littoral, Moccasin Bluff in southwestern Michigan expanded from 420 in 1100AD to 950 in 1500AD [@bettarel1973moccasin], anchoring Lake Michigan East and West as population climbed from 47k in 1000AD (33,05% share) to 54k in 1500AD (32,93% share, 0,84 inhabitants per km²).

At the same time, Northern Iroquoian and Lake Erie plain populations experienced decisive village nucleation [@trigger1976huron; @hart2016nation; @hart2019analysis]. Huron-Erie-Finger Lakes grew from 75k in 1000AD (52,74% share) to 86,8k in 1400AD and 88k in 1500AD (53,66% share, 0,54 inhabitants per km²) (Figure 3). Palisaded longhouse villages exceeding 500 inhabitants spread from South Park (720 peak) and White Fort (510) in northern Ohio through Ripley (850 in 1400AD, 1.350 in 1500AD) and Shelby (760 in 1500AD) on the Niagara Frontier to central New York hubs at Onondaga (480 in 1300AD, 1.100 in 1400AD, 1.950 in 1500AD), Ganondagan (1.400 in 1500AD), Indian Hill (Onondaga) (1.100 in 1500AD) and Missisquoi on Lake Champlain (680 in 1500AD). Bayesian radiocarbon modelling across Seneca, Onondaga and Mohawk sequences shows that these large towns did not remain static; instead, confederated communities relocated every 20 to 40 years as local firewood and deer stocks depleted, while maintaining high regional population totals [@manning2021resolving; @hart2020using].

<figure class="crd-figure-block" id="fig:shares-great-lakes">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-lakes/fig3_great_lakes_shares.png" alt="fig:shares-great-lakes" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across the Great Lakes (HU 04) from 10000BC to 1600AD.</figcaption>
</figure>

## Protohistoric Resilience and Late Sixteenth-Century Shift (1500AD to 1600AD)

Unlike Atlantic coastal river valleys or Mississippian floodplains further south, HU 04 displays marked demographic resilience across the sixteenth century. Total basin population edges down by only 3,23% from 164k in 1500AD to 158,7k in 1550AD, and by a cumulative 6,4% to 153,5k in 1600AD (0,48 inhabitants per km², bounds 141,2k to 165,8k). All three sub-regions participate in this mild contraction: Huron-Erie-Finger Lakes declines 6,82% from 88k to 82k, Lake Michigan East and West declines 5,56% from 54k to 51k and Lake Superior-Upper Peninsula-Winnebago declines 6,82% from 22k to 20,5k.

Yet settlement consolidation intensified even as rural dispersion softened. In western and central New York, major Haudenosaunee towns reached their maximum recorded sizes around 1570AD to 1600AD: Ganondagan (2.600 in 1600AD), Indian Hill (Onondaga) (2.400), Onondaga (2.400), Ripley (1.650), Factory Hollow (1.450), Cameron (Seneca) (1.200), Adams (Seneca) (1.150 in 1570AD), Thurston (1.150 in 1600AD), Tram (1.050 in 1590AD) and Genoa Fort (980 in 1600AD) [@manning2021resolving; @hart2019analysis]. Around Lake Winnebago and the Straits of Mackinac, Bell Site expanded from 420 in 1400AD to 1.150 by 1600AD, St. Ignace Straits Settlement grew to 850 and Doty Island grew to 840, partially offsetting slight declines at Lake Winnebago (1.450 to 1.400) and Moccasin Bluff (950 to 820). Consequently, explicit 1600AD settlement entries reached 28.125 inhabitants (18,32% of 153,5k, up from 22.410 or 13,66% in 1500AD), reflecting defensive nucleation around fortified towns ahead of seventeenth-century French contact and fur-trade upheavals [@trigger1976huron; @jones2014].

## State and Jurisdictional Distribution of Catalogued Sites

Although HU 04 is partitioned strictly by watershed divides rather than modern political borders, grouping the 105 catalogued settlements by state or province highlights the geographic gradient between the southern agricultural plains and the northern Shield shore (Table 4). Western and central New York holds 34 sites (32,4% of total sites) with summed peak populations reaching 28.520, matched in site count by Michigan with 34 sites (32,4%, 13.005 summed peaks led by Moccasin Bluff 950, Juntunen Late Woodland Town 900 and St. Ignace Straits Settlement 850). Eastern Wisconsin contributes 15 Oneota, Menominee and Winnebago sites (14,3%, 10.460 summed peaks led by Lake Winnebago 1.450 and Bell Site 1.150), while northern Ohio adds 13 Whittlesey and Western Basin sites (12,4%, 6.730 summed peaks led by Indian Hills (Ohio) and South Park at 720 each). At the eastern and western edges of the drainage divide, Vermont's Lake Champlain basin contributes 6 sites (5,7%, 1.730 summed peaks led by Missisquoi at 680), Ontario borderlands inside the Niagara and Thousand Islands mask hold 2 sites (1,9%, 620 summed peaks) and northeastern Indiana contributes Kramer Enclosure (1%, 340 peak in 1400AD).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">State or Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Largest Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Michigan</strong></td><td class="crd-td">34</td><td class="crd-td">32,4%</td><td class="crd-td">13.005</td><td class="crd-td">Moccasin Bluff (950)</td></tr>
<tr><td class="crd-td"><strong>New York</strong></td><td class="crd-td">34</td><td class="crd-td">32,4%</td><td class="crd-td">28.520</td><td class="crd-td">Ganondagan (2.600)</td></tr>
<tr><td class="crd-td"><strong>Wisconsin</strong></td><td class="crd-td">15</td><td class="crd-td">14,3%</td><td class="crd-td">10.460</td><td class="crd-td">Lake Winnebago (1.450)</td></tr>
<tr><td class="crd-td"><strong>Ohio</strong></td><td class="crd-td">13</td><td class="crd-td">12,4%</td><td class="crd-td">6.730</td><td class="crd-td">Indian Hills (Ohio) (720)</td></tr>
<tr><td class="crd-td"><strong>Vermont</strong></td><td class="crd-td">6</td><td class="crd-td">5,7%</td><td class="crd-td">1.730</td><td class="crd-td">Missisquoi (680)</td></tr>
<tr><td class="crd-td"><strong>Canada</strong></td><td class="crd-td">2</td><td class="crd-td">1,9%</td><td class="crd-td">620</td><td class="crd-td">Boyers Creek (380)</td></tr>
<tr><td class="crd-td"><strong>Indiana</strong></td><td class="crd-td">1</td><td class="crd-td">1%</td><td class="crd-td">340</td><td class="crd-td">Kramer Enclosure (340)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Distribution of the 105 Great Lakes (HU 04) catalogued settlements by modern state or Canadian border jurisdiction.</figcaption>
</figure>

Chronological sorting of settlement maxima likewise illustrates the shift from dispersed mobile bands to nucleated farming confederacies (Table 5). Only 4 sites reach their demographic peak during the Palaeoindian and Early Archaic eras (230 summed peaks), followed by 5 in the Middle and Late Archaic (925), 15 during the Woodland millennia (4.410), 25 during Late Prehistoric village emergence (11.000, led by Juntunen Late Woodland Town at 900) and 56 during the Protohistoric century between 1500AD and 1600AD (44.840 summed peaks, 73,02% of the cumulative 61.405 gazetteer peak total).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Peak Epoch</th><th class="crd-th">Sites</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Mean Peak</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic (10000-6001BC)</strong></td><td class="crd-td">4</td><td class="crd-td">230</td><td class="crd-td">58</td><td class="crd-td">Gainey (65)</td></tr>
<tr><td class="crd-td"><strong>Middle and Late Archaic (6000-1001BC)</strong></td><td class="crd-td">5</td><td class="crd-td">925</td><td class="crd-td">185</td><td class="crd-td">Frontenac Island (240)</td></tr>
<tr><td class="crd-td"><strong>Woodland Period (1000BC-999AD)</strong></td><td class="crd-td">15</td><td class="crd-td">4.410</td><td class="crd-td">294</td><td class="crd-td">Norton Mounds (540)</td></tr>
<tr><td class="crd-td"><strong>Late Prehistoric (1000-1499AD)</strong></td><td class="crd-td">25</td><td class="crd-td">11.000</td><td class="crd-td">440</td><td class="crd-td">Juntunen Late Woodland Town (900)</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact Horizon (1500-1600AD)</strong></td><td class="crd-td">56</td><td class="crd-td">44.840</td><td class="crd-td">801</td><td class="crd-td">Ganondagan (2.600)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Epoch distribution of peak settlement population across the 105 catalogued sites in HU 04.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop.</th><th class="crd-th">Lower Bound</th><th class="crd-th">Upper Bound</th><th class="crd-th">Density (per km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">250</td><td class="crd-td">230</td><td class="crd-td">275</td><td class="crd-td">0,001</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">950</td><td class="crd-td">874</td><td class="crd-td">1k</td><td class="crd-td">0,003</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">2,6k</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">0,008</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">5,6k</td><td class="crd-td">5,2k</td><td class="crd-td">6k</td><td class="crd-td">0,018</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">10,2k</td><td class="crd-td">9,4k</td><td class="crd-td">11k</td><td class="crd-td">0,032</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">16,6k</td><td class="crd-td">15,3k</td><td class="crd-td">17,9k</td><td class="crd-td">0,052</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">25,1k</td><td class="crd-td">23,1k</td><td class="crd-td">27,1k</td><td class="crd-td">0,079</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">35,8k</td><td class="crd-td">32,9k</td><td class="crd-td">38,7k</td><td class="crd-td">0,112</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">48,6k</td><td class="crd-td">44,7k</td><td class="crd-td">52,5k</td><td class="crd-td">0,152</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">64,1k</td><td class="crd-td">59k</td><td class="crd-td">69,2k</td><td class="crd-td">0,201</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">82,4k</td><td class="crd-td">75,8k</td><td class="crd-td">89k</td><td class="crd-td">0,258</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">94,5k</td><td class="crd-td">86,9k</td><td class="crd-td">102,1k</td><td class="crd-td">0,296</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">107,1k</td><td class="crd-td">98,5k</td><td class="crd-td">115,7k</td><td class="crd-td">0,335</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">119,5k</td><td class="crd-td">109,9k</td><td class="crd-td">129,1k</td><td class="crd-td">0,374</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">131,7k</td><td class="crd-td">121,2k</td><td class="crd-td">142,2k</td><td class="crd-td">0,412</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">142,2k</td><td class="crd-td">130,8k</td><td class="crd-td">153,6k</td><td class="crd-td">0,445</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">148,7k</td><td class="crd-td">136,8k</td><td class="crd-td">160,6k</td><td class="crd-td">0,465</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">154,4k</td><td class="crd-td">142k</td><td class="crd-td">166,8k</td><td class="crd-td">0,483</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">158,7k</td><td class="crd-td">146k</td><td class="crd-td">171,4k</td><td class="crd-td">0,496</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">161,9k</td><td class="crd-td">148,9k</td><td class="crd-td">174,9k</td><td class="crd-td">0,506</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">164k</td><td class="crd-td">150,9k</td><td class="crd-td">177,1k</td><td class="crd-td">0,513</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">158,7k</td><td class="crd-td">146k</td><td class="crd-td">171,4k</td><td class="crd-td">0,496</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">153,5k</td><td class="crd-td">141,2k</td><td class="crd-td">165,8k</td><td class="crd-td">0,48</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Headline population trajectory, plus or minus 8 per cent uncertainty intervals and mean density across the Great Lakes (HU 04).</figcaption>
</figure>

# Limitations

## Geomorphic Preservation and Hydrological Boundaries

Four structural constraints qualify HU 04 demographic reconstructions. First, post-glacial isostatic rebound and Holocene Nipissing lake-level transgressions (c. 4000BC to 2000BC) submerged or eroded early shoreline campsites across Lakes Michigan, Huron and Erie [@mason1981greatlakes; @oshea2021central]. Even with composite North American heritage inventories, submerged Lake Stanley and early Lake Michigan coastal horizons remain under-sampled relative to upland moraines, widening uncertainty bounds prior to 2000BC.

Second, USGS Hydrological Unit 04 follows the U.S. drainage boundary along the northern shores of Lakes Superior, Huron and Erie while extending only slightly into the Niagara Peninsula, the Thousand Islands (Boyers Creek, Gordon Island) and northwestern Vermont. Consequently, the dense Huron-Wendat confederacy of Simcoe County and Neutral towns north of Lake Erie fall outside HU 04 and are treated in the adjacent St. Lawrence drainage synthesis, even though Iroquoian ceramic, maize and trade networks spanned both shores [@trigger1976huron; @hart2016nation].

## Chronological Resolution and Protohistoric Inference

Third, because sixteenth-century European explorers did not yet reside inside the Great Lakes basin, the modest 6,4% population dip between 1500AD and 1600AD is inferred from regional radiocarbon summed probability curves [@kelly2025] and St. Lawrence Iroquoian dispersal sequences [@manning2021resolving; @jones2014] rather than direct eyewitness parish censuses.

Fourth, late prehistoric Iroquoian town relocation cycles complicate single-site point series: short-lived sequential Seneca and Onondaga capitals (such as Adams (Seneca), Tram, Cameron (Seneca) and Factory Hollow) overlap in century-scale benchmarks, requiring careful temporal staggering so neighbouring sequential villages are not double-counted inside the same century [@manning2021resolving]. Meanwhile, mobile winter hunting aggregations in northern Wisconsin and the Upper Peninsula remain represented through the continuous rural radiocarbon substratum rather than individual coordinates [@cleland1982fishery].

# Conclusion

Across 319.677 km² of lacustrine lowlands, moraines and northern Shield uplands, Great Lakes Indigenous population grew steadily through the Holocene from 250 inhabitants at 10000BC to 82,4k at 0AD, 142,2k at 1000AD and a pre-contact maximum of 164k (0,51 inhabitants per km²) at 1500AD. Coupling continental non-stationary Matérn kriging (93.129 unique site-periods across 3.833 domestic catchments, regularised $\tau_1 = 1,35$, raw nugget 0, regularised nugget-to-sill 0,04, $R^2 = 0,9990$ to 0,9992) with 105 excavated settlement trajectories resolves the sharp ecological contrast between Lake Superior-Upper Peninsula-Winnebago copper-fishery and Oneota centres (13,41% share in 1500AD), eastern Lake Michigan communities (32,93%) and Huron-Erie-Finger Lakes Iroquoian towns (53,66%).

Unlike Atlantic seaboard drainages or Middle Mississippian riverine centres that contracted earlier, Great Lakes populations sustained 153,5k inhabitants at 1600AD, preserving dense village networks immediately prior to seventeenth-century French contact and Beaver Wars dislocation. Together, the sub-regional trajectories and 105 settlement series link deep post-glacial littoral adaptation cleanly to the colonial and early modern demographic transition.

# Sources

<div id="refs"></div>
