---
title: "Settlement Gazetteer of the Pre-Colonial Great Lakes (HU 04)"
subtitle: "CENTAUR-II: Copper Extraction Camps, Lake Fisheries, Oneota Villages and Iroquoian Towns, 9500BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: great_lakes_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_great_lakes_spatial.png"
hero_caption: "Geographic distribution of 91 catalogued settlements across the Great Lakes (HU 04) overlaid on the three sub-regional areal masks."
hero_label: "fig:hero-great-lakes"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 91 coordinate-anchored settlements (`great_lakes_settlements.json`) and 1 excluded duplicate candidate (`great_lakes_source_ledger.json5`) across the Great Lakes basin (USGS Hydrological Unit 04, 318.548 km²) between 9500BC and 1600AD. Spanning 92 total evaluated ledger entries across seven U.S. states and adjacent Canadian borderlands, the inventory traces Palaeoindian and Early Archaic beach-ridge stations at `Hiscock` (`9500BC`, 25 to 60), `Gainey` (`9000BC`, 65) and `Petersen` (`9000BC`, 45 to 540 in `1500AD`) [@simons1984gainey; @mason1981greatlakes], Archaic Lake Superior copper-mining sites at `Isle Royale-Minong` (180 in `2000BC`) and `Copper Harbor` (140 in `1000AD`) [@martin1999copper], island whitefish stations at `Juntunen` (450 in `1200AD`) [@mcpherron1967juntunen; @cleland1982fishery], Lake Michigan Oneota ridged-field towns at `Lake Winnebago` (1.450 in `1500AD`), `Bell Site` (1.150 in `1600AD`) and `Moccasin Bluff` (950 in `1500AD`) [@overstreet1997oneota; @bettarel1973moccasin], and Northern Iroquoian-Erie capitals led by `Ganondagan` (2.600 in `1600AD`), `Indian Hill (Onondaga)` (2.400 in `1600AD`), `Onondaga` (2.400 in `1600AD`), `Ripley` (1.650 in `1600AD`) and `Factory Hollow` (1.450 in `1600AD`) [@trigger1976huron; @tuck1971onondaga; @snow1994iroquois; @sullivan1996ripley].

# Background

Great Lakes settlement morphology reflects three distinct ecological zones: northern Shield-boreal lake fisheries and copper-bearing basalts, central prairie-forest Oneota river valleys and southern Erie-Ontario Iroquois agricultural uplands [@mason1981greatlakes]. Early Holocene occupations such as `Gainey` in Genesee County, Michigan (`42,92 N, 83,64 W`) and `Hiscock` in western New York (`43,00 N, 78,19 W`) anchor post-glacial caribou-hunting corridors along former proglacial shorelines [@simons1984gainey].

Middle and Late Woodland mound centres, palisaded enclosures, longhouse rows and stratified island fishery middens supply coordinate-anchored residential counts across all 91 included settlements. Separating these 91 nucleated centres from diffuse rural densities prevents non-stationary kriging surfaces from smearing concentrated village populations into surrounding upland forest and boreal Shield terrain [@kelly2025].

# Methodology

## Inclusion Criteria and Site Demographic Methods

Candidate screening in `great_lakes_source_ledger.json5` consolidates 92 regional entries across three verification waves, retaining 91 distinct residential, fishery or copper-extraction centres and excluding 1 duplicate coordinate alias (`Lake Winnebago`, merged within 2 km into the canonical `Lake Winnebago` entry). Population trajectories derive from excavated longhouse hearth counts across Seneca, Onondaga, Cayuga, Oneida and Erie towns (`Ganondagan`, `Onondaga`, `Indian Hill (Onondaga)`, `Ripley`, `Factory Hollow` and `Thurston`) [@trigger1976huron; @tuck1971onondaga; @snow1994iroquois; @sullivan1996ripley], ridged-field catchment areas and pit-feature counts around Lake Winnebago and the St. Joseph River (`Lake Winnebago`, `Bell Site`, `Doty Island`, `Lasley's Point` and `Moccasin Bluff`) [@overstreet1997oneota; @bettarel1973moccasin], and fishery aggregation middens at Bois Blanc Island and Whitefish Bay (`Juntunen` and `Naomikong Point`) [@cleland1982fishery; @mcpherron1967juntunen].

# Testing and Validation

Gazetteer auditing passed all reconciliation checks at 0 errors at GMT+0:

1. **Ledger Parity**: All 92 ledger candidates (91 included, 1 excluded) reconcile cleanly against `great_lakes_settlements.json` across the three watershed sub-regions (`5` in Superior-Upper Peninsula, `21` in Lake Michigan-Fox-Winnebago and `65` in Huron-Erie-Finger Lakes).
2. **Coordinate and Spatial Compliance**: All 91 records carry valid coordinates (`41,09 N` to `48,08 N`, `73,01 W` to `89,11 W`), strictly positive integer populations and uniform `CENTAUR` provenance across seven states and Canadian borderlands (`34` New York, `28` Michigan, `12` Ohio, `8` Wisconsin, `6` Vermont, `2` Ontario borderlands and `1` Indiana).
3. **Sub-Regional Mass Conservation**: Explicit settlement benchmark sums represent 13,27% of total HU 04 population in 1500AD (21.760 of 164k) and 16,09% in 1600AD (24.695 of 153,5k), leaving strictly positive rural residuals across every sub-region.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State/Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ganondagan</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,96 N, 77,41 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">2.600</td></tr>
<tr><td class="crd-td"><strong>Indian Hill (Onondaga)</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,9 N, 76,02 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">2.400</td></tr>
<tr><td class="crd-td"><strong>Onondaga</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,94 N, 76,14 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">2.400</td></tr>
<tr><td class="crd-td"><strong>Ripley</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,27 N, 79,73 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.650</td></tr>
<tr><td class="crd-td"><strong>Factory Hollow</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,9 N, 77,53 W</td><td class="crd-td">1550AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.450</td></tr>
<tr><td class="crd-td"><strong>Lake Winnebago</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Michigan-Fox</td><td class="crd-td">44,11 N, 88,69 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.450</td></tr>
<tr><td class="crd-td"><strong>Cameron (Seneca)</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,89 N, 77,61 W</td><td class="crd-td">1550AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.200</td></tr>
<tr><td class="crd-td"><strong>Adams (Seneca)</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,84 N, 77,6 W</td><td class="crd-td">1500AD-1570AD</td><td class="crd-td">1570AD</td><td class="crd-td">1.150</td></tr>
<tr><td class="crd-td"><strong>Bell Site</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Michigan-Fox</td><td class="crd-td">44,05 N, 88,66 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.150</td></tr>
<tr><td class="crd-td"><strong>Thurston</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,98 N, 75,59 W</td><td class="crd-td">1550AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.150</td></tr>
<tr><td class="crd-td"><strong>Tram</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,81 N, 77,65 W</td><td class="crd-td">1550AD-1590AD</td><td class="crd-td">1590AD</td><td class="crd-td">1.050</td></tr>
<tr><td class="crd-td"><strong>Genoa Fort</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,66 N, 76,53 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">980</td></tr>
<tr><td class="crd-td"><strong>Atwell Fort</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,92 N, 75,91 W</td><td class="crd-td">1500AD-1580AD</td><td class="crd-td">1580AD</td><td class="crd-td">960</td></tr>
<tr><td class="crd-td"><strong>Moccasin Bluff</strong></td><td class="crd-td">Michigan</td><td class="crd-td">Michigan-Fox</td><td class="crd-td">41,86 N, 86,37 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td"><strong>Nichols Pond</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">43 N, 75,74 W</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td"><strong>Eaton</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,85 N, 78,77 W</td><td class="crd-td">1500AD-1550AD</td><td class="crd-td">1550AD</td><td class="crd-td">920</td></tr>
<tr><td class="crd-td"><strong>Oneida Valley</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">43,04 N, 75,65 W</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">920</td></tr>
<tr><td class="crd-td"><strong>Burke</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,93 N, 76,03 W</td><td class="crd-td">1450AD-1530AD</td><td class="crd-td">1530AD</td><td class="crd-td">880</td></tr>
<tr><td class="crd-td"><strong>Doty Island</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Michigan-Fox</td><td class="crd-td">44,19 N, 88,45 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">840</td></tr>
<tr><td class="crd-td"><strong>Vaillancourt</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,96 N, 75,64 W</td><td class="crd-td">1500AD-1570AD</td><td class="crd-td">1570AD</td><td class="crd-td">840</td></tr>
<tr><td class="crd-td"><strong>Shelby</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">43,18 N, 78,41 W</td><td class="crd-td">1400AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">760</td></tr>
<tr><td class="crd-td"><strong>Bloody Hill</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,95 N, 76,04 W</td><td class="crd-td">1400AD-1480AD</td><td class="crd-td">1480AD</td><td class="crd-td">740</td></tr>
<tr><td class="crd-td"><strong>Indian Hills (Ohio)</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">41,59 N, 83,57 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">720</td></tr>
<tr><td class="crd-td"><strong>Lasley's Point</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Michigan-Fox</td><td class="crd-td">44,13 N, 88,7 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">720</td></tr>
<tr><td class="crd-td"><strong>South Park</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">41,39 N, 81,62 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">720</td></tr>
<tr><td class="crd-td"><strong>Buffam Street</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,85 N, 78,8 W</td><td class="crd-td">1300AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">680</td></tr>
<tr><td class="crd-td"><strong>Missisquoi</strong></td><td class="crd-td">Vermont</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">44,92 N, 73,12 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">680</td></tr>
<tr><td class="crd-td"><strong>Grand River</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Michigan-Fox</td><td class="crd-td">43,77 N, 89,11 W</td><td class="crd-td">1100AD-1300AD</td><td class="crd-td">1300AD</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Libben</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">41,51 N, 83 W</td><td class="crd-td">400AD-1100AD</td><td class="crd-td">1100AD</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Alhart</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">43,1 N, 77,88 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">560</td></tr>
<tr><td class="crd-td"><strong>Fairport Harbor</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">41,75 N, 81,27 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">560</td></tr>
<tr><td class="crd-td"><strong>Norton Mounds</strong></td><td class="crd-td">Michigan</td><td class="crd-td">Michigan-Fox</td><td class="crd-td">42,94 N, 85,72 W</td><td class="crd-td">0AD-400AD</td><td class="crd-td">200AD</td><td class="crd-td">540</td></tr>
<tr><td class="crd-td"><strong>Petersen</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">41,51 N, 83,06 W</td><td class="crd-td">9000BC-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">540</td></tr>
<tr><td class="crd-td"><strong>Kelso</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">43,04 N, 76,44 W</td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">1300AD</td><td class="crd-td">510</td></tr>
<tr><td class="crd-td"><strong>White Fort</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">41,4 N, 82,13 W</td><td class="crd-td">1300AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">510</td></tr>
<tr><td class="crd-td"><strong>Clayton</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">44,24 N, 76,08 W</td><td class="crd-td">1350AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Pine Hill (New York)</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">43,95 N, 75,81 W</td><td class="crd-td">1400AD-1550AD</td><td class="crd-td">1550AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Rock Island II</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Michigan-Fox</td><td class="crd-td">45,46 N, 86,79 W</td><td class="crd-td">500BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Wolf</strong></td><td class="crd-td">Michigan</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,63 N, 82,81 W</td><td class="crd-td">1300AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Reeves</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">41,64 N, 81,41 W</td><td class="crd-td">1300AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">460</td></tr>
<tr><td class="crd-td"><strong>Eiden</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">41,45 N, 82,09 W</td><td class="crd-td">1400AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">450</td></tr>
<tr><td class="crd-td"><strong>Fort Meigs</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">41,55 N, 83,65 W</td><td class="crd-td">500BC-1100AD</td><td class="crd-td">1100AD</td><td class="crd-td">450</td></tr>
<tr><td class="crd-td"><strong>Juntunen</strong></td><td class="crd-td">Michigan</td><td class="crd-td">Superior-U.P.</td><td class="crd-td">45,82 N, 84,58 W</td><td class="crd-td">800AD-1400AD</td><td class="crd-td">1200AD</td><td class="crd-td">450</td></tr>
<tr><td class="crd-td"><strong>Indian Point Fort</strong></td><td class="crd-td">Ohio</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">41,72 N, 81,17 W</td><td class="crd-td">1300AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Riviere au Vase</strong></td><td class="crd-td">Michigan</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,67 N, 82,78 W</td><td class="crd-td">800AD-1200AD</td><td class="crd-td">1000AD</td><td class="crd-td">420</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements by peak population across the 91 catalogued sites in the Great Lakes (HU 04) gazetteer.</figcaption>
</figure>

# Results

## Iroquoian Towns and Lake Erie Borderlands

In the southeastern sub-region (`65` settlements), large palisaded Northern Iroquoian and Erie towns dominated late pre-contact demography (Table 1 and Figure 1). Across western and central New York, `Ganondagan` (`42,96 N, 77,41 W`) expanded from 1.400 inhabitants in 1500AD to 2.600 in 1600AD, matched by Onondaga capitals at `Indian Hill (Onondaga)` (1.100 in 1500AD to 2.400 in 1600AD) and `Onondaga` (480 in 1300AD to 2.400 in 1600AD) [@tuck1971onondaga; @snow1994iroquois]. Along the Lake Erie south shore, `Ripley` rose from 850 in 1400AD to 1.350 in 1500AD and 1.650 in 1600AD [@sullivan1996ripley], while `Factory Hollow` (1.450), `Cameron (Seneca)` (1.200), `Adams (Seneca)` (1.150 in 1570AD), `Thurston` (1.150), `Tram` (1.050 in 1590AD) and `Genoa Fort` (980) formed dense clustered village belts from the Genesee to Oneida Creek [@trigger1976huron; @snow1994iroquois].

Further west along the Lake Erie southern shore and Saginaw drainage, Whittlesey and Western Basin fortified centres included `Indian Hills (Ohio)` (720 in 1600AD), `South Park` (720 in 1600AD), `Libben` (620 in 1100AD), `Fairport Harbor` (560 in 1600AD), `Petersen` (540 in 1500AD) and `White Fort` (510 in 1500AD), while `Missisquoi` on Lake Champlain reached 680 in 1500AD (`640` in 1600AD) [@mason1981greatlakes].

<figure class="crd-figure-block" id="fig:sett-great-lakes">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-lakes-settlements/fig4_great_lakes_settlements.png" alt="fig:sett-great-lakes" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks across the 91 sites in the Great Lakes (HU 04) gazetteer.</figcaption>
</figure>

## Lake Michigan Oneota Towns and Northern Copper-Fishery Stations

In the Lake Michigan-Fox-Winnebago sub-region (`21` settlements), Oneota agricultural towns formed the western demographic core [@overstreet1997oneota]. `Lake Winnebago` (`44,11 N, 88,69 W`) grew from 580 in 1100AD to 1.050 in 1300AD and 1.450 in 1500AD (1.400 in 1600AD), flanked by `Bell Site` (`47WN9`, rising from 420 in 1400AD to 1.150 in 1600AD), `Doty Island` (840 in 1600AD), `Lasley's Point` (720 in 1500AD) and `Grand River` (620 in 1300AD). On the eastern shore of Lake Michigan, `Moccasin Bluff` (`41,86 N, 86,37 W`) peaked at 950 in 1500AD (`820` in 1600AD) [@bettarel1973moccasin], `Norton Mounds` reached 540 in 200AD during the Middle Woodland Hopewell florescence and `Rock Island II` maintained continuous seasonal and village occupation from 500BC to 1600AD (480 peak).

In the northern Lake Superior-Upper Peninsula sub-region (`5` settlements), `Isle Royale-Minong` (`48,03 N, 88,78 W`, 180 in 2000BC), `Isle Royale Minong Mines` (145 in 2000BC) and `Copper Harbor` (140 in 1000AD) document multi-millennial native copper quarrying [@martin1999copper]. Further south toward the Straits of Mackinac, `Naomikong Point` reached 240 in 500AD and `Juntunen` on Bois Blanc Island grew from 180 in 800AD to 450 in 1200AD (`290` in 1400AD) around autumn whitefish spawning shoals [@cleland1982fishery; @mcpherron1967juntunen].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">State/Country</th><th class="crd-th">Status</th><th class="crd-th">Exclusion Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lake Winnebago</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Lake Winnebago' (CENTAUR Monument Inventory).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded candidates (1 of 92 total) in the Great Lakes (HU 04) source ledger.</figcaption>
</figure>

# Limitations

Seasonal copper-mining camps (`Isle Royale-Minong`, `Copper Harbor`) and Straits fishery stations (`Juntunen`, `Naomikong Point`) experienced pronounced warm-season versus winter population swings that annualised benchmark integers flatten into mean seasonal equivalents [@cleland1982fishery; @martin1999copper]. Separately, dispersed Ojibwe, Ottawa, Potawatomi and Menominee winter hunting groups across northern Michigan and Wisconsin remain embedded in the kriged rural substratum rather than discrete village coordinates [@mason1981greatlakes], while Middle Mississippian `Aztalan` in southeastern Wisconsin falls just across the Rock-Fox watershed divide outside HU 04 [@goldstein1991aztalan].

# Sources

<div id="refs"></div>
