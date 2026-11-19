---
title: "Northwest Hydrological Unit (HU 17): Puget Sound, Lower Columbia Plank-Houses and Plateau Salmon Fisheries"
subtitle: "CENTAUR-II: Contiguous Pacific Northwest Drainage Basin, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: northwest_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northwest_spatial.png"
hero_caption: "Areal mask and 140 settlements across USGS Hydrological Unit 17 (712,09k km²) from 10000BC to 1600AD. Four sub-regions divide coastal plank-house towns from Columbia Plateau and Snake River basins."
hero_label: "fig:hero-northwest"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

CENTAUR-II reconstructs the Holocene population of the Pacific Northwest (USGS Hydrological Unit 17, 712.090 km² across 11.810 five-arcminute cells) from 10000BC to 1600AD across four watershed sub-regions. Anchored to the terrestrial radiocarbon summed probability distribution of Kelly et al. [@kelly2025] (HU 17 median peak at 1592AD, `N = 2.341`, 358 cal BP) and non-stationary Matérn ($\nu = 3/2$) kriging over the Northern America archaeological surface (`sites_northern_america`, 93.358 unique site-periods across 4.457 domestic catchments, 14,12x the global radiocarbon database baseline), total population grows monotonically from 850 inhabitants in 10000BC to 113,3k at 0AD, 192k in 1500AD and 209,5k in 1600AD (0,29 inhabitants/km²). Settlement density concentrates along the Lower Columbia-Willamette estuary (`81,0k`, 0,81 inhabitants/km²) and Puget Sound-Olympic littoral (`49,0k`, 1,09 inhabitants/km²), supported by intensive salmon storage, cedar plank-house towns and Plateau root-harvesting networks prior to late eighteenth-century European maritime contact [@ames1999northwest; @boyd1999northwest; @rorabaugh2023salish]. Across 142 ledger candidates, 140 documented settlements are subtracted cleanly prior to rural kriging allocation, accounting for 24.060 inhabitants (12,53% of total) at 1500AD and 30.470 (14,54%) at 1600AD.

# Background

## Maritime Fisheries, Cedar Architecture and Plateau Resources

Earlier continental population syntheses treated the Pacific Northwest as a low-density foraging frontier, underestimating the productive capacity of anadromous salmon runs, eulachon oil fisheries, coastal whaling and camas-wapato root gardens [@ames1999northwest; @matson1995northwest]. Across the 712,09k km² Columbia-Snake-Puget drainage, ethnohistoric reconstructions by Boyd [@boyd1999northwest] place pre-epidemic Lower Columbia, Puget Sound and Plateau populations well above 180k prior to the first documented smallpox outbreak of 1775AD to 1782AD.

Unlike cereal agricultural regions where seasonal labour bottlenecks limited foraging societies, the Pacific Northwest coupled massive seasonal surpluses of Chinook, sockeye and chum salmon with red-cedar plank preservation architecture, drying racks and subterranean root roasting ovens [@ames1999northwest; @cressman1960dalles]. Ancient mitochondrial DNA studies of pre-dam Columbia River Chinook salmon (*Oncorhynchus tshawytscha*) reveal substantially higher historical genetic diversity and wider spawning distribution than modern populations [@johnson2018increased], while stable carbon and nitrogen isotope profiles distinguish diverse migratory salmonid ecotypes harvested across coastal and canyon fisheries [@guiry2020differentiating]. Along the outer Olympic littoral, late Pleistocene and Holocene sea-level shifts reshaped nearshore gray whale (*Eschrichtius robustus*) feeding grounds that sustained specialised Makah maritime whaling towns such as `Ozette` and `Neah Bay` [@pyenson2011what; @matson1995northwest].

## Radiocarbon Chronology and Contact Timing

Kelly et al. [@kelly2025] analysed 2.341 terrestrial radiocarbon dates across HU 17 and obtained the latest median peak of all 18 contiguous U.S. hydrological units: 358 cal BP (1592AD, interquartile range 306 to 376 cal BP). This late pre-contact crest matches Rorabaugh's [@rorabaugh2023salish] independent Central Salish Sea radiocarbon model placing regional decline only after roughly 1650AD, and aligns with Jones's [@jones2014] ethnohistoric synthesis showing direct European maritime contact along the Northwest Coast beginning after 1774AD. Ancient mitogenomic continuity across mid-Holocene Northwest Coast individuals similarly points to deep residential stability rather than late Holocene demographic displacement [@cui2013ancient], whereas later post-contact population structure reflects severe eighteenth- and nineteenth-century epidemic bottlenecks [@boyd1999northwest; @hunley2016reassessment; @ubelaker2006].

# Methodology

## Sub-Regional Partition and Areal Masks

CENTAUR-II divides the 11.810 active five-arcminute cells of HU 17 (712.090 km²) on the 4320x2160 global grid into four drainage-aligned sub-regions:

1. **Puget Sound, Olympic Peninsula and North Coast (44.853 km², 810 pixels, 6,3% of area)**: Encompasses the Puget Sound fjord trough, Hood Canal, San Juan Islands, Strait of Juan de Fuca south shore and outer Olympic coast (`46,62 N` to `48,88 N`, `121,46 W` to `124,71 W`), occupied by Coast Salish, Klallam and Makah winter plank-house towns [@rorabaugh2023salish; @matson1995northwest].
2. **Lower Columbia, Willamette Valley and Oregon Coast (100.388 km², 1.651 pixels, 14,1% of area)**: Spans the lower Columbia tidal estuary, Sauvie Island-Wapato Valley, Willamette oak savannahs and the Washington-Oregon outer coast (`42,04 N` to `46,54 N`, `121,46 W` to `124,54 W`), inhabited by Chinookan, Kalapuya, Tillamook and Coos communities [@ames1999northwest; @boyd1999northwest].
3. **Columbia Plateau, Mid-Columbia Dalles and Okanogan-Spokane (314.976 km², 5.344 pixels, 44,23% of area)**: Covers the basalt canyons of The Dalles, Deschutes, John Day, Yakima, Clearwater, Okanogan and upper Columbia reaches (`44,54 N` to `48,88 N`, `111,21 W` to `121,38 W`), inhabited by Sahaptin, Interior Salish and Nez Perce groups [@cressman1960dalles].
4. **Snake River Plain, Owyhee and Harney-Malheur High Desert (251.873 km², 4.005 pixels, 35,37% of area)**: Encompasses southern Idaho's Snake River canyonlands, the Owyhee upland extending into northern Nevada and Oregon's Harney-Malheur closed lakes (`41,12 N` to `44,46 N`, `109,79 W` to `121,38 W`), occupied by Shoshone-Bannock and Northern Paiute bands.

## Radiocarbon Kriging and Cross-Frontier Conditioning

Rural spatial probabilities derive from the continental Northern America kriging surface (`sites_northern_america`), composited from global radiocarbon inventories [@bird2022p3k14c] alongside Washington, Oregon and Idaho archaeological site files, CRM river-corridor excavations, the Canadian Archaeological Radiocarbon Database (`CARD`) and heritage monument inventories. Across `481.752` active continental cells, deduplication yields 93.358 unique site-periods across 4.457 domestic Voronoi catchments (`2.678` active inhabited catchments; median radius 27,36 km; 90th percentile 59,92 km), representing 14,12x the density of the baseline global database alone.

To prevent linear boundary drops along the 49th parallel between Washington-Idaho and British Columbia or across the Great Basin and Klamath divides, 171 cross-frontier buffer catchments condition external belts up to 300 km outside the CENTAUR perimeter. Within each of ten Holocene horizons (`10000BC` to `1600AD`), Freeman-Tukey site densities receive 1-ring Poisson-Gamma credibility smoothing and WLS regression against smooth exponential coastal proximity, 13,5 km fluvial distance decay and terrain slope prior to 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging [@paciorek2006matern]. Across all ten horizons, calibrated variograms achieve $\tau_1 = 1,41$ (`1,4144`; $\tau_2 = 2,62$, effective short range 38,7 km), raw nugget-to-sill ratio `0,000`, regularised nugget-to-sill ratio `0,04` and WLS residual fit $R^2 = 0,999$ (`0,9991` to `0,9993`). Smooth two-pass 5-pixel log-multiplier feathering eliminates seam cliffs along the Cascade crest and Snake-Columbia divide.

## Settlement Inventory and Rural Subtraction

Benchmark totals track 23 chronological intervals (`10000BC` to `1600AD`) anchored to Kelly et al. [@kelly2025] HU 17 curves and Boyd's [@boyd1999northwest] ethnohistoric carrying capacities with symmetric `±8%` uncertainty intervals (`92%` bounds). Before scaling residual rural pixels, 140 documented settlements (`northwest_settlements.json`) are subtracted cleanly from sub-regional targets. Candidate screening in `northwest_source_ledger.json5` reviews 142 regional entries, consolidating 2 duplicate entries (`Jaguar Cave (44.37,-113.19)-Idaho` across 17,41 km into canonical `Jaguar Cave-Idaho`, and a 2 km coordinate twin of `Celilo Falls (Wyam)`) so canyon fisheries and rockshelters are counted once.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Puget Sound and Olympic Coast</strong></td><td class="crd-td">44.853</td><td class="crd-td">27,5k</td><td class="crd-td">41,2k</td><td class="crd-td">43,7k</td><td class="crd-td">44k</td><td class="crd-td">49k</td></tr>
<tr><td class="crd-td"><strong>2. Lower Columbia and Willamette</strong></td><td class="crd-td">100.388</td><td class="crd-td">42,5k</td><td class="crd-td">67k</td><td class="crd-td">73,2k</td><td class="crd-td">74k</td><td class="crd-td">81k</td></tr>
<tr><td class="crd-td"><strong>3. Columbia Plateau and Dalles</strong></td><td class="crd-td">314.976</td><td class="crd-td">29,8k</td><td class="crd-td">47k</td><td class="crd-td">51,4k</td><td class="crd-td">52k</td><td class="crd-td">56k</td></tr>
<tr><td class="crd-td"><strong>4. Snake River and High Desert</strong></td><td class="crd-td">251.873</td><td class="crd-td">13,5k</td><td class="crd-td">20,2k</td><td class="crd-td">21,8k</td><td class="crd-td">22k</td><td class="crd-td">23,5k</td></tr>
<tr><td class="crd-td"><strong>HU 17 Total</strong></td><td class="crd-td">712.090</td><td class="crd-td">113,3k</td><td class="crd-td">175,4k</td><td class="crd-td">190,1k</td><td class="crd-td">192k</td><td class="crd-td">209,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional area and benchmark population estimates across the Northwest (HU 17) from 0AD to 1600AD.</figcaption>
</figure>

# Testing and Validation

Four regional verification checks exited with zero errors at GMT+0:

1. **Radiocarbon Sample Threshold**: HU 17 integrates `N = 2.341` terrestrial radiocarbon dates [@kelly2025] (excluding marine shell dates per Hadden et al. [@hadden2023shell]), nearly six times the 400-date reliability minimum [@crema2021rcarbon].
2. **Kriging Sharpness and Fit**: Across all ten Holocene horizons in `sites_northern_america`, dimensionless range stays at $\tau_1 = 1,41$ (`<= 1,80`), raw nugget-to-sill ratio equals `0,000`, regularised nugget-to-sill ratio holds at `0,04` (`< 0,45`) and WLS residual fit spans $R^2 = 0,9991$ to `0,9993` (Table 2).
3. **Gazetteer and Ledger Reconciliation**: Cross-checking `northwest_settlements.json` against `northwest_source_ledger.json5` produces `0` unmatched keys and `0` invalid coordinates (`41,19 N` to `48,86 N`, `112,56 W` to `124,71 W`) across `142` ledger candidates (`140` included settlements and `2` excluded duplicate entries).
4. **Sub-Regional Mass Conservation**: Explicit settlement totals account for `24.060` inhabitants (`12,53%` of `192,0k`) at `1500AD` and `30.470` (`14,54%` of `209,5k`) at `1600AD`, leaving strictly positive rural residuals across all four sub-regions (`31` sites in Puget Sound-Olympic Coast, `24` in Lower Columbia-Willamette, `50` in Columbia Plateau-Dalles and `35` in Snake River-High Desert).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Holocene Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">Range (km)</th><th class="crd-th">WLS R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeoindian &amp; Early Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>2. Middle Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>3. Late Archaic</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>4. Early Formative</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>5. Marpole &amp; Middle Period</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>6. Late-Middle Transition</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>7. Early Late Prehistoric</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>8. Middle Late Prehistoric</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>9. Late Pre-Contact</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>10. Protohistoric Contact Horizon</strong></td><td class="crd-td">1,41</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">38,7</td><td class="crd-td">0,9991</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Matérn variogram parameters across the ten Holocene horizons in the Northern America kriging surface.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Site (Peak)</th><th class="crd-th">1500AD Dens.</th><th class="crd-th">1600AD Dens.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Puget Sound and Olympic Coast</strong></td><td class="crd-td">31</td><td class="crd-td">12.340</td><td class="crd-td">Ozette (1.150)</td><td class="crd-td">0,98</td><td class="crd-td">1,09</td></tr>
<tr><td class="crd-td"><strong>2. Lower Columbia and Willamette</strong></td><td class="crd-td">24</td><td class="crd-td">9.450</td><td class="crd-td">Cathlapotle (1.200)</td><td class="crd-td">0,74</td><td class="crd-td">0,81</td></tr>
<tr><td class="crd-td"><strong>3. Columbia Plateau and Dalles</strong></td><td class="crd-td">50</td><td class="crd-td">16.325</td><td class="crd-td">Five Mile Rapids-Celilo (1.600)</td><td class="crd-td">0,17</td><td class="crd-td">0,18</td></tr>
<tr><td class="crd-td"><strong>4. Snake River and High Desert</strong></td><td class="crd-td">35</td><td class="crd-td">3.750</td><td class="crd-td">Hagerman-Bliss (450)</td><td class="crd-td">0,09</td><td class="crd-td">0,09</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlement counts, leading centres and overall population density per km² across Northwest (HU 17) sub-regions.</figcaption>
</figure>

# Results

## Post-Glacial Colonisation and Early Holocene Canyon Fisheries (10000BC to 2000BC)

Following late-glacial Missoula megafloods and rapid stabilisation of Columbia and Snake river terraces, early hunter-gatherers colonised every HU 17 ecological tier by `10000BC` (`850` total inhabitants: `300` in Lower Columbia-Willamette, `250` on the Columbia Plateau, `150` in Puget Sound-Olympic Coast and `150` across the Snake River-Harney High Desert) [@cressman1960dalles]. Earliest documented occupations appear at `Cooper's Ferry` along the Salmon River (`10000BC`, `25` to `130` in `500AD`), `Rimrock Draw Rockshelter` (`10000BC`, `20` to `55` in `3000BC`), `Paisley Caves` (`10000BC`, `25` to `50` in `4000BC`), `Manis Mastodon` (`10000BC`, `20` to `30` in `8000BC`) and `East Wenatchee (Richey-Roberts)` (`10000BC`, `20` to `25` in `9000BC`), followed at `9500BC` by `Wenas Creek`, `Marymoor`, `Wilson Butte Cave`, `Connley Caves`, `Fort Rock Cave`, `Owl Cave (Wasden)` and `Jaguar Cave`.

Across the Early and Middle Holocene (`9000BC` to `2000BC`), regional population expanded steadily from `2,0k` in `9000BC` to `8,2k` in `7000BC`, `23,1k` in `5000BC` and `66,9k` in `2000BC` (`0,09` inhabitants/km²) as salmon-intercepting camps consolidated at canyon rapids [@cressman1960dalles; @matson1995northwest]. At The Dalles narrows, `Five Mile Rapids-Celilo` expanded from `40` in `8500BC` to `260` in `4000BC`, while upstream `Kettle Falls` (`6500BC`), `Celilo Falls (Wyam)` (`5000BC`) and `Marmes Rockshelter` (`9000BC`, `55` in `8000BC`, `110` in `4000BC`) anchored Plateau river fisheries.

<figure class="crd-figure-block" id="fig:traj-northwest">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northwest/fig2_northwest_trajectory.png" alt="fig:traj-northwest" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in the Northwest (HU 17) with uncertainty bounds, 10000BC to 1600AD.</figcaption>
</figure>

## Plank-House Sedentism and Estuary Intensification (1000BC to 1200AD)

Between `1000BC` and `1200AD`, Marpole-phase woodworking, large cedar plank-house villages, specialised salmon smoking and wapato-camas wetland management more than doubled HU 17 population from `88,5k` in `1000BC` to `113,3k` at `0AD` (`0,16` inhabitants/km²), `154,3k` in `600AD`, `175,4k` in `1000AD` and `184,3k` in `1200AD` (Table 1 and Figure 2) [@ames1999northwest; @matson1995northwest]. Along Puget Sound and the Strait of Juan de Fuca, `Tse-whit-zen` grew from `180` in `1000BC` to `380` at `0AD` and `620` in `800AD`, `Ozette` expanded from `320` at `0AD` to `580` in `800AD` and `Old Man House` climbed from `180` in `500AD` to `620` in `1200AD` [@rorabaugh2023salish].

On the Lower Columbia and Willamette, `Kalapuya-Champoeg` (`110` at `0AD` to `540` in `1200AD`) and `Multnomah (Sauvie Island)` (`180` at `0AD` to `340` in `800AD`) expanded alongside Oregon coastal shellmidden centres such as `Par-Tee` (`1000BC` to `1400AD`, peaking at `440`). Inland, `Five Mile Rapids-Celilo` reached `580` at `0AD` and `950` in `800AD`, while Snake River Plain fisheries consolidated around `Hagerman-Bliss` (`600AD` onward) and `Nampa (Deer Flat)` (`0AD` onward) [@cressman1960dalles].

## Late Holocene Continuity Through 1600AD

Mirroring Kelly et al. [@kelly2025] placing HU 17's radiocarbon median peak at `1592AD` and Rorabaugh's [@rorabaugh2023salish] Salish Sea continuity curve, all four Pacific Northwest sub-regions grew monotonically through `1600AD`. Regional totals advanced from `187,6k` in `1300AD` to `190,1k` in `1400AD`, `192,0k` in `1500AD`, `202,5k` in `1550AD` and `209,5k` in `1600AD` (`0,29` inhabitants/km², bounds `192,7k` to `226,3k`) (Figure 3 and Table 6).

Coastal and lower-river corridors concentrated `62,05%` of HU 17's `1600AD` inhabitants (`130,0k`) on just `20,40%` of regional land area (`145.241 km²`) [@boyd1999northwest; @ames1999northwest]. Lower Columbia-Willamette rose from `74,0k` in `1500AD` (`38,54%`) to `81,0k` in `1600AD` (`38,66%`, `0,81` inhabitants/km²), anchored by large Chinookan and Kalapuya towns at `Cathlapotle` (`1.200`), `Meier-Multnomah` (`950`), `Kalapuya-Champoeg` (`780`), `Multnomah (Sauvie Island)` (`610`), `Cascades (Watlala)` (`490`) and `Willapa Bay (Chinook Point)` (`480`). Puget Sound-Olympic Coast climbed from `44,0k` (`22,92%`) in `1500AD` to `49,0k` (`23,39%`) in `1600AD`, achieving the highest sub-regional density (`1,09` inhabitants/km²) behind `Ozette` (`1.150`), `Tse-whit-zen` (`1.120`), `Old Man House` (`920`), `Neah Bay` (`520`), `Duwamish Head` (`420`) and `Lummi (Point Francis)` (`420`).

Inland, the Columbia Plateau (`314.976 km²`) increased from `52,0k` in `1500AD` (`27,08%`) to `56,0k` in `1600AD` (`26,73%`, `0,18` inhabitants/km²), led by salmon trading emporia at `Five Mile Rapids-Celilo` (`1.600`), `Celilo Falls (Wyam)` (`850`), `Kettle Falls` (`560`), `Priest Rapids` (`460`), `Walla Walla (Wallula)` (`460`) and `Miller Site (Miller Island)` (`450`) [@cressman1960dalles]. Across the Snake River Plain and Owyhee-Harney desert (`251.873 km²`), population edged upward from `22,0k` in `1500AD` (`11,46%`) to `23,5k` in `1600AD` (`11,22%`, `0,09` inhabitants/km²), anchored by `Hagerman-Bliss` (`450`), `Nampa (Deer Flat)` (`240`), `Weiser (Mann Creek)` (`230`) and `Bruneau (Bliss)` (`220`).

<figure class="crd-figure-block" id="fig:shares-northwest">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northwest/fig3_northwest_shares.png" alt="fig:shares-northwest" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across the Northwest (HU 17) from 10000BC to 1600AD.</figcaption>
</figure>

## State Distribution and Settlement Size Tiers

Grouping the `140` catalogued settlements (`41.865` summed peak inhabitants) across modern state boundaries and size brackets confirms the contrast between riverine-coastal towns and interior rockshelters (Tables 4 and 5). Washington holds `61` sites (`22.945` summed peaks, led by `Cathlapotle` at `1.200`), Oregon holds `43` sites (`12.545` summed peaks, led by `Five Mile Rapids-Celilo` at `1.600`), Idaho holds `33` sites (`6.160` summed peaks, led by `Hagerman-Bliss` at `450`) and the upper Owyhee basin in northern Nevada contributes `3` sites (`215` summed peaks, led by `Owyhee Duck Valley Village` at `155`).

Across peak size brackets, `4` major capitals reach `1.000` or more inhabitants (`5.070` summed peaks), `7` regional towns fall between `500` and `999` (`5.190` summed peaks), `87` plank-house and canyon villages (`62,14%` of sites) span `200` to `499` (`28.080` summed peaks) and `42` rockshelters and early Holocene stations sit below `200` (`3.525` summed peaks).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">State</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Largest Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Washington</strong></td><td class="crd-td">61</td><td class="crd-td">43,6%</td><td class="crd-td">22.945</td><td class="crd-td">Cathlapotle (1.200)</td></tr>
<tr><td class="crd-td"><strong>Oregon</strong></td><td class="crd-td">43</td><td class="crd-td">30,7%</td><td class="crd-td">12.545</td><td class="crd-td">Five Mile Rapids-Celilo (1.600)</td></tr>
<tr><td class="crd-td"><strong>Idaho</strong></td><td class="crd-td">33</td><td class="crd-td">23,6%</td><td class="crd-td">6.160</td><td class="crd-td">Hagerman-Bliss (450)</td></tr>
<tr><td class="crd-td"><strong>Nevada</strong></td><td class="crd-td">3</td><td class="crd-td">2,1%</td><td class="crd-td">215</td><td class="crd-td">Owyhee Duck Valley Village (155)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Distribution of the 140 Pacific Northwest (HU 17) catalogued settlements by modern state jurisdiction.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Size Bracket</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Peak Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Major Capitals (&gt;= 1.000)</strong></td><td class="crd-td">4</td><td class="crd-td">2,9%</td><td class="crd-td">5.070</td><td class="crd-td">12,1%</td></tr>
<tr><td class="crd-td"><strong>Regional Towns (500 to 999)</strong></td><td class="crd-td">7</td><td class="crd-td">5%</td><td class="crd-td">5.190</td><td class="crd-td">12,4%</td></tr>
<tr><td class="crd-td"><strong>Plank-House &amp; River Villages (200 to 499)</strong></td><td class="crd-td">87</td><td class="crd-td">62,1%</td><td class="crd-td">28.080</td><td class="crd-td">67,1%</td></tr>
<tr><td class="crd-td"><strong>Rockshelters &amp; Early Stations (&lt; 200)</strong></td><td class="crd-td">42</td><td class="crd-td">30%</td><td class="crd-td">3.525</td><td class="crd-td">8,4%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Peak population size tiers across the 140 settlements in the Pacific Northwest (HU 17) gazetteer.</figcaption>
</figure>

## Chronological Peak Distribution of Catalogued Sites

Sorting the `140` catalogued settlements by the calendar year of their demographic maximum mirrors the late Holocene continuity documented by Kelly et al. [@kelly2025] (Table 6). Early Pleistocene-Holocene stations peak in small numbers (`3` Palaeoindian and Early Archaic sites summing to `95` peak inhabitants, led by `Lind Coulee` at `40` in `8000BC`, alongside `7` Middle and Late Archaic sites summing to `345` peaks, led by `Owl Cave (Wasden)` at `65` in `2000BC`).

Between `1000BC` and `999AD`, `10` sites reach peak size (`1.000` combined peaks, led by `Givens Hot Springs` at `190` in `500AD`), followed by `32` Late Prehistoric sites peaking between `1000AD` and `1499AD` (`5.120` summed peaks, led by `Par-Tee` at `440` in `1400AD`). More than three-fifths of all settlements (`88` sites, `62,86%`, accounting for `35.305` peak residents or `84,33%` of cumulative peaks) reach their highest population between `1500AD` and `1600AD`, headed by `Five Mile Rapids-Celilo` (`1.600`).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Peak Epoch</th><th class="crd-th">Sites</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Mean Peak</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian &amp; Early Archaic (10000-6001BC)</strong></td><td class="crd-td">3</td><td class="crd-td">95</td><td class="crd-td">32</td><td class="crd-td">Lind Coulee (40)</td></tr>
<tr><td class="crd-td"><strong>Middle &amp; Late Archaic (6000-1001BC)</strong></td><td class="crd-td">7</td><td class="crd-td">345</td><td class="crd-td">49</td><td class="crd-td">Cougar Mountain Cave (65)</td></tr>
<tr><td class="crd-td"><strong>Middle Period &amp; Marpole (1000BC-999AD)</strong></td><td class="crd-td">10</td><td class="crd-td">1.000</td><td class="crd-td">100</td><td class="crd-td">Givens Hot Springs (190)</td></tr>
<tr><td class="crd-td"><strong>Late Prehistoric (1000-1499AD)</strong></td><td class="crd-td">32</td><td class="crd-td">5.120</td><td class="crd-td">160</td><td class="crd-td">Par-Tee (440)</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact Horizon (1500-1600AD)</strong></td><td class="crd-td">88</td><td class="crd-td">35.305</td><td class="crd-td">401</td><td class="crd-td">Five Mile Rapids-Celilo (1.600)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Epoch distribution of peak settlement population across the 140 catalogued sites in the Northwest (HU 17).</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop.</th><th class="crd-th">Lower Bound</th><th class="crd-th">Upper Bound</th><th class="crd-th">Density (per km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">850</td><td class="crd-td">782</td><td class="crd-td">918</td><td class="crd-td">0,001</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">2k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">0,003</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">4,3k</td><td class="crd-td">4k</td><td class="crd-td">4,6k</td><td class="crd-td">0,006</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">8,2k</td><td class="crd-td">7,5k</td><td class="crd-td">8,9k</td><td class="crd-td">0,012</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">14,5k</td><td class="crd-td">13,3k</td><td class="crd-td">15,7k</td><td class="crd-td">0,02</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">23,1k</td><td class="crd-td">21,3k</td><td class="crd-td">24,9k</td><td class="crd-td">0,032</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">34,4k</td><td class="crd-td">31,6k</td><td class="crd-td">37,2k</td><td class="crd-td">0,048</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">48,9k</td><td class="crd-td">45k</td><td class="crd-td">52,8k</td><td class="crd-td">0,069</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">66,9k</td><td class="crd-td">61,5k</td><td class="crd-td">72,3k</td><td class="crd-td">0,094</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">88,5k</td><td class="crd-td">81,4k</td><td class="crd-td">95,6k</td><td class="crd-td">0,124</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">113,3k</td><td class="crd-td">104,2k</td><td class="crd-td">122,4k</td><td class="crd-td">0,159</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">127,5k</td><td class="crd-td">117,3k</td><td class="crd-td">137,7k</td><td class="crd-td">0,179</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">141,5k</td><td class="crd-td">130,2k</td><td class="crd-td">152,8k</td><td class="crd-td">0,199</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">154,3k</td><td class="crd-td">142k</td><td class="crd-td">166,6k</td><td class="crd-td">0,217</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">165,6k</td><td class="crd-td">152,4k</td><td class="crd-td">178,8k</td><td class="crd-td">0,233</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">175,4k</td><td class="crd-td">161,4k</td><td class="crd-td">189,4k</td><td class="crd-td">0,246</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">180,2k</td><td class="crd-td">165,8k</td><td class="crd-td">194,6k</td><td class="crd-td">0,253</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">184,3k</td><td class="crd-td">169,6k</td><td class="crd-td">199k</td><td class="crd-td">0,259</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">187,6k</td><td class="crd-td">172,6k</td><td class="crd-td">202,6k</td><td class="crd-td">0,263</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">190,1k</td><td class="crd-td">174,9k</td><td class="crd-td">205,3k</td><td class="crd-td">0,267</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">192k</td><td class="crd-td">176,6k</td><td class="crd-td">207,4k</td><td class="crd-td">0,27</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">202,5k</td><td class="crd-td">186,3k</td><td class="crd-td">218,7k</td><td class="crd-td">0,284</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">209,5k</td><td class="crd-td">192,7k</td><td class="crd-td">226,3k</td><td class="crd-td">0,294</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Headline population trajectory, 92 pct uncertainty intervals and mean density across the Northwest (HU 17).</figcaption>
</figure>

# Limitations

## Radiocarbon Reservoir Effects and Survey Visibility

Three methodological limitations qualify HU 17 demographic estimates. First, excluding marine shell dates removes variable Puget Sound and outer-coast upwelling reservoir offsets [@hadden2023shell], yet under-weights coastal shell-midden layers relative to charcoal-rich interior pithouse depressions [@rorabaugh2023salish]. Pairing excavated plank-house town trajectories with terrestrial radiocarbon surfaces helps counteract this coastal weighting asymmetry.

Second, dense temperate rainforest canopy, coastal estuary sedimentation and Cascade volcanic tephra blankets suppress archaeological survey visibility outside hydroelectric reservoir and highway CRM corridors along the Columbia and Snake rivers. High-elevation Cascade ranges and dense Olympic interior forests consequently show lower raw site density than valley bottoms, placing heavier reliance on environmental covariates within `sites_northern_america`.

## Seasonal Mobility and Post-1600AD Contact Horizon

Third, seasonal mobility between winter plank-house or pithouse villages and summer canyon fishing or root-digging camps such as Celilo Falls and Camas Prairie produces intra-annual population oscillations smoothed into annualised mean equivalents [@cressman1960dalles; @ames1999northwest]. Finally, the `1600AD` chronological ceiling precedes both the `1774AD` initial maritime arrivals along the outer coast and the catastrophic `1775AD` to `1782AD` smallpox pandemic reconstructed by Boyd [@boyd1999northwest; @jones2014]. Post-contact nadir trajectories and demographic bottlenecks observed in modern Indigenous genomic studies [@hunley2016reassessment] are therefore evaluated in the colonial and post-independence modules of CENTAUR-II rather than within the pre-contact hydrological series.

# Conclusion

Across 712.090 km² of Pacific fjords, cedar-forested estuaries, basalt river canyons and high-desert basins, the Pacific Northwest maintained continuous Holocene demographic growth from `850` inhabitants at `10000BC` to `113,3k` at `0AD`, `175,4k` at `1000AD`, `192,0k` at `1500AD` and `209,5k` (`0,29` inhabitants/km²) at `1600AD`. Coupling `sites_northern_america` non-stationary Matérn kriging (`93.358` unique site-periods across `4.457` domestic catchments, $\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04`, $R^2 = 0,999$) with `140` excavated settlement trajectories highlights the sharp geographic concentration of `62,05%` of regional inhabitants inside coastal Puget Sound (`1,09` inhabitants/km²) and the Lower Columbia-Willamette corridor (`0,81` inhabitants/km²).

Confirming Kelly et al.'s [@kelly2025] `1592AD` radiocarbon crest, HU 17 stands alongside California as a North American demographic core still expanding right up to `1600AD`. Together, the four sub-regional curves and `140` settlement histories bridge deep Pleistocene-Holocene fishery adaptation directly into early European maritime contact.

# Sources

<div id="refs"></div>
