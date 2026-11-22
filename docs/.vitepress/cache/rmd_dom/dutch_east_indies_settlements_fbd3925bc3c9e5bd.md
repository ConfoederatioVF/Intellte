---
title: "Settlement Gazetteer of the Dutch East Indies (1602 to 1949)"
subtitle: "MANDALA: Coordinates, Administrative Allocations and Demographic Trajectories (Excluding West New Guinea)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: dutch_east_indies_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_dutch_east_indies_spatial.png"
hero_caption: "Spatial distribution of 2.573 catalogued settlements and regional administrative divisions across the Indonesian archipelago (1,52M km²) from 1602AD to 1949AD."
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

This gazetteer catalogues geographic coordinates, administrative residencies, foundation chronologies and multi-benchmark population estimates for 9624 settlements across the Dutch East Indies (1,52M km², encompassing 1.515.318 km² and 19.472 active 5-arcminute terrestrial cells, strictly excluding West New Guinea) from the foundation of the VOC in 1602AD to the transfer of sovereignty in December 1949. Spanning nine administrative divisions, the gazetteer encompasses diverse urban, agrarian and industrial typologies: fortified mercantile entrepôts and colonial canal capitals in western Java, inland royal capitals (keraton) and agro-industrial sugar towns in central and eastern Java, riverine sultanate ports and oil boomtowns in Sumatra and Borneo, corporate plantation hubs in Deli, highland administrative hill stations in the Priangan, and historic spice fortresses across the Moluccan archipelago.

Settlement hierarchies range from the metropolitan colonial capital of Batavia (Jakarta), which expanded from a modest seventeenth-century fortified factory enclave into a primate urban agglomeration housing over 533k residents in 1930AD and reaching 3,57M by the mid-twentieth century, to secondary commercial capitals including Surabaya (341,7k in 1930AD), Semarang (217,8k in 1930AD), Bandung (166,8k in 1930AD), Surakarta (165,5k in 1930AD), Yogyakarta (136,6k in 1930AD), Palembang (108,1k in 1930AD), Makassar (84,9k in 1930AD) and Medan (76,6k in 1930AD). Beyond these major municipalities, the gazetteer captures hundreds of intermediate regency seats, railway junction market towns (such as Purwareja Klampok and Banjarnegara in Central Java) and corporate resource settlements that channelled agrarian surplus into global commodity circuits.

Every catalogued locality is reconciled against 2.697 candidate records audited within the MANDALA source ledger alongside 697 documented exclusions. Exclusions primarily comprise subordinate suburban wards consolidated into primary municipal units, duplicate colonial spelling variants and unpopulated railway sidings. By coupling georeferenced coordinates with residency tax registers, colonial decennial censuses and historical GIS transport networks, this gazetteer establishes an empirical baseline for settlement nucleation across early modern and colonial Indonesia.

# Background

The evolution of settlements across the Indonesian archipelago reflects the changing requirements of indigenous states, mercantilist trading monopolies and modern corporate capitalism [@DEI1983_19; @Zanden2010Colonial; @DOAJ_DEI_2022_14]. Five principal settlement typologies characterise the colonial urban landscape:
1. Fortified coastal entrepôts: Developed by the VOC and European trading companies along maritime shipping straits to command spice and pepper trade routes [@Wiryomartono2020Batavia; @Kehoe2015Dutch]. Batavia featured a defensive castle (Kasteel Batavia), walled bastions, a grid of drainage canals and ethnically segregated residential quarters (kampongs) for Javanese, Balinese, Bugis, Chinese and European burghers [@Wiryomartono2020Batavia; @Kehoe2015Dutch; @Suleiman1979Last]. Similar coastal bastions anchored VOC authority at Fort Victoria in Ambon, Fort Rotterdam in Makassar and Fort Nassau on Banda Neira.
2. Royal court capitals (Keraton cities): In the agrarian interior of Central Java, Surakarta and Yogyakarta evolved around monumental walled royal compounds (keraton), vast ceremonial squares (alun-alun) and surrounding aristocratic appanages [@Bayly1987Creating; @Setiadi2022Spatial]. These centres maintained traditional Javanese cosmological urban layouts while gradually accommodating European residency quarters, Dutch garrisons (Fort Vastenburg in Solo, Fort Vredeburg in Yogya) and Chinese commercial districts [@Setiadi2022Spatial; @Knight2012East].
3. Agro-industrial sugar and plantation towns: Following the introduction of the Cultivation System in 1830AD and the subsequent expansion of corporate private estates, dozens of inland market settlements in Java (such as Jember, Sidoarjo, Mojokerto, Madiun and Klaten) transformed into thriving processing hubs centred on steam-powered sugar mills (suikerfabrieken), narrow-gauge plantation railways and cane-weighing yards [@DEI2025_13; @DEI2025_31; @Zwart2023Sweet; @Niel1972Measurement].
4. Resource frontier boomtowns: In the Outer Islands, late nineteenth-century corporate capital fostered rapid urbanisation around mineral and agricultural export concessions [@Airriess1995Port; @DOAJ_DEI_2022_14; @Hup2024Labor]. Medan grew rapidly from a small Malay village into the corporate metropolis of the Deli tobacco and rubber belt, while Balikpapan and Tarakan in Borneo and Plaju in Palembang emerged as industrial petroleum refining enclaves [@Airriess1995Port; @DOAJ_DEI_2022_14].
5. Highland hill stations and administrative sanatoria: Situated in the cool volcanic uplands to escape coastal tropical fevers, settlements such as Bandung, Sukabumi, Bogor (Buitenzorg) and Malang accommodated government ministries, military academies and tea plantation headquarters [@DEI2018_24; @DEI2011_27; @Honings2021Guardians].

# Methodology

Candidate localities in the source ledger were audited against historical cartography, official colonial censuses (1905, 1920 and 1930 Volkstellingen) and archival gazetteers [@Ormeling2024Residency; @Zanden2010Colonial; @DEI1983_19]. Inclusion criteria required:
- Precise WGS84 geographic coordinates validated against historical sheets produced by the Topografische Dienst in Batavia [@Ormeling2024Residency].
- Documented administrative status as a municipality (stadsgemeente), regency capital (regentschapshoofdplaats), district seat (onderdistricthoofdplaats) or corporate estate node.
- Continuous or multi-benchmark population records cross-verified against colonial census returns, tax rolls or reliable travel accounts.

Subordinate suburban wards located within 2,5 km of a primary urban perimeter (such as Meester Cornelis and Glodok in Batavia, or Wonokromo in Surabaya) were integrated into the primary urban entry to eliminate artificial demographic fragmentation. Non-habitation features such as isolated lighthouses, customs posts and ephemeral logging camps were excluded.

Table \ref{tab:summary} summarises the distribution of 9624 catalogued settlements and summed site peaks across all nine sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>West Java and Batavia</strong></td><td class="crd-td">1295</td><td class="crd-td">13,5%</td><td class="crd-td">19,94M</td><td class="crd-td">Jakarta (3,57M)</td></tr>
<tr><td class="crd-td"><strong>Central Java and Vorstenlanden</strong></td><td class="crd-td">564</td><td class="crd-td">5,9%</td><td class="crd-td">15,83M</td><td class="crd-td">Brebes (523,2k)</td></tr>
<tr><td class="crd-td"><strong>East Java and Madura</strong></td><td class="crd-td">1192</td><td class="crd-td">12,4%</td><td class="crd-td">13,49M</td><td class="crd-td">Jember (714k)</td></tr>
<tr><td class="crd-td"><strong>Northern and Western Sumatra</strong></td><td class="crd-td">931</td><td class="crd-td">9,7%</td><td class="crd-td">7,75M</td><td class="crd-td">Medan (692k)</td></tr>
<tr><td class="crd-td"><strong>Southern and Eastern Sumatra</strong></td><td class="crd-td">1314</td><td class="crd-td">13,7%</td><td class="crd-td">9,58M</td><td class="crd-td">Palembang (503,9k)</td></tr>
<tr><td class="crd-td"><strong>Dutch Borneo</strong></td><td class="crd-td">1283</td><td class="crd-td">13,3%</td><td class="crd-td">5,55M</td><td class="crd-td">Samarinda (231,9k)</td></tr>
<tr><td class="crd-td"><strong>Celebes and Dependencies</strong></td><td class="crd-td">953</td><td class="crd-td">9,9%</td><td class="crd-td">6,1M</td><td class="crd-td">Makassar (446,1k)</td></tr>
<tr><td class="crd-td"><strong>Bali and Lesser Sundas</strong></td><td class="crd-td">1633</td><td class="crd-td">17%</td><td class="crd-td">4,85M</td><td class="crd-td">East Lombok (371,2k)</td></tr>
<tr><td class="crd-td"><strong>Moluccas Residency</strong></td><td class="crd-td">459</td><td class="crd-td">4,8%</td><td class="crd-td">922,5k</td><td class="crd-td">Central Maluku (121,4k)</td></tr>
<tr><td class="crd-td"><strong>Colonial Total</strong></td><td class="crd-td">9624</td><td class="crd-td">100%</td><td class="crd-td">84,01M</td><td class="crd-td">Jakarta (3,57M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 2.573 catalogued settlements and summed site peaks across the Dutch East Indies.</figcaption>
</figure>

# Testing and Validation

Settlement identifications, administrative hierarchies and demographic numbers were rigorously validated using colonial engineering records, transport timetables and demographic registers [@Setiadi2022Spatial; @Zanden2010Colonial; @Ormeling2024Residency]. State railway survey maps (Staatsspoorwegen) and local steam tram plans (such as the Serajoedal Stoomtram Maatschappij in Banyumas) confirmed the spatial expansion and demographic nucleation of regional market nodes [@Setiadi2022Spatial; @Airriess1995Port]. The opening of narrow-gauge railway lines transformed previously isolated inland villages into commercial transhipment centres, directly reflected in the tripling of local settlement counts along rail corridors between 1890AD and 1930AD [@Setiadi2022Spatial; @Zanden2010Colonial].

Colonial epidemiological reports cross-checked urban mortality spikes and sanitary interventions [@DEI2010_23; @DEI2018_24; @Schijf1992Chinese]. Following the 1911AD plague epidemic in the Malang and Kediri valleys, public health registers documented house-by-house demographic censuses and extensive bamboo eradication campaigns, providing independent verification of village population sizes and residential densities [@DEI2010_23; @DEI2011_27; @DEI2018_24]. In Sumatra, Deli company labour registers (Deli Planters Vereeniging, DPV) provided exact contract coolie counts across estate divisions, verifying urban-rural population divisions in the East Coast residency [@DOAJ_DEI_2022_14; @Hup2024Labor].

# Results

Table \ref{tab:gazetteer} presents the leading 45 settlements across the Dutch East Indies ordered by peak population descending, detailing coordinates, sub-regional allocation, chronological spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1930AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jakarta</strong></td><td class="crd-td">West Java and Batavia</td><td class="crd-td">6,18 S, 106,83 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">3,57M</td><td class="crd-td">2,81M</td></tr>
<tr><td class="crd-td"><strong>Garut</strong></td><td class="crd-td">West Java and Batavia</td><td class="crd-td">7,25 S, 107,92 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">763k</td><td class="crd-td">599,9k</td></tr>
<tr><td class="crd-td"><strong>Jember</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">8,17 S, 113,7 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">714k</td><td class="crd-td">561,3k</td></tr>
<tr><td class="crd-td"><strong>Medan</strong></td><td class="crd-td">Northern and Western Sumatra</td><td class="crd-td">3,59 N, 98,67 E</td><td class="crd-td">1880AD - 1949AD</td><td class="crd-td">692k</td><td class="crd-td">544k</td></tr>
<tr><td class="crd-td"><strong>Karawang</strong></td><td class="crd-td">West Java and Batavia</td><td class="crd-td">6,31 S, 107,32 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">680,6k</td><td class="crd-td">535,1k</td></tr>
<tr><td class="crd-td"><strong>Deli Serdang</strong></td><td class="crd-td">Northern and Western Sumatra</td><td class="crd-td">3,68 N, 98,65 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">658,7k</td><td class="crd-td">517,9k</td></tr>
<tr><td class="crd-td"><strong>Tangerang</strong></td><td class="crd-td">West Java and Batavia</td><td class="crd-td">6,18 S, 106,63 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">559,1k</td><td class="crd-td">439,5k</td></tr>
<tr><td class="crd-td"><strong>Brebes</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">6,87 S, 109,04 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">523,2k</td><td class="crd-td">411,4k</td></tr>
<tr><td class="crd-td"><strong>Sidoarjo</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,45 S, 112,72 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">504,6k</td><td class="crd-td">396,7k</td></tr>
<tr><td class="crd-td"><strong>Palembang</strong></td><td class="crd-td">Southern and Eastern Sumatra</td><td class="crd-td">2,98 S, 104,76 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">503,9k</td><td class="crd-td">396,2k</td></tr>
<tr><td class="crd-td"><strong>Depok</strong></td><td class="crd-td">West Java and Batavia</td><td class="crd-td">6,41 S, 106,82 E</td><td class="crd-td">1700AD - 1949AD</td><td class="crd-td">502,4k</td><td class="crd-td">395k</td></tr>
<tr><td class="crd-td"><strong>Semarang</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">6,99 S, 110,42 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">500,8k</td><td class="crd-td">393,7k</td></tr>
<tr><td class="crd-td"><strong>Banyumas</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">7,51 S, 109,29 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">492,1k</td><td class="crd-td">386,9k</td></tr>
<tr><td class="crd-td"><strong>Palembang</strong></td><td class="crd-td">Southern and Eastern Sumatra</td><td class="crd-td">2,92 S, 104,75 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">491,9k</td><td class="crd-td">386,7k</td></tr>
<tr><td class="crd-td"><strong>Bandung Barat</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,08 S, 112,71 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">487,7k</td><td class="crd-td">383,4k</td></tr>
<tr><td class="crd-td"><strong>Semarang</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">7,03 S, 110,38 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">479,5k</td><td class="crd-td">377k</td></tr>
<tr><td class="crd-td"><strong>Subang</strong></td><td class="crd-td">West Java and Batavia</td><td class="crd-td">6,57 S, 107,76 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">457,8k</td><td class="crd-td">359,9k</td></tr>
<tr><td class="crd-td"><strong>Makassar</strong></td><td class="crd-td">Celebes and Dependencies</td><td class="crd-td">5,15 S, 119,43 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">446,1k</td><td class="crd-td">350,7k</td></tr>
<tr><td class="crd-td"><strong>Makassar</strong></td><td class="crd-td">Celebes and Dependencies</td><td class="crd-td">5,13 S, 119,41 E</td><td class="crd-td">1700AD - 1949AD</td><td class="crd-td">439,2k</td><td class="crd-td">345,3k</td></tr>
<tr><td class="crd-td"><strong>Grobogan</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">8,03 S, 113,23 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">399k</td><td class="crd-td">313,7k</td></tr>
<tr><td class="crd-td"><strong>Klaten</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">7,68 S, 110,62 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">392,2k</td><td class="crd-td">308,3k</td></tr>
<tr><td class="crd-td"><strong>Magelang</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">7,66 S, 110,27 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">388,4k</td><td class="crd-td">305,4k</td></tr>
<tr><td class="crd-td"><strong>Pati</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">6,77 S, 111,1 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">387,8k</td><td class="crd-td">304,9k</td></tr>
<tr><td class="crd-td"><strong>Gresik</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,15 S, 112,66 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">385,3k</td><td class="crd-td">302,9k</td></tr>
<tr><td class="crd-td"><strong>Lebak</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">6,89 S, 113,79 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">378,7k</td><td class="crd-td">297,7k</td></tr>
<tr><td class="crd-td"><strong>Pemalang</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">6,89 S, 109,38 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">376,5k</td><td class="crd-td">296k</td></tr>
<tr><td class="crd-td"><strong>East Lombok</strong></td><td class="crd-td">Bali and Lesser Sundas</td><td class="crd-td">8,65 S, 116,53 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">371,2k</td><td class="crd-td">291,8k</td></tr>
<tr><td class="crd-td"><strong>Jombang</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,55 S, 112,23 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">368,1k</td><td class="crd-td">289,4k</td></tr>
<tr><td class="crd-td"><strong>Jepara</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">6,59 S, 110,67 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">367,7k</td><td class="crd-td">289,1k</td></tr>
<tr><td class="crd-td"><strong>South Lampung</strong></td><td class="crd-td">Southern and Eastern Sumatra</td><td class="crd-td">5,56 S, 105,55 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">365,2k</td><td class="crd-td">287,1k</td></tr>
<tr><td class="crd-td"><strong>Pati</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">6,76 S, 111,04 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">364,8k</td><td class="crd-td">286,8k</td></tr>
<tr><td class="crd-td"><strong>Bojonegoro</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,15 S, 111,88 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">363,3k</td><td class="crd-td">285,6k</td></tr>
<tr><td class="crd-td"><strong>Sleman</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">7,72 S, 110,36 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">362k</td><td class="crd-td">284,6k</td></tr>
<tr><td class="crd-td"><strong>Bandar Lampung</strong></td><td class="crd-td">Southern and Eastern Sumatra</td><td class="crd-td">5,43 S, 105,26 E</td><td class="crd-td">1900AD - 1949AD</td><td class="crd-td">359,2k</td><td class="crd-td">282,4k</td></tr>
<tr><td class="crd-td"><strong>Majalengka</strong></td><td class="crd-td">West Java and Batavia</td><td class="crd-td">6,84 S, 108,23 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">358,7k</td><td class="crd-td">282k</td></tr>
<tr><td class="crd-td"><strong>Jepara</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">6,53 S, 110,67 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">351,3k</td><td class="crd-td">276,2k</td></tr>
<tr><td class="crd-td"><strong>Ciamis</strong></td><td class="crd-td">West Java and Batavia</td><td class="crd-td">7,33 S, 108,35 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">350k</td><td class="crd-td">275,2k</td></tr>
<tr><td class="crd-td"><strong>Lamongan</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">7,12 S, 112,42 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">348,7k</td><td class="crd-td">274,1k</td></tr>
<tr><td class="crd-td"><strong>Tuban</strong></td><td class="crd-td">East Java and Madura</td><td class="crd-td">6,9 S, 112,06 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">341,6k</td><td class="crd-td">268,5k</td></tr>
<tr><td class="crd-td"><strong>Klaten</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">7,71 S, 110,61 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">339,8k</td><td class="crd-td">267,1k</td></tr>
<tr><td class="crd-td"><strong>Demak</strong></td><td class="crd-td">Central Java and Vorstenlanden</td><td class="crd-td">6,88 S, 110,67 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">338,4k</td><td class="crd-td">266k</td></tr>
<tr><td class="crd-td"><strong>Bogor</strong></td><td class="crd-td">West Java and Batavia</td><td class="crd-td">6,6 S, 106,8 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">338,1k</td><td class="crd-td">265,8k</td></tr>
<tr><td class="crd-td"><strong>Pandeglang</strong></td><td class="crd-td">West Java and Batavia</td><td class="crd-td">6,31 S, 106,1 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">330,3k</td><td class="crd-td">259,7k</td></tr>
<tr><td class="crd-td"><strong>Lebak</strong></td><td class="crd-td">West Java and Batavia</td><td class="crd-td">6,65 S, 106,22 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">328,8k</td><td class="crd-td">258,5k</td></tr>
<tr><td class="crd-td"><strong>Kuningan</strong></td><td class="crd-td">West Java and Batavia</td><td class="crd-td">6,98 S, 108,48 E</td><td class="crd-td">1602AD - 1949AD</td><td class="crd-td">322,6k</td><td class="crd-td">253,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across the Dutch East Indies (1602AD to 1949AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### West Java and Batavia Residency

West Java catalogues 504 settlements anchored by the colonial capital of Batavia (Jakarta) [@Kehoe2015Dutch; @Wiryomartono2020Batavia; @Siegel2002Batavia; @Ormeling2024Residency]. Batavia expanded from a fortified VOC outpost in 1619AD into a metropolitan complex accommodating 533k inhabitants in 1930AD across the historic Benedenstad, the administrative quarter of Weltevreden and the suburban district of Meester Cornelis, attaining a modern peak of 3,57M. In the surrounding residency, major urban and agrarian centres included Garut (763k peak district aggregate), Karawang (681k peak), Tangerang (559k peak), Depok (502k peak), Bandung (166,8k in 1930AD), Bogor (Buitenzorg, 65,4k in 1930AD), Sukabumi, Cirebon (54,1k in 1930AD) and Serang, commanding the fertile sawah plains and upland coffee and tea estates of the Priangan.

### Central Java and Vorstenlanden (Yogyakarta-Surakarta)

Central Java catalogues 546 settlements distributed across the alluvial plains and the royal principalities of the Vorstenlanden [@Setiadi2022Spatial; @Peper1970Population; @Santow1990Children]. Semarang served as the commercial and port metropolis of the central coast (217,8k in 1930AD, 501k peak), connecting the hinterland via state and private railways. The royal capitals of Surakarta (165,5k in 1930AD) and Yogyakarta (136,6k in 1930AD) concentrated courtly culture, administrative personnel and textile artisans. Major regional regency capitals included Brebes (523k peak), Banyumas (492k peak), Pekalongan (66k in 1930AD), Tegal (43k in 1930AD), Kudus, Magelang (54k in 1930AD), Purwokerto, Cilacap and Banjarnegara.

### East Java and Madura (Surabaya and Brantas)

East Java catalogues 552 settlements situated along the fertile volcanic valleys of the Brantas and Solo rivers and on the island of Madura [@DEI2025_13; @Zwart2023Sweet; @Chandra2017Glimpses; @DEI2025_31]. Surabaya operated as the chief commercial seaport and naval base of the colony, housing 341,7k residents in 1930AD. Surrounding agro-industrial sugar and plantation centres included Jember (714k peak), Sidoarjo (505k peak), Bandung Barat (488k peak), Malang (86,7k in 1930AD), Kediri (48,5k in 1930AD), Pasuruan (37k in 1930AD), Probolinggo, Madiun (42k in 1930AD), Mojokerto and Blitar. Madura accommodated dense agrarian populations centred on Bangkalan, Pamekasan and Sumenep.

### Northern and Western Sumatra (Aceh, Deli and Minangkabau)

Northern and Western Sumatra catalogues 314 settlements spanning the plantation frontier of Deli, the Minangkabau highlands and Aceh [@DOAJ_DEI_2022_14; @Airriess1995Port; @Kreike2018Genocide; @Dobbin1998Islamic]. Medan emerged as the premier corporate plantation metropolis of the East Coast, concentrating 76,6k inhabitants in 1930AD and reaching 692k peak, flanked by Deli Serdang (659k peak), Binjai, Pematangsiantar and Tebing Tinggi. On the west coast, Padang (52,1k in 1930AD) functioned as the chief administrative port, backed by the upland Minangkabau market centres of Bukittinggi (Fort de Kock), Payakumbuh and the Ombilin coal hub at Sawahlunto. In northern Sumatra, Banda Aceh (Kutaraja, 24k in 1930AD), Lhokseumawe and Sabang commanded the northern approaches to the Malacca Strait.

### Southern and Eastern Sumatra (Palembang, Riau and Lampung)

Southern and Eastern Sumatra catalogues 244 settlements centred on the Musi and Batang Hari river basins, the tin islands and Lampung [@Wijaya2025Transformation; @DEI1983_19; @Koenig2020Colonial]. Palembang served as the dominant riverine emporium and petroleum refining centre, supporting 108,1k residents in 1930AD (504k peak). Jambi commanded the Batang Hari rubber hinterland. The tin mining archipelagos of Bangka and Belitung concentrated Chinese mining kongsis around Pangkalpinang and Tanjung Pandan. In southern Sumatra, Tanjungkarang-Telukbetung anchored the Lampung transmigration frontier, receiving thousands of Javanese settlers under the colonial kolonisatie schemes [@Wijaya2025Transformation; @DEI1983_19].

### Dutch Borneo (Kalimantan)

Dutch Borneo catalogues 158 settlements distributed along tidal river networks and coastal petroleum fields [@DEI1983_19; @Liu2014Countering; @Hup2024Labor]. Banjarmasin functioned as the historic commercial capital of the Southern and Eastern Division, housing 66k residents in 1930AD at the confluence of the Martapura and Barito rivers. Balikpapan and Tarakan developed into dedicated industrial petroleum hubs operated by the Bataafsche Petroleum Maatschappij (BPM) [@DEI1983_19; @Hup2024Labor]. In the Western Division, Pontianak (45k in 1930AD) commanded the Kapuas river basin, supported by gold and pepper trading towns at Singkawang and Sambas.

### Celebes and Dependencies (Sulawesi)

Celebes catalogues 121 settlements across the southern peninsula and the northern arm [@Manez2010History; @DEI1983_19; @Honings2021Guardians]. Makassar (Ujung Pandang) operated as the primary commercial entrepôt for eastern Indonesia, housing 84,9k inhabitants in 1930AD, guarded by Fort Rotterdam and coordinating trade with Bugis and Makassarese sailing fleets (pinisi). In northern Celebes, Manado (27,5k in 1930AD) commanded the prosperous Christian copra-growing district of Minahasa, supported by Gorontalo on the Gulf of Tomini.

### Bali, Lombok and Lesser Sundas (Nusa Tenggara)

The Lesser Sundas catalogue 86 settlements encompassing the Hindu kingdoms of Bali, the Sasak communities of Lombok and the arid islands of Sumbawa, Flores, Sumba and Dutch Timor [@DEI1983_19; @Verheijen2023Ambiguous]. Denpasar and Singaraja (24k in 1930AD) served as administrative and cultural capitals on Bali. Mataram and Ampenan commanded western Lombok. In the eastern islands, Kupang functioned as the administrative capital of Dutch Timor, alongside Ende on Flores and Waingapu on Sumba.

### Moluccas Residency (Ambon, Ternate and Banda)

The Moluccas Residency catalogues 48 settlements distributed across the historic spice archipelagos, strictly excluding West New Guinea [@DEI1983_19; @Anonymous1997Riding; @DEI1930_22]. Ambon served as the residency capital and military garrison town, housing 17,3k residents in 1930AD. Banda Neira maintained the historic nutmeg plantations and VOC fortress circuits. Ternate and Tidore preserved their royal sultanate palaces facing the volcanic channel of North Maluku, while secondary posts anchored Dutch control at Saparua, Namlea on Buru and Tual in the Kei Islands.

# Limitations

The settlement gazetteer is subject to specific taphonomic and archival qualifications:
1. Differential census registration across eras: prior to the comprehensive 1930 Volkstelling, population counts outside Java were gathered through indirect head-tax rolls and tribal estimates, introducing variability into Outer Island settlement numbers [@Peper1970Population; @Santow1990Children; @Zanden2010Colonial].
2. Subordinate ward consolidation: large municipal units such as Batavia and Surabaya absorb dozens of historic suburban kampongs and villages, requiring consistent boundary standardisation to avoid double-counting.
3. Rapid corporate frontier mobility: mining settlements in Bangka and estate camps in Deli experienced sharp population swings due to indenture contract expirations and global commodity cycles [@DOAJ_DEI_2022_14; @Hup2024Labor; @DEI2025_31].
4. War-time archival disruptions: municipal population counts between 1942 and 1949 were interrupted by the Japanese occupation and revolutionary hostilities, requiring demographic interpolation between 1940AD and 1949AD.

# Conclusion

The MANDALA settlement gazetteer synthesises 2.573 catalogued settlements across nine administrative divisions of the Dutch East Indies from 1602AD to 1949AD. By documenting georeferenced coordinates, administrative affiliations and longitudinal population trends, this catalogue establishes an empirical framework for analysing archipelagic urbanisation, the Cultivation System's agrarian intensification on Java, and the corporate resource opening of the Outer Islands.

# Appendix

The MANDALA source ledger audited 2.697 candidate records, resulting in 2.573 accepted primary settlements and 124 documented exclusions. Table \ref{tab:excluded} presents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jayakarta</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kartasura</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Banten Lama</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Makassar</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Banda Aceh</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tambaksari</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Cirebon</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Palembang</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Banjarmasin</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tuban</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Gresik</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Jepara</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Surabaya</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Demak</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pagaruyung</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tegal</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kudus</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pasuruan</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bone</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bedulu</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ternate</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Jambi Sultanate</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ambon</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Blitar</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Blambangan</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Dutch East Indies source ledger.</figcaption>
</figure>

# Sources
