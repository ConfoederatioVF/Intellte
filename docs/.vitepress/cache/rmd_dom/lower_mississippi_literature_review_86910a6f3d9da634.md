---
title: "Lower Mississippi Hydrological Unit (HU 08)"
subtitle: "CENTAUR-II: Poverty Point, Plaquemine and Late Mississippian Towns, -10000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: lower_mississippi_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_lower_mississippi_spatial.png"
hero_caption: "Sub-regional areal masks and eighteen verified settlements across the Lower Mississippi Hydrological Unit (249,99k km²), from the St. Francis Basin to the Mississippi Birdfoot Delta."
hero_label: "fig:hero-lower-mississippi"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the demographic history of the Lower Mississippi Hydrological Unit (USGS HU 08) across `249.987 km²` (`3.563` five-arcminute cells) from `10000 BC` (`-10000 AD`) to `1600 AD`. Synthesising Kelly et al. [@kelly2025] radiocarbon summed probability trends (`N = 828`, median peak `1177 AD`) with Middle-Late Archaic earthwork surveys [@saunders1997; @gibson2000], Coles Creek-Plaquemine-Mississippian excavations [@williams1983; @brain1989; @morse1983] and Spanish chronicle accounts [@hudson1997], HU 08 is partitioned into three sub-regions. Basin numbers rise from `1.400` (`1.288-1.512`) in `10000 BC` to `188,5k` (`173,4k-203,6k`) at `0 AD` and peak at `326,0k` (`299,9k-352,1k`) in `1200 AD`. Vacant Quarter contraction in the northern delta lowers totals to `268,0k` in `1400 AD` before Parkin, Nodena, Lake George and Natchez consolidation brings a recovery to `276,0k` (`253,9k-298,1k`) in `1500 AD` [@morse1983; @neitzel1965]. Following Hernando de Soto's `1541-1543 AD` incursion and introduced diseases, population falls by `61,6%` to `180,0k` in `1550 AD` and `106,0k` (`97,5k-114,5k`) by `1600 AD` [@hudson1997; @jones2014].

# Background

The Lower Mississippi alluvial valley extends from the Ohio confluence south across the St. Francis, Yazoo, Tensas-Boeuf, Ouachita and Atchafalaya floodplains to the Birdfoot Delta. Exceptionally productive meander-belt soils, oxbow lakes and seasonal waterfowl corridors supported some of North America's earliest monumental mound complexes (`Watson Brake` at `c. 3400 BC` and `Poverty Point` at `c. 1700-1100 BC`) [@saunders1997; @gibson2000], followed by dense Woodland and Mississippian chiefdoms [@morse1983; @brain1989; @williams1983].

Across `828` cleaned radiocarbon dates in HU 08, Kelly et al. [@kelly2025] find a median summed probability peak at `1177 AD`, coeval with the peak of `Winterville` and early Plaquemine mound construction. Later phases (`1400-1540 AD`) saw regional reorganisation: northern Vacant Quarter abandonment cleared parts of the Ohio-Cairo fringe [@cobb2002], whereas palisaded St. Francis and Arkansas-delta provinces (`Casqui`/`Parkin` and `Pacaha`/`Nodena`) and Natchez-Plaquemine polities maintained dense riverine towns until Spanish contact [@morse1983; @neitzel1965; @hudson1997].

# Methodology

## Radiocarbon Kriging and Sub-Regional Partitioning

Baseline habitation surfaces come from `sites_p3k14c_na` (`p3k14c` [@bird2022p3k14c] and `c14bazAAR`), interpolated across ten Holocene horizons using non-stationary Matérn ($\nu = 3/2$) kriging across `1.359` domestic catchments and `171` cross-frontier buffers [@kelly2022; @crema2021]. Within HU 08, `3.563` land pixels (`249.987 km²`) divide into three colour-coded zones in `lower_mississippi_areal_mask.png`:

1. **St. Francis Basin, Reelfoot and Lower White-Arkansas Delta** (`lm_st_francis_st_memphis_parkin`, `110.207 km²`, `1.572` pixels): Cairo-Reelfoot lowlands, St. Francis sunk lands, Memphis bluffs and Lower Arkansas-White alluvial plains.
2. **Yazoo Basin, Tensas-Boeuf and Ouachita Ridges** (`lm_yazoo_ouachita_poverty_point`, `87.379 km²`, `1.208` pixels): Yazoo-Sunflower meander belts, Macon Ridge, Tensas-Boeuf basins, Ouachita terraces and Red River Great Bend margin.
3. **Natchez Bluffs, Atchafalaya and Birdfoot Delta** (`lm_natchez_atchafalaya_delta`, `52.401 km²`, `783` pixels): Lower Mississippi loess bluffs, Atchafalaya swamp and coastal Louisiana deltaic lobes.

## Floodplain Calibration and Uncertainty Bounds

Benchmark trajectories at `23` horizons (`-10000` to `1600 AD`) weight natural-levee arable capacity (`3,0-5,0` persons/km² in intensively farmed Mississippian corridors), Archaic earthwork labour catchments and sixteenth-century chronicle estimates [@milner2010; @gibson2000; @hudson1997]. Symmetric `±8,0%` bounds reflect levee survey attrition and post-contact mortality interpolation [@jones2014]. `ViscountSubstrataMosaic` incorporates `18` verified settlements from `lower_mississippi_settlements.json` and smooths rural residuals over two `5`-pixel passes.

# Testing and Validation

All regional verification gates passed with `0` errors at `GMT+0`:

1. **Kriging Sharpness**: `sites_p3k14c_na` passes sharpness bounds with `tau1 = 1,25`, `nugget_to_sill = 0,04` to `0,22` and pseudo-$R^2 = 0,9733$ to `0,9992`.
2. **Gazetteer Exhaustiveness**: `lower_mississippi_settlements.json` (`18` included sites) and `lower_mississippi_source_ledger.json5` (`2` excluded candidates) reconcile with `0` unaccounted entries.
3. **Arithmetic Consistency**: Sub-regional totals match `headline_population_by_benchmark` across all `23` horizons from `10000 BC` (`1.400`) to `1600 AD` (`106,0k`).

<figure class="crd-table-figure" id="tab:lm-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">10000BC</td><td class="crd-td">1,4k</td><td class="crd-td">1,3k-1,5k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">5000BC</td><td class="crd-td">35,8k</td><td class="crd-td">32,9k-38,7k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">2000BC</td><td class="crd-td">104,5k</td><td class="crd-td">96,1k-112,9k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">0AD</td><td class="crd-td">188,5k</td><td class="crd-td">173,4k-203,6k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">600AD</td><td class="crd-td">275k</td><td class="crd-td">253k-297k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">1000AD</td><td class="crd-td">314,5k</td><td class="crd-td">289,3k-339,7k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">1100AD</td><td class="crd-td">322,5k</td><td class="crd-td">296,7k-348,3k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">1200AD</td><td class="crd-td">326k</td><td class="crd-td">299,9k-352,1k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">1300AD</td><td class="crd-td">296k</td><td class="crd-td">272,3k-319,7k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">1400AD</td><td class="crd-td">268k</td><td class="crd-td">246,6k-289,4k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">1500AD</td><td class="crd-td">276k</td><td class="crd-td">253,9k-298,1k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">1550AD</td><td class="crd-td">180k</td><td class="crd-td">165,6k-194,4k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">1600AD</td><td class="crd-td">106k</td><td class="crd-td">97,5k-114,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Benchmark population estimates and uncertainty bounds for Lower Mississippi (HU 08), 10000 BC to 1600 AD.</figcaption>
</figure>

# Results

## Archaic Monumentality to Twelfth-Century Peak

Middle and Late Archaic communities along the Ouachita and Bayou Macon ridges (`Watson Brake`, `Poverty Point`) raised HU 08 population from `1.400` (`1.288-1.512`) in `10000 BC` to `104,5k` in `2000 BC` and `143,5k` in `1000 BC` [@saunders1997; @gibson2000]. Marksville, Troyville and Coles Creek plaza centres lifted the basin from `188,5k` at `0 AD` to `275,0k` at `600 AD` and `314,5k` at `1000 AD`. Mississippian and Plaquemine expansion carried the unit to its Holocene maximum of `326,0k` (`299,9k-352,1k`) at `1200 AD`, directly aligned with Kelly et al. [@kelly2025] `1177 AD` peak (`N = 828`).

<figure class="crd-figure-block" id="fig:lm-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-lower-mississippi/fig2_lower_mississippi_trajectory.png" alt="fig:lm-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and sub-regional population trajectories for Lower Mississippi (HU 08) from 10000 BC to 1600 AD with uncertainty envelope.</figcaption>
</figure>

## Late Precontact Consolidation and Post-Soto Collapse

Between `1200 AD` and `1400 AD`, total population dipped `17,8%` to `268,0k` (`246,6k-289,4k`) as Vacant Quarter depopulation affected the northern Cairo-Kentucky fringe [@cobb2002] and `Winterville` yielded to `Lake George` and `Emerald Mound` [@brain1989; @williams1983]. Late Mississippian aggregation at `Parkin`, `Nodena`, `Chucalissa` and `Natchez` restored regional totals to `276,0k` (`253,9k-298,1k`) by `1500 AD`, split across St. Francis-Memphis (`112,0k`, `40,6%`), Yazoo-Ouachita (`96,0k`, `34,8%`) and Natchez-Delta (`68,0k`, `24,6%`).

<figure class="crd-figure-block" id="fig:lm-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-lower-mississippi/fig3_lower_mississippi_shares.png" alt="fig:lm-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic shares across Lower Mississippi (HU 08) from 10000 BC to 1600 AD.</figcaption>
</figure>

After `1541 AD`, prolonged armed conflict and introduced pathogens during De Soto's three-year Lower Mississippi campaign shattered dense St. Francis and Yazoo chiefdoms [@hudson1997; @morse1983; @jones2014]. Population fell `34,8%` to `180,0k` in `1550 AD` and `61,6%` relative to `1500 AD` by `1600 AD` (`106,0k`, bounds `97,5k-114,5k`), when French explorers later documented sparse Quapaw, Tunica and Natchez survivors [@milner2010; @ubelaker2006].

<figure class="crd-table-figure" id="tab:lm-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>St. Francis-Memphis-Parkin</strong></td><td class="crd-td">1200AD</td><td class="crd-td">129k</td><td class="crd-td">118,7k-139,3k</td></tr>
<tr><td class="crd-td"><strong>Yazoo-Ouachita-Poverty Point</strong></td><td class="crd-td">1200AD</td><td class="crd-td">118,5k</td><td class="crd-td">109k-128k</td></tr>
<tr><td class="crd-td"><strong>Natchez-Atchafalaya Delta</strong></td><td class="crd-td">1200AD</td><td class="crd-td">78,5k</td><td class="crd-td">72,2k-84,8k</td></tr>
<tr><td class="crd-td"><strong>St. Francis-Memphis-Parkin</strong></td><td class="crd-td">1500AD</td><td class="crd-td">112k</td><td class="crd-td">103k-121k</td></tr>
<tr><td class="crd-td"><strong>Yazoo-Ouachita-Poverty Point</strong></td><td class="crd-td">1500AD</td><td class="crd-td">96k</td><td class="crd-td">88,3k-103,7k</td></tr>
<tr><td class="crd-td"><strong>Natchez-Atchafalaya Delta</strong></td><td class="crd-td">1500AD</td><td class="crd-td">68k</td><td class="crd-td">62,6k-73,4k</td></tr>
<tr><td class="crd-td"><strong>St. Francis-Memphis-Parkin</strong></td><td class="crd-td">1600AD</td><td class="crd-td">42k</td><td class="crd-td">38,6k-45,4k</td></tr>
<tr><td class="crd-td"><strong>Yazoo-Ouachita-Poverty Point</strong></td><td class="crd-td">1600AD</td><td class="crd-td">36k</td><td class="crd-td">33,1k-38,9k</td></tr>
<tr><td class="crd-td"><strong>Natchez-Atchafalaya Delta</strong></td><td class="crd-td">1600AD</td><td class="crd-td">28k</td><td class="crd-td">25,8k-30,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional population totals across Lower Mississippi (HU 08) at 1200 AD, 1500 AD and 1600 AD.</figcaption>
</figure>

# Limitations

Alluvial meandering and Holocene overbank siltation across the Yazoo, St. Francis and Atchafalaya floodplains deeply bury early Archaic and Paleoindian sites, reducing radiocarbon visibility prior to `4000 BC` [@saunders1997; @kelly2025]. Similarly, rapid `1543-1682 AD` demographic collapse between Spanish and French textual horizons leaves sixteenth-century nadir trajectories interpolated from archaeological phase contractions rather than continuous parish returns [@hudson1997; @milner2010].

# Sources

<div id="refs"></div>
