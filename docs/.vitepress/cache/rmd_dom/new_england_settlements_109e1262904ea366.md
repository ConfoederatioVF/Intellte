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
hero_caption: "Geographic distribution of the 64 catalogued settlements across New England (HU 01, 145.387 km²) overlaid on the three sub-regional areal masks."
hero_label: "fig:hero-new-england"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents `64` settlement trajectories (`new_england_settlements.json`) and `1` excluded duplicate alias (`new_england_source_ledger.json5`, `65` total candidates) across New England (USGS Hydrological Unit 01, `145.387 km²`) between `9000BC` and `1600AD`.

Chronological coverage spans Palaeoindian occupations at `Bull Brook` (`95` at `9000BC`), `Vail` (`75` at `9000BC`) and `Whipple` (`65` at `9000BC`), Archaic and Woodland coastal middens at `Wapanucket No. 8` (`260` at `2000BC`), `Turner Farm` (`310` at `1200AD`), `Damariscotta Shell Midden` (`320` at `800AD`) and `Goddard` (`340` at `1100AD`), late pre-contact Wabanaki river towns at `Norridgewock` (`620` in `1500AD`), `Pentagoet` (`510`) and `Cushnoc` (`490` in `1600AD`), and southern Algonquian estuarine centres led by `RI-1000` (`1.850` in `1500AD`), `Mystic` (`1.550` in `1600AD`), `Patuxet` (`1.450` in `1500AD`), `Sowams` (`1.400`), `Shantok` (`1.150`), `Mashantucket` (`1.100`), `Pawtucket` (`1.100`) and `Pocumtuck` (`1.050`) [@bourque1995turner; @bragdon1996; @cook1976newengland; @mcbride1990pequot]. Combined catalogued urban totals reach `20.325` in `1500AD` (`17,91%` of `113,5k`) and `19.090` in `1600AD` (`22,07%` of `86,5k`).

# Background

Archaeological and ethnohistoric records across New England track the shift from small Palaeoindian caribou-intercept camps (`Bull Brook`, `Vail`, `Whipple`, `Neponset`) and mobile Early-Middle Archaic groups (`9000BC-4000BC`) to semi-sedentary coastal shell-midden villages and late pre-contact maize-horticultural towns [@snow1980; @robinson2009bullbrook; @gramly1982vail].

Coastal shell-midden excavations across Penobscot Bay and Passamaquoddy Bay (`Turner Farm`, `Goddard`, `Damariscotta Shell Midden`) preserve multi-millennial maritime foraging sequences alongside deep stratified riverine fisheries (`Sharrow`, `Hirundo`, `Shattuck Farm`) [@bourque1995turner; @sanger1987]. After `1100AD`, maize-bean-squash horticulture expanded along the Connecticut, Merrimack and Narragansett corridors (`Skitchewaug`, `Burnham-Shepard`, `Morgan Site`), supporting dense nucleated towns prior to seventeenth-century colonial settlement [@bragdon1996; @dunn1994mahican; @mcbride1990pequot].

Separating `64` coordinate-anchored sites from the continuous rural radiocarbon surface prevents spatial kriging from over-dispersing concentrated village populations across forested northern uplands [@kelly2025; @milner2010].

# Methodology

## Inclusion Criteria and Site Footprint Estimation

Every candidate site documented in New England regional syntheses and heritage inventories is registered in `new_england_source_ledger.json5`. Sites enter `new_england_settlements.json` when excavation or early eyewitness documentation supplies surveyed WGS84 coordinates, dated cultural horizons and bounded residential structure or shell-midden area. Duplicate spatial entries falling within `2 km` of a canonical settlement (`RI-1000` in Rhode Island) receive `excluded` status under `duplicate_alias`.

For included settlements, population series draw on wigwam-count multipliers (`6-8` persons per multi-family coastal or riverine structure), excavated midden or village hectares (`80-150` persons/ha in palisaded southern Algonquian centres) and contact-baseline counts prior to the `1616-1619AD` coastal epidemic [@cook1976newengland; @bragdon1996; @mcbride1990pequot]. All `64` records carry `.sources: ["CENTAUR"]` and map onto the three HU 01 sub-regions (`17` in Maine Basins, `17` in Merrimack-Massachusetts Bay and `30` in Connecticut-Narragansett-South).

# Testing and Validation

Gazetteer validation passed all automated checks with `0` errors at `GMT+0`:

1. **Ledger Parity**: All `65` candidate entries in `new_england_source_ledger.json5` (`64` included, `1` excluded) reconcile cleanly against `new_england_settlements.json` with `0` unmatched keys.
2. **Coordinate and Schema Compliance**: All `64` settlement records fall inside `41,34 N` to `46,40 N` and `67,68 W` to `73,25 W`, holding positive integer series and canonical `["CENTAUR"]` `.sources` arrays.
3. **Sub-Regional Mass Conservation**: Catalogued settlement sums stay strictly below sub-regional totals in every epoch across all three sub-regions, leaving positive rural residuals from `9000BC` (`510` of `800`) through `1400AD` (`13.850` of `116,5k`), `1500AD` (`20.325` of `113,5k`) and `1600AD` (`19.090` of `86,5k`).

<figure class="crd-figure-block" id="fig:sett-new-england">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-new-england-settlements/fig4_new_england_settlements.png" alt="fig:sett-new-england" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks across the 64 catalogued sites in New England (HU 01).</figcaption>
</figure>

# Results

## Southern Estuarine Towns and Palisaded Centres

Demographic concentration in HU 01 peaked in the Narragansett, Pequot and Massachusetts Bay estuaries (Table \ref{tab:ne-gazetteer} and Figure \ref{fig:sett-new-england}). `RI-1000` (`41,59 N, 71,45 W`, Cocumscussoc-Narragansett) reached `1.850` in `1500AD` (`1.750` in `1600AD`) [@bragdon1996], while `Mystic` (`41,36 N, 71,97 W`) expanded to `1.550` in `1600AD` [@mcbride1990pequot].

Around Plymouth, Massachusetts Bay and the Merrimack falls, `Patuxet` (`1.450` at `1500AD`), `Pawtucket` (`1.100`), `Pennacook` (`840`), `Hassanamisco` (`580`) and `Squamscott` (`460`) anchored coastal and fall-line populations [@cook1976newengland]. Along Narragansett Bay and the Connecticut corridor, `Sowams` (`1.400`), `Shantok` (`1.150`), `Mashantucket` (`1.100`), `Pocumtuck` (`1.050`), `Montaup` (`950`), `Nonotuck` (`820`), `Agawam` (`680`), `Shawomet` (`620`) and `Quaboag` (`580`) formed a dense southern Algonquian urban-village network extending westward toward the Mahican-Hudson borderland [@bragdon1996; @dunn1994mahican].

<figure class="crd-table-figure" id="tab:ne-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State/Country</th><th class="crd-th">Sub-region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>RI-1000</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,59 N, 71,45 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mystic</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,36 N, 71,97 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1,6k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Patuxet</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,96 N, 70,67 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sowams</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,73 N, 71,28 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Shantok</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,48 N, 72,08 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1,1k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Mashantucket</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,46 N, 71,96 W</td><td class="crd-td">7000BC-1600AD</td><td class="crd-td">1,1k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Pawtucket</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,63 N, 71,32 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Pocumtuck</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,54 N, 72,61 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Montaup</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,67 N, 71,24 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">950 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Pennacook</strong></td><td class="crd-td">New Hampshire</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">43,21 N, 71,54 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">840 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nonotuck</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,33 N, 72,64 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">820 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Agawam</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,07 N, 72,61 W</td><td class="crd-td">200BC-1600AD</td><td class="crd-td">680 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Norridgewock</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,76 N, 69,88 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">620 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Shawomet</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,79 N, 71,38 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">620 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Hassanamisco</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,21 N, 71,69 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">580 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Quaboag</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,22 N, 72,1 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">580 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Burnham-Shepard</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,83 N, 72,61 W</td><td class="crd-td">1300AD-1500AD</td><td class="crd-td">510 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Pentagoet</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,39 N, 68,8 W</td><td class="crd-td">1000AD-1600AD</td><td class="crd-td">510 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Cushnoc</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,31 N, 69,78 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">490 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Pequawket</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,02 N, 70,98 W</td><td class="crd-td">6000BC-1600AD</td><td class="crd-td">480 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Squamscott</strong></td><td class="crd-td">New Hampshire</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,98 N, 70,95 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">460 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Hollister Site</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,7 N, 72,61 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">450 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Manchaug</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,1 N, 71,75 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">440 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Aptucxet</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,74 N, 70,61 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">420 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Mishoonash</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">42,27 N, 71,76 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">420 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Morgan Site</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,66 N, 72,63 W</td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">380 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Shattuck Farm</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,67 N, 71,18 W</td><td class="crd-td">2000BC-1500AD</td><td class="crd-td">380 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Titicut</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,95 N, 70,99 W</td><td class="crd-td">3000BC-1500AD</td><td class="crd-td">360 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Joyner Site</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,51 N, 71,37 W</td><td class="crd-td">2000BC-1400AD</td><td class="crd-td">350 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Goddard</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,29 N, 68,54 W</td><td class="crd-td">2000BC-1500AD</td><td class="crd-td">340 (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Skitchewaug</strong></td><td class="crd-td">Vermont</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">43,3 N, 72,43 W</td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">340 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Damariscotta Shell Midden</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,04 N, 69,52 W</td><td class="crd-td">1000BC-1200AD</td><td class="crd-td">320 (800AD)</td></tr>
<tr><td class="crd-td"><strong>Lambert Farm</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,67 N, 71,49 W</td><td class="crd-td">1000AD-1400AD</td><td class="crd-td">310 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Turner Farm</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,29 N, 68,96 W</td><td class="crd-td">3000BC-1200AD</td><td class="crd-td">310 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Lucy Vincent Beach</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,34 N, 70,73 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">290 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Carns Site</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">41,84 N, 69,95 W</td><td class="crd-td">500BC-1300AD</td><td class="crd-td">260 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Naskeag</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,29 N, 68,54 W</td><td class="crd-td">2000BC-1500AD</td><td class="crd-td">260 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Smyth</strong></td><td class="crd-td">New Hampshire</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">43,01 N, 71,47 W</td><td class="crd-td">6000BC-1000AD</td><td class="crd-td">260 (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Walker Point</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,82 N, 71,37 W</td><td class="crd-td">3000BC-1500AD</td><td class="crd-td">260 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Wapanucket No. 8</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,83 N, 70,93 W</td><td class="crd-td">9000BC-2000BC</td><td class="crd-td">260 (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Ingalls</strong></td><td class="crd-td">New Hampshire</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,03 N, 72,06 W</td><td class="crd-td">1000AD-1600AD</td><td class="crd-td">240 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Hornblower II</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,38 N, 70,71 W</td><td class="crd-td">3000BC-1500AD</td><td class="crd-td">230 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Boylston Street Fishweir</strong></td><td class="crd-td">Massachusetts</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">42,35 N, 71,07 W</td><td class="crd-td">3000BC-2000BC</td><td class="crd-td">220 (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Eddington Bend</strong></td><td class="crd-td">Maine</td><td class="crd-td">Maine Basins</td><td class="crd-td">44,83 N, 68,7 W</td><td class="crd-td">4000BC-400AD</td><td class="crd-td">220 (400AD)</td></tr>
<tr><td class="crd-td"><strong>Peckham Farm</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">41,54 N, 71,21 W</td><td class="crd-td">800AD-1100AD</td><td class="crd-td">220 (1100AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements by peak population in the New England (HU 01) 64-site gazetteer.</figcaption>
</figure>

## Northern Wabanaki Riverines and Shell-Middens

In the northern Wabanaki tier, `Turner Farm` on North Haven Island spans `3000BC` to `1200AD` (`310` peak) alongside `Damariscotta Shell Midden` (`320` at `800AD`), `Goddard` (`340` at `1100AD`) and `Naskeag` (`260` at `1500AD`) [@bourque1995turner; @sanger1987]. Late pre-contact riverine centres along alluvial terraces and portage nodes include `Norridgewock` (`620` at `1500AD`), `Pentagoet` (`510` at `1500AD`), `Cushnoc` (`490` at `1600AD`) and `Pequawket` (`480` at `1500AD`), while `Mud Lake Stream` anchors the New Brunswick-St. John boundary [@snow1980; @sanger1987].

## Excluded Ledger Candidates

One candidate entry in `new_england_source_ledger.json5` is excluded during spatial deduplication (Table \ref{tab:ne-excluded}), merging a duplicate alias coordinate within `2 km` into the canonical `RI-1000-Rhode Island` record [@bragdon1996].

<figure class="crd-table-figure" id="tab:ne-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Status</th><th class="crd-th">Reason</th><th class="crd-th">Disposition</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>RI-1000 (Rhode Island)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate alias within 2 km into RI-1000.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded candidate site documented in the New England (HU 01) source ledger.</figcaption>
</figure>

# Limitations

Sixteenth-century town figures in HU 01 rely on back-projecting early seventeenth-century English, French and Dutch village observations [@cook1976newengland; @bragdon1996] onto Late Woodland ceramic and palisade footprints. Small interior hunting camps and dispersed hamlets lacking multi-season residential structures remain folded into the continuous rural radiocarbon surface rather than individualised in the `64`-site gazetteer [@snow1980].

# Sources

<div id="refs"></div>
