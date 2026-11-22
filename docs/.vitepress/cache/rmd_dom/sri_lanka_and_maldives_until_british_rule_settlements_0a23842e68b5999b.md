---
title: "Settlement Gazetteer of Sri Lanka and the Maldives"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (10000BC to 1796AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: sri_lanka_and_maldives_until_british_rule_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_sri_lanka_and_maldives_until_british_rule_spatial.png"
hero_caption: "Spatial distribution of 1.642 catalogued historical settlements and regional hydrological catchments across Sri Lanka and the Maldives archipelago (63.718 km²) from 10000BC to 1796AD."
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

This gazetteer catalogues WGS84 geographic coordinates, sub-regional allocations, occupation spans and benchmark population trajectories for 1.642 historical settlements across Sri Lanka and the Maldives archipelago (63.718 km² across 768 active 5-arcminute terrestrial cells) from 10000BC to 1796AD. Spanning five physiographic and historical divisions, the gazetteer encompasses diverse architectural and settlement traditions: monumental brick agro-urban metropolises in the dry zone lowlands, insular limestone port towns on the Jaffna peninsula, granite rock citadels and rain-fed wet-paddy market centres in the southwest wet zone and Kandyan highlands, fortified riverine capitals in Ruhuna and coral-stone atoll trading ports across the Maldives.

Settlement populations range from early prehistoric rock-shelter stations at Batadombalena and coastal dune camps on the Iranamadu formation to classical hydraulic capitals at Anuradhapura (90k peak in 500AD) and Polonnaruwa (62k peak in 1200AD), international Indian Ocean emporia at Mantai (24,9k peak in 800AD) and Trincomalee (18k peak in 1650AD), regional redoubts at Tissamaharama (28k peak in 200AD), late mediaeval Sri Jayawardenepura Kotte (42k peak in 1450AD) and Jaffna (37,6k peak in 1600AD), and early modern maritime and highland capitals at Colombo (45k in 1796AD), Gampaha (35,9k in 1796AD), Kandy (30k peak in 1700AD), Galle (26k in 1796AD) and Malé (10,5k in 1796AD). Every catalogued locality reconciles against 1.872 candidate records in the INDUS source ledger alongside 230 documented exclusions (predominantly duplicate survey aliases within a 2,2 km spatial radius, toponymic homonyms and non-habitation features).

By linking georeferenced settlement series with regional hydrography, reservoir cascade registries, speleothem paleoclimate records and colonial cadastral rolls, this gazetteer establishes an archaeological baseline for historical nucleation in southern South Asia. Settlement subtraction isolates nucleated urban centres from dasymetrically distributed rural populations, ensuring that demographic reconstructions reflect genuine archaeological mound and settlement extents rather than arbitrary spatial projections.

# Background

Historical settlement patterns in Sri Lanka and the Maldives reflect sophisticated adaptations to regional hydrology, geomorphology and maritime trade geography [@Abeywardana2018Ancient; @Feener2021Maldives]. Four primary architectural and functional traditions characterise the regional settlement record:
1. Monastic-hydraulic metropolises: In the northern and north-central dry zone lowlands, urban capitals were integrated with extensive cascade reservoirs (*ellangawa*) and monastic complexes [@Abeywardana2018Ancient; @Hawken2021Long]. Anuradhapura and Polonnaruwa featured massive brick stupas, stone-lined baths, monastic hospitals and residential quarters served by stone sluices and trans-basin feeder canals [@Abeywardana2019Evolution; @Muditha2026Hydraulic].
2. Rock-fortress citadels and wet zone hill capitals: In the granite inselbergs and river valleys of the southwest wet zone and interior highlands, royal dynasties constructed fortified redoubts, including Sigiriya, Yapahuwa, Kurunegala, Dambadeniya, Gampola and Kandy (Senkadagala) [@DameronNandan2003World; @Coningham2025Village]. These centres leveraged steep topography and terraced wet-paddy farming for defensive resilience against foreign invasions [@Kelegama2023Lure].
3. Maritime port emporia and coastal fortresses: Along strategic maritime passages, trading ports mediated Indian Ocean commercial exchange [@Bohingamuwa2017Lanka; @Green2025Indian; @Champakalakshmi1996Trade]. Mantai on the Gulf of Mannar, Jambukola Pattana and Jaffna (Nallur) in the north, Gokanna (Trincomalee) on the east coast, and Colombo and Galle in the southwest developed specialised warehouse quarters, cosmopolitan merchant communities and coastal bastion fortifications [@Zhang2023Chinese; @Anthony2010Pastoral].
4. Coral atoll settlements: Across the Maldives archipelago, human communities adapted to small coral islets through pelagic tuna fishing, coconut agroforestry and cowrie shell harvesting [@Feener2021Maldives; @MD2023Spatial]. Settlement centred on Malé, where coral-stone mosques, royal residences and marine anchorages coordinated archipelago governance [@Cui2025Religion; @Gippert2024Written].

# Methodology

The 1.642-settlement INDUS gazetteer is empirically anchored rather than extrapolated from synthetic multipliers. Site selection and benchmark series combine four primary evidence classes:
- Primary-monograph historical metropolis trajectories for dynastic capitals, port emporia and highland kingdoms [@Coningham2025Village; @Allchin1995Archaeology; @Erdosy1988Urbanisation; @Stein1989Vijayanagara].
- Multi-repository archaeological and monument corpora integrating Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic IAR inventories, ASI P1371, Wikidata, OpenStreetMap and radiocarbon compilations from XRONOS and c14bazAAR [@Abeywardana2018Ancient; @Feener2021Maldives].
- Official national census schedules and historical gazetteers, drawing upon Census of India Table A-04, PBS, BBS, DCS, CBS, NSB and NBS series alongside colonial cadastral rolls (*tombos*) and imperial compendia [@ImperialGazetteer1908; @Bayly1983Rulers; @Manogaran1987Ethnic].
- Macro-envelope *qasba*, *pargana* and *nadu* market continuity reconciled against pre-1800 regional totals and filtered strictly by foundation year and chronological toponymy [@Habib1982Atlas; @Moosvi1987Economy; @Chattopadhyaya1994Making].

Inclusion requires:
- Precise WGS84 geographic coordinates validated against satellite imagery and national cartography.
- Documented ceramic, epigraphic, numismatic, census or historical chronicle evidence spanning prehistoric to early modern eras.
- Area-based, house-mound or historical census demographic estimations calibrated to settlement scale without arbitrary magic numbers.

Where multiple archaeological survey points fall within 2,2 km of a primary historical centre, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features, such as isolated rock inscriptions, mineral quarries, toponymic homonyms and ephemeral forager scatters, are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 1.642 catalogued settlements and summed site peaks across the five sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Rajarata Dry Zone</strong></td><td class="crd-td">507</td><td class="crd-td">30,9%</td><td class="crd-td">590,3k</td><td class="crd-td">Anuradhapura (90k)</td></tr>
<tr><td class="crd-td"><strong>Jaffna Peninsula</strong></td><td class="crd-td">58</td><td class="crd-td">3,5%</td><td class="crd-td">109,8k</td><td class="crd-td">Jaffna (37,6k)</td></tr>
<tr><td class="crd-td"><strong>Kotte and Kandyan Wet Zone</strong></td><td class="crd-td">661</td><td class="crd-td">40,3%</td><td class="crd-td">840,3k</td><td class="crd-td">Colombo (45k)</td></tr>
<tr><td class="crd-td"><strong>Ruhuna and Eastern Littoral</strong></td><td class="crd-td">304</td><td class="crd-td">18,5%</td><td class="crd-td">286,5k</td><td class="crd-td">Tissamaharama (28k)</td></tr>
<tr><td class="crd-td"><strong>Maldives Archipelago</strong></td><td class="crd-td">112</td><td class="crd-td">6,8%</td><td class="crd-td">47,8k</td><td class="crd-td">Malé (10,5k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">1.642</td><td class="crd-td">100%</td><td class="crd-td">1,87M</td><td class="crd-td">Anuradhapura (90k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 1.642 catalogued settlements and summed site peaks across Sri Lanka and the Maldives.</figcaption>
</figure>

# Testing and Validation

Settlement coordinates, occupation spans and population series were tested against archaeological field surveys, epigraphic registries and colonial records [@Abeywardana2019Evolution; @Coningham2025Village]. Stratified excavations at Anuradhapura, Polonnaruwa, Mantai, Kantarodai and Sigiriya provide ceramic and radiocarbon benchmarks that corroborate urban foundation and expansion phases [@Coningham2025Village; @Bohingamuwa2017Lanka].

Epigraphic lithic inscriptions confirm town names, administrative wards and water allocation rights [@Abeywardana2019Evolution; @Uparathana2026Archaeolog]. In coastal areas, Portuguese and Dutch cadastral rolls (*tombos*) provide seventeenth- and eighteenth-century household counts for coastal settlements, anchoring late pre-British demographic figures [@Manogaran1987Ethnic].

In the Maldives, archaeological documentation by the Maldives Heritage Survey recorded architectural plans, gravestone epigraphy and oral toponyms across dozens of inhabited atoll islands, confirming continuous mediaeval and early modern occupation [@Feener2021Maldives; @Gippert2024Written].

# Results

Table \ref{tab:gazetteer} presents the leading 45 historical settlements across Sri Lanka and the Maldives ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1200AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Anuradhapura</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,35 N, 80,4 E</td><td class="crd-td">500BC to 1200AD</td><td class="crd-td">90k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Polonnaruwa</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">7,94 N, 81 E</td><td class="crd-td">1000AD to 1300AD</td><td class="crd-td">62k</td><td class="crd-td">62k</td></tr>
<tr><td class="crd-td"><strong>Colombo</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">6,93 N, 79,86 E</td><td class="crd-td">1000AD to 1796AD</td><td class="crd-td">45k</td><td class="crd-td">13,4k</td></tr>
<tr><td class="crd-td"><strong>Sri Jayawardenepura Kotte</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">6,89 N, 79,9 E</td><td class="crd-td">1400AD to 1550AD</td><td class="crd-td">42k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jaffna</strong></td><td class="crd-td">Jaffna Peninsula</td><td class="crd-td">9,66 N, 80,03 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">37,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gampaha</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">7,09 N, 80 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">35,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kandy</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">7,29 N, 80,63 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">30k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tissamaharama</strong></td><td class="crd-td">Ruhuna and Eastern Littoral</td><td class="crd-td">6,28 N, 81,29 E</td><td class="crd-td">200BC to 1100AD</td><td class="crd-td">28k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Galle</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">6,03 N, 80,22 E</td><td class="crd-td">1350AD to 1796AD</td><td class="crd-td">26k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Negombo</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">7,21 N, 79,84 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">25,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Beruwala</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">6,47 N, 79,98 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">25,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Moratuwa</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">6,77 N, 79,88 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">25,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mantai</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,96 N, 79,95 E</td><td class="crd-td">200BC to 1100AD</td><td class="crd-td">24,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Trincomalee</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,57 N, 81,23 E</td><td class="crd-td">500AD to 1796AD</td><td class="crd-td">18k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Dambulla</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">7,85 N, 80,65 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">15,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Batticaloa</strong></td><td class="crd-td">Ruhuna and Eastern Littoral</td><td class="crd-td">7,72 N, 81,7 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">15k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Katunayaka</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">7,17 N, 79,89 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ambalantota</strong></td><td class="crd-td">Ruhuna and Eastern Littoral</td><td class="crd-td">6,12 N, 81,02 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">12,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vavuniya</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,75 N, 80,48 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">12,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nallur</strong></td><td class="crd-td">Jaffna Peninsula</td><td class="crd-td">9,67 N, 80,03 E</td><td class="crd-td">1300AD to 1600AD</td><td class="crd-td">12k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sigiriya</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">7,96 N, 80,76 E</td><td class="crd-td">500AD to 600AD</td><td class="crd-td">12k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Matara</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">5,95 N, 80,53 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">11,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Malé</strong></td><td class="crd-td">Maldives Archipelago</td><td class="crd-td">4,17 N, 73,51 E</td><td class="crd-td">200BC to 1796AD</td><td class="crd-td">10,5k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Kalpitiya</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,17 N, 79,72 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">10k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Beliatta</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">6,05 N, 80,73 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">9,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Balana Fort</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">7,27 N, 80,48 E</td><td class="crd-td">1550AD to 1796AD</td><td class="crd-td">9,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Panduwasnuwara Palace Ruin</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">7,6 N, 80,1 E</td><td class="crd-td">1550AD to 1796AD</td><td class="crd-td">9,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Buttala</strong></td><td class="crd-td">Ruhuna and Eastern Littoral</td><td class="crd-td">6,76 N, 81,25 E</td><td class="crd-td">500BC to 1796AD</td><td class="crd-td">9,1k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Dambadeniya</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">7,37 N, 80,15 E</td><td class="crd-td">1300AD</td><td class="crd-td">9,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hendala</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">6,99 N, 79,88 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">8,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ambalangoda</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">6,24 N, 80,05 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">8,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Badulla</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">6,98 N, 81,06 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">8,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pottuvil</strong></td><td class="crd-td">Ruhuna and Eastern Littoral</td><td class="crd-td">6,88 N, 81,83 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">7,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Puttalam</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,04 N, 79,83 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">7,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Welisara</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">7,03 N, 79,9 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">7,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fort Pyl</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">9,59 N, 80,44 E</td><td class="crd-td">1550AD to 1796AD</td><td class="crd-td">6,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nagadiba</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">9,09 N, 80,5 E</td><td class="crd-td">0AD to 1796AD</td><td class="crd-td">6,4k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Matale</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">7,47 N, 80,62 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">6,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kalpitiya</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,24 N, 79,77 E</td><td class="crd-td">300AD to 1796AD</td><td class="crd-td">6,3k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Kolugala</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">7,31 N, 80,52 E</td><td class="crd-td">300AD to 1796AD</td><td class="crd-td">6,3k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Kitalagama</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">6,02 N, 80,56 E</td><td class="crd-td">300AD to 1796AD</td><td class="crd-td">6,3k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Mullaitivu</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">9,28 N, 80,8 E</td><td class="crd-td">1300AD to 1796AD</td><td class="crd-td">6,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kalmunai</strong></td><td class="crd-td">Ruhuna and Eastern Littoral</td><td class="crd-td">7,41 N, 81,83 E</td><td class="crd-td">300AD to 1796AD</td><td class="crd-td">6,2k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Pidarikulam</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,83 N, 80,02 E</td><td class="crd-td">300AD to 1796AD</td><td class="crd-td">6,2k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Hikkaduwa</strong></td><td class="crd-td">Kotte and Kandyan Wet Zone</td><td class="crd-td">6,13 N, 80,12 E</td><td class="crd-td">300AD to 1796AD</td><td class="crd-td">6,1k</td><td class="crd-td">4,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 historical settlements ordered by peak population across Sri Lanka and the Maldives (10000BC to 1796AD).</figcaption>
</figure>

The rank-size hierarchy across 1.642 catalogued settlements conforms to a power-law distribution with Pareto exponent $\alpha = 0{,}71$ ($R^2 = 0{,}90$), reflecting a multi-tiered urban and rural system spanning primary metropolitan capitals, regional ports and local agricultural centres.

## Sub-Regional Settlement Catalogues

### Rajarata Dry Zone

The northern and north-central lowlands catalogue 507 historical settlements along the Malvathu, Kala, Yan and Mahaweli river basins [@Abeywardana2018Ancient; @Hawken2021Long]. Anuradhapura was the classical capital (90k peak in 500AD), commanding extensive monastic precincts and municipal reservoirs. Polonnaruwa succeeded as mediaeval capital (62k peak in 1200AD), anchored by the Sea of Parakrama. Mantai (24,9k peak in 800AD) operated as the primary northwestern international trade emporium, while Trincomalee (18k peak in 1650AD) served as a natural deep-water naval harbour on the Bay of Bengal and Kalpitiya (10k in 1796AD) controlled western lagoon approaches.

### Jaffna Peninsula and Northern Littoral

The northern karst limestone shelf catalogues 58 settlements [@Manogaran1987Ethnic; @Anthony2010Pastoral]. Jaffna was the capital of the Aryacakravarti kingdom and colonial port (37,6k peak in 1600AD, 34k in 1796AD), closely paired with its royal precinct at Nallur (12k in 1600AD). Kantarodai represented an early historic urban town (5,9k peak in 1450AD) with Buddhist stupas dating to the first millennium BC, while Kanathra island (2k peak in 1500AD) and Delft Island supported maritime fisheries and horse breeding.

### Kotte, Southwest Wet Zone and Kandyan Highlands

The southwest and central highlands catalogue 661 settlements [@Coningham2025Village; @Kelegama2023Lure]. Colombo expanded from a coastal trading roadstead into a colonial capital (45k peak in 1796AD). Sri Jayawardenepura Kotte served as the late mediaeval royal capital (42k peak in 1450AD), while Gampaha grew into a major western wet zone centre (35,9k in 1796AD) and Kandy (Senkadagala) anchored the highland monarchy (30k peak in 1700AD, 28k in 1796AD). Maritime and inland centres included Galle (26k in 1796AD), Negombo (25,8k), Beruwala (25,5k), Moratuwa (25,3k), Dambulla (15,6k), the fifth-century rock citadel of Sigiriya (12k peak in 500AD) and the earlier mediaeval capital of Dambadeniya (9,1k in 1300AD).

### Ruhuna Southeast and Eastern Littoral

The southeastern dry zone catalogues 304 settlements [@Coningham2025Village; @Sutcliffe2011Historical]. Tissamaharama (ancient Mahagama) anchored the regional hydraulic core (28k peak in 200AD), supported by the Tissa and Yoda tanks. Other key centres included Batticaloa (15k in 1796AD), Pottuvil (7,3k in 1796AD), Kalmunai (6,2k in 1550AD), Tarachoi (1,3k peak in 300AD) and Magama, coordinating coastal trade and irrigated farming along the Kirindi Oya and Menik Ganga.

### Maldives Archipelago

The coral atolls catalogue 112 settlements spanning the Chagos-Laccadive chain [@Feener2021Maldives; @Cui2025Religion]. Malé was the royal sultanate capital and port (10,5k peak in 1796AD, 6,9k in 1200AD), coordinating trade and governance across northern, central and southern atoll island communities featuring coral-stone Friday mosques and pre-Islamic Buddhist stupas (*havitta*) [@Feener2021Maldives; @Cui2025Religion].

# Limitations

Settlement documentation across Sri Lanka and the Maldives remains constrained by distinct preservation and recovery factors:
1. Alluvial siltation and tank sedimentation: active sediment deposition in dry zone reservoir beds has buried ancient canal off-takes and field hamlets, obscuring lower-tier settlements [@Abeywardana2018Ancient].
2. Dense tropical vegetation: centuries of forest regrowth over Rajarata after 1250AD enveloped earthen bunds and brick monasteries, requiring aerial surveying and remote sensing for site detection [@Coningham2025Village; @Fernando2011Current].
3. Colonial urban overprinting: continuous occupation in Colombo, Galle and Jaffna altered ancient archaeological deposits, making stratified excavation challenging [@Coningham2025Village].
4. Coral atoll erosion and stone recycling: in the Maldives, limited terrestrial land and coastal storms degraded pre-modern shorelines, while porites coral masonry was continuously recycled across construction phases [@Feener2021Maldives; @MD2023Spatial].

# Conclusion

The INDUS settlement gazetteer synthesises 1.642 catalogued historical settlements across Sri Lanka and the Maldives, providing an empirical baseline for demographic reconstruction from 10000BC to 1796AD. By reconciling georeferenced coordinates, structural topologies and population trajectories, this gazetteer distinguishes nucleated urban centres from rural populations, enabling dasymetric surface allocation of agricultural cultivators and demonstrating the resilience of settlement networks across insular South Asia.

# Appendix

The INDUS source ledger audited 1.872 candidate records, accepting 1.642 primary settlements and documenting 230 exclusions. Table \ref{tab:excluded} presents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pandiruppu</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Jaffna</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Jaffna</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Jaffna</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Jaffna</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Jaffna</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Jaffna</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Galiboi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Galiba</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Cydara (river)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kalmunai</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Panduwasnuwara Palace Ruin</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Matara Fort</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Matara Fort</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Fort Hammenhiel</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Wilgamvehera Maha Seya</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Theru Moodi Madam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Peak Wilderness Sanctuary</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pooneryn Fort</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Malwana Fort</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Mantai (Tirukeswaram)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Gallen Raja Maha Viharaya</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Kayts Island Fort</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kayts Island Fort</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Fort Hammenheil</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Sri Lanka and Maldives source ledger.</figcaption>
</figure>

# Sources
