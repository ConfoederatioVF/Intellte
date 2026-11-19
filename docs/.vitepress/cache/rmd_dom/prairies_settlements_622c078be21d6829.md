---
title: "Settlement Gazetteer of the Pre-Columbian Canadian Prairies"
subtitle: "CENTAUR-II: Coordinates, Toponymy and Demographic Trajectories (-10000 to 1600 AD)"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: prairies_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_prairies_spatial.png"
hero_caption: "Spatial distribution of six verified bison-drive, horticultural and ceremonial sites across the four ecological divisions of the Canadian Prairies from 10000 BC to 1600 AD."
hero_label: "fig:hero-prairies"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, indigenous and archaeological names, occupation spans and population series for 6 persistent pre-contact aggregation centres across the Canadian Prairies (`1,07M km²`) from `10000 BC` to `1600 AD`. Because Plains hunter-gatherers moved seasonally across open grassland, bounded site-level estimates represent recurring winter-village, communal buffalo-jump and riverine farming hubs: Head-Smashed-In (`650` peak), Lockport (`520`), Cluny (`480`), Oxbow-Wanuskewin (`450`), Morten-Avonlea (`390`) and Whiteshell Petroforms (`310`). All `6` entries carry `"CENTAUR"` provenance in `prairies_settlements.json` and pass ledger reconciliation alongside `1` excluded seasonal-camp aggregate.

# Background

Archaeological settlement across the Canadian Plains combines mobile bison-hunting camps with recurring multi-band aggregation nodes [@peck2011; @vickers1994]. Along the Porcupine Hills and Bow River, communal jumps and earthwork-ditch villages anchored winter-spring gatherings [@brink2008; @forbis1977]. Along the North and South Saskatchewan valleys, sheltered coulees at Wanuskewin and Avonlea served as multi-millennial wintering grounds [@walker1992; @walde2006]. Farther east, Lockport documents northern maize horticulture on the Red River while Whiteshell Petroforms mark ceremonial Shield-margin boulder mosaics [@boyd2006; @buchner1980].

# Methodology

Inclusion in `prairies_source_ledger.json5` requires persistent, spatially bounded aggregation footprints with published seasonal-band or village-size demographic reconstructions [@brink2008; @forbis1977]. Scattered tipi rings and transient lithic stations fall under `excluded` (`seasonal_encampment_unquantified`) and are allocated via the rural kriging surface. Table \ref{tab:summary} summarises included counts across the four sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Foothills-Bow</strong></td><td class="crd-td">2</td><td class="crd-td">1,1k</td><td class="crd-td">Head-Smashed-In (650)</td></tr>
<tr><td class="crd-td"><strong>Aspen Parkland</strong></td><td class="crd-td">1</td><td class="crd-td">450</td><td class="crd-td">Oxbow-Wanuskewin (450)</td></tr>
<tr><td class="crd-td"><strong>Palliser Steppe</strong></td><td class="crd-td">1</td><td class="crd-td">390</td><td class="crd-td">Morten-Avonlea (390)</td></tr>
<tr><td class="crd-td"><strong>Red-Assiniboine</strong></td><td class="crd-td">2</td><td class="crd-td">830</td><td class="crd-td">Lockport (520)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of included settlements and peak populations across the Canadian Prairies.</figcaption>
</figure>

# Testing and Validation

Ledger reconciliation confirms `6` included records, `1` excluded seasonal-camp aggregate, `0` unaccounted candidates and `0` schema faults. Coordinates fall cleanly between `49,71` and `52,22` N and `95,48` to `113,65` W; all `.sources` arrays cite `"CENTAUR"`. Figure \ref{fig:settlements} plots the rank-size hierarchy.

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-prairies-settlements/fig4_prairies_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and peak populations across the six catalogued settlements of the Canadian Prairies.</figcaption>
</figure>

# Results

## Catalogued Settlement Trajectories

Table \ref{tab:gazetteer} documents all 6 included settlements ordered by earliest attested occupation year.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Head-Smashed-In</strong></td><td class="crd-td">Head-Shed-In; Estipah-Sikikini-kots</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,71 N, 113,65 W</td><td class="crd-td">3000BC - 1500AD</td><td class="crd-td">650</td><td class="crd-td">3000BC: 180; 1000BC: 290; 400AD: 420; 1000AD: 540; 1400AD: 620; 1500AD: 650</td></tr>
<tr><td class="crd-td"><strong>Oxbow-Wanuskewin</strong></td><td class="crd-td">Wanuskewin; Opimihaw Creek</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">52,22 N, 106,59 W</td><td class="crd-td">3000BC - 1500AD</td><td class="crd-td">450</td><td class="crd-td">3000BC: 120; 1000BC: 190; 400AD: 280; 1200AD: 390; 1500AD: 450</td></tr>
<tr><td class="crd-td"><strong>Whiteshell Petroforms</strong></td><td class="crd-td">Bannock Point; Tie Creek</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">50,15 N, 95,48 W</td><td class="crd-td">0AD - 1500AD</td><td class="crd-td">310</td><td class="crd-td">0AD: 140; 600AD: 210; 1200AD: 280; 1500AD: 310</td></tr>
<tr><td class="crd-td"><strong>Morten-Avonlea</strong></td><td class="crd-td">Avonlea; Long Creek</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">50,01 N, 105,07 W</td><td class="crd-td">400AD - 1500AD</td><td class="crd-td">390</td><td class="crd-td">400AD: 210; 800AD: 320; 1200AD: 360; 1500AD: 390</td></tr>
<tr><td class="crd-td"><strong>Lockport</strong></td><td class="crd-td">Kenosewun; Red River Maize Village</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">50,09 N, 96,94 W</td><td class="crd-td">1100AD - 1500AD</td><td class="crd-td">520</td><td class="crd-td">1100AD: 260; 1300AD: 420; 1400AD: 520; 1500AD: 480</td></tr>
<tr><td class="crd-td"><strong>Cluny</strong></td><td class="crd-td">Cluny Fortified Village; Blackfoot Crossing</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">50,77 N, 112,9 W</td><td class="crd-td">1550AD - 1600AD</td><td class="crd-td">480</td><td class="crd-td">1550AD: 340; 1600AD: 480</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Complete gazetteer of six pre-contact settlements and aggregation hubs in the Canadian Prairies (10000 BC to 1600 AD).</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded} displays the excluded seasonal-camp record from `prairies_source_ledger.json5`.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Entry</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Unnamed seasonal camps</strong></td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Ephemeral seasonal lithic scatters within prairies incorporated into macro-regional carrying-capacity aggregates without discrete settlement coordinates.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded seasonal localities in the Canadian Prairies source ledger.</figcaption>
</figure>

## Sub-Regional Settlement Summaries

In the foothills, Head-Smashed-In (`650` peak) operated from `3000 BC` to `1500 AD` as a premier communal bison jump, joined after `1550 AD` by the palisaded earthwork village at Cluny (`480`) [@brink2008; @forbis1977]. Along the North Saskatchewan, Oxbow-Wanuskewin (`450` peak) spans `3000 BC` to `1500 AD` [@walker1992], while Morten-Avonlea (`390`) anchors the southern mixedgrass steppe after `400 AD` [@walde2006]. In the eastern Red-Assiniboine lowlands, Lockport (`520` peak, `1100` to `1500 AD`) marks northern maize-storage pits alongside the Whiteshell Petroforms ceremonial centre (`310`) [@boyd2006; @buchner1980].

# Limitations

Small seasonal hunting camps account for most prairie demographic activity yet leave ephemeral archaeological traces, so site-level records capture only major aggregation centres while dispersed band populations reside in the rural kriging surface [@peck2011].

# Sources

<div id="refs"></div>
