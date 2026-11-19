---
title: "Settlement Gazetteer of Pre-Columbian Northern Cascadia and Alaska"
subtitle: "CENTAUR-II: Coordinates, Toponymy and Demographic Trajectories (-10000 to 1600 AD)"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: northern_cascadia_and_alaska_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northern_cascadia_and_alaska_spatial.png"
hero_caption: "Spatial distribution of 15 verified pre-contact settlements across the five ecological divisions of Northern Cascadia and Alaska from 10000 BC to 1600 AD."
hero_label: "fig:hero-northern-cascadia-and-alaska"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles verified WGS84 coordinates, indigenous and archaeological names, occupation spans and benchmark population series for 15 pre-contact settlements across Northern Cascadia and Alaska (`2,80M km²`) from `10000 BC` to `1600 AD`. Excavated winter villages, shell-midden towns and stratified pit-house aggregates range from the `10000 BC` Beringian hearth complex at Swan Point (`45` to `150` inhabitants) and `7000 BC` coastal midden at Namu (`60` to `540`) to late Holocene plank-house centres at Marpole (`1,45k`), Keatley Creek (`1,4k`), Yuquot (`1,2k`), Ozette (`1,15k`), Tse-whit-zen (`1,12k`), Laxgalts'ap (`920`), Karluk (`820`) and Ipiutak (`800`). Every included site carries `"CENTAUR"` provenance in `northern_cascadia_and_alaska_settlements.json` and reconciles cleanly against `northern_cascadia_and_alaska_source_ledger.json5` alongside 2 explicitly excluded seasonal encampments.

# Background

Settlement archaeology across Alaska, Yukon, British Columbia and northern Washington distinguishes three architectural traditions [@ames1999; @matson1995]. Along the Salish Sea, Vancouver Island and Skeena-Nass fjords, large red-cedar plank-house towns sat atop deep coastal shell middens and commanded fortified refuge hills such as Gitwangak [@macdonald1989; @samuels1991]. Across the Fraser-Columbia Plateau and Kodiak-Aleutian littoral, semi-subterranean earth-roofed pit houses clustered in winter villages such as Keatley Creek, Karluk and Chaluka [@hayden1997; @fitzhugh2003; @laughlin1980]. On the Chukchi and Beaufort coasts, sod-and-whalebone winter mounds at Ipiutak, Cape Krusenstern and Wales housed Arctic marine-mammal hunters [@larsen1948; @giddings1986].

# Methodology

Candidate entries in `northern_cascadia_and_alaska_source_ledger.json5` qualify for inclusion when excavation or ethnohistoric survey supplies bounded geographic coordinates, dated cultural horizons and house-floor or site-area demographic estimates [@maples2006; @martindale2009]. Ephemeral lithic scatters or multi-component hunting camps lacking bounded residential counts receive `excluded` status under `seasonal_encampment_unquantified`, routing their demographic weight into the rural kriging background instead. Table \ref{tab:summary} summarises included and excluded ledger counts across the five sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aleutians and Kodiak</strong></td><td class="crd-td">2</td><td class="crd-td">1,3k</td><td class="crd-td">Karluk (820)</td></tr>
<tr><td class="crd-td"><strong>Arctic Alaska</strong></td><td class="crd-td">3</td><td class="crd-td">1,8k</td><td class="crd-td">Ipiutak (800)</td></tr>
<tr><td class="crd-td"><strong>Interior Yukon</strong></td><td class="crd-td">2</td><td class="crd-td">370</td><td class="crd-td">Klondike-Tr'ochëk (220)</td></tr>
<tr><td class="crd-td"><strong>Outer Coast</strong></td><td class="crd-td">2</td><td class="crd-td">1,6k</td><td class="crd-td">Laxgalts'ap (920)</td></tr>
<tr><td class="crd-td"><strong>Salish and Fraser</strong></td><td class="crd-td">6</td><td class="crd-td">6,9k</td><td class="crd-td">Marpole (1,4k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of included settlements and peak populations in Northern Cascadia and Alaska.</figcaption>
</figure>

# Testing and Validation

Exhaustiveness verification between `northern_cascadia_and_alaska_settlements.json` and `northern_cascadia_and_alaska_source_ledger.json5` passes with `0` unaccounted candidates (`15` included, `2` excluded) and `0` schema errors. All coordinates fall within valid WGS84 bounding boxes (`48,12` to `68,35` N and `121,87` to `168,86` W), all `.sources` arrays cite `"CENTAUR"` exclusively and Figure \ref{fig:settlements} confirms log-linear rank-size continuity across the `15` catalogued sites.

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-cascadia-and-alaska-settlements/fig4_northern_cascadia_and_alaska_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading peak populations across the 15 catalogued settlements of Northern Cascadia and Alaska.</figcaption>
</figure>

# Results

## Catalogued Settlement Trajectories

Table \ref{tab:gazetteer} documents all 15 included settlements ordered by earliest attested occupation year, linking coordinates and alternative indigenous or modern names to selected benchmark populations.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Swan Point</strong></td><td class="crd-td">Shaw Creek; Tanana Valley</td><td class="crd-td">Interior Yukon</td><td class="crd-td">64,32 N, 146,17 W</td><td class="crd-td">10000BC - 1500AD</td><td class="crd-td">150</td><td class="crd-td">10000BC: 45; 8000BC: 65; 4000BC: 95; 1000BC: 120; 1000AD: 140; 1500AD: 150</td></tr>
<tr><td class="crd-td"><strong>Namu</strong></td><td class="crd-td">Bella Bella Coast; Fitz Hugh Sound</td><td class="crd-td">Salish and Fraser</td><td class="crd-td">51,86 N, 127,86 W</td><td class="crd-td">7000BC - 1500AD</td><td class="crd-td">540</td><td class="crd-td">7000BC: 60; 4000BC: 140; 1000BC: 260; 400AD: 380; 1200AD: 480; 1500AD: 540</td></tr>
<tr><td class="crd-td"><strong>Cape Krusenstern</strong></td><td class="crd-td">Sisualik; Ipiutak-Denbigh Complex</td><td class="crd-td">Arctic Alaska</td><td class="crd-td">67,13 N, 163,75 W</td><td class="crd-td">2000BC - 1500AD</td><td class="crd-td">480</td><td class="crd-td">2000BC: 120; 1000BC: 180; 0AD: 260; 600AD: 350; 1200AD: 420; 1500AD: 480</td></tr>
<tr><td class="crd-td"><strong>Chaluka</strong></td><td class="crd-td">Nikolski; Umnak Island Village</td><td class="crd-td">Aleutians and Kodiak</td><td class="crd-td">52,94 N, 168,86 W</td><td class="crd-td">2000BC - 1600AD</td><td class="crd-td">520</td><td class="crd-td">2000BC: 160; 1000BC: 240; 0AD: 320; 800AD: 420; 1400AD: 500; 1600AD: 520</td></tr>
<tr><td class="crd-td"><strong>Yuquot</strong></td><td class="crd-td">Friendly Cove; Nootka Sound</td><td class="crd-td">Salish and Fraser</td><td class="crd-td">49,6 N, 126,62 W</td><td class="crd-td">2000BC - 1600AD</td><td class="crd-td">1,2k</td><td class="crd-td">2000BC: 180; 0AD: 420; 1000AD: 780; 1500AD: 1,1k; 1600AD: 1,2k</td></tr>
<tr><td class="crd-td"><strong>Karluk</strong></td><td class="crd-td">Karluk One; Kodiak Koniag Village</td><td class="crd-td">Aleutians and Kodiak</td><td class="crd-td">57,57 N, 154,46 W</td><td class="crd-td">1000BC - 1600AD</td><td class="crd-td">820</td><td class="crd-td">1000BC: 180; 0AD: 300; 1000AD: 550; 1400AD: 780; 1600AD: 820</td></tr>
<tr><td class="crd-td"><strong>Keatley Creek</strong></td><td class="crd-td">Xaxl'ep; Fraser Canyon</td><td class="crd-td">Salish and Fraser</td><td class="crd-td">50,79 N, 121,87 W</td><td class="crd-td">1000BC - 1200AD</td><td class="crd-td">1,4k</td><td class="crd-td">1000BC: 280; 0AD: 650; 600AD: 1,1k; 1000AD: 1,4k; 1200AD: 1,2k</td></tr>
<tr><td class="crd-td"><strong>Laxgalts'ap</strong></td><td class="crd-td">Metlakatla; Greenville Nass</td><td class="crd-td">Outer Coast</td><td class="crd-td">55 N, 129,57 W</td><td class="crd-td">1000BC - 1600AD</td><td class="crd-td">920</td><td class="crd-td">1000BC: 240; 400AD: 450; 1200AD: 720; 1500AD: 880; 1600AD: 920</td></tr>
<tr><td class="crd-td"><strong>Marpole</strong></td><td class="crd-td">Cesna'em; Musqueam Fraser Delta</td><td class="crd-td">Salish and Fraser</td><td class="crd-td">49,21 N, 123,15 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">1,4k</td><td class="crd-td">1000BC: 350; 0AD: 850; 400AD: 1,1k; 1200AD: 1,2k; 1500AD: 1,4k</td></tr>
<tr><td class="crd-td"><strong>Tse-whit-zen</strong></td><td class="crd-td">Port Angeles Klallam</td><td class="crd-td">Salish and Fraser</td><td class="crd-td">48,12 N, 123,45 W</td><td class="crd-td">1000BC - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">1000BC: 180; 0AD: 380; 800AD: 620; 1300AD: 880; 1500AD: 1k; 1600AD: 1,1k</td></tr>
<tr><td class="crd-td"><strong>Klondike-Tr'ochëk</strong></td><td class="crd-td">Trochek; Dawson Fishery</td><td class="crd-td">Interior Yukon</td><td class="crd-td">64,05 N, 139,44 W</td><td class="crd-td">0AD - 1500AD</td><td class="crd-td">220</td><td class="crd-td">0AD: 90; 800AD: 140; 1200AD: 180; 1500AD: 220</td></tr>
<tr><td class="crd-td"><strong>Ozette</strong></td><td class="crd-td">Cape Alava Makah</td><td class="crd-td">Salish and Fraser</td><td class="crd-td">48,16 N, 124,72 W</td><td class="crd-td">0AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">0AD: 320; 800AD: 580; 1300AD: 850; 1500AD: 1k; 1600AD: 1,1k</td></tr>
<tr><td class="crd-td"><strong>Ipiutak</strong></td><td class="crd-td">Point Hope; Tikigaq</td><td class="crd-td">Arctic Alaska</td><td class="crd-td">68,35 N, 166,77 W</td><td class="crd-td">400AD - 1500AD</td><td class="crd-td">800</td><td class="crd-td">400AD: 450; 600AD: 800; 800AD: 750; 1000AD: 500; 1300AD: 450; 1500AD: 550</td></tr>
<tr><td class="crd-td"><strong>Wales</strong></td><td class="crd-td">Kingigin; Birnirk-Thule Mound</td><td class="crd-td">Arctic Alaska</td><td class="crd-td">65,61 N, 168,09 W</td><td class="crd-td">600AD - 1600AD</td><td class="crd-td">520</td><td class="crd-td">600AD: 240; 1000AD: 380; 1300AD: 460; 1500AD: 520; 1600AD: 500</td></tr>
<tr><td class="crd-td"><strong>Gitwangak</strong></td><td class="crd-td">Kitwanga; Battle Hill</td><td class="crd-td">Outer Coast</td><td class="crd-td">55,11 N, 128,06 W</td><td class="crd-td">1000AD - 1600AD</td><td class="crd-td">720</td><td class="crd-td">1000AD: 320; 1300AD: 540; 1500AD: 680; 1600AD: 720</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Complete gazetteer of 15 pre-contact settlements in Northern Cascadia and Alaska (10000 BC to 1600 AD).</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded} lists the 2 excluded localities recorded in `northern_cascadia_and_alaska_source_ledger.json5` together with their exclusion reasons and archival justifications.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bluefish Caves</strong></td><td class="crd-td">Canada</td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Late Pleistocene Beringian cave faunal assemblage without quantifiable settlement population.</td></tr>
<tr><td class="crd-td"><strong>Healy Lake</strong></td><td class="crd-td">Alaska</td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Chindadn multi-component interior camp lacking bounded village demographic counts.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded seasonal localities in the Northern Cascadia and Alaska source ledger.</figcaption>
</figure>

## Sub-Regional Settlement Summaries

Across the Salish Sea and Fraser-Columbia Plateau (`6` settlements), coastal shell-midden occupation begins at Namu (`60` in `7000 BC`, rising to `540` in `1500 AD`) [@carlson1996] and culminates in large plank-house and pit-house towns at Marpole (`1,45k`), Keatley Creek (`1,4k` in `1000 AD`), Yuquot (`1,2k`), Ozette (`1,15k`) and Tse-whit-zen (`1,12k`) [@hayden1997; @samuels1991; @dewar2001]. On the Skeena and Nass rivers (`2` settlements), Laxgalts'ap (`920` peak) and the fortified ridge village of Gitwangak (`720`) anchor Tsimshian coastal-interior exchange [@macdonald1989; @martindale2009]. Farther north, Chaluka (`520`) and Karluk (`820`) document multi-millennial Aleutian and Kodiak maritime villages [@laughlin1980; @fitzhugh2003], while Ipiutak (`800` in `600 AD`), Wales (`520`) and Cape Krusenstern (`480`) represent Bering-Chukchi Arctic whaling centres [@larsen1948; @giddings1986]. Interior Yukon-Tanana (`2` settlements) holds smaller riverine hubs at Swan Point (`150` peak) and Klondike-Tr'ochëk (`220`) [@holmes2001], with Bluefish Caves and Healy Lake excluded as unquantified camps [@morlan2003; @cook1996].

# Limitations

Gazetteer coverage favours deep shell middens, preserved plank-house mudslides such as Ozette and dense pit-house villages over dispersed interior hunting camps. Early Holocene shoreline submergence along Hecate Strait and southern Alaska removes submerged sites from point inventories, leaving those populations represented in the kriging background.

# Sources

<div id="refs"></div>
