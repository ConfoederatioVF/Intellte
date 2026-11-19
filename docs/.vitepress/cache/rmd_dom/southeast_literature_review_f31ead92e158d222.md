---
title: "Southeast Hydrological Unit (HU 03)"
subtitle: "CENTAUR-II: Mississippian Chiefdoms of the Piedmont, Coastal Plain and Florida, -10000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: southeast_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_southeast_spatial.png"
hero_caption: "Sub-regional areal masks and nineteen verified settlements across the Southeast Hydrological Unit (680,52k km²), from the Carolina Piedmont to the Calusa coast."
hero_label: "fig:hero-southeast"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the pre-Columbian and early contact demography of the Southeast Hydrological Unit (USGS HU 03) across `680.516 km²` (`9.638` five-arcminute cells) from `10000 BC` (`-10000 AD`) to `1600 AD`. Linking Kelly et al. [@kelly2025] radiocarbon summed probability dynamics (`N = 1.716`, median peak `1169 AD`) with Mississippian chiefdom trajectories [@anderson1994; @knight1998; @king2003], Savannah valley emigration records [@ritchison2018; @ritchison2022] and early Spanish-English colonial accounts [@hudson1997; @milanich1995], HU 03 is divided into four sub-regions. Aggregate population climbs from `3.150` (`2.898-3.402`) in `10000 BC` to `411,0k` (`378,1k-443,9k`) at `0 AD` and reaches a basin peak of `707,0k` (`650,4k-763,6k`) in `1200 AD`. Fourteenth-century drought and chiefdom fragmentation pull totals to `586,0k` in `1400 AD` before late Mississippian coalescence lifts numbers to `614,0k` (`564,9k-663,1k`) at `1500 AD`. Sixteenth-century epidemics, slaving and military incursions then cut basin population by `45,3%` to `336,0k` (`309,1k-362,9k`) by `1600 AD` [@milner2010; @jones2014].

# Background

USGS HU 03 covers the South Atlantic and Eastern Gulf drainages from the Roanoke and Santee-Wateree rivers through the Savannah, Ocmulgee, Alabama-Tombigbee and Apalachicola valleys to Peninsular Florida. Warm growing seasons, alluvial bottomlands and rich estuarine fisheries supported the largest Indigenous population density in eastern North America prior to European contact [@milner2010; @ubelaker2006; @mcevedy1978].

Using `1.716` cleaned radiocarbon dates, Kelly et al. [@kelly2025] place HU 03's median summed probability peak at `1169 AD`, coinciding with the rise of `Moundville`, `Etowah` and `Ocmulgee` [@knight1998; @king2003]. Local chronologies show pronounced sub-regional turnover after `1350 AD`, when severe `1360-1377 AD` droughts preceded the abandonment of the middle Savannah River valley (`c. 1450 AD`) and resettlement along the Georgia coast and Piedmont-Appalachian margins [@anderson1994; @ritchison2018; @ritchison2022].

# Methodology

## Radiocarbon Kriging and Sub-Regional Partitioning

Rural spatial priors derive from `sites_p3k14c_na` (`p3k14c` [@bird2022p3k14c] and `c14bazAAR`), interpolated across ten Holocene horizons via non-stationary Matérn ($\nu = 3/2$) kriging using `1.359` domestic Voronoi catchments and `171` cross-frontier buffer catchments across Cuba and the Bahamas [@kelly2022; @crema2021]. Within HU 03, `9.638` land cells (`680.516 km²`) partition into four masks in `southeast_areal_mask.png`:

1. **Carolina Piedmont and Santee-Wateree** (`se_carolina_piedmont_santee`, `204.454 km²`, `2.999` pixels): Roanoke, Yadkin-Pee Dee, Santee-Wateree and coastal Virginia-Carolina borderlands.
2. **Georgia Savannah, Ocmulgee and Etowah-Coosa** (`se_georgia_savannah_ocmulgee_etowah`, `170.809 km²`, `2.376` pixels): Savannah, Altamaha-Ocmulgee and Upper Coosa-Etowah valleys.
3. **Alabama, Black Warrior and Tombigbee-Mobile** (`se_alabama_tombigbee_moundville`, `164.791 km²`, `2.282` pixels): Black Warrior, Cahaba, Alabama, Tombigbee and Mobile-Tensaw delta.
4. **Peninsular Florida and Apalachicola** (`se_peninsular_florida_apalachicola`, `140.462 km²`, `1.981` pixels): Apalachicola, St. Johns, Tampa Bay and Calusa southwest coast.

## Arable Calibration and Uncertainty Bounds

Sub-regional trajectories at `23` horizons (`-10000` to `1600 AD`) reconcile floodplain maize-farming densities (`2,0-4,5` persons/km² in prime Mississippian river corridors) with maritime shell-mound fisheries along the Atlantic and Gulf littoral [@milner2010; @milanich1995]. Symmetric uncertainty bounds of `±8,0%` accommodate house-lifespan assumptions and post-contact mortality interpolation [@jones2014]. `ViscountSubstrataMosaic` locks `19` verified settlements in `southeast_settlements.json` and smooths rural residuals across two `5`-pixel passes.

# Testing and Validation

All pre-publication gates passed with `0` errors at `GMT+0`:

1. **Kriging Sharpness**: `sites_p3k14c_na` satisfies `tau1 = 1,25`, `nugget_to_sill = 0,04` to `0,22` and pseudo-$R^2 = 0,9733$ to `0,9992` across all ten horizons.
2. **Gazetteer Exhaustiveness**: `southeast_settlements.json` (`19` included sites) and `southeast_source_ledger.json5` (`2` excluded candidates) balance with `0` unaccounted records.
3. **Arithmetic Integrity**: Sub-regional totals match `headline_population_by_benchmark` across all `23` horizons from `10000 BC` (`3.150`) to `1600 AD` (`336,0k`).

<figure class="crd-table-figure" id="tab:se-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">10000BC</td><td class="crd-td">3,1k</td><td class="crd-td">2,9k-3,4k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">5000BC</td><td class="crd-td">75,2k</td><td class="crd-td">69,2k-81,2k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">2000BC</td><td class="crd-td">234k</td><td class="crd-td">215,3k-252,7k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">0AD</td><td class="crd-td">411k</td><td class="crd-td">378,1k-443,9k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">600AD</td><td class="crd-td">592k</td><td class="crd-td">544,6k-639,4k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">1000AD</td><td class="crd-td">684k</td><td class="crd-td">629,3k-738,7k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">1100AD</td><td class="crd-td">700k</td><td class="crd-td">644k-756k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">1200AD</td><td class="crd-td">707k</td><td class="crd-td">650,4k-763,6k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">1300AD</td><td class="crd-td">644k</td><td class="crd-td">592,5k-695,5k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">1400AD</td><td class="crd-td">586k</td><td class="crd-td">539,1k-632,9k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">1500AD</td><td class="crd-td">614k</td><td class="crd-td">564,9k-663,1k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">1550AD</td><td class="crd-td">464k</td><td class="crd-td">426,9k-501,1k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03)</strong></td><td class="crd-td">1600AD</td><td class="crd-td">336k</td><td class="crd-td">309,1k-362,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Benchmark population estimates and uncertainty bounds for Southeast (HU 03), 10000 BC to 1600 AD.</figcaption>
</figure>

# Results

## Archaic Shell Mounds to Twelfth-Century Florescence

From `3.150` (`2.898-3.402`) Palaeoindian inhabitants at `10000 BC`, coastal and riverine foraging lifted HU 03 population to `234,0k` by `2000 BC`, marked by early pottery-using communities such as `Stallings Island` [@anderson1994]. Middle and Late Woodland ceremonial earthworks (`Kolomoki`, `1,65k` at `600 AD`) carried regional totals from `411,0k` at `0 AD` to `592,0k` at `600 AD`. Rapid Mississippian maize adoption and platform-mound urbanisation after `900 AD` lifted the basin to `684,0k` in `1000 AD` and a Holocene peak of `707,0k` (`650,4k-763,6k`) in `1200 AD`, consistent with Kelly et al. [@kelly2025] `1169 AD` radiocarbon maximum.

<figure class="crd-figure-block" id="fig:se-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-southeast/fig2_southeast_trajectory.png" alt="fig:se-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and sub-regional population trajectories for Southeast (HU 03) from 10000 BC to 1600 AD with uncertainty envelope.</figcaption>
</figure>

## Chiefdom Cycles and Sixteenth-Century Collapse

Between `1200 AD` and `1400 AD`, aggregate numbers eased `17,1%` to `586,0k` (`539,1k-632,9k`) as endemic palisaded warfare [@krus2016; @milner2013], Savannah valley drought abandonment [@ritchison2022] and `Moundville` decentralisation redistributed communities across secondary valleys [@knight1998]. Late Mississippian paramountcies (`Cofitachequi`, `Coosa`, `Mabila`, `Apalachee` and `Calusa`) rebuilt totals to `614,0k` (`564,9k-663,1k`) in `1500 AD`, distributed evenly across Carolina (`176,0k`), Georgia (`152,0k`), Alabama (`144,0k`) and Florida (`142,0k`).

<figure class="crd-figure-block" id="fig:se-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-southeast/fig3_southeast_shares.png" alt="fig:se-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic shares across the four divisions of Southeast (HU 03) from 10000 BC to 1600 AD.</figcaption>
</figure>

Spanish maritime incursions (`1513-1526 AD`), Hernando de Soto's `1539-1541 AD` expedition, Luna's colony and missionisation at St. Augustine (`1565 AD`) triggered steep demographic contraction [@hudson1997; @milanich1995; @jones2014]. Basin totals dropped `24,4%` to `464,0k` in `1550 AD` and fell further to `336,0k` (`309,1k-362,9k`) by `1600 AD`, with Alabama-Tombigbee (`-47,2%` since `1500 AD`) and Florida (`-52,1%`) experiencing the heaviest losses.

<figure class="crd-table-figure" id="tab:se-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Carolina Piedmont-Santee</strong></td><td class="crd-td">1200AD</td><td class="crd-td">196k</td><td class="crd-td">180,3k-211,7k</td></tr>
<tr><td class="crd-td"><strong>Georgia Savannah-Ocmulgee</strong></td><td class="crd-td">1200AD</td><td class="crd-td">186k</td><td class="crd-td">171,1k-200,9k</td></tr>
<tr><td class="crd-td"><strong>Alabama-Tombigbee</strong></td><td class="crd-td">1200AD</td><td class="crd-td">176k</td><td class="crd-td">161,9k-190,1k</td></tr>
<tr><td class="crd-td"><strong>Florida-Apalachicola</strong></td><td class="crd-td">1200AD</td><td class="crd-td">149k</td><td class="crd-td">137,1k-160,9k</td></tr>
<tr><td class="crd-td"><strong>Carolina Piedmont-Santee</strong></td><td class="crd-td">1500AD</td><td class="crd-td">176k</td><td class="crd-td">161,9k-190,1k</td></tr>
<tr><td class="crd-td"><strong>Georgia Savannah-Ocmulgee</strong></td><td class="crd-td">1500AD</td><td class="crd-td">152k</td><td class="crd-td">139,8k-164,2k</td></tr>
<tr><td class="crd-td"><strong>Alabama-Tombigbee</strong></td><td class="crd-td">1500AD</td><td class="crd-td">144k</td><td class="crd-td">132,5k-155,5k</td></tr>
<tr><td class="crd-td"><strong>Florida-Apalachicola</strong></td><td class="crd-td">1500AD</td><td class="crd-td">142k</td><td class="crd-td">130,6k-153,4k</td></tr>
<tr><td class="crd-td"><strong>Carolina Piedmont-Santee</strong></td><td class="crd-td">1600AD</td><td class="crd-td">108k</td><td class="crd-td">99,4k-116,6k</td></tr>
<tr><td class="crd-td"><strong>Georgia Savannah-Ocmulgee</strong></td><td class="crd-td">1600AD</td><td class="crd-td">84k</td><td class="crd-td">77,3k-90,7k</td></tr>
<tr><td class="crd-td"><strong>Alabama-Tombigbee</strong></td><td class="crd-td">1600AD</td><td class="crd-td">76k</td><td class="crd-td">69,9k-82,1k</td></tr>
<tr><td class="crd-td"><strong>Florida-Apalachicola</strong></td><td class="crd-td">1600AD</td><td class="crd-td">68k</td><td class="crd-td">62,6k-73,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional population shifts across Southeast (HU 03) at 1200 AD, 1500 AD and 1600 AD.</figcaption>
</figure>

# Limitations

Coastal shell-midden radiocarbon dates excluded from Kelly et al. [@kelly2025] due to variable marine reservoir offsets may under-represent late precontact estuarine growth in South Florida and the Georgia Sea Islands [@milanich1995]. Early sixteenth-century Spanish chroniclers visited major political seats selectively, leaving interior Piedmont and Pine Barrens hamlet densities interpolated through `sites_p3k14c_na` catchment covariates [@milner2010; @jones2014].

# Sources

<div id="refs"></div>
