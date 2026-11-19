---
title: "Upper Mississippi Hydrological Unit (HU 07): Demographic Reconstruction"
subtitle: "CENTAUR-II: Hopewell, Effigy Mounds and Cahokia-American Bottom Series, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: upper_mississippi_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_upper_mississippi_spatial.png"
hero_caption: "Sub-regional areal masks and 159 catalogued archaeological settlements across Upper Mississippi Hydrological Unit 07 (486,8k km²), spanning the Driftless Area, Oneota drift plains and American Bottom."
hero_label: "fig:hero-upper-mississippi"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This paper reconstructs the pre-Columbian population of Upper Mississippi Hydrological Unit 07 (486.842 km² across 7.786 5-arcminute grid cells) from 10000BC to 1600AD [@kelly2025; @seaber1987hydrologic].
Stretching from the glaciated headwaters of Minnesota and the unglaciated Driftless Zone across the Iowa, Des Moines, Rock and Upper Illinois drift plains to the American Bottom confluence opposite St. Louis, HU 07 formed the demographic core of the midcontinent.
Across twelve millennia, its river terraces supported early Holocene bison-hunting bands, Middle Woodland Havana-Hopewell earthworks, Late Woodland Effigy Mound communities, the Mississippian centre of Cahokia and late precontact Oneota villages [@theler2003driftless; @milner1998cahokia; @pauketat2004cahokia].

Combining N = 1.892 radiocarbon dates for HU 07 [@kelly2025] with continental non-stationary Matérn ($\nu = 3/2$) kriging across 493.687 valid land cells (18.561.382 km² or 18,56M km², with 78.938 to 149.138 active cells across 10 horizons from 13000BC to 1650AD) and 93.129 unique site-periods (286.193 horizon record sum; 3.833 domestic catchments covering 15,52M km², 2.570 active or 67,05%, circular radius median 29,48 km and p90 40,95 km overall [29,3 km and 39,85 km active], 14,24x the 6.539-entry legacy baseline, 251 cross-frontier buffer catchments; regularised $\tau_1 = 1,35$ on all ten horizons [raw 1,519 to 1,6098, horizon mean 1,5782], $\tau_2 = 2,9025$, effective short range 45,23 km to 47,94 km [mean 47 km], raw nugget 0, regularised nugget-to-sill 0,04 [$\eta = 0,0417$], WLS $R^2 = 0,9990$ to 0,9992), basin population grew from 900 (828 to 972) in 10000BC to 130k (119,6k to 140,4k) at 0AD.
Intensive maize cultivation then lifted numbers to a sharp peak of 290k (266,8k to 313,2k) in 1100AD, within seven years of the 1107AD (843 cal BP) radiocarbon median mode [@kelly2025].
Drought stress, warfare and the Vacant Quarter exodus from the southern floodplain after 1200AD lowered the regional total to 162k in 1400AD and 150k (138k to 162k) by 1600AD, shifting 84% of inhabitants into the northern Headwaters and Iowa-Des Moines-Rock Oneota plains [@benson2009cahokia; @cobb2002vacant; @milner2010].
All 159 included settlements and 170 excluded records (167 duplicate-alias consolidations and 3 unquantified rockshelter exclusions) reconcile cleanly across 329 source-ledger candidates.



# Background

## Geography, Drainage and Ecological Carrying Capacity

Upper Mississippi Hydrological Unit 07 drains 486.842 km² across Minnesota, Wisconsin, Iowa, Illinois, eastern Missouri and corners of northwestern Indiana and southwestern Michigan above the Ohio River confluence [@seaber1987hydrologic].
From north to south, the basin crosses a steep climatic and physiographic gradient that shaped human carrying capacity throughout the Holocene.
In the far north, Lake Itasca and the Minnesota headwaters wind across young Wisconsinan glacial moraines, shallow lakes, wild-rice wetlands and coniferous-hardwood ecotones where frost-free seasons rarely exceeded 120 days.
Along the central Mississippi trench between Lake Pepin and Dubuque lies the Driftless Area, an unglaciated plateau of deep limestone valleys, steep bluffs and sheltered coulees where cold-air drainage restricted upland farming while backwater sloughs yielded abundant fish, mussels and waterfowl [@theler2003driftless].

South of the Driftless uplands, the Iowa, Des Moines, Cedar, Rock and Upper Illinois rivers cross gently rolling prairie-oak savannas underlain by fertile loess and glacial till.
Because prairie sod resisted simple wooden digging sticks, early farmers focused almost exclusively on wooded river bottoms, tributary alluvial fans and glacial lake margins where light silt loams could be cleared by fire and stone hoes [@milner1998cahokia; @milner2023agriculture].
At the southern extremity of HU 07, the Missouri and Illinois rivers join the Mississippi just above the American Bottom, a broad floodplain up to 18 km wide filled with oxbow lakes, point-bar ridges and deep alluvial soils.
Here, a growing season exceeding 185 days and low-gradient backwaters created the richest non-irrigated agricultural niche anywhere north of the Valley of Mexico [@milner1998cahokia; @pauketat2004cahokia].

## Long-Run Cultural Sequence and Historiography

Human occupation began immediately behind the retreating Des Moines and Lake Michigan ice lobes before 10000BC, as Clovis, Folsom and Dalton bands hunted late Pleistocene megafauna and early Holocene bison along river terraces and prairie edges.
Early Archaic camps such as Lang Farm, Apple Creek and Koster record steady demographic packing into deeply stratified valley-margin base camps by 8000 to 5000BC, as warming mid-Holocene conditions expanded oak-hickory mast and backwater shellfish beds [@theler2003driftless].
During the Late Archaic (3000 to 1000BC), long-distance exchange linked Upper Mississippi bands to Old Copper hammered-metal traditions around the western Great Lakes, whose chronological span has been refined through Bayesian modelling of copper-associated dates [@bebber2022refining].

By 1000 to 200BC, Early Woodland groups adopted ceramic cooking vessels and domesticated native seed crops of the Eastern Agricultural Complex, including goosefoot, marsh elder, squash and little barley [@milner2023agriculture].
The Middle Woodland period (100BC to 400AD) brought the Havana-Hopewell florescence across the Illinois, Rock and Upper Mississippi valleys, marked by geometric earthworks, conical burial mounds at Albany Mounds, Kamp Mound, Elizabeth Mounds and Trempealeau, and pan-continental exchange in obsidian, copper and marine shell [@theler2003driftless; @pauketat2004cahokia].
Following a fourth-century pause in long-distance ceremonial exchange, Late Woodland communities multiplied across upland interiors as bow-and-arrow hunting spread and maize entered diets after 600AD.
In the Driftless Zone and southern Wisconsin, groups raised thousands of animal-shaped Effigy Mounds (650-1100AD) as territorial and mortuary markers along major river bluffs [@theler2003driftless].

After 900AD, rapid maize intensification and political centralisation transformed the American Bottom into Greater Cahokia, uniting the central 120-mound precinct at Cahokia with major neighbouring complexes at East St. Louis, St. Louis and Pulcher, alongside upland ritual centres such as Emerald Acropolis and wooden-post monuments at Mitchell [@milner1998cahokia; @pauketat2004cahokia; @kessler2025origin].
Outliers carried Mississippian pottery, wall-trench architecture and platform-mound ceremonialism northward to Dickson Mounds and Orendorf in the Central Illinois Valley, Aztalan on the Crawfish River and Silvernale and Bryan near Red Wing, Minnesota [@theler2003driftless].
Yet the urban climax proved brief.
Tree-ring drought reconstructions reveal repeated multi-year moisture deficits across the central Mississippi basin after 1150AD, coinciding with palisade construction, skeletal trauma and projectile miniaturisation tuned for lethality during late precontact social stress [@benson2009cahokia; @krus2016timing; @mika2020miniaturization].
By 1350-1400AD, the American Bottom was largely deserted as part of the wider Vacant Quarter contraction [@cobb2002vacant; @cobb2023vacant].
Demographic weight shifted decisively north to Oneota, Langford and Huber-tradition towns along the Upper Illinois, Rock, La Crosse and Minnesota river valleys [@theler2003driftless; @milner2010].

Earlier continental demographic summaries compressed these dramatic north-south inversions into static regional averages, missing both the twelfth-century urban spike around St. Louis and the subsequent persistence of dense Oneota populations in Wisconsin, Iowa and Minnesota [@ubelaker2006; @milner2010].
Modern radiocarbon compilations [@peros2010prehistoric; @bird2022p3k14c; @kelly2022new; @kelly2025] and systematic cultural-resource management inventories permit a direct sub-regional reconstruction grounded in archaeological site distributions rather than backward extrapolation from nineteenth-century colonial frontiers.

# Methodology

## Radiocarbon Calibration and Three-Mask Partitioning

Temporal calibration across Upper Mississippi HU 07 is anchored to the lower-48 radiocarbon synthesis of Kelly et al. [@kelly2022new; @kelly2025], which compiles N = 1.892 cleaned archaeological dates within the HU 07 watershed boundary (14C standard error <= 100 years, binned to counteract multiple dating of single features).
Across 500 bootstrapped running-mean windows, HU 07 exhibits a mode ranging between 808 and 925 cal BP (1025-1142AD), with an interquartile spread of 828-869 cal BP (1081-1122AD), a mean of 850 cal BP (1100AD) and a median peak at 843 cal BP (1107AD) [@kelly2025].
Unlike Plains or Rocky Mountain drainages that crest in the eighth or ninth centuries, or Pacific Northwest river basins that climb steadily into the late sixteenth century [@kelly2025; @rorabaugh2023assessing], HU 07 displays the sharpest mid-Holocene agricultural spike in northern North America.

To capture internal ecological and historical divergence between the Mississippian southern floodplain and the northern woodland-prairie zones, HU 07 is partitioned into three non-overlapping five-arcminute areal masks totalling 7.786 active land pixels (486.842 km²) on the five-arcminute WGS84 global grid (Table \ref{tab:subregions-upper-mississippi}):

1. **Upper Mississippi Headwaters, Minnesota River and Driftless Zone** (3.373 cells, 201.498 km², 41,4% of basin area, 42,88 to 47,71 N, 88,88 to 97,29 W): covers central and southern Minnesota and northern and western Wisconsin, enclosing 45 catalogued settlements.
2. **Iowa-Des Moines, Rock and Upper Illinois Drift Plains** (3.111 cells, 198.892 km², 40,9% of basin area, 38,79 to 44,12 N, 85,88 to 95,96 W): spans central and eastern Iowa, southern Wisconsin, northern Illinois, northwestern Indiana and southwestern Michigan, enclosing 59 catalogued settlements.
3. **American Bottom, Lower Illinois and Mississippi-Missouri Confluence** (1.302 cells, 86.452 km², 17,8% of basin area, 37,04 to 41,54 N, 88,12 to 91,71 W): covers the Illinois River valley, the St. Louis-East St. Louis alluvial corridor and southwestern Illinois south to the Ohio confluence, enclosing 55 catalogued settlements.

Benchmark series across 23 chronological steps (10000BC to 1600AD, spaced by millennia before 0AD, 200-year intervals from 0AD to 1000AD, centuries from 1000AD to 1500AD, plus 1550AD and 1600AD) combine smoothed summed probability curves [@peros2010prehistoric; @kelly2025] with published floodplain carrying capacities, wall-trench household counts and ethnohistoric contact ceilings [@milner1998cahokia; @milner2010; @milner2023agriculture; @ubelaker2006].

## Non-Stationary Matérn Kriging and Settlement Reconciliation

Pixel-level rural habitation weights across HU 07 derive from the continental Northern America multi-registry kriging domain covering 493.687 valid 5-arcminute land cells (18.561.382 km² or 18,56M km², with 78.938 to 149.138 active inhabited non-wasteland cells across 10 horizons from 13000BC to 1650AD) across the contiguous United States, Canada, Alaska, Greenland and Bermuda.
Rather than relying on a single sparse radiocarbon list, the surface composites p3k14c [@bird2022p3k14c] and c14bazAAR with Kelly and Robinson's lower-48 archive [@kelly2022new], regional CRM inventories, cultural-index counts [@milner2023agriculture] and state heritage registers.
Strict spatial-chronological deduplication by catchment and 200-year bin retains 93.129 unique site-periods (286.193 horizon site records summed across intervals) grouped into 3.833 domestic catchments (15.517.268 km² or 15,52M km²; 2.570 active inhabited catchments, 67,05% coverage; equivalent circular radius $r = \sqrt{A/\pi}$ median 29,48 km and 90th percentile 40,95 km overall, 29,3 km and 39,85 km across active catchments), representing an observation density 14,24x above the 6.539-entry legacy c14bazAAR baseline alone.

To prevent artificial border cliffs where HU 07 meets the Missouri, Ohio and Great Lakes watersheds, 251 cross-frontier buffer catchments condition neighbouring territories up to 300 km beyond the continental perimeter, while internal watershed seams receive two passes of a 5-pixel separable log-multiplier filter inside the continental mosaicking routine.
Site counts undergo Freeman-Tukey variance stabilisation and hierarchical Bayes shrinkage before Weighted Least Squares fitting of five biophysical covariates: baseline habitat mask, natural productivity, ecological suitability, exponential 13,5 km fluvial proximity and coastal proximity.
Residual spatial autocorrelation is modelled across 10 Holocene horizons (13000BC to 1650AD) using 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging.
Comparative network and spatial point-pattern applications in European Bronze Age river corridors [@duffy2020river] and southeastern North American zooarchaeological datasets [@hollandlulewicz2023network] confirm the sensitivity of fluvial hierarchy metrics to catchment geometry; conditioning explicitly on river distance and Voronoi cell area removes highway and salvage-corridor sampling bias.

Before allocating rural density onto 5-arcminute cells, the spatial partitioning routine deducts the active populations of all 159 catalogued settlements in the HU 07 gazetteer from their respective sub-regional totals.
Symmetric plus or minus 8% uncertainty intervals bracket each sub-regional trajectory to reflect variation in wall-trench house longevity, seasonal aggregation versus permanent residence and radiocarbon calibration spread [@milner1998cahokia; @pauketat2004cahokia].
All diagnostic logs and metadata timestamps follow GMT+0.

## Household Multipliers and Floodplain Carrying Capacity

Converting archaeological features into demographic headcounts across HU 07 relies on excavated residential floor areas, structure-replacement rates and mortuary schedules rather than raw pottery or mound counts [@milner1998cahokia; @milner2023agriculture].
In the American Bottom and Central Illinois Valley, Mississippian single-post and wall-trench houses average 14 to 24 m² of interior floor space, sheltering nuclear households of 4,5 to 5,5 occupants.
Because untreated oak and hickory wall posts rot within 10 to 20 years in damp alluvial soils, long-lived village strata must be deflated by house-replacement ratios (0,15 to 0,3 simultaneous occupancy per excavated floor) before summing town totals [@milner1998cahokia; @pauketat2004cahokia].
Northern Oneota longhouses and oval wigwams in Wisconsin and Minnesota show larger extended-family footprints (30 to 55 m²), housing 8 to 12 residents per active structure [@theler2003driftless].

Across non-nucleated rural floodplains, sustainable pre-industrial maize-beans-squash yields on well-drained silt loams supported rural densities of 30 to 55 persons per 100 km² along the Illinois and Lower Mississippi trenches when combined with seasonal mast, deer and migratory waterfowl harvesting [@milner2010; @milner2023agriculture].
By contrast, the shorter northern growing season across central Minnesota and northern Wisconsin capped late precontact rural carrying capacity at 15 to 30 persons per 100 km², anchored around wild-rice lakes, prairie-forest bison margins and spring spawning rapids [@theler2003driftless].
These ecological ceilings directly bound the twenty-three benchmark totals between 10000BC and 1600AD.

<figure class="crd-table-figure" id="tab:subregions-upper-mississippi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Cells</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Bounding Box</th><th class="crd-th">Peak (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Mississippi Headwaters, Minnesota River &amp; Driftless Zone</strong></td><td class="crd-td">3.373</td><td class="crd-td">201.498</td><td class="crd-td">45</td><td class="crd-td">42,88 to 47,71N, 88,88 to 97,29W</td><td class="crd-td">1200AD (82k)</td></tr>
<tr><td class="crd-td"><strong>Iowa-Des Moines, Rock &amp; Upper Illinois Drift Plains (Oneota)</strong></td><td class="crd-td">3.111</td><td class="crd-td">198.892</td><td class="crd-td">59</td><td class="crd-td">38,79 to 44,12N, 85,88 to 95,96W</td><td class="crd-td">1200AD (86k)</td></tr>
<tr><td class="crd-td"><strong>American Bottom, Lower Illinois &amp; Mississippi-Missouri Confluence (Cahokia)</strong></td><td class="crd-td">1.302</td><td class="crd-td">86.452</td><td class="crd-td">55</td><td class="crd-td">37,04 to 41,54N, 88,12 to 91,71W</td><td class="crd-td">1100AD (126k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, grid cells, land areas, catalogued site counts and peak dates across Upper Mississippi HU 07.</figcaption>
</figure>

# Testing and Validation

Four independent diagnostic checks test the spatial calibration, chronological fit and ledger integrity of the HU 07 reconstruction.

First, continental kriging sharpness passes every variogram threshold across all 10 horizons (13000BC to 1650AD; 78.938 to 149.138 active cells across 493.687 valid land cells; 93.129 unique site-periods across 286.193 horizon site records over 3.833 domestic catchments, 2.570 active inhabited catchments and 251 frontier buffers).
Regularised dimensionless short-range scale holds at $\tau_1 = 1,35$ on all ten horizons (raw per-horizon range 1,519 to 1,6098, horizon mean 1,5782, below the 1,8 upper bound), paired with secondary scale $\tau_2 = 2,9025$ (2,9) and an effective short range of 45,23 km to 47,94 km (mean 47 km, Table \ref{tab:kriging-upper-mississippi}).
Raw nugget-to-sill ratio equals 0 across all ten horizons, and regularised nugget-to-sill holds uniformly at 0,04 ($\eta = 0,0417$, well below 0,45).
Weighted Least Squares covariate regressions achieve residual $R^2$ spanning 0,999 to 0,9992 (mean 0,9991) across all ten periods.

Second, the reconstructed basin maximum of 290k in 1100AD aligns within seven years of the Kelly et al. [@kelly2025] HU 07 radiocarbon median mode of 1107AD (843 cal BP).
That peak matches their mean mode (850 cal BP, or 1100AD) and coincides with the Stirling-phase architectural zenith at Cahokia and East St. Louis [@pauketat2004cahokia; @milner1998cahokia].

Third, separating the southern floodplain from the Driftless and Iowa-Illinois drift plains reproduces the sharp boom-and-bust asymmetry documented across midcontinental archaeology.
Between 600AD and 1100AD, American Bottom population expands by +117,2% (58k to 126k), then contracts by -81% (126k to 24k) between 1100AD and 1400AD [@benson2009cahokia; @cobb2023vacant].
Meanwhile, the Iowa-Des Moines-Rock drift plains and Upper Headwaters peak later at 1200AD (86k and 82k) and retain 76,7% and 87,8% of their maxima into 1400AD (66k and 72k).

Fourth, cross-checking the regional settlement gazetteer against the source ledger confirms 159 included sites (45 in Headwaters-Driftless, 59 in Drift Plains, 55 in American Bottom-Lower Illinois; 502 benchmark observations averaging 3,16 per settlement, with 123 carrying at least three observations) and 170 excluded entries (167 duplicate-alias consolidations within 2 km, including Mille Lacs-Kathio merged into Kathio, Bryan (Minnesota) into Bryan, Labras Lake into Range and Eveland into Dickson Mounds, alongside 3 unquantified non-habitation rockshelter exclusions: Lawrence I Rockshelter, Gottschall Rockshelter and Modoc Rockshelter), totalling 329 candidates with 0 unaccounted records.
Regional arithmetic is exact across all 23 benchmark years, and the 1500AD density of 35,33 persons per 100 km² (172k total) aligns cleanly with Milner and Chaplin's continental interpolation of eastern North American village density [@milner2010].

<figure class="crd-table-figure" id="tab:kriging-upper-mississippi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Tau 1</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td><td class="crd-td">0,019</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0687</td></tr>
<tr><td class="crd-td"><strong>Late Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0679</td></tr>
<tr><td class="crd-td"><strong>Early Woodland and Formative</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,1291</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland Hopewell</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,161</td></tr>
<tr><td class="crd-td"><strong>Late Woodland</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,1999</td></tr>
<tr><td class="crd-td"><strong>Early Mississippian</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,4874</td></tr>
<tr><td class="crd-td"><strong>Middle Mississippian</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,3553</td></tr>
<tr><td class="crd-td"><strong>Late Precontact Oneota</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,3901</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,5262</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Continental Northern America Matérn kriging diagnostics across ten horizons from 13000BC to 1650AD (93.129 unique site-periods, 3.833 domestic catchments).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:density-upper-mississippi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Total Pop.</th><th class="crd-th">8% Bounds</th><th class="crd-th">Density per 100 km²</th><th class="crd-th">Am. Bottom</th><th class="crd-th">North &amp; Plains</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">900</td><td class="crd-td">828 to 972</td><td class="crd-td">0,18</td><td class="crd-td">44,4%</td><td class="crd-td">55,6%</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">24k</td><td class="crd-td">22,1k to 25,9k</td><td class="crd-td">4,93</td><td class="crd-td">38,3%</td><td class="crd-td">61,7%</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">130k</td><td class="crd-td">119,6k to 140,4k</td><td class="crd-td">26,7</td><td class="crd-td">38,5%</td><td class="crd-td">61,5%</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">186k</td><td class="crd-td">171,1k to 200,9k</td><td class="crd-td">38,21</td><td class="crd-td">31,2%</td><td class="crd-td">68,8%</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">290k</td><td class="crd-td">266,8k to 313,2k</td><td class="crd-td">59,57</td><td class="crd-td">43,4%</td><td class="crd-td">56,6%</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">266k</td><td class="crd-td">244,7k to 287,3k</td><td class="crd-td">54,64</td><td class="crd-td">36,8%</td><td class="crd-td">63,2%</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">162k</td><td class="crd-td">149k to 175k</td><td class="crd-td">33,28</td><td class="crd-td">14,8%</td><td class="crd-td">85,2%</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">172k</td><td class="crd-td">158,2k to 185,8k</td><td class="crd-td">35,33</td><td class="crd-td">16,3%</td><td class="crd-td">83,7%</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">150k</td><td class="crd-td">138k to 162k</td><td class="crd-td">30,81</td><td class="crd-td">16%</td><td class="crd-td">84%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Basin population totals, 8% uncertainty bounds, regional density per 100 km² and north-south shares in HU 07.</figcaption>
</figure>

# Results

## Archaic and Woodland Expansion (10000BC to 800AD)

Post-glacial recolonisation across Upper Mississippi HU 07 started from a sparse base of 900 (828 to 972) people in 10000BC (0,18 persons per 100 km²).
Early bands concentrated in the southern confluence (400) and drift plains (350), leaving only 150 inhabitants across still-deglaciating northern Minnesota and Wisconsin.
As proglacial lakes drained and pine-oak parkland spread northward, regional numbers climbed to 4,5k in 8000BC, 24k in 5000BC (4,93 per 100 km²) and 53,5k in 3000BC (Figure \ref{fig:trajectory-upper-mississippi}).
Stratified occupations at Lang Farm (9500 to 8500BC), Apple Creek (8800BC to 1000AD), Allen Fan (8200BC to 1350AD), Buchanan (8200BC to 1400AD) and Koster (7800 to 3000BC) record prolonged Archaic sedentism on resource-rich alluvial fans and river bluffs [@theler2003driftless].
During the Late Archaic (3000 to 1000BC), basin totals nearly doubled from 53,5k to 99k.
This expansion rested on native seed cultivation, floodplain shell-midden harvesting and long-distance copper exchange documented across the northern lakes and upper Mississippi margins [@bebber2022refining; @milner2023agriculture].

By 0AD, Middle Woodland Hopewell societies brought basin population to 130k (119,6k to 140,4k; 26,7 per 100 km²).
Inhabitants distributed relatively evenly across the American Bottom (50k), the Iowa-Des Moines-Rock plains (44k) and the northern Headwaters-Driftless zone (36k).
Excavated Hopewell civic-mortuary nodes such as Albany Mounds (680 at 200AD), Kamp Mound (420 at 150AD), Napoleon Hollow (360 at 200AD) and Trempealeau (310 at 200AD) reflect dense riverine peer-polity networks linked along the Illinois and Mississippi corridors [@theler2003driftless].
Between 200AD and 400AD, the collapse of Hopewell long-distance mortuary exchange coincided with a brief dip in the American Bottom from 58k to 54k.
Overall HU 07 population nevertheless continued upward to 165k in 400AD and 186k in 600AD as Late Woodland upland village farming expanded across Iowa, Wisconsin and Minnesota (68k in the Drift Plains and 60k in the Headwaters-Driftless zone).
Early maize adoption and bow-and-arrow hunting carried total population to 216k by 800AD [@milner2023agriculture; @mika2020miniaturization].

<figure class="crd-figure-block" id="fig:trajectory-upper-mississippi">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-upper-mississippi/fig2_upper_mississippi_trajectory.png" alt="fig:trajectory-upper-mississippi" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory across Upper Mississippi HU 07 from 10000BC to 1600AD, with shaded 8% uncertainty band.</figcaption>
</figure>

## Mississippian Urban Peak and Oneota Shift (800AD to 1600AD)

Between 800AD and 1100AD, the American Bottom experienced the most rapid demographic surge in pre-Columbian North America north of Mexico.
Sub-regional population rose from 72k in 800AD to 92k in 1000AD and 126k (115,9k to 136,1k) in 1100AD.
That surge lifted HU 07 as a whole from 248k in 1000AD to its all-time precontact peak of 290k (266,8k to 313,2k; 59,57 per 100 km²) in 1100AD (Table \ref{tab:trajectory-upper-mississippi}).
Urban nucleation concentrated at Cahokia (18k at 1100AD), East St. Louis Mound Center (5,2k), St. Louis Mound Group (2,6k), Emerald Acropolis (1,6k), Range Village Complex (1,2k at 1050AD), Horseshoe Lake (650) and Pulcher (1,6k at 1150AD), flanked by outlying timber-post ritual monuments such as Mitchell [@milner1998cahokia; @pauketat2004cahokia; @kessler2025origin].
Synchronously active catalogued settlements across HU 07 sum to 33,76k in 1100AD (11,6% of total basin population), with the remaining 256,24k dispersed across outlying farmsteads, hamlets and northern woodland villages.
Mississippian influence projected northward via Aztalan (750 at 1100AD), Trempealeau (650), Silvernale (950 at 1150AD), Bryan (820 at 1200AD), Bryan Fortified Oneota Town (950 at 1300AD) and Spoon River towns such as Dickson Mounds (1,1k at 1200AD) and Orendorf (860 at 1220AD).
These centres participated in long-distance exchange corridors that moved marine shell, copper and imported tropical cultigens across eastern Mississippian chiefdoms [@king2026cacao; @theler2003driftless].

Decline set in swiftly across the southern floodplain after 1150AD.
Multi-year midcontinental droughts, local timber and deer depletion, wooden palisade fortification and endemic raiding destabilised the Cahokia core [@benson2009cahokia; @krus2016timing; @mika2020miniaturization].
The American Bottom fell from 126k in 1100AD to 98k in 1200AD, 52k in 1300AD and just 24k by 1400AD as the Vacant Quarter emptied much of the Mississippi-Ohio-Missouri confluence zone [@cobb2002vacant; @cobb2023vacant].
By contrast, the northern Headwaters-Driftless zone and Iowa-Des Moines-Rock drift plains continued growing to dual maxima in 1200AD (82k and 86k, tempering overall HU 07 contraction to 266k).
Cooling Little Ice Age growing seasons and inter-tribal conflict subsequently lowered basin totals to 202k in 1300AD and 162k in 1400AD.

During the fifteenth century, Oneota agricultural villages sustained a modest basin-wide recovery to 172k (158,2k to 185,8k) in 1500AD.
Nucleated farming towns along the La Crosse terraces (Midway Village 640, Tremaine 560, Sand Lake 520, Valley View 620), Lake Koshkonong (Carcajou Point Oneota Town 850, Carcajou Point 690), the Chicago-Calumet corridor (Oak Forest Longhouse Town 800, Hoxie Farm Fortified Town 750), eastern Iowa (McKinney 430) and the Upper Illinois Valley (Zimmerman 1,8k by 1600AD) matched continental density levels estimated for eastern North America [@milner2010].
Thereafter, indirect epidemiological shocks radiating from sixteenth-century Gulf and Atlantic coastal contacts, alongside intensified prairie warfare, reduced HU 07 gently to 161k in 1550AD and 150k (138k to 162k; 30,81 per 100 km²) in 1600AD [@ubelaker2006; @milner2010].

<figure class="crd-table-figure" id="tab:trajectory-upper-mississippi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Mississippi Headwaters, Minnesota River &amp; Driftless Zone</strong></td><td class="crd-td">150</td><td class="crd-td">6,8k</td><td class="crd-td">36k</td><td class="crd-td">51k</td><td class="crd-td">69k</td><td class="crd-td">79k</td><td class="crd-td">76k</td><td class="crd-td">68k</td></tr>
<tr><td class="crd-td"><strong>Iowa-Des Moines, Rock &amp; Upper Illinois Drift Plains (Oneota)</strong></td><td class="crd-td">350</td><td class="crd-td">8k</td><td class="crd-td">44k</td><td class="crd-td">60k</td><td class="crd-td">75k</td><td class="crd-td">85k</td><td class="crd-td">74k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>American Bottom, Lower Illinois &amp; Mississippi-Missouri Confluence (Cahokia)</strong></td><td class="crd-td">400</td><td class="crd-td">9,2k</td><td class="crd-td">50k</td><td class="crd-td">54k</td><td class="crd-td">72k</td><td class="crd-td">126k</td><td class="crd-td">52k</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Upper Mississippi HU 07 Total</strong></td><td class="crd-td">900</td><td class="crd-td">24k</td><td class="crd-td">130k</td><td class="crd-td">165k</td><td class="crd-td">216k</td><td class="crd-td">290k</td><td class="crd-td">202k</td><td class="crd-td">150k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Benchmark population series by sub-region in Upper Mississippi HU 07, 10000BC to 1600AD.</figcaption>
</figure>

## Sub-Regional Trajectories and Composition

### Upper Mississippi Headwaters, Minnesota River and Driftless Zone

Covering 201.498 km² (41,4% of HU 07), this northern zone rose slowly from 150 inhabitants in 10000BC to 6,8k in 5000BC, 36k at 0AD and 69k in 800AD.
Mississippian and Oneota river towns pushed northern numbers to a peak of 82k in 1200AD, anchored by Bryan Fortified Oneota Town (950), Silvernale (950), Bryan (820), Trempealeau (650) and Armstrong Chippewa River Town (550) [@theler2003driftless].
Unlike the southern floodplain, the Headwaters-Driftless zone contracted by only 12,2% between 1200AD (82k) and 1400AD (72k), rebounding to 76k in 1500AD behind La Crosse Oneota communities (Midway Village, Tremaine, Sand Lake, Valley View) and Mille Lacs Dakota towns (Kathio reaching 820 by 1600AD).
By 1600AD, its 68k residents accounted for 45,3% of all HU 07 inhabitants.

### Iowa-Des Moines, Rock and Upper Illinois Drift Plains

Spanning 198.892 km² (40,9% of HU 07), the drift plains grew from 350 people in 10000BC to 8k in 5000BC, 44k at 0AD and 75k in 800AD, led early by Middle Woodland Albany Mounds (680 at 200AD) and Late Woodland Effigy Mounds (420 at 900AD).
Mississippian frontier centres at Aztalan (750 at 1100AD) and Apple River Fortified Town (700 at 1150 to 1250AD), alongside Rock River Beloit Village (680), carried the sub-region to a peak of 86k in 1200AD.
Following thirteenth-century instability, late precontact Oneota and Upper Mississippian centres flourished at Carcajou Point Oneota Town (850 at 1350AD), Moccasin Bluff Agricultural Town (700 at 1400AD), Hoxie Farm Fortified Town (750 at 1500AD), Oak Forest Longhouse Town (800 at 1550AD) and McKinney (430 at 1480AD), keeping population at 66k in 1400AD and 68k in 1500AD.
At 1600AD, the drift plains held 58k inhabitants, or 38,7% of the basin total.

### American Bottom, Lower Illinois and Confluence

Although the American Bottom and Illinois Confluence comprises only 17,8% of HU 07 land area (86.452 km²), it held between 38,5% and 44,4% of basin inhabitants throughout the Archaic and Middle Woodland periods (Figure \ref{fig:shares-upper-mississippi}).
Population grew from 400 in 10000BC to 9,2k in 5000BC, 50k at 0AD and 58k in 200AD, dipped to 54k in 400AD, then surged from 72k in 800AD to 126k at the 1100AD Cahokia zenith (43,4% of HU 07), joined along the Illinois valley by Spoon River centres such as Dickson Mounds (1,1k), Orendorf (860), Larson (720) and Crable (580).
Following the Vacant Quarter exodus, the southern share collapsed to 25,7% in 1300AD (52k), 14,8% in 1400AD (24k of 162k) and 16% in 1600AD (24k of 150k), leaving Upper Illinois Zimmerman (1,8k in 1600AD) as the dominant terminal centre.
Over that same transition, the two northern sub-regions rose together to hold 84% of late precontact HU 07 residents [@cobb2002vacant; @theler2003driftless].

<figure class="crd-figure-block" id="fig:shares-upper-mississippi">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-upper-mississippi/fig3_upper_mississippi_shares.png" alt="fig:shares-upper-mississippi" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional percentage shares of total population across Upper Mississippi HU 07 from 10000BC to 1600AD.</figcaption>
</figure>

# Limitations

Four structural constraints qualify these estimates.
First, large Mississippian mound precincts such as Cahokia and East St. Louis generated disproportionately fewer radiocarbon dates per capita than earlier dispersed Archaic camps because short-lived ceramic seriation replaces costly AMS assays in later horizons, requiring explicit house-floor and precinct calibration [@milner1998cahokia; @kelly2025].
Second, modern river engineering, urban expansion across greater St. Louis and Peoria, and intensive deep ploughing across Illinois and Iowa have erased or buried shallow floodplain hamlets, mirroring broader North American taphonomic losses documented in large digital site indices [@pauketat2004cahokia; @anderson2017level].

Third, osteological and bioarchaeological baselines remain uneven across acid boreal soils in northern Minnesota and Wisconsin compared with limestone-buffered Illinois cemeteries.
Comparative isotopic, dental and fragmentary skeletal preservation studies elsewhere demonstrate how differential bone diagenesis and dietary shifts bias demographic survival proxies [@kinaston2014lapita; @krueger2019anterior; @fitzpatrick2008small].
Fourth, the final century (1500 to 1600AD) relies on regional ethnohistoric mortality inferences prior to direct seventeenth-century French missionary counts by Marquette and Jolliet, introducing wider uncertainty around the timing of indirect protohistoric disease arrival [@milner2010; @ubelaker2006].

# Conclusion

Upper Mississippi Hydrological Unit 07 traces a uniquely asymmetric pre-Columbian demographic cycle across 486.842 km² of midcontinental river valleys and prairie-woodland ecotones.
Growing steadily from 900 inhabitants in 10000BC to 130k at 0AD, population surged to 290k at 1100AD as Greater Cahokia concentrated 43,4% of basin inhabitants inside 17,8% of its land area.
Rather than collapsing uniformly across the whole drainage, climatic deterioration and warfare emptied the southern American Bottom by 81% between 1100AD and 1400AD while shifting 84% of the remaining 150k inhabitants (1600AD) into resilient Oneota and northern woodland societies across Iowa, Wisconsin and Minnesota.
Reconciled against 159 catalogued settlements and continental Matérn kriging over 93.129 unique site-periods, the series establishes a consistent demographic foundation connecting pre-Columbian midcontinental archaeology to early colonial encounters.

# Sources

<div id="refs"></div>
