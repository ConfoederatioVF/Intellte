---
title: "Settlement Gazetteer of Colonial America to 1754AD"
subtitle: "CENTAUR-II: Atlantic Ports, New England Towns, Spanish Presidios and Indigenous Capitals, 1500 to 1754AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_america_to_1754_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_america_to_1754_spatial.png"
hero_caption: "Spatial distribution of 228 verified colonial towns, forts, missions and Indigenous capitals across 22 sub-regions through 1754AD."
hero_label: "fig:hero-colonial-america-to-1754"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 228 verified urban, military, mission and Indigenous settlement trajectories active in North America and Bermuda between 1500AD and 1754AD. Synthesising colonial town counts, Spanish presidio rolls, French Louisiana post returns and archaeological town syntheses [@bridenbaugh1938cities; @bridenbaugh1955cities; @gerhard1982north; @milner2010eastern], the catalogue spans all 22 sub-regional masks with strongest urban density in Massachusetts Bay-Maine (43 sites), Connecticut (19), New York (19), New Jersey (14), French Louisiana-Illinois (14), Virginia (13) and North Carolina (13). At the 1750-1754AD benchmark, the primary Atlantic ports were Philadelphia (23,8k by 1760AD), New York (18,14k in 1750AD), Boston (18k in 1750AD; 15,65k in 1754AD), Charleston (8k by 1760AD) and Newport (7,5k by 1760AD) [@bridenbaugh1955cities; @wells1975population]. Alongside the 228 included records, `colonial_america_to_1754_source_ledger.json5` documents 26 explicit exclusions comprising merged suburbs, unlocated sixteenth-century toponyms and colonial duplicate aliases.

# Background

Urbanisation in North America prior to 1754AD combined sparse colonial port concentration with dispersing Indigenous confederacy towns [@bridenbaugh1938cities; @milner2010eastern]. In 1500AD, major population agglomerations were wholly Indigenous, led by Late Mississippian and Muskogean ceremonial centres such as Nanih Waiya (20k regional locus in 1500AD) and Puebloan towns along the Rio Grande [@milner2010eastern; @jones1979los]. By the mid-eighteenth century, Atlantic maritime commerce elevated Philadelphia, New York, Boston, Charleston and Newport above 5k inhabitants, while interior New England town commons supported dense networks of 1k-5k townships [@bridenbaugh1955cities; @greene1932american].

# Methodology

Settlement trajectories were compiled from Bridenbaugh's colonial port counts, Greene and Harrington's provincial town tables, Spanish borderland mission registers and GeoNames WGS84 coordinates [@bridenbaugh1938cities; @greene1932american; @gerhard1982north]. All included records carry `sources: ["CENTAUR"]` and were assigned to sub-regional masks via a 12-pixel coastal snap search. Twenty-six candidate toponyms in `colonial_america_to_1754_source_ledger.json5` were excluded under three categories: eight subordinate suburbs absorbed into parent cities (e.g. Northern Liberties, Southwark, Harlem and Noddle's Island), five unlocated sixteenth-century contact toponyms (Cofitachequi, Norumbega, Ajacan, Chicora and Guatari) and thirteen colonial aliases merged into `other_names` (e.g. New Amsterdam, Beverwijck and Fort Christina).

# Testing and Validation

Ledger reconciliation confirms `228` included settlements and `26` excluded entries (`254` total candidates, `0` unaccounted). All 228 records contain valid WGS84 coordinates and positive integer population observations within the 1500-1754AD window (plus immediate 1755-1765AD boundary anchors retained for spline continuity). Figure \ref{fig:sett-1754} plots the rank-size curve and top eight peaks.

<figure class="crd-figure-block" id="fig:sett-1754">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-america-to-1754-settlements/fig4_colonial_america_to_1754_settlements.png" alt="fig:sett-1754" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks across the 228 catalogued centres of Colonial America to 1754AD.</figcaption>
</figure>

# Results

## Top Fifty Settlements by Peak Population

Table \ref{tab:top50-1754} reports the 50 largest settlements in `colonial_america_to_1754_settlements.json` ranked by peak observed population, spanning colonial Atlantic ports, New England townships, Spanish borderland capitals and early Indigenous centres.

<figure class="crd-table-figure" id="tab:top50-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Colony</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1650AD</th><th class="crd-th">1700AD</th><th class="crd-th">1750AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Philadelphia</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">39,95, -75,16</td><td class="crd-td">1682-1760</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">12k</td><td class="crd-td">23,8k (1760)</td></tr>
<tr><td class="crd-td"><strong>New York</strong></td><td class="crd-td">New York</td><td class="crd-td">40,71, -74,01</td><td class="crd-td">1625-1760</td><td class="crd-td">1k</td><td class="crd-td">5k</td><td class="crd-td">22k</td><td class="crd-td">22k (1750)</td></tr>
<tr><td class="crd-td"><strong>Nanih Waiya</strong></td><td class="crd-td">Mississippi</td><td class="crd-td">32,92, -88,95</td><td class="crd-td">1500-1754</td><td class="crd-td">900</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20k (1500)</td></tr>
<tr><td class="crd-td"><strong>Boston</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,36, -71,06</td><td class="crd-td">1630-1765</td><td class="crd-td">2k</td><td class="crd-td">6,7k</td><td class="crd-td">16k</td><td class="crd-td">17k (1740)</td></tr>
<tr><td class="crd-td"><strong>Charleston</strong></td><td class="crd-td">South Carolina</td><td class="crd-td">32,78, -79,93</td><td class="crd-td">1670-1760</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">7,5k</td><td class="crd-td">8k (1760)</td></tr>
<tr><td class="crd-td"><strong>Newport</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">41,49, -71,31</td><td class="crd-td">1639-1760</td><td class="crd-td">300</td><td class="crd-td">2,6k</td><td class="crd-td">6,5k</td><td class="crd-td">7,5k (1760)</td></tr>
<tr><td class="crd-td"><strong>New Haven</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,31, -72,93</td><td class="crd-td">1638-1762</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1754)</td></tr>
<tr><td class="crd-td"><strong>Norwich</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,52, -72,08</td><td class="crd-td">1659-1754</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1754)</td></tr>
<tr><td class="crd-td"><strong>Norfolk</strong></td><td class="crd-td">Virginia</td><td class="crd-td">36,85, -76,29</td><td class="crd-td">1682-1765</td><td class="crd-td">-</td><td class="crd-td">600</td><td class="crd-td">-</td><td class="crd-td">5,2k (1765)</td></tr>
<tr><td class="crd-td"><strong>Newbury</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,77, -70,85</td><td class="crd-td">1635-1765</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1754)</td></tr>
<tr><td class="crd-td"><strong>Marblehead</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,5, -70,86</td><td class="crd-td">1635-1765</td><td class="crd-td">450</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">5k (1765)</td></tr>
<tr><td class="crd-td"><strong>Middletown</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,56, -72,65</td><td class="crd-td">1650-1754</td><td class="crd-td">120</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1754)</td></tr>
<tr><td class="crd-td"><strong>Salem</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,52, -70,9</td><td class="crd-td">1626-1765</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1765)</td></tr>
<tr><td class="crd-td"><strong>Portsmouth</strong></td><td class="crd-td">New Hampshire</td><td class="crd-td">43,08, -70,76</td><td class="crd-td">1630-1765</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1765)</td></tr>
<tr><td class="crd-td"><strong>New London</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,36, -72,1</td><td class="crd-td">1646-1754</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1754)</td></tr>
<tr><td class="crd-td"><strong>Fairfield</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,14, -73,26</td><td class="crd-td">1639-1754</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1754)</td></tr>
<tr><td class="crd-td"><strong>Hartford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,76, -72,69</td><td class="crd-td">1636-1762</td><td class="crd-td">700</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1762)</td></tr>
<tr><td class="crd-td"><strong>Stratford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,18, -73,13</td><td class="crd-td">1639-1754</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1754)</td></tr>
<tr><td class="crd-td"><strong>Providence</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">41,82, -71,41</td><td class="crd-td">1636-1760</td><td class="crd-td">250</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,8k (1760)</td></tr>
<tr><td class="crd-td"><strong>Windsor</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,85, -72,64</td><td class="crd-td">1633-1754</td><td class="crd-td">600</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1754)</td></tr>
<tr><td class="crd-td"><strong>Portland</strong></td><td class="crd-td">Maine</td><td class="crd-td">43,66, -70,26</td><td class="crd-td">1632-1765</td><td class="crd-td">200</td><td class="crd-td">100</td><td class="crd-td">-</td><td class="crd-td">3,8k (1765)</td></tr>
<tr><td class="crd-td"><strong>Gloucester</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,61, -70,66</td><td class="crd-td">1642-1765</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1765)</td></tr>
<tr><td class="crd-td"><strong>Ipswich</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,68, -70,84</td><td class="crd-td">1634-1765</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1765)</td></tr>
<tr><td class="crd-td"><strong>Farmington</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,72, -72,83</td><td class="crd-td">1640-1754</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1754)</td></tr>
<tr><td class="crd-td"><strong>Rehoboth</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,84, -71,25</td><td class="crd-td">1643-1765</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1765)</td></tr>
<tr><td class="crd-td"><strong>Stonington</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,34, -71,91</td><td class="crd-td">1649-1754</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1754)</td></tr>
<tr><td class="crd-td"><strong>Albany</strong></td><td class="crd-td">New York</td><td class="crd-td">42,65, -73,76</td><td class="crd-td">1624-1765</td><td class="crd-td">450</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1765)</td></tr>
<tr><td class="crd-td"><strong>Ticonderoga</strong></td><td class="crd-td">New York</td><td class="crd-td">43,85, -73,42</td><td class="crd-td">1755-1765</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1758)</td></tr>
<tr><td class="crd-td"><strong>Ganondagan</strong></td><td class="crd-td">New York</td><td class="crd-td">42,96, -77,41</td><td class="crd-td">1500-1754</td><td class="crd-td">2,8k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1500)</td></tr>
<tr><td class="crd-td"><strong>New Orleans</strong></td><td class="crd-td">Louisiana</td><td class="crd-td">29,95, -90,08</td><td class="crd-td">1718-1766</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,5k (1766)</td></tr>
<tr><td class="crd-td"><strong>Natchez</strong></td><td class="crd-td">Mississippi</td><td class="crd-td">31,56, -91,4</td><td class="crd-td">1500-1754</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1500)</td></tr>
<tr><td class="crd-td"><strong>Middleborough</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,89, -70,91</td><td class="crd-td">1669-1765</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1765)</td></tr>
<tr><td class="crd-td"><strong>Nantucket</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,28, -70,1</td><td class="crd-td">1659-1765</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">3,3k (1765)</td></tr>
<tr><td class="crd-td"><strong>Zuni</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">35,07, -108,85</td><td class="crd-td">1500-1754</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1500)</td></tr>
<tr><td class="crd-td"><strong>El Paso del Norte</strong></td><td class="crd-td">Texas</td><td class="crd-td">31,7, -106,33</td><td class="crd-td">1680-1754</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1754)</td></tr>
<tr><td class="crd-td"><strong>Elizabethtown</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">40,66, -74,21</td><td class="crd-td">1664-1754</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">3k (1754)</td></tr>
<tr><td class="crd-td"><strong>Lancaster</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">40,04, -76,31</td><td class="crd-td">1729-1760</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1760)</td></tr>
<tr><td class="crd-td"><strong>St. Augustine</strong></td><td class="crd-td">Florida</td><td class="crd-td">29,89, -81,31</td><td class="crd-td">1565-1763</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">3k (1763)</td></tr>
<tr><td class="crd-td"><strong>Newark</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">40,74, -74,17</td><td class="crd-td">1666-1754</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1754)</td></tr>
<tr><td class="crd-td"><strong>Newburyport</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,81, -70,88</td><td class="crd-td">1764-1765</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1764)</td></tr>
<tr><td class="crd-td"><strong>Stamford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,05, -73,54</td><td class="crd-td">1641-1754</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1754)</td></tr>
<tr><td class="crd-td"><strong>Springfield</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,1, -72,59</td><td class="crd-td">1636-1765</td><td class="crd-td">300</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1765)</td></tr>
<tr><td class="crd-td"><strong>Taunton</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,9, -71,09</td><td class="crd-td">1639-1765</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1765)</td></tr>
<tr><td class="crd-td"><strong>Wethersfield</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,71, -72,65</td><td class="crd-td">1634-1754</td><td class="crd-td">550</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1754)</td></tr>
<tr><td class="crd-td"><strong>Hempstead</strong></td><td class="crd-td">New York</td><td class="crd-td">40,71, -73,62</td><td class="crd-td">1644-1754</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1754)</td></tr>
<tr><td class="crd-td"><strong>Groton</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,35, -72,08</td><td class="crd-td">1705-1754</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1754)</td></tr>
<tr><td class="crd-td"><strong>Acoma</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">34,9, -107,58</td><td class="crd-td">1500-1754</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">2,5k (1500)</td></tr>
<tr><td class="crd-td"><strong>Scituate</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,2, -70,73</td><td class="crd-td">1633-1765</td><td class="crd-td">480</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1765)</td></tr>
<tr><td class="crd-td"><strong>Hingham</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,24, -70,89</td><td class="crd-td">1635-1765</td><td class="crd-td">550</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1765)</td></tr>
<tr><td class="crd-td"><strong>Kittery</strong></td><td class="crd-td">Maine</td><td class="crd-td">43,09, -70,74</td><td class="crd-td">1623-1765</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1765)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 50 settlements in Colonial America to 1754AD ordered by peak catalogued population.</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-1754} summarises settlement counts across all 22 sub-regional masks alongside maximum catalogued peak populations, confirming dense town documentation across New England and the Mid-Atlantic versus sparser nodal coverage across western Indigenous domains.

<figure class="crd-table-figure" id="tab:regsum-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Province of New Hampshire</strong></td><td class="crd-td">12</td><td class="crd-td">Portsmouth (4,2k)</td></tr>
<tr><td class="crd-td"><strong>Province of Massachusetts Bay (incl. District of Maine)</strong></td><td class="crd-td">43</td><td class="crd-td">Boston (17k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Rhode Island and Providence Plantations</strong></td><td class="crd-td">8</td><td class="crd-td">Newport (7,5k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Connecticut</strong></td><td class="crd-td">19</td><td class="crd-td">New Haven (5,4k)</td></tr>
<tr><td class="crd-td"><strong>Province of New York (incl. Iroquois Mohawk-Hudson)</strong></td><td class="crd-td">19</td><td class="crd-td">New York (22k)</td></tr>
<tr><td class="crd-td"><strong>Province of New Jersey</strong></td><td class="crd-td">14</td><td class="crd-td">Philadelphia (23,8k)</td></tr>
<tr><td class="crd-td"><strong>Province of Pennsylvania</strong></td><td class="crd-td">9</td><td class="crd-td">Lancaster (3k)</td></tr>
<tr><td class="crd-td"><strong>Lower Counties on Delaware</strong></td><td class="crd-td">2</td><td class="crd-td">Lewes (700)</td></tr>
<tr><td class="crd-td"><strong>Province of Maryland</strong></td><td class="crd-td">9</td><td class="crd-td">Annapolis (1,8k)</td></tr>
<tr><td class="crd-td"><strong>Colony and Dominion of Virginia (incl. Trans-Allegheny West)</strong></td><td class="crd-td">13</td><td class="crd-td">Norfolk (5,2k)</td></tr>
<tr><td class="crd-td"><strong>Province of North Carolina</strong></td><td class="crd-td">13</td><td class="crd-td">New Bern (1,4k)</td></tr>
<tr><td class="crd-td"><strong>Province of South Carolina</strong></td><td class="crd-td">8</td><td class="crd-td">Charleston (8k)</td></tr>
<tr><td class="crd-td"><strong>Province of Georgia</strong></td><td class="crd-td">5</td><td class="crd-td">Savannah (2,4k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Bermuda</strong></td><td class="crd-td">3</td><td class="crd-td">St. George's (2,2k)</td></tr>
<tr><td class="crd-td"><strong>Spanish Florida (San Agustin and Apalachee)</strong></td><td class="crd-td">7</td><td class="crd-td">St. Augustine (3k)</td></tr>
<tr><td class="crd-td"><strong>Spanish New Mexico and Pimeria Alta Pueblos</strong></td><td class="crd-td">9</td><td class="crd-td">Zuni (3,2k)</td></tr>
<tr><td class="crd-td"><strong>Spanish Texas (San Antonio and Presidio Missions)</strong></td><td class="crd-td">4</td><td class="crd-td">San Antonio (900)</td></tr>
<tr><td class="crd-td"><strong>French Louisiana, Mobile and Pays des Illinois</strong></td><td class="crd-td">14</td><td class="crd-td">Nanih Waiya (20k)</td></tr>
<tr><td class="crd-td"><strong>Trans-Appalachian Indigenous Nations</strong></td><td class="crd-td">10</td><td class="crd-td">Coweta (1,4k)</td></tr>
<tr><td class="crd-td"><strong>Great Plains and Upper Missouri Indigenous Nations</strong></td><td class="crd-td">1</td><td class="crd-td">El Paso del Norte (3,1k)</td></tr>
<tr><td class="crd-td"><strong>Far West, Great Basin, California and Columbia Plateau Indigenous Nations</strong></td><td class="crd-td">3</td><td class="crd-td">Oraibi (2,4k)</td></tr>
<tr><td class="crd-td"><strong>Alaska and Aleutian Russian-Indigenous Early Contact</strong></td><td class="crd-td">3</td><td class="crd-td">Sitka (950)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban or nodal centre across all 22 sub-regions to 1754AD (228 total sites).</figcaption>
</figure>

# Limitations

Two spatial artefacts affect sub-regional aggregation in the raw gazetteer. First, at 5-arcminute grid resolution, Philadelphia (`39,95 N, 75,16 W`) falls on the Delaware River border cell and snaps to the `ca1_new_jersey` mask rather than `ca1_pennsylvania`, although its colony field retains `Pennsylvania`. Second, interior Plains and Far West Indigenous populations remained predominantly mobile or non-nucleated prior to 1754AD, so sub-regional totals depend on areal density priors rather than town sums [@ubelaker1988north].

# Sources

<div id="refs"></div>
