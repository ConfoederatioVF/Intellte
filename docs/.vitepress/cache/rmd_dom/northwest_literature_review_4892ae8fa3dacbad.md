---
title: "Northwest Hydrological Unit (HU 17): Puget Sound, Lower Columbia Plank-Houses and Plateau Salmon Fisheries"
subtitle: "CENTAUR-II: Contiguous Pacific Northwest Drainage Basin, 10000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: northwest_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northwest_spatial.png"
hero_caption: "Areal mask and 12 verified settlements across USGS Hydrological Unit 17 (712,09k km2) from 10000 BC to 1600 AD. Four sub-regions divide coastal plank-house towns from Columbia Plateau and Snake River basins."
hero_label: "fig:hero-northwest"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Operation Viscount Project CENTAUR-II reconstructs the Holocene population of the Pacific Northwest (USGS Hydrological Unit 17, 712.090 km² across 11.810 five-arcminute cells) from 10000 BC to 1600 AD across four sub-regions. Anchored to the radiocarbon summed probability distribution of Kelly et al. [@kelly2025] (HU 17 median peak at 1592 AD, N = 2.341, 358 cal BP) and non-stationary Matérn ($\nu = 3/2$) kriging over `p3k14c` [@bird2022p3k14c; @paciorek2006matern], total population rises continuously from 850 inhabitants in 10000 BC to 113,3k at 0 AD, 192k in 1500 AD and 209,5k in 1600 AD (0,29 inhabitants/km²). Settlement density peaks along the Lower Columbia-Willamette estuary (0,81 inhabitants/km², 81k) and Puget Sound-Olympic littoral (1,09 inhabitants/km², 49k), supported by intensive salmon storage, cedar plank-house towns and Plateau root-harvesting networks prior to late eighteenth-century European maritime contact [@ames1999northwest; @boyd1999northwest; @rorabaugh2023salish].

# Background

Global historical population syntheses [@mcevedy1978; @kleingoldewijk2017] treated the Pacific Northwest as a low-density foraging frontier, underestimating the productive capacity of anadromous salmon runs, eulachon oil fisheries and camas-wapato root gardens [@ames1999northwest; @matson1995northwest]. Across the 712,09k km² Columbia-Snake-Puget drainage, ethnohistoric reconstructions by Boyd [@boyd1999northwest] place pre-epidemic Lower Columbia, Puget Sound and Plateau populations well above 180k prior to the first documented smallpox outbreak in 1775-1782 AD.

Kelly et al. [@kelly2025] analysed 2.341 terrestrial radiocarbon dates across HU 17 and obtained the latest median peak of all 18 contiguous U.S. hydrological units: 358 cal BP (1592 AD, interquartile range 306 to 376 cal BP). This matches Rorabaugh's [@rorabaugh2023salish] independent Central Salish Sea radiocarbon analysis placing regional decline after roughly 1650 AD and Jones's [@jones2014] ethnohistoric synthesis showing direct European contact along the Northwest Coast only after 1774 AD.

# Methodology

## Sub-Regional Partition and Areal Masks

CENTAUR-II divides the 11.810 active cells of HU 17 (712.090 km²) into four drainage-based sub-regions. The coastal northern tier (`nw_puget_sound_olympic_coast`, 44.853 km², 810 pixels) spans Puget Sound, the Olympic Peninsula and the North Coast occupied by Coast Salish and Makah towns [@rorabaugh2023salish; @matson1995northwest]. The coastal southern tier (`nw_lower_columbia_willamette_coast`, 100.388 km², 1.651 pixels) covers the Lower Columbia, Willamette Valley and Oregon Coast (Chinookan, Kalapuya and Tillamook) [@ames1999northwest]. Inland, the Columbia Plateau (`nw_columbia_plateau_yakima_spokane`, 314.976 km², 5.344 pixels) spans the Mid-Columbia Dalles and Okanogan-Spokane valleys (Sahaptin and Interior Salish) [@cressman1960dalles], while the southeastern tier (`nw_snake_river_klamath_interior`, 251.873 km², 4.005 pixels) covers the Snake River Plain, Owyhee and Harney-Malheur high desert (Shoshone-Bannock and Northern Paiute).

## Radiocarbon Kriging and Benchmark Calibration

Rural spatial probabilities derive from `sites_p3k14c_na` (1.359 domestic Voronoi catchments plus 171 cross-frontier buffer catchments across 10 Holocene horizons) [@bird2022p3k14c]. Freeman-Tukey site densities receive Empirical Bayes shrinkage and non-stationary Matérn ($\nu = 3/2$) kriging [@paciorek2006matern]. Twelve verified settlement trajectories (`northwest_settlements.json`) are extracted prior to residual scaling against sub-regional targets with +/-8% uncertainty bounds across 23 chronological benchmarks.

# Testing and Validation

All regional quality gates passed at 0 errors at GMT+0:

1. **Radiocarbon Sample Threshold**: HU 17 incorporates N = 2.341 terrestrial radiocarbon dates [@kelly2025] (excluding marine shell dates per Hadden et al. [@hadden2023shell]), nearly six times the 400-date reliability minimum [@crema2021rcarbon].
2. **Kriging Sharpness**: The `sites_p3k14c_na` variogram suite meets all sharpness thresholds (`tau1 = 1,25 <= 1,80`, `nugget_to_sill = 0,04` to `0,22 < 0,45`, pseudo-$R^2 = 0,9733` to `0,9992`).
3. **Gazetteer Exhaustiveness**: Validation of `northwest_settlements.json` against `northwest_source_ledger.json5` yields 0 errors and 0 unaccounted entries across 12 included settlements and 2 excluded Palaeoindian localities.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km2)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Puget Sound and Olympic Coast</strong></td><td class="crd-td">44.853</td><td class="crd-td">27,5k</td><td class="crd-td">41,2k</td><td class="crd-td">43,7k</td><td class="crd-td">44k</td><td class="crd-td">49k</td></tr>
<tr><td class="crd-td"><strong>2. Lower Columbia and Willamette</strong></td><td class="crd-td">100.388</td><td class="crd-td">42,5k</td><td class="crd-td">67k</td><td class="crd-td">73,2k</td><td class="crd-td">74k</td><td class="crd-td">81k</td></tr>
<tr><td class="crd-td"><strong>3. Columbia Plateau and Dalles</strong></td><td class="crd-td">314.976</td><td class="crd-td">29,8k</td><td class="crd-td">47k</td><td class="crd-td">51,4k</td><td class="crd-td">52k</td><td class="crd-td">56k</td></tr>
<tr><td class="crd-td"><strong>4. Snake River and High Desert</strong></td><td class="crd-td">251.873</td><td class="crd-td">13,5k</td><td class="crd-td">20,2k</td><td class="crd-td">21,8k</td><td class="crd-td">22k</td><td class="crd-td">23,5k</td></tr>
<tr><td class="crd-td"><strong>HU 17 Total</strong></td><td class="crd-td">712.090</td><td class="crd-td">113,3k</td><td class="crd-td">175,4k</td><td class="crd-td">190,1k</td><td class="crd-td">192k</td><td class="crd-td">209,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional area and benchmark population estimates across the Northwest (HU 17) from 0 AD to 1600 AD.</figcaption>
</figure>

# Results

## Early Holocene Fisheries and Plank-House Sedentism

Following glacial Lake Missoula floods and early Holocene river stabilisation, human population in HU 17 expanded from 850 inhabitants in 10000 BC to 23,1k in 5000 BC and 66,9k in 2000 BC as salmon-processing camps consolidated at Celilo Falls and along the Puget-Georgia littoral [@cressman1960dalles; @matson1995northwest]. Between 1000 BC and 600 AD, Marpole-phase cedar plank-house villages, specialised woodworking and bulk salmon preservation lifted regional totals from 88,5k to 113,3k at 0 AD and 154,3k in 600 AD (Table 1 and Figure 2) [@ames1999northwest].

<figure class="crd-figure-block" id="fig:traj-northwest">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northwest/fig2_northwest_trajectory.png" alt="fig:traj-northwest" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in the Northwest (HU 17) with uncertainty bounds, 10000 BC to 1600 AD.</figcaption>
</figure>

## Late Holocene Continuity Through 1600 AD

Mirroring the Kelly et al. [@kelly2025] HU 17 radiocarbon peak at 1592 AD, all four Northwest sub-regions grew monotonically through 1600 AD. Regional totals increased from 175,4k in 1000 AD to 190,1k in 1400 AD, 192k in 1500 AD, 202,5k in 1550 AD and 209,5k in 1600 AD (0,29 inhabitants/km²). Coastal and lower-river zones held 62,05% of the 1600 AD total on 20,4% of the basin's land area: Lower Columbia-Willamette reached 81k (38,66%) and Puget Sound-Olympic Coast reached 49k (23,39%), whereas the vast Columbia Plateau held 56k (26,73%, 0,18 inhabitants/km²) and Snake River-High Desert 23,5k (11,22%, 0,09 inhabitants/km²) (Figure 3) [@boyd1999northwest; @ubelaker2006].

<figure class="crd-figure-block" id="fig:shares-northwest">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northwest/fig3_northwest_shares.png" alt="fig:shares-northwest" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across the Northwest (HU 17) from 10000 BC to 1600 AD.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop.</th><th class="crd-th">Lower Bound</th><th class="crd-th">Upper Bound</th><th class="crd-th">Density (per km2)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">850</td><td class="crd-td">782</td><td class="crd-td">918</td><td class="crd-td">0,001</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">14,5k</td><td class="crd-td">13,3k</td><td class="crd-td">15,7k</td><td class="crd-td">0,02</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">48,9k</td><td class="crd-td">45k</td><td class="crd-td">52,8k</td><td class="crd-td">0,069</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">88,5k</td><td class="crd-td">81,4k</td><td class="crd-td">95,6k</td><td class="crd-td">0,124</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">113,3k</td><td class="crd-td">104,2k</td><td class="crd-td">122,4k</td><td class="crd-td">0,159</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">154,3k</td><td class="crd-td">142k</td><td class="crd-td">166,6k</td><td class="crd-td">0,217</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">175,4k</td><td class="crd-td">161,4k</td><td class="crd-td">189,4k</td><td class="crd-td">0,246</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">184,3k</td><td class="crd-td">169,6k</td><td class="crd-td">199k</td><td class="crd-td">0,259</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">190,1k</td><td class="crd-td">174,9k</td><td class="crd-td">205,3k</td><td class="crd-td">0,267</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">192k</td><td class="crd-td">176,6k</td><td class="crd-td">207,4k</td><td class="crd-td">0,27</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">202,5k</td><td class="crd-td">186,3k</td><td class="crd-td">218,7k</td><td class="crd-td">0,284</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">209,5k</td><td class="crd-td">192,7k</td><td class="crd-td">226,3k</td><td class="crd-td">0,294</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Headline population trajectory, 92 pct uncertainty intervals and mean density across the Northwest (HU 17).</figcaption>
</figure>

# Limitations

Three limitations apply to HU 17 estimates. First, excluding marine shell dates removes complex Puget Sound and outer-coast reservoir offsets [@hadden2023shell] but under-weights shell-midden strata relative to charcoal-rich interior pithouse depressions [@rorabaugh2023salish]. Second, dense temperate rainforest canopy and volcanic tephra blankets in the Cascades and Coast Ranges reduce survey visibility outside CRM river-corridor excavations. Third, the 1600 AD ceiling precedes the 1775-1782 AD smallpox pandemic documented by Boyd [@boyd1999northwest], so post-contact nadir trajectories are deferred to CENTAUR-II Part 4 and Part 5.

# Sources

<div id="refs"></div>
