---
title: "Rio Grande Hydrological Unit (HU 13)"
subtitle: "CENTAUR-II: Rio Grande Pueblos, Jornada Mogollon and Rio Conchos Borderlands, -10000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: rio_grande_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_rio_grande_spatial.png"
hero_caption: "Sub-regional areal masks and ten verified settlements across the Rio Grande Hydrological Unit (346,71k km²), from the San Luis Valley and Upper Pueblos to the Lower Rio Grande."
hero_label: "fig:hero-rio-grande"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the pre-Columbian and early contact population of the Rio Grande Hydrological Unit (USGS HU 13) across `346.710 km²` (`4.785` five-arcminute cells) from `10000 BC` (`-10000 AD`) to `1600 AD`. Combining Kelly et al. [@kelly2025] radiocarbon summed probability distributions (`N = 2.934`, median peak `1112 AD`) with dendrochronological records [@robinson2020], Pueblo room-block surveys [@adler1996; @ortman2012] and early Spanish entrada counts [@liebmann2016], the unit is partitioned into three demographic sub-regions. Basin-wide population rises from `800` (`736-864`) in `10000 BC` to `68,0k` (`62,6k-73,4k`) at `0 AD` and peaks at `155,5k` (`143,1k-167,9k`) around `1100 AD`, driven by Mimbres, Jornada Mogollon and Chacoan-outlier growth [@lekson2006; @anyon2017; @miller2023]. Aggregate numbers ease to `140,0k` (`128,8k-151,2k`) in `1400-1500 AD` as southern plains and Jornada foraging bands contract while the Northern Rio Grande absorbs migrants from the Four Corners [@ortman2012], reaching a sub-regional peak of `64,0k` (`58,9k-69,1k`) at `1500 AD`. Following Spanish contact after `1540 AD`, epidemic disease and conflict reduce total HU 13 population to `117,0k` in `1550 AD` and `96,0k` (`88,3k-103,7k`) by `1600 AD` [@liebmann2016; @ubelaker2006].

# Background

The Rio Grande drainage spans one of the sharpest ecological and demographic gradients in Indigenous North America, running from alpine snowmelt headwaters in the San Luis Valley of Colorado across the Piro-Salinas and Jornada basins of New Mexico into the arid Tamaulipan plains of the Lower Rio Grande [@cordell2012]. Earlier continental grids [@mcevedy1978; @ubelaker2006] grouped these valleys inside broad Southwestern averages, obscuring an internal north-south reversal between `1100 AD` and `1500 AD`.

Across `2.934` cleaned radiocarbon dates in HU 13, Kelly et al. [@kelly2025] identify a basin-wide median summed probability peak at `1112 AD` (changing little from `1098 AD` when Texas dates are excluded). That twelfth-century maximum reflects early intensification across the Mimbres valley, Jornada Mogollon settlements and Chacoan outliers along the western margin [@lekson2006; @anyon2017; @miller2023]. Yet tree-ring chronologies and site room counts show that the Upper and Northern Rio Grande moved in the opposite direction after `1275 AD`, absorbing large Pueblo III and Pueblo IV migrations out of the Colorado Plateau before facing Spanish entradas in `1540 AD` [@ortman2012; @robinson2020; @liebmann2016].

# Methodology

## Radiocarbon Kriging and Sub-Regional Partitioning

Continental habitation priors at five-arcminute resolution (`4320x2160` WGS84) derive from `sites_p3k14c_na` (`p3k14c` [@bird2022p3k14c] and `c14bazAAR`), calibrated across ten Holocene horizons using non-stationary Matérn ($\nu = 3/2$) residual kriging [@kelly2022; @crema2021]. To prevent edge distortion along the Rio Conchos, Sonora and Chihuahua margins, `171` cross-frontier buffer catchments condition Northern Mexico up to `300 km` beyond the U.S. boundary alongside `1.359` domestic catchments.

Within HU 13, `4.785` active land pixels (`346.710 km²`) are divided into three colour-indexed masks in `rio_grande_areal_mask.png`:

1. **San Luis Valley and Upper Pueblos** (`rg_san_luis_upper_pueblos`, `63.140 km²`, `907` pixels): San Luis headwaters, Chama, Taos, Santa Fe, Galisteo and upper Pecos valleys.
2. **Middle Rio Grande, Piro-Salinas and Jornada Mogollon** (`rg_middle_rio_grande_salinas`, `187.730 km²`, `2.595` pixels): Acoma-Zuni borderlands, Socorro Piro towns, Salinas Tompiro pueblos, Mimbres and the El Paso Jornada basin.
3. **Pecos Valley, Big Bend and Lower Rio Grande** (`rg_pecos_big_bend_lower_rg`, `95.840 km²`, `1.283` pixels): Middle-lower Pecos, La Junta de los Rios and Tamaulipan plains.

## Household Calibration and Uncertainty Bounds

Benchmark totals at `23` horizons (`-10000` to `1600 AD`) combine room-block floor area estimates (`4-5` persons per occupied ground-floor room after adjusting for multi-storey clustering and seasonal mobility) with hunter-gatherer carrying capacities in the Pecos and Big Bend arid zones [@adler1996; @cordell2012; @miller2023]. Uncertainty intervals are specified symmetrically at `±8,0%` around each sub-regional series to capture room-occupancy duration and radiocarbon calibration error [@robinson2020]. `ViscountSubstrataMosaic` reconciles rural priors with the `10` verified settlements in `rio_grande_settlements.json` before applying two passes of a `5`-pixel separable filter inside valid land cells.

# Testing and Validation

All regional gates passed with `0` errors at `GMT+0` prior to manuscript generation:

1. **Kriging Diagnostics**: Across the `10` North American horizons in `sites_p3k14c_na`, `tau1 = 1,25`, `nugget_to_sill` ranges from `0,04` to `0,22` and pseudo-$R^2$ spans `0,9733` to `0,9992`.
2. **Gazetteer Exhaustiveness**: `rio_grande_settlements.json` (`10` included settlements) and `rio_grande_source_ledger.json5` (`3` excluded candidates) reconcile with `0` unaccounted entries and `0` schema faults.
3. **Benchmark Arithmetic**: Sub-regional sums match `headline_population_by_benchmark` across all `23` horizons from `10000 BC` (`800`) to `1600 AD` (`96,0k`).

<figure class="crd-table-figure" id="tab:rg-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">10000BC</td><td class="crd-td">800</td><td class="crd-td">736-864</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">5000BC</td><td class="crd-td">12,7k</td><td class="crd-td">11,7k-13,7k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">2000BC</td><td class="crd-td">36,8k</td><td class="crd-td">33,9k-39,7k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">0AD</td><td class="crd-td">68k</td><td class="crd-td">62,6k-73,4k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">600AD</td><td class="crd-td">114k</td><td class="crd-td">104,9k-123,1k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1000AD</td><td class="crd-td">146k</td><td class="crd-td">134,3k-157,7k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1100AD</td><td class="crd-td">155,5k</td><td class="crd-td">143,1k-167,9k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1200AD</td><td class="crd-td">150k</td><td class="crd-td">138k-162k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1300AD</td><td class="crd-td">142k</td><td class="crd-td">130,6k-153,4k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1400AD</td><td class="crd-td">140k</td><td class="crd-td">128,8k-151,2k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1500AD</td><td class="crd-td">140k</td><td class="crd-td">128,8k-151,2k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1550AD</td><td class="crd-td">117k</td><td class="crd-td">107,6k-126,4k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1600AD</td><td class="crd-td">96k</td><td class="crd-td">88,3k-103,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Benchmark population estimates and uncertainty bounds for Rio Grande (HU 13), 10000 BC to 1600 AD.</figcaption>
</figure>

# Results

## Long-Run Trajectory and Twelfth-Century Peak

Between `10000 BC` and `1000 BC`, Palaeoindian and Archaic bands expanded gradually from `800` (`736-864`) to `50,0k` (`46,0k-54,0k`), tracking riparian oasis use along the Rio Grande trench and Balcones-Pecos springs [@cordell2012; @miller2023]. Adoption of maize-beans-squash agriculture and pithouse sedentism lifted totals from `68,0k` (`62,6k-73,4k`) at `0 AD` to `114,0k` (`104,9k-123,1k`) at `600 AD` and `146,0k` (`134,3k-157,7k`) at `1000 AD`. The basin peak of `155,5k` (`143,1k-167,9k`) at `1100 AD` aligns closely with Kelly et al. [@kelly2025] radiocarbon peak at `1112 AD`, reflecting simultaneous florescence in Chacoan outliers (`Pueblo Bonito`, `3,2k`), Mimbres towns (`Galaz Ruin`, `850`) and early Jornada pit-villages [@lekson2006; @anyon2017].

<figure class="crd-figure-block" id="fig:rg-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-rio-grande/fig2_rio_grande_trajectory.png" alt="fig:rg-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and sub-regional population trajectories for Rio Grande (HU 13) from 10000 BC to 1600 AD with uncertainty envelope.</figcaption>
</figure>

## Northern Pueblo Coalescence versus Southern Contraction

After `1100 AD`, the three sub-regions diverged sharply in timing and direction. Both the Middle Rio Grande-Jornada (`76,0k` peak at `1100 AD`) and Pecos-Big Bend (`36,5k` peak at `1100 AD`) contracted through `1200-1400 AD` as Classic Mimbres dispersed (`1130-1150 AD`) and late thirteenth-century megadroughts thinned upland Jornada settlements [@anyon2017; @miller2023]. Conversely, the San Luis Valley and Upper Pueblos grew from `43,0k` in `1100 AD` to `58,0k` in `1300 AD` and peaked at `64,0k` (`58,9k-69,1k`) in `1500 AD`, absorbing Mesa Verde and San Juan migrants who founded large multi-storey adobe and masonry plazas across Tewa, Tiwa, Towa and Keres territories [@ortman2012; @adler1996].

<figure class="crd-figure-block" id="fig:rg-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-rio-grande/fig3_rio_grande_shares.png" alt="fig:rg-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across the three areal divisions of Rio Grande (HU 13) from 10000 BC to 1600 AD.</figcaption>
</figure>

By `1500 AD`, Upper Pueblos accounted for `45,7%` of the basin total (`64,0k` of `140,0k`), up from `27,7%` in `1100 AD`, while Middle Rio Grande-Salinas stood at `52,0k` (`37,1%`) and Pecos-Big Bend at `24,0k` (`17,1%`), including farming towns at La Junta de los Rios [@kelley1986]. Coronado's `1540-1542 AD` expedition and subsequent Oñate colonisation in `1598 AD` triggered acute mortality from Old World pathogens, forced requisitions and Athabascan-Plains raiding [@phillips2018; @doering2020; @liebmann2016]. Basin numbers dropped `16,4%` between `1500 AD` and `1550 AD` (`117,0k`) and fell further to `96,0k` (`88,3k-103,7k`) by `1600 AD`.

<figure class="crd-table-figure" id="tab:rg-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>San Luis and Upper Pueblos</strong></td><td class="crd-td">1100AD</td><td class="crd-td">43k</td><td class="crd-td">39,6k-46,4k</td></tr>
<tr><td class="crd-td"><strong>Middle Rio Grande and Salinas</strong></td><td class="crd-td">1100AD</td><td class="crd-td">76k</td><td class="crd-td">69,9k-82,1k</td></tr>
<tr><td class="crd-td"><strong>Pecos, Big Bend and Lower RG</strong></td><td class="crd-td">1100AD</td><td class="crd-td">36,5k</td><td class="crd-td">33,6k-39,4k</td></tr>
<tr><td class="crd-td"><strong>San Luis and Upper Pueblos</strong></td><td class="crd-td">1500AD</td><td class="crd-td">64k</td><td class="crd-td">58,9k-69,1k</td></tr>
<tr><td class="crd-td"><strong>Middle Rio Grande and Salinas</strong></td><td class="crd-td">1500AD</td><td class="crd-td">52k</td><td class="crd-td">47,8k-56,2k</td></tr>
<tr><td class="crd-td"><strong>Pecos, Big Bend and Lower RG</strong></td><td class="crd-td">1500AD</td><td class="crd-td">24k</td><td class="crd-td">22,1k-25,9k</td></tr>
<tr><td class="crd-td"><strong>San Luis and Upper Pueblos</strong></td><td class="crd-td">1600AD</td><td class="crd-td">42k</td><td class="crd-td">38,6k-45,4k</td></tr>
<tr><td class="crd-td"><strong>Middle Rio Grande and Salinas</strong></td><td class="crd-td">1600AD</td><td class="crd-td">36k</td><td class="crd-td">33,1k-38,9k</td></tr>
<tr><td class="crd-td"><strong>Pecos, Big Bend and Lower RG</strong></td><td class="crd-td">1600AD</td><td class="crd-td">18k</td><td class="crd-td">16,6k-19,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional population shifts across Rio Grande (HU 13) at 1100 AD, 1500 AD and 1600 AD.</figcaption>
</figure>

# Limitations

Three methodological limits qualify these series. First, arid-zone legacy wood-charcoal radiocarbon dates in the Southwest can exhibit old-wood offsets of `100-400` years compared with short-lived *Zea mays* and tree-ring dates [@robinson2020; @kelly2025]. Second, mobile Apachean and Jumano-Cibolo groups entering the Pecos and Big Bend plains after `1350-1500 AD` leave sparse architectural footprints relative to sedentary pueblos [@doering2020; @kelley1986]. Third, Mexican-side archival coverage along the lower Rio Conchos and Coahuila remains thinner than New Mexico CRM survey inventories, raising spatial variance across southern buffer cells.

# Sources

<div id="refs"></div>
