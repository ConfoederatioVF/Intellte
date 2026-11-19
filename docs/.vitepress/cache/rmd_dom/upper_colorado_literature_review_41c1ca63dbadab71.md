---
title: "Upper Colorado Hydrological Unit (HU 14): Demographic Reconstruction"
subtitle: "CENTAUR-II: Fremont, Ancestral Puebloan and Ute Population Series, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: upper_colorado_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_upper_colorado_spatial.png"
hero_caption: "Three drainage divisions and 241 catalogued settlements across Upper Colorado Hydrological Unit 14 (295,77k km²), spanning the Wyoming Basin, Colorado headwaters and San Juan Four Corners from 10000BC to 1600AD."
hero_label: "fig:hero-upper-colorado"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Upper Colorado Hydrological Unit 14 (295,77k km², covering 4.412 terrestrial 5-arcminute grid cells) traces one of the sharpest pre-Columbian demographic rises and reversals in North America [@kelly2025; @seaber1987hydrologic]. Reconstructed across three ecological divisions under CENTAUR-II (the Green River and Wyoming High Desert Basin, the Colorado-Gunnison Headwaters and Canyonlands and the San Juan Basin and Four Corners), regional population expands from 750 (690 to 810) in 10000BC to 10,5k in 5000BC and 41,6k (38,3k to 44,9k) in 0AD, reaching a basin-wide peak of 62,3k (57,3k to 67,3k; 21,06 persons per 100 km²) around 800AD within four years of the Kelly et al. radiocarbon median peak of 796AD [@kelly2025; @finley2020fremont].

While the northern Fremont and headwater basins contracted steadily after 800AD, the San Juan core expanded to 34,5k in 1100AD (54,78 persons per 100 km²) during the Chacoan and early Mesa Verde florescence, sustaining a basin total of 61,1k before Great Drought emigration reduced San Juan numbers by 66,1% between 1200AD (31k) and 1300AD (10,5k) and lowered total HU 14 population to 29,3k in 1300AD and 27k (24,8k to 29,2k) by 1600AD [@lekson2006chaco; @varien1999sedentism; @robinson2021dendro]. Spatial allocation rests on the continental North American non-stationary Matérn ($\nu = 3/2$) radiocarbon composite (93.129 unique site-periods across 3.833 domestic catchments, 2.570 active inhabited or 67,05% coverage and 251 cross-frontier buffer catchments, 14,24x baseline) coupled with 241 catalogued settlements from 576 ledger candidates (327 duplicate-alias consolidations and 8 excluded non-habitation cave features) [@bird2022p3k14c; @kelly2025].



# Background

## Drainage Topography and Vertical Ecology

Upper Colorado Hydrological Unit 14 encompasses the Green, Yampa, White, Price, San Rafael, Dirty Devil, Gunnison, Dolores and San Juan river systems across southwestern Wyoming, eastern Utah, western Colorado, northeastern Arizona and northwestern New Mexico [@seaber1987hydrologic]. Bounded on the east by the Continental Divide across the Wind River, Park, Sawatch and San Juan ranges and on the west by the Wasatch and High Plateaus escarpment, the basin funnels snowmelt through deeply entrenched sandstone canyons toward Lees Ferry above the Grand Canyon. Elevation climbs from canyon floors below 1.200 metres to alpine summits above 4.000 metres, producing steep vertical gradients in frost-free growing days, winter snowpack storage and summer North American monsoon rainfall [@finley2020fremont; @madsen1998fremont].

Such extreme relief prevented uniform agricultural settlement across the watershed. Productive alluvial floodplains, check-dammed side canyons and loess-mantled mesa tops above 1.800 metres, most notably across Montezuma Valley, Mesa Verde and the Tavaputs-Book Cliffs fringe, supported dryland and runoff maize cultivation, whereas high desert basins across Wyoming and barren slickrock canyon interiors supported dispersed big-game hunting, seed gathering and wild-tuber transport [@kelly2013rocky; @louderback2026ancient].

## Cultural Horizons Across Northern Fremont and Southern Puebloan Zones

During the Early and Middle Holocene, mobile Palaeoindian and Archaic bands moved seasonally between sagebrush pronghorn and bison drives in the Upper Green River Basin and rockshelters along the San Rafael Swell and Escalante canyons [@kelly2013rocky; @kelly2022new]. After 1000BC, maize (*Zea mays*) horticulture entered the basin from the southern Southwest, splitting HU 14 into two divergent demographic regimes. In the San Juan Basin and Four Corners (62.975 km², 21,3% of area, 909 cells), Basketmaker II-III pithouse clusters evolved into multi-storey sandstone Chacoan great houses after 850AD and densely packed canyon cliff villages across Mesa Verde and Tsegi Canyon by 1150AD to 1280AD [@lekson2006chaco; @varien1999sedentism].

Further north across the Colorado-Gunnison Headwaters and Canyonlands (103.080 km², 34,9% of area, 1.522 cells) and the Green River and Wyoming High Desert Basin (129.717 km², 43,9% of area, 1.981 cells), Fremont communities cultivated cold-tolerant dent maize along alluvial fans while storing harvests in cliffside masonry granaries and hunting bison across the Uinta and Wyoming plains [@madsen1998fremont; @finley2020fremont]. Following late thirteenth-century megadroughts and cool growing seasons, sedentary Fremont and San Juan farming gave way to mobile Numic (Ute and Southern Paiute) and Diné (Navajo) land-use systems prior to Spanish entry [@cook2013megadroughts; @nichols2019violence] (Table \ref{tab:subregions-upper-colorado}).

<figure class="crd-table-figure" id="tab:subregions-upper-colorado">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Grid Cells</th><th class="crd-th">Area km² (Share)</th><th class="crd-th">Bounding Box</th><th class="crd-th">Peak Year (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Green River and Wyoming High Desert Basin (Fremont North)</strong></td><td class="crd-td">1.981</td><td class="crd-td">129.717 (43,9%)</td><td class="crd-td">38,12-43,38N, 106,62-111,46W</td><td class="crd-td">800AD (16,5k)</td></tr>
<tr><td class="crd-td"><strong>Colorado-Gunnison Headwaters and Canyonlands</strong></td><td class="crd-td">1.522</td><td class="crd-td">103.080 (34,9%)</td><td class="crd-td">36,62-40,46N, 105,62-112,21W</td><td class="crd-td">800AD (19,8k)</td></tr>
<tr><td class="crd-td"><strong>San Juan Basin and Four Corners and Mesa Verde</strong></td><td class="crd-td">909</td><td class="crd-td">62.975 (21,3%)</td><td class="crd-td">35,54-37,88N, 106,62-110,79W</td><td class="crd-td">1100AD (34,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, 5-arcminute cell counts, land areas and peak population dates across Upper Colorado HU 14.</figcaption>
</figure>

# Methodology

## Radiocarbon Calibration and Sub-Regional Partitioning

Long-run temporal trends anchor strictly to the United States Geological Survey HUC-2 boundary for Upper Colorado HU 14 and the Kelly et al. IntCal20 radiocarbon curve (N = 2.088 quality-screened dates with standard error at most 100 years) [@kelly2025; @seaber1987hydrologic]. Across 500 running-mean resampling runs, Kelly et al. identify a basin mode spanning 1.106 to 1.237 cal BP (713AD to 844AD), bounded by a first quartile at 1.129 cal BP (821AD), a third quartile at 1.169 cal BP (781AD), a mean of 1.160 cal BP (790AD) and a median peak at 1.154 cal BP (796AD) [@kelly2025].

To resolve chronological divergence between the northern Fremont-foraging basins and the southern Puebloan core, HU 14 is divided into three contiguous 5-arcminute masks totalling 4.412 cells (295.772 km²). Twenty-three benchmark estimates from 10000BC to 1600AD reconcile basin-level radiocarbon density curves [@kelly2025; @peros2010prehistoric] with sub-regional architectural carrying capacities derived from excavated Fremont granary-pithouse clusters and Mesa Verde-Chacoan Village Ecodynamics Project household series [@finley2020fremont; @varien1999sedentism; @lekson2006chaco]. Each benchmark carries a symmetric plus or minus 8% structural uncertainty envelope covering chronological calibration spread and early Holocene preservation loss [@ubelaker2006; @robinson2021dendro].

## Multi-Registry Spatial Disaggregation

Gridded rural habitation weights across all 4.412 pixels draw on the continental North American non-stationary Matérn ($\nu = 3/2$) residual kriging framework spanning 493.687 valid terrestrial 5-arcminute cells (18,56M km², with 78.938 to 149.138 active inhabited non-wasteland cells across horizons). Rather than relying solely on raw radiocarbon counts, the continental surface composites Kelly and Robinson's Lower 48 radiocarbon database [@kelly2022new; @kelly2025], p3k14c [@bird2022p3k14c] and c14bazAAR with the Southwest Social Networks (SWSN) CriticalScales monument inventory, the Village Ecodynamics Project II (VEP II) central Mesa Verde habitation database and CENTAUR regional gazetteer coordinates.

After spatial-chronological deduplication by catchment and 200-year bin, the North American composite contains 93.129 unique site-periods (286.193 horizon site records) aggregated across 3.833 domestic Voronoi catchments (15,52M km²; 2.570 active inhabited catchments, 67,05% coverage; equivalent circular median radius 29,48 km and 90th percentile 40,95 km overall, or 29,3 km and 39,85 km across active catchments), delivering an effective sampling density 14,24x higher than the 6.539 legacy baseline inside the continental perimeter. An outer ring of 251 cross-frontier buffer catchments extending up to 300 km joins HU 14 continuously with Great Basin (HU 16), Arizona (HU 15), Rio Grande (HU 13) and Northern Plains (HU 10) masks across shared plateaus and mountain passes.

Within each of the ten Holocene horizons (13000BC to 1650AD), weighted least squares residual kriging couples catchment density with five biophysical covariates: terrain habitability, agro-ecological suitability, ecozone productivity, 13,5 km exponential fluvial distance and coastal access. Across the Colorado Plateau, fluvial proximity and natural suitability focus density tightly along perennial San Juan, Animas, Dolores, Green and Gunnison river terraces rather than arid slickrock benches.

## Settlement Subtraction and Seam Feathering

Prior to scaling rural cells inside the regional areal mask, the mosaic stage subtracts the active trajectories of 241 catalogued Puebloan, Fremont and Archaic settlements from their parent sub-region. Two separable 4-pixel smoothing passes then feather inter-basin boundaries along the San Juan-Little Colorado divide, Continental Divide and Wasatch Plateau while conserving exact sub-regional totals.

# Testing and Validation

Four quantitative checks govern the Upper Colorado HU 14 module:

1. **Kriging Sharpness and Fit**: Across all ten Holocene horizons of the North American Matérn ($\nu = 3/2$) surface, regularised dimensionless short-range correlation stands at $\tau_1 = 1,35$ on all ten horizons (raw 1,519 to 1,6098, mean 1,5782, well below the 1,8 limit), long-range scale stands at $\tau_2 = 2,9025$ (2,9) and effective short range spans 45,23 km to 47,94 km (mean 47 km). Raw variogram nugget-to-sill equals 0 across all ten horizons, regularised to 0,04 (0,0417, well below 0,45), and WLS residual $R^2$ ranges from 0,999 to 0,9992 across all ten horizons (Table \ref{tab:horizons}).
2. **Radiocarbon and Dendrochronological Timing**: Reconstructed HU 14 population crests at 62,3k in 800AD, within four years of the Kelly et al. radiocarbon median peak of 796AD (1.154 cal BP) [@kelly2025]. Sub-regional separation reproduces the chronological offset between northern Fremont florescence (peaking at 16,5k and 19,8k in 800AD) and San Juan Pueblo II-III expansion (climbing to 34,5k in 1100AD) [@finley2020fremont; @lekson2006chaco].
3. **Drought Contraction Alignment**: The 66,1% contraction in the San Juan Basin between 1200AD (31k) and 1300AD (10,5k), alongside a 45,4% basin-wide contraction from 53,7k to 29,3k, matches tree-ring cutting-date cessations and Great Drought aridity reconstructions [@robinson2021dendro; @cook2013megadroughts; @varien1999sedentism].
4. **Gazetteer and Ledger Reconciliation**: Reconciling the settlement gazetteer against the regional source ledger accounts for all 576 ledger candidates, comprising 241 included settlements and 335 excluded records (327 duplicate-alias consolidations within 2 to 25 km of canonical Puebloan and Fremont sites and 8 unquantified non-habitation cave features), with zero unaccounted candidates.

<figure class="crd-table-figure" id="tab:horizons">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Analytical Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Range (km)</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">Residual R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeoindian and Early Archaic (13000-6000BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">45,23</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>2. Middle Archaic (6000-3000BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,94</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>3. Late Archaic (3000-1000BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,14</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>4. Early Woodland and Formative (1000-200BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">46,83</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>5. Middle Woodland Hopewell (200BC-400AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,46</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>6. Late Woodland and Dorset (400-800AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,27</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>7. Early Mississippian and Pueblo II (800-1100AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">46,59</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>8. Middle Mississippian and Pueblo III (1100-1300AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,2</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>9. Late Pre-Contact, Oneota and Thule (1300-1500AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,12</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>10. Protohistoric Contact Horizon (1500-1650AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,2</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Variogram calibration across the ten Holocene horizons of the North American kriging surface.</figcaption>
</figure>

# Results

## Holocene Foragers to Basketmaker and Fremont Florescence (10000BC to 800AD)

Human occupation in Upper Colorado HU 14 began prior to 10000BC (750 regional total), anchored along high-altitude Wyoming sagebrush steppes and early Colorado Plateau rockshelters [@kelly2013rocky; @kelly2022new]. As Early Holocene grasslands stabilised, Palaeoindian and Early Archaic camps such as Finley Site (8500BC onward, 30 peak), Blue Point (8000BC onward, 25 peak) and Pine Spring (7500BC onward, 30 peak) in the Wyoming Basin and Sudden Shelter (5500BC onward, 30 peak) and Joe's Valley Alcove (4000BC onward, 30 peak) in Utah's canyonlands documented growing seasonal mobility [@kelly2013rocky]. Basin-wide numbers doubled from 1,5k in 9000BC to 2,75k in 8000BC, then expanded through the Middle Archaic to 7,2k in 6000BC, 10,5k in 5000BC, 19,4k in 3000BC and 25,6k in 2000BC (Figure \ref{fig:trajectory-upper-colorado}).

During the Late Archaic and Basketmaker II-III transition (1000BC to 800AD), broad-spectrum plant management, including long-distance transport of the Four Corners wild potato (*Solanum jamesii*) alongside introduced maize and squash, enabled sustained residential sedentism [@louderback2026ancient; @madsen1998fremont]. Total population climbed from 32,8k in 1000BC to 41,6k at 0AD, 53,8k in 400AD and 58,4k in 600AD before reaching the basin-wide zenith of 62,3k (57,3k to 67,3k; 21,06 persons per 100 km²) in 800AD [@kelly2025; @finley2020fremont].

In 800AD, demographic weight remained balanced across the watershed: the Green River and Wyoming Basin stood at its all-time peak of 16,5k (12,72 per 100 km²), anchored by communal bison kills and canyon sites such as Range Creek (640 peak), Nine Mile Canyon (610 peak) and Wardell-Green River (310 peak); the Colorado-Gunnison Headwaters and Canyonlands stood at its peak of 19,8k (19,21 per 100 km²), led by Coombs Site, Escalante Pueblo, McPhee Village and Snake Rock Village (1,06k peaks); and the San Juan and Four Corners division held 26k (41,29 per 100 km²).

<figure class="crd-figure-block" id="fig:trajectory-upper-colorado">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-upper-colorado/fig2_upper_colorado_trajectory.png" alt="fig:trajectory-upper-colorado" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory across Upper Colorado HU 14 from 10000BC to 1600AD, with shaded 8 per cent uncertainty envelope.</figcaption>
</figure>

## Chacoan Aggregation, Mesa Verde Migration and Numic Transition (800AD to 1600AD)

After 800AD, northern and southern trajectories diverged sharply. Multidecadal cooling and shorter frost-free summers in the Wyoming Basin and Tavaputs Plateau eroded northern Fremont maize farming, pushing Green River population down from 16,5k in 800AD to 13,2k in 1000AD, 10,2k in 1200AD and 8,6k by 1300AD [@finley2020fremont; @kelly2013rocky]. Across the Colorado-Gunnison Headwaters, numbers eased similarly from 19,8k in 800AD to 16,5k in 1000AD and 10,2k in 1300AD, even as pockets along Muddy Creek and the Fremont frontier sustained local centres such as Snake Rock Village (1,06k), Coombs Site (1,06k), Red Knobs (905) and Turner-Look (827).

Simultaneously, warm summer monsoons and extensive floodwater-farming networks across the San Juan Basin propelled Ancestral Puebloan aggregation into monumental stone masonry towns [@lekson2006chaco; @varien1999sedentism]. San Juan population jumped from 26k in 800AD to 30,5k in 1000AD and peaked at 34,5k in 1100AD (54,78 persons per 100 km²), holding the basin total at 61,1k despite northern declines. Tsé Bíyó' Áshkhii (the Chaco Canyon complex centred on Pueblo Bonito, 3,2k in 1100AD), Una Vida (1,06k), Pueblo Alto (1,06k), Peñasco Blanco (1,06k), Kin Kletso (1,06k) and Kin Bineola (1,058k) anchored Chaco Canyon, while northern outlier capitals at Aztec Ruins (1,45k in 1200AD), Salmon (1,06k), Salmon Ruins (920) and Morris 41 (1,06k) consolidated the Animas and Middle San Juan valleys [@lekson2006chaco].

Following the twelfth-century collapse of the Chacoan regional system, population shifted onto the Mesa Verde cuesta and McElmo-Dolores uplands, where canyon-rim cliff dwellings and fortified spring-head pueblos peaked around 1200AD to 1275AD at Cliff Palace (1,85k), Yellow Jacket Pueblo (1,35k), Sand Canyon Pueblo (1,06k), Shields Pueblo (1,06k), Woods Canyon Pueblo (1,06k), Wallace Ruin (1,06k) and Castle Rock Pueblo (1,06k) [@varien1999sedentism; @robinson2021dendro]. Severe late thirteenth-century droughts (1276AD to 1299AD) coupled with escalating inter-village violence triggered wholesale emigration southward toward the Rio Grande, Hopi and Zuni [@cook2013megadroughts; @nichols2019violence]. San Juan numbers plunged by 66,1% from 31k in 1200AD to 10,5k in 1300AD, dragging HU 14 total population down to 29,3k in 1300AD and 26,2k in 1400AD before late pre-contact Numic and early Diné bands stabilised the watershed near 28,5k in 1500AD and 27k in 1600AD (Table \ref{tab:trajectory-upper-colorado}).

<figure class="crd-table-figure" id="tab:trajectory-upper-colorado">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Green River and Wyoming High Desert Basin (Fremont North)</strong></td><td class="crd-td">200</td><td class="crd-td">2,8k</td><td class="crd-td">10,8k</td><td class="crd-td">13,8k</td><td class="crd-td">16,5k</td><td class="crd-td">11,8k</td><td class="crd-td">8,6k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Colorado-Gunnison Headwaters and Canyonlands</strong></td><td class="crd-td">250</td><td class="crd-td">3,5k</td><td class="crd-td">12,8k</td><td class="crd-td">16,5k</td><td class="crd-td">19,8k</td><td class="crd-td">14,8k</td><td class="crd-td">10,2k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>San Juan Basin and Four Corners and Mesa Verde</strong></td><td class="crd-td">300</td><td class="crd-td">4,2k</td><td class="crd-td">18k</td><td class="crd-td">23,5k</td><td class="crd-td">26k</td><td class="crd-td">34,5k</td><td class="crd-td">10,5k</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>Upper Colorado HU 14 Total</strong></td><td class="crd-td">750</td><td class="crd-td">10,5k</td><td class="crd-td">41,6k</td><td class="crd-td">53,8k</td><td class="crd-td">62,3k</td><td class="crd-td">61,1k</td><td class="crd-td">29,3k</td><td class="crd-td">27k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Benchmark population series by sub-region in Upper Colorado HU 14 from 10000BC to 1600AD.</figcaption>
</figure>

## Sub-Regional Composition, Density and Epochal Growth Rates

As shown in Figure \ref{fig:shares-upper-colorado} and Table \ref{tab:density}, the San Juan and Four Corners sub-region consistently carried the highest population density despite occupying just 21,3% of basin land area (62.975 km²). Its share rose from 40% in 10000BC and 43,3% in 0AD to 56,5% in 1100AD and a maximum of 57,7% in 1200AD (31k of 53,7k; 49,23 persons per 100 km², down slightly from 54,78 in 1100AD). After the late thirteenth-century Pueblo III depopulation, the San Juan share dropped abruptly to 35,8% in 1300AD (16,67 per 100 km²), leaving 64,2% of basin inhabitants in the northern Green River and Colorado-Gunnison foraging basins before modest Diné-Ute recovery brought San Juan back to 42,6% (11,5k of 27k) by 1600AD [@varien1999sedentism; @nichols2019violence].

Across the 241 catalogued settlements, site concentration is heavily skewed southward: San Juan and Four Corners contains 186 settlements (peak sum 75.950; median 350), whereas the Green River Basin holds 29 (peak sum 3.050; median 60) and the Colorado Headwaters hold 26 (peak sum 13.325; median 312,5, Table \ref{tab:subreg-sites}). Measured across cultural epochs (Table \ref{tab:eras}), HU 14 posted its fastest sustained growth across 10000BC to 5000BC (0,053% per year) and 0AD to 800AD (0,05% per year) before contracting at -0,367% per year across 1100AD to 1300AD.

<figure class="crd-figure-block" id="fig:shares-upper-colorado">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-upper-colorado/fig3_upper_colorado_shares.png" alt="fig:shares-upper-colorado" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional percentage shares of total population across Upper Colorado HU 14 from 10000BC to 1600AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:density">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Green River and Wyoming High Desert Basin (Fremont North)</strong></td><td class="crd-td">2,16</td><td class="crd-td">8,33</td><td class="crd-td">12,72</td><td class="crd-td">9,1</td><td class="crd-td">6,63</td><td class="crd-td">5,4</td></tr>
<tr><td class="crd-td"><strong>Colorado-Gunnison Headwaters and Canyonlands</strong></td><td class="crd-td">3,4</td><td class="crd-td">12,42</td><td class="crd-td">19,21</td><td class="crd-td">14,36</td><td class="crd-td">9,9</td><td class="crd-td">8,25</td></tr>
<tr><td class="crd-td"><strong>San Juan Basin and Four Corners and Mesa Verde</strong></td><td class="crd-td">6,67</td><td class="crd-td">28,58</td><td class="crd-td">41,29</td><td class="crd-td">54,78</td><td class="crd-td">16,67</td><td class="crd-td">18,26</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population density (persons per 100 km²) across six benchmarks in Upper Colorado HU 14.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:subreg-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Median Peak</th><th class="crd-th">Leading Three Settlements</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Green River and Wyoming High Desert Basin (Fremont North)</strong></td><td class="crd-td">29</td><td class="crd-td">3.050</td><td class="crd-td">60</td><td class="crd-td">Range Creek (640); Nine Mile Canyon (610); Wardell-Green River (310)</td></tr>
<tr><td class="crd-td"><strong>Colorado-Gunnison Headwaters and Canyonlands</strong></td><td class="crd-td">26</td><td class="crd-td">13.325</td><td class="crd-td">312,5</td><td class="crd-td">Coombs Site (1,1k); Escalante GH (1,1k); Escalante Pueblo (1,1k)</td></tr>
<tr><td class="crd-td"><strong>San Juan Basin and Four Corners and Mesa Verde</strong></td><td class="crd-td">186</td><td class="crd-td">75.950</td><td class="crd-td">350</td><td class="crd-td">Tsé Bíyó' Áshkhii (3,2k); Cliff Palace (1,8k); Aztec Ruins (1,4k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Distribution of the 241 catalogued settlements across the three Upper Colorado divisions.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:eras">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Cultural Horizon</th><th class="crd-th">Span</th><th class="crd-th">Start Pop.</th><th class="crd-th">End Pop.</th><th class="crd-th">Net Change</th><th class="crd-th">Annual Rate</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian to Middle Archaic</strong></td><td class="crd-td">10000BC - 5000BC</td><td class="crd-td">750</td><td class="crd-td">10,5k</td><td class="crd-td">+1.300%</td><td class="crd-td">0,053%</td></tr>
<tr><td class="crd-td"><strong>Late Archaic to Basketmaker II</strong></td><td class="crd-td">5000BC - 0AD</td><td class="crd-td">10,5k</td><td class="crd-td">41,6k</td><td class="crd-td">+296,2%</td><td class="crd-td">0,028%</td></tr>
<tr><td class="crd-td"><strong>Basketmaker III and Fremont Apex</strong></td><td class="crd-td">0AD - 800AD</td><td class="crd-td">41,6k</td><td class="crd-td">62,3k</td><td class="crd-td">+49,8%</td><td class="crd-td">0,05%</td></tr>
<tr><td class="crd-td"><strong>Chacoan Outlier Shift</strong></td><td class="crd-td">800AD - 1100AD</td><td class="crd-td">62,3k</td><td class="crd-td">61,1k</td><td class="crd-td">-1,9%</td><td class="crd-td">-0,006%</td></tr>
<tr><td class="crd-td"><strong>Great Drought Migration</strong></td><td class="crd-td">1100AD - 1300AD</td><td class="crd-td">61,1k</td><td class="crd-td">29,3k</td><td class="crd-td">-52%</td><td class="crd-td">-0,367%</td></tr>
<tr><td class="crd-td"><strong>Numic and Early Diné Stabilisation</strong></td><td class="crd-td">1300AD - 1600AD</td><td class="crd-td">29,3k</td><td class="crd-td">27k</td><td class="crd-td">-7,8%</td><td class="crd-td">-0,027%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Epochal population transitions and implied annualised growth rates across Upper Colorado HU 14.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:master">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Green River-WY</th><th class="crd-th">CO Headwaters</th><th class="crd-th">San Juan</th><th class="crd-th">Total</th><th class="crd-th">8 pct Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">200</td><td class="crd-td">250</td><td class="crd-td">300</td><td class="crd-td">750</td><td class="crd-td">690 - 810</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">400</td><td class="crd-td">500</td><td class="crd-td">600</td><td class="crd-td">1,5k</td><td class="crd-td">1,4k - 1,6k</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">750</td><td class="crd-td">900</td><td class="crd-td">1,1k</td><td class="crd-td">2,8k</td><td class="crd-td">2,5k - 3k</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">4,5k</td><td class="crd-td">4,1k - 4,9k</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">7,2k</td><td class="crd-td">6,6k - 7,8k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">2,8k</td><td class="crd-td">3,5k</td><td class="crd-td">4,2k</td><td class="crd-td">10,5k</td><td class="crd-td">9,7k - 11,3k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">3,9k</td><td class="crd-td">4,8k</td><td class="crd-td">5,8k</td><td class="crd-td">14,5k</td><td class="crd-td">13,3k - 15,7k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">5,2k</td><td class="crd-td">6,4k</td><td class="crd-td">7,8k</td><td class="crd-td">19,4k</td><td class="crd-td">17,8k - 21k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">6,8k</td><td class="crd-td">8,3k</td><td class="crd-td">10,5k</td><td class="crd-td">25,6k</td><td class="crd-td">23,6k - 27,6k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">8,6k</td><td class="crd-td">10,4k</td><td class="crd-td">13,8k</td><td class="crd-td">32,8k</td><td class="crd-td">30,2k - 35,4k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">10,8k</td><td class="crd-td">12,8k</td><td class="crd-td">18k</td><td class="crd-td">41,6k</td><td class="crd-td">38,3k - 44,9k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">12,2k</td><td class="crd-td">14,5k</td><td class="crd-td">21k</td><td class="crd-td">47,7k</td><td class="crd-td">43,9k - 51,5k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">13,8k</td><td class="crd-td">16,5k</td><td class="crd-td">23,5k</td><td class="crd-td">53,8k</td><td class="crd-td">49,5k - 58,1k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">15,2k</td><td class="crd-td">18,2k</td><td class="crd-td">25k</td><td class="crd-td">58,4k</td><td class="crd-td">53,7k - 63,1k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">16,5k</td><td class="crd-td">19,8k</td><td class="crd-td">26k</td><td class="crd-td">62,3k</td><td class="crd-td">57,3k - 67,3k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">13,2k</td><td class="crd-td">16,5k</td><td class="crd-td">30,5k</td><td class="crd-td">60,2k</td><td class="crd-td">55,4k - 65k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">11,8k</td><td class="crd-td">14,8k</td><td class="crd-td">34,5k</td><td class="crd-td">61,1k</td><td class="crd-td">56,2k - 66k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">10,2k</td><td class="crd-td">12,5k</td><td class="crd-td">31k</td><td class="crd-td">53,7k</td><td class="crd-td">49,4k - 58k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">8,6k</td><td class="crd-td">10,2k</td><td class="crd-td">10,5k</td><td class="crd-td">29,3k</td><td class="crd-td">27k - 31,6k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">7,6k</td><td class="crd-td">8,8k</td><td class="crd-td">9,8k</td><td class="crd-td">26,2k</td><td class="crd-td">24,1k - 28,3k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">7,5k</td><td class="crd-td">9k</td><td class="crd-td">12k</td><td class="crd-td">28,5k</td><td class="crd-td">26,2k - 30,8k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">7,3k</td><td class="crd-td">8,8k</td><td class="crd-td">11,8k</td><td class="crd-td">27,9k</td><td class="crd-td">25,7k - 30,1k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">7k</td><td class="crd-td">8,5k</td><td class="crd-td">11,5k</td><td class="crd-td">27k</td><td class="crd-td">24,8k - 29,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Twenty-three benchmark population estimates for Upper Colorado HU 14 (10000BC to 1600AD) with 8% uncertainty bounds.</figcaption>
</figure>

## Irrigation, Granary Storage and Cross-Border Continuity

Demographic resilience across the Colorado Plateau depended on water harvesting, food storage and exchange across hydrological divides. Along the San Juan, Chaco and McElmo drainages, stone check-dams, contour terraces and gravel-mulched plots trapped summer monsoon sheetwash, while Four Corners wild potato (*Solanum jamesii*) tubers travelled over hundreds of kilometres along Puebloan trails to supplement maize harvests [@louderback2026ancient; @varien1999sedentism]. Further north in Range Creek and Nine Mile Canyon, Fremont farmers tucked defensive masonry granaries onto narrow cliff ledges to protect overwintering grain from both summer aridity and raiding neighbours [@finley2020fremont; @madsen1998fremont].

Because late thirteenth-century migrants from Mesa Verde and the San Juan Basin moved southward into the Little Colorado, Rio Grande and Hopi mesas while Numic speakers expanded eastward out of the Great Basin, the continental North American kriging surface conditions HU 14 smoothly across shared borders with Arizona (HU 15), Great Basin (HU 16), Rio Grande (HU 13) and Northern Plains (HU 10) [@robinson2021dendro; @nichols2019violence; @kohler2014greater]. Multi-century tree-ring exploration and drought synthesis across the central Mesa Verde landscape confirms that cool and dry twelfth- and thirteenth-century spells eroded dry-farming niches well before final depopulation [@bocinsky2016exploration; @schwindt2016social]. At the 1600AD benchmark, residual Ute, Southern Paiute and early Diné populations connect directly into colonial Southwestern territorial trajectories without abrupt administrative boundary steps.

# Limitations

Four methodological constraints govern these HU 14 estimates. First, radiocarbon dates under-sample late Pueblo III and Pueblo IV masonry towns relative to earlier Basketmaker pithouse villages because Southwestern archaeologists rely primarily on tree-ring cutting dates after 1000AD [@robinson2021dendro; @kelly2025; @schwindt2016social]. Combining radiocarbon distributions with SWSN and VEP II architectural site series mitigates that bias in the San Juan Basin, though minor canyon settlements without tree-ring records remain less precisely dated.

Second, pre-1300AD mobile Ute and Archaic hunting camps across Wyoming sagebrush basins leave ephemeral hearth signatures that are under-represented relative to multi-storey masonry pueblos [@madsen1998fremont; @kelly2013rocky]. Third, county and HUC-2 boundaries divide the Navajo-Puebloan frontier along the Chuska and Defiance divides between HU 14 and Arizona (HU 15) as well as the San Juan-Chama crest shared with Rio Grande (HU 13), requiring continuous 300 km cross-frontier conditioning. Fourth, interpolated cluster trajectories carried forward from regional SWSN survey bins retain terminal 1600AD placeholder weights on 84 catalogued records even where masonry great houses themselves were abandoned by 1300AD, so sub-regional totals rather than individual site tails govern the late pre-contact curve [@varien1999sedentism].

# Conclusion

Across 10000BC to 1600AD, Upper Colorado Hydrological Unit 14 records a striking shift in North American demographic gravity: an early basin-wide maximum of 62,3k in 800AD anchored by northern Fremont and Basketmaker farming gave way to a concentrated Chacoan and Mesa Verde crest (34,5k in San Juan by 1100AD) before late thirteenth-century droughts cut total population by more than half to 27k by 1600AD. Built from the North American Matérn composite (93.129 unique site-periods across 3.833 domestic catchments, 14,24x baseline, regularised $\tau_1 = 1,35$, mean short range 47 km, $R^2 = 0,9990$ to $0,9992$) and 241 catalogued settlements, CENTAUR-II resolves the sub-regional timing offset across the Colorado Plateau.

# Sources

<div id="refs"></div>
