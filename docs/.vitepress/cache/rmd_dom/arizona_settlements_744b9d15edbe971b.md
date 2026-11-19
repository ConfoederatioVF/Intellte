---
title: "Arizona Hydrological Unit (HU 15): Settlement Gazetteer"
subtitle: "CENTAUR-II: Hohokam Canal Centres, Mogollon and Hopi-Zuni Pueblos, 400AD-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: arizona_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_arizona_spatial.png"
hero_caption: "Spatial distribution of 14 verified Hohokam, Puebloan, Mogollon and Yuman settlements across Arizona Hydrological Unit 15."
hero_label: "fig:hero-arizona"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This gazetteer compiles verified WGS84 coordinates, active occupational spans and benchmark population series for 14 excavated settlements across Arizona Hydrological Unit 15 and its Colorado Plateau margins from 400AD to 1600AD [@kelly2025; @bird2022p3k14c]. The inventory tracks major Salt-Gila Hohokam irrigation centres (Snaketown, Pueblo Grande, Casa Grande and Los Morteros-Point of Pines), Mogollon and Mimbres towns (Grasshopper Pueblo and Galaz Ruin), Hopi, Zuni, Acoma and Sinagua pueblos (Oraibi, Hawikuh, Homol'ovi, Wupatki and Acoma Pueblo), the Lower Colorado Yuman complex (Blythe Intaglios-Yuman) and two boundary conditioning centres (Pueblo Bonito and Parowan Gap-Paragonah) [@haury1976hohokam; @fish2007hohokam; @reid1999grasshopper; @adams2002homolovi]. Source-ledger reconciliation confirms all 14 included sites and 2 excluded records (`Ventana Cave` and `Cíbola`) with zero unaccounted candidates.



# Background

Major nucleated sites in HU 15 reflect hydraulic engineering and mesa-top aggregation. In the Phoenix Basin, Snaketown (peaking at 3,2k in 1000AD) anchored Pioneer and Colonial Hohokam canal irrigation before Classic Period platform-mound centres rose at Pueblo Grande (3,1k in 1300AD) and Casa Grande (2,6k in 1300AD) [@haury1976hohokam; @fish2007hohokam]. Along the Tucson Basin, Los Morteros-Point of Pines sustained 1,35k inhabitants in 1200AD, while Mimbres irrigation farmers occupied Galaz Ruin until 1100AD [@hill2004southwest; @anyon2017mimbres]. Across the Colorado Plateau and Mogollon Rim, demographic coalescence created Wupatki (880 in 1200AD), Grasshopper Pueblo (1,1k in 1300AD), Homol'ovi (1,45k in 1400AD) and enduring mesa towns at Oraibi (2,1k in 1600AD), Hawikuh (1,65k in 1500AD) and Acoma Pueblo (1,65k in 1500AD) [@adams2002homolovi; @reid1999grasshopper; @smith1966hawikuh].

# Methodology

## Gazetteer Compilation and Ledger Screening

Each candidate site was checked against Stadestér 2.0 standards requiring verified `[lat, lng]` coordinates, dated architectural horizons and quantified residential population estimates [@bird2022p3k14c; @kelly2025]. Multicomponent Sonoran foraging shelters lacking village headcounts (`Ventana Cave`) and unlocated Spanish colonial district names (`Cíbola`, whose excavated urban centre is recorded under `Hawikuh`) are explicitly excluded in `arizona_source_ledger.json5` [@smith1966hawikuh]. Benchmark years follow GMT+0.

## Room-Count and Compound Demography

Puebloan and Mogollon site figures derive from excavated and surface-mapped room counts adjusted by contemporaneous occupation ratios, roof-area coefficients and tree-ring construction phases [@reid1999grasshopper; @adams2002homolovi; @robinson2021dendro]. Hohokam estimates integrate mapped courtyard-group and compound areas with regional canal-command population models [@haury1976hohokam; @hill2004southwest; @fish2007hohokam].

# Testing and Validation

Ledger validation verifies 14 included sites matching `arizona_settlements.json` and 2 excluded candidates (`Ventana Cave` and `Cíbola`) with zero discrepancy. Chronological cross-checks confirm the classic Hohokam-to-Pueblo IV spatial transition: Snaketown peaks in 1000AD (3,2k) and declines prior to Classic maxima at Pueblo Grande (3,1k) and Casa Grande (2,6k) in 1300AD, after which Salt-Gila centres contract sharply while Hopi and Zuni towns (Oraibi, Hawikuh and Homol'ovi) sustain or expand populations through 1400-1600AD [@hill2004southwest; @adams2002homolovi; @robinson2021dendro].

# Results

## Verified Settlement Gazetteer

Table \ref{tab:gazetteer-arizona} reports all 14 verified settlements in HU 15, and Figure \ref{fig:settlements-arizona} displays the rank-size distribution led by Snaketown (3,2k), Pueblo Bonito (3,2k), Pueblo Grande (3,1k) and Casa Grande (2,6k).

<figure class="crd-table-figure" id="tab:gazetteer-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pueblo Bonito</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">36,06, -107,96</td><td class="crd-td">800-1200AD</td><td class="crd-td">3,2k</td><td class="crd-td">450</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Oraibi</strong></td><td class="crd-td">Arizona</td><td class="crd-td">35,88, -110,64</td><td class="crd-td">1100-1600AD</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Hawikuh</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">34,93, -109</td><td class="crd-td">1300-1600AD</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Homol'ovi</strong></td><td class="crd-td">Arizona</td><td class="crd-td">35,06, -110,65</td><td class="crd-td">1300-1400AD</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Wupatki</strong></td><td class="crd-td">Arizona</td><td class="crd-td">35,52, -111,37</td><td class="crd-td">1100-1200AD</td><td class="crd-td">880</td><td class="crd-td">-</td><td class="crd-td">550</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Snaketown</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,19, -111,92</td><td class="crd-td">400-1100AD</td><td class="crd-td">3,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Casa Grande</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33, -111,53</td><td class="crd-td">1200-1400AD</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pueblo Grande</strong></td><td class="crd-td">Arizona</td><td class="crd-td">33,45, -111,98</td><td class="crd-td">800-1400AD</td><td class="crd-td">3,1k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Grasshopper Pueblo</strong></td><td class="crd-td">Arizona</td><td class="crd-td">34,08, -110,63</td><td class="crd-td">1300-1400AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Los Morteros-Point of Pines</strong></td><td class="crd-td">Arizona</td><td class="crd-td">32,33, -111,12</td><td class="crd-td">800-1300AD</td><td class="crd-td">1,4k</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Blythe Intaglios-Yuman</strong></td><td class="crd-td">Arizona</td><td class="crd-td">32,73, -114,61</td><td class="crd-td">1000-1600AD</td><td class="crd-td">750</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">720</td></tr>
<tr><td class="crd-td"><strong>Parowan Gap-Paragonah</strong></td><td class="crd-td">Utah</td><td class="crd-td">37,88, -112,77</td><td class="crd-td">800-1200AD</td><td class="crd-td">740</td><td class="crd-td">380</td><td class="crd-td">740</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Acoma Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">34,9, -107,58</td><td class="crd-td">1100-1600AD</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">550</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Galaz Ruin</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">32,83, -107,98</td><td class="crd-td">1000-1100AD</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified Hohokam, Mogollon, Puebloan and Yuman settlements in Arizona HU 15 with coordinates, active spans and benchmark populations.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:settlements-arizona">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-arizona-settlements/fig4_arizona_settlements.png" alt="fig:settlements-arizona" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement hierarchy across the 14 verified sites in Arizona HU 15.</figcaption>
</figure>

## Source Ledger Audit

Table \ref{tab:ledger-arizona} lists all 16 evaluated candidates from `arizona_source_ledger.json5`.

<figure class="crd-table-figure" id="tab:ledger-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Status</th><th class="crd-th">Ledger Classification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pueblo Bonito</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Oraibi</strong></td><td class="crd-td">Arizona</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Hawikuh</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Homol'ovi</strong></td><td class="crd-td">Arizona</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Wupatki</strong></td><td class="crd-td">Arizona</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Snaketown</strong></td><td class="crd-td">Arizona</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Casa Grande</strong></td><td class="crd-td">Arizona</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Pueblo Grande</strong></td><td class="crd-td">Arizona</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Grasshopper Pueblo</strong></td><td class="crd-td">Arizona</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Los Morteros-Point of Pines</strong></td><td class="crd-td">Arizona</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Blythe Intaglios-Yuman</strong></td><td class="crd-td">Arizona</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Parowan Gap-Paragonah</strong></td><td class="crd-td">Utah</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Acoma Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Galaz Ruin</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Ventana Cave</strong></td><td class="crd-td">Arizona</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
<tr><td class="crd-td"><strong>Cíbola (Seven Cities)</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">excluded</td><td class="crd-td">unlocated historical toponym</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source-ledger reconciliation for Arizona HU 15 showing 14 included centres and 2 excluded records.</figcaption>
</figure>

# Limitations

Three limitations apply to HU 15 site records. First, large Phoenix Basin centres such as Pueblo Grande and Casa Grande sit beneath modern urban development, restricting complete excavation of outer pithouse residential rings [@fish2007hohokam]. Second, `Pueblo Bonito` and `Parowan Gap-Paragonah` act as cross-frontier conditioning anchors near the HU 14 and HU 16 borders and are deduplicated during macro-regional Stadestér 2.0 merging [@lekson2006chaco]. Third, dispersed Yuman floodplain settlements near Blythe and Fort Yuma shifted channels frequently after Colorado River floods, leaving diffuse archaeological footprints.

# Sources

<div id="refs"></div>
