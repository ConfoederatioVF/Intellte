---
title: "Pre-Columbian Northern Canada and Greenland: Dene Caribou Hunters, Palaeo-Inuit, Thule and Norse Settlers"
subtitle: "CENTAUR-II: Boreal Mackenzie, Arctic Archipelago and Greenland Fjords, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: northern_canada_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northern_canada_spatial.png"
hero_caption: "Five Arctic and subarctic divisions and 982 catalogued settlements across Northern Canada and Greenland (5,04M km²) from 10000BC to 1600AD."
hero_label: "fig:hero-northern-canada"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

## Regional Scope and Trajectory

Covering `5,04M km²` (`197.969` 5-arcminute cells) across the Mackenzie boreal basin, the Canadian Arctic Archipelago and coastal Greenland, Northern Canada and Greenland exhibit the lowest Holocene population densities and latest post-glacial colonisation sequence in CENTAUR-II.

Ice retreat cleared the western Dene corridor first, lifting regional population from `0` in `10000BC` to `150` in `9000BC`, `4,1k` in `5000BC` and `19,2k` at `0AD`. Across the eastern islands and coastal fjords, Arctic Small Tool, Pre-Dorset, Saqqaq and Dorset groups progressively settled polynya hunting hubs across the High Arctic and Greenland [@mcghee1996; @maxwell1985; @jensen2006stone].

## Norse Peak, Recovery and Spatial Method

Norse farmsteads in West and Southwest Greenland (`985AD` to `1400AD`) alongside rapid Thule bowhead-whaling expansion drove the regional series to an all-time pre-modern peak of `36,3k` in `1300AD`.

Little Ice Age cooling and Norse abandonment brought a sharp fourteenth-century dip to `35,4k` in `1400AD`, followed by partial Kalaallit coastal recovery to `36,1k` in `1550AD` and `35,55k` (`0,71` persons per `100 km²`) by `1600AD` [@arneborg2012; @lynnerup1998; @dugmore2005norse].

Spatial allocation reconciles `982` catalogued settlement trajectories (`1.110` ledger candidates with `128` duplicate-alias consolidations) against a multi-registry North American radiocarbon composite. Anchored across `93.358` unique site-periods within `4.457` domestic catchments (`14,12x` baseline density), non-stationary Matérn ($\nu = 3/2$) kriging ($\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04`, $R^2 = 0,999$) preserves coastal-to-interior contrast across all high-latitude islands.

# Background

## Post-Glacial Colonisation and High-Latitude Constraints

### Residual Ice Barriers

Northern Canada and Greenland represent the northernmost demographic frontier of the Western Hemisphere. Residual Laurentide and Innuitian ice sheets covered much of the central archipelago, Keewatin and Foxe Basin well into the Early Holocene, delaying human entry across the eastern islands and Greenland until mid-Holocene warmth opened coastal sea-ice corridors [@mcghee1996; @friesen2016].

### Limits of Earlier Continental Gazetteers

Earlier global syntheses assigned uniformly low trace densities across high-latitude Canada and omitted mediaeval Norse Greenland's demographic pulse altogether. Such coarse abstractions obscured sharp regional contrasts between Mackenzie River subarctic fisheries, polynya-based sea-mammal hunting towns and pastoral Norse fjords.

CENTAUR-II partitions `5.039.286 km²` into five biogeographic divisions shaped by ice-sheet margins, permafrost tundra and polynya marine productivity (Table \ref{tab:subregions}). Each sub-region tracks `23` chronological benchmarks from `10000BC` to `1600AD`.

## Five Physiographic Divisions

### Mackenzie and Peace-Athabasca Boreal Lowlands

The Mackenzie and Peace-Athabasca Boreal Lowlands (`995.903 km²`, `19,8%` of regional area) encompass the Great Bear, Great Slave and Mackenzie river corridors occupied by Northern Dene caribou hunters and lake fishers [@gordon1996; @helm1981].

Early post-glacial deglaciation along the eastern Rocky Mountain foothills opened this subarctic taiga thousands of years ahead of the eastern Arctic islands, allowing continuous inland foraging across sheltered boreal lake basins.

### Central and Western Arctic Tundra and Barrenlands

Eastward, the Central and Western Arctic Tundra and Barrenlands (`901.072 km²`, `17,9%`) span the Beaufort coast, Mackenzie Delta, Coronation Gulf and Barrenlands.

Sub-regional economies ranged from beluga-hunting estuary villages at Kittigazuit and Kuukpak to Copper and Netsilik Inuit winter sealing camps and inland Barrenland caribou intercepts [@morrison1990; @gordon1996].

### Baffin Island, Foxe Basin and High Arctic Archipelago

Across the eastern archipelago, Baffin Island, Foxe Basin and the High Arctic Archipelago (`1.179.293 km²`, `23,4%`) host Dorset walrus-hunting basins and classic Thule winter whaling stations linked across Ellesmere Island and Nares Strait [@maxwell1985; @savelle2002; @schledermann1978preliminary].

Recurrent coastal polynyas in Foxe Basin, Lancaster Sound and Smith Sound prevented winter sea-ice freeze-up, creating concentrated hotspots of ringed seal, walrus and bowhead whale availability [@friesen2016].

### West and Southwest Greenland Fjords

In Greenland, West and Southwest Greenland Fjords (`1.078.060 km²`, `21,4%`) unite Disko Bay Palaeo-Inuit and Kalaallit coastal stations with the mediaeval Norse Eastern and Western Settlements [@gronnow2004; @lynnerup1998; @jensen2006stone].

Sheltered inner-fjord pastures supported Norse dairy and sheep farming from `985AD` to the early fifteenth century, complemented by marine sealing shielings and Disko Bay walrus-ivory expeditions [@arneborg2012; @madsen2019marine; @dugmore2005norse].

### East and High North Greenland

Finally, East and High North Greenland (`884.958 km²`, `17,6%`) track early Independence I-II palaeo-Inuit dispersals around Peary Land and later Tunumiit coastal sealing camps along ice-bound fjords facing the Greenland Sea [@friesen2016; @rice2023they]. Sparse drift-ice accessibility kept coastal occupation here thinner and more episodic than along western Greenland fjords.

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area km² (Share)</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1500AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Mackenzie and Peace-Athabasca Boreal Lowlands (Dene)</strong></td><td class="crd-td">995.903 (19,8%)</td><td class="crd-td">2,8k</td><td class="crd-td">8,2k</td><td class="crd-td">10,8k</td><td class="crd-td">11k</td><td class="crd-td">10,8k</td><td class="crd-td">1,1</td></tr>
<tr><td class="crd-td"><strong>2. Central and Western Arctic Tundra and Barrenlands (Pre-Dorset to Copper/Netsilik Inuit)</strong></td><td class="crd-td">901.072 (17,9%)</td><td class="crd-td">900</td><td class="crd-td">4,2k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">0,72</td></tr>
<tr><td class="crd-td"><strong>3. Baffin Island, Foxe Basin and High Arctic Archipelago (Dorset and Thule)</strong></td><td class="crd-td">1.179.293 (23,4%)</td><td class="crd-td">400</td><td class="crd-td">3,9k</td><td class="crd-td">6k</td><td class="crd-td">6k</td><td class="crd-td">5,9k</td><td class="crd-td">0,51</td></tr>
<tr><td class="crd-td"><strong>4. West and Southwest Greenland Fjords (Kalaallit and Norse Settlements)</strong></td><td class="crd-td">1.078.060 (21,4%)</td><td class="crd-td">0</td><td class="crd-td">2,1k</td><td class="crd-td">10,5k</td><td class="crd-td">9,5k</td><td class="crd-td">9,5k</td><td class="crd-td">0,88</td></tr>
<tr><td class="crd-td"><strong>5. East and High North Greenland (Independence and Tunumiit)</strong></td><td class="crd-td">884.958 (17,6%)</td><td class="crd-td">0</td><td class="crd-td">800</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td><td class="crd-td">3k</td><td class="crd-td">0,34</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">5.039.286 (100%)</td><td class="crd-td">4,1k</td><td class="crd-td">19,2k</td><td class="crd-td">36,3k</td><td class="crd-td">36k</td><td class="crd-td">35,5k</td><td class="crd-td">0,71</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional land area, benchmark populations and 1500AD density (persons per 100 km²) across Northern Canada and Greenland.</figcaption>
</figure>

## Indigenous Toponymy and Environmental Continuity

Modern Inuit placename and environmental knowledge archives illuminate how long-term Arctic occupation tracked sea-ice leads, caribou migration narrows and polynya edges [@peplinski2014accommodating; @karpala2010adapting; @kushwaha2007monitoring].

Traditional knowledge recorded around Igloolik and Cape Dorset preserves precise geographical and ecological baselines that align closely with the spatial clustering of prehistoric Dorset and Thule coastal winter mounds [@karpala2010adapting; @kushwaha2007monitoring].

Similarly, studies of Inuit institutional resilience and demographic welfare across Nunavut and Greenland illustrate the enduring contrast between Greenland's denser coastal fjord settlement network and the dispersed community geography of the Canadian Arctic Archipelago [@gaviria2014inuit; @goldhar2026governing].

# Methodology

## Ice-Mask Exclusion and Benchmark Structure

Because inland ice caps covering central Greenland, Devon Island, Axel Heiberg Island and Ellesmere Island are uninhabitable, demographic allocation is restricted strictly to ice-free coastal ribbons, tundra barrens and boreal lowlands encoded in the regional areal mask.

Sub-regional totals span `23` benchmarks from `10000BC` to `1600AD` and carry symmetric `+/- 8%` uncertainty intervals [@ubelaker2006]. Pre-`0AD` steps proceed at millennial intervals before shifting to 200-year increments through `1000AD`, centennial increments through `1500AD` and fifty-year resolution across the sixteenth century.

Sub-regional trajectories integrate caribou-herd carrying capacities [@gordon1996], Dorset and Thule winter-house counts [@maxwell1985; @savelle2002] and skeletal plus farmstead enumerations from Norse Greenland [@lynnerup1998; @arneborg2012].

## Multi-Registry Radiocarbon Composite and Matérn Kriging

Rural habitation potential across the `481.752` active 5-arcminute cells of mainland North America and Greenland derives from a multi-registry radiocarbon composite. That composite unites global syntheses (`c14bazAAR` and `p3k14c`) [@bird2022p3k14c] with the Canadian Archaeological Radiocarbon Database (`CARD`), United States state archaeological registers, Greenland National Museum *Nunniffiit* site inventories and regional cultural resource management surveys.

Following spatial-chronological deduplication by catchment and 200-year bin, the composite holds `93.358` unique site-period observations across `4.457` domestic Voronoi catchments (`2.678` active inhabited catchments, `60,09%` coverage). This coverage achieves `14,12x` the observation density of `c14bazAAR` alone, with a median catchment Voronoi radius of `27,36 km` and a 90th-percentile radius of `59,92 km`.

To preserve sharp coastal gradients and honour the oceanic barrier separating Baffin-Ellesmere from West Greenland, covariates incorporate smooth coastal proximity, `13,5 km` fluvial decay, terrain slope and explicit Nares Strait channel separation alongside `171` cross-frontier buffer catchments extending `300 km` beyond the continental perimeter. Residual spatial correlation is fitted via 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across `10` Holocene horizons anchored to Kelly et al. [@kelly2025] probability distributions.

## Settlement Subtraction and Border Feathering

From primary Arctic monographs and the Greenland *Nunniffiit* corpus, `982` catalogued settlement trajectories are extracted and pinned to WGS84 coordinates. Overlapping coastal entries within compact fjord systems are reconciled in the source ledger so no headland dwelling cluster is counted twice.

At each benchmark year, catalogued settlement populations are summed within each sub-region and subtracted from the sub-regional target before scaling residual rural pixels inside ice-free land cells and applying two passes of a 4-pixel separable border smoothing filter.

# Testing and Validation

Three quantitative checks govern the Northern Canada and Greenland module prior to compilation:

1. **Variogram Sharpness and Fit**: Across all `10` Holocene horizons of the North American Matérn ($\nu = 3/2$) surface, dimensionless range holds at $\tau_1 = 1,41$ (`1,4144 <= 1,80`) and $\tau_2 = 2,62$ (`2,6166`), with raw nugget-to-sill equal to `0,000` (`0,04` regularised, below the `0,45` ceiling). Weighted least-squares covariates remain active across every horizon, delivering residual $R^2 = 0,999$ (`0,9991` to `0,9993`), shown in Table \ref{tab:kriging}.
2. **Gazetteer and Ledger Reconciliation**: Auditing the `982` included settlements against `1.110` source-ledger candidates yields `128` explicitly documented `duplicate_alias` consolidations across overlapping Greenland *Nunniffiit* coordinates, `0` unaccounted entries and `0` schema errors. Sub-regional coverage comprises `4` Mackenzie Dene sites, `13` Western-Central Arctic sites, `29` Eastern-High Arctic and Baffin sites, `731` West Greenland sites and `205` East and High North Greenland sites.
3. **Seam Continuity**: Southern boundaries bordering Northern Cascadia and Alaska, the Canadian Prairies and Hudson Bay satisfy smooth inter-regional transition tolerances across all `23` benchmark dates without rectilinear cliff artifacts.

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

## Ice Retreat and Mackenzie Subarctic Pioneering (10000BC to 3000BC)

### Early Post-Glacial Mackenzie Settlement

At `10000BC`, lingering Laurentide and Cordilleran ice sheets left Northern Canada and Greenland uninhabited (`0`). As the ice-free Mackenzie corridor widened after `9500BC`, pioneer Northern Archaic and Palaeo-Dene bands entered the western lowlands, lifting population to `150` in `9000BC`, `500` in `8000BC` and `1,2k` in `7000BC` [@gordon1996; @helm1981].

Settlement at Fisherman Lake (`120` peak span from `6500BC`) and along the Great Bear and Great Slave lake outlets anchored caribou interception and whitefish netting across the boreal lowlands. Reliable riverine fisheries buffered small band territories against severe subarctic winters.

### Barrenland Expansion and Glacial Retardation Elsewhere

By `7000BC`, early tundra caribou hunters had also pushed into the Central and Western Arctic Barrenlands (`200`), raising regional population from `2,45k` in `6000BC` to `4,1k` in `5000BC`, `5,85k` in `4000BC` and `7,8k` in `3000BC`.

Over this early-to-mid Holocene window, western Dene lowlands consistently contributed over `60%` of module inhabitants (`4,9k` out of `7,8k` in `3000BC`). Meanwhile, Baffin Island and Foxe Basin emerged gradually from ice cover after `6000BC` (`150` in `6000BC`, `1,1k` in `3000BC`), while both West and East Greenland remained uncolonised (`0`) prior to `2500BC`.

## Palaeo-Inuit Dispersal across the Arctic and Greenland (2500BC to 800AD)

### Arctic Small Tool, Saqqaq and Independence I

Around `2500BC` to `2000BC`, Arctic Small Tool, Independence I and Saqqaq pioneers crossed Lancaster Sound and Nares Strait into High Arctic Canada and Greenland, triggering the sharpest demographic surge of the pre-Norse Arctic [@mcghee1996; @gronnow2004; @jensen2006stone]. Total module population jumped by `65,4%` between `3000BC` (`7,8k`) and `2000BC` (`12,9k`), as West Greenland gained `1,2k` inhabitants and East and High North Greenland gained `400`.

Excavations at Qeqertasussuk (`160` peak from `2000BC`), Sermermiut (`2000BC` onward), Akulliit (`2400BC` onward), Saqqaq (`2200BC` onward) and Independence I in Peary Land (`2400BC` onward) document specialised driftwood, bone and microblade toolkits tailored to ringed seal, muskox and seabird procurement [@gronnow2004; @jensen2006stone; @friesen2016]. Meanwhile, relative sea-level emergence and coastal beach-ridge abandonment around southern Disko Bugt displaced older Saqqaq shorelines above tidal reach [@rasch1997ancient].

### Dorset Consolidation and Polynya Winter Mounds

Between `1000BC` (`16,1k`) and `800AD` (`24,6k`), Dorset hunting societies consolidated across Foxe Basin, Baffin Island, Ellesmere Island and West Greenland [@maxwell1985; @schledermann1978preliminary]. Isotopic dietary reconstructions confirm heavy dependence on marine mammals and seabirds across Dorset communities [@harris2019dorset].

Large polynya winter villages at Alarnerk (`380` peak), Igloolik (`360` peak), Kapuivik (`290`), Lake Harbour (`260`), Abverdjar (`210`) and Sermermiut carried regional numbers steadily upward through `0AD` (`19,2k`) and `800AD` (`24,6k`).

## Thule Expansion and Mediaeval Norse Greenland (985AD to 1400AD)

### Neo-Inuit Whaling Migration

Two concurrent demographic movements reshaped the Arctic between `985AD` and `1350AD` (Figure \ref{fig:traj}). From the west, Neo-Inuit Thule whalers equipped with skin umiaks, composite harpoons and dog sleds swept across Amundsen Gulf, Somerset Island and Bache Peninsula on Ellesmere Island [@savelle2002; @schledermann1978preliminary; @friesen2016].

Western and Central Arctic numbers rose from `5,5k` in `1000AD` to `6,3k` in `1300AD`, while Baffin and High Arctic sites climbed from `5,1k` to `6k`. Larger sod-house clusters flourished at Qariaraqyuk (`480` and `380` clusters), Sadlermiut (`340`), Cumberland Sound (`310`), Naujan (`310`) and Tungatsivvik (`280`).

<figure class="crd-figure-block" id="fig:traj">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-canada/fig2_northern_canada_trajectory.png" alt="fig:traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Northern Canada and Greenland from 10000BC to 1600AD, showing the 1300AD Norse-Thule peak (36,3k) and 1400AD Norse contraction.</figcaption>
</figure>

### Eastern and Western Norse Settlements in Greenland

From the east, Norse colonists under Erik the Red settled sheltered fjords of West and Southwest Greenland in `985AD`. They founded the Eastern Settlement (Eystribyggð) around Brattahlíð (`620` peak) and the cathedral farm at Garðar (`450` peak) alongside the Western Settlement (Vestribyggð) around Sandnes [@arneborg2012; @lynnerup1998; @rice2023they]. Norse farms combined inner-fjord hay pastures and imported livestock with seasonal coastal shielings and Disko Bay walrus-ivory hunting expeditions [@madsen2019marine; @dugmore2005norse].

Norse immigration and natural growth nearly tripled West Greenland population from `3,4k` in `800AD` to `5,8k` in `1000AD`, `10,2k` in `1200AD` and `10,5k` at `1300AD`, propelling the entire module to its pre-modern zenith of `36,3k` (`33,4k` to `39,2k`). Stable carbon and nitrogen isotopes in Norse human bone reveal a steady shift from terrestrial dairy-meat diets toward marine seal consumption as pasture productivity tightened under late-mediaeval cooling [@arneborg2012; @lynnerup1998].

## Little Ice Age Shift, Norse Abandonment and Kalaallit Recovery (1350AD to 1600AD)

### Norse Abandonment and Fourteenth-Century Contraction

After `1350AD`, Little Ice Age sea-ice expansion, soil erosion, declining North Atlantic ivory markets and maritime isolation led to the abandonment of both the Western and Eastern Norse settlements [@dugmore2005norse; @arneborg2012; @lynnerup1998]. West Greenland population fell by `12,4%` from `10,5k` in `1300AD` to `9,2k` in `1400AD`, depressing the regional total from `36,3k` to `35,4k`.

<figure class="crd-figure-block" id="fig:shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-canada/fig3_northern_canada_shares.png" alt="fig:shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population composition across Northern Canada and Greenland from 10000BC to 1600AD.</figcaption>
</figure>

### Kalaallit Re-Occupation and Mackenzie Delta Peaks

Over the fifteenth and sixteenth centuries, expanding Thule and Kalaallit communities re-occupied outer West Greenland fjords (`9,5k` in `1500AD`, `9,6k` in `1550AD`) and East Greenland (`3k` at Skjoldungen, Clavering Island and Scoresbysund). Across the western Beaufort margin, Mackenzie Delta beluga-hunting towns at Kittigazuit (`920` in `1500AD`, `1k` in `1600AD`) and Kuukpak (`520` in `1500AD`, `580` in `1600AD`) lifted the Western-Central Arctic to `6,5k` [@morrison1990].

Regional population rebounded to `36k` in `1500AD` and `36,1k` in `1550AD` before easing slightly by `1,52%` to `35,55k` (`0,71` persons per `100 km²`) in `1600AD` amid early North Atlantic whaling contact and Little Ice Age pack-ice expansion. Table \ref{tab:master} compiles all `23` benchmark dates and `+/- 8%` uncertainty intervals.

## Twenty-Three-Benchmark Series (10000BC to 1600AD)

<figure class="crd-table-figure" id="tab:master">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Mackenzie</th><th class="crd-th">W Arctic</th><th class="crd-th">Baffin-High</th><th class="crd-th">W Greenland</th><th class="crd-th">E Greenland</th><th class="crd-th">Total</th><th class="crd-th">8 pct Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0 - 0</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">150</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">150</td><td class="crd-td">138 - 162</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">500</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">500</td><td class="crd-td">460 - 540</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">1k</td><td class="crd-td">200</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">1,2k</td><td class="crd-td">1,1k - 1,3k</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">1,8k</td><td class="crd-td">500</td><td class="crd-td">150</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">2,4k</td><td class="crd-td">2,3k - 2,6k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">2,8k</td><td class="crd-td">900</td><td class="crd-td">400</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">4,1k</td><td class="crd-td">3,8k - 4,4k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">3,8k</td><td class="crd-td">1,3k</td><td class="crd-td">750</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">5,8k</td><td class="crd-td">5,4k - 6,3k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">4,9k</td><td class="crd-td">1,8k</td><td class="crd-td">1,1k</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">7,8k</td><td class="crd-td">7,2k - 8,4k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">6k</td><td class="crd-td">2,9k</td><td class="crd-td">2,4k</td><td class="crd-td">1,2k</td><td class="crd-td">400</td><td class="crd-td">12,9k</td><td class="crd-td">11,9k - 13,9k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">7,1k</td><td class="crd-td">3,6k</td><td class="crd-td">3,2k</td><td class="crd-td">1,6k</td><td class="crd-td">600</td><td class="crd-td">16,1k</td><td class="crd-td">14,8k - 17,4k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">8,2k</td><td class="crd-td">4,2k</td><td class="crd-td">3,9k</td><td class="crd-td">2,1k</td><td class="crd-td">800</td><td class="crd-td">19,2k</td><td class="crd-td">17,7k - 20,7k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">8,7k</td><td class="crd-td">4,5k</td><td class="crd-td">4,2k</td><td class="crd-td">2,4k</td><td class="crd-td">950</td><td class="crd-td">20,8k</td><td class="crd-td">19,1k - 22,4k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">9,1k</td><td class="crd-td">4,7k</td><td class="crd-td">4,4k</td><td class="crd-td">2,7k</td><td class="crd-td">1,1k</td><td class="crd-td">22k</td><td class="crd-td">20,2k - 23,8k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">9,5k</td><td class="crd-td">4,9k</td><td class="crd-td">4,6k</td><td class="crd-td">3k</td><td class="crd-td">1,2k</td><td class="crd-td">23,2k</td><td class="crd-td">21,4k - 25,1k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">9,9k</td><td class="crd-td">5,1k</td><td class="crd-td">4,8k</td><td class="crd-td">3,4k</td><td class="crd-td">1,4k</td><td class="crd-td">24,6k</td><td class="crd-td">22,6k - 26,6k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">10,2k</td><td class="crd-td">5,5k</td><td class="crd-td">5,1k</td><td class="crd-td">5,8k</td><td class="crd-td">1,7k</td><td class="crd-td">28,3k</td><td class="crd-td">26k - 30,6k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">10,4k</td><td class="crd-td">5,8k</td><td class="crd-td">5,4k</td><td class="crd-td">8,2k</td><td class="crd-td">2,1k</td><td class="crd-td">31,9k</td><td class="crd-td">29,3k - 34,5k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">10,6k</td><td class="crd-td">6,1k</td><td class="crd-td">5,8k</td><td class="crd-td">10,2k</td><td class="crd-td">2,5k</td><td class="crd-td">35,2k</td><td class="crd-td">32,4k - 38k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">10,8k</td><td class="crd-td">6,3k</td><td class="crd-td">6k</td><td class="crd-td">10,5k</td><td class="crd-td">2,8k</td><td class="crd-td">36,3k</td><td class="crd-td">33,4k - 39,2k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">10,9k</td><td class="crd-td">6,4k</td><td class="crd-td">6k</td><td class="crd-td">9,2k</td><td class="crd-td">2,9k</td><td class="crd-td">35,4k</td><td class="crd-td">32,6k - 38,2k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">11k</td><td class="crd-td">6,5k</td><td class="crd-td">6k</td><td class="crd-td">9,5k</td><td class="crd-td">3k</td><td class="crd-td">36k</td><td class="crd-td">33,1k - 38,9k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">11k</td><td class="crd-td">6,5k</td><td class="crd-td">6k</td><td class="crd-td">9,6k</td><td class="crd-td">3k</td><td class="crd-td">36,1k</td><td class="crd-td">33,2k - 39k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">10,8k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">9,5k</td><td class="crd-td">3k</td><td class="crd-td">35,5k</td><td class="crd-td">32,7k - 38,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Twenty-three-benchmark population series for Northern Canada and Greenland (10000BC to 1600AD) with +/- 8% aggregate bounds.</figcaption>
</figure>

# Limitations

## High-Latitude Sampling and Marine Reservoir Offsets

Radiocarbon coverage above `60` degrees North remains concentrated along accessible Arctic coasts, polynya headlands, Mackenzie Delta bluffs and West Greenland Norse fjords [@bird2022p3k14c; @friesen2016]. Vast interior Keewatin barrens, boreal muskeg and ice-bound Northeast Greenland therefore stay comparatively under-dated [@gordon1996].

Marine reservoir effects in cold polar waters complicate exact temporal binning whenever marine shell, seal and whalebone dates are combined with terrestrial charcoal [@rasch1997ancient; @jensen2006stone]. Shifting winter sea-ice edges and post-glacial isostatic uplift along Disko Bugt and Foxe Basin also displaced early shorelines inland or buried littoral camps beneath coastal shingle.

## Inventory Asymmetry and Mobility Bias

Heritage registration coverage differs sharply across national jurisdictions. Greenland's *Nunniffiit* inventory accounts for `936` of the `982` catalogued sites (`731` West and `205` East), capturing dense historical fjord registration along the ice-free western littoral.

By contrast, interior Mackenzie Dene and Barrenland bands left ephemeral tent-ring scatters represented largely through `46` Canadian anchor settlements and the kriged rural background [@gordon1996; @morrison1990].

Finally, the uniform `+/- 8%` uncertainty envelope captures macro-level demographic spread across Norse cemetery and Thule house-pit reconstructions rather than individual fjord settlement error bounds [@lynnerup1998; @ubelaker2006].

# Conclusion

## Ten Millennia Across the High Arctic and Subarctic

Northern Canada and Greenland document the latest post-glacial colonisation and sparsest long-run densities across northern North America. The regional series expands from uninhabited glacial terrain in `10000BC` through early Mackenzie Dene bands (`150` in `9000BC`) and Palaeo-Inuit coastal dispersal (`12,9k` in `2000BC`) to a peak in `1300AD` (`36,3k`) and a near-equal rebound in `1550AD` (`36,1k`), ending at `35,55k` (`0,71` persons per `100 km²`) in `1600AD`.

Maritime adaptation ultimately governed the spatial distribution across the Arctic archipelagos. Even though Greenland lies at the eastern periphery of North America, sheltered West Greenland fjords and polynya hunting hubs lifted coastal density far above the inland Mackenzie taiga and Central Arctic Barrenlands.

## Norse Abandonment and Thule Persistence

Comparing Norse Greenland with contemporary Inuit settlement history clarifies the limits of subarctic agrarian expansion. Pastoral dairy farms flourished across Eystribyggð and Vestribyggð for over three centuries before cooling sea ice, soil deterioration and collapsing Atlantic ivory demand brought settlement abandonment by the early fifteenth century [@arneborg2012; @dugmore2005norse].

Indigenous Kalaallit and Thule maritime hunters proved far more resilient across the Little Ice Age threshold, sustaining coastal sea-mammal economies across West and East Greenland while Mackenzie Delta beluga villages reached their peak size during the sixteenth century [@morrison1990; @lynnerup1998].

## Composite Synthesis and Inter-Regional Links

Reconciling `982` catalogued settlements (`1.110` ledger candidates) with multi-registry North American Matérn ($\nu = 3/2$) kriging surfaces calibrated on `93.358` unique site-periods eliminates artificial administrative breaks.

Combining explicit ice-sheet exclusions with cross-border buffers isolates the mediaeval Norse pulse in Southwest Greenland, defines Mackenzie Delta and Foxe Basin marine hubs and preserves continuous border transitions into Alaska, the Prairies and Hudson Bay.

# Sources

<div id="refs"></div>
