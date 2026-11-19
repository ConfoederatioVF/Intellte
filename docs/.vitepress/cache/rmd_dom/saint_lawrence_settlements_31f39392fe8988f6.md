---
title: "Settlement Gazetteer of the Pre-Columbian Saint Lawrence Basin and Huronia"
subtitle: "CENTAUR-II: Coordinates, Toponymy and Demographic Trajectories (-10000 to 1600 AD)"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: saint_lawrence_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_saint_lawrence_spatial.png"
hero_caption: "Spatial distribution of 10 verified palisaded towns and riverine fishery hubs across the Saint Lawrence Basin and Huronia from 10000 BC to 1600 AD."
hero_label: "fig:hero-saint-lawrence"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, indigenous and French-contact toponymy, occupation spans and population series for 10 pre-contact towns and seasonal fishery centres across the Saint Lawrence Basin and Huronia (`630,15k km²`) from `10000 BC` to `1600 AD`. Sites span from the `3000 BC` Laurentian Archaic copper workshop at Allumette-Morrison Island (`580` peak) and `1000 BC` Saguenay confluence hub at Tadoussac (`620`) to Late Woodland Iroquoian palisaded towns: Cahiague (`3,5k`), Hochelaga (`2,6k`), Draper (`1,95k`), Mantle (`1,8k`), Ossossane (`1,8k`), Stadacona (`1,8k`) and Ripley-Erie (`1,65k`), alongside the Sault Ste. Marie whitefish fishery at Bawating (`1,1k`). All `10` entries carry `"CENTAUR"` provenance in `saint_lawrence_settlements.json` and reconcile with `0` discrepancies against `saint_lawrence_source_ledger.json5`.

# Background

Excavated longhouse plans and early European contact narratives divide settlements in the basin into two architectural regimes [@warrick2008; @trigger1976]. Across Huronia, the Toronto Duffins Creek corridor, Montreal and Lake Erie, coalescent agricultural communities built multi-row palisaded towns of `30` to `100` bark-covered longhouses housing `1,5k` to `3,5k` inhabitants [@birch2012; @finlayson1985; @pendergast1993]. Along the Algonquian rapids and estuaries of the Ottawa, St. Marys and Saguenay rivers, warm-season trade and whitefish/eel fisheries gathered `500` to `1,1k` people at Allumette Island, Bawating and Tadoussac [@clermont1999; @conway1980; @plumet1998].

# Methodology

Selection in `saint_lawrence_source_ledger.json5` requires excavated longhouse-hearth counts, bounded village earthworks or historic contact population records [@warrick2008; @heidenreich1971]. Transient fishing stations lacking bounded residential footprints such as `Kanesatake-Oka Precontact Locality` are marked `excluded` (`seasonal_encampment_unquantified`) and folded into the rural kriging surface. Table \ref{tab:summary} reports included site counts and leading peaks across the four sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Huronia-Ontario</strong></td><td class="crd-td">6</td><td class="crd-td">11,8k</td><td class="crd-td">Cahiague (3,5k)</td></tr>
<tr><td class="crd-td"><strong>Ottawa-Shield</strong></td><td class="crd-td">1</td><td class="crd-td">580</td><td class="crd-td">Allumette-Morrison Island (580)</td></tr>
<tr><td class="crd-td"><strong>St. Lawrence</strong></td><td class="crd-td">2</td><td class="crd-td">4,4k</td><td class="crd-td">Hochelaga (2,6k)</td></tr>
<tr><td class="crd-td"><strong>Saguenay-Gaspe</strong></td><td class="crd-td">1</td><td class="crd-td">620</td><td class="crd-td">Tadoussac (620)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of included settlements and peak populations across the Saint Lawrence Basin.</figcaption>
</figure>

# Testing and Validation

Validation checks pass with `0` unaccounted candidates (`10` included, `1` excluded) and `0` schema errors. All coordinates fall within `42,27` to `48,14` N and `69,72` to `84,34` W; `.sources` records `"CENTAUR"` on every entry. Figure \ref{fig:settlements} charts the rank-size curve led by Cahiague (`3,5k`) and Hochelaga (`2,6k`).

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-saint-lawrence-settlements/fig4_saint_lawrence_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading peak populations across the 10 catalogued settlements of the Saint Lawrence Basin.</figcaption>
</figure>

# Results

## Catalogued Settlement Trajectories

Table \ref{tab:gazetteer} documents all 10 included settlements ordered by earliest attested year.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Allumette-Morrison Island</strong></td><td class="crd-td">L'Isle-aux-Allumettes; Kichesipirini</td><td class="crd-td">Ottawa-Shield</td><td class="crd-td">45,85 N, 77,04 W</td><td class="crd-td">3000BC - 1600AD</td><td class="crd-td">580</td><td class="crd-td">3000BC: 160; 0AD: 240; 1200AD: 380; 1500AD: 520; 1600AD: 580</td></tr>
<tr><td class="crd-td"><strong>Tadoussac</strong></td><td class="crd-td">Totouskak; Saguenay Confluence</td><td class="crd-td">Saguenay-Gaspe</td><td class="crd-td">48,14 N, 69,72 W</td><td class="crd-td">1000BC - 1600AD</td><td class="crd-td">620</td><td class="crd-td">1000BC: 120; 600AD: 220; 1300AD: 420; 1500AD: 620; 1600AD: 550</td></tr>
<tr><td class="crd-td"><strong>Bawating</strong></td><td class="crd-td">Sault Ste. Marie Fishery; Whitefish Rapids</td><td class="crd-td">Huronia-Ontario</td><td class="crd-td">46,5 N, 84,34 W</td><td class="crd-td">0AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">0AD: 220; 800AD: 450; 1200AD: 680; 1500AD: 950; 1600AD: 1,1k</td></tr>
<tr><td class="crd-td"><strong>Draper</strong></td><td class="crd-td">Draper Site; Duffins Creek Wendat</td><td class="crd-td">Huronia-Ontario</td><td class="crd-td">43,92 N, 79,17 W</td><td class="crd-td">1400AD - 1500AD</td><td class="crd-td">1,9k</td><td class="crd-td">1400AD: 900; 1500AD: 1,9k</td></tr>
<tr><td class="crd-td"><strong>Hochelaga</strong></td><td class="crd-td">Mount Royal Iroquoian; Montreal</td><td class="crd-td">St. Lawrence</td><td class="crd-td">45,5 N, 73,58 W</td><td class="crd-td">1400AD - 1550AD</td><td class="crd-td">2,6k</td><td class="crd-td">1400AD: 1,4k; 1500AD: 2,6k; 1550AD: 2,2k</td></tr>
<tr><td class="crd-td"><strong>Ripley-Erie</strong></td><td class="crd-td">Ripley Site; Lake Erie South Shore</td><td class="crd-td">Huronia-Ontario</td><td class="crd-td">42,27 N, 79,73 W</td><td class="crd-td">1400AD - 1600AD</td><td class="crd-td">1,6k</td><td class="crd-td">1400AD: 850; 1500AD: 1,4k; 1600AD: 1,6k</td></tr>
<tr><td class="crd-td"><strong>Stadacona</strong></td><td class="crd-td">Quebec; St. Charles Estuary</td><td class="crd-td">St. Lawrence</td><td class="crd-td">46,81 N, 71,21 W</td><td class="crd-td">1400AD - 1550AD</td><td class="crd-td">1,8k</td><td class="crd-td">1400AD: 950; 1500AD: 1,8k; 1550AD: 1,4k</td></tr>
<tr><td class="crd-td"><strong>Mantle</strong></td><td class="crd-td">Jean-Baptiste Lainé; Stouffville Wendat</td><td class="crd-td">Huronia-Ontario</td><td class="crd-td">43,96 N, 79,23 W</td><td class="crd-td">1500AD - 1550AD</td><td class="crd-td">1,8k</td><td class="crd-td">1500AD: 1,8k; 1550AD: 1,5k</td></tr>
<tr><td class="crd-td"><strong>Cahiague</strong></td><td class="crd-td">Warminster; Contarea-Wendat</td><td class="crd-td">Huronia-Ontario</td><td class="crd-td">44,63 N, 79,52 W</td><td class="crd-td">1550AD - 1600AD</td><td class="crd-td">3,5k</td><td class="crd-td">1550AD: 2,2k; 1600AD: 3,5k</td></tr>
<tr><td class="crd-td"><strong>Ossossane</strong></td><td class="crd-td">La Conception; Huronia Capital</td><td class="crd-td">Huronia-Ontario</td><td class="crd-td">44,69 N, 80,03 W</td><td class="crd-td">1550AD - 1600AD</td><td class="crd-td">1,8k</td><td class="crd-td">1550AD: 1,4k; 1600AD: 1,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Complete gazetteer of 10 pre-contact settlements and towns in the Saint Lawrence Basin (10000 BC to 1600 AD).</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded} lists the excluded seasonal-camp record from `saint_lawrence_source_ledger.json5`.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Entry</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kanesatake-Oka Precontact Locality</strong></td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Seasonal St. Lawrence fishing station without bounded longhouse population counts.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded seasonal localities in the Saint Lawrence Basin source ledger.</figcaption>
</figure>

## Sub-Regional Settlement Summaries

Huronia and the Ontario Peninsula (`6` entries) chart Iroquoian urbanism from the fifteenth-century Duffins Creek sequence at Draper (`1,95k`) and Mantle (`1,8k`) to Simcoe County's sixteenth-century Wendat capitals at Cahiague (`3,5k`) and Ossossane (`1,8k`), flanked by Ripley-Erie (`1,65k`) and Bawating (`1,1k`) [@finlayson1985; @birch2012; @heidenreich1971; @sullivan1996; @conway1980]. In the St. Lawrence Lowlands (`2` entries), Hochelaga (`2,6k`) and Stadacona (`1,8k`) peak in `1500 AD` before abandoning their riverside clearings by `1600 AD` [@pendergast1993; @chapdelaine2004]. Upstream on the Ottawa River, Allumette-Morrison Island (`580` peak) spans `3000 BC` to `1600 AD` [@clermont1999], while Tadoussac (`620` peak) anchors the Saguenay estuary [@plumet1998].

# Limitations

Because sequential Wendat village relocations (`15` to `25`-year swidden cycles) generated dozens of minor hamlets between `1250` and `1600 AD`, the gazetteer catalogues flagship excavated capitals (`>= 500` inhabitants) while routing dispersed satellite villages into the regional rural grid [@warrick2008].

# Sources

<div id="refs"></div>
