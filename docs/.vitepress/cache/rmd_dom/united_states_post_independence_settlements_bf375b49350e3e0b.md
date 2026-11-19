---
title: "Settlement Gazetteer of the United States, Bermuda and American Samoa (1783-2026 AD)"
subtitle: "CENTAUR-II: Urban Hierarchy, Subcounty Census Places and Metropolitan Trajectories, 1783-2026 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_united_states_post_independence_spatial.png"
hero_caption: "Spatial distribution of 27.997 catalogued settlements across the 53 jurisdictions of the United States, Bermuda and American Samoa from 1783 to 2026 AD."
hero_label: "fig:hero-united-states-post-independence"
bibliography: united_states_post_independence_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles `27.997` geolocated settlements (`553.616` settlement-year observations) across all 50 U.S. states, the District of Columbia (`54`), Bermuda (`16`) and American Samoa (`55`) between 1783 AD and 2026 AD. Unifying U.S. Census Bureau Working Paper No. 27 top-100 urban returns from 1790 AD to 1990 AD [@gibson1998], state apportionment benchmarks [@uscb2021apportion], annual 2000-2024 AD Subcounty Resident Population Estimates (`SUMLEV=162` and `170`) projected to 2026 AD [@uscb2025subest], pre-1850 AD Chandler and Modelski benchmarks [@chandler1987; @modelski2003], consistent municipal Populstat records [@lahmeyer2006] and GeoNames populated places (`pop >= 500`) [@geonames2026], the catalogue expands from `27` enumerated places in 1790 AD (`200,7k`, `4,01%` of composite population) to `136` in 1850 AD (`3,02M`, `12,78%`), `964` in 1900 AD (`24,96M`, `32,74%`), `988` in 1950 AD (`66,61M`, `44,00%`), `19.724` in 2000 AD (`190,81M` municipal sum, `67,60%`), `27.784` in 2020 AD (`281,09M`, `84,75%`) and `19.306` incorporated places in 2026 AD (`217,03M`, `62,97%`). Of all `27.997` settlements, `19.874` hold `>= 3` chronological observations.

# Background

At the First Federal Census of 1790 AD, urban life in the United States was sparse and maritime: only five places exceeded `10k` residents - New York (`33,1k` prior to 1898 AD consolidation), Philadelphia (`28,5k`, alongside Northern Liberties at `9,9k`), Boston (`18,3k`), Charleston (`16,4k`) and Baltimore (`13,5k`) - whilst Newport (`6,7k`) and Salem (`7,9k`) rounded out the leading ports [@uscb1791; @gibson1998]. Between 1810 AD and 1860 AD, canal construction, steam navigation and railroad trunk lines propelled rapid interior city formation [@pred1966; @monkkonen1988]. By 1850 AD, Cincinnati (`115,4k`), St. Louis (`77,9k`) and New Orleans (`116,4k`) ranked alongside Atlantic ports (`Table` \ref{tab:us-top25}), while Chicago (`4.500` in 1840 AD) began its ascent to second place nationally (`1,70M` by 1900 AD).

In the twentieth century, urban growth bifurcated between municipal annexation and suburban fragmentation [@teaford1979; @jackson1985]. Early consolidations (Philadelphia's Act of Consolidation in 1854 AD, Greater New York's 1898 AD five-borough union, Pittsburgh's 1907 AD annexation of Allegheny) produced vast central cities, after which post-1945 AD suburbanisation dispersed population across thousands of peripheral municipalities and unincorporated Census-Designated Places (`CDPs`). Consequently, modern spatial reconstruction cannot rely solely on top-100 city lists and instead requires full subcounty `SUMLEV=162`/`170` coverage paired with `GeoNames` unincorporated places (`>= 500` inhabitants) [@uscb2025subest; @geonames2026].

# Methodology

## Multi-Layer Urban Ingestion and Deduplication

All `27.997` settlement records are consolidated under canonical `["CENTAUR"]` `.sources` tags through four deterministic stages:

1. **U.S. Census Subcounty Estimates (2000-2026 AD)**: Official Census files `us_sub_est00int.csv` (2000-2009 AD), `us_sub_est2020.csv` (2010-2019 AD) and `us_sub_est2024.csv` (2020-2024 AD) contribute incorporated places (`SUMLEV=162`), consolidated governments (`SUMLEV=170`) and Washington, D.C. (`SUMLEV=040`), with 2025-2026 AD extrapolated from 2022-2024 AD municipal growth clamped to `[0,97; 1,03]` [@uscb2025subest].
2. **Historical Census and Pre-Census Layer (1783-1990 AD)**: `twps0027` (`tab02.txt` to `tab22.txt`) supplies decennial city-proper returns from 1790 AD to 1990 AD [@gibson1998], merged without metro-area sawtooth overrides alongside consistent Populstat series [@lahmeyer2006], pre-1850 AD Chandler and Modelski entries [@chandler1987; @modelski2003], and pre-1783 AD colonial town anchors continuous into independence (Philadelphia `23.800` and New York `18.000` in 1760 AD; St. Louis `120` in 1764 AD; Los Angeles `44` in 1781 AD).
3. **GeoNames CDPs and Island Territories (2020-2025 AD)**: Unincorporated U.S. places (`pop >= 500`, excluding post-1898 New York City consolidated boroughs), Bermudian parishes (`16` entries led by Hamilton `14,2k`) and American Samoan villages (`55` entries led by Pago Pago `14,0k` and Tāfuna `8,4k`) enter with non-overwriting precedence [@geonames2026; @bermuda2018; @uscb2022as].
4. **Spatial Name Reconciliation and Mask Assignment**: Suffixes (`city`, `town`, `village`, `CDP`, `consolidated government`, `(balance)`) are stripped, records within `25 km` sharing normalised base names in the same state collapse into `<Name>-<State>` keys, and coordinates are snapped onto the 53 state/territory masks (`max_snap_px = 12`).

<figure class="crd-figure-block" id="fig:us-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-united-states-post-independence-settlements/fig4_united_states_post_independence_settlements.png" alt="fig:us-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and eight largest municipal city-proper peaks across 27.997 settlements in the United States, Bermuda and American Samoa.</figcaption>
</figure>

# Testing and Validation

Validation against `united_states_post_independence_source_ledger.json5` (`28.006` total candidate entries) passed Gatekeeper A with `0` schema, coordinate or accounting errors (`GMT+0`):

- **Complete Coordinate and Trajectory Coverage**: All `27.997` included records contain valid WGS84 `[lat, lng]` pairs, non-empty integer population maps and `["CENTAUR"]` `.sources` arrays (`553.616` total place-year observations; `19.874` entries with `>= 3` years).
- **Verified Ledger Exclusions**: All `9` excluded candidates carry documented justifications: `San Juan-Puerto Rico`, `Charlotte Amalie-US Virgin Islands` and `Hagatna-Guam` (outside CENTAUR domain), `Southwark-Pennsylvania` (consolidated into Philadelphia in 1854 AD), `Manhattan-New York`, `Queens-New York`, `Bronx-New York` and `Staten Island-New York` (consolidated into New York City in 1898 AD), and `District of Columbia-District of Columbia` (coterminous with `Washington`).
- **1898 AD Pacific Handover**: All `250` Hawai'i settlements and `55` American Samoa settlements enter `united_states_post_independence_settlements.json` at `1898 AD` or later, preserving chronological separation from `hawaii_and_american_polynesia`.

<figure class="crd-table-figure" id="tab:us-state-counts">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Observations</th><th class="crd-th">Largest Latest Place</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pennsylvania</strong></td><td class="crd-td">1.607</td><td class="crd-td">5,74%</td><td class="crd-td">28.250</td><td class="crd-td">Pittsburgh (312,3k)</td></tr>
<tr><td class="crd-td"><strong>Texas</strong></td><td class="crd-td">1.527</td><td class="crd-td">5,45%</td><td class="crd-td">33.466</td><td class="crd-td">Houston (2,47M)</td></tr>
<tr><td class="crd-td"><strong>Illinois</strong></td><td class="crd-td">1.387</td><td class="crd-td">4,95%</td><td class="crd-td">34.900</td><td class="crd-td">Chicago (2,76M)</td></tr>
<tr><td class="crd-td"><strong>New York</strong></td><td class="crd-td">1.331</td><td class="crd-td">4,75%</td><td class="crd-td">18.702</td><td class="crd-td">New York (8,6M)</td></tr>
<tr><td class="crd-td"><strong>California</strong></td><td class="crd-td">1.246</td><td class="crd-td">4,45%</td><td class="crd-td">15.451</td><td class="crd-td">Los Angeles (3,92M)</td></tr>
<tr><td class="crd-td"><strong>Ohio</strong></td><td class="crd-td">1.108</td><td class="crd-td">3,96%</td><td class="crd-td">25.921</td><td class="crd-td">Columbus (955,8k)</td></tr>
<tr><td class="crd-td"><strong>Missouri</strong></td><td class="crd-td">989</td><td class="crd-td">3,53%</td><td class="crd-td">25.120</td><td class="crd-td">Kansas City (523,3k)</td></tr>
<tr><td class="crd-td"><strong>Iowa</strong></td><td class="crd-td">973</td><td class="crd-td">3,48%</td><td class="crd-td">25.687</td><td class="crd-td">Des Moines (215,3k)</td></tr>
<tr><td class="crd-td"><strong>Florida</strong></td><td class="crd-td">914</td><td class="crd-td">3,26%</td><td class="crd-td">12.201</td><td class="crd-td">Jacksonville (1,05M)</td></tr>
<tr><td class="crd-td"><strong>Minnesota</strong></td><td class="crd-td">912</td><td class="crd-td">3,26%</td><td class="crd-td">23.775</td><td class="crd-td">Minneapolis (434,6k)</td></tr>
<tr><td class="crd-td"><strong>North Carolina</strong></td><td class="crd-td">719</td><td class="crd-td">2,57%</td><td class="crd-td">15.635</td><td class="crd-td">Charlotte (990,5k)</td></tr>
<tr><td class="crd-td"><strong>Wisconsin</strong></td><td class="crd-td">714</td><td class="crd-td">2,55%</td><td class="crd-td">16.754</td><td class="crd-td">Milwaukee (562,5k)</td></tr>
<tr><td class="crd-td"><strong>Kansas</strong></td><td class="crd-td">681</td><td class="crd-td">2,43%</td><td class="crd-td">18.041</td><td class="crd-td">Wichita (405,8k)</td></tr>
<tr><td class="crd-td"><strong>Michigan</strong></td><td class="crd-td">651</td><td class="crd-td">2,33%</td><td class="crd-td">14.837</td><td class="crd-td">Detroit (656,9k)</td></tr>
<tr><td class="crd-td"><strong>Indiana</strong></td><td class="crd-td">646</td><td class="crd-td">2,31%</td><td class="crd-td">15.768</td><td class="crd-td">Indianapolis (908,3k)</td></tr>
<tr><td class="crd-td"><strong>New Jersey</strong></td><td class="crd-td">633</td><td class="crd-td">2,26%</td><td class="crd-td">9.638</td><td class="crd-td">Philadelphia (1,58M)</td></tr>
<tr><td class="crd-td"><strong>Oklahoma</strong></td><td class="crd-td">631</td><td class="crd-td">2,25%</td><td class="crd-td">16.039</td><td class="crd-td">Oklahoma City (729,5k)</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">622</td><td class="crd-td">2,22%</td><td class="crd-td">14.822</td><td class="crd-td">Atlanta (540,7k)</td></tr>
<tr><td class="crd-td"><strong>Maryland</strong></td><td class="crd-td">614</td><td class="crd-td">2,19%</td><td class="crd-td">4.822</td><td class="crd-td">Baltimore (565,9k)</td></tr>
<tr><td class="crd-td"><strong>Alabama</strong></td><td class="crd-td">559</td><td class="crd-td">2%</td><td class="crd-td">12.782</td><td class="crd-td">Huntsville (238,8k)</td></tr>
<tr><td class="crd-td"><strong>Washington</strong></td><td class="crd-td">542</td><td class="crd-td">1,94%</td><td class="crd-td">8.579</td><td class="crd-td">Seattle (811,7k)</td></tr>
<tr><td class="crd-td"><strong>Arkansas</strong></td><td class="crd-td">541</td><td class="crd-td">1,93%</td><td class="crd-td">13.813</td><td class="crd-td">Little Rock (206,1k)</td></tr>
<tr><td class="crd-td"><strong>Nebraska</strong></td><td class="crd-td">514</td><td class="crd-td">1,84%</td><td class="crd-td">13.678</td><td class="crd-td">Omaha (491,9k)</td></tr>
<tr><td class="crd-td"><strong>Kentucky</strong></td><td class="crd-td">494</td><td class="crd-td">1,76%</td><td class="crd-td">11.753</td><td class="crd-td">Louisville (810,8k)</td></tr>
<tr><td class="crd-td"><strong>Massachusetts</strong></td><td class="crd-td">493</td><td class="crd-td">1,76%</td><td class="crd-td">3.151</td><td class="crd-td">Boston (687,1k)</td></tr>
<tr><td class="crd-td"><strong>Virginia</strong></td><td class="crd-td">473</td><td class="crd-td">1,69%</td><td class="crd-td">6.844</td><td class="crd-td">Virginia Beach (454,7k)</td></tr>
<tr><td class="crd-td"><strong>Louisiana</strong></td><td class="crd-td">450</td><td class="crd-td">1,61%</td><td class="crd-td">8.675</td><td class="crd-td">New Orleans (355,1k)</td></tr>
<tr><td class="crd-td"><strong>Tennessee</strong></td><td class="crd-td">445</td><td class="crd-td">1,59%</td><td class="crd-td">10.033</td><td class="crd-td">Nashville (748,2k)</td></tr>
<tr><td class="crd-td"><strong>South Carolina</strong></td><td class="crd-td">375</td><td class="crd-td">1,34%</td><td class="crd-td">7.702</td><td class="crd-td">Augusta (206,1k)</td></tr>
<tr><td class="crd-td"><strong>Colorado</strong></td><td class="crd-td">368</td><td class="crd-td">1,31%</td><td class="crd-td">7.675</td><td class="crd-td">Denver (743,5k)</td></tr>
<tr><td class="crd-td"><strong>Mississippi</strong></td><td class="crd-td">360</td><td class="crd-td">1,29%</td><td class="crd-td">8.422</td><td class="crd-td">Jackson (137,2k)</td></tr>
<tr><td class="crd-td"><strong>North Dakota</strong></td><td class="crd-td">360</td><td class="crd-td">1,29%</td><td class="crd-td">9.428</td><td class="crd-td">Fargo (140,7k)</td></tr>
<tr><td class="crd-td"><strong>Maine</strong></td><td class="crd-td">352</td><td class="crd-td">1,26%</td><td class="crd-td">1.456</td><td class="crd-td">Portland (70,7k)</td></tr>
<tr><td class="crd-td"><strong>West Virginia</strong></td><td class="crd-td">335</td><td class="crd-td">1,2%</td><td class="crd-td">6.708</td><td class="crd-td">Charleston (45,7k)</td></tr>
<tr><td class="crd-td"><strong>South Dakota</strong></td><td class="crd-td">324</td><td class="crd-td">1,16%</td><td class="crd-td">8.179</td><td class="crd-td">Sioux Falls (216,9k)</td></tr>
<tr><td class="crd-td"><strong>Oregon</strong></td><td class="crd-td">309</td><td class="crd-td">1,1%</td><td class="crd-td">6.528</td><td class="crd-td">Portland (635,4k)</td></tr>
<tr><td class="crd-td"><strong>Utah</strong></td><td class="crd-td">306</td><td class="crd-td">1,09%</td><td class="crd-td">6.997</td><td class="crd-td">Salt Lake City (227,4k)</td></tr>
<tr><td class="crd-td"><strong>Arizona</strong></td><td class="crd-td">286</td><td class="crd-td">1,02%</td><td class="crd-td">2.984</td><td class="crd-td">Phoenix (1,7M)</td></tr>
<tr><td class="crd-td"><strong>Hawaii</strong></td><td class="crd-td">250</td><td class="crd-td">0,89%</td><td class="crd-td">603</td><td class="crd-td">Honolulu CDP (371,7k)</td></tr>
<tr><td class="crd-td"><strong>New Mexico</strong></td><td class="crd-td">246</td><td class="crd-td">0,88%</td><td class="crd-td">3.224</td><td class="crd-td">Albuquerque (559,2k)</td></tr>
<tr><td class="crd-td"><strong>New Hampshire</strong></td><td class="crd-td">231</td><td class="crd-td">0,83%</td><td class="crd-td">1.166</td><td class="crd-td">Manchester (117,3k)</td></tr>
<tr><td class="crd-td"><strong>Idaho</strong></td><td class="crd-td">223</td><td class="crd-td">0,8%</td><td class="crd-td">5.663</td><td class="crd-td">Boise (238,3k)</td></tr>
<tr><td class="crd-td"><strong>Alaska</strong></td><td class="crd-td">216</td><td class="crd-td">0,77%</td><td class="crd-td">4.243</td><td class="crd-td">Anchorage (291,7k)</td></tr>
<tr><td class="crd-td"><strong>Connecticut</strong></td><td class="crd-td">212</td><td class="crd-td">0,76%</td><td class="crd-td">1.689</td><td class="crd-td">Bridgeport (154,7k)</td></tr>
<tr><td class="crd-td"><strong>Montana</strong></td><td class="crd-td">198</td><td class="crd-td">0,71%</td><td class="crd-td">3.683</td><td class="crd-td">Billings (123k)</td></tr>
<tr><td class="crd-td"><strong>Wyoming</strong></td><td class="crd-td">124</td><td class="crd-td">0,44%</td><td class="crd-td">2.846</td><td class="crd-td">Cheyenne (66,8k)</td></tr>
<tr><td class="crd-td"><strong>Vermont</strong></td><td class="crd-td">123</td><td class="crd-td">0,44%</td><td class="crd-td">1.310</td><td class="crd-td">Burlington (44,1k)</td></tr>
<tr><td class="crd-td"><strong>District of Columbia</strong></td><td class="crd-td">91</td><td class="crd-td">0,33%</td><td class="crd-td">757</td><td class="crd-td">Washington (728,7k)</td></tr>
<tr><td class="crd-td"><strong>Delaware</strong></td><td class="crd-td">90</td><td class="crd-td">0,32%</td><td class="crd-td">1.853</td><td class="crd-td">Dover (40,5k)</td></tr>
<tr><td class="crd-td"><strong>Nevada</strong></td><td class="crd-td">75</td><td class="crd-td">0,27%</td><td class="crd-td">657</td><td class="crd-td">Las Vegas (701,9k)</td></tr>
<tr><td class="crd-td"><strong>Rhode Island</strong></td><td class="crd-td">56</td><td class="crd-td">0,2%</td><td class="crd-td">504</td><td class="crd-td">Providence (198,6k)</td></tr>
<tr><td class="crd-td"><strong>American Samoa</strong></td><td class="crd-td">55</td><td class="crd-td">0,2%</td><td class="crd-td">140</td><td class="crd-td">Pago Pago (11,5k)</td></tr>
<tr><td class="crd-td"><strong>Bermuda</strong></td><td class="crd-td">16</td><td class="crd-td">0,06%</td><td class="crd-td">62</td><td class="crd-td">Pembroke Parish (11,2k)</td></tr>
<tr><td class="crd-td"><strong>All 53 Jurisdictions</strong></td><td class="crd-td">27.997</td><td class="crd-td">100%</td><td class="crd-td">553.616</td><td class="crd-td">New York (8,6M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> State-by-state and territorial settlement counts, observation totals and largest latest centres across all 53 CENTAUR-II U.S., Bermudian and American Samoan jurisdictions.</figcaption>
</figure>

# Results

## State-by-State Settlement Density and Rank-Size Structure

`Figure` \ref{fig:us-settlements} and `Table` \ref{tab:us-state-counts} demonstrate high variation in municipal fragmentation across the 53 jurisdictions. Five states exceed `1.200` catalogued settlements: Pennsylvania (`1.674`, `5,98%`), Texas (`1.538`, `5,49%`), Illinois (`1.399`, `5,00%`), New York (`1.318`, `4,71%`) and California (`1.240`, `4,43%`), reflecting dense nineteenth-century borough and township incorporation in the Northeast and Midwest alongside massive contemporary urbanisation in Texas and California. By contrast, small-area jurisdictions and sparse mountain states contain fewer discrete entries (Nevada `80`, Delaware `77`, American Samoa `55`, District of Columbia `54`, Rhode Island `53`, Bermuda `16`).

<figure class="crd-table-figure" id="tab:us-top25">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">First Yr</th><th class="crd-th">Peak Yr</th><th class="crd-th">Peak Pop</th><th class="crd-th">Latest Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">New York</td><td class="crd-td">New York</td><td class="crd-td">1760</td><td class="crd-td">2020</td><td class="crd-td">8,74M</td><td class="crd-td">8,6M (2026)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Los Angeles</td><td class="crd-td">California</td><td class="crd-td">1781</td><td class="crd-td">2019</td><td class="crd-td">3,98M</td><td class="crd-td">3,92M (2026)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Chicago</td><td class="crd-td">Illinois</td><td class="crd-td">1840</td><td class="crd-td">1950</td><td class="crd-td">3,62M</td><td class="crd-td">2,76M (2026)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Houston</td><td class="crd-td">Texas</td><td class="crd-td">1850</td><td class="crd-td">2026</td><td class="crd-td">2,47M</td><td class="crd-td">2,47M (2026)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Philadelphia</td><td class="crd-td">Pennsylvania</td><td class="crd-td">1760</td><td class="crd-td">1950</td><td class="crd-td">2,07M</td><td class="crd-td">1,58M (2026)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Detroit</td><td class="crd-td">Michigan</td><td class="crd-td">1765</td><td class="crd-td">1950</td><td class="crd-td">1,85M</td><td class="crd-td">656,9k (2026)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Phoenix</td><td class="crd-td">Arizona</td><td class="crd-td">1890</td><td class="crd-td">2026</td><td class="crd-td">1,7M</td><td class="crd-td">1,7M (2026)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">San Antonio</td><td class="crd-td">Texas</td><td class="crd-td">1776</td><td class="crd-td">2026</td><td class="crd-td">1,58M</td><td class="crd-td">1,58M (2026)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">San Diego</td><td class="crd-td">California</td><td class="crd-td">1769</td><td class="crd-td">2026</td><td class="crd-td">1,42M</td><td class="crd-td">1,42M (2026)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Dallas</td><td class="crd-td">Texas</td><td class="crd-td">1880</td><td class="crd-td">2026</td><td class="crd-td">1,35M</td><td class="crd-td">1,35M (2026)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Fort Worth</td><td class="crd-td">Texas</td><td class="crd-td">1880</td><td class="crd-td">2026</td><td class="crd-td">1,06M</td><td class="crd-td">1,06M (2026)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Jacksonville</td><td class="crd-td">Florida</td><td class="crd-td">1850</td><td class="crd-td">2026</td><td class="crd-td">1,05M</td><td class="crd-td">1,05M (2026)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">San Jose</td><td class="crd-td">California</td><td class="crd-td">1777</td><td class="crd-td">2017</td><td class="crd-td">1,04M</td><td class="crd-td">1,02M (2026)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Austin</td><td class="crd-td">Texas</td><td class="crd-td">1850</td><td class="crd-td">2026</td><td class="crd-td">1,01M</td><td class="crd-td">1,01M (2026)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Charlotte</td><td class="crd-td">North Carolina</td><td class="crd-td">1768</td><td class="crd-td">2026</td><td class="crd-td">990,5k</td><td class="crd-td">990,5k (2026)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Columbus</td><td class="crd-td">Ohio</td><td class="crd-td">1830</td><td class="crd-td">2026</td><td class="crd-td">955,8k</td><td class="crd-td">955,8k (2026)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Baltimore</td><td class="crd-td">Maryland</td><td class="crd-td">1760</td><td class="crd-td">1950</td><td class="crd-td">949,7k</td><td class="crd-td">565,9k (2026)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Cleveland</td><td class="crd-td">Ohio</td><td class="crd-td">1820</td><td class="crd-td">1925</td><td class="crd-td">922,9k</td><td class="crd-td">367,1k (2026)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Indianapolis</td><td class="crd-td">Indiana</td><td class="crd-td">1840</td><td class="crd-td">2026</td><td class="crd-td">908,3k</td><td class="crd-td">908,3k (2026)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">San Francisco</td><td class="crd-td">California</td><td class="crd-td">1776</td><td class="crd-td">2018</td><td class="crd-td">879,7k</td><td class="crd-td">841,1k (2026)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">St. Louis</td><td class="crd-td">Missouri</td><td class="crd-td">1764</td><td class="crd-td">1930</td><td class="crd-td">822k</td><td class="crd-td">273,2k (2026)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Seattle</td><td class="crd-td">Washington</td><td class="crd-td">1870</td><td class="crd-td">2026</td><td class="crd-td">811,7k</td><td class="crd-td">811,7k (2026)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Louisville</td><td class="crd-td">Kentucky</td><td class="crd-td">1778</td><td class="crd-td">2026</td><td class="crd-td">810,8k</td><td class="crd-td">810,8k (2026)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Brooklyn</td><td class="crd-td">New York</td><td class="crd-td">1775</td><td class="crd-td">1890</td><td class="crd-td">806,3k</td><td class="crd-td">806,3k (1890)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Washington</td><td class="crd-td">District of Columbia</td><td class="crd-td">1800</td><td class="crd-td">1950</td><td class="crd-td">802,2k</td><td class="crd-td">728,7k (2026)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 25 U.S. urban centres ranked by peak catalogued municipal city-proper census population (1790-2026 AD).</figcaption>
</figure>

## Post-War Municipal Contraction and Sunbelt Growth

`Table` \ref{tab:us-top25} isolates strictly municipal city-proper census trajectories (`SUMLEV=162`/`170` and `twps0027`) across two centuries of urban restructuring [@gibson1998; @uscb2025subest]. Leading peaks balance mature mid-century manufacturing hubs - Chicago (`3,62M` in 1950 AD; `2,76M` in 2026 AD), Philadelphia (`2,07M` in 1950 AD; `1,58M` in 2026 AD), Detroit (`1,85M` in 1950 AD; `656,9k` in 2026 AD), Cleveland (`922,9k` in 1925 AD; `367,1k` in 2026 AD) and St. Louis (`822,0k` in 1930 AD; `273,3k` in 2026 AD) - with twenty-first-century coastal and Sunbelt annexation leaders including New York (`8,74M` in 2020 AD; `8,60M` in 2026 AD), Los Angeles (`3,98M` in 2019 AD; `3,92M` in 2026 AD), Houston (`2,47M` in 2026 AD), Phoenix (`1,70M`), San Antonio (`1,58M`) and Austin (`1,01M`).

# Limitations

Three limitations apply to the `27.997`-settlement U.S. gazetteer. First, `8.123` unincorporated places and CDPs carry only GeoNames `2020` and `2025` AD point populations without intercensal annual series [@geonames2026], whereas `19.874` incorporated places (`SUMLEV=162`/`170` and census towns) preserve continuous or multi-decadal trajectories [@uscb2025subest]. Second, unadjusted summation of raw municipal records in `2000 AD` totals `190,81M` (`67,60%` of the `282,28M` U.S. headline total) rather than `100%` because rural township inhabitants and unincorporated suburban fringes outside `SUMLEV=162`/`170` limits reside on the kriged rural surface; `ViscountSubstrataMosaic` reconciles rural residual density onto 5-arcminute cells bounded by state control totals. Third, 2025-2026 AD municipal figures represent conservative damped extrapolations (`[0,97; 1,03]`) from 2022-2024 AD Census estimates rather than final statutory enumerations.

# Sources

<div id="refs"></div>
