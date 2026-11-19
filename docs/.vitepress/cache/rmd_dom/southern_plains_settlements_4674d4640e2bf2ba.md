---
title: "Settlement Gazetteer of the Southern Plains Hydrological Unit (HU 12)"
subtitle: "CENTAUR-II: Caddoan Mound Towns, Balcones Spring Camps and Gulf Estuarine Villages, -10000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: southern_plains_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_southern_plains_spatial.png"
hero_caption: "Locations of six verified settlements across the three areal divisions of the Southern Plains Hydrological Unit (461,47k km²) from 10000 BC to 1600 AD."
hero_label: "fig:hero-southern-plains-gaz"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles verified settlement records for the Southern Plains Hydrological Unit (HU 12) from `10000 BC` (`-10000 AD`) to `1600 AD`. Out of `7` ledger entries audited in `southern_plains_source_ledger.json5`, `6` persistent mound centres, spring camps and estuarine base settlements enter `southern_plains_settlements.json`, while `1` collective entry (`Unnamed seasonal camps`) is excluded into rural carrying-capacity aggregates. Verified settlements span from the Palaeoindian-Archaic Balcones spring complex at `Gault` (`65-210`) through Caddoan regional centres `George C. Davis` (`1,65k` at `1200 AD`) and `Washington Square Mound` (`950` at `1300 AD`) to protohistoric `Waco-Wichita Village` (`620` at `1600 AD`) and coastal Karankawa base settlements at `Oso Creek-Corpus Christi` (`460` at `1500 AD`) and `Mitchell Ridge` (`440` at `1500 AD`).

# Background

Unlike densely nucleated Mississippian alluvial corridors to the east, HU 12 exhibits a sharp contrast between fixed Caddoan mound towns in the Neches-Sabine pineywoods [@newell1949; @perttula2012] and seasonally mobile foraging or semi-sedentary prairie communities across the Edwards Plateau and Texas Gulf barrier bays [@perttula2004; @ricklis1996]. Kelly et al. [@kelly2025] radiocarbon curves (`N = 2.347`, peak `1287 AD`) reflect this dual structure, peaking during Middle Caddoan civic construction and late Holocene coastal intensification.

# Methodology

## Inclusion Criteria and Schema Audit

All `7` ledger entries in `southern_plains_source_ledger.json5` were checked for exact WGS84 coordinates, multi-phase residential footprints and distinct spatial bounds. Included settlements in `southern_plains_settlements.json` carry `.sources = ["CENTAUR"]` exclusively, with excavation monographs cited in `southern_plains_settlement_gazetteer.bib`.

## Settlement Size Calibration

East Texas Caddoan populations (`George C. Davis`, `Washington Square Mound`) derive from excavated circular-post-structure zones and plaza-mound precincts [@newell1949; @perttula2012]. Central Texas and coastal aggregates (`Gault`, `Mitchell Ridge`, `Oso Creek-Corpus Christi`, `Waco-Wichita Village`) reflect multi-season base-camp midden extents and mortuary counts [@waters2011; @ricklis1994; @ricklis1996; @vehik2002].

# Testing and Validation

Exhaustiveness checks on `southern_plains_settlements.json` and `southern_plains_source_ledger.json5` returned `0` errors at `GMT+0`:

1. **Included Settlements**: `6` sites (`2` in Sabine-Neches Caddo, `3` in Brazos-Colorado-Edwards and `1` in Gulf Coast-Nueces).
2. **Excluded Entries**: `1` collective seasonal scatter category (`Unnamed seasonal camps`).

<figure class="crd-figure-block" id="fig:sp-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-southern-plains-settlements/fig4_southern_plains_settlements.png" alt="fig:sp-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size profile and peak populations across the six verified settlements of Southern Plains (HU 12).</figcaption>
</figure>

# Results

## Included Caddoan, Balcones and Coastal Settlements

Table \ref{tab:sp-included} summarises all `6` verified sites. The earliest documented locus is `Gault` (`65` at `10000 BC` to `210` at `0 AD`) along the Balcones Escarpment spring line [@waters2011]. In East Texas, `George C. Davis` (`Caddo Mounds`) grows from `450` in `800 AD` to `1,65k` in `1200 AD` before easing to `1,2k` in `1300 AD` [@newell1949; @perttula2012], complemented by `Washington Square Mound` (`520-950` across `1200-1400 AD`). Along the Brazos prairie and Gulf barrier bays, `Waco-Wichita Village` expands to `620` by `1600 AD` [@vehik2002], while Karankawa estuarine base camps at `Mitchell Ridge` (`440` at `1500 AD`) and `Oso Creek-Corpus Christi` (`460` at `1500 AD`) sustain dense seasonal aggregations [@ricklis1994; @ricklis1996].

<figure class="crd-table-figure" id="tab:sp-included">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>George C. Davis (Sabine-Neches Caddo)</strong></td><td class="crd-td">800AD-1300AD</td><td class="crd-td">1,6k (1200AD)</td><td class="crd-td">31,59, -95,15</td></tr>
<tr><td class="crd-td"><strong>Washington Square Mound (Sabine-Neches Caddo)</strong></td><td class="crd-td">1200AD-1400AD</td><td class="crd-td">950 (1300AD)</td><td class="crd-td">31,61, -94,65</td></tr>
<tr><td class="crd-td"><strong>Waco-Wichita Village (Brazos-Edwards)</strong></td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">620 (1600AD)</td><td class="crd-td">31,55, -97,15</td></tr>
<tr><td class="crd-td"><strong>Gault (Brazos-Edwards)</strong></td><td class="crd-td">10000BC-0AD</td><td class="crd-td">210 (0AD)</td><td class="crd-td">30,89, -97,71</td></tr>
<tr><td class="crd-td"><strong>Mitchell Ridge (Brazos-Edwards)</strong></td><td class="crd-td">1200AD-1550AD</td><td class="crd-td">440 (1500AD)</td><td class="crd-td">29,25, -94,89</td></tr>
<tr><td class="crd-td"><strong>Oso Creek-Corpus Christi (Gulf Coast-Nueces)</strong></td><td class="crd-td">800AD-1500AD</td><td class="crd-td">460 (1500AD)</td><td class="crd-td">27,7, -97,32</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified settlements in Southern Plains (HU 12) with occupied spans, peak populations and WGS84 coordinates.</figcaption>
</figure>

## Excluded Ledger Candidates

One collective ledger entry (`Unnamed seasonal camps`) is omitted from point-site totals so ephemeral lithic scatters across the Edwards Plateau and South Texas Brush Country remain calibrated inside rural kriging strata without artificial urban point clustering [@perttula2004].

<figure class="crd-table-figure" id="tab:sp-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Unnamed seasonal camps (United States)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Ephemeral seasonal lithic scatters within southern_plains incorporated into macro-regional carrying-capacity aggregates without discrete settlement coordinates.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded candidate entry documented in the Southern Plains (HU 12) source ledger.</figcaption>
</figure>

# Limitations

Dispersed Caddoan farmstead hamlets across the Upper Neches, Angelina and Sulphur valleys outnumber large mound centres in total population but lack discrete nucleated boundaries, so they remain represented in sub-regional rural density rasters rather than individual gazetteer rows [@perttula2012].

# Sources

<div id="refs"></div>
