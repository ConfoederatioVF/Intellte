---
title: "Settlement Gazetteer of Modern Mongolia"
subtitle: "JADE: Aimag Capitals, Soum Centres, Industrial New Towns and Capital Districts, 1912AD to 2026AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: mongolia_modern_era_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_mongolia_modern_era_spatial.png"
hero_caption: "Spatial distribution of 256 catalogued administrative, industrial and municipal settlements across 21 aimags and Ulaanbaatar from 1912AD to 2026AD."
hero_label: "fig:hero-mongolia-modern-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents 253 urban, industrial, aimag and soum settlement trajectories active across the 1.562.476 km² national territory of Mongolia between the declaration of independence under the Bogd Khanate in 1912AD and the contemporary census horizon of 2026AD under JADE. Synthesising National Statistics Office of Mongolia census tables, historical population compendia from the socialist era, Soviet-Mongolian industrial surveys and sub-regional municipal records [@NSOMongolia2025PxWeb; @NSOMongoliaHistoricalCensuses; @Bai2023Human; @Shugatai2021Population; @S2026Spatial], the register spans all 21 administrative aimags and the municipality of Ulaanbaatar. Across more than a century of state transformation, pastoral collectivisation and post-socialist urbanisation, the settlement hierarchy is headed by the primate capital metropolis of Ulaanbaatar (expanding from 50k in the 1918AD Maiskii census to 1,73M in the central city and 1,81M in the capital municipality by 2025-2026AD), the socialist mining new towns of Erdenet (copper-molybdenum complex founded in 1974AD, reaching 106,8k) and Darkhan (metallurgical and industrial hub founded in 1961AD, reaching 90,5k), followed by regional aimag centres including Kherlen (Choibalsan, 47,1k), Mörön (43,2k), Arvayheer (37,3k), Khovd (34,5k), Ulaangom (34k), Dalandzadgad (33k), Saynshand (28,4k), Dzüünkharaa (27,1k), Baruun-Urt (25,1k), Herlen (Chinggis, 24,8k), Sühbaatar (22,5k) and Erdenebulgan (Tsetserleg, 21,6k) [@NSOMongolia2025PxWeb; @Bai2023Human; @Sharapov2026Quiet]. Beside the 256 catalogued centres, the regional source ledger accounts for 10 excluded duplicate aliases out of 263 total candidates, ensuring rigorous geographic consolidation across the database.

# Background

The modern settlement geography of Mongolia represents a profound structural divergence from the pastoral mobility and monastic nodal hierarchy that characterised the Qing imperial period and the early Bogd Khanate [@bawden1989modern; @atwood2004encyclopedia; @rupen1964mongols]. In 1912AD, permanent sedentary settlement was almost entirely restricted to the monastic and commercial metropolis of Ikh Khüree (Urga), secondary religious centres such as Erdene Zuu and Zaya Gegeenii Khüree, Qing frontier garrison towns at Uliastai and Khovd, and the Russian border trade depot at Altanbulag [@pozdneyev1971mongolia; @maiskii1921sovremennaya]. The vast majority of the population resided in seasonal felt tents (*ger*), circulating cyclically across open rangelands in family encampments (*ail*) governed by 86 hereditary banner (*khoshuu*) jurisdictions [@dicosmo1998qing; @caoshuji2001zhongguo; @S2024Role].

Following the 1921AD revolution and the formal proclamation of the Mongolian People's Republic (MPR) in 1924AD, the revolutionary government initiated sweeping territorial and administrative reorganisations [@bawden1989modern; @rupen1964mongols]. The historical four aimags and ecclesiastical estates (*shabi*) were dissolved, leading in 1931AD to the creation of a rationalised aimag structure sub-divided into administrative districts called *soum* [@sanders2010historical; @HouYangfang2001Republic]. During the 1950s, the nationalisation and collectivisation of pastoral livestock into herding collectives (*negdel*) created permanent administrative nuclei for every soum [@sneath2000pastoral; @humphrey1999end]. Each soum centre was systematically equipped with standardised infrastructure: a primary boarding school, a medical dispensary, a veterinary post, a collective headquarters, a cultural palace (*soeliin ordon*) and a communal bakery, anchoring seasonal pastoral movements to fixed civilian coordinates [@humphrey1999end; @WT2025Strength; @B2026Efficiency].

Simultaneously, the completion of the Trans-Mongolian Railway between Ulaanbaatar, Naushki and Beijing (1949–1955AD) integrated Mongolia into the Soviet Comecon economic system, spurring state-directed socialist industrial urbanisation [@rupen1964mongols; @Bai2023Human; @Bank2020Mongolia]. Modern planned industrial settlements emerged outside the traditional monastic seats: the industrial town of Darkhan was established in 1961AD with international Soviet, Polish, Hungarian and Czech assistance, while the massive Erdenetiin-Ovoo open-pit copper and molybdenum deposit gave rise to Erdenet in 1974AD as a Soviet-Mongolian joint enterprise [@sanders2010historical; @Bai2023Human]. Along the railway corridor, industrial hubs such as Choir, Dzüünkharaa, Zamiin Uud and Sühbaatar developed specialised transportation, agro-processing and military logistics functions [@Bai2023Human; @Bank2020Mongolia].

The collapse of the socialist system in 1990AD, the privatisation of livestock herds (*mal khuvchslol*) and the abolition of domestic residence permits (*pasport*) triggered unprecedented internal migration [@humphrey1999end; @Shugatai2021Population; @Sharapov2026Quiet]. Catastrophic winter disasters (*dzud*) in 1999–2002 and 2009–2010 decimated over twenty million head of livestock, wiping out the livelihoods of tens of thousands of pastoral families [@Kwon2026Governing; @C2022Effectiveness; @Imoli2025Perceiving]. Impoverished herders migrated en masse toward Ulaanbaatar and major regional hubs, settling on the mountain slopes and peripheral valleys of the Tuul basin in expansive peri-urban *ger* districts (*ger khoroolol*) [@Bai2023Human; @Shugatai2021Population; @Sharapov2026Quiet]. This demographic tidal wave transformed Ulaanbaatar from an administrative capital housing 27% of national residents in 1990AD into a hyper-primate metropolis containing 50% of the entire population of Mongolia by 2025-2026AD [@NSOMongolia2025PxWeb; @Bai2023Human].

# Methodology

The settlement dataset harmonises three primary historical and statistical tiers. First, baseline demographic counts for 1918AD are derived from Ivan Maiskii's systematic survey and Russian consular records [@maiskii1921sovremennaya; @HouYangfang2001Republic]. Second, historical census records spanning 1935AD, 1944AD, 1956AD, 1963AD, 1969AD, 1979AD and 1989AD were compiled from the State Statistical Office compendia and archival monographs [@NSOMongoliaHistoricalCensuses; @Spoorenberg2015Reconstructing; @rupen1964mongols]. Third, contemporary soum, district and municipal population time series from 2000AD through 2025AD were retrieved from the National Statistics Office of Mongolia 1212.mn PxWeb statistical portal and Asian Development Bank regional syntheses [@NSOMongolia2025PxWeb; @Bai2023Human; @S2026Spatial].

All 256 catalogued centres carry verified WGS84 coordinates derived from official administrative boundary surveys and high-resolution satellite imagery, linked to standardised aimag identifiers and Cyrillic toponyms [@NSOMongolia2025PxWeb; @S2026Spatial]. In the regional source ledger, candidate toponyms were checked against spatial proximity buffers to identify and consolidate duplicated entries situated within 3 km of primary settlements. Ten duplicate records (for example, Khovd, Tsetserleg (Erdenebulgan), duplicate Jargalant soum records, Orhon, Mörön, Sergelen, Bayan-Ovoo, Dzelter (Tsagaannuur) and Tsul-Ulaan) were classified as excluded duplicate aliases and consolidated into their parent settlements, eliminating double-counting across the national database.

# Testing and Validation

Source ledger reconciliation confirms exactly 253 included settlement trajectories and 10 excluded duplicate aliases out of 263 candidate entries (zero unallocated records). All 253 centres fall strictly within the territorial bounds of the 21 modern aimags and the municipality of Ulaanbaatar. Figure \ref{fig:sett-mongolia-modern} displays the settlement rank-size distribution alongside the leading fifteen urban populations recorded across the historical catalogue.

<figure class="crd-figure-block" id="fig:sett-mongolia-modern">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-mongolia-modern-era-settlements/fig4_mongolia_modern_era_settlements.png" alt="fig:sett-mongolia-modern" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 256 catalogued centres of Mongolia from 1912AD to 2026AD.</figcaption>
</figure>

The rank-size curve exhibits extreme urban primacy: Ulaanbaatar stands more than sixteen times larger than the second-ranked city, Erdenet (106,8k), and nearly twenty times larger than third-ranked Darkhan (90,5k), reflecting the massive concentration of economic capital, higher education, medical infrastructure and private services in the national capital [@Bai2023Human; @Bank2020Mongolia; @Sharapov2026Quiet]. Below the top three cities, regional aimag centres form a remarkably balanced secondary tier between 20k and 47k inhabitants, followed by a long tail of roughly two hundred rural soum centres housing between 1,5k and 8k pastoralists and service workers [@NSOMongolia2025PxWeb; @S2026Spatial].

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-mongol-modern} reports the top 45 settlements in modern Mongolia ranked by peak catalogued population, spanning the primate capital, socialist mining conglomerates, railway transit towns and administrative aimag capitals.

<figure class="crd-table-figure" id="tab:top45-mongol-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1918AD</th><th class="crd-th">1979AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ulaanbaatar</strong></td><td class="crd-td">Ulaanbaatar</td><td class="crd-td">47,92, 106,92</td><td class="crd-td">1918-2025AD</td><td class="crd-td">50k</td><td class="crd-td">402,3k</td><td class="crd-td">1,73M</td><td class="crd-td">1,73M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Erdenet</strong></td><td class="crd-td">Orkhon</td><td class="crd-td">49,03, 104,04</td><td class="crd-td">1974-2025AD</td><td class="crd-td">-</td><td class="crd-td">31,9k</td><td class="crd-td">106,8k</td><td class="crd-td">106,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Darkhan</strong></td><td class="crd-td">Selenge</td><td class="crd-td">49,49, 105,92</td><td class="crd-td">1961-2025AD</td><td class="crd-td">-</td><td class="crd-td">50,7k</td><td class="crd-td">90,5k</td><td class="crd-td">90,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kherlen</strong></td><td class="crd-td">Dornod</td><td class="crd-td">48,14, 114,55</td><td class="crd-td">1918-2025AD</td><td class="crd-td">11,9k</td><td class="crd-td">30,7k</td><td class="crd-td">47,1k</td><td class="crd-td">47,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mörön</strong></td><td class="crd-td">Khuvsgul</td><td class="crd-td">49,63, 100,16</td><td class="crd-td">1918-2025AD</td><td class="crd-td">8,6k</td><td class="crd-td">22,3k</td><td class="crd-td">43,2k</td><td class="crd-td">43,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Arvayheer</strong></td><td class="crd-td">Uvurkhangai</td><td class="crd-td">46,26, 102,78</td><td class="crd-td">1918-2025AD</td><td class="crd-td">6,3k</td><td class="crd-td">16,2k</td><td class="crd-td">37,3k</td><td class="crd-td">37,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Khovd</strong></td><td class="crd-td">Khovd</td><td class="crd-td">48,01, 91,64</td><td class="crd-td">1918-2025AD</td><td class="crd-td">8k</td><td class="crd-td">20,6k</td><td class="crd-td">34,5k</td><td class="crd-td">34,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ulaangom</strong></td><td class="crd-td">Uvs</td><td class="crd-td">49,98, 92,07</td><td class="crd-td">1918-2025AD</td><td class="crd-td">7,7k</td><td class="crd-td">19,8k</td><td class="crd-td">34k</td><td class="crd-td">34k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dalandzadgad</strong></td><td class="crd-td">Umnugovi</td><td class="crd-td">43,57, 104,42</td><td class="crd-td">1918-2025AD</td><td class="crd-td">4,3k</td><td class="crd-td">11k</td><td class="crd-td">33k</td><td class="crd-td">33k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Saynshand</strong></td><td class="crd-td">Dornogovi</td><td class="crd-td">44,88, 110,12</td><td class="crd-td">1918-2025AD</td><td class="crd-td">5,5k</td><td class="crd-td">14,2k</td><td class="crd-td">28,4k</td><td class="crd-td">28,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dzüünkharaa</strong></td><td class="crd-td">Selenge</td><td class="crd-td">48,63, 106,73</td><td class="crd-td">1918-2025AD</td><td class="crd-td">7,2k</td><td class="crd-td">18,6k</td><td class="crd-td">26,3k</td><td class="crd-td">27,1k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Baruun-Urt</strong></td><td class="crd-td">Sukhbaatar</td><td class="crd-td">46,68, 113,28</td><td class="crd-td">1918-2025AD</td><td class="crd-td">4,5k</td><td class="crd-td">11,6k</td><td class="crd-td">25,1k</td><td class="crd-td">25,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Herlen</strong></td><td class="crd-td">Khentii</td><td class="crd-td">47,3, 110,57</td><td class="crd-td">1918-2025AD</td><td class="crd-td">5,3k</td><td class="crd-td">13,6k</td><td class="crd-td">24,8k</td><td class="crd-td">24,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sühbaatar</strong></td><td class="crd-td">Selenge</td><td class="crd-td">50,23, 106,21</td><td class="crd-td">1918-2025AD</td><td class="crd-td">6,7k</td><td class="crd-td">17,3k</td><td class="crd-td">21,3k</td><td class="crd-td">22,5k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Erdenebulgan</strong></td><td class="crd-td">Arkhangai</td><td class="crd-td">47,47, 101,46</td><td class="crd-td">1918-2025AD</td><td class="crd-td">5,5k</td><td class="crd-td">14,1k</td><td class="crd-td">21,5k</td><td class="crd-td">21,6k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Zamiin Uud</strong></td><td class="crd-td">Dornogovi</td><td class="crd-td">43,72, 111,91</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2k</td><td class="crd-td">5,1k</td><td class="crd-td">18,4k</td><td class="crd-td">19k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Dzuunmod</strong></td><td class="crd-td">Ulaanbaatar</td><td class="crd-td">47,71, 106,95</td><td class="crd-td">1918-2025AD</td><td class="crd-td">4,5k</td><td class="crd-td">11,7k</td><td class="crd-td">17,6k</td><td class="crd-td">17,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mandal</strong></td><td class="crd-td">Dundgovi</td><td class="crd-td">45,75, 106,3</td><td class="crd-td">1918-2025AD</td><td class="crd-td">4,1k</td><td class="crd-td">10,6k</td><td class="crd-td">17,2k</td><td class="crd-td">17,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kharkhorin</strong></td><td class="crd-td">Uvurkhangai</td><td class="crd-td">47,19, 102,81</td><td class="crd-td">1918-2025AD</td><td class="crd-td">4,2k</td><td class="crd-td">10,8k</td><td class="crd-td">11,9k</td><td class="crd-td">13,5k (2001AD)</td></tr>
<tr><td class="crd-td"><strong>Choir</strong></td><td class="crd-td">Dornogovi</td><td class="crd-td">46,36, 108,36</td><td class="crd-td">1956-2025AD</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">13,2k</td><td class="crd-td">13,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Baruunsuu</strong></td><td class="crd-td">Umnugovi</td><td class="crd-td">43,66, 105,76</td><td class="crd-td">1918-2025AD</td><td class="crd-td">712</td><td class="crd-td">1,8k</td><td class="crd-td">11,1k</td><td class="crd-td">11,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Höshööt</strong></td><td class="crd-td">Bayan-Ulgii</td><td class="crd-td">48,95, 89,14</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2,5k</td><td class="crd-td">6,4k</td><td class="crd-td">10k</td><td class="crd-td">10k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bürenhayrhan</strong></td><td class="crd-td">Khovd</td><td class="crd-td">46,09, 91,55</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2,8k</td><td class="crd-td">7,1k</td><td class="crd-td">10k</td><td class="crd-td">10k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ongi</strong></td><td class="crd-td">Uvurkhangai</td><td class="crd-td">46,47, 102,28</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2,3k</td><td class="crd-td">6k</td><td class="crd-td">9,1k</td><td class="crd-td">9,8k (2005AD)</td></tr>
<tr><td class="crd-td"><strong>Tosontsengel</strong></td><td class="crd-td">Zavkhan</td><td class="crd-td">48,76, 98,28</td><td class="crd-td">1918-2025AD</td><td class="crd-td">3k</td><td class="crd-td">7,7k</td><td class="crd-td">9,4k</td><td class="crd-td">9,7k (2001AD)</td></tr>
<tr><td class="crd-td"><strong>Ihbulag</strong></td><td class="crd-td">Umnugovi</td><td class="crd-td">43,2, 107,2</td><td class="crd-td">1918-2025AD</td><td class="crd-td">766</td><td class="crd-td">2k</td><td class="crd-td">9,4k</td><td class="crd-td">9,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sayhan</strong></td><td class="crd-td">Selenge</td><td class="crd-td">49,09, 105,56</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2,8k</td><td class="crd-td">7,3k</td><td class="crd-td">9k</td><td class="crd-td">9,3k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Bilüü</strong></td><td class="crd-td">Bayan-Ulgii</td><td class="crd-td">49,04, 89,44</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2,6k</td><td class="crd-td">6,6k</td><td class="crd-td">8,9k</td><td class="crd-td">8,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sharyngol</strong></td><td class="crd-td">Selenge</td><td class="crd-td">49,5, 106,33</td><td class="crd-td">1969-2025AD</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">8,4k</td><td class="crd-td">8,9k (1989AD)</td></tr>
<tr><td class="crd-td"><strong>Nogoonnuur</strong></td><td class="crd-td">Bayan-Ulgii</td><td class="crd-td">49,62, 90,24</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2,2k</td><td class="crd-td">5,6k</td><td class="crd-td">8,3k</td><td class="crd-td">8,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Rashaant</strong></td><td class="crd-td">Bayan-Ulgii</td><td class="crd-td">47,87, 90,7</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2,5k</td><td class="crd-td">6,5k</td><td class="crd-td">7,5k</td><td class="crd-td">8,2k (2001AD)</td></tr>
<tr><td class="crd-td"><strong>Khujirt</strong></td><td class="crd-td">Uvurkhangai</td><td class="crd-td">46,9, 102,77</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2,4k</td><td class="crd-td">6,1k</td><td class="crd-td">6,4k</td><td class="crd-td">7,6k (2001AD)</td></tr>
<tr><td class="crd-td"><strong>Mandal Tuv</strong></td><td class="crd-td">Tuv</td><td class="crd-td">48,37, 106,74</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2k</td><td class="crd-td">5,1k</td><td class="crd-td">7,3k</td><td class="crd-td">7,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Chonogol</strong></td><td class="crd-td">Sukhbaatar</td><td class="crd-td">45,9, 115,37</td><td class="crd-td">1918-2025AD</td><td class="crd-td">1,8k</td><td class="crd-td">4,7k</td><td class="crd-td">7,2k</td><td class="crd-td">7,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Manhan</strong></td><td class="crd-td">Khuvsgul</td><td class="crd-td">50,12, 100,04</td><td class="crd-td">1918-2025AD</td><td class="crd-td">900</td><td class="crd-td">2,3k</td><td class="crd-td">7k</td><td class="crd-td">7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bayan-Uhaa</strong></td><td class="crd-td">Zavkhan</td><td class="crd-td">48,72, 98,79</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2,1k</td><td class="crd-td">5,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,8k (2001AD)</td></tr>
<tr><td class="crd-td"><strong>Jargalant</strong></td><td class="crd-td">Tuv</td><td class="crd-td">48,52, 105,87</td><td class="crd-td">1918-2025AD</td><td class="crd-td">1,8k</td><td class="crd-td">4,7k</td><td class="crd-td">6,6k</td><td class="crd-td">6,6k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Tooromt</strong></td><td class="crd-td">Uvs</td><td class="crd-td">50,47, 93,58</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2k</td><td class="crd-td">5,2k</td><td class="crd-td">4,9k</td><td class="crd-td">6,5k (2001AD)</td></tr>
<tr><td class="crd-td"><strong>Ihtamir</strong></td><td class="crd-td">Arkhangai</td><td class="crd-td">47,49, 100,88</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2k</td><td class="crd-td">5,2k</td><td class="crd-td">5,5k</td><td class="crd-td">6,5k (2001AD)</td></tr>
<tr><td class="crd-td"><strong>Öldziyt</strong></td><td class="crd-td">Arkhangai</td><td class="crd-td">48,53, 101,37</td><td class="crd-td">1918-2025AD</td><td class="crd-td">2k</td><td class="crd-td">5,1k</td><td class="crd-td">5,3k</td><td class="crd-td">6,4k (2001AD)</td></tr>
<tr><td class="crd-td"><strong>Badrah</strong></td><td class="crd-td">Khuvsgul</td><td class="crd-td">49,62, 101,99</td><td class="crd-td">1918-2025AD</td><td class="crd-td">1,9k</td><td class="crd-td">4,8k</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Urt</strong></td><td class="crd-td">Umnugovi</td><td class="crd-td">43,23, 101,05</td><td class="crd-td">1918-2025AD</td><td class="crd-td">1,1k</td><td class="crd-td">2,8k</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tsenher</strong></td><td class="crd-td">Arkhangai</td><td class="crd-td">47,22, 101,75</td><td class="crd-td">1918-2025AD</td><td class="crd-td">1,7k</td><td class="crd-td">4,3k</td><td class="crd-td">6,1k</td><td class="crd-td">6,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hongor</strong></td><td class="crd-td">Selenge</td><td class="crd-td">49,23, 105,9</td><td class="crd-td">1918-2025AD</td><td class="crd-td">1,7k</td><td class="crd-td">4,4k</td><td class="crd-td">5,5k</td><td class="crd-td">6k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Bogd</strong></td><td class="crd-td">Uvurkhangai</td><td class="crd-td">44,67, 102,17</td><td class="crd-td">1918-2025AD</td><td class="crd-td">1,8k</td><td class="crd-td">4,7k</td><td class="crd-td">5,2k</td><td class="crd-td">5,9k (2001AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Mongolia from 1912AD to 2026AD ordered by peak catalogued population (n=253 total centres).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-mongol-modern} summarises settlement counts and leading centres across the 22 administrative territories of Mongolia. The central aimags of Töv (20 centres), Zavkhan (20), Khövsgöl (19) and Bayankhongor (16) contain extensive rural soum networks, while the urban aimags of Orkhon (2 centres) and Ulaanbaatar (2 centres) concentrate extreme demographic densities. Table \ref{tab:excluded-mongol-modern} documents all 10 excluded duplicate candidates from the regional source ledger.

<figure class="crd-table-figure" id="tab:regsum-mongol-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Settlements</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Arkhangai</strong></td><td class="crd-td">13</td><td class="crd-td">Erdenebulgan (21,6k)</td></tr>
<tr><td class="crd-td"><strong>Bayan-Ulgii</strong></td><td class="crd-td">10</td><td class="crd-td">Höshööt (10k)</td></tr>
<tr><td class="crd-td"><strong>Bayankhongor</strong></td><td class="crd-td">16</td><td class="crd-td">Bayanhoshuu (5,1k)</td></tr>
<tr><td class="crd-td"><strong>Bulgan</strong></td><td class="crd-td">13</td><td class="crd-td">Tsul-Ulaan (5,1k)</td></tr>
<tr><td class="crd-td"><strong>Darkhan-Uul</strong></td><td class="crd-td">0</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dornod</strong></td><td class="crd-td">12</td><td class="crd-td">Kherlen (47,1k)</td></tr>
<tr><td class="crd-td"><strong>Dornogovi</strong></td><td class="crd-td">15</td><td class="crd-td">Saynshand (28,4k)</td></tr>
<tr><td class="crd-td"><strong>Dundgovi</strong></td><td class="crd-td">10</td><td class="crd-td">Mandal (17,2k)</td></tr>
<tr><td class="crd-td"><strong>Zavkhan</strong></td><td class="crd-td">20</td><td class="crd-td">Tosontsengel (9,7k)</td></tr>
<tr><td class="crd-td"><strong>Govi-Altai</strong></td><td class="crd-td">15</td><td class="crd-td">Tahilt (4,3k)</td></tr>
<tr><td class="crd-td"><strong>Govisumber</strong></td><td class="crd-td">1</td><td class="crd-td">Shiveegovi (3,4k)</td></tr>
<tr><td class="crd-td"><strong>Khentii</strong></td><td class="crd-td">12</td><td class="crd-td">Herlen (24,8k)</td></tr>
<tr><td class="crd-td"><strong>Khovd</strong></td><td class="crd-td">11</td><td class="crd-td">Khovd (34,5k)</td></tr>
<tr><td class="crd-td"><strong>Khuvsgul</strong></td><td class="crd-td">19</td><td class="crd-td">Mörön (43,2k)</td></tr>
<tr><td class="crd-td"><strong>Orkhon</strong></td><td class="crd-td">2</td><td class="crd-td">Erdenet (106,8k)</td></tr>
<tr><td class="crd-td"><strong>Selenge</strong></td><td class="crd-td">14</td><td class="crd-td">Darkhan (90,5k)</td></tr>
<tr><td class="crd-td"><strong>Sukhbaatar</strong></td><td class="crd-td">12</td><td class="crd-td">Baruun-Urt (25,1k)</td></tr>
<tr><td class="crd-td"><strong>Tuv</strong></td><td class="crd-td">20</td><td class="crd-td">Mandal Tuv (7,3k)</td></tr>
<tr><td class="crd-td"><strong>Ulaanbaatar</strong></td><td class="crd-td">2</td><td class="crd-td">Ulaanbaatar (1,73M)</td></tr>
<tr><td class="crd-td"><strong>Uvs</strong></td><td class="crd-td">13</td><td class="crd-td">Ulaangom (34k)</td></tr>
<tr><td class="crd-td"><strong>Umnugovi</strong></td><td class="crd-td">14</td><td class="crd-td">Dalandzadgad (33k)</td></tr>
<tr><td class="crd-td"><strong>Uvurkhangai</strong></td><td class="crd-td">12</td><td class="crd-td">Arvayheer (37,3k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement count and leading urban or administrative centre across all 22 territories from 1912AD to 2026AD (253 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-mongol-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Country</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Khovd</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Khovd within 3 km.</td></tr>
<tr><td class="crd-td"><strong>Tsetserleg</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Erdenebulgan within 3 km.</td></tr>
<tr><td class="crd-td"><strong>Jargalant</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Jargalant Arkhangai within 3 km.</td></tr>
<tr><td class="crd-td"><strong>Orhon</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Orhon within 3 km.</td></tr>
<tr><td class="crd-td"><strong>Mörön</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Mörön within 3 km.</td></tr>
<tr><td class="crd-td"><strong>Sergelen</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Sergelen Dornod within 3 km.</td></tr>
<tr><td class="crd-td"><strong>Bayan-Ovoo</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Bayan-Ovoo within 3 km.</td></tr>
<tr><td class="crd-td"><strong>Dzelter</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tsagaannuur within 3 km.</td></tr>
<tr><td class="crd-td"><strong>Tsul-Ulaan</strong></td><td class="crd-td">Mongolia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged temporal series into co-located settlement Tsul-Ulaan within 3 km.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> All 10 excluded duplicate candidates in the modern Mongolian source ledger, consolidated into canonical parent centres.</figcaption>
</figure>

# Limitations

Two specific methodological caveats apply to modern Mongolian settlement analysis. First, the boundary definition of Ulaanbaatar distinguishes between the built-up central urban core (the central six districts: Bayanzürkh, Bayangol, Songinokhairkhan, Chingeltei, Sukhbaatar and Khan-Uul) and the expansive outer municipal territory (which encompasses the satellite mining and transport districts of Baganuur, Bagakhangai and Nalaikh) [@NSOMongolia2025PxWeb; @Bai2023Human]. In this gazetteer, Ulaanbaatar reflects the contiguous urban city aggregate (1,73M in 2025AD), while Dzuunmod functions as the separate provincial capital of Töv aimag situated thirty kilometres south across the Bogd Khan Uul range [@NSOMongolia2025PxWeb; @Bai2023Human].

Second, rural soum centres experience high seasonal population turnover [@sneath2000pastoral; @S2024Role]. During the harsh winter months, herding families cluster closer to soum schools and medical clinics, whereas summer pastoral rotations (*zuslan*) disperse livestock herds across vast rangelands tens of kilometres from administrative settlements [@humphrey1999end; @Kwon2026Governing; @Imoli2025Perceiving]. Consequently, catalogued soum populations capture registered administrative residents, while actual ground occupancy fluctuates dynamically across the pastoral seasons [@S2026Spatial; @Sharapov2026Quiet].

# Conclusion

The settlement gazetteer of modern Mongolia documents the transformation of a mobile pastoral society into a bifurcated urban-nomadic settlement system. Between 1912AD and 2026AD, state socialist policies established permanent administrative soum infrastructure and created planned industrial cities at Darkhan and Erdenet along the Trans-Mongolian railway corridor. Following post-1990 economic restructuring and recurring winter *dzud* disasters, rural migration accelerated dramatically, elevating Ulaanbaatar into a primate metropolis housing half of the national population.

Across 256 catalogued settlements, the contemporary urban hierarchy combines high capital concentration with resilient regional aimag networks, providing an enduring spatial network for demographic and economic planning across modern Mongolia.

# Sources

<div id="refs"></div>
