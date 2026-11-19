---
title: "Settlement Gazetteer of Colonial Canada to 1867AD"
subtitle: "CENTAUR-II: British North American Cities, Loyalists Towns, Fur Posts and Greenland Settlements, 1763 to 1867AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_canada_to_1867_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_canada_to_1867_spatial.png"
hero_caption: "Spatial distribution of 129 verified urban centres, timber ports, fur-trade posts and Greenlandic stations across twelve territories, 1763 to 1867AD."
hero_label: "fig:hero-colonial-canada-to-1867"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 129 verified settlement trajectories across British North America, Saint-Pierre-et-Miquelon and Greenland between 1763AD and 1867AD under Operation Viscount CENTAUR-II. Built from *Censuses of Canada 1665 to 1871* Vol. IV, colonial municipal returns, Hudson's Bay Company post journals and Danish Greenlandic registries [@statcan1876censuses; @newfoundland1857abstract; @ray1974indians; @marquardt2002change], the catalogue spans all twelve sub-regions, led by Lower Canada (27 sites), Upper Canada (26), Nova Scotia (15), Newfoundland-Labrador (13), Greenland (12), British Columbia-Vancouver Island (10) and Rupert's Land Prairies (9). Urban primacy shifted progressively along the St. Lawrence-Great Lakes axis: Montréal rose from 5,8k in 1765AD to 90,3k in 1861AD (140,8k by 1881AD), followed by Québec (51,1k in 1861AD), Toronto (44,8k in 1861AD; 86,4k in 1881AD), Halifax (25k in 1861AD; 36,1k in 1881AD) and Saint John (30,5k in 1850AD) [@statcan1876censuses]. One generic exclusion (`Unnamed seasonal camps`) is logged in `colonial_canada_to_1867_source_ledger.json5`.

# Background

Urban growth between 1763AD and Confederation transformed Canada's settlement hierarchy. In 1784AD, Loyalist arrivals briefly inflated maritime boomtowns such as Shelburne, Nova Scotia (10k in 1784AD before rapid contraction) and founded Saint John, New Brunswick and Kingston, Ontario [@statcan1876censuses]. After 1815AD, canalisation of the St. Lawrence and Rideau corridors, timber exports and railway construction propelled Montréal, Toronto, Hamilton, Ottawa and London into major industrial and commercial cities, whilst Victoria, New Westminster and the gold-rush town of Barkerville (10k in 1863AD) anchored Pacific colonisation [@barman2007west].

# Methodology

Settlement trajectories filter `CENTAUR` urban records to the 1763-1867AD interval, retaining immediate 1739-1759AD and 1871-1881AD boundary observations for continuity across module seams. All entries carry `sources: ["CENTAUR"]` and snap onto the twelve 5-arcminute masks within 14 pixels. Danish colonial names in Greenland were harmonised to Kalaallisut canonical names (`Nuuk`, `Ilulissat`, `Qaqortoq`, `Sisimiut`, `Aasiaat`, `Maniitsoq`, `Paamiut`, `Qeqertarsuaq`, `Qasigiannguit`) [@marquardt2002change].

# Testing and Validation

Ledger reconciliation confirms `129` included settlements and `1` excluded seasonal entry (`130` total candidates, `0` unaccounted). All 129 records contain valid WGS84 coordinates across all twelve regional masks. Figure \ref{fig:sett-cc1867} shows the rank-size hierarchy and top eight settlements.

<figure class="crd-figure-block" id="fig:sett-cc1867">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1867-settlements/fig4_colonial_canada_to_1867_settlements.png" alt="fig:sett-cc1867" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks across the 129 catalogued centres of Colonial Canada and Greenland to 1867AD.</figcaption>
</figure>

# Results

## Top Fifty Settlements by Peak Population

Table \ref{tab:top50-cc1867} lists the 50 largest settlements ranked by peak observed population within the 1763-1867AD boundary window (including 1871-1881AD Dominion census boundary points retained for spline continuity).

<figure class="crd-table-figure" id="tab:top50-cc1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1790AD</th><th class="crd-th">1831AD</th><th class="crd-th">1861AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Montréal</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">45,51, -73,59</td><td class="crd-td">1739-1881</td><td class="crd-td">9k</td><td class="crd-td">44k</td><td class="crd-td">90,3k</td><td class="crd-td">140,8k (1881)</td></tr>
<tr><td class="crd-td"><strong>Toronto</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">43,65, -79,38</td><td class="crd-td">1750-1881</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">44,8k</td><td class="crd-td">86,4k (1881)</td></tr>
<tr><td class="crd-td"><strong>Québec</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">46,81, -71,21</td><td class="crd-td">1739-1881</td><td class="crd-td">7k</td><td class="crd-td">36k</td><td class="crd-td">51,1k</td><td class="crd-td">62,4k (1881)</td></tr>
<tr><td class="crd-td"><strong>Halifax</strong></td><td class="crd-td">Colony of Nova Scotia and Cape Breton</td><td class="crd-td">44,64, -63,58</td><td class="crd-td">1749-1881</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25k</td><td class="crd-td">36,1k (1881)</td></tr>
<tr><td class="crd-td"><strong>Hamilton</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">43,25, -79,85</td><td class="crd-td">1816-1881</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,1k</td><td class="crd-td">36k (1881)</td></tr>
<tr><td class="crd-td"><strong>Saint John</strong></td><td class="crd-td">Colony of New Brunswick</td><td class="crd-td">45,27, -66,06</td><td class="crd-td">1762-1881</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,3k</td><td class="crd-td">29k (1871)</td></tr>
<tr><td class="crd-td"><strong>Ottawa</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">45,41, -75,7</td><td class="crd-td">1826-1881</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">14,7k</td><td class="crd-td">27,4k (1881)</td></tr>
<tr><td class="crd-td"><strong>St. John's</strong></td><td class="crd-td">Colony of Newfoundland and Labrador</td><td class="crd-td">47,56, -52,71</td><td class="crd-td">1763-1869</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,9k (1857)</td></tr>
<tr><td class="crd-td"><strong>London</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">42,98, -81,23</td><td class="crd-td">1826-1881</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,6k</td><td class="crd-td">19,7k (1881)</td></tr>
<tr><td class="crd-td"><strong>Kingston</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">44,23, -76,48</td><td class="crd-td">1739-1881</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">13,7k</td><td class="crd-td">14,1k (1881)</td></tr>
<tr><td class="crd-td"><strong>Shelburne</strong></td><td class="crd-td">Colony of Nova Scotia and Cape Breton</td><td class="crd-td">43,76, -65,32</td><td class="crd-td">1783-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k (1784)</td></tr>
<tr><td class="crd-td"><strong>Barkerville</strong></td><td class="crd-td">Colonies of Vancouver Island and British Columbia</td><td class="crd-td">53,07, -121,52</td><td class="crd-td">1862-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k (1863)</td></tr>
<tr><td class="crd-td"><strong>Charlottetown</strong></td><td class="crd-td">Colony of Prince Edward Island</td><td class="crd-td">46,23, -63,13</td><td class="crd-td">1752-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">8,8k (1871)</td></tr>
<tr><td class="crd-td"><strong>Brantford</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">43,13, -80,27</td><td class="crd-td">1784-1871</td><td class="crd-td">-</td><td class="crd-td">600</td><td class="crd-td">6,3k</td><td class="crd-td">8,1k (1871)</td></tr>
<tr><td class="crd-td"><strong>Winnipeg</strong></td><td class="crd-td">District of Assiniboia / Red River Settlement</td><td class="crd-td">49,88, -97,15</td><td class="crd-td">1812-1881</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">8k (1881)</td></tr>
<tr><td class="crd-td"><strong>St. Catharines</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">43,17, -79,24</td><td class="crd-td">1790-1871</td><td class="crd-td">90</td><td class="crd-td">1,1k</td><td class="crd-td">6,3k</td><td class="crd-td">7,9k (1871)</td></tr>
<tr><td class="crd-td"><strong>Trois-Rivières</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">46,35, -72,55</td><td class="crd-td">1739-1871</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">7,6k (1871)</td></tr>
<tr><td class="crd-td"><strong>Yale</strong></td><td class="crd-td">Colonies of Vancouver Island and British Columbia</td><td class="crd-td">49,56, -121,43</td><td class="crd-td">1848-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">7,5k (1858)</td></tr>
<tr><td class="crd-td"><strong>Belleville</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">44,17, -77,38</td><td class="crd-td">1790-1871</td><td class="crd-td">80</td><td class="crd-td">1k</td><td class="crd-td">6,3k</td><td class="crd-td">7,3k (1871)</td></tr>
<tr><td class="crd-td"><strong>Windsor</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">42,3, -83,02</td><td class="crd-td">1748-1881</td><td class="crd-td">550</td><td class="crd-td">950</td><td class="crd-td">2,5k</td><td class="crd-td">7k (1881)</td></tr>
<tr><td class="crd-td"><strong>Guelph</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">43,55, -80,26</td><td class="crd-td">1827-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">6,9k (1871)</td></tr>
<tr><td class="crd-td"><strong>Harbour Grace</strong></td><td class="crd-td">Colony of Newfoundland and Labrador</td><td class="crd-td">47,69, -53,23</td><td class="crd-td">1790-1869</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1869)</td></tr>
<tr><td class="crd-td"><strong>Lévis</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">46,8, -71,18</td><td class="crd-td">1739-1871</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">6,7k (1871)</td></tr>
<tr><td class="crd-td"><strong>Fredericton</strong></td><td class="crd-td">Colony of New Brunswick</td><td class="crd-td">45,95, -66,67</td><td class="crd-td">1739-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">6k (1871)</td></tr>
<tr><td class="crd-td"><strong>Victoria</strong></td><td class="crd-td">Colonies of Vancouver Island and British Columbia</td><td class="crd-td">48,44, -123,35</td><td class="crd-td">1843-1881</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">5,9k (1881)</td></tr>
<tr><td class="crd-td"><strong>Sherbrooke</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">45,4, -71,9</td><td class="crd-td">1802-1871</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">5,9k</td><td class="crd-td">5,9k (1861)</td></tr>
<tr><td class="crd-td"><strong>Sorel</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">46,04, -73,11</td><td class="crd-td">1739-1871</td><td class="crd-td">950</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,6k (1871)</td></tr>
<tr><td class="crd-td"><strong>Brockville</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">44,59, -75,69</td><td class="crd-td">1785-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">5,1k (1871)</td></tr>
<tr><td class="crd-td"><strong>Carbonear</strong></td><td class="crd-td">Colony of Newfoundland and Labrador</td><td class="crd-td">47,74, -53,23</td><td class="crd-td">1790-1869</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1869)</td></tr>
<tr><td class="crd-td"><strong>Louisbourg</strong></td><td class="crd-td">Colony of Nova Scotia and Cape Breton</td><td class="crd-td">45,92, -59,97</td><td class="crd-td">1739-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1758)</td></tr>
<tr><td class="crd-td"><strong>Cobourg</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">43,96, -78,17</td><td class="crd-td">1798-1871</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">5k</td><td class="crd-td">5k (1861)</td></tr>
<tr><td class="crd-td"><strong>Île d'Orléans</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">46,97, -70,97</td><td class="crd-td">1739-1871</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1871)</td></tr>
<tr><td class="crd-td"><strong>Yarmouth</strong></td><td class="crd-td">Colony of Nova Scotia and Cape Breton</td><td class="crd-td">43,83, -66,12</td><td class="crd-td">1761-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1871)</td></tr>
<tr><td class="crd-td"><strong>Peterborough</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">44,3, -78,32</td><td class="crd-td">1825-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,6k (1871)</td></tr>
<tr><td class="crd-td"><strong>Miramichi</strong></td><td class="crd-td">Colony of New Brunswick</td><td class="crd-td">47,03, -65,5</td><td class="crd-td">1765-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1871)</td></tr>
<tr><td class="crd-td"><strong>Goderich</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">43,74, -81,71</td><td class="crd-td">1827-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4k (1871)</td></tr>
<tr><td class="crd-td"><strong>Saint-Pierre</strong></td><td class="crd-td">French Colony of Saint-Pierre and Miquelon</td><td class="crd-td">46,78, -56,18</td><td class="crd-td">1763-1870</td><td class="crd-td">-</td><td class="crd-td">800</td><td class="crd-td">-</td><td class="crd-td">3,9k (1870)</td></tr>
<tr><td class="crd-td"><strong>Hull</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">45,43, -75,71</td><td class="crd-td">1800-1871</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">3,7k</td><td class="crd-td">3,8k (1871)</td></tr>
<tr><td class="crd-td"><strong>Saint-Hyacinthe</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">45,63, -72,96</td><td class="crd-td">1757-1871</td><td class="crd-td">600</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k (1871)</td></tr>
<tr><td class="crd-td"><strong>Barrie</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">44,4, -79,67</td><td class="crd-td">1832-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k (1871)</td></tr>
<tr><td class="crd-td"><strong>Niagara-on-the-Lake</strong></td><td class="crd-td">Upper Canada / Canada West</td><td class="crd-td">43,26, -79,09</td><td class="crd-td">1781-1871</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1851)</td></tr>
<tr><td class="crd-td"><strong>Saint-Jean-sur-Richelieu</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">45,31, -73,26</td><td class="crd-td">1748-1871</td><td class="crd-td">450</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,3k (1861)</td></tr>
<tr><td class="crd-td"><strong>Baie-Saint-Paul</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">47,44, -70,5</td><td class="crd-td">1739-1871</td><td class="crd-td">950</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1871)</td></tr>
<tr><td class="crd-td"><strong>Joliette</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">46,02, -73,42</td><td class="crd-td">1823-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3k (1871)</td></tr>
<tr><td class="crd-td"><strong>Bonavista</strong></td><td class="crd-td">Colony of Newfoundland and Labrador</td><td class="crd-td">48,65, -53,11</td><td class="crd-td">1790-1869</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1869)</td></tr>
<tr><td class="crd-td"><strong>Sydney</strong></td><td class="crd-td">Colony of Nova Scotia and Cape Breton</td><td class="crd-td">46,14, -60,18</td><td class="crd-td">1785-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1871)</td></tr>
<tr><td class="crd-td"><strong>Pictou</strong></td><td class="crd-td">Colony of Nova Scotia and Cape Breton</td><td class="crd-td">45,68, -62,71</td><td class="crd-td">1767-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1851)</td></tr>
<tr><td class="crd-td"><strong>Lunenburg</strong></td><td class="crd-td">Colony of Nova Scotia and Cape Breton</td><td class="crd-td">44,38, -64,32</td><td class="crd-td">1753-1871</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1851)</td></tr>
<tr><td class="crd-td"><strong>Twillingate</strong></td><td class="crd-td">Colony of Newfoundland and Labrador</td><td class="crd-td">49,65, -54,76</td><td class="crd-td">1790-1869</td><td class="crd-td">420</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1869)</td></tr>
<tr><td class="crd-td"><strong>Nicolet</strong></td><td class="crd-td">Lower Canada / Canada East</td><td class="crd-td">46,23, -72,61</td><td class="crd-td">1739-1871</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1871)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 50 settlements in Colonial Canada and Greenland to 1867AD ordered by peak catalogued population.</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage

Table \ref{tab:regsum-cc1867} reports settlement counts and leading centres across all twelve regional masks, confirming complete spatial coverage from St. John's and Saint-Pierre in the east to Barkerville and Victoria on the Pacific coast.

<figure class="crd-table-figure" id="tab:regsum-cc1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Canada / Canada East (Province of Quebec)</strong></td><td class="crd-td">27</td><td class="crd-td">Montréal (140,8k)</td></tr>
<tr><td class="crd-td"><strong>Upper Canada / Canada West (Province of Ontario)</strong></td><td class="crd-td">26</td><td class="crd-td">Toronto (86,4k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Nova Scotia and Cape Breton</strong></td><td class="crd-td">15</td><td class="crd-td">Halifax (36,1k)</td></tr>
<tr><td class="crd-td"><strong>Colony of New Brunswick</strong></td><td class="crd-td">5</td><td class="crd-td">Saint John (29k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Prince Edward Island</strong></td><td class="crd-td">2</td><td class="crd-td">Charlottetown (8,8k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Newfoundland and Labrador</strong></td><td class="crd-td">13</td><td class="crd-td">St. John's (24,9k)</td></tr>
<tr><td class="crd-td"><strong>French Colony of Saint-Pierre and Miquelon</strong></td><td class="crd-td">3</td><td class="crd-td">Saint-Pierre (3,9k)</td></tr>
<tr><td class="crd-td"><strong>District of Assiniboia / Red River Settlement</strong></td><td class="crd-td">4</td><td class="crd-td">Winnipeg (8k)</td></tr>
<tr><td class="crd-td"><strong>Rupert's Land Prairies and Hudson's Bay Interior</strong></td><td class="crd-td">9</td><td class="crd-td">Regina (800)</td></tr>
<tr><td class="crd-td"><strong>Colonies of Vancouver Island and British Columbia</strong></td><td class="crd-td">10</td><td class="crd-td">Barkerville (10k)</td></tr>
<tr><td class="crd-td"><strong>North-Western Territory and High Arctic</strong></td><td class="crd-td">3</td><td class="crd-td">Fort Resolution (180)</td></tr>
<tr><td class="crd-td"><strong>Danish Inspectorates of North and South Greenland and East Greenland</strong></td><td class="crd-td">12</td><td class="crd-td">Nuuk (420)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading urban or post centres across all twelve masks to 1867AD (129 total sites).</figcaption>
</figure>

# Limitations

Three caveats apply to the 1763-1867AD gazetteer. First, retaining immediate post-Confederation 1871-1881AD boundary observations causes peak columns in Table \ref{tab:top50-cc1867} to reflect 1881AD peaks for rapidly industrialising cities such as Montréal (140,8k) and Toronto (86,4k) rather than their 1861AD totals [@statcan1876censuses]. Second, ephemeral placer-mining camps like Barkerville (10k in 1863AD) experienced rapid boom-bust collapse not mirrored in permanent agricultural towns [@barman2007west]. Third, subarctic trading forts in the North-Western Territory and Rupert's Land reflect permanent post complements rather than surrounding seasonal Indigenous gatherings [@ray1974indians].

# Sources

<div id="refs"></div>
