---
title: "Settlement Gazetteer of the Rio Grande Hydrological Unit (HU 13)"
subtitle: "CENTAUR-II: Verified Pueblos, Chacoan Great Houses and Conchos Borderlands, 800 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: rio_grande_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_rio_grande_spatial.png"
hero_caption: "Spatial distribution of ten verified settlements across the three areal divisions of the Rio Grande Hydrological Unit (346,71k km²) from 800 AD to 1600 AD."
hero_label: "fig:hero-rio-grande-gaz"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles verified settlement trajectories for the Rio Grande Hydrological Unit (HU 13) from `800 AD` to `1600 AD`, accompanying the regional demographic synthesis under CENTAUR-II. Out of `13` documented archaeological and ethnohistoric candidate sites evaluated in `rio_grande_source_ledger.json5`, `10` permanently settled pueblos and towns satisfy bounded demographic criteria in `rio_grande_settlements.json`, while `3` entries (`Sandia Cave`, `Bonfire Shelter` and `Tiguex Province Villages`) are excluded as ephemeral shelters or unlocated collective chronicle labels. Enumerated settlements span from the eleventh-century Chacoan centre of `Pueblo Bonito` (`3,2k` at `1100 AD`) and Mimbres `Galaz Ruin` (`850` at `1100 AD`) to late precontact and early colonial Pueblo IV-V plaza towns including `Pecos Pueblo` (`2,1k`), `Taos Pueblo` (`1,8k`), `Acoma Pueblo` (`1,65k`), `Sapawe` (`1,45k`), `Kuaua` (`1,45k`), `Gran Quivira` (`1,45k`), `Picuris Pueblo` (`1,35k`) and `La Junta de los Rios` (`650` at `1500 AD`).

# Background

Settlement archaeology in HU 13 reflects a two-stage nucleation sequence confirmed by Kelly et al. [@kelly2025] radiocarbon trends (`N = 2.934`, peak `1112 AD`) and Pueblo room-block excavations [@adler1996; @cordell2012]. Before `1200 AD`, major population centres lay in Chaco Canyon and the Mimbres-Jornada south (`Pueblo Bonito` and `Galaz Ruin`) [@lekson2006; @anyon2017]. Following twelfth- and thirteenth-century droughts, regional populations aggregated into large multi-storey adobe and masonry plaza towns along the Upper Rio Grande, Chama, Galisteo, Salinas and Acoma mesas, as well as sedentary farming villages at the Rio Conchos confluence [@ortman2012; @kelley1986].

# Methodology

## Inclusion Criteria and Schema Discipline

Each candidate in `rio_grande_source_ledger.json5` was audited against four requirements: (1) surveyed WGS84 coordinates `[lat, lng]`, (2) verified residential room counts or ethnohistoric household returns spanning at least two benchmark horizons, (3) non-duplication with adjacent settlements and (4) canonical `.sources = ["CENTAUR"]` attribution in `rio_grande_settlements.json`. Detailed bibliographic provenance resides in `rio_grande_settlement_gazetteer.bib` and the ledger rather than raw settlement records.

## Room-Block and Chronicle Estimation

Peak populations derive from excavated or mapped ground-floor room counts multiplied by regional occupancy rates (`0,65-0,80` active rooms per phase) and `4,5` persons per household, cross-checked against early Spanish entrada counts by Coronado (`1540-1542 AD`) and Oñate (`1598 AD`) [@kidder1958; @hayes1981; @vierra1989].

# Testing and Validation

Exhaustiveness verification against `rio_grande_settlements.json` and `rio_grande_source_ledger.json5` passed with `0` unaccounted candidates and `0` coordinate or schema errors at `GMT+0`:

1. **Included Records**: `10` sites (`6` in Upper Pueblos, `3` in Middle RG-Salinas and `1` in Pecos-Lower RG).
2. **Excluded Candidates**: `2` seasonal camps (`Sandia Cave`, `Bonfire Shelter`) and `1` collective chronicle label (`Tiguex Province Villages`).

<figure class="crd-figure-block" id="fig:rg-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-rio-grande-settlements/fig4_rio_grande_settlements.png" alt="fig:rg-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading peak populations across the ten verified settlements of Rio Grande (HU 13).</figcaption>
</figure>

# Results

## Included Pueblo and Borderlands Settlements

Table \ref{tab:rg-included} presents all `10` verified settlements ordered by sub-region and peak demographic magnitude. `Pueblo Bonito` peaks earliest at `3,2k` in `1100 AD` before contracting to `1,4k` in `1200 AD` as Chacoan regional authority dissolved [@lekson2006; @crown1991]. In the Mimbres basin, `Galaz Ruin` rises from `580` in `1000 AD` to `850` in `1100 AD` prior to the Classic Mimbres dispersal [@anyon2017].

Between `1300 AD` and `1500 AD`, Northern and Eastern Pueblo plaza towns expand rapidly. `Pecos Pueblo` (`Cicuye`) reaches `2,1k` in `1500 AD` before sliding to `1,5k` by `1600 AD` [@kidder1958], while `Taos Pueblo` (`1,8k`), `Acoma Pueblo` (`1,65k`), `Sapawe` (`1,45k`), `Kuaua` (`1,45k`), `Gran Quivira` (`1,45k`) and `Picuris Pueblo` (`1,35k`) anchor the upper and middle valley corridors [@ortman2012; @brown1999; @hayes1981; @vierra1989]. Further south, `La Junta de los Rios` maintains `420-650` inhabitants across `1200-1600 AD` through floodplain maize-squash cultivation along the Rio Grande-Conchos junction [@kelley1986].

<figure class="crd-table-figure" id="tab:rg-included">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pueblo Bonito (Upper Pueblos)</strong></td><td class="crd-td">800-1200AD</td><td class="crd-td">3,2k (1100AD)</td><td class="crd-td">36,06, -107,96</td></tr>
<tr><td class="crd-td"><strong>Taos Pueblo (Upper Pueblos)</strong></td><td class="crd-td">1100-1600AD</td><td class="crd-td">1,8k (1500AD)</td><td class="crd-td">36,44, -105,55</td></tr>
<tr><td class="crd-td"><strong>Pecos Pueblo (Upper Pueblos)</strong></td><td class="crd-td">1300-1600AD</td><td class="crd-td">2,1k (1500AD)</td><td class="crd-td">35,55, -105,69</td></tr>
<tr><td class="crd-td"><strong>Picuris Pueblo (Upper Pueblos)</strong></td><td class="crd-td">1200-1600AD</td><td class="crd-td">1,4k (1500AD)</td><td class="crd-td">36,2, -105,71</td></tr>
<tr><td class="crd-td"><strong>Sapawe (Upper Pueblos)</strong></td><td class="crd-td">1400-1500AD</td><td class="crd-td">1,4k (1400AD)</td><td class="crd-td">36,22, -106,22</td></tr>
<tr><td class="crd-td"><strong>Acoma Pueblo (Middle RG-Salinas)</strong></td><td class="crd-td">1100-1600AD</td><td class="crd-td">1,6k (1500AD)</td><td class="crd-td">34,9, -107,58</td></tr>
<tr><td class="crd-td"><strong>Kuaua (Upper Pueblos)</strong></td><td class="crd-td">1300-1550AD</td><td class="crd-td">1,4k (1500AD)</td><td class="crd-td">35,33, -106,54</td></tr>
<tr><td class="crd-td"><strong>Gran Quivira (Middle RG-Salinas)</strong></td><td class="crd-td">1300-1600AD</td><td class="crd-td">1,4k (1500AD)</td><td class="crd-td">34,26, -106,09</td></tr>
<tr><td class="crd-td"><strong>Galaz Ruin (Middle RG-Salinas)</strong></td><td class="crd-td">1000-1100AD</td><td class="crd-td">850 (1100AD)</td><td class="crd-td">32,83, -107,98</td></tr>
<tr><td class="crd-td"><strong>La Junta de los Rios (Pecos-Lower RG)</strong></td><td class="crd-td">1200-1600AD</td><td class="crd-td">650 (1500AD)</td><td class="crd-td">29,56, -104,37</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified settlements in Rio Grande (HU 13) with occupied spans, peak populations and WGS84 coordinates.</figcaption>
</figure>

## Excluded Ledger Candidates

Three candidate entries in `rio_grande_source_ledger.json5` are retained in the audit trail but omitted from urban point totals to prevent double-counting or demographic distortion. `Sandia Cave` (New Mexico) and `Bonfire Shelter` (Texas) represent intermittent Pleistocene and Archaic shelters without residential village footprints [@miller2023], while `Tiguex Province Villages` is a collective `1540 AD` Spanish chronicle grouping whose principal excavated Tiwa centre is already enumerated under `Kuaua` [@vierra1989].

<figure class="crd-table-figure" id="tab:rg-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sandia Cave (New Mexico)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Ephemeral Pleistocene-Holocene cave shelter without permanent settlement demography.</td></tr>
<tr><td class="crd-td"><strong>Bonfire Shelter (Texas)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Episodic Palaeoindian and Late Archaic bison-jump shelter rather than a residential settlement.</td></tr>
<tr><td class="crd-td"><strong>Tiguex Province Villages (New Mexico)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">unlocated historical toponym</td><td class="crd-td">Collective 1540 Coronado chronicle label for twelve Tiwa pueblos; principal excavated town captured under Kuaua.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded candidate sites documented in the Rio Grande (HU 13) source ledger.</figcaption>
</figure>

# Limitations

Small Pueblo IV satellite villages (`< 300` inhabitants) across the Galisteo Basin, Jemez Plateau and Piro province are aggregated into sub-regional rural density strata rather than enumerated individually, leaving the `10`-site gazetteer weighted toward major regional centres [@adler1996; @liebmann2016]. Coordinates for `La Junta de los Rios` mark the Presidio-Ojinaga confluence centre rather than individual dispersed rancherías across the valley floor [@kelley1986].

# Sources

<div id="refs"></div>
