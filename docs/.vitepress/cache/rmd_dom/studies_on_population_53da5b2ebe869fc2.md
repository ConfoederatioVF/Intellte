---
title: "Studies on Population across Northern America, Hawai'i and Associated Territories (CENTAUR-II)"
subtitle: "Holocene Radiocarbon Substrata, 18 Hydrological Units, Colonial Parish Returns and Census Settlement Archives"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: studies_on_population.bib
csl: _shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_centaur_macro_zones.png"
hero_caption: "Composite domain of CENTAUR-II spanning continental North America, Greenland, Bermuda, Saint-Pierre-et-Miquelon, Hawai'i and American Samoa at 5-arcminute resolution."
hero_label: "fig:hero-centaur"

output:
  pdf_document:
    template: _shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Operation Viscount CENTAUR-II reconstructs the long-run demographic and urban history of Northern America, Greenland, Bermuda, Saint-Pierre-et-Miquelon, Hawai'i and American Samoa from 10000BC to 2026AD across 31 linked regional modules. Superseding legacy continental allocations, it establishes a two-domain non-stationary Matérn ($\nu = 3/2$) kriging architecture anchored to 93.129 unique radiocarbon and archaeological site-period observations (286.193 horizon site records) grouped across 3.833 domestic catchments (2.570 active; 67,05% coverage) in mainland North America and Greenland (14,24x the 6.539 legacy baseline inside the continental mask) alongside 727 official State of Hawai'i *ahupua'a* land divisions in the central Pacific. Across the 18 contiguous United States Hydrological Units [@kelly2025], continental Indigenous numbers climb from 79,4k in 8000BC to 3,61M at 1100AD and 3,63M at 1200AD before late pre-contact regional droughts and post-contact epidemics reduce the total to 2,44M in 1600AD [@ubelaker2006; @milner2010], while Canada, Alaska and Greenland rise towards 415k around 1500AD.

Colonial parish enumerations, colonial assemblies and Confederation and federal decennial censuses [@uscb1975z; @forstall1996; @uscb2025subest; @statcan2026q3] connect this pre-contact substratum without artificial jumps across the nineteenth-century urban transition. Combined population within the study perimeter expands from 2,97M in 1750AD to 81,78M in 1900AD and 386,54M in 2026AD, distributed across 53.438 catalogued settlements (62.870 ledger candidates) encompassing pre-Columbian towns, colonial seaports, Canadian Census Subdivisions and Designated Places, United States incorporated places and Census Designated Places. All 31 constituent chapters pass spatial mask checks, close-pair deduplication rules, kriging sharpness thresholds (regularised $\tau_1 = 1,35$ across all ten horizons in North America; mean $\tau_1 = 1,0968$ in Hawai'i and Polynesia), historical continuity limits (maximum annual change of 2,12% across 1850 to 2025AD) and optical panel review.

# Background

Global historical population reconstructions for the Americas and the Pacific face three structural obstacles: sharp post-contact demographic contractions obscured by uneven ethnohistorical estimates, stark spatial shifts in gravity between Holocene riverine and arid Puebloan cores versus industrial metropolitan corridors, and severe historical under-enumeration of minor rural municipalities and unincorporated places in global urban compendia. Prior continental syntheses [@kroeber1939; @denevan1992; @nevlebird2008] mapped broad macro-regional totals across coarse tribal or colonial boundaries without high-resolution watershed archaeological substrata or full minor-civil-division census universes. When modern metropolitan masks or coarse macro-ecozone polygons govern pre-contact allocation, populations appear concentrated along modern railway corridors or cut abruptly along straight national frontiers across the forty-ninth parallel, the Rio Grande and the Bering Strait.

At the same time, urban databases built solely around large metropolitan thresholds or legacy compilations omitted over ninety per cent of small American towns, New England townships, Plains hamlets, Canadian rural municipalities and Alaskan Native villages. That omission created false century-scale cliffs whenever minor places entered tabular series after 1970AD, while conflating annexed nineteenth-century boroughs and towns, such as Allegheny City (annexed by Pittsburgh in 1907) or the pre-1898 Manhattan series of New York City, with their parent municipalities. CENTAUR-II resolves both defects from the bottom up. Following the hierarchical regional architecture established in Operation Viscount for Eastern Europe and Siberia, it couples basin-level Holocene demographic trajectories, multi-registry archaeological point patterns across North America and Greenland, *ahupua'a* carrying-capacity reconstructions across Polynesia, colonial town censuses, and the full universe of modern statutory and statistical sub-national enumerations into a single spatially coherent historical record.

# Methodology

## Hierarchical Basin Partitioning and Regional Scope

CENTAUR-II partitions the North American continent and associated Atlantic and Pacific islands across 31 chronological and watershed modules grouped into five structural strata spanning 20,35M km²:

1. **Pre-Columbian Canada, Alaska and Greenland (6 modules, 10000BC to 1600AD)**: Northern Cascadia and Alaska, Northern Canada and Greenland, Prairies, Hudson Bay, Saint Lawrence and the Maritimes partition high-latitude maritime foragers, Subarctic Dene and Algonquian bands, Palaeo-Eskimo Dorset and Thule Inuit coastal communities, Norse Greenlandic farms in Eystribyggð and Vestribyggð, bison-hunting Plains nomads and St. Lawrence Iroquoian longhouse towns (1.804 catalogued settlements across 25 sub-regions).
2. **Pre-Columbian Contiguous United States (18 Hydrological Units, 10000BC to 1600AD)**: Following the summed probability distributions and peak-timing ordering established by Kelly et al. [@kelly2025], USGS two-digit Hydrological Units partition every watershed from Upper Colorado (HU 14, peaking 796AD) through Extreme Northern Plains, Northern Plains, Arizona, Great Basin, Upper Mississippi, Rio Grande, Cumberland, Southeast, Lower Mississippi, Southern Plains, Ohio River, New England, Central Plains, Mid-Atlantic, Great Lakes, California and the Pacific Northwest (peaking 1592AD), enclosing 3.376 catalogued settlements across 60 watershed sub-masks.
3. **Pre-Annexation Hawai'i and American Polynesia (1 module, 800AD to 1898AD)**: Separates Sovereign Kingdom and chiefdom wetland irrigated (*lo'i kalo*) and dryland field-system reconstructions across Kaua'i-Ni'ihau, O'ahu, Maui Nui, Hawai'i Island and American Samoa (216 catalogued settlements anchored to State of Hawai'i GNIS and *ahupua'a* centroids) prior to US annexation in 1898AD [@kirch2011; @dye2011; @rieth2008].
4. **Colonial America and Colonial Canada (4 modules, 1500AD to 1867AD)**: Tracks Colonial America until the Seven Years' War (1500 to 1754AD; 1.225 settlements), Colonial America through Independence (1754 to 1783AD; 1.485 settlements), Colonial Canada until the Treaty of Paris (1500 to 1763AD; 1.352 settlements) and British North America with Greenland through Confederation (1763 to 1867AD; 1.149 settlements), uniting parish registers, New England town censuses, New France *seigneurial* returns, Acadia, Spanish Florida, New Mexico and Alta California missions [@uscb1975z].
5. **Post-Independence United States and Post-Confederation Canada (2 modules, 1783AD to 2026AD)**: Captures 36.949 US incorporated places, CDPs, non-overlapping Minor Civil Divisions, Bermuda and American Samoa trajectories (1783 to 2026AD) alongside 5.882 Canadian Census Subdivisions, Designated Places, Greenlandic settlements and Saint-Pierre-et-Miquelon localities (1867 to 2026AD) [@forstall1996; @uscb2025subest; @statcan2026q3; @geonames2026].

## Multi-Registry Radiocarbon and Ahupua'a Kriging Substrata

Holocene rural habitation potential across the 493.687 valid 5-arcminute cells (18.561.382 km², or 18,56M km²; with 78.938 to 149.138 active inhabited non-wasteland cells across horizons) of mainland North America, Greenland and Bermuda is derived by compositing global radiocarbon syntheses (c14bazAAR, p3k14c) [@bird2022p3k14c] with the Canadian Archaeological Radiocarbon Database (CARD), United States state archaeological site files, Greenland National Museum *Nunniffiit* registers, Southwest Social Networks and Chaco and Mesa Verde monument inventories, and regional CRM surveys. After strict spatial-chronological deduplication by catchment and 200-year bin, the composite contains 93.129 unique site-periods (286.193 horizon site records) aggregated onto 3.833 domestic Voronoi catchments (15.517.268 km²; 2.570 active inhabited catchments, 67,05% coverage; equivalent circular radius median 29,48 km and 90th percentile 40,95 km overall, or 29,3 km and 39,85 km across active catchments), yielding an effective site density 14,24x above the 6.539 legacy baseline alone.

To prevent linear boundary drop-offs along international frontiers and oceanic straits, 251 cross-frontier buffer catchments condition Northern Mexico, Russian Chukotka and Kamchatka (from POLARIS), and Cuba and the Bahamas up to 300 km beyond the CENTAUR perimeter. Biophysical covariates include smooth exponential coastal proximity, 13,5 km fluvial distance decay, terrain slope and Greenland Nares Strait thalweg separation (east-west channel split), paired with macro-tile log-variance regularisation and 1-ring Poisson-Gamma credibility smoothing before 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) residual kriging across ten Holocene horizons (13000BC to 1650AD). Across Hawai'i and American Samoa (282 valid and active 5-arcminute cells), a parallel six-horizon kriging surface (800AD to 1898AD) conditions 20.670 domestic horizon site-epoch records partitioned into 156 domestic catchments (median radius 4,92 km, 90th percentile 8,29 km) derived from 727 State of Hawai'i *ahupua'a* land divisions alongside 4 Eastern and Western Samoan buffer catchments [@kirch2011; @dye2011].

<figure class="crd-figure-block" id="fig:kriging-val">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0/fig5_kriging_validation.png" alt="fig:kriging-val" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Multi-registry Voronoi catchments (n = 3.824 domestic and n = 97 cross-frontier buffer centroids within mapped bounds out of 3.833 domestic and 251 buffer catchments), 1200AD kriged substrata, 1500AD density and dimensionless Matérn semivariogram fits for North America (tau1 = 1,35, R² = 0,999 across 10 horizons) and Hawai'i and Polynesia (tau1 = 1,1, R² = 0,997 across 6 horizons).</figcaption>
</figure>

## Regional Synthesis, Urban Subtraction and Census Continuity

Sub-regional totals at every benchmark interval are compiled into regional tables paired directly with five-arcminute WGS84 areal masks. Compiled urban settlement populations from Stadestér 2.0 are disaggregated cleanly onto 5-arcminute pixels using explicit stable composite city identifiers (excluding annexed or pre-consolidation duplicates such as Allegheny City, Manhattan and pre-1998 Metropolitan Toronto boroughs after amalgamation) before subtracting settled urban cells from sub-regional population targets to calibrate residual rural kriging weights. Smooth two-pass 5-pixel separable log-multiplier smoothing eliminates seam discontinuities across watershed divides while keeping sub-regional sums exact and enforcing exact island handovers for Hawai'i and American Samoa at 1898AD.

To avoid twentieth-century decennial cliffs in the modern census era, census enumerations from 1990AD, 2000AD, 2010AD and 2020AD PL 94-171 blocks in the United States and Statistics Canada CSD/DPL tables in Canada are matched across a 55 km polygon tolerance against GeoNames populated places and historical 1790 to 2010AD municipal returns. Small places lacking published historical tabulations carry staggered rural predecessor trajectories across 1851-1974AD (1868-1974AD in Canada) alongside explicit foundation dates for modern planned and military foundations, capping annual settlement-count turnover at a maximum annual change of 1,42% from 1850 to 2025AD outside the 1867AD Canadian Confederation border splice.

# Testing and Validation

Five orthogonal checks confirm spatial geometry, variogram sharpness, gazetteer reconciliation, historical continuity and publication layout across all 31 modules:

1. **Areal Mask Integrity**: Zero empty sub-masks, zero synthetic box cuts, strict domain boundaries and explicit micro-island containment across 25 specialist regional masks (and 31 total module masks) covering 493.969 active CENTAUR land cells (493.687 continental plus 282 Hawai'i and American Samoa).
2. **Kriging Sharpness and Continuity**: North American variograms achieve regularised $\tau_1 = 1,35$ across all ten horizons (raw 1,519 to 1,6098, mean 1,5782; macro range $\tau_2 = 2,9025$, or 2,9; effective short range 45,23 km to 47,94 km, mean 47 km; raw nugget-to-sill 0 and regularised nugget-to-sill 0,04, $\eta = 0,0417$, across all ten horizons; WLS residual $R^2 = 0,9990$ to 0,9992 across 78.938 to 149.138 active cells), while Hawai'i and Polynesia achieve mean regularised $\tau_1 = 1,0968$ (1,0673 to 1,1624; matching raw mean 1,0968 across 1,0673 to 1,1624; mean $\tau_2 = 2,3581$ across 2,2946 to 2,4991; effective short range 5,44 km to 5,92 km, mean 5,59 km; raw nugget-to-sill 0 and regularised nugget-to-sill 0,04, $\eta = 0,0417$, across all six horizons; $R^2 = 0,9963$ to 0,9975). Diagnostic map inspections document smooth coastline and fluvial gradients across Nares Strait, the Bering Strait, the Rio Grande and Hawaiian island windward-leeward valleys.
3. **Gazetteer Coverage and Deduplication**: All 31 modules pass schema, source-provenance (sources), spatial-mask containment, close-pair deduplication (0 same-country active pairs $<= 1,5\text{ km}$ after 1850AD or 1867AD) and ledger balance (53.438 included settlements and 9.432 documented exclusions totalling 62.870 accounted candidates; 0 unaccounted entries).
4. **Toponymy Anti-Collision Protection**: Explicit composite settlement identifiers isolate Pittsburgh (Fort Duquesne, Fort Pitt and post-colonial Pittsburgh) from annexed Allegheny City (incorporated into Pittsburgh in 1907AD), separate St. Louis (founded 1764AD) from pre-Columbian Cahokia, remove GeoNames numerical placeholders and strip 3.992+ non-Latin alias entries within Western Hemisphere bounds while preserving Russian Chukotka west of the Bering Strait.
5. **Annual Live Continuity and Visual Review**: Annual settlement queries across 1850 to 2025AD exhibit maximum year-on-year aggregate change of 2,12% (in 1862AD, below the 3% threshold) with zero spurious spikes, backed by 129 optically reviewed PNG panels across root and regional chapters.

<figure class="crd-table-figure" id="tab:macro-continuity">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Module</th><th class="crd-th">Span</th><th class="crd-th">Start Population</th><th class="crd-th">End Population</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Colonial America to 1754</strong></td><td class="crd-td">1500-1754AD</td><td class="crd-td">2,8M</td><td class="crd-td">2,43M</td></tr>
<tr><td class="crd-td"><strong>Colonial America to 1783</strong></td><td class="crd-td">1754-1783AD</td><td class="crd-td">2,43M</td><td class="crd-td">4,07M</td></tr>
<tr><td class="crd-td"><strong>Colonial Canada to 1763</strong></td><td class="crd-td">1500-1763AD</td><td class="crd-td">346,5k</td><td class="crd-td">330,5k</td></tr>
<tr><td class="crd-td"><strong>Colonial Canada to 1867</strong></td><td class="crd-td">1763-1867AD</td><td class="crd-td">330,3k</td><td class="crd-td">3,64M</td></tr>
<tr><td class="crd-td"><strong>Canada Post-Confederation</strong></td><td class="crd-td">1867-2026AD</td><td class="crd-td">3,65M</td><td class="crd-td">41,86M</td></tr>
<tr><td class="crd-td"><strong>United States Post-Independence</strong></td><td class="crd-td">1783-2026AD</td><td class="crd-td">4,38M</td><td class="crd-td">344,67M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional population continuity across colonial and modern CENTAUR-II epochs.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:all-31-modules">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Module</th><th class="crd-th">Span</th><th class="crd-th">Sub-regions</th><th class="crd-th">Settlements</th><th class="crd-th">End Pop.</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>N. Cascadia and Alaska</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">5</td><td class="crd-td">225</td><td class="crd-td">181,5k</td><td class="crd-td">182k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>N. Canada and Greenland</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">5</td><td class="crd-td">926</td><td class="crd-td">35,5k</td><td class="crd-td">36,3k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Canadian Prairies</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">4</td><td class="crd-td">192</td><td class="crd-td">45,3k</td><td class="crd-td">46k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Hudson Bay</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">130</td><td class="crd-td">22,6k</td><td class="crd-td">23k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Saint Lawrence</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">4</td><td class="crd-td">172</td><td class="crd-td">74,9k</td><td class="crd-td">92k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Maritimes</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">4</td><td class="crd-td">159</td><td class="crd-td">27,8k</td><td class="crd-td">36k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Upper Colorado (HU 14)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">241</td><td class="crd-td">27k</td><td class="crd-td">62,3k (800AD)</td></tr>
<tr><td class="crd-td"><strong>Extreme N. Plains</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">100</td><td class="crd-td">19,4k</td><td class="crd-td">26,7k (800AD)</td></tr>
<tr><td class="crd-td"><strong>Northern Plains</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">4</td><td class="crd-td">295</td><td class="crd-td">177,5k</td><td class="crd-td">236,5k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Arizona (HU 15)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">4</td><td class="crd-td">588</td><td class="crd-td">76k</td><td class="crd-td">156,9k (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Great Basin (HU 16)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">146</td><td class="crd-td">60,5k</td><td class="crd-td">64,3k (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Upper Mississippi (HU 07)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">159</td><td class="crd-td">150k</td><td class="crd-td">290k (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">258</td><td class="crd-td">96k</td><td class="crd-td">155,5k (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Cumberland Basin</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">90</td><td class="crd-td">65,5k</td><td class="crd-td">157k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03 and 06)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">4</td><td class="crd-td">115</td><td class="crd-td">336k</td><td class="crd-td">707k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">107</td><td class="crd-td">106k</td><td class="crd-td">326k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 11 and 12)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">102</td><td class="crd-td">95k</td><td class="crd-td">160k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">4</td><td class="crd-td">164</td><td class="crd-td">151k</td><td class="crd-td">264k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>New England (HU 01)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">99</td><td class="crd-td">86,5k</td><td class="crd-td">116,5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Central Plains (HU 10)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">143</td><td class="crd-td">125k</td><td class="crd-td">160k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mid-Atlantic (HU 02)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">115</td><td class="crd-td">173k</td><td class="crd-td">198k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Great Lakes (HU 04)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">3</td><td class="crd-td">105</td><td class="crd-td">153,5k</td><td class="crd-td">164k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>California (HU 18)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">4</td><td class="crd-td">351</td><td class="crd-td">336k</td><td class="crd-td">336k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Northwest (HU 17)</strong></td><td class="crd-td">10000BC-1600AD</td><td class="crd-td">4</td><td class="crd-td">198</td><td class="crd-td">209,5k</td><td class="crd-td">209,5k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Hawai'i and Am. Polynesia</strong></td><td class="crd-td">10000BC-1898AD</td><td class="crd-td">5</td><td class="crd-td">216</td><td class="crd-td">130,1k</td><td class="crd-td">382,2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Colonial America to 1754</strong></td><td class="crd-td">1500AD-1754AD</td><td class="crd-td">22</td><td class="crd-td">1.225</td><td class="crd-td">2,43M</td><td class="crd-td">2,8M (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Colonial America to 1783</strong></td><td class="crd-td">1754AD-1783AD</td><td class="crd-td">26</td><td class="crd-td">1.485</td><td class="crd-td">4,07M</td><td class="crd-td">4,07M (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Colonial Canada to 1763</strong></td><td class="crd-td">1500AD-1763AD</td><td class="crd-td">8</td><td class="crd-td">1.352</td><td class="crd-td">330,5k</td><td class="crd-td">346,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Colonial Canada to 1867</strong></td><td class="crd-td">1763AD-1867AD</td><td class="crd-td">12</td><td class="crd-td">1.149</td><td class="crd-td">3,64M</td><td class="crd-td">3,64M (1867AD)</td></tr>
<tr><td class="crd-td"><strong>Canada Post-1867</strong></td><td class="crd-td">1867AD-2026AD</td><td class="crd-td">15</td><td class="crd-td">5.882</td><td class="crd-td">41,86M</td><td class="crd-td">41,86M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>United States Post-1783</strong></td><td class="crd-td">1783AD-2026AD</td><td class="crd-td">53</td><td class="crd-td">36.949</td><td class="crd-td">344,67M</td><td class="crd-td">344,67M (2026AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> All 31 CENTAUR-II regional modules showing chronological bounds, sub-region counts, settlement counts and terminal and peak populations.</figcaption>
</figure>

# Results

## Pre-Columbian Holocene Radiocarbon Dynamics

Ordered strictly by Kelly et al. [@kelly2025] summed probability distributions across 3.376 catalogued settlements in the contiguous United States (5.180 across Pre-Columbian Canada, Alaska, Greenland and the lower 48 states combined), North American Holocene demography divides into three successive regional waves (Figure \ref{fig:kelly-hucs}). Early post-glacial deglaciation opens Alaska and Northern Cascadia (225 documented coastal and interior loci) alongside the Great Lakes and St. Lawrence corridors by 9000BC, while the arid Intermountain West and Missouri Headwaters reach early maxima centred around 796AD in Upper Colorado (HU 14), 827AD in the Extreme Northern Plains and 857AD in the Northern Plains. In the Upper Colorado Basin, Fremont farming communities in the Uinta and San Rafael plateaus contract after 1000AD even as San Juan Chacoan and Mesa Verde masonry pueblos crest around 1100AD before late thirteenth-century megadrought emigration.

The demographic centre of gravity then shifts to the eastern agricultural floodplains. Maize-beans-squash intensification elevates Upper Mississippi (including the Cahokia polity around 1107AD), Cumberland (1167AD), Southeast (1169AD, anchored by Etowah, Moundville, Ocmulgee and Bottle Creek across 115 catalogued sites) and Lower Mississippi (1177AD) to mid-Holocene maxima around 1100 to 1300AD. Across all 18 Hydrological Units, Indigenous population rises from 3,61M in 1100AD to a pre-contact zenith near 3,63M in 1200AD before declining to 2,44M in 1600AD as climatic cooling, Mississippian chiefdom fragmentation and early Old World epidemiological contacts reshape interior distributions [@ubelaker2006; @milner2010]. Along the Pacific Rim, densely settled acorn-harvesting villages across California (351 catalogued settlements, cresting around 1578AD) and plankhouse fisheries along the Columbia River and Salish Sea (198 settlements, cresting around 1592AD) sustain rising numbers right into contact.

Northern Canada, Subarctic boreal belts and Greenland follow a distinct Arctic curve across 926 catalogued sites: Palaeo-Eskimo Pre-Dorset and Dorset bands expand across the eastern Canadian Arctic and West Greenland after 2500BC, followed by the rapid eastward Thule migration after 1000AD and Mediaeval Norse settlement in southwestern Greenland from 985AD until the fifteenth century. In the central Pacific, Polynesian settlement of the Hawaiian Archipelago after 900AD shifts from alluvial coastal wetland taro valleys on Kaua'i and O'ahu towards extensive rain-fed dryland field complexes across Kohala, Kona and Maui, lifting island population to 375k on the eve of European arrival in 1778AD before imported disease reduces numbers to 56,9k in the 1872 census [@kirch2011; @schmitt1977]. Subsequent plantation immigration lifts Hawai'i and American Samoa combined to 130,1k by 1898AD annexation.

<figure class="crd-figure-block" id="fig:kelly-hucs">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0/fig2_precolumbian_kelly_hucs.png" alt="fig:kelly-hucs" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Relative Holocene demographic intensity across the 18 contiguous United States Hydrological Units ordered by radiocarbon peak timing.</figcaption>
</figure>

Fourteenth-century demographic realignments across the continental interior reflect converging agrarian, climatic and inter-regional exchange thresholds rather than uniform continent-wide decline. In the Rio Grande Basin (258 catalogued sites across Northern, Central and Southern-Pecos watersheds), emigration out of the Four Corners and Chaco-Mesa Verde periphery coalesces into large multi-plaza adobe pueblos exceeding two thousand residents around 1400AD, compensating partially for abandonment in the San Juan and Upper Colorado canyons. Along the Ohio River (164 catalogued sites), Lower Mississippi (107 catalogued sites) and Cumberland valleys (90 catalogued sites), late Fort Ancient, Plaquemine and Late Mississippian nucleated towns persist into the early sixteenth century before Old World pathogens introduced along Gulf Coast and southeastern expeditionary routes propagate across Indigenous trade networks between 1520AD and 1640AD [@milner2010; @ubelaker2006; @thornton1987]. Across the Central Plains (143 settlements), Southern Plains (102 settlements) and Prairies (192 settlements), intensifying Plains Village earthlodge farming along the Missouri, Platte and Republican river terraces coexists with expanding communal bison-procurement bands in the western shortgrass steppe.

<figure class="crd-table-figure" id="tab:huc18-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Hydrological Unit</th><th class="crd-th">Sites</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1100AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Colorado (HU 14)</strong></td><td class="crd-td">241</td><td class="crd-td">10,5k</td><td class="crd-td">41,6k</td><td class="crd-td">61,1k</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>Extreme N. Plains</strong></td><td class="crd-td">100</td><td class="crd-td">5,8k</td><td class="crd-td">19,8k</td><td class="crd-td">24,1k</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>Northern Plains</strong></td><td class="crd-td">295</td><td class="crd-td">28,3k</td><td class="crd-td">126k</td><td class="crd-td">231k</td><td class="crd-td">177,5k</td></tr>
<tr><td class="crd-td"><strong>Arizona (HU 15)</strong></td><td class="crd-td">588</td><td class="crd-td">13,1k</td><td class="crd-td">72,7k</td><td class="crd-td">156,9k</td><td class="crd-td">76k</td></tr>
<tr><td class="crd-td"><strong>Great Basin (HU 16)</strong></td><td class="crd-td">146</td><td class="crd-td">9,8k</td><td class="crd-td">36k</td><td class="crd-td">64,3k</td><td class="crd-td">60,5k</td></tr>
<tr><td class="crd-td"><strong>Upper Mississippi (HU 07)</strong></td><td class="crd-td">159</td><td class="crd-td">24k</td><td class="crd-td">130k</td><td class="crd-td">290k</td><td class="crd-td">150k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande (HU 13)</strong></td><td class="crd-td">258</td><td class="crd-td">12,7k</td><td class="crd-td">68k</td><td class="crd-td">155,5k</td><td class="crd-td">96k</td></tr>
<tr><td class="crd-td"><strong>Cumberland Basin</strong></td><td class="crd-td">90</td><td class="crd-td">16,9k</td><td class="crd-td">90,5k</td><td class="crd-td">155k</td><td class="crd-td">65,5k</td></tr>
<tr><td class="crd-td"><strong>Southeast (HU 03 and 06)</strong></td><td class="crd-td">115</td><td class="crd-td">75,2k</td><td class="crd-td">411k</td><td class="crd-td">700k</td><td class="crd-td">336k</td></tr>
<tr><td class="crd-td"><strong>Lower Mississippi (HU 08)</strong></td><td class="crd-td">107</td><td class="crd-td">35,8k</td><td class="crd-td">188,5k</td><td class="crd-td">322,5k</td><td class="crd-td">106k</td></tr>
<tr><td class="crd-td"><strong>Southern Plains (HU 11 and 12)</strong></td><td class="crd-td">102</td><td class="crd-td">17,1k</td><td class="crd-td">82,3k</td><td class="crd-td">151,8k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Ohio River (HU 05)</strong></td><td class="crd-td">164</td><td class="crd-td">26,3k</td><td class="crd-td">142k</td><td class="crd-td">245,5k</td><td class="crd-td">151k</td></tr>
<tr><td class="crd-td"><strong>New England (HU 01)</strong></td><td class="crd-td">99</td><td class="crd-td">14,3k</td><td class="crd-td">61,9k</td><td class="crd-td">106,6k</td><td class="crd-td">86,5k</td></tr>
<tr><td class="crd-td"><strong>Central Plains (HU 10)</strong></td><td class="crd-td">143</td><td class="crd-td">19,6k</td><td class="crd-td">86,3k</td><td class="crd-td">147,7k</td><td class="crd-td">125k</td></tr>
<tr><td class="crd-td"><strong>Mid-Atlantic (HU 02)</strong></td><td class="crd-td">115</td><td class="crd-td">22,7k</td><td class="crd-td">110,5k</td><td class="crd-td">185,5k</td><td class="crd-td">173k</td></tr>
<tr><td class="crd-td"><strong>Great Lakes (HU 04)</strong></td><td class="crd-td">105</td><td class="crd-td">16,6k</td><td class="crd-td">82,4k</td><td class="crd-td">148,7k</td><td class="crd-td">153,5k</td></tr>
<tr><td class="crd-td"><strong>California (HU 18)</strong></td><td class="crd-td">351</td><td class="crd-td">36,3k</td><td class="crd-td">177,5k</td><td class="crd-td">287,5k</td><td class="crd-td">336k</td></tr>
<tr><td class="crd-td"><strong>Northwest (HU 17)</strong></td><td class="crd-td">198</td><td class="crd-td">23,1k</td><td class="crd-td">113,3k</td><td class="crd-td">180,2k</td><td class="crd-td">209,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Pre-Columbian Indigenous population across the 18 contiguous United States Hydrological Units ordered by Kelly et al. radiocarbon peak timing.</figcaption>
</figure>

## Colonial Transition and Continental Frontier Growth

Between 1500AD and 1867AD, European maritime footholds along the Atlantic seaboard, the St. Lawrence estuary and Acadian dykelands grow rapidly alongside Indigenous depopulation across disease-stricken interior basins (Figure \ref{fig:colonial-trans}). Across the Colonial America domain prior to 1754AD (1.225 catalogued settlements), combined population falls from 2,8M in 1500AD to an epidemiologic trough near 1,48M around 1680AD [@ubelaker2006; @thornton1987] before natural increase and Atlantic migration drive rapid expansion to 2,43M by 1754AD. New England townships along Massachusetts Bay, Connecticut and Rhode Island record uninterrupted vital registration from the seventeenth century, while Virginia, Maryland and the Carolina lowcountry capture rapid Chesapeake smallholder expansion and rising enslaved African plantation populations documented in colonial taxables and parish vestry lists. Between the Seven Years' War and the Treaty of Paris of 1783AD (1.485 catalogued settlements), demographic expansion pushes across the Appalachian gaps into Kentucky, Vermont, the upper Susquehanna and Tennessee while Hudson Valley, Chesapeake and New England seaports expand, led by Philadelphia (36k), New York (25k) and Boston (16k), raising domain totals to 4,07M [@uscb1975z].

Along the Spanish northern frontier reconstructed inside the colonial American modules, sedentary Pueblo villages across the upper Rio Grande, fortified *presidios* in Texas and Florida, and Franciscan missions founded along the Baja-Alta California coast after 1769AD preserve essential non-Anglophone demographic continuity prior to nineteenth-century annexation. Indigenous confederacies of the trans-Appalachian interior, including the Haudenosaunee Confederacy, Cherokee towns, Creek Talwas, Chickasaw and Choctaw, remain explicitly mapped inside discrete regional masks with town-level population trajectories derived from eighteenth-century trader censuses and treaty tallies [@ubelaker2006; @milner2010].

<figure class="crd-figure-block" id="fig:colonial-trans">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0/fig3_colonial_transition_trajectories.png" alt="fig:colonial-trans" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Continental colonial transition combining Indigenous continuity and European-African settlement growth from 1500AD to 1867AD.</figcaption>
</figure>

North of the Great Lakes, Colonial Canada through 1763AD (1.352 settlements) transitions from Indigenous and French trading posts along the St. Lawrence and Acadia, anchored at Québec (9k), Montréal (6k) and Louisbourg (5,2k), to British colonial administration around Halifax (3k) and St. John's (2,4k). Between 1763AD and Confederation in 1867AD (1.149 settlements), Loyalist flight, Maritime shipbuilding and Upper and Lower Canadian agrarian clearance lift total population more than tenfold from 330,3k in 1763AD to 3,64M at 1867AD, accompanied by parallel urbanisation across Montréal (90,3k), Québec (51,1k) and Toronto (44,8k) plus Cariboo gold-rush boomtowns such as Barkerville (10k). Greenlandic parish censuses initiated by Danish-Norwegian missionaries from 1728AD and Hudson's Bay Company district fur-trade post journals capture Subarctic and high Arctic Inuit and Métis settlement continuity right through 1867AD.

## Post-Independence United States and Post-Confederation Canada

Modern statistical integration connects every post-1783AD US decennial census and every post-1867AD Canadian census into uninterrupted city-level and sub-regional series (Figure \ref{fig:modern-growth}). In the United States (36.949 catalogued settlements excluding annexed or double-counted boroughs across 50 states, District of Columbia, Bermuda and American Samoa), aggregate population grows from 4,38M in 1783AD to 23,66M in 1850AD, 76,24M in 1900AD, 151,38M in 1950AD and 344,67M in 2026AD [@uscb1791; @forstall1996; @uscb2025subest]. Urban rank-size concentration widens continuously until 1950AD, when New York (7,89M), Chicago (3,62M), Philadelphia (2,07M) and Detroit (1,85M) anchor industrial cores, before twentieth-century Sun Belt suburbanisation elevates Los Angeles (3,98M peak), Houston (2,47M), Phoenix (1,7M), San Antonio (1,58M) and San Diego (1,42M) alongside stable municipal boundaries.

Separating independent colonial and nineteenth-century borderlands avoids anachronisms in territorial transfers: Vermont, Kentucky and the Old Northwest enter early federal counts smoothly from 1790AD; Louisiana and Missouri towns enter after 1803AD; Florida enters in 1821AD; Texas, California, New Mexico and Utah towns anchor from 1845 to 1850AD; and Hawai'i (130,1k) and American Samoa transfer cleanly across the 1898AD annexation splice. Across New England and the Mid-Atlantic, 3.433 non-overlapping Minor Civil Divisions (SUMLEV 060) fill township countryside gaps left when federal place-only tabulations omitted New England towns outside city charters.

Across post-Confederation Canada, Greenland and Saint-Pierre-et-Miquelon (5.882 catalogued settlements covering all 5.161 Statistics Canada Census Subdivisions alongside Designated Places and Arctic settlements), total population expands from 3,65M in 1867AD to 5,6M in 1901AD, 14,08M in 1951AD and 41,86M in 2026AD [@statcan2026q3; @geonames2026]. Isolating municipal city-proper boundaries (Toronto 3,34M, Montréal 1,95M, Calgary 1,66M, Edmonton 1,28M, Ottawa 1,22M, Winnipeg 868,4k, Vancouver 744,7k) from post-1950 Census Metropolitan Area inflations preserves consistent settlement densities within every pixel of the 5-arcminute grid. Consolidating amalgamated 1998AD Metropolitan Toronto constituent boroughs (Etobicoke, North York, Scarborough, York, East York) at 1996AD and preserving city-proper CSD definitions ensures exact metropolitan urban accounting across Ontario and Québec after 2001AD.

Regional divergence across Canadian provinces between Confederation and the twenty-first century mirrors successive railway, wheat-frontier and metropolitan waves documented in federal census returns [@statcan2026q3]. Ontario and Québec sustain roughly two-thirds of the national population throughout the late nineteenth century, expanding from 2,66M combined in 1867AD to 17,85M in 1991AD and 25,41M by 2026AD, whereas Manitoba, Saskatchewan, Alberta and British Columbia surge from 92,5k combined at 1867AD to 13,64M by 2026AD as transcontinental grain settlement, oil-sands industrial growth and Pacific rim urbanisation reshape the western corridors. At the extreme northern margin, Greenland expands from 11k inhabitants in 1867AD under Danish colonial censuses to 56,7k in 2026AD across coastal municipalities Nuuk, Sisimiut, Ilulissat and Qaqortoq, while Nunavut, Northwest Territories and Yukon preserve dispersed Indigenous and resource settlements linked by air and seasonal marine supply corridors.

<figure class="crd-table-figure" id="tab:canada-provinces">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-region</th><th class="crd-th">1867AD</th><th class="crd-th">1901AD</th><th class="crd-th">1951AD</th><th class="crd-th">2001AD</th><th class="crd-th">2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Alberta</strong></td><td class="crd-td">14,5k</td><td class="crd-td">73k</td><td class="crd-td">943k</td><td class="crd-td">3,06M</td><td class="crd-td">5,14M</td></tr>
<tr><td class="crd-td"><strong>British Columbia</strong></td><td class="crd-td">40k</td><td class="crd-td">178,7k</td><td class="crd-td">1,17M</td><td class="crd-td">4,08M</td><td class="crd-td">5,71M</td></tr>
<tr><td class="crd-td"><strong>Manitoba</strong></td><td class="crd-td">24,5k</td><td class="crd-td">255,2k</td><td class="crd-td">778k</td><td class="crd-td">1,15M</td><td class="crd-td">1,52M</td></tr>
<tr><td class="crd-td"><strong>New Brunswick</strong></td><td class="crd-td">271k</td><td class="crd-td">331,1k</td><td class="crd-td">517k</td><td class="crd-td">749,8k</td><td class="crd-td">883,5k</td></tr>
<tr><td class="crd-td"><strong>Newfoundland and Labrador</strong></td><td class="crd-td">142,8k</td><td class="crd-td">221k</td><td class="crd-td">362k</td><td class="crd-td">522k</td><td class="crd-td">552,5k</td></tr>
<tr><td class="crd-td"><strong>Northwest Territories</strong></td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td><td class="crd-td">10,4k</td><td class="crd-td">40,9k</td><td class="crd-td">46,3k</td></tr>
<tr><td class="crd-td"><strong>Nova Scotia</strong></td><td class="crd-td">364k</td><td class="crd-td">459,6k</td><td class="crd-td">643k</td><td class="crd-td">932,5k</td><td class="crd-td">1,1M</td></tr>
<tr><td class="crd-td"><strong>Nunavut</strong></td><td class="crd-td">4,2k</td><td class="crd-td">4k</td><td class="crd-td">5,6k</td><td class="crd-td">28,1k</td><td class="crd-td">43,1k</td></tr>
<tr><td class="crd-td"><strong>Ontario</strong></td><td class="crd-td">1,54M</td><td class="crd-td">2,18M</td><td class="crd-td">4,62M</td><td class="crd-td">11,9M</td><td class="crd-td">16,32M</td></tr>
<tr><td class="crd-td"><strong>Prince Edward Island</strong></td><td class="crd-td">89k</td><td class="crd-td">103,3k</td><td class="crd-td">99k</td><td class="crd-td">136,7k</td><td class="crd-td">183k</td></tr>
<tr><td class="crd-td"><strong>Québec</strong></td><td class="crd-td">1,12M</td><td class="crd-td">1,65M</td><td class="crd-td">4,07M</td><td class="crd-td">7,4M</td><td class="crd-td">9,09M</td></tr>
<tr><td class="crd-td"><strong>Saskatchewan</strong></td><td class="crd-td">13,5k</td><td class="crd-td">91,3k</td><td class="crd-td">834k</td><td class="crd-td">1M</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Yukon</strong></td><td class="crd-td">2,5k</td><td class="crd-td">27,2k</td><td class="crd-td">9k</td><td class="crd-td">30,2k</td><td class="crd-td">50,4k</td></tr>
<tr><td class="crd-td"><strong>Saint Pierre and Miquelon</strong></td><td class="crd-td">4,2k</td><td class="crd-td">6,4k</td><td class="crd-td">4,6k</td><td class="crd-td">6,3k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Greenland (Kalaallit Nunaat)</strong></td><td class="crd-td">10,9k</td><td class="crd-td">11,9k</td><td class="crd-td">23,7k</td><td class="crd-td">56,4k</td><td class="crd-td">56,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Canadian provinces, Greenland and Saint-Pierre-et-Miquelon benchmarks across 1867AD to 2026AD.</figcaption>
</figure>

In the post-independence United States, regional weights pivot steadily southwards and westwards over the two centuries between Ratification and 2026AD [@uscb1791; @forstall1996; @uscb2025subest]. The thirteen original Atlantic seaboard states plus Maine and Vermont hold 3,16M of the 4,38M composite total in 1783AD (72,3%, rising to 3,77M or 75,4% in 1790AD), yet westward expansion into the Ohio, Mississippi and Missouri basins reduces the original eastern share to 50,8% in 1860AD and below 50% (46,7%) by 1870AD. Twentieth-century air conditioning, highway construction and Pacific aerospace expansion accelerate Sun Belt growth: California overtakes New York during the 1960s (39,4M by 2026AD), Texas climbs above 32M (32,4M) and Florida passes 24,3M, while post-industrial Rust Belt cores see declining city-proper totals even as outer metropolitan ring towns continue to expand cleanly inside County Subdivision and CDP enumerations.

<figure class="crd-table-figure" id="tab:us-lead-states">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">State</th><th class="crd-th">1790AD</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">2000AD</th><th class="crd-th">2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>California</strong></td><td class="crd-td">-</td><td class="crd-td">92,6k</td><td class="crd-td">1,49M</td><td class="crd-td">10,59M</td><td class="crd-td">33,99M</td><td class="crd-td">39,39M</td></tr>
<tr><td class="crd-td"><strong>Texas</strong></td><td class="crd-td">-</td><td class="crd-td">212,6k</td><td class="crd-td">3,05M</td><td class="crd-td">7,71M</td><td class="crd-td">20,94M</td><td class="crd-td">32,37M</td></tr>
<tr><td class="crd-td"><strong>Florida</strong></td><td class="crd-td">-</td><td class="crd-td">87,4k</td><td class="crd-td">528,5k</td><td class="crd-td">2,77M</td><td class="crd-td">16,05M</td><td class="crd-td">24,32M</td></tr>
<tr><td class="crd-td"><strong>New York</strong></td><td class="crd-td">340,1k</td><td class="crd-td">3,64M</td><td class="crd-td">7,64M</td><td class="crd-td">15,46M</td><td class="crd-td">20,99M</td><td class="crd-td">19,75M</td></tr>
<tr><td class="crd-td"><strong>Illinois</strong></td><td class="crd-td">-</td><td class="crd-td">851,5k</td><td class="crd-td">4,82M</td><td class="crd-td">9,96M</td><td class="crd-td">12,87M</td><td class="crd-td">12,67M</td></tr>
<tr><td class="crd-td"><strong>Pennsylvania</strong></td><td class="crd-td">434,4k</td><td class="crd-td">2,31M</td><td class="crd-td">6,3M</td><td class="crd-td">10,5M</td><td class="crd-td">12,28M</td><td class="crd-td">13,12M</td></tr>
<tr><td class="crd-td"><strong>Ohio</strong></td><td class="crd-td">-</td><td class="crd-td">1,98M</td><td class="crd-td">4,16M</td><td class="crd-td">7,95M</td><td class="crd-td">11,36M</td><td class="crd-td">11,93M</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">82,5k</td><td class="crd-td">906,2k</td><td class="crd-td">2,22M</td><td class="crd-td">3,44M</td><td class="crd-td">8,23M</td><td class="crd-td">11,41M</td></tr>
<tr><td class="crd-td"><strong>North Carolina</strong></td><td class="crd-td">393,8k</td><td class="crd-td">869k</td><td class="crd-td">1,89M</td><td class="crd-td">4,06M</td><td class="crd-td">8,08M</td><td class="crd-td">11,36M</td></tr>
<tr><td class="crd-td"><strong>Michigan</strong></td><td class="crd-td">-</td><td class="crd-td">397,7k</td><td class="crd-td">2,42M</td><td class="crd-td">6,37M</td><td class="crd-td">9,95M</td><td class="crd-td">10,17M</td></tr>
<tr><td class="crd-td"><strong>New Jersey</strong></td><td class="crd-td">184,1k</td><td class="crd-td">560,7k</td><td class="crd-td">1,88M</td><td class="crd-td">4,84M</td><td class="crd-td">8,43M</td><td class="crd-td">9,62M</td></tr>
<tr><td class="crd-td"><strong>Virginia</strong></td><td class="crd-td">691,7k</td><td class="crd-td">1,12M</td><td class="crd-td">1,85M</td><td class="crd-td">3,32M</td><td class="crd-td">7,11M</td><td class="crd-td">8,9M</td></tr>
<tr><td class="crd-td"><strong>Washington</strong></td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">518,1k</td><td class="crd-td">2,38M</td><td class="crd-td">5,91M</td><td class="crd-td">8,08M</td></tr>
<tr><td class="crd-td"><strong>Arizona</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">122,9k</td><td class="crd-td">749,6k</td><td class="crd-td">5,16M</td><td class="crd-td">7,79M</td></tr>
<tr><td class="crd-td"><strong>Tennessee</strong></td><td class="crd-td">35,7k</td><td class="crd-td">1M</td><td class="crd-td">2,02M</td><td class="crd-td">3,29M</td><td class="crd-td">5,7M</td><td class="crd-td">7,38M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading 15 US states by peak population across federal benchmark censuses from 1790AD to 2026AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:precol-canada-zones">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Zone</th><th class="crd-th">Sites</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>N. Cascadia and Alaska</strong></td><td class="crd-td">225</td><td class="crd-td">25,7k</td><td class="crd-td">119,7k</td><td class="crd-td">166,9k</td><td class="crd-td">182k</td><td class="crd-td">181,5k</td></tr>
<tr><td class="crd-td"><strong>N. Canada and Greenland</strong></td><td class="crd-td">926</td><td class="crd-td">4,1k</td><td class="crd-td">19,2k</td><td class="crd-td">28,3k</td><td class="crd-td">36k</td><td class="crd-td">35,5k</td></tr>
<tr><td class="crd-td"><strong>Canadian Prairies</strong></td><td class="crd-td">192</td><td class="crd-td">12,9k</td><td class="crd-td">36,3k</td><td class="crd-td">44,5k</td><td class="crd-td">46k</td><td class="crd-td">45,3k</td></tr>
<tr><td class="crd-td"><strong>Hudson Bay</strong></td><td class="crd-td">130</td><td class="crd-td">3,9k</td><td class="crd-td">16,3k</td><td class="crd-td">21,4k</td><td class="crd-td">23k</td><td class="crd-td">22,6k</td></tr>
<tr><td class="crd-td"><strong>Saint Lawrence</strong></td><td class="crd-td">172</td><td class="crd-td">13,7k</td><td class="crd-td">48,1k</td><td class="crd-td">76,5k</td><td class="crd-td">92k</td><td class="crd-td">74,9k</td></tr>
<tr><td class="crd-td"><strong>Maritimes</strong></td><td class="crd-td">159</td><td class="crd-td">8,9k</td><td class="crd-td">27,6k</td><td class="crd-td">34,4k</td><td class="crd-td">36k</td><td class="crd-td">27,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Pre-Columbian Canada, Alaska and Greenland population across six Arctic, prairie and eastern ecological zones.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:modern-growth">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0/fig4_modern_us_canada_growth.png" alt="fig:modern-growth" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 5.</span> Post-independence United States (1783AD to 2026AD) and post-Confederation Canada, Greenland and territorial populations.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:modern-epoch-matrix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Domain</th><th class="crd-th">1783AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">2000AD</th><th class="crd-th">2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>United States and Territories</strong></td><td class="crd-td">4,38M</td><td class="crd-td">6,31M</td><td class="crd-td">23,66M</td><td class="crd-td">76,24M</td><td class="crd-td">151,38M</td><td class="crd-td">282,28M</td><td class="crd-td">344,67M</td></tr>
<tr><td class="crd-td"><strong>Canada, Greenland and SPM</strong></td><td class="crd-td">367,7k</td><td class="crd-td">556,2k</td><td class="crd-td">2,53M</td><td class="crd-td">5,54M</td><td class="crd-td">13,85M</td><td class="crd-td">30,75M</td><td class="crd-td">41,86M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Modern North American aggregate benchmarks across 1783AD to 2026AD combining colonial-to-Confederation continuity in Canada with federal enumerations in the United States.</figcaption>
</figure>

# Comparison with Global Baselines

Compared with macro-continental reconstructions [@kroeber1939; @denevan1992; @nevlebird2008], CENTAUR-II preserves broad continental orders of magnitude in 1900AD to 2026AD national totals while diverging substantially in pre-contact spatial allocation, eighteenth-century frontier growth and nineteenth-century urban shares. Where twentieth-century infrastructural covariates back-project modern urban hierarchies into pre-contact periods, the multi-registry radiocarbon and monument kriging surface concentrates Holocene density accurately along the Colorado Plateau, Chacoan outliers, Hohokam Salt-Gila canal networks, Cahokia and the American Bottom, Etowah and Coosa, Poverty Point and Lower Mississippi oxbows, the Finger Lakes, St. Lawrence lowlands, Sacramento Valley acorn oaklands and Puget Sound shell middens. Across the nineteenth-century frontier, ingesting 42.831 modern settlements plus 5.211 colonial entries eliminates the artificial twentieth-century urban step discontinuity caused by legacy large-city filters, keeping aggregate settlement trajectories smooth (maximum annual change of 1,42% outside the 1867AD Canadian Confederation splice) across all years from 1850AD to 2025AD.

At the macro-continental scale across the Holocene, three structural divergences stand out when benchmarking bottom-up CENTAUR-II series against earlier ethnographic syntheses [@kroeber1939; @denevan1992]. First, Early and Middle Holocene growth in the arid West, Great Basin and Missouri Headwaters peaks several centuries before agricultural intensification in the Eastern Woodlands, confirming that single continental exponential growth curves misrepresent regional aridification and bison-procurement dynamics [@kelly2013rocky; @kelly2025]. Second, post-contact Indigenous decline curves in colonial America and New France unfold asynchronously across coastal seaports, interior mission corridors and northern boreal fur-trading watersheds rather than collapsing simultaneously in 1500AD [@milner2010; @ubelaker2006]. Third, nineteenth-century urban population shares in eastern Canada and New England were consistently understated when unincorporated mill towns and Census Subdivisions below 10k inhabitants were absent from historical compendia.

<figure class="crd-table-figure" id="tab:colonial-module-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Module</th><th class="crd-th">Sub-regions</th><th class="crd-th">Settlements</th><th class="crd-th">Start Benchmark</th><th class="crd-th">End Benchmark</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Colonial America to 1754</strong></td><td class="crd-td">22</td><td class="crd-td">1.225</td><td class="crd-td">2,8M (1500AD)</td><td class="crd-td">2,43M (1754AD)</td></tr>
<tr><td class="crd-td"><strong>Colonial America to 1783</strong></td><td class="crd-td">26</td><td class="crd-td">1.485</td><td class="crd-td">2,43M (1754AD)</td><td class="crd-td">4,07M (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Colonial Canada to 1763</strong></td><td class="crd-td">8</td><td class="crd-td">1.352</td><td class="crd-td">346,5k (1500AD)</td><td class="crd-td">330,5k (1763AD)</td></tr>
<tr><td class="crd-td"><strong>Colonial Canada to 1867</strong></td><td class="crd-td">12</td><td class="crd-td">1.149</td><td class="crd-td">330,3k (1763AD)</td><td class="crd-td">3,64M (1867AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Colonial America and Colonial Canada summary across 1500AD to 1867AD linking Indigenous continuity with European settlement.</figcaption>
</figure>

# Limitations

Five methodological constraints govern the interpretation of CENTAUR-II outputs. First, despite aggregating 93.129 unique site-periods (286.193 horizon site records) across multiple national and regional registers, archaeological salvage excavations triggered by highway and reservoir construction in the United States remain denser than high-latitude surveys across northern Canada and interior Greenland; Poisson-Gamma shrinkage and macro-tile variance bounds damp but cannot eliminate survey intensity gradients. Second, pre-contact regional estimates prior to European arrival rely on radiocarbon density calibration anchored to ethnographic carrying-capacity envelopes whose confidence bounds widen before 1000BC. Third, colonial parish and militia registers vary in completeness across Spanish Florida, New Mexico, Alta California missions and unenumerated interior confederacies, requiring structural smoothing between 1500AD and 1750AD.

Fourth, modern unincorporated hamlets and small Census Designated Places only enter federal tabulations consistently after 1990AD, so pre-1990 series for newly delineated rural CDPs reflect conservative state- and province-scaled decennial back-projections rather than archival municipal counts for every settlement below 500 inhabitants. Fifth, while Greenland, Bermuda, American Samoa and Saint-Pierre-et-Miquelon are explicitly resolved at island resolution on the 5-arcminute grid, American Samoa spans only four raster cells (124 km²), amplifying per-pixel spatial sensitivity during decennial Census transitions.

Sixteenth-century through eighteenth-century Indigenous population floors prior to systematic ethnohistorical surveys remain subject to ongoing scholarly debate between high-count pandemic estimates and conservative archaeological site-count reconstructions [@milner2010; @ubelaker2006]. Future revisions of Operation Viscount can incorporate newly digitised state SHPO site files and Statistics Canada Census Tract micro-aggregations without altering the regional partition structure, composite settlement identifiers or Matérn kriging framework established in CENTAUR-II.

# Conclusion

By unifying Basin-level Holocene archaeology, *ahupua'a* ecological divisions, colonial enumerations and modern Census Subdivision and CDP universes across a consistent five-arcminute global terrestrial grid, CENTAUR-II eliminates the political border cliffs, sub-county data gaps and historical toponymy collisions of earlier continental reconstructions. All 53.438 catalogued settlements and 493.969 active land cells integrate cleanly into the Stadestér 2.0 urban composite with continuous 1850 to 2025AD urban trajectories (maximum annual settlement-count turnover of 1,42% outside the 1867AD border splice and maximum aggregate annual change of 2,12%), establishing a documented baseline for North American, Greenlandic and Polynesian historical demography from 10000BC to 2026AD.

The compiled regional and settlement series together establish a long-term demographic benchmark connecting deep Holocene environmental adaptation with modern urban systems across thirty-one sub-continental modules.

# Sources

<div id="refs"></div>
