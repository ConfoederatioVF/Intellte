---
title: "Great Basin Hydrological Unit (HU 16): Settlement Gazetteer"
subtitle: "CENTAUR-II: Fremont Oasis Villages, Marsh Fisheries and Owens Valley Centres, 2000BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: great_basin_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_great_basin_spatial.png"
hero_caption: "Spatial distribution of six verified Fremont village, wetland marsh and irrigated desert settlements across Great Basin Hydrological Unit 16."
hero_label: "fig:hero-great-basin"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This gazetteer compiles verified WGS84 coordinates, occupational spans and benchmark population series for six excavated settlement and semi-sedentary wetland complexes across Great Basin Hydrological Unit 16 from 2000BC to 1600AD [@kelly2025; @bird2022p3k14c]. The inventory spans Parowan Gap-Paragonah and Nawthis Village in the Utah Fremont zone, Stillwater Marsh and Lovelock Cave in the western Nevada Carson-Humboldt sinks, Bishop-Owens Valley irrigated Paiute settlements in eastern California and Wardell-Green River as a northeastern conditioning site [@meighan1956paragonah; @kelly2001marsh; @lawton1976owens; @frison1973wardell]. Source-ledger reconciliation confirms all six included centres and two excluded Archaic rockshelters (`Danger Cave` and `Hogup Cave`) with zero unaccounted candidates.



# Background

Durable Great Basin habitations formed where perennial water intersected fertile alluvial fans or productive lacustrine marshes. Along the eastern Great Basin rim, Parowan Fremont farmers built adobe granaries and pithouse villages at Paragonah (peaking at 740 in 1100AD) and Nawthis Village (480 in 1100AD) [@meighan1956paragonah; @finley2020fremont]. In the Lahontan Basin of western Nevada, long-duration marsh adaptations at Lovelock Cave and Stillwater Marsh sustained semi-sedentary cattail, bulrush and tui chub harvesting from the second millennium BC to contact [@kelly2001marsh]. Further south, Paiute communities in Owens Valley (`Payahuunadu`) constructed earth-ditch networks around Bishop to irrigate wild nut-grass and seed plots, reaching 640 inhabitants in 1600AD [@lawton1976owens; @bettinger1982numic].

# Methodology

## Gazetteer Compilation and Exclusion Rules

Candidates were screened under Stadestér 2.0 criteria requiring verified `[lat, lng]` coordinates, dated cultural horizons and quantified village or marsh-cluster headcounts [@bird2022p3k14c; @kelly2025]. Deeply stratified Archaic foraging caves lacking bounded village residency (`Danger Cave` and `Hogup Cave`) are documented as excluded in `great_basin_source_ledger.json5` and incorporated within sub-regional background totals [@jennings1957danger]. Benchmark years follow GMT+0.

## Village and Wetland-Cluster Estimation

Fremont village figures derive from excavated pithouse and surface-granary counts scaled by phase contemporaneity [@meighan1956paragonah; @finley2020fremont]. Wetland-complex estimates for Stillwater Marsh, Lovelock Cave and Bishop-Owens Valley aggregate contemporaneous residential house-pit clusters and ethnohistorically documented irrigated band territories [@kelly2001marsh; @lawton1976owens].

# Testing and Validation

Ledger checks verify exact correspondence between the six included settlements in `great_basin_source_ledger.json5` and `great_basin_settlements.json`, alongside two excluded Desert Archaic caves (`Danger Cave` and `Hogup Cave`). Chronological validation reproduces the sub-regional structural divergence: Fremont villages peak in 1100AD and terminate by 1200AD, whereas Stillwater Marsh rebounds from 340 in 1400AD to 460 in 1600AD and Bishop-Owens Valley climbs steadily to 640 in 1600AD [@kelly2001marsh; @lawton1976owens].

# Results

## Verified Settlement Gazetteer

Table \ref{tab:gazetteer-great-basin} presents all six verified sites across HU 16, and Figure \ref{fig:settlements-great-basin} plots the rank-size hierarchy led by Parowan Gap-Paragonah (740), Bishop-Owens Valley (640), Nawthis Village (480) and Stillwater Marsh (480).

<figure class="crd-table-figure" id="tab:gazetteer-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">0AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wardell-Green River</strong></td><td class="crd-td">Wyoming</td><td class="crd-td">42,63, -110,05</td><td class="crd-td">400AD-1000AD</td><td class="crd-td">310</td><td class="crd-td">-</td><td class="crd-td">310</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Parowan Gap-Paragonah</strong></td><td class="crd-td">Utah</td><td class="crd-td">37,88, -112,77</td><td class="crd-td">800AD-1200AD</td><td class="crd-td">740</td><td class="crd-td">-</td><td class="crd-td">380</td><td class="crd-td">740</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nawthis Village</strong></td><td class="crd-td">Utah</td><td class="crd-td">38,8, -111,77</td><td class="crd-td">800AD-1100AD</td><td class="crd-td">480</td><td class="crd-td">-</td><td class="crd-td">240</td><td class="crd-td">480</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Stillwater Marsh</strong></td><td class="crd-td">Nevada</td><td class="crd-td">39,53, -118,48</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">480</td><td class="crd-td">280</td><td class="crd-td">420</td><td class="crd-td">480</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lovelock Cave</strong></td><td class="crd-td">Nevada</td><td class="crd-td">39,96, -118,56</td><td class="crd-td">2000BC-1500AD</td><td class="crd-td">350</td><td class="crd-td">240</td><td class="crd-td">310</td><td class="crd-td">350</td><td class="crd-td">260</td></tr>
<tr><td class="crd-td"><strong>Bishop-Owens Valley</strong></td><td class="crd-td">California</td><td class="crd-td">37,36, -118,39</td><td class="crd-td">600AD-1600AD</td><td class="crd-td">640</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">520</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified Fremont, wetland marsh and Owens Valley settlements in Great Basin HU 16 with coordinates, spans and benchmark populations.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:settlements-great-basin">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-basin-settlements/fig4_great_basin_settlements.png" alt="fig:settlements-great-basin" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement hierarchy across the six verified complexes in Great Basin HU 16.</figcaption>
</figure>

## Source Ledger Audit

Table \ref{tab:ledger-great-basin} records all eight evaluated candidates from `great_basin_source_ledger.json5`.

<figure class="crd-table-figure" id="tab:ledger-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Status</th><th class="crd-th">Ledger Classification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wardell-Green River</strong></td><td class="crd-td">Wyoming</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Parowan Gap-Paragonah</strong></td><td class="crd-td">Utah</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Nawthis Village</strong></td><td class="crd-td">Utah</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Stillwater Marsh</strong></td><td class="crd-td">Nevada</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Lovelock Cave</strong></td><td class="crd-td">Nevada</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Bishop-Owens Valley</strong></td><td class="crd-td">California</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Danger Cave</strong></td><td class="crd-td">Utah</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
<tr><td class="crd-td"><strong>Hogup Cave</strong></td><td class="crd-td">Utah</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source-ledger reconciliation for Great Basin HU 16 showing six included sites and two excluded Archaic cave deposits.</figcaption>
</figure>

# Limitations

Three limitations affect site-level resolution in HU 16. First, Stillwater Marsh and Lovelock Cave represent multi-locus wetland catchment clusters rather than compact walled towns, meaning reported totals aggregate contemporaneous marsh-rim camps [@kelly2001marsh]. Second, `Wardell-Green River`, `Parowan Gap-Paragonah` and `Nawthis Village` lie along the HU 14-HU 15-HU 16 hydrological divide and are deduplicated during continental Stadestér 2.0 compilation [@frison1973wardell; @meighan1956paragonah]. Third, dispersed Shoshone winter camps across central Nevada lacked fixed architecture and are captured solely in sub-regional carrying capacities [@bettinger1982numic].

# Sources

<div id="refs"></div>
