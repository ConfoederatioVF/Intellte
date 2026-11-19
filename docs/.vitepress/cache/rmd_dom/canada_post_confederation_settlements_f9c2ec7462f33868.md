---
title: "Settlement Gazetteer of Canada, Greenland and Saint-Pierre-et-Miquelon (1867-2026 AD)"
subtitle: "CENTAUR-II: Urban Hierarchy, Municipal Amalgamations and Arctic Settlements, 1867-2026 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_canada_post_confederation_spatial.png"
hero_caption: "Spatial distribution of 5.043 catalogued settlements across the 15 sub-regions of Canada, Greenland and Saint-Pierre-et-Miquelon from 1867 to 2026 AD."
hero_label: "fig:hero-canada-post-confederation"
bibliography: canada_post_confederation_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles `5.043` geolocated settlement trajectories (`69.903` settlement-year observations) across Canada (`4.931`), Greenland (`98`) and Saint-Pierre-et-Miquelon (`14`) between 1867 AD and 2026 AD. Integrating Dominion decennial city returns from 1871 AD to 1951 AD [@censuscanada1873; @dominion1902; @dbs1953; @leacy1983], municipal and historical returns from Chandler, Modelski and Populstat [@chandler1987; @modelski2003; @lahmeyer2006], Danish and Greenlandic settlement registers [@greenlandstat2026], French island returns [@insee2024spm], Statistics Canada 2001-2026 AD annual census subdivision series (Table 17-10-0155-01) [@statcan2022census; @statcan2026csd; @statcan2026q3] and GeoNames populated-place coordinates [@geonames2026], the catalogue spans `92` settlements in 1871 AD (`553,4k`, `14,38%` of regional total), `313` in 1951 AD (`7,77M`, `55,22%`) and `4.856` in 2021 AD. Unadjusted summation in 2021 AD reaches `52,67M` (`137,50%` of the `38,30M` national control total) because GeoNames sub-districts (`Toronto` vs `Etobicoke` `365,0k`, `Nepean` `180,0k`) remain indexed alongside amalgamated census subdivisions; `ViscountSubstrataMosaic` reconciles these nested hierarchies onto the 5-arcminute grid.

# Background

Urbanisation transformed northern North America from an agrarian and resource-extractive federation into a metropolitan corridor anchored along the St. Lawrence-Great Lakes axis, the Calgary-Edmonton corridor and the Fraser Lowland [@simmons1996; @bunting2000]. At Confederation, only Montréal (`107,2k` in 1871 AD), Québec (`59,7k`) and Toronto (`56,1k`) exceeded `50k` inhabitants [@censuscanada1873], whilst Halifax (`29,6k`) and Saint John (`28,8k`) functioned as Atlantic entrepôts. By 1901 AD, Toronto (`208,0k`) and Montréal (`267,7k`) led a 190-settlement urban network reaching Winnipeg (`42,3k`) and Vancouver (`26,1k`) [@dominion1902].

Across the twentieth century, Canadian urban expansion diverged along two spatial axes [@bourne1993]. Industrial manufacturing and post-war suburbanisation concentrated growth inside southern Ontario and Montréal, while western resource and service expansion elevated Calgary (`1,36M` in 2021 AD; `1,66M` in 2026 AD) and Edmonton (`1,05M` to `1,28M`). Outside Canada, Greenlandic population shifted from dispersed seal-hunting hamlets into coastal administrative centres led by Nuuk (`480` in 1901 AD to `14.798` in 2025 AD), Sisimiut (`5.227`) and Ilulissat (`4.413`) [@greenlandstat2026; @hamilton2010]. In Saint-Pierre-et-Miquelon, settlement remained concentrated at Saint-Pierre (`6.200`) and Miquelon (`1.141`) as the seasonal outport on Île-aux-Marins declined from `640` in 1902 AD to `75` in 1962 AD [@ribault1962; @insee2024spm].

# Methodology

## Multi-Source Gazetteer Ingestion and Deduplication

Settlement trajectories are assembled by merging four hierarchical layers (`CENTAUR` `.sources` provenance):

1. **Statistics Canada Census Subdivisions and Historical Municipal Series (1867-2026 AD)**: Pre-1951 AD town counts from Canadian census returns and Populstat [@lahmeyer2006] join official Statistics Canada municipal city-proper returns for major cores (1951-2001 AD) and Table 17-10-0155-01 annual census subdivision (`CSD`) estimates across `2.368` matched municipalities from 2001 AD to 2025 AD with conservative 2026 AD extrapolation [@dbs1953; @leacy1983; @statcan2026csd]. Unmatched pre-1850 AD benchmarks incorporate Chandler and Modelski [@chandler1987; @modelski2003].
2. **GeoNames Modern Place Layer (2021-2025 AD)**: Populated places (`feature_class = P`, excluding abandoned `PPLH`/`PPLQ`/`PPLW`) are extracted from `CA.txt` (`pop >= 250` or administrative seats), `GL.txt` and `PM.txt` (`pop >= 1`) [@geonames2026].
3. **Spatial and Toponymic Consolidation**: Candidate records in the same province within `25 km` sharing normalised names (accent-stripped, `St.`/`Saint` standardised) collapse into canonical `<Name>-Canada` keys, disambiguating out-of-province homonyms (such as `Victoria (NL)` alongside coastal `Victoria`), while Danish colonial exonyms in Greenland (`Godthåb`, `Jakobshavn`, `Holsteinsborg`) map onto Kalaallisut headwords (`Nuuk`, `Ilulissat`, `Sisimiut`).
4. **Areal Mask Snapping**: Coordinates are snapped to the 15 RGBA regional masks of `canada_post_confederation_areal_mask.png` within a `14`-pixel coastal search radius (`5` arcminutes per pixel) so island ports and fjord settlements map deterministically to their parent province or territory.

<figure class="crd-figure-block" id="fig:ca-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-canada-post-confederation-settlements/fig4_canada_post_confederation_settlements.png" alt="fig:ca-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading eight urban centres across the 5.043 settlements of Canada, Greenland and Saint-Pierre-et-Miquelon.</figcaption>
</figure>

# Testing and Validation

All `5.043` records in `canada_post_confederation_settlements.json` and `5.046` candidate rows in `canada_post_confederation_source_ledger.json5` passed Gatekeeper A validation (`0` errors GMT+0):

- **Schema and Coordinate Integrity**: `0` missing coordinates, `0` empty population dictionaries, `0` legacy `.type` keys and `100%` `["CENTAUR"]` `.sources` arrays.
- **Exclusion Ledger Verification**: All `3` excluded historical candidates are explicitly documented: `Port Arthur-Canada` (merged with Fort William in 1970 AD to form Thunder Bay), `Berlin-Canada` (renamed Kitchener in 1916 AD) and `Godthaab-Greenland` (unified under `Nuuk-Greenland`).
- **Temporal Depth**: `2.528` settlements possess `>= 3` chronological observations (`69.903` total data points), preserving continuous city-proper municipal trajectories from 1867 AD through 2026 AD across every province and territory.

<figure class="crd-table-figure" id="tab:ca-prov-counts">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Observations</th><th class="crd-th">Largest Latest Centre</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Alberta</strong></td><td class="crd-td">690</td><td class="crd-td">13,68%</td><td class="crd-td">6.527</td><td class="crd-td">Calgary (1,66M)</td></tr>
<tr><td class="crd-td"><strong>British Columbia</strong></td><td class="crd-td">605</td><td class="crd-td">12%</td><td class="crd-td">5.217</td><td class="crd-td">Vancouver (744,7k)</td></tr>
<tr><td class="crd-td"><strong>Manitoba</strong></td><td class="crd-td">143</td><td class="crd-td">2,84%</td><td class="crd-td">1.431</td><td class="crd-td">Winnipeg (868,4k)</td></tr>
<tr><td class="crd-td"><strong>New Brunswick</strong></td><td class="crd-td">304</td><td class="crd-td">6,03%</td><td class="crd-td">2.901</td><td class="crd-td">Moncton (105,4k)</td></tr>
<tr><td class="crd-td"><strong>Newfoundland and Labrador</strong></td><td class="crd-td">391</td><td class="crd-td">7,75%</td><td class="crd-td">7.389</td><td class="crd-td">St. John's (132,3k)</td></tr>
<tr><td class="crd-td"><strong>Northwest Territories</strong></td><td class="crd-td">22</td><td class="crd-td">0,44%</td><td class="crd-td">224</td><td class="crd-td">Yellowknife (23,4k)</td></tr>
<tr><td class="crd-td"><strong>Nova Scotia</strong></td><td class="crd-td">241</td><td class="crd-td">4,78%</td><td class="crd-td">1.349</td><td class="crd-td">Halifax (531,5k)</td></tr>
<tr><td class="crd-td"><strong>Nunavut</strong></td><td class="crd-td">19</td><td class="crd-td">0,38%</td><td class="crd-td">74</td><td class="crd-td">Iqaluit (8,8k)</td></tr>
<tr><td class="crd-td"><strong>Ontario</strong></td><td class="crd-td">732</td><td class="crd-td">14,52%</td><td class="crd-td">8.024</td><td class="crd-td">Toronto (3,34M)</td></tr>
<tr><td class="crd-td"><strong>Prince Edward Island</strong></td><td class="crd-td">42</td><td class="crd-td">0,83%</td><td class="crd-td">400</td><td class="crd-td">Charlottetown (49,6k)</td></tr>
<tr><td class="crd-td"><strong>Québec</strong></td><td class="crd-td">1.207</td><td class="crd-td">23,93%</td><td class="crd-td">24.506</td><td class="crd-td">Montréal (1,95M)</td></tr>
<tr><td class="crd-td"><strong>Saskatchewan</strong></td><td class="crd-td">523</td><td class="crd-td">10,37%</td><td class="crd-td">11.158</td><td class="crd-td">Saskatoon (327,6k)</td></tr>
<tr><td class="crd-td"><strong>Yukon</strong></td><td class="crd-td">12</td><td class="crd-td">0,24%</td><td class="crd-td">101</td><td class="crd-td">Whitehorse (35,2k)</td></tr>
<tr><td class="crd-td"><strong>Saint Pierre and Miquelon</strong></td><td class="crd-td">14</td><td class="crd-td">0,28%</td><td class="crd-td">43</td><td class="crd-td">Saint-Pierre (6,2k)</td></tr>
<tr><td class="crd-td"><strong>Greenland (Kalaallit Nunaat)</strong></td><td class="crd-td">98</td><td class="crd-td">1,94%</td><td class="crd-td">559</td><td class="crd-td">Nuuk (14,8k)</td></tr>
<tr><td class="crd-td"><strong>All Sub-Regions</strong></td><td class="crd-td">5.043</td><td class="crd-td">100%</td><td class="crd-td">69.903</td><td class="crd-td">Toronto (3,27M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Gazetteer settlement distribution, observation density and leading contemporary centre across the 15 sub-regions of Canada, Greenland and Saint-Pierre-et-Miquelon.</figcaption>
</figure>

# Results

## Urban Rank-Size Hierarchy and Regional Distribution

`Figure` \ref{fig:ca-settlements} and `Table` \ref{tab:ca-prov-counts} show marked spatial concentration across the settlement network. Québec (`1.207` settlements, `23,93%`) and Ontario (`732`, `14,52%`) together contain `38,45%` of all catalogued sites, reflecting dense nineteenth-century parish and township nucleation, followed by Alberta (`690`, `13,68%`) and British Columbia (`605`, `12,00%`). Conversely, the three Canadian territories (`Yukon` `12`, `Northwest Territories` `22`, `Nunavut` `19`) account for only `53` settlements (`1,05%`) across `3,41M` km², while Greenland contributes `98` coastal localities (`1,94%`) led by Nuuk (`14.798`), Sisimiut (`5.227`), Ilulissat (`4.413`) and Qaqortoq (`3.224`) [@greenlandstat2026].

<figure class="crd-table-figure" id="tab:ca-top25">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Sub-Region</th><th class="crd-th">First Yr</th><th class="crd-th">Peak Yr</th><th class="crd-th">Peak Pop</th><th class="crd-th">Latest Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Toronto</td><td class="crd-td">Ontario</td><td class="crd-td">1851</td><td class="crd-td">2026</td><td class="crd-td">3,34M</td><td class="crd-td">3,34M (2026)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Montréal</td><td class="crd-td">Québec</td><td class="crd-td">1851</td><td class="crd-td">2026</td><td class="crd-td">1,95M</td><td class="crd-td">1,95M (2026)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Calgary</td><td class="crd-td">Alberta</td><td class="crd-td">1875</td><td class="crd-td">2026</td><td class="crd-td">1,66M</td><td class="crd-td">1,66M (2026)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Edmonton</td><td class="crd-td">Alberta</td><td class="crd-td">1851</td><td class="crd-td">2026</td><td class="crd-td">1,28M</td><td class="crd-td">1,28M (2026)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Ottawa</td><td class="crd-td">Ontario</td><td class="crd-td">1851</td><td class="crd-td">2026</td><td class="crd-td">1,22M</td><td class="crd-td">1,22M (2026)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Winnipeg</td><td class="crd-td">Manitoba</td><td class="crd-td">1843</td><td class="crd-td">2026</td><td class="crd-td">868,4k</td><td class="crd-td">868,4k (2026)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Brampton</td><td class="crd-td">Ontario</td><td class="crd-td">1901</td><td class="crd-td">2026</td><td class="crd-td">795,2k</td><td class="crd-td">795,2k (2026)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Mississauga</td><td class="crd-td">Ontario</td><td class="crd-td">1966</td><td class="crd-td">2024</td><td class="crd-td">781,3k</td><td class="crd-td">765,6k (2026)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Vancouver</td><td class="crd-td">British Columbia</td><td class="crd-td">1867</td><td class="crd-td">2024</td><td class="crd-td">748,8k</td><td class="crd-td">744,7k (2026)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Surrey</td><td class="crd-td">British Columbia</td><td class="crd-td">1971</td><td class="crd-td">2026</td><td class="crd-td">724,6k</td><td class="crd-td">724,6k (2026)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Hamilton</td><td class="crd-td">Ontario</td><td class="crd-td">1846</td><td class="crd-td">2026</td><td class="crd-td">652,9k</td><td class="crd-td">652,9k (2026)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">North York</td><td class="crd-td">Ontario</td><td class="crd-td">1951</td><td class="crd-td">1996</td><td class="crd-td">622,6k</td><td class="crd-td">622,6k (1996)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Québec</td><td class="crd-td">Québec</td><td class="crd-td">1844</td><td class="crd-td">2026</td><td class="crd-td">602,5k</td><td class="crd-td">602,5k (2026)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Scarborough</td><td class="crd-td">Ontario</td><td class="crd-td">1951</td><td class="crd-td">1996</td><td class="crd-td">594,5k</td><td class="crd-td">594,5k (1996)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Halifax</td><td class="crd-td">Nova Scotia</td><td class="crd-td">1851</td><td class="crd-td">2026</td><td class="crd-td">531,5k</td><td class="crd-td">531,5k (2026)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">London</td><td class="crd-td">Ontario</td><td class="crd-td">1851</td><td class="crd-td">2026</td><td class="crd-td">505,6k</td><td class="crd-td">505,6k (2026)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Laval</td><td class="crd-td">Québec</td><td class="crd-td">1941</td><td class="crd-td">2026</td><td class="crd-td">467,5k</td><td class="crd-td">467,5k (2026)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Markham</td><td class="crd-td">Ontario</td><td class="crd-td">1951</td><td class="crd-td">2026</td><td class="crd-td">377,9k</td><td class="crd-td">377,9k (2026)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Vaughan</td><td class="crd-td">Ontario</td><td class="crd-td">1951</td><td class="crd-td">2026</td><td class="crd-td">365,6k</td><td class="crd-td">365,6k (2026)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Etobicoke</td><td class="crd-td">Ontario</td><td class="crd-td">1951</td><td class="crd-td">2021</td><td class="crd-td">365k</td><td class="crd-td">365k (2025)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Kitchener</td><td class="crd-td">Ontario</td><td class="crd-td">1851</td><td class="crd-td">2026</td><td class="crd-td">333,6k</td><td class="crd-td">333,6k (2026)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Saskatoon</td><td class="crd-td">Saskatchewan</td><td class="crd-td">1883</td><td class="crd-td">2026</td><td class="crd-td">327,6k</td><td class="crd-td">327,6k (2026)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Gatineau</td><td class="crd-td">Québec</td><td class="crd-td">1901</td><td class="crd-td">2026</td><td class="crd-td">310,3k</td><td class="crd-td">310,3k (2026)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Burnaby</td><td class="crd-td">British Columbia</td><td class="crd-td">1971</td><td class="crd-td">2026</td><td class="crd-td">307,9k</td><td class="crd-td">307,9k (2026)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Windsor</td><td class="crd-td">Ontario</td><td class="crd-td">1851</td><td class="crd-td">2026</td><td class="crd-td">276,4k</td><td class="crd-td">276,4k (2026)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 25 settlements in Canada, Greenland and Saint-Pierre-et-Miquelon ranked by peak catalogued population under municipal census subdivision boundaries.</figcaption>
</figure>

## Amalgamations and Municipal Census Subdivision Continuity

`Table` \ref{tab:ca-top25} isolates strictly municipal census subdivision trajectories without metropolitan agglomeration distortion. Leading 2026 AD maxima reflect the post-1998 AD amalgamated municipal cores of Toronto (`3,34M`), Montréal (`1,95M`), Calgary (`1,66M`), Edmonton (`1,28M`), Ottawa (`1,22M`), Winnipeg (`868,4k`) and Hamilton (`652,9k`) [@statcan2026csd]. Historical municipal amalgamations in 1998 AD (Toronto absorbing North York `622,6k` and Scarborough `594,5k`) and 2001-2002 AD (Ottawa absorbing Nepean and Gloucester; Montréal and Québec absorbing peripheral island municipalities) explain discrete statutory step changes at 2001 AD alongside residual GeoNames records for dissolved boroughs [@sancton2000; @geonames2026].

# Limitations

Three limitations govern gazetteer interpretation. First, `2.515` smaller towns and rural localities hold only GeoNames `2021`-`2025` AD entries without pre-2021 annual series [@geonames2026], whereas `2.528` multi-epoch municipalities preserve `>= 3` chronological observations led by Statistics Canada Table 17-10-0155-01 (`2001`-`2026` AD) [@statcan2026csd]. Second, co-indexing pre-amalgamation borough points (North York, Scarborough, Etobicoke) with StatCan post-amalgamation subdivisions raises unadjusted 2021 AD sums to `137,50%` of the national control total; downstream raster gridding prevents spatial double-counting via cell-level urban capping. Third, GeoNames place-level estimates in minor rural settlements and unorganised northern tracts carry greater positional and count variance than Statistics Canada census subdivisions [@statcan2022census].

# Sources

<div id="refs"></div>
