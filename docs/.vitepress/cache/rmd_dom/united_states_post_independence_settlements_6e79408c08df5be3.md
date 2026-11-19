---
title: "Settlement Gazetteer of the United States, Bermuda and American Samoa (1783AD to 2026AD)"
subtitle: "CENTAUR-II: Urban Hierarchy, Subcounty Census Places and Metropolitan Trajectories, 1783AD to 2026AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_united_states_post_independence_spatial.png"
hero_caption: "Spatial distribution of 36.949 catalogued settlements across the 53 jurisdictions of the United States, Bermuda and American Samoa from 1783AD to 2026AD."
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

This gazetteer compiles 36.949 geolocated settlements (1.003.887 settlement-year observations across 38.969 ledger candidates) in all 50 U.S. states, the District of Columbia (28), Bermuda (13) and American Samoa (29) between 1783AD and 2026AD. Unifying the 1790AD First Federal Census and historical decennial U.S. Census municipal schedules [@uscb1791; @uscb2021apportion; @monkkonen1988], 1990–2020AD PL 94-171 places, Census-Designated Places (CDPs) and non-overlapping Minor Civil Divisions, annual 2000–2024AD subcounty resident estimates projected to 2026AD [@uscb2025subest], Bermudian and American Samoan returns [@bermuda2018; @uscb2022as] and GeoNames populated places matched across a 55 km tolerance [@geonames2026], the catalogue spans 230 places in 1783AD (512,8k, 11,72% of headline total), 590 in 1790AD (814,1k, 16,28%), 16.031 in 1850AD (10,46M, 44,21%), 24.038 in 1900AD (41,06M, 53,86%), 32.935 in 1950AD (110,8M, 73,2%), 35.742 in 2000AD (234,23M, 82,98%), 34.081 in 2020AD (254,55M, 76,74%) and 19.129 annual incorporated places in 2026AD (217,37M, 63,07%). All 36.949 entries maintain pre-1975AD historical continuity (36.739 carrying three or more chronological observations), dispersing unincorporated hamlet antecedents smoothly across 1851–1974AD alongside 94 twentieth-century planned and military foundations.

# Background

At the First Federal Census of 1790AD, urban settlement in the young republic remained modest and overwhelmingly coastal: only five core cities exceeded 10k residents (New York at 33,1k prior to 1898AD five-borough consolidation, Philadelphia at 28,5k, Boston at 18,3k, Charleston at 16,4k and Baltimore at 13,5k), whilst smaller seaports such as Salem (7,9k) and Newport (6,7k) handled Atlantic trade [@uscb1791; @monkkonen1988]. Between 1810AD and 1860AD, canals, river steamboats and railroad trunk lines propelled interior city formation across the Ohio, Mississippi and Great Lakes basins [@pred1966; @monkkonen1988]. By 1850AD, New Orleans (116,4k), Cincinnati (115,4k) and St. Louis (77,9k) ranked alongside Atlantic ports (Table \ref{tab:us-top25}), while Chicago (4.470 in 1840AD; 30k in 1850AD) began a rapid surge toward second place nationally (1,7M by 1900AD).

Across the twentieth century, municipal growth diverged sharply between aggressive annexation and suburban fragmentation [@teaford1979; @jackson1985]. Early statutory mergers, notably Philadelphia's Act of Consolidation in 1854AD, Greater New York's 1898AD union across Manhattan, Brooklyn, Queens, The Bronx and Staten Island, and Pittsburgh's 1907AD annexation of Allegheny, created vast core cities, after which post-1945AD suburban dispersion populated thousands of peripheral incorporated suburbs, New England towns and unincorporated Census-Designated Places [@uscb2025subest; @geonames2026]. Capturing that entire suburban ring requires integrating full subcounty incorporated place series with PL 94-171 places, CDPs and non-overlapping Minor Civil Divisions rather than relying on truncated top-100 city rankings.

# Methodology

## Multi-Layer Urban Ingestion and Boundary Reconciliation

All 36.949 settlement records are assembled across four stages:

1. **Subcounty Estimates and Decennial Apportionment (2000AD to 2026AD)**: Official Census Bureau 2000–2024AD Subcounty Resident Population Estimates contribute incorporated places, consolidated city-county governments and Washington, D.C., with 2025AD and 2026AD figures extrapolated from 2022–2024AD municipal growth rates clamped to [0,97; 1,03] [@uscb2025subest; @uscb2021apportion].
2. **PL 94-171 Places, CDPs, Non-Overlapping MCDs and Decennial Schedules (1783AD to 2020AD)**: Decennial PL 94-171 blocks (1990AD to 2020AD) supply incorporated places, unincorporated CDPs and non-overlapping Minor Civil Divisions (7.115 combined settlements across New England, New York, New Jersey and Pennsylvania), matched across a 55 km polygon tolerance against historical decennial U.S. Census municipal returns (1790AD to 1990AD) [@uscb1791; @uscb2025subest; @monkkonen1988] and colonial town anchors (Philadelphia 23.800 and New York 18.000 in 1760AD; Los Angeles 44 in 1781AD). Smaller unincorporated settlements lacking published early city schedules receive conservative pre-tabulation hamlet antecedents staggered smoothly across 1851–1974AD while 94 modern military bases and planned communities retain explicit twentieth-century foundation-year bounds.
3. **Metropolitan Mergers, Border Retrocessions and Island Jurisdictions**: Post-1898AD consolidated boroughs remain unified inside New York-New York, while pre-consolidation borough series for The Bronx, Queens and Staten Island cap at 1890AD (with colonial Brooklyn recorded at 1775AD and 1783AD, and pre-1898 Manhattan subsumed directly within New York-New York to prevent duplicate municipal totals). Similarly, Georgetown terminates in 1870AD prior to the 1871AD District of Columbia Organic Act, whilst retroceded Alexandria and Arlington align to Virginia (1846–1847AD retrocession) and Pawtucket and East Providence align to Rhode Island (1862AD Massachusetts-Rhode Island border adjustment) alongside Fall River and Seekonk in Massachusetts. Bermudian parishes (13 entries led by Warwick Parish 8,6k and Hamilton) and American Samoan villages (29 entries led by Pago Pago 11,5k and Tāfuna 8k) join cleanly without metropolitan distortion [@bermuda2018; @uscb2022as; @geonames2026].
4. **Toponymic Deduplication and Mask Alignment**: Administrative suffixes (city, town, village, CDP, consolidated government) are stripped, close-pair records within 1,55 km or matching names within 25 km in the same state collapse into canonical keys, and coordinates snap onto the 53 territorial masks within a 12-pixel coastal search radius.

<figure class="crd-figure-block" id="fig:us-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-united-states-post-independence-settlements/fig4_united_states_post_independence_settlements.png" alt="fig:us-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and fifteen largest municipal city-proper peaks across 36.949 settlements in the United States, Bermuda and American Samoa.</figcaption>
</figure>

# Testing and Validation

Cross-checking 36.949 included records in the gazetteer against 38.969 total candidates in the source ledger confirms 0 unaccounted entries and spatial-schema compliance:

- **Coordinate and Trajectory Coverage**: All 36.949 included records carry valid WGS84 coordinates and 1.003.887 non-empty integer place-year observations (27,17 observations per settlement on average); 36.739 settlements contain >= 3 chronological years and all 36.949 enter on or before 1974AD (1851–1974AD staggered historical antecedents and 94 explicitly dated twentieth-century planned foundations).
- **Ledger Exclusions**: All 2.020 excluded candidates carry documented justifications: 2.014 subordinate suburbs or nearby places merged within 1,55 km of canonical centres (East Setauket, Matteawan, Moyamensing, Arlington Heights), 3 non-CENTAUR territories (San Juan-Puerto Rico, Charlotte Amalie-US Virgin Islands and Hagåtña-Guam) and 3 alias duplicates (District of Columbia unified under Washington, Manhattan-New York unified under New York-New York, and New Boston-Morea consolidated under Morea-Pennsylvania).
- **Pacific Entry and Pre-Annexation Seam**: All 29 American Samoa village series begin in 1970AD (following the territory's 1900AD regional entry at 5.679 inhabitants), while in Hawai'i 165 of 167 settlements enter at 1900AD or later alongside Hilo from 1898AD (3,8k) and Honolulu carrying 1880AD (17k) and 1890AD (22,9k) city anchors.

<figure class="crd-table-figure" id="tab:us-state-counts">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Observations</th><th class="crd-th">Largest Latest Place</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pennsylvania</strong></td><td class="crd-td">2.595</td><td class="crd-td">7,02%</td><td class="crd-td">59.530</td><td class="crd-td">Philadelphia (1,58M)</td></tr>
<tr><td class="crd-td"><strong>California</strong></td><td class="crd-td">1.947</td><td class="crd-td">5,27%</td><td class="crd-td">32.141</td><td class="crd-td">Los Angeles (3,92M)</td></tr>
<tr><td class="crd-td"><strong>Minnesota</strong></td><td class="crd-td">1.890</td><td class="crd-td">5,12%</td><td class="crd-td">47.554</td><td class="crd-td">Minneapolis (434,6k)</td></tr>
<tr><td class="crd-td"><strong>Texas</strong></td><td class="crd-td">1.815</td><td class="crd-td">4,91%</td><td class="crd-td">52.478</td><td class="crd-td">Houston (2,47M)</td></tr>
<tr><td class="crd-td"><strong>New York</strong></td><td class="crd-td">1.802</td><td class="crd-td">4,88%</td><td class="crd-td">45.237</td><td class="crd-td">New York (8,6M)</td></tr>
<tr><td class="crd-td"><strong>Illinois</strong></td><td class="crd-td">1.501</td><td class="crd-td">4,06%</td><td class="crd-td">55.059</td><td class="crd-td">Chicago (2,76M)</td></tr>
<tr><td class="crd-td"><strong>Wisconsin</strong></td><td class="crd-td">1.343</td><td class="crd-td">3,63%</td><td class="crd-td">33.710</td><td class="crd-td">Milwaukee (562,5k)</td></tr>
<tr><td class="crd-td"><strong>Ohio</strong></td><td class="crd-td">1.295</td><td class="crd-td">3,5%</td><td class="crd-td">42.798</td><td class="crd-td">Columbus (955,8k)</td></tr>
<tr><td class="crd-td"><strong>Michigan</strong></td><td class="crd-td">1.286</td><td class="crd-td">3,48%</td><td class="crd-td">31.337</td><td class="crd-td">Detroit (656,9k)</td></tr>
<tr><td class="crd-td"><strong>Missouri</strong></td><td class="crd-td">1.048</td><td class="crd-td">2,84%</td><td class="crd-td">37.876</td><td class="crd-td">Kansas City (523,3k)</td></tr>
<tr><td class="crd-td"><strong>Iowa</strong></td><td class="crd-td">1.036</td><td class="crd-td">2,8%</td><td class="crd-td">40.026</td><td class="crd-td">Des Moines (215,3k)</td></tr>
<tr><td class="crd-td"><strong>Florida</strong></td><td class="crd-td">1.006</td><td class="crd-td">2,72%</td><td class="crd-td">23.240</td><td class="crd-td">Jacksonville (1,05M)</td></tr>
<tr><td class="crd-td"><strong>Oklahoma</strong></td><td class="crd-td">853</td><td class="crd-td">2,31%</td><td class="crd-td">26.739</td><td class="crd-td">Oklahoma City (729,5k)</td></tr>
<tr><td class="crd-td"><strong>North Carolina</strong></td><td class="crd-td">815</td><td class="crd-td">2,21%</td><td class="crd-td">25.600</td><td class="crd-td">Charlotte (990,5k)</td></tr>
<tr><td class="crd-td"><strong>Kansas</strong></td><td class="crd-td">782</td><td class="crd-td">2,12%</td><td class="crd-td">28.205</td><td class="crd-td">Wichita (405,8k)</td></tr>
<tr><td class="crd-td"><strong>New Jersey</strong></td><td class="crd-td">768</td><td class="crd-td">2,08%</td><td class="crd-td">19.243</td><td class="crd-td">Newark (328,7k)</td></tr>
<tr><td class="crd-td"><strong>Indiana</strong></td><td class="crd-td">724</td><td class="crd-td">1,96%</td><td class="crd-td">24.932</td><td class="crd-td">Indianapolis (908,3k)</td></tr>
<tr><td class="crd-td"><strong>Washington</strong></td><td class="crd-td">718</td><td class="crd-td">1,94%</td><td class="crd-td">16.067</td><td class="crd-td">Seattle (811,7k)</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">704</td><td class="crd-td">1,91%</td><td class="crd-td">24.167</td><td class="crd-td">Atlanta (540,7k)</td></tr>
<tr><td class="crd-td"><strong>Arkansas</strong></td><td class="crd-td">701</td><td class="crd-td">1,9%</td><td class="crd-td">22.273</td><td class="crd-td">Little Rock (206,1k)</td></tr>
<tr><td class="crd-td"><strong>Alabama</strong></td><td class="crd-td">690</td><td class="crd-td">1,87%</td><td class="crd-td">20.265</td><td class="crd-td">Huntsville (238,8k)</td></tr>
<tr><td class="crd-td"><strong>Virginia</strong></td><td class="crd-td">642</td><td class="crd-td">1,74%</td><td class="crd-td">14.387</td><td class="crd-td">Virginia Beach (454,7k)</td></tr>
<tr><td class="crd-td"><strong>Nebraska</strong></td><td class="crd-td">571</td><td class="crd-td">1,55%</td><td class="crd-td">21.481</td><td class="crd-td">Omaha (491,9k)</td></tr>
<tr><td class="crd-td"><strong>Maine</strong></td><td class="crd-td">546</td><td class="crd-td">1,48%</td><td class="crd-td">11.120</td><td class="crd-td">Portland (70,7k)</td></tr>
<tr><td class="crd-td"><strong>New Mexico</strong></td><td class="crd-td">537</td><td class="crd-td">1,45%</td><td class="crd-td">8.744</td><td class="crd-td">Albuquerque (559,2k)</td></tr>
<tr><td class="crd-td"><strong>Tennessee</strong></td><td class="crd-td">529</td><td class="crd-td">1,43%</td><td class="crd-td">16.165</td><td class="crd-td">Nashville (748,2k)</td></tr>
<tr><td class="crd-td"><strong>Kentucky</strong></td><td class="crd-td">524</td><td class="crd-td">1,42%</td><td class="crd-td">16.905</td><td class="crd-td">Louisville (810,8k)</td></tr>
<tr><td class="crd-td"><strong>Colorado</strong></td><td class="crd-td">505</td><td class="crd-td">1,37%</td><td class="crd-td">13.311</td><td class="crd-td">Denver (743,5k)</td></tr>
<tr><td class="crd-td"><strong>Maryland</strong></td><td class="crd-td">498</td><td class="crd-td">1,35%</td><td class="crd-td">9.844</td><td class="crd-td">Baltimore (565,9k)</td></tr>
<tr><td class="crd-td"><strong>Louisiana</strong></td><td class="crd-td">488</td><td class="crd-td">1,32%</td><td class="crd-td">14.338</td><td class="crd-td">New Orleans (355,1k)</td></tr>
<tr><td class="crd-td"><strong>Montana</strong></td><td class="crd-td">488</td><td class="crd-td">1,32%</td><td class="crd-td">9.155</td><td class="crd-td">Billings (123k)</td></tr>
<tr><td class="crd-td"><strong>South Carolina</strong></td><td class="crd-td">479</td><td class="crd-td">1,3%</td><td class="crd-td">13.612</td><td class="crd-td">Charleston (161,1k)</td></tr>
<tr><td class="crd-td"><strong>Arizona</strong></td><td class="crd-td">478</td><td class="crd-td">1,29%</td><td class="crd-td">7.638</td><td class="crd-td">Phoenix (1,7M)</td></tr>
<tr><td class="crd-td"><strong>South Dakota</strong></td><td class="crd-td">464</td><td class="crd-td">1,26%</td><td class="crd-td">13.977</td><td class="crd-td">Sioux Falls (216,9k)</td></tr>
<tr><td class="crd-td"><strong>West Virginia</strong></td><td class="crd-td">455</td><td class="crd-td">1,23%</td><td class="crd-td">12.371</td><td class="crd-td">Charleston (45,7k)</td></tr>
<tr><td class="crd-td"><strong>Massachusetts</strong></td><td class="crd-td">446</td><td class="crd-td">1,21%</td><td class="crd-td">9.038</td><td class="crd-td">Boston (687,1k)</td></tr>
<tr><td class="crd-td"><strong>Mississippi</strong></td><td class="crd-td">439</td><td class="crd-td">1,19%</td><td class="crd-td">14.041</td><td class="crd-td">Jackson (137,2k)</td></tr>
<tr><td class="crd-td"><strong>Oregon</strong></td><td class="crd-td">422</td><td class="crd-td">1,14%</td><td class="crd-td">11.209</td><td class="crd-td">Portland (635,4k)</td></tr>
<tr><td class="crd-td"><strong>North Dakota</strong></td><td class="crd-td">416</td><td class="crd-td">1,13%</td><td class="crd-td">14.780</td><td class="crd-td">Fargo (140,7k)</td></tr>
<tr><td class="crd-td"><strong>Alaska</strong></td><td class="crd-td">411</td><td class="crd-td">1,11%</td><td class="crd-td">8.550</td><td class="crd-td">Anchorage (291,7k)</td></tr>
<tr><td class="crd-td"><strong>Utah</strong></td><td class="crd-td">411</td><td class="crd-td">1,11%</td><td class="crd-td">11.788</td><td class="crd-td">Salt Lake City (227,4k)</td></tr>
<tr><td class="crd-td"><strong>Vermont</strong></td><td class="crd-td">301</td><td class="crd-td">0,81%</td><td class="crd-td">7.360</td><td class="crd-td">Burlington (44,1k)</td></tr>
<tr><td class="crd-td"><strong>New Hampshire</strong></td><td class="crd-td">299</td><td class="crd-td">0,81%</td><td class="crd-td">6.690</td><td class="crd-td">Manchester (117,3k)</td></tr>
<tr><td class="crd-td"><strong>Connecticut</strong></td><td class="crd-td">296</td><td class="crd-td">0,8%</td><td class="crd-td">5.708</td><td class="crd-td">Bridgeport (154,7k)</td></tr>
<tr><td class="crd-td"><strong>Idaho</strong></td><td class="crd-td">250</td><td class="crd-td">0,68%</td><td class="crd-td">8.587</td><td class="crd-td">Idaho Panhandle (317,8k)</td></tr>
<tr><td class="crd-td"><strong>Wyoming</strong></td><td class="crd-td">214</td><td class="crd-td">0,58%</td><td class="crd-td">5.140</td><td class="crd-td">Cheyenne (66,8k)</td></tr>
<tr><td class="crd-td"><strong>Hawaii</strong></td><td class="crd-td">167</td><td class="crd-td">0,45%</td><td class="crd-td">1.845</td><td class="crd-td">Honolulu (346k)</td></tr>
<tr><td class="crd-td"><strong>Nevada</strong></td><td class="crd-td">134</td><td class="crd-td">0,36%</td><td class="crd-td">2.022</td><td class="crd-td">Las Vegas (701,9k)</td></tr>
<tr><td class="crd-td"><strong>Delaware</strong></td><td class="crd-td">89</td><td class="crd-td">0,24%</td><td class="crd-td">2.960</td><td class="crd-td">Dover (40,5k)</td></tr>
<tr><td class="crd-td"><strong>Rhode Island</strong></td><td class="crd-td">61</td><td class="crd-td">0,17%</td><td class="crd-td">1.365</td><td class="crd-td">Providence (198,6k)</td></tr>
<tr><td class="crd-td"><strong>American Samoa</strong></td><td class="crd-td">29</td><td class="crd-td">0,08%</td><td class="crd-td">379</td><td class="crd-td">Pago Pago (11,5k)</td></tr>
<tr><td class="crd-td"><strong>District of Columbia</strong></td><td class="crd-td">28</td><td class="crd-td">0,08%</td><td class="crd-td">748</td><td class="crd-td">Washington (728,7k)</td></tr>
<tr><td class="crd-td"><strong>Bermuda</strong></td><td class="crd-td">13</td><td class="crd-td">0,04%</td><td class="crd-td">152</td><td class="crd-td">Warwick Parish (8,6k)</td></tr>
<tr><td class="crd-td"><strong>All 53 Jurisdictions</strong></td><td class="crd-td">36.949</td><td class="crd-td">100%</td><td class="crd-td">1.003.887</td><td class="crd-td">New York (8,6M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> State-by-state and territorial settlement counts, observation totals and largest latest centres across all 53 U.S., Bermudian and American Samoan jurisdictions.</figcaption>
</figure>

# Results

## State-by-State Settlement Density and Rank-Size Structure

Figure \ref{fig:us-settlements} and Table \ref{tab:us-state-counts} reveal sharp regional variation in municipal fragmentation across the 53 jurisdictions. Nine states exceed 1.200 catalogued settlements: Pennsylvania (2.595, 7,02%, 44.421 observations), California (1.947, 5,27%), Minnesota (1.890, 5,12%), Texas (1.815, 4,91%), New York (1.803, 4,88%), Illinois (1.501, 4,06%), Wisconsin (1.343, 3,63%), Ohio (1.295, 3,5%) and Michigan (1.286, 3,48%). High counts across Pennsylvania, Minnesota, New York, Illinois, Wisconsin and Michigan reflect dense nineteenth-century township and Minor Civil Division organisation alongside incorporated boroughs, whereas California and Texas combine sprawling metropolitan suburbs with hundreds of unincorporated CDPs. By contrast, small-area or desert jurisdictions hold fewer entries (Nevada 134, Delaware 89, Rhode Island 61, American Samoa 29, District of Columbia 28, Bermuda 13).

<figure class="crd-table-figure" id="tab:us-top25">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">First Year</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak</th><th class="crd-th">Latest</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">New York</td><td class="crd-td">New York</td><td class="crd-td">1760AD</td><td class="crd-td">2020AD</td><td class="crd-td">8,74M</td><td class="crd-td">8,6M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Los Angeles</td><td class="crd-td">California</td><td class="crd-td">1781AD</td><td class="crd-td">2019AD</td><td class="crd-td">3,98M</td><td class="crd-td">3,92M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Chicago</td><td class="crd-td">Illinois</td><td class="crd-td">1840AD</td><td class="crd-td">1950AD</td><td class="crd-td">3,62M</td><td class="crd-td">2,76M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Houston</td><td class="crd-td">Texas</td><td class="crd-td">1850AD</td><td class="crd-td">2026AD</td><td class="crd-td">2,47M</td><td class="crd-td">2,47M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Philadelphia</td><td class="crd-td">Pennsylvania</td><td class="crd-td">1760AD</td><td class="crd-td">1950AD</td><td class="crd-td">2,07M</td><td class="crd-td">1,58M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Detroit</td><td class="crd-td">Michigan</td><td class="crd-td">1765AD</td><td class="crd-td">1950AD</td><td class="crd-td">1,85M</td><td class="crd-td">656,9k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Phoenix</td><td class="crd-td">Arizona</td><td class="crd-td">1850AD</td><td class="crd-td">2026AD</td><td class="crd-td">1,7M</td><td class="crd-td">1,7M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">San Antonio</td><td class="crd-td">Texas</td><td class="crd-td">1776AD</td><td class="crd-td">2026AD</td><td class="crd-td">1,58M</td><td class="crd-td">1,58M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">San Diego</td><td class="crd-td">California</td><td class="crd-td">1769AD</td><td class="crd-td">2026AD</td><td class="crd-td">1,42M</td><td class="crd-td">1,42M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Dallas</td><td class="crd-td">Texas</td><td class="crd-td">1850AD</td><td class="crd-td">2026AD</td><td class="crd-td">1,35M</td><td class="crd-td">1,35M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Fort Worth</td><td class="crd-td">Texas</td><td class="crd-td">1850AD</td><td class="crd-td">2026AD</td><td class="crd-td">1,06M</td><td class="crd-td">1,06M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Jacksonville</td><td class="crd-td">Florida</td><td class="crd-td">1850AD</td><td class="crd-td">2026AD</td><td class="crd-td">1,05M</td><td class="crd-td">1,05M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">San Jose</td><td class="crd-td">California</td><td class="crd-td">1777AD</td><td class="crd-td">2017AD</td><td class="crd-td">1,04M</td><td class="crd-td">1,02M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Austin</td><td class="crd-td">Texas</td><td class="crd-td">1850AD</td><td class="crd-td">2026AD</td><td class="crd-td">1,01M</td><td class="crd-td">1,01M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Charlotte</td><td class="crd-td">North Carolina</td><td class="crd-td">1768AD</td><td class="crd-td">2026AD</td><td class="crd-td">990,5k</td><td class="crd-td">990,5k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Columbus</td><td class="crd-td">Ohio</td><td class="crd-td">1830AD</td><td class="crd-td">2026AD</td><td class="crd-td">955,8k</td><td class="crd-td">955,8k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Baltimore</td><td class="crd-td">Maryland</td><td class="crd-td">1760AD</td><td class="crd-td">1950AD</td><td class="crd-td">949,7k</td><td class="crd-td">565,9k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Cleveland</td><td class="crd-td">Ohio</td><td class="crd-td">1820AD</td><td class="crd-td">1950AD</td><td class="crd-td">914,8k</td><td class="crd-td">367,1k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Indianapolis</td><td class="crd-td">Indiana</td><td class="crd-td">1840AD</td><td class="crd-td">2026AD</td><td class="crd-td">908,3k</td><td class="crd-td">908,3k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">San Francisco</td><td class="crd-td">California</td><td class="crd-td">1776AD</td><td class="crd-td">2018AD</td><td class="crd-td">879,7k</td><td class="crd-td">841,1k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">St. Louis</td><td class="crd-td">Missouri</td><td class="crd-td">1764AD</td><td class="crd-td">1950AD</td><td class="crd-td">856,8k</td><td class="crd-td">273,2k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Seattle</td><td class="crd-td">Washington</td><td class="crd-td">1850AD</td><td class="crd-td">2026AD</td><td class="crd-td">811,7k</td><td class="crd-td">811,7k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Louisville</td><td class="crd-td">Kentucky</td><td class="crd-td">1778AD</td><td class="crd-td">2026AD</td><td class="crd-td">810,8k</td><td class="crd-td">810,8k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Washington</td><td class="crd-td">District of Columbia</td><td class="crd-td">1800AD</td><td class="crd-td">1950AD</td><td class="crd-td">802,2k</td><td class="crd-td">728,7k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Boston</td><td class="crd-td">Massachusetts</td><td class="crd-td">1760AD</td><td class="crd-td">1950AD</td><td class="crd-td">801,4k</td><td class="crd-td">687,1k (2026AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 25 U.S. urban centres ranked by peak catalogued municipal city-proper census population (1790AD to 2026AD).</figcaption>
</figure>

## Post-War Municipal Contraction and Sunbelt Growth

Table \ref{tab:us-top25} isolates strictly municipal city-proper trajectories from decennial U.S. Census returns and subcounty Census estimates [@uscb1791; @monkkonen1988; @uscb2025subest]. Mid-century industrial peaks show dramatic inner-city contractions: Chicago (3,62M in 1950AD; 2,76M in 2026AD), Philadelphia (2,07M in 1950AD; 1,58M in 2026AD), Detroit (1,85M in 1950AD; 656,9k in 2026AD), Baltimore (949,7k in 1950AD; 565,9k in 2026AD), Cleveland (914,8k in 1950AD; 367,1k in 2026AD), St. Louis (856,8k in 1950AD; 273,3k in 2026AD) and Washington (802,2k in 1950AD; 728,7k in 2026AD), whilst Boston peaked just outside the top 25 at 801,4k in 1950AD (687,1k in 2026AD). Conversely, Sunbelt and Western annexation cities climb steadily into the twenty-first century, led by New York (8,74M in 2020AD; 8,6M in 2026AD), Los Angeles (3,98M in 2019AD; 3,92M in 2026AD), Houston (2,47M in 2026AD), Phoenix (1,7M), San Antonio (1,58M), San Diego (1,42M), Dallas (1,35M), Fort Worth (1,06M), Jacksonville (1,05M), San Jose (1,04M in 2017AD; 1,02M in 2026AD) and Austin (1,01M).

# Limitations

Three limitations apply to the 36.949-settlement U.S. gazetteer. First, unincorporated CDPs and rural Minor Civil Divisions absent from early municipal monographs either draw on conservative staggered pre-tabulation rural antecedents where historical schedules exist or, for 94 twentieth-century planned and military foundations, enter at explicit historical foundation years [@geonames2026; @uscb2025subest], smoothing over local industrial boom-and-bust cycles below the county tier. Second, unadjusted municipal sums capture 82,98% (234,23M) of the 282,28M composite total in 2000AD and 63,07% (217,37M) across 19.129 incorporated cities in 2026AD because rural townships and unincorporated suburban tracts reside outside municipal corporate borders and are allocated separately onto the 5-arcminute grid via rural kriging weights. Third, 2025AD and 2026AD municipal figures reflect conservative clamped projections ([0,97; 1,03]) from 2022–2024AD Census Bureau subcounty estimates rather than final statutory decennial counts [@uscb2025subest].

# Sources

<div id="refs"></div>
