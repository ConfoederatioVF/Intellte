---
title: "United States after Independence, Bermuda and American Samoa: Census Demography and Continental Expansion"
subtitle: "CENTAUR-II: United States, Bermuda and Post-1898 Pacific Territories, 1783-2026 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_united_states_post_independence_spatial.png"
hero_caption: "The 53 sub-regions of the United States, Bermuda and American Samoa across 9,13M square kilometres on a 5-arcminute WGS84 grid, with principal urban centres scaled by peak population."
hero_label: "fig:hero-united-states-post-independence"
bibliography: united_states_post_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between the Treaty of Paris in 1783 AD and 2026 AD, population across the 50 U.S. states, the District of Columbia, Bermuda and post-1898 AD American Samoa multiplied nearly seventy-nine-fold from 4,38M (`4.375.088`) to 344,67M (`344.674.486`) across `9,13M` km² (`157.497` active 5-arcminute pixels). Reconstructed from the inaugural 1790 AD federal census [@uscb1791], Bicentennial and Millennial historical census series [@uscb1975; @carter2006], official 1910-2020 AD apportionment counts [@uscb2021apportion], annual 2000-2024 AD subcounty resident estimates [@uscb2025subest] and island administrative returns for Hawai'i, Bermuda and American Samoa [@schmitt1977; @bermuda2018; @uscb2022as], the module harmonises 53 territorial units onto fixed contemporary state masks. Three demographic transitions shape the long-run curve: nineteenth-century trans-Appalachian and Great Plains settlement coupled with European immigration [@easterlin1968; @haines2000], twentieth-century metropolitan industrialisation across the Manufacturing Belt and Pacific coast, and post-1960 AD Sunbelt redistribution lifting the South Atlantic, West South Central and Mountain divisions from `22,74%` of composite population in 1950 AD to `41,35%` in 2026 AD [@frey2015].

# Background

At independence in 1783 AD, settled Euro-American and enslaved African populations remained anchored east of the Appalachian crest, whilst indigenous polities and Spanish-French garrisons held most of the Mississippi valley, Gulf littoral, Great Plains, Southwest and Pacific coast [@uscb1975; @thornton1987]. The 1790 AD First Federal Census enumerated `3,93M` persons inside the original Union [@uscb1791]; adding indigenous populations in unenumerated western territories, Maine, Vermont, Kentucky, Tennessee, Russian Alaska and Bermuda yields `5,00M` across the continental-and-island domain (`Figure` \ref{fig:hero-united-states-post-independence}).

Over the ensuing two centuries, federal territorial acquisitions (Louisiana 1803 AD, Florida 1819 AD, Texas 1845 AD, Oregon 1846 AD, the Mexican Cession 1848 AD, the Gadsden Purchase 1853 AD, Alaska 1867 AD and the 1898 AD Pacific annexations of Hawai'i and American Samoa) integrated `9,13M` km² into one continuous decennial census system [@carter2006; @schmitt1977]. High nineteenth-century natural increase combined with transatlantic migration waves from Ireland, Germany, Scandinavia, Italy, Eastern Europe and Asia to double national numbers roughly every quarter-century until 1860 AD, even after accounting for an estimated `750k` Civil War military deaths between 1861 AD and 1865 AD [@easterlin1968; @hacker2011]. Following the 1924 AD immigration restriction and the Great Depression birth trough, the post-1945 AD baby boom and renewed post-1965 AD Latin American and Asian immigration sustained expansion from `151,38M` in 1950 AD to `344,67M` in 2026 AD [@haines2000; @frey2015].

# Methodology

## State Mask Harmonisation and Pre-Statehood Continuity

All 53 regional time-series are anchored to fixed modern state and territory polygons on CENTAUR-II's 4320x2160 WGS84 grid (`5` arcminutes). Three boundary rules enforce cross-module continuity without anachronistic double-counting:

1. **Colonial-to-Independence Seam (1783 AD)**: Initial 1783 AD state benchmarks join directly onto the terminal totals of `colonial_america_to_1783`. For states formed later out of western territories or parent states (such as Maine from Massachusetts in 1820 AD and West Virginia from Virginia in 1863 AD), pre-statehood 1783 AD estimates combine indigenous baseline densities with early frontier returns from `colonial_america_to_1783`.
2. **Pacific Annexation Handover (1898-1900 AD)**: `usa_hawaii` (`135.000` in 1898 AD) and `usa_american_samoa` (`5.679` in 1900 AD) enter the U.S. module strictly at annexation, leaving pre-1898 AD Polynesian demography inside the specialist `hawaii_and_american_samoa` (`hawaii_and_american_polynesia`) module [@schmitt1977; @uscb2022as].
3. **Alaska and Bermuda Continuity**: Alaska (`62.500` in 1783 AD, reflecting indigenous Aleut, Yupik, Inupiat, Athabascan and Tlingit populations prior to the 1880 AD U.S. census figure of `33.426`) bridges from the `colonial_america_to_1783` northern rim into U.S. decennial enumerations after 1867 AD, whilst Bermuda (`10.381` in 1783 AD to `64.750` in 2026 AD) tracks British colonial and Bermudian census benchmarks [@bermuda2018].

## Census Ingestion, Extrapolation and Dasymetric Calibration

For 1790-1900 AD, decennial state returns derive from U.S. Census Bureau historical compendia [@uscb1791; @uscb1975; @carter2006]. For 1910-2020 AD, official decennial state apportionment totals (`us_apportionment_1910_2020.csv`) are merged with annual 2000-2024 AD state (`SUMLEV=040`) intercensal and post-censal estimates (`us_sub_est00int.csv`, `us_sub_est2020.csv`, `us_sub_est2024.csv`) [@uscb2021apportion; @uscb2025subest]. State populations for 2025-2026 AD are projected forward from each state's 2020-2024 AD compound annual growth rate clamped to `[0,98; 1,03]`. Every state anchor carries symmetric `±1,5%` uncertainty intervals (`population_bounds`). Non-urban rural population is allocated inside each state mask via `ViscountSubstrataMosaic` using the `sites_p3k14c_na` Matérn ($\nu = 3/2$) potential surface [@kelly2025] and `sites_hawaii_polynesia` in Hawai'i and American Samoa, smoothed with `border_feather_radius_px = 4` across state borders [@mcevedy1978; @kleingoldewijk2017].

<figure class="crd-figure-block" id="fig:us-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-united-states-post-independence/fig2_united_states_post_independence_trajectory.png" alt="fig:us-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and leading state demographic trajectories across the United States, Bermuda and American Samoa from 1783 to 2026 AD.</figcaption>
</figure>

# Testing and Validation

All structural and cross-module checks passed at `0` errors GMT+0:

1. **Apportionment and Subcounty Reconciliation**: Annual state totals from 2000 AD to 2024 AD reconcile exactly against `SUMLEV=040` U.S. Census tables, while 1910-2020 AD decennial benchmarks match official apportionment returns [@uscb2021apportion; @uscb2025subest].
2. **Gazetteer Exhaustiveness**: Cross-verification of `united_states_post_independence_settlements.json` against `united_states_post_independence_source_ledger.json5` confirms `27.997` included settlements across all 53 jurisdictions and `9` explicitly excluded non-CENTAUR or consolidated candidates (`San Juan-Puerto Rico`, `Charlotte Amalie-US Virgin Islands`, `Hagatna-Guam`, `Southwark-Pennsylvania`, the four New York City post-1898 consolidated boroughs `Manhattan`, `Queens`, `Bronx` and `Staten Island`, plus `District of Columbia` coterminous with `Washington`).
3. **1898 AD Pacific Handover**: Summing `usa_hawaii` and `usa_american_samoa` returns `0` pre-1898 AD leakage inside `united_states_post_independence.json5` (`domain = [1898, 2026]`).

<figure class="crd-table-figure" id="tab:us-divisions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Division</th><th class="crd-th">Area (km2)</th><th class="crd-th">1783</th><th class="crd-th">1850</th><th class="crd-th">1900</th><th class="crd-th">1950</th><th class="crd-th">2000</th><th class="crd-th">2026</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>New England</strong></td><td class="crd-td">163.906</td><td class="crd-td">847,9k</td><td class="crd-td">2,73M</td><td class="crd-td">5,59M</td><td class="crd-td">9,31M</td><td class="crd-td">13,95M</td><td class="crd-td">15,55M</td></tr>
<tr><td class="crd-td"><strong>Middle Atlantic</strong></td><td class="crd-td">259.399</td><td class="crd-td">805,3k</td><td class="crd-td">5,9M</td><td class="crd-td">15,45M</td><td class="crd-td">30,16M</td><td class="crd-td">39,72M</td><td class="crd-td">42,49M</td></tr>
<tr><td class="crd-td"><strong>East North Central</strong></td><td class="crd-td">639.696</td><td class="crd-td">110k</td><td class="crd-td">4,52M</td><td class="crd-td">15,99M</td><td class="crd-td">30,4M</td><td class="crd-td">45,22M</td><td class="crd-td">47,75M</td></tr>
<tr><td class="crd-td"><strong>West North Central</strong></td><td class="crd-td">1.324.702</td><td class="crd-td">158k</td><td class="crd-td">1,02M</td><td class="crd-td">10,35M</td><td class="crd-td">14,06M</td><td class="crd-td">19,28M</td><td class="crd-td">22,16M</td></tr>
<tr><td class="crd-td"><strong>South Atlantic</strong></td><td class="crd-td">695.892</td><td class="crd-td">1,58M</td><td class="crd-td">4,68M</td><td class="crd-td">10,44M</td><td class="crd-td">21,18M</td><td class="crd-td">51,96M</td><td class="crd-td">71,51M</td></tr>
<tr><td class="crd-td"><strong>East South Central</strong></td><td class="crd-td">471.575</td><td class="crd-td">126,6k</td><td class="crd-td">3,36M</td><td class="crd-td">7,55M</td><td class="crd-td">11,48M</td><td class="crd-td">17,05M</td><td class="crd-td">20,17M</td></tr>
<tr><td class="crd-td"><strong>West South Central</strong></td><td class="crd-td">1.110.124</td><td class="crd-td">120,5k</td><td class="crd-td">1,11M</td><td class="crd-td">6,53M</td><td class="crd-td">14,54M</td><td class="crd-td">31,55M</td><td class="crd-td">44,23M</td></tr>
<tr><td class="crd-td"><strong>Mountain</strong></td><td class="crd-td">2.234.493</td><td class="crd-td">185,5k</td><td class="crd-td">172k</td><td class="crd-td">1,67M</td><td class="crd-td">5,07M</td><td class="crd-td">18,27M</td><td class="crd-td">26,77M</td></tr>
<tr><td class="crd-td"><strong>Pacific</strong></td><td class="crd-td">2.233.116</td><td class="crd-td">434,5k</td><td class="crd-td">148,3k</td><td class="crd-td">2,63M</td><td class="crd-td">15,11M</td><td class="crd-td">45,17M</td><td class="crd-td">53,94M</td></tr>
<tr><td class="crd-td"><strong>Island Territories</strong></td><td class="crd-td">134</td><td class="crd-td">10,4k</td><td class="crd-td">11k</td><td class="crd-td">23k</td><td class="crd-td">56,3k</td><td class="crd-td">119,3k</td><td class="crd-td">111,2k</td></tr>
<tr><td class="crd-td"><strong>Composite Total</strong></td><td class="crd-td">9.133.037</td><td class="crd-td">4,38M</td><td class="crd-td">23,66M</td><td class="crd-td">76,24M</td><td class="crd-td">151,38M</td><td class="crd-td">282,28M</td><td class="crd-td">344,67M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Population across U.S. Census Bureau geographic divisions, Bermuda and American Samoa at selected benchmarks (1783-2026 AD).</figcaption>
</figure>

# Results

## Continental Transition and Regional Divergence (1783-2026 AD)

Across 243 years (`Figure` \ref{fig:us-trajectory} and `Table` \ref{tab:us-divisions}), total population climbed from `4,38M` in 1783 AD to `23,66M` in 1850 AD, `76,24M` in 1900 AD, `151,38M` in 1950 AD and `344,67M` in 2026 AD. In 1783 AD, the eastern seaboard held `73,82%` of the composite total (`1,58M` in South Atlantic, `847,9k` in New England and `805,3k` in Middle Atlantic), led by Virginia (`581,1k` in 1783 AD; `691,7k` in 1790 AD) and Pennsylvania (`364,9k` in 1783 AD; `434,4k` in 1790 AD).

By 1850 AD, Erie Canal commerce and Ohio-Mississippi river steamboats had lifted Middle Atlantic (`5,90M`) and East North Central (`4,52M`) into demographic parity with the Old South, with New York (`3,10M` in 1850 AD; `3,88M` in 1860 AD) remaining the most populous state from 1810 AD until overtaken by California (`15,72M` vs `16,78M` in 1960 AD, surpassing New York during the 1960s). By 1900 AD, East North Central (`15,99M`) and Middle Atlantic (`15,45M`) together held `41,24%` of U.S. residents, whilst West North Central reached `10,35M` following homestead settlement across the prairies [@haines2000].

<figure class="crd-figure-block" id="fig:us-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-united-states-post-independence/fig3_united_states_post_independence_shares.png" alt="fig:us-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Long-run shifts in state demographic shares across the United States, Bermuda and American Samoa (1783-2026 AD).</figcaption>
</figure>

## Sunbelt and Pacific Rebalancing (1950-2026 AD)

After 1950 AD, air-conditioning, interstate highways, defence spending and suburban Sunbelt employment reversed the nineteenth-century northern concentration (`Figure` \ref{fig:us-shares} and `Table` \ref{tab:us-top-states}). Between 1950 AD and 2026 AD, South Atlantic expanded from `21,18M` (`13,99%`) to `71,51M` (`20,75%`), driven by Florida (`2,77M` to `24,32M`), Georgia (`3,44M` to `11,41M`) and North Carolina (`4,06M` to `11,36M`). West South Central rose from `14,54M` to `44,23M` as Texas climbed from `7,71M` in 1950 AD to `32,37M` in 2026 AD, while Mountain states grew more than fivefold from `5,07M` to `26,77M` led by Arizona (`749,6k` to `7,79M`) [@frey2015]. California reached `39,39M` in 2026 AD, whereas New York (`14,83M` in 1950 AD to `19,75M` in 2026 AD) and Pennsylvania (`10,50M` to `13,12M`) grew far more slowly. In the insular territories, Hawai'i rose from `135,0k` at 1898 AD annexation to `1,44M` in 2026 AD; Bermuda rose from `10.381` in 1783 AD to `64.750` in 2026 AD; American Samoa rose from `5.679` in 1900 AD to `57.291` in 2000 AD before out-migration lowered its 2026 AD total to `46.500` [@uscb2022as].

<figure class="crd-table-figure" id="tab:us-top-states">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">State</th><th class="crd-th">Area (km2)</th><th class="crd-th">1783</th><th class="crd-th">1860</th><th class="crd-th">1900</th><th class="crd-th">1950</th><th class="crd-th">2000</th><th class="crd-th">2026</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>California</strong></td><td class="crd-td">408.709</td><td class="crd-td">246k</td><td class="crd-td">380k</td><td class="crd-td">1,49M</td><td class="crd-td">10,59M</td><td class="crd-td">33,99M</td><td class="crd-td">39,39M</td></tr>
<tr><td class="crd-td"><strong>Texas</strong></td><td class="crd-td">683.259</td><td class="crd-td">46k</td><td class="crd-td">604,2k</td><td class="crd-td">3,05M</td><td class="crd-td">7,71M</td><td class="crd-td">20,94M</td><td class="crd-td">32,37M</td></tr>
<tr><td class="crd-td"><strong>Florida</strong></td><td class="crd-td">142.902</td><td class="crd-td">16,5k</td><td class="crd-td">140,4k</td><td class="crd-td">528,5k</td><td class="crd-td">2,77M</td><td class="crd-td">16,05M</td><td class="crd-td">24,32M</td></tr>
<tr><td class="crd-td"><strong>New York</strong></td><td class="crd-td">124.470</td><td class="crd-td">285,7k</td><td class="crd-td">3,88M</td><td class="crd-td">7,27M</td><td class="crd-td">14,83M</td><td class="crd-td">19M</td><td class="crd-td">19,75M</td></tr>
<tr><td class="crd-td"><strong>Pennsylvania</strong></td><td class="crd-td">115.774</td><td class="crd-td">364,9k</td><td class="crd-td">2,91M</td><td class="crd-td">6,3M</td><td class="crd-td">10,5M</td><td class="crd-td">12,28M</td><td class="crd-td">13,12M</td></tr>
<tr><td class="crd-td"><strong>Illinois</strong></td><td class="crd-td">145.091</td><td class="crd-td">18k</td><td class="crd-td">1,71M</td><td class="crd-td">4,82M</td><td class="crd-td">8,71M</td><td class="crd-td">12,43M</td><td class="crd-td">12,67M</td></tr>
<tr><td class="crd-td"><strong>Ohio</strong></td><td class="crd-td">109.076</td><td class="crd-td">28k</td><td class="crd-td">2,34M</td><td class="crd-td">4,16M</td><td class="crd-td">7,95M</td><td class="crd-td">11,36M</td><td class="crd-td">11,93M</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">152.290</td><td class="crd-td">69,3k</td><td class="crd-td">1,06M</td><td class="crd-td">2,22M</td><td class="crd-td">3,44M</td><td class="crd-td">8,23M</td><td class="crd-td">11,41M</td></tr>
<tr><td class="crd-td"><strong>North Carolina</strong></td><td class="crd-td">128.914</td><td class="crd-td">330,8k</td><td class="crd-td">992,6k</td><td class="crd-td">1,89M</td><td class="crd-td">4,06M</td><td class="crd-td">8,08M</td><td class="crd-td">11,36M</td></tr>
<tr><td class="crd-td"><strong>Michigan</strong></td><td class="crd-td">147.891</td><td class="crd-td">22k</td><td class="crd-td">749,1k</td><td class="crd-td">2,42M</td><td class="crd-td">6,37M</td><td class="crd-td">9,95M</td><td class="crd-td">10,17M</td></tr>
<tr><td class="crd-td"><strong>New Jersey</strong></td><td class="crd-td">19.155</td><td class="crd-td">154,7k</td><td class="crd-td">672k</td><td class="crd-td">1,88M</td><td class="crd-td">4,84M</td><td class="crd-td">8,43M</td><td class="crd-td">9,62M</td></tr>
<tr><td class="crd-td"><strong>Virginia</strong></td><td class="crd-td">99.648</td><td class="crd-td">581,1k</td><td class="crd-td">1,22M</td><td class="crd-td">1,85M</td><td class="crd-td">3,32M</td><td class="crd-td">7,11M</td><td class="crd-td">8,9M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Long-run trajectories of the twelve most populous U.S. states in 2026 AD (1783-2026 AD).</figcaption>
</figure>

# Limitations

Four constraints govern historical interpretation. First, pre-statehood 1783 AD entries in trans-Appalachian and western masks combine sparse indigenous population reconstructions with colonial frontier estimates and therefore carry wider uncertainty than post-statehood census returns [@thornton1987; @uscb1975]. Second, pre-2000 AD benchmarks follow decennial census years rather than annual series, smoothing over intra-decade disruptions such as the 1861-1865 AD Civil War, the 1918 AD influenza pandemic and the 1930s Dust Bowl. Third, mapping historical returns onto modern state polygons assigns pre-1863 AD western Virginia and pre-1820 AD Maine populations directly onto the modern West Virginia and Maine masks rather than tracing shifting antebellum boundaries. Fourth, 2025-2026 AD figures are trend projections derived from 2020-2024 AD Census Bureau post-censal series [@uscb2025subest] and remain provisional until the 2030 AD decennial enumeration.

# Sources

<div id="refs"></div>
