---
title: "Settlement Gazetteer of Pre-Colonial New England (HU 01)"
subtitle: "CENTAUR-II: Coordinate-Anchored Villages, Shell-Middens and Riverine Centres, 9000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: new_england_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_new_england_spatial.png"
hero_caption: "Geographic distribution of the 99 catalogued settlements across New England (HU 01, 145.904 km²) overlaid on the three sub-regional areal masks."
hero_label: "fig:hero-new-england"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents 99 settlement trajectories (291 benchmark observations, averaging 2,94 per site, 55 with at least three benchmarks) and 103 excluded duplicate-alias consolidations (202 total candidates in the regional source ledger) across New England (USGS Hydrological Unit 01, 145.904 km²) between 9000BC and 1600AD.

Chronological coverage spans Palaeoindian occupations at Bull Brook (95 at 9000BC), Vail (75 at 9000BC) and Whipple (65 at 9000BC), Archaic and Woodland coastal middens at Wapanucket No. 8 (260 at 2000BC), Turner Farm (310 at 1200AD), Damariscotta Shell Midden (320 at 800AD) and Goddard (340 at 1100AD), late pre-contact Wabanaki river towns at Norridgewock Fortified Capital (1,2k at 1600AD), Norridgewock (620 at 1500AD), Pentagoet (510) and Cushnoc (490 at 1600AD), and southern Algonquian estuarine centres led by Great Swamp Fortified Metropolis (2,5k at 1600AD), RI-1000 (1,85k in 1500AD), Mystic (1,55k in 1600AD), Patuxet (1,45k in 1500AD), Sowams (1,4k), Pokanoket Capital Town (1,2k), Shantok (1,15k), Mashantucket (1,1k), Pawtucket (1,1k), Naumkeag Pawtucket Capital (1,1k) and Pocumtuck (1,05k) [@bourque1995turner; @bragdon1996; @cook1976newengland; @mcbride1990pequot]. Combined catalogued urban totals reach 13,85k (11,89% of 116,5k) in 1400AD, 37,185k (32,76% of 113,5k) in 1500AD and 45,33k (52,4% of 86,5k) in 1600AD.

# Background

Archaeological and ethnohistoric records across New England track the shift from small Palaeoindian caribou-intercept camps (Bull Brook, Vail, Whipple, Neponset) and mobile Early-to-Middle Archaic groups (9000BC to 4000BC) to semi-sedentary coastal shell-midden villages and late pre-contact maize-horticultural towns [@snow1980; @robinson2009bullbrook; @gramly1982vail].

Coastal shell-midden excavations across Penobscot Bay and Passamaquoddy Bay (Turner Farm, Goddard, Damariscotta Shell Midden) preserve multi-millennial maritime foraging sequences alongside deep stratified riverine fisheries (Sharrow, Hirundo, Shattuck Farm) [@bourque1995turner; @sanger1987]. After 1100AD, maize-bean-squash horticulture expanded along the Connecticut, Merrimack and Narragansett corridors (Skitchewaug, Burnham-Shepard, Morgan Site), supporting dense nucleated towns prior to seventeenth-century colonial settlement [@bragdon1996; @dunn1994mahican; @mcbride1990pequot].

Separating 99 coordinate-anchored sites from the continuous rural radiocarbon surface prevents spatial kriging from over-dispersing concentrated village populations across forested northern uplands [@kelly2025; @milner2010].

# Methodology

## Inclusion Criteria and Site Footprint Estimation

Every candidate site documented in New England regional syntheses and heritage inventories is registered in the regional source ledger. Sites enter the included settlement gazetteer when excavation or early eyewitness documentation supplies surveyed WGS84 coordinates, dated cultural horizons and bounded residential structure or shell-midden area. Duplicate spatial entries falling within 2 km of a canonical settlement (103 entries, including Whaleback folded into Damariscotta Shell Midden, Naskeag into Goddard, Neville into Smyth and Pine Hill (Massachusetts) into Pocumtuck) receive excluded duplicate-alias status.

For included settlements, population series draw on wigwam-count multipliers (6 to 8 persons per multi-family coastal or riverine structure), excavated midden or village hectares (80 to 150 persons per hectare in palisaded southern Algonquian centres) and contact-baseline counts prior to the 1616 to 1619AD coastal epidemic [@cook1976newengland; @bragdon1996; @mcbride1990pequot]. All 99 records map onto the three HU 01 sub-regions (15 in Maine Basins, 56 in Merrimack-Massachusetts Bay and 28 in Connecticut-Narragansett-South) across Massachusetts (42 sites), Connecticut (19), Maine (14), Rhode Island (13), New Hampshire (8), Vermont (1) and borderland New Brunswick (2).

# Testing and Validation

Gazetteer checks pass with 0 schema errors at GMT+0:

1. **Ledger Parity**: All 202 candidate entries in the regional source ledger (99 included, 103 excluded duplicate-alias consolidations) reconcile cleanly against the settlement gazetteer with 0 unmatched keys.
2. **Coordinate Compliance**: All 99 settlement records fall inside 41,28 N to 47,17 N and 67,68 W to 73,25 W, holding positive integer trajectories across 291 observations (2 to 8 benchmarks per site, averaging 2,94).
3. **Sub-Regional Mass Conservation**: Catalogued settlement sums remain strictly below aggregate HU 01 targets across every benchmark (510 of 800 at 9000BC, 13,85k of 116,5k at 1400AD, 37,185k of 113,5k at 1500AD and 45,33k of 86,5k at 1600AD) and strictly below sub-regional anchors in 68 of 69 sub-region-horizon pairs, with only Merrimack-Massachusetts Bay in 1600AD (27,87k across 56 expanded town records against the 26k contact-decline sub-regional ceiling) flooring its rural residual at 0.

<figure class="crd-figure-block" id="fig:sett-new-england">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-new-england-settlements/fig4_new_england_settlements.png" alt="fig:sett-new-england" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks across the 99 catalogued sites in New England (HU 01).</figcaption>
</figure>

# Results

## Southern Estuarine Towns and Palisaded Centres

Demographic concentration in HU 01 peaked in the Narragansett, Pequot and Massachusetts Bay estuaries (Table \ref{tab:ne-gazetteer} and Figure \ref{fig:sett-new-england}). Within the Merrimack-Massachusetts-Narragansett corridor, Great Swamp Fortified Metropolis (41,48 N, 71,58 W) held 1,5k in 1500AD and peaked at 2,5k in 1600AD, RI-1000 (41,59 N, 71,45 W, Cocumscussoc-Narragansett) reached 1,85k in 1500AD (1,75k in 1600AD) [@bragdon1996], Patuxet reached 1,45k at 1500AD, Sowams held 1,4k, Pokanoket Capital Town held 1,2k, Pawtucket and Naumkeag Pawtucket Capital each held 1,1k, Montaup reached 950, Pennacook 840, Hassanamisco 580 and Squamscott 460 [@cook1976newengland].

Along the Thames and Connecticut River valleys (Connecticut, Housatonic and Narragansett-Cape Cod Sound), Mystic (41,36 N, 71,97 W) expanded to 1,55k in 1600AD [@mcbride1990pequot], joined by Shantok (1,15k), Mashantucket (1,1k), Pocumtuck (1,05k), Weinshauks Pequot Central Seat (950), Nonotuck (820), Quinnipiac Capital Town (800), Squakheag Sokoki Town (800), Agawam Pocumtuc Town (750) and Mattabesett Central Village (700), extending westward toward the Mahican-Hudson borderland [@bragdon1996; @dunn1994mahican].

<figure class="crd-table-figure" id="tab:ne-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Sub-region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Great Swamp Fortified Metropolis</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,48 N, 71,58 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">2,5k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>RI-1000</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,59 N, 71,45 W</td><td class="crd-td">1300AD to 1600AD</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mystic</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,36 N, 71,97 W</td><td class="crd-td">1400AD to 1600AD</td><td class="crd-td">1,6k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Patuxet</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,96 N, 70,67 W</td><td class="crd-td">1200AD to 1600AD</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sowams</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,73 N, 71,28 W</td><td class="crd-td">1300AD to 1600AD</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Norridgewock Fortified Capital</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,75 N, 69,86 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">1,2k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Pokanoket Capital Town</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,68 N, 71,26 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">1,2k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Shantok</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,48 N, 72,08 W</td><td class="crd-td">1400AD to 1600AD</td><td class="crd-td">1,1k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Mashantucket</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,46 N, 71,96 W</td><td class="crd-td">7000BC to 1600AD</td><td class="crd-td">1,1k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Naumkeag Pawtucket Capital</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,52 N, 70,89 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">1,1k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Pawtucket</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,63 N, 71,32 W</td><td class="crd-td">1200AD to 1600AD</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Pocumtuck</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,54 N, 72,61 W</td><td class="crd-td">1200AD to 1600AD</td><td class="crd-td">1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Montaup</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,67 N, 71,24 W</td><td class="crd-td">1300AD to 1600AD</td><td class="crd-td">950 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Weinshauks Pequot Paramount Seat</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,38 N, 71,92 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">950 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Mashpee Wampanoag Town</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,65 N, 70,48 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">850 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Neponset Massachusett Capital</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,27 N, 71,05 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">850 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Pennacook</strong></td><td class="crd-td">New Hampshire</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">43,21 N, 71,54 W</td><td class="crd-td">1200AD to 1600AD</td><td class="crd-td">840 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nonotuck</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,33 N, 72,64 W</td><td class="crd-td">1200AD to 1600AD</td><td class="crd-td">820 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Quinnipiac Capital Town</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,31 N, 72,92 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">800 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Squakheag Sokoki Town</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,7 N, 72,45 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">800 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Agawam Pocumtuc Town</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,1 N, 72,59 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">750 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Nauset Paramount Town</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,83 N, 69,97 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">750 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Aquinnah Wampanoag Capital</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,34 N, 70,8 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">700 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Mattabesett Paramount Village</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,56 N, 72,65 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">700 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Mystic Pawtucket Hill Town</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,42 N, 71,11 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">700 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Nonantum Massachusett Town</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,35 N, 71,19 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">700 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Ossipee Fortified Abenaki Village</strong></td><td class="crd-td">New Hampshire</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">43,78 N, 71,15 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">700 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Pawtuxet Narragansett Village</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,76 N, 71,39 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">700 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Agawam</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,07 N, 72,61 W</td><td class="crd-td">200BC to 1600AD</td><td class="crd-td">680 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Chetacawampec Wampanoag Village</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,42 N, 70,62 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">650 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Manomet Wampanoag Town</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,75 N, 70,58 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">650 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Meech Lake Mohegan Town</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,48 N, 72,15 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">650 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Nashaway Nipmuc Village</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,45 N, 71,67 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">650 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Shawomet Narragansett Town</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,7 N, 71,41 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">650 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Norridgewock</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,76 N, 69,88 W</td><td class="crd-td">1200AD to 1600AD</td><td class="crd-td">620 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Shawomet</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,68 N, 71,38 W</td><td class="crd-td">1300AD to 1600AD</td><td class="crd-td">620 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Misquamicut Coastal Town</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,38 N, 71,83 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">600 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Poquonnock River Village</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,89 N, 72,67 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">600 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Saugus River Village</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,46 N, 70,98 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">600 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Chaubunagungamaug Nipmuc Town</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,04 N, 71,85 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">580 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Hassanamisco</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,21 N, 71,69 W</td><td class="crd-td">1300AD to 1600AD</td><td class="crd-td">580 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Pyquag Wangunk Village</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,71 N, 72,65 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">580 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Quaboag</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,22 N, 72,1 W</td><td class="crd-td">1200AD to 1600AD</td><td class="crd-td">580 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Agawam Wampanoag Village</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,76 N, 70,72 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">550 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Cummaquid Wampanoag Village</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,7 N, 70,3 W</td><td class="crd-td">1500AD to 1600AD</td><td class="crd-td">550 (1600AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements by peak population in the New England (HU 01) 99-site gazetteer, down to 550 inhabitants at Cummaquid Wampanoag Village.</figcaption>
</figure>

## Northern Wabanaki Riverines and Shell-Middens

In the northern Wabanaki tier (15 sites), Turner Farm on North Haven Island spans 3000BC to 1200AD (310 peak) alongside Damariscotta Shell Midden (320 at 800AD) and Goddard (340 at 1100AD) [@bourque1995turner; @sanger1987]. Late pre-contact riverine centres along alluvial terraces and portage nodes include Norridgewock Fortified Capital (750 at 1500AD, 1,2k peak at 1600AD), Norridgewock (620 at 1500AD), Pentagoet (510 at 1500AD), Cushnoc (490 at 1600AD) and Saint-Leonard Saint John River Town (420 at 1500AD), while Mud Lake Stream anchors the New Brunswick-St. John boundary [@snow1980; @sanger1987].

## Excluded Ledger Candidates

Across 202 source-ledger entries, 103 duplicate-alias candidates falling within 2 km of a canonical settlement are excluded during spatial deduplication (Table \ref{tab:ne-excluded} lists the leading 30 of 103 excluded entries, including consolidations into Damariscotta Shell Midden, Goddard, Smyth and Pocumtuck) [@bragdon1996].

<figure class="crd-table-figure" id="tab:ne-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Status</th><th class="crd-th">Reason</th><th class="crd-th">Disposition</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>RI-1000 (Rhode Island)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'RI-1000' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Patuxet (Massachusetts)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Patuxet' (Salisbury, Neal. 1982. Manitou and Providence: Indians, Europeans, and the Making of New England, 1500-1643. Oxford University Press.).</td></tr>
<tr><td class="crd-td"><strong>Sowams (Rhode Island)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Sowams' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Pawtucket (Massachusetts)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Pawtucket' (Gookin, Daniel. 1674 [1792]. Historical Collections of the Indians in New England. Massachusetts Historical Society.).</td></tr>
<tr><td class="crd-td"><strong>Mashantucket (Connecticut)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Mashantucket' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Pocumtuck (Massachusetts)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Pocumtuck' (Chilton, Elizabeth S. 2002. Towns They Have None: Diverse Subsistence and Settlement Strategies in Native New England. In Northeast Subsistence-Settlement Change, ed. J. P. Hart and C. B. Rieth, pp. 289-300.).</td></tr>
<tr><td class="crd-td"><strong>Montaup (Rhode Island)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Montaup' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Pennacook (New Hampshire)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Pennacook' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Nonotuck (Massachusetts)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Nonotuck' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Agawam (Massachusetts)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Agawam' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Norridgewock (Maine)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Norridgewock' (Prins, Harald E. L., and Bruce J. Bourque. 1987. Norridgewock: Village Translocation on the New England-Acadian Frontier. Man in the Northeast 33: 137-158.).</td></tr>
<tr><td class="crd-td"><strong>Quaboag (Massachusetts)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Quaboag' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Pentagoet (Maine)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Pentagoet' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Pequawket (Maine)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Pequawket' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Squamscott (New Hampshire)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Squamscott' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Shattuck Farm (Massachusetts)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Shattuck Farm' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Goddard (Maine)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Goddard' (Bourque, Bruce J., and Steven L. Cox. 1981. Maine State Museum Investigation of the Goddard Site, 1979. Man in the Northeast 22: 3-27.).</td></tr>
<tr><td class="crd-td"><strong>Damariscotta Shell Midden (Maine)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Damariscotta Shell Midden' (Sanger, David, and Mary Jo Sanger. 1986. Boom and Bust on the River: The Story of the Damariscotta Shell Heaps. Archaeology of Eastern North America 14: 65-78.).</td></tr>
<tr><td class="crd-td"><strong>Turner Farm (Maine)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Turner Farm' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Whaleback (Maine)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Damariscotta Shell Midden' (Sanger, David, and Mary Jo Sanger. 1986. Boom and Bust on the River: The Story of the Damariscotta Shell Heaps. Archaeology of Eastern North America 14: 65-78.).</td></tr>
<tr><td class="crd-td"><strong>Lucy Vincent Beach (Massachusetts)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Lucy Vincent Beach' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Naskeag (Maine)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Goddard' (Bourque, Bruce J. 2001. Twelve Thousand Years: American Indians in Maine. University of Nebraska Press.).</td></tr>
<tr><td class="crd-td"><strong>Smyth (New Hampshire)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Smyth' (Foster, Donald W., Victoria B. Kenyon, and George P. Nicholas II. 1981. Ancient Lifeways at the Smyth Site, NH 38-4. New Hampshire Archeologist 22(2): 1-91.).</td></tr>
<tr><td class="crd-td"><strong>Naskeag (Maine)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Goddard' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Hornblower II (Massachusetts)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Hornblower II' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Neville (New Hampshire)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Smyth' (Dincauze, Dena F. 1976. The Neville Site: 8 Years at Amoskeag, Manchester, New Hampshire. Peabody Museum Monographs No. 4, Harvard University.).</td></tr>
<tr><td class="crd-td"><strong>Sharrow (Maine)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Sharrow' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Munsungun (Maine)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Munsungun' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Mystic (Connecticut)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Mystic' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Shantok (Connecticut)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate or alias within 2 km into 'Shantok' (CENTAUR Monument Inventory).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Representative excluded duplicate-alias candidates in the New England (HU 01) source ledger (leading 30 of 103 excluded entries shown).</figcaption>
</figure>

# Limitations

Sixteenth-century town figures in HU 01 rely on back-projecting early seventeenth-century English, French and Dutch village observations [@cook1976newengland; @bragdon1996] onto Late Woodland ceramic and palisade footprints. Small interior hunting camps and dispersed hamlets lacking multi-season residential structures remain folded into the continuous rural radiocarbon surface rather than individualised in the 99-site gazetteer [@snow1980].

# Sources

<div id="refs"></div>
