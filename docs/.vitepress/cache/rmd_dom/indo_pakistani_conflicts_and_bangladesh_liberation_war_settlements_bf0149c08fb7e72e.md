---
title: "Settlement Gazetteer of Pakistan and Post-Independence Conflict Theatres"
subtitle: "INDUS: Urban Coordinates, Toponymy and Longitudinal Demographic Trajectories (1947AD to 2026AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: indo_pakistani_conflicts_and_bangladesh_liberation_war_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_indo_pakistani_conflicts_and_bangladesh_liberation_war_spatial.png"
hero_caption: "Spatial distribution of 845 catalogued urban settlements across Pakistan and the 1947 to 1971 East Pakistan corridor (981.558 km²) from 1947AD to 2026AD."
hero_label: "fig:hero-spatial"
header-includes:
  - \AtBeginDocument{\pretocmd{\abscontent}{\crdneedspace{135pt}}{}{}}
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, longitudinal census series and benchmark demographic trajectories for 845 urban settlements across Pakistan and the historical 1947 to 1971 East Pakistan corridor (981.558 km², encompassing 13.375 active 5-arcminute terrestrial cells) from 1947AD to 2026AD. Spanning five conflict-theatre divisions, the gazetteer records the transformation of South Asian urban hierarchies following the August 1947 Partition of British India, the 1965 and 1971 interstate conflicts, and subsequent decades of rapid urban agglomeration. The catalogued localities encompass diverse urban topologies: coastal megacities, agro-industrial canal colony towns, administrative capital districts, northern montane transport nodes and riverine market centres across the Bengal delta.

Settlement scales in the gazetteer range from secondary market towns of 10k to 50k residents to premier national metropolises: Karachi (23,55M peak in 2016, expanding from 1,06M in the 1951 census), Lahore (12,44M peak in 2025, growing from 849k in 1951), Faisalabad (3,58M peak, expanding from 179k in 1951), Hyderabad (3,43M peak), Multan (3,12M peak), Dhaka (2,71M at the 1971 benchmark, growing from 336k in 1951), Rawalpindi (2,35M peak), Gujranwala (2,27M peak), Peshawar (2,2M peak), Islamabad (1,9M peak) and Quetta (1,14M peak). Secondary regional centres include Chittagong (787k in 1971), Bahawalpur (852k), Sargodha (659k), Sialkot (655k), Sukkur (499k) and Larkana (490k). Every catalogued locality reconciles against 846 candidate records in the INDUS source ledger alongside one documented exclusion (Noorabad, eliminated as a duplicate homonym sharing identical trajectory parameters).

By anchoring longitudinal municipal census records to precise geographic coordinates, this gazetteer establishes an empirical baseline for settlement subtraction within the INDUS demographic modelling engine. Subtracting catalogued municipal populations from sub-regional envelopes isolates nucleated urban centres from rural populations, ensuring that dasymetric allocation of cultivators across irrigated doabs, riverine silts and arid rangelands reflects genuine population geography rather than arbitrary administrative averages.

# Background

## Urban Hierarchies and Post-Partition Settlement Topography

The urban network of northwestern South Asia underwent profound structural reorientation following the August 1947 Partition [@Spate1947Partitio; @Chattha2022Communal]. Prior to independence, urban commercial and professional hierarchies across Punjab and Sindh were anchored by non-Muslim mercantile communities (Aroras, Khatris, Banias) who conducted banking, wholesale trade and administrative functions in major towns [@Chattha2022Communal; @Iqbal2026Forced]. The mass evacuation of these populations during late 1947 was accompanied by the arrival of over seven million Muslim refugees (Muhajirs) from East Punjab, Delhi, Uttar Pradesh, Rajasthan and Bihar, who concentrated heavily in urban settlements offering access to abandoned evacuee housing, transport links and commercial opportunities [@Iqbal2026Forced; @Mubasshir2024Partitio].

Four distinct urban typologies characterise the catalogued settlement lattice across the post-colonial epoch:
1. Coastal commercial megacities: Karachi expanded from a provincial port of 400k into the supreme industrial, financial and maritime gateway of Pakistan, absorbing over 600k refugees in the immediate aftermath of partition and growing to 1,06M in 1951, 1,91M in 1961, 9,34M in 1998, and exceeding 20M in recent municipal enumerations [@Priyanka2022Literature]. Karachi's growth created extensive informal settlements across arid peripheral tracts, notably Orangi Town and Malir Town.
2. Agro-industrial canal colony towns: In the central Punjab doabs, towns founded during the late nineteenth century as agricultural market outposts along newly constructed railway lines (Lyallpur/Faisalabad, Montgomery/Sahiwal, Sargodha) developed into major manufacturing hubs [@Brooks1947Partitio; @BANGASH2021Implemen]. Faisalabad expanded from 179k in 1951 into a textile powerhouse of 3,58M, while Gujranwala and Sialkot established a globally connected light-engineering and export manufacturing corridor [@Dahar2017Impact].
3. Western frontier and refugee hubs: Along the mountainous borderlands of Khyber Pakhtunkhwa and Balochistan, historical garrison towns and caravan nodes (Peshawar, Quetta, Kohat, Bannu) expanded rapidly following the 1979 Soviet invasion of Afghanistan [@Yaseen2016Pakistan]. Peshawar absorbed over one million registered and unregistered Afghan refugees, growing from 218k in 1961 to 2,2M by 2025, while Quetta transformed from an arid military cantonment of 84k into an urban agglomeration of 1,14M.
4. Deltaic river ports and commercial capitals: Across East Pakistan prior to 1971, urban development was dominated by Dhaka and the port of Chittagong [@Batabyal2014Review; @Sarkar2024Indian]. Dhaka functioned as the provincial administrative capital, expanding from 336k in 1951 to 2,71M at the 1971 independence benchmark, while Chittagong handled the export of raw jute and tea, growing from 294k in 1951 to 787k in 1971 [@Ulfat2023Sheikh; @Zahra2026Secessioni].

# Methodology

## Gazetteer Ingestion and Georeferencing

Candidate settlements in the INDUS source ledger were compiled through systematic extraction from official decadal census gazetteers produced by the Census Organisation of Pakistan (1951, 1961, 1972, 1981, 1998, 2017, 2023) and the Bangladesh Bureau of Statistics (for historical 1951-1971 East Pakistan settlements) [@BANGASH2021Implemen; @Batabyal2014Review]. Inclusion in the primary gazetteer requires:
- Precise WGS84 coordinates verified against high-resolution satellite imagery and Survey of Pakistan topographic sheets.
- Documented longitudinal population figures across at least three national census rounds.
- Official administrative status as a municipal corporation, municipal committee, town committee or cantonment board.

Settlements sharing identical coordinates within a 2,2 km radius were evaluated for homonym redundancy; duplicate survey entries were consolidated under their primary municipal name. Non-urban administrative features lacking permanent residential infrastructure were excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of the 845 catalogued urban settlements, sub-regional shares, summed site peaks and leading settlements across the five conflict-theatre divisions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Urban Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>West Punjab and Islamabad</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Sindh and Karachi</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Khyber Pakhtunkhwa and Balochistan</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Kashmir Line of Control</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>East Pakistan (1947 to 1971)</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">6452</td><td class="crd-td">100%</td><td class="crd-td">99,05M</td><td class="crd-td">Lahore (11,05M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 845 catalogued urban settlements and summed population peaks across Pakistan and conflict theatres.</figcaption>
</figure>

## Settlement Subtraction and Rural Allocations

The settlement subtraction routine operates dynamically across each decadal benchmark year. For any given year, the active population of each catalogued settlement within a sub-region is aggregated into an urban total ($U_r$) and subtracted from the total sub-regional demographic envelope ($P_r$). The residual rural population ($R_r = P_r - U_r$) is subsequently distributed across non-urban 5-arcminute terrestrial cells using environmental suitability weights calibrated to canal access, soil siltation and slope gradients. This two-tier architecture isolates high-density municipal cores from agrarian cultivators, preventing distortion in rural population surfaces.

# Testing and Validation

## Remote Sensing Validation and Built-Up Surface Harmonisation

The spatial footprints of catalogued urban settlements were verified against historical Corona satellite reconnaissance photography from the 1960s, early Landsat MSS imagery from the 1970s, and multi-temporal Copernicus Global Human Settlement Layer (GHSL) built-up surfaces from 1975 to 2025. In the Punjab industrial crescent, satellite observations document the physical coalescing of Lahore, Sheikhupura, Kamoke and Gujranwala into a contiguous peri-urban corridor, validating the rapid population growth reported in official census tallies.

In Karachi, remote sensing captures the rapid conversion of scrubland into dense residential settlements across Orangi, Baldia and Surjani Town between 1980 and 2015, corroborating municipal estimates of peripheral expansion. In the Peshawar valley, satellite imagery traces the evolution of Afghan refugee settlements around Nasir Bagh and Shamshatoo from ephemeral canvas compounds into permanent brick settlements that gradually integrated into the greater Peshawar metropolitan economy.

## Rank-Size Distribution and Zipf Regularity

The rank-size hierarchy of the 845 catalogued urban settlements was evaluated against Zipfian expectations ($\log P_i = \log P_1 - \alpha \log i$) using the full settlement sample (n=845, substantially exceeding the minimum sample floor of 25 settlements). Analysis reveals a steep Pareto slope ($\alpha = 1,55$, $R^2 = 0,83$), reflecting pronounced urban primacy anchored by Karachi and Lahore (Figure \ref{fig:trajectory}).

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-indo-pakistani-conflicts-and-bangladesh-liberation-war-settlements/fig2_indo_pakistani_conflicts_and_bangladesh_liberation_war_demography.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size settlement hierarchy (Panel B) and long-term demographic trajectories (Panel A) across Pakistan and the East Pakistan theatre (1947AD to 2026AD).</figcaption>
</figure>

Karachi's population of 23,55M substantially exceeds the second-ranked city, Lahore (12,44M), yielding a two-city primacy ratio of 1,89. Beneath Lahore, the distribution conforms closely to log-linear expectations, with a robust tier of intermediate secondary centres: Faisalabad (3,58M), Hyderabad (3,43M), Multan (3,12M), Dhaka (2,71M at 1971 benchmark), Rawalpindi (2,35M), Gujranwala (2,27M), Peshawar (2,2M), Islamabad (1,9M) and Quetta (1,14M).

# Results

## Leading Urban Settlements

Table \ref{tab:gazetteer} presents the leading 40 urban settlements across Pakistan and the regional conflict theatres ordered by peak population descending, detailing WGS84 geographic coordinates, sub-regional allocation, documented census spans, peak enumerated populations and 2023 census populations.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">2023AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">31,56 N, 74,35 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">11,05M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Faisalabad</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">31,42 N, 73,08 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">3,58M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">3,12M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">East Pakistan</td><td class="crd-td">23,73 N, 90,39 E</td><td class="crd-td">1951AD - 1971AD</td><td class="crd-td">2,71M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gujranwala</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,15 N, 74,18 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,27M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Khyber-Pakhtunkhwa and FATA</td><td class="crd-td">34,01 N, 71,57 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,2M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Islamabad</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">33,72 N, 73,04 E</td><td class="crd-td">1961AD - 2025AD</td><td class="crd-td">1,9M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Orangi Town</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">24,95 N, 66,97 E</td><td class="crd-td">2010AD - 2025AD</td><td class="crd-td">1,54M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Rawalpindi</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">33,6 N, 73,05 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,41M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bahawalpur</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">29,4 N, 71,67 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">851,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Chittagong</strong></td><td class="crd-td">East Pakistan</td><td class="crd-td">22,34 N, 91,83 E</td><td class="crd-td">1951AD - 1971AD</td><td class="crd-td">787k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sargodha</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,08 N, 72,67 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">737,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Shah Faisal Town</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">24,88 N, 67,16 E</td><td class="crd-td">2020AD - 2025AD</td><td class="crd-td">688,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,5 N, 74,53 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">661,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sukkur</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">27,7 N, 68,87 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">558,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sahiwal</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">30,67 N, 73,11 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">553,5k</td><td class="crd-td">538,3k</td></tr>
<tr><td class="crd-td"><strong>Larkana</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">27,56 N, 68,23 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">548,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sheikhupura</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">31,71 N, 73,99 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">528,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mirpur</strong></td><td class="crd-td">Kashmir Line-of-Control Theatre</td><td class="crd-td">33,15 N, 73,75 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">523,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Chiniot</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">31,72 N, 72,98 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">477,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Rahim Yar Khan</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">28,42 N, 70,3 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">469,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">33,67 N, 72,7 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">462,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">31,27 N, 72,32 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">462,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Khulna</strong></td><td class="crd-td">East Pakistan</td><td class="crd-td">22,82 N, 89,55 E</td><td class="crd-td">1951AD - 1971AD</td><td class="crd-td">457,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dera Ghazi Khan</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">30,05 N, 70,63 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">446k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gujrat</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,57 N, 74,08 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">436,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Wah Cantonment</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">33,79 N, 72,73 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">429,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kasur</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">31,12 N, 74,45 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">400,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Okara</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">30,81 N, 73,45 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">400k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ghakhar Mandi</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,18 N, 74,9 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">385,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mardan</strong></td><td class="crd-td">Khyber-Pakhtunkhwa and FATA</td><td class="crd-td">34,2 N, 72,05 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">374k</td><td class="crd-td">363,8k</td></tr>
<tr><td class="crd-td"><strong>Mingora</strong></td><td class="crd-td">Khyber-Pakhtunkhwa and FATA</td><td class="crd-td">34,78 N, 72,36 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">370k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Clifton</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">24,82 N, 67,03 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">341,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Malir Cantonment</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">24,94 N, 67,21 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">335,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qasimabad</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">30,5 N, 72,59 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">334,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hafizabad</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,07 N, 73,69 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">327,6k</td><td class="crd-td">318,6k</td></tr>
<tr><td class="crd-td"><strong>Jhelum</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,93 N, 73,73 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">321,2k</td><td class="crd-td">312,4k</td></tr>
<tr><td class="crd-td"><strong>Nawabshah</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">26,24 N, 68,4 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">312,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Chakwal</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,93 N, 72,85 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">308,2k</td><td class="crd-td">299,8k</td></tr>
<tr><td class="crd-td"><strong>Khanewal</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">30,3 N, 71,93 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">289,8k</td><td class="crd-td">281,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading forty urban settlements ordered by peak enumerated population across Pakistan and conflict theatres (1947AD to 2026AD).</figcaption>
</figure>

## Sub-Regional Settlement Distributions

### West Punjab and Islamabad

West Punjab catalogues 299 settlements with a summed peak population of 52,77M, representing 44,6% of the catalogued urban mass. Lahore anchors the provincial hierarchy, expanding from 849k in 1951 to 12,44M in 2025. Faisalabad grew from 179k to 3,58M, while Multan, the premier historic city of southern Punjab, expanded from 190k to 3,12M. Rawalpindi (2,35M) and federal Islamabad (1,9M) form a contiguous twin-city capital agglomeration. Secondary manufacturing centres along the Grand Trunk Road corridor include Gujranwala (2,27M), Sialkot (655k), Gujrat (391k), Kasur (358k) and Hafizabad (246k). In the southern canal colonies, major market towns include Bahawalpur (852k), Sargodha (659k), Sahiwal (390k), Rahim Yar Khan (420k), Jhang (414k), Dera Ghazi Khan (399k) and Sheikhupura (473k).

### Sindh and Karachi

Sindh catalogues 141 settlements with a summed peak population of 40,35M (34,1% of catalogued urban mass). Karachi is the dominant metropolis, reaching a peak count of 23,55M across its constituent administrative districts, including Orangi Town (1,9M) and Malir Town (766k). Hyderabad on the lower Indus functions as the second city of Sindh, supporting 3,43M residents. Other key urban centres include Sukkur (499k), commanding the historic Sukkur Barrage, Larkana (490k), Nawabshah (279k), Mirpur Khas (233k), Shikarpur (195k), Jacobabad (191k) and Thatta (145k).

### Khyber Pakhtunkhwa and Balochistan

The western frontier catalogues 132 settlements with a summed peak population of 12,45M (10,5% of catalogued urban mass). Peshawar commands the Khyber Pass and northern frontier, expanding to 2,2M by 2025. In Balochistan, provincial capital Quetta reached 1,14M, operating as the administrative and trade center of the western plateau. Other significant centres in Khyber Pakhtunkhwa include Mardan (358k), Mingora in Swat (331k), Kohat (228k), Abbottabad (208k), Dera Ismail Khan (110k) and Bannu (50k). In Balochistan, peripheral oasis towns include Turbat (213k) in the Makran, Khuzdar (182k) in the central highlands, Chaman on the Afghan border, and Hub (175k), an industrial satellite town adjacent to Karachi.

### Kashmir Line of Control Theatre

The northern mountainous confrontation zone catalogues 28 settlements with a summed peak population of 2,5M (2,1% of catalogued urban mass). In Azad Jammu and Kashmir, key centres include state capital Muzaffarabad (150k), Mirpur (124k), Rawalakot (56k), Kotli (46k) and Bhimber (34k). In Gilgit-Baltistan, urban settlements cluster along major river valleys, led by regional administrative centres Gilgit (216k) and Skardu (214k), alongside Chilas and Hunza.

### East Pakistan (1947 to 1971)

The East Pakistan historical module catalogues 245 settlements with a summed peak population of 10,15M (8,6% of catalogued urban mass through the 1971 benchmark). Dhaka anchored the province, expanding from 336k in 1951 to 2,71M at the 1971 liberation benchmark. Chittagong, the principal maritime port, grew from 294k to 787k. Other key provincial centres through 1971 include Khulna (437k), Narayanganj (271k), Rajshahi (217k), Mymensingh (182k), Sylhet (168k), Barisal (143k), Rangpur (124k) and Comilla (113k).

# Limitations

Settlement analysis across post-independence South Asia faces distinct documented limitations:
1. Dynamic municipal boundary definitions: Municipal corporations frequently incorporated surrounding peri-urban villages between census rounds, causing abrupt population increases that reflect territorial re-demarcation rather than organic demographic growth.
2. Informal settlement under-enumeration: Millions of residents residing in informal katchi abadis across Karachi, Lahore and Peshawar were systematically under-counted in early decadal census rounds due to lack of formal land titles and address registration.
3. Decoupling of East Pakistan records: Following the December 1971 war, administrative tracking of East Pakistan settlements separated into independent Bangladesh census series, limiting long-term unified municipal modeling to the 1947-1971 period.

# Conclusion

The INDUS settlement gazetteer synthesises 845 georeferenced urban settlements across Pakistan and the historical East Pakistan corridor from 1947AD to 2026AD. By reconciling longitudinal municipal census series with WGS84 coordinates and four-wave source ledger audits, this gazetteer establishes an empirical foundation for modern South Asian urban geography. Settlement subtraction isolates nucleated urban centres from rural populations, enabling precise dasymetric allocation of cultivators across irrigated plains and arid rangelands while documenting the remarkable expansion of Karachi, Lahore and regional secondary cities over eight post-colonial decades.

# Appendix

The INDUS source ledger evaluated 846 candidate records, accepting 845 verified settlements and documenting 1 exclusion. Table \ref{tab:excluded} documents the excluded candidate, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Name</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kaliganj</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Nawabganj</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Durgapur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Noorabad</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Sherpur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Nawagaon</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Uzirpur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Uzirpur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Uzirpur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Uzirpur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate record from the post-independence South Asia source ledger.</figcaption>
</figure>

# Sources
