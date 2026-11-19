---
title: "Settlement Gazetteer of Canada, Greenland and Saint-Pierre-et-Miquelon (1867AD to 2026AD)"
subtitle: "CENTAUR-II: Urban Hierarchy, Municipal Amalgamations and Arctic Settlements, 1867AD to 2026AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_canada_post_confederation_spatial.png"
hero_caption: "Spatial distribution of 5.882 catalogued settlements across the 15 sub-regions of Canada, Greenland and Saint-Pierre-et-Miquelon from 1867AD to 2026AD."
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

This gazetteer compiles 5.882 geolocated settlement trajectories (197.107 settlement-year observations across 6.040 ledger candidates) in Canada (5.774), Greenland (97) and Saint-Pierre-et-Miquelon (11) between 1867AD and 2026AD. Integrating Dominion decennial municipal returns from 1871AD to 1951AD [@censuscanada1873; @dominion1902; @dbs1953; @leacy1983], Statistics Canada Census Subdivision and Designated Place tables from 2001AD to 2026AD (Table 17-10-0155-01 and 2021AD Census profiles) [@statcan2022census; @statcan2026csd; @statcan2026q3], Danish and Greenlandic locality registers [@greenlandstat2026], French archipelago returns [@insee2024spm] and GeoNames populated-place coordinates [@geonames2026], the catalogue records 641 active places in 1867AD (525,5k, 14,4% of the regional total), 844 in 1871AD (1,18M, 30,59%), 2.484 in 1901AD (2,29M, 40,95%), 4.972 in 1951AD (8,87M, 63,01%), 4.750 in 2001AD (30,13M, 96,92%), 5.250 in 2021AD (39,21M, 102,38%) and 4.592 municipal Census Subdivisions in 2026AD (41,23M, 98,49%). All 5.882 entries maintain pre-1975AD historical continuity (5.881 settlements carrying three or more chronological observations) via staggered rural predecessor baselines (1868–1974AD) and 17 twentieth-century planned/military foundations.

# Background

Urbanisation transformed northern North America from an agrarian and resource-extractive federation into a metropolitan network anchored along the St. Lawrence-Great Lakes axis, the Calgary-Edmonton corridor and the Fraser Lowland [@simmons1996; @bunting2000]. At Confederation, only Montréal (107,2k in 1871AD), Québec (59,7k) and Toronto (56,1k) exceeded 50k inhabitants [@censuscanada1873], whilst Halifax (29,6k) and Saint John (28,8k) served as Atlantic entrepôts. By 1901AD, Montréal (267,7k) and Toronto (208k) led a widening urban hierarchy reaching Winnipeg (42,3k) and Vancouver (27k) [@dominion1902].

Across the twentieth century, Canadian urban growth diverged along two spatial axes [@bourne1993]. Manufacturing expansion and post-war suburbanisation concentrated growth across southern Ontario and Greater Montréal, while western resource and service expansion elevated Calgary (1,36M in 2021AD; 1,66M in 2026AD) and Edmonton (1,05M to 1,28M). Avoiding post-1950AD Census Metropolitan Area boundary inflation keeps municipal city-proper trajectories comparable across provinces (Toronto 3,34M, Montréal 1,95M, Ottawa 1,22M, Winnipeg 868,4k, Brampton 795,2k, Mississauga 765,6k, Vancouver 744,7k and Surrey 724,6k in 2026AD) [@statcan2026csd]. Outside Canada, Greenlandic population consolidated from dispersed sealing camps into coastal municipalities led by Nuuk (14.798 in 2025AD), Sisimiut (5.227) and Ilulissat (4.413) [@greenlandstat2026; @hamilton2010]. In Saint-Pierre-et-Miquelon, population centred on Saint-Pierre (6.200) and Miquelon (1.141) as the seasonal outport on Île-aux-Marins declined from 110 in 1951AD to 75 in 1962AD [@ribault1962; @insee2024spm].

# Methodology

## Multi-Source Gazetteer Ingestion and Boundary Consolidation

Settlement trajectories are assembled across four deterministic stages:

1. **Statistics Canada Census Subdivisions and Designated Places (1867AD to 2026AD)**: Pre-1951AD municipal and parish counts from Dominion census volumes [@censuscanada1873; @dominion1902; @dbs1953; @leacy1983] join official Statistics Canada Census Subdivision and Designated Place tables across 1951AD to 2026AD (2001AD to 2026AD annual Table 17-10-0155-01 estimates and 2021AD Census profiles) [@statcan2022census; @statcan2026csd; @statcan2026q3]. Post-1950AD Census Metropolitan Area agglomeration totals are excluded so only statutory municipal limits enter urban pixel allocations.
2. **GeoNames Coordinates and Pre-1975AD Continuity**: Active populated places from GeoNames extracts for Canada, Greenland and Saint-Pierre-et-Miquelon [@geonames2026] are matched to Statistics Canada Census Subdivisions and Designated Places within a 55 km polygon tolerance. Rural localities and Designated Places lacking separate historical city tables receive conservative, staggered rural predecessor estimates across 1868–1974AD (<= 120 inhabitants) so incorporated historical settlements maintain continuous trajectories without artificial late-century spikes, whilst 17 twentieth-century military and resource towns retain explicit historical foundation-year anchors.
3. **Toponymic Consolidation and Statutory Amalgamation Caps**: Candidate records within 25 km in the same province sharing normalised base names collapse into canonical keys, disambiguating inter-provincial homonyms while aligning Danish colonial exonyms in Greenland (Godthåb, Jakobshavn, Holsteinsborg) onto Kalaallisut headwords (Nuuk, Ilulissat, Sisimiut). Pre-amalgamation boroughs of Metropolitan Toronto (North York, Scarborough, Etobicoke, York and East York) cap cleanly at 1996AD before the 1998AD municipal merger into Toronto [@sancton2000], just as Port Arthur and Fort William cap at 1966AD before the 1970AD amalgamation into Thunder Bay.
4. **Areal Mask Alignment**: Coordinates snap onto the 15 regional masks within a 14-pixel coastal search radius (5 arcminutes per pixel) so island outports and fjord towns map deterministically onto their parent jurisdiction.

<figure class="crd-figure-block" id="fig:ca-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-canada-post-confederation-settlements/fig4_canada_post_confederation_settlements.png" alt="fig:ca-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen municipal centres across the 5.882 settlements of Canada, Greenland and Saint-Pierre-et-Miquelon.</figcaption>
</figure>

# Testing and Validation

All 5.882 included records and 158 excluded ledger candidates (6.040 total candidates) passed structural, spatial and continuity checks:

- **Coordinate and Trajectory Integrity**: Zero missing WGS84 coordinates, zero empty population series, 197.107 total observations (33,51 observations per settlement on average), 5.881 records holding >= 3 chronological entries and all 5.882 trajectories anchored on or before 1974AD.
- **Ledger Exclusion Reconciliation**: All 158 exclusions carry explicit justifications, comprising 2 duplicate aliases (Berlin-Canada renamed Kitchener in 1916AD and Godthaab-Greenland unified under Nuuk-Greenland) plus 156 subordinate suburbs merged within 1,55 km of canonical centres (Côte-Saint-Luc, Hampstead, Mimico, Matsqui, Port-Royal and Miquelon-Langlade).
- **Amalgamation Continuity**: Capping North York (589,7k at 1996AD), Scarborough (559k), Etobicoke (328,7k), York (146,5k) and East York (114k) at 1996AD prevents double-counting when Toronto expands from 653,7k in 1996AD to 2,58M in 2001AD and 3,34M in 2026AD [@sancton2000].

<figure class="crd-table-figure" id="tab:ca-prov-counts">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Observations</th><th class="crd-th">Largest Latest Centre</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Alberta</strong></td><td class="crd-td">620</td><td class="crd-td">10,54%</td><td class="crd-td">18.391</td><td class="crd-td">Calgary (1,66M)</td></tr>
<tr><td class="crd-td"><strong>British Columbia</strong></td><td class="crd-td">776</td><td class="crd-td">13,19%</td><td class="crd-td">25.147</td><td class="crd-td">Vancouver (744,7k)</td></tr>
<tr><td class="crd-td"><strong>Manitoba</strong></td><td class="crd-td">264</td><td class="crd-td">4,49%</td><td class="crd-td">8.458</td><td class="crd-td">Winnipeg (868,4k)</td></tr>
<tr><td class="crd-td"><strong>New Brunswick</strong></td><td class="crd-td">334</td><td class="crd-td">5,68%</td><td class="crd-td">10.049</td><td class="crd-td">Saint John (81,6k)</td></tr>
<tr><td class="crd-td"><strong>Newfoundland and Labrador</strong></td><td class="crd-td">367</td><td class="crd-td">6,24%</td><td class="crd-td">12.094</td><td class="crd-td">St. John's (132,3k)</td></tr>
<tr><td class="crd-td"><strong>Northwest Territories</strong></td><td class="crd-td">41</td><td class="crd-td">0,7%</td><td class="crd-td">1.311</td><td class="crd-td">Yellowknife (23,4k)</td></tr>
<tr><td class="crd-td"><strong>Nova Scotia</strong></td><td class="crd-td">202</td><td class="crd-td">3,43%</td><td class="crd-td">4.944</td><td class="crd-td">Halifax (531,5k)</td></tr>
<tr><td class="crd-td"><strong>Nunavut</strong></td><td class="crd-td">33</td><td class="crd-td">0,56%</td><td class="crd-td">1.165</td><td class="crd-td">Iqaluit (8,8k)</td></tr>
<tr><td class="crd-td"><strong>Ontario</strong></td><td class="crd-td">765</td><td class="crd-td">13,01%</td><td class="crd-td">25.340</td><td class="crd-td">Toronto (3,34M)</td></tr>
<tr><td class="crd-td"><strong>Prince Edward Island</strong></td><td class="crd-td">77</td><td class="crd-td">1,31%</td><td class="crd-td">3.045</td><td class="crd-td">Charlottetown (49,6k)</td></tr>
<tr><td class="crd-td"><strong>Québec</strong></td><td class="crd-td">1.322</td><td class="crd-td">22,48%</td><td class="crd-td">50.942</td><td class="crd-td">Montréal (1,95M)</td></tr>
<tr><td class="crd-td"><strong>Saskatchewan</strong></td><td class="crd-td">938</td><td class="crd-td">15,95%</td><td class="crd-td">33.508</td><td class="crd-td">Saskatoon (327,6k)</td></tr>
<tr><td class="crd-td"><strong>Yukon</strong></td><td class="crd-td">35</td><td class="crd-td">0,6%</td><td class="crd-td">618</td><td class="crd-td">Whitehorse (35,2k)</td></tr>
<tr><td class="crd-td"><strong>Saint Pierre and Miquelon</strong></td><td class="crd-td">11</td><td class="crd-td">0,19%</td><td class="crd-td">171</td><td class="crd-td">Saint-Pierre (6,2k)</td></tr>
<tr><td class="crd-td"><strong>Greenland (Kalaallit Nunaat)</strong></td><td class="crd-td">97</td><td class="crd-td">1,65%</td><td class="crd-td">1.924</td><td class="crd-td">Nuuk (14,8k)</td></tr>
<tr><td class="crd-td"><strong>All Sub-Regions</strong></td><td class="crd-td">5.882</td><td class="crd-td">100%</td><td class="crd-td">197.107</td><td class="crd-td">Toronto (3,34M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Gazetteer settlement distribution, observation density and leading contemporary centre across the 15 sub-regions of Canada, Greenland and Saint-Pierre-et-Miquelon.</figcaption>
</figure>

# Results

## Urban Rank-Size Hierarchy and Regional Distribution

Figure \ref{fig:ca-settlements} and Table \ref{tab:ca-prov-counts} demonstrate pronounced regional contrast in settlement density across the 15 sub-regions. Québec (1.322 settlements, 22,48%, 44.655 observations) and Saskatchewan (938, 15,95%, 28.663 observations) lead the numerical count, reflecting Québec's dense network of rural parishes and villages alongside Saskatchewan's legacy railway-siding towns and rural municipalities, followed by British Columbia (776, 13,19%), Ontario (765, 13,01%) and Alberta (620, 10,54%). Ontario holds fewer discrete municipalities than Québec or Saskatchewan because regional-government and county-tier consolidations after 1970AD merged rural townships into larger urban-rural municipalities [@sancton2000]. Across the Atlantic provinces, Newfoundland and Labrador (367), New Brunswick (334), Nova Scotia (202) and Prince Edward Island (77) add 980 entries (16,66%). Conversely, the three Canadian territories (Northwest Territories 41, Yukon 35, Nunavut 33) contribute 109 settlements (1,85%) across 3,51M km², while Greenland contributes 97 coastal localities (1,65%) led by Nuuk (14.798), Sisimiut (5.227), Ilulissat (4.413) and Aasiaat (3.005) [@greenlandstat2026].

<figure class="crd-table-figure" id="tab:ca-top25">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Sub-Region</th><th class="crd-th">First Year</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak</th><th class="crd-th">Latest</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Toronto</td><td class="crd-td">Ontario</td><td class="crd-td">1851AD</td><td class="crd-td">2026AD</td><td class="crd-td">3,34M</td><td class="crd-td">3,34M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Montréal</td><td class="crd-td">Québec</td><td class="crd-td">1851AD</td><td class="crd-td">2026AD</td><td class="crd-td">1,95M</td><td class="crd-td">1,95M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Calgary</td><td class="crd-td">Alberta</td><td class="crd-td">1867AD</td><td class="crd-td">2026AD</td><td class="crd-td">1,66M</td><td class="crd-td">1,66M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Edmonton</td><td class="crd-td">Alberta</td><td class="crd-td">1851AD</td><td class="crd-td">2026AD</td><td class="crd-td">1,28M</td><td class="crd-td">1,28M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Ottawa</td><td class="crd-td">Ontario</td><td class="crd-td">1851AD</td><td class="crd-td">2026AD</td><td class="crd-td">1,22M</td><td class="crd-td">1,22M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Winnipeg</td><td class="crd-td">Manitoba</td><td class="crd-td">1843AD</td><td class="crd-td">2026AD</td><td class="crd-td">868,4k</td><td class="crd-td">868,4k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Brampton</td><td class="crd-td">Ontario</td><td class="crd-td">1867AD</td><td class="crd-td">2026AD</td><td class="crd-td">795,2k</td><td class="crd-td">795,2k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Mississauga</td><td class="crd-td">Ontario</td><td class="crd-td">1903AD</td><td class="crd-td">2024AD</td><td class="crd-td">781,3k</td><td class="crd-td">765,6k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Vancouver</td><td class="crd-td">British Columbia</td><td class="crd-td">1867AD</td><td class="crd-td">2024AD</td><td class="crd-td">748,8k</td><td class="crd-td">744,7k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Surrey</td><td class="crd-td">British Columbia</td><td class="crd-td">1892AD</td><td class="crd-td">2026AD</td><td class="crd-td">724,6k</td><td class="crd-td">724,6k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Hamilton</td><td class="crd-td">Ontario</td><td class="crd-td">1846AD</td><td class="crd-td">2026AD</td><td class="crd-td">652,9k</td><td class="crd-td">652,9k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Québec</td><td class="crd-td">Québec</td><td class="crd-td">1851AD</td><td class="crd-td">2026AD</td><td class="crd-td">602,5k</td><td class="crd-td">602,5k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">North York</td><td class="crd-td">Ontario</td><td class="crd-td">1873AD</td><td class="crd-td">1996AD</td><td class="crd-td">589,7k</td><td class="crd-td">589,7k (1996AD)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Scarborough</td><td class="crd-td">Ontario</td><td class="crd-td">1867AD</td><td class="crd-td">1996AD</td><td class="crd-td">559k</td><td class="crd-td">559k (1996AD)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Halifax</td><td class="crd-td">Nova Scotia</td><td class="crd-td">1851AD</td><td class="crd-td">2026AD</td><td class="crd-td">531,5k</td><td class="crd-td">531,5k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">London</td><td class="crd-td">Ontario</td><td class="crd-td">1851AD</td><td class="crd-td">2026AD</td><td class="crd-td">505,6k</td><td class="crd-td">505,6k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Laval</td><td class="crd-td">Québec</td><td class="crd-td">1867AD</td><td class="crd-td">2026AD</td><td class="crd-td">467,5k</td><td class="crd-td">467,5k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Markham</td><td class="crd-td">Ontario</td><td class="crd-td">1885AD</td><td class="crd-td">2026AD</td><td class="crd-td">377,9k</td><td class="crd-td">377,9k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Vaughan</td><td class="crd-td">Ontario</td><td class="crd-td">1908AD</td><td class="crd-td">2026AD</td><td class="crd-td">365,6k</td><td class="crd-td">365,6k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Kitchener</td><td class="crd-td">Ontario</td><td class="crd-td">1851AD</td><td class="crd-td">2026AD</td><td class="crd-td">333,6k</td><td class="crd-td">333,6k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Etobicoke</td><td class="crd-td">Ontario</td><td class="crd-td">1867AD</td><td class="crd-td">1996AD</td><td class="crd-td">328,7k</td><td class="crd-td">328,7k (1996AD)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Saskatoon</td><td class="crd-td">Saskatchewan</td><td class="crd-td">1867AD</td><td class="crd-td">2026AD</td><td class="crd-td">327,6k</td><td class="crd-td">327,6k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Gatineau</td><td class="crd-td">Québec</td><td class="crd-td">1867AD</td><td class="crd-td">2026AD</td><td class="crd-td">310,3k</td><td class="crd-td">310,3k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Burnaby</td><td class="crd-td">British Columbia</td><td class="crd-td">1904AD</td><td class="crd-td">2026AD</td><td class="crd-td">307,9k</td><td class="crd-td">307,9k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Windsor</td><td class="crd-td">Ontario</td><td class="crd-td">1851AD</td><td class="crd-td">2026AD</td><td class="crd-td">276,4k</td><td class="crd-td">276,4k (2026AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 25 settlements in Canada, Greenland and Saint-Pierre-et-Miquelon ranked by peak catalogued population under municipal census subdivision boundaries.</figcaption>
</figure>

## Amalgamations and Municipal Census Subdivision Continuity

Table \ref{tab:ca-top25} isolates strictly municipal Census Subdivision boundaries without Census Metropolitan Area distortion. Leading 2026AD totals reflect both historical city-proper cores and suburban growth cities across the Greater Golden Horseshoe, Greater Montréal, Fraser Valley and Calgary-Edmonton corridor: Toronto (3,34M), Montréal (1,95M), Calgary (1,66M), Edmonton (1,28M), Ottawa (1,22M), Winnipeg (868,4k), Brampton (795,2k), Mississauga (765,6k, peaking at 781,3k in 2024AD), Vancouver (744,7k, peaking at 748,8k in 2024AD), Surrey (724,6k), Hamilton (652,9k) and Québec (602,5k) [@statcan2026csd]. Retaining pre-1998AD Metropolitan Toronto boroughs (North York, Scarborough, Etobicoke) strictly through 1996AD preserves nineteenth- and twentieth-century suburban dispersion before statutory amalgamation without creating 2001–2026AD spatial overlap.

# Limitations

Three constraints govern gazetteer interpretation. First, unincorporated Designated Places and minor rural settlements without published historical municipal tabulations rely on provincial curve back-projection prior to modern Census cycles [@statcan2022census; @geonames2026], creating smoother pre-1971AD curves than for incorporated cities. Second, statutory municipal mergers, including Toronto (1998AD), Ottawa, Montréal and Québec (2001–2002AD), Halifax (1996AD) and Thunder Bay (1970AD), produce discrete step transitions between census years that reflect legal annexations rather than instantaneous local migration [@sancton2000]. Third, 2026AD municipal figures derive from post-censal Census Subdivision extrapolations and 2025AD Greenlandic and Saint-Pierre-et-Miquelon returns, remaining provisional pending full 2026AD statutory census release [@statcan2026csd; @greenlandstat2026; @insee2024spm].

# Sources

<div id="refs"></div>
