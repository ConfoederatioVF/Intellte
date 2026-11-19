---
title: "Extreme Northern Plains Hydrological Unit (HU 09): Demographic Reconstruction"
subtitle: "CENTAUR-II: Souris-Red-Rainy Glacial Lake Agassiz Basin, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: extreme_northern_plains_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_extreme_northern_plains_spatial.png"
hero_caption: "Three drainage divisions and 61 catalogued sites across Extreme Northern Plains Hydrological Unit 09 (144,28k km²), covering the Souris Drift Prairie, Red River of the North and Rainy River borderlands."
hero_label: "fig:hero-extreme-northern-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Extreme Northern Plains Hydrological Unit 09 (144,28k km², covering 2.539 terrestrial 5-arcminute grid cells) occupies the flat lacustrine bed of Glacial Lake Agassiz and the bordering drift prairies along the United States-Canada frontier [@kelly2025; @seaber1987hydrologic; @teller2002freshwater]. Because ice-dammed meltwaters still submerged the Red River trough at the opening of the Holocene, human numbers stand at zero in 10000BC across all three divisions—the Souris Loop and Devils Lake Drift Prairie, the Red River of the North Valley and the Rainy River and Lake of the Woods Boreal Border—before rising after lake drainage to 300 in 9000BC, 5,8k in 5000BC and 19,8k (18,2k to 21,4k) at 0AD [@teller2002freshwater; @stoltman1973laurel; @johnson1973arvilla].

Population peaks at 26,7k (24,6k to 28,8k; 18,51 persons per 100 km²) around 800AD, aligning within 27 years of the Kelly et al. HU 09 radiocarbon median peak of 827AD (1.123 cal BP) [@kelly2025]. Unlike southwestern canyon basins that suffered abrupt thirteenth-century collapse, HU 09 declines gradually after 800AD to 24,1k in 1100AD, 21,9k in 1300AD and 19,4k (17,8k to 21k) in 1600AD as Northeastern Plains Village farming, bison procurement and northern wild-rice lakes cushion late Holocene climatic shifts [@gregg1994plains; @toom2004northeastern; @milner2010]. Spatial allocation employs the `sites_northern_america` non-stationary Matérn ($\nu = 3/2$) composite (93.358 unique site-periods across 4.457 domestic catchments, 14,12x baseline) paired with 61 catalogued sites from 62 ledger candidates.



# Background

## Deglaciation, Glacial Lake Agassiz and Northward Drainage

Extreme Northern Plains Hydrological Unit 09 encompasses the United States portion of the Hudson Bay watershed, draining northward via the Souris (Mouse), Red River of the North and Rainy rivers across northern Minnesota, eastern and north-central North Dakota and a small Rocky Mountain Front salient in Glacier County, Montana [@seaber1987hydrologic; @teller2002freshwater]. Unlike adjacent Missouri River plains to the south-west, HU 09 lies directly along the ecological transition linking tallgrass and mixed-grass prairie to aspen parkland and boreal spruce-pine forest [@syms1977cultural].

At 10000BC, the southern outlet of Glacial Lake Agassiz discharged through the Glacial River Warren down the Minnesota Valley while deep lacustrine waters drowned the Red River and Lake of the Woods basins [@teller2002freshwater]. Successive retreats of the Laurentide Ice Sheet triggered catastrophic eastward and north-westward outbursts during the Moorhead low-water phase and final Emerson drainage after 9000BC to 7500BC, exposing rich silt-clay lakebeds, gravel beach ridges (Campbell, Herman and Ojata beaches) and productive shallow lakes [@teller2002freshwater]. Those raised sand-and-gravel strandlines formed dry travel highways across wet clay flats, guiding Early Holocene caribou and bison hunters into the interior [@thulman2023clovis; @birch2016late].

## Three Sub-Regional Ecological Divisions

CENTAUR-II partitions the 144.278 km² basin into three drainage units aligned with environmental transitions (Table \ref{tab:subregions-extreme-northern-plains}). The Souris Loop and Devils Lake Drift Prairie (40.452 km², 28% of area, 710 cells) covers glacially sculpted knob-and-kettle till plains, the closed Devils Lake basin and the Turtle Mountains woodland oasis alongside the St. Mary-Waterton headwaters salient on the western margin. Seasonal bison herds, migratory waterfowl and sheltered lake-narrows woodlands sustained Archaic, Sonota-Besant and Devils Lake-Sourisford burial and hunting communities [@gregg1994plains; @syms1977cultural; @wendt2024year].

Across the central axis, the Red River of the North Valley (72.954 km², 50,6% of area, 1.261 cells) spans the flat Lake Agassiz clay plain and oak-gallery tributaries including the Sheyenne, Maple, Red Lake, Otter Tail and Bois de Sioux rivers. Consistently holding just over half of HU 09 inhabitants, this corridor supported Arvilla linear and conical mound builders in the first millennium AD and fortified Northeastern Plains Village earthlodge settlements such as Shea, Sprunk and Biesterfeldt after 1100AD [@johnson1973arvilla; @toom2004northeastern].

Eastward across the Beltrami and Lake of the Woods bog margin, the Rainy River and Lake of the Woods Boreal Border (30.872 km², 21,4% of area, 568 cells) embraces boundary-waters lakes, wild-rice beds (*Zizania palustris*) and whitewater rapids along the Rainy and Little Fork rivers. Here Laurel, Blackduck and Rainy River Late Woodland societies erected monumental burial mounds at Grand Mound and McKinstry adjacent to spring lake-sturgeon spawning runs and autumn wild-rice harvests [@stoltman1973laurel; @lenius1990rainy].

<figure class="crd-table-figure" id="tab:subregions-extreme-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Grid Cells</th><th class="crd-th">Area km² (Share)</th><th class="crd-th">Bounding Box</th><th class="crd-th">Peak Year (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Souris Loop and Devils Lake Drift Prairie</strong></td><td class="crd-td">710</td><td class="crd-td">40.452 (28%)</td><td class="crd-td">46,71-48,88N, 98,21-113,96W</td><td class="crd-td">800AD (7,6k)</td></tr>
<tr><td class="crd-td"><strong>Red River of the North Valley</strong></td><td class="crd-td">1.261</td><td class="crd-td">72.954 (50,6%)</td><td class="crd-td">45,46-48,88N, 95,21-98,12W</td><td class="crd-td">800AD (13,6k)</td></tr>
<tr><td class="crd-td"><strong>Rainy River and Lake of the Woods Boreal Border</strong></td><td class="crd-td">568</td><td class="crd-td">30.872 (21,4%)</td><td class="crd-td">47,46-49,38N, 90,54-95,12W</td><td class="crd-td">800AD (5,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, grid cells, land areas and peak population dates across Extreme Northern Plains HU 09.</figcaption>
</figure>

# Methodology

## Radiocarbon Calibration and Carrying-Capacity Priors

Demographic timing draws directly on the Kelly et al. IntCal20 radiocarbon analysis for HU 09 (N = 149 quality-screened dates; standard error at most 100 years) [@kelly2025; @kelly2022new]. Across 500 running-mean resampling iterations, Kelly et al. identify a radiocarbon mode spanning 980 to 1.163 cal BP (787AD to 970AD), with a first quartile at 1.028 cal BP (922AD), a third quartile at 1.139 cal BP (811AD), a mean at 1.094 cal BP (856AD) and a median peak at 1.123 cal BP (827AD) [@kelly2025].

Twenty-three sub-regional benchmarks from 10000BC to 1600AD combine radiocarbon summed probability curves [@peros2010prehistoric; @kelly2025; @rorabaugh2023assessing] with regional Woodland mound and Northeastern Plains Village settlement carrying capacities [@gregg1994plains; @toom2004northeastern; @milner2010]. Post-emergence benchmarks carry a symmetric plus or minus 8% structural interval around the central series, while all three divisions stand at zero (with a 0-5 person boundary floor) at 10000BC prior to final Glacial Lake Agassiz drainage [@teller2002freshwater; @ubelaker2006].

## Multi-Registry Spatial Disaggregation

Gridded rural habitation weights across all 2.539 land pixels use the continental `sites_northern_america` non-stationary Matérn ($\nu = 3/2$) residual kriging framework spanning 18,33M km² (481.752 terrestrial 5-arcminute cells). Rather than relying on a sparse local subset alone, `sites_northern_america` integrates Kelly and Robinson's Lower 48 database [@kelly2022new; @kelly2025], `p3k14c` [@bird2022p3k14c], `c14bazAAR`, state archaeological registers and CENTAUR monument records.

After deduplication by catchment and 200-year chronological bin, the North American composite contains 93.358 unique site-periods across 4.457 domestic Voronoi catchments (2.678 active inhabited catchments; median radius 27,36 km; 90th percentile 59,92 km), yielding an effective point density 14,12x higher than the baseline global radiocarbon database inside the North American mask. Crucially for a narrow border watershed such as HU 09, 259 cross-frontier buffer catchments extending up to 300 km bridge the 49th parallel smoothly into southern Manitoba, Saskatchewan and northwestern Ontario alongside Upper Mississippi (HU 07) and Northern Plains (HU 10) masks [@syms1977cultural].

Across ten Holocene horizons (13000BC to 1650AD), weighted least squares residual kriging couples catchment density with five biophysical covariates: terrain habitability, agro-ecological suitability, ecozone productivity, 13,5 km exponential fluvial proximity and coastal access. In HU 09, fluvial proximity and ecozone productivity concentrate rural habitation tightly along Lake Agassiz beach ridges, the Red and Sheyenne gallery forests and Rainy River wild-rice lakes while leaving flat poorly drained peat bogs lightly populated.

## Settlement Subtraction and Border Blending

Before scaling rural pixels inside `extreme_northern_plains_areal_mask.png`, the disaggregation pipeline subtracts the active trajectories of 61 catalogued mound complexes, fortified villages, wild-rice stations and beach-ridge camps from their parent sub-region. Two separable 4-pixel smoothing passes then eliminate seams along the international border and HUC-2 drainage divides while keeping sub-regional population totals exact.

# Testing and Validation

All spatial, variogram and ledger verification checks pass with zero errors as of 17 November 2026 GMT+0:

1. **Kriging Sharpness and Fit**: Across all ten Holocene horizons of `sites_northern_america`, dimensionless short-range correlation equals $\tau_1 = 1,41$ (1,4144; effective short range 38,7 km, well below the 1,8 ceiling) and long-range scale equals $\tau_2 = 2,62$ (2,6166). Raw variogram nugget-to-sill ratio measures 0 across every horizon, regularised to 0,04 (0,0417 $\eta$ ratio, below 0,45), and WLS residual $R^2$ ranges between 0,9991 and 0,9993 ($R^2 = 0,999$ across all horizons, Table \ref{tab:horizons}).
2. **Post-Glacial and Radiocarbon Alignment**: Zeroing population across all three divisions at 10000BC matches Glacial Lake Agassiz inundation prior to the Moorhead and Emerson phases [@teller2002freshwater], while the 800AD basin crest (26,7k) aligns within 27 years of the Kelly et al. HU 09 radiocarbon median peak of 827AD (1.123 cal BP) [@kelly2025].
3. **Late Holocene Stability**: The moderate 13,9% decline between 800AD (26,7k) and 1200AD (23k) matches archaeological evidence for resilient Northeastern Plains Village mixed horticultural-bison economies and Rainy River wild-rice harvesting rather than abrupt Mississippian collapse [@gregg1994plains; @toom2004northeastern; @milner2010].
4. **Gazetteer and Ledger Reconciliation**: Auditing `extreme_northern_plains_settlements.json` against `extreme_northern_plains_source_ledger.json5` accounts for all 62 candidates, comprising 61 included complexes and 1 excluded duplicate-alias entry (`Devils Lake-Narrows`, merged within 2 km of the canonical Devils Lake site), with zero unaccounted candidates.

<figure class="crd-table-figure" id="tab:horizons">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Analytical Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Range (km)</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">Residual R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeoindian and Early Archaic (13000-6000BC)</strong></td><td class="crd-td">1,41</td><td class="crd-td">38,7</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>2. Middle Archaic (6000-3000BC)</strong></td><td class="crd-td">1,41</td><td class="crd-td">38,7</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>3. Late Archaic (3000-1000BC)</strong></td><td class="crd-td">1,41</td><td class="crd-td">38,7</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>4. Early Woodland and Formative (1000-200BC)</strong></td><td class="crd-td">1,41</td><td class="crd-td">38,7</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>5. Middle Woodland Hopewell (200BC-400AD)</strong></td><td class="crd-td">1,41</td><td class="crd-td">38,7</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>6. Late Woodland and Dorset (400-800AD)</strong></td><td class="crd-td">1,41</td><td class="crd-td">38,7</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>7. Early Mississippian and Pueblo II (800-1100AD)</strong></td><td class="crd-td">1,41</td><td class="crd-td">38,7</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>8. Middle Mississippian and Pueblo III (1100-1300AD)</strong></td><td class="crd-td">1,41</td><td class="crd-td">38,7</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>9. Late Pre-Contact, Oneota and Thule (1300-1500AD)</strong></td><td class="crd-td">1,41</td><td class="crd-td">38,7</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>10. Protohistoric Contact Horizon (1500-1650AD)</strong></td><td class="crd-td">1,41</td><td class="crd-td">38,7</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Variogram calibration across the ten Holocene horizons of the North American kriging surface.</figcaption>
</figure>

# Results

## Lake Agassiz Emergence and Early-to-Middle Holocene Foragers (10000BC to 1000BC)

As Lake Agassiz waters receded from the Herman and Campbell strandlines after 9500BC, Palaeoindian and Late Plano hunters quickly colonised newly exposed dry beach ridges and morainal lakeshores [@teller2002freshwater; @thulman2023clovis]. Early occupation is documented at Moon Lake (9000BC, 95 peak) and Ojata Beach (8500BC, 55 peak) in the Red River Valley, joined by 8000BC by Agassiz Mosbeck (55), Browns Valley (7800BC, 120 peak) along the southern River Warren outlet and Rice Lake Ward (95) and Swiftcurrent Lake (75) on the Drift Prairie [@birch2016late]. Basin numbers climbed from 300 in 9000BC to 1k in 8000BC and 2,2k in 7000BC.

During the Middle Holocene Altithermal warm period (6000BC to 3000BC), eastern shortgrass prairie expanded across the Red River plain while permanent lakes and oak gallery strips preserved bison-hunting refugia along the Sheyenne, Red Lake and Pembina rivers [@syms1977cultural; @wendt2024year]. Regional population rose steadily from 3,8k in 6000BC to 5,8k in 5000BC, 8,2k in 4000BC and 10,9k in 3000BC before reaching 13,8k in 2000BC and 16,8k in 1000BC (Figure \ref{fig:trajectory-extreme-northern-plains}). Long-lived Archaic-to-Woodland river hubs such as Orwell (starting 2200BC, 240 peak), Little Floyd Lake (2400BC, 165 peak), Basswood Lake (2000BC, 145 peak) and Cavalier Tongue River (2000BC, 145 peak) anchored early wetland and bison-crossing zones.

<figure class="crd-figure-block" id="fig:trajectory-extreme-northern-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-extreme-northern-plains/fig2_extreme_northern_plains_trajectory.png" alt="fig:trajectory-extreme-northern-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory across Extreme Northern Plains HU 09 from 10000BC to 1600AD, with shaded 8 percent uncertainty band.</figcaption>
</figure>

## Woodland Mound Florescence and Plains Village Transition (0AD to 1600AD)

Between 1000BC and 800AD, Middle and Late Woodland cultures transformed settlement visibility across all three divisions. Along the Rainy River and Lake of the Woods, Laurel and Blackduck communities concentrated each spring at sturgeon rapids and wild-rice bays, building monumental burial earthworks at McKinstry (360 peak, 100BC to 1200AD) and Grand Mound (320 peak, 100BC to 900AD), alongside long-lived wild-rice centres at Schocker (290), Nett Lake (265), Waskish Upper Red Lake (250), Big Rice (245), Hannaford (210) and Northwest Angle (210) [@stoltman1973laurel; @lenius1990rainy]. On the Red River beach ridges and Devils Lake narrows, Sonota-Besant and Arvilla burial-mound builders gathered at Arvilla (360 peak, 600-1300AD), Devils Lake-Narrows (290 peak, 600-1500AD), Sullys Hill Mounds (230), Baldhill Mound (210), Round Mound (210), Lake Bronson (195), Haarstad Mound (190) and Warner Mound (185) [@johnson1973arvilla; @gregg1994plains]. Basin population grew from 19,8k (18,2k to 21,4k) at 0AD to 23,6k in 400AD, 25,3k in 600AD and an all-time maximum of 26,7k (24,6k to 28,8k; 18,51 persons per 100 km²) in 800AD.

After 800AD, cooling summers and shifts in northern bison ranges brought a gradual moderation rather than sudden collapse. Between 800AD and 1200AD, total population eased by 13,9% to 23k (Table \ref{tab:trajectory-extreme-northern-plains}), stabilised by Northeastern Plains Village earthlodge farming and ditch-fortified villages along the Sheyenne and Maple rivers [@gregg1994plains; @toom2004northeastern]. Fortified late pre-contact settlements including Sprunk (240 peak, 1100-1500AD), Shea (310 peak, 1400-1550AD) and the historic-threshold Cheyenne earthlodge town of Biesterfeldt (480 peak, 1550-1600AD) combined maize-beans-squash horticulture with communal bison hunting, keeping HU 09 at 21,9k in 1300AD, 20,5k in 1500AD and 19,4k (17,8k to 21k) in 1600AD [@toom2004northeastern; @milner2010].

<figure class="crd-table-figure" id="tab:trajectory-extreme-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Souris Loop and Devils Lake Drift Prairie</strong></td><td class="crd-td">0</td><td class="crd-td">1,7k</td><td class="crd-td">5,9k</td><td class="crd-td">6,9k</td><td class="crd-td">7,6k</td><td class="crd-td">6,8k</td><td class="crd-td">6k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Red River of the North Valley</strong></td><td class="crd-td">0</td><td class="crd-td">2,9k</td><td class="crd-td">9,8k</td><td class="crd-td">11,8k</td><td class="crd-td">13,6k</td><td class="crd-td">12,3k</td><td class="crd-td">11,2k</td><td class="crd-td">10k</td></tr>
<tr><td class="crd-td"><strong>Rainy River and Lake of the Woods Boreal Border</strong></td><td class="crd-td">0</td><td class="crd-td">1,2k</td><td class="crd-td">4,1k</td><td class="crd-td">4,9k</td><td class="crd-td">5,5k</td><td class="crd-td">5k</td><td class="crd-td">4,7k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Extreme Northern Plains HU 09 Total</strong></td><td class="crd-td">0</td><td class="crd-td">5,8k</td><td class="crd-td">19,8k</td><td class="crd-td">23,6k</td><td class="crd-td">26,7k</td><td class="crd-td">24,1k</td><td class="crd-td">21,9k</td><td class="crd-td">19,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Benchmark population series by sub-region in Extreme Northern Plains HU 09 from 10000BC to 1600AD.</figcaption>
</figure>

## Sub-Regional Composition, Density and Epochal Growth Rates

Throughout the Common Era, population remained remarkably balanced across the three divisions in density terms (Figure \ref{fig:shares-extreme-northern-plains}, Table \ref{tab:density}). At 800AD, Souris-Devils Lake carried 18,79 persons per 100 km² (7,6k), the Red River Valley 18,64 (13,6k) and the Rainy River border 17,82 (5,5k). Because the Red River Valley covers 50,6% of basin land area, it consistently held half of HU 09 inhabitants: 49,5% at 0AD (9,8k of 19,8k), 50,9% in 800AD (13,6k of 26,7k) and 51,5% in 1600AD (10k of 19,4k). Souris-Devils Lake contributed 26,8% to 29,8% across the same span, while the Rainy River and Lake of the Woods boreal margin held 20,6% to 22% [@lenius1990rainy; @stoltman1973laurel].

Among the 61 catalogued sites, 34 sit in the Red River Valley (peak sum 5.970; median 160), 16 on the Souris-Devils Lake Drift Prairie (peak sum 2.270; median 130) and 11 along the Rainy River borderlands (peak sum 2.660; median 245, Table \ref{tab:subreg-sites}). Measured across cultural epochs (Table \ref{tab:eras}), basin growth decelerated smoothly from 0,074% per year between 9000BC and 5000BC down to 0,037% between 0AD and 800AD before reversing gently at -0,04% per year from 800AD to 1600AD.

<figure class="crd-figure-block" id="fig:shares-extreme-northern-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-extreme-northern-plains/fig3_extreme_northern_plains_shares.png" alt="fig:shares-extreme-northern-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional percentage shares of total population across Extreme Northern Plains HU 09 from 10000BC to 1600AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:density">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Souris Loop and Devils Lake Drift Prairie</strong></td><td class="crd-td">4,2</td><td class="crd-td">14,59</td><td class="crd-td">18,79</td><td class="crd-td">16,81</td><td class="crd-td">14,83</td><td class="crd-td">12,85</td></tr>
<tr><td class="crd-td"><strong>Red River of the North Valley</strong></td><td class="crd-td">3,98</td><td class="crd-td">13,43</td><td class="crd-td">18,64</td><td class="crd-td">16,86</td><td class="crd-td">15,35</td><td class="crd-td">13,71</td></tr>
<tr><td class="crd-td"><strong>Rainy River and Lake of the Woods Boreal Border</strong></td><td class="crd-td">3,89</td><td class="crd-td">13,28</td><td class="crd-td">17,82</td><td class="crd-td">16,2</td><td class="crd-td">15,22</td><td class="crd-td">13,6</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population density (persons per 100 km²) across six benchmarks in Extreme Northern Plains HU 09.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:subreg-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Median Peak</th><th class="crd-th">Leading Three Sites</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Souris Loop and Devils Lake Drift Prairie</strong></td><td class="crd-td">16</td><td class="crd-td">2.270</td><td class="crd-td">132</td><td class="crd-td">Devils Lake-Narrows (290); Sullys Hill Mounds (230); Horner-Kane (210)</td></tr>
<tr><td class="crd-td"><strong>Red River of the North Valley</strong></td><td class="crd-td">34</td><td class="crd-td">5.970</td><td class="crd-td">165</td><td class="crd-td">Biesterfeldt (480); Arvilla (360); Shea (310)</td></tr>
<tr><td class="crd-td"><strong>Rainy River and Lake of the Woods Boreal Border</strong></td><td class="crd-td">11</td><td class="crd-td">2.660</td><td class="crd-td">245</td><td class="crd-td">McKinstry (360); Grand Mound (320); Schocker (290)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Distribution of the 61 catalogued sites across the three Extreme Northern Plains divisions.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:eras">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Cultural Horizon</th><th class="crd-th">Span</th><th class="crd-th">Start Pop.</th><th class="crd-th">End Pop.</th><th class="crd-th">Net Change</th><th class="crd-th">Annual Rate</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lake Agassiz Drainage to Middle Archaic</strong></td><td class="crd-td">9000BC - 5000BC</td><td class="crd-td">300</td><td class="crd-td">5,8k</td><td class="crd-td">+1.833,3%</td><td class="crd-td">0,074%</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic to Early Woodland</strong></td><td class="crd-td">5000BC - 0AD</td><td class="crd-td">5,8k</td><td class="crd-td">19,8k</td><td class="crd-td">+241,4%</td><td class="crd-td">0,025%</td></tr>
<tr><td class="crd-td"><strong>Laurel and Arvilla Woodland Florescence</strong></td><td class="crd-td">0AD - 800AD</td><td class="crd-td">19,8k</td><td class="crd-td">26,7k</td><td class="crd-td">+34,8%</td><td class="crd-td">0,037%</td></tr>
<tr><td class="crd-td"><strong>Late Woodland and Plains Village Shift</strong></td><td class="crd-td">800AD - 1300AD</td><td class="crd-td">26,7k</td><td class="crd-td">21,9k</td><td class="crd-td">-18%</td><td class="crd-td">-0,04%</td></tr>
<tr><td class="crd-td"><strong>Late Pre-Contact Resilience</strong></td><td class="crd-td">1300AD - 1600AD</td><td class="crd-td">21,9k</td><td class="crd-td">19,4k</td><td class="crd-td">-11,4%</td><td class="crd-td">-0,04%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Epochal population transitions and implied annualised growth rates across Extreme Northern Plains HU 09.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:master">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Souris-Devils Lake</th><th class="crd-th">Red River Valley</th><th class="crd-th">Rainy River Border</th><th class="crd-th">Total</th><th class="crd-th">8 pct Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0 - 0</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">100</td><td class="crd-td">150</td><td class="crd-td">50</td><td class="crd-td">300</td><td class="crd-td">276 - 324</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">300</td><td class="crd-td">500</td><td class="crd-td">200</td><td class="crd-td">1k</td><td class="crd-td">920 - 1,1k</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">650</td><td class="crd-td">1,1k</td><td class="crd-td">450</td><td class="crd-td">2,2k</td><td class="crd-td">2k - 2,4k</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">800</td><td class="crd-td">3,8k</td><td class="crd-td">3,5k - 4,1k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">1,7k</td><td class="crd-td">2,9k</td><td class="crd-td">1,2k</td><td class="crd-td">5,8k</td><td class="crd-td">5,3k - 6,3k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">2,4k</td><td class="crd-td">4,1k</td><td class="crd-td">1,7k</td><td class="crd-td">8,2k</td><td class="crd-td">7,5k - 8,9k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">3,2k</td><td class="crd-td">5,4k</td><td class="crd-td">2,3k</td><td class="crd-td">10,9k</td><td class="crd-td">10k - 11,8k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">4,1k</td><td class="crd-td">6,8k</td><td class="crd-td">2,9k</td><td class="crd-td">13,8k</td><td class="crd-td">12,7k - 14,9k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">5k</td><td class="crd-td">8,3k</td><td class="crd-td">3,5k</td><td class="crd-td">16,8k</td><td class="crd-td">15,5k - 18,1k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">5,9k</td><td class="crd-td">9,8k</td><td class="crd-td">4,1k</td><td class="crd-td">19,8k</td><td class="crd-td">18,2k - 21,4k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">6,4k</td><td class="crd-td">10,8k</td><td class="crd-td">4,5k</td><td class="crd-td">21,7k</td><td class="crd-td">20k - 23,4k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">6,9k</td><td class="crd-td">11,8k</td><td class="crd-td">4,9k</td><td class="crd-td">23,6k</td><td class="crd-td">21,7k - 25,5k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">7,3k</td><td class="crd-td">12,8k</td><td class="crd-td">5,2k</td><td class="crd-td">25,3k</td><td class="crd-td">23,3k - 27,3k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">7,6k</td><td class="crd-td">13,6k</td><td class="crd-td">5,5k</td><td class="crd-td">26,7k</td><td class="crd-td">24,6k - 28,8k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">7,2k</td><td class="crd-td">12,9k</td><td class="crd-td">5,2k</td><td class="crd-td">25,3k</td><td class="crd-td">23,3k - 27,3k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">6,8k</td><td class="crd-td">12,3k</td><td class="crd-td">5k</td><td class="crd-td">24,1k</td><td class="crd-td">22,2k - 26k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">6,4k</td><td class="crd-td">11,8k</td><td class="crd-td">4,8k</td><td class="crd-td">23k</td><td class="crd-td">21,2k - 24,8k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">6k</td><td class="crd-td">11,2k</td><td class="crd-td">4,7k</td><td class="crd-td">21,9k</td><td class="crd-td">20,1k - 23,7k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">5,6k</td><td class="crd-td">10,7k</td><td class="crd-td">4,6k</td><td class="crd-td">20,9k</td><td class="crd-td">19,2k - 22,6k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">5,5k</td><td class="crd-td">10,5k</td><td class="crd-td">4,5k</td><td class="crd-td">20,5k</td><td class="crd-td">18,9k - 22,1k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">5,4k</td><td class="crd-td">10,3k</td><td class="crd-td">4,4k</td><td class="crd-td">20,1k</td><td class="crd-td">18,5k - 21,7k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">5,2k</td><td class="crd-td">10k</td><td class="crd-td">4,2k</td><td class="crd-td">19,4k</td><td class="crd-td">17,8k - 21k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Twenty-three benchmark population estimates for Extreme Northern Plains HU 09 (10000BC to 1600AD) with 8% aggregate bounds.</figcaption>
</figure>

## Cross-Border Continuity Across the Canadian Prairies and Boreal Shield

Hydrological connectivity across the 49th parallel makes cross-border conditioning indispensable for HU 09. Both the Souris Loop (flowing out of Saskatchewan through North Dakota and back into Manitoba) and the Red River of the North (flowing northward past Pembina toward Lake Winnipeg) form integrated cultural corridors occupied by Assiniboine, Plains Cree, Anishinaabe and Hidatsa-Cheyenne trade networks [@syms1977cultural; @toom2004northeastern]. Inside `sites_northern_america`, 300 km cross-frontier buffers link HU 09 continuously with the Canadian Prairies and Hudson Bay modules to the north, Upper Mississippi (HU 07) to the south-east and Northern Plains (HU 10) across the Missouri Coteau escarpment, transferring cleanly at 1600AD into Colonial Canada and colonial upper Plains trading routes.

# Limitations

Four limitations affect HU 09 estimates. First, HU 09 carries the smallest radiocarbon sample in the Kelly et al. contiguous United States dataset (N = 149), widening sampling variance around the 827AD peak [@kelly2025; @rorabaugh2023assessing]. Second, the United States HUC-2 boundary cuts across the middle of the Souris, Red and Rainy-Winnipeg drainage basins at the 49th parallel, requiring careful cross-border conditioning against Canadian Prairies and Hudson Bay masks [@syms1977cultural].

Third, mobile seasonal bison-hunting camps across the Drift Prairie leave ephemeral hearth scatters and thin bone beds that are under-represented in excavation registers compared with monumental Laurel and Arvilla burial mounds [@johnson1973arvilla; @gregg1994plains; @wendt2024year]. Fourth, fluctuating mid- and late-Holocene highstands in closed Devils Lake inundated or eroded shoreline camps across Devils Lake-Narrows, reducing early prehistoric sample recovery along inner terrace margins [@gregg1994plains].

# Conclusion

Between 10000BC and 1600AD, human settlement across Extreme Northern Plains Hydrological Unit 09 followed the opening of the Glacial Lake Agassiz plain, rising from zero under ice-dammed meltwaters to a mixed prairie-forest peak of 26,7k around 800AD before settling smoothly near 19,4k in 1600AD without abrupt demographic collapse. Anchored to `sites_northern_america` (93.358 unique site-periods, $\tau_1 = 1,41$, $R^2 = 0,999$) and 61 catalogued complexes, CENTAUR-II restores continuous demographic geography across the Red, Souris and Rainy river borderlands.

# Sources

<div id="refs"></div>
