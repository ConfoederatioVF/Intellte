---
title: "Settlement Gazetteer of Colonial America to 1754AD"
subtitle: "CENTAUR-II: Atlantic Ports, New England Towns, Spanish Presidios and Indigenous Capitals, 1500AD to 1754AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_america_to_1754_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_america_to_1754_spatial.png"
hero_caption: "Spatial distribution of 860 colonial towns, forts, missions and Indigenous capitals across 22 sub-regions through 1754AD."
hero_label: "fig:hero-colonial-america-to-1754"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 860 urban, military, mission and Indigenous settlement trajectories active across North America and Bermuda between 1500AD and 1754AD (`9.117.969 km²`). Synthesising colonial town censuses, Spanish presidio and mission *padrones*, French Louisiana post returns, archaeological town syntheses and conservative 1754AD back-projections from early federal municipal counts [@bridenbaugh1938cities; @bridenbaugh1955cities; @gerhard1982north; @milner2010eastern], the catalogue covers all 22 sub-regional masks with highest density in Massachusetts Bay-Maine (202 sites), New Hampshire (126), New York (98), Connecticut (62), New Jersey (49), Pennsylvania (38), Virginia (35) and Spanish New Mexico (32). At the 1750-1754AD benchmark, the largest settlements in the register were New York (22k in 1750AD, 14,2k in 1754AD), Philadelphia (20,5k in 1754AD), the sixteenth-century Choctaw ceremonial locus Nanih Waiya (20k in 1500AD), Boston (17k in 1740AD, 15,65k in 1754AD), Charleston (7,8k in 1754AD) and Newport (6,8k in 1754AD) [@bridenbaugh1955cities; @wells1975population]. Alongside the 860 included entries, `colonial_america_to_1754_source_ledger.json5` documents 12 excluded duplicate aliases out of 872 total candidates.

# Background

Urbanisation in North America prior to 1754AD combined rising Atlantic port concentration with dispersing Indigenous confederacy towns [@bridenbaugh1938cities; @milner2010eastern]. In 1500AD, major population centres were entirely Indigenous, led by Late Mississippian and Muskogean ceremonial sites such as Nanih Waiya (20k in 1500AD) and Natchez (3,5k), Iroquois towns such as Ganondagan (3,5k) and Puebloan hubs along the Rio Grande and Colorado Plateau such as Zuni (3,2k) [@milner2010eastern; @jones1979los]. By the mid-eighteenth century, maritime commerce elevated New York, Philadelphia, Boston, Charleston and Newport above 5k inhabitants, while interior New England commons sustained dense networks of 1k to 5k townships [@bridenbaugh1955cities; @greene1932american].

# Methodology

Settlement trajectories were compiled from Bridenbaugh's colonial port counts, Greene and Harrington's provincial town tables, Spanish borderland mission registers, conservative 1790AD federal census town back-projections for settlements founded prior to 1754AD and GeoNames WGS84 coordinates [@bridenbaugh1938cities; @greene1932american; @gerhard1982north]. All 860 included records carry `CENTAUR` provenance and map onto the 22 sub-regional masks using a six-pixel coastal snap search. Twelve candidate entries in `colonial_america_to_1754_source_ledger.json5` were marked excluded as close-pair duplicates or colonial aliases within 2 to 12,82 km (such as `No. Liberties` merged into `Northern Liberties`, `Flatbush` into `Brooklyn`, `Manhattan` into `New York`, `Queens` into `Newtown`, `Staten Island` into `Richmondtown`, `Provincetown` into `Truro` and `Portsmouth` into `Norfolk`).

# Testing and Validation

Ledger reconciliation confirms `860` included settlements and `12` excluded entries (`872` total candidates, `0` unaccounted). All 860 records carry valid WGS84 coordinates and non-zero integer population counts within the 1500AD to 1754AD window. Figure \ref{fig:sett-1754} plots the rank-size curve and the twelve leading settlement peaks.

<figure class="crd-figure-block" id="fig:sett-1754">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-america-to-1754-settlements/fig4_colonial_america_to_1754_settlements.png" alt="fig:sett-1754" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading twelve settlement peaks across the 860 catalogued centres of Colonial America to 1754AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-1754} reports the top 45 settlements in `colonial_america_to_1754_settlements.json` ranked by peak observed population, spanning Atlantic seaports, New England townships, Spanish borderland capitals and early Indigenous centres.

<figure class="crd-table-figure" id="tab:top45-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Colony</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1650AD</th><th class="crd-th">1700AD</th><th class="crd-th">1750AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>New York</strong></td><td class="crd-td">New York</td><td class="crd-td">40,71, -74,01</td><td class="crd-td">1625-1754AD</td><td class="crd-td">1k</td><td class="crd-td">5k</td><td class="crd-td">22k</td><td class="crd-td">22k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Philadelphia</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">39,95, -75,16</td><td class="crd-td">1682-1754AD</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">12k</td><td class="crd-td">20,5k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Nanih Waiya</strong></td><td class="crd-td">Mississippi</td><td class="crd-td">32,92, -88,95</td><td class="crd-td">1500-1754AD</td><td class="crd-td">900</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Boston</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,36, -71,06</td><td class="crd-td">1630-1754AD</td><td class="crd-td">2k</td><td class="crd-td">6,7k</td><td class="crd-td">16k</td><td class="crd-td">17k (1740AD)</td></tr>
<tr><td class="crd-td"><strong>Charleston</strong></td><td class="crd-td">South Carolina</td><td class="crd-td">32,78, -79,93</td><td class="crd-td">1670-1754AD</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">7,5k</td><td class="crd-td">7,8k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Newport</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">41,54, -71,29</td><td class="crd-td">1639-1754AD</td><td class="crd-td">300</td><td class="crd-td">2,6k</td><td class="crd-td">6,5k</td><td class="crd-td">6,8k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>New Haven</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,31, -72,93</td><td class="crd-td">1638-1754AD</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Norwich</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,52, -72,08</td><td class="crd-td">1659-1754AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Newbury</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,77, -70,85</td><td class="crd-td">1635-1754AD</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Marblehead</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,5, -70,86</td><td class="crd-td">1635-1754AD</td><td class="crd-td">450</td><td class="crd-td">1,7k</td><td class="crd-td">4,4k</td><td class="crd-td">4,6k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Middletown</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,56, -72,65</td><td class="crd-td">1650-1754AD</td><td class="crd-td">120</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Salem</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,52, -70,9</td><td class="crd-td">1626-1754AD</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Fairfield</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,14, -73,26</td><td class="crd-td">1639-1754AD</td><td class="crd-td">350</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>New London</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,36, -72,1</td><td class="crd-td">1646-1754AD</td><td class="crd-td">250</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Norfolk</strong></td><td class="crd-td">Virginia</td><td class="crd-td">36,85, -76,29</td><td class="crd-td">1682-1754AD</td><td class="crd-td">-</td><td class="crd-td">600</td><td class="crd-td">-</td><td class="crd-td">4,1k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Hartford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,76, -72,69</td><td class="crd-td">1636-1754AD</td><td class="crd-td">700</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Stratford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,18, -73,13</td><td class="crd-td">1639-1754AD</td><td class="crd-td">320</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Dartmouth</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,57, -70,96</td><td class="crd-td">1675-1754AD</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Portsmouth</strong></td><td class="crd-td">New Hampshire</td><td class="crd-td">43,08, -70,76</td><td class="crd-td">1630-1754AD</td><td class="crd-td">350</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Windsor</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,85, -72,64</td><td class="crd-td">1633-1754AD</td><td class="crd-td">600</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Farmington</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,72, -72,83</td><td class="crd-td">1640-1754AD</td><td class="crd-td">250</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Ipswich</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,68, -70,84</td><td class="crd-td">1634-1754AD</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Providence</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">41,82, -71,41</td><td class="crd-td">1636-1754AD</td><td class="crd-td">250</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,6k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Wallingford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,46, -72,8</td><td class="crd-td">1680-1754AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Ganondagan</strong></td><td class="crd-td">New York</td><td class="crd-td">42,96, -77,41</td><td class="crd-td">1500-1754AD</td><td class="crd-td">2,8k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Natchez</strong></td><td class="crd-td">Mississippi</td><td class="crd-td">31,56, -91,4</td><td class="crd-td">1500-1754AD</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Rehoboth</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,84, -71,25</td><td class="crd-td">1643-1754AD</td><td class="crd-td">320</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Stonington</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,34, -71,91</td><td class="crd-td">1649-1754AD</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">-</td><td class="crd-td">3,5k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Bridgewater</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,99, -70,97</td><td class="crd-td">1660-1754AD</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">-</td><td class="crd-td">3,4k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Gloucester</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,61, -70,66</td><td class="crd-td">1642-1754AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Zuni</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">35,07, -108,85</td><td class="crd-td">1500-1754AD</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>El Paso del Norte</strong></td><td class="crd-td">Texas</td><td class="crd-td">31,7, -106,33</td><td class="crd-td">1680-1754AD</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,63, -72,24</td><td class="crd-td">1710-1754AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Albany</strong></td><td class="crd-td">New York</td><td class="crd-td">42,65, -73,76</td><td class="crd-td">1624-1754AD</td><td class="crd-td">450</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Elizabethtown</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">40,66, -74,21</td><td class="crd-td">1664-1754AD</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">3k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>New Orleans</strong></td><td class="crd-td">Louisiana</td><td class="crd-td">29,95, -90,08</td><td class="crd-td">1718-1754AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Middleborough</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,89, -70,91</td><td class="crd-td">1669-1754AD</td><td class="crd-td">-</td><td class="crd-td">750</td><td class="crd-td">-</td><td class="crd-td">2,9k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Nantucket</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,28, -70,1</td><td class="crd-td">1659-1754AD</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">2,9k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Newark</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">40,74, -74,17</td><td class="crd-td">1666-1754AD</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Norwalk</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,09, -73,42</td><td class="crd-td">1660-1754AD</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">-</td><td class="crd-td">2,9k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Northern Liberties</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">39,97, -75,18</td><td class="crd-td">1754-1754AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Stamford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,05, -73,54</td><td class="crd-td">1641-1754AD</td><td class="crd-td">250</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Groton</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,35, -72,07</td><td class="crd-td">1710-1754AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Lyme</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,4, -72,33</td><td class="crd-td">1680-1754AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Woodbury</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,56, -73,21</td><td class="crd-td">1690-1754AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1754AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Colonial America to 1754AD ordered by peak catalogued population (n=860 total).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-1754} summarises settlement counts across all 22 sub-regional masks alongside maximum catalogued peak populations, highlighting dense town enumeration in New England and the Mid-Atlantic versus sparser nodal coverage across western Indigenous domains. Table \ref{tab:excluded-1754} details all 12 excluded duplicate candidates recorded in the source ledger.

<figure class="crd-table-figure" id="tab:regsum-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Province of New Hampshire</strong></td><td class="crd-td">126</td><td class="crd-td">Portsmouth (3,8k)</td></tr>
<tr><td class="crd-td"><strong>Province of Massachusetts Bay (incl. District of Maine)</strong></td><td class="crd-td">202</td><td class="crd-td">Boston (17k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Rhode Island and Providence Plantations</strong></td><td class="crd-td">28</td><td class="crd-td">Newport (6,8k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Connecticut</strong></td><td class="crd-td">62</td><td class="crd-td">New Haven (5,4k)</td></tr>
<tr><td class="crd-td"><strong>Province of New York (incl. Iroquois Mohawk-Hudson)</strong></td><td class="crd-td">98</td><td class="crd-td">New York (22k)</td></tr>
<tr><td class="crd-td"><strong>Province of New Jersey</strong></td><td class="crd-td">49</td><td class="crd-td">Philadelphia (20,5k)</td></tr>
<tr><td class="crd-td"><strong>Province of Pennsylvania</strong></td><td class="crd-td">38</td><td class="crd-td">Northern Liberties (2,8k)</td></tr>
<tr><td class="crd-td"><strong>Lower Counties on Delaware</strong></td><td class="crd-td">10</td><td class="crd-td">Wilmington (1,2k)</td></tr>
<tr><td class="crd-td"><strong>Province of Maryland</strong></td><td class="crd-td">30</td><td class="crd-td">Annapolis (1,8k)</td></tr>
<tr><td class="crd-td"><strong>Colony and Dominion of Virginia (incl. Trans-Allegheny West)</strong></td><td class="crd-td">35</td><td class="crd-td">Norfolk (4,1k)</td></tr>
<tr><td class="crd-td"><strong>Province of North Carolina</strong></td><td class="crd-td">15</td><td class="crd-td">New Bern (1,1k)</td></tr>
<tr><td class="crd-td"><strong>Province of South Carolina</strong></td><td class="crd-td">21</td><td class="crd-td">Charleston (7,8k)</td></tr>
<tr><td class="crd-td"><strong>Province of Georgia</strong></td><td class="crd-td">7</td><td class="crd-td">Savannah (2,1k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Bermuda</strong></td><td class="crd-td">8</td><td class="crd-td">St. George's (2,2k)</td></tr>
<tr><td class="crd-td"><strong>Spanish Florida (San Agustin and Apalachee)</strong></td><td class="crd-td">13</td><td class="crd-td">St. Augustine (2,5k)</td></tr>
<tr><td class="crd-td"><strong>Spanish New Mexico and Pimeria Alta Pueblos</strong></td><td class="crd-td">32</td><td class="crd-td">Zuni (3,2k)</td></tr>
<tr><td class="crd-td"><strong>Spanish Texas (San Antonio and Presidio Missions)</strong></td><td class="crd-td">6</td><td class="crd-td">San Antonio (900)</td></tr>
<tr><td class="crd-td"><strong>French Louisiana, Mobile and Pays des Illinois</strong></td><td class="crd-td">21</td><td class="crd-td">Nanih Waiya (20k)</td></tr>
<tr><td class="crd-td"><strong>Trans-Appalachian Indigenous Nations</strong></td><td class="crd-td">29</td><td class="crd-td">Tuckabatchee (1,5k)</td></tr>
<tr><td class="crd-td"><strong>Great Plains and Upper Missouri Indigenous Nations</strong></td><td class="crd-td">9</td><td class="crd-td">El Paso del Norte (3,1k)</td></tr>
<tr><td class="crd-td"><strong>Far West, Great Basin, California and Columbia Plateau Indigenous Nations</strong></td><td class="crd-td">15</td><td class="crd-td">Orayvi (2,4k)</td></tr>
<tr><td class="crd-td"><strong>Alaska and Aleutian Russian-Indigenous Early Contact</strong></td><td class="crd-td">6</td><td class="crd-td">Sitka (950)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban or nodal centre across all 22 sub-regions to 1754AD (860 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Coweta</strong></td><td class="crd-td">Alabama</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated 12,82 km matching-name/HYDE-centroid twin into canonical Coweta-Alabama.</td></tr>
<tr><td class="crd-td"><strong>No. Liberties</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated 3,09 km matching-name/HYDE-centroid twin into canonical Northern Liberties-Pennsylvania.</td></tr>
<tr><td class="crd-td"><strong>Vinalhaven</strong></td><td class="crd-td">Maine</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated 0 km matching-name/HYDE-centroid twin into canonical Vinalhaven-Maine.</td></tr>
<tr><td class="crd-td"><strong>Flatbush</strong></td><td class="crd-td">New York</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'Brooklyn' (O'Callaghan (1849-51) Documentary History of New-York; Greene &amp; Harrington (1932); Wells (1975); 1698-1771 NY Censuses).</td></tr>
<tr><td class="crd-td"><strong>Pembroke</strong></td><td class="crd-td">Bermuda</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'St. George's' (Greene &amp; Harrington (1932); Wells (1975); Packwood (1975); Lefroy (1877) Memorials of the Bermudas).</td></tr>
<tr><td class="crd-td"><strong>Ysleta del Sur</strong></td><td class="crd-td">Texas</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'El Paso del Norte' (Bolton (1915); Jackson (1994); Chipman (1992) Spanish Texas; San Antonio &amp; La Bahia Padrones).</td></tr>
<tr><td class="crd-td"><strong>Provincetown</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'Truro' (Greene &amp; Harrington (1932); Wells (1975); Benton (1905) 1765 &amp; 1776 Massachusetts Provincial Censuses).</td></tr>
<tr><td class="crd-td"><strong>Lawrence</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'Lawrenceville' (CENTAUR Colonial Registry).</td></tr>
<tr><td class="crd-td"><strong>Portsmouth</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'Norfolk' (Greene &amp; Harrington (1932); Morgan (1975); Sutherland (1936); 1782-1785 Virginia State Enumerations).</td></tr>
<tr><td class="crd-td"><strong>Manhattan</strong></td><td class="crd-td">New York</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'New York' (U.S. Bureau of the Census (1790) Return of the Whole Number of Persons, back-projected to 1754/1783).</td></tr>
<tr><td class="crd-td"><strong>Queens</strong></td><td class="crd-td">New York</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'Newtown' (U.S. Bureau of the Census (1790) Return of the Whole Number of Persons, back-projected to 1754/1783).</td></tr>
<tr><td class="crd-td"><strong>Staten Island</strong></td><td class="crd-td">New York</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Consolidated duplicate coordinate/alias into 'Richmondtown' (U.S. Bureau of the Census (1790) Return of the Whole Number of Persons, back-projected to 1754/1783).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded duplicate candidates in the Colonial America to 1754AD source ledger (n=12, consolidated into canonical parent towns).</figcaption>
</figure>

# Limitations

Two spatial artefacts affect sub-regional aggregation in the raw gazetteer. First, at five-arcminute resolution, borderland ports sitting on major rivers snap across adjacent grid cells: `Philadelphia` (`39,95 N, 75,16 W`) snaps to `ca1_new_jersey`, `Elizabethtown` (`40,66 N, 74,21 W`) snaps to `ca1_new_york`, and `El Paso del Norte` (`31,70 N, 106,33 W`) snaps to `ca1_plains_indigenous_1754`, although every record preserves its canonical province or state label. Second, interior Plains and Far West Indigenous populations remained predominantly mobile or non-nucleated prior to 1754AD, so sub-regional totals rely on areal kriging priors rather than town sums [@ubelaker1988north].

# Sources

<div id="refs"></div>
