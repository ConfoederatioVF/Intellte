---
title: "Settlement Gazetteer of Classical South Asia: The Gupta Empire and Later Guptas"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (319AD to 750AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: gupta_empire_and_later_guptas_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_gupta_empire_and_later_guptas_spatial.png"
hero_caption: "Spatial distribution of 12.898 catalogued classical settlements and macro-provincial boundaries across South Asia (3,94M km²) from 319AD to 750AD."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents geographic coordinates, administrative attributions, occupational chronologies and benchmark demographic trajectories for 12.898 catalogued settlements across classical South Asia (3,94M km², encompassing 3.938.787 km²) from 319AD to 750AD. Spanning five macro-provinces, the catalogue reconciles diverse archaeological and architectural traditions: monumental burnt-brick metropolises and fortified riverine capitals in the Gangetic plain, flourishing deltaic emporia and sacred monastic centres in Bengal and Assam, trading ports and dynastic strongholds across Malwa and Gujarat, fortified caravan nodes and frontier garrisons in Punjab and the north-west, and rock-cut monastic chaityas and agricultural market centres across the volcanic plateaux of the Vakataka Deccan.

Settlement magnitudes span from agricultural villages and monastic dependencies to imperial capitals, following a Zipf rank-size distribution with $\alpha = 0,87$ ($R^2 = 0,96$). The eight leading centres are Patna (175.000 peak in 400AD), Kannauj (140.000 peak in 650AD), Ujjain (95.000 peak in 400AD), Varanasi (85.000 peak in 600AD), Kanchipuram (85.000 peak in 650AD), Mathura (76.175 peak in 319AD), Peshawar (70.703 peak in 319AD) and Valabhi (65.000 peak in 650AD), alongside Gaur (65.000 in 750AD), Thanesar (55.000 in 600AD), Taxila (53.190 in 319AD), Multan (52.139 in 750AD), Badami (52.000 in 650AD) and Ayodhya (52.000 in 400AD). Every catalogued settlement reconciles against 13.698 candidate entries in the source ledger alongside 800 documented duplicate-alias consolidations within 3 km radii.

By coupling georeferenced settlement trajectories with spatial kriging and environmental covariates, this gazetteer establishes a quantitative baseline for classical South Asian urbanism. Settlement subtraction isolates nucleated urban centres from rural populations, ensuring that historical demographic reconstructions reflect observable archaeological site distributions and primary historical series rather than speculative continental ratios.

# Settlement Archaeology in Classical South Asia

Archaeological settlement patterns in classical South Asia reflect sophisticated adaptations to regional hydrology, commercial transit arteries and agrarian colonisation [@hawkes2020back; @neill2020empires; @petrie2025hidden]. Four primary settlement traditions characterise the classical archaeological record:

1. **Imperial and Provincial Citadels**: Positioned along major navigable waterways and arterial highways, these walled urban complexes feature monumental burnt-brick walls, multi-tiered defensive moats, stepped brick wells and structured artisan quarters [@khan2013bricks; @mishra2026historical]. Cities such as Patna (Pataliputra), Varanasi, Kannauj, Mathura, Kaushambi and Ujjain served as nodes of political administration, craft guilds (*shreni*) and religious patronage.
2. **Sacred Monastic Complexes and Pilgrimage Centres**: Buddhist Mahaviharas and Brahmanical temple complexes functioned as major socioeconomic hubs [@shaw2013archaeolog; @verardi2018gods]. Sites such as Nalanda, Sanchi, Valabhi, Paharpur and Kanchipuram integrated multi-storeyed monastic residences, prayer halls, granaries and extensive agrarian estates managed by monastic communities.
3. **Fluvial and Maritime Ports**: Coastal emporia and riverine transhipment centres connected overland trade routes with overseas maritime networks in the Arabian Sea and Bay of Bengal [@seland2014archaeolog; @cobb2018black]. Ports including Bharuch (Bhrigukachchha), Sopara, Cambay, Patan and Tamralipti commanded extensive artisan industries and customs houses.
4. **Fortified Frontier Nodes and Market Towns**: Along the north-western frontier, the Deccan scarps and the Bengal delta margins, fortified settlements provided security for agricultural colonists and caravan routes [@acharjaya2026historical; @morris2019central]. Sites such as Taxila, Peshawar, Multan, Sialkot, Gaur and Mahasthangarh integrated garrison quarters with flourishing regional markets.

# Methodology and Source Ledger Reconciliation

The expanded 12.898-settlement gazetteer is empirically anchored in primary-monograph historical metropolis trajectories [@Allchin1995Archaeology; @Erdosy1988Urbanisation; @Champakalakshmi1996Trade; @Chattopadhyaya1994Making; @Naqvi1968Urbanisation; @Hambly1982Towns], multi-repository archaeological and monument corpora, official national censuses and macro-envelope *qasba*, *pargana* and *nadu* continuity [@Habib1982Atlas; @Moosvi1987Economy; @Bayly1983Rulers; @ImperialGazetteer1908; @Eaton1993Rise], rather than arbitrary scaling factors. Multi-repository ingestion synthesises Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology Reviews (IARs), Archaeological Survey of India (ASI P1371), Wikidata, OpenStreetMap (OSM) and XRONOS/c14bazAAR alongside official sub-district and municipal census registries (Census of India Table A-04, PBS, BBS, DCS, CBS, NSB and NBS) and Himalayan and frontier historical surveys [@Slusser1982NepalMandala; @Phuntsho2013HistoryBhutan; @Possehl1999IndusAge; @Kenoyer1998AncientCities]. Candidate records pass through strict foundation-year truncation and chronological toponymy filters so that post-classical settlements never receive anachronistic pre-foundation projections [@hawkes2020back; @orengo2020automated; @garciamolsosa2023reconstruc; @petrie2025hidden].

Across the four-wave saturation sweep, Wave 1 contributed 7.481 settlements from official censuses, historical metropolis anchors and national registries; Wave 2 added 3.611 archaeological and heritage settlements from ASI, Pleiades, Zenodo, Wikidata, OSM and radiocarbon corpora; Wave 3 incorporated 1.806 settlements through macro-calibrated pre-1800 *qasba* and *nadu* continuity and foundation audits; and Wave 4 confirmed zero unaccounted settlements across all five sub-masks (0% marginal gain). Inclusion requires:
- Verified WGS84 geographic coordinates matched to physical habitation mounds or documented ancient toponyms.
- Stratigraphic evidence of occupation, epigraphic attestation or verified pre-foundation continuity between 319AD and 750AD.
- Demographic series calibrated to primary historical estimates, site area, enclosed intramural hectares or documented structural density, yielding a regional Zipf rank-size slope of $\alpha = 0,87$ ($R^2 = 0,96$).

Where multiple archaeological survey points fall within 3 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Isolated non-habitation findspots lacking residential refuse are excluded.

Table \ref{tab:summary} summarises the distribution of 12.898 catalogued settlements and summed site peaks across the five macro-provinces.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Province</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Madhyadesha</strong></td><td class="crd-td">2.484</td><td class="crd-td">19,3%</td><td class="crd-td">2,63M</td><td class="crd-td">Patna (175k)</td></tr>
<tr><td class="crd-td"><strong>Gauda-Bengal</strong></td><td class="crd-td">2.744</td><td class="crd-td">21,3%</td><td class="crd-td">2,33M</td><td class="crd-td">Gaur (65k)</td></tr>
<tr><td class="crd-td"><strong>Malwa-Gujarat</strong></td><td class="crd-td">2.165</td><td class="crd-td">16,8%</td><td class="crd-td">2,28M</td><td class="crd-td">Ujjain (95k)</td></tr>
<tr><td class="crd-td"><strong>Punjab-NW</strong></td><td class="crd-td">2.411</td><td class="crd-td">18,7%</td><td class="crd-td">2,82M</td><td class="crd-td">Peshawar (70,7k)</td></tr>
<tr><td class="crd-td"><strong>Vakataka Deccan</strong></td><td class="crd-td">3.094</td><td class="crd-td">24%</td><td class="crd-td">3,13M</td><td class="crd-td">Kanchipuram (85k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">12.898</td><td class="crd-td">100%</td><td class="crd-td">13,19M</td><td class="crd-td">Patna (175k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 12.898 catalogued settlements and summed site peaks across Classical South Asia.</figcaption>
</figure>

# Leading Classical Settlements

Table \ref{tab:gazetteer} presents the leading 45 classical settlements across South Asia ordered by peak population descending, detailing coordinates, macro-provincial attribution, chronological span and benchmark population series.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Province</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">500AD Pop</th><th class="crd-th">750AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">175k</td><td class="crd-td">140k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Kannauj</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">27,05 N, 79,92 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">140k</td><td class="crd-td">70,4k</td><td class="crd-td">125k</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">95k</td><td class="crd-td">86,1k</td><td class="crd-td">71,8k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">85k</td><td class="crd-td">81,4k</td><td class="crd-td">80k</td></tr>
<tr><td class="crd-td"><strong>Kanchipuram</strong></td><td class="crd-td">Vakataka Vidarbha</td><td class="crd-td">12,83 N, 79,7 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">85k</td><td class="crd-td">60k</td><td class="crd-td">82,1k</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">27,49 N, 77,67 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">76,2k</td><td class="crd-td">61,2k</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">70,7k</td><td class="crd-td">49k</td><td class="crd-td">33,9k</td></tr>
<tr><td class="crd-td"><strong>Gaur</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">24,87 N, 88,13 E</td><td class="crd-td">600AD - 750AD</td><td class="crd-td">65k</td><td class="crd-td">-</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Valabhi</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">21,88 N, 71,88 E</td><td class="crd-td">500AD - 750AD</td><td class="crd-td">65k</td><td class="crd-td">25k</td><td class="crd-td">55k</td></tr>
<tr><td class="crd-td"><strong>Thanesar</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">29,97 N, 76,83 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">55k</td><td class="crd-td">35k</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>Taxila</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">33,75 N, 72,79 E</td><td class="crd-td">319AD - 500AD</td><td class="crd-td">53,2k</td><td class="crd-td">12k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">52,1k</td><td class="crd-td">38,7k</td><td class="crd-td">52,1k</td></tr>
<tr><td class="crd-td"><strong>Ayodhya</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">26,79 N, 82,19 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">52k</td><td class="crd-td">45,6k</td><td class="crd-td">32,3k</td></tr>
<tr><td class="crd-td"><strong>Badami</strong></td><td class="crd-td">Vakataka Vidarbha</td><td class="crd-td">15,92 N, 75,68 E</td><td class="crd-td">600AD - 750AD</td><td class="crd-td">52k</td><td class="crd-td">-</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">48k</td><td class="crd-td">40k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Srinagar</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">34,08 N, 74,8 E</td><td class="crd-td">600AD - 750AD</td><td class="crd-td">48k</td><td class="crd-td">-</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Mahasthangarh</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">24,96 N, 89,34 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">45k</td><td class="crd-td">43,2k</td><td class="crd-td">41,4k</td></tr>
<tr><td class="crd-td"><strong>Mansura</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">25,88 N, 68,78 E</td><td class="crd-td">600AD - 750AD</td><td class="crd-td">40,4k</td><td class="crd-td">-</td><td class="crd-td">40,4k</td></tr>
<tr><td class="crd-td"><strong>Paithan</strong></td><td class="crd-td">Vakataka Vidarbha</td><td class="crd-td">19,48 N, 75,39 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">39,8k</td><td class="crd-td">28,8k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">21,7 N, 73 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">39,1k</td><td class="crd-td">35k</td><td class="crd-td">37,1k</td></tr>
<tr><td class="crd-td"><strong>Tamralipti</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">22,29 N, 87,92 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">38k</td><td class="crd-td">34,9k</td><td class="crd-td">20k</td></tr>
<tr><td class="crd-td"><strong>Alor</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">27,69 N, 68,93 E</td><td class="crd-td">400AD - 750AD</td><td class="crd-td">38k</td><td class="crd-td">27,4k</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Banbhore</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">24,75 N, 67,52 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">36,1k</td><td class="crd-td">27,9k</td><td class="crd-td">36,1k</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">32,49 N, 74,53 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">35,8k</td><td class="crd-td">35,8k</td><td class="crd-td">29k</td></tr>
<tr><td class="crd-td"><strong>Vidisha</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">23,52 N, 77,81 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">32,8k</td><td class="crd-td">28,8k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Jabalpur</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">23,18 N, 79,99 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">32,8k</td><td class="crd-td">24k</td><td class="crd-td">32,8k</td></tr>
<tr><td class="crd-td"><strong>Amaravati</strong></td><td class="crd-td">Vakataka Vidarbha</td><td class="crd-td">16,57 N, 80,36 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">31,7k</td><td class="crd-td">21,6k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Kaushambi</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,34 N, 81,39 E</td><td class="crd-td">319AD - 600AD</td><td class="crd-td">30k</td><td class="crd-td">14k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ahichhatra</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">28,37 N, 79,13 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">29,6k</td><td class="crd-td">25,9k</td><td class="crd-td">20,2k</td></tr>
<tr><td class="crd-td"><strong>Guwahati</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">26,18 N, 91,73 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">29,3k</td><td class="crd-td">22,9k</td><td class="crd-td">29,3k</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,43 N, 81,85 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">28k</td><td class="crd-td">25,9k</td><td class="crd-td">26,2k</td></tr>
<tr><td class="crd-td"><strong>Vaishali</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,99 N, 85,13 E</td><td class="crd-td">319AD - 600AD</td><td class="crd-td">28k</td><td class="crd-td">16k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jalandhar</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">31,33 N, 75,58 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">28k</td><td class="crd-td">22,9k</td><td class="crd-td">26,8k</td></tr>
<tr><td class="crd-td"><strong>Nagarjunakonda</strong></td><td class="crd-td">Vakataka Vidarbha</td><td class="crd-td">16,53 N, 79,24 E</td><td class="crd-td">319AD - 400AD</td><td class="crd-td">26,6k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Chandraketugarh</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">22,7 N, 88,68 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">25,9k</td><td class="crd-td">20,6k</td><td class="crd-td">14k</td></tr>
<tr><td class="crd-td"><strong>Nalanda</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,14 N, 85,44 E</td><td class="crd-td">500AD - 750AD</td><td class="crd-td">25k</td><td class="crd-td">14k</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">25k</td><td class="crd-td">19,8k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Bhagalpur</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,25 N, 86,95 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">24,4k</td><td class="crd-td">23,4k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Gaya</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">24,8 N, 85 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">24k</td><td class="crd-td">22,6k</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Khambhat</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">22,31 N, 72,62 E</td><td class="crd-td">750AD</td><td class="crd-td">24k</td><td class="crd-td">-</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Sopara</strong></td><td class="crd-td">Vakataka Vidarbha</td><td class="crd-td">19,41 N, 72,81 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">23,5k</td><td class="crd-td">21k</td><td class="crd-td">18,8k</td></tr>
<tr><td class="crd-td"><strong>Gwalior</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">26,22 N, 78,18 E</td><td class="crd-td">600AD - 750AD</td><td class="crd-td">23,5k</td><td class="crd-td">-</td><td class="crd-td">23,5k</td></tr>
<tr><td class="crd-td"><strong>Charsadda</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">34,15 N, 71,73 E</td><td class="crd-td">319AD - 600AD</td><td class="crd-td">23,3k</td><td class="crd-td">14,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Junagadh</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">21,52 N, 70,46 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">22,9k</td><td class="crd-td">21,7k</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>Mainamati</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">23,43 N, 91,14 E</td><td class="crd-td">650AD - 750AD</td><td class="crd-td">22,4k</td><td class="crd-td">-</td><td class="crd-td">22,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 classical settlements ordered by peak population across South Asia (319AD to 750AD).</figcaption>
</figure>

# Sub-Regional Settlement Catalogues

## Madhyadesha and Magadha Core

The Madhyadesha core catalogues 2.484 settlements spanning the Yamuna-Ganga doab and southern Bihar [@Allchin1995Archaeology; @Erdosy1988Urbanisation; @hawkes2020back; @khan2013bricks]. The urban hierarchy was anchored by Patna (Pataliputra), which peaked at 175.000 inhabitants in 400AD (140.000 in 500AD, receding to 45.000 in 750AD), and Kannauj (Kanyakubja), which expanded from 45.000 in 400AD to 140.000 inhabitants in 650AD as the imperial residence of Harsha (125.000 in 750AD) [@Chattopadhyaya1994Making; @targa1999pala]. Varanasi peaked at 85.000 in 600AD (80.000 in 750AD), while Mathura stood at 76.175 in 319AD (46.784 in 750AD). Other major centres include Ayodhya (52.000 peak in 400AD), Kaushambi (30.000 in 319AD), Nalanda (25.000 peak in 650AD), Bhagalpur (24.392 in 319AD), Shravasti (18.000 in 319AD) and Rajgir (13.027 in 319AD). Excavations at Ahichchhatra, Bhita and Sarnath reveal continuous occupation with burnt-brick domestic structures, stepped wells and monastic foundations [@hawkes2020back; @shaw2013archaeolog].

## Gauda, Pundravardhana, Samatata and Kamarupa

The eastern deltaic province catalogues 2.744 settlements across Bengal and Assam [@kovacs2024bengal; @sharma2011empire; @Eaton1993Rise]. Gaur (Lakshmanavati) expanded from 35.000 inhabitants in 600AD to 65.000 by 750AD under early Pala patronage, functioning as the premier metropolis of eastern India [@targa1999pala]. Mahasthangarh (Pundranagara) in northern Bengal supported 45.000 inhabitants at its peak in 650AD (41.352 in 750AD), enclosed by brick ramparts. Guwahati (Pragjyotishpura) in the Brahmaputra valley grew from 17.310 in 319AD to 29.274 in 750AD, serving as the royal capital of the Varman kings [@Phuntsho2013HistoryBhutan]. Coastal and riverine ports including Tamralipti (38.000 peak in 400AD) and Chandraketugarh (25.938 peak in 319AD) commanded trade into Southeast Asia, while Sisupalgarh (13.143 in 319AD) anchored the Kalinga coastal corridor [@acharjaya2026historical].

## Malwa, Ujjain, Maitraka Valabhi and Western Provinces

Malwa and Gujarat catalogue 2.165 settlements across the Malwa plateau, Narmada valley and western littoral [@sheikh2004state; @kumar2025investigat]. Ujjain served as a premier commercial, administrative and astronomical hub, peaking at 95.000 inhabitants in 400AD (86.081 in 500AD, 71.836 in 750AD). In Saurashtra, Valabhi expanded from 25.000 in 500AD to 65.000 in 650AD (55.000 in 750AD) as the capital of the Maitrakas and a major centre of Buddhist learning [@verardi2018gods]. Bharuch (Bhrigukachchha) supported 39.070 people in 319AD (37.118 in 750AD), anchoring Arabian Sea maritime trade, while Vidisha (32.784 in 319AD) and Jabalpur (32.752 in 750AD) anchored inland Malwa and Patan (Anhilwara) reached 20.000 inhabitants by 750AD [@shaw2003ancient].

## Punjab, Thanesar, Kashmir and North-Western Frontier

The north-western province catalogues 2.411 settlements across the Indus and Punjab river basins [@petrie2017adaptation; @morris2019central]. Peshawar (Purushapura) stood at 70.703 inhabitants in 319AD (65.000 in 400AD, 33.887 in 750AD) along the trans-Indus corridor, while Thanesar peaked at 55.000 in 600AD as the early Pushyabhuti seat [@khattak2025major]. Taxila supported 53.190 inhabitants in 319AD (45.000 in 400AD) before contracting to 12.000 in 500AD after Huna raids [@morris2019central; @verardi2012buddhism]. Multan climbed steadily to 52.139 in 750AD, Srinagar and Delhi each reached 48.000 in 750AD, Mansura expanded to 40.415 in 750AD, Alor peaked at 38.000 in 650AD, Banbhore reached 36.057 in 750AD, Sialkot (Sakala) peaked at 35.799 in 500AD and Lahore grew to 25.000 by 750AD.

## Vakataka Vidarbha and Northern Deccan Sphere

The southern macro-province catalogues 3.094 settlements across the Deccan plateau, coastal Maharashtra and southern peninsular trade corridors [@shaw2013archaeolog; @neill2020empires; @Champakalakshmi1996Trade]. Kanchipuram expanded from 43.667 inhabitants in 319AD to 60.000 in 500AD and a peak of 85.000 in 650AD (82.128 in 750AD), serving as a Pallava royal capital and educational centre [@seland2014archaeolog; @Champakalakshmi1996Trade]. Badami peaked at 52.000 inhabitants in 650AD under the Chalukyas, while Paithan (39.848 in 319AD), Amaravati (31.719 in 319AD) and Nagarjunakonda (26.559 in 319AD) formed major early Deccan centres [@Stein1989Vijayanagara]. Sopara on the Konkan coast supported 23.480 inhabitants in 319AD (18.821 in 750AD) alongside Kalyan (8.726 peak in 700AD), while excavations at Mansar, Paunar and Ter confirm active rural craft production and agrarian exchange [@shaw2013archaeolog].

# Source Ledger Audit and Excluded Candidates

The INDUS source ledger records 13.698 total candidate entries for classical South Asia. Of these, 12.898 were included as primary catalogued settlements with dedicated WGS84 coordinates and demographic trajectories across Waves 1 to 4, while 800 candidates were excluded. All 800 excluded candidates represent duplicate-alias consolidations: secondary survey coordinates located within 3 km of a primary nucleated settlement or homonymous entries sharing identical trajectories that were consolidated into the canonical settlement key to avoid artificial spatial over-concentration.

Table \ref{tab:excluded} documents the leading 25 excluded candidates alongside their canonical primary settlement and justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Laugram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Banabasi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ranikot Fort</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ranikot Fort</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Khaksi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Nagtaroli</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Garhi (Ramgarh)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Budhavarpeth)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Satimata Tekadi)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bramhi Reethi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sindpuri</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Near Vaijeshwar Tem</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Gunjepar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bhandarbodi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Taular (Walni Bujurg)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pratappur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Saoli</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pachkhedi (Beldongri)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mohdara</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Panjrepar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Adam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ambara Kandari (Attargaon)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bhivsena</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kakada (Ambuj)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Deni</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Classical South Asia source ledger.</figcaption>
</figure>

# Limitations and Preservation Biases

Archaeological visibility across classical South Asia remains affected by taphonomic and developmental factors:
1. **Fluvial Alluviation and River Migration**: The active meandering and seasonal flooding of the Ganga, Yamuna, Indus and Brahmaputra rivers continually erode ancient riverbank mounds or bury classical strata beneath metres of Holocene silt [@singh2017counter; @garciamolsosa2023reconstruc].
2. **Superimposed Urban Occupation**: Many of the largest classical cities (including Patna, Kannauj, Ujjain, Varanasi, Kanchipuram, Mathura and Peshawar) have experienced continuous human habitation for millennia, obscuring classical architectural strata beneath modern urban infrastructure [@hawkes2020back; @petrie2025hidden; @Blake1991Shahjahanabad].
3. **Perishable Construction Materials**: While monumental religious buildings and royal citadels employed fired brick and stone masonry, common residential domestic architecture relied heavily on sun-dried mud brick, timber framing and thatch, which disintegrate rapidly in monsoon climates [@khan2013bricks].

Despite these preservation constraints, the systematic integration of 12.898 georeferenced settlements demonstrates that classical South Asia maintained a dense, highly differentiated and resilient settlement hierarchy.

# Sources
