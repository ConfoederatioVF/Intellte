---
title: "Northern Plains Hydrological Unit (HU 10): Settlement Gazetteer"
subtitle: "CENTAUR-II: Earthlodge Towns, Buffalo Jumps and Plains Settlements, 9900BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: northern_plains_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northern_plains_spatial.png"
hero_caption: "Spatial distribution of 206 excavated earthlodge towns, communal bison jumps and early plains sites across Northern Plains Hydrological Unit 10."
hero_label: "fig:hero-northern-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This gazetteer compiles WGS84 coordinates, active occupational spans and benchmark population series for `206` excavated settlements and camp complexes (`640` settlement-year observations) across Northern Plains Hydrological Unit 10 between `9900BC` and `1600AD` [@kelly2025; @bird2022p3k14c]. The inventory spans Palaeoindian kill and burial localities (`La Sena`, `Big Eddy`, `Cherokee Sewer`, `Dent`, `Anzick`, `Lindenmeier`, `Agate Basin`), communal high-plains bison jumps and upland ceremonial sites (`First Peoples Buffalo Jump`, `Vore Buffalo Jump`, `Hagen`, `Medicine Wheel-Bighorn`), fortified Middle Missouri and Oneota earthlodge towns (`Blood Run`, `Sully`, `Double Ditch`, `Larson`, `On-A-Slant`, `Huff Indian Village`, `Big Hidatsa`, `Scattered Village`, `Crow Creek`, `Mitchell Prehistoric Village`), and Lower Missouri, Central Plains and confluence centres (`Utz`, `Mitchell`, `Paint Creek`, `Burkett`, `Wright`, `Steed-Kisker`, `El Quartelejo`) [@frison1991prehistoric; @lehmer1971middle; @wedel1959kansas; @pauketat2004cahokia]. Source-ledger reconciliation confirms `206` included sites and `1` excluded duplicate-alias entry (`First Peoples Buffalo Jump` twin within `2 km`), accounting for all `207` evaluated candidates with zero omissions.



# Background

Nucleated and seasonal habitations in Northern Plains HU 10 mirror the basin's east-to-west ecological gradient [@frison1991prehistoric; @wedel1959kansas]. On the western shortgrass plains and foothills of Montana, Wyoming and northern Colorado, early Palaeoindian and Archaic bands left stratified hunting camps at `La Sena` (`9900BC` to `9500BC`, `peak 40`), `Dent` (`9300BC` to `8900BC`, `peak 45`), `Anzick` (`9100BC` to `8900BC`, `peak 45`), `Lindenmeier` (`8900BC` to `8400BC`, `peak 110`) and `Agate Basin` (`8600BC` to `7500BC`, `peak 95`), followed in the late first and second millennia AD by large autumn bison-procurement congregations at `First Peoples Buffalo Jump` (`peak 520`) and `Vore Buffalo Jump` (`peak 390`) alongside late horticultural outposts such as `Hagen` (`peak 420`) [@reher1980vore; @mulloy1942hagen].

Along the Middle Missouri Trench in South Dakota, North Dakota and northwestern Iowa, Mandan, Hidatsa and Initial Coalescent villagers erected densely packed earthlodge towns on river bluffs, frequently fortified with dry ditches and bastioned timber palisades [@lehmer1971middle; @wood1967huff; @willey1990crow]. Early Plains Village towns such as `Mitchell Prehistoric Village` (`peak 720` in `1100AD`) and `Sommers` (`peak 880` in `1150AD`) gave way after `1300AD` to larger fortified towns including `Huff Indian Village` (`1,35k`), `Double Ditch` (`1,85k`), `Larson` (`1,48k`), `On-A-Slant` (`1,45k`), `Big Hidatsa` (`1,32k`) and `Sully` (`2,65k`), as well as the regional Oneota aggregation at `Blood Run` (`3,5k`).

Further south across Nebraska, Kansas, western Iowa and Missouri, early Mississippian-linked centres such as `Mitchell` on the eastern confluence seam (`2,2k` in `1100AD`), `Glenwood` (`880`) and `Steed-Kisker` (`680`) transitioned into expansive protohistoric Oneota, Pawnee and Wichita river towns led by `Utz` (`2,6k`), `Paint Creek` (`1,62k`), `Burkett` (`1,48k`) and `Wright` (`1,18k`) [@alex2000iowa; @wedel1959kansas; @pauketat2004cahokia].

# Methodology

## Gazetteer Inclusion and Boundary Assignment

Candidate sites were evaluated under Stadestér 2.0 criteria requiring documented WGS84 coordinates, stratified radiocarbon or ceramic dating and quantifiable residential or seasonal camp estimates [@bird2022p3k14c; @kelly2025]. Unlike earlier stub inventories that excluded kill-and-cache camps, the expanded `206`-site inventory integrates well-dated Palaeoindian and Archaic occupations alongside Plains Woodland and Plains Village towns while flagging duplicate coordinate twins within `2 km` in `northern_plains_source_ledger.json5`. Frontier settlements on the eastern Missouri-Mississippi seam (`Mitchell` in Illinois) and along adjacent state borders are retained for smooth cross-frontier Matérn conditioning, with all benchmark years stamped in GMT+0.

## Earthlodge and Camp Population Estimation

Middle Missouri, Central Plains and Oneota town totals multiply excavated or magnetically surveyed earthlodge counts by mean household size (`8-12` persons per lodge) and phase contemporaneity factors [@lehmer1971middle; @wood1967huff]. High-plains bison-jump and Palaeoindian camp figures reflect peak seasonal procurement congregations inferred from bonebed processing volume, hearth counts and camp scatter area [@reher1980vore; @frison1991prehistoric].

# Testing and Validation

Ledger reconciliation confirms `206` included sites matching `northern_plains_settlements.json` and `1` excluded duplicate-alias candidate (`First Peoples Buffalo Jump` duplicate entry within `2 km`), reconciling all `207` entries in `northern_plains_source_ledger.json5` with zero discrepancy. Chronological checks confirm the west-to-east settlement shift (`Table` \ref{tab:coverage-sett-northern-plains}): `87` sites sit in the Middle Missouri Trench (`42,2%`) and `81` in the Platte-Republican-Lower Missouri Prairie-Plains (`39,3%`), compared with `24` in Upper Missouri Montana (`11,7%`) and `14` in the Wyoming Basin (`6,8%`). Early village peaks at `Mitchell` (`2,2k` in `1100AD`), `Mitchell Prehistoric Village` (`720` in `1100AD`) and `Steed-Kisker` (`680` in `1200AD`) precede the protohistoric `1600AD` maxima at `Blood Run` (`3,5k`), `Sully` (`2,65k`), `Utz` (`2,6k`), `Double Ditch` (`1,85k`) and `Paint Creek` (`1,62k`) [@wood1967huff; @alex2000iowa; @wedel1959kansas].

<figure class="crd-table-figure" id="tab:coverage-sett-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Missouri &amp; Milk-Marias Steppe (Montana)</strong></td><td class="crd-td">24</td><td class="crd-td">11,7%</td><td class="crd-td">80</td><td class="crd-td">First Peoples Buffalo Jump (520)</td></tr>
<tr><td class="crd-td"><strong>Wyoming Basin: Yellowstone, Bighorn, Powder &amp; North Platte (Kelly HU 10-WY)</strong></td><td class="crd-td">14</td><td class="crd-td">6,8%</td><td class="crd-td">39</td><td class="crd-td">Vore Buffalo Jump (390)</td></tr>
<tr><td class="crd-td"><strong>Middle Missouri Trench: Mandan, Hidatsa &amp; Arikara Core (ND/SD)</strong></td><td class="crd-td">87</td><td class="crd-td">42,2%</td><td class="crd-td">276</td><td class="crd-td">Blood Run (3,5k)</td></tr>
<tr><td class="crd-td"><strong>Platte, Republican &amp; Lower Missouri Prairie-Plains (NE/KS/IA/MO)</strong></td><td class="crd-td">81</td><td class="crd-td">39,3%</td><td class="crd-td">245</td><td class="crd-td">Utz (2,6k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of the 206 catalogued settlements and benchmark observations across Northern Plains HU 10.</figcaption>
</figure>

# Results

## Leading Settlement Gazetteer

Table \ref{tab:gazetteer-northern-plains} lists the Top `45` settlements by peak population descending out of the `206` catalogued sites across HU 10, and Figure \ref{fig:settlements-northern-plains} plots the rank-size curve dominated by `Blood Run` (`3,5k`), `Sully` (`2,65k`), `Utz` (`2,6k`), `Mitchell` (`2,2k`), `Double Ditch` (`1,85k`) and `Paint Creek` (`1,62k`).

<figure class="crd-table-figure" id="tab:gazetteer-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Blood Run</strong></td><td class="crd-td">Iowa</td><td class="crd-td">43,47, -96,58</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Sully</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">44,62, -100,62</td><td class="crd-td">1480AD-1600AD</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Utz</strong></td><td class="crd-td">Missouri</td><td class="crd-td">39,27, -93,25</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Mitchell</strong></td><td class="crd-td">Illinois</td><td class="crd-td">38,76, -90,09</td><td class="crd-td">1050AD-1250AD</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Double Ditch</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">46,96, -100,93</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Paint Creek</strong></td><td class="crd-td">Kansas</td><td class="crd-td">38,5, -97,72</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Burkett</strong></td><td class="crd-td">Nebraska</td><td class="crd-td">41,41, -97,95</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Larson</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">47,04, -100,88</td><td class="crd-td">1480AD-1600AD</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>On-A-Slant</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">46,77, -100,84</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Huff Indian Village</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">46,62, -100,65</td><td class="crd-td">1400AD-1500AD</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Big Hidatsa</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">47,35, -101,38</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Scattered Village</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">46,83, -100,89</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Wright</strong></td><td class="crd-td">Nebraska</td><td class="crd-td">41,45, -97,77</td><td class="crd-td">1520AD-1600AD</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Arzberger</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">44,31, -100,22</td><td class="crd-td">1420AD-1580AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gray-Wolfe</strong></td><td class="crd-td">Nebraska</td><td class="crd-td">41,58, -97,09</td><td class="crd-td">1520AD-1600AD</td><td class="crd-td">980</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">980</td></tr>
<tr><td class="crd-td"><strong>Leary</strong></td><td class="crd-td">Nebraska</td><td class="crd-td">40, -95,39</td><td class="crd-td">1350AD-1600AD</td><td class="crd-td">980</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">890</td></tr>
<tr><td class="crd-td"><strong>Pawnee Indian Village</strong></td><td class="crd-td">Kansas</td><td class="crd-td">39,91, -97,86</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">950</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td"><strong>Palmer</strong></td><td class="crd-td">Nebraska</td><td class="crd-td">41,23, -98,27</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">940</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">940</td></tr>
<tr><td class="crd-td"><strong>Linwood</strong></td><td class="crd-td">Nebraska</td><td class="crd-td">41,41, -96,97</td><td class="crd-td">1520AD-1600AD</td><td class="crd-td">890</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">890</td></tr>
<tr><td class="crd-td"><strong>Glenwood</strong></td><td class="crd-td">Iowa</td><td class="crd-td">41,03, -95,74</td><td class="crd-td">800AD-1480AD</td><td class="crd-td">880</td><td class="crd-td">140</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sommers</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">44,22, -100,02</td><td class="crd-td">1000AD-1300AD</td><td class="crd-td">880</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Crow Creek</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">43,97, -99,33</td><td class="crd-td">1250AD-1360AD</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Chief Looking's Village</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">46,84, -100,82</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">840</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">840</td></tr>
<tr><td class="crd-td"><strong>Swan Creek</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">45,28, -100,28</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">840</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">840</td></tr>
<tr><td class="crd-td"><strong>Horse Creek</strong></td><td class="crd-td">Nebraska</td><td class="crd-td">41,35, -98,06</td><td class="crd-td">1520AD-1600AD</td><td class="crd-td">810</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">810</td></tr>
<tr><td class="crd-td"><strong>Talking Crow</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">44,05, -99,44</td><td class="crd-td">1350AD-1580AD</td><td class="crd-td">790</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hill</strong></td><td class="crd-td">Nebraska</td><td class="crd-td">40,05, -98,44</td><td class="crd-td">1520AD-1600AD</td><td class="crd-td">760</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">760</td></tr>
<tr><td class="crd-td"><strong>Fanning</strong></td><td class="crd-td">Kansas</td><td class="crd-td">39,88, -95,19</td><td class="crd-td">1480AD-1600AD</td><td class="crd-td">740</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">740</td></tr>
<tr><td class="crd-td"><strong>Clarks</strong></td><td class="crd-td">Nebraska</td><td class="crd-td">41,21, -97,84</td><td class="crd-td">1520AD-1600AD</td><td class="crd-td">720</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">720</td></tr>
<tr><td class="crd-td"><strong>Dodd</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">44,44, -100,41</td><td class="crd-td">1050AD-1550AD</td><td class="crd-td">720</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>King Hill</strong></td><td class="crd-td">Missouri</td><td class="crd-td">39,74, -94,84</td><td class="crd-td">1480AD-1600AD</td><td class="crd-td">720</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">720</td></tr>
<tr><td class="crd-td"><strong>Mitchell Prehistoric Village</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">43,73, -98,02</td><td class="crd-td">1000AD-1200AD</td><td class="crd-td">720</td><td class="crd-td">-</td><td class="crd-td">720</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cheyenne Village</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">44,74, -100,72</td><td class="crd-td">1050AD-1600AD</td><td class="crd-td">710</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">710</td></tr>
<tr><td class="crd-td"><strong>Doniphan</strong></td><td class="crd-td">Kansas</td><td class="crd-td">39,63, -95,08</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">690</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">690</td></tr>
<tr><td class="crd-td"><strong>Shermer</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">46,1, -100,59</td><td class="crd-td">1280AD-1420AD</td><td class="crd-td">690</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fort Clark</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">47,25, -101,28</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680</td></tr>
<tr><td class="crd-td"><strong>Steed-Kisker</strong></td><td class="crd-td">Missouri</td><td class="crd-td">39,27, -94,78</td><td class="crd-td">1100AD-1300AD</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">480</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Black Partizan</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">44,12, -99,58</td><td class="crd-td">1250AD-1520AD</td><td class="crd-td">640</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Phillips Ranch</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">44,41, -100,39</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">640</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">640</td></tr>
<tr><td class="crd-td"><strong>Amahami</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">47,33, -101,38</td><td class="crd-td">1520AD-1600AD</td><td class="crd-td">620</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Dixon</strong></td><td class="crd-td">Iowa</td><td class="crd-td">42,37, -95,74</td><td class="crd-td">1250AD-1550AD</td><td class="crd-td">620</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hosterman</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">45,09, -100,28</td><td class="crd-td">1480AD-1600AD</td><td class="crd-td">620</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">550</td></tr>
<tr><td class="crd-td"><strong>Wittrock</strong></td><td class="crd-td">Iowa</td><td class="crd-td">42,98, -95,42</td><td class="crd-td">1000AD-1250AD</td><td class="crd-td">620</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bagnell</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">47,26, -101,08</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">610</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">540</td></tr>
<tr><td class="crd-td"><strong>Broken Kettle</strong></td><td class="crd-td">Iowa</td><td class="crd-td">42,7, -96,56</td><td class="crd-td">900AD-1200AD</td><td class="crd-td">590</td><td class="crd-td">-</td><td class="crd-td">590</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 settlements in Northern Plains HU 10 ranked by peak population, with coordinates, active spans and benchmark counts.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:settlements-northern-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-plains-settlements/fig4_northern_plains_settlements.png" alt="fig:settlements-northern-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement hierarchy across the 206 catalogued sites in Northern Plains HU 10.</figcaption>
</figure>

## Source Ledger Audit

Table \ref{tab:ledger-northern-plains} documents all excluded candidate records from `northern_plains_source_ledger.json5` (capped at `30` rows), accounting for the sole duplicate-alias exclusion (`First Peoples Buffalo Jump` duplicate within `2 km`) alongside the `206` included entries (`207` total evaluated candidates).

<figure class="crd-table-figure" id="tab:ledger-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Status</th><th class="crd-th">Ledger Classification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>First Peoples Buffalo Jump</strong></td><td class="crd-td">Montana</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded duplicate-alias candidate records from the 207 evaluated entries in Northern Plains HU 10.</figcaption>
</figure>

# Limitations

Three constraints govern HU 10 site data. First, frontier boundary conditioning retains `Mitchell` on the Illinois confluence seam (`2,2k` in `1100AD`); in continental Stadestér 2.0 compilation, cross-border settlements are deduplicated deterministically without double counting [@pauketat2004cahokia]. Second, `Crow Creek` reflects a single catastrophic `1300AD` fortification and massacre horizon (`850` inhabitants) rather than a multi-century town occupation [@willey1990crow; @bamforth2018warfare]. Third, bison-jump figures at `First Peoples Buffalo Jump` and `Vore Buffalo Jump` represent peak autumn communal congregations rather than permanent year-round residency [@reher1980vore].

# Sources

<div id="refs"></div>
