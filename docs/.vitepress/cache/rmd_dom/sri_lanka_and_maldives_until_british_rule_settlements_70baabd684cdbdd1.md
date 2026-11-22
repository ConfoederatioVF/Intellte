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
hero_caption: "Spatial distribution of 142 catalogued historical settlements and regional hydrological catchments across Sri Lanka and the Maldives archipelago (63.718 km²) from 10000BC to 1796AD."
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

This gazetteer catalogues WGS84 geographic coordinates, sub-regional allocations, occupation spans and benchmark population trajectories for 142 historical settlements across Sri Lanka and the Maldives archipelago (63.718 km² across 768 active 5-arcminute terrestrial cells) from 10000BC to 1796AD. Spanning five physiographic and historical divisions, the gazetteer encompasses diverse architectural and settlement traditions: monumental brick agro-urban metropolises in the dry zone lowlands, insular limestone port towns on the Jaffna peninsula, granite rock citadels and rain-fed wet-paddy market centres in the southwest wet zone and Kandyan highlands, fortified riverine capitals in Ruhuna and coral-stone atoll trading ports across the Maldives.

Settlement populations range from early prehistoric rock-shelter stations at Batadombalena and coastal dune camps on the Iranamadu formation to classical hydraulic capitals at Anuradhapura (54k peak in 500AD to 1000AD) and Polonnaruwa (39,6k in 1200AD), international Indian Ocean emporia at Mantai (19k in 500AD) and Trincomalee (15,8k in 1796AD), and early modern maritime capitals at Colombo (49,7k in 1796AD), Jaffna (34,8k in 1796AD), Galle (22,1k in 1796AD), Kandy (21,4k in 1796AD) and Malé (12k in 1796AD). Every catalogued locality reconciles against 285 candidate records in the INDUS source ledger alongside 143 documented exclusions (predominantly duplicate survey aliases within a 2,2 km spatial radius and non-habitation features).

By linking georeferenced settlement series with regional hydrography, reservoir cascade registries, speleothem paleoclimate records and colonial cadastral rolls, this gazetteer establishes an archaeological baseline for historical nucleation in southern South Asia. Settlement subtraction isolates nucleated urban centres from dasymetrically distributed rural populations, ensuring that demographic reconstructions reflect genuine archaeological mound and settlement extents rather than arbitrary spatial projections.

# Background

Historical settlement patterns in Sri Lanka and the Maldives reflect sophisticated adaptations to regional hydrology, geomorphology and maritime trade geography [@Abeywardana2018Ancient; @Feener2021Maldives]. Four primary architectural and functional traditions characterise the regional settlement record:
1. Monastic-hydraulic metropolises: In the northern and north-central dry zone lowlands, urban capitals were integrated with extensive cascade reservoirs (*ellangawa*) and monastic complexes [@Abeywardana2018Ancient; @Hawken2021Long]. Anuradhapura and Polonnaruwa featured massive brick stupas, stone-lined baths, monastic hospitals and residential quarters served by stone sluices and trans-basin feeder canals [@Abeywardana2019Evolution; @Muditha2026Hydraulic].
2. Rock-fortress citadels and wet zone hill capitals: In the granite inselbergs and river valleys of the southwest wet zone and interior highlands, royal dynasties constructed fortified redoubts, including Sigiriya, Yapahuwa, Kurunegala, Dambadeniya, Gampola and Kandy (Senkadagala) [@DameronNandan2003World; @Coningham2025Village]. These centres leveraged steep topography and terraced wet-paddy farming for defensive resilience against foreign invasions [@Kelegama2023Lure].
3. Maritime port emporia and coastal fortresses: Along strategic maritime passages, trading ports mediated Indian Ocean commercial exchange [@Bohingamuwa2017Lanka; @Green2025Indian]. Mantai on the Gulf of Mannar, Jambukola Pattana and Jaffna (Nallur) in the north, Gokanna (Trincomalee) on the east coast, and Colombo and Galle in the southwest developed specialized warehouse quarters, cosmopolitan merchant communities and coastal bastion fortifications [@Zhang2023Chinese; @Anthony2010Pastoral].
4. Coral atoll settlements: Across the Maldives archipelago, human communities adapted to small coral islets through pelagic tuna fishing, coconut agroforestry and cowrie shell harvesting [@Feener2021Maldives; @MD2023Spatial]. Settlement centered on Malé, where coral-stone mosques, royal residences and marine anchorages coordinated archipelago governance [@Cui2025Religion; @Gippert2024Written].

# Methodology

Candidate localities in the INDUS source ledger were evaluated using published archaeological survey registers, excavation reports, colonial cadastral archives (*tombos*) and heritage inventories [@Abeywardana2018Ancient; @Coningham2025Village; @Feener2021Maldives]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against satellite imagery and national cartography.
- Documented ceramic, epigraphic, numismatic or historical chronicle evidence spanning prehistoric to early modern eras.
- Area-based, house-mound or historical census demographic estimations calibrated to settlement scale.

Where multiple archaeological survey points fall within 2,2 km of a primary historical centre, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features, such as isolated rock inscriptions, mineral quarries and ephemeral forager scatters, are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 142 catalogued settlements and summed site peaks across the five sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Rajarata Dry Zone</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Jaffna Peninsula</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Kotte and Kandyan Wet Zone</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Ruhuna and Eastern Littoral</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Maldives Archipelago</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">1267</td><td class="crd-td">100%</td><td class="crd-td">1,37M</td><td class="crd-td">Anuradhapura (54k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 142 catalogued settlements and summed site peaks across Sri Lanka and the Maldives.</figcaption>
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
<tr><td class="crd-td"><strong>Anuradhapura</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,35 N, 80,4 E</td><td class="crd-td">500BC to 1000AD</td><td class="crd-td">54k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Colombo</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,93 N, 79,86 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">49,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Polonnaruwa</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">7,94 N, 81 E</td><td class="crd-td">1000AD to 1200AD</td><td class="crd-td">39,6k</td><td class="crd-td">39,6k</td></tr>
<tr><td class="crd-td"><strong>Jaffna</strong></td><td class="crd-td">Jaffna Peninsula and Northern Littoral</td><td class="crd-td">9,66 N, 80,03 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">34,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gampaha</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">7,09 N, 80 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">29,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dehiwala-Mount Lavinia</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,84 N, 79,88 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">29,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Maharagama</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,85 N, 79,93 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">26,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tissamaharama</strong></td><td class="crd-td">Ruhuna Southeast and Eastern Littoral</td><td class="crd-td">6,28 N, 81,29 E</td><td class="crd-td">0AD to 1000AD</td><td class="crd-td">23,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Moratuwa</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,77 N, 79,88 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">22,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Galle</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,03 N, 80,22 E</td><td class="crd-td">1700AD to 1796AD</td><td class="crd-td">22,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Beruwala</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,47 N, 79,98 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">22k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Negombo</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">7,21 N, 79,84 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">21,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kandy</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">7,29 N, 80,63 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">21,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mantai</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,96 N, 79,95 E</td><td class="crd-td">0AD to 1000AD</td><td class="crd-td">19k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sri Jayawardenepura Kotte</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,9 N, 79,92 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">18k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Trincomalee</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,57 N, 81,23 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">15,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kalmunai</strong></td><td class="crd-td">Ruhuna Southeast and Eastern Littoral</td><td class="crd-td">7,42 N, 81,82 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">14,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Batticaloa</strong></td><td class="crd-td">Ruhuna Southeast and Eastern Littoral</td><td class="crd-td">7,72 N, 81,7 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">12,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Malé</strong></td><td class="crd-td">Maldives Archipelago</td><td class="crd-td">4,17 N, 73,51 E</td><td class="crd-td">0AD to 1796AD</td><td class="crd-td">12k</td><td class="crd-td">9,4k</td></tr>
<tr><td class="crd-td"><strong>Jaffna</strong></td><td class="crd-td">Jaffna Peninsula and Northern Littoral</td><td class="crd-td">9,66 N, 80,02 E</td><td class="crd-td">1700AD to 1796AD</td><td class="crd-td">11,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Katunayaka</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">7,17 N, 79,89 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">11,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vavuniya</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,75 N, 80,48 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">10,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ambalantota</strong></td><td class="crd-td">Ruhuna Southeast and Eastern Littoral</td><td class="crd-td">6,12 N, 81,02 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">10,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sigiriya</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">7,96 N, 80,76 E</td><td class="crd-td">500AD</td><td class="crd-td">10,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Matara</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">5,95 N, 80,53 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">9,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dambulla</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">7,85 N, 80,65 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">8,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kalpitiya</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,17 N, 79,72 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">8,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kolonnawa</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,93 N, 79,88 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">8,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kotikawatta</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,93 N, 79,91 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">8,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Balana Fort</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">7,27 N, 80,48 E</td><td class="crd-td">1700AD to 1796AD</td><td class="crd-td">8,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Beliatta</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,05 N, 80,73 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">7,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hendala</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,99 N, 79,88 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">7,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ambalangoda</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,24 N, 80,05 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">7,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Buttala</strong></td><td class="crd-td">Ruhuna Southeast and Eastern Littoral</td><td class="crd-td">6,76 N, 81,25 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">7,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Badulla</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,98 N, 81,06 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">6,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ratnapura</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,69 N, 80,4 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">6,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pottuvil</strong></td><td class="crd-td">Ruhuna Southeast and Eastern Littoral</td><td class="crd-td">6,88 N, 81,83 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">6,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Puttalam</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,04 N, 79,83 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">6,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Devinuwara</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">5,93 N, 80,59 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ampara</strong></td><td class="crd-td">Ruhuna Southeast and Eastern Littoral</td><td class="crd-td">7,3 N, 81,68 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">5,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Welisara</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">7,03 N, 79,9 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">5,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Balapitiya</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">6,29 N, 80,04 E</td><td class="crd-td">500AD</td><td class="crd-td">5,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Wilgamvehera Maha Seya</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">8,4 N, 81,31 E</td><td class="crd-td">500BC to 1200AD</td><td class="crd-td">5,3k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Devanagala Temple</strong></td><td class="crd-td">Kotte and Southwest Wet Zone</td><td class="crd-td">7,22 N, 80,47 E</td><td class="crd-td">500BC to 1200AD</td><td class="crd-td">5,3k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Mullaitivu(මූලදීපය)</strong></td><td class="crd-td">Rajarata Dry Zone</td><td class="crd-td">9,28 N, 80,8 E</td><td class="crd-td">1500AD to 1796AD</td><td class="crd-td">5,2k</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 historical settlements ordered by peak population across Sri Lanka and the Maldives (10000BC to 1796AD).</figcaption>
</figure>

The rank-size hierarchy across 142 catalogued settlements conforms to a power-law distribution with Pareto exponent $\alpha = 1{,}26$ ($R^2 = 0{,}97$), reflecting a well-integrated urban system anchored by primary metropolitan capitals and balanced secondary trading emporia.

## Sub-Regional Settlement Catalogues

### Rajarata Dry Zone

The northern and north-central lowlands catalogue 39 historical settlements along the Malvathu, Kala, Yan and Mahaweli river basins [@Abeywardana2018Ancient; @Hawken2021Long]. Anuradhapura was the classical capital (54k peak), commanding extensive monastic precincts and municipal reservoirs. Polonnaruwa succeeded as mediaeval capital (39,6k peak in 1200AD), anchored by the Sea of Parakrama. Mantai (19k peak in 500AD) operated as the primary northwestern international trade emporium, while Trincomalee (15,8k peak in 1796AD) served as a natural deep-water naval harbour on the Bay of Bengal. Sigiriya (10,4k peak in 500AD) functioned as a monumental fifth-century rock citadel.

### Jaffna Peninsula and Northern Littoral

The northern karst limestone shelf catalogues 13 settlements [@Manogaran1987Ethnic; @Anthony2010Pastoral]. Jaffna (Nallur) was the capital of the Aryacakravarti kingdom and colonial port (34,8k peak in 1796AD). Kantarodai represented an early historic urban town with Buddhist stupas dating to the first millennium BC. Kanathra island (3k peak) and Delft Island supported maritime fisheries and horse breeding.

### Kotte, Southwest Wet Zone and Kandyan Highlands

The southwest and central highlands catalogue 51 settlements [@Coningham2025Village; @Kelegama2023Lure]. Colombo expanded from a coastal trading roadstead into a colonial capital (49,7k peak in 1796AD). Galle served as the primary southern fortified port (22,1k peak in 1796AD). Kandy (Senkadagala) was the royal highland capital (21,4k peak in 1796AD). Intermediate royal centres included Kotte, Dambadeniya, Kurunegala, Yapahuwa and Gampola, which sheltered the monarchy during the mediaeval relocation.

### Ruhuna Southeast and Eastern Littoral

The southeastern dry zone catalogues 24 settlements [@Coningham2025Village; @Sutcliffe2011Historical]. Tissamaharama (ancient Mahagama) anchored the regional hydraulic core (23,3k peak), supported by the Tissa and Yoda tanks. Other key centres included Batticaloa (Puliyanthivu), Tarachoi (4,1k peak), Pottuvil and Magama, coordinating coastal trade and irrigated farming along the Kirindi Oya and Menik Ganga.

### Maldives Archipelago

The coral atolls catalogue 15 settlements spanning the Chagos-Laccadive chain [@Feener2021Maldives; @Cui2025Religion]. Malé was the royal sultanate capital and port (12k peak in 1796AD). Southern atoll centres included Gan and Fuvahmulah, featuring monumental pre-Islamic Buddhist stupas (*havitta*) and mediaeval coral-stone Friday mosques [@Feener2021Maldives]. Utheemu in the north was the ancestral seat of the Utheemu dynasty, which expelled Portuguese occupants in 1573AD [@Cui2025Religion].

# Limitations

Settlement documentation across Sri Lanka and the Maldives remains constrained by distinct preservation and recovery factors:
1. Alluvial siltation and tank sedimentation: active sediment deposition in dry zone reservoir beds has buried ancient canal off-takes and field hamlets, obscuring lower-tier settlements [@Abeywardana2018Ancient].
2. Dense tropical vegetation: centuries of forest regrowth over Rajarata after 1250AD enveloped earthen bunds and brick monasteries, requiring aerial surveying and remote sensing for site detection [@Coningham2025Village; @Fernando2011Current].
3. Colonial urban overprinting: continuous occupation in Colombo, Galle and Jaffna altered ancient archaeological deposits, making stratified excavation challenging [@Coningham2025Village].
4. Coral atoll erosion and stone recycling: in the Maldives, limited terrestrial land and coastal storms degraded pre-modern shorelines, while porites coral masonry was continuously recycled across construction phases [@Feener2021Maldives; @MD2023Spatial].

# Conclusion

The INDUS settlement gazetteer synthesises 142 catalogued historical settlements across Sri Lanka and the Maldives, providing an archaeological framework for demographic modeling from 10000BC to 1796AD. By reconciling georeferenced coordinates, structural topologies and population trajectories, this gazetteer distinguishes nucleated urban centres from rural populations, enabling dasymetric surface allocation of agricultural cultivators and demonstrating the resilience of settlement networks across insular South Asia.

# Appendix

The INDUS source ledger audited 285 candidate records, accepting 142 primary settlements and documenting 143 exclusions. Table \ref{tab:excluded} presents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Colombo</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kandy</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Trincomalee</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Malé</strong></td><td class="crd-td">Maldives</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Galle</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Anuradhapura</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Polonnaruwa</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Hendala</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Fuvahmulah</strong></td><td class="crd-td">Maldives</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kalmunai</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Colombo</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Polonnaruwa</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Azanos (river)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Galiboi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Maagrammon</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yatiyana</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Yatiyana</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Yatihena</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Yatawara</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Yakalla</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Yahala</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Yaddigama</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Wilagama</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Wewahamanduwa</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wetiya</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Sri Lanka and Maldives source ledger.</figcaption>
</figure>

# Sources
