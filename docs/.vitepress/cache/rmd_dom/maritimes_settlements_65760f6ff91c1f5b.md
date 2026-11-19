---
title: "Settlement Gazetteer of the Pre-Columbian Atlantic Maritimes, Newfoundland and Labrador"
subtitle: "CENTAUR-II: Coordinates, Toponymy and Demographic Trajectories (-10000 to 1600 AD)"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: maritimes_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_maritimes_spatial.png"
hero_caption: "Spatial distribution of eight verified Palaeoindian, Maritime Archaic, Woodland and Norse settlements across the Atlantic Maritimes, Newfoundland and Labrador from 10000 BC to 1600 AD."
hero_label: "fig:hero-maritimes"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, indigenous, Norse and French toponymy, occupation spans and population trajectories for 8 pre-modern settlements across the Atlantic Maritimes, Newfoundland and Labrador (`484,19k km²`) from `10000 BC` to `1600 AD`. Entries span from the `9000 BC` Debert Palaeoindian aggregation (`90` peak) and `6000 BC` Maritime Archaic complex at L'Anse Amour (`180`) to long-lived shell-midden and river-mouth hubs at Metepenagiag (`620`), Kejimkujik-Merigomish (`580`), Meductic (`480`), Port au Choix (`310`) and Sheshatshiu-Hamilton Inlet (`290`), alongside the `1000 AD` Norse Vinland station at L'Anse aux Meadows (`110`). All `8` records carry `"CENTAUR"` provenance in `maritimes_settlements.json` and reconcile with `0` discrepancies against `maritimes_source_ledger.json5`.

# Background

Coastal and estuarine resource abundance shaped residential permanence across Atlantic Canada [@prins1996; @renouf1999]. In New Brunswick and Nova Scotia, stratified salmon-fishing terraces and shell middens at Metepenagiag, Meductic and Kejimkujik-Merigomish sustained multi-century Mi'kmaq and Wolastoqiyik centres [@allen1981; @prins1996]. On the Strait of Belle Isle and western Newfoundland, Maritime Archaic, Dorset and Norse overwintering sites anchored harp-seal hunting and North Atlantic maritime voyages [@tuck1976; @tuck1976b; @wallace2003].

# Methodology

Candidates enter `maritimes_source_ledger.json5` when excavated hearth floors, shell-midden volumes or Norse hall capacities permit bounded population estimates [@macdonald1968; @ingstad1985]. Dispersed lithic stations lacking bounded residential limits are marked `excluded` (`seasonal_encampment_unquantified`) and routed into the rural kriging grid. Table \ref{tab:summary} summarises site distribution across the four sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mi'kma'ki</strong></td><td class="crd-td">2</td><td class="crd-td">670</td><td class="crd-td">Kejimkujik-Merigomish (580)</td></tr>
<tr><td class="crd-td"><strong>Wolastoq-NB</strong></td><td class="crd-td">2</td><td class="crd-td">1,1k</td><td class="crd-td">Metepenagiag (620)</td></tr>
<tr><td class="crd-td"><strong>Newfoundland</strong></td><td class="crd-td">3</td><td class="crd-td">600</td><td class="crd-td">Port au Choix (310)</td></tr>
<tr><td class="crd-td"><strong>Labrador</strong></td><td class="crd-td">1</td><td class="crd-td">290</td><td class="crd-td">Sheshatshiu-Hamilton Inlet (290)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of included settlements and peak populations across the Atlantic Maritimes, Newfoundland and Labrador.</figcaption>
</figure>

# Testing and Validation

Ledger reconciliation passes with `8` included sites, `1` excluded seasonal-camp aggregate, `0` unaccounted candidates and `0` schema faults. Coordinates span `45,42` to `53,52` N and `55,53` to `67,50` W; `.sources` cites `"CENTAUR"` on all records. Figure \ref{fig:settlements} charts the rank-size curve led by Metepenagiag (`620`) and Kejimkujik-Merigomish (`580`).

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-maritimes-settlements/fig4_maritimes_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and peak populations across the eight catalogued settlements of the Atlantic Maritimes, Newfoundland and Labrador.</figcaption>
</figure>

# Results

## Catalogued Settlement Trajectories

Table \ref{tab:gazetteer} lists all 8 included settlements ordered by earliest attested year.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Debert</strong></td><td class="crd-td">Debert Palaeoindian; Belmont</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">45,42 N, 63,43 W</td><td class="crd-td">9000BC - 8000BC</td><td class="crd-td">90</td><td class="crd-td">9000BC: 90; 8000BC: 70</td></tr>
<tr><td class="crd-td"><strong>L'Anse Amour</strong></td><td class="crd-td">Strait of Belle Isle; Forteau Bay</td><td class="crd-td">Newfoundland</td><td class="crd-td">51,48 N, 56,86 W</td><td class="crd-td">6000BC - 1500AD</td><td class="crd-td">180</td><td class="crd-td">6000BC: 65; 5000BC: 95; 3000BC: 110; 1200AD: 160; 1500AD: 180</td></tr>
<tr><td class="crd-td"><strong>Sheshatshiu-Hamilton Inlet</strong></td><td class="crd-td">North West River; Lake Melville Innu</td><td class="crd-td">Labrador</td><td class="crd-td">53,52 N, 60,13 W</td><td class="crd-td">3000BC - 1500AD</td><td class="crd-td">290</td><td class="crd-td">3000BC: 85; 1000BC: 120; 600AD: 180; 1200AD: 240; 1500AD: 290</td></tr>
<tr><td class="crd-td"><strong>Port au Choix</strong></td><td class="crd-td">Point Riche; Dorset-Maritime Archaic</td><td class="crd-td">Newfoundland</td><td class="crd-td">50,71 N, 57,37 W</td><td class="crd-td">2000BC - 400AD</td><td class="crd-td">310</td><td class="crd-td">2000BC: 220; 0AD: 260; 400AD: 310</td></tr>
<tr><td class="crd-td"><strong>Kejimkujik-Merigomish</strong></td><td class="crd-td">Merigomish Harbour; Mi'kmaq Shellmidden</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">45,63 N, 62,43 W</td><td class="crd-td">1000BC - 1600AD</td><td class="crd-td">580</td><td class="crd-td">1000BC: 180; 400AD: 310; 1200AD: 460; 1500AD: 580; 1600AD: 480</td></tr>
<tr><td class="crd-td"><strong>Metepenagiag</strong></td><td class="crd-td">Oxbow; Red Bank</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">46,94 N, 65,81 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">620</td><td class="crd-td">1000BC: 220; 0AD: 380; 800AD: 460; 1400AD: 580; 1500AD: 620</td></tr>
<tr><td class="crd-td"><strong>L'Anse aux Meadows</strong></td><td class="crd-td">Vinland; Epaves Bay</td><td class="crd-td">Newfoundland</td><td class="crd-td">51,6 N, 55,53 W</td><td class="crd-td">1000AD</td><td class="crd-td">110</td><td class="crd-td">1000AD: 110</td></tr>
<tr><td class="crd-td"><strong>Meductic</strong></td><td class="crd-td">Maliseet Fort; Wolastoq</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">45,99 N, 67,5 W</td><td class="crd-td">1300AD - 1600AD</td><td class="crd-td">480</td><td class="crd-td">1300AD: 320; 1500AD: 480; 1600AD: 450</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Complete gazetteer of eight pre-modern settlements in the Atlantic Maritimes, Newfoundland and Labrador (10000 BC to 1600 AD).</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded} displays the excluded seasonal-camp record from `maritimes_source_ledger.json5`.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Entry</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Unnamed seasonal camps</strong></td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Ephemeral seasonal lithic scatters within maritimes incorporated into macro-regional carrying-capacity aggregates without discrete settlement coordinates.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded seasonal localities in the Maritimes source ledger.</figcaption>
</figure>

## Sub-Regional Settlement Summaries

In Mi'kma'ki (`2` entries), the `9000` to `8000 BC` caribou-intercept camp at Debert (`90`) precedes late Holocene coastal-inland occupation at Kejimkujik-Merigomish (`580`) [@macdonald1968; @prins1996]. Across the Wolastoq-Miramichi basin (`2` entries), Metepenagiag (`620` peak) and the fortified Wolastoqiyik village at Meductic (`480`) anchor New Brunswick river valleys [@allen1981]. In Newfoundland (`3` entries), Maritime Archaic and Dorset sealing hubs at L'Anse Amour (`180`) and Port au Choix (`310`) complement the brief `1000 AD` Norse base at L'Anse aux Meadows (`110`) [@tuck1976; @tuck1976b; @wallace2003; @ingstad1985], while Sheshatshiu-Hamilton Inlet (`290` peak) represents Labrador Innu aggregation [@fitzhugh1972].

# Limitations

Submerged coastal shell middens in the Bay of Fundy and southern Nova Scotia skew known archaeological sites toward interior river terraces and isostatically uplifted northern beaches [@tuck1976; @renouf1999].

# Sources

<div id="refs"></div>
