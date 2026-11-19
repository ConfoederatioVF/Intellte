---
title: "Central Plains Hydrological Unit (HU 11): Arkansas-White-Red Basins, Spiro Mound Centre and Plains Villages"
subtitle: "CENTAUR-II: Contiguous Central Plains Drainage Basin, 10000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: central_plains_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_central_plains_spatial.png"
hero_caption: "Areal mask and 14 verified settlements across USGS Hydrological Unit 11 (645,29k km2) from 10000 BC to 1600 AD. Three sub-regions span the High Plains, Wichita Prairies and Lower Arkansas-Red valleys."
hero_label: "fig:hero-central-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Operation Viscount Project CENTAUR-II reconstructs the long-run demographic series of the Central Plains (USGS Hydrological Unit 11, Arkansas-White-Red drainage, 645.292 km² across 9.311 five-arcminute cells) from 10000 BC to 1600 AD. Guided by Kelly et al. [@kelly2025] radiocarbon peak timing (HU 11 median peak at 1483 AD, N = 1.549, 467 cal BP) and non-stationary Matérn ($\nu = 3/2$) kriging over the North American `p3k14c` corpus [@bird2022p3k14c; @paciorek2006matern], total population rises from 1.000 in 10000 BC to 86,3k at 0 AD and peaks at 160k in 1500 AD (0,25 inhabitants/km²). Sub-regional maxima diverge sharply in timing: the Lower Arkansas and Spiro Caddoan zone peaks at 1300 AD (58,5k) before contracting to 52k in 1500 AD, whereas the Middle Arkansas Wichita Prairies (72k) and Upper Arkansas High Plains (36k) expand until 1500 AD. Following Coronado's 1541 AD entrada and early colonial disease transmission, regional numbers decline by 21,88% to 125k in 1600 AD [@vehik2002wichita; @perttula1992caddo; @jones2014].

# Background

Previous continental reconstructions [@mcevedy1978; @kleingoldewijk2017] smoothed Central Plains indigenous density across uniform prairie-steppe bands, masking the west-to-east ecological gradient between semi-arid High Plains shortgrass prairie and humid Lower Arkansas bottomlands. Across this 645,29k km² basin, archaeological sequences document three distinct adaptive trajectories: Woodland mound-building centres along the lower Red and Arkansas rivers [@rolingson1998toltec], late prehistoric Plains Village farming complexes in Oklahoma and the Texas Panhandle [@lintz1986antelope; @drass1997washita] and protohistoric Wichita coalescent towns on the central prairies [@wedel1982quivira; @vehik2002wichita].

Kelly et al. [@kelly2025] demonstrated that HU 11 did not collapse contemporaneously with the American Bottom at 1150-1250 AD. Instead, 1.549 terrestrial radiocarbon dates yield a summed probability peak at 467 cal BP (1483 AD, interquartile range 436 to 484 cal BP). Although Caddoan mound ceremonialism at Spiro crested around 1300 AD [@brown1996spiro], demographic consolidation shifted northwestward into large Wichita settlements such as Etzanoa and Quivira during the fifteenth and early sixteenth centuries [@wedel1982quivira].

# Methodology

## Sub-Regional Partition and Areal Masks

CENTAUR-II partitions HU 11 across 9.311 active cells (645.292 km²) into three sub-regions. The western tier (`cp_high_plains_upper_arkansas`, 288.294 km², 4.163 pixels) encompasses the Upper Arkansas, Cimarron and Llano Estacado High Plains, including Antelope Creek stone-slab villages and eastern Pueblo frontier margins [@lintz1986antelope]. The central tier (`cp_neosho_verdigris_washita_prairies`, 194.550 km², 2.817 pixels) covers the Middle Arkansas, Neosho-Grand, Canadian and Washita prairies occupied by Washita River and ancestral Wichita farmers [@drass1997washita; @vehik2002wichita]. The eastern tier (`cp_arkansas_valley_ozark_spiro`, 162.448 km², 2.331 pixels) spans the Lower Arkansas Valley, Ozark Fringe and Red River Great Bend, anchored by Marksville, Toltec Mounds and Spiro [@brown1996spiro; @rolingson1998toltec; @perttula1992caddo].

## Radiocarbon Kriging and Benchmark Calibration

Rural habitation suitability is derived from `sites_p3k14c_na` (1.359 domestic Voronoi catchments plus 171 cross-frontier buffer catchments across 10 Holocene horizons) [@bird2022p3k14c]. Freeman-Tukey stabilised site densities undergo Empirical Bayes shrinkage and non-stationary Matérn ($\nu = 3/2$) interpolation [@paciorek2006matern]. Fourteen verified settlement trajectories (`central_plains_settlements.json`) are extracted from rural grids prior to dasymetric calibration to sub-regional targets with +/-8% uncertainty intervals across 23 benchmarks.

# Testing and Validation

All regional quality gates passed at 0 errors at GMT+0:

1. **Radiocarbon Sample Threshold**: HU 11 contains N = 1.549 terrestrial dates [@kelly2025], nearly four times the 400-date reliability minimum for 2.000-year peak estimation [@crema2021rcarbon].
2. **Kriging Sharpness**: The `sites_p3k14c_na` variogram suite meets all sharpness thresholds (`tau1 = 1,25 <= 1,80`, `nugget_to_sill = 0,04` to `0,22 < 0,45`, pseudo-$R^2 = 0,9733` to `0,9992`).
3. **Gazetteer Exhaustiveness**: Cross-checking `central_plains_settlements.json` against `central_plains_source_ledger.json5` yields 0 errors and 0 unaccounted entries across 14 included settlements and 3 excluded Palaeoindian kill or unlocated entries.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km2)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. High Plains and Upper Arkansas</strong></td><td class="crd-td">288.294</td><td class="crd-td">21,8k</td><td class="crd-td">31,4k</td><td class="crd-td">34,2k</td><td class="crd-td">36k</td><td class="crd-td">30k</td></tr>
<tr><td class="crd-td"><strong>2. Middle Arkansas and Washita</strong></td><td class="crd-td">194.550</td><td class="crd-td">31,5k</td><td class="crd-td">55,5k</td><td class="crd-td">65,5k</td><td class="crd-td">72k</td><td class="crd-td">57k</td></tr>
<tr><td class="crd-td"><strong>3. Lower Arkansas and Spiro</strong></td><td class="crd-td">162.448</td><td class="crd-td">33k</td><td class="crd-td">54,5k</td><td class="crd-td">58,5k</td><td class="crd-td">52k</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>HU 11 Total</strong></td><td class="crd-td">645.292</td><td class="crd-td">86,3k</td><td class="crd-td">141,4k</td><td class="crd-td">158,2k</td><td class="crd-td">160k</td><td class="crd-td">125k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional area and benchmark population estimates across the Central Plains (HU 11) from 0 AD to 1600 AD.</figcaption>
</figure>

# Results

## Holocene Growth and Woodland-Caddoan Divergence

Population in HU 11 rose from 1.000 inhabitants in 10000 BC to 19,6k in 5000 BC and 52,7k in 2000 BC as bison-hunting and riverine foraging expanded across tallgrass and mixed-grass prairies. By 0 AD, regional population stood at 86,3k (0,13 inhabitants/km²), with 38,24% concentrated in the humid Lower Arkansas and Red River valleys (33k). Middle and Late Woodland ceremonial complexes at Marksville, Troyville and Toltec Mounds drove growth to 120,7k in 600 AD and 141,4k in 1000 AD [@rolingson1998toltec; @brown1996spiro].

<figure class="crd-figure-block" id="fig:traj-central-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-central-plains/fig2_central_plains_trajectory.png" alt="fig:traj-central-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in the Central Plains (HU 11) with uncertainty bounds, 10000 BC to 1600 AD.</figcaption>
</figure>

## Spiro Peak, Prairie Coalescence and Post-1500 AD Decline

The Lower Arkansas and Ozark sub-region peaked at 58,5k in 1300 AD during the height of Spiro ceremonial exchange before declining to 55k in 1400 AD and 52k in 1500 AD [@brown1996spiro; @perttula1992caddo]. Conversely, Wichita and Plains Village communities in the central prairies expanded from 55,5k in 1000 AD to 69k in 1400 AD and 72k in 1500 AD (45% of HU 11 total), while the High Plains sub-region peaked at 36k in 1500 AD [@vehik2002wichita; @lintz1986antelope]. Combined regional numbers reached 160k in 1500 AD (0,25 inhabitants/km²), closely aligning with the 1483 AD radiocarbon peak [@kelly2025]. Following sixteenth-century Spanish expeditions and epidemic spread along Southern Plains exchange corridors, totals fell to 142,5k in 1550 AD and 125k in 1600 AD (0,19 inhabitants/km²) [@ubelaker2006; @jones2014; @milner2010].

<figure class="crd-figure-block" id="fig:shares-central-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-central-plains/fig3_central_plains_shares.png" alt="fig:shares-central-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across the Central Plains (HU 11) from 10000 BC to 1600 AD.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop.</th><th class="crd-th">Lower Bound</th><th class="crd-th">Upper Bound</th><th class="crd-th">Density (per km2)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">1k</td><td class="crd-td">920</td><td class="crd-td">1,1k</td><td class="crd-td">0,002</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">12,7k</td><td class="crd-td">11,7k</td><td class="crd-td">13,7k</td><td class="crd-td">0,02</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">39,4k</td><td class="crd-td">36,2k</td><td class="crd-td">42,6k</td><td class="crd-td">0,061</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">68,3k</td><td class="crd-td">62,8k</td><td class="crd-td">73,8k</td><td class="crd-td">0,106</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">86,3k</td><td class="crd-td">79,4k</td><td class="crd-td">93,2k</td><td class="crd-td">0,134</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">120,7k</td><td class="crd-td">111k</td><td class="crd-td">130,4k</td><td class="crd-td">0,187</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">141,4k</td><td class="crd-td">130,1k</td><td class="crd-td">152,7k</td><td class="crd-td">0,219</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">153,5k</td><td class="crd-td">141,2k</td><td class="crd-td">165,8k</td><td class="crd-td">0,238</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">158,2k</td><td class="crd-td">145,5k</td><td class="crd-td">170,9k</td><td class="crd-td">0,245</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">159,1k</td><td class="crd-td">146,4k</td><td class="crd-td">171,8k</td><td class="crd-td">0,247</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">160k</td><td class="crd-td">147,2k</td><td class="crd-td">172,8k</td><td class="crd-td">0,248</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">142,5k</td><td class="crd-td">131,1k</td><td class="crd-td">153,9k</td><td class="crd-td">0,221</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">125k</td><td class="crd-td">115k</td><td class="crd-td">135k</td><td class="crd-td">0,194</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Headline population trajectory, 92 pct uncertainty intervals and mean density across the Central Plains (HU 11).</figcaption>
</figure>

# Limitations

Three limitations affect HU 11 estimates. First, alluvial burial and channel migration along the Arkansas and Red rivers conceal Archaic and early Woodland sites beneath floodplains, depressing early Holocene site counts relative to upland High Plains localities. Second, mobile bison-hunting bands after 1450 AD left ephemeral camps that generate fewer radiocarbon samples per capita than sedentary earthlodge or stone-slab villages [@lintz1986antelope; @drass1997washita]. Third, protohistoric population estimates for aggregated Wichita towns rely on Spanish expedition narratives of 1541 and 1601 AD whose league and household tallies carry substantial uncertainty [@wedel1982quivira; @vehik2002wichita].

# Sources

<div id="refs"></div>
