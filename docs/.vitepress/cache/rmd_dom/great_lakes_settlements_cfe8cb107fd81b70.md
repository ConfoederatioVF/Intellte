---
title: "Settlement Gazetteer of the Pre-Colonial Great Lakes (HU 04)"
subtitle: "CENTAUR-II: Copper Extraction Camps, Lake Fisheries, Oneota Villages and Iroquoian Towns, 3000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: great_lakes_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_great_lakes_spatial.png"
hero_caption: "Geographic distribution of the 11 verified settlements across the Great Lakes (HU 04) overlaid on the three sub-regional areal masks."
hero_label: "fig:hero-great-lakes"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 11 coordinate-anchored settlements (`great_lakes_settlements.json`) and 1 excluded archaeological candidate (`great_lakes_source_ledger.json5`) across the Great Lakes basin (USGS Hydrological Unit 04, 318.548 km²) between 3000 BC and 1600 AD. The settlement inventory documents Archaic copper-mining camps at Isle Royale-Minong (180 in 2000 BC) [@martin1999copper], multi-century whitefish fishery stations at Bawating (220 in 0 AD to 1.100 in 1600 AD) and Juntunen (480 in 1400 AD) [@cleland1982fishery; @mcpherron1967juntunen], Middle Mississippian outpost Aztalan (750 in 1100 AD) [@goldstein1991aztalan], Lake Michigan Oneota ridged-field towns at Lake Winnebago-Oshkosh (1.450 in 1500 AD) and Moccasin Bluff (950 in 1500 AD) [@overstreet1997oneota; @bettarel1973moccasin], and late pre-contact Iroquoian-Erie capitals led by Hochelaga (2.600 in 1500 AD), Ganondagan (2.600 in 1600 AD), Onondaga (2.400 in 1600 AD), Caughnawaga-Mohawk (1.650 in 1600 AD) and Ripley-Erie (1.650 in 1600 AD) [@trigger1976huron; @tuck1971onondaga; @sullivan1996ripley].

# Background

Great Lakes settlement patterns reflect three ecological zones: northern Shield-boreal lake fisheries and copper-bearing basalts, central prairie-forest Oneota river valleys and southern Erie-Ontario Iroquois agricultural uplands [@mason1981greatlakes]. Palaeoindian fluted-point localities such as Gainey in Genesee County, Michigan, represent mobile hunting stations without residential housing and are excluded from the urban gazetteer [@simons1984gainey].

Excavated palisaded enclosures, longhouse rows and stratified island fishery middens anchor the 11 verified settlements. Separating these nucleated centres from diffuse rural densities prevents kriging models from smoothing concentrated village populations into surrounding boreal forest [@kelly2025].

# Methodology

## Inclusion Criteria and Site Demographic Methods

Candidate screening in `great_lakes_source_ledger.json5` excludes `Gainey-Michigan` under `seasonal_encampment_unquantified` while retaining 11 residential or seasonally permanent extraction and fishery centres tagged `.sources: ["CENTAUR"]`. Population series derive from longhouse hearth counts (Hochelaga, Ganondagan, Onondaga, Caughnawaga-Mohawk and Ripley-Erie) [@trigger1976huron; @snow1994iroquois; @sullivan1996ripley], palisaded platform-mound precinct estimates at Aztalan [@goldstein1991aztalan], ridged-field catchment sizes around Lake Winnebago and St. Joseph River [@overstreet1997oneota; @bettarel1973moccasin], and ethnohistoric fishery aggregation estimates at Sault Ste. Marie and Bois Blanc Island [@cleland1982fishery; @mcpherron1967juntunen].

# Testing and Validation

Gazetteer auditing passed all verification checks at 0 errors at GMT+0:

1. **Ledger Parity**: All 12 ledger entries (11 included, 1 excluded) reconcile cleanly against `great_lakes_settlements.json`.
2. **Coordinate and Schema Compliance**: All 11 records carry valid `[lat, lng]` coordinates (`41,84 N` to `48,03 N`, `73,58 W` to `88,86 W`), positive integer populations and canonical `["CENTAUR"]` `.sources` arrays.
3. **Sub-Regional Mass Conservation**: Verified settlement sums represent 7,96% of total HU 04 population in 1500 AD (13.050 of 164k) and 8,37% in 1600 AD (12.850 of 153,5k), leaving well-behaved positive rural residuals.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State/Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ganondagan</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,96 N, 77,41 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">2.600</td></tr>
<tr><td class="crd-td"><strong>Hochelaga</strong></td><td class="crd-td">Canada</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">45,5 N, 73,58 W</td><td class="crd-td">1400AD-1550AD</td><td class="crd-td">1500AD</td><td class="crd-td">2.600</td></tr>
<tr><td class="crd-td"><strong>Onondaga</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,94 N, 76,14 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">2.400</td></tr>
<tr><td class="crd-td"><strong>Caughnawaga-Mohawk</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,95 N, 74,38 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.650</td></tr>
<tr><td class="crd-td"><strong>Ripley-Erie</strong></td><td class="crd-td">New York</td><td class="crd-td">Huron-Erie-NY</td><td class="crd-td">42,27 N, 79,73 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.650</td></tr>
<tr><td class="crd-td"><strong>Lake Winnebago-Oshkosh</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Michigan-Fox</td><td class="crd-td">44,11 N, 88,69 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.450</td></tr>
<tr><td class="crd-td"><strong>Bawating</strong></td><td class="crd-td">Michigan</td><td class="crd-td">Superior-U.P.</td><td class="crd-td">46,5 N, 84,34 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.100</td></tr>
<tr><td class="crd-td"><strong>Moccasin Bluff</strong></td><td class="crd-td">Michigan</td><td class="crd-td">Michigan-Fox</td><td class="crd-td">41,84 N, 86,34 W</td><td class="crd-td">1100AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td"><strong>Aztalan</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Michigan-Fox</td><td class="crd-td">43,07 N, 88,86 W</td><td class="crd-td">1000AD-1200AD</td><td class="crd-td">1100AD</td><td class="crd-td">750</td></tr>
<tr><td class="crd-td"><strong>Juntunen</strong></td><td class="crd-td">Michigan</td><td class="crd-td">Superior-U.P.</td><td class="crd-td">45,77 N, 84,47 W</td><td class="crd-td">800AD-1400AD</td><td class="crd-td">1400AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Isle Royale-Minong</strong></td><td class="crd-td">Michigan</td><td class="crd-td">Superior-U.P.</td><td class="crd-td">48,03 N, 88,78 W</td><td class="crd-td">3000BC-1000AD</td><td class="crd-td">2000BC</td><td class="crd-td">180</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified settlements in the Great Lakes (HU 04) gazetteer ordered by peak population.</figcaption>
</figure>

# Results

## Iroquoian Towns and Lake Erie Borderlands

In the southeastern sub-region, large palisaded Iroquoian towns dominated late pre-contact demography (Table 1 and Figure 1). Hochelaga on the St. Lawrence-Lake Ontario outlet peaked at 2.600 inhabitants in 1500 AD (2.200 in 1550 AD) prior to its sixteenth-century abandonment [@trigger1976huron]. Across western and central New York, Ganondagan (2.600 in 1600 AD), Onondaga (2.400 in 1600 AD), Caughnawaga-Mohawk (1.650 in 1600 AD) and Ripley-Erie on the Lake Erie south shore (850 in 1400 AD, 1.350 in 1500 AD, 1.650 in 1600 AD) expanded continuously into the contact era [@tuck1971onondaga; @snow1994iroquois; @sullivan1996ripley].

<figure class="crd-figure-block" id="fig:sett-great-lakes">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-lakes-settlements/fig4_great_lakes_settlements.png" alt="fig:sett-great-lakes" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks in the Great Lakes (HU 04) gazetteer.</figcaption>
</figure>

## Lake Michigan Oneota Towns and Northern Fisheries

In the Lake Michigan basin, the Middle Mississippian palisaded outpost at Aztalan (`43,07 N, 88,86 W`) rose from 320 in 1000 AD to 750 in 1100 AD before contracting to 620 in 1200 AD [@goldstein1991aztalan]. Subsequent Oneota agricultural towns grew larger: Lake Winnebago-Oshkosh reached 1.450 in 1500 AD (1.400 in 1600 AD) and Moccasin Bluff in southwestern Michigan reached 950 in 1500 AD [@overstreet1997oneota; @bettarel1973moccasin]. Further north, Isle Royale-Minong supported 140 to 180 seasonal copper miners between 3000 BC and 1000 BC (150 in 1000 AD) [@martin1999copper], Juntunen on Bois Blanc Island grew from 260 in 800 AD to 480 in 1400 AD [@mcpherron1967juntunen], and the rapids fishery at Bawating (Sault Ste. Marie) expanded fivefold from 220 in 0 AD to 1.100 in 1600 AD [@cleland1982fishery].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">State/Country</th><th class="crd-th">Status</th><th class="crd-th">Disposition Reason</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hochelaga</strong></td><td class="crd-td">Canada</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Aztalan</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Caughnawaga-Mohawk</strong></td><td class="crd-td">New York</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Onondaga</strong></td><td class="crd-td">New York</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Isle Royale-Minong</strong></td><td class="crd-td">Michigan</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Bawating</strong></td><td class="crd-td">Michigan</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Lake Winnebago-Oshkosh</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Moccasin Bluff</strong></td><td class="crd-td">Michigan</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Juntunen</strong></td><td class="crd-td">Michigan</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Ganondagan</strong></td><td class="crd-td">New York</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Ripley-Erie</strong></td><td class="crd-td">New York</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Gainey</strong></td><td class="crd-td">Michigan</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source ledger disposition for all 12 Great Lakes (HU 04) candidate sites.</figcaption>
</figure>

# Limitations

Seasonal aggregation centres such as Bawating and Isle Royale-Minong experienced pronounced summer-versus-winter population swings that benchmark integers flatten into annual mean equivalents [@cleland1982fishery; @martin1999copper]. Separately, dispersed Ottawa, Potawatomi and Menominee winter camps across Michigan and Wisconsin remain embedded in the rural kriged substratum rather than discrete gazetteer coordinates [@mason1981greatlakes].

# Sources

<div id="refs"></div>
