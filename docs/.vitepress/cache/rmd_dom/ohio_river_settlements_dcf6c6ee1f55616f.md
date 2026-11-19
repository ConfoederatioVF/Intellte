---
title: "Settlement Gazetteer of the Ohio River Hydrological Unit (HU 05)"
subtitle: "CENTAUR-II: Archaic Shell Middens, Adena-Hopewell Earthworks and Fort Ancient-Mississippian Towns, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: ohio_river_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_ohio_river_spatial.png"
hero_caption: "Locations of 120 catalogued settlements across the four areal divisions of the Ohio River Hydrological Unit (424.096 km²) from 10000BC to 1600AD."
hero_label: "fig:hero-ohio-river-gaz"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles coordinate-anchored settlement series for the Ohio River Hydrological Unit (HU 05, `424.096 km²`) from `10000BC` to `1600AD`. Of `121` archaeological candidates evaluated in `ohio_river_source_ledger.json5`, `120` bounded settlements and monumental precincts enter `ohio_river_settlements.json`, while `1` entry (a duplicate coordinate alias of `Angel Mounds`) is excluded during close-pair deduplication. Enumerated centres span from early Palaeoindian and Archaic occupations at `Paleo Crossing` (`70` at `9000BC`), `Meadowcroft Rockshelter` (`140` at `1000AD`) and Green River `Indian Knoll` (`340` at `2000BC`), through Early and Middle Woodland ceremonial complexes at `Grave Creek Mound` (`450` at `0AD`), `Newark Earthworks` (`1.850` at `200AD`), `Hopewell Mound Group` (`1.650` at `200AD`), `Seip Earthworks` (`1.100` at `250AD`), `Fort Ancient` (`980` at `200AD`), `Mound City` (`980` at `200AD`) and `Mann Site` (`950` at `200AD`), to Mississippian, Fort Ancient and Monongahela capitals led by `Angel Mounds` (`3.200` at `1300AD`), `Mound Bottom` (`1.600` at `1200AD`), `Slack Farm` (`1.100` at `1500AD`), `Castalian Springs` (`980` at `1300AD`), `Madisonville` (`980` at `1500AD`), `Hovey Lake` (`890` at `1500AD`) and `Buffalo` (`880` at `1550AD`).

# Background

Excavations across the Ohio basin document four sequential settlement forms [@adovasio1999; @webb1974]. Terminal Pleistocene and Early Archaic rockshelters and outwash terraces (`Paleo Crossing`, `Meadowcroft Rockshelter`, `Hansford`, `Cloudsplitter Rockshelter`) preserve stratified camp hearths dating back to `10000BC` [@adovasio1999]. Between `4000BC` and `1000BC`, deep shell middens formed along the Green River shoals (`Carlston Annis`, `Chiggerville`, `Indian Knoll`, `Ward`) [@webb1974].

From `500BC` to `400AD`, Adena burial tumuli (`Grave Creek Mound`, `Adena Mound`, `Miamisburg Mound`) and geometric Hopewell precincts (`Newark Earthworks`, `Hopewell Mound Group`, `Seip Earthworks`, `Fort Ancient`, `Mound City`, `Marietta Earthworks`, `Mann Site`) concentrated monumental architecture across southern Ohio, West Virginia and southwestern Indiana [@clay1998; @dancey1997; @charles2006]. After `1000AD`, Mississippian palisaded towns (`Angel Mounds`, `Mound Bottom`, `Castalian Springs`, `Noel Farm`, `Averbuch`), Fort Ancient plaza villages (`Madisonville`, `SunWatch`, `Hardin Village`, `Buffalo`, `Fox Farm`), Oliver enclosures (`Strawtown Enclosure`), Monongahela circular villages (`Johnston Site`, `Campbell Farm`, `Peck No. 2`) and Caborn-Welborn confluence centres (`Slack Farm`, `Hovey Lake`, `Murphy`, `Welborn`, `Bone Bank`) carried the basin to its `1295AD` radiocarbon peak (`N = 1.828`) [@kelly2025; @hilgeman2000; @cook2017; @comstock2018; @cobb2002].

# Methodology

## Inclusion Criteria and Schema Audit

All `121` candidate records in `ohio_river_source_ledger.json5` were checked for WGS84 coordinates, multi-phase residential or precinct boundaries and distinct spatial identities. The `120` retained records in `ohio_river_settlements.json` carry `.sources = ["CENTAUR"]` exclusively, with bibliographic provenance recorded in `ohio_river_settlements.bib` and the ledger. Duplicate aliases falling within `2 km` of an established primary centre (`Angel Mounds`) are excluded in the ledger to prevent urban double-counting.

## Settlement Size Calibration

Woodland earthwork figures (`Newark Earthworks`, `Hopewell Mound Group`, `Seip Earthworks`, `Grave Creek Mound`, `Mann Site`) represent resident caretaker and adjacent hamlet clusters rather than seasonal festival gatherings [@dancey1997; @charles2006]. Mississippian, Fort Ancient and Monongahela town totals (`Angel Mounds`, `Mound Bottom`, `Madisonville`, `SunWatch`, `Slack Farm`, `Buffalo`, `Johnston Site`) derive from excavated house-basin counts, palisade circumference hectares and domestic midden areas [@hilgeman2000; @cook2017; @comstock2018; @cobb2002]. Adjacent macro-frontier parallels from Michigan (`Moccasin Bluff`) [@bettarel1973], Lake Erie (`Ripley`) [@sullivan1996] and the eastern Appalachian Piedmont (`Berry` and `Hiwassee Island`) [@beck2016; @lewis1946] cross-check household-to-hectare density scalars across the eastern Woodland-Mississippian margin.

# Testing and Validation

Exhaustiveness checks on `ohio_river_settlements.json` and `ohio_river_source_ledger.json5` completed with `0` errors at `GMT+0`:

1. **Included Settlements**: `120` sites (`36` in Upper Ohio-Allegheny, `35` in Scioto-Miami, `44` in Cumberland-Green and `5` in Wabash-Lower Ohio), spanning `35,77 N` to `41,53 N` and `79,03 W` to `88,35 W`.
2. **Excluded Candidates**: `1` duplicate coordinate alias of `Angel Mounds` merged during deduplication.
3. **Sub-Regional Mass Conservation**: Catalogued settlement sums stay strictly below sub-regional totals across all `23` horizons, reaching `11.665` (`7,20%` of `162,0k`) at `200AD`, `13.210` (`5,00%` of `264,0k`) at `1300AD` and `6.180` (`4,09%` of `151,0k`) at `1600AD`.

<figure class="crd-figure-block" id="fig:oh-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-ohio-river-settlements/fig4_ohio_river_settlements.png" alt="fig:oh-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size profile and leading peak populations across the 120 catalogued settlements of Ohio River (HU 05).</figcaption>
</figure>

# Results

## Included Woodland, Mississippian and Fort Ancient Settlements

Table \ref{tab:oh-included} lists the leading `45` settlements by peak population descending from the `120`-site HU 05 gazetteer. Among Early and Middle Woodland monuments (`1000BC-400AD`), `Newark Earthworks` (`1.850` at `200AD`), `Hopewell Mound Group` (`1.650` at `200AD`), `Seip Earthworks` (`1.100` at `250AD`), `Fort Ancient` (`980` at `200AD`), `Mound City` (`980` at `200AD`), `Mann Site` (`950` at `200AD`), `Marietta Earthworks` (`780` at `200AD`), `Portsmouth Earthworks` (`780` at `200AD`), `Harness Mound Group` (`760` at `200AD`) and `Circleville Earthworks` (`720` at `200AD`) dominate the Scioto-Miami and Upper Ohio corridors [@dancey1997; @charles2006; @clay1998].

Late Precontact centres (`1000AD-1600AD`) cluster across the lower Ohio, Cumberland and middle Ohio floodplains. `Angel Mounds` reaches `3.200` (`1300AD`) [@hilgeman2000], `Mound Bottom` peaks at `1.600` (`1200AD`), `Castalian Springs` reaches `980` (`1300AD`), `Noel Farm` `860` (`1350AD`), `Rutherford-Kizer` `740` (`1375AD`), `Averbuch` `720` (`1350AD`) and `Strawtown Enclosure` `720` (`1300AD`) prior to Vacant Quarter contraction [@cobb2002]. After `1400AD`, Caborn-Welborn settlements (`Slack Farm` `1.100`, `Hovey Lake` `890`, `Murphy` `760`, `Welborn` `720`, `Bone Bank` `580` at `1500AD`) and late Fort Ancient towns (`Madisonville` `980` at `1500AD`, `Buffalo` `880` at `1550AD`, `Hardin Village` `820` at `1550AD`, `Clover` `610` at `1550AD`) lead the regional urban hierarchy [@cook2017; @comstock2018].

<figure class="crd-table-figure" id="tab:oh-included">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Angel Mounds</strong></td><td class="crd-td">Indiana</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">37,94 N, 87,46 W</td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">3,2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Newark Earthworks</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">40,04 N, 82,43 W</td><td class="crd-td">0AD-400AD</td><td class="crd-td">1,8k (200AD)</td></tr>
<tr><td class="crd-td"><strong>Hopewell Mound Group</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">39,35 N, 83,1 W</td><td class="crd-td">0AD-400AD</td><td class="crd-td">1,6k (200AD)</td></tr>
<tr><td class="crd-td"><strong>Mound Bottom</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">36,12 N, 87,11 W</td><td class="crd-td">1000AD-1300AD</td><td class="crd-td">1,6k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Seip Earthworks</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">39,24 N, 83,22 W</td><td class="crd-td">100AD-400AD</td><td class="crd-td">1,1k (250AD)</td></tr>
<tr><td class="crd-td"><strong>Slack Farm</strong></td><td class="crd-td">Kentucky</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">37,77 N, 88,01 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Castalian Springs</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">36,39 N, 86,32 W</td><td class="crd-td">1150AD-1450AD</td><td class="crd-td">980 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Fort Ancient</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">39,41 N, 84,09 W</td><td class="crd-td">0AD-1300AD</td><td class="crd-td">980 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Madisonville</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">39,14 N, 84,38 W</td><td class="crd-td">1350AD-1600AD</td><td class="crd-td">980 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mound City</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">39,37 N, 83,01 W</td><td class="crd-td">0AD-400AD</td><td class="crd-td">980 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Mann Site</strong></td><td class="crd-td">Indiana</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">37,92 N, 87,83 W</td><td class="crd-td">200AD-400AD</td><td class="crd-td">950 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Hovey Lake</strong></td><td class="crd-td">Indiana</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">37,83 N, 87,95 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">890 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Buffalo</strong></td><td class="crd-td">West Virginia</td><td class="crd-td">Upper Ohio-Allegheny</td><td class="crd-td">38,62 N, 81,98 W</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">880 (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Noel Farm</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">36,11 N, 86,77 W</td><td class="crd-td">1200AD-1450AD</td><td class="crd-td">860 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Hardin Village</strong></td><td class="crd-td">Kentucky</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">38,74 N, 82,92 W</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">820 (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Marietta Earthworks</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Upper Ohio-Allegheny</td><td class="crd-td">39,42 N, 81,45 W</td><td class="crd-td">0AD-400AD</td><td class="crd-td">780 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Portsmouth Earthworks</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">38,74 N, 82,98 W</td><td class="crd-td">0AD-400AD</td><td class="crd-td">780 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Harness Mound Group</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">39,27 N, 82,91 W</td><td class="crd-td">0AD-400AD</td><td class="crd-td">760 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Murphy</strong></td><td class="crd-td">Indiana</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">37,81 N, 87,99 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">760 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Rutherford-Kizer</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">36,34 N, 86,6 W</td><td class="crd-td">1250AD-1450AD</td><td class="crd-td">740 (1375AD)</td></tr>
<tr><td class="crd-td"><strong>Averbuch</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">36,24 N, 86,78 W</td><td class="crd-td">1250AD-1425AD</td><td class="crd-td">720 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Circleville Earthworks</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">39,6 N, 82,93 W</td><td class="crd-td">0AD-350AD</td><td class="crd-td">720 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Strawtown Enclosure</strong></td><td class="crd-td">Indiana</td><td class="crd-td">Wabash-Lower Ohio</td><td class="crd-td">40,12 N, 85,95 W</td><td class="crd-td">1200AD-1400AD</td><td class="crd-td">720 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Welborn</strong></td><td class="crd-td">Indiana</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">37,91 N, 87,97 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">720 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>East Nashville Mounds</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">36,17 N, 86,78 W</td><td class="crd-td">650AD-1525AD</td><td class="crd-td">640 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Gordontown</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">36,02 N, 86,75 W</td><td class="crd-td">1200AD-1450AD</td><td class="crd-td">640 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Sellars</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">36,17 N, 86,24 W</td><td class="crd-td">1000AD-1300AD</td><td class="crd-td">640 (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Brick Church Pike</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">36,23 N, 86,8 W</td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">620 (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Fox Farm</strong></td><td class="crd-td">Kentucky</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">38,53 N, 83,82 W</td><td class="crd-td">1200AD-1500AD</td><td class="crd-td">620 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Hopeton Earthworks</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">39,38 N, 82,98 W</td><td class="crd-td">0AD-350AD</td><td class="crd-td">620 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Clover</strong></td><td class="crd-td">West Virginia</td><td class="crd-td">Upper Ohio-Allegheny</td><td class="crd-td">38,59 N, 82,23 W</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">610 (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Bone Bank</strong></td><td class="crd-td">Indiana</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">37,85 N, 88 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">580 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Fewkes</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">35,97 N, 86,78 W</td><td class="crd-td">1150AD-1425AD</td><td class="crd-td">580 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>High Bank Works</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">39,3 N, 82,92 W</td><td class="crd-td">0AD-350AD</td><td class="crd-td">580 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Johnston Site</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Upper Ohio-Allegheny</td><td class="crd-td">40,43 N, 79,3 W</td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">580 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Brentwood Library</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">36,03 N, 86,78 W</td><td class="crd-td">1250AD-1450AD</td><td class="crd-td">560 (1375AD)</td></tr>
<tr><td class="crd-td"><strong>SunWatch</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">39,71 N, 84,23 W</td><td class="crd-td">1150AD-1320AD</td><td class="crd-td">560 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Baum</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">39,3 N, 83,14 W</td><td class="crd-td">1050AD-1350AD</td><td class="crd-td">540 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Buckner</strong></td><td class="crd-td">Kentucky</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">38,15 N, 84,27 W</td><td class="crd-td">1250AD-1450AD</td><td class="crd-td">540 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Campbell Farm</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Upper Ohio-Allegheny</td><td class="crd-td">39,96 N, 79,8 W</td><td class="crd-td">1100AD-1500AD</td><td class="crd-td">540 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tremper Mound</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">38,8 N, 83,01 W</td><td class="crd-td">100BC-300AD</td><td class="crd-td">540 (100AD)</td></tr>
<tr><td class="crd-td"><strong>Andalex</strong></td><td class="crd-td">Kentucky</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">37,31 N, 87,54 W</td><td class="crd-td">1050AD-1350AD</td><td class="crd-td">520 (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Feurt</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Scioto-Miami</td><td class="crd-td">38,81 N, 82,99 W</td><td class="crd-td">1200AD-1500AD</td><td class="crd-td">520 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Beasley Mounds</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Cumberland-Green</td><td class="crd-td">36,34 N, 86,08 W</td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">510 (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Kethtippecanunk</strong></td><td class="crd-td">Indiana</td><td class="crd-td">Wabash-Lower Ohio</td><td class="crd-td">40,42 N, 86,88 W</td><td class="crd-td">800AD-1600AD</td><td class="crd-td">490 (1600AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements by peak population in Ohio River (HU 05) from the 120-site gazetteer, showing occupied spans and WGS84 coordinates.</figcaption>
</figure>

## Excluded Ledger Candidates

One entry in `ohio_river_source_ledger.json5` is excluded from urban totals to maintain strict spatial deduplication (Table \ref{tab:oh-excluded}). A duplicate coordinate alias of `Angel Mounds` within `2 km` of the primary civic-ceremonial centre is merged cleanly into the canonical `Angel Mounds-Indiana` record [@hilgeman2000].

<figure class="crd-table-figure" id="tab:oh-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Status</th><th class="crd-th">Reason</th><th class="crd-th">Disposition</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Angel Mounds (Indiana)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate alias within 2 km into Angel Mounds.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded candidate site documented in the Ohio River (HU 05) source ledger.</figcaption>
</figure>

# Limitations

Small Late Woodland hamlets and dispersed Archaic foraging camps lacking durable mound or palisade footprints remain absorbed within the continuous rural radiocarbon prior rather than individualised in the `120`-site gazetteer [@dancey1997; @cook2017]. Notice also that early stratified occupations (`Paleo Crossing`, `Meadowcroft Rockshelter`, `Indian Knoll`) reflect seasonal-to-semi-sedentary base camps whose point-level numbers represent sustained group maxima rather than year-round urban settlements [@adovasio1999; @webb1974].

# Sources

<div id="refs"></div>
