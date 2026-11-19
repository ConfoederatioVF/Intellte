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
hero_caption: "Spatial distribution of 1.352 catalogued settlements across New France, Acadia, Newfoundland, Pays d'en Haut, Rupert's Land, Western Prairies, Pacific-Mackenzie and Greenland, 1500 to 1763AD."
hero_label: "fig:hero-colonial-canada-to-1763"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 1.352 catalogued settlements (2.562 settlement-year observations) active across Greenland (705), Canada (643) and Saint-Pierre-et-Miquelon (4) between 1500AD and 1763AD under CENTAUR-II. Drawn from *Censuses of Canada 1665 to 1871* Vol. IV, Acadian parish rolls, Hudson's Bay Company and French interior post complements, Pacific and Subarctic archaeological syntheses and Danish-Moravian Greenland mission and Indigenous site records [@statcan1876censuses; @ray1974indians; @boyd1999coming; @gad1973history], the catalogue spans all eight regional masks: Greenland (705 sites), New France St. Lawrence (294), Rupert's Land (96), Pacific Northwest Coast, Yukon and Mackenzie (84), Acadia and Nova Scotia (76), Newfoundland, Labrador and Saint-Pierre (65), Pays d'en Haut (17) and Western Prairies (15). Leading centres prior to the 1763AD Treaty of Paris were Québec (9k in 1750-1759AD), Montréal (6k in 1750AD), Louisbourg (5,2k in 1758AD), Halifax (4k in 1755AD; 3k in 1763AD), Grand-Pré (2,5k in 1750AD), St. John's (2,4k in 1763AD), Île d'Orléans (2,25k in 1739AD), Beaubassin (1,6k in 1755AD), Pisiguit (1,6k in 1750AD), Lunenburg (1.453 in 1753AD), Marpole (1,45k in 1500AD) and Port-Royal (1,45k in 1752AD) [@statcan1876censuses; @boyd1999coming]. Alongside the 1.352 included records, the source ledger documents 132 deduplicated exclusions (1.484 total candidates, 0 unaccounted).

# Background

Before 1763AD, nucleated settlement in northern North America divided between Indigenous villages anchored to marine and riverine resources and European colonial towns concentrated along three eastern corridors. Along the St. Lawrence seigneurial axis, French parishes and fortified towns ran continuously between Québec, Trois-Rivières and Montréal; in the Maritimes, Acadian dyked marshlands at Port-Royal, Grand-Pré and Beaubassin coexisted with the French fortress port of Louisbourg and British Halifax; and across eastern Newfoundland, English and French winter fishing stations occupied St. John's, Plaisance, Carbonear and Harbour Grace [@statcan1876censuses; @prins1996mikmaq].

Across the interior shield, prairies and Pacific Northwest, permanent Hudson's Bay Company coastal factories (York Factory, Churchill, Moose Factory and Fort Albany) and French *Pays d'en Haut* posts held modest winter complements amidst much larger Indigenous towns and riverine habitation hubs such as Marpole, Yuquot, Kittigazuit, Laxgalts'ap, Lockport and Estipah-skikikini-kots [@ray1974indians; @trigger1985natives; @boyd1999coming]. In West and South Greenland, Indigenous Thule winter settlements documented across Disko Bay, Nuup Kangerlua and Avanersuaq joined Danish colonial trading stations and Moravian missions founded from Nuuk (1721/1728AD) to Ilulissat and Paamiut [@gad1973history].

# Methodology

All 1.352 settlement entries carry CENTAUR provenance and snap onto the eight 5-arcminute regional masks using a 14-pixel coastal search radius so peninsular outports, islands and Greenlandic fjords assign cleanly to their parent mask. Greenlandic Danish colonial names (Godthåb, Jakobshavn, Julianehåb) were standardised to Kalaallisut headwords (Nuuk, Ilulissat, Qaqortoq) with Danish exonyms retained as alternative names [@gad1973history]. Every settlement observation falls strictly within the 1500AD to 1763AD chronological domain.

Ledger deduplication consolidates 132 duplicate alias candidate entries (108 in Canada, 23 in Greenland and 1 in Saint-Pierre-et-Miquelon) out of 1.484 total candidates within a 2 km matching radius into canonical settlement keys, unifying colonial and Indigenous aliases such as Port-Royal Acadia, Grand-Pré, Quebec Capital, Montreal City, Sainte-Famille-de-l'Île-d'Orléans, Placentia, Windsor-ON, Saint-Gervais, Sermermiut (into Ilulissat), Asummiut (into Sisimiut), Nuuk Colony (into Nuuk) and Miquelon (into Miquelon Settlement).

# Testing and Validation

Ledger reconciliation confirms 1.352 included settlements and 132 excluded duplicate or alias entries (1.484 total candidates, 0 unaccounted). All 1.352 records pass WGS84 coordinate bounds, mask containment and positive integer population checks across 2.562 settlement-year observations (1,89 observations per settlement on average). Figure \ref{fig:sett-cc1763} plots the 1.352-settlement rank-size distribution alongside the fifteen largest peaks.

<figure class="crd-figure-block" id="fig:sett-cc1763">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1763-settlements/fig4_colonial_canada_to_1763_settlements.png" alt="fig:sett-cc1763" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 1.352 catalogued centres and leading fifteen urban peaks of Colonial Canada and Greenland to 1763AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:gazetteer-cc1763} lists the Top 45 catalogued settlements ranked descending by peak population within the 1500AD to 1763AD window, reporting regional territory, WGS84 coordinates, active chronological span and benchmark populations at 1681AD, 1739AD and 1763AD.

<figure class="crd-table-figure" id="tab:gazetteer-cc1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1681AD</th><th class="crd-th">1739AD</th><th class="crd-th">1763AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Québec</strong></td><td class="crd-td">New France</td><td class="crd-td">46,81, -71,21</td><td class="crd-td">1535-1759</td><td class="crd-td">1,1k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">9k (1750)</td></tr>
<tr><td class="crd-td"><strong>Montréal</strong></td><td class="crd-td">New France</td><td class="crd-td">45,51, -73,59</td><td class="crd-td">1535-1750</td><td class="crd-td">1,4k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">6k (1750)</td></tr>
<tr><td class="crd-td"><strong>Louisbourg</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,92, -60</td><td class="crd-td">1713-1763</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">350</td><td class="crd-td">5,2k (1758)</td></tr>
<tr><td class="crd-td"><strong>Halifax City NS</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">44,65, -63,58</td><td class="crd-td">1749-1763</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">4k (1755)</td></tr>
<tr><td class="crd-td"><strong>Louisbourg Fortress Town</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,96, -59,96</td><td class="crd-td">1713-1758</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1758)</td></tr>
<tr><td class="crd-td"><strong>Grand-Pre Acadia</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,11, -64,31</td><td class="crd-td">1682-1755</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1750)</td></tr>
<tr><td class="crd-td"><strong>St. John's</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">47,56, -52,71</td><td class="crd-td">1627-1763</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1763)</td></tr>
<tr><td class="crd-td"><strong>Île d'Orléans</strong></td><td class="crd-td">New France</td><td class="crd-td">46,97, -70,97</td><td class="crd-td">1666-1739</td><td class="crd-td">1,1k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1739)</td></tr>
<tr><td class="crd-td"><strong>Beaubassin</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,84, -64,26</td><td class="crd-td">1672-1755</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1755)</td></tr>
<tr><td class="crd-td"><strong>Pisiguit Acadia</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">44,99, -64,14</td><td class="crd-td">1690-1750</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1750)</td></tr>
<tr><td class="crd-td"><strong>Lunenburg</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">44,38, -64,32</td><td class="crd-td">1753-1753</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1753)</td></tr>
<tr><td class="crd-td"><strong>Marpole</strong></td><td class="crd-td">Pacific Northwest Coast, Yukon and Mackenzie River Nations</td><td class="crd-td">49,21, -123,15</td><td class="crd-td">1500-1500</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1500)</td></tr>
<tr><td class="crd-td"><strong>Port-Royal</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">44,74, -65,52</td><td class="crd-td">1605-1752</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1752)</td></tr>
<tr><td class="crd-td"><strong>Trois-Rivieres Town</strong></td><td class="crd-td">New France</td><td class="crd-td">46,34, -72,54</td><td class="crd-td">1634-1739</td><td class="crd-td">630</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1739)</td></tr>
<tr><td class="crd-td"><strong>Beaupré</strong></td><td class="crd-td">New France</td><td class="crd-td">47,04, -70,9</td><td class="crd-td">1666-1739</td><td class="crd-td">720</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1739)</td></tr>
<tr><td class="crd-td"><strong>Yuquot</strong></td><td class="crd-td">Pacific Northwest Coast, Yukon and Mackenzie River Nations</td><td class="crd-td">49,71, -126,62</td><td class="crd-td">1500-1600</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1600)</td></tr>
<tr><td class="crd-td"><strong>Cobequid Acadia</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">45,37, -63,29</td><td class="crd-td">1690-1761</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1750)</td></tr>
<tr><td class="crd-td"><strong>Kahnawake</strong></td><td class="crd-td">New France</td><td class="crd-td">45,41, -73,68</td><td class="crd-td">1676-1750</td><td class="crd-td">450</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1739)</td></tr>
<tr><td class="crd-td"><strong>Lauzon Parish</strong></td><td class="crd-td">New France</td><td class="crd-td">46,82, -71,17</td><td class="crd-td">1666-1739</td><td class="crd-td">320</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1739)</td></tr>
<tr><td class="crd-td"><strong>Kittigazuit</strong></td><td class="crd-td">Pacific Northwest Coast, Yukon and Mackenzie River Nations</td><td class="crd-td">69,34, -133,69</td><td class="crd-td">1500-1600</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k (1600)</td></tr>
<tr><td class="crd-td"><strong>Charlesbourg</strong></td><td class="crd-td">New France</td><td class="crd-td">46,9, -71,31</td><td class="crd-td">1665-1739</td><td class="crd-td">390</td><td class="crd-td">940</td><td class="crd-td">-</td><td class="crd-td">940 (1739)</td></tr>
<tr><td class="crd-td"><strong>Laxgalts'ap</strong></td><td class="crd-td">Pacific Northwest Coast, Yukon and Mackenzie River Nations</td><td class="crd-td">55, -129,57</td><td class="crd-td">1500-1600</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">920 (1600)</td></tr>
<tr><td class="crd-td"><strong>Beauport</strong></td><td class="crd-td">New France</td><td class="crd-td">46,86, -71,19</td><td class="crd-td">1634-1739</td><td class="crd-td">340</td><td class="crd-td">890</td><td class="crd-td">-</td><td class="crd-td">890 (1739)</td></tr>
<tr><td class="crd-td"><strong>Laval</strong></td><td class="crd-td">New France</td><td class="crd-td">45,57, -73,69</td><td class="crd-td">1681-1739</td><td class="crd-td">65</td><td class="crd-td">890</td><td class="crd-td">-</td><td class="crd-td">890 (1739)</td></tr>
<tr><td class="crd-td"><strong>La Prairie Parish</strong></td><td class="crd-td">New France</td><td class="crd-td">45,42, -73,5</td><td class="crd-td">1667-1739</td><td class="crd-td">340</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">850 (1739)</td></tr>
<tr><td class="crd-td"><strong>Miramichi</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">47,03, -65,5</td><td class="crd-td">1686-1756</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">850 (1756)</td></tr>
<tr><td class="crd-td"><strong>Kanesatake</strong></td><td class="crd-td">New France</td><td class="crd-td">45,46, -74,09</td><td class="crd-td">1721-1763</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">800</td><td class="crd-td">800 (1763)</td></tr>
<tr><td class="crd-td"><strong>Port-la-Joye Town</strong></td><td class="crd-td">Acadia, Nova Scotia, Ile Royale</td><td class="crd-td">46,24, -63,14</td><td class="crd-td">1720-1758</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">800 (1758)</td></tr>
<tr><td class="crd-td"><strong>Boucherville</strong></td><td class="crd-td">New France</td><td class="crd-td">45,59, -73,44</td><td class="crd-td">1667-1739</td><td class="crd-td">399</td><td class="crd-td">780</td><td class="crd-td">-</td><td class="crd-td">780 (1739)</td></tr>
<tr><td class="crd-td"><strong>Saint-Jean Parish IO</strong></td><td class="crd-td">New France</td><td class="crd-td">46,93, -70,9</td><td class="crd-td">1666-1739</td><td class="crd-td">310</td><td class="crd-td">780</td><td class="crd-td">-</td><td class="crd-td">780 (1739)</td></tr>
<tr><td class="crd-td"><strong>Carbonear</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">47,74, -53,23</td><td class="crd-td">1675-1763</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">720</td><td class="crd-td">720 (1763)</td></tr>
<tr><td class="crd-td"><strong>Gitwangak</strong></td><td class="crd-td">Pacific Northwest Coast, Yukon and Mackenzie River Nations</td><td class="crd-td">55,11, -128,06</td><td class="crd-td">1500-1600</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">720 (1600)</td></tr>
<tr><td class="crd-td"><strong>Montmagny Parish</strong></td><td class="crd-td">New France</td><td class="crd-td">46,99, -70,56</td><td class="crd-td">1681-1739</td><td class="crd-td">140</td><td class="crd-td">720</td><td class="crd-td">-</td><td class="crd-td">720 (1739)</td></tr>
<tr><td class="crd-td"><strong>Neuville</strong></td><td class="crd-td">New France</td><td class="crd-td">46,7, -71,58</td><td class="crd-td">1667-1739</td><td class="crd-td">315</td><td class="crd-td">720</td><td class="crd-td">-</td><td class="crd-td">720 (1739)</td></tr>
<tr><td class="crd-td"><strong>Longueuil Parish</strong></td><td class="crd-td">New France</td><td class="crd-td">45,54, -73,51</td><td class="crd-td">1657-1739</td><td class="crd-td">220</td><td class="crd-td">700</td><td class="crd-td">-</td><td class="crd-td">700 (1739)</td></tr>
<tr><td class="crd-td"><strong>Riviere-Ouelle Parish</strong></td><td class="crd-td">New France</td><td class="crd-td">47,44, -70</td><td class="crd-td">1681-1739</td><td class="crd-td">130</td><td class="crd-td">700</td><td class="crd-td">-</td><td class="crd-td">700 (1739)</td></tr>
<tr><td class="crd-td"><strong>Saint-Laurent Parish IO</strong></td><td class="crd-td">New France</td><td class="crd-td">46,86, -71,01</td><td class="crd-td">1666-1739</td><td class="crd-td">280</td><td class="crd-td">700</td><td class="crd-td">-</td><td class="crd-td">700 (1739)</td></tr>
<tr><td class="crd-td"><strong>Ancienne-Lorette</strong></td><td class="crd-td">New France</td><td class="crd-td">46,79, -71,35</td><td class="crd-td">1674-1739</td><td class="crd-td">245</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">680 (1739)</td></tr>
<tr><td class="crd-td"><strong>Chambly Parish</strong></td><td class="crd-td">New France</td><td class="crd-td">45,45, -73,29</td><td class="crd-td">1665-1739</td><td class="crd-td">240</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">680 (1739)</td></tr>
<tr><td class="crd-td"><strong>Harbour Grace</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">47,69, -53,23</td><td class="crd-td">1675-1763</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680</td><td class="crd-td">680 (1763)</td></tr>
<tr><td class="crd-td"><strong>Varennes Parish</strong></td><td class="crd-td">New France</td><td class="crd-td">45,69, -73,44</td><td class="crd-td">1672-1739</td><td class="crd-td">220</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">680 (1739)</td></tr>
<tr><td class="crd-td"><strong>Estipah-skikikini-kots</strong></td><td class="crd-td">Western Prairies and French-Indigenous Saskatchewan Posts</td><td class="crd-td">49,71, -113,65</td><td class="crd-td">1500-1500</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">650 (1500)</td></tr>
<tr><td class="crd-td"><strong>L'Assomption Parish</strong></td><td class="crd-td">New France</td><td class="crd-td">45,83, -73,43</td><td class="crd-td">1724-1739</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">-</td><td class="crd-td">650 (1739)</td></tr>
<tr><td class="crd-td"><strong>Plaisance</strong></td><td class="crd-td">Newfoundland</td><td class="crd-td">47,25, -53,96</td><td class="crd-td">1662-1763</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">480</td><td class="crd-td">650 (1705)</td></tr>
<tr><td class="crd-td"><strong>Saint-Pierre Parish IO</strong></td><td class="crd-td">New France</td><td class="crd-td">46,92, -71,06</td><td class="crd-td">1679-1739</td><td class="crd-td">260</td><td class="crd-td">650</td><td class="crd-td">-</td><td class="crd-td">650 (1739)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Colonial Canada and Greenland to 1763AD ordered by peak catalogued population.</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:regsum-cc1763} summarises site counts and leading centres across all eight regional masks. All eight sub-regions now carry catalogued nuclei, led in site count by Greenland (705) and New France St. Lawrence (294) and in peak settlement size by Québec (9k), Montréal (6k), Louisbourg (5,2k) and Marpole (1,45k) [@statcan1876censuses; @boyd1999coming].

<figure class="crd-table-figure" id="tab:regsum-cc1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>New France: Governments of Quebec, Trois-Rivieres and Montreal</strong></td><td class="crd-td">294</td><td class="crd-td">Québec (9k)</td></tr>
<tr><td class="crd-td"><strong>Acadia, Nova Scotia, Ile Royale (Louisbourg) and Ile Saint-Jean</strong></td><td class="crd-td">76</td><td class="crd-td">Louisbourg (5,2k)</td></tr>
<tr><td class="crd-td"><strong>Newfoundland (Avalon and Plaisance), Labrador and Saint-Pierre</strong></td><td class="crd-td">65</td><td class="crd-td">St. John's (2,4k)</td></tr>
<tr><td class="crd-td"><strong>Pays d'en Haut and Great Lakes Fur-Trade Posts (Southern Ontario)</strong></td><td class="crd-td">17</td><td class="crd-td">Lake Nipissing Native Village (400)</td></tr>
<tr><td class="crd-td"><strong>Rupert's Land and Hudson's Bay Company Trading Factory Zones</strong></td><td class="crd-td">96</td><td class="crd-td">Wanuskewin (450)</td></tr>
<tr><td class="crd-td"><strong>Western Prairies and French-Indigenous Saskatchewan Posts</strong></td><td class="crd-td">15</td><td class="crd-td">Estipah-skikikini-kots (650)</td></tr>
<tr><td class="crd-td"><strong>Pacific Northwest Coast, Yukon and Mackenzie River Nations</strong></td><td class="crd-td">84</td><td class="crd-td">Marpole (1,4k)</td></tr>
<tr><td class="crd-td"><strong>Greenland (Danish-Moravian Missions 1721-1763 and Independent Kalaallit)</strong></td><td class="crd-td">705</td><td class="crd-td">Ilulissat (480)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading centres across all eight regional masks to 1763AD (1.352 total sites).</figcaption>
</figure>

## Excluded Candidates and Deduplication Ledger

Table \ref{tab:excluded-cc1763} presents a 25-row sample of the 132 deduplicated candidate entries from the regional source ledger (drawn from 108 Canadian, 23 Greenlandic and 1 Saint-Pierre-et-Miquelon exclusions), documenting canonical alias merging and close-proximity consolidation.

<figure class="crd-table-figure" id="tab:excluded-cc1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Category</th><th class="crd-th">Consolidation Detail</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Port-Royal Acadia</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Port-Royal' (Censuses of Canada 1665 to 1871; Arsenault (1978)).</td></tr>
<tr><td class="crd-td"><strong>Grand-Pré</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Grand-Pre Acadia' (Acadian Censuses 1671-1752; Sieur de La Roque (1752); Prins (1996); StatsCan Historical Statistics).</td></tr>
<tr><td class="crd-td"><strong>Beaubassin Acadia</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Beaubassin' (Censuses of Canada 1665 to 1871; Arsenault (1978)).</td></tr>
<tr><td class="crd-td"><strong>Quebec Capital</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Québec' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
<tr><td class="crd-td"><strong>Montreal City</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Montréal' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
<tr><td class="crd-td"><strong>Beauport Parish</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Beauport' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
<tr><td class="crd-td"><strong>Trois-Rivières</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Trois-Rivieres Town' (Census of New France 1666/1681/1739; Charbonneau PRDH; Census of the Canadas 1851/1861).</td></tr>
<tr><td class="crd-td"><strong>Placentia Harbour</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Plaisance' (Head (1976); Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Placentia</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Plaisance' (Census of Newfoundland 1836/1857; Newfoundland Governor Returns 1675-1763; Head (1976)).</td></tr>
<tr><td class="crd-td"><strong>St. John's Harbour</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'St. John's' (Head (1976); Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Lévis</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Lauzon Parish' (Census of New France 1666/1681/1739; Charbonneau PRDH; Census of the Canadas 1851/1861).</td></tr>
<tr><td class="crd-td"><strong>Truro</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Cobequid Acadia' (Acadian Censuses 1671-1752; Sieur de La Roque (1752); Prins (1996); StatsCan Historical Statistics).</td></tr>
<tr><td class="crd-td"><strong>Sainte-Famille Parish</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Île d'Orléans' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
<tr><td class="crd-td"><strong>Chateau-Richer Parish</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Château-Richer' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
<tr><td class="crd-td"><strong>Boucherville Parish</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Boucherville' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
<tr><td class="crd-td"><strong>La Prairie</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'La Prairie Parish' (Census of New France 1666/1681/1739; Charbonneau PRDH; Census of the Canadas 1851/1861).</td></tr>
<tr><td class="crd-td"><strong>Sainte-Anne-de-Beaupre Parish</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Sainte-Anne-de-Beaupré' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
<tr><td class="crd-td"><strong>Sorel Parish</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Sorel' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
<tr><td class="crd-td"><strong>Varennes</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Varennes Parish' (Census of New France 1666/1681/1739; Charbonneau PRDH; Census of the Canadas 1851/1861).</td></tr>
<tr><td class="crd-td"><strong>Chambly</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Chambly Parish' (Census of New France 1666/1681/1739; Charbonneau PRDH; Census of the Canadas 1851/1861).</td></tr>
<tr><td class="crd-td"><strong>Sainte-Famille-de-l'Île-d'Orléans</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Île d'Orléans' (Census of New France 1666/1681/1739; Charbonneau PRDH; Census of the Canadas 1851/1861).</td></tr>
<tr><td class="crd-td"><strong>Cap-de-la-Madeleine Parish</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Cap-de-la-Madeleine' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
<tr><td class="crd-td"><strong>Lachine</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Lachine Parish' (Census of New France 1666/1681/1739; Charbonneau PRDH; Census of the Canadas 1851/1861).</td></tr>
<tr><td class="crd-td"><strong>Saint-Jean-de-l'Île-d'Orléans</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Saint-Jean Parish IO' (Census of New France 1666/1681/1739; Charbonneau PRDH; Census of the Canadas 1851/1861).</td></tr>
<tr><td class="crd-td"><strong>Verchères</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Vercheres Parish' (Census of New France 1666/1681/1739; Charbonneau PRDH; Census of the Canadas 1851/1861).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sample of 25 deduplicated entries from the 132 excluded candidates in the 1500 to 1763AD source ledger.</figcaption>
</figure>

# Limitations

Three constraints govern the 1500 to 1763AD gazetteer. First, sixteenth-century Iroquoian sites such as Stadacona (Québec) and Hochelaga (Montréal) carry contact-era village approximations (1k and 1,5k at 1535AD) rather than formal censuses [@tremblay2006st]. Second, St. Lawrence rural parishes (Beaupré, Île d'Orléans, La Prairie, Boucherville) represent seigneurial parish aggregates rather than compact urban street grids [@statcan1876censuses]. Third, Saint-Pierre and Miquelon fall inside the Newfoundland, Labrador and Saint-Pierre mask prior to 1763AD before receiving a dedicated island mask in the post-1763AD British North American chapter.

# Sources

<div id="refs"></div>
