---
title: "Pre-Columbian Northern Cascadia and Alaska: Marine Chiefdoms, Subarctic Fishers and Arctic Adaptations"
subtitle: "CENTAUR-II: Pacific Northwest Coast, Interior Yukon and Arctic Alaska, -10000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: northern_cascadia_and_alaska_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northern_cascadia_and_alaska_spatial.png"
hero_caption: "Five ecological divisions and 15 catalogued settlements across Northern Cascadia and Alaska (2,80M km²) from 10000 BC to 1600 AD, contrasting dense Northwest Coast marine foraging zones with sparse Yukon-Tanana boreal basins."
hero_label: "fig:hero-northern-cascadia-and-alaska"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Northern Cascadia and Alaska (`2,80M km²`, `71.432` active 5-arcminute pixels) supported the highest pre-agricultural population densities in northern North America along salmon-rich Pacific fjords and maritime archipelagos. Across five ecological divisions reconstructed under Operation Viscount Project CENTAUR-II, regional population expands from `1,35k` in 10000 BC to `25,7k` in 5000 BC, `119,7k` at 0 AD and a pre-contact peak of `182k` in 1500-1550 AD (`6,50` persons per 100 km²), dipping slightly to `181,5k` by 1600 AD. Settlement remains heavily skewed toward the southern outer coast and Salish Sea: by 1500 AD, the Salish Sea, Vancouver Island and Fraser-Columbia Plateau (`39,6%`) together with the Inside Passage, Haida Gwaii and Skeena-Nass Coast (`25,3%`) hold `64,8%` of total inhabitants across `35,3%` of land area, while the Aleutian-Kodiak littoral (`15,4%`) achieves the highest local density (`19,91` persons per 100 km²). Anchored to `sites_p3k14c_na` non-stationary Matérn ($\nu = 3/2$) radiocarbon kriging priors and `15` verified settlement trajectories (`0` unaccounted source-ledger records), the series resolves border cliffs between Alaska, British Columbia and Washington.

# Background

Earlier global demographic compilations [@mcevedy1978; @kleingoldewijk2017] treated subarctic Alaska, interior Yukon and the Northwest Coast as broad homogeneous polygons, flattening the steep carrying-capacity gradient between sedentary coastal salmon-and-sea-mammal chiefdoms and mobile interior caribou bands [@kroeber1939; @ames1999]. In `CENTAUR-II`, the `2.799.503 km²` domain is partitioned into five ecologically coherent sub-regions aligned to drainage divides, maritime shelves and ethnohistoric territories (Table \ref{tab:subregions}).

The Aleutian Archipelago, Kodiak and Gulf of Alaska Coast (`140.649 km²`, `5,0%` of regional area) sustained dense Unangan and Sugpiaq maritime villages on ice-free volcanic islands and upwelling kelp shelves [@laughlin1980; @fitzhugh2003]. North of the Alaska Range, the Bering Sea Delta and North Slope Arctic Tundra (`711.635 km²`, `25,4%`) spans the Yukon-Kuskokwim delta and Chukchi-Beaufort whaling capes inhabited by Yup'ik and Inupiat communities [@larsen1948; @mason2016]. Between the coastal ranges and the Mackenzie drainage basin, the Interior Yukon-Tanana Subarctic Basin (`959.539 km²`, `34,3%`) covers boreal spruce taiga occupied by Northern Athabaskan bands [@holmes2001]. Southward, the Inside Passage, Haida Gwaii and Skeena-Nass Coast (`329.620 km²`, `11,8%`) encompasses Tlingit, Haida and Tsimshian outer-fjord territories [@matson1995], while the Salish Sea, Vancouver Island and Fraser-Columbia Interior Plateau (`658.060 km²`, `23,5%`) joins the Strait of Georgia plank-house core with pit-house winter villages along the Fraser and Thompson canyons [@hayden1997; @boyd1999].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area km2 (Share)</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1500AD Density</th></tr></thead>
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
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional land area, benchmark populations and 1500 AD density (persons per 100 km2) across Northern Cascadia and Alaska.</figcaption>
</figure>

# Methodology

Spatial disaggregation relies on the `sites_p3k14c_na` non-stationary Matérn ($\nu = 3/2$) kriging surface built from `p3k14c` [@bird2022p3k14c] and `c14bazAAR` archaeological radiocarbon dates across `481.752` terrestrial 5-arcminute cells (`4320x2160` WGS84 global grid). Domestic point dates are aggregated into `1.359` Voronoi catchments over `10` Holocene horizons (`-10000` to `1600 AD`) and anchored to Kelly et al. [@kelly2025] summed probability calibration curves. To prevent edge distortion across the Bering Strait and the 49th parallel, `171` cross-frontier buffer catchments condition Chukotka (from POLARIS `sites_IA_RAS`) and northern Washington up to `300 km` beyond the Canadian-Alaskan perimeter.

For each sub-region and benchmark year in `northern_cascadia_and_alaska.json5`, `ViscountSubstrataMosaic` subtracts catalogued settlement populations from the regional total, scales the underlying rural kriging surface inside the RGBA mask of `northern_cascadia_and_alaska_areal_mask.png` and applies two passes of a 4-pixel separable blur to eliminate seam cliffs. Uncertainty intervals (`population_bounds`) preserve an explicit `+/- 8%` envelope around every sub-regional anchor from `10000 BC` to `1600 AD` [@ubelaker2006].

# Testing and Validation

All regional pipeline gatekeepers passed with `0` errors at `GMT+0` prior to compilation:

1. **Kriging Sharpness**: Across all `10` Holocene horizons of `sites_p3k14c_na`, dimensionless spatial decay remains fixed at `tau1 = 1,25` (below the `1,80` limit), `nugget_to_sill` ranges between `0,04` and `0,22` (`< 0,45`) while residual pseudo-$R^2$ spans `0,9733` to `0,9992`.
2. **Gazetteer Exhaustiveness**: Verification of `northern_cascadia_and_alaska_settlements.json` against `northern_cascadia_and_alaska_source_ledger.json5` yields `15` included settlements, `2` explicitly justified exclusions (`Bluefish Caves` and `Healy Lake`), `0` unaccounted candidates and `0` schema errors.
3. **Seam Continuity**: Cross-frontier transitions into `2.northern_canada`, `3.prairies` and `18.northwest` satisfy `p99_soft <= 1,25` without rectilinear artifacts.

# Results

## Early Holocene Colonisation and Maritime Consolidation (-10000 to -3000 BC)

Following deglaciation of the Cordilleran ice sheet and opening of the North Pacific kelp highway, early occupation in `10000 BC` totals `1,35k`, concentrated in ice-free Beringian refugia of interior Yukon-Tanana (`450`, including Swan Point) and Arctic Alaska (`400`), alongside pioneering coastal bands on the Aleutian-Kodiak shelf (`250`), Inside Passage (`150`) and Salish-Fraser corridor (`100`) [@holmes2001; @ames1999]. Between `8000 BC` (`4,95k`) and `5000 BC` (`25,7k`), salmon runs stabilised across the Fraser, Skeena, Nass and Columbia drainages while coastal shell-midden economies emerged at Namu [@matson1995]. By `3000 BC`, regional population reaches `54,6k`, led by Salish-Fraser (`21k`) and Tlingit-Haida (`15,5k`) coastal terraces, while Kachemak and Ocean Bay maritime villages lift Aleutian-Kodiak numbers to `9,5k` [@fitzhugh2003].

## Late Holocene Complex Foragers and Arctic Whaling (-2000 BC to 1500 AD)

Between `2000 BC` (`74,8k`) and `0 AD` (`119,7k`), cedar plank-house villages, fortified ridge sites and storage pit-house towns proliferated across British Columbia, Washington and southern Alaska [@hayden1997; @matson1995]. In the Salish Sea and Fraser Canyon, Marpole (`1,45k` peak), Keatley Creek (`1,4k`), Yuquot (`1,2k`), Ozette (`1,15k`) and Tse-whit-zen (`1,12k`) anchored high-density socio-political networks, lifting the Salish-Fraser sub-region from `48k` at `0 AD` to `65k` in `1000 AD` and `72k` by `1500 AD`. Along the northern Bering and Chukchi coasts, Arctic Small Tool and Norton traditions gave way to large Ipiutak (`800` at `600 AD`), Birnirk and Thule whaling hubs at Point Hope, Cape Krusenstern and Wales, doubling Bering-North Slope population from `12k` at `0 AD` to `24k` in `1500 AD` [@larsen1948; @mason2016].

<figure class="crd-figure-block" id="fig:traj">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-cascadia-and-alaska/fig2_northern_cascadia_and_alaska_trajectory.png" alt="fig:traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Northern Cascadia and Alaska from 10000 BC to 1600 AD showing total population, +/- 8% uncertainty bounds and five sub-regional series.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-cascadia-and-alaska/fig3_northern_cascadia_and_alaska_shares.png" alt="fig:shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population shares across Northern Cascadia and Alaska from 10000 BC to 1600 AD, illustrating the shift from Beringian interior bands to coastal Pacific chiefdoms.</figcaption>
</figure>

## Protohistoric Peak and Early Contact Threshold (1500 to 1600 AD)

Total population plateaus at `182k` across `1500 AD` and `1550 AD` before easing marginally to `181,5k` in `1600 AD` due to early indirect pathogen diffusion along southern Salish and Columbia trade corridors [@boyd1999; @campbell1990]. Across the northern Gulf of Alaska, Arctic tundra and interior Yukon, pre-Russian and pre-British contact insulation keeps populations stable (`28k`, `24k` and `12k` respectively) through `1600 AD`. Table \ref{tab:master} reports the complete `23`-benchmark series compiled directly from `northern_cascadia_and_alaska.json5`.

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
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Complete 23-benchmark population series for Northern Cascadia and Alaska (10000 BC to 1600 AD) with +/- 8% aggregate bounds.</figcaption>
</figure>

# Limitations

Radiocarbon sampling in `p3k14c` concentrates along modern highways, hydroelectric reservoirs and coastal salvage projects in British Columbia and southern Alaska, leaving interior Yukon-Tanana muskeg and remote Aleutian islands comparatively under-dated [@bird2022p3k14c; @holmes2001]. Mid-Holocene marine reservoir effects on coastal shell dates and post-glacial sea-level submergence of early shorelines prior to `5000 BC` likely understate early coastal density relative to later shell-midden horizons [@matson1995]. Finally, the `+/- 8%` uncertainty interval reflects benchmark calibration spread rather than formal Bayesian credible intervals for individual pit-house floors.

# Sources

<div id="refs"></div>
