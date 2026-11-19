---
title: "Northern Plains Hydrological Unit (HU 10): Demographic Reconstruction"
subtitle: "CENTAUR-II: Missouri Basin, Wyoming High Plains and Earthlodge Villages, 10000BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: northern_plains_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northern_plains_spatial.png"
hero_caption: "Sub-regional areal masks and excavated settlement locations across Northern Plains Hydrological Unit 10 (1,31M km²), spanning Montana, Wyoming, the Middle Missouri Trench and the Lower Missouri prairie-plains."
hero_label: "fig:hero-northern-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This paper reconstructs the human population of Northern Plains Hydrological Unit 10 (1.313.627 km² across 21.081 5-arcminute grid cells) from 10000BC to 1600AD [@kelly2025; @seaber1987hydrologic]. Spanning the entire Missouri River watershed from the Montana and Wyoming Rocky Mountain Front across the Middle Missouri Trench to the Platte, Republican and Lower Missouri confluence prairies, HU 10 displays the clearest east-west bimodal demographic structure in North America inside the Kelly et al. radiocarbon corpus (N = 3.422 dates, pooled median peak 857AD) [@kelly2025]. When decomposed into four ecological sub-regions, high-plains bison-procurement zones in Montana and Wyoming crest around 800AD (36,5k and 29k respectively, aligning closely with the Wyoming-only radiocarbon mode of 772AD), whereas Middle Missouri earthlodge towns and Lower Missouri prairie-plains villages continue growing to 73k and 114k in 1200AD (matching the non-Wyoming HU 10 radiocarbon mode of 1257AD) [@kelly2025; @lehmer1971middle; @frison1991prehistoric; @gover2024seeds].

Spatial disaggregation uses the continental North American non-stationary Matérn ($\nu = 3/2$) kriging surface spanning 493.687 valid land cells (18.561.382 km², or 18,56M km², with 78.938 to 149.138 active inhabited non-wasteland cells across 10 horizons from 13000BC to 1650AD) and built from 93.129 unique site-periods (286.193 horizon site-record sum) across 3.833 domestic catchments (15.517.268 km² / 15,52M km²; 2.570 active, 67,05% coverage; 251 frontier buffers; 14,24x above the 6.539 legacy baseline), achieving regularised dimensionless range $\tau_1 = 1,35$ on all 10 horizons (raw 1,519 to 1,6098, mean 1,5782; $\tau_2 = 2,9025$; effective short range 45,23 km to 47,94 km, mean 47 km), raw nugget 0, regularised nugget-to-sill 0,04 and WLS residual $R^2$ from 0,999 to 0,9992 [@bird2022p3k14c; @kelly2022new]. Across the full basin, combined numbers rose from 1,4k (1,3-1,5k) in 10000BC to 28,3k in 5000BC and 126k (115,9-136,1k) in 0AD, peaked at 236,5k (217,6-255,4k) in 1200AD and stood at 177,5k (163,3-191,7k) in 1600AD alongside 295 catalogued settlements (625 evaluated candidates and 330 exclusions) [@milner2010; @ubelaker2006].



# Background

Northern Plains Hydrological Unit 10 is the largest drainage basin in the contiguous United States, extending over 1,31M km² from alpine headwaters along the Continental Divide in Montana, Wyoming and northern Colorado to the confluence of the Missouri and Mississippi rivers near St. Louis [@seaber1987hydrologic]. Few North American watersheds cross so stark an ecological gradient within a single river system.

Mean annual precipitation climbs roughly threefold from west to east, rising from under 350 mm across the rain-shadowed shortgrass plains of central Montana and Wyoming to more than 900 mm along the tallgrass prairies and oak-hickory gallery valleys of eastern Kansas, Iowa and Missouri [@frison1991prehistoric; @wedel1959kansas]. That climatic slope governed human carrying capacity throughout the Holocene, separating mobile communal bison hunters on the arid western steppe from sedentary maize-bean-squash earthlodge villagers along the eastern Missouri and Platte terraces [@lehmer1971middle; @gover2024seeds].

Human occupation inside HU 10 began during the Terminal Pleistocene as post-glacial warming opened steppe-tundra corridors east of the Cordilleran ice sheet [@hamilton2010archaeological; @bourgeon2017earliest; @mclaren2018terminal]. Early Clovis and pre-Clovis mammoth-and-bison hunting camps appear in the catalogued settlement record by 9900BC at La Sena on Medicine Creek in Nebraska (peak 40), 9500BC at Big Eddy in the Ozark-Prairie borderlands of Missouri (peak 115), 9400BC at Cherokee Sewer in northwestern Iowa (peak 85), 9300BC at Dent in Colorado (peak 45) and 9100BC at Anzick in the upper Yellowstone-Shields drainage of Montana (peak 45).

Subsequent Folsom and Agate Basin bison-procurement camps, exemplified by Lindenmeier on the Colorado Piedmont (8900BC to 8400BC, peak 110) and Agate Basin in eastern Wyoming (8600BC to 7500BC, peak 95), show that specialised big-game foraging sustained low-density mobile bands across the high plains long before Holocene riverine sedentism emerged [@frison1991prehistoric; @neves2012rock]. Across open grassy tablelands, seasonal mobility tracked mammoth and later *Bison antiquus* migrations between summer upland ranges and winter valley shelterbelts.

During the Early and Middle Holocene (8000BC to 2000BC), mid-continental Altithermal warming dried upland interfluves and lowered water tables across the shortgrass plains, driving human bands to concentrate around spring-fed foothill camps such as Myers-Hindman in Montana (7400BC to 1100AD, peak 120) and Hell Gap in Wyoming (9000BC to 3000BC, peak 95), alongside alluvial terraces and upland campsites [@frison1991prehistoric; @peros2010prehistoric]. Between 6000BC and 3000BC, communal arroyo traps and early stone-circle camps proliferated wherever perennial springs survived summer desiccation.

By the Late Archaic and Plains Woodland periods (1000BC to 800AD), cooler and moister climatic conditions rebuilt bison herds across Montana and Wyoming while encouraging semi-sedentary burial-mound and ceramic-bearing hamlets along the Kansas, Platte and Middle Missouri valleys [@wedel1959kansas; @lehmer1971middle]. On the high plains, late prehistoric groups concentrated at seasonal camp and bison-drive localities such as Wahkpa Chu'gn (100BC to 1500AD, peak 310), Timber Ridge (400AD to 900AD, peak 175), Kobold (2500BC to 1500AD, peak 240), Kutoyis (1100AD to 1600AD, peak 250) and Glenrock (1400AD to 1600AD, peak 260) [@frison1991prehistoric].

After 900AD, maize agriculture transformed the eastern half of HU 10 while bypassing the dry western steppe. Along the Missouri River trench in South and North Dakota, Initial and Extended Middle Missouri communities built compact villages of rectangular timber-and-earth lodges on bluff-top terraces overlooking fertile bottomlands, fortified with dry moats and bastioned palisades [@lehmer1971middle].

Representative sites span early settlements such as Mitchell Prehistoric Village (1000AD to 1200AD, peak 720), Sommers (1000AD to 1300AD, peak 880) and Dodd (1050AD to 1550AD, peak 720) through major Late Middle Missouri and Coalescent towns such as Huff Indian Village (1400AD to 1500AD, peak 1,35k), Double Ditch (1500AD to 1600AD, peak 1,85k), Larson (1480AD to 1600AD, peak 1,48k), On-A-Slant (1500AD to 1600AD, peak 1,45k), Big Hidatsa (1450AD to 1600AD, peak 1,32k) and Sully (1480AD to 1600AD, peak 2,65k) [@lehmer1971middle].

Simultaneously, the Lower Missouri, Platte and Kansas sub-region developed dense Plains Village and Oneota networks linked eastward towards the Mississippian core [@pauketat2004cahokia; @gover2024seeds]. Mitchell (1050AD to 1250AD, peak 2,2k) stood on the Illinois confluence seam, while Steed-Kisker (1100AD to 1300AD, peak 680) and Glenwood (800AD to 1480AD, peak 880) represent Mississippian-influenced valley hamlets scattered along lower Missouri bluffs.

Later Oneota and protohistoric Pawnee-Wichita towns consolidated into much larger nucleated settlements at Blood Run on the Big Sioux (1450AD to 1600AD, peak 3,5k), Utz in central Missouri (1450AD to 1600AD, peak 2,6k), Paint Creek (1450AD to 1600AD, peak 1,62k), Burkett (1500AD to 1600AD, peak 1,48k), Wright (1520AD to 1600AD, peak 1,18k) and El Quartelejo (1500AD to 1600AD, peak 380) [@wedel1959kansas; @gover2024seeds].

Between 1250AD and 1400AD, severe plains droughts and endemic village conflict, dramatically attested by the 1300AD fortification and massacre horizon at Crow Creek (peak 850), thinned dispersed farmsteads and drove surviving villagers into fewer, more heavily defended river towns prior to sixteenth-century European contact [@bamforth2018warfare; @milner2010].

# Methodology

## Radiocarbon Calibration and Sub-Regional Partitioning

Temporal calibration draws directly on Kelly et al. Table 1 for Hydrological Unit 10, which compiles N = 3.422 IntCal20 radiocarbon dates (standard error <= 100 years) and explicitly isolates compliance-survey sampling distortion in Wyoming [@kelly2025; @kelly2022new]. Across the full HU 10 sample, Kelly et al. report a pooled median radiocarbon peak at 1.093 cal BP (857AD, full range 1.022 to 1.173 cal BP, interquartile range 1.074 to 1.105 cal BP, mean 1.089 cal BP).

Because federal mineral-extraction compliance surveys heavily oversample the Wyoming Basin (N = 1.421 dates) relative to cultivated alluvial valleys further east, Kelly et al. also tabulate Wyoming separately from the remainder of HU 10 (N = 2.001 dates). Disaggregated in this way, the Wyoming subset peaks at 1.178 cal BP (772AD, range 1.069 to 1.315 cal BP), whereas HU 10 excluding Wyoming peaks nearly five centuries later at 693 cal BP (1257AD, range 557 to 765 cal BP) [@kelly2025].

Summed probability distributions across large radiocarbon corpora provide reliable relative demographic trajectories only when regional climate shocks, taphonomic loss and uneven survey intensity are modelled explicitly, as shown in comparative European and Mesoamerican Holocene syntheses [@peros2010prehistoric; @gromann2023demographic; @kennett2023trans]. To prevent Wyoming compliance surveys from dragging the eastern agricultural chronology backward, and equally to prevent eastern horticultural growth from erasing the real early peak on the western shortgrass plains, HU 10 is partitioned into four 5-arcminute areal masks totalling 21.081 active terrestrial pixels (1.313.627 km²):

1. **Upper Missouri and Milk-Marias Steppe (Montana)**: 3.611 cells (211.050 km², 16,1% of basin area), spanning northern Montana shortgrass prairies and upper Missouri headwaters from 44,46 to 48,88 degrees north and 103,62 to 113,88 degrees west.
2. **Wyoming Basin: Yellowstone, Bighorn, Powder and North Platte**: 4.238 cells (262.924 km², 20% of basin area), spanning Wyoming and northern Colorado high plains from 40,38 to 47,96 degrees north and 100,71 to 111,04 degrees west.
3. **Middle Missouri Trench (Mandan, Hidatsa and Arikara Core)**: 6.350 cells (386.172 km², 29,4% of basin area), encompassing North Dakota, South Dakota and adjacent Big Sioux drainages from 42,04 to 48,79 degrees north and 95,62 to 106,04 degrees west.
4. **Platte, Republican and Lower Missouri Prairie-Plains**: 6.882 cells (453.481 km², 34,5% of basin area), encompassing Nebraska, Kansas, western Iowa, Missouri and eastern Colorado tributaries from 37,12 to 43,71 degrees north and 90,12 to 106,12 degrees west.

## Carrying-Capacity Anchors and Earthlodge Scaling

Sub-regional population totals across all 23 benchmark dates from 10000BC to 1600AD anchor regional ethnographic carrying-capacity envelopes [@ubelaker2006; @milner2010] to sub-regional radiocarbon density curves and excavated earthlodge household capacities [@peros2010prehistoric; @lehmer1971middle; @gover2024seeds].

In the two western sub-regions, carrying capacity derives from late-prehistoric bison herd densities, winter gallery-forest forage and seasonal jump-camp counts, scaling upward smoothly to 800AD before contracting under late Holocene drought cycles and shifts in communal procurement [@frison1991prehistoric].

In the Middle and Lower Missouri basins, household counts from excavated and magnetically surveyed earthlodges (averaging 8 to 12 residents per active structure adjusted by phase contemporaneity) combine with floodplain maize-cultivation acreage to calibrate growth after 400AD up to the 1200AD zenith [@wedel1959kansas; @lehmer1971middle].

## Dasymetric Kriging and Uncertainty Bounds

Pixel-level rural allocation across the 21.081 grid cells of HU 10 draws on the shared continental North American spatial domain, which covers 493.687 valid 5-arcminute terrestrial cells across 18.561.382 km² (18,56M km²), with 78.938 to 149.138 active inhabited non-wasteland cells across 10 horizons (13000BC to 1650AD). Rather than relying solely on raw global radiocarbon files, that domain composites p3k14c and c14bazAAR with United States state archaeological registers, Canadian CARD records and regional survey archives [@bird2022p3k14c; @kelly2022new].

After strict spatial-chronological deduplication per catchment and 200-year bin, the North American composite contains 93.129 unique site-periods (286.193 horizon site-record sum) aggregated onto 3.833 domestic Voronoi catchments spanning 15.517.268 km² (15,52M km²; 2.570 active inhabited catchments, 67,05% coverage; equivalent circular radius $r = \sqrt{A/\pi}$ median 29,48 km and 90th percentile 40,95 km overall, or 29,3 km median and 39,85 km 90th percentile across active catchments; 29,78 km median and 40,69 km 90th-percentile Voronoi radius in the continental diagnostics), an effective site density 14,24x above the 6.539-entry legacy global c14bazAAR baseline inside the continental mask. Catchment counts $y_{i,h}$ in horizon $h$ undergo variance-stabilising Freeman-Tukey transformation and Poisson-Gamma credibility smoothing prior to weighted least-squares (WLS) covariate regression:

$$z_{i,h} = \sqrt{y_{i,h}} + \sqrt{y_{i,h} + 1}, \qquad \mu_h(\mathbf{x}_i) = \beta_{0,h} + \beta_{1,h} N_i + \beta_{2,h} E_i + \beta_{3,h} F_i + \beta_{4,h} C_i$$

where $N_i$, $E_i$, $F_i$ and $C_i$ denote natural-habitat index, ecological richness, 13,5 km fluvial distance decay and coastal proximity respectively. Residuals $r_{i,h} = z_{i,h} - \mu_h(\mathbf{x}_i)$ are then interpolated by 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across ten continental Holocene horizons (13000BC to 1650AD) with covariance kernel:

$$C_h(u_{ij}) = \sigma_h^2 \left(1 + \frac{\sqrt{3}\, u_{ij}}{\tau_1}\right) \exp\!\left(-\frac{\sqrt{3}\, u_{ij}}{\tau_1}\right)$$

where $u_{ij}$ is dimensionless geodesic catchment lag. To prevent linear boundary drop-offs along international and inter-basin seams, 251 cross-frontier buffer catchments condition neighbouring territories up to 300 km beyond the CENTAUR perimeter, while HU 10 itself connects smoothly across the Canadian Prairies (49th parallel), Upper Mississippi, Southern Plains and Upper Colorado boundaries.

Across all ten horizons, fitted North American variograms achieve regularised dimensionless short range $\tau_1 = 1,35$ on every horizon (raw $\tau_1$ 1,519 to 1,6098, mean 1,5782, continental diagnostic 1,5794; $\tau_2 = 2,9025$ or 2,9; effective short range 45,23 km to 47,94 km, mean 47 km), raw nugget-to-sill ratio 0 and regularised nugget-to-sill 0,04 across all 10 horizons and WLS residual $R^2$ from 0,999 to 0,9992. In HU 10, the 13,5 km fluvial decay covariate concentrates rural weights tightly along the Missouri, Yellowstone, Platte, Republican and Kansas river corridors while suppressing population density across arid interfluve uplands.

Because taphonomic destruction in alluvial floodplains, wind-deflated dune fields and rockshelter floors distorts raw artefact recovery rates across millennia, an issue documented across comparative Holocene cave, riverine and steppe deposits [@goldstein2025cultural; @miller2026cave; @klishko2020pleistocene; @stewart2024first; @tryon2018middle; @goff2017reassessing], sub-regional benchmark estimates retain a symmetric $\pm 8\%$ structural uncertainty interval. All diagnostic timestamps follow GMT+0.

<figure class="crd-table-figure" id="tab:subregions-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Grid Cells</th><th class="crd-th">Area (km²)</th><th class="crd-th">Bounding Box</th><th class="crd-th">Peak Year (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Missouri and Milk-Marias Steppe (Montana)</strong></td><td class="crd-td">3.611</td><td class="crd-td">211.050</td><td class="crd-td">44,46-48,88N, 103,62-113,88W</td><td class="crd-td">800AD (36,5k)</td></tr>
<tr><td class="crd-td"><strong>Wyoming Basin: Yellowstone, Bighorn, Powder and North Platte (Kelly HU 10-WY)</strong></td><td class="crd-td">4.238</td><td class="crd-td">262.924</td><td class="crd-td">40,38-47,96N, 100,71-111,04W</td><td class="crd-td">800AD (29k)</td></tr>
<tr><td class="crd-td"><strong>Middle Missouri Trench: Mandan, Hidatsa and Arikara Core (ND and SD)</strong></td><td class="crd-td">6.350</td><td class="crd-td">386.172</td><td class="crd-td">42,04-48,79N, 95,62-106,04W</td><td class="crd-td">1200AD (73k)</td></tr>
<tr><td class="crd-td"><strong>Platte, Republican and Lower Missouri Prairie-Plains (NE and KS and IA and MO)</strong></td><td class="crd-td">6.882</td><td class="crd-td">453.481</td><td class="crd-td">37,12-43,71N, 90,12-106,12W</td><td class="crd-td">1200AD (114k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, grid cells, land areas and peak population dates across Northern Plains HU 10.</figcaption>
</figure>

# Testing and Validation

Four independent validation tests evaluate the chronological, spatial and gazetteer consistency of the Northern Plains reconstruction:

1. **East-West Bimodal Chronology Check**: Upper Missouri (36,5k) and Wyoming (29k) reach their sub-regional maxima in 800AD, closely tracking the Kelly et al. Wyoming radiocarbon median mode of 772AD (1.178 cal BP) within 28 years [@kelly2025]. Conversely, the Middle Missouri Trench (73k) and Platte-Republican-Lower Missouri sub-region (114k) peak in 1200AD, aligning within 57 years of the non-Wyoming HU 10 radiocarbon median mode of 1257AD (693 cal BP) [@kelly2025; @gover2024seeds].
2. **Late Prehistoric Contraction Check**: Between 1200AD and 1400AD, combined Middle and Lower Missouri populations drop by 14,4% (from 187k to 160k), matching tree-ring drought reconstructions, fortified-town aggregation along mainstem Missouri bluffs, skeletal trauma evidence at Crow Creek (1300AD) and the concurrent decline of the Cahokia-Mississippian periphery [@bamforth2018warfare; @pauketat2004cahokia; @lehmer1971middle].
3. **Variogram and Catchments Calibration**: Across the North American spatial domain (493.687 valid cells, 78.938 to 149.138 active cells across 10 horizons 13000BC to 1650AD), the 93.129 unique site-periods (286.193 horizon site-record sum) distributed across 3.833 domestic catchments (2.570 active, 67,05% coverage; 251 buffers; 14,24x baseline) maintain regularised $\tau_1 = 1,35$ on all 10 horizons (raw 1,519 to 1,6098, mean 1,5782, diagnostic 1,5794, well below the 1,8 sharpness ceiling), $\tau_2 = 2,9025$ (effective short range 45,23 km to 47,94 km, mean 47 km), raw nugget 0 and regularised nugget-to-sill 0,04 across all 10 horizons (< 0,45 limit) and WLS residual $R^2$ from 0,999 to 0,9992 (Table \ref{tab:kriging-northern-plains}).
4. **Gazetteer and Source-Ledger Reconciliation**: Cross-checking the settlement gazetteer against the regional source ledger confirms 295 included settlements spanning 795 benchmark observations (2,69 mean observations per settlement, 161 entries with >= 3 observations, 9900BC to 1600AD) across all four sub-regions (15 in Upper Missouri Montana, 15 in Wyoming Basin, 133 in Middle Missouri Dakotas and 132 in Lower Missouri Platte-Kansas) alongside 330 excluded entries (317 duplicate-alias consolidations within 2 km and 13 unquantified non-habitation exclusions), summing exactly to 625 ledger candidates with 0 unaccounted records.

Both early Palaeoindian camps (Anzick 9100BC to 8900BC, Lindenmeier 8900BC to 8400BC, La Sena 9900BC to 9500BC) and late protohistoric earthlodge towns are explicitly represented inside the 295-site inventory, leaving zero discrepancy between point-settlement ledgers and sub-regional background totals.

<figure class="crd-table-figure" id="tab:kriging-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Tau 1</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">WLS R²</th><th class="crd-th">Mean</th><th class="crd-th">99th Pct</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td><td class="crd-td">0,019</td><td class="crd-td">0,107</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0687</td><td class="crd-td">0,339</td></tr>
<tr><td class="crd-td"><strong>Late Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0679</td><td class="crd-td">0,395</td></tr>
<tr><td class="crd-td"><strong>Early Woodland and Formative</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,1291</td><td class="crd-td">0,645</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland (Hopewell)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,161</td><td class="crd-td">0,909</td></tr>
<tr><td class="crd-td"><strong>Late Woodland and Dorset</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,1999</td><td class="crd-td">1,124</td></tr>
<tr><td class="crd-td"><strong>Early Mississippian (Pueblo II)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,4874</td><td class="crd-td">2,396</td></tr>
<tr><td class="crd-td"><strong>Middle Mississippian (Pueblo III)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,3553</td><td class="crd-td">1,963</td></tr>
<tr><td class="crd-td"><strong>Late Precontact (Thule and Oneota)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,3901</td><td class="crd-td">2,076</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact Horizon</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,5262</td><td class="crd-td">2,719</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> North American Matérn variogram parameters and kriged density moments across ten Holocene horizons.</figcaption>
</figure>

# Results

## Long-Term Basin Trajectory

Population across Northern Plains HU 10 expanded more than one-hundred-and-sixty-fold between the Terminal Pleistocene and the Middle Holocene-Plains Village zenith (Figure \ref{fig:trajectory-northern-plains} and Table \ref{tab:trajectory-northern-plains}). At 10000BC, sparse Clovis and early foraging bands numbered roughly 1,4k (1,29k-1,51k, or 0,11 persons per 100 km²), rising to 3,15k in 9000BC, 6,35k in 8000BC and 11,2k in 7000BC as Early Holocene grasslands stabilised.

Middle Holocene growth carried the basin to 28,3k (26-30,6k, 2,15 per 100 km²) by 5000BC, 40,7k by 4000BC, 55,8k by 3000BC and 74,6k (68,6-80,6k, 5,68 per 100 km²) by 2000BC [@peros2010prehistoric; @frison1991prehistoric]. Across the Late Archaic and Plains Woodland transition, regional totals crossed 97,4k in 1000BC and reached 126k (115,9-136,1k, 9,59 per 100 km²) at 0AD.

Expanding ceramic woodland hamlets in the eastern prairies and bison-procurement intensification across Montana and Wyoming lifted HU 10 to 146,5k in 200AD, 168k in 400AD (12,79 per 100 km²), 190,5k in 600AD and 211,5k (194,6-228,4k, 16,1 per 100 km²) in 800AD [@lehmer1971middle; @wedel1959kansas].

After 800AD, the two halves of the basin diverged sharply. Between 800AD and 1200AD, combined population in Montana and Wyoming contracted by 24,4% (from 65,5k to 49,5k, and further to 38,5k by 1600AD), while Middle Missouri and Lower Missouri agricultural villages added 41k inhabitants (climbing from 146k to 187k), driving overall HU 10 population to its pre-contact peak of 236,5k (217,6-255,4k, 18 per 100 km²) in 1200AD [@gover2024seeds].

During the thirteenth and fourteenth centuries, climatic deterioration and intensified village warfare pushed total numbers down to 229k in 1300AD (17,43 per 100 km²) and 202,2k (186-218,4k, 15,39 per 100 km²) in 1400AD [@bamforth2018warfare]. Consolidation into large Coalescent Mandan-Hidatsa-Arikara towns, Omaha-Oneota centres and Wichita-Pawnee river villages cushioned subsequent losses, leaving 194k in 1500AD, 185,7k in 1550AD and 177,5k (163,3-191,7k, 13,51 per 100 km²) in 1600AD as early indirect Old World trade and pathogen disturbances began penetrating the plains interior [@milner2010; @ubelaker2006].

<figure class="crd-figure-block" id="fig:trajectory-northern-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-plains/fig2_northern_plains_trajectory.png" alt="fig:trajectory-northern-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory across Northern Plains HU 10 from 10000BC to 1600AD, with shaded 8% uncertainty band.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:trajectory-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Missouri and Milk-Marias Steppe (Montana)</strong></td><td class="crd-td">350</td><td class="crd-td">6,6k</td><td class="crd-td">24k</td><td class="crd-td">31k</td><td class="crd-td">36,5k</td><td class="crd-td">32,5k</td><td class="crd-td">28,5k</td><td class="crd-td">23,5k</td></tr>
<tr><td class="crd-td"><strong>Wyoming Basin: Yellowstone, Bighorn, Powder and North Platte (Kelly HU 10-WY)</strong></td><td class="crd-td">300</td><td class="crd-td">5k</td><td class="crd-td">19k</td><td class="crd-td">25k</td><td class="crd-td">29k</td><td class="crd-td">21,5k</td><td class="crd-td">17,5k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Middle Missouri Trench: Mandan, Hidatsa and Arikara Core (ND and SD)</strong></td><td class="crd-td">250</td><td class="crd-td">6,5k</td><td class="crd-td">31k</td><td class="crd-td">42k</td><td class="crd-td">56k</td><td class="crd-td">69k</td><td class="crd-td">71k</td><td class="crd-td">54k</td></tr>
<tr><td class="crd-td"><strong>Platte, Republican and Lower Missouri Prairie-Plains (NE and KS and IA and MO)</strong></td><td class="crd-td">500</td><td class="crd-td">10,2k</td><td class="crd-td">52k</td><td class="crd-td">70k</td><td class="crd-td">90k</td><td class="crd-td">108k</td><td class="crd-td">112k</td><td class="crd-td">85k</td></tr>
<tr><td class="crd-td"><strong>Northern Plains HU 10 Total</strong></td><td class="crd-td">1,4k</td><td class="crd-td">28,3k</td><td class="crd-td">126k</td><td class="crd-td">168k</td><td class="crd-td">211,5k</td><td class="crd-td">231k</td><td class="crd-td">229k</td><td class="crd-td">177,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Benchmark population series by sub-region in Northern Plains HU 10, 10000BC-1600AD.</figcaption>
</figure>

## Sub-Regional Composition and Ecological Zones

The regional demographic centre of gravity shifted steadily eastward across the Holocene (Figure \ref{fig:shares-northern-plains}). In 10000BC, the Upper Missouri (350, 25%) and Wyoming Basin (300, 21,4%) together held 46,4% of HU 10 inhabitants (650 of 1,4k), reflecting broad parity across open mammoth and bison range. By 0AD, agricultural and Woodland river density in the Platte, Republican and Lower Missouri (52k, 41,3%) alongside the Middle Missouri Trench (31k, 24,6%) had lowered the combined western share to 34,1% (43k of 126k).

As western hunting populations peaked in 800AD, reaching 17,29 persons per 100 km² in the Upper Missouri (36,5k) and 11,03 per 100 km² in the Wyoming Basin (29k), their combined share stood at 31%. Thereafter, rapid Plains Village expansion carried the Middle Missouri Trench to 73k (18,9 per 100 km², 30,9% share) and the Platte-Lower Missouri Prairie-Plains to 114k (25,14 per 100 km², 48,2% share) in 1200AD, giving the two eastern sub-regions 79,1% of the 236,5k basin total. Despite fourteenth-century contractions, the eastern corridors maintained 79,9% of basin population in 1300AD (183k of 229k) and 78,3% in 1600AD (139k of 177,5k) [@lehmer1971middle; @wedel1959kansas].

### Upper Missouri and Milk-Marias Steppe

Covering 211.050 km² (16,1% of HU 10), northern Montana's Upper Missouri and Milk-Marias plains climbed steadily from 350 inhabitants in 10000BC (0,17 per 100 km²) to 6,6k in 5000BC, 15,6k in 2000BC and 24k at 0AD. Early mobile bands anchored along the Sun, Teton, Marias and Milk valleys used stone-lined tipi rings and toolstone quarries, leaving stratified deposits such as Indian Creek (9000BC to 200BC), MacHaffie (8400BC to 2000BC) and Barton Gulch (8300BC to 100BC) along the upper mountain front [@frison1991prehistoric].

During the Plains Woodland and Late Prehistoric transition, Besant and Avonlea bow-and-arrow hunters transformed communal bison procurement across the northern steppe. Anchored by long-lived foothill camps and seasonal drives including Wahkpa Chu'gn (100BC to 1500AD, peak 310), Timber Ridge (400AD to 900AD, peak 175), Bootlegger Trail (1100AD to 1450AD, peak 190), Kutoyis (1100AD to 1600AD, peak 250) and Boarding School Bison Drive (1400AD to 1600AD, peak 340), the sub-region reached its 800AD crest of 36,5k (17,29 persons per 100 km²) [@frison1991prehistoric; @kelly2025].

As severe late Holocene droughts thinned upland herds and shifted exchange corridors eastward toward the Missouri Trench, population eased to 32,5k in 1100AD, 30,5k in 1200AD, 26k in 1400AD and 23,5k (11,13 per 100 km², 13,2% of HU 10) in 1600AD. Its 15 catalogued settlements (5,1% of the basin total) span early Palaeoindian foothill occupations through late prehistoric seasonal hunting camps.

### Wyoming Basin and Black Hills

Encompassing 262.924 km² (20% of HU 10) across the Yellowstone, Bighorn, Powder and North Platte drainages, the Wyoming Basin tracked a parallel steppe curve from 300 in 10000BC (0,11 per 100 km²) to 5k in 5000BC, 12,2k in 2000BC and 19k at 0AD. Early occupations clustered at foothill springs, terraces and intermontane passes, notably Anzick (9100BC to 8900BC, peak 45), Hell Gap (9000BC to 3000BC, peak 95), Casper (8200BC to 7800BC, peak 80), Horner (7900BC to 7000BC, peak 85) and Myers-Hindman (7400BC to 1100AD, peak 120) [@frison1991prehistoric].

Reaching its maximum of 29k (11,03 per 100 km²) at 800AD, the Wyoming Basin tracked the dense mid-Holocene to Late Woodland radiocarbon signal recorded in Kelly et al. Table 1 [@kelly2025]. Over the subsequent four centuries, however, Wyoming declined more sharply than Montana, dropping 34,5% from 29k in 800AD to 19k in 1200AD and 16,2k in 1400AD.

By 1600AD, population stood at 15k (5,71 per 100 km², 8,5% of HU 10). Its 15 catalogued settlements (5,1% of the basin total) pair deep Archaic foothill localities with late prehistoric plains camps and the Lower Yellowstone horticultural village at Hagen (1300AD to 1500AD, peak 420), alongside Glenrock (1400AD to 1600AD, peak 260), Kobold (2500BC to 1500AD, peak 240), Highwalker (1100AD to 1500AD, peak 180) and Signal Butte (2600BC to 500AD, peak 170) [@frison1991prehistoric].

### Middle Missouri Trench

Spanning 386.172 km² (29,4% of HU 10) across North and South Dakota and adjacent Big Sioux terraces, the Middle Missouri Trench emerged after 900AD as the fortified village heartland of the Northern Plains. Rising slowly from 250 in 10000BC (0,06 per 100 km²) and 6,5k in 5000BC to 31k in 0AD, Woodland burial mounds and riverine hunting-gathering lifted numbers to 42k in 400AD and 56k in 800AD [@lehmer1971middle].

Following the spread of northern flint maize, beans and sunflowers suited to short growing seasons, Initial and Extended Middle Missouri populations surged to 69k in 1100AD and peaked at 73k (18,9 per 100 km², 30,9% of HU 10) in 1200AD. Timbered floodplains provided cottonwood, ash and elm poles for large earthlodges as well as winter fuel, while fertile river bottomlands yielded reliable maize harvests even during dry upland summers [@lehmer1971middle].

Fourteenth-century droughts and endemic warfare, marked by bastioned palisades and the Crow Creek massacre (1300AD, peak 850), cut the trench total to 61k in 1400AD before Coalescent and Mandan-Hidatsa-Arikara consolidation stabilised numbers at 58k in 1500AD and 54k (13,98 per 100 km², 30,4% of HU 10) in 1600AD [@bamforth2018warfare]. Home to 133 of the 295 catalogued settlements (45,1%), the sub-region hosts iconic fortified towns including Blood Run (3,5k), Sully (2,65k), Double Ditch (1,85k), Larson (1,48k), On-A-Slant (1,45k), Huff Indian Village (1,35k), Big Hidatsa (1,32k) and Scattered Village (1,28k).

### Platte, Republican and Lower Missouri Prairie-Plains

Covering 453.481 km² (34,5% of HU 10) across Nebraska, Kansas, western Iowa, Missouri and eastern Colorado, the tallgrass prairie-plains consistently formed the largest demographic reservoir in HU 10. Numbers expanded from 500 in 10000BC (35,7% share) and 10,2k in 5000BC to 52k at 0AD, sustained by deep loess river terraces, oak-hickory mast woodlands and productive Kansas-Missouri bottomlands [@wedel1959kansas].

Woodland and early horticultural expansion carried the sub-region to 70k in 400AD, 90k in 800AD and a peak of 114k (25,14 per 100 km², 48,2% share) in 1200AD [@gover2024seeds; @pauketat2004cahokia]. During the 1000AD to 1300AD maximum, dispersed Central Plains Tradition farmsteads occupied almost every secondary stream terrace across the Republican, Loup and Platte valleys, while Mitchell (2,2k), Steed-Kisker (680) and Glenwood (880) linked the eastern Missouri corridor to Mississippian river trade.

As prolonged fourteenth-century aridification emptied the central high-plains farmsteads, populations retreated eastward and southward into nucleated protohistoric Pawnee, Kansa, Missouri and Wichita-Quivira towns. Totals eased to 99k in 1400AD, 95k in 1500AD and 85k (18,74 per 100 km², 47,9% share) in 1600AD, anchored by 132 catalogued settlements (44,7% of HU 10) led by Utz (2,6k), Utz Oneota Town (1,8k), Paint Creek (1,62k), Burkett (1,48k), Big Osage Earthlodge Town (1,4k), Wright (1,18k), Leary (980), Gray-Wolfe (980), Pawnee Indian Village (950) and Palmer (940) [@wedel1959kansas; @gover2024seeds].

<figure class="crd-table-figure" id="tab:density-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">0AD</th><th class="crd-th">800AD</th><th class="crd-th">1200AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Missouri and Milk-Marias Steppe (Montana)</strong></td><td class="crd-td">0,17</td><td class="crd-td">11,37</td><td class="crd-td">17,29</td><td class="crd-td">14,45</td><td class="crd-td">11,13</td></tr>
<tr><td class="crd-td"><strong>Wyoming Basin: Yellowstone, Bighorn, Powder and North Platte (Kelly HU 10-WY)</strong></td><td class="crd-td">0,11</td><td class="crd-td">7,23</td><td class="crd-td">11,03</td><td class="crd-td">7,23</td><td class="crd-td">5,71</td></tr>
<tr><td class="crd-td"><strong>Middle Missouri Trench: Mandan, Hidatsa and Arikara Core (ND and SD)</strong></td><td class="crd-td">0,06</td><td class="crd-td">8,03</td><td class="crd-td">14,5</td><td class="crd-td">18,9</td><td class="crd-td">13,98</td></tr>
<tr><td class="crd-td"><strong>Platte, Republican and Lower Missouri Prairie-Plains (NE and KS and IA and MO)</strong></td><td class="crd-td">0,11</td><td class="crd-td">11,47</td><td class="crd-td">19,85</td><td class="crd-td">25,14</td><td class="crd-td">18,74</td></tr>
<tr><td class="crd-td"><strong>Northern Plains HU 10 Total</strong></td><td class="crd-td">0,11</td><td class="crd-td">9,59</td><td class="crd-td">16,1</td><td class="crd-td">18</td><td class="crd-td">13,51</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population density (persons per 100 km²) across Northern Plains HU 10 at selected Holocene benchmarks.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:shares-northern-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-plains/fig3_northern_plains_shares.png" alt="fig:shares-northern-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional percentage shares of total population across Northern Plains HU 10 from 10000BC to 1600AD.</figcaption>
</figure>

## Settlement Hierarchy and Riverine Aggregation

The 295 catalogued settlements (795 total benchmark entries spanning 9900BC to 1600AD) trace the transition from dispersed mobile camps to large riverine town complexes across ten states (73 in South Dakota, 55 in Nebraska, 50 in North Dakota, 31 in Kansas, 27 in Iowa, 20 in Montana, 20 in Missouri, 9 in Wyoming, 9 in Colorado and 1 on the Illinois border; Table \ref{tab:coverage-northern-plains}). Fifty-five sites originate before 0AD, twenty-nine between 0AD and 999AD, and 211 from 1000AD onward. Individual site peaks range from 40 at La Sena (9900BC to 9500BC) and 45 at Anzick (9100BC) and Dent (9200BC) to 3.500 at Blood Run (1600AD), with a median settlement peak of 400 inhabitants.

Late prehistoric urban concentration sits overwhelmingly in the Middle and Lower Missouri corridors. At 1600AD, the 58 active catalogued settlements alone sum to 50,4k residents, 28,4% of the entire basin population, highlighting how nucleated earthlodge and Oneota towns concentrated riverine labour while smaller hunting and seasonal camps continued to exploit steppe uplands, echoing comparative long-run steppe-forager subsistence balances documented across northern Eurasia [@losey2013burying; @frison1991prehistoric].

Across the middle ranks of the 295-site hierarchy, 15 settlements exceed 1,25k inhabitants at peak, 48 exceed 700 inhabitants and 195 reach at least 300 inhabitants, forming a smooth log-linear settlement curve above the small Archaic hunting camps. Across the full inventory, only 30 of the 295 sites sit inside the two western steppe and basin sub-regions (10,2%, with 29 located inside Montana and Wyoming), confirming that nearly nine-tenths of nucleated settlements were tied directly to eastern riverine agriculture rather than open-steppe nomadism.

<figure class="crd-table-figure" id="tab:coverage-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Obs.</th><th class="crd-th">Pre-0AD</th><th class="crd-th">1000AD+</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Missouri and Milk-Marias Steppe (Montana)</strong></td><td class="crd-td">15</td><td class="crd-td">5,1%</td><td class="crd-td">48</td><td class="crd-td">8</td><td class="crd-td">4</td><td class="crd-td">Boarding School Bison Drive (340)</td></tr>
<tr><td class="crd-td"><strong>Wyoming Basin: Yellowstone, Bighorn, Powder and North Platte (Kelly HU 10-WY)</strong></td><td class="crd-td">15</td><td class="crd-td">5,1%</td><td class="crd-td">41</td><td class="crd-td">12</td><td class="crd-td">3</td><td class="crd-td">Hagen (420)</td></tr>
<tr><td class="crd-td"><strong>Middle Missouri Trench: Mandan, Hidatsa and Arikara Core (ND and SD)</strong></td><td class="crd-td">133</td><td class="crd-td">45,1%</td><td class="crd-td">347</td><td class="crd-td">13</td><td class="crd-td">111</td><td class="crd-td">Blood Run (3,5k)</td></tr>
<tr><td class="crd-td"><strong>Platte, Republican and Lower Missouri Prairie-Plains (NE and KS and IA and MO)</strong></td><td class="crd-td">132</td><td class="crd-td">44,7%</td><td class="crd-td">359</td><td class="crd-td">22</td><td class="crd-td">93</td><td class="crd-td">Utz (2,6k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Distribution of the 295 catalogued settlements, observations, chronological starts and leading sites across HU 10 sub-regions.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:states-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">State</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>South Dakota</strong></td><td class="crd-td">73</td><td class="crd-td">24,7%</td><td class="crd-td">196</td><td class="crd-td">Sully (2,6k)</td></tr>
<tr><td class="crd-td"><strong>Nebraska</strong></td><td class="crd-td">55</td><td class="crd-td">18,6%</td><td class="crd-td">139</td><td class="crd-td">Burkett (1,5k)</td></tr>
<tr><td class="crd-td"><strong>North Dakota</strong></td><td class="crd-td">50</td><td class="crd-td">16,9%</td><td class="crd-td">125</td><td class="crd-td">Double Ditch (1,8k)</td></tr>
<tr><td class="crd-td"><strong>Kansas</strong></td><td class="crd-td">31</td><td class="crd-td">10,5%</td><td class="crd-td">75</td><td class="crd-td">Paint Creek (1,6k)</td></tr>
<tr><td class="crd-td"><strong>Iowa</strong></td><td class="crd-td">27</td><td class="crd-td">9,2%</td><td class="crd-td">87</td><td class="crd-td">Blood Run (3,5k)</td></tr>
<tr><td class="crd-td"><strong>Missouri</strong></td><td class="crd-td">20</td><td class="crd-td">6,8%</td><td class="crd-td">57</td><td class="crd-td">Utz (2,6k)</td></tr>
<tr><td class="crd-td"><strong>Montana</strong></td><td class="crd-td">20</td><td class="crd-td">6,8%</td><td class="crd-td">62</td><td class="crd-td">Hagen (420)</td></tr>
<tr><td class="crd-td"><strong>Colorado</strong></td><td class="crd-td">9</td><td class="crd-td">3,1%</td><td class="crd-td">28</td><td class="crd-td">Bayou Gulch (180)</td></tr>
<tr><td class="crd-td"><strong>Wyoming</strong></td><td class="crd-td">9</td><td class="crd-td">3,1%</td><td class="crd-td">22</td><td class="crd-td">Glenrock (260)</td></tr>
<tr><td class="crd-td"><strong>Illinois</strong></td><td class="crd-td">1</td><td class="crd-td">0,3%</td><td class="crd-td">4</td><td class="crd-td">Mitchell (2,2k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Jurisdictional distribution of the 295 catalogued settlements across the ten states intersecting Northern Plains HU 10.</figcaption>
</figure>

# Limitations

Four principal limitations constrain demographic inference in Northern Plains HU 10. First, petroleum, gas and coal compliance surveys inflate radiocarbon sampling density in the Wyoming Basin (N = 1.421) relative to privately farmed agricultural terraces in Nebraska, Kansas and Iowa, necessitating explicit sub-regional stratification rather than naive pooled basin curves [@kelly2025; @kelly2022new]. Without that regional split, compliance-driven dates from intermontane basins pull the inferred peak of the entire watershed nearly four centuries earlier than the actual zenith of Missouri Valley village life.

Second, nomadic skin-tipi camps and small upland lithic scatters on the shortgrass steppe leave ephemeral hearths and minimal structural architecture compared with deeply stratified fortified earthlodges along the Missouri River, creating systematic preservation differences between mobile hunters and sedentary villagers [@frison1991prehistoric; @lehmer1971middle]. Within the 295-site gazetteer, unquantified caves, rockshelters, mines, quarries, medicine wheels and major buffalo jumps (13 non-habitation ledger exclusions) are separated from quantified residential camps, so mobile band numbers continue to draw heavily on carrying-capacity priors and regional radiocarbon curves.

Third, dynamic alluvial cut-and-fill cycles along the meandering Platte, Republican, Missouri and Yellowstone floodplains have either deeply buried or laterally eroded Early and Middle Holocene terrace occupations, a geomorphic filter familiar from comparative Pleistocene-Holocene alluvial and cave sequences [@goff2017reassessing; @miller2026cave; @klishko2020pleistocene]. Equally, twentieth-century mainstem Missouri reservoirs inundated hundreds of unexcavated earthlodge terraces prior to full survey coverage, anchoring many riverine village estimates toward Smithsonian River Basin Surveys salvage records [@lehmer1971middle].

Fourth, sixteenth-century population totals between 1550AD and 1600AD carry elevated structural uncertainty because early European trade goods and infectious pathogens travelled inland along inter-tribal river networks ahead of direct documentary observation [@milner2010; @ubelaker2006]. Future digitisation of state historic preservation inventories across the Dakotas, Nebraska and Montana can further tighten mid-Holocene catchment priors without altering the four-sub-region spatial architecture or the 251 cross-frontier conditioning catchments along the basin rim.

# Conclusion

Northern Plains Hydrological Unit 10 demonstrates why continental reconstructions must respect sub-basin ecological boundaries. Rather than following a single pan-regional growth curve, the Missouri watershed split along its west-to-east moisture gradient: high-plains bison-hunting bands across Montana and Wyoming reached their demographic maximum around 800AD (65,5k combined) and then declined, whereas maize-farming earthlodge and Oneota towns in the Middle and Lower Missouri basins expanded to 187k by 1200AD, lifting the basin total to 236,5k, and still sustained 139k inhabitants (78,3% of the 177,5k basin population) on the eve of sustained European contact in 1600AD.

Three structural findings stand out across the 11.600-year reconstruction. First, eastern riverine agriculture shifted the demographic centre of gravity permanently after 0AD, raising the combined share of the Middle and Lower Missouri sub-regions from 53,6% in 10000BC to 79,1% in 1200AD. Second, fourteenth-century droughts and fortified-town conflicts trimmed total numbers by 14,5% between 1200AD and 1400AD without reversing the long-run concentration of population inside major river corridors.

Third, coupling 93.129 multi-registry North American site-periods (286.193 horizon site-record sum) across 3.833 domestic catchments (2.570 active, 67,05% coverage; 251 frontier buffers; 493.687 valid land cells; 14,24x baseline; regularised $\tau_1 = 1,35$, raw mean 1,5782, $\tau_2 = 2,9025$, effective short range 45,23 km to 47,94 km with mean 47 km, raw nugget 0 and regularised nugget-to-sill 0,04 across all 10 horizons, $R^2$ 0,999 to 0,9992) with 295 reconciled settlements (625 ledger candidates and 330 exclusions) resolves survey-bias distortions in Wyoming while preserving the continuous spatial transition from Rocky Mountain foothills to the Mississippi confluence.

# Sources

<div id="refs"></div>
