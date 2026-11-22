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
hero_caption: "Spatial distribution of 3.183 catalogued classical settlements and macro-provincial boundaries across South Asia (3,94M km²) from 319AD to 750AD."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents geographic coordinates, administrative attributions, occupational chronologies and benchmark demographic trajectories for 3510 catalogued settlements across classical South Asia (3,94M km², encompassing 3.938.787 km²) from 319AD to 750AD. Spanning five macro-provinces, the catalogue reconciles diverse archaeological and architectural traditions: monumental burnt-brick metropolises and fortified riverine capitals in the Gangetic plain, flourishing deltaic emporia and sacred monastic centres in Bengal and Assam, trading ports and dynastic strongholds across Malwa and Gujarat, fortified caravan nodes and frontier garrisons in Punjab and the north-west, and rock-cut monastic chaityas and agricultural market centres across the volcanic plateaux of the Vakataka Deccan.

Settlement magnitudes range from agricultural villages and monastic dependencies to imperial capitals: Delhi (170.025 peak in 500AD), the twin Gangetic metropolises of Varanasi (141.687 peak) and Patna (141.687 peak), Gaur in the Bengal delta (120.000 peak in 750AD), Lahore (113.350 peak), Kannauj (66.538 peak in 600AD), Multan (66.121 peak), Ujjain (61.398 peak), Peshawar (61.398 peak), Kanchipuram (56.675 peak), Patan (50.000 peak), Taxila (48.356 peak) and Mathura (47.229 peak). Every catalogued settlement reconciles against 3.983 candidate entries in the source ledger alongside 800 documented duplicate-alias consolidations within 3 km radii.

By coupling georeferenced settlement trajectories with comprehensive spatial kriging and environmental covariates, this gazetteer establishes an empirical baseline for classical South Asian urbanism. Settlement subtraction isolates nucleated urban centres from rural populations, ensuring that historical demographic reconstructions reflect genuine archaeological site distributions rather than speculative continental ratios.

# Settlement Archaeology in Classical South Asia

Archaeological settlement patterns in classical South Asia reflect sophisticated adaptations to regional hydrology, commercial transit arteries and agrarian colonisation [@hawkes2020back; @neill2020empires; @petrie2025hidden]. Four primary settlement traditions characterise the classical archaeological record:

1. **Imperial and Provincial Citadels**: Positioned along major navigable waterways and arterial highways, these walled urban complexes feature monumental burnt-brick walls, multi-tiered defensive moats, stepped brick wells and structured artisan quarters [@khan2013bricks; @mishra2026historical]. Cities such as Patna (Pataliputra), Varanasi, Kannauj, Mathura, Kaushambi and Ujjain served as nodes of political administration, craft guilds (*shreni*) and religious patronage.
2. **Sacred Monastic Complexes and Pilgrimage Centres**: Buddhist Mahaviharas and Brahmanical temple complexes functioned as major socioeconomic hubs [@shaw2013archaeolog; @verardi2018gods]. Sites such as Nalanda, Sanchi, Valabhi, Paharpur and Kanchipuram integrated multi-storeyed monastic residences, prayer halls, granaries and extensive agrarian estates managed by monastic communities.
3. **Fluvial and Maritime Ports**: Coastal emporia and riverine transhipment centres connected overland trade routes with overseas maritime networks in the Arabian Sea and Bay of Bengal [@seland2014archaeolog; @cobb2018black]. Ports including Bharuch (Bhrigukachchha), Sopara, Cambay, Patan and Tamralipti commanded extensive artisan industries and customs houses.
4. **Fortified Frontier Nodes and Market Towns**: Along the north-western frontier, the Deccan scarps and the Bengal delta margins, fortified settlements provided security for agricultural colonists and caravan routes [@acharjaya2026historical; @morris2019central]. Sites such as Taxila, Peshawar, Multan, Sialkot, Gaur and Mahasthangarh integrated garrison quarters with flourishing regional markets.

# Methodology and Source Ledger Reconciliation

Candidate sites in the source ledger were evaluated using published excavation reports from the Archaeological Survey of India (ASI), provincial state archaeology directorates, epigraphic corpuses (*Corpus Inscriptionum Indicarum*), remote sensing surveys and historical gazetteers [@hawkes2020back; @orengo2020automated; @garciamolsosa2023reconstruc; @petrie2025hidden]. Inclusion requires:
- Verified WGS84 geographic coordinates matched to physical habitation mounds or documented ancient toponyms.
- Stratigraphic evidence of occupation or epigraphic attestation between 319AD and 750AD.
- Demographic series calibrated to site area, enclosed intramural hectares, or documented structural density.

Where multiple archaeological survey points fall within 3 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Isolated non-habitation findspots lacking residential refuse are excluded.

Table \ref{tab:summary} summarises the distribution of 3510 catalogued settlements and summed site peaks across the five macro-provinces.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Province</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Madhyadesha</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Gauda-Bengal</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Malwa-Gujarat</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Punjab-NW</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Vakataka Deccan</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">3510</td><td class="crd-td">100%</td><td class="crd-td">4,52M</td><td class="crd-td">Gaur (120k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 3.183 catalogued settlements and summed site peaks across Classical South Asia.</figcaption>
</figure>

# Leading Classical Settlements

Table \ref{tab:gazetteer} presents the leading 45 classical settlements across South Asia ordered by peak population descending, detailing coordinates, macro-provincial attribution, chronological span and benchmark population series.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Province</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">500AD Pop</th><th class="crd-th">750AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gaur</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">24,87 N, 88,13 E</td><td class="crd-td">750AD</td><td class="crd-td">120k</td><td class="crd-td">-</td><td class="crd-td">120k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">110k</td><td class="crd-td">110k</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">90k</td><td class="crd-td">90k</td><td class="crd-td">90k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">75k</td><td class="crd-td">75k</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Kannauj</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">27,05 N, 79,92 E</td><td class="crd-td">400AD - 750AD</td><td class="crd-td">66,5k</td><td class="crd-td">59,6k</td><td class="crd-td">45,8k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">60k</td><td class="crd-td">60k</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>Patan</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">23,85 N, 72,12 E</td><td class="crd-td">750AD</td><td class="crd-td">50k</td><td class="crd-td">-</td><td class="crd-td">50k</td></tr>
<tr><td class="crd-td"><strong>Taxila</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">33,75 N, 72,79 E</td><td class="crd-td">319AD - 500AD</td><td class="crd-td">48,4k</td><td class="crd-td">34,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kaushambi</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,34 N, 81,39 E</td><td class="crd-td">319AD - 600AD</td><td class="crd-td">36k</td><td class="crd-td">36k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">35k</td><td class="crd-td">35k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Shravasti</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">27,51 N, 82,05 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">33,1k</td><td class="crd-td">33,1k</td><td class="crd-td">22,9k</td></tr>
<tr><td class="crd-td"><strong>Mahasthangarh</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">24,96 N, 89,34 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">33,1k</td><td class="crd-td">33,1k</td><td class="crd-td">22,9k</td></tr>
<tr><td class="crd-td"><strong>Mansura</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">25,88 N, 68,78 E</td><td class="crd-td">500AD - 750AD</td><td class="crd-td">32,6k</td><td class="crd-td">22,9k</td><td class="crd-td">22,9k</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">32,5k</td><td class="crd-td">32,5k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">32,5k</td><td class="crd-td">32,5k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td"><strong>Rajgir</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,03 N, 85,42 E</td><td class="crd-td">319AD - 600AD</td><td class="crd-td">31,5k</td><td class="crd-td">31,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kanchipuram</strong></td><td class="crd-td">Vakataka Vidarbha</td><td class="crd-td">12,83 N, 79,7 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">30k</td><td class="crd-td">30k</td><td class="crd-td">30k</td></tr>
<tr><td class="crd-td"><strong>Valabhi</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">21,88 N, 71,88 E</td><td class="crd-td">500AD - 750AD</td><td class="crd-td">30k</td><td class="crd-td">23,1k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Vidisha</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">23,52 N, 77,81 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">28,3k</td><td class="crd-td">28,3k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Vaishali</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,99 N, 85,13 E</td><td class="crd-td">319AD - 600AD</td><td class="crd-td">27k</td><td class="crd-td">27k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Charsadda</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">34,15 N, 71,73 E</td><td class="crd-td">319AD - 600AD</td><td class="crd-td">27k</td><td class="crd-td">27k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sisupalgarh</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">20,23 N, 85,85 E</td><td class="crd-td">319AD - 400AD</td><td class="crd-td">25,8k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">27,49 N, 77,67 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">25k</td><td class="crd-td">25k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Tamralipti</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">22,29 N, 87,92 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">23,6k</td><td class="crd-td">23,6k</td><td class="crd-td">16,3k</td></tr>
<tr><td class="crd-td"><strong>Chandraketugarh</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">22,7 N, 88,68 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">23,6k</td><td class="crd-td">23,6k</td><td class="crd-td">16,3k</td></tr>
<tr><td class="crd-td"><strong>Banbhore</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">24,75 N, 67,52 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">23,6k</td><td class="crd-td">23,6k</td><td class="crd-td">16,3k</td></tr>
<tr><td class="crd-td"><strong>Alor</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">27,69 N, 68,93 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">23,6k</td><td class="crd-td">23,6k</td><td class="crd-td">16,3k</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">21,7 N, 73 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">20k</td><td class="crd-td">20k</td><td class="crd-td">20k</td></tr>
<tr><td class="crd-td"><strong>Ahichhatra</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">28,37 N, 79,13 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">18,9k</td><td class="crd-td">18,9k</td><td class="crd-td">13,1k</td></tr>
<tr><td class="crd-td"><strong>Ayodhya</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">26,79 N, 82,19 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">17,5k</td><td class="crd-td">17,5k</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">32,49 N, 74,53 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">17,5k</td><td class="crd-td">17,5k</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>Bhagalpur</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">25,25 N, 86,95 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">15k</td><td class="crd-td">15k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Guwahati</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">26,18 N, 91,73 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">15k</td><td class="crd-td">15k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Sopara</strong></td><td class="crd-td">Vakataka Vidarbha</td><td class="crd-td">19,41 N, 72,81 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">14,2k</td><td class="crd-td">14,2k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Mainamati</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">23,43 N, 91,14 E</td><td class="crd-td">600AD - 750AD</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">11,1k</td></tr>
<tr><td class="crd-td"><strong>Tilaurakot</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">27,57 N, 83,05 E</td><td class="crd-td">319AD - 600AD</td><td class="crd-td">13,5k</td><td class="crd-td">13,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Uch</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">29,24 N, 71,06 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">12,5k</td><td class="crd-td">12,5k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>Paharpur</strong></td><td class="crd-td">Gauda and Pundravardhana and Samatata</td><td class="crd-td">25,03 N, 88,98 E</td><td class="crd-td">750AD</td><td class="crd-td">11k</td><td class="crd-td">-</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Jhelum</strong></td><td class="crd-td">Punjab and Thanesar and Kashmir</td><td class="crd-td">32,93 N, 73,73 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">10k</td><td class="crd-td">10k</td><td class="crd-td">10k</td></tr>
<tr><td class="crd-td"><strong>Kushinagar</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">26,74 N, 83,88 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">9,4k</td><td class="crd-td">9,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Atranjikhera</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">27,58 N, 78,66 E</td><td class="crd-td">319AD - 600AD</td><td class="crd-td">9k</td><td class="crd-td">9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kampilya</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">27,62 N, 79,28 E</td><td class="crd-td">319AD - 600AD</td><td class="crd-td">9k</td><td class="crd-td">9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nagari</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">25,02 N, 74,72 E</td><td class="crd-td">319AD - 600AD</td><td class="crd-td">8,6k</td><td class="crd-td">8,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Besnagar</strong></td><td class="crd-td">Malwa and Ujjain and Maitraka Valabhi</td><td class="crd-td">23,54 N, 77,8 E</td><td class="crd-td">750AD</td><td class="crd-td">8k</td><td class="crd-td">-</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Lumbini</strong></td><td class="crd-td">Madhyadesha and Magadha</td><td class="crd-td">27,47 N, 83,28 E</td><td class="crd-td">319AD - 750AD</td><td class="crd-td">7,6k</td><td class="crd-td">7,6k</td><td class="crd-td">5,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 classical settlements ordered by peak population across South Asia (319AD to 750AD).</figcaption>
</figure>

# Sub-Regional Settlement Catalogues

## Madhyadesha and Magadha Core

The Madhyadesha core catalogues 375 settlements spanning the Yamuna-Ganga doab and southern Bihar [@hawkes2020back; @khan2013bricks]. The urban hierarchy was anchored by the ancient imperial capitals of Patna (Pataliputra) and Varanasi, both reaching 141.687 inhabitants in 500AD. Kannauj (Kanyakubja) expanded to 66.538 inhabitants in 600AD as it became the imperial residence of Harsha [@targa1999pala]. Other major centres include Mathura (47.229 peak), Kaushambi (36.009 peak), Shravasti (33.060 peak), Ayodhya (33.060 peak), Rajgir (31.508 peak) and Bhagalpur (28.337 peak). Excavations at Ahichchhatra, Bhita and Sarnath reveal continuous occupation with sophisticated burnt-brick domestic structures, stepped wells and flourishing monastic foundations [@hawkes2020back; @shaw2013archaeolog].

## Gauda, Pundravardhana, Samatata and Kamarupa

The eastern deltaic province catalogues 364 settlements across Bengal and Assam [@kovacs2024bengal; @sharma2011empire]. Gaur (Lakshmanavati) expanded rapidly to 120.000 inhabitants by 750AD under early Pala patronage, functioning as the premier metropolis of eastern India [@targa1999pala]. Mahasthangarh (Pundranagara) in northern Bengal supported 33.060 inhabitants at its peak in 500AD, enclosed by formidable brick ramparts. Guwahati (Pragjyotishpura) in the Brahmaputra valley reached 28.337 inhabitants, serving as the royal capital of the Varman kings. Coastal and riverine ports including Tamralipti (23.615 peak) and Chandraketugarh (23.615 peak) commanded trade into Southeast Asia, while Sisupalgarh (25.794 peak) anchored the Kalinga coastal corridor [@acharjaya2026historical].

## Malwa, Ujjain, Maitraka Valabhi and Western Provinces

Malwa and Gujarat catalogue 919 settlements, representing the largest regional corpus [@sheikh2004state; @kumar2025investigat]. Ujjain served as a premier commercial, administrative and astronomical hub, concentrating 61.398 inhabitants in 500AD. In Saurashtra, Valabhi supported 30.000 people as the capital of the Maitrakas and an international centre of Buddhist learning [@verardi2018gods]. Patan (Anhilwara) emerged as a major commercial city, reaching 50.000 inhabitants by 750AD. Bharuch (Bhrigukachchha) supported 37.783 people at its peak, anchoring Arabian Sea maritime trade, while Vidisha concentrated 28.337 inhabitants beside the irrigation dam complexes of the Betwa valley [@shaw2003ancient].

## Punjab, Thanesar, Kashmir and North-Western Frontier

The north-western province catalogues 865 settlements across the Indus and Punjab river basins [@petrie2017adaptation; @morris2019central]. Delhi (Indraprastha) anchored overland routes between the Gangetic basin and Punjab, reaching 170.025 inhabitants in 500AD. Lahore supported 113.350 people at its peak, while Multan (66.121 peak) and Peshawar (61.398 peak) served as primary emporia along trans-Indus caravan routes [@khattak2025major]. Taxila reached 48.356 inhabitants before suffering destruction during sixth-century Huna raids [@morris2019central; @verardi2012buddhism]. Sialkot (Sakala) supported 33.060 inhabitants, and Mansura in Sindh reached 32.577 people.

## Vakataka Vidarbha and Northern Deccan Sphere

The southern macro-province catalogues 660 settlements across the northern Deccan plateau and coastal Maharashtra [@shaw2013archaeolog; @neill2020empires]. Kanchipuram reached 56.675 inhabitants in 500AD, serving as a celebrated Pallava royal capital and educational centre [@seland2014archaeolog]. Sopara on the Konkan coast supported 14.169 inhabitants as an active maritime port. Other prominent centres include Akkialur (4.301 peak), Kalliena (4.301 peak), Alosygni (4.251 peak) and Banabasi (4.251 peak). Excavations at Mansar, Paunar and Ter confirm flourishing urban and semi-urban communities supporting extensive craft production and agrarian trade [@shaw2013archaeolog].

# Source Ledger Audit and Excluded Candidates

The INDUS source ledger records 3.983 total candidate entries for classical South Asia. Of these, 3.183 were included as primary catalogued settlements with dedicated WGS84 coordinates and demographic trajectories, while 800 candidates were excluded. All 800 excluded candidates represent duplicate-alias consolidations: secondary survey coordinates located within 3 km of a primary nucleated settlement that were consolidated into the canonical settlement key to avoid artificial spatial over-concentration.

Table \ref{tab:excluded} documents the leading 25 excluded candidates alongside their canonical primary settlement and justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pauni (ghat)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Adam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kolari</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wirli Buzurg</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Fortified Settlemen</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mandhal (Temples near mode</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Alexandreia/Alexandria</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Satimata Tekadi)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yenora</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bramhi Reethi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Kalkamata Temple)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Kalkamata Temple)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yeni</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Near Vaijeshwar Tem</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Satimata Tekadi)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Palibothra</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lonara</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Achalpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kakada (Salabatpur)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Garhi (Ramgarh)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Cave 1 at Udayagiri</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Savangi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Achalpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Mangalwari peth nea</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Borda</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Classical South Asia source ledger.</figcaption>
</figure>

# Limitations and Preservation Biases

Archaeological visibility across classical South Asia remains affected by taphonomic and developmental factors:
1. **Fluvial Alluviation and River Migration**: The active meandering and seasonal flooding of the Ganga, Yamuna, Indus and Brahmaputra rivers continually erode ancient riverbank mounds or bury classical strata beneath metres of Holocene silt [@singh2017counter; @garciamolsosa2023reconstruc].
2. **Superimposed Urban Occupation**: Many of the largest classical cities (including Delhi, Varanasi, Patna, Kannauj, Mathura, Lahore and Peshawar) have experienced continuous human habitation for millennia, obscuring classical architectural strata beneath modern urban infrastructure [@hawkes2020back; @petrie2025hidden].
3. **Perishable Construction Materials**: While monumental religious buildings and royal citadels employed fired brick and stone masonry, common residential domestic architecture relied heavily on sun-dried mud brick, timber framing and thatch, which disintegrate rapidly in monsoon climates [@khan2013bricks].

Despite these preservation constraints, the systematic integration of 3.183 georeferenced settlements demonstrates that classical South Asia maintained a dense, highly differentiated and resilient settlement hierarchy.

# Sources
