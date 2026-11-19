---
title: "Settlement Gazetteer of Colonial Canada to 1763AD"
subtitle: "CENTAUR-II: St. Lawrence Towns, Acadian Parishes, Fur Posts and Greenland Missions, 1500 to 1763AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_canada_to_1763_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_canada_to_1763_spatial.png"
hero_caption: "Spatial distribution of 79 verified settlements across New France, Acadia, Newfoundland, Pays d'en Haut, Rupert's Land and Greenland, 1500 to 1763AD."
hero_label: "fig:hero-colonial-canada-to-1763"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 79 verified settlements active across Canada, Saint-Pierre-et-Miquelon and Greenland between 1500AD and 1763AD under Operation Viscount CENTAUR-II. Drawn from *Censuses of Canada 1665 to 1871* Vol. IV, Acadian parish rolls, Hudson's Bay Company and French interior post complements and Danish-Moravian Greenland mission records [@statcan1876censuses; @ray1974indians; @gad1973history], the catalogue spans seven of the eight regional masks: New France St. Lawrence (23 sites), Acadia-Nova Scotia (17), Newfoundland-Labrador-Saint-Pierre (13), Greenland (12), Rupert's Land (7), Pays d'en Haut (6) and Western Prairies (1). Leading centres prior to the 1763AD Treaty of Paris were Québec (9k in 1750-1759AD), Montréal (6k in 1750AD), Louisbourg (5k in 1758AD), Halifax (3,02k by 1767AD), St. John's (2,4k in 1763AD), Île d'Orléans (2,25k in 1739AD) and Grand-Pré (2,2k in 1755AD) [@statcan1876censuses]. One generic exclusion (`Unnamed seasonal camps`) is recorded in `colonial_canada_to_1763_source_ledger.json5`.

# Background

Before 1763AD, nucleated settlement in northern North America clustered along three maritime and riverine axes: the St. Lawrence seigneurial corridor between Québec, Trois-Rivières and Montréal; the Acadian dyked marshlands of Port-Royal, Grand-Pré and Beaubassin alongside the fortified port of Louisbourg and British Halifax; and the Avalon-Plaisance winter fishing stations of Newfoundland [@statcan1876censuses; @prins1996mikmaq]. Across the interior boreal shield and prairies, Hudson's Bay Company coastal factories (York Factory, Churchill, Moose Factory and Fort Albany) and French *Pays d'en Haut* posts held small permanent winter complements surrounded by seasonal Indigenous trading camps [@ray1974indians; @trigger1985natives]. In West Greenland, Danish colonial trading stations and Moravian missions established permanent winter nuclei from Nuuk (1721/1728AD) to Ilulissat and Uummannaq [@gad1973history].

# Methodology

Settlement entries carry `sources: ["CENTAUR"]` and were mapped onto the eight 5-arcminute regional masks using a 14-pixel coastal snap radius to capture peninsular ports and Greenlandic fjords. Greenlandic Danish colonial names (`Godthåb`, `Jakobshavn`, `Julianehåb`) were standardised to canonical Kalaallisut toponyms (`Nuuk`, `Ilulissat`, `Qaqortoq`) with Danish exonyms preserved in `other_names`. Observations extend slightly beyond 1763AD (to 1765-1776AD) where immediate post-war censuses anchor the 1763AD endpoint.

# Testing and Validation

Ledger reconciliation confirms `79` included settlements and `1` excluded seasonal entry (`80` total candidates, `0` unaccounted). All 79 records pass coordinate and integer population validation. Figure \ref{fig:sett-cc1763} displays the rank-size curve and leading eight settlements.

<figure class="crd-figure-block" id="fig:sett-cc1763">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1763-settlements/fig4_colonial_canada_to_1763_settlements.png" alt="fig:sett-cc1763" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks across the 79 catalogued centres of Colonial Canada and Greenland to 1763AD.</figcaption>
</figure>

# Results

## Complete Settlement Catalogue

Table \ref{tab:gazetteer-cc1763} lists all 79 catalogued settlements ordered by peak population, reporting territory, coordinates, active span and benchmark figures.

<figure class="crd-table-figure" id="tab:gazetteer-cc1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1681AD</th><th class="crd-th">1739AD</th><th class="crd-th">1754AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Québec</strong></td><td class="crd-td">New France</td><td class="crd-td">46,81, -71,21</td><td class="crd-td">1535-1765</td><td class="crd-td">1,1k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">9k (1750)</td></tr>
<tr><td class="crd-td"><strong>Montréal</strong></td><td class="crd-td">New France</td><td class="crd-td">45,51, -73,59</td><td class="crd-td">1535-1765</td><td class="crd-td">1,4k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">6k (1750)</td></tr>
<tr><td class="crd-td"><strong>Louisbourg</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,92, -59,97</td><td class="crd-td">1713-1763</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">5k (1758)</td></tr>
<tr><td class="crd-td"><strong>Halifax</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">44,64, -63,58</td><td class="crd-td">1749-1767</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1767)</td></tr>
<tr><td class="crd-td"><strong>St. John's</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">47,56, -52,71</td><td class="crd-td">1627-1763</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1763)</td></tr>
<tr><td class="crd-td"><strong>Île d'Orléans</strong></td><td class="crd-td">New France</td><td class="crd-td">46,97, -70,97</td><td class="crd-td">1666-1739</td><td class="crd-td">1,1k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1739)</td></tr>
<tr><td class="crd-td"><strong>Grand-Pré</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,1, -64,31</td><td class="crd-td">1686-1767</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1755)</td></tr>
<tr><td class="crd-td"><strong>Beaubassin</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,84, -64,26</td><td class="crd-td">1672-1755</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1755)</td></tr>
<tr><td class="crd-td"><strong>Lunenburg</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">44,38, -64,32</td><td class="crd-td">1753-1767</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1767)</td></tr>
<tr><td class="crd-td"><strong>Port-Royal</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">44,74, -65,52</td><td class="crd-td">1605-1767</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1752)</td></tr>
<tr><td class="crd-td"><strong>Beaupré</strong></td><td class="crd-td">New France</td><td class="crd-td">47,04, -70,9</td><td class="crd-td">1666-1739</td><td class="crd-td">720</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1739)</td></tr>
<tr><td class="crd-td"><strong>Saint-Pierre</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">46,78, -56,18</td><td class="crd-td">1763-1776</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1776)</td></tr>
<tr><td class="crd-td"><strong>Trois-Rivières</strong></td><td class="crd-td">New France</td><td class="crd-td">46,35, -72,55</td><td class="crd-td">1634-1765</td><td class="crd-td">800</td><td class="crd-td">600</td><td class="crd-td">-</td><td class="crd-td">800 (1681)</td></tr>
<tr><td class="crd-td"><strong>Boucherville</strong></td><td class="crd-td">New France</td><td class="crd-td">45,59, -73,44</td><td class="crd-td">1667-1739</td><td class="crd-td">179</td><td class="crd-td">690</td><td class="crd-td">-</td><td class="crd-td">690 (1739)</td></tr>
<tr><td class="crd-td"><strong>La Prairie</strong></td><td class="crd-td">New France</td><td class="crd-td">45,42, -73,5</td><td class="crd-td">1667-1739</td><td class="crd-td">215</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">680 (1739)</td></tr>
<tr><td class="crd-td"><strong>Plaisance</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">47,25, -53,96</td><td class="crd-td">1662-1750</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">650 (1705)</td></tr>
<tr><td class="crd-td"><strong>Miquelon</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">47,1, -56,38</td><td class="crd-td">1763-1776</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">644 (1776)</td></tr>
<tr><td class="crd-td"><strong>Placentia</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">47,23, -53,96</td><td class="crd-td">1662-1750</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620 (1713)</td></tr>
<tr><td class="crd-td"><strong>Lévis</strong></td><td class="crd-td">New France</td><td class="crd-td">46,8, -71,18</td><td class="crd-td">1666-1739</td><td class="crd-td">-</td><td class="crd-td">550</td><td class="crd-td">-</td><td class="crd-td">550 (1739)</td></tr>
<tr><td class="crd-td"><strong>Terrebonne</strong></td><td class="crd-td">New France</td><td class="crd-td">45,7, -73,65</td><td class="crd-td">1681-1739</td><td class="crd-td">35</td><td class="crd-td">520</td><td class="crd-td">-</td><td class="crd-td">520 (1739)</td></tr>
<tr><td class="crd-td"><strong>Montmagny</strong></td><td class="crd-td">New France</td><td class="crd-td">46,98, -70,55</td><td class="crd-td">1681-1739</td><td class="crd-td">45</td><td class="crd-td">500</td><td class="crd-td">-</td><td class="crd-td">500 (1739)</td></tr>
<tr><td class="crd-td"><strong>Berthierville</strong></td><td class="crd-td">New France</td><td class="crd-td">46,08, -73,18</td><td class="crd-td">1681-1739</td><td class="crd-td">45</td><td class="crd-td">480</td><td class="crd-td">-</td><td class="crd-td">480 (1739)</td></tr>
<tr><td class="crd-td"><strong>Sorel</strong></td><td class="crd-td">New France</td><td class="crd-td">46,04, -73,11</td><td class="crd-td">1642-1739</td><td class="crd-td">180</td><td class="crd-td">450</td><td class="crd-td">-</td><td class="crd-td">450 (1739)</td></tr>
<tr><td class="crd-td"><strong>Bonavista</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">48,65, -53,11</td><td class="crd-td">1675-1730</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">450 (1730)</td></tr>
<tr><td class="crd-td"><strong>Chambly</strong></td><td class="crd-td">New France</td><td class="crd-td">45,45, -73,28</td><td class="crd-td">1665-1739</td><td class="crd-td">120</td><td class="crd-td">420</td><td class="crd-td">-</td><td class="crd-td">420 (1739)</td></tr>
<tr><td class="crd-td"><strong>Harbour Grace</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">47,69, -53,23</td><td class="crd-td">1675-1730</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">420 (1730)</td></tr>
<tr><td class="crd-td"><strong>Kamouraska</strong></td><td class="crd-td">New France</td><td class="crd-td">47,57, -69,87</td><td class="crd-td">1681-1739</td><td class="crd-td">30</td><td class="crd-td">410</td><td class="crd-td">-</td><td class="crd-td">410 (1739)</td></tr>
<tr><td class="crd-td"><strong>Canso</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,33, -61</td><td class="crd-td">1718-1767</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">400 (1718)</td></tr>
<tr><td class="crd-td"><strong>Carbonear</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">47,74, -53,23</td><td class="crd-td">1675-1730</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">380 (1730)</td></tr>
<tr><td class="crd-td"><strong>Yarmouth</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">43,83, -66,12</td><td class="crd-td">1761-1767</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">366 (1767)</td></tr>
<tr><td class="crd-td"><strong>Windsor (Nova Scotia)</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">44,98, -64,13</td><td class="crd-td">1701-1767</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">350 (1764)</td></tr>
<tr><td class="crd-td"><strong>Windsor</strong></td><td class="crd-td">Pays d'en Haut and Great Lakes Fur-Trade Posts</td><td class="crd-td">42,3, -83,02</td><td class="crd-td">1748-1765</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">350 (1765)</td></tr>
<tr><td class="crd-td"><strong>Charlottetown</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">46,23, -63,13</td><td class="crd-td">1720-1768</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">325 (1752)</td></tr>
<tr><td class="crd-td"><strong>Nicolet</strong></td><td class="crd-td">New France</td><td class="crd-td">46,23, -72,61</td><td class="crd-td">1681-1739</td><td class="crd-td">40</td><td class="crd-td">320</td><td class="crd-td">-</td><td class="crd-td">320 (1739)</td></tr>
<tr><td class="crd-td"><strong>Baie-Saint-Paul</strong></td><td class="crd-td">New France</td><td class="crd-td">47,44, -70,5</td><td class="crd-td">1681-1739</td><td class="crd-td">35</td><td class="crd-td">320</td><td class="crd-td">-</td><td class="crd-td">320 (1739)</td></tr>
<tr><td class="crd-td"><strong>Ferryland</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">47,03, -52,88</td><td class="crd-td">1621-1730</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">320 (1730)</td></tr>
<tr><td class="crd-td"><strong>Trinity</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">48,37, -53,36</td><td class="crd-td">1675-1730</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">310 (1730)</td></tr>
<tr><td class="crd-td"><strong>Truro</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,37, -63,27</td><td class="crd-td">1701-1767</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">301 (1767)</td></tr>
<tr><td class="crd-td"><strong>Pictou</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,68, -62,71</td><td class="crd-td">1767-1773</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">240 (1773)</td></tr>
<tr><td class="crd-td"><strong>Nuuk</strong></td><td class="crd-td">Greenland</td><td class="crd-td">64,18, -51,72</td><td class="crd-td">1728-1763</td><td class="crd-td">-</td><td class="crd-td">120</td><td class="crd-td">-</td><td class="crd-td">240 (1763)</td></tr>
<tr><td class="crd-td"><strong>Rimouski</strong></td><td class="crd-td">New France</td><td class="crd-td">48,45, -68,52</td><td class="crd-td">1696-1739</td><td class="crd-td">-</td><td class="crd-td">180</td><td class="crd-td">-</td><td class="crd-td">180 (1739)</td></tr>
<tr><td class="crd-td"><strong>Miramichi</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">47,03, -65,5</td><td class="crd-td">1686-1765</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">150 (1765)</td></tr>
<tr><td class="crd-td"><strong>Amherst</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,83, -64,2</td><td class="crd-td">1764-1767</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">123 (1767)</td></tr>
<tr><td class="crd-td"><strong>Gaspé</strong></td><td class="crd-td">New France</td><td class="crd-td">48,83, -64,48</td><td class="crd-td">1681-1739</td><td class="crd-td">35</td><td class="crd-td">120</td><td class="crd-td">-</td><td class="crd-td">120 (1739)</td></tr>
<tr><td class="crd-td"><strong>Saint-Jean-sur-Richelieu</strong></td><td class="crd-td">New France</td><td class="crd-td">45,31, -73,26</td><td class="crd-td">1748-1748</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">120 (1748)</td></tr>
<tr><td class="crd-td"><strong>Saint John</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,27, -66,06</td><td class="crd-td">1631-1762</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">120 (1762)</td></tr>
<tr><td class="crd-td"><strong>Fredericton</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,95, -66,67</td><td class="crd-td">1739-1739</td><td class="crd-td">-</td><td class="crd-td">120</td><td class="crd-td">-</td><td class="crd-td">120 (1739)</td></tr>
<tr><td class="crd-td"><strong>Kingston</strong></td><td class="crd-td">Pays d'en Haut and Great Lakes Fur-Trade Posts</td><td class="crd-td">44,23, -76,48</td><td class="crd-td">1673-1739</td><td class="crd-td">-</td><td class="crd-td">90</td><td class="crd-td">-</td><td class="crd-td">90 (1739)</td></tr>
<tr><td class="crd-td"><strong>York Factory</strong></td><td class="crd-td">Rupert's Land and Hudson's Bay Company Trading Factory Zones</td><td class="crd-td">57, -92,31</td><td class="crd-td">1684-1763</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">85 (1763)</td></tr>
<tr><td class="crd-td"><strong>Sault Ste. Marie</strong></td><td class="crd-td">Pays d'en Haut and Great Lakes Fur-Trade Posts</td><td class="crd-td">46,52, -84,33</td><td class="crd-td">1668-1750</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">80 (1750)</td></tr>
<tr><td class="crd-td"><strong>Churchill</strong></td><td class="crd-td">Rupert's Land and Hudson's Bay Company Trading Factory Zones</td><td class="crd-td">58,78, -94,19</td><td class="crd-td">1717-1763</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">80 (1763)</td></tr>
<tr><td class="crd-td"><strong>Qaqortoq</strong></td><td class="crd-td">Greenland</td><td class="crd-td">60,72, -46,04</td><td class="crd-td">1775-1775</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">80 (1775)</td></tr>
<tr><td class="crd-td"><strong>Tadoussac</strong></td><td class="crd-td">New France</td><td class="crd-td">48,15, -69,72</td><td class="crd-td">1600-1739</td><td class="crd-td">-</td><td class="crd-td">70</td><td class="crd-td">-</td><td class="crd-td">70 (1739)</td></tr>
<tr><td class="crd-td"><strong>Moncton</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">46,09, -64,8</td><td class="crd-td">1766-1766</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65 (1766)</td></tr>
<tr><td class="crd-td"><strong>Cupids</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">47,55, -53,21</td><td class="crd-td">1610-1675</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65 (1675)</td></tr>
<tr><td class="crd-td"><strong>Nain</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">56,54, -61,7</td><td class="crd-td">1771-1771</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65 (1771)</td></tr>
<tr><td class="crd-td"><strong>Fort Albany</strong></td><td class="crd-td">Rupert's Land and Hudson's Bay Company Trading Factory Zones</td><td class="crd-td">52,21, -81,68</td><td class="crd-td">1679-1763</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65 (1763)</td></tr>
<tr><td class="crd-td"><strong>Ilulissat</strong></td><td class="crd-td">Greenland</td><td class="crd-td">69,22, -51,1</td><td class="crd-td">1741-1741</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65 (1741)</td></tr>
<tr><td class="crd-td"><strong>Saint-Hyacinthe</strong></td><td class="crd-td">New France</td><td class="crd-td">45,63, -72,96</td><td class="crd-td">1757-1757</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">60 (1757)</td></tr>
<tr><td class="crd-td"><strong>Waskaganish</strong></td><td class="crd-td">Rupert's Land and Hudson's Bay Company Trading Factory Zones</td><td class="crd-td">51,48, -78,75</td><td class="crd-td">1668-1763</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">60 (1763)</td></tr>
<tr><td class="crd-td"><strong>Twillingate</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">49,65, -54,76</td><td class="crd-td">1735-1735</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">60 (1735)</td></tr>
<tr><td class="crd-td"><strong>Moose Factory</strong></td><td class="crd-td">Rupert's Land and Hudson's Bay Company Trading Factory Zones</td><td class="crd-td">51,27, -80,62</td><td class="crd-td">1673-1763</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">60 (1763)</td></tr>
<tr><td class="crd-td"><strong>Maniitsoq</strong></td><td class="crd-td">Greenland</td><td class="crd-td">65,42, -52,9</td><td class="crd-td">1755-1755</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">60 (1755)</td></tr>
<tr><td class="crd-td"><strong>Sisimiut</strong></td><td class="crd-td">Greenland</td><td class="crd-td">66,94, -53,67</td><td class="crd-td">1756-1756</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">55 (1756)</td></tr>
<tr><td class="crd-td"><strong>Qeqertarsuaq</strong></td><td class="crd-td">Greenland</td><td class="crd-td">69,25, -53,54</td><td class="crd-td">1773-1773</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">55 (1773)</td></tr>
<tr><td class="crd-td"><strong>Thunder Bay</strong></td><td class="crd-td">Rupert's Land and Hudson's Bay Company Trading Factory Zones</td><td class="crd-td">48,38, -89,25</td><td class="crd-td">1679-1717</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">50 (1717)</td></tr>
<tr><td class="crd-td"><strong>Aasiaat</strong></td><td class="crd-td">Greenland</td><td class="crd-td">68,71, -52,86</td><td class="crd-td">1759-1759</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">50 (1759)</td></tr>
<tr><td class="crd-td"><strong>Paamiut</strong></td><td class="crd-td">Greenland</td><td class="crd-td">61,99, -49,67</td><td class="crd-td">1742-1742</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">50 (1742)</td></tr>
<tr><td class="crd-td"><strong>Toronto</strong></td><td class="crd-td">Pays d'en Haut and Great Lakes Fur-Trade Posts</td><td class="crd-td">43,65, -79,38</td><td class="crd-td">1750-1750</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">45 (1750)</td></tr>
<tr><td class="crd-td"><strong>Uummannaq</strong></td><td class="crd-td">Greenland</td><td class="crd-td">70,67, -52,13</td><td class="crd-td">1758-1758</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">45 (1758)</td></tr>
<tr><td class="crd-td"><strong>Qasigiannguit</strong></td><td class="crd-td">Greenland</td><td class="crd-td">68,82, -51,19</td><td class="crd-td">1734-1734</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">45 (1734)</td></tr>
<tr><td class="crd-td"><strong>Chicoutimi</strong></td><td class="crd-td">New France</td><td class="crd-td">48,42, -71,06</td><td class="crd-td">1676-1739</td><td class="crd-td">-</td><td class="crd-td">40</td><td class="crd-td">-</td><td class="crd-td">40 (1739)</td></tr>
<tr><td class="crd-td"><strong>Prescott</strong></td><td class="crd-td">Pays d'en Haut and Great Lakes Fur-Trade Posts</td><td class="crd-td">44,72, -75,52</td><td class="crd-td">1749-1749</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">40 (1749)</td></tr>
<tr><td class="crd-td"><strong>Cumberland House</strong></td><td class="crd-td">Western Prairies and French-Indigenous Saskatchewan Posts</td><td class="crd-td">53,95, -102,27</td><td class="crd-td">1774-1774</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">40 (1774)</td></tr>
<tr><td class="crd-td"><strong>Upernavik</strong></td><td class="crd-td">Greenland</td><td class="crd-td">72,78, -56,15</td><td class="crd-td">1772-1772</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">40 (1772)</td></tr>
<tr><td class="crd-td"><strong>Portage la Prairie</strong></td><td class="crd-td">Rupert's Land and Hudson's Bay Company Trading Factory Zones</td><td class="crd-td">49,97, -98,29</td><td class="crd-td">1738-1738</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">35 (1738)</td></tr>
<tr><td class="crd-td"><strong>Navy Island</strong></td><td class="crd-td">Pays d'en Haut and Great Lakes Fur-Trade Posts</td><td class="crd-td">43,06, -79,03</td><td class="crd-td">1763-1763</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30 (1763)</td></tr>
<tr><td class="crd-td"><strong>Herjolfsnes</strong></td><td class="crd-td">Greenland</td><td class="crd-td">59,98, -44,7</td><td class="crd-td">1480-1480</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25 (1480)</td></tr>
<tr><td class="crd-td"><strong>Rivière-du-Loup</strong></td><td class="crd-td">New France</td><td class="crd-td">47,83, -69,54</td><td class="crd-td">1681-1681</td><td class="crd-td">20</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20 (1681)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> All 79 verified settlements in Colonial Canada and Greenland to 1763AD ordered by peak catalogued population.</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:regsum-cc1763} summarises site counts and leading centres across all eight masks. The Pacific Northwest Coast and Mackenzie region (`cc1_pacific_mackenzie_indigenous`) records `0` nucleated colonial settlements prior to 1763AD, reflecting pre-contact Indigenous autonomy prior to coastal maritime fur-trade posts [@boyd1999coming].

<figure class="crd-table-figure" id="tab:regsum-cc1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>New France: Governments of Quebec, Trois-Rivieres and Montreal</strong></td><td class="crd-td">23</td><td class="crd-td">Québec (9k)</td></tr>
<tr><td class="crd-td"><strong>Acadia, Nova Scotia, Ile Royale (Louisbourg) and Ile Saint-Jean</strong></td><td class="crd-td">17</td><td class="crd-td">Louisbourg (5k)</td></tr>
<tr><td class="crd-td"><strong>Newfoundland (Avalon and Plaisance), Labrador and Saint-Pierre</strong></td><td class="crd-td">13</td><td class="crd-td">St. John's (2,4k)</td></tr>
<tr><td class="crd-td"><strong>Pays d'en Haut and Great Lakes Fur-Trade Posts (Southern Ontario)</strong></td><td class="crd-td">6</td><td class="crd-td">Windsor (350)</td></tr>
<tr><td class="crd-td"><strong>Rupert's Land and Hudson's Bay Company Trading Factory Zones</strong></td><td class="crd-td">7</td><td class="crd-td">York Factory (85)</td></tr>
<tr><td class="crd-td"><strong>Western Prairies and French-Indigenous Saskatchewan Posts</strong></td><td class="crd-td">1</td><td class="crd-td">Cumberland House (40)</td></tr>
<tr><td class="crd-td"><strong>Pacific Northwest Coast, Yukon and Mackenzie River Nations</strong></td><td class="crd-td">0</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Greenland (Danish-Moravian Missions 1721-1763 and Independent Kalaallit)</strong></td><td class="crd-td">12</td><td class="crd-td">Nuuk (240)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading centres across all eight regional masks to 1763AD (79 total sites).</figcaption>
</figure>

# Limitations

Three constraints govern the 1500-1763AD gazetteer. First, sixteenth-century Iroquoian sites such as Stadacona (Québec) and Hochelaga (Montréal) carry approximate village-aggregate anchors (1k and 1,5k at 1535AD) rather than formal censuses [@tremblay2006st]. Second, St. Lawrence rural parishes (`Beaupré`, `Île d'Orléans`, `La Prairie`, `Boucherville`) represent seigneurial parish totals rather than compact town grids [@statcan1876censuses]. Third, `Saint-Pierre` and `Miquelon` fall inside the `cc1_newfoundland_labrador_st_pierre` mask prior to 1763AD before receiving a dedicated mask in `colonial_canada_to_1867`.

# Sources

<div id="refs"></div>
