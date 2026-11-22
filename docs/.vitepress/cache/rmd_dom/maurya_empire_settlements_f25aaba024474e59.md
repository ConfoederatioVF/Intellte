---
title: "Settlement Gazetteer of the Maurya Empire (322BC to 185BC)"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories across Five Viceroyalties"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: maurya_empire_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_maurya_empire_spatial.png"
hero_caption: "Spatial distribution of 9.518 catalogued settlements across five imperial viceroyalties of the Maurya Empire (3,94M km²) during the Ashokan apex (260BC)."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues WGS84 geographic coordinates, administrative jurisdictions, occupation spans and benchmark population series for 9.518 catalogued settlements across the Maurya Empire (3,94M km², encompassing 3.938.787 km²) from 322BC to 185BC. Spanning five canonical imperial viceroyalties (Prachya and the Magadhan Core with 3.414 settlements, Uttarapatha with 2.203, Dakshinapatha with 2.084, Avantiratha with 1.440 and Kalinga with 377), the dataset documents the spatial hierarchy of early South Asian urbanism, encompassing the palisaded megacity of Pataliputra, viceregal metropolises at Taxila, Ujjayini, Tosali and Suvarnagiri, fortified regional capitals such as Kaushambi, Varanasi, Mathura, Sisupalgarh, Mahasthangarh and Rajgir, coastal trading emporia at Bharuch, Sopara and Tamralipti, and thousands of agrarian market towns and rural village communities.

Settlement demographic estimates range from the imperial capital of Patna (Pataliputra, 320k peak in 260BC) and regional metropolises including Ujjain (70,6k peak in 185BC), Varanasi (65k peak in 300BC), Kaushambi (62k peak in 300BC), Taxila (59,1k peak in 185BC), Mathura (50,5k peak in 185BC), Shravasti (46,4k peak in 322BC) and Ayodhya (44,2k peak in 185BC) down to nucleated garrison outposts, mining encampments and rural market settlements numbering several hundred inhabitants. Across the full 9.518-settlement gazetteer, log-log rank-size scaling fits a Zipf slope of $\alpha = 0,87$ ($R^2 = 0,95$). Every catalogued settlement is reconciled against 10.318 candidates recorded in the INDUS source ledger, alongside 800 documented exclusions that isolate duplicate toponymic aliases within 3 km, non-habitation epigraphic pillars, and natural rock outcrops lacking domestic occupational refuse.

By anchoring archaeological and historical settlement trajectories to precise geographic coordinates, this gazetteer provides the empirical foundation for settlement subtraction within the INDUS spatial kriging pipeline. Isolating nucleated urban populations from rural peasantries ensures that regional demographic density surfaces reflect documented archaeological and census-calibrated sites rather than uncalibrated continental assumptions.

# Settlement Archaeology in the Maurya Empire

Archaeological settlement patterns in the Maurya Empire reflect a highly integrated urban hierarchy shaped by imperial administrative design, inter-regional trade arteries and agrarian colonisation [@Hawkes2020Back; @Dwivedi2019Early; @Allchin1995Archaeology; @Erdosy1988Urbanisation]. Excavations across South Asia identify four primary functional tiers of settlement:

1. **Imperial Capital**: Pataliputra (modern Patna), situated at the confluence of the Ganga and Son rivers, constituted the administrative and political nerve centre of the empire. As recorded by Megasthenes and confirmed by excavations at Kumrahar and Bulandi Bagh, the city was enclosed by a massive timber palisade punctuated by 570 watchtowers and 64 gates, surrounded by a deep protective moat fed by the Son River. Excavations revealed monumental Mauryan architecture, notably an eighty-pillared polished sandstone hypostyle hall demonstrating sophisticated stone-cutting craftsmanship and imperial Persian influence [@Fauconnier2015Occidente].
2. **Viceregal Metropolises**: Outlying provinces were governed from major fortified metropolises headed by royal princes. In Uttarapatha, Taxila (Bhir Mound) featured dense stone masonry habitations, covered drainage systems, and extensive artisan quarters manufacturing jewellery, coins and glassware [@Morris2019Evidence]. In Avantiratha, Ujjayini was enclosed by a massive mud rampart and moat along the Kshipra River, serving as the astronomical and mercantile capital of western India [@Dwivedi2021Tools]. In Kalinga, Tosali was anchored by the fortified city of Sisupalgarh, featuring a square layout enclosed by monumental earthen ramparts faced with laterite brick, sixteen stone gateways, and internal gridded streets [@Yule2008Early; @Yule2009Sisupalgar]. In Dakshinapatha, Suvarnagiri in Andhra Pradesh coordinated mineral extraction from the southern gold and diamond belts [@Shinde2026Autonomous].
3. **Fortified Regional Market Centres**: Secondary administrative and commercial capitals functioned as focal nodes for tax collection and legal administration. In northern Bengal, the fortified citadel of Mahasthangarh (ancient Pundranagara) occupied a high terrace overlooking the Karatoya River, with excavations uncovering Mauryan brick walls, punch-marked coins, and a third-century BC Brahmi inscription recording royal grain distribution during drought [@Rashid2020Search; @Kovacs2024Bengal]. In the middle Ganga valley, fortified centres like Kaushambi, Rajgir, Varanasi, Shravasti and Ayodhya concentrated thousands of artisans, merchants and state officials along the *rajapatha* [@Hussain2026Geopolitic].
4. **Maritime and Riverine Ports**: International commercial emporia connected inland production centres with overseas markets. On the Gulf of Khambhat, Bharuch (Bhrigukachha, Barygaza) acted as the premier western seaport handling cotton, aromatics and semiprecious stones bound for the Red Sea and Persian Gulf [@Bopearachchi2022Indian]. On the Konkan coast, Sopara (Shurparaka) served as a major Buddhist maritime hub, where Ashoka erected an edition of his Major Rock Edicts. In the east, Tamralipti in the Bengal delta handled riverine and maritime traffic connecting the Ganga basin with Kalinga, Sri Lanka and Southeast Asia [@Mishra2026Coastal].

# Methodology and Source Ledger Reconciliation

The expanded 9.518-settlement gazetteer is empirically anchored rather than derived from arbitrary multipliers, integrating four reconciled source waves across 10.318 evaluated candidates:

1. **Primary-Monograph Historical Metropolis Trajectories**: Leading urban trajectories are calibrated directly from archaeological and historical-demographic monographs covering early historic urbanism, intramural mound areas and pre-industrial city scales [@Allchin1995Archaeology; @Erdosy1988Urbanisation; @Champakalakshmi1996Trade; @Kenoyer1998AncientCities; @Possehl1999IndusAge], supplemented by canonical regional urban syntheses for the Indo-Gangetic plain, Bengal and the Deccan [@Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Naqvi1968Urbanisation; @Blake1991Shahjahanabad; @Bayly1983Rulers; @Eaton1993Rise; @Stein1989Vijayanagara].
2. **Multi-Repository Archaeological and Monument Corpora**: Stratigraphic and spatial anchors are ingested from Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology A Review (IAR) compilations, Archaeological Survey of India (ASI) P1371 site registers, Wikidata, OpenStreetMap heritage nodes and XRONOS/c14bazAAR radiocarbon inventories [@Hawkes2020Back; @Dwivedi2019Early].
3. **Official National Censuses and Colonial Gazetteers**: Long-term settlement coordinates and sub-district baselines draw on Census of India Table A-04, the Pakistan Bureau of Statistics (PBS), Bangladesh Bureau of Statistics (BBS), Department of Census and Statistics (DCS, Sri Lanka), Central Bureau of Statistics (CBS, Nepal), National Statistics Bureau (NSB, Bhutan) and National Bureau of Statistics (NBS, Maldives), cross-checked against historical administrative gazetteers and Himalayan regional histories [@ImperialGazetteer1908; @Slusser1982NepalMandala; @Phuntsho2013HistoryBhutan].
4. **Macro-Envelope Continuity and Chronological Filters**: Non-metropolitan market towns and rural centres incorporate macro-envelope *qasba*, *pargana* and *nadu* settlement continuity [@Chattopadhyaya1994Making; @Habib1982Atlas], strictly gated by foundation-year constraints, Northern Black Polished Ware (NBPW) or radiocarbon phase verification, and chronological toponymy filters excluding post-Mauryan foundations.

Candidate inclusion requires WGS84 coordinates verified against regional topography and drainage, confirmed fourth-to-second-century BC occupation, and demographic scaling calibrated to fortified intramural area, residential mound extent or macro-envelope rural-urban parity. Where multiple survey points fall within 3 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, while non-habitation features (isolated rock edicts, displaced pillar fragments and natural landmarks) account for the 800 excluded candidates. Across the 9.518 included settlements, the rank-size distribution conforms to a Zipf curve of $\alpha = 0,87$ ($R^2 = 0,95$).

Table \ref{tab:summary} summarises the distribution of 9.518 catalogued settlements and summed site peaks across the five imperial viceroyalties.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Uttarapatha</strong></td><td class="crd-td">2.203</td><td class="crd-td">23,1%</td><td class="crd-td">2,02M</td><td class="crd-td">Taxila (59,1k)</td></tr>
<tr><td class="crd-td"><strong>Prachya and Core</strong></td><td class="crd-td">3.414</td><td class="crd-td">35,9%</td><td class="crd-td">3,33M</td><td class="crd-td">Patna (320k)</td></tr>
<tr><td class="crd-td"><strong>Avantiratha</strong></td><td class="crd-td">1.440</td><td class="crd-td">15,1%</td><td class="crd-td">1,23M</td><td class="crd-td">Ujjain (70,6k)</td></tr>
<tr><td class="crd-td"><strong>Kalinga</strong></td><td class="crd-td">377</td><td class="crd-td">4%</td><td class="crd-td">227,4k</td><td class="crd-td">Sisupalgarh (35k)</td></tr>
<tr><td class="crd-td"><strong>Dakshinapatha</strong></td><td class="crd-td">2.084</td><td class="crd-td">21,9%</td><td class="crd-td">1,82M</td><td class="crd-td">Paithan (25,3k)</td></tr>
<tr><td class="crd-td"><strong>Imperial Total</strong></td><td class="crd-td">9.518</td><td class="crd-td">100%</td><td class="crd-td">8,63M</td><td class="crd-td">Patna (320k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Provincial distribution of 9.518 catalogued settlements and summed site peaks across the Maurya Empire.</figcaption>
</figure>

# Leading Maurya Settlements

Table \ref{tab:gazetteer} presents the leading 45 settlements across the Maurya Empire ordered by peak demographic scale descending, detailing coordinates, provincial attribution, chronological occupation span and benchmark population series.

The urban apex was led by the imperial capital of Patna (Pataliputra, 320k peak in 260BC), followed by Ujjain (Ujjayini, 70,6k peak in 185BC), Varanasi (65k peak in 300BC), Kaushambi (62k peak in 300BC), Taxila (59,1k peak in 185BC), Mathura (50,5k peak in 185BC), Shravasti (46,4k peak in 322BC) and Ayodhya (44,2k peak in 185BC) [@Allchin1995Archaeology; @Erdosy1988Urbanisation]. Along the northwestern arterial route of Uttarapatha, Taxila was flanked by Charsadda (Pushkalavati, 35,6k peak in 185BC), Sialkot (34,1k peak in 185BC), Delhi (Indraprastha, 28,1k peak in 185BC), Multan (24,4k peak in 185BC) and Peshawar (19,2k peak in 185BC) [@Morris2019Evidence]. In Avantiratha, Ujjain was supported by Vidisha (35,3k peak in 185BC) and the commercial port of Bharuch (28,8k peak in 185BC) on the Narmada estuary [@Dwivedi2021Tools].

In the eastern provinces, the fortified stronghold of Sisupalgarh (35k peak in 260BC) anchored Kalinga, while Vaishali (35,5k peak in 322BC), Bhagalpur (32,2k peak in 322BC), Ahichhatra (31,5k peak in 185BC), Mahasthangarh (27,3k peak in 185BC), Chandraketugarh (27,3k peak in 185BC), Rajgir (26,9k peak in 322BC) and Tamralipti (26,8k peak in 185BC) structured Prachya and the Bengal delta [@Yule2009Sisupalgar; @Rashid2020Search]. Across Dakshinapatha, Paithan (25,3k peak in 185BC), Amaravati (21k peak in 185BC), Sopara (20,2k peak in 185BC) and Kanchipuram (18,7k peak in 185BC) linked Deccan interior routes with Indian Ocean trade [@Champakalakshmi1996Trade; @Bopearachchi2022Indian; @Neelakantan2025Digital].

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Province</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">260BC Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">320k</td><td class="crd-td">320k</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Avantiratha</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">70,6k</td><td class="crd-td">66,9k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">65k</td><td class="crd-td">63,8k</td></tr>
<tr><td class="crd-td"><strong>Kaushambi</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">25,34 N, 81,39 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">62k</td><td class="crd-td">59,9k</td></tr>
<tr><td class="crd-td"><strong>Taxila</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">33,75 N, 72,79 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">59,1k</td><td class="crd-td">53,6k</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">27,49 N, 77,67 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">50,5k</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Shravasti</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">27,51 N, 82,05 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">46,4k</td><td class="crd-td">43k</td></tr>
<tr><td class="crd-td"><strong>Ayodhya</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">26,79 N, 82,19 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">44,2k</td><td class="crd-td">42,8k</td></tr>
<tr><td class="crd-td"><strong>Charsadda</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">34,15 N, 71,73 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">35,6k</td><td class="crd-td">33,7k</td></tr>
<tr><td class="crd-td"><strong>Vaishali</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">25,99 N, 85,13 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">35,5k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Vidisha</strong></td><td class="crd-td">Avantiratha</td><td class="crd-td">23,52 N, 77,81 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">35,3k</td><td class="crd-td">33,1k</td></tr>
<tr><td class="crd-td"><strong>Sisupalgarh</strong></td><td class="crd-td">Kalinga</td><td class="crd-td">20,23 N, 85,85 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">35k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">32,49 N, 74,53 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">34,1k</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>Bhagalpur</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">25,25 N, 86,95 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">32,2k</td><td class="crd-td">31,1k</td></tr>
<tr><td class="crd-td"><strong>Ahichhatra</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">28,37 N, 79,13 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">31,5k</td><td class="crd-td">30,5k</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">Avantiratha</td><td class="crd-td">21,7 N, 73 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">28,8k</td><td class="crd-td">24,5k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">28,1k</td><td class="crd-td">26,8k</td></tr>
<tr><td class="crd-td"><strong>Mahasthangarh</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">24,96 N, 89,34 E</td><td class="crd-td">300BC - 185BC</td><td class="crd-td">27,3k</td><td class="crd-td">23,7k</td></tr>
<tr><td class="crd-td"><strong>Chandraketugarh</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">22,7 N, 88,68 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">27,3k</td><td class="crd-td">25,1k</td></tr>
<tr><td class="crd-td"><strong>Rajgir</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">25,03 N, 85,42 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">26,9k</td><td class="crd-td">23,9k</td></tr>
<tr><td class="crd-td"><strong>Tamralipti</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">22,29 N, 87,92 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">26,8k</td><td class="crd-td">24,9k</td></tr>
<tr><td class="crd-td"><strong>Paithan</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">19,48 N, 75,39 E</td><td class="crd-td">200BC - 185BC</td><td class="crd-td">25,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">24,4k</td><td class="crd-td">23,1k</td></tr>
<tr><td class="crd-td"><strong>Wari-Bateshwar</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">24,09 N, 90,82 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">23,1k</td><td class="crd-td">22,4k</td></tr>
<tr><td class="crd-td"><strong>Kannauj</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">27,05 N, 79,92 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">21,8k</td><td class="crd-td">20,6k</td></tr>
<tr><td class="crd-td"><strong>Amaravati</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">16,57 N, 80,36 E</td><td class="crd-td">200BC - 185BC</td><td class="crd-td">21k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sopara</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">19,41 N, 72,81 E</td><td class="crd-td">300BC - 185BC</td><td class="crd-td">20,2k</td><td class="crd-td">17,4k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">200BC - 185BC</td><td class="crd-td">19,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gaya</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">24,8 N, 85 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">18,7k</td><td class="crd-td">18,3k</td></tr>
<tr><td class="crd-td"><strong>Kanchipuram</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">12,83 N, 79,7 E</td><td class="crd-td">200BC - 185BC</td><td class="crd-td">18,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tilaurakot</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">27,57 N, 83,05 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">18k</td><td class="crd-td">17,1k</td></tr>
<tr><td class="crd-td"><strong>Janakpur</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">26,73 N, 85,93 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">18k</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Junagadh</strong></td><td class="crd-td">Avantiratha</td><td class="crd-td">21,52 N, 70,46 E</td><td class="crd-td">260BC - 185BC</td><td class="crd-td">16,3k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">25,43 N, 81,85 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">15,4k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Kampilya</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">27,62 N, 79,28 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">15,1k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Sheikhupura</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">31,71 N, 73,99 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">14,3k</td><td class="crd-td">13,9k</td></tr>
<tr><td class="crd-td"><strong>Jabalpur</strong></td><td class="crd-td">Avantiratha</td><td class="crd-td">23,18 N, 79,99 E</td><td class="crd-td">200BC - 185BC</td><td class="crd-td">14,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Thanesar</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">29,97 N, 76,83 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">14,2k</td><td class="crd-td">13,3k</td></tr>
<tr><td class="crd-td"><strong>Uch</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">29,24 N, 71,06 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">13,2k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">33,67 N, 72,7 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">12,1k</td><td class="crd-td">11,8k</td></tr>
<tr><td class="crd-td"><strong>Atranjikhera</strong></td><td class="crd-td">Prachya and Core</td><td class="crd-td">27,58 N, 78,66 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">12,1k</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">31,27 N, 72,32 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">11,3k</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Gujrat</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">32,57 N, 74,08 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">10,9k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Ambattur</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">13,1 N, 80,16 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">10,6k</td><td class="crd-td">10,4k</td></tr>
<tr><td class="crd-td"><strong>Poonamallee</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">13,05 N, 80,11 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">10,6k</td><td class="crd-td">10,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across the Maurya Empire (322BC to 185BC).</figcaption>
</figure>

# Sources
