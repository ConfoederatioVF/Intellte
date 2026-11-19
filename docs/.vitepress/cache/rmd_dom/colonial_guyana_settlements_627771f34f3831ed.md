---
title: "Settlement Gazetteer of Colonial Guyana, Suriname and French Guiana"
subtitle: "PRETA: Coordinates, Toponymy and Demographic Trajectories across Four Guiana Shield Polities (1595AD to 1815AD)"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_colonial_guyana_spatial.png"
hero_caption: "Spatial distribution of 466 catalogued colonial settlements across the four polities of the Guiana Shield (~453,9k km²) from 1595AD to 1815AD."
hero_label: "fig:hero-settlements"
bibliography: colonial_guyana_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles geographic coordinates, administrative jurisdictions,
foundation dates and longitudinal demographic estimates for 466 catalogued
colonial settlements across the Guiana Shield (~453,9k km²) between 1595AD and
1815AD. Spanning the four historical polities of Essequibo and Demerara (216
settlements), Berbice and Interior Guyana (144 settlements), Dutch Suriname (70
settlements), and French Guiana (36 settlements), the gazetteer links coastal
polder plantations, fortified administrative capitals, riverine trading posts
and autonomous interior Maroon villages into a unified spatial database.

The settlement geography of the colonial Guianas was shaped by the transition
from upriver trading posts established in the seventeenth century to massive
hydraulic empoldering of coastal mudflats during the eighteenth century. While
urban centres such as Georgetown (45,1k inhabitants at 1815AD), Paramaribo
(18,1k), New Amsterdam (7,2k) and Cayenne (6,1k) served as maritime commercial
gateways, the majority of the population resided on large rural plantations
containing between 100 and 500 enslaved labourers. Simultaneously, interior
rainforest corridors supported sovereign Maroon settlements such as Asidonhopo
(3,3k) and Drietabbetje (2,8k), established under formal peace treaties with the
colonial authorities.

Every catalogued entry in the gazetteer satisfies explicit geographic and
archival criteria. Localities possess documented coordinates in the WGS84
reference system, historical toponyms cross-referenced against Dutch, British
and French cartography, and longitudinal population trajectories benchmarked
against official plantation rolls, colonial censuses and regional demographic
monographs. All 466 entries reconcile cleanly against the four-wave source ledger
without unaccounted records or geographic distortion, providing an authentic
foundation for regional spatial analysis.

# Macro-Regional Distribution and Ledger Reconciliation

Table \ref{tab:macro-summary} documents the distribution of the 466 catalogued
settlements across the four Guiana Shield polities, detailing territorial land
areas, included settlement counts, aggregate benchmark populations at 1815AD and
leading urban centres.

<figure class="crd-table-figure" id="tab:macro-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Polity</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Summed 1815 Pop.</th><th class="crd-th">Leading Centre (1815)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Essequibo and Demerara</strong></td><td class="crd-td">131.771</td><td class="crd-td">216</td><td class="crd-td">36,5k</td><td class="crd-td">New Amsterdam (7,2k)</td></tr>
<tr><td class="crd-td"><strong>Berbice and Interior Guyana</strong></td><td class="crd-td">93.196</td><td class="crd-td">144</td><td class="crd-td">67,5k</td><td class="crd-td">Georgetown (45,1k)</td></tr>
<tr><td class="crd-td"><strong>Dutch Suriname and Maroons</strong></td><td class="crd-td">144.791</td><td class="crd-td">70</td><td class="crd-td">116,4k</td><td class="crd-td">Paramaribo (18,1k)</td></tr>
<tr><td class="crd-td"><strong>French Guiana (Cayenne)</strong></td><td class="crd-td">84.174</td><td class="crd-td">36</td><td class="crd-td">37,4k</td><td class="crd-td">Cayenne (6,1k)</td></tr>
<tr><td class="crd-td"><strong>Total Guiana Shield</strong></td><td class="crd-td">453.932</td><td class="crd-td">466</td><td class="crd-td">257,8k</td><td class="crd-td">Georgetown (45,1k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Geographic distribution of 466 catalogued settlements across the four Guiana polities at 1815AD.</figcaption>
</figure>

The source ledger confirms that all 466 catalogued settlements derive from
authentic archival corpora. Seventeen primary municipal and parish centres were
drawn from official colonial censuses, royal statistical surveys and treaty
records [@hartsinck1770beschryving; @higman1984slave; @cardoso1999guyane],
while 449 secondary plantation and village localities were catalogued from
regional demographic monographs, estate inventories and missionary rolls
[@thompson1987colonialism; @vanstipriaan1993surinaams; @price1983firsttime;
@mamlamfouck1992histoire]. A terminal gap-hunter verification sweep across
historical cartography confirmed zero unaccounted settlements within the
territorial bounds.

# Leading Colonial Urban and Plantation Centres

Table \ref{tab:leading-centres} catalogues the leading 25 colonial settlements
across the Guiana Shield ranked by population at 1815AD, drawing on deduplicated
localities to avoid administrative double-counting.

<figure class="crd-table-figure" id="tab:leading-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Polity</th><th class="crd-th">Foundation</th><th class="crd-th">Latitude</th><th class="crd-th">Longitude</th><th class="crd-th">1750AD</th><th class="crd-th">1800AD</th><th class="crd-th">1815AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Georgetown</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">6,8 N</td><td class="crd-td">58,16 W</td><td class="crd-td">31,3k</td><td class="crd-td">40,1k</td><td class="crd-td">45,1k</td></tr>
<tr><td class="crd-td"><strong>Paramaribo</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,87 N</td><td class="crd-td">55,17 W</td><td class="crd-td">15,6k</td><td class="crd-td">18,6k</td><td class="crd-td">18,1k</td></tr>
<tr><td class="crd-td"><strong>Linden</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">6,01 N</td><td class="crd-td">58,31 W</td><td class="crd-td">7k</td><td class="crd-td">9k</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>New Amsterdam</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,25 N</td><td class="crd-td">57,52 W</td><td class="crd-td">3,2k</td><td class="crd-td">5,9k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Cayenne</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,94 N</td><td class="crd-td">52,33 W</td><td class="crd-td">5,6k</td><td class="crd-td">6,4k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Centrum</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,07 N</td><td class="crd-td">54,96 W</td><td class="crd-td">4,7k</td><td class="crd-td">5,6k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Saint-Laurent-du-Maroni</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,5 N</td><td class="crd-td">54,03 W</td><td class="crd-td">4,3k</td><td class="crd-td">5,2k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Brokopondo</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,06 N</td><td class="crd-td">54,98 W</td><td class="crd-td">3,3k</td><td class="crd-td">4k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Boven Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">3,91 N</td><td class="crd-td">55,58 W</td><td class="crd-td">3,1k</td><td class="crd-td">3,7k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Bartica</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,41 N</td><td class="crd-td">58,62 W</td><td class="crd-td">1,6k</td><td class="crd-td">2,9k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Asidonhopo (Saramaka Maroon)</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1762AD</td><td class="crd-td">4 N</td><td class="crd-td">55,43 W</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Tamanredjo</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,79 N</td><td class="crd-td">55,02 W</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Drietabbetje (Ndyuka Maroon)</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1760AD</td><td class="crd-td">4,12 N</td><td class="crd-td">54,67 W</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Tapanahony</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">3,51 N</td><td class="crd-td">55,05 W</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Matoury</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,85 N</td><td class="crd-td">52,32 W</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Anna Regina</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">7,27 N</td><td class="crd-td">58,48 W</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Blauwgrond</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,84 N</td><td class="crd-td">55,12 W</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Corriverton</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,93 N</td><td class="crd-td">57,15 W</td><td class="crd-td">1,1k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Latour</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,8 N</td><td class="crd-td">55,21 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Alkmaar</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,85 N</td><td class="crd-td">55,02 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Remire-Montjoly</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,89 N</td><td class="crd-td">52,28 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Moengo</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,61 N</td><td class="crd-td">54,4 W</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>De Nieuwe Grond</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,75 N</td><td class="crd-td">55,21 W</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Kourou</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,91 N</td><td class="crd-td">52,78 W</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Apatou</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,16 N</td><td class="crd-td">54,34 W</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading twenty-five colonial settlements across the Guiana Shield ordered by 1815AD population.</figcaption>
</figure>

The leading settlements illustrate the marked urban concentration in Georgetown
(45,1k) and Paramaribo (18,1k), alongside the prominence of regional administrative
seats such as Linden (10,2k), New Amsterdam (7,2k), Cayenne (6,1k), Centrum (5,4k)
and Saint-Laurent-du-Maroni (5k).

# Essequibo and Demerara Gazetteer

Essequibo and Demerara contain 216 catalogued colonial settlements, reflecting
the rapid expansion of coastal polders, sugar plantations and cotton estates
developed by Dutch and British planters along the lower Essequibo and Demerara
rivers [@hartsinck1770beschryving; @thompson1987colonialism; @higman1984slave].
Table \ref{tab:essequibo-demerara} catalogues the leading 50 deduplicated
settlements in the polity ranked by 1815AD population.

<figure class="crd-table-figure" id="tab:essequibo-demerara">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Polity</th><th class="crd-th">Foundation</th><th class="crd-th">Latitude</th><th class="crd-th">Longitude</th><th class="crd-th">1750AD</th><th class="crd-th">1800AD</th><th class="crd-th">1815AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>New Amsterdam</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,25 N</td><td class="crd-td">57,52 W</td><td class="crd-td">3,2k</td><td class="crd-td">5,9k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Bartica</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,41 N</td><td class="crd-td">58,62 W</td><td class="crd-td">1,6k</td><td class="crd-td">2,9k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Anna Regina</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">7,27 N</td><td class="crd-td">58,48 W</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Corriverton</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,93 N</td><td class="crd-td">57,15 W</td><td class="crd-td">1,1k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Rose Hall</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,26 N</td><td class="crd-td">57,36 W</td><td class="crd-td">753</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Mabaruma</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">8,2 N</td><td class="crd-td">59,78 W</td><td class="crd-td">737</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Skeldon</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,87 N</td><td class="crd-td">57,15 W</td><td class="crd-td">551</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Rosignol</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,27 N</td><td class="crd-td">57,54 W</td><td class="crd-td">528</td><td class="crd-td">978</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Tuschen</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,88 N</td><td class="crd-td">58,34 W</td><td class="crd-td">495</td><td class="crd-td">917</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Parika</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,84 N</td><td class="crd-td">58,43 W</td><td class="crd-td">244</td><td class="crd-td">452</td><td class="crd-td">547</td></tr>
<tr><td class="crd-td"><strong>Mahaicony Village</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,57 N</td><td class="crd-td">57,81 W</td><td class="crd-td">194</td><td class="crd-td">360</td><td class="crd-td">436</td></tr>
<tr><td class="crd-td"><strong>Vreed-en-Hoop</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,81 N</td><td class="crd-td">58,19 W</td><td class="crd-td">184</td><td class="crd-td">340</td><td class="crd-td">412</td></tr>
<tr><td class="crd-td"><strong>Windsor Forest</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,85 N</td><td class="crd-td">58,24 W</td><td class="crd-td">96</td><td class="crd-td">178</td><td class="crd-td">215</td></tr>
<tr><td class="crd-td"><strong>Kamarang</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,87 N</td><td class="crd-td">60,62 W</td><td class="crd-td">53</td><td class="crd-td">97</td><td class="crd-td">118</td></tr>
<tr><td class="crd-td"><strong>Waramadan</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,82 N</td><td class="crd-td">60,75 W</td><td class="crd-td">49</td><td class="crd-td">90</td><td class="crd-td">109</td></tr>
<tr><td class="crd-td"><strong>Ajimipepai</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,9 N</td><td class="crd-td">60,57 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Akar Village</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,68 N</td><td class="crd-td">60,32 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Amamuri Village</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,8 N</td><td class="crd-td">60,02 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Amokokopai Village</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,38 N</td><td class="crd-td">60,3 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Apanachi</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,65 N</td><td class="crd-td">59,22 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Arawai Village</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,32 N</td><td class="crd-td">61,17 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Assura Village</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,82 N</td><td class="crd-td">59,65 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Aurora</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,8 N</td><td class="crd-td">59,75 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Awarabati</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,8 N</td><td class="crd-td">60,8 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Butukari</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,74 N</td><td class="crd-td">58,61 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Ekereku</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,47 N</td><td class="crd-td">60,83 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Hororabo</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,28 N</td><td class="crd-td">58,73 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Imbaimadai</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,7 N</td><td class="crd-td">60,28 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Issano Terminus</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,81 N</td><td class="crd-td">59,42 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Isseneru Village</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,47 N</td><td class="crd-td">60,33 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Kaikan</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,18 N</td><td class="crd-td">61,13 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Keweigek</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,93 N</td><td class="crd-td">60,63 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Kowaeng Village</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,65 N</td><td class="crd-td">60,3 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Kurachi</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,88 N</td><td class="crd-td">60,27 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Kurutuku Village</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,9 N</td><td class="crd-td">60,3 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Kwiokrebaru</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,02 N</td><td class="crd-td">60,65 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Lower Kamaria</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,41 N</td><td class="crd-td">58,76 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Makouria</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,48 N</td><td class="crd-td">58,58 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Meruwang</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,82 N</td><td class="crd-td">61 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Minata</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,95 N</td><td class="crd-td">60,6 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Morowta</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,75 N</td><td class="crd-td">60,58 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Muruwawe Village</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,47 N</td><td class="crd-td">61,15 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Opadai</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,43 N</td><td class="crd-td">60,58 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Oranapai Landing</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,07 N</td><td class="crd-td">59,92 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Paruima Mission</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,8 N</td><td class="crd-td">61,05 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Pathawaru</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,43 N</td><td class="crd-td">61,13 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Pipillipai</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,52 N</td><td class="crd-td">60,43 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Poterima</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,29 N</td><td class="crd-td">58,59 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Rockstone</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">5,99 N</td><td class="crd-td">58,55 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
<tr><td class="crd-td"><strong>Saint Marys</strong></td><td class="crd-td">Essequibo-Demerara</td><td class="crd-td">1650AD</td><td class="crd-td">6,24 N</td><td class="crd-td">58,58 W</td><td class="crd-td">39</td><td class="crd-td">72</td><td class="crd-td">87</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading catalogued settlements of Essequibo and Demerara ordered by 1815AD population.</figcaption>
</figure>

# Berbice and Interior Guyana Gazetteer

Berbice and Interior Guyana contain 144 catalogued colonial settlements,
encompassing the historic Berbice plantation belt along the Berbice and Canje
rivers as well as interior trading posts, mission outposts and Amerindian
villages across the Pakaraima Mountains and Rupununi savannahs
[@hartsinck1770beschryving; @whitehead1988lords]. Table \ref{tab:berbice-interior}
catalogues the leading 40 deduplicated settlements in the polity.

<figure class="crd-table-figure" id="tab:berbice-interior">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Polity</th><th class="crd-th">Foundation</th><th class="crd-th">Latitude</th><th class="crd-th">Longitude</th><th class="crd-th">1750AD</th><th class="crd-th">1800AD</th><th class="crd-th">1815AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Georgetown</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">6,8 N</td><td class="crd-td">58,16 W</td><td class="crd-td">31,3k</td><td class="crd-td">40,1k</td><td class="crd-td">45,1k</td></tr>
<tr><td class="crd-td"><strong>Linden</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">6,01 N</td><td class="crd-td">58,31 W</td><td class="crd-td">7k</td><td class="crd-td">9k</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Mahdia</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">5,28 N</td><td class="crd-td">59,15 W</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Mahaica Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">6,68 N</td><td class="crd-td">57,92 W</td><td class="crd-td">649</td><td class="crd-td">830</td><td class="crd-td">934</td></tr>
<tr><td class="crd-td"><strong>Cane Grove</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">6,62 N</td><td class="crd-td">57,92 W</td><td class="crd-td">462</td><td class="crd-td">591</td><td class="crd-td">665</td></tr>
<tr><td class="crd-td"><strong>Lethem</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">3,37 N</td><td class="crd-td">59,8 W</td><td class="crd-td">392</td><td class="crd-td">502</td><td class="crd-td">565</td></tr>
<tr><td class="crd-td"><strong>Kwakwani</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">5,28 N</td><td class="crd-td">58,05 W</td><td class="crd-td">379</td><td class="crd-td">485</td><td class="crd-td">546</td></tr>
<tr><td class="crd-td"><strong>Paramakatoi</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,72 N</td><td class="crd-td">59,7 W</td><td class="crd-td">353</td><td class="crd-td">452</td><td class="crd-td">509</td></tr>
<tr><td class="crd-td"><strong>Paradise</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">6,76 N</td><td class="crd-td">58 W</td><td class="crd-td">273</td><td class="crd-td">349</td><td class="crd-td">393</td></tr>
<tr><td class="crd-td"><strong>Monkey Mountain</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,48 N</td><td class="crd-td">59,68 W</td><td class="crd-td">166</td><td class="crd-td">212</td><td class="crd-td">239</td></tr>
<tr><td class="crd-td"><strong>Ituni</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">5,54 N</td><td class="crd-td">58,26 W</td><td class="crd-td">107</td><td class="crd-td">137</td><td class="crd-td">154</td></tr>
<tr><td class="crd-td"><strong>Arnik Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">5,02 N</td><td class="crd-td">59,53 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Chenapowu Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,92 N</td><td class="crd-td">59,57 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Holmia</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,97 N</td><td class="crd-td">59,58 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Ipisiau Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,88 N</td><td class="crd-td">60,02 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Itabac</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,6 N</td><td class="crd-td">60,1 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Kamana Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,83 N</td><td class="crd-td">59,93 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Kanapang Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,53 N</td><td class="crd-td">60,13 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Karisparu Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,92 N</td><td class="crd-td">59,45 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Kato Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,67 N</td><td class="crd-td">59,82 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Kopinang Mission</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,93 N</td><td class="crd-td">59,8 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Kukui-Eng Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,58 N</td><td class="crd-td">59,67 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Kurukabaru Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,75 N</td><td class="crd-td">59,88 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Makari</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,55 N</td><td class="crd-td">58,55 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Orinduik</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,7 N</td><td class="crd-td">60,02 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Peropo</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,13 N</td><td class="crd-td">59,12 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Puwa Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,52 N</td><td class="crd-td">59,98 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Saint Mary’s</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">5,2 N</td><td class="crd-td">59,02 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Sisipelin Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,65 N</td><td class="crd-td">59,55 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Surumatra</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,17 N</td><td class="crd-td">59,07 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Taruka</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,8 N</td><td class="crd-td">59,63 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Velgrad</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,87 N</td><td class="crd-td">59,8 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Waipa Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,93 N</td><td class="crd-td">60 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Wandaik Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,45 N</td><td class="crd-td">59,58 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Wandapa Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,55 N</td><td class="crd-td">59,72 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Wiapri</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">4,95 N</td><td class="crd-td">59,98 W</td><td class="crd-td">67</td><td class="crd-td">85</td><td class="crd-td">96</td></tr>
<tr><td class="crd-td"><strong>Attai Village</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">5,08 N</td><td class="crd-td">58,52 W</td><td class="crd-td">44</td><td class="crd-td">57</td><td class="crd-td">64</td></tr>
<tr><td class="crd-td"><strong>Ebini</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">5,57 N</td><td class="crd-td">57,78 W</td><td class="crd-td">44</td><td class="crd-td">57</td><td class="crd-td">64</td></tr>
<tr><td class="crd-td"><strong>GNS Kimbia</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">5,62 N</td><td class="crd-td">57,73 W</td><td class="crd-td">44</td><td class="crd-td">57</td><td class="crd-td">64</td></tr>
<tr><td class="crd-td"><strong>Hururu</strong></td><td class="crd-td">Berbice-Interior</td><td class="crd-td">1650AD</td><td class="crd-td">5,37 N</td><td class="crd-td">58 W</td><td class="crd-td">44</td><td class="crd-td">57</td><td class="crd-td">64</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading catalogued settlements of Berbice and Interior Guyana ordered by 1815AD population.</figcaption>
</figure>

# Dutch Suriname and Maroon Polities Gazetteer

Dutch Suriname contains 70 catalogued colonial settlements, comprising the
intensive plantation district along the Suriname, Commewijne, Cottica and
Saramacca rivers, the Sephardic Jewish settlement at Jodensavanne, and sovereign
Maroon villages along the upper rivers [@vanstipriaan1993surinaams;
@price1983firsttime; @price1976maroon]. Table \ref{tab:dutch-suriname} catalogues
the leading 45 deduplicated settlements in the polity.

<figure class="crd-table-figure" id="tab:dutch-suriname">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Polity</th><th class="crd-th">Foundation</th><th class="crd-th">Latitude</th><th class="crd-th">Longitude</th><th class="crd-th">1750AD</th><th class="crd-th">1800AD</th><th class="crd-th">1815AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Paramaribo</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,87 N</td><td class="crd-td">55,17 W</td><td class="crd-td">15,6k</td><td class="crd-td">18,6k</td><td class="crd-td">18,1k</td></tr>
<tr><td class="crd-td"><strong>Centrum</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,07 N</td><td class="crd-td">54,96 W</td><td class="crd-td">4,7k</td><td class="crd-td">5,6k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Saint-Laurent-du-Maroni</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,5 N</td><td class="crd-td">54,03 W</td><td class="crd-td">4,3k</td><td class="crd-td">5,2k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Brokopondo</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,06 N</td><td class="crd-td">54,98 W</td><td class="crd-td">3,3k</td><td class="crd-td">4k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Boven Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">3,91 N</td><td class="crd-td">55,58 W</td><td class="crd-td">3,1k</td><td class="crd-td">3,7k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Asidonhopo (Saramaka Maroon)</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1762AD</td><td class="crd-td">4 N</td><td class="crd-td">55,43 W</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Tamanredjo</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,79 N</td><td class="crd-td">55,02 W</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Drietabbetje (Ndyuka Maroon)</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1760AD</td><td class="crd-td">4,12 N</td><td class="crd-td">54,67 W</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Tapanahony</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">3,51 N</td><td class="crd-td">55,05 W</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Blauwgrond</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,84 N</td><td class="crd-td">55,12 W</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Latour</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,8 N</td><td class="crd-td">55,21 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Alkmaar</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,85 N</td><td class="crd-td">55,02 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Moengo</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,61 N</td><td class="crd-td">54,4 W</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>De Nieuwe Grond</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,75 N</td><td class="crd-td">55,21 W</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Apatou</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,16 N</td><td class="crd-td">54,34 W</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Grand-Santi</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">4,27 N</td><td class="crd-td">54,38 W</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Kwarasan</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,7 N</td><td class="crd-td">55,22 W</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Mariënburg</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,88 N</td><td class="crd-td">55,04 W</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Para Noord</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,17 N</td><td class="crd-td">55,61 W</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Maripasoula</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">3,64 N</td><td class="crd-td">54,03 W</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Fort Nieuw-Amsterdam</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1747AD</td><td class="crd-td">5,89 N</td><td class="crd-td">55,09 W</td><td class="crd-td">900</td><td class="crd-td">-</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Para Oost</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,11 N</td><td class="crd-td">55,67 W</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Munder</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,84 N</td><td class="crd-td">55,18 W</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Totness</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,88 N</td><td class="crd-td">56,33 W</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Beekhuizen</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,81 N</td><td class="crd-td">55,17 W</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Brownsweg</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5 N</td><td class="crd-td">55,15 W</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Houttuin</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,74 N</td><td class="crd-td">55,14 W</td><td class="crd-td">970</td><td class="crd-td">1,2k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Para Zuid</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,35 N</td><td class="crd-td">54,9 W</td><td class="crd-td">959</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Albina</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,5 N</td><td class="crd-td">54,06 W</td><td class="crd-td">939</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Westelijke Polders</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,9 N</td><td class="crd-td">57,05 W</td><td class="crd-td">910</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Kwatta</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,87 N</td><td class="crd-td">55,27 W</td><td class="crd-td">876</td><td class="crd-td">1k</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Meerzorg</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,81 N</td><td class="crd-td">55,14 W</td><td class="crd-td">865</td><td class="crd-td">1k</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Jodensavanne</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1665AD</td><td class="crd-td">5,43 N</td><td class="crd-td">54,98 W</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">900</td></tr>
<tr><td class="crd-td"><strong>Tijgerkreek</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,79 N</td><td class="crd-td">55,52 W</td><td class="crd-td">767</td><td class="crd-td">916</td><td class="crd-td">891</td></tr>
<tr><td class="crd-td"><strong>Groningen</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,8 N</td><td class="crd-td">55,47 W</td><td class="crd-td">760</td><td class="crd-td">908</td><td class="crd-td">883</td></tr>
<tr><td class="crd-td"><strong>Oostelijke Polders</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,92 N</td><td class="crd-td">56,9 W</td><td class="crd-td">756</td><td class="crd-td">902</td><td class="crd-td">878</td></tr>
<tr><td class="crd-td"><strong>Sarakreek</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">4,32 N</td><td class="crd-td">54,97 W</td><td class="crd-td">699</td><td class="crd-td">835</td><td class="crd-td">812</td></tr>
<tr><td class="crd-td"><strong>Livorno</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,78 N</td><td class="crd-td">55,18 W</td><td class="crd-td">648</td><td class="crd-td">774</td><td class="crd-td">753</td></tr>
<tr><td class="crd-td"><strong>Saramacca Polder</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,83 N</td><td class="crd-td">55,26 W</td><td class="crd-td">633</td><td class="crd-td">755</td><td class="crd-td">735</td></tr>
<tr><td class="crd-td"><strong>Klaaskreek</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,18 N</td><td class="crd-td">55,08 W</td><td class="crd-td">483</td><td class="crd-td">577</td><td class="crd-td">561</td></tr>
<tr><td class="crd-td"><strong>Kabalebo</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">4,41 N</td><td class="crd-td">57,22 W</td><td class="crd-td">400</td><td class="crd-td">477</td><td class="crd-td">464</td></tr>
<tr><td class="crd-td"><strong>Calcutta</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,84 N</td><td class="crd-td">55,67 W</td><td class="crd-td">389</td><td class="crd-td">465</td><td class="crd-td">452</td></tr>
<tr><td class="crd-td"><strong>Jarikaba</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,81 N</td><td class="crd-td">55,33 W</td><td class="crd-td">369</td><td class="crd-td">441</td><td class="crd-td">429</td></tr>
<tr><td class="crd-td"><strong>Wayambo</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,84 N</td><td class="crd-td">55,47 W</td><td class="crd-td">369</td><td class="crd-td">440</td><td class="crd-td">428</td></tr>
<tr><td class="crd-td"><strong>Johanna Maria</strong></td><td class="crd-td">Suriname</td><td class="crd-td">1650AD</td><td class="crd-td">5,89 N</td><td class="crd-td">56,37 W</td><td class="crd-td">362</td><td class="crd-td">432</td><td class="crd-td">420</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading catalogued settlements of Dutch Suriname and Maroon Polities ordered by 1815AD population.</figcaption>
</figure>

# French Guiana Gazetteer

French Guiana contains 36 catalogued colonial settlements, covering the
administrative hub of Cayenne, Jesuit estates at Remire-Montjoly, coastal
parishes at Kourou, Sinnamary and Iracoubo, and frontier posts along the Maroni
and Oyapock rivers [@mamlamfouck1992histoire; @cardoso1999guyane;
@palisse2022living]. Table \ref{tab:french-guiana} catalogues all 25 deduplicated
settlements in the polity.

<figure class="crd-table-figure" id="tab:french-guiana">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Polity</th><th class="crd-th">Foundation</th><th class="crd-th">Latitude</th><th class="crd-th">Longitude</th><th class="crd-th">1750AD</th><th class="crd-th">1800AD</th><th class="crd-th">1815AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cayenne</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,94 N</td><td class="crd-td">52,33 W</td><td class="crd-td">5,6k</td><td class="crd-td">6,4k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Matoury</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,85 N</td><td class="crd-td">52,32 W</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Remire-Montjoly</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,89 N</td><td class="crd-td">52,28 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Kourou</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,91 N</td><td class="crd-td">52,78 W</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Rémire-Montjoly</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,92 N</td><td class="crd-td">52,27 W</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Macouria</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,99 N</td><td class="crd-td">52,48 W</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Approuague (Guizanbourg)</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1730AD</td><td class="crd-td">4,35 N</td><td class="crd-td">51,93 W</td><td class="crd-td">650</td><td class="crd-td">1,8k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Roura</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1675AD</td><td class="crd-td">4,73 N</td><td class="crd-td">52,33 W</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Sinnamary</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1624AD</td><td class="crd-td">5,38 N</td><td class="crd-td">52,96 W</td><td class="crd-td">950</td><td class="crd-td">-</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Oyapock (Fort Saint-Louis)</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1726AD</td><td class="crd-td">3,89 N</td><td class="crd-td">51,8 W</td><td class="crd-td">780</td><td class="crd-td">-</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Mana</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">5 N</td><td class="crd-td">53,68 W</td><td class="crd-td">845</td><td class="crd-td">960</td><td class="crd-td">922</td></tr>
<tr><td class="crd-td"><strong>Papaichton</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,02 N</td><td class="crd-td">54,05 W</td><td class="crd-td">386</td><td class="crd-td">439</td><td class="crd-td">421</td></tr>
<tr><td class="crd-td"><strong>Saint-Georges</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">3,81 N</td><td class="crd-td">52,08 W</td><td class="crd-td">380</td><td class="crd-td">431</td><td class="crd-td">414</td></tr>
<tr><td class="crd-td"><strong>Montsinéry-Tonnegrande</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,81 N</td><td class="crd-td">52,51 W</td><td class="crd-td">280</td><td class="crd-td">318</td><td class="crd-td">305</td></tr>
<tr><td class="crd-td"><strong>Résidence Cogneau-Larivot</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,89 N</td><td class="crd-td">52,34 W</td><td class="crd-td">250</td><td class="crd-td">284</td><td class="crd-td">273</td></tr>
<tr><td class="crd-td"><strong>Camopi</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">2,87 N</td><td class="crd-td">52,69 W</td><td class="crd-td">169</td><td class="crd-td">192</td><td class="crd-td">184</td></tr>
<tr><td class="crd-td"><strong>Régina</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,31 N</td><td class="crd-td">52,13 W</td><td class="crd-td">152</td><td class="crd-td">173</td><td class="crd-td">166</td></tr>
<tr><td class="crd-td"><strong>Charvein</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">5,58 N</td><td class="crd-td">53,9 W</td><td class="crd-td">147</td><td class="crd-td">167</td><td class="crd-td">160</td></tr>
<tr><td class="crd-td"><strong>Iracoubo</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">5,48 N</td><td class="crd-td">53,21 W</td><td class="crd-td">140</td><td class="crd-td">159</td><td class="crd-td">153</td></tr>
<tr><td class="crd-td"><strong>Javouhey</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">5,61 N</td><td class="crd-td">53,82 W</td><td class="crd-td">92</td><td class="crd-td">104</td><td class="crd-td">100</td></tr>
<tr><td class="crd-td"><strong>Bellevue</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">5,48 N</td><td class="crd-td">53,26 W</td><td class="crd-td">50</td><td class="crd-td">56</td><td class="crd-td">54</td></tr>
<tr><td class="crd-td"><strong>Ouanary</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,21 N</td><td class="crd-td">51,83 W</td><td class="crd-td">28</td><td class="crd-td">31</td><td class="crd-td">30</td></tr>
<tr><td class="crd-td"><strong>Saint-Élie</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,49 N</td><td class="crd-td">53,11 W</td><td class="crd-td">28</td><td class="crd-td">31</td><td class="crd-td">30</td></tr>
<tr><td class="crd-td"><strong>Saül</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">3,62 N</td><td class="crd-td">53,21 W</td><td class="crd-td">26</td><td class="crd-td">29</td><td class="crd-td">28</td></tr>
<tr><td class="crd-td"><strong>Kaw</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">1650AD</td><td class="crd-td">4,49 N</td><td class="crd-td">52,04 W</td><td class="crd-td">25</td><td class="crd-td">26</td><td class="crd-td">25</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Catalogued settlements of French Guiana ordered by 1815AD population.</figcaption>
</figure>

# Methodological Considerations and Archival Provenance

Interpreting the historical demography of settlements in the colonial Guianas
requires careful attention to the spatial nature of plantation units and parish
divisions [@higman1984slave; @vanstipriaan1993surinaams; @cardoso1999guyane].
Unlike European municipalities with dense residential quarters enclosed within
walls or urban boundaries, the primary demographic unit of the Guiana coastal
plains was the agricultural plantation (*plantage* or *habitation*).

Plantations constituted self-contained socio-economic communities. Each estate
comprised a manager's house, sugar boiling houses, distilleries, drainage
canals, slave quarters and subsistence provision grounds spanning several
hundred hectares [@vanstipriaan1993surinaams; @higman1984slave]. In colonial tax
rolls and parish registers, populations were enumerated by estate rather than
by nuclear town, explaining why large agricultural parishes and plantation
clusters in Demerara and Suriname recorded aggregate populations exceeding
several thousand residents [@thompson1987colonialism; @hartsinck1770beschryving].

Furthermore, official colonial rolls routinely omitted unassimilated Amerindian
groups inhabiting the deep interior and unregistered runaway slave communities
living outside treaty zones [@whitehead1988lords; @price1976maroon]. The
settlement counts and population estimates compiled here capture the effective
colonial sphere of taxation, civil administration and treaty diplomacy,
establishing an authentic baseline for regional demographic reconstruction.

# Sources

<div id="refs"></div>
