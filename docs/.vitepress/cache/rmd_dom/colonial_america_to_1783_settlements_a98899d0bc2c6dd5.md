---
title: "Settlement Gazetteer of Colonial America to 1783AD"
subtitle: "CENTAUR-II: Revolutionary Ports, Frontier Stations and Alta California Missions, 1754AD to 1783AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_america_to_1783_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_america_to_1783_spatial.png"
hero_caption: "Spatial distribution of 1.485 towns, forts, frontier stations and Spanish missions across 26 sub-regions through 1783AD."
hero_label: "fig:hero-colonial-america-to-1783"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents the 1.485 settlements active across North America and Bermuda between 1754AD and 1783AD under CENTAUR-II (9.157.164 km²). Combining pre-Revolutionary urban series, provincial town enumerations (such as the 1774AD Connecticut and 1775AD Rhode Island censuses), conservative 1783AD back-projections from the 1790AD federal census across New England and the Atlantic states, Kentucky and Tennessee stations and thirteen Alta California mission, presidio and pueblo loci [@bridenbaugh1955cities; @greene1932american; @cook1976population], the register spans all 26 sub-regional masks. Leading Atlantic cities and wartime concentrations between 1754AD and 1783AD were Philadelphia (36k in 1783AD), New York (25k in 1775AD, 23,6k in 1783AD), Boston (16k), Litchfield (15.053 in 1775AD), Charleston (12,5k in 1783AD), Valley Forge (11k during the 1777AD winter encampment), Newport (11k in 1775AD), Baltimore (9,5k in 1783AD), Newport Port (9.209 in 1774AD), Norwalk (8.837 in 1775AD), No. Liberties (8.325 in 1783AD), New Haven (8.295 in 1774AD) and Northern Liberties (7,8k in 1783AD) [@forstall1996population; @bridenbaugh1955cities]. Across 1.791 ledger candidates in the regional source ledger, 306 duplicate aliases within 2 km are excluded to avoid double counting.

# Background

Between 1754AD and 1783AD, urban geography across British, early Republican and Spanish North America shifted decisively. Philadelphia and New York outpaced Boston in commercial tonnage and residents, while Baltimore grew from a minor Chesapeake landing (500 in 1754AD) into a major grain port (9,5k in 1783AD) [@bridenbaugh1955cities; @forstall1996population]. Across Connecticut and Pennsylvania, Revolutionary mobilisation raised inland supply depots and winter cantonments (Litchfield, Norwalk, New Haven and Valley Forge) briefly into the upper urban tier, while trans-Appalachian settlers established fortified stations at Harrodsburg, Lexington, Louisville, Boonesborough and Fort Nashborough, and Spanish expeditions founded Alta California missions and presidios from San Diego (1769AD) and Monterey (1770AD) to San Francisco (1776AD) and Santa Barbara (1782AD) [@cook1976population; @gerhard1982north].

# Methodology

The gazetteer records combine primary colonial town series with conservative 1790AD First Federal Census municipal back-projections across the eastern states (1775AD and 1783AD anchors) inside the 1754AD to 1783AD domain. Every entry records primary colonial or census provenance and maps to one of the 26 sub-regional masks via a six-pixel coastal snap search. In the regional source ledger, 306 duplicate aliases within 2 km are consolidated and marked excluded (Philadelphia City merged into Philadelphia, New York City and Manhattan into New York, Portsmouth into Norfolk, Flatbush into Brooklyn, Queens into Newtown, Staten Island into Richmondtown, Carmel into San Carlos Borromeo, Midway into Sunbury, Nashville into Fort Nashborough and close-pair centroid duplicates).

# Testing and Validation

Ledger reconciliation confirms 1.485 included settlements (4.491 settlement-year observations, 3,02 mean per settlement, 937 entries with >= 3 chronological observations) and 306 excluded entries (1.791 total candidates, 0 unaccounted). All 1.485 records pass WGS84 coordinate validity and non-zero integer count checks across the 1754AD to 1783AD span. Figure \ref{fig:sett-1783} shows the rank-size curve and the leading fifteen settlement peaks.

<figure class="crd-figure-block" id="fig:sett-1783">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-america-to-1783-settlements/fig4_colonial_america_to_1783_settlements.png" alt="fig:sett-1783" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 1.485 catalogued centres of Colonial America to 1783AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-1783} lists the top 45 settlements ranked by peak population within the 1754AD to 1783AD boundary window, including Revolutionary wartime peaks at Litchfield, Valley Forge and Norwalk alongside Newport Port, No. Liberties, New Haven, Northern Liberties and the major coastal ports.

<figure class="crd-table-figure" id="tab:top45-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Colony or State</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1754AD</th><th class="crd-th">1775AD</th><th class="crd-th">1783AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Philadelphia</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">39,95, -75,16</td><td class="crd-td">1754-1783AD</td><td class="crd-td">20,5k</td><td class="crd-td">35k</td><td class="crd-td">36k</td><td class="crd-td">36k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>New York</strong></td><td class="crd-td">New York</td><td class="crd-td">40,71, -74,01</td><td class="crd-td">1754-1783AD</td><td class="crd-td">14,2k</td><td class="crd-td">25k</td><td class="crd-td">23,6k</td><td class="crd-td">25k (1775AD)</td></tr>
<tr><td class="crd-td"><strong>Boston</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,36, -71,06</td><td class="crd-td">1754-1783AD</td><td class="crd-td">15,6k</td><td class="crd-td">16k</td><td class="crd-td">16k</td><td class="crd-td">16k (1775AD)</td></tr>
<tr><td class="crd-td"><strong>Litchfield</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,75, -73,19</td><td class="crd-td">1754-1783AD</td><td class="crd-td">1,3k</td><td class="crd-td">15,1k</td><td class="crd-td">3,2k</td><td class="crd-td">15,1k (1775AD)</td></tr>
<tr><td class="crd-td"><strong>Charleston</strong></td><td class="crd-td">South Carolina</td><td class="crd-td">32,78, -79,93</td><td class="crd-td">1754-1783AD</td><td class="crd-td">7,8k</td><td class="crd-td">12k</td><td class="crd-td">12,5k</td><td class="crd-td">12,5k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Newport</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">41,54, -71,29</td><td class="crd-td">1754-1783AD</td><td class="crd-td">6,8k</td><td class="crd-td">11k</td><td class="crd-td">7,5k</td><td class="crd-td">11k (1775AD)</td></tr>
<tr><td class="crd-td"><strong>Valley Forge</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">40,1, -75,44</td><td class="crd-td">1754-1783AD</td><td class="crd-td">140</td><td class="crd-td">-</td><td class="crd-td">220</td><td class="crd-td">11k (1777AD)</td></tr>
<tr><td class="crd-td"><strong>Baltimore</strong></td><td class="crd-td">Maryland</td><td class="crd-td">39,29, -76,61</td><td class="crd-td">1754-1783AD</td><td class="crd-td">500</td><td class="crd-td">5,9k</td><td class="crd-td">9,5k</td><td class="crd-td">9,5k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Newport Port</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">41,49, -71,31</td><td class="crd-td">1755-1783AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">9,2k (1774AD)</td></tr>
<tr><td class="crd-td"><strong>Norwalk</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,09, -73,42</td><td class="crd-td">1754-1783AD</td><td class="crd-td">2,9k</td><td class="crd-td">8,8k</td><td class="crd-td">5,2k</td><td class="crd-td">8,8k (1775AD)</td></tr>
<tr><td class="crd-td"><strong>No. Liberties</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">39,97, -75,15</td><td class="crd-td">1754-1783AD</td><td class="crd-td">5k</td><td class="crd-td">7,3k</td><td class="crd-td">8,3k</td><td class="crd-td">8,3k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>New Haven</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,31, -72,93</td><td class="crd-td">1754-1783AD</td><td class="crd-td">4,8k</td><td class="crd-td">3,3k</td><td class="crd-td">7,6k</td><td class="crd-td">8,3k (1774AD)</td></tr>
<tr><td class="crd-td"><strong>Northern Liberties</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">39,97, -75,18</td><td class="crd-td">1754-1783AD</td><td class="crd-td">2,8k</td><td class="crd-td">6,2k</td><td class="crd-td">7,8k</td><td class="crd-td">7,8k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Norwich</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,52, -72,08</td><td class="crd-td">1754-1783AD</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">7,3k</td><td class="crd-td">7,3k (1774AD)</td></tr>
<tr><td class="crd-td"><strong>Dartmouth</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,57, -70,96</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">6,8k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Salem</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,52, -70,9</td><td class="crd-td">1754-1783AD</td><td class="crd-td">4,4k</td><td class="crd-td">5,3k</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Norfolk</strong></td><td class="crd-td">Virginia</td><td class="crd-td">36,85, -76,29</td><td class="crd-td">1754-1783AD</td><td class="crd-td">4,1k</td><td class="crd-td">6,3k</td><td class="crd-td">2,4k</td><td class="crd-td">6,3k (1775AD)</td></tr>
<tr><td class="crd-td"><strong>Farmington</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,72, -72,83</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3,5k</td><td class="crd-td">2k</td><td class="crd-td">4,2k</td><td class="crd-td">6,1k (1774AD)</td></tr>
<tr><td class="crd-td"><strong>Dartmouth Town</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,58, -70,99</td><td class="crd-td">1765-1776AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k (1776AD)</td></tr>
<tr><td class="crd-td"><strong>New London</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,36, -72,1</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,9k (1774AD)</td></tr>
<tr><td class="crd-td"><strong>Stratford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,18, -73,13</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Middletown</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,56, -72,65</td><td class="crd-td">1754-1783AD</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,7k (1756AD)</td></tr>
<tr><td class="crd-td"><strong>Stonington</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,34, -71,91</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">5,5k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Marblehead</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,5, -70,86</td><td class="crd-td">1754-1783AD</td><td class="crd-td">4,6k</td><td class="crd-td">5,2k</td><td class="crd-td">5,4k</td><td class="crd-td">5,4k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Woodbury</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,56, -73,21</td><td class="crd-td">1754-1783AD</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">5,3k (1774AD)</td></tr>
<tr><td class="crd-td"><strong>Providence</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">41,82, -71,41</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">5,2k</td><td class="crd-td">5,2k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Newbury</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,77, -70,85</td><td class="crd-td">1754-1783AD</td><td class="crd-td">5,1k</td><td class="crd-td">3,3k</td><td class="crd-td">3,7k</td><td class="crd-td">5,1k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Hartford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,77, -72,67</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3k</td><td class="crd-td">2k</td><td class="crd-td">4,2k</td><td class="crd-td">5k (1774AD)</td></tr>
<tr><td class="crd-td"><strong>Gloucester</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,62, -70,66</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td><td class="crd-td">5k</td><td class="crd-td">5k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Wallingford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,46, -72,8</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,9k (1774AD)</td></tr>
<tr><td class="crd-td"><strong>Fairfield</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,14, -73,26</td><td class="crd-td">1754-1783AD</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,9k (1774AD)</td></tr>
<tr><td class="crd-td"><strong>Bridgewater</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,99, -70,97</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">4,8k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Lancaster</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">40,04, -76,31</td><td class="crd-td">1754-1783AD</td><td class="crd-td">2,4k</td><td class="crd-td">4,8k</td><td class="crd-td">3,6k</td><td class="crd-td">4,8k (1775AD)</td></tr>
<tr><td class="crd-td"><strong>New Orleans</strong></td><td class="crd-td">Louisiana</td><td class="crd-td">29,95, -90,07</td><td class="crd-td">1754-1783AD</td><td class="crd-td">2,5k</td><td class="crd-td">4k</td><td class="crd-td">4,8k</td><td class="crd-td">4,8k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Southwark</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">39,93, -75,18</td><td class="crd-td">1754-1783AD</td><td class="crd-td">1,9k</td><td class="crd-td">4,1k</td><td class="crd-td">4,8k</td><td class="crd-td">4,8k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Portsmouth</strong></td><td class="crd-td">New Hampshire</td><td class="crd-td">43,08, -70,76</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3,8k</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>El Paso del Norte</strong></td><td class="crd-td">Texas</td><td class="crd-td">31,7, -106,33</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Newtown</strong></td><td class="crd-td">New York</td><td class="crd-td">40,74, -73,88</td><td class="crd-td">1754-1783AD</td><td class="crd-td">1,2k</td><td class="crd-td">4,6k</td><td class="crd-td">1,9k</td><td class="crd-td">4,6k (1775AD)</td></tr>
<tr><td class="crd-td"><strong>Ipswich</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,68, -70,84</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3,4k</td><td class="crd-td">4k</td><td class="crd-td">4,5k</td><td class="crd-td">4,5k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Middleborough</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,89, -70,91</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3k</td><td class="crd-td">3,9k</td><td class="crd-td">4,5k</td><td class="crd-td">4,5k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Nantucket</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,28, -70,1</td><td class="crd-td">1754-1783AD</td><td class="crd-td">2,9k</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td><td class="crd-td">4,5k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Rehoboth</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,84, -71,25</td><td class="crd-td">1754-1783AD</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">4,5k</td><td class="crd-td">4,5k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>St. Augustine</strong></td><td class="crd-td">Florida</td><td class="crd-td">29,89, -81,31</td><td class="crd-td">1754-1783AD</td><td class="crd-td">2,2k</td><td class="crd-td">3,2k</td><td class="crd-td">4,5k</td><td class="crd-td">4,5k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Truro Parish VA</strong></td><td class="crd-td">Virginia</td><td class="crd-td">38,71, -77,17</td><td class="crd-td">1755-1775AD</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,5k (1775AD)</td></tr>
<tr><td class="crd-td"><strong>Norwalk Town</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,12, -73,41</td><td class="crd-td">1756-1774AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1774AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Colonial America to 1783AD ordered by peak catalogued population (n=1.485 total).</figcaption>
</figure>

## Sub-Regional Coverage and Ledger Exclusions

Table \ref{tab:regsum-1783} aggregates the 1.485 settlements across all 26 sub-regions, led by Massachusetts Bay-Maine (231), Vermont (174), New Hampshire (168), Trans-Appalachian nations (156), New York (95), Connecticut (77), Virginia (74), New Jersey (66) and Pennsylvania (57), together with Watauga-Cumberland (31), Kentucky (15) and Alta California (13). Table \ref{tab:excluded-1783} summarises the leading 30 of 306 excluded duplicate candidates recorded in the source ledger.

<figure class="crd-table-figure" id="tab:regsum-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Province of New Hampshire</strong></td><td class="crd-td">168</td><td class="crd-td">Portsmouth (4,6k)</td></tr>
<tr><td class="crd-td"><strong>Province of Massachusetts Bay (incl. District of Maine)</strong></td><td class="crd-td">231</td><td class="crd-td">Boston (16k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Rhode Island and Providence Plantations</strong></td><td class="crd-td">31</td><td class="crd-td">Newport (11k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Connecticut</strong></td><td class="crd-td">77</td><td class="crd-td">Litchfield (15,1k)</td></tr>
<tr><td class="crd-td"><strong>Province of New York (incl. Iroquois Mohawk-Hudson)</strong></td><td class="crd-td">95</td><td class="crd-td">New York (25k)</td></tr>
<tr><td class="crd-td"><strong>Province of New Jersey</strong></td><td class="crd-td">66</td><td class="crd-td">Philadelphia (36k)</td></tr>
<tr><td class="crd-td"><strong>Province of Pennsylvania</strong></td><td class="crd-td">57</td><td class="crd-td">Valley Forge (11k)</td></tr>
<tr><td class="crd-td"><strong>Lower Counties on Delaware</strong></td><td class="crd-td">14</td><td class="crd-td">Wilmington (2,4k)</td></tr>
<tr><td class="crd-td"><strong>Province of Maryland</strong></td><td class="crd-td">43</td><td class="crd-td">Baltimore (9,5k)</td></tr>
<tr><td class="crd-td"><strong>Colony and Dominion of Virginia (incl. Trans-Allegheny West)</strong></td><td class="crd-td">74</td><td class="crd-td">Norfolk (6,3k)</td></tr>
<tr><td class="crd-td"><strong>Province of North Carolina</strong></td><td class="crd-td">41</td><td class="crd-td">St. John's Parish Carteret (2,2k)</td></tr>
<tr><td class="crd-td"><strong>Province of South Carolina</strong></td><td class="crd-td">42</td><td class="crd-td">Charleston (12,5k)</td></tr>
<tr><td class="crd-td"><strong>Province of Georgia</strong></td><td class="crd-td">15</td><td class="crd-td">St. Matthew's Parish GA (1,2k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Bermuda</strong></td><td class="crd-td">8</td><td class="crd-td">St. George's (2,4k)</td></tr>
<tr><td class="crd-td"><strong>Spanish Florida (San Agustin and Apalachee)</strong></td><td class="crd-td">22</td><td class="crd-td">St. Augustine (4,5k)</td></tr>
<tr><td class="crd-td"><strong>Spanish New Mexico and Pimeria Alta Pueblos</strong></td><td class="crd-td">37</td><td class="crd-td">El Paso del Norte (4,6k)</td></tr>
<tr><td class="crd-td"><strong>Spanish Texas (San Antonio and Presidio Missions)</strong></td><td class="crd-td">9</td><td class="crd-td">San Antonio (2k)</td></tr>
<tr><td class="crd-td"><strong>French Louisiana, Mobile and Pays des Illinois</strong></td><td class="crd-td">15</td><td class="crd-td">New Orleans (4,8k)</td></tr>
<tr><td class="crd-td"><strong>Trans-Appalachian Indigenous Nations</strong></td><td class="crd-td">156</td><td class="crd-td">Southold (3k)</td></tr>
<tr><td class="crd-td"><strong>Great Plains and Upper Missouri Indigenous Nations</strong></td><td class="crd-td">28</td><td class="crd-td">Grand Osage (2,8k)</td></tr>
<tr><td class="crd-td"><strong>Far West, Great Basin, California and Columbia Plateau Indigenous Nations</strong></td><td class="crd-td">17</td><td class="crd-td">Canyon de Chelly (2,1k)</td></tr>
<tr><td class="crd-td"><strong>Alaska and Aleutian Russian-Indigenous Early Contact</strong></td><td class="crd-td">6</td><td class="crd-td">Kodiak (750)</td></tr>
<tr><td class="crd-td"><strong>Kentucky Frontier District (Boonesborough, Harrodsburg and Louisville)</strong></td><td class="crd-td">15</td><td class="crd-td">Harrodsburg (750)</td></tr>
<tr><td class="crd-td"><strong>Watauga and Cumberland Frontier Settlements (Tennessee)</strong></td><td class="crd-td">31</td><td class="crd-td">Elizabethton (1,9k)</td></tr>
<tr><td class="crd-td"><strong>New Hampshire Grants and Republic of Vermont</strong></td><td class="crd-td">174</td><td class="crd-td">Bennington (1,8k)</td></tr>
<tr><td class="crd-td"><strong>Spanish Alta California Missions and Presidios (1769-1783)</strong></td><td class="crd-td">13</td><td class="crd-td">San Gabriel (750)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading urban or mission nodes across all 26 sub-regions to 1783AD (1.485 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Newburyport Port</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Newburyport' (Benton (1905); Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>New Bedford Port</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'New Bedford' (Benton (1905); Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Pittsburgh Port</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Pittsburgh' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Bethlehem</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Bethlehem' (CENTAUR Colonial Registry).</td></tr>
<tr><td class="crd-td"><strong>Hanover Town NH</strong></td><td class="crd-td">New Hampshire</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Hanover' (Greene &amp; Harrington (1932)).</td></tr>
<tr><td class="crd-td"><strong>Salem Moravian Town</strong></td><td class="crd-td">North Carolina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Salem' (Greene &amp; Harrington (1932)).</td></tr>
<tr><td class="crd-td"><strong>Philadelphia City</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Philadelphia' (Greene &amp; Harrington (1932); Wells (1975); Sutherland (1936)).</td></tr>
<tr><td class="crd-td"><strong>New York City</strong></td><td class="crd-td">New York</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'New York' (Greene &amp; Harrington (1932); Wells (1975); Sutherland (1936)).</td></tr>
<tr><td class="crd-td"><strong>Charles Town Port</strong></td><td class="crd-td">South Carolina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Charleston' (Greene &amp; Harrington (1932); Wells (1975); Sutherland (1936)).</td></tr>
<tr><td class="crd-td"><strong>New Haven Town</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'New Haven' (Greene &amp; Harrington (1932); Wells (1975); Sutherland (1936)).</td></tr>
<tr><td class="crd-td"><strong>Baltimore Town</strong></td><td class="crd-td">Maryland</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Baltimore' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Norwich Town</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Norwich' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>New London Port</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'New London' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Hartford Town</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Hartford' (Greene &amp; Harrington (1932); Wells (1975); Sutherland (1936)).</td></tr>
<tr><td class="crd-td"><strong>Portsmouth Port NH</strong></td><td class="crd-td">New Hampshire</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Portsmouth' (Greene &amp; Harrington (1932); Wells (1975); Sutherland (1936)).</td></tr>
<tr><td class="crd-td"><strong>Providence Town</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Providence' (Greene &amp; Harrington (1932); Wells (1975); Sutherland (1936)).</td></tr>
<tr><td class="crd-td"><strong>Lancaster Borough</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Lancaster' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>San Agustin Port</strong></td><td class="crd-td">Florida</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'St. Augustine' (Greene &amp; Harrington (1932); Wells (1975); Hann (1996)).</td></tr>
<tr><td class="crd-td"><strong>Alexandria Port</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Alexandria' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Savannah Port</strong></td><td class="crd-td">Georgia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Savannah' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Petersburg Port</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Petersburg' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Reading Borough</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Reading' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Wilmington Port NC</strong></td><td class="crd-td">North Carolina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Wilmington' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Frederick Town</strong></td><td class="crd-td">Maryland</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Frederick' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Newburgh Port</strong></td><td class="crd-td">New York</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Newburgh' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Winchester Borough</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Winchester' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Carlisle Borough</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Carlisle' (Greene &amp; Harrington (1932); Wells (1975)).</td></tr>
<tr><td class="crd-td"><strong>Pensacola Presidio</strong></td><td class="crd-td">Florida</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Pensacola' (Wells (1975); Chipman (1992)).</td></tr>
<tr><td class="crd-td"><strong>Bath Maine</strong></td><td class="crd-td">Maine</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Bath' (Benton (1905); Greene &amp; Harrington (1932)).</td></tr>
<tr><td class="crd-td"><strong>Portsmouth</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate and alias within 2 km into 'Norfolk' (Greene &amp; Harrington (1932); Morgan (1975); Sutherland (1936); 1782-1785 Virginia State Enumerations).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded duplicate candidates in the Colonial America to 1783AD source ledger (leading 30 of 306 entries consolidated into canonical parent towns).</figcaption>
</figure>

# Limitations

Three caveats govern the 1.485-entry gazetteer table. First, the 2 km deduplication rule consolidates 306 close-range alias duplicates (such as Philadelphia City into Philadelphia, Manhattan into New York, Portsmouth into Norfolk and Nashville into Fort Nashborough), whilst distinct township or port designations separated by more than 2 km, such as No. Liberties (8,3k in 1783AD) and Northern Liberties (7,8k) or Newport (11k in 1775AD) and Newport Port (9,2k in 1774AD), remain separate entries in the active register. Second, at five-arcminute spatial resolution, river-border settlements snap across adjacent cells: Philadelphia (39,95 N, 75,16 W) snaps to New Jersey, Elizabethtown (40,66 N, 74,21 W) snaps to New York and Hagerstown (39,64 N, 77,72 W) snaps to Pennsylvania. Third, Connecticut's 1774AD colonial enumeration reports whole townships rather than nucleated urban cores, placing towns such as Litchfield, Norwalk, New Haven and Norwich higher in rank than southern counties [@greene1932american].

# Sources

<div id="refs"></div>
