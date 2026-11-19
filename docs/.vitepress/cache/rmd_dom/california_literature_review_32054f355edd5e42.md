---
title: "California Hydrological Unit (HU 18): Acorn Economies, Sacramento-San Joaquin Delta and Chumash Maritime Chiefdoms"
subtitle: "CENTAUR-II: Contiguous California Drainage Basin, 10000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: california_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_california_spatial.png"
hero_caption: "Areal mask and 11 verified settlements across USGS Hydrological Unit 18 (425,20k km2) from 10000 BC to 1600 AD. Four sub-regions span Klamath-North Coast, Sacramento-Delta, San Joaquin-Tulare and Southern California."
hero_label: "fig:hero-california"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Operation Viscount Project CENTAUR-II reconstructs the Holocene population of California (USGS Hydrological Unit 18, 425.204 km² across 6.305 five-arcminute cells) from 10000 BC to 1600 AD across four sub-regions. Anchored to the radiocarbon summed probability distribution of Kelly et al. [@kelly2025] (HU 18 median peak at 1578 AD, N = 2.552, 372 cal BP) and non-stationary Matérn ($\nu = 3/2$) kriging over `p3k14c` [@bird2022p3k14c; @paciorek2006matern], population grows monotonically from 1.450 inhabitants in 10000 BC to 177,5k at 0 AD, 310k in 1500 AD and 336k in 1600 AD (0,79 inhabitants/km²). Unlike interior North American basins that peaked between 1080 and 1300 AD, California experienced sustained late pre-contact expansion through 1600 AD because acorn-storage intensification, estuarine fisheries and late Spanish colonisation (1769 AD) delayed epidemic mortality [@cook1976california; @jones2021california; @lightfoot2009california].

# Background

Ethnographic and archaeological syntheses have long recognised California as the most densely populated hunter-fisher-gatherer macro-region north of Mesoamerica [@kroeber1925california; @cook1976california; @moratto1984california]. Whereas Kroeber [@kroeber1925california] estimated 133k indigenous Californians at European contact, Cook [@cook1976california] revised the pre-mission total upward to 310k to 350k using village-count, drainage-basin and mission baptismal registers. Global population grids [@mcevedy1978; @kleingoldewijk2017] historically smoothed California far below ethnographic baselines and missed the late Holocene divergence between California and the drought-stressed Southwest.

Bioarchaeological mortuary analyses across large California burial series show no epidemic spike following Cabrillo's 1542 AD coastal reconnaissance, placing major contagious mortality after permanent Spanish Franciscan missionisation began in 1769-1770 AD [@jones2021california]. Independently, Kelly et al. [@kelly2025] analysed 2.552 terrestrial radiocarbon dates in HU 18 and derived a summed probability peak at 372 cal BP (1578 AD, interquartile range 349 to 387 cal BP), confirming that California's indigenous population was still expanding at the close of the sixteenth century.

# Methodology

## Sub-Regional Partition and Areal Masks

CENTAUR-II partitions HU 18 across 6.305 active cells (425.204 km²) into four hydrologically and culturally distinct sub-regions. The northern tier (`ca_klamath_north_coast_shasta`, 118.439 km², 1.833 pixels) spans the Klamath-Trinity, Eel River and North Coast Ranges inhabited by Yurok, Karuk and Hupa salmon-and-acorn societies [@moratto1984california]. The north-central tier (`ca_sacramento_sf_bay_delta`, 80.574 km², 1.217 pixels) covers the Sacramento Valley, San Francisco Bay and Central Delta (Patwin, Ohlone and Miwok) [@lightfoot2009california]. The south-central tier (`ca_san_joaquin_central_coast`, 137.486 km², 1.983 pixels) spans the San Joaquin-Tulare basin, Sierra foothills and Monterey coast (Yokuts and Esselen). The southern tier (`ca_chumash_channel_southern_cal`, 88.705 km², 1.272 pixels) encompasses the Santa Barbara Channel, Los Angeles basin and Colorado Desert (Chumash, Tongva and Kumeyaay) [@arnold2001chumash].

## Radiocarbon Kriging and Benchmark Calibration

Rural spatial probabilities come from `sites_p3k14c_na` (1.359 domestic Voronoi catchments plus 171 cross-frontier buffer catchments across 10 Holocene horizons) [@bird2022p3k14c]. Freeman-Tukey site densities receive Empirical Bayes shrinkage and non-stationary Matérn ($\nu = 3/2$) kriging [@paciorek2006matern], while 11 verified settlement trajectories (`california_settlements.json`) are subtracted prior to residual dasymetric scaling against sub-regional targets with +/-8% uncertainty intervals.

# Testing and Validation

All pre-publication validation gates passed at 0 errors at GMT+0:

1. **Radiocarbon Sample Threshold**: HU 18 draws on N = 2.552 terrestrial radiocarbon dates [@kelly2025] (excluding marine shell dates per Hadden et al. [@hadden2023shell]), exceeding the 400-date reliability minimum by more than sixfold [@crema2021rcarbon].
2. **Kriging Sharpness**: The `sites_p3k14c_na` model meets all diagnostic limits (`tau1 = 1,25 <= 1,80`, `nugget_to_sill = 0,04` to `0,22 < 0,45`, pseudo-$R^2 = 0,9733` to `0,9992`).
3. **Gazetteer Exhaustiveness**: Validation of `california_settlements.json` against `california_source_ledger.json5` yields 0 errors and 0 unaccounted entries across 11 included settlements and 1 excluded seasonal scatter category.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km2)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Klamath and North Coast</strong></td><td class="crd-td">118.439</td><td class="crd-td">31,5k</td><td class="crd-td">50k</td><td class="crd-td">55,3k</td><td class="crd-td">56k</td><td class="crd-td">61k</td></tr>
<tr><td class="crd-td"><strong>2. Sacramento and SF Bay Delta</strong></td><td class="crd-td">80.574</td><td class="crd-td">55,5k</td><td class="crd-td">87,5k</td><td class="crd-td">96,8k</td><td class="crd-td">98k</td><td class="crd-td">107k</td></tr>
<tr><td class="crd-td"><strong>3. San Joaquin and Central Coast</strong></td><td class="crd-td">137.486</td><td class="crd-td">50k</td><td class="crd-td">78,5k</td><td class="crd-td">87k</td><td class="crd-td">88k</td><td class="crd-td">96k</td></tr>
<tr><td class="crd-td"><strong>4. Chumash Channel and South</strong></td><td class="crd-td">88.705</td><td class="crd-td">40,5k</td><td class="crd-td">62k</td><td class="crd-td">67,5k</td><td class="crd-td">68k</td><td class="crd-td">72k</td></tr>
<tr><td class="crd-td"><strong>HU 18 Total</strong></td><td class="crd-td">425.204</td><td class="crd-td">177,5k</td><td class="crd-td">278k</td><td class="crd-td">306,6k</td><td class="crd-td">310k</td><td class="crd-td">336k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional area and benchmark population estimates across California (HU 18) from 0 AD to 1600 AD.</figcaption>
</figure>

# Results

## Acorn Intensification and Continuous Holocene Growth

Human occupation in HU 18 expanded from 1.450 inhabitants in 10000 BC to 36,3k in 5000 BC and 104,7k in 2000 BC as Millingstone and Windmiller economies developed along estuarine marshlands and oak savannahs [@moratto1984california]. Adoption of intensive leaching and granary storage of acorns alongside plank-canoe pelagic trade in the Santa Barbara Channel pushed total population to 177,5k at 0 AD (0,42 inhabitants/km²), 242,5k in 600 AD and 278k in 1000 AD (Table 1 and Figure 2) [@arnold2001chumash; @lightfoot2009california].

<figure class="crd-figure-block" id="fig:traj-california">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-california/fig2_california_trajectory.png" alt="fig:traj-california" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in California (HU 18) with uncertainty bounds, 10000 BC to 1600 AD.</figcaption>
</figure>

## Late Pre-Contact Expansion to 1600 AD

Consistent with the Kelly et al. [@kelly2025] peak at 1578 AD and Cook's [@cook1976california] ethnographic synthesis, HU 18 experienced no pre-contact demographic crash. Regional population rose from 295,2k in 1200 AD to 306,6k in 1400 AD, 310k in 1500 AD, 327k in 1550 AD and 336k in 1600 AD (0,79 inhabitants/km²). Throughout the late Holocene, the Sacramento-San Joaquin system carried the highest regional shares: the Sacramento-Delta sub-region reached 107k in 1600 AD (31,85% of HU 18 total, 1,33 inhabitants/km²), San Joaquin-Central Coast reached 96k (28,57%), Chumash-Southern California reached 72k (21,43%) and Klamath-North Coast reached 61k (18,15%) (Figure 3). Post-1600 AD contraction began only after Spanish missionary expansion in the late eighteenth century [@jones2021california; @ubelaker2006].

<figure class="crd-figure-block" id="fig:shares-california">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-california/fig3_california_shares.png" alt="fig:shares-california" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across California (HU 18) from 10000 BC to 1600 AD.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop.</th><th class="crd-th">Lower Bound</th><th class="crd-th">Upper Bound</th><th class="crd-th">Density (per km2)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">1,4k</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">0,003</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">22,8k</td><td class="crd-td">21k</td><td class="crd-td">24,6k</td><td class="crd-td">0,054</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">76,8k</td><td class="crd-td">70,7k</td><td class="crd-td">82,9k</td><td class="crd-td">0,181</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">138,3k</td><td class="crd-td">127,2k</td><td class="crd-td">149,4k</td><td class="crd-td">0,325</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">177,5k</td><td class="crd-td">163,3k</td><td class="crd-td">191,7k</td><td class="crd-td">0,417</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">242,5k</td><td class="crd-td">223,1k</td><td class="crd-td">261,9k</td><td class="crd-td">0,57</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">278k</td><td class="crd-td">255,8k</td><td class="crd-td">300,2k</td><td class="crd-td">0,654</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">295,2k</td><td class="crd-td">271,6k</td><td class="crd-td">318,8k</td><td class="crd-td">0,694</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">306,6k</td><td class="crd-td">282,1k</td><td class="crd-td">331,1k</td><td class="crd-td">0,721</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">310k</td><td class="crd-td">285,2k</td><td class="crd-td">334,8k</td><td class="crd-td">0,729</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">327k</td><td class="crd-td">300,8k</td><td class="crd-td">353,2k</td><td class="crd-td">0,769</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">336k</td><td class="crd-td">309,1k</td><td class="crd-td">362,9k</td><td class="crd-td">0,79</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Headline population trajectory, 92 pct uncertainty intervals and mean density across California (HU 18).</figcaption>
</figure>

# Limitations

Three constraints qualify HU 18 estimates. First, Holocene alluvial deposition and historic levee modification across the Sacramento Valley and Tulare Lakebed deeply buried or destroyed early prehistoric habitation mounds, biasing `p3k14c` site densities toward coastal terraces and foothills [@ugan2024sacramento]. Second, excluding marine shell dates avoids Channel Island and San Francisco Bay reservoir correction bias [@hadden2023shell] but reduces coastal sample counts relative to interior charcoal dates. Third, small seasonal mountain and desert camps in the Mojave and High Sierra lack discrete village boundaries and remain absorbed within sub-regional carrying-capacity aggregates [@moratto1984california].

# Sources

<div id="refs"></div>
