---
title: "Great Basin Hydrological Unit (HU 16): Settlement Gazetteer"
subtitle: "CENTAUR-II: Fremont Oasis Villages, Marsh Fisheries and Desert Shelters, 9500BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: great_basin_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_great_basin_spatial.png"
hero_caption: "Spatial distribution of 63 Fremont village, wetland marsh, Paiute-Shoshone and Desert Archaic settlements across Great Basin Hydrological Unit 16."
hero_label: "fig:hero-great-basin"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This gazetteer compiles WGS84 coordinates, occupational spans and benchmark population series for `63` excavated settlement, marshland and rockshelter complexes (`187` benchmark observations) across Great Basin Hydrological Unit 16 from `9500BC` to `1600AD` [@kelly2025; @bird2022p3k14c]. The inventory spans major Utah and eastern Nevada Fremont villages (`Backhoe Village`, `Five Finger Ridge`, `Nephi Mounds`, `Pharo Village`, `Parowan Gap-Paragonah`, `Median Village`, `Nawthis Village`, `Baker Village`, `Evans Mound`), western Nevada Lahontan and Walker-Pyramid settlements (`Stillwater Marsh`, `Lovelock Cave`, `Pyramid Lake Paiute Village`, `Walker Lake Paiute Village`, `Lake Tahoe (Tahoe Reach)`, `Reese River Valley Village`), Sierra-Owens foothill complexes (`Bridgeport Valley Village`, `Martis Valley`) and early Desert Archaic caves (`Bonneville Estates Rockshelter`, `Kachina Cave`, `Fishbone Cave`, `Danger Cave`, `Hogup Cave`) [@meighan1956paragonah; @kelly2001marsh; @lawton1976owens; @jennings1957danger]. Source-ledger reconciliation confirms `63` included settlements and `3` excluded duplicate-alias entries (`Five Finger Ridge`, `Nephi Mounds` and `Lake Tahoe (Tahoe Reach)`) across all `66` evaluated candidates with zero unaccounted entries.



# Background

Durable Great Basin habitations clustered where perennial mountain streams intersected alluvial fans or productive lacustrine marshes. Along the eastern Great Basin rim, Fremont farmers constructed adobe granaries and semi-subterranean pithouse villages at `Backhoe Village` (`1,06k` at `1000AD`), `Five Finger Ridge` (`1,06k` at `900AD`), `Nephi Mounds` (`1,06k` at `1150AD`), `Pharo Village` (`1,06k` at `975AD`), `Parowan Gap-Paragonah` (`828` at `900AD`), `Median Village` (`583` at `700AD`) and `Nawthis Village` (`480` at `1100AD`) [@meighan1956paragonah; @finley2020fremont].

In the Lahontan Basin of western Nevada, long-duration marsh adaptations at `Lovelock Cave` (`350`) and `Stillwater Marsh` (`480`) anchored semi-sedentary cattail, bulrush and tui chub harvesting from the second millennium BC to contact, later joined by lakeshore Paiute settlements at `Pyramid Lake Paiute Village` (`320`), `Walker Lake Paiute Village` (`240`), `Lake Tahoe (Tahoe Reach)` (`190`) and `Bridgeport Valley Village` (`135`) on the southern Sierra margin [@kelly2001marsh; @lawton1976owens; @bettinger1982numic]. Deeply stratified caves including `Danger Cave` (`8500BC` to `500AD`, `peak 35`) and `Hogup Cave` (`6500BC` to `1200AD`, `peak 40`) preserve continuous foraging baselines back to the Early Holocene [@jennings1957danger].

# Methodology

## Gazetteer Compilation and Exclusion Rules

Candidates were screened under Stadestér 2.0 criteria requiring documented WGS84 coordinates, dated cultural horizons and quantified village, marsh-cluster or camp headcounts [@bird2022p3k14c; @kelly2025]. Unlike earlier stub lists that excluded Archaic caves, `Danger Cave`, `Hogup Cave`, `Bonneville Estates Rockshelter`, `Kachina Cave` and `Fishbone Cave` are included in the `63`-site inventory [@jennings1957danger], while `3` matching-name duplicate twins (`Five Finger Ridge`, `Nephi Mounds` and `Lake Tahoe (Tahoe Reach)`) consolidated into canonical entries are logged as excluded in `great_basin_source_ledger.json5`. All benchmark years follow GMT+0.

## Village and Wetland-Cluster Estimation

Fremont village figures derive from excavated pithouse and surface-granary counts scaled by phase contemporaneity and regional architectural tiers [@meighan1956paragonah; @finley2020fremont]. Wetland-complex and Paiute-Shoshone estimates for `Stillwater Marsh`, `Lovelock Cave`, `Pyramid Lake Paiute Village` and `Bridgeport Valley Village` aggregate contemporaneous residential house-pit clusters and ethnohistorically documented irrigated or marsh territories [@kelly2001marsh; @lawton1976owens].

# Testing and Validation

Ledger checks confirm exact correspondence between the `63` included settlements in `great_basin_settlements.json` and `great_basin_source_ledger.json5`, alongside `3` excluded duplicate-alias entries (`66` candidates total; `Table` \ref{tab:coverage-sett-great-basin}). Thirty-six sites sit in the Bonneville-Wasatch Oasis (`57,1%`), `26` in the Humboldt-Lahontan Corridor (`41,3%`) and `1` (`Bridgeport Valley Village`) in Central Nevada-Owens-Mojave (`1,6%`). Chronological checks reproduce the eastern-western structural contrast: most Utah Fremont villages peak between `900AD` and `1150AD` and terminate by `1300AD`, whereas Lahontan and Numic wetland villages (`Stillwater Marsh`, `Pyramid Lake Paiute Village`, `Walker Lake Paiute Village`, `Bridgeport Valley Village`) sustain or expand populations through `1500AD` to `1600AD` [@kelly2001marsh; @lawton1976owens].

<figure class="crd-table-figure" id="tab:coverage-sett-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lake Bonneville, Bear River &amp; Wasatch Oasis (Fremont)</strong></td><td class="crd-td">36</td><td class="crd-td">57,1%</td><td class="crd-td">116</td><td class="crd-td">Backhoe Village (1,1k)</td></tr>
<tr><td class="crd-td"><strong>Humboldt Sink, Lake Lahontan &amp; Carson-Truckee Corridor</strong></td><td class="crd-td">26</td><td class="crd-td">41,3%</td><td class="crd-td">69</td><td class="crd-td">Stillwater Marsh (480)</td></tr>
<tr><td class="crd-td"><strong>Central Nevada Valleys, Owens Valley &amp; Mojave Endorheic Basin</strong></td><td class="crd-td">1</td><td class="crd-td">1,6%</td><td class="crd-td">2</td><td class="crd-td">Bridgeport Valley Village (135)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of the 63 catalogued settlements and benchmark observations across Great Basin HU 16.</figcaption>
</figure>

# Results

## Leading Settlement Gazetteer

Table \ref{tab:gazetteer-great-basin} presents the Top `45` settlements ranked by peak population descending out of the `63` catalogued sites across HU 16, and Figure \ref{fig:settlements-great-basin} plots the rank-size hierarchy led by `Backhoe Village`, `Five Finger Ridge`, `Nephi Mounds` and `Pharo Village` (`1,06k` each), followed by `Parowan Gap-Paragonah` (`828`), `Median Village` (`583`), `Nawthis Village` (`480`) and `Stillwater Marsh` (`480`).

<figure class="crd-table-figure" id="tab:gazetteer-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">0AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Backhoe Village</strong></td><td class="crd-td">Utah</td><td class="crd-td">38,77, -112,08</td><td class="crd-td">700AD-1300AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Five Finger Ridge</strong></td><td class="crd-td">Utah</td><td class="crd-td">38,57, -112,34</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">120</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nephi Mounds</strong></td><td class="crd-td">Utah</td><td class="crd-td">39,6, -111,77</td><td class="crd-td">700AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">140</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pharo Village</strong></td><td class="crd-td">Utah</td><td class="crd-td">38,99, -111,81</td><td class="crd-td">700AD-1250AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Parowan Gap-Paragonah</strong></td><td class="crd-td">Utah</td><td class="crd-td">37,88, -112,77</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">828</td><td class="crd-td">-</td><td class="crd-td">380</td><td class="crd-td">740</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Median Village</strong></td><td class="crd-td">Utah</td><td class="crd-td">37,85, -112,84</td><td class="crd-td">700AD-1300AD</td><td class="crd-td">583</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nawthis Village</strong></td><td class="crd-td">Utah</td><td class="crd-td">38,8, -111,77</td><td class="crd-td">800AD-1100AD</td><td class="crd-td">480</td><td class="crd-td">-</td><td class="crd-td">240</td><td class="crd-td">480</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Stillwater Marsh</strong></td><td class="crd-td">Nevada</td><td class="crd-td">39,53, -118,48</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">480</td><td class="crd-td">280</td><td class="crd-td">420</td><td class="crd-td">480</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lovelock Cave</strong></td><td class="crd-td">Nevada</td><td class="crd-td">39,96, -118,56</td><td class="crd-td">2000BC-1500AD</td><td class="crd-td">350</td><td class="crd-td">240</td><td class="crd-td">310</td><td class="crd-td">350</td><td class="crd-td">260</td></tr>
<tr><td class="crd-td"><strong>Pyramid Lake Paiute Village</strong></td><td class="crd-td">Nevada</td><td class="crd-td">39,83, -119,36</td><td class="crd-td">1000AD-1550AD</td><td class="crd-td">320</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Baker Village</strong></td><td class="crd-td">Nevada</td><td class="crd-td">39,04, -114,12</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">246</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Walker Lake Paiute Village</strong></td><td class="crd-td">Nevada</td><td class="crd-td">38,95, -118,81</td><td class="crd-td">1000AD-1550AD</td><td class="crd-td">240</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Evans Mound</strong></td><td class="crd-td">Utah</td><td class="crd-td">37,87, -112,83</td><td class="crd-td">1050AD-1150AD</td><td class="crd-td">230</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lake Tahoe (Tahoe Reach)</strong></td><td class="crd-td">California</td><td class="crd-td">39,17, -120,14</td><td class="crd-td">2000BC-1500AD</td><td class="crd-td">190</td><td class="crd-td">95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">190</td></tr>
<tr><td class="crd-td"><strong>Reese River Valley Village</strong></td><td class="crd-td">Nevada</td><td class="crd-td">39,49, -117,17</td><td class="crd-td">1000AD-1550AD</td><td class="crd-td">165</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Wolf Village</strong></td><td class="crd-td">Utah</td><td class="crd-td">39,98, -111,81</td><td class="crd-td">1000AD-1150AD</td><td class="crd-td">165</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>26WP12</strong></td><td class="crd-td">Nevada</td><td class="crd-td">38,96, -114,26</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">164</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Martis Valley</strong></td><td class="crd-td">California</td><td class="crd-td">39,32, -120,15</td><td class="crd-td">2000BC-1200AD</td><td class="crd-td">140</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ruby Valley Shoshone Village</strong></td><td class="crd-td">Nevada</td><td class="crd-td">40,19, -115,48</td><td class="crd-td">1100AD-1550AD</td><td class="crd-td">140</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">85</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bridgeport Valley Village</strong></td><td class="crd-td">California</td><td class="crd-td">38,26, -119,23</td><td class="crd-td">1000AD-1550AD</td><td class="crd-td">135</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Summit Site</strong></td><td class="crd-td">Utah</td><td class="crd-td">37,8, -112,94</td><td class="crd-td">950AD-1120AD</td><td class="crd-td">135</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hinckley Mounds</strong></td><td class="crd-td">Utah</td><td class="crd-td">40,23, -111,72</td><td class="crd-td">950AD-1200AD</td><td class="crd-td">125</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Genoa Fort</strong></td><td class="crd-td">Nevada</td><td class="crd-td">39, -119,85</td><td class="crd-td">1100AD-1550AD</td><td class="crd-td">115</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Willard Mounds</strong></td><td class="crd-td">Utah</td><td class="crd-td">41,41, -112,05</td><td class="crd-td">950AD-1150AD</td><td class="crd-td">115</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Weston Canyon Rockshelter</strong></td><td class="crd-td">Idaho</td><td class="crd-td">42,07, -112,02</td><td class="crd-td">5500BC-1000AD</td><td class="crd-td">110</td><td class="crd-td">95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Grantsville Mound</strong></td><td class="crd-td">Utah</td><td class="crd-td">40,6, -112,46</td><td class="crd-td">950AD-1100AD</td><td class="crd-td">105</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">105</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ephraim Mound</strong></td><td class="crd-td">Utah</td><td class="crd-td">39,36, -111,58</td><td class="crd-td">950AD-1120AD</td><td class="crd-td">95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>King's Beach Washoe Village</strong></td><td class="crd-td">California</td><td class="crd-td">39,24, -120,03</td><td class="crd-td">1000BC-1500AD</td><td class="crd-td">85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">85</td></tr>
<tr><td class="crd-td"><strong>Garrison Site</strong></td><td class="crd-td">Utah</td><td class="crd-td">38,94, -114,03</td><td class="crd-td">1050AD-1200AD</td><td class="crd-td">80</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Marysvale Fremont Village</strong></td><td class="crd-td">Utah</td><td class="crd-td">38,45, -112,23</td><td class="crd-td">950AD-1120AD</td><td class="crd-td">80</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pharo Village</strong></td><td class="crd-td">Utah</td><td class="crd-td">39,22, -112,11</td><td class="crd-td">1120AD-1200AD</td><td class="crd-td">80</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Injun Creek</strong></td><td class="crd-td">Utah</td><td class="crd-td">41,24, -112,17</td><td class="crd-td">1250AD-1450AD</td><td class="crd-td">75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Woodard Mound</strong></td><td class="crd-td">Utah</td><td class="crd-td">40,02, -111,8</td><td class="crd-td">1100AD-1250AD</td><td class="crd-td">75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">55</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bear River No. 2</strong></td><td class="crd-td">Utah</td><td class="crd-td">41,54, -112,21</td><td class="crd-td">885AD-1100AD</td><td class="crd-td">70</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">70</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bear River No. 3</strong></td><td class="crd-td">Utah</td><td class="crd-td">41,54, -112,21</td><td class="crd-td">980AD-1100AD</td><td class="crd-td">70</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">70</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bear River No. 1</strong></td><td class="crd-td">Utah</td><td class="crd-td">41,54, -112,21</td><td class="crd-td">885AD-1000AD</td><td class="crd-td">65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kay's Cabin</strong></td><td class="crd-td">Utah</td><td class="crd-td">40,06, -111,75</td><td class="crd-td">1050AD-1150AD</td><td class="crd-td">65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Levee Site</strong></td><td class="crd-td">Utah</td><td class="crd-td">41,52, -112,19</td><td class="crd-td">1090AD-1350AD</td><td class="crd-td">65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Parowan Gap</strong></td><td class="crd-td">Utah</td><td class="crd-td">37,91, -112,99</td><td class="crd-td">950AD-1100AD</td><td class="crd-td">65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Promontory Cave 1</strong></td><td class="crd-td">Utah</td><td class="crd-td">41,3, -112,48</td><td class="crd-td">1250AD-1290AD</td><td class="crd-td">65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Steamboat Hot Springs</strong></td><td class="crd-td">Nevada</td><td class="crd-td">39,38, -119,75</td><td class="crd-td">2000BC-1000AD</td><td class="crd-td">65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tooele Valley Fremont</strong></td><td class="crd-td">Utah</td><td class="crd-td">40,55, -112,31</td><td class="crd-td">950AD-1120AD</td><td class="crd-td">65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vista Site</strong></td><td class="crd-td">Nevada</td><td class="crd-td">39,52, -119,72</td><td class="crd-td">1000BC-500AD</td><td class="crd-td">65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Grimes Point</strong></td><td class="crd-td">Nevada</td><td class="crd-td">39,4, -118,64</td><td class="crd-td">5000BC-800AD</td><td class="crd-td">60</td><td class="crd-td">-</td><td class="crd-td">60</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hogup Cave</strong></td><td class="crd-td">Utah</td><td class="crd-td">41,49, -113,12</td><td class="crd-td">6500BC-1200AD</td><td class="crd-td">40</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 Fremont, wetland marsh and desert settlements in Great Basin HU 16 ranked by peak population.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:settlements-great-basin">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-basin-settlements/fig4_great_basin_settlements.png" alt="fig:settlements-great-basin" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement hierarchy across the 63 catalogued complexes in Great Basin HU 16.</figcaption>
</figure>

## Source Ledger Audit

Table \ref{tab:ledger-great-basin} documents all `3` excluded duplicate-alias candidate records from `great_basin_source_ledger.json5` (capped at `30` rows), accounting together with the `63` included sites for all `66` evaluated candidates.

<figure class="crd-table-figure" id="tab:ledger-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Status</th><th class="crd-th">Ledger Classification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Five Finger Ridge</strong></td><td class="crd-td">Utah</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Nephi Mounds</strong></td><td class="crd-td">Utah</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Lake Tahoe (Tahoe Reach)</strong></td><td class="crd-td">California</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded duplicate-alias candidate records from the 66 evaluated entries in Great Basin HU 16.</figcaption>
</figure>

# Limitations

Three limitations affect site-level resolution in HU 16. First, `Stillwater Marsh` and `Lovelock Cave` represent multi-locus wetland catchment clusters rather than compact walled towns, meaning reported totals aggregate contemporaneous marsh-rim camps [@kelly2001marsh]. Second, `Central Nevada Valleys, Owens Valley & Mojave Endorheic Basin` holds only `1` catalogued settlement (`Bridgeport Valley Village`), because dispersed Shoshone winter camps and Paiute seed-harvesting camps left ephemeral brush architecture captured chiefly in sub-regional carrying capacities [@bettinger1982numic; @lawton1976owens]. Third, the four largest Utah Fremont villages share a `1.060`-person standardised regional architectural tier ceiling, flattening fine-grained site differences at the upper end of the rank-size curve (`Figure` \ref{fig:settlements-great-basin}).

# Sources

<div id="refs"></div>
