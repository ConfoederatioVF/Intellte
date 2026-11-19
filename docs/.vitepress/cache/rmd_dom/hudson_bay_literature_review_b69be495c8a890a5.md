---
title: "Pre-Columbian Hudson Bay and Boreal Shield: Subarctic Cree, Innu and Caribou Inuit Demography"
subtitle: "CENTAUR-II: Kivalliq Barrens, Hudson-James Lowlands and Ungava-Nunavik, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: hudson_bay_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_hudson_bay_spatial.png"
hero_caption: "Three subarctic and coastal divisions and 89 catalogued settlements across the Hudson Bay and Boreal Shield basin (2,35M km²) from 10000BC to 1600AD."
hero_label: "fig:hero-hudson-bay"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

## Regional Scope and Headline Trajectory

The Hudson Bay and Boreal Shield basin spans `2,35M km²` (`2.346.015 km²`, `52.021` terrestrial 5-arcminute pixels) around the central inland sea of northern North America. Because the Laurentide ice sheet, glacial Lake Agassiz-Ojibway and the marine Tyrrell Sea occupied the basin well into the Early Holocene, this region experienced the latest sustained human colonisation in continental Canada [@dyke2004; @wright1995].

Across three ecological divisions reconstructed under CENTAUR-II, total population remains `0` from `10000BC` through `8000BC` as stagnant ice and meltwater barriers linger over Hudson Bay. Pioneer bands appear around `7000BC` (`450` inhabitants), rise to `1,85k` in `6000BC` and `3,9k` in `5000BC`, reach `14k` in `1000BC` and `16,3k` at `0AD`, and climb steadily through the first millennium to peak at `23k` in `1500AD` to `1550AD` (`0,98` persons per `100 km²`).

By `1600AD`, aggregate numbers ease slightly by `1,52%` (`350` inhabitants) to `22,65k` following early indirect maritime contact along the eastern Strait and southern Boreal borderlands [@kelly2025; @ubelaker2006]. Overall demographic density never approaches temperate river valleys or coastal salmon belts, yet clear sub-regional gradients separate caribou barrens, riverine estuaries and maritime Arctic straits.

## Sub-Regional Composition and Composite Conditioning

In `1500AD`, the Hudson and James Bay Lowlands and Northern Ontario Shield hold `10,5k` inhabitants (`45,7%` of the regional total), paired with `8k` (`34,8%`) across Eastmain, Nunavik and Ungava and `4,5k` (`19,6%`) across the Kivalliq Barren Grounds.

Kivalliq achieves the highest mean density at `1,38` persons per `100 km²` along concentrated caribou crossings, followed by `1,05` in the Lowlands and `0,78` across interior and coastal Québec-Labrador.

Rural background intensity across all uninhabited peatlands and Shield uplands is distributed using a multi-registry North American radiocarbon composite combining `c14bazAAR`, `p3k14c`, `CARD`, State and Provincial registers and Greenland *Nunniffiit* across `93.358` unique site-periods [@bird2022p3k14c; @kelly2025].

Reconciled against `89` catalogued settlements and non-stationary Matérn ($\nu = 3/2$) kriging priors ($\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04`, $R^2 = 0,999$), the Hudson Bay surface transitions smoothly into neighbouring subarctic and Great Lakes basins.

# Background

## Post-Glacial Opening and Historiographic Context

### Late Deglaciation and Marine Transgression

Static continental gazetteers once treated the entire Canadian Shield as an undifferentiated subarctic wasteland with flat, timeless population density [@helm1981; @wright1995]. Yet post-glacial geomorphology imposed sharp chronological lags across the Hudson Bay watershed.

Crustal depression beneath the Laurentide ice dome kept interior lowlands submerged beneath Lake Agassiz-Ojibway and the cold Tyrrell Sea millennia after unglaciated corridors had opened in the west [@dyke2004].

### Isostatic Uplift and Boreal Climate Regimes

Once isostatic rebound drained proglacial lakes and raised fertile beach ridges around James Bay and Keewatin between `7000BC` and `5000BC`, human settlement expanded swiftly along emergent shorelines and fertile river deltas [@pilon1987; @clark1977].

At the same time, rapid Holocene palaeoclimate fluctuations and shifting boreal-tundra ecotones repeatedly reconfigured snow cover, bog expansion, sea-ice break-up and caribou forage across the interior plateau [@matzenbacher2026holocene; @brinkmann2026sedimentary].

## Sub-Regional Structure and Ecological Divisions

CENTAUR-II partitions `2.346.015 km²` of Hudson Bay and Boreal Shield terrain into three hydrographic and ecological divisions whose trajectories appear in Table \ref{tab:subregions}.

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area km² (Share)</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1500AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Kivalliq and Western Hudson Bay Barren Grounds (Caribou Inuit and Sayisi Dene)</strong></td><td class="crd-td">326.116 (13,9%)</td><td class="crd-td">800</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td><td class="crd-td">4,4k</td><td class="crd-td">1,38</td></tr>
<tr><td class="crd-td"><strong>2. Hudson and James Bay Lowlands and Northern Ontario Shield (Swampy Cree and Severn Ojibwe)</strong></td><td class="crd-td">999.205 (42,6%)</td><td class="crd-td">2,2k</td><td class="crd-td">7,9k</td><td class="crd-td">9,9k</td><td class="crd-td">10,5k</td><td class="crd-td">10,3k</td><td class="crd-td">1,05</td></tr>
<tr><td class="crd-td"><strong>3. Eastmain, James Bay East, Nunavik and Ungava Peninsula (Eeyou, Naskapi and Inuit)</strong></td><td class="crd-td">1.020.694 (43,5%)</td><td class="crd-td">900</td><td class="crd-td">5,3k</td><td class="crd-td">7,3k</td><td class="crd-td">8k</td><td class="crd-td">7,9k</td><td class="crd-td">0,78</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">2.346.015 (100%)</td><td class="crd-td">3,9k</td><td class="crd-td">16,3k</td><td class="crd-td">21,4k</td><td class="crd-td">23k</td><td class="crd-td">22,6k</td><td class="crd-td">0,98</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional land area, benchmark populations and 1500AD density (persons per 100 km²) across the Hudson Bay basin.</figcaption>
</figure>

### Kivalliq and Western Hudson Bay Barren Grounds

The Kivalliq and Western Hudson Bay Barren Grounds (`326.116 km²`, `13,9%` of basin area) encompass open lichen tundra, esker complexes and major river crossings around Baker Lake (`Qamani'tuaq`), the Kazan and Thelon basins and the northwestern coast from Eskimo Point to Chesterfield Inlet [@clark1977].

Interior Beverly and Qamanirjuaq caribou herds funnelling across narrow water passages anchored seasonal hunting intercept camps from Shield Archaic and Pre-Dorset times through historic Sayisi Dene and Caribou Inuit adaptations.

On the adjacent coastal archipelago around Roes Welcome Sound and Silumiut, Thule whalers and late winter seal hunters erected semi-subterranean whalebone and sod dwellings near recurring polynyas [@lemoine2003woman; @thompson2011zooarchaeological]. Because caribou crossings and coastal sea-ice leads concentrated scarce biological energy at predictable topographic bottlenecks, Kivalliq attained higher mean human density than the vast southern muskeg.

### Hudson and James Bay Lowlands and Northern Ontario Shield

South and west of Hudson Bay, the Hudson and James Bay Lowlands and Northern Ontario Shield (`999.205 km²`, `42,6%`) combine flat uplifted marine clays drained by the Churchill, Nelson, Hayes, Severn, Winisk, Albany and Moose rivers with rugged Precambrian Shield upland borderlands [@pilon1987; @dawson1983].

Along coastal estuaries, Swampy Cree (`Omushkegowuk`) and Severn Ojibwe bands synchronised annual movements between spring-autumn goose staging marshes, summer sturgeon and whitefish runs and winter inland trapping camps [@stewart2014catch; @pilon1987].

Along the humid southern margin touching Rainy River and northern Lake Superior, richer deciduous-boreal ecotones supported wild rice harvesting, native-copper procurement, Shield rock-art ceremonial sites and Middle-to-Late Woodland Laurel earthwork mounds [@arzigian2008; @martin1999; @arsenault2013aesthetic]. That southern agricultural-foraging buffer accounts for roughly half of the demographic weight inside this large division.

### Eastmain, Nunavik and Ungava Peninsula

East of James Bay, Eastmain, Nunavik and the Ungava Peninsula (`1.020.694 km²`, `43,5%`) bridge forested Eeyou (`Eastmain Cree`) and Innu (`Naskapi-Montagnais`) interior drainage with treeless Hudson Strait and Ungava Bay sealing coastlines [@helm1981; @plumet1994; @cantinsavoie2021actes].

Interior bands depended heavily on caribou intercepts at large upland lakes such as Lake Mistassini, backed by summer anadromous char fisheries and specialised chert-quartzite lithic procurement along Shield portages [@dallaire2010utilisation; @stewart2014catch].

Along northern Nunavik and the Belcher-Ottawa island chains, Dorset and Thule coastal groups cultivated intensive walrus, beluga and ringed-seal subsistence economies at strategic tidal narrows from Ivujivik to Payne Bay and Kuujjuaq [@plumet1994; @higdon2008experimental]. Farther east along the Gulf of St Lawrence and Strait of Belle Isle approach, Blanc-Sablon and Saint-Augustin anchored long-lived Archaic and coastal sealing traditions bridging subarctic Québec with Labrador [@cantinsavoie2021actes].

# Methodology

## Multi-Registry North American Radiocarbon Composite

Point density across unallocated rural peatlands, lakeshores and tundra uplands is governed by the unified North American radiocarbon composite spanning `481.752` terrestrial 5-arcminute cells across the continent [@bird2022p3k14c; @kelly2025].

Rather than relying on a single patchy archive, the composite harmonises `c14bazAAR`, `p3k14c`, the Canadian Archaeological Radiocarbon Database (`CARD`), US State Historic Preservation registers, Canadian provincial inventories and the Greenland *Nunniffiit* national site ledger into `93.358` unique site-periods across `4.457` domestic Voronoi catchments (`14,12x` larger than earlier single-source baselines).

Catchments across North America show a median Voronoi radius of `27,36 km` (`90th` percentile `59,92 km`), with `2.678` active catchments (`60,1%`) informing Holocene population splines across ten analytical horizons from Palaeoindian and Early Archaic through Protohistoric contact.

Within the Hudson Bay basin itself, `171` shared cross-frontier buffers extending up to `300 km` into neighbouring territories link local Shield assays directly to denser Rainy River, Superior and St Lawrence calibration series so boreal sample scarcity never induces artificial cliffs along provincial or national lines.

## Non-Stationary Matérn Kriging and Gazetteer Reconciliation

### Spatial Covariates and Kriging Sharpness

Logged summed-probability curves from Kelly et al. [@kelly2025] and regional Shield sequences calibrate non-stationary Matérn ($\nu = 3/2$) kriging fields fitted across every 5-arcminute cell.

Across all ten continental horizons, dimensionless range parameter $\tau_1 = 1,41$ ($\tau_2 = 2,62$), raw nugget `0,000`, regularised nugget-to-sill ratio `0,04` and residual pseudo-$R^2 = 0,999$ preserve sub-regional catchment structure without collapsing into smooth featureless bulls-eyes or noisy Voronoi polygons.

### Settlement Partitioning and Uncertainty Envelopes

Fixed nucleated settlements are explicitly partitioned out of the continuous background. Within the Hudson Bay spatial mask (`52.021` cells), all `89` catalogued settlements in `hudson_bay_settlements.json` are subtracted from their enclosing sub-regional totals before residual hunter-gatherer and fishing population is allocated proportionally across rural cells and feathered along borders by two 4-pixel smoothing passes.

Comparative subarctic taphonomic and palaeoecological constraints on bog-preservation, trace-element mobility and aquatic faunal yields further guide regional interpretation [@wright1995; @alvarezmanzaneda2025exploring; @carrier2018insects; @beek2024trace].

Each regional series carries symmetrical `+/- 8%` uncertainty bounds calibrated to pre-contact ethnohistoric carrying-capacity dispersion [@ubelaker2006; @helm1981].

## Non-Stationary Matérn Kriging and Gazetteer Reconciliation

Logged summed-probability curves from Kelly et al. [@kelly2025] and regional Shield sequences calibrate non-stationary Matérn ($\nu = 3/2$) kriging fields fitted across every 5-arcminute cell. Across all ten continental horizons, dimensionless range parameter $\tau_1 = 1,41$ ($\tau_2 = 2,62$), raw nugget `0,000`, regularised nugget-to-sill ratio `0,04` and residual pseudo-$R^2 = 0,999$ preserve sub-regional catchment structure without collapsing into smooth featureless bulls-eyes or noisy Voronoi polygons.

Fixed nucleated settlements are explicitly partitioned out of the continuous background. Within the Hudson Bay spatial mask (`52.021` cells), all `89` catalogued settlements in `hudson_bay_settlements.json` are subtracted from their enclosing sub-regional totals before residual hunter-gatherer and fishing population is allocated proportionally across rural cells and feathered along borders by two 4-pixel smoothing passes. Comparative subarctic taphonomic and palaeoecological constraints on bog-preservation, trace-element mobility and aquatic faunal yields further guide regional interpretation [@wright1995; @alvarezmanzaneda2025exploring; @carrier2018insects; @beek2024trace]. Each regional series carries symmetrical `+/- 8%` uncertainty bounds calibrated to pre-contact ethnohistoric carrying-capacity dispersion [@ubelaker2006; @helm1981].

# Testing and Validation

## Continental Kriging Diagnostics and Stability

Diagnostic inspection confirms strict convergence across the shared North American radiocarbon composite prior to sub-regional extraction. Across all ten Holocene horizons summarized in Table \ref{tab:kriging}, raw nugget-to-sill variance remains `0,000`, regularised nugget-to-sill ratios stay flat at `0,04` (well below the `0,45` rejection cap), dimensionless range scales remain tightly anchored near $\tau_1 = 1,41$ (below the `1,80` upper bound) and residual pseudo-$R^2$ spans `0,9991` to `0,9993`.

<figure class="crd-table-figure" id="tab:kriging">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Holocene Horizon</th><th class="crd-th">Tau 1</th><th class="crd-th">Raw Nugget-Sill</th><th class="crd-th">Regularised Nugget-Sill</th><th class="crd-th">Residual R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Late Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Early Woodland and Formative</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland and Hopewell</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Late Woodland and Dorset</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Early Mississippian and Pueblo II</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Middle Mississippian and Pueblo III</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>Late Precontact (Thule-Oneota)</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact Horizon</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> North American Matérn variogram parameters across ten Holocene horizons from the shared radiocarbon composite.</figcaption>
</figure>

## Ledger Accounting and Inter-Regional Seam Checks

Three module-specific quality checks confirm zero discrepancies at `GMT+0`:

1. **Gazetteer Exhaustiveness**: Cross-checking `hudson_bay_settlements.json` against `hudson_bay_source_ledger.json5` accounts for all `91` regional candidate records, comprising `89` active included settlements (`11` in Kivalliq, `34` in Hudson-James Lowlands and `44` in Eastmain-Nunavik) and `2` excluded alias or consolidated entries (`Seahorse Gully` folded into `Churchill-Seahorse Gully`, plus the Minnesota duplicate alias for `Grand Mound`), with zero orphaned records and zero schema errors.
2. **Coordinate Integrity**: Every included entry falls inside Hudson Bay watershed bounds (`48,38` to `64,88` N, `57,12` to `101,33` W), maintains exact non-negative residual rural share across all `23` temporal benchmarks, and eliminates multi-counting between Cree estuarine villages and Archaic coastal stations [@nash1969; @pilon1987].
3. **Cross-Border Seam Continuity**: Perimeter transitions adjoining Northern Canada and Greenland, the Canadian Prairies, the St Lawrence and Great Lakes corridor and Atlantic Canada exhibit smooth kriging gradients along boreal river valleys and Hudson Strait waters without artificial frontier discontinuities [@wright1995; @bird2022p3k14c].

# Results

## Early Post-Glacial Colonisation and Marine Emergence (10000BC to 5000BC)

### Glacial Barriers and Proglacial Lake Drainage

Between `10000BC` and `8000BC`, persistent Laurentide ice and proglacial Lake Agassiz-Ojibway prevented permanent human habitation inside the Hudson Bay perimeter. Basin population held at `0` while western Prairies and Alaska were already thinly peopled [@dyke2004].

Rapid catastrophic drainage of glacial lakes around `7500BC` to `6500BC`, accompanied by fast isostatic uplift of Tyrrell Sea beaches, opened fresh pioneer pathways from both the upper Great Lakes and the Atlantic Strait [@wright1995; @dawson1983].

### Early Pioneer Horizons (7000BC to 5000BC)

By `7000BC`, early Shield Archaic and Plano-tradition bands reached `450` regional inhabitants. That initial foothold comprised `300` hunters along southern Ontario Shield river outlets and `150` pioneers moving onto newly exposed western Barren Grounds, anchored by lithic workshops at Cummins Site (`7500BC` onward, `95` peak) on northwestern Lake Superior [@dawson1983; @wright1995].

Expansion accelerated rapidly during the sixth millennium as total population grew fourfold to `1,85k` in `6000BC`. Interior caribou hunters first established `Migod` (`110` peak) in Kivalliq (`6000BC` onward), while maritime groups colonised Eastmain-Ungava (`300`), led along the Gulf-Strait approach by `Blanc-Sablon` (`5500BC` onward, `260` peak) [@clark1977; @cantinsavoie2021actes].

By `5000BC`, post-glacial forests stabilised across emerging lowland clay plains and `Wapekeka` (`5100BC` onward, `135` peak) and `Saint-Augustin (Québec)` (`5000BC` onward, `180` peak) came into regular seasonal use. Regional totals climbed to `3,9k` inhabitants.

Even at that early juncture, the broad Hudson-James Lowlands and Superior Shield margin already held `2,2k` people (`56,4%`), ahead of Eastmain-Nunavik (`900`) and Kivalliq (`800`) [@pilon1987; @matzenbacher2026holocene].

## Middle Holocene Boreal Shield and Arctic Small Tool Networks (4000BC to 1000BC)

### Boreal Forest Maturation and Shield Exchange

From `4000BC` (`6,3k`) through `3000BC` (`8,8k`) and `2000BC` (`11,5k`), maturing spruce-lichen woodlands and richer aquatic habitats propelled steady demographic growth across all three sub-regions.

Along Lake Abitibi (`2500BC` onward, `190` peak) and Lake Mistassini (`Temiscamie`, `2000BC` onward, `220` peak), mobile Algonquian progenitors linked long-distance quartz, quartzite and Lake Superior native copper exchange networks with reliable whitefish and sturgeon weir harvests [@martin1999; @dallaire2010utilisation].

### Arctic Small Tool Expansion Across Northern Straits

At the northern tundra margin around `2000BC` to `1000BC`, an eastward pulse of Arctic Small Tool and Pre-Dorset marine hunters transformed previously sparse coastal straits into productive sealing territories [@nash1969; @plumet1994].

Raised Tyrrell Sea beach ridges at `Churchill-Seahorse Gully` (`1000BC` onward, `320` peak), `Ivujivik-Nuvuk` (`1000BC` onward, `350` peak), `Moose Factory-Moosonee` (`1000BC` onward, `320` peak) and `Ennadai Lake` (`1500BC` onward, `125` peak) sustained recurring seasonal aggregations tied to coastal seal break-up and inland caribou crossings [@nash1969; @clark1977; @lemoine2003woman].

By `1000BC`, regional population reached `14k`, more than three times the `5000BC` figure. This surge reflected the dual synergy of Woodland Shield trade routes in the south and Palaeo-Eskimo coastal intensification across northern straits [@wright1995; @plumet1994]. Figures \ref{fig:traj} and \ref{fig:shares} chart this long-term structural trajectory across the basin.

<figure class="crd-figure-block" id="fig:traj">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hudson-bay/fig2_hudson_bay_trajectory.png" alt="fig:traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of the Hudson Bay and Boreal Shield basin from 10000BC to 1600AD showing post-glacial emergence after 8000BC and +/- 8% bounds.</figcaption>
</figure>

## Woodland Mounds, Cree Estuaries and Thule Expansion (0AD to 1500AD)

### Rainy River Mounds and Lowland Cree Estuaries

By `0AD`, Hudson Bay population stood at `16,3k` (`7,9k` in Hudson-James Lowlands, `5,3k` in Eastmain-Nunavik and `3,1k` in Kivalliq). Over the next millennium and a half, growth moderated from frontier doubling rates into denser ecological infill, climbing `31,3%` to `21,4k` in `1000AD` and reaching a pre-contact ceiling of `23k` across `1500AD` and `1550AD`.

Along the southern Shield-prairie ecotone, Middle Woodland Laurel ceremonial mound centres at `Grand Mound` (`450` peak, `200BC` to `1200AD`) and `Kay-Nah-Chi-Wah-Nung` (`440` peak, `500BC` to `1500AD`) represented the highest localised densities in the watershed. These southern centres underwrote multi-band wild-rice harvests, copper redistribution and burial ritual along Rainy River [@arzigian2008; @martin1999].

Meanwhile, downstream across the Severn, Nelson and Moose lowlands, Selkirk-Blackduck pottery traditions associated with ancestral Cree fishers sustained persistent estuarine summer camps at `Churchill-Seahorse Gully` (`320`), `Moose Factory-Moosonee` (`320`), `Nelson River-York Factory` (`310`, `0AD` onward) and `Pic River` (`230`) [@pilon1987; @stewart2014catch].

### Dorset-Thule Transition and Northern Coastal Stations

North of the treeline, the classic Dorset-to-Thule transition between `1000AD` and `1300AD` introduced sled dogs, umiak whaling and reinforced winter stone-and-whalebone housing along Hudson Strait and northwestern Hudson Bay [@plumet1994; @lemoine2003woman; @thompson2011zooarchaeological].

Larger semi-sedentary winter coastal stations took root at `Ivujivik-Nuvuk` (`350`), `Silumiut` (`340`), `Arvia'juaq` (`310`), `Chesterfield Inlet (Igluligaarjuk)` (`290`), `Baker Lake (Qamani'tuaq)` (`280`) and `Kuujjuaq (Ungava)` (`280`). Additional Arctic and Cree shoreline hubs developed at `Salluit` (`270`), `Inukjuak` (`260`), `Fort George (Chisasibi)` (`250`), `Kamarvik` (`250`), `Kuujjuarapik` (`240`) and `Ivujivik (Tayara)` (`220`) [@clark1977; @plumet1994; @higdon2008experimental].

Together, these northern coastal and barrens communities pushed Kivalliq to `4,2k` in `1000AD` and `4,5k` in `1500AD`. Across the eastern divide, Eastmain-Nunavik rose smoothly from `7,3k` in `1000AD` to `8k` in `1500AD`.

<figure class="crd-figure-block" id="fig:shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hudson-bay/fig3_hudson_bay_shares.png" alt="fig:shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population composition across the Hudson Bay basin from 7000BC to 1600AD.</figcaption>
</figure>

## Protohistoric Stagnation and Early Shoreline Contact (1500AD to 1600AD)

Across `1500AD` and `1550AD`, total Hudson Bay population held flat at its `23k` pre-contact plateau (`0,98` persons per `100 km²`). Sub-regional carrying capacities remained bounded by cold peatlands, short frost-free seasons and cyclical swings in woodland caribou and snowshoe-hare populations [@helm1981; @pilon1987; @igloliorte2006influence]. Sub-regional shares stabilised near `45,7%` in the Lowlands (`10,5k`), `34,8%` in Eastmain-Nunavik (`8k`) and `19,6%` in Kivalliq (`4,5k`).

Between `1550AD` and `1600AD`, regional totals dipped marginally by `1,52%` (`350` people) to `22,65k`. Early Old World disease spillovers radiating northward from St Lawrence and Great Lakes trade arteries lowered Hudson-James Lowlands numbers from `10,5k` to `10,3k`.

At the same time, early Basque and northern fishing contacts alongside cold Little Ice Age shifts nudged Eastmain-Nunavik from `8k` to `7,9k` and Kivalliq from `4,5k` to `4,45k` [@ubelaker2006; @kelly2025]. Table \ref{tab:master} compiles all twenty-three temporal benchmarks with symmetrical `+/- 8%` uncertainty bounds.

<figure class="crd-table-figure" id="tab:master">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Kivalliq Barrens</th><th class="crd-th">Hudson-James Cree</th><th class="crd-th">Eastmain-Nunavik</th><th class="crd-th">Total</th><th class="crd-th">8 pct Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0 - 0</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0 - 0</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0 - 0</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">150</td><td class="crd-td">300</td><td class="crd-td">0</td><td class="crd-td">450</td><td class="crd-td">414 - 486</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">450</td><td class="crd-td">1,1k</td><td class="crd-td">300</td><td class="crd-td">1,8k</td><td class="crd-td">1,7k - 2k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">800</td><td class="crd-td">2,2k</td><td class="crd-td">900</td><td class="crd-td">3,9k</td><td class="crd-td">3,6k - 4,2k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">1,2k</td><td class="crd-td">3,4k</td><td class="crd-td">1,7k</td><td class="crd-td">6,3k</td><td class="crd-td">5,8k - 6,8k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">1,6k</td><td class="crd-td">4,6k</td><td class="crd-td">2,6k</td><td class="crd-td">8,8k</td><td class="crd-td">8,1k - 9,5k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">2,1k</td><td class="crd-td">5,8k</td><td class="crd-td">3,6k</td><td class="crd-td">11,5k</td><td class="crd-td">10,6k - 12,4k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">2,6k</td><td class="crd-td">6,9k</td><td class="crd-td">4,5k</td><td class="crd-td">14k</td><td class="crd-td">12,9k - 15,1k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">3,1k</td><td class="crd-td">7,9k</td><td class="crd-td">5,3k</td><td class="crd-td">16,3k</td><td class="crd-td">15k - 17,6k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">3,4k</td><td class="crd-td">8,4k</td><td class="crd-td">5,8k</td><td class="crd-td">17,6k</td><td class="crd-td">16,2k - 19k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">3,6k</td><td class="crd-td">8,9k</td><td class="crd-td">6,2k</td><td class="crd-td">18,7k</td><td class="crd-td">17,2k - 20,2k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">3,8k</td><td class="crd-td">9,3k</td><td class="crd-td">6,6k</td><td class="crd-td">19,7k</td><td class="crd-td">18,1k - 21,3k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">4k</td><td class="crd-td">9,6k</td><td class="crd-td">7k</td><td class="crd-td">20,6k</td><td class="crd-td">19k - 22,2k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">4,2k</td><td class="crd-td">9,9k</td><td class="crd-td">7,3k</td><td class="crd-td">21,4k</td><td class="crd-td">19,7k - 23,1k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">4,3k</td><td class="crd-td">10,1k</td><td class="crd-td">7,5k</td><td class="crd-td">21,9k</td><td class="crd-td">20,1k - 23,7k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">4,3k</td><td class="crd-td">10,2k</td><td class="crd-td">7,7k</td><td class="crd-td">22,3k</td><td class="crd-td">20,5k - 24,1k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">4,4k</td><td class="crd-td">10,3k</td><td class="crd-td">7,8k</td><td class="crd-td">22,6k</td><td class="crd-td">20,8k - 24,4k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">4,4k</td><td class="crd-td">10,4k</td><td class="crd-td">8k</td><td class="crd-td">22,9k</td><td class="crd-td">21k - 24,7k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">4,5k</td><td class="crd-td">10,5k</td><td class="crd-td">8k</td><td class="crd-td">23k</td><td class="crd-td">21,2k - 24,8k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">4,5k</td><td class="crd-td">10,5k</td><td class="crd-td">8k</td><td class="crd-td">23k</td><td class="crd-td">21,2k - 24,8k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">4,4k</td><td class="crd-td">10,3k</td><td class="crd-td">7,9k</td><td class="crd-td">22,6k</td><td class="crd-td">20,8k - 24,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Twenty-three-benchmark population series for the Hudson Bay and Boreal Shield basin (10000BC to 1600AD) with +/- 8% aggregate bounds.</figcaption>
</figure>

# Limitations

## Acidic Podzols, Isostatic Uplift and Boreal Mobility

Three structural constraints qualify the Hudson Bay reconstruction. First, acidic podzol soils and waterlogged peatlands rapidly dissolve uncalcined organic bone across vast tracts of the boreal interior [@wright1995; @bird2022p3k14c]. Consequently, radiocarbon inventories over-represent charcoal from stratified Rainy River mounds, raised sandy marine terraces and dry tundra gravel eskers while under-sampling winter spruce-forest bush camps [@arzigian2008; @clark1977].

Second, extreme post-glacial glacio-isostatic rebound around James Bay and western Hudson Bay uplifted early and middle Holocene coastal sites dozens of kilometres inland behind modern coastal mudflats [@dyke2004; @pilon1987]. Multi-component sequences near modern Churchill, Moose Factory or Kuujjuaq therefore capture late-Holocene estuaries more cleanly than early Archaic littoral camps stranded along inland beach ridges.

## Taphonomy, Marine Offsets and Seasonal Dispersion

Third, high-latitude marine reservoir offsets in cold Arctic currents complicate chronological alignment between coastal Thule sea-mammal dates and terrestrial caribou-antler assays [@plumet1994; @lemoine2003woman]. Palaeoenvironmental proxies from subarctic lakes and peat cores highlight marked decadal variability in forage quality and coastal prey availability that static 100-year to 1.000-year benchmarks smooth out [@matzenbacher2026holocene; @brinkmann2026sedimentary; @carrier2018insects].

Fourth, winter dispersal into small co-residential Cree and Innu hunting bands leaves a larger fraction of regional population in continuous rural kriging cells than in sedentary Pacific Coast plank-house towns [@helm1981; @dallaire2010utilisation]. The uniform `+/- 8%` uncertainty band captures broad ethnohistoric dispersion without attempting site-level probabilistic age-depth error propagation [@ubelaker2006; @stewart2014catch].

# Conclusion

## From Post-Glacial Void to Boreal Equilibrium

Across ten millennia, the Hudson Bay and Boreal Shield basin progressed from complete glacial emptiness (`0` from `10000BC` to `8000BC`) to a resilient subarctic equilibrium of `23k` inhabitants in `1500AD` to `1550AD` (`22,65k` in `1600AD`). Unlike Pacific or eastern Woodland corridors shaped by agricultural crops or massive salmon runs, demographic growth here obeyed tight energetic ceilings set by late deglaciation, peatland soils and migratory caribou herds.

Every sub-region carved out a distinct adaptive niche within that northern envelope. Kivalliq achieved `1,38` persons per `100 km²` on caribou-crossing bottlenecks and Hudson Bay polynyas. The Hudson-James Lowlands averaged `1,05` per `100 km²` by combining estuarine Cree fisheries with fertile Rainy River wild-rice and Laurel mound borderlands, while Eastmain-Nunavik maintained `0,78` per `100 km²` across interior lake fisheries and Strait of Belle Isle-Ungava sealing headlands.

## Continental Synthesis and Edge Continuity

Uniting `89` catalogued settlements with multi-registry North American Matérn kriging ($\nu = 3/2$, $\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04`, $R^2 = 0,999$) calibrated across `93.358` unique site-periods eliminates arbitrary administrative steps along provincial and watershed edges. Smooth continuity links the Hudson Bay subarctic into northern Minnesota, Upper Michigan, Arctic Canada and Atlantic Labrador on the eve of direct seventeenth-century exploration.

# Sources

<div id="refs"></div>
