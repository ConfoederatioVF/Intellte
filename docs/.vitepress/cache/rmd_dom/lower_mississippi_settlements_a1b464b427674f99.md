---
title: "Settlement Gazetteer of the Lower Mississippi Hydrological Unit (HU 08)"
subtitle: "CENTAUR-II: Archaic Earthworks, Plaquemine Centres and Late Mississippian Towns, -4000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: lower_mississippi_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_lower_mississippi_spatial.png"
hero_caption: "Locations of eighteen verified mound towns and archaic earthworks across the Lower Mississippi Hydrological Unit (249,99k km²) from 4000 BC to 1600 AD."
hero_label: "fig:hero-lower-mississippi-gaz"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles verified settlement population series for the Lower Mississippi Hydrological Unit (HU 08) from `4000 BC` (`-4000 AD`) to `1600 AD`. Of `20` candidate sites audited in `lower_mississippi_source_ledger.json5`, `18` bounded monumental complexes and palisaded towns enter `lower_mississippi_settlements.json`, while `2` candidates (`Jaketown` and `Pacaha / Quizquiz`) are excluded as an unquantified Poverty Point microblade locality and overlapping chronicle polity labels. The series spans from Middle-Late Archaic `Watson Brake` (`260` at `3000 BC`) and `Poverty Point` (`1,8k` at `1000 BC`) through Woodland `Marksville` (`780`), `Greenhouse-Troyville` (`950`) and `Toltec Mounds` (`1,45k`) to Mississippian and Plaquemine centres led by `Kincaid Mounds` (`2,4k`), `Nodena` (`2,2k`), `Lake George` (`2,2k`), `Parkin` (`2,1k`), `Winterville` (`2,1k`), `Emerald Mound` (`2,1k`) and the `Grand Village of the Natchez` (`1,75k`).

# Background

Monumental mound construction in HU 08 spans more than five millennia, starting with earthen ring complexes in Louisiana (`Watson Brake` and `Poverty Point`) [@saunders1997; @gibson2000] and continuing through Middle-Late Woodland geometric plazas (`Marksville`, `Greenhouse-Troyville`, `Toltec Mounds`) [@toth1988; @ford1951; @rolingson1998]. After `1000 AD`, Mississippian and Plaquemine civic-ceremonial towns grew across the St. Francis, Yazoo and Natchez meander belts, peaking in aggregate radiocarbon signal around `1177 AD` (`N = 828`) [@kelly2025] and reaching high late precontact palisaded nucleation in `1400-1540 AD` [@morse1983; @brain1989; @williams1983].

# Methodology

## Inclusion Criteria and Schema Audit

All `20` candidates in `lower_mississippi_source_ledger.json5` were verified for WGS84 coordinates, excavated plaza or residential zone bounds and distinct spatial identities. Included records in `lower_mississippi_settlements.json` carry `.sources = ["CENTAUR"]` exclusively, with site-level monographs cited here and in the ledger.

## Earthwork and Town Population Calibration

Settlement estimates derive from palisaded village hectares (`Parkin`, `Nodena`, `Chucalissa`), domestic midden rings (`Poverty Point`, `Watson Brake`) and mound-plaza residential catchments (`Winterville`, `Lake George`, `Emerald Mound`, `Fatherland`) [@gibson2000; @morse1983; @brain1989; @williams1983; @neitzel1965].

# Testing and Validation

Exhaustiveness checks on `lower_mississippi_settlements.json` and `lower_mississippi_source_ledger.json5` returned `0` errors at `GMT+0`:

1. **Included Settlements**: `18` sites (`8` in St. Francis-Memphis, `9` in Yazoo-Ouachita and `1` in Natchez-Delta).
2. **Excluded Candidates**: `1` unquantified Archaic ritual locality (`Jaketown`) and `1` overlapping chronicle polity label (`Pacaha / Quizquiz`).

<figure class="crd-figure-block" id="fig:lm-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-lower-mississippi-settlements/fig4_lower_mississippi_settlements.png" alt="fig:lm-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size profile and leading peak populations across the eighteen verified settlements of Lower Mississippi (HU 08).</figcaption>
</figure>

# Results

## Included Earthworks and Mound Towns

Table \ref{tab:lm-included} lists all `18` verified settlements. Earliest occupation appears at `Watson Brake` (`180-260`, `4000-3000 BC`) [@saunders1997] and `Poverty Point` (`450-1,8k`, `2000-1000 BC`) [@gibson2000], followed by Woodland mound centres `Marksville` (`780` at `200 AD`) [@toth1988], `Greenhouse-Troyville` (`950` at `600 AD`) [@ford1951] and `Toltec Mounds` (`1,45k` at `800 AD`) [@rolingson1998].

Among Mississippian and Plaquemine towns (`1100-1600 AD`), northern valley centres include `Kincaid Mounds` (`2,4k` at `1300 AD`), `Shiloh Indian Mounds` (`980` at `1200 AD`) and `Jonathan Creek` (`780` at `1200 AD`) along the Cairo-Kentucky border [@cobb2002; @welch2006], plus late St. Francis-Arkansas towns `Nodena` (`2,2k` at `1500 AD`), `Parkin` (`2,1k` at `1500 AD`), `Carden Bottoms` (`1,45k` at `1500 AD`) and `Chucalissa` (`1,35k` at `1400 AD`) [@morse1983; @mitchem1996]. Yazoo-Red-Natchez centres encompass `Lake George` (`2,2k` at `1400 AD`), `Winterville` (`2,1k` at `1300 AD`), `Emerald Mound` (`2,1k` at `1400 AD`), `Grand Village of the Natchez` (`1,75k` at `1500 AD`), `Battle Mound` (`1,65k` at `1400 AD`) and deltaic `Medora-Houma` (`920` at `1500 AD`) [@williams1983; @brain1989; @neitzel1965].

<figure class="crd-table-figure" id="tab:lm-included">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Shiloh Indian Mounds (St. Francis-Memphis)</strong></td><td class="crd-td">1100AD-1300AD</td><td class="crd-td">980 (1200AD)</td><td class="crd-td">35,15, -88,32</td></tr>
<tr><td class="crd-td"><strong>Jonathan Creek (St. Francis-Memphis)</strong></td><td class="crd-td">1100AD-1300AD</td><td class="crd-td">780 (1200AD)</td><td class="crd-td">36,82, -88,24</td></tr>
<tr><td class="crd-td"><strong>Toltec Mounds (St. Francis-Memphis)</strong></td><td class="crd-td">600AD-1000AD</td><td class="crd-td">1,4k (800AD)</td><td class="crd-td">34,65, -92,06</td></tr>
<tr><td class="crd-td"><strong>Parkin (St. Francis-Memphis)</strong></td><td class="crd-td">1300AD-1550AD</td><td class="crd-td">2,1k (1500AD)</td><td class="crd-td">35,28, -90,56</td></tr>
<tr><td class="crd-td"><strong>Nodena (St. Francis-Memphis)</strong></td><td class="crd-td">1400AD-1550AD</td><td class="crd-td">2,2k (1500AD)</td><td class="crd-td">35,62, -89,95</td></tr>
<tr><td class="crd-td"><strong>Chucalissa (St. Francis-Memphis)</strong></td><td class="crd-td">1100AD-1550AD</td><td class="crd-td">1,4k (1400AD)</td><td class="crd-td">35,06, -90,13</td></tr>
<tr><td class="crd-td"><strong>Poverty Point (Yazoo-Ouachita)</strong></td><td class="crd-td">2000BC-1000BC</td><td class="crd-td">1,8k (1000BC)</td><td class="crd-td">32,64, -91,41</td></tr>
<tr><td class="crd-td"><strong>Watson Brake (Yazoo-Ouachita)</strong></td><td class="crd-td">4000BC-3000BC</td><td class="crd-td">260 (3000BC)</td><td class="crd-td">32,35, -92,14</td></tr>
<tr><td class="crd-td"><strong>Winterville (Yazoo-Ouachita)</strong></td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">2,1k (1300AD)</td><td class="crd-td">33,49, -91,06</td></tr>
<tr><td class="crd-td"><strong>Lake George (Yazoo-Ouachita)</strong></td><td class="crd-td">1000AD-1500AD</td><td class="crd-td">2,2k (1400AD)</td><td class="crd-td">32,85, -90,71</td></tr>
<tr><td class="crd-td"><strong>Marksville (Yazoo-Ouachita)</strong></td><td class="crd-td">0AD-400AD</td><td class="crd-td">780 (200AD)</td><td class="crd-td">31,13, -92,05</td></tr>
<tr><td class="crd-td"><strong>Grand Village of the Natchez (Yazoo-Ouachita)</strong></td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1,8k (1500AD)</td><td class="crd-td">31,54, -91,38</td></tr>
<tr><td class="crd-td"><strong>Emerald Mound (Yazoo-Ouachita)</strong></td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">2,1k (1400AD)</td><td class="crd-td">31,64, -91,25</td></tr>
<tr><td class="crd-td"><strong>Greenhouse-Troyville (Yazoo-Ouachita)</strong></td><td class="crd-td">400AD-800AD</td><td class="crd-td">950 (600AD)</td><td class="crd-td">31,63, -91,82</td></tr>
<tr><td class="crd-td"><strong>Medora-Houma (Natchez-Delta)</strong></td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">920 (1500AD)</td><td class="crd-td">30,18, -91,17</td></tr>
<tr><td class="crd-td"><strong>Kincaid Mounds (St. Francis-Memphis)</strong></td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">2,4k (1300AD)</td><td class="crd-td">37,08, -88,49</td></tr>
<tr><td class="crd-td"><strong>Carden Bottoms (St. Francis-Memphis)</strong></td><td class="crd-td">1400AD-1550AD</td><td class="crd-td">1,4k (1500AD)</td><td class="crd-td">35,15, -92,95</td></tr>
<tr><td class="crd-td"><strong>Battle Mound (Yazoo-Ouachita)</strong></td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1,6k (1400AD)</td><td class="crd-td">33,24, -93,76</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified settlements in Lower Mississippi (HU 08) with occupied spans, peak populations and WGS84 coordinates.</figcaption>
</figure>

## Excluded Ledger Candidates

Two candidate entries in `lower_mississippi_source_ledger.json5` are omitted from urban totals. `Jaketown` (Mississippi) represents a Poverty Point microblade and earthwork locality lacking bounded resident population counts [@gibson2000], while `Pacaha / Quizquiz` (Arkansas) refers to `1541 AD` De Soto chronicle provinces whose constituent settlements duplicate the excavated `Nodena` and `Parkin` complexes [@morse1983; @hudson1997].

<figure class="crd-table-figure" id="tab:lm-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jaketown (Mississippi)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Poverty Point-era mound/microblade locality whose transient ritual-camp resident population remains unquantified.</td></tr>
<tr><td class="crd-td"><strong>Pacaha / Quizquiz (Arkansas)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">unlocated historical toponym</td><td class="crd-td">1541 De Soto chronicle polities whose individual satellite towns overlap Nodena and Parkin complexes without unique site bounds.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded candidate sites documented in the Lower Mississippi (HU 08) source ledger.</figcaption>
</figure>

# Limitations

Borderland sites `Kincaid Mounds`, `Shiloh Indian Mounds` and `Jonathan Creek` overlap frontier catchments shared with HU 06 (`Cumberland`) and HU 05 (`Ohio River`) and are deduplicated during macro-regional Stadestér 2.0 compilation. Dispersed Plaquemine hamlets across the Atchafalaya and Tensas backswamps remain absorbed into rural density priors [@brain1989].

# Sources

<div id="refs"></div>
