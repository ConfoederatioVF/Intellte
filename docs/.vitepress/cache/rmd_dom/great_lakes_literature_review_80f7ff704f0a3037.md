---
title: "Great Lakes Hydrological Unit (HU 04): Lake Superior Wild Rice, Lake Michigan Ridged-Fields and Iroquois-Erie Borderlands"
subtitle: "CENTAUR-II: Contiguous Great Lakes Drainage Basin, 10000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: great_lakes_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_great_lakes_spatial.png"
hero_caption: "Areal mask and 11 verified settlements across USGS Hydrological Unit 04 (318,55k km2) from 10000 BC to 1600 AD. Three sub-regions span Superior copper-rice fisheries, Lake Michigan Oneota plains and Huron-Erie-Finger Lakes."
hero_label: "fig:hero-great-lakes"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Operation Viscount Project CENTAUR-II reconstructs the Holocene population of the Great Lakes basin (USGS Hydrological Unit 04, 318.548 km² across 5.507 five-arcminute cells) from 10000 BC to 1600 AD. Anchored to the radiocarbon summed probability distribution of Kelly et al. [@kelly2025] (HU 04 median peak at 1500 AD, N = 871, 450 cal BP) and non-stationary Matérn ($\nu = 3/2$) kriging over `p3k14c` [@bird2022p3k14c; @paciorek2006matern], total population rises from 250 inhabitants in 10000 BC to 82,4k at 0 AD and reaches a peak of 164k in 1500 AD (0,51 inhabitants/km²). Demographic density concentrates in the southern agricultural belts of Saginaw-Huron, Maumee-Erie and the Western New York Finger Lakes (88k in 1500 AD, 53,66% of regional total) and the Lake Michigan-Fox-Winnebago ridged-field zone (54k), compared with 22k around Lake Superior. Because European intrusion into the Great Lakes interior lagged behind Atlantic contact, totals decline modestly by 6,4% to 153,5k by 1600 AD [@trigger1976huron; @mason1981greatlakes; @jones2014].

# Background

Earlier global demographic models [@mcevedy1978; @kleingoldewijk2017] treated the Great Lakes basin as a sparsely inhabited northern fur-trade periphery, overlooking the high carrying capacity of lacustrine fisheries, wild rice marshes and late prehistoric maize ridged-fields [@cleland1982fishery; @overstreet1997oneota]. Across the 318,55k km² U.S. drainage of Lakes Superior, Michigan, Huron, Erie and Ontario, ecological boundaries separated boreal Algonquian hunter-fishers in the north from dense Oneota and Iroquoian horticultural confederacies in the south [@fitting1970michigan; @mason1981greatlakes].

Kelly et al. [@kelly2025] analysed 871 terrestrial radiocarbon dates across HU 04, establishing a regional summed probability peak at 450 cal BP (1500 AD, interquartile range 403 to 497 cal BP). Unlike Middle Mississippian hubs further south that contracted after 1200 to 1300 AD, Great Lakes populations expanded through the fifteenth century and experienced only gradual post-contact reduction prior to direct French penetration after 1608 AD [@trigger1976huron; @milner2010; @jones2014].

# Methodology

## Sub-Regional Partition and Areal Masks

CENTAUR-II partitions the 5.507 active cells of HU 04 (318.548 km²) into three physiographic sub-regions. The northern zone (`gl_superior_upper_peninsula`, 63.552 km², 1.218 pixels) encompasses the Lake Superior basin and Upper Peninsula copper-and-wild-rice territory [@martin1999copper; @cleland1982fishery]. The western zone (`gl_michigan_fox_winnebago`, 98.547 km², 1.672 pixels) covers Lake Michigan, Green Bay, the Fox-Winnebago waterway and western Lower Michigan occupied by Oneota and Menominee farmers [@overstreet1997oneota]. The southeastern zone (`gl_huron_erie_finger_lakes_ny`, 156.449 km², 2.617 pixels) covers Saginaw-Huron, Maumee-Erie and Western New York Finger Lakes polities including Seneca, Cayuga and Erie communities [@trigger1976huron; @mason1981greatlakes].

## Radiocarbon Kriging and Benchmark Calibration

Rural spatial weights derive from `sites_p3k14c_na` (1.359 domestic Voronoi catchments plus 171 cross-frontier buffer catchments across 10 Holocene horizons) [@bird2022p3k14c]. Freeman-Tukey transformed site densities undergo Empirical Bayes shrinkage and non-stationary Matérn ($\nu = 3/2$) kriging [@paciorek2006matern]. Eleven verified urban centres (`great_lakes_settlements.json`) are extracted prior to residual allocation, calibrating rural pixels to sub-regional targets with +/-8% uncertainty bounds across 23 benchmarks.

# Testing and Validation

All regional validation checks passed at 0 errors at GMT+0:

1. **Radiocarbon Sample Threshold**: HU 04 includes N = 871 terrestrial radiocarbon dates [@kelly2025], more than twice the 400-date reliability minimum [@crema2021rcarbon].
2. **Kriging Sharpness**: The `sites_p3k14c_na` variogram suite records `tau1 = 1,25` (limit `<= 1,80`), nugget-to-sill ratios between `0,04` and `0,22` (`< 0,45`) and pseudo-$R^2$ from `0,9733` to `0,9992`.
3. **Gazetteer Exhaustiveness**: Validation of `great_lakes_settlements.json` against `great_lakes_source_ledger.json5` yields 0 unmatched keys, 0 invalid coordinates and 0 schema errors across 11 included sites and 1 excluded Palaeoindian locality.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km2)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Lake Superior and Upper Peninsula</strong></td><td class="crd-td">63.552</td><td class="crd-td">13,4k</td><td class="crd-td">20,2k</td><td class="crd-td">21,8k</td><td class="crd-td">22k</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>2. Lake Michigan and Fox-Winnebago</strong></td><td class="crd-td">98.547</td><td class="crd-td">27,5k</td><td class="crd-td">47k</td><td class="crd-td">53,3k</td><td class="crd-td">54k</td><td class="crd-td">51k</td></tr>
<tr><td class="crd-td"><strong>3. Huron, Erie and Finger Lakes</strong></td><td class="crd-td">156.449</td><td class="crd-td">41,5k</td><td class="crd-td">75k</td><td class="crd-td">86,8k</td><td class="crd-td">88k</td><td class="crd-td">82k</td></tr>
<tr><td class="crd-td"><strong>HU 04 Total</strong></td><td class="crd-td">318.548</td><td class="crd-td">82,4k</td><td class="crd-td">142,2k</td><td class="crd-td">161,9k</td><td class="crd-td">164k</td><td class="crd-td">153,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional area and benchmark population estimates across the Great Lakes (HU 04) from 0 AD to 1600 AD.</figcaption>
</figure>

# Results

## Post-Glacial Colonisation and Archaic Copper-Fishery Economy

Following late-glacial retreat of the Laurentide ice sheet and formation of modern lake levels, HU 04 population grew from 250 inhabitants in 10000 BC to 16,6k in 5000 BC and 48,6k in 2000 BC [@mason1981greatlakes]. Late Archaic Old Copper extraction along the Keweenaw Peninsula and Isle Royale linked Lake Superior bands to wider continental exchange, while Middle and Late Woodland weir fisheries at Sault Ste. Marie and the Straits of Mackinac lifted total population to 82,4k at 0 AD and 119,5k in 600 AD [@martin1999copper; @cleland1982fishery].

<figure class="crd-figure-block" id="fig:traj-great-lakes">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-lakes/fig2_great_lakes_trajectory.png" alt="fig:traj-great-lakes" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in the Great Lakes (HU 04) with uncertainty bounds, 10000 BC to 1600 AD.</figcaption>
</figure>

## Oneota-Iroquoian Expansion and Deferred Contact Decline

From 1000 AD to 1500 AD, maize-squash ridged-fields in Wisconsin and palisaded Iroquoian towns in the Lower Lakes drove steady growth from 142,2k to 164k (0,51 inhabitants/km²) (Table 1 and Figure 2) [@overstreet1997oneota; @trigger1976huron]. The Huron-Erie-Finger Lakes sub-region expanded its regional share from 50,36% at 0 AD (41,5k) to 53,66% at 1500 AD (88k), while Lake Michigan-Fox-Winnebago held 32,93% (54k) and Lake Superior 13,41% (22k) (Figure 3). Unlike Atlantic coastal basins that declined sharply after 1500 AD, HU 04 experienced only mild indirect contraction via St. Lawrence trade corridors, remaining at 158,7k in 1550 AD and 153,5k in 1600 AD (0,48 inhabitants/km²) before seventeenth-century French missionary contact and Beaver Wars dislocation [@trigger1976huron; @ubelaker2006; @milner2010].

<figure class="crd-figure-block" id="fig:shares-great-lakes">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-lakes/fig3_great_lakes_shares.png" alt="fig:shares-great-lakes" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across the Great Lakes (HU 04) from 10000 BC to 1600 AD.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop.</th><th class="crd-th">Lower Bound</th><th class="crd-th">Upper Bound</th><th class="crd-th">Density (per km2)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">250</td><td class="crd-td">230</td><td class="crd-td">275</td><td class="crd-td">0,001</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">10,2k</td><td class="crd-td">9,4k</td><td class="crd-td">11k</td><td class="crd-td">0,032</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">35,8k</td><td class="crd-td">32,9k</td><td class="crd-td">38,7k</td><td class="crd-td">0,112</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">64,1k</td><td class="crd-td">59k</td><td class="crd-td">69,2k</td><td class="crd-td">0,201</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">82,4k</td><td class="crd-td">75,8k</td><td class="crd-td">89k</td><td class="crd-td">0,259</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">119,5k</td><td class="crd-td">109,9k</td><td class="crd-td">129,1k</td><td class="crd-td">0,375</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">142,2k</td><td class="crd-td">130,8k</td><td class="crd-td">153,6k</td><td class="crd-td">0,446</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">154,4k</td><td class="crd-td">142k</td><td class="crd-td">166,8k</td><td class="crd-td">0,485</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">161,9k</td><td class="crd-td">148,9k</td><td class="crd-td">174,9k</td><td class="crd-td">0,508</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">164k</td><td class="crd-td">150,9k</td><td class="crd-td">177,1k</td><td class="crd-td">0,515</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">158,7k</td><td class="crd-td">146k</td><td class="crd-td">171,4k</td><td class="crd-td">0,498</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">153,5k</td><td class="crd-td">141,2k</td><td class="crd-td">165,8k</td><td class="crd-td">0,482</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Headline population trajectory, 92 pct uncertainty intervals and mean density across the Great Lakes (HU 04).</figcaption>
</figure>

# Limitations

Three methodological limits apply to HU 04. First, isostatic rebound and Nipissing-phase lake-level changes submerged or eroded early Holocene shoreline sites around Lakes Michigan and Huron, attenuating early `p3k14c` site densities [@mason1981greatlakes; @fitting1970michigan]. Second, HU 04 is bounded by the U.S. hydrological divide and excludes Ontario's Huron-Wendat core north of Lake Ontario, which is modelled separately in CENTAUR-II Part 1 (`saint_lawrence`). Third, sixteenth-century disease mortality before 1615 AD is inferred indirectly from St. Lawrence Iroquoian village abandonments rather than contemporary Great Lakes census records [@trigger1976huron; @jones2014].

# Sources

<div id="refs"></div>
