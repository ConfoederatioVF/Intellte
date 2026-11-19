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
hero_caption: "Areal mask and 91 settlements across USGS Hydrological Unit 04 (318,55k km²) from 10000BC to 1600AD. Three sub-regions span Superior copper-rice fisheries, Lake Michigan Oneota plains and Huron-Erie-Finger Lakes."
hero_label: "fig:hero-great-lakes"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

CENTAUR-II reconstructs the Holocene population of the contiguous Great Lakes basin (USGS Hydrological Unit 04, 318.548 km² across 5.507 five-arcminute cells) from 10000BC to 1600AD. Anchored to the terrestrial radiocarbon summed probability distribution of Kelly et al. [@kelly2025] (HU 04 median peak at 1500AD, `N = 871`, 450 cal BP) and non-stationary Matérn ($\nu = 3/2$) kriging over the Northern America archaeological surface (`sites_northern_america`, 93.358 unique site-periods across 4.457 domestic catchments, 14,12x the global radiocarbon database baseline), total population grows from 250 inhabitants in 10000BC to 82,4k at 0AD and peaks at 164k in 1500AD (0,51 inhabitants/km²). Settlement concentrates in the southern agricultural and lacustrine zones of Saginaw-Huron, Maumee-Erie and the Western New York Finger Lakes (88k in 1500AD, 53,66% of the basin total) and the Lake Michigan-Fox-Winnebago corridor (54k, 32,93%), compared with 22k (13,41%) around Lake Superior and the Upper Peninsula. Across 92 ledger candidates, 91 documented archaeological settlements are separated cleanly from the rural substratum prior to spatial scaling, accounting for 21.760 inhabitants (13,27% of total) at 1500AD and 24.695 (16,09%) at 1600AD. Because European penetration into the upper lakes lagged behind Atlantic coastal landings, aggregate basin numbers decline by only 6,4% between 1500AD and 1600AD, standing at 153,5k (0,48 inhabitants/km²) on the eve of seventeenth-century French missionary journeys [@trigger1976huron; @mason1981greatlakes; @jones2014].

# Background

## Hydrological Setting and Ecological Carrying Capacity

Earlier continental population allocations treated the Great Lakes basin as a uniform northern fur-trade periphery, flattening the ecological gradient between boreal Algonquian hunter-fisher-gatherers along the Canadian Shield margin and dense Oneota and Northern Iroquoian maize farmers in the southern lowlands [@fitting1970michigan; @mason1981greatlakes]. Spanning 318,55k km² across Michigan, Wisconsin, Indiana, Ohio, northern Pennsylvania, western New York and western Vermont (Lake Champlain outlet), USGS Hydrological Unit 04 straddles one of the sharpest climatic and pedological boundaries in eastern North America.

South of the 44th parallel, grey-brown luvisols, well-drained glacial moraines and lake-moderated frost-free seasons exceeding 140 days sustained Three Sisters horticulture (maize, beans and squash), ridged wetland fields and palisaded towns housing 800 to 2.600 residents [@overstreet1997oneota; @hart2020using]. Across the Saginaw Bay, Erie plain and western New York uplands, fertile glacial till permitted continuous agricultural intensification from the late eleventh century onward.

North of this tension zone across northern Lower Michigan, the Upper Peninsula and the Lake Superior rim, thin acidic podzols and shorter growing seasons restricted reliable maize harvests. Primary demographic support shifted to predictable autumn and spring spawning runs of lake whitefish (*Coregonus clupeaformis*), lake trout and lake sturgeon alongside wetland wild-rice (*Zizania palustris*) stands along sheltered bays and river mouths [@cleland1982fishery; @martin1999copper].

## Historiography and Radiocarbon Chronology

Recent archaeological syntheses have overturned older assumptions of sparse pre-contact occupation and static late prehistoric village numbers. Kelly et al. [@kelly2025] compiled 871 terrestrial radiocarbon dates within HU 04, identifying a regional summed probability peak at 450 cal BP (1500AD, interquartile range 403 to 497 cal BP). Unlike Middle Mississippian polities in the American Bottom and lower Ohio valley that contracted between 1200AD and 1400AD, Great Lakes farming populations continued to expand through the fifteenth century [@milner2010; @hart2016nation].

High-precision Bayesian radiocarbon chronologies across Northern Iroquoia show rapid village coalescence and relocation sequences from 1450AD through the early seventeenth century [@hart2019analysis; @manning2021resolving]. Nitrogen isotope assays from New York Iroquoian maize confirm sustained soil fertility across multi-decade swidden cycles [@hart2020using], explaining how palisaded towns maintained large regional populations without permanent field exhaustion.

Submerged early Holocene research adds further depth to this demographic record. Remote-sensing surveys along the Alpena-Amberley Ridge beneath modern Lake Huron have documented stone caribou-hunting drive lanes and obsidian tools imported from central Oregon during the Lake Stanley low-water stand around 7000BC [@oshea2021central]. Such finds prove that early post-glacial bands exploited now-flooded lacustrine shelves long before Nipissing high-water stages reached modern shoreline elevations around 3000BC [@mason1981greatlakes; @fitting1970michigan].

European contact also reached HU 04 later and more unevenly than the Atlantic coast or the lower St. Lawrence valley. Whereas St. Lawrence Iroquoian villages disappeared before 1580AD and coastal New England suffered severe epidemics by 1616AD, direct French exploration of Georgian Bay, Lake Michigan and the Finger Lakes began only after 1608AD to 1615AD [@trigger1976huron; @jones2014]. Sixteenth-century population decline inside HU 04 remained modest, driven largely by indirect trade-corridor pathogens and inter-confederacy borderland warfare prior to the seventeenth-century Beaver Wars [@ubelaker2006; @milner2010].

# Methodology

## Sub-Regional Partition and Areal Masks

CENTAUR-II partitions the 5.507 active five-arcminute cells of HU 04 (318.548 km²) into three watershed-aligned sub-regions on the standard 4320x2160 global grid. Each sub-region corresponds to a distinct subsistence base and archaeological tradition without artificial state-border cuts:

1. **Lake Superior Basin and Upper Peninsula (63.552 km², 1.218 pixels, 19,95% of area)**: Encompasses the U.S. Lake Superior watershed, Keweenaw Peninsula, Isle Royale and the Straits of Mackinac-St. Marys outlet (`45,71 N` to `48,12 N`, `70,21 W` to `93,12 W`). Boreal Shield terrain, copper-bearing basalts and inland shore fisheries supported low-density mobile Algonquian bands, Old Copper extraction camps and seasonal whitefish stations [@martin1999copper; @cleland1982fishery].
2. **Lake Michigan, Green Bay, Fox-Winnebago and Lower Michigan West (98.547 km², 1.672 pixels, 30,94% of area)**: Spans the western and eastern littoral of Lake Michigan, Door Peninsula, Winnebago pool and the Grand, Kalamazoo and St. Joseph river valleys (`40,62 N` to `45,62 N`, `84,62 W` to `89,62 W`). Extensive wild-rice marshes and alluvial terraces sustained Middle Woodland mound builders and dense Late Woodland Oneota, Menominee and Potawatomi ridged-field villages [@overstreet1997oneota; @fitting1970michigan].
3. **Saginaw-Huron, Maumee-Erie and Western New York Finger Lakes (156.449 km², 2.617 pixels, 49,11% of area)**: Covers eastern Lower Michigan, the Saginaw Bay wetlands, the Maumee and Cuyahoga watersheds of northern Ohio, the Niagara Frontier, the Genesee and Finger Lakes uplands of New York and the Lake Champlain drainage of Vermont (`40,46 N` to `45,62 N`, `70,54 W` to `84,54 W`). This southern tier supported dense Western Basin, Whittlesey, Erie, Seneca, Cayuga, Onondaga and Oneida horticultural towns [@trigger1976huron; @hart2016nation; @hart2019analysis].

Across all three partitions, areal masks exclude open pelagic Great Lakes water surfaces so rural inhabitants are allocated strictly onto terrestrial five-arcminute cells along habitable shorelines, river valleys and upland moraines.

## Radiocarbon Kriging and Benchmark Calibration

Rural spatial weights derive from the continental Northern America kriging surface (`sites_northern_america`), which replaces earlier sparse single-database runs across all 18 contiguous U.S. hydrological units. By compositing global radiocarbon tables [@bird2022p3k14c] with the Canadian Archaeological Radiocarbon Database (`CARD`), U.S. state heritage inventories, CRM excavation files and Arctic monument registers, the composite database brings together 93.358 unique site-period observations across 4.457 domestic Voronoi catchments (2.678 active inhabited catchments with a median radius of 27,36 km and 90th percentile radius of 59,92 km). This composite density stands at 14,12x the global radiocarbon database baseline inside the continental perimeter, resolving northern Michigan, Wisconsin and Lake Champlain valleys that previously suffered sparse sampling.

## Spatial Covariates and Cross-Frontier Conditioning

To prevent artificial border cliffs where HU 04 meets Ontario along the Detroit, Niagara and St. Lawrence rivers, 171 cross-frontier buffer catchments extend up to 300 km beyond the international perimeter, ensuring continuous demographic gradients across Lakes Huron, Erie and Ontario into the St. Lawrence Lowlands. Within each of ten Holocene horizons spanning 10000BC to 1600AD, site counts undergo Freeman-Tukey variance stabilisation, 1-ring Poisson-Gamma credibility smoothing and weighted least-squares (WLS) regression against smooth biophysical covariates (exponential coastal proximity, 13,5 km fluvial distance decay and terrain slope).

Spatial residuals are interpolated by 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging [@paciorek2006matern]. Across all ten horizons, the calibrated variogram models achieve dimensionless short-range parameter $\tau_1 = 1,41$ (`1,4144`; $\tau_2 = 2,62$, effective short range 38,7 km), raw nugget-to-sill ratio `0,000`, regularised nugget-to-sill ratio `0,04` and WLS residual fit $R^2 = 0,999$ (`0,9991` to `0,9993`).

Chronological trajectories for each sub-region track 23 benchmarks from 10000BC to 1600AD (`1000-year` steps to `0AD`, `200-year` steps to `1000AD`, `100-year` steps to `1500AD`, plus `1550AD` and `1600AD`). Sub-regional benchmark sums follow Kelly et al. [@kelly2025] HU 04 radiocarbon intensity curves scaled to regional carrying-capacity anchors [@milner2010; @ubelaker2006], carrying symmetric `±8%` uncertainty intervals (`92%` confidence bounds across every horizon).

## Settlement Inventory and Rural Subtraction

To prevent nucleated longhouse villages and ridged-field towns from being smeared across surrounding boreal or upland forest cells, 91 documented settlements (`great_lakes_settlements.json`) are subtracted from sub-regional benchmark totals before rural kriging weights scale the remaining population. Each settlement trajectory is built from excavated longhouse counts, palisaded village hectares, midden volumes or regional ceramic phase seriation rather than modern municipal centroids [@trigger1976huron; @overstreet1997oneota; @manning2021resolving].

Where a site falls within 2 km of a duplicate heritage entry, `great_lakes_source_ledger.json5` consolidates the coordinates under a single canonical key so no settlement is counted twice. In HU 04, one duplicate alias for `Lake Winnebago` is excluded from the 92 ledger candidates, leaving 91 distinct settlements distributed across New York (`34`), Michigan (`28`), Ohio (`12`), Wisconsin (`8`), Vermont (`6`), Ontario borderlands (`2`) and northern Indiana (`1`).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Lake Superior and Upper Peninsula</strong></td><td class="crd-td">63.552</td><td class="crd-td">13,4k</td><td class="crd-td">20,2k</td><td class="crd-td">21,8k</td><td class="crd-td">22k</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>2. Lake Michigan and Fox-Winnebago</strong></td><td class="crd-td">98.547</td><td class="crd-td">27,5k</td><td class="crd-td">47k</td><td class="crd-td">53,3k</td><td class="crd-td">54k</td><td class="crd-td">51k</td></tr>
<tr><td class="crd-td"><strong>3. Huron, Erie and Finger Lakes</strong></td><td class="crd-td">156.449</td><td class="crd-td">41,5k</td><td class="crd-td">75k</td><td class="crd-td">86,8k</td><td class="crd-td">88k</td><td class="crd-td">82k</td></tr>
<tr><td class="crd-td"><strong>HU 04 Total</strong></td><td class="crd-td">318.548</td><td class="crd-td">82,4k</td><td class="crd-td">142,2k</td><td class="crd-td">161,9k</td><td class="crd-td">164k</td><td class="crd-td">153,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional area and benchmark population estimates across the Great Lakes (HU 04) from 0AD to 1600AD.</figcaption>
</figure>

# Testing and Validation

Four regional diagnostic checks were executed at GMT+0, all exiting with zero errors:

1. **Radiocarbon Sample Threshold**: HU 04 incorporates `N = 871` terrestrial radiocarbon dates in the regional curve [@kelly2025], exceeding the `400-date` reliability threshold established for summed probability demography by more than twofold [@crema2021rcarbon].
2. **Kriging Sharpness and Fit**: Across all ten Holocene horizons of `sites_northern_america`, dimensionless range stays constant at $\tau_1 = 1,41$ (`<= 1,80`), raw nugget-to-sill ratio equals `0,000`, regularised nugget-to-sill ratio holds at `0,04` (`< 0,45`) and WLS residual fit spans $R^2 = 0,9991$ to `0,9993`.
3. **Gazetteer and Ledger Reconciliation**: Cross-checking `great_lakes_settlements.json` against `great_lakes_source_ledger.json5` produces `0` missing keys, `0` invalid coordinates (`41,09 N` to `48,08 N`, `73,01 W` to `89,11 W`) and exact parity across `92` ledger candidates (`91` included settlements and `1` excluded duplicate entry for `Lake Winnebago`).
4. **Mass Conservation**: Explicit settlement totals account for `21.760` inhabitants (`13,27%` of `164,0k`) at `1500AD` and `24.695` (`16,09%` of `153,5k`) at `1600AD`, leaving strictly positive rural residuals across every sub-region (`5` sites in Superior-Upper Peninsula, `21` in Lake Michigan-Fox-Winnebago and `65` in Huron-Erie-Finger Lakes).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Holocene Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">Range (km)</th><th class="crd-th">WLS R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeoindian &amp; Early Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>2. Middle Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>3. Late Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>4. Early Woodland</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>5. Middle Woodland Hopewell</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>6. Late Woodland</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>7. Emergent Late Prehistoric</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>8. Middle Prehistoric</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>9. Oneota &amp; Late Pre-Contact</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>10. Protohistoric Horizon</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9991</td></tr>
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
<tr><td class="crd-td"><strong>1. Lake Superior and Upper Peninsula</strong></td><td class="crd-td">5</td><td class="crd-td">1.155</td><td class="crd-td">Juntunen (450)</td><td class="crd-td">0,35</td><td class="crd-td">0,32</td></tr>
<tr><td class="crd-td"><strong>2. Lake Michigan and Fox-Winnebago</strong></td><td class="crd-td">21</td><td class="crd-td">10.375</td><td class="crd-td">Lake Winnebago (1.450)</td><td class="crd-td">0,55</td><td class="crd-td">0,52</td></tr>
<tr><td class="crd-td"><strong>3. Huron, Erie and Finger Lakes</strong></td><td class="crd-td">65</td><td class="crd-td">40.025</td><td class="crd-td">Ganondagan (2.600)</td><td class="crd-td">0,56</td><td class="crd-td">0,52</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlement counts, leading centres and overall population density per km² across Great Lakes (HU 04) sub-regions.</figcaption>
</figure>

# Results

## Post-Glacial Colonisation and Archaic Copper-Fishery Economy

As the Laurentide ice sheet retreated northward after 11000BC and proglacial lakes drained through changing St. Lawrence and Ottawa River outlets, mobile Palaeoindian caribou hunters colonised southern Ontario, Michigan, Ohio and western New York along glacial beach ridges [@mason1981greatlakes; @fitting1970michigan]. Early fluted-point and Gainey-phase occupations are anchored at `Hiscock` (`43,00 N, 78,19 W`, occupied from `9500BC` at `25` inhabitants), `Gainey` in Genesee County (`9000BC`, `65`), `Holcombe` (`9000BC`, `60`), `Leavitt` (`9000BC`, `55`), `Petersen` on the western Lake Erie shore (`9000BC`, `45`) and `Reagen` in the Champlain Valley (`8000BC`, `50`). Regional population across HU 04 rises steadily from `250` inhabitants at `10000BC` (`100` in Lake Michigan, `150` in Huron-Erie-New York and `0` in ice-covered Superior) to `950` in `9000BC`, `2,6k` in `8000BC` and `10,2k` by `6000BC`. Across the Lake Stanley low-water stage in Lake Huron around `7000BC`, submerged hunting corridors carried obsidian sourced all the way from central Oregon [@oshea2021central], demonstrating continent-wide exchange networks even when total basin population stood near `5,6k`.

Warming Middle Holocene climates and Nipissing lake-level stabilisation between `5000BC` and `2000BC` fostered intensive regional foraging and early seasonal sedentism, lifting HU 04 population from `16,6k` in `5000BC` to `35,8k` in `3000BC` and `48,6k` in `2000BC` (`0,15` inhabitants/km²). In the Lake Superior sub-region, Late Archaic Old Copper extraction flourished at `Isle Royale-Minong` (`140` in `3000BC`, peaking at `180` in `2000BC`), `Isle Royale Minong Mines` (`145` in `2000BC`) and `Copper Harbor` (`75` in `3000BC`), feeding hammered native copper tools into continental exchange circuits [@martin1999copper]. Simultaneously, stratified Archaic shell and fishing camps emerged across the eastern lakes at `Frontenac Island` (`240` in `2000BC`) and `Lamoka Lake` (`220` in `2000BC`) in New York, `Basin Harbor` in Vermont (`65` in `3000BC`) and `Gordon Island` in the Thousand Islands (`80` in `3000BC`) [@mason1981greatlakes].

<figure class="crd-figure-block" id="fig:traj-great-lakes">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-lakes/fig2_great_lakes_trajectory.png" alt="fig:traj-great-lakes" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in the Great Lakes (HU 04) with uncertainty bounds, 10000BC to 1600AD.</figcaption>
</figure>

## Woodland Fisheries, Mound Centres and Maize Adoption

Between `1000BC` and `1000AD`, Early, Middle and Late Woodland innovations doubled basin numbers from `64,1k` in `1000BC` to `82,4k` at `0AD`, `119,5k` in `600AD` and `142,2k` in `1000AD` (`0,45` inhabitants/km²) (Table 1 and Figure 2). Around Lake Superior and the Straits of Mackinac, the shift from generalised Archaic foraging to autumn gill-netting of lake whitefish and lake trout supported denser multi-family shore aggregations at `Naomikong Point` (`160` in `200AD` to `240` in `500AD`) and later `Juntunen` on Bois Blanc Island (`180` in `800AD`, rising to `450` at `1200AD`) [@cleland1982fishery].

In the Lake Michigan watershed, Hopewellian mound ceremonialism and riverine horticulture anchored `Norton Mounds` along the Grand River (`260` at `0AD`, peaking at `540` in `200AD`), while Lake Michigan fishery continuity persisted at `Rock Island II` in Door County (`500BC` to `1600AD`, reaching `480` at contact) [@fitting1970michigan]. In eastern Wisconsin and northeastern Indiana, early stockaded enclosures such as `Kramer Enclosure` (`220` in `1100AD` to `340` in `1400AD`) mark the transition between dispersed Woodland hamlets and fortified village clusters.

Across the eastern sub-region, Hopewellian and Point Peninsula riverine centres grew at `Schultz` in the Saginaw Valley (`180` in `500BC`, `420` in `200AD`), `Kipp Island` in central New York (`280` in `300AD` to `410` in `600AD`), `Winooski` in Vermont (`160` at `0AD` to `310` in `800AD`) and `Libben` near western Lake Erie (`260` in `400AD` to `620` in `1100AD`). As tropical maize spread northward across the lower Great Lakes after `600AD` to `900AD` and intensified after `1000AD` [@hart2020using], settlement stability increased markedly, shifting demographic weight gradually toward the southern fertile moraines and lake plains.

By `1000AD`, regional population density reached `0,45` inhabitants/km² across the basin as a whole, with Huron-Erie-Finger Lakes already carrying `0,48` inhabitants/km² (`75,0k`), Lake Michigan-Fox-Winnebago carrying `0,48` inhabitants/km² (`47,0k`) and Lake Superior-Upper Peninsula carrying `0,32` inhabitants/km² (`20,2k`). This balance laid the foundation for the Late Prehistoric expansion into palisaded towns.

## Oneota and Northern Iroquoian Expansion (1000AD to 1500AD)

During the Mediaeval Warm Period and early Little Ice Age (`1000AD` to `1500AD`), dual agricultural cores pushed HU 04 population from `142,2k` in `1000AD` to `154,4k` in `1200AD`, `161,9k` in `1400AD` and the Holocene peak of `164,0k` in `1500AD` (`0,51` inhabitants/km², `92%` interval `150,9k` to `177,1k`) (Table 3). In the western basin, Oneota agriculturalists built extensive raised wetland ridged-fields and lake-shore towns around Lake Winnebago and the Fox River corridor [@overstreet1997oneota]. `Lake Winnebago` rose from `580` in `1100AD` to `1.050` in `1300AD` and `1.450` in `1500AD`; neighbouring `Doty Island` grew from `380` in `1200AD` to `680` in `1500AD`, `Lasley's Point` reached `720` in `1500AD`, `Grand River` peaked at `620` in `1300AD` and `Moccasin Bluff` in southwestern Michigan expanded from `420` in `1100AD` to `950` in `1500AD`. Together, Lake Michigan-Fox-Winnebago increased from `47,0k` in `1000AD` (`33,05%` share) to `54,0k` in `1500AD` (`32,93%` share, `0,55` inhabitants/km²).

At the same time, Northern Iroquoian and Lake Erie plain populations experienced decisive village nucleation [@trigger1976huron; @hart2016nation; @hart2019analysis]. Huron-Erie-Finger Lakes grew from `75,0k` in `1000AD` (`52,74%` share) to `86,8k` in `1400AD` and `88,0k` in `1500AD` (`53,66%` share, `0,56` inhabitants/km²) (Figure 3). Palisaded longhouse villages exceeding `500` inhabitants spread from `South Park` (`720` peak) and `White Fort` (`510`) in northern Ohio through `Ripley` (`850` in `1400AD`, `1.350` in `1500AD`) and `Shelby` (`760` in `1500AD`) on the Niagara Frontier to central New York hubs at `Onondaga` (`480` in `1300AD`, `1.100` in `1400AD`, `1.950` in `1500AD`), `Ganondagan` (`1.400` in `1500AD`), `Indian Hill (Onondaga)` (`1.100` in `1500AD`) and `Missisquoi` on Lake Champlain (`680` in `1500AD`). Bayesian radiocarbon modelling across Seneca, Onondaga and Mohawk sequences shows that these large towns did not remain static; instead, confederated communities relocated every 20 to 40 years as local firewood and deer stocks depleted, while maintaining high regional population totals [@manning2021resolving; @hart2020using]. Meanwhile, Lake Superior-Upper Peninsula peaked at `22,0k` in `1500AD` (`13,41%` share, `0,35` inhabitants/km²), supporting dispersed winter hunting bands alongside seasonal fishery camps.

<figure class="crd-figure-block" id="fig:shares-great-lakes">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-lakes/fig3_great_lakes_shares.png" alt="fig:shares-great-lakes" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across the Great Lakes (HU 04) from 10000BC to 1600AD.</figcaption>
</figure>

## Protohistoric Resilience and Late Sixteenth-Century Shift (1500AD to 1600AD)

Unlike Atlantic coastal river valleys or Mississippian floodplains further south, HU 04 displays marked demographic resilience across the sixteenth century. Total basin population edges down by only `3,23%` from `164,0k` in `1500AD` to `158,7k` in `1550AD`, and by a cumulative `6,40%` to `153,5k` in `1600AD` (`0,48` inhabitants/km², bounds `141,2k` to `165,8k`). All three sub-regions participate in this mild contraction: Huron-Erie-Finger Lakes declines `6,82%` from `88,0k` to `82,0k`, Lake Michigan-Fox-Winnebago declines `5,56%` from `54,0k` to `51,0k` and Lake Superior-Upper Peninsula declines `6,82%` from `22,0k` to `20,5k`.

Yet settlement consolidation intensified even as rural dispersion softened. In western and central New York, major Haudenosaunee towns reached their maximum recorded sizes around `1570AD` to `1600AD`: `Ganondagan` (`2.600` in `1600AD`), `Indian Hill (Onondaga)` (`2.400`), `Onondaga` (`2.400`), `Ripley` (`1.650`), `Factory Hollow` (`1.450`), `Cameron (Seneca)` (`1.200`), `Adams (Seneca)` (`1.150` in `1570AD`), `Thurston` (`1.150` in `1600AD`), `Tram` (`1.050` in `1590AD`) and `Genoa Fort` (`980` in `1600AD`) [@manning2021resolving; @hart2019analysis]. In Wisconsin, `Bell Site` (`47WN9`) expanded from `420` in `1400AD` to `1.150` by `1600AD`, while `Doty Island` grew to `840`, partially offsetting slight declines at `Lake Winnebago` (`1.450` to `1.400`) and `Moccasin Bluff` (`950` to `820`). Consequently, explicit catalogued settlement totals rose from `21.760` (`13,27%`) in `1500AD` to `24.695` (`16,09%`) in `1600AD`, reflecting defensive nucleation around fortified towns ahead of the seventeenth-century epidemic and fur-trade upheavals documented by French Jesuits after `1615AD` [@trigger1976huron; @jones2014].

## State and Jurisdictional Distribution of Catalogued Sites

Although HU 04 is partitioned strictly by watershed divides rather than modern political borders, grouping the `91` catalogued settlements by state or province highlights the geographic gradient between the southern agricultural plains and the northern Shield shore (Table 4). Western and central New York holds `34` sites (`37,4%` of total sites) with summed peak populations reaching `28.520`, followed by Michigan with `28` sites (`8.255` summed peaks) spanning both the southern horticultural river valleys and Upper Peninsula copper-fishery stations. Northern Ohio contributes `12` Whittlesey and Western Basin sites (`6.180` summed peaks, led by `South Park` and `Indian Hills (Ohio)` at `720` each), while eastern Wisconsin holds `8` Oneota and Menominee sites (`5.910` summed peaks, led by `Lake Winnebago` at `1.450` and `Bell Site` at `1.150`). At the eastern and western edges of the drainage divide, Vermont's Lake Champlain basin contributes `6` sites (`1.730` summed peaks, led by `Missisquoi` at `680`), Ontario borderlands inside the Niagara and Thousand Islands mask hold `2` sites (`620` summed peaks) and northeastern Indiana contributes `Kramer Enclosure` (`340` peak in `1400AD`).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">State/Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Largest Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>New York</strong></td><td class="crd-td">34</td><td class="crd-td">37,4%</td><td class="crd-td">28.520</td><td class="crd-td">Ganondagan (2.600)</td></tr>
<tr><td class="crd-td"><strong>Michigan</strong></td><td class="crd-td">28</td><td class="crd-td">30,8%</td><td class="crd-td">8.255</td><td class="crd-td">Moccasin Bluff (950)</td></tr>
<tr><td class="crd-td"><strong>Ohio</strong></td><td class="crd-td">12</td><td class="crd-td">13,2%</td><td class="crd-td">6.180</td><td class="crd-td">Indian Hills (Ohio) (720)</td></tr>
<tr><td class="crd-td"><strong>Wisconsin</strong></td><td class="crd-td">8</td><td class="crd-td">8,8%</td><td class="crd-td">5.910</td><td class="crd-td">Lake Winnebago (1.450)</td></tr>
<tr><td class="crd-td"><strong>Vermont</strong></td><td class="crd-td">6</td><td class="crd-td">6,6%</td><td class="crd-td">1.730</td><td class="crd-td">Missisquoi (680)</td></tr>
<tr><td class="crd-td"><strong>Canada</strong></td><td class="crd-td">2</td><td class="crd-td">2,2%</td><td class="crd-td">620</td><td class="crd-td">Boyers Creek (380)</td></tr>
<tr><td class="crd-td"><strong>Indiana</strong></td><td class="crd-td">1</td><td class="crd-td">1,1%</td><td class="crd-td">340</td><td class="crd-td">Kramer Enclosure (340)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Distribution of the 91 Great Lakes (HU 04) catalogued settlements by modern state or Canadian border jurisdiction.</figcaption>
</figure>

Chronological sorting of settlement maxima likewise illustrates the shift from dispersed mobile bands to nucleated farming confederacies (Table 5). Only `4` sites reach their demographic peak during the Palaeoindian and Early Archaic eras (`230` summed peaks), followed by `5` in the Middle and Late Archaic (`925`), `16` during the Woodland millennia (`4.590`), `20` during Late Prehistoric village emergence (`7.630`) and `46` during the Protohistoric century between `1500AD` and `1600AD` (`38.180` summed peaks, `74,06%` of the cumulative gazetteer peak total).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Peak Epoch</th><th class="crd-th">Sites</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Mean Peak</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian &amp; Early Archaic (10000-6001BC)</strong></td><td class="crd-td">4</td><td class="crd-td">230</td><td class="crd-td">58</td><td class="crd-td">Gainey (65)</td></tr>
<tr><td class="crd-td"><strong>Middle &amp; Late Archaic (6000-1001BC)</strong></td><td class="crd-td">5</td><td class="crd-td">925</td><td class="crd-td">185</td><td class="crd-td">Frontenac Island (240)</td></tr>
<tr><td class="crd-td"><strong>Woodland Period (1000BC-999AD)</strong></td><td class="crd-td">16</td><td class="crd-td">4.590</td><td class="crd-td">287</td><td class="crd-td">Norton Mounds (540)</td></tr>
<tr><td class="crd-td"><strong>Late Prehistoric (1000-1499AD)</strong></td><td class="crd-td">20</td><td class="crd-td">7.630</td><td class="crd-td">382</td><td class="crd-td">Bloody Hill (740)</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact Horizon (1500-1600AD)</strong></td><td class="crd-td">46</td><td class="crd-td">38.180</td><td class="crd-td">830</td><td class="crd-td">Ganondagan (2.600)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Epoch distribution of peak settlement population across the 91 catalogued sites in HU 04.</figcaption>
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
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">48,6k</td><td class="crd-td">44,7k</td><td class="crd-td">52,5k</td><td class="crd-td">0,153</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">64,1k</td><td class="crd-td">59k</td><td class="crd-td">69,2k</td><td class="crd-td">0,201</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">82,4k</td><td class="crd-td">75,8k</td><td class="crd-td">89k</td><td class="crd-td">0,259</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">94,5k</td><td class="crd-td">86,9k</td><td class="crd-td">102,1k</td><td class="crd-td">0,297</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">107,1k</td><td class="crd-td">98,5k</td><td class="crd-td">115,7k</td><td class="crd-td">0,336</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">119,5k</td><td class="crd-td">109,9k</td><td class="crd-td">129,1k</td><td class="crd-td">0,375</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">131,7k</td><td class="crd-td">121,2k</td><td class="crd-td">142,2k</td><td class="crd-td">0,413</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">142,2k</td><td class="crd-td">130,8k</td><td class="crd-td">153,6k</td><td class="crd-td">0,446</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">148,7k</td><td class="crd-td">136,8k</td><td class="crd-td">160,6k</td><td class="crd-td">0,467</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">154,4k</td><td class="crd-td">142k</td><td class="crd-td">166,8k</td><td class="crd-td">0,485</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">158,7k</td><td class="crd-td">146k</td><td class="crd-td">171,4k</td><td class="crd-td">0,498</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">161,9k</td><td class="crd-td">148,9k</td><td class="crd-td">174,9k</td><td class="crd-td">0,508</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">164k</td><td class="crd-td">150,9k</td><td class="crd-td">177,1k</td><td class="crd-td">0,515</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">158,7k</td><td class="crd-td">146k</td><td class="crd-td">171,4k</td><td class="crd-td">0,498</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">153,5k</td><td class="crd-td">141,2k</td><td class="crd-td">165,8k</td><td class="crd-td">0,482</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Headline population trajectory, 92 pct uncertainty intervals and mean density across the Great Lakes (HU 04).</figcaption>
</figure>

# Limitations

## Geomorphic Preservation and Hydrological Boundaries

Four structural constraints qualify HU 04 demographic reconstructions. First, post-glacial isostatic rebound and Holocene Nipissing lake-level transgressions (`c. 4000BC` to `2000BC`) submerged or eroded early shoreline campsites across Lakes Michigan, Huron and Erie [@mason1981greatlakes; @oshea2021central]. Even with composite heritage files inside `sites_northern_america`, submerged Lake Stanley and early Lake Michigan coastal horizons remain under-sampled relative to upland moraines, widening uncertainty bounds prior to `2000BC`.

Second, USGS Hydrological Unit 04 follows the U.S. drainage boundary along the northern shores of Lakes Superior, Huron and Erie while extending only slightly into the Niagara Peninsula, the Thousand Islands (`Boyers Creek`, `Gordon Island`) and northwestern Vermont. Consequently, the dense Huron-Wendat confederacy of Simcoe County and Neutral towns north of Lake Erie are excluded here and modelled separately in the St. Lawrence module of CENTAUR-II Part 1, even though Iroquoian ceramic, maize and trade networks spanned both shores [@trigger1976huron; @hart2016nation].

## Chronological Resolution and Protohistoric Inference

Third, because sixteenth-century European explorers did not yet reside inside the Great Lakes basin, the modest `6,40%` population dip between `1500AD` and `1600AD` is inferred from regional radiocarbon summed probability curves [@kelly2025] and St. Lawrence Iroquoian dispersal sequences [@manning2021resolving; @jones2014] rather than direct eyewitness parish censuses.

Fourth, late prehistoric Iroquoian town relocation cycles complicate single-site point series: short-lived sequential Seneca and Onondaga capitals (such as `Adams (Seneca)`, `Tram`, `Cameron (Seneca)` and `Factory Hollow`) overlap in century-scale benchmarks, requiring careful temporal staggering so neighbouring sequential villages are not double-counted inside the same century [@manning2021resolving]. Meanwhile, mobile winter hunting aggregations in northern Wisconsin and the Upper Peninsula remain represented through the continuous rural radiocarbon substratum rather than individual coordinates [@cleland1982fishery].

# Conclusion

Across 318.548 km² of lacustrine lowlands, moraines and northern Shield uplands, Great Lakes Indigenous population grew steadily through the Holocene from `250` inhabitants at `10000BC` to `82,4k` at `0AD`, `142,2k` at `1000AD` and a pre-contact maximum of `164,0k` (`0,51` inhabitants/km²) at `1500AD`. Coupling `sites_northern_america` non-stationary Matérn kriging (`93.358` unique site-periods across `4.457` domestic catchments, $\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04`, $R^2 = 0,999$) with `91` excavated settlement trajectories resolves the sharp ecological contrast between Lake Superior copper-fishery bands (`13,41%` share in `1500AD`), Lake Michigan Oneota ridged-field villages (`32,93%`) and Huron-Erie-Finger Lakes Iroquoian towns (`53,66%`).

Unlike Atlantic seaboard drainages or Middle Mississippian riverine centres that contracted earlier, Great Lakes populations sustained `153,5k` inhabitants at `1600AD`, preserving dense village networks immediately prior to seventeenth-century French contact and Beaver Wars dislocation. Together, the sub-regional trajectories and `91` settlement series link deep post-glacial littoral adaptation cleanly to the colonial and modern modules of CENTAUR-II.

# Sources

<div id="refs"></div>
