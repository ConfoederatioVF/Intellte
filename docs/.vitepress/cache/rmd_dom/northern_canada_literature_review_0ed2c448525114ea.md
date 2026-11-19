---
title: "Pre-Columbian Northern Canada and Greenland: Dene Caribou Hunters, Palaeo-Inuit, Thule and Norse Settlers"
subtitle: "CENTAUR-II: Boreal Mackenzie, Arctic Archipelago and Greenland Fjords, -10000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: northern_canada_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northern_canada_spatial.png"
hero_caption: "Five Arctic and subarctic divisions and 14 catalogued settlements across Northern Canada and Greenland (5,04M km²) from 10000 BC to 1600 AD."
hero_label: "fig:hero-northern-canada"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Covering `5,04M km²` (`197.969` 5-arcminute pixels) across the Mackenzie boreal basin, the Canadian Arctic Archipelago and coastal Greenland, Northern Canada exhibits the lowest Holocene population densities and latest post-glacial colonisation sequence in CENTAUR-II. Ice retreat clears the western Dene corridor first, lifting regional population from `0` in `10000 BC` to `150` in `9000 BC`, `4,1k` in `5000 BC` and `19,2k` at `0 AD` as Arctic Small Tool, Pre-Dorset, Saqqaq and Dorset groups spread across the High Arctic and Greenland [@mcghee1996; @maxwell1985]. Norse farmsteads in West and Southwest Greenland (`985` to `1400 AD`) alongside rapid Thule bowhead-whaling expansion drive the regional series to an all-time pre-modern peak of `36,3k` in `1300 AD`, before Little Ice Age cooling and Norse abandonment bring a dip to `35,4k` in `1400 AD`, partial Kalaallit recovery to `36,1k` in `1550 AD` and `35,55k` (`0,71` persons per 100 km²) by `1600 AD` [@arneborg2012; @lynnerup1998]. Fourteen settlement trajectories and one unquantified seasonal camp entry reconcile with `0` ledger errors against `sites_p3k14c_na` kriging priors.

# Background

Standard continental atlases [@mcevedy1978; @kleingoldewijk2017] assigned virtually uniform trace densities across high-latitude Canada and omitted medieval Norse Greenland's demographic pulse entirely. CENTAUR-II partitions `5.039.286 km²` into five biogeographic divisions shaped by Laurentide and Greenland ice margins, permafrost tundra and polynya marine productivity (Table \ref{tab:subregions}).

The Mackenzie and Peace-Athabasca Boreal Lowlands (`995.903 km²`, `19,8%` of module area) encompass the Great Bear, Great Slave and Mackenzie river corridors occupied by Northern Dene caribou hunters and fishers [@gordon1996; @helm1981]. Eastward, the Central and Western Arctic Tundra and Barrenlands (`901.072 km²`, `17,9%`) cover the Beaufort coast, Coronation Gulf and Barrenlands from Mackenzie Delta beluga villages to Copper and Netsilik Inuit sealing grounds [@morrison1990]. Across the eastern archipelago, Baffin Island, Foxe Basin and the High Arctic Archipelago (`1.179.293 km²`, `23,4%`) span Dorset walrus-hunting basins and classic Thule winter whaling stations [@maxwell1985; @savelle2002]. In Greenland, West and Southwest Greenland Fjords (`1.078.060 km²`, `21,4%`) unite Disko Bay Palaeo-Inuit and Kalaallit stations with the medieval Norse Eastern and Western Settlements [@gronnow2004; @lynnerup1998], while East and High North Greenland (`884.958 km²`, `17,6%`) track Independence I-II and Tunumiit coastal bands [@friesen2016].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area km2 (Share)</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1500AD Density</th></tr></thead>
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
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional land area, benchmark populations and 1500 AD density (persons per 100 km2) across Northern Canada and Greenland.</figcaption>
</figure>

# Methodology

Rural population potential across high-latitude Canada and coastal Greenland is derived from `sites_p3k14c_na` non-stationary Matérn ($\nu = 3/2$) kriging over `481.752` terrestrial 5-arcminute cells (`1.359` domestic Voronoi catchments plus `171` cross-frontier buffers), incorporating `p3k14c` [@bird2022p3k14c] and `c14bazAAR` Arctic radiocarbon inventories calibrated against Kelly et al. [@kelly2025] regional curves. Because ice-sheet interiors in Greenland, Devon Island and Ellesmere Island are uninhabitable, `ViscountSubstrataMosaic` restricts demographic allocation strictly to ice-free coastal and boreal land pixels encoded in `northern_canada_areal_mask.png`, subtracting `14` verified settlement points before scaling rural cells and applying 4-pixel separable border feathering. Each sub-regional anchor carries `+/- 8%` uncertainty intervals [@ubelaker2006].

# Testing and Validation

All quantitative gatekeepers pass with `0` errors at `GMT+0`:

1. **Kriging Sharpness**: Across all `10` Holocene horizons of `sites_p3k14c_na`, `tau1 = 1,25` (`<= 1,80`), `nugget_to_sill = 0,04` to `0,22` (`< 0,45`) and residual pseudo-$R^2$ remains between `0,9733` and `0,9992`.
2. **Gazetteer Exhaustiveness**: Reconciliation of `northern_canada_settlements.json` and `northern_canada_source_ledger.json5` records `14` included settlements, `1` excluded seasonal-camp aggregate, `0` unaccounted entries and `0` schema errors.
3. **Seam Continuity**: Southern frontiers abutting `1.northern_cascadia_and_alaska`, `3.prairies` and `4.hudson_bay` satisfy `p99_soft <= 1,25` across all `23` benchmark dates.

# Results

## Ice Retreat and Palaeo-Inuit Dispersal (-10000 to 800 AD)

Residual Laurentide ice left the module uninhabited at `10000 BC` (`0`), with pioneer Dene bands entering the Mackenzie corridor by `9000 BC` (`150`) and expanding steadily to `2,8k` in `5000 BC` and `8,2k` at `0 AD` [@gordon1996]. Around `2500-2000 BC`, Independence I and Saqqaq Palaeo-Inuit pioneers crossed Nares Strait into Greenland, lifting total module population from `7,8k` in `3000 BC` to `12,9k` in `2000 BC` (`1,1k` in West Greenland and `500` in East Greenland) [@gronnow2004; @mcghee1996]. Between `1000 BC` (`16,1k`) and `800 AD` (`24,6k`), Dorset hunting societies consolidated across Foxe Basin, Baffin Island and Disko Bay, anchored at Igloolik, Sermermiut and Churchill-Seahorse Gully [@maxwell1985].

## Thule Expansion and Medieval Norse Greenland (985 to 1600 AD)

Two concurrent demographic shifts reshaped the Arctic between `985` and `1350 AD`. From the west, Thule whalers equipped with umiaks and dog sleds swept across Amundsen Gulf, Somerset Island (Qariaraqyuk) and Smith Sound, raising Western-Central Arctic (`5,5k` to `6,3k`) and Baffin-High Arctic (`5,1k` to `6k`) totals [@savelle2002; @friesen2016]. From the east, Erik the Red's Norse colonists settled West and Southwest Greenland (`985 AD`), establishing Brattahlíð and the bishopric at Garðar and lifting West Greenland from `5,8k` in `1000 AD` to `10,5k` in `1300 AD`, carrying the entire module to its `36,3k` peak [@arneborg2012; @lynnerup1998]. After `1350 AD`, Little Ice Age cooling, declining walrus-ivory trade and the abandonment of both Norse settlements cut West Greenland back to `9,2k` in `1400 AD` (`35,4k` module total), before expanding Kalaallit communities (`9,5k` in `1500 AD`) and the Mackenzie Delta beluga town of Kittigazuit (`1k`) restored numbers to `36k` in `1500 AD` and `35,55k` in `1600 AD` [@morrison1990].

<figure class="crd-figure-block" id="fig:traj">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-canada/fig2_northern_canada_trajectory.png" alt="fig:traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Northern Canada and Greenland from 10000 BC to 1600 AD, highlighting the 1300 AD Norse-Thule peak (36,3k) and 1400 AD Norse contraction.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-canada/fig3_northern_canada_shares.png" alt="fig:shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population composition across Northern Canada and Greenland from 10000 BC to 1600 AD.</figcaption>
</figure>

## Complete Benchmark Series (-10000 to 1600 AD)

Table \ref{tab:master} presents all `23` benchmark dates for the five sub-regions and aggregate `+/- 8%` uncertainty intervals extracted from `northern_canada.json5`.

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
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Complete 23-benchmark population series for Northern Canada and Greenland (10000 BC to 1600 AD) with +/- 8% aggregate bounds.</figcaption>
</figure>

# Limitations

Radiocarbon density in `p3k14c` above `60` degrees North drops sharply outside coastal polynyas, Mackenzie Delta bluffs and West Greenland fjords, making interior Barrenlands and East Greenland estimates sensitive to marine reservoir corrections on seal and whalebone dates [@bird2022p3k14c; @friesen2016]. Seasonal caribou-interception mobility also causes residential winter site areas to under-represent dispersed summer foraging groups, particularly among Mackenzie Dene bands [@gordon1996].

# Sources

<div id="refs"></div>
