---
title: "California Hydrological Unit (HU 18): Acorn Economies, Sacramento-San Joaquin Delta and Chumash Maritime Chiefdoms"
subtitle: "CENTAUR-II: Contiguous California Drainage Basin, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: california_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_california_spatial.png"
hero_caption: "Areal mask and 333 settlements across USGS Hydrological Unit 18 (425,20k km²) from 10000BC to 1600AD. Four sub-regions span Klamath-North Coast, Sacramento-Delta, San Joaquin-Tulare and Southern California."
hero_label: "fig:hero-california"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

CENTAUR-II reconstructs the Holocene population of California (USGS Hydrological Unit 18, 425.204 km² across 6.305 five-arcminute cells) from 10000BC to 1600AD across four watershed sub-regions. Anchored to the terrestrial radiocarbon summed probability distribution of Kelly et al. [@kelly2025] (HU 18 median peak at 1578AD, `N = 2.552`, 372 cal BP) and non-stationary Matérn ($\nu = 3/2$) kriging over the Northern America archaeological surface (`sites_northern_america`, 93.358 unique site-periods across 4.457 domestic catchments, 14,12x the global radiocarbon database baseline), total population grows monotonically from 1.450 inhabitants in 10000BC to 177,5k at 0AD, 310k in 1500AD and 336k in 1600AD (0,79 inhabitants/km²). Unlike interior North American basins that crested between 1080AD and 1300AD, California sustained continuous late pre-contact growth through 1600AD because acorn-storage intensification, estuarine and pelagic fisheries and late Spanish missionisation (1769AD) postponed Old World epidemic mortality [@cook1976california; @jones2021california; @lightfoot2009california]. Across 334 ledger candidates, 333 documented settlements are subtracted cleanly prior to rural kriging allocation, accounting for 67.435 inhabitants (21,75% of total) at 1500AD and 80.540 (23,97%) at 1600AD.

# Background

## Ecological Productivity and Historiographic Debate

Ethnographic and archaeological syntheses have long recognised California as the most densely inhabited hunter-fisher-gatherer macro-region north of Mesoamerica [@kroeber1925california; @cook1976california; @moratto1984california]. Across 425,2k km² of Mediterranean valleys, estuarine deltas, oak-savannah foothills and kelp-rich Pacific littoral, Indigenous societies achieved village densities matching or exceeding contemporary maize-farming zones elsewhere in North America without adopting cereal agriculture outside the Colorado River margin [@lightfoot2009california; @arnold2001chumash].

Early demographic estimates diverged sharply on pre-contact totals. Kroeber [@kroeber1925california] originally proposed roughly 133k indigenous Californians at European contact by summing conservative tribelet estimates across linguistic provinces. Subsequent drainage-basin, village-count and Spanish mission baptismal reconstructions by Cook [@cook1976california] raised the pre-mission ceiling to 310k to 350k, demonstrating that early ethnographic surveys undercounted dense Sacramento-San Joaquin delta marsh towns and coastal Chumash capitals. Earlier global demographic grids smoothed California far below Cook's basin totals and failed to capture the late Holocene divergence between coastal California and drought-stressed interior basins.

Ecological carrying capacity rested on three complementary food systems. First, widespread acorn-leaching technology and basketry granaries turned valley oak (*Quercus lobata*), blue oak and tanoak groves across the Central Valley and Coast Ranges into storable winter carbohydrate reserves, reinforced by controlled burning that kept oak savannahs open and productive [@lightfoot2009california; @moratto1984california]. Second, Pacific marine upwelling zones along the Santa Barbara Channel, Monterey Bay and Klamath coast sustained rich kelp-forest fisheries, sea mammals and shellfish beds [@fautin2010overview; @arnold2001chumash]. Third, tule marshes across the Sacramento-San Joaquin Delta and Tulare Lakebed yielded year-round waterfowl, freshwater fish and marsh rhizomes capable of supporting nucleated villages above 1.000 residents.

## Radiocarbon Chronology and Post-Contact Epidemic Timing

Bioarchaeological mortuary analyses across large California burial series reveal no acute epidemic mortality spike following Juan Rodríguez Cabrillo's 1542AD coastal reconnaissance or Francis Drake's 1579AD landfall, placing catastrophic contagious depopulation firmly after permanent Spanish Franciscan missionisation began in 1769AD to 1770AD [@jones2021california; @ubelaker2006]. Independently, Kelly et al. [@kelly2025] analysed 2.552 terrestrial radiocarbon dates across HU 18, deriving a summed probability median peak at 372 cal BP (1578AD, interquartile range 349 to 387 cal BP). Bayesian radiocarbon growth models and palaeo-demographic comparisons confirm that regional growth curves align with carrying-capacity expansion rather than sixteenth-century collapse [@crema2021rcarbon; @crema2021bayesian; @freeman2024model].

At the deep chronological root, coastal migration syntheses and late Pleistocene skeletal and lithic finds along the Channel Islands (`Arlington Springs`, `Daisy Cave`, `Qshiwqshiw`) and Tulare Basin (`Witt Site`, `Lake Mojave`) place early maritime and lakeside entry into California around 11000BC to 10000BC [@hamilton2010archaeological; @moratto1984california]. Ancient mitochondrial DNA analyses along the North Pacific littoral further support long-term Holocene genetic continuity among Pacific coastal populations rather than wholesale late prehistoric population replacement [@cui2013ancient].

# Methodology

## Sub-Regional Partition and Areal Masks

CENTAUR-II partitions HU 18 across 6.305 active five-arcminute cells (425.204 km²) on the 4320x2160 global grid into four hydrologically and culturally distinct sub-regions:

1. **Klamath-Trinity, Eel River and North Coast Ranges (118.439 km², 1.833 pixels, 27,85% of area)**: Encompasses the northern redwood coast, Klamath-Trinity salmon canyons and upper Klamath headwaters extending slightly into southern Oregon (`39,54 N` to `43,38 N`, `119,71 W` to `124,38 W`), inhabited by Yurok, Karuk, Hupa, Tolowa, Wiyot, Pomo and Shasta communities [@moratto1984california; @kroeber1925california].
2. **Sacramento Valley, San Francisco Bay and Central Delta (80.574 km², 1.217 pixels, 18,95% of area)**: Spans the Sacramento River floodplain, Clear Lake, San Francisco Bay shellmound estuary, Sierra Nevada western foothills and the adjacent Owens Valley eastern-slope margin (`37,38 N` to `39,46 N`, `116,62 W` to `123,79 W`), occupied by Patwin, Nisenan, Plains Miwok, Ohlone, Pomo and Owens Valley Paiute groups [@lightfoot2009california; @ugan2024sacramento].
3. **San Joaquin-Tulare Basin, Sierra Foothills and Monterey Coast (137.486 km², 1.983 pixels, 32,33% of area)**: Covers the San Joaquin river basin, Tulare and Buena Vista shallow lake wetlands, southern Sierra foothills, Big Sur coast and western Mojave edge (`34,96 N` to `37,29 N`, `115,12 W` to `122,38 W`), anchored by Northern and Southern Valley Yokuts, Salinan and Esselen towns [@cook1976california; @moratto1984california].
4. **Santa Barbara Channel, Los Angeles Basin and Colorado Desert (88.705 km², 1.272 pixels, 20,86% of area)**: Encompasses the Northern Channel Islands, Santa Barbara Channel littoral, Los Angeles alluvial plain, San Diego estuaries and Peninsular-Colorado Desert valleys (`32,62 N` to `34,88 N`, `114,62 W` to `120,62 W`), inhabited by Chumash maritime chiefdoms, Tongva, Luiseño and Kumeyaay communities [@arnold2001chumash; @fautin2010overview].

## Radiocarbon Kriging and Benchmark Calibration

Rural spatial probabilities come from the Northern America kriging surface (`sites_northern_america`), built by compositing global radiocarbon syntheses [@bird2022p3k14c] with U.S. state archaeological site registries, California Historical Resources Information System syntheses, CRM excavations and Canadian heritage archives. Across mainland North America and Greenland (`481.752` active terrestrial cells), deduplication by catchment and 200-year bin yields 93.358 unique site-period observations across 4.457 domestic Voronoi catchments (`2.678` active inhabited catchments; median radius 27,36 km; 90th percentile radius 59,92 km), representing 14,12x the density of the baseline global radiocarbon compilation alone.

## Spatial Covariates and Cross-Frontier Conditioning

To prevent linear boundary drops where HU 18 borders Oregon, Nevada, Arizona and Baja California, 171 cross-frontier buffer catchments condition Northern Mexico and interior deserts up to 300 km outside the CENTAUR perimeter. Within each of ten Holocene horizons (`10000BC` to `1600AD`), Freeman-Tukey site densities receive 1-ring Poisson-Gamma credibility smoothing and weighted least-squares (WLS) trend fitting against exponential coastal proximity, 13,5 km fluvial distance decay and terrain slope before 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) residual kriging [@paciorek2006matern].

Across all ten horizons, calibrated variograms achieve $\tau_1 = 1,41$ (`1,4144`; $\tau_2 = 2,62$, effective short range 38,7 km), raw nugget-to-sill ratio `0,000`, regularised nugget-to-sill ratio `0,04` and WLS residual fit $R^2 = 0,999$ (`0,9991` to `0,9993`). Smooth two-pass 5-pixel log-multiplier feathering prevents sharp boundary steps across internal divides separating the Klamath mountains, the Central Valley and the Santa Barbara Channel.

Sub-regional trajectories track 23 benchmarks (`10000BC` to `1600AD`) scaled to Kelly et al. [@kelly2025] HU 18 curves and Cook's [@cook1976california] basin carrying capacities, flanked by symmetric `±8%` uncertainty intervals (`92%` bounds).

## Settlement Inventory and Rural Subtraction

To preserve coastal shellmounds, Delta river towns and Channel Island capitals as sharp local peaks rather than blurring them into Sierra granite or Mojave desert pixels, 333 catalogued settlements (`california_settlements.json`) are subtracted from sub-regional totals prior to residual rural kriging allocation. Candidate review in `california_source_ledger.json5` processes 334 regional entries across three waves, excluding 1 duplicate coordinate alias within 2 km (`Emeryville Shellmound`) so no estuary mound enters the spatial subtraction twice.

Jurisdictionally, 329 settlements sit inside California (`104.465` summed peak inhabitants) and 4 sit inside the upper Klamath River headwaters in southern Oregon (`880` summed peak inhabitants, led by `Klamath Marsh` at `320` in `1600AD` and `Klamath Falls (Kawumkan Springs)` at `240` in `1400AD`). Separating these headwater Klamath settlements from the Pacific Northwest module avoids hydrological gaps across the Cascade-Siskiyou divide.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Klamath and North Coast</strong></td><td class="crd-td">118.439</td><td class="crd-td">31,5k</td><td class="crd-td">50k</td><td class="crd-td">55,3k</td><td class="crd-td">56k</td><td class="crd-td">61k</td></tr>
<tr><td class="crd-td"><strong>2. Sacramento and SF Bay Delta</strong></td><td class="crd-td">80.574</td><td class="crd-td">55,5k</td><td class="crd-td">87,5k</td><td class="crd-td">96,8k</td><td class="crd-td">98k</td><td class="crd-td">107k</td></tr>
<tr><td class="crd-td"><strong>3. San Joaquin and Central Coast</strong></td><td class="crd-td">137.486</td><td class="crd-td">50k</td><td class="crd-td">78,5k</td><td class="crd-td">87k</td><td class="crd-td">88k</td><td class="crd-td">96k</td></tr>
<tr><td class="crd-td"><strong>4. Chumash Channel and South</strong></td><td class="crd-td">88.705</td><td class="crd-td">40,5k</td><td class="crd-td">62k</td><td class="crd-td">67,5k</td><td class="crd-td">68k</td><td class="crd-td">72k</td></tr>
<tr><td class="crd-td"><strong>HU 18 Total</strong></td><td class="crd-td">425.204</td><td class="crd-td">177,5k</td><td class="crd-td">278k</td><td class="crd-td">306,6k</td><td class="crd-td">310k</td><td class="crd-td">336k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional area and benchmark population estimates across California (HU 18) from 0AD to 1600AD.</figcaption>
</figure>

# Testing and Validation

Four pre-publication diagnostic gates passed with zero errors at GMT+0:

1. **Radiocarbon Sample Threshold**: HU 18 incorporates `N = 2.552` terrestrial radiocarbon dates [@kelly2025] (excluding marine shell dates to prevent variable coastal reservoir offsets per Hadden et al. [@hadden2023shell]), exceeding the 400-date reliability minimum more than sixfold [@crema2021rcarbon].
2. **Kriging Sharpness and Fit**: Across all ten Holocene horizons in `sites_northern_america`, dimensionless range stays fixed at $\tau_1 = 1,41$ (`<= 1,80`), raw nugget-to-sill ratio equals `0,000`, regularised nugget-to-sill ratio remains `0,04` (`< 0,45`) and WLS residual fit spans $R^2 = 0,9991$ to `0,9993` (Table 2).
3. **Gazetteer and Ledger Reconciliation**: Cross-checking `california_settlements.json` against `california_source_ledger.json5` yields `0` unmatched keys and `0` invalid coordinates (`32,62 N` to `42,93 N`, `115,64 W` to `124,38 W`) across `334` candidates (`333` included sites and `1` excluded duplicate entry).
4. **Sub-Regional Mass Conservation**: Explicit settlement sums equal `67.435` (`21,75%` of `310,0k`) at `1500AD` and `80.540` (`23,97%` of `336,0k`) at `1600AD`, leaving strictly positive rural residuals across all four sub-regions (`71` sites in Klamath-North Coast, `93` in Sacramento-Delta, `64` in San Joaquin-Central Coast and `105` in Chumash Channel-Southern California).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Holocene Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">Range (km)</th><th class="crd-th">WLS R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeoindian &amp; Early Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>2. Middle Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>3. Late Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>4. Early Formative</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>5. Middle Holocene</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>6. Late-Middle Transition</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>7. Early Late Prehistoric</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>8. Middle Late Prehistoric</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>9. Late Pre-Contact</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>10. Protohistoric Contact Horizon</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9991</td></tr>
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
<tr><td class="crd-td"><strong>1. Klamath and North Coast</strong></td><td class="crd-td">71</td><td class="crd-td">18.590</td><td class="crd-td">Rek'woi (680)</td><td class="crd-td">0,47</td><td class="crd-td">0,52</td></tr>
<tr><td class="crd-td"><strong>2. Sacramento and SF Bay Delta</strong></td><td class="crd-td">93</td><td class="crd-td">32.695</td><td class="crd-td">Patwin-Koru (1.300)</td><td class="crd-td">1,22</td><td class="crd-td">1,33</td></tr>
<tr><td class="crd-td"><strong>3. San Joaquin and Central Coast</strong></td><td class="crd-td">64</td><td class="crd-td">19.565</td><td class="crd-td">Tulare-Telamni (1.800)</td><td class="crd-td">0,64</td><td class="crd-td">0,7</td></tr>
<tr><td class="crd-td"><strong>4. Chumash Channel and South</strong></td><td class="crd-td">105</td><td class="crd-td">34.495</td><td class="crd-td">Syuxtun (1.550)</td><td class="crd-td">0,77</td><td class="crd-td">0,81</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlement counts, leading centres and overall population density per km² across California (HU 18) sub-regions.</figcaption>
</figure>

# Results

## Terminal Pleistocene Colonisation and Archaic Intensification (10000BC to 1000BC)

Coastal and lakeside human presence in HU 18 opens at `10000BC` with `1.450` inhabitants distributed across all four sub-regions (`450` in Sacramento-San Joaquin Delta, `400` in San Joaquin-Central Coast, `350` in Chumash Channel-Southern California and `250` in Klamath-North Coast) [@moratto1984california; @hamilton2010archaeological]. Earliest catalogued occupations appear on Santa Rosa Island at `Qshiwqshiw` (`33,96 N, 120,13 W`, active from `10000BC` at `20` inhabitants) and `Arlington Springs` (`10000BC`, `20` to `50`), followed by `Lake Mojave` (`9500BC`, `25` to `45`), `Witt Site` on the western margin of Tulare Lake (`9000BC`, `35` to `380` in `1500AD`), `Borax Lake` (`9000BC`, `30` to `140` in `500AD`), `Daisy Cave` (`9000BC`, `25` to `80` at `0AD`), `C.W. Harris Site` (`8500BC`, `30` to `110` at `0AD`) and `Mostin Site` (`8500BC`, `35` to `75` in `4500BC`).

Between `9000BC` and `5000BC`, rising sea levels flooded outer coastal plains while Millingstone and Early Archaic groups diversified seed-grinding and estuarine shellfish harvesting, lifting HU 18 population from `3,4k` in `9000BC` to `13,3k` in `7000BC` and `36,3k` in `5000BC` (`0,09` inhabitants/km²). By `3000BC` to `1000BC`, Windmiller and Early Horizon mounds along the lower Cosumnes, Mokelumne and San Joaquin rivers (`Tulamniu` `220` in `1000BC`, `West Berkeley` starting `3000BC`, `Ellis Landing` starting `1500BC`, `Emeryville Shellmound` starting `1000BC`) expanded regional population more than threefold from `36,3k` in `5000BC` to `76,8k` in `3000BC`, `104,7k` in `2000BC` and `138,3k` in `1000BC` (`0,33` inhabitants/km²) [@moratto1984california; @lightfoot2009california].

<figure class="crd-figure-block" id="fig:traj-california">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-california/fig2_california_trajectory.png" alt="fig:traj-california" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in California (HU 18) with uncertainty bounds, 10000BC to 1600AD.</figcaption>
</figure>

## Acorn Storage, Shellmound Estuaries and Channel Craft Exchange (0AD to 1200AD)

During the Middle and Late Horizons (`0AD` to `1200AD`), widespread adoption of bedrock-mortar acorn leaching, bow-and-arrow hunting and intensive shell-bead exchange raised California population from `177,5k` at `0AD` (`0,42` inhabitants/km²) to `242,5k` in `600AD`, `278,0k` in `1000AD` and `295,2k` in `1200AD` (`0,69` inhabitants/km²) (Table 1 and Figure 2) [@cook1976california; @lightfoot2009california]. Along San Francisco Bay, deeply stratified shellmounds expanded steadily (`Emeryville Shellmound` rose from `520` at `0AD` to `950` in `1200AD`; `Ellis Landing` peaked at `490` in `800AD`; `Ryan Mound` reached `480` in `1200AD`).

South along the Santa Barbara Channel, Chumash specialists developed sewn-plank canoes (*tomol*), bridging mainland towns and Northern Channel Island flint-bead workshops across turbulent pelagic waters [@arnold2001chumash; @fautin2010overview]. `Syuxtun` expanded from `420` at `0AD` to `680` in `600AD` and `1.150` in `1200AD`, joined by `Helo'` (`680` in `1200AD`), `Muwu` (`480` in `1200AD`) and Los Angeles basin centre `Yaanga` (`680` in `1200AD`). Simultaneously, Yokuts marsh-edge villages expanded across the southern Central Valley, led by `Tulare-Telamni` rising from `480` in `600AD` to `920` in `1100AD`.

## Late Pre-Contact Expansion Through 1600AD

Consistent with Kelly et al. [@kelly2025] placing HU 18's radiocarbon peak at `1578AD` and Jones et al. [@jones2021california] finding no sixteenth-century epidemic shock, California grew throughout the late pre-contact era without a Mediaeval Warm Period or sixteenth-century contraction. Regional totals advanced from `295,2k` in `1200AD` to `306,6k` in `1400AD`, `310,0k` in `1500AD`, `327,0k` in `1550AD` and `336,0k` in `1600AD` (`0,79` inhabitants/km², bounds `309,1k` to `362,9k`) (Figure 3 and Table 5).

Throughout this expansion, all four sub-regions maintained balanced demographic weights. Sacramento-San Joaquin Delta (`80.574 km²`) remained the highest-density sub-region, advancing from `87,5k` in `1000AD` (`1,09` inhabitants/km²) to `98,0k` in `1500AD` (`31,61%` share) and `107,0k` in `1600AD` (`31,85%` share, `1,33` inhabitants/km²), anchored by `Patwin-Koru` (`1.300`), `Emeryville Shellmound` (`1.200`), `Chaw'se-Grinding Rock` (`740`), `Bishop (Payahuunadu)` (`640`), `Hotchkiss` (`520`) and `Pujune` (`520`). San Joaquin-Central Coast grew from `78,5k` in `1000AD` to `88,0k` in `1500AD` (`28,39%`) and `96,0k` in `1600AD` (`28,57%`, `0,70` inhabitants/km²), led by `Tulare-Telamni` (`1.800`), `Tulamniu` (`580`) and `Wukchumni` (`490`).

Along the southern coast, Chumash Channel-Southern California climbed from `62,0k` in `1000AD` to `68,0k` in `1500AD` (`21,94%`) and `72,0k` in `1600AD` (`21,43%`, `0,81` inhabitants/km²), led by `Syuxtun` (`1.550`), `Yaanga` (`1.050`), `Syukhtun` (`850`), `Helo'` (`780`), `Mikiw` (`620` peak in `1500AD`) and `Shisholop` (`610`). In the north, Klamath-North Coast rose from `50,0k` in `1000AD` to `56,0k` in `1500AD` (`18,06%`) and `61,0k` in `1600AD` (`18,15%`, `0,52` inhabitants/km²), anchored by Yurok, Wiyot, Tolowa and Hupa salmon-and-acorn towns at `Rek'woi` (`680`), `Tolowot` (`480`), `Pano` (`470`), `Yontocket` (`420`) and `Takimilding` (`410`).

<figure class="crd-figure-block" id="fig:shares-california">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-california/fig3_california_shares.png" alt="fig:shares-california" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across California (HU 18) from 10000BC to 1600AD.</figcaption>
</figure>

## Chronological Peak Distribution of Catalogued Sites

Across the `333` catalogued settlements (`329` in California with `104.465` summed peak inhabitants; `4` across the Klamath headwaters in southern Oregon with `880` summed peaks), demographic maxima cluster heavily in the final pre-contact century (Table 4). Only `1` site (`Lake Mojave` at `45` in `7500BC`) peaks during the Palaeoindian and Early Archaic era, `5` peak in the Middle and Late Archaic (`365` summed peaks, led by `Stahl Site` at `110` in `2000BC`), `20` peak between `1000BC` and `999AD` (`4.030`, led by `Ellis Landing` at `490`), `52` peak between `1000AD` and `1499AD` (`11.785`, led by `Castro Mound` at `480`), and `255` (`76,58%` of all sites, `89.120` summed peaks) reach their maximum size between `1500AD` and `1600AD`.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Peak Epoch</th><th class="crd-th">Sites</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Mean Peak</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian &amp; Early Archaic (10000-6001BC)</strong></td><td class="crd-td">1</td><td class="crd-td">45</td><td class="crd-td">45</td><td class="crd-td">Lake Mojave (45)</td></tr>
<tr><td class="crd-td"><strong>Middle &amp; Late Archaic (6000-1001BC)</strong></td><td class="crd-td">5</td><td class="crd-td">365</td><td class="crd-td">73</td><td class="crd-td">Stahl Site (110)</td></tr>
<tr><td class="crd-td"><strong>Middle Horizon (1000BC-999AD)</strong></td><td class="crd-td">20</td><td class="crd-td">4.030</td><td class="crd-td">202</td><td class="crd-td">Ellis Landing (490)</td></tr>
<tr><td class="crd-td"><strong>Late Prehistoric (1000-1499AD)</strong></td><td class="crd-td">52</td><td class="crd-td">11.785</td><td class="crd-td">227</td><td class="crd-td">Castro Mound (480)</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact Horizon (1500-1600AD)</strong></td><td class="crd-td">255</td><td class="crd-td">89.120</td><td class="crd-td">349</td><td class="crd-td">Tulare-Telamni (1.800)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Epoch distribution of peak settlement population across the 333 catalogued sites in California (HU 18).</figcaption>
</figure>

## Settlement Size Tiers and Tribelet Hierarchy

Analysing the 333 peak populations by size bracket reflects California's distinctively flat tribelet hierarchy compared with agrarian city-states or Mesoamerican capitals (Table 5). Only `5` regional capitals reach or exceed `1.000` residents (`Tulare-Telamni` `1.800`, `Syuxtun` `1.550`, `Patwin-Koru` `1.300`, `Emeryville Shellmound` `1.200` and `Yaanga` `1.050`, summing to `6.900` inhabitants), while `13` secondary centres span `500` to `999` inhabitants (`8.130` combined peaks).

Nearly four-fifths of all catalogued settlements (`264` sites, `79,28%`, totalling `83.890` peak residents) fall in the `200` to `499` range typical of autonomous multi-lineage acorn-and-fishery villages [@kroeber1925california; @cook1976california], leaving `51` smaller or early Holocene sites below `200` residents (`6.425` summed peaks).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Size Bracket</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Peak Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Major Regional Centres (&gt;= 1.000)</strong></td><td class="crd-td">5</td><td class="crd-td">1,5%</td><td class="crd-td">6.900</td><td class="crd-td">6,5%</td></tr>
<tr><td class="crd-td"><strong>Secondary Towns (500 to 999)</strong></td><td class="crd-td">13</td><td class="crd-td">3,9%</td><td class="crd-td">8.130</td><td class="crd-td">7,7%</td></tr>
<tr><td class="crd-td"><strong>Principal Tribelet Villages (200 to 499)</strong></td><td class="crd-td">264</td><td class="crd-td">79,3%</td><td class="crd-td">83.890</td><td class="crd-td">79,6%</td></tr>
<tr><td class="crd-td"><strong>Small &amp; Early Holocene Sites (&lt; 200)</strong></td><td class="crd-td">51</td><td class="crd-td">15,3%</td><td class="crd-td">6.425</td><td class="crd-td">6,1%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Peak population size tiers across the 333 settlements in the California (HU 18) gazetteer.</figcaption>
</figure>

## Sub-Regional Trajectories from Terminal Growth to Post-1600AD Context

Comparing sub-regional trajectories from `0AD` to `1600AD` reveals why California diverged from both the American Southwest and the Eastern Woodlands (Table 6). Between `1200AD` and `1600AD`, Sacramento-San Joaquin Delta expanded by `15,05%` (`93,0k` to `107,0k`), San Joaquin-Central Coast grew by `14,97%` (`83,5k` to `96,0k`), Klamath-North Coast grew by `14,66%` (`53,2k` to `61,0k`) and Chumash Channel-Southern California grew by `9,92%` (`65,5k` to `72,0k`).

This parallel expansion across northern salmon rivers, interior oak valleys and southern pelagic channels confirms that late pre-contact growth rested on diversified regional adaptations rather than any single crop or exchange system [@lightfoot2009california; @freeman2024model]. Only after permanent Spanish mission and presidio colonisation began in `1769AD` did acute demographic contraction strike across the coastal basins [@jones2021california; @ubelaker2006].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop.</th><th class="crd-th">Lower Bound</th><th class="crd-th">Upper Bound</th><th class="crd-th">Density (per km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">1,4k</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">0,003</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">3,4k</td><td class="crd-td">3,1k</td><td class="crd-td">3,7k</td><td class="crd-td">0,008</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">7,2k</td><td class="crd-td">6,6k</td><td class="crd-td">7,8k</td><td class="crd-td">0,017</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">13,3k</td><td class="crd-td">12,2k</td><td class="crd-td">14,4k</td><td class="crd-td">0,031</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">22,8k</td><td class="crd-td">21k</td><td class="crd-td">24,6k</td><td class="crd-td">0,054</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">36,3k</td><td class="crd-td">33,4k</td><td class="crd-td">39,2k</td><td class="crd-td">0,085</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">54,1k</td><td class="crd-td">49,8k</td><td class="crd-td">58,4k</td><td class="crd-td">0,127</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">76,8k</td><td class="crd-td">70,7k</td><td class="crd-td">82,9k</td><td class="crd-td">0,181</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">104,7k</td><td class="crd-td">96,3k</td><td class="crd-td">113,1k</td><td class="crd-td">0,246</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">138,3k</td><td class="crd-td">127,2k</td><td class="crd-td">149,4k</td><td class="crd-td">0,325</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">177,5k</td><td class="crd-td">163,3k</td><td class="crd-td">191,7k</td><td class="crd-td">0,417</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">200k</td><td class="crd-td">184k</td><td class="crd-td">216k</td><td class="crd-td">0,47</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">221,5k</td><td class="crd-td">203,8k</td><td class="crd-td">239,2k</td><td class="crd-td">0,521</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">242,5k</td><td class="crd-td">223,1k</td><td class="crd-td">261,9k</td><td class="crd-td">0,57</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">261,5k</td><td class="crd-td">240,6k</td><td class="crd-td">282,4k</td><td class="crd-td">0,615</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">278k</td><td class="crd-td">255,8k</td><td class="crd-td">300,2k</td><td class="crd-td">0,654</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">287,5k</td><td class="crd-td">264,5k</td><td class="crd-td">310,5k</td><td class="crd-td">0,676</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">295,2k</td><td class="crd-td">271,6k</td><td class="crd-td">318,8k</td><td class="crd-td">0,694</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">301,6k</td><td class="crd-td">277,5k</td><td class="crd-td">325,7k</td><td class="crd-td">0,709</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">306,6k</td><td class="crd-td">282,1k</td><td class="crd-td">331,1k</td><td class="crd-td">0,721</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">310k</td><td class="crd-td">285,2k</td><td class="crd-td">334,8k</td><td class="crd-td">0,729</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">327k</td><td class="crd-td">300,8k</td><td class="crd-td">353,2k</td><td class="crd-td">0,769</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">336k</td><td class="crd-td">309,1k</td><td class="crd-td">362,9k</td><td class="crd-td">0,79</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Headline population trajectory, 92 pct uncertainty intervals and mean density across California (HU 18).</figcaption>
</figure>

# Limitations

## Geomorphic Burial and Marine Radiocarbon Filtering

Three principal constraints govern HU 18 demographic figures. First, rapid Holocene alluvial sedimentation, historic flood-control levees and agricultural land levelling across the Sacramento Valley and Tulare Lakebed deeply buried or destroyed valley-floor habitation mounds, biasing terrestrial radiocarbon site counts toward coastal terraces and Sierra Nevada foothills [@ugan2024sacramento]. Although `sites_northern_america` incorporates CRM salvage surveys and valley mound inventories, early Holocene valley-floor numbers retain wider uncertainty before `3000BC`.

Second, excluding marine shell radiocarbon dates eliminates variable Pacific upwelling reservoir offsets across San Francisco Bay and the Santa Barbara Channel [@hadden2023shell], yet lowers raw radiocarbon sample densities on outer coastal middens relative to charcoal-rich interior hearths. Balancing shellmound volume trajectories from the gazetteer against terrestrial charcoal density surfaces mitigates this bias without introducing spurious marine age shifts.

## Tribelet Dispersion and Arid Periphery

Third, because pre-contact California comprised hundreds of small autonomous tribelets whose seasonal villages ranged from 50 to 300 inhabitants [@kroeber1925california; @cook1976california], even `333` catalogued sites account for only `23,97%` (`80.540` of `336,0k`) of the `1600AD` population, leaving `76,03%` allocated through the continuous kriged rural substratum. Small seasonal acorn camps in the High Sierra and mobile camps in the Mojave Desert remain represented within sub-regional carrying-capacity surfaces rather than discrete village points [@moratto1984california].

# Conclusion

Over 425.204 km² of river deltas, oak savannahs and kelp-rich coastal basins, California's Indigenous population grew continuously through the Holocene from `1.450` inhabitants at `10000BC` to `177,5k` at `0AD`, `278,0k` at `1000AD`, `310,0k` at `1500AD` and `336,0k` (`0,79` inhabitants/km²) at `1600AD`. Coupling `sites_northern_america` non-stationary Matérn kriging (`93.358` unique site-periods across `4.457` domestic catchments, $\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04`, $R^2 = 0,999$) with `333` excavated settlement series confirms that the Sacramento-San Joaquin Delta (`1,33` inhabitants/km² in `1600AD`) and Santa Barbara Channel (`0,81` inhabitants/km²) ranked among the densest non-agricultural regions in North America.

Rather than peaking during the Mediaeval Warm Period like interior basins, California expanded smoothly right up to `1600AD`, postponing demographic collapse until permanent Spanish mission settlement after `1769AD`. These sub-regional benchmarks and `333` settlement trajectories link Holocene foraging intensification directly into the colonial and modern modules of CENTAUR-II.

# Sources

<div id="refs"></div>
