---
title: "Cumberland (Tennessee) Hydrological Unit (HU 06)"
subtitle: "CENTAUR-II: Dallas-Mouse Creek Chiefdoms and Tennessee Valley Mound Towns, 10000BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: cumberland_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_cumberland_spatial.png"
hero_caption: "Sub-regional areal masks and 46 catalogued settlements across the Tennessee-Cumberland Hydrological Unit (110,70k km²), spanning the Ridge-and-Valley to the lower confluence."
hero_label: "fig:hero-cumberland"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the pre-Columbian demographic trajectory of the Tennessee-Cumberland Hydrological Unit (USGS HU 06) across `110.698 km²` (`1.601` five-arcminute cells) from `10000BC` to `1600AD`.
Spanning Upper East Tennessee, Middle Tennessee Bend and Muscle Shoals, and the Lower Tennessee-Ohio confluence, HU 06 captures a striking transition from Archaic cave and shellfish foraging to Mississippian mound capitals and Overhill Cherokee towns.
The reconstruction integrates Kelly et al. [@kelly2025] radiocarbon summed probability trends (`N = 354`, median peak `1167AD`) with Vacant Quarter abandonment chronologies [@cobb2002; @cobb2023], Mississippian mound surveys [@welch2006; @king2003; @muller1997] and sixteenth-century Spanish chronicles [@hudson1997].
Spatial weights derive from continental non-stationary Matérn ($\nu = 3/2$) kriging across `93.358` unique site-periods (`4.457` domestic catchments, `14,12x` baseline density; $\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04`, $R^2 = 0,999$).

Basin population rises from `750` (`690-810`) in `10000BC` to `90,5k` (`83,3k-97,7k`) at `0AD` and peaks at `157k` (`144,4k-169,6k`; `141,83` per `100 km²`) in `1200AD`.
Subsequent Vacant Quarter contraction lowers totals by `38,5%` to `96,5k` (`88,8k-104,2k`) in `1400AD` as Lower and Middle Tennessee mound centres empty.
Meanwhile, Upper East Tennessee and the Blue Ridge valleys rebound to `56k` inhabitants in `1500AD`, accounting for `57,7%` of basin population [@hudson1997].
Following Hernando de Soto's `1540AD` passage and introduced epidemics, total numbers decline to `79,6k` in `1550AD` and `65,5k` (`60,3k-70,7k`) by `1600AD` [@milner2010; @ubelaker2006].
Ledger reconciliation confirms `46` included settlements (`24` in Upper East Tennessee, `15` in Middle Tennessee and `7` in the Lower Confluence) alongside `1` excluded duplicate-alias entry across `47` evaluated candidates.

# Background

## Drainage Physiography and Ecological Foundations

USGS HU 06 encompasses the Tennessee River arc from its Holston, Watauga, French Broad and Little Tennessee headwaters in the Blue Ridge and Ridge-and-Valley through the Chattanooga gorge and Muscle Shoals to the Ohio-Kentucky confluence, together with bordering Cumberland-Coosa uplands.
Covering `110.698 km²` across parts of Tennessee, northern Alabama, western North Carolina, western Kentucky, southwestern Virginia and southern Illinois, the basin combines three contrasting subsistence environments.
In the east, broad limestone valleys between parallel Appalachian ridges retain mild frost-free seasons exceeding `190` days and rich bottomland silt loams suited to double-cropped maize and squash [@lewis1946; @hudson1997].
At the heart of the basin, the Tennessee River sweeps across the Highland Rim and Muscle Shoals limestone shelves, where wide alluvial terraces and freshwater mussel beds supported dense Archaic and Woodland camps long before maize farming arrived [@smith1992; @welch2006].
Further northwest, the lower Tennessee meanders alongside the Western Highland Rim into the flat alluvial plain of the Ohio confluence, where backwater oxbows, cypress swamps and natural levees linked local chiefdoms to the wider Mississippian river world [@muller1997; @cobb2002].

Pre-European upland forest compositions across the eastern Piedmont and Appalachian borderlands combined chestnut, oak, hickory and pine mosaics shaped by deliberate Indigenous burning [@elliott2013subfossil; @coughlan2018influences].
Comparative palaeoecological fire-regime studies confirm that recurrent low-intensity woodland burning increased deer browse, nut yields and edge biodiversity across temperate landscapes [@daniau2010testing; @coughlan2018influences].
Those managed oak-hickory mast belts buffered riverine towns whenever dry summers trimmed bottomland maize harvests.
Along the Appalachian foothills, upland clearance for firewood and cornfields also created stable secondary successional corridors that persisted well into the colonial frontier era [@coughlan2018influences].

## Archaic Domestication, Mississippian Rise and the Vacant Quarter

Human settlement across the Tennessee-Cumberland corridor stretches back into the Early Holocene before `8500BC`, anchored by deep limestone caves and river-bluff shelters such as Dust Cave, Russell Cave, Stanfield-Worley Bluff Shelter and Eva [@smith1992].
Between `6000BC` and `1000BC`, Middle and Late Archaic bands established persistent freshwater shell-mound fisheries along the Muscle Shoals and Kentucky Lake reaches before domesticating native seed crops of the Eastern Agricultural Complex, including goosefoot (*Chenopodium*), sumpweed (*Iva annua*), sunflower (*Helianthus*) and squash [@smith1992].
Middle Woodland groups constructed ceremonial stone enclosures and earthworks such as Old Stone Fort, Florence Mound, Oakville Indian Mounds and Garden Creek (`0AD-450AD`), participating in Hopewell exchange before Late Woodland village proliferation set in across tributary terraces.

After `900AD`, intensive maize cultivation fuelled rapid population nucleation inside palisaded Mississippian platform-mound capitals [@muller1997; @welch2006].
Across `354` cleaned radiocarbon dates in HU 06, Kelly et al. [@kelly2025] identify a median summed probability peak at `1167AD`, immediately preceding a century of realignment.
High-precision Bayesian radiocarbon modelling of Middle Cumberland, Lower Ohio and Upper Appalachian late precontact towns [@cobb2023; @hart2022monongahela] dates the major demographic retreat across the lower and middle valley to `1300AD-1480AD`.
Recurrent droughts, soil exhaustion and chronic inter-chiefdom warfare marked by fortified palisades and traumatic skeletal lesions drove populations out of the lower confluence toward Dallas, Mouse Creek and early Cherokee towns in East Tennessee and western North Carolina [@krus2016; @milner2013; @cobb2023].
Meanwhile, political centres in adjacent Coosa and Etowah valleys maintained diplomatic and trade links across the Blue Ridge passes into the Little Tennessee and Hiwassee drainages [@king2003; @hudson1997].
Sixteenth-century Spanish expeditions under Hernando de Soto (`1540AD`), Tristan de Luna (`1560AD`) and Juan Pardo (`1567AD`) documented dense Ridge-and-Valley paramountcies immediately before introduced epidemics cut native numbers sharply by `1600AD` [@hudson1997; @milner2010; @ubelaker2006].
Earlier regional overviews struggled to separate this sixteenth-century upland persistence from lower-basin abandonment, highlighting the need for sub-regional spatial resolution.

# Methodology

## Radiocarbon Kriging and Three-Mask Partitioning

Baseline rural habitation potential comes from the continental Northern America multi-registry kriging domain (`sites_northern_america`), spanning `481.752` active five-arcminute cells (`18.330.735 km²`) on the `4320 x 2160` WGS84 global grid.
Compositing `p3k14c` [@bird2022p3k14c] and `c14bazAAR` with Kelly and Robinson's lower-48 radiocarbon archive [@kelly2022], state archaeological inventories and regional CRM databases [@crema2021], strict spatial-chronological deduplication preserves `93.358` unique site-periods across `4.457` domestic Voronoi catchments (`2.678` active inhabited catchments, `60,09%` coverage; median catchment radius `27,36 km`, 90th percentile `59,92 km`), an effective observation density `14,12x` above the `c14bazAAR` baseline alone.

To prevent artificial seam cliffs along neighbouring Mississippi, Ohio and Piedmont drainages, `259` cross-frontier buffer catchments condition external territories up to `300 km` beyond the continental margin, paired with two passes of a `5`-pixel separable log-multiplier filter inside `ViscountSubstrataMosaic`.
Catchment counts undergo Freeman-Tukey variance stabilisation and Empirical Bayes smoothing before Weighted Least Squares fitting of five biophysical covariates (habitat mask, natural productivity, ecological suitability, `13,5 km` exponential fluvial proximity and coastal distance) and 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across ten Holocene horizons.
Comparative Bayesian radiocarbon demographic syntheses in Bronze Age Europe [@capuzzo2018highly] and eastern North America [@hart2022monongahela] confirm the importance of smoothing short-interval wiggle effects and river-corridor sampling bias before translating site densities into regional trajectories.

Within HU 06, `1.601` five-arcminute pixels (`110.698 km²`) partition onto three colour-indexed sub-regions in `cumberland_areal_mask.png` (Table \ref{tab:cu-masks}):

1. **Upper East Tennessee, Holston-French Broad and Chickamauga Ridge-and-Valley** (`59.938 km²`, `54,1%` of area, `864` pixels, `34,62-37,21 N`, `81,29-85,29 W`): covers the Holston, French Broad, Little Tennessee, Hiwassee and Blue Ridge corridors (`24` catalogued settlements).
2. **Middle Tennessee Bend, Elk River and Muscle Shoals** (`38.749 km²`, `35,0%` of area, `556` pixels, `34,12-36,38 N`, `85,38-87,88 W`): spans the Elk River, Middle Tennessee Bend, Guntersville-Wheeler basins and Muscle Shoals terraces (`15` catalogued settlements).
3. **Lower Tennessee River and Highland Rim Confluence** (`12.011 km²`, `10,9%` of area, `181` pixels, `34,38-37,12 N`, `87,96-88,62 W`): covers the Shiloh-Savannah corridor, Western Highland Rim and Kentucky-Ohio confluence (`7` catalogued settlements).

## Household Density, Mortuary Baselines and Uncertainty Bounds

Sub-regional totals across `23` benchmark years (`10000BC` to `1600AD`) combine riverine floodplain arable carrying capacity, excavated domestic structure counts (`5-6` persons per Mississippian wattle-and-daub wall-trench house) and mortuary age-structure models [@milner2010; @muller1997; @lewis1946].
Because timber structures in humid southeastern floodplains lasted `10-20` years, summed house counts are scaled by phase-occupancy ratios before estimating town sizes [@muller1997; @welch2006].
Arable silt-loam terraces along the Tennessee bend and Ridge-and-Valley bottoms supported `120-145` persons per `100 km²` at the twelfth-century peak, compared with roughly `59` persons per `100 km²` after sixteenth-century dislocation [@milner2010; @muller1997].
Before allocating rural density onto grid cells, active populations of all `46` catalogued settlements in `cumberland_settlements.json` are deducted from their sub-regional totals.
Symmetric uncertainty bounds of `+/- 8,0%` (`population_bounds`) bracket inter-phase house longevity, survey recovery rates and regional radiocarbon precision [@cobb2023; @kelly2025].
All pipeline diagnostic outputs carry `GMT+0` timestamps.

<figure class="crd-table-figure" id="tab:cu-masks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Cells</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Peak (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper East Tennessee, Holston-French Broad &amp; Chickamauga Ridge-and-Valley</strong></td><td class="crd-td">864</td><td class="crd-td">59.938</td><td class="crd-td">24</td><td class="crd-td">1200AD (68,5k)</td></tr>
<tr><td class="crd-td"><strong>Middle Tennessee Bend, Elk River &amp; Muscle Shoals (Mound Bottom and Shiloh)</strong></td><td class="crd-td">556</td><td class="crd-td">38.749</td><td class="crd-td">15</td><td class="crd-td">1200AD (64,5k)</td></tr>
<tr><td class="crd-td"><strong>Lower Tennessee River &amp; Highland Rim Confluence</strong></td><td class="crd-td">181</td><td class="crd-td">12.011</td><td class="crd-td">7</td><td class="crd-td">1100AD (24,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, 5-arcminute cell counts, land areas, catalogued sites and peak dates in Cumberland HU 06.</figcaption>
</figure>

# Testing and Validation

Four independent checks test spatial calibration, chronological correspondence and ledger parity across HU 06 at `GMT+0`:

First, across all ten Holocene horizons of the Northern America kriging domain (`93.358` unique site-periods aggregated across `4.457` domestic catchments and `2.678` active catchments, `14,12x` baseline density), dimensionless short-range correlation stabilises at $\tau_1 = 1,41$ (`1,4144`, well below the `1,80` upper bound).
That decay corresponds to an effective short range of `38,7 km` and a secondary range of $\tau_2 = 2,62$.
Raw nugget-to-sill equals `0,000`, regularised nugget-to-sill stands at `0,04` (`0,040`, well below `0,45`) and Weighted Least Squares covariate fits reach $R^2 = 0,999$ (`0,9991` to `0,9993`) across all ten periods (Table \ref{tab:cu-kriging}).
Two passes of a `5`-pixel separable log-multiplier filter preserve smooth river-corridor transitions across the Ohio River, Southeast and Lower Mississippi boundaries without inflating sub-regional totals.

Second, the reconstructed basin peak of `157k` in `1200AD` aligns within thirty-three years of the Kelly et al. [@kelly2025] HU 06 median radiocarbon peak of `1167AD`, reflecting the relatively small `354`-date regional sample alongside sustained Dallas-phase occupation across East Tennessee [@lewis1946; @cobb2023].
Between `1200AD` and `1400AD`, the three sub-regions diverge sharply: the Lower Confluence falls by `-60,4%` (`24k` to `9,5k`), Middle Tennessee-Muscle Shoals falls by `-47,3%` (`64,5k` to `34k`) and Upper East Tennessee declines by only `-22,6%` (`68,5k` to `53k`) before rebounding in `1500AD`.

Third, ledger reconciliation confirms exact parity between `cumberland_settlements.json` (`46` included settlements: `24` in Upper East Tennessee, `15` in Middle Tennessee-Muscle Shoals and `7` in the Lower Tennessee confluence) and `cumberland_source_ledger.json5` (`1` excluded duplicate-alias entry for `Toqua` merged within `2 km`, totalling `47` candidates with `0` unaccounted records).

Fourth, benchmark arithmetic equals `headline_population_by_benchmark` across every interval from `10000BC` (`750`) to `1600AD` (`65,5k`).
Synchronously active catalogued settlements sum to `6,13k` in `1200AD` (`3,9%` of `157k`), `5,96k` in `1400AD` (`6,2%` of `96,5k`), `5,42k` in `1500AD` (`5,6%` of `97k`) and `4,68k` in `1600AD` (`7,1%` of `65,5k`).

<figure class="crd-table-figure" id="tab:cu-kriging">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Tau 1</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget/Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,006</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0117</td></tr>
<tr><td class="crd-td"><strong>Late Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0199</td></tr>
<tr><td class="crd-td"><strong>Early Woodland</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0183</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0254</td></tr>
<tr><td class="crd-td"><strong>Late Woodland</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0332</td></tr>
<tr><td class="crd-td"><strong>Early Mississippian</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0468</td></tr>
<tr><td class="crd-td"><strong>Middle Mississippian</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0558</td></tr>
<tr><td class="crd-td"><strong>Late Precontact Dallas</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0465</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0345</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Continental Northern America Matérn kriging parameters across ten Holocene horizons (93.358 unique site-periods, 4.457 domestic catchments).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:cu-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th><th class="crd-th">Density / 100 km²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">10000BC</td><td class="crd-td">750</td><td class="crd-td">690-810</td><td class="crd-td">0,68</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">5000BC</td><td class="crd-td">16,9k</td><td class="crd-td">15,5k-18,3k</td><td class="crd-td">15,27</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">2000BC</td><td class="crd-td">53k</td><td class="crd-td">48,8k-57,2k</td><td class="crd-td">47,88</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">0AD</td><td class="crd-td">90,5k</td><td class="crd-td">83,3k-97,7k</td><td class="crd-td">81,75</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">600AD</td><td class="crd-td">129,5k</td><td class="crd-td">119,1k-139,9k</td><td class="crd-td">116,98</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1000AD</td><td class="crd-td">150k</td><td class="crd-td">138k-162k</td><td class="crd-td">135,5</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1100AD</td><td class="crd-td">155k</td><td class="crd-td">142,6k-167,4k</td><td class="crd-td">140,02</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1200AD</td><td class="crd-td">157k</td><td class="crd-td">144,4k-169,6k</td><td class="crd-td">141,83</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1300AD</td><td class="crd-td">124k</td><td class="crd-td">114,1k-133,9k</td><td class="crd-td">112,02</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1400AD</td><td class="crd-td">96,5k</td><td class="crd-td">88,8k-104,2k</td><td class="crd-td">87,17</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1500AD</td><td class="crd-td">97k</td><td class="crd-td">89,2k-104,8k</td><td class="crd-td">87,63</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1550AD</td><td class="crd-td">79,6k</td><td class="crd-td">73,2k-86k</td><td class="crd-td">71,91</td></tr>
<tr><td class="crd-td"><strong>Cumberland (HU 06)</strong></td><td class="crd-td">1600AD</td><td class="crd-td">65,5k</td><td class="crd-td">60,3k-70,7k</td><td class="crd-td">59,17</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Benchmark population estimates, 8% uncertainty bounds and density per 100 km² for Cumberland (HU 06), 10000BC to 1600AD.</figcaption>
</figure>

# Results

## Archaic-Woodland Expansion and Twelfth-Century Peak

From `750` (`690-810`; `0,68` per `100 km²`) inhabitants at `10000BC`, Tennessee-Cumberland river valleys grew steadily through Archaic cave occupations (`Dust Cave`, `Russell Cave`, `Stanfield-Worley Bluff Shelter` and `Rose Island`) and riverine shellfish-mound foraging (`Eva`, `Seven Mile Island` and `Flint River`) [@smith1992].
Deeply stratified hearths at `Dust Cave` (`8500BC-3500BC`) and `Russell Cave` (`8200BC-1500AD`) show repeated winter aggregation around limestone overhangs paired with warm-season river mussel harvesting along Tennessee River shoals.
Comparative Holocene aquatic-foraging studies in lake-seal and coastal shell-midden economies elsewhere confirm how predictable freshwater mussel and fish shoals stabilised semi-sedentary Archaic band densities along river narrows [@nomokonova2015year; @fossile2023bridging].
By `5000BC`, HU 06 reached `16,9k` (`15,27` per `100 km²`), rising through Early Woodland native seed horticulture (*Chenopodium*, *Iva annua*, *Helianthus*) to `53k` in `2000BC`, `70,5k` in `1000BC` and `90,5k` (`83,3k-97,7k`; `81,75` per `100 km²`) at `0AD` [@smith1992].

During the Middle Woodland (`0AD-450AD`), ceremonial hilltop enclosures and burial mounds multiplied across the basin.
Key centres included `Florence Mound` (`480` at `200AD`), `Old Stone Fort` (`480` at `250AD`), `Garden Creek` (`440` at `400AD`), `Oakville Indian Mounds` (`380` at `200AD`), `Walling` (`260` at `200AD`) and `Yearwood` (`240` at `200AD`), followed by Late Woodland `Owl Hollow` (`320` at `450AD`) and `Candy Creek` (`260` at `700AD`) farming villages.
Basin numbers accordingly expanded to `117k` in `400AD` and `129,5k` in `600AD`.
Maize intensification after `800AD` and Emergent Mississippian nucleation carried totals from `141,5k` in `800AD` to `150k` in `1000AD`, `155k` in `1100AD` and a peak of `157k` (`144,4k-169,6k`; `141,83` per `100 km²`) at `1200AD`.
That twelfth-century zenith aligns with Kelly et al. [@kelly2025] `1167AD` radiocarbon mode (Table \ref{tab:cu-benchmarks} and Figure \ref{fig:cu-trajectory}).

<figure class="crd-figure-block" id="fig:cu-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-cumberland/fig2_cumberland_trajectory.png" alt="fig:cu-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and sub-regional population trajectories for Cumberland (HU 06) from 10000BC to 1600AD with uncertainty envelope.</figcaption>
</figure>

## Vacant Quarter Abandonment and Upland Persistence

Between `1200AD` and `1400AD`, total basin population contracted by `38,5%` (from `157k` to `96,5k`), marked by sharp internal divergence between the lower confluence and the Appalachian Ridge-and-Valley (Figure \ref{fig:cu-shares} and Table \ref{tab:cu-subregions}).
Along the Lower Tennessee and Middle Bend, multi-year droughts, soil depletion and escalating inter-chiefdom conflict thinned fortified floodplain towns [@cobb2002; @cobb2023; @krus2016; @milner2013].
Palisade ditches, bastions and burnt structures excavated at `Kincaid Mounds`, `Jonathan Creek` and `Shiloh Indian Mounds` confirm rising defensive costs prior to fourteenth-century abandonment [@welch2006; @muller1997].
By contrast, Upper East Tennessee and the Blue Ridge foothills maintained resilient agricultural populations across the fifteenth century, lifting basin totals slightly from `96,5k` in `1400AD` to `97k` (`89,2k-104,8k`) in `1500AD`.
Following Hernando de Soto's `1540AD` expedition through the Tennessee-Coosa corridor and Juan Pardo's `1567AD` inland marches [@hudson1997], epidemic disruption lowered HU 06 by `17,9%` to `79,6k` in `1550AD`.
Continued mortality and regional realignment across the upper valleys lowered totals further to `65,5k` (`60,3k-70,7k`; `59,17` per `100 km²`) by `1600AD` [@milner2010; @ubelaker2006].

<figure class="crd-figure-block" id="fig:cu-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-cumberland/fig3_cumberland_shares.png" alt="fig:cu-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic shares across Cumberland (HU 06) from 10000BC to 1600AD.</figcaption>
</figure>

### Upper East Tennessee, Holston-French Broad and Chickamauga Ridge-and-Valley

Covering `59.938 km²` (`54,1%` of HU 06), Upper East Tennessee expanded from `300` inhabitants in `10000BC` to `6,8k` in `5000BC`, `36k` at `0AD` and its precontact peak of `68,5k` in `1200AD` (`43,6%` of the basin).
Early Holocene camps at `Rose Island` (`8200BC-7000BC`) and `Icehouse Bottom` (`7500BC-750AD`) anchored terrace foraging in the Little Tennessee corridor before Woodland mound centres such as `Garden Creek` (`440` at `400AD`) rose along the Blue Ridge margins [@lewis1946; @smith1992].
Unlike the downstream reaches, upland numbers declined modestly to `61k` in `1300AD` and `53k` in `1400AD`, then rebounded to `56k` (`51,5k-60,5k`) in `1500AD`.
By `1500AD`, Upper East Tennessee held `57,7%` of all HU 06 inhabitants, rising slightly to `58,0%` by `1600AD`.

Between `1350AD` and `1550AD`, dense Dallas and Mouse Creek palisaded towns lined the Chickamauga, Hiwassee and Little Tennessee floodplains [@lewis1946; @muller1997].
Key centres included `Hiwassee Island` (`1,2k` at `1400AD`), `Toqua` (`1,1k` at `1400AD`), `Citico` (`920` at `1400AD`), `Dallas` (`740` at `1450AD`), `Ledford Island` (`690` at `1500AD`), `Rymer` (`540` at `1500AD`), `Bussell Island` (`480` at `1450AD`) and `Davis` (`480` at `1350AD`).
Adjacent Overhill, Valley and Middle Cherokee towns - including `Citico (Overhill)` (`780` at `1600AD`), `Tomotley` (`750`), `Kituhwa` (`680`), `Nikwasi` (`620`) and `Coweeta Creek` (`480`) - sustained dense townhouse precincts across the mountains alongside northern Ridge-and-Valley villages such as `Hoge` (`340` in `1500AD`) [@hudson1997; @king2003].
Spanish contact and regional epidemics after `1540AD` then cut upland totals to `46k` in `1550AD` and `38k` in `1600AD` [@milner2010; @ubelaker2006].

### Middle Tennessee Bend, Elk River and Muscle Shoals

Spanning `38.749 km²` (`35,0%` of HU 06), Middle Tennessee Bend and Muscle Shoals matched Upper East Tennessee early on, growing from `300` in `10000BC` to `6,8k` in `5000BC`, `36,5k` at `0AD` and a co-peak of `64,5k` in `1200AD`.
Deeply stratified cave and river-bluff deposits at `Dust Cave` (`8500BC-3500BC`), `Russell Cave` (`8200BC-1500AD`) and `Stanfield-Worley Bluff Shelter` (`8000BC-2000BC`) document continuous Paleoindian and Archaic foraging before rich shell-mound villages emerged along `Seven Mile Island` (`6000BC-1300AD`) and `Flint River` (`3000BC-1200AD`) [@smith1992].
Middle Woodland ceremonial earthworks (`Florence Mound` `480`, `Old Stone Fort` `480`, `Oakville Indian Mounds` `380`, `Walling` `260` and `Yearwood` `240`) gave way to Late Woodland `Owl Hollow` villages (`320`) and Mississippian platform-mound towns at `Hobbs Island` (`560` at `1350AD`), `Kogers Island` (`460`) and `Murphy Hill` (`360`).
During the fourteenth-century Vacant Quarter realignment, population fell by nearly half from `64,5k` in `1200AD` to `34k` in `1400AD` (`35,2%` share), easing further to `32k` in `1500AD` and `21k` (`32,1%`) in `1600AD` [@cobb2023; @krus2016].

### Lower Tennessee River and Highland Rim Confluence

Covering `12.011 km²` (`10,9%` of HU 06), the lower confluence grew from `150` inhabitants in `10000BC` to `3,3k` in `5000BC`, `18k` at `0AD` and its early maximum of `24,5k` in `1100AD` (`15,8%` of HU 06).
Because this corridor sat directly inside the Mississippian Vacant Quarter core, major fortified towns including `Kincaid Mounds` (`2,4k` at `1300AD`), `Shiloh Indian Mounds` (`1,1k` at `1200AD`), `Jonathan Creek` (`920` at `1200AD`), `Swallow Bluff` (`480`), `Chambers` (`360`) and `Coffee Bluff` (`320`) declined sharply after `1300AD` [@welch2006; @cobb2002; @muller1997].
Extensive excavations at Shiloh and Kincaid document rapid abandonment of palisaded plazas and platform mounds between `1350AD` and `1450AD` [@welch2006; @cobb2023].
Sub-regional totals dropped from `24k` in `1200AD` to `15k` in `1300AD`, `9,5k` in `1400AD` (`9,8%` share) and `6,5k` (`9,9%`) in `1600AD`.

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
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population totals across Cumberland (HU 06) at 1200AD, 1500AD and 1600AD.</figcaption>
</figure>

# Limitations

Four constraints qualify these demographic estimates for HU 06.
First, Kelly et al. [@kelly2025] note that HU 06 contains `354` cleaned radiocarbon dates across the past two millennia, falling slightly below their `400`-date (`0,2` dates per year) simulation reliability threshold.
As a result, local summed probability peak timing carries wider statistical variance than neighbouring HU 05 (`Ohio River`) or HU 03 (`Southeast`), requiring joint anchoring against Bayesian site chronologies and excavated townhouse sequences [@cobb2023; @hart2022monongahela].

Second, twentieth-century Tennessee Valley Authority reservoir impoundments along Kentucky Lake, Wheeler, Guntersville, Chickamauga and Tellico inundated low floodplain hamlets prior to modern CRM surveys [@welch2006].
Permanent flooding beneath reservoir pools biases surviving site visibility toward elevated platform-mound precincts and high bluff caves, making rural carrying-capacity priors essential for filling submerged bottomland zones.

Third, comparative dendro-ecological disturbance studies [@andrade2019growth], anthracological charcoal combustion analyses [@coradeschi2023anthracological] and skeletal palaeopathology baselines [@robbins2009ancient] illustrate how differential preservation of timber, burnt organics and osteological lesions affects proxy visibility across humid river basins.
Acid upland soils in the Blue Ridge dissolve unburnt bone faster than limestone cave deposits at Dust Cave or Russell Cave, requiring explicit mortuary correction [@milner2010; @muller1997].
Fourth, sixteenth-century disease mortality between `1540AD` and `1600AD` (`97k` down to `65,5k`) depends on indirect archaeological abandonment rates and sparse Spanish chronicle notices rather than continuous parish registers [@hudson1997; @ubelaker2006].

# Conclusion

Cumberland-Tennessee Hydrological Unit 06 records a distinct upland-lowland divergence across `110.698 km²` of Appalachian valleys, Highland Rim terraces and lower Mississippi-Ohio confluence floodplains.
Growing steadily from `750` people in `10000BC` to `90,5k` at `0AD`, basin population peaked at `157k` (`141,83` per `100 km²`) in `1200AD` during high Mississippian town nucleation.
While Vacant Quarter abandonment depopulated the lower confluence and thinned Middle Tennessee by `1400AD` (`96,5k` basin-wide), Ridge-and-Valley Dallas, Mouse Creek and early Cherokee towns sustained `56k` inhabitants in Upper East Tennessee through `1500AD` (`57,7%` of HU 06).
Even after mid-sixteenth-century Spanish expeditions and introduced epidemics lowered total numbers to `65,5k` in `1600AD`, Upper East Tennessee still retained `58,0%` of the entire basin population.
Reconciled across `46` catalogued settlements and continental Matérn kriging over `93.358` unique site-periods, the HU 06 series tracks both early Holocene cave-and-shellfish foraging and late precontact chiefdom resilience into the colonial era.

# Sources

<div id="refs"></div>
