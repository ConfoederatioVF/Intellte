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
hero_caption: "Spatial distribution of 1.655 catalogued settlements across five imperial viceroyalties of the Maurya Empire (3,94M km²) during the Ashokan apex (-260)."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues WGS84 geographic coordinates, administrative jurisdictions, occupation spans and benchmark population series for 1886 catalogued settlements across the Maurya Empire (3,94M km², encompassing 3.938.787 km²) from 322BC to 185BC. Spanning five canonical imperial viceroyalties (Uttarapatha, Prachya and the Magadhan Core, Avantiratha, Kalinga and Dakshinapatha), the dataset documents the spatial hierarchy of early South Asian urbanism, encompassing the palisaded megacity of Pataliputra, viceregal metropolises at Taxila, Ujjayini, Tosali and Suvarnagiri, fortified regional capitals such as Sisupalgarh, Mahasthangarh, Kaushambi and Rajgir, coastal trading emporia at Bharuch, Sopara and Tamralipti, and hundreds of agrarian market towns and rural village communities.

Settlement demographic estimates range from regional administrative metropolises such as Delhi (Indraprastha, 175,95k peak), Varanasi (146,62k peak), Pataliputra (Patna, 146,62k peak), Lahore (117,3k peak), Multan (68,42k peak), Ujjayini (Ujjain, 63,54k peak), Peshawar (Pushkalavati, 63,54k peak) and Kanchipuram (58,44k peak) down to nucleated garrison outposts, mining encampments and rural market settlements numbering several hundred inhabitants. Every catalogued settlement is reconciled against 2.455 candidates recorded in the source ledger under INDUS, alongside 800 documented exclusions that isolate duplicate toponymic aliases within 3 km, non-habitation epigraphic pillars, and natural rock outcrops lacking domestic occupational refuse.

By anchoring archaeological settlement trajectories to precise geographic coordinates, this gazetteer provides the empirical foundation for settlement subtraction within the INDUS spatial kriging pipeline. Isolating nucleated urban populations from rural peasantries ensures that regional demographic density surfaces reflect documented archaeological sites rather than uncalibrated continental assumptions.

# Settlement Archaeology in the Maurya Empire

Archaeological settlement patterns in the Maurya Empire reflect a highly integrated urban hierarchy shaped by imperial administrative design, inter-regional trade arteries and agrarian colonisation [@Hawkes2020Back; @Dwivedi2019Early]. Excavations across South Asia identify four primary functional tiers of settlement:

1. **Imperial Capital**: Pataliputra (modern Patna), situated at the confluence of the Ganga and Son rivers, constituted the administrative and political nerve centre of the empire. As recorded by Megasthenes and confirmed by excavations at Kumrahar and Bulandi Bagh, the city was enclosed by a massive timber palisade punctuated by 570 watchtowers and 64 gates, surrounded by a deep protective moat fed by the Son River. Excavations revealed monumental Mauryan architecture, notably an eighty-pillared polished sandstone hypostyle hall demonstrating sophisticated stone-cutting craftsmanship and imperial Persian influence [@Fauconnier2015Occidente].
2. **Viceregal Metropolises**: Outlying provinces were governed from major fortified metropolises headed by royal princes. In Uttarapatha, Taxila (Bhir Mound) featured dense stone masonry habitations, covered drainage systems, and extensive artisan quarters manufacturing jewellery, coins and glassware [@Morris2019Evidence]. In Avantiratha, Ujjayini was enclosed by a massive mud rampart and moat along the Kshipra River, serving as the astronomical and mercantile capital of western India [@Dwivedi2021Tools]. In Kalinga, Tosali was anchored by the fortified city of Sisupalgarh, featuring a square layout enclosed by monumental earthen ramparts faced with laterite brick, sixteen stone gateways, and internal gridded streets [@Yule2008Early; @Yule2009Sisupalgar]. In Dakshinapatha, Suvarnagiri in Andhra Pradesh coordinated mineral extraction from the southern gold and diamond belts [@Shinde2026Autonomous].
3. **Fortified Regional Market Centres**: Secondary administrative and commercial capitals functioned as focal nodes for tax collection and legal administration. In northern Bengal, the fortified citadel of Mahasthangarh (ancient Pundranagara) occupied a high terrace overlooking the Karatoya River, with excavations uncovering Mauryan brick walls, punch-marked coins, and a third-century BC Brahmi inscription recording royal grain distribution during drought [@Rashid2020Search; @Kovacs2024Bengal]. In the middle Ganga valley, fortified centres like Kaushambi, Rajgir, Varanasi, Shravasti and Ayodhya concentrated thousands of artisans, merchants and state officials along the *rajapatha* [@Hussain2026Geopolitic].
4. **Maritime and Riverine Ports**: International commercial emporia connected inland production centres with overseas markets. On the Gulf of Khambhat, Bharuch (Bhrigukachha, Barygaza) acted as the premier western seaport handling cotton, aromatics and semiprecious stones bound for the Red Sea and Persian Gulf [@Bopearachchi2022Indian]. On the Konkan coast, Sopara (Shurparaka) served as a major Buddhist maritime hub, where Ashoka erected an edition of his Major Rock Edicts. In the east, Tamralipti in the Bengal delta handled riverine and maritime traffic connecting the Ganga basin with Kalinga, Sri Lanka and Southeast Asia [@Mishra2026Coastal].

# Methodology and Source Ledger Reconciliation

Settlement candidates in the INDUS source ledger were evaluated using published site reports of the Archaeological Survey of India (ASI), provincial archaeology directorates, regional university surveys, and academic site gazetteers [@Hawkes2020Back; @Dwivedi2019Early]. Candidate inclusion requires:
- Precise WGS84 geographic coordinates verified against regional topography and drainage.
- Confirmed chronological occupation spanning the Mauryan period (fourth to second centuries BC), documented by Northern Black Polished Ware (NBPW), punch-marked silver or copper coinage, Ashokan epigraphy or stratigraphic radiocarbon determinations.
- Demographic scaling calibrated to fortified intramural area, residential mound extent or documented house-floor densities.

Where multiple archaeological survey points fall within 3 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features, such as isolated rock edicts without residential refuse, pillar fragments moved in modern times, or natural geological landmarks, are catalogued as excluded candidates.

Table \ref{tab:summary} summarises the distribution of 1886 catalogued settlements and summed site peaks across the five imperial viceroyalties.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Uttarapatha</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Prachya and Core</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Avantiratha</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Kalinga</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Dakshinapatha</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Imperial Total</strong></td><td class="crd-td">1886</td><td class="crd-td">100%</td><td class="crd-td">2,95M</td><td class="crd-td">Patna (250k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Provincial distribution of 1.655 catalogued settlements and summed site peaks across the Maurya Empire.</figcaption>
</figure>

# Leading Maurya Settlements

Table \ref{tab:gazetteer} presents the leading 45 settlements across the Maurya Empire ordered by peak demographic scale descending, detailing coordinates, provincial attribution, chronological occupation span and benchmark population series.

The urban apex was led by Delhi (Indraprastha, 175,95k peak), Varanasi (146,62k peak), and the imperial capital of Pataliputra (Patna, 146,62k peak) [@Hussain2026Geopolitic]. Along the northwestern arterial route of Uttarapatha, major urban agglomerations at Lahore (117,3k peak), Multan (68,42k peak), Peshawar (63,54k peak) and Taxila (48,88k peak) coordinated military logistics, trans-Eurasian trade and provincial administration [@Morris2019Evidence]. In western India, Ujjayini (63,54k peak) anchored Avantiratha, supported by the commercial port of Bharuch (39,1k peak) on the Narmada estuary and the religious-political centre of Vidisha (29,32k peak) [@Dwivedi2021Tools].

In the eastern delta, the fortress of Sisupalgarh (29,32k peak) in Kalinga and Mahasthangarh (34,21k peak) in northern Bengal represented premier regional bastions commanding fertile agricultural catchments and maritime trade routes [@Yule2009Sisupalgar; @Rashid2020Search]. In the southern Deccan, major commercial nodes at Kanchipuram (58,44k peak) and Sopara (14,66k peak) maintained maritime ties across the Indian Ocean [@Bopearachchi2022Indian; @Neelakantan2025Digital].

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Province</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">260BC Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">250k</td><td class="crd-td">250k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">90k</td><td class="crd-td">90k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">75k</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">60k</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>Taxila</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">33,75 N, 72,79 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">48,9k</td><td class="crd-td">48,9k</td></tr>
<tr><td class="crd-td"><strong>Kaushambi</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">25,34 N, 81,39 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">39,1k</td><td class="crd-td">39,1k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">35k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Rajgir</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">25,03 N, 85,42 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">34,2k</td><td class="crd-td">34,2k</td></tr>
<tr><td class="crd-td"><strong>Shravasti</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">27,51 N, 82,05 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">34,2k</td><td class="crd-td">34,2k</td></tr>
<tr><td class="crd-td"><strong>Mahasthangarh</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">24,96 N, 89,34 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">34,2k</td><td class="crd-td">34,2k</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Avantiratha</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">32,5k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">32,5k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td"><strong>Kanchipuram</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">12,83 N, 79,7 E</td><td class="crd-td">185BC</td><td class="crd-td">30k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vaishali</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">25,99 N, 85,13 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">29,3k</td><td class="crd-td">29,3k</td></tr>
<tr><td class="crd-td"><strong>Vidisha</strong></td><td class="crd-td">Avantiratha</td><td class="crd-td">23,52 N, 77,81 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">29,3k</td><td class="crd-td">29,3k</td></tr>
<tr><td class="crd-td"><strong>Charsadda</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">34,15 N, 71,73 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">29,3k</td><td class="crd-td">29,3k</td></tr>
<tr><td class="crd-td"><strong>Sisupalgarh</strong></td><td class="crd-td">Kalinga</td><td class="crd-td">20,23 N, 85,85 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">29,3k</td><td class="crd-td">29,3k</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">27,49 N, 77,67 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">25k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Tamralipti</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">22,29 N, 87,92 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">24,4k</td><td class="crd-td">24,4k</td></tr>
<tr><td class="crd-td"><strong>Chandraketugarh</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">22,7 N, 88,68 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">24,4k</td><td class="crd-td">24,4k</td></tr>
<tr><td class="crd-td"><strong>Banbhore</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">24,75 N, 67,52 E</td><td class="crd-td">300BC - 185BC</td><td class="crd-td">23,9k</td><td class="crd-td">23,5k</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">Avantiratha</td><td class="crd-td">21,7 N, 73 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">20k</td><td class="crd-td">20k</td></tr>
<tr><td class="crd-td"><strong>Ahichhatra</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">28,37 N, 79,13 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">19,6k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Wari-Bateshwar</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">24,09 N, 90,82 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">19,6k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Ayodhya</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">26,79 N, 82,19 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">17,5k</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">32,49 N, 74,53 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">17,5k</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>Bhagalpur</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">25,25 N, 86,95 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">15k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Guwahati</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">26,18 N, 91,73 E</td><td class="crd-td">300BC - 185BC</td><td class="crd-td">15k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Hastinapura</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">29,16 N, 78 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">14,7k</td><td class="crd-td">14,7k</td></tr>
<tr><td class="crd-td"><strong>Tilaurakot</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">27,57 N, 83,05 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">14,7k</td><td class="crd-td">14,7k</td></tr>
<tr><td class="crd-td"><strong>Sopara</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">19,41 N, 72,81 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">14,7k</td><td class="crd-td">14,7k</td></tr>
<tr><td class="crd-td"><strong>Uch</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">29,24 N, 71,06 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">12,5k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>Jhelum</strong></td><td class="crd-td">Uttarapatha</td><td class="crd-td">32,93 N, 73,73 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">10k</td><td class="crd-td">10k</td></tr>
<tr><td class="crd-td"><strong>Atranjikhera</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">27,58 N, 78,66 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">9,8k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Kampilya</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">27,62 N, 79,28 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">9,8k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Kushinagar</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">26,74 N, 83,88 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">9,8k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Nagari</strong></td><td class="crd-td">Avantiratha</td><td class="crd-td">25,02 N, 74,72 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">9,3k</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>Lumbini</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">27,47 N, 83,28 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">7,8k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Chahgarh</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">21,19 N, 77,47 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">7k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Dhamek Stupa</strong></td><td class="crd-td">Prachya and Imperial Core</td><td class="crd-td">25,38 N, 83,02 E</td><td class="crd-td">185BC</td><td class="crd-td">5,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Taular (Walni khurd)</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">21,22 N, 77,42 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">5,6k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Adyal</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">20,82 N, 79,53 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">5,6k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Bhivsena</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">20,78 N, 79,55 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">5,6k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Pauni (ghat)</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">20,8 N, 79,64 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">5,6k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Kotilingala</strong></td><td class="crd-td">Dakshinapatha</td><td class="crd-td">18,86 N, 79,2 E</td><td class="crd-td">322BC - 185BC</td><td class="crd-td">5,6k</td><td class="crd-td">5,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across the Maurya Empire (322BC to 185BC).</figcaption>
</figure>

# Sources
