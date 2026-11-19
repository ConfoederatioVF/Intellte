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
hero_caption: "Spatial distribution of 1.149 urban centres, timber ports, fur-trade posts and Greenlandic stations across twelve territories, 1763 to 1867AD."
hero_label: "fig:hero-colonial-canada-to-1867"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 1.149 settlement trajectories (4.734 settlement-year observations; mean 4,12 per site, with 1.106 carrying three or more benchmarks) across Canada (1.077), Greenland (68) and Saint-Pierre-et-Miquelon (4) between 1763AD and 1867AD under CENTAUR-II. Built from *Censuses of Canada 1665 to 1871* Vol. IV, colonial municipal returns, Hudson's Bay Company post journals, Pacific coast histories and Danish Greenlandic registries [@statcan1876censuses; @newfoundland1857abstract; @ray1974indians; @barman2007west; @marquardt2002change], the catalogue spans all twelve sub-regions: Lower Canada (534 sites), Upper Canada (274), Newfoundland and Labrador (75), Greenland (68), Rupert's Land Prairies (54), British Columbia and Vancouver Island (50), North-Western Territory and High Arctic (34), Nova Scotia (19), District of Assiniboia (17), New Brunswick (13), Prince Edward Island (7) and Saint-Pierre-et-Miquelon (4). Urban primacy shifted decisively along the St. Lawrence-Great Lakes axis: Montréal expanded from 5,8k in 1765AD to 90,3k in 1861AD, followed by Québec (5,6k to 51,1k in 1861AD), York Upper Canada and Toronto (100-120 in 1793AD to 44,82k and 44,8k in 1861AD), St. John's (1,95k in 1763AD to 27,5k in 1867AD), Saint John City (27,32k in 1861AD), Halifax (25k in 1861AD), Hamilton (19,1k), Ottawa (14,7k), Kingston (13,74k), London (11,56k) and Barkerville (10k in 1863AD) [@statcan1876censuses; @barman2007west]. Alongside the 1.149 included settlements, the source ledger logs 231 deduplicated exclusions (1.380 total candidates, 0 unaccounted).

# Background

Urban expansion between 1763AD and Confederation transformed Canada's settlement hierarchy. In 1783-1784AD, United Empire Loyalist arrivals inflated maritime boomtowns such as Shelburne, Nova Scotia (9,8k in 1784AD before rapid contraction to 950 in 1817AD) and seeded Saint John (4,5k in 1784AD), Fredericton and Kingston [@statcan1876censuses]. After 1815AD, canalisation of the Welland, Rideau and St. Lawrence corridors, timber exports and railway construction propelled Montréal, Toronto, Hamilton, Ottawa and London into major commercial cities, while Victoria (4,8k in 1867AD), Yale (2,8k in 1858AD) and the Cariboo gold-rush camp of Barkerville (10k in 1863AD) anchored British Pacific settlement amid severe Indigenous demographic loss [@barman2007west; @boyd1999coming]. Across the interior plains, Arctic and Atlantic islands, Winnipeg (3,2k in 1867AD) and St. Boniface (2,1k) anchored Assiniboia, Saint-Pierre reached 3,25k in 1867AD [@ribault1962iles], and Greenlandic stations led by Qaqortoq (1,15k in 1860AD), Ilulissat (840) and Nuuk (760) consolidated under Royal Greenland Trade governance [@marquardt2002change].

# Methodology

Settlement trajectories filter CENTAUR urban records strictly to the 1763AD to 1867AD interval (4.734 observations). All 1.149 entries carry CENTAUR provenance and snap onto the twelve 5-arcminute regional masks within a 14-pixel coastal search radius. Danish colonial names in Greenland were harmonised to Kalaallisut headwords (Nuuk, Ilulissat, Qaqortoq, Sisimiut, Aasiaat, Maniitsoq, Paamiut, Qeqertarsuaq and Qasigiannguit) with Danish historical names preserved as alternative names [@marquardt2002change].

Deduplication across the 1.380 candidates removes 231 duplicate-alias records (225 in Canada, 5 in Greenland and 1 in Saint-Pierre-et-Miquelon): 229 coordinate or alias consolidations within 2 km (including Halifax City NS into Halifax, Kingston Port UC into Kingston, Bytown Capital into Ottawa, Montreal City into Montréal, Quebec Capital into Québec, Saint John into Saint John City, Saint-Gervais into Saint-Vallier-de-Bellechasse, Fort Resolution Native Town into Fort Resolution, Nuuk Colony, Aasiaat Colony, Upernavik Colony, Qeqertarsuaq into Qeqertarsuaq Colony and Miquelon Settlement into Miquelon), plus the consolidation of Skidegate Haida Capital into Skidegate (0,58-2 km Haida settlement continuity reducing British Columbia from 51 pre-merge loci to 50 included entries) and Sisimiut Colony into Sisimiut (Holsteinsborg colonial register reducing Greenland from 69 pre-merge loci to 68 included entries).

# Testing and Validation

Ledger reconciliation confirms 1.149 included settlements and 231 excluded duplicate-alias entries (1.380 total candidates, 0 unaccounted). All 1.149 records contain WGS84 coordinates across all twelve regional masks and 4.734 settlement-year headcounts (mean 4,12 observations per locus; 1.106 with three or more benchmarks). Figure \ref{fig:sett-cc1867} plots the 1.149-settlement rank-size distribution alongside the fifteen largest peaks.

<figure class="crd-figure-block" id="fig:sett-cc1867">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1867-settlements/fig4_colonial_canada_to_1867_settlements.png" alt="fig:sett-cc1867" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 1.149 catalogued centres and leading fifteen urban peaks of Colonial Canada and Greenland to 1867AD.</figcaption>
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
<tr><td class="crd-td"><strong>York Upper Canada</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,65, -79,38</td><td class="crd-td">1793-1861</td><td class="crd-td">-</td><td class="crd-td">30,8k</td><td class="crd-td">44,8k</td><td class="crd-td">44,8k (1861)</td></tr>
<tr><td class="crd-td"><strong>Toronto</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,71, -79,38</td><td class="crd-td">1793-1861</td><td class="crd-td">-</td><td class="crd-td">31k</td><td class="crd-td">44,8k</td><td class="crd-td">44,8k (1861)</td></tr>
<tr><td class="crd-td"><strong>St. John's</strong></td><td class="crd-td">Colony of Newfoundland and Labrador</td><td class="crd-td">47,56, -52,71</td><td class="crd-td">1763-1867</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,5k (1867)</td></tr>
<tr><td class="crd-td"><strong>Saint John City</strong></td><td class="crd-td">Colony of New Brunswick</td><td class="crd-td">45,27, -66,06</td><td class="crd-td">1783-1861</td><td class="crd-td">-</td><td class="crd-td">22,7k</td><td class="crd-td">27,3k</td><td class="crd-td">27,3k (1861)</td></tr>
<tr><td class="crd-td"><strong>Halifax</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">44,64, -63,58</td><td class="crd-td">1763-1861</td><td class="crd-td">4,5k</td><td class="crd-td">20,7k</td><td class="crd-td">25k</td><td class="crd-td">25k (1861)</td></tr>
<tr><td class="crd-td"><strong>Hamilton</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,25, -79,85</td><td class="crd-td">1813-1861</td><td class="crd-td">-</td><td class="crd-td">14k</td><td class="crd-td">19,1k</td><td class="crd-td">19,1k (1861)</td></tr>
<tr><td class="crd-td"><strong>Ottawa</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,41, -75,7</td><td class="crd-td">1826-1861</td><td class="crd-td">-</td><td class="crd-td">8k</td><td class="crd-td">14,7k</td><td class="crd-td">14,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>Kingston</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">44,23, -76,48</td><td class="crd-td">1784-1861</td><td class="crd-td">-</td><td class="crd-td">11,7k</td><td class="crd-td">13,7k</td><td class="crd-td">13,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>London</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">42,98, -81,23</td><td class="crd-td">1826-1861</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">11,6k</td><td class="crd-td">11,6k (1861)</td></tr>
<tr><td class="crd-td"><strong>Barkerville</strong></td><td class="crd-td">Colonies of Vancouver Island and British Columbia</td><td class="crd-td">53,07, -121,52</td><td class="crd-td">1862-1867</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k (1863)</td></tr>
<tr><td class="crd-td"><strong>Shelburne</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">43,76, -65,32</td><td class="crd-td">1783-1861</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">9,8k (1784)</td></tr>
<tr><td class="crd-td"><strong>Charlottetown City</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">46,24, -63,13</td><td class="crd-td">1768-1861</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">6,7k</td><td class="crd-td">6,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>Charlottetown</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">46,29, -63,12</td><td class="crd-td">1768-1861</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">6,7k</td><td class="crd-td">6,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>St. Catharines</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,17, -79,24</td><td class="crd-td">1790-1861</td><td class="crd-td">140</td><td class="crd-td">4,4k</td><td class="crd-td">6,3k</td><td class="crd-td">6,3k (1861)</td></tr>
<tr><td class="crd-td"><strong>Belleville</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">44,17, -77,38</td><td class="crd-td">1789-1861</td><td class="crd-td">80</td><td class="crd-td">4,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,3k (1861)</td></tr>
<tr><td class="crd-td"><strong>Brantford</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,13, -80,27</td><td class="crd-td">1784-1861</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">6,3k</td><td class="crd-td">6,3k (1861)</td></tr>
<tr><td class="crd-td"><strong>Miramichi Town</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">47,02, -65,47</td><td class="crd-td">1785-1861</td><td class="crd-td">280</td><td class="crd-td">4,5k</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (1861)</td></tr>
<tr><td class="crd-td"><strong>Trois-Rivières</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">46,35, -72,55</td><td class="crd-td">1765-1861</td><td class="crd-td">1k</td><td class="crd-td">4,9k</td><td class="crd-td">6,1k</td><td class="crd-td">6,1k (1861)</td></tr>
<tr><td class="crd-td"><strong>Sherbrooke</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,4, -71,9</td><td class="crd-td">1802-1861</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">5,9k</td><td class="crd-td">5,9k (1861)</td></tr>
<tr><td class="crd-td"><strong>Laval</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,57, -73,69</td><td class="crd-td">1765-1861</td><td class="crd-td">2,1k</td><td class="crd-td">5k</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>Fredericton City</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,96, -66,64</td><td class="crd-td">1785-1861</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>Fredericton</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,95, -66,67</td><td class="crd-td">1784-1861</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>Yarmouth</strong></td><td class="crd-td">Colony of Nova Scotia and Cape Breton</td><td class="crd-td">43,83, -66,12</td><td class="crd-td">1767-1861</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">5,6k</td><td class="crd-td">5,6k (1861)</td></tr>
<tr><td class="crd-td"><strong>Lévis</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">46,8, -71,18</td><td class="crd-td">1765-1861</td><td class="crd-td">1,7k</td><td class="crd-td">4,4k</td><td class="crd-td">5,3k</td><td class="crd-td">5,3k (1861)</td></tr>
<tr><td class="crd-td"><strong>Harbour Grace</strong></td><td class="crd-td">Colony of Newfoundland and Labrador</td><td class="crd-td">47,69, -53,23</td><td class="crd-td">1763-1857</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1857)</td></tr>
<tr><td class="crd-td"><strong>Guelph</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,55, -80,26</td><td class="crd-td">1827-1861</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k (1861)</td></tr>
<tr><td class="crd-td"><strong>Saint-Hyacinthe Town</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,63, -72,96</td><td class="crd-td">1765-1861</td><td class="crd-td">120</td><td class="crd-td">3,3k</td><td class="crd-td">5k</td><td class="crd-td">5k (1861)</td></tr>
<tr><td class="crd-td"><strong>Cobourg</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">44,04, -78,12</td><td class="crd-td">1798-1861</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">5k</td><td class="crd-td">5k (1861)</td></tr>
<tr><td class="crd-td"><strong>Cobourg Port</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,96, -78,17</td><td class="crd-td">1798-1861</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1861)</td></tr>
<tr><td class="crd-td"><strong>Carbonear</strong></td><td class="crd-td">Colony of Newfoundland and Labrador</td><td class="crd-td">47,74, -53,23</td><td class="crd-td">1763-1857</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1857)</td></tr>
<tr><td class="crd-td"><strong>Victoria</strong></td><td class="crd-td">Colonies of Vancouver Island and British Columbia</td><td class="crd-td">48,44, -123,35</td><td class="crd-td">1843-1867</td><td class="crd-td">-</td><td class="crd-td">320</td><td class="crd-td">4,2k</td><td class="crd-td">4,8k (1867)</td></tr>
<tr><td class="crd-td"><strong>Sorel</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">46,04, -73,11</td><td class="crd-td">1765-1861</td><td class="crd-td">1k</td><td class="crd-td">3,4k</td><td class="crd-td">4,8k</td><td class="crd-td">4,8k (1861)</td></tr>
<tr><td class="crd-td"><strong>Saint-Césaire</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,41, -73</td><td class="crd-td">1765-1861</td><td class="crd-td">340</td><td class="crd-td">3,2k</td><td class="crd-td">4,7k</td><td class="crd-td">4,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>Saint-Jean-sur-Richelieu</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,31, -73,26</td><td class="crd-td">1765-1861</td><td class="crd-td">680</td><td class="crd-td">3,2k</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k (1861)</td></tr>
<tr><td class="crd-td"><strong>Saint-Polycarpe</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,3, -74,3</td><td class="crd-td">1765-1861</td><td class="crd-td">360</td><td class="crd-td">3,1k</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k (1861)</td></tr>
<tr><td class="crd-td"><strong>Chatham-ON</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">42,41, -82,18</td><td class="crd-td">1795-1861</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">4,5k</td><td class="crd-td">4,5k (1861)</td></tr>
<tr><td class="crd-td"><strong>Pictou Port NS</strong></td><td class="crd-td">Colony of Nova Scotia and Cape Breton</td><td class="crd-td">45,68, -62,71</td><td class="crd-td">1767-1861</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1861)</td></tr>
<tr><td class="crd-td"><strong>Port Hope Town</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,95, -78,3</td><td class="crd-td">1793-1861</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1861)</td></tr>
<tr><td class="crd-td"><strong>Port Hope</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">44,02, -78,4</td><td class="crd-td">1793-1861</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1861)</td></tr>
<tr><td class="crd-td"><strong>Brockville</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">44,59, -75,69</td><td class="crd-td">1785-1861</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1861)</td></tr>
<tr><td class="crd-td"><strong>Lunenburg Port NS</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">44,38, -64,32</td><td class="crd-td">1767-1861</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1861)</td></tr>
<tr><td class="crd-td"><strong>Saint-Martin-de-Laval</strong></td><td class="crd-td">Lower Canada and Canada East</td><td class="crd-td">45,55, -73,75</td><td class="crd-td">1765-1861</td><td class="crd-td">780</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1861)</td></tr>
<tr><td class="crd-td"><strong>Oshawa Town</strong></td><td class="crd-td">Upper Canada and Canada West</td><td class="crd-td">43,9, -78,87</td><td class="crd-td">1835-1861</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">4k</td><td class="crd-td">4k (1861)</td></tr>
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
<tr><td class="crd-td"><strong>Lower Canada and Canada East (Province of Quebec)</strong></td><td class="crd-td">534</td><td class="crd-td">Montréal (90,3k)</td></tr>
<tr><td class="crd-td"><strong>Upper Canada and Canada West (Province of Ontario)</strong></td><td class="crd-td">274</td><td class="crd-td">York Upper Canada (44,8k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Nova Scotia and Cape Breton</strong></td><td class="crd-td">19</td><td class="crd-td">Yarmouth (5,6k)</td></tr>
<tr><td class="crd-td"><strong>Colony of New Brunswick</strong></td><td class="crd-td">13</td><td class="crd-td">Saint John City (27,3k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Prince Edward Island</strong></td><td class="crd-td">7</td><td class="crd-td">Belfast-PEI (2,1k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Newfoundland and Labrador</strong></td><td class="crd-td">75</td><td class="crd-td">St. John's (27,5k)</td></tr>
<tr><td class="crd-td"><strong>French Colony of Saint-Pierre and Miquelon</strong></td><td class="crd-td">4</td><td class="crd-td">Saint-Pierre (3,2k)</td></tr>
<tr><td class="crd-td"><strong>District of Assiniboia and Red River Settlement</strong></td><td class="crd-td">17</td><td class="crd-td">Winnipeg (3,2k)</td></tr>
<tr><td class="crd-td"><strong>Rupert's Land Prairies and Hudson's Bay Interior</strong></td><td class="crd-td">54</td><td class="crd-td">Fort Edmonton Native Settlement (1,1k)</td></tr>
<tr><td class="crd-td"><strong>Colonies of Vancouver Island and British Columbia</strong></td><td class="crd-td">50</td><td class="crd-td">Barkerville (10k)</td></tr>
<tr><td class="crd-td"><strong>North-Western Territory and High Arctic</strong></td><td class="crd-td">34</td><td class="crd-td">Fort Chipewyan Native Town (800)</td></tr>
<tr><td class="crd-td"><strong>Danish Inspectorates of North and South Greenland and East Greenland</strong></td><td class="crd-td">68</td><td class="crd-td">Qaqortoq (1,1k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading urban or post centres across all twelve masks to 1867AD (1.149 total sites).</figcaption>
</figure>

## Excluded Candidates and Deduplication Ledger

Table \ref{tab:excluded-cc1867} lists the leading 30 representative deduplicated entries excluded out of 231 duplicate-alias consolidations in the 1.380-candidate regional source ledger, documenting the Sisimiut and Skidegate merges alongside 2 km coordinate and historical alias consolidations.

<figure class="crd-table-figure" id="tab:excluded-cc1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Category</th><th class="crd-th">Consolidation Detail</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sisimiut Colony</strong></td><td class="crd-td">Greenland</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Merged into Sisimiut-Greenland (Holsteinsborg colonial register).</td></tr>
<tr><td class="crd-td"><strong>Skidegate Haida Capital</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Merged into Skidegate-Canada (0,58-2 km Haida settlement continuity).</td></tr>
<tr><td class="crd-td"><strong>Halifax City NS</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Halifax' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Kingston Port UC</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Kingston' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Hamilton City</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Hamilton' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Bytown Capital</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Ottawa' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>London City UC</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'London' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Shelburne Port NS</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Shelburne' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>St. Catharines Town</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'St. Catharines' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Belleville Town</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Belleville' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Sherbrooke Town</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Sherbrooke' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Brockville Port</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Brockville' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Fort Victoria BC</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Victoria' (Censuses of Canada 1665 to 1871; Ormsby (1958)).</td></tr>
<tr><td class="crd-td"><strong>Saint-Hyacinthe</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Saint-Hyacinthe Town' (Census of New France 1666/1681/1739; Charbonneau PRDH; Census of the Canadas 1851/1861).</td></tr>
<tr><td class="crd-td"><strong>Pictou</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Pictou Port NS' (Censuses of Nova Scotia, New Brunswick &amp; PEI (1767-1861); StatsCan Historical Statistics).</td></tr>
<tr><td class="crd-td"><strong>Cornwall Town UC</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Cornwall' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Newark Niagara</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Niagara-on-the-Lake' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Saint-Gervais</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Saint-Vallier-de-Bellechasse' (Censuses of Canada Vol. IV (1876); Lower Canada Censuses 1765-1831; Census of the Canadas 1851/1861).</td></tr>
<tr><td class="crd-td"><strong>Windsor-ON</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Windsor' (Census of New France 1681/1739; Thwaites Jesuit Relations; Census of the Canadas 1851/1861).</td></tr>
<tr><td class="crd-td"><strong>Amherst Town NS</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Amherst' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Montreal City</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Montréal' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
<tr><td class="crd-td"><strong>Quebec Capital</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Québec' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
<tr><td class="crd-td"><strong>Saint John</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Saint John City' (Censuses of Nova Scotia, New Brunswick &amp; PEI (1767-1861); StatsCan Historical Statistics).</td></tr>
<tr><td class="crd-td"><strong>Brantford Town</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Brantford' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Trois-Rivieres Town</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Trois-Rivières' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
<tr><td class="crd-td"><strong>Yarmouth Port NS</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Yarmouth' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Guelph Town</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Guelph' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Sorel Port QC</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Sorel' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Nicolet Town QC</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Nicolet' (Censuses of Canada 1665 to 1871).</td></tr>
<tr><td class="crd-td"><strong>Saint-Jean-sur-Richelieu Parish</strong></td><td class="crd-td">Canada</td><td class="crd-td">Duplicate alias or twin</td><td class="crd-td">Consolidated duplicate coordinate/alias within 2 km into 'Saint-Jean-sur-Richelieu' (Censuses of Canada 1665 to 1871; Charbonneau PRDH).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 representative deduplicated candidate entries excluded out of 231 in the 1763 to 1867AD source ledger.</figcaption>
</figure>

# Limitations

Three caveats apply to the 1763AD to 1867AD gazetteer. First, census timing differs across jurisdictions: Lower Canada, Upper Canada, Nova Scotia, New Brunswick and Prince Edward Island peak at the 1861AD decennial census (Montréal 90,3k; Québec 51,1k; Toronto 44,8k) and Newfoundland peaks at the 1857AD colonial census (Harbour Grace 5.095; Carbonear 4.815), whereas St. John's (27,5k), Winnipeg (3,2k), Victoria (4,8k) and Saint-Pierre (3,25k) incorporate 1867AD boundary estimates [@statcan1876censuses; @newfoundland1857abstract; @ribault1962iles]. Second, ephemeral boomtowns such as Barkerville (10k in 1863AD, falling to 2,5k by 1867AD) and Loyalist Shelburne (9,8k in 1784AD, dropping to 950 by 1817AD) record short-lived peak populations rather than sustained decennial averages [@barman2007west; @statcan1876censuses]. Third, subarctic trading forts in the North-Western Territory and Rupert's Land reflect permanent post complements rather than surrounding seasonal Indigenous gatherings [@ray1974indians].

# Sources

<div id="refs"></div>
