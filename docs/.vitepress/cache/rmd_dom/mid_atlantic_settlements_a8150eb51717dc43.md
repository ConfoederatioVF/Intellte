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
hero_caption: "Geographic distribution of the 86 catalogued settlements across the Mid-Atlantic (HU 02) overlaid on the three sub-regional areal masks."
hero_label: "fig:hero-mid-atlantic"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents `86` coordinate-anchored settlement trajectories (`mid_atlantic_settlements.json`) and `1` excluded duplicate alias (`mid_atlantic_source_ledger.json5`, `87` total reviewed entries) across the Mid-Atlantic basin (USGS Hydrological Unit 02, `245.674 km²`) from `9500BC` to `1600AD`.

The urban and multi-component settlement hierarchy spans Palaeoindian Piedmont quarries (`Thunderbird` `95` at `8000BC`, `Shawnee-Minisink`, `Dutchess Quarry`), multi-millennial fall-line aggregations (`Abbott Farm` `1.100` at `1500AD`) [@cross1956abbott; @kraft2001lenape], Chesapeake and Potomac Tidewater towns (`Mockley Point` `290`, `Great Neck` `520`, `Hughes Site` `460`, `Winslow Site` `390`, `Handsell-Nanticoke` `550`, `Accokeek Creek` `1.200`, `Patawomeck` `1.350`, `Werowocomoco` `1.450`) [@stephenson1963accokeek; @gallivan2007werowocomoco; @rountree1989powhatan], Haudenosaunee and Mahican river towns (`Caughnawaga-Mohawk` `1.650`, `Garoga` `1.350`, `Otstungo` `1.180`, `Klock` `1.120`, `Schodack` `950`) [@snow1994iroquois; @dunn1994mahican] and coalescent Susquehannock towns led by `Schultz-Funk` (`2.900`), `Washington Boro` (`1.700`), `Strickler` (`1.500`), `Ibaugh` (`820`), `Locust Grove` (`620`) and `Wyalusing` (`320`) [@kent1984susquehannock; @engelbrecht2003iroquois].

# Background

Settlement archaeology across HU 02 contrasts seasonally mobile Early Holocene quarry-and-foraging camps (`Thunderbird`, `Shoop`, `Brook Run`) against dense Late Woodland palisaded villages and Tidewater chiefly towns [@engelbrecht2003iroquois; @kraft2001lenape]. South of the James River divide, excavated Palaeoindian sand-dune levels illustrate comparable Piedmont-Coastal Plain camp sizes [@mcavoy1997cactushill].

In northern and western upland basins bordering HU 02, comparative Onondaga and Monongahela longhouse syntheses [@tuck1971onondaga; @dragoo1955johnston] alongside New England Algonquian estuarine studies [@bragdon1996] provide calibrated hearth-pair density benchmarks (`10-12` persons per hearth pair or `120-180` persons/ha inside palisades) applied across Susquehanna and Mohawk enclosures [@kent1984susquehannock; @snow1994iroquois].

Excavated Susquehannock cemeteries and stockaded compounds along the lower Susquehanna (`Schultz-Funk`, `Washington Boro`, `Strickler`, `Ibaugh`, `Locust Grove`) and Tidewater oyster-shell *yehakin* townscapes (`Werowocomoco`, `Patawomeck`, `Great Neck`, `Handsell-Nanticoke`) trace late sixteenth-century defensive nucleation directly prior to European settlement [@gallivan2007werowocomoco; @rountree1989powhatan].

# Methodology

## Inclusion Rules and Demographic Reconstruction

All `87` candidate records in `mid_atlantic_source_ledger.json5` pass Operation Viscount screening rules. `86` distinct coordinate sequences (`16` Hudson-Mohawk, `33` Delaware-Susquehanna, `37` Chesapeake) enter `mid_atlantic_settlements.json`, while `1` coordinate alias within `2 km` of `Werowocomoco` is excluded under `duplicate_alias` to avoid double counting.

For the `86` included sites (all tagged `.sources: ["CENTAUR"]`), population series synthesise three empirical streams:

1. **Palisade Footprint and Longhouse Hearth Density**: Stockaded floor plans and dual-family hearth counts (`10-12` persons per hearth) across Susquehannock (`Schultz-Funk`, `Washington Boro`, `Strickler`, `Ibaugh`, `Locust Grove`, `Wyalusing`) and Mohawk-Hudson (`Caughnawaga-Mohawk`, `Garoga`, `Otstungo`, `Klock`, `Cayadutta`, `Smith-Pagerie`) towns [@kent1984susquehannock; @snow1994iroquois; @tuck1971onondaga].
2. **Estuarine Mound, Terrace and Yehakin Town Area**: Dispersed tidewater village house compounds across Powhatan, Piscataway, Nanticoke and coastal Virginia sequences (`Werowocomoco`, `Patawomeck`, `Accokeek Creek`, `Piscataway Fort`, `Handsell-Nanticoke`, `Great Neck`, `Hughes Site`, `Winslow Site`, `Mockley Point`) [@gallivan2007werowocomoco; @rountree1989powhatan; @stephenson1963accokeek].
3. **Alluvial Multi-Component Extent**: Basal floodplain and shell-midden extent indices at `Abbott Farm` and Hudson-Mahican river hubs (`Schodack`) [@cross1956abbott; @dunn1994mahican; @kraft2001lenape].

Each series subtracts cleanly from sub-regional totals without exceeding local radiocarbon carrying capacity [@kelly2025].

# Testing and Validation

Gazetteer auditing satisfies all verification checks with `0` errors at `GMT+0`:

1. **Ledger Parity**: All `87` candidates (`86` included, `1` excluded duplicate alias) reconcile against `mid_atlantic_settlements.json` with `0` orphan or missing keys.
2. **Coordinate and Schema Compliance**: All `86` settlements carry valid `[lat, lng]` coordinates (`36,88 N` to `43,03 N`, `73,14 W` to `79,78 W`), strictly positive integer populations and compliant `["CENTAUR"]` `.sources` tags.
3. **Sub-Regional Mass Conservation**: Catalogued settlement sums remain strictly within sub-regional benchmarks across every horizon, accounting for `395` inhabitants (`19,75%` of `2.000`) at `9000BC`, `3.200` (`1,78%` of `179,5k`) at `1000AD`, `12.400` (`6,31%` of `196,4k`) at `1400AD`, `22.690` (`11,46%` of `198,0k`) at `1500AD` and `25.470` (`14,72%` of `173,0k`) at `1600AD`.

<figure class="crd-table-figure" id="tab:ma-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Schultz-Funk</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">39,99 N, 76,47 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">2.900</td></tr>
<tr><td class="crd-td"><strong>Washington Boro</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">39,99 N, 76,47 W</td><td class="crd-td">1550AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.700</td></tr>
<tr><td class="crd-td"><strong>Caughnawaga-Mohawk</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">42,95 N, 74,38 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.650</td></tr>
<tr><td class="crd-td"><strong>Strickler</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">39,98 N, 76,46 W</td><td class="crd-td">1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.500</td></tr>
<tr><td class="crd-td"><strong>Werowocomoco</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,34 N, 76,65 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.450</td></tr>
<tr><td class="crd-td"><strong>Garoga</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">43,03 N, 74,56 W</td><td class="crd-td">1500AD-1580AD</td><td class="crd-td">1580AD</td><td class="crd-td">1.350</td></tr>
<tr><td class="crd-td"><strong>Patawomeck</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,39 N, 77,32 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.350</td></tr>
<tr><td class="crd-td"><strong>Accokeek Creek</strong></td><td class="crd-td">Maryland</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,69 N, 77,06 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.200</td></tr>
<tr><td class="crd-td"><strong>Otstungo</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">42,95 N, 74,72 W</td><td class="crd-td">1450AD-1530AD</td><td class="crd-td">1530AD</td><td class="crd-td">1.180</td></tr>
<tr><td class="crd-td"><strong>Klock</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">43,02 N, 74,54 W</td><td class="crd-td">1500AD-1540AD</td><td class="crd-td">1540AD</td><td class="crd-td">1.120</td></tr>
<tr><td class="crd-td"><strong>Abbott Farm</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">40,18 N, 74,73 W</td><td class="crd-td">3000BC-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.100</td></tr>
<tr><td class="crd-td"><strong>Cayadutta</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">43 N, 74,43 W</td><td class="crd-td">1450AD-1540AD</td><td class="crd-td">1540AD</td><td class="crd-td">1.050</td></tr>
<tr><td class="crd-td"><strong>Piscataway Fort</strong></td><td class="crd-td">Maryland</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,7 N, 76,98 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.050</td></tr>
<tr><td class="crd-td"><strong>Kecoughtan</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,02 N, 76,34 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">980</td></tr>
<tr><td class="crd-td"><strong>Smith-Pagerie</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">43,01 N, 74,57 W</td><td class="crd-td">1500AD-1550AD</td><td class="crd-td">1550AD</td><td class="crd-td">980</td></tr>
<tr><td class="crd-td"><strong>Schodack</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">42,55 N, 73,76 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td"><strong>Uttamussak</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,53 N, 76,8 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">890</td></tr>
<tr><td class="crd-td"><strong>Murry</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">39,96 N, 76,46 W</td><td class="crd-td">1400AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">880</td></tr>
<tr><td class="crd-td"><strong>Rasawrack</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,75 N, 78,17 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">850</td></tr>
<tr><td class="crd-td"><strong>Sand Hill</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">42,93 N, 74,62 W</td><td class="crd-td">1550AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">840</td></tr>
<tr><td class="crd-td"><strong>Ibaugh</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">40,01 N, 76,48 W</td><td class="crd-td">1550AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">820</td></tr>
<tr><td class="crd-td"><strong>Elwood</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">42,92 N, 74,66 W</td><td class="crd-td">1450AD-1520AD</td><td class="crd-td">1520AD</td><td class="crd-td">780</td></tr>
<tr><td class="crd-td"><strong>Kiskiak</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,24 N, 76,56 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">690</td></tr>
<tr><td class="crd-td"><strong>Orapax</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,51 N, 77,2 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">680</td></tr>
<tr><td class="crd-td"><strong>Bell-Philhower</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">41,3 N, 74,8 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">640</td></tr>
<tr><td class="crd-td"><strong>Locust Grove</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">40,09 N, 76,64 W</td><td class="crd-td">1550AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Monasukapanough</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,1 N, 78,46 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Paspahegh</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,24 N, 76,82 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Handsell-Nanticoke</strong></td><td class="crd-td">Maryland</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,51 N, 75,86 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">550</td></tr>
<tr><td class="crd-td"><strong>Camden</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,15 N, 77,15 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">520</td></tr>
<tr><td class="crd-td"><strong>Great Neck</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">36,88 N, 76,04 W</td><td class="crd-td">400AD-1550AD</td><td class="crd-td">1550AD</td><td class="crd-td">520</td></tr>
<tr><td class="crd-td"><strong>Mohr</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">40,09 N, 76,67 W</td><td class="crd-td">1200AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">520</td></tr>
<tr><td class="crd-td"><strong>Hatch</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,19 N, 77,22 W</td><td class="crd-td">400AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Memorial Park</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">41,14 N, 77,45 W</td><td class="crd-td">3000BC-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Nassawaddox</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,47 N, 75,86 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Pahaquarra</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">41,01 N, 75,04 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Shenks Ferry</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">39,91 N, 76,36 W</td><td class="crd-td">1200AD-1400AD</td><td class="crd-td">1400AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Hughes Site</strong></td><td class="crd-td">Maryland</td><td class="crd-td">Chesapeake</td><td class="crd-td">39,08 N, 77,43 W</td><td class="crd-td">1400AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">460</td></tr>
<tr><td class="crd-td"><strong>Keyser Farm</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,62 N, 78,48 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">460</td></tr>
<tr><td class="crd-td"><strong>Clemson Island</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">40,47 N, 76,95 W</td><td class="crd-td">800AD-1200AD</td><td class="crd-td">1000AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Jordan Point</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,31 N, 77,22 W</td><td class="crd-td">900AD-1550AD</td><td class="crd-td">1550AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Overpeck</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">40,54 N, 75,13 W</td><td class="crd-td">1100AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Roundtop</strong></td><td class="crd-td">New York</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">42,09 N, 76,07 W</td><td class="crd-td">1100AD-1500AD</td><td class="crd-td">1300AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Thomas/Luckey</strong></td><td class="crd-td">New York</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">42,04 N, 76,73 W</td><td class="crd-td">600AD-1400AD</td><td class="crd-td">1400AD</td><td class="crd-td">410</td></tr>
<tr><td class="crd-td"><strong>Winslow Site</strong></td><td class="crd-td">Maryland</td><td class="crd-td">Chesapeake</td><td class="crd-td">39,06 N, 77,36 W</td><td class="crd-td">1350AD-1450AD</td><td class="crd-td">1450AD</td><td class="crd-td">390</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in the Mid-Atlantic (HU 02) gazetteer ordered by peak population (of 86 included).</figcaption>
</figure>

# Results

## Susquehannock, Mohawk and Delaware Consolidation

Between `1400AD` and `1600AD`, stockaded nucleation reshaped both the Susquehanna corridor and the Mohawk Valley (Table \ref{tab:ma-gazetteer} and Figure \ref{fig:hero-mid-atlantic}) [@engelbrecht2003iroquois; @snow1994iroquois]. Along the lower Susquehanna terrace in Lancaster County, `Schultz-Funk` (`39,99 N, 76,47 W`, `2.900` at `1600AD`), `Washington Boro` (`1.700` at `1600AD`), `Strickler` (`1.500` at `1600AD`), `Ibaugh` (`820` at `1600AD`) and `Locust Grove` (`620` at `1600AD`) document rapid downriver Susquehannock aggregation paired upriver with `Wyalusing` (`320` at `1600AD`) [@kent1984susquehannock].

Across the Mohawk and Hudson valleys, `Caughnawaga-Mohawk` (`1.650` at `1600AD`), `Garoga` (`1.350` at `1580AD`), `Otstungo` (`1.180` at `1530AD`), `Klock` (`1.120` at `1540AD`), `Cayadutta` (`1.050` at `1540AD`), `Smith-Pagerie` (`980` at `1550AD`) and `Schodack` (`950` at `1500AD`) maintained dense regional centres [@snow1994iroquois; @dunn1994mahican]. Further east, the Delaware fall-line precinct at `Abbott Farm` (`1.100` at `1500AD`, `3000BC-1500AD`) exhibits multi-millennial sedentary continuity [@cross1956abbott; @kraft2001lenape].

<figure class="crd-figure-block" id="fig:sett-mid-atlantic">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-mid-atlantic-settlements/fig4_mid_atlantic_settlements.png" alt="fig:sett-mid-atlantic" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks across the 86 sites in the Mid-Atlantic (HU 02) gazetteer.</figcaption>
</figure>

## Chesapeake, Potomac and Nanticoke Tidewater Network

Across the southern tier, estuarine and Piedmont river towns combined Middle Woodland ceramic hubs such as `Mockley Point` (`290` at `800AD`, active `400AD-800AD`) with late pre-contact Piedmont villages (`Winslow Site` `390` at `1450AD`, `Hughes Site` `460` at `1500AD`) and principal coastal towns (`Great Neck` `520` at `1550AD`, `Handsell-Nanticoke` `550` at `1600AD`, `Kecoughtan` `980` at `1600AD`, `Piscataway Fort` `1.050` at `1600AD`, `Accokeek Creek` `1.200` at `1500AD`, `Patawomeck` `1.350` at `1600AD` and `Werowocomoco` `1.450` at `1600AD`) [@gallivan2007werowocomoco; @rountree1989powhatan; @stephenson1963accokeek].

This dual estuarine-piedmont network raised Chesapeake urbanised population from `11.240` (`14,79%` of `76,0k`) at `1500AD` to `12.580` (`19,06%` of `66,0k`) at `1600AD`, reflecting coastal consolidation under the Powhatan and Piscataway confederacies just ahead of `1607AD`.

<figure class="crd-table-figure" id="tab:ma-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">State</th><th class="crd-th">Status</th><th class="crd-th">Exclusion Reason</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Werowocomoco</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded archaeological candidate records in the Mid-Atlantic (HU 02) source ledger.</figcaption>
</figure>

# Limitations

Sixteenth-century Susquehannock (`Schultz-Funk`, `Washington Boro`, `Strickler`, `Ibaugh`) and Mohawk (`Caughnawaga-Mohawk`, `Garoga`) trajectories map periodic `15-25` year village relocations onto sequential local site coordinates where archaeologically distinct and onto stable canonical coordinates where palimpsest occupations overlap [@tuck1971onondaga; @kent1984susquehannock].

Dispersed Lenape, Delmarva and Piedmont Algonquian farmsteads lacking nucleated stockades or multi-hearth village plazas stay folded inside the `sites_northern_america` radiocarbon substratum alongside Monongahela-margin hamlets [@kraft2001lenape; @dragoo1955johnston; @kelly2025; @bragdon1996].

# Sources

<div id="refs"></div>
