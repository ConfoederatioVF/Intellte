---
title: "Ohio River Hydrological Unit (HU 05)"
subtitle: "CENTAUR-II: Adena-Hopewell Monumental Cores, Fort Ancient and Cumberland-Wabash, -10000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: ohio_river_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_ohio_river_spatial.png"
hero_caption: "Sub-regional areal masks and eighteen verified settlements across the Ohio River Hydrological Unit (424,10k km²), from the Allegheny Plateau to the Wabash-Ohio confluence."
hero_label: "fig:hero-ohio-river"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the pre-Columbian demographic trajectory of the Ohio River Hydrological Unit (USGS HU 05) across `424.096 km²` (`6.321` five-arcminute cells) from `10000 BC` (`-10000 AD`) to `1600 AD`. Combining Kelly et al. [@kelly2025] radiocarbon summed probability trends (`N = 1.828`, median peak `1295 AD`) with Adena-Hopewell earthwork surveys [@dancey1997; @charles2006], Fort Ancient-Oliver-Monongahela village chronologies [@comstock2018; @cook2017] and Vacant Quarter abandonment studies [@cobb2002; @cobb2023], HU 05 is divided into four sub-regions. Basin population rises from `950` (`874-1.026`) in `10000 BC` to `142,0k` (`130,6k-153,4k`) at `0 AD`, climbs through Middle Woodland Hopewell (`162,0k` at `200 AD`) and peaks at `264,0k` (`242,9k-285,1k`) in `1300 AD` as migrant communities from Cahokia and the American Bottom bolster Fort Ancient, Angel and Kincaid settlements [@benson2009; @comstock2018]. Fourteenth-century Vacant Quarter depopulation along the lower Ohio and Wabash-Cumberland reduces totals by `26,1%` to `195,0k` in `1400 AD`, easing further to `176,0k` (`161,9k-190,1k`) in `1500 AD` and `151,0k` (`138,9k-163,1k`) by `1600 AD` [@milner2010; @ubelaker2006].

# Background

USGS HU 05 drains the Appalachian Plateau, Bluegrass, Interior Low Plateaus and Till Plains from western New York and Pennsylvania down the Allegheny, Monongahela, Kanawha, Scioto, Miami, Kentucky, Green, Cumberland and Wabash rivers to Cairo, Illinois. During the Early and Middle Woodland periods (`1000 BC-400 AD`), the Scioto and Upper Ohio valleys hosted North America's largest geometric earthen enclosures and burial mounds (`Adena` and `Hopewell`) [@dancey1997; @charles2006].

Using `1.828` cleaned radiocarbon dates, Kelly et al. [@kelly2025] place the median HU 05 peak at `1295 AD`, nearly two centuries after Upper Mississippi (`1107 AD`). Greater effective moisture in the Ohio valley during the twelfth and thirteenth centuries drew emigrating groups out of drought-stressed Cahokia and the American Bottom [@benson2009; @comstock2018], sustaining `Angel`, `Kincaid`, `Fort Ancient` and `Monongahela` villages until Vacant Quarter abandonment and escalating conflict emptied the lower river after `1350 AD` [@cobb2002; @cobb2023; @krus2016].

# Methodology

## Radiocarbon Kriging and Sub-Regional Partitioning

Rural spatial priors derive from `sites_p3k14c_na` (`p3k14c` [@bird2022p3k14c] and `c14bazAAR`), calibrated across ten Holocene horizons via non-stationary Matérn ($\nu = 3/2$) kriging over `1.359` domestic Voronoi catchments and `171` cross-frontier buffers [@kelly2022; @crema2021]. Within HU 05, `6.321` land pixels (`424.096 km²`) map onto four sub-regions in `ohio_river_areal_mask.png`:

1. **Upper Ohio, Allegheny and Kanawha Plateau** (`oh_upper_ohio_allegheny_kanawha`, `150.686 km²`, `2.263` pixels): Allegheny, Monongahela, Kanawha and upper Ohio plateau corridors.
2. **Scioto, Little and Great Miami Valleys** (`oh_scioto_miami_hopewell_core`, `59.877 km²`, `901` pixels): Central Ohio Adena-Hopewell earthwork core and Fort Ancient alluvial terraces.
3. **Cumberland, Kentucky and Green Valleys** (`oh_kentucky_cumberland_green`, `143.882 km²`, `2.108` pixels): Kentucky Bluegrass, Green River shell-mound corridor and lower Cumberland stone-box zone.
4. **Wabash-White Basins and Lower Ohio Confluence** (`oh_wabash_white_lower_ohio_kincaid`, `69.651 km²`, `1.049` pixels): Wabash-White till plains and Angel-Kincaid bottomlands.

## Village-Level Calibration and Uncertainty Bounds

Sub-regional trajectories at `23` horizons (`-10000` to `1600 AD`) balance dispersed Woodland hamlet models (`1,5-2,5` persons/km² along Scioto-Miami gravel terraces) against nucleated Fort Ancient and Lower Ohio Mississippian plaza towns [@dancey1997; @cook2017; @hilgeman2000; @milner2010]. Symmetric `±8,0%` bounds reflect phase-duration uncertainty and uneven nineteenth-century mound documentation. `ViscountSubstrataMosaic` locks `18` verified settlements in `ohio_river_settlements.json` and smooths residuals across two `5`-pixel passes.

# Testing and Validation

All regional gates passed with `0` errors at `GMT+0`:

1. **Kriging Sharpness**: `sites_p3k14c_na` achieves `tau1 = 1,25`, `nugget_to_sill = 0,04` to `0,22` and pseudo-$R^2 = 0,9733$ to `0,9992`.
2. **Gazetteer Exhaustiveness**: `ohio_river_settlements.json` (`18` included sites) and `ohio_river_source_ledger.json5` (`1` excluded rockshelter) reconcile with `0` unaccounted entries.
3. **Arithmetic Consistency**: Sub-regional sums match `headline_population_by_benchmark` across all `23` horizons from `10000 BC` (`950`) to `1600 AD` (`151,0k`).

<figure class="crd-table-figure" id="tab:oh-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">10000BC</td><td class="crd-td">950</td><td class="crd-td">874-1k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">5000BC</td><td class="crd-td">26,3k</td><td class="crd-td">24,2k-28,4k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">2000BC</td><td class="crd-td">81,8k</td><td class="crd-td">75,3k-88,3k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">0AD</td><td class="crd-td">142k</td><td class="crd-td">130,6k-153,4k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">200AD</td><td class="crd-td">162k</td><td class="crd-td">149k-175k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">400AD</td><td class="crd-td">172k</td><td class="crd-td">158,2k-185,8k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">1000AD</td><td class="crd-td">231k</td><td class="crd-td">212,5k-249,5k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">1100AD</td><td class="crd-td">245,5k</td><td class="crd-td">225,9k-265,1k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">1200AD</td><td class="crd-td">257k</td><td class="crd-td">236,4k-277,6k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">1300AD</td><td class="crd-td">264k</td><td class="crd-td">242,9k-285,1k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">1400AD</td><td class="crd-td">195k</td><td class="crd-td">179,4k-210,6k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">1500AD</td><td class="crd-td">176k</td><td class="crd-td">161,9k-190,1k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">1550AD</td><td class="crd-td">163,5k</td><td class="crd-td">150,4k-176,6k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">1600AD</td><td class="crd-td">151k</td><td class="crd-td">138,9k-163,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Benchmark population estimates and uncertainty bounds for Ohio River (HU 05), 10000 BC to 1600 AD.</figcaption>
</figure>

# Results

## Woodland Earthworks to Thirteenth-Century Maximum

Green River Archaic shell-mound aggregation (`Indian Knoll`) and Adena-Hopewell ceremonial centres lifted HU 05 population from `950` (`874-1.026`) in `10000 BC` to `111,0k` in `1000 BC`, `142,0k` at `0 AD` and `162,0k` at `200 AD` [@dancey1997; @charles2006]. Within this expansion, the Scioto-Miami Hopewell core shows a local Middle Woodland crest of `41,0k` at `200 AD` followed by a fourth-century pause (`38,0k` at `400 AD`) as monumental earthwork construction ceased, before Late Woodland and Fort Ancient maize villages lifted Scioto-Miami to `58,5k` (`53,8k-63,2k`) by `1300 AD` [@cook2017]. Across the whole basin, numbers peaked at `264,0k` (`242,9k-285,1k`) in `1300 AD`, aligning with Kelly et al. [@kelly2025] `1295 AD` radiocarbon mode (`N = 1.828`).

<figure class="crd-figure-block" id="fig:oh-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-ohio-river/fig2_ohio_river_trajectory.png" alt="fig:oh-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and sub-regional population trajectories for Ohio River (HU 05) from 10000 BC to 1600 AD with uncertainty envelope.</figcaption>
</figure>

## Vacant Quarter Contraction and Upper Valley Persistence

Between `1300 AD` and `1400 AD`, aggregate population fell `26,1%` to `195,0k` (`179,4k-210,6k`), concentrated along the lower river. Wabash-White-Lower Ohio dropped `39,5%` (`64,5k` to `39,0k`) and Kentucky-Cumberland-Green fell `28,5%` (`68,5k` to `49,0k`) as `Angel Mounds`, `Kincaid Mounds`, `Mound Bottom` and `Jonathan Creek` emptied during the Vacant Quarter realignment [@cobb2002; @cobb2023; @hilgeman2000].

<figure class="crd-figure-block" id="fig:oh-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-ohio-river/fig3_ohio_river_shares.png" alt="fig:oh-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic shares across the four divisions of Ohio River (HU 05) from 10000 BC to 1600 AD.</figcaption>
</figure>

Upper Ohio-Allegheny-Kanawha declined much more gradually (`72,5k` in `1300 AD` to `61,0k` in `1400 AD` and `56,0k` in `1500 AD`), increasing its regional share from `27,5%` in `1300 AD` to `31,8%` in `1500 AD`. By `1600 AD`, pre-contact conflict and peripheral epidemic diffusion lowered HU 05 to `151,0k` (`138,9k-163,1k`), prior to seventeenth-century Haudenosaunee Beaver Wars depopulation [@milner2010; @krus2016].

<figure class="crd-table-figure" id="tab:oh-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Ohio-Allegheny-Kanawha</strong></td><td class="crd-td">1300AD</td><td class="crd-td">72,5k</td><td class="crd-td">66,7k-78,3k</td></tr>
<tr><td class="crd-td"><strong>Scioto-Miami Hopewell Core</strong></td><td class="crd-td">1300AD</td><td class="crd-td">58,5k</td><td class="crd-td">53,8k-63,2k</td></tr>
<tr><td class="crd-td"><strong>Kentucky-Cumberland-Green</strong></td><td class="crd-td">1300AD</td><td class="crd-td">68,5k</td><td class="crd-td">63k-74k</td></tr>
<tr><td class="crd-td"><strong>Wabash-White-Lower Ohio</strong></td><td class="crd-td">1300AD</td><td class="crd-td">64,5k</td><td class="crd-td">59,3k-69,7k</td></tr>
<tr><td class="crd-td"><strong>Upper Ohio-Allegheny-Kanawha</strong></td><td class="crd-td">1500AD</td><td class="crd-td">56k</td><td class="crd-td">51,5k-60,5k</td></tr>
<tr><td class="crd-td"><strong>Scioto-Miami Hopewell Core</strong></td><td class="crd-td">1500AD</td><td class="crd-td">42k</td><td class="crd-td">38,6k-45,4k</td></tr>
<tr><td class="crd-td"><strong>Kentucky-Cumberland-Green</strong></td><td class="crd-td">1500AD</td><td class="crd-td">44k</td><td class="crd-td">40,5k-47,5k</td></tr>
<tr><td class="crd-td"><strong>Wabash-White-Lower Ohio</strong></td><td class="crd-td">1500AD</td><td class="crd-td">34k</td><td class="crd-td">31,3k-36,7k</td></tr>
<tr><td class="crd-td"><strong>Upper Ohio-Allegheny-Kanawha</strong></td><td class="crd-td">1600AD</td><td class="crd-td">48k</td><td class="crd-td">44,2k-51,8k</td></tr>
<tr><td class="crd-td"><strong>Scioto-Miami Hopewell Core</strong></td><td class="crd-td">1600AD</td><td class="crd-td">36k</td><td class="crd-td">33,1k-38,9k</td></tr>
<tr><td class="crd-td"><strong>Kentucky-Cumberland-Green</strong></td><td class="crd-td">1600AD</td><td class="crd-td">38k</td><td class="crd-td">35k-41k</td></tr>
<tr><td class="crd-td"><strong>Wabash-White-Lower Ohio</strong></td><td class="crd-td">1600AD</td><td class="crd-td">29k</td><td class="crd-td">26,7k-31,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional population totals across Ohio River (HU 05) at 1300 AD, 1500 AD and 1600 AD.</figcaption>
</figure>

# Limitations

Middle Woodland Hopewell earthworks (`Newark Earthworks`, `Hopewell Mound Group`) served vast multi-valley ritual catchments whose seasonal ceremonial attendance exceeded permanent year-round residents, complicating direct structure-to-population conversion [@dancey1997; @charles2006]. Because HU 05 saw no direct sixteenth-century European expeditions, `1500-1600 AD` trajectories depend on radiocarbon continuity and indirect trade-horizon dating rather than contemporary censuses [@milner2010; @cobb2023].

# Sources

<div id="refs"></div>
