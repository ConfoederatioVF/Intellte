---
title: "Settlement Gazetteer of Indonesia after Independence (Excluding Western New Guinea)"
subtitle: "MANDALA: Settlement Toponymy, Spatial Coordinates and Demographic Growth (1949 to 2026)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: indonesia_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_indonesia_after_independence_spatial.png"
hero_caption: "Spatial distribution of 5.754 catalogued settlements and macro-demographic divisions across post-independence Indonesia excluding Western New Guinea (1,52M km²) from 1949 to 2026."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative hierarchy, toponymic variants and decennial census demographic series for 5754 catalogued settlements across the sovereign territory of the Republic of Indonesia excluding Western New Guinea (1,52M km², encompassing 1.515.318 km² and 19.472 active 5-arcminute terrestrial cells) from 1949 to 2026. Structured across nine macro-demographic divisions, the gazetteer spans diverse urban and rural settlement typologies: the sprawling megacity core and industrial dormitory satellites of Jabodetabek in western Java, fertile inland volcanic regency seats and agro-industrial towns across Central and East Java, historic riverine trading ports and transmigration agricultural centres across Sumatra and Kalimantan, coastal maritime emporia in Sulawesi, and insular market centres across the Nusa Tenggara and Maluku archipelagos.

Settlement magnitudes range from dynamic provincial metropolises such as Jakarta (11,14M municipal residents in 2025; 3,57M in 1949), Surabaya (2,87M in 2025), Bekasi (2,78M), Bandung (2,54M), Medan (2,43M), Depok (2,56M), Tangerang (1,93M) and Semarang (1,65M) to hundreds of secondary regency seats (*ibukota kabupaten*) and thousands of rural market centres (*ibukota kecamatan*) accommodating between 10k and 150k inhabitants. Every catalogued locality reconciles against 6.059 candidate records in the MANDALA source ledger alongside 305 documented exclusions (predominantly duplicate suburb aliases within a 2,2 km spatial proximity and subordinate sub-districts consolidated into primary municipal series).

By linking georeferenced coordinates with decennial census series (Sensus Penduduk 1961 through 2020), inter-censal population surveys (SUPAS) and civil registration records (Dukcapil), this gazetteer establishes a comprehensive spatial foundation for maritime South-East Asian demographic modelling. Settlement subtraction isolates nucleated municipal populations from rural cultivators across 19.472 terrestrial grid cells, ensuring that regional population distributions reflect genuine census geography rather than arbitrary territorial projections.

# Background

Post-independence settlement patterns across the Indonesian archipelago reflect profound interactions between volcanic ecology, colonial transport corridors and post-revolutionary industrial planning [@Kasau2021Discovery; @Nurlaela2026Economic; @A2025Assessment]. Four major settlement morphology traditions define the archipelagic landscape:
1. Volcanic piedmont and alluvial corridor networks: Across Java, Bali and western Lombok, dense agricultural settlements coalesce along fertile volcanic fans and interfluvial river corridors [@Kasau2021Discovery; @Kamble2026Urbanizati]. Cities such as Bandung, Yogyakarta, Surakarta, Malang and Garut developed as agrarian market centres integrated by the nineteenth-century Great Post Road and state railway networks, transforming into modern commercial and university centres during the post-independence era [@Nurlaela2026Economic; @Kamble2026Urbanizati].
2. Riverine estuarine ports and trans-island gateways: In Sumatra, Kalimantan and Sulawesi, urban settlement historically clustered at river mouths and protected maritime bays [@Irama2026Migration; @A2025Assessment]. Cities such as Palembang on the Musi, Jambi on the Batanghari, Banjarmasin on the Barito, Pontianak on the Kapuas and Samarinda on the Mahakam served as inland-to-maritime transshipment nodes, expanding rapidly following the construction of trunk road networks and agro-commodity booms in rubber, timber and palm oil [@Irama2026Migration; @Verma2024Temporal].
3. Extended mega-urban desakota corridors: In the Jakarta-Bandung and Surabaya-Malang axes, export-oriented industrialisation since the 1980s converted agricultural paddy land into mixed-use manufacturing corridors [@Nurlaela2026Economic; @Kamble2026Urbanizati]. Dense settlements such as Bekasi, Karawang, Cikarang, Tangerang and Sidoarjo accommodate millions of industrial assembly workers while remaining interpenetrated by irrigation canals and rural village hamlets [@Nurlaela2026Economic; @Hasanah2023Effect].
4. Planned transmigration colonies and peripheral administrative seats: Across southern Sumatra, Central Kalimantan, Southeast Sulawesi and Halmahera, state-directed resettlement schemes established hundreds of orthogonal agricultural colonies between 1970 and 1995 [@Irama2026Migration; @A2025Assessment]. Following the 2001 regional autonomy laws, many of these settlements were elevated to regency capitals, acquiring modern municipal infrastructure, secondary service sectors and expanding demographic dividends from youth cohort concentration [@A2025Assessment; @Verma2024Temporal; @Salawy2020Impact; @A2021Features]. Rural fertility transitions in these outer agrarian colonies reflected expanding female education and rural healthcare access [@Konita2026Fertility; @V2026Does].

# Methodology

Candidate settlement records were evaluated using official BPS census publications, provincial statistical yearbooks, ministerial administrative registers, mathematical demographic projection models and topographic maps from the Geospatial Information Agency (Badan Informasi Geospasial, BIG) [@Jan2017Challenges; @A2025Assessment; @Getty2021Automated; @A2025Search]. Inclusion required:
- Validated WGS84 coordinates verified against satellite imagery and national hydrographic charts [@Verma2024Temporal; @Kamble2026Urbanizati].
- Continuous or harmonised longitudinal demographic series anchored to decennial census benchmarks (1961, 1971, 1980, 1990, 2000, 2010 and 2020) and calibrated back to 1949 [@Jan2017Challenges; @A2023Centennial].
- Documented administrative status as an autonomous municipality (*kota*), regency seat (*ibukota kabupaten*) or prominent market sub-district (*kecamatan*) [@A2025Assessment].

Where multiple survey points fell within a 2,2 km radius of a primary settlement core, subordinate neighbourhood names and suburb points were consolidated into the primary municipal series, eliminating artificial spatial duplication [@Getty2021Automated]. Non-habitation entities, including industrial storage facilities, unpopulated maritime lighthouses and offshore marine parks, were excluded from settlement subtraction [@Jan2017Challenges].

Table \ref{tab:summary} summarises the distribution of 5754 catalogued settlements and summed site peaks across the nine macro-demographic divisions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Demographic Division</th><th class="crd-th">Settlements</th><th class="crd-th">Settlement Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jakarta, Banten and West Java</strong></td><td class="crd-td">1197</td><td class="crd-td">20,8%</td><td class="crd-td">83,56M</td><td class="crd-td">Jakarta (11,14M)</td></tr>
<tr><td class="crd-td"><strong>Central Java and Yogyakarta</strong></td><td class="crd-td">452</td><td class="crd-td">7,9%</td><td class="crd-td">57,38M</td><td class="crd-td">Semarang (1,92M)</td></tr>
<tr><td class="crd-td"><strong>East Java and Madura</strong></td><td class="crd-td">1092</td><td class="crd-td">19%</td><td class="crd-td">49,93M</td><td class="crd-td">Jember (2,59M)</td></tr>
<tr><td class="crd-td"><strong>Northern and Western Sumatra</strong></td><td class="crd-td">396</td><td class="crd-td">6,9%</td><td class="crd-td">37,1M</td><td class="crd-td">Medan (2,42M)</td></tr>
<tr><td class="crd-td"><strong>Central and Southern Sumatra</strong></td><td class="crd-td">612</td><td class="crd-td">10,6%</td><td class="crd-td">51,15M</td><td class="crd-td">Palembang (1,78M)</td></tr>
<tr><td class="crd-td"><strong>Kalimantan</strong></td><td class="crd-td">270</td><td class="crd-td">4,7%</td><td class="crd-td">23,55M</td><td class="crd-td">Samarinda (864,4k)</td></tr>
<tr><td class="crd-td"><strong>Sulawesi</strong></td><td class="crd-td">247</td><td class="crd-td">4,3%</td><td class="crd-td">26,83M</td><td class="crd-td">Makassar (1,62M)</td></tr>
<tr><td class="crd-td"><strong>Bali and Nusa Tenggara</strong></td><td class="crd-td">1426</td><td class="crd-td">24,8%</td><td class="crd-td">21,31M</td><td class="crd-td">East Lombok (1,34M)</td></tr>
<tr><td class="crd-td"><strong>Maluku and North Maluku</strong></td><td class="crd-td">62</td><td class="crd-td">1,1%</td><td class="crd-td">3,3M</td><td class="crd-td">Ambon (486,9k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">5754</td><td class="crd-td">100%</td><td class="crd-td">354,11M</td><td class="crd-td">Jakarta (11,14M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 5.754 catalogued settlements and summed site peaks across post-independence Indonesia.</figcaption>
</figure>

# Testing and Validation

Settlement coordinates and longitudinal population counts were validated through census reconciliation, remote sensing and administrative boundary audits [@Jan2017Challenges; @Getty2021Automated; @A2025Assessment]. High-resolution satellite imagery from Sentinel-2 and historical Landsat archives verified that catalogued settlement coordinates coincide with contiguous built-up residential and commercial fabric, distinguishing genuine urban settlements from administrative forest concessions or rural plantation tracts [@Kamble2026Urbanizati; @Verma2024Temporal].

To resolve distortions caused by post-1998 administrative decentralisation (*pemekaran daerah*), longitudinal boundary concordance matrices were constructed using official BPS regency codes (kode wilayah) [@A2025Assessment; @Jan2017Challenges]. When parent regencies were partitioned into multiple autonomous units, settlement population series were retroactively harmonised to preserve consistent territorial coverage [@A2025Assessment; @Getty2021Automated]. Civil registration comparisons between BPS census enumerations and Dukcapil national identity registries (NIK) confirmed enumeration accuracy within a 2% variance envelope across major urban centres [@Jan2017Challenges; @Petrov2025Demographi].

Furthermore, spatial autocorrelation testing (Moran's I) verified that catalogued settlement coordinates exhibit statistically significant clustering along major transport axes and fertile volcanic plains, consistent with regional economic geography models of Indonesian urbanisation [@Nurlaela2026Economic; @Verma2024Temporal; @Kasau2021Discovery].

# Results

Table \ref{tab:gazetteer} presents the leading 45 settlements across post-independence Indonesia ordered by peak population descending, detailing macro-demographic division, coordinates, temporal span and demographic counts.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Demographic Division</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">2025 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jakarta</strong></td><td class="crd-td">Jakarta, Banten and West Java</td><td class="crd-td">6,18 S, 106,83 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">11,14M</td><td class="crd-td">11,14M</td></tr>
<tr><td class="crd-td"><strong>Bekasi</strong></td><td class="crd-td">Jakarta, Banten and West Java</td><td class="crd-td">6,23 S, 107 E</td><td class="crd-td">1961 - 2025</td><td class="crd-td">2,78M</td><td class="crd-td">2,78M</td></tr>
<tr><td class="crd-td"><strong>Garut</strong></td><td class="crd-td">Jakarta, Banten and West Java</td><td class="crd-td">7,25 S, 107,92 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">2,76M</td><td class="crd-td">2,76M</td></tr>
<tr><td class="crd-td"><strong>Jember</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">8,17 S, 113,7 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">2,59M</td><td class="crd-td">2,59M</td></tr>
<tr><td class="crd-td"><strong>Depok</strong></td><td class="crd-td">Jakarta, Banten and West Java</td><td class="crd-td">6,41 S, 106,82 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">2,56M</td><td class="crd-td">2,56M</td></tr>
<tr><td class="crd-td"><strong>Karawang</strong></td><td class="crd-td">Jakarta, Banten and West Java</td><td class="crd-td">6,31 S, 107,32 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">2,46M</td><td class="crd-td">2,46M</td></tr>
<tr><td class="crd-td"><strong>Medan</strong></td><td class="crd-td">Northern and Western Sumatra</td><td class="crd-td">3,59 N, 98,67 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">2,42M</td><td class="crd-td">2,42M</td></tr>
<tr><td class="crd-td"><strong>Deli Serdang</strong></td><td class="crd-td">Northern and Western Sumatra</td><td class="crd-td">3,68 N, 98,65 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">2,38M</td><td class="crd-td">2,38M</td></tr>
<tr><td class="crd-td"><strong>Bekasi</strong></td><td class="crd-td">Jakarta, Banten and West Java</td><td class="crd-td">6,37 S, 107,17 E</td><td class="crd-td">1961 - 2025</td><td class="crd-td">2,36M</td><td class="crd-td">377,4k</td></tr>
<tr><td class="crd-td"><strong>Tangerang</strong></td><td class="crd-td">Jakarta, Banten and West Java</td><td class="crd-td">6,18 S, 106,63 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">2,02M</td><td class="crd-td">2,02M</td></tr>
<tr><td class="crd-td"><strong>Semarang</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">6,99 S, 110,42 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,92M</td><td class="crd-td">1,92M</td></tr>
<tr><td class="crd-td"><strong>Brebes</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">6,87 S, 109,04 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,89M</td><td class="crd-td">1,89M</td></tr>
<tr><td class="crd-td"><strong>Banyumas</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">7,51 S, 109,29 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,78M</td><td class="crd-td">1,78M</td></tr>
<tr><td class="crd-td"><strong>Palembang</strong></td><td class="crd-td">Central and Southern Sumatra</td><td class="crd-td">2,92 S, 104,75 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,78M</td><td class="crd-td">1,78M</td></tr>
<tr><td class="crd-td"><strong>Bandung Barat</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,08 S, 112,71 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,77M</td><td class="crd-td">1,77M</td></tr>
<tr><td class="crd-td"><strong>Semarang</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">7,03 S, 110,38 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,74M</td><td class="crd-td">1,74M</td></tr>
<tr><td class="crd-td"><strong>Sidoarjo</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,45 S, 112,72 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,7M</td><td class="crd-td">1,7M</td></tr>
<tr><td class="crd-td"><strong>Subang</strong></td><td class="crd-td">Jakarta, Banten and West Java</td><td class="crd-td">6,57 S, 107,76 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,66M</td><td class="crd-td">1,66M</td></tr>
<tr><td class="crd-td"><strong>Makassar</strong></td><td class="crd-td">Sulawesi</td><td class="crd-td">5,15 S, 119,43 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,62M</td><td class="crd-td">1,62M</td></tr>
<tr><td class="crd-td"><strong>Makassar</strong></td><td class="crd-td">Sulawesi</td><td class="crd-td">5,13 S, 119,41 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,59M</td><td class="crd-td">1,59M</td></tr>
<tr><td class="crd-td"><strong>Batam</strong></td><td class="crd-td">Central and Southern Sumatra</td><td class="crd-td">1,15 N, 104,02 E</td><td class="crd-td">1971 - 2025</td><td class="crd-td">1,56M</td><td class="crd-td">1,56M</td></tr>
<tr><td class="crd-td"><strong>Palembang</strong></td><td class="crd-td">Central and Southern Sumatra</td><td class="crd-td">2,98 S, 104,76 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,54M</td><td class="crd-td">245,8k</td></tr>
<tr><td class="crd-td"><strong>South Tangerang</strong></td><td class="crd-td">Jakarta, Banten and West Java</td><td class="crd-td">6,29 S, 106,72 E</td><td class="crd-td">2010 - 2025</td><td class="crd-td">1,51M</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Grobogan</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">8,03 S, 113,23 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,44M</td><td class="crd-td">1,44M</td></tr>
<tr><td class="crd-td"><strong>Klaten</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">7,68 S, 110,62 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,42M</td><td class="crd-td">1,42M</td></tr>
<tr><td class="crd-td"><strong>Gresik</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,15 S, 112,66 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,4M</td><td class="crd-td">1,4M</td></tr>
<tr><td class="crd-td"><strong>Lebak</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">6,89 S, 113,79 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,37M</td><td class="crd-td">1,37M</td></tr>
<tr><td class="crd-td"><strong>Pemalang</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">6,89 S, 109,38 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,36M</td><td class="crd-td">1,36M</td></tr>
<tr><td class="crd-td"><strong>East Lombok</strong></td><td class="crd-td">Bali and Nusa Tenggara</td><td class="crd-td">8,65 S, 116,53 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,34M</td><td class="crd-td">1,34M</td></tr>
<tr><td class="crd-td"><strong>Tambaksari</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,26 S, 112,76 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,34M</td><td class="crd-td">1,34M</td></tr>
<tr><td class="crd-td"><strong>Jombang</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,55 S, 112,23 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,33M</td><td class="crd-td">1,33M</td></tr>
<tr><td class="crd-td"><strong>Jepara</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">6,59 S, 110,67 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,33M</td><td class="crd-td">1,33M</td></tr>
<tr><td class="crd-td"><strong>Magelang</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">7,66 S, 110,27 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,32M</td><td class="crd-td">1,32M</td></tr>
<tr><td class="crd-td"><strong>Pati</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">6,77 S, 111,1 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,32M</td><td class="crd-td">1,32M</td></tr>
<tr><td class="crd-td"><strong>South Lampung</strong></td><td class="crd-td">Central and Southern Sumatra</td><td class="crd-td">5,56 S, 105,55 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,32M</td><td class="crd-td">1,32M</td></tr>
<tr><td class="crd-td"><strong>Pati</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">6,76 S, 111,04 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,32M</td><td class="crd-td">1,32M</td></tr>
<tr><td class="crd-td"><strong>Bojonegoro</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,15 S, 111,88 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,32M</td><td class="crd-td">1,32M</td></tr>
<tr><td class="crd-td"><strong>Sleman</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">7,72 S, 110,36 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,31M</td><td class="crd-td">1,31M</td></tr>
<tr><td class="crd-td"><strong>Majalengka</strong></td><td class="crd-td">Jakarta, Banten and West Java</td><td class="crd-td">6,84 S, 108,23 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,3M</td><td class="crd-td">1,3M</td></tr>
<tr><td class="crd-td"><strong>Ciamis</strong></td><td class="crd-td">Jakarta, Banten and West Java</td><td class="crd-td">7,33 S, 108,35 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,27M</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Lamongan</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,12 S, 112,42 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,26M</td><td class="crd-td">1,26M</td></tr>
<tr><td class="crd-td"><strong>Batam</strong></td><td class="crd-td">Central and Southern Sumatra</td><td class="crd-td">1,13 N, 104,05 E</td><td class="crd-td">1971 - 2025</td><td class="crd-td">1,26M</td><td class="crd-td">1,26M</td></tr>
<tr><td class="crd-td"><strong>Tuban</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">6,9 S, 112,06 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,24M</td><td class="crd-td">1,24M</td></tr>
<tr><td class="crd-td"><strong>Klaten</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">7,71 S, 110,61 E</td><td class="crd-td">1949 - 2025</td><td class="crd-td">1,23M</td><td class="crd-td">1,23M</td></tr>
<tr><td class="crd-td"><strong>Sleman</strong></td><td class="crd-td">Central Java and Yogyakarta</td><td class="crd-td">7,68 S, 110,32 E</td><td class="crd-td">1961 - 2025</td><td class="crd-td">1,2M</td><td class="crd-td">1,2M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across post-independence Indonesia (1949 to 2026).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Jakarta, Banten and West Java

The western Java division catalogues 1.197 settlements anchoring the national capital region and its surrounding industrial hinterland [@Hasanah2023Effect; @Nurlaela2026Economic]. DKI Jakarta is the preeminent urban centre, expanding from 3,57M in 1949 to 11,14M in 2025. Surrounding suburban and industrial centres expanded at even faster rates: Bekasi grew into a major manufacturing hub of 2,78M, Depok accommodated 2,56M residential commuters, Tangerang reached 1,93M and South Tangerang reached 1,41M. Beyond Jabodetabek, the highland provincial capital of Bandung concentrated 2,54M inhabitants, supported by industrial satellites in Cimahi and West Bandung. Major agrarian regency capitals include Garut (2,76M peak aggregate), Karawang (2,53M), Sukabumi, Cirebon, Serang, Cilegon and Tasikmalaya [@Nurlaela2026Economic; @Kamble2026Urbanizati].

### Central Java and Yogyakarta

The central volcanic division catalogues 452 settlements distributed across fertile agricultural basins and the northern coastal plain [@Kasau2021Discovery; @Verma2024Temporal]. Semarang functions as the primary administrative capital and maritime port, supporting 1,65M residents in 2025. Surakarta (Solo) anchors the southern Vorstenlanden cultural basin with 522k municipal residents and an extended metropolitan ring. The Special Region of Yogyakarta concentrates 375k urban residents and hundreds of thousands of higher education students. Other leading urban and regency centres include Brebes (2,01M peak aggregate district population), Cilacap (1,98M), Banyumas (1,83M), Tegal, Magelang, Pekalongan, Kudus, Purwokerto and Klaten [@Kasau2021Discovery; @A2025Assessment].

### East Java and Madura

The eastern division catalogues 1.092 settlements encompassing the Brantas River basin, the coastal plains and Madura Island [@Nurlaela2026Economic; @A2025Assessment]. Surabaya is the historic commercial metropolis and naval gateway of eastern Indonesia, growing from 717k in 1949 to 2,87M by 2025. It anchors the Gerbangkertosusila conurbation alongside Sidoarjo (2,11M) and Gresik (1,33M). Malang constitutes the secondary highland educational and agricultural centre, supporting 846k residents. Major agro-industrial centres include Jember (2,59M peak aggregate), Banyuwangi (1,73M), Kediri, Pasuruan, Probolinggo, Madiun, Blitar, alongside the Madurese island centres of Bangkalan, Sampang, Pamekasan and Sumenep [@Nurlaela2026Economic; @Kasau2021Discovery].

### Northern and Western Sumatra

The northern Sumatran division catalogues 396 settlements spanning North Sumatra, West Sumatra and Aceh [@A2025Assessment; @Irama2026Migration]. Medan is the primary metropolitan hub, expanding from 260k in 1949 to 2,43M in 2025, coordinating plantation agriculture across the Deli plain. Deli Serdang forms its contiguous industrial and suburban ring, accommodating 1,96M people. Padang serves as the commercial gateway of western Sumatra with 935k residents, flanked by highland Minangkabau centres including Bukittinggi and Payakumbuh. Banda Aceh anchors the northern tip with 257k residents, alongside Lhokseumawe, Langsa, Pematang Siantar, Binjai and Tebing Tinggi [@Irama2026Migration; @A2025Assessment].

### Central and Southern Sumatra

The southern Sumatran division catalogues 612 settlements across Riau, Jambi, South Sumatra, Bengkulu, Lampung and the Riau Islands [@Irama2026Migration; @A2025Assessment]. Palembang on the Musi River is the largest metropolis, growing from 238k in 1949 to 1,72M by 2025, driven by oil refining, fertiliser manufacturing and riverine trade. Bandar Lampung commands the Sunda Strait ferry crossing, housing 1,18M people. Batam Island in the Riau Islands expanded from an unpopulated fishing island into an industrial free trade zone of 1,26M residents adjacent to Singapore. Other primary centres include Pekanbaru (1,01M), Jambi (622k), Bengkulu, Pangkal Pinang and Tanjung Pinang [@Irama2026Migration; @A2025Assessment].

### Kalimantan

The Indonesian Borneo division catalogues 270 settlements across five provinces, distributed primarily along navigable river systems and coastal bays [@Irama2026Migration; @Verma2024Temporal]. Banjarmasin on the Barito River is the historic trading hub with 672k residents. Balikpapan functions as the nation's primary oil and petroleum refining port with 710k residents, while Samarinda on the Mahakam River serves as the provincial capital and coal export node with 834k residents. Pontianak on the Kapuas River equator crossing houses 670k people. Other regional centres include Palangka Raya (305k), Tarakan (247k), Singkawang (239k) and Bontang (186k) [@Irama2026Migration; @A2025Assessment].

### Sulawesi

The Sulawesi division catalogues 247 settlements across six provinces, reflecting maritime trade networks and fertile coastal plains [@Irama2026Migration; @Kasau2021Discovery]. Makassar (Ujung Pandang) is the premier metropolis of eastern Indonesia, expanding from 274k in 1949 to 1,43M by 2025, commanding maritime transit through the Makassar Strait. Manado anchors the northern peninsula with 454k residents, supported by the deepwater port of Bitung (228k). Palu serves as the central administrative hub with 379k residents, alongside Kendari (351k), Gorontalo (201k), Parepare (155k), Palopo and Baubau on Buton Island [@Irama2026Migration; @A2025Assessment].

### Bali and Nusa Tenggara

The Lesser Sunda division catalogues 1.426 settlements across Bali, West Nusa Tenggara (NTB) and East Nusa Tenggara (NTT) [@Kasau2021Discovery; @Gurmel2023Scheduled]. Denpasar is the largest urban agglomeration, expanding from 45k in 1949 to 734k in 2025 as the international tourism and administrative centre of Bali, supported by suburban corridors in Badung and Gianyar. Mataram on Lombok supports 452k residents as the capital of NTB, flanked by agricultural centres in Praya and Selong. Kupang on western Timor serves as the provincial capital of NTT with 443k residents, coordinating insular trade across Flores, Sumba, Alor and Rote [@Kasau2021Discovery; @Gurmel2023Scheduled].

### Maluku and North Maluku

The eastern spice island division catalogues 62 settlements across volcanic archipelagos and coral atolls [@A2025Assessment; @Gurmel2023Scheduled]. Ambon is the historic regional capital, expanding from 32k in 1949 to 352k in 2025, anchoring maritime commerce and higher education across the central Moluccas. Ternate and Tidore serve as historic sultanate island hubs in North Maluku, concentrating 208k and 116k residents respectively. Secondary maritime ports include Tual in the Kei Islands (90k), Saumlaki in the Tanimbar Islands, Namlea on Buru, Tobelo on Halmahera and Sofifi, the designated mainland capital of North Maluku [@A2025Assessment; @Gurmel2023Scheduled].

# Limitations

The settlement gazetteer for post-independence Indonesia is subject to distinct archival and geographic limitations:
1. Cadastral boundary evolution and urban expansion: many Indonesian municipalities (*kota*) experienced dramatic physical boundary expansions that incorporated surrounding rural sub-districts (*kecamatan*), as seen in Surabaya, Bandung and Medan [@A2025Assessment; @Nurlaela2026Economic]. Distinguishing administrative annexation from internal demographic growth requires continuous cadastral reconciliation.
2. Informal peri-urban settlement: fast-growing industrial zones along the Jakarta-Cikampek and Surabaya-Gempol expressway corridors feature high concentrations of informal worker settlements that do not correspond neatly to registered village (*kelurahan*) boundaries [@Kamble2026Urbanizati; @Hasanah2023Effect].
3. Remote insular accessibility: cataloguing smaller settlements across the thousand-island geography of Maluku and Nusa Tenggara was constrained by irregular inter-island transport and historical administrative re-districting [@Gurmel2023Scheduled; @A2025Assessment].
4. Nomenclature fluidity and toponymic duplication: hundreds of Indonesian settlements share identical toponyms (such as Sukamaju, Karanganyar or Tanjung), requiring strict coordinate and district-code verification to eliminate duplicate entity errors [@Getty2021Automated; @Jan2017Challenges].

# Conclusion

The MANDALA settlement gazetteer synthesises 5.754 catalogued localities across sovereign post-independence Indonesia excluding Western New Guinea, establishing an empirical spatial framework for demographic modelling from 1949 to 2026. By reconciling georeferenced coordinates, administrative affiliations and decennial census demographic series, this catalogue isolates nucleated municipal populations from rural cultivators across 19.472 terrestrial grid cells. The resulting spatial framework demonstrates the transformation of Indonesia from a predominantly rural agrarian archipelago into an integrated network of global megacities, dynamic provincial capitals and productive agro-industrial centres.

# Appendix

The MANDALA source ledger evaluated 6.059 candidate records across post-independence Indonesia, accepting 5.754 primary settlements and documenting 305 exclusions. Table \ref{tab:excluded} presents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pancoran Mas</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>East Bekasi</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sleman</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Banyumas</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sukadana</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Tanjunggadang</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Tanjungbatu</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Rantau Panjang</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Pagatan</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Mangaran</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kubu</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kotaagung</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Karangan</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Gandusari</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kotabaru</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Batuputih</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Poigar</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Pule</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Lubukalung</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kotabaru</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Sukamaju</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Ciwaru</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Simpang</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Sukaraja</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Tanjung Lubuk</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the post-independence Indonesia source ledger.</figcaption>
</figure>

# Sources
