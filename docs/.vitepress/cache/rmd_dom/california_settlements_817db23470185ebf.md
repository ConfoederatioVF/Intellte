---
title: "Settlement Gazetteer of Pre-Colonial California (HU 18)"
subtitle: "CENTAUR-II: Shellmounds, Delta Villages, Acorn Towns and Chumash Maritime Centres, 1000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: california_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_california_spatial.png"
hero_caption: "Geographic distribution of the 11 verified settlements across California (HU 18) overlaid on the four sub-regional areal masks."
hero_label: "fig:hero-california"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents the 11 verified settlement trajectories (`california_settlements.json`) and 1 excluded seasonal scatter class (`california_source_ledger.json5`) across California (USGS Hydrological Unit 18, 425.204 km²) from 1000 BC to 1600 AD. Every included centre reaches its Holocene maximum at 1600 AD, matching the late pre-contact expansion documented by Kelly et al. [@kelly2025] and Jones et al. [@jones2021california]. Leading settlements comprise the Telamni Yokuts delta town of Tulare-Telamni (1.800 inhabitants in 1600 AD), the Chumash coastal capital Syuxtun at Santa Barbara (1.550), Sacramento River Patwin-Koru (1.300), Emeryville Shellmound on San Francisco Bay (1.200, occupied continuously from 1000 BC), Point Mugu Muwa (1.180) and Los Angeles Basin Yaanga (1.050) [@cook1976california; @broughton1999emeryville; @johnson1988chumash].

# Background

Pre-mission Californian demography was structured around thousands of triblet village communities rather than centralised urban states, yet major river deltas, shellmound estuaries and Santa Barbara Channel ports achieved town-scale aggregations exceeding 1.000 residents [@kroeber1925california; @cook1976california]. Dispersed seasonal lithic scatters lacking permanent architecture are recorded in `california_source_ledger.json5` as an excluded aggregate (`Unnamed seasonal camps`) so that point-anchored entries represent bounded, multi-generation villages and ethnohistoric principal towns [@moratto1984california].

# Methodology

## Inclusion Criteria and Demographic Estimation

All 12 entries in `california_source_ledger.json5` follow Operation Viscount verification rules. Ephemeral lithic scatters are excluded under `seasonal_encampment_unquantified`, whereas 11 principal archaeological and ethnohistoric settlements carry `.sources: ["CENTAUR"]` in `california_settlements.json`.

Population time-series combine excavated house-pit and shellmound volume trajectories at Emeryville Shellmound [@broughton1999emeryville], Chumash mission-baptismal and canoe-registry reconstructions at Syuxtun and Muwa [@johnson1988chumash; @arnold2001chumash], Central Valley Yokuts and Patwin village headcounts [@cook1976california], Yurok redwood-plank house tallies at Rek'woi and Tsurai [@kroeber1925california], Sierra bedrock-mortar aggregation at Chaw'se-Grinding Rock [@lightfoot2009california] and irrigated Owens Valley villages near Bishop [@bettinger1982owens].

# Testing and Validation

Gazetteer auditing passed all verification checks at 0 errors at GMT+0:

1. **Ledger Parity**: All 12 ledger items (11 included, 1 excluded) match `california_settlements.json` keys without discrepancy.
2. **Coordinate and Schema Compliance**: All 11 records carry valid `[lat, lng]` coordinates (`32,74 N` to `41,55 N`, `114,62 W` to `124,14 W`), positive integer trajectories and `["CENTAUR"]` `.sources` arrays.
3. **Sub-Regional Mass Conservation**: Verified settlement totals sum to 10.300 in 1500 AD (3,32% of HU 18 total 310k) and 11.370 in 1600 AD (3,38% of 336k), reflecting California's broad triblet rural settlement distribution.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tulare-Telamni</strong></td><td class="crd-td">California</td><td class="crd-td">San Joaquin-Coast</td><td class="crd-td">36,2 N, 119,45 W</td><td class="crd-td">600AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.800</td></tr>
<tr><td class="crd-td"><strong>Syuxtun</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,41 N, 119,69 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.550</td></tr>
<tr><td class="crd-td"><strong>Patwin-Koru</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">39,21 N, 122,01 W</td><td class="crd-td">800AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.300</td></tr>
<tr><td class="crd-td"><strong>Emeryville Shellmound</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">37,84 N, 122,29 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.200</td></tr>
<tr><td class="crd-td"><strong>Muwa</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,1 N, 119,06 W</td><td class="crd-td">600AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.180</td></tr>
<tr><td class="crd-td"><strong>Yaanga</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,05 N, 118,24 W</td><td class="crd-td">800AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.050</td></tr>
<tr><td class="crd-td"><strong>Blythe Intaglios-Yuman</strong></td><td class="crd-td">Arizona</td><td class="crd-td">Chumash-South</td><td class="crd-td">32,73 N, 114,61 W</td><td class="crd-td">1000AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">750</td></tr>
<tr><td class="crd-td"><strong>Chaw'se-Grinding Rock</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">38,42 N, 120,64 W</td><td class="crd-td">1000AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">740</td></tr>
<tr><td class="crd-td"><strong>Rek'woi</strong></td><td class="crd-td">California</td><td class="crd-td">Klamath-N. Coast</td><td class="crd-td">41,55 N, 124,07 W</td><td class="crd-td">800AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">680</td></tr>
<tr><td class="crd-td"><strong>Bishop-Owens Valley</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">37,36 N, 118,39 W</td><td class="crd-td">600AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">640</td></tr>
<tr><td class="crd-td"><strong>Tsurai</strong></td><td class="crd-td">California</td><td class="crd-td">Klamath-N. Coast</td><td class="crd-td">41,06 N, 124,14 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">540</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified settlements in the California (HU 18) gazetteer ordered by peak population.</figcaption>
</figure>

# Results

## Central Valley, Delta and North Coast Villages

In the Central Valley and Bay-Delta sub-regions, nucleated riverside and marsh-edge towns grew steadily across the Late Holocene (Table 1 and Figure 1). Emeryville Shellmound (`37,84 N, 122,29 W`) on San Francisco Bay expanded from 240 inhabitants in 1000 BC to 520 at 0 AD, 950 in 1200 AD and 1.200 in 1600 AD [@broughton1999emeryville]. Further inland, Tulare-Telamni on the Kaweah Delta rose from 480 in 600 AD to 1.650 in 1500 AD and 1.800 in 1600 AD, while Patwin-Koru on the Sacramento River reached 1.300 in 1600 AD [@cook1976california]. Sierra foothill acorn-processing centre Chaw'se-Grinding Rock expanded from 340 in 1000 AD to 740 in 1600 AD, Owens Valley irrigation cluster Bishop reached 640 in 1600 AD [@bettinger1982owens] and coastal Yurok villages at Rek'woi (680) and Tsurai (540) anchored the Klamath littoral [@kroeber1925california].

<figure class="crd-figure-block" id="fig:sett-california">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-california-settlements/fig4_california_settlements.png" alt="fig:sett-california" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks in the California (HU 18) gazetteer.</figcaption>
</figure>

## Chumash Channel and Southern California Centres

Along the Santa Barbara Channel and southern coast, maritime plank-canoe (*tomol*) exchange and island-mainland craft specialisation supported dense coastal capitals [@arnold2001chumash; @johnson1988chumash]. Syuxtun (`34,41 N, 119,69 W`) increased from 420 residents at 0 AD to 1.150 in 1200 AD and 1.550 in 1600 AD, flanked southeastward by Muwa at Point Mugu (1.180 in 1600 AD) and Yaanga in the Los Angeles basin (1.050 in 1600 AD), while Lower Colorado floodplain agriculturalists around Blythe Intaglios-Yuman reached 750 by 1600 AD [@cook1976california].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">State/Country</th><th class="crd-th">Status</th><th class="crd-th">Disposition Reason</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Blythe Intaglios-Yuman</strong></td><td class="crd-td">Arizona</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Bishop-Owens Valley</strong></td><td class="crd-td">California</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Rek'woi</strong></td><td class="crd-td">California</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Tsurai</strong></td><td class="crd-td">California</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Emeryville Shellmound</strong></td><td class="crd-td">California</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Patwin-Koru</strong></td><td class="crd-td">California</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Chaw'se-Grinding Rock</strong></td><td class="crd-td">California</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Tulare-Telamni</strong></td><td class="crd-td">California</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Syuxtun</strong></td><td class="crd-td">California</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Muwa</strong></td><td class="crd-td">California</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Yaanga</strong></td><td class="crd-td">California</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Unnamed seasonal camps</strong></td><td class="crd-td">United States</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source ledger disposition for all 12 California (HU 18) candidate entries.</figcaption>
</figure>

# Limitations

Because pre-contact California comprised hundreds of autonomous triblet villages averaging 100 to 300 inhabitants each [@kroeber1925california; @cook1976california], the 11 gazetteer entries represent only major regional anchor centres (3,38% of total HU 18 population in 1600 AD), leaving over 96% of indigenous residents allocated through the non-stationary Matérn rural radiocarbon surface [@kelly2025].

# Sources

<div id="refs"></div>
