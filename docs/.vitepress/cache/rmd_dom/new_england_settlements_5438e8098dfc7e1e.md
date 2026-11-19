---
title: "Settlement Gazetteer of Pre-Colonial New England (HU 01)"
subtitle: "CENTAUR-II: Coordinate-Anchored Villages, Shell-Middens and Riverine Centres, 3000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: new_england_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_new_england_spatial.png"
hero_caption: "Geographic distribution of the eight verified settlements across New England (HU 01) overlaid on the three sub-regional areal masks."
hero_label: "fig:hero-new-england"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents the 8 verified settlement trajectories (`new_england_settlements.json`) and 3 excluded archaeological candidates (`new_england_source_ledger.json5`) across New England (USGS Hydrological Unit 01, 145.387 km²) between 3000 BC and 1600 AD. Settlement continuity spans Archaic maritime aggregation at Turner Farm in Penobscot Bay (120 to 310 inhabitants, 3000 BC to 1200 AD) [@bourque1995turner], late pre-contact Wabanaki palisaded river villages at Norridgewock (620 in 1500 AD) and Meductic (480 in 1500 AD) [@snow1980; @sanger1987], and nucleated southern Algonquian towns around Narragansett Bay and Massachusetts Bay [@bragdon1996; @cook1976newengland]. Combined verified urban populations peak near 7.850 inhabitants in 1500 AD before declining slightly to 7.240 by 1600 AD, led by Cocumscussoc (`RI-1000-Narragansett`, 1.850 in 1500 AD), Mystic-Pequot Fort (1.550 in 1600 AD) and Patuxet (1.450 in 1500 AD) [@mcbride1990pequot; @bragdon1996].

# Background

Archaeological and ethnohistoric records across New England reveal a sharp distinction between seasonal mobile hunter-gatherer encampments of the early Holocene and sedentary late pre-contact riverine or estuarine villages [@snow1980]. Palaeoindian localities such as Bull Brook in northeastern Massachusetts and Vail in northwestern Maine represent short-term caribou-intercept aggregations around 9000 BC that cannot be assigned multi-year residential populations [@robinson2009bullbrook; @gramly1982vail]. Similarly, sixteenth-century European cartographic references to Norumbega along the Penobscot lack an excavated single-site archaeological footprint [@snow1980].

Conversely, coastal shell-midden sequences and Late Woodland maize-horticultural village excavations provide bounded footprints, pit-house or wigwam counts and ceramic chronologies suitable for demographic reconstruction [@bourque1995turner; @bragdon1996]. Separating fixed settlement points from the diffuse rural radiocarbon surface prevents the spatial kriging model from over-dispersing concentrated village populations across forested uplands [@kelly2025; @milner2010].

# Methodology

## Inclusion Criteria and Site Footprint Estimation

Every candidate site documented in New England regional syntheses is inventoried in `new_england_source_ledger.json5`. Sites are included only when excavations or early seventeenth-century eyewitness accounts establish bounded residential architecture or stratified midden area alongside verifiable WGS84 coordinates. Exclusion categories follow standard Operation Viscount rules: `seasonal_encampment_unquantified` for Palaeoindian hunting camps and `unlocated_historical_toponym` for unverified cartographic place names.

For included settlements, population series draw on wigwam-count multipliers (6 to 8 persons per multi-family coastal or riverine structure), excavated midden or village hectares (80 to 150 persons/ha in palisaded southern Algonquian centres) and contact-baseline counts prior to the 1616-1619 AD epidemic [@cook1976newengland; @bragdon1996; @mcbride1990pequot]. Each verified record carries `.sources: ["CENTAUR"]` in `new_england_settlements.json` and maps to one of the three HU 01 sub-regions.

# Testing and Validation

Gazetteer validation passed all automated checks at 0 errors at GMT+0:

1. **Ledger Parity**: All 11 entries in `new_england_source_ledger.json5` (8 included, 3 excluded) are accounted for with zero unmatched `settlement_key` values against `new_england_settlements.json`.
2. **Coordinate and Schema Compliance**: All 8 settlement records contain valid `[lat, lng]` coordinates inside or immediately adjacent to the HU 01 mask (`41,36 N` to `45,99 N`, `67,50 W` to `73,76 W`), non-empty integer population maps and canonical `["CENTAUR"]` `.sources` arrays.
3. **Sub-Regional Mass Conservation**: Peak settlement sums remain below 7% of total sub-regional population in every epoch, ensuring non-negative rural residuals during dasymetric allocation.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State/Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>RI-1000-Narragansett</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,59 N, 71,45 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.850</td></tr>
<tr><td class="crd-td"><strong>Mystic-Pequot Fort</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,36 N, 71,97 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.550</td></tr>
<tr><td class="crd-td"><strong>Patuxet</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,96 N, 70,67 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.450</td></tr>
<tr><td class="crd-td"><strong>Pawtucket-Pennacook</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,63 N, 71,32 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.100</td></tr>
<tr><td class="crd-td"><strong>Schodack-Mahican</strong></td><td class="crd-td">New York</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,55 N, 73,76 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td"><strong>Norridgewock</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,76 N, 69,88 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Meductic</strong></td><td class="crd-td">Canada</td><td class="crd-td">Maine Basins</td><td class="crd-td">45,99 N, 67,5 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Turner Farm</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,1 N, 68,87 W</td><td class="crd-td">3000BC-1200AD</td><td class="crd-td">1200AD</td><td class="crd-td">310</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified settlements in the New England (HU 01) gazetteer ordered by peak population.</figcaption>
</figure>

# Results

## Southern Estuarine Towns and Palisaded Centres

Demographic concentration in HU 01 peaked in the Narragansett, Pequot and Massachusetts Bay estuaries (Figure 1). Cocumscussoc (`RI-1000-Narragansett`, 41,59 N, 71,45 W) expanded from 850 residents in 1300 AD to 1.850 in 1500 AD before easing to 1.750 in 1600 AD [@bragdon1996]. Nearby Mystic-Pequot Fort (41,36 N, 71,97 W) grew from 950 in 1400 AD to 1.550 in 1600 AD prior to its destruction in 1637 AD [@mcbride1990pequot]. Along Massachusetts Bay and the Merrimack falls, Patuxet (1.450 in 1500 AD, 1.200 in 1600 AD) and Pawtucket-Pennacook (1.100 in 1500 AD, 880 in 1600 AD) anchored seasonal salmon and coastal maize economies, while Schodack-Mahican on the upper Hudson margin reached 950 in 1500 AD [@cook1976newengland; @dunn1994mahican].

<figure class="crd-figure-block" id="fig:sett-new-england">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-new-england-settlements/fig4_new_england_settlements.png" alt="fig:sett-new-england" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks in the New England (HU 01) gazetteer.</figcaption>
</figure>

## Northern Wabanaki Riverines and Shell-Middens

In the northern Wabanaki zone, Turner Farm on North Haven Island provides the longest continuous settlement record in HU 01, expanding from 120 occupants in the Late Archaic (3000 BC) to 310 by 1200 AD [@bourque1995turner]. Late pre-contact riverine centres developed further inland along fertile alluvial terraces and portage nodes: Norridgewock on the Kennebec reached 560 in 1400 AD and 620 in 1500 AD (540 in 1600 AD), while Meductic on the St. John River rose from 320 in 1300 AD to 480 in 1500 AD (450 in 1600 AD) [@snow1980; @sanger1987].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">State/Country</th><th class="crd-th">Status</th><th class="crd-th">Disposition Reason</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Meductic</strong></td><td class="crd-td">Canada</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Turner Farm</strong></td><td class="crd-td">Maine</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Norridgewock</strong></td><td class="crd-td">Maine</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Patuxet</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Pawtucket-Pennacook</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>RI-1000-Narragansett</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Mystic-Pequot Fort</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Schodack-Mahican</strong></td><td class="crd-td">New York</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Bull Brook</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
<tr><td class="crd-td"><strong>Vail</strong></td><td class="crd-td">Maine</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
<tr><td class="crd-td"><strong>Norumbega</strong></td><td class="crd-td">Maine</td><td class="crd-td">excluded</td><td class="crd-td">unlocated historical toponym</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source ledger disposition for all 11 New England (HU 01) candidate sites.</figcaption>
</figure>

# Limitations

Sixteenth-century settlement populations in HU 01 rely on back-projecting early seventeenth-century English, French and Dutch village observations [@cook1976newengland; @bragdon1996] onto Late Woodland ceramic and palisade footprints. Small interior hunting camps and dispersed single-family hamlets lacking multi-season residential structures remain aggregated within the continuous radiocarbon rural surface rather than individualised in the 8-site gazetteer.

# Sources

<div id="refs"></div>
