---
title: "Settlement Gazetteer of Colonial America to 1783AD"
subtitle: "CENTAUR-II: Revolutionary Ports, Frontier Stations and Alta California Missions, 1754 to 1783AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_america_to_1783_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_america_to_1783_spatial.png"
hero_caption: "Spatial distribution of 242 verified towns, forts, frontier stations and Spanish missions across 26 sub-regions through 1783AD."
hero_label: "fig:hero-colonial-america-to-1783"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents the 242 verified settlements active across North America and Bermuda between 1754AD and 1783AD under Operation Viscount CENTAUR-II. Combining pre-Revolutionary urban series, Revolutionary-era town censuses (including the 1774AD Connecticut and 1775AD Rhode Island enumerations), frontier stockades in Kentucky and Tennessee, Vermont townships and eleven Alta California Franciscan missions founded between 1769AD and 1782AD [@bridenbaugh1955cities; @greene1932american; @cook1976population], the catalogue spans all 26 sub-regional masks. Leading Atlantic cities at the 1783AD Treaty of Paris were Philadelphia (36k), New York (24k in 1783AD, 49,4k by 1790AD), Boston (16k in 1783AD, 18,3k in 1790AD), Charleston (12k in 1783AD, 16,36k in 1790AD) and Baltimore (13,5k by 1790AD) [@forstall1996population; @bridenbaugh1955cities]. Twenty-five candidate toponyms in `colonial_america_to_1783_source_ledger.json5` are recorded as excluded to avoid suburban double counting or unverified coordinates.

# Background

Between 1754AD and 1783AD, urban geography in British and early Republican North America shifted markedly. Philadelphia and New York surpassed Boston in size, whilst Baltimore expanded from a small Chesapeake tobacco port into a major grain-exporting hub [@bridenbaugh1955cities; @forstall1996population]. Simultaneously, trans-Appalachian settlement added fortified stations at Boonesborough, Harrodsburg, Lexington, Louisville and Nashborough, while Spanish expansion established missions and presidios from San Diego (1769AD) and Monterey (1770AD) to San Francisco (1776AD) and Santa Barbara (1782AD) [@cook1976population; @gerhard1982north].

# Methodology

Records in `colonial_america_to_1783_settlements.json` filter all `CENTAUR` urban trajectories to observations falling within the 1754-1783AD domain (preserving immediate 1730-1750AD and 1790-1797AD boundary anchors for temporal spline stability). Each entry carries `sources: ["CENTAUR"]` and maps to one of the 26 sub-regional masks via a 12-pixel coastal snap search. In `colonial_america_to_1783_source_ledger.json5`, 25 candidate names are excluded: seven Philadelphia/New York/Boston/Petersburg suburbs, five unlocated sixteenth-century toponyms and thirteen duplicate colonial aliases.

# Testing and Validation

Ledger audit confirms `242` included settlements and `25` excluded entries (`267` total candidates, `0` unaccounted). All 242 records pass coordinate validity and integer population schema checks. Figure \ref{fig:sett-1783} shows the rank-size distribution and top eight settlement peaks.

<figure class="crd-figure-block" id="fig:sett-1783">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-america-to-1783-settlements/fig4_colonial_america_to_1783_settlements.png" alt="fig:sett-1783" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks across the 242 catalogued centres of Colonial America to 1783AD.</figcaption>
</figure>

# Results

## Top Fifty Settlements by Peak Population

Table \ref{tab:top50-1783} lists the 50 largest settlements ranked by peak population within the 1754-1783AD boundary window (including 1790AD federal census anchors retained for boundary continuity).

<figure class="crd-table-figure" id="tab:top50-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Colony or State</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1754AD</th><th class="crd-th">1775AD</th><th class="crd-th">1783AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Philadelphia</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">39,95, -75,16</td><td class="crd-td">1730-1790</td><td class="crd-td">20,5k</td><td class="crd-td">35k</td><td class="crd-td">36k</td><td class="crd-td">36k (1783)</td></tr>
<tr><td class="crd-td"><strong>New York</strong></td><td class="crd-td">New York</td><td class="crd-td">40,71, -74,01</td><td class="crd-td">1730-1790</td><td class="crd-td">14,2k</td><td class="crd-td">25k</td><td class="crd-td">23,6k</td><td class="crd-td">33,1k (1790)</td></tr>
<tr><td class="crd-td"><strong>Boston</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,36, -71,06</td><td class="crd-td">1730-1790</td><td class="crd-td">15,6k</td><td class="crd-td">16k</td><td class="crd-td">16k</td><td class="crd-td">18,3k (1790)</td></tr>
<tr><td class="crd-td"><strong>Charleston</strong></td><td class="crd-td">South Carolina</td><td class="crd-td">32,78, -79,93</td><td class="crd-td">1730-1790</td><td class="crd-td">7,8k</td><td class="crd-td">12k</td><td class="crd-td">12,5k</td><td class="crd-td">16,4k (1790)</td></tr>
<tr><td class="crd-td"><strong>Baltimore</strong></td><td class="crd-td">Maryland</td><td class="crd-td">39,29, -76,61</td><td class="crd-td">1729-1790</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">9,5k</td><td class="crd-td">13,5k (1790)</td></tr>
<tr><td class="crd-td"><strong>Newport</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">41,49, -71,31</td><td class="crd-td">1740-1790</td><td class="crd-td">6,8k</td><td class="crd-td">11k</td><td class="crd-td">7,5k</td><td class="crd-td">11k (1775)</td></tr>
<tr><td class="crd-td"><strong>Northern Liberties</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">39,97, -75,15</td><td class="crd-td">1790-1790</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,9k (1790)</td></tr>
<tr><td class="crd-td"><strong>New Haven</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,31, -72,93</td><td class="crd-td">1730-1790</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">8,3k (1774)</td></tr>
<tr><td class="crd-td"><strong>Salem</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,52, -70,9</td><td class="crd-td">1740-1790</td><td class="crd-td">4,4k</td><td class="crd-td">5,3k</td><td class="crd-td">6,4k</td><td class="crd-td">7,9k (1790)</td></tr>
<tr><td class="crd-td"><strong>Norwich</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,52, -72,08</td><td class="crd-td">1740-1783</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">7,3k (1774)</td></tr>
<tr><td class="crd-td"><strong>Providence</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">41,82, -71,41</td><td class="crd-td">1730-1790</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">6,4k (1790)</td></tr>
<tr><td class="crd-td"><strong>Norfolk</strong></td><td class="crd-td">Virginia</td><td class="crd-td">36,85, -76,29</td><td class="crd-td">1740-1790</td><td class="crd-td">4,1k</td><td class="crd-td">6,3k</td><td class="crd-td">2,4k</td><td class="crd-td">6,3k (1775)</td></tr>
<tr><td class="crd-td"><strong>Farmington</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,72, -72,83</td><td class="crd-td">1730-1783</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">6,1k (1774)</td></tr>
<tr><td class="crd-td"><strong>New London</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,36, -72,1</td><td class="crd-td">1740-1783</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,9k (1774)</td></tr>
<tr><td class="crd-td"><strong>Marblehead</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,5, -70,86</td><td class="crd-td">1730-1790</td><td class="crd-td">4,6k</td><td class="crd-td">5,2k</td><td class="crd-td">5,4k</td><td class="crd-td">5,7k (1790)</td></tr>
<tr><td class="crd-td"><strong>Stratford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,18, -73,13</td><td class="crd-td">1740-1783</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5,6k (1774)</td></tr>
<tr><td class="crd-td"><strong>Stonington</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,34, -71,91</td><td class="crd-td">1740-1783</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">5,5k (1783)</td></tr>
<tr><td class="crd-td"><strong>New Orleans</strong></td><td class="crd-td">Louisiana</td><td class="crd-td">29,95, -90,08</td><td class="crd-td">1740-1797</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">5,5k (1797)</td></tr>
<tr><td class="crd-td"><strong>Gloucester</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,61, -70,66</td><td class="crd-td">1740-1790</td><td class="crd-td">3,4k</td><td class="crd-td">4,2k</td><td class="crd-td">4,8k</td><td class="crd-td">5,3k (1790)</td></tr>
<tr><td class="crd-td"><strong>Newbury</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,77, -70,85</td><td class="crd-td">1740-1783</td><td class="crd-td">5,1k</td><td class="crd-td">3,3k</td><td class="crd-td">3,7k</td><td class="crd-td">5,1k (1754)</td></tr>
<tr><td class="crd-td"><strong>Middletown</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,56, -72,65</td><td class="crd-td">1740-1783</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k (1783)</td></tr>
<tr><td class="crd-td"><strong>Hartford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,76, -72,69</td><td class="crd-td">1730-1790</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5k (1774)</td></tr>
<tr><td class="crd-td"><strong>Fairfield</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,14, -73,26</td><td class="crd-td">1740-1783</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,9k (1774)</td></tr>
<tr><td class="crd-td"><strong>Newburyport</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,81, -70,88</td><td class="crd-td">1764-1790</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4,3k</td><td class="crd-td">4,8k (1790)</td></tr>
<tr><td class="crd-td"><strong>Lancaster</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">40,04, -76,31</td><td class="crd-td">1729-1783</td><td class="crd-td">2,4k</td><td class="crd-td">4,8k</td><td class="crd-td">3,6k</td><td class="crd-td">4,8k (1775)</td></tr>
<tr><td class="crd-td"><strong>Portsmouth</strong></td><td class="crd-td">New Hampshire</td><td class="crd-td">43,08, -70,76</td><td class="crd-td">1740-1790</td><td class="crd-td">3,8k</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k</td><td class="crd-td">4,7k (1790)</td></tr>
<tr><td class="crd-td"><strong>Nantucket</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,28, -70,1</td><td class="crd-td">1740-1790</td><td class="crd-td">2,9k</td><td class="crd-td">4,2k</td><td class="crd-td">4,4k</td><td class="crd-td">4,6k (1790)</td></tr>
<tr><td class="crd-td"><strong>El Paso del Norte</strong></td><td class="crd-td">Texas</td><td class="crd-td">31,7, -106,33</td><td class="crd-td">1730-1783</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k (1783)</td></tr>
<tr><td class="crd-td"><strong>Middleborough</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,89, -70,91</td><td class="crd-td">1730-1790</td><td class="crd-td">2,9k</td><td class="crd-td">3,9k</td><td class="crd-td">4,3k</td><td class="crd-td">4,5k (1790)</td></tr>
<tr><td class="crd-td"><strong>St. Augustine</strong></td><td class="crd-td">Florida</td><td class="crd-td">29,89, -81,31</td><td class="crd-td">1750-1783</td><td class="crd-td">2,2k</td><td class="crd-td">3,2k</td><td class="crd-td">4,5k</td><td class="crd-td">4,5k (1783)</td></tr>
<tr><td class="crd-td"><strong>Rehoboth</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,84, -71,25</td><td class="crd-td">1740-1783</td><td class="crd-td">3,5k</td><td class="crd-td">4,1k</td><td class="crd-td">4,4k</td><td class="crd-td">4,4k (1783)</td></tr>
<tr><td class="crd-td"><strong>Ipswich</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">42,68, -70,84</td><td class="crd-td">1740-1783</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td><td class="crd-td">4,3k (1783)</td></tr>
<tr><td class="crd-td"><strong>Elizabethtown</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">40,66, -74,21</td><td class="crd-td">1730-1783</td><td class="crd-td">3k</td><td class="crd-td">4k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1783)</td></tr>
<tr><td class="crd-td"><strong>Newark</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">40,74, -74,17</td><td class="crd-td">1730-1783</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1783)</td></tr>
<tr><td class="crd-td"><strong>Albany</strong></td><td class="crd-td">New York</td><td class="crd-td">42,65, -73,76</td><td class="crd-td">1730-1790</td><td class="crd-td">3k</td><td class="crd-td">4k</td><td class="crd-td">3,6k</td><td class="crd-td">4k (1775)</td></tr>
<tr><td class="crd-td"><strong>Groton</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,35, -72,08</td><td class="crd-td">1730-1783</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1783)</td></tr>
<tr><td class="crd-td"><strong>Waterbury</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,56, -73,05</td><td class="crd-td">1730-1783</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,8k (1774)</td></tr>
<tr><td class="crd-td"><strong>Windsor</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,85, -72,64</td><td class="crd-td">1730-1783</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k (1754)</td></tr>
<tr><td class="crd-td"><strong>Portland</strong></td><td class="crd-td">Maine</td><td class="crd-td">43,66, -70,26</td><td class="crd-td">1740-1783</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,1k</td><td class="crd-td">3,8k (1765)</td></tr>
<tr><td class="crd-td"><strong>Richmond</strong></td><td class="crd-td">Virginia</td><td class="crd-td">37,55, -77,46</td><td class="crd-td">1737-1790</td><td class="crd-td">700</td><td class="crd-td">1,8k</td><td class="crd-td">2,8k</td><td class="crd-td">3,8k (1790)</td></tr>
<tr><td class="crd-td"><strong>Stamford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,05, -73,54</td><td class="crd-td">1740-1783</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k (1783)</td></tr>
<tr><td class="crd-td"><strong>Wethersfield</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,71, -72,65</td><td class="crd-td">1730-1783</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,6k (1783)</td></tr>
<tr><td class="crd-td"><strong>Schenectady</strong></td><td class="crd-td">New York</td><td class="crd-td">42,81, -73,94</td><td class="crd-td">1730-1783</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">3,6k</td><td class="crd-td">3,6k (1783)</td></tr>
<tr><td class="crd-td"><strong>Taunton</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">41,9, -71,09</td><td class="crd-td">1740-1783</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k (1783)</td></tr>
<tr><td class="crd-td"><strong>South Kingstown</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">41,45, -71,52</td><td class="crd-td">1740-1783</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k (1783)</td></tr>
<tr><td class="crd-td"><strong>Hempstead</strong></td><td class="crd-td">New York</td><td class="crd-td">40,71, -73,62</td><td class="crd-td">1730-1783</td><td class="crd-td">2,6k</td><td class="crd-td">3,3k</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k (1783)</td></tr>
<tr><td class="crd-td"><strong>Ticonderoga</strong></td><td class="crd-td">New York</td><td class="crd-td">43,85, -73,42</td><td class="crd-td">1755-1783</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">180</td><td class="crd-td">3,5k (1758)</td></tr>
<tr><td class="crd-td"><strong>Berwick</strong></td><td class="crd-td">Maine</td><td class="crd-td">43,27, -70,86</td><td class="crd-td">1740-1783</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k (1783)</td></tr>
<tr><td class="crd-td"><strong>Guilford</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,29, -72,68</td><td class="crd-td">1740-1783</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,2k (1783)</td></tr>
<tr><td class="crd-td"><strong>Litchfield</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">41,75, -73,19</td><td class="crd-td">1740-1783</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,2k (1783)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 50 settlements in Colonial America to 1783AD ordered by peak catalogued population.</figcaption>
</figure>

## Sub-Regional Coverage Across Twenty-Six Masks

Table \ref{tab:regsum-1783} aggregates the 242 settlements across all 26 sub-regions, highlighting newly added centres in Alta California (11 mission-presidio sites), Kentucky (5 frontier stations), Vermont (3 towns) and Watauga-Cumberland (2 sites).

<figure class="crd-table-figure" id="tab:regsum-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Province of New Hampshire</strong></td><td class="crd-td">11</td><td class="crd-td">Portsmouth (4,7k)</td></tr>
<tr><td class="crd-td"><strong>Province of Massachusetts Bay (incl. District of Maine)</strong></td><td class="crd-td">42</td><td class="crd-td">Boston (18,3k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Rhode Island and Providence Plantations</strong></td><td class="crd-td">8</td><td class="crd-td">Newport (11k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Connecticut</strong></td><td class="crd-td">19</td><td class="crd-td">New Haven (8,3k)</td></tr>
<tr><td class="crd-td"><strong>Province of New York (incl. Iroquois Mohawk-Hudson)</strong></td><td class="crd-td">19</td><td class="crd-td">New York (33,1k)</td></tr>
<tr><td class="crd-td"><strong>Province of New Jersey</strong></td><td class="crd-td">15</td><td class="crd-td">Philadelphia (36k)</td></tr>
<tr><td class="crd-td"><strong>Province of Pennsylvania</strong></td><td class="crd-td">9</td><td class="crd-td">Lancaster (4,8k)</td></tr>
<tr><td class="crd-td"><strong>Lower Counties on Delaware</strong></td><td class="crd-td">2</td><td class="crd-td">Dover (1,1k)</td></tr>
<tr><td class="crd-td"><strong>Province of Maryland</strong></td><td class="crd-td">9</td><td class="crd-td">Baltimore (13,5k)</td></tr>
<tr><td class="crd-td"><strong>Colony and Dominion of Virginia (incl. Trans-Allegheny West)</strong></td><td class="crd-td">12</td><td class="crd-td">Norfolk (6,3k)</td></tr>
<tr><td class="crd-td"><strong>Province of North Carolina</strong></td><td class="crd-td">11</td><td class="crd-td">New Bern (1,8k)</td></tr>
<tr><td class="crd-td"><strong>Province of South Carolina</strong></td><td class="crd-td">8</td><td class="crd-td">Charleston (16,4k)</td></tr>
<tr><td class="crd-td"><strong>Province of Georgia</strong></td><td class="crd-td">5</td><td class="crd-td">Savannah (3,2k)</td></tr>
<tr><td class="crd-td"><strong>Colony of Bermuda</strong></td><td class="crd-td">3</td><td class="crd-td">St. George's (2,4k)</td></tr>
<tr><td class="crd-td"><strong>Spanish Florida (San Agustin and Apalachee)</strong></td><td class="crd-td">5</td><td class="crd-td">St. Augustine (4,5k)</td></tr>
<tr><td class="crd-td"><strong>Spanish New Mexico and Pimeria Alta Pueblos</strong></td><td class="crd-td">9</td><td class="crd-td">Santa Fe (2,3k)</td></tr>
<tr><td class="crd-td"><strong>Spanish Texas (San Antonio and Presidio Missions)</strong></td><td class="crd-td">4</td><td class="crd-td">San Antonio (2k)</td></tr>
<tr><td class="crd-td"><strong>French Louisiana, Mobile and Pays des Illinois</strong></td><td class="crd-td">14</td><td class="crd-td">New Orleans (5,5k)</td></tr>
<tr><td class="crd-td"><strong>Trans-Appalachian Indigenous Nations</strong></td><td class="crd-td">11</td><td class="crd-td">Detroit (2,2k)</td></tr>
<tr><td class="crd-td"><strong>Great Plains and Upper Missouri Indigenous Nations</strong></td><td class="crd-td">1</td><td class="crd-td">El Paso del Norte (4,6k)</td></tr>
<tr><td class="crd-td"><strong>Far West, Great Basin, California and Columbia Plateau Indigenous Nations</strong></td><td class="crd-td">1</td><td class="crd-td">Oraibi (1,1k)</td></tr>
<tr><td class="crd-td"><strong>Alaska and Aleutian Russian-Indigenous Early Contact</strong></td><td class="crd-td">3</td><td class="crd-td">Sitka (850)</td></tr>
<tr><td class="crd-td"><strong>Kentucky Frontier District (Boonesborough, Harrodsburg and Louisville)</strong></td><td class="crd-td">5</td><td class="crd-td">Lexington-Fayette (800)</td></tr>
<tr><td class="crd-td"><strong>Watauga and Cumberland Frontier Settlements (Tennessee)</strong></td><td class="crd-td">2</td><td class="crd-td">Chota (750)</td></tr>
<tr><td class="crd-td"><strong>New Hampshire Grants / Republic of Vermont</strong></td><td class="crd-td">3</td><td class="crd-td">Bennington (1,8k)</td></tr>
<tr><td class="crd-td"><strong>Spanish Alta California Missions and Presidios (1769-1783)</strong></td><td class="crd-td">11</td><td class="crd-td">San Diego (780)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading urban or mission nodes across all 26 sub-regions to 1783AD (242 total sites).</figcaption>
</figure>

# Limitations

Three technical caveats apply to the raw gazetteer table. First, `Northern Liberties-Pennsylvania` (9.913 in the 1790AD U.S. Census) was retained in the 1783+10 boundary window during census assembly even though it is flagged for 1854AD consolidation into Philadelphia in `colonial_america_to_1754_source_ledger.json5`; downstream users must not double-count it alongside post-1854 Philadelphia. Second, as in `colonial_america_to_1754`, Philadelphia (`39,95 N, 75,16 W`) and Northern Liberties snap to the adjacent `ca1_new_jersey` pixel across the Delaware River on the 5-arcminute grid. Third, Connecticut's 1774AD enumeration counts whole townships rather than nucleated village cores, inflating town ranks relative to southern counties [@greene1932american].

# Sources

<div id="refs"></div>
