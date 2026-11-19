---
title: "Extreme Northern Plains Hydrological Unit (HU 09): Settlement Gazetteer"
subtitle: "CENTAUR-II: Woodland Mound and Prairie-Border Sites, 0AD-1500AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: extreme_northern_plains_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_extreme_northern_plains_spatial.png"
hero_caption: "Spatial distribution of four verified Woodland and Northeastern Plains archaeological complexes across Extreme Northern Plains Hydrological Unit 09."
hero_label: "fig:hero-extreme-northern-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This gazetteer compiles verified WGS84 coordinates, occupational spans and benchmark population estimates for four excavated Woodland and Northeastern Plains complexes across Extreme Northern Plains Hydrological Unit 09 between 0AD and 1500AD [@kelly2025; @bird2022p3k14c]. The dataset comprises Devils Lake-Narrows and Arvilla in North Dakota alongside Grand Mound and McKinstry along the Rainy River in northern Minnesota [@johnson1973arvilla; @stoltman1973laurel; @gregg1994plains; @lenius1990rainy]. Combined site populations peaked at 1,37k in 800AD, matching the Kelly et al. HU 09 radiocarbon mode of 827AD [@kelly2025]. Source-ledger auditing verifies all four included sites and one excluded seasonal scatter aggregate with zero unaccounted candidates.



# Background

Excavated aggregations in HU 09 cluster around seasonal resource bottlenecks rather than permanent maize towns. Along the Rainy River at the outlet of Lake of the Woods, Laurel and Blackduck communities gathered each spring for lake-sturgeon spawning and erected major earthen burial mounds at Grand Mound and McKinstry [@stoltman1973laurel; @lenius1990rainy]. Further west on the Red River beach ridges and the glacial narrows of Devils Lake, Arvilla and Devils Lake-Sourisford groups built linear and conical mounds adjacent to bison-crossing and woodland-margin camps [@johnson1973arvilla; @gregg1994plains; @syms1977cultural].

# Methodology

## Inclusion Criteria and Geospatial Encoding

Candidate sites were screened against Stadestér 2.0 standards requiring verified point coordinates (`[lat, lng]`), dated ceramic or mound stratigraphy and bounded seasonal-to-multi-season resident group estimates [@bird2022p3k14c; @kelly2025]. Unlocated lithic scatters lacking bounded habitation horizons are logged as excluded in `extreme_northern_plains_source_ledger.json5` and retained only within sub-regional carrying-capacity aggregates. All temporal benchmarks use GMT+0 calendar years.

## Aggregation-Camp Population Estimation

Site estimates combine excavated habitation terrace area, hearth density and contemporaneous seasonal camp sizes inferred from burial-mound demography and ethnographic sturgeon-fishery group sizes [@stoltman1973laurel; @johnson1973arvilla; @toom2004northeastern]. Peak figures represent maximum regular seasonal or semi-sedentary aggregation rather than ephemeral ceremonial gatherings.

# Testing and Validation

Ledger reconciliation confirms exact parity between the four included sites in `extreme_northern_plains_source_ledger.json5` and `extreme_northern_plains_settlements.json`, plus one excluded seasonal camp aggregate. Every verified complex reaches its individual maximum in 800AD (290 at Devils Lake-Narrows, 360 at Arvilla, 380 at Grand Mound and 340 at McKinstry), closely tracking the HU 09 radiocarbon median peak of 827AD [@kelly2025]. Note that Devils Lake-Narrows sits near the Souris-Sheyenne-James drainage divide and also appears in the neighbouring Northern Plains HU 10 frontier inventory.

# Results

## Verified Settlement Gazetteer

Table \ref{tab:gazetteer-extreme-northern-plains} details all four verified sites across HU 09, and Figure \ref{fig:settlements-extreme-northern-plains} illustrates the rank-size hierarchy led by Grand Mound (380) and Arvilla (360).

<figure class="crd-table-figure" id="tab:gazetteer-extreme-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1200AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Devils Lake-Narrows</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">48,03, -98,92</td><td class="crd-td">600-1500AD</td><td class="crd-td">290</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">290</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Arvilla</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">47,92, -97,48</td><td class="crd-td">600-1300AD</td><td class="crd-td">360</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">360</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Grand Mound</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">48,56, -93,69</td><td class="crd-td">0-1200AD</td><td class="crd-td">380</td><td class="crd-td">190</td><td class="crd-td">310</td><td class="crd-td">380</td><td class="crd-td">280</td></tr>
<tr><td class="crd-td"><strong>McKinstry</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">48,52, -93,59</td><td class="crd-td">400-1200AD</td><td class="crd-td">340</td><td class="crd-td">-</td><td class="crd-td">220</td><td class="crd-td">340</td><td class="crd-td">290</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified Woodland and Northeastern Plains complexes in Extreme Northern Plains HU 09 with coordinates, spans and benchmark populations.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:settlements-extreme-northern-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-extreme-northern-plains-settlements/fig4_extreme_northern_plains_settlements.png" alt="fig:settlements-extreme-northern-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and peak settlement hierarchy across the four verified complexes in Extreme Northern Plains HU 09.</figcaption>
</figure>

## Source Ledger Audit

Table \ref{tab:ledger-extreme-northern-plains} documents all five source-ledger candidates evaluated for HU 09.

<figure class="crd-table-figure" id="tab:ledger-extreme-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Status</th><th class="crd-th">Ledger Classification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Devils Lake-Narrows</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Arvilla</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Grand Mound</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>McKinstry</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Unnamed seasonal camps</strong></td><td class="crd-td">United States</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source-ledger reconciliation for Extreme Northern Plains HU 09 showing four included sites and one excluded aggregate.</figcaption>
</figure>

# Limitations

Site-level documentation in HU 09 faces three constraints. First, Laurel and Arvilla occupations represent semi-sedentary seasonal aggregations rather than year-round nucleated towns, meaning site totals measure peak seasonal co-residence [@stoltman1973laurel; @johnson1973arvilla]. Second, Devils Lake water-level fluctuations submerged or eroded shoreline camps across mid- and late-Holocene highstands [@gregg1994plains]. Third, late precontact Blackduck and Selkirk winter hunting camps north of the Rainy River fall outside the USGS HUC-2 polygon and are resolved in CENTAUR-I [@lenius1990rainy].

# Sources

<div id="refs"></div>
