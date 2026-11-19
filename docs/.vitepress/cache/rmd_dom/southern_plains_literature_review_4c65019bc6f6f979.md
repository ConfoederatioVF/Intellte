---
title: "Southern Plains Hydrological Unit (HU 12)"
subtitle: "CENTAUR-II: Texas-Gulf Caddoan Chiefdoms, Central Prairies and Coastal Foragers, -10000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: southern_plains_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_southern_plains_spatial.png"
hero_caption: "Sub-regional areal masks and six verified settlements across the Southern Plains Hydrological Unit (461,47k km²), from Caddoan East Texas to the Karankawa coast."
hero_label: "fig:hero-southern-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the pre-Columbian and early contact demography of the Texas-Gulf Southern Plains Hydrological Unit (USGS HU 12) over `461.470 km²` (`6.344` five-arcminute cells) from `10000 BC` (`-10000 AD`) to `1600 AD`. Integrating Kelly et al. [@kelly2025] radiocarbon summed probability dynamics (`N = 2.347`, median peak `1287 AD`) with Caddoan mound surveys [@perttula2012], Central Texas lithic-spring records [@perttula2004; @waters2011] and coastal Karankawa settlement syntheses [@ricklis1996], HU 12 is partitioned into three sub-regions. Basin population rises from `850` (`782-918`) in `10000 BC` to `82,3k` (`75,7k-88,9k`) at `0 AD` and peaks at `160,0k` (`147,2k-172,8k`) in `1300 AD`, paced by Neches-Sabine-Trinity Caddoan farming chiefdoms (`77,0k`). Fourteenth-century Southern Plains drought and bison-hunter mobility lower totals to `141,2k` in `1400 AD` and `131,0k` (`120,5k-141,5k`) in `1500 AD`. Following Spanish Gulf shipwreck contact (`1528 AD`) and sixteenth-century epidemics, numbers decline to `112,0k` in `1550 AD` and `95,0k` (`87,4k-102,6k`) by `1600 AD` [@ewers1973; @jones2014].

# Background

USGS HU 12 covers the Texas-Gulf drainage basins from the Sabine, Neches and Trinity pineywoods across the Brazos, Colorado and Edwards Plateau escarpment to the Nueces and Galveston-Matagorda barrier bays. This ecological transect separates sedentary maize-farming Caddoan mound chiefdoms in East Texas from semi-sedentary bison-and-geophyte foragers across the Edwards Plateau and seasonal estuarine fishers along the Gulf coast [@perttula2004; @perttula2012; @ricklis1996].

Across `2.347` cleaned radiocarbon dates in HU 12, Kelly et al. [@kelly2025] identify a median summed probability peak at `1287 AD`, almost two centuries later than the Rio Grande (`1112 AD`) and over a century after the Southeast (`1169 AD`). That late thirteenth-century maximum marks the height of Alto and Middle Caddoan civic centres (`George C. Davis` and `Washington Square Mound`) alongside intensive Edwards Plateau burnt-rock-midden and Gulf estuarine harvesting [@perttula2012; @ricklis1996].

# Methodology

## Radiocarbon Kriging and Sub-Regional Partitioning

Continental habitation priors at five-arcminute resolution come from `sites_p3k14c_na` (`p3k14c` [@bird2022p3k14c] and `c14bazAAR`), kriged across ten Holocene horizons with non-stationary Matérn ($\nu = 3/2$) models over `1.359` domestic catchments and `171` cross-frontier buffers across Tamaulipas and Nuevo León [@kelly2022; @crema2021]. Within HU 12, `6.344` land pixels (`461.470 km²`) partition into three masks in `southern_plains_areal_mask.png`:

1. **Sabine, Neches and Upper Trinity Caddo** (`sp_neches_sabine_trinity_caddo`, `95.741 km²`, `1.328` pixels): East Texas pineywoods, Neches-Angelina terraces and Upper Trinity agricultural belt.
2. **Brazos, Colorado and Edwards Plateau** (`sp_brazos_colorado_edwards`, `305.246 km²`, `4.186` pixels): Blackland Prairie, Balcones spring line, Edwards Plateau karst and lower Brazos-Colorado floodplains.
3. **Texas Gulf Barrier Coast and Nueces** (`sp_gulf_coast_nueces_karankawa`, `60.483 km²`, `830` pixels): Galveston-Matagorda bays, Guadalupe-San Antonio delta and Nueces-Corpus Christi littoral.

## Subsistence Calibration and Uncertainty Bounds

Sub-regional series across `23` benchmark years (`-10000` to `1600 AD`) differentiate Caddoan floodplain horticultural densities (`0,75-0,80` persons/km² regional mean at `1300 AD`) from lower-density Edwards Plateau and coastal foraging strata (`0,19` and `0,41` persons/km² respectively) [@perttula2012; @ricklis1996; @milner2010]. Symmetric `±8,0%` bounds reflect survey variance between East Texas Caddoan core counties and western prairie tracts. `ViscountSubstrataMosaic` incorporates `6` verified settlements in `southern_plains_settlements.json` and smooths rural residuals over two `5`-pixel passes.

# Testing and Validation

All regional checks passed with `0` errors at `GMT+0`:

1. **Kriging Sharpness**: `sites_p3k14c_na` maintains `tau1 = 1,25`, `nugget_to_sill = 0,04` to `0,22` and pseudo-$R^2 = 0,9733$ to `0,9992`.
2. **Gazetteer Exhaustiveness**: `southern_plains_settlements.json` (`6` included sites) and `southern_plains_source_ledger.json5` (`1` excluded entry) reconcile with `0` unaccounted candidates.
3. **Arithmetic Integrity**: Sub-regional series sum exactly to `headline_population_by_benchmark` across all `23` horizons from `10000 BC` (`850`) to `1600 AD` (`95,0k`).

<figure class="crd-table-figure" id="tab:sp-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">10000BC</td><td class="crd-td">850</td><td class="crd-td">782-918</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">5000BC</td><td class="crd-td">17,1k</td><td class="crd-td">15,7k-18,5k</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">2000BC</td><td class="crd-td">48,5k</td><td class="crd-td">44,6k-52,4k</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">0AD</td><td class="crd-td">82,3k</td><td class="crd-td">75,7k-88,9k</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">600AD</td><td class="crd-td">120,6k</td><td class="crd-td">111k-130,2k</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">1000AD</td><td class="crd-td">144,7k</td><td class="crd-td">133,1k-156,3k</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">1100AD</td><td class="crd-td">151,8k</td><td class="crd-td">139,7k-163,9k</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">1200AD</td><td class="crd-td">157,2k</td><td class="crd-td">144,6k-169,8k</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">1300AD</td><td class="crd-td">160k</td><td class="crd-td">147,2k-172,8k</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">1400AD</td><td class="crd-td">141,2k</td><td class="crd-td">129,9k-152,5k</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">1500AD</td><td class="crd-td">131k</td><td class="crd-td">120,5k-141,5k</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">1550AD</td><td class="crd-td">112k</td><td class="crd-td">103k-121k</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 12)</strong></td><td class="crd-td">1600AD</td><td class="crd-td">95k</td><td class="crd-td">87,4k-102,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Benchmark population estimates and uncertainty bounds for Southern Plains (HU 12), 10000 BC to 1600 AD.</figcaption>
</figure>

# Results

## Palaeoindian Springs to Thirteenth-Century Caddoan Peak

Early Holocene occupation at Balcones spring sites such as `Gault` (`65-90` in `10000-8000 BC`) anchored a basin population rising from `850` (`782-918`) in `10000 BC` to `48,5k` by `2000 BC` and `82,3k` (`75,7k-88,9k`) at `0 AD` [@waters2011; @perttula2004]. Woodland and Early Caddoan agricultural expansion (`800-1300 AD`) carried Sabine-Neches-Trinity numbers from `62,0k` at `800 AD` to `77,0k` (`70,8k-83,2k`) at `1300 AD`, lifting HU 12 to its Holocene maximum of `160,0k` (`147,2k-172,8k`) in `1300 AD`, directly matching Kelly et al. [@kelly2025] `1287 AD` radiocarbon peak.

<figure class="crd-figure-block" id="fig:sp-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-southern-plains/fig2_southern_plains_trajectory.png" alt="fig:sp-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and sub-regional population trajectories for Southern Plains (HU 12) from 10000 BC to 1600 AD with uncertainty envelope.</figcaption>
</figure>

## Drought Realignment, Plains Trade and Contact Losses

Between `1300 AD` and `1500 AD`, total basin numbers declined `18,1%` to `131,0k` (`120,5k-141,5k`) as East Texas mound-building contracted (`77,0k` to `62,0k`), Toyah bison hunters and Wichita villagers expanded along the Brazos-Colorado prairies (`58,5k` to `48,0k`), and Athabascan groups entered the western Plains borderlands [@perttula2012; @vehik2002; @doering2020]. Throughout this shift, East Texas Caddo retained `47,3%` (`62,0k`) of HU 12 population in `1500 AD`, compared with `36,6%` (`48,0k`) in Brazos-Colorado-Edwards and `16,0%` (`21,0k`) on the Gulf barrier coast.

<figure class="crd-figure-block" id="fig:sp-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-southern-plains/fig3_southern_plains_shares.png" alt="fig:sp-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic shares across Southern Plains (HU 12) from 10000 BC to 1600 AD.</figcaption>
</figure>

Narváez and Cabeza de Vaca's `1528 AD` landfall near Galveston (`Mitchell Ridge` area), Moscoso's `1542 AD` entry into East Texas and coastal Gulf epidemics reduced basin totals by `14,5%` to `112,0k` in `1550 AD` and `27,5%` below `1500 AD` levels by `1600 AD` (`95,0k`, bounds `87,4k-102,6k`) [@ewers1973; @ricklis1996; @jones2014].

<figure class="crd-table-figure" id="tab:sp-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sabine-Neches-Trinity Caddo</strong></td><td class="crd-td">1300AD</td><td class="crd-td">77k</td><td class="crd-td">70,8k-83,2k</td></tr>
<tr><td class="crd-td"><strong>Brazos-Colorado-Edwards</strong></td><td class="crd-td">1300AD</td><td class="crd-td">58,5k</td><td class="crd-td">53,8k-63,2k</td></tr>
<tr><td class="crd-td"><strong>Gulf Coast-Nueces</strong></td><td class="crd-td">1300AD</td><td class="crd-td">24,5k</td><td class="crd-td">22,5k-26,5k</td></tr>
<tr><td class="crd-td"><strong>Sabine-Neches-Trinity Caddo</strong></td><td class="crd-td">1500AD</td><td class="crd-td">62k</td><td class="crd-td">57k-67k</td></tr>
<tr><td class="crd-td"><strong>Brazos-Colorado-Edwards</strong></td><td class="crd-td">1500AD</td><td class="crd-td">48k</td><td class="crd-td">44,2k-51,8k</td></tr>
<tr><td class="crd-td"><strong>Gulf Coast-Nueces</strong></td><td class="crd-td">1500AD</td><td class="crd-td">21k</td><td class="crd-td">19,3k-22,7k</td></tr>
<tr><td class="crd-td"><strong>Sabine-Neches-Trinity Caddo</strong></td><td class="crd-td">1600AD</td><td class="crd-td">42k</td><td class="crd-td">38,6k-45,4k</td></tr>
<tr><td class="crd-td"><strong>Brazos-Colorado-Edwards</strong></td><td class="crd-td">1600AD</td><td class="crd-td">38k</td><td class="crd-td">35k-41k</td></tr>
<tr><td class="crd-td"><strong>Gulf Coast-Nueces</strong></td><td class="crd-td">1600AD</td><td class="crd-td">15k</td><td class="crd-td">13,8k-16,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional population totals across Southern Plains (HU 12) at 1300 AD, 1500 AD and 1600 AD.</figcaption>
</figure>

# Limitations

Marine shell-midden radiocarbon dates along Galveston, Matagorda and Corpus Christi bays were omitted from Kelly et al. [@kelly2025] due to estuarine reservoir variability, which can attenuate late Holocene coastal SPD amplitude [@ricklis1996]. Seasonal mobility among Edwards Plateau Toyah and Coahuiltecan bands resists point-site enumeration, concentrating urban records in East Texas Caddoan centres and multi-component coastal shell camps [@perttula2004].

# Sources

<div id="refs"></div>
