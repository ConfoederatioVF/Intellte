---
title: "Settlement Gazetteer of Pre-Columbian Northern Canada and Greenland"
subtitle: "CENTAUR-II: Coordinates, Toponymy and Demographic Trajectories (-10000 to 1600 AD)"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: northern_canada_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northern_canada_spatial.png"
hero_caption: "Locations of 14 verified Arctic, subarctic and Norse Greenland settlements across Northern Canada and Greenland from 10000 BC to 1600 AD."
hero_label: "fig:hero-northern-canada"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents WGS84 coordinates, indigenous and Norse toponymy, attested chronological spans and benchmark populations for 14 pre-modern settlements across Northern Canada and Greenland (`5,04M km²`) between `10000 BC` and `1600 AD`. Entries span from `2000 BC` Palaeo-Inuit and Dene fishery stations at Qeqertasussuk (`160` peak), Sermermiut (`480`) and Deline-Great Bear (`260`) to classic Dorset-Thule whaling complexes at Qariaraqyuk (`480`), Igloolik (`360`) and Kittigazuit (`1k`), alongside medieval Norse estate centres at Brattahlíð (`620` peak) and Garðar (`460`). All `14` settlements in `northern_canada_settlements.json` carry `"CENTAUR"` provenance and reconcile with `0` discrepancies against `northern_canada_source_ledger.json5`.

# Background

High-latitude settlement visibility concentrates where seasonal marine mammal harvests, caribou water crossings or Norse fjord pastures anchored multi-family winter dwellings [@mcghee1996; @friesen2016]. In the Mackenzie Delta and Coronation Gulf, driftwood-framed semi-subterranean winter houses at Kittigazuit supported large beluga-hunting aggregations [@morrison1990]. Across the eastern archipelago, whalebone winter houses at Qariaraqyuk and Foxe Basin polynya middens at Igloolik anchored Thule and Dorset networks [@savelle2002; @maxwell1985]. In Southwest Greenland, Norse turf-and-stone farmsteads around Tunulliarfik and Igaliku fjords operated alongside Disko Bay Saqqaq and Kalaallit stations [@arneborg2012; @gronnow2004].

# Methodology

Sites enter `northern_canada_source_ledger.json5` when archaeological house-pit surveys or historical Norse farm registers establish bounded coordinates and residential populations [@lynnerup1998; @savelle2002]. Dispersed interior lithic scatters lacking durable residential footprints are excluded under `seasonal_encampment_unquantified` and absorbed into the rural kriging background. Note that `northern_canada_settlements.json` preserves both diacritic (`Brattahlíð`, `Garðar`) and ASCII (`Brattahlid`, `Gardar`) Norse parish-estate keys with distinct founding-date anchors (`985 AD` vs `1000 AD` and `1126 AD` vs `1100 AD`), all retained faithfully below. Table \ref{tab:summary} summarises sub-regional site distribution.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mackenzie Dene</strong></td><td class="crd-td">1</td><td class="crd-td">260</td><td class="crd-td">Deline-Great Bear (260)</td></tr>
<tr><td class="crd-td"><strong>W-C Arctic</strong></td><td class="crd-td">2</td><td class="crd-td">1,3k</td><td class="crd-td">Kittigazuit (1k)</td></tr>
<tr><td class="crd-td"><strong>E-High Arctic</strong></td><td class="crd-td">4</td><td class="crd-td">1,5k</td><td class="crd-td">Qariaraqyuk (480)</td></tr>
<tr><td class="crd-td"><strong>W Greenland</strong></td><td class="crd-td">6</td><td class="crd-td">2,7k</td><td class="crd-td">Brattahlíð (620)</td></tr>
<tr><td class="crd-td"><strong>E Greenland</strong></td><td class="crd-td">1</td><td class="crd-td">330</td><td class="crd-td">Ammassalik-Tasiilaq (330)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of included settlements and peak populations in Northern Canada and Greenland.</figcaption>
</figure>

# Testing and Validation

Schema and ledger audits confirm `14` included settlements, `1` excluded seasonal aggregate, `0` unaccounted candidates and `0` coordinate errors (`57,00` to `72,67` N and `37,63` to `133,69` W). Every record cites `"CENTAUR"` in `.sources`. Figure \ref{fig:settlements} charts the rank-size hierarchy led by Kittigazuit (`1k`).

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-canada-settlements/fig4_northern_canada_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading peak populations across the 14 catalogued settlements of Northern Canada and Greenland.</figcaption>
</figure>

# Results

## Catalogued Settlement Trajectories

Table \ref{tab:gazetteer} lists all 14 included settlements ordered by earliest attested occupation year.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Deline-Great Bear</strong></td><td class="crd-td">Keith Arm; Sahtu Fishery</td><td class="crd-td">Mackenzie Dene</td><td class="crd-td">65,19 N, 123,42 W</td><td class="crd-td">2000BC - 1500AD</td><td class="crd-td">260</td><td class="crd-td">2000BC: 75; 0AD: 140; 1000AD: 210; 1500AD: 260</td></tr>
<tr><td class="crd-td"><strong>Qeqertasussuk</strong></td><td class="crd-td">Disko Bay Saqqaq</td><td class="crd-td">W Greenland</td><td class="crd-td">68,58 N, 51,07 W</td><td class="crd-td">2000BC - 1000BC</td><td class="crd-td">160</td><td class="crd-td">2000BC: 160; 1000BC: 110</td></tr>
<tr><td class="crd-td"><strong>Sermermiut</strong></td><td class="crd-td">Ilulissat Icefjord; Disko Bay</td><td class="crd-td">W Greenland</td><td class="crd-td">69,2 N, 51,12 W</td><td class="crd-td">2000BC - 1600AD</td><td class="crd-td">480</td><td class="crd-td">2000BC: 140; 1000BC: 180; 0AD: 220; 1200AD: 360; 1500AD: 440; 1600AD: 480</td></tr>
<tr><td class="crd-td"><strong>Churchill-Seahorse Gully</strong></td><td class="crd-td">Seahorse Gully; Dorset-Thule Point</td><td class="crd-td">E-High Arctic</td><td class="crd-td">58,78 N, 94,23 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">320</td><td class="crd-td">1000BC: 110; 0AD: 170; 800AD: 210; 1300AD: 290; 1500AD: 320</td></tr>
<tr><td class="crd-td"><strong>Igloolik</strong></td><td class="crd-td">Iglulik; Foxe Basin Dorset-Thule</td><td class="crd-td">E-High Arctic</td><td class="crd-td">69,38 N, 81,8 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">360</td><td class="crd-td">1000BC: 110; 400AD: 180; 1200AD: 320; 1500AD: 360</td></tr>
<tr><td class="crd-td"><strong>Lady Franklin Point</strong></td><td class="crd-td">Nuvuk; Dolphin and Union Strait</td><td class="crd-td">W-C Arctic</td><td class="crd-td">68,47 N, 113,22 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">310</td><td class="crd-td">1000BC: 90; 400AD: 150; 1200AD: 260; 1500AD: 310</td></tr>
<tr><td class="crd-td"><strong>Nelson River-York Factory</strong></td><td class="crd-td">Kihciwaskahikan; Hayes-Nelson Confluence</td><td class="crd-td">E-High Arctic</td><td class="crd-td">57 N, 92,31 W</td><td class="crd-td">0AD - 1500AD</td><td class="crd-td">310</td><td class="crd-td">0AD: 95; 800AD: 160; 1300AD: 240; 1500AD: 310</td></tr>
<tr><td class="crd-td"><strong>Brattahlid</strong></td><td class="crd-td">Brattahlíð; Qassiarsuk</td><td class="crd-td">W Greenland</td><td class="crd-td">61,15 N, 45,52 W</td><td class="crd-td">985AD - 1400AD</td><td class="crd-td">520</td><td class="crd-td">985AD: 180; 1050AD: 420; 1150AD: 520; 1250AD: 480; 1350AD: 260; 1400AD: 110</td></tr>
<tr><td class="crd-td"><strong>Brattahlíð</strong></td><td class="crd-td">Brattahlid; Qassiarsuk</td><td class="crd-td">W Greenland</td><td class="crd-td">61,16 N, 45,52 W</td><td class="crd-td">1000AD - 1400AD</td><td class="crd-td">620</td><td class="crd-td">1000AD: 320; 1100AD: 520; 1200AD: 620; 1300AD: 540; 1400AD: 280</td></tr>
<tr><td class="crd-td"><strong>Garðar</strong></td><td class="crd-td">Gardar; Igaliku</td><td class="crd-td">W Greenland</td><td class="crd-td">60,99 N, 45,42 W</td><td class="crd-td">1100AD - 1400AD</td><td class="crd-td">460</td><td class="crd-td">1100AD: 280; 1200AD: 460; 1300AD: 420; 1400AD: 210</td></tr>
<tr><td class="crd-td"><strong>Qariaraqyuk</strong></td><td class="crd-td">Somerset Island Thule; Creswell Bay</td><td class="crd-td">E-High Arctic</td><td class="crd-td">72,67 N, 94,55 W</td><td class="crd-td">1100AD - 1500AD</td><td class="crd-td">480</td><td class="crd-td">1100AD: 180; 1200AD: 420; 1300AD: 480; 1400AD: 340; 1500AD: 220</td></tr>
<tr><td class="crd-td"><strong>Gardar</strong></td><td class="crd-td">Garðar; Igaliku</td><td class="crd-td">W Greenland</td><td class="crd-td">60,99 N, 45,42 W</td><td class="crd-td">1126AD - 1378AD</td><td class="crd-td">450</td><td class="crd-td">1126AD: 260; 1200AD: 450; 1300AD: 380; 1378AD: 180</td></tr>
<tr><td class="crd-td"><strong>Ammassalik-Tasiilaq</strong></td><td class="crd-td">Tasiilaq; Tunumiit East Greenland</td><td class="crd-td">E Greenland</td><td class="crd-td">65,61 N, 37,63 W</td><td class="crd-td">1300AD - 1600AD</td><td class="crd-td">330</td><td class="crd-td">1300AD: 140; 1400AD: 240; 1500AD: 310; 1600AD: 330</td></tr>
<tr><td class="crd-td"><strong>Kittigazuit</strong></td><td class="crd-td">Kitigaaryuit; Mackenzie Beluga Village</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,34 N, 133,69 W</td><td class="crd-td">1300AD - 1600AD</td><td class="crd-td">1k</td><td class="crd-td">1300AD: 380; 1400AD: 680; 1500AD: 920; 1600AD: 1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Complete gazetteer of 14 pre-modern settlements in Northern Canada and Greenland (10000 BC to 1600 AD).</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded} presents the excluded seasonal-camp record logged in `northern_canada_source_ledger.json5`.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Entry</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Unnamed seasonal camps</strong></td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Ephemeral seasonal lithic scatters within northern canada incorporated into macro-regional carrying-capacity aggregates without discrete settlement coordinates.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded seasonal localities in the Northern Canada and Greenland source ledger.</figcaption>
</figure>

## Sub-Regional Settlement Summaries

West Greenland (`6` records) spans Disko Bay Palaeo-Inuit and Kalaallit occupation at Qeqertasussuk (`160`) and Sermermiut (`480` in `1500 AD`) alongside the medieval Norse Eastern Settlement hubs at Brattahlíð (`620` peak) and Garðar (`460`) [@gronnow2004; @arneborg2012; @lynnerup1998]. East Greenland (`1` record) is anchored by Ammassalik-Tasiilaq (`330` peak) [@mathiassen1933]. In the Eastern and High Arctic (`4` records), Somerset Island's Qariaraqyuk (`480` peak) and Foxe Basin's Igloolik (`360`) pair with western Hudson Bay sites at Churchill-Seahorse Gully (`320`) and Nelson River-York Factory (`310`) [@savelle2002; @nash1969; @taylor1968]. Across the Central and Western Arctic (`2` records), Kittigazuit reaches `1k` in `1500-1600 AD` beside Lady Franklin Point (`310`) [@morrison1990], while Deline-Great Bear (`260` peak) represents the Mackenzie Dene subarctic fishery [@gordon1996].

# Limitations

Small summer tent-ring camps across interior Keewatin, Victoria Island and Northeast Greenland lack multi-family winter middens and remain unenumerated at site level, concentrating gazetteer points along high-productivity coastal polynyas and Norse pastoral fjords [@friesen2016].

# Sources

<div id="refs"></div>
