---
title: "Cumberland (Tennessee) Hydrological Unit (HU 06)"
subtitle: "CENTAUR-II: Dallas-Mouse Creek Chiefdoms and Tennessee Valley Mound Towns, -10000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: cumberland_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_cumberland_spatial.png"
hero_caption: "Sub-regional areal masks and ten verified mound settlements across the Tennessee-Cumberland Hydrological Unit (110,70k km²), spanning the Ridge-and-Valley to the lower confluence."
hero_label: "fig:hero-cumberland"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the pre-Columbian demographic trajectory of the Tennessee-Cumberland Hydrological Unit (USGS HU 06) over `110.698 km²` (`1.601` five-arcminute cells) from `10000 BC` (`-10000 AD`) to `1600 AD`. Integrating Kelly et al. [@kelly2025] radiocarbon summed probability trends (`N = 354`, median peak `1167 AD`) with Vacant Quarter abandonment chronologies [@cobb2002; @cobb2023], Mississippian mound surveys [@welch2006; @king2003; @muller1997] and sixteenth-century Spanish chronicles [@hudson1997], HU 06 is partitioned into three sub-regions. Basin population rises from `750` (`690-810`) in `10000 BC` to `90,5k` (`83,3k-97,7k`) at `0 AD` and peaks at `157,0k` (`144,4k-169,6k`) in `1200 AD`. Subsequent Vacant Quarter contraction lowers totals to `96,5k` (`88,8k-104,2k`) in `1400 AD` as Middle and Lower Tennessee mound centres empty, while Upper East Tennessee and Coosa-Appalachian valleys remain densely settled near `56,0k` in `1500 AD` [@hudson1997]. Following Hernando de Soto's `1540 AD` passage and epidemic disruption, basin numbers drop to `79,6k` in `1550 AD` and `65,5k` (`60,3k-70,7k`) by `1600 AD` [@milner2010; @ubelaker2006].

# Background

USGS HU 06 encompasses the Tennessee River arc from the Holston and French Broad headwaters in the Blue Ridge and Ridge-and-Valley through Muscle Shoals to the Ohio-Kentucky confluence, together with bordering Cumberland-Coosa corridors. Historically, the valley supported early Eastern Agricultural Complex domestication during the Late Archaic and Woodland periods before coalescing into palisaded Mississippian platform-mound chiefdoms [@smith1992; @lewis1946; @muller1997].

Across `354` cleaned radiocarbon dates in HU 06, Kelly et al. [@kelly2025] identify a median summed probability peak at `1167 AD` (followed immediately by contraction). Fine-grained Bayesian radiocarbon modelling of Middle Cumberland and Lower Ohio stone-box-grave towns [@cobb2023] places major demographic retreat around `1300-1480 AD`, reflecting drought stress, chronic inter-chiefdom warfare and downstream-upstream realignment toward Dallas, Mouse Creek and proto-Cherokee towns in East Tennessee [@krus2016; @milner2013].

# Methodology

## Radiocarbon Kriging and Sub-Regional Partitioning

Baseline habitation potential comes from the `sites_p3k14c_na` continental surface (`p3k14c` [@bird2022p3k14c] and `c14bazAAR`), calibrated across ten Holocene horizons using non-stationary Matérn ($\nu = 3/2$) kriging across `1.359` domestic catchments and `171` cross-frontier buffers [@kelly2022; @crema2021]. Within HU 06, `1.601` five-arcminute pixels (`110.698 km²`) map onto three sub-regions in `cumberland_areal_mask.png`:

1. **Upper East Tennessee and Chickamauga Ridge-and-Valley** (`cu_upper_east_tennessee_ridge`, `59.938 km²`, `864` pixels): Holston, French Broad, Little Tennessee, Hiwassee and Ridge-and-Valley borderlands including Coosa-Etowah margins.
2. **Middle Tennessee Bend and Muscle Shoals** (`cu_middle_tennessee_muscle_shoals`, `38.749 km²`, `556` pixels): Elk River, Middle Tennessee Bend, Harpeth-Cumberland fringe and Muscle Shoals terraces.
3. **Lower Tennessee River and Highland Rim Confluence** (`cu_lower_tennessee_kentucky_confluence`, `12.011 km²`, `181` pixels): Shiloh-Savannah corridor, Western Highland Rim and Kentucky-Ohio confluence.

## Household Density and Uncertainty Bounds

Sub-regional totals across `23` benchmark years (`-10000` to `1600 AD`) combine riverine floodplain arable carrying capacity, excavated domestic structure density (`5-6` persons per Mississippian wattle-and-daub wall-trench house) and mortuary demography [@milner2010; @muller1997]. Symmetric uncertainty bounds of `±8,0%` bracket inter-phase site longevity and regional settlement recovery rates [@cobb2023]. `ViscountSubstrataMosaic` reconciles rural rasters with `10` verified settlements in `cumberland_settlements.json` using two `5`-pixel smoothing passes.

# Testing and Validation

All regional quality gates passed with `0` errors at `GMT+0` before manuscript compilation:

1. **Kriging Diagnostics**: `sites_p3k14c_na` achieves `tau1 = 1,25`, `nugget_to_sill = 0,04` to `0,22` and pseudo-$R^2 = 0,9733$ to `0,9992` across all ten Holocene horizons.
2. **Gazetteer Exhaustiveness**: `cumberland_settlements.json` (`10` included sites) matches `cumberland_source_ledger.json5` (`2` excluded candidates) with `0` unaccounted entries and `0` coordinate or schema faults.
3. **Benchmark Consistency**: Sub-regional sums equal `headline_population_by_benchmark` across every horizon from `10000 BC` (`750`) to `1600 AD` (`65,5k`).

<figure class="crd-table-figure" id="tab:cu-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">10000BC</td><td class="crd-td">750</td><td class="crd-td">690-810</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">5000BC</td><td class="crd-td">16,9k</td><td class="crd-td">15,5k-18,3k</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">2000BC</td><td class="crd-td">53k</td><td class="crd-td">48,8k-57,2k</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">0AD</td><td class="crd-td">90,5k</td><td class="crd-td">83,3k-97,7k</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">600AD</td><td class="crd-td">129,5k</td><td class="crd-td">119,1k-139,9k</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1000AD</td><td class="crd-td">150k</td><td class="crd-td">138k-162k</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1100AD</td><td class="crd-td">155k</td><td class="crd-td">142,6k-167,4k</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1200AD</td><td class="crd-td">157k</td><td class="crd-td">144,4k-169,6k</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1300AD</td><td class="crd-td">124k</td><td class="crd-td">114,1k-133,9k</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1400AD</td><td class="crd-td">96,5k</td><td class="crd-td">88,8k-104,2k</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1500AD</td><td class="crd-td">97k</td><td class="crd-td">89,2k-104,8k</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1550AD</td><td class="crd-td">79,6k</td><td class="crd-td">73,2k-86k</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1600AD</td><td class="crd-td">65,5k</td><td class="crd-td">60,3k-70,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Benchmark population estimates and uncertainty bounds for Cumberland (HU 06), 10000 BC to 1600 AD.</figcaption>
</figure>

# Results

## Archaic-Woodland Expansion and Twelfth-Century Peak

From `750` (`690-810`) inhabitants at `10000 BC`, Tennessee-Cumberland river valleys grew steadily through Archaic shellfish-mound foraging and Early Woodland seed horticulture (*Chenopodium*, *Iva annua*, *Helianthus*), reaching `70,5k` by `1000 BC` and `90,5k` (`83,3k-97,7k`) at `0 AD` [@smith1992]. Maize intensification after `800 AD` and Emergent Mississippian nucleation carried basin totals from `141,5k` in `800 AD` to `155,0k` in `1100 AD` and a peak of `157,0k` (`144,4k-169,6k`) at `1200 AD`, closely matching Kelly et al. [@kelly2025] `1167 AD` radiocarbon mode.

<figure class="crd-figure-block" id="fig:cu-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-cumberland/fig2_cumberland_trajectory.png" alt="fig:cu-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and sub-regional population trajectories for Cumberland (HU 06) from 10000 BC to 1600 AD with uncertainty envelope.</figcaption>
</figure>

## Vacant Quarter Abandonment and Upland Persistence

Between `1200 AD` and `1400 AD`, total basin population contracted by `38,5%` (from `157,0k` to `96,5k`), with sharp internal divergence. The Lower Tennessee-Kentucky confluence (`24,5k` peak at `1100 AD`) dropped to `15,0k` in `1300 AD` and `9,5k` in `1400 AD` as `Shiloh Indian Mounds`, `Jonathan Creek` and adjacent `Kincaid Mounds` entered the Vacant Quarter abandonment zone [@cobb2002; @welch2006]. Middle Tennessee-Muscle Shoals fell almost by half (`64,5k` in `1200 AD` to `34,0k` in `1400 AD`) as `Mound Bottom` and Nashville Basin palisaded towns dissolved [@cobb2023; @krus2016].

<figure class="crd-figure-block" id="fig:cu-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-cumberland/fig3_cumberland_shares.png" alt="fig:cu-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic shares across Cumberland (HU 06) from 10000 BC to 1600 AD.</figcaption>
</figure>

In contrast, Upper East Tennessee and the Ridge-and-Valley declined more modestly (`68,5k` in `1200 AD` to `53,0k` in `1400 AD`) and rebounded to `56,0k` (`51,5k-60,5k`) in `1500 AD`, rising from `43,6%` of the basin total in `1200 AD` to `57,7%` by `1500 AD`. Dense Dallas and Mouse Creek palisaded towns (`Hiwassee Island`, `Toqua`) and the Coosa paramountcy documented by De Soto (`1540 AD`) and Pardo (`1567 AD`) sustained high upland densities prior to Old World epidemic collapse (`79,6k` basin-wide in `1550 AD` and `65,5k` in `1600 AD`) [@lewis1946; @hudson1997; @milner2010].

<figure class="crd-table-figure" id="tab:cu-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper East Tennessee Ridge</strong></td><td class="crd-td">1200AD</td><td class="crd-td">68,5k</td><td class="crd-td">63k-74k</td></tr>
<tr><td class="crd-td"><strong>Middle Tennessee-Muscle Shoals</strong></td><td class="crd-td">1200AD</td><td class="crd-td">64,5k</td><td class="crd-td">59,3k-69,7k</td></tr>
<tr><td class="crd-td"><strong>Lower Tennessee Confluence</strong></td><td class="crd-td">1200AD</td><td class="crd-td">24k</td><td class="crd-td">22,1k-25,9k</td></tr>
<tr><td class="crd-td"><strong>Upper East Tennessee Ridge</strong></td><td class="crd-td">1500AD</td><td class="crd-td">56k</td><td class="crd-td">51,5k-60,5k</td></tr>
<tr><td class="crd-td"><strong>Middle Tennessee-Muscle Shoals</strong></td><td class="crd-td">1500AD</td><td class="crd-td">32k</td><td class="crd-td">29,4k-34,6k</td></tr>
<tr><td class="crd-td"><strong>Lower Tennessee Confluence</strong></td><td class="crd-td">1500AD</td><td class="crd-td">9k</td><td class="crd-td">8,3k-9,7k</td></tr>
<tr><td class="crd-td"><strong>Upper East Tennessee Ridge</strong></td><td class="crd-td">1600AD</td><td class="crd-td">38k</td><td class="crd-td">35k-41k</td></tr>
<tr><td class="crd-td"><strong>Middle Tennessee-Muscle Shoals</strong></td><td class="crd-td">1600AD</td><td class="crd-td">21k</td><td class="crd-td">19,3k-22,7k</td></tr>
<tr><td class="crd-td"><strong>Lower Tennessee Confluence</strong></td><td class="crd-td">1600AD</td><td class="crd-td">6,5k</td><td class="crd-td">6k-7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional population totals across Cumberland (HU 06) at 1200 AD, 1500 AD and 1600 AD.</figcaption>
</figure>

# Limitations

Kelly et al. [@kelly2025] note that HU 06 contains `354` cleaned radiocarbon dates across the past two millennia, falling slightly below their `400`-date (`0,2` dates/year) simulation reliability threshold; local peak timing therefore carries wider uncertainty than neighbouring HU 05 or HU 03. Additionally, twentieth-century Tennessee Valley Authority reservoir impoundments inundated many bottomland villages prior to modern CRM mapping, biasing survival toward major mound complexes and upland terraces [@welch2006].

# Sources

<div id="refs"></div>
