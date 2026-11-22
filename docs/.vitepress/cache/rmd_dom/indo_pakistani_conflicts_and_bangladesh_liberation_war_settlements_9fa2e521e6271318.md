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
hero_caption: "Spatial distribution of 14.139 catalogued settlements across Pakistan and the 1947 to 1971 East Pakistan corridor (981.558 km²) from 1947AD to 2026AD."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, longitudinal census series and benchmark demographic trajectories for 14.139 settlements across Pakistan and the historical 1947 to 1971 East Pakistan corridor (981.558 km², encompassing 13.375 active 5-arcminute terrestrial cells) from 1947AD to 2026AD. Spanning five conflict-theatre divisions, the gazetteer records the transformation of South Asian settlement hierarchies following the August 1947 Partition of British India, the 1965 and 1971 interstate conflicts, and subsequent decades of rapid urban agglomeration. The catalogued localities encompass coastal megacities, agro-industrial canal colony towns, administrative capital districts, northern montane transport nodes, riverine market centres across the Bengal delta and long-established qasba and pargana settlements.

Settlement scales in the gazetteer range from secondary market towns and rural qasbas to the eight premier national metropolises reconstructed from primary monographs and official enumerations: Karachi (19.650.000 peak in 2025AD, expanding from 1,07M in the 1951 census), Lahore (13.550.000 peak in 2025AD, growing from 849k in 1951AD), Faisalabad (3.820.000 peak in 2025AD, expanding from 179k in 1951AD), Rawalpindi (3.500.000 peak in 2025AD), Gujranwala (2.620.000 peak in 2025AD), Peshawar (2.360.000 peak in 2025AD), Multan (2.300.000 peak in 2025AD) and Hyderabad (1.985.000 peak in 2025AD). Other leading centres include Quetta (1,64M peak in 2025AD), Dhaka (1,28M at the 1971AD benchmark, growing from 336k in 1951AD), Islamabad (1,15M), Sargodha (1,02M), Sialkot (950k), Bahawalpur (940k), Chittagong (760k in 1971AD), Sukkur (585k) and Larkana (572k). Every catalogued locality reconciles against 14.159 candidate records in the INDUS source ledger alongside 20 documented exclusions eliminated as duplicate survey aliases.

By anchoring longitudinal municipal census records and historical settlement corpora to precise geographic coordinates, this gazetteer establishes an empirical baseline for settlement subtraction within the INDUS demographic modelling engine. Subtracting catalogued urban and nucleated populations from sub-regional envelopes isolates concentrated centres from rural populations, ensuring that dasymetric allocation of cultivators across irrigated doabs, riverine silts and arid rangelands reflects genuine population geography rather than arbitrary administrative averages.

# Background

## Urban Hierarchies and Post-Partition Settlement Topography

The urban network of northwestern South Asia underwent profound structural reorientation following the August 1947 Partition [@Spate1947Partitio; @Chattha2022Communal]. Built atop pre-colonial Mughal pargana and qasba networks and colonial-era railway and canal colonies [@Habib1982Atlas; @Bayly1983Rulers; @ImperialGazetteer1908], commercial and professional hierarchies across Punjab and Sindh had been anchored by non-Muslim mercantile communities (Aroras, Khatris, Banias) who conducted banking, wholesale trade and administrative functions in major towns [@Chattha2022Communal; @Iqbal2026Forced]. The mass evacuation of these populations during late 1947 was accompanied by the arrival of over seven million Muslim refugees (Muhajirs) from East Punjab, Delhi, Uttar Pradesh, Rajasthan and Bihar, who concentrated heavily in urban settlements offering access to abandoned evacuee housing, transport links and commercial opportunities [@Iqbal2026Forced; @Mubasshir2024Partitio].

Four distinct urban typologies characterise the catalogued settlement lattice across the post-colonial epoch:
1. Coastal commercial megacities: Karachi expanded from a port of 550k in 1947AD into the supreme industrial, financial and maritime gateway of Pakistan, absorbing over 600k refugees in the immediate aftermath of partition and growing to 1,07M in 1951AD, 1,91M in 1961AD, 9,34M in 1998AD, 18,87M in 2023AD, and 19,65M by 2025AD [@Priyanka2022Literature]. Karachi's growth created extensive informal settlements across peripheral tracts, notably Orangi Town and Malir Town.
2. Agro-industrial canal colony towns: In the central Punjab doabs, towns founded during the late nineteenth century as agricultural market outposts along newly constructed railway lines (Lyallpur/Faisalabad, Montgomery/Sahiwal, Sargodha) alongside historic Mughal centres (Lahore, Multan) developed into major manufacturing hubs [@Brooks1947Partitio; @BANGASH2021Implemen; @Naqvi1968Urbanisation]. Faisalabad expanded from 179k in 1951AD into a textile powerhouse of 3,82M by 2025AD, while Gujranwala (2,62M) and Sialkot (950k) established a globally connected light-engineering and export manufacturing corridor [@Dahar2017Impact].
3. Western frontier and refugee hubs: Along the mountainous borderlands of Khyber Pakhtunkhwa and Balochistan, historical garrison towns and caravan nodes (Peshawar, Quetta, Kohat, Bannu) expanded rapidly following the 1979 Soviet invasion of Afghanistan [@Yaseen2016Pakistan]. Peshawar absorbed over one million registered and unregistered Afghan refugees, growing from 219k in 1961AD to 2,36M by 2025AD, while Quetta transformed from an arid military cantonment of 84k in 1951AD into an urban agglomeration of 1,64M by 2025AD.
4. Deltaic river ports and commercial capitals: Across East Pakistan prior to 1971, urban development was rooted in long-term Bengal frontier agrarian expansion [@Eaton1993Rise] and dominated by Dhaka and the port of Chittagong [@Batabyal2014Review; @Sarkar2024Indian]. Dhaka functioned as the provincial administrative capital, expanding from 336k in 1951AD to 1,28M at the 1971 independence benchmark, while Chittagong handled the export of raw jute and tea, growing from 294k in 1951AD to 760k in 1971AD [@Ulfat2023Sheikh; @Zahra2026Secessioni].

# Methodology

## Gazetteer Ingestion, Provenance and Georeferencing

The 14.139-settlement gazetteer in the INDUS source ledger is empirically anchored rather than constructed from arbitrary heuristic multipliers. Its four-wave ingestion protocol integrates four complementary evidence tiers across the study domain:
- Primary-monograph historical metropolis trajectories: Benchmark pre-partition and early-modern urban anchors drawn from Mughal statistical geography, revenue atlases and regional urban histories [@Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Blake1991Shahjahanabad; @Bayly1983Rulers; @Naqvi1968Urbanisation; @Eaton1993Rise].
- Official national and imperial censuses: Longitudinal municipal and sub-district enumerations from the Census Organisation of Pakistan and Pakistan Bureau of Statistics (PBS: 1951, 1961, 1972, 1981, 1998, 2017, 2023), the Bangladesh Bureau of Statistics (BBS: 1951–1971 historical series), Census of India Table A-04 pre-1947 baselines, regional statistical offices (DCS, CBS, NSB, NBS) and colonial gazetteers [@ImperialGazetteer1908; @BANGASH2021Implemen; @Batabyal2014Review].
- Multi-repository archaeological and heritage corpora: Site inventories and early-historic urban anchors compiled from Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology Review (IAR) datasets, ASI P1371, Wikidata, OpenStreetMap, XRONOS/c14bazAAR and GeoNames [@Possehl1999IndusAge; @Kenoyer1998AncientCities; @Allchin1995Archaeology; @Erdosy1988Urbanisation; @Chattopadhyaya1994Making].
- Macro-envelope qasba, pargana and nadu continuity: Sub-district market town and historic settlement backfill constrained by strict foundation-year verification and chronological toponymy filters so that post-partition planned townships (such as Islamabad, founded in 1960AD) and historic qasbas enter only within their documented active spans.

Inclusion in the primary gazetteer requires verified WGS84 coordinates cross-checked against satellite imagery and Survey of Pakistan topographic sheets, documented demographic or historical provenance across the active epoch, and spatial deduplication. Settlements sharing identical coordinates or overlapping footprints within a 2,2 km radius were evaluated for homonym redundancy; 20 duplicate aliases were excluded and consolidated under their primary municipal entries.

Table \ref{tab:summary} summarises the distribution of the 14.139 catalogued settlements, sub-regional shares, summed site peaks and leading settlements across the five conflict-theatre divisions.

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
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">14139</td><td class="crd-td">100%</td><td class="crd-td">157,63M</td><td class="crd-td">Karachi (19,65M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 14.139 catalogued settlements and summed population peaks across Pakistan and conflict theatres.</figcaption>
</figure>

## Settlement Subtraction and Rural Allocations

The settlement subtraction routine operates dynamically across each decadal benchmark year. For any given year, the active population of each catalogued settlement within a sub-region is aggregated into an urban total ($U_r$) and subtracted from the total sub-regional demographic envelope ($P_r$). The residual rural population ($R_r = P_r - U_r$) is subsequently distributed across non-urban 5-arcminute terrestrial cells using environmental suitability weights calibrated to canal access, soil siltation and slope gradients. This two-tier architecture isolates high-density municipal cores from agrarian cultivators, preventing distortion in rural population surfaces.

# Testing and Validation

## Remote Sensing Validation and Built-Up Surface Harmonisation

The spatial footprints of catalogued urban settlements were verified against historical Corona satellite reconnaissance photography from the 1960s, early Landsat MSS imagery from the 1970s, and multi-temporal Copernicus Global Human Settlement Layer (GHSL) built-up surfaces from 1975 to 2025. In the Punjab industrial crescent, satellite observations document the physical coalescing of Lahore, Sheikhupura, Kamoke and Gujranwala into a contiguous peri-urban corridor, validating the rapid population growth reported in official census tallies.

In Karachi, remote sensing captures the rapid conversion of scrubland into dense residential settlements across Orangi, Baldia and Surjani Town between 1980 and 2015, corroborating municipal estimates of peripheral expansion. In the Peshawar valley, satellite imagery traces the evolution of Afghan refugee settlements around Nasir Bagh and Shamshatoo from ephemeral canvas compounds into permanent brick settlements that gradually integrated into the greater Peshawar metropolitan economy.

## Rank-Size Distribution and Zipf Regularity

The rank-size hierarchy across all 14.139 catalogued localities was evaluated against Zipfian expectations ($\log P_i = \log P_1 - \alpha \log i$). Analysis yields a balanced Pareto slope ($\alpha = 0,94$, $R^2 = 0,90$), reflecting a dense, multi-tiered settlement hierarchy anchored by Karachi and Lahore and extending smoothly through regional cities and rural qasba nodes (Figure \ref{fig:trajectory}).

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-indo-pakistani-conflicts-and-bangladesh-liberation-war-settlements/fig2_indo_pakistani_conflicts_and_bangladesh_liberation_war_demography.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size settlement hierarchy (Panel B) and long-term demographic trajectories (Panel A) across Pakistan and the East Pakistan theatre (1947AD to 2026AD).</figcaption>
</figure>

Karachi's peak population of 19,65M in 2025AD exceeds the second-ranked city, Lahore (13,55M in 2025AD), yielding a two-city primacy ratio of 1,45. Beneath Lahore, the distribution conforms closely to log-linear expectations, with a broad tier of intermediate secondary centres: Faisalabad (3,82M), Rawalpindi (3,5M), Gujranwala (2,62M), Peshawar (2,36M), Multan (2,3M), Hyderabad (1,99M), Quetta (1,64M), Dhaka (1,28M at the 1971AD benchmark) and Islamabad (1,15M).

# Results

## Leading Urban Settlements

Table \ref{tab:gazetteer} presents the leading 40 urban settlements across Pakistan and the regional conflict theatres ordered by peak population descending, detailing WGS84 geographic coordinates, sub-regional allocation, documented census spans, peak enumerated populations and 2023 census populations.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">2023AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Karachi</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">24,86 N, 67 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">19,65M</td><td class="crd-td">18,87M</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">13,55M</td><td class="crd-td">13M</td></tr>
<tr><td class="crd-td"><strong>Faisalabad</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">31,42 N, 73,08 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">3,82M</td><td class="crd-td">3,69M</td></tr>
<tr><td class="crd-td"><strong>Rawalpindi</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">33,6 N, 73,07 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">3,5M</td><td class="crd-td">3,36M</td></tr>
<tr><td class="crd-td"><strong>Gujranwala</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,16 N, 74,19 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">2,62M</td><td class="crd-td">2,51M</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Khyber-Pakhtunkhwa and FATA</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">2,36M</td><td class="crd-td">2,27M</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">2,3M</td><td class="crd-td">2,22M</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">25,4 N, 68,36 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">1,99M</td><td class="crd-td">1,92M</td></tr>
<tr><td class="crd-td"><strong>Quetta</strong></td><td class="crd-td">Khyber-Pakhtunkhwa and FATA</td><td class="crd-td">30,18 N, 67 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">1,64M</td><td class="crd-td">1,57M</td></tr>
<tr><td class="crd-td"><strong>Orangi Town</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">24,95 N, 66,97 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">1,54M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">East Pakistan</td><td class="crd-td">23,71 N, 90,41 E</td><td class="crd-td">1947AD - 1971AD</td><td class="crd-td">1,28M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Islamabad</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">33,72 N, 73,04 E</td><td class="crd-td">1961AD - 2025AD</td><td class="crd-td">1,15M</td><td class="crd-td">1,11M</td></tr>
<tr><td class="crd-td"><strong>Sargodha</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,08 N, 72,67 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">1,01M</td><td class="crd-td">975,9k</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,49 N, 74,53 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">950k</td><td class="crd-td">911,8k</td></tr>
<tr><td class="crd-td"><strong>Bahawalpur</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">29,4 N, 71,68 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">940k</td><td class="crd-td">903,8k</td></tr>
<tr><td class="crd-td"><strong>Malir Town</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">24,89 N, 67,2 E</td><td class="crd-td">2008AD - 2025AD</td><td class="crd-td">766k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Chittagong</strong></td><td class="crd-td">East Pakistan</td><td class="crd-td">22,35 N, 91,81 E</td><td class="crd-td">1947AD - 1971AD</td><td class="crd-td">760k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Shah Faisal Town</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">24,88 N, 67,16 E</td><td class="crd-td">1961AD - 2025AD</td><td class="crd-td">688,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sukkur</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">27,7 N, 68,86 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">585k</td><td class="crd-td">563,9k</td></tr>
<tr><td class="crd-td"><strong>Larkana</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">27,56 N, 68,21 E</td><td class="crd-td">1947AD - 2025AD</td><td class="crd-td">572k</td><td class="crd-td">551,7k</td></tr>
<tr><td class="crd-td"><strong>Sahiwal</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">30,67 N, 73,11 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">553,5k</td><td class="crd-td">538,3k</td></tr>
<tr><td class="crd-td"><strong>Sheikhupura</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">31,71 N, 73,99 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">528,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mirpur</strong></td><td class="crd-td">Kashmir Line-of-Control Theatre</td><td class="crd-td">33,15 N, 73,75 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">523,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Chiniot</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">31,72 N, 72,98 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">477,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Rahim Yar Khan</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">28,42 N, 70,3 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">469,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">33,67 N, 72,7 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">462,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">31,27 N, 72,32 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">462,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dera Ghazi Khan</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">30,05 N, 70,63 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">446k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gujrat</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,57 N, 74,08 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">436,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Wah Cantonment</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">33,79 N, 72,73 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">429,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kasur</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">31,12 N, 74,45 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">400,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Okara</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">30,81 N, 73,45 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">400k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ghakhar Mandi</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,18 N, 74,9 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">385,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mardan</strong></td><td class="crd-td">Khyber-Pakhtunkhwa and FATA</td><td class="crd-td">34,2 N, 72,05 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">374k</td><td class="crd-td">363,8k</td></tr>
<tr><td class="crd-td"><strong>Mingora</strong></td><td class="crd-td">Khyber-Pakhtunkhwa and FATA</td><td class="crd-td">34,78 N, 72,36 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">370k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Khulna</strong></td><td class="crd-td">East Pakistan</td><td class="crd-td">22,85 N, 89,54 E</td><td class="crd-td">1947AD - 1971AD</td><td class="crd-td">360k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Malir Cantonment</strong></td><td class="crd-td">Sindh and Karachi</td><td class="crd-td">24,94 N, 67,21 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">335,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qasimabad</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">30,5 N, 72,59 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">334,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hafizabad</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,07 N, 73,69 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">327,6k</td><td class="crd-td">318,6k</td></tr>
<tr><td class="crd-td"><strong>Jhelum</strong></td><td class="crd-td">West Punjab and Islamabad</td><td class="crd-td">32,93 N, 73,73 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">321,2k</td><td class="crd-td">312,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading forty urban settlements ordered by peak enumerated population across Pakistan and conflict theatres (1947AD to 2026AD).</figcaption>
</figure>

## Sub-Regional Settlement Distributions

### West Punjab and Islamabad

West Punjab and Islamabad catalogue 4.172 settlements with a summed peak population of 69,04M, representing 43,8% of the catalogued settlement mass. Lahore anchors the provincial hierarchy, expanding from 849k in 1951AD to 13,55M in 2025AD. Faisalabad grew from 179k to 3,82M, while Multan, the historic metropolis of southern Punjab, expanded from 190k to 2,3M. Rawalpindi (3,5M) and federal Islamabad (1,15M) form a contiguous twin-city capital agglomeration. Secondary manufacturing centres along the Grand Trunk Road corridor include Gujranwala (2,62M), Sialkot (950k), Gujrat (436k), Kasur (401k) and Hafizabad (328k). In the southern and central canal colonies, major market towns include Sargodha (1,02M), Bahawalpur (940k), Sheikhupura (529k), Rahim Yar Khan (470k), Jhang (463k) and Dera Ghazi Khan (446k).

### Sindh and Karachi

Sindh catalogues 1.596 settlements with a summed peak population of 41,75M (26,5% of catalogued settlement mass). Karachi is the dominant metropolis, reaching a peak count of 19,65M in 2025AD alongside constituent peripheral localities such as Orangi Town (1,54M peak in 2010AD) and Malir Town (766k in 2025AD). Hyderabad on the lower Indus functions as the second city of Sindh, supporting 1,99M residents in 2025AD. Other key urban centres include Sukkur (585k), commanding the historic Sukkur Barrage, Larkana (572k), Nawabshah (313k), Mirpur Khas (261k), Jacobabad (225k), Shikarpur (210k) and Thatta (61k).

### Khyber Pakhtunkhwa and Balochistan

The western frontier catalogues 3.410 settlements with a summed peak population of 28,81M (18,3% of catalogued settlement mass). Peshawar commands the Khyber Pass and northern frontier, expanding to 2,36M by 2025AD. In Balochistan, provincial capital Quetta reached 1,64M by 2025AD, operating as the administrative and trade centre of the western plateau. Other significant centres in Khyber Pakhtunkhwa include Mardan (374k), Mingora in Swat (370k), Dera Ismail Khan (237k), Kohat (214k), Abbottabad (78k) and Bannu (47k). In Balochistan, peripheral oasis and coastal nodes include Turbat (276k) in the Makran, Hub (201k), an industrial satellite adjacent to Karachi, Khuzdar (158k) in the central highlands and Chaman (120k) on the Afghan border.

### Kashmir Line of Control Theatre

The northern mountainous confrontation zone catalogues 505 settlements with a summed peak population of 4,22M (2,7% of catalogued settlement mass). In Azad Jammu and Kashmir, key centres include Mirpur (524k peak in 2013AD), Muzaffarabad (161k in 2025AD), Rawalakot (56k), Kotli (52k) and Bhimber (31k). In Gilgit-Baltistan, settlements cluster along major river valleys, led by regional administrative centres Gilgit (280k) and Skardu (260k), alongside Chilas (11k) and Hunza.

### East Pakistan (1947 to 1971)

The East Pakistan historical module catalogues 4.456 settlements with a summed peak population of 13,81M (8,8% of catalogued settlement mass through the 1971AD benchmark). Dhaka anchored the province, expanding from 336k in 1951AD to 1,28M at the 1971 liberation benchmark. Chittagong, the principal maritime port, grew from 294k to 760k. Other key provincial centres through 1971AD include Khulna (360k), Narayanganj (235k), Rajshahi (115k), Mymensingh (115k), Barisal (92k), Comilla (80k), Rangpur (68k) and Sylhet (55k).

# Limitations

Settlement analysis across post-independence South Asia faces distinct documented limitations:
1. Dynamic municipal boundary definitions: Municipal corporations frequently incorporated surrounding peri-urban villages between census rounds, causing abrupt population increases that reflect territorial re-demarcation rather than organic demographic growth.
2. Informal settlement under-enumeration: Millions of residents residing in informal katchi abadis across Karachi, Lahore and Peshawar were systematically under-counted in early decadal census rounds due to lack of formal land titles and address registration.
3. Decoupling of East Pakistan records: Following the December 1971 war, administrative tracking of East Pakistan settlements separated into independent Bangladesh census series, limiting long-term unified municipal modelling to the 1947 to 1971 period.

# Conclusion

The INDUS settlement gazetteer synthesises 14.139 georeferenced settlements across Pakistan and the historical East Pakistan corridor from 1947AD to 2026AD. By reconciling longitudinal municipal census series, primary-monograph metropolis trajectories, multi-repository archaeological corpora and qasba continuity audits with WGS84 coordinates, this gazetteer establishes an empirical foundation for modern South Asian settlement geography. Settlement subtraction isolates nucleated centres from rural populations, enabling precise dasymetric allocation of cultivators across irrigated plains and arid rangelands while documenting the expansion of Karachi, Lahore and regional secondary cities over eight post-colonial decades.

# Appendix

The INDUS source ledger evaluated 14.159 candidate records, accepting 14.139 verified settlements and documenting 20 exclusions. Table \ref{tab:excluded} documents the leading excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Name</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gopalganj</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Noorabad</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Raghunathpur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Shibpur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Rajapur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Panchbaria</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Raghunathpur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Chandpur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Rajapur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Rampur</strong></td><td class="crd-td">Bangladesh</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate record from the post-independence South Asia source ledger.</figcaption>
</figure>

# Sources
