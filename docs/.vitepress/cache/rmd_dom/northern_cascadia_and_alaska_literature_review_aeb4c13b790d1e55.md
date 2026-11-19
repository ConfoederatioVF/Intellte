---
title: "Pre-Columbian Northern Cascadia and Alaska: Marine Chiefdoms, Subarctic Fishers and Arctic Adaptations"
subtitle: "CENTAUR-II: Pacific Northwest Coast, Interior Yukon and Arctic Alaska, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: northern_cascadia_and_alaska_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northern_cascadia_and_alaska_spatial.png"
hero_caption: "Five ecological divisions and 195 catalogued settlements across Northern Cascadia and Alaska (2,80M km²) from 10000BC to 1600AD, contrasting dense Northwest Coast marine foraging zones with sparse Yukon-Tanana boreal basins."
hero_label: "fig:hero-northern-cascadia-and-alaska"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Northern Cascadia and Alaska (`2,80M km²`, `71.432` active 5-arcminute cells) supported the densest pre-agricultural populations in northern North America along salmon-rich Pacific fjords, clam-garden archipelagos and upwelling Beringian shelves.

Reconstructed across five ecological divisions under CENTAUR-II from `10000BC` to `1600AD`, regional population rises from `1,35k` in `10000BC` to `25,7k` in `5000BC`, `119,7k` at `0AD` and a pre-contact plateau of `182k` across `1500AD` and `1550AD` (`6,50` persons per `100 km²`), easing slightly to `181,5k` by `1600AD`.

Inhabitants remained heavily concentrated along the southern outer coast and Salish Sea: by `1500AD`, the Salish Sea, Vancouver Island and Fraser-Columbia Plateau (`39,6%`) together with the Inside Passage, Haida Gwaii and Skeena-Nass Coast (`25,3%`) accounted for `64,8%` of total population on `35,3%` of land area, while the Aleutian-Kodiak littoral (`15,4%`) reached the highest sub-regional density (`19,91` persons per `100 km²`).

Spatial disaggregation pairs `195` catalogued settlement trajectories (`196` ledger candidates with `1` duplicate-alias consolidation) with a multi-registry North American radiocarbon composite (`93.358` unique site-periods across `4.457` domestic catchments, `14,12x` baseline density) calibrated via non-stationary Matérn ($\nu = 3/2$) kriging ($\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04`, $R^2 = 0,999$), removing arbitrary provincial and international discontinuities across Alaska, Yukon, British Columbia and Washington.

# Background

## Ecological Asymmetry and Historiographic Context

Northern Cascadia and Alaska span one of the steepest ecological gradients in human prehistory. Whereas interior Yukon and northern Alaska resemble boreal Siberia in low terrestrial primary productivity and seasonal caribou mobility, the glaciated fjord belt from Kodiak Island to Puget Sound couples mild maritime rainfall with immense runs of anadromous Pacific salmon, halibut, herring, sea mammals and intertidal shellfish [@kroeber1939; @ames1999; @campbell2010archaeological].

Earlier continental syntheses often smoothed these contrasts across broad ethnohistoric zones, masking the sharp demographic break between sedentary coastal plank-house towns and sparse interior riverine bands. When coarse carrying-capacity averages are projected uniformly across cordilleran and coastal zones, dense littoral chiefdoms are flattened while subarctic muskeg basins appear artificially uniform.

CENTAUR-II partitions `2.799.503 km²` into five physiographically coherent sub-regions bounded by major watersheds, mountain cordilleras and maritime upwelling shelves (Table \ref{tab:subregions}). Each division tracks a distinct ecological regime across `23` benchmark dates from late-glacial colonisation to protohistoric contact.

## Five Ecological Divisions

### Aleutian Archipelago, Kodiak and Gulf of Alaska Coast

The Aleutian Archipelago, Kodiak and Gulf of Alaska Coast (`140.649 km²`, `5,0%` of regional area) covers volcanic island chains and fjorded southern peninsulas occupied by Unangan (Aleut), Sugpiaq (Alutiiq) and Chugach maritime communities [@laughlin1980; @fitzhugh2003].

Ice-free coastal shelves, dense kelp forests and year-round sea-otter, seal and cod fisheries sustained higher densities here per square kilometre than anywhere else north of Mexico, despite recurrent tectonic subsidence and tsunami hazards along the Aleutian trench [@shennan2018late; @vanderhoek2009role].

### Bering Sea Delta and North Slope Arctic Tundra

North and west of the Alaska Range, the Bering Sea Delta and North Slope Arctic Tundra (`711.635 km²`, `25,4%`) stretches from the Yukon-Kuskokwim wetlands across Seward Peninsula and Kotzebue Sound to the Chukchi and Beaufort whaling capes inhabited by Yup'ik and Inupiat societies [@larsen1948; @mason2016; @tremayne2017late].

Broad coastal deltaic wetlands and bowhead whale migration corridors along sea-ice leads concentrated marine villages along outer headlands, contrasting sharply with sparse seasonal caribou hunting across interior foothills [@tremayne2016large].

### Interior Yukon-Tanana Subarctic Basin

Between the St. Elias-Coast Mountains and the Mackenzie divide lies the Interior Yukon-Tanana Subarctic Basin (`959.539 km²`, `34,3%`), a vast continental sprawl of boreal spruce taiga, permafrost uplands and glacial river valleys held by Northern Athabaskan groups [@holmes2001; @morlan2003].

Long winter freezes and dispersed moose, caribou and freshwater fishery resources kept regional densities low, though alpine ice-patch finds confirm enduring seasonal procurement and trade across coastal mountain passes [@murchie2015investigating].

### Inside Passage, Haida Gwaii and Skeena-Nass Coast

Southward along the Pacific coast, the Inside Passage, Haida Gwaii and Skeena-Nass Coast (`329.620 km²`, `11,8%`) comprises the outer archipelagos and coastal valleys of Tlingit, Haida, Tsimshian and Nuxalk peoples, where deep cedar forests and Prince Rupert Harbour shell middens anchored hereditary house groups [@matson1995; @cui2013ancient; @letham2015holocene].

Sheltered fjords, prolific spring eulachon runs at river mouths and outer-island kelp beds fostered dense multi-lineage towns tied together by canoe navigation and crest-based redistribution [@ames1999].

### Salish Sea, Vancouver Island and Fraser-Columbia Plateau

Finally, the Salish Sea, Vancouver Island and Fraser-Columbia Interior Plateau (`658.060 km²`, `23,5%`) joins the rich sheltered inland sea of Vancouver Island and the Strait of Georgia with winter pit-house canyon settlements along the Fraser and Thompson rivers [@hayden1997; @boyd1999; @holmes2022ancestral].

Warm rain-shadow lowlands, intertidal shellfish terraces and massive sockeye salmon migrations through narrow Fraser canyons sustained the largest regional population cluster north of the Columbia estuary [@campbell2010archaeological].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area km² (Share)</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1500AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Aleutian Archipelago, Kodiak and Gulf of Alaska Coast (Unangan and Sugpiaq)</strong></td><td class="crd-td">140.649 (5%)</td><td class="crd-td">4,2k</td><td class="crd-td">19,5k</td><td class="crd-td">26,2k</td><td class="crd-td">28k</td><td class="crd-td">28k</td><td class="crd-td">19,91</td></tr>
<tr><td class="crd-td"><strong>2. Bering Sea Delta and North Slope Arctic Tundra (Yup'ik and Inupiat)</strong></td><td class="crd-td">711.635 (25,4%)</td><td class="crd-td">2,1k</td><td class="crd-td">12k</td><td class="crd-td">21,8k</td><td class="crd-td">24k</td><td class="crd-td">24k</td><td class="crd-td">3,37</td></tr>
<tr><td class="crd-td"><strong>3. Interior Yukon-Tanana Subarctic Basin (Northern Athabaskan)</strong></td><td class="crd-td">959.539 (34,3%)</td><td class="crd-td">2,9k</td><td class="crd-td">8,2k</td><td class="crd-td">10,9k</td><td class="crd-td">12k</td><td class="crd-td">12k</td><td class="crd-td">1,25</td></tr>
<tr><td class="crd-td"><strong>4. Inside Passage, Haida Gwaii and Skeena-Nass Coast (Tlingit, Haida and Tsimshian)</strong></td><td class="crd-td">329.620 (11,8%)</td><td class="crd-td">7k</td><td class="crd-td">32k</td><td class="crd-td">43k</td><td class="crd-td">46k</td><td class="crd-td">46k</td><td class="crd-td">13,96</td></tr>
<tr><td class="crd-td"><strong>5. Salish Sea, Vancouver Island and Fraser-Columbia Interior Plateau</strong></td><td class="crd-td">658.060 (23,5%)</td><td class="crd-td">9,5k</td><td class="crd-td">48k</td><td class="crd-td">65k</td><td class="crd-td">72k</td><td class="crd-td">71,5k</td><td class="crd-td">10,94</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">2.799.503 (100%)</td><td class="crd-td">25,7k</td><td class="crd-td">119,7k</td><td class="crd-td">166,9k</td><td class="crd-td">182k</td><td class="crd-td">181,5k</td><td class="crd-td">6,5</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional land area, benchmark populations and 1500AD density (persons per 100 km²) across Northern Cascadia and Alaska.</figcaption>
</figure>

## Coastal Mariculture and Marine Resource Management

Coastal intensification sharply differentiates the archaeological record of Northern Cascadia from adjacent boreal regions. Across Haida Gwaii, the Dundas Islands and Quadra Island, intertidal rock-walled clam gardens expanded bivalve productivity by stabilising beach terraces over at least `3.500` to `3.800` years [@smith2019years; @holmes2022ancestral; @letham2015holocene].

Coupled with multi-millennial herring fisheries, tidal stone fish traps and salmon stream stewardship [@campbell2010archaeological; @pinkerton2019reconciling], these engineered marine landscapes supported corporate village lineages capable of absorbing local seismic shocks, river avulsions and mid-Holocene cooling episodes without prolonged demographic collapse.

In contrast, interior and Arctic communities relied on mobile seasonal scheduling tied to caribou migration routes, permafrost thaw-lake fisheries and coastal sea-ice leads [@holmes2001; @tremayne2016large]. Understanding how those two subsistence regimes shifted in relative demographic weight across ten millennia is the central question addressed by this regional reconstruction.

# Methodology

## Sub-Regional Partitioning and Demographic Anchors

Each of the five sub-regional time series spans `23` benchmarks between `10000BC` and `1600AD`. The cadence comprises millennial intervals from `10000BC` to `0AD`, bicentennial steps from `0AD` to `1000AD`, centennial steps through `1500AD` and half-century resolution at `1550AD` and `1600AD`.

Sub-regional benchmark totals combine ethnohistoric carrying-capacity baselines at contact [@kroeber1939; @ubelaker2006] with archaeological house-pit counts, shell-midden volumes and regional radiocarbon summed probability distributions [@kelly2025; @ames1999; @fitzhugh2003].

Every sub-regional estimate carries an explicit symmetric `+/- 8%` uncertainty interval from `10000BC` to `1600AD`, reflecting spread across alternative house-occupancy assumptions and contact-nadir multipliers [@ubelaker2006; @boyd1999].

## Multi-Registry Radiocarbon Composite and Matérn Kriging

Within each sub-regional mask, rural habitation weights derive from a continental North American radiocarbon composite spanning `481.752` active terrestrial 5-arcminute cells. Rather than relying on a single archaeological repository, the underlying point surface integrates global radiocarbon catalogues (`c14bazAAR` and `p3k14c`) [@bird2022p3k14c] with the Canadian Archaeological Radiocarbon Database (`CARD`), United States state site files, Alaska Heritage Resources Survey records, British Columbia site registers, Greenland *Nunniffiit* inventories and cultural resource management syntheses.

After spatial and chronological deduplication by catchment and 200-year bin, the North American composite contains `93.358` unique site-period records distributed across `4.457` domestic Voronoi catchments (`2.678` active inhabited catchments, `60,09%` catchment coverage). This multi-registry integration raises effective observation density to `14,12x` the `c14bazAAR` baseline alone.

Across mainland North America and Greenland, domestic catchments exhibit a median Voronoi radius of `27,36 km` and a 90th-percentile radius of `59,92 km`. To prevent artificial edge drop-offs along the Bering Strait, the Alaska-Yukon frontier and the forty-ninth parallel, `171` cross-frontier buffer catchments condition Chukotka, Kamchatka and northern Washington up to `300 km` beyond the module perimeter.

Biophysical weighted least-squares covariates capture coastal proximity, `13,5 km` fluvial distance decay, terrain slope and ecological zone productivity before 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) residual kriging across `10` Holocene horizons (`10000BC` to `1600AD`), anchored to regional summed probability curves [@kelly2025].

## Settlement Subtraction and Boundary Feathering

To prevent double counting between nucleated villages and dispersed rural populations, `195` catalogued settlement trajectories are extracted from primary monographs and heritage inventories and pinned to exact WGS84 coordinates. At each benchmark year, active settlement populations inside each sub-region are summed and subtracted from the sub-regional total.

The remaining rural population is then allocated across non-settled pixels in proportion to the kriged surface inside the areal mask. Two passes of a 4-pixel separable smoothing filter across sub-regional and inter-module borders eliminate artificial step cliffs across the Coast Mountains, the Alaska-Yukon meridian and the British Columbia-Washington divide.

# Testing and Validation

Three quantitative checks govern the Northern Cascadia and Alaska module prior to compilation:

1. **Variogram Sharpness and Fit**: Across all `10` Holocene horizons of the North American Matérn ($\nu = 3/2$) surface, the dimensionless short-range scale parameter holds at $\tau_1 = 1,41$ (`1,4144`, well below the `1,80` ceiling) and the secondary scale $\tau_2 = 2,62$ (`2,6166`), with raw nugget-to-sill equal to `0,000` (`0,04` after log-variance regularisation, far below the `0,45` ceiling). Weighted least-squares covariates remain active across all horizons, yielding residual $R^2$ values of `0,999` (`0,9991` to `0,9993`), summarised by horizon in Table \ref{tab:kriging}.
2. **Gazetteer and Ledger Reconciliation**: Cross-checking the `195` included settlement records against the `196` candidates in the source ledger confirms `0` unaccounted records, `0` coordinate bounding-box violations and `1` explicitly documented duplicate-alias consolidation (`Cape Krusenstern` merged within `2 km` into the canonical site record). Sub-regional coverage spans all five divisions: `25` sites in Aleutians-Kodiak, `43` in Arctic Alaska, `30` in Interior Yukon-Tanana, `51` along the Inside Passage and Outer Coast and `46` across the Salish Sea and Fraser-Columbia Plateau.
3. **Cross-Frontier Seam Continuity**: Cross-border transitions linking Northern Cascadia and Alaska with Northern Canada and Greenland to the northeast, the Canadian Prairies to the east and the Pacific Northwest hydrological unit to the south exhibit smooth coastal and riverine density gradients without rectilinear boundary artifacts.

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

# Results

## Early Holocene Colonisation and Beringian Refugia (10000BC to 5000BC)

### Beringian Interior Corridors and Refugia

During the terminal Pleistocene and Early Holocene, the ice-free interior valleys of eastern Beringia and the emerging Pacific littoral formed two contrasting colonisation fronts. In `10000BC`, regional population stood at `1,35k` (`1,24k` to `1,46k`), still tethered to the unglaciated steppe-tundra of the Yukon and Tanana drainage rather than the glaciated fjords to the south.

Interior Yukon-Tanana (`450`) and Bering-North Slope (`400`) hunter-gatherers together accounted for nearly two-thirds of the initial regional total. Their seasonal camps clustered along bluff overlooks and river confluences at Swan Point (`150`), Broken Mammoth (`55`), Little John (`45`) and Bluefish Caves (`20`), followed soon after by Healy Lake (`95` from `9500BC`) and Dry Creek (`45` from `9800BC`) [@holmes2001; @morlan2003; @cook1996].

Along the outer coast, early marine foragers followed the retreating Cordilleran ice margin across emerging islands and drowned shelves. Even in `10000BC`, small littoral bands already numbered `250` inhabitants on the Aleutian-Kodiak shelf, `150` along the Inside Passage and `100` in the Salish-Fraser corridor [@ames1999; @mobley1988holocene].

### Post-Glacial Warming and Pacific Littoral Shift

As post-glacial warming opened interior valleys and stabilised outer-coast fjords, total population doubled from `1,35k` in `10000BC` to `2,6k` in `9000BC` and more than tripled again to `8,9k` by `7000BC`. Over these three millennia, demographic momentum shifted decisively away from Beringian grasslands toward the Pacific rim.

On the Aleutian-Kodiak shelf, blade-and-microblade marine foragers settled Anangula (`60` at `6500BC`) and Chaluka (`520` peak span from `6500BC`), alongside Ugashik Narrows (`160` from `7000BC`) and Ocean Bay (`95` from `4500BC`) [@laughlin1980; @vanderhoek2009role]. Year-round sea-mammal hunting, sea-bird rookeries and ice-free headlands gave these maritime settlements an ecological buffer rarely matched in interior caribou country.

Along the central and northern British Columbia coast, shell-midden occupation began at Kilgii Gwaay (`40` at `8500BC`), On Your Knees Cave (`25` at `8300BC`), Ground Hog Bay 2 (`75` at `8000BC`) and Namu (`8500BC` onward) [@matson1995; @campbell2010archaeological]. Farther south, early Fraser Canyon salmon fishing at Milliken (`7500BC`) and Glenrose Cannery (`6500BC`) anchored southern riverine corridors as Cordilleran lakes drained.

By `5000BC`, regional population reached `25,7k`, a nineteen-fold increase above the `10000BC` baseline. At that midpoint, Salish-Fraser (`9,5k`, `37,0%`) and the Inside Passage (`7k`, `27,2%`) already held nearly two-thirds of all inhabitants, leaving the Aleutians (`4,2k`), Interior Yukon-Tanana (`2,9k`) and Arctic Alaska (`2,1k`) as slower-growing northern flanks.

## Middle Holocene Maritime Consolidation (4000BC to 1000BC)

### Outer-Coast Shell Middens and Salmon Storage

Between `4000BC` (`37,8k`) and `1000BC` (`96,5k`), stabilised sea levels along Southeast Alaska and northern British Columbia coincided with sustained expansion of Pacific salmon runs and coastal storage economies [@mobley1988holocene; @campbell2010archaeological]. Once estuarine mudflats matured after `4000BC`, annual spawning returns could be smoked, dried and banked across entire extended households.

On the outer coast and Dundas Islands archipelago, shell-midden hamlets proliferated into permanent winter villages such as Boardwalk (`2500BC` onward, rising to `560` peak), Hidden Falls (`160`), Laxgalts'ap (`1000BC` onward) and Lachane (`1000BC` onward) [@matson1995; @letham2015holocene]. Ancient mitochondrial DNA recovered from mid-Holocene individuals at Prince Rupert Harbour and Lucy Island confirms long-term local matrilineal continuity across these coastal settlements over several millennia [@cui2013ancient].

### Clam-Garden Mariculture, Pit-Houses and Arctic Foragers

Farther south, mariculture engineering transformed foreshore productivity across sheltered channels. Rock-walled clam gardens along the Salish Sea, Broughton Archipelago and Quadra Island expanded intertidal butter-clam and littleneck habitat from at least `1800BC` onward, anchoring multi-family winter villages at Yuquot (`2300BC` onward), Tsawwassen (`2000BC` onward), Marpole (`1000BC` onward) and Scowlitz [@smith2019years; @holmes2022ancestral].

Simultaneously, semi-subterranean winter pit-house aggregates took shape in the Fraser Canyon at Keatley Creek (`1000BC` onward), where wind-funnelled canyon benches made mass salmon drying feasible on an industrial scale [@hayden1997]. Farther north, Kachemak and Ocean Bay maritime villages lifted Aleutian-Kodiak numbers from `6,2k` in `4000BC` to `16,5k` in `1000BC` [@fitzhugh2003].

Across the far northern tundra, Arctic Small Tool and Denbigh groups pushed Bering and North Slope coastal numbers from `2,8k` in `4000BC` to `8,5k` in `1000BC`. Even in Arctic waters, however, settlement expansion tracked periodic swings in terrestrial caribou biomass alongside marine seal and walrus productivity [@tremayne2016large; @tremayne2017late].

## Late Holocene Chiefdoms, Plateau Villages and Arctic Whaling (0AD to 1500AD)

### Regional Consolidation and Alpine Exchange

By `0AD`, Northern Cascadia and Alaska reached `119,7k` inhabitants, almost half of all pre-contact growth after `10000BC` having already occurred before the Christian era. Salish-Fraser held `48k` (`40,1%`) and the Tlingit-Haida-Tsimshian Outer Coast held `32k` (`26,7%`), joined by `19,5k` in Aleutians-Kodiak, `12k` across Bering-North Slope and `8,2k` in Interior Yukon-Tanana.

Over the next fifteen centuries, total population rose more gradually by `52,0%` to `166,9k` in `1000AD` and `182k` in `1500AD`. Rather than pioneering empty landscapes, late Holocene societies deepened social stratification, fortified defensive ridge settlements and intensified inter-regional exchange across coastal passes [@ames1999; @matson1995; @murchie2015investigating]. Cryogenic alpine wooden artefacts and ancient DNA recovered from southern Yukon ice patches attest to durable trade and biological ties linking interior Athabaskan hunters with northern Northwest Coast chiefdoms [@murchie2015investigating].

<figure class="crd-figure-block" id="fig:traj">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-cascadia-and-alaska/fig2_northern_cascadia_and_alaska_trajectory.png" alt="fig:traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Northern Cascadia and Alaska from 10000BC to 1600AD showing total population, +/- 8% uncertainty bounds and five sub-regional series.</figcaption>
</figure>

### Salish Sea, Fraser Canyon and Outer-Coast Towns

In the Salish Sea and Fraser Canyon, plank-house towns and dense pit-house villages reached peak dimensions during the first and early second millennia AD. Marpole peaked at `1,45k` residents (`1500AD`), Keatley Creek reached `1,4k` (`1000AD`), Yuquot climbed from `420` at `0AD` to `1,15k` by `1500AD`, Bridge River hit `820` and Victoria (Cadboro Bay) reached `620` [@hayden1997; @ames1999].

Along the Skeena, Nass and outer archipelagos, Tsimshian, Haida and Tlingit towns anchored corporate lineage territories sustained by monumental red-cedar architecture, salmon storage and intertidal sea gardens. Major winter agglomerations stood at Laxgalts'ap (`920` peak), Gitwangak (`720`), Sitka (`680`), Lax Kw'alaams (`610`), Massett (`580`), Bella Coola (`540`), Wrangell (`520`), Skidegate (`510`) and SGang Gwaay (`480`) [@matson1995; @holmes2022ancestral; @pinkerton2019reconciling].

### Kodiak Villages, Arctic Whalers and Interior Athabaskans

On Kodiak Island and the Alaska Peninsula, Late Kachemak and Koniag intensification lifted Karluk from `300` at `0AD` to `550` in `1000AD` and `820` by `1600AD`. Across neighbouring bays and salmon streams, nucleated villages grew at Izembek (`540` peak), Chaluka (`520` peak), Uyak (`390`), Nushagak (`380`), Naknek (`380`) and Port Moller (`360`) [@fitzhugh2003; @vanderhoek2009role].

Meanwhile, along the Bering Sea and North Slope tundra, Norton, Old Bering Sea, Ipiutak, Birnirk and Thule whaling innovations doubled Arctic Alaska population from `12k` at `0AD` to `21,8k` in `1000AD` and `24k` by `1500AD`. Large coastal whalebone mounds concentrated populations at Utqiagvik (`560` in `1500AD`, `620` peak), Gambell (`580` peak), Wales (`520`), Kukulik (`520`), Cape Krusenstern (`480`) and Kotzebue (`440`) [@larsen1948; @mason2016; @tremayne2017late].

Across the interior Yukon-Tanana taiga, Athabaskan salmon-weir and caribou-fence bands expanded modestly from `8,2k` at `0AD` to `12k` in `1500AD`. Semi-permanent gathering settlements anchored regional circuits at Pauline Cove (`390` peak), Yakutat (`360`), Nuchek (`320`), Nulato (`270`), Fort Yukon (`250`) and Klondike-Tr'ochëk (`220`) [@holmes2001; @tremayne2016large].

<figure class="crd-figure-block" id="fig:shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-cascadia-and-alaska/fig3_northern_cascadia_and_alaska_shares.png" alt="fig:shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population shares across Northern Cascadia and Alaska from 10000BC to 1600AD, showing the shift from Beringian interior bands to coastal Pacific chiefdoms.</figcaption>
</figure>

## Protohistoric Plateau and Early Contact Threshold (1500AD to 1600AD)

Aggregate population across Northern Cascadia and Alaska plateaued at `182k` across `1500AD` and `1550AD` (`6,50` persons per `100 km²`) before declining marginally by `0,27%` (`500` inhabitants) to `181,5k` in `1600AD`. That terminal pause marks the transition from purely endogenous demographic dynamics to indirect continental disturbance.

The slight sixteenth-century dip concentrates entirely in the Salish Sea and Fraser-Columbia Plateau (`72k` to `71,5k`), reflecting early indirect diffusion of Old World pathogens along Columbia-Plateau and Pacific trade corridors ahead of direct European arrival [@campbell1990; @boyd1999; @ubelaker2006]. Farther north, relative geographic insulation preserved pre-contact stability across the Aleutians (`28k`), Arctic Alaska (`24k`), the Tlingit-Haida Outer Coast (`46k`) and Interior Yukon (`12k`) through `1600AD`, leaving `181,5k` regional inhabitants on the eve of seventeenth- and eighteenth-century maritime contact. Table \ref{tab:master} compiles the twenty-three-benchmark regional series with `+/- 8%` uncertainty intervals.

<figure class="crd-table-figure" id="tab:master">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Aleutians</th><th class="crd-th">Arctic AK</th><th class="crd-th">Yukon</th><th class="crd-th">Outer Coast</th><th class="crd-th">Salish-Fraser</th><th class="crd-th">Total</th><th class="crd-th">8 pct Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">250</td><td class="crd-td">400</td><td class="crd-td">450</td><td class="crd-td">150</td><td class="crd-td">100</td><td class="crd-td">1,4k</td><td class="crd-td">1,2k - 1,5k</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">450</td><td class="crd-td">600</td><td class="crd-td">700</td><td class="crd-td">450</td><td class="crd-td">400</td><td class="crd-td">2,6k</td><td class="crd-td">2,4k - 2,8k</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">800</td><td class="crd-td">850</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">5k</td><td class="crd-td">4,6k - 5,3k</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">1,4k</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">8,9k</td><td class="crd-td">8,2k - 9,6k</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">2,6k</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">4,2k</td><td class="crd-td">5,8k</td><td class="crd-td">16,2k</td><td class="crd-td">14,9k - 17,5k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">4,2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,9k</td><td class="crd-td">7k</td><td class="crd-td">9,5k</td><td class="crd-td">25,7k</td><td class="crd-td">23,6k - 27,8k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">6,2k</td><td class="crd-td">2,8k</td><td class="crd-td">3,8k</td><td class="crd-td">10,5k</td><td class="crd-td">14,5k</td><td class="crd-td">37,8k</td><td class="crd-td">34,8k - 40,8k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">9,5k</td><td class="crd-td">3,8k</td><td class="crd-td">4,8k</td><td class="crd-td">15,5k</td><td class="crd-td">21k</td><td class="crd-td">54,6k</td><td class="crd-td">50,2k - 59k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">13k</td><td class="crd-td">6k</td><td class="crd-td">5,8k</td><td class="crd-td">21k</td><td class="crd-td">29k</td><td class="crd-td">74,8k</td><td class="crd-td">68,8k - 80,8k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">16,5k</td><td class="crd-td">8,5k</td><td class="crd-td">7k</td><td class="crd-td">26,5k</td><td class="crd-td">38k</td><td class="crd-td">96,5k</td><td class="crd-td">88,8k - 104,2k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">19,5k</td><td class="crd-td">12k</td><td class="crd-td">8,2k</td><td class="crd-td">32k</td><td class="crd-td">48k</td><td class="crd-td">119,7k</td><td class="crd-td">110,1k - 129,3k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">21k</td><td class="crd-td">14,5k</td><td class="crd-td">8,8k</td><td class="crd-td">34,5k</td><td class="crd-td">52k</td><td class="crd-td">130,8k</td><td class="crd-td">120,3k - 141,3k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">22,5k</td><td class="crd-td">17k</td><td class="crd-td">9,4k</td><td class="crd-td">37k</td><td class="crd-td">56k</td><td class="crd-td">141,9k</td><td class="crd-td">130,5k - 153,3k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">23,8k</td><td class="crd-td">19k</td><td class="crd-td">9,9k</td><td class="crd-td">39k</td><td class="crd-td">59k</td><td class="crd-td">150,7k</td><td class="crd-td">138,6k - 162,8k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">25k</td><td class="crd-td">20,5k</td><td class="crd-td">10,4k</td><td class="crd-td">41k</td><td class="crd-td">62k</td><td class="crd-td">158,9k</td><td class="crd-td">146,2k - 171,6k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">26,2k</td><td class="crd-td">21,8k</td><td class="crd-td">10,9k</td><td class="crd-td">43k</td><td class="crd-td">65k</td><td class="crd-td">166,9k</td><td class="crd-td">153,5k - 180,3k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">26,8k</td><td class="crd-td">22,4k</td><td class="crd-td">11,2k</td><td class="crd-td">43,8k</td><td class="crd-td">66,5k</td><td class="crd-td">170,7k</td><td class="crd-td">157k - 184,4k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">27,2k</td><td class="crd-td">22,9k</td><td class="crd-td">11,5k</td><td class="crd-td">44,5k</td><td class="crd-td">68k</td><td class="crd-td">174,1k</td><td class="crd-td">160,2k - 188k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">27,5k</td><td class="crd-td">23,3k</td><td class="crd-td">11,7k</td><td class="crd-td">45,1k</td><td class="crd-td">69,5k</td><td class="crd-td">177,1k</td><td class="crd-td">162,9k - 191,3k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">27,8k</td><td class="crd-td">23,7k</td><td class="crd-td">11,9k</td><td class="crd-td">45,6k</td><td class="crd-td">71k</td><td class="crd-td">180k</td><td class="crd-td">165,6k - 194,4k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">28k</td><td class="crd-td">24k</td><td class="crd-td">12k</td><td class="crd-td">46k</td><td class="crd-td">72k</td><td class="crd-td">182k</td><td class="crd-td">167,4k - 196,6k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">28k</td><td class="crd-td">24k</td><td class="crd-td">12k</td><td class="crd-td">46k</td><td class="crd-td">72k</td><td class="crd-td">182k</td><td class="crd-td">167,4k - 196,6k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">28k</td><td class="crd-td">24k</td><td class="crd-td">12k</td><td class="crd-td">46k</td><td class="crd-td">71,5k</td><td class="crd-td">181,5k</td><td class="crd-td">167k - 196k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Twenty-three-benchmark population series for Northern Cascadia and Alaska (10000BC to 1600AD) with +/- 8% aggregate bounds.</figcaption>
</figure>

# Limitations

## Survey Bias and Interior Taiga Sampling

Four structural constraints qualify the Northern Cascadia and Alaska reconstruction. First, archaeological radiocarbon density concentrates heavily along accessible highway corridors, hydroelectric reservoirs, oil-pipeline transects and coastal cultural resource surveys in southern British Columbia and south-central Alaska [@bird2022p3k14c; @holmes2001].

Interior Yukon-Tanana muskeg, high alpine glaciers and remote western Aleutian islands remain comparatively under-sampled [@vanderhoek2009role]. Although non-stationary Matérn kriging borrows covariance strength across `4.457` domestic catchments and `171` cross-frontier buffers, low-density taiga basins still retain wider relative interpolation variance than coastal shell-midden zones.

## Eustatic Submergence, Reservoir Offsets and Interval Width

Second, relative sea-level fluctuations, glacio-isostatic rebound in Southeast Alaska and megathrust coseismic subsidence around Kodiak and the Gulf of Alaska have drowned or eroded large stretches of pre-`5000BC` shoreline [@mobley1988holocene; @shennan2018late; @letham2015holocene]. Early coastal populations between `10000BC` and `6000BC` therefore appear lower in terrestrial point inventories than later shell-midden towns perched above modern high-tide marks.

Third, variable marine radiocarbon reservoir offsets (`Delta-R`) across upwelling Aleutian, Bering and Dixon Entrance waters complicate phase boundary precision when marine shell and sea-mammal collagen dates are aggregated into 200-year bins [@tremayne2017late; @fitzhugh2003].

Fourth, the uniform `+/- 8%` intervals around sub-regional benchmarks summarise aggregate ethnohistoric and carrying-capacity uncertainty rather than site-by-site Bayesian floor-area error distributions [@ubelaker2006; @boyd1999]. Improved terrestrial-marine paired dating and intertidal survey will narrow early Holocene coastal confidence bounds in future revisions.

# Conclusion

## Long-Run Maritime Transformation

Northern Cascadia and Alaska trace a ten-millennium transition from sparse late-glacial Beringian hunting bands (`1,35k` in `10000BC`) to one of pre-agricultural North America's most populous maritime zones (`182k` in `1500AD` to `1550AD`, `181,5k` in `1600AD`). Post-glacial warming flipped the continental demographic centre of gravity from steppe-tundra river bluffs toward ice-free Pacific fjords within three millennia.

Coastal intensification around salmon fisheries, clam gardens and sea-mammal hunting created a durable spatial asymmetry. By `1500AD`, the Pacific coast and Salish-Fraser sub-regions held `80,2%` of regional inhabitants on `40,3%` of land area, led by `19,91` persons per `100 km²` along the Aleutian-Kodiak littoral and `13,96` per `100 km²` along the Inside Passage, compared with `1,25` persons per `100 km²` across the Yukon-Tanana boreal interior.

## Composite Synthesis and Protohistoric Threshold

Reconciling `195` catalogued settlements against multi-registry Matérn ($\nu = 3/2$) kriging surfaces calibrated across `93.358` North American site-periods eliminates provincial and international seam artifacts. Adjacent transitions into northern Canada, the Canadian prairies and the Columbia plateau remain continuous without arbitrary border steps.

On the eve of European contact in `1600AD`, northern maritime and subarctic regions remained untouched at peak populations (`28k` Aleutians, `24k` Arctic Alaska, `46k` Outer Coast, `12k` Interior Yukon), while only the Salish-Fraser corridor registered an incipient protohistoric dip (`72k` to `71,5k`).

# Sources

<div id="refs"></div>
