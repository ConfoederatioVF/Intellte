---
title: "Rio Grande Hydrological Unit (HU 13)"
subtitle: "CENTAUR-II: Rio Grande Pueblos, Jornada Mogollon and Rio Conchos Borderlands, 10000BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: rio_grande_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_rio_grande_spatial.png"
hero_caption: "Sub-regional areal masks and 261 catalogued settlements across the Rio Grande Hydrological Unit (346,71k km²), from the San Luis Valley and Upper Pueblos to the Lower Rio Grande."
hero_label: "fig:hero-rio-grande"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the pre-Columbian and early contact population of the Rio Grande Hydrological Unit (USGS HU 13) across `346.710 km²` (`4.785` five-arcminute cells) from `10000BC` to `1600AD`.
Combining Kelly et al. [@kelly2025] radiocarbon summed probability distributions (`N = 2.934`, median peak `1112AD`) with dendrochronological series [@robinson2020], Pueblo room-block surveys [@adler1996; @ortman2012], early Spanish entrada counts [@liebmann2016] and continental non-stationary Matérn ($\nu = 3/2$) kriging across `93.358` unique site-periods (`4.457` domestic catchments, `14,12x` baseline density; $\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04`, $R^2 = 0,999$), the watershed is partitioned into three ecological sub-regions.

Basin-wide population rises from `800` (`736-864`) in `10000BC` to `68k` (`62,6k-73,4k`) at `0AD` and reaches a basin maximum of `155,5k` (`143,1k-167,9k`) around `1100AD`, driven by Mimbres, Jornada Mogollon and eastern Chacoan-outlier growth [@lekson2006; @anyon2017; @miller2023].
Aggregate numbers ease gently to `140k` (`128,8k-151,2k`) across `1400AD-1500AD` as southern Jornada and Pecos-Big Bend communities contract while the Northern Rio Grande absorbs large Pueblo III-IV migrations from the Four Corners [@ortman2012], peaking at `64k` (`58,9k-69,1k`) in `1500AD`.
Following Spanish contact after `1540AD`, epidemic disease, forced provisioning and Plains raiding reduce total HU 13 population to `117k` in `1550AD` and `96k` (`88,3k-103,7k`) by `1600AD` [@liebmann2016; @ubelaker2006; @phillips2018].
Reconciliation confirms `261` included settlements and `10` excluded duplicate-alias entries across `271` evaluated candidates.

# Background

## Drainage Geography and Hydrological Niche Gradients

The Rio Grande drainage spans one of the sharpest ecological and demographic gradients in Indigenous North America.
Originating in alpine snowpack along the San Juan and Sangre de Cristo ranges above the San Luis Valley of southern Colorado, the river cuts southward through volcanic gorges into the Espanola, Albuquerque and Socorro basins of New Mexico before traversing the Chihuahuan Desert past El Paso and the Rio Conchos junction to the Tamaulipan coastal plain [@cordell2012].
Precipitation decreases sharply from north to south and from mountain crests to valley floors, turning perennial snowmelt rivers, spring-fed playas and floodwater arroyos into narrow linear oases separated by arid creosote and mesquite basins [@miller2023].

In the northern valleys above Albuquerque (`1.600-2.300 m` elevation), reliable spring runoff fed ditch-irrigated maize, beans and squash along river terraces flanked by ponderosa and piñon-juniper foothills [@ortman2012; @adler1996].
Further south, across the Piro-Salinas basins, Jornada del Muerto, Mimbres mountains and Tularosa trench, farming depended on monsoon summer storms, alluvial fan runoff and mountain-front check dams highly sensitive to multi-decadal drought [@anyon2017; @miller2023].
Along the Pecos River, Big Bend canyons and lower Tamaulipan plains, arid limestone plateaus restricted sedentary agriculture to rare confluences such as La Junta de los Rios while supporting wide-ranging hunter-foragers and later bison-hunting bands [@kelley1986; @doering2020].

## Historiography and the North-South Demographic Reversal

Human occupation across HU 13 began in the Late Pleistocene and Early Holocene as Clovis and Folsom hunters pursued bison and camelids along pluvial lake playas in the Estancia, Tularosa and San Luis basins and occupied deep canyons along the lower Pecos [@cordell2012; @miller2023].
During the Middle and Late Archaic, rising aridity concentrated foraging groups around mountain springs and perennial desert canyon rockshelters, where early maize cultivation appeared after `2000BC` [@cordell2012].
By `0AD-400AD`, pithouse villages expanded along alluvial floodplains from Socorro to Taos.

Earlier continental summaries compressed the Rio Grande inside broad Southwestern averages, obscuring a striking internal reversal between `1100AD` and `1500AD` [@ubelaker2006; @cordell2012].
Across `2.934` cleaned radiocarbon dates in HU 13, Kelly et al. [@kelly2025] identify a basin-wide median summed probability peak at `1112AD` (shifting modestly to `1098AD` when Texas dates are excluded).
That twelfth-century maximum reflects rapid early growth in the Middle Rio Grande, Classic Mimbres valley, Jornada Mogollon settlements and eastern Chacoan outliers [@lekson2006; @anyon2017; @miller2023].

Yet dendrochronological cutting-date curves and Pueblo IV architectural surveys prove that the Upper and Northern Rio Grande moved in the opposite direction after `1275AD` [@robinson2020; @ortman2012].
As Great Drought conditions and regional political crises depopulated the Four Corners and San Juan Basin, migrating Tewa, Tiwa, Towa and Keres households swelled northern Rio Grande valleys into sprawling multi-plaza adobe and masonry towns [@adler1996; @ortman2012; @spielmann2016early].
When Coronado's `1540-1542AD` expedition entered the province, the centre of population had shifted decisively north of Socorro, setting the stage for acute sixteenth-century epidemiological contraction after Spanish colonisation in `1598AD` [@phillips2018; @liebmann2016].
Early Spanish Franciscan and colonial tallies confirm steep village contraction between `1540AD` and `1600AD`, leaving abandoned plazas that allowed montane pine regeneration across formerly cleared Jemez and Pecos slopes [@liebmann2016; @ubelaker2006].

# Methodology

## Radiocarbon Kriging and Sub-Regional Partitioning

Continental habitation priors at five-arcminute resolution (`4320 x 2160` WGS84; `481.752` active land cells covering `18.330.735 km²`) derive from the Northern America multi-registry kriging domain (`sites_northern_america`).
The composite integrates `p3k14c` [@bird2022p3k14c] and `c14bazAAR` with Kelly and Robinson's lower-48 radiocarbon archive [@kelly2022], Southwest Social Networks (`SWSN`), Village Ecodynamics Project (`VEP II`) surveys, Texas trinomial records and regional site files [@crema2021; @morrison2021mapping].
Deduplication by Voronoi catchment and `200`-year bin preserves `93.358` unique site-periods across `4.457` domestic catchments (`2.678` active inhabited catchments, `60,09%` coverage; median catchment radius `27,36 km`, 90th percentile `59,92 km`), achieving `14,12x` the observation density of the `c14bazAAR` baseline alone.

To prevent boundary artefacts along the Sonora, Chihuahua and Coahuila borders south of the Rio Grande, `259` cross-frontier buffer catchments condition northern Mexico and neighbouring watersheds up to `300 km` beyond the domain margin.
Site counts undergo Freeman-Tukey variance stabilisation and Empirical Bayes smoothing prior to Weighted Least Squares regression on five biophysical covariates (habitat mask, natural productivity, ecological suitability, exponential `13,5 km` fluvial proximity and coastal distance) and 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across ten Holocene horizons.
Comparable multi-regional spatial point-pattern applications in arid East African funerary landscapes [@costanzo2021creating] and Bronze Age settlement networks [@molloy2023resilience] illustrate how catchment geometry and fluvial buffering prevent survey clustering from distorting rural density surfaces.

Within HU 13, `4.785` active land pixels (`346.710 km²`) map onto three colour-indexed sub-regional masks in `rio_grande_areal_mask.png` (Table \ref{tab:rg-masks}):

1. **San Luis Valley and Northern Tiwa, Tewa and Chama Pueblos** (`63.140 km²`, `18,2%` of area, `907` pixels, `35,12-38,46 N`, `104,62-108,29 W`): covers the San Luis headwaters, Taos, Picuris, Chama, Santa Fe, Galisteo and Upper Pecos corridors (`139` catalogued settlements).
2. **Middle Rio Grande, Piro-Salinas and Jornada Mogollon** (`187.730 km²`, `54,1%` of area, `2.595` pixels, `31,21-35,04 N`, `101,71-108,71 W`): covers the Acoma-Cebolleta borderlands, Albuquerque-Belen trench, Socorro Piro towns, Salinas Tompiro pueblos, Mimbres valley and El Paso Jornada basin (`118` catalogued settlements).
3. **Pecos Valley, Big Bend and Lower Rio Grande** (`95.840 km²`, `27,6%` of area, `1.283` pixels, `25,88-31,12 N`, `97,29-105,62 W`): encompasses the middle-lower Pecos, Lower Pecos canyonlands, La Junta de los Rios and Tamaulipan coastal plains (`4` catalogued settlements).

## Household Calibration, Scalar Stress and Uncertainty Bounds

Benchmark totals across `23` horizons (`10000BC` to `1600AD`) integrate room-block floor area series, tree-ring construction curves [@robinson2020] and carrying-capacity models [@mccool2018soil; @miller2023].
Pueblo room counts are converted to momentary population using `0,65-0,80` synchronous room-occupancy fractions and `4,5` persons per ground-floor household suite after adjusting for multi-storey clustering and seasonal field-house movement [@adler1996; @cordell2012].
Where single-room storage suites and ceremonial kivas inflate raw room counts, unadjusted wall ratios are scaled down to residential hearths before summing town totals.
Logistic modelling of scalar stress across nucleated prehistoric settlements [@alberti2014modeling] and household-inequality comparisons at large agglutinated villages [@twiss2024some] constrain realistic plaza-town population ceilings around `1.500-2.200` residents per multi-roomblock complex.

Before scaling rural pixels inside `ViscountSubstrataMosaic`, active populations of all `261` catalogued settlements in `rio_grande_settlements.json` are deducted from their respective sub-regional totals.
Two passes of a `5`-pixel separable log-multiplier seam filter then smooth pixel-scale transitions across the Upper Colorado, Arizona and Southern Plains watershed boundaries without altering sub-regional totals.
Uncertainty bounds (`population_bounds`) apply a symmetric `+/- 8,0%` envelope around each sub-regional anchor to capture variation in room-use longevity, old-wood radiocarbon offsets and mobile hunter-forager density along the Pecos-Big Bend desert [@robinson2020; @kelly2025].
All pipeline diagnostics and timestamps conform to `GMT+0`.

<figure class="crd-table-figure" id="tab:rg-masks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Cells</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Peak (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>San Luis Valley &amp; Northern Tiwa/Tewa-Chama Pueblos (Taos-Santa Fe)</strong></td><td class="crd-td">907</td><td class="crd-td">63.140</td><td class="crd-td">139</td><td class="crd-td">1500AD (64k)</td></tr>
<tr><td class="crd-td"><strong>Middle Rio Grande, Piro-Salinas &amp; Jornada Mogollon (Socorro-El Paso)</strong></td><td class="crd-td">2.595</td><td class="crd-td">187.730</td><td class="crd-td">118</td><td class="crd-td">1100AD (76k)</td></tr>
<tr><td class="crd-td"><strong>Pecos Valley, Big Bend &amp; Lower Rio Grande Tamaulipan Plains</strong></td><td class="crd-td">1.283</td><td class="crd-td">95.840</td><td class="crd-td">4</td><td class="crd-td">1100AD (36,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, 5-arcminute cell counts, land areas, catalogued sites and peak dates in Rio Grande HU 13.</figcaption>
</figure>

# Testing and Validation

Four independent checks test spatial calibration, chronological correspondence and ledger reconciliation across HU 13 at `GMT+0`:

First, across all ten Holocene horizons of the Northern America kriging domain (`93.358` unique site-periods aggregated over `4.457` domestic catchments and `2.678` active catchments, `14,12x` baseline density), dimensionless short-range correlation stands at $\tau_1 = 1,41$ (`1,4144`, well below the `1,80` limit).
That decay corresponds to an effective short range of `38,7 km` and a secondary range of $\tau_2 = 2,62$.
Raw nugget-to-sill equals `0,000`, regularised nugget-to-sill equals `0,04` (`0,040`, well under `0,45`) and Weighted Least Squares covariate fits reach $R^2 = 0,999$ (`0,9991` to `0,9993`) across all ten periods (Table \ref{tab:rg-kriging}).

Second, the reconstructed HU 13 peak of `155,5k` in `1100AD` falls within twelve years of the Kelly et al. [@kelly2025] HU 13 median radiocarbon peak of `1112AD` (`1098AD` excluding Texas).
Tree-ring cutting-date series independently confirm the post-`1275AD` expansion in the Upper Rio Grande against contraction in southern Mimbres and Jornada uplands [@robinson2020; @spielmann2016early].

Third, ledger reconciliation confirms exact parity between `rio_grande_settlements.json` (`261` included settlements: `139` in Upper Pueblos, `118` in Middle Rio Grande-Salinas and `4` in Pecos-Big Bend-Lower Rio Grande) and `rio_grande_source_ledger.json5` (`10` excluded duplicate-alias consolidations totalling `271` candidates with `0` unaccounted entries).

Fourth, benchmark arithmetic matches `headline_population_by_benchmark` across all `23` horizons from `10000BC` (`800`) to `1600AD` (`96k`).
Synchronously active catalogued settlements rise from `7,38k` in `1100AD` and `23,2k` in `1400AD` to `43,09k` in `1540AD` and `43,37k` (`45,2%` of total basin population) in `1600AD`, reflecting heavy late precontact Pueblo nucleation along the Rio Grande valley.

<figure class="crd-table-figure" id="tab:rg-kriging">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Tau 1</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget/Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,006</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0117</td></tr>
<tr><td class="crd-td"><strong>Late Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0199</td></tr>
<tr><td class="crd-td"><strong>Early Woodland and Formative</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0183</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0254</td></tr>
<tr><td class="crd-td"><strong>Late Woodland</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0332</td></tr>
<tr><td class="crd-td"><strong>Pueblo II Horizon</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0468</td></tr>
<tr><td class="crd-td"><strong>Pueblo III Horizon</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0558</td></tr>
<tr><td class="crd-td"><strong>Pueblo IV Horizon</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0465</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0345</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Continental Northern America Matérn kriging parameters across ten Holocene horizons (93.358 unique site-periods, 4.457 domestic catchments).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:rg-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th><th class="crd-th">Density / 100 km²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">10000BC</td><td class="crd-td">800</td><td class="crd-td">736-864</td><td class="crd-td">0,23</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">5000BC</td><td class="crd-td">12,7k</td><td class="crd-td">11,7k-13,7k</td><td class="crd-td">3,66</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">2000BC</td><td class="crd-td">36,8k</td><td class="crd-td">33,9k-39,7k</td><td class="crd-td">10,61</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">0AD</td><td class="crd-td">68k</td><td class="crd-td">62,6k-73,4k</td><td class="crd-td">19,61</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">600AD</td><td class="crd-td">114k</td><td class="crd-td">104,9k-123,1k</td><td class="crd-td">32,88</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1000AD</td><td class="crd-td">146k</td><td class="crd-td">134,3k-157,7k</td><td class="crd-td">42,11</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1100AD</td><td class="crd-td">155,5k</td><td class="crd-td">143,1k-167,9k</td><td class="crd-td">44,85</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1200AD</td><td class="crd-td">150k</td><td class="crd-td">138k-162k</td><td class="crd-td">43,26</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1300AD</td><td class="crd-td">142k</td><td class="crd-td">130,6k-153,4k</td><td class="crd-td">40,96</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1400AD</td><td class="crd-td">140k</td><td class="crd-td">128,8k-151,2k</td><td class="crd-td">40,38</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1500AD</td><td class="crd-td">140k</td><td class="crd-td">128,8k-151,2k</td><td class="crd-td">40,38</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1550AD</td><td class="crd-td">117k</td><td class="crd-td">107,6k-126,4k</td><td class="crd-td">33,75</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">1600AD</td><td class="crd-td">96k</td><td class="crd-td">88,3k-103,7k</td><td class="crd-td">27,69</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Benchmark population estimates, 8% uncertainty bounds and density per 100 km² for Rio Grande (HU 13), 10000BC to 1600AD.</figcaption>
</figure>

# Results

## Long-Run Trajectory and Twelfth-Century Peak

Between `10000BC` and `1000BC`, Palaeoindian and Archaic bands expanded gradually from `800` (`736-864`; `0,23` persons per `100 km²`) to `12,7k` in `5000BC`, `36,8k` in `2000BC` and `50k` (`46k-54k`) at `1000BC` (Table \ref{tab:rg-benchmarks} and Figure \ref{fig:rg-trajectory}).
Early occupation clustered around perennial valley springs, dry caves and Lower Pecos canyon shelters including `Bonfire Shelter` (`9800BC-900AD`), `Arenosa Shelter` (`8800BC-1300AD`) and `Hinds Cave` (`8200BC-800AD`), alongside mountain-margin caves such as `Bat Cave` and `Sandal Cave` (`2000BC`) where early maize cobs appear [@cordell2012; @miller2023].

Adoption of maize-beans-squash cultivation and pithouse sedentism lifted basin totals from `68k` (`62,6k-73,4k`; `19,61` per `100 km²`) at `0AD` to `114k` (`104,9k-123,1k`) at `600AD` and `146k` (`134,3k-157,7k`) at `1000AD`.
The basin peak of `155,5k` (`143,1k-167,9k`; `44,85` per `100 km²`) at `1100AD` aligns closely with Kelly et al. [@kelly2025] radiocarbon peak at `1112AD`.
Growth in the eleventh century reflected simultaneous florescence across Mimbres towns (`Galaz` `1,06k` at `922AD`; `Galaz Ruin` `850` at `1100AD`), early Jornada pithouse villages, Salinas valley communities (`Gran Quivira` early phase; `Henderson`) and eastern Chacoan outliers (`Guadalupe` `1,06k`) [@lekson2006; @anyon2017; @miller2023].

<figure class="crd-figure-block" id="fig:rg-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-rio-grande/fig2_rio_grande_trajectory.png" alt="fig:rg-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and sub-regional population trajectories for Rio Grande (HU 13) from 10000BC to 1600AD with uncertainty envelope.</figcaption>
</figure>

## Northern Pueblo Coalescence versus Southern Contraction

After `1100AD`, the three sub-regions diverged sharply in timing and direction (Figure \ref{fig:rg-shares} and Table \ref{tab:rg-subregions}).
Both the Middle Rio Grande-Jornada (`76k` peak at `1100AD`) and Pecos-Big Bend (`36,5k` peak at `1100AD`) contracted through `1200AD-1400AD` as Classic Mimbres dispersed around `1130-1150AD` and late thirteenth-century megadroughts thinned upland Jornada settlements [@anyon2017; @miller2023].
Conversely, the San Luis Valley and Upper Pueblos grew from `43k` in `1100AD` to `58k` in `1300AD`, `62k` in `1400AD` and a sub-regional zenith of `64k` (`58,9k-69,1k`) in `1500AD`.
Early warning indicators in pottery networks and plaza layouts document rapid social aggregation as Mesa Verde and San Juan migrants joined local Tewa, Tiwa, Towa and Keres populations to build multi-storey adobe and masonry plaza towns [@ortman2012; @adler1996; @spielmann2016early].

<figure class="crd-figure-block" id="fig:rg-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-rio-grande/fig3_rio_grande_shares.png" alt="fig:rg-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across the three areal divisions of Rio Grande (HU 13) from 10000BC to 1600AD.</figcaption>
</figure>

By `1500AD`, Upper Pueblos accounted for `45,7%` of the basin total (`64k` of `140k`), up from `27,7%` in `1100AD`, while Middle Rio Grande-Salinas stood at `52k` (`37,1%`) and Pecos-Big Bend at `24k` (`17,1%`), including farming towns at `La Junta de los Rios` (`650`) [@kelley1986].
Coronado's `1540-1542AD` expedition and subsequent Oñate colonisation in `1598AD` triggered acute mortality from Old World pathogens, forced requisitions and Athabascan-Plains raiding [@phillips2018; @doering2020; @liebmann2016].
Basin numbers dropped `16,4%` between `1500AD` and `1550AD` (`117k`) and fell further to `96k` (`88,3k-103,7k`; `27,69` per `100 km²`) by `1600AD`, matching dendrochronological reforestation pulses recorded after Pueblo depopulation [@liebmann2016; @ubelaker2006].

### San Luis Valley and Northern Pueblos

Covering `63.140 km²` (`18,2%` of HU 13), the Upper Pueblos sub-region carried `200` inhabitants in `10000BC`, `3,2k` in `5000BC`, `17,5k` at `0AD` and `40k` in `1000AD`.
Early Developmental pithouse clusters along the Taos, Chama and Santa Fe valleys relied on dryland terrace farming supplemented by deer, rabbit and piñon-nut gathering [@cordell2012].
Rather than declining after `1100AD` (`43k`), population rose steadily to `49k` in `1200AD`, `58k` in `1300AD` and `64k` in `1500AD`.
By `1500AD`, density reached `101,36` persons per `100 km²`, nearly quadruple the basin average.

Between `1275AD` and `1450AD`, migrating Mesa Verde and San Juan groups coalesced with local communities into walled multi-storey adobe and masonry plaza towns [@ortman2012; @adler1996].
Excavated room blocks show steep demographic growth at `Pecos Pueblo` (`2,2k` at `1540AD`), `Sapawe` (`2,1k` at `1450AD`), `Taos Pueblo` (`1,8k` at `1500AD`) and `Posi-ouinge` (`1,65k` at `1480AD`).
Other major northern centres included `Picuris Pueblo` (`1,6k`), `San Marcos` (`1,55k`), `Kuaua` (`1,45k`), `San Cristobal` (`1,45k`), `Zia Pueblo` (`1,4k`), `Ohkay Owingeh` (`1,35k`) and `Santo Domingo Pueblo` (`1,35k`) [@alberti2014modeling; @spielmann2016early].
In the mid-sixteenth century, smallpox, measles and tribute demands following Coronado's occupation of the Tiguex province reduced the northern valleys to `52k` in `1550AD` and `42k` (`43,8%` of HU 13) in `1600AD` [@phillips2018; @liebmann2016].

### Middle Rio Grande, Piro-Salinas and Jornada Mogollon

Spanning `187.730 km²` (`54,1%` of HU 13), this central basin expanded from `350` people in `10000BC` to `5,6k` in `5000BC`, `32k` at `0AD` and its peak of `76k` in `1100AD` (`48,9%` of HU 13).
Classic Mimbres irrigated river villages (`Galaz` `1,06k` at `922AD`; `Galaz Ruin` `850` at `1100AD`), Jornada pithouse hamlets and eastern Chacoan outliers drove eleventh-century growth [@anyon2017; @lekson2006; @miller2023].
Following Mimbres dissolution around `1130-1150AD` and El Paso-phase Jornada drought contraction, numbers fell to `68k` in `1200AD` and `56k` in `1300AD`.

During the Pueblo IV period, surviving populations concentrated along defensive mesa-tops and eastern limestone plateaus, maintaining `53k` in `1400AD` and `52k` in `1500AD`.
Principal centres included `Acoma Pueblo` (`1,65k` at `1500AD`), Salinas Tompiro stronghold `Gran Quivira` (`1,5k` at `1540AD`), southern Tiwa `Isleta Pueblo` (`1,45k`) and Albuquerque-basin `Piedras Marcadas` (`1,15k`) [@adler1996; @cordell2012].
Spanish colonial pressure and seventeenth-century frontier raids subsequently lowered the sub-regional total to `44k` in `1550AD` and `36k` (`37,5%` of HU 13) in `1600AD`.

### Pecos Valley, Big Bend and Lower Rio Grande

Across `95.840 km²` (`27,6%` of HU 13), arid limestone basins and riverine deserts supported `250` people in `10000BC`, `3,9k` in `5000BC`, `18,5k` at `0AD` and a peak of `36,5k` in `1100AD` (`23,5%` of HU 13).
Multi-millennial rockshelters along the lower Pecos and Devils River canyons - including `Bonfire Shelter` (`9800BC-900AD`), `Arenosa Shelter` (`8800BC-1300AD`) and `Hinds Cave` (`8200BC-800AD`) - preserve continuous desert-foraging and bison-drive sequences [@miller2023].
As effective moisture fell across the Pecos and Trans-Pecos steppes after `1200AD`, numbers eased to `33k` in `1200AD`, `28k` in `1300AD` and `24k` in `1500AD`.
Sedentary river farming concentrated at `La Junta de los Rios` (`650` at `1500AD`) at the Conchos confluence, surrounded by Jumano and Plains Apache mobile bison-hunting bands [@kelley1986; @doering2020].
By `1600AD`, population stood at `18k` (`18,8%` of HU 13).

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
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population shifts across Rio Grande (HU 13) at 1100AD, 1500AD and 1600AD.</figcaption>
</figure>

# Limitations

Four methodological constraints qualify these series.
First, arid-zone legacy wood-charcoal radiocarbon assays in the Southwest can carry old-wood offsets of `100-400` years compared with short-lived *Zea mays* kernels and tree-ring cutting dates [@robinson2020; @kelly2025].
Old-wood curation in desert rockshelters and roof beams artificially shifts apparent occupational peaks earlier unless screened by botanical taxonomy.
Controlled anthracological firing studies and timber-monument AMS comparisons elsewhere illustrate how deadwood curation and burning temperature affect charcoal preservation and radiocarbon scatter [@coradeschi2023anthracological; @kessler2025origin].

Second, mobile Athabascan and Jumano-Cibolo groups entering the Pecos and Big Bend plains after `1350-1500AD` leave ephemeral tipi-ring footprints compared with adobe pueblos [@doering2020; @kelley1986].
Isotopic dietary studies elsewhere show how shifting foraging and agricultural balances alter osteological and faunal baselines [@sharpe2025isotopic].
Without adjusting carrying capacities for bison-hunting mobility, desert-basin totals would understate late precontact bands.

Third, Mexican-side archival coverage along the lower Rio Conchos and Coahuila remains thinner than New Mexico CRM survey inventories, widening local spatial variance across southern buffer cells even under `300 km` conditioning [@morrison2021mapping].
Fourth, early Spanish chroniclers between `1540AD` and `1598AD` visited principal plaza towns unevenly, leaving sixteenth-century mortality curves between `1500AD` (`140k`) and `1600AD` (`96k`) dependent on epidemic diffusion models rather than full household censuses [@phillips2018; @liebmann2016; @ubelaker2006].

# Conclusion

Rio Grande Hydrological Unit 13 traces a contrasting dual-core demographic history across `346.710 km²` of snowmelt valleys and Chihuahuan desert corridors.
Growing from `800` people in `10000BC` to `68k` at `0AD`, basin population peaked at `155,5k` in `1100AD` during simultaneous Mimbres, Jornada and Chacoan-outlier florescence, matching the `1112AD` radiocarbon median mode.
Rather than declining uniformly thereafter, drought-driven abandonment in the southern Jornada and Pecos basins was balanced through `1500AD` by migration into the Upper Rio Grande.
Rapid aggregation lifted the northern sub-region from `27,7%` of HU 13 in `1100AD` to `45,7%` (`64k`) prior to European arrival, sustaining plaza towns of up to two thousand residents.
Between `1540AD` and `1600AD`, introduced epidemics, tribute burdens and frontier raiding reduced HU 13 by `31,4%` to `96k`.
Reconciled across `261` catalogued settlements and continental Matérn kriging over `93.358` unique site-periods, the series connects pre-Columbian Pueblo and Desert Archaic sequences directly to early Spanish colonial counts.

# Sources

<div id="refs"></div>
