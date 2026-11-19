---
title: "Canada after Confederation, Greenland and Saint-Pierre-et-Miquelon: Census Demography and Northern Settlement"
subtitle: "CENTAUR-II: Modern Canada, Greenland and Saint-Pierre-et-Miquelon, 1867-2026 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_canada_post_confederation_spatial.png"
hero_caption: "The 15 sub-regions of Canada, Greenland and Saint-Pierre-et-Miquelon across 10,98M square kilometres on a 5-arcminute WGS84 grid, with post-Confederation urban settlements scaled by peak population."
hero_label: "fig:hero-canada-post-confederation"
bibliography: canada_post_confederation_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between Confederation in 1867 AD and 2026 AD, the combined population of Canada, Greenland and Saint-Pierre-et-Miquelon expanded more than elevenfold from 3,65M (`3.648.350`) to 41,86M (`41.860.707`) across `10,98M` km² (`324.487` active 5-arcminute cells). Anchored to Dominion decennial censuses from 1871 AD to 1941 AD [@censuscanada1873; @dominion1902; @leacy1983], Statistics Canada quarterly population accounts from 1946 AD to 2026 AD [@statcan2026q3], Danish and Greenlandic administrative returns [@greenlandstat2026; @hamilton2010] and French civil enumerations in Saint-Pierre-et-Miquelon [@insee2024spm; @ribault1962], this module reconstructs 15 harmonised sub-regional trajectories from 1867 AD to 2026 AD. Two structural shifts govern the series: westward prairie and Pacific settlement between 1891 AD and 1931 AD, when Alberta, Saskatchewan and British Columbia multiplied nearly twelvefold from `318,0k` to `2,35M`, and post-1945 metropolitan concentration in Ontario, Québec, British Columbia and Alberta alongside a fivefold Arctic demographic expansion in Nunavut, the Northwest Territories and Greenland.

# Background

Modern demographic accounting across northern North America begins with the British North America Act of 1867 AD and the First Census of the Dominion of Canada in 1871 AD [@censuscanada1873; @urquhart1965]. Before Confederation, colonial parish rolls and provincial enumerations covered only Lower Canada, Upper Canada, Nova Scotia, New Brunswick, Prince Edward Island and Newfoundland [@leacy1983], whilst Rupert's Land, the North-Western Territory and British Columbia relied on Hudson's Bay Company post counts and missionary registers. Extending continuous sub-regional coverage through 2026 AD requires integrating three distinct statistical jurisdictions inside one northern corridor spanning `10.983.153` km² (`Figure` \ref{fig:hero-canada-post-confederation}).

First, the thirteen Canadian provinces and territories occupy `9,02M` km² (`233.870` pixels). Central Canada held `72,94%` of the composite total in 1867 AD (`1,54M` in Ontario and `1,13M` in Québec out of `3,65M`), whereas Maritime out-migration slowed growth in Nova Scotia, New Brunswick and Prince Edward Island during the late nineteenth century [@thornton1985]. Completion of the transcontinental railway and prairie homesteading reversed this Atlantic orientation after 1896 AD, lifting Manitoba, Saskatchewan and Alberta from `52,5k` in 1867 AD to `2,35M` by 1931 AD [@kalbach1979; @beaujot1982]. Following the Second World War, high fertility during the 1946-1965 AD baby boom [@henripin1972] gave way to sub-replacement fertility after 1971 AD [@romaniuc1984], shifting national demographic expansion toward international immigration concentrated in Ontario (`16,26M` in 2026 AD), Québec (`9,07M`), British Columbia (`5,71M`) and Alberta (`5,10M`) [@statcan2026q3].

Second, Greenland (`Kalaallit Nunaat`, `1,96M` km², `90.610` pixels) remained outside Canadian federation under Danish colonial administration and subsequent Home Rule (1979 AD) and Self-Government (2009 AD). Early Moravian and Royal Greenland Trading Department counts recorded `10.950` residents in 1867 AD and `11.893` in 1901 AD, before post-1945 public health campaigns lowered infant mortality and lifted the population from `23.664` in 1951 AD to `56.740` in 2026 AD [@greenlandstat2026; @hamilton2010]. Third, the French archipelago of Saint-Pierre-et-Miquelon (`164` km², `7` pixels) sustained a cod-fishery enclave growing from `4.200` inhabitants in 1867 AD to `6.440` in 1901 AD before settling near `5.560` in 2026 AD [@ribault1962; @insee2024spm].

# Methodology

## Territorial Harmonisation and Boundary Continuity

To preserve spatial comparability over 159 years, all historical enumerations are mapped onto the 15 modern provincial and territorial masks on CENTAUR-II's shared 4320x2160 WGS84 grid (`5` arcminutes). Three major internal boundary reorganisations affect Canadian historical totals. First, Newfoundland joined Confederation only in 1949 AD; its pre-1949 colonial censuses (`1869`, `1874`, `1884`, `1891`, `1901`, `1911`, `1921`, `1935` and `1945 AD`) are interpolated onto the decennial series from 1867 AD onward [@leacy1983]. Second, Alberta and Saskatchewan were carved out of the North-West Territories in 1905 AD, and Manitoba's northern frontier expanded in 1881 AD and 1912 AD; pre-1905 Prairie returns are assigned backward onto the modern provincial masks of Alberta, Saskatchewan and Manitoba [@urquhart1965]. Third, Nunavut separated from the Northwest Territories in 1999 AD; Statistics Canada back-calculated separate Nunavut and residual Northwest Territories estimates to 1991 AD [@statcan2026q3], whilst earlier territorial counts (1867-1986 AD) are partitioned proportionally between the western Mackenzie-Yukon and eastern Arctic districts.

## Benchmark Assembly and Uncertainty Bounds

Each regional series blends two chronological regimes. For 1867-1941 AD, benchmark anchors derive from Dominion decennial censuses and territorial estimates [@censuscanada1873; @dominion1902; @leacy1983], with an initial 1867 AD Confederation baseline matching the concluding boundary of the preceding `colonial_canada_to_1867` module (`3.648.350` total). For 1946-2026 AD, annual July 1 (Q3) provincial and territorial series are ingested directly from Statistics Canada Table 17-10-0009-01 [@statcan2026q3]. Greenland and Saint-Pierre-et-Miquelon retain quinquennial and decennial census anchors from 1867 AD to 2026 AD [@greenlandstat2026; @insee2024spm]. Symmetric `±1,5%` census uncertainty envelopes (`population_bounds`) bound each anchor to accommodate census undercoverage adjustments and pre-1951 territorial estimation error.

## Dasymetric Spatial Calibration

Rural population outside catalogued urban centres is distributed across each provincial mask using `ViscountSubstrataMosaic` and the `sites_p3k14c_na` non-stationary Matérn ($\nu = 3/2$) spatial potential surface [@kelly2025] conditioned on `324.487` active land pixels, with two passes of a 5-pixel separable log-multiplier filter (`border_feather_radius_px = 4`) preventing artificial border discontinuities along the 49th parallel, Labrador-Québec boundary and St. Lawrence corridor [@mcevedy1978; @kleingoldewijk2017].

<figure class="crd-figure-block" id="fig:ca-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-canada-post-confederation/fig2_canada_post_confederation_trajectory.png" alt="fig:ca-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and leading provincial population trajectories across Canada, Greenland and Saint-Pierre-et-Miquelon from 1867 to 2026 AD, with 1,5% census uncertainty bands.</figcaption>
</figure>

# Testing and Validation

Verification proceeded through three automated gatekeeper audits executed at `0` errors GMT+0 prior to manuscript compilation:

1. **Boundary and Confederation Seam Continuity**: Summed regional trajectories at 1867 AD (`3.648.350`) reconcile identically with the terminal benchmark of `colonial_canada_to_1867`, while the 1991-1999 AD Nunavut separation eliminates double-counting of pre-1999 combined Northwest Territories totals (`can_nwt_pre1999`).
2. **Gazetteer and Ledger Exhaustiveness**: Cross-checking `canada_post_confederation_settlements.json` against `canada_post_confederation_source_ledger.json5` confirms `5.043` included settlements (`4.931` in Canada, `98` in Greenland and `14` in Saint-Pierre-et-Miquelon) and `3` documented exclusions (`Port Arthur` amalgamated into Thunder Bay in 1970 AD; `Berlin` renamed Kitchener in 1916 AD; `Godthåb` unified under `Nuuk`) with `0` unaccounted candidates and `0` missing `.sources` arrays.
3. **Inter-Provincial Seam Smoothness**: Gridded 5-arcminute population rasters exhibit smooth density gradients across Ontario-Québec, Prairie and 49th-parallel U.S.-Canadian seams (`p99_soft <= 1,25`).

<figure class="crd-table-figure" id="tab:ca-regions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km2)</th><th class="crd-th">1867</th><th class="crd-th">1901</th><th class="crd-th">1951</th><th class="crd-th">2001</th><th class="crd-th">2026</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Alberta</strong></td><td class="crd-td">648.842</td><td class="crd-td">14,5k</td><td class="crd-td">73k</td><td class="crd-td">943k</td><td class="crd-td">3,06M</td><td class="crd-td">5,1M</td></tr>
<tr><td class="crd-td"><strong>British Columbia</strong></td><td class="crd-td">927.129</td><td class="crd-td">40k</td><td class="crd-td">178,7k</td><td class="crd-td">1,17M</td><td class="crd-td">4,08M</td><td class="crd-td">5,71M</td></tr>
<tr><td class="crd-td"><strong>Manitoba</strong></td><td class="crd-td">568.631</td><td class="crd-td">24,5k</td><td class="crd-td">255,2k</td><td class="crd-td">778k</td><td class="crd-td">1,15M</td><td class="crd-td">1,52M</td></tr>
<tr><td class="crd-td"><strong>New Brunswick</strong></td><td class="crd-td">67.993</td><td class="crd-td">271k</td><td class="crd-td">331,1k</td><td class="crd-td">517k</td><td class="crd-td">749,8k</td><td class="crd-td">883,5k</td></tr>
<tr><td class="crd-td"><strong>Newfoundland and Labrador</strong></td><td class="crd-td">361.332</td><td class="crd-td">142,8k</td><td class="crd-td">221k</td><td class="crd-td">362k</td><td class="crd-td">522k</td><td class="crd-td">552,5k</td></tr>
<tr><td class="crd-td"><strong>Northwest Territories</strong></td><td class="crd-td">1.182.912</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td><td class="crd-td">10,4k</td><td class="crd-td">40,9k</td><td class="crd-td">45,9k</td></tr>
<tr><td class="crd-td"><strong>Nova Scotia</strong></td><td class="crd-td">50.002</td><td class="crd-td">364k</td><td class="crd-td">459,6k</td><td class="crd-td">643k</td><td class="crd-td">932,5k</td><td class="crd-td">1,1M</td></tr>
<tr><td class="crd-td"><strong>Nunavut</strong></td><td class="crd-td">1.738.592</td><td class="crd-td">4,2k</td><td class="crd-td">4k</td><td class="crd-td">5,6k</td><td class="crd-td">28,1k</td><td class="crd-td">43,1k</td></tr>
<tr><td class="crd-td"><strong>Ontario</strong></td><td class="crd-td">921.563</td><td class="crd-td">1,54M</td><td class="crd-td">2,18M</td><td class="crd-td">4,62M</td><td class="crd-td">11,9M</td><td class="crd-td">16,26M</td></tr>
<tr><td class="crd-td"><strong>Prince Edward Island</strong></td><td class="crd-td">4.695</td><td class="crd-td">89k</td><td class="crd-td">103,3k</td><td class="crd-td">99k</td><td class="crd-td">136,7k</td><td class="crd-td">183k</td></tr>
<tr><td class="crd-td"><strong>Québec</strong></td><td class="crd-td">1.448.756</td><td class="crd-td">1,12M</td><td class="crd-td">1,65M</td><td class="crd-td">4,07M</td><td class="crd-td">7,4M</td><td class="crd-td">9,07M</td></tr>
<tr><td class="crd-td"><strong>Saskatchewan</strong></td><td class="crd-td">614.303</td><td class="crd-td">13,5k</td><td class="crd-td">91,3k</td><td class="crd-td">834k</td><td class="crd-td">1M</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Yukon</strong></td><td class="crd-td">485.221</td><td class="crd-td">2,5k</td><td class="crd-td">27,2k</td><td class="crd-td">9k</td><td class="crd-td">30,2k</td><td class="crd-td">50,4k</td></tr>
<tr><td class="crd-td"><strong>Saint Pierre and Miquelon</strong></td><td class="crd-td">164</td><td class="crd-td">4,2k</td><td class="crd-td">6,4k</td><td class="crd-td">4,6k</td><td class="crd-td">6,3k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Greenland (Kalaallit Nunaat)</strong></td><td class="crd-td">1.963.018</td><td class="crd-td">10,9k</td><td class="crd-td">11,9k</td><td class="crd-td">23,7k</td><td class="crd-td">56,4k</td><td class="crd-td">56,7k</td></tr>
<tr><td class="crd-td"><strong>Composite Total</strong></td><td class="crd-td">10.983.153</td><td class="crd-td">3,65M</td><td class="crd-td">5,6M</td><td class="crd-td">14,08M</td><td class="crd-td">31,08M</td><td class="crd-td">41,86M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Population across all 15 sub-regions of Canada, Greenland and Saint-Pierre-et-Miquelon at selected benchmark years (1867-2026 AD).</figcaption>
</figure>

# Results

## Three Demographic Regimes (1867-2026 AD)

Across the 159-year span (`Figure` \ref{fig:ca-trajectory} and `Table` \ref{tab:ca-regions}), aggregate population multiplied by `11,47x` from `3,65M` in 1867 AD to `41,86M` in 2026 AD. Growth followed three distinct phases:

1. **Late-Nineteenth-Century Maritime Slowdown and Laurentian Consolidation (1867-1901 AD)**: Total population rose modestly from `3,65M` to `5,60M` (`1,27%` mean annual growth). Emigration to New England and the American Midwest held Nova Scotia (`364,0k` to `459,6k`), New Brunswick (`271,0k` to `331,1k`) and Prince Edward Island (`89,0k` to `103,3k`) well below natural increase [@thornton1985]. Meanwhile, the 1898 AD Klondike Gold Rush briefly propelled Yukon from `2.500` inhabitants in 1867 AD to `27.219` in 1901 AD before subsiding to `9.000` by 1951 AD [@leacy1983].
2. **Prairie Settlement Boom, Depression and Baby Boom (1901-1971 AD)**: Between 1901 AD and 1911 AD, net immigration lifted the annual growth rate to `2,92%`, the fastest intercensal expansion in Canadian history (`5,60M` to `7,47M`). Saskatchewan surged from `91,3k` in 1901 AD to `921,8k` in 1931 AD before Dust Bowl drought and rural mechanisation stabilised the province near `834,0k` in 1951 AD. Post-war fertility and European immigration then carried Canada from `14,08M` in 1951 AD to `22,01M` in 1971 AD [@dbs1953; @henripin1972].
3. **Service-Metropolitan Concentration and Post-2021 Immigration Surge (1971-2026 AD)**: Fertility fell below replacement after 1971 AD [@romaniuc1984], leaving immigration as the primary driver of expansion. Between 1971 AD and 2026 AD, British Columbia (`2,24M` to `5,71M`), Alberta (`1,67M` to `5,10M`) and Ontario (`7,85M` to `16,26M`) absorbed the bulk of growth, whilst Newfoundland and Labrador peaked in the early 1990s before cod-moratorium out-migration and later recovery (`552,5k` in 2026 AD). Non-permanent resident inflows after 2021 AD pushed the composite series from `38,30M` in 2021 AD to `41,86M` in 2026 AD [@statcan2026q3].

<figure class="crd-figure-block" id="fig:ca-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-canada-post-confederation/fig3_canada_post_confederation_shares.png" alt="fig:ca-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Changing provincial and territorial shares of total population across Canada, Greenland and Saint-Pierre-et-Miquelon (1867-2026 AD).</figcaption>
</figure>

## Sub-Regional Shares and Northern Territories

`Figure` \ref{fig:ca-shares} documents the steady westward shift in demographic weight. Ontario's share declined from `42,10%` in 1867 AD to `38,85%` in 2026 AD, and Québec's fell from `30,84%` in 1867 AD to `21,66%` in 2026 AD. Atlantic Canada (New Brunswick, Nova Scotia, Prince Edward Island and Newfoundland and Labrador combined) fell from `23,76%` (`866,8k`) in 1867 AD to `6,50%` (`2,72M`) in 2026 AD. Conversely, the four western provinces expanded from `2,17%` (`79,0k`) in 1867 AD to `32,51%` (`13,61M`) in 2026 AD. Across the northern jurisdictions (`4,20M` km² in Yukon, Northwest Territories, Nunavut and Greenland combined, or `38,24%` of module land area), population grew from `23.850` in 1867 AD (`0,65%`) to `196.091` in 2026 AD (`0,47%`), remaining concentrated in coastal towns and territorial capitals [@hamilton2010].

# Limitations

Three structural constraints apply to the 1867-2026 AD series. First, pre-1946 annual figures are interpolated between decennial censuses and therefore smooth over short-term shocks such as the 1918-1919 AD influenza pandemic, wartime mobilisation and the 1898 AD Klondike peak. Second, pre-1991 Northwest Territories and Nunavut figures distribute aggregate territorial returns onto post-1999 boundaries using fixed geographic ratios rather than annual settlement-level microdata, introducing greater uncertainty across sparse Arctic tundra (`< 0,03` persons per km²). Third, 2025-2026 AD entries reflect Statistics Canada provisional post-censal estimates and extrapolated Greenland and Saint-Pierre-et-Miquelon trajectories subject to revision after the 2026 AD quinquennial Canadian census [@statcan2022census; @statcan2026q3].

# Sources

<div id="refs"></div>
