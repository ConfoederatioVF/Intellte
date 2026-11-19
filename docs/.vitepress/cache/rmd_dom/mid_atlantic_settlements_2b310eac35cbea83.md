---
title: "Settlement Gazetteer of the Pre-Colonial Mid-Atlantic (HU 02)"
subtitle: "CENTAUR-II: Palisaded Iroquoian Towns, Fall-Line Centres and Tidewater Capitals, 9500BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: mid_atlantic_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_mid_atlantic_spatial.png"
hero_caption: "Geographic distribution of the 115 catalogued settlements across the Mid-Atlantic (HU 02) overlaid on the three sub-regional areal masks."
hero_label: "fig:hero-mid-atlantic"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents 115 coordinate-anchored settlement trajectories (287 benchmark observations, 2,5 mean) and 117 excluded candidate entries (232 total reviewed entries in the regional source ledger) across the Mid-Atlantic basin (USGS Hydrological Unit 02, 246.361 km²) from 9500BC to 1600AD.

The urban and multi-component settlement hierarchy spans Palaeoindian Piedmont camps (Thunderbird 95 at 8000BC, Shawnee-Minisink, Shoop, Brook Run, Nesquehoning Creek), multi-millennial fall-line and Delaware aggregations (Abbott Farm 1,1k at 1500AD, Minisink Munsee Capital 1,2k at 1500AD) [@cross1956abbott; @kraft2001lenape], Chesapeake and Potomac Tidewater towns (Great Neck 520, Hughes Site 460, Winslow Site 390, Handsell-Nanticoke 550, Piscataway Fort 1,05k, Accokeek Creek 1,2k, Moyaone Fortified Capital Town 1,3k, Rassawek Monacan Capital 1,3k, Patawomeck 1,35k, Werowocomoco 1,45k) [@stephenson1963accokeek; @gallivan2007werowocomoco; @rountree1989powhatan], Haudenosaunee and Mahican river towns (Caughnawaga-Mohawk 1,65k, Garoga 1,35k, Otstungo 1,18k, Klock 1,12k, Cayadutta 1,05k, Esopus Kingston Town 1k, Montauk Fort Pond Capital 1k, Schodack 950) [@snow1994iroquois; @dunn1994mahican] and coalescent Susquehannock and Shenks Ferry towns led by Schultz-Funk (2,9k), Billmyer Susquehannock Town (1,5k), Murry (1,5k), Murry Shenks Ferry Town (900), Ibaugh (820), Frey-Haverstick Shenks Village (700) and Wyalusing (320) [@kent1984susquehannock; @engelbrecht2003iroquois].

# Background

Settlement archaeology across HU 02 contrasts seasonally mobile Early Holocene foraging camps (Thunderbird, Shoop, Brook Run, Nesquehoning Creek) against dense Late Woodland palisaded villages and Tidewater chiefly towns [@engelbrecht2003iroquois; @kraft2001lenape]. South of the James River divide, excavated Palaeoindian sand-dune levels illustrate comparable Piedmont-Coastal Plain camp sizes [@mcavoy1997cactushill].

In northern and western upland basins bordering HU 02, comparative Onondaga and Monongahela longhouse syntheses [@tuck1971onondaga; @dragoo1955johnston] alongside New England Algonquian estuarine studies [@bragdon1996] provide calibrated hearth-pair density benchmarks (10-12 persons per hearth pair or 120-180 persons per hectare inside palisades) applied across Susquehanna and Mohawk enclosures [@kent1984susquehannock; @snow1994iroquois].

Excavated Susquehannock and Shenks Ferry stockaded compounds along the lower Susquehanna (Schultz-Funk, Billmyer Susquehannock Town, Murry, Ibaugh) and Tidewater oyster-shell *yehakin* townscapes (Werowocomoco, Patawomeck, Great Neck, Handsell-Nanticoke) trace late sixteenth-century defensive nucleation directly prior to European settlement [@gallivan2007werowocomoco; @rountree1989powhatan].

# Methodology

## Inclusion Rules and Demographic Reconstruction

All 232 candidate records in the regional source ledger undergo CENTAUR screening rules. 115 distinct coordinate sequences (32 Hudson-Mohawk, 37 Delaware-Susquehanna, 46 Chesapeake; across VA 33, NY 31, PA 18, MD 13, NJ 11, DE 7, WV 1, CT 1) enter the gazetteer, while 114 coordinate aliases within 2 km (such as Strickler merged into Schultz-Funk) and 3 unquantified non-habitation quarry or rockshelter features (Sheep Rock Shelter, Dutchess Quarry, Harlan Mill Quarry) are excluded to avoid double-counting or non-habitation bias.

For the 115 included sites, population series synthesise three evidentiary streams:

1. **Palisade Footprint and Longhouse Hearth Density**: Stockaded floor plans and dual-family hearth counts (10-12 persons per hearth) across Susquehannock (Schultz-Funk, Billmyer Susquehannock Town, Murry, Ibaugh, Wyalusing) and Mohawk-Hudson (Caughnawaga-Mohawk, Garoga, Otstungo, Klock, Cayadutta, Smith-Pagerie) towns [@kent1984susquehannock; @snow1994iroquois; @tuck1971onondaga].
2. **Estuarine Mound, Terrace and Yehakin Town Area**: Dispersed tidewater village house compounds across Powhatan, Monacan, Piscataway, Nanticoke and coastal Virginia sequences (Werowocomoco, Patawomeck, Moyaone Fortified Capital Town, Rassawek Monacan Capital, Accokeek Creek, Piscataway Fort, Handsell-Nanticoke, Great Neck, Hughes Site, Winslow Site) [@gallivan2007werowocomoco; @rountree1989powhatan; @stephenson1963accokeek].
3. **Alluvial Multi-Component Extent**: Basal floodplain and shell-midden extent indices at Abbott Farm, Minisink Munsee Capital and Hudson-Mahican river hubs (Schodack) [@cross1956abbott; @dunn1994mahican; @kraft2001lenape].

Each series subtracts cleanly from sub-regional totals without exceeding local radiocarbon carrying capacity [@kelly2025].

# Testing and Validation

Gazetteer auditing satisfies consistency checks with 0 errors at GMT+0:

1. **Ledger Parity**: All 232 candidates (115 included, 117 excluded: 114 duplicate-alias consolidations and 3 non-habitation exclusions) reconcile cleanly against the settlement gazetteer with 0 orphan or missing keys.
2. **Coordinate and Schema Compliance**: All 115 settlements carry consistent latitude-longitude coordinates (36,86 N to 43,03 N, 71,95 W to 79,78 W), strictly positive integer populations (69,09k summed peaks) and canonical provenance metadata.
3. **Sub-Regional Mass Conservation**: Catalogued settlement sums remain strictly within sub-regional benchmarks across every horizon; summed on exact benchmark dates, catalogued sites account for 345 inhabitants (17,25% of 2k) at 9000BC, 3.200 (1,78% of 179,5k) at 1000AD, 14.120 (7,19% of 196,4k) at 1400AD, 37.620 (19% of 198k) at 1500AD and 35.380 (20,45% of 173k) at 1600AD.

<figure class="crd-table-figure" id="tab:ma-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Schultz-Funk</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">39,99 N, 76,47 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">2.900</td></tr>
<tr><td class="crd-td"><strong>Caughnawaga-Mohawk</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">42,95 N, 74,38 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.650</td></tr>
<tr><td class="crd-td"><strong>Billmyer Susquehannock Town</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">40,08 N, 76,62 W</td><td class="crd-td">1550AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.500</td></tr>
<tr><td class="crd-td"><strong>Murry</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">39,96 N, 76,46 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.500</td></tr>
<tr><td class="crd-td"><strong>Werowocomoco</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,34 N, 76,65 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.450</td></tr>
<tr><td class="crd-td"><strong>Garoga</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">43,03 N, 74,56 W</td><td class="crd-td">1500AD-1580AD</td><td class="crd-td">1580AD</td><td class="crd-td">1.350</td></tr>
<tr><td class="crd-td"><strong>Patawomeck</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,39 N, 77,32 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.350</td></tr>
<tr><td class="crd-td"><strong>Moyaone Fortified Capital Town</strong></td><td class="crd-td">Maryland</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,7 N, 77,02 W</td><td class="crd-td">1350AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.300</td></tr>
<tr><td class="crd-td"><strong>Rassawek Monacan Capital</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,77 N, 78,08 W</td><td class="crd-td">1350AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.300</td></tr>
<tr><td class="crd-td"><strong>Accokeek Creek</strong></td><td class="crd-td">Maryland</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,69 N, 77,06 W</td><td class="crd-td">400AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.200</td></tr>
<tr><td class="crd-td"><strong>Minisink Munsee Capital</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">41,32 N, 74,78 W</td><td class="crd-td">1350AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.200</td></tr>
<tr><td class="crd-td"><strong>Otstungo</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">42,95 N, 74,72 W</td><td class="crd-td">1450AD-1530AD</td><td class="crd-td">1530AD</td><td class="crd-td">1.180</td></tr>
<tr><td class="crd-td"><strong>Klock</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">43,02 N, 74,54 W</td><td class="crd-td">1500AD-1540AD</td><td class="crd-td">1540AD</td><td class="crd-td">1.120</td></tr>
<tr><td class="crd-td"><strong>Abbott Farm</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">40,18 N, 74,73 W</td><td class="crd-td">3000BC-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.100</td></tr>
<tr><td class="crd-td"><strong>Cayadutta</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">43 N, 74,43 W</td><td class="crd-td">1450AD-1540AD</td><td class="crd-td">1540AD</td><td class="crd-td">1.050</td></tr>
<tr><td class="crd-td"><strong>Piscataway Fort</strong></td><td class="crd-td">Maryland</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,7 N, 76,98 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.050</td></tr>
<tr><td class="crd-td"><strong>Esopus Kingston Town</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">41,93 N, 73,99 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.000</td></tr>
<tr><td class="crd-td"><strong>Montauk Fort Pond Capital</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">41,04 N, 71,95 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.000</td></tr>
<tr><td class="crd-td"><strong>Kecoughtan</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,02 N, 76,34 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">980</td></tr>
<tr><td class="crd-td"><strong>Smith-Pagerie</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">43,01 N, 74,57 W</td><td class="crd-td">1500AD-1550AD</td><td class="crd-td">1550AD</td><td class="crd-td">980</td></tr>
<tr><td class="crd-td"><strong>Schodack</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">42,55 N, 73,76 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td"><strong>Murry Shenks Ferry Town</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">39,94 N, 76,38 W</td><td class="crd-td">1450AD-1550AD</td><td class="crd-td">1550AD</td><td class="crd-td">900</td></tr>
<tr><td class="crd-td"><strong>Wappinger Capital Town</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">41,53 N, 73,9 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">900</td></tr>
<tr><td class="crd-td"><strong>Uttamussak</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,53 N, 76,8 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">890</td></tr>
<tr><td class="crd-td"><strong>Canarsee Indian Town</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">40,63 N, 73,92 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">850</td></tr>
<tr><td class="crd-td"><strong>Rasawrack</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,75 N, 78,17 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">850</td></tr>
<tr><td class="crd-td"><strong>Shinnecock Hills Village</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">40,89 N, 72,44 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">850</td></tr>
<tr><td class="crd-td"><strong>Wiltmeet Fortified Esopus Town</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">41,78 N, 74,22 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">850</td></tr>
<tr><td class="crd-td"><strong>Sand Hill</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">42,93 N, 74,62 W</td><td class="crd-td">1550AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">840</td></tr>
<tr><td class="crd-td"><strong>Ibaugh</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">40,01 N, 76,48 W</td><td class="crd-td">1550AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">820</td></tr>
<tr><td class="crd-td"><strong>Rechgawawank Town</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">40,87 N, 73,92 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">800</td></tr>
<tr><td class="crd-td"><strong>Werowocomoco Paramount Capital</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,42 N, 76,58 W</td><td class="crd-td">1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">800</td></tr>
<tr><td class="crd-td"><strong>Elwood</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">42,92 N, 74,66 W</td><td class="crd-td">1450AD-1520AD</td><td class="crd-td">1520AD</td><td class="crd-td">780</td></tr>
<tr><td class="crd-td"><strong>Frey-Haverstick Shenks Village</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">39,99 N, 76,44 W</td><td class="crd-td">1400AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">700</td></tr>
<tr><td class="crd-td"><strong>Matinecock Coastal Town</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">40,87 N, 73,63 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">700</td></tr>
<tr><td class="crd-td"><strong>Wiechquaeskeck Bluff Town</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">41,01 N, 73,87 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">700</td></tr>
<tr><td class="crd-td"><strong>Kiskiak</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,24 N, 76,56 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">690</td></tr>
<tr><td class="crd-td"><strong>Orapax</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,51 N, 77,2 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">680</td></tr>
<tr><td class="crd-td"><strong>Kitchawan Hudson River Village</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">41,2 N, 73,88 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">650</td></tr>
<tr><td class="crd-td"><strong>Rockaway Coastal Village</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">40,59 N, 73,78 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">650</td></tr>
<tr><td class="crd-td"><strong>Bell-Philhower</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">41,3 N, 74,8 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">640</td></tr>
<tr><td class="crd-td"><strong>Monasukapanough</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,1 N, 78,46 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Paspahegh</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,24 N, 76,82 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Niantic Coastal Town</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">41,32 N, 72,2 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">600</td></tr>
<tr><td class="crd-td"><strong>Orapaks Forest Capital Town</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,6 N, 77,18 W</td><td class="crd-td">1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">600</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in the Mid-Atlantic (HU 02) gazetteer ordered by peak population (of 115 included).</figcaption>
</figure>

# Results

## Susquehannock, Mohawk and Delaware Consolidation

Between 1400AD and 1600AD, stockaded nucleation reshaped both the Susquehanna corridor and the Mohawk Valley (Table \ref{tab:ma-gazetteer} and Figure \ref{fig:hero-mid-atlantic}) [@engelbrecht2003iroquois; @snow1994iroquois]. Along the lower Susquehanna terrace in Lancaster County, Schultz-Funk (39,99 N, 76,47 W, 2,9k at 1600AD), Billmyer Susquehannock Town (1,5k at 1600AD), Murry (1,5k at 1600AD), Murry Shenks Ferry Town (900 at 1550AD), Ibaugh (820 at 1600AD) and Frey-Haverstick Shenks Village (700 at 1500AD) document rapid downriver Susquehannock and Shenks Ferry aggregation paired upriver with Wyalusing (320 at 1600AD) [@kent1984susquehannock].

Across the Mohawk, Hudson and Long Island Sound lowlands, Caughnawaga-Mohawk (1,65k at 1600AD), Garoga (1,35k at 1580AD), Otstungo (1,18k at 1530AD), Klock (1,12k at 1540AD), Cayadutta (1,05k at 1540AD), Esopus Kingston Town (1k at 1600AD), Montauk Fort Pond Capital (1k at 1600AD), Smith-Pagerie (980 at 1550AD) and Schodack (950 at 1500AD) maintained dense regional centres [@snow1994iroquois; @dunn1994mahican]. Across the Delaware basin, Minisink Munsee Capital (1,2k at 1500AD) and the fall-line precinct at Abbott Farm (1,1k at 1500AD, 3000BC-1500AD) anchor multi-millennial sedentary continuity [@cross1956abbott; @kraft2001lenape].

<figure class="crd-figure-block" id="fig:sett-mid-atlantic">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-mid-atlantic-settlements/fig4_mid_atlantic_settlements.png" alt="fig:sett-mid-atlantic" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 115 sites in the Mid-Atlantic (HU 02) gazetteer.</figcaption>
</figure>

## Chesapeake, Potomac and Nanticoke Tidewater Network

Across the southern tier, estuarine and Piedmont river towns combined multi-century occupations such as Hatch (480 at 1500AD, 400AD-1500AD) and Accokeek Creek (1,2k at 1500AD, 400AD-1600AD) with late pre-contact Piedmont villages (Winslow Site 390 at 1450AD, Hughes Site 460 at 1500AD) and principal coastal towns (Great Neck 520 at 1550AD, Handsell-Nanticoke 550 at 1600AD, Kecoughtan 980 at 1600AD, Piscataway Fort 1,05k at 1600AD, Moyaone Fortified Capital Town 1,3k at 1500AD, Rassawek Monacan Capital 1,3k at 1500AD, Patawomeck 1,35k at 1600AD and Werowocomoco 1,45k at 1600AD) [@gallivan2007werowocomoco; @rountree1989powhatan; @stephenson1963accokeek].

Catalogued Chesapeake town headcounts shift from an exact-date total of 16,58k (21,82% of 76k, reflecting 1450-1500AD single-horizon capitals such as Orapaks Forest Capital Town and Menapucunt Pamunkey Seat) at 1500AD to 12,1k (18,33% of 66k) across enduring 1600AD Powhatan and Piscataway towns just ahead of 1607AD.

<figure class="crd-table-figure" id="tab:ma-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">State</th><th class="crd-th">Status</th><th class="crd-th">Exclusion Reason</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Werowocomoco</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Abbott Farm</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Werowocomoco</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Patawomeck</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Accokeek Creek</strong></td><td class="crd-td">Maryland</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Kiskiak</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Memorial Park</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Puncheon Run</strong></td><td class="crd-td">Delaware</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Sheep Rock Shelter</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
<tr><td class="crd-td"><strong>Schultz-Funk</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Caughnawaga-Mohawk</strong></td><td class="crd-td">New York</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Piscataway Fort</strong></td><td class="crd-td">Maryland</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Kecoughtan</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Schodack</strong></td><td class="crd-td">New York</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Uttamussak</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Rasawrack</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Orapax</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Bell-Philhower</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Monasukapanough</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Paspahegh</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Camden</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Mohr</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Hatch</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Nassawaddox</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Pahaquarra</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Shenks Ferry</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Keyser Farm</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Clemson Island</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Jordan Point</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
<tr><td class="crd-td"><strong>Overpeck</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded archaeological candidate records (leading 30 of 117) from the 232 evaluated entries in the Mid-Atlantic (HU 02) source ledger.</figcaption>
</figure>

# Limitations

Sixteenth-century Susquehannock (Schultz-Funk, Billmyer Susquehannock Town, Murry, Ibaugh) and Mohawk (Caughnawaga-Mohawk, Garoga) trajectories map periodic 15-25 year village relocations onto sequential local site coordinates where archaeologically distinct and onto stable canonical coordinates where palimpsest occupations overlap (114 duplicate-alias consolidations within 2 km), while 3 non-habitation quarry and rockshelter deposits (Sheep Rock Shelter, Dutchess Quarry, Harlan Mill Quarry) remain excluded from the settlement totals [@tuck1971onondaga; @kent1984susquehannock].

Dispersed Lenape, Delmarva and Piedmont Algonquian farmsteads lacking nucleated stockades or multi-hearth village plazas stay folded inside the continental Northern America radiocarbon substratum alongside Monongahela-margin hamlets [@kraft2001lenape; @dragoo1955johnston; @kelly2025; @bragdon1996].

# Sources

<div id="refs"></div>
