---
title: "Upper Mississippi Hydrological Unit (HU 07): Settlement Gazetteer"
subtitle: "CENTAUR-II: Hopewell, Cahokia American Bottom and Oneota Centres, 0AD-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: upper_mississippi_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_upper_mississippi_spatial.png"
hero_caption: "Spatial distribution of 12 verified Hopewell, Mississippian and Oneota mound and village centres across Upper Mississippi Hydrological Unit 07."
hero_label: "fig:hero-upper-mississippi"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This gazetteer compiles verified WGS84 coordinates, occupational spans and benchmark population estimates for 12 excavated settlements across Upper Mississippi Hydrological Unit 07 from 0AD to 1600AD [@kelly2025; @bird2022p3k14c]. The inventory tracks Middle Woodland Hopewell mound complexes (Albany Mounds and Trempealeau), the Greater Cahokia urban hierarchy in the American Bottom (Cahokia, East St. Louis Mound Center, Mitchell and Emerald), Central Illinois and Lower Ohio Mississippian towns (Dickson Mounds and Kincaid Mounds), northern Mississippian outliers (Aztalan) and late precontact Oneota-Dakota-Miami centres (Mille Lacs-Kathio, Lake Winnebago-Oshkosh and Moccasin Bluff) [@milner1998cahokia; @pauketat2004cahokia; @goldstein1991aztalan; @gibbon2012archaeology]. Combined gazetteer populations peak at 32,7k in 1100AD before falling to 3,2k by 1600AD after the Vacant Quarter dispersal [@cobb2002vacant; @benson2009cahokia]. Source-ledger verification confirms all 12 included sites and 2 excluded Archaic shelters (`Koster` and `Modoc Rock Shelter`) with zero unaccounted candidates.



# Background

Urbanisation in HU 07 culminated in the American Bottom during the Lohmann and Stirling phases (1050-1200AD), when Cahokia (18k at 1100AD), East St. Louis (5,2k), Mitchell (2,2k) and Emerald (1,6k) formed an interconnected ceremonial and residential metropolis [@milner1998cahokia; @pauketat2004cahokia]. Northward Mississippian expansion reached Spoon River at Dickson Mounds (1,1k in 1200AD), the Crawfish River palisaded town of Aztalan (750 in 1100AD) and early Trempealeau bluff-top terraces [@conrad1991middle; @goldstein1991aztalan; @theler2003driftless]. After 1300AD, Kincaid Mounds reached 2,4k near the Ohio confluence prior to Vacant Quarter abandonment, while Oneota and Woodland towns flourished around Lake Winnebago-Oshkosh (1,45k in 1500AD), Moccasin Bluff (950 in 1500AD) and Mille Lacs-Kathio (820 in 1600AD) [@cobb2002vacant; @gibbon2012archaeology; @bettarel1973moccasin].

# Methodology

## Gazetteer Inclusion and Ledger Screening

All candidate sites were screened against Stadestér 2.0 standards requiring verified `[lat, lng]` coordinates, dated mound or residential features and bounded phase population trajectories [@bird2022p3k14c; @kelly2025]. Deeply stratified Archaic-Woodland base camps lacking bounded urban headcounts (`Koster` and `Modoc Rock Shelter`) are documented as excluded in `upper_mississippi_source_ledger.json5` and incorporated into sub-regional carrying capacities [@brown1983koster]. Benchmark timestamps follow GMT+0.

## Household and Mound-Precinct Estimation

Mississippian town totals combine excavated wall-trench house densities, domestic precinct areas and contemporaneous occupation spans adjusted for house replacement rates [@milner1998cahokia; @pauketat2004cahokia]. Hopewell and Oneota estimates integrate mapped residential terrace extents, storage-pit counts and burial-mound catchment populations [@theler2003driftless; @gibbon2012archaeology; @bettarel1973moccasin].

# Testing and Validation

Ledger checks verify exact 12-to-12 parity between `upper_mississippi_source_ledger.json5` and `upper_mississippi_settlements.json`, plus 2 excluded Archaic shelter sites. Chronological cross-checks capture the sequential shifts in urban hierarchy: Hopewellian Albany Mounds peaks in 200AD (680); the Greater Cahokia cluster peaks simultaneously in 1100AD (Cahokia 18k, East St. Louis 5,2k, Mitchell 2,2k, Emerald 1,6k and Aztalan 750); Kincaid Mounds peaks later in 1300AD (2,4k); and northern Oneota-Dakota centres reach maximum scale in 1500-1600AD [@benson2009cahokia; @cobb2002vacant; @gibbon2012archaeology].

# Results

## Verified Settlement Gazetteer

Table \ref{tab:gazetteer-upper-mississippi} details all 12 verified settlements in HU 07, and Figure \ref{fig:settlements-upper-mississippi} displays the steep rank-size hierarchy anchored by Cahokia (18k) and East St. Louis Mound Center (5,2k).

<figure class="crd-table-figure" id="tab:gazetteer-upper-mississippi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cahokia</strong></td><td class="crd-td">Illinois</td><td class="crd-td">38,66, -90,06</td><td class="crd-td">800-1400AD</td><td class="crd-td">18k</td><td class="crd-td">1,5k</td><td class="crd-td">18k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>East St. Louis Mound Center</strong></td><td class="crd-td">Illinois</td><td class="crd-td">38,63, -90,15</td><td class="crd-td">1000-1300AD</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">450</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mitchell</strong></td><td class="crd-td">Illinois</td><td class="crd-td">38,76, -90,09</td><td class="crd-td">1100-1200AD</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Emerald</strong></td><td class="crd-td">Illinois</td><td class="crd-td">38,63, -89,78</td><td class="crd-td">1000-1200AD</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dickson Mounds</strong></td><td class="crd-td">Illinois</td><td class="crd-td">40,39, -90,12</td><td class="crd-td">1000-1300AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">900</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Albany Mounds</strong></td><td class="crd-td">Illinois</td><td class="crd-td">41,78, -90,23</td><td class="crd-td">0-400AD</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aztalan</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">43,07, -88,86</td><td class="crd-td">1000-1200AD</td><td class="crd-td">750</td><td class="crd-td">-</td><td class="crd-td">750</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Trempealeau</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">44,01, -91,44</td><td class="crd-td">200-1300AD</td><td class="crd-td">650</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">520</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mille Lacs-Kathio</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">46,13, -93,75</td><td class="crd-td">1000-1600AD</td><td class="crd-td">820</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">580</td><td class="crd-td">760</td></tr>
<tr><td class="crd-td"><strong>Kincaid Mounds</strong></td><td class="crd-td">Illinois</td><td class="crd-td">37,08, -88,49</td><td class="crd-td">1100-1400AD</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">2,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lake Winnebago-Oshkosh</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">44,11, -88,69</td><td class="crd-td">1100-1600AD</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">580</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Moccasin Bluff</strong></td><td class="crd-td">Michigan</td><td class="crd-td">41,84, -86,34</td><td class="crd-td">1100-1500AD</td><td class="crd-td">950</td><td class="crd-td">-</td><td class="crd-td">420</td><td class="crd-td">780</td><td class="crd-td">950</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified Hopewell, Mississippian and Oneota settlements in Upper Mississippi HU 07 with coordinates, active spans and benchmark populations.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:settlements-upper-mississippi">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-upper-mississippi-settlements/fig4_upper_mississippi_settlements.png" alt="fig:settlements-upper-mississippi" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement hierarchy across the 12 verified sites in Upper Mississippi HU 07.</figcaption>
</figure>

## Source Ledger Audit

Table \ref{tab:ledger-upper-mississippi} documents all 14 evaluated candidates from `upper_mississippi_source_ledger.json5`.

<figure class="crd-table-figure" id="tab:ledger-upper-mississippi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Status</th><th class="crd-th">Ledger Classification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cahokia</strong></td><td class="crd-td">Illinois</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>East St. Louis Mound Center</strong></td><td class="crd-td">Illinois</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Mitchell</strong></td><td class="crd-td">Illinois</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Emerald</strong></td><td class="crd-td">Illinois</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Dickson Mounds</strong></td><td class="crd-td">Illinois</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Albany Mounds</strong></td><td class="crd-td">Illinois</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Aztalan</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Trempealeau</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Mille Lacs-Kathio</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Kincaid Mounds</strong></td><td class="crd-td">Illinois</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Lake Winnebago-Oshkosh</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Moccasin Bluff</strong></td><td class="crd-td">Michigan</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Koster</strong></td><td class="crd-td">Illinois</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
<tr><td class="crd-td"><strong>Modoc Rock Shelter</strong></td><td class="crd-td">Illinois</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source-ledger reconciliation for Upper Mississippi HU 07 showing 12 included sites and 2 excluded Archaic shelter deposits.</figcaption>
</figure>

# Limitations

Three limitations affect site-level resolution in HU 07. First, Greater Cahokia population estimates remain sensitive to assumed wall-trench house longevity and seasonal ceremonial aggregation versus year-round residency [@milner1998cahokia; @pauketat2004cahokia]. Second, `Cahokia`, `East St. Louis Mound Center`, `Mitchell` and `Emerald` sit on the HU 07-HU 10 seam and appear in both frontier conditioning inventories prior to Stadestér 2.0 deduplication. Third, nineteenth-century urban construction in East St. Louis and agricultural ploughing across the Illinois Valley truncated smaller mound peripheries.

# Sources

<div id="refs"></div>
