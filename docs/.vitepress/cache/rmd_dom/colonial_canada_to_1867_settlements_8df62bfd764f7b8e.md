---
title: "Settlement Gazetteer of Colonial Canada to 1867AD"
subtitle: "CENTAUR-II: British North American Cities, Loyalist Towns, Fur Posts and Greenland Settlements, 1763 to 1867AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_canada_to_1867_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_canada_to_1867_spatial.png"
hero_caption: "Spatial distribution of 1.064 urban centres, timber ports, fur-trade posts and Greenlandic stations across twelve territories, 1763 to 1867AD."
hero_label: "fig:hero-colonial-canada-to-1867"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 1.064 settlement trajectories (4.228 settlement-year observations) across Canada (1.001), Greenland (60) and Saint-Pierre-et-Miquelon (3) between 1763AD and 1867AD under CENTAUR-II. Built from *Censuses of Canada 1665 to 1871* Vol. IV, colonial municipal returns, Hudson's Bay Company post journals, Pacific coast histories and Danish Greenlandic registries [@statcan1876censuses; @newfoundland1857abstract; @ray1974indians; @barman2007west; @marquardt2002change], the catalogue spans all twelve sub-regions: Lower Canada (379 sites), Upper Canada (325), Newfoundland and Labrador (75), Greenland (60), Nova Scotia (59), British Columbia and Vancouver Island (41), New Brunswick (36), Rupert's Land Prairies (34), North-Western Territory and High Arctic (27), Prince Edward Island (16), District of Assiniboia (9) and Saint-Pierre-et-Miquelon (3). Urban primacy shifted decisively along the St. Lawrence-Great Lakes axis: Montréal expanded from 5,8k in 1765AD to 90,3k in 1861AD, followed by Québec (5,6k to 51,1k in 1861AD), Toronto (120 in 1793AD to 44,8k in 1861AD), St. John's (1,95k in 1763AD to 27,5k in 1867AD), Saint John (27,32k in 1861AD), Halifax (25k in 1861AD), Hamilton (19,1k), Ottawa (14,7k), Kingston (13,74k), London (11,56k) and Barkerville (10k in 1863AD) [@statcan1876censuses; @barman2007west]. Alongside the 1.064 included settlements, the source ledger logs 23 deduplicated exclusions (`1.087` total candidates, `0` unaccounted).

# Background

Urban expansion between 1763AD and Confederation transformed Canada's settlement hierarchy. In 1783-1784AD, United Empire Loyalist arrivals inflated maritime boomtowns such as Shelburne, Nova Scotia (9,8k in 1784AD before rapid contraction to 950 in 1817AD) and seeded Saint John (4,5k in 1784AD), Fredericton and Kingston [@statcan1876censuses]. After 1815AD, canalisation of the Welland, Rideau and St. Lawrence corridors, timber exports and railway construction propelled Montréal, Toronto, Hamilton, Ottawa and London into major commercial cities, while Victoria (4,8k in 1867AD), Yale (2,8k in 1858AD) and the Cariboo gold-rush camp of Barkerville (10k in 1863AD) anchored British Pacific settlement amid severe Indigenous demographic loss [@barman2007west; @boyd1999coming]. Across the interior plains, Arctic and Atlantic islands, Winnipeg (3,2k in 1867AD) and St. Boniface (2,1k) anchored Assiniboia, Saint-Pierre reached 3,25k in 1867AD [@ribault1962iles], and Greenlandic stations led by Qaqortoq (1,15k in 1860AD), Ilulissat (840) and Nuuk (760) consolidated under Royal Greenland Trade governance [@marquardt2002change].

# Methodology

Settlement trajectories filter `CENTAUR` urban records strictly to the 1763AD to 1867AD interval (4.228 observations). All 1.064 entries carry `CENTAUR` provenance and snap onto the twelve 5-arcminute regional masks within a 14-pixel coastal search radius. Danish colonial names in Greenland were harmonised to Kalaallisut headwords (`Nuuk`, `Ilulissat`, `Qaqortoq`, `Sisimiut`, `Aasiaat`, `Maniitsoq`, `Paamiut`, `Qeqertarsuaq`, `Qasigiannguit`) with Danish historical names preserved as alternative names [@marquardt2002change].

Deduplication across the 1.087 candidates removes 23 duplicate records (14 in Canada and 9 in Greenland): 13 close-proximity matching-name twin merges (such as `Arsuk`, `Chesterfield Inlet`, `Fort Resolution`, `Port Stanley`, `Saint John`, `Souris` and `Yuquot`), 6 identical-series duplicate merges (`Fort à la Corne`, `Illorsuit`, `Kangaamiut`, `Kangaatsiaq`, `Saattut` and `Saint-Aimé`) and 4 coordinate or historical alias consolidations (`Saint-Gervais` into `Saint-Vallier-de-Bellechasse`, `Pierreville` into `Odanak`, `Kanesatake` into `Oka-Deux-Montagnes` and `Niaqornat` into `Illorsuit`).

# Testing and Validation

Ledger reconciliation confirms `1.064` included settlements and `23` excluded duplicate entries (`1.087` total candidates, `0` unaccounted). All 1.064 records contain valid WGS84 coordinates across all twelve regional masks and 4.228 settlement-year headcounts. Figure \ref{fig:sett-cc1867} plots the 1.064-settlement rank-size distribution alongside the twelve largest peaks.

<figure class="crd-figure-block" id="fig:sett-cc1867">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1867-settlements/fig4_colonial_canada_to_1867_settlements.png" alt="fig:sett-cc1867" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 1.064 catalogued centres and leading urban peaks of Colonial Canada and Greenland to 1867AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-cc1867} lists the Top 45 settlements ranked descending by peak observed population within the 1763AD to 1867AD window, reporting regional mask, WGS84 coordinates, active span and benchmark figures at 1790AD, 1851AD and 1861AD.

<figure class="crd-table-figure" id="tab:top45-cc1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1790AD</th><th class="crd-th">1851AD</th><th class="crd-th">1861AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Montréal</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,51, -73,59</td><td class="crd-td">1765-1861</td><td class="crd-td">9k</td><td class="crd-td">58k</td><td class="crd-td">90,3k</td><td class="crd-td">90,3k (1861)</td></tr>
<tr><td class="crd-td"><strong>Québec</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">46,81, -71,21</td><td class="crd-td">1765-1861</td><td class="crd-td">7k</td><td class="crd-td">42k</td><td class="crd-td">51,1k</td><td class="crd-td">51,1k (1861)</td></tr>
<tr><td class="crd-td"><strong>Toronto</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,71, -79,38</td><td class="crd-td">1793-1861</td><td class="crd-td">-</td><td class="crd-td">31k</td><td class="crd-td">44,8k</td><td class="crd-td">44,8k (1861)</td></tr>
<tr><td class="crd-td"><strong>St. John's</strong></td><td class="crd-td">Colony of Newfoundland and Labrador</td><td class="crd-td">47,56, -52,71</td><td class="crd-td">1763-1867</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,5k (1867)</td></tr>
<tr><td class="crd-td"><strong>Saint John</strong></td><td class="crd-td">Colony of New Brunswick</td><td class="crd-td">45,27, -66,09</td><td class="crd-td">1784-1861</td><td class="crd-td">-</td><td class="crd-td">22,7k</td><td class="crd-td">27,3k</td><td class="crd-td">27,3k (1861)</td></tr>
<tr><td class="crd-td"><strong>Halifax</strong></td><td class="crd-td">Colony of Nova Scotia and Cape Breton</td><td class="crd-td">44,64, -63,58</td><td class="crd-td">1763-1861</td><td class="crd-td">4,5k</td><td class="crd-td">20,7k</td><td class="crd-td">25k</td><td class="crd-td">25k (1861)</td></tr>
<tr><td class="crd-td"><strong>Hamilton</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,25, -79,85</td><td class="crd-td">1816-1861</td><td class="crd-td">-</td><td class="crd-td">14k</td><td class="crd-td">19,1k</td><td class="crd-td">19,1k (1861)</td></tr>
<tr><td class="crd-td"><strong>Ottawa</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">45,41, -75,7</td><td class="crd-td">1826-1861</td><td class="crd-td">-</td><td class="crd-td">8k</td><td class="crd-td">14,7k</td><td class="crd-td">14,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>Kingston</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">44,23, -76,48</td><td class="crd-td">1784-1861</td><td class="crd-td">-</td><td class="crd-td">11,7k</td><td class="crd-td">13,7k</td><td class="crd-td">13,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>London</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">42,98, -81,23</td><td class="crd-td">1826-1861</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">11,6k</td><td class="crd-td">11,6k (1861)</td></tr>
<tr><td class="crd-td"><strong>Barkerville</strong></td><td class="crd-td">Colonies of Vancouver Island and British Columbia</td><td class="crd-td">53,07, -121,52</td><td class="crd-td">1862-1867</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k (1863)</td></tr>
<tr><td class="crd-td"><strong>Shelburne</strong></td><td class="crd-td">Colony of Nova Scotia and Cape Breton</td><td class="crd-td">43,76, -65,32</td><td class="crd-td">1783-1861</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">9,8k (1784)</td></tr>
<tr><td class="crd-td"><strong>Charlottetown</strong></td><td class="crd-td">Colony of Prince Edward Island</td><td class="crd-td">46,29, -63,12</td><td class="crd-td">1768-1861</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">6,7k</td><td class="crd-td">6,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>St. Catharines</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,17, -79,24</td><td class="crd-td">1790-1861</td><td class="crd-td">140</td><td class="crd-td">4,4k</td><td class="crd-td">6,3k</td><td class="crd-td">6,3k (1861)</td></tr>
<tr><td class="crd-td"><strong>Belleville</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">44,17, -77,38</td><td class="crd-td">1789-1861</td><td class="crd-td">80</td><td class="crd-td">4,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,3k (1861)</td></tr>
<tr><td class="crd-td"><strong>Brantford</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,13, -80,27</td><td class="crd-td">1784-1861</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">6,3k</td><td class="crd-td">6,3k (1861)</td></tr>
<tr><td class="crd-td"><strong>Trois-Rivières</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">46,35, -72,55</td><td class="crd-td">1765-1861</td><td class="crd-td">1k</td><td class="crd-td">4,9k</td><td class="crd-td">6,1k</td><td class="crd-td">6,1k (1861)</td></tr>
<tr><td class="crd-td"><strong>Sherbrooke</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,4, -71,9</td><td class="crd-td">1802-1861</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">5,9k</td><td class="crd-td">5,9k (1861)</td></tr>
<tr><td class="crd-td"><strong>Laval</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,57, -73,69</td><td class="crd-td">1765-1861</td><td class="crd-td">2,1k</td><td class="crd-td">5k</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>Fredericton</strong></td><td class="crd-td">Colony of New Brunswick</td><td class="crd-td">45,95, -66,67</td><td class="crd-td">1784-1861</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>Yarmouth</strong></td><td class="crd-td">Colony of Nova Scotia and Cape Breton</td><td class="crd-td">43,83, -66,12</td><td class="crd-td">1767-1861</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">5,6k</td><td class="crd-td">5,6k (1861)</td></tr>
<tr><td class="crd-td"><strong>Lévis</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">46,8, -71,18</td><td class="crd-td">1765-1861</td><td class="crd-td">1,7k</td><td class="crd-td">4,4k</td><td class="crd-td">5,3k</td><td class="crd-td">5,3k (1861)</td></tr>
<tr><td class="crd-td"><strong>Harbour Grace</strong></td><td class="crd-td">Colony of Newfoundland and Labrador</td><td class="crd-td">47,69, -53,23</td><td class="crd-td">1763-1857</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1857)</td></tr>
<tr><td class="crd-td"><strong>Guelph</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,55, -80,26</td><td class="crd-td">1827-1861</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k (1861)</td></tr>
<tr><td class="crd-td"><strong>Cobourg</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">44,04, -78,12</td><td class="crd-td">1798-1861</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">5k</td><td class="crd-td">5k (1861)</td></tr>
<tr><td class="crd-td"><strong>Carbonear</strong></td><td class="crd-td">Colony of Newfoundland and Labrador</td><td class="crd-td">47,74, -53,23</td><td class="crd-td">1763-1857</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1857)</td></tr>
<tr><td class="crd-td"><strong>Victoria</strong></td><td class="crd-td">Colonies of Vancouver Island and British Columbia</td><td class="crd-td">48,44, -123,35</td><td class="crd-td">1843-1867</td><td class="crd-td">-</td><td class="crd-td">320</td><td class="crd-td">4,2k</td><td class="crd-td">4,8k (1867)</td></tr>
<tr><td class="crd-td"><strong>Sorel</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">46,04, -73,11</td><td class="crd-td">1765-1861</td><td class="crd-td">1k</td><td class="crd-td">3,4k</td><td class="crd-td">4,8k</td><td class="crd-td">4,8k (1861)</td></tr>
<tr><td class="crd-td"><strong>Saint-Césaire</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,41, -73</td><td class="crd-td">1765-1861</td><td class="crd-td">340</td><td class="crd-td">3,2k</td><td class="crd-td">4,7k</td><td class="crd-td">4,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>Saint-Jean-sur-Richelieu</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,31, -73,26</td><td class="crd-td">1765-1861</td><td class="crd-td">680</td><td class="crd-td">3,2k</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k (1861)</td></tr>
<tr><td class="crd-td"><strong>Saint-Polycarpe</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,3, -74,3</td><td class="crd-td">1765-1861</td><td class="crd-td">360</td><td class="crd-td">3,1k</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k (1861)</td></tr>
<tr><td class="crd-td"><strong>Chatham</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">42,41, -82,18</td><td class="crd-td">1795-1861</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">4,5k</td><td class="crd-td">4,5k (1861)</td></tr>
<tr><td class="crd-td"><strong>Port Hope</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">44,02, -78,4</td><td class="crd-td">1793-1861</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1861)</td></tr>
<tr><td class="crd-td"><strong>Brockville</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">44,59, -75,69</td><td class="crd-td">1785-1861</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1861)</td></tr>
<tr><td class="crd-td"><strong>Saint-Martin-de-Laval</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,55, -73,75</td><td class="crd-td">1765-1861</td><td class="crd-td">780</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1861)</td></tr>
<tr><td class="crd-td"><strong>Peterborough</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">44,3, -78,32</td><td class="crd-td">1825-1861</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">4k</td><td class="crd-td">4k (1861)</td></tr>
<tr><td class="crd-td"><strong>Montmagny</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">46,98, -70,55</td><td class="crd-td">1765-1861</td><td class="crd-td">1,4k</td><td class="crd-td">3,5k</td><td class="crd-td">4k</td><td class="crd-td">4k (1861)</td></tr>
<tr><td class="crd-td"><strong>Saint-David</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,96, -72,86</td><td class="crd-td">1765-1861</td><td class="crd-td">340</td><td class="crd-td">2,5k</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1861)</td></tr>
<tr><td class="crd-td"><strong>Miramichi</strong></td><td class="crd-td">Colony of New Brunswick</td><td class="crd-td">47,03, -65,5</td><td class="crd-td">1765-1861</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1861)</td></tr>
<tr><td class="crd-td"><strong>Rigaud</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,48, -74,3</td><td class="crd-td">1765-1861</td><td class="crd-td">480</td><td class="crd-td">2,8k</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1861)</td></tr>
<tr><td class="crd-td"><strong>Longueuil</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,52, -73,47</td><td class="crd-td">1765-1861</td><td class="crd-td">1,2k</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1861)</td></tr>
<tr><td class="crd-td"><strong>Vaudreuil</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,4, -74,03</td><td class="crd-td">1765-1861</td><td class="crd-td">980</td><td class="crd-td">3,1k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1861)</td></tr>
<tr><td class="crd-td"><strong>La Prairie</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,42, -73,5</td><td class="crd-td">1765-1861</td><td class="crd-td">1,5k</td><td class="crd-td">3,6k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1861)</td></tr>
<tr><td class="crd-td"><strong>Gatineau</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,48, -75,7</td><td class="crd-td">1800-1861</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>L'Assomption</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,82, -73,43</td><td class="crd-td">1765-1861</td><td class="crd-td">1,7k</td><td class="crd-td">3,5k</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k (1861)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Colonial Canada and Greenland to 1867AD ordered by peak catalogued population.</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage

Table \ref{tab:regsum-cc1867} reports settlement counts and leading centres across all twelve regional masks, documenting spatial coverage from St. John's and Saint-Pierre in the east to Barkerville and Victoria on the Pacific coast.

<figure class="crd-table-figure" id="tab:regsum-cc1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Canada and Canada East (Province of Quebec)</strong></td><td class="crd-td">379</td><td class="crd-td">Montréal (90,3k)</td></tr>
<tr><td class="crd-td"><strong>Upper Canada and Canada West (Province of Ontario)</strong></td><td class="crd-td">325</td><td class="crd-td">Toronto (44,8k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Nova Scotia and Cape Breton</strong></td><td class="crd-td">59</td><td class="crd-td">Halifax (25k)</td></tr>
<tr><td class="crd-td"><strong>Colony of New Brunswick</strong></td><td class="crd-td">36</td><td class="crd-td">Saint John (27,3k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Prince Edward Island</strong></td><td class="crd-td">16</td><td class="crd-td">Charlottetown (6,7k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Newfoundland and Labrador</strong></td><td class="crd-td">75</td><td class="crd-td">St. John's (27,5k)</td></tr>
<tr><td class="crd-td"><strong>French Colony of Saint-Pierre and Miquelon</strong></td><td class="crd-td">3</td><td class="crd-td">Saint-Pierre (3,2k)</td></tr>
<tr><td class="crd-td"><strong>District of Assiniboia and Red River Settlement</strong></td><td class="crd-td">9</td><td class="crd-td">Winnipeg (3,2k)</td></tr>
<tr><td class="crd-td"><strong>Rupert's Land Prairies and Hudson's Bay Interior</strong></td><td class="crd-td">34</td><td class="crd-td">St. Albert (480)</td></tr>
<tr><td class="crd-td"><strong>Colonies of Vancouver Island and British Columbia</strong></td><td class="crd-td">41</td><td class="crd-td">Barkerville (10k)</td></tr>
<tr><td class="crd-td"><strong>North-Western Territory and High Arctic</strong></td><td class="crd-td">27</td><td class="crd-td">Tuktoyaktuk (680)</td></tr>
<tr><td class="crd-td"><strong>Danish Inspectorates of North and South Greenland and East Greenland</strong></td><td class="crd-td">60</td><td class="crd-td">Qaqortoq (1,1k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading urban or post centres across all twelve masks to 1867AD (1.064 total sites).</figcaption>
</figure>

## Excluded Candidates and Deduplication Ledger

Table \ref{tab:excluded-cc1867} lists all 23 deduplicated entries excluded from the 1.087-candidate source ledger (`colonial_canada_to_1867_source_ledger.json5`), separating HYDE-centroid twin merges from historical parish and Indigenous alias consolidations.

<figure class="crd-table-figure" id="tab:excluded-cc1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Category</th><th class="crd-th">Consolidation Detail</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Arsuk</strong></td><td class="crd-td">Greenland</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 13,23 km matching-name/HYDE-centroid twin into canonical Arsuk-Greenland.</td></tr>
<tr><td class="crd-td"><strong>Arviat</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 12,99 km matching-name/HYDE-centroid twin into canonical Arviat-Canada.</td></tr>
<tr><td class="crd-td"><strong>Chesterfield Inlet</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 13,1 km matching-name/HYDE-centroid twin into canonical Chesterfield Inlet-Canada.</td></tr>
<tr><td class="crd-td"><strong>Fort Resolution</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 13,65 km matching-name/HYDE-centroid twin into canonical Fort Resolution-Canada.</td></tr>
<tr><td class="crd-td"><strong>Fort à la Corne</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Identical-series HYDE centroid duplicate merged into canonical Fort à la Corne-Canada.</td></tr>
<tr><td class="crd-td"><strong>Ilimanaq</strong></td><td class="crd-td">Greenland</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 14,56 km matching-name/HYDE-centroid twin into canonical Ilimanaq-Greenland.</td></tr>
<tr><td class="crd-td"><strong>Illorsuit</strong></td><td class="crd-td">Greenland</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Identical-series HYDE centroid duplicate merged into canonical Illorsuit-Greenland.</td></tr>
<tr><td class="crd-td"><strong>Kangaamiut</strong></td><td class="crd-td">Greenland</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Identical-series HYDE centroid duplicate merged into canonical Kangaamiut-Greenland.</td></tr>
<tr><td class="crd-td"><strong>Kangaatsiaq</strong></td><td class="crd-td">Greenland</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Identical-series HYDE centroid duplicate merged into canonical Kangaatsiaq-Greenland.</td></tr>
<tr><td class="crd-td"><strong>Les Escoumins</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 12,26 km matching-name/HYDE-centroid twin into canonical Les Escoumins-Canada.</td></tr>
<tr><td class="crd-td"><strong>Maria</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 13,38 km matching-name/HYDE-centroid twin into canonical Maria-Canada.</td></tr>
<tr><td class="crd-td"><strong>Nuugaatsiaq</strong></td><td class="crd-td">Greenland</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 23,44 km matching-name/HYDE-centroid twin into canonical Nuugaatsiaq-Greenland.</td></tr>
<tr><td class="crd-td"><strong>Port Stanley</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 14,13 km matching-name/HYDE-centroid twin into canonical Port Stanley-Canada.</td></tr>
<tr><td class="crd-td"><strong>Saattut</strong></td><td class="crd-td">Greenland</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Identical-series HYDE centroid duplicate merged into canonical Saattut-Greenland.</td></tr>
<tr><td class="crd-td"><strong>Saint John</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 12,08 km matching-name/HYDE-centroid twin into canonical Saint John-Canada.</td></tr>
<tr><td class="crd-td"><strong>Saint-Aimé</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Identical-series HYDE centroid duplicate merged into canonical Saint-Aimé-Canada.</td></tr>
<tr><td class="crd-td"><strong>Souris</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 15,48 km matching-name/HYDE-centroid twin into canonical Souris-Canada.</td></tr>
<tr><td class="crd-td"><strong>Uummannaq</strong></td><td class="crd-td">Greenland</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 14,46 km matching-name/HYDE-centroid twin into canonical Uummannaq-Greenland.</td></tr>
<tr><td class="crd-td"><strong>Yuquot</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated 13,22 km matching-name/HYDE-centroid twin into canonical Yuquot-Canada.</td></tr>
<tr><td class="crd-td"><strong>Saint-Gervais</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'Saint-Vallier-de-Bellechasse' (Censuses of Canada Vol. IV (1876); Lower Canada Censuses 1765-1831; Census of the Canadas 1851/1861).</td></tr>
<tr><td class="crd-td"><strong>Pierreville</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'Odanak' (CENTAUR Colonial Registry).</td></tr>
<tr><td class="crd-td"><strong>Kanesatake</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'Oka-Deux-Montagnes' (Trigger (1985); Charbonneau PRDH; Censuses of Canada Vol. IV (1876)).</td></tr>
<tr><td class="crd-td"><strong>Niaqornat</strong></td><td class="crd-td">Greenland</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'Illorsuit' (Gad (1970-1982) History of Greenland; Marquardt (2002) Folketælling 1805/1840/1860; Kleivan (1984)).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> All 23 deduplicated candidate entries excluded in the 1763 to 1867AD source ledger.</figcaption>
</figure>

# Limitations

Three caveats apply to the 1763AD to 1867AD gazetteer. First, census timing differs across jurisdictions: Lower Canada, Upper Canada, Nova Scotia, New Brunswick and Prince Edward Island peak at the 1861AD decennial census (`Montréal` 90,3k; `Québec` 51,1k; `Toronto` 44,8k) and Newfoundland peaks at the 1857AD colonial census (`Harbour Grace` 5.095; `Carbonear` 4.815), whereas `St. John's` (27,5k), `Winnipeg` (3,2k), `Victoria` (4,8k) and `Saint-Pierre` (3,25k) incorporate 1867AD boundary estimates [@statcan1876censuses; @newfoundland1857abstract; @ribault1962iles]. Second, ephemeral boomtowns such as `Barkerville` (10k in 1863AD, falling to 2,5k by 1867AD) and Loyalist `Shelburne` (9,8k in 1784AD, dropping to 950 by 1817AD) record short-lived peak populations rather than sustained decennial averages [@barman2007west; @statcan1876censuses]. Third, subarctic trading forts in the North-Western Territory and Rupert's Land reflect permanent post complements rather than surrounding seasonal Indigenous gatherings [@ray1974indians].

# Sources

<div id="refs"></div>
