---
title: "Settlement Gazetteer of Nepal and Bhutan"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (10000BC to 1816AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: nepal_and_bhutan_until_british_rule_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_nepal_and_bhutan_until_british_rule_spatial.png"
hero_caption: "Spatial distribution of 182 catalogued historical settlements and regional drainage catchments across Nepal and Bhutan (183.712 km²) from 10000BC to 1816AD."
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

This settlement gazetteer catalogues WGS84 geographic coordinates, administrative allocations, foundation chronologies and benchmark demographic trajectories for 1033 historical settlements across Nepal and Bhutan (183.712 km², comprising 2.452 active 5-arcminute terrestrial cells) from 10000BC to 1816AD. Spanning four physiographic divisions, the gazetteer encompasses diverse architectural and structural traditions: dense multi-tiered brick metropolises with paved royal plazas (*durbar*) in the lacustrine basin of the Kathmandu Valley, monumental stone-and-timber fortress-monasteries (*dzongs*) commanding deep glaciated valleys across Bhutan, terraced stone homesteads and hilltop citadels in the Khasa Malla and Kirat highlands, and fortified mud-brick enclosures guarding sub-Himalayan Terai corridors. Settlement sizes range from Iron Age Terai pilgrimage and administrative capitals at Tilaurakot (12,78k peak) and Lumbini (7,69k peak) to mediaeval and early modern metropolises at Kathmandu (60k in 1816AD), Lalitpur (40k in 1816AD), Bhaktapur (27,79k peak in 1200AD), Shravasti (32,58k peak in 200AD), Pilibhit (21,01k in 1816AD) and Bahraich (17,13k in 1816AD). Secondary highland capitals include Sinja (9,92k peak in 1200AD) in the Karnali basin, Gorkha (9,66k peak in 1700AD) and Drukpa monastic bastions at Thimphu (7,93k peak in 1500AD), Punakha (7,27k in 1700AD), Paro (5,78k peak) and Jakar (5,78k peak). Every catalogued locality reconciles against 402 candidate records in the INDUS source ledger alongside 318 documented exclusions (predominantly duplicate survey aliases within a 2,2 km spatial radius and non-habitation ritual shrines). By integrating georeferenced trajectories with regional hydrology and mid-hill terrain constraints, this gazetteer establishes a spatial baseline for historical settlement subtraction and demographic modelling across the central and eastern Himalayas.

# Background

Historical settlement patterns across Nepal and Bhutan reflect creative human adaptations to steep altitudinal gradients, riverine transport corridors and trans-Himalayan commercial routes [@Coningham2021Urban; @Toffin1990Mythical]. Four primary architectural and settlement traditions characterise the regional archaeological record:
1. Multi-tiered Newar brick metropolises: In the Kathmandu Valley, urban nucleations developed around contiguous, multi-storey fired-brick domestic dwellings with carved sal-wood struts and pitched terracotta-tiled roofs [@Toffin1990Mythical; @Gosai2025Ethnograph]. Urban layout was structured around internal courtyards (*chowks*), Buddhist monastic complexes (*baha* and *bahi*), stepped stone water conduits (*dhunge dhara* or *hiti*) and monumental palace squares (*durbar*) housing royal courts and pagoda shrines [@Toffin1990Mythical; @Shrestha2016Traditiona; @Sengupta2017Ruptured].
2. Fortress-monasteries (*dzongs*): Across the valleys of western and central Bhutan, administrative and spiritual life nucleated around monumental *dzongs* erected on defensible spur ridges commanding river confluences [@Ling2016India]. Built of massive tapered rubble masonry, rammed earth and timber without iron nails, these installations combined central temple keeps (*utse*) with administrative blocks housing monk bodies and civil magistrates under the dual *chho-sid-nyi* system [@Ling2016India; @Compagna2026Layered].
3. Hilltop citadels and terraced homesteads: In the western Karnali basin and the eastern Kirat hills, settlements featured stone-and-timber defensive towers (*kot*) perched on ridge tops flanked by loose clusters of farmhouse homesteads [@Hutt1984Nepali; @Parajuli1999Agro]. In the capital of the Khasa Malla empire at Sinja, monumental stone temple structures and carved stone pillars (*deval*) overlooked terraced alluvial floodplains along the Hima River [@Hutt1984Nepali].
4. Sub-Himalayan Terai walled enclosures: Along the southern alluvial fringe bordering the Gangetic plain, early Iron Age and Classical settlements were constructed of kiln-fired and sun-dried mud-bricks surrounded by earthen ramparts and defensive moats [@Coningham2021Urban]. Tilaurakot and Piprahwa controlled access between northern Indian trade arteries and the Himalayan foothills, housing Buddhist monastic fraternities and royal administrative clans [@Coningham2021Urban; @Maskey2024Religious].

# Methodology

Candidate localities in the INDUS source ledger were evaluated using published excavation reports, state archaeological gazetteers, historical travelogues and epigraphic corpora [@Coningham2021Urban; @Toffin1990Mythical; @Hutt1984Nepali]. Inclusion requires:
- Precise WGS84 geographic coordinates verified against regional topography and drainage networks.
- Documented cultural horizons, epigraphic records or historical chronicles confirming sedentary habitation prior to 1816AD.
- Chronological population estimates calibrated to architectural mound extents, room counts, tax lists or colonial historical censuses [@Kieniewicz2020Identifyin; @Compagna2026Layered].

Where multiple survey points fall within a 2,2 km spatial radius of a primary settlement, duplicate coordinates are collapsed as survey aliases. Non-habitation features such as isolated petroglyphs, mountain shrines, battle sites and temporary transhumance pastoral huts are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 1033 catalogued settlements and summed site peaks across the four sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kathmandu Valley and Central Pahad</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Eastern Kirat Hills and Koshi Terai</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Western Khasa Malla and Karnali</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Bhutanese Valleys and Drukpa Dzongs</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">1033</td><td class="crd-td">100%</td><td class="crd-td">2,33M</td><td class="crd-td">Mahasi (80,9k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 182 catalogued settlements and summed site peaks across Nepal and Bhutan.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological bounds were cross-referenced against epigraphic discoveries and historical survey records [@Coningham2021Urban; @Toffin1990Mythical; @Subedi2024Conservati]. In the Kathmandu Valley, over two hundred Sanskrit stone inscriptions dating from the fifth to eighth centuries AD identify specific settlements (*grama*, *dranga*) that evolved into modern urban wards in Kathmandu, Patan and Bhaktapur [@Toffin1990Mythical; @Subedi2024Conservati].

In the southern Terai lowlands, stratigraphic excavations by Coningham and colleagues at Tilaurakot verified continuous habitation spanning the northern black polished ware and post-Mauryan periods, identifying monumental civic gates, brick drainage channels and defensive ditches [@Coningham2021Urban]. In western Nepal, historical Khasa Malla inscriptions recorded by Tucci and subsequent epigraphists anchor the foundation dates and territorial jurisdiction of Sinja, Dullu and surrounding fortresses in the Karnali and Mahakali catchments [@Hutt1984Nepali].

In Bhutan, monastic block-print chronicles (*namthar* and *rgyal-rabs*) record the foundation dates of seventeenth-century *dzongs* under Zhabdrung Ngawang Namgyal, confirming that sites such as Punakha (1637AD), Wangdue Phodrang (1638AD) and Paro Rinpung Dzong (1644AD) replaced earlier mediaeval monastic fiefs [@Ling2016India; @Compagna2026Layered].

# Results

Table \ref{tab:gazetteer} presents the leading 35 historical settlements across Nepal and Bhutan ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1816AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mahasi</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">27,64 N, 81,39 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">80,9k</td><td class="crd-td">80,9k</td></tr>
<tr><td class="crd-td"><strong>Kathmandu</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">27,7 N, 85,31 E</td><td class="crd-td">200AD - 1816AD</td><td class="crd-td">60k</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>Bharatpur</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">27,68 N, 84,43 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">54,6k</td><td class="crd-td">54,6k</td></tr>
<tr><td class="crd-td"><strong>Lalitpur</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">27,67 N, 85,32 E</td><td class="crd-td">200AD - 1816AD</td><td class="crd-td">40k</td><td class="crd-td">40k</td></tr>
<tr><td class="crd-td"><strong>Birganj</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">27,02 N, 84,88 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">39,7k</td><td class="crd-td">39,7k</td></tr>
<tr><td class="crd-td"><strong>Musahri</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">26,93 N, 84,14 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">37k</td><td class="crd-td">37k</td></tr>
<tr><td class="crd-td"><strong>Biratnagar</strong></td><td class="crd-td">Eastern Kirat Hills</td><td class="crd-td">26,48 N, 87,28 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">35,9k</td><td class="crd-td">35,9k</td></tr>
<tr><td class="crd-td"><strong>Shravasti</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">27,51 N, 82,05 E</td><td class="crd-td">500BC - 800AD</td><td class="crd-td">32,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bhaktapur</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">27,67 N, 85,43 E</td><td class="crd-td">800AD - 1816AD</td><td class="crd-td">27,8k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Rajganj</strong></td><td class="crd-td">Bhutanese Himalayan Valleys</td><td class="crd-td">26,56 N, 88,51 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">27,1k</td><td class="crd-td">27,1k</td></tr>
<tr><td class="crd-td"><strong>Ghorahi</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">28,04 N, 82,49 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">23,1k</td><td class="crd-td">23,1k</td></tr>
<tr><td class="crd-td"><strong>Pilibhit</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">28,63 N, 79,8 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">22,9k</td><td class="crd-td">22,9k</td></tr>
<tr><td class="crd-td"><strong>Bahraich</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">27,57 N, 81,59 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">18,6k</td><td class="crd-td">18,6k</td></tr>
<tr><td class="crd-td"><strong>Dabgram</strong></td><td class="crd-td">Bhutanese Himalayan Valleys</td><td class="crd-td">26,7 N, 88,46 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">17,6k</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Butwal</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">27,7 N, 83,45 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">17,5k</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>Dharan</strong></td><td class="crd-td">Eastern Kirat Hills</td><td class="crd-td">26,82 N, 87,27 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">17,2k</td><td class="crd-td">17,2k</td></tr>
<tr><td class="crd-td"><strong>Bettiah</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">26,8 N, 84,5 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">16,9k</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>Dumra</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">26,57 N, 85,52 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">16,6k</td><td class="crd-td">16,6k</td></tr>
<tr><td class="crd-td"><strong>Singiya</strong></td><td class="crd-td">Eastern Kirat Hills</td><td class="crd-td">26,69 N, 87,16 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">16,2k</td><td class="crd-td">16,2k</td></tr>
<tr><td class="crd-td"><strong>Phulwari</strong></td><td class="crd-td">Eastern Kirat Hills</td><td class="crd-td">26,12 N, 87,94 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">16k</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>Bhimdatta</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">28,92 N, 80,33 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">15,5k</td><td class="crd-td">15,5k</td></tr>
<tr><td class="crd-td"><strong>Lahan</strong></td><td class="crd-td">Eastern Kirat Hills</td><td class="crd-td">26,72 N, 86,48 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">15,2k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td"><strong>Dhangadhi</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">28,71 N, 80,58 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">15,1k</td><td class="crd-td">15,1k</td></tr>
<tr><td class="crd-td"><strong>Thakurgaon Sadar</strong></td><td class="crd-td">Eastern Kirat Hills</td><td class="crd-td">26,02 N, 88,47 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">14,9k</td><td class="crd-td">14,9k</td></tr>
<tr><td class="crd-td"><strong>Janakpurdham</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">26,71 N, 85,92 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">14,5k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Kalchini</strong></td><td class="crd-td">Bhutanese Himalayan Valleys</td><td class="crd-td">26,69 N, 89,45 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">12,8k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Tilaurakot</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">27,57 N, 83,05 E</td><td class="crd-td">500BC - 200AD</td><td class="crd-td">12,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hetauda</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">27,42 N, 85,03 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">12,6k</td><td class="crd-td">12,6k</td></tr>
<tr><td class="crd-td"><strong>Madhyapur Thimi</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">27,68 N, 85,39 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">12,3k</td><td class="crd-td">12,3k</td></tr>
<tr><td class="crd-td"><strong>Madhubani</strong></td><td class="crd-td">Kathmandu Valley and Gorkha</td><td class="crd-td">26,35 N, 86,07 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">12,2k</td><td class="crd-td">12,2k</td></tr>
<tr><td class="crd-td"><strong>Darjiling</strong></td><td class="crd-td">Eastern Kirat Hills</td><td class="crd-td">27,03 N, 88,27 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">11,6k</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Balrampur</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">27,43 N, 82,19 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">11,4k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Damak</strong></td><td class="crd-td">Eastern Kirat Hills</td><td class="crd-td">26,63 N, 87,7 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">11,1k</td><td class="crd-td">11,1k</td></tr>
<tr><td class="crd-td"><strong>Itahari</strong></td><td class="crd-td">Eastern Kirat Hills</td><td class="crd-td">26,67 N, 87,28 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">11k</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Nepalgunj</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">28,05 N, 81,62 E</td><td class="crd-td">1500AD - 1816AD</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 35 historical settlements ordered by peak population across Nepal and Bhutan (10000BC to 1816AD).</figcaption>
</figure>

## Regional Settlement Systems

### Kathmandu Valley and Central Pahad

This core division catalogues 91 settlements concentrated in the fertile lacustrine basin of Kathmandu and surrounding mid-hill valleys [@Toffin1990Mythical; @Sengupta2017Ruptured]. Kathmandu (Kantipur) was the primary urban centre, rising from 30k in 200AD to 46,8k in 800AD and attaining 60k by 1700AD and 1816AD as the imperial capital of the Shah dynasty [@Whitmarsh2022Darbar]. Lalitpur (Patan) formed the southern metropolitan node, supporting 40k residents at its seventeenth-century peak with renowned metalcasting and stone-carving guilds [@Toffin1990Mythical]. Bhaktapur (Bhadgaon) anchored the eastern valley, supporting 27,79k in 1200AD and 19,62k in 1816AD, distinguished by its five-storey Nyatapola temple and active woodcarving quarters [@Gosai2025Ethnograph]. In the surrounding hills, Gorkha (9,66k peak in 1700AD) operated as the royal fortress-capital from which the Shah kings launched regional unification, while Tilaurakot (12,78k peak in 200AD) and Lumbini (7,69k peak) anchored ancient pilgrimage and trade routes across the central Terai [@Coningham2021Urban].

### Western Khasa Malla and Karnali Highlands

The western division catalogues 43 settlements distributed across the rugged Karnali, Bheri and Mahakali catchments and adjacent southwestern Terai margins [@Hutt1984Nepali]. Sinja in Jumla was the mediaeval imperial capital of the Khasa Malla realm, supporting 9,92k inhabitants in 1200AD with extensive irrigation terracing along the Hima River [@Hutt1984Nepali]. Along the border with the Gangetic plain, ancient Shravasti commanded southern trade routes, attaining 32,58k in 200AD before contracting in the early mediaeval period. Modernising frontier market towns such as Pilibhit (21,01k in 1816AD) and Bahraich (17,13k in 1816AD) developed as critical collection depots exchanging hill timber, herbs and resin for plains grain and cloth [@Compagna2026Layered].

### Eastern Kirat Hills and Koshi Terai

The eastern division catalogues 25 settlements across the Saptakoshi basin, the Arun gorge and the Morang Terai lowlands [@Kovacs2024Bengal; @Compagna2026Layered]. Inhabited predominantly by Rai and Limbu communities, settlements were traditionally organised into clan territories (*kipat*) around fortified hilltops (*kot*) and sacred river confluences. Kankalini Temple (2,97k peak in 1200AD) and surrounding market hamlets facilitated exchange between the eastern mid-hills and the northern Bengal plains, with settlements expanding into the Morang Terai following late eighteenth-century agricultural clearances [@Compagna2026Layered].

### Bhutanese Valleys and Drukpa Dzongs

The eastern Himalayan division catalogues 23 settlements across the inner valleys of Bhutan [@Ling2016India]. Thimphu was the central administrative seat, supporting 7,93k residents at its 1500AD peak, while Punakha served as the winter capital of the Drukpa theocracy, accommodating 7,27k people in 1700AD and 5,52k in 1816AD [@Ling2016India]. In western Bhutan, Paro (5,78k peak) commanded trade routes over the Tremo La pass into the Chumbi valley of Tibet, while Jakar Dzong in Bumthang (5,78k peak) and Trongsa Dzong (4,74k in 1700AD) governed the central and eastern provinces [@Ling2016India; @Compagna2026Layered].

# Limitations

Settlement documentation across the southern Himalayas remains subject to significant preservation and archival biases:
1. Seismic vulnerability: high-frequency seismic activity along the Himalayan frontal thrust has caused repeated destruction of historical brick and stone architecture, leveling civic structures and obliterating epigraphic markers [@Coningham2021Urban].
2. High-relief erosion and mass wasting: monsoon landslides and seasonal river scouring regularly erode lower alluvial terraces, stripping away rural domestic settlement layers [@Parajuli1999Agro].
3. Perishable construction materials: outside royal palaces, stone temples and monastic *dzongs*, rural domestic architecture relied upon timber, wattle-and-daub and thatch, which leave minimal surface archaeological traces after abandonment [@Gosai2025Ethnograph].
4. Asymmetric archival coverage: historical written documentation is heavily concentrated within the Kathmandu Valley and major Bhutanese monasteries, leaving small agricultural hamlets in the western and eastern mid-hills under-represented in precolonial texts [@Hutt1984Nepali; @Kieniewicz2020Identifyin].

# Conclusion

The INDUS settlement gazetteer synthesises 182 historical localities across Nepal and Bhutan from 10000BC to 1816AD, providing an empirical baseline for regional demographic modelling. By georeferencing urban centres, hill fortresses, monastic *dzongs* and Terai market towns, this catalogue isolates nucleated populations from rural farming communities, enabling dasymetric allocation of agrarian cultivators across the mid-hill landscape and capturing the enduring structural role of intramontane urbanism in Himalayan history.

# Appendix

The INDUS source ledger audited 402 candidate records, resulting in 182 accepted settlements and 220 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kathmandu</strong></td><td class="crd-td">Nepal</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lalitpur</strong></td><td class="crd-td">Nepal</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Thimphu</strong></td><td class="crd-td">Bhutan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Punakha</strong></td><td class="crd-td">Bhutan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Raniganj</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Kapilavastu (I) Tilaurakot</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Piprahwa Stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Piprahwa Stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ramagrama stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ramagrama stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ramagrama stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ramagrama stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ramagrama stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ramagrama stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Pipal GAte</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sagardih fort and stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Sagardih fort and stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Sagardih fort and stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Sagardih fort and stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Sagardih fort and stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Boudhanath</strong></td><td class="crd-td">Nepal</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Nashwar Dobar</strong></td><td class="crd-td">Nepal</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Nandangarh Stupa and Rampa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Nandangarh Stupa and Rampa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lauriya-Areraj Ashoka Pill</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Nepal and Bhutan source ledger.</figcaption>
</figure>

# Sources
