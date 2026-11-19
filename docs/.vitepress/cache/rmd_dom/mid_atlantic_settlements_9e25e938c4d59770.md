---
title: "Settlement Gazetteer of the Pre-Colonial Mid-Atlantic (HU 02)"
subtitle: "CENTAUR-II: Palisaded Iroquoian Towns, Fall-Line Centres and Tidewater Capitals, 0 AD to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: mid_atlantic_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_mid_atlantic_spatial.png"
hero_caption: "Geographic distribution of the 11 verified settlements across the Mid-Atlantic (HU 02) overlaid on the three sub-regional areal masks."
hero_label: "fig:hero-mid-atlantic"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents the 11 verified settlement trajectories (`mid_atlantic_settlements.json`) and 2 excluded archaeological candidates (`mid_atlantic_source_ledger.json5`) across the Mid-Atlantic basin (USGS Hydrological Unit 02, 245.674 km²) from 0 AD to 1600 AD. The settlement hierarchy captures multi-millennial fall-line occupation at Abbott Farm (420 in 0 AD to 1.100 in 1500 AD) [@cross1956abbott], Monongahela village aggregation at the Johnston Site (580 in 1300 AD) [@dragoo1955johnston], Potomac-Chesapeake chiefly capitals at Accokeek Creek (1.200 in 1500 AD) and Werowocomoco (1.450 in 1600 AD) [@stephenson1963accokeek; @gallivan2007werowocomoco], and large sixteenth-century Haudenosaunee and Susquehannock palisaded towns led by Schultz-Susquehannock (2.900 in 1600 AD), Ganondagan (2.600 in 1600 AD), Onondaga (2.400 in 1600 AD) and Caughnawaga-Mohawk (1.650 in 1600 AD) [@kent1984susquehannock; @tuck1971onondaga; @snow1994iroquois].

# Background

Settlement archaeology in HU 02 distinguishes mobile Archaic campsites from Late Woodland palisaded towns and Tidewater political capitals [@engelbrecht2003iroquois; @kraft2001lenape]. Two well-known localities fail inclusion requirements: Cactus Hill in Sussex County, Virginia, is a stratified sand-dune Paleoindian and Early Archaic camp without residential structures [@mcavoy1997cactushill], whereas the 1570 AD Spanish Jesuit mission of Ajacan near the York-James peninsula lacks an archaeologically confirmed village coordinate [@rountree1989powhatan]. Conversely, excavated longhouse footprints, palisade ditches and shell-midden village plazas provide bounded urban populations across the Hudson, Susquehanna, Delaware and Chesapeake corridors [@kent1984susquehannock; @gallivan2007werowocomoco].

# Methodology

## Inclusion Rules and Demographic Estimation

Every candidate site in `mid_atlantic_source_ledger.json5` undergoes Operation Viscount source screening. Palaeoindian camps are excluded as `seasonal_encampment_unquantified` and unconfirmed documentary missions as `unlocated_historical_toponym`.

For the 11 included settlements (all tagged `.sources: ["CENTAUR"]`), population series derive from excavated longhouse floor areas (10 to 12 persons per hearth pair in Haudenosaunee and Susquehannock towns, or 120 to 180 persons/ha inside palisades) [@snow1994iroquois; @tuck1971onondaga; @kent1984susquehannock] and Tidewater *yehakin* house counts along estuarine creeks [@gallivan2007werowocomoco; @rountree1989powhatan]. Adjacent boundary settlements (`RI-1000-Narragansett`, `Mystic-Pequot Fort`, `Schodack-Mahican`) are cross-referenced within the Hudson-Mohawk-Champlain borderland mask [@bragdon1996; @dunn1994mahican].

# Testing and Validation

Gazetteer auditing passed all verification checks at 0 errors at GMT+0:

1. **Ledger Parity**: All 13 ledger entries (11 included, 2 excluded) reconcile against `mid_atlantic_settlements.json` with 0 missing or orphan keys.
2. **Coordinate and Schema Compliance**: All 11 settlements record valid `[lat, lng]` coordinates (`37,34 N` to `42,96 N`, `71,45 W` to `79,30 W`), positive integer trajectories and `["CENTAUR"]` `.sources` arrays.
3. **Sub-Regional Mass Conservation**: Summed settlement totals reach 14.370 in 1500 AD (7,26% of the 198k HU 02 total) and 17.630 in 1600 AD (10,19% of 173k), leaving positive rural residuals in all three sub-regions.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Schultz-Susquehannock</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">39,99 N, 76,47 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">2.900</td></tr>
<tr><td class="crd-td"><strong>Ganondagan</strong></td><td class="crd-td">New York</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">42,96 N, 77,41 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">2.600</td></tr>
<tr><td class="crd-td"><strong>Onondaga</strong></td><td class="crd-td">New York</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">42,94 N, 76,14 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">2.400</td></tr>
<tr><td class="crd-td"><strong>RI-1000-Narragansett</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">41,59 N, 71,45 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.850</td></tr>
<tr><td class="crd-td"><strong>Caughnawaga-Mohawk</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">42,95 N, 74,38 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.650</td></tr>
<tr><td class="crd-td"><strong>Mystic-Pequot Fort</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">41,36 N, 71,97 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.550</td></tr>
<tr><td class="crd-td"><strong>Werowocomoco</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Chesapeake</td><td class="crd-td">37,34 N, 76,65 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.450</td></tr>
<tr><td class="crd-td"><strong>Accokeek Creek</strong></td><td class="crd-td">Maryland</td><td class="crd-td">Chesapeake</td><td class="crd-td">38,69 N, 77,06 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.200</td></tr>
<tr><td class="crd-td"><strong>Abbott Farm</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">40,18 N, 74,73 W</td><td class="crd-td">0AD-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.100</td></tr>
<tr><td class="crd-td"><strong>Schodack-Mahican</strong></td><td class="crd-td">New York</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">42,55 N, 73,76 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td"><strong>Johnston Site</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">40,43 N, 79,3 W</td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">1300AD</td><td class="crd-td">580</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified settlements in the Mid-Atlantic (HU 02) gazetteer ordered by peak population.</figcaption>
</figure>

# Results

## Iroquoian and Susquehannock Palisaded Consolidation

Between 1400 AD and 1600 AD, population nucleation intensified across the Susquehanna and Finger Lakes-Mohawk corridors as fortified villages merged into major confederate towns (Table 1 and Figure 1) [@engelbrecht2003iroquois; @snow1994iroquois]. Schultz-Susquehannock (`39,99 N, 76,47 W`) more than doubled from 1.150 inhabitants in 1500 AD to 2.400 in 1550 AD and 2.900 in 1600 AD [@kent1984susquehannock]. Further north, Seneca town Ganondagan rose from 1.400 in 1500 AD to 2.600 in 1600 AD, Onondaga expanded from 1.100 in 1400 AD to 2.400 in 1600 AD [@tuck1971onondaga] and Caughnawaga-Mohawk grew from 750 in 1400 AD to 1.650 in 1600 AD [@snow1994iroquois]. Earlier settlements such as the Monongahela Johnston Site (580 in 1300 AD) [@dragoo1955johnston] and the Delaware fall-line complex at Abbott Farm (420 in 0 AD to 1.100 in 1500 AD) [@cross1956abbott] document deep pre-contact continuity.

<figure class="crd-figure-block" id="fig:sett-mid-atlantic">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-mid-atlantic-settlements/fig4_mid_atlantic_settlements.png" alt="fig:sett-mid-atlantic" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks in the Mid-Atlantic (HU 02) gazetteer.</figcaption>
</figure>

## Chesapeake Tidewater Capitals

In the Chesapeake sub-region, Powhatan's capital at Werowocomoco (`37,34 N, 76,65 W`) grew steadily from 450 inhabitants in 1300 AD to 1.100 in 1500 AD and 1.450 in 1600 AD, reflecting late sixteenth-century chiefdom consolidation across the York and James estuaries [@gallivan2007werowocomoco; @rountree1989powhatan]. Upstream on the Potomac, Piscataway centre Accokeek Creek (Moyaone) expanded from 520 in 1300 AD to 1.200 in 1500 AD before easing slightly to 1.150 in 1600 AD [@stephenson1963accokeek].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">State</th><th class="crd-th">Status</th><th class="crd-th">Disposition Reason</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Johnston Site</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>RI-1000-Narragansett</strong></td><td class="crd-td">Rhode Island</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Mystic-Pequot Fort</strong></td><td class="crd-td">Connecticut</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Caughnawaga-Mohawk</strong></td><td class="crd-td">New York</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Schodack-Mahican</strong></td><td class="crd-td">New York</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Onondaga</strong></td><td class="crd-td">New York</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Schultz-Susquehannock</strong></td><td class="crd-td">Pennsylvania</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Abbott Farm</strong></td><td class="crd-td">New Jersey</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Werowocomoco</strong></td><td class="crd-td">Virginia</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Accokeek Creek</strong></td><td class="crd-td">Maryland</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Ganondagan</strong></td><td class="crd-td">New York</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Cactus Hill</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
<tr><td class="crd-td"><strong>Ajacán</strong></td><td class="crd-td">Virginia</td><td class="crd-td">excluded</td><td class="crd-td">unlocated historical toponym</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source ledger disposition for all 13 Mid-Atlantic (HU 02) candidate sites.</figcaption>
</figure>

# Limitations

Sixteenth-century Haudenosaunee and Susquehannock village trajectories compress periodic multi-kilometre site relocations onto stable canonical coordinates (such as Onondaga and Ganondagan) to preserve multi-century time-series continuity in Stadestér 2.0 [@tuck1971onondaga; @kelly2025]. Dispersed Lenape and Piedmont Algonquian farmsteads lacking compact palisaded enclosures remain represented in the continuous radiocarbon rural surface [@kraft2001lenape].

# Sources

<div id="refs"></div>
