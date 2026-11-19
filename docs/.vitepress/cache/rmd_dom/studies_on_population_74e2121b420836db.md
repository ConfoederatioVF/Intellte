---
title: "Studies on Population across Northern America, Hawai'i and Associated Territories (CENTAUR-II)"
subtitle: "Holocene Radiocarbon Substrata, 18 Hydrological Units, Colonial Parish Returns and Complete Census Settlement Archives (-10000 to 2026 AD)"
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

Operation Viscount Project CENTAUR-II reconstructs the long-run demographic and urban trajectory of Northern America, Greenland, Hawai'i and associated island territories between 10000 BC (-10000 AD) and 2026 AD across 31 linked regional modules. It replaces legacy Centaur I regional rasters with a two-domain non-stationary Matérn ($\nu = 3/2$) kriging architecture anchored to 21.196 site-horizon radiocarbon clusters in mainland North America and 727 official *ahupua'a* land divisions in Hawai'i. Continental pre-contact population across the 18 contiguous United States Hydrological Units [@kelly2025] peaks near 3,63M around 1200 AD before declining to 2,44M by 1600 AD, while Canada, Alaska and Greenland rise to 415k at 1500 AD. Following colonial establishment and Confederation/Independence censuses [@uscb1975z; @gibson1998; @uscb2025subest; @statcan2026q3], total CENTAUR population expands from 2,97M in 1750 AD to 81,92M in 1900 AD and 385,69M in 2025 AD, supported by 34.010 verified settlement trajectories across all modules.

# Background

Previous historical population grids for North America suffered from two structural defects. First, continental pre-Columbian syntheses [@mcevedy1978; @nevlebird2008] relied on broad eco-zone polygons that produced sharp straight-line density cliffs across modern political borders and hydrological divides. Second, legacy stadial urban databases under-represented minor incorporated municipalities in the United States and Canada after 1975 AD, leaving only 2.296 settlement records in Centaur I with just 10 entries prior to 1790 AD.

To resolve both gaps, CENTAUR-II adopts the 31-module hierarchical architecture of Project POLARIS. It separates Pre-Columbian United States demography strictly by the 18 canonical USGS two-digit Hydrological Units ordered by Kelly et al. [@kelly2025] radiocarbon peak timing, adds six Arctic, boreal, prairie and Atlantic regions across Pre-Columbian Canada and Alaska, isolates Pre-Annexation Hawai'i and American Polynesia (800 to 1898 AD) from U.S. post-annexation statehood [@kirch2011; @schmitt1977; @rieth2008], and establishes full census settlement coverage from early colonial parish returns [@uscb1975z] to 2026 AD [@uscb2025subest; @statcan2026q3].

# Methodology

## Radiocarbon and Polynesian Substrata Kriging

Holocene habitation potential in mainland North America, Greenland and Bermuda (`sites_p3k14c_na`, 481.752 active 5-arcminute cells across 20,1M km²) is derived from `p3k14c` [@bird2022p3k14c] and `c14bazAAR` dates partitioned into 1.359 domestic Voronoi catchments across 10 Holocene horizons (-10000 to 1600 AD). To eliminate boundary distortions along the Rio Grande, Sonora, Bering Strait and Florida Strait, 171 cross-frontier buffer catchments condition Northern Mexico, Chukotka and Kamchatka (from POLARIS `sites_IA_RAS`), and Cuba and the Bahamas up to 300 km beyond the study perimeter. A parallel non-stationary Matérn ($\nu = 3/2$) model covers the 232 cells of `sites_hawaii_polynesia` across 6 chronological horizons (800 to 1898 AD), grouping 727 official State of Hawai'i *ahupua'a* polygons into 61 sub-*moku* catchments plus Eastern and Western Samoan frontier buffers [@dye2011; @rieth2008].

<figure class="crd-figure-block" id="fig:kriging-val">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0/fig5_kriging_validation.png" alt="fig:kriging-val" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Non-stationary Matérn kriging goodness-of-fit across ten North American radiocarbon horizons and six Hawaiian-Polynesian epochs.</figcaption>
</figure>

## Regional Demographic Synthesis and Mosaic Calibration

Each of the 31 modules stores independent annual or benchmark series with lower and upper uncertainty bounds inside `<stem>.json5`, linked to RGBA regional masks on the shared 4320x2160 WGS84 grid. `ViscountSubstrataMosaic` scales the rural kriging priors minus `stadester_urban_rasters` to match each sub-region target, enforces chronological handovers across `usa_hawaii` and `usa_american_samoa` at 1898 AD, and smooths log-multipliers across 2 passes of a 5-pixel separable filter inside valid land domains.

# Testing and Validation

All quantitative gates passed at 0 GMT+0 errors prior to manuscript compilation:

1. **Kriging Sharpness**: Both `sites_p3k14c_na` (10 periods, `tau1 = 1,25`, `nugget_to_sill = 0,04` to `0,22`, pseudo-$R^2 = 0,9733$ to `0,9992`) and `sites_hawaii_polynesia` (6 periods, `tau1 = 1,25`, `nugget_to_sill = 0,1187` to `0,22`, pseudo-$R^2 = 0,8637$ to `0,9738`) pass sharpness limits (`tau1 <= 1,80`, `nugget_to_sill < 0,45`).
2. **Gazetteer Exhaustiveness**: All 31 regional `_settlements.json` and `_source_ledger.json5` pairs passed validation with 0 bad coordinates, 0 corrupt names, 0 missing population series, 0 invalid `.sources` arrays and 0 unaccounted ledger candidates (`34.010` total entries).
3. **Border-Cliff Continuity**: Composite 4320x2160 GeoPNG rasters across Pre-Columbian, colonial and modern benchmarks show smooth cross-border gradients (`p99_soft <= 1,25`, rectilinear wall run < 18 px).

<figure class="crd-table-figure">
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

# Results

## Pre-Columbian Holocene Radiocarbon Peaks

Ordered strictly by Kelly et al. [@kelly2025] summed probability peaks, Arid West and Upper Missouri hydrological basins (Upper Colorado 796 AD, Extreme Northern Plains 827 AD, Northern Plains 857 AD) climax centuries ahead of late Mississippian and Iroquoian agricultural cores (Upper Mississippi 1107 AD, Cumberland 1167 AD, Southeast 1169 AD, Lower Mississippi 1177 AD) and Pacific coast maritime-forager maxima (California 1578 AD, Northwest 1592 AD). Across all 18 units, continental indigenous totals climb from `3,61M` in 1100 AD to `3,63M` in 1200 AD before contracting to `2,44M` at 1600 AD [@ubelaker2006; @milner2010]. Hawai'i reaches `375k` around 1778 AD [@kirch2011], dropping after European contact to `56,9k` in the 1872 census before plantation immigration drives recovery to `124,4k` in 1898 AD [@schmitt1977].

<figure class="crd-figure-block" id="fig:kelly-hucs">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0/fig2_precolumbian_kelly_hucs.png" alt="fig:kelly-hucs" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Relative Holocene demographic intensity across the 18 contiguous United States Hydrological Units ordered by radiocarbon peak timing.</figcaption>
</figure>

## Colonial Transition and Complete Settlement Coverage

Between 1610 and 1867 AD, indigenous contraction coincides with exponential European and enslaved African settlement along the Atlantic seaboard, St. Lawrence lowlands and Acadian dykes [@uscb1975z]. The 13 Colonies, Bermuda and Spanish-French borderlands rise from `1,49M` combined inhabitants in 1700 AD to `2,43M` in 1754 AD and `4,07M` by 1783 AD. Modern national censuses [@gibson1998; @uscb2025subest; @statcan2026q3; @geonames2026] record `27.997` incorporated places and census-designated settlements in the United States, Bermuda and American Samoa (`344,67M` total in 2026 AD) alongside `5.043` settlements across Canada, Greenland and Saint-Pierre-et-Miquelon (`41,86M` total in 2026 AD).

<figure class="crd-figure-block" id="fig:modern-growth">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0/fig4_modern_us_canada_growth.png" alt="fig:modern-growth" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Combined post-independence United States (1783 to 2026 AD) and post-Confederation Canadian (1867 to 2026 AD) demographic trajectories.</figcaption>
</figure>

# Limitations

Radiocarbon site counts in `p3k14c` exhibit differential CRM salvage excavation density across U.S. states and under-sampling above 60 degrees North in Canada and interior Greenland; Empirical Bayes catchment shrinkage and `sites_IA_RAS` Chukotka conditioning mitigate but do not erase survey bias. Unincorporated U.S. settlements outside Census `SUMLEV=162` relies on GeoNames point estimates (`>= 500` inhabitants) rather than intercensal annual micro-estimates prior to 2000 AD.

# Sources

<div id="refs"></div>
