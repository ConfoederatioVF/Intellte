---
title: "Mid-Atlantic Hydrological Unit (HU 02): Haudenosaunee Finger Lakes-Mohawk, Lenapehoking and Powhatan Tidewater"
subtitle: "CENTAUR-II: Contiguous Mid-Atlantic Drainage Basin, 10000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: mid_atlantic_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_mid_atlantic_spatial.png"
hero_caption: "Areal mask and 11 verified settlements across USGS Hydrological Unit 02 (245,67k km2) from 10000 BC to 1600 AD. Three sub-regions trace Hudson-Mohawk, Delaware-Susquehanna and Chesapeake Tidewater populations."
hero_label: "fig:hero-mid-atlantic"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Operation Viscount Project CENTAUR-II reconstructs the Holocene population of the Mid-Atlantic drainage (USGS Hydrological Unit 02, 245.674 km² across 3.885 five-arcminute cells) from 10000 BC to 1600 AD. Anchored to the radiocarbon summed probability distribution of Kelly et al. [@kelly2025] (HU 02 median peak at 1495 AD, N = 1.596, 455 cal BP) and non-stationary Matérn ($\nu = 3/2$) kriging over `p3k14c` [@bird2022p3k14c; @paciorek2006matern], regional population climbs from 850 inhabitants in 10000 BC to 110,5k at 0 AD and reaches a maximum of 198k in 1500 AD (0,81 inhabitants/km²). Demographic density is highest in the Chesapeake Tidewater (0,91 inhabitants/km² in 1500 AD, 76k) and Hudson-Mohawk corridor (0,9 inhabitants/km², 44k), alongside 78k across the Delaware-Susquehanna basin. Following sixteenth-century Atlantic littoral contact and inland disease diffusion, totals contract by 12,63% to 173k by 1600 AD [@snow1994iroquois; @rountree1989powhatan; @jones2014].

# Background

Previous continental reconstructions [@mcevedy1978; @kleingoldewijk2017] treated the Atlantic seaboard between Lake Champlain and the James River as a single low-density woodland margin. Regional ethnohistory and settlement archaeology demonstrate the opposite: the Mid-Atlantic river estuaries, Piedmont fall-line fisheries and Finger Lakes-Mohawk uplands sustained some of the densest non-Mississippian agricultural populations in eastern North America [@milner2010; @engelbrecht2003iroquois; @kraft2001lenape].

Unlike interior Mississippian valleys where urban abandonment began around 1150 to 1300 AD, HU 02 maintained uninterrupted growth through the Late Woodland period [@snow1994iroquois; @kent1984susquehannock]. Kelly et al. [@kelly2025] analysed 1.596 terrestrial radiocarbon dates across HU 02 and established a summed probability median peak at 455 cal BP (1495 AD, interquartile range 411 to 490 cal BP). Rapid sixteenth-century European maritime encounters in Chesapeake Bay and the Hudson estuary preceded permanent Jamestown (1607 AD) and New Netherland (1614 AD) colonies, initiating demographic decline after 1500 AD [@gallivan2007werowocomoco; @rountree1989powhatan; @jones2014].

# Methodology

## Sub-Regional Partition and Areal Masks

CENTAUR-II divides the 3.885 active 5-arcminute cells of HU 02 (245.674 km²) into three riverine and coastal sub-regions. The northern sub-region (`ma_hudson_mohawk_champlain`, 49.119 km², 774 pixels) encompasses the Hudson, Mohawk and Lake Champlain corridor occupied by Mohawk, Mahican and eastern Oneida settlements [@snow1994iroquois]. The central sub-region (`ma_delaware_susquehanna_lenape`, 112.742 km², 1.767 pixels) spans the Delaware and Susquehanna valleys and Upper Finger Lakes across Lenapehoking, Susquehannock and Onondaga territories [@kraft2001lenape; @kent1984susquehannock; @engelbrecht2003iroquois]. The southern sub-region (`ma_chesapeake_potomac_james_powhatan`, 83.813 km², 1.344 pixels) covers Chesapeake Bay, the Potomac, Rappahannock and James Tidewater polities led by Powhatan and Piscataway confederacies [@rountree1989powhatan; @gallivan2007werowocomoco].

## Radiocarbon Kriging and Benchmark Calibration

Rural habitation probabilities derive from `sites_p3k14c_na` (1.359 domestic Voronoi catchments and 171 cross-frontier buffer catchments over 10 Holocene horizons) [@bird2022p3k14c]. Empirical Bayes shrinkage and non-stationary Matérn ($\nu = 3/2$) kriging interpolate smoothed site densities [@paciorek2006matern]. Eleven verified urban settlements (`mid_atlantic_settlements.json`) are subtracted prior to residual allocation so rural grid sums calibrate cleanly to sub-regional targets with +/-8% uncertainty bounds across 23 benchmarks.

# Testing and Validation

All quantitative checks passed at 0 errors at GMT+0:

1. **Radiocarbon Sample Threshold**: HU 02 relies on N = 1.596 terrestrial radiocarbon dates [@kelly2025], nearly four times the 400-date reliability threshold [@crema2021rcarbon].
2. **Kriging Sharpness**: The `sites_p3k14c_na` variogram suite records `tau1 = 1,25` (limit `<= 1,80`), nugget-to-sill ratios of `0,04` to `0,22` (`< 0,45`) and pseudo-$R^2$ from `0,9733` to `0,9992`.
3. **Gazetteer Exhaustiveness**: Cross-verification of `mid_atlantic_settlements.json` and `mid_atlantic_source_ledger.json5` yields 0 unmatched keys, 0 invalid coordinates and 0 schema violations across 11 included settlements and 2 excluded entries.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km2)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Hudson, Mohawk and Champlain</strong></td><td class="crd-td">49.119</td><td class="crd-td">26,5k</td><td class="crd-td">41k</td><td class="crd-td">43,8k</td><td class="crd-td">44k</td><td class="crd-td">39k</td></tr>
<tr><td class="crd-td"><strong>2. Delaware, Susquehanna and Finger Lakes</strong></td><td class="crd-td">112.742</td><td class="crd-td">42k</td><td class="crd-td">70k</td><td class="crd-td">77,2k</td><td class="crd-td">78k</td><td class="crd-td">68k</td></tr>
<tr><td class="crd-td"><strong>3. Chesapeake, Potomac and James</strong></td><td class="crd-td">83.813</td><td class="crd-td">42k</td><td class="crd-td">68,5k</td><td class="crd-td">75,4k</td><td class="crd-td">76k</td><td class="crd-td">66k</td></tr>
<tr><td class="crd-td"><strong>HU 02 Total</strong></td><td class="crd-td">245.674</td><td class="crd-td">110,5k</td><td class="crd-td">179,5k</td><td class="crd-td">196,4k</td><td class="crd-td">198k</td><td class="crd-td">173k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional area and benchmark population estimates across the Mid-Atlantic (HU 02) from 0 AD to 1600 AD.</figcaption>
</figure>

# Results

## Archaic and Woodland Estuarine Consolidation

Between 10000 BC and 5000 BC, Mid-Atlantic occupation expanded from 850 inhabitants to 22,7k as post-glacial sea-level rise flooded the lower Susquehanna and Delaware valleys, creating productive tidal marshes in Chesapeake and Delaware bays [@kraft2001lenape]. Archaic and Early Woodland riverine base camps lifted total numbers to 65,4k in 2000 BC and 110,5k at 0 AD (0,45 inhabitants/km²). Middle and Late Woodland adoption of maize-bean horticulture raised regional population to 156k in 600 AD and 179,5k in 1000 AD (Table 1 and Figure 2) [@kent1984susquehannock; @engelbrecht2003iroquois].

<figure class="crd-figure-block" id="fig:traj-mid-atlantic">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-mid-atlantic/fig2_mid_atlantic_trajectory.png" alt="fig:traj-mid-atlantic" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in the Mid-Atlantic (HU 02) with uncertainty bounds, 10000 BC to 1600 AD.</figcaption>
</figure>

## Haudenosaunee-Powhatan Apex and Early Contact Contraction

All three HU 02 sub-regions reached their pre-contact apex simultaneously in 1500 AD, matching the 1495 AD radiocarbon peak [@kelly2025]. Regional totals climbed from 190,3k in 1200 AD to 196,4k in 1400 AD and 198k in 1500 AD (0,81 inhabitants/km²). Across the entire epoch, demographic shares remained balanced between the Delaware-Susquehanna corridor (39,39% at 1500 AD, 78k), Chesapeake Tidewater (38,38%, 76k) and Hudson-Mohawk valleys (22,22%, 44k) (Figure 3). Following sixteenth-century European coastal expeditions and fur-trade disease spread [@jones2014; @ubelaker2006], regional totals dropped to 185,5k in 1550 AD and 173k in 1600 AD (0,7 inhabitants/km²), with inland Iroquoian towns remaining relatively buffered until seventeenth-century epidemics [@snow1994iroquois; @milner2010].

<figure class="crd-figure-block" id="fig:shares-mid-atlantic">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-mid-atlantic/fig3_mid_atlantic_shares.png" alt="fig:shares-mid-atlantic" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across the Mid-Atlantic (HU 02) from 10000 BC to 1600 AD.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop.</th><th class="crd-th">Lower Bound</th><th class="crd-th">Upper Bound</th><th class="crd-th">Density (per km2)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">850</td><td class="crd-td">782</td><td class="crd-td">918</td><td class="crd-td">0,003</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">14,2k</td><td class="crd-td">13,1k</td><td class="crd-td">15,3k</td><td class="crd-td">0,058</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">48k</td><td class="crd-td">44,2k</td><td class="crd-td">51,8k</td><td class="crd-td">0,195</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">86,4k</td><td class="crd-td">79,5k</td><td class="crd-td">93,3k</td><td class="crd-td">0,352</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">110,5k</td><td class="crd-td">101,7k</td><td class="crd-td">119,3k</td><td class="crd-td">0,45</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">156k</td><td class="crd-td">143,5k</td><td class="crd-td">168,5k</td><td class="crd-td">0,635</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">179,5k</td><td class="crd-td">165,1k</td><td class="crd-td">193,9k</td><td class="crd-td">0,731</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">190,3k</td><td class="crd-td">175,1k</td><td class="crd-td">205,5k</td><td class="crd-td">0,775</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">196,4k</td><td class="crd-td">180,7k</td><td class="crd-td">212,1k</td><td class="crd-td">0,799</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">198k</td><td class="crd-td">182,2k</td><td class="crd-td">213,8k</td><td class="crd-td">0,806</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">185,5k</td><td class="crd-td">170,7k</td><td class="crd-td">200,3k</td><td class="crd-td">0,755</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">173k</td><td class="crd-td">159,2k</td><td class="crd-td">186,8k</td><td class="crd-td">0,704</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Headline population trajectory, 92 pct uncertainty intervals and mean density across the Mid-Atlantic (HU 02).</figcaption>
</figure>

# Limitations

Three constraints qualify HU 02 estimates. First, Holocene marine transgression submerged outer coastal plain and Chesapeake Bay Paleoindian-Archaic sites beneath modern estuarine sediments, biasing early Holocene `p3k14c` site densities toward upland Piedmont terraces [@kraft2001lenape]. Second, periodic longhouse village relocations every 15 to 25 years among Haudenosaunee and Susquehannock groups inflate archaeological site counts relative to contemporaneous population if settlement duration is not controlled [@snow1994iroquois; @engelbrecht2003iroquois]. Third, early sixteenth-century Tidewater contraction rates before 1607 AD rest on archaeological site decay rather than direct census counts [@rountree1989powhatan; @milner2010].

# Sources

<div id="refs"></div>
