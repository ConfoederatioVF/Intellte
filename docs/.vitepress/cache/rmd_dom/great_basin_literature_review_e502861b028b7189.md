---
title: "Great Basin Hydrological Unit (HU 16): Demographic Reconstruction"
subtitle: "CENTAUR-II: Bonneville-Fremont Farmers and Lahontan Desert Foragers, 10000BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: great_basin_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_great_basin_spatial.png"
hero_caption: "Sub-regional areal masks and excavated settlements across Great Basin Hydrological Unit 16 (360,8k km²), spanning the Lake Bonneville Wasatch oasis, Humboldt-Lahontan corridor and Owens-Mojave valleys."
hero_label: "fig:hero-great-basin"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This paper reconstructs the human population of Great Basin Hydrological Unit 16 (`360.781 km²` across `5.466` 5-arcminute grid cells) from 10000BC to 1600AD [@kelly2025; @seaber1987hydrologic]. Spanning the endorheic Bonneville and Lahontan lake basins alongside the Central Nevada valleys, Owens Valley and Mojave sinks, HU 16 linked productive wetland marsh foraging with eastern Fremont alluvial-fan maize horticulture [@madsen1998fremont; @kelly2001marsh].

Combining `N = 1.768` calibrated radiocarbon dates from Kelly et al. with the `sites_northern_america` non-stationary Matérn ($\nu = 3/2$) kriging surface (`93.358` unique site-periods across `4.457` domestic catchments, `14,12x` baseline, $\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04`, WLS residual $R^2 = 0,999$) and `63` catalogued settlements (`66` ledger candidates, `3` duplicate-alias exclusions), regional population rose from `750` (`690-810`) in 10000BC to `36k` (`33,1-38,9k`) in `0AD` and peaked at `64,3k` (`59,2-69,4k`) in `1100AD`, matching the Kelly et al. HU 16 median radiocarbon mode of `1089AD` (`861 cal BP`) [@kelly2025; @bird2022p3k14c; @kelly2022new]. Following thirteenth-century megadroughts and the contraction of Fremont farming to `44,5k` in `1300AD`, Numic intensification of piñon harvesting, desert marsh fisheries and Owens-Bridgeport irrigated meadows restored basin numbers to `60,5k` (`55,7-65,3k`) by `1600AD` [@bettinger1982numic; @lawton1976owens].



# Background

Great Basin Hydrological Unit 16 comprises the vast internally drained province bounded by the Wasatch Range on the east and the Sierra Nevada crest on the west, covering parts of Utah, Nevada, eastern California, southeastern Oregon and southern Idaho [@seaber1987hydrologic; @robinson2024intermountain]. Unlike coastal or Mississippi watersheds, no stream reaches the ocean; snowmelt from fault-block mountain ranges drains into terminal saline lakes and alkaline playas including Great Salt Lake, Utah Lake, Sevier Lake, Humboldt Sink, Carson Sink, Pyramid Lake, Walker Lake and Owens Lake [@kelly2001marsh].

Precipitation varies sharply with elevation rather than latitude alone, creating green mountain islands separated by arid sagebrush valleys and barren salt pans. Annual rain and snowfall exceed `750 mm` along high-altitude Wasatch and Sierra watersheds while dropping below `125 mm` across central Nevada rain shadows, concentrating human foraging and village farming along narrow canyon mouths, spring aprons and lowland marsh perimeters [@kelly2001marsh; @robinson2024intermountain].

Human settlement began during the Terminal Pleistocene as shrinking pluvial lakes Bonneville and Lahontan uncovered marsh-fringed terraces rich in waterfowl, tui chub and cattail rhizomes alongside large game. Early Clovis and Western Stemmed occupations are deeply stratified in caves and lakeside shelters across the `63`-site gazetteer, beginning by `9500BC` at `Bonneville Estates Rockshelter` and `Kachina Cave` in eastern Nevada, `9000BC` at `Fishbone Cave` near Winnemucca Lake, `8500BC` at `Danger Cave` on the Bonneville salt flats, `7500BC` at `Falcon Hill` and `Spirit Cave`, and `6500BC` at `Hogup Cave` and `Leonard Rockshelter` [@thulman2023clovis; @kelly2001marsh].

Throughout the Early and Middle Holocene (`8000BC` to `2000BC`), warm Altithermal evaporation desiccated shallow basins, forcing mobile foragers to tether seasonal rounds around perennial mountain springs and high-elevation rock shelters while developing coiled basketry, groundstone seed-milling tools and desert plant-processing strategies [@damick2021palm; @ramsey2016risk]. Petroglyph and rock-varnish sequences along eastern California and the northeastern Bonneville margin track long-term territorial persistence around key desert waterholes and seasonal game corridors [@andreae2022archaeometric; @andreae2020geochemical].

Between `400AD` and `1250AD`, Fremont horticulturalists occupied alluvial fans along the Wasatch Front, Sevier River and Parowan Valley, combining irrigated dent maize and subterranean adobe granaries with marsh-edge hunting and gathering [@madsen1998fremont; @finley2020fremont]. Excavated villages such as `Backhoe Village`, `Five Finger Ridge`, `Nephi Mounds`, `Pharo Village` (all benchmarked at `1,06k` peak), `Parowan Gap-Paragonah` (`828`), `Median Village` (`583`), `Nawthis Village` (`480`), `Baker Village` (`246`) and `Evans Mound` (`230`) illustrate the clustered oasis character of eastern Great Basin farming [@madsen1998fremont].

Unlike neighbouring Anasazi communities to the south, Fremont settlements shifted easily between full-time farming and wetland-hunting mobility whenever short-season frosts or local stream avulsions threatened maize yields [@finley2020fremont]. Around Bear River Bay and Great Salt Lake (`Bear River No. 1` to `No. 3`, `Willard Mounds`, `Injun Creek`), village economies relied heavily on waterfowl, muskrat and marsh bulrush supplemented by upland bison hunting [@madsen1998fremont].

Simultaneously, along the western Nevada sinks and Tahoe-Sierra margin, non-agricultural wetland and upland communities sustained semi-sedentary residential bases at `Stillwater Marsh` (`480`), `Lovelock Cave` (`350`), `Pyramid Lake Paiute Village` (`320`), `Walker Lake Paiute Village` (`240`) and `Lake Tahoe (Tahoe Reach)` (`190`) [@kelly2001marsh].

After `1250AD`, prolonged droughts ended maize farming in Utah, while Numic-speaking Paiute, Shoshone and Ute groups expanded eastward and northward, replacing Fremont villagers with intensive piñon-pine-nut storage, broad-spectrum grass-seed harvesting and earth-ditch wild-bulb irrigation across Owens Valley and adjacent Sierra foothills (`Bridgeport Valley Village` `peak 135`) [@bettinger1982numic; @lawton1976owens; @robinson2024intermountain].

# Methodology

## Radiocarbon Calibration and Sub-Regional Partitioning

Temporal calibration draws directly on the Kelly et al. IntCal20 radiocarbon synthesis for Hydrological Unit 16 (`N = 1.768` dates with standard errors `<= 100` years) [@kelly2025; @kelly2022new]. Across `500` running-mean smoothing windows, Kelly et al. identify a basin-wide peak extending from `831` to `985 cal BP` (`965AD` to `1119AD`), with a first quartile at `842 cal BP` (`1108AD`), a third quartile at `930 cal BP` (`1020AD`), a mean of `884 cal BP` (`1066AD`) and a median peak at `861 cal BP` (`1089AD`) [@kelly2025].

To capture the divergent post-`1100AD` trajectories between eastern Fremont oasis farmers and western wetland-and-piñon foragers, HU 16 is divided into three 5-arcminute areal masks totalling `5.466` active pixels (`360.781 km²`):

1. **Lake Bonneville, Bear River and Wasatch Oasis (Fremont)**: `1.962` cells (`127.612 km²`, `35,4%` of basin area), spanning Utah, southeastern Idaho and far eastern Nevada from `37,38` to `42,71` degrees north and `110,62` to `114,12` degrees west.
2. **Humboldt Sink, Lake Lahontan and Carson-Truckee Corridor**: `2.686` cells (`177.046 km²`, `49,1%` of basin area), encompassing northern Nevada, southeastern Oregon and the Tahoe Sierra slope from `38,46` to `42,29` degrees north and `114,21` to `120,21` degrees west.
3. **Central Nevada Valleys, Owens Valley and Mojave Endorheic Basin**: `818` cells (`56.123 km²`, `15,6%` of basin area), extending across southern-central Nevada and eastern California from `35,29` to `38,38` degrees north and `114,21` to `119,54` degrees west.

## Carrying-Capacity Anchors and Fremont Village Scaling

Benchmark population trajectories across `23` intervals from `10000BC` to `1600AD` reconcile regional ethnographic carrying-capacity envelopes [@ubelaker2006; @robinson2024intermountain] with sub-regional radiocarbon curves [@peros2010prehistoric] and excavated pithouse counts [@madsen1998fremont; @finley2020fremont]. For Fremont settlements, active residential totals follow excavated pithouse and storage-structure scaling:

$$P_{\text{village}}(t) = H_{\text{excavated}} \times \rho_{\text{phase}}(t) \times \bar{h}_{\text{pithouse}}$$

where $H_{\text{excavated}}$ is the count of semi-subterranean dwellings or surface granary complexes, $\rho_{\text{phase}}(t)$ scales for overlapping occupational phases and $\bar{h}_{\text{pithouse}}$ denotes mean household size per active dwelling [@madsen1998fremont].

In the Bonneville-Wasatch zone, predictive archaeological terrain modelling across adjacent Utah plateaus confirms strong settlement tethering to perennial snowmelt streams and arable alluvial fans [@yaworsky2020advancing]. Where regional registers classify premier Fremont village complexes without individual phase-calibrated pithouse tallies, sites enter under a shared `1.060`-inhabitant regional tier ceiling balanced inside sub-regional carrying capacities.

In the Lahontan and Central Nevada-Owens basins, wetland-complex estimates integrate residential house-pit rings around marsh margins (`Stillwater Marsh`, `Lovelock Cave`) with band-level carrying capacities derived from cattail pollen, fish productivity, piñon woodland zones and irrigated wild-seed plots [@kelly2001marsh; @lawton1976owens; @bettinger1982numic].

Finally, sub-regional curve interpolation preserves explicit chronological smoothness across the `1100AD` to `1600AD` transition so Fremont maize abandonment in Utah never produces artificial discontinuities inside western Nevada wetland catchments.

## Dasymetric Kriging and Uncertainty Bounds

Pixel-level allocation across HU 16's `5.466` grid cells relies on the continental `sites_northern_america` domain covering `481.752` active 5-arcminute terrestrial cells across North America and Greenland. By combining `p3k14c` and `c14bazAAR` with state site registers and regional CRM surveys, the domain compiles `93.358` unique site-periods across `4.457` domestic Voronoi catchments (`2.678` active inhabited catchments; median radius `27,36 km`, 90th percentile `59,92 km`) - `14,12x` above the global `c14bazAAR` baseline [@bird2022p3k14c; @kelly2022new].

Catchment counts $y_{i,h}$ in horizon $h$ undergo Freeman-Tukey variance stabilisation and Poisson-Gamma credibility smoothing prior to weighted least-squares (WLS) covariate regression and 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) residual kriging:

$$z_{i,h} = \sqrt{y_{i,h}} + \sqrt{y_{i,h} + 1}, \qquad C_h(u_{ij}) = \sigma_h^2 \left(1 + \frac{\sqrt{3}\, u_{ij}}{\tau_1}\right) \exp\!\left(-\frac{\sqrt{3}\, u_{ij}}{\tau_1}\right)$$

where $u_{ij}$ denotes dimensionless Voronoi geodesic lag and biophysical covariates include natural-habitat index, ecological richness, `13,5 km` fluvial distance decay and coastal proximity. To prevent edge distortion along the Wasatch Plateau, Snake River Plain and Sierra Crest, `171` cross-frontier buffer catchments condition surrounding domains up to `300 km` beyond CENTAUR's perimeter, connecting HU 16 smoothly into Upper Colorado HU 14, Arizona HU 15, California HU 18 and Northwest HU 17.

Across all ten Holocene horizons (`10000BC` to `1600AD`), fitted North American variograms attain raw dimensionless short range $\tau_1 = 1,41$ (`1,4144`, effective short range `38,7 km`, $\tau_2 = 2,62$), raw nugget-to-sill `0,000`, regularised nugget-to-sill `0,04` and WLS residual $R^2 = 0,999$ (`0,9991` to `0,9993`). In Great Basin HU 16, the `13,5 km` fluvial decay covariate concentrates rural density along Bear, Weber, Jordan, Sevier, Humboldt, Truckee, Carson, Walker and Owens stream corridors and marsh basins while depressing uninhabited alkali salt flats.

Because montane-to-playa habitat fragmentation, late Holocene drought oscillations and inter-band mobility networks reshape carrying capacity asynchronously across arid elevations - dynamics examined in comparative ecological-fragmentation and geospatial mobility models [@stewart2017apparent; @davis2013global; @perez2019geospatial; @nampindo2024dynamic] - every sub-regional estimate carries a symmetric $\pm 8\%$ structural uncertainty interval stamped in GMT+0.

<figure class="crd-table-figure" id="tab:subregions-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Grid Cells</th><th class="crd-th">Area (km²)</th><th class="crd-th">Bounding Box</th><th class="crd-th">Peak Year (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lake Bonneville, Bear River &amp; Wasatch Oasis (Fremont)</strong></td><td class="crd-td">1.962</td><td class="crd-td">127.612</td><td class="crd-td">37,38-42,71N, 110,62-114,12W</td><td class="crd-td">1100AD (28,5k)</td></tr>
<tr><td class="crd-td"><strong>Humboldt Sink, Lake Lahontan &amp; Carson-Truckee Corridor</strong></td><td class="crd-td">2.686</td><td class="crd-td">177.046</td><td class="crd-td">38,46-42,29N, 114,21-120,21W</td><td class="crd-td">1100AD (24,2k)</td></tr>
<tr><td class="crd-td"><strong>Central Nevada Valleys, Owens Valley &amp; Mojave Endorheic Basin</strong></td><td class="crd-td">818</td><td class="crd-td">56.123</td><td class="crd-td">35,29-38,38N, 114,21-119,54W</td><td class="crd-td">1600AD (12k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, grid cells, land areas and peak population dates across Great Basin HU 16.</figcaption>
</figure>

# Testing and Validation

Four independent validation tests evaluate the Great Basin demographic and settlement reconstruction:

1. **Radiocarbon Peak Alignment**: The basin-wide maximum of `64,3k` in `1100AD` aligns within `11` years of the Kelly et al. HU 16 radiocarbon median peak of `1089AD` (`861 cal BP`) [@kelly2025].
2. **Mediaeval Megadrought Contraction Check**: The `30,8%` basin decline from `64,3k` in `1100AD` to `44,5k` in `1300AD` - sharpest in the Bonneville-Wasatch Fremont core (`-38,6%`, falling from `28,5k` to `17,5k`) - matches tree-ring records of Mediaeval Climatic Anomaly megadroughts and the collapse of eastern Great Basin maize farming [@finley2020fremont; @cook2013megadroughts; @madsen1998fremont].
3. **Numic Rebound and Variogram Sharpness**: The subsequent recovery from `44,5k` in `1300AD` to `60,5k` in `1600AD` reflects documented Numic intensification of piñon storage, wetland fisheries and ditch irrigation [@bettinger1982numic; @lawton1976owens; @robinson2024intermountain]. Inside `sites_northern_america`, all ten Holocene horizons achieve raw $\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04` and WLS residual $R^2 = 0,999$ (`Table` \ref{tab:kriging-great-basin}).
4. **Gazetteer and Source-Ledger Reconciliation**: Cross-checking `great_basin_settlements.json` against `great_basin_source_ledger.json5` confirms `63` included sites (`187` observations from `9500BC` to `1600AD`; `36` in Bonneville-Wasatch, `26` in Humboldt-Lahontan and `1` in Central Nevada-Owens-Mojave) alongside `3` excluded duplicate-alias records (`Five Finger Ridge`, `Nephi Mounds` and `Lake Tahoe (Tahoe Reach)`), totalling `66` candidates with zero missing records. Both `Danger Cave` (`8500BC` to `500AD`, `peak 35`) and `Hogup Cave` (`6500BC` to `1200AD`, `peak 40`) enter cleanly inside the `63`-site inventory.

<figure class="crd-table-figure" id="tab:kriging-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Tau 1</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">WLS R²</th><th class="crd-th">Mean</th><th class="crd-th">99th Pct</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,006</td><td class="crd-td">0,103</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0117</td><td class="crd-td">0,179</td></tr>
<tr><td class="crd-td"><strong>Late Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0199</td><td class="crd-td">0,287</td></tr>
<tr><td class="crd-td"><strong>Early Woodland and Formative</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0183</td><td class="crd-td">0,27</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland (Hopewell)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0254</td><td class="crd-td">0,407</td></tr>
<tr><td class="crd-td"><strong>Late Woodland and Dorset</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0332</td><td class="crd-td">0,592</td></tr>
<tr><td class="crd-td"><strong>Early Mississippian (Pueblo II)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0468</td><td class="crd-td">0,807</td></tr>
<tr><td class="crd-td"><strong>Middle Mississippian (Pueblo III)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0558</td><td class="crd-td">0,885</td></tr>
<tr><td class="crd-td"><strong>Late Precontact (Thule and Oneota)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0465</td><td class="crd-td">0,731</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact Horizon</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0345</td><td class="crd-td">0,577</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> North American Matérn variogram parameters and kriged density moments across ten Holocene horizons.</figcaption>
</figure>

# Results

## Long-Term Basin Trajectory

Population across Great Basin HU 16 followed a distinctive double-peaked Holocene curve unmatched elsewhere in the Intermountain West (`Figure` \ref{fig:trajectory-great-basin} and `Table` \ref{tab:trajectory-great-basin}). Starting from sparse post-pluvial foraging bands of `750` inhabitants (`690-810`, `0,21` persons per `100 km²`) in `10000BC`, numbers climbed to `1,45k` in `9000BC`, `2,65k` in `8000BC`, `4,35k` in `7000BC` and `6,75k` in `6000BC` as productive marshes formed along retreating pluvial shorelines.

Mid-Holocene lakeshore wetland intensification offset desert aridity, carrying the basin to `9,8k` (`9,0-10,6k`, `2,72` per `100 km²`) in `5000BC`, `13,45k` in `4000BC`, `17,85k` in `3000BC`, `23k` (`21,2-24,8k`, `6,38` per `100 km²`) in `2000BC`, `29,1k` in `1000BC` and `36k` (`33,1-38,9k`, `9,98` per `100 km²`) at `0AD` [@kelly2001marsh; @peros2010prehistoric].

Steady growth across Fremont alluvial villages and Lahontan marshes raised HU 16 through `41,4k` in `200AD`, `47,5k` in `400AD` (`13,17` per `100 km²`) and `53,4k` in `600AD` to `58,7k` in `800AD`, `62,6k` in `1000AD` and the `1100AD` peak of `64,3k` (`59,2-69,4k`, `17,82` per `100 km²`) [@madsen1998fremont; @finley2020fremont]. Across the entire two-millennium rise from `1000BC` to `1100AD`, Great Basin population more than doubled (`2,21x`) without ever relying on large urban centres.

Unlike the Colorado Plateau or Phoenix Basin, where post-`1200AD` decline remained permanent until contact, Great Basin HU 16 suffered a sharp two-century trough followed by a robust late prehistoric recovery. Prolonged megadroughts lowered basin totals to `55,9k` in `1200AD` and `44,5k` (`40,9-48,1k`, `12,33` per `100 km²`) in `1300AD` as Fremont maize settlements retracted across eastern Utah [@cook2013megadroughts].

From `1400AD` (`47,6k`) onward, however, flexible Numic upland-lowland seasonal rounds, piñon-nut caching and irrigated meadow plots lifted population back to `53k` in `1500AD`, `56,8k` in `1550AD` and `60,5k` (`55,7-65,3k`, `16,77` per `100 km²`) in `1600AD` - restoring numbers to `94,1%` of their `1100AD` maximum [@bettinger1982numic; @lawton1976owens]. While overall basin density remained far below Arizona (`20,89` per `100 km²`), Great Basin communities outpaced Northern Plains HU 10 (`13,51` per `100 km²`) in terminal pre-contact density per unit area.

<figure class="crd-figure-block" id="fig:trajectory-great-basin">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-basin/fig2_great_basin_trajectory.png" alt="fig:trajectory-great-basin" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory across Great Basin HU 16 from 10000BC to 1600AD, with shaded 8 percent uncertainty band.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:trajectory-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lake Bonneville, Bear River &amp; Wasatch Oasis (Fremont)</strong></td><td class="crd-td">300</td><td class="crd-td">4,1k</td><td class="crd-td">15k</td><td class="crd-td">20,5k</td><td class="crd-td">26k</td><td class="crd-td">28,5k</td><td class="crd-td">17,5k</td><td class="crd-td">24,5k</td></tr>
<tr><td class="crd-td"><strong>Humboldt Sink, Lake Lahontan &amp; Carson-Truckee Corridor</strong></td><td class="crd-td">300</td><td class="crd-td">3,7k</td><td class="crd-td">13,8k</td><td class="crd-td">18k</td><td class="crd-td">22k</td><td class="crd-td">24,2k</td><td class="crd-td">18k</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Central Nevada Valleys, Owens Valley &amp; Mojave Endorheic Basin</strong></td><td class="crd-td">150</td><td class="crd-td">2k</td><td class="crd-td">7,2k</td><td class="crd-td">9k</td><td class="crd-td">10,7k</td><td class="crd-td">11,6k</td><td class="crd-td">9k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Great Basin HU 16 Total</strong></td><td class="crd-td">750</td><td class="crd-td">9,8k</td><td class="crd-td">36k</td><td class="crd-td">47,5k</td><td class="crd-td">58,7k</td><td class="crd-td">64,3k</td><td class="crd-td">44,5k</td><td class="crd-td">60,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Benchmark population series by sub-region in Great Basin HU 16, 10000BC-1600AD.</figcaption>
</figure>

## Sub-Regional Composition and Ecological Zones

Across the Holocene, the Bonneville-Wasatch Oasis and Humboldt-Lahontan Corridor alternated as the leading demographic zones while Central Nevada and Owens Valley exhibited the steepest late-prehistoric rebound (`Figure` \ref{fig:shares-great-basin} and `Table` \ref{tab:density-great-basin}).

### Lake Bonneville, Bear River and Wasatch Oasis

Covering `127.612 km²` (`35,4%` of HU 16), eastern Utah and southern Idaho streams along the Wasatch Front supported dense Fremont pit-house villages. Population expanded from `300` in `10000BC` (`0,24` per `100 km²`) and `4,1k` in `5000BC` to `15k` at `0AD`, `20,5k` in `400AD`, `26k` in `800AD` and `28,5k` (`22,33` per `100 km²`, `44,3%` of basin total) in `1100AD` [@madsen1998fremont; @finley2020fremont].

Unlike neighbouring Anasazi masonry towns on the Colorado Plateau, Fremont villages combined small clusters of timber-and-adobe granaries and sunken pithouses with waterfowl hunting in the Great Salt Lake and Bear River wetlands (`Bear River No. 1`, `Bear River No. 2`, `Bear River No. 3`, `Willard Mounds`, `Grantsville Mound`). Farther south along the Sevier and Parowan fans, dense settlements at `Backhoe Village`, `Five Finger Ridge`, `Nephi Mounds` and `Pharo Village` (`1,06k` peak tier each), alongside `Parowan Gap-Paragonah` (`828`), `Median Village` (`583`), `Nawthis Village` (`480`), `Baker Village` (`246`) and `Evans Mound` (`230`), exploited snowmelt irrigation channels fed by the Tushar and Wasatch ranges [@madsen1998fremont].

Thirteenth-century megadroughts struck rain-fed and alluvial-fan maize agriculture far harder than desert marsh foraging, dropping Bonneville-Wasatch totals by `38,6%` to `17,5k` (`39,3%` share) in `1300AD`. Subsequent Numic hunter-gatherers and Promontory-era bison-and-marsh camps (`Promontory Cave 1`, `Injun Creek`) rebuilt population to `18,5k` in `1400AD`, `21k` in `1500AD` and `24,5k` (`19,20` per `100 km²`, `40,5%` share) in `1600AD` across `36` catalogued sites (`57,1%` of HU 16).

### Humboldt Sink, Lake Lahontan and Carson-Truckee Corridor

Encompassing `177.046 km²` (`49,1%` of HU 16) across western and northern Nevada and the Tahoe slope, the Lahontan basin paired vast arid sagebrush interfluves with rich terminal marshlands. Numbers grew from `300` in `10000BC` (`0,17` per `100 km²`) and `3,7k` in `5000BC` to `13,8k` at `0AD`, `18k` in `400AD`, `22k` in `800AD` and a peak of `24,2k` (`13,67` per `100 km²`, `37,6%` share) in `1100AD` [@kelly2001marsh].

Shallow marsh lakes around Carson Sink, Humboldt Sink, Pyramid Lake and Walker Lake buffered drought years when upland pine-nut crops failed, sustaining residential bases without formal agriculture. During the Fremont contraction of `1300AD`, Humboldt-Lahontan briefly became the largest sub-region in HU 16 (`18k`, `40,4%` share) and retained the lead in `1400AD` (`19,5k`, `41,0%`) and `1500AD` (`21,5k`), reaching `24k` (`13,56` per `100 km²`, `39,7%` share) by `1600AD`.

Its `26` catalogued sites (`41,3%` of HU 16) span millennia of marsh-and-upland occupation: Archaic rock-art and cave repositories (`Fishbone Cave`, `Falcon Hill`, `Spirit Cave`, `Leonard Rockshelter`, `Grimes Point`), major wetland village clusters (`Stillwater Marsh` `480`, `Lovelock Cave` `350`, `Pyramid Lake Paiute Village` `320`, `Walker Lake Paiute Village` `240`) and high-Sierra summer fishing camps (`Lake Tahoe (Tahoe Reach)` `190`, `Martis Valley` `140`, `Genoa Fort` `115`, `King's Beach Washoe Village` `85`) [@kelly2001marsh].

### Central Nevada Valleys, Owens Valley and Mojave Endorheic Basin

Covering `56.123 km²` (`15,6%` of HU 16) along the eastern Sierra shadow and central Nevada basin-and-range corridors, the southern sub-region grew from `150` in `10000BC` (`0,27` per `100 km²`) and `2k` in `5000BC` to `7,2k` at `0AD`, `10,7k` in `800AD` and `11,6k` (`18,0%` share) in `1100AD`.

Dropping less sharply to `9k` in `1300AD` (`-22,4%`), Owens Valley, Mono-Bridgeport basins and central Nevada piñon uplands recovered fastest of all three zones, climbing to `9,6k` in `1400AD`, `10,5k` in `1500AD` and an all-time maximum of `12k` (`21,38` per `100 km²`, `19,8%` share) in `1600AD` [@lawton1976owens; @bettinger1982numic]. Here, Paiute groups diverted snowmelt creeks through earth ditches onto wild nut-grass and seed plots (`Bridgeport Valley Village` `135`), creating dense village-band territories anchored along the Sierra front [@lawton1976owens; @andreae2020geochemical].

<figure class="crd-table-figure" id="tab:density-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">0AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lake Bonneville, Bear River &amp; Wasatch Oasis (Fremont)</strong></td><td class="crd-td">0,24</td><td class="crd-td">11,75</td><td class="crd-td">20,37</td><td class="crd-td">22,33</td><td class="crd-td">13,71</td><td class="crd-td">19,2</td></tr>
<tr><td class="crd-td"><strong>Humboldt Sink, Lake Lahontan &amp; Carson-Truckee Corridor</strong></td><td class="crd-td">0,17</td><td class="crd-td">7,79</td><td class="crd-td">12,43</td><td class="crd-td">13,67</td><td class="crd-td">10,17</td><td class="crd-td">13,56</td></tr>
<tr><td class="crd-td"><strong>Central Nevada Valleys, Owens Valley &amp; Mojave Endorheic Basin</strong></td><td class="crd-td">0,27</td><td class="crd-td">12,83</td><td class="crd-td">19,07</td><td class="crd-td">20,67</td><td class="crd-td">16,04</td><td class="crd-td">21,38</td></tr>
<tr><td class="crd-td"><strong>Great Basin HU 16 Total</strong></td><td class="crd-td">0,21</td><td class="crd-td">9,98</td><td class="crd-td">16,27</td><td class="crd-td">17,82</td><td class="crd-td">12,33</td><td class="crd-td">16,77</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population density (persons per 100 km²) across Great Basin HU 16 at selected Holocene benchmarks.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:shares-great-basin">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-basin/fig3_great_basin_shares.png" alt="fig:shares-great-basin" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional percentage shares of total population across Great Basin HU 16 from 10000BC to 1600AD.</figcaption>
</figure>

## Settlement Hierarchy and Marshland Persistence

The `63` catalogued sites (`187` benchmark observations spanning `9500BC` to `1600AD`) span four states (`32` in Utah, `26` in Nevada, `4` in California and `1` in Idaho; `Table` \ref{tab:coverage-great-basin} and `Table` \ref{tab:states-great-basin}). Twenty-eight sites originate prior to `0AD` (`44,4%`), reflecting the exceptional archaeological visibility of deeply stratified dry desert caves, while `20` begin between `0AD` and `999AD` and `15` enter from `1000AD` onward. Peak sizes span from `25` at `Fishbone Cave` (`4000BC`) and `30` at early rockshelters (`Bonneville Estates`, `Kachina Cave`, `Spirit Cave`) to `1.060` across the four premier Fremont villages (`Backhoe Village`, `Five Finger Ridge`, `Nephi Mounds`, `Pharo Village`), with a median settlement peak of `75` inhabitants.

Unlike the Northern Plains or Arizona, where nucleated towns above `1k` residents accounted for a substantial fraction of late-prehistoric totals, Great Basin site totals remained dispersed across dozens of medium-sized oasis hamlets and wetland camps. At `1600AD`, the `6` catalogued settlements carrying explicit terminal benchmark counts total `1.972` persons (`3,3%` of the `60,5k` basin total), confirming that over `96%` of contact-era Great Basin inhabitants lived in dispersed family bands, seasonal piñon camps and uncatalogued small marsh hamlets distributed across the dasymetric kriging surface [@bettinger1982numic; @kelly2001marsh].

<figure class="crd-table-figure" id="tab:coverage-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Obs.</th><th class="crd-th">Pre-0AD</th><th class="crd-th">1000AD+</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lake Bonneville, Bear River &amp; Wasatch Oasis (Fremont)</strong></td><td class="crd-td">36</td><td class="crd-td">57,1%</td><td class="crd-td">116</td><td class="crd-td">8</td><td class="crd-td">9</td><td class="crd-td">Backhoe Village (1,1k)</td></tr>
<tr><td class="crd-td"><strong>Humboldt Sink, Lake Lahontan &amp; Carson-Truckee Corridor</strong></td><td class="crd-td">26</td><td class="crd-td">41,3%</td><td class="crd-td">69</td><td class="crd-td">20</td><td class="crd-td">5</td><td class="crd-td">Stillwater Marsh (480)</td></tr>
<tr><td class="crd-td"><strong>Central Nevada Valleys, Owens Valley &amp; Mojave Endorheic Basin</strong></td><td class="crd-td">1</td><td class="crd-td">1,6%</td><td class="crd-td">2</td><td class="crd-td">0</td><td class="crd-td">1</td><td class="crd-td">Bridgeport Valley Village (135)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Distribution of the 63 catalogued settlements, observations, chronological starts and leading sites across HU 16 sub-regions.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:states-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">State</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Utah</strong></td><td class="crd-td">32</td><td class="crd-td">50,8%</td><td class="crd-td">97</td><td class="crd-td">Backhoe Village (1,1k)</td></tr>
<tr><td class="crd-td"><strong>Nevada</strong></td><td class="crd-td">26</td><td class="crd-td">41,3%</td><td class="crd-td">73</td><td class="crd-td">Stillwater Marsh (480)</td></tr>
<tr><td class="crd-td"><strong>California</strong></td><td class="crd-td">4</td><td class="crd-td">6,3%</td><td class="crd-td">12</td><td class="crd-td">Lake Tahoe (Tahoe Reach) (190)</td></tr>
<tr><td class="crd-td"><strong>Idaho</strong></td><td class="crd-td">1</td><td class="crd-td">1,6%</td><td class="crd-td">5</td><td class="crd-td">Weston Canyon Rockshelter (110)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Jurisdictional distribution of the 63 catalogued settlements across the four states intersecting Great Basin HU 16.</figcaption>
</figure>

# Limitations

Four limitations affect demographic precision in Great Basin HU 16. First, high-mobility family groups traversing central Nevada valleys left sparse surface lithic scatters lacking datable hearth charcoal relative to Bonneville Fremont pithouses and Carson Sink wetlands [@robinson2024intermountain; @kelly2001marsh]. As a result, `Central Nevada Valleys, Owens Valley & Mojave Endorheic Basin` contains only `1` catalogued settlement (`Bridgeport Valley Village`), leaving southern sub-regional totals anchored mainly to radiocarbon distributions and ethnohistorical irrigated-meadow carrying capacities [@lawton1976owens].

Second, historic agricultural water diversions, playa wind deflation and twentieth-century reservoir construction eroded marsh-edge residential floors around Stillwater Marsh and Humboldt Sink [@kelly2001marsh]. Early twentieth-century drainage projects lowered water tables and obscured shallow brush-house floors that once surrounded shallow Lahontan basins.

Third, the Utah-Arizona-Nevada hydrological divide crosses Fremont cultural zones shared with Upper Colorado HU 14 and Arizona HU 15, requiring `300 km` cross-frontier conditioning buffers along the Wasatch Plateau [@finley2020fremont]. Without continuous cross-basin conditioning, edge-feathering artefacts would distort valley density along the Sevier-Colorado divide.

Fourth, the four leading Fremont centres (`Backhoe Village`, `Five Finger Ridge`, `Nephi Mounds`, `Pharo Village`) all share a `1.060`-person standardised village tier ceiling in the gazetteer, flattening site-by-site variance at the top of the Utah hierarchy. Detailed pithouse-contemporaneity syntheses across individual Sevier and San Rafael valleys can refine those upper-tier estimates in subsequent releases.

# Conclusion

Great Basin Hydrological Unit 16 reveals a resilient arid-basin demography shaped by marshland buffering and late prehistoric subsistence switching. Rising steadily from `750` in `10000BC` to `36k` in `0AD`, population peaked at `64,3k` in `1100AD` during the zenith of Wasatch-Parowan Fremont maize villages (`28,5k`) and Lahontan wetland bases (`24,2k`).

Two demographic lessons stand out from the Great Basin sequence. First, endorheic marshlands and piñon-juniper belts offered far greater ecological shock absorption than upland dryland maize: although thirteenth-century megadroughts reduced basin numbers by `30,8%` to `44,5k` in `1300AD` - eliminating maize cultivation across Utah - broad-spectrum Numic piñon harvesting, desert wetland foraging and Owens-Sierra meadow irrigation drove a strong recovery to `60,5k` by `1600AD`, led by rising density in the southern valleys (`21,38` per `100 km²`).

Second, grounding `N = 1.768` calibrated radiocarbon dates inside `93.358` multi-registry North American site-periods (`4.457` catchments, `14,12x` baseline; $\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04`, $R^2 = 0,999$) and `63` reconciled settlements (`66` candidates) captures both the Bonneville-Fremont agrarian collapse and the late-prehistoric Numic demographic rebound without artificial border seams.

# Sources

<div id="refs"></div>
