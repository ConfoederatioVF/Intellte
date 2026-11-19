---
title: "Arizona Hydrological Unit (HU 15): Settlement Gazetteer"
subtitle: "CENTAUR-II: Hohokam Canal Centres, Mogollon and Hopi-Zuni Pueblos, 9500BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: arizona_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_arizona_spatial.png"
hero_caption: "Spatial distribution of 584 Hohokam, Puebloan, Mogollon, Patayan and Desert Archaic settlements across Arizona Hydrological Unit 15."
hero_label: "fig:hero-arizona"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This gazetteer compiles WGS84 coordinates, active occupational spans and benchmark population series for `584` excavated settlements and residential complexes (`1.915` benchmark observations) across Arizona Hydrological Unit 15 from `9500BC` to `1600AD` [@kelly2025; @bird2022p3k14c]. The inventory spans major Salt-Gila Hohokam canal centres (`Snaketown`, `Pueblo Grande`, `Casa Grande`, `Los Muertos`, `Cashion Ruin`, `Escalante`, `Grand Canal`), Mogollon and San Pedro-Tucson settlements (`Los Morteros-Point of Pines`, `Grasshopper Pueblo`, `Babocomari Village`, `Bailey Ruin`), Hopi, Zuni and Sinagua pueblos (`Oraibi`, `Hawikuh`, `Homol'ovi`, `Halona:wa`, `Awatovi`, `Chaves Pass`, `Matsaki`, `Wupatki`), Lower Colorado Patayan-Yuman sites (`Blythe Intaglios-Yuman`, `Blythe Intaglios`) and Desert Archaic shelters (`Tule Springs`, `Ventana Cave`, `Gypsum Cave`) [@haury1976hohokam; @fish2007hohokam; @reid1999grasshopper; @adams2002homolovi]. Source-ledger reconciliation confirms `584` included settlements and `11` excluded duplicate-alias consolidations across all `595` evaluated candidates with zero unaccounted entries.



# Background

Nucleated settlements across HU 15 reflect desert hydraulic engineering, alluvial flood-recession farming and defensive plateau aggregation. In the Phoenix Basin, `Snaketown` (`3,2k` at `1000AD`) anchored Pioneer through Sedentary canal irrigation before Classic Period platform-mound centres expanded at `Pueblo Grande` (`3,1k` in `1300AD`), `Casa Grande` (`2,6k` in `1300AD`) and `Los Muertos` (`1,4k` in `1350AD`) [@haury1976hohokam; @fish2007hohokam].

Across the Tucson Basin, San Pedro Valley and Mogollon Rim, early agricultural camps (`Los Morteros`, `Santa Cruz Bend`, `Tumamoc Hill`) preceded large aggregated villages including `Los Morteros-Point of Pines` (`1,35k` in `1200AD`), `Grasshopper Pueblo` (`1,1k` in `1300AD`) and `Babocomari Village` (`1,06k`) [@hill2004southwest; @reid1999grasshopper]. On the Little Colorado Plateau, Pueblo III-IV coalescence sustained `Wupatki` (`1,06k`), `Chaves Pass` (`1,15k` in `1375AD`), `Homol'ovi` (`1,45k` in `1400AD`), `Oraibi` (`2,1k` in `1600AD`), `Hawikuh` (`1,65k` in `1500AD`), `Halona:wa` (`1,25k` in `1540AD`), `Awatovi` (`1,2k` in `1540AD`) and `Matsaki` (`1,15k` in `1540AD`) [@adams2002homolovi; @smith1966hawikuh].

# Methodology

## Gazetteer Compilation and Ledger Screening

Each candidate site was checked against Stadestér 2.0 criteria requiring documented WGS84 coordinates, dated architectural or radiocarbon horizons and quantified residential population series [@bird2022p3k14c; @kelly2025]. Unlike earlier stub lists that omitted rockshelters, `Ventana Cave` (`8500BC` to `1200AD`, `peak 45`) and `Cibola Spring` (`1250AD` to `1325AD`, `peak 240`) enter the `584`-site inventory, while `11` matching-name duplicate twins located within `0` to `22 km` of canonical centroids are logged as excluded in `arizona_source_ledger.json5` [@smith1966hawikuh]. All benchmark years follow GMT+0.

## Room-Count and Compound Demography

Puebloan and Mogollon site figures derive from excavated and surface-mapped room counts adjusted by contemporaneous occupation ratios, roof-area coefficients and tree-ring construction phases [@reid1999grasshopper; @adams2002homolovi; @robinson2021dendro]. Hohokam estimates integrate mapped courtyard-group and compound areas with regional canal-command population models [@haury1976hohokam; @hill2004southwest; @fish2007hohokam].

# Testing and Validation

Ledger reconciliation confirms exact agreement across `584` included settlements in `arizona_settlements.json` and `11` excluded duplicate-alias entries in `arizona_source_ledger.json5`, totalling `595` evaluated candidates (`Table` \ref{tab:coverage-sett-arizona}). Sub-regional counts cluster heavily on the Little Colorado Plateau (`297` sites, `50,9%`) and the Salt-Verde-Middle Gila Core (`189` sites, `32,4%`), followed by the Santa Cruz-San Pedro-Cochise Highlands (`91`, `15,6%`) and the Lower Colorado corridor (`7`, `1,2%`). Chronological cross-checks confirm the Hohokam-to-Pueblo IV demographic shift: `Snaketown` (`3,2k` in `1000AD`) declines ahead of Classic maxima at `Pueblo Grande` (`3,1k`) and `Casa Grande` (`2,6k`) in `1300AD`, after which Salt-Gila centres contract sharply while Hopi and Zuni towns (`Oraibi`, `Hawikuh`, `Homol'ovi`, `Halona:wa`, `Awatovi`) sustain large populations through `1400AD` to `1600AD` [@hill2004southwest; @adams2002homolovi; @robinson2021dendro].

<figure class="crd-table-figure" id="tab:coverage-sett-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Little Colorado &amp; Hopi Mesas Plateau</strong></td><td class="crd-td">297</td><td class="crd-td">50,9%</td><td class="crd-td">987</td><td class="crd-td">Orayvi (2,1k)</td></tr>
<tr><td class="crd-td"><strong>Salt-Verde-Middle Gila Core (Phoenix Basin Hohokam)</strong></td><td class="crd-td">189</td><td class="crd-td">32,4%</td><td class="crd-td">626</td><td class="crd-td">S-Kiukchu'k (3,2k)</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz, San Pedro &amp; Cochise Highlands</strong></td><td class="crd-td">91</td><td class="crd-td">15,6%</td><td class="crd-td">284</td><td class="crd-td">Los Morteros-Point of Pines (1,4k)</td></tr>
<tr><td class="crd-td"><strong>Lower Colorado Corridor &amp; Western Sonoran Desert (Patayan/Yuman)</strong></td><td class="crd-td">7</td><td class="crd-td">1,2%</td><td class="crd-td">18</td><td class="crd-td">Blythe Intaglios-Yuman (750)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of the 584 catalogued settlements and benchmark observations across Arizona HU 15.</figcaption>
</figure>

# Results

## Leading Settlement Gazetteer

Table \ref{tab:gazetteer-arizona} reports the Top `45` settlements ranked by peak population descending out of the `584` catalogued settlements in HU 15, and Figure \ref{fig:settlements-arizona} displays the full `584`-site rank-size curve led by `Snaketown` (`3,2k`), `Pueblo Grande` (`3,1k`), `Casa Grande` (`2,6k`) and `Oraibi` (`2,1k`), followed by the `112`-site modal architectural tier at `1,06k`.

<figure class="crd-table-figure" id="tab:gazetteer-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>S-Kiukchu'k</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,19, -111,92</td><td class="crd-td">400AD-1100AD</td><td class="crd-td">3,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pueblo Grande</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,45, -111,98</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">3,1k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sivan Vah'ki</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33, -111,53</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Orayvi</strong></td><td class="crd-td">Arizona</td><td class="crd-td">35,88, -110,64</td><td class="crd-td">600AD-1600AD</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Hawikku</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">34,93, -109</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Homol'ovi</strong></td><td class="crd-td">Arizona</td><td class="crd-td">35,06, -110,65</td><td class="crd-td">1300AD-1400AD</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Los Muertos</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,3, -111,92</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Los Morteros-Point of Pines</strong></td><td class="crd-td">Arizona</td><td class="crd-td">32,33, -111,12</td><td class="crd-td">800AD-1300AD</td><td class="crd-td">1,4k</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Halona:wa</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">35,07, -108,85</td><td class="crd-td">1285AD-1540AD</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Awatovi</strong></td><td class="crd-td">Arizona</td><td class="crd-td">35,72, -110,28</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Chaves Pass</strong></td><td class="crd-td">Arizona</td><td class="crd-td">34,78, -111,14</td><td class="crd-td">1280AD-1375AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mats'a:kya</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">35,06, -108,8</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Grasshopper Pueblo</strong></td><td class="crd-td">Arizona</td><td class="crd-td">34,08, -110,63</td><td class="crd-td">1265AD-1400AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>3-Up</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">33,17, -109</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Apache Creek Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">33,84, -108,62</td><td class="crd-td">300AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Babocomari Village</strong></td><td class="crd-td">Arizona</td><td class="crd-td">31,52, -110,37</td><td class="crd-td">400AD-1450AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bailey Ruin</strong></td><td class="crd-td">Arizona</td><td class="crd-td">34,33, -110,45</td><td class="crd-td">400AD-1450AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bass Point Mound</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,62, -111,02</td><td class="crd-td">400AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bluewater Spring</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">35,54, -108,19</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Boss Ranch</strong></td><td class="crd-td">Arizona</td><td class="crd-td">31,6, -109,26</td><td class="crd-td">400AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Brady Wash</strong></td><td class="crd-td">Arizona</td><td class="crd-td">32,73, -111,33</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">210</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Broken K Pueblo</strong></td><td class="crd-td">Arizona</td><td class="crd-td">34,64, -109,93</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Carter Ranch Pueblo</strong></td><td class="crd-td">Arizona</td><td class="crd-td">34,4, -110</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cashion Ruin</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,33, -112,22</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cerro Pomo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">34,45, -108,8</td><td class="crd-td">300AD-1400AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Citadel/Nalakihu</strong></td><td class="crd-td">Arizona</td><td class="crd-td">35,49, -111,4</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cline Point</strong></td><td class="crd-td">Arizona</td><td class="crd-td">34,35, -110,42</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cline Terrace Mound, Monster Ruin</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,8, -111,34</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Continental Site</strong></td><td class="crd-td">Arizona</td><td class="crd-td">31,92, -110,89</td><td class="crd-td">300AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cox Ranch</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">34,36, -108,72</td><td class="crd-td">300AD-1400AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Danson 481</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">34,49, -108,34</td><td class="crd-td">300AD-1450AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">260</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Davis Ranch Site</strong></td><td class="crd-td">Arizona</td><td class="crd-td">32,32, -110,41</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dinwiddie</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">33,09, -108,65</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Drip</strong></td><td class="crd-td">Arizona</td><td class="crd-td">32,88, -111,52</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>El Polvoron</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,26, -111,61</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Escalante</strong></td><td class="crd-td">Arizona</td><td class="crd-td">32,98, -111,52</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Escalante Ruin</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,05, -111,36</td><td class="crd-td">300AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fitzmaurice Ruin</strong></td><td class="crd-td">Arizona</td><td class="crd-td">34,57, -112,35</td><td class="crd-td">300AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Foote Canyon Pueblo</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,48, -109,21</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Garden Canyon</strong></td><td class="crd-td">Arizona</td><td class="crd-td">31,57, -110,22</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gatlin Site</strong></td><td class="crd-td">Arizona</td><td class="crd-td">32,99, -112,71</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gibbon Springs</strong></td><td class="crd-td">Arizona</td><td class="crd-td">32,29, -110,81</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">190</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gila Cliff Dwellings</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">33,25, -108,24</td><td class="crd-td">300AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Grand Canal</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,43, -111,96</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Grand Canal Ruins</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,46, -112</td><td class="crd-td">200AD-1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 Hohokam, Mogollon, Puebloan and Yuman settlements in Arizona HU 15 ranked by peak population.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:settlements-arizona">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-arizona-settlements/fig4_arizona_settlements.png" alt="fig:settlements-arizona" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement hierarchy across the 584 catalogued sites in Arizona HU 15.</figcaption>
</figure>

## Source Ledger Audit

Table \ref{tab:ledger-arizona} lists all `11` excluded duplicate-alias candidate records from `arizona_source_ledger.json5` (capped at `30` rows), accounting together with the `584` included settlements for all `595` evaluated entries.

<figure class="crd-table-figure" id="tab:ledger-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Status</th><th class="crd-th">Ledger Classification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Atsinna</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Babocomari Village</strong></td><td class="crd-td">Arizona</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Davis Ranch Site</strong></td><td class="crd-td">Arizona</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Fourmile Ruin</strong></td><td class="crd-td">Arizona</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Heshotauthla</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Homol'ovi II</strong></td><td class="crd-td">Arizona</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Los Molinos</strong></td><td class="crd-td">Canada</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Palo Verde Ruin</strong></td><td class="crd-td">Arizona</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Pueblo de los Muertos</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Tinaja</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Needles (Mohave)</strong></td><td class="crd-td">California</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded duplicate-alias candidate records from the 595 evaluated entries in Arizona HU 15.</figcaption>
</figure>

# Limitations

Three limitations apply to HU 15 site records. First, large Phoenix Basin centres such as `Pueblo Grande` and `Casa Grande` sit beneath modern urban development, restricting excavation of outer pithouse residential rings [@fish2007hohokam]. Second, `112` Southwest Social Networks sites share a standardised `1.060`-inhabitant regional tier cap rather than site-specific excavated floor estimates, producing a horizontal shelf in the upper rank-size curve (`Figure` \ref{fig:settlements-arizona}). Third, dispersed Yuman floodplain settlements near Blythe and Fort Yuma shifted channels frequently after Colorado River floods, leaving diffuse archaeological footprints.

# Sources

<div id="refs"></div>
